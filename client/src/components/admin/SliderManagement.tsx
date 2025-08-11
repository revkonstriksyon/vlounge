import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Upload } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

const sliderSchema = z.object({
  imageUrl: z.string().min(1, "Image URL is required"),
  titleEn: z.string().min(1, "English title is required"),
  titleFr: z.string().min(1, "French title is required"),
  titleHt: z.string().min(1, "Haitian Creole title is required"),
  subtitleEn: z.string().optional(),
  subtitleFr: z.string().optional(),
  subtitleHt: z.string().optional(),
  buttonTextEn: z.string().optional(),
  buttonTextFr: z.string().optional(),
  buttonTextHt: z.string().optional(),
  buttonLink: z.string().optional(),
  order: z.number().default(0),
  isActive: z.boolean().default(true),
});

type SliderForm = z.infer<typeof sliderSchema>;

export default function SliderManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [uploadingFile, setUploadingFile] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<SliderForm>({
    resolver: zodResolver(sliderSchema),
    defaultValues: {
      imageUrl: "",
      titleEn: "",
      titleFr: "",
      titleHt: "",
      subtitleEn: "",
      subtitleFr: "",
      subtitleHt: "",
      buttonTextEn: "",
      buttonTextFr: "",
      buttonTextHt: "",
      buttonLink: "",
      order: 0,
      isActive: true,
    },
  });

  // Fetch slider items
  const { data: sliderItems = [], isLoading } = useQuery({
    queryKey: ["/api/admin/slider"],
  });

  // Create/Update mutation
  const saveMutation = useMutation({
    mutationFn: async (data: SliderForm) => {
      if (editingItem) {
        return apiRequest(`/api/admin/slider/${editingItem.id}`, {
          method: "PUT",
          body: JSON.stringify(data),
        });
      } else {
        return apiRequest("/api/admin/slider", {
          method: "POST",
          body: JSON.stringify(data),
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/slider"] });
      toast({
        title: "Success",
        description: `Slider item ${editingItem ? "updated" : "created"} successfully`,
      });
      setIsDialogOpen(false);
      setEditingItem(null);
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest(`/api/admin/slider/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/slider"] });
      toast({
        title: "Success",
        description: "Slider item deleted successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // File upload
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadingFile(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const { url } = await response.json();
      form.setValue("imageUrl", url);
      
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setUploadingFile(false);
    }
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    form.reset({
      imageUrl: item.imageUrl,
      titleEn: item.titleEn,
      titleFr: item.titleFr,
      titleHt: item.titleHt,
      subtitleEn: item.subtitleEn || "",
      subtitleFr: item.subtitleFr || "",
      subtitleHt: item.subtitleHt || "",
      buttonTextEn: item.buttonTextEn || "",
      buttonTextFr: item.buttonTextFr || "",
      buttonTextHt: item.buttonTextHt || "",
      buttonLink: item.buttonLink || "",
      order: item.order || 0,
      isActive: item.isActive,
    });
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setEditingItem(null);
    form.reset();
    setIsDialogOpen(true);
  };

  const onSubmit = (data: SliderForm) => {
    saveMutation.mutate(data);
  };

  if (isLoading) {
    return <div className="text-white">Loading slider items...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Slider Management</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAdd} className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-black font-semibold">
              <Plus className="h-4 w-4 mr-2" />
              Add Slide
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-2xl bg-gray-900 border-orange-500/30 text-white max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? "Edit" : "Add"} Slider Item</DialogTitle>
            </DialogHeader>
            
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Upload Image</label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      disabled={uploadingFile}
                      className="bg-gray-800 border-gray-700"
                    />
                    <Button type="button" disabled={uploadingFile} variant="outline">
                      <Upload className="h-4 w-4" />
                      {uploadingFile ? "Uploading..." : "Upload"}
                    </Button>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Image URL" className="bg-gray-800 border-gray-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="titleEn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title (English)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="English title" className="bg-gray-800 border-gray-700" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="titleFr"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title (French)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="French title" className="bg-gray-800 border-gray-700" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="titleHt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title (Creole)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Creole title" className="bg-gray-800 border-gray-700" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="subtitleEn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subtitle (English)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="English subtitle" className="bg-gray-800 border-gray-700" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subtitleFr"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subtitle (French)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="French subtitle" className="bg-gray-800 border-gray-700" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subtitleHt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subtitle (Creole)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Creole subtitle" className="bg-gray-800 border-gray-700" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="order"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Order</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" onChange={(e) => field.onChange(parseInt(e.target.value))} className="bg-gray-800 border-gray-700" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="buttonLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Button Link</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Button link" className="bg-gray-800 border-gray-700" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={saveMutation.isPending}
                    className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-black font-semibold"
                  >
                    {saveMutation.isPending ? "Saving..." : editingItem ? "Update" : "Create"}
                  </Button>
                </div>
              </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sliderItems.map((item: any) => (
          <Card key={item.id} className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="aspect-video bg-gray-800 rounded-md overflow-hidden">
                {item.imageUrl && (
                  <img 
                    src={item.imageUrl} 
                    alt={item.titleEn}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-white text-lg mb-2">{item.titleEn}</CardTitle>
              <p className="text-gray-400 text-sm mb-4">{item.subtitleEn}</p>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs ${item.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {item.isActive ? 'Active' : 'Inactive'}
                </span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => deleteMutation.mutate(item.id)}
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
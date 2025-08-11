import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { 
  LayoutDashboard, 
  LogOut, 
  Image, 
  Menu, 
  Calendar, 
  Camera, 
  Phone,
  Plus,
  Edit,
  Trash2,
  Users,
  Download
} from "lucide-react";

// Import admin components
import SliderManagement from "@/components/admin/SliderManagement";
import MenuManagement from "@/components/admin/MenuManagement";
import EventManagement from "@/components/admin/EventManagement";
import GalleryManagement from "@/components/admin/GalleryManagement";
import ContactManagement from "@/components/admin/ContactManagement";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();

  // Check authentication
  const { data: authData, isLoading } = useQuery({
    queryKey: ["/api/admin/me"],
    queryFn: async () => {
      const response = await fetch("/api/admin/me");
      return response.json();
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.clear();
      toast({
        title: "Logged out successfully",
        description: "You have been signed out of the admin panel",
      });
      setLocation("/admin/login");
    },
  });

  // Content synchronization mutation
  const syncMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/admin/sync-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "All existing content has been imported successfully",
      });
      queryClient.invalidateQueries();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to sync content: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !authData?.isAuthenticated) {
      setLocation("/admin/login");
    }
  }, [authData, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!authData?.isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <LayoutDashboard className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              V Lounge Admin
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, Admin</span>
            <Button
              onClick={() => logoutMutation.mutate()}
              variant="outline"
              size="sm"
              className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
              disabled={logoutMutation.isPending}
            >
              <LogOut className="h-4 w-4 mr-2" />
              {logoutMutation.isPending ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
          <p className="text-gray-400">Manage your V Lounge website content</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-gray-900/50 border border-orange-500/30">
            <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="slider" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
              <Image className="h-4 w-4 mr-2" />
              Slider
            </TabsTrigger>
            <TabsTrigger value="menu" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
              <Menu className="h-4 w-4 mr-2" />
              Menu
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
              <Calendar className="h-4 w-4 mr-2" />
              Events
            </TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
              <Camera className="h-4 w-4 mr-2" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Hero Slider</CardTitle>
                  <Image className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">3</div>
                  <p className="text-xs text-gray-400">Active slides</p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Menu Items</CardTitle>
                  <Menu className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">45</div>
                  <p className="text-xs text-gray-400">Total items</p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Events</CardTitle>
                  <Calendar className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">2</div>
                  <p className="text-xs text-gray-400">Upcoming events</p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Gallery</CardTitle>
                  <Camera className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">24</div>
                  <p className="text-xs text-gray-400">Total images</p>
                </CardContent>
              </Card>
            </div>

            {/* Content Synchronization Section */}
            <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-white flex items-center">
                  <Download className="h-5 w-5 mr-2 text-orange-500" />
                  Import Existing Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm">
                  Import all existing website content (menu items, gallery images, slider content, and events) 
                  into the CMS for immediate editing. This will populate the admin interface with all current data.
                </p>
                <Button
                  onClick={() => syncMutation.mutate()}
                  disabled={syncMutation.isPending}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {syncMutation.isPending ? "Importing..." : "Import Existing Content"}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-black font-semibold"
                  onClick={() => (document.querySelector('[data-value="slider"]') as HTMLElement)?.click()}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Slide
                </Button>
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-black font-semibold"
                  onClick={() => (document.querySelector('[data-value="menu"]') as HTMLElement)?.click()}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Menu Item
                </Button>
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-black font-semibold"
                  onClick={() => (document.querySelector('[data-value="events"]') as HTMLElement)?.click()}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-black font-semibold"
                  onClick={() => (document.querySelector('[data-value="gallery"]') as HTMLElement)?.click()}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Image
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="slider">
            <SliderManagement />
          </TabsContent>

          <TabsContent value="menu">
            <MenuManagement />
          </TabsContent>

          <TabsContent value="events">
            <EventManagement />
          </TabsContent>

          <TabsContent value="gallery">
            <GalleryManagement />
          </TabsContent>

          <TabsContent value="contact">
            <ContactManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
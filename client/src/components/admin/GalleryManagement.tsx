import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function GalleryManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Gallery Management</h3>
        <Button className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-black font-semibold">
          <Plus className="h-4 w-4 mr-2" />
          Add Image
        </Button>
      </div>

      <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Image Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Gallery management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}
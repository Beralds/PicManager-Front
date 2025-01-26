import { useState } from "react";
import CardCollection from "@/components/own/cardCollection";
import PhotoModel from "@/@types/photoModel";
import ViewPhotoDialog from "@/components/own/viewPhotoDialog";

interface MyPhotosPageProps {
  allowChanges: boolean;
  originalPhotos: PhotoModel[];
}

const MyPhotosPage = ({ allowChanges, originalPhotos }: MyPhotosPageProps) => {
  const [photos, setPhotos] = useState<PhotoModel[]>(originalPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoModel>();
  const [viewPhotoDialogOpen, setViewPhotoDialogOpen] = useState(false);

  const cards = photos.map((photo) => { 
    return { 
      itemId: photo.id, 
      title: photo.title, 
      thumbnailUrl: photo.thumbnailUrl,
    }
  });

  const handleViewItem = (id: number) => {
    const photo = photos.find((photo) => photo.id === id);
    setSelectedPhoto(photo);
    setViewPhotoDialogOpen(true);
  };

  const handleDeleteItem = (id: number) => {
    setPhotos(photos.filter((photo) => photo.id !== id))
  };

  return (
    <>
      <CardCollection
        handleViewItem={handleViewItem}
        handleEditItem={() => console.log()}
        handleDeleteItem={handleDeleteItem}
        allowChanges={ allowChanges }
        collectionType={ "photo" }
        collection={ cards }
      />
      <ViewPhotoDialog
        title={selectedPhoto?.title || ''}
        url={selectedPhoto?.url || ''}
        open={viewPhotoDialogOpen}
        onOpenChange={() => setViewPhotoDialogOpen(!viewPhotoDialogOpen)}
      />
    </>
  )
}

export default MyPhotosPage;
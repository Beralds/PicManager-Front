import { useState } from "react";
import CardCollection from "@/components/own/cardCollection";
import PhotoModel, { nextId } from "@/@types/photoModel";
import ViewPhotoDialog from "@/components/own/viewPhotoDialog";
import NewPhotoDialog from "@/components/own/newPhotoDialog";
import EditPhotoDialog from "@/components/own/editPhotoDialog";

interface MyPhotosPageProps {
  allowChanges: boolean;
  photos: PhotoModel[];
  setPhotos: (photos: PhotoModel[]) => void;
}

const MyPhotosPage = ({ allowChanges, photos, setPhotos }: MyPhotosPageProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoModel>();
  const [viewPhotoDialogOpen, setViewPhotoDialogOpen] = useState(false);
  const [newPhotoDialogOpen, setNewPhotoDialogOpen] = useState(false);
  const [editPhotoDialogOpen, setEditPhotoDialogOpen] = useState(false);

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

  const handleEditItem = (id: number) => {
    const photo = photos.find((photo) => photo.id === id);
    setSelectedPhoto(photo);
    setEditPhotoDialogOpen(true);
  };

  const addPhoto = (title: string, url: string, thumbnailUrl: string) => {
    if (!!title && !!url && !!thumbnailUrl) {
      const newPhoto = {
        id: nextId(photos),
        title: title,
        url: url,
        thumbnailUrl: thumbnailUrl,
      }
  
      setPhotos([newPhoto, ...photos]);
      setNewPhotoDialogOpen(false);
    }
  };

  const updatePhoto = (title: string, url: string, thumbnailUrl: string) => {
    if (!!title && !!url && !!thumbnailUrl) {
      const updatedPhoto = {
        id: selectedPhoto?.id || 0,
        title: title,
        url: url,
        thumbnailUrl: thumbnailUrl,
      }
  
      setPhotos(photos.map((photo) => photo.id === selectedPhoto?.id ? updatedPhoto : photo));
      setNewPhotoDialogOpen(false);
    }
  }

  return (
    <>
      <CardCollection
        handleViewItem={handleViewItem}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
        showNewItemDialog={() => setNewPhotoDialogOpen(true)}
        allowChanges={ allowChanges }
        collectionType={ "photo" }
        collection={ cards }
      />
      <ViewPhotoDialog
        title={selectedPhoto?.title || ''}
        url={selectedPhoto?.url || ''}
        open={viewPhotoDialogOpen}
        onOpenChange={() => setViewPhotoDialogOpen(false)}
      />
      <NewPhotoDialog
        open={newPhotoDialogOpen}
        onOpenChange={() => setNewPhotoDialogOpen(false)}
        onSave={(title, url, thumbnailUrl) => addPhoto(title, url, thumbnailUrl)}
      />
      <EditPhotoDialog
        currentTitle={selectedPhoto?.title || ''}
        currentUrl={selectedPhoto?.url || ''}
        currentThumbnailUrl={selectedPhoto?.thumbnailUrl || ''}
        open={editPhotoDialogOpen}
        onOpenChange={() => setEditPhotoDialogOpen(false)}
        onSave={(title, url, thumbnailUrl) => updatePhoto(title, url, thumbnailUrl)}
      />
    </>
  )
}

export default MyPhotosPage;
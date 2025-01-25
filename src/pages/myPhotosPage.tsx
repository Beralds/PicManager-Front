import { useState } from "react";
import CardCollection from "@/components/own/cardCollection";
import PhotoModel from "@/@types/photoModel";

interface MyPhotosPageProps {
  allowChanges: boolean;
  originalPhotos: PhotoModel[];
}

const MyPhotosPage = ({ allowChanges, originalPhotos }: MyPhotosPageProps) => {
  const [photos, setPhotos] = useState<PhotoModel[]>(originalPhotos);

  const cards = photos.map((photo) => { 
    return { 
      itemId: photo.id, 
      title: photo.title, 
      thumbnailUrl: photo.thumbnailUrl,
    }
  });

  return (
    <CardCollection
      handleViewItem={() => console.log()}
      handleEditItem={() => console.log()}
      allowChanges={ allowChanges }
      collectionType={ "photo" }
      collection={ cards }
    />
  )
}

export default MyPhotosPage;
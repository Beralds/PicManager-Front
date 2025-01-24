import AlbumModel from "@/@types/albumModel";
import { useEffect, useState } from "react";
import CardCollection from "@/components/own/cardCollection";
import albumService from "@/services/albumService";

interface MyPhotosPageProps {
  allowChanges: boolean;
}

const MyPhotosPage = ({ allowChanges }: MyPhotosPageProps) => {
  const [photos, setPhotos] = useState<AlbumModel[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await albumService.getAlbumPhotos(1);
      setPhotos(photos);
    }
    
    getPhotos();
  })

  const cards = photos.map((album) => { return { itemId: album.id, title: album.title}});

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
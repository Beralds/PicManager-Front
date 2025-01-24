import AlbumModel from "@/@types/albumModel";
import userService from "@/services/userService";
import { useEffect, useState } from "react";
import CardCollection from "@/components/own/cardCollection";

interface MyAlbumsPageProps {
  allowChanges: boolean;
}

const MyAlbumsPage = ({ allowChanges }: MyAlbumsPageProps) => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);

  useEffect(() => {
    const getAlbums = async () => {
      const albums = await userService.getUserAlbums(1);
      setAlbums(albums);
    }
    
    getAlbums();
  })

  const cards = albums.map((album) => { return { itemId: album.id, title: album.title}});

  return (
    <CardCollection
      handleViewItem={() => console.log()}
      handleEditItem={() => console.log()}
      allowChanges={ allowChanges }
      collectionType={ "album" }
      collection={ cards }
    />
  )
}

export default MyAlbumsPage;
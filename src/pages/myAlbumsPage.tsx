import AlbumModel from "@/@types/albumModel";
import userService from "@/services/userService";
import { useEffect, useState } from "react";
import CardCollection from "@/components/own/cardCollection";

interface MyAlbumsPageProps {
  allowChanges: boolean;
  handleSelectAlbum: (albumId: number) => void;
}

const MyAlbumsPage = ({ allowChanges, handleSelectAlbum }: MyAlbumsPageProps) => {
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
      handleViewItem={handleSelectAlbum}
      handleEditItem={handleSelectAlbum}
      allowChanges={ allowChanges }
      collectionType={ "album" }
      collection={ cards }
    />
  )
}

export default MyAlbumsPage;
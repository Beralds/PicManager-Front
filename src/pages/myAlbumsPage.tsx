import AlbumModel from "@/@types/albumModel";
import userService from "@/services/userService";
import { useEffect, useState } from "react";
import CardCollection from "@/components/own/cardCollection";

interface MyAlbumsPageProps {
  allowChanges: boolean;
  handleSelectAlbum: (album: AlbumModel) => void;
}

const MyAlbumsPage = ({ allowChanges, handleSelectAlbum }: MyAlbumsPageProps) => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const selectAlbum = (albumId: number) => {
    const selectedAlbum = 
      albums.find((album) => album.id === albumId) || { userId: 0, id: 0, title: '', photos: [] };

    handleSelectAlbum(selectedAlbum);
  };

  useEffect(() => {
    const getAlbums = async () => {
      const albums = await userService.getUserAlbums(1);
      setAlbums(albums);
    }
    
    getAlbums();
  }, [])

  const cards = albums.map((album) => { return { itemId: album.id, title: album.title}});

  return (
    <CardCollection
      handleViewItem={selectAlbum}
      handleEditItem={selectAlbum}
      allowChanges={ allowChanges }
      collectionType={ "album" }
      collection={ cards }
    />
  )
}

export default MyAlbumsPage;
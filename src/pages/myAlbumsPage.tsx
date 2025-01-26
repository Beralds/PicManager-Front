import AlbumModel from "@/@types/albumModel";
import userService from "@/services/userService";
import { useEffect, useState } from "react";
import CardCollection from "@/components/own/cardCollection";

interface MyAlbumsPageProps {
  allowChanges: boolean;
  handleSelectAlbum: (album: AlbumModel) => void;
  selectedUserId: number;
}

const MyAlbumsPage = ({ allowChanges, handleSelectAlbum, selectedUserId }: MyAlbumsPageProps) => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const selectAlbum = (albumId: number) => {
    const selectedAlbum = 
      albums.find((album) => album.id === albumId) || { userId: 0, id: 0, title: '', photos: [] };

    handleSelectAlbum(selectedAlbum);
  };

  useEffect(() => {
    const getAlbums = async () => {
      const albums = await userService.getUserAlbums(selectedUserId);
      setAlbums(albums);
    }
    
    getAlbums();
  }, [])

  const cards = albums.map((album) => { return { itemId: album.id, title: album.title}});

  const handleDeleteItem = (id: number) => {
    setAlbums(albums.filter((album) => album.id !== id))
  };

  return (
    <CardCollection
      handleViewItem={selectAlbum}
      handleEditItem={selectAlbum}
      handleDeleteItem={handleDeleteItem}
      allowChanges={ allowChanges }
      collectionType={ "album" }
      collection={ cards }
    />
  )
}

export default MyAlbumsPage;
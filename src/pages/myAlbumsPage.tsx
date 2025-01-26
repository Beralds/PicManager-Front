import AlbumModel, { nextId } from "@/@types/albumModel";
import { useState } from "react";
import CardCollection from "@/components/own/cardCollection";
import NewAlbumDialog from "@/components/own/newAlbumDialog";

interface MyAlbumsPageProps {
  allowChanges: boolean;
  handleSelectAlbum: (album: AlbumModel) => void;
  selectedUserId: number;
  albums: AlbumModel[];
  setAlbums: (albums: AlbumModel[]) => void;
}

const MyAlbumsPage = ({ 
    allowChanges, 
    handleSelectAlbum, 
    selectedUserId, 
    albums, 
    setAlbums 
  }: MyAlbumsPageProps) => {
  const [newAlbumDialogOpen, setNewAlbumDialogOpen] = useState(false);

  const selectAlbum = (albumId: number) => {
    const selectedAlbum = 
      albums.find((album) => album.id === albumId) || { userId: 0, id: 0, title: '', photos: [] };

    handleSelectAlbum(selectedAlbum);
  };

  const cards = albums.map((album) => { return { itemId: album.id, title: album.title}});

  const handleDeleteItem = (id: number) => {
    setAlbums(albums.filter((album) => album.id !== id))
  };

  const addAlbum = (title: string) => {
    if (title) {
      const newAlbum = {
        id: nextId(albums),
        userId: selectedUserId,
        title: title,
        photos: [],
      };
  
      setAlbums([newAlbum, ...albums]);
      setNewAlbumDialogOpen(false);
    }
  };

  return (
    <>
      <CardCollection
        handleViewItem={selectAlbum}
        handleEditItem={selectAlbum}
        handleDeleteItem={handleDeleteItem}
        showNewItemDialog={() => setNewAlbumDialogOpen(true)}
        allowChanges={ allowChanges }
        collectionType={ "album" }
        collection={ cards }
      />
      <NewAlbumDialog
        open={newAlbumDialogOpen}
        onOpenChange={() => setNewAlbumDialogOpen(false)}
        onSave={(title) => addAlbum(title)}
      />
    </>
  )
}

export default MyAlbumsPage;
import AlbumModel, { nextId } from "@/@types/albumModel";
import { useState } from "react";
import CardCollection from "@/components/own/cardCollection";
import NewAlbumDialog from "@/components/own/newAlbumDialog";
import EditAlbumDialog from "@/components/own/editAlbumDialog";

interface MyAlbumsPageProps {
  allowChanges: boolean;
  handleViewAlbum: (album: AlbumModel) => void;
  handleSelectAlbum: (album: AlbumModel) => void;
  selectedUserId: number;
  selectedAlbum?: AlbumModel;
  albums: AlbumModel[];
  setAlbums: (albums: AlbumModel[]) => void;
}

const MyAlbumsPage = ({ 
    allowChanges, 
    handleViewAlbum, 
    handleSelectAlbum, 
    selectedUserId,
    selectedAlbum,
    albums, 
    setAlbums 
  }: MyAlbumsPageProps) => {
  const [newAlbumDialogOpen, setNewAlbumDialogOpen] = useState(false);
  const [editAlbumDialogOpen, setEditAlbumDialogOpen] = useState(false);

  const viewAlbum = (albumId: number) => {
    const selectedAlbum = 
      albums.find((album) => album.id === albumId) || { userId: 0, id: 0, title: '', photos: [] };

    handleViewAlbum(selectedAlbum);
  };

  const editAlbum = (albumId: number) => {
    const selectedAlbum = 
      albums.find((album) => album.id === albumId) || { userId: 0, id: 0, title: '', photos: [] };

    handleSelectAlbum(selectedAlbum);
    setEditAlbumDialogOpen(true);
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

  const updateAlbum = (title: string) => {
    if (!!title && !!selectedAlbum) {
      const updatedAlbum = {
        ...selectedAlbum,
        title: title,
      };
  
      setAlbums(albums.map((album) => album.id === selectedAlbum.id ? updatedAlbum : album));
      setEditAlbumDialogOpen(false);
    }
  };

  return (
    <>
      <CardCollection
        handleViewItem={viewAlbum}
        handleEditItem={editAlbum}
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
      <EditAlbumDialog
        currentTitle={selectedAlbum?.title || ''}
        open={editAlbumDialogOpen}
        onOpenChange={() => setEditAlbumDialogOpen(false)}
        onSave={(title) => updateAlbum(title)}
      />
    </>
  )
}

export default MyAlbumsPage;
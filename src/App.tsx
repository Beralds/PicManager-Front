import { useState } from "react";
import LandingPage from "./pages/landingPage";
import MyUsersPage from "./pages/myUsersPage";
import UserModel from "./@types/userModel";
import MyAlbumsPage from "./pages/myAlbumsPage";
import { Page } from "./enums/pages";
import MyPhotosPage from "./pages/myPhotosPage";
import Header from "./components/own/header";
import AlbumModel from "./@types/albumModel";
import PhotoModel from "./@types/photoModel";
import userService from "./services/userService";

export function App() {
  const [currentPage, setCurrentPage] = useState(Page.Landing);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserModel>();
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumModel>();
  const allowChanges = currentUserEmail === selectedUser?.email;

  const [albums, setAlbums] = useState<AlbumModel[]>([]);

  const handleSignIn = (userEmail: string) => {
    setCurrentUserEmail(userEmail);
    setCurrentPage(Page.Users);
  }
  const handleSignOff = () => {
    setCurrentUserEmail('');
    setCurrentPage(Page.Landing);
  }
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  }
  const handleSelectUser = async (user: UserModel) => {
    const albums = await userService.getUserAlbums(user.id);
    setAlbums(albums);
  
    setSelectedUser(user);
    setCurrentPage(Page.Albums);
  }
  const handleSelectAlbum = (album: AlbumModel) => {
    setSelectedAlbum(album);
    setCurrentPage(Page.Photos);
  }
  const updateSelectedAlbumPhotos = (photos: PhotoModel[]) => {
    if(selectedAlbum) {
      const updatedAlbum = { ...selectedAlbum, photos: photos };
      setSelectedAlbum(updatedAlbum);
      setAlbums(albums.map((album) => album.id === selectedAlbum.id ? updatedAlbum : album));
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      { currentPage !== Page.Landing ? 
        <Header
          currentPageTitle={Page[currentPage]}
          handlePreviousPage={handlePreviousPage}
          handleSignOff={handleSignOff}
          showPreviousPageButton={currentPage > Page.Users}
        /> :  null }
      { currentPage === Page.Landing ? 
        <LandingPage 
          handleSubmit={handleSignIn} 
        /> :  null }
      { currentPage === Page.Users ? 
        <MyUsersPage 
          handleOpenUserAlbums={handleSelectUser} 
        /> :  null }
      { currentPage === Page.Albums ? 
        <MyAlbumsPage 
          allowChanges={allowChanges}
          handleSelectAlbum={handleSelectAlbum}
          selectedUserId={selectedUser?.id || 0}
          albums={albums}
          setAlbums={setAlbums}
        /> :  null }
      { currentPage === Page.Photos ? 
        <MyPhotosPage 
          allowChanges={allowChanges}
          photos={selectedAlbum?.photos || []}
          setPhotos={updateSelectedAlbumPhotos}
        /> :  null }
    </div>
  )
}

import { useState } from "react";
import LandingPage from "./pages/landingPage";
import MyUsersPage from "./pages/myUsersPage";
import UserModel from "./@types/userModel";
import MyAlbumsPage from "./pages/myAlbumsPage";
import { Page } from "./enums/pages";
import MyPhotosPage from "./pages/myPhotosPage";
import Header from "./components/own/header";
import AlbumModel from "./@types/albumModel";
// import MyPhotosPage from "./pages/myPhotosPage";

export function App() {
  const [currentPage, setCurrentPage] = useState(Page.Landing);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserModel>();
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumModel>();
  const allowChanges = currentUserEmail === selectedUser?.email;

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
  const handleSelectUser = (user: UserModel) => {
    setSelectedUser(user);
    setCurrentPage(Page.Albums);
  }
  const handleSelectAlbum = (album: AlbumModel) => {
    setSelectedAlbum(album);
    setCurrentPage(Page.Photos);
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
        /> :  null }
      { currentPage === Page.Photos ? 
        <MyPhotosPage 
          allowChanges={allowChanges}
          originalPhotos={selectedAlbum?.photos || []}
        /> :  null }
    </div>
  )
}

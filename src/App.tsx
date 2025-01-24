import { useState } from "react";
import LandingPage from "./pages/landingPage";
import MyUsersPage from "./pages/myUsersPage";
import UserModel from "./@types/userModel";
import MyAlbumsPage from "./pages/myAlbumsPage";

export function App() {
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserModel>();
  const [selectedAlbumId, setSelectedAlbumId] = useState<number>();

  return (
    <>
      { !currentUserEmail ? 
        <LandingPage 
          handleSubmit={(userEmail) => setCurrentUserEmail(userEmail)} 
        /> :  null }
      { currentUserEmail && !selectedUser ? 
        <MyUsersPage 
          handleOpenUserAlbum={(user) => setSelectedUser(user)} 
        /> :  null }
      { selectedUser ? 
        <MyAlbumsPage 
          handleOpenAlbum={(albumId) => setSelectedAlbumId(albumId)} 
        /> :  null }
    </>
  )
}

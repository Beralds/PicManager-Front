import { useState } from "react";
import LandingPage from "./pages/landingPage";
import MyUsersPage from "./pages/myUsersPage";
import UserModel from "./@types/userModel";
import MyAlbumsPage from "./pages/myAlbumsPage";
import { Page } from "./enums/pages";
import MyPhotosPage from "./pages/myPhotosPage";
// import MyPhotosPage from "./pages/myPhotosPage";

export function App() {
  const [currentPage, setCurrentPage] = useState(Page.Landing);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserModel>();
  // const [selectedAlbumId, setSelectedAlbumId] = useState<number>();
  const allowChanges = currentUserEmail === selectedUser?.email;

  const handleSignIn = (userEmail: string) => {
    setCurrentUserEmail(userEmail);
    setCurrentPage(Page.Users);
  }
  const handleSelectUser = (user: UserModel) => {
    setSelectedUser(user);
    setCurrentPage(Page.Albums);
  }
  const handleSelectAlbum = () => {
    setCurrentPage(Page.Photos);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gray-950 w-[100%] h-[60px] mb-2 flex justify-between items-center">
        <h1>PIC MANAGER</h1>
        <div>Oi</div>
      </div>
      { currentPage === Page.Landing ? 
        <LandingPage 
          handleSubmit={handleSignIn} 
        /> :  null }
      { currentPage === Page.Users ? 
        <MyUsersPage 
          handleOpenUserAlbum={handleSelectUser} 
        /> :  null }
      { currentPage === Page.Albums ? 
        <MyAlbumsPage 
          allowChanges={allowChanges}
        /> :  null }
      { currentPage === Page.Photos ? 
        <MyPhotosPage 
          allowChanges={allowChanges}
        /> :  null }
    </div>
  )
}

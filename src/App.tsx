import { useState } from "react";
import LandingPage from "./pages/landingPage";
import MyUsersPage from "./pages/myUsersPage";

export function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  return (
    <>
      { !currentUser ? 
        <LandingPage 
          // handleSubmit={() => setCurrentUser(currentUser)} 
          handleSubmit={(user) => setCurrentUser(user)} 
        /> :  null }
      { currentUser ? 
        <MyUsersPage 
          handleOpenUserAlbum={() => setSelectedUser(selectedUser)} 
        /> :  null }
    </>
  )
}

import { useState } from "react";
import LandingPage from "./pages/landingPage";
import MyUsersPage from "./pages/myUsersPage";

export function App() {
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [selectedUserEmail, setSelectedUserEmail] = useState('');

  return (
    <>
      { !currentUserEmail ? 
        <LandingPage 
          handleSubmit={(userEmail) => setCurrentUserEmail(userEmail)} 
        /> :  null }
      { currentUserEmail ? 
        <MyUsersPage 
          handleOpenUserAlbum={(userEmail) => setSelectedUserEmail(userEmail)} 
        /> :  null }
    </>
  )
}

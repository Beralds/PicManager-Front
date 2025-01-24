import { useState } from "react";
import LandingPage from "./components/landingPage";

export function App() {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <LandingPage 
      handleSubmit={() => setCurrentUser(currentUser)} 
    />
  )
}

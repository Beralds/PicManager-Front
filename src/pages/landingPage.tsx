import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

interface LandingPageProps {
  handleSubmit: (userEmail: string) => void;
}

const LandingPage = ({ handleSubmit }: LandingPageProps) => {
  const [email, setEmail] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <h1>Welcome to Pic Manager!</h1>
      <h2>Please, sign in with your e-mail:</h2>
      <Input type='email' placeholder='E-mail' style={{width: '200px'}} onChange={(e) => {setEmail(e.target.value)}} />
      <Button onClick={() => handleSubmit(email)}>Sign in</Button>
    </div>
  )
}

export default LandingPage;
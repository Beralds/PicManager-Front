import { Button } from "./ui/button";
import { Input } from "./ui/input";

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <h1>Welcome to Pic Manager!</h1>
      <h2>Please, sign in with your e-mail:</h2>
      <Input type='email' placeholder='E-mail' style={{width: '200px'}} />
      <Button>Sign in</Button>
    </div>
  )
}

export default LandingPage;
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";


interface LandingPageProps {
  handleSubmit: (userEmail: string) => void;
}

const LandingPage = ({ handleSubmit }: LandingPageProps) => {
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome to Pic Manager!</CardTitle>
          <CardDescription>Please, use your e-mail to sign in:</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">E-mail</Label>
                <Input id="email" type='email' placeholder="User's e-mail" onChange={(e) => {setEmail(e.target.value)}} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => handleSubmit(email)}>Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LandingPage;
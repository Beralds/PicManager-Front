import UserModel from "@/@types/userModel";
import userService from "@/services/userService";
import { useEffect, useState } from "react";

interface MyUsersPageProps {
  handleOpenUserAlbum: (userEmail: string) => void;
}

const MyUsersPage = ({ handleOpenUserAlbum }: MyUsersPageProps) => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await userService.getUsers();
      setUsers(users);
    }
    
    getUsers();
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <h1>My Users Page</h1>
      <h2>Select which user photos you want to open:</h2>
      <ul>
        {users.map((user) => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default MyUsersPage;
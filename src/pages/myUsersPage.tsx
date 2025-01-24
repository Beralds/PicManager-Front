import UserModel from "@/@types/userModel";
import userService from "@/services/userService";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";
import { BookImage } from "lucide-react";


interface MyUsersPageProps {
  handleOpenUserAlbums: (user: UserModel) => void;
}

const MyUsersPage = ({ handleOpenUserAlbums }: MyUsersPageProps) => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await userService.getUsers();
      setUsers(users);
    }
    
    getUsers();
  })

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border rounded">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px] text-center">UserId</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>E-Mail</TableHead>
              <TableHead className="text-center">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) =>
              <TableRow key={`user-${user.id}`}>
                <TableCell className="font-medium text-center">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" onClick={() => handleOpenUserAlbums(user)}>
                          <BookImage />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View user's albums</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default MyUsersPage;
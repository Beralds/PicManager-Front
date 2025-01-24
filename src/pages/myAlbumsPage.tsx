import AlbumModel from "@/@types/albumModel";
import userService from "@/services/userService";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";
import { FilePenLine, FolderSearch, Plus } from "lucide-react";

interface MyAlbumsPageProps {
  handleOpenAlbum: (albumId: number) => void;
}

const MyAlbumsPage = ({ handleOpenAlbum }: MyAlbumsPageProps) => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);

  useEffect(() => {
    const getAlbums = async () => {
      const albums = await userService.getUserAlbums(1);
      setAlbums(albums);
    }
    
    getAlbums();
  })

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border rounded grid grid-cols-4">
        <Card className="w-[200px] h-[160px] m-2 flex flex-col justify-center items-center">
          <CardHeader>
            <CardTitle>New album!</CardTitle>
          </CardHeader>
          <CardContent>
            <Button size="lg">
              <Plus />
            </Button>
          </CardContent>
        </Card>
        {albums.map((album) =>
          <Card className="w-[200px] h-[160px] m-2 flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{`${album.title}`}</CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="mr-2" variant="outline" size="icon" onClick={() => handleOpenAlbum(album.id)}>
                      <FolderSearch />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View photos</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => handleOpenAlbum(album.id)}>
                      <FilePenLine />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit album</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

export default MyAlbumsPage;
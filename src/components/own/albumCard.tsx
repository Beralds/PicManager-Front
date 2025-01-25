import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import CardOptions from "./cardOptions";

interface AlbumCardProps {
  id: number;
  title: string;
  allowChanges: boolean;
  handleViewItem: (itemId: number) => void;
  handleEditItem: (itemId: number) => void;
  handleDeleteItem: (itemId: number) => void;
  width: string;
  height: string;
}

const AlbumCard = ({ 
  id, 
  title,
  allowChanges,
  handleViewItem, 
  handleEditItem, 
  handleDeleteItem,
  width, 
  height }: AlbumCardProps) => {
  return (
    <Card className={`w-[${width}] h-[${height}] m-2 flex flex-col justify-between items-center`} key={id}>
      <CardHeader>
        <CardTitle>{`${title}`}</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <CardOptions
          itemId={id} 
          cardType={"album"} 
          handleViewItem={handleViewItem} 
          handleEditItem={handleEditItem} 
          handleDeleteItem={handleDeleteItem} 
          allowChanges={allowChanges}
        />
      </CardFooter>
    </Card>
  )
}

export default AlbumCard;
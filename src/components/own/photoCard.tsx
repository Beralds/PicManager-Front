import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import CardOptions from "./cardOptions";

interface PhotoCardProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  allowChanges: boolean;
  handleViewItem: (itemId: number) => void;
  handleEditItem: (itemId: number) => void;
  handleDeleteItem: (itemId: number) => void;
  width: string;
  height: string;
}

const PhotoCard = ({ 
  id, 
  title, 
  thumbnailUrl, 
  allowChanges,
  handleViewItem, 
  handleEditItem, 
  handleDeleteItem,
  width, 
  height }: PhotoCardProps) => {
  return (
    <Card className={`w-[${width}] h-[${height}] m-2 flex flex-col justify-between items-center`} key={id}>
      <CardHeader>
        <CardTitle>{`${title}`}</CardTitle>
      </CardHeader>
      <CardContent>
        <figure>
          <img src={thumbnailUrl} alt={title} />
        </figure>
      </CardContent>
      <CardFooter className="flex justify-end">
        <CardOptions
          itemId={id} 
          cardType={"photo"} 
          handleViewItem={handleViewItem} 
          handleEditItem={handleEditItem} 
          handleDeleteItem={handleDeleteItem} 
          allowChanges={allowChanges}
        />
      </CardFooter>
    </Card>
  )
}

export default PhotoCard;
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface NewItemCardProps {
  title: string;
  width: string;
  height: string;
}

const NewItemCard = ({ title, width, height }: NewItemCardProps) => {
  return (
    <Card className={`w-[${width}] h-[${height}] m-2 flex flex-col justify-center items-center`}>
      <CardHeader>
        <CardTitle>{`New ${title}`}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button size="lg">
          <Plus />
        </Button>
      </CardContent>
    </Card>
  )
}

export default NewItemCard;
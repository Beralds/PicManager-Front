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
import CardModel from "@/@types/cardModel";

interface CardCollectionProps {
  handleViewItem: (itemId: number) => void;
  handleEditItem: (itemId: number) => void;
  allowChanges: boolean;
  collectionType: "photo" | "album";
  collection: CardModel[];
}

const CardCollection = ({ handleViewItem, handleEditItem, allowChanges, collectionType, collection }: CardCollectionProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="border rounded grid grid-cols-3">
        { allowChanges ? 
          <Card className="w-[280px] h-[300px] m-2 flex flex-col justify-center items-center">
            <CardHeader>
              <CardTitle>{`New ${collectionType}`}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button size="lg">
                <Plus />
              </Button>
            </CardContent>
          </Card> : null 
        }
        {collection.map((card) =>
          <Card className="w-[280px] h-[300px] m-2 flex flex-col justify-between items-center" key={card.itemId}>
            <CardHeader>
              <CardTitle>{`${card.title}`}</CardTitle>
            </CardHeader>
            { card.thumbnailUrl ?
              <CardContent>
                <figure>
                  <img src={card.thumbnailUrl} alt={card.title} />
                </figure>
              </CardContent> : null }
            <CardFooter className="flex justify-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="mr-2" variant="outline" size="icon" onClick={() => handleViewItem(card.itemId)}>
                      <FolderSearch />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{`View ${collectionType}`}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              { allowChanges ? 
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" onClick={() => handleEditItem(card.itemId)}>
                        <FilePenLine />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{`Edit ${collectionType}`}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              : null }
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

export default CardCollection;
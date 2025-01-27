import { CircleX, FilePenLine, FolderSearch } from "lucide-react";
import { Button } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";


interface CardOptionsProps {
  itemId: number;
  cardType: "photo" | "album";
  handleViewItem: (itemId: number) => void;
  handleEditItem: (itemId: number) => void;
  handleDeleteItem: (itemId: number) => void;
  allowChanges: boolean;
}

const CardOptions = ({ 
  itemId, 
  cardType, 
  handleViewItem, 
  handleEditItem, 
  handleDeleteItem, 
  allowChanges }: CardOptionsProps) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="mr-2" variant="outline" size="icon" onClick={() => handleViewItem(itemId)}>
              <FolderSearch />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{`View ${cardType}`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      { allowChanges ? 
        <>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="mr-2" variant="outline" size="icon" onClick={() => handleEditItem(itemId)}>
                  <FilePenLine />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{`Edit ${cardType}`}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => handleDeleteItem(itemId)}>
                  <CircleX />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{`Delete ${cardType}`}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      : null }
    </>
  )
}

export default CardOptions;
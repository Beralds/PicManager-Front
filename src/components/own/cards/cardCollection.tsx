import CardModel from "@/@types/cardModel";
import NewItemCard from "./newItemCard";
import PhotoCard from "./photoCard";
import AlbumCard from "./albumCard";

interface CardCollectionProps {
  handleViewItem: (itemId: number) => void;
  handleEditItem: (itemId: number) => void;
  handleDeleteItem: (itemId: number) => void;
  showNewItemDialog: () => void;
  allowChanges: boolean;
  collectionType: "photo" | "album";
  collection: CardModel[];
}

const CardCollection = ({ 
  handleViewItem, 
  handleEditItem, 
  handleDeleteItem, 
  showNewItemDialog,
  allowChanges, 
  collectionType, 
  collection }: CardCollectionProps) => {
  const isItPhotoCollection = collectionType === "photo";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border rounded grid grid-cols-3">
        { allowChanges ? 
          <NewItemCard 
            title={ collectionType }
            showNewItemDialog={ showNewItemDialog }
            width="280px"
            height={ isItPhotoCollection ? "300px" : "200px" } /> : null 
        }
        {collection.map(
          (card) => isItPhotoCollection ? 
            <PhotoCard 
              id={card.itemId} 
              title={card.title} 
              thumbnailUrl={card.thumbnailUrl || ''} 
              allowChanges={allowChanges}
              handleViewItem={handleViewItem} 
              handleEditItem={handleEditItem} 
              handleDeleteItem={handleDeleteItem}
              width="280px"
              height="300px"
            /> : 
            <AlbumCard 
              id={card.itemId} 
              title={card.title} 
              allowChanges={allowChanges}
              handleViewItem={handleViewItem} 
              handleEditItem={handleEditItem} 
              handleDeleteItem={handleDeleteItem}
              width="280px"
              height="200px"
            />)}
      </div>
    </div>
  )
}

export default CardCollection;
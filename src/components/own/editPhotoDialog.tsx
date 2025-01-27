import PhotoDialog from "./photoDialog";
 
interface IEditPhotoDialogProps {
  currentTitle: string;
  currentUrl: string;
  currentThumbnailUrl: string;
  open: boolean;
  onOpenChange: () => void;
  onSave: (title: string, url: string, thumbnailUrl: string) => void;
}

const EditPhotoDialog = ({ 
  currentTitle, 
  currentUrl, 
  currentThumbnailUrl,
  open,
  onOpenChange,
  onSave 
}: IEditPhotoDialogProps) => {
  return (
    <PhotoDialog 
      currentTitle={currentTitle}
      currentUrl={currentUrl}
      currentThumbnailUrl={currentThumbnailUrl}
      open={open}
      onOpenChange={onOpenChange}
      onSave={onSave}
    />
  )
}

export default EditPhotoDialog;
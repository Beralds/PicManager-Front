import PhotoDialog from "./photoDialog";
 
interface INewPhotoDialogProps {
  open: boolean;
  onOpenChange: () => void;
  onSave: (title: string, url: string, thumbnailUrl: string) => void;
}

const NewPhotoDialog = ({ open, onOpenChange, onSave }: INewPhotoDialogProps) => {
  return (
    <PhotoDialog 
      open={open}
      onOpenChange={onOpenChange}
      onSave={onSave}
    />
  )
}

export default NewPhotoDialog;
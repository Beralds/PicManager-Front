import AlbumDialog from "./albumDialog";
 
interface IEditAlbumDialogProps {
  currentTitle: string;
  open: boolean;
  onOpenChange: () => void;
  onSave: (title: string) => void;
}

const EditAlbumDialog = ({ currentTitle, open, onOpenChange, onSave }: IEditAlbumDialogProps) => {
  return (
    <AlbumDialog 
      currentTitle={currentTitle}
      open={open}
      onOpenChange={onOpenChange}
      onSave={onSave}
    />
  )
}

export default EditAlbumDialog;
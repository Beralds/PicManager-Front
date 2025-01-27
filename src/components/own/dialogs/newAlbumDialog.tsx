import AlbumDialog from "./albumDialog";
 
interface INewAlbumDialogProps {
  open: boolean;
  onOpenChange: () => void;
  onSave: (title: string) => void;
}

const NewAlbumDialog = ({ open, onOpenChange, onSave }: INewAlbumDialogProps) => {
  return (
    <AlbumDialog 
      open={open}
      onOpenChange={onOpenChange}
      onSave={onSave}
    />
  )
}

export default NewAlbumDialog;
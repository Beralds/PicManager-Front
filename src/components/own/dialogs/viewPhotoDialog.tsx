import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
 
interface IViewPhotoDialogProps {
  title: string;
  url: string;
  open: boolean;
  onOpenChange: () => void;
}

const ViewPhotoDialog = ({ title, url, open, onOpenChange }: IViewPhotoDialogProps) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Photo Viewer</DialogTitle>
          <DialogDescription>
            { title }
          </DialogDescription>
        </DialogHeader>
        <figure>
          <img src={url} alt={title} />
        </figure>
      </DialogContent>
    </Dialog>
  )
}

export default ViewPhotoDialog;
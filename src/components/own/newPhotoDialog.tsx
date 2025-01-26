import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
 
interface INewPhotoDialogProps {
  open: boolean;
  onOpenChange: () => void;
}

const NewPhotoDialog = ({ open, onOpenChange }: INewPhotoDialogProps) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Photo</DialogTitle>
          <DialogDescription>
            Fill the form below and save:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              Url
            </Label>
            <Input id="url" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="thumbailUrl" className="text-right">
              Thumbnail Url
            </Label>
            <Input id="thumbailUrl" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default NewPhotoDialog;
import { useState } from "react";
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
 
interface INewAlbumDialogProps {
  open: boolean;
  onOpenChange: () => void;
  onSave: (title: string) => void;
}

const NewAlbumDialog = ({ open, onOpenChange, onSave }: INewAlbumDialogProps) => {
  const [title, setTitle] = useState('');

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>New Album</DialogTitle>
          <DialogDescription>
            Fill the form below and save:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input 
              id="title" 
              className="col-span-3" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={() => {
              onSave(title);
              setTitle('');
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default NewAlbumDialog;
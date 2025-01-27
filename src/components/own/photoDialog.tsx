import { useEffect, useState } from "react";
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
 
interface IPhotoDialogProps {
  currentTitle?: string;
  currentUrl?: string;
  currentThumbnailUrl?: string;
  open: boolean;
  onOpenChange: () => void;
  onSave: (title: string, url: string, thumbnailUrl: string) => void;
}

const PhotoDialog = ({ 
  currentTitle, 
  currentUrl, 
  currentThumbnailUrl,
  open,
  onOpenChange,
  onSave 
}: IPhotoDialogProps) => {
  const [title, setTitle] = useState(currentTitle || '');
  const [url, setUrl] = useState(currentUrl || '');
  const [thumbnailUrl, setThumbnailUrl] = useState(currentThumbnailUrl || '');
  useEffect(() => {
    setTitle(currentTitle || '');
    setUrl(currentUrl || '');
    setThumbnailUrl(currentThumbnailUrl || '');
  }, [currentTitle, currentUrl, currentThumbnailUrl]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>{currentTitle ? 'Edit' : 'New'} Photo</DialogTitle>
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              Url
            </Label>
            <Input 
              id="url" 
              className="col-span-3" 
              value={url} 
              onChange={(e) => setUrl(e.target.value)} 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="thumbailUrl" className="text-right">
              Thumbnail Url
            </Label>
            <Input 
              id="thumbnailUrl" 
              className="col-span-3" 
              value={thumbnailUrl} 
              onChange={(e) => setThumbnailUrl(e.target.value)} 
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={() => {
              onSave(title, url, thumbnailUrl);
              setTitle('');
              setUrl('');
              setThumbnailUrl('');
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PhotoDialog;
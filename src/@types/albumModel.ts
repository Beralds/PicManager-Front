import PhotoModel from "./photoModel";

interface AlbumModel {
  userId: number;
  id: number;
  title: string;
  photos: PhotoModel[];
}

export default AlbumModel;
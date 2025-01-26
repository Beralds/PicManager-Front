import PhotoModel from "./photoModel";

interface AlbumModel {
  userId: number;
  id: number;
  title: string;
  photos: PhotoModel[];
}

export const nextId = (albums: AlbumModel[]) => {
  return Math.max(...albums.map((album) => album.id), 0) + 1;
};

export default AlbumModel;
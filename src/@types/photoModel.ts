interface PhotoModel {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const nextId = (photos: PhotoModel[]) => {
  return Math.max(...photos.map((photo) => photo.id), 0) + 1;
};

export default PhotoModel;
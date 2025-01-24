import PhotoModel from "@/@types/photoModel";
import axios from "@/util/AxiosInstance";

class UserRepository {
  async getAlbumPhotos(albumId: number) {
    return axios.get<PhotoModel[]>(`/albums/${albumId}`);
  }
}

export default new UserRepository();

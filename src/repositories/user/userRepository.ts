import AlbumModel from "@/@types/albumModel";
import UserModel from "@/@types/userModel";
import axios from "@/util/AxiosInstance";

class UserRepository {
  async getUsers() {
    return axios.get<UserModel[]>(`/users`);
  }

  async getUserAlbums(userId: number) {
    return axios.get<AlbumModel[]>(`/users/${userId}/albums`);
  }
}

export default new UserRepository();

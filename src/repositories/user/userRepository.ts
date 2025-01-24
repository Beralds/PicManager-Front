import UserModel from "@/@types/userModel";
import axios from "@/util/AxiosInstance";

class UserRepository {
  async getUsers() {
    return axios.get<UserModel[]>(`/users`);
  }
}

export default new UserRepository();

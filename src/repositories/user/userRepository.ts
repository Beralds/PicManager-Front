import axios from "@/util/AxiosInstance";

class UserRepository {
  async getUsers() {
    return axios.get(`/users`);
  }
}

export default new UserRepository();

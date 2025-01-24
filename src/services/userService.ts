import usersRepository from "@/repositories/user/userRepository";

class UserService {
  async getUsers() {
    return usersRepository.getUsers().then((res) => res?.data);
  }

  async getUserAlbums(userId: number) {
    return usersRepository.getUserAlbums(userId).then((res) => res?.data);
  }
}

export default new UserService();
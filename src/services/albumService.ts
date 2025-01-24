import usersRepository from "@/repositories/user/userRepository";

class AlbumService {
  async getAlbumPhotos(albumId: number) {
    return usersRepository.getUserAlbums(albumId).then((res) => res?.data);
  }
}

export default new AlbumService();
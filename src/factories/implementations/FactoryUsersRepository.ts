import { IFactoryPostsRepository } from "../IFactoryUsersRepository";
import { MemoryPostRepository } from "../../repositories/implementations/MemoryPostsRepository";

export class FactoryPostsRepository implements IFactoryPostsRepository {
  getPostsRepository(repositoryType: string) {
    switch (repositoryType) {
      case "Memory": {
        return new MemoryPostRepository()
        break
      }
      default:
        return new MemoryPostRepository()
    }
  }
}
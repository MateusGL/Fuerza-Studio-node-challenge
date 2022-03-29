import { IPostsRepository } from "../repositories/IPostsRepository";

export interface IFactoryPostsRepository {
  getPostsRepository(repositoryType: string): IPostsRepository;
}
import { Post } from "../entities/Post";


export interface IPostsRepository {
  getAll(page: number, Limit: number): Promise<Post[]>;
  findById(id: string): Promise<Post>;
  save(post: Post): Promise<void>;
  delete(id: string): Promise<Post>;
  put(post: Post): Promise<Post>;
}
import { IPostsRepository } from "../IPostsRepository";
import { Post } from "../../entities/Post";

export class MemoryPostRepository implements IPostsRepository {
  private static instance: MemoryPostRepository;

  private posts: Post[] = [];

  async getAll(page: number, limit: number): Promise<Post[]> {
    if (page > 0 && limit > 0) {
      return this.posts.slice((page - 1) * limit, page * limit)
    }
    return this.posts
  }

  async findById(id: string): Promise<Post> {
    const post = this.posts.find(post => post.id === id);
    return post;
  }

  async save(post: Post): Promise<void> {
    this.posts.push(post);
  }

  async delete(id: string): Promise<Post> {
    const postToDelete = this.posts.find(element => element.id === id);
    const index = this.posts.indexOf(postToDelete)
    if (index > -1) {
      this.posts.splice(index, 1);
    }
    return postToDelete
  }

  async put(post: Post): Promise<Post> {
    const index = this.posts.indexOf(await this.findById(post.id));
    if (index > -1) {
      this.posts[index] = post
    }
    return post
  }
}
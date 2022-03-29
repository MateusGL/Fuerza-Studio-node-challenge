import { IPostsRepository } from "@repositories/IPostsRepository";
import { ICreatePostRequestDTO } from "./CreatePostDTO";
// import { User } from "@entities/User";
import { Post } from "../../entities/Post";

export class CreatePostUseCase {
    constructor(
        private postsRepository: IPostsRepository,
    ) { }

    async execute(data: ICreatePostRequestDTO): Promise<Post> {
        const post = new Post(data);
        await this.postsRepository.save(post);
        return post
    }
}
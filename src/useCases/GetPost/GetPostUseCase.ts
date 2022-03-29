import { IPostsRepository } from "@repositories/IPostsRepository";
import { IGetPostRequestDTO } from "./GetPostDTO";
import { Post } from "@entities/Post";

export class GetPostUseCase {
    constructor(
        private postsRepository: IPostsRepository,
    ) { }

    async execute(id: IGetPostRequestDTO["id"]): Promise<Post> {
        const postAlreadyExists = await this.postsRepository.findById(id);

        if (!postAlreadyExists) {
            throw new Error('Post not found.');
        }

        return postAlreadyExists
    }
}
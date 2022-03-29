import { IPostsRepository } from "@repositories/IPostsRepository";
import { IDeletePostRequestDTO } from "./DeletePostDTO";
import { Post } from "@entities/Post";

export class DeletePostUseCase {
    constructor(
        private postsRepository: IPostsRepository,
    ) { }

    async execute(id: IDeletePostRequestDTO["id"]): Promise<Post> {
        const post = await this.postsRepository.delete(id)
        return post
    }
}
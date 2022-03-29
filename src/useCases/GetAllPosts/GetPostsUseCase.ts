import { IPostsRepository } from "@repositories/IPostsRepository";
import { IReadPostRequestDTO } from "./GetAllPostsDTO";
import { Post } from "@entities/Post";

export class GetAllPostsUseCase {
    constructor(
        private postsRepository: IPostsRepository,
    ) { }

    async execute({ page, limit }): Promise<Post[]> {
        const posts = await this.postsRepository.getAll(page, limit)
        return posts
    }
}
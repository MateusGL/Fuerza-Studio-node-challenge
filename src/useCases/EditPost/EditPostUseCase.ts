import { IPostsRepository } from "@repositories/IPostsRepository";
import { IEditPostRequestDTO } from "./EditPostDTO";
// import { User } from "@entities/User";
import { Post } from "../../entities/Post";

export class EditPostUseCase {
    constructor(
        private postsRepository: IPostsRepository,
    ) { }

    async execute(data: IEditPostRequestDTO): Promise<Post> {
        const post = new Post(data, data.id);
        await this.postsRepository.put(post);
        return post
    }
}
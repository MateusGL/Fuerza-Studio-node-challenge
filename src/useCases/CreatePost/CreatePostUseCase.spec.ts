import { ICreatePostRequestDTO } from "./CreatePostDTO";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { mockPost } from "../../common/mocks/posts"

import { MemoryPostRepository } from "../../repositories/implementations/MemoryPostsRepository"
const fakeData: ICreatePostRequestDTO = mockPost
const fakeRepo = new MemoryPostRepository()

describe('CreatePostUseCase', () => {
    const createPostUseCase = new CreatePostUseCase(fakeRepo)

    test('CreatePost', async () => {
        const createPost = jest.fn(async () => await createPostUseCase.execute(fakeData));
        createPost()
        await expect(createPost).toHaveReturned()
    })
});

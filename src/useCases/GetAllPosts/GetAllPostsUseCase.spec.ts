import { GetAllPostsUseCase } from "./GetPostsUseCase";
import { MemoryPostRepository } from "../../repositories/implementations/MemoryPostsRepository"
import { mockPost } from "../../common/mocks/posts"
import { CreatePostUseCase } from "../CreatePost/CreatePostUseCase";

const fakeData = mockPost
const fakeRepo = new MemoryPostRepository()

describe('GetAllPostsUseCase', () => {
    const getAllPostsUseCase = new GetAllPostsUseCase(fakeRepo)
    const createPostUseCase = new CreatePostUseCase(fakeRepo)

    test('GetPostsWithPagination', async () => {
        await createPostUseCase.execute(fakeData)
        const createUser = jest.fn(async () => await getAllPostsUseCase.execute({ page: 1, limit: 1 }));
        createUser()
        await expect(createUser).toHaveReturned()
    })

    test('GetAllPosts', async () => {
        await createPostUseCase.execute(fakeData)
        const createUser = jest.fn(async () => await getAllPostsUseCase.execute({ page: 0, limit: 0 }));
        createUser()
        await expect(createUser).toHaveReturned()
    })
});

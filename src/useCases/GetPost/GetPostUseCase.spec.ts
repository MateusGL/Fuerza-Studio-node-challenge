import { IGetPostRequestDTO } from "./GetPostDTO";
import { GetPostUseCase } from "./GetPostUseCase";
import { MemoryPostRepository } from "../../repositories/implementations/MemoryPostsRepository"
import { mockPost } from "../../common/mocks/posts"
const fakeData: IGetPostRequestDTO = mockPost
const fakeRepo = new MemoryPostRepository()

describe('getPostUseCase', () => {
    const getPostUseCase = new GetPostUseCase(fakeRepo)

    test('saveUser', async () => {
        const createUser = jest.fn(async () => await getPostUseCase.execute(fakeData.id));
        createUser()
        await expect(createUser).toHaveReturned()
    })
});

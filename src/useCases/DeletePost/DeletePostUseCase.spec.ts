import { IDeletePostRequestDTO } from "./DeletePostDTO";
import { DeletePostUseCase } from "./DeletePostUseCase";
import { MemoryPostRepository } from "../../repositories/implementations/MemoryPostsRepository"
import { mockPost } from "../../common/mocks/posts"
const fakeData: IDeletePostRequestDTO = mockPost
const fakeRepo = new MemoryPostRepository()

describe('deletePostUseCase', () => {
    const deletePostUseCase = new DeletePostUseCase(fakeRepo)

    test('deletePost', async () => {
        const deleteUser = jest.fn(async () => await deletePostUseCase.execute(fakeData.id));
        deleteUser()
        await expect(deleteUser).toHaveReturned()
    })
});

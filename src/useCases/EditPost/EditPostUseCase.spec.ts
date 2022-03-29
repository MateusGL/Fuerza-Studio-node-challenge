import { IEditPostRequestDTO } from "./EditPostDTO";
import { EditPostUseCase } from "./EditPostUseCase";
import { mockPost } from "../../common/mocks/posts"

import { MemoryPostRepository } from "../../repositories/implementations/MemoryPostsRepository"
const fakeData: IEditPostRequestDTO = mockPost
const fakeRepo = new MemoryPostRepository()

describe('EditPostUseCase', () => {
    const editPostUseCase = new EditPostUseCase(fakeRepo)

    test('EditPost', async () => {
        const editPost = jest.fn(async () => await editPostUseCase.execute(fakeData));
        editPost()
        await expect(editPost).toHaveReturned()
    })
});

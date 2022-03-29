import { MemoryPostRepository } from "../repositories/implementations/MemoryPostsRepository";
import { GetPostUseCase } from "./GetPost/GetPostUseCase";
import { GetPostController } from "./GetPost/GetPostController";
import { environment } from "../config";
import { FactoryPostsRepository } from "../factories/implementations/FactoryUsersRepository";
import { CreatePostUseCase } from "./CreatePost/CreatePostUseCase";
import { CreatePostController } from "./CreatePost/CreatePostController";
import { GetAllPostsController } from "./GetAllPosts/GetAllPostsController";
import { GetAllPostsUseCase } from "./GetAllPosts/GetPostsUseCase";
import { EditPostController } from "./EditPost/EditPostController";
import { EditPostUseCase } from "./EditPost/EditPostUseCase";

import { DeletePostController } from "./DeletePost/DeletePostController";
import { DeletePostUseCase } from "./DeletePost/DeletePostUseCase";

const factoryPostsRepository = new FactoryPostsRepository()
const postsRepository = factoryPostsRepository.getPostsRepository(environment.REPOSITORY_POST_TYPE)

const getPostUseCase = new GetPostUseCase(postsRepository)
const getPostController = new GetPostController(getPostUseCase)

const createPostUseCase = new CreatePostUseCase(postsRepository)
const createPostController = new CreatePostController(createPostUseCase)

const getAllPostsUseCase = new GetAllPostsUseCase(postsRepository)
const getAllPostsController = new GetAllPostsController(getAllPostsUseCase)

const editPostUseCase = new EditPostUseCase(postsRepository)
const editPostController = new EditPostController(editPostUseCase)

const deletePostUseCase = new DeletePostUseCase(postsRepository)
const deletePostController = new DeletePostController(deletePostUseCase)

export { getPostController }
export { createPostController }
export { getAllPostsController }
export { editPostController }
export { deletePostController }







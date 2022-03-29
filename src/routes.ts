import { Router } from "express";
import { getPostController, createPostController, getAllPostsController, editPostController, deletePostController } from "./useCases";

const router = Router()

router.post('/api/posts', (request, response) => {
  // #swagger.description = Create Post.'
  return createPostController.handle(request, response);
});

router.get('/api/posts/:page/:limit', async (request, response) => {
  // #swagger.description = 'Listing all Posts.'

  return await getAllPostsController.handle(request, response);
});

router.get('/api/posts/:id', async (request, response) => {
  // #swagger.description = 'Get Post By ID'

  /* #swagger.responses[200] = {
            description: 'Post successfully obtained.',
            schema: {
                  id: "xxx",
                  title: "Exemplo",
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  tags: ["exemplo"],                
            }
    } */
  return await getPostController.handle(request, response);
});

router.put('/api/posts/:id', async (request, response) => {
  // #swagger.description = 'Edit Post.'
  return await editPostController.handle(request, response);
});

router.delete('/api/posts/:id', async (request, response) => {
  // #swagger.description = 'Edit Post.'
  return await deletePostController.handle(request, response);
});

router.get('/', async (request, response) => {
  // #swagger.description = 'heartbeat.'
  return response.status(200).json("OKAY")
})

export { router }


const arr = []

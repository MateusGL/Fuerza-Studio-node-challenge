import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { z } from "zod"

const postSchema = z.object({
  body: z.string(),
  tags: z.array(z.string()),
  title: z.string()
})

export class CreatePostController {
  constructor(
    private createPostUseCase: CreatePostUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      postSchema.parse(request.body);
      const { body, tags, title } = request.body;
      const post = await this.createPostUseCase.execute({
        body,
        tags,
        title
      })

      return response.status(201).send(post);
    } catch (err) {
      console.log("\n\n\n\nerror:", err)

      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
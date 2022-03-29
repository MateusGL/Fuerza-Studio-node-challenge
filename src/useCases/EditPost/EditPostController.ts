import { Request, Response } from "express";
import { EditPostUseCase } from "./EditPostUseCase";
import { z } from "zod"

const postSchema = z.object({
  body: z.string(),
  tags: z.array(z.string()),
  title: z.string()
})

export class EditPostController {
  constructor(
    private editPostUseCase: EditPostUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      postSchema.parse(request.body);
      const { body, tags, title } = request.body;
      const post = await this.editPostUseCase.execute({
        id,
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
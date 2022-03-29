import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

export class DeletePostController {
  constructor(
    private deletePostUseCase: DeletePostUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const post = await this.deletePostUseCase.execute(id)

      return response.status(200).json({ data: post });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
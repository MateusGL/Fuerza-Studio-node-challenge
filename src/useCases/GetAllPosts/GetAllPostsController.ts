import { Request, Response } from "express";
import { GetAllPostsUseCase } from "./GetPostsUseCase";

export class GetAllPostsController {
  constructor(
    private getAllPostsUseCase: GetAllPostsUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { page, limit } = request.params
      const post = await this.getAllPostsUseCase.execute({ page, limit })

      return response.status(200).json({ data: post });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
import { Request, Response } from "express";
import { GetPostUseCase } from "./GetPostUseCase";

export class GetPostController {
  constructor(
    private getPostUseCase: GetPostUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const post = await this.getPostUseCase.execute(id)

      return response.status(200).json({ data: post });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
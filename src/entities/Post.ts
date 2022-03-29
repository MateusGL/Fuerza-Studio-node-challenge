import { uuid } from 'uuidv4'

export class Post {

  public readonly id: string
  public title: string
  public body: string
  public tags: string[]

  constructor(props: Omit<Post, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
import { PUBLIC_API } from '@env'
import { TGetPostsResponse } from './types'

export class Posts {
  static async getPosts(): Promise<TGetPostsResponse> {
    return fetch(PUBLIC_API + '/posts').then(response => response.json())
  }
}

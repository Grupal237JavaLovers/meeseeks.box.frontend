import {User} from './user';

export class Consumer extends User {
  constructor(data: any) {
    super();
  }
  profileImageUrl: string;
  description: string;
  rating: number;
}

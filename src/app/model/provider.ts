import {User} from './user';

export class Provider extends User {
  constructor(data: any) {
    super();
  }
  profileImageUrl: string;
  profileVideoUrl: string;
  description: string;
  skills: string[];
  rating: number;
}

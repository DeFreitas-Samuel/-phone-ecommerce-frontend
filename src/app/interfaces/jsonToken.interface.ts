import {UserInterface} from "./user.interface";

export interface JsonTokenInterface {
  access_token: string;
  user: UserInterface
}

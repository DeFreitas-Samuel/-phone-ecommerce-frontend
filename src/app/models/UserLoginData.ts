import {UserLoginDataDTO} from "../DTOs/UserLoginDataDTO";

export class UserLoginData {
  public email: string = "";
  public password: string = "";

  constructor() {
  }

  toDTO(){
    let DTO = new UserLoginDataDTO();
    DTO.email = this.email;
    DTO.password = this.password;
  }

}

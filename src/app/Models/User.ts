import { UserDTO } from "../DTOs/UserDTO";

export class User {
  firstname: string = "";
  lastname: string = "";
  address: string = "";
  email:string = "";
  password: string = "";


  
  constructor() {

  }

  toDTO():UserDTO {
    let DTO = new UserDTO();
    DTO.firstname = this.firstname;
    DTO.lastname = this.lastname;
    DTO.address = this.address;
    DTO.email = this.email;
    DTO.password = this.password;

    return DTO;
  }
}

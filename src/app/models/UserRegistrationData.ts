import { UserRegistrationDataDTO } from "../DTOs/UserRegistrationDataDTO";

export class UserRegistrationData {
  firstname: string = "";
  lastname: string = "";
  birthdate: string = "";
  email:string = "";
  password: string = "";



  constructor() {

  }

  toDTO():UserRegistrationDataDTO {
    let DTO = new UserRegistrationDataDTO();
    DTO.name = this.firstname;
    DTO.lastname = this.lastname;
    DTO.birthdate = this.birthdate;
    DTO.email = this.email;
    DTO.password = this.password;

    return DTO;
  }
}

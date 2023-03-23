import { UserRegistrationDataDTO } from "../DTOs/UserRegistrationDataDTO";

export class UserRegistrationData {
  firstname: string = "";
  lastname: string = "";
  address: string = "";
  contact_number: string = "";
  birthdate: string = "";
  email:string = "";
  password: string = "";



  constructor() {

  }

  toDTO():UserRegistrationDataDTO {
    let DTO = new UserRegistrationDataDTO();
    DTO.name = this.firstname;
    DTO.lastname = this.lastname;
    DTO.address = this.address;
    DTO.contact_number =this.contact_number;
    DTO.birthdate = this.birthdate;
    DTO.email = this.email;
    DTO.password = this.password;

    return DTO;
  }
}

export class User {
  userID: number;
  name: string;
  email: string;
  password: string;
  phone: string;

  constructor(
    userId: number,
    name: string,
    email: string,
    password: string,
    phone: string
  ) {
    this.userID = userId;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }
}

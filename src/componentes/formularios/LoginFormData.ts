export class LoginFormData {
  username: string;
  password: string;

  constructor(_username = "", _password = "") {
    this.username = _username;
    this.password = _password;
  }
}
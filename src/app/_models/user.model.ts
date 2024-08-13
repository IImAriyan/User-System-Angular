export class User {
  userID:string;
  Username : string;
  Password : string;
  constructor(userID:string = "" , Username: string = "", Password : string = "") {
    this.userID = userID;
    this.Username = Username;
    this.Password = Password;
  }
}

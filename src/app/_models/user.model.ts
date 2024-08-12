export class User {
  userID:number;
  Username : string;
  Password : string;
  constructor(userID:number = 0 , Username: string = "", Password : string = "") {
    this.userID = userID;
    this.Username = Username;
    this.Password = Password;
  }
}

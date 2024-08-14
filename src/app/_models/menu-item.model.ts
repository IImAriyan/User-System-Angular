export class MenuItem {
  Label: string;
  RouterLink : string;
  constructor(Label:string = "", RouterLink : string = "") {
    this.Label = Label;
    this.RouterLink = RouterLink;
  }
}

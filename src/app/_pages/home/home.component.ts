import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {User} from "../../_models/user.model";
import {UserService} from "../../_services/user.service";
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {MenuItem} from "../../_models/menu-item.model";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    MatIcon,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users$: User[] = [];
  loginForm : FormGroup;
  findIndex: number = 0;
  errorMessage: string | undefined = undefined;
  menuOpen: boolean = false;
  menuItems: MenuItem[] = [
    {"Label":"Register","RouterLink":"/authentication/register"},{"Label":"Login","RouterLink":"/authentication/login"}
  ];

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  constructor(private userService: UserService, private cookieService : CookieService, private router: Router) {
    this.reloadUsers();
    this.loginForm = new FormGroup({
      username: new FormControl("",[Validators.required, Validators.maxLength(20)]),
      password: new FormControl("",[Validators.required, Validators.maxLength(20)]),
    })
  }

  reloadUsers() {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users$ = response;
    })
  }

  submit() {

    this.reloadUsers();

    const Username = this.loginForm.controls['username'].value;
    const Password = this.loginForm.controls['password'].value;

    for (let user of this.users$) {

      if (user.Username === Username) {
        this.errorMessage = undefined;
        this.findIndex = 1;
          if (user.Password === Password) {
            this.errorMessage = undefined;

            this.cookieService.set("?userlogindToSite?", user.userID);
            this.router.navigate(['/dashboard'])
          }else {
            this.errorMessage = "Password Is Wrong !!!"
          }
      }
    }
    if (this.findIndex == 0) {
      this.errorMessage = "User Not Found";
    }
  }

}

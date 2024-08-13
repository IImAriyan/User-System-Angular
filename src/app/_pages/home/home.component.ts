import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {User} from "../../_models/user.model";
import {UserService} from "../../_services/user.service";
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

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

  constructor(private userService: UserService, private router: Router) {
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
    const Username = this.loginForm.controls['username'].value;
    const Password = this.loginForm.controls['password'].value;

    for (let user of this.users$) {

      if (user.Username === Username) {

      }

    }
    if (this.findIndex == 0) {
      this.errorMessage = "User Not Found";
    }
  }

}

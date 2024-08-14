import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {User} from "../../_models/user.model";
import {UserService} from "../../_services/user.service";
import Swal from "sweetalert2";
@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        FormsModule,
        MatIcon,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  errorMessage: string | undefined = undefined;
  registerForm: FormGroup;
  users$! : User[] ;
  userRegisterd: User = new User();

  private swalSuccess(message: string): void {
    Swal.fire({
      title: 'Success!',
      icon: 'success',
      text: message
    })
  }

  constructor(private userService: UserService, private router: Router) {
    this.reloadUsers();
    this.registerForm = new FormGroup({
      username: new FormControl("",[Validators.required, Validators.maxLength(20)]),
      password: new FormControl("",[Validators.required, Validators.maxLength(20)]),
      passwordConfirm: new FormControl("",[Validators.required, Validators.maxLength(20)])
    })
  }
  reloadUsers() {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users$ = response
    })
  }

  submit() {
    this.reloadUsers();


    const username = this.registerForm.controls['username'].value;
    const password = this.registerForm.controls['password'].value;
    const passwordConfirm = this.registerForm.controls['passwordConfirm'].value;



    for (let i = 0;i < this.users$.length;i++) {
      if (this.users$[i].Username == username) {
        this.errorMessage = "This username is already used"

      }else {
        if (password == passwordConfirm) {
          this.swalSuccess("You have successfully registered")
          this.router.navigate(['/authentication/login'])
          this.userRegisterd.Username = this.registerForm.controls['username'].value;
          this.userRegisterd.Password = this.registerForm.controls['password'].value;
          break
        }else {
          this.errorMessage = "Password Not Match !"
        }
      }
    }

  }
}

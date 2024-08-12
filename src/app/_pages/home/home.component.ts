import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {User} from "../../_models/user.model";
import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users$: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    userService.getUsers().subscribe((response: User[]) => {
      this.users$ = response;
    })
  }
}

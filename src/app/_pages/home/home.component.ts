import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {User} from "../../_models/user.model";
import {UserService} from "../../_services/user.service";
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    MatIcon
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

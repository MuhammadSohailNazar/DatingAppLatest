import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'msn-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.data.subscribe((data) => {
      this.users = data['users'];
    });
  }

  // loadUsers() {
  //   this.userService.getUsers().subscribe(
  //     (users: User[]) => {
  //       this.users = users;
  //     },
  //     (error: any) => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }
}

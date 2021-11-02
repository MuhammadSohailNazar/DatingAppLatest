import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'msn-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit() {}
}

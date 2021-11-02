import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from 'ngx-gallery-9';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'msn-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.data.subscribe((data) => {
      this.user = data['user'];
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Rotate,
        preview: false,
      },
    ];

    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrl = [];
    if (this.user.photos != null) {
      for (const photo of this.user.photos) {
        imageUrl.push({
          small: photo.url,
          big: photo.url,
          medium: photo.url,
          description: photo.description,
        });
      }
    }
    return imageUrl;
  }

  // loadUser() {
  //   this.userService.getUser(+this.router.snapshot.params['id']).subscribe(
  //     (user) => {
  //       this.user = user;
  //     },
  //     (error) => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }
}

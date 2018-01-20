/**
 * Created by csebestin on 10/23/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';
import { Consumer } from '../../model/consumer';
import { Provider } from '../../model/provider';
import { User } from '../../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'mb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../shared/variables.scss'],
})
export class MbProfileComponent implements OnInit {
  user: User;
  provider: Provider = new Provider({});
  consumer: Consumer;
  imageUrl: string;
  description: string;
  rating: number;
  isProvider: boolean;
  iframe_html: any;

  constructor(private userService: UserService,
              private embedService: EmbedVideoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (this.user.role === 'provider') {
      this.isProvider = true;
      this.userService.getProvider(this.user.id)
        .then(data => {
          this.provider = data;
          this.imageUrl = this.provider.profileImageUrl;
          this.description = this.provider.description;
          if (this.provider.profileVideoUrl) {
            this.iframe_html = this.embedService.embed(this.provider.profileVideoUrl, {attr: {width: 500, height: 500}});
          }

          this.userService.getProviderSkills(this.user.id)
            .then(res => {
              this.provider.skills = res;
            })
            .catch(err => {
              console.error(err);
            });

          this.userService.getProviderRating(this.user.id)
            .then(res => {
              this.rating = res;
            })
            .catch(err => {
              console.error(err);
            });
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      this.isProvider = false;
      this.userService.getConsumer(this.user.id)
        .then(data => {
          this.consumer = data;
          this.description = this.consumer.description;
          this.imageUrl = this.consumer.profileImageUrl;
          this.userService.getConsumerRating(this.user.id)
            .then(res => {
              this.rating = res;
            })
            .catch(err => {
              console.error(err);
            });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  ngOnEditClick() {
    this.router.navigate(['/auth/user/edit-profile']);
  }
}

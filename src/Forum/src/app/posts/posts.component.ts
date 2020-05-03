import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Users } from 'src/models/users';
import { Posts } from 'src/models/posts';
import { Location } from '@angular/common'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private routeSub: Subscription;
  user:Users
  posts=[]
  backgroundImage:string

  constructor(private postService:PostsService, private route: ActivatedRoute, private _location:Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.postService.getUserPosts(params['userId']).subscribe(resp => {this.posts=resp;})
      this.postService.getSingleUser(params['userId']).subscribe(resp=> {
        this.user = resp;
        
        this.backgroundImage = this.user.avatar
      })
    });


    
    
  }
  goBack(){
    this._location.back()
  }
}

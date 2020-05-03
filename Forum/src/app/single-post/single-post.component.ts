import { Component, OnInit } from '@angular/core';
import { SinglePostService } from 'src/services/single-post.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/models/users';
import { Posts } from 'src/models/posts';
import { Location } from '@angular/common'

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  
  post:Posts;
  comments:any = []

  constructor(private singlePostService:SinglePostService, private route: ActivatedRoute,private _location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params=> {
      this.singlePostService.getSinglePost(params['userId'],params['postId']).subscribe(resp => this.post = resp)
      this.singlePostService.getPostComments(params['userId'],params['postId']).subscribe(resp => this.comments = resp)
    })
  }

  goBack(){
    this._location.back()
  }

}

import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SubreccitModel } from '../subreccit-response';
import { SubreccitService } from '../subreccit.service';
import { throwError } from 'rxjs';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';
import { CommentPayload } from 'src/app/comment/comment-payload';

@Component({
  selector: 'app-view-subreccit',
  templateUrl: './view-subreccit.component.html',
  styleUrls: ['./view-subreccit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewSubreccitComponent implements OnInit {
  name: string;
  posts: PostModel[];
  comments: CommentPayload[];
  postLength: number;
  commentLength: number;

  faComments = faComments;  
 
  @Input()
  id:number;


  constructor(private postService: PostService, private router: Router, private activateRoute: ActivatedRoute) { 
    this.id = this.activateRoute.snapshot.params.id;
   
  }

  ngOnInit(): void {
       this.postService.getAllPostsBySubreccit(this.id).subscribe(post => {
      this.posts = post;
    });
  }


  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
}

  
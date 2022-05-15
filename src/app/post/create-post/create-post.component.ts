import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SubreccitModel } from 'src/app/subreccit/subreccit-response';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { SubreccitService } from 'src/app/subreccit/subreccit.service';
import { CreatePostPayload } from './create-post-payload';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  subreccits: Array<SubreccitModel>;

  constructor(private router: Router, private postService: PostService,
    private subreccitService: SubreccitService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subreccitName: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subreccitName: new FormControl('', Validators.required),
      url: new FormControl('',),
      description: new FormControl('', Validators.required),
    });
    this.subreccitService.getAllSubreccits().subscribe((data) => {
      this.subreccits = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.subreccitName = this.createPostForm.get('subreccitName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}
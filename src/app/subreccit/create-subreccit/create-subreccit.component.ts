import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubreccitModel } from '../subreccit-response';
import { Router } from '@angular/router';
import { SubreccitService } from '../subreccit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-subreccit',
  templateUrl: './create-subreccit.component.html',
  styleUrls: ['./create-subreccit.component.css']
})
export class CreateSubreccitComponent implements OnInit {
  createSubreccitForm: FormGroup;
  subreccitModel: SubreccitModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subreccitService: SubreccitService) {
    this.createSubreccitForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subreccitModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubreccit() {
    this.subreccitModel.name = this.createSubreccitForm.get('title').value;
    this.subreccitModel.description = this.createSubreccitForm.get('description').value;
    this.subreccitService.createSubreccit(this.subreccitModel).subscribe(data => {
      this.router.navigateByUrl('/list-subreccits');
    }, error => {
      throwError(error);
    })
  }
}
import { Component, OnInit } from '@angular/core';
import { SubreccitModel } from '../subreccit-response';
import { SubreccitService } from '../subreccit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-subreccits',
  templateUrl: './list-subreccits.component.html',
  styleUrls: ['./list-subreccits.component.css']
})
export class ListSubreccitsComponent implements OnInit {

  subreccits: Array<SubreccitModel>;
  constructor(private subreccitService: SubreccitService) { 
    
  }

  ngOnInit() {
    
    this.subreccitService.getAllSubreccits().subscribe(data => {
      this.subreccits = data;
    }, error => {
      throwError(error);
    })
  }
}
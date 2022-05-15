import { Component, OnInit } from '@angular/core';
import { SubreccitService } from 'src/app/subreccit/subreccit.service';
import { SubreccitModel } from 'src/app/subreccit/subreccit-model';

@Component({
  selector: 'app-subreccit-side-bar',
  templateUrl: './subreccit-side-bar.component.html',
  styleUrls: ['./subreccit-side-bar.component.css']
})
export class SubreccitSideBarComponent implements OnInit {

  subreccits: Array<SubreccitModel>;
  displayViewAll: boolean;

  constructor(private subreccitService: SubreccitService) {
    this.subreccitService.getAllSubreccits().subscribe(data => {
      if (data.length >= 3) {
        this.subreccits = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subreccits = data;
      }
    });
  }

  ngOnInit(): void {
  }

}
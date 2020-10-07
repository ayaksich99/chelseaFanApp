import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomePageService } from '../services/homepage.service';

@Component({
  selector: 'app-dialogtwo',
  templateUrl: './dialogtwo.component.html',
  styleUrls: ['./dialogtwo.component.scss']
})
export class DialogtwoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private homepageservice: HomePageService)  { }

  ngOnInit(): void {
  }

}

import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomePageService } from '../services/homepage.service';

@Component({
  selector: 'app-dialogtwo',
  templateUrl: './dialogtwo.component.html',
  styleUrls: ['./dialogtwo.component.scss']
})
export class DialogtwoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private homepageservice: HomePageService, public dialog: MatDialog)  { }
  teamStandings(league_id: string){
    this.homepageservice.teamStandings(league_id)
    .subscribe((res: any) =>{
      if(!res){
          return res.send({ success: false})
      }
      this.dialog.open(DialogtwoComponent,{
        data: { res : res }
      })
    
    });
  }
  ngOnInit(): void {
  }

}

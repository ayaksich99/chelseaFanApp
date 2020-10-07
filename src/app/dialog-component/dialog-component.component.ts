import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Player } from '../interface/playerinterface';
import { HomePageService } from '../services/homepage.service';


@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent implements OnInit {
  players: Array<Player> = this.homepageservice.players 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private homepageservice: HomePageService) { }

  ngOnInit(): void {
    console.log(this.data);
    // If it's an error show that
    if (this.homepageservice.playerSearch === null){
      return alert("Unavailable");
    }
    // If not, pull out the 0th index
    else{
      this.homepageservice.playerSearch[0];
    }
  }

}

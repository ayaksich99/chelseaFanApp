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
  res: boolean = true;
  players: Array<Player> = this.homepageservice.players 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private homepageservice: HomePageService) { }

  ngOnInit(): void {
  
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { Player } from '../interface/playerinterface';
import { HomePageService } from '../services/homepage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent  implements OnInit {
playerInfo: Object;
players: Array<Player> = this.homepageservice.players
first_name: string;
last_name: string;
constructor(private homepageservice: HomePageService, public dialog: MatDialog) { }

searchPlayer(player_name: string){
  this.homepageservice.playerSearch(player_name)
  .subscribe((res: any) => {
  
    // If it's an array then pass the res.filter(...) to the dialog
    if (res instanceof Array){
      res = this.homepageservice.players.filter(p => p.player_name === player_name);
      console.log("filtering names");
    }
    this.dialog.open(DialogComponentComponent, {
      data: res
    })
  });
}



ngOnInit(): void {
  

  }

}

import { Component, OnInit } from '@angular/core';
import { Player } from '../interface/playerinterface';
import { HomePageService } from '../services/homepage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent  implements OnInit {
name: string;
team: string;
players: Array<Player>
constructor(private homepageservice: HomePageService) { }


ngOnInit(): void {
  this.homepageservice.playerSearch(this.name, this.team).subscribe((res: Array<Player>) => this.players === res);
}
}



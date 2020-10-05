import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../interface/playerinterface';
import { HomePageService } from '../services/homepage.service';

@Component({
  selector: 'app-home-page-table',
  templateUrl: './home-page-display.component.html',
  styleUrls: ['./home-page-display.component.scss']
})
export class HomePageDisplayComponent implements OnInit {
  @Input() players: Array<Player>;
  @Input() name: string; team: string;
  @Output() Player = new EventEmitter


  constructor(private homepageservice: HomePageService) { }


  

  ngOnInit(): void {
    this.homepageservice.playerSearch(this.name, this.team).subscribe((res: Array<Player>) => this.players === res);
  }

}
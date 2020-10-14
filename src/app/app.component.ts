import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { DialogtwoComponent } from './dialogtwo/dialogtwo.component';
import { Standings } from './interface/standingsinterface';
import { HomePageService } from './services/homepage.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chelseaFanApp';
  username: string;
  standings: Array<Standings> = this.homepageservice.standings
  constructor(private usersService: UsersService, private homepageservice: HomePageService, public dialog: MatDialog) {
    this.usersService.user$.subscribe((users: string) => this.username = users);
  }

  logout(){
    this.usersService.logout()
  }
  teamStandings(league_id: string){
    this.homepageservice.teamStandings(league_id)
    .subscribe((res: any) =>{
      if (res instanceof Array) {
        res = res.filter(id => id.league_id === league_id)[0]
      }
      
      this.dialog.open(DialogtwoComponent,{
        data: { res : res }
      })
    });
  }
}


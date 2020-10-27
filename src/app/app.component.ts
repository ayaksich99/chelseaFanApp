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
  standings: Array<Standings> 
  constructor(private usersService: UsersService, private homepageservice: HomePageService, public dialog: MatDialog) {
    this.usersService.user$.subscribe((users: string) => this.username = users);
  }
  teamStandings(){
    this.homepageservice.teamStandings()
    .subscribe((res: any) =>{
      res = res.filter(n => n.team_name === 'Chelsea')[0];
      this.dialog.open(DialogtwoComponent,{
        data: res
      })
      console.log('Standings')
    });
  
  
  }
  logout(){
    this.usersService.logout()
  }

}


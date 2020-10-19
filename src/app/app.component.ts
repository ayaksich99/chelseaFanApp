import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { DialogtwoComponent } from './dialogtwo/dialogtwo.component';
import { Standings } from './interface/standingsinterface';
import { HomePageService } from './services/homepage.service';
import { UsersService } from './services/users.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;
  title = 'chelseaFanApp';
  username: string;
  standings: Array<Standings> = this.homepageservice.standings
  constructor(private usersService: UsersService, private homepageservice: HomePageService, public dialog: MatDialog, db: AngularFirestore) {
    this.usersService.user$.subscribe((users: string) => this.username = users);
    this.items = db.collection('items').valueChanges();
  }

  logout(){
    this.usersService.logout()
  }
  teamStandings(league_id: string){
    this.homepageservice.teamStandings(league_id)
  }
}


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../interface/playerinterface';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private players: Array<Player> = [ 
    {name: 'Kepa Arrizabalaga', team: 'Chelsea'},
    {name: 'Willy Caballero', team: 'Chelsea'},
    {name: 'Edouard Mendy', team: 'Chelsea'},
    {name: 'Antonio Rudiger', team: 'Chelsea'},
    {name:'Marcos Alonso', team: 'Chelsea'},
    {name:'Andreas Christensen', team: 'Chelsea'},
    {name:'Thiago Silva', team: 'Chelsea'},
    {name:'Fikayo Tomori', team: 'Chelsea'},
    {name:'Kurt Zouma', team: 'Chelsea'},
    {name:'Ben Chilwell', team: 'Chelsea'},
    {name:'Reece James', team: 'Chelsea'},
    {name:'Cesar Azpilicueta', team: 'Chelsea'},
    {name:'Emerson Palmieri', team: 'Chelsea'},
    {name:'Luiz Frello Filho', team: 'Chelsea'},
    {name:'NGolo Kante', team: 'Chelsea'},
    {name:'Ruben Loftus Cheek', team: 'Chelsea'},
    {name:'Mateo Kovacic', team: 'Chelsea'},
    {name:'Mason Mount', team: 'Chelsea'},
    {name:'Hakim Ziyech', team: 'Chelsea'},
    {name:'Bill Gimour', team: 'Chelsea'},
    {name:'Kai Havertz', team: 'Chelsea'},
    {name:'Tammy Abraham', team: 'Chelsea'},
    {name:'Christian Pulisic', team: 'Chelsea'},
    {name:'Timo Werner team', team:'Chelsea'},
    {name:'Olivier Giroud', team: 'Chelsea'},
    {name:'Callum Hudson Odoi', team: 'Chelsea'},

  ];
  constructor(private http: HttpClient) { }
  playerSearch(name: string, team: string){
    return this.http.get(`https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/playerdetails?player=${name}&${team}`)
  }
}

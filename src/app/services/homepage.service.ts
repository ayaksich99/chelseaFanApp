import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../interface/playerinterface';
import { Standings } from '../interface/standingsinterface';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
   players: Array<Player> = [ 
    {player_name: 'Kepa Arrizabalaga', team_name: 'Chelsea', player_type: 'Goalkeeper', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Kepa_-_portrait_-_july20"},
    {player_name: 'Willy Caballero', team_name: 'Chelsea', player_type: 'Goalkeeper', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Caballero_-_portrait_-_july20"},
    {player_name: 'Edouard Mendy', team_name: 'Chelsea', player_type: 'Goalkeeper', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Edouard_Mendy_RT"},
    {player_name: 'Antonio Rudiger', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Rudiger_-_portrait_-_july20"},
    {player_name:'Marcos Alonso', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Alonso_-_portrait_-_july20"},
    {player_name:'Andreas Christensen', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Christensen_-_portrait_-_july20"},
    {player_name:'Thiago Silva', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Thiago_Silva_-profile_20-21"},
    {player_name:'Fikayo Tomori', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Tomori_-_portrait_-_july20"},
    {player_name:'Kurt Zouma', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Zouma_-_portrait_-_july20"},
    {player_name:'Ben Chilwell', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_north,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Ben_Chilwell_profile_20-21"},
    {player_name:'Reece James', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/James_-_portrait_-_july20"},
    {player_name:'Cesar Azpilicueta', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Azpi_-_portrait_-_july20"},
    {player_name:'Emerson Palmieri', team_name: 'Chelsea', player_type: 'Defender', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Palmieri_-_portrait_-_july20"},
    {player_name:'Luiz Frello Filho', team_name: 'Chelsea', player_type: 'Midfielder', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_faces,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Jorginho_-_portrait_-_july20"},
    {player_name:'NGolo Kante', team_name: 'Chelsea', player_type: 'Midfielder', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Kante_-_portrait_-_july20"},
    {player_name:'Ruben Loftus Cheek', team_name: 'Chelsea', player_type: 'Midfielder', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Loftus_Cheek_-_portrait_-_july20"},
    {player_name:'Mateo Kovacic', team_name: 'Chelsea', player_type: 'Midfielder', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Kovacic_-_portrait_-_july20"},
    {player_name:'Mason Mount', team_name: 'Chelsea', player_type: 'Midfielder', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Mount_-_portrait_-_july20"}, 
    {player_name:'Hakim Ziyech', team_name: 'Chelsea', player_type: 'Midfielder', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Ziyech_-_portrait_-_aug20"},
    {player_name:'Bill Gimour', team_name: 'Chelsea', player_type: 'Midfielder', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Gilmour_-_portrait_-_july20"},
    {player_name:'Kai Havertz', team_name: 'Chelsea', player_type: 'Midfielder', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Havertz_DSC_5324RGB"},
    {player_name:'Tammy Abraham', team_name: 'Chelsea', player_type: 'Forward', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Abraham_-_portrait_-_july20"},
    {player_name:'Christian Pulisic', team_name: 'Chelsea', player_type: 'Forward', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Pulisic_-_portrait_-_july20"},
    {player_name:'Timo Werner', team_name:'Chelsea', player_type: 'Forward', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Werner_-_portrait_-_july20"},
    {player_name:'Olivier Giroud', team_name: 'Chelsea', player_type: 'Forward', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Giroud_-_portrait_-_july20"},
    {player_name:'Callum HudsonOdoi', team_name: 'Chelsea', player_type: 'Forward', image: "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_410,q_auto,w_350,z_1.0/v1/editorial/people/first-team/2020-21/portrait/Hudson_Odoi_-_portrait_-_july20"},
  ];
  standings: Array<Standings> = [
    {league_id: '148', team_name: 'Chelsea'}
  ];
  constructor(private http: HttpClient) { }
  playerSearch(player_name: string){
    
    let first_name = player_name.split(" ")[0];
    let last_name = player_name.split(" ")[1];
    
    return this.http.get(`https://apiv2.apifootball.com/?action=get_players&player_name=${last_name}&${first_name}&APIkey=a852350dfc35e1a6a8fcb18cfd849102db07a465a13a9862243adbbd87a8ace5`)
  }
  teamStandings(league_id: string){
    return this.http.get(`https://apiv2.apifootball.com/?action=get_standings&league_id=${league_id}&APIkey=a852350dfc35e1a6a8fcb18cfd849102db07a465a13a9862243adbbd87a8ace5`)
  }
}

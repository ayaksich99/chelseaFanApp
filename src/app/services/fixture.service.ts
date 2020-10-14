import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Fixture } from '../interface/fixtureinterface';
import { HomePageService } from './homepage.service';



@Injectable({
  providedIn: 'root'
})
export class FixtureService {
 

  constructor(private router: Router, private homepageservice: HomePageService) { }
  
  
    }

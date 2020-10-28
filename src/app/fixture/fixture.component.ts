import { Component, OnInit } from '@angular/core';
import { Fixture } from '../interface/fixtureinterface';
import { FixtureService } from '../services/fixture.service';
const ELEMENT_DATA: Fixture[]= [ 
  {date: 'Mon 14 Sep', kickoff: '20:15', match:	'Brighton v Chelsea', score:	'1 - 3', result:	'W', competition:	'Premier League'},
  {date:'Sun 20 Sep', kickoff: 	'16:30', match:	'Chelsea v Liverpool', score:	'0 - 2', result:	'L', competition:	'Premier League'},
  {date:'Wed 23 Sep', kickoff: 	'19:45', match:	'Chelsea v Barnsley', score:	'6 - 0', result:	'W', competition:	'Carabao Cup 3rd'},
  {date:'Sat 26 Sep', kickoff: 	'17:30', match:	'West Bromwich Albion v Chelsea', score:	'3 - 3', result:'D', competition:	'Premier League'},
  {date:'Tue 29 Sep', kickoff: 	'19:45', match:	'Tottenham Hotspur v Chelsea', score:	'1 - 1', result:'L', competition:	'Carabao Cup 4th'},
  {date:'Sat 3 Oct', kickoff: 	'12:30', match:	'Chelsea v Crystal Palace', score:	'4  - 0', result:'W', competition:	'Premier League'},
  {date:'Sat 17 Oct', kickoff: 	'15:00', match:	'Chelsea v Southampton', score:	'3 - 3', result:'D', competition:		'Premier League'},	
  {date:'Tue 20 Oct', kickoff: 	'19:45', match:	'Chelsea v Sevilla', score:	'0 - 0', result:'D', competition:		'Champions League'},
  {date:'Sat 24 Oct', kickoff: 	'17:30', match:	'Manchester United v Chelsea', score:'0 - 0'	, result:'D', competition:  'Premier League'},
  {date:'Wed 28 Oct', kickoff: 	'19:45', match:	'Krasnodar v Chelsea', score:	'0 - 4', result:'W', competition:		'Champions League'},
  {date:'Sat 31 Oct', kickoff: 	'15:00', match:	'Burnley v Chelsea', score:	'', result:'', competition:		'Premier League'},	
  {date:'Wed 4 Nov', kickoff: 	'19:45', match:	'Chelsea v Rennes', score:'', result:'', competition:			'Champions League'},
  {date:'Sat 7 Nov', kickoff: 	'15:00', match:	'Chelsea v Sheffield United', score:'', result:	'', competition:		'Premier'},	
  {date:'Sat 21 Nov', kickoff: 	'15:00', match:	'Newcastle United v Chelsea', score:'', result:	'', competition:	'Premier'},	
  {date:'Tue 24 Nov', kickoff: 	'19:45', match:	'Rennes v Chelsea', score:''	, result:'', competition:		'Champions League'},
  {date:'Sat 28 Nov', kickoff: 	'15:00', match:	'Chelsea v Tottenham Hotspur', score:	'', result:	'', competition:	'Premier'},	
  {date:'Wed 2 Dec', kickoff: 	'19:45', match:	'Sevilla v Chelsea', score:	'', result:'', competition:		'Champions League'},
  {date:'Sat 5 Dec', kickoff: 	'15:00', match:	'Chelsea v Leeds United', score:	'', result:'', competition:		'Premier League'},	
  {date:'Tue 8 Dec', kickoff: 	'19:45', match:	'Chelsea v Krasnodar', score:''	, result:'', competition:		'Champions League'},
  {date:'Sat 12 Dec', kickoff: 	'15:00', match:	'Everton v Chelsea', score:	'', result:	'', competition:	'Premier League'},	
  {date:'Tue 15 Dec', kickoff: 	'19:45', match:	'Wolves v Chelsea', score:	'', result:'', competition:		'Premier League'},	
  {date:'Sat 19 Dec', kickoff: 	'15:00', match:	'Chelsea v West Ham United', score:''	, result:'', competition:		'Premier League'},	
  {date:'Sat 26 Dec', kickoff: 	'15:00', match:	'Arsenal v Chelsea', score:''	, result:'', competition:		'Premier League'},	
  {date:'Mon 28 Dec', kickoff: 	'15:00', match:	'Chelsea v Aston Villa', score:''	, result:'', competition:		'Premier League'},	
  {date:'Sat 2 Jan', kickoff: 	'15:00', match:	'Chelsea v Manchester City', score:	'', result:'', competition:		'Premier League'},	
  {date:'Tue 12 Jan', kickoff: 	'19:45', match:	'Leicester City v Chelsea', score:''	, result:'', competition:		'Premier League'},	
  {date:'Sat 16 Jan', kickoff: 	'15:00', match:	'Fulham FC v Chelsea', score:	'', result:'', competition:		'Premier League'},	
  {date:'Wed 27 Jan', kickoff: 	'19:45', match:	'Chelsea v Wolves', score:	'', result:'', competition:		'Premier League'},	
  {date:'Sat 30 Jan', kickoff: 	'15:00', match:	'Chelsea v Burnley', score:	'', result:'', competition:		'Premier League'},
  {date:'Wed 3 Feb', kickoff: 	'19:45', match:	'Tottenham Hotspur v Chelsea', score:''	, result:'', competition:		'Premier League'},	
  {date:'Sat 6 Feb', kickoff: 	'15:00', match:	'Sheffield United v Chelse', score: '', result:'', competition:		'Premier League'},	
  {date:'Sat 13 Feb', kickoff: 	'15:00', match:	'Chelsea v Newcastle United', score:	'', result:'', competition:		'Premier League'},	
  {date:'Sat 20 Feb', kickoff: 	'15:00', match:	'Southampton v Chelsea', score:''	, result:'', competition:	'Premier League'},	
  {date:'Sat 27 Feb', kickoff: 	'15:00', match:	'Chelsea v Manchester United', score:''	, result:'', competition:	'Premier League'},	
  {date:'Sat 6 Mar', kickoff: 	'15:00', match:	'Chelsea v Everton', score:	'', result:'', competition:		'Premier League'},	
  {date:'Sat 13 Mar', kickoff: 	'15:00', match:	'Leeds United v Chelsea', score:	'', result:'', competition:		'Premier League'},	
  {date:'Sat 20 Mar', kickoff: 	'15:00', match:	'Liverpool v Chelsea', score:	'', result:'', competition:		'Premier League'},	
  {date:'Sat 3 Apr ', kickoff:	'15:00', match:	'Chelsea v West Bromwich Albion', score:''	, result:'', competition:		'Premier League'},	
  {date:'Sat 10 Apr', kickoff: 	'15:00', match:	'Crystal Palace v Chelsea', score:''	, result:'', competition:		'Premier League'},	
  {date:'Sat 17 Apr', kickoff: 	'15:00', match:	'Chelsea v Brighton', score:''	, result:'', competition:		'Premier League'},	
  {date:'Sat 24 Apr', kickoff: 	'15:00', match:	'West Ham United v Chelsea', score:	'', result:'', competition:		'Premier League'},	
  {date:'Sat 1 May', kickoff: 	'15:00', match:	'Chelsea v Fulham FC', score:	'', result:'', competition:		'Premier League'},	
  {date:'Sat 8 May', kickoff: 	'15:00', match:	'Manchester City v Chelsea', score:	'', result:'', competition:		'Premier League'},	
  {date:'Wed 12 May', kickoff: 	'19:45', match:	'Chelsea v Arsenal', score:''	, result:'', competition:		'Premier League'},	
  {date:'Sat 15 May', kickoff: 	'15:00', match:	'Chelsea v Leicester City', score:	'', result:'', competition:	'Premier League'},	
  {date:'Sun 23 May', kickoff:  '15:00', match:	'Aston Villa v Chelsea', score:''	, result:'', competition:		'Premier League'},	
    ];


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {
  displayedColumns: string[] = ['date', 'kickoff', 'match', 'score','result', 'competition'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = ELEMENT_DATA;
  constructor(private fixtureservice: FixtureService) { }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  ngOnInit(): void {
  }

}

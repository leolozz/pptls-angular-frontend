import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from './info/info.component';
import { RulesComponent } from './rules/rules.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(public dialog: MatDialog){}

  openRulesDialog(){
    this.dialog.open(RulesComponent)
  }

  openInfoDialog(){
    this.dialog.open(InfoComponent)
  }
}

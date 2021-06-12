import { animate, style, transition, trigger } from '@angular/animations';
import { transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHandLizard, faHandPaper, faHandRock, faHandScissors, faHandSpock } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Subscription, zip } from 'rxjs';
import { Move } from '../classes/move';
import { Player } from '../classes/player';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [trigger('enterLeaveTrigger', [
    transition(':enter', [
      style({ transform: 'translateY(50px)', opacity: 0 }),
      animate('500ms ease', style({ transform: 'translateY(0)', opacity: 1 })),
    ]),
    transition(':leave', [
      animate('200ms ease', style({ opacity: 0 }))
    ])
  ]),
  trigger('actionTrigger', [
    transition(':enter', [
      style({}),
      animate('500ms ease', style({ transform: 'rotate(360deg' }))
    ]),
    transition(':leave', [
      animate('200ms ease', style({ transform: 'rotate(360deg)' }))
    ])
  ])
  ],

})
export class GameComponent implements OnInit {

  moveList: Move[] = [{
    moveName: "rock",
    moveId: 0,
    icon: 'fa-hand-rock',
  },
  {
    moveName: "paper",
    moveId: 1,
    icon: 'fa-hand-paper'
  },
  {
    moveName: "scissors",
    moveId: 2,
    icon: 'fa-hand-scissors'
  },
  {
    moveName: "lizard",
    moveId: 3,
    icon: 'fa-hand-lizard'
  },
  {
    moveName: "spock",
    moveId: 4,
    icon: 'fa-hand-spock'
  },
  ]

  // playerOnePick: number = 0;
  // playerTwoPick: number = 0;

  //   players: Player[] = [{
  //     id: 1,
  //   },
  //   {
  //     id: 2
  //   }
  // ]

  request = new Subscription();

  result!: Player;

  playerOneControl = new FormControl('', Validators.required)
  playerTwoControl = new FormControl('', Validators.required)

  constructor(private gameService: GameServiceService) {
  }

  ngOnInit(): void {
  }

  playerAction(playerId: number, moveId: number) {
    console.log(moveId)
    playerId == 1 ? this.playerOneControl.setValue(moveId) : this.playerTwoControl.setValue(moveId);
    if (this.playerOneControl.valid && this.playerTwoControl.valid) {
      this.getResult();
    }
  }

  returnPlayersState(): Player[] {
    var players: Player[] = [{
      id: 1,
      moveId: this.playerOneControl.value
    },
    {
      id: 2,
      moveId: this.playerTwoControl.value
    }];
    return players
  }

  getResult() {
    this.request = this.gameService.returnWinner(this.returnPlayersState()).subscribe(z => {this.result = z});
    }

  checkDrawState(): boolean{
    return this.result.id == 0; //fazer um enum pra listar as possibilidades de resultado?? 
  }

  returnResultMove(): Move{
    return this.moveList.find(z => z.moveId == this.result.moveId)!;
  }

  returnLooserMove(){
    var looserMoveId: number;
    this.result.moveId == this.playerOneControl.value ? looserMoveId = this.playerTwoControl.value : looserMoveId = this.playerOneControl.value;
    return this.moveList.find(z => z.moveId == looserMoveId)!
  }

  returnRotationAngle(index: number): string {
    return ((360 / this.moveList.length) * index).toString()
  }

  returnRandomPlay(): number {
    return Math.floor(Math.random()*this.moveList.length)
  }

  restartGame(){
    this.playerOneControl.setValue('');
    this.playerTwoControl.setValue('');
    this.playerOneControl.updateValueAndValidity();
    this.playerTwoControl.updateValueAndValidity();
  }

  logIt(i: any) {
    console.log(i)
  }

}

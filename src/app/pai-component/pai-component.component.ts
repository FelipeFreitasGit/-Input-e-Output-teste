import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai-component',
  templateUrl: './pai-component.component.html',
  styleUrls: ['./pai-component.component.css']
})
export class PaiComponentComponent implements OnInit {

  familia: Object[];

  constructor() {
    this.familia = [
      {
        nome: 'victor',
        sobrenome: 'Borges'
      },
      {
        nome: 'Manu',
        sobrenome: 'Borges'
      },
      {
        nome: 'Eliana',
        sobrenome: 'Borges'
      },
    ]
  }

  ngOnInit() {
    console.log("objeto do componente pai", this.familia)
  }

  /** metodo para receber emit Output do filho */
  reciverFeedback(respostaFilho) {
    console.log('Foi emitido o evento do filho que chegou no pai >>> ', respostaFilho)
  }

}

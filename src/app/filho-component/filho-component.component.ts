import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho-component',
  templateUrl: './filho-component.component.html',
  styleUrls: ['./filho-component.component.css']
})
export class FilhoComponentComponent implements OnInit {

  @Input() recebeFamilia

  @Output() respostaFamilia = new EventEmitter()

  constructor() { }

  ngOnInit() {
    console.log("objeto recebido do componente pai via Input Property.", this.recebeFamilia)
  }

  feedback() {
    this.respostaFamilia.emit(
      {
        "nome": "Rafaela",
        "sobrenome": "Souza"
      }
    )
  }

}

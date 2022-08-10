import { Component, OnInit } from '@angular/core';
import { Boletim } from './boletim';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  boletim: Boletim;
  resultado: number;

  constructor() {
    this.boletim = new Boletim();
    this.resultado = 0;
  }

  ngOnInit() {}

  calcular() {
    this.resultado = this.boletim.calcularMedia();
  }
}

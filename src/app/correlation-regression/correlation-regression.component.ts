import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-correlation-regression',
  templateUrl: './correlation-regression.component.html',
  styleUrls: ['./correlation-regression.component.css']
})
export class CorrelationRegressionComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router) { }
  valX: string;
  valY: string;
  espX: string;
  espY: string;
  varX: string;
  varY: string;
  covar: string;
  coef: string;
  pred: number;
  a: string;
  aX: string;
  b: string;
  y: string;
  ngOnInit(): void {
  }
  calculer() {
    let sommeX = 0 ;
    let sommeY = 0 ;
    let calcVarX = 0 ;
    let calcVarY = 0 ;
    let calcCo = 0 ;
    const splittedX = this.valX.split(' ');
    const splittedY = this.valY.split(' ');
    for (const i of splittedX) {
      sommeX = sommeX + Number(i);
    }
    for (const i of splittedY) {
      sommeY = sommeY + Number(i);
    }
    this.espX = String(sommeX / splittedX.length);
    this.espX = Number.parseFloat(this.espX).toFixed(3);
    this.espY = String(sommeY / splittedY.length);
    this.espY = Number.parseFloat(this.espY).toFixed(3);

    for (const i of splittedX) {
      calcVarX = calcVarX + Math.pow((Number(i) - Number(this.espX)), 2 ) ;
    }
    for (const i of splittedY) {
      calcVarY = calcVarY + Math.pow((Number(i) - Number(this.espY)), 2 ) ;
    }
    this.varX = String(calcVarX / splittedX.length) ;
    this.varX = Number.parseFloat(this.varX).toFixed(3);
    this.varY = String(calcVarY / splittedY.length) ;
    this.varY = Number.parseFloat(this.varY).toFixed(3);

    for (let i = 0; i < splittedX.length; i++) {
      calcCo = calcCo + ((Number(splittedX[i]) - Number(this.espX) ) * (Number(splittedY[i]) - Number(this.espY) )) ;
    }
    this.covar = String(calcCo / splittedX.length) ;
    this.covar = Number.parseFloat(this.covar).toFixed(3);
    this.coef = String(Number(this.covar) / (Math.sqrt(Number(this.varX)) * Math.sqrt(Number(this.varY)))) ;
    this.coef = Number.parseFloat(this.coef).toFixed(3);
    this.a = String(Number(this.covar) / Number(this.varX) );
    this.a = Number.parseFloat(this.a).toFixed(3);
    this.aX = String(Number(this.a) * Number(this.espX)) ;
    this.aX = Number.parseFloat(this.aX).toFixed(3);
    this.b = String(Number(this.espY) - Number(this.aX)) ;
    this.b = Number.parseFloat(this.b).toFixed(3);
    this.y = String((Number(this.a) * this.pred) + Number(this.b)) ;
    this.y = Number.parseFloat(this.y).toFixed(3) ;
  }
}

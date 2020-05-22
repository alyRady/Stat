import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-critere-x',
  templateUrl: './critere-x.component.html',
  styleUrls: ['./critere-x.component.css']
})
export class CritereXComponent implements OnInit {
  freq: string;
  intervalle: string;
  freqEmp: string[];
  freqRel: string[];
  taille: number;
  ppv: string;
  pgv: string;
  splitInt: string[];
  splitFreq: string[];
  splitVal: string[];
  pi: string;
  calcX: number;
  resX: string;
  constructor() { }

  ngOnInit(): void {
  }
  calculerNorm() {
    this.calcX = 0 ;
    this.splitFreq = [] ;
    this.splitInt = [] ;
    this.splitVal = [] ;
    this.freqEmp = [] ;
    this.freqRel = [] ;
    let sommePpv = 0;
    let sommePgv = 0;
    const splitPi = this.pi.split(' ') ;
    this.splitInt = this.intervalle.split(' ') ;
    this.splitFreq = this.freq.split(' ') ;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.splitFreq.length ; i++ ) {
      this.freqRel.push(String(Number(this.splitFreq[i]) / this.taille )) ;
      this.splitVal = this.splitInt[i].split(';');
      this.freqEmp.push(String((Number(this.splitVal[1]) - Number(this.splitVal[0])) / this.taille )) ;
      sommePpv = sommePpv + (Number(this.splitFreq[i]) * Number(this.splitVal[0]));
      sommePgv = sommePgv + (Number(this.splitFreq[i]) * Number(this.splitVal[1]));
      this.calcX = this.calcX + Math.pow(Number(this.freqRel[i]) - Number(splitPi[i]), 2) / Number(splitPi[i]);
    }
    this.ppv = String(sommePpv / this.taille) ;
    this.ppv = Number.parseFloat(this.ppv).toFixed(2) ;
    this.pgv = String(sommePgv / this.taille) ;
    this.pgv = Number.parseFloat(this.pgv).toFixed(2);
    this.resX = String(this.taille * this.calcX) ;
    this.resX = Number.parseFloat(this.resX).toFixed(2) ;
  }

  /*calculerUni() {
    this.splitFreq = [] ;
    this.splitInt = [] ;
    this.splitVal = [] ;
    this.freqEmp = [] ;
    this.freqRel = [] ;
    let sommePpv = 0;
    let sommePgv = 0;
    this.splitInt = this.intervalle.split(' ') ;
    this.splitFreq = this.freq.split(' ') ;
    const splitPi = this.pi.split(' ') ;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.splitFreq.length ; i++ ) {
      this.freqRel.push(String(Number(this.splitFreq[i]) / this.taille )) ;
      this.splitVal = this.splitInt[i].split(';');
      this.freqEmp.push(String((Number(this.splitVal[1]) - Number(this.splitVal[0])) / this.taille )) ;
      sommePpv = sommePpv + (Number(this.splitFreq[i]) * Number(this.splitVal[0]));
      sommePgv = sommePgv + (Number(this.splitFreq[i]) * Number(this.splitVal[1]));
    }
    this.ppv = String(sommePpv / this.taille) ;
    this.ppv = Number.parseFloat(this.ppv).toFixed(2) ;
    this.pgv = String(sommePgv / this.taille) ;
    this.pgv = Number.parseFloat(this.pgv).toFixed(2);
  }*/

}

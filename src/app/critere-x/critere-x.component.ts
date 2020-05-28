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
  // pi: string;
  calcX: number;
  resX: string;
  loi: string;
  loiUni: string;
  valPi1: string[];
  valPi2: string[];
  resPi: string[];
  constructor() { }

  ngOnInit(): void {
  }
  calculerNorm() {
    this.calcX = 0 ;
    this.splitFreq = [] ;
    this.valPi1 = [] ;
    this.valPi2 = [] ;
    this.splitInt = [] ;
    this.splitVal = [] ;
    this.freqEmp = [] ;
    this.freqRel = [] ;
    this.resPi = [] ;
    let sommePpv = 0;
    let sommePgv = 0;
    let calcPi1 = 0;
    let calcPi2 = 0;
    const f0 = 0.5;
    const f1 = 0.84134;
    const f2 = 0.97725;
    const f3 = 0.99865;
    const f4 = 0.99997;
    const f5 = 0.99999;
    // const splitPi = this.pi.split(' ') ;
    const splitLoi = this.loi.split(';') ;
    this.splitInt = this.intervalle.split(' ') ;
    this.splitFreq = this.freq.split(' ') ;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.splitFreq.length ; i++ ) {
      this.freqRel.push(String((Number(this.splitFreq[i]) / this.taille ).toFixed(4))) ;
      this.splitVal = this.splitInt[i].split(';');
      this.freqEmp.push(String(((Number(this.splitVal[1]) - Number(this.splitVal[0])) / this.taille ).toFixed(4))) ;
      sommePpv = sommePpv + (Number(this.splitFreq[i]) * Number(this.splitVal[0]));
      sommePgv = sommePgv + (Number(this.splitFreq[i]) * Number(this.splitVal[1]));
      calcPi1 = (Number(this.splitVal[1]) - Number(splitLoi[0])) / Number(splitLoi[1]);
      calcPi2 = (Number(this.splitVal[0]) - Number(splitLoi[0])) / Number(splitLoi[1]);
      this.valPi1.push(String(calcPi1.toFixed(2)));
      this.valPi2.push(String(calcPi2.toFixed(2)));
      if ( calcPi1 < 0 && calcPi2 < 0 ) {
        switch (Math.abs(calcPi1)) {
          case 0: {
            calcPi1 = f0 ;
            break;
          }
          case 1: {
            calcPi1 = f1 ;
            break;
          }
          case 2: {
            calcPi1 = f2 ;
            break;
          }
          case 3: {
            calcPi1 = f3 ;
            break;
          }
          case 4: {
            calcPi1 = f4 ;
            break;
          }
        }
        switch (Math.abs(calcPi2)) {
          case 0: {
            calcPi2 = f0 ;
            break;
          }
          case 1: {
            calcPi2 = f1 ;
            break;
          }
          case 2: {
            calcPi2 = f2 ;
            break;
          }
          case 3: {
            calcPi2 = f3 ;
            break;
          }
          case 4: {
            calcPi2 = f4 ;
            break;
          }
        }
        if (Math.abs(calcPi1) >= 5) {
          calcPi1 = f5 ;
        }
        if (Math.abs(calcPi2) >= 5) {
          calcPi2 = f5 ;
        }
        this.resPi.push(String((calcPi2 - calcPi1).toFixed(4)));
      } else if ( calcPi1 >= 0 && calcPi2 < 0 ) {
        switch (Math.abs(calcPi1)) {
          case 0: {
            calcPi1 = f0 ;
            break;
          }
          case 1: {
            calcPi1 = f1 ;
            break;
          }
          case 2: {
            calcPi1 = f2 ;
            break;
          }
          case 3: {
            calcPi1 = f3 ;
            break;
          }
          case 4: {
            calcPi1 = f4 ;
            break;
          }
        }
        switch (Math.abs(calcPi2)) {
          case 0: {
            calcPi2 = f0 ;
            break;
          }
          case 1: {
            calcPi2 = f1 ;
            break;
          }
          case 2: {
            calcPi2 = f2 ;
            break;
          }
          case 3: {
            calcPi2 = f3 ;
            break;
          }
          case 4: {
            calcPi2 = f4 ;
            break;
          }
        }
        if (Math.abs(calcPi1) >= 5) {
          calcPi1 = f5 ;
        }
        if (Math.abs(calcPi2) >= 5) {
          calcPi2 = f5 ;
        }
        this.resPi.push(String((calcPi1 + calcPi2).toFixed(4)));
      } else if ( calcPi1 >= 0 && calcPi2 >= 0 ) {
        switch (Math.abs(calcPi1)) {
          case 0: {
            calcPi1 = f0 ;
            break;
          }
          case 1: {
            calcPi1 = f1 ;
            break;
          }
          case 2: {
            calcPi1 = f2 ;
            break;
          }
          case 3: {
            calcPi1 = f3 ;
            break;
          }
          case 4: {
            calcPi1 = f4 ;
            break;
          }
        }
        switch (Math.abs(calcPi2)) {
          case 0: {
            calcPi2 = f0 ;
            break;
          }
          case 1: {
            calcPi2 = f1 ;
            break;
          }
          case 2: {
            calcPi2 = f2 ;
            break;
          }
          case 3: {
            calcPi2 = f3 ;
            break;
          }
          case 4: {
            calcPi2 = f4 ;
            break;
          }
        }
        if (Math.abs(calcPi1) >= 5) {
          calcPi1 = f5 ;
        }
        if (Math.abs(calcPi2) >= 5) {
          calcPi2 = f5 ;
        }
        this.resPi.push(String((calcPi1 - calcPi2).toFixed(4)));
      }
      console.log(this.freqRel[i]);
      console.log(this.resPi[i]);
      this.calcX = this.calcX + (Math.pow((Number(this.freqRel[i]) - Number(this.resPi[i])), 2) / (Number(this.resPi[i])));
    }
    this.ppv = String(sommePpv / this.taille) ;
    this.ppv = Number.parseFloat(this.ppv).toFixed(2) ;
    this.pgv = String(sommePgv / this.taille) ;
    this.pgv = Number.parseFloat(this.pgv).toFixed(2);
    this.resX = String(this.taille * this.calcX) ;
    this.resX = Number.parseFloat(this.resX).toFixed(2) ;
  }
  calculerUni() {
    this.calcX = 0 ;
    this.splitFreq = [] ;
    this.valPi1 = [] ;
    this.valPi2 = [] ;
    this.splitInt = [] ;
    this.splitVal = [] ;
    this.freqEmp = [] ;
    this.freqRel = [] ;
    this.resPi = [] ;
    let sommePpv = 0;
    let sommePgv = 0;
    let calcPi1 = 0;
    let calcPi2 = 0;
    const f0 = 0.5;
    const f1 = 0.84134;
    const f2 = 0.97725;
    const f3 = 0.99865;
    const f4 = 0.99997;
    const f5 = 0.99999;
    // const splitPi = this.pi.split(' ') ;
    const splitLoi = this.loi.split(';') ;
    const splitLoiUni = this.loiUni.split(' ') ;
    this.splitInt = this.intervalle.split(' ') ;
    this.splitFreq = this.freq.split(' ') ;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.splitFreq.length ; i++ ) {
      this.freqRel.push(String((Number(this.splitFreq[i]) / this.taille ).toFixed(4))) ;
      this.splitVal = this.splitInt[i].split(';');
      this.freqEmp.push(String(((Number(this.splitVal[1]) - Number(this.splitVal[0])) / this.taille ).toFixed(4))) ;
      sommePpv = sommePpv + (Number(this.splitFreq[i]) * Number(this.splitVal[0]));
      sommePgv = sommePgv + (Number(this.splitFreq[i]) * Number(this.splitVal[1]));
      calcPi1 = (Number(this.splitVal[1]) - Number(splitLoi[0])) / Number(splitLoi[1]);
      calcPi2 = (Number(this.splitVal[0]) - Number(splitLoi[0])) / Number(splitLoi[1]);
      this.valPi1.push(String(calcPi1.toFixed(2)));
      this.valPi2.push(String(calcPi2.toFixed(2)));
      if ( calcPi1 < 0 && calcPi2 < 0 ) {
        switch (Math.abs(calcPi1)) {
          case 0: {
            calcPi1 = f0 ;
            break;
          }
          case 1: {
            calcPi1 = f1 ;
            break;
          }
          case 2: {
            calcPi1 = f2 ;
            break;
          }
          case 3: {
            calcPi1 = f3 ;
            break;
          }
          case 4: {
            calcPi1 = f4 ;
            break;
          }
        }
        switch (Math.abs(calcPi2)) {
          case 0: {
            calcPi2 = f0 ;
            break;
          }
          case 1: {
            calcPi2 = f1 ;
            break;
          }
          case 2: {
            calcPi2 = f2 ;
            break;
          }
          case 3: {
            calcPi2 = f3 ;
            break;
          }
          case 4: {
            calcPi2 = f4 ;
            break;
          }
        }
        if (Math.abs(calcPi1) >= 5) {
          calcPi1 = f5 ;
        }
        if (Math.abs(calcPi2) >= 5) {
          calcPi2 = f5 ;
        }
      } else if ( calcPi1 >= 0 && calcPi2 < 0 ) {
        switch (Math.abs(calcPi1)) {
          case 0: {
            calcPi1 = f0 ;
            break;
          }
          case 1: {
            calcPi1 = f1 ;
            break;
          }
          case 2: {
            calcPi1 = f2 ;
            break;
          }
          case 3: {
            calcPi1 = f3 ;
            break;
          }
          case 4: {
            calcPi1 = f4 ;
            break;
          }
        }
        switch (Math.abs(calcPi2)) {
          case 0: {
            calcPi2 = f0 ;
            break;
          }
          case 1: {
            calcPi2 = f1 ;
            break;
          }
          case 2: {
            calcPi2 = f2 ;
            break;
          }
          case 3: {
            calcPi2 = f3 ;
            break;
          }
          case 4: {
            calcPi2 = f4 ;
            break;
          }
        }
        if (Math.abs(calcPi1) >= 5) {
          calcPi1 = f5 ;
        }
        if (Math.abs(calcPi2) >= 5) {
          calcPi2 = f5 ;
        }
      } else if ( calcPi1 >= 0 && calcPi2 >= 0 ) {
        switch (Math.abs(calcPi1)) {
          case 0: {
            calcPi1 = f0 ;
            break;
          }
          case 1: {
            calcPi1 = f1 ;
            break;
          }
          case 2: {
            calcPi1 = f2 ;
            break;
          }
          case 3: {
            calcPi1 = f3 ;
            break;
          }
          case 4: {
            calcPi1 = f4 ;
            break;
          }
        }
        switch (Math.abs(calcPi2)) {
          case 0: {
            calcPi2 = f0 ;
            break;
          }
          case 1: {
            calcPi2 = f1 ;
            break;
          }
          case 2: {
            calcPi2 = f2 ;
            break;
          }
          case 3: {
            calcPi2 = f3 ;
            break;
          }
          case 4: {
            calcPi2 = f4 ;
            break;
          }
        }
        if (Math.abs(calcPi1) >= 5) {
          calcPi1 = f5 ;
        }
        if (Math.abs(calcPi2) >= 5) {
          calcPi2 = f5 ;
        }
      }
      this.resPi.push(String((Number(this.splitVal[1]) - Number(this.splitVal[0])) * Number(splitLoiUni[i])));
      console.log(this.freqRel[i]);
      console.log(this.resPi[i]);
      this.calcX = this.calcX + (Math.pow((Number(this.freqRel[i]) - Number(this.resPi[i])), 2) / (Number(this.resPi[i])));
    }
    this.ppv = String(sommePpv / this.taille) ;
    this.ppv = Number.parseFloat(this.ppv).toFixed(2) ;
    this.pgv = String(sommePgv / this.taille) ;
    this.pgv = Number.parseFloat(this.pgv).toFixed(2);
    this.resX = String(this.taille * this.calcX) ;
    this.resX = Number.parseFloat(this.resX).toFixed(2) ;
  }
  /*erf() {
    const x = 3.5;
    const lim = ((1 / 3) * Math.pow(x , 3)) - (0.5 * x) ;
    let s = 1 ;
    let t = 1 ;
    const deno = 1 / (2 * Math.pow(x , 2)) ;
    for (let i = 2 ; i < lim ; i++ ) {
      t = -t * (2 * i - 1) * deno ;
      s = s + t ;
    }
    console.log(1 - s / (Math.exp(Math.pow(x , 2)) * x * Math.sqrt(Math.PI)));
    return (1 - s / (Math.exp(Math.pow(x , 2)) * x * Math.sqrt(Math.PI))) ;
  }

  calculerUni() {
    this.calcX = 0 ;
    this.splitFreq = [] ;
    this.valPi1 = [] ;
    this.valPi2 = [] ;
    this.splitInt = [] ;
    this.splitVal = [] ;
    this.freqEmp = [] ;
    this.freqRel = [] ;
    this.resPi = [] ;
    let sommePpv = 0;
    let sommePgv = 0;
    let calcPi1 = 0;
    let calcPi2 = 0;
    const f0 = 0.5;
    const f1 = 0.84134;
    const f2 = 0.97725;
    const f3 = 0.99865;
    const f4 = 0.99997;
    const f5 = 0.99999;
    // const splitPi = this.pi.split(' ') ;
    const splitLoi = this.loi.split(';') ;
    this.splitInt = this.intervalle.split(' ') ;
    this.splitFreq = this.freq.split(' ') ;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.splitFreq.length ; i++ ) {
      this.freqRel.push(String((Number(this.splitFreq[i]) / this.taille ).toFixed(4))) ;
      this.splitVal = this.splitInt[i].split(';');
      this.freqEmp.push(String(((Number(this.splitVal[1]) - Number(this.splitVal[0])) / this.taille ).toFixed(4))) ;
      sommePpv = sommePpv + (Number(this.splitFreq[i]) * Number(this.splitVal[0]));
      sommePgv = sommePgv + (Number(this.splitFreq[i]) * Number(this.splitVal[1]));
      calcPi1 = (Number(this.splitVal[1]) - Number(splitLoi[0])) / Number(splitLoi[1]);
      calcPi2 = (Number(this.splitVal[0]) - Number(splitLoi[0])) / Number(splitLoi[1]);
      this.valPi1.push(String(calcPi1.toFixed(2)));
      this.valPi2.push(String(calcPi2.toFixed(2)));
      if ( calcPi1 < 0 && calcPi2 < 0 ) {
        switch (Math.abs(calcPi1)) {
          case 0: {
            calcPi1 = f0 ;
            break;
          }
          case 1: {
            calcPi1 = f1 ;
            break;
          }
          case 2: {
            calcPi1 = f2 ;
            break;
          }
          case 3: {
            calcPi1 = f3 ;
            break;
          }
          case 4: {
            calcPi1 = f4 ;
            break;
          }
        }
        switch (Math.abs(calcPi2)) {
          case 0: {
            calcPi2 = f0 ;
            break;
          }
          case 1: {
            calcPi2 = f1 ;
            break;
          }
          case 2: {
            calcPi2 = f2 ;
            break;
          }
          case 3: {
            calcPi2 = f3 ;
            break;
          }
          case 4: {
            calcPi2 = f4 ;
            break;
          }
        }
        if (Math.abs(calcPi1) >= 5) {
          calcPi1 = f5 ;
        }
        if (Math.abs(calcPi2) >= 5) {
          calcPi2 = f5 ;
        }
        this.resPi.push(String((calcPi2 - calcPi1).toFixed(4)));
      } else if ( calcPi1 >= 0 && calcPi2 < 0 ) {
        switch (Math.abs(calcPi1)) {
          case 0: {
            calcPi1 = f0 ;
            break;
          }
          case 1: {
            calcPi1 = f1 ;
            break;
          }
          case 2: {
            calcPi1 = f2 ;
            break;
          }
          case 3: {
            calcPi1 = f3 ;
            break;
          }
          case 4: {
            calcPi1 = f4 ;
            break;
          }
        }
        switch (Math.abs(calcPi2)) {
          case 0: {
            calcPi2 = f0 ;
            break;
          }
          case 1: {
            calcPi2 = f1 ;
            break;
          }
          case 2: {
            calcPi2 = f2 ;
            break;
          }
          case 3: {
            calcPi2 = f3 ;
            break;
          }
          case 4: {
            calcPi2 = f4 ;
            break;
          }
        }
        if (Math.abs(calcPi1) >= 5) {
          calcPi1 = f5 ;
        }
        if (Math.abs(calcPi2) >= 5) {
          calcPi2 = f5 ;
        }
        this.resPi.push(String((calcPi1 + calcPi2).toFixed(4)));
      } else if ( calcPi1 >= 0 && calcPi2 >= 0 ) {
        switch (Math.abs(calcPi1)) {
          case 0: {
            calcPi1 = f0 ;
            break;
          }
          case 1: {
            calcPi1 = f1 ;
            break;
          }
          case 2: {
            calcPi1 = f2 ;
            break;
          }
          case 3: {
            calcPi1 = f3 ;
            break;
          }
          case 4: {
            calcPi1 = f4 ;
            break;
          }
        }
        switch (Math.abs(calcPi2)) {
          case 0: {
            calcPi2 = f0 ;
            break;
          }
          case 1: {
            calcPi2 = f1 ;
            break;
          }
          case 2: {
            calcPi2 = f2 ;
            break;
          }
          case 3: {
            calcPi2 = f3 ;
            break;
          }
          case 4: {
            calcPi2 = f4 ;
            break;
          }
        }
        if (Math.abs(calcPi1) >= 5) {
          calcPi1 = f5 ;
        }
        if (Math.abs(calcPi2) >= 5) {
          calcPi2 = f5 ;
        }
        this.resPi.push(String((calcPi1 - calcPi2).toFixed(4)));
      }
      console.log(this.freqRel[i]);
      console.log(this.resPi[i]);
      this.calcX = this.calcX + (Math.pow((Number(this.freqRel[i]) - Number(this.resPi[i])), 2) / (Number(this.resPi[i])));
    }
    this.ppv = String(sommePpv / this.taille) ;
    this.ppv = Number.parseFloat(this.ppv).toFixed(2) ;
    this.pgv = String(sommePgv / this.taille) ;
    this.pgv = Number.parseFloat(this.pgv).toFixed(2);
    this.resX = String(this.taille * this.calcX) ;
    this.resX = Number.parseFloat(this.resX).toFixed(2) ;
  }
  erff() {
    const X = 1 ;
    const N = 300;
    const Pas = X / N;
    let S = (1 + Math.exp( Math.pow(-(N * Pas), 2))) * 5257 / 17280;
    S = S + (Math.exp(Math.pow(-(Pas) , 2)) + Math.exp(Math.pow(-((N - 1) * Pas) , 2))) * 22081 / 15120;
    S = S + (Math.exp(Math.pow(-(2 * Pas), 2)) + Math.exp(Math.pow(-((N - 2) * Pas), 2))) * 54851 / 120960;
    S = S + (Math.exp(Math.pow(-(3 * Pas), 2)) + Math.exp(Math.pow(-((N - 3) * Pas) , 2))) * 103 / 70;
    S = S + (Math.exp(Math.pow(-(4 * Pas), 2)) + Math.exp(Math.pow(-((N - 4) * Pas) , 2))) * 89437 / 120960;
    S = S + (Math.exp(Math.pow(-(5 * Pas), 2)) + Math.exp(Math.pow(-((N - 5) * Pas) , 2))) * 16367 / 15120;
    S = S + (Math.exp(Math.pow(-(6 * Pas), 2)) + Math.exp(Math.pow(-((N - 6) * Pas) , 2))) * 23917 / 24192;
    for (let j = 7 ; j < N - 7 ; j++) {
      S = S + (Math.exp(Math.pow(-(j * Pas), 2))) ;
    }
    console.log(S * Pas / Math.sqrt(Math.atan(1)));
    return S * Pas / Math.sqrt(Math.atan(1));
  }
  erfff() {
    const X = 1 ;
    let T = X;
    let S = T;
    for ( let j = 0 ; j < 200 ; j++) {
      // tslint:disable-next-line:no-bitwise
      T = -T * X ^ 2 * (2 * j + 1) / (j + 1) / (2 * j + 3);
      S = S + T;
      if (Math.abs(T) < 1 * Math.pow(10 , -17)) {
        break;
      }
    }
    console.log(S / Math.sqrt(Math.atan(1)));
  }*/

}

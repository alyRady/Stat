import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intervalle-confiance',
  templateUrl: './intervalle-confiance.component.html',
  styleUrls: ['./intervalle-confiance.component.css']
})
export class IntervalleConfianceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*
import math
def phi(x):
  return (1.0 + math.erf(x / math.sqrt(2.0))) / 2.0
i=2.99
if(i<3):
  print(round(phi(i),4))
elif(i>=3):
  print(round(phi(i),5))*/
}

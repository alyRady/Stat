import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-correlation-regression',
  templateUrl: './correlation-regression.component.html',
  styleUrls: ['./correlation-regression.component.css']
})
export class CorrelationRegressionComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  estimations() {
    this.router.navigate(['estimations']);
  }
}

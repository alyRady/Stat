import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CorrelationRegressionComponent } from './correlation-regression/correlation-regression.component';
import { CritereXComponent } from './critere-x/critere-x.component';
import { IntervalleConfianceComponent } from './intervalle-confiance/intervalle-confiance.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EstimationsComponent } from './estimations/estimations.component';
const appRoutes: Routes = [
  {path: 'correlation-regression', component: CorrelationRegressionComponent},
  {path: 'critereX', component: CritereXComponent},
  {path: 'intervalle-confiance', component: IntervalleConfianceComponent},
  {path: 'estimations', component: EstimationsComponent},
  {path: '', component: CorrelationRegressionComponent},
  {path: '**', component: CorrelationRegressionComponent}
  ]
;

@NgModule({
  declarations: [
    AppComponent,
    CorrelationRegressionComponent,
    CritereXComponent,
    IntervalleConfianceComponent,
    EstimationsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

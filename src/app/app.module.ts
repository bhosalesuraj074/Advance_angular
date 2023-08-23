import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes & services/filter.pipe';
import { ParentComponent } from './hooks/parent/parent.component';
import { ChildComponent } from './hooks/child/child.component';
import { RapidComponent } from './rapid/rapid.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Rapid } from './pipes & services/rapid';
import { Rapid2 } from './pipes & services/rapid2';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'hooks', component: ParentComponent },
  { path: 'rapid', component: RapidComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    PipesComponent,
    HomeComponent,
    FilterPipe,
    ParentComponent,
    ChildComponent,
    RapidComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Rapid,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Rapid2,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}

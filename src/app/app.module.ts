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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'hooks', component: ParentComponent },
];
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  declarations: [
    AppComponent,
    PipesComponent,
    HomeComponent,
    FilterPipe,
    ParentComponent,
    ChildComponent,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}

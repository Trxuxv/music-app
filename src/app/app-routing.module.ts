import { MajorComponent } from './pages/pentatonics/major/major.component';
import { MinorComponent } from './pages/pentatonics/minor/minor.component';
import { PentatonicsComponent } from './pages/pentatonics/pentatonics.component';
import { MainChordsComponent } from './pages/main-chords/main-chords.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: HomeComponent, children:[
        {path: 'chords', component: MainChordsComponent},
        {path: 'pentatonics', component: PentatonicsComponent, children:[
          {path:'minor', component: MinorComponent},
          {path:'major', component: MajorComponent}
        ]},
      ] },

      {path: 'page2', component: MainChordsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
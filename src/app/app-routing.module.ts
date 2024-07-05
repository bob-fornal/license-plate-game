import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { NewTripComponent } from './pages/new-trip/new-trip.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'new-trip', component: NewTripComponent},
  { path: 'game/:id', component: GameComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

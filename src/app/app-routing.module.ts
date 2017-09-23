import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { GutenTagComponent } from './guten-tag/guten-tag.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'hello', component: HelloComponent },
      { path: 'bonjour', component: BonjourComponent },
      { path: 'guten-tag', component: GutenTagComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

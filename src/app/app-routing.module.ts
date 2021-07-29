import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Users } from './users';
import { UsersComponent } from './users/users.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'about-us', component: AboutUsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresslistComponent } from './addresslist/addresslist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewaddComponent } from './newadd/newadd.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'addresslist',component:AddresslistComponent},
  {path:'viewdata/:id',component:ViewdataComponent},
  {path:'newadd',component:NewaddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

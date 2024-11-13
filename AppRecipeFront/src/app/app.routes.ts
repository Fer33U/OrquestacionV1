import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component'; // Asegúrate de crear este componente
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { FavoriteRecipiesComponent } from './favorite-recipies/favorite-recipies.component';
import { ProfileComponent } from './profile/profile.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { PersonalRecipiesComponent } from './personal-recipies/personal-recipies.component';
import {CrearRecetasComponent} from './crear-recetas/crear-recetas.component'

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Usa un componente de inicio
  { path: 'InicioSesion', component: SigninComponent },
  { path: 'Registro', component: SignupComponent },
  { path: 'Principal', component: PrincipalPageComponent },
  { path: 'RecetasPersonales', component: PersonalRecipiesComponent },
  { path: 'RecetasFavoritas', component: FavoriteRecipiesComponent },
  { path: 'ListaCompra', component: ListaCompraComponent },
  { path: 'Perfil', component: ProfileComponent },
  { path: 'CrearRecetas', component: CrearRecetasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

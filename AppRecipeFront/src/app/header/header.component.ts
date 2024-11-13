import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../Services/auth.service'; // Asegúrate de importar tu servicio de autenticación
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true, // Añade esta línea para definir el componente como independiente
  imports: [RouterLink, CommonModule], // Importa RouterLink para usarlo en las plantillas
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Método que verifica si el usuario está autenticado
  }

  logout() {
    this.authService.logout(); // Método para cerrar sesión
  }
}

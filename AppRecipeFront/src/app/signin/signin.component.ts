import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  usernameOrEmail: string = '';
  password: string = '';
  alertMessage: string | null = null;
  alertClass: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    this.authService.iniciarSesion(this.usernameOrEmail, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.alertMessage = 'Inicio de sesión exitoso.';
        this.alertClass = 'alert-success';
        this.router.navigate(['/Principal']);
      },
      (error) => {
        this.alertMessage = 'Error al iniciar sesión: ' + (error.error.message || 'Ocurrió un error inesperado');
        this.alertClass = 'alert-danger';
      }
    );
  }
}

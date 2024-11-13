// src/app/signup/signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap'; // Importar bootstrap
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  nombreUser: string = '';
  email: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  alertMessage: string | null = null; // Mensaje para las alertas

  constructor(private authService: AuthService) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  registrarUsuario() {
    this.authService.registrarUsuario(this.nombreUser, this.email, this.password).subscribe(
      (response) => {
        this.alertMessage = 'El registro fue exitoso.';
        this.showModal();
        this.limpiarCampos(); // Limpia los campos después de un registro exitoso
      },
      (error) => {
        this.alertMessage = 'Ocurrió un error, revisar los campos o intentar más tarde.';
        this.showModal();
      }
    );
  }

  showModal() {
    const modal = new bootstrap.Modal(document.getElementById('alertModal')!);
    modal.show();
  }

  closeModal() {
    this.alertMessage = null; // Reinicia el mensaje de alerta al cerrar
  }

  limpiarCampos() {
    this.nombreUser = '';
    this.email = '';
    this.password = '';
  }
}

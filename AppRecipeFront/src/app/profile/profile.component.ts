import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usuario: any = {}; // Almacena los datos del usuario

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.cargarDatosUsuario(); // Cargar datos del usuario al iniciar el componente
  }

  cargarDatosUsuario(): void {
    this.profileService.obtenerPerfil().subscribe(
      (data) => {
        this.usuario = data; // Almacenar los datos del usuario obtenidos
      },
      (error) => {
        console.error('Error al obtener datos del usuario:', error);
      }
    );
  }
}

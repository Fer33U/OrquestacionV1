import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearRecetaService {
  private apiUrl = 'http://localhost:3000/recetas'; // URL del backend para guardar recetas

  constructor(private http: HttpClient) {}

  // Método para enviar una nueva receta al backend
  crearReceta(receta: any): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage

    // Definir los headers con el token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Enviar el token en el encabezado Authorization
    });

    return this.http.post(this.apiUrl, receta, { headers });
  }
}

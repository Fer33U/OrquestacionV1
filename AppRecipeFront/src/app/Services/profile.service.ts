import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/perfil';

  constructor(private http: HttpClient) {}

  obtenerPerfil(): Observable<any> {
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Configura el encabezado de autorización
    return this.http.get<any>(this.apiUrl, { headers });
  }
}

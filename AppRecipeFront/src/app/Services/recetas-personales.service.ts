import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasPersonalesService {

  private apiUrl = 'http://localhost:3000/recetas'; // Cambia esto a tu endpoint de la API

  constructor(private http: HttpClient) { }

  // Método para obtener las recetas del usuario
  obtenerRecetas(): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    if (!token) {
      throw new Error('Token no encontrado');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Enviar el token en los encabezados
    });

    return this.http.get(this.apiUrl, { headers }); // Realizar la solicitud GET con los headers
  }

  // Método para eliminar una receta
  eliminarReceta(id: string): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    if (!token) {
      throw new Error('Token no encontrado');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Enviar el token en los encabezados
    });

    return this.http.delete(`${this.apiUrl}/${id}`, { headers }); // Solicitud DELETE con el id de la receta
  }
}

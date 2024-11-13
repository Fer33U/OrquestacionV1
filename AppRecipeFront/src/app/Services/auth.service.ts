import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

// Método para iniciar sesión
iniciarSesion(usernameOrEmail: string, password: string): Observable<any> {
  const url = `${this.apiUrl}/iniciar-sesion`;
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const body = JSON.stringify({ usernameOrEmail, password });

  return this.http.post<any>(url, body, { headers }).pipe(
    tap((response) => {
      if (response && response.token) {
        localStorage.setItem('token', response.token); // Guarda el token en localStorage
      }
    })
  );
}


  // Método para registrar un nuevo usuario
  registrarUsuario(nombreUser: string, email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ nombreUser, email, password });

    return this.http.post(url, body, { headers });
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('token'); // Eliminar el token
  }

  //Metodo para verificar si hay una sesion activa
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Retorna true si el token existe
  }
}

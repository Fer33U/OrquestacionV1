import { AppRoutingModule } from './app/app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule), // Importa los proveedores del módulo de rutas
    provideHttpClient() // Proveedor para HttpClient
  ]
})
.catch((err) => console.error(err));

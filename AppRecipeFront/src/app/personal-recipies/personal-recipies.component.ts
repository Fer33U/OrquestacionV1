import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasPersonalesService } from '../Services/recetas-personales.service';

@Component({
  selector: 'app-personal-recipies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-recipies.component.html',
  styleUrls: ['./personal-recipies.component.css']
})
export class PersonalRecipiesComponent implements OnInit {

  recetas: any[] = []; // Arreglo para almacenar las recetas del usuario

  constructor(private recetasService: RecetasPersonalesService) { }

  ngOnInit(): void {
    this.obtenerRecetas(); // Llamar al método para obtener las recetas
  }

  // Método para obtener las recetas del servicio
  obtenerRecetas(): void {
    this.recetasService.obtenerRecetas().subscribe(
      (data: any) => {
        this.recetas = data; // Asignar las recetas recibidas a la propiedad
      },
      (error: any) => {
        console.error('Error al obtener las recetas', error);
      }
    );
  }

  // Método para eliminar una receta
  eliminarReceta(id: string): void {
    this.recetasService.eliminarReceta(id).subscribe(
      () => {
        // Eliminar la receta del arreglo local después de que se haya eliminado en el backend
        this.recetas = this.recetas.filter(receta => receta._id !== id);
      },
      (error: any) => {
        console.error('Error al eliminar la receta', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { CrearRecetaService } from '../Services/crear-receta.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-recetas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-recetas.component.html',
  styleUrls: ['./crear-recetas.component.css']
})
export class CrearRecetasComponent {
  recipe = {
    title: '',
    ingredients: [] as string[],
    instructions: [] as string[],
    imageUrl: ''
  };

  newIngredient: string = '';
  newInstruction: string = '';
  editingIngredientIndex: number | null = null;
  editingInstructionIndex: number | null = null;
  tempIngredient: string = '';
  tempInstruction: string = '';
  imageUrl: string = '';

  constructor(private crearRecetaService: CrearRecetaService, private router: Router) {} // Inyectar el servicio

  addIngredient() {
    if (this.newIngredient.trim()) {
      this.recipe.ingredients.push(this.newIngredient);
      this.newIngredient = '';
    }
  }

  removeIngredient(index: number) {
    this.recipe.ingredients.splice(index, 1);
  }

  addInstruction() {
    if (this.newInstruction.trim()) {
      this.recipe.instructions.push(this.newInstruction);
      this.newInstruction = '';
    }
  }

  removeInstruction(index: number) {
    this.recipe.instructions.splice(index, 1);
  }

  // Método para alternar entre edición y visualización de un ingrediente
  toggleEditingIngredient(index: number, ingredient: string) {
    if (this.editingIngredientIndex === index) {
      this.editingIngredientIndex = null; // Terminar edición
    } else {
      this.editingIngredientIndex = index; // Empezar a editar
      this.tempIngredient = ingredient; // Guardar temporalmente el valor
    }
  }

  // Método para actualizar el ingrediente una vez editado
  updateIngredient(index: number) {
    if (this.tempIngredient.trim()) {
      this.recipe.ingredients[index] = this.tempIngredient;
      this.editingIngredientIndex = null; // Terminar la edición
    }
  }

  // Método para alternar entre edición y visualización de una instrucción
  toggleEditingInstruction(index: number, instruction: string) {
    if (this.editingInstructionIndex === index) {
      this.editingInstructionIndex = null; // Terminar edición
    } else {
      this.editingInstructionIndex = index; // Empezar a editar
      this.tempInstruction = instruction; // Guardar temporalmente el valor
    }
  }

  // Método para actualizar la instrucción una vez editada
  updateInstruction(index: number) {
    if (this.tempInstruction.trim()) {
      this.recipe.instructions[index] = this.tempInstruction;
      this.editingInstructionIndex = null; // Terminar la edición
    }
  }

  // Método para enviar la receta al backend
  submitRecipe() {
    // Asigna imageUrl al objeto recipe
    this.recipe.imageUrl = this.imageUrl;  // Asegúrate de incluir el imageUrl

    this.crearRecetaService.crearReceta(this.recipe).subscribe(
      response => {
        console.log('Receta guardada con éxito:', response);
        this.router.navigate(['/RecetasPersonales']); // Redirigir a /RecetasPersonales
      },
      error => {
        console.error('Error al guardar la receta:', error);
      }
    );
  }
}

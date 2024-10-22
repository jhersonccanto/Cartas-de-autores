import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [NabvarComponent,NgFor,RouterLink],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {
autores=[
  {
    nombre: 'Mario Vargas Llosa',
    city: 'Arequipa',
    image: 'https://www.cervantes.es/imagenes/Image/bibliotecas_documentacion_espanol/biobibliografias/vargas_llosa_mario.png',
    descripcion:'(Arequipa, Perú, 28 de marzo de 1936). Escritor, político y periodista peruano. Premio Nobel de Literatura 2010.'
  },
  {
    nombre: 'William Shakespeare',
    city: 'Stratford on Avon',
    image: 'https://www.biografiasyvidas.com/biografia/s/fotos/shakespeare_william_2.jpg',
    descripcion:'(Stratford on Avon, Reino Unido, 1564 - id., 1616) Dramaturgo y poeta inglés.'
  },
  {
    nombre: 'Homero',
    city: 'Quíos',
    image: 'https://www.biografiasyvidas.com/biografia/h/fotos/homero_2.jpg',
    descripcion:'Poeta griego al que se atribuye la autoría de la Ilíada y la Odisea, los dos grandes poemas épicos de la antigua Grecia.'
  }
]
}

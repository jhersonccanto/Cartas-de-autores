import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [NabvarComponent],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {

}

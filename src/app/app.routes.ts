import { Routes } from '@angular/router';
import { NabvarComponent } from './componentes/nabvar/nabvar.component';
import { AutorComponent } from './componentes/autor/autor.component';
import { LibroComponent } from './componentes/libro/libro.component';
import { BiografiaComponent } from './componentes/biografia/biografia.component';

export const routes: Routes = [
    { 
        path: '', 
        component: NabvarComponent, 
        title: 'principal'
    },
    { 
        path: 'autor', 
        component: AutorComponent, 
        title: 'soy autor'
    },
    { 
        path: 'libro', 
        component: LibroComponent, 
        title: 'soy un libro'
    },
    { 
        path: 'biografia', 
        component: BiografiaComponent, 
        title: 'soy una biografia'
    },
    { 
        path: '**', 
        redirectTo: '',
        pathMatch: 'full',
    }
    
];

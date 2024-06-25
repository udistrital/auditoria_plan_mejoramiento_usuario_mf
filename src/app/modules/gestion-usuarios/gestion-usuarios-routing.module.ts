import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';

const routes: Routes = [
    { path:"",
      children: [
        {
          path: 'registrar-usuario',
          component: RegistrarUsuarioComponent
        },
        {
        path: 'actualizar-usuario',
        component: ActualizarUsuarioComponent
        },
      ],
    }
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GestionUsuariosRoutingModule { }
  
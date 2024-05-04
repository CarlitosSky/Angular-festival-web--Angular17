import { Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PagProductosComponent } from './paginas/pag-productos/pag-productos.component';
import { PagContactoComponent } from './paginas/pag-contacto/pag-contacto.component';
import { PagRegistrarseComponent } from './paginas/pag-registrarse/pag-registrarse.component';
import { PagInicioSesionComponent } from './paginas/pag-inicio-sesion/pag-inicio-sesion.component';
import { PagPagoComponent } from './paginas/pag-pago/pag-pago.component';
import { PagCarritoComponent } from './paginas/pag-carrito/pag-carrito.component';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    //Routes - NO
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", title:"Home",component: PrincipalComponent},
    {path: "productos", title:"Productos",component: PagProductosComponent},
    {path: "contacto", title:"Contacto",component: PagContactoComponent},
    {path: "registro", title:"Registrate",component: PagRegistrarseComponent},
    {path: "inicioSesion", title:"Inicia sesion",component: PagInicioSesionComponent},
    {path: "pago", title:"Metodo de pago",component: PagPagoComponent},
    {path: "carrito", title:"Tu carrito",component: PagCarritoComponent},


    //ULTIMAS RUTAS SIEMPRE

    {path: "**", component: PageNotFoundComponent}

];

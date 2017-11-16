import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ModuleWithProviders} from '@angular/core';


import { HomeComponent } from './home/home.component';

// Logs components 
import { LoadComponent } from './logs/load/load.component';
import { CallComponent } from './logs/call/call.component';
import { ProgramComponent } from './logs/program/program.component';





export const routes:Routes = [
     {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'loadlog',
        component:LoadComponent
    },
    {
        path:'calllog',
        component:CallComponent
    }, 
    {
        path:'programlog',
        component:ProgramComponent
    },  

]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes); 
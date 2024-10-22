import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardStudentComponent } from './pages/dashboard-student/dashboard-student.component';
import { DashboardTeacherComponent } from './pages/dashboard-teacher/dashboard-teacher.component';
import { ListProfesoresComponent } from './pages/estudiante/list-profesores/list-profesores.component';
import { MisProfesoresComponent } from './pages/estudiante/mis-profesores/mis-profesores.component';
import { MiPerfilComponent } from './pages/estudiante/mi-perfil/mi-perfil.component';
import { EditarPerfilComponent } from './pages/estudiante/editar-perfil/editar-perfil.component';
import { MisAlumnosComponent } from './pages/profesor/mis-alumnos/mis-alumnos.component';
import { MiPerfilProfesorComponent } from './pages/profesor/mi-perfil-profesor/mi-perfil-profesor.component';
import { EditarmiPerfilComponent } from './pages/profesor/editarmi-perfil/editarmi-perfil.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { ValidarProfesoresComponent } from './pages/admin/validar-profesores/validar-profesores.component';
import { ValidarAlumnosComponent } from './pages/admin/validar-alumnos/validar-alumnos.component';
import { PerfilAdminComponent } from './pages/admin/perfil-admin/perfil-admin.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'dashboard' },
    {path:"dashboard",component:DashboardComponent, children: [
        { path: "", pathMatch: 'full', redirectTo: 'home'},//
        { path: "home", component: HomeComponent },
        { path: "login", component: LoginComponent },
        { path: "register", component: RegisterComponent },       
    ]},    
    {path:"estudiante",component:DashboardStudentComponent ,children: [
            { path: "", pathMatch: 'full', redirectTo: 'prof-list'},//list-Profesores
            { path: "prof-list", component: ListProfesoresComponent },//list-Profesores
            { path: "mis-prof", component: MisProfesoresComponent }, //misProfesores
            { path: ":id", component: MiPerfilComponent },//mi-perfil
            { path: "actualiza/:id", component: EditarPerfilComponent },//editarAlumno
            {path:"**",redirectTo:'prof-list'} 
    ]},
    {
        path:"profesor", component:DashboardTeacherComponent,children: [
            { path: "", pathMatch: 'full', redirectTo: 'mis-alumnos'},//misAlumnos
            { path: "mis-alumnos", component: MisAlumnosComponent },//misAlumnos
            { path: ":id", component: MiPerfilProfesorComponent },//perfilProfesor
            { path: "actualizar/:id", component: EditarmiPerfilComponent },//editarProfesor
            {path:"**",redirectTo:'mis-alumnos'} 
    ]},
    {path:"admin", component:DashboardAdminComponent , children: [
           { path: "", pathMatch: 'full', redirectTo: 'validar-prof'},//ValidarProfesores
            { path: "validar-prof", component: ValidarProfesoresComponent },//validarProfesores
            { path: "validar-alumnos", component: ValidarAlumnosComponent },//validarAlumnos
            { path: ":id", component: PerfilAdminComponent },//perfilAdmin
            { path: "actualiza/:id", component: EditarPerfilComponent },//editarAdmin
           {path:"**",redirectTo:'validar-prof'} 
    ]},
    {path:"**",redirectTo:"dashboard"}
];

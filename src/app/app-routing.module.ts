import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PARENT_PATHS } from './modules/shared/constant-files/routing-paths';
import { AuthGuard } from './modules/shared/guards/auth.guard';

const routes: Routes = [
    { path: PARENT_PATHS.DEFAULT, redirectTo: PARENT_PATHS.AUTH, pathMatch:'full' },
    { path: PARENT_PATHS.AUTH, loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
    { path: PARENT_PATHS.USER, loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard/containers';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthGuard} from './pages/auth/guards';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent
  },
  {
    path: 'newsfeed',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/news-feed/news-feed.module').then(m => m.NewsFeedModule)
  },
  {
    path: 'inbox',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxModule)
  },
  {
    path: 'employees',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeeModule)
  },
  {
    path: 'talent-track',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/talent-track/talent-track.module').then(m => m.TalentTrackModule)
  },
  {
    path: 'tables',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'notification',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

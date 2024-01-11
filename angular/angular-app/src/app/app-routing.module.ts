import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { authGuard } from 'src/auth/auth.guard';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
    canActivate: [ authGuard]
  },
  {
    path: 'callback', component: CallbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

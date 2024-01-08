import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../@service/api.service';
import { Task } from '../@interface/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{
  tasks$!: Observable<Task[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.getTasks();
  }

  public getTasks() {
    this.tasks$ = this.apiService.getTasks();
  }
}

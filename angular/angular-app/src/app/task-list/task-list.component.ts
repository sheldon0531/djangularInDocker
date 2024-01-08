import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  task_form!: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getTasks();
    this.task_form = this.fb.group({
      title: '',
      content: ''
    });
  }

  onSubmit() {
    // Create the Task
    this.apiService.postTask(this.task_form.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      )
  }

  public getTasks() {
    this.tasks$ = this.apiService.getTasks();
  }
}

import { Component, OnInit } from '@angular/core';
import {TaskService} from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor(private TaskService:TaskService,private route:ActivatedRoute) { }
  list:any[];
  tasks:any[];
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.TaskService.getTask(params.listid).subscribe((tasks:any[])=>{
      this.tasks=tasks;
      })
      console.log(params)
    })


    this.TaskService.getLists().subscribe((list:any[])=>{
      this.list=list
      console.log(list)
    })
  }


}

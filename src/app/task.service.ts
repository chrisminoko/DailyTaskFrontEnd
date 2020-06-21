import { Injectable } from '@angular/core';
import {WebrequestService} from './webrequest.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService:WebrequestService) { }
  createList(title:string){
    return this.webReqService.post('lists',{title});

  }

  getLists(){
    return this.webReqService.get('lists');
  }

  getTask(id:string){
    return this.webReqService.get(`lists/${id}/tasks`)
  }
}

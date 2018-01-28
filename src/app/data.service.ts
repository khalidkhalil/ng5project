import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Behaviorsubject';
@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(['first goal','second one']);

  goal = this.goals.asObservable();
  constructor() { }

  changeGoal (goal){
    this.goals.next(goal);
  }

}

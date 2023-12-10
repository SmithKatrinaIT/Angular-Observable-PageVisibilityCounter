import { Injectable } from '@angular/core';
import { getHours } from 'date-fns';
import { Observable, timer, BehaviorSubject, Subject, Subscription, interval} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ElaspedTimeService {

  //observable properties
  obs$: Observable<any>;
  subscription: any;

  constructor() {}

  start(){
    this.obs$ = interval(1000);
    return this.obs$;
  }

  userTimeSpent(end:any): string {
    const hours = Math.floor(Math.abs(end / 3600));
    const minutes = Math.floor(Math.abs(end / 60));
    const seconds= Math.round(Math.abs(end % 60));
    return hours +":" + minutes + ":" + seconds;

  }

}

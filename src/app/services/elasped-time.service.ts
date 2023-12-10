import { Injectable } from '@angular/core';
import { getHours } from 'date-fns';
import { Observable, timer, BehaviorSubject, Subject, Subscription, interval} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ElaspedTimeService {

  //observable properties
  obs$: Observable<any>;

  constructor() {}

  /**
   * This method creates the observable to subscribe to.
   * Using the 'interval' method from Rxjs library to emit a value every 1000 miliseconds (1 second)
   * The 'value' is set in the parent (app) component ts file
   * @returns obs$ - Observable
   */
  start(){
    this.obs$ = interval(1000);
    return this.obs$;
  }

  /**
   * This method is used to build a readable timestamp string to display to the user
   * @param end - takes the a number value to transpose
   * @returns a deconstructed timestamp string
   */
  userTimeSpent(end:any): string {
    const hours = Math.floor(Math.abs(end / 3600));
    const minutes = Math.floor(Math.abs(end / 60));
    const seconds= Math.round(Math.abs(end % 60));
    return hours +":" + minutes + ":" + seconds;

  }

}

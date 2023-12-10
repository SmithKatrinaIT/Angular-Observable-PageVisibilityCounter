import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { VisibleComponent } from './visible/visible.component';
import { Observable } from 'rxjs';
import { ElaspedTimeService } from './services/elasped-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'page-visibility';
  showGraphDiv: boolean = false;
  btnStateText: string = "Show Graph";
  intervalServiceObserver: any;
  appCounter: any = 0;
  message: string = "The Graph Visibility Counter: ";


  //observable from service
  subscription: any;
  obs$: any;

  constructor(private _elaspedTimeSrv: ElaspedTimeService) {

  }

  /**
   * This methods toggles the parent component view template and the child view template
   * When the child view (the graph) is visible, the observable is called and subcribed to
   * When the parent view (app component) is visible, the observable is unscribed to -- stoping the 'interval' count
   */
  toggleGraph() {
    this.showGraphDiv = !this.showGraphDiv;

    if(this.showGraphDiv) {
      this.btnStateText = "Hide Graph";
      this.message = "The Graph Visibility Counter: ";
      this.appCounter = 0;
      this.intervalServiceObserver = this._elaspedTimeSrv.start();
      this.subscription = this.intervalServiceObserver.subscribe(data => this.appCounter = data);

    }else {
      this.btnStateText = "Show Graph";
      this.subscription.unsubscribe();
      this.message = "The Graph was visible for: ";
      this.appCounter = this._elaspedTimeSrv.userTimeSpent(this.appCounter);


    }
  }



}

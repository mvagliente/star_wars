import { Component } from '@angular/core';
import { NavigationService } from '../services/NavigationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SW-Project';

  constructor(private navigation: NavigationService) {}


goBack():void {
  this.navigation.back()
}

}

import { Component, Host } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {

  constructor (
    @Host() public parent: AppComponent
  ) { }

}

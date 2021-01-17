import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html'
})
export class LoadingIndicatorComponent {
  @Input() loading: boolean = true;
  @Input() inline: boolean = false;
}

import { Component, Input } from '@angular/core';
import { Model } from '../data-types';

@Component({
  selector: 'name-panel',
  templateUrl: './name-panel.component.html',
  styleUrls: [
    '../shared/styles/cred/cred.scss',
    './name-panel.component.scss']
})
export class NamePanelComponent {

  @Input() record: Model.Topic;
  @Input() link: boolean = false;

  get name(): Model.Name {
    return this.record.preferredName;
  }

  get remote_name(): Model.Name {
    return this.record.remoteName;
  }

  get issuer(): Model.Issuer {
    return this.name ? this.name.issuer : null;
  }

}

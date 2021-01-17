import { Component, Input } from '@angular/core';
import { Model } from '../data-types';

@Component({
  selector: 'cred-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: [
    '../shared/styles/cred/cred.scss',
    './type-list.component.scss']
})
export class CredTypeListComponent {

  @Input() records: Model.CredentialType[];

}

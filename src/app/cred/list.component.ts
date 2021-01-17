import { Component, Input } from '@angular/core';
import { Model } from '../data-types';
import { TopicStateService } from 'app/topic/services/topic-state.service';

@Component({
  selector: 'cred-list',
  templateUrl: './list.component.html',
  styleUrls: [
    '../shared/styles/cred/cred.scss',
    '../shared/styles/cred/list.component.scss'
  ]
})
export class CredListComponent {

  @Input() records: Model.Credential[];
  protected _format = 'cards';

  @Input() set format(fmt: string) {
    this._format = fmt;
  }

  get format(): string {
    return this._format;
  }
  constructor(public stateSvc: TopicStateService){}

}

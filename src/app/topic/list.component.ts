import { Component, Input } from '@angular/core';
import { Model } from '../data-types';

@Component({
  selector: 'topic-list',
  templateUrl: './list.component.html',
  styleUrls: [
    '../shared/styles/cred/cred.scss',
    './list.component.scss']
})
export class TopicListComponent {

  @Input() public records: Model.TopicRelationship[];
  protected _format = 'rows';

  @Input() set format(fmt: string) {
    this._format = fmt;
  }

  get format(): string {
    return this._format;
  }

  typeLabel(val: string): string {
    if(val) return ('name.'+val).replace(/_/g, '-');
    return '';
  }

}

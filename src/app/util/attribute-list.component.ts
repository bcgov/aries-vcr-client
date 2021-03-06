import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Model } from '../data-types';
import { GeneralDataService } from '../general-data.service';

@Component({
  selector: 'attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['../shared/styles/cred/cred.scss'],
})
export class AttributeListComponent {
  @Input() byType: string[];
  @Input() style: string = 'table';

  protected _rows: Model.Attribute[] = [];

  constructor(private _dataService: GeneralDataService, private _translate: TranslateService) {}

  @Input() set records(input: Model.Attribute[]) {
    if (!input) {
      this._rows = [];
      return;
    }
    let attrMap = {};
    let attrLabels = {};
    for (let attr of input) {
      attrMap[attr.type] = attr;
      attrLabels[attr.typeLabel] = attr.type;
    }
    let labels = Object.keys(attrLabels);
    if (labels.length) {
      this._translate.stream(labels).subscribe(trLabels => {
        let rows = [];
        let typeLabels = {};
        for (let labelKey in trLabels) {
          let label = trLabels[labelKey];
          if (label && label.substring(0, 2) != '??') typeLabels[attrLabels[labelKey]] = label;
        }
        if (this.byType) {
          for (let type of this.byType) {
            if (type in attrMap) rows.push({ label: typeLabels[type] || type, attr: attrMap[type] });
          }
        } else {
          for (let type in attrMap) {
            rows.push({ label: typeLabels[type] || type, attr: attrMap[type] });
          }
          rows.sort((a, b) => a.label.localeCompare(b.label));
        }
        this._rows = rows;
      });
    }
  }

  get rows() {
    return this._rows;
  }

  getAttributeLabel(row: any) {
    const label = this._dataService.translateClaimLabel(row.attr.credential_type_id, row.attr.type, row.label);
    return label;
  }
}

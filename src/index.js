import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { SampleBase } from './sample-base';

export class Cascading extends SampleBase {
    constructor() {
        super(...arguments);
        var data = {
            "sex": [
                {"sexname": "Boy Names", "sexId": "1"},
                {"sexname": "Girl Names", "sexId": "2"}
            ],
            "children": [
                {"childname": "Brad", "sexId": "1", "nameId": "101"},
                {"childname": "David", "sexId": "1", "nameId": "102"},
                {"childname": "Anna", "sexId": "2", "nameId": "103"},
                {"childname": "Alice", "sexId": "2", "nameId": "104"},
            ],

        }
        this.tempSex = 'sex';
        this.sexData = data[this.tempSex];
        this.tempChild = 'children';
        this.childData = data[this.tempChild];
        this.sexFields = { value: 'sexId', text: 'sexname' };
        this.childFields = { value: 'nameId', text: 'childname' };
    }
    sexChange() {
        this.childObj.enabled = true;
        let tempQuery = new Query().where('sexId', 'equal', this.sexObj.value);
        this.childObj.query = tempQuery;
        this.childObj.text = null;
        this.childObj.dataBind();
    }

    render() {
        return (<div className='control-pane'>
        <div className='control-section'>
          <div id='cascade'>
            <div style={{ paddingTop: '35px' }}>
              <DropDownListComponent id="country" dataSource={this.sexData} ref={(dropdownlist) => { this.sexObj = dropdownlist; }} fields={this.sexFields} popupHeight="auto" change={this.sexChange.bind(this)} placeholder="Please select"/>
            </div>
            <div style={{ paddingTop: '35px' }}>
              <DropDownListComponent id="state" dataSource={this.childData} ref={(dropdownlist) => { this.childObj = dropdownlist; }} fields={this.childFields}  enabled={false} placeholder="Please select"/>
            </div>

          </div>
        </div>
        
      </div>);
    }
}

render(<Cascading />, document.getElementById('dropsample'));
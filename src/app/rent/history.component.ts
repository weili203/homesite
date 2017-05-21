import { Component } from "@angular/core";

import { NgTableComponent } from 'ng2-table';

@Component({
    selector : 'rent-hostory',
    templateUrl : './history.component.html'
})
export class HistoryComponent{
    public columns:Array<any> = [
        {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
        {
            title: 'Position',
            name: 'position',
            sort: false,
            filtering: {filterString: '', placeholder: 'Filter by position'}
        },
        {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
        {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
        {title: 'Start date', className: 'text-warning', name: 'startDate'},
        {title: 'Salary ($)', name: 'salary'}
    ];

    public rows:Array<any> = [
        {name: 'Wei Li', position:'In PC', office:'London', ext: 42246, startDate:20170512, salary: 71500 }
        
    ];


    public config:any = {
        paging: false,
        sorting: {columns: this.columns},
        filtering: {filterString: ''},
        className: ['table-striped', 'table-bordered']
    };

}
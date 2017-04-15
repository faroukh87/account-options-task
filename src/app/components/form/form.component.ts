import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import AccountOptions from "../../classes/account-options";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    @Input() accountOptions: AccountOptions;
    @Input() readOnlyMode: boolean;
    @Output() submitFormData: EventEmitter<AccountOptions> = new EventEmitter();

    public defaultLanguageValues: Array<string> = [
        'en',
        'cn',
        'it'
    ];
    public loginIdentifierConflictValues: Array<string> = [
        'ignore',
        'failOnSiteConflictingIdentity',
        'failOnAnyConflictingIdentity'
    ];
    public loginIdentifierValues: Array<any> = [{
        key: 'Email',
        value: 'email'
    }, {
        key: 'Username',
        value: 'username'
    }, {
        key: 'All',
        value: 'email, username'
    }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit(formData) {
        this.submitFormData.emit(formData);
    }
}

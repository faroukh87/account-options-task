import {Component, OnInit} from '@angular/core';
import AccountOptions from './classes/account-options';
import AccountOptionsService from './services/account-options.service';
import {AlertInterface} from "./interfaces/alert.interface";
import {Location, LocationStrategy, PathLocationStrategy} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AccountOptionsService, Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class AppComponent implements OnInit {
    private readOnlyMode: boolean;
    public showSuccess: boolean = false;
    public showError: boolean = false;
    public alert: AlertInterface = {
        showSuccess: false,
        showError: false,
        title: '',
        message: ''
    };
    private accountOptions: AccountOptions;

    constructor(public accountOptionsService: AccountOptionsService,
                public location: Location) {
        this.readOnlyMode = location.isCurrentPathEqualTo('/readonly');
    }

    ngOnInit() {
        this.getAccountOptions();
    }

    getAccountOptions() {
        this.accountOptionsService.getAccountOptions()
            .subscribe((response) => {
                this.onGetAccountOptions(response.json());
            });
    }

    onGetAccountOptions(responseBody) {
        if (responseBody.errorCode) {
            this.errorHandler(responseBody.errorMessage);
        } else {
            this.accountOptions = responseBody.accountOptions;
        }
    }

    setAccountOptions(formData) {
        this.accountOptionsService.setAccountOptions(formData)
            .subscribe((response) => {
                this.onSetAccountOptions(response.json());
            });
    }

    onSetAccountOptions(responseBody) {
        if (responseBody.errorCode) {
            this.errorHandler(responseBody.errorMessage);
        } else {
            this.successHandler();
        }
    }

    onSubmit(formData) {
        this.setAccountOptions(formData);
    }

    errorHandler(errorMessage) {
        this.alert.showError = true;
        this.alert.showSuccess = false;
        this.alert.title = 'Error!';
        this.alert.message = errorMessage;
    }

    successHandler() {
        this.alert.showSuccess = true;
        this.alert.showError = false;
        this.alert.title = 'Success!';
        this.alert.message = 'Data is saved';
    }

    hideAlert() {
        this.alert.showSuccess = this.alert.showError = false;
    }
}

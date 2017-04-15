import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlertInterface} from "../../interfaces/alert.interface";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
    @Input() alert: AlertInterface;
    @Output() hide: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    hideAlert() {
        this.hide.emit();
        this.alert.showSuccess = this.alert.showError = false;
    }
}

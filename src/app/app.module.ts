import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import AccountOptionsService from './services/account-options.service';
import {AlertComponent} from './components/alert/alert.component';
import {FormComponent} from './components/form/form.component';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule
    ],
    providers: [AccountOptionsService],
    bootstrap: [AppComponent]
})
export class AppModule {

}

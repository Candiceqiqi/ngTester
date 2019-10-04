import { Component } from '@angular/core';

@Component({

    selector:'warning-alert',
    templateUrl:'./warningAlert.component.html',
    styleUrls:['./warningAlert.component.sass']

})



export class WarningAlert{
    message="Warning you are in warning alert component";
};
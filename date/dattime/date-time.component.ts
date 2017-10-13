import { IComponentController, IComponentOptions } from 'angular';

import './date-time.component.scss';

class DateTimeController implements IComponentController {
    public date;
    public time;
    public newTime;
    public min = new Array(60);
    public ho = new Array(12);
    public isFirstChange = true;
    // public monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    // public weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    constructor() { }
    $onInit() {
        for (var a = 0; a < this.min.length; a++) {
            this.min[a] = a < 10 ? ('0' + a) : a;
        }
        for (var b = 0; b < this.ho.length; b++) {
            this.ho[b] = b < 9 ? ('0' + (b + 1)) : (b + 1);
        }
    }
    generateTime() {

        if (this.newTime.date) {

            if (this.isFirstChange) {
                this.newTime.hour = this.newTime.hour || 12;
                this.newTime.minute = this.newTime.minute || '00';
            }

            var hrs24format = null;
            hrs24format = (this.newTime.hour)

            if (this.newTime.period === "PM" && hrs24format < 12) {
                hrs24format = parseInt(hrs24format) + 12;
            }
            if (this.newTime.period === 'AM' && hrs24format === 12) {
                hrs24format = parseInt(hrs24format) - 12;
            }

            this.date = new Date(this.newTime.date);
            this.date.setHours(hrs24format);
            this.date.setMinutes(this.newTime.minute);
            console.log(this.date);
        }
    }

}

const dateTimeComponent: IComponentOptions = {

    controller: DateTimeController,
    template: require('./date-time.component.html') as string
};

export default dateTimeComponent;
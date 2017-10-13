import { IDirective } from 'angular';

export default class DateTime implements IDirective {
    public restrict: 'E';
    public templateUrl: 'date-time.template.html';
    public replace: true;
    public transclude: true;
    // public scope:
    // {
    //     onError: '&',
    //     onStream: '&',
    //     onStreaming: '&',
    //     placeholder: '=',
    //     config: '=channel'
    // }
    public date;
    public time;
    public newTime;
    public min = new Array(60);
    public ho = new Array(12);
    public isFirstChange = true;
    constructor() { }

    public link($scope) {

        for (var a = 0; a < this.min.length; a++) {
            this.min[a] = a < 10 ? ('0' + a) : a;
        }
        for (var b = 0; b < this.ho.length; b++) {
            this.ho[b] = b < 9 ? ('0' + (b + 1)) : (b + 1);
        }

       $scope.generateTime =  function () {

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
}
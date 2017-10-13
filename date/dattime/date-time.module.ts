import { module } from 'angular';

import dateTimeComponent from './date-time.component';

const dateTime = module('dateTime', [])
    .component('dateTime', dateTimeComponent)
    .name;

export default dateTime;
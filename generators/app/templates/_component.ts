import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router';
declare var __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: '<%= selector %>',
    directives: [ROUTER_DIRECTIVES],
    template: require('<%= fileName %>.html'),
    styles: [require('<%= fileName %>.scss')],
})

export class <%= className %> {
    
    constructor() {}

}

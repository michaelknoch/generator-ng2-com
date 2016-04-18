import {Component} from 'angular2/core'
<% if (sugar.router) { %> import {ROUTER_DIRECTIVES} from 'angular2/router'; <% } %>
declare var __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: '<%= selector %>',
    <% if (sugar.router) { %> directives: [ROUTER_DIRECTIVES], <% } %>
    <% if (sugar.html) { %> templateUrl: '<%= fileName %>.html', <% } %>
    <% if (sugar.scss) { %> styleUrls: ['<%= fileName %>.css'], <% } %>
})

export class <%= className %> {
    
    constructor() {}

}

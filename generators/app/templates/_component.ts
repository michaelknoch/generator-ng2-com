import {Component} from 'angular2/core'<% if (sugar.router) { %> 
import {ROUTER_DIRECTIVES} from 'angular2/router';<% } %>

@Component({
    moduleId: module.id,
    selector: '<%= selector %>',<% if (sugar.router) { %> 
    directives: [ROUTER_DIRECTIVES], <% } %><% if (sugar.html) { %> 
    templateUrl: '<%= fileName %>.html', <% } %><% if (sugar.scss) { %> 
    styleUrls: ['<%= fileName %>.css'], <% } %>
})

export class <%= className %> {
    
    constructor() {}

}

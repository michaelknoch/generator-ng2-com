import {Component} from '@angular/core'<% if (sugar.router) { %> 
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';<% } %>

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

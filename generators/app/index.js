'use strict';

const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const _ = require('lodash');

module.exports = yeoman.Base.extend({

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the ' + chalk.red('ng2-comp') + ' generator!'
            ));

        // User options
        var prompts = [{
            type: 'input',
            name: 'name',
            message: 'Component Name?',
            default: 'Home'
        }, {
            type: 'input',
            name: 'dest',
            message: 'Path to the Component location?',
            default: '.'
        }, {
            type: 'checkbox',
            name: 'extras',
            message: 'Some component sugar?',
            choices: ['html', 'scss', 'router']
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.<answer>;
            done();
        }.bind(this));
    },

    writing: function () {

        // Data preparation
        var extras = {
            "html": (-1 != _.findIndex(this.props.extras, function(item) { return item == 'html'; })),
            "scss": (-1 != _.findIndex(this.props.extras, function(item) { return item == 'scss'; })),
            "router": (-1 != _.findIndex(this.props.extras, function(item) { return item == 'router'; })),
        };

        var nameUpper = this.props.name;
        var nameLower = this.props.name.charAt(0).toLowerCase() + this.props.name.slice(1);
        var nameDashed =  nameLower.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
        var dest = this.props.dest.charAt(this.props.dest.length - 1) === "/"
        ? this.props.dest + nameLower + '/'
        : this.props.dest + '/' + nameLower + '/';

        // Create component directory
        mkdirp(dest, function (err) {
            if(err) {
                this.log.error(err);
                process.exit(1);
            }
        }.bind(this));

        // Component
        this.fs.copyTpl(
            this.templatePath('_component.ts'),
            this.destinationPath(dest + nameLower + '.comp.ts'), {
                fileName: nameLower,
                className: nameUpper,
                selector: nameDashed,
                sugar: extras
            });

        // HTML
        if (extras.html) {
            this.fs.copyTpl(
                this.templatePath('_component.html'),
                this.destinationPath(dest + nameLower + '.html'), {
                    name: nameUpper
                });
        }

        // Sass
        if (extras.scss) {
            this.fs.copyTpl(
                this.templatePath('_component.scss'),
                this.destinationPath(dest + nameLower + '.scss'), {
                    name: nameUpper
                });        
        }
    },

    install: function () {}
});
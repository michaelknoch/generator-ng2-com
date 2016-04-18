'use strict';

const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

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
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.<answer>;
            done();
        }.bind(this));
    },

    writing: function () {
        // Data preparation
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
                selector: nameDashed
            }
        );

        // HTML
        this.fs.copyTpl(
            this.templatePath('_component.html'),
            this.destinationPath(dest + nameLower + '.html'), {
                name: nameUpper
            }
        );

        // Sass
        this.fs.copyTpl(
            this.templatePath('_component.scss'),
            this.destinationPath(dest + nameLower + '.scss'), {
                name: nameUpper
            }
        );

        // Unit tests
        /*this.fs.copyTpl(
            this.templatePath('_component.spec.ts'),
            this.destinationPath(dest + nameLower + '.spec.ts'), {
                fileName: nameLower,
                className: nameUpper
            }
        );*/

        // E2E tests
        /*this.fs.copyTpl(
            this.templatePath('_component.e2e.ts'),
            this.destinationPath(dest + nameLower + '.e2e.ts'), {
                className: nameUpper
            }
        );*/
    },

    install: function () {}
});
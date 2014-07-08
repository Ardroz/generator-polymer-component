'use strict';
//var util = require('util');
//var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var PolymerComponentGeneratorGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Polymer component generator!'));

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('I will create for you a boilerplate for a polymer component!'));
    var prompts = [{
      type: 'list',
      name: 'stylesheet',
      message: 'Select your css preprocesor: (Css by default)',
      choices: [ 'less', 'stylus', 'css' ],
      default: 2
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  css: function () {
    switch (this.stylesheeet) {
      case 'less':
        break;
      case 'stylus':
        break;
      case 'css':
        break;
    }
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = PolymerComponentGeneratorGenerator;

'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator{
	constructor(args, opts) {
		//Calling super constructor
		super(args, opts);
	}
	promting(){
		var done = this.async();
		this.projectVersion = "0.0.1";

		var prompts = [{
			type    : 'input',
			name    : 'sourceFilename',
			message : 'Classname',
			default : 'MyClass'
		}];
		return this.prompt(prompts).then((answer)=>{
			this.sourceFilename = answer.sourceFilename+'.java';
			done();
		});
	}
	writing () {
		this.fs.copyTpl(
			this.templatePath('_templ.java'),
			this.destinationPath(this.sourceFilename)
		);
	}
};
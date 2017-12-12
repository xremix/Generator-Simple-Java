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
			name    : 'className',
			message : 'Classname',
			default : 'MyClass'
		},{
			type	: 'checkbox',
			name	: 'includeTest',
			message : 'Do you want to add a test class in the same file?',
			store	: true,
			choices:[{
				name: 'Include Test Class',
				value: 'includeTestClass',
				checked: true
			}]
		}];
		return this.prompt(prompts).then((answer)=>{
			this.className = answer.className;
			this.includeTestClass = answer.includeTest && answer.includeTest.indexOf('includeTestClass') !== -1;
			done();
		});
	}
	writing () {
		this.fs.copyTpl(
			this.templatePath('_templ.java'),
			this.destinationPath(this.className+ (this.includeTestClass ? 'Test.java' : '.java')),{
				className: this.className,
				includeTestClass: this.includeTestClass
			}
		);
	}
};
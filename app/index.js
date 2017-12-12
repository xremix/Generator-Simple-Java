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
			name	: 'excercise',
			message : 'Do you want to add a exercise class?',
			store	: true,
			choices:[{
				name: 'Include exercise',
				value: 'includeExercise',
				checked: true
			}]
		}];
		return this.prompt(prompts).then((answer)=>{
			this.className = answer.className;
			this.includeExercise = answer.excercise && answer.excercise.indexOf('includeExercise') !== -1;
			done();
		});
	}
	writing () {
		this.fs.copyTpl(
			this.templatePath('_templ.java'),
			this.destinationPath(this.className+ (this.includeExercise ? 'Excercise.java' : '.java')),{
				className: this.className,
				includeExercise: this.includeExercise
			}
		);
	}
};
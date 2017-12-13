import { Component, OnInit } from '@angular/core';
import { Project } from '../project'

declare let particlesJS: any;

const PROJECTS: Project[] = [
{
	title:"Project 1",
	desc:"Lorem ipsum dolor sit amet?",
	image:"/assets/images/code_bg.jpg",
	link:"#",
	tags:["HTML","CSS","Javascript"]
},
{
	title:"Project 2",
	desc:"Lorem ipsum dolor sit amet?",
	image:"/assets/images/code_bg.jpg",
	link:"#",
	tags:["HTML","CSS","Javascript"]
},
{
	title:"Project 3",
	desc:"Lorem ipsum dolor sit amet?",
	image:"/assets/images/code_bg.jpg",
	link:"#",
	tags:["HTML","CSS","Javascript"]
},
{
	title:"Project 4",
	desc:"Lorem ipsum dolor sit amet?",
	image:"/assets/images/code_bg.jpg",
	link:"#",
	tags:["HTML","CSS","Javascript"]
},
{
	title:"Project 5",
	desc:"Lorem ipsum dolor sit amet?",
	image:"/assets/images/temp_photo.jpg",
	link:"#",
	tags:["HTML","CSS","HTML","CSS","Javascript"]
},
{
	title:"Project 6",
	desc:"Lorem ipsum dolor sit amet?",
	image:"/assets/images/code_bg.jpg",
	link:"#",
	tags:["HTML","CSS","Javascript"]
}
]

@Component({
	selector: 'app-work',
	templateUrl: './work.component.html',
	styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
	projects : Project[] = PROJECTS;
	constructor() { }

	ngOnInit() {
		particlesJS.load('particles-js', '/assets/js/particles.json', function() {
			console.log('callback - particles.js config loaded');
		});
	}

	hover(project: Project){
		
	}
}

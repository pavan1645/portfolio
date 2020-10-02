import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { animateCss } from '../animate';
import { Timeline } from '../timeline';
import { onScreen } from '../onScreen';

const EXPERIENCES : Timeline[] = [
{
	year: "May '20 - Aug '20",
	title: "Amazon - Software Development Engineer Intern",
	desc: [
		"Designed and architected a project architecture to dynamically create promotions.",
		"Developed a Minimal Lovable Product (MLP) using React and NodeJs with native AWS Technologies."
	]
},
{
	year: "May '19 - June '19",
	title: "Freelancer - LetsPartii",
	desc: [
		"Developed backend for a Chat Application using NodeJS Socket.IO, Redis and MongoDB for LetsPartii in 1 month."
	]
},
{
	year: "June '18 - May '19",
	title: "Software Developer - Coutloot",
	desc: [
		"Led a team of 5 to build and maintain the frontend and SEO of the Coutloot e-commerce website.",
		"Analyzed metrics obtained from Google Analytics and proposed ways to improve the SEO of the website.",
		"Successfully reduced the product search time from 150ms to 10ms using Elasticsearch.",
		"Streamlined user communication process by creating a micro-service to communicate effectively with users."		
	]
},
{
	year: "June '17 - Aug '17",
	title: "Frontend Developer Intern - Myraa Technologies",
	desc: [
		"Created webpages and integrated them with backend APIs of an e-commerce website.",
		"Built a web-scrapper in Python to create and update the database with data collected from various websites."
	]
},
{
	year: "Feb '17 - May '17",
	title: "Project Trainee - Tata Consultancy Services ( TCS )",
	desc: [
		"Co-ordinated with team members to develop an Android Application, Customer Journey Maps for TCS."
	]
},
]

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
	experiences : Timeline[] = EXPERIENCES;
	constructor() { }

	ngOnInit() {
	  	var eduLoaded = false;
		$(window).scroll(function(){
			if(onScreen('#experience') && !eduLoaded){
				$('#experience .tl').css('visibility', 'visible');
				animateCss('#experience .tl', 'fadeInUp', null);
				eduLoaded = true;
			}
		});
	}

}

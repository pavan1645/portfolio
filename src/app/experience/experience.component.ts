import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { animateCss } from '../animate';
import { Timeline } from '../timeline';
import { onScreen } from '../onScreen';

const EXPERIENCES : Timeline[] = [
	{
		year: "May '19 - Present",
		title: "Freelancer",
		desc: ["Developed backend for a Realtime Chat Application using NodeJS, Socket.IO, Redis and MongoDB for LetsPartii​."]
	},
	{
		year: "June '18 - May '19",
		title: "Software Developer​ - Coutloot​",
		desc: [
			"Lead and developed frontend of the Coutloot website with a team of 3 interns and 1 full time employee.",
			"Worked on the SEO of the website.",
			"Developed Coutloot Search Engine using Elasticsearch and implemented plugins to sync MongoDB and Elasticsearch indexes.",
			"Contributed in planning and migration of entire Coutloot database from MySQL to MongoDB.",
			"Designed, developed and migrated multiple internal panels used by other non-technical teams at Coutloot.",
			"Developed dynamic email templates and created a communication system to send Email, SMS and Push Notifications to the users.",
			"Created new APIs for the Coutloot app and website using NodeJS.",
		]
	},
	{
		year: "Feb '18 - May '18",
		title: "Software Developer Intern - Coutloot",
		desc: [
			"Contributed in planning phase of database migration.",
			"Developed few HTML and email templates."
		]
	},
	{
		year: "June '17 - Aug '17",
		title: "Frontend Developer Intern - ​Myraa Technologies",
		desc: [
			"Worked on developing frontend and integrating backend APIs of an e-commerce website for a client.",
			"Developed a web-scraper to scrape upcoming events in the city using Python and BeautifulSoup4."
		]
	},
	{
		year: "Feb '17 - May '17",
		title: "Project Trainee - Tata Consultancy Services",
		desc: [
			"Developed an Android Application to create Customer Journey Maps, in a team of 4 members.",
		]
	}
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

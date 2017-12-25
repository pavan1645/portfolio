import { Component, OnInit } from '@angular/core';
import { Project } from '../project'

declare let particlesJS: any;
declare let $: any;

const STATICS: Project[] = [
{
	title:"Patatap Clone",
	desc:"A sound on keypress generation app.",
	image:"patatap.png",
	link:"https://pavan-static.herokuapp.com/patatap/",
	tags:["HTML","CSS","Javascript","Howler.js","Paper.js"]
},
{
	title:"ITSA RAIT Website",
	desc:"College committee website.",
	image:"itsa.png",
	link:"https://pavan-static.herokuapp.com/itsa/",
	tags:["HTML","CSS","Bootstrap"]
},
{
	title:"TODO List",
	desc:"A static todo list app.",
	image:"todo.png",
	link:"https://pavan-static.herokuapp.com/todo/",
	tags:["HTML","CSS","jQuery"]
},
{
	title:"Myraa Dashboard",
	desc:"Dashboard developed for Myraa Technologies along with its individual product pages and backend integration.",
	image:"dashboard.png",
	link:"http://www.myraatechnologies.com/DB/dashboard.html",
	tags:["HTML","CSS","jQuery","Bootstrap"]
}
]

const PROJECTS: Project[] = [
{
	title:"Yelpcamp",
	desc:"Campground rating website",
	image:"yelpcamp.png",
	link:"https://github.com/pavan1645/YelpCamp",
	tags:["Node.js","Express","Mongo","Passport.js","ejs"]
},
{
	title:"VR Maps",
	desc:"VR tour of our college - A Final Year Project",
	image:"vrmaps.png",
	link:"https://vrmaps.herokuapp.com/",
	tags:["HTML","CSS","Javascript","Node.js","MongoDB"]
},
{
	title:"Contact List",
	desc:"MEAN app for performing CRUD operations on Contacts",
	image:"contactlist.png",
	link:"https://github.com/pavan1645/contact-list-mean",
	tags:["Mongo","Express","Angular","Node.js"]
},
{
	title:"Weight on Planet",
	desc:"A simple app which calculates weights of objects on different planets",
	image:"code_bg.jpg",
	link:"https://github.com/pavan1645/Weight-on-Planet",
	tags:["Android", "Java"]
},
{
	title:"Static Websites",
	desc:"A bunch of static web projects",
	image:"static.png",
	link:"static",
	tags:["HTML","CSS","Javascript","jQuery","Howler.js","Paper.js"]
},
{
	title:"ArtBrowser",
	desc:"An e-commerce website for buying and selling artworks.",
	image:"artbrowser.png",
	link:"http://www.artbrowserapp.com/",
	tags:["HTML","CSS","jQuery","Bootstrap","Python","MySQL"]
}
]

@Component({
	selector: 'app-work',
	templateUrl: './work.component.html',
	styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
	projects : Project[] = PROJECTS;
	statics : Project[] = STATICS;
	constructor() { }

	ngOnInit() {
		particlesJS.load('particles-js', '/assets/js/particles.json', function() {
			$('#collapse0').addClass('show');
		});
	}

	openProject(link: string){
		if (link == "static") { 
			$('#staticModal').modal('show');
		} else if(link == "#") {
			//do nothing
		} else {
			window.open(link);
		}
	}
}

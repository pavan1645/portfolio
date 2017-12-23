import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { animateCss } from '../animate';
import { Timeline } from '../timeline';

const EXPERIENCES : Timeline[] = [
{
	year: "Jun '17 - Aug '17",
	title: "Myraa Technologies - Frontend Developer",
	desc: "Worked as a full-time Frontend Developer with Myraa Technologies - \
	An Artificial Intelligence and Machine Learning specialist startup, during the vacations of June 2017. \
	Worked on multiple projects simultaneously using different frontend technologies. <br /> \
	Some noteworthy projects included frontend as well as backend integration handling of various ML & AI Products \
	like Regex Classifier, SmartPlug, Invoice 2 JSON, Flowchart Parser, Ad Banner Recommender, etc. \
	Also, helped in Full Stack Development of ArtBrowser - An eCommerce website for selling Artworks."
},
{
	year: "Feb '17 - May '17",
	title: "Tata Consultancy Services - Project Trainee",
	desc: "Was part of an intensive 12-week remote internship program with TCS. \
	The program was initiated by our college with a vision to provide hands-on industrial training and \
	experience to the students. It also included working and completing a project within the stipulated time frame. <br>\
	I worked in a team, on an Android App development project which included database connectivity. \
	The internship also required us to weekly update our mentors with the progress."
},
{
	year: "Mar '16 - Aug '16",
	title: "Internshala - Internshala Student Partner",
	desc: "Worked as a campus brand ambassador for Internshala - An internship providing platform for students. \
	Promoted Internshala and its internships and also its various virtual training courses available for students. \
	The internship also included promoting the brand throughout various classes and tuitions in my locality. <br>\
	Learned various marketing techniques of brand promotion and also sharpened my communication skills."
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
	  	//Calculated vals, don't mess! Lower bottom works only with md devices
	  	var oTop = $('#experience').offset().top - window.innerHeight;
	  	var oTopH = $('#experience').height()+oTop;
	  	var eduLoaded = false;
	  	$(window).scroll(function(){
	  		var pTop = $('body').scrollTop();
			//console.log(pTop+"   "+oTop+"   "+oTopH);
			if(pTop>oTop+200 && !eduLoaded){
				$('#experience .tl').css('visibility', 'visible');
				animateCss('#experience .tl', 'fadeInUp', null);
				eduLoaded = true;
			}
		});
	  }

	}

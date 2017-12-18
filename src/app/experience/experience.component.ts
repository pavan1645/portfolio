import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { animateCss } from '../animate';
import { Timeline } from '../timeline';

const EXPERIENCES : Timeline[] = [
{
	year: "2014 - 18",
	title: "Web Developer - Myraa technologies",
	desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	year: "2014 - 18",
	title: "Web Developer - Myraa technologies",
	desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	year: "2014 - 18",
	title: "Web Developer - Myraa technologies",
	desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

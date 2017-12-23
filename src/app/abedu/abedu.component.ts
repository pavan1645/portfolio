import { Component, OnInit } from '@angular/core';
import { Timeline } from '../timeline'
import $ from 'jquery';
import { animateCss } from '../animate'

const TIMELINE: Timeline[] = [
{
	year: "2014 - 18",
	title: "Bachelor of Engineering - 66% (CGPA: 7.25)",
	desc: "Ramrao Adik Institute of Technology - Department of Information Technology"
},
{
	year: "2012 - 14",
	title: "Higher Secondary Certificate - 74.46%",
	desc: "Uran Education Society"
},
{
	year: "2002 - 12",
	title: "Secondary School Certificate - 81.09%",
	desc: "St. Mary's Convent High School"
}
]

@Component({
	selector: 'app-abedu',
	templateUrl: './abedu.component.html',
	styleUrls: ['./abedu.component.css']
})
export class AbeduComponent implements OnInit {
	items: Timeline[] = TIMELINE;
	constructor() { }

	ngOnInit() {
		//Calculated vals, don't mess! Lower bottom works only with md devices
		var oTop = $('#education').offset().top - window.innerHeight;
		var oTopH = $('#education').height()+oTop;
		var eduLoaded = false;
		$(window).scroll(function(){
		var pTop = $('body').scrollTop();
			//console.log(pTop+"   "+oTop+"   "+oTopH);
			if(pTop>oTop+100 && !eduLoaded && (pTop-oTopH+100<oTopH)){
				$('#education .tl').css('visibility', 'visible');
				animateCss('#education .tl', 'fadeInUp', null);
				eduLoaded = true;
			}
		});		
	}

}

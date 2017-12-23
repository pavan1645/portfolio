import { Component, OnInit } from '@angular/core';
import { Title } from '../title';
import $ from 'jquery';
import { animateCss } from '../animate'

const TECHS = ["/assets/images/temp_photo.jpg","/assets/images/code_bg.jpg","/assets/images/temp_photo.jpg",
"/assets/images/code_bg.jpg","/assets/images/temp_photo.jpg","/assets/images/code_bg.jpg",
"/assets/images/temp_photo.jpg","/assets/images/code_bg.jpg","/assets/images/temp_photo.jpg"];

const TITLES: Title[] = [
{
	title:"Bitcamp 2017",
	desc:"Won 1st prize in Bitcamp 2017, A 24-hour hackathon organized by Computer Society of India (CSI), RAIT. ",
	image:"temp_photo.jpg"
},
{
	title:"President of ITSA",
	desc:"Became the President of Information Technology Students' Association (ITSA, RAIT) for the \
	academic year 2016-17.<br> ITSA is the official student committee of IT Department which \
	organizes various workshops, summers and winter training programmes, technical fests, \
	seminars and informative lectures from experts for the students of IT Department.",
	image:"temp_photo.jpg"
},
{
	title:"Sponsorship co-Head ITSA",
	desc:"Managed sponsorship related activities for ITSA, RAIT. Also managed collaborations \
	activities of sponsors and trained other members in the field of marketing.",
	image:"temp_photo.jpg"
},
{
	title:"Abacus",
	desc:"<ul>\
		<li>Ranked 3rd in State Level Abacus Competition, organized by Ideal Play Abacus Pvt. Ltd., 2007</li>\
		<li>Passed with Distinction in International Standard of \
		Abacus Mental Arithmetic Proficiency Examination organized by \
		The GuangXi Zhusuan Association, China, 2007</li>\
	</ul>",
	image:"temp_photo.jpg"
},
{
	title:"National Karate Championship",
	desc:"Received Certificate of Merit for Participating in 8th National Karate Championship \
	at Haryana hosted by Karate-Do-Association of Haryana (July 2004)",
	image:"temp_photo.jpg"
}
];
let i : number = 0;

@Component({
	selector: 'app-achievement',
	templateUrl: './achievement.component.html',
	styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
	techs = TECHS;
	title : Title = TITLES[i];
	constructor() { }

	ngOnInit() {
		$('.achCardLeft, .achCardRight').css('-webkit-animation-duration','0.2s');
		this.visibility_toggle();
	}


	animate(direction : String){
		animateCss('.achCardLeft, .achCardRight','fadeIn' + direction, null);
	}

	achInc() {
		this.animate("Right");
		++i;
		this.visibility_toggle();
		this.title = TITLES[i];
	}

	achDec() {
		this.animate("Left");
		--i;
		this.visibility_toggle();
		this.title = TITLES[i];
	}

	visibility_toggle(){
		if (i==TITLES.length-1) {
			$('.achCard .fa-angle-right').css('visibility','hidden');
		} else if (i==0) {
			$('.achCard .fa-angle-left').css('visibility','hidden');
		} else {
			$('.achCard .fa-angle-right').css('visibility','visible');
			$('.achCard .fa-angle-left').css('visibility','visible');
		}
	}
}

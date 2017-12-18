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
	desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt ut reprehenderit unde. Explicabo deleniti excepturi possimus ipsam ea mollitia quisquam ducimus quaerat doloribus distinctio autem odit, labore, inventore magni?",
	image:"temp_photo.jpg"
},
{
	title:"Hackerrank May 2017",
	desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt ut reprehenderit unde. Explicabo deleniti excepturi possimus ipsam ea mollitia quisquam ducimus quaerat doloribus distinctio autem odit, labore, inventore magni?",
	image:"temp_photo.jpg"
},
{
	title:"Hackerearth June 2017",
	desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt ut reprehenderit unde. Explicabo deleniti excepturi possimus ipsam ea mollitia quisquam ducimus quaerat doloribus distinctio autem odit, labore, inventore magni?",
	image:"code_bg.jpg"
}
];
let i : number = 1;

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

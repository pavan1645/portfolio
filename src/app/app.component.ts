import { Component, OnInit } from '@angular/core';
import { Title } from './title';
import $ from 'jquery';
import { animateCss } from './animate'

const TITLES: Title[] = [
{
	title:"Android Developer",
	desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt ut reprehenderit unde. Explicabo deleniti excepturi possimus ipsam ea mollitia quisquam ducimus quaerat doloribus distinctio autem odit, labore, inventore magni?",
	image:"temp_photo.jpg"
},
{
	title:"Web Developer",
	desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt ut reprehenderit unde. Explicabo deleniti excepturi possimus ipsam ea mollitia quisquam ducimus quaerat doloribus distinctio autem odit, labore, inventore magni?",
	image:"temp_photo.jpg"
},
{
	title:"Photographer",
	desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt ut reprehenderit unde. Explicabo deleniti excepturi possimus ipsam ea mollitia quisquam ducimus quaerat doloribus distinctio autem odit, labore, inventore magni?",
	image:"code_bg.jpg"
}
];
let i : number = 1;
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
	title : Title = TITLES[i];
	ngOnInit() { 
		animateCss('.centerCardLeft','bounceInLeft',null);
		animateCss('.centerCardRight','bounceInRight', function () {
			$('.centerCardLeft, .centerCardRight').css('-webkit-animation-duration','0.2s');
		});
	}
	constructor(){	}


	animate(direction : String){
		animateCss('.centerCardLeft, .centerCardRight','fadeIn' + direction, null);
	}

	inc(){
		this.animate("Right");
		i++;
		this.visibility_toggle();
		this.title = TITLES[i];
	}

	dec(){
		this.animate("Left");
		i--;
		this.visibility_toggle();
		this.title = TITLES[i];	
	}

	visibility_toggle(){
		if (i==2) {
			$('.fa-angle-right').css('visibility','hidden');
		} else if (i==0) {
			$('.fa-angle-left').css('visibility','hidden');
		} else {
			$('.fa-angle-right').css('visibility','visible');
			$('.fa-angle-left').css('visibility','visible');
		}
	}

}

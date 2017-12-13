import { Component, OnInit } from '@angular/core';

const TECHS = ["/assets/images/temp_photo.jpg","/assets/images/code_bg.jpg","/assets/images/temp_photo.jpg",
"/assets/images/code_bg.jpg","/assets/images/temp_photo.jpg","/assets/images/code_bg.jpg",
"/assets/images/temp_photo.jpg","/assets/images/code_bg.jpg","/assets/images/temp_photo.jpg"]

@Component({
	selector: 'app-achievement',
	templateUrl: './achievement.component.html',
	styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
	techs = TECHS;
	constructor() { }

	ngOnInit() {
	}

}

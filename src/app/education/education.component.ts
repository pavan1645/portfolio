import { Component, OnInit } from '@angular/core';
import { Timeline } from '../timeline'
import $ from 'jquery';
import { animateCss } from '../animate'
import { onScreen } from '../onScreen'

const TIMELINE: Timeline[] = [
  {
    year: "2019 - 21",
    title: "Masters in Computer Science (CGPA: 3.8/4.0)",
    desc: ["San Diego State University"]
  },
  {
    year: "2014 - 18",
    title: "B.E., Information Technology - (CGPA: 7.3/10)",
    desc: ["Ramrao Adik Institute of Technology, Mumbai University"]
  },
  {
    year: "2012 - 14",
    title: "Higher Secondary Certificate - 74.46%",
    desc: ["Uran Education Society"]
  }
]

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  items: Timeline[] = TIMELINE;
  
  constructor() { }

	ngOnInit() {
		var eduLoaded = false;
		$(window).scroll(function(){
			if(onScreen('#education') && !eduLoaded){
				$('#education .tl').css('visibility', 'visible');
				animateCss('#education .tl', 'fadeInUp', null);
				eduLoaded = true;
			}
		});		
	}

}

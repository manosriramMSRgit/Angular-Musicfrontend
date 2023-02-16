import { Component, OnInit } from '@angular/core';
import { RecommendationTable } from '../displaysongs/model/RecommendationTable';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
  //providers: [RecommendationService]
})
export class RecommendationComponent implements OnInit {

  

  getRecommendations : RecommendationTable[]=[]
  constructor(private service:RecommendationService) { }

  ngOnInit(): void {
    this.service.getAllRecommendSong().subscribe(
      data => {
        this.getRecommendations = data;
      });
  }
  myFunction()
  {
    var txt;
    if (confirm("Press OK to Logout!")) {
      txt = "You pressed OK!";
      window.location.href="./login";
    } else {
      txt = "You pressed Cancel!";
    
  }
  }
}

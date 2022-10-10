import { Component, Input, OnInit } from '@angular/core';
import { CalServiceService } from 'src/app/cal-service.service';

@Component({
  selector: 'app-result-here',
  templateUrl: './result-here.component.html',
  styleUrls: ['./result-here.component.scss']
})
export class ResultHereComponent implements OnInit {
 @Input() entered:any;
 @Input() converted:any;
 // entered:any='enter to calculate';



  constructor(private calcserv:CalServiceService) { }


  ngOnInit(): void {
    this.calcserv.keyEvent.subscribe(res=>{
      //this.entered=this.calcserv.getEntered();
     // this.converted=this.calcserv.getconvertedHere();
    })

  }




  operation(){

  }
}

import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { CalServiceService } from '../cal-service.service';

@Component({
  selector: 'app-equate',
  templateUrl: './equate.component.html',
  styleUrls: ['./equate.component.scss']
})
export class EquateComponent implements OnInit {
  emptyArr: any=[];
  emptyArrMinerse: any=[];

  constructor(private calcserv:CalServiceService) { }

  elements:any=["1","2","3","4","5","6","7","8","9","0","+","-","*",".","/","="];
  entered:any;
  converted:any;
  ngOnInit(): void {
  }

  onClick(ele:any){
    if(ele!="="){
      this.entered==undefined ? this.entered=ele :this.entered=this.entered+ele;
    }else if(ele=="="){
      this.converted=eval(this.entered)
/*       let summa=0;
        this.emptyArr=this.entered.split('+');
        console.log(eval(this.entered))
        this.emptyArr.forEach((ele1:any)=>{
          if(ele1.includes("-")||ele1.includes("*")||ele1.includes("/")){
              let ele2=ele1.split("-");
              ele2.forEach((ele3:any)=>{
                if(ele3.includes("*")||ele3.includes("/")){
                  let ele4=ele3.split("*");
                  let here1=1;
                  //   ele4.forEach((ele5:any)=>{
                  //   if(ele5.includes("/")){
                  //     let ele6=ele5.split("/");
                  //     for(let i in ele6){
                  //       if(parseInt(i)===(ele6.length-1)){
                  //         ele1=parseInt(ele5[0])/here1;
                  //         ele2=ele1;
                  //         console.log(ele2);
                  //       }
                  //       here1=parseInt(ele4[parseInt(i)+1])/here1;
                  //     }
                  //   }
                  // })
                  for(let i in ele4){
                    if(parseInt(i)==(ele4.length-1)){
                      ele1=parseInt(ele4[0])*here1;
                      ele2=ele1;
                      console.log(ele1);
                      break
                    }
                    here1=here1*parseInt(ele4[parseInt(i)+1])
                  }
                }
              })    
              let here=0;
              for(let i in ele2){
                if(parseInt(i)==(ele2.length-1)){
                    ele1=parseInt(ele2[0])+here;
                    break
                }
                here=here-parseInt(ele2[parseInt(i)+1])
              }}
        ele1=parseInt(ele1);
        summa=summa+ele1;
       })
    this.converted=summa; */
    console.log(this.converted)
    }
  }


  onClear(){
    this.entered=undefined;
    this.converted=0;
  }
}

import { Injectable ,EventEmitter} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalServiceService {
  emptyArr:any=[];
  entered:any='';
  converted=0;
  constructor() { }

  keyEvent:EventEmitter<any> = new EventEmitter();

  add(ele:any){
    this.entered=this.entered+ele;
    console.log(this.entered);
  }

  getEntered(){
    return this.entered;
  }

  clear(){
    this.entered='';
    return this.entered;
  }
  convertHere(){
    this.emptyArr=this.entered.split('+');
    let summa=0;
    this.emptyArr.forEach((ele1:any)=>{
      ele1=ele1.split('+');
      ele1=parseInt(ele1);
      summa=summa+ele1;
     /*  ele1.forEach((ele2:any)=>{
        ele2.forEach((ele3:any)=>{
          summa=1;
          ele3.forEach((ele4:any)=>{
            ele4=ele4.split('/');
            ele4=parseInt(ele4);
            summa=summa/ele4;
          })
          ele3=ele3.split('*');
            ele3=parseInt(ele3)
            summa=summa*ele3;
        })
        ele2=ele2.split('-');
        ele2=parseInt(ele2);
            summa=summa-ele2;
      }) */

    })

    console.log(summa);
    this.converted=summa;
    return summa;
  }

  getconvertedHere(){
    return this.converted;
  }
}

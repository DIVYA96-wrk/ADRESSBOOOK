import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})

export class ViewdataComponent implements OnInit {
  id:any="";
  results="";
  flag=0;

  constructor(private _Activatedroute:ActivatedRoute, private data:DataserviceService) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id")
    console.log(this.id)
    
    this.data.getlist()
      .subscribe((result: any) => {


        console.log(result)

        for (let elements of result['results']) {
          for (let key in elements) {
            if (key == "rows") {
              this.results = elements['rows']
              console.log(this.results)
              for(let i=0;i<this.results.length;i++)
              {

              }
             

            
            }
          }
        }


      })
  }


  edit(id:any,names:any,address:any,mobile:any){
    console.log(id,names,address,mobile)
    this.flag=1;


  }

  delete(id:any){
    let code=id
     this.data.delete(code)
     .subscribe((result: any) => {

      alert("deleted succesfully")

    })
  }

}

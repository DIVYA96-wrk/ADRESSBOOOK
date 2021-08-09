import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-addresslist',
  templateUrl: './addresslist.component.html',
  styleUrls: ['./addresslist.component.css']
})
export class AddresslistComponent implements OnInit {
  
  result: any[] = [];
  constructor(private data: DataserviceService, private route: Router) {

  }

  ngOnInit(): void {
    console.log(this.result)
    this.data.getlist()
      .subscribe((result: any) => {


        console.log(result)

        for (let elements of result['results']) {
          for (let key in elements) {
            if (key == "rows") {
              this.result = elements['rows']
              console.log(this.result)
             

            
            }
          }
        }


      })
  }

  newadd() {
    this.route.navigateByUrl('newadd')
  }

}

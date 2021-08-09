import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-newadd',
  templateUrl: './newadd.component.html',
  styleUrls: ['./newadd.component.css']
})
export class NewaddComponent implements OnInit {
  hn="";
  names="";
  adress="";
  mobile="";

  constructor(private route:Router, private data:DataserviceService) { }

  ngOnInit(): void {
  }

  insert(){
    this.data.insert(this.hn,this.names,this.adress,this.mobile)
    .subscribe((result:any)=>{

      alert("inserted sucesfully")
    
    })
  }

}

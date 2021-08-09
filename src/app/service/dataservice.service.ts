import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

 residencelist=[
   {sl_no:1, Name:'Divya', Flatno:"100"},
   {sl_no:2, Name:'Deepa', Flatno:"101"},
   {sl_no:3, Name:'Priya', Flatno:"102"},
   {sl_no:4, Name:'Anu', Flatno:"103"}
 ]

 insert(hn:any,names:any,adress:any,mobile:any){
  let data=
  {
    "batchStatus": "false",
    "detailArray":
    [{
                 "Flag":"Insert",
                "HouseNo":hn,
                "Name":names,
                "Address":adress,
                "Mobile":mobile

    }],
                 "dbConn": "db5",
                 "requestId": "600604",
                 "outTblCount": "0"
    
  }
  
return this.http.post(environment.URL,data)
}


getlist(){
  let data={
    "batchStatus": "false",
    "detailArray":
    [{
                 "Flag":"View"
    }],
                 "dbConn": "db5",
                 "requestId": "600604",
                 "outTblCount": "0"
    
  }

  return this.http.post(environment.URL,data)


}

delete(id:any){
  let idcode=id
  let data={
    "batchStatus": "false",
    "detailArray":
    [{
                 "Flag":"Delete",
                 "HouseNo":idcode
    }],
                 "dbConn": "db5",
                 "requestId": "600604",
                 "outTblCount": "0"
  }

  return this.http.post(environment.URL,data)
}



}

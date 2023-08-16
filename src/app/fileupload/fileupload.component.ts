import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {


  fileuploadUrl:any
  Formatdata:any
  constructor(

    private http:HttpClientModule

  ) {}





  ngOnInit(): void {}


  file:any

  selectfile(event:any){

    console.log(event);
   this.file=event.target.files[0]
   console.log(this.file);
       

  }


   
  // fileupload(){

  //   let formData = new formData 
  //   formData.append('file', this.file);
  // }


}

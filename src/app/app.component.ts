import { Component } from '@angular/core';
import {HeroService } from '/Users/Przemyslaw/Desktop/angular/hello-world/src/app/hero.service'
import {Table2Component} from "./table2/table2.component";
import {StatusPlaceHolderList} from "./model/StatusPlaceHolderList";
import { HttpClient } from '@angular/common/http';
import{ dataTable } from '/Users/Przemyslaw/Desktop/angular/hello-world/src/app/model/dataTable';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';


  StudentsTable;
  GitHubUsersData;
  public tasksData;
currentName;
  currentTaskId;
  ID;

  constructor(private newService: HeroService) {


  }


  getData() {
    // console.log(this.getTaskIdFromTaskName("feature/5MethodsOfSorting"))

    this.newService.getData().subscribe(data=> {
      this.StudentsTable=data;
// console.log(this.StudentsTable);


      // console.log(this.StudentsTable);
      for (let i = 0; i <this.StudentsTable.length ; i++) {

        this.newService.getGitData().subscribe(data=> {
          this.GitHubUsersData=data;

          for(let j=0;j<this.GitHubUsersData.length; j++) {
            if(this.StudentsTable[i].studentLogin==this.GitHubUsersData[j].gitHubLogin) {
this.currentName=this.GitHubUsersData[j].name;


              // console.log(this.GitHubUsersData[j].name)
              return this.currentName;
            }
            else continue;


            }



        })


    }})

  }

  getTaskIdFromTaskName(taskName: string) {
    // let that = this;

    this.newService.getTasksData().map(data =>  {
      this.tasksData = data

      // console.log(this.tasksData);


      for(let i=0;i<this.tasksData.length; i++) {
        if(taskName==this.tasksData[i].name) {
         this.ID=this.tasksData[i].id;
          console.log(this.ID);
        }
        // console.log(ID.toString())
        // return ID
      }
    })
    // console.log(this.ID);
    return this.ID
  }





// convertStudentIdToStudentName() {
//
// }
//   for (let i = 0; i < ; i++) {
//
// this.StudentsTable
//
// }







  ngOnInit() {

    this.getData();
    this.getTaskIdFromTaskName('feature/5MethodsOfSorting')


}



  }

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {StatusPlaceHolderList} from "./model/StatusPlaceHolderList";
import { HttpClient } from '@angular/common/http';
import {assertNumber} from "@angular/core/src/render3/assert";

import{ dataTable } from '/Users/Przemyslaw/Desktop/angular/hello-world/src/app/model/dataTable';
import {tasks} from "./model/tasks";

@Injectable()
export class HeroService {

  // private _postsURL = 'assets/statusPlaceHolderTable1.json';

  IdStudent: any;
  studentName;
  string;
  list: number[] = [];


  constructor(private http: HttpClient) {

  }


  getData(): Observable<Array<dataTable>> {
    return this.http.get<Array<dataTable>>('assets/statusPlaceHolderTable1.json')


  }

  getGitData(): Observable<Array<gitHubUser>>  {
    return this.http.get<Array<gitHubUser>>('assets/GitHubUser.json')

  }


  // getTable() {
  //
  //   let statusPlaceHolder = this.http.get<dataTable>('assets/statusPlaceHolderTable1.json').subscribe(data => {
  //     // console.log(data);
  //     for (let i = 0; i < 3; i++) {
  //       this.list.push(data[i].studentId)
  //
  //
  //     }
  //     // console.log(this.list.toString())
  //     return this.list;
  //   });
  // }

  getTasksData(): Observable<Array<tasks>> {
    return this.http.get<Array<tasks>>('assets/tasks.json')



  }

}








  // getData() {
    // let myData= this.http
    //   .get<dataTable[]>(this._postsURL)
    //
    // // console.log(myData[0].taskId)
    // return myData


    // let statusPlaceHolder = this.http.get<dataTable>('assets/statusPlaceHolderTable1.json').subscribe(data => {
    //   // console.log(data);
    //
    //   for (let i = 0; i < 3; i++) {
    //     this.IdStudent = data[i].studentId;
    //     // console.log(this.IdStudent)



//         let gitHubUserData = this.http.get<gitHubUser>('assets/GitHubUser.json').subscribe(gitHubData => {
//           // console.log(data);
//
// for(let i=0; i<this.list.length; i++){
//
//   for (let j = 0; j < 12; j++) {
//     if (this.list.indexOf(i)==gitHubData[j].id)) {
//       console.log(gitHubData[j].name);
//       return gitHubData[j].name;
//
//
//       }
// }
//           }
//     });
//   }
// }



  // getHeroes2(): Observable<Hero[]> {
  //   return this._http.get('src/app/mock-heros.json').map((response: Response)=> <Hero[]>response.json());
  // }



//  fetchData() {
//
//
// }
// }


  // getData(): Observable <dataTable[]> {


    // const response = this.http.get<dataTable>('assets/statusPlaceHolderTable1.json')
    //   .map(res => this.studentId = res.json());

    // let studentIdData = this.http.get<dataTable[]>('assets/statusPlaceHolderTable1.json').subscribe(data => {
    //   console.log(data)
    // });
    // return studentIdData;
    //
    //
    // console.log(studentIdData);


    // for (let i = 0; i < 12; i++) {
    //
    //   if (studentIdData = this.http.get<gitHubUser>('assets/GitHubUser.json').subscribe(data => {
    //       console.log(data[i].id)
    //     })) {
    //     return this.http.get<gitHubUser>('assets/GitHubUser.json').subscribe(data => {
    //       console.log(data[i].gitHubLogin)
    //     })
    //   }
    // }




  // let gitHubUserData = this.http.get<gitHubUser>('assets/GitHubUser.json').subscribe(data => {
  //   console.log(data[i].gitHubLogin);
  //
  //
  //   }



    // let list: string[] = [];


    // let gitHubUserData = this.http.get<gitHubUser>('assets/GitHubUser.json').subscribe(data => {
    //   // console.log(data);
    // });


    // const items = gitHubUserData(data => data.gitHubLogin);
    //
    // for (let obj in studentIdData) {
    //   console.log(obj.)
    //
    // }



    // for (var number of gitHubUserDates) {
    //   console.log(number);
    // }



  //   for (let i = 0; ; i++) {
  //     console.log(usersJson[i]);
  // }

    // const usersJson: any[] = Array.of(gitHubUserDates);
    // for (let i = 0; i<usersJson.length; i++) {
    //   console.log(usersJson[1][1]);
    // }




    //
    // console.log(usersJson[2].gitHubLogin)


    // let myObject = this.http.get<gitHubUser>('assets/GitHubUser.json').subscribe((res: gitHubUser) => {
    //   res.json().gitHubLogin;

    // })


    //
    // this.http.request('assets/GitHubUser.json')
    //   .subscribe((res: Response) => {
    //     this.gitHubUser = res.json(;


// function getId(id) {
//   return gitHubUserDates
//
// }




  // getData(): Observable<StatusPlaceHolderList[]> {





    // let myData= this.http.get('assets/statusPlaceHolderTable1.json')
    //   .map((res: Response) => res.json().response.map((statusplaceholderlist: StatusPlaceHolderList)=>new StatusPlaceHolderList().deserialize(statusplaceholderlist)));
    //
    // return myData;







  // fetchData(): Observable<any> {
  //   return this.http.get('assets/statusPlaceHolderTable1.json').map((response)=><any>response.json()).do(data=>console.log(JSON.stringify(data)));
  //
  // }

//   getHeroes(): Hero[] {
//     return HEROES;
//   }
//
// }


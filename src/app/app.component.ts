import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  SrvElementAdded(serverData:{Servername:string,ServerContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.Servername,
      content:serverData.ServerContent
    })
    console.log(this.serverElements)
  }
  bluElementAdded(blueprint:{Servername:string,ServerContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprint.Servername,
      content:blueprint.ServerContent
    })
  console.log(this.serverElements)

  
}
}

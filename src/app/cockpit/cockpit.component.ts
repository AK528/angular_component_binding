import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded = new EventEmitter <{Servername:string,ServerContent:string}>()
  @Output() blueprintAdded = new EventEmitter <{Servername:string,ServerContent:string}>()

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('servercontent') servercontent:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput:HTMLInputElement) {
    this.serverAdded.emit({
      
      // Servername:this.newServerName,
      Servername:nameInput.value,
      // ServerContent:this.newServerContent
      ServerContent:this.servercontent.nativeElement.value
    }
      
    );
    console.log(nameInput.value)
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintAdded.emit({
      // Servername:this.newServerName,
      Servername:nameInput.value,

      // ServerContent:this.newServerContent
      ServerContent:this.servercontent.nativeElement.value
    });

}
}

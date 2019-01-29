import { Component, OnInit } from '@angular/core';

@Component({
  // el selector por id no es soportado por angular
  // selector: '[app-servers]', por atributo
  // selector: '.app-servers', por class
  selector: 'app-servers',
  // template: `
  //  <app-server></app-server>
  //  <app-server></app-server>
  //  `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

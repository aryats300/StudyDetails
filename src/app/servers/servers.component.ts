import { Component,OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
@Component({
  // selector: '[app-servers]',
  // selector:'.app-servers',
  selector:'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer=false;
  // serverCreationStatus="No Server was created!" 
  serverName='Testserver'
  serverCreated=false;
  servers=['Testserver','TestServer 2'];
  constructor(){
    setTimeout(()=>{
    this.allowNewServer=true;
    },2000);
  }
    ngOnInit() {}
      onCreateServer(){
        this.serverCreated= true;
        this.servers.push(this.serverName);
        // this.serverCreationStatus='server Was created! name ' +this.serverName;
        

      }
      onUpdateServerName(event: any){
        // console.log(event);
        this.serverName=(<HTMLInputElement>event.target).value
      }
  
  }



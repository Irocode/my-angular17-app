import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string; } | undefined;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    //das Plus wandelt die id in eine Zahl um
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    this.route.params.subscribe(
      (params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

}

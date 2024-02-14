import { Component } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../../shared/dataunittest.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
  providers: [UserService, DataService]
})
export class NewComponent {

  title= "new works!"

  user: {name: string};
  isLoggedIn = false;
  data: string;

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);
  }

}

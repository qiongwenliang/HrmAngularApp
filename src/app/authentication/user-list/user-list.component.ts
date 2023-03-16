import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService){}

  userCollections : User[]=[]

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data) => {
      this.userCollections=data
    })
  }

  deleteUser(id:number){
    if (confirm("Are you sure to delete User number " + id + "?")){
      this.userService.deleteUserById(id).subscribe(() => {
        window.location.reload()
      })
    }
  }

}

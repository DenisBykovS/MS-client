import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit() {
  }

  logout() {
    this.adminService.logout();
  }
}

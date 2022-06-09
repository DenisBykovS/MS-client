import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdminService} from "../../admin.service";
import {Admin} from "../../../shared/interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private adminService: AdminService ) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  adminIn() {
    // debugger;
    const admin: Admin = {...this.form.value};
    this.adminService.authUser(admin).subscribe(() => {
      this.router.navigate(['/admin', 'message']);
    });
  }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LayoutAdminComponent } from "./shared/layout-admin/layout-admin.component";
import { LoginComponent } from "./components/login/login.component";
import { AddFotoComponent } from "./components/add-foto/add-foto.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { PortfolioAdminComponent } from "./components/portfolio-admin/portfolio-admin.component";
import { EditComponent } from "./components/edit/edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminGuard } from "./admin.guard";

@NgModule({
  declarations: [
    LoginComponent,
    LayoutAdminComponent,
    AddFotoComponent,
    MessagesComponent,
    PortfolioAdminComponent,
    EditComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: LayoutAdminComponent,
        children: [
          { path: "", redirectTo: "/admin/login", pathMatch: "full" },
          { path: "login", component: LoginComponent },
          {
            path: "add",
            canActivate: [AdminGuard],
            component: AddFotoComponent,
          },
          {
            path: "message",
            canActivate: [AdminGuard],
            component: MessagesComponent,
          },
          {
            path: "portfolio",
            canActivate: [AdminGuard],
            component: PortfolioAdminComponent,
          },
          {
            path: "edit/:id",
            canActivate: [AdminGuard],
            component: EditComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [AdminGuard],
})
export class AdminModule {}

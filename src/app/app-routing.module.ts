import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContentComponent} from "./main-content/main-content.component";
import {AdminComponent} from "./admin/admin.component";
import {CarListComponent} from "./admin/car-list/car-list.component";
import {CarDetailsComponent} from "./admin/car-details/car-details.component";
import {CustomerListComponent} from "./admin/customer-list/customer-list.component";
import {RentalHistoryComponent} from "./admin/rental-history/rental-history.component";
import {CarDetailsEditComponent} from "./admin/car-details-edit/car-details-edit.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: MainContentComponent},
  {
    path: "admin", component: AdminComponent,
    children: [
      {path: "", redirectTo: 'cars', pathMatch: 'full'},
      {path: "cars", component: CarListComponent},
      {path: "cars/:id", component: CarDetailsComponent},
      {path: "cars/:id/edit", component: CarDetailsEditComponent},
      {path: "customers", component: CustomerListComponent},
      {path: "rentals-history", component: RentalHistoryComponent},
    ]
  },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

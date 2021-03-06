import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { BottomComponent } from './pages/shared/footer/bottom.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/shared/menu/menu.component';
import { LotsComponent } from './pages/lots/lots.component';
import { YourProfileComponent } from './pages/userPages/your-profile/your-profile.component';
import { YourBidsComponent } from './pages/userPages/your-bids/your-bids.component';
import { YourLotsComponent } from './pages/userPages/your-lots/your-lots.component';
import { YourProductsComponent } from './pages/userPages/your-products/your-products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LotComponent } from './pages/lot/lot.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { LotCreateComponent } from './pages/lot-create/lot-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'lots', pathMatch: 'full' },
    { path: 'lots', component: LotsComponent},
    { path: 'lot/:id', component: LotComponent},
    { path: 'lotCreate', component: LotCreateComponent, canActivate: [AuthGuard]},
    { path: 'products', component: LotsComponent},
    { path: 'productCreate', component: ProductCreateComponent, canActivate: [AuthGuard]},
    { path: 'profile', component: ProfileComponent, children: [
      { path: 'yourBids', component: YourBidsComponent, canActivate: [AuthGuard]},
      { path: 'yourLots', component: YourLotsComponent, canActivate: [AuthGuard]},
      { path: 'yourProducts', component: YourProductsComponent, canActivate: [AuthGuard]},
      { path: 'yourProfile', component: YourProfileComponent, canActivate: [AuthGuard]},
    ] },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

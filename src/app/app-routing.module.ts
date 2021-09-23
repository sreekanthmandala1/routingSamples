import { HomeComponent } from './components/home/home.component';
import { ContactUsModule } from './components/contact-us/contact-us.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'contactus', loadChildren:() => import('./components/contact-us/contact-us.module').then(m => m.ContactUsModule)},
  {path:'gallery/:id/:id/:id', component:GalleryComponent},
  {path:'gallery', component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
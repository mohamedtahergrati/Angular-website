import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouteguardService } from './routeguard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path:'', redirectTo: '/Home', pathMatch: 'full'},
  { path:'Home', component: HeaderComponent },
  { path:'Login', component: LoginComponent },
  { path:'Signup', component: SignupComponent },
  { path:'Contact', component: ContactComponent },
  { path:'About', component: IntroComponent },
  { path:'Services', component: ContentComponent },
  { path:'Testimonials', component: TestimonialComponent },
  { path:'Gallery', component: GalleryComponent },
  { path:'Clients', component: ClientsComponent },
  { path:'Pricing', component: PricingComponent },
  { path:'Blog', component: BlogComponent, canActivate: [RouteguardService] },
  { path:'Article/:id', component: ArticleComponent },
  { path:'404', component: NotfoundComponent },
  { path:'**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

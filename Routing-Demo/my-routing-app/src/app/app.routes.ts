import { Routes } from '@angular/router';
import { HomeComponent } from './data/home/home.component';
import { UserComponent } from './data/user/user.component';
import { PostComponent } from './data/post/post.component';
import { TravelComponent } from './data/travel/travel.component';

export const routes: Routes = [
    {path:'userdata',component:UserComponent},
    {path:'postdata',component:PostComponent},
    {path:"traveldata",component:TravelComponent},
    {path:'',component:HomeComponent}
];

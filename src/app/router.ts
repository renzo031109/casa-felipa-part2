import { Routes,RouterModule } from "@angular/router";
import { MasterDetailComponent } from './menus/master-detail/master-detail.component';
import { ListComponent } from './menus/list/list.component';
import { MasterFileListComponent } from './menus/master-file-list/master-file-list.component';
import { AboutComponent } from './about/about.component';
import { MenusContainerComponent } from './menus/menus-container.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuCarouselComponent } from './menus/menu-carousel/menu-carousel.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: MenuCarouselComponent},
    {path: 'menus', component: MenusContainerComponent },
    {path: 'contact', component: ContactUsComponent },
    {path: 'about', component: AboutComponent }
];
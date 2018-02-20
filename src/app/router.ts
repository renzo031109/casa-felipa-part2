import { Routes,RouterModule } from "@angular/router";
import { MasterDetailComponent } from './menus/master-detail/master-detail.component';
import { ListComponent } from './menus/list/list.component';
import { MasterFileListComponent } from './menus/master-file-list/master-file-list.component';
import { AboutComponent } from './about/about.component';
import { MenusContainerComponent } from './menus/menus-container.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'menus', pathMatch: 'full'},
    {path: 'menus', component: MenusContainerComponent },
    {path: 'contact', component: ContactUsComponent },
    {path: 'about', component: AboutComponent }
];
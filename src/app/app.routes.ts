import { Routes } from '@angular/router';
import { IndexComponent } from './pages/products/index/index.component';
import { CreateComponent } from './pages/products/create/create.component';
import { ViewComponent } from './pages/products/view/view.component';
import { EditComponent } from './pages/products/edit/edit.component';
// import { IndexComponent } from './pages/product/index/index.component';

export const routes: Routes = [
    {path:'products', redirectTo:'products/index', pathMatch:'full'},
    {path:'products/index', component:IndexComponent},
    {path:'products/create', component:CreateComponent},
    {path:'products/edit/:id', component:EditComponent},
    {path:'products/view/:productiId', component:ViewComponent},

];

export class AppRoutingModule {}

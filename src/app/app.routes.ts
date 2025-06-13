import { Routes } from '@angular/router';
import { BookformComponent } from './bookform/bookform.component';
import { BooklistComponent } from './booklist/booklist.component';

export const routes: Routes = 
[
    {path:'', component:BookformComponent},
    {path:'bookForm', component:BookformComponent},
    {path:'bookList', component:BooklistComponent}
]

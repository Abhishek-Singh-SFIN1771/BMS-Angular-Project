import { Routes } from '@angular/router';
import { BookformComponent } from './BookForms/book-form.component';
import { BooklistComponent } from './BookLists/book-list.component';

export const routes: Routes = 
[
    {path:'', component:BookformComponent},
    {path:'bookForm', component:BookformComponent},
    {path:'bookList', component:BooklistComponent}
]

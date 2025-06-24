import { Routes } from '@angular/router';
import { BookformComponent } from './BookForms/BookForm.component';
import { BooklistComponent } from './BookLists/BookList.component';

export const routes: Routes = 
[
    {path:'', component:BookformComponent},
    {path:'bookForm', component:BookformComponent},
    {path:'bookList', component:BooklistComponent}
]

import { Routes } from '@angular/router';
import { BookformComponent } from './BookForm/bookForm.component';
import { BooklistComponent } from './BookList/bookList.component';

export const routes: Routes = 
[
    {path:'', component:BookformComponent},
    {path:'bookForm', component:BookformComponent},
    {path:'bookList', component:BooklistComponent}
]

import { Routes } from '@angular/router';
import { BookformComponent } from './book-forms/book-form.component';
import { BooklistComponent } from './book-lists/book-list.component';


export const routes: Routes = 
[
    {path:'', component:BookformComponent},
    {path:'bookForm', component:BookformComponent},
    {path:'bookList', component:BooklistComponent}
]

import{HomeComponent} from './home/home.component';
import{DirectoryComponent} from './directory/directory.component'
import { Routes,RouterModule } from '@angular/router';

export const APP_ROUTES:Routes =[
{
    path: '',
    component: HomeComponent
},
{
    path: 'directory',
    component: DirectoryComponent
}
]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);

import { Routes } from '@angular/router';
import { Redirect } from './redirect/redirect';
import { Home } from './home/home';

export const routes = [
    { path: '', component: Home },
    { path: ':codigo', component: Redirect },
];
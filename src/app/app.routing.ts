import {SearchComponent} from './search/search.component';

import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: SearchComponent
  }
]);

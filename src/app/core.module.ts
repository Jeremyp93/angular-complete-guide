import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DataStorageInterceptorService } from './shared/data-storage-interceptor.service';

@NgModule({
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: DataStorageInterceptorService, multi: true }],
})
export class CoreModule { }

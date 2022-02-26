import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { TestLibCompComponent } from './test-lib-comp/test-lib-comp.component';
import { MyCompComponent } from './my-comp/my-comp.component';



@NgModule({
  declarations: [
    MyLibComponent,
    TestLibCompComponent,
    MyCompComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent, TestLibCompComponent, MyCompComponent
  ]
})
export class MyLibModule { }

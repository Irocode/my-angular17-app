import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { Form1Component } from './form1/form.component';
import { Form2Component } from './form2/form.2component';
import { Form3Component } from './form3/form.component';


@NgModule({
  declarations: [FormComponent, Form1Component, Form2Component, Form3Component],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: FormComponent }]),
    SharedModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  
  ],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
       useExisting: Form3Component,
    }
  ]
})
export class FormTestsModule { }

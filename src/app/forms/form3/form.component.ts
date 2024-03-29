import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form3',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class Form3Component {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
  }

  createForm() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroup = this.formBuilder.group({
      email: [
        'andrei88_fcd@yahoo.com',
        [Validators.required, Validators.pattern(emailregex)],
        this.checkInUseEmail,
      ],
      name: [null, Validators.required],
      password: [null, [Validators.required, this.checkPassword]],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      validate: '',
    });
  }


  setChangeValidate() {
    this.formGroup.get('validate')?.valueChanges.subscribe((validate) => {
      if (validate == '1') {
        this.formGroup.get('name')?.setValidators([Validators.required, Validators.minLength(3)]);
        this.titleAlert = 'You need to specify at least 3 characters';
      } else {
        this.formGroup.get('name')?.setValidators(Validators.required);
      }
      this.formGroup.get('name')?.updateValueAndValidity();
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  checkPassword(control) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable((observer) => {
      setTimeout(() => {
        let result =
          db.indexOf(control.value) !== -1 ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  getErrorEmail() {
    return this.formGroup.get('email')?.hasError('required')
      ? 'Field is required'
      : this.formGroup.get('email')?.hasError('pattern')
      ? 'Not a valid emailaddress'
      : this.formGroup.get('email')?.hasError('alreadyInUse')
      ? 'This emailaddress is already in use'
      : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password')?.hasError('required')
      ? 'Field is required (at least eight characters, one uppercase letter and one number)'
      : this.formGroup.get('password')?.hasError('requirements')
      ? 'Password needs to be at least eight characters, one uppercase letter and one number'
      : '';
  }

  onSubmit(post) {
    console.log(post);
    this.post = post;
  }
}

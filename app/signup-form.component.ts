import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { UsernameValidators } from './usernameValidators';
import { NewPasswordValidator } from './newPasswordValidator'

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique],

            newPassword: ['', Validators.compose([
                Validators.required,
                NewPasswordValidator.cannotContainSpace,
                NewPasswordValidator.minLength])],

            retype: ['', Validators.compose([
                Validators.required])],
        }, {
                validator: NewPasswordValidator.comparePasswords
            })
    };



    signup() {
        console.log(this.form.value);
    }
}
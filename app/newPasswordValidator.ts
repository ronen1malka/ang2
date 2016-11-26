import { Control, ControlGroup } from 'angular2/common';
export class NewPasswordValidator {
    static cannotContainSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }

    static minLength(control: Control) {
        if (control.value.length < 5)
            return { minLength: true };
        return null;
    }

    static comparePasswords(group: ControlGroup) {
        var pass = group.find("newPassword");
        var retype = group.find("retype");
        if (pass.value !== retype.value) {
            retype.setErrors({comparePasswords: true});
            return { comparePasswords: true };
        }
        else { return null }
    }

}
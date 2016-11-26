System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NewPasswordValidator;
    return {
        setters:[],
        execute: function() {
            class NewPasswordValidator {
                static cannotContainSpace(control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpace: true };
                    return null;
                }
                static minLength(control) {
                    if (control.value.length < 5)
                        return { minLength: true };
                    return null;
                }
                static comparePasswords(group) {
                    var pass = group.find("newPassword");
                    var retype = group.find("retype");
                    if (pass.value !== retype.value) {
                        retype.setErrors({ comparePasswords: true });
                        return { comparePasswords: true };
                    }
                    else {
                        return null;
                    }
                }
            }
            exports_1("NewPasswordValidator", NewPasswordValidator);
        }
    }
});
//# sourceMappingURL=newPasswordValidator.js.map
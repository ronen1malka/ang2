System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CoursesService;
    return {
        setters:[],
        execute: function() {
            class CoursesService {
                getCourses() {
                    return ["course1", "course2", "course3"];
                }
            }
            exports_1("CoursesService", CoursesService);
        }
    }
});
//# sourceMappingURL=course.service.js.map
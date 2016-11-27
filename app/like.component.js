System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikeComponent = class LikeComponent {
                constructor() {
                    this.isLike = false;
                    this.count = 10;
                    this.change = new core_1.EventEmitter();
                }
                onclick() {
                    this.isLike = !this.isLike;
                    if (this.isLike) {
                        this.count++;
                    }
                    else {
                        this.count--;
                    }
                    this.change.emit({ isLike: this.isLike, count: this.count });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], LikeComponent.prototype, "isLike", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], LikeComponent.prototype, "count", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], LikeComponent.prototype, "change", void 0);
            LikeComponent = __decorate([
                core_1.Component({
                    selector: 'like',
                    templateUrl: 'app/like.template.html',
                    styles: [`
        .glyphicon-heart{
            color: #ccc;
        }

         i:hover {
            cursor: pointer
        }        
    `]
                }), 
                __metadata('design:paramtypes', [])
            ], LikeComponent);
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map
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
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    this._enableUp = true;
                    this._enableDown = true;
                    this.myVote = 0;
                    this.vouteCount = 0;
                    this.change = new core_1.EventEmitter();
                }
                VoterComponent.prototype.onClick = function ($event, dir) {
                    if (dir === "up" && this._enableUp) {
                        this.myVote = 1;
                        this._enableUp = false;
                        this._enableDown = true;
                        this.vouteCount += this.myVote;
                    }
                    if (dir === "down" && this._enableDown) {
                        this.myVote = -1;
                        this._enableUp = true;
                        this._enableDown = false;
                        this.vouteCount += this.myVote;
                    }
                    if (this.myVote === 0) {
                        this._enableUp = true;
                        this._enableDown = true;
                    }
                    //this.renderer.setElementClass(this.el.nativeElement,'disabled',true)
                    this.change.emit({ myVote: this.myVote, vouteCount: this.vouteCount });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "vouteCount", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "change", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        templateUrl: 'app/voter.template.html',
                        styles: ["\n        .glyphicon-menu-up{\n            color: #ccc;\n        }\n        .glyphicon-menu-down{\n            color: #ccc;\n        }\n\n         i:hover {\n            cursor: pointer\n        }        \n    "]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map
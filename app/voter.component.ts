import { Component, Input, EventEmitter, Output, ElementRef, Renderer  } from 'angular2/core';

@Component({
    selector: 'voter',
    templateUrl: 'app/voter.template.html',
    styles: [`
        .glyphicon-menu-up{
            color: #ccc;
        }
        .glyphicon-menu-down{
            color: #ccc;
        }

         i:hover {
            cursor: pointer
        }        
    `]
})
export class VoterComponent {
    constructor(private el: ElementRef, private renderer: Renderer) { }
    _enableUp = true;
    _enableDown = true;
    @Input() myVote = 0;
    @Input() vouteCount = 0;

    @Output() change = new EventEmitter();
    onClick($event, dir) {

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

        if(this.myVote===0){
            this._enableUp = true;
            this._enableDown = true;
        }
        //this.renderer.setElementClass(this.el.nativeElement,'disabled',true)
        
        this.change.emit({ myVote: this.myVote, vouteCount: this.vouteCount });
    }
}
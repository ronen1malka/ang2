import { Component, Input, EventEmitter, Output } from 'angular2/core';

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
    constructor() { }

    @Input() myVote = 0;
    @Input() vouteCount = 0;

    @Output() change = new EventEmitter();

    onClick($event, dir) {
        
        this.myVote = dir ==='up' ? 1 : -1;
        
        
        this.vouteCount += this.myVote;
        this.change.emit({ myVote: this.myVote, vouteCount: this.vouteCount });
    }
}
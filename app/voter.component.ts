import { Component, Input, EventEmitter, Output } from 'angular2/core';

@Component({
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
})
export class LikeComponent {
    constructor() { }


    @Input() isLike = false;
    @Input() count = 10;

    @Output() change = new EventEmitter();

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
}
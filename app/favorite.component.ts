import { Component,Input,EventEmitter,Output } from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
        .glyphicon-star{
            color: orange;
        }
    `]
})
export class FavoriteComponent {
    constructor() { }
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();

    onclick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}
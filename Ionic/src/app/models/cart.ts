
import { cartLine } from './cart-line';

export class Cart {
    constructor(
        public items: cartLine[],
        public name: string,
        public quantityChange: number,
        public totalItem: number,
        public totalPrice: number,
        public grandTotal: number
    ) {}
}

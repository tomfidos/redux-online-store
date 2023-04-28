export interface CartState {
    cartItems: CartItems,
    totalQuantity: number
}

export interface CartItems {
    [id: number]: CartItem;
}

export interface CartItem {
    id: number,
    quantity: number;
}

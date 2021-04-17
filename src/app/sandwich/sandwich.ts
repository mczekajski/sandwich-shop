export enum Ingredient {
    Lettuce = 'lettuce',
    Chorizo = 'chorizo',
    Ham = 'ham',
    Cheese = 'cheese',
    Tomato = 'tomato'
}

export enum Sauce {
    None = 'none',
    Barbecue = 'bbq',
    Hot = 'hot',
    Mayo = 'mayo'
}

export interface Sandwich {
    id?: number;
    name: string;
    ingredients: Ingredient[];
    sauce: Sauce;
    vege: boolean;
    price: number;
}
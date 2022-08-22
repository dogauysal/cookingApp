// export default class Recipe {
//     id: string;

//     constructor(id: string) {
//         this.id = id
//     }
// }

export interface Recipe {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
    has_cheese: boolean;
    has_salt: boolean;
} 
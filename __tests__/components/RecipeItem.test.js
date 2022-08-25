import React from "react";
import renderer from 'react-test-renderer';
import { IRecipe } from '../../src/models/IRecipe';
import RecipeItem from "../../src/components/RecipeItem";

describe('recipeitem', () => {
    it('recipeitem renders correctly', () => {
        const recipe = {
            "id": 42,
            "name": "Carne Asada Bowl",
            "price": 15,
            "ingredients": [
                "salt",
                "chicken",
                "steak",
                "farro",
                "black_beans",
                "guacamole"
            ],
            "has_cheese": false,
            "has_salt": true
        }

        const recipeItem = renderer.create(<RecipeItem recipe={recipe} />).toJSON();
        expect(recipeItem).toMatchSnapshot()
    })
})


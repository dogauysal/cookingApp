import React from "react";
import renderer from 'react-test-renderer';
import Ingredient from "../../src/components/Ingredient";



describe('ingredient item', () => {
    test('ingredientitem renders correctly', () => {
        const ingredient = "cheese"

        const ingredientItem = renderer.create(<Ingredient ingredient={ingredient} />).toJSON();
        expect(ingredientItem).toMatchSnapshot();
    })
})


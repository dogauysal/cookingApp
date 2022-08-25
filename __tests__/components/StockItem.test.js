import React from "react";
import renderer from 'react-test-renderer';
import StockItem from "../../src/components/StockItem";


describe('stockitem', () => {
    test('stockitem renders correctly', () => {
        const stock = {
            "id": 1,
            "name": "Chicken",
            "kg": 2
        }

        const stockItem = renderer.create(<StockItem stock={stock} />).toJSON();
        expect(stockItem).toMatchSnapshot()
    })
})


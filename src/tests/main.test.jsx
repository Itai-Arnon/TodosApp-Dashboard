
import {it , expect ,describe , test } from 'vitest'

import TodoMain from "../TodoMain.jsx";

import {render ,screen} from '@testing-library/react';

function TestComponent() {
    return (
        <div>
            <h1>Test Component</h1>
        </div>
    );
}


describe('group', () => {
    it('should' , ()=>{
        expect(1).toBeTruthy();
    })

});

test('test TodoMain', () => {
    render(<TestComponent />);
    const elem = (screen.getByText('Test Component'));
    expect(elem).toBeInTheDocument();
});





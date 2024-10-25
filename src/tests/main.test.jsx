
import {it , expect ,describe , test } from 'vitest'

import TodoMain from "../TodoMain.jsx";

import {render ,screen} from '@testing-library/react';



describe('group', () => {
    it('should' , ()=>{
        expect(1).toBeTruthy();
    })

});

test('test TodoMain', () => {
    render(<TodoMain/>);
    const elem = (screen.getByText('Search users...'))
    expect(elem).toBeInTheDocument();
});





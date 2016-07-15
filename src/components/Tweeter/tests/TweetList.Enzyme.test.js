import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import TweetList from '../TweetList';

function setup(saving) {
    const props = {
        tweets: [{id:"1", date:"today", message:"yo!"},{id:"2", date:"tomorrow", message:"yo!"}]
    };

    return shallow(<TweetList {...props} />)
}

/**
 * Test using: npm run test:watch
 *
 */
describe('TweetList via Enzyme', () => {
    it('renders form', () => {
        const wrapper = setup(false);
        expect(wrapper.find('table').length).toBe(1);
        expect(wrapper.find('tr').length).toBe(3);
    });

});

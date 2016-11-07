import React from 'react';
import Home from '../../../src/routes/Home/';
import Search from '../../../src/containers/SearchContainer/';
import Repositories from '../../../src/containers/RepositoriesContainer/';
import { shallow } from 'enzyme';

describe('(Route) Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a SearchContainer', () => {
    expect(wrapper.find(Search)).to.have.length(1);
  });

  it('renders a RepositoriesContainer', () => {
    expect(wrapper.find(Repositories)).to.have.length(1);
  });
});

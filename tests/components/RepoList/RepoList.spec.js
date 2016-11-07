import React from 'react';
import RepoList from '../../../src/components/RepoList/';
import CardView from '../../../src/components/CardView/';
import { shallow } from 'enzyme';


describe('(Component) RepoList', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      isLoading: false,
      noReposText: 'No repositories to display.',
    };

    wrapper = undefined;
  });

  // i.e. It isn't totally broken. Only component test you need?
  // https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874
  it('renders successfully', () => {
    wrapper = shallow(<RepoList {...props} />);
    expect(wrapper).to.have.length(1);
  });

  it('shows a loading message when still loading', () => {
    wrapper = shallow(<RepoList {...props} isLoading={true} />);

    const paragraphs = wrapper.find('p');
    expect(paragraphs).to.have.length(1);
    expect(paragraphs.text()).to.match(/Loading/);
  });

  it('shows a message when there are no repos', () => {
    wrapper = shallow(<RepoList {...props} repos={[]} />);

    const paragraphs = wrapper.find('p');
    expect(paragraphs).to.have.length(1);
    expect(paragraphs.text()).to.match(/No repositories/);
  });

  it('creates a CardView for each repo', () => {
    const repos = [
      {
        id: 1,
        name: 'Test 1',
        description: 'Desc',
        url: 'http://site.com',
      },
      {
        id: 2,
        name: 'Test 2',
        description: 'Desc',
        url: 'http://site.com',
      }
    ];

    wrapper = shallow(<RepoList {...props} repos={repos} />);
    expect(wrapper.find(CardView)).to.have.length(repos.length);
  });
});

import React from 'react'
import { bindActionCreators } from 'redux'
import CardView from '../../../src/components/CardView/';
import { shallow } from 'enzyme'

describe('(Component) CardView', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      title: 'Test Title',
      text: 'Test text',
    };

    wrapper = shallow(<CardView {...props} />);
  });

  // i.e. It isn't totally broken. Only component test you need?
  // https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874
  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders the given title', () => {
    expect(wrapper.find('h4').text()).to.match(/Test Title/);
  });

  it('renders the given text', () => {
    expect(wrapper.find('p').text()).to.match(/Test text/);
  });

  describe('with an image', () => {
    beforeEach(() => {
      props = {
        ...props,
        imageUrl: 'mypic.png',
        imageAlt: 'Pic Alt',
        imageWidth: 100,
        imageHeight: 50,
      };

      wrapper = shallow(<CardView {...props} />);
    });

    it('renders an image', () => {
      let image = wrapper.find('img');
      expect(image).to.have.length(1);
      expect(image.prop('src')).to.equal('mypic.png');
      expect(image.prop('alt')).to.equal('Pic Alt');
      expect(image.prop('width')).to.equal(100);
      expect(image.prop('height')).to.equal(50);
    });
  });

  describe('with a button', () => {
    beforeEach(() => {
      props = {
        ...props,
        buttonUrl: 'http://site.com',
        buttonText: 'Click Me',
      };

      wrapper = shallow(<CardView {...props} />);
    });

    it('renders a button', () => {
      let button = wrapper.find('a');
      expect(button).to.have.length(1);
      expect(button.prop('href')).to.equal('http://site.com');
      expect(button.text()).to.match(/Click Me/);
    });
  });
});

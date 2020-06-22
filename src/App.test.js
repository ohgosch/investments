import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';

import { App } from './App';

describe('[Component] App', () => {
  let wrapper;

  it('Should renders without crashing', () => {
    wrapper = shallow(<App />);
  });
});

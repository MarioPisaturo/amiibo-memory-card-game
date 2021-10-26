import * as React from 'react';
import { shallow } from 'enzyme';

import Homepage, { IHomepage } from './homepage';

describe('Homepage', () => {
  function makeProps(overrideProps: IHomepage = {}): IHomepage {
    return {
      ...overrideProps,
    };
  }

  it('should render a Homepage', () => {
    const props: IHomepage = makeProps();
    const wrapper = shallow(<Homepage {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('Homepage should match snapshot', () => {
    const props: IHomepage = makeProps();
    expect(shallow(<Homepage {...props} />)).toMatchSnapshot();
  });
});

/** TODO: add other tests */

import * as React from 'react';
import { shallow } from 'enzyme';

import CompletionScreen, { ICompletionScreen } from './completion-screen';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/completion?moves=10',
  }),
}));

describe('CompletionScreen', () => {
  function makeProps(overrideProps: ICompletionScreen = {}): ICompletionScreen {
    return {
      ...overrideProps,
    };
  }

  it('should render a CompletionScreen', () => {
    const props: ICompletionScreen = makeProps();
    const wrapper = shallow(<CompletionScreen {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('CompletionScreen should match snapshot', () => {
    const props: ICompletionScreen = makeProps();
    expect(shallow(<CompletionScreen {...props} />)).toMatchSnapshot();
  });
});

/** TODO: add other tests */

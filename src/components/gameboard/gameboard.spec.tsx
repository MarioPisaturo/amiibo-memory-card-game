import * as React from 'react';
import { shallow } from 'enzyme';

import Gameboard, { IGameboard } from './gameboard';

describe('Gameboard', () => {
  function makeProps(
    overrideProps: IGameboard = {
      id: 1,
      cards: [],
      onCompletionCallback: () => {},
      type: 'pokemon',
    }
  ): IGameboard {
    return {
      ...overrideProps,
    };
  }

  it('should render a Default Gameboard ', () => {
    const props: IGameboard = makeProps();
    const wrapper = shallow(<Gameboard {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import Card, { ICard } from './card';

describe('Card', () => {
  function makeProps(
    overrideProps: ICard = {
      id: 1,
      imageUrl: 'mocked image Url',
      state: 'backfaced',
      onCardClicked: () => {},
    }
  ): ICard {
    return {
      ...overrideProps,
    };
  }

  it('should render a Default Card ', () => {
    const props: ICard = makeProps();
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});

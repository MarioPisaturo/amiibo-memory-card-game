import * as React from 'react';
import { shallow } from 'enzyme';

import Card, {
  ICard,
  CARD_ITEM_STATE_HIDDEN,
  CARD_ITEM_STATE_BACKFACED,
  CARD_ITEM_STATE_ENABLED,
  CARD_ITEM_STATE_MATCHED,
  DEFAULT_BACKFACE_ASSET_URL,
} from './card';

/** Card Component TEST SUITE
 * 1. Should render a Card Component
 * 2. Should call onCardClicked callback with correct card ID
 * 3. should render a CARD_ITEM_STATE_BACKFACED card
 * 4. should render a CARD_ITEM_STATE_ENABLED card
 * 5. should render a CARD_ITEM_STATE_HIDDEN card
 * 6. should render a CARD_ITEM_STATE_MATCHED card
 * 7. should render a custom backface of the Card
 * 8. ...
 */

describe('Card components', () => {
  function makeProps(
    overrideProps: ICard = {
      id: 1,
      imageUrl: 'mocked/image/url',
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

    expect(wrapper.find('div').at(0).prop('data-state')).toEqual(CARD_ITEM_STATE_BACKFACED);
    expect(wrapper.find('img').at(0).prop('src')).toEqual(DEFAULT_BACKFACE_ASSET_URL); // DEFAULT PROP BACKFACE
    expect(wrapper.find('img').at(1).prop('src')).toEqual(props.imageUrl);
    expect(wrapper.find('div').at(1).prop('className')).toMatch(/card--card-face/); // card face
    expect(wrapper.find('div').at(2).prop('className')).toMatch(/card--card-face card--card-back-face/); // card back face
  });

  it('should call onCardClicked callback with correct id', () => {
    const spyOnClick = jest.fn((id: number) => id === 1234);
    const props: ICard = {
      ...makeProps(),
      id: 1234,
      onCardClicked: spyOnClick,
    };
    const rendered = shallow(<Card {...props} />);
    rendered.find('div').at(0).simulate('click');
    expect(spyOnClick).toHaveBeenCalledTimes(1);
    expect(spyOnClick).toHaveLastReturnedWith(true); // id === 1234
  });

  it('should render a BACKFACED Card ', () => {
    const props: ICard = makeProps();
    const wrapper = shallow(<Card {...props} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div').at(0).prop('data-state')).toEqual(CARD_ITEM_STATE_BACKFACED);
    expect(wrapper.find('div').at(0).prop('className')).toEqual('card');
  });

  it('should render a ENABLED Card ', () => {
    const props: ICard = {
      ...makeProps(),
      state: 'enabled',
    };
    const wrapper = shallow(<Card {...props} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div').at(0).prop('data-state')).toEqual(CARD_ITEM_STATE_ENABLED);
  });

  it('should render a HIDDEN Card ', () => {
    const props: ICard = {
      ...makeProps(),
      state: 'hidden',
    };
    const wrapper = shallow(<Card {...props} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div').at(0).prop('data-state')).toEqual(CARD_ITEM_STATE_HIDDEN);
  });

  it('should render a MATCHED Card - isFlipped', () => {
    const props: ICard = {
      ...makeProps(),
      state: 'matched',
    };
    const wrapper = shallow(<Card {...props} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div').at(0).prop('data-state')).toEqual(CARD_ITEM_STATE_MATCHED);
  });

  it('should render a custom backface of the Card', () => {
    const props: ICard = {
      ...makeProps(),
      backfaceUrl: 'my/custom/backface/img',
    };
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.find('img').at(0).prop('src')).toEqual(props.backfaceUrl);
  });
});

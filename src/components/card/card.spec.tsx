import * as React from 'react';
import { shallow } from 'enzyme';

import Card, { ICard } from './card';

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

    expect(wrapper.find('img').at(0).prop('src')).toEqual('./assets/poketball.png'); // DEFAULT PROP BACKFACE
    expect(wrapper.find('img').at(1).prop('src')).toEqual(props.imageUrl);
    expect(wrapper.find('div').at(2).prop('className')).toMatch(/card-face card-back-face/); // BACK FACE DIV
  });

  it('should render a BACKFACED Card ', () => {
    const props: ICard = makeProps();
    const wrapper = shallow(<Card {...props} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div').at(0).prop('data-state')).toEqual('backfaced');
    expect(wrapper.find('div').at(0).prop('className')).toEqual('card');
  });

  it('should render a ENABLED Card ', () => {
    const props: ICard = {
      ...makeProps(),
      state: 'enabled',
    };
    const wrapper = shallow(<Card {...props} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div').at(0).prop('data-state')).toEqual('enabled');
    expect(wrapper.find('div').at(0).prop('className')).toEqual('card is-flipped');
  });

  it('should render a HIDDEN Card ', () => {
    const props: ICard = {
      ...makeProps(),
      state: 'hidden',
    };
    const wrapper = shallow(<Card {...props} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div').at(0).prop('data-state')).toEqual('hidden');
    expect(wrapper.find('div').at(0).prop('className')).toEqual('card is-inactive');
  });

  it('should render a MATCHED Card - isFlipped', () => {
    const props: ICard = {
      ...makeProps(),
      state: 'matched',
    };
    const wrapper = shallow(<Card {...props} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div').at(0).prop('data-state')).toEqual('matched');
    expect(wrapper.find('div').at(0).prop('className')).toEqual('card is-flipped');
  });

  it('should render a custom backface Card ', () => {
    const props: ICard = {
      ...makeProps(),
      backfaceUrl: 'my/custom/backface/img',
    };
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.find('img').at(0).prop('src')).toEqual(props.backfaceUrl);
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
});

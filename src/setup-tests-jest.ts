import * as Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // un-official Enzyme adapter

Enzyme.configure({
  adapter: new Adapter(),
});

import { shallow, mount } from 'enzyme';
import App from './App';

describe('renders learn react link', () => {
  it('should match snapshot', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
  
  it('mount learn react link', () => {
    const component = mount(<App />);
    expect(component.find('a').text()).toBe('Learn React');
  });
});

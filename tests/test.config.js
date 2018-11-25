import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


function testConfig() {
  configure({ adapter: new Adapter() });
}

module.exports = testConfig();

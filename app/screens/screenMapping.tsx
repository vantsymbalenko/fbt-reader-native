import { Home } from './Home';
import Details from './Details';
import { About } from './About';

/***
 * map of screens
 * each child route must start with underlining
 * also need set of title which will display as child name in menu or it will be just simple name with underline
 */
export default {
    Home: {
        screen: Home
    },
    Details_Basic: {
        screen: Details,
        navigationOptions: () => ({ title: 'Basic' })
    },
    'Details_Not Basic': {
        screen: Details,
        navigationOptions: () => ({ title: 'Not Basic' })
    },
    'Details_Not Basic_Super Not Basic': {
        screen: About,
        navigationOptions: () => ({ title: 'Super Not Basic' })
    }
};

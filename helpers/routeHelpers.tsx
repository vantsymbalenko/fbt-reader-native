import { ObjectStructureWithStringKey } from './Interfaces';
import { NavigationRoute } from 'react-navigation';

interface EvaluetedOuterDrawerItem {
  start: number;
  end: number;
  isDrawerItem?: boolean;
  name: string,
  children?: EvaluetedOuterDrawerListItems;
}

export interface EvaluetedOuterDrawerListItems
  extends ObjectStructureWithStringKey<EvaluetedOuterDrawerItem> {}

/***
 * function which transform input items to format items = {
 *     start: number,
 *     end: number,
 *     children: object // children routes with have the same structure
 * }
 * @param items - react-navigation items
 */
export const evaluateOuterDrawerListItems: <
  U extends NavigationRoute = NavigationRoute
>(
  items: U[]
) => EvaluetedOuterDrawerListItems = items => {
  const drawerItems: EvaluetedOuterDrawerListItems = {};

  items.forEach((item, index) => {
    let { key } = item;
    let splitedKey = key.split('_'),
      current = drawerItems;
    for (let i = 0; i < splitedKey.length; ++i) {
      if (current[splitedKey[i]] === undefined) {
        current[splitedKey[i]] = {
          name: key,
          start: index,
          end: 0,
          children: {}
        };
        current = current[splitedKey[i]].children;
      } else {
        current[splitedKey[i]].end = index;
        current = current[splitedKey[i]].children;
      }
    }
  });

  return Object.assign({}, drawerItems);
};

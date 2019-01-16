/***
 * function which transform input items to format items = {
 *     start: number,
 *     end: number,
 *     children: object // children routes with have the same structure
 * }
 * @param items - react-navigation items
 */
export var evaluateOuterDrawerListItems = function (items) {
    var drawerItems = {};
    items.forEach(function (item, index) {
        var key = item.key;
        var splitedKey = key.split('_'), current = drawerItems;
        for (var i = 0; i < splitedKey.length; ++i) {
            if (current[splitedKey[i]] === undefined) {
                current[splitedKey[i]] = {
                    name: key,
                    start: index,
                    end: 0,
                    children: {}
                };
                current = current[splitedKey[i]].children;
            }
            else {
                current[splitedKey[i]].end = index;
                current = current[splitedKey[i]].children;
            }
        }
    });
    return Object.assign({}, drawerItems);
};

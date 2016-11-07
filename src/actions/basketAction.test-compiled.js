'use strict';

var _basketActions = require('./basketActions');

var actions = _interopRequireWildcard(_basketActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('actions', function () {
  it('should create an action to add a todo', function () {
    var text = 'Finish docs';
    var expectedAction = {
      type: types.ADD_TODO,
      text: text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});

//# sourceMappingURL=basketAction.test-compiled.js.map
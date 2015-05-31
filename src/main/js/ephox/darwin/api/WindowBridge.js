define(
  'ephox.darwin.api.WindowBridge',

  [
    'ephox.fussy.api.Point',
    'ephox.fussy.api.WindowSelection'
  ],

  function (Point, WindowSelection) {
    return function (win) {
      var getRect = function (element) {
        return element.dom().getBoundingClientRect();
      };

      var getRangedRect = function (start, soffset, finish, foffset) {
        return WindowSelection.rectangleAt(win, start, soffset, finish, foffset);
      };

      var getSelection = function () {
        return WindowSelection.get(win);
      };

      var fromSitus = function (situs) {
        return WindowSelection.deriveExact(win, situs);
      };

      var situsFromPoint = function (x, y) {
        return Point.find(win, x, y);
      };

      var clearSelection = function () {
        WindowSelection.clearAll(win);
      };

      var setSelection = function (start, soffset, finish, foffset) {
        WindowSelection.setExact(win, start, soffset, finish, foffset);
      };

      var getInnerHeight = function () {
        return win.innerHeight;
      };

      var getScrollY = function () {
        return win.scrollY;
      };

      return {
        getRect: getRect,
        getRangedRect: getRangedRect,
        getSelection: getSelection,
        fromSitus: fromSitus,
        situsFromPoint: situsFromPoint,
        clearSelection: clearSelection,
        setSelection: setSelection,
        getInnerHeight: getInnerHeight,
        getScrollY: getScrollY
      };
    };
  }
);
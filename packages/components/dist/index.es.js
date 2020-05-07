function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.13.1";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useEffect: useEffect,
	useImperativeHandle: useImperativeHandle,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	version: version
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;
var checkPropTypes = checkPropTypes_1;

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
});
var react_development_1 = react_development.Children;
var react_development_2 = react_development.Component;
var react_development_3 = react_development.Fragment;
var react_development_4 = react_development.Profiler;
var react_development_5 = react_development.PureComponent;
var react_development_6 = react_development.StrictMode;
var react_development_7 = react_development.Suspense;
var react_development_8 = react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var react_development_9 = react_development.cloneElement;
var react_development_10 = react_development.createContext;
var react_development_11 = react_development.createElement;
var react_development_12 = react_development.createFactory;
var react_development_13 = react_development.createRef;
var react_development_14 = react_development.forwardRef;
var react_development_15 = react_development.isValidElement;
var react_development_16 = react_development.lazy;
var react_development_17 = react_development.memo;
var react_development_18 = react_development.useCallback;
var react_development_19 = react_development.useContext;
var react_development_20 = react_development.useDebugValue;
var react_development_21 = react_development.useEffect;
var react_development_22 = react_development.useImperativeHandle;
var react_development_23 = react_development.useLayoutEffect;
var react_development_24 = react_development.useMemo;
var react_development_25 = react_development.useReducer;
var react_development_26 = react_development.useRef;
var react_development_27 = react_development.useState;
var react_development_28 = react_development.version;

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});
var react_1 = react.Children;
var react_2 = react.Component;
var react_3 = react.Fragment;
var react_4 = react.Profiler;
var react_5 = react.PureComponent;
var react_6 = react.StrictMode;
var react_7 = react.Suspense;
var react_8 = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var react_9 = react.cloneElement;
var react_10 = react.createContext;
var react_11 = react.createElement;
var react_12 = react.createFactory;
var react_13 = react.createRef;
var react_14 = react.forwardRef;
var react_15 = react.isValidElement;
var react_16 = react.lazy;
var react_17 = react.memo;
var react_18 = react.useCallback;
var react_19 = react.useContext;
var react_20 = react.useDebugValue;
var react_21 = react.useEffect;
var react_22 = react.useImperativeHandle;
var react_23 = react.useLayoutEffect;
var react_24 = react.useMemo;
var react_25 = react.useReducer;
var react_26 = react.useRef;
var react_27 = react.useState;
var react_28 = react.version;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};
var removeLabel = function removeLabel(context, content) {
  if (context === 1 && // charcode for l
  content.charCodeAt(0) === 108 && // charcode for b
  content.charCodeAt(2) === 98 // this ignores label
  ) {
      return '';
    }
};

var isBrowser = typeof document !== 'undefined';
var rootServerStylisCache = {};
var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
  var getCache = weakMemoize(function () {
    return {};
  });
  var prefixTrueCache = {};
  var prefixFalseCache = {};
  return function (prefix) {
    if (prefix === undefined || prefix === true) {
      return prefixTrueCache;
    }

    if (prefix === false) {
      return prefixFalseCache;
    }

    return getCache(prefix);
  };
});

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_min(stylisOptions);

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  if (isBrowser) {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  if (isBrowser) {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  } else {
    stylis.use(removeLabel);
    var serverStylisCache = rootServerStylisCache;

    if (options.stylisPlugins || options.prefix !== undefined) {
      stylis.use(options.stylisPlugins); // $FlowFixMe

      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
    }

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = stylis(selector, serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  if (process.env.NODE_ENV !== 'production') {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

var isBrowser$1 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$1 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var isBrowser$2 = typeof document !== 'undefined';

var EmotionCacheContext = react_10( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? createCache() : null);
var ThemeContext = react_10({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return react_11(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return react_14(render);
};

if (!isBrowser$2) {
  var BasicProvider =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose(BasicProvider, _React$Component);

    function BasicProvider(props, context, updater) {
      var _this;

      _this = _React$Component.call(this, props, context, updater) || this;
      _this.state = {
        value: createCache()
      };
      return _this;
    }

    var _proto = BasicProvider.prototype;

    _proto.render = function render() {
      return react_11(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
    };

    return BasicProvider;
  }(react_2);

  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      return react_11(EmotionCacheContext.Consumer, null, function (context) {
        if (context === null) {
          return react_11(BasicProvider, null, function (newContext) {
            return func(props, newContext);
          });
        } else {
          return func(props, context);
        }
      });
    };
  };
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles);

  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty$1.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = react_11(type, newProps);

  if (!isBrowser$2 && rules !== undefined) {
    var _ref;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return react_11(react_3, null, react_11("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return react_11(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty$1.call(props, 'css')) {
    // $FlowFixMe
    return react_11.apply(undefined, args);
  }

  if (process.env.NODE_ENV !== 'production' && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty$1.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (process.env.NODE_ENV !== 'production') {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react_11.apply(null, createElementArgArray);
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return react_11(ThemeContext.Consumer, null, function (theme) {
    var rules = '';
    var serializedHashes = '';
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && process.env.NODE_ENV !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = serializeStyles(args, context.registered);

      if (isBrowser$2) {
        insertStyles(context, serialized, false);
      } else {
        var res = insertStyles(context, serialized, false);

        if (res !== undefined) {
          rules += res;
        }
      }

      if (!isBrowser$2) {
        serializedHashes += " " + serialized.name;
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && process.env.NODE_ENV !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    if (!isBrowser$2 && rules.length !== 0) {
      var _ref;

      return react_11(react_3, null, react_11("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = context.sheet.nonce, _ref)), ele);
    }

    return ele;
  });
});

var typography = {
  fonts: {
    base: "'Lato','Helvetica Neue',Arial,Helvetica,sans-serif",
    headers: "'Lato','Helvetica Neue',Arial,Helvetica,sans-serif"
  },
  weights: {
    light: "100",
    regular: "500",
    bold: "700"
  },
  sizes: {
    xsmall: "0.625rem",
    small: "0.825rem",
    normal: "1rem",
    large: "2rem",
    xlarge: "2.5rem"
  }
};

var colors = {
  bg: {
    primary: "#2578C2",
    neutral: "#000",
    success: "#56BA46",
    danger: "#EF6236",
    warning: "#FEEB83",
    base: "#fafafa",
    white: "#fff"
  },
  text: {
    base: "#646464",
    accent: "#2E86AB",
    white: "#fff",
    success: "#56BA46",
    danger: "#EF6236",
    warning: "#FEEB83"
  },
  black: {
    base: "#000",
    medium: "#121519",
    light: "1f252e"
  },
  blue: {
    darker: "#261ee4",
    dark: "#2f2ff4",
    base: "#4038ff",
    light: "#5252ff",
    lighter: "#6c6cff"
  },
  grey: {
    darker: "#a7aeb7",
    dark: "#d3d8e0",
    base: "#e8edf6",
    light: "#f2f5f9"
  },
  white: "#fff",
  other: {
    info: "#2F80ED",
    success: "#219653",
    danger: "#EB5757",
    warning: "#F2C94C"
  }
};

var spacing = Array.from({
  length: 25
}, function (_, i) {
  return i + 1;
}).reduce(function (spaces, n) {
  spaces["s".concat(n)] = "".concat(0.25 * n, "rem");
  return spaces;
}, {});

var breakpoints = {
  small: "21rem",
  medium: "48rem",
  large: "72rem"
};

var makeStyles = function makeStyles(_ref) {
  var img = _ref.img,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "default" : _ref$size;
  var width = size === "small" ? spacing.s9 : size === "default" ? spacing.s19 : spacing.s25;
  return /*#__PURE__*/css("background-image:", img ? "url(".concat(img, ")") : "radial-gradient(".concat(colors.bg.primary, ", ").concat(colors.bg.primary, ")"), ";background-size:cover;background-position:center;border-radius:50%;min-width:", width, ";min-height:", width, ";max-width:", width, ";max-height:", width, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF2YXRhci5zdHlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZVkiLCJmaWxlIjoiQXZhdGFyLnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHNwYWNpbmcsIGNvbG9ycyB9IGZyb20gXCIuLi8uLi90aGVtZVwiXG5cbmV4cG9ydCB0eXBlIEF2YXRhclN0eWxlUHJvcHMgPSB7XG4gIGltZz86IHN0cmluZ1xuICBzaXplPzogXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCIgfCBcImxhcmdlXCJcbn1cblxuZXhwb3J0IGxldCBtYWtlU3R5bGVzID0gKHsgaW1nLCBzaXplID0gXCJkZWZhdWx0XCIgfTogQXZhdGFyU3R5bGVQcm9wcykgPT4ge1xuICBsZXQgd2lkdGggPVxuICAgIHNpemUgPT09IFwic21hbGxcIlxuICAgICAgPyBzcGFjaW5nLnM5XG4gICAgICA6IHNpemUgPT09IFwiZGVmYXVsdFwiXG4gICAgICA/IHNwYWNpbmcuczE5XG4gICAgICA6IHNwYWNpbmcuczI1O1xuICByZXR1cm4gY3NzYFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICR7aW1nXG4gICAgICA/IGB1cmwoJHtpbWd9KWBcbiAgICAgIDogYHJhZGlhbC1ncmFkaWVudCgke2NvbG9ycy5iZy5wcmltYXJ5fSwgJHtjb2xvcnMuYmcucHJpbWFyeX0pYH07XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1pbi13aWR0aDogJHt3aWR0aH07XG4gICAgbWluLWhlaWdodDogJHt3aWR0aH07XG4gICAgbWF4LXdpZHRoOiAke3dpZHRofTtcbiAgICBtYXgtaGVpZ2h0OiAke3dpZHRofTtcbiAgYFxufVxuIl19 */"));
};

function Avatar(_ref) {
  var styleProps = _extends({}, _ref);

  var styles = makeStyles(styleProps);
  return jsx("div", {
    css: styles
  });
}

var Avatar$1 = react_17(Avatar);

var makeStyles$1 = function makeStyles(_ref) {
  var src = _ref.src;
  return /*#__PURE__*/css("background-image:url(", src, ");background-size:cover;background-position:center;width:100%;min-height:", spacing.s25, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhbm5lci5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFZIiwiZmlsZSI6IkJhbm5lci5zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHNwYWNpbmcsIHR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gXCIuLi8uLi90aGVtZVwiO1xuXG5leHBvcnQgdHlwZSBCYW5uZXJTdHlsZVByb3BzID0ge1xuICBzcmM6IHN0cmluZztcbn07XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7IHNyYyB9OiBCYW5uZXJTdHlsZVByb3BzKSA9PiB7XG4gIHJldHVybiBjc3NgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7c3JjfSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogJHtzcGFjaW5nLnMyNX07XG4gIGA7XG59O1xuIl19 */"));
};

function Banner(_ref) {
  var styleProps = _extends({}, _ref);

  var styles = makeStyles$1(styleProps);
  return jsx("div", {
    css: styles
  });
}

var index = react_17(Banner);

function withSize(size) {
  return /*#__PURE__*/css("padding:", size === "large" ? "".concat(spacing.s4, " ").concat(spacing.s2) : size === "normal" || size === "full" ? "".concat(spacing.s3, " ").concat(spacing.s2) : "".concat(spacing.s2, " ").concat(spacing.s1), ";font-size:", size === "large" ? typography.sizes.large : size === "normal" || size === "full" ? typography.sizes.normal : typography.sizes.small, ";width:", size === "full" ? "100%" : "auto", ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYWdtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLWSIsImZpbGUiOiJmcmFnbWVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHNwYWNpbmcgZnJvbSBcIi4vc3BhY2luZ1wiO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSBcIi4vdHlwb2dyYXBoeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aFNpemUoc2l6ZTogc3RyaW5nKSB7XG4gIHJldHVybiBjc3NgXG4gICAgcGFkZGluZzogJHtzaXplID09PSBcImxhcmdlXCJcbiAgICAgID8gYCR7c3BhY2luZy5zNH0gJHtzcGFjaW5nLnMyfWBcbiAgICAgIDogc2l6ZSA9PT0gXCJub3JtYWxcIiB8fCBzaXplID09PSBcImZ1bGxcIlxuICAgICAgPyBgJHtzcGFjaW5nLnMzfSAke3NwYWNpbmcuczJ9YFxuICAgICAgOiBgJHtzcGFjaW5nLnMyfSAke3NwYWNpbmcuczF9YH07XG5cbiAgICBmb250LXNpemU6ICR7c2l6ZSA9PT0gXCJsYXJnZVwiXG4gICAgICA/IHR5cG9ncmFwaHkuc2l6ZXMubGFyZ2VcbiAgICAgIDogc2l6ZSA9PT0gXCJub3JtYWxcIiB8fCBzaXplID09PSBcImZ1bGxcIlxuICAgICAgPyB0eXBvZ3JhcGh5LnNpemVzLm5vcm1hbFxuICAgICAgOiB0eXBvZ3JhcGh5LnNpemVzLnNtYWxsfTtcblxuICAgIHdpZHRoOiAke3NpemUgPT09IFwiZnVsbFwiID8gXCIxMDAlXCIgOiBcImF1dG9cIn07XG4gIGA7XG59XG4iXX0= */"));
}

var makeStyles$2 = function makeStyles(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "primary" : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "normal" : _ref$size,
      _ref$outlined = _ref.outlined,
      outlined = _ref$outlined === void 0 ? false : _ref$outlined;
  return /*#__PURE__*/css(withSize(size), " border-radius:", spacing.s1, ";border-color:", outlined ? colors.bg[color] : "", ";border-style:solid;border-width:", size === "small" ? 1 : 2, "px;font-style:", typography.fonts.base, ";background-color:", outlined ? colors.text.white : colors.bg[color], ";color:", outlined ? colors.bg[color] : colors.text.white, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZVkiLCJmaWxlIjoiQnV0dG9uLnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBzcGFjaW5nLCB0eXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcbmltcG9ydCAqIGFzIGZyYWdtZW50cyBmcm9tIFwiLi4vLi4vdGhlbWUvZnJhZ21lbnRzXCI7XG5cbmV4cG9ydCB0eXBlIEJ1dHRvblN0eWxlUHJvcHMgPSB7XG4gIGNvbG9yPzogXCJwcmltYXJ5XCIgfCBcImRhbmdlclwiIHwgXCJzdWNjZXNzXCIgfCBcIm5ldXRyYWxcIjtcbiAgc2l6ZT86IFwibm9ybWFsXCIgfCBcImxhcmdlXCIgfCBcInNtYWxsXCIgfCBcImZ1bGxcIjtcbiAgb3V0bGluZWQ/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGxldCBtYWtlU3R5bGVzID0gKHtcbiAgY29sb3IgPSBcInByaW1hcnlcIixcbiAgc2l6ZSA9IFwibm9ybWFsXCIsXG4gIG91dGxpbmVkID0gZmFsc2UsXG59OiBCdXR0b25TdHlsZVByb3BzKSA9PiB7XG4gIHJldHVybiBjc3NgXG4gICAgJHtmcmFnbWVudHMud2l0aFNpemUoc2l6ZSl9XG4gICAgYm9yZGVyLXJhZGl1czogJHtzcGFjaW5nLnMxfTtcbiAgICBib3JkZXItY29sb3I6ICR7b3V0bGluZWQgPyBjb2xvcnMuYmdbY29sb3JdIDogXCJcIn07XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6ICR7c2l6ZSA9PT0gXCJzbWFsbFwiID8gMSA6IDJ9cHg7XG4gICAgZm9udC1zdHlsZTogJHt0eXBvZ3JhcGh5LmZvbnRzLmJhc2V9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7b3V0bGluZWQgPyBjb2xvcnMudGV4dC53aGl0ZSA6IGNvbG9ycy5iZ1tjb2xvcl19O1xuICAgIGNvbG9yOiAke291dGxpbmVkID8gY29sb3JzLmJnW2NvbG9yXSA6IGNvbG9ycy50ZXh0LndoaXRlfTtcbiAgYDtcbn07XG4iXX0= */"));
};

function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      styleProps = _objectWithoutProperties(_ref, ["children", "className", "onClick"]);

  var styles = makeStyles$2(styleProps);
  return jsx("button", {
    css: styles,
    onClick: onClick,
    className: className
  }, children);
}

var Button$1 = react_17(Button);

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "8vl8c-avatar",
  styles: "grid-column:1 / 1;cursor:pointer;;label:avatar;"
} : {
  name: "8vl8c-avatar",
  styles: "grid-column:1 / 1;cursor:pointer;;label:avatar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmUiLCJmaWxlIjoiQ2hhbm5lbFN1bW1hcnkuc3R5bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgc3BhY2luZywgY29sb3JzLCB0eXBvZ3JhcGh5IH0gZnJvbSBcIi4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbFN1bW1hcnlTdHlsZVByb3BzID0ge1xuICBzaXplPzogXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCIgfCBcImxhcmdlXCJcbn1cblxuZXhwb3J0IGxldCBtYWtlU3R5bGVzID0gKHtcbiAgc2l6ZSA9IFwiZGVmYXVsdFwiXG59OiBDaGFubmVsU3VtbWFyeVN0eWxlUHJvcHMpID0+IHtcblxuICBsZXQgZ3JpZFNpemUgPVxuICAgIHNpemUgPT09IFwic21hbGxcIlxuICAgICAgPyBzcGFjaW5nLnM5XG4gICAgICA6IHNpemUgPT09IFwiZGVmYXVsdFwiXG4gICAgICA/IHNwYWNpbmcuczE5XG4gICAgICA6IHNwYWNpbmcuczI1O1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvICR7Z3JpZFNpemV9O1xuICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYCxcbiAgICBhdmF0YXI6IGNzc2BcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgLFxuICAgIGRldGFpbHM6IGNzc2BcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW46IDAgMCAwICR7c3BhY2luZy5zNH07XG4gICAgICAmID4gYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5hY2NlbnR9O1xuICAgICAgbWFyZ2luOiAke3NwYWNpbmcuczN9IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgICBiYWRnZXM6IGNzc2BcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5zbWFsbH07XG4gICAgICAmID4gKjpub3QobGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7c3BhY2luZy5zMn07XG4gICAgICB9XG4gICAgYCxcbiAgICB0YWdTdWNjZXNzOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMub3RoZXIuc3VjY2Vzc31cbiAgICBgLFxuICAgIHRhZ0luZm86IGNzc2BcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5vdGhlci5pbmZvfVxuICAgIGBcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var makeStyles$3 = function makeStyles(_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? "default" : _ref2$size;
  var gridSize = size === "small" ? spacing.s9 : size === "default" ? spacing.s19 : spacing.s25;
  return {
    container: /*#__PURE__*/css("display:grid;grid-template:auto / ", gridSize, ";margin:30px 0;;label:container;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmtCIiwiZmlsZSI6IkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHNwYWNpbmcsIGNvbG9ycywgdHlwb2dyYXBoeSB9IGZyb20gXCIuLi8uLi90aGVtZVwiXG5cbmV4cG9ydCB0eXBlIENoYW5uZWxTdW1tYXJ5U3R5bGVQcm9wcyA9IHtcbiAgc2l6ZT86IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiIHwgXCJsYXJnZVwiXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHNpemUgPSBcImRlZmF1bHRcIlxufTogQ2hhbm5lbFN1bW1hcnlTdHlsZVByb3BzKSA9PiB7XG5cbiAgbGV0IGdyaWRTaXplID1cbiAgICBzaXplID09PSBcInNtYWxsXCJcbiAgICAgID8gc3BhY2luZy5zOVxuICAgICAgOiBzaXplID09PSBcImRlZmF1bHRcIlxuICAgICAgPyBzcGFjaW5nLnMxOVxuICAgICAgOiBzcGFjaW5nLnMyNTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAke2dyaWRTaXplfTtcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgIGAsXG4gICAgYXZhdGFyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgICBkZXRhaWxzOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luOiAwIDAgMCAke3NwYWNpbmcuczR9O1xuICAgICAgJiA+IGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHQuYWNjZW50fTtcbiAgICAgIG1hcmdpbjogJHtzcGFjaW5nLnMzfSAwO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGAsXG4gICAgYmFkZ2VzOiBjc3NgXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMuc21hbGx9O1xuICAgICAgJiA+ICo6bm90KGxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3NwYWNpbmcuczJ9O1xuICAgICAgfVxuICAgIGAsXG4gICAgdGFnU3VjY2VzczogY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3JzLm90aGVyLnN1Y2Nlc3N9XG4gICAgYCxcbiAgICB0YWdJbmZvOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMub3RoZXIuaW5mb31cbiAgICBgXG4gIH1cbn1cbiJdfQ== */")),
    avatar: _ref,
    details: /*#__PURE__*/css("grid-column:2 / 2;flex-direction:column;margin:0 0 0 ", spacing.s4, ";& > a{text-decoration:none;};label:details;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmdCIiwiZmlsZSI6IkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHNwYWNpbmcsIGNvbG9ycywgdHlwb2dyYXBoeSB9IGZyb20gXCIuLi8uLi90aGVtZVwiXG5cbmV4cG9ydCB0eXBlIENoYW5uZWxTdW1tYXJ5U3R5bGVQcm9wcyA9IHtcbiAgc2l6ZT86IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiIHwgXCJsYXJnZVwiXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHNpemUgPSBcImRlZmF1bHRcIlxufTogQ2hhbm5lbFN1bW1hcnlTdHlsZVByb3BzKSA9PiB7XG5cbiAgbGV0IGdyaWRTaXplID1cbiAgICBzaXplID09PSBcInNtYWxsXCJcbiAgICAgID8gc3BhY2luZy5zOVxuICAgICAgOiBzaXplID09PSBcImRlZmF1bHRcIlxuICAgICAgPyBzcGFjaW5nLnMxOVxuICAgICAgOiBzcGFjaW5nLnMyNTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAke2dyaWRTaXplfTtcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgIGAsXG4gICAgYXZhdGFyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgICBkZXRhaWxzOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luOiAwIDAgMCAke3NwYWNpbmcuczR9O1xuICAgICAgJiA+IGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHQuYWNjZW50fTtcbiAgICAgIG1hcmdpbjogJHtzcGFjaW5nLnMzfSAwO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGAsXG4gICAgYmFkZ2VzOiBjc3NgXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMuc21hbGx9O1xuICAgICAgJiA+ICo6bm90KGxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3NwYWNpbmcuczJ9O1xuICAgICAgfVxuICAgIGAsXG4gICAgdGFnU3VjY2VzczogY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3JzLm90aGVyLnN1Y2Nlc3N9XG4gICAgYCxcbiAgICB0YWdJbmZvOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMub3RoZXIuaW5mb31cbiAgICBgXG4gIH1cbn1cbiJdfQ== */")),
    title: /*#__PURE__*/css("color:", colors.text.accent, ";margin:", spacing.s3, " 0;display:inline-block;cursor:pointer;;label:title;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2MiLCJmaWxlIjoiQ2hhbm5lbFN1bW1hcnkuc3R5bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgc3BhY2luZywgY29sb3JzLCB0eXBvZ3JhcGh5IH0gZnJvbSBcIi4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbFN1bW1hcnlTdHlsZVByb3BzID0ge1xuICBzaXplPzogXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCIgfCBcImxhcmdlXCJcbn1cblxuZXhwb3J0IGxldCBtYWtlU3R5bGVzID0gKHtcbiAgc2l6ZSA9IFwiZGVmYXVsdFwiXG59OiBDaGFubmVsU3VtbWFyeVN0eWxlUHJvcHMpID0+IHtcblxuICBsZXQgZ3JpZFNpemUgPVxuICAgIHNpemUgPT09IFwic21hbGxcIlxuICAgICAgPyBzcGFjaW5nLnM5XG4gICAgICA6IHNpemUgPT09IFwiZGVmYXVsdFwiXG4gICAgICA/IHNwYWNpbmcuczE5XG4gICAgICA6IHNwYWNpbmcuczI1O1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvICR7Z3JpZFNpemV9O1xuICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYCxcbiAgICBhdmF0YXI6IGNzc2BcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgLFxuICAgIGRldGFpbHM6IGNzc2BcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW46IDAgMCAwICR7c3BhY2luZy5zNH07XG4gICAgICAmID4gYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5hY2NlbnR9O1xuICAgICAgbWFyZ2luOiAke3NwYWNpbmcuczN9IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgICBiYWRnZXM6IGNzc2BcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5zbWFsbH07XG4gICAgICAmID4gKjpub3QobGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7c3BhY2luZy5zMn07XG4gICAgICB9XG4gICAgYCxcbiAgICB0YWdTdWNjZXNzOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMub3RoZXIuc3VjY2Vzc31cbiAgICBgLFxuICAgIHRhZ0luZm86IGNzc2BcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5vdGhlci5pbmZvfVxuICAgIGBcbiAgfVxufVxuIl19 */")),
    badges: /*#__PURE__*/css("text-transform:uppercase;font-size:", typography.sizes.small, ";& > *:not(last-child){margin-right:", spacing.s2, ";};label:badges;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2UiLCJmaWxlIjoiQ2hhbm5lbFN1bW1hcnkuc3R5bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgc3BhY2luZywgY29sb3JzLCB0eXBvZ3JhcGh5IH0gZnJvbSBcIi4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbFN1bW1hcnlTdHlsZVByb3BzID0ge1xuICBzaXplPzogXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCIgfCBcImxhcmdlXCJcbn1cblxuZXhwb3J0IGxldCBtYWtlU3R5bGVzID0gKHtcbiAgc2l6ZSA9IFwiZGVmYXVsdFwiXG59OiBDaGFubmVsU3VtbWFyeVN0eWxlUHJvcHMpID0+IHtcblxuICBsZXQgZ3JpZFNpemUgPVxuICAgIHNpemUgPT09IFwic21hbGxcIlxuICAgICAgPyBzcGFjaW5nLnM5XG4gICAgICA6IHNpemUgPT09IFwiZGVmYXVsdFwiXG4gICAgICA/IHNwYWNpbmcuczE5XG4gICAgICA6IHNwYWNpbmcuczI1O1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvICR7Z3JpZFNpemV9O1xuICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYCxcbiAgICBhdmF0YXI6IGNzc2BcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgLFxuICAgIGRldGFpbHM6IGNzc2BcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW46IDAgMCAwICR7c3BhY2luZy5zNH07XG4gICAgICAmID4gYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5hY2NlbnR9O1xuICAgICAgbWFyZ2luOiAke3NwYWNpbmcuczN9IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgICBiYWRnZXM6IGNzc2BcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5zbWFsbH07XG4gICAgICAmID4gKjpub3QobGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7c3BhY2luZy5zMn07XG4gICAgICB9XG4gICAgYCxcbiAgICB0YWdTdWNjZXNzOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMub3RoZXIuc3VjY2Vzc31cbiAgICBgLFxuICAgIHRhZ0luZm86IGNzc2BcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5vdGhlci5pbmZvfVxuICAgIGBcbiAgfVxufVxuIl19 */")),
    tagSuccess: /*#__PURE__*/css("color:", colors.other.success, ";label:tagSuccess;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG1CIiwiZmlsZSI6IkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHNwYWNpbmcsIGNvbG9ycywgdHlwb2dyYXBoeSB9IGZyb20gXCIuLi8uLi90aGVtZVwiXG5cbmV4cG9ydCB0eXBlIENoYW5uZWxTdW1tYXJ5U3R5bGVQcm9wcyA9IHtcbiAgc2l6ZT86IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiIHwgXCJsYXJnZVwiXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHNpemUgPSBcImRlZmF1bHRcIlxufTogQ2hhbm5lbFN1bW1hcnlTdHlsZVByb3BzKSA9PiB7XG5cbiAgbGV0IGdyaWRTaXplID1cbiAgICBzaXplID09PSBcInNtYWxsXCJcbiAgICAgID8gc3BhY2luZy5zOVxuICAgICAgOiBzaXplID09PSBcImRlZmF1bHRcIlxuICAgICAgPyBzcGFjaW5nLnMxOVxuICAgICAgOiBzcGFjaW5nLnMyNTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAke2dyaWRTaXplfTtcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgIGAsXG4gICAgYXZhdGFyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgICBkZXRhaWxzOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luOiAwIDAgMCAke3NwYWNpbmcuczR9O1xuICAgICAgJiA+IGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHQuYWNjZW50fTtcbiAgICAgIG1hcmdpbjogJHtzcGFjaW5nLnMzfSAwO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGAsXG4gICAgYmFkZ2VzOiBjc3NgXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMuc21hbGx9O1xuICAgICAgJiA+ICo6bm90KGxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3NwYWNpbmcuczJ9O1xuICAgICAgfVxuICAgIGAsXG4gICAgdGFnU3VjY2VzczogY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3JzLm90aGVyLnN1Y2Nlc3N9XG4gICAgYCxcbiAgICB0YWdJbmZvOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMub3RoZXIuaW5mb31cbiAgICBgXG4gIH1cbn1cbiJdfQ== */")),
    tagInfo: /*#__PURE__*/css("color:", colors.other.info, ";label:tagInfo;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGdCIiwiZmlsZSI6IkNoYW5uZWxTdW1tYXJ5LnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHNwYWNpbmcsIGNvbG9ycywgdHlwb2dyYXBoeSB9IGZyb20gXCIuLi8uLi90aGVtZVwiXG5cbmV4cG9ydCB0eXBlIENoYW5uZWxTdW1tYXJ5U3R5bGVQcm9wcyA9IHtcbiAgc2l6ZT86IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiIHwgXCJsYXJnZVwiXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHNpemUgPSBcImRlZmF1bHRcIlxufTogQ2hhbm5lbFN1bW1hcnlTdHlsZVByb3BzKSA9PiB7XG5cbiAgbGV0IGdyaWRTaXplID1cbiAgICBzaXplID09PSBcInNtYWxsXCJcbiAgICAgID8gc3BhY2luZy5zOVxuICAgICAgOiBzaXplID09PSBcImRlZmF1bHRcIlxuICAgICAgPyBzcGFjaW5nLnMxOVxuICAgICAgOiBzcGFjaW5nLnMyNTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAke2dyaWRTaXplfTtcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgIGAsXG4gICAgYXZhdGFyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgICBkZXRhaWxzOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luOiAwIDAgMCAke3NwYWNpbmcuczR9O1xuICAgICAgJiA+IGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHQuYWNjZW50fTtcbiAgICAgIG1hcmdpbjogJHtzcGFjaW5nLnMzfSAwO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGAsXG4gICAgYmFkZ2VzOiBjc3NgXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMuc21hbGx9O1xuICAgICAgJiA+ICo6bm90KGxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3NwYWNpbmcuczJ9O1xuICAgICAgfVxuICAgIGAsXG4gICAgdGFnU3VjY2VzczogY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3JzLm90aGVyLnN1Y2Nlc3N9XG4gICAgYCxcbiAgICB0YWdJbmZvOiBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcnMub3RoZXIuaW5mb31cbiAgICBgXG4gIH1cbn1cbiJdfQ== */"))
  };
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$1 = process.env.NODE_ENV === "production" ? {
  name: "11axc7t-icon",
  styles: "& > path:nth-of-type(1){color:inherit;flex-shrink:0;};label:icon;"
} : {
  name: "11axc7t-icon",
  styles: "& > path:nth-of-type(1){color:inherit;flex-shrink:0;};label:icon;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhZy5zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmEiLCJmaWxlIjoiVGFnLnN0eWxlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgY29sb3JzLCB0eXBvZ3JhcGh5IH0gZnJvbSBcIi4vLi4vLi4vdGhlbWVcIlxuXG5leHBvcnQgdHlwZSBUYWdTdHlsZVByb3BzID0ge1xuICBjb2xvcj86IHN0cmluZ1xufVxuXG5leHBvcnQgbGV0IG1ha2VTdHlsZXMgPSAoe1xuICBjb2xvciA9IGNvbG9ycy5ncmV5LmJhc2Vcbn06IFRhZ1N0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuYmFzZX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBgLFxuICAgIGljb246IGNzc2BcbiAgICAgICYgPiBwYXRoOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuICAgIGAsXG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var makeStyles$4 = function makeStyles(_ref2) {
  var _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? colors.grey.base : _ref2$color;
  return {
    container: /*#__PURE__*/css("display:inline-block;font-family:", typography.fonts.base, ";border:1px solid ", color, ";border-radius:4px;padding:5px 10px;color:", color, ";cursor:default;vertical-align:middle;;label:container;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhZy5zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0IiLCJmaWxlIjoiVGFnLnN0eWxlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgY29sb3JzLCB0eXBvZ3JhcGh5IH0gZnJvbSBcIi4vLi4vLi4vdGhlbWVcIlxuXG5leHBvcnQgdHlwZSBUYWdTdHlsZVByb3BzID0ge1xuICBjb2xvcj86IHN0cmluZ1xufVxuXG5leHBvcnQgbGV0IG1ha2VTdHlsZXMgPSAoe1xuICBjb2xvciA9IGNvbG9ycy5ncmV5LmJhc2Vcbn06IFRhZ1N0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuYmFzZX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBgLFxuICAgIGljb246IGNzc2BcbiAgICAgICYgPiBwYXRoOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuICAgIGAsXG4gIH1cbn1cbiJdfQ== */")),
    icon: _ref$1
  };
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref$2 = _WINDOW.navigator || {},
    _ref$userAgent = _ref$2.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var PRODUCTION = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w$1 = WINDOW || {};
if (!w$1[NAMESPACE_IDENTIFIER]) w$1[NAMESPACE_IDENTIFIER] = {};
if (!w$1[NAMESPACE_IDENTIFIER].styles) w$1[NAMESPACE_IDENTIFIER].styles = {};
if (!w$1[NAMESPACE_IDENTIFIER].hooks) w$1[NAMESPACE_IDENTIFIER].hooks = {};
if (!w$1[NAMESPACE_IDENTIFIER].shims) w$1[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w$1[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

var noop$1 = function noop() {};

var p$1 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();

var styles$1 = namespace.styles;
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}

var styles$3 = namespace.styles;

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css$1 () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css$1());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var _cssInserted = false;
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty$2(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty$2(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null), _defineProperty$2(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty$2(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties$1(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2$1({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2$1({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION$1 = false;

try {
  PRODUCTION$1 = process.env.NODE_ENV === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION$1 && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

// Normalize icon arguments
function normalizeIconArgs(icon) {
  // if the icon is null, there's nothing to do
  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (_typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty$2({}, key, value) : {};
}

function FontAwesomeIcon(props) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = icon(iconLookup, _objectSpread2$1({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {};
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: propTypes.bool,
  className: propTypes.string,
  mask: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string]),
  fixedWidth: propTypes.bool,
  inverse: propTypes.bool,
  flip: propTypes.oneOf(['horizontal', 'vertical', 'both']),
  icon: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string]),
  listItem: propTypes.bool,
  pull: propTypes.oneOf(['right', 'left']),
  pulse: propTypes.bool,
  rotation: propTypes.oneOf([90, 180, 270]),
  size: propTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: propTypes.bool,
  symbol: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  title: propTypes.string,
  transform: propTypes.oneOfType([propTypes.string, propTypes.object]),
  swapOpacity: propTypes.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react.createElement);

function Tag(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      styleProps = _objectWithoutProperties(_ref, ["icon", "text"]);

  var styles = makeStyles$4(styleProps);
  return jsx("div", {
    css: styles.container
  }, !!icon && jsx(FontAwesomeIcon, {
    icon: icon,
    css: styles.icon
  }), !!icon && !!text && jsx("span", {
    style: {
      margin: "0 10px 0 0"
    }
  }), !!text && jsx("span", null, text));
}

var Tag$1 = react_17(Tag);

var faCheck = {
  prefix: 'fas',
  iconName: 'check',
  icon: [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]
};
var faEye = {
  prefix: 'fas',
  iconName: 'eye',
  icon: [576, 512, [], "f06e", "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"]
};

function ChannelSummary(_ref) {
  var isPublic = _ref.isPublic,
      isVerified = _ref.isVerified,
      description = _ref.description,
      size = _ref.size,
      name = _ref.name,
      img = _ref.img,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      styleProps = _objectWithoutProperties(_ref, ["isPublic", "isVerified", "description", "size", "name", "img", "onClick"]);

  var styles = makeStyles$3(_objectSpread2({
    size: size
  }, styleProps));
  return jsx("div", {
    css: styles.container
  }, jsx("div", {
    css: styles.avatar,
    onClick: function onClick(event) {
      event.stopPropagation();

      _onClick();
    }
  }, jsx(Avatar$1, {
    size: size,
    img: img
  })), jsx("div", {
    css: styles.details
  }, jsx("h1", {
    css: styles.title,
    onClick: function onClick(event) {
      event.stopPropagation();

      _onClick();
    }
  }, name), jsx("div", {
    css: styles.badges
  }, isVerified && jsx(Tag$1, {
    icon: faCheck,
    text: "Verified",
    color: colors.other.success
  }), isPublic && jsx(Tag$1, {
    icon: faEye,
    text: "Public",
    color: colors.other.info
  })), description && jsx("div", null, jsx("p", null, description))));
}

var index$1 = react_17(ChannelSummary);

function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$3 = process.env.NODE_ENV === "production" ? {
  name: "cll262-table",
  styles: "text-align:left;border-collapse:separate;border-spacing:0;text-transform:capitalize;;label:table;"
} : {
  name: "cll262-table",
  styles: "text-align:left;border-collapse:separate;border-spacing:0;text-transform:capitalize;;label:table;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRldGFpbHNUYWJsZS5zdHlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2MiLCJmaWxlIjoiRGV0YWlsc1RhYmxlLnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBzcGFjaW5nLCB0eXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcblxuZXhwb3J0IHR5cGUgRGV0YWlsc1RhYmxlU3R5bGVQcm9wcyA9IHt9O1xuXG5leHBvcnQgbGV0IG1ha2VTdHlsZXMgPSAoe306IERldGFpbHNUYWJsZVN0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0YWJsZTogY3NzYFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGAsXG4gICAgcm93OiBjc3NgXG4gICAgICB0ZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgYCxcbiAgICBrZXk6IGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3R5cG9ncmFwaHkud2VpZ2h0cy5ib2xkfTtcbiAgICAgIHBhZGRpbmc6ICR7c3BhY2luZy5zMn0gJHtzcGFjaW5nLnMzfTtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICBgLFxuICAgIHZhbHVlOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3NwYWNpbmcuczJ9ICR7c3BhY2luZy5zM307XG4gICAgYCxcbiAgfTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "4anez9-row",
  styles: "td{border-bottom:1px solid rgba(0,0,0,0.1);};label:row;"
} : {
  name: "4anez9-row",
  styles: "td{border-bottom:1px solid rgba(0,0,0,0.1);};label:row;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRldGFpbHNUYWJsZS5zdHlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYVkiLCJmaWxlIjoiRGV0YWlsc1RhYmxlLnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBzcGFjaW5nLCB0eXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcblxuZXhwb3J0IHR5cGUgRGV0YWlsc1RhYmxlU3R5bGVQcm9wcyA9IHt9O1xuXG5leHBvcnQgbGV0IG1ha2VTdHlsZXMgPSAoe306IERldGFpbHNUYWJsZVN0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0YWJsZTogY3NzYFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGAsXG4gICAgcm93OiBjc3NgXG4gICAgICB0ZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgYCxcbiAgICBrZXk6IGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3R5cG9ncmFwaHkud2VpZ2h0cy5ib2xkfTtcbiAgICAgIHBhZGRpbmc6ICR7c3BhY2luZy5zMn0gJHtzcGFjaW5nLnMzfTtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICBgLFxuICAgIHZhbHVlOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3NwYWNpbmcuczJ9ICR7c3BhY2luZy5zM307XG4gICAgYCxcbiAgfTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

var makeStyles$5 = function makeStyles(_ref3) {
  _objectDestructuringEmpty(_ref3);

  return {
    table: _ref$3,
    row: _ref2,
    key: /*#__PURE__*/css("font-weight:", typography.weights.bold, ";padding:", spacing.s2, " ", spacing.s3, ";width:25%;color:#999;;label:key;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRldGFpbHNUYWJsZS5zdHlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JZIiwiZmlsZSI6IkRldGFpbHNUYWJsZS5zdHlsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgc3BhY2luZywgdHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSBcIi4uLy4uL3RoZW1lXCI7XG5cbmV4cG9ydCB0eXBlIERldGFpbHNUYWJsZVN0eWxlUHJvcHMgPSB7fTtcblxuZXhwb3J0IGxldCBtYWtlU3R5bGVzID0gKHt9OiBEZXRhaWxzVGFibGVTdHlsZVByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFibGU6IGNzc2BcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBgLFxuICAgIHJvdzogY3NzYFxuICAgICAgdGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuICAgIGAsXG4gICAga2V5OiBjc3NgXG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMuYm9sZH07XG4gICAgICBwYWRkaW5nOiAke3NwYWNpbmcuczJ9ICR7c3BhY2luZy5zM307XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgYCxcbiAgICB2YWx1ZTogY3NzYFxuICAgICAgcGFkZGluZzogJHtzcGFjaW5nLnMyfSAke3NwYWNpbmcuczN9O1xuICAgIGAsXG4gIH07XG59O1xuIl19 */")),
    value: /*#__PURE__*/css("padding:", spacing.s2, " ", spacing.s3, ";;label:value;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRldGFpbHNUYWJsZS5zdHlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JjIiwiZmlsZSI6IkRldGFpbHNUYWJsZS5zdHlsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgc3BhY2luZywgdHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSBcIi4uLy4uL3RoZW1lXCI7XG5cbmV4cG9ydCB0eXBlIERldGFpbHNUYWJsZVN0eWxlUHJvcHMgPSB7fTtcblxuZXhwb3J0IGxldCBtYWtlU3R5bGVzID0gKHt9OiBEZXRhaWxzVGFibGVTdHlsZVByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFibGU6IGNzc2BcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBgLFxuICAgIHJvdzogY3NzYFxuICAgICAgdGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuICAgIGAsXG4gICAga2V5OiBjc3NgXG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMuYm9sZH07XG4gICAgICBwYWRkaW5nOiAke3NwYWNpbmcuczJ9ICR7c3BhY2luZy5zM307XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgYCxcbiAgICB2YWx1ZTogY3NzYFxuICAgICAgcGFkZGluZzogJHtzcGFjaW5nLnMyfSAke3NwYWNpbmcuczN9O1xuICAgIGAsXG4gIH07XG59O1xuIl19 */"))
  };
};

function DetailsTable(_ref) {
  var details = _ref.details,
      styleProps = _objectWithoutProperties(_ref, ["details"]);

  var styles = makeStyles$5(styleProps);
  var detailKeys = Object.keys(details);
  return jsx("table", {
    css: styles.table
  }, jsx("tbody", null, detailKeys.map(function (detailKey) {
    return jsx("tr", {
      key: detailKey,
      css: styles.row
    }, jsx("td", {
      css: styles.key
    }, detailKey), jsx("td", {
      css: styles.value
    }, details[detailKey]));
  })));
}

var index$2 = react_17(DetailsTable);

var makeStyles$6 = function makeStyles(_ref) {
  var _ref$topDivider = _ref.topDivider,
      topDivider = _ref$topDivider === void 0 ? true : _ref$topDivider,
      _ref$bottomDivider = _ref.bottomDivider,
      bottomDivider = _ref$bottomDivider === void 0 ? false : _ref$bottomDivider;
  return {
    section: /*#__PURE__*/css("margin:30px 0;border-bottom:", bottomDivider ? "1px solid ".concat(colors.text.base) : "none", ";;label:section;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdlbmVyaWNTZWN0aW9uLnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IiLCJmaWxlIjoiR2VuZXJpY1NlY3Rpb24uc3R5bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgc3BhY2luZywgdHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSBcIi4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgU2VjdGlvblN0eWxlUHJvcHMgPSB7XG4gIHRvcERpdmlkZXI/OiBib29sZWFuXG4gIGJvdHRvbURpdmlkZXI/OiBib29sZWFuXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHRvcERpdmlkZXIgPSB0cnVlLFxuICBib3R0b21EaXZpZGVyID0gZmFsc2UsXG59OiBTZWN0aW9uU3R5bGVQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlY3Rpb246IGNzc2BcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHtib3R0b21EaXZpZGVyXG4gICAgICAgID8gYDFweCBzb2xpZCAke2NvbG9ycy50ZXh0LmJhc2V9YFxuICAgICAgICA6IFwibm9uZVwifTtcbiAgICBgLFxuICAgIGhlYWRlcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyA1MCUgNTAlO1xuICAgICAgbWFyZ2luLXRvcDogJHtzcGFjaW5nLnMxNn07XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmcuczh9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHt0b3BEaXZpZGVyID8gYDFweCBzb2xpZCAke2NvbG9ycy50ZXh0LmJhc2V9YCA6IFwibm9uZVwifTtcbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5iYXNlfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuaGVhZGVyc307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMubGlnaHR9O1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMubGFyZ2V9O1xuICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbjogMTVweCAwIDA7XG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5iYXNlfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuaGVhZGVyc307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMucmVndWxhcn07XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5ub3JtYWx9O1xuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgJiA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGBcbiAgfVxufVxuIl19 */")),
    header: /*#__PURE__*/css("display:grid;grid-template:auto / 50% 50%;margin-top:", spacing.s16, ";margin-bottom:", spacing.s8, ";border-bottom:", topDivider ? "1px solid ".concat(colors.text.base) : "none", ";;label:header;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdlbmVyaWNTZWN0aW9uLnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmUiLCJmaWxlIjoiR2VuZXJpY1NlY3Rpb24uc3R5bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgc3BhY2luZywgdHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSBcIi4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgU2VjdGlvblN0eWxlUHJvcHMgPSB7XG4gIHRvcERpdmlkZXI/OiBib29sZWFuXG4gIGJvdHRvbURpdmlkZXI/OiBib29sZWFuXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHRvcERpdmlkZXIgPSB0cnVlLFxuICBib3R0b21EaXZpZGVyID0gZmFsc2UsXG59OiBTZWN0aW9uU3R5bGVQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlY3Rpb246IGNzc2BcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHtib3R0b21EaXZpZGVyXG4gICAgICAgID8gYDFweCBzb2xpZCAke2NvbG9ycy50ZXh0LmJhc2V9YFxuICAgICAgICA6IFwibm9uZVwifTtcbiAgICBgLFxuICAgIGhlYWRlcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyA1MCUgNTAlO1xuICAgICAgbWFyZ2luLXRvcDogJHtzcGFjaW5nLnMxNn07XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmcuczh9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHt0b3BEaXZpZGVyID8gYDFweCBzb2xpZCAke2NvbG9ycy50ZXh0LmJhc2V9YCA6IFwibm9uZVwifTtcbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5iYXNlfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuaGVhZGVyc307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMubGlnaHR9O1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMubGFyZ2V9O1xuICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbjogMTVweCAwIDA7XG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5iYXNlfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuaGVhZGVyc307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMucmVndWxhcn07XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5ub3JtYWx9O1xuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgJiA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGBcbiAgfVxufVxuIl19 */")),
    title: /*#__PURE__*/css("margin:0;color:", colors.text.base, ";font-family:", typography.fonts.headers, ";font-weight:", typography.weights.light, ";font-size:", typography.sizes.large, ";line-height:3rem;;label:title;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdlbmVyaWNTZWN0aW9uLnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmMiLCJmaWxlIjoiR2VuZXJpY1NlY3Rpb24uc3R5bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgc3BhY2luZywgdHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSBcIi4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgU2VjdGlvblN0eWxlUHJvcHMgPSB7XG4gIHRvcERpdmlkZXI/OiBib29sZWFuXG4gIGJvdHRvbURpdmlkZXI/OiBib29sZWFuXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHRvcERpdmlkZXIgPSB0cnVlLFxuICBib3R0b21EaXZpZGVyID0gZmFsc2UsXG59OiBTZWN0aW9uU3R5bGVQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlY3Rpb246IGNzc2BcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHtib3R0b21EaXZpZGVyXG4gICAgICAgID8gYDFweCBzb2xpZCAke2NvbG9ycy50ZXh0LmJhc2V9YFxuICAgICAgICA6IFwibm9uZVwifTtcbiAgICBgLFxuICAgIGhlYWRlcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyA1MCUgNTAlO1xuICAgICAgbWFyZ2luLXRvcDogJHtzcGFjaW5nLnMxNn07XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmcuczh9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHt0b3BEaXZpZGVyID8gYDFweCBzb2xpZCAke2NvbG9ycy50ZXh0LmJhc2V9YCA6IFwibm9uZVwifTtcbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5iYXNlfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuaGVhZGVyc307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMubGlnaHR9O1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMubGFyZ2V9O1xuICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbjogMTVweCAwIDA7XG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5iYXNlfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuaGVhZGVyc307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMucmVndWxhcn07XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5ub3JtYWx9O1xuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgJiA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGBcbiAgfVxufVxuIl19 */")),
    link: /*#__PURE__*/css("text-align:right;margin:15px 0 0;color:", colors.text.base, ";font-family:", typography.fonts.headers, ";font-weight:", typography.weights.regular, ";font-size:", typography.sizes.normal, ";line-height:2rem;text-transform:uppercase;& > div{display:inline-block;cursor:pointer;};label:link;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdlbmVyaWNTZWN0aW9uLnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2EiLCJmaWxlIjoiR2VuZXJpY1NlY3Rpb24uc3R5bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgc3BhY2luZywgdHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSBcIi4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgU2VjdGlvblN0eWxlUHJvcHMgPSB7XG4gIHRvcERpdmlkZXI/OiBib29sZWFuXG4gIGJvdHRvbURpdmlkZXI/OiBib29sZWFuXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHRvcERpdmlkZXIgPSB0cnVlLFxuICBib3R0b21EaXZpZGVyID0gZmFsc2UsXG59OiBTZWN0aW9uU3R5bGVQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlY3Rpb246IGNzc2BcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHtib3R0b21EaXZpZGVyXG4gICAgICAgID8gYDFweCBzb2xpZCAke2NvbG9ycy50ZXh0LmJhc2V9YFxuICAgICAgICA6IFwibm9uZVwifTtcbiAgICBgLFxuICAgIGhlYWRlcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyA1MCUgNTAlO1xuICAgICAgbWFyZ2luLXRvcDogJHtzcGFjaW5nLnMxNn07XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmcuczh9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHt0b3BEaXZpZGVyID8gYDFweCBzb2xpZCAke2NvbG9ycy50ZXh0LmJhc2V9YCA6IFwibm9uZVwifTtcbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5iYXNlfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuaGVhZGVyc307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMubGlnaHR9O1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMubGFyZ2V9O1xuICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbjogMTVweCAwIDA7XG4gICAgICBjb2xvcjogJHtjb2xvcnMudGV4dC5iYXNlfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udHMuaGVhZGVyc307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMucmVndWxhcn07XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5ub3JtYWx9O1xuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgJiA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGBcbiAgfVxufVxuIl19 */"))
  };
};

function GenericSection(_ref) {
  var children = _ref.children,
      title = _ref.title,
      linkText = _ref.linkText,
      className = _ref.className,
      onLinkClick = _ref.onLinkClick,
      styleProps = _objectWithoutProperties(_ref, ["children", "title", "linkText", "className", "onLinkClick"]);

  var styles = makeStyles$6(styleProps);
  return jsx("section", {
    css: styles.section,
    className: className
  }, jsx("div", {
    css: styles.header
  }, jsx("h2", {
    css: styles.title
  }, title), !!linkText && jsx("div", {
    css: styles.link
  }, jsx("div", {
    onClick: onLinkClick
  }, linkText))), children);
}

var index$3 = react_17(GenericSection);

function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$4 = process.env.NODE_ENV === "production" ? {
  name: "15ppm4i-item",
  styles: "width:100%;cursor:pointer;;label:item;"
} : {
  name: "15ppm4i-item",
  styles: "width:100%;cursor:pointer;;label:item;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdyaWQuc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJhIiwiZmlsZSI6IkdyaWQuc3R5bGUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiXG5cbmV4cG9ydCB0eXBlIEdyaWRTdHlsZVByb3BzID0ge1xuICBtaW5JdGVtV2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgbWF4SXRlbVdpZHRoPzogc3RyaW5nIHwgbnVtYmVyXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIG1pbkl0ZW1XaWR0aCA9IFwiMzAwXCIsXG4gIG1heEl0ZW1XaWR0aFxufTogR3JpZFN0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KCR7bWluSXRlbVdpZHRofXB4LCAke21heEl0ZW1XaWR0aCA/IG1heEl0ZW1XaWR0aCArIFwicHhcIiA6IFwiMWZyXCJ9KSk7XG4gICAgICBnYXA6IDMwcHg7XG4gICAgYCxcbiAgICBpdGVtOiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgLFxuICB9XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};

var makeStyles$7 = function makeStyles(_ref2) {
  var _ref2$minItemWidth = _ref2.minItemWidth,
      minItemWidth = _ref2$minItemWidth === void 0 ? "300" : _ref2$minItemWidth,
      maxItemWidth = _ref2.maxItemWidth;
  return {
    container: /*#__PURE__*/css("display:grid;grid-template-columns:repeat(auto-fit,minmax(", minItemWidth, "px,", maxItemWidth ? maxItemWidth + "px" : "1fr", "));gap:30px;;label:container;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdyaWQuc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWtCIiwiZmlsZSI6IkdyaWQuc3R5bGUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiXG5cbmV4cG9ydCB0eXBlIEdyaWRTdHlsZVByb3BzID0ge1xuICBtaW5JdGVtV2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgbWF4SXRlbVdpZHRoPzogc3RyaW5nIHwgbnVtYmVyXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIG1pbkl0ZW1XaWR0aCA9IFwiMzAwXCIsXG4gIG1heEl0ZW1XaWR0aFxufTogR3JpZFN0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KCR7bWluSXRlbVdpZHRofXB4LCAke21heEl0ZW1XaWR0aCA/IG1heEl0ZW1XaWR0aCArIFwicHhcIiA6IFwiMWZyXCJ9KSk7XG4gICAgICBnYXA6IDMwcHg7XG4gICAgYCxcbiAgICBpdGVtOiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgLFxuICB9XG59XG4iXX0= */")),
    item: _ref$4
  };
};

function Grid(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      styleProps = _objectWithoutProperties(_ref, ["items", "className"]);

  var styles = makeStyles$7(styleProps);
  return jsx("div", {
    css: styles.container,
    className: className
  }, items.map(function (item) {
    return jsx("div", {
      css: styles.item
    }, item);
  }));
}

var index$4 = react_17(Grid);

var makeStyles$8 = function makeStyles(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "neutral" : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "normal" : _ref$size;
  return {
    containerStyle: /*#__PURE__*/css("display:flex;padding:", spacing.s6, ";margin:", spacing.s4, ";border-radius:", spacing.s2, ";border:none;& *{font-size:", size === "large" ? typography.sizes.large : size === "normal" ? typography.sizes.normal : typography.sizes.small, ";};label:containerStyle;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaEJhci5zdHlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYXVCIiwiZmlsZSI6IlNlYXJjaEJhci5zdHlsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgc3BhY2luZywgdHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSBcIi4uLy4uL3RoZW1lXCI7XG5cbmV4cG9ydCB0eXBlIFNlYXJjaEJhclN0eWxlUHJvcHMgPSB7XG4gIHNpemU/OiBcIm5vcm1hbFwiIHwgXCJsYXJnZVwiIHwgXCJzbWFsbFwiIHwgXCJmdWxsXCI7XG4gIGNvbG9yPzogXCJuZXV0cmFsXCIgfCBcImRhbmdlclwiIHwgXCJzdWNjZXNzXCI7XG59O1xuXG5leHBvcnQgbGV0IG1ha2VTdHlsZXMgPSAoe1xuICBjb2xvciA9IFwibmV1dHJhbFwiLFxuICBzaXplID0gXCJub3JtYWxcIixcbn06IFNlYXJjaEJhclN0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJTdHlsZTogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6ICR7c3BhY2luZy5zNn07XG4gICAgICBtYXJnaW46ICR7c3BhY2luZy5zNH07XG4gICAgICBib3JkZXItcmFkaXVzOiAke3NwYWNpbmcuczJ9O1xuICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAmICoge1xuICAgICAgICBmb250LXNpemU6ICR7c2l6ZSA9PT0gXCJsYXJnZVwiXG4gICAgICAgICAgPyB0eXBvZ3JhcGh5LnNpemVzLmxhcmdlXG4gICAgICAgICAgOiBzaXplID09PSBcIm5vcm1hbFwiXG4gICAgICAgICAgPyB0eXBvZ3JhcGh5LnNpemVzLm5vcm1hbFxuICAgICAgICAgIDogdHlwb2dyYXBoeS5zaXplcy5zbWFsbH07XG4gICAgICB9XG4gICAgYCxcbiAgICBpbnB1dFN0eWxlOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3NpemUgPT09IFwibGFyZ2VcIlxuICAgICAgICA/IGAke3NwYWNpbmcuczR9ICR7c3BhY2luZy5zMn1gXG4gICAgICAgIDogc2l6ZSA9PT0gXCJub3JtYWxcIiB8fCBzaXplID09PSBcImZ1bGxcIlxuICAgICAgICA/IGAke3NwYWNpbmcuczN9ICR7c3BhY2luZy5zMn1gXG4gICAgICAgIDogYCR7c3BhY2luZy5zMn0gJHtzcGFjaW5nLnMxfWB9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwb2dyYXBoeS53ZWlnaHRzLmxpZ2h0fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7c3BhY2luZy5zMX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5iZ1tjb2xvcl19O1xuICAgIGAsXG4gIH07XG59O1xuIl19 */")),
    inputStyle: /*#__PURE__*/css("padding:", size === "large" ? "".concat(spacing.s4, " ").concat(spacing.s2) : size === "normal" || size === "full" ? "".concat(spacing.s3, " ").concat(spacing.s2) : "".concat(spacing.s2, " ").concat(spacing.s1), ";font-weight:", typography.weights.light, ";border-radius:", spacing.s1, ";border:1px solid ", colors.bg[color], ";;label:inputStyle;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaEJhci5zdHlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJtQiIsImZpbGUiOiJTZWFyY2hCYXIuc3R5bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHNwYWNpbmcsIHR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gXCIuLi8uLi90aGVtZVwiO1xuXG5leHBvcnQgdHlwZSBTZWFyY2hCYXJTdHlsZVByb3BzID0ge1xuICBzaXplPzogXCJub3JtYWxcIiB8IFwibGFyZ2VcIiB8IFwic21hbGxcIiB8IFwiZnVsbFwiO1xuICBjb2xvcj86IFwibmV1dHJhbFwiIHwgXCJkYW5nZXJcIiB8IFwic3VjY2Vzc1wiO1xufTtcblxuZXhwb3J0IGxldCBtYWtlU3R5bGVzID0gKHtcbiAgY29sb3IgPSBcIm5ldXRyYWxcIixcbiAgc2l6ZSA9IFwibm9ybWFsXCIsXG59OiBTZWFyY2hCYXJTdHlsZVByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyU3R5bGU6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAke3NwYWNpbmcuczZ9O1xuICAgICAgbWFyZ2luOiAke3NwYWNpbmcuczR9O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHtzcGFjaW5nLnMyfTtcbiAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgJiAqIHtcbiAgICAgICAgZm9udC1zaXplOiAke3NpemUgPT09IFwibGFyZ2VcIlxuICAgICAgICAgID8gdHlwb2dyYXBoeS5zaXplcy5sYXJnZVxuICAgICAgICAgIDogc2l6ZSA9PT0gXCJub3JtYWxcIlxuICAgICAgICAgID8gdHlwb2dyYXBoeS5zaXplcy5ub3JtYWxcbiAgICAgICAgICA6IHR5cG9ncmFwaHkuc2l6ZXMuc21hbGx9O1xuICAgICAgfVxuICAgIGAsXG4gICAgaW5wdXRTdHlsZTogY3NzYFxuICAgICAgcGFkZGluZzogJHtzaXplID09PSBcImxhcmdlXCJcbiAgICAgICAgPyBgJHtzcGFjaW5nLnM0fSAke3NwYWNpbmcuczJ9YFxuICAgICAgICA6IHNpemUgPT09IFwibm9ybWFsXCIgfHwgc2l6ZSA9PT0gXCJmdWxsXCJcbiAgICAgICAgPyBgJHtzcGFjaW5nLnMzfSAke3NwYWNpbmcuczJ9YFxuICAgICAgICA6IGAke3NwYWNpbmcuczJ9ICR7c3BhY2luZy5zMX1gfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3R5cG9ncmFwaHkud2VpZ2h0cy5saWdodH07XG4gICAgICBib3JkZXItcmFkaXVzOiAke3NwYWNpbmcuczF9O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuYmdbY29sb3JdfTtcbiAgICBgLFxuICB9O1xufTtcbiJdfQ== */"))
  };
};

function SearchBar(_ref) {
  var placeholder = _ref.placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? "" : _ref$value,
      _ref$onSubmit = _ref.onSubmit,
      onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$cta = _ref.cta,
      cta = _ref$cta === void 0 ? "Search" : _ref$cta,
      styleProps = _objectWithoutProperties(_ref, ["placeholder", "value", "onSubmit", "onChange", "cta"]);

  var _makeStyles = makeStyles$8(styleProps),
      containerStyle = _makeStyles.containerStyle,
      inputStyle = _makeStyles.inputStyle;

  return jsx("div", {
    css: containerStyle
  }, jsx("input", {
    type: "text",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    css: inputStyle
  }), jsx(Button$1, {
    color: styleProps.color,
    onClick: onSubmit
  }, cta));
}

var index$5 = react_17(SearchBar);

var props = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEPRECATED_CONFIG_PROPS = exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var string = _propTypes["default"].string,
    bool = _propTypes["default"].bool,
    number = _propTypes["default"].number,
    array = _propTypes["default"].array,
    oneOfType = _propTypes["default"].oneOfType,
    shape = _propTypes["default"].shape,
    object = _propTypes["default"].object,
    func = _propTypes["default"].func,
    node = _propTypes["default"].node;
var propTypes$1 = {
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  light: oneOfType([bool, string]),
  playIcon: node,
  wrapper: oneOfType([string, func, shape({
    render: func.isRequired
  })]),
  config: shape({
    soundcloud: shape({
      options: object,
      preload: bool
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      preload: bool
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string
    }),
    dailymotion: shape({
      params: object,
      preload: bool
    }),
    vimeo: shape({
      playerOptions: object,
      preload: bool
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceDASH: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string
    }),
    wistia: shape({
      options: object
    }),
    mixcloud: shape({
      options: object
    }),
    twitch: shape({
      options: object,
      playerId: string
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onProgress: func,
  onEnablePIP: func,
  onDisablePIP: func
};
exports.propTypes = propTypes$1;
var defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  light: false,
  wrapper: 'div',
  config: {
    soundcloud: {
      options: {
        visual: true,
        // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      preload: false
    },
    facebook: {
      appId: '1309697205772819',
      version: 'v3.3',
      playerId: null
    },
    dailymotion: {
      params: {
        api: 1,
        'endscreen-enable': false
      },
      preload: false
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false
      },
      preload: false
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      hlsOptions: {},
      hlsVersion: '0.13.1',
      dashVersion: '2.9.2'
    },
    wistia: {
      options: {}
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    }
  },
  onReady: function onReady() {},
  onStart: function onStart() {},
  onPlay: function onPlay() {},
  onPause: function onPause() {},
  onBuffer: function onBuffer() {},
  onBufferEnd: function onBufferEnd() {},
  onEnded: function onEnded() {},
  onError: function onError() {},
  onDuration: function onDuration() {},
  onSeek: function onSeek() {},
  onProgress: function onProgress() {},
  onEnablePIP: function onEnablePIP() {},
  onDisablePIP: function onDisablePIP() {}
};
exports.defaultProps = defaultProps;
var DEPRECATED_CONFIG_PROPS = ['soundcloudConfig', 'youtubeConfig', 'facebookConfig', 'dailymotionConfig', 'vimeoConfig', 'fileConfig', 'wistiaConfig'];
exports.DEPRECATED_CONFIG_PROPS = DEPRECATED_CONFIG_PROPS;
});

unwrapExports(props);
var props_1 = props.DEPRECATED_CONFIG_PROPS;
var props_2 = props.defaultProps;
var props_3 = props.propTypes;

var loadScript = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var script = document.createElement('script');

  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  opts = opts || {};
  cb = cb || function() {};

  script.type = opts.type || 'text/javascript';
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true;
  script.src = src;

  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }

  if (opts.text) {
    script.text = '' + opts.text;
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script);
};

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null;
    cb(new Error('Failed to load ' + this.src), script);
  };
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null;
    cb(null, script); // there is no way to catch loading errors in IE8
  };
}

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseStartTime = parseStartTime;
exports.parseEndTime = parseEndTime;
exports.randomString = randomString;
exports.queryString = queryString;
exports.getSDK = getSDK;
exports.getConfig = getConfig;
exports.omit = omit;
exports.callPlayer = callPlayer;
exports.isObject = isObject;
exports.isEqual = isEqual;
exports.isMediaStream = isMediaStream;



var _loadScript = _interopRequireDefault(loadScript);

var _deepmerge = _interopRequireDefault(cjs);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
var MATCH_NUMERIC = /^\d+$/; // Parse YouTube URL for a start time param, ie ?t=1h14m30s
// and return the start time in seconds

function parseTimeParam(url, pattern) {
  var match = url.match(pattern);

  if (match) {
    var stamp = match[1];

    if (stamp.match(MATCH_START_STAMP)) {
      return parseTimeString(stamp);
    }

    if (MATCH_NUMERIC.test(stamp)) {
      return parseInt(stamp);
    }
  }

  return undefined;
}

function parseTimeString(stamp) {
  var seconds = 0;
  var array = MATCH_START_STAMP.exec(stamp);

  while (array !== null) {
    var _array = array,
        _array2 = _slicedToArray(_array, 3),
        count = _array2[1],
        period = _array2[2];

    if (period === 'h') seconds += parseInt(count, 10) * 60 * 60;
    if (period === 'm') seconds += parseInt(count, 10) * 60;
    if (period === 's') seconds += parseInt(count, 10);
    array = MATCH_START_STAMP.exec(stamp);
  }

  return seconds;
}

function parseStartTime(url) {
  return parseTimeParam(url, MATCH_START_QUERY);
}

function parseEndTime(url) {
  return parseTimeParam(url, MATCH_END_QUERY);
} // http://stackoverflow.com/a/38622545


function randomString() {
  return Math.random().toString(36).substr(2, 5);
}

function queryString(object) {
  return Object.keys(object).map(function (key) {
    return "".concat(key, "=").concat(object[key]);
  }).join('&');
} // Util function to load an external SDK
// or return the SDK if it is already loaded


var requests = {};

function getSDK(url, sdkGlobal) {
  var sdkReady = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var isLoaded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return true;
  };
  var fetchScript = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _loadScript["default"];

  if (window[sdkGlobal] && isLoaded(window[sdkGlobal])) {
    return Promise.resolve(window[sdkGlobal]);
  }

  return new Promise(function (resolve, reject) {
    // If we are already loading the SDK, add the resolve and reject
    // functions to the existing array of requests
    if (requests[url]) {
      requests[url].push({
        resolve: resolve,
        reject: reject
      });
      return;
    }

    requests[url] = [{
      resolve: resolve,
      reject: reject
    }];

    var onLoaded = function onLoaded(sdk) {
      // When loaded, resolve all pending request promises
      requests[url].forEach(function (request) {
        return request.resolve(sdk);
      });
    };

    if (sdkReady) {
      var previousOnReady = window[sdkReady];

      window[sdkReady] = function () {
        if (previousOnReady) previousOnReady();
        onLoaded(window[sdkGlobal]);
      };
    }

    fetchScript(url, function (err) {
      if (err) {
        // Loading the SDK failed – reject all requests and
        // reset the array of requests for this SDK
        requests[url].forEach(function (request) {
          return request.reject(err);
        });
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(window[sdkGlobal]);
      }
    });
  });
}

function getConfig(props$1, defaultProps, showWarning) {
  var config = (0, _deepmerge["default"])(defaultProps.config, props$1.config);

  var _iterator = _createForOfIteratorHelper(props.DEPRECATED_CONFIG_PROPS),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;

      if (props$1[p]) {
        var key = p.replace(/Config$/, '');
        config = (0, _deepmerge["default"])(config, _defineProperty({}, key, props$1[p]));

        if (showWarning) {
          var link = 'https://github.com/CookPete/react-player#config-prop';
          var message = "ReactPlayer: %c".concat(p, " %cis deprecated, please use the config prop instead \u2013 ").concat(link);
          console.warn(message, 'font-weight: bold', '');
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return config;
}

function omit(object) {
  var _ref;

  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var omitKeys = (_ref = []).concat.apply(_ref, arrays);

  var output = {};
  var keys = Object.keys(object);

  for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
    var key = _keys[_i2];

    if (omitKeys.indexOf(key) === -1) {
      output[key] = object[key];
    }
  }

  return output;
}

function callPlayer(method) {
  var _this$player;

  // Util method for calling a method on this.player
  // but guard against errors and console.warn instead
  if (!this.player || !this.player[method]) {
    var message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c \u2013 ");

    if (!this.player) {
      message += 'The player was not available';
    } else if (!this.player[method]) {
      message += 'The method was not available';
    }

    console.warn(message, 'font-weight: bold', '');
    return null;
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return (_this$player = this.player)[method].apply(_this$player, args);
}

function isObject(val) {
  return val !== null && _typeof(val) === 'object';
} // Deep comparison of two objects, but ignoring functions
// and React elements, for use in shouldComponentUpdate


function isEqual(a, b) {
  if (typeof a === 'function' && typeof b === 'function') {
    return true;
  }

  if ((0, react.isValidElement)(a) && (0, react.isValidElement)(b)) {
    return true;
  }

  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i !== a.length; i++) {
      if (!isEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  if (isObject(a) && isObject(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (var _i3 = 0, _Object$keys = Object.keys(a); _i3 < _Object$keys.length; _i3++) {
      var key = _Object$keys[_i3];

      if (!isEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a === b;
}

function isMediaStream(url) {
  return typeof window !== 'undefined' && typeof window.MediaStream !== 'undefined' && url instanceof window.MediaStream;
}
});

unwrapExports(utils);
var utils_1 = utils.parseStartTime;
var utils_2 = utils.parseEndTime;
var utils_3 = utils.randomString;
var utils_4 = utils.queryString;
var utils_5 = utils.getSDK;
var utils_6 = utils.getConfig;
var utils_7 = utils.omit;
var utils_8 = utils.callPlayer;
var utils_9 = utils.isObject;
var utils_10 = utils.isEqual;
var utils_11 = utils.isMediaStream;

var Player_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(react);





function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SEEK_ON_PLAY_EXPIRY = 5000;

var Player = /*#__PURE__*/function (_Component) {
  _inherits(Player, _Component);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "isReady", false);

    _defineProperty(_assertThisInitialized(_this), "isPlaying", false);

    _defineProperty(_assertThisInitialized(_this), "isLoading", true);

    _defineProperty(_assertThisInitialized(_this), "loadOnReady", null);

    _defineProperty(_assertThisInitialized(_this), "startOnPlay", true);

    _defineProperty(_assertThisInitialized(_this), "seekOnPlay", null);

    _defineProperty(_assertThisInitialized(_this), "onDurationCalled", false);

    _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function (key) {
      if (!_this.player) return null;
      return _this.player[key];
    });

    _defineProperty(_assertThisInitialized(_this), "progress", function () {
      if (_this.props.url && _this.player && _this.isReady) {
        var playedSeconds = _this.getCurrentTime() || 0;

        var loadedSeconds = _this.getSecondsLoaded();

        var duration = _this.getDuration();

        if (duration) {
          var progress = {
            playedSeconds: playedSeconds,
            played: playedSeconds / duration
          };

          if (loadedSeconds !== null) {
            progress.loadedSeconds = loadedSeconds;
            progress.loaded = loadedSeconds / duration;
          } // Only call onProgress if values have changed


          if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
            _this.props.onProgress(progress);
          }

          _this.prevPlayed = progress.playedSeconds;
          _this.prevLoaded = progress.loadedSeconds;
        }
      }

      _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
      if (!_this.mounted) return;
      _this.isReady = true;
      _this.isLoading = false;
      var _this$props = _this.props,
          onReady = _this$props.onReady,
          playing = _this$props.playing,
          volume = _this$props.volume,
          muted = _this$props.muted;
      onReady();

      if (!muted && volume !== null) {
        _this.player.setVolume(volume);
      }

      if (_this.loadOnReady) {
        _this.player.load(_this.loadOnReady, true);

        _this.loadOnReady = null;
      } else if (playing) {
        _this.player.play();
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlay", function () {
      _this.isPlaying = true;
      _this.isLoading = false;
      var _this$props2 = _this.props,
          onStart = _this$props2.onStart,
          onPlay = _this$props2.onPlay,
          playbackRate = _this$props2.playbackRate;

      if (_this.startOnPlay) {
        if (_this.player.setPlaybackRate && playbackRate !== 1) {
          _this.player.setPlaybackRate(playbackRate);
        }

        onStart();
        _this.startOnPlay = false;
      }

      onPlay();

      if (_this.seekOnPlay) {
        _this.seekTo(_this.seekOnPlay);

        _this.seekOnPlay = null;
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePause", function (e) {
      _this.isPlaying = false;

      if (!_this.isLoading) {
        _this.props.onPause(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnded", function () {
      var _this$props3 = _this.props,
          activePlayer = _this$props3.activePlayer,
          loop = _this$props3.loop,
          onEnded = _this$props3.onEnded;

      if (activePlayer.loopOnEnded && loop) {
        _this.seekTo(0);
      }

      if (!loop) {
        _this.isPlaying = false;
        onEnded();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
      var _this$props4;

      _this.isLoading = false;

      (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDurationCheck", function () {
      clearTimeout(_this.durationCheckTimeout);

      var duration = _this.getDuration();

      if (duration) {
        if (!_this.onDurationCalled) {
          _this.props.onDuration(duration);

          _this.onDurationCalled = true;
        }
      } else {
        _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLoaded", function () {
      // Sometimes we know loading has stopped but onReady/onPlay are never called
      // so this provides a way for players to avoid getting stuck
      _this.isLoading = false;
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
      if (player) {
        _this.player = player;
      }
    });

    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      this.player.load(this.props.url);
      this.progress();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.progressTimeout);
      clearTimeout(this.durationCheckTimeout);

      if (this.isReady) {
        this.player.stop();
      }

      if (this.player.disablePIP) {
        this.player.disablePIP();
      }

      this.mounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // Invoke player methods based on changed props
      var _this$props5 = this.props,
          url = _this$props5.url,
          playing = _this$props5.playing,
          volume = _this$props5.volume,
          muted = _this$props5.muted,
          playbackRate = _this$props5.playbackRate,
          pip = _this$props5.pip,
          loop = _this$props5.loop,
          activePlayer = _this$props5.activePlayer;

      if (!(0, utils.isEqual)(prevProps.url, url)) {
        if (this.isLoading && !activePlayer.forceLoad) {
          console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
          this.loadOnReady = url;
          return;
        }

        this.isLoading = true;
        this.startOnPlay = true;
        this.onDurationCalled = false;
        this.player.load(url, this.isReady);
      }

      if (!prevProps.playing && playing && !this.isPlaying) {
        this.player.play();
      }

      if (prevProps.playing && !playing && this.isPlaying) {
        this.player.pause();
      }

      if (!prevProps.pip && pip && this.player.enablePIP) {
        this.player.enablePIP();
      }

      if (prevProps.pip && !pip && this.player.disablePIP) {
        this.player.disablePIP();
      }

      if (prevProps.volume !== volume && volume !== null) {
        this.player.setVolume(volume);
      }

      if (prevProps.muted !== muted) {
        if (muted) {
          this.player.mute();
        } else {
          this.player.unmute();

          if (volume !== null) {
            // Set volume next tick to fix a bug with DailyMotion
            setTimeout(function () {
              return _this2.player.setVolume(volume);
            });
          }
        }
      }

      if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
        this.player.setPlaybackRate(playbackRate);
      }

      if (prevProps.loop !== loop && this.player.setLoop) {
        this.player.setLoop(loop);
      }
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.isReady) return null;
      return this.player.getDuration();
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.isReady) return null;
      return this.player.getCurrentTime();
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.isReady) return null;
      return this.player.getSecondsLoaded();
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount, type) {
      var _this3 = this;

      // When seeking before player is ready, store value and seek later
      if (!this.isReady && amount !== 0) {
        this.seekOnPlay = amount;
        setTimeout(function () {
          _this3.seekOnPlay = null;
        }, SEEK_ON_PLAY_EXPIRY);
        return;
      }

      var isFraction = !type ? amount > 0 && amount < 1 : type === 'fraction';

      if (isFraction) {
        // Convert fraction to seconds based on duration
        var duration = this.player.getDuration();

        if (!duration) {
          console.warn('ReactPlayer: could not seek using fraction – duration not yet available');
          return;
        }

        this.player.seekTo(duration * amount);
        return;
      }

      this.player.seekTo(amount);
    }
  }, {
    key: "render",
    value: function render() {
      var Player = this.props.activePlayer;

      if (!Player) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(Player, _extends({}, this.props, {
        ref: this.ref,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }));
    }
  }]);

  return Player;
}(_react.Component);

exports["default"] = Player;

_defineProperty(Player, "displayName", 'Player');

_defineProperty(Player, "propTypes", props.propTypes);

_defineProperty(Player, "defaultProps", props.defaultProps);
});

unwrapExports(Player_1);

var singlePlayer = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createSinglePlayer;

var _react = _interopRequireWildcard(react);





var _Player = _interopRequireDefault(Player_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SUPPORTED_PROPS = Object.keys(props.propTypes);

function createSinglePlayer(activePlayer) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(SinglePlayer, _Component);

    var _super = _createSuper(SinglePlayer);

    function SinglePlayer() {
      var _this;

      _classCallCheck(this, SinglePlayer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "config", (0, utils.getConfig)(_this.props, props.defaultProps, true));

      _defineProperty(_assertThisInitialized(_this), "getDuration", function () {
        if (!_this.player) return null;
        return _this.player.getDuration();
      });

      _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function () {
        if (!_this.player) return null;
        return _this.player.getCurrentTime();
      });

      _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function () {
        if (!_this.player) return null;
        return _this.player.getSecondsLoaded();
      });

      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
        if (!_this.player) return null;
        return _this.player.getInternalPlayer(key);
      });

      _defineProperty(_assertThisInitialized(_this), "seekTo", function (fraction, type) {
        if (!_this.player) return null;

        _this.player.seekTo(fraction, type);
      });

      _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
        _this.player = player;
      });

      return _this;
    }

    _createClass(SinglePlayer, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return !(0, utils.isEqual)(this.props, nextProps);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.config = (0, utils.getConfig)(this.props, props.defaultProps);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$config$file = this.config.file,
            forceVideo = _this$config$file.forceVideo,
            forceAudio = _this$config$file.forceAudio,
            forceHLS = _this$config$file.forceHLS,
            forceDASH = _this$config$file.forceDASH;
        var skipCanPlay = forceVideo || forceAudio || forceHLS || forceDASH;

        if (!activePlayer.canPlay(this.props.url) && !skipCanPlay) {
          return null;
        }

        var _this$props = this.props,
            style = _this$props.style,
            width = _this$props.width,
            height = _this$props.height,
            Wrapper = _this$props.wrapper;
        var otherProps = (0, utils.omit)(this.props, SUPPORTED_PROPS, props.DEPRECATED_CONFIG_PROPS);
        return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
          style: _objectSpread({}, style, {
            width: width,
            height: height
          })
        }, otherProps), /*#__PURE__*/_react["default"].createElement(_Player["default"], _extends({}, this.props, {
          ref: this.ref,
          activePlayer: activePlayer,
          config: this.config
        })));
      }
    }]);

    return SinglePlayer;
  }(_react.Component), _defineProperty(_class, "displayName", "".concat(activePlayer.displayName, "Player")), _defineProperty(_class, "propTypes", props.propTypes), _defineProperty(_class, "defaultProps", props.defaultProps), _defineProperty(_class, "canPlay", activePlayer.canPlay), _temp;
}
});

unwrapExports(singlePlayer);

var YouTube_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.YouTube = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SDK_URL = 'https://www.youtube.com/iframe_api';
var SDK_GLOBAL = 'YT';
var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';
var MATCH_URL = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/;
var MATCH_PLAYLIST = /list=([a-zA-Z0-9_-]+)/;

function parsePlaylist(url) {
  if (MATCH_PLAYLIST.test(url)) {
    var _url$match = url.match(MATCH_PLAYLIST),
        _url$match2 = _slicedToArray(_url$match, 2),
        playlistId = _url$match2[1];

    return {
      listType: 'playlist',
      list: playlistId
    };
  }

  return {};
}

var YouTube = /*#__PURE__*/function (_Component) {
  _inherits(YouTube, _Component);

  var _super = _createSuper(YouTube);

  function YouTube() {
    var _this;

    _classCallCheck(this, YouTube);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "onStateChange", function (_ref) {
      var data = _ref.data;
      var _this$props = _this.props,
          onPlay = _this$props.onPlay,
          onPause = _this$props.onPause,
          onBuffer = _this$props.onBuffer,
          onBufferEnd = _this$props.onBufferEnd,
          onEnded = _this$props.onEnded,
          onReady = _this$props.onReady,
          loop = _this$props.loop;
      var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
          PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
          PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
          BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
          ENDED = _window$SDK_GLOBAL$Pl.ENDED,
          CUED = _window$SDK_GLOBAL$Pl.CUED;

      if (data === PLAYING) {
        onPlay();
        onBufferEnd();
      }

      if (data === PAUSED) onPause();
      if (data === BUFFERING) onBuffer();

      if (data === ENDED) {
        var isPlaylist = !!_this.callPlayer('getPlaylist');

        if (loop && !isPlaylist) {
          _this.play(); // Only loop manually if not playing a playlist

        }

        onEnded();
      }

      if (data === CUED) onReady();
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unMute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(YouTube, [{
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      var _this$props2 = this.props,
          playing = _this$props2.playing,
          muted = _this$props2.muted,
          playsinline = _this$props2.playsinline,
          controls = _this$props2.controls,
          loop = _this$props2.loop,
          config = _this$props2.config,
          _onError = _this$props2.onError;
      var _config$youtube = config.youtube,
          playerVars = _config$youtube.playerVars,
          embedOptions = _config$youtube.embedOptions;
      var id = url && url.match(MATCH_URL)[1];

      if (isReady) {
        if (MATCH_PLAYLIST.test(url)) {
          this.player.loadPlaylist(parsePlaylist(url));
          return;
        }

        this.player.cueVideoById({
          videoId: id,
          startSeconds: (0, utils.parseStartTime)(url) || playerVars.start,
          endSeconds: (0, utils.parseEndTime)(url) || playerVars.end
        });
        return;
      }

      (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (YT) {
        return YT.loaded;
      }).then(function (YT) {
        if (!_this2.container) return;
        _this2.player = new YT.Player(_this2.container, _objectSpread({
          width: '100%',
          height: '100%',
          videoId: id,
          playerVars: _objectSpread({
            autoplay: playing ? 1 : 0,
            mute: muted ? 1 : 0,
            controls: controls ? 1 : 0,
            start: (0, utils.parseStartTime)(url),
            end: (0, utils.parseEndTime)(url),
            origin: window.location.origin,
            playsinline: playsinline
          }, parsePlaylist(url), {}, playerVars),
          events: {
            onReady: function onReady() {
              if (loop) {
                _this2.player.setLoop(true); // Enable playlist looping

              }

              _this2.props.onReady();
            },
            onStateChange: _this2.onStateChange,
            onError: function onError(event) {
              return _onError(event.data);
            }
          }
        }, embedOptions));
      }, _onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('playVideo');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pauseVideo');
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!document.body.contains(this.callPlayer('getIframe'))) return;
      this.callPlayer('stopVideo');
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount) {
      this.callPlayer('seekTo', amount);

      if (!this.props.playing) {
        this.pause();
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackRate', rate);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.callPlayer('getVideoLoadedFraction') * this.getDuration();
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return YouTube;
}(_react.Component);

exports.YouTube = YouTube;

_defineProperty(YouTube, "displayName", 'YouTube');

_defineProperty(YouTube, "canPlay", function (url) {
  return MATCH_URL.test(url);
});

var _default = (0, _singlePlayer["default"])(YouTube);

exports["default"] = _default;
});

unwrapExports(YouTube_1);
var YouTube_2 = YouTube_1.YouTube;

var SoundCloud_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SoundCloud = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://w.soundcloud.com/player/api.js';
var SDK_GLOBAL = 'SC';
var MATCH_URL = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;

var SoundCloud = /*#__PURE__*/function (_Component) {
  _inherits(SoundCloud, _Component);

  var _super = _createSuper(SoundCloud);

  function SoundCloud() {
    var _this;

    _classCallCheck(this, SoundCloud);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "fractionLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(SoundCloud, [{
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (SC) {
        if (!_this2.iframe) return;
        var _SC$Widget$Events = SC.Widget.Events,
            PLAY = _SC$Widget$Events.PLAY,
            PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS,
            PAUSE = _SC$Widget$Events.PAUSE,
            FINISH = _SC$Widget$Events.FINISH,
            ERROR = _SC$Widget$Events.ERROR;

        if (!isReady) {
          _this2.player = SC.Widget(_this2.iframe);

          _this2.player.bind(PLAY, _this2.props.onPlay);

          _this2.player.bind(PAUSE, _this2.props.onPause);

          _this2.player.bind(PLAY_PROGRESS, function (e) {
            _this2.currentTime = e.currentPosition / 1000;
            _this2.fractionLoaded = e.loadedProgress;
          });

          _this2.player.bind(FINISH, function () {
            return _this2.props.onEnded();
          });

          _this2.player.bind(ERROR, function (e) {
            return _this2.props.onError(e);
          });
        }

        _this2.player.load(url, _objectSpread({}, _this2.props.config.soundcloud.options, {
          callback: function callback() {
            _this2.player.getDuration(function (duration) {
              _this2.duration = duration / 1000;

              _this2.props.onReady();
            });
          }
        }));
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seekTo', seconds * 1000);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.fractionLoaded * this.duration;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
        style: style,
        frameBorder: 0,
        allow: "autoplay"
      });
    }
  }]);

  return SoundCloud;
}(_react.Component);

exports.SoundCloud = SoundCloud;

_defineProperty(SoundCloud, "displayName", 'SoundCloud');

_defineProperty(SoundCloud, "canPlay", function (url) {
  return MATCH_URL.test(url);
});

_defineProperty(SoundCloud, "loopOnEnded", true);

var _default = (0, _singlePlayer["default"])(SoundCloud);

exports["default"] = _default;
});

unwrapExports(SoundCloud_1);
var SoundCloud_2 = SoundCloud_1.SoundCloud;

var Vimeo_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Vimeo = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://player.vimeo.com/api/player.js';
var SDK_GLOBAL = 'Vimeo';
var MATCH_URL = /vimeo\.com\/.+/;
var MATCH_FILE_URL = /vimeo\.com\/external\/[0-9]+\..+/;

var Vimeo = /*#__PURE__*/function (_Component) {
  _inherits(Vimeo, _Component);

  var _super = _createSuper(Vimeo);

  function Vimeo() {
    var _this;

    _classCallCheck(this, Vimeo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(Vimeo, [{
    key: "load",
    value: function load(url) {
      var _this2 = this;

      this.duration = null;
      (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Vimeo) {
        if (!_this2.container) return;
        _this2.player = new Vimeo.Player(_this2.container, _objectSpread({
          url: url,
          autoplay: _this2.props.playing,
          muted: _this2.props.muted,
          loop: _this2.props.loop,
          playsinline: _this2.props.playsinline,
          controls: _this2.props.controls
        }, _this2.props.config.vimeo.playerOptions));

        _this2.player.ready().then(function () {
          var iframe = _this2.container.querySelector('iframe');

          iframe.style.width = '100%';
          iframe.style.height = '100%';
        })["catch"](_this2.props.onError);

        _this2.player.on('loaded', function () {
          _this2.props.onReady();

          _this2.refreshDuration();
        });

        _this2.player.on('play', function () {
          _this2.props.onPlay();

          _this2.refreshDuration();
        });

        _this2.player.on('pause', _this2.props.onPause);

        _this2.player.on('seeked', function (e) {
          return _this2.props.onSeek(e.seconds);
        });

        _this2.player.on('ended', _this2.props.onEnded);

        _this2.player.on('error', _this2.props.onError);

        _this2.player.on('timeupdate', function (_ref) {
          var seconds = _ref.seconds;
          _this2.currentTime = seconds;
        });

        _this2.player.on('progress', function (_ref2) {
          var seconds = _ref2.seconds;
          _this2.secondsLoaded = seconds;
        });
      }, this.props.onError);
    }
  }, {
    key: "refreshDuration",
    value: function refreshDuration() {
      var _this3 = this;

      this.player.getDuration().then(function (duration) {
        _this3.duration = duration;
      });
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.callPlayer('play');

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.callPlayer('unload');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackRate', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: this.props.url,
        ref: this.ref,
        style: style
      });
    }
  }]);

  return Vimeo;
}(_react.Component);

exports.Vimeo = Vimeo;

_defineProperty(Vimeo, "displayName", 'Vimeo');

_defineProperty(Vimeo, "forceLoad", true);

_defineProperty(Vimeo, "canPlay", function (url) {
  if (MATCH_FILE_URL.test(url)) {
    return false;
  }

  return MATCH_URL.test(url);
});

var _default = (0, _singlePlayer["default"])(Vimeo);

exports["default"] = _default;
});

unwrapExports(Vimeo_1);
var Vimeo_2 = Vimeo_1.Vimeo;

var Facebook_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Facebook = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://connect.facebook.net/en_US/sdk.js';
var SDK_GLOBAL = 'FB';
var SDK_GLOBAL_READY = 'fbAsyncInit';
var MATCH_URL = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
var PLAYER_ID_PREFIX = 'facebook-player-';

var Facebook = /*#__PURE__*/function (_Component) {
  _inherits(Facebook, _Component);

  var _super = _createSuper(Facebook);

  function Facebook() {
    var _this;

    _classCallCheck(this, Facebook);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.facebook.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    return _this;
  }

  _createClass(Facebook, [{
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      if (isReady) {
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
          return FB.XFBML.parse();
        });
        return;
      }

      (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
        FB.init({
          appId: _this2.props.config.facebook.appId,
          xfbml: true,
          version: _this2.props.config.facebook.version
        });
        FB.Event.subscribe('xfbml.render', function (msg) {
          // Here we know the SDK has loaded, even if onReady/onPlay
          // is not called due to a video that cannot be embedded
          _this2.props.onLoaded();
        });
        FB.Event.subscribe('xfbml.ready', function (msg) {
          if (msg.type === 'video' && msg.id === _this2.playerID) {
            _this2.player = msg.instance;

            _this2.player.subscribe('startedPlaying', _this2.props.onPlay);

            _this2.player.subscribe('paused', _this2.props.onPause);

            _this2.player.subscribe('finishedPlaying', _this2.props.onEnded);

            _this2.player.subscribe('startedBuffering', _this2.props.onBuffer);

            _this2.player.subscribe('finishedBuffering', _this2.props.onBufferEnd);

            _this2.player.subscribe('error', _this2.props.onError);

            if (!_this2.props.muted) {
              // Player is muted by default
              _this2.callPlayer('unmute');
            }

            _this2.props.onReady(); // For some reason Facebook have added `visibility: hidden`
            // to the iframe when autoplay fails, so here we set it back


            document.getElementById(_this2.playerID).querySelector('iframe').style.visibility = 'visible';
          }
        });
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentPosition');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        id: this.playerID,
        className: "fb-video",
        "data-href": this.props.url,
        "data-autoplay": this.props.playing ? 'true' : 'false',
        "data-allowfullscreen": "true",
        "data-controls": this.props.controls ? 'true' : 'false'
      });
    }
  }]);

  return Facebook;
}(_react.Component);

exports.Facebook = Facebook;

_defineProperty(Facebook, "displayName", 'Facebook');

_defineProperty(Facebook, "canPlay", function (url) {
  return MATCH_URL.test(url);
});

_defineProperty(Facebook, "loopOnEnded", true);

var _default = (0, _singlePlayer["default"])(Facebook);

exports["default"] = _default;
});

unwrapExports(Facebook_1);
var Facebook_2 = Facebook_1.Facebook;

var Streamable_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Streamable = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
var SDK_GLOBAL = 'playerjs';
var MATCH_URL = /streamable\.com\/([a-z0-9]+)$/;

var Streamable = /*#__PURE__*/function (_Component) {
  _inherits(Streamable, _Component);

  var _super = _createSuper(Streamable);

  function Streamable() {
    var _this;

    _classCallCheck(this, Streamable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Streamable, [{
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
        if (!_this2.iframe) return;
        _this2.player = new playerjs.Player(_this2.iframe);

        _this2.player.setLoop(_this2.props.loop);

        _this2.player.on('ready', _this2.props.onReady);

        _this2.player.on('play', _this2.props.onPlay);

        _this2.player.on('pause', _this2.props.onPause);

        _this2.player.on('seeked', _this2.props.onSeek);

        _this2.player.on('ended', _this2.props.onEnded);

        _this2.player.on('error', _this2.props.onError);

        _this2.player.on('timeupdate', function (_ref) {
          var duration = _ref.duration,
              seconds = _ref.seconds;
          _this2.duration = duration;
          _this2.currentTime = seconds;
        });

        _this2.player.on('buffered', function (_ref2) {
          var percent = _ref2.percent;

          if (_this2.duration) {
            _this2.secondsLoaded = _this2.duration * percent;
          }
        });

        if (_this2.props.muted) {
          _this2.player.mute();
        }
      }, this.props.onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.url.match(MATCH_URL)[1];
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: "https://streamable.com/o/".concat(id),
        frameBorder: "0",
        scrolling: "no",
        style: style,
        allowFullScreen: true
      });
    }
  }]);

  return Streamable;
}(_react.Component);

exports.Streamable = Streamable;

_defineProperty(Streamable, "displayName", 'Streamable');

_defineProperty(Streamable, "canPlay", function (url) {
  return MATCH_URL.test(url);
});

var _default = (0, _singlePlayer["default"])(Streamable);

exports["default"] = _default;
});

unwrapExports(Streamable_1);
var Streamable_2 = Streamable_1.Streamable;

var Wistia_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Wistia = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://fast.wistia.com/assets/external/E-v1.js';
var SDK_GLOBAL = 'Wistia';
var MATCH_URL = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/;

var Wistia = /*#__PURE__*/function (_Component) {
  _inherits(Wistia, _Component);

  var _super = _createSuper(Wistia);

  function Wistia() {
    var _this;

    _classCallCheck(this, Wistia);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props;

      return (_this$props = _this.props).onPlay.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    return _this;
  }

  _createClass(Wistia, [{
    key: "getID",
    value: function getID(url) {
      return url && url.match(MATCH_URL)[1];
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props5 = this.props,
          playing = _this$props5.playing,
          muted = _this$props5.muted,
          controls = _this$props5.controls,
          _onReady = _this$props5.onReady,
          config = _this$props5.config,
          onError = _this$props5.onError;
      (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function () {
        window._wq = window._wq || [];

        window._wq.push({
          id: _this2.getID(url),
          options: _objectSpread({
            autoPlay: playing,
            silentAutoPlay: 'allow',
            muted: muted,
            controlsVisibleOnLoad: controls
          }, config.wistia.options),
          onReady: function onReady(player) {
            _this2.player = player;

            _this2.unbind();

            _this2.player.bind('play', _this2.onPlay);

            _this2.player.bind('pause', _this2.onPause);

            _this2.player.bind('seek', _this2.onSeek);

            _this2.player.bind('end', _this2.onEnded);

            _onReady();
          }
        });
      }, onError);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.player.unbind('play', this.onPlay);
      this.player.unbind('pause', this.onPause);
      this.player.unbind('seek', this.onSeek);
      this.player.unbind('end', this.onEnded);
    } // Proxy methods to prevent listener leaks

  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.unbind();
      this.callPlayer('remove');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('time', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('volume', fraction);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('playbackRate', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('duration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('time');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.getID(this.props.url);
      var className = "wistia_embed wistia_async_".concat(id);
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: id,
        className: className,
        style: style
      });
    }
  }]);

  return Wistia;
}(_react.Component);

exports.Wistia = Wistia;

_defineProperty(Wistia, "displayName", 'Wistia');

_defineProperty(Wistia, "canPlay", function (url) {
  return MATCH_URL.test(url);
});

_defineProperty(Wistia, "loopOnEnded", true);

var _default = (0, _singlePlayer["default"])(Wistia);

exports["default"] = _default;
});

unwrapExports(Wistia_1);
var Wistia_2 = Wistia_1.Wistia;

var Twitch_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Twitch = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://player.twitch.tv/js/embed/v1.js';
var SDK_GLOBAL = 'Twitch';
var MATCH_VIDEO_URL = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
var MATCH_CHANNEL_URL = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/;
var PLAYER_ID_PREFIX = 'twitch-player-';

var Twitch = /*#__PURE__*/function (_Component) {
  _inherits(Twitch, _Component);

  var _super = _createSuper(Twitch);

  function Twitch() {
    var _this;

    _classCallCheck(this, Twitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.twitch.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('setMuted', true);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('setMuted', false);
    });

    return _this;
  }

  _createClass(Twitch, [{
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      var _this$props = this.props,
          playsinline = _this$props.playsinline,
          onError = _this$props.onError,
          config = _this$props.config,
          controls = _this$props.controls;
      var isChannel = MATCH_CHANNEL_URL.test(url);
      var id = isChannel ? url.match(MATCH_CHANNEL_URL)[1] : url.match(MATCH_VIDEO_URL)[1];

      if (isReady) {
        if (isChannel) {
          this.player.setChannel(id);
        } else {
          this.player.setVideo('v' + id);
        }

        return;
      }

      (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Twitch) {
        _this2.player = new Twitch.Player(_this2.playerID, _objectSpread({
          video: isChannel ? '' : id,
          channel: isChannel ? id : '',
          height: '100%',
          width: '100%',
          playsinline: playsinline,
          autoplay: _this2.props.playing,
          muted: _this2.props.muted,
          // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
          controls: isChannel ? true : controls
        }, config.twitch.options));
        var _Twitch$Player = Twitch.Player,
            READY = _Twitch$Player.READY,
            PLAYING = _Twitch$Player.PLAYING,
            PAUSE = _Twitch$Player.PAUSE,
            ENDED = _Twitch$Player.ENDED,
            ONLINE = _Twitch$Player.ONLINE,
            OFFLINE = _Twitch$Player.OFFLINE;

        _this2.player.addEventListener(READY, _this2.props.onReady);

        _this2.player.addEventListener(PLAYING, _this2.props.onPlay);

        _this2.player.addEventListener(PAUSE, _this2.props.onPause);

        _this2.player.addEventListener(ENDED, _this2.props.onEnded); // Prevent weird isLoading behaviour when streams are offline


        _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);

        _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.callPlayer('pause');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        id: this.playerID
      });
    }
  }]);

  return Twitch;
}(_react.Component);

exports.Twitch = Twitch;

_defineProperty(Twitch, "displayName", 'Twitch');

_defineProperty(Twitch, "canPlay", function (url) {
  return MATCH_VIDEO_URL.test(url) || MATCH_CHANNEL_URL.test(url);
});

_defineProperty(Twitch, "loopOnEnded", true);

var _default = (0, _singlePlayer["default"])(Twitch);

exports["default"] = _default;
});

unwrapExports(Twitch_1);
var Twitch_2 = Twitch_1.Twitch;

var DailyMotion_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DailyMotion = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://api.dmcdn.net/all.js';
var SDK_GLOBAL = 'DM';
var SDK_GLOBAL_READY = 'dmAsyncInit';
var MATCH_URL = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;

var DailyMotion = /*#__PURE__*/function (_Component) {
  _inherits(DailyMotion, _Component);

  var _super = _createSuper(DailyMotion);

  function DailyMotion() {
    var _this;

    _classCallCheck(this, DailyMotion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "onDurationChange", function () {
      var duration = _this.getDuration();

      _this.props.onDuration(duration);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('setMuted', true);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('setMuted', false);
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(DailyMotion, [{
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props = this.props,
          controls = _this$props.controls,
          config = _this$props.config,
          onError = _this$props.onError,
          playing = _this$props.playing;

      var _url$match = url.match(MATCH_URL),
          _url$match2 = _slicedToArray(_url$match, 2),
          id = _url$match2[1];

      if (this.player) {
        this.player.load(id, {
          start: (0, utils.parseStartTime)(url),
          autoplay: playing
        });
        return;
      }

      (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (DM) {
        return DM.player;
      }).then(function (DM) {
        if (!_this2.container) return;
        var Player = DM.player;
        _this2.player = new Player(_this2.container, {
          width: '100%',
          height: '100%',
          video: id,
          params: _objectSpread({
            controls: controls,
            autoplay: _this2.props.playing,
            mute: _this2.props.muted,
            start: (0, utils.parseStartTime)(url),
            origin: window.location.origin
          }, config.dailymotion.params),
          events: {
            apiready: _this2.props.onReady,
            seeked: function seeked() {
              return _this2.props.onSeek(_this2.player.currentTime);
            },
            video_end: _this2.props.onEnded,
            durationchange: _this2.onDurationChange,
            pause: _this2.props.onPause,
            playing: _this2.props.onPlay,
            waiting: _this2.props.onBuffer,
            error: function error(event) {
              return onError(event);
            }
          }
        });
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.player.duration || null;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.player.bufferedTime;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return DailyMotion;
}(_react.Component);

exports.DailyMotion = DailyMotion;

_defineProperty(DailyMotion, "displayName", 'DailyMotion');

_defineProperty(DailyMotion, "canPlay", function (url) {
  return MATCH_URL.test(url);
});

_defineProperty(DailyMotion, "loopOnEnded", true);

var _default = (0, _singlePlayer["default"])(DailyMotion);

exports["default"] = _default;
});

unwrapExports(DailyMotion_1);
var DailyMotion_2 = DailyMotion_1.DailyMotion;

var Mixcloud_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Mixcloud = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://widget.mixcloud.com/media/js/widgetApi.js';
var SDK_GLOBAL = 'Mixcloud';
var MATCH_URL = /mixcloud\.com\/([^/]+\/[^/]+)/;

var Mixcloud = /*#__PURE__*/function (_Component) {
  _inherits(Mixcloud, _Component);

  var _super = _createSuper(Mixcloud);

  function Mixcloud() {
    var _this;

    _classCallCheck(this, Mixcloud);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {// No volume support
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {// No volume support
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Mixcloud, [{
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Mixcloud) {
        _this2.player = Mixcloud.PlayerWidget(_this2.iframe);

        _this2.player.ready.then(function () {
          _this2.player.events.play.on(_this2.props.onPlay);

          _this2.player.events.pause.on(_this2.props.onPause);

          _this2.player.events.ended.on(_this2.props.onEnded);

          _this2.player.events.error.on(_this2.props.error);

          _this2.player.events.progress.on(function (seconds, duration) {
            _this2.currentTime = seconds;
            _this2.duration = duration;
          });

          _this2.props.onReady();
        });
      }, this.props.onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {// No volume support
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          config = _this$props.config;
      var id = url.match(MATCH_URL)[1];
      var style = {
        width: '100%',
        height: '100%'
      };
      var query = (0, utils.queryString)(_objectSpread({}, config.mixcloud.options, {
        feed: "/".concat(id, "/")
      })); // We have to give the iframe a key here to prevent a
      // weird dialog appearing when loading a new track

      return /*#__PURE__*/_react["default"].createElement("iframe", {
        key: id,
        ref: this.ref,
        style: style,
        src: "https://www.mixcloud.com/widget/iframe/?".concat(query),
        frameBorder: "0"
      });
    }
  }]);

  return Mixcloud;
}(_react.Component);

exports.Mixcloud = Mixcloud;

_defineProperty(Mixcloud, "displayName", 'Mixcloud');

_defineProperty(Mixcloud, "canPlay", function (url) {
  return MATCH_URL.test(url);
});

_defineProperty(Mixcloud, "loopOnEnded", true);

var _default = (0, _singlePlayer["default"])(Mixcloud);

exports["default"] = _default;
});

unwrapExports(Mixcloud_1);
var Mixcloud_2 = Mixcloud_1.Mixcloud;

var FilePlayer_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FilePlayer = void 0;

var _react = _interopRequireWildcard(react);



var _singlePlayer = _interopRequireDefault(singlePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var IOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
var HLS_GLOBAL = 'Hls';
var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
var DASH_GLOBAL = 'dashjs';
var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;

function canPlay(url) {
  if (url instanceof Array) {
    var _iterator = _createForOfIteratorHelper(url),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (typeof item === 'string' && canPlay(item)) {
          return true;
        }

        if (canPlay(item.src)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  }

  if ((0, utils.isMediaStream)(url)) {
    return true;
  }

  return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url);
}

function supportsWebKitPresentationMode(video) {
  if (!video) video = document.createElement('video'); // Check if Safari supports PiP, and is not on mobile (other than iPad)
  // iPhone safari appears to "support" PiP through the check, however PiP does not function

  return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === 'function' && !/iPhone|iPod/.test(navigator.userAgent);
}

function canEnablePIP(url) {
  return canPlay(url) && (!!document.pictureInPictureEnabled || supportsWebKitPresentationMode()) && !AUDIO_EXTENSIONS.test(url);
}

var FilePlayer = /*#__PURE__*/function (_Component) {
  _inherits(FilePlayer, _Component);

  var _super = _createSuper(FilePlayer);

  function FilePlayer() {
    var _this;

    _classCallCheck(this, FilePlayer);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "onReady", function () {
      var _this$props;

      return (_this$props = _this.props).onReady.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props6;

      return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function () {
      var _this$props7;

      return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
      var _this$props8;

      return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
      var _this$props9 = _this.props,
          onDisablePIP = _this$props9.onDisablePIP,
          playing = _this$props9.playing;
      onDisablePIP(e);

      if (playing) {
        _this.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
      if (_this.player && supportsWebKitPresentationMode(_this.player)) {
        var webkitPresentationMode = _this.player.webkitPresentationMode;

        if (webkitPresentationMode === 'picture-in-picture') {
          _this.onEnablePIP(e);
        } else if (webkitPresentationMode === 'inline') {
          _this.onDisablePIP(e);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
      _this.props.onSeek(e.target.currentTime);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.player.muted = true;
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.player.muted = false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
      if (typeof source === 'string') {
        return /*#__PURE__*/_react["default"].createElement("source", {
          key: index,
          src: source
        });
      }

      return /*#__PURE__*/_react["default"].createElement("source", _extends({
        key: index
      }, source));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
      return /*#__PURE__*/_react["default"].createElement("track", _extends({
        key: index
      }, track));
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
      if (_this.player) {
        // Store previous player to be used by removeListeners()
        _this.prevPlayer = _this.player;
      }

      _this.player = player;
    });

    return _this;
  }

  _createClass(FilePlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addListeners(this.player);

      if (IOS) {
        this.player.load();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
        this.removeListeners(this.prevPlayer);
        this.addListeners(this.player);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners(this.player);

      if (this.hls) {
        this.hls.destroy();
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners(player) {
      var playsinline = this.props.playsinline;
      player.addEventListener('canplay', this.onReady);
      player.addEventListener('play', this.onPlay);
      player.addEventListener('waiting', this.onBuffer);
      player.addEventListener('playing', this.onBufferEnd);
      player.addEventListener('pause', this.onPause);
      player.addEventListener('seeked', this.onSeek);
      player.addEventListener('ended', this.onEnded);
      player.addEventListener('error', this.onError);
      player.addEventListener('enterpictureinpicture', this.onEnablePIP);
      player.addEventListener('leavepictureinpicture', this.onDisablePIP);
      player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (playsinline) {
        player.setAttribute('playsinline', '');
        player.setAttribute('webkit-playsinline', '');
        player.setAttribute('x5-playsinline', '');
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(player) {
      player.removeEventListener('canplay', this.onReady);
      player.removeEventListener('play', this.onPlay);
      player.removeEventListener('waiting', this.onBuffer);
      player.removeEventListener('playing', this.onBufferEnd);
      player.removeEventListener('pause', this.onPause);
      player.removeEventListener('seeked', this.onSeek);
      player.removeEventListener('ended', this.onEnded);
      player.removeEventListener('error', this.onError);
      player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
      player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
      player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);
    } // Proxy methods to prevent listener leaks

  }, {
    key: "shouldUseAudio",
    value: function shouldUseAudio(props) {
      if (props.config.file.forceVideo) {
        return false;
      }

      if (props.config.file.attributes.poster) {
        return false; // Use <video> so that poster is shown
      }

      return AUDIO_EXTENSIONS.test(props.url) || props.config.file.forceAudio;
    }
  }, {
    key: "shouldUseHLS",
    value: function shouldUseHLS(url) {
      return HLS_EXTENSIONS.test(url) && !IOS || this.props.config.file.forceHLS;
    }
  }, {
    key: "shouldUseDASH",
    value: function shouldUseDASH(url) {
      return DASH_EXTENSIONS.test(url) || this.props.config.file.forceDASH;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props$config$fi = this.props.config.file,
          hlsVersion = _this$props$config$fi.hlsVersion,
          dashVersion = _this$props$config$fi.dashVersion;

      if (this.shouldUseHLS(url)) {
        (0, utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
          _this2.hls = new Hls(_this2.props.config.file.hlsOptions);

          _this2.hls.on(Hls.Events.ERROR, function (e, data) {
            _this2.props.onError(e, data, _this2.hls, Hls);
          });

          _this2.hls.loadSource(url);

          _this2.hls.attachMedia(_this2.player);
        });
      }

      if (this.shouldUseDASH(url)) {
        (0, utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
          _this2.dash = dashjs.MediaPlayer().create();

          _this2.dash.initialize(_this2.player, url, _this2.props.playing);

          _this2.dash.on('error', _this2.props.onError);

          _this2.dash.getDebug().setLogToBrowserConsole(false);
        });
      }

      if (url instanceof Array) {
        // When setting new urls (<source>) on an already loaded video,
        // HTMLMediaElement.load() is needed to reset the media element
        // and restart the media resource. Just replacing children source
        // dom nodes is not enough
        this.player.load();
      } else if ((0, utils.isMediaStream)(url)) {
        try {
          this.player.srcObject = url;
        } catch (e) {
          this.player.src = window.URL.createObjectURL(url);
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.player.play();

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.player.pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.player.removeAttribute('src');

      if (this.dash) {
        this.dash.reset();
      }
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.player.currentTime = seconds;
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.player.volume = fraction;
    }
  }, {
    key: "enablePIP",
    value: function enablePIP() {
      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
        this.player.requestPictureInPicture();
      } else if (supportsWebKitPresentationMode(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
        this.player.webkitSetPresentationMode('picture-in-picture');
      }
    }
  }, {
    key: "disablePIP",
    value: function disablePIP() {
      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
        document.exitPictureInPicture();
      } else if (supportsWebKitPresentationMode(this.player) && this.player.webkitPresentationMode !== 'inline') {
        this.player.webkitSetPresentationMode('inline');
      }
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.player.playbackRate = rate;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.player) return null;
      var _this$player = this.player,
          duration = _this$player.duration,
          seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration
      // so instead we use the end of the seekable timerange

      if (duration === Infinity && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }

      return duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.player) return null;
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.player) return null;
      var buffered = this.player.buffered;

      if (buffered.length === 0) {
        return 0;
      }

      var end = buffered.end(buffered.length - 1);
      var duration = this.getDuration();

      if (end > duration) {
        return duration;
      }

      return end;
    }
  }, {
    key: "getSource",
    value: function getSource(url) {
      var useHLS = this.shouldUseHLS(url);
      var useDASH = this.shouldUseDASH(url);

      if (url instanceof Array || (0, utils.isMediaStream)(url) || useHLS || useDASH) {
        return undefined;
      }

      if (MATCH_DROPBOX_URL.test(url)) {
        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      }

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props10 = this.props,
          url = _this$props10.url,
          playing = _this$props10.playing,
          loop = _this$props10.loop,
          controls = _this$props10.controls,
          muted = _this$props10.muted,
          config = _this$props10.config,
          width = _this$props10.width,
          height = _this$props10.height;
      var useAudio = this.shouldUseAudio(this.props);
      var Element = useAudio ? 'audio' : 'video';
      var style = {
        width: width === 'auto' ? width : '100%',
        height: height === 'auto' ? height : '100%'
      };
      return /*#__PURE__*/_react["default"].createElement(Element, _extends({
        ref: this.ref,
        src: this.getSource(url),
        style: style,
        preload: "auto",
        autoPlay: playing || undefined,
        controls: controls,
        muted: muted,
        loop: loop
      }, config.file.attributes), url instanceof Array && url.map(this.renderSourceElement), config.file.tracks.map(this.renderTrack));
    }
  }]);

  return FilePlayer;
}(_react.Component);

exports.FilePlayer = FilePlayer;

_defineProperty(FilePlayer, "displayName", 'FilePlayer');

_defineProperty(FilePlayer, "canPlay", canPlay);

_defineProperty(FilePlayer, "canEnablePIP", canEnablePIP);

var _default = (0, _singlePlayer["default"])(FilePlayer);

exports["default"] = _default;
});

unwrapExports(FilePlayer_1);
var FilePlayer_2 = FilePlayer_1.FilePlayer;

var players = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;





















var _default = [YouTube_1.YouTube, SoundCloud_1.SoundCloud, Vimeo_1.Vimeo, Facebook_1.Facebook, Streamable_1.Streamable, Wistia_1.Wistia, Twitch_1.Twitch, DailyMotion_1.DailyMotion, Mixcloud_1.Mixcloud, FilePlayer_1.FilePlayer];
exports["default"] = _default;
});

unwrapExports(players);

var Preview_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(react);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ICON_SIZE = '64px';

var Preview = /*#__PURE__*/function (_Component) {
  _inherits(Preview, _Component);

  var _super = _createSuper(Preview);

  function Preview() {
    var _this;

    _classCallCheck(this, Preview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      image: null
    });

    return _this;
  }

  _createClass(Preview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      this.fetchImage(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          url = _this$props.url,
          light = _this$props.light;

      if (prevProps.url !== url || prevProps.light !== light) {
        this.fetchImage(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "fetchImage",
    value: function fetchImage(_ref) {
      var _this2 = this;

      var url = _ref.url,
          light = _ref.light;

      if (typeof light === 'string') {
        this.setState({
          image: light
        });
        return;
      }

      this.setState({
        image: null
      });
      return window.fetch("https://noembed.com/embed?url=".concat(url)).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.thumbnail_url && _this2.mounted) {
          var image = data.thumbnail_url.replace('height=100', 'height=480');

          _this2.setState({
            image: image
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onClick = _this$props2.onClick,
          playIcon = _this$props2.playIcon;
      var image = this.state.image;
      var flexCenter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
      var styles = {
        preview: _objectSpread({
          width: '100%',
          height: '100%',
          backgroundImage: image ? "url(".concat(image, ")") : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer'
        }, flexCenter),
        shadow: _objectSpread({
          background: 'radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)',
          borderRadius: ICON_SIZE,
          width: ICON_SIZE,
          height: ICON_SIZE
        }, flexCenter),
        playIcon: {
          borderStyle: 'solid',
          borderWidth: '16px 0 16px 26px',
          borderColor: 'transparent transparent transparent white',
          marginLeft: '7px'
        }
      };

      var defaultPlayIcon = /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.shadow,
        className: "react-player__shadow"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.playIcon,
        className: "react-player__play-icon"
      }));

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.preview,
        className: "react-player__preview",
        onClick: onClick
      }, playIcon || defaultPlayIcon);
    }
  }]);

  return Preview;
}(_react.Component);

exports["default"] = Preview;
});

unwrapExports(Preview_1);

var preload = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderPreloadPlayers;

var _react = _interopRequireDefault(react);

var _Player = _interopRequireDefault(Player_1);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var PRELOAD_PLAYERS = [{
  Player: YouTube_1.YouTube,
  configKey: 'youtube',
  url: 'https://www.youtube.com/watch?v=GlCmAC4MHek'
}, {
  Player: SoundCloud_1.SoundCloud,
  configKey: 'soundcloud',
  url: 'https://soundcloud.com/seucheu/john-cage-433-8-bit-version'
}, {
  Player: Vimeo_1.Vimeo,
  configKey: 'vimeo',
  url: 'https://vimeo.com/300970506'
}, {
  Player: DailyMotion_1.DailyMotion,
  configKey: 'dailymotion',
  url: 'http://www.dailymotion.com/video/xqdpyk'
}];

function renderPreloadPlayers(url, controls, config) {
  var players = [];

  var _iterator = _createForOfIteratorHelper(PRELOAD_PLAYERS),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var player = _step.value;

      if (!player.Player.canPlay(url) && config[player.configKey].preload) {
        players.push( /*#__PURE__*/_react["default"].createElement(_Player["default"], {
          key: player.Player.displayName,
          activePlayer: player.Player,
          url: player.url,
          controls: controls,
          playing: true,
          muted: true,
          display: "none"
        }));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return players;
}
});

unwrapExports(preload);

var ReactPlayer_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FilePlayer", {
  enumerable: true,
  get: function get() {
    return _FilePlayer["default"];
  }
});
Object.defineProperty(exports, "YouTube", {
  enumerable: true,
  get: function get() {
    return _YouTube["default"];
  }
});
Object.defineProperty(exports, "SoundCloud", {
  enumerable: true,
  get: function get() {
    return _SoundCloud["default"];
  }
});
Object.defineProperty(exports, "Vimeo", {
  enumerable: true,
  get: function get() {
    return _Vimeo["default"];
  }
});
Object.defineProperty(exports, "Facebook", {
  enumerable: true,
  get: function get() {
    return _Facebook["default"];
  }
});
Object.defineProperty(exports, "Streamable", {
  enumerable: true,
  get: function get() {
    return _Streamable["default"];
  }
});
Object.defineProperty(exports, "Wistia", {
  enumerable: true,
  get: function get() {
    return _Wistia["default"];
  }
});
Object.defineProperty(exports, "Twitch", {
  enumerable: true,
  get: function get() {
    return _Twitch["default"];
  }
});
Object.defineProperty(exports, "DailyMotion", {
  enumerable: true,
  get: function get() {
    return _DailyMotion["default"];
  }
});
Object.defineProperty(exports, "Mixcloud", {
  enumerable: true,
  get: function get() {
    return _Mixcloud["default"];
  }
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(react);





var _players = _interopRequireDefault(players);

var _Player4 = _interopRequireDefault(Player_1);

var _Preview = _interopRequireDefault(Preview_1);

var _FilePlayer = _interopRequireWildcard(FilePlayer_1);

var _preload = _interopRequireDefault(preload);

var _YouTube = _interopRequireDefault(YouTube_1);

var _SoundCloud = _interopRequireDefault(SoundCloud_1);

var _Vimeo = _interopRequireDefault(Vimeo_1);

var _Facebook = _interopRequireDefault(Facebook_1);

var _Streamable = _interopRequireDefault(Streamable_1);

var _Wistia = _interopRequireDefault(Wistia_1);

var _Twitch = _interopRequireDefault(Twitch_1);

var _DailyMotion = _interopRequireDefault(DailyMotion_1);

var _Mixcloud = _interopRequireDefault(Mixcloud_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SUPPORTED_PROPS = Object.keys(props.propTypes);
var customPlayers = [];

var ReactPlayer = /*#__PURE__*/function (_Component) {
  _inherits(ReactPlayer, _Component);

  var _super = _createSuper(ReactPlayer);

  function ReactPlayer() {
    var _this;

    _classCallCheck(this, ReactPlayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "config", (0, utils.getConfig)(_this.props, props.defaultProps, true));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showPreview: !!_this.props.light
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickPreview", function () {
      _this.setState({
        showPreview: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showPreview", function () {
      _this.setState({
        showPreview: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDuration", function () {
      if (!_this.player) return null;
      return _this.player.getDuration();
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function () {
      if (!_this.player) return null;
      return _this.player.getCurrentTime();
    });

    _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function () {
      if (!_this.player) return null;
      return _this.player.getSecondsLoaded();
    });

    _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
      if (!_this.player) return null;
      return _this.player.getInternalPlayer(key);
    });

    _defineProperty(_assertThisInitialized(_this), "seekTo", function (fraction, type) {
      if (!_this.player) return null;

      _this.player.seekTo(fraction, type);
    });

    _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
      _this.props.onReady(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "wrapperRef", function (wrapper) {
      _this.wrapper = wrapper;
    });

    _defineProperty(_assertThisInitialized(_this), "activePlayerRef", function (player) {
      _this.player = player;
    });

    return _this;
  }

  _createClass(ReactPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.progressFrequency) {
        var message = 'ReactPlayer: %cprogressFrequency%c is deprecated, please use %cprogressInterval%c instead';
        console.warn(message, 'font-weight: bold', '', 'font-weight: bold', '');
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, utils.isEqual)(this.props, nextProps) || !(0, utils.isEqual)(this.state, nextState);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var light = this.props.light;
      this.config = (0, utils.getConfig)(this.props, props.defaultProps);

      if (!prevProps.light && light) {
        this.setState({
          showPreview: true
        });
      }

      if (prevProps.light && !light) {
        this.setState({
          showPreview: false
        });
      }
    }
  }, {
    key: "getActivePlayer",
    value: function getActivePlayer(url) {
      for (var _i = 0, _arr = [].concat(_toConsumableArray(customPlayers), _toConsumableArray(_players["default"])); _i < _arr.length; _i++) {
        var _Player = _arr[_i];

        if (_Player.canPlay(url)) {
          return _Player;
        }
      } // Fall back to FilePlayer if nothing else can play the URL


      return _FilePlayer.FilePlayer;
    }
  }, {
    key: "renderActivePlayer",
    value: function renderActivePlayer(url, activePlayer) {
      if (!url) return null;
      return /*#__PURE__*/_react["default"].createElement(_Player4["default"], _extends({}, this.props, {
        key: activePlayer.displayName,
        ref: this.activePlayerRef,
        config: this.config,
        activePlayer: activePlayer,
        onReady: this.handleReady
      }));
    }
  }, {
    key: "sortPlayers",
    value: function sortPlayers(a, b) {
      // Retain player order to prevent weird iframe behaviour when switching players
      if (a && b) {
        return a.key < b.key ? -1 : 1;
      }

      return 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          controls = _this$props.controls,
          style = _this$props.style,
          width = _this$props.width,
          height = _this$props.height,
          light = _this$props.light,
          playIcon = _this$props.playIcon,
          Wrapper = _this$props.wrapper;
      var showPreview = this.state.showPreview && url;
      var otherProps = (0, utils.omit)(this.props, SUPPORTED_PROPS, props.DEPRECATED_CONFIG_PROPS);
      var activePlayer = this.getActivePlayer(url);
      var renderedActivePlayer = this.renderActivePlayer(url, activePlayer);
      var preloadPlayers = (0, _preload["default"])(url, controls, this.config);
      var players = [renderedActivePlayer].concat(_toConsumableArray(preloadPlayers)).sort(this.sortPlayers);

      var preview = /*#__PURE__*/_react["default"].createElement(_Preview["default"], {
        url: url,
        light: light,
        playIcon: playIcon,
        onClick: this.handleClickPreview
      });

      return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
        ref: this.wrapperRef,
        style: _objectSpread({}, style, {
          width: width,
          height: height
        })
      }, otherProps), showPreview ? preview : players);
    }
  }]);

  return ReactPlayer;
}(_react.Component);

exports["default"] = ReactPlayer;

_defineProperty(ReactPlayer, "addCustomPlayer", function (player) {
  customPlayers.push(player);
});

_defineProperty(ReactPlayer, "removeCustomPlayers", function () {
  customPlayers = [];
});

_defineProperty(ReactPlayer, "displayName", 'ReactPlayer');

_defineProperty(ReactPlayer, "propTypes", props.propTypes);

_defineProperty(ReactPlayer, "defaultProps", props.defaultProps);

_defineProperty(ReactPlayer, "canPlay", function (url) {
  for (var _i2 = 0, _arr2 = [].concat(_toConsumableArray(customPlayers), _toConsumableArray(_players["default"])); _i2 < _arr2.length; _i2++) {
    var _Player2 = _arr2[_i2];

    if (_Player2.canPlay(url)) {
      return true;
    }
  }

  return false;
});

_defineProperty(ReactPlayer, "canEnablePIP", function (url) {
  for (var _i3 = 0, _arr3 = [].concat(_toConsumableArray(customPlayers), _toConsumableArray(_players["default"])); _i3 < _arr3.length; _i3++) {
    var _Player3 = _arr3[_i3];

    if (_Player3.canEnablePIP && _Player3.canEnablePIP(url)) {
      return true;
    }
  }

  return false;
});
});

var ReactPlayer = unwrapExports(ReactPlayer_1);
var ReactPlayer_2 = ReactPlayer_1.FilePlayer;
var ReactPlayer_3 = ReactPlayer_1.YouTube;
var ReactPlayer_4 = ReactPlayer_1.SoundCloud;
var ReactPlayer_5 = ReactPlayer_1.Vimeo;
var ReactPlayer_6 = ReactPlayer_1.Facebook;
var ReactPlayer_7 = ReactPlayer_1.Streamable;
var ReactPlayer_8 = ReactPlayer_1.Wistia;
var ReactPlayer_9 = ReactPlayer_1.Twitch;
var ReactPlayer_10 = ReactPlayer_1.DailyMotion;
var ReactPlayer_11 = ReactPlayer_1.Mixcloud;

var makeStyles$9 = function makeStyles(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? "100%" : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "100%" : _ref$height,
      _ref$responsive = _ref.responsive,
      _ref$ratio = _ref.ratio,
      ratio = _ref$ratio === void 0 ? "16:9" : _ref$ratio;
  var ratioPerc = ratio.split(":").map(function (x) {
    return Number(x);
  }).reduce(function (x, y) {
    return y / x * 100;
  });
  return {
    containerStyles: /*#__PURE__*/css("max-width:", breakpoints.medium, ";& .video-player{};label:containerStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUGxheWVyLnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQndCIiwiZmlsZSI6IlZpZGVvUGxheWVyLnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gXCIuLi8uLi90aGVtZVwiO1xuXG5leHBvcnQgdHlwZSBWaWRlb1BsYXllclN0eWxlUHJvcHMgPSB7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJlc3BvbnNpdmU/OiBib29sZWFuO1xuICByYXRpbz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHdpZHRoID0gXCIxMDAlXCIsXG4gIGhlaWdodCA9IFwiMTAwJVwiLFxuICByZXNwb25zaXZlID0gdHJ1ZSxcbiAgcmF0aW8gPSBcIjE2OjlcIixcbn06IFZpZGVvUGxheWVyU3R5bGVQcm9wcykgPT4ge1xuICBsZXQgcmF0aW9QZXJjID0gcmF0aW9cbiAgICAuc3BsaXQoXCI6XCIpXG4gICAgLm1hcCh4ID0+IE51bWJlcih4KSlcbiAgICAucmVkdWNlKCh4LCB5KSA9PiAoeSAvIHgpICogMTAwKTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lclN0eWxlczogY3NzYFxuICAgICAgbWF4LXdpZHRoOiAke2JyZWFrcG9pbnRzLm1lZGl1bX07XG4gICAgICAmIC52aWRlby1wbGF5ZXIge1xuICAgICAgfVxuICAgIGAsXG4gICAgcGxheWVyU3R5bGVzOiBjc3NgXG4gICAgICB3aWR0aDogJHt3aWR0aH07XG4gICAgICBoZWlnaHQ6ICR7aGVpZ2h0fTtcbiAgICBgLFxuICB9O1xufTtcbiJdfQ== */")),
    playerStyles: /*#__PURE__*/css("width:", width, ";height:", height, ";;label:playerStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUGxheWVyLnN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnFCIiwiZmlsZSI6IlZpZGVvUGxheWVyLnN0eWxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gXCIuLi8uLi90aGVtZVwiO1xuXG5leHBvcnQgdHlwZSBWaWRlb1BsYXllclN0eWxlUHJvcHMgPSB7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJlc3BvbnNpdmU/OiBib29sZWFuO1xuICByYXRpbz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7XG4gIHdpZHRoID0gXCIxMDAlXCIsXG4gIGhlaWdodCA9IFwiMTAwJVwiLFxuICByZXNwb25zaXZlID0gdHJ1ZSxcbiAgcmF0aW8gPSBcIjE2OjlcIixcbn06IFZpZGVvUGxheWVyU3R5bGVQcm9wcykgPT4ge1xuICBsZXQgcmF0aW9QZXJjID0gcmF0aW9cbiAgICAuc3BsaXQoXCI6XCIpXG4gICAgLm1hcCh4ID0+IE51bWJlcih4KSlcbiAgICAucmVkdWNlKCh4LCB5KSA9PiAoeSAvIHgpICogMTAwKTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lclN0eWxlczogY3NzYFxuICAgICAgbWF4LXdpZHRoOiAke2JyZWFrcG9pbnRzLm1lZGl1bX07XG4gICAgICAmIC52aWRlby1wbGF5ZXIge1xuICAgICAgfVxuICAgIGAsXG4gICAgcGxheWVyU3R5bGVzOiBjc3NgXG4gICAgICB3aWR0aDogJHt3aWR0aH07XG4gICAgICBoZWlnaHQ6ICR7aGVpZ2h0fTtcbiAgICBgLFxuICB9O1xufTtcbiJdfQ== */"))
  };
};

function VideoPlayer(_ref) {
  var src = _ref.src,
      poster = _ref.poster,
      playing = _ref.playing,
      onPause = _ref.onPause,
      autoPlay = _ref.autoPlay,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? false : _ref$loop,
      _ref$muted = _ref.muted,
      onStart = _ref.onStart,
      ratio = _ref.ratio,
      onReady = _ref.onReady,
      onPlay = _ref.onPlay,
      onBuffer = _ref.onBuffer,
      onError = _ref.onError,
      onEnded = _ref.onEnded,
      onDuration = _ref.onDuration,
      onProgress = _ref.onProgress,
      className = _ref.className,
      _ref$volume = _ref.volume,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? true : _ref$controls,
      styleProps = _objectWithoutProperties(_ref, ["src", "poster", "playing", "onPause", "autoPlay", "loop", "muted", "onStart", "ratio", "onReady", "onPlay", "onBuffer", "onError", "onEnded", "onDuration", "onProgress", "className", "volume", "controls"]);

  var _makeStyles = makeStyles$9(styleProps),
      playerStyles = _makeStyles.playerStyles,
      containerStyles = _makeStyles.containerStyles;

  return jsx("div", {
    css: containerStyles
  }, jsx(ReactPlayer, {
    css: playerStyles,
    width: styleProps.responsive ? "100%" : styleProps.width,
    height: styleProps.responsive ? "100%" : styleProps.height,
    url: src,
    autoPlay: autoPlay,
    light: poster || true,
    className: className,
    playing: playing,
    loop: loop,
    controls: controls,
    onStart: onStart,
    onPlay: onPlay,
    onBuffer: onBuffer,
    onReady: onReady,
    onEnded: onEnded,
    onDuration: onDuration,
    onProgress: onProgress,
    config: {
      file: {
        attributes: {
          className: "video-player"
        }
      }
    }
  }));
}

var index$6 = react_17(VideoPlayer);

function _EMOTION_STRINGIFIED_CSS_ERROR__$4() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$5 = process.env.NODE_ENV === "production" ? {
  name: "j20b98-container",
  styles: ";label:container;"
} : {
  name: "j20b98-container",
  styles: ";label:container;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUHJldmlldy5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNrQiIsImZpbGUiOiJWaWRlb1ByZXZpZXcuc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gXCIuLy4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgVmlkZW9QcmV2aWV3U3R5bGVQcm9wcyA9IHtcbiAgc2hvd0NoYW5uZWw/OiBib29sZWFuXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7IHNob3dDaGFubmVsID0gZmFsc2UgfTogVmlkZW9QcmV2aWV3U3R5bGVQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYGAsXG4gICAgbGluazogY3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGAsXG4gICAgY292ZXJDb250YWluZXI6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYCxcbiAgICBjb3ZlcjogY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICBgLFxuICAgIGluZm9Db250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gJHtzaG93Q2hhbm5lbCA/IFwiNDVweCBhdXRvXCIgOiBcImF1dG9cIn07XG4gICAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIGAsXG4gICAgYXZhdGFyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgYCxcbiAgICB0ZXh0Q29udGFpbmVyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogJHtzaG93Q2hhbm5lbCA/IFwiMiAvIDJcIiA6IFwiMSAvIDFcIn07XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwb2dyYXBoeS53ZWlnaHRzLmJvbGR9O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2suYmFzZX07XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5zbWFsbH07XG4gICAgYCxcbiAgICBjaGFubmVsOiBjc3NgXG4gICAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy54c21hbGx9O1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmdyZXkuZGFya2VyfTtcbiAgICBgXG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
};

var _ref2$1 = process.env.NODE_ENV === "production" ? {
  name: "75wf08-link",
  styles: "text-decoration:none;;label:link;"
} : {
  name: "75wf08-link",
  styles: "text-decoration:none;;label:link;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUHJldmlldy5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVhIiwiZmlsZSI6IlZpZGVvUHJldmlldy5zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgdHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSBcIi4vLi4vLi4vdGhlbWVcIlxuXG5leHBvcnQgdHlwZSBWaWRlb1ByZXZpZXdTdHlsZVByb3BzID0ge1xuICBzaG93Q2hhbm5lbD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGxldCBtYWtlU3R5bGVzID0gKHsgc2hvd0NoYW5uZWwgPSBmYWxzZSB9OiBWaWRlb1ByZXZpZXdTdHlsZVByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYCxcbiAgICBjb3ZlckNvbnRhaW5lcjogY3NzYFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBgLFxuICAgIGNvdmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIGAsXG4gICAgaW5mb0NvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAke3Nob3dDaGFubmVsID8gXCI0NXB4IGF1dG9cIiA6IFwiYXV0b1wifTtcbiAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgYCxcbiAgICBhdmF0YXI6IGNzc2BcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgICBgLFxuICAgIHRleHRDb250YWluZXI6IGNzc2BcbiAgICAgIGdyaWQtY29sdW1uOiAke3Nob3dDaGFubmVsID8gXCIyIC8gMlwiIDogXCIxIC8gMVwifTtcbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXdlaWdodDogJHt0eXBvZ3JhcGh5LndlaWdodHMuYm9sZH07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjay5iYXNlfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0eXBvZ3JhcGh5LnNpemVzLnNtYWxsfTtcbiAgICBgLFxuICAgIGNoYW5uZWw6IGNzc2BcbiAgICAgIG1hcmdpbjogNXB4IDAgMDtcbiAgICAgIGZvbnQtc2l6ZTogJHt0eXBvZ3JhcGh5LnNpemVzLnhzbWFsbH07XG4gICAgICBjb2xvcjogJHtjb2xvcnMuZ3JleS5kYXJrZXJ9O1xuICAgIGBcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "1lxbog7-coverContainer",
  styles: "width:100%;background-color:black;;label:coverContainer;"
} : {
  name: "1lxbog7-coverContainer",
  styles: "width:100%;background-color:black;;label:coverContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUHJldmlldy5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF1QiIsImZpbGUiOiJWaWRlb1ByZXZpZXcuc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gXCIuLy4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgVmlkZW9QcmV2aWV3U3R5bGVQcm9wcyA9IHtcbiAgc2hvd0NoYW5uZWw/OiBib29sZWFuXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7IHNob3dDaGFubmVsID0gZmFsc2UgfTogVmlkZW9QcmV2aWV3U3R5bGVQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYGAsXG4gICAgbGluazogY3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGAsXG4gICAgY292ZXJDb250YWluZXI6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYCxcbiAgICBjb3ZlcjogY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICBgLFxuICAgIGluZm9Db250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gJHtzaG93Q2hhbm5lbCA/IFwiNDVweCBhdXRvXCIgOiBcImF1dG9cIn07XG4gICAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIGAsXG4gICAgYXZhdGFyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgYCxcbiAgICB0ZXh0Q29udGFpbmVyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogJHtzaG93Q2hhbm5lbCA/IFwiMiAvIDJcIiA6IFwiMSAvIDFcIn07XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwb2dyYXBoeS53ZWlnaHRzLmJvbGR9O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2suYmFzZX07XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5zbWFsbH07XG4gICAgYCxcbiAgICBjaGFubmVsOiBjc3NgXG4gICAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy54c21hbGx9O1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmdyZXkuZGFya2VyfTtcbiAgICBgXG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "1its377-cover",
  styles: "display:block;width:100%;height:auto;;label:cover;"
} : {
  name: "1its377-cover",
  styles: "display:block;width:100%;height:auto;;label:cover;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUHJldmlldy5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCYyIsImZpbGUiOiJWaWRlb1ByZXZpZXcuc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gXCIuLy4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgVmlkZW9QcmV2aWV3U3R5bGVQcm9wcyA9IHtcbiAgc2hvd0NoYW5uZWw/OiBib29sZWFuXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7IHNob3dDaGFubmVsID0gZmFsc2UgfTogVmlkZW9QcmV2aWV3U3R5bGVQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYGAsXG4gICAgbGluazogY3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGAsXG4gICAgY292ZXJDb250YWluZXI6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYCxcbiAgICBjb3ZlcjogY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICBgLFxuICAgIGluZm9Db250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gJHtzaG93Q2hhbm5lbCA/IFwiNDVweCBhdXRvXCIgOiBcImF1dG9cIn07XG4gICAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIGAsXG4gICAgYXZhdGFyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgYCxcbiAgICB0ZXh0Q29udGFpbmVyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogJHtzaG93Q2hhbm5lbCA/IFwiMiAvIDJcIiA6IFwiMSAvIDFcIn07XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwb2dyYXBoeS53ZWlnaHRzLmJvbGR9O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2suYmFzZX07XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5zbWFsbH07XG4gICAgYCxcbiAgICBjaGFubmVsOiBjc3NgXG4gICAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy54c21hbGx9O1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmdyZXkuZGFya2VyfTtcbiAgICBgXG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "436d78-avatar",
  styles: "grid-column:1 / 1;;label:avatar;"
} : {
  name: "436d78-avatar",
  styles: "grid-column:1 / 1;;label:avatar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUHJldmlldy5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZSIsImZpbGUiOiJWaWRlb1ByZXZpZXcuc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gXCIuLy4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgVmlkZW9QcmV2aWV3U3R5bGVQcm9wcyA9IHtcbiAgc2hvd0NoYW5uZWw/OiBib29sZWFuXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7IHNob3dDaGFubmVsID0gZmFsc2UgfTogVmlkZW9QcmV2aWV3U3R5bGVQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYGAsXG4gICAgbGluazogY3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGAsXG4gICAgY292ZXJDb250YWluZXI6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYCxcbiAgICBjb3ZlcjogY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICBgLFxuICAgIGluZm9Db250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gJHtzaG93Q2hhbm5lbCA/IFwiNDVweCBhdXRvXCIgOiBcImF1dG9cIn07XG4gICAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIGAsXG4gICAgYXZhdGFyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgYCxcbiAgICB0ZXh0Q29udGFpbmVyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogJHtzaG93Q2hhbm5lbCA/IFwiMiAvIDJcIiA6IFwiMSAvIDFcIn07XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwb2dyYXBoeS53ZWlnaHRzLmJvbGR9O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2suYmFzZX07XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5zbWFsbH07XG4gICAgYCxcbiAgICBjaGFubmVsOiBjc3NgXG4gICAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy54c21hbGx9O1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmdyZXkuZGFya2VyfTtcbiAgICBgXG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
};

var makeStyles$a = function makeStyles(_ref6) {
  var _ref6$showChannel = _ref6.showChannel,
      showChannel = _ref6$showChannel === void 0 ? false : _ref6$showChannel;
  return {
    container: _ref$5,
    link: _ref2$1,
    coverContainer: _ref3,
    cover: _ref4,
    infoContainer: /*#__PURE__*/css("display:grid;grid-template:auto / ", showChannel ? "45px auto" : "auto", ";margin:10px 0 0;;label:infoContainer;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUHJldmlldy5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCc0IiLCJmaWxlIjoiVmlkZW9QcmV2aWV3LnN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiXG5pbXBvcnQgeyB0eXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tIFwiLi8uLi8uLi90aGVtZVwiXG5cbmV4cG9ydCB0eXBlIFZpZGVvUHJldmlld1N0eWxlUHJvcHMgPSB7XG4gIHNob3dDaGFubmVsPzogYm9vbGVhblxufVxuXG5leHBvcnQgbGV0IG1ha2VTdHlsZXMgPSAoeyBzaG93Q2hhbm5lbCA9IGZhbHNlIH06IFZpZGVvUHJldmlld1N0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BgLFxuICAgIGxpbms6IGNzc2BcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBgLFxuICAgIGNvdmVyQ29udGFpbmVyOiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGAsXG4gICAgY292ZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgYCxcbiAgICBpbmZvQ29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvICR7c2hvd0NoYW5uZWwgPyBcIjQ1cHggYXV0b1wiIDogXCJhdXRvXCJ9O1xuICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICBgLFxuICAgIGF2YXRhcjogY3NzYFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xuICAgIGAsXG4gICAgdGV4dENvbnRhaW5lcjogY3NzYFxuICAgICAgZ3JpZC1jb2x1bW46ICR7c2hvd0NoYW5uZWwgPyBcIjIgLyAyXCIgOiBcIjEgLyAxXCJ9O1xuICAgIGAsXG4gICAgdGl0bGU6IGNzc2BcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3R5cG9ncmFwaHkud2VpZ2h0cy5ib2xkfTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmJsYWNrLmJhc2V9O1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMuc21hbGx9O1xuICAgIGAsXG4gICAgY2hhbm5lbDogY3NzYFxuICAgICAgbWFyZ2luOiA1cHggMCAwO1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMueHNtYWxsfTtcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5ncmV5LmRhcmtlcn07XG4gICAgYFxuICB9XG59XG4iXX0= */")),
    avatar: _ref5,
    textContainer: /*#__PURE__*/css("grid-column:", showChannel ? "2 / 2" : "1 / 1", ";;label:textContainer;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUHJldmlldy5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCc0IiLCJmaWxlIjoiVmlkZW9QcmV2aWV3LnN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiXG5pbXBvcnQgeyB0eXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tIFwiLi8uLi8uLi90aGVtZVwiXG5cbmV4cG9ydCB0eXBlIFZpZGVvUHJldmlld1N0eWxlUHJvcHMgPSB7XG4gIHNob3dDaGFubmVsPzogYm9vbGVhblxufVxuXG5leHBvcnQgbGV0IG1ha2VTdHlsZXMgPSAoeyBzaG93Q2hhbm5lbCA9IGZhbHNlIH06IFZpZGVvUHJldmlld1N0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BgLFxuICAgIGxpbms6IGNzc2BcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBgLFxuICAgIGNvdmVyQ29udGFpbmVyOiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGAsXG4gICAgY292ZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgYCxcbiAgICBpbmZvQ29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvICR7c2hvd0NoYW5uZWwgPyBcIjQ1cHggYXV0b1wiIDogXCJhdXRvXCJ9O1xuICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICBgLFxuICAgIGF2YXRhcjogY3NzYFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xuICAgIGAsXG4gICAgdGV4dENvbnRhaW5lcjogY3NzYFxuICAgICAgZ3JpZC1jb2x1bW46ICR7c2hvd0NoYW5uZWwgPyBcIjIgLyAyXCIgOiBcIjEgLyAxXCJ9O1xuICAgIGAsXG4gICAgdGl0bGU6IGNzc2BcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3R5cG9ncmFwaHkud2VpZ2h0cy5ib2xkfTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmJsYWNrLmJhc2V9O1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMuc21hbGx9O1xuICAgIGAsXG4gICAgY2hhbm5lbDogY3NzYFxuICAgICAgbWFyZ2luOiA1cHggMCAwO1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMueHNtYWxsfTtcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5ncmV5LmRhcmtlcn07XG4gICAgYFxuICB9XG59XG4iXX0= */")),
    title: /*#__PURE__*/css("margin:0;font-weight:", typography.weights.bold, ";text-transform:capitalize;color:", colors.black.base, ";font-size:", typography.sizes.small, ";;label:title;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUHJldmlldy5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDYyIsImZpbGUiOiJWaWRlb1ByZXZpZXcuc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcbmltcG9ydCB7IHR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gXCIuLy4uLy4uL3RoZW1lXCJcblxuZXhwb3J0IHR5cGUgVmlkZW9QcmV2aWV3U3R5bGVQcm9wcyA9IHtcbiAgc2hvd0NoYW5uZWw/OiBib29sZWFuXG59XG5cbmV4cG9ydCBsZXQgbWFrZVN0eWxlcyA9ICh7IHNob3dDaGFubmVsID0gZmFsc2UgfTogVmlkZW9QcmV2aWV3U3R5bGVQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYGAsXG4gICAgbGluazogY3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGAsXG4gICAgY292ZXJDb250YWluZXI6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYCxcbiAgICBjb3ZlcjogY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICBgLFxuICAgIGluZm9Db250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gJHtzaG93Q2hhbm5lbCA/IFwiNDVweCBhdXRvXCIgOiBcImF1dG9cIn07XG4gICAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIGAsXG4gICAgYXZhdGFyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgYCxcbiAgICB0ZXh0Q29udGFpbmVyOiBjc3NgXG4gICAgICBncmlkLWNvbHVtbjogJHtzaG93Q2hhbm5lbCA/IFwiMiAvIDJcIiA6IFwiMSAvIDFcIn07XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwb2dyYXBoeS53ZWlnaHRzLmJvbGR9O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2suYmFzZX07XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy5zbWFsbH07XG4gICAgYCxcbiAgICBjaGFubmVsOiBjc3NgXG4gICAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplcy54c21hbGx9O1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmdyZXkuZGFya2VyfTtcbiAgICBgXG4gIH1cbn1cbiJdfQ== */")),
    channel: /*#__PURE__*/css("margin:5px 0 0;font-size:", typography.sizes.xsmall, ";color:", colors.grey.darker, ";;label:channel;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZpZGVvUHJldmlldy5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDZ0IiLCJmaWxlIjoiVmlkZW9QcmV2aWV3LnN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiXG5pbXBvcnQgeyB0eXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tIFwiLi8uLi8uLi90aGVtZVwiXG5cbmV4cG9ydCB0eXBlIFZpZGVvUHJldmlld1N0eWxlUHJvcHMgPSB7XG4gIHNob3dDaGFubmVsPzogYm9vbGVhblxufVxuXG5leHBvcnQgbGV0IG1ha2VTdHlsZXMgPSAoeyBzaG93Q2hhbm5lbCA9IGZhbHNlIH06IFZpZGVvUHJldmlld1N0eWxlUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BgLFxuICAgIGxpbms6IGNzc2BcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBgLFxuICAgIGNvdmVyQ29udGFpbmVyOiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGAsXG4gICAgY292ZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgYCxcbiAgICBpbmZvQ29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvICR7c2hvd0NoYW5uZWwgPyBcIjQ1cHggYXV0b1wiIDogXCJhdXRvXCJ9O1xuICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICBgLFxuICAgIGF2YXRhcjogY3NzYFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xuICAgIGAsXG4gICAgdGV4dENvbnRhaW5lcjogY3NzYFxuICAgICAgZ3JpZC1jb2x1bW46ICR7c2hvd0NoYW5uZWwgPyBcIjIgLyAyXCIgOiBcIjEgLyAxXCJ9O1xuICAgIGAsXG4gICAgdGl0bGU6IGNzc2BcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3R5cG9ncmFwaHkud2VpZ2h0cy5ib2xkfTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmJsYWNrLmJhc2V9O1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMuc21hbGx9O1xuICAgIGAsXG4gICAgY2hhbm5lbDogY3NzYFxuICAgICAgbWFyZ2luOiA1cHggMCAwO1xuICAgICAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkuc2l6ZXMueHNtYWxsfTtcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5ncmV5LmRhcmtlcn07XG4gICAgYFxuICB9XG59XG4iXX0= */"))
  };
};

function VideoPreview(_ref) {
  var title = _ref.title,
      channel = _ref.channel,
      channelImg = _ref.channelImg,
      _ref$showChannel = _ref.showChannel,
      showChannel = _ref$showChannel === void 0 ? false : _ref$showChannel,
      poster = _ref.poster,
      _onClick = _ref.onClick,
      onChannelClick = _ref.onChannelClick,
      styleProps = _objectWithoutProperties(_ref, ["title", "channel", "channelImg", "showChannel", "poster", "onClick", "onChannelClick"]);

  var styles = makeStyles$a(_objectSpread2({
    showChannel: showChannel
  }, styleProps));
  return jsx("div", {
    css: styles.container,
    onClick: _onClick
  }, jsx("div", {
    css: styles.coverContainer
  }, jsx("img", {
    css: styles.cover,
    src: poster,
    onClick: function onClick(event) {
      event.stopPropagation();

      _onClick();
    }
  })), jsx("div", {
    css: styles.infoContainer
  }, showChannel && jsx("div", {
    css: styles.avatar,
    onClick: function onClick(event) {
      event.stopPropagation();
      onChannelClick();
    }
  }, jsx(Avatar$1, {
    size: "small",
    img: channelImg
  })), jsx("div", {
    css: styles.textContainer
  }, jsx("h3", {
    css: styles.title,
    onClick: function onClick(event) {
      event.stopPropagation();

      _onClick();
    }
  }, title), showChannel && jsx("h3", {
    css: styles.channel,
    onClick: function onClick(event) {
      event.stopPropagation();
      onChannelClick();
    }
  }, channel))));
}

var index$7 = react_17(VideoPreview);

export { Avatar$1 as Avatar, index as Banner, Button$1 as Button, index$1 as ChannelSummary, index$2 as DetailsTable, index$3 as GenericSection, index$4 as Grid, index$5 as SearchBar, Tag$1 as Tag, index$6 as VideoPlayer, index$7 as VideoPreview };

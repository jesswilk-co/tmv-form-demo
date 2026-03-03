(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      (function() {
        function defineDeprecationWarning(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              console.warn(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                info[0],
                info[1]
              );
            }
          });
        }
        function getIteratorFn(maybeIterable) {
          if (null === maybeIterable || "object" !== typeof maybeIterable)
            return null;
          maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
          return "function" === typeof maybeIterable ? maybeIterable : null;
        }
        function warnNoop(publicInstance, callerName) {
          publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
          var warningKey = publicInstance + "." + callerName;
          didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            callerName,
            publicInstance
          ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function ComponentDummy() {
        }
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function noop() {
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
          if ("string" === typeof type) return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
              return "Activity";
          }
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function getTaskName(type) {
          if (type === REACT_FRAGMENT_TYPE) return "<>";
          if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
            return "<...>";
          try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
          } catch (x) {
            return "<...>";
          }
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function UnknownOwner() {
          return Error("react-stack-top-frame");
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, props, owner, debugStack, debugTask) {
          var refProp = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.defineProperty(type, "_debugStack", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugStack
          });
          Object.defineProperty(type, "_debugTask", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugTask
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          newKey = ReactElement(
            oldElement.type,
            newKey,
            oldElement.props,
            oldElement._owner,
            oldElement._debugStack,
            oldElement._debugTask
          );
          oldElement._store && (newKey._store.validated = oldElement._store.validated);
          return newKey;
        }
        function validateChildKeys(node) {
          isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
        }
        function isValidElement(object) {
          return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function escape(key) {
          var escaperLookup = { "=": "=0", ":": "=2" };
          return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
          });
        }
        function getElementKey(element, index) {
          return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
        }
        function resolveThenable(thenable) {
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
            default:
              switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
                function(fulfilledValue) {
                  "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                },
                function(error) {
                  "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              )), thenable.status) {
                case "fulfilled":
                  return thenable.value;
                case "rejected":
                  throw thenable.reason;
              }
          }
          throw thenable;
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if ("undefined" === type || "boolean" === type) children = null;
          var invokeCallback = false;
          if (null === children) invokeCallback = true;
          else
            switch (type) {
              case "bigint":
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                    break;
                  case REACT_LAZY_TYPE:
                    return invokeCallback = children._init, mapIntoArray(
                      invokeCallback(children._payload),
                      array,
                      escapedPrefix,
                      nameSoFar,
                      callback
                    );
                }
            }
          if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
              return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
              callback,
              escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
                userProvidedKeyEscapeRegex,
                "$&/"
              ) + "/") + childKey
            ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
          }
          invokeCallback = 0;
          childKey = "" === nameSoFar ? "." : nameSoFar + ":";
          if (isArrayImpl(children))
            for (var i = 0; i < children.length; i++)
              nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if (i = getIteratorFn(children), "function" === typeof i)
            for (i === children.entries && (didWarnAboutMaps || console.warn(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
              nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if ("object" === type) {
            if ("function" === typeof children.then)
              return mapIntoArray(
                resolveThenable(children),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              );
            array = String(children);
            throw Error(
              "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
            );
          }
          return invokeCallback;
        }
        function mapChildren(children, func, context) {
          if (null == children) return children;
          var result = [], count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function lazyInitializer(payload) {
          if (-1 === payload._status) {
            var ioInfo = payload._ioInfo;
            null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
            ioInfo = payload._result;
            var thenable = ioInfo();
            thenable.then(
              function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) {
                  payload._status = 1;
                  payload._result = moduleObject;
                  var _ioInfo = payload._ioInfo;
                  null != _ioInfo && (_ioInfo.end = performance.now());
                  void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
                }
              },
              function(error) {
                if (0 === payload._status || -1 === payload._status) {
                  payload._status = 2;
                  payload._result = error;
                  var _ioInfo2 = payload._ioInfo;
                  null != _ioInfo2 && (_ioInfo2.end = performance.now());
                  void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              }
            );
            ioInfo = payload._ioInfo;
            if (null != ioInfo) {
              ioInfo.value = thenable;
              var displayName = thenable.displayName;
              "string" === typeof displayName && (ioInfo.name = displayName);
            }
            -1 === payload._status && (payload._status = 0, payload._result = thenable);
          }
          if (1 === payload._status)
            return ioInfo = payload._result, void 0 === ioInfo && console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ioInfo
            ), "default" in ioInfo || console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ioInfo
            ), ioInfo.default;
          throw payload._result;
        }
        function resolveDispatcher() {
          var dispatcher = ReactSharedInternals.H;
          null === dispatcher && console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
          return dispatcher;
        }
        function releaseAsyncTransition() {
          ReactSharedInternals.asyncTransitions--;
        }
        function enqueueTask(task) {
          if (null === enqueueTaskImpl)
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              enqueueTaskImpl = (module && module[requireString]).call(
                module,
                "timers"
              ).setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          return enqueueTaskImpl(task);
        }
        function aggregateErrors(errors) {
          return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
        }
        function popActScope(prevActQueue, prevActScopeDepth) {
          prevActScopeDepth !== actScopeDepth - 1 && console.error(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          );
          actScopeDepth = prevActScopeDepth;
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          var queue = ReactSharedInternals.actQueue;
          if (null !== queue)
            if (0 !== queue.length)
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
              } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
              }
            else ReactSharedInternals.actQueue = null;
          0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
        }
        function flushActQueue(queue) {
          if (!isFlushing) {
            isFlushing = true;
            var i = 0;
            try {
              for (; i < queue.length; i++) {
                var callback = queue[i];
                do {
                  ReactSharedInternals.didUsePromise = false;
                  var continuation = callback(false);
                  if (null !== continuation) {
                    if (ReactSharedInternals.didUsePromise) {
                      queue[i] = callback;
                      queue.splice(0, i);
                      return;
                    }
                    callback = continuation;
                  } else break;
                } while (1);
              }
              queue.length = 0;
            } catch (error) {
              queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally {
              isFlushing = false;
            }
          }
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
          isMounted: function() {
            return false;
          },
          enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
          }
        }, assign = Object.assign, emptyObject = {};
        Object.freeze(emptyObject);
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        var deprecatedAPIs = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
          ]
        };
        for (fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        ComponentDummy.prototype = Component.prototype;
        deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
        deprecatedAPIs.constructor = PureComponent;
        assign(deprecatedAPIs, Component.prototype);
        deprecatedAPIs.isPureReactComponent = true;
        var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
          H: null,
          A: null,
          T: null,
          S: null,
          actQueue: null,
          asyncTransitions: 0,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
          didUsePromise: false,
          thrownErrors: [],
          getCurrentStack: null,
          recentlyCreatedOwnerStacks: 0
        }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
          return null;
        };
        deprecatedAPIs = {
          react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
          }
        };
        var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
        var didWarnAboutElementRef = {};
        var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
          deprecatedAPIs,
          UnknownOwner
        )();
        var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
        var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
          if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
              error
            });
            if (!window.dispatchEvent(event)) return;
          } else if ("object" === typeof process && "function" === typeof process.emit) {
            process.emit("uncaughtException", error);
            return;
          }
          console.error(error);
        }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
          queueMicrotask(function() {
            return queueMicrotask(callback);
          });
        } : enqueueTask;
        deprecatedAPIs = Object.freeze({
          __proto__: null,
          c: function(size) {
            return resolveDispatcher().useMemoCache(size);
          }
        });
        var fnName = {
          map: mapChildren,
          forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(
              children,
              function() {
                forEachFunc.apply(this, arguments);
              },
              forEachContext
            );
          },
          count: function(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          },
          toArray: function(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          },
          only: function(children) {
            if (!isValidElement(children))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return children;
          }
        };
        exports.Activity = REACT_ACTIVITY_TYPE;
        exports.Children = fnName;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
        exports.__COMPILER_RUNTIME = deprecatedAPIs;
        exports.act = function(callback) {
          var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
          actScopeDepth++;
          var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
          try {
            var result = callback();
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
              didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
                "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
              ));
            });
            return {
              then: function(resolve, reject) {
                didAwaitActCall = true;
                thenable.then(
                  function(returnValue) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    if (0 === prevActScopeDepth) {
                      try {
                        flushActQueue(queue), enqueueTask(function() {
                          return recursivelyFlushAsyncActWork(
                            returnValue,
                            resolve,
                            reject
                          );
                        });
                      } catch (error$0) {
                        ReactSharedInternals.thrownErrors.push(error$0);
                      }
                      if (0 < ReactSharedInternals.thrownErrors.length) {
                        var _thrownError = aggregateErrors(
                          ReactSharedInternals.thrownErrors
                        );
                        ReactSharedInternals.thrownErrors.length = 0;
                        reject(_thrownError);
                      }
                    } else resolve(returnValue);
                  },
                  function(error) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                  }
                );
              }
            };
          }
          var returnValue$jscomp$0 = result;
          popActScope(prevActQueue, prevActScopeDepth);
          0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
            ));
          }), ReactSharedInternals.actQueue = null);
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              })) : resolve(returnValue$jscomp$0);
            }
          };
        };
        exports.cache = function(fn) {
          return function() {
            return fn.apply(null, arguments);
          };
        };
        exports.cacheSignal = function() {
          return null;
        };
        exports.captureOwnerStack = function() {
          var getCurrentStack = ReactSharedInternals.getCurrentStack;
          return null === getCurrentStack ? null : getCurrentStack();
        };
        exports.cloneElement = function(element, config, children) {
          if (null === element || void 0 === element)
            throw Error(
              "The argument must be a React element, but you passed " + element + "."
            );
          var props = assign({}, element.props), key = element.key, owner = element._owner;
          if (null != config) {
            var JSCompiler_inline_result;
            a: {
              if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
                config,
                "ref"
              ).get) && JSCompiler_inline_result.isReactWarning) {
                JSCompiler_inline_result = false;
                break a;
              }
              JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for (propName in config)
              !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
          }
          var propName = arguments.length - 2;
          if (1 === propName) props.children = children;
          else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for (var i = 0; i < propName; i++)
              JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
          }
          props = ReactElement(
            element.type,
            key,
            props,
            owner,
            element._debugStack,
            element._debugTask
          );
          for (key = 2; key < arguments.length; key++)
            validateChildKeys(arguments[key]);
          return props;
        };
        exports.createContext = function(defaultValue) {
          defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          defaultValue.Provider = defaultValue;
          defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
          };
          defaultValue._currentRenderer = null;
          defaultValue._currentRenderer2 = null;
          return defaultValue;
        };
        exports.createElement = function(type, config, children) {
          for (var i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i]);
          i = {};
          var key = null;
          if (null != config)
            for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
              "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
            )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
              hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
          var childrenLength = arguments.length - 2;
          if (1 === childrenLength) i.children = children;
          else if (1 < childrenLength) {
            for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
              childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
          }
          if (type && type.defaultProps)
            for (propName in childrenLength = type.defaultProps, childrenLength)
              void 0 === i[propName] && (i[propName] = childrenLength[propName]);
          key && defineKeyPropWarningGetter(
            i,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
          return ReactElement(
            type,
            key,
            i,
            getOwner(),
            propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
            propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
          );
        };
        exports.createRef = function() {
          var refObject = { current: null };
          Object.seal(refObject);
          return refObject;
        };
        exports.forwardRef = function(render) {
          null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          ) : "function" !== typeof render ? console.error(
            "forwardRef requires a render function but was given %s.",
            null === render ? "null" : typeof render
          ) : 0 !== render.length && 2 !== render.length && console.error(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
          );
          null != render && null != render.defaultProps && console.error(
            "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
          );
          var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
            }
          });
          return elementType;
        };
        exports.isValidElement = isValidElement;
        exports.lazy = function(ctor) {
          ctor = { _status: -1, _result: ctor };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer
          }, ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null
          };
          ctor._ioInfo = ioInfo;
          lazyType._debugInfo = [{ awaited: ioInfo }];
          return lazyType;
        };
        exports.memo = function(type, compare) {
          null == type && console.error(
            "memo: The first argument must be a component. Instead received: %s",
            null === type ? "null" : typeof type
          );
          compare = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: void 0 === compare ? null : compare
          };
          var ownName;
          Object.defineProperty(compare, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
            }
          });
          return compare;
        };
        exports.startTransition = function(scope) {
          var prevTransition = ReactSharedInternals.T, currentTransition = {};
          currentTransition._updatedFibers = /* @__PURE__ */ new Set();
          ReactSharedInternals.T = currentTransition;
          try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
          } catch (error) {
            reportGlobalError(error);
          } finally {
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
              "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
            ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
          }
        };
        exports.unstable_useCacheRefresh = function() {
          return resolveDispatcher().useCacheRefresh();
        };
        exports.use = function(usable) {
          return resolveDispatcher().use(usable);
        };
        exports.useActionState = function(action, initialState, permalink) {
          return resolveDispatcher().useActionState(
            action,
            initialState,
            permalink
          );
        };
        exports.useCallback = function(callback, deps) {
          return resolveDispatcher().useCallback(callback, deps);
        };
        exports.useContext = function(Context) {
          var dispatcher = resolveDispatcher();
          Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
            "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
          );
          return dispatcher.useContext(Context);
        };
        exports.useDebugValue = function(value, formatterFn) {
          return resolveDispatcher().useDebugValue(value, formatterFn);
        };
        exports.useDeferredValue = function(value, initialValue) {
          return resolveDispatcher().useDeferredValue(value, initialValue);
        };
        exports.useEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useEffect(create, deps);
        };
        exports.useEffectEvent = function(callback) {
          return resolveDispatcher().useEffectEvent(callback);
        };
        exports.useId = function() {
          return resolveDispatcher().useId();
        };
        exports.useImperativeHandle = function(ref, create, deps) {
          return resolveDispatcher().useImperativeHandle(ref, create, deps);
        };
        exports.useInsertionEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useInsertionEffect(create, deps);
        };
        exports.useLayoutEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useLayoutEffect(create, deps);
        };
        exports.useMemo = function(create, deps) {
          return resolveDispatcher().useMemo(create, deps);
        };
        exports.useOptimistic = function(passthrough, reducer) {
          return resolveDispatcher().useOptimistic(passthrough, reducer);
        };
        exports.useReducer = function(reducer, initialArg, init) {
          return resolveDispatcher().useReducer(reducer, initialArg, init);
        };
        exports.useRef = function(initialValue) {
          return resolveDispatcher().useRef(initialValue);
        };
        exports.useState = function(initialState) {
          return resolveDispatcher().useState(initialState);
        };
        exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
          return resolveDispatcher().useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        };
        exports.useTransition = function() {
          return resolveDispatcher().useTransition();
        };
        exports.version = "19.2.4";
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // booking-form.jsx
  var import_react = __toESM(require_react());
  var CATEGORIES = [
    {
      id: "unwell",
      icon: "\u2764\uFE0F\u200D\u{1FA79}",
      label: "Feeling unwell",
      description: "Vomiting, diarrhoea, breathing issues, urinary problems, or other symptoms",
      types: [
        "Digestive issue",
        "Respiratory Issue",
        "Urinary Problem",
        "Chronic condition & Treatment management"
      ]
    },
    {
      id: "skin-eyes-ears",
      icon: "\u{1F640}",
      label: "Skin, eyes or ears",
      description: "Itching, rashes, discharge, lumps, bumps, or growths",
      types: [
        "Skin Condition",
        "Eye Condition",
        "Ear Condition",
        "Lumps/Bumps/Growths"
      ]
    },
    {
      id: "mobility",
      icon: "\u{1F43E}",
      label: "Mobility or pain",
      description: "Limping, stiffness, difficulty moving, or signs of pain",
      types: ["Mobility Concern"]
    },
    {
      id: "routine",
      icon: "\u{1F489}",
      label: "Routine care",
      description: "Vaccinations, health checks, or preventative treatments",
      types: ["Vaccinations, Health Examination & Preventative Care"]
    },
    {
      id: "travel",
      icon: "\u2708\uFE0F",
      label: "Travel certificates",
      description: "Health certificates or travel documentation",
      types: ["Travel Certification or Rabies Vaccine"]
    },
    {
      id: "endoflife",
      icon: "\u{1F54A}\uFE0F",
      label: "End-of-life care",
      description: "Compassionate guidance, pain management or saying goodbye peacefully",
      types: ["End-of-life & Compassionate Care"]
    },
    {
      id: "other",
      icon: "\u{1F4CB}",
      label: "Something else",
      description: "Anything not listed above",
      types: ["Something else"]
    }
  ];
  var SPECIES_OPTIONS = [
    { id: "dog", icon: "\u{1F415}", label: "Dog" },
    { id: "cat", icon: "\u{1F408}", label: "Cat" },
    { id: "rabbit", icon: "\u{1F407}", label: "Rabbit" },
    { id: "other", icon: "\u{1F43E}", label: "Other" }
  ];
  var TIME_PREFS = [
    { id: "morning", label: "Morning", sub: "8 am \u2013 12 pm" },
    { id: "afternoon", label: "Afternoon", sub: "12 \u2013 4 pm" },
    { id: "evening", label: "Evening", sub: "4 \u2013 6 pm" },
    { id: "flexible", label: "I'm flexible", sub: "Any time works" }
  ];
  function ProgressBar({ step, total }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 32 } }, Array.from({ length: total }).map((_, i) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: i,
        style: {
          flex: 1,
          height: 4,
          borderRadius: 2,
          background: i <= step ? "#1a6b5a" : "#e2e8f0",
          transition: "background 0.3s ease"
        }
      }
    )));
  }
  function BookingForm() {
    const [step, setStep] = (0, import_react.useState)(0);
    const [data, setData] = (0, import_react.useState)({
      category: null,
      appointmentType: null,
      species: null,
      otherSpecies: "",
      petName: "",
      ownerName: "",
      phone: "",
      email: "",
      date: "",
      timePref: null,
      notes: ""
    });
    const [errors, setErrors] = (0, import_react.useState)({});
    const [submitted, setSubmitted] = (0, import_react.useState)(false);
    const update = (fields) => {
      setData((prev) => ({ ...prev, ...fields }));
      setErrors({});
    };
    const selectedCategory = CATEGORIES.find((c) => c.id === data.category);
    const validateStep = (s) => {
      const e = {};
      if (s === 0 && !data.category) e.category = true;
      if (s === 1 && selectedCategory?.types.length > 1 && !data.appointmentType)
        e.appointmentType = true;
      if (s === 2) {
        if (!data.species) e.species = true;
        if (data.species === "other" && !data.otherSpecies.trim()) e.otherSpecies = true;
        if (!data.petName.trim()) e.petName = true;
      }
      if (s === 3) {
        if (!data.ownerName.trim()) e.ownerName = true;
        if (!data.phone.trim()) e.phone = true;
        if (!data.email.trim()) e.email = true;
        else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = true;
      }
      if (s === 4) {
        if (!data.date) e.date = true;
        if (!data.timePref) e.timePref = true;
      }
      setErrors(e);
      return Object.keys(e).length === 0;
    };
    const next = () => {
      if (!validateStep(step)) return;
      if (step === 0 && selectedCategory?.types.length === 1) {
        update({ appointmentType: selectedCategory.types[0] });
        setStep(2);
        return;
      }
      if (step === 1 && data.appointmentType) {
        setStep(2);
        return;
      }
      setStep((s) => s + 1);
    };
    const back = () => {
      setErrors({});
      if (step === 2 && selectedCategory?.types.length === 1) {
        setStep(0);
        return;
      }
      setStep((s) => s - 1);
    };
    const accent = "#1a6b5a";
    const accentLight = "#e8f5f1";
    const accentHover = "#15584a";
    const errorColor = "#dc2626";
    const bg = "#ffffff";
    const cardBorder = "#e2e8f0";
    const containerStyle = {
      maxWidth: 520,
      margin: "0 auto",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: "#1e293b",
      padding: "40px 24px"
    };
    const headingStyle = {
      fontSize: 22,
      fontWeight: 700,
      margin: "0 0 6px 0",
      color: "#0f172a"
    };
    const subStyle = {
      fontSize: 14,
      color: "#64748b",
      margin: "0 0 24px 0",
      lineHeight: 1.5
    };
    const cardStyle = (selected, hasError) => ({
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 16px",
      border: `2px solid ${selected ? accent : hasError ? errorColor : cardBorder}`,
      borderRadius: 12,
      cursor: "pointer",
      background: selected ? accentLight : bg,
      transition: "all 0.15s ease"
    });
    const btnPrimary = {
      width: "100%",
      padding: "14px 24px",
      fontSize: 16,
      fontWeight: 600,
      color: "#fff",
      background: accent,
      border: "none",
      borderRadius: 10,
      cursor: "pointer",
      transition: "background 0.15s"
    };
    const btnSecondary = {
      width: "100%",
      padding: "14px 24px",
      fontSize: 16,
      fontWeight: 500,
      color: "#64748b",
      background: "transparent",
      border: `1px solid ${cardBorder}`,
      borderRadius: 10,
      cursor: "pointer"
    };
    const inputStyle = (hasError) => ({
      width: "100%",
      padding: "12px 14px",
      fontSize: 15,
      border: `1.5px solid ${hasError ? errorColor : "#d1d5db"}`,
      borderRadius: 10,
      outline: "none",
      boxSizing: "border-box",
      transition: "border-color 0.15s",
      fontFamily: "inherit"
    });
    const labelStyle = {
      display: "block",
      fontSize: 13,
      fontWeight: 600,
      color: "#374151",
      marginBottom: 6
    };
    const errorMsg = {
      fontSize: 12,
      color: errorColor,
      marginTop: 4
    };
    if (submitted) {
      return /* @__PURE__ */ React.createElement("div", { style: containerStyle }, /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            textAlign: "center",
            padding: "40px 0"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 56, marginBottom: 16 } }, "\u2713"),
        /* @__PURE__ */ React.createElement("h2", { style: { ...headingStyle, fontSize: 24, marginBottom: 8 } }, "Booking request sent!"),
        /* @__PURE__ */ React.createElement("p", { style: { ...subStyle, marginBottom: 32, maxWidth: 360, marginLeft: "auto", marginRight: "auto" } }, "We'll confirm your appointment by phone or email within a few hours. If it's urgent, give us a call."),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              background: "#f8fafc",
              borderRadius: 12,
              padding: "20px 24px",
              textAlign: "left",
              marginBottom: 32
            }
          },
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#64748b", marginBottom: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" } }, "Summary"),
          /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 10 } }, [
            ["Pet", `${data.petName} (${data.species === "other" ? data.otherSpecies : data.species})`],
            ["Reason", data.appointmentType],
            ["Preferred date", data.date],
            [
              "Time",
              TIME_PREFS.find((t) => t.id === data.timePref)?.label
            ]
          ].map(([l, v]) => /* @__PURE__ */ React.createElement(
            "div",
            {
              key: l,
              style: {
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14
              }
            },
            /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, l),
            /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 500 } }, v)
          )))
        ),
        /* @__PURE__ */ React.createElement(
          "button",
          {
            style: btnPrimary,
            onClick: () => {
              setSubmitted(false);
              setStep(0);
              setData({
                category: null,
                appointmentType: null,
                species: null,
                otherSpecies: "",
                petName: "",
                ownerName: "",
                phone: "",
                email: "",
                date: "",
                timePref: null,
                notes: ""
              });
            }
          },
          "Book another appointment"
        )
      ));
    }
    const totalSteps = 5;
    return /* @__PURE__ */ React.createElement("div", { style: containerStyle }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 } }, "Tony's Mobile Vets")), /* @__PURE__ */ React.createElement(ProgressBar, { step, total: totalSteps }), step === 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: headingStyle }, "What's going on with your pet?"), /* @__PURE__ */ React.createElement("p", { style: subStyle }, "Pick the option that best describes your situation \u2014 don't worry, you don't need to be exact."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 10 } }, CATEGORIES.map((cat) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: cat.id,
        style: cardStyle(data.category === cat.id, errors.category),
        onClick: () => update({ category: cat.id, appointmentType: null }),
        role: "button",
        tabIndex: 0
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 26, flexShrink: 0 } }, cat.icon),
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, fontSize: 15 } }, cat.label), /* @__PURE__ */ React.createElement(
        "div",
        {
          style: { fontSize: 13, color: "#64748b", lineHeight: 1.4, marginTop: 2 }
        },
        cat.description
      ))
    ))), errors.category && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please select an option to continue"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24 } }, /* @__PURE__ */ React.createElement("button", { style: btnPrimary, onClick: next }, "Continue"))), step === 1 && selectedCategory && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: headingStyle }, "Can you be more specific?"), /* @__PURE__ */ React.createElement("p", { style: subStyle }, "This helps our vets prepare for the visit."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 10 } }, selectedCategory.types.map((type) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: type,
        style: cardStyle(
          data.appointmentType === type,
          errors.appointmentType
        ),
        onClick: () => update({ appointmentType: type }),
        role: "button",
        tabIndex: 0
      },
      /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, fontSize: 15 } }, type)
    ))), errors.appointmentType && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please select one"), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginTop: 24
        }
      },
      /* @__PURE__ */ React.createElement("button", { style: btnSecondary, onClick: back }, "Back"),
      /* @__PURE__ */ React.createElement("button", { style: btnPrimary, onClick: next }, "Continue")
    )), step === 2 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: headingStyle }, "Tell us about your pet"), /* @__PURE__ */ React.createElement("p", { style: subStyle }, "So we know who we're visiting!"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "What kind of pet?"), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8
        }
      },
      SPECIES_OPTIONS.map((s) => /* @__PURE__ */ React.createElement(
        "div",
        {
          key: s.id,
          onClick: () => update({ species: s.id }),
          role: "button",
          tabIndex: 0,
          style: {
            textAlign: "center",
            padding: "14px 8px",
            border: `2px solid ${data.species === s.id ? accent : errors.species ? errorColor : cardBorder}`,
            borderRadius: 12,
            cursor: "pointer",
            background: data.species === s.id ? accentLight : bg,
            transition: "all 0.15s"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28 } }, s.icon),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              fontSize: 13,
              fontWeight: 600,
              marginTop: 4,
              color: data.species === s.id ? accent : "#374151"
            }
          },
          s.label
        )
      ))
    ), errors.species && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please select a species")), data.species === "other" && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "What type of pet?"), /* @__PURE__ */ React.createElement(
      "input",
      {
        style: inputStyle(errors.otherSpecies),
        placeholder: "e.g. Guinea pig, bird, tortoise",
        value: data.otherSpecies,
        onChange: (e) => update({ otherSpecies: e.target.value })
      }
    ), errors.otherSpecies && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please tell us what kind of pet")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Pet's name"), /* @__PURE__ */ React.createElement(
      "input",
      {
        style: inputStyle(errors.petName),
        placeholder: "e.g. Bella",
        value: data.petName,
        onChange: (e) => update({ petName: e.target.value })
      }
    ), errors.petName && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please enter your pet's name")), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginTop: 24
        }
      },
      /* @__PURE__ */ React.createElement("button", { style: btnSecondary, onClick: back }, "Back"),
      /* @__PURE__ */ React.createElement("button", { style: btnPrimary, onClick: next }, "Continue")
    )), step === 3 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: headingStyle }, "Your details"), /* @__PURE__ */ React.createElement("p", { style: subStyle }, "We'll use this to confirm your booking."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Your name"), /* @__PURE__ */ React.createElement(
      "input",
      {
        style: inputStyle(errors.ownerName),
        placeholder: "Full name",
        value: data.ownerName,
        onChange: (e) => update({ ownerName: e.target.value })
      }
    ), errors.ownerName && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please enter your name")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Phone number"), /* @__PURE__ */ React.createElement(
      "input",
      {
        style: inputStyle(errors.phone),
        placeholder: "07xxx xxx xxx",
        type: "tel",
        value: data.phone,
        onChange: (e) => update({ phone: e.target.value })
      }
    ), errors.phone && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please enter a phone number")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Email address"), /* @__PURE__ */ React.createElement(
      "input",
      {
        style: inputStyle(errors.email),
        placeholder: "you@example.com",
        type: "email",
        value: data.email,
        onChange: (e) => update({ email: e.target.value })
      }
    ), errors.email && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please enter a valid email"))), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginTop: 24
        }
      },
      /* @__PURE__ */ React.createElement("button", { style: btnSecondary, onClick: back }, "Back"),
      /* @__PURE__ */ React.createElement("button", { style: btnPrimary, onClick: next }, "Continue")
    )), step === 4 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: headingStyle }, "When works for you?"), /* @__PURE__ */ React.createElement("p", { style: subStyle }, "Pick a preferred date and time \u2014 we'll confirm availability."), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Preferred date"), /* @__PURE__ */ React.createElement(
      "input",
      {
        style: inputStyle(errors.date),
        type: "date",
        value: data.date,
        min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        onChange: (e) => update({ date: e.target.value })
      }
    ), errors.date && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please pick a date")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Preferred time"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, TIME_PREFS.map((t) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: t.id,
        onClick: () => update({ timePref: t.id }),
        role: "button",
        tabIndex: 0,
        style: {
          padding: "12px 14px",
          border: `2px solid ${data.timePref === t.id ? accent : errors.timePref ? errorColor : cardBorder}`,
          borderRadius: 10,
          cursor: "pointer",
          background: data.timePref === t.id ? accentLight : bg,
          transition: "all 0.15s"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, fontSize: 14 } }, t.label),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#64748b", marginTop: 2 } }, t.sub)
    ))), errors.timePref && /* @__PURE__ */ React.createElement("div", { style: errorMsg }, "Please select a time preference")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 8 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Anything else we should know?", " ", /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 400, color: "#94a3b8" } }, "Optional")), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        style: {
          ...inputStyle(false),
          minHeight: 80,
          resize: "vertical"
        },
        placeholder: "e.g. My dog is nervous around strangers, please approach slowly",
        value: data.notes,
        onChange: (e) => update({ notes: e.target.value })
      }
    )), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginTop: 24
        }
      },
      /* @__PURE__ */ React.createElement("button", { style: btnSecondary, onClick: back }, "Back"),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          style: btnPrimary,
          onClick: () => {
            if (validateStep(4)) setSubmitted(true);
          }
        },
        "Request appointment"
      )
    ), /* @__PURE__ */ React.createElement(
      "p",
      {
        style: {
          fontSize: 12,
          color: "#94a3b8",
          textAlign: "center",
          marginTop: 16,
          lineHeight: 1.5
        }
      },
      "This sends a request \u2014 we'll confirm by phone or email. No payment is taken now."
    )));
  }
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

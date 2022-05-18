(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["chain-node-tracker"] = {}));
})(this, (function (exports) { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var createClass = {exports: {}};

	(function (module) {
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
		  Object.defineProperty(Constructor, "prototype", {
		    writable: false
		  });
		  return Constructor;
		}

		module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (createClass));

	var _createClass = /*@__PURE__*/getDefaultExportFromCjs(createClass.exports);

	var classCallCheck = {exports: {}};

	(function (module) {
		function _classCallCheck(instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		}

		module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (classCallCheck));

	var _classCallCheck = /*@__PURE__*/getDefaultExportFromCjs(classCallCheck.exports);

	var LocalAdapter = /*#__PURE__*/_createClass(function LocalAdapter() {
	  _classCallCheck(this, LocalAdapter);
	});

	var RemoteAdapter = /*#__PURE__*/_createClass(function RemoteAdapter() {
	  _classCallCheck(this, RemoteAdapter);
	});

	var slicedToArray = {exports: {}};

	var arrayWithHoles = {exports: {}};

	(function (module) {
		function _arrayWithHoles(arr) {
		  if (Array.isArray(arr)) return arr;
		}

		module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (arrayWithHoles));

	var iterableToArrayLimit = {exports: {}};

	(function (module) {
		function _iterableToArrayLimit(arr, i) {
		  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

		  if (_i == null) return;
		  var _arr = [];
		  var _n = true;
		  var _d = false;

		  var _s, _e;

		  try {
		    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

		module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (iterableToArrayLimit));

	var unsupportedIterableToArray = {exports: {}};

	var arrayLikeToArray = {exports: {}};

	(function (module) {
		function _arrayLikeToArray(arr, len) {
		  if (len == null || len > arr.length) len = arr.length;

		  for (var i = 0, arr2 = new Array(len); i < len; i++) {
		    arr2[i] = arr[i];
		  }

		  return arr2;
		}

		module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (arrayLikeToArray));

	(function (module) {
		var arrayLikeToArray$1 = arrayLikeToArray.exports;

		function _unsupportedIterableToArray(o, minLen) {
		  if (!o) return;
		  if (typeof o === "string") return arrayLikeToArray$1(o, minLen);
		  var n = Object.prototype.toString.call(o).slice(8, -1);
		  if (n === "Object" && o.constructor) n = o.constructor.name;
		  if (n === "Map" || n === "Set") return Array.from(o);
		  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray$1(o, minLen);
		}

		module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (unsupportedIterableToArray));

	var nonIterableRest = {exports: {}};

	(function (module) {
		function _nonIterableRest() {
		  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}

		module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (nonIterableRest));

	(function (module) {
		var arrayWithHoles$1 = arrayWithHoles.exports;

		var iterableToArrayLimit$1 = iterableToArrayLimit.exports;

		var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;

		var nonIterableRest$1 = nonIterableRest.exports;

		function _slicedToArray(arr, i) {
		  return arrayWithHoles$1(arr) || iterableToArrayLimit$1(arr, i) || unsupportedIterableToArray$1(arr, i) || nonIterableRest$1();
		}

		module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (slicedToArray));

	var _slicedToArray = /*@__PURE__*/getDefaultExportFromCjs(slicedToArray.exports);

	var asyncToGenerator = {exports: {}};

	(function (module) {
		function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		  try {
		    var info = gen[key](arg);
		    var value = info.value;
		  } catch (error) {
		    reject(error);
		    return;
		  }

		  if (info.done) {
		    resolve(value);
		  } else {
		    Promise.resolve(value).then(_next, _throw);
		  }
		}

		function _asyncToGenerator(fn) {
		  return function () {
		    var self = this,
		        args = arguments;
		    return new Promise(function (resolve, reject) {
		      var gen = fn.apply(self, args);

		      function _next(value) {
		        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
		      }

		      function _throw(err) {
		        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
		      }

		      _next(undefined);
		    });
		  };
		}

		module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (asyncToGenerator));

	var _asyncToGenerator = /*@__PURE__*/getDefaultExportFromCjs(asyncToGenerator.exports);

	var regenerator = {exports: {}};

	var runtime = {exports: {}};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (module) {
		var runtime = (function (exports) {

		  var Op = Object.prototype;
		  var hasOwn = Op.hasOwnProperty;
		  var undefined$1; // More compressible than void 0.
		  var $Symbol = typeof Symbol === "function" ? Symbol : {};
		  var iteratorSymbol = $Symbol.iterator || "@@iterator";
		  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
		  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

		  function define(obj, key, value) {
		    Object.defineProperty(obj, key, {
		      value: value,
		      enumerable: true,
		      configurable: true,
		      writable: true
		    });
		    return obj[key];
		  }
		  try {
		    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
		    define({}, "");
		  } catch (err) {
		    define = function(obj, key, value) {
		      return obj[key] = value;
		    };
		  }

		  function wrap(innerFn, outerFn, self, tryLocsList) {
		    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
		    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
		    var generator = Object.create(protoGenerator.prototype);
		    var context = new Context(tryLocsList || []);

		    // The ._invoke method unifies the implementations of the .next,
		    // .throw, and .return methods.
		    generator._invoke = makeInvokeMethod(innerFn, self, context);

		    return generator;
		  }
		  exports.wrap = wrap;

		  // Try/catch helper to minimize deoptimizations. Returns a completion
		  // record like context.tryEntries[i].completion. This interface could
		  // have been (and was previously) designed to take a closure to be
		  // invoked without arguments, but in all the cases we care about we
		  // already have an existing method we want to call, so there's no need
		  // to create a new function object. We can even get away with assuming
		  // the method takes exactly one argument, since that happens to be true
		  // in every case, so we don't have to touch the arguments object. The
		  // only additional allocation required is the completion record, which
		  // has a stable shape and so hopefully should be cheap to allocate.
		  function tryCatch(fn, obj, arg) {
		    try {
		      return { type: "normal", arg: fn.call(obj, arg) };
		    } catch (err) {
		      return { type: "throw", arg: err };
		    }
		  }

		  var GenStateSuspendedStart = "suspendedStart";
		  var GenStateSuspendedYield = "suspendedYield";
		  var GenStateExecuting = "executing";
		  var GenStateCompleted = "completed";

		  // Returning this object from the innerFn has the same effect as
		  // breaking out of the dispatch switch statement.
		  var ContinueSentinel = {};

		  // Dummy constructor functions that we use as the .constructor and
		  // .constructor.prototype properties for functions that return Generator
		  // objects. For full spec compliance, you may wish to configure your
		  // minifier not to mangle the names of these two functions.
		  function Generator() {}
		  function GeneratorFunction() {}
		  function GeneratorFunctionPrototype() {}

		  // This is a polyfill for %IteratorPrototype% for environments that
		  // don't natively support it.
		  var IteratorPrototype = {};
		  define(IteratorPrototype, iteratorSymbol, function () {
		    return this;
		  });

		  var getProto = Object.getPrototypeOf;
		  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
		  if (NativeIteratorPrototype &&
		      NativeIteratorPrototype !== Op &&
		      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
		    // This environment has a native %IteratorPrototype%; use it instead
		    // of the polyfill.
		    IteratorPrototype = NativeIteratorPrototype;
		  }

		  var Gp = GeneratorFunctionPrototype.prototype =
		    Generator.prototype = Object.create(IteratorPrototype);
		  GeneratorFunction.prototype = GeneratorFunctionPrototype;
		  define(Gp, "constructor", GeneratorFunctionPrototype);
		  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
		  GeneratorFunction.displayName = define(
		    GeneratorFunctionPrototype,
		    toStringTagSymbol,
		    "GeneratorFunction"
		  );

		  // Helper for defining the .next, .throw, and .return methods of the
		  // Iterator interface in terms of a single ._invoke method.
		  function defineIteratorMethods(prototype) {
		    ["next", "throw", "return"].forEach(function(method) {
		      define(prototype, method, function(arg) {
		        return this._invoke(method, arg);
		      });
		    });
		  }

		  exports.isGeneratorFunction = function(genFun) {
		    var ctor = typeof genFun === "function" && genFun.constructor;
		    return ctor
		      ? ctor === GeneratorFunction ||
		        // For the native GeneratorFunction constructor, the best we can
		        // do is to check its .name property.
		        (ctor.displayName || ctor.name) === "GeneratorFunction"
		      : false;
		  };

		  exports.mark = function(genFun) {
		    if (Object.setPrototypeOf) {
		      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
		    } else {
		      genFun.__proto__ = GeneratorFunctionPrototype;
		      define(genFun, toStringTagSymbol, "GeneratorFunction");
		    }
		    genFun.prototype = Object.create(Gp);
		    return genFun;
		  };

		  // Within the body of any async function, `await x` is transformed to
		  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
		  // `hasOwn.call(value, "__await")` to determine if the yielded value is
		  // meant to be awaited.
		  exports.awrap = function(arg) {
		    return { __await: arg };
		  };

		  function AsyncIterator(generator, PromiseImpl) {
		    function invoke(method, arg, resolve, reject) {
		      var record = tryCatch(generator[method], generator, arg);
		      if (record.type === "throw") {
		        reject(record.arg);
		      } else {
		        var result = record.arg;
		        var value = result.value;
		        if (value &&
		            typeof value === "object" &&
		            hasOwn.call(value, "__await")) {
		          return PromiseImpl.resolve(value.__await).then(function(value) {
		            invoke("next", value, resolve, reject);
		          }, function(err) {
		            invoke("throw", err, resolve, reject);
		          });
		        }

		        return PromiseImpl.resolve(value).then(function(unwrapped) {
		          // When a yielded Promise is resolved, its final value becomes
		          // the .value of the Promise<{value,done}> result for the
		          // current iteration.
		          result.value = unwrapped;
		          resolve(result);
		        }, function(error) {
		          // If a rejected Promise was yielded, throw the rejection back
		          // into the async generator function so it can be handled there.
		          return invoke("throw", error, resolve, reject);
		        });
		      }
		    }

		    var previousPromise;

		    function enqueue(method, arg) {
		      function callInvokeWithMethodAndArg() {
		        return new PromiseImpl(function(resolve, reject) {
		          invoke(method, arg, resolve, reject);
		        });
		      }

		      return previousPromise =
		        // If enqueue has been called before, then we want to wait until
		        // all previous Promises have been resolved before calling invoke,
		        // so that results are always delivered in the correct order. If
		        // enqueue has not been called before, then it is important to
		        // call invoke immediately, without waiting on a callback to fire,
		        // so that the async generator function has the opportunity to do
		        // any necessary setup in a predictable way. This predictability
		        // is why the Promise constructor synchronously invokes its
		        // executor callback, and why async functions synchronously
		        // execute code before the first await. Since we implement simple
		        // async functions in terms of async generators, it is especially
		        // important to get this right, even though it requires care.
		        previousPromise ? previousPromise.then(
		          callInvokeWithMethodAndArg,
		          // Avoid propagating failures to Promises returned by later
		          // invocations of the iterator.
		          callInvokeWithMethodAndArg
		        ) : callInvokeWithMethodAndArg();
		    }

		    // Define the unified helper method that is used to implement .next,
		    // .throw, and .return (see defineIteratorMethods).
		    this._invoke = enqueue;
		  }

		  defineIteratorMethods(AsyncIterator.prototype);
		  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
		    return this;
		  });
		  exports.AsyncIterator = AsyncIterator;

		  // Note that simple async functions are implemented on top of
		  // AsyncIterator objects; they just return a Promise for the value of
		  // the final result produced by the iterator.
		  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
		    if (PromiseImpl === void 0) PromiseImpl = Promise;

		    var iter = new AsyncIterator(
		      wrap(innerFn, outerFn, self, tryLocsList),
		      PromiseImpl
		    );

		    return exports.isGeneratorFunction(outerFn)
		      ? iter // If outerFn is a generator, return the full iterator.
		      : iter.next().then(function(result) {
		          return result.done ? result.value : iter.next();
		        });
		  };

		  function makeInvokeMethod(innerFn, self, context) {
		    var state = GenStateSuspendedStart;

		    return function invoke(method, arg) {
		      if (state === GenStateExecuting) {
		        throw new Error("Generator is already running");
		      }

		      if (state === GenStateCompleted) {
		        if (method === "throw") {
		          throw arg;
		        }

		        // Be forgiving, per 25.3.3.3.3 of the spec:
		        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
		        return doneResult();
		      }

		      context.method = method;
		      context.arg = arg;

		      while (true) {
		        var delegate = context.delegate;
		        if (delegate) {
		          var delegateResult = maybeInvokeDelegate(delegate, context);
		          if (delegateResult) {
		            if (delegateResult === ContinueSentinel) continue;
		            return delegateResult;
		          }
		        }

		        if (context.method === "next") {
		          // Setting context._sent for legacy support of Babel's
		          // function.sent implementation.
		          context.sent = context._sent = context.arg;

		        } else if (context.method === "throw") {
		          if (state === GenStateSuspendedStart) {
		            state = GenStateCompleted;
		            throw context.arg;
		          }

		          context.dispatchException(context.arg);

		        } else if (context.method === "return") {
		          context.abrupt("return", context.arg);
		        }

		        state = GenStateExecuting;

		        var record = tryCatch(innerFn, self, context);
		        if (record.type === "normal") {
		          // If an exception is thrown from innerFn, we leave state ===
		          // GenStateExecuting and loop back for another invocation.
		          state = context.done
		            ? GenStateCompleted
		            : GenStateSuspendedYield;

		          if (record.arg === ContinueSentinel) {
		            continue;
		          }

		          return {
		            value: record.arg,
		            done: context.done
		          };

		        } else if (record.type === "throw") {
		          state = GenStateCompleted;
		          // Dispatch the exception by looping back around to the
		          // context.dispatchException(context.arg) call above.
		          context.method = "throw";
		          context.arg = record.arg;
		        }
		      }
		    };
		  }

		  // Call delegate.iterator[context.method](context.arg) and handle the
		  // result, either by returning a { value, done } result from the
		  // delegate iterator, or by modifying context.method and context.arg,
		  // setting context.delegate to null, and returning the ContinueSentinel.
		  function maybeInvokeDelegate(delegate, context) {
		    var method = delegate.iterator[context.method];
		    if (method === undefined$1) {
		      // A .throw or .return when the delegate iterator has no .throw
		      // method always terminates the yield* loop.
		      context.delegate = null;

		      if (context.method === "throw") {
		        // Note: ["return"] must be used for ES3 parsing compatibility.
		        if (delegate.iterator["return"]) {
		          // If the delegate iterator has a return method, give it a
		          // chance to clean up.
		          context.method = "return";
		          context.arg = undefined$1;
		          maybeInvokeDelegate(delegate, context);

		          if (context.method === "throw") {
		            // If maybeInvokeDelegate(context) changed context.method from
		            // "return" to "throw", let that override the TypeError below.
		            return ContinueSentinel;
		          }
		        }

		        context.method = "throw";
		        context.arg = new TypeError(
		          "The iterator does not provide a 'throw' method");
		      }

		      return ContinueSentinel;
		    }

		    var record = tryCatch(method, delegate.iterator, context.arg);

		    if (record.type === "throw") {
		      context.method = "throw";
		      context.arg = record.arg;
		      context.delegate = null;
		      return ContinueSentinel;
		    }

		    var info = record.arg;

		    if (! info) {
		      context.method = "throw";
		      context.arg = new TypeError("iterator result is not an object");
		      context.delegate = null;
		      return ContinueSentinel;
		    }

		    if (info.done) {
		      // Assign the result of the finished delegate to the temporary
		      // variable specified by delegate.resultName (see delegateYield).
		      context[delegate.resultName] = info.value;

		      // Resume execution at the desired location (see delegateYield).
		      context.next = delegate.nextLoc;

		      // If context.method was "throw" but the delegate handled the
		      // exception, let the outer generator proceed normally. If
		      // context.method was "next", forget context.arg since it has been
		      // "consumed" by the delegate iterator. If context.method was
		      // "return", allow the original .return call to continue in the
		      // outer generator.
		      if (context.method !== "return") {
		        context.method = "next";
		        context.arg = undefined$1;
		      }

		    } else {
		      // Re-yield the result returned by the delegate method.
		      return info;
		    }

		    // The delegate iterator is finished, so forget it and continue with
		    // the outer generator.
		    context.delegate = null;
		    return ContinueSentinel;
		  }

		  // Define Generator.prototype.{next,throw,return} in terms of the
		  // unified ._invoke helper method.
		  defineIteratorMethods(Gp);

		  define(Gp, toStringTagSymbol, "Generator");

		  // A Generator should always return itself as the iterator object when the
		  // @@iterator function is called on it. Some browsers' implementations of the
		  // iterator prototype chain incorrectly implement this, causing the Generator
		  // object to not be returned from this call. This ensures that doesn't happen.
		  // See https://github.com/facebook/regenerator/issues/274 for more details.
		  define(Gp, iteratorSymbol, function() {
		    return this;
		  });

		  define(Gp, "toString", function() {
		    return "[object Generator]";
		  });

		  function pushTryEntry(locs) {
		    var entry = { tryLoc: locs[0] };

		    if (1 in locs) {
		      entry.catchLoc = locs[1];
		    }

		    if (2 in locs) {
		      entry.finallyLoc = locs[2];
		      entry.afterLoc = locs[3];
		    }

		    this.tryEntries.push(entry);
		  }

		  function resetTryEntry(entry) {
		    var record = entry.completion || {};
		    record.type = "normal";
		    delete record.arg;
		    entry.completion = record;
		  }

		  function Context(tryLocsList) {
		    // The root entry object (effectively a try statement without a catch
		    // or a finally block) gives us a place to store values thrown from
		    // locations where there is no enclosing try statement.
		    this.tryEntries = [{ tryLoc: "root" }];
		    tryLocsList.forEach(pushTryEntry, this);
		    this.reset(true);
		  }

		  exports.keys = function(object) {
		    var keys = [];
		    for (var key in object) {
		      keys.push(key);
		    }
		    keys.reverse();

		    // Rather than returning an object with a next method, we keep
		    // things simple and return the next function itself.
		    return function next() {
		      while (keys.length) {
		        var key = keys.pop();
		        if (key in object) {
		          next.value = key;
		          next.done = false;
		          return next;
		        }
		      }

		      // To avoid creating an additional object, we just hang the .value
		      // and .done properties off the next function object itself. This
		      // also ensures that the minifier will not anonymize the function.
		      next.done = true;
		      return next;
		    };
		  };

		  function values(iterable) {
		    if (iterable) {
		      var iteratorMethod = iterable[iteratorSymbol];
		      if (iteratorMethod) {
		        return iteratorMethod.call(iterable);
		      }

		      if (typeof iterable.next === "function") {
		        return iterable;
		      }

		      if (!isNaN(iterable.length)) {
		        var i = -1, next = function next() {
		          while (++i < iterable.length) {
		            if (hasOwn.call(iterable, i)) {
		              next.value = iterable[i];
		              next.done = false;
		              return next;
		            }
		          }

		          next.value = undefined$1;
		          next.done = true;

		          return next;
		        };

		        return next.next = next;
		      }
		    }

		    // Return an iterator with no values.
		    return { next: doneResult };
		  }
		  exports.values = values;

		  function doneResult() {
		    return { value: undefined$1, done: true };
		  }

		  Context.prototype = {
		    constructor: Context,

		    reset: function(skipTempReset) {
		      this.prev = 0;
		      this.next = 0;
		      // Resetting context._sent for legacy support of Babel's
		      // function.sent implementation.
		      this.sent = this._sent = undefined$1;
		      this.done = false;
		      this.delegate = null;

		      this.method = "next";
		      this.arg = undefined$1;

		      this.tryEntries.forEach(resetTryEntry);

		      if (!skipTempReset) {
		        for (var name in this) {
		          // Not sure about the optimal order of these conditions:
		          if (name.charAt(0) === "t" &&
		              hasOwn.call(this, name) &&
		              !isNaN(+name.slice(1))) {
		            this[name] = undefined$1;
		          }
		        }
		      }
		    },

		    stop: function() {
		      this.done = true;

		      var rootEntry = this.tryEntries[0];
		      var rootRecord = rootEntry.completion;
		      if (rootRecord.type === "throw") {
		        throw rootRecord.arg;
		      }

		      return this.rval;
		    },

		    dispatchException: function(exception) {
		      if (this.done) {
		        throw exception;
		      }

		      var context = this;
		      function handle(loc, caught) {
		        record.type = "throw";
		        record.arg = exception;
		        context.next = loc;

		        if (caught) {
		          // If the dispatched exception was caught by a catch block,
		          // then let that catch block handle the exception normally.
		          context.method = "next";
		          context.arg = undefined$1;
		        }

		        return !! caught;
		      }

		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        var record = entry.completion;

		        if (entry.tryLoc === "root") {
		          // Exception thrown outside of any try block that could handle
		          // it, so set the completion value of the entire function to
		          // throw the exception.
		          return handle("end");
		        }

		        if (entry.tryLoc <= this.prev) {
		          var hasCatch = hasOwn.call(entry, "catchLoc");
		          var hasFinally = hasOwn.call(entry, "finallyLoc");

		          if (hasCatch && hasFinally) {
		            if (this.prev < entry.catchLoc) {
		              return handle(entry.catchLoc, true);
		            } else if (this.prev < entry.finallyLoc) {
		              return handle(entry.finallyLoc);
		            }

		          } else if (hasCatch) {
		            if (this.prev < entry.catchLoc) {
		              return handle(entry.catchLoc, true);
		            }

		          } else if (hasFinally) {
		            if (this.prev < entry.finallyLoc) {
		              return handle(entry.finallyLoc);
		            }

		          } else {
		            throw new Error("try statement without catch or finally");
		          }
		        }
		      }
		    },

		    abrupt: function(type, arg) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.tryLoc <= this.prev &&
		            hasOwn.call(entry, "finallyLoc") &&
		            this.prev < entry.finallyLoc) {
		          var finallyEntry = entry;
		          break;
		        }
		      }

		      if (finallyEntry &&
		          (type === "break" ||
		           type === "continue") &&
		          finallyEntry.tryLoc <= arg &&
		          arg <= finallyEntry.finallyLoc) {
		        // Ignore the finally entry if control is not jumping to a
		        // location outside the try/catch block.
		        finallyEntry = null;
		      }

		      var record = finallyEntry ? finallyEntry.completion : {};
		      record.type = type;
		      record.arg = arg;

		      if (finallyEntry) {
		        this.method = "next";
		        this.next = finallyEntry.finallyLoc;
		        return ContinueSentinel;
		      }

		      return this.complete(record);
		    },

		    complete: function(record, afterLoc) {
		      if (record.type === "throw") {
		        throw record.arg;
		      }

		      if (record.type === "break" ||
		          record.type === "continue") {
		        this.next = record.arg;
		      } else if (record.type === "return") {
		        this.rval = this.arg = record.arg;
		        this.method = "return";
		        this.next = "end";
		      } else if (record.type === "normal" && afterLoc) {
		        this.next = afterLoc;
		      }

		      return ContinueSentinel;
		    },

		    finish: function(finallyLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.finallyLoc === finallyLoc) {
		          this.complete(entry.completion, entry.afterLoc);
		          resetTryEntry(entry);
		          return ContinueSentinel;
		        }
		      }
		    },

		    "catch": function(tryLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.tryLoc === tryLoc) {
		          var record = entry.completion;
		          if (record.type === "throw") {
		            var thrown = record.arg;
		            resetTryEntry(entry);
		          }
		          return thrown;
		        }
		      }

		      // The context.catch method must only be called with a location
		      // argument that corresponds to a known catch block.
		      throw new Error("illegal catch attempt");
		    },

		    delegateYield: function(iterable, resultName, nextLoc) {
		      this.delegate = {
		        iterator: values(iterable),
		        resultName: resultName,
		        nextLoc: nextLoc
		      };

		      if (this.method === "next") {
		        // Deliberately forget the last sent value so that we don't
		        // accidentally pass it on to the delegate.
		        this.arg = undefined$1;
		      }

		      return ContinueSentinel;
		    }
		  };

		  // Regardless of whether this script is executing as a CommonJS module
		  // or not, return the runtime object so that we can declare the variable
		  // regeneratorRuntime in the outer scope, which allows this module to be
		  // injected easily by `bin/regenerator --include-runtime script.js`.
		  return exports;

		}(
		  // If this script is executing as a CommonJS module, use module.exports
		  // as the regeneratorRuntime namespace. Otherwise create a new empty
		  // object. Either way, the resulting object will be used to initialize
		  // the regeneratorRuntime variable at the top of this file.
		  module.exports 
		));

		try {
		  regeneratorRuntime = runtime;
		} catch (accidentalStrictMode) {
		  // This module should not be running in strict mode, so the above
		  // assignment should always work unless something is misconfigured. Just
		  // in case runtime.js accidentally runs in strict mode, in modern engines
		  // we can explicitly access globalThis. In older engines we can escape
		  // strict mode using a global Function call. This could conceivably fail
		  // if a Content Security Policy forbids using Function, but in that case
		  // the proper solution is to fix the accidental strict mode problem. If
		  // you've misconfigured your bundler to force strict mode and applied a
		  // CSP to forbid Function, and you're not willing to fix either of those
		  // problems, please detail your unique predicament in a GitHub issue.
		  if (typeof globalThis === "object") {
		    globalThis.regeneratorRuntime = runtime;
		  } else {
		    Function("r", "regeneratorRuntime = r")(runtime);
		  }
		}
	} (runtime));

	(function (module) {
		module.exports = runtime.exports;
	} (regenerator));

	var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator.exports);

	var Tracker = /*#__PURE__*/function () {
	  function Tracker(options) {
	    _classCallCheck(this, Tracker);

	    this.isSyncing = false;
	    this.stopped = false;
	    this.enable = (options === null || options === void 0 ? void 0 : options.enable) || false;
	    this.logger = options.logger || console;
	    this.startBlock = options.startBlock || -1;
	    this.interval = options.interval || 0;
	    this.concurrency = options.concurrency || 1;
	    this.behind = options.behind || 0;
	    this.localAdapter = options.localAdapter;
	    this.remoteAdapter = options.remoteAdapter;
	  }

	  _createClass(Tracker, [{
	    key: "currentBlock",
	    get: function get() {
	      if (!this._currentBlock) {
	        throw new Error('Please wait for current block init');
	      }

	      return this._currentBlock;
	    }
	  }, {
	    key: "remoteBlock",
	    get: function get() {
	      if (!this._remoteBlock) {
	        throw new Error('Please wait for remote block init');
	      }

	      return this._remoteBlock;
	    }
	  }, {
	    key: "doRollback",
	    value: function () {
	      var _doRollback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_block, _remote) {
	        return _regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                throw new Error('Please implement doRollback function');

	              case 1:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee);
	      }));

	      function doRollback(_x, _x2) {
	        return _doRollback.apply(this, arguments);
	      }

	      return doRollback;
	    }()
	  }, {
	    key: "prepare",
	    value: function () {
	      var _prepare = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
	        var block, number;
	        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.next = 2;
	                return this.localAdapter.getLatestBlock();

	              case 2:
	                block = _context2.sent;
	                // start from the latest block
	                number = this.startBlock || -1;
	                if ((block === null || block === void 0 ? void 0 : block.number) && block.number > number) number = block.number;
	                this.logger.debug("[Tracker] Start from block: ".concat(number));
	                this._currentBlock = {
	                  number: number + 1,
	                  hash: '',
	                  time: new Date()
	                };
	                _context2.next = 9;
	                return this.remoteAdapter.getLatestBlock();

	              case 9:
	                this._remoteBlock = _context2.sent;

	              case 10:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      function prepare() {
	        return _prepare.apply(this, arguments);
	      }

	      return prepare;
	    }()
	    /**
	     * @param _block current block number
	     * @param _needed need to sync block count
	     * @returns the next block number to sync
	     */

	  }, {
	    key: "succeeded",
	    value: function () {
	      var _succeeded = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(_block) {

	        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                throw new Error('Please implement succeeded function');

	              case 2:
	              case "end":
	                return _context3.stop();
	            }
	          }
	        }, _callee3);
	      }));

	      function succeeded(_x3) {
	        return _succeeded.apply(this, arguments);
	      }

	      return succeeded;
	    }()
	    /**
	     *
	     * @param _block current block
	     * @returns void
	     */

	  }, {
	    key: "failed",
	    value: function () {
	      var _failed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(_blockNumber) {
	        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                throw new Error('Please implement failed function');

	              case 1:
	              case "end":
	                return _context4.stop();
	            }
	          }
	        }, _callee4);
	      }));

	      function failed(_x4) {
	        return _failed.apply(this, arguments);
	      }

	      return failed;
	    }()
	  }, {
	    key: "disable",
	    get: function get() {
	      return typeof this.enable === 'string' ? !['true', '1', 'yes'].includes(this.enable) : !this.enable;
	    }
	  }, {
	    key: "sleep",
	    value: function () {
	      var _sleep = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(_ms) {
	        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                return _context5.abrupt("return", 0);

	              case 1:
	              case "end":
	                return _context5.stop();
	            }
	          }
	        }, _callee5);
	      }));

	      function sleep(_x5) {
	        return _sleep.apply(this, arguments);
	      }

	      return sleep;
	    }()
	  }, {
	    key: "refreshBlock",
	    value: function () {
	      var _refreshBlock = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(block) {
	        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
	          while (1) {
	            switch (_context6.prev = _context6.next) {
	              case 0:
	                if (!(!block.hash || !block.time)) {
	                  _context6.next = 2;
	                  break;
	                }

	                return _context6.abrupt("return", this.remoteAdapter.getBlockByNumber(block.number));

	              case 2:
	                return _context6.abrupt("return", block);

	              case 3:
	              case "end":
	                return _context6.stop();
	            }
	          }
	        }, _callee6, this);
	      }));

	      function refreshBlock(_x6) {
	        return _refreshBlock.apply(this, arguments);
	      }

	      return refreshBlock;
	    }()
	  }, {
	    key: "pause",
	    value: function () {
	      var _pause = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(_blockNumber) {
	        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
	          while (1) {
	            switch (_context7.prev = _context7.next) {
	              case 0:
	                return _context7.abrupt("return", false);

	              case 1:
	              case "end":
	                return _context7.stop();
	            }
	          }
	        }, _callee7);
	      }));

	      function pause(_x7) {
	        return _pause.apply(this, arguments);
	      }

	      return pause;
	    }()
	  }, {
	    key: "doPause",
	    value: function () {
	      var _doPause = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
	        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
	          while (1) {
	            switch (_context8.prev = _context8.next) {
	              case 0:
	                return _context8.abrupt("return");

	              case 1:
	              case "end":
	                return _context8.stop();
	            }
	          }
	        }, _callee8);
	      }));

	      function doPause() {
	        return _doPause.apply(this, arguments);
	      }

	      return doPause;
	    }() // previous block hash is changes, need to rollback

	  }, {
	    key: "shouldRollback",
	    value: function () {
	      var _shouldRollback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
	        var _a, result, blockNumber, _yield$Promise$all, _yield$Promise$all2, synced, remote;

	        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
	          while (1) {
	            switch (_context9.prev = _context9.next) {
	              case 0:
	                result = {
	                  rollback: false,
	                  synced: undefined,
	                  remote: undefined
	                };

	                if (this.currentBlock.number) {
	                  _context9.next = 3;
	                  break;
	                }

	                return _context9.abrupt("return", result);

	              case 3:
	                if (!(this.startBlock && ((_a = this._currentBlock) === null || _a === void 0 ? void 0 : _a.number) === this.startBlock + 1)) {
	                  _context9.next = 5;
	                  break;
	                }

	                return _context9.abrupt("return", result);

	              case 5:
	                blockNumber = this.currentBlock.number - 1;
	                _context9.next = 8;
	                return Promise.all([this.localAdapter.getBlockByNumber(blockNumber), this.remoteAdapter.getBlockByNumber(blockNumber) // remote
	                ]);

	              case 8:
	                _yield$Promise$all = _context9.sent;
	                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
	                synced = _yield$Promise$all2[0];
	                remote = _yield$Promise$all2[1];
	                return _context9.abrupt("return", {
	                  rollback: (synced === null || synced === void 0 ? void 0 : synced.hash) === (remote === null || remote === void 0 ? void 0 : remote.hash) && !(remote === null || remote === void 0 ? void 0 : remote.hash),
	                  synced: synced,
	                  remote: remote
	                });

	              case 13:
	              case "end":
	                return _context9.stop();
	            }
	          }
	        }, _callee9, this);
	      }));

	      function shouldRollback() {
	        return _shouldRollback.apply(this, arguments);
	      }

	      return shouldRollback;
	    }()
	  }, {
	    key: "start",
	    value: function () {
	      var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10() {
	        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
	          while (1) {
	            switch (_context10.prev = _context10.next) {
	              case 0:
	                if (!this.disable) {
	                  _context10.next = 3;
	                  break;
	                }

	                this.logger.info("[Tracker]  Disable ".concat(this.constructor.name));
	                return _context10.abrupt("return");

	              case 3:
	                this.stopped = false;
	                _context10.next = 6;
	                return this.prepare();

	              case 6:
	                return _context10.abrupt("return", this.startSync());

	              case 7:
	              case "end":
	                return _context10.stop();
	            }
	          }
	        }, _callee10, this);
	      }));

	      function start() {
	        return _start.apply(this, arguments);
	      }

	      return start;
	    }()
	  }, {
	    key: "stop",
	    value: function () {
	      var _stop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11() {
	        return _regeneratorRuntime.wrap(function _callee11$(_context11) {
	          while (1) {
	            switch (_context11.prev = _context11.next) {
	              case 0:
	                this.logger.info("[Tracker] Stopping worker for chain at: ".concat(new Date().toISOString()));
	                this.stopped = true;
	                this.isSyncing = false;

	              case 3:
	              case "end":
	                return _context11.stop();
	            }
	          }
	        }, _callee11, this);
	      }));

	      function stop() {
	        return _stop.apply(this, arguments);
	      }

	      return stop;
	    }()
	  }, {
	    key: "startSync",
	    value: function () {
	      var _startSync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee12() {
	        return _regeneratorRuntime.wrap(function _callee12$(_context12) {
	          while (1) {
	            switch (_context12.prev = _context12.next) {
	              case 0:
	                if (this.stopped) {
	                  _context12.next = 5;
	                  break;
	                }

	                _context12.next = 3;
	                return this.loop().catch(this.logger.error);

	              case 3:
	                _context12.next = 0;
	                break;

	              case 5:
	              case "end":
	                return _context12.stop();
	            }
	          }
	        }, _callee12, this);
	      }));

	      function startSync() {
	        return _startSync.apply(this, arguments);
	      }

	      return startSync;
	    }()
	  }, {
	    key: "loop",
	    value: function () {
	      var _loop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee13() {
	        var _a, _b, shouldPause, distance, needed, rollback;

	        return _regeneratorRuntime.wrap(function _callee13$(_context13) {
	          while (1) {
	            switch (_context13.prev = _context13.next) {
	              case 0:
	                if (!this.isSyncing) {
	                  _context13.next = 2;
	                  break;
	                }

	                return _context13.abrupt("return");

	              case 2:
	                _context13.prev = 2;
	                _context13.next = 5;
	                return this.pause();

	              case 5:
	                shouldPause = _context13.sent;

	                if (!shouldPause) {
	                  _context13.next = 10;
	                  break;
	                }

	                _context13.next = 9;
	                return this.doPause();

	              case 9:
	                return _context13.abrupt("return");

	              case 10:
	                this.isSyncing = true;
	                distance = this.remoteBlock.number - this.currentBlock.number - this.behind;
	                needed = Math.min(Math.max(distance, 1), this.concurrency);

	                if (!(distance < 0)) {
	                  _context13.next = 22;
	                  break;
	                }

	                this.logger.info("[Tracker] Refresh... ".concat(this.currentBlock.number, " -> ").concat(this.remoteBlock.number, ", will sleep ").concat(this.interval));
	                _context13.next = 17;
	                return this.remoteAdapter.getLatestBlock();

	              case 17:
	                this._remoteBlock = _context13.sent;
	                _context13.next = 20;
	                return this.sleep(this.interval);

	              case 20:
	                this.isSyncing = false;
	                return _context13.abrupt("return");

	              case 22:
	                _context13.next = 24;
	                return this.refreshBlock(this.currentBlock);

	              case 24:
	                this._currentBlock = _context13.sent;

	                if ((_a = this._currentBlock) === null || _a === void 0 ? void 0 : _a.hash) {
	                  _context13.next = 31;
	                  break;
	                }

	                this.logger.info("[Tracker] Refresh block failed, current block: ".concat(this.currentBlock.number));
	                _context13.next = 29;
	                return this.sleep(this.interval);

	              case 29:
	                this.isSyncing = false;
	                return _context13.abrupt("return");

	              case 31:
	                _context13.next = 33;
	                return this.shouldRollback();

	              case 33:
	                rollback = _context13.sent;

	                if (!rollback.rollback) {
	                  _context13.next = 43;
	                  break;
	                }

	                if (!(!rollback.synced || !rollback.remote)) {
	                  _context13.next = 37;
	                  break;
	                }

	                throw new Error('rollback synced or remote is undefined');

	              case 37:
	                _context13.next = 39;
	                return this.doRollback(rollback.synced, rollback.remote);

	              case 39:
	                this._currentBlock = _context13.sent;
	                this.logger.info("[Tracker] Rollback... rollback ".concat(rollback.synced, ", current ").concat(this.currentBlock, ", latest ").concat(this.remoteBlock, " at ").concat(new Date().toISOString()));
	                this.isSyncing = false;
	                return _context13.abrupt("return");

	              case 43:
	                this.logger.info("[Tracker] Ing... ".concat(this.currentBlock.number, " -> ").concat(this.remoteBlock.number, " behind ").concat(distance, ", will sync ").concat(needed, " blocks at ").concat(new Date().toISOString()));
	                _context13.next = 46;
	                return this.succeeded(this.currentBlock, needed);

	              case 46:
	                this._currentBlock = _context13.sent;
	                this.isSyncing = false;
	                return _context13.abrupt("return");

	              case 51:
	                _context13.prev = 51;
	                _context13.t0 = _context13["catch"](2);
	                (_b = this.logger) === null || _b === void 0 ? void 0 : _b.error(_context13.t0, "[Tracker] failed: height ".concat(this.currentBlock.number, " at: ").concat(new Date().toISOString()));
	                _context13.next = 56;
	                return this.failed(this.currentBlock);

	              case 56:
	                this.sleep(this.interval);
	                this.isSyncing = false;
	                return _context13.abrupt("return");

	              case 59:
	              case "end":
	                return _context13.stop();
	            }
	          }
	        }, _callee13, this, [[2, 51]]);
	      }));

	      function loop() {
	        return _loop.apply(this, arguments);
	      }

	      return loop;
	    }()
	  }]);

	  return Tracker;
	}();

	exports.LocalAdapter = LocalAdapter;
	exports.RemoteAdapter = RemoteAdapter;
	exports.Tracker = Tracker;

	Object.defineProperty(exports, '__esModule', { value: true });

}));

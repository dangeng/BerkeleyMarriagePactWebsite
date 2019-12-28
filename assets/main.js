! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(i, o, function(e) {
                return t[e]
            }.bind(null, o));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/build/", n(n.s = 16)
}([, function(t, e) {
    t.exports = function(t) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
        return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
    }
}, , , , , , , , , , , function(t, e, n) {
    var i;
    ! function(n, o) {
        var r, a, s, l = {},
            u = !0,
            c = 0,
            d = 10,
            p = 5;

        function f(t, e) {
            try {
                if ("function" != typeof t) return t;
                if (!t.bugsnag) {
                    var n = g();
                    t.bugsnag = function(i) {
                        if (e && e.eventHandler && (r = i), a = n, !u) {
                            var o = t.apply(this, arguments);
                            return a = null, o
                        }
                        try {
                            return t.apply(this, arguments)
                        } catch (t) {
                            throw $("autoNotify", !0) && (l.notifyException(t, null, null, "error"), O()), t
                        } finally {
                            a = null
                        }
                    }, t.bugsnag.bugsnag = t.bugsnag
                }
                return t.bugsnag
            } catch (e) {
                return t
            }
        }
        l.noConflict = function() {
            return n.Bugsnag = o, void 0 === o && delete n.Bugsnag, l
        }, l.refresh = function() {
            d = 10
        }, l.notifyException = function(t, e, n, i) {
            t && (e && "string" != typeof e && (n = e, e = void 0), n || (n = {}), v(n), A({
                name: e || t.name,
                message: t.message || t.description,
                stacktrace: j(t) || D(),
                file: t.fileName || t.sourceURL,
                lineNumber: t.lineNumber || t.line,
                columnNumber: t.columnNumber ? t.columnNumber + 1 : void 0,
                severity: i || "warning"
            }, n))
        }, l.notify = function(t, e, i, o) {
            A({
                name: t,
                message: e,
                stacktrace: D(),
                file: n.location.toString(),
                lineNumber: 1,
                severity: o || "warning"
            }, i)
        };
        var h = "complete" !== document.readyState;

        function m() {
            h = !1
        }

        function g() {
            var t = document.currentScript || a;
            if (!t && h) {
                var e = document.scripts || document.getElementsByTagName("script");
                t = e[e.length - 1]
            }
            return t
        }

        function v(t) {
            var e = g();
            e && (t.script = {
                src: e.src,
                content: $("inlineScript", !0) ? e.innerHTML : ""
            })
        }
        document.addEventListener ? (document.addEventListener("DOMContentLoaded", m, !0), n.addEventListener("load", m, !0)) : n.attachEvent("onload", m);
        var y, b = /^[0-9a-f]{32}$/i,
            w = /function\s*([\w\-$]+)?\s*\(/i,
            x = "https://notify.bugsnag.com/js",
            T = "2.5.0",
            C = document.getElementsByTagName("script"),
            E = C[C.length - 1];

        function S(t) {
            var e = $("disableLog"),
                i = n.console;
            void 0 === i || void 0 === i.log || e || i.log("[Bugsnag] " + t)
        }

        function N(t, e, n) {
            if (null == e) return t;
            if (n >= $("maxDepth", p)) return "[RECURSIVE]";
            for (var i in t = t || {}, e)
                if (e.hasOwnProperty(i)) try {
                    e[i].constructor === Object ? t[i] = N(t[i], e[i], n + 1 || 1) : t[i] = e[i]
                } catch (n) {
                    t[i] = e[i]
                }
            return t
        }

        function k(t, e) {
            if (t += "?" + function t(e, i, o) {
                    if (o >= $("maxDepth", p)) return encodeURIComponent(i) + "=[RECURSIVE]";
                    o = o + 1 || 1;
                    try {
                        if (n.Node && e instanceof n.Node) return encodeURIComponent(i) + "=" + encodeURIComponent(L(e));
                        var r = [];
                        for (var a in e)
                            if (e.hasOwnProperty(a) && null != a && null != e[a]) {
                                var s = i ? i + "[" + a + "]" : a,
                                    l = e[a];
                                r.push("object" == typeof l ? t(l, s, o) : encodeURIComponent(s) + "=" + encodeURIComponent(l))
                            } return r.join("&")
                    } catch (t) {
                        return encodeURIComponent(i) + "=" + encodeURIComponent("" + t)
                    }
                }(e) + "&ct=img&cb=" + (new Date).getTime(), "undefined" != typeof BUGSNAG_TESTING && l.testRequest) l.testRequest(t, e);
            else if ("xhr" === $("notifyHandler")) {
                var i = new XMLHttpRequest;
                i.open("GET", t, !0), i.send()
            } else {
                (new Image).src = t
            }
        }

        function $(t, e) {
            y = y || function(t) {
                var e = {},
                    n = /^data\-([\w\-]+)$/;
                if (t)
                    for (var i = t.attributes, o = 0; o < i.length; o++) {
                        var r = i[o];
                        if (n.test(r.nodeName)) e[r.nodeName.match(n)[1]] = r.value || r.nodeValue
                    }
                return e
            }(E);
            var n = void 0 !== l[t] ? l[t] : y[t.toLowerCase()];
            return "false" === n && (n = !1), void 0 !== n ? n : e
        }

        function A(t, e) {
            var i = $("apiKey");
            if (function(t) {
                    return !(!t || !t.match(b)) || (S("Invalid API key '" + t + "'"), !1)
                }(i) && d) {
                d -= 1;
                var o = $("releaseStage", "production"),
                    a = $("notifyReleaseStages");
                if (a) {
                    for (var u = !1, c = 0; c < a.length; c++)
                        if (o === a[c]) {
                            u = !0;
                            break
                        } if (!u) return
                }
                var p = [t.name, t.message, t.stacktrace].join("|");
                if (p !== s) {
                    s = p, r && ((e = e || {})["Last Event"] = function(t) {
                        return {
                            millisecondsAgo: new Date - t.timeStamp,
                            type: t.type,
                            which: t.which,
                            target: L(t.target)
                        }
                    }(r));
                    var f = {
                            notifierVersion: T,
                            apiKey: i,
                            projectRoot: $("projectRoot") || n.location.protocol + "//" + n.location.host,
                            context: $("context") || n.location.pathname,
                            userId: $("userId"),
                            user: $("user"),
                            metaData: N(N({}, $("metaData")), e),
                            releaseStage: o,
                            appVersion: $("appVersion"),
                            url: n.location.href,
                            userAgent: navigator.userAgent,
                            language: navigator.language || navigator.userLanguage,
                            severity: t.severity,
                            name: t.name,
                            message: t.message,
                            stacktrace: t.stacktrace,
                            file: t.file,
                            lineNumber: t.lineNumber,
                            columnNumber: t.columnNumber,
                            payloadVersion: "2"
                        },
                        h = l.beforeNotify;
                    if ("function" == typeof h)
                        if (!1 === h(f, f.metaData)) return;
                    if (0 === f.lineNumber && /Script error\.?/.test(f.message)) return S("Ignoring cross-domain script error. See https://bugsnag.com/docs/notifiers/js/cors");
                    k($("endpoint") || x, f)
                }
            }
        }

        function D() {
            var t, e;
            try {
                throw new Error("")
            } catch (n) {
                t = "<generated>\n", e = j(n)
            }
            if (!e) {
                t = "<generated-ie>\n";
                var n = [];
                try {
                    for (var i = arguments.callee.caller.caller; i && n.length < 10;) {
                        var o = w.test(i.toString()) && RegExp.$1 || "[anonymous]";
                        n.push(o), i = i.caller
                    }
                } catch (t) {
                    S(t)
                }
                e = n.join("\n")
            }
            return t + e
        }

        function j(t) {
            return t.stack || t.backtrace || t.stacktrace
        }

        function L(t) {
            if (t) {
                var e = t.attributes;
                if (e) {
                    for (var n = "<" + t.nodeName.toLowerCase(), i = 0; i < e.length; i++) e[i].value && "null" !== e[i].value.toString() && (n += " " + e[i].name + '="' + e[i].value + '"');
                    return n + ">"
                }
                return t.nodeName
            }
        }

        function O() {
            c += 1, n.setTimeout(function() {
                c -= 1
            })
        }
        if (n.atob) {
            if (n.ErrorEvent) try {
                0 === new n.ErrorEvent("test").colno && (u = !1)
            } catch (t) {}
        } else u = !1;

        function I(t, e, i) {
            var o = t[e],
                r = i(o);
            t[e] = r, "undefined" != typeof BUGSNAG_TESTING && n.undo && n.undo.push(function() {
                t[e] = o
            })
        }
        if ($("autoNotify", !0)) {
            I(n, "onerror", function(t) {
                return "undefined" != typeof BUGSNAG_TESTING && (l._onerror = t),
                    function(e, i, o, r, s) {
                        var u = $("autoNotify", !0),
                            d = {};
                        !r && n.event && (r = n.event.errorCharacter), v(d), a = null, u && !c && A({
                            name: s && s.name || "window.onerror",
                            message: e,
                            file: i,
                            lineNumber: o,
                            columnNumber: r,
                            stacktrace: s && j(s) || D(),
                            severity: "error"
                        }, d), "undefined" != typeof BUGSNAG_TESTING && (t = l._onerror), t && t(e, i, o, r, s)
                    }
            });
            var R = function(t) {
                return function(e, n) {
                    if ("function" == typeof e) {
                        e = f(e);
                        var i = Array.prototype.slice.call(arguments, 2);
                        return t(function() {
                            e.apply(this, i)
                        }, n)
                    }
                    return t(e, n)
                }
            };
            I(n, "setTimeout", R), I(n, "setInterval", R), n.requestAnimationFrame && I(n, "requestAnimationFrame", function(t) {
                return function(e) {
                    return t(f(e))
                }
            }), n.setImmediate && I(n, "setImmediate", function(t) {
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    return e[0] = f(e[0]), t.apply(this, e)
                }
            }), "EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g, function(t) {
                var e = n[t] && n[t].prototype;
                e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (I(e, "addEventListener", function(t) {
                    return function(e, n, i, o) {
                        try {
                            n && n.handleEvent && (n.handleEvent = f(n.handleEvent, {
                                eventHandler: !0
                            }))
                        } catch (t) {
                            S(t)
                        }
                        return t.call(this, e, f(n, {
                            eventHandler: !0
                        }), i, o)
                    }
                }), I(e, "removeEventListener", function(t) {
                    return function(e, n, i, o) {
                        return t.call(this, e, n, i, o), t.call(this, e, f(n), i, o)
                    }
                }))
            })
        }
        n.Bugsnag = l, void 0 === (i = function() {
            return l
        }.apply(e, [])) || (t.exports = i)
    }(window, window.Bugsnag)
}, , , , function(t, e, n) {
    var i, o, r, a, s, l;
    n(17), window.Bugsnag = n(12), Bugsnag.apiKey = "36f15d5bb6217235d3d87259f96b92c0", Bugsnag.notifyReleaseStages = ["production", "staging"], Bugsnag.releaseStage = "production", window.jQuery = window.$ = n(18), $.fn.exists = function() {
        return 0 !== this.length
    }, n(19), n(20), n(21), n(22), n(25), n(26), n(27), n(28), (new WOW).init(), i = window, o = document, r = "script", a = "ga", i.GoogleAnalyticsObject = a, i.ga = i.ga || function() {
        (i.ga.q = i.ga.q || []).push(arguments)
    }, i.ga.l = 1 * new Date, s = o.createElement(r), l = o.getElementsByTagName(r)[0], s.async = 1, s.src = "//www.google-analytics.com/analytics.js", l.parentNode.insertBefore(s, l), ga("create", "UA-60755253-1", "auto"), ga("send", "pageview"), window.twttr = function(t, e, n) {
        var i, o = t.getElementsByTagName(e)[0],
            r = window.twttr || {};
        return t.getElementById(n) ? r : ((i = t.createElement(e)).id = n, i.src = "https://platform.twitter.com/widgets.js", o.parentNode.insertBefore(i, o), r._e = [], r.ready = function(t) {
            r._e.push(t)
        }, r)
    }(document, "script", "twitter-wjs")
}, function(t, e, n) {}, function(t, e, n) {
    var i, o, r;
    /*!
     * jQuery JavaScript Library v1.11.3
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-04-28T16:19Z
     */
    o = "undefined" != typeof window ? window : this, r = function(n, o) {
        var r = [],
            a = r.slice,
            s = r.concat,
            l = r.push,
            u = r.indexOf,
            c = {},
            d = c.toString,
            p = c.hasOwnProperty,
            f = {},
            h = function(t, e) {
                return new h.fn.init(t, e)
            },
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            g = /^-ms-/,
            v = /-([\da-z])/gi,
            y = function(t, e) {
                return e.toUpperCase()
            };

        function b(t) {
            var e = "length" in t && t.length,
                n = h.type(t);
            return "function" !== n && !h.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        h.fn = h.prototype = {
            jquery: "1.11.3",
            constructor: h,
            selector: "",
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : a.call(this)
            },
            pushStack: function(t) {
                var e = h.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return h.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(h.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: l,
            sort: r.sort,
            splice: r.splice
        }, h.extend = h.fn.extend = function() {
            var t, e, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || h.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (o = arguments[s]))
                    for (i in o) t = a[i], a !== (n = o[i]) && (u && n && (h.isPlainObject(n) || (e = h.isArray(n))) ? (e ? (e = !1, r = t && h.isArray(t) ? t : []) : r = t && h.isPlainObject(t) ? t : {}, a[i] = h.extend(u, r, n)) : void 0 !== n && (a[i] = n));
            return a
        }, h.extend({
            expando: "jQuery" + ("1.11.3" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === h.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === h.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !h.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== h.type(t) || t.nodeType || h.isWindow(t)) return !1;
                try {
                    if (t.constructor && !p.call(t, "constructor") && !p.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                if (f.ownLast)
                    for (e in t) return p.call(t, e);
                for (e in t);
                return void 0 === e || p.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[d.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                t && h.trim(t) && (n.execScript || function(t) {
                    n.eval.call(n, t)
                })(t)
            },
            camelCase: function(t) {
                return t.replace(g, "ms-").replace(v, y)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var i = 0,
                    o = t.length,
                    r = b(t);
                if (n) {
                    if (r)
                        for (; i < o && !1 !== e.apply(t[i], n); i++);
                    else
                        for (i in t)
                            if (!1 === e.apply(t[i], n)) break
                } else if (r)
                    for (; i < o && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(m, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (b(Object(t)) ? h.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (u) return u.call(e, t, n);
                    for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n;) t[o++] = e[i++];
                if (n != n)
                    for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i = [], o = 0, r = t.length, a = !n; o < r; o++) !e(t[o], o) !== a && i.push(t[o]);
                return i
            },
            map: function(t, e, n) {
                var i, o = 0,
                    r = t.length,
                    a = [];
                if (b(t))
                    for (; o < r; o++) null != (i = e(t[o], o, n)) && a.push(i);
                else
                    for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
                return s.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                if ("string" == typeof e && (o = t[e], e = t, t = o), h.isFunction(t)) return n = a.call(arguments, 2), (i = function() {
                    return t.apply(e || this, n.concat(a.call(arguments)))
                }).guid = t.guid = t.guid || h.guid++, i
            },
            now: function() {
                return +new Date
            },
            support: f
        }), h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            c["[object " + e + "]"] = e.toLowerCase()
        });
        var w =
            /*!
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
            function(t) {
                var e, n, i, o, r, a, s, l, u, c, d, p, f, h, m, g, v, y, b, w = "sizzle" + 1 * new Date,
                    x = t.document,
                    T = 0,
                    C = 0,
                    E = at(),
                    S = at(),
                    N = at(),
                    k = function(t, e) {
                        return t === e && (d = !0), 0
                    },
                    $ = 1 << 31,
                    A = {}.hasOwnProperty,
                    D = [],
                    j = D.pop,
                    L = D.push,
                    O = D.push,
                    I = D.slice,
                    R = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    H = "[\\x20\\t\\r\\n\\f]",
                    M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    P = M.replace("w", "w#"),
                    q = "\\[" + H + "*(" + M + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + H + "*\\]",
                    B = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                    F = new RegExp(H + "+", "g"),
                    W = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                    U = new RegExp("^" + H + "*," + H + "*"),
                    z = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                    V = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
                    X = new RegExp(B),
                    Q = new RegExp("^" + P + "$"),
                    G = {
                        ID: new RegExp("^#(" + M + ")"),
                        CLASS: new RegExp("^\\.(" + M + ")"),
                        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + B),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + _ + ")$", "i"),
                        needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                    },
                    J = /^(?:input|select|textarea|button)$/i,
                    Y = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    tt = /[+~]/,
                    et = /'|\\/g,
                    nt = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
                    it = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    ot = function() {
                        p()
                    };
                try {
                    O.apply(D = I.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
                } catch (t) {
                    O = {
                        apply: D.length ? function(t, e) {
                            L.apply(t, I.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }

                function rt(t, e, i, o) {
                    var r, s, u, c, d, h, v, y, T, C;
                    if ((e ? e.ownerDocument || e : x) !== f && p(e), i = i || [], c = (e = e || f).nodeType, "string" != typeof t || !t || 1 !== c && 9 !== c && 11 !== c) return i;
                    if (!o && m) {
                        if (11 !== c && (r = Z.exec(t)))
                            if (u = r[1]) {
                                if (9 === c) {
                                    if (!(s = e.getElementById(u)) || !s.parentNode) return i;
                                    if (s.id === u) return i.push(s), i
                                } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(u)) && b(e, s) && s.id === u) return i.push(s), i
                            } else {
                                if (r[2]) return O.apply(i, e.getElementsByTagName(t)), i;
                                if ((u = r[3]) && n.getElementsByClassName) return O.apply(i, e.getElementsByClassName(u)), i
                            } if (n.qsa && (!g || !g.test(t))) {
                            if (y = v = w, T = e, C = 1 !== c && t, 1 === c && "object" !== e.nodeName.toLowerCase()) {
                                for (h = a(t), (v = e.getAttribute("id")) ? y = v.replace(et, "\\$&") : e.setAttribute("id", y), y = "[id='" + y + "'] ", d = h.length; d--;) h[d] = y + gt(h[d]);
                                T = tt.test(t) && ht(e.parentNode) || e, C = h.join(",")
                            }
                            if (C) try {
                                return O.apply(i, T.querySelectorAll(C)), i
                            } catch (t) {} finally {
                                v || e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace(W, "$1"), e, i, o)
                }

                function at() {
                    var t = [];
                    return function e(n, o) {
                        return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
                    }
                }

                function st(t) {
                    return t[w] = !0, t
                }

                function lt(t) {
                    var e = f.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ut(t, e) {
                    for (var n = t.split("|"), o = t.length; o--;) i.attrHandle[n[o]] = e
                }

                function ct(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || $) - (~t.sourceIndex || $);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function dt(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function pt(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function ft(t) {
                    return st(function(e) {
                        return e = +e, st(function(n, i) {
                            for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function ht(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }
                for (e in n = rt.support = {}, r = rt.isXML = function(t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }, p = rt.setDocument = function(t) {
                        var e, o, a = t ? t.ownerDocument || t : x;
                        return a !== f && 9 === a.nodeType && a.documentElement ? (f = a, h = a.documentElement, (o = a.defaultView) && o !== o.top && (o.addEventListener ? o.addEventListener("unload", ot, !1) : o.attachEvent && o.attachEvent("onunload", ot)), m = !r(a), n.attributes = lt(function(t) {
                            return t.className = "i", !t.getAttribute("className")
                        }), n.getElementsByTagName = lt(function(t) {
                            return t.appendChild(a.createComment("")), !t.getElementsByTagName("*").length
                        }), n.getElementsByClassName = K.test(a.getElementsByClassName), n.getById = lt(function(t) {
                            return h.appendChild(t).id = w, !a.getElementsByName || !a.getElementsByName(w).length
                        }), n.getById ? (i.find.ID = function(t, e) {
                            if (void 0 !== e.getElementById && m) {
                                var n = e.getElementById(t);
                                return n && n.parentNode ? [n] : []
                            }
                        }, i.filter.ID = function(t) {
                            var e = t.replace(nt, it);
                            return function(t) {
                                return t.getAttribute("id") === e
                            }
                        }) : (delete i.find.ID, i.filter.ID = function(t) {
                            var e = t.replace(nt, it);
                            return function(t) {
                                var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                        } : function(t, e) {
                            var n, i = [],
                                o = 0,
                                r = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return r
                        }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                            if (m) return e.getElementsByClassName(t)
                        }, v = [], g = [], (n.qsa = K.test(a.querySelectorAll)) && (lt(function(t) {
                            h.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + _ + ")"), t.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                        }), lt(function(t) {
                            var e = a.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                        })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && lt(function(t) {
                            n.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", B)
                        }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = K.test(h.compareDocumentPosition), b = e || K.test(h.contains) ? function(t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function(t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, k = e ? function(t, e) {
                            if (t === e) return d = !0, 0;
                            var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === a || t.ownerDocument === x && b(x, t) ? -1 : e === a || e.ownerDocument === x && b(x, e) ? 1 : c ? R(c, t) - R(c, e) : 0 : 4 & i ? -1 : 1)
                        } : function(t, e) {
                            if (t === e) return d = !0, 0;
                            var n, i = 0,
                                o = t.parentNode,
                                r = e.parentNode,
                                s = [t],
                                l = [e];
                            if (!o || !r) return t === a ? -1 : e === a ? 1 : o ? -1 : r ? 1 : c ? R(c, t) - R(c, e) : 0;
                            if (o === r) return ct(t, e);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (n = e; n = n.parentNode;) l.unshift(n);
                            for (; s[i] === l[i];) i++;
                            return i ? ct(s[i], l[i]) : s[i] === x ? -1 : l[i] === x ? 1 : 0
                        }, a) : f
                    }, rt.matches = function(t, e) {
                        return rt(t, null, null, e)
                    }, rt.matchesSelector = function(t, e) {
                        if ((t.ownerDocument || t) !== f && p(t), e = e.replace(V, "='$1']"), n.matchesSelector && m && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                            var i = y.call(t, e);
                            if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                        } catch (t) {}
                        return rt(e, f, null, [t]).length > 0
                    }, rt.contains = function(t, e) {
                        return (t.ownerDocument || t) !== f && p(t), b(t, e)
                    }, rt.attr = function(t, e) {
                        (t.ownerDocument || t) !== f && p(t);
                        var o = i.attrHandle[e.toLowerCase()],
                            r = o && A.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                        return void 0 !== r ? r : n.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                    }, rt.error = function(t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, rt.uniqueSort = function(t) {
                        var e, i = [],
                            o = 0,
                            r = 0;
                        if (d = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(k), d) {
                            for (; e = t[r++];) e === t[r] && (o = i.push(r));
                            for (; o--;) t.splice(i[o], 1)
                        }
                        return c = null, t
                    }, o = rt.getText = function(t) {
                        var e, n = "",
                            i = 0,
                            r = t.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                            } else if (3 === r || 4 === r) return t.nodeValue
                        } else
                            for (; e = t[i++];) n += o(e);
                        return n
                    }, (i = rt.selectors = {
                        cacheLength: 50,
                        createPseudo: st,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(t) {
                                return t[1] = t[1].replace(nt, it), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function(t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                            },
                            PSEUDO: function(t) {
                                var e, n = !t[6] && t[2];
                                return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(t) {
                                var e = t.replace(nt, it).toLowerCase();
                                return "*" === t ? function() {
                                    return !0
                                } : function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function(t) {
                                var e = E[t + " "];
                                return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && E(t, function(t) {
                                    return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(t, e, n) {
                                return function(i) {
                                    var o = rt.attr(i, t);
                                    return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(t, e, n, i, o) {
                                var r = "nth" !== t.slice(0, 3),
                                    a = "last" !== t.slice(-4),
                                    s = "of-type" === e;
                                return 1 === i && 0 === o ? function(t) {
                                    return !!t.parentNode
                                } : function(e, n, l) {
                                    var u, c, d, p, f, h, m = r !== a ? "nextSibling" : "previousSibling",
                                        g = e.parentNode,
                                        v = s && e.nodeName.toLowerCase(),
                                        y = !l && !s;
                                    if (g) {
                                        if (r) {
                                            for (; m;) {
                                                for (d = e; d = d[m];)
                                                    if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                h = m = "only" === t && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                            for (f = (u = (c = g[w] || (g[w] = {}))[t] || [])[0] === T && u[1], p = u[0] === T && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                                if (1 === d.nodeType && ++p && d === e) {
                                                    c[t] = [T, f, p];
                                                    break
                                                }
                                        } else if (y && (u = (e[w] || (e[w] = {}))[t]) && u[0] === T) p = u[1];
                                        else
                                            for (;
                                                (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[w] || (d[w] = {}))[t] = [T, p]), d !== e)););
                                        return (p -= o) === i || p % i == 0 && p / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(t, e) {
                                var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                                return o[w] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, n) {
                                    for (var i, r = o(t, e), a = r.length; a--;) t[i = R(t, r[a])] = !(n[i] = r[a])
                                }) : function(t) {
                                    return o(t, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: st(function(t) {
                                var e = [],
                                    n = [],
                                    i = s(t.replace(W, "$1"));
                                return i[w] ? st(function(t, e, n, o) {
                                    for (var r, a = i(t, null, o, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                                }) : function(t, o, r) {
                                    return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                                }
                            }),
                            has: st(function(t) {
                                return function(e) {
                                    return rt(t, e).length > 0
                                }
                            }),
                            contains: st(function(t) {
                                return t = t.replace(nt, it),
                                    function(e) {
                                        return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                                    }
                            }),
                            lang: st(function(t) {
                                return Q.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(nt, it).toLowerCase(),
                                    function(e) {
                                        var n;
                                        do {
                                            if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id
                            },
                            root: function(t) {
                                return t === h
                            },
                            focus: function(t) {
                                return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: function(t) {
                                return !1 === t.disabled
                            },
                            disabled: function(t) {
                                return !0 === t.disabled
                            },
                            checked: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(t) {
                                return !i.pseudos.empty(t)
                            },
                            header: function(t) {
                                return Y.test(t.nodeName)
                            },
                            input: function(t) {
                                return J.test(t.nodeName)
                            },
                            button: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function(t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: ft(function() {
                                return [0]
                            }),
                            last: ft(function(t, e) {
                                return [e - 1]
                            }),
                            eq: ft(function(t, e, n) {
                                return [n < 0 ? n + e : n]
                            }),
                            even: ft(function(t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t
                            }),
                            odd: ft(function(t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t
                            }),
                            lt: ft(function(t, e, n) {
                                for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                                return t
                            }),
                            gt: ft(function(t, e, n) {
                                for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                                return t
                            })
                        }
                    }).pseudos.nth = i.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[e] = dt(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) i.pseudos[e] = pt(e);

                function mt() {}

                function gt(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function vt(t, e, n) {
                    var i = e.dir,
                        o = n && "parentNode" === i,
                        r = C++;
                    return e.first ? function(e, n, r) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) return t(e, n, r)
                    } : function(e, n, a) {
                        var s, l, u = [T, r];
                        if (a) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || o) && t(e, n, a)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || o) {
                                    if ((s = (l = e[w] || (e[w] = {}))[i]) && s[0] === T && s[1] === r) return u[2] = s[2];
                                    if (l[i] = u, u[2] = t(e, n, a)) return !0
                                }
                    }
                }

                function yt(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var o = t.length; o--;)
                            if (!t[o](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function bt(t, e, n, i, o) {
                    for (var r, a = [], s = 0, l = t.length, u = null != e; s < l; s++)(r = t[s]) && (n && !n(r, i, o) || (a.push(r), u && e.push(s)));
                    return a
                }

                function wt(t, e, n, i, o, r) {
                    return i && !i[w] && (i = wt(i)), o && !o[w] && (o = wt(o, r)), st(function(r, a, s, l) {
                        var u, c, d, p = [],
                            f = [],
                            h = a.length,
                            m = r || function(t, e, n) {
                                for (var i = 0, o = e.length; i < o; i++) rt(t, e[i], n);
                                return n
                            }(e || "*", s.nodeType ? [s] : s, []),
                            g = !t || !r && e ? m : bt(m, p, t, s, l),
                            v = n ? o || (r ? t : h || i) ? [] : a : g;
                        if (n && n(g, v, s, l), i)
                            for (u = bt(v, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(g[f[c]] = d));
                        if (r) {
                            if (o || t) {
                                if (o) {
                                    for (u = [], c = v.length; c--;)(d = v[c]) && u.push(g[c] = d);
                                    o(null, v = [], u, l)
                                }
                                for (c = v.length; c--;)(d = v[c]) && (u = o ? R(r, d) : p[c]) > -1 && (r[u] = !(a[u] = d))
                            }
                        } else v = bt(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, l) : O.apply(a, v)
                    })
                }

                function xt(t) {
                    for (var e, n, o, r = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = vt(function(t) {
                            return t === e
                        }, s, !0), d = vt(function(t) {
                            return R(e, t) > -1
                        }, s, !0), p = [function(t, n, i) {
                            var o = !a && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
                            return e = null, o
                        }]; l < r; l++)
                        if (n = i.relative[t[l].type]) p = [vt(yt(p), n)];
                        else {
                            if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
                                for (o = ++l; o < r && !i.relative[t[o].type]; o++);
                                return wt(l > 1 && yt(p), l > 1 && gt(t.slice(0, l - 1).concat({
                                    value: " " === t[l - 2].type ? "*" : ""
                                })).replace(W, "$1"), n, l < o && xt(t.slice(l, o)), o < r && xt(t = t.slice(o)), o < r && gt(t))
                            }
                            p.push(n)
                        } return yt(p)
                }
                return mt.prototype = i.filters = i.pseudos, i.setFilters = new mt, a = rt.tokenize = function(t, e) {
                    var n, o, r, a, s, l, u, c = S[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (s = t, l = [], u = i.preFilter; s;) {
                        for (a in n && !(o = U.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), n = !1, (o = z.exec(s)) && (n = o.shift(), r.push({
                                value: n,
                                type: o[0].replace(W, " ")
                            }), s = s.slice(n.length)), i.filter) !(o = G[a].exec(s)) || u[a] && !(o = u[a](o)) || (n = o.shift(), r.push({
                            value: n,
                            type: a,
                            matches: o
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return e ? s.length : s ? rt.error(t) : S(t, l).slice(0)
                }, s = rt.compile = function(t, e) {
                    var n, o = [],
                        r = [],
                        s = N[t + " "];
                    if (!s) {
                        for (e || (e = a(t)), n = e.length; n--;)(s = xt(e[n]))[w] ? o.push(s) : r.push(s);
                        (s = N(t, function(t, e) {
                            var n = e.length > 0,
                                o = t.length > 0,
                                r = function(r, a, s, l, c) {
                                    var d, p, h, m = 0,
                                        g = "0",
                                        v = r && [],
                                        y = [],
                                        b = u,
                                        w = r || o && i.find.TAG("*", c),
                                        x = T += null == b ? 1 : Math.random() || .1,
                                        C = w.length;
                                    for (c && (u = a !== f && a); g !== C && null != (d = w[g]); g++) {
                                        if (o && d) {
                                            for (p = 0; h = t[p++];)
                                                if (h(d, a, s)) {
                                                    l.push(d);
                                                    break
                                                } c && (T = x)
                                        }
                                        n && ((d = !h && d) && m--, r && v.push(d))
                                    }
                                    if (m += g, n && g !== m) {
                                        for (p = 0; h = e[p++];) h(v, y, a, s);
                                        if (r) {
                                            if (m > 0)
                                                for (; g--;) v[g] || y[g] || (y[g] = j.call(l));
                                            y = bt(y)
                                        }
                                        O.apply(l, y), c && !r && y.length > 0 && m + e.length > 1 && rt.uniqueSort(l)
                                    }
                                    return c && (T = x, u = b), v
                                };
                            return n ? st(r) : r
                        }(r, o))).selector = t
                    }
                    return s
                }, l = rt.select = function(t, e, o, r) {
                    var l, u, c, d, p, f = "function" == typeof t && t,
                        h = !r && a(t = f.selector || t);
                    if (o = o || [], 1 === h.length) {
                        if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && n.getById && 9 === e.nodeType && m && i.relative[u[1].type]) {
                            if (!(e = (i.find.ID(c.matches[0].replace(nt, it), e) || [])[0])) return o;
                            f && (e = e.parentNode), t = t.slice(u.shift().value.length)
                        }
                        for (l = G.needsContext.test(t) ? 0 : u.length; l-- && (c = u[l], !i.relative[d = c.type]);)
                            if ((p = i.find[d]) && (r = p(c.matches[0].replace(nt, it), tt.test(u[0].type) && ht(e.parentNode) || e))) {
                                if (u.splice(l, 1), !(t = r.length && gt(u))) return O.apply(o, r), o;
                                break
                            }
                    }
                    return (f || s(t, h))(r, e, !m, o, tt.test(t) && ht(e.parentNode) || e), o
                }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!d, p(), n.sortDetached = lt(function(t) {
                    return 1 & t.compareDocumentPosition(f.createElement("div"))
                }), lt(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || ut("type|href|height|width", function(t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), n.attributes && lt(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || ut("value", function(t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), lt(function(t) {
                    return null == t.getAttribute("disabled")
                }) || ut(_, function(t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), rt
            }(n);
        h.find = w, h.expr = w.selectors, h.expr[":"] = h.expr.pseudos, h.unique = w.uniqueSort, h.text = w.getText, h.isXMLDoc = w.isXML, h.contains = w.contains;
        var x = h.expr.match.needsContext,
            T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            C = /^.[^:#\[\.,]*$/;

        function E(t, e, n) {
            if (h.isFunction(e)) return h.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return h.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (C.test(e)) return h.filter(e, t, n);
                e = h.filter(e, t)
            }
            return h.grep(t, function(t) {
                return h.inArray(t, e) >= 0 !== n
            })
        }
        h.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? h.find.matchesSelector(i, t) ? [i] : [] : h.find.matches(t, h.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, h.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(h(t).filter(function() {
                    for (e = 0; e < o; e++)
                        if (h.contains(i[e], this)) return !0
                }));
                for (e = 0; e < o; e++) h.find(t, i[e], n);
                return (n = this.pushStack(o > 1 ? h.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(E(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(E(this, t || [], !0))
            },
            is: function(t) {
                return !!E(this, "string" == typeof t && x.test(t) ? h(t) : t || [], !1).length
            }
        });
        var S, N = n.document,
            k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (h.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : k.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || S).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof h ? e[0] : e, h.merge(this, h.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : N, !0)), T.test(n[1]) && h.isPlainObject(e))
                        for (n in e) h.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if ((i = N.getElementById(n[2])) && i.parentNode) {
                    if (i.id !== n[2]) return S.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = N, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : h.isFunction(t) ? void 0 !== S.ready ? S.ready(t) : t(h) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), h.makeArray(t, this))
        }).prototype = h.fn, S = h(N);
        var $ = /^(?:parents|prev(?:Until|All))/,
            A = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function D(t, e) {
            do {
                t = t[e]
            } while (t && 1 !== t.nodeType);
            return t
        }
        h.extend({
            dir: function(t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !h(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), h.fn.extend({
            has: function(t) {
                var e, n = h(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; e < i; e++)
                        if (h.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], a = x.test(t) || "string" != typeof t ? h(t, e || this.context) : 0; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && h.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        } return this.pushStack(r.length > 1 ? h.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? h.inArray(this[0], h(t)) : h.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(h.unique(h.merge(this.get(), h(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), h.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return h.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return h.dir(t, "parentNode", n)
            },
            next: function(t) {
                return D(t, "nextSibling")
            },
            prev: function(t) {
                return D(t, "previousSibling")
            },
            nextAll: function(t) {
                return h.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return h.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return h.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return h.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return h.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return h.sibling(t.firstChild)
            },
            contents: function(t) {
                return h.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : h.merge([], t.childNodes)
            }
        }, function(t, e) {
            h.fn[t] = function(n, i) {
                var o = h.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = h.filter(i, o)), this.length > 1 && (A[t] || (o = h.unique(o)), $.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var j, L = /\S+/g,
            O = {};

        function I() {
            N.addEventListener ? (N.removeEventListener("DOMContentLoaded", R, !1), n.removeEventListener("load", R, !1)) : (N.detachEvent("onreadystatechange", R), n.detachEvent("onload", R))
        }

        function R() {
            (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (I(), h.ready())
        }
        h.Callbacks = function(t) {
            t = "string" == typeof t ? O[t] || function(t) {
                var e = O[t] = {};
                return h.each(t.match(L) || [], function(t, n) {
                    e[n] = !0
                }), e
            }(t) : h.extend({}, t);
            var e, n, i, o, r, a, s = [],
                l = !t.once && [],
                u = function(d) {
                    for (n = t.memory && d, i = !0, r = a || 0, a = 0, o = s.length, e = !0; s && r < o; r++)
                        if (!1 === s[r].apply(d[0], d[1]) && t.stopOnFalse) {
                            n = !1;
                            break
                        } e = !1, s && (l ? l.length && u(l.shift()) : n ? s = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (s) {
                            var i = s.length;
                            ! function e(n) {
                                h.each(n, function(n, i) {
                                    var o = h.type(i);
                                    "function" === o ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== o && e(i)
                                })
                            }(arguments), e ? o = s.length : n && (a = i, u(n))
                        }
                        return this
                    },
                    remove: function() {
                        return s && h.each(arguments, function(t, n) {
                            for (var i;
                                (i = h.inArray(n, s, i)) > -1;) s.splice(i, 1), e && (i <= o && o--, i <= r && r--)
                        }), this
                    },
                    has: function(t) {
                        return t ? h.inArray(t, s) > -1 : !(!s || !s.length)
                    },
                    empty: function() {
                        return s = [], o = 0, this
                    },
                    disable: function() {
                        return s = l = n = void 0, this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return l = void 0, n || c.disable(), this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(t, n) {
                        return !s || i && !l || (n = [t, (n = n || []).slice ? n.slice() : n], e ? l.push(n) : u(n)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, h.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", h.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", h.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", h.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return h.Deferred(function(n) {
                                h.each(e, function(e, r) {
                                    var a = h.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && h.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? h.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, h.each(e, function(t, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function() {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    r = a.call(arguments),
                    s = r.length,
                    l = 1 !== s || t && h.isFunction(t.promise) ? s : 0,
                    u = 1 === l ? t : h.Deferred(),
                    c = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? a.call(arguments) : o, i === e ? u.notifyWith(n, i) : --l || u.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) r[o] && h.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(u.reject).progress(c(o, n, e)) : --l;
                return l || u.resolveWith(i, r), u.promise()
            }
        }), h.fn.ready = function(t) {
            return h.ready.promise().done(t), this
        }, h.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? h.readyWait++ : h.ready(!0)
            },
            ready: function(t) {
                if (!0 === t ? !--h.readyWait : !h.isReady) {
                    if (!N.body) return setTimeout(h.ready);
                    h.isReady = !0, !0 !== t && --h.readyWait > 0 || (j.resolveWith(N, [h]), h.fn.triggerHandler && (h(N).triggerHandler("ready"), h(N).off("ready")))
                }
            }
        }), h.ready.promise = function(t) {
            if (!j)
                if (j = h.Deferred(), "complete" === N.readyState) setTimeout(h.ready);
                else if (N.addEventListener) N.addEventListener("DOMContentLoaded", R, !1), n.addEventListener("load", R, !1);
            else {
                N.attachEvent("onreadystatechange", R), n.attachEvent("onload", R);
                var e = !1;
                try {
                    e = null == n.frameElement && N.documentElement
                } catch (t) {}
                e && e.doScroll && function t() {
                    if (!h.isReady) {
                        try {
                            e.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        I(), h.ready()
                    }
                }()
            }
            return j.promise(t)
        };
        var _, H = "undefined";
        for (_ in h(f)) break;
        f.ownLast = "0" !== _, f.inlineBlockNeedsLayout = !1, h(function() {
                var t, e, n, i;
                (n = N.getElementsByTagName("body")[0]) && n.style && (e = N.createElement("div"), (i = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== H && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", f.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var t = N.createElement("div");
                if (null == f.deleteExpando) {
                    f.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (t) {
                        f.deleteExpando = !1
                    }
                }
                t = null
            }(), h.acceptData = function(t) {
                var e = h.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
            };
        var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            P = /([A-Z])/g;

        function q(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(P, "-$1").toLowerCase();
                if ("string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : M.test(n) ? h.parseJSON(n) : n)
                    } catch (t) {}
                    h.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function B(t) {
            var e;
            for (e in t)
                if (("data" !== e || !h.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function F(t, e, n, i) {
            if (h.acceptData(t)) {
                var o, a, s = h.expando,
                    l = t.nodeType,
                    u = l ? h.cache : t,
                    c = l ? t[s] : t[s] && s;
                if (c && u[c] && (i || u[c].data) || void 0 !== n || "string" != typeof e) return c || (c = l ? t[s] = r.pop() || h.guid++ : s), u[c] || (u[c] = l ? {} : {
                    toJSON: h.noop
                }), "object" != typeof e && "function" != typeof e || (i ? u[c] = h.extend(u[c], e) : u[c].data = h.extend(u[c].data, e)), a = u[c], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[h.camelCase(e)] = n), "string" == typeof e ? null == (o = a[e]) && (o = a[h.camelCase(e)]) : o = a, o
            }
        }

        function W(t, e, n) {
            if (h.acceptData(t)) {
                var i, o, r = t.nodeType,
                    a = r ? h.cache : t,
                    s = r ? t[h.expando] : h.expando;
                if (a[s]) {
                    if (e && (i = n ? a[s] : a[s].data)) {
                        o = (e = h.isArray(e) ? e.concat(h.map(e, h.camelCase)) : e in i ? [e] : (e = h.camelCase(e)) in i ? [e] : e.split(" ")).length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !B(i) : !h.isEmptyObject(i)) return
                    }(n || (delete a[s].data, B(a[s]))) && (r ? h.cleanData([t], !0) : f.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }
        h.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return !!(t = t.nodeType ? h.cache[t[h.expando]] : t[h.expando]) && !B(t)
            },
            data: function(t, e, n) {
                return F(t, e, n)
            },
            removeData: function(t, e) {
                return W(t, e)
            },
            _data: function(t, e, n) {
                return F(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return W(t, e, !0)
            }
        }), h.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = h.data(r), 1 === r.nodeType && !h._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && q(r, i = h.camelCase(i.slice(5)), o[i]);
                        h._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    h.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    h.data(this, t, e)
                }) : r ? q(r, t, h.data(r, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    h.removeData(this, t)
                })
            }
        }), h.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = h._data(t, e), n && (!i || h.isArray(n) ? i = h._data(t, e, h.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = h.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = h._queueHooks(t, e);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function() {
                    h.dequeue(t, e)
                }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return h._data(t, n) || h._data(t, n, {
                    empty: h.Callbacks("once memory").add(function() {
                        h._removeData(t, e + "queue"), h._removeData(t, n)
                    })
                })
            }
        }), h.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? h.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = h.queue(this, t, e);
                    h._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && h.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    h.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = h.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = h._data(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(e)
            }
        });
        var U = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            z = ["Top", "Right", "Bottom", "Left"],
            V = function(t, e) {
                return t = e || t, "none" === h.css(t, "display") || !h.contains(t.ownerDocument, t)
            },
            X = h.access = function(t, e, n, i, o, r, a) {
                var s = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === h.type(n))
                    for (s in o = !0, n) h.access(t, e, s, n[s], !0, r, a);
                else if (void 0 !== i && (o = !0, h.isFunction(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(h(t), n)
                    })), e))
                    for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
            },
            Q = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = N.createElement("input"),
                e = N.createElement("div"),
                n = N.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", f.leadingWhitespace = 3 === e.firstChild.nodeType, f.tbody = !e.getElementsByTagName("tbody").length, f.htmlSerialize = !!e.getElementsByTagName("link").length, f.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), f.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", f.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, f.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    f.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == f.deleteExpando) {
                f.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    f.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, e, i = N.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) e = "on" + t, (f[t + "Bubbles"] = e in n) || (i.setAttribute(e, "t"), f[t + "Bubbles"] = !1 === i.attributes[e].expando);
            i = null
        }();
        var G = /^(?:input|select|textarea)$/i,
            J = /^key/,
            Y = /^(?:mouse|pointer|contextmenu)|click/,
            K = /^(?:focusinfocus|focusoutblur)$/,
            Z = /^([^.]*)(?:\.(.+)|)$/;

        function tt() {
            return !0
        }

        function et() {
            return !1
        }

        function nt() {
            try {
                return N.activeElement
            } catch (t) {}
        }

        function it(t) {
            var e = ot.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }
        h.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, a, s, l, u, c, d, p, f, m, g, v = h._data(t);
                if (v) {
                    for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = h.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || ((c = v.handle = function(t) {
                            return typeof h === H || t && h.event.triggered === t.type ? void 0 : h.event.dispatch.apply(c.elem, arguments)
                        }).elem = t), s = (e = (e || "").match(L) || [""]).length; s--;) f = g = (r = Z.exec(e[s]) || [])[1], m = (r[2] || "").split(".").sort(), f && (u = h.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = h.event.special[f] || {}, d = h.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && h.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, l), (p = a[f]) || ((p = a[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, m, c) || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), h.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, a, s, l, u, c, d, p, f, m, g, v = h.hasData(t) && h._data(t);
                if (v && (c = v.events)) {
                    for (u = (e = (e || "").match(L) || [""]).length; u--;)
                        if (f = g = (s = Z.exec(e[u]) || [])[1], m = (s[2] || "").split(".").sort(), f) {
                            for (d = h.event.special[f] || {}, p = c[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(t, a));
                            l && !p.length && (d.teardown && !1 !== d.teardown.call(t, m, v.handle) || h.removeEvent(t, f, v.handle), delete c[f])
                        } else
                            for (f in c) h.event.remove(t, f + e[u], n, i, !0);
                    h.isEmptyObject(c) && (delete v.handle, h._removeData(t, "events"))
                }
            },
            trigger: function(t, e, i, o) {
                var r, a, s, l, u, c, d, f = [i || N],
                    m = p.call(t, "type") ? t.type : t,
                    g = p.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = i = i || N, 3 !== i.nodeType && 8 !== i.nodeType && !K.test(m + h.event.triggered) && (m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort()), a = m.indexOf(":") < 0 && "on" + m, (t = t[h.expando] ? t : new h.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : h.makeArray(e, [t]), u = h.event.special[m] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, e))) {
                    if (!o && !u.noBubble && !h.isWindow(i)) {
                        for (l = u.delegateType || m, K.test(l + m) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                        c === (i.ownerDocument || N) && f.push(c.defaultView || c.parentWindow || n)
                    }
                    for (d = 0;
                        (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || m, (r = (h._data(s, "events") || {})[t.type] && h._data(s, "handle")) && r.apply(s, e), (r = a && s[a]) && r.apply && h.acceptData(s) && (t.result = r.apply(s, e), !1 === t.result && t.preventDefault());
                    if (t.type = m, !o && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), e)) && h.acceptData(i) && a && i[m] && !h.isWindow(i)) {
                        (c = i[a]) && (i[a] = null), h.event.triggered = m;
                        try {
                            i[m]()
                        } catch (t) {}
                        h.event.triggered = void 0, c && (i[a] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(t) {
                t = h.event.fix(t);
                var e, n, i, o, r, s = [],
                    l = a.call(arguments),
                    u = (h._data(this, "events") || {})[t.type] || [],
                    c = h.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                    for (s = h.event.handlers.call(this, t, u), e = 0;
                        (o = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, r = 0;
                            (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(i.namespace) || (t.handleObj = i, t.data = i.data, void 0 !== (n = ((h.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, a = [],
                    s = e.delegateCount,
                    l = t.target;
                if (s && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (o = [], r = 0; r < s; r++) void 0 === o[n = (i = e[r]).selector + " "] && (o[n] = i.needsContext ? h(n, this).index(l) >= 0 : h.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && a.push({
                                elem: l,
                                handlers: o
                            })
                        } return s < e.length && a.push({
                    elem: this,
                    handlers: e.slice(s)
                }), a
            },
            fix: function(t) {
                if (t[h.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Y.test(o) ? this.mouseHooks : J.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new h.Event(r), e = i.length; e--;) t[n = i[e]] = r[n];
                return t.target || (t.target = r.srcElement || N), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button,
                        a = e.fromElement;
                    return null == t.pageX && null != e.clientX && (o = (i = t.target.ownerDocument || N).documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== nt() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === nt() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (h.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(t) {
                        return h.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = h.extend(new h.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? h.event.trigger(o, null, e) : h.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, h.removeEvent = N.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === H && (t[i] = null), t.detachEvent(i, n))
        }, h.Event = function(t, e) {
            if (!(this instanceof h.Event)) return new h.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? tt : et) : this.type = t, e && h.extend(this, e), this.timeStamp = t && t.timeStamp || h.now(), this[h.expando] = !0
        }, h.Event.prototype = {
            isDefaultPrevented: et,
            isPropagationStopped: et,
            isImmediatePropagationStopped: et,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = tt, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = tt, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = tt, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, h.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            h.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === i || h.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), f.submitBubbles || (h.event.special.submit = {
            setup: function() {
                if (h.nodeName(this, "form")) return !1;
                h.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = h.nodeName(e, "input") || h.nodeName(e, "button") ? e.form : void 0;
                    n && !h._data(n, "submitBubbles") && (h.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), h._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && h.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                if (h.nodeName(this, "form")) return !1;
                h.event.remove(this, "._submit")
            }
        }), f.changeBubbles || (h.event.special.change = {
            setup: function() {
                if (G.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (h.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), h.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), h.event.simulate("change", this, t, !0)
                })), !1;
                h.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    G.test(e.nodeName) && !h._data(e, "changeBubbles") && (h.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || h.event.simulate("change", this.parentNode, t, !0)
                    }), h._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return h.event.remove(this, "._change"), !G.test(this.nodeName)
            }
        }), f.focusinBubbles || h.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                h.event.simulate(e, t.target, h.event.fix(t), !0)
            };
            h.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = h._data(i, e);
                    o || i.addEventListener(t, n, !0), h._data(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = h._data(i, e) - 1;
                    o ? h._data(i, e, o) : (i.removeEventListener(t, n, !0), h._removeData(i, e))
                }
            }
        }), h.fn.extend({
            on: function(t, e, n, i, o) {
                var r, a;
                if ("object" == typeof t) {
                    for (r in "string" != typeof e && (n = n || e, e = void 0), t) this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), !1 === i) i = et;
                else if (!i) return this;
                return 1 === o && (a = i, (i = function(t) {
                    return h().off(t), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = h.guid++)), this.each(function() {
                    h.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, h(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = et), this.each(function() {
                    h.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    h.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return h.event.trigger(t, e, n, !0)
            }
        });
        var ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            rt = / jQuery\d+="(?:null|\d+)"/g,
            at = new RegExp("<(?:" + ot + ")[\\s/>]", "i"),
            st = /^\s+/,
            lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            ut = /<([\w:]+)/,
            ct = /<tbody/i,
            dt = /<|&#?\w+;/,
            pt = /<(?:script|style|link)/i,
            ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ht = /^$|\/(?:java|ecma)script/i,
            mt = /^true\/(.*)/,
            gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            vt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: f.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            yt = it(N).appendChild(N.createElement("div"));

        function bt(t, e) {
            var n, i, o = 0,
                r = typeof t.getElementsByTagName !== H ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== H ? t.querySelectorAll(e || "*") : void 0;
            if (!r)
                for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || h.nodeName(i, e) ? r.push(i) : h.merge(r, bt(i, e));
            return void 0 === e || e && h.nodeName(t, e) ? h.merge([t], r) : r
        }

        function wt(t) {
            Q.test(t.type) && (t.defaultChecked = t.checked)
        }

        function xt(t, e) {
            return h.nodeName(t, "table") && h.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function Tt(t) {
            return t.type = (null !== h.find.attr(t, "type")) + "/" + t.type, t
        }

        function Ct(t) {
            var e = mt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function Et(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) h._data(n, "globalEval", !e || h._data(e[i], "globalEval"))
        }

        function St(t, e) {
            if (1 === e.nodeType && h.hasData(t)) {
                var n, i, o, r = h._data(t),
                    a = h._data(e, r),
                    s = r.events;
                if (s)
                    for (n in delete a.handle, a.events = {}, s)
                        for (i = 0, o = s[n].length; i < o; i++) h.event.add(e, n, s[n][i]);
                a.data && (a.data = h.extend({}, a.data))
            }
        }

        function Nt(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !f.noCloneEvent && e[h.expando]) {
                    for (i in (o = h._data(e)).events) h.removeEvent(e, i, o.handle);
                    e.removeAttribute(h.expando)
                }
                "script" === n && e.text !== t.text ? (Tt(e).text = t.text, Ct(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), f.html5Clone && t.innerHTML && !h.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Q.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
            }
        }
        vt.optgroup = vt.option, vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead, vt.th = vt.td, h.extend({
            clone: function(t, e, n) {
                var i, o, r, a, s, l = h.contains(t.ownerDocument, t);
                if (f.html5Clone || h.isXMLDoc(t) || !at.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (yt.innerHTML = t.outerHTML, yt.removeChild(r = yt.firstChild)), !(f.noCloneEvent && f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || h.isXMLDoc(t)))
                    for (i = bt(r), s = bt(t), a = 0; null != (o = s[a]); ++a) i[a] && Nt(o, i[a]);
                if (e)
                    if (n)
                        for (s = s || bt(t), i = i || bt(r), a = 0; null != (o = s[a]); a++) St(o, i[a]);
                    else St(t, r);
                return (i = bt(r, "script")).length > 0 && Et(i, !l && bt(t, "script")), i = s = o = null, r
            },
            buildFragment: function(t, e, n, i) {
                for (var o, r, a, s, l, u, c, d = t.length, p = it(e), m = [], g = 0; g < d; g++)
                    if ((r = t[g]) || 0 === r)
                        if ("object" === h.type(r)) h.merge(m, r.nodeType ? [r] : r);
                        else if (dt.test(r)) {
                    for (s = s || p.appendChild(e.createElement("div")), l = (ut.exec(r) || ["", ""])[1].toLowerCase(), c = vt[l] || vt._default, s.innerHTML = c[1] + r.replace(lt, "<$1></$2>") + c[2], o = c[0]; o--;) s = s.lastChild;
                    if (!f.leadingWhitespace && st.test(r) && m.push(e.createTextNode(st.exec(r)[0])), !f.tbody)
                        for (o = (r = "table" !== l || ct.test(r) ? "<table>" !== c[1] || ct.test(r) ? 0 : s : s.firstChild) && r.childNodes.length; o--;) h.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                    for (h.merge(m, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
                } else m.push(e.createTextNode(r));
                for (s && p.removeChild(s), f.appendChecked || h.grep(bt(m, "input"), wt), g = 0; r = m[g++];)
                    if ((!i || -1 === h.inArray(r, i)) && (a = h.contains(r.ownerDocument, r), s = bt(p.appendChild(r), "script"), a && Et(s), n))
                        for (o = 0; r = s[o++];) ht.test(r.type || "") && n.push(r);
                return s = null, p
            },
            cleanData: function(t, e) {
                for (var n, i, o, a, s = 0, l = h.expando, u = h.cache, c = f.deleteExpando, d = h.event.special; null != (n = t[s]); s++)
                    if ((e || h.acceptData(n)) && (a = (o = n[l]) && u[o])) {
                        if (a.events)
                            for (i in a.events) d[i] ? h.event.remove(n, i) : h.removeEvent(n, i, a.handle);
                        u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== H ? n.removeAttribute(l) : n[l] = null, r.push(o))
                    }
            }
        }), h.fn.extend({
            text: function(t) {
                return X(this, function(t) {
                    return void 0 === t ? h.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || xt(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = xt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? h.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || h.cleanData(bt(n)), n.parentNode && (e && h.contains(n.ownerDocument, n) && Et(bt(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && h.cleanData(bt(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && h.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return h.clone(this, t, e)
                })
            },
            html: function(t) {
                return X(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(rt, "") : void 0;
                    if ("string" == typeof t && !pt.test(t) && (f.htmlSerialize || !at.test(t)) && (f.leadingWhitespace || !st.test(t)) && !vt[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(lt, "<$1></$2>");
                        try {
                            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (h.cleanData(bt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, h.cleanData(bt(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = s.apply([], t);
                var n, i, o, r, a, l, u = 0,
                    c = this.length,
                    d = this,
                    p = c - 1,
                    m = t[0],
                    g = h.isFunction(m);
                if (g || c > 1 && "string" == typeof m && !f.checkClone && ft.test(m)) return this.each(function(n) {
                    var i = d.eq(n);
                    g && (t[0] = m.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (n = (l = h.buildFragment(t, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = n), n)) {
                    for (o = (r = h.map(bt(l, "script"), Tt)).length; u < c; u++) i = l, u !== p && (i = h.clone(i, !0, !0), o && h.merge(r, bt(i, "script"))), e.call(this[u], i, u);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, h.map(r, Ct), u = 0; u < o; u++) i = r[u], ht.test(i.type || "") && !h._data(i, "globalEval") && h.contains(a, i) && (i.src ? h._evalUrl && h._evalUrl(i.src) : h.globalEval((i.text || i.textContent || i.innerHTML || "").replace(gt, "")));
                    l = n = null
                }
                return this
            }
        }), h.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            h.fn[t] = function(t) {
                for (var n, i = 0, o = [], r = h(t), a = r.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), h(r[i])[e](n), l.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var kt, $t, At = {};

        function Dt(t, e) {
            var i, o = h(e.createElement(t)).appendTo(e.body),
                r = n.getDefaultComputedStyle && (i = n.getDefaultComputedStyle(o[0])) ? i.display : h.css(o[0], "display");
            return o.detach(), r
        }

        function jt(t) {
            var e = N,
                n = At[t];
            return n || ("none" !== (n = Dt(t, e)) && n || ((e = ((kt = (kt || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || kt[0].contentDocument).document).write(), e.close(), n = Dt(t, e), kt.detach()), At[t] = n), n
        }
        f.shrinkWrapBlocks = function() {
            return null != $t ? $t : ($t = !1, (e = N.getElementsByTagName("body")[0]) && e.style ? (t = N.createElement("div"), (n = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), typeof t.style.zoom !== H && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(N.createElement("div")).style.width = "5px", $t = 3 !== t.offsetWidth), e.removeChild(n), $t) : void 0);
            var t, e, n
        };
        var Lt, Ot, It = /^margin/,
            Rt = new RegExp("^(" + U + ")(?!px)[a-z%]+$", "i"),
            _t = /^(top|right|bottom|left)$/;

        function Ht(t, e) {
            return {
                get: function() {
                    var n = t();
                    if (null != n) {
                        if (!n) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }
        }
        n.getComputedStyle ? (Lt = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
            }, Ot = function(t, e, n) {
                var i, o, r, a, s = t.style;
                return a = (n = n || Lt(t)) ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || h.contains(t.ownerDocument, t) || (a = h.style(t, e)), Rt.test(a) && It.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
            }) : N.documentElement.currentStyle && (Lt = function(t) {
                return t.currentStyle
            }, Ot = function(t, e, n) {
                var i, o, r, a, s = t.style;
                return null == (a = (n = n || Lt(t)) ? n[e] : void 0) && s && s[e] && (a = s[e]), Rt.test(a) && !_t.test(e) && (i = s.left, (r = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
            }),
            function() {
                var t, e, i, o, r, a, s;

                function l() {
                    var t, e, i, l;
                    (e = N.getElementsByTagName("body")[0]) && e.style && (t = N.createElement("div"), (i = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, s = !0, n.getComputedStyle && (o = "1%" !== (n.getComputedStyle(t, null) || {}).top, r = "4px" === (n.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width, (l = t.appendChild(N.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", t.style.width = "1px", s = !parseFloat((n.getComputedStyle(l, null) || {}).marginRight), t.removeChild(l)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", a = 0 === l[0].offsetHeight), e.removeChild(i))
                }(t = N.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (e = (i = t.getElementsByTagName("a")[0]) && i.style) && (e.cssText = "float:left;opacity:.5", f.opacity = "0.5" === e.opacity, f.cssFloat = !!e.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === t.style.backgroundClip, f.boxSizing = "" === e.boxSizing || "" === e.MozBoxSizing || "" === e.WebkitBoxSizing, h.extend(f, {
                    reliableHiddenOffsets: function() {
                        return null == a && l(), a
                    },
                    boxSizingReliable: function() {
                        return null == r && l(), r
                    },
                    pixelPosition: function() {
                        return null == o && l(), o
                    },
                    reliableMarginRight: function() {
                        return null == s && l(), s
                    }
                }))
            }(), h.swap = function(t, e, n, i) {
                var o, r, a = {};
                for (r in e) a[r] = t.style[r], t.style[r] = e[r];
                for (r in o = n.apply(t, i || []), e) t.style[r] = a[r];
                return o
            };
        var Mt = /alpha\([^)]*\)/i,
            Pt = /opacity\s*=\s*([^)]*)/,
            qt = /^(none|table(?!-c[ea]).+)/,
            Bt = new RegExp("^(" + U + ")(.*)$", "i"),
            Ft = new RegExp("^([+-])=(" + U + ")", "i"),
            Wt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ut = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            zt = ["Webkit", "O", "Moz", "ms"];

        function Vt(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = zt.length; o--;)
                if ((e = zt[o] + n) in t) return e;
            return i
        }

        function Xt(t, e) {
            for (var n, i, o, r = [], a = 0, s = t.length; a < s; a++)(i = t[a]).style && (r[a] = h._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && V(i) && (r[a] = h._data(i, "olddisplay", jt(i.nodeName)))) : (o = V(i), (n && "none" !== n || !o) && h._data(i, "olddisplay", o ? n : h.css(i, "display"))));
            for (a = 0; a < s; a++)(i = t[a]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
            return t
        }

        function Qt(t, e, n) {
            var i = Bt.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function Gt(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += h.css(t, n + z[r], !0, o)), i ? ("content" === n && (a -= h.css(t, "padding" + z[r], !0, o)), "margin" !== n && (a -= h.css(t, "border" + z[r] + "Width", !0, o))) : (a += h.css(t, "padding" + z[r], !0, o), "padding" !== n && (a += h.css(t, "border" + z[r] + "Width", !0, o)));
            return a
        }

        function Jt(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = Lt(t),
                a = f.boxSizing && "border-box" === h.css(t, "boxSizing", !1, r);
            if (o <= 0 || null == o) {
                if (((o = Ot(t, e, r)) < 0 || null == o) && (o = t.style[e]), Rt.test(o)) return o;
                i = a && (f.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + Gt(t, e, n || (a ? "border" : "content"), i, r) + "px"
        }

        function Yt(t, e, n, i, o) {
            return new Yt.prototype.init(t, e, n, i, o)
        }
        h.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = Ot(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: f.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, a, s = h.camelCase(e),
                        l = t.style;
                    if (e = h.cssProps[s] || (h.cssProps[s] = Vt(l, s)), a = h.cssHooks[e] || h.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e];
                    if ("string" == (r = typeof n) && (o = Ft.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(h.css(t, e)), r = "number"), null != n && n == n && ("number" !== r || h.cssNumber[s] || (n += "px"), f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
                        l[e] = n
                    } catch (t) {}
                }
            },
            css: function(t, e, n, i) {
                var o, r, a, s = h.camelCase(e);
                return e = h.cssProps[s] || (h.cssProps[s] = Vt(t.style, s)), (a = h.cssHooks[e] || h.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = Ot(t, e, i)), "normal" === r && e in Ut && (r = Ut[e]), "" === n || n ? (o = parseFloat(r), !0 === n || h.isNumeric(o) ? o || 0 : r) : r
            }
        }), h.each(["height", "width"], function(t, e) {
            h.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return qt.test(h.css(t, "display")) && 0 === t.offsetWidth ? h.swap(t, Wt, function() {
                        return Jt(t, e, i)
                    }) : Jt(t, e, i)
                },
                set: function(t, n, i) {
                    var o = i && Lt(t);
                    return Qt(0, n, i ? Gt(t, e, i, f.boxSizing && "border-box" === h.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), f.opacity || (h.cssHooks.opacity = {
            get: function(t, e) {
                return Pt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = h.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === h.trim(r.replace(Mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = Mt.test(r) ? r.replace(Mt, o) : r + " " + o)
            }
        }), h.cssHooks.marginRight = Ht(f.reliableMarginRight, function(t, e) {
            if (e) return h.swap(t, {
                display: "inline-block"
            }, Ot, [t, "marginRight"])
        }), h.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            h.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + z[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, It.test(t) || (h.cssHooks[t + e].set = Qt)
        }), h.fn.extend({
            css: function(t, e) {
                return X(this, function(t, e, n) {
                    var i, o, r = {},
                        a = 0;
                    if (h.isArray(e)) {
                        for (i = Lt(t), o = e.length; a < o; a++) r[e[a]] = h.css(t, e[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? h.style(t, e, n) : h.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return Xt(this, !0)
            },
            hide: function() {
                return Xt(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    V(this) ? h(this).show() : h(this).hide()
                })
            }
        }), h.Tween = Yt, Yt.prototype = {
            constructor: Yt,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (h.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = Yt.propHooks[this.prop];
                return t && t.get ? t.get(this) : Yt.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = Yt.propHooks[this.prop];
                return this.options.duration ? this.pos = e = h.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
            }
        }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = h.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                },
                set: function(t) {
                    h.fx.step[t.prop] ? h.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[h.cssProps[t.prop]] || h.cssHooks[t.prop]) ? h.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, h.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, h.fx = Yt.prototype.init, h.fx.step = {};
        var Kt, Zt, te, ee, ne, ie, oe, re = /^(?:toggle|show|hide)$/,
            ae = new RegExp("^(?:([+-])=|)(" + U + ")([a-z%]*)$", "i"),
            se = /queueHooks$/,
            le = [function(t, e, n) {
                var i, o, r, a, s, l, u, c = this,
                    d = {},
                    p = t.style,
                    m = t.nodeType && V(t),
                    g = h._data(t, "fxshow");
                for (i in n.queue || (null == (s = h._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || l()
                    }), s.unqueued++, c.always(function() {
                        c.always(function() {
                            s.unqueued--, h.queue(t, "fx").length || s.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (u = h.css(t, "display")) ? h._data(t, "olddisplay") || jt(t.nodeName) : u) && "none" === h.css(t, "float") && (f.inlineBlockNeedsLayout && "inline" !== jt(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.shrinkWrapBlocks() || c.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), e)
                    if (o = e[i], re.exec(o)) {
                        if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            m = !0
                        }
                        d[i] = g && g[i] || h.style(t, i)
                    } else u = void 0;
                if (h.isEmptyObject(d)) "inline" === ("none" === u ? jt(t.nodeName) : u) && (p.display = u);
                else
                    for (i in g ? "hidden" in g && (m = g.hidden) : g = h._data(t, "fxshow", {}), r && (g.hidden = !m), m ? h(t).show() : c.done(function() {
                            h(t).hide()
                        }), c.done(function() {
                            var e;
                            for (e in h._removeData(t, "fxshow"), d) h.style(t, e, d[e])
                        }), d) a = pe(m ? g[i] : 0, i, c), i in g || (g[i] = a.start, m && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }],
            ue = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = ae.exec(e),
                        r = o && o[3] || (h.cssNumber[t] ? "" : "px"),
                        a = (h.cssNumber[t] || "px" !== r && +i) && ae.exec(h.css(n.elem, t)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], o = o || [], a = +i || 1;
                        do {
                            a /= s = s || ".5", h.style(n.elem, t, a + r)
                        } while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };

        function ce() {
            return setTimeout(function() {
                Kt = void 0
            }), Kt = h.now()
        }

        function de(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; o < 4; o += 2 - e) i["margin" + (n = z[o])] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function pe(t, e, n) {
            for (var i, o = (ue[e] || []).concat(ue["*"]), r = 0, a = o.length; r < a; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function fe(t, e, n) {
            var i, o, r = 0,
                a = le.length,
                s = h.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Kt || ce(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), r = 0, a = u.tweens.length; r < a; r++) u.tweens[r].run(i);
                    return s.notifyWith(t, [u, i, n]), i < 1 && a ? n : (s.resolveWith(t, [u]), !1)
                },
                u = s.promise({
                    elem: t,
                    props: h.extend({}, e),
                    opts: h.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Kt || ce(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = h.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (function(t, e) {
                    var n, i, o, r, a;
                    for (n in t)
                        if (o = e[i = h.camelCase(n)], r = t[n], h.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = h.cssHooks[i]) && "expand" in a)
                            for (n in r = a.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                        else e[i] = o
                }(c, u.opts.specialEasing); r < a; r++)
                if (i = le[r].call(u, t, c, u.opts)) return i;
            return h.map(c, pe, u), h.isFunction(u.opts.start) && u.opts.start.call(t, u), h.fx.timer(h.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        h.Animation = h.extend(fe, {
            tweener: function(t, e) {
                h.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; i < o; i++) n = t[i], ue[n] = ue[n] || [], ue[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? le.unshift(t) : le.push(t)
            }
        }), h.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? h.extend({}, t) : {
                complete: n || !n && e || h.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !h.isFunction(e) && e
            };
            return i.duration = h.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in h.fx.speeds ? h.fx.speeds[i.duration] : h.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                h.isFunction(i.old) && i.old.call(this), i.queue && h.dequeue(this, i.queue)
            }, i
        }, h.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = h.isEmptyObject(t),
                    r = h.speed(e, n, i),
                    a = function() {
                        var e = fe(this, h.extend({}, t), r);
                        (o || h._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = h.timers,
                        a = h._data(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && se.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    !e && n || h.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, n = h._data(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        r = h.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, h.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), h.each(["toggle", "show", "hide"], function(t, e) {
            var n = h.fn[e];
            h.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(de(e, !0), t, i, o)
            }
        }), h.each({
            slideDown: de("show"),
            slideUp: de("hide"),
            slideToggle: de("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            h.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), h.timers = [], h.fx.tick = function() {
            var t, e = h.timers,
                n = 0;
            for (Kt = h.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
            e.length || h.fx.stop(), Kt = void 0
        }, h.fx.timer = function(t) {
            h.timers.push(t), t() ? h.fx.start() : h.timers.pop()
        }, h.fx.interval = 13, h.fx.start = function() {
            Zt || (Zt = setInterval(h.fx.tick, h.fx.interval))
        }, h.fx.stop = function() {
            clearInterval(Zt), Zt = null
        }, h.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, h.fn.delay = function(t, e) {
            return t = h.fx && h.fx.speeds[t] || t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        }, (ee = N.createElement("div")).setAttribute("className", "t"), ee.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie = ee.getElementsByTagName("a")[0], oe = (ne = N.createElement("select")).appendChild(N.createElement("option")), te = ee.getElementsByTagName("input")[0], ie.style.cssText = "top:1px", f.getSetAttribute = "t" !== ee.className, f.style = /top/.test(ie.getAttribute("style")), f.hrefNormalized = "/a" === ie.getAttribute("href"), f.checkOn = !!te.value, f.optSelected = oe.selected, f.enctype = !!N.createElement("form").enctype, ne.disabled = !0, f.optDisabled = !oe.disabled, (te = N.createElement("input")).setAttribute("value", ""), f.input = "" === te.getAttribute("value"), te.value = "t", te.setAttribute("type", "radio"), f.radioValue = "t" === te.value;
        var he = /\r/g;
        h.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = h.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? t.call(this, n, h(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : h.isArray(o) && (o = h.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = h.valHooks[o.type] || h.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(he, "") : null == n ? "" : n : void 0
            }
        }), h.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = h.find.attr(t, "value");
                        return null != e ? e : h.trim(h.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                            if (((n = i[l]).selected || l === o) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !h.nodeName(n.parentNode, "optgroup"))) {
                                if (e = h(n).val(), r) return e;
                                a.push(e)
                            } return a
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = h.makeArray(e), a = o.length; a--;)
                            if (i = o[a], h.inArray(h.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
                            } catch (t) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), h.each(["radio", "checkbox"], function() {
            h.valHooks[this] = {
                set: function(t, e) {
                    if (h.isArray(e)) return t.checked = h.inArray(h(t).val(), e) >= 0
                }
            }, f.checkOn || (h.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var me, ge, ve = h.expr.attrHandle,
            ye = /^(?:checked|selected)$/i,
            be = f.getSetAttribute,
            we = f.input;
        h.fn.extend({
            attr: function(t, e) {
                return X(this, h.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    h.removeAttr(this, t)
                })
            }
        }), h.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === H ? h.prop(t, e, n) : (1 === r && h.isXMLDoc(t) || (e = e.toLowerCase(), i = h.attrHooks[e] || (h.expr.match.bool.test(e) ? ge : me)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : null == (o = h.find.attr(t, e)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void h.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(L);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = h.propFix[n] || n, h.expr.match.bool.test(n) ? we && be || !ye.test(n) ? t[i] = !1 : t[h.camelCase("default-" + n)] = t[i] = !1 : h.attr(t, n, ""), t.removeAttribute(be ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!f.radioValue && "radio" === e && h.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), ge = {
            set: function(t, e, n) {
                return !1 === e ? h.removeAttr(t, n) : we && be || !ye.test(n) ? t.setAttribute(!be && h.propFix[n] || n, n) : t[h.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, h.each(h.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = ve[e] || h.find.attr;
            ve[e] = we && be || !ye.test(e) ? function(t, e, i) {
                var o, r;
                return i || (r = ve[e], ve[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ve[e] = r), o
            } : function(t, e, n) {
                if (!n) return t[h.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), we && be || (h.attrHooks.value = {
            set: function(t, e, n) {
                if (!h.nodeName(t, "input")) return me && me.set(t, e, n);
                t.defaultValue = e
            }
        }), be || (me = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
            }
        }, ve.id = ve.name = ve.coords = function(t, e, n) {
            var i;
            if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, h.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                if (n && n.specified) return n.value
            },
            set: me.set
        }, h.attrHooks.contenteditable = {
            set: function(t, e, n) {
                me.set(t, "" !== e && e, n)
            }
        }, h.each(["width", "height"], function(t, e) {
            h.attrHooks[e] = {
                set: function(t, n) {
                    if ("" === n) return t.setAttribute(e, "auto"), n
                }
            }
        })), f.style || (h.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var xe = /^(?:input|select|textarea|button|object)$/i,
            Te = /^(?:a|area)$/i;
        h.fn.extend({
            prop: function(t, e) {
                return X(this, h.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = h.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (t) {}
                })
            }
        }), h.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !h.isXMLDoc(t)) && (e = h.propFix[e] || e, o = h.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = h.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : xe.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), f.hrefNormalized || h.each(["href", "src"], function(t, e) {
            h.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), f.optSelected || (h.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            h.propFix[this.toLowerCase()] = this
        }), f.enctype || (h.propFix.enctype = "encoding");
        var Ce = /[\t\r\n\f]/g;
        h.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, a, s = 0,
                    l = this.length,
                    u = "string" == typeof t && t;
                if (h.isFunction(t)) return this.each(function(e) {
                    h(this).addClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(L) || []; s < l; s++)
                        if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(Ce, " ") : " ")) {
                            for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = h.trim(i), n.className !== a && (n.className = a)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, a, s = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof t && t;
                if (h.isFunction(t)) return this.each(function(e) {
                    h(this).removeClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(L) || []; s < l; s++)
                        if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(Ce, " ") : "")) {
                            for (r = 0; o = e[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            a = t ? h.trim(i) : "", n.className !== a && (n.className = a)
                        } return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : h.isFunction(t) ? this.each(function(n) {
                    h(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var e, i = 0, o = h(this), r = t.match(L) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else n !== H && "boolean" !== n || (this.className && h._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : h._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ce, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            h.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), h.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Ee = h.now(),
            Se = /\?/,
            Ne = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        h.parseJSON = function(t) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
            var e, i = null,
                o = h.trim(t + "");
            return o && !h.trim(o.replace(Ne, function(t, n, o, r) {
                return e && n && (i = 0), 0 === i ? t : (e = o || n, i += !r - !o, "")
            })) ? Function("return " + o)() : h.error("Invalid JSON: " + t)
        }, h.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                n.DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
            } catch (t) {
                e = void 0
            }
            return e && e.documentElement && !e.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + t), e
        };
        var ke, $e, Ae = /#.*$/,
            De = /([?&])_=[^&]*/,
            je = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Le = /^(?:GET|HEAD)$/,
            Oe = /^\/\//,
            Ie = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Re = {},
            _e = {},
            He = "*/".concat("*");
        try {
            $e = location.href
        } catch (t) {
            ($e = N.createElement("a")).href = "", $e = $e.href
        }

        function Me(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(L) || [];
                if (h.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function Pe(t, e, n, i) {
            var o = {},
                r = t === _e;

            function a(s) {
                var l;
                return o[s] = !0, h.each(t[s] || [], function(t, s) {
                    var u = s(e, n, i);
                    return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), a(u), !1)
                }), l
            }
            return a(e.dataTypes[0]) || !o["*"] && a("*")
        }

        function qe(t, e) {
            var n, i, o = h.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && h.extend(!0, t, n), t
        }
        ke = Ie.exec($e.toLowerCase()) || [], h.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: $e,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ke[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": He,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": h.parseJSON,
                    "text xml": h.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? qe(qe(t, h.ajaxSettings), e) : qe(h.ajaxSettings, t)
            },
            ajaxPrefilter: Me(Re),
            ajaxTransport: Me(_e),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, i, o, r, a, s, l, u, c = h.ajaxSetup({}, e),
                    d = c.context || c,
                    p = c.context && (d.nodeType || d.jquery) ? h(d) : h.event,
                    f = h.Deferred(),
                    m = h.Callbacks("once memory"),
                    g = c.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; e = je.exec(r);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (c.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (b < 2)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return l && l.abort(e), T(0, e), this
                        }
                    };
                if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, c.url = ((t || c.url || $e) + "").replace(Ae, "").replace(Oe, ke[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = h.trim(c.dataType || "*").toLowerCase().match(L) || [""], null == c.crossDomain && (n = Ie.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === ke[1] && n[2] === ke[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (ke[3] || ("http:" === ke[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = h.param(c.data, c.traditional)), Pe(Re, c, e, x), 2 === b) return x;
                for (i in (s = h.event && c.global) && 0 == h.active++ && h.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Le.test(c.type), o = c.url, c.hasContent || (c.data && (o = c.url += (Se.test(o) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = De.test(o) ? o.replace(De, "$1_=" + Ee++) : o + (Se.test(o) ? "&" : "?") + "_=" + Ee++)), c.ifModified && (h.lastModified[o] && x.setRequestHeader("If-Modified-Since", h.lastModified[o]), h.etag[o] && x.setRequestHeader("If-None-Match", h.etag[o])), (c.data && c.hasContent && !1 !== c.contentType || e.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + He + "; q=0.01" : "") : c.accepts["*"]), c.headers) x.setRequestHeader(i, c.headers[i]);
                if (c.beforeSend && (!1 === c.beforeSend.call(d, x, c) || 2 === b)) return x.abort();
                for (i in w = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[i](c[i]);
                if (l = Pe(_e, c, e, x)) {
                    x.readyState = 1, s && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (a = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, l.send(v, T)
                    } catch (t) {
                        if (!(b < 2)) throw t;
                        T(-1, t)
                    }
                } else T(-1, "No Transport");

                function T(t, e, n, i) {
                    var u, v, y, w, T, C = e;
                    2 !== b && (b = 2, a && clearTimeout(a), l = void 0, r = i || "", x.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, n && (w = function(t, e, n) {
                        for (var i, o, r, a, s = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (o)
                            for (a in s)
                                if (s[a] && s[a].test(o)) {
                                    l.unshift(a);
                                    break
                                } if (l[0] in n) r = l[0];
                        else {
                            for (a in n) {
                                if (!l[0] || t.converters[a + " " + l[0]]) {
                                    r = a;
                                    break
                                }
                                i || (i = a)
                            }
                            r = r || i
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r]
                    }(c, x, n)), w = function(t, e, n, i) {
                        var o, r, a, s, l, u = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
                        for (r = c.shift(); r;)
                            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(a = u[l + " " + r] || u["* " + r]))
                                for (o in u)
                                    if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                        !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && t.throws) e = a(e);
                                else try {
                                    e = a(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: a ? t : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(c, w, x, u), u ? (c.ifModified && ((T = x.getResponseHeader("Last-Modified")) && (h.lastModified[o] = T), (T = x.getResponseHeader("etag")) && (h.etag[o] = T)), 204 === t || "HEAD" === c.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, v = w.data, u = !(y = w.error))) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || C) + "", u ? f.resolveWith(d, [v, C, x]) : f.rejectWith(d, [x, C, y]), x.statusCode(g), g = void 0, s && p.trigger(u ? "ajaxSuccess" : "ajaxError", [x, c, u ? v : y]), m.fireWith(d, [x, C]), s && (p.trigger("ajaxComplete", [x, c]), --h.active || h.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(t, e, n) {
                return h.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return h.get(t, void 0, e, "script")
            }
        }), h.each(["get", "post"], function(t, e) {
            h[e] = function(t, n, i, o) {
                return h.isFunction(n) && (o = o || i, i = n, n = void 0), h.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), h._evalUrl = function(t) {
            return h.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, h.fn.extend({
            wrapAll: function(t) {
                if (h.isFunction(t)) return this.each(function(e) {
                    h(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = h(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return h.isFunction(t) ? this.each(function(e) {
                    h(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = h(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = h.isFunction(t);
                return this.each(function(n) {
                    h(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
                }).end()
            }
        }), h.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !f.reliableHiddenOffsets() && "none" === (t.style && t.style.display || h.css(t, "display"))
        }, h.expr.filters.visible = function(t) {
            return !h.expr.filters.hidden(t)
        };
        var Be = /%20/g,
            Fe = /\[\]$/,
            We = /\r?\n/g,
            Ue = /^(?:submit|button|image|reset|file)$/i,
            ze = /^(?:input|select|textarea|keygen)/i;

        function Ve(t, e, n, i) {
            var o;
            if (h.isArray(e)) h.each(e, function(e, o) {
                n || Fe.test(t) ? i(t, o) : Ve(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== h.type(e)) i(t, e);
            else
                for (o in e) Ve(t + "[" + o + "]", e[o], n, i)
        }
        h.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = h.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = h.ajaxSettings && h.ajaxSettings.traditional), h.isArray(t) || t.jquery && !h.isPlainObject(t)) h.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) Ve(n, t[n], e, o);
            return i.join("&").replace(Be, "+")
        }, h.fn.extend({
            serialize: function() {
                return h.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = h.prop(this, "elements");
                    return t ? h.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !h(this).is(":disabled") && ze.test(this.nodeName) && !Ue.test(t) && (this.checked || !Q.test(t))
                }).map(function(t, e) {
                    var n = h(this).val();
                    return null == n ? null : h.isArray(n) ? h.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(We, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(We, "\r\n")
                    }
                }).get()
            }
        }), h.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Je() || function() {
                try {
                    return new n.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }()
        } : Je;
        var Xe = 0,
            Qe = {},
            Ge = h.ajaxSettings.xhr();

        function Je() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }
        n.attachEvent && n.attachEvent("onunload", function() {
            for (var t in Qe) Qe[t](void 0, !0)
        }), f.cors = !!Ge && "withCredentials" in Ge, (Ge = f.ajax = !!Ge) && h.ajaxTransport(function(t) {
            var e;
            if (!t.crossDomain || f.cors) return {
                send: function(n, i) {
                    var o, r = t.xhr(),
                        a = ++Xe;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) r[o] = t.xhrFields[o];
                    for (o in t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(t.hasContent && t.data || null), e = function(n, o) {
                        var s, l, u;
                        if (e && (o || 4 === r.readyState))
                            if (delete Qe[a], e = void 0, r.onreadystatechange = h.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                u = {}, s = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (t) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            } u && i(s, l, u, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Qe[a] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }), h.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return h.globalEval(t), t
                }
            }
        }), h.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), h.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = N.head || h("head")[0] || N.documentElement;
                return {
                    send: function(i, o) {
                        (e = N.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var Ye = [],
            Ke = /(=)\?(?=&|$)|\?\?/;
        h.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ye.pop() || h.expando + "_" + Ee++;
                return this[t] = !0, t
            }
        }), h.ajaxPrefilter("json jsonp", function(t, e, i) {
            var o, r, a, s = !1 !== t.jsonp && (Ke.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = h.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ke, "$1" + o) : !1 !== t.jsonp && (t.url += (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || h.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = n[o], n[o] = function() {
                a = arguments
            }, i.always(function() {
                n[o] = r, t[o] && (t.jsonpCallback = e.jsonpCallback, Ye.push(o)), a && h.isFunction(r) && r(a[0]), a = r = void 0
            }), "script"
        }), h.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || N;
            var i = T.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = h.buildFragment([t], e, o), o && o.length && h(o).remove(), h.merge([], i.childNodes))
        };
        var Ze = h.fn.load;
        h.fn.load = function(t, e, n) {
            if ("string" != typeof t && Ze) return Ze.apply(this, arguments);
            var i, o, r, a = this,
                s = t.indexOf(" ");
            return s >= 0 && (i = h.trim(t.slice(s, t.length)), t = t.slice(0, s)), h.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && h.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(i ? h("<div>").append(h.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                a.each(n, o || [t.responseText, e, t])
            }), this
        }, h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            h.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), h.expr.filters.animated = function(t) {
            return h.grep(h.timers, function(e) {
                return t === e.elem
            }).length
        };
        var tn = n.document.documentElement;

        function en(t) {
            return h.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        h.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, a, s, l, u = h.css(t, "position"),
                    c = h(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), s = c.offset(), r = h.css(t, "top"), l = h.css(t, "left"), ("absolute" === u || "fixed" === u) && h.inArray("auto", [r, l]) > -1 ? (a = (i = c.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), h.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + o), "using" in e ? e.using.call(t, d) : c.css(d)
            }
        }, h.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    h.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                return r ? (e = r.documentElement, h.contains(e, o) ? (typeof o.getBoundingClientRect !== H && (i = o.getBoundingClientRect()), n = en(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === h.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), h.nodeName(t[0], "html") || (n = t.offset()), n.top += h.css(t[0], "borderTopWidth", !0), n.left += h.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - h.css(i, "marginTop", !0),
                        left: e.left - n.left - h.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || tn; t && !h.nodeName(t, "html") && "static" === h.css(t, "position");) t = t.offsetParent;
                    return t || tn
                })
            }
        }), h.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            h.fn[t] = function(i) {
                return X(this, function(t, i, o) {
                    var r = en(t);
                    if (void 0 === o) return r ? e in r ? r[e] : r.document.documentElement[i] : t[i];
                    r ? r.scrollTo(n ? h(r).scrollLeft() : o, n ? o : h(r).scrollTop()) : t[i] = o
                }, t, i, arguments.length, null)
            }
        }), h.each(["top", "left"], function(t, e) {
            h.cssHooks[e] = Ht(f.pixelPosition, function(t, n) {
                if (n) return n = Ot(t, e), Rt.test(n) ? h(t).position()[e] + "px" : n
            })
        }), h.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            h.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                h.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return X(this, function(e, n, i) {
                        var o;
                        return h.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? h.css(e, n, a) : h.style(e, n, i, a)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), h.fn.size = function() {
            return this.length
        }, h.fn.andSelf = h.fn.addBack, void 0 === (i = function() {
            return h
        }.apply(e, [])) || (t.exports = i);
        var nn = n.jQuery,
            on = n.$;
        return h.noConflict = function(t) {
            return n.$ === h && (n.$ = on), t && n.jQuery === h && (n.jQuery = nn), h
        }, typeof o === H && (n.jQuery = n.$ = h), h
    }, "object" == typeof t.exports ? t.exports = o.document ? r(o, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return r(t)
    } : r(o)
}, function(t, e) {
    /*!
     * Bootstrap v3.3.6 (http://getbootstrap.com)
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under the MIT license
     */
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
    ! function(t) {
        "use strict";
        var e = jQuery.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
    }(),
    function(t) {
        "use strict";
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1,
                i = this;
            t(this).one("bsTransitionEnd", function() {
                n = !0
            });
            return setTimeout(function() {
                n || t(i).trigger(t.support.transition.end)
            }, e), this
        }, t(function() {
            t.support.transition = function() {
                var t = document.createElement("bootstrap"),
                    e = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (var n in e)
                    if (void 0 !== t.style[n]) return {
                        end: e[n]
                    };
                return !1
            }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery),
    function(t) {
        "use strict";
        var e = '[data-dismiss="alert"]',
            n = function(n) {
                t(n).on("click", e, this.close)
            };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
            function i() {
                a.detach().trigger("closed.bs.alert").remove()
            }
            var o = t(this),
                r = o.attr("data-target");
            r || (r = (r = o.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
            var a = t(r);
            e && e.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
        };
        var i = t.fn.alert;
        t.fn.alert = function(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.alert");
                o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
            })
        }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
            return t.fn.alert = i, this
        }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.button"),
                    r = "object" == typeof e && e;
                o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
            })
        }
        var n = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
        };
        n.VERSION = "3.3.6", n.DEFAULTS = {
            loadingText: "loading..."
        }, n.prototype.setState = function(e) {
            var n = "disabled",
                i = this.$element,
                o = i.is("input") ? "val" : "html",
                r = i.data();
            e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
                i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
            }, this), 0)
        }, n.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var i = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
            return t.fn.button = i, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
            var i = t(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.carousel"),
                    r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                    a = "string" == typeof e ? e : r.slide;
                o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : a ? o[a]() : r.interval && o.pause().cycle()
            })
        }
        var n = function(e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, n.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, n.prototype.getItemForDirection = function(t, e) {
            var n = this.getItemIndex(e);
            if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
            var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
            return this.$items.eq(i)
        }, n.prototype.to = function(t) {
            var e = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
        }, n.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, n.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, n.prototype.slide = function(e, i) {
            var o = this.$element.find(".item.active"),
                r = i || this.getItemForDirection(e, o),
                a = this.interval,
                s = "next" == e ? "left" : "right",
                l = this;
            if (r.hasClass("active")) return this.sliding = !1;
            var u = r[0],
                c = t.Event("slide.bs.carousel", {
                    relatedTarget: u,
                    direction: s
                });
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                    d && d.addClass("active")
                }
                var p = t.Event("slid.bs.carousel", {
                    relatedTarget: u,
                    direction: s
                });
                return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() {
                    r.removeClass([e, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger(p)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
            }
        };
        var i = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = i, this
        };
        var o = function(n) {
            var i, o = t(this),
                r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var a = t.extend({}, r.data(), o.data()),
                    s = o.attr("data-slide-to");
                s && (a.interval = !1), e.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
                var n = t(this);
                e.call(n, n.data())
            })
        })
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(i)
        }

        function n(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.collapse"),
                    r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
            })
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height"
        }, i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                    var r = t.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                        o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                        var a = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var s = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return s.call(this);
                        var l = t.camelCase(["scroll", a].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                    }
                }
            }
        }, i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
                }
            }
        }, i.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
                var o = t(i);
                this.addAriaAndCollapsedClass(e(o), o)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var o = t.fn.collapse;
        t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = o, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var o = t(this);
            o.attr("data-target") || i.preventDefault();
            var r = e(o),
                a = r.data("bs.collapse") ? "toggle" : o.data();
            n.call(r, a)
        })
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            var n = e.attr("data-target");
            n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }

        function n(n) {
            n && 3 === n.which || (t(i).remove(), t(o).each(function() {
                var i = t(this),
                    o = e(i),
                    r = {
                        relatedTarget: this
                    };
                o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
            }))
        }
        var i = ".dropdown-backdrop",
            o = '[data-toggle="dropdown"]',
            r = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        r.VERSION = "3.3.6", r.prototype.toggle = function(i) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var r = e(o),
                    a = r.hasClass("open");
                if (n(), !a) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                    var s = {
                        relatedTarget: this
                    };
                    if (r.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                    o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
                }
                return !1
            }
        }, r.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = t(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var r = e(i),
                        a = r.hasClass("open");
                    if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                    var s = r.find(".dropdown-menu li:not(.disabled):visible a");
                    if (s.length) {
                        var l = s.index(n.target);
                        38 == n.which && l > 0 && l--, 40 == n.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = function(e) {
            return this.each(function() {
                var n = t(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
            })
        }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
    }(jQuery),
    function(t) {
        "use strict";

        function e(e, i) {
            return this.each(function() {
                var o = t(this),
                    r = o.data("bs.modal"),
                    a = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
                r || o.data("bs.modal", r = new n(this, a)), "string" == typeof e ? r[e](i) : a.show && r.show(i)
            })
        }
        var n = function(e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, n.prototype.show = function(e) {
            var i = this,
                o = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var o = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var r = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                o ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
            }))
        }, n.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function(e) {
            var i = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = t.support.transition && o;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var a = function() {
                    i.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
            } else e && e()
        }, n.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var i = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
            return t.fn.modal = i, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = t(this),
                o = i.attr("href"),
                r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                a = r.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(o) && o
                }, r.data(), i.data());
            i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), e.call(r, a, this)
        })
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        e.VERSION = "3.3.6", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, e.prototype.init = function(e, n, i) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                var a = o[r];
                if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != a) {
                    var s = "hover" == a ? "mouseenter" : "focusin",
                        l = "hover" == a ? "mouseleave" : "focusout";
                    this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, e.prototype.getDefaults = function() {
            return e.DEFAULTS
        }, e.prototype.getOptions = function(e) {
            return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, e.prototype.getDelegateOptions = function() {
            var e = {},
                n = this.getDefaults();
            return this._options && t.each(this._options, function(t, i) {
                n[t] != i && (e[t] = i)
            }), e
        }, e.prototype.enter = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, e.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, e.prototype.leave = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide())
        }, e.prototype.show = function() {
            var n = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(n);
                var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (n.isDefaultPrevented() || !i) return;
                var o = this,
                    r = this.tip(),
                    a = this.getUID(this.type);
                this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
                var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    u = l.test(s);
                u && (s = s.replace(l, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var c = this.getPosition(),
                    d = r[0].offsetWidth,
                    p = r[0].offsetHeight;
                if (u) {
                    var f = s,
                        h = this.getPosition(this.$viewport);
                    s = "bottom" == s && c.bottom + p > h.bottom ? "top" : "top" == s && c.top - p < h.top ? "bottom" : "right" == s && c.right + d > h.width ? "left" : "left" == s && c.left - d < h.left ? "right" : s, r.removeClass(f).addClass(s)
                }
                var m = this.getCalculatedOffset(s, c, d, p);
                this.applyPlacement(m, s);
                var g = function() {
                    var t = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
                };
                t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
            }
        }, e.prototype.applyPlacement = function(e, n) {
            var i = this.tip(),
                o = i[0].offsetWidth,
                r = i[0].offsetHeight,
                a = parseInt(i.css("margin-top"), 10),
                s = parseInt(i.css("margin-left"), 10);
            isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(i[0], t.extend({
                using: function(t) {
                    i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                u = i[0].offsetHeight;
            "top" == n && u != r && (e.top = e.top + r - u);
            var c = this.getViewportAdjustedDelta(n, e, l, u);
            c.left ? e.left += c.left : e.top += c.top;
            var d = /top|bottom/.test(n),
                p = d ? 2 * c.left - o + l : 2 * c.top - r + u,
                f = d ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(p, i[0][f], d)
        }, e.prototype.replaceArrow = function(t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, e.prototype.hide = function(n) {
            function i() {
                "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), n && n()
            }
            var o = this,
                r = t(this.$tip),
                a = t.Event("hide.bs." + this.type);
            return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(e.TRANSITION_DURATION) : i(), this.hoverState = null, this)
        }, e.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, e.prototype.hasContent = function() {
            return this.getTitle()
        }, e.prototype.getPosition = function(e) {
            var n = (e = e || this.$element)[0],
                i = "BODY" == n.tagName,
                o = n.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var r = i ? {
                    top: 0,
                    left: 0
                } : e.offset(),
                a = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                s = i ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, o, a, s, r)
        }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }, e.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                a = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var s = e.top - r - a.scroll,
                    l = e.top + r - a.scroll + i;
                s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
            } else {
                var u = e.left - r,
                    c = e.left + r + n;
                u < a.left ? o.left = a.left - u : c > a.right && (o.left = a.left + a.width - c)
            }
            return o
        }, e.prototype.getTitle = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, e.prototype.getUID = function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, e.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, e.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, e.prototype.enable = function() {
            this.enabled = !0
        }, e.prototype.disable = function() {
            this.enabled = !1
        }, e.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, e.prototype.toggle = function(e) {
            var n = this;
            e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, e.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
            })
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = function(n) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.tooltip"),
                    r = "object" == typeof n && n;
                (o || !/destroy|hide/.test(n)) && (o || i.data("bs.tooltip", o = new e(this, r)), "string" == typeof n && o[n]())
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = n, this
        }
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.3.6", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
            return e.DEFAULTS
        }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, e.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, e.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var n = t.fn.popover;
        t.fn.popover = function(n) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.popover"),
                    r = "object" == typeof n && n;
                (o || !/destroy|hide/.test(n)) && (o || i.data("bs.popover", o = new e(this, r)), "string" == typeof n && o[n]())
            })
        }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
            return t.fn.popover = n, this
        }
    }(jQuery),
    function(t) {
        "use strict";

        function e(n, i) {
            this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.scrollspy"),
                    r = "object" == typeof n && n;
                o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }
        e.VERSION = "3.3.6", e.DEFAULTS = {
            offset: 10
        }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function() {
            var e = this,
                n = "offset",
                i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    r = /^#./.test(o) && t(o);
                return r && r.length && r.is(":visible") && [
                    [r[n]().top + i, o]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                o = this.offsets,
                r = this.targets,
                a = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), e >= i) return a != (t = r[r.length - 1]) && this.activate(t);
            if (a && e < o[0]) return this.activeTarget = null, this.clear();
            for (t = o.length; t--;) a != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
        }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var i = t.fn.scrollspy;
        t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = i, this
        }, t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.tab");
                o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
            })
        }
        var n = function(e) {
            this.element = t(e)
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
            var e = this.element,
                n = e.closest("ul:not(.dropdown-menu)"),
                i = e.data("target");
            if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = n.find(".active:last a"),
                    r = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    a = t.Event("show.bs.tab", {
                        relatedTarget: o[0]
                    });
                if (o.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var s = t(i);
                    this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                        o.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function(e, i, o) {
            function r() {
                a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
            }
            var a = i.find("> .active"),
                s = o && t.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
            a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
        };
        var i = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
            return t.fn.tab = i, this
        };
        var o = function(n) {
            n.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.affix"),
                    r = "object" == typeof e && e;
                o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
            })
        }
        var n = function(e, i) {
            this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function(t, e, n, i) {
            var o = this.$target.scrollTop(),
                r = this.$element.offset(),
                a = this.$target.height();
            if (null != n && "top" == this.affixed) return n > o && "top";
            if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(t - i >= o + a) && "bottom";
            var s = null == this.affixed,
                l = s ? o : r.top;
            return null != n && n >= o ? "top" : null != i && l + (s ? a : e) >= t - i && "bottom"
        }, n.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, n.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    i = this.options.offset,
                    o = i.top,
                    r = i.bottom,
                    a = Math.max(t(document).height(), t(document.body).height());
                "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
                var s = this.getState(a, e, o, r);
                if (this.affixed != s) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (s ? "-" + s : ""),
                        u = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == s && this.$element.offset({
                    top: a - e - r
                })
            }
        };
        var i = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
            return t.fn.affix = i, this
        }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var n = t(this),
                    i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
            })
        })
    }(jQuery)
}, function(t, e) {
    /*!
     * IE10 viewport hack for Surface/desktop Windows 8 bug
     * Copyright 2014-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    ! function() {
        "use strict";
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var t = document.createElement("style");
            t.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(t)
        }
    }()
}, function(t, e) {
    $(document).ready(function() {
        $("body").keypress(function(t) {
            39 !== t.which || $(document.activeElement).is("input") || $(".grid").toggle()
        }), $(".down-arrow").click(function() {
            var t = $(".introduction, .jobs-introduction").offset().top;
            $("html, body").animate({
                scrollTop: t
            })
        }), $(".jobs-view-positions").click(function() {
            var t = $(".open-positions").offset().top - 32;
            $("html, body").animate({
                scrollTop: t
            })
        }), $(".jobs-blog").click(function() {
            var t = $(".blog").offset().top - 80;
            $("html, body").animate({
                scrollTop: t
            })
        });
        var t = function() {
                $(".baseline-strut").each(function() {
                    var t = $(this).offset().top;
                    t % 6 ? $(this).height(6 - t % 6) : $(this).height(0)
                })
            },
            e = function() {
                var t = $("#navbar-container");
                if (t.exists()) {
                    var e = [];
                    $(window).width() < 768 && e.push("mobile");
                    var n = t.find("nav.navbar"),
                        i = n.offset().top + n.height(),
                        o = $("[class*='update-navbar']").filter(function(t, e) {
                            return i >= $(e).offset().top - 2
                        });
                    if (o.length) {
                        var r = o.last().attr("class").split(" ").filter(function(t) {
                            return "container-fluid" !== t && t.match(/^update-navbar/)
                        });
                        e.push.apply(e, r), window.c = e
                    }
                    t.attr("class", e.join(" "))
                }
            };
        $(window).resize(function() {
            t(), e()
        }), $(window).scroll(function() {
            e(), setTimeout(function() {
                e()
            }, 1e3)
        }), t(), e()
    })
}, function(t, e, n) {
    var i = 13,
        o = 9;
    $(document).ready(function() {
        var t = $("body"),
            e = $('[data-selector="signup-button"]'),
            r = $("[data-signup-modal]"),
            a = $("[data-signup-form]"),
            s = r.find('[name="full-name"]'),
            l = r.find('[name="we-will-call-you-wrapper"]'),
            u = r.find('[name="friendly-name"]'),
            c = r.find('[name="email"]'),
            d = !1,
            p = n(23),
            f = n(24),
            h = n(1),
            m = null,
            g = r.find("[begin-survey-button]"),
            v = r.find("[wall-of-love-button]");

        function y() {
            r.modal("show"), b()
        }

        function b() {
            var t = document.querySelectorAll("iframe.twitter-share-button");
            if (t && 1 === t.length) {
                var e = t[0],
                    n = getComputedStyle(e);
                if ("76px" === n.width && "28px" === n.height) return
            }
            var i = document.getElementById("twitter-button");
            i && twttr && twttr.widgets && (i.innerHTML = "", twitterWidget = twttr.widgets.createShareButton("/", i, {
                text: "Get through your inbox twice as fast with @Superhuman. If you have a referral, please send one my way! 💜 https://superhuman.com pic.twitter.com/u2eoIbQ9EE",
                related: "@Superhuman,@rahulvohra",
                url: "/",
                size: "large"
            }))
        }

        function w(t) {
            t.which === o && t.preventDefault()
        }

        function x() {
            s.focus()
        }

        function T(t) {
            m = t, r.find(`[${t}]`).css({
                "z-index": 1,
                visibility: "visible"
            }), ["data-signup-complete", "data-signup-duplicate", "data-signup-form", "data-signup-survey", "data-signup-wall-of-love", "data-signup-loading"].filter(e => e !== t).forEach(t => r.find(`[${t}]`).css({
                "z-index": -1,
                visibility: "hidden"
            })), "data-signup-survey" === m ? g.focus() : "data-signup-wall-of-love" === m && v.focus()
        }
        u.closest("[data-selector='wrapper']").hide(), t.keydown(function(t) {
            t.which === i && document.activeElement === document.body && "/" === window.location.pathname && y()
        }), a.each(function() {
            var t = $(this),
                e = t.find("[tabindex='1']"),
                n = t.find("[data-selector='email-input']");
            e.keydown(function(e) {
                ! function(t, e) {
                    t.which === i && e.find("[data-submit]").click(), b()
                }(e, t)
            }), n.keydown(w)
        }), e.click(function(t) {
            ! function(t) {
                c.val(t)
            }($(t.target).closest(".sign-up").find('[data-selector="email-input"]').val()), y()
        }), r.on("show.bs.modal", function() {
            T("data-signup-form"), b(), r.find('[data-selector="wrapper"]').removeClass("has-error has-prompt"), x()
        }), r.on("shown.bs.modal", x), r.find("input").keydown(function() {
            var t = $(this);
            t.data("storedInput", t.val())
        }), r.find("input").bind("change click input cut paste", function(t) {
            var e = $(this),
                n = e.val();
            e.data("storedInput") != n && f(t)
        }), s.bind("keydown keyup change input cut paste", function() {
            var t = function(t) {
                var e, n = t.trim().split(" ")[0];
                return 1 === (e = n.replace(/\./g, "")).length ? e.toUpperCase() : 2 === e.length && e === e.toUpperCase() ? e : e === e.toUpperCase() || e === e.toLowerCase() ? e.replace(/\w\S*/g, function(t) {
                    return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
                }) : e
            }($(this).val());
            t.length > 0 ? (l.addClass("show-we-will-call-you"), $(".we-will-call-you-value").text(t)) : l.removeClass("show-we-will-call-you"), !1 === d && u.val(t)
        }), $(".we-will-call-you-change").click(function() {
            l.hide(), d = !0, u.closest("[data-selector='wrapper']").removeClass("has-error"), u.closest("[data-selector='wrapper']").addClass("has-prompt"), u.closest("[data-selector='wrapper']").fadeIn(1e3), u.select()
        }), r.find(".button").click(function() {
            r.find("form").submit()
        }), r.find(".button.survey-later").click(function(t) {
            t.preventDefault(), T("data-signup-wall-of-love")
        }), r.find(".button.survey-later").keydown(function(t) {
            t.which === i && T("data-signup-wall-of-love")
        }), g.click(function(t) {
            t.preventDefault(), document.body.classList.add("crossFade-to-typeform");
            var e = g.attr("href");
            setTimeout(function() {
                window.location = e
            }, 2e3)
        }), r.find("form").submit(function(t) {
            t.preventDefault();
            var e = p(c, {
                    type: "email"
                }),
                n = p(u),
                i = p(s);
            if (e && n && i) {
                var o = s.val().trim(),
                    r = u.val().trim(),
                    a = c.val().trim(),
                    d = h("utm_source"),
                    f = h("utm_medium"),
                    v = h("utm_campaign"),
                    y = {
                        email_address: a,
                        full_name: o,
                        friendly_name: r,
                        referrer: document.referrer,
                        user_agent: navigator && navigator.userAgent,
                        utm_source: d,
                        utm_medium: f,
                        utm_campaign: v
                    };
                return $.ajax({
                    type: "POST",
                    url: "https://mail.superhuman.com/~backend/signups/create",
                    data: JSON.stringify(y),
                    success: function(t, e, n) {
                        if (t.should_proceed) {
                            T("data-signup-survey");
                            let e = `https://superhuman.com/welcome?source=signup_site&signup_email_address=${a}`;
                            t.class && (e += `&class=${t.class}`), g.attr("href", e)
                        } else T("data-signup-complete");
                        208 === n.status && T("data-signup-duplicate"), (n.status < 200 || n.status >= 300) && Bugsnag.notifyException(new Error(`Unexpected status code received for: ${JSON.stringify(y)} | textResponse was: ${e}`))
                    },
                    error: function(t, e, n) {
                        T("data-signup-complete"), Bugsnag.notifyException(new Error(`Failed to execute signup with data: ${JSON.stringify(y)} | textStatus was: ${e} | errorThrown was: ${n} | jqXHR was: ${JSON.stringify(t)}`))
                    },
                    timeout: 5e3
                }), setTimeout(() => {
                    $('[data-selector="email-input"]').val(""), s.val(""), u.val(""), c.val(""), l.removeClass("show-we-will-call-you"), "data-signup-form" === m && T("data-signup-loading")
                }, 200), !1
            }
        })
    })
}, function(t, e) {
    t.exports = function(t, e) {
        var n = t.val().trim().toLowerCase(),
            i = t.closest('[data-selector="wrapper"]'),
            o = i.find(".modal-help-text"),
            r = e && "email" == e.type;
        return "" === n ? (i.addClass("has-error"), o.text("REQUIRED"), t.focus(), !1) : !(r && !n.match(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i)) || (i.addClass("has-error"), o.text("PLEASE ENTER A VALID EMAIL"), t.focus(), !1)
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = $(t.target),
            n = e.attr("placeholder"),
            i = e.val(),
            o = e.closest('[data-selector="wrapper"]'),
            r = o.find(".modal-help-text");
        i.length > 0 ? (o.removeClass("has-error"), o.addClass("has-prompt"), r.text(n)) : o.removeClass("has-prompt has-error")
    }
}, function(t, e, n) {
    var i = n(1);

    function o({
        email: t,
        name: e,
        paymentToken: n,
        isUpdate: i,
        isCalendly: o
    }) {
        if (o) window.location = "https://calendly.com/superhuman-vip-onboarding/superhuman-vip-onboarding/?email=" + encodeURIComponent(t) + "&name=" + encodeURIComponent(e) + "&utm_source=" + encodeURIComponent(t);
        else {
            document.body.classList.add("crossFade-to-product");
            var r = "https://mail.superhuman.com";
            n && (r += "/?paymentToken=" + encodeURIComponent(n)), setTimeout(function() {
                window.location = r
            }, 2e3)
        }
    }
    $(document).ready(function() {
        var t = window.StripeCheckout;
        if (void 0 !== t) {
            var e = document.URL.indexOf("/vip?update") > 0,
                n = document.URL.indexOf("/reserve") > 0,
                r = {
                    key: "pk_live_42bI8ECdbwxJ95ThrIZY5xOo",
                    image: "https://files.stripe.com/files/f_live_uiEziNXjUgLfIJb9ptL05YUj",
                    locale: "auto",
                    name: "Superhuman",
                    description: n ? "No charge until you're onboard." : "",
                    allowRememberMe: !1,
                    zipCode: !0,
                    token: function(t) {
                        ! function(t, {
                            isUpdate: e,
                            isCalendly: n
                        }) {
                            var r, a;
                            e ? (r = "https://mail.superhuman.com/~backend/v3/customers.update", a = 6e4) : n ? (r = "https://mail.superhuman.com/~backend/v3/customers.prepare", a = 6e4) : (r = "https://mail.superhuman.com/~backend/v3/customers.create", a = 5e3);
                            var s = $('[data-selector="subscribe-button"]');
                            s.html('<div class="spinner"/>');
                            var l = new Date,
                                u = {
                                    token: t.id,
                                    email: t.email,
                                    stripe_id: i("id")
                                };
                            $.ajax({
                                type: "POST",
                                url: r,
                                data: JSON.stringify(u),
                                timeout: a,
                                success: function(r, a, s) {
                                    o({
                                        email: t.email,
                                        name: i("name"),
                                        paymentToken: r && r.paymentToken,
                                        isCalendly: n,
                                        isUpdate: e
                                    })
                                },
                                error: function(r, a, c) {
                                    Bugsnag.notifyException(new Error("Failed to execute customer transaction: " + JSON.stringify(u) + " | textStatus was: " + a + " | errorThrown was: " + c + " | jqXHR was: " + JSON.stringify(r))), 402 === r.status || 403 === r.status && "not-whitelisted" === r.responseJSON.detail || e || n ? setTimeout(function() {
                                        var t;
                                        s.html('<div class="subscribe-message">Try again</div>'), $('[data-selector="subscribe-explain"]').text(""), 402 === r.status ? (t = "Sorry, " + (t = r.responseJSON.message)[0].toLowerCase() + t.slice(1), $('[data-selector="subscribe-error"]').text("<p>" + t + "</p>")) : 403 === r.status && "not-whitelisted" === r.responseJSON.detail ? $('[data-selector="subscribe-error"]').html('<p>Superhuman is currently invite only.</p><p><a href="https://superhuman.com" target="_top">Request access now.</a></p>') : $('[data-selector="subscribe-error"]').html('<p>Sorry, something went wrong.</p><p>Please try again or <a href="mailto:hello@superhuman.com?subject=Entering card details failed" target="_top">let us know</a>.</p>')
                                    }, 1500 - (new Date - l)) : o({
                                        email: t.email,
                                        name: i("name"),
                                        isCalendly: n,
                                        isUpdate: e
                                    })
                                }
                            })
                        }(t, {
                            isUpdate: e,
                            isCalendly: n
                        })
                    }
                };
            e ? ($(".subscribe-message")[0].innerHTML = "Update Payment Details", r.panelLabel = "Update Card") : n ? ($(".subscribe-message")[0].innerHTML = "Reserve Consultation", r.panelLabel = "Proceed to Reservation") : (r.amount = 3e3, r.panelLabel = "{{amount}} / month");
            var a = t.configure(r);
            $('[data-selector="subscribe-button"]').click(function(t) {
                a.open({
                    email: i("email")
                }), $(".love-desktop").each(function(t, e) {
                    e.style["animation-play-state"] = "paused"
                }), $('[data-selector="subscribe-error"]').text(""), t.preventDefault()
            })
        }
    }), $(document).on("DOMNodeRemoved", ".stripe_checkout_app", function() {
        $(".love-desktop").each(function(t, e) {
            e.style["animation-play-state"] = "running"
        })
    })
}, function(t, e) {
    navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && $("video.rocket-launch").css("filter", "initial").css("-webkit-filter", "initial").css("-moz-filter", "initial").css("-o-filter", "initial").css("-ms-filter", "initial")
}, function(t, e) {
    /*! WOW - v1.1.2 - 2015-08-19
     * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
    (function() {
        var t, e, n, i, o, r = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            a = [].indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var n, i;
                for (n in e) i = e[n], null == t[n] && (t[n] = i);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.createEvent = function(t, e, n, i) {
                var o;
                return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
            }, t.prototype.emitEvent = function(t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
            }, t.prototype.addEvent = function(t, e, n) {
                return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
            }, t.prototype.removeEvent = function(t, e, n) {
                return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
            }, t.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, n, i, o;
                for (e = n = 0, i = (o = this.keys).length; i > n; e = ++n)
                    if (o[e] === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var n, i, o, r;
                for (n = i = 0, o = (r = this.keys).length; o > i; n = ++i)
                    if (r[n] === t) return void(this.values[n] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function() {}, t
        }()), i = this.getComputedStyle || function(t) {
            return this.getPropertyValue = function(e) {
                var n;
                return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                    return e.toUpperCase()
                }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function() {
            function o(t) {
                null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return o.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, o.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, o.prototype.start = function() {
                var e, n, i, o;
                if (this.stopped = !1, this.boxes = function() {
                        var t, n, i, o;
                        for (o = [], t = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; n > t; t++) e = i[t], o.push(e);
                        return o
                    }.call(this), this.all = function() {
                        var t, n, i, o;
                        for (o = [], t = 0, n = (i = this.boxes).length; n > t; t++) e = i[t], o.push(e);
                        return o
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (n = 0, i = (o = this.boxes).length; i > n; n++) e = o[n], this.applyStyle(e, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                    return function(e) {
                        var n, i, o, r, a;
                        for (a = [], n = 0, i = e.length; i > n; n++) r = e[n], a.push(function() {
                            var t, e, n, i;
                            for (i = [], t = 0, e = (n = r.addedNodes || []).length; e > t; t++) o = n[t], i.push(this.doSync(o));
                            return i
                        }.call(t));
                        return a
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, o.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, o.prototype.sync = function() {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, o.prototype.doSync = function(t) {
                var e, n, i, o, r;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (r = [], n = 0, i = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i > n; n++) e = o[n], a.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                    return r
                }
            }, o.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
            }, o.prototype.applyStyle = function(t, e) {
                var n, i, o;
                return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
                    return function() {
                        return r.customStyle(t, e, i, n, o)
                    }
                }(this))
            }, o.prototype.animate = "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }, o.prototype.resetStyle = function() {
                var t, e, n, i, o;
                for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
                return o
            }, o.prototype.resetAnimation = function(t) {
                var e;
                return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
            }, o.prototype.customStyle = function(t, e, n, i, o) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                    animationDuration: n
                }), i && this.vendorSet(t.style, {
                    animationDelay: i
                }), o && this.vendorSet(t.style, {
                    animationIterationCount: o
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
                var n, i, o, r;
                for (n in i = [], e) o = e[n], t["" + n] = o, i.push(function() {
                    var e, i, a, s;
                    for (s = [], e = 0, i = (a = this.vendors).length; i > e; e++) r = a[e], s.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                    return s
                }.call(this));
                return i
            }, o.prototype.vendorCSS = function(t, e) {
                var n, o, r, a, s, l;
                for (a = (s = i(t)).getPropertyCSSValue(e), n = 0, o = (r = this.vendors).length; o > n; n++) l = r[n], a = a || s.getPropertyCSSValue("-" + l + "-" + e);
                return a
            }, o.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (n) {
                    e = i(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, o.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, o.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, o.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, o.prototype.scrollCallback = function() {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var e, n, i, o;
                    for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)(t = i[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, o.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, o.prototype.isVisible = function(t) {
                var e, n, i, o, r;
                return n = t.getAttribute("data-wow-offset") || this.config.offset, o = (r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, e = (i = this.offsetTop(t)) + t.clientHeight, o >= i && e >= r
            }, o.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e
            }, o.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, o
        }()
    }).call(window)
}, function(t, e, n) {
    var i = n(1),
        o = n(29);
    $(document).ready(function() {
        var t = $('[data-copy-params="true"]');
        if (t.length) {
            var e = {},
                n = t.data("url");
            ["campaign", "class", "customer_referral_domain", "email", "name", "referral_email_address", "referrer_email_address", "signup_email_address", "source"].forEach(function(t) {
                e[t] = i(t)
            }), t.attr("data-url", o(n, e))
        }
    })
}, function(t, e) {
    t.exports = function(t, e) {
        var n;
        if (t.includes("#")) {
            var i = t.indexOf("#");
            n = t.slice(i), t = t.slice(0, i)
        }
        var o = [];
        for (var r in e) e[r] && o.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
        return o.length && (t.indexOf("?") > -1 ? t += "&" + o.join("&") : t += "?" + o.join("&")), n && (t += n), t
    }
}]);

!function(e, t, n) {
    var r = []
      , o = {
        _version: "3.5.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            r.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            r.push({
                name: null,
                fn: e
            })
        }
    }
      , i = function() {};
    i.prototype = o,
    i = new i;
    var s = [];
    function a(e, t) {
        return typeof e === t
    }
    var l = t.documentElement
      , f = "svg" === l.nodeName.toLowerCase();
    i.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    function u() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : f ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    var d = function() {
        var e = !("onblur"in t.documentElement);
        return function(t, r) {
            var o;
            return !!t && (r && "string" != typeof r || (r = u(r || "div")),
            !(o = (t = "on" + t)in r) && e && (r.setAttribute || (r = u("div")),
            r.setAttribute(t, ""),
            o = "function" == typeof r[t],
            r[t] !== n && (r[t] = n),
            r.removeAttribute(t)),
            o)
        }
    }();
    o.hasEvent = d,
    i.addTest("inputsearchevent", d("search")),
    i.addTest("hidden", "hidden"in u("a"));
    var c = "Moz O ms Webkit"
      , p = o._config.usePrefixes ? c.split(" ") : [];
    o._cssomPrefixes = p;
    var m = {
        elem: u("modernizr")
    };
    i._q.push(function() {
        delete m.elem
    });
    var v = {
        style: m.elem.style
    };
    i._q.unshift(function() {
        delete v.style
    });
    function g(e, n, r, o) {
        var i, s, a, d, c = "modernizr", p = u("div"), m = function() {
            var e = t.body;
            return e || ((e = u(f ? "svg" : "body")).fake = !0),
            e
        }();
        if (parseInt(r, 10))
            for (; r--; )
                (a = u("div")).id = o ? o[r] : c + (r + 1),
                p.appendChild(a);
        return (i = u("style")).type = "text/css",
        i.id = "s" + c,
        (m.fake ? m : p).appendChild(i),
        m.appendChild(p),
        i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)),
        p.id = c,
        m.fake && (m.style.background = "",
        m.style.overflow = "hidden",
        d = l.style.overflow,
        l.style.overflow = "hidden",
        l.appendChild(m)),
        s = n(p, e),
        m.fake ? (m.parentNode.removeChild(m),
        l.style.overflow = d,
        l.offsetHeight) : p.parentNode.removeChild(p),
        !!s
    }
    function h(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function y(t, r) {
        var o = t.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; o--; )
                if (e.CSS.supports(h(t[o]), r))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var i = []; o--; )
                i.push("(" + h(t[o]) + ":" + r + ")");
            return g("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", function(t) {
                return "absolute" == function(t, n, r) {
                    var o;
                    if ("getComputedStyle"in e) {
                        o = getComputedStyle.call(e, t, n);
                        var i = e.console;
                        null !== o ? r && (o = o.getPropertyValue(r)) : i && i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    } else
                        o = !n && t.currentStyle && t.currentStyle[r];
                    return o
                }(t, null, "position")
            })
        }
        return n
    }
    var w = o._config.usePrefixes ? c.toLowerCase().split(" ") : [];
    o._domPrefixes = w;
    function b(e, t, r, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1)
          , l = (e + " " + p.join(s + " ") + s).split(" ");
        return a(t, "string") || a(t, "undefined") ? function(e, t, r, o) {
            if (o = !a(o, "undefined") && o,
            !a(r, "undefined")) {
                var i = y(e, r);
                if (!a(i, "undefined"))
                    return i
            }
            for (var s, l, f, d, c, p = ["modernizr", "tspan", "samp"]; !v.style && p.length; )
                s = !0,
                v.modElem = u(p.shift()),
                v.style = v.modElem.style;
            function m() {
                s && (delete v.style,
                delete v.modElem)
            }
            for (f = e.length,
            l = 0; l < f; l++)
                if (d = e[l],
                c = v.style[d],
                ~("" + d).indexOf("-") && (d = d.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                    return t + n.toUpperCase()
                }).replace(/^-/, "")),
                v.style[d] !== n) {
                    if (o || a(r, "undefined"))
                        return m(),
                        "pfx" != t || d;
                    try {
                        v.style[d] = r
                    } catch (e) {}
                    if (v.style[d] != c)
                        return m(),
                        "pfx" != t || d
                }
            return m(),
            !1
        }(l, t, o, i) : function(e, t, n) {
            var r;
            for (var o in e)
                if (e[o]in t)
                    return !1 === n ? e[o] : a(r = t[e[o]], "function") ? (i = r,
                    s = n || t,
                    function() {
                        return i.apply(s, arguments)
                    }
                    ) : r;
            var i, s;
            return !1
        }(l = (e + " " + w.join(s + " ") + s).split(" "), t, r)
    }
    o.testAllProps = b;
    function x(e, t, r) {
        return b(e, n, n, t, r)
    }
    o.testAllProps = x,
    i.addTest("flexbox", x("flexBasis", "1px", !0)),
    i.addTest("fileinputdirectory", function() {
        var e = u("input");
        if (e.type = "file",
        "directory"in e)
            return !0;
        for (var t = 0, n = w.length; t < n; t++)
            if (w[t] + "directory"in e)
                return !0;
        return !1
    });
    var C = o._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    o._prefixes = C;
    var S = o.testStyles = g;
    i.addTest("touchevents", function() {
        var n;
        if ("ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch)
            n = !0;
        else {
            var r = ["@media (", C.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            S(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    }),
    i.addTest("cssgridlegacy", x("grid-columns", "10px", !0)),
    i.addTest("cssgrid", x("grid-template-rows", "none", !0)),
    i.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "", r = 0, o = C.length - 1; r < o; r++)
            e = 0 === r ? "to " : "",
            n += t + C[r] + "linear-gradient(" + e + "left top, #9f9, white);";
        i._config.usePrefixes && (n += t + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
        var s = u("a").style;
        return s.cssText = n,
        ("" + s.backgroundImage).indexOf("gradient") > -1
    }),
    function() {
        var e, t, n, o, l, f;
        for (var u in r)
            if (r.hasOwnProperty(u)) {
                if (e = [],
                (t = r[u]).name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (o = a(t.fn, "function") ? t.fn() : t.fn,
                l = 0; l < e.length; l++)
                    1 === (f = e[l].split(".")).length ? i[f[0]] = o : (!i[f[0]] || i[f[0]]instanceof Boolean || (i[f[0]] = new Boolean(i[f[0]])),
                    i[f[0]][f[1]] = o),
                    s.push((o ? "" : "no-") + f.join("-"))
            }
    }(),
    function(e) {
        var t = l.className
          , n = i._config.classPrefix || "";
        if (f && (t = t.baseVal),
        i._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        i._config.enableClasses && (t += " " + n + e.join(" " + n),
        f ? l.className.baseVal = t : l.className = t)
    }(s),
    delete o.addTest,
    delete o.addAsyncTest;
    for (var T = 0; T < i._q.length; T++)
        i._q[T]();
    e.Modernizr = i
}(window, document);

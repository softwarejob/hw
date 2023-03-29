webpackJsonp([5], {
    388: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e(415)
          , o = e.n(i);
        for (var a in i)
            "default" !== a && function(t) {
                e.d(n, t, function() {
                    return i[t]
                })
            }(a);
        var s = e(39)
          , c = Object(s.a)(o.a, void 0, void 0, !1, null, null, null);
        c.options.__file = "src/js/vue-components/Notification.vue",
        n.default = c.exports
    },
    415: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(e(436));
            n.default = {
                el: "#notification",
                data: {
                    isHomepage: !1
                },
                components: {
                    notification: i.default
                },
                mounted: function() {
                    t("body").hasClass("front") && (this.isHomepage = !0)
                }
            }
        }
        ).call(n, e(17))
    },
    416: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(e(437));
            n.default = {
                data: function() {
                    return {
                        messages: [],
                        display: !1,
                        title: ""
                    }
                },
                mounted: function() {
                    var n = this;
                    t.getJSON("/spotlights-export/announcements/?_format=json").done(function(e) {
                        n.messages = e,
                        0 != e.length && (t("body").addClass("has-notification"),
                        n.display = !0)
                    })
                },
                updated: function() {
                    new i.default
                },
                computed: {
                    notificationClass: function() {
                        var t = !1;
                        return this.messages.forEach(function(n) {
                            "e" == n.type && (t = !0)
                        }),
                        t ? "notification__mod notification--emergency theme--emergency" : "notification__mod notification--announcement"
                    },
                    displayTitle: function() {
                        var t = !1;
                        return this.messages.forEach(function(n) {
                            "e" == n.type && (t = !0)
                        }),
                        t ? "MIT Alert" : "Important"
                    }
                }
            }
        }
        ).call(n, e(17))
    },
    436: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e(416)
          , o = e.n(i);
        for (var a in i)
            "default" !== a && function(t) {
                e.d(n, t, function() {
                    return i[t]
                })
            }(a);
        var s = e(438)
          , c = e(39)
          , u = Object(c.a)(o.a, s.a, s.b, !1, null, null, null);
        u.options.__file = "src/js/vue-components/NotificationMessage.vue",
        n.default = u.exports
    },
    437: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var e = function() {
                function t(t, n) {
                    for (var e = 0; e < n.length; e++) {
                        var i = n[e];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                    }
                }
                return function(n, e, i) {
                    return e && t(n.prototype, e),
                    i && t(n, i),
                    n
                }
            }()
              , i = function() {
                function n() {
                    !function(t, n) {
                        if (!(t instanceof n))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    this.$notification = t("#notification"),
                    this.$body = t("body"),
                    this.eventHandlers()
                }
                return e(n, [{
                    key: "eventHandlers",
                    value: function() {
                        void 0 !== this.$notification && this.$notification && (this.$body.css({
                            "margin-top": this.$notification.height() + "px"
                        }),
                        t(window).on("resize", {
                            body: this.$body,
                            notification: this.$notification
                        }, function(t) {
                            t.data.body.css({
                                "margin-top": t.data.notification.height() + "px"
                            })
                        }))
                    }
                }]),
                n
            }();
            n.default = i
        }
        ).call(n, e(17))
    },
    438: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return i
        }),
        e.d(n, "b", function() {
            return o
        });
        var i = function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return t.display ? e("div", {
                class: t.notificationClass
            }, [e("div", {
                staticClass: "notification__width"
            }, [e("h2", {
                staticClass: "notification__h"
            }, [t._v(t._s(t.displayTitle))]), t._v(" "), e("div", {
                staticClass: "notification__text-mod"
            }, t._l(t.messages, function(n, i) {
                return e("div", {
                    key: i
                }, [e("div", {
                    domProps: {
                        innerHTML: t._s(n.message)
                    }
                })])
            }))])]) : t._e()
        }
          , o = [];
        i._withStripped = !0
    }
});

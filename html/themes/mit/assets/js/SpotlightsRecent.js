webpackJsonp([3], {
    384: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(403)
          , o = i.n(n);
        for (var r in n)
            "default" !== r && function(t) {
                i.d(e, t, function() {
                    return n[t]
                })
            }(r);
        var l = i(39)
          , s = Object(l.a)(o.a, void 0, void 0, !1, null, null, null);
        s.options.__file = "src/js/vue-components/SpotlightsRecent.vue",
        e.default = s.exports
    },
    403: function(t, e, i) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(i(420))
              , r = n(i(422));
            e.default = {
                el: "#node-spotlight",
                data: function() {
                    return {
                        recentSpotlights: [],
                        theLinkToSpotlightArchive: []
                    }
                },
                components: {
                    "spotlights-archive-link": o.default,
                    "spotlight-item": r.default
                },
                mounted: function() {
                    var e = this
                      , i = this.$el.dataset.viewingspotlight
                      , n = window.location.pathname
                      , o = n;
                    n.indexOf("index.html") >= 0 && (o = n.substring(0, n.lastIndexOf("/") + 1));
                    t.getJSON("/spotlights-export/recent/?_format=json").done(function(t) {
                        var n = [];
                        t.forEach(function(t) {
                            t.url != o && t.url + "/" != o && t.title != i && n.push(t)
                        }),
                        e.recentSpotlights = n,
                        0 != t.length && (e.theLinkToSpotlightArchive = "/archive" + t[0].url)
                    })
                }
            }
        }
        ).call(e, i(17))
    },
    404: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i(70));
        e.default = {
            props: ["linktospotlightsarchive"],
            methods: {
                fireGAEvent: function(t, e) {
                    n.default.linkClickEvent(t, e)
                }
            }
        }
    },
    405: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i(70));
        e.default = {
            props: ["title", "url", "datelabel", "theme", "placeholder", "linkcolor", "bgcolor"],
            data: function() {
                return {
                    bgColor: "",
                    txtColor: ""
                }
            },
            computed: {
                formattedTitle: function() {
                    return "spotlight-recirc__item " + this.theme
                },
                hashURL: function() {
                    return this.isToday() ? "/" : this.url + "/#main"
                },
                formattedDate: function() {
                    return this.isToday() ? "Today" : this.datelabel
                },
                onMouseOverOutput: function() {
                    return "this.style.background='" + this.linkcolor + "'"
                }
            },
            methods: {
                isToday: function() {
                    var t = new Date
                      , e = t.getDate()
                      , i = t.getMonth();
                    return e < 10 && (e = "0" + e),
                    this.datelabel == ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][i] + " " + e
                },
                fireGAEvent: function(t, e) {
                    n.default.linkClickEvent(t, e)
                },
                mouseOver: function() {
                    this.bgColor = "#" + this.linkcolor,
                    this.txtColor = "#" + this.bgcolor
                },
                mouseOut: function() {
                    this.bgColor = "",
                    this.txtColor = ""
                }
            }
        }
    },
    420: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(404)
          , o = i.n(n);
        for (var r in n)
            "default" !== r && function(t) {
                i.d(e, t, function() {
                    return n[t]
                })
            }(r);
        var l = i(421)
          , s = i(39)
          , u = Object(s.a)(o.a, l.a, l.b, !1, null, null, null);
        u.options.__file = "src/js/vue-components/SpotlightsArchiveLink.vue",
        e.default = u.exports
    },
    421: function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        }),
        i.d(e, "b", function() {
            return o
        });
        var n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return t.linktospotlightsarchive ? i("div", {
                staticClass: "spotlight-newsletter-cta"
            }, [i("div", {
                staticClass: "spotlight-newsletter-cta-inner"
            }, [i("h4", {
                staticClass: "spotlight-newsletter-cta__h"
            }, [t._v("Want more about MIT?")]), t._v(" "), i("p", {
                staticClass: "spotlight-newsletter-cta__text"
            }, [t._v("\n    Explore "), i("a", {
                attrs: {
                    href: t.linktospotlightsarchive
                },
                on: {
                    click: function(e) {
                        t.fireGAEvent(t.linktospotlightsarchive, "Footer Link")
                    }
                }
            }, [t._v("more spotlights")]), t._v(", or \n    subscribe to receive \n    "), i("a", {
                attrs: {
                    href: "/mit-daily-weekly"
                },
                on: {
                    click: function(e) {
                        t.fireGAEvent("/mit-daily-weekly", "Footer Link")
                    }
                }
            }, [t._v("daily or weekly doses of MIT")]), t._v(" in your inbox.")])]), t._v(" "), i("a", {
                staticClass: "spotlight-newsletter-cta__button",
                attrs: {
                    href: "/mit-daily-weekly"
                },
                on: {
                    click: function(e) {
                        t.fireGAEvent("/mit-daily-weekly", "Footer Link")
                    }
                }
            }, [t._v("Subscribe")])]) : t._e()
        }
          , o = [];
        n._withStripped = !0
    },
    422: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(405)
          , o = i.n(n);
        for (var r in n)
            "default" !== r && function(t) {
                i.d(e, t, function() {
                    return n[t]
                })
            }(r);
        var l = i(423)
          , s = i(39)
          , u = Object(s.a)(o.a, l.a, l.b, !1, null, null, null);
        u.options.__file = "src/js/vue-components/SpotlightsRecentListItem.vue",
        e.default = u.exports
    },
    423: function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        }),
        i.d(e, "b", function() {
            return o
        });
        var n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("li", {
                class: t.formattedTitle
            }, [i("a", {
                staticClass: "spotlight-recirc__link",
                style: {
                    background: t.bgColor,
                    color: t.txtColor
                },
                attrs: {
                    href: t.hashURL
                },
                on: {
                    mouseover: t.mouseOver,
                    mouseleave: t.mouseOut,
                    click: function(e) {
                        t.fireGAEvent(t.url, "Recent Spotlight Link")
                    }
                }
            }, [i("div", {
                staticClass: "spotlight-recirc__hgroup"
            }, [i("h3", {
                staticClass: "spotlight-recirc__title",
                domProps: {
                    innerHTML: t._s(t.title)
                }
            }, [t._v(t._s(t.title))]), t._v(" "), i("p", {
                staticClass: "spotlight-recirc__date"
            }, [t._v(t._s(t.formattedDate))])])])])
        }
          , o = [];
        n._withStripped = !0
    }
});

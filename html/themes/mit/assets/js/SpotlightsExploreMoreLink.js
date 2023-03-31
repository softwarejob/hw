webpackJsonp([9], {
    383: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = o(402)
          , n = o.n(i);
        for (var l in i)
            "default" !== l && function(t) {
                o.d(e, t, function() {
                    return i[t]
                })
            }(l);
        var r = o(39)
          , s = Object(r.a)(n.a, void 0, void 0, !1, null, null, null);
        s.options.__file = "src/js/vue-components/SpotlightsExploreMoreLink.vue",
        e.default = s.exports
    },
    402: function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = {
                el: "#spotlight-explore-more",
                data: function() {
                    return {
                        theLinkToSpotlightArchive: []
                    }
                },
                components: {
                    "spotlight-explore-more-link": {
                        props: ["linktospotlightsarchive"],
                        template: '\n        <div class="spotlight__more" v-if="linktospotlightsarchive" ><a :href="linktospotlightsarchive">Explore more spotlights</a></div>\n      '
                    }
                },
                mounted: function() {
                    var e = this
                      , o = this.$el.dataset.viewingspotlight
                      , i = window.location.pathname
                      , n = i;
                    i.indexOf("index.html") >= 0 && (n = i.substring(0, i.lastIndexOf("/") + 1));
                    t.getJSON("/spotlights-export/recent/?_format=json").done(function(t) {
                        var i = [];
                        t.forEach(function(t) {
                            t.url != n && t.url + "/" != n && t.title != o && i.push(t)
                        }),
                        0 != t.length && (e.theLinkToSpotlightArchive = "/archive" + t[0].url)
                    })
                }
            }
        }
        ).call(e, o(17))
    }
});

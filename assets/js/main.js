!function (e) { function t(i) { if (n[i]) return n[i].exports; var o = n[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports } var n = {}; t.m = e, t.c = n, t.d = function (e, n, i) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i }) }, t.n = function (e) { var n = e && e.__esModule ? function () { return e.default } : function () { return e }; return t.d(n, "a", n), n }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/app/themes/ctc/dist/", t(t.s = 1) }([function (e, t) { e.exports = jQuery }, function (e, t, n) { n(2), e.exports = n(13) }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), function (e) { var t = n(0), i = (n.n(t), n(3)), o = (n.n(i), n(4)), a = n(6), s = n.n(a), r = n(7), c = n.n(r), l = n(8), u = n(9), h = n(10), p = n(11), d = n.n(p), f = n(12), v = n.n(f), m = new o.a({ imagesLoaded: s.a, mobileSwipe: c.a, common: l.a, home: u.a, aboutUs: h.a, slider: d.a, bibliography: v.a }); e(document).ready(function () { return m.loadEvents() }) }.call(t, n(0)) }, function (e, t) { }, function (e, t, n) { "use strict"; var i = n(5), o = function (e) { this.routes = e }; o.prototype.fire = function (e, t, n) { void 0 === t && (t = "init"), "" !== e && this.routes[e] && "function" == typeof this.routes[e][t] && this.routes[e][t](n) }, o.prototype.loadEvents = function () { var e = this; this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(i.a).forEach(function (t) { e.fire(t), e.fire(t, "finalize") }), this.fire("common", "finalize") }, t.a = o }, function (e, t, n) { "use strict"; t.a = function (e) { return "" + e.charAt(0).toLowerCase() + e.replace(/[\W_]/g, "|").split("|").map(function (e) { return "" + e.charAt(0).toUpperCase() + e.slice(1) }).join("").slice(1) } }, function (e, t, n) {
    var i, o, a, s, r;/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
    !function (e, t) { o = t, a = { id: "ev-emitter/ev-emitter", exports: {}, loaded: !1 }, i = "function" == typeof o ? o.call(a.exports, n, a.exports, a) : o, a.loaded = !0, void 0 === i && (i = a.exports) }("undefined" != typeof window && window, function () { function e() { } var t = e.prototype; return t.on = function (e, t) { if (e && t) { var n = this._events = this._events || {}, i = n[e] = n[e] || []; return -1 == i.indexOf(t) && i.push(t), this } }, t.once = function (e, t) { if (e && t) { this.on(e, t); var n = this._onceEvents = this._onceEvents || {}; return (n[e] = n[e] || {})[t] = !0, this } }, t.off = function (e, t) { var n = this._events && this._events[e]; if (n && n.length) { var i = n.indexOf(t); return -1 != i && n.splice(i, 1), this } }, t.emitEvent = function (e, t) { var n = this, i = this._events && this._events[e]; if (i && i.length) { var o = 0, a = i[o]; t = t || []; for (var s = this._onceEvents && this._onceEvents[e]; a;) { var r = s && s[a]; r && (n.off(e, a), delete s[a]), a.apply(n, t), o += r ? 0 : 1, a = i[o] } return this } }, e }),/*!
 * imagesLoaded v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function (n, o) { "use strict"; s = [i], void 0 !== (r = function (e) { return o(n, e) }.apply(t, s)) && (e.exports = r) }(window, function (e, t) { function n(e, t) { for (var n in t) e[n] = t[n]; return e } function i(e) { var t = []; if (Array.isArray(e)) t = e; else if ("number" == typeof e.length) for (var n = 0; n < e.length; n++)t.push(e[n]); else t.push(e); return t } function o(e, t, a) { if (!(this instanceof o)) return new o(e, t, a); "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = n({}, this.options), "function" == typeof t ? a = t : n(this.options, t), a && this.on("always", a), this.getImages(), r && (this.jqDeferred = new r.Deferred), setTimeout(function () { this.check() }.bind(this)) } function a(e) { this.img = e } function s(e, t) { this.url = e, this.element = t, this.img = new Image } var r = e.jQuery, c = e.console; o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () { this.images = [], this.elements.forEach(this.addElementImages, this) }, o.prototype.addElementImages = function (e) { var t = this; "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e); var n = e.nodeType; if (n && l[n]) { for (var i = e.querySelectorAll("img"), o = 0; o < i.length; o++) { var a = i[o]; t.addImage(a) } if ("string" == typeof this.options.background) { var s = e.querySelectorAll(this.options.background); for (o = 0; o < s.length; o++) { var r = s[o]; t.addElementBackgroundImages(r) } } } }; var l = { 1: !0, 9: !0, 11: !0 }; return o.prototype.addElementBackgroundImages = function (e) { var t = this, n = getComputedStyle(e); if (n) for (var i = /url\((['"])?(.*?)\1\)/gi, o = i.exec(n.backgroundImage); null !== o;) { var a = o && o[2]; a && t.addBackground(a, e), o = i.exec(n.backgroundImage) } }, o.prototype.addImage = function (e) { var t = new a(e); this.images.push(t) }, o.prototype.addBackground = function (e, t) { var n = new s(e, t); this.images.push(n) }, o.prototype.check = function () { function e(e, n, i) { setTimeout(function () { t.progress(e, n, i) }) } var t = this; if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete(); this.images.forEach(function (t) { t.once("progress", e), t.check() }) }, o.prototype.progress = function (e, t, n) { this.progressedCount++ , this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t) }, o.prototype.complete = function () { var e = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) { var t = this.hasAnyBroken ? "reject" : "resolve"; this.jqDeferred[t](this) } }, a.prototype = Object.create(t.prototype), a.prototype.check = function () { if (this.getIsImageComplete()) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth"); this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src }, a.prototype.getIsImageComplete = function () { return this.img.complete && void 0 !== this.img.naturalWidth }, a.prototype.confirm = function (e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]) }, a.prototype.handleEvent = function (e) { var t = "on" + e.type; this[t] && this[t](e) }, a.prototype.onload = function () { this.confirm(!0, "onload"), this.unbindEvents() }, a.prototype.onerror = function () { this.confirm(!1, "onerror"), this.unbindEvents() }, a.prototype.unbindEvents = function () { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype = Object.create(a.prototype), s.prototype.check = function () { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, s.prototype.unbindEvents = function () { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype.confirm = function (e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]) }, o.makeJQueryPlugin = function (t) { (t = t || e.jQuery) && (r = t, r.fn.imagesLoaded = function (e, t) { return new o(this, e, t).jqDeferred.promise(r(this)) }) }, o.makeJQueryPlugin(), o })
}, function (e, t, n) { var i, o; !function (a, s, r) { i = [n(0)], void 0 !== (o = function (e) { return r(e, a, s), e.mobile }.apply(t, i)) && (e.exports = o) }(this, document, function (e, t, n, i) { !function (e, t, n, i) { function o(e) { for (; e && void 0 !== e.originalEvent;)e = e.originalEvent; return e } function a(t, n) { var a, s, r, c, l, u, h, p, d, f = t.type; if (t = e.Event(t), t.type = n, a = t.originalEvent, s = e.event.props, f.search(/^(mouse|click)/) > -1 && (s = L), a) for (h = s.length, c; h;)c = s[--h], t[c] = a[c]; if (f.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== f.search(/^touch/) && (r = o(a), f = r.touches, l = r.changedTouches, u = f && f.length ? f[0] : l && l.length ? l[0] : i)) for (p = 0, d = D.length; p < d; p++)c = D[p], t[c] = u[c]; return t } function s(t) { for (var n, i, o = {}; t;) { n = e.data(t, I); for (i in n) n[i] && (o[i] = o.hasVirtualBinding = !0); t = t.parentNode } return o } function r(t, n) { for (var i; t;) { if ((i = e.data(t, I)) && (!n || i[n])) return t; t = t.parentNode } return null } function c() { X = !1 } function l() { X = !0 } function u() { W = 0, q.length = 0, A = !1, l() } function h() { c() } function p() { d(), P = setTimeout(function () { P = 0, u() }, e.vmouse.resetTimerDuration) } function d() { P && (clearTimeout(P), P = 0) } function f(t, n, i) { var o; return (i && i[t] || !i && r(n.target, t)) && (o = a(n, t), e(n.target).trigger(o)), o } function v(t) { var n, i = e.data(t.target, E); A || W && W === i || (n = f("v" + t.type, t)) && (n.isDefaultPrevented() && t.preventDefault(), n.isPropagationStopped() && t.stopPropagation(), n.isImmediatePropagationStopped() && t.stopImmediatePropagation()) } function m(t) { var n, i, a, r = o(t).touches; r && 1 === r.length && (n = t.target, i = s(n), i.hasVirtualBinding && (W = z++ , e.data(n, E, W), d(), h(), M = !1, a = o(t).touches[0], O = a.pageX, B = a.pageY, f("vmouseover", t, i), f("vmousedown", t, i))) } function g(e) { X || (M || f("vmousecancel", e, s(e.target)), M = !0, p()) } function b(t) { if (!X) { var n = o(t).touches[0], i = M, a = e.vmouse.moveDistanceThreshold, r = s(t.target); M = M || Math.abs(n.pageX - O) > a || Math.abs(n.pageY - B) > a, M && !i && f("vmousecancel", t, r), f("vmousemove", t, r), p() } } function y(e) { if (!X) { l(); var t, n, i = s(e.target); f("vmouseup", e, i), M || (t = f("vclick", e, i)) && t.isDefaultPrevented() && (n = o(e).changedTouches[0], q.push({ touchID: W, x: n.clientX, y: n.clientY }), A = !0), f("vmouseout", e, i), M = !1, p() } } function w(t) { var n, i = e.data(t, I); if (i) for (n in i) if (i[n]) return !0; return !1 } function _() { } var C, k, I = "virtualMouseBindings", E = "virtualTouchID", x = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), D = "clientX clientY pageX pageY screenX screenY".split(" "), T = e.event.mouseHooks ? e.event.mouseHooks.props : [], L = e.event.props.concat(T), j = {}, P = 0, O = 0, B = 0, M = !1, q = [], A = !1, X = !1, Y = "addEventListener" in n, S = e(n), z = 1, W = 0; for (e.vmouse = { moveDistanceThreshold: 10, clickDistanceThreshold: 10, resetTimerDuration: 1500 }, k = 0; k < x.length; k++)e.event.special[x[k]] = function (t) { var n = t.substr(1); return { setup: function () { w(this) || e.data(this, I, {}), e.data(this, I)[t] = !0, j[t] = (j[t] || 0) + 1, 1 === j[t] && S.bind(n, v), e(this).bind(n, _), Y && (j.touchstart = (j.touchstart || 0) + 1, 1 === j.touchstart && S.bind("touchstart", m).bind("touchend", y).bind("touchmove", b).bind("scroll", g)) }, teardown: function () { --j[t], j[t] || S.unbind(n, v), Y && (--j.touchstart || S.unbind("touchstart", m).unbind("touchmove", b).unbind("touchend", y).unbind("scroll", g)); var i = e(this), o = e.data(this, I); o && (o[t] = !1), i.unbind(n, _), w(this) || i.removeData(I) } } }(x[k]); Y && n.addEventListener("click", function (t) { var n, i, o, a, s, r = q.length, c = t.target; if (r) for (n = t.clientX, i = t.clientY, C = e.vmouse.clickDistanceThreshold, o = c; o;) { for (a = 0; a < r; a++)if (s = q[a], 0, o === c && Math.abs(s.x - n) < C && Math.abs(s.y - i) < C || e.data(o, E) === s.touchID) return t.preventDefault(), void t.stopPropagation(); o = o.parentNode } }, !0) }(e, 0, n), function (e) { e.mobile = {} }(e), function (e, t) { var i = { touch: "ontouchend" in n }; e.mobile.support = e.mobile.support || {}, e.extend(e.support, i), e.extend(e.mobile.support, i) }(e), function (e, t, i) { function o(t, n, o, a) { var s = o.type; o.type = n, a ? e.event.trigger(o, i, t) : e.event.dispatch.call(t, o), o.type = s } var a = e(n), s = e.mobile.support.touch, r = s ? "touchstart" : "mousedown", c = s ? "touchend" : "mouseup", l = s ? "touchmove" : "mousemove"; e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (t, n) { e.fn[n] = function (e) { return e ? this.bind(n, e) : this.trigger(n) }, e.attrFn && (e.attrFn[n] = !0) }), e.event.special.scrollstart = { enabled: !0, setup: function () { function t(e, t) { n = t, o(a, n ? "scrollstart" : "scrollstop", e) } var n, i, a = this, s = e(a); s.bind("touchmove scroll", function (o) { e.event.special.scrollstart.enabled && (n || t(o, !0), clearTimeout(i), i = setTimeout(function () { t(o, !1) }, 50)) }) }, teardown: function () { e(this).unbind("touchmove scroll") } }, e.event.special.tap = { tapholdThreshold: 750, emitTapOnTaphold: !0, setup: function () { var t = this, n = e(t), i = !1; n.bind("vmousedown", function (s) { function r() { clearTimeout(u) } function c() { r(), n.unbind("vclick", l).unbind("vmouseup", r), a.unbind("vmousecancel", c) } function l(e) { c(), i || h !== e.target ? i && e.preventDefault() : o(t, "tap", e) } if (i = !1, s.which && 1 !== s.which) return !1; var u, h = s.target; n.bind("vmouseup", r).bind("vclick", l), a.bind("vmousecancel", c), u = setTimeout(function () { e.event.special.tap.emitTapOnTaphold || (i = !0), o(t, "taphold", e.Event("taphold", { target: h })) }, e.event.special.tap.tapholdThreshold) }) }, teardown: function () { e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), a.unbind("vmousecancel") } }, e.event.special.swipe = { scrollSupressionThreshold: 30, durationThreshold: 1e3, horizontalDistanceThreshold: 30, verticalDistanceThreshold: 30, getLocation: function (e) { var n = t.pageXOffset, i = t.pageYOffset, o = e.clientX, a = e.clientY; return 0 === e.pageY && Math.floor(a) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(o) > Math.floor(e.pageX) ? (o -= n, a -= i) : (a < e.pageY - i || o < e.pageX - n) && (o = e.pageX - n, a = e.pageY - i), { x: o, y: a } }, start: function (t) { var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t, i = e.event.special.swipe.getLocation(n); return { time: (new Date).getTime(), coords: [i.x, i.y], origin: e(t.target) } }, stop: function (t) { var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t, i = e.event.special.swipe.getLocation(n); return { time: (new Date).getTime(), coords: [i.x, i.y] } }, handleSwipe: function (t, n, i, a) { if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) { var s = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight"; return o(i, "swipe", e.Event("swipe", { target: a, swipestart: t, swipestop: n }), !0), o(i, s, e.Event(s, { target: a, swipestart: t, swipestop: n }), !0), !0 } return !1 }, eventInProgress: !1, setup: function () { var t, n = this, i = e(n), o = {}; t = e.data(this, "mobile-events"), t || (t = { length: 0 }, e.data(this, "mobile-events", t)), t.length++ , t.swipe = o, o.start = function (t) { if (!e.event.special.swipe.eventInProgress) { e.event.special.swipe.eventInProgress = !0; var i, s = e.event.special.swipe.start(t), r = t.target, u = !1; o.move = function (t) { s && !t.isDefaultPrevented() && (i = e.event.special.swipe.stop(t), u || (u = e.event.special.swipe.handleSwipe(s, i, n, r)) && (e.event.special.swipe.eventInProgress = !1), Math.abs(s.coords[0] - i.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault()) }, o.stop = function () { u = !0, e.event.special.swipe.eventInProgress = !1, a.off(l, o.move), o.move = null }, a.on(l, o.move).one(c, o.stop) } }, i.on(r, o.start) }, teardown: function () { var t, n; t = e.data(this, "mobile-events"), t && (n = t.swipe, delete t.swipe, 0 === --t.length && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(r, n.start), n.move && a.off(l, n.move), n.stop && a.off(c, n.stop)) } }, e.each({ scrollstop: "scrollstart", taphold: "tap", swipeleft: "swipe.left", swiperight: "swipe.right" }, function (t, n) { e.event.special[t] = { setup: function () { e(this).bind(n, e.noop) }, teardown: function () { e(this).unbind(n) } } }) }(e, this) }) }, function (e, t, n) { "use strict"; (function (e, n) { t.a = { init: function () { function t() { y = e("html").width(), w = e(window).height() } function i() { w > y ? n("body").addClass("vertical").removeClass("horizontal") : y > w && n("body").addClass("horizontal").removeClass("vertical") } function o() { _ = !(y > 1040) } function a() { e(window).scrollTop() > 100 ? e(".siteheader").addClass("minify") : e(".siteheader").removeClass("minify") } function s() { e(".menu-item").removeClass("activeparent"); var t = e(".navmobileheader__title"), n = t.attr("data-title"); t.html(n); var i = e(".navheading"), o = i.attr("data-title"); i.html(o) } function r() { e(".navprimary").removeClass("active"), e("html").removeClass("noscrollmobile"), s() } function c() { var t = e(".navprimary"); _ && (t.addClass("active"), e("html").addClass("noscrollmobile")) } function l() { e(".navprimary").hasClass("active") ? r() : c() } function u(t) { var i = t.children("a").html(), o = e(".navheading"), a = o.html(), s = e(".navmobileheader__title"); o.html(i), s.html("العودة إلى " + a), n(".nav__outer").removeClass("scrollable") } function h(t, i) { var o = e(".navmobileheader__title"), a = e(".navheading"), s = a.attr("data-title"); if (i > 1) { var r = i - 2, c = t.eq(r).children("a").html(); if (a.html(c), i > 2) { var l = t.eq(r).children("a").html(); o.html(l) } else o.html("العودة إلى  " + s) } else { var u = o.attr("data-title"); o.html(u), a.html(s), n(".nav__outer").addClass("scrollable") } } function p(e) { n(".nav").find(".activeparent").last().removeClass("scrollable"), e.addClass("activeparent scrollable"), u(e) } function d() { var t = e(".nav").find(".activeparent"), i = t.length; if (i > 0) { e(".nav").find(".activeparent").last().removeClass("activeparent scrollable"), n(".nav").find(".activeparent").last().addClass("scrollable"), h(t, i) } else r() } function f(e) { var t = n(".menu-research"), i = n(".menu-research > .sub-menu > li"), o = e.parents("li.menu-research").length, a = e.parents(".sub-menu").length; a ? 1 == a && (i.removeClass("hover"), e.parent("li").addClass("hover")) : o ? t.addClass("hover") : (t.removeClass("hover"), i.removeClass("hover")) } function v() { n(".carousel").attr("data-position", "").css("left", 0), n(".carousel__bubble").removeClass("active"), n(".item-1").addClass("active"), m() } function m() { n(".carousel__nav button").removeClass("inactive"), n(".carousel__nav").children(".nav.left").addClass("inactive") } function g(e, t, n, i) { var o = e.parent(".carousel__track").parent(".carouselwrap").children(".carousel__nav"); o.children("button").removeClass("inactive"), n === i ? o.children(".nav.right").addClass("inactive") : n !== t && n || o.children(".nav.left").addClass("inactive") } function b(e, t) { var i, o, a, s; o = t.children(".carousel__bucket").length, a = t, i = y < 560 ? parseInt(t.attr("data-mobile-view")) : y < 1040 ? parseInt(t.attr("data-tablet-view")) : parseInt(t.attr("data-screen-view")); var r = 100 / i; if (s = t.attr("data-position") ? parseInt(t.attr("data-position")) : i, "right" === e) { var c = o - s; if (c > i) a.animate({ left: "-=100%" }, 500), s += i; else if (c > 0) { var l = "-=" + c * r + "%"; a.animate({ left: l }, 500), s += c } } else "left" === e && (s > 2 * i ? (a.animate({ left: "+=100%" }, 500), s -= i) : (a.animate({ left: 0 }, 500), s = i)); if (t.attr("data-position", s), _) { var u = n(t).parent(".carousel__track").next(".carousel__bubblenav"); u.children(".carousel__bubble").removeClass("active"), u.children(".item-" + s).addClass("active") } g(t, i, s, o) } var y, w, _; n("a.scroller").click(function (e) { e.preventDefault(); var t = n(this).attr("href"), i = n(t).offset().top - 120; n("html, body").animate({ scrollTop: i }, 1e3) }), e(".navmobile").click(function (e) { e.preventDefault(), l() }), 
e(".quicknavlink__research").click(function (t) { t.preventDefault(), l(), p(e("li.menu-research")) }),e(".quicknavlink__research2").click(function (t) {t.preventDefault(), l(), p(e("li.menu-research2"))}),e(".menu-item span").click(function () { p(e(this).parent("li")) }), e(".navmobileheader a").click(function (e) { e.preventDefault(), d() }), e(".menu-research > a, .menu-research > ul > li > a").not(".searchlink > a").click(function (e) { e.preventDefault() }), n(".navprimary a").on("focus", function () { f(n(this)) }), n(".navprimary").hover(function () { n(".navprimary li").removeClass("hover") }), n(".menu-research a").click(function () { n(this).parent("hover").hasClass("hover") || (n(".menu-research li").removeClass("hover"), n(this).parent("li").addClass("hover")) }), n(".carousel__nav .nav").click(function (t) { t.preventDefault(); var i = n(this).hasClass("inactive"), o = e(this).parent(".carousel__nav").parent(".carouselwrap").children(".carousel__track").children(".carousel"); n(this).hasClass("right") && !i ? b("right", o) : i || b("left", o) }), n(".carousel").on("swipeleft", function () { b("right", n(this)) }), n(".carousel").on("swiperight", function () { b("left", n(this)) }), n(".submitonchange").on("change", function () { n(this)[0].submit() }), n(".formreset").click(function (e) { e.preventDefault(), n("form").trigger("reset"), n("form select").each(function () { n(this).children("option").prop("selected", !1), n(this).children("option:first").prop("selected", "selected") }), n('form input[type="checkbox"]').each(function () { n(this).attr("checked", !1) }) }), n(".formsubmit").click(function (e) { e.preventDefault(), n(this).closest("form")[0].submit() }), n(".searchtaxonomies__title").click(function () { var e = n(this).parent(".searchtaxonomies__list"); e.hasClass("expanded") ? e.removeClass("expanded") : e.addClass("expanded") }), n(".searchtaxonomies__show").click(function (e) { e.preventDefault(), _ && (n(".searchtaxonomies").toggleClass("collapsedmobile"), n(this).children(".icon").toggleClass("icon-plus icon-minus")) }), n("main").children().not(".introcontent, .homeslider").imagesLoaded().progress(function (e, t) { n(t.img).addClass("fadein") }), n(".homeslider .item-0").imagesLoaded(function () { n(".homeslider, .homeslider img").addClass("fadein") }), n(".introcontent.hashero").imagesLoaded(function () { n(".introcontent img, .hashero").addClass("fadein") }), n(".imagery__moreinfo__expand").click(function (e) { e.preventDefault(), n(".imagery__moreinfo__data, .imagery__moreinfo__title").toggleClass("expanded") }), t(), i(), o(), m(), function () { n(".bucket, .archive__section__article").each(function (e) { n(this).addClass("slidein").css("transition-delay", .05 * e + "s") }) }(), a(), e(window).scroll(function () { a() }), e(window).resize(function () { t(), i(), o(), v() }) }, finalize: function () { } } }).call(t, n(0), n(0)) }, function (e, t, n) { "use strict"; t.a = { init: function () { }, finalize: function () { } } }, function (e, t, n) { "use strict"; t.a = { init: function () { } } }, function (e, t, n) { (function (e, t) { e("#slider .item-0").imagesLoaded(function () { e(".item-0").fadeIn(500) }), function (e) { function t(t) { var o = e(n + ".visible"), a = e(n).length, s = o.prevAll().length; "prev" === t ? s-- : s++ , -1 === s && (s = a - 1), s === a && (s = 0), o.removeClass("visible").fadeOut(500), e(n + ":eq(" + s + ")").addClass("visible").fadeIn(500), e(i).removeClass("active"), e(i + ".item-" + s).addClass("active") } var n = ".slide", i = ".bubble", o = e("#slider").hasClass("single"); if (e(n + ":first-child").addClass("visible"), e(i + ":first-child").addClass("active"), !o) { var a = window.setInterval(t, 8e3); e(i).click(function () { if (!e(this).hasClass("active")) { var o = e(this).attr("class").split(" ")[0], s = o.substring(5); e(i).removeClass("active"), e(this).addClass("active"), e(n).removeClass("visible").fadeOut(500), e(n + ".item-" + s).addClass("visible").fadeIn(500), window.clearInterval(a), a = window.setInterval(t, 8e3) } }), e(".arrow-nav button").click(function (n) { n.preventDefault(), e(this).hasClass("nav-left") ? (t("prev"), clearInterval(a)) : e(this).hasClass("nav-right") && (t("next"), clearInterval(a)) }), e(".homeslider").hover(function () { e(".arrow-nav").stop().fadeIn(300) }, function () { e(".arrow-nav").delay(2e3).stop().fadeOut(1e3) }), e(n).click(function () { t(), clearInterval(a) }), e(document.documentElement).keydown(function (e) { 37 === e.keyCode ? (t("prev"), clearInterval(a)) : 39 === e.keyCode && (t("next"), clearInterval(a)) }), e("#slider").on("swipeleft", function () { t("next"), clearInterval(a) }), e("#slider").on("swiperight", function () { t("prev"), clearInterval(a) }) } }(t) }).call(t, n(0), n(0)) }, function (e, t, n) { (function (e) { function t(e) { return e.replace(/&.*;|\s|\[|\]/g, "") } function n() { var t = e(".single__content").html(), n = t.match(/\[1\]/g); return null != n && n.length > 1 } function i(e, t) { for (var n = 0, i = 0; i < e.length; i++)e[i] === t && n++; return n } function o() { for (var n = e(".single__content").html(), o = n.match(/(\[.+?\])/g), a = 0; a < o.length; a++)if (i(o, o[a]) < 2) { var s = o.indexOf(o[a]); o.splice(s, 1) } for (var r = 0; r < o.length / 2; r++) { var c = t(o[r]), l = new RegExp("(\\[" + c + "\\])"); 2 == n.match(l).length && (n = n.replace(l, "<sup>" + c + "</sup>")) } e(".single__content").html(n) } function a() { var n = e(".single__content").html(); e("sup").each(function () { var i = e(this).html(), o = t(i), a = "[" + o + "]"; -1 !== n.search(a) && (n = n.replace("<sup>" + i + "</sup>", '<sup id="annotation' + o + '"><a href="#reference' + o + '" class="scroller annotationlink annotation' + o + '">' + i + "</a></sup>"), n = n.replace(a, '<span id="reference' + o + '"><a href="#annotation' + o + '" class="referencelink scroller">' + a + "</a></span>")) }), e(".single__content").html(n) } function s(t) { var n = t.attr("href"), i = e(n).parent("p").html(); i = i.replace("id", "class"); var o = '<span class="annotationpopup">' + i + "</span>"; t.parent("sup").append(o), setTimeout(function () { t.next(".annotationpopup").length && t.next(".annotationpopup").addClass("popup__slidein") }, 50) } function r() { e(".annotationpopup").remove() } function c(t) { e("#" + t).parent("p").toggleClass("highlightReference") } e("body.single-post").length && function () { n() && o(), a() }(), e(".annotationlink, .referencelink").click(function () { var t = e(this).attr("href").substr(1); c(t), setTimeout(function () { c(t) }, 500) }), e(".annotationlink").hover(function () { s(e(this)) }, function () { r() }) }).call(t, n(0)) }, function (e, t) { }]);
function goToByScroll(id) {
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 1000);
}
$('#menu-author, #menu-sigha, .menu-zone, .menu-time').on('click',()=>{
    goToByScroll('search-sec')
});
$('#menu-register, #menu-login').on('click',function () {
    goToByScroll('register-sec');
    $('.form-x').slideUp();
    let timeout = setTimeout(() => {
        $($(this).attr('data-id-target')).slideDown();
        clearTimeout(timeout);
    }, 400);
});

$('footer h4').on('click', function () {
    $('html,body').animate({
        scrollTop: window.pageYOffset - document.getElementsByTagName('footer')[0].clientHeight
    }, 500);
})

$('.list-formula li').on('click',function () {
    $("#dropDown-formula")[0].selectedIndex = $(this).attr('data-index-target')
})

$('.list-authors li').on('click', function () {
    $("#dropDown-authors")[0].selectedIndex = $(this).attr('data-index-target')
})

$('.change-form').on('click', function() {
    // $('.form-x').css('display','none');
    $('.form-x').slideUp();
    let timeout = setTimeout(() => {
        $($(this).attr('data-id-target')).slideDown();
        clearTimeout(timeout);
    }, 400);
  
})

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img-user').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#inputFile").change(function () {
    readURL(this);
});

$('.upload-btn').on('click',function(){
    document.getElementById('inputFile').click()
})

//plyr.setup("#plyr-video");
$(function () {
    $('audio').audioPlayer();
});
(() => {
  var e = {
      144: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            a = t && window.devicePixelRatio > 1,
            l = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            r = function (t) {
              return e({}, l, t);
            },
            o = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: n },
                );
              }
              window.dispatchEvent(s);
            },
            c = "src",
            d = "srcset",
            p = "sizes",
            u = "poster",
            h = "llOriginalAttrs",
            m = "data",
            f = "loading",
            g = "loaded",
            v = "applied",
            b = "error",
            y = "native",
            S = "data-",
            w = "ll-status",
            E = function (e, t) {
              return e.getAttribute(S + t);
            },
            T = function (e) {
              return E(e, w);
            },
            C = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            x = function (e) {
              return C(e, null);
            },
            _ = function (e) {
              return null === T(e);
            },
            L = function (e) {
              return T(e) === y;
            },
            A = [f, g, v, b],
            O = function (e, t, s, i) {
              e &&
                "function" == typeof e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            M = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            P = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            k = function (e) {
              return e.llTempImage;
            },
            I = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            $ = function (e, t) {
              e && (e.loadingCount += t);
            },
            D = function (e, t) {
              e && (e.toLoadCount = t);
            },
            z = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            B = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && z(s).forEach(t);
            },
            G = function (e, t) {
              z(e).forEach(t);
            },
            q = [c],
            N = [c, u],
            F = [c, d, p],
            V = [m],
            H = function (e) {
              return !!e[h];
            },
            j = function (e) {
              return e[h];
            },
            R = function (e) {
              return delete e[h];
            },
            W = function (e, t) {
              if (!H(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[h] = s);
              }
            },
            Y = function (e, t) {
              if (H(e)) {
                var s = j(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            X = function (e, t, s) {
              M(e, t.class_applied),
                C(e, v),
                s &&
                  (t.unobserve_completed && I(e, t),
                  O(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              M(e, t.class_loading),
                C(e, f),
                s && ($(s, 1), O(t.callback_loading, e, s));
            },
            K = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            Q = function (e, t) {
              K(e, p, E(e, t.data_sizes)),
                K(e, d, E(e, t.data_srcset)),
                K(e, c, E(e, t.data_src));
            },
            Z = {
              IMG: function (e, t) {
                B(e, function (e) {
                  W(e, F), Q(e, t);
                }),
                  W(e, F),
                  Q(e, t);
              },
              IFRAME: function (e, t) {
                W(e, q), K(e, c, E(e, t.data_src));
              },
              VIDEO: function (e, t) {
                G(e, function (e) {
                  W(e, q), K(e, c, E(e, t.data_src));
                }),
                  W(e, N),
                  K(e, u, E(e, t.data_poster)),
                  K(e, c, E(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                W(e, V), K(e, m, E(e, t.data_src));
              },
            },
            J = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                O(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            ae = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                $(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                P(e, t.class_loading),
                t.unobserve_completed && I(e, s);
            },
            le = function (e, t, s) {
              var i = k(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      ae(t, s, i),
                        M(t, s.class_loaded),
                        C(t, g),
                        O(s.callback_loaded, t, i),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      ae(t, s, i),
                        M(t, s.class_error),
                        C(t, b),
                        O(s.callback_error, t, i),
                        s.restore_on_error && Y(t, F),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                );
            },
            re = function (e, t, s) {
              !(function (e) {
                return J.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      le(e, t, s),
                      (function (e) {
                        H(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg),
                          n = E(e, t.data_bg_hidpi),
                          l = a && n ? n : i;
                        l &&
                          ((e.style.backgroundImage = 'url("'.concat(l, '")')),
                          k(e).setAttribute(c, l),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg_multi),
                          n = E(e, t.data_bg_multi_hidpi),
                          l = a && n ? n : i;
                        l && ((e.style.backgroundImage = l), X(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg_set);
                        if (i) {
                          var n = i.split("|"),
                            a = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = a.join()),
                            "" === e.style.backgroundImage &&
                              ((a = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = a.join())),
                            X(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    le(e, t, s),
                      (function (e, t, s) {
                        var i = Z[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            oe = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(p);
            },
            ce = function (e) {
              B(e, function (e) {
                Y(e, F);
              }),
                Y(e, F);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                Y(e, q);
              },
              VIDEO: function (e) {
                G(e, function (e) {
                  Y(e, q);
                }),
                  Y(e, N),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, V);
              },
            },
            pe = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (H(e)) {
                        var t = j(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  _(e) ||
                    L(e) ||
                    (P(e, t.class_entered),
                    P(e, t.class_exited),
                    P(e, t.class_applied),
                    P(e, t.class_loading),
                    P(e, t.class_loaded),
                    P(e, t.class_error));
                })(e, t),
                x(e),
                R(e);
            },
            ue = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            me = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var n = (function (e) {
                        return A.indexOf(T(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        M(e, s.class_entered),
                        P(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && I(e, s);
                        })(e, s, i),
                        O(s.callback_enter, e, t, i),
                        n || re(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      _(e) ||
                        (M(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return T(e) === f;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              B(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            ce(e),
                            P(e, s.class_loading),
                            $(i, -1),
                            x(e),
                            O(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        O(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            fe = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return T(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return fe(e).filter(_);
              })(e || ge(t));
            },
            ye = function (e, s) {
              var n = r(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        me(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e),
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), fe(s).filter(ve)).forEach(function (t) {
                          P(t, e.class_error), x(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(n, this),
                this.update(s);
            };
          return (
            (ye.prototype = {
              update: function (e) {
                var t,
                  n,
                  a = this._settings,
                  l = be(e, a);
                D(this, l.length),
                  !s && i
                    ? he(a)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== ue.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  le(e, t, s),
                                  (function (e, t) {
                                    var s = Z[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  C(e, y);
                              })(e, t, s);
                          }),
                            D(s, 0);
                        })(l, a, this)
                      : ((n = l),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(l);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ge(this._settings).forEach(function (e) {
                    R(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                be(e, s).forEach(function (e) {
                  I(e, t), re(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  pe(t, e);
                });
              },
            }),
            (ye.load = function (e, t) {
              var s = r(t);
              re(e, s);
            }),
            (ye.resetStatus = function (e) {
              x(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) o(e, s);
                  else o(e, t);
              })(ye, window.lazyLoadOptions),
            ye
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var a = (t[i] = { exports: {} });
    return e[i].call(a.exports, a, a.exports, s), a.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } }),
              );
          }, t));
      },
      i = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } }),
                );
            }, t);
        }
      },
      n = (e, s = 500) => (e.hidden ? i(e, s) : t(e, s)),
      a = !0,
      l = (e = 500) => {
        document.documentElement.classList.contains("lock")
          ? r(e)
          : (o(e), console.log("lock"));
      },
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (a) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (a = !1),
            setTimeout(function () {
              a = !0;
            }, e);
        }
      },
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (a) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (a = !1),
            setTimeout(function () {
              a = !0;
            }, e);
        }
      };
    function c() {
      r(), document.documentElement.classList.remove("menu-open");
    }
    function d(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton,
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`,
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this),
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this),
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this),
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this),
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector,
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(this.options.youtubeAttribute)}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive,
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : l(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } }),
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. ",
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            a &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute,
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive,
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              l(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`,
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`,
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && d(`[Попапос]: ${e}`);
      }
    })({});
    let p = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
              ? this.removeError(e)
              : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.closest(".form__row").classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`,
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error"),
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                p.removeError(t);
            }
            let i = t.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let e = 0; e < i.length; e++) {
                i[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const i = s[t].querySelector("select");
                  e.select.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function u(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function h(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach((s) => {
          void 0 === e[s]
            ? (e[s] = t[s])
            : u(t[s]) &&
              u(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              h(e[s], t[s]);
        });
    }
    e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`,
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle,
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(e).label.text ? this.getSelectPlaceholder(e).label.text : this.getSelectPlaceholder(e).value}</span>`,
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : "",
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${t.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`,
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag),
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag),
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`,
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle),
                )
              )
                this.selectsСlose(), this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption),
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectOption),
                  ),
                  s = e.closest(".select").dataset.id;
                this.setDisableAfterSelectsForSend(s),
                  this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect),
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      setDisableAfterSelectsForSend(e) {
        const t = document.querySelectorAll(".filter__select");
        if (e < t.length)
          for (let s = e; s < t.length; s++) {
            const e = t[s];
            e.setAttribute("disabled", "disabled"),
              e.closest(".select").classList.add("_select-disabled"),
              (e
                .closest(".select")
                .querySelector(".select__content").innerHTML = e[0].innerHTML);
          }
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`,
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions,
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          n(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody,
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle,
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${e.dataset.id}" data-value="${t.value}" class="_select-tag">${this.getSelectElementContent(t)}</span>`,
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          a = !!e.dataset.href && e.dataset.href,
          l = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let r = "";
        return (
          (r += a
            ? `<a ${l} ${i} href="${a}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (r += this.getSelectElementContent(e)),
          (r += a ? "</a>" : "</button>"),
          r
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions,
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected),
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected",
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`,
            ) &&
              (e.querySelector(
                `${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`,
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && p.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = !0),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = "disabled"))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput,
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions,
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } }),
        );
      }
      setLogging(e) {
        this.config.logging && d(`[select]: ${e}`);
      }
    })({});
    const m = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function f() {
      const e = "undefined" != typeof document ? document : {};
      return h(e, m), e;
    }
    const g = {
      document: m,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function v() {
      const e = "undefined" != typeof window ? window : {};
      return h(e, g), e;
    }
    function b(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function y() {
      return Date.now();
    }
    function S(e, t) {
      void 0 === t && (t = "x");
      const s = v();
      let i, n, a;
      const l = (function (e) {
        const t = v();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = l.transform || l.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (a = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((a =
              l.MozTransform ||
              l.OTransform ||
              l.MsTransform ||
              l.msTransform ||
              l.transform ||
              l
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = a.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m41
            : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m42
            : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
        n || 0
      );
    }
    function w(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function E() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < arguments.length; i += 1) {
        const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (
          null != n &&
          ((s = n),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
        ) {
          const s = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t],
              a = Object.getOwnPropertyDescriptor(n, i);
            void 0 !== a &&
              a.enumerable &&
              (w(e[i]) && w(n[i])
                ? n[i].__swiper__
                  ? (e[i] = n[i])
                  : E(e[i], n[i])
                : !w(e[i]) && w(n[i])
                  ? ((e[i] = {}),
                    n[i].__swiper__ ? (e[i] = n[i]) : E(e[i], n[i]))
                  : (e[i] = n[i]));
          }
        }
      }
      var s;
      return e;
    }
    function T(e, t, s) {
      e.style.setProperty(t, s);
    }
    function C(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const n = v(),
        a = -t.translate;
      let l,
        r = null;
      const o = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > a ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        p = () => {
          (l = new Date().getTime()), null === r && (r = l);
          const e = Math.max(Math.min((l - r) / o, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let u = a + c * (s - a);
          if ((d(u, s) && (u = s), t.wrapperEl.scrollTo({ [i]: u }), d(u, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: u });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(p);
        };
      p();
    }
    function x(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function _(e) {
      try {
        return void console.warn(e);
      } catch (e) {}
    }
    function L(e, t) {
      void 0 === t && (t = []);
      const s = document.createElement(e);
      return (
        s.classList.add(
          ...(Array.isArray(t)
            ? t
            : (function (e) {
                return (
                  void 0 === e && (e = ""),
                  e
                    .trim()
                    .split(" ")
                    .filter((e) => !!e.trim())
                );
              })(t)),
        ),
        s
      );
    }
    function A(e, t) {
      return v().getComputedStyle(e, null).getPropertyValue(t);
    }
    function O(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function M(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function P(e, t, s) {
      const i = v();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    function k(e) {
      return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
    }
    let I, $, D;
    function z() {
      return (
        I ||
          (I = (function () {
            const e = v(),
              t = f();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        I
      );
    }
    function B(e) {
      return (
        void 0 === e && (e = {}),
        $ ||
          ($ = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = z(),
              i = v(),
              n = i.navigator.platform,
              a = t || i.navigator.userAgent,
              l = { ios: !1, android: !1 },
              r = i.screen.width,
              o = i.screen.height,
              c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = a.match(/(iPad).*OS\s([\d_]+)/);
            const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === n;
            let m = "MacIntel" === n;
            return (
              !d &&
                m &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${o}`) >= 0 &&
                ((d = a.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (m = !1)),
              c && !h && ((l.os = "android"), (l.android = !0)),
              (d || u || p) && ((l.os = "ios"), (l.ios = !0)),
              l
            );
          })(e)),
        $
      );
    }
    function G() {
      return (
        D ||
          (D = (function () {
            const e = v(),
              t = B();
            let s = !1;
            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (i()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, i] = t
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                s = e < 16 || (16 === e && i < 2);
              }
            }
            const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
              a = i();
            return {
              isSafari: s || a,
              needPerspectiveFix: s,
              need3dFix: a || (n && t.ios),
              isWebView: n,
            };
          })()),
        D
      );
    }
    var q = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function n() {
          i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
          for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
            a[l] = arguments[l];
          t.apply(i, a);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((i, n) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(n, 1);
                    });
              }),
              s)
            : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++)
          a[l] = arguments[l];
        "string" == typeof a[0] || Array.isArray(a[0])
          ? ((t = a[0]), (s = a.slice(1, a.length)), (i = e))
          : ((t = a[0].events), (s = a[0].data), (i = a[0].context || e)),
          s.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    };
    const N = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (s) {
          let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
          !t &&
            e.isElement &&
            (s.shadowRoot
              ? (t = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                ))
              : requestAnimationFrame(() => {
                  s.shadowRoot &&
                    ((t = s.shadowRoot.querySelector(
                      `.${e.params.lazyPreloaderClass}`,
                    )),
                    t && t.remove());
                })),
            t && t.remove();
        }
      },
      F = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
      },
      V = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          n = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const s = n,
            a = [s - t];
          return (
            a.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
            void e.slides.forEach((t, s) => {
              a.includes(t.column) && F(e, s);
            })
          );
        }
        const a = n + i - 1;
        if (e.params.rewind || e.params.loop)
          for (let i = n - t; i <= a + t; i += 1) {
            const t = ((i % s) + s) % s;
            (t < n || t > a) && F(e, t);
          }
        else
          for (let i = Math.max(n - t, 0); i <= Math.min(a + t, s - 1); i += 1)
            i !== n && (i > a || i < n) && F(e, i);
      };
    var H = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(A(i, "padding-left") || 0, 10) -
              parseInt(A(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(A(i, "padding-top") || 0, 10) -
              parseInt(A(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t, s) {
          return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
        }
        const s = e.params,
          {
            wrapperEl: i,
            slidesEl: n,
            size: a,
            rtlTranslate: l,
            wrongRTL: r,
          } = e,
          o = e.virtual && s.virtual.enabled,
          c = o ? e.virtual.slides.length : e.slides.length,
          d = x(n, `.${e.params.slideClass}, swiper-slide`),
          p = o ? e.virtual.slides.length : d.length;
        let u = [];
        const h = [],
          m = [];
        let f = s.slidesOffsetBefore;
        "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
        let g = s.slidesOffsetAfter;
        "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = s.spaceBetween,
          S = -f,
          w = 0,
          E = 0;
        if (void 0 === a) return;
        "string" == typeof y && y.indexOf("%") >= 0
          ? (y = (parseFloat(y.replace("%", "")) / 100) * a)
          : "string" == typeof y && (y = parseFloat(y)),
          (e.virtualSize = -y),
          d.forEach((e) => {
            l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          s.centeredSlides &&
            s.cssMode &&
            (T(i, "--swiper-centered-offset-before", ""),
            T(i, "--swiper-centered-offset-after", ""));
        const C = s.grid && s.grid.rows > 1 && e.grid;
        let _;
        C ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
        const L =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let i = 0; i < p; i += 1) {
          let n;
          if (
            ((_ = 0),
            d[i] && (n = d[i]),
            C && e.grid.updateSlide(i, n, d),
            !d[i] || "none" !== A(n, "display"))
          ) {
            if ("auto" === s.slidesPerView) {
              L && (d[i].style[e.getDirectionLabel("width")] = "");
              const a = getComputedStyle(n),
                l = n.style.transform,
                r = n.style.webkitTransform;
              if (
                (l && (n.style.transform = "none"),
                r && (n.style.webkitTransform = "none"),
                s.roundLengths)
              )
                _ = e.isHorizontal() ? P(n, "width", !0) : P(n, "height", !0);
              else {
                const e = t(a, "width"),
                  s = t(a, "padding-left"),
                  i = t(a, "padding-right"),
                  l = t(a, "margin-left"),
                  r = t(a, "margin-right"),
                  o = a.getPropertyValue("box-sizing");
                if (o && "border-box" === o) _ = e + l + r;
                else {
                  const { clientWidth: t, offsetWidth: a } = n;
                  _ = e + s + i + l + r + (a - t);
                }
              }
              l && (n.style.transform = l),
                r && (n.style.webkitTransform = r),
                s.roundLengths && (_ = Math.floor(_));
            } else
              (_ = (a - (s.slidesPerView - 1) * y) / s.slidesPerView),
                s.roundLengths && (_ = Math.floor(_)),
                d[i] && (d[i].style[e.getDirectionLabel("width")] = `${_}px`);
            d[i] && (d[i].swiperSlideSize = _),
              m.push(_),
              s.centeredSlides
                ? ((S = S + _ / 2 + w / 2 + y),
                  0 === w && 0 !== i && (S = S - a / 2 - y),
                  0 === i && (S = S - a / 2 - y),
                  Math.abs(S) < 0.001 && (S = 0),
                  s.roundLengths && (S = Math.floor(S)),
                  E % s.slidesPerGroup == 0 && u.push(S),
                  h.push(S))
                : (s.roundLengths && (S = Math.floor(S)),
                  (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(S),
                  h.push(S),
                  (S = S + _ + y)),
              (e.virtualSize += _ + y),
              (w = _),
              (E += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, a) + g),
          l &&
            r &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            (i.style.width = `${e.virtualSize + y}px`),
          s.setWrapperSize &&
            (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`),
          C && e.grid.updateWrapperSize(_, u),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < u.length; i += 1) {
            let n = u[i];
            s.roundLengths && (n = Math.floor(n)),
              u[i] <= e.virtualSize - a && t.push(n);
          }
          (u = t),
            Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - a);
        }
        if (o && s.loop) {
          const t = m[0] + y;
          if (s.slidesPerGroup > 1) {
            const i = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  s.slidesPerGroup,
              ),
              n = t * s.slidesPerGroup;
            for (let e = 0; e < i; e += 1) u.push(u[u.length - 1] + n);
          }
          for (
            let i = 0;
            i < e.virtual.slidesBefore + e.virtual.slidesAfter;
            i += 1
          )
            1 === s.slidesPerGroup && u.push(u[u.length - 1] + t),
              h.push(h[h.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === u.length && (u = [0]), 0 !== y)) {
          const t =
            e.isHorizontal() && l
              ? "marginLeft"
              : e.getDirectionLabel("marginRight");
          d.filter(
            (e, t) => !(s.cssMode && !s.loop) || t !== d.length - 1,
          ).forEach((e) => {
            e.style[t] = `${y}px`;
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (y || 0);
          }),
            (e -= y);
          const t = e - a;
          u = u.map((e) => (e <= 0 ? -f : e > t ? t + g : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (y || 0);
            }),
            (e -= y),
            e < a)
          ) {
            const t = (a - e) / 2;
            u.forEach((e, s) => {
              u[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: m,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          T(i, "--swiper-centered-offset-before", -u[0] + "px"),
            T(
              i,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px",
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== c && e.emit("slidesLengthChange"),
          u.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== b && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          e.emit("slidesUpdated"),
          !(o || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            i = e.el.classList.contains(t);
          p <= s.maxBackfaceHiddenSlides
            ? i || e.el.classList.add(t)
            : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          a = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const l = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(l(e));
            }
        else s.push(l(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            a = e > a ? e : a;
          }
        (a || 0 === a) && (t.wrapperEl.style.height = `${a}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
            s -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: a } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let l = -e;
        n && (l = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let r = s.spaceBetween;
        "string" == typeof r && r.indexOf("%") >= 0
          ? (r = (parseFloat(r.replace("%", "")) / 100) * t.size)
          : "string" == typeof r && (r = parseFloat(r));
        for (let e = 0; e < i.length; e += 1) {
          const o = i[e];
          let c = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (c -= i[0].swiperSlideOffset);
          const d =
              (l + (s.centeredSlides ? t.minTranslate() : 0) - c) /
              (o.swiperSlideSize + r),
            p =
              (l - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - c) /
              (o.swiperSlideSize + r),
            u = -(l - c),
            h = u + t.slidesSizesGrid[e],
            m = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (u <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            m && i[e].classList.add(s.slideFullyVisibleClass),
            (o.progress = n ? -d : d),
            (o.originalProgress = n ? -p : p);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: a, isEnd: l, progressLoop: r } = t;
        const o = a,
          c = l;
        if (0 === i) (n = 0), (a = !0), (l = !0);
        else {
          n = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            r = Math.abs(e - t.maxTranslate()) < 1;
          (a = s || n <= 0), (l = r || n >= 1), s && (n = 0), r && (n = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            n = t.slidesGrid[s],
            a = t.slidesGrid[i],
            l = t.slidesGrid[t.slidesGrid.length - 1],
            o = Math.abs(e);
          (r = o >= n ? (o - n) / l : (o + l - a) / l), r > 1 && (r -= 1);
        }
        Object.assign(t, {
          progress: n,
          progressLoop: r,
          isBeginning: a,
          isEnd: l,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !o && t.emit("reachBeginning toEdge"),
          l && !c && t.emit("reachEnd toEdge"),
          ((o && !a) || (c && !l)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
          a = e.virtual && s.virtual.enabled,
          l = e.grid && s.grid && s.grid.rows > 1,
          r = (e) => x(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let o, c, d;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass,
            );
          }),
          a)
        )
          if (s.loop) {
            let t = n - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (o = r(`[data-swiper-slide-index="${t}"]`));
          } else o = r(`[data-swiper-slide-index="${n}"]`);
        else
          l
            ? ((o = t.filter((e) => e.column === n)[0]),
              (d = t.filter((e) => e.column === n + 1)[0]),
              (c = t.filter((e) => e.column === n - 1)[0]))
            : (o = t[n]);
        o &&
          (o.classList.add(s.slideActiveClass),
          l
            ? (d && d.classList.add(s.slideNextClass),
              c && c.classList.add(s.slidePrevClass))
            : ((d = (function (e, t) {
                const s = [];
                for (; e.nextElementSibling; ) {
                  const i = e.nextElementSibling;
                  t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
                }
                return s;
              })(o, `.${s.slideClass}, swiper-slide`)[0]),
              s.loop && !d && (d = t[0]),
              d && d.classList.add(s.slideNextClass),
              (c = (function (e, t) {
                const s = [];
                for (; e.previousElementSibling; ) {
                  const i = e.previousElementSibling;
                  t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
                }
                return s;
              })(o, `.${s.slideClass}, swiper-slide`)[0]),
              s.loop && 0 === !c && (c = t[t.length - 1]),
              c && c.classList.add(s.slidePrevClass))),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: n,
            activeIndex: a,
            realIndex: l,
            snapIndex: r,
          } = t;
        let o,
          c = e;
        const d = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : i >= t[e] && i < t[e + 1] && (n = e + 1)
                  : i >= t[e] && (n = e);
              return (
                s.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          o = i.indexOf(s);
        else {
          const e = Math.min(n.slidesPerGroupSkip, c);
          o = e + Math.floor((c - e) / n.slidesPerGroup);
        }
        if ((o >= i.length && (o = i.length - 1), c === a && !t.params.loop))
          return void (
            o !== r && ((t.snapIndex = o), t.emit("snapIndexChange"))
          );
        if (c === a && t.params.loop && t.virtual && t.params.virtual.enabled)
          return void (t.realIndex = d(c));
        const p = t.grid && n.grid && n.grid.rows > 1;
        let u;
        if (t.virtual && n.virtual.enabled && n.loop) u = d(c);
        else if (p) {
          const e = t.slides.filter((e) => e.column === c)[0];
          let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
          Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
            (u = Math.floor(s / n.grid.rows));
        } else if (t.slides[c]) {
          const e = t.slides[c].getAttribute("data-swiper-slide-index");
          u = e ? parseInt(e, 10) : c;
        } else u = c;
        Object.assign(t, {
          previousSnapIndex: r,
          snapIndex: o,
          previousRealIndex: l,
          realIndex: u,
          previousIndex: a,
          activeIndex: c,
        }),
          t.initialized && V(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            (l !== u && t.emit("realIndexChange"), t.emit("slideChange"));
      },
      updateClickedSlide: function (e, t) {
        const s = this,
          i = s.params;
        let n = e.closest(`.${i.slideClass}, swiper-slide`);
        !n &&
          s.isElement &&
          t &&
          t.length > 1 &&
          t.includes(e) &&
          [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
            !n &&
              e.matches &&
              e.matches(`.${i.slideClass}, swiper-slide`) &&
              (n = e);
          });
        let a,
          l = !1;
        if (n)
          for (let e = 0; e < s.slides.length; e += 1)
            if (s.slides[e] === n) {
              (l = !0), (a = e);
              break;
            }
        if (!n || !l)
          return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
        (s.clickedSlide = n),
          s.virtual && s.params.virtual.enabled
            ? (s.clickedIndex = parseInt(
                n.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (s.clickedIndex = a),
          i.slideToClickedSlide &&
            void 0 !== s.clickedIndex &&
            s.clickedIndex !== s.activeIndex &&
            s.slideToClickedSlide();
      },
    };
    var j = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: n } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let a = S(n, e);
        return (a += this.cssOverflowAdjustment()), s && (a = -a), a || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: n, wrapperEl: a, progress: l } = s;
        let r,
          o = 0,
          c = 0;
        s.isHorizontal() ? (o = i ? -e : e) : (c = e),
          n.roundLengths && ((o = Math.floor(o)), (c = Math.floor(c))),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? o : c),
          n.cssMode
            ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -o : -c)
            : n.virtualTranslate ||
              (s.isHorizontal()
                ? (o -= s.cssOverflowAdjustment())
                : (c -= s.cssOverflowAdjustment()),
              (a.style.transform = `translate3d(${o}px, ${c}px, 0px)`));
        const d = s.maxTranslate() - s.minTranslate();
        (r = 0 === d ? 0 : (e - s.minTranslate()) / d),
          r !== l && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0);
        const a = this,
          { params: l, wrapperEl: r } = a;
        if (a.animating && l.preventInteractionOnTransition) return !1;
        const o = a.minTranslate(),
          c = a.maxTranslate();
        let d;
        if (
          ((d = i && e > o ? o : i && e < c ? c : e),
          a.updateProgress(d),
          l.cssMode)
        ) {
          const e = a.isHorizontal();
          if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!a.support.smoothScroll)
              return (
                C({ swiper: a, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            r.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(d),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionEnd")))
            : (a.setTransition(t),
              a.setTranslate(d),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionStart")),
              a.animating ||
                ((a.animating = !0),
                a.onTranslateToWrapperTransitionEnd ||
                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.wrapperEl.removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd,
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      s && a.emit("transitionEnd"));
                  }),
                a.wrapperEl.addEventListener(
                  "transitionend",
                  a.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function R(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
      const { activeIndex: a, previousIndex: l } = t;
      let r = i;
      if (
        (r || (r = a > l ? "next" : a < l ? "prev" : "reset"),
        t.emit(`transition${n}`),
        s && a !== l)
      ) {
        if ("reset" === r) return void t.emit(`slideResetTransition${n}`);
        t.emit(`slideChangeTransition${n}`),
          "next" === r
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`);
      }
    }
    var W = {
      slideTo: function (e, t, s, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const a = this;
        let l = e;
        l < 0 && (l = 0);
        const {
          params: r,
          snapGrid: o,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: m,
        } = a;
        if (
          (a.animating && r.preventInteractionOnTransition) ||
          (!m && !i && !n) ||
          a.destroyed
        )
          return !1;
        const f = Math.min(a.params.slidesPerGroupSkip, l);
        let g = f + Math.floor((l - f) / a.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1);
        const v = -o[g];
        if (r.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (l = e)
                : t >= s && t < i && (l = e + 1)
              : t >= s && (l = e);
          }
        if (a.initialized && l !== p) {
          if (
            !a.allowSlideNext &&
            (u
              ? v > a.translate && v > a.minTranslate()
              : v < a.translate && v < a.minTranslate())
          )
            return !1;
          if (
            !a.allowSlidePrev &&
            v > a.translate &&
            v > a.maxTranslate() &&
            (p || 0) !== l
          )
            return !1;
        }
        let b;
        if (
          (l !== (d || 0) && s && a.emit("beforeSlideChangeStart"),
          a.updateProgress(v),
          (b = l > p ? "next" : l < p ? "prev" : "reset"),
          (u && -v === a.translate) || (!u && v === a.translate))
        )
          return (
            a.updateActiveIndex(l),
            r.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            "slide" !== r.effect && a.setTranslate(v),
            "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)),
            !1
          );
        if (r.cssMode) {
          const e = a.isHorizontal(),
            s = u ? v : -v;
          if (0 === t) {
            const t = a.virtual && a.params.virtual.enabled;
            t &&
              ((a.wrapperEl.style.scrollSnapType = "none"),
              (a._immediateVirtual = !0)),
              t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
                ? ((a._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    h[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (a.wrapperEl.style.scrollSnapType = ""),
                    (a._immediateVirtual = !1);
                });
          } else {
            if (!a.support.smoothScroll)
              return (
                C({ swiper: a, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          a.setTransition(t),
          a.setTranslate(v),
          a.updateActiveIndex(l),
          a.updateSlidesClasses(),
          a.emit("beforeTransitionStart", t, i),
          a.transitionStart(s, b),
          0 === t
            ? a.transitionEnd(s, b)
            : a.animating ||
              ((a.animating = !0),
              a.onSlideToWrapperTransitionEnd ||
                (a.onSlideToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.wrapperEl.removeEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd,
                    ),
                    (a.onSlideToWrapperTransitionEnd = null),
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(s, b));
                }),
              a.wrapperEl.addEventListener(
                "transitionend",
                a.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const n = this;
        if (n.destroyed) return;
        const a = n.grid && n.params.grid && n.params.grid.rows > 1;
        let l = e;
        if (n.params.loop)
          if (n.virtual && n.params.virtual.enabled)
            l += n.virtual.slidesBefore;
          else {
            let e;
            if (a) {
              const t = l * n.params.grid.rows;
              e = n.slides.filter(
                (e) => 1 * e.getAttribute("data-swiper-slide-index") === t,
              )[0].column;
            } else e = n.getSlideIndexByData(l);
            const t = a
                ? Math.ceil(n.slides.length / n.params.grid.rows)
                : n.slides.length,
              { centeredSlides: s } = n.params;
            let i = n.params.slidesPerView;
            "auto" === i
              ? (i = n.slidesPerViewDynamic())
              : ((i = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
                s && i % 2 == 0 && (i += 1));
            let r = t - e < i;
            if ((s && (r = r || e < Math.ceil(i / 2)), r)) {
              const i = s
                ? e < n.activeIndex
                  ? "prev"
                  : "next"
                : e - n.activeIndex - 1 < n.params.slidesPerView
                  ? "next"
                  : "prev";
              n.loopFix({
                direction: i,
                slideTo: !0,
                activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                slideRealIndex: "next" === i ? n.realIndex : void 0,
              });
            }
            if (a) {
              const e = l * n.params.grid.rows;
              l = n.slides.filter(
                (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
              )[0].column;
            } else l = n.getSlideIndexByData(l);
          }
        return (
          requestAnimationFrame(() => {
            n.slideTo(l, t, s, i);
          }),
          n
        );
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { enabled: n, params: a, animating: l } = i;
        if (!n || i.destroyed) return i;
        let r = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (r = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const o = i.activeIndex < a.slidesPerGroupSkip ? 1 : r,
          c = i.virtual && a.virtual.enabled;
        if (a.loop) {
          if (l && !c && a.loopPreventsSliding) return !1;
          if (
            (i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft),
            i.activeIndex === i.slides.length - 1 && a.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                i.slideTo(i.activeIndex + o, e, t, s);
              }),
              !0
            );
        }
        return a.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + o, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: n,
            snapGrid: a,
            slidesGrid: l,
            rtlTranslate: r,
            enabled: o,
            animating: c,
          } = i;
        if (!o || i.destroyed) return i;
        const d = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (c && !d && n.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = p(r ? i.translate : -i.translate),
          h = a.map((e) => p(e));
        let m = a[h.indexOf(u) - 1];
        if (void 0 === m && n.cssMode) {
          let e;
          a.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (m = a[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== m &&
            ((f = l.indexOf(m)),
            f < 0 && (f = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return n.loop && 0 === i.activeIndex && n.cssMode
          ? (requestAnimationFrame(() => {
              i.slideTo(f, e, t, s);
            }),
            !0)
          : i.slideTo(f, e, t, s);
      },
      slideReset: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this;
        if (!i.destroyed) return i.slideTo(i.activeIndex, e, t, s);
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const n = this;
        if (n.destroyed) return;
        let a = n.activeIndex;
        const l = Math.min(n.params.slidesPerGroupSkip, a),
          r = l + Math.floor((a - l) / n.params.slidesPerGroup),
          o = n.rtlTranslate ? n.translate : -n.translate;
        if (o >= n.snapGrid[r]) {
          const e = n.snapGrid[r];
          o - e > (n.snapGrid[r + 1] - e) * i && (a += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[r - 1];
          o - e <= (n.snapGrid[r] - e) * i && (a -= n.params.slidesPerGroup);
        }
        return (
          (a = Math.max(a, 0)),
          (a = Math.min(a, n.slidesGrid.length - 1)),
          n.slideTo(a, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this;
        if (e.destroyed) return;
        const { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          a = e.clickedIndex;
        const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? a < e.loopedSlides - i / 2 ||
                a > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (a = e.getSlideIndex(
                    x(s, `${l}[data-swiper-slide-index="${n}"]`)[0],
                  )),
                  b(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a)
              : a > e.slides.length - i
                ? (e.loopFix(),
                  (a = e.getSlideIndex(
                    x(s, `${l}[data-swiper-slide-index="${n}"]`)[0],
                  )),
                  b(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a);
        } else e.slideTo(a);
      },
    };
    var Y = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        const n = () => {
            x(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            });
          },
          a = t.grid && s.grid && s.grid.rows > 1,
          l = s.slidesPerGroup * (a ? s.grid.rows : 1),
          r = t.slides.length % l != 0,
          o = a && t.slides.length % s.grid.rows != 0,
          c = (e) => {
            for (let i = 0; i < e; i += 1) {
              const e = t.isElement
                ? L("swiper-slide", [s.slideBlankClass])
                : L("div", [s.slideClass, s.slideBlankClass]);
              t.slidesEl.append(e);
            }
          };
        if (r) {
          if (s.loopAddBlankSlides) {
            c(l - (t.slides.length % l)), t.recalcSlides(), t.updateSlides();
          } else
            _(
              "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
            );
          n();
        } else if (o) {
          if (s.loopAddBlankSlides) {
            c(s.grid.rows - (t.slides.length % s.grid.rows)),
              t.recalcSlides(),
              t.updateSlides();
          } else
            _(
              "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
            );
          n();
        } else n();
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: s = !0,
          direction: i,
          setTranslate: n,
          activeSlideIndex: a,
          byController: l,
          byMousewheel: r,
        } = void 0 === e ? {} : e;
        const o = this;
        if (!o.params.loop) return;
        o.emit("beforeLoopFix");
        const {
            slides: c,
            allowSlidePrev: d,
            allowSlideNext: p,
            slidesEl: u,
            params: h,
          } = o,
          { centeredSlides: m } = h;
        if (
          ((o.allowSlidePrev = !0),
          (o.allowSlideNext = !0),
          o.virtual && h.virtual.enabled)
        )
          return (
            s &&
              (h.centeredSlides || 0 !== o.snapIndex
                ? h.centeredSlides && o.snapIndex < h.slidesPerView
                  ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                  : o.snapIndex === o.snapGrid.length - 1 &&
                    o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
            (o.allowSlidePrev = d),
            (o.allowSlideNext = p),
            void o.emit("loopFix")
          );
        let f = h.slidesPerView;
        "auto" === f
          ? (f = o.slidesPerViewDynamic())
          : ((f = Math.ceil(parseFloat(h.slidesPerView, 10))),
            m && f % 2 == 0 && (f += 1));
        const g = h.slidesPerGroupAuto ? f : h.slidesPerGroup;
        let v = g;
        v % g != 0 && (v += g - (v % g)),
          (v += h.loopAdditionalSlides),
          (o.loopedSlides = v);
        const b = o.grid && h.grid && h.grid.rows > 1;
        c.length < f + v
          ? _(
              "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
            )
          : b &&
            "row" === h.grid.fill &&
            _(
              "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
            );
        const y = [],
          S = [];
        let w = o.activeIndex;
        void 0 === a
          ? (a = o.getSlideIndex(
              c.filter((e) => e.classList.contains(h.slideActiveClass))[0],
            ))
          : (w = a);
        const E = "next" === i || !i,
          T = "prev" === i || !i;
        let C = 0,
          x = 0;
        const L = b ? Math.ceil(c.length / h.grid.rows) : c.length,
          A = (b ? c[a].column : a) + (m && void 0 === n ? -f / 2 + 0.5 : 0);
        if (A < v) {
          C = Math.max(v - A, g);
          for (let e = 0; e < v - A; e += 1) {
            const t = e - Math.floor(e / L) * L;
            if (b) {
              const e = L - t - 1;
              for (let t = c.length - 1; t >= 0; t -= 1)
                c[t].column === e && y.push(t);
            } else y.push(L - t - 1);
          }
        } else if (A + f > L - v) {
          x = Math.max(A - (L - 2 * v), g);
          for (let e = 0; e < x; e += 1) {
            const t = e - Math.floor(e / L) * L;
            b
              ? c.forEach((e, s) => {
                  e.column === t && S.push(s);
                })
              : S.push(t);
          }
        }
        if (
          ((o.__preventObserver__ = !0),
          requestAnimationFrame(() => {
            o.__preventObserver__ = !1;
          }),
          T &&
            y.forEach((e) => {
              (c[e].swiperLoopMoveDOM = !0),
                u.prepend(c[e]),
                (c[e].swiperLoopMoveDOM = !1);
            }),
          E &&
            S.forEach((e) => {
              (c[e].swiperLoopMoveDOM = !0),
                u.append(c[e]),
                (c[e].swiperLoopMoveDOM = !1);
            }),
          o.recalcSlides(),
          "auto" === h.slidesPerView
            ? o.updateSlides()
            : b &&
              ((y.length > 0 && T) || (S.length > 0 && E)) &&
              o.slides.forEach((e, t) => {
                o.grid.updateSlide(t, e, o.slides);
              }),
          h.watchSlidesProgress && o.updateSlidesOffset(),
          s)
        )
          if (y.length > 0 && T) {
            if (void 0 === t) {
              const e = o.slidesGrid[w],
                t = o.slidesGrid[w + C] - e;
              r
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(w + Math.ceil(C), 0, !1, !0),
                  n &&
                    ((o.touchEventsData.startTranslate =
                      o.touchEventsData.startTranslate - t),
                    (o.touchEventsData.currentTranslate =
                      o.touchEventsData.currentTranslate - t)));
            } else if (n) {
              const e = b ? y.length / h.grid.rows : y.length;
              o.slideTo(o.activeIndex + e, 0, !1, !0),
                (o.touchEventsData.currentTranslate = o.translate);
            }
          } else if (S.length > 0 && E)
            if (void 0 === t) {
              const e = o.slidesGrid[w],
                t = o.slidesGrid[w - x] - e;
              r
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(w - x, 0, !1, !0),
                  n &&
                    ((o.touchEventsData.startTranslate =
                      o.touchEventsData.startTranslate - t),
                    (o.touchEventsData.currentTranslate =
                      o.touchEventsData.currentTranslate - t)));
            } else {
              const e = b ? S.length / h.grid.rows : S.length;
              o.slideTo(o.activeIndex - e, 0, !1, !0);
            }
        if (
          ((o.allowSlidePrev = d),
          (o.allowSlideNext = p),
          o.controller && o.controller.control && !l)
        ) {
          const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: n,
            activeSlideIndex: a,
            byController: !0,
          };
          Array.isArray(o.controller.control)
            ? o.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === h.slidesPerView && s,
                  });
              })
            : o.controller.control instanceof o.constructor &&
              o.controller.control.params.loop &&
              o.controller.control.loopFix({
                ...e,
                slideTo:
                  o.controller.control.params.slidesPerView ===
                    h.slidesPerView && s,
              });
        }
        o.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function X(e, t, s) {
      const i = v(),
        { params: n } = e,
        a = n.edgeSwipeDetection,
        l = n.edgeSwipeThreshold;
      return (
        !a ||
        !(s <= l || s >= i.innerWidth - l) ||
        ("prevent" === a && (t.preventDefault(), !0))
      );
    }
    function U(e) {
      const t = this,
        s = f();
      let i = e;
      i.originalEvent && (i = i.originalEvent);
      const n = t.touchEventsData;
      if ("pointerdown" === i.type) {
        if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
        n.pointerId = i.pointerId;
      } else
        "touchstart" === i.type &&
          1 === i.targetTouches.length &&
          (n.touchId = i.targetTouches[0].identifier);
      if ("touchstart" === i.type)
        return void X(t, i, i.targetTouches[0].pageX);
      const { params: a, touches: l, enabled: r } = t;
      if (!r) return;
      if (!a.simulateTouch && "mouse" === i.pointerType) return;
      if (t.animating && a.preventInteractionOnTransition) return;
      !t.animating && a.cssMode && a.loop && t.loopFix();
      let o = i.target;
      if ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(o)) return;
      if ("which" in i && 3 === i.which) return;
      if ("button" in i && i.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const c = !!a.noSwipingClass && "" !== a.noSwipingClass,
        d = i.composedPath ? i.composedPath() : i.path;
      c && i.target && i.target.shadowRoot && d && (o = d[0]);
      const p = a.noSwipingSelector
          ? a.noSwipingSelector
          : `.${a.noSwipingClass}`,
        u = !(!i.target || !i.target.shadowRoot);
      if (
        a.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  if (!s || s === f() || s === v()) return null;
                  s.assignedSlot && (s = s.assignedSlot);
                  const i = s.closest(e);
                  return i || s.getRootNode
                    ? i || t(s.getRootNode().host)
                    : null;
                })(t)
              );
            })(p, o)
          : o.closest(p))
      )
        return void (t.allowClick = !0);
      if (a.swipeHandler && !o.closest(a.swipeHandler)) return;
      (l.currentX = i.pageX), (l.currentY = i.pageY);
      const h = l.currentX,
        m = l.currentY;
      if (!X(t, i, h)) return;
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (l.startX = h),
        (l.startY = m),
        (n.touchStartTime = y()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        a.threshold > 0 && (n.allowThresholdMove = !1);
      let g = !0;
      o.matches(n.focusableElements) &&
        ((g = !1), "SELECT" === o.nodeName && (n.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(n.focusableElements) &&
          s.activeElement !== o &&
          s.activeElement.blur();
      const b = g && t.allowTouchMove && a.touchStartPreventDefault;
      (!a.touchStartForcePreventDefault && !b) ||
        o.isContentEditable ||
        i.preventDefault(),
        a.freeMode &&
          a.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !a.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", i);
    }
    function K(e) {
      const t = f(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: a, rtlTranslate: l, enabled: r } = s;
      if (!r) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let o,
        c = e;
      if (
        (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type)
      ) {
        if (null !== i.touchId) return;
        if (c.pointerId !== i.pointerId) return;
      }
      if ("touchmove" === c.type) {
        if (
          ((o = [...c.changedTouches].filter(
            (e) => e.identifier === i.touchId,
          )[0]),
          !o || o.identifier !== i.touchId)
        )
          return;
      } else o = c;
      if (!i.isTouched)
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", c)
        );
      const d = o.pageX,
        p = o.pageY;
      if (c.preventedByNestedSwiper) return (a.startX = d), void (a.startY = p);
      if (!s.allowTouchMove)
        return (
          c.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(a, {
              startX: d,
              startY: p,
              currentX: d,
              currentY: p,
            }),
            (i.touchStartTime = y()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (p < a.startY && s.translate <= s.maxTranslate()) ||
            (p > a.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (d < a.startX && s.translate <= s.maxTranslate()) ||
          (d > a.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        c.target === t.activeElement &&
        c.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      i.allowTouchCallbacks && s.emit("touchMove", c),
        (a.previousX = a.currentX),
        (a.previousY = a.currentY),
        (a.currentX = d),
        (a.currentY = p);
      const u = a.currentX - a.startX,
        h = a.currentY - a.startY;
      if (s.params.threshold && Math.sqrt(u ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && a.currentY === a.startY) ||
        (s.isVertical() && a.currentX === a.startX)
          ? (i.isScrolling = !1)
          : u * u + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", c),
        void 0 === i.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && c.cancelable && c.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && c.stopPropagation();
      let m = s.isHorizontal() ? u : h,
        g = s.isHorizontal()
          ? a.currentX - a.previousX
          : a.currentY - a.previousY;
      n.oneWayMovement &&
        ((m = Math.abs(m) * (l ? 1 : -1)), (g = Math.abs(g) * (l ? 1 : -1))),
        (a.diff = m),
        (m *= n.touchRatio),
        l && ((m = -m), (g = -g));
      const v = s.touchesDirection;
      (s.swipeDirection = m > 0 ? "prev" : "next"),
        (s.touchesDirection = g > 0 ? "prev" : "next");
      const b = s.params.loop && !n.cssMode,
        S =
          ("next" === s.touchesDirection && s.allowSlideNext) ||
          ("prev" === s.touchesDirection && s.allowSlidePrev);
      if (!i.isMoved) {
        if (
          (b && S && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", c);
      }
      if (
        (new Date().getTime(),
        i.isMoved &&
          i.allowThresholdMove &&
          v !== s.touchesDirection &&
          b &&
          S &&
          Math.abs(m) >= 1)
      )
        return (
          Object.assign(a, {
            startX: d,
            startY: p,
            currentX: d,
            currentY: p,
            startTranslate: i.currentTranslate,
          }),
          (i.loopSwapReset = !0),
          void (i.startTranslate = i.currentTranslate)
        );
      s.emit("sliderMove", c),
        (i.isMoved = !0),
        (i.currentTranslate = m + i.startTranslate);
      let w = !0,
        E = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (E = 0),
        m > 0
          ? (b &&
              S &&
              i.allowThresholdMove &&
              i.currentTranslate >
                (n.centeredSlides
                  ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1]
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((w = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + m) ** E)))
          : m < 0 &&
            (b &&
              S &&
              i.allowThresholdMove &&
              i.currentTranslate <
                (n.centeredSlides
                  ? s.maxTranslate() +
                    s.slidesSizesGrid[s.slidesSizesGrid.length - 1]
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === n.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((w = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - m) ** E))),
        w && (c.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(m) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (i.currentTranslate = i.startTranslate),
            void (a.diff = s.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        n.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function Q(e) {
      const t = this,
        s = t.touchEventsData;
      let i,
        n = e;
      n.originalEvent && (n = n.originalEvent);
      if ("touchend" === n.type || "touchcancel" === n.type) {
        if (
          ((i = [...n.changedTouches].filter(
            (e) => e.identifier === s.touchId,
          )[0]),
          !i || i.identifier !== s.touchId)
        )
          return;
      } else {
        if (null !== s.touchId) return;
        if (n.pointerId !== s.pointerId) return;
        i = n;
      }
      if (
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
          n.type,
        )
      ) {
        if (
          !(
            ["pointercancel", "contextmenu"].includes(n.type) &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      (s.pointerId = null), (s.touchId = null);
      const {
        params: a,
        touches: l,
        rtlTranslate: r,
        slidesGrid: o,
        enabled: c,
      } = t;
      if (!c) return;
      if (!a.simulateTouch && "mouse" === n.pointerType) return;
      if (
        (s.allowTouchCallbacks && t.emit("touchEnd", n),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && a.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      a.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = y(),
        p = d - s.touchStartTime;
      if (t.allowClick) {
        const e = n.path || (n.composedPath && n.composedPath());
        t.updateClickedSlide((e && e[0]) || n.target, e),
          t.emit("tap click", n),
          p < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", n);
      }
      if (
        ((s.lastClickTime = y()),
        b(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          (0 === l.diff && !s.loopSwapReset) ||
          (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = a.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        a.cssMode)
      )
        return;
      if (a.freeMode && a.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      const h = u >= -t.maxTranslate() && !t.params.loop;
      let m = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
      ) {
        const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        void 0 !== o[e + t]
          ? (h || (u >= o[e] && u < o[e + t])) &&
            ((m = e), (f = o[e + t] - o[e]))
          : (h || u >= o[e]) &&
            ((m = e), (f = o[o.length - 1] - o[o.length - 2]));
      }
      let g = null,
        v = null;
      a.rewind &&
        (t.isBeginning
          ? (v =
              a.virtual && a.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (g = 0));
      const S = (u - o[m]) / f,
        w = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      if (p > a.longSwipesMs) {
        if (!a.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (S >= a.longSwipesRatio
            ? t.slideTo(a.rewind && t.isEnd ? g : m + w)
            : t.slideTo(m)),
          "prev" === t.swipeDirection &&
            (S > 1 - a.longSwipesRatio
              ? t.slideTo(m + w)
              : null !== v && S < 0 && Math.abs(S) > a.longSwipesRatio
                ? t.slideTo(v)
                : t.slideTo(m));
      } else {
        if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (n.target === t.navigation.nextEl || n.target === t.navigation.prevEl)
          ? n.target === t.navigation.nextEl
            ? t.slideTo(m + w)
            : t.slideTo(m)
          : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + w),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
      }
    }
    function Z() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: a } = e,
        l = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const r = l && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      r
        ? e.params.loop && !l
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function J(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function ee() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const a = e.maxTranslate() - e.minTranslate();
      (n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function te(e) {
      const t = this;
      N(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    function se() {
      const e = this;
      e.documentTouchHandlerProceeded ||
        ((e.documentTouchHandlerProceeded = !0),
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
    }
    const ie = (e, t) => {
      const s = f(),
        { params: i, el: n, wrapperEl: a, device: l } = e,
        r = !!i.nested,
        o = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      s[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: r }),
        n[o]("touchstart", e.onTouchStart, { passive: !1 }),
        n[o]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[o]("touchmove", e.onTouchMove, { passive: !1, capture: r }),
        s[o]("pointermove", e.onTouchMove, { passive: !1, capture: r }),
        s[o]("touchend", e.onTouchEnd, { passive: !0 }),
        s[o]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
        s[o]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
        s[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          n[o]("click", e.onClick, !0),
        i.cssMode && a[o]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[c](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Z,
              !0,
            )
          : e[c]("observerUpdate", Z, !0),
        n[o]("load", e.onLoad, { capture: !0 });
    };
    const ne = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var ae = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function le(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (!0 === e[i] && (e[i] = { enabled: !0 }),
            "navigation" === i &&
              e[i] &&
              e[i].enabled &&
              !e[i].prevEl &&
              !e[i].nextEl &&
              (e[i].auto = !0),
            ["pagination", "scrollbar"].indexOf(i) >= 0 &&
              e[i] &&
              e[i].enabled &&
              !e[i].el &&
              (e[i].auto = !0),
            i in e && "enabled" in n
              ? ("object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                E(t, s))
              : E(t, s))
          : E(t, s);
      };
    }
    const re = {
        eventsEmitter: q,
        update: H,
        translate: j,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              ((s.wrapperEl.style.transitionDuration = `${e}ms`),
              (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              R({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                R({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: W,
        loop: Y,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              { params: t } = e;
            (e.onTouchStart = U.bind(e)),
              (e.onTouchMove = K.bind(e)),
              (e.onTouchEnd = Q.bind(e)),
              (e.onDocumentTouchStart = se.bind(e)),
              t.cssMode && (e.onScroll = ee.bind(e)),
              (e.onClick = J.bind(e)),
              (e.onLoad = te.bind(e)),
              ie(e, "on");
          },
          detachEvents: function () {
            ie(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: n } = e,
              a = i.breakpoints;
            if (!a || (a && 0 === Object.keys(a).length)) return;
            const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
            if (!l || e.currentBreakpoint === l) return;
            const r = (l in a ? a[l] : void 0) || e.originalParams,
              o = ne(e, i),
              c = ne(e, r),
              d = i.enabled;
            o && !c
              ? (n.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !o &&
                c &&
                (n.classList.add(`${i.containerModifierClass}grid`),
                ((r.grid.fill && "column" === r.grid.fill) ||
                  (!r.grid.fill && "column" === i.grid.fill)) &&
                  n.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === r[t]) return;
                const s = i[t] && i[t].enabled,
                  n = r[t] && r[t].enabled;
                s && !n && e[t].disable(), !s && n && e[t].enable();
              });
            const p = r.direction && r.direction !== i.direction,
              u = i.loop && (r.slidesPerView !== i.slidesPerView || p),
              h = i.loop;
            p && s && e.changeDirection(), E(e.params, r);
            const m = e.params.enabled,
              f = e.params.loop;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !m ? e.disable() : !d && m && e.enable(),
              (e.currentBreakpoint = l),
              e.emit("_beforeBreakpoint", r),
              s &&
                (u
                  ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                  : !h && f
                    ? (e.loopCreate(t), e.updateSlides())
                    : h && !f && e.loopDestroy()),
              e.emit("breakpoint", r);
          },
          getBreakpoint: function (e, t, s) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !s))
            )
              return;
            let i = !1;
            const n = v(),
              a = "window" === t ? n.innerHeight : s.clientHeight,
              l = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: a * t, point: e };
                }
                return { value: e, point: e };
              });
            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < l.length; e += 1) {
              const { point: a, value: r } = l[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${r}px)`).matches && (i = a)
                : r <= s.clientWidth && (i = a);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: n, device: a } = e,
              l = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: a.android },
                  { ios: a.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass,
              );
            t.push(...l), n.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      oe = {};
    class ce {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
          i[n] = arguments[n];
        1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
          t || (t = {}),
          (t = E({}, t)),
          e && !t.el && (t.el = e);
        const a = f();
        if (
          t.el &&
          "string" == typeof t.el &&
          a.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            a.querySelectorAll(t.el).forEach((s) => {
              const i = E({}, t, { el: s });
              e.push(new ce(i));
            }),
            e
          );
        }
        const l = this;
        (l.__swiper__ = !0),
          (l.support = z()),
          (l.device = B({ userAgent: t.userAgent })),
          (l.browser = G()),
          (l.eventsListeners = {}),
          (l.eventsAnyListeners = []),
          (l.modules = [...l.__modules__]),
          t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
        const r = {};
        l.modules.forEach((e) => {
          e({
            params: t,
            swiper: l,
            extendParams: le(t, r),
            on: l.on.bind(l),
            once: l.once.bind(l),
            off: l.off.bind(l),
            emit: l.emit.bind(l),
          });
        });
        const o = E({}, ae, r);
        return (
          (l.params = E({}, o, oe, t)),
          (l.originalParams = E({}, l.params)),
          (l.passedParams = E({}, t)),
          l.params &&
            l.params.on &&
            Object.keys(l.params.on).forEach((e) => {
              l.on(e, l.params.on[e]);
            }),
          l.params && l.params.onAny && l.onAny(l.params.onAny),
          Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === l.params.direction,
            isVertical: () => "vertical" === l.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: l.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null,
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          l.emit("_swiper"),
          l.params.init && l.init(),
          l
        );
      }
      getDirectionLabel(e) {
        return this.isHorizontal()
          ? e
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[e];
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = O(x(t, `.${s.slideClass}, swiper-slide`)[0]);
        return O(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          )[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = x(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: a,
          size: l,
          activeIndex: r,
        } = this;
        let o = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
          let e,
            t = i[r] ? Math.ceil(i[r].swiperSlideSize) : 0;
          for (let s = r + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += Math.ceil(i[s].swiperSlideSize)),
              (o += 1),
              t > l && (e = !0));
          for (let s = r - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > l && (e = !0));
        } else if ("current" === e)
          for (let e = r + 1; e < i.length; e += 1) {
            (t ? n[e] + a[e] - n[r] < l : n[e] - n[r] < l) && (o += 1);
          }
        else
          for (let e = r - 1; e >= 0; e -= 1) {
            n[r] - n[e] < l && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        if (
          (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && N(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          s.freeMode && s.freeMode.enabled && !s.cssMode)
        )
          i(), s.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
            e.isEnd &&
            !s.centeredSlides
          ) {
            const t =
              e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
            n = e.slideTo(t.length - 1, 0, !1, !0);
          } else n = e.slideTo(e.activeIndex, 0, !1, !0);
          n || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t),
          s.parentNode &&
            s.parentNode.host &&
            s.parentNode.host.nodeName ===
              t.params.swiperElementNodeName.toUpperCase() &&
            (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return x(s, i())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = L("div", t.params.wrapperClass)),
            s.append(n),
            x(s, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: n,
            slidesEl:
              t.isElement && !s.parentNode.host.slideSlots
                ? s.parentNode.host
                : n,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === A(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === A(s, "direction")),
            wrongRTL: "-webkit-box" === A(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents();
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement &&
            s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          s.forEach((e) => {
            e.complete
              ? N(t, e)
              : e.addEventListener("load", (e) => {
                  N(t, e.target);
                });
          }),
          V(t),
          (t.initialized = !0),
          V(t),
          t.emit("init"),
          t.emit("afterInit"),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: i, el: n, wrapperEl: a, slides: l } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttribute("style"),
              a.removeAttribute("style"),
              l &&
                l.length &&
                l.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideFullyVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        E(oe, e);
      }
      static get extendedDefaults() {
        return oe;
      }
      static get defaults() {
        return ae;
      }
      static installModule(e) {
        ce.prototype.__modules__ || (ce.prototype.__modules__ = []);
        const t = ce.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ce.installModule(e)), ce)
          : (ce.installModule(e), ce);
      }
    }
    function de(e, t, s, i) {
      return (
        e.params.createElements &&
          Object.keys(i).forEach((n) => {
            if (!s[n] && !0 === s.auto) {
              let a = x(e.el, `.${i[n]}`)[0];
              a || ((a = L("div", i[n])), (a.className = i[n]), e.el.append(a)),
                (s[n] = a),
                (t[n] = a);
            }
          }),
        s
      );
    }
    function pe(e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      function a(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
              ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                s.length > 1 &&
                1 === t.el.querySelectorAll(e).length &&
                (s = t.el.querySelector(e))),
            e && !s ? e : s);
      }
      function l(e, s) {
        const i = t.params.navigation;
        (e = k(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function r() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return l(s, !1), void l(e, !1);
        l(s, t.isBeginning && !t.params.rewind),
          l(e, t.isEnd && !t.params.rewind);
      }
      function o(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), n("navigationPrev"));
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), n("navigationNext"));
      }
      function d() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = de(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        let s = a(e.nextEl),
          i = a(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: i }),
          (s = k(s)),
          (i = k(i));
        const n = (s, i) => {
          s && s.addEventListener("click", "next" === i ? c : o),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => n(e, "next")), i.forEach((e) => n(e, "prev"));
      }
      function p() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = k(e)), (s = k(s));
        const i = (e, s) => {
          e.removeEventListener("click", "next" === s ? c : o),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null }),
        i("init", () => {
          !1 === t.params.navigation.enabled ? u() : (d(), r());
        }),
        i("toEdge fromEdge lock unlock", () => {
          r();
        }),
        i("destroy", () => {
          p();
        }),
        i("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = k(e)),
            (s = k(s)),
            t.enabled
              ? r()
              : [...e, ...s]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.add(t.params.navigation.lockClass),
                  );
        }),
        i("click", (e, s) => {
          let { nextEl: i, prevEl: a } = t.navigation;
          (i = k(i)), (a = k(a));
          const l = s.target;
          if (
            t.params.navigation.hideOnClick &&
            !a.includes(l) &&
            !i.includes(l)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === l || t.pagination.el.contains(l))
            )
              return;
            let e;
            i.length
              ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
              : a.length &&
                (e = a[0].classList.contains(t.params.navigation.hiddenClass)),
              n(!0 === e ? "navigationShow" : "navigationHide"),
              [...i, ...a]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass),
                );
          }
        });
      const u = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          p();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" "),
          ),
            d(),
            r();
        },
        disable: u,
        update: r,
        init: d,
        destroy: p,
      });
    }
    function ue(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!+\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function he(e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const a = "swiper-pagination";
      let l;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${a}-bullet`,
          bulletActiveClass: `${a}-bullet-active`,
          modifierClass: `${a}-`,
          currentClass: `${a}-current`,
          totalClass: `${a}-total`,
          hiddenClass: `${a}-hidden`,
          progressbarFillClass: `${a}-progressbar-fill`,
          progressbarOppositeClass: `${a}-progressbar-opposite`,
          clickableClass: `${a}-clickable`,
          lockClass: `${a}-lock`,
          horizontalClass: `${a}-horizontal`,
          verticalClass: `${a}-vertical`,
          paginationDisabledClass: `${a}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let r = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function c(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${i}-${s}`),
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${i}-${s}-${s}`));
      }
      function d(e) {
        const s = e.target.closest(ue(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const i = O(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === i) return;
          t.slideToLoop(i);
        } else t.slideTo(i);
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        let i,
          a,
          d = t.pagination.el;
        d = k(d);
        const p =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          u = t.params.loop
            ? Math.ceil(p / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((a = t.previousRealIndex || 0),
              (i =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
              ? ((i = t.snapIndex), (a = t.previousSnapIndex))
              : ((a = t.previousIndex || 0), (i = t.activeIndex || 0)),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const n = t.pagination.bullets;
          let o, p, u;
          if (
            (s.dynamicBullets &&
              ((l = P(n[0], t.isHorizontal() ? "width" : "height", !0)),
              d.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] =
                  l * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== a &&
                ((r += i - (a || 0)),
                r > s.dynamicMainBullets - 1
                  ? (r = s.dynamicMainBullets - 1)
                  : r < 0 && (r = 0)),
              (o = Math.max(i - r, 0)),
              (p = o + (Math.min(n.length, s.dynamicMainBullets) - 1)),
              (u = (p + o) / 2)),
            n.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e,
                )
                .flat();
              e.classList.remove(...t);
            }),
            d.length > 1)
          )
            n.forEach((e) => {
              const n = O(e);
              n === i
                ? e.classList.add(...s.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets &&
                  (n >= o &&
                    n <= p &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" "),
                    ),
                  n === o && c(e, "prev"),
                  n === p && c(e, "next"));
            });
          else {
            const e = n[i];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              t.isElement &&
                n.forEach((e, t) => {
                  e.setAttribute("part", t === i ? "bullet-active" : "bullet");
                }),
              s.dynamicBullets)
            ) {
              const e = n[o],
                t = n[p];
              for (let e = o; e <= p; e += 1)
                n[e] &&
                  n[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" "),
                  );
              c(e, "prev"), c(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(n.length, s.dynamicMainBullets + 4),
              a = (l * i - l) / 2 - u * l,
              r = e ? "right" : "left";
            n.forEach((e) => {
              e.style[t.isHorizontal() ? r : "top"] = `${a}px`;
            });
          }
        }
        d.forEach((e, a) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(ue(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(i + 1);
              }),
              e.querySelectorAll(ue(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(u);
              })),
            "progressbar" === s.type)
          ) {
            let n;
            n = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
                ? "horizontal"
                : "vertical";
            const a = (i + 1) / u;
            let l = 1,
              r = 1;
            "horizontal" === n ? (l = a) : (r = a),
              e.querySelectorAll(ue(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${r})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, i + 1, u)),
              0 === a && n("paginationRender", e))
            : (0 === a && n("paginationRender", e), n("paginationUpdate", e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.grid && t.params.grid.rows > 1
              ? t.slides.length / Math.ceil(t.params.grid.rows)
              : t.slides.length;
        let i = t.pagination.el;
        i = k(i);
        let a = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil(s / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (a += e.renderBullet.call(t, s, e.bulletClass))
              : (a += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (a = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
            (a = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          i.forEach((s) => {
            "custom" !== e.type && (s.innerHTML = a || ""),
              "bullets" === e.type &&
                t.pagination.bullets.push(
                  ...s.querySelectorAll(ue(e.bulletClass)),
                );
          }),
          "custom" !== e.type && n("paginationRender", i[0]);
      }
      function h() {
        t.params.pagination = de(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" },
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el &&
          t.isElement &&
          (s = t.el.querySelector(e.el)),
          s ||
            "string" != typeof e.el ||
            (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
            0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 &&
                (s = s.filter((e) => M(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = k(s)),
            s.forEach((s) => {
              "bullets" === e.type &&
                e.clickable &&
                s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (r = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", d),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function m() {
        const e = t.params.pagination;
        if (o()) return;
        let s = t.pagination.el;
        s &&
          ((s = k(s)),
          s.forEach((s) => {
            s.classList.remove(e.hiddenClass),
              s.classList.remove(e.modifierClass + e.type),
              s.classList.remove(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              ),
              e.clickable &&
                (s.classList.remove(...(e.clickableClass || "").split(" ")),
                s.removeEventListener("click", d));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(" ")),
            );
      }
      i("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = k(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              );
          });
      }),
        i("init", () => {
          !1 === t.params.pagination.enabled ? f() : (h(), u(), p());
        }),
        i("activeIndexChange", () => {
          void 0 === t.snapIndex && p();
        }),
        i("snapIndexChange", () => {
          p();
        }),
        i("snapGridLengthChange", () => {
          u(), p();
        }),
        i("destroy", () => {
          m();
        }),
        i("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = k(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? "remove" : "add"](
                t.params.pagination.lockClass,
              ),
            ));
        }),
        i("lock unlock", () => {
          p();
        }),
        i("click", (e, s) => {
          const i = s.target,
            a = k(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            a &&
            a.length > 0 &&
            !i.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = a[0].classList.contains(t.params.pagination.hiddenClass);
            n(!0 === e ? "paginationShow" : "paginationHide"),
              a.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass),
              );
          }
        });
      const f = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = k(e)),
          e.forEach((e) =>
            e.classList.add(t.params.pagination.paginationDisabledClass),
          )),
          m();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = k(e)),
            e.forEach((e) =>
              e.classList.remove(t.params.pagination.paginationDisabledClass),
            )),
            h(),
            u(),
            p();
        },
        disable: f,
        render: u,
        update: p,
        init: h,
        destroy: m,
      });
    }
    function me(e) {
      let t,
        s,
        { swiper: i, extendParams: n, on: a, emit: l, params: r } = e;
      (i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        n({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let o,
        c,
        d,
        p,
        u,
        h,
        m,
        g,
        v = r && r.autoplay ? r.autoplay.delay : 3e3,
        b = r && r.autoplay ? r.autoplay.delay : 3e3,
        y = new Date().getTime();
      function S(e) {
        i &&
          !i.destroyed &&
          i.wrapperEl &&
          e.target === i.wrapperEl &&
          (i.wrapperEl.removeEventListener("transitionend", S), g || _());
      }
      const w = () => {
          if (i.destroyed || !i.autoplay.running) return;
          i.autoplay.paused ? (c = !0) : c && ((b = o), (c = !1));
          const e = i.autoplay.paused ? o : y + b - new Date().getTime();
          (i.autoplay.timeLeft = e),
            l("autoplayTimeLeft", e, e / v),
            (s = requestAnimationFrame(() => {
              w();
            }));
        },
        E = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          cancelAnimationFrame(s), w();
          let n = void 0 === e ? i.params.autoplay.delay : e;
          (v = i.params.autoplay.delay), (b = i.params.autoplay.delay);
          const a = (() => {
            let e;
            if (
              ((e =
                i.virtual && i.params.virtual.enabled
                  ? i.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active"),
                    )[0]
                  : i.slides[i.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(a) &&
            a > 0 &&
            void 0 === e &&
            ((n = a), (v = a), (b = a)),
            (o = n);
          const r = i.params.speed,
            c = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(r, !0, !0), l("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                      (i.slideTo(i.slides.length - 1, r, !0, !0), l("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                    ? (i.slideNext(r, !0, !0), l("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                      (i.slideTo(0, r, !0, !0), l("autoplay")),
                i.params.cssMode &&
                  ((y = new Date().getTime()),
                  requestAnimationFrame(() => {
                    E();
                  })));
            };
          return (
            n > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  c();
                }, n)))
              : requestAnimationFrame(() => {
                  c();
                }),
            n
          );
        },
        T = () => {
          (y = new Date().getTime()),
            (i.autoplay.running = !0),
            E(),
            l("autoplayStart");
        },
        C = () => {
          (i.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            l("autoplayStop");
        },
        x = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          clearTimeout(t), e || (m = !0);
          const n = () => {
            l("autoplayPause"),
              i.params.autoplay.waitForTransition
                ? i.wrapperEl.addEventListener("transitionend", S)
                : _();
          };
          if (((i.autoplay.paused = !0), s))
            return h && (o = i.params.autoplay.delay), (h = !1), void n();
          const a = o || i.params.autoplay.delay;
          (o = a - (new Date().getTime() - y)),
            (i.isEnd && o < 0 && !i.params.loop) || (o < 0 && (o = 0), n());
        },
        _ = () => {
          (i.isEnd && o < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((y = new Date().getTime()),
            m ? ((m = !1), E(o)) : E(),
            (i.autoplay.paused = !1),
            l("autoplayResume"));
        },
        L = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = f();
          "hidden" === e.visibilityState && ((m = !0), x(!0)),
            "visible" === e.visibilityState && _();
        },
        A = (e) => {
          "mouse" === e.pointerType &&
            ((m = !0), (g = !0), i.animating || i.autoplay.paused || x(!0));
        },
        O = (e) => {
          "mouse" === e.pointerType && ((g = !1), i.autoplay.paused && _());
        };
      a("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter &&
            (i.el.addEventListener("pointerenter", A),
            i.el.addEventListener("pointerleave", O)),
          f().addEventListener("visibilitychange", L),
          T());
      }),
        a("destroy", () => {
          i.el.removeEventListener("pointerenter", A),
            i.el.removeEventListener("pointerleave", O),
            f().removeEventListener("visibilitychange", L),
            i.autoplay.running && C();
        }),
        a("_freeModeStaticRelease", () => {
          (p || m) && _();
        }),
        a("_freeModeNoMomentumRelease", () => {
          i.params.autoplay.disableOnInteraction ? C() : x(!0, !0);
        }),
        a("beforeTransitionStart", (e, t, s) => {
          !i.destroyed &&
            i.autoplay.running &&
            (s || !i.params.autoplay.disableOnInteraction ? x(!0, !0) : C());
        }),
        a("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? C()
              : ((d = !0),
                (p = !1),
                (m = !1),
                (u = setTimeout(() => {
                  (m = !0), (p = !0), x(!0);
                }, 200))));
        }),
        a("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && d) {
            if (
              (clearTimeout(u),
              clearTimeout(t),
              i.params.autoplay.disableOnInteraction)
            )
              return (p = !1), void (d = !1);
            p && i.params.cssMode && _(), (p = !1), (d = !1);
          }
        }),
        a("slideChange", () => {
          !i.destroyed && i.autoplay.running && (h = !0);
        }),
        Object.assign(i.autoplay, { start: T, stop: C, pause: x, resume: _ });
    }
    function fe() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)',
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    Object.keys(re).forEach((e) => {
      Object.keys(re[e]).forEach((t) => {
        ce.prototype[t] = re[e][t];
      });
    }),
      ce.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const n = v();
          let a = null,
            l = null;
          const r = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            o = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((a = new ResizeObserver((e) => {
                  l = n.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let n = s,
                      a = i;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: l } = e;
                      (l && l !== t.el) ||
                        ((n = i ? i.width : (s[0] || s).inlineSize),
                        (a = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (n === s && a === i) || r();
                  });
                })),
                a.observe(t.el))
              : (n.addEventListener("resize", r),
                n.addEventListener("orientationchange", o));
          }),
            s("destroy", () => {
              l && n.cancelAnimationFrame(l),
                a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
                n.removeEventListener("resize", r),
                n.removeEventListener("orientationchange", o);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: n } = e;
          const a = [],
            l = v(),
            r = function (e, s) {
              void 0 === s && (s = {});
              const i = new (l.MutationObserver || l.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const s = function () {
                    n("observerUpdate", e[0]);
                  };
                  l.requestAnimationFrame
                    ? l.requestAnimationFrame(s)
                    : l.setTimeout(s, 0);
                },
              );
              i.observe(e, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                a.push(i);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = M(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) r(e[t]);
                }
                r(t.hostEl, { childList: t.params.observeSlideChildren }),
                  r(t.wrapperEl, { attributes: !1 });
              }
            }),
            i("destroy", () => {
              a.forEach((e) => {
                e.disconnect();
              }),
                a.splice(0, a.length);
            });
        },
      ]);
    window.addEventListener("load", function (e) {
      fe(),
        document.querySelector(".promo__swiper") &&
          new ce(".promo__slider", {
            modules: [pe],
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 800,
            loop: !0,
            navigation: {
              nextEl: ".promo__slider-nav .slider-nav__btn_next",
              prevEl: ".promo__slider-nav .slider-nav__btn_prev",
            },
            on: {},
          }),
        document.querySelector(".bestsellers__swiper") &&
          new ce(".bestsellers__slider", {
            modules: [pe, he],
            speed: 800,
            loop: !0,
            pagination: { el: ".bestsellers__pagination", clickable: !0 },
            navigation: {
              nextEl: ".bestsellers__slider-nav .slider-nav__btn_next",
              prevEl: ".bestsellers__slider-nav .slider-nav__btn_prev",
            },
            breakpoints: {
              0: { slidesPerView: "auto", spaceBetween: 8, centeredSlides: !0 },
              768: {
                slidesPerView: "auto",
                spaceBetween: 20,
                centeredSlides: !1,
              },
              992: { slidesPerView: "auto", spaceBetween: 20 },
              1268: { slidesPerView: "auto", spaceBetween: 44 },
            },
            on: {},
          }),
        document.querySelector(".ps__swiper") &&
          new ce(".ps__slider", {
            modules: [me],
            autoplay: { delay: 6e3, disableOnInteraction: !1 },
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: !0,
            on: {},
          });
    });
    new (s(144))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    function ge(e) {
      this.type = e;
    }
    (ge.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this,
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          },
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          n = window.matchMedia(i[0]),
          a = i[1],
          l = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === a;
          });
        n.addListener(function () {
          e.mediaHandler(n, l);
        }),
          this.mediaHandler(n, l);
      }
    }),
      (ge.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (ge.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
              ? s.children[e].insertAdjacentElement("beforebegin", t)
              : s.insertAdjacentElement("afterbegin", t);
      }),
      (ge.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (ge.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (ge.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                    ? -1
                    : "last" === e.place || "first" === t.place
                      ? 1
                      : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                    ? 1
                    : "last" === e.place || "first" === t.place
                      ? -1
                      : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new ge("min").init();
    document.querySelector(".header").addEventListener("click", function (e) {
      let t = e.target,
        s = t.classList.contains("menu-item__item-title"),
        i = t.closest(".submenu-open");
      s && !i
        ? (!(function () {
            let e = document.querySelector(".submenu-open");
            e && e.classList.remove("submenu-open");
          })(),
          t.closest(".menu-item").classList.add("submenu-open"))
        : s && i && t.closest(".menu-item").classList.remove("submenu-open");
    });
    const ve = document.querySelector(".menu__open");
    ve &&
      ve.addEventListener("click", function (e) {
        o(), document.documentElement.classList.add("menu-open");
      });
    const be = document.querySelector(".menu__close");
    if (be) {
      be.addEventListener("click", function (e) {
        c();
      });
      let e = document.querySelector(".menu__body");
      e.addEventListener("click", function (t) {
        let s = t.target,
          i = s.classList.contains("menu__nav"),
          n = s.classList.contains("menu__list");
        !e || i || n || c();
      });
    }
    const ye = document.querySelector(".search-block__btn");
    ye &&
      ye.addEventListener("click", function (e) {
        document.documentElement.classList.toggle("search-open");
      });
    const Se = document.querySelector(".page");
    (Se.onmouseover = Se.onmouseout =
      function (e) {
        let t = e.target.closest(".product");
        t &&
          ("mouseover" == e.type
            ? t.classList.add("product_hover")
            : "mouseout" == e.type && t.classList.remove("product_hover"));
      }),
      (window.FLS = !0),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              p.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && p.validateInput(t));
          });
      })(),
      (function (t) {
        e.popup && e.popup.open("some");
        const s = document.forms;
        if (s.length)
          for (const e of s)
            e.addEventListener("submit", function (e) {
              i(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                p.formClean(t);
              });
        async function i(e, s) {
          if (0 === (t ? p.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              s.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                i = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                a = new FormData(e);
              e.classList.add("_sending");
              const l = await fetch(t, { method: i, body: a });
              if (l.ok) {
                await l.json();
                e.classList.remove("_sending"), n(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (s.preventDefault(), n(e));
          } else {
            s.preventDefault();
            const t = e.querySelector("._form-error");
            t &&
              e.hasAttribute("data-goto-error") &&
              ((e, t = !1, s = 500, i = 0) => {
                const n = "string" == typeof e ? document.querySelector(e) : e;
                if (n) {
                  let a = "",
                    l = 0;
                  t &&
                    ((a = "header.header"),
                    (l = document.querySelector(a).offsetHeight));
                  let r = {
                    speedAsDuration: !0,
                    speed: s,
                    header: a,
                    offset: i,
                    easing: "easeOutQuad",
                  };
                  if (
                    (document.documentElement.classList.contains("menu-open") &&
                      c(),
                    "undefined" != typeof SmoothScroll)
                  )
                    new SmoothScroll().animateScroll(n, "", r);
                  else {
                    let e = n.getBoundingClientRect().top + scrollY;
                    window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
                  }
                  d(`[gotoBlock]: Юхуу...едем к ${e}`);
                } else
                  d(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
              })(t, !0, 1e3);
          }
        }
        function n(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } }),
          ),
            setTimeout(() => {
              if (e.popup) {
                const s = t.dataset.popupMessage;
                s && e.popup.open(s);
              }
            }, 0),
            p.formClean(t),
            d(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = parseInt(t.closest(".quantity").querySelector("input").value);
          t.classList.contains("quantity__button_plus")
            ? e++
            : (--e, e < 1 && (e = 1)),
            (t.closest(".quantity").querySelector("input").value = e);
        }
      });
  })();
})();

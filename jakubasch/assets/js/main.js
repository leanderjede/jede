! function (e) {
    "use strict";
    if (e(window).on("load", (function () {
            e(".preloader").fadeOut(), e(".swiper-fade").addClass("fade-ani")
        })), e(".preloader").length > 0 && e(".preloaderCls").each((function () {
            e(this).on("click", (function (t) {
                t.preventDefault(), e(".preloader").css("display", "none")
            }))
        })), e.fn.thmobilemenu = function (t) {
            var a = e.extend({
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "menu-item-has-children",
                thSubMenuParent: "th-item-has-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                appendElement: '<span class="th-mean-expand"></span>',
                subMenuToggleClass: "th-open",
                toggleSpeed: 400
            }, t);
            return this.each((function () {
                var t = e(this);

                function n() {
                    t.toggleClass(a.bodyToggleClass);
                    var n = "." + a.subMenuClass;
                    e(n).each((function () {
                        e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(a.subMenuParentToggle))
                    }))
                }
                t.find("." + a.subMenuParent).each((function () {
                    var t = e(this).find("ul");
                    t.addClass(a.subMenuClass), t.css("display", "none"), e(this).addClass(a.subMenuParent), e(this).addClass(a.thSubMenuParent), e(this).children("a").append(a.appendElement)
                }));
                var s = "." + a.thSubMenuParent + " > a";
                e(s).each((function () {
                    e(this).on("click", (function (t) {
                        var n, s;
                        t.preventDefault(), n = e(this).parent(), (s = n.children("ul")).length > 0 && (n.toggleClass(a.subMenuParentToggle), s.slideToggle(a.toggleSpeed), s.toggleClass(a.subMenuToggleClass))
                    }))
                })), e(a.menuToggleBtn).each((function () {
                    e(this).on("click", (function () {
                        n()
                    }))
                })), t.on("click", (function (e) {
                    e.stopPropagation(), n()
                })), t.find("div").on("click", (function (e) {
                    e.stopPropagation()
                }))
            }))
        }, e(".th-menu-wrapper").thmobilemenu(), e(window).scroll((function () {
            e(this).scrollTop() > 500 ? (e(".sticky-wrapper").addClass("sticky"), e(".category-menu").addClass("close-category")) : (e(".sticky-wrapper").removeClass("sticky"), e(".category-menu").removeClass("close-category"))
        })), e(".scroll-top").length > 0) {
        var t = document.querySelector(".scroll-top"),
            a = document.querySelector(".scroll-top path"),
            n = a.getTotalLength();
        a.style.transition = a.style.WebkitTransition = "none", a.style.strokeDasharray = n + " " + n, a.style.strokeDashoffset = n, a.getBoundingClientRect(), a.style.transition = a.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var s = function () {
            var t = e(window).scrollTop(),
                s = e(document).height() - e(window).height(),
                i = n - t * n / s;
            a.style.strokeDashoffset = i
        };
        s(), e(window).scroll(s);
        jQuery(window).on("scroll", (function () {
            jQuery(this).scrollTop() > 50 ? jQuery(t).addClass("show") : jQuery(t).removeClass("show")
        })), jQuery(t).on("click", (function (e) {
            return e.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 750), !1
        }))
    }
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function () {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
    })), e("[data-border]").each((function () {
        var t = e(this).data("border");
        e(this).css("--th-border-color", t)
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).addClass("bg-mask"), e(this).removeAttr("data-mask-src")
    })), e(".th-slider").each((function () {
        var t = e(this),
            a = e(this).data("slider-options"),
            n = t.find(".slider-prev"),
            s = t.find(".slider-next"),
            i = t.find(".slider-pagination.pagi-number"),
            o = t.siblings(".slider-controller").find(".slider-pagination"),
            r = o.length ? o.get(0) : t.find(".slider-pagination").get(0),
            l = a.paginationType ? a.paginationType : "bullets",
            c = a.autoplay,
            d = {
                slidesPerView: 1,
                spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
                loop: 0 != a.loop,
                speed: a.speed ? a.speed : 1e3,
                autoplay: c || {
                    delay: 6e3,
                    disableOnInteraction: !1
                },
                navigation: {
                    nextEl: s.get(0),
                    prevEl: n.get(0)
                },
                pagination: {
                    el: r,
                    type: l,
                    clickable: !0,
                    renderBullet: function (e, t) {
                        var a = e + 1,
                            n = a < 10 ? "0" + a : a;
                        return i.length ? '<span class="' + t + ' number">' + n + "</span>" : '<span class="' + t + '" aria-label="Go to Slide ' + n + '"></span>'
                    },
                    formatFractionCurrent: function (e) {
                        return e < 10 ? "0" + e : e
                    },
                    formatFractionTotal: function (e) {
                        return e < 10 ? "0" + e : e
                    }
                },
                on: {
                    slideChange: function () {
                        setTimeout((function () {
                            p.params.mousewheel.releaseOnEdges = !1
                        }), 500)
                    },
                    reachEnd: function () {
                        setTimeout((function () {
                            p.params.mousewheel.releaseOnEdges = !0
                        }), 750)
                    }
                }
            },
            u = JSON.parse(t.attr("data-slider-options"));
        u = e.extend({}, d, u);
        var p = new Swiper(t.get(0), u);
        e(".slider-area").length > 0 && e(".slider-area").closest(".container").parent().addClass("arrow-wrap")
    })), e("[data-ani]").each((function () {
        var t = e(this).data("ani");
        e(this).addClass(t)
    })), e("[data-ani-delay]").each((function () {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-slider-prev], [data-slider-next]").on("click", (function () {
        var t = e(this).data("slider-prev") || e(this).data("slider-next"),
            a = e(t);
        if (a.length) {
            var n = a[0].swiper;
            n && (e(this).data("slider-prev") ? n.slidePrev() : n.slideNext())
        }
    })), e.fn.activateSliderThumbs = function (t) {
        var a = e.extend({
            sliderTab: !1,
            tabButton: ".tab-btn"
        }, t);
        return this.each((function () {
            var t = e(this),
                n = t.find(a.tabButton),
                s = e('<span class="indicator"></span>').appendTo(t),
                i = t.data("slider-tab"),
                o = e(i)[0].swiper;
            if (n.on("click", (function (t) {
                    t.preventDefault();
                    var n = e(this);
                    if (n.addClass("active").siblings().removeClass("active"), c(n), n.prevAll(a.tabButton).addClass("list-active"), n.nextAll(a.tabButton).removeClass("list-active"), a.sliderTab) {
                        var s = n.index();
                        o.slideTo(s)
                    }
                })), a.sliderTab) {
                o.on("slideChange", (function () {
                    var e = o.realIndex,
                        t = n.eq(e);
                    t.addClass("active").siblings().removeClass("active"), c(t), t.prevAll(a.tabButton).addClass("list-active"), t.nextAll(a.tabButton).removeClass("list-active")
                }));
                var r = o.activeIndex,
                    l = n.eq(r);
                l.addClass("active").siblings().removeClass("active"), c(l), l.prevAll(a.tabButton).addClass("list-active"), l.nextAll(a.tabButton).removeClass("list-active")
            }

            function c(e) {
                var t = e.position(),
                    a = parseInt(e.css("margin-top")) || 0,
                    n = parseInt(e.css("margin-left")) || 0;
                s.css("--height-set", e.outerHeight() + "px"), s.css("--width-set", e.outerWidth() + "px"), s.css("--pos-y", t.top + a + "px"), s.css("--pos-x", t.left + n + "px")
            }
        }))
    }, e(".testi-box-tab").length && e(".testi-box-tab").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    });
    var i = ".ajax-contact",
        o = '[name="email"]',
        r = e(".form-messages");

    function l() {
        var t = e(i).serialize();
        (function () {
            var t, a = !0;

            function n(n) {
                n = n.split(",");
                for (var s = 0; s < n.length; s++) t = i + " " + n[s], e(t).val() ? (e(t).removeClass("is-invalid"), a = !0) : (e(t).addClass("is-invalid"), a = !1)
            }
            n('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), e(o).val() && e(o).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(o).removeClass("is-invalid"), a = !0) : (e(o).addClass("is-invalid"), a = !1);
            return a
        })() && jQuery.ajax({
            url: e(i).attr("action"),
            data: t,
            type: "POST"
        }).done((function (t) {
            r.removeClass("error"), r.addClass("success"), r.text(t), e(i + ' input:not([type="submit"]),' + i + " textarea").val("")
        })).fail((function (e) {
            r.removeClass("success"), r.addClass("error"), "" !== e.responseText ? r.html(e.responseText) : r.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function c(t, a, n, s) {
        e(a).on("click", (function (a) {
            a.preventDefault(), e(t).addClass(s)
        })), e(t + " > div").on("click", (function (a) {
            a.stopPropagation(), e(t).addClass(s)
        })), e(n).on("click", (function (a) {
            a.preventDefault(), a.stopPropagation(), e(t).removeClass(s)
        }))
    }

    function d(e) {
        return parseInt(e, 10)
    }
    e(i).on("submit", (function (e) {
        e.preventDefault(), l()
    })), c(".popup-search-box", ".searchBoxToggler", ".searchClose", "show"), c(".sidemenu-cart", ".sideMenuToggler", ".sideMenuCls", "show"), c(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show"), e(".popup-image").magnificPopup({
        type: "image",
        mainClass: "mfp-zoom-in",
        removalDelay: 260,
        gallery: {
            enabled: !0
        }
    }), e(".popup-video").magnificPopup({
        type: "iframe"
    }), e(".popup-content").magnificPopup({
        type: "inline",
        midClick: !0
    }), e.fn.sectionPosition = function (t, a) {
        e(this).each((function () {
            var n, s, i, o, r, l = e(this);
            n = Math.floor(l.height() / 2), s = l.attr(t), i = l.attr(a), o = d(e(i).css("padding-top")), r = d(e(i).css("padding-bottom")), "top-half" === s ? (e(i).css("padding-bottom", r + n + "px"), l.css("margin-top", "-" + n + "px")) : "bottom-half" === s && (e(i).css("padding-top", o + n + "px"), l.css("margin-bottom", "-" + n + "px"))
        }))
    };
    if (e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function () {
            e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
        })), e(".filter-active").imagesLoaded((function () {
            var t = ".filter-active";
            if (e(t).length > 0) {
                var a = e(t).isotope({
                    itemSelector: ".filter-item",
                    filter: "*",
                    masonry: {
                        columnWidth: ".filter-item"
                    }
                });
                e(".filter-menu-active").on("click", "button", (function () {
                    var t = e(this).attr("data-filter");
                    a.isotope({
                        filter: t
                    })
                })), e(".filter-menu-active").on("click", "button", (function (t) {
                    t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
                }))
            }
            e(".load-more-btn").on("click", (function () {
                var a = e(this).find("i");
                a.addClass("fa-spin-pulse"), setTimeout((function () {
                    a.removeClass("fa-spin-pulse")
                }), 1e3);
                var n = e(this);
                setTimeout((function () {
                    var a = n.prev(".load-more-active");
                    0 === a.length && (a = n.closest(".container").find(".load-more-active")), a.find(".filter-item.d-none, .accordion-card.d-none").removeClass("d-none");
                    e(t).isotope({
                        filter: "*"
                    })
                }), 700)
            }))
        })), e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded((function () {
            var t = ".masonary-active, .woocommerce-Reviews .comment-list";
            e(t).length > 0 && e(t).isotope({
                itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
                filter: "*",
                masonry: {
                    columnWidth: 1
                }
            }), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function (a) {
                e(t).isotope({
                    filter: "*"
                })
            }))
        })), e(".counter-number").counterUp({
            delay: 10,
            time: 1e3
        }), e(".hover-item").hover((function () {
            e(this).addClass("item-active"), e(this).siblings().removeClass("item-active")
        })), e.fn.shapeMockup = function () {
            e(this).each((function () {
                var t = e(this),
                    a = t.data("top"),
                    n = t.data("right"),
                    s = t.data("bottom"),
                    i = t.data("left");
                t.css({
                    top: a,
                    right: n,
                    bottom: s,
                    left: i
                }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
            }))
        }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e(".progress-bar").waypoint((function () {
            e(".progress-bar").css({
                animation: "animate-positive 1.8s",
                opacity: "1"
            })
        }), {
            offset: "75%"
        }), e.fn.countdown = function () {
            e(this).each((function () {
                var t = e(this),
                    a = new Date(t.data("offer-date")).getTime();

                function n(e) {
                    return t.find(e)
                }
                var s = setInterval((function () {
                    var e = (new Date).getTime(),
                        i = a - e,
                        o = Math.floor(i / 864e5),
                        r = Math.floor(i % 864e5 / 36e5),
                        l = Math.floor(i % 36e5 / 6e4),
                        c = Math.floor(i % 6e4 / 1e3);
                    o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), l < 10 && (l = "0" + l), c < 10 && (c = "0" + c), i < 0 ? (clearInterval(s), t.addClass("expired"), t.find(".message").css("display", "block")) : (n(".day").html(o), n(".hour").html(r), n(".minute").html(l), n(".seconds").html(c))
                }), 1e3)
            }))
        }, e(".counter-list").length && e(".counter-list").countdown(), e(".hero-2").length > 0 && window.addEventListener("scroll", (function () {
            let t = window.scrollY;
            e(".line").css("width", "calc(var(--size) - " + .1 * t + "px)")
        })), e(".tilt-active").tilt({
            maxTilt: 15,
            perspective: 1e3
        }), e(".overlay-direction").length > 0 && window.innerWidth > 767) {
        const e = [].slice.call(document.querySelectorAll(".overlay-direction .filter-item"), 0),
            t = {
                0: "top",
                1: "right",
                2: "bottom",
                3: "left"
            },
            a = ["in", "out"].map(e => Object.values(t).map(t => `${e}-${t}`)).reduce((e, t) => e.concat(t)),
            n = (e, t) => {
                const {
                    width: a,
                    height: n,
                    top: s,
                    left: i
                } = t.getBoundingClientRect(), o = e.pageX - (i + window.pageXOffset) - a / 2 * (a > n ? n / a : 1), r = e.pageY - (s + window.pageYOffset) - n / 2 * (n > a ? a / n : 1);
                return Math.round(Math.atan2(r, o) / 1.57079633 + 5) % 4
            };
        class s {
            constructor(e) {
                this.element = e, this.element.addEventListener("mouseover", e => this.update(e, "in")), this.element.addEventListener("mouseout", e => this.update(e, "out"))
            }
            update(e, s) {
                this.element.classList.remove(...a), this.element.classList.add(`${s}-${t[n(e,this.element)]}`)
            }
        }
        e.forEach(e => new s(e))
    }
    e.fn.indicator = function () {
        e(this).each((function () {
            var t = e(this),
                a = t.find("a"),
                n = t.find("button");
            t.append('<span class="indicator"></span>');
            var s, i = t.find(".indicator");

            function o() {
                var a = t.find(".active"),
                    n = a.css("height"),
                    s = a.css("width"),
                    o = a.position().top + "px",
                    r = a.position().left + "px";
                e(window).on("resize", (function () {
                    o = a.position().top + "px", r = a.position().left + "px"
                })), i.get(0).style.setProperty("--height-set", n), i.get(0).style.setProperty("--width-set", s), i.get(0).style.setProperty("--pos-y", o), i.get(0).style.setProperty("--pos-x", r)
            }
            a.length ? s = a : n.length && (s = n), s.on("click", (function (t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active"), o()
            })), o(), e(window).on("resize", (function () {
                o()
            }))
        }))
    }, e(".indicator-active").length && e(".indicator-active").indicator(), e("#compslider").on("input change", t => {
        const a = t.target.value;
        e(".foreground-img").css("width", a + "%"), e(".slider-button").css("left", `calc(${a}% - 32px)`)
    }), e(".color-switch-btns button").each((function () {
        const t = e(this),
            a = t.data("color");
        t.css("--theme-color", a), t.on("click", (function () {
            const t = e(this).data("color");
            e(":root").css("--theme-color", t)
        }))
    })), e("#thcolorpicker").on("input", (function () {
        const t = e(this).val();
        var a;
        a = t, e(":root").css("--theme-color", a)
    })), e(document).on("click", ".switchIcon", (function () {
        e(".color-scheme").toggleClass("active")
    })), e("#ship-to-different-address-checkbox").on("change", (function () {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function (t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function (t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function (t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function () {
        e(this).on("change", (function () {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e(".quantity-plus").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                n = parseInt(a.val(), 10);
            isNaN(n) || a.val(n + 1)
        }))
    })), e(".quantity-minus").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                n = parseInt(a.val(), 10);
            !isNaN(n) && n > 1 && a.val(n - 1)
        }))
    })), window.addEventListener("contextmenu", (function (e) {
        e.preventDefault()
    }), !1), document.onkeydown = function (e) {
        return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))))
    }
}(jQuery);
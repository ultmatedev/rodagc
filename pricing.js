$(document).ready(function() {
    function e(e, t) {
        return RTB.API.kissmetrics.replace("{email}", KM.i()).replace("{event}", e).replace("{property}", $.param({
            property: t
        }))
    }
    function t(e, t) {
        e ? $.get(e, function() {
            t.parents("form").trigger("submit")
        }) : t.parents("form").trigger("submit")
    }
    function i() {
        common.modal.open({
            content: $("#modal-window").html(),
            onShow: function(e) {
                var t = $("form", e.data)
                  , i = $("#modal-window-name", e.data)
                  , a = $(".error", e.data)
                  , n = $(".ui-button-container-v3", e.data);
                $("select", e.data).styler(),
                n.click(function() {
                    i.val().length > 60 ? a.show() : t.submit()
                }),
                i.focus(function() {
                    a.hide()
                })
            }
        })
    }
    function a() {
        common.modal.open({
            content: $("#modal-company-license-form").html(),
            onShow: function(e) {
                var t = $(".form-1__form", e.data)
                  , i = $(".form-1__button", e.data)
                  , a = $(".form-1__input", e.data).not(".form-1__input--textarea")
                  , n = $('input[type="text"], input[type="hidden"], textarea', e.data)
                  , s = $(".form-1__container", e.data)
                  , l = $(".form-1__success", e.data)
                  , o = $(".form-1__fail", e.data)
                  , c = $("#first_name", e.data)
                  , r = $("#last_name", e.data)
                  , d = $("#name", e.data)
                  , m = t.find('input[name="lead_source"]').val()
                  , _ = !1;
                i.on("click", function(e) {
                    var t, i = {}, p = a.each(function() {
                        var e = $(this);
                        e.val() ? e.removeClass("form-1__input--error") : e.addClass("form-1__input--error")
                    }).filter(".form-1__input--error").first().focus();
                    e.preventDefault(),
                    -1 !== d.val().indexOf(" ") ? (r.val(d.val().substring(d.val().indexOf(" ") + 1, d.val().length)),
                    c.val(d.val().substring(0, d.val().indexOf(" ")))) : (r.val(" "),
                    c.val(d.val())),
                    0 == p.length && (_ || (_ = !0,
                    i = n.serialize(),
                    t = $.ajax({
                        url: "/salesforce/leads/",
                        method: "POST",
                        data: i,
                        crossDomain: !0,
                        withCredentials: !0
                    }),
                    t.always(function() {
                        _ = !1,
                        s.addClass("form-1__container--hidden")
                    }).done(function() {
                        l.removeClass("form-1__success--hidden"),
                        "undefined" != typeof _kmq && _kmq.push(["record", "copmany_form_submission", {
                            lead_source: m
                        }]),
                        ga("send", "event", "copmany_form_submission", m)
                    }).fail(function() {
                        o.removeClass("form-1__fail--hidden")
                    })))
                })
            }
        })
    }
    function n(e) {
        var e = {
            container: e.container,
            text: e.text,
            displayClass: e.displayClass,
            fadeInClass: e.fadeInClass
        };
        $(e.container).each(function() {
            var t = $(this)
              , i = $(this).find(e.text);
            isMobile.phone || isMobile.tablet ? t.on("click", function() {
                $(e.container).not(t).find(e.text).removeClass(e.displayClass + " " + e.fadeInClass),
                i.hasClass(e.displayClass) ? i.removeClass(e.displayClass + " " + e.fadeInClass) : (i.addClass(e.displayClass),
                setTimeout(function() {
                    i.addClass(e.fadeInClass)
                }, 50))
            }) : t.hover(function() {
                i.addClass(e.displayClass),
                setTimeout(function() {
                    i.addClass(e.fadeInClass)
                }, 50)
            }, function() {
                i.removeClass(e.displayClass + " " + e.fadeInClass)
            })
        })
    }
    var s = ($("body"),
    $(window))
      , l = $(".features.main")
      , o = $(".features-wrapper");
    if (l.length && o.length) {
        var c = $(".features:first thead").offset().top;
        s.scroll(function() {
            s.scrollTop() - 70 >= l.offset().top && s.scrollTop() + 280 <= l.offset().top + l.height() ? o.removeClass("hidden") : o.addClass("hidden")
        }),
        $("#anchor-top").click(function() {
            $("html, body").animate({
                scrollTop: c
            }, "slow")
        }),
        $("#anchor-bottom").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        })
    }
    var r = window.KM_CURRENT_PAGE || "pricing";
    $(".premium-buy-button").click(function() {
        var i = $(this);
        try {
            t(e("get pro", {
                get_pro_from: r
            }), i)
        } catch (e) {
            t(null, i)
        }
    }),
    $(".team-trialing-button").click(function() {
        var i = $(this);
        try {
            t(e("get team", {
                get_team_from: r
            }), i)
        } catch (e) {
            t(null, i)
        }
    }),
    $(".team-trial-available-button").click(function() {
        try {
            $.get(e("get team trial", {
                get_team_from: r
            }), function() {
                i()
            })
        } catch (e) {
            i()
        }
    }),
    $(".get-company-license-btn").click(function(t) {
        t.preventDefault();
        try {
            $.get(e("open company license form", {
                get_team_from: r
            }), function() {
                a()
            })
        } catch (t) {
            a()
        }
    }),
    $(".team-buy-button").click(function() {
        try {
            $.get(e("get team", {
                get_team_from: r
            }), function() {
                i()
            })
        } catch (e) {
            i()
        }
    }),
    n({
        container: ".compare__icon",
        text: ".compare__item-tip",
        displayClass: "compare__item-tip--display",
        fadeInClass: "compare__item-tip--fade-in"
    }),
    n({
        container: ".mobile-license__compare-icon",
        text: ".mobile-license__compare-item-tip",
        displayClass: "mobile-license__compare-item-tip--display",
        fadeInClass: "mobile-license__compare-item-tip--fade-in"
    }),
    function() {
        var e = $(".license-switch__dropdown-list");
        e.each(function() {
            $(".license-switch__dropdown-list-item").on("click", function() {
                var e = $(this)
                  , t = e.data("value")
                  , i = e.text();
                $(".license-switch__item-tip.license-switch__item-tip--monthly").text(1 * t),
                $(".license-switch__item-tip.license-switch__item-tip--annually").text(1 * t),
                $(".amount.license-switch__item.license-switch__item--monthly").text(1 * t),
                $(".amount.license-switch__item.license-switch__item--annually").text(1 * t),
                $(".mobile-license__price-item.mobile-license__price-item--monthly").text(1 * t),
                $(".mobile-license__price.mobile-license__price--annually").text(1 * t),
                $(".license-switch__dropdown-btn").text(i),
                $('.snippets-members select[name="quantity"] option').removeAttr("selected").filter('option[value="' + t + '"]').attr("selected", "selected"),
                $('input[name="quantity"]').val(t)
            })
        })
    }(),
    function(e) {
        var e = {
            container: e.container,
            btn: e.btn,
            btnActiveClass: e.btnActiveClass,
            target: e.target,
            targetDisplayClass: e.targetDisplayClass,
            targetFadeInClass: e.targetFadeInClass
        };
        $(e.container).each(function() {
            var t = $(this).find(e.btn)
              , i = $(this).find(e.target);
            t.on("click", function(a) {
                a.stopPropagation(),
                t.hasClass(e.btnActiveClass) ? (t.removeClass(e.btnActiveClass),
                i.removeClass(e.targetDisplayClass + " " + e.targetFadeInClass)) : (t.addClass(e.btnActiveClass),
                i.addClass(e.targetDisplayClass),
                setTimeout(function() {
                    i.addClass(e.targetFadeInClass)
                }, 50))
            }),
            i.on("click", function(t) {
                t.stopPropagation(),
                $(e.btn).removeClass(e.btnActiveClass),
                $(e.target).removeClass(e.targetDisplayClass + " " + e.targetFadeInClass)
            })
        }),
        $("html").on("click", function() {
            $(e.btn).removeClass(e.btnActiveClass),
            $(e.target).removeClass(e.targetDisplayClass + " " + e.targetFadeInClass)
        })
    }({
        container: ".license-switch__dropdown",
        btn: ".license-switch__dropdown-btn",
        btnActiveClass: "license-switch__dropdown-btn--active",
        target: ".license-switch__dropdown-list",
        targetDisplayClass: "license-switch__dropdown-list--display",
        targetFadeInClass: "license-switch__dropdown-list--fade-in"
    });
    var d = $(".license-switch__btn");
    d.on("click", function() {
        var e = $(this)
          , t = e.data("type")
          , i = {
            monthly: "{% plan_type %}_monthly",
            annually: "{% plan_type %}_yearly"
        };
        $('input[name="planId"]').each(function() {
            var e = $(this)
              , a = e.parent().find('input[name="planType"]').val();
            e.val(i[t].replace(/{% plan_type %}/g, a))
        }),
        d.removeClass("license-switch__btn--active").filter(e).addClass("license-switch__btn--active"),
        $(".license-switch__item").addClass("license-switch__item--disabled").filter(".license-switch__item--" + t).removeClass("license-switch__item--disabled"),
        $(".license-switch__btn-tip").addClass("license-switch__btn-tip--hidden").filter(".license-switch__btn-tip--" + t).removeClass("license-switch__btn-tip--hidden"),
        $(".mobile-license__price-item").addClass("mobile-license__price-item--disabled").filter(".mobile-license__price-item--" + t).removeClass("mobile-license__price-item--disabled"),
        $(".mobile-license__price-description-item").addClass("mobile-license__price-description-item--hidden").filter(".mobile-license__price-description-item--" + t).removeClass("mobile-license__price-description-item--hidden")
    }),
    $(".license-switch__btn-tip.license-switch__btn-tip--monthly").on("click", function() {
        d.eq(1).trigger("click")
    }),
    "undefined" != typeof fbq && fbq("track", "Lead")
});

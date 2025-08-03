var a = $("body").width();

function setButtonURL() {
	$zopim.livechat.window.show()
}
a <= 768 && ($(".btn-packages").attr("href", "tel:+923352223715"), console.log("ne" + a)), (new WOW).init(), $(document).ready(function() {
		jQuery(window).on("load", function() {}), jQuery(".eggoffer").click(function() {
			jQuery(".mypopup-wrap").css("top", "0px"), jQuery(".overlay-bg").addClass("vis")
		}), jQuery(".closebutton").click(function() {
			jQuery(".mypopup-wrap").css("top", "-20000px"), jQuery(".overlay-bg").removeClass("vis")
		})
	}), $(".eggoffer").click(function() {
		$(".mypopup-wrap").toggle()
	}), $(".closebutton").click(function() {
		$(".mypopup-wrap").hide()
	}), $(document).scroll(function() {
		"use strict";
		var e = $(this).scrollTop();
		e > 200 ? $(".sticky-container").fadeIn() : $(".sticky-container").fadeOut(), e > 5 ? $(".header-main").addClass("stick") : $(".header-main").removeClass("stick"), e > 500 ? ($(".floating_wrap").addClass("visible"), $(".floatbutton").addClass("visible")) : ($(".floating_wrap").removeClass("visible"), $(".floatbutton").removeClass("visible")), e >= 150 ? $(".gototop").fadeIn() : $(".gototop").fadeOut()
	}), $("[data-parallaxit]").each(function() {
		var e = $(this),
			t = $(this).data("parallax-value");
		$(window).mousemove(function(s) {
			var i = $(this),
				o = s.pageX - $(this).offset().left,
				n = s.pageY - $(this).offset().top;
			e.css({
				left: (o - i.width() / 2) / i.width() * t,
				top: (n - i.height() / 2) / i.height() * t
			})
		})
	}), $(document).ready(function() {
		"use strict";
		$(".timer").each(function() {
			$(this).prop("Counter", 0).animate({
				Counter: $(this).text()
			}, {
				duration: 4e3,
				easing: "swing",
				step: function(e) {
					$(this).text(Math.ceil(e))
				}
			})
		}), $(document).on("click", ".ys-container", function() {
			1 != $(event.target).closest(".ys-popup-content").length && ($(".ys-layer").removeClass("visible"), $(".ys-container").removeClass("visible"), $(".ys-container").removeClass("finished"))
		}), $("[data-targetit]").on("click", function() {
			$(this).siblings().removeClass("current"), $(this).addClass("current");
			var e = $(this).data("targetit");
			$("." + e).siblings('[class^="tabs"]').removeClass("current"), $("." + e).addClass("current")
		}), $(document).on("click", ".gototop", function() {
			$("html, body").animate({
				scrollTop: $(".header-main").offset().top
			}, 2e3)
		}), $(".callusnow").click(function() {
			$(".book-call-ys-layer").fadeIn(), $(".book-call-ys-container").fadeIn(), $(".book-call-ys-popup-content").fadeIn()
		}), $(".book-callbtn").click(function() {
			$(".book-call-ys-layer").fadeIn(), $(".book-call-ys-container").fadeIn(), $(".book-call-ys-popup-content").fadeIn()
		}), $(".book-call-ys-popup-close").click(function() {
			$(".book-call-ys-layer").fadeOut(), $(".book-call-ys-container").fadeOut(), $(".book-call-ys-popup-content").fadeOut()
		}), $(".mobile-nav-btn").click(function() {
			$(".mobile-nav-btn, .mobile-nav, .app-container").toggleClass("active")
		}), $(".firstlevel li a").click(function() {
			$(this).hasClass("active") ? ($(this).removeClass("active"), $(this).siblings("ul").slideUp()) : ($(".firstlevel li a").removeClass("active"), $(this).addClass("active"), $(".dropdown").slideUp(), $(this).siblings("ul").slideDown())
		}), $(".mainnav > li > a").click(function() {
			$(this).hasClass("active") ? ($(this).removeClass("active"), $(this).parents("li").children(".firstlevel").slideUp()) : ($(this).addClass("active"), $(this).parents("li").children(".firstlevel").slideDown(), $(this).parents("li").siblings("li").children("a").removeClass("active"), $(this).parents("li").siblings("li").children(".firstlevel").slideUp())
		}), $(".banslidee").slick({
			dots: !1,
			infinite: !0,
			speed: 100,
			arrows: !0,
			fade: !0,
			autoplay: !0,
			speed: 1e3,
			cssEase: "linear"
		}), $(".mslider").slick({
			dots: !1,
			infinite: !0,
			speed: 100,
			arrows: !1,
			slidesToScroll: 1,
			slidesToShow: 5,
			autoplay: !0,
			autoplaySpeed: 2e3,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: !0,
					arrows: !1,
					dots: !1
				}
			}]
		}), $(".lptesti").slick({
			dots: !1,
			infinite: !0,
			speed: 100,
			arrows: !0,
			slidesToScroll: 1,
			slidesToShow: 3,
			autoplay: !0,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: !0,
					arrows: !1,
					dots: !0
				}
			}]
		}), $(window).width() < 767 && $(".count-slider-for-mobile").slick({
			arrows: !1,
			dots: !1,
			autoplay: !0,
			slidesToScroll: 1,
			slidesToShow: 1,
			autoplaySpeed: 2e3
		}), $(".testslider").slick({
			infinite: false,
			slidesToShow: 2,
			arrows: !0,
			dots: !1,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: !1,
					dots: !0
				}
			}]
		}), $(".web-design-portfolio-slider").slick({
			dots: !0,
			arrows: !1,
			infinite: !0,
			speed: 100,
			slidesToShow: 1,
			adaptiveHeight: !0,
			autoplay: !0,
			autoplaySpeed: 4e3,
			lazyLoad: "ondemand"
		}), $(".coslider").slick({
			arrows: !1,
			dots: !1,
			autoplay: !0,
			vertical: !0,
			autoplaySpeed: 3e3
		}), $(function() {
			function e() {
				$("").slick({
					infinite: !1,
					slidesToShow: 3,
					arrows: !0,
					dots: !1,
					slidesToScroll: 1,
					responsive: [{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: !1,
							dots: !0
						}
					}]
				}), $(".web-design-portfolio-slider").slick("setPosition")
			}
			e(), $(".web-design-portfolio-slider-mobile").slick({
				infinite: !1,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: !1,
				autoplay: !0,
				autoplaySpeed: 2e3
			}), $('a[data-toggle="pill"]').on("shown.bs.tab", function(t) {
				e(), $(".portfoliolist, .count-slider-for-mobile, .web-design-portfolio-slider-mobile").slick("setPosition")
			})
		}), $("[data-targetit]").on("click", function() {
			$(this).siblings().removeClass("current"), $(this).addClass("current");
			var e = $(this).data("targetit");
			$("." + e).siblings('[class^="tabs"]').removeClass("current"), $("." + e).addClass("current"), $(".slick-slider").slick("setPosition", 0)
		});
		var e = decodeURIComponent((new RegExp("[?|&]" + "pack" + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;

		function t() {
			jQuery(".accordion .quest-title").removeClass("active"), jQuery(".accordion .quest-content").slideUp(300).removeClass("open")
		}
		let s;
		$("#packages option:eq(" + e + ")").prop("selected", !0), $(".tab-custom .tab-custom-nav a").click(function(e) {
			$(this).closest("li").siblings("li").children("a").removeClass("current"), $(this).addClass("current"), $(this).closest(".tab-custom").children("div.tab-content-panel:not(:hidden)").hide(), $(this.hash).show(), e.preventDefault(), $(".sliderxs").slick("setPosition")
		}), $(".tabs-custom-nav a").click(function(e) {
			$(this).closest("li").siblings("li").children("a").removeClass("current"), $(this).addClass("current"), $(this.hash).closest(".general").children("div.tab-content-panel:not(:hidden)").hide(), $(this.hash).show(), e.preventDefault(), $(".sliderxs").slick("setPosition")
		}), $(".accordion .quest-title.active1").addClass("active"), jQuery(".quest-title").click(function(e) {
			var s = jQuery(this).attr("href");
			jQuery(e.target).is(".active") ? t() : (t(), jQuery(this).addClass("active"), jQuery(".accordion " + s).slideDown(300).addClass("open")), e.preventDefault()
		}), $('[data-fancybox="swf-file"]').fancybox({
			iframe: {
				css: {
					width: "336px",
					height: "280px"
				}
			}
		}), $('[data-fancybox="video-file"]').fancybox({
			iframe: {
				css: {
					width: "580px",
					height: "340px"
				}
			}
		}), $("#phone-country,#phone-coun").intlTelInput({
			geoIpLookup: function(e) {
				$.get("https://ipinfo.io", function() {}, "jsonp").always(function(t) {
					var i = t && t.country ? t.country : "";
					e(i), s = t.ip
				})
			},
			initialCountry: "auto",
			nationalMode: !0,
			separateDialCode: !0
		}), setTimeout(function() {
			console.log(s), $('input[name="pc"]').val($(".selected-dial-code").text()), $('input[name="cip"]').val(s), console.log(s), $('input[name="ctry"]').val($(".country-list .country.active .country-name").text())
		}, 3e3), $("body").delegate(".country", "click", function() {
			$('input[name="pc"]').val($(this).find(".dial-code").text());
			var e = $(".selected-flag").attr("title").toUpperCase().split(":", 1)[0];
			$('input[name="ctry"]').val(e)
		})
	}), $("#banform").validate({
		rules: {
			username: {
				required: !0,
				minlength: 2
			},
			email: {
				required: !0,
				email: !0
			},
			agree: "required"
		},
		messages: {
			username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			},
			email: "Please enter a valid email address"
		}
	}), $("#contactForm").validate(), $(function() {
		"use strict";
		var e = (new Date).getFullYear();
		$("#year").html(e)
	}), $(function() {
		$.mCustomScrollbar.defaults.theme = "light-1", $(".list-scroll,.subscription-list").mCustomScrollbar({
			scrollButtons: {
				enable: !0
			},
			callbacks: {
				onTotalScroll: function() {
					addContent(this)
				},
				onTotalScrollOffset: 100,
				alwaysTriggerOffsets: !1
			}
		})
	}), $(document).ready(function() {
		$(".clickbutton").click(function() {
			$(".floatbutton").toggleClass("active"), $(".crossplus").toggleClass("rotate")
		}), $(".topformswitch").click(function() {
			$(".topformwrap").toggleClass("active")
		})
	}), $(".smth-scrl").click(function() {
		$(this).attr("data-nav");
		$("html, body").animate({
			scrollTop: $("#btm-frm").offset().top
		}, 2e3)
	}), $(".sldrtstmnl").slick({
		dots: !1,
		arrows: !0,
		centerMode: !0,
		centerPadding: "120px 0 0",
		speed: 1e3,
		slidesToShow: 1,
		autoplay: !0,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 767,
			settings: {
				dots: !0,
				arrows: !1,
				centerMode: !1,
				autoplay: !0
			}
		}]
	}),
	function(e) {
		"use strict";
		window.ysExit = function(e) {
			var t = {
					width: "40%",
					height: "",
					target: "#ys-container",
					cookieValidity: 1,
					closeOnOutsideClick: !0,
					delay: 0,
					debug: !1
				},
				s = function(e) {
					var s = {};
					return Object.keys(t).forEach(function(i) {
						s[i] = e.hasOwnProperty(i) ? e[i] : t[i]
					}), s
				}(e),
				i = document.querySelector(s.target),
				o = document.querySelector(".ys-layer"),
				n = document.querySelector(s.target + " .ys-popup-close"),
				a = document.querySelector(s.target + " .ys-box"),
				l = document.querySelector(s.target + " .ys-exit"),
				c = function(e, t, s) {
					var i = [e + "=" + t];
					if(s) {
						var o = new Date;
						o.setTime(o.getTime() + 24 * s * 3600 * 1e3), i.push("expires=" + o.toGMTString())
					}
					i.push("path=/"), document.cookie = i.join("; ")
				},
				r = {
					active: !1,
					mouseLeftWindow: function(e) {
						var t;
						(t = (e = e || window.event).relatedTarget || e.toElement) && "HTML" !== t.nodeName || r.open()
					},
					setDimension: function(e, t) {
						-1 === t.toString().indexOf("%") && (t += "px"), a.style[e] = t
					},
					attachEvents: function() {
						function e(e) {
							r.destroy(), e.preventDefault()
						}
						document.addEventListener("mouseout", r.mouseLeftWindow, !1), n.addEventListener("click", e), l.addEventListener("click", e), s.closeOnOutsideClick && (i.addEventListener("click", e), a.addEventListener("click", function(e) {
							e.stopPropagation()
						})), this.active = !0
					},
					detachEvents: function() {
						document.removeEventListener("mouseout", r.mouseLeftWindow)
					},
					open: function() {
						var e = this;
						i.classList.add("visible"), o.classList.add("visible"), e.detachEvents(), setTimeout(function() {
							e.setDimension("width", s.width), e.setDimension("height", s.height)
						}, 20), setTimeout(function() {
							i.classList.add("finished")
						}, 200)
					},
					destroy: function() {
						this.active && (r.detachEvents(), setTimeout(function() {
							i.parentNode.removeChild(i), o.classList.remove("visible")
						}, 200), s.debug || c("ysExit", 1, s.cookieValidity))
					}
				};

			function d(e, t) {
				return function() {
					t.apply(e, arguments)
				}
			}
			return {
				open: d(r, r.open),
				destroy: d(r, r.destroy),
				getElement: function() {
					return i
				}
			}
		}
	}();
//======================
$('.home-ban-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	infinite: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000
});
$('.ser-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 2,
	arrows: false,
	infinite: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
$('.single-item').slick({
	dots: false,
	infinite: true,
	speed: 500,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	draggable: false,
});
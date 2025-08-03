! function(t, e) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if(!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(C, t) {
	"use strict";

	function g(t) {
		return null != t && t === t.window
	}
	var e = [],
		S = C.document,
		n = Object.getPrototypeOf,
		a = e.slice,
		m = e.concat,
		l = e.push,
		o = e.indexOf,
		i = {},
		s = i.toString,
		v = i.hasOwnProperty,
		r = v.toString,
		c = r.call(Object),
		y = {},
		b = function(t) {
			return "function" == typeof t && "number" != typeof t.nodeType
		},
		u = {
			type: !0,
			src: !0,
			noModule: !0
		};

	function w(t, e, n) {
		var i, o = (e = e || S).createElement("script");
		if(o.text = t, n)
			for(i in u) n[i] && (o[i] = n[i]);
		e.head.appendChild(o).parentNode.removeChild(o)
	}

	function f(t) {
		return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[s.call(t)] || "object" : typeof t
	}
	var _ = function(t, e) {
			return new _.fn.init(t, e)
		},
		d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	function h(t) {
		var e = !!t && "length" in t && t.length,
			n = f(t);
		return !b(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
	}
	_.fn = _.prototype = {
		jquery: "3.3.1",
		constructor: _,
		length: 0,
		toArray: function() {
			return a.call(this)
		},
		get: function(t) {
			return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
		},
		pushStack: function(t) {
			t = _.merge(this.constructor(), t);
			return t.prevObject = this, t
		},
		each: function(t) {
			return _.each(this, t)
		},
		map: function(n) {
			return this.pushStack(_.map(this, function(t, e) {
				return n.call(t, e, t)
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
				t = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= t && t < e ? [this[t]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: l,
		sort: e.sort,
		splice: e.splice
	}, _.extend = _.fn.extend = function() {
		var t, e, n, i, o, s = arguments[0] || {},
			r = 1,
			a = arguments.length,
			l = !1;
		for("boolean" == typeof s && (l = s, s = arguments[r] || {}, r++), "object" == typeof s || b(s) || (s = {}), r === a && (s = this, r--); r < a; r++)
			if(null != (t = arguments[r]))
				for(e in t) o = s[e], s !== (n = t[e]) && (l && n && (_.isPlainObject(n) || (i = Array.isArray(n))) ? (o = i ? (i = !1, o && Array.isArray(o) ? o : []) : o && _.isPlainObject(o) ? o : {}, s[e] = _.extend(l, o, n)) : void 0 !== n && (s[e] = n));
		return s
	}, _.extend({
		expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isPlainObject: function(t) {
			return !(!t || "[object Object]" !== s.call(t) || (t = n(t)) && ("function" != typeof(t = v.call(t, "constructor") && t.constructor) || r.call(t) !== c))
		},
		isEmptyObject: function(t) {
			for(var e in t) return !1;
			return !0
		},
		globalEval: function(t) {
			w(t)
		},
		each: function(t, e) {
			var n, i = 0;
			if(h(t))
				for(n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
			else
				for(i in t)
					if(!1 === e.call(t[i], i, t[i])) break; return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(d, "")
		},
		makeArray: function(t, e) {
			e = e || [];
			return null != t && (h(Object(t)) ? _.merge(e, "string" == typeof t ? [t] : t) : l.call(e, t)), e
		},
		inArray: function(t, e, n) {
			return null == e ? -1 : o.call(e, t, n)
		},
		merge: function(t, e) {
			for(var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
			return t.length = o, t
		},
		grep: function(t, e, n) {
			for(var i = [], o = 0, s = t.length, r = !n; o < s; o++) !e(t[o], o) != r && i.push(t[o]);
			return i
		},
		map: function(t, e, n) {
			var i, o, s = 0,
				r = [];
			if(h(t))
				for(i = t.length; s < i; s++) null != (o = e(t[s], s, n)) && r.push(o);
			else
				for(s in t) null != (o = e(t[s], s, n)) && r.push(o);
			return m.apply([], r)
		},
		guid: 1,
		support: y
	}), "function" == typeof Symbol && (_.fn[Symbol.iterator] = e[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
		i["[object " + e + "]"] = e.toLowerCase()
	});
	var p = function(n) {
		function d(t, e, n) {
			var i = "0x" + e - 65536;
			return i != i || n ? e : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
		}

		function i() {
			C()
		}
		var t, p, w, s, o, f, h, g, x, l, c, C, S, r, _, m, a, u, v, T = "sizzle" + +new Date,
			y = n.document,
			k = 0,
			b = 0,
			E = rt(),
			A = rt(),
			I = rt(),
			D = function(t, e) {
				return t === e && (c = !0), 0
			},
			$ = {}.hasOwnProperty,
			e = [],
			P = e.pop,
			L = e.push,
			N = e.push,
			O = e.slice,
			M = function(t, e) {
				for(var n = 0, i = t.length; n < i; n++)
					if(t[n] === e) return n;
				return -1
			},
			j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			H = "[\\x20\\t\\r\\n\\f]",
			B = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			R = "\\[" + H + "*(" + B + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + H + "*\\]",
			F = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
			q = new RegExp(H + "+", "g"),
			z = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
			W = new RegExp("^" + H + "*," + H + "*"),
			U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
			Y = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
			X = new RegExp(F),
			V = new RegExp("^" + B + "$"),
			K = {
				ID: new RegExp("^#(" + B + ")"),
				CLASS: new RegExp("^\\.(" + B + ")"),
				TAG: new RegExp("^(" + B + "|[*])"),
				ATTR: new RegExp("^" + R),
				PSEUDO: new RegExp("^" + F),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + j + ")$", "i"),
				needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
			},
			Q = /^(?:input|select|textarea|button)$/i,
			G = /^h\d$/i,
			Z = /^[^{]+\{\s*\[native \w/,
			J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			tt = /[+~]/,
			et = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
			nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			it = function(t, e) {
				return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
			},
			ot = mt(function(t) {
				return !0 === t.disabled && ("form" in t || "label" in t)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			N.apply(e = O.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
		} catch(n) {
			N = {
				apply: e.length ? function(t, e) {
					L.apply(t, O.call(e))
				} : function(t, e) {
					for(var n = t.length, i = 0; t[n++] = e[i++];);
					t.length = n - 1
				}
			}
		}

		function st(t, e, n, i) {
			var o, s, r, a, l, c, u, d = e && e.ownerDocument,
				h = e ? e.nodeType : 9;
			if(n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;
			if(!i && ((e ? e.ownerDocument || e : y) !== S && C(e), e = e || S, _)) {
				if(11 !== h && (l = J.exec(t)))
					if(o = l[1]) {
						if(9 === h) {
							if(!(r = e.getElementById(o))) return n;
							if(r.id === o) return n.push(r), n
						} else if(d && (r = d.getElementById(o)) && v(e, r) && r.id === o) return n.push(r), n
					} else {
						if(l[2]) return N.apply(n, e.getElementsByTagName(t)), n;
						if((o = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return N.apply(n, e.getElementsByClassName(o)), n
					}
				if(p.qsa && !I[t + " "] && (!m || !m.test(t))) {
					if(1 !== h) d = e, u = t;
					else if("object" !== e.nodeName.toLowerCase()) {
						for((a = e.getAttribute("id")) ? a = a.replace(nt, it) : e.setAttribute("id", a = T), s = (c = f(t)).length; s--;) c[s] = "#" + a + " " + gt(c[s]);
						u = c.join(","), d = tt.test(t) && pt(e.parentNode) || e
					}
					if(u) try {
						return N.apply(n, d.querySelectorAll(u)), n
					} catch(t) {} finally {
						a === T && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(z, "$1"), e, n, i)
		}

		function rt() {
			var i = [];
			return function t(e, n) {
				return i.push(e + " ") > w.cacheLength && delete t[i.shift()], t[e + " "] = n
			}
		}

		function at(t) {
			return t[T] = !0, t
		}

		function lt(t) {
			var e = S.createElement("fieldset");
			try {
				return !!t(e)
			} catch(t) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function ct(t, e) {
			for(var n = t.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = e
		}

		function ut(t, e) {
			var n = e && t,
				i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
			if(i) return i;
			if(n)
				for(; n = n.nextSibling;)
					if(n === e) return -1;
			return t ? 1 : -1
		}

		function dt(e) {
			return function(t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ot(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function ht(r) {
			return at(function(s) {
				return s = +s, at(function(t, e) {
					for(var n, i = r([], t.length, s), o = i.length; o--;) t[n = i[o]] && (t[n] = !(e[n] = t[n]))
				})
			})
		}

		function pt(t) {
			return t && void 0 !== t.getElementsByTagName && t
		}
		for(t in p = st.support = {}, o = st.isXML = function(t) {
				t = t && (t.ownerDocument || t).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, C = st.setDocument = function(t) {
				var e, t = t ? t.ownerDocument || t : y;
				return t !== S && 9 === t.nodeType && t.documentElement && (r = (S = t).documentElement, _ = !o(S), y !== S && (e = S.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", i, !1) : e.attachEvent && e.attachEvent("onunload", i)), p.attributes = lt(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), p.getElementsByTagName = lt(function(t) {
					return t.appendChild(S.createComment("")), !t.getElementsByTagName("*").length
				}), p.getElementsByClassName = Z.test(S.getElementsByClassName), p.getById = lt(function(t) {
					return r.appendChild(t).id = T, !S.getElementsByName || !S.getElementsByName(T).length
				}), p.getById ? (w.filter.ID = function(t) {
					var e = t.replace(et, d);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}, w.find.ID = function(t, e) {
					if(void 0 !== e.getElementById && _) {
						t = e.getElementById(t);
						return t ? [t] : []
					}
				}) : (w.filter.ID = function(t) {
					var e = t.replace(et, d);
					return function(t) {
						t = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
						return t && t.value === e
					}
				}, w.find.ID = function(t, e) {
					if(void 0 !== e.getElementById && _) {
						var n, i, o, s = e.getElementById(t);
						if(s) {
							if((n = s.getAttributeNode("id")) && n.value === t) return [s];
							for(o = e.getElementsByName(t), i = 0; s = o[i++];)
								if((n = s.getAttributeNode("id")) && n.value === t) return [s]
						}
						return []
					}
				}), w.find.TAG = p.getElementsByTagName ? function(t, e) {
					return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
				} : function(t, e) {
					var n, i = [],
						o = 0,
						s = e.getElementsByTagName(t);
					if("*" !== t) return s;
					for(; n = s[o++];) 1 === n.nodeType && i.push(n);
					return i
				}, w.find.CLASS = p.getElementsByClassName && function(t, e) {
					if(void 0 !== e.getElementsByClassName && _) return e.getElementsByClassName(t)
				}, a = [], m = [], (p.qsa = Z.test(S.querySelectorAll)) && (lt(function(t) {
					r.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + T + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]")
				}), lt(function(t) {
					t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var e = S.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), r.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
				})), (p.matchesSelector = Z.test(u = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && lt(function(t) {
					p.disconnectedMatch = u.call(t, "*"), u.call(t, "[s!='']:x"), a.push("!=", F)
				}), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), e = Z.test(r.compareDocumentPosition), v = e || Z.test(r.contains) ? function(t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t,
						e = e && e.parentNode;
					return t === e || !(!e || 1 !== e.nodeType || !(n.contains ? n.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
				} : function(t, e) {
					if(e)
						for(; e = e.parentNode;)
							if(e === t) return !0;
					return !1
				}, D = e ? function(t, e) {
					if(t === e) return c = !0, 0;
					var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === n ? t === S || t.ownerDocument === y && v(y, t) ? -1 : e === S || e.ownerDocument === y && v(y, e) ? 1 : l ? M(l, t) - M(l, e) : 0 : 4 & n ? -1 : 1)
				} : function(t, e) {
					if(t === e) return c = !0, 0;
					var n, i = 0,
						o = t.parentNode,
						s = e.parentNode,
						r = [t],
						a = [e];
					if(!o || !s) return t === S ? -1 : e === S ? 1 : o ? -1 : s ? 1 : l ? M(l, t) - M(l, e) : 0;
					if(o === s) return ut(t, e);
					for(n = t; n = n.parentNode;) r.unshift(n);
					for(n = e; n = n.parentNode;) a.unshift(n);
					for(; r[i] === a[i];) i++;
					return i ? ut(r[i], a[i]) : r[i] === y ? -1 : a[i] === y ? 1 : 0
				}), S
			}, st.matches = function(t, e) {
				return st(t, null, null, e)
			}, st.matchesSelector = function(t, e) {
				if((t.ownerDocument || t) !== S && C(t), e = e.replace(Y, "='$1']"), p.matchesSelector && _ && !I[e + " "] && (!a || !a.test(e)) && (!m || !m.test(e))) try {
					var n = u.call(t, e);
					if(n || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
				} catch(t) {}
				return 0 < st(e, S, null, [t]).length
			}, st.contains = function(t, e) {
				return(t.ownerDocument || t) !== S && C(t), v(t, e)
			}, st.attr = function(t, e) {
				(t.ownerDocument || t) !== S && C(t);
				var n = w.attrHandle[e.toLowerCase()],
					n = n && $.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !_) : void 0;
				return void 0 !== n ? n : p.attributes || !_ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
			}, st.escape = function(t) {
				return(t + "").replace(nt, it)
			}, st.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, st.uniqueSort = function(t) {
				var e, n = [],
					i = 0,
					o = 0;
				if(c = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(D), c) {
					for(; e = t[o++];) e === t[o] && (i = n.push(o));
					for(; i--;) t.splice(n[i], 1)
				}
				return l = null, t
			}, s = st.getText = function(t) {
				var e, n = "",
					i = 0,
					o = t.nodeType;
				if(o) {
					if(1 === o || 9 === o || 11 === o) {
						if("string" == typeof t.textContent) return t.textContent;
						for(t = t.firstChild; t; t = t.nextSibling) n += s(t)
					} else if(3 === o || 4 === o) return t.nodeValue
				} else
					for(; e = t[i++];) n += s(e);
				return n
			}, (w = st.selectors = {
				cacheLength: 50,
				createPseudo: at,
				match: K,
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
						return t[1] = t[1].replace(et, d), t[3] = (t[3] || t[4] || t[5] || "").replace(et, d), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, n = !t[6] && t[2];
						return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = f(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(et, d).toLowerCase();
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
					ATTR: function(e, n, i) {
						return function(t) {
							t = st.attr(t, e);
							return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === i : "!=" === n ? t !== i : "^=" === n ? i && 0 === t.indexOf(i) : "*=" === n ? i && -1 < t.indexOf(i) : "$=" === n ? i && t.slice(-i.length) === i : "~=" === n ? -1 < (" " + t.replace(q, " ") + " ").indexOf(i) : "|=" === n && (t === i || t.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(f, t, e, g, m) {
						var v = "nth" !== f.slice(0, 3),
							y = "last" !== f.slice(-4),
							b = "of-type" === t;
						return 1 === g && 0 === m ? function(t) {
							return !!t.parentNode
						} : function(t, e, n) {
							var i, o, s, r, a, l, c = v != y ? "nextSibling" : "previousSibling",
								u = t.parentNode,
								d = b && t.nodeName.toLowerCase(),
								h = !n && !b,
								p = !1;
							if(u) {
								if(v) {
									for(; c;) {
										for(r = t; r = r[c];)
											if(b ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
										l = c = "only" === f && !l && "nextSibling"
									}
									return !0
								}
								if(l = [y ? u.firstChild : u.lastChild], y && h) {
									for(p = (a = (i = (o = (s = (r = u)[T] || (r[T] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] || [])[0] === k && i[1]) && i[2], r = a && u.childNodes[a]; r = ++a && r && r[c] || (p = a = 0) || l.pop();)
										if(1 === r.nodeType && ++p && r === t) {
											o[f] = [k, a, p];
											break
										}
								} else if(h && (p = a = (i = (o = (s = (r = t)[T] || (r[T] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] || [])[0] === k && i[1]), !1 === p)
									for(;
										(r = ++a && r && r[c] || (p = a = 0) || l.pop()) && ((b ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++p || (h && ((o = (s = r[T] || (r[T] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] = [k, p]), r !== t)););
								return(p -= m) === g || p % g == 0 && 0 <= p / g
							}
						}
					},
					PSEUDO: function(t, s) {
						var e, r = w.pseudos[t] || w.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
						return r[T] ? r(s) : 1 < r.length ? (e = [t, t, "", s], w.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, e) {
							for(var n, i = r(t, s), o = i.length; o--;) t[n = M(t, i[o])] = !(e[n] = i[o])
						}) : function(t) {
							return r(t, 0, e)
						}) : r
					}
				},
				pseudos: {
					not: at(function(t) {
						var i = [],
							o = [],
							a = h(t.replace(z, "$1"));
						return a[T] ? at(function(t, e, n, i) {
							for(var o, s = a(t, null, i, []), r = t.length; r--;)(o = s[r]) && (t[r] = !(e[r] = o))
						}) : function(t, e, n) {
							return i[0] = t, a(i, null, n, o), i[0] = null, !o.pop()
						}
					}),
					has: at(function(e) {
						return function(t) {
							return 0 < st(e, t).length
						}
					}),
					contains: at(function(e) {
						return e = e.replace(et, d),
							function(t) {
								return -1 < (t.textContent || t.innerText || s(t)).indexOf(e)
							}
					}),
					lang: at(function(n) {
						return V.test(n || "") || st.error("unsupported lang: " + n), n = n.replace(et, d).toLowerCase(),
							function(t) {
								var e;
								do {
									if(e = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return(e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var e = n.location && n.location.hash;
						return e && e.slice(1) === t.id
					},
					root: function(t) {
						return t === r
					},
					focus: function(t) {
						return t === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					},
					enabled: dt(!1),
					disabled: dt(!0),
					checked: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					},
					selected: function(t) {
						return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
					},
					empty: function(t) {
						for(t = t.firstChild; t; t = t.nextSibling)
							if(t.nodeType < 6) return !1;
						return !0
					},
					parent: function(t) {
						return !w.pseudos.empty(t)
					},
					header: function(t) {
						return G.test(t.nodeName)
					},
					input: function(t) {
						return Q.test(t.nodeName)
					},
					button: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function(t) {
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: ht(function() {
						return [0]
					}),
					last: ht(function(t, e) {
						return [e - 1]
					}),
					eq: ht(function(t, e, n) {
						return [n < 0 ? n + e : n]
					}),
					even: ht(function(t, e) {
						for(var n = 0; n < e; n += 2) t.push(n);
						return t
					}),
					odd: ht(function(t, e) {
						for(var n = 1; n < e; n += 2) t.push(n);
						return t
					}),
					lt: ht(function(t, e, n) {
						for(var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
						return t
					}),
					gt: ht(function(t, e, n) {
						for(var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
						return t
					})
				}
			}).pseudos.nth = w.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[t] = function(e) {
			return function(t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}(t);
		for(t in {
				submit: !0,
				reset: !0
			}) w.pseudos[t] = function(n) {
			return function(t) {
				var e = t.nodeName.toLowerCase();
				return("input" === e || "button" === e) && t.type === n
			}
		}(t);

		function ft() {}

		function gt(t) {
			for(var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
			return i
		}

		function mt(r, t, e) {
			var a = t.dir,
				l = t.next,
				c = l || a,
				u = e && "parentNode" === c,
				d = b++;
			return t.first ? function(t, e, n) {
				for(; t = t[a];)
					if(1 === t.nodeType || u) return r(t, e, n);
				return !1
			} : function(t, e, n) {
				var i, o, s = [k, d];
				if(n) {
					for(; t = t[a];)
						if((1 === t.nodeType || u) && r(t, e, n)) return !0
				} else
					for(; t = t[a];)
						if(1 === t.nodeType || u)
							if(i = (o = t[T] || (t[T] = {}))[t.uniqueID] || (o[t.uniqueID] = {}), l && l === t.nodeName.toLowerCase()) t = t[a] || t;
							else {
								if((o = i[c]) && o[0] === k && o[1] === d) return s[2] = o[2];
								if((i[c] = s)[2] = r(t, e, n)) return !0
							} return !1
			}
		}

		function vt(o) {
			return 1 < o.length ? function(t, e, n) {
				for(var i = o.length; i--;)
					if(!o[i](t, e, n)) return !1;
				return !0
			} : o[0]
		}

		function yt(t, e, n, i, o) {
			for(var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, o) || (r.push(s), c && e.push(a)));
			return r
		}

		function bt(t) {
			for(var i, e, n, o = t.length, s = w.relative[t[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = mt(function(t) {
					return t === i
				}, r, !0), c = mt(function(t) {
					return -1 < M(i, t)
				}, r, !0), u = [function(t, e, n) {
					n = !s && (n || e !== x) || ((i = e).nodeType ? l : c)(t, e, n);
					return i = null, n
				}]; a < o; a++)
				if(e = w.relative[t[a].type]) u = [mt(vt(u), e)];
				else {
					if((e = w.filter[t[a].type].apply(null, t[a].matches))[T]) {
						for(n = ++a; n < o && !w.relative[t[n].type]; n++);
						return function t(p, f, g, m, v, e) {
							return m && !m[T] && (m = t(m)), v && !v[T] && (v = t(v, e)), at(function(t, e, n, i) {
								var o, s, r, a = [],
									l = [],
									c = e.length,
									u = t || function(t, e, n) {
										for(var i = 0, o = e.length; i < o; i++) st(t, e[i], n);
										return n
									}(f || "*", n.nodeType ? [n] : n, []),
									d = !p || !t && f ? u : yt(u, a, p, n, i),
									h = g ? v || (t ? p : c || m) ? [] : e : d;
								if(g && g(d, h, n, i), m)
									for(o = yt(h, l), m(o, [], n, i), s = o.length; s--;)(r = o[s]) && (h[l[s]] = !(d[l[s]] = r));
								if(t) {
									if(v || p) {
										if(v) {
											for(o = [], s = h.length; s--;)(r = h[s]) && o.push(d[s] = r);
											v(null, h = [], o, i)
										}
										for(s = h.length; s--;)(r = h[s]) && -1 < (o = v ? M(t, r) : a[s]) && (t[o] = !(e[o] = r))
									}
								} else h = yt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, i) : N.apply(e, h)
							})
						}(1 < a && vt(u), 1 < a && gt(t.slice(0, a - 1).concat({
							value: " " === t[a - 2].type ? "*" : ""
						})).replace(z, "$1"), e, a < n && bt(t.slice(a, n)), n < o && bt(t = t.slice(n)), n < o && gt(t))
					}
					u.push(e)
				}
			return vt(u)
		}

		function wt(m, v) {
			function t(t, e, n, i, o) {
				var s, r, a, l = 0,
					c = "0",
					u = t && [],
					d = [],
					h = x,
					p = t || b && w.find.TAG("*", o),
					f = k += null == h ? 1 : Math.random() || .1,
					g = p.length;
				for(o && (x = e === S || e || o); c !== g && null != (s = p[c]); c++) {
					if(b && s) {
						for(r = 0, e || s.ownerDocument === S || (C(s), n = !_); a = m[r++];)
							if(a(s, e || S, n)) {
								i.push(s);
								break
							}
						o && (k = f)
					}
					y && ((s = !a && s) && l--, t && u.push(s))
				}
				if(l += c, y && c !== l) {
					for(r = 0; a = v[r++];) a(u, d, e, n);
					if(t) {
						if(0 < l)
							for(; c--;) u[c] || d[c] || (d[c] = P.call(i));
						d = yt(d)
					}
					N.apply(i, d), o && !t && 0 < d.length && 1 < l + v.length && st.uniqueSort(i)
				}
				return o && (k = f, x = h), u
			}
			var y = 0 < v.length,
				b = 0 < m.length;
			return y ? at(t) : t
		}
		return ft.prototype = w.filters = w.pseudos, w.setFilters = new ft, f = st.tokenize = function(t, e) {
			var n, i, o, s, r, a, l, c = A[t + " "];
			if(c) return e ? 0 : c.slice(0);
			for(r = t, a = [], l = w.preFilter; r;) {
				for(s in n && !(i = W.exec(r)) || (i && (r = r.slice(i[0].length) || r), a.push(o = [])), n = !1, (i = U.exec(r)) && (n = i.shift(), o.push({
						value: n,
						type: i[0].replace(z, " ")
					}), r = r.slice(n.length)), w.filter) !(i = K[s].exec(r)) || l[s] && !(i = l[s](i)) || (n = i.shift(), o.push({
					value: n,
					type: s,
					matches: i
				}), r = r.slice(n.length));
				if(!n) break
			}
			return e ? r.length : r ? st.error(t) : A(t, a).slice(0)
		}, h = st.compile = function(t, e) {
			var n, i = [],
				o = [],
				s = I[t + " "];
			if(!s) {
				for(n = (e = e || f(t)).length; n--;)((s = bt(e[n]))[T] ? i : o).push(s);
				(s = I(t, wt(o, i))).selector = t
			}
			return s
		}, g = st.select = function(t, e, n, i) {
			var o, s, r, a, l, c = "function" == typeof t && t,
				u = !i && f(t = c.selector || t);
			if(n = n || [], 1 === u.length) {
				if(2 < (s = u[0] = u[0].slice(0)).length && "ID" === (r = s[0]).type && 9 === e.nodeType && _ && w.relative[s[1].type]) {
					if(!(e = (w.find.ID(r.matches[0].replace(et, d), e) || [])[0])) return n;
					c && (e = e.parentNode), t = t.slice(s.shift().value.length)
				}
				for(o = K.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !w.relative[a = r.type]);)
					if((l = w.find[a]) && (i = l(r.matches[0].replace(et, d), tt.test(s[0].type) && pt(e.parentNode) || e))) {
						if(s.splice(o, 1), !(t = i.length && gt(s))) return N.apply(n, i), n;
						break
					}
			}
			return(c || h(t, u))(i, e, !_, n, !e || tt.test(t) && pt(e.parentNode) || e), n
		}, p.sortStable = T.split("").sort(D).join("") === T, p.detectDuplicates = !!c, C(), p.sortDetached = lt(function(t) {
			return 1 & t.compareDocumentPosition(S.createElement("fieldset"))
		}), lt(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || ct("type|href|height|width", function(t, e, n) {
			if(!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), p.attributes && lt(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || ct("value", function(t, e, n) {
			if(!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
		}), lt(function(t) {
			return null == t.getAttribute("disabled")
		}) || ct(j, function(t, e, n) {
			if(!n) return !0 === t[e] ? e.toLowerCase() : (e = t.getAttributeNode(e)) && e.specified ? e.value : null
		}), st
	}(C);
	_.find = p, _.expr = p.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = p.uniqueSort, _.text = p.getText, _.isXMLDoc = p.isXML, _.contains = p.contains, _.escapeSelector = p.escape;

	function x(t, e, n) {
		for(var i = [], o = void 0 !== n;
			(t = t[e]) && 9 !== t.nodeType;)
			if(1 === t.nodeType) {
				if(o && _(t).is(n)) break;
				i.push(t)
			}
		return i
	}

	function T(t, e) {
		for(var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
		return n
	}
	var k = _.expr.match.needsContext;

	function E(t, e) {
		return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
	}
	var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function I(t, n, i) {
		return b(n) ? _.grep(t, function(t, e) {
			return !!n.call(t, e, t) !== i
		}) : n.nodeType ? _.grep(t, function(t) {
			return t === n !== i
		}) : "string" != typeof n ? _.grep(t, function(t) {
			return -1 < o.call(n, t) !== i
		}) : _.filter(n, t, i)
	}
	_.filter = function(t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? _.find.matchesSelector(i, t) ? [i] : [] : _.find.matches(t, _.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, _.fn.extend({
		find: function(t) {
			var e, n, i = this.length,
				o = this;
			if("string" != typeof t) return this.pushStack(_(t).filter(function() {
				for(e = 0; e < i; e++)
					if(_.contains(o[e], this)) return !0
			}));
			for(n = this.pushStack([]), e = 0; e < i; e++) _.find(t, o[e], n);
			return 1 < i ? _.uniqueSort(n) : n
		},
		filter: function(t) {
			return this.pushStack(I(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(I(this, t || [], !0))
		},
		is: function(t) {
			return !!I(this, "string" == typeof t && k.test(t) ? _(t) : t || [], !1).length
		}
	});
	var D, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(_.fn.init = function(t, e, n) {
		if(!t) return this;
		if(n = n || D, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : b(t) ? void 0 !== n.ready ? n.ready(t) : t(_) : _.makeArray(t, this);
		if(!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : $.exec(t)) || !i[1] && e) return(!e || e.jquery ? e || n : this.constructor(e)).find(t);
		if(i[1]) {
			if(e = e instanceof _ ? e[0] : e, _.merge(this, _.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : S, !0)), A.test(i[1]) && _.isPlainObject(e))
				for(var i in e) b(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
			return this
		}
		return(t = S.getElementById(i[2])) && (this[0] = t, this.length = 1), this
	}).prototype = _.fn, D = _(S);
	var P = /^(?:parents|prev(?:Until|All))/,
		L = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function N(t, e) {
		for(;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}
	_.fn.extend({
		has: function(t) {
			var e = _(t, this),
				n = e.length;
			return this.filter(function() {
				for(var t = 0; t < n; t++)
					if(_.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			var n, i = 0,
				o = this.length,
				s = [],
				r = "string" != typeof t && _(t);
			if(!k.test(t))
				for(; i < o; i++)
					for(n = this[i]; n && n !== e; n = n.parentNode)
						if(n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, t))) {
							s.push(n);
							break
						}
			return this.pushStack(1 < s.length ? _.uniqueSort(s) : s)
		},
		index: function(t) {
			return t ? "string" == typeof t ? o.call(_(t), this[0]) : o.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), _.each({
		parent: function(t) {
			t = t.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(t) {
			return x(t, "parentNode")
		},
		parentsUntil: function(t, e, n) {
			return x(t, "parentNode", n)
		},
		next: function(t) {
			return N(t, "nextSibling")
		},
		prev: function(t) {
			return N(t, "previousSibling")
		},
		nextAll: function(t) {
			return x(t, "nextSibling")
		},
		prevAll: function(t) {
			return x(t, "previousSibling")
		},
		nextUntil: function(t, e, n) {
			return x(t, "nextSibling", n)
		},
		prevUntil: function(t, e, n) {
			return x(t, "previousSibling", n)
		},
		siblings: function(t) {
			return T((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return T(t.firstChild)
		},
		contents: function(t) {
			return E(t, "iframe") ? t.contentDocument : (E(t, "template") && (t = t.content || t), _.merge([], t.childNodes))
		}
	}, function(i, o) {
		_.fn[i] = function(t, e) {
			var n = _.map(this, o, t);
			return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = _.filter(e, n)), 1 < this.length && (L[i] || _.uniqueSort(n), P.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var O = /[^\x20\t\r\n\f]+/g;

	function M(t) {
		return t
	}

	function j(t) {
		throw t
	}

	function H(t, e, n, i) {
		var o;
		try {
			t && b(o = t.promise) ? o.call(t).done(e).fail(n) : t && b(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
		} catch(t) {
			n.apply(void 0, [t])
		}
	}
	_.Callbacks = function(i) {
		var n;
		i = "string" == typeof i ? (n = {}, _.each(i.match(O) || [], function(t, e) {
			n[e] = !0
		}), n) : _.extend({}, i);

		function o() {
			for(r = r || i.once, e = s = !0; l.length; c = -1)
				for(t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
			i.memory || (t = !1), s = !1, r && (a = t ? [] : "")
		}
		var s, t, e, r, a = [],
			l = [],
			c = -1,
			u = {
				add: function() {
					return a && (t && !s && (c = a.length - 1, l.push(t)), function n(t) {
						_.each(t, function(t, e) {
							b(e) ? i.unique && u.has(e) || a.push(e) : e && e.length && "string" !== f(e) && n(e)
						})
					}(arguments), t && !s && o()), this
				},
				remove: function() {
					return _.each(arguments, function(t, e) {
						for(var n; - 1 < (n = _.inArray(e, a, n));) a.splice(n, 1), n <= c && c--
					}), this
				},
				has: function(t) {
					return t ? -1 < _.inArray(t, a) : 0 < a.length
				},
				empty: function() {
					return a = a && [], this
				},
				disable: function() {
					return r = l = [], a = t = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return r = l = [], t || s || (a = t = ""), this
				},
				locked: function() {
					return !!r
				},
				fireWith: function(t, e) {
					return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), s || o()), this
				},
				fire: function() {
					return u.fireWith(this, arguments), this
				},
				fired: function() {
					return !!e
				}
			};
		return u
	}, _.extend({
		Deferred: function(t) {
			var s = [
					["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
					["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
				],
				o = "pending",
				r = {
					state: function() {
						return o
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					catch: function(t) {
						return r.then(null, t)
					},
					pipe: function() {
						var o = arguments;
						return _.Deferred(function(i) {
							_.each(s, function(t, e) {
								var n = b(o[e[4]]) && o[e[4]];
								a[e[1]](function() {
									var t = n && n.apply(this, arguments);
									t && b(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
								})
							}), o = null
						}).promise()
					},
					then: function(e, n, i) {
						var l = 0;

						function c(o, s, r, a) {
							return function() {
								function t() {
									var t, e;
									if(!(o < l)) {
										if((t = r.apply(n, i)) === s.promise()) throw new TypeError("Thenable self-resolution");
										e = t && ("object" == typeof t || "function" == typeof t) && t.then, b(e) ? a ? e.call(t, c(l, s, M, a), c(l, s, j, a)) : (l++, e.call(t, c(l, s, M, a), c(l, s, j, a), c(l, s, M, s.notifyWith))) : (r !== M && (n = void 0, i = [t]), (a || s.resolveWith)(n, i))
									}
								}
								var n = this,
									i = arguments,
									e = a ? t : function() {
										try {
											t()
										} catch(t) {
											_.Deferred.exceptionHook && _.Deferred.exceptionHook(t, e.stackTrace), l <= o + 1 && (r !== j && (n = void 0, i = [t]), s.rejectWith(n, i))
										}
									};
								o ? e() : (_.Deferred.getStackHook && (e.stackTrace = _.Deferred.getStackHook()), C.setTimeout(e))
							}
						}
						return _.Deferred(function(t) {
							s[0][3].add(c(0, t, b(i) ? i : M, t.notifyWith)), s[1][3].add(c(0, t, b(e) ? e : M)), s[2][3].add(c(0, t, b(n) ? n : j))
						}).promise()
					},
					promise: function(t) {
						return null != t ? _.extend(t, r) : r
					}
				},
				a = {};
			return _.each(s, function(t, e) {
				var n = e[2],
					i = e[5];
				r[e[1]] = n.add, i && n.add(function() {
					o = i
				}, s[3 - t][2].disable, s[3 - t][3].disable, s[0][2].lock, s[0][3].lock), n.add(e[3].fire), a[e[0]] = function() {
					return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
				}, a[e[0] + "With"] = n.fireWith
			}), r.promise(a), t && t.call(a, a), a
		},
		when: function(t) {
			function e(e) {
				return function(t) {
					o[e] = this, s[e] = 1 < arguments.length ? a.call(arguments) : t, --n || r.resolveWith(o, s)
				}
			}
			var n = arguments.length,
				i = n,
				o = Array(i),
				s = a.call(arguments),
				r = _.Deferred();
			if(n <= 1 && (H(t, r.done(e(i)).resolve, r.reject, !n), "pending" === r.state() || b(s[i] && s[i].then))) return r.then();
			for(; i--;) H(s[i], e(i), r.reject);
			return r.promise()
		}
	});
	var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	_.Deferred.exceptionHook = function(t, e) {
		C.console && C.console.warn && t && B.test(t.name) && C.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
	}, _.readyException = function(t) {
		C.setTimeout(function() {
			throw t
		})
	};
	var R = _.Deferred();

	function F() {
		S.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), _.ready()
	}
	_.fn.ready = function(t) {
		return R.then(t).catch(function(t) {
			_.readyException(t)
		}), this
	}, _.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(t) {
			(!0 === t ? --_.readyWait : _.isReady) || ((_.isReady = !0) !== t && 0 < --_.readyWait || R.resolveWith(S, [_]))
		}
	}), _.ready.then = R.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(_.ready) : (S.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F));
	var q = function(t, e, n, i, o, s, r) {
			var a = 0,
				l = t.length,
				c = null == n;
			if("object" === f(n))
				for(a in o = !0, n) q(t, e, a, n[a], !0, s, r);
			else if(void 0 !== i && (o = !0, b(i) || (r = !0), c && (e = r ? (e.call(t, i), null) : (c = e, function(t, e, n) {
					return c.call(_(t), n)
				})), e))
				for(; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
			return o ? t : c ? e.call(t) : l ? e(t[0], n) : s
		},
		z = /^-ms-/,
		W = /-([a-z])/g;

	function U(t, e) {
		return e.toUpperCase()
	}

	function Y(t) {
		return t.replace(z, "ms-").replace(W, U)
	}

	function X(t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
	}

	function V() {
		this.expando = _.expando + V.uid++
	}
	V.uid = 1, V.prototype = {
		cache: function(t) {
			var e = t[this.expando];
			return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
				value: e,
				configurable: !0
			}))), e
		},
		set: function(t, e, n) {
			var i, o = this.cache(t);
			if("string" == typeof e) o[Y(e)] = n;
			else
				for(i in e) o[Y(i)] = e[i];
			return o
		},
		get: function(t, e) {
			return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
		},
		access: function(t, e, n) {
			return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
		},
		remove: function(t, e) {
			var n, i = t[this.expando];
			if(void 0 !== i) {
				if(void 0 !== e) {
					n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(O) || []).length;
					for(; n--;) delete i[e[n]]
				}
				void 0 !== e && !_.isEmptyObject(i) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
			}
		},
		hasData: function(t) {
			t = t[this.expando];
			return void 0 !== t && !_.isEmptyObject(t)
		}
	};
	var K = new V,
		Q = new V,
		G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Z = /[A-Z]/g;

	function J(t, e, n) {
		var i, o;
		if(void 0 === n && 1 === t.nodeType)
			if(i = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
				try {
					n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o)
				} catch(t) {}
				Q.set(t, e, n)
			} else n = void 0;
		return n
	}
	_.extend({
		hasData: function(t) {
			return Q.hasData(t) || K.hasData(t)
		},
		data: function(t, e, n) {
			return Q.access(t, e, n)
		},
		removeData: function(t, e) {
			Q.remove(t, e)
		},
		_data: function(t, e, n) {
			return K.access(t, e, n)
		},
		_removeData: function(t, e) {
			K.remove(t, e)
		}
	}), _.fn.extend({
		data: function(n, t) {
			var e, i, o, s = this[0],
				r = s && s.attributes;
			if(void 0 !== n) return "object" == typeof n ? this.each(function() {
				Q.set(this, n)
			}) : q(this, function(t) {
				var e;
				return s && void 0 === t ? void 0 !== (e = Q.get(s, n)) || void 0 !== (e = J(s, n)) ? e : void 0 : void this.each(function() {
					Q.set(this, n, t)
				})
			}, null, t, 1 < arguments.length, null, !0);
			if(this.length && (o = Q.get(s), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
				for(e = r.length; e--;) r[e] && 0 === (i = r[e].name).indexOf("data-") && (i = Y(i.slice(5)), J(s, i, o[i]));
				K.set(s, "hasDataAttrs", !0)
			}
			return o
		},
		removeData: function(t) {
			return this.each(function() {
				Q.remove(this, t)
			})
		}
	}), _.extend({
		queue: function(t, e, n) {
			var i;
			if(t) return e = (e || "fx") + "queue", i = K.get(t, e), n && (!i || Array.isArray(n) ? i = K.access(t, e, _.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var n = _.queue(t, e),
				i = n.length,
				o = n.shift(),
				s = _._queueHooks(t, e);
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, function() {
				_.dequeue(t, e)
			}, s)), !i && s && s.empty.fire()
		},
		_queueHooks: function(t, e) {
			var n = e + "queueHooks";
			return K.get(t, n) || K.access(t, n, {
				empty: _.Callbacks("once memory").add(function() {
					K.remove(t, [e + "queue", n])
				})
			})
		}
	}), _.fn.extend({
		queue: function(e, n) {
			var t = 2;
			return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? _.queue(this[0], e) : void 0 === n ? this : this.each(function() {
				var t = _.queue(this, e, n);
				_._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && _.dequeue(this, e)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				_.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			function n() {
				--o || s.resolveWith(r, [r])
			}
			var i, o = 1,
				s = _.Deferred(),
				r = this,
				a = this.length;
			for("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = K.get(r[a], t + "queueHooks")) && i.empty && (o++, i.empty.add(n));
			return n(), s.promise(e)
		}
	});

	function tt(t, e) {
		return "none" === (t = e || t).style.display || "" === t.style.display && _.contains(t.ownerDocument, t) && "none" === _.css(t, "display")
	}

	function et(t, e, n, i) {
		var o, s = {};
		for(o in e) s[o] = t.style[o], t.style[o] = e[o];
		for(o in i = n.apply(t, i || []), e) t.style[o] = s[o];
		return i
	}
	var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		it = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
		ot = ["Top", "Right", "Bottom", "Left"];

	function st(t, e, n, i) {
		var o, s, r = 20,
			a = i ? function() {
				return i.cur()
			} : function() {
				return _.css(t, e, "")
			},
			l = a(),
			c = n && n[3] || (_.cssNumber[e] ? "" : "px"),
			u = (_.cssNumber[e] || "px" !== c && +l) && it.exec(_.css(t, e));
		if(u && u[3] !== c) {
			for(l /= 2, c = c || u[3], u = +l || 1; r--;) _.style(t, e, u + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0), u /= s;
			u *= 2, _.style(t, e, u + c), n = n || []
		}
		return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
	}
	var rt = {};

	function at(t, e) {
		for(var n, i, o, s, r, a = [], l = 0, c = t.length; l < c; l++)(i = t[l]).style && (n = i.style.display, e ? ("none" === n && (a[l] = K.get(i, "display") || null, a[l] || (i.style.display = "")), "" === i.style.display && tt(i) && (a[l] = (r = s = void 0, s = (o = i).ownerDocument, r = o.nodeName, (o = rt[r]) || (s = s.body.appendChild(s.createElement(r)), o = _.css(s, "display"), s.parentNode.removeChild(s), "none" === o && (o = "block"), rt[r] = o)))) : "none" !== n && (a[l] = "none", K.set(i, "display", n)));
		for(l = 0; l < c; l++) null != a[l] && (t[l].style.display = a[l]);
		return t
	}
	_.fn.extend({
		show: function() {
			return at(this, !0)
		},
		hide: function() {
			return at(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				tt(this) ? _(this).show() : _(this).hide()
			})
		}
	});
	var lt = /^(?:checkbox|radio)$/i,
		ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		ut = /^$|^module$|\/(?:java|ecma)script/i,
		dt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function ht(t, e) {
		var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && E(t, e) ? _.merge([t], n) : n
	}

	function pt(t, e) {
		for(var n = 0, i = t.length; n < i; n++) K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"))
	}
	dt.optgroup = dt.option, dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead, dt.th = dt.td;
	var ft = /<|&#?\w+;/;

	function gt(t, e, n, i, o) {
		for(var s, r, a, l, c, u = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
			if((s = t[h]) || 0 === s)
				if("object" === f(s)) _.merge(d, s.nodeType ? [s] : s);
				else if(ft.test(s)) {
			for(r = r || u.appendChild(e.createElement("div")), a = (ct.exec(s) || ["", ""])[1].toLowerCase(), a = dt[a] || dt._default, r.innerHTML = a[1] + _.htmlPrefilter(s) + a[2], c = a[0]; c--;) r = r.lastChild;
			_.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
		} else d.push(e.createTextNode(s));
		for(u.textContent = "", h = 0; s = d[h++];)
			if(i && -1 < _.inArray(s, i)) o && o.push(s);
			else if(l = _.contains(s.ownerDocument, s), r = ht(u.appendChild(s), "script"), l && pt(r), n)
			for(c = 0; s = r[c++];) ut.test(s.type || "") && n.push(s);
		return u
	}
	e = S.createDocumentFragment().appendChild(S.createElement("div")), (p = S.createElement("input")).setAttribute("type", "radio"), p.setAttribute("checked", "checked"), p.setAttribute("name", "t"), e.appendChild(p), y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
	var mt = S.documentElement,
		vt = /^key/,
		yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		bt = /^([^.]*)(?:\.(.+)|)/;

	function wt() {
		return !0
	}

	function xt() {
		return !1
	}

	function Ct() {
		try {
			return S.activeElement
		} catch(t) {}
	}

	function St(t, e, n, i, o, s) {
		var r, a;
		if("object" == typeof e) {
			for(a in "string" != typeof n && (i = i || n, n = void 0), e) St(t, a, n, i, e[a], s);
			return t
		}
		if(null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = xt;
		else if(!o) return t;
		return 1 === s && (r = o, (o = function(t) {
			return _().off(t), r.apply(this, arguments)
		}).guid = r.guid || (r.guid = _.guid++)), t.each(function() {
			_.event.add(this, e, o, i, n)
		})
	}
	_.event = {
		global: {},
		add: function(e, t, n, i, o) {
			var s, r, a, l, c, u, d, h, p, f = K.get(e);
			if(f)
				for(n.handler && (n = (s = n).handler, o = s.selector), o && _.find.matchesSelector(mt, o), n.guid || (n.guid = _.guid++), (a = f.events) || (a = f.events = {}), (r = f.handle) || (r = f.handle = function(t) {
						return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
					}), l = (t = (t || "").match(O) || [""]).length; l--;) d = p = (c = bt.exec(t[l]) || [])[1], h = (c[2] || "").split(".").sort(), d && (u = _.event.special[d] || {}, d = (o ? u.delegateType : u.bindType) || d, u = _.event.special[d] || {}, c = _.extend({
					type: d,
					origType: p,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && _.expr.match.needsContext.test(o),
					namespace: h.join(".")
				}, s), (p = a[d]) || ((p = a[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, r) || e.addEventListener && e.addEventListener(d, r)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), _.event.global[d] = !0)
		},
		remove: function(t, e, n, i, o) {
			var s, r, a, l, c, u, d, h, p, f, g, m = K.hasData(t) && K.get(t);
			if(m && (l = m.events)) {
				for(c = (e = (e || "").match(O) || [""]).length; c--;)
					if(p = g = (a = bt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
						for(d = _.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) u = h[s], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
						r && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, m.handle) || _.removeEvent(t, p, m.handle), delete l[p])
					} else
						for(p in l) _.event.remove(t, p + e[c], n, i, !0);
				_.isEmptyObject(l) && K.remove(t, "handle events")
			}
		},
		dispatch: function(t) {
			var e, n, i, o, s, r = _.event.fix(t),
				a = new Array(arguments.length),
				l = (K.get(this, "events") || {})[r.type] || [],
				t = _.event.special[r.type] || {};
			for(a[0] = r, e = 1; e < arguments.length; e++) a[e] = arguments[e];
			if(r.delegateTarget = this, !t.preDispatch || !1 !== t.preDispatch.call(this, r)) {
				for(s = _.event.handlers.call(this, r, l), e = 0;
					(i = s[e++]) && !r.isPropagationStopped();)
					for(r.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !r.rnamespace.test(o.namespace) || (r.handleObj = o, r.data = o.data, void 0 !== (o = ((_.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (r.result = o) && (r.preventDefault(), r.stopPropagation()));
				return t.postDispatch && t.postDispatch.call(this, r), r.result
			}
		},
		handlers: function(t, e) {
			var n, i, o, s, r, a = [],
				l = e.delegateCount,
				c = t.target;
			if(l && c.nodeType && !("click" === t.type && 1 <= t.button))
				for(; c !== this; c = c.parentNode || this)
					if(1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
						for(s = [], r = {}, n = 0; n < l; n++) void 0 === r[o = (i = e[n]).selector + " "] && (r[o] = i.needsContext ? -1 < _(o, this).index(c) : _.find(o, this, null, [c]).length), r[o] && s.push(i);
						s.length && a.push({
							elem: c,
							handlers: s
						})
					}
			return c = this, l < e.length && a.push({
				elem: c,
				handlers: e.slice(l)
			}), a
		},
		addProp: function(e, t) {
			Object.defineProperty(_.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: b(t) ? function() {
					if(this.originalEvent) return t(this.originalEvent)
				} : function() {
					if(this.originalEvent) return this.originalEvent[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(t) {
			return t[_.expando] ? t : new _.Event(t)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if(this !== Ct() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if(this === Ct() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
				},
				_default: function(t) {
					return E(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		}
	}, _.removeEvent = function(t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n)
	}, _.Event = function(t, e) {
		if(!(this instanceof _.Event)) return new _.Event(t, e);
		t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : xt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && _.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[_.expando] = !0
	}, _.Event.prototype = {
		constructor: _.Event,
		isDefaultPrevented: xt,
		isPropagationStopped: xt,
		isImmediatePropagationStopped: xt,
		isSimulated: !1,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, _.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(t) {
			var e = t.button;
			return null == t.which && vt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
		}
	}, _.event.addProp), _.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, o) {
		_.event.special[t] = {
			delegateType: o,
			bindType: o,
			handle: function(t) {
				var e, n = t.relatedTarget,
					i = t.handleObj;
				return n && (n === this || _.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = o), e
			}
		}
	}), _.fn.extend({
		on: function(t, e, n, i) {
			return St(this, t, e, n, i)
		},
		one: function(t, e, n, i) {
			return St(this, t, e, n, i, 1)
		},
		off: function(t, e, n) {
			var i, o;
			if(t && t.preventDefault && t.handleObj) return i = t.handleObj, _(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = xt), this.each(function() {
				_.event.remove(this, t, n, e)
			});
			for(o in t) this.off(o, e, t[o]);
			return this
		}
	});
	var _t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Tt = /<script|<style|<link/i,
		kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function At(t, e) {
		return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && _(t).children("tbody")[0] || t
	}

	function It(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function Dt(t) {
		return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
	}

	function $t(t, e) {
		var n, i, o, s, r, a;
		if(1 === e.nodeType) {
			if(K.hasData(t) && (s = K.access(t), r = K.set(e, s), a = s.events))
				for(o in delete r.handle, r.events = {}, a)
					for(n = 0, i = a[o].length; n < i; n++) _.event.add(e, o, a[o][n]);
			Q.hasData(t) && (t = Q.access(t), t = _.extend({}, t), Q.set(e, t))
		}
	}

	function Pt(n, i, o, s) {
		i = m.apply([], i);
		var t, e, r, a, l, c, u = 0,
			d = n.length,
			h = d - 1,
			p = i[0],
			f = b(p);
		if(f || 1 < d && "string" == typeof p && !y.checkClone && kt.test(p)) return n.each(function(t) {
			var e = n.eq(t);
			f && (i[0] = p.call(this, t, e.html())), Pt(e, i, o, s)
		});
		if(d && (e = (t = gt(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === t.childNodes.length && (t = e), e || s)) {
			for(a = (r = _.map(ht(t, "script"), It)).length; u < d; u++) l = t, u !== h && (l = _.clone(l, !0, !0), a && _.merge(r, ht(l, "script"))), o.call(n[u], l, u);
			if(a)
				for(c = r[r.length - 1].ownerDocument, _.map(r, Dt), u = 0; u < a; u++) l = r[u], ut.test(l.type || "") && !K.access(l, "globalEval") && _.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(l.src) : w(l.textContent.replace(Et, ""), c, l))
		}
		return n
	}

	function Lt(t, e, n) {
		for(var i, o = e ? _.filter(e, t) : t, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || _.cleanData(ht(i)), i.parentNode && (n && _.contains(i.ownerDocument, i) && pt(ht(i, "script")), i.parentNode.removeChild(i));
		return t
	}
	_.extend({
		htmlPrefilter: function(t) {
			return t.replace(_t, "<$1></$2>")
		},
		clone: function(t, e, n) {
			var i, o, s, r, a, l, c, u = t.cloneNode(!0),
				d = _.contains(t.ownerDocument, t);
			if(!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _.isXMLDoc(t)))
				for(r = ht(u), i = 0, o = (s = ht(t)).length; i < o; i++) a = s[i], l = r[i], c = void 0, "input" === (c = l.nodeName.toLowerCase()) && lt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if(e)
				if(n)
					for(s = s || ht(t), r = r || ht(u), i = 0, o = s.length; i < o; i++) $t(s[i], r[i]);
				else $t(t, u);
			return 0 < (r = ht(u, "script")).length && pt(r, !d && ht(t, "script")), u
		},
		cleanData: function(t) {
			for(var e, n, i, o = _.event.special, s = 0; void 0 !== (n = t[s]); s++)
				if(X(n)) {
					if(e = n[K.expando]) {
						if(e.events)
							for(i in e.events) o[i] ? _.event.remove(n, i) : _.removeEvent(n, i, e.handle);
						n[K.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), _.fn.extend({
		detach: function(t) {
			return Lt(this, t, !0)
		},
		remove: function(t) {
			return Lt(this, t)
		},
		text: function(t) {
			return q(this, function(t) {
				return void 0 === t ? _.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function() {
			return Pt(this, arguments, function(t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t)
			})
		},
		prepend: function() {
			return Pt(this, arguments, function(t) {
				var e;
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = At(this, t)).insertBefore(t, e.firstChild)
			})
		},
		before: function() {
			return Pt(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return Pt(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		empty: function() {
			for(var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (_.cleanData(ht(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map(function() {
				return _.clone(this, t, e)
			})
		},
		html: function(t) {
			return q(this, function(t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if(void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if("string" == typeof t && !Tt.test(t) && !dt[(ct.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = _.htmlPrefilter(t);
					try {
						for(; n < i; n++) 1 === (e = this[n] || {}).nodeType && (_.cleanData(ht(e, !1)), e.innerHTML = t);
						e = 0
					} catch(t) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return Pt(this, arguments, function(t) {
				var e = this.parentNode;
				_.inArray(this, n) < 0 && (_.cleanData(ht(this)), e && e.replaceChild(t, this))
			}, n)
		}
	}), _.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, r) {
		_.fn[t] = function(t) {
			for(var e, n = [], i = _(t), o = i.length - 1, s = 0; s <= o; s++) e = s === o ? this : this.clone(!0), _(i[s])[r](e), l.apply(n, e.get());
			return this.pushStack(n)
		}
	});
	var Nt, Ot, Mt, jt, Ht, Bt, Rt, Ft = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
		qt = function(t) {
			var e = t.ownerDocument.defaultView;
			return e && e.opener || (e = C), e.getComputedStyle(t)
		},
		zt = new RegExp(ot.join("|"), "i");

	function Wt(t, e, n) {
		var i, o, s = t.style;
		return(n = n || qt(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || _.contains(t.ownerDocument, t) || (o = _.style(t, e)), !y.pixelBoxStyles() && Ft.test(o) && zt.test(e) && (i = s.width, t = s.minWidth, e = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = t, s.maxWidth = e)), void 0 !== o ? o + "" : o
	}

	function Ut(t, e) {
		return {
			get: function() {
				if(!t()) return(this.get = e).apply(this, arguments);
				delete this.get
			}
		}
	}

	function Yt() {
		var t;
		Rt && (Bt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Rt.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", mt.appendChild(Bt).appendChild(Rt), t = C.getComputedStyle(Rt), Nt = "1%" !== t.top, Ht = 12 === Xt(t.marginLeft), Rt.style.right = "60%", jt = 36 === Xt(t.right), Ot = 36 === Xt(t.width), Rt.style.position = "absolute", Mt = 36 === Rt.offsetWidth || "absolute", mt.removeChild(Bt), Rt = null)
	}

	function Xt(t) {
		return Math.round(parseFloat(t))
	}
	Bt = S.createElement("div"), (Rt = S.createElement("div")).style && (Rt.style.backgroundClip = "content-box", Rt.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Rt.style.backgroundClip, _.extend(y, {
		boxSizingReliable: function() {
			return Yt(), Ot
		},
		pixelBoxStyles: function() {
			return Yt(), jt
		},
		pixelPosition: function() {
			return Yt(), Nt
		},
		reliableMarginLeft: function() {
			return Yt(), Ht
		},
		scrollboxSize: function() {
			return Yt(), Mt
		}
	}));
	var Vt = /^(none|table(?!-c[ea]).+)/,
		Kt = /^--/,
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Gt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Zt = ["Webkit", "Moz", "ms"],
		Jt = S.createElement("div").style;

	function te(t) {
		return _.cssProps[t] || (_.cssProps[t] = function(t) {
			if(t in Jt) return t;
			for(var e = t[0].toUpperCase() + t.slice(1), n = Zt.length; n--;)
				if((t = Zt[n] + e) in Jt) return t
		}(t) || t)
	}

	function ee(t, e, n) {
		var i = it.exec(e);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
	}

	function ne(t, e, n, i, o, s) {
		var r = "width" === e ? 1 : 0,
			a = 0,
			l = 0;
		if(n === (i ? "border" : "content")) return 0;
		for(; r < 4; r += 2) "margin" === n && (l += _.css(t, n + ot[r], !0, o)), i ? ("content" === n && (l -= _.css(t, "padding" + ot[r], !0, o)), "margin" !== n && (l -= _.css(t, "border" + ot[r] + "Width", !0, o))) : (l += _.css(t, "padding" + ot[r], !0, o), "padding" !== n ? l += _.css(t, "border" + ot[r] + "Width", !0, o) : a += _.css(t, "border" + ot[r] + "Width", !0, o));
		return !i && 0 <= s && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5))), l
	}

	function ie(t, e, n) {
		var i = qt(t),
			o = Wt(t, e, i),
			s = "border-box" === _.css(t, "boxSizing", !1, i),
			r = s;
		if(Ft.test(o)) {
			if(!n) return o;
			o = "auto"
		}
		return r = r && (y.boxSizingReliable() || o === t.style[e]), "auto" !== o && (parseFloat(o) || "inline" !== _.css(t, "display", !1, i)) || (o = t["offset" + e[0].toUpperCase() + e.slice(1)], r = !0), (o = parseFloat(o) || 0) + ne(t, e, n || (s ? "border" : "content"), r, i, o) + "px"
	}

	function oe(t, e, n, i, o) {
		return new oe.prototype.init(t, e, n, i, o)
	}
	_.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if(e) {
						t = Wt(t, "opacity");
						return "" === t ? "1" : t
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
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
		cssProps: {},
		style: function(t, e, n, i) {
			if(t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, s, r, a = Y(e),
					l = Kt.test(e),
					c = t.style;
				if(l || (e = te(a)), r = _.cssHooks[e] || _.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : c[e];
				"string" == (s = typeof n) && (o = it.exec(n)) && o[1] && (n = st(t, e, o), s = "number"), null != n && n == n && ("number" === s && (n += o && o[3] || (_.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (n = r.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
			}
		},
		css: function(t, e, n, i) {
			var o, s = Y(e);
			return Kt.test(e) || (e = te(s)), (s = _.cssHooks[e] || _.cssHooks[s]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Wt(t, e, i)), "normal" === o && e in Gt && (o = Gt[e]), "" === n || n ? (e = parseFloat(o), !0 === n || isFinite(e) ? e || 0 : o) : o
		}
	}), _.each(["height", "width"], function(t, r) {
		_.cssHooks[r] = {
			get: function(t, e, n) {
				if(e) return !Vt.test(_.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ie(t, r, n) : et(t, Qt, function() {
					return ie(t, r, n)
				})
			},
			set: function(t, e, n) {
				var i, o = qt(t),
					s = "border-box" === _.css(t, "boxSizing", !1, o),
					n = n && ne(t, r, n, s, o);
				return s && y.scrollboxSize() === o.position && (n -= Math.ceil(t["offset" + r[0].toUpperCase() + r.slice(1)] - parseFloat(o[r]) - ne(t, r, "border", !1, o) - .5)), n && (i = it.exec(e)) && "px" !== (i[3] || "px") && (t.style[r] = e, e = _.css(t, r)), ee(0, e, n)
			}
		}
	}), _.cssHooks.marginLeft = Ut(y.reliableMarginLeft, function(t, e) {
		if(e) return(parseFloat(Wt(t, "marginLeft")) || t.getBoundingClientRect().left - et(t, {
			marginLeft: 0
		}, function() {
			return t.getBoundingClientRect().left
		})) + "px"
	}), _.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(o, s) {
		_.cssHooks[o + s] = {
			expand: function(t) {
				for(var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[o + ot[e] + s] = i[e] || i[e - 2] || i[0];
				return n
			}
		}, "margin" !== o && (_.cssHooks[o + s].set = ee)
	}), _.fn.extend({
		css: function(t, e) {
			return q(this, function(t, e, n) {
				var i, o, s = {},
					r = 0;
				if(Array.isArray(e)) {
					for(i = qt(t), o = e.length; r < o; r++) s[e[r]] = _.css(t, e[r], !1, i);
					return s
				}
				return void 0 !== n ? _.style(t, e, n) : _.css(t, e)
			}, t, e, 1 < arguments.length)
		}
	}), (_.Tween = oe).prototype = {
		constructor: oe,
		init: function(t, e, n, i, o, s) {
			this.elem = t, this.prop = n, this.easing = o || _.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (_.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var t = oe.propHooks[this.prop];
			return(t && t.get ? t : oe.propHooks._default).get(this)
		},
		run: function(t) {
			var e, n = oe.propHooks[this.prop];
			return this.options.duration ? this.pos = e = _.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : oe.propHooks._default).set(this), this
		}
	}, oe.prototype.init.prototype = oe.prototype, oe.propHooks = {
		_default: {
			get: function(t) {
				return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = _.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(t) {
				_.fx.step[t.prop] ? _.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[_.cssProps[t.prop]] && !_.cssHooks[t.prop] ? t.elem[t.prop] = t.now : _.style(t.elem, t.prop, t.now + t.unit)
			}
		}
	}, oe.propHooks.scrollTop = oe.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, _.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		},
		_default: "swing"
	}, _.fx = oe.prototype.init, _.fx.step = {};
	var se, re, ae = /^(?:toggle|show|hide)$/,
		le = /queueHooks$/;

	function ce() {
		re && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ce) : C.setTimeout(ce, _.fx.interval), _.fx.tick())
	}

	function ue() {
		return C.setTimeout(function() {
			se = void 0
		}), se = Date.now()
	}

	function de(t, e) {
		var n, i = 0,
			o = {
				height: t
			};
		for(e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = ot[i])] = o["padding" + n] = t;
		return e && (o.opacity = o.width = t), o
	}

	function he(t, e, n) {
		for(var i, o = (pe.tweeners[e] || []).concat(pe.tweeners["*"]), s = 0, r = o.length; s < r; s++)
			if(i = o[s].call(n, e, t)) return i
	}

	function pe(o, t, e) {
		var n, s, i = 0,
			r = pe.prefilters.length,
			a = _.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if(s) return !1;
				for(var t = se || ue(), t = Math.max(0, c.startTime + c.duration - t), e = 1 - (t / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(e);
				return a.notifyWith(o, [c, e, t]), e < 1 && i ? t : (i || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
			},
			c = a.promise({
				elem: o,
				props: _.extend({}, t),
				opts: _.extend(!0, {
					specialEasing: {},
					easing: _.easing._default
				}, e),
				originalProperties: t,
				originalOptions: e,
				startTime: se || ue(),
				duration: e.duration,
				tweens: [],
				createTween: function(t, e) {
					t = _.Tween(o, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(t), t
				},
				stop: function(t) {
					var e = 0,
						n = t ? c.tweens.length : 0;
					if(s) return this;
					for(s = !0; e < n; e++) c.tweens[e].run(1);
					return t ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, t])) : a.rejectWith(o, [c, t]), this
				}
			}),
			u = c.props;
		for(function(t, e) {
				var n, i, o, s, r;
				for(n in t)
					if(o = e[i = Y(n)], s = t[n], Array.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (r = _.cssHooks[i]) && "expand" in r)
						for(n in s = r.expand(s), delete t[i], s) n in t || (t[n] = s[n], e[n] = o);
					else e[i] = o
			}(u, c.opts.specialEasing); i < r; i++)
			if(n = pe.prefilters[i].call(c, o, u, c.opts)) return b(n.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
		return _.map(u, he, c), b(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
			elem: o,
			anim: c,
			queue: c.opts.queue
		})), c
	}
	_.Animation = _.extend(pe, {
		tweeners: {
			"*": [function(t, e) {
				var n = this.createTween(t, e);
				return st(n.elem, t, it.exec(e), n), n
			}]
		},
		tweener: function(t, e) {
			for(var n, i = 0, o = (t = b(t) ? (e = t, ["*"]) : t.match(O)).length; i < o; i++) n = t[i], pe.tweeners[n] = pe.tweeners[n] || [], pe.tweeners[n].unshift(e)
		},
		prefilters: [function(t, e, n) {
			var i, o, s, r, a, l, c, u = "width" in e || "height" in e,
				d = this,
				h = {},
				p = t.style,
				f = t.nodeType && tt(t),
				g = K.get(t, "fxshow");
			for(i in n.queue || (null == (r = _._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
					r.unqueued || a()
				}), r.unqueued++, d.always(function() {
					d.always(function() {
						r.unqueued--, _.queue(t, "fx").length || r.empty.fire()
					})
				})), e)
				if(o = e[i], ae.test(o)) {
					if(delete e[i], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
						if("show" !== o || !g || void 0 === g[i]) continue;
						f = !0
					}
					h[i] = g && g[i] || _.style(t, i)
				}
			if((l = !_.isEmptyObject(e)) || !_.isEmptyObject(h))
				for(i in u && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = K.get(t, "display")), "none" === (u = _.css(t, "display")) && (c ? u = c : (at([t], !0), c = t.style.display || c, u = _.css(t, "display"), at([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(t, "float") && (l || (d.done(function() {
						p.display = c
					}), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
						p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
					})), l = !1, h) l || (g ? "hidden" in g && (f = g.hidden) : g = K.access(t, "fxshow", {
					display: c
				}), s && (g.hidden = !f), f && at([t], !0), d.done(function() {
					for(i in f || at([t]), K.remove(t, "fxshow"), h) _.style(t, i, h[i])
				})), l = he(f ? g[i] : 0, i, d), i in g || (g[i] = l.start, f && (l.end = l.start, l.start = 0))
		}],
		prefilter: function(t, e) {
			e ? pe.prefilters.unshift(t) : pe.prefilters.push(t)
		}
	}), _.speed = function(t, e, n) {
		var i = t && "object" == typeof t ? _.extend({}, t) : {
			complete: n || !n && e || b(t) && t,
			duration: t,
			easing: n && e || e && !b(e) && e
		};
		return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			b(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
		}, i
	}, _.fn.extend({
		fadeTo: function(t, e, n, i) {
			return this.filter(tt).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, n, i)
		},
		animate: function(e, t, n, i) {
			var o = _.isEmptyObject(e),
				s = _.speed(t, n, i),
				i = function() {
					var t = pe(this, _.extend({}, e), s);
					(o || K.get(this, "finish")) && t.stop(!0)
				};
			return i.finish = i, o || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
		},
		stop: function(o, t, s) {
			function r(t) {
				var e = t.stop;
				delete t.stop, e(s)
			}
			return "string" != typeof o && (s = t, t = o, o = void 0), t && !1 !== o && this.queue(o || "fx", []), this.each(function() {
				var t = !0,
					e = null != o && o + "queueHooks",
					n = _.timers,
					i = K.get(this);
				if(e) i[e] && i[e].stop && r(i[e]);
				else
					for(e in i) i[e] && i[e].stop && le.test(e) && r(i[e]);
				for(e = n.length; e--;) n[e].elem !== this || null != o && n[e].queue !== o || (n[e].anim.stop(s), t = !1, n.splice(e, 1));
				!t && s || _.dequeue(this, o)
			})
		},
		finish: function(r) {
			return !1 !== r && (r = r || "fx"), this.each(function() {
				var t, e = K.get(this),
					n = e[r + "queue"],
					i = e[r + "queueHooks"],
					o = _.timers,
					s = n ? n.length : 0;
				for(e.finish = !0, _.queue(this, r, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === r && (o[t].anim.stop(!0), o.splice(t, 1));
				for(t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
				delete e.finish
			})
		}
	}), _.each(["toggle", "show", "hide"], function(t, i) {
		var o = _.fn[i];
		_.fn[i] = function(t, e, n) {
			return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(de(i, !0), t, e, n)
		}
	}), _.each({
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
	}, function(t, i) {
		_.fn[t] = function(t, e, n) {
			return this.animate(i, t, e, n)
		}
	}), _.timers = [], _.fx.tick = function() {
		var t, e = 0,
			n = _.timers;
		for(se = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
		n.length || _.fx.stop(), se = void 0
	}, _.fx.timer = function(t) {
		_.timers.push(t), _.fx.start()
	}, _.fx.interval = 13, _.fx.start = function() {
		re || (re = !0, ce())
	}, _.fx.stop = function() {
		re = null
	}, _.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, _.fn.delay = function(i, t) {
		return i = _.fx && _.fx.speeds[i] || i, t = t || "fx", this.queue(t, function(t, e) {
			var n = C.setTimeout(t, i);
			e.stop = function() {
				C.clearTimeout(n)
			}
		})
	}, e = S.createElement("input"), nt = S.createElement("select").appendChild(S.createElement("option")), e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = nt.selected, (e = S.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value;
	var fe, ge = _.expr.attrHandle;
	_.fn.extend({
		attr: function(t, e) {
			return q(this, _.attr, t, e, 1 < arguments.length)
		},
		removeAttr: function(t) {
			return this.each(function() {
				_.removeAttr(this, t)
			})
		}
	}), _.extend({
		attr: function(t, e, n) {
			var i, o, s = t.nodeType;
			if(3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? _.prop(t, e, n) : (1 === s && _.isXMLDoc(t) || (o = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? fe : void 0)), void 0 !== n ? null === n ? void _.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : !(o && "get" in o && null !== (i = o.get(t, e))) && null == (i = _.find.attr(t, e)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if(!y.radioValue && "radio" === e && E(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		},
		removeAttr: function(t, e) {
			var n, i = 0,
				o = e && e.match(O);
			if(o && 1 === t.nodeType)
				for(; n = o[i++];) t.removeAttribute(n)
		}
	}), fe = {
		set: function(t, e, n) {
			return !1 === e ? _.removeAttr(t, n) : t.setAttribute(n, n), n
		}
	}, _.each(_.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var r = ge[e] || _.find.attr;
		ge[e] = function(t, e, n) {
			var i, o, s = e.toLowerCase();
			return n || (o = ge[s], ge[s] = i, i = null != r(t, e, n) ? s : null, ge[s] = o), i
		}
	});
	var me = /^(?:input|select|textarea|button)$/i,
		ve = /^(?:a|area)$/i;

	function ye(t) {
		return(t.match(O) || []).join(" ")
	}

	function be(t) {
		return t.getAttribute && t.getAttribute("class") || ""
	}

	function we(t) {
		return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
	}
	_.fn.extend({
		prop: function(t, e) {
			return q(this, _.prop, t, e, 1 < arguments.length)
		},
		removeProp: function(t) {
			return this.each(function() {
				delete this[_.propFix[t] || t]
			})
		}
	}), _.extend({
		prop: function(t, e, n) {
			var i, o, s = t.nodeType;
			if(3 !== s && 8 !== s && 2 !== s) return 1 === s && _.isXMLDoc(t) || (e = _.propFix[e] || e, o = _.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = _.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : me.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), y.optSelected || (_.propHooks.selected = {
		get: function(t) {
			t = t.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(t) {
			t = t.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		_.propFix[this.toLowerCase()] = this
	}), _.fn.extend({
		addClass: function(e) {
			var t, n, i, o, s, r, a = 0;
			if(b(e)) return this.each(function(t) {
				_(this).addClass(e.call(this, t, be(this)))
			});
			if((t = we(e)).length)
				for(; n = this[a++];)
					if(r = be(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
						for(s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						r !== (r = ye(i)) && n.setAttribute("class", r)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, o, s, r, a = 0;
			if(b(e)) return this.each(function(t) {
				_(this).removeClass(e.call(this, t, be(this)))
			});
			if(!arguments.length) return this.attr("class", "");
			if((t = we(e)).length)
				for(; n = this[a++];)
					if(r = be(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
						for(s = 0; o = t[s++];)
							for(; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
						r !== (r = ye(i)) && n.setAttribute("class", r)
					}
			return this
		},
		toggleClass: function(o, e) {
			var s = typeof o,
				r = "string" == s || Array.isArray(o);
			return "boolean" == typeof e && r ? e ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(t) {
				_(this).toggleClass(o.call(this, t, be(this), e), e)
			}) : this.each(function() {
				var t, e, n, i;
				if(r)
					for(e = 0, n = _(this), i = we(o); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
				else void 0 !== o && "boolean" != s || ((t = be(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== o && K.get(this, "__className__") || ""))
			})
		},
		hasClass: function(t) {
			for(var e, n = 0, i = " " + t + " "; e = this[n++];)
				if(1 === e.nodeType && -1 < (" " + ye(be(e)) + " ").indexOf(i)) return !0;
			return !1
		}
	});
	var xe = /\r/g;
	_.fn.extend({
		val: function(e) {
			var n, t, i, o = this[0];
			return arguments.length ? (i = b(e), this.each(function(t) {
				1 === this.nodeType && (null == (t = i ? e.call(this, t, _(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = _.map(t, function(t) {
					return null == t ? "" : t + ""
				})), (n = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
			})) : o ? (n = _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(o, "value")) ? t : "string" == typeof(t = o.value) ? t.replace(xe, "") : null == t ? "" : t : void 0
		}
	}), _.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = _.find.attr(t, "value");
					return null != e ? e : ye(_.text(t))
				}
			},
			select: {
				get: function(t) {
					for(var e, n = t.options, i = t.selectedIndex, o = "select-one" === t.type, s = o ? null : [], r = o ? i + 1 : n.length, a = i < 0 ? r : o ? i : 0; a < r; a++)
						if(((e = n[a]).selected || a === i) && !e.disabled && (!e.parentNode.disabled || !E(e.parentNode, "optgroup"))) {
							if(e = _(e).val(), o) return e;
							s.push(e)
						}
					return s
				},
				set: function(t, e) {
					for(var n, i, o = t.options, s = _.makeArray(e), r = o.length; r--;)((i = o[r]).selected = -1 < _.inArray(_.valHooks.option.get(i), s)) && (n = !0);
					return n || (t.selectedIndex = -1), s
				}
			}
		}
	}), _.each(["radio", "checkbox"], function() {
		_.valHooks[this] = {
			set: function(t, e) {
				if(Array.isArray(e)) return t.checked = -1 < _.inArray(_(t).val(), e)
			}
		}, y.checkOn || (_.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	}), y.focusin = "onfocusin" in C;

	function Ce(t) {
		t.stopPropagation()
	}
	var Se = /^(?:focusinfocus|focusoutblur)$/;
	_.extend(_.event, {
		trigger: function(t, e, n, i) {
			var o, s, r, a, l, c, u, d = [n || S],
				h = v.call(t, "type") ? t.type : t,
				p = v.call(t, "namespace") ? t.namespace.split(".") : [],
				f = u = s = n = n || S;
			if(3 !== n.nodeType && 8 !== n.nodeType && !Se.test(h + _.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, (t = t[_.expando] ? t : new _.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : _.makeArray(e, [t]), c = _.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
				if(!i && !c.noBubble && !g(n)) {
					for(r = c.delegateType || h, Se.test(r + h) || (f = f.parentNode); f; f = f.parentNode) d.push(f), s = f;
					s === (n.ownerDocument || S) && d.push(s.defaultView || s.parentWindow || C)
				}
				for(o = 0;
					(f = d[o++]) && !t.isPropagationStopped();) u = f, t.type = 1 < o ? r : c.bindType || h, (l = (K.get(f, "events") || {})[t.type] && K.get(f, "handle")) && l.apply(f, e), (l = a && f[a]) && l.apply && X(f) && (t.result = l.apply(f, e), !1 === t.result && t.preventDefault());
				return t.type = h, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), e) || !X(n) || a && b(n[h]) && !g(n) && ((s = n[a]) && (n[a] = null), _.event.triggered = h, t.isPropagationStopped() && u.addEventListener(h, Ce), n[h](), t.isPropagationStopped() && u.removeEventListener(h, Ce), _.event.triggered = void 0, s && (n[a] = s)), t.result
			}
		},
		simulate: function(t, e, n) {
			t = _.extend(new _.Event, n, {
				type: t,
				isSimulated: !0
			});
			_.event.trigger(t, null, e)
		}
	}), _.fn.extend({
		trigger: function(t, e) {
			return this.each(function() {
				_.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var n = this[0];
			if(n) return _.event.trigger(t, e, n, !0)
		}
	}), y.focusin || _.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, i) {
		function o(t) {
			_.event.simulate(i, t.target, _.event.fix(t))
		}
		_.event.special[i] = {
			setup: function() {
				var t = this.ownerDocument || this,
					e = K.access(t, i);
				e || t.addEventListener(n, o, !0), K.access(t, i, (e || 0) + 1)
			},
			teardown: function() {
				var t = this.ownerDocument || this,
					e = K.access(t, i) - 1;
				e ? K.access(t, i, e) : (t.removeEventListener(n, o, !0), K.remove(t, i))
			}
		}
	});
	var _e = C.location,
		Te = Date.now(),
		ke = /\?/;
	_.parseXML = function(t) {
		var e;
		if(!t || "string" != typeof t) return null;
		try {
			e = (new C.DOMParser).parseFromString(t, "text/xml")
		} catch(t) {
			e = void 0
		}
		return e && !e.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), e
	};
	var Ee = /\[\]$/,
		Ae = /\r?\n/g,
		Ie = /^(?:submit|button|image|reset|file)$/i,
		De = /^(?:input|select|textarea|keygen)/i;
	_.param = function(t, e) {
		function n(t, e) {
			e = b(e) ? e() : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e)
		}
		var i, o = [];
		if(Array.isArray(t) || t.jquery && !_.isPlainObject(t)) _.each(t, function() {
			n(this.name, this.value)
		});
		else
			for(i in t) ! function n(i, t, o, s) {
				if(Array.isArray(t)) _.each(t, function(t, e) {
					o || Ee.test(i) ? s(i, e) : n(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, o, s)
				});
				else if(o || "object" !== f(t)) s(i, t);
				else
					for(var e in t) n(i + "[" + e + "]", t[e], o, s)
			}(i, t[i], e, n);
		return o.join("&")
	}, _.fn.extend({
		serialize: function() {
			return _.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = _.prop(this, "elements");
				return t ? _.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !_(this).is(":disabled") && De.test(this.nodeName) && !Ie.test(t) && (this.checked || !lt.test(t))
			}).map(function(t, e) {
				var n = _(this).val();
				return null == n ? null : Array.isArray(n) ? _.map(n, function(t) {
					return {
						name: e.name,
						value: t.replace(Ae, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(Ae, "\r\n")
				}
			}).get()
		}
	});
	var $e = /%20/g,
		Pe = /#.*$/,
		Le = /([?&])_=[^&]*/,
		Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Oe = /^(?:GET|HEAD)$/,
		Me = /^\/\//,
		je = {},
		He = {},
		Be = "*/".concat("*"),
		Re = S.createElement("a");

	function Fe(s) {
		return function(t, e) {
			"string" != typeof t && (e = t, t = "*");
			var n, i = 0,
				o = t.toLowerCase().match(O) || [];
			if(b(e))
				for(; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(e)) : (s[n] = s[n] || []).push(e)
		}
	}

	function qe(e, i, o, s) {
		var r = {},
			a = e === He;

		function l(t) {
			var n;
			return r[t] = !0, _.each(e[t] || [], function(t, e) {
				e = e(i, o, s);
				return "string" != typeof e || a || r[e] ? a ? !(n = e) : void 0 : (i.dataTypes.unshift(e), l(e), !1)
			}), n
		}
		return l(i.dataTypes[0]) || !r["*"] && l("*")
	}

	function ze(t, e) {
		var n, i, o = _.ajaxSettings.flatOptions || {};
		for(n in e) void 0 !== e[n] && ((o[n] ? t : i = i || {})[n] = e[n]);
		return i && _.extend(!0, t, i), t
	}
	Re.href = _e.href, _.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: _e.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_e.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Be,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": _.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? ze(ze(t, _.ajaxSettings), e) : ze(_.ajaxSettings, t)
		},
		ajaxPrefilter: Fe(je),
		ajaxTransport: Fe(He),
		ajax: function(t, e) {
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var l, c, u, n, d, i, h, p, o, f = _.ajaxSetup({}, e),
				g = f.context || f,
				m = f.context && (g.nodeType || g.jquery) ? _(g) : _.event,
				v = _.Deferred(),
				y = _.Callbacks("once memory"),
				b = f.statusCode || {},
				s = {},
				r = {},
				a = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if(h) {
							if(!n)
								for(n = {}; e = Ne.exec(u);) n[e[1].toLowerCase()] = e[2];
							e = n[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return h ? u : null
					},
					setRequestHeader: function(t, e) {
						return null == h && (t = r[t.toLowerCase()] = r[t.toLowerCase()] || t, s[t] = e), this
					},
					overrideMimeType: function(t) {
						return null == h && (f.mimeType = t), this
					},
					statusCode: function(t) {
						if(t)
							if(h) w.always(t[w.status]);
							else
								for(var e in t) b[e] = [b[e], t[e]];
						return this
					},
					abort: function(t) {
						t = t || a;
						return l && l.abort(t), x(0, t), this
					}
				};
			if(v.promise(w), f.url = ((t || f.url || _e.href) + "").replace(Me, _e.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(O) || [""], null == f.crossDomain) {
				i = S.createElement("a");
				try {
					i.href = f.url, i.href = i.href, f.crossDomain = Re.protocol + "//" + Re.host != i.protocol + "//" + i.host
				} catch(t) {
					f.crossDomain = !0
				}
			}
			if(f.data && f.processData && "string" != typeof f.data && (f.data = _.param(f.data, f.traditional)), qe(je, f, e, w), h) return w;
			for(o in (p = _.event && f.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Oe.test(f.type), c = f.url.replace(Pe, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace($e, "+")) : (t = f.url.slice(c.length), f.data && (f.processData || "string" == typeof f.data) && (c += (ke.test(c) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (c = c.replace(Le, "$1"), t = (ke.test(c) ? "&" : "?") + "_=" + Te++ + t), f.url = c + t), f.ifModified && (_.lastModified[c] && w.setRequestHeader("If-Modified-Since", _.lastModified[c]), _.etag[c] && w.setRequestHeader("If-None-Match", _.etag[c])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : f.accepts["*"]), f.headers) w.setRequestHeader(o, f.headers[o]);
			if(f.beforeSend && (!1 === f.beforeSend.call(g, w, f) || h)) return w.abort();
			if(a = "abort", y.add(f.complete), w.done(f.success), w.fail(f.error), l = qe(He, f, e, w)) {
				if(w.readyState = 1, p && m.trigger("ajaxSend", [w, f]), h) return w;
				f.async && 0 < f.timeout && (d = C.setTimeout(function() {
					w.abort("timeout")
				}, f.timeout));
				try {
					h = !1, l.send(s, x)
				} catch(t) {
					if(h) throw t;
					x(-1, t)
				}
			} else x(-1, "No Transport");

			function x(t, e, n, i) {
				var o, s, r, a = e;
				h || (h = !0, d && C.clearTimeout(d), l = void 0, u = i || "", w.readyState = 0 < t ? 4 : 0, i = 200 <= t && t < 300 || 304 === t, n && (r = function(t, e, n) {
					for(var i, o, s, r, a = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
					if(i)
						for(o in a)
							if(a[o] && a[o].test(i)) {
								l.unshift(o);
								break
							}
					if(l[0] in n) s = l[0];
					else {
						for(o in n) {
							if(!l[0] || t.converters[o + " " + l[0]]) {
								s = o;
								break
							}
							r = r || o
						}
						s = s || r
					}
					if(s) return s !== l[0] && l.unshift(s), n[s]
				}(f, w, n)), r = function(t, e, n, i) {
					var o, s, r, a, l, c = {},
						u = t.dataTypes.slice();
					if(u[1])
						for(r in t.converters) c[r.toLowerCase()] = t.converters[r];
					for(s = u.shift(); s;)
						if(t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
							if("*" === s) s = l;
							else if("*" !== l && l !== s) {
						if(!(r = c[l + " " + s] || c["* " + s]))
							for(o in c)
								if((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
									!0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], u.unshift(a[1]));
									break
								}
						if(!0 !== r)
							if(r && t.throws) e = r(e);
							else try {
								e = r(e)
							} catch(t) {
								return {
									state: "parsererror",
									error: r ? t : "No conversion from " + l + " to " + s
								}
							}
					}
					return {
						state: "success",
						data: e
					}
				}(f, r, w, i), i ? (f.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (_.lastModified[c] = n), (n = w.getResponseHeader("etag")) && (_.etag[c] = n)), 204 === t || "HEAD" === f.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = r.state, o = r.data, i = !(s = r.error))) : (s = a, !t && a || (a = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || a) + "", i ? v.resolveWith(g, [o, a, w]) : v.rejectWith(g, [w, a, s]), w.statusCode(b), b = void 0, p && m.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? o : s]), y.fireWith(g, [w, a]), p && (m.trigger("ajaxComplete", [w, f]), --_.active || _.event.trigger("ajaxStop")))
			}
			return w
		},
		getJSON: function(t, e, n) {
			return _.get(t, e, n, "json")
		},
		getScript: function(t, e) {
			return _.get(t, void 0, e, "script")
		}
	}), _.each(["get", "post"], function(t, o) {
		_[o] = function(t, e, n, i) {
			return b(e) && (i = i || n, n = e, e = void 0), _.ajax(_.extend({
				url: t,
				type: o,
				dataType: i,
				data: e,
				success: n
			}, _.isPlainObject(t) && t))
		}
	}), _._evalUrl = function(t) {
		return _.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, _.fn.extend({
		wrapAll: function(t) {
			return this[0] && (b(t) && (t = t.call(this[0])), t = _(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for(var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this
		},
		wrapInner: function(n) {
			return b(n) ? this.each(function(t) {
				_(this).wrapInner(n.call(this, t))
			}) : this.each(function() {
				var t = _(this),
					e = t.contents();
				e.length ? e.wrapAll(n) : t.append(n)
			})
		},
		wrap: function(e) {
			var n = b(e);
			return this.each(function(t) {
				_(this).wrapAll(n ? e.call(this, t) : e)
			})
		},
		unwrap: function(t) {
			return this.parent(t).not("body").each(function() {
				_(this).replaceWith(this.childNodes)
			}), this
		}
	}), _.expr.pseudos.hidden = function(t) {
		return !_.expr.pseudos.visible(t)
	}, _.expr.pseudos.visible = function(t) {
		return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
	}, _.ajaxSettings.xhr = function() {
		try {
			return new C.XMLHttpRequest
		} catch(t) {}
	};
	var We = {
			0: 200,
			1223: 204
		},
		Ue = _.ajaxSettings.xhr();
	y.cors = !!Ue && "withCredentials" in Ue, y.ajax = Ue = !!Ue, _.ajaxTransport(function(o) {
		var s, r;
		if(y.cors || Ue && !o.crossDomain) return {
			send: function(t, e) {
				var n, i = o.xhr();
				if(i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
					for(n in o.xhrFields) i[n] = o.xhrFields[n];
				for(n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
				s = function(t) {
					return function() {
						s && (s = r = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(We[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
							binary: i.response
						} : {
							text: i.responseText
						}, i.getAllResponseHeaders()))
					}
				}, i.onload = s(), r = i.onerror = i.ontimeout = s("error"), void 0 !== i.onabort ? i.onabort = r : i.onreadystatechange = function() {
					4 === i.readyState && C.setTimeout(function() {
						s && r()
					})
				}, s = s("abort");
				try {
					i.send(o.hasContent && o.data || null)
				} catch(t) {
					if(s) throw t
				}
			},
			abort: function() {
				s && s()
			}
		}
	}), _.ajaxPrefilter(function(t) {
		t.crossDomain && (t.contents.script = !1)
	}), _.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(t) {
				return _.globalEval(t), t
			}
		}
	}), _.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), _.ajaxTransport("script", function(n) {
		var i, o;
		if(n.crossDomain) return {
			send: function(t, e) {
				i = _("<script>").prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", o = function(t) {
					i.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type)
				}), S.head.appendChild(i[0])
			},
			abort: function() {
				o && o()
			}
		}
	});
	var Ye = [],
		Xe = /(=)\?(?=&|$)|\?\?/;
	_.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = Ye.pop() || _.expando + "_" + Te++;
			return this[t] = !0, t
		}
	}), _.ajaxPrefilter("json jsonp", function(t, e, n) {
		var i, o, s, r = !1 !== t.jsonp && (Xe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(t.data) && "data");
		if(r || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = b(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Xe, "$1" + i) : !1 !== t.jsonp && (t.url += (ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return s || _.error(i + " was not called"), s[0]
		}, t.dataTypes[0] = "json", o = C[i], C[i] = function() {
			s = arguments
		}, n.always(function() {
			void 0 === o ? _(C).removeProp(i) : C[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Ye.push(i)), s && b(o) && o(s[0]), s = o = void 0
		}), "script"
	}), y.createHTMLDocument = ((e = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === e.childNodes.length), _.parseHTML = function(t, e, n) {
		return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (y.createHTMLDocument ? ((i = (e = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, e.head.appendChild(i)) : e = S), i = !n && [], (n = A.exec(t)) ? [e.createElement(n[1])] : (n = gt([t], e, i), i && i.length && _(i).remove(), _.merge([], n.childNodes)));
		var i
	}, _.fn.load = function(t, e, n) {
		var i, o, s, r = this,
			a = t.indexOf(" ");
		return -1 < a && (i = ye(t.slice(a)), t = t.slice(0, a)), b(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < r.length && _.ajax({
			url: t,
			type: o || "GET",
			dataType: "html",
			data: e
		}).done(function(t) {
			s = arguments, r.html(i ? _("<div>").append(_.parseHTML(t)).find(i) : t)
		}).always(n && function(t, e) {
			r.each(function() {
				n.apply(this, s || [t.responseText, e, t])
			})
		}), this
	}, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		_.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), _.expr.pseudos.animated = function(e) {
		return _.grep(_.timers, function(t) {
			return e === t.elem
		}).length
	}, _.offset = {
		setOffset: function(t, e, n) {
			var i, o, s, r, a = _.css(t, "position"),
				l = _(t),
				c = {};
			"static" === a && (t.style.position = "relative"), s = l.offset(), i = _.css(t, "top"), r = _.css(t, "left"), r = ("absolute" === a || "fixed" === a) && -1 < (i + r).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(r) || 0), b(e) && (e = e.call(t, n, _.extend({}, s))), null != e.top && (c.top = e.top - s.top + o), null != e.left && (c.left = e.left - s.left + r), "using" in e ? e.using.call(t, c) : l.css(c)
		}
	}, _.fn.extend({
		offset: function(e) {
			if(arguments.length) return void 0 === e ? this : this.each(function(t) {
				_.offset.setOffset(this, e, t)
			});
			var t, n = this[0];
			return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
				top: t.top + n.pageYOffset,
				left: t.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if(this[0]) {
				var t, e, n, i = this[0],
					o = {
						top: 0,
						left: 0
					};
				if("fixed" === _.css(i, "position")) e = i.getBoundingClientRect();
				else {
					for(e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === _.css(t, "position");) t = t.parentNode;
					t && t !== i && 1 === t.nodeType && ((o = _(t).offset()).top += _.css(t, "borderTopWidth", !0), o.left += _.css(t, "borderLeftWidth", !0))
				}
				return {
					top: e.top - o.top - _.css(i, "marginTop", !0),
					left: e.left - o.left - _.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var t = this.offsetParent; t && "static" === _.css(t, "position");) t = t.offsetParent;
				return t || mt
			})
		}
	}), _.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, o) {
		var s = "pageYOffset" === o;
		_.fn[e] = function(t) {
			return q(this, function(t, e, n) {
				var i;
				return g(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n ? i ? i[o] : t[e] : void(i ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset) : t[e] = n)
			}, e, t, arguments.length)
		}
	}), _.each(["top", "left"], function(t, n) {
		_.cssHooks[n] = Ut(y.pixelPosition, function(t, e) {
			if(e) return e = Wt(t, n), Ft.test(e) ? _(t).position()[n] + "px" : e
		})
	}), _.each({
		Height: "height",
		Width: "width"
	}, function(r, a) {
		_.each({
			padding: "inner" + r,
			content: a,
			"": "outer" + r
		}, function(i, s) {
			_.fn[s] = function(t, e) {
				var n = arguments.length && (i || "boolean" != typeof t),
					o = i || (!0 === t || !0 === e ? "margin" : "border");
				return q(this, function(t, e, n) {
					var i;
					return g(t) ? 0 === s.indexOf("outer") ? t["inner" + r] : t.document.documentElement["client" + r] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + r], i["scroll" + r], t.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? _.css(t, e, o) : _.style(t, e, n, o)
				}, a, n ? t : void 0, n)
			}
		})
	}), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
		_.fn[n] = function(t, e) {
			return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
		}
	}), _.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}
	}), _.fn.extend({
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
	}), _.proxy = function(t, e) {
		var n, i;
		if("string" == typeof e && (i = t[e], e = t, t = i), b(t)) return n = a.call(arguments, 2), (i = function() {
			return t.apply(e || this, n.concat(a.call(arguments)))
		}).guid = t.guid = t.guid || _.guid++, i
	}, _.holdReady = function(t) {
		t ? _.readyWait++ : _.ready(!0)
	}, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = E, _.isFunction = b, _.isWindow = g, _.camelCase = Y, _.type = f, _.now = Date.now, _.isNumeric = function(t) {
		var e = _.type(t);
		return("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return _
	});
	var Ve = C.jQuery,
		Ke = C.$;
	return _.noConflict = function(t) {
		return C.$ === _ && (C.$ = Ke), t && C.jQuery === _ && (C.jQuery = Ve), _
	}, t || (C.jQuery = C.$ = _), _
}),
function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, o) {
	"use strict";

	function i(t, e) {
		for(var n = 0; n < e.length; n++) {
			var i = e[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function C(t, e, n) {
		return e && i(t.prototype, e), n && i(t, n), t
	}

	function S() {
		return(S = Object.assign || function(t) {
			for(var e = 1; e < arguments.length; e++) {
				var n, i = arguments[e];
				for(n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
			}
			return t
		}).apply(this, arguments)
	}
	e = e && e.hasOwnProperty("default") ? e.default : e, o = o && o.hasOwnProperty("default") ? o.default : o;
	var s, n, r, a, l, c, u, d, h, p, f, g, m, v, y, b, w, x, _, T, k, E, A, I, D, $, P, L, N, O, M, j, H, B, R, F, q, z, W, U, Y, X, V, K, Q, G, Z, J, tt, et, nt, it, ot, st, rt, at, lt, ct, ut, dt, ht, pt, ft, gt, mt, vt, yt = (gt = e, mt = !1, vt = {
			TRANSITION_END: "bsTransitionEnd",
			getUID: function(t) {
				for(; t += ~~(1e6 * Math.random()), document.getElementById(t););
				return t
			},
			getSelectorFromElement: function(t) {
				var e = t.getAttribute("data-target");
				e && "#" !== e || (e = t.getAttribute("href") || ""), "#" === e.charAt(0) && (t = e, e = t = "function" == typeof gt.escapeSelector ? gt.escapeSelector(t).substr(1) : t.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
				try {
					return 0 < gt(document).find(e).length ? e : null
				} catch(t) {
					return null
				}
			},
			reflow: function(t) {
				return t.offsetHeight
			},
			triggerTransitionEnd: function(t) {
				gt(t).trigger(mt.end)
			},
			supportsTransitionEnd: function() {
				return Boolean(mt)
			},
			isElement: function(t) {
				return(t[0] || t).nodeType
			},
			typeCheckConfig: function(t, e, n) {
				for(var i in n)
					if(Object.prototype.hasOwnProperty.call(n, i)) {
						var o = n[i],
							s = e[i],
							s = s && vt.isElement(s) ? "element" : {}.toString.call(s).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
						if(!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
					}
			}
		}, mt = ("undefined" == typeof window || !window.QUnit) && {
			end: "transitionend"
		}, gt.fn.emulateTransitionEnd = function(t) {
			var e = this,
				n = !1;
			return gt(this).one(vt.TRANSITION_END, function() {
				n = !0
			}), setTimeout(function() {
				n || vt.triggerTransitionEnd(e)
			}, t), this
		}, vt.supportsTransitionEnd() && (gt.event.special[vt.TRANSITION_END] = {
			bindType: mt.end,
			delegateType: mt.end,
			handle: function(t) {
				if(gt(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
			}
		}), vt),
		bt = (n = "alert", Ct = "." + (r = "bs.alert"), a = (s = e).fn[n], l = {
			CLOSE: "close" + Ct,
			CLOSED: "closed" + Ct,
			CLICK_DATA_API: "click" + Ct + ".data-api"
		}, (ft = $t.prototype).close = function(t) {
			t = t || this._element;
			t = this._getRootElement(t);
			this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
		}, ft.dispose = function() {
			s.removeData(this._element, r), this._element = null
		}, ft._getRootElement = function(t) {
			var e = yt.getSelectorFromElement(t),
				n = !1;
			return e && (n = s(e)[0]), n = n || s(t).closest(".alert")[0]
		}, ft._triggerCloseEvent = function(t) {
			var e = s.Event(l.CLOSE);
			return s(t).trigger(e), e
		}, ft._removeElement = function(e) {
			var n = this;
			s(e).removeClass("show"), yt.supportsTransitionEnd() && s(e).hasClass("fade") ? s(e).one(yt.TRANSITION_END, function(t) {
				return n._destroyElement(e, t)
			}).emulateTransitionEnd(150) : this._destroyElement(e)
		}, ft._destroyElement = function(t) {
			s(t).detach().trigger(l.CLOSED).remove()
		}, $t._jQueryInterface = function(n) {
			return this.each(function() {
				var t = s(this),
					e = t.data(r);
				e || (e = new $t(this), t.data(r, e)), "close" === n && e[n](this)
			})
		}, $t._handleDismiss = function(e) {
			return function(t) {
				t && t.preventDefault(), e.close(this)
			}
		}, C($t, null, [{
			key: "VERSION",
			get: function() {
				return "4.0.0"
			}
		}]), c = $t, s(document).on(l.CLICK_DATA_API, '[data-dismiss="alert"]', c._handleDismiss(new c)), s.fn[n] = c._jQueryInterface, s.fn[n].Constructor = c, s.fn[n].noConflict = function() {
			return s.fn[n] = a, c._jQueryInterface
		}, c),
		wt = (d = "button", St = "." + (h = "bs.button"), _t = ".data-api", p = (u = e).fn[d], f = "active", kt = '[data-toggle^="button"]', Tt = {
			CLICK_DATA_API: "click" + St + _t,
			FOCUS_BLUR_DATA_API: "focus" + St + _t + " blur" + St + _t
		}, (pt = Dt.prototype).toggle = function() {
			var t = !0,
				e = !0,
				n = u(this._element).closest('[data-toggle="buttons"]')[0];
			if(n) {
				var i, o = u(this._element).find("input")[0];
				if(o) {
					if("radio" === o.type && (o.checked && u(this._element).hasClass(f) ? t = !1 : (i = u(n).find(".active")[0]) && u(i).removeClass(f)), t) {
						if(o.hasAttribute("disabled") || n.hasAttribute("disabled") || o.classList.contains("disabled") || n.classList.contains("disabled")) return;
						o.checked = !u(this._element).hasClass(f), u(o).trigger("change")
					}
					o.focus(), e = !1
				}
			}
			e && this._element.setAttribute("aria-pressed", !u(this._element).hasClass(f)), t && u(this._element).toggleClass(f)
		}, pt.dispose = function() {
			u.removeData(this._element, h), this._element = null
		}, Dt._jQueryInterface = function(e) {
			return this.each(function() {
				var t = u(this).data(h);
				t || (t = new Dt(this), u(this).data(h, t)), "toggle" === e && t[e]()
			})
		}, C(Dt, null, [{
			key: "VERSION",
			get: function() {
				return "4.0.0"
			}
		}]), g = Dt, u(document).on(Tt.CLICK_DATA_API, kt, function(t) {
			t.preventDefault();
			t = t.target;
			u(t).hasClass("btn") || (t = u(t).closest(".btn")), g._jQueryInterface.call(u(t), "toggle")
		}).on(Tt.FOCUS_BLUR_DATA_API, kt, function(t) {
			var e = u(t.target).closest(".btn")[0];
			u(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
		}), u.fn[d] = g._jQueryInterface, u.fn[d].Constructor = g, u.fn[d].noConflict = function() {
			return u.fn[d] = p, g._jQueryInterface
		}, g),
		xt = function(u) {
			var t, e = "carousel",
				o = "bs.carousel",
				n = "." + o,
				i = u.fn[e],
				s = {
					interval: 5e3,
					keyboard: !0,
					slide: !1,
					pause: "hover",
					wrap: !0
				},
				r = {
					interval: "(number|boolean)",
					keyboard: "boolean",
					slide: "(boolean|string)",
					pause: "(string|boolean)",
					wrap: "boolean"
				},
				d = "next",
				a = "prev",
				h = {
					SLIDE: "slide" + n,
					SLID: "slid" + n,
					KEYDOWN: "keydown" + n,
					MOUSEENTER: "mouseenter" + n,
					MOUSELEAVE: "mouseleave" + n,
					TOUCHEND: "touchend" + n,
					LOAD_DATA_API: "load" + n + ".data-api",
					CLICK_DATA_API: "click" + n + ".data-api"
				},
				p = "active",
				l = ".active",
				f = ".active.carousel-item",
				c = ".carousel-item",
				g = ".carousel-item-next, .carousel-item-prev",
				m = ".carousel-indicators",
				v = "[data-slide], [data-slide-to]",
				y = '[data-ride="carousel"]',
				b = ((t = w.prototype).next = function() {
					this._isSliding || this._slide(d)
				}, t.nextWhenVisible = function() {
					!document.hidden && u(this._element).is(":visible") && "hidden" !== u(this._element).css("visibility") && this.next()
				}, t.prev = function() {
					this._isSliding || this._slide(a)
				}, t.pause = function(t) {
					t || (this._isPaused = !0), u(this._element).find(g)[0] && yt.supportsTransitionEnd() && (yt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
				}, t.cycle = function(t) {
					t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
				}, t.to = function(t) {
					var e = this;
					this._activeElement = u(this._element).find(f)[0];
					var n = this._getItemIndex(this._activeElement);
					if(!(t > this._items.length - 1 || t < 0))
						if(this._isSliding) u(this._element).one(h.SLID, function() {
							return e.to(t)
						});
						else {
							if(n === t) return this.pause(), void this.cycle();
							n = n < t ? d : a;
							this._slide(n, this._items[t])
						}
				}, t.dispose = function() {
					u(this._element).off(n), u.removeData(this._element, o), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
				}, t._getConfig = function(t) {
					return t = S({}, s, t), yt.typeCheckConfig(e, t, r), t
				}, t._addEventListeners = function() {
					var e = this;
					this._config.keyboard && u(this._element).on(h.KEYDOWN, function(t) {
						return e._keydown(t)
					}), "hover" === this._config.pause && (u(this._element).on(h.MOUSEENTER, function(t) {
						return e.pause(t)
					}).on(h.MOUSELEAVE, function(t) {
						return e.cycle(t)
					}), "ontouchstart" in document.documentElement && u(this._element).on(h.TOUCHEND, function() {
						e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
							return e.cycle(t)
						}, 500 + e._config.interval)
					}))
				}, t._keydown = function(t) {
					if(!/input|textarea/i.test(t.target.tagName)) switch(t.which) {
						case 37:
							t.preventDefault(), this.prev();
							break;
						case 39:
							t.preventDefault(), this.next()
					}
				}, t._getItemIndex = function(t) {
					return this._items = u.makeArray(u(t).parent().find(c)), this._items.indexOf(t)
				}, t._getItemByDirection = function(t, e) {
					var n = t === d,
						i = t === a,
						o = this._getItemIndex(e),
						s = this._items.length - 1;
					if((i && 0 === o || n && o === s) && !this._config.wrap) return e;
					t = (o + (t === a ? -1 : 1)) % this._items.length;
					return -1 == t ? this._items[this._items.length - 1] : this._items[t]
				}, t._triggerSlideEvent = function(t, e) {
					var n = this._getItemIndex(t),
						i = this._getItemIndex(u(this._element).find(f)[0]),
						n = u.Event(h.SLIDE, {
							relatedTarget: t,
							direction: e,
							from: i,
							to: n
						});
					return u(this._element).trigger(n), n
				}, t._setActiveIndicatorElement = function(t) {
					this._indicatorsElement && (u(this._indicatorsElement).find(l).removeClass(p), (t = this._indicatorsElement.children[this._getItemIndex(t)]) && u(t).addClass(p))
				}, t._slide = function(t, e) {
					var n, i, o, s = this,
						r = u(this._element).find(f)[0],
						a = this._getItemIndex(r),
						l = e || r && this._getItemByDirection(t, r),
						c = this._getItemIndex(l),
						e = Boolean(this._interval),
						t = t === d ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right");
					l && u(l).hasClass(p) ? this._isSliding = !1 : !this._triggerSlideEvent(l, t).isDefaultPrevented() && r && l && (this._isSliding = !0, e && this.pause(), this._setActiveIndicatorElement(l), o = u.Event(h.SLID, {
						relatedTarget: l,
						direction: t,
						from: a,
						to: c
					}), yt.supportsTransitionEnd() && u(this._element).hasClass("slide") ? (u(l).addClass(i), yt.reflow(l), u(r).addClass(n), u(l).addClass(n), u(r).one(yt.TRANSITION_END, function() {
						u(l).removeClass(n + " " + i).addClass(p), u(r).removeClass(p + " " + i + " " + n), s._isSliding = !1, setTimeout(function() {
							return u(s._element).trigger(o)
						}, 0)
					}).emulateTransitionEnd(600)) : (u(r).removeClass(p), u(l).addClass(p), this._isSliding = !1, u(this._element).trigger(o)), e && this.cycle())
				}, w._jQueryInterface = function(i) {
					return this.each(function() {
						var t = u(this).data(o),
							e = S({}, s, u(this).data());
						"object" == typeof i && (e = S({}, e, i));
						var n = "string" == typeof i ? i : e.slide;
						if(t || (t = new w(this, e), u(this).data(o, t)), "number" == typeof i) t.to(i);
						else if("string" == typeof n) {
							if(void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
							t[n]()
						} else e.interval && (t.pause(), t.cycle())
					})
				}, w._dataApiClickHandler = function(t) {
					var e, n, i = yt.getSelectorFromElement(this);
					!i || (e = u(i)[0]) && u(e).hasClass("carousel") && (n = S({}, u(e).data(), u(this).data()), (i = this.getAttribute("data-slide-to")) && (n.interval = !1), w._jQueryInterface.call(u(e), n), i && u(e).data(o).to(i), t.preventDefault())
				}, C(w, null, [{
					key: "VERSION",
					get: function() {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function() {
						return s
					}
				}]), w);

			function w(t, e) {
				this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = u(t)[0], this._indicatorsElement = u(this._element).find(m)[0], this._addEventListeners()
			}
			return u(document).on(h.CLICK_DATA_API, v, b._dataApiClickHandler), u(window).on(h.LOAD_DATA_API, function() {
				u(y).each(function() {
					var t = u(this);
					b._jQueryInterface.call(t, t.data())
				})
			}), u.fn[e] = b._jQueryInterface, u.fn[e].Constructor = b, u.fn[e].noConflict = function() {
				return u.fn[e] = i, b._jQueryInterface
			}, b
		}(e),
		Ct = function(r) {
			var e = "collapse",
				s = "bs.collapse",
				t = "." + s,
				n = r.fn[e],
				o = {
					toggle: !0,
					parent: ""
				},
				i = {
					toggle: "boolean",
					parent: "(string|element)"
				},
				a = {
					SHOW: "show" + t,
					SHOWN: "shown" + t,
					HIDE: "hide" + t,
					HIDDEN: "hidden" + t,
					CLICK_DATA_API: "click" + t + ".data-api"
				},
				l = "show",
				c = "collapse",
				u = "collapsing",
				d = "collapsed",
				h = ".show, .collapsing",
				p = '[data-toggle="collapse"]',
				f = ((t = g.prototype).toggle = function() {
					r(this._element).hasClass(l) ? this.hide() : this.show()
				}, t.show = function() {
					var t, e, n, i, o = this;
					this._isTransitioning || r(this._element).hasClass(l) || (this._parent && 0 === (i = r.makeArray(r(this._parent).find(h).filter('[data-parent="' + this._config.parent + '"]'))).length && (i = null), i && (n = r(i).not(this._selector).data(s)) && n._isTransitioning) || (t = r.Event(a.SHOW), r(this._element).trigger(t), t.isDefaultPrevented() || (i && (g._jQueryInterface.call(r(i).not(this._selector), "hide"), n || r(i).data(s, null)), e = this._getDimension(), r(this._element).removeClass(c).addClass(u), (this._element.style[e] = 0) < this._triggerArray.length && r(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0), n = function() {
						r(o._element).removeClass(u).addClass(c).addClass(l), o._element.style[e] = "", o.setTransitioning(!1), r(o._element).trigger(a.SHOWN)
					}, yt.supportsTransitionEnd() ? (i = "scroll" + (e[0].toUpperCase() + e.slice(1)), r(this._element).one(yt.TRANSITION_END, n).emulateTransitionEnd(600), this._element.style[e] = this._element[i] + "px") : n()))
				}, t.hide = function() {
					var t = this;
					if(!this._isTransitioning && r(this._element).hasClass(l)) {
						var e = r.Event(a.HIDE);
						if(r(this._element).trigger(e), !e.isDefaultPrevented()) {
							var n = this._getDimension();
							if(this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", yt.reflow(this._element), r(this._element).addClass(u).removeClass(c).removeClass(l), 0 < this._triggerArray.length)
								for(var i = 0; i < this._triggerArray.length; i++) {
									var o = this._triggerArray[i],
										s = yt.getSelectorFromElement(o);
									null !== s && (r(s).hasClass(l) || r(o).addClass(d).attr("aria-expanded", !1))
								}
							this.setTransitioning(!0);
							e = function() {
								t.setTransitioning(!1), r(t._element).removeClass(u).addClass(c).trigger(a.HIDDEN)
							};
							this._element.style[n] = "", yt.supportsTransitionEnd() ? r(this._element).one(yt.TRANSITION_END, e).emulateTransitionEnd(600) : e()
						}
					}
				}, t.setTransitioning = function(t) {
					this._isTransitioning = t
				}, t.dispose = function() {
					r.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
				}, t._getConfig = function(t) {
					return(t = S({}, o, t)).toggle = Boolean(t.toggle), yt.typeCheckConfig(e, t, i), t
				}, t._getDimension = function() {
					return r(this._element).hasClass("width") ? "width" : "height"
				}, t._getParent = function() {
					var n = this,
						t = null;
					yt.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = r(this._config.parent)[0];
					var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
					return r(t).find(e).each(function(t, e) {
						n._addAriaAndCollapsedClass(g._getTargetFromElement(e), [e])
					}), t
				}, t._addAriaAndCollapsedClass = function(t, e) {
					t && (t = r(t).hasClass(l), 0 < e.length && r(e).toggleClass(d, !t).attr("aria-expanded", t))
				}, g._getTargetFromElement = function(t) {
					t = yt.getSelectorFromElement(t);
					return t ? r(t)[0] : null
				}, g._jQueryInterface = function(i) {
					return this.each(function() {
						var t = r(this),
							e = t.data(s),
							n = S({}, o, t.data(), "object" == typeof i && i);
						if(!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new g(this, n), t.data(s, e)), "string" == typeof i) {
							if(void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
							e[i]()
						}
					})
				}, C(g, null, [{
					key: "VERSION",
					get: function() {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function() {
						return o
					}
				}]), g);

			function g(t, e) {
				this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = r.makeArray(r('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
				for(var n = r(p), i = 0; i < n.length; i++) {
					var o = n[i],
						s = yt.getSelectorFromElement(o);
					null !== s && 0 < r(s).filter(t).length && (this._selector = s, this._triggerArray.push(o))
				}
				this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
			}
			return r(document).on(a.CLICK_DATA_API, p, function(t) {
				"A" === t.currentTarget.tagName && t.preventDefault();
				var n = r(this),
					t = yt.getSelectorFromElement(this);
				r(t).each(function() {
					var t = r(this),
						e = t.data(s) ? "toggle" : n.data();
					f._jQueryInterface.call(t, e)
				})
			}), r.fn[e] = f._jQueryInterface, r.fn[e].Constructor = f, r.fn[e].noConflict = function() {
				return r.fn[e] = n, f._jQueryInterface
			}, f
		}(e),
		St = (J = "dropdown", et = "." + (tt = "bs.dropdown"), ft = ".data-api", nt = (Z = e).fn[J], it = new RegExp("38|40|27"), ot = {
			HIDE: "hide" + et,
			HIDDEN: "hidden" + et,
			SHOW: "show" + et,
			SHOWN: "shown" + et,
			CLICK: "click" + et,
			CLICK_DATA_API: "click" + et + ft,
			KEYDOWN_DATA_API: "keydown" + et + ft,
			KEYUP_DATA_API: "keyup" + et + ft
		}, st = "disabled", rt = "show", at = "dropdown-menu-right", lt = '[data-toggle="dropdown"]', ct = ".dropdown-menu", ut = {
			offset: 0,
			flip: !0,
			boundary: "scrollParent"
		}, dt = {
			offset: "(number|string|function)",
			flip: "boolean",
			boundary: "(string|element)"
		}, (ft = It.prototype).toggle = function() {
			if(!this._element.disabled && !Z(this._element).hasClass(st)) {
				var t = It._getParentFromElement(this._element),
					e = Z(this._menu).hasClass(rt);
				if(It._clearMenus(), !e) {
					var n = {
							relatedTarget: this._element
						},
						e = Z.Event(ot.SHOW, n);
					if(Z(t).trigger(e), !e.isDefaultPrevented()) {
						if(!this._inNavbar) {
							if(void 0 === o) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
							e = this._element;
							Z(t).hasClass("dropup") && (Z(this._menu).hasClass("dropdown-menu-left") || Z(this._menu).hasClass(at)) && (e = t), "scrollParent" !== this._config.boundary && Z(t).addClass("position-static"), this._popper = new o(e, this._menu, this._getPopperConfig())
						}
						"ontouchstart" in document.documentElement && 0 === Z(t).closest(".navbar-nav").length && Z("body").children().on("mouseover", null, Z.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Z(this._menu).toggleClass(rt), Z(t).toggleClass(rt).trigger(Z.Event(ot.SHOWN, n))
					}
				}
			}
		}, ft.dispose = function() {
			Z.removeData(this._element, tt), Z(this._element).off(et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
		}, ft.update = function() {
			this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
		}, ft._addEventListeners = function() {
			var e = this;
			Z(this._element).on(ot.CLICK, function(t) {
				t.preventDefault(), t.stopPropagation(), e.toggle()
			})
		}, ft._getConfig = function(t) {
			return t = S({}, this.constructor.Default, Z(this._element).data(), t), yt.typeCheckConfig(J, t, this.constructor.DefaultType), t
		}, ft._getMenuElement = function() {
			var t;
			return this._menu || (t = It._getParentFromElement(this._element), this._menu = Z(t).find(ct)[0]), this._menu
		}, ft._getPlacement = function() {
			var t = Z(this._element).parent(),
				e = "bottom-start";
			return t.hasClass("dropup") ? (e = "top-start", Z(this._menu).hasClass(at) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : Z(this._menu).hasClass(at) && (e = "bottom-end"), e
		}, ft._detectNavbar = function() {
			return 0 < Z(this._element).closest(".navbar").length
		}, ft._getPopperConfig = function() {
			var e = this,
				t = {};
			return "function" == typeof this._config.offset ? t.fn = function(t) {
				return t.offsets = S({}, t.offsets, e._config.offset(t.offsets) || {}), t
			} : t.offset = this._config.offset, {
				placement: this._getPlacement(),
				modifiers: {
					offset: t,
					flip: {
						enabled: this._config.flip
					},
					preventOverflow: {
						boundariesElement: this._config.boundary
					}
				}
			}
		}, It._jQueryInterface = function(e) {
			return this.each(function() {
				var t = Z(this).data(tt);
				if(t || (t = new It(this, "object" == typeof e ? e : null), Z(this).data(tt, t)), "string" == typeof e) {
					if(void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
					t[e]()
				}
			})
		}, It._clearMenus = function(t) {
			if(!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
				for(var e = Z.makeArray(Z(lt)), n = 0; n < e.length; n++) {
					var i, o = It._getParentFromElement(e[n]),
						s = Z(e[n]).data(tt),
						r = {
							relatedTarget: e[n]
						};
					s && (i = s._menu, !Z(o).hasClass(rt) || t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && Z.contains(o, t.target) || (s = Z.Event(ot.HIDE, r), Z(o).trigger(s), s.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Z("body").children().off("mouseover", null, Z.noop), e[n].setAttribute("aria-expanded", "false"), Z(i).removeClass(rt), Z(o).removeClass(rt).trigger(Z.Event(ot.HIDDEN, r)))))
				}
		}, It._getParentFromElement = function(t) {
			var e, n = yt.getSelectorFromElement(t);
			return n && (e = Z(n)[0]), e || t.parentNode
		}, It._dataApiKeydownHandler = function(t) {
			var e, n, i;
			(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || Z(t.target).closest(ct).length) : !it.test(t.which)) || (t.preventDefault(), t.stopPropagation(), this.disabled || Z(this).hasClass(st)) || (i = It._getParentFromElement(this), ((n = Z(i).hasClass(rt)) || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which) ? 0 !== (e = Z(i).find(".dropdown-menu .dropdown-item:not(.disabled)").get()).length && (n = e.indexOf(t.target), 38 === t.which && 0 < n && n--, 40 === t.which && n < e.length - 1 && n++, n < 0 && (n = 0), e[n].focus()) : (27 === t.which && (i = Z(i).find(lt)[0], Z(i).trigger("focus")), Z(this).trigger("click")))
		}, C(It, null, [{
			key: "VERSION",
			get: function() {
				return "4.0.0"
			}
		}, {
			key: "Default",
			get: function() {
				return ut
			}
		}, {
			key: "DefaultType",
			get: function() {
				return dt
			}
		}]), ht = It, Z(document).on(ot.KEYDOWN_DATA_API, lt, ht._dataApiKeydownHandler).on(ot.KEYDOWN_DATA_API, ct, ht._dataApiKeydownHandler).on(ot.CLICK_DATA_API + " " + ot.KEYUP_DATA_API, ht._clearMenus).on(ot.CLICK_DATA_API, lt, function(t) {
			t.preventDefault(), t.stopPropagation(), ht._jQueryInterface.call(Z(this), "toggle")
		}).on(ot.CLICK_DATA_API, ".dropdown form", function(t) {
			t.stopPropagation()
		}), Z.fn[J] = ht._jQueryInterface, Z.fn[J].Constructor = ht, Z.fn[J].noConflict = function() {
			return Z.fn[J] = nt, ht._jQueryInterface
		}, ht),
		_t = function(s) {
			var t, r = "bs.modal",
				e = "." + r,
				n = s.fn.modal,
				i = {
					backdrop: !0,
					keyboard: !0,
					focus: !0,
					show: !0
				},
				o = {
					backdrop: "(boolean|string)",
					keyboard: "boolean",
					focus: "boolean",
					show: "boolean"
				},
				a = {
					HIDE: "hide" + e,
					HIDDEN: "hidden" + e,
					SHOW: "show" + e,
					SHOWN: "shown" + e,
					FOCUSIN: "focusin" + e,
					RESIZE: "resize" + e,
					CLICK_DISMISS: "click.dismiss" + e,
					KEYDOWN_DISMISS: "keydown.dismiss" + e,
					MOUSEUP_DISMISS: "mouseup.dismiss" + e,
					MOUSEDOWN_DISMISS: "mousedown.dismiss" + e,
					CLICK_DATA_API: "click" + e + ".data-api"
				},
				l = "modal-open",
				c = "fade",
				u = "show",
				d = ".modal-dialog",
				h = '[data-toggle="modal"]',
				p = '[data-dismiss="modal"]',
				f = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
				g = ".sticky-top",
				m = ".navbar-toggler",
				v = ((t = y.prototype).toggle = function(t) {
					return this._isShown ? this.hide() : this.show(t)
				}, t.show = function(t) {
					var e, n = this;
					this._isTransitioning || this._isShown || (yt.supportsTransitionEnd() && s(this._element).hasClass(c) && (this._isTransitioning = !0), e = s.Event(a.SHOW, {
						relatedTarget: t
					}), s(this._element).trigger(e), this._isShown || e.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), s(document.body).addClass(l), this._setEscapeEvent(), this._setResizeEvent(), s(this._element).on(a.CLICK_DISMISS, p, function(t) {
						return n.hide(t)
					}), s(this._dialog).on(a.MOUSEDOWN_DISMISS, function() {
						s(n._element).one(a.MOUSEUP_DISMISS, function(t) {
							s(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
						})
					}), this._showBackdrop(function() {
						return n._showElement(t)
					})))
				}, t.hide = function(t) {
					var e = this;
					t && t.preventDefault(), !this._isTransitioning && this._isShown && (t = s.Event(a.HIDE), s(this._element).trigger(t), this._isShown && !t.isDefaultPrevented() && (this._isShown = !1, (t = yt.supportsTransitionEnd() && s(this._element).hasClass(c)) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), s(document).off(a.FOCUSIN), s(this._element).removeClass(u), s(this._element).off(a.CLICK_DISMISS), s(this._dialog).off(a.MOUSEDOWN_DISMISS), t ? s(this._element).one(yt.TRANSITION_END, function(t) {
						return e._hideModal(t)
					}).emulateTransitionEnd(300) : this._hideModal()))
				}, t.dispose = function() {
					s.removeData(this._element, r), s(window, document, this._element, this._backdrop).off(e), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
				}, t.handleUpdate = function() {
					this._adjustDialog()
				}, t._getConfig = function(t) {
					return t = S({}, i, t), yt.typeCheckConfig("modal", t, o), t
				}, t._showElement = function(t) {
					var e = this,
						n = yt.supportsTransitionEnd() && s(this._element).hasClass(c);
					this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && yt.reflow(this._element), s(this._element).addClass(u), this._config.focus && this._enforceFocus();
					var i = s.Event(a.SHOWN, {
							relatedTarget: t
						}),
						t = function() {
							e._config.focus && e._element.focus(), e._isTransitioning = !1, s(e._element).trigger(i)
						};
					n ? s(this._dialog).one(yt.TRANSITION_END, t).emulateTransitionEnd(300) : t()
				}, t._enforceFocus = function() {
					var e = this;
					s(document).off(a.FOCUSIN).on(a.FOCUSIN, function(t) {
						document !== t.target && e._element !== t.target && 0 === s(e._element).has(t.target).length && e._element.focus()
					})
				}, t._setEscapeEvent = function() {
					var e = this;
					this._isShown && this._config.keyboard ? s(this._element).on(a.KEYDOWN_DISMISS, function(t) {
						27 === t.which && (t.preventDefault(), e.hide())
					}) : this._isShown || s(this._element).off(a.KEYDOWN_DISMISS)
				}, t._setResizeEvent = function() {
					var e = this;
					this._isShown ? s(window).on(a.RESIZE, function(t) {
						return e.handleUpdate(t)
					}) : s(window).off(a.RESIZE)
				}, t._hideModal = function() {
					var t = this;
					this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
						s(document.body).removeClass(l), t._resetAdjustments(), t._resetScrollbar(), s(t._element).trigger(a.HIDDEN)
					})
				}, t._removeBackdrop = function() {
					this._backdrop && (s(this._backdrop).remove(), this._backdrop = null)
				}, t._showBackdrop = function(t) {
					var e, n = this,
						i = s(this._element).hasClass(c) ? c : "";
					this._isShown && this._config.backdrop ? (e = yt.supportsTransitionEnd() && i, this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && s(this._backdrop).addClass(i), s(this._backdrop).appendTo(document.body), s(this._element).on(a.CLICK_DISMISS, function(t) {
						n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
					}), e && yt.reflow(this._backdrop), s(this._backdrop).addClass(u), t && (e ? s(this._backdrop).one(yt.TRANSITION_END, t).emulateTransitionEnd(150) : t())) : !this._isShown && this._backdrop ? (s(this._backdrop).removeClass(u), e = function() {
						n._removeBackdrop(), t && t()
					}, yt.supportsTransitionEnd() && s(this._element).hasClass(c) ? s(this._backdrop).one(yt.TRANSITION_END, e).emulateTransitionEnd(150) : e()) : t && t()
				}, t._adjustDialog = function() {
					var t = this._element.scrollHeight > document.documentElement.clientHeight;
					!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
				}, t._resetAdjustments = function() {
					this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
				}, t._checkScrollbar = function() {
					var t = document.body.getBoundingClientRect();
					this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
				}, t._setScrollbar = function() {
					var t, e, o = this;
					this._isBodyOverflowing && (s(f).each(function(t, e) {
						var n = s(e)[0].style.paddingRight,
							i = s(e).css("padding-right");
						s(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
					}), s(g).each(function(t, e) {
						var n = s(e)[0].style.marginRight,
							i = s(e).css("margin-right");
						s(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
					}), s(m).each(function(t, e) {
						var n = s(e)[0].style.marginRight,
							i = s(e).css("margin-right");
						s(e).data("margin-right", n).css("margin-right", parseFloat(i) + o._scrollbarWidth + "px")
					}), t = document.body.style.paddingRight, e = s("body").css("padding-right"), s("body").data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px"))
				}, t._resetScrollbar = function() {
					s(f).each(function(t, e) {
						var n = s(e).data("padding-right");
						void 0 !== n && s(e).css("padding-right", n).removeData("padding-right")
					}), s(g + ", " + m).each(function(t, e) {
						var n = s(e).data("margin-right");
						void 0 !== n && s(e).css("margin-right", n).removeData("margin-right")
					});
					var t = s("body").data("padding-right");
					void 0 !== t && s("body").css("padding-right", t).removeData("padding-right")
				}, t._getScrollbarWidth = function() {
					var t = document.createElement("div");
					t.className = "modal-scrollbar-measure", document.body.appendChild(t);
					var e = t.getBoundingClientRect().width - t.clientWidth;
					return document.body.removeChild(t), e
				}, y._jQueryInterface = function(n, i) {
					return this.each(function() {
						var t = s(this).data(r),
							e = S({}, y.Default, s(this).data(), "object" == typeof n && n);
						if(t || (t = new y(this, e), s(this).data(r, t)), "string" == typeof n) {
							if(void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
							t[n](i)
						} else e.show && t.show(i)
					})
				}, C(y, null, [{
					key: "VERSION",
					get: function() {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function() {
						return i
					}
				}]), y);

			function y(t, e) {
				this._config = this._getConfig(e), this._element = t, this._dialog = s(t).find(d)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
			}
			return s(document).on(a.CLICK_DATA_API, h, function(t) {
				var e, n = this,
					i = yt.getSelectorFromElement(this);
				i && (e = s(i)[0]);
				i = s(e).data(r) ? "toggle" : S({}, s(e).data(), s(this).data());
				"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
				var o = s(e).one(a.SHOW, function(t) {
					t.isDefaultPrevented() || o.one(a.HIDDEN, function() {
						s(n).is(":visible") && n.focus()
					})
				});
				v._jQueryInterface.call(s(e), i, this)
			}), s.fn.modal = v._jQueryInterface, s.fn.modal.Constructor = v, s.fn.modal.noConflict = function() {
				return s.fn.modal = n, v._jQueryInterface
			}, v
		}(e),
		Tt = (j = "tooltip", B = "." + (H = "bs.tooltip"), R = (M = e).fn[j], F = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), W = {
			animation: !0,
			template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !(z = {
				AUTO: "auto",
				TOP: "top",
				RIGHT: "right",
				BOTTOM: "bottom",
				LEFT: "left"
			}),
			selector: !(q = {
				animation: "boolean",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
				delay: "(number|object)",
				html: "boolean",
				selector: "(string|boolean)",
				placement: "(string|function)",
				offset: "(number|string)",
				container: "(string|element|boolean)",
				fallbackPlacement: "(string|array)",
				boundary: "(string|element)"
			}),
			placement: "top",
			offset: 0,
			container: !1,
			fallbackPlacement: "flip",
			boundary: "scrollParent"
		}, Y = {
			HIDE: "hide" + B,
			HIDDEN: "hidden" + B,
			SHOW: (U = "show") + B,
			SHOWN: "shown" + B,
			INSERTED: "inserted" + B,
			CLICK: "click" + B,
			FOCUSIN: "focusin" + B,
			FOCUSOUT: "focusout" + B,
			MOUSEENTER: "mouseenter" + B,
			MOUSELEAVE: "mouseleave" + B
		}, X = "fade", V = "show", K = "hover", Q = "focus", (pt = At.prototype).enable = function() {
			this._isEnabled = !0
		}, pt.disable = function() {
			this._isEnabled = !1
		}, pt.toggleEnabled = function() {
			this._isEnabled = !this._isEnabled
		}, pt.toggle = function(t) {
			var e, n;
			this._isEnabled && (t ? (e = this.constructor.DATA_KEY, (n = M(t.currentTarget).data(e)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), M(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)) : M(this.getTipElement()).hasClass(V) ? this._leave(null, this) : this._enter(null, this))
		}, pt.dispose = function() {
			clearTimeout(this._timeout), M.removeData(this.element, this.constructor.DATA_KEY), M(this.element).off(this.constructor.EVENT_KEY), M(this.element).closest(".modal").off("hide.bs.modal"), this.tip && M(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
		}, pt.show = function() {
			var e = this;
			if("none" === M(this.element).css("display")) throw new Error("Please use show on visible elements");
			var t, n, i = M.Event(this.constructor.Event.SHOW);
			this.isWithContent() && this._isEnabled && (M(this.element).trigger(i), t = M.contains(this.element.ownerDocument.documentElement, this.element), !i.isDefaultPrevented() && t && (n = this.getTipElement(), i = yt.getUID(this.constructor.NAME), n.setAttribute("id", i), this.element.setAttribute("aria-describedby", i), this.setContent(), this.config.animation && M(n).addClass(X), t = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement, i = this._getAttachment(t), this.addAttachmentClass(i), t = !1 === this.config.container ? document.body : M(this.config.container), M(n).data(this.constructor.DATA_KEY, this), M.contains(this.element.ownerDocument.documentElement, this.tip) || M(n).appendTo(t), M(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new o(this.element, n, {
				placement: i,
				modifiers: {
					offset: {
						offset: this.config.offset
					},
					flip: {
						behavior: this.config.fallbackPlacement
					},
					arrow: {
						element: ".arrow"
					},
					preventOverflow: {
						boundariesElement: this.config.boundary
					}
				},
				onCreate: function(t) {
					t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
				},
				onUpdate: function(t) {
					e._handlePopperPlacementChange(t)
				}
			}), M(n).addClass(V), "ontouchstart" in document.documentElement && M("body").children().on("mouseover", null, M.noop), n = function() {
				e.config.animation && e._fixTransition();
				var t = e._hoverState;
				e._hoverState = null, M(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
			}, yt.supportsTransitionEnd() && M(this.tip).hasClass(X) ? M(this.tip).one(yt.TRANSITION_END, n).emulateTransitionEnd(At._TRANSITION_DURATION) : n()))
		}, pt.hide = function(t) {
			function e() {
				n._hoverState !== U && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), M(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
			}
			var n = this,
				i = this.getTipElement(),
				o = M.Event(this.constructor.Event.HIDE);
			M(this.element).trigger(o), o.isDefaultPrevented() || (M(i).removeClass(V), "ontouchstart" in document.documentElement && M("body").children().off("mouseover", null, M.noop), this._activeTrigger.click = !1, this._activeTrigger[Q] = !1, this._activeTrigger[K] = !1, yt.supportsTransitionEnd() && M(this.tip).hasClass(X) ? M(i).one(yt.TRANSITION_END, e).emulateTransitionEnd(150) : e(), this._hoverState = "")
		}, pt.update = function() {
			null !== this._popper && this._popper.scheduleUpdate()
		}, pt.isWithContent = function() {
			return Boolean(this.getTitle())
		}, pt.addAttachmentClass = function(t) {
			M(this.getTipElement()).addClass("bs-tooltip-" + t)
		}, pt.getTipElement = function() {
			return this.tip = this.tip || M(this.config.template)[0], this.tip
		}, pt.setContent = function() {
			var t = M(this.getTipElement());
			this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(X + " " + V)
		}, pt.setElementContent = function(t, e) {
			var n = this.config.html;
			"object" == typeof e && (e.nodeType || e.jquery) ? n ? M(e).parent().is(t) || t.empty().append(e) : t.text(M(e).text()) : t[n ? "html" : "text"](e)
		}, pt.getTitle = function() {
			return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
		}, pt._getAttachment = function(t) {
			return z[t.toUpperCase()]
		}, pt._setListeners = function() {
			var n = this;
			this.config.trigger.split(" ").forEach(function(t) {
				var e;
				"click" === t ? M(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) {
					return n.toggle(t)
				}) : "manual" !== t && (e = t === K ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN, t = t === K ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT, M(n.element).on(e, n.config.selector, function(t) {
					return n._enter(t)
				}).on(t, n.config.selector, function(t) {
					return n._leave(t)
				})), M(n.element).closest(".modal").on("hide.bs.modal", function() {
					return n.hide()
				})
			}), this.config.selector ? this.config = S({}, this.config, {
				trigger: "manual",
				selector: ""
			}) : this._fixTitle()
		}, pt._fixTitle = function() {
			var t = typeof this.element.getAttribute("data-original-title");
			!this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
		}, pt._enter = function(t, e) {
			var n = this.constructor.DATA_KEY;
			(e = e || M(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), M(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Q : K] = !0), M(e.getTipElement()).hasClass(V) || e._hoverState === U ? e._hoverState = U : (clearTimeout(e._timeout), e._hoverState = U, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
				e._hoverState === U && e.show()
			}, e.config.delay.show) : e.show())
		}, pt._leave = function(t, e) {
			var n = this.constructor.DATA_KEY;
			(e = e || M(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), M(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Q : K] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
				"out" === e._hoverState && e.hide()
			}, e.config.delay.hide) : e.hide())
		}, pt._isWithActiveTrigger = function() {
			for(var t in this._activeTrigger)
				if(this._activeTrigger[t]) return !0;
			return !1
		}, pt._getConfig = function(t) {
			return "number" == typeof(t = S({}, this.constructor.Default, M(this.element).data(), t)).delay && (t.delay = {
				show: t.delay,
				hide: t.delay
			}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), yt.typeCheckConfig(j, t, this.constructor.DefaultType), t
		}, pt._getDelegateConfig = function() {
			var t = {};
			if(this.config)
				for(var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
			return t
		}, pt._cleanTipClass = function() {
			var t = M(this.getTipElement()),
				e = t.attr("class").match(F);
			null !== e && 0 < e.length && t.removeClass(e.join(""))
		}, pt._handlePopperPlacementChange = function(t) {
			this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
		}, pt._fixTransition = function() {
			var t = this.getTipElement(),
				e = this.config.animation;
			null === t.getAttribute("x-placement") && (M(t).removeClass(X), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
		}, At._jQueryInterface = function(n) {
			return this.each(function() {
				var t = M(this).data(H),
					e = "object" == typeof n && n;
				if((t || !/dispose|hide/.test(n)) && (t || (t = new At(this, e), M(this).data(H, t)), "string" == typeof n)) {
					if(void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
					t[n]()
				}
			})
		}, C(At, null, [{
			key: "VERSION",
			get: function() {
				return "4.0.0"
			}
		}, {
			key: "Default",
			get: function() {
				return W
			}
		}, {
			key: "NAME",
			get: function() {
				return j
			}
		}, {
			key: "DATA_KEY",
			get: function() {
				return H
			}
		}, {
			key: "Event",
			get: function() {
				return Y
			}
		}, {
			key: "EVENT_KEY",
			get: function() {
				return B
			}
		}, {
			key: "DefaultType",
			get: function() {
				return q
			}
		}]), G = At, M.fn[j] = G._jQueryInterface, M.fn[j].Constructor = G, M.fn[j].noConflict = function() {
			return M.fn[j] = R, G._jQueryInterface
		}, G),
		kt = (E = "popover", I = "." + (A = "bs.popover"), D = (k = e).fn[E], $ = new RegExp("(^|\\s)bs-popover\\S+", "g"), P = S({}, Tt.Default, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		}), L = S({}, Tt.DefaultType, {
			content: "(string|element|function)"
		}), N = {
			HIDE: "hide" + I,
			HIDDEN: "hidden" + I,
			SHOW: "show" + I,
			SHOWN: "shown" + I,
			INSERTED: "inserted" + I,
			CLICK: "click" + I,
			FOCUSIN: "focusin" + I,
			FOCUSOUT: "focusout" + I,
			MOUSEENTER: "mouseenter" + I,
			MOUSELEAVE: "mouseleave" + I
		}, O = function(t) {
			var e;

			function i() {
				return t.apply(this, arguments) || this
			}
			n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
			var n = i.prototype;
			return n.isWithContent = function() {
				return this.getTitle() || this._getContent()
			}, n.addAttachmentClass = function(t) {
				k(this.getTipElement()).addClass("bs-popover-" + t)
			}, n.getTipElement = function() {
				return this.tip = this.tip || k(this.config.template)[0], this.tip
			}, n.setContent = function() {
				var t = k(this.getTipElement());
				this.setElementContent(t.find(".popover-header"), this.getTitle());
				var e = this._getContent();
				"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
			}, n._getContent = function() {
				return this.element.getAttribute("data-content") || this.config.content
			}, n._cleanTipClass = function() {
				var t = k(this.getTipElement()),
					e = t.attr("class").match($);
				null !== e && 0 < e.length && t.removeClass(e.join(""))
			}, i._jQueryInterface = function(n) {
				return this.each(function() {
					var t = k(this).data(A),
						e = "object" == typeof n ? n : null;
					if((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), k(this).data(A, t)), "string" == typeof n)) {
						if(void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
						t[n]()
					}
				})
			}, C(i, null, [{
				key: "VERSION",
				get: function() {
					return "4.0.0"
				}
			}, {
				key: "Default",
				get: function() {
					return P
				}
			}, {
				key: "NAME",
				get: function() {
					return E
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return A
				}
			}, {
				key: "Event",
				get: function() {
					return N
				}
			}, {
				key: "EVENT_KEY",
				get: function() {
					return I
				}
			}, {
				key: "DefaultType",
				get: function() {
					return L
				}
			}]), i
		}(Tt), k.fn[E] = O._jQueryInterface, k.fn[E].Constructor = O, k.fn[E].noConflict = function() {
			return k.fn[E] = D, O._jQueryInterface
		}, O),
		ft = function(s) {
			var t, n = "scrollspy",
				i = "bs.scrollspy",
				e = "." + i,
				o = s.fn[n],
				r = {
					offset: 10,
					method: "auto",
					target: ""
				},
				a = {
					offset: "number",
					method: "string",
					target: "(string|element)"
				},
				l = {
					ACTIVATE: "activate" + e,
					SCROLL: "scroll" + e,
					LOAD_DATA_API: "load" + e + ".data-api"
				},
				c = "active",
				u = '[data-spy="scroll"]',
				d = ".active",
				h = ".nav, .list-group",
				p = ".nav-link",
				f = ".nav-item",
				g = ".list-group-item",
				m = ".dropdown",
				v = ".dropdown-item",
				y = ".dropdown-toggle",
				b = "position",
				w = ((t = x.prototype).refresh = function() {
					var e = this,
						t = this._scrollElement === this._scrollElement.window ? "offset" : b,
						i = "auto" === this._config.method ? t : this._config.method,
						o = i === b ? this._getScrollTop() : 0;
					this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), s.makeArray(s(this._selector)).map(function(t) {
						var e, n = yt.getSelectorFromElement(t);
						if(n && (e = s(n)[0]), e) {
							t = e.getBoundingClientRect();
							if(t.width || t.height) return [s(e)[i]().top + o, n]
						}
						return null
					}).filter(function(t) {
						return t
					}).sort(function(t, e) {
						return t[0] - e[0]
					}).forEach(function(t) {
						e._offsets.push(t[0]), e._targets.push(t[1])
					})
				}, t.dispose = function() {
					s.removeData(this._element, i), s(this._scrollElement).off(e), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
				}, t._getConfig = function(t) {
					var e;
					return "string" != typeof(t = S({}, r, t)).target && ((e = s(t.target).attr("id")) || (e = yt.getUID(n), s(t.target).attr("id", e)), t.target = "#" + e), yt.typeCheckConfig(n, t, a), t
				}, t._getScrollTop = function() {
					return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
				}, t._getScrollHeight = function() {
					return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				}, t._getOffsetHeight = function() {
					return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
				}, t._process = function() {
					var t = this._getScrollTop() + this._config.offset,
						e = this._getScrollHeight(),
						n = this._config.offset + e - this._getOffsetHeight();
					if(this._scrollHeight !== e && this.refresh(), n <= t) {
						n = this._targets[this._targets.length - 1];
						this._activeTarget !== n && this._activate(n)
					} else {
						if(this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
						for(var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && t >= this._offsets[i] && (void 0 === this._offsets[i + 1] || t < this._offsets[i + 1]) && this._activate(this._targets[i])
					}
				}, t._activate = function(e) {
					this._activeTarget = e, this._clear();
					var t = (t = this._selector.split(",")).map(function(t) {
							return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
						}),
						t = s(t.join(","));
					t.hasClass("dropdown-item") ? (t.closest(m).find(y).addClass(c), t.addClass(c)) : (t.addClass(c), t.parents(h).prev(p + ", " + g).addClass(c), t.parents(h).prev(f).children(p).addClass(c)), s(this._scrollElement).trigger(l.ACTIVATE, {
						relatedTarget: e
					})
				}, t._clear = function() {
					s(this._selector).filter(d).removeClass(c)
				}, x._jQueryInterface = function(e) {
					return this.each(function() {
						var t = s(this).data(i);
						if(t || (t = new x(this, "object" == typeof e && e), s(this).data(i, t)), "string" == typeof e) {
							if(void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
							t[e]()
						}
					})
				}, C(x, null, [{
					key: "VERSION",
					get: function() {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function() {
						return r
					}
				}]), x);

			function x(t, e) {
				var n = this;
				this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + p + "," + this._config.target + " " + g + "," + this._config.target + " " + v, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, s(this._scrollElement).on(l.SCROLL, function(t) {
					return n._process(t)
				}), this.refresh(), this._process()
			}
			return s(window).on(l.LOAD_DATA_API, function() {
				for(var t = s.makeArray(s(u)), e = t.length; e--;) {
					var n = s(t[e]);
					w._jQueryInterface.call(n, n.data())
				}
			}), s.fn[n] = w._jQueryInterface, s.fn[n].Constructor = w, s.fn[n].noConflict = function() {
				return s.fn[n] = o, w._jQueryInterface
			}, w
		}(e),
		pt = (pt = "." + (v = "bs.tab"), y = (m = e).fn.tab, b = {
			HIDE: "hide" + pt,
			HIDDEN: "hidden" + pt,
			SHOW: "show" + pt,
			SHOWN: "shown" + pt,
			CLICK_DATA_API: "click.bs.tab.data-api"
		}, w = "active", x = ".active", _ = "> li > .active", (pt = Et.prototype).show = function() {
			var t, e, n, i, o, s, r = this;
			this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && m(this._element).hasClass(w) || m(this._element).hasClass("disabled") || (s = m(this._element).closest(".nav, .list-group")[0], e = yt.getSelectorFromElement(this._element), s && (o = "UL" === s.nodeName ? _ : x, n = (n = m.makeArray(m(s).find(o)))[n.length - 1]), i = m.Event(b.HIDE, {
				relatedTarget: this._element
			}), o = m.Event(b.SHOW, {
				relatedTarget: n
			}), n && m(n).trigger(i), m(this._element).trigger(o), o.isDefaultPrevented() || i.isDefaultPrevented() || (e && (t = m(e)[0]), this._activate(this._element, s), s = function() {
				var t = m.Event(b.HIDDEN, {
						relatedTarget: r._element
					}),
					e = m.Event(b.SHOWN, {
						relatedTarget: n
					});
				m(n).trigger(t), m(r._element).trigger(e)
			}, t ? this._activate(t, t.parentNode, s) : s()))
		}, pt.dispose = function() {
			m.removeData(this._element, v), this._element = null
		}, pt._activate = function(t, e, n) {
			var i = this,
				o = ("UL" === e.nodeName ? m(e).find(_) : m(e).children(x))[0],
				s = n && yt.supportsTransitionEnd() && o && m(o).hasClass("fade"),
				e = function() {
					return i._transitionComplete(t, o, n)
				};
			o && s ? m(o).one(yt.TRANSITION_END, e).emulateTransitionEnd(150) : e()
		}, pt._transitionComplete = function(t, e, n) {
			var i;
			e && (m(e).removeClass("show " + w), (i = m(e.parentNode).find("> .dropdown-menu .active")[0]) && m(i).removeClass(w), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)), m(t).addClass(w), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), yt.reflow(t), m(t).addClass("show"), t.parentNode && m(t.parentNode).hasClass("dropdown-menu") && ((e = m(t).closest(".dropdown")[0]) && m(e).find(".dropdown-toggle").addClass(w), t.setAttribute("aria-expanded", !0)), n && n()
		}, Et._jQueryInterface = function(n) {
			return this.each(function() {
				var t = m(this),
					e = t.data(v);
				if(e || (e = new Et(this), t.data(v, e)), "string" == typeof n) {
					if(void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
					e[n]()
				}
			})
		}, C(Et, null, [{
			key: "VERSION",
			get: function() {
				return "4.0.0"
			}
		}]), T = Et, m(document).on(b.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) {
			t.preventDefault(), T._jQueryInterface.call(m(this), "show")
		}), m.fn.tab = T._jQueryInterface, m.fn.tab.Constructor = T, m.fn.tab.noConflict = function() {
			return m.fn.tab = y, T._jQueryInterface
		}, T);

	function Et(t) {
		this._element = t
	}

	function At(t, e) {
		if(void 0 === o) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
		this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
	}

	function It(t, e) {
		this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
	}

	function Dt(t) {
		this._element = t
	}

	function $t(t) {
		this._element = t
	}! function(t) {
		if(void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
		if((t = t.fn.jquery.split(" ")[0].split("."))[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
	}(e), t.Util = yt, t.Alert = bt, t.Button = wt, t.Carousel = xt, t.Collapse = Ct, t.Dropdown = St, t.Modal = _t, t.Popover = kt, t.Scrollspy = ft, t.Tab = pt, t.Tooltip = Tt, Object.defineProperty(t, "__esModule", {
		value: !0
	})
}),
function(t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(c) {
	"use strict";
	var i, r = window.Slick || {};
	i = 0, (r = function(t, e) {
		var n = this;
		n.defaults = {
			accessibility: !0,
			adaptiveHeight: !1,
			appendArrows: c(t),
			appendDots: c(t),
			arrows: !0,
			asNavFor: null,
			prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
			autoplay: !1,
			autoplaySpeed: 3e3,
			centerMode: !1,
			centerPadding: "50px",
			cssEase: "ease",
			customPaging: function(t, e) {
				return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(e + 1)
			},
			dots: !1,
			dotsClass: "slick-dots",
			draggable: !0,
			easing: "linear",
			edgeFriction: .35,
			fade: !1,
			focusOnSelect: !1,
			infinite: !0,
			initialSlide: 0,
			lazyLoad: "ondemand",
			mobileFirst: !1,
			pauseOnHover: !0,
			pauseOnFocus: !0,
			pauseOnDotsHover: !1,
			respondTo: "window",
			responsive: null,
			rows: 1,
			rtl: !1,
			slide: "",
			slidesPerRow: 1,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			swipe: !0,
			swipeToSlide: !1,
			touchMove: !0,
			touchThreshold: 5,
			useCSS: !0,
			useTransform: !0,
			variableWidth: !1,
			vertical: !1,
			verticalSwiping: !1,
			waitForAnimate: !0,
			zIndex: 1e3
		}, n.initials = {
			animating: !1,
			dragging: !1,
			autoPlayTimer: null,
			currentDirection: 0,
			currentLeft: null,
			currentSlide: 0,
			direction: 1,
			$dots: null,
			listWidth: null,
			listHeight: null,
			loadIndex: 0,
			$nextArrow: null,
			$prevArrow: null,
			slideCount: null,
			slideWidth: null,
			$slideTrack: null,
			$slides: null,
			sliding: !1,
			slideOffset: 0,
			swipeLeft: null,
			$list: null,
			touchObject: {},
			transformsEnabled: !1,
			unslicked: !1
		}, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, t = c(t).data("slick") || {}, n.options = c.extend({}, n.defaults, e, t), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
	}).prototype.activateADA = function() {
		this.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, r.prototype.addSlide = r.prototype.slickAdd = function(t, e, n) {
		var i = this;
		if("boolean" == typeof e) n = e, e = null;
		else if(e < 0 || e >= i.slideCount) return !1;
		i.unload(), "number" == typeof e ? 0 === e && 0 === i.$slides.length ? c(t).appendTo(i.$slideTrack) : n ? c(t).insertBefore(i.$slides.eq(e)) : c(t).insertAfter(i.$slides.eq(e)) : !0 === n ? c(t).prependTo(i.$slideTrack) : c(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(t, e) {
			c(e).attr("data-slick-index", t)
		}), i.$slidesCache = i.$slides, i.reinit()
	}, r.prototype.animateHeight = function() {
		var t, e = this;
		1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (t = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.animate({
			height: t
		}, e.options.speed))
	}, r.prototype.animateSlide = function(t, e) {
		var n = {},
			i = this;
		i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (t = -t), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
			left: t
		}, i.options.speed, i.options.easing, e) : i.$slideTrack.animate({
			top: t
		}, i.options.speed, i.options.easing, e) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
			animStart: i.currentLeft
		}).animate({
			animStart: t
		}, {
			duration: i.options.speed,
			easing: i.options.easing,
			step: function(t) {
				t = Math.ceil(t), !1 === i.options.vertical ? n[i.animType] = "translate(" + t + "px, 0px)" : n[i.animType] = "translate(0px," + t + "px)", i.$slideTrack.css(n)
			},
			complete: function() {
				e && e.call()
			}
		})) : (i.applyTransition(), t = Math.ceil(t), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(n), e && setTimeout(function() {
			i.disableTransition(), e.call()
		}, i.options.speed))
	}, r.prototype.getNavTarget = function() {
		var t = this.options.asNavFor;
		return t && null !== t && (t = c(t).not(this.$slider)), t
	}, r.prototype.asNavFor = function(e) {
		var t = this.getNavTarget();
		null !== t && "object" == typeof t && t.each(function() {
			var t = c(this).slick("getSlick");
			t.unslicked || t.slideHandler(e, !0)
		})
	}, r.prototype.applyTransition = function(t) {
		var e = this,
			n = {};
		!1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, (!1 === e.options.fade ? e.$slideTrack : e.$slides.eq(t)).css(n)
	}, r.prototype.autoPlay = function() {
		var t = this;
		t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
	}, r.prototype.autoPlayClear = function() {
		this.autoPlayTimer && clearInterval(this.autoPlayTimer)
	}, r.prototype.autoPlayIterator = function() {
		var t = this,
			e = t.currentSlide + t.options.slidesToScroll;
		t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
	}, r.prototype.buildArrows = function() {
		var t = this;
		!0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, r.prototype.buildDots = function() {
		var t, e, n = this;
		if(!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
			for(n.$slider.addClass("slick-dotted"), e = c("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) e.append(c("<li />").append(n.options.customPaging.call(this, n, t)));
			n.$dots = e.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, r.prototype.buildOut = function() {
		var t = this;
		t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, e) {
			c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
		}), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
	}, r.prototype.buildRows = function() {
		var t, e, n, i = this,
			o = document.createDocumentFragment(),
			s = i.$slider.children();
		if(1 < i.options.rows) {
			for(n = i.options.slidesPerRow * i.options.rows, e = Math.ceil(s.length / n), t = 0; t < e; t++) {
				for(var r = document.createElement("div"), a = 0; a < i.options.rows; a++) {
					for(var l = document.createElement("div"), c = 0; c < i.options.slidesPerRow; c++) {
						var u = t * n + (a * i.options.slidesPerRow + c);
						s.get(u) && l.appendChild(s.get(u))
					}
					r.appendChild(l)
				}
				o.appendChild(r)
			}
			i.$slider.empty().append(o), i.$slider.children().children().children().css({
				width: 100 / i.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, r.prototype.checkResponsive = function(t, e) {
		var n, i, o, s = this,
			r = !1,
			a = s.$slider.width(),
			l = window.innerWidth || c(window).width();
		if("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = a : "min" === s.respondTo && (o = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
			for(n in i = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[n] && (i = s.breakpoints[n]) : o > s.breakpoints[n] && (i = s.breakpoints[n]));
			null !== i ? null !== s.activeBreakpoint && i === s.activeBreakpoint && !e || (s.activeBreakpoint = i, "unslick" === s.breakpointSettings[i] ? s.unslick(i) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[i]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), r = i) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), r = i), t || !1 === r || s.$slider.trigger("breakpoint", [s, r])
		}
	}, r.prototype.changeSlide = function(t, e) {
		var n, i = this,
			o = c(t.currentTarget);
		switch(o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), n = i.slideCount % i.options.slidesToScroll != 0 ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll, t.data.message) {
			case "previous":
				s = 0 == n ? i.options.slidesToScroll : i.options.slidesToShow - n, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - s, !1, e);
				break;
			case "next":
				s = 0 == n ? i.options.slidesToScroll : n, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + s, !1, e);
				break;
			case "index":
				var s = 0 === t.data.index ? 0 : t.data.index || o.index() * i.options.slidesToScroll;
				i.slideHandler(i.checkNavigable(s), !1, e), o.children().trigger("focus");
				break;
			default:
				return
		}
	}, r.prototype.checkNavigable = function(t) {
		var e, n = 0;
		if(t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
		else
			for(var i in e) {
				if(t < e[i]) {
					t = n;
					break
				}
				n = e[i]
			}
		return t
	}, r.prototype.cleanUpEvents = function() {
		var t = this;
		t.options.dots && null !== t.$dots && c("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", c.proxy(t.interrupt, t, !0)).off("mouseleave.slick", c.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), c(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
	}, r.prototype.cleanUpSlideEvents = function() {
		var t = this;
		t.$list.off("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", c.proxy(t.interrupt, t, !1))
	}, r.prototype.cleanUpRows = function() {
		var t;
		1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
	}, r.prototype.clickHandler = function(t) {
		!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
	}, r.prototype.destroy = function(t) {
		var e = this;
		e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
			c(this).attr("style", c(this).data("originalStyling"))
		}), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
	}, r.prototype.disableTransition = function(t) {
		var e = {};
		e[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(t)).css(e)
	}, r.prototype.fadeSlide = function(t, e) {
		var n = this;
		!1 === n.cssTransitions ? (n.$slides.eq(t).css({
			zIndex: n.options.zIndex
		}), n.$slides.eq(t).animate({
			opacity: 1
		}, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
			opacity: 1,
			zIndex: n.options.zIndex
		}), e && setTimeout(function() {
			n.disableTransition(t), e.call()
		}, n.options.speed))
	}, r.prototype.fadeSlideOut = function(t) {
		var e = this;
		!1 === e.cssTransitions ? e.$slides.eq(t).animate({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}))
	}, r.prototype.filterSlides = r.prototype.slickFilter = function(t) {
		var e = this;
		null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
	}, r.prototype.focusHandler = function() {
		var n = this;
		n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(t) {
			t.stopImmediatePropagation();
			var e = c(this);
			setTimeout(function() {
				n.options.pauseOnFocus && (n.focussed = e.is(":focus"), n.autoPlay())
			}, 0)
		})
	}, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
		return this.currentSlide
	}, r.prototype.getDotCount = function() {
		var t = this,
			e = 0,
			n = 0,
			i = 0;
		if(!0 === t.options.infinite)
			for(; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		else if(!0 === t.options.centerMode) i = t.slideCount;
		else if(t.options.asNavFor)
			for(; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
		return i - 1
	}, r.prototype.getLeft = function(t) {
		var e, n = this,
			i = 0;
		return n.slideOffset = 0, e = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, i = e * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll != 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i = t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, (n.options.slidesToShow - (t - n.slideCount)) * e * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, n.slideCount % n.options.slidesToScroll * e * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, i = (t + n.options.slidesToShow - n.slideCount) * e), n.slideCount <= n.options.slidesToShow && (i = n.slideOffset = 0), !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * e * -1 + i, !0 === n.options.variableWidth && (i = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = !0 === n.options.rtl ? i[0] ? -1 * (n.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === n.options.centerMode && (i = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? i[0] ? -1 * (n.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (n.$list.width() - i.outerWidth()) / 2)), e
	}, r.prototype.getOption = r.prototype.slickGetOption = function(t) {
		return this.options[t]
	}, r.prototype.getNavigableIndexes = function() {
		for(var t = this, e = 0, n = 0, i = [], o = !1 === t.options.infinite ? t.slideCount : (e = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, 2 * t.slideCount); e < o;) i.push(e), e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		return i
	}, r.prototype.getSlick = function() {
		return this
	}, r.prototype.getSlideCount = function() {
		var n, i = this,
			o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0;
		return !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(t, e) {
			return e.offsetLeft - o + c(e).outerWidth() / 2 > -1 * i.swipeLeft ? (n = e, !1) : void 0
		}), Math.abs(c(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
	}, r.prototype.goTo = r.prototype.slickGoTo = function(t, e) {
		this.changeSlide({
			data: {
				message: "index",
				index: parseInt(t)
			}
		}, e)
	}, r.prototype.init = function(t) {
		var e = this;
		c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
	}, r.prototype.initADA = function() {
		var e = this;
		e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
			c(this).attr({
				role: "option",
				"aria-describedby": "slick-slide" + e.instanceUid + t
			})
		}), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(t) {
			c(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + e.instanceUid + t,
				id: "slick-slide" + e.instanceUid + t
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
	}, r.prototype.initArrowEvents = function() {
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, t.changeSlide))
	}, r.prototype.initDotEvents = function() {
		var t = this;
		!0 === t.options.dots && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("click.slick", {
			message: "index"
		}, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.interrupt, t, !0)).on("mouseleave.slick", c.proxy(t.interrupt, t, !1))
	}, r.prototype.initSlideEvents = function() {
		var t = this;
		t.options.pauseOnHover && (t.$list.on("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", c.proxy(t.interrupt, t, !1)))
	}, r.prototype.initializeEvents = function() {
		var t = this;
		t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
	}, r.prototype.initUI = function() {
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
	}, r.prototype.keyHandler = function(t) {
		var e = this;
		t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
			data: {
				message: !0 === e.options.rtl ? "next" : "previous"
			}
		}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
			data: {
				message: !0 === e.options.rtl ? "previous" : "next"
			}
		}))
	}, r.prototype.lazyLoad = function() {
		function t(t) {
			c("img[data-lazy]", t).each(function() {
				var t = c(this),
					e = c(this).attr("data-lazy"),
					n = document.createElement("img");
				n.onload = function() {
					t.animate({
						opacity: 0
					}, 100, function() {
						t.attr("src", e).animate({
							opacity: 1
						}, 200, function() {
							t.removeAttr("data-lazy").removeClass("slick-loading")
						}), i.$slider.trigger("lazyLoaded", [i, t, e])
					})
				}, n.onerror = function() {
					t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, t, e])
				}, n.src = e
			})
		}
		var e, n, i = this;
		!0 === i.options.centerMode ? n = !0 === i.options.infinite ? (e = i.currentSlide + (i.options.slidesToShow / 2 + 1)) + i.options.slidesToShow + 2 : (e = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide) : (e = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide, n = Math.ceil(e + i.options.slidesToShow), !0 === i.options.fade && (0 < e && e--, n <= i.slideCount && n++)), t(i.$slider.find(".slick-slide").slice(e, n)), i.slideCount <= i.options.slidesToShow ? t(i.$slider.find(".slick-slide")) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? t(i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)) : 0 === i.currentSlide && t(i.$slider.find(".slick-cloned").slice(-1 * i.options.slidesToShow))
	}, r.prototype.loadSlider = function() {
		var t = this;
		t.setPosition(), t.$slideTrack.css({
			opacity: 1
		}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
	}, r.prototype.next = r.prototype.slickNext = function() {
		this.changeSlide({
			data: {
				message: "next"
			}
		})
	}, r.prototype.orientationChange = function() {
		this.checkResponsive(), this.setPosition()
	}, r.prototype.pause = r.prototype.slickPause = function() {
		this.autoPlayClear(), this.paused = !0
	}, r.prototype.play = r.prototype.slickPlay = function() {
		var t = this;
		t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
	}, r.prototype.postSlide = function(t) {
		var e = this;
		e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
	}, r.prototype.prev = r.prototype.slickPrev = function() {
		this.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, r.prototype.preventDefault = function(t) {
		t.preventDefault()
	}, r.prototype.progressiveLazyLoad = function(t) {
		t = t || 1;
		var e, n, i = this,
			o = c("img[data-lazy]", i.$slider);
		o.length ? (e = o.first(), n = e.attr("data-lazy"), (o = document.createElement("img")).onload = function() {
			e.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === i.options.adaptiveHeight && i.setPosition(), i.$slider.trigger("lazyLoaded", [i, e, n]), i.progressiveLazyLoad()
		}, o.onerror = function() {
			t < 3 ? setTimeout(function() {
				i.progressiveLazyLoad(t + 1)
			}, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, e, n]), i.progressiveLazyLoad())
		}, o.src = n) : i.$slider.trigger("allImagesLoaded", [i])
	}, r.prototype.refresh = function(t) {
		var e = this,
			n = e.slideCount - e.options.slidesToShow;
		!e.options.infinite && e.currentSlide > n && (e.currentSlide = n), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), n = e.currentSlide, e.destroy(!0), c.extend(e, e.initials, {
			currentSlide: n
		}), e.init(), t || e.changeSlide({
			data: {
				message: "index",
				index: n
			}
		}, !1)
	}, r.prototype.registerBreakpoints = function() {
		var t, e, n, i = this,
			o = i.options.responsive || null;
		if("array" === c.type(o) && o.length) {
			for(t in i.respondTo = i.options.respondTo || "window", o)
				if(n = i.breakpoints.length - 1, e = o[t].breakpoint, o.hasOwnProperty(t)) {
					for(; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === e && i.breakpoints.splice(n, 1), n--;
					i.breakpoints.push(e), i.breakpointSettings[e] = o[t].settings
				}
			i.breakpoints.sort(function(t, e) {
				return i.options.mobileFirst ? t - e : e - t
			})
		}
	}, r.prototype.reinit = function() {
		var t = this;
		t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
	}, r.prototype.resize = function() {
		var t = this;
		c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
			t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
		}, 50))
	}, r.prototype.removeSlide = r.prototype.slickRemove = function(t, e, n) {
		var i = this;
		return t = "boolean" == typeof t ? !0 === (e = t) ? 0 : i.slideCount - 1 : !0 === e ? --t : t, !(i.slideCount < 1 || t < 0 || t > i.slideCount - 1) && (i.unload(), (!0 === n ? i.$slideTrack.children() : i.$slideTrack.children(this.options.slide).eq(t)).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
	}, r.prototype.setCSS = function(t) {
		var e, n, i = this,
			o = {};
		!0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", o[i.positionProp] = t, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + e + ", " + n + ")" : o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)"), i.$slideTrack.css(o)
	}, r.prototype.setDimensions = function() {
		var t = this;
		!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
			padding: "0px " + t.options.centerPadding
		}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
			padding: t.options.centerPadding + " 0px"
		})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
		var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
		!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
	}, r.prototype.setFade = function() {
		var n, i = this;
		i.$slides.each(function(t, e) {
			n = i.slideWidth * t * -1, !0 === i.options.rtl ? c(e).css({
				position: "relative",
				right: n,
				top: 0,
				zIndex: i.options.zIndex - 2,
				opacity: 0
			}) : c(e).css({
				position: "relative",
				left: n,
				top: 0,
				zIndex: i.options.zIndex - 2,
				opacity: 0
			})
		}), i.$slides.eq(i.currentSlide).css({
			zIndex: i.options.zIndex - 1,
			opacity: 1
		})
	}, r.prototype.setHeight = function() {
		var t, e = this;
		1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (t = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.css("height", t))
	}, r.prototype.setOption = r.prototype.slickSetOption = function() {
		var t, e, n, i, o, s = this,
			r = !1;
		if("object" === c.type(arguments[0]) ? (n = arguments[0], r = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[0], i = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[n] = i;
		else if("multiple" === o) c.each(n, function(t, e) {
			s.options[t] = e
		});
		else if("responsive" === o)
			for(e in i)
				if("array" !== c.type(s.options.responsive)) s.options.responsive = [i[e]];
				else {
					for(t = s.options.responsive.length - 1; 0 <= t;) s.options.responsive[t].breakpoint === i[e].breakpoint && s.options.responsive.splice(t, 1), t--;
					s.options.responsive.push(i[e])
				}
		r && (s.unload(), s.reinit())
	}, r.prototype.setPosition = function() {
		var t = this;
		t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
	}, r.prototype.setProps = function() {
		var t = this,
			e = document.body.style;
		t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 !== t.options.useCSS || (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
	}, r.prototype.setSlideClasses = function(t) {
		var e, n, i = this,
			o = i.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
		i.$slides.eq(t).addClass("slick-current"), !0 === i.options.centerMode ? (n = Math.floor(i.options.slidesToShow / 2), !0 === i.options.infinite && (n <= t && t <= i.slideCount - 1 - n ? i.$slides.slice(t - n, t + n + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = i.options.slidesToShow + t, o.slice(e - n + 1, e + n + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? o.eq(o.length - 1 - i.options.slidesToShow).addClass("slick-center") : t === i.slideCount - 1 && o.eq(i.options.slidesToShow).addClass("slick-center")), i.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= i.slideCount - i.options.slidesToShow ? i.$slides.slice(t, t + i.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : o.length <= i.options.slidesToShow ? o.addClass("slick-active").attr("aria-hidden", "false") : (n = i.slideCount % i.options.slidesToShow, e = !0 === i.options.infinite ? i.options.slidesToShow + t : t, (i.options.slidesToShow == i.options.slidesToScroll && i.slideCount - t < i.options.slidesToShow ? o.slice(e - (i.options.slidesToShow - n), e + n) : o.slice(e, e + i.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === i.options.lazyLoad && i.lazyLoad()
	}, r.prototype.setupInfinite = function() {
		var t, e, n, i = this;
		if(!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (e = null, i.slideCount > i.options.slidesToShow)) {
			for(n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - n; --t) e = t - 1, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
			for(t = 0; t < n; t += 1) e = t, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
			i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
				c(this).attr("id", "")
			})
		}
	}, r.prototype.interrupt = function(t) {
		t || this.autoPlay(), this.interrupted = t
	}, r.prototype.selectHandler = function(t) {
		var e = this,
			t = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
			t = (t = parseInt(t.attr("data-slick-index"))) || 0;
		return e.slideCount <= e.options.slidesToShow ? (e.setSlideClasses(t), void e.asNavFor(t)) : void e.slideHandler(t)
	}, r.prototype.slideHandler = function(t, e, n) {
		var i, o, s, r, a = this;
		return e = e || !1, !0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === t || a.slideCount <= a.options.slidesToShow ? void 0 : (!1 === e && a.asNavFor(t), i = t, r = a.getLeft(i), e = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? e : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (t < 0 || t > a.getDotCount() * a.options.slidesToScroll) || !1 === a.options.infinite && !0 === a.options.centerMode && (t < 0 || t > a.slideCount - a.options.slidesToScroll) ? void(!1 === a.options.fade && (i = a.currentSlide, !0 !== n ? a.animateSlide(e, function() {
			a.postSlide(i)
		}) : a.postSlide(i))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), o = i < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + i : i >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : i - a.slideCount : i, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, o]), e = a.currentSlide, a.currentSlide = o, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (s = (s = a.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade ? (!0 !== n ? (a.fadeSlideOut(e), a.fadeSlide(o, function() {
			a.postSlide(o)
		})) : a.postSlide(o), void a.animateHeight()) : void(!0 !== n ? a.animateSlide(r, function() {
			a.postSlide(o)
		}) : a.postSlide(o))))
	}, r.prototype.startLoad = function() {
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
	}, r.prototype.swipeDirection = function() {
		var t = this,
			e = t.touchObject.startX - t.touchObject.curX,
			n = t.touchObject.startY - t.touchObject.curY,
			e = Math.atan2(n, e);
		return(e = Math.round(180 * e / Math.PI)) < 0 && (e = 360 - Math.abs(e)), e <= 45 && 0 <= e || e <= 360 && 315 <= e ? !1 === t.options.rtl ? "left" : "right" : 135 <= e && e <= 225 ? !1 === t.options.rtl ? "right" : "left" : !0 === t.options.verticalSwiping ? 35 <= e && e <= 135 ? "down" : "up" : "vertical"
	}, r.prototype.swipeEnd = function(t) {
		var e, n, i = this;
		if(i.dragging = !1, i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
		if(!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
			switch(n = i.swipeDirection()) {
				case "left":
				case "down":
					e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
					break;
				case "right":
				case "up":
					e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
			}
			"vertical" != n && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
		} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
	}, r.prototype.swipeHandler = function(t) {
		var e = this;
		if(!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch(e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
			case "start":
				e.swipeStart(t);
				break;
			case "move":
				e.swipeMove(t);
				break;
			case "end":
				e.swipeEnd(t)
		}
	}, r.prototype.swipeMove = function(t) {
		var e, n, i = this,
			o = void 0 !== t.originalEvent ? t.originalEvent.touches : null;
		return !(!i.dragging || o && 1 !== o.length) && (e = i.getLeft(i.currentSlide), i.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, i.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))), !0 === i.options.verticalSwiping && (i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2)))), "vertical" !== (n = i.swipeDirection()) ? (void 0 !== t.originalEvent && 4 < i.touchObject.swipeLength && t.preventDefault(), o = (!1 === i.options.rtl ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1), !0 === i.options.verticalSwiping && (o = i.touchObject.curY > i.touchObject.startY ? 1 : -1), t = i.touchObject.swipeLength, (i.touchObject.edgeHit = !1) === i.options.infinite && (0 === i.currentSlide && "right" === n || i.currentSlide >= i.getDotCount() && "left" === n) && (t = i.touchObject.swipeLength * i.options.edgeFriction, i.touchObject.edgeHit = !0), !1 === i.options.vertical ? i.swipeLeft = e + t * o : i.swipeLeft = e + t * (i.$list.height() / i.listWidth) * o, !0 === i.options.verticalSwiping && (i.swipeLeft = e + t * o), !0 !== i.options.fade && !1 !== i.options.touchMove && (!0 === i.animating ? (i.swipeLeft = null, !1) : void i.setCSS(i.swipeLeft))) : void 0)
	}, r.prototype.swipeStart = function(t) {
		var e, n = this;
		return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? !(n.touchObject = {}) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(n.dragging = !0))
	}, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
		var t = this;
		null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
	}, r.prototype.unload = function() {
		var t = this;
		c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, r.prototype.unslick = function(t) {
		this.$slider.trigger("unslick", [this, t]), this.destroy()
	}, r.prototype.updateArrows = function() {
		var t = this;
		Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, r.prototype.updateDots = function() {
		var t = this;
		null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, r.prototype.visibility = function() {
		this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
	},
	//  c.fn.slick = function() {
	// 	for(var t, e = this, n = arguments[0], i = Array.prototype.slice.call(arguments, 1), o = e.length, s = 0; s < o; s++)
	// 		if("object" == typeof n || void 0 === n ? e[s].slick = new r(e[s], n) : t = e[s].slick[n].apply(e[s].slick, i), void 0 !== t) return t;
	// 	return e
	// }
	c.fn.slick = function() {
		for (var t, e = this, n = arguments[0], i = Array.prototype.slice.call(arguments, 1), o = e.length, s = 0; s < o; s++)
			if ("object" == typeof n || void 0 === n) {
				// This part initializes a new 'slick' property with the value of a new instance of 'r'.
				e[s].slick = new r(e[s], n);
			} else {
				// This part tries to call a method 'setPosition' on the 'slick' property.
				t = e[s].slick[n].apply(e[s].slick, i);
				if (void 0 !== t) return t;
			}
		return e;
	};
	
}),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
}(function(L) {
	var t, e, n, N, l, O, i, o, a, s, g, M, m, h, c, u, d, p, f, v, y, b, w, x, C, S, _, T, k, E, r, A, I, D, $, j, P, H, B, R, F, q, z, W, U, Y, X, V, K, Q, G, Z, J, tt, et, nt, it, ot;

	function st(t, e, n) {
		var i = n ? m[0] + "_expanded" : "",
			n = t.closest(".mCSB_scrollTools");
		"active" === e ? (t.toggleClass(m[0] + " " + i), n.toggleClass(m[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(m[0]), n.removeClass(m[1])) : (t.addClass(m[0]), n.addClass(m[1])))
	}

	function rt(t) {
		var e = t.type,
			n = t.target.ownerDocument !== document && null !== frameElement ? [L(frameElement).offset().top, L(frameElement).offset().left] : null,
			i = j() && t.target.ownerDocument !== top.document && null !== frameElement ? [L(t.view.frameElement).offset().top, L(t.view.frameElement).offset().left] : [0, 0];
		switch(e) {
			case "pointerdown":
			case "MSPointerDown":
			case "pointermove":
			case "MSPointerMove":
			case "pointerup":
			case "MSPointerUp":
				return n ? [t.originalEvent.pageY - n[0] + i[0], t.originalEvent.pageX - n[1] + i[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
			case "touchstart":
			case "touchmove":
			case "touchend":
				var o = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
					s = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
				return t.target.ownerDocument !== document ? [o.screenY, o.screenX, 1 < s] : [o.pageY, o.pageX, 1 < s];
			default:
				return n ? [t.pageY - n[0] + i[0], t.pageX - n[1] + i[1], !1] : [t.pageY, t.pageX, !1]
		}
	}
	t = "function" == typeof define && define.amd, e = "undefined" != typeof module && module.exports, n = "https:" == document.location.protocol ? "https:" : "http:", t || (e ? require("jquery-mousewheel")(L) : L.event.special.mousewheel || L("head").append(decodeURI("%3Cscript src=" + n + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), l = "mCustomScrollbar", O = "mCS", i = ".mCustomScrollbar", o = {
		setTop: 0,
		setLeft: 0,
		axis: "y",
		scrollbarPosition: "inside",
		scrollInertia: 950,
		autoDraggerLength: !0,
		alwaysShowScrollbar: 0,
		snapOffset: 0,
		mouseWheel: {
			enable: !0,
			scrollAmount: "auto",
			axis: "y",
			deltaFactor: "auto",
			disableOver: ["select", "option", "keygen", "datalist", "textarea"]
		},
		scrollButtons: {
			scrollType: "stepless",
			scrollAmount: "auto"
		},
		keyboard: {
			enable: !0,
			scrollType: "stepless",
			scrollAmount: "auto"
		},
		contentTouchScroll: 25,
		documentTouchScroll: !0,
		advanced: {
			autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
			updateOnContentResize: !0,
			updateOnImageLoad: "auto",
			autoUpdateTimeout: 60
		},
		theme: "light",
		callbacks: {
			onTotalScrollOffset: 0,
			onTotalScrollBackOffset: 0,
			alwaysTriggerOffsets: !0
		}
	}, a = 0, s = {}, g = window.attachEvent && !window.addEventListener ? 1 : 0, M = !1, m = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], h = {
		init: function(r) {
			var r = L.extend(!0, {}, o, r),
				t = c.call(this);
			if(r.live) {
				var e = r.liveSelector || this.selector || i,
					n = L(e);
				if("off" === r.live) return void d(e);
				s[e] = setTimeout(function() {
					n.mCustomScrollbar(r), "once" === r.live && n.length && d(e)
				}, 500)
			} else d(e);
			return r.setWidth = r.set_width || r.setWidth, r.setHeight = r.set_height || r.setHeight, r.axis = r.horizontalScroll ? "x" : p(r.axis), r.scrollInertia = 0 < r.scrollInertia && r.scrollInertia < 17 ? 17 : r.scrollInertia, "object" != typeof r.mouseWheel && 1 == r.mouseWheel && (r.mouseWheel = {
				enable: !0,
				scrollAmount: "auto",
				axis: "y",
				preventDefault: !1,
				deltaFactor: "auto",
				normalizeDelta: !1,
				invert: !1
			}), r.mouseWheel.scrollAmount = r.mouseWheelPixels || r.mouseWheel.scrollAmount, r.mouseWheel.normalizeDelta = r.advanced.normalizeMouseWheelDelta || r.mouseWheel.normalizeDelta, r.scrollButtons.scrollType = f(r.scrollButtons.scrollType), u(r), L(t).each(function() {
				var t, e, n, i, o, s = L(this);
				s.data(O) || (s.data(O, {
					idx: ++a,
					opt: r,
					scrollRatio: {
						y: null,
						x: null
					},
					overflowed: null,
					contentReset: {
						y: null,
						x: null
					},
					bindEvents: !1,
					tweenRunning: !1,
					sequential: {},
					langDir: s.css("direction"),
					cbOffsets: null,
					trigger: null,
					poll: {
						size: {
							o: 0,
							n: 0
						},
						img: {
							o: 0,
							n: 0
						},
						change: {
							o: 0,
							n: 0
						}
					}
				}), e = (t = s.data(O)).opt, n = s.data("mcs-axis"), i = s.data("mcs-scrollbar-position"), o = s.data("mcs-theme"), n && (e.axis = n), i && (e.scrollbarPosition = i), o && (e.theme = o, u(e)), v.call(this), t && e.callbacks.onCreate && "function" == typeof e.callbacks.onCreate && e.callbacks.onCreate.call(this), L("#mCSB_" + t.idx + "_container img:not(." + m[2] + ")").addClass(m[2]), h.update.call(null, s))
			})
		},
		update: function(t, r) {
			t = t || c.call(this);
			return L(t).each(function() {
				var t, e, n, i, o, s = L(this);
				s.data(O) && (e = (t = s.data(O)).opt, o = L("#mCSB_" + t.idx + "_container"), n = L("#mCSB_" + t.idx), i = [L("#mCSB_" + t.idx + "_dragger_vertical"), L("#mCSB_" + t.idx + "_dragger_horizontal")], o.length && (t.tweenRunning && V(s), r && t && e.callbacks.onBeforeUpdate && "function" == typeof e.callbacks.onBeforeUpdate && e.callbacks.onBeforeUpdate.call(this), s.hasClass(m[3]) && s.removeClass(m[3]), s.hasClass(m[4]) && s.removeClass(m[4]), n.css("max-height", "none"), n.height() !== s.height() && n.css("max-height", s.height()), b.call(this), "y" === e.axis || e.advanced.autoExpandHorizontalScroll || o.css("width", y(o)), t.overflowed = S.call(this), E.call(this), e.autoDraggerLength && x.call(this), C.call(this), T.call(this), o = [Math.abs(o[0].offsetTop), Math.abs(o[0].offsetLeft)], "x" !== e.axis && (t.overflowed[0] ? i[0].height() > i[0].parent().height() ? _.call(this) : (K(s, o[0].toString(), {
					dir: "y",
					dur: 0,
					overwrite: "none"
				}), t.contentReset.y = null) : (_.call(this), "y" === e.axis ? k.call(this) : "yx" === e.axis && t.overflowed[1] && K(s, o[1].toString(), {
					dir: "x",
					dur: 0,
					overwrite: "none"
				}))), "y" !== e.axis && (t.overflowed[1] ? i[1].width() > i[1].parent().width() ? _.call(this) : (K(s, o[1].toString(), {
					dir: "x",
					dur: 0,
					overwrite: "none"
				}), t.contentReset.x = null) : (_.call(this), "x" === e.axis ? k.call(this) : "yx" === e.axis && t.overflowed[0] && K(s, o[0].toString(), {
					dir: "y",
					dur: 0,
					overwrite: "none"
				}))), r && t && (2 === r && e.callbacks.onImageLoad && "function" == typeof e.callbacks.onImageLoad ? e.callbacks.onImageLoad.call(this) : 3 === r && e.callbacks.onSelectorChange && "function" == typeof e.callbacks.onSelectorChange ? e.callbacks.onSelectorChange.call(this) : e.callbacks.onUpdate && "function" == typeof e.callbacks.onUpdate && e.callbacks.onUpdate.call(this)), X.call(this)))
			})
		},
		scrollTo: function(r, a) {
			if(void 0 !== r && null != r) {
				var t = c.call(this);
				return L(t).each(function() {
					var t, e, n, i, o, s = L(this);
					s.data(O) && (t = s.data(O), o = {
						trigger: "external",
						scrollInertia: (e = t.opt).scrollInertia,
						scrollEasing: "mcsEaseInOut",
						moveDragger: !1,
						timeout: 60,
						callbacks: !0,
						onStart: !0,
						onUpdate: !0,
						onComplete: !0
					}, n = L.extend(!0, {}, o, a), i = U.call(this, r), o = 0 < n.scrollInertia && n.scrollInertia < 17 ? 17 : n.scrollInertia, i[0] = Y.call(this, i[0], "y"), i[1] = Y.call(this, i[1], "x"), n.moveDragger && (i[0] *= t.scrollRatio.y, i[1] *= t.scrollRatio.x), n.dur = ot() ? 0 : o, setTimeout(function() {
						null !== i[0] && void 0 !== i[0] && "x" !== e.axis && t.overflowed[0] && (n.dir = "y", n.overwrite = "all", K(s, i[0].toString(), n)), null !== i[1] && void 0 !== i[1] && "y" !== e.axis && t.overflowed[1] && (n.dir = "x", n.overwrite = "none", K(s, i[1].toString(), n))
					}, n.timeout))
				})
			}
		},
		stop: function() {
			var t = c.call(this);
			return L(t).each(function() {
				var t = L(this);
				t.data(O) && V(t)
			})
		},
		disable: function(e) {
			var t = c.call(this);
			return L(t).each(function() {
				var t = L(this);
				t.data(O) && (t.data(O), X.call(this, "remove"), k.call(this), e && _.call(this), E.call(this, !0), t.addClass(m[3]))
			})
		},
		destroy: function() {
			var r = c.call(this);
			return L(r).each(function() {
				var t, e, n, i, o, s = L(this);
				s.data(O) && (e = (t = s.data(O)).opt, n = L("#mCSB_" + t.idx), i = L("#mCSB_" + t.idx + "_container"), o = L(".mCSB_" + t.idx + "_scrollbar"), e.live && d(e.liveSelector || L(r).selector), X.call(this, "remove"), k.call(this), _.call(this), s.removeData(O), J(this, "mcs"), o.remove(), i.find("img." + m[2]).removeClass(m[2]), n.replaceWith(i.contents()), s.removeClass(l + " _" + O + "_" + t.idx + " " + m[6] + " " + m[7] + " " + m[5] + " " + m[3]).addClass(m[4]))
			})
		}
	}, c = function() {
		return "object" != typeof L(this) || L(this).length < 1 ? i : this
	}, u = function(t) {
		t.autoDraggerLength = !(-1 < L.inArray(t.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"])) && t.autoDraggerLength, t.autoExpandScrollbar = !(-1 < L.inArray(t.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"])) && t.autoExpandScrollbar, t.scrollButtons.enable = !(-1 < L.inArray(t.theme, ["minimal", "minimal-dark"])) && t.scrollButtons.enable, t.autoHideScrollbar = -1 < L.inArray(t.theme, ["minimal", "minimal-dark"]) || t.autoHideScrollbar, t.scrollbarPosition = -1 < L.inArray(t.theme, ["minimal", "minimal-dark"]) ? "outside" : t.scrollbarPosition
	}, d = function(t) {
		s[t] && (clearTimeout(s[t]), J(s, t))
	}, p = function(t) {
		return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
	}, f = function(t) {
		return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
	}, v = function() {
		var t = L(this),
			e = t.data(O),
			n = e.opt,
			i = n.autoExpandScrollbar ? " " + m[1] + "_expand" : "",
			o = ["<div id='mCSB_" + e.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_vertical" + i + "'><div class='" + m[12] + "'><div id='mCSB_" + e.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + e.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_horizontal" + i + "'><div class='" + m[12] + "'><div id='mCSB_" + e.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
			s = "yx" === n.axis ? "mCSB_vertical_horizontal" : "x" === n.axis ? "mCSB_horizontal" : "mCSB_vertical",
			r = "yx" === n.axis ? o[0] + o[1] : "x" === n.axis ? o[1] : o[0],
			a = "yx" === n.axis ? "<div id='mCSB_" + e.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
			i = n.autoHideScrollbar ? " " + m[6] : "",
			o = "x" !== n.axis && "rtl" === e.langDir ? " " + m[7] : "";
		n.setWidth && t.css("width", n.setWidth), n.setHeight && t.css("height", n.setHeight), n.setLeft = "y" !== n.axis && "rtl" === e.langDir ? "989999px" : n.setLeft, t.addClass(l + " _" + O + "_" + e.idx + i + o).wrapInner("<div id='mCSB_" + e.idx + "' class='mCustomScrollBox mCS-" + n.theme + " " + s + "'><div id='mCSB_" + e.idx + "_container' class='mCSB_container' style='position:relative; top:" + n.setTop + "; left:" + n.setLeft + ";' dir='" + e.langDir + "' /></div>");
		o = L("#mCSB_" + e.idx), s = L("#mCSB_" + e.idx + "_container");
		"y" === n.axis || n.advanced.autoExpandHorizontalScroll || s.css("width", y(s)), "outside" === n.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), o.addClass("mCSB_outside").after(r)) : (o.addClass("mCSB_inside").append(r), s.wrap(a)), w.call(this);
		e = [L("#mCSB_" + e.idx + "_dragger_vertical"), L("#mCSB_" + e.idx + "_dragger_horizontal")];
		e[0].css("min-height", e[0].height()), e[1].css("min-width", e[1].width())
	}, y = function(t) {
		var e = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
				return L(this).outerWidth(!0)
			}).get())],
			t = t.parent().width();
		return t < e[0] ? e[0] : t < e[1] ? e[1] : "100%"
	}, b = function() {
		var t = L(this).data(O),
			e = t.opt,
			n = L("#mCSB_" + t.idx + "_container");
		e.advanced.autoExpandHorizontalScroll && "y" !== e.axis && (n.css({
			width: "auto",
			"min-width": 0,
			"overflow-x": "scroll"
		}), t = Math.ceil(n[0].scrollWidth), 3 === e.advanced.autoExpandHorizontalScroll || 2 !== e.advanced.autoExpandHorizontalScroll && t > n.parent().width() ? n.css({
			width: t,
			"min-width": "100%",
			"overflow-x": "inherit"
		}) : n.css({
			"overflow-x": "inherit",
			position: "absolute"
		}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
			width: Math.ceil(n[0].getBoundingClientRect().right + .4) - Math.floor(n[0].getBoundingClientRect().left),
			"min-width": "100%",
			position: "relative"
		}).unwrap())
	}, w = function() {
		var t = L(this).data(O),
			e = t.opt,
			n = L(".mCSB_" + t.idx + "_scrollbar:first"),
			t = nt(e.scrollButtons.tabindex) ? "tabindex='" + e.scrollButtons.tabindex + "'" : "",
			t = ["<a href='#' class='" + m[13] + "' " + t + " />", "<a href='#' class='" + m[14] + "' " + t + " />", "<a href='#' class='" + m[15] + "' " + t + " />", "<a href='#' class='" + m[16] + "' " + t + " />"],
			t = ["x" === e.axis ? t[2] : t[0], "x" === e.axis ? t[3] : t[1], t[2], t[3]];
		e.scrollButtons.enable && n.prepend(t[0]).append(t[1]).next(".mCSB_scrollTools").prepend(t[2]).append(t[3])
	}, x = function() {
		var t = L(this).data(O),
			e = L("#mCSB_" + t.idx),
			n = L("#mCSB_" + t.idx + "_container"),
			i = [L("#mCSB_" + t.idx + "_dragger_vertical"), L("#mCSB_" + t.idx + "_dragger_horizontal")],
			t = [e.height() / n.outerHeight(!1), e.width() / n.outerWidth(!1)],
			e = [parseInt(i[0].css("min-height")), Math.round(t[0] * i[0].parent().height()), parseInt(i[1].css("min-width")), Math.round(t[1] * i[1].parent().width())],
			n = g && e[1] < e[0] ? e[0] : e[1],
			t = g && e[3] < e[2] ? e[2] : e[3];
		i[0].css({
			height: n,
			"max-height": i[0].parent().height() - 10
		}).find(".mCSB_dragger_bar").css({
			"line-height": e[0] + "px"
		}), i[1].css({
			width: t,
			"max-width": i[1].parent().width() - 10
		})
	}, C = function() {
		var t = L(this).data(O),
			e = L("#mCSB_" + t.idx),
			n = L("#mCSB_" + t.idx + "_container"),
			i = [L("#mCSB_" + t.idx + "_dragger_vertical"), L("#mCSB_" + t.idx + "_dragger_horizontal")],
			e = [n.outerHeight(!1) - e.height(), n.outerWidth(!1) - e.width()],
			i = [e[0] / (i[0].parent().height() - i[0].height()), e[1] / (i[1].parent().width() - i[1].width())];
		t.scrollRatio = {
			y: i[0],
			x: i[1]
		}
	}, S = function() {
		var t = L(this).data(O),
			e = L("#mCSB_" + t.idx),
			n = L("#mCSB_" + t.idx + "_container"),
			i = null == t.overflowed ? n.height() : n.outerHeight(!1),
			o = null == t.overflowed ? n.width() : n.outerWidth(!1),
			t = n[0].scrollHeight,
			n = n[0].scrollWidth;
		return i < t && (i = t), o < n && (o = n), [i > e.height(), o > e.width()]
	}, _ = function() {
		var t = L(this),
			e = t.data(O),
			n = e.opt,
			i = L("#mCSB_" + e.idx),
			o = L("#mCSB_" + e.idx + "_container"),
			s = [L("#mCSB_" + e.idx + "_dragger_vertical"), L("#mCSB_" + e.idx + "_dragger_horizontal")];
		V(t), ("x" !== n.axis && !e.overflowed[0] || "y" === n.axis && e.overflowed[0]) && (s[0].add(o).css("top", 0), K(t, "_resetY")), ("y" !== n.axis && !e.overflowed[1] || "x" === n.axis && e.overflowed[1]) && (n = dx = 0, "rtl" === e.langDir && (n = i.width() - o.outerWidth(!1), dx = Math.abs(n / e.scrollRatio.x)), o.css("left", n), s[1].css("left", dx), K(t, "_resetX"))
	}, T = function() {
		var e, n = L(this),
			t = n.data(O),
			i = t.opt;
		t.bindEvents || (r.call(this), i.contentTouchScroll && A.call(this), I.call(this), i.mouseWheel.enable && function t() {
			e = setTimeout(function() {
				L.event.special.mousewheel ? (clearTimeout(e), D.call(n[0])) : t()
			}, 100)
		}(), B.call(this), F.call(this), i.advanced.autoScrollOnFocus && R.call(this), i.scrollButtons.enable && q.call(this), i.keyboard.enable && z.call(this), t.bindEvents = !0)
	}, k = function() {
		var t = L(this),
			e = t.data(O),
			n = e.opt,
			i = "mCS_" + e.idx,
			o = ".mCSB_" + e.idx + "_scrollbar",
			s = L("#mCSB_" + e.idx + ",#mCSB_" + e.idx + "_container,#mCSB_" + e.idx + "_container_wrapper," + o + " ." + m[12] + ",#mCSB_" + e.idx + "_dragger_vertical,#mCSB_" + e.idx + "_dragger_horizontal," + o + ">a"),
			o = L("#mCSB_" + e.idx + "_container");
		n.advanced.releaseDraggableSelectors && s.add(L(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && s.add(L(n.advanced.extraDraggableSelectors)), e.bindEvents && (L(document).add(L(!j() || top.document)).unbind("." + i), s.each(function() {
			L(this).unbind("." + i)
		}), clearTimeout(t[0]._focusTimeout), J(t[0], "_focusTimeout"), clearTimeout(e.sequential.step), J(e.sequential, "step"), clearTimeout(o[0].onCompleteTimeout), J(o[0], "onCompleteTimeout"), e.bindEvents = !1)
	}, E = function(t) {
		var e = L(this),
			n = e.data(O),
			i = n.opt,
			o = L("#mCSB_" + n.idx + "_container_wrapper"),
			s = o.length ? o : L("#mCSB_" + n.idx + "_container"),
			r = [L("#mCSB_" + n.idx + "_scrollbar_vertical"), L("#mCSB_" + n.idx + "_scrollbar_horizontal")],
			o = [r[0].find(".mCSB_dragger"), r[1].find(".mCSB_dragger")];
		"x" !== i.axis && (n.overflowed[0] && !t ? (r[0].add(o[0]).add(r[0].children("a")).css("display", "block"), s.removeClass(m[8] + " " + m[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && o[0].css("display", "none"), s.removeClass(m[10])) : (r[0].css("display", "none"), s.addClass(m[10])), s.addClass(m[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (r[1].add(o[1]).add(r[1].children("a")).css("display", "block"), s.removeClass(m[9] + " " + m[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && o[1].css("display", "none"), s.removeClass(m[11])) : (r[1].css("display", "none"), s.addClass(m[11])), s.addClass(m[9]))), n.overflowed[0] || n.overflowed[1] ? e.removeClass(m[5]) : e.addClass(m[5])
	}, r = function() {
		function i(t, e, n, i) {
			var o;
			d[0].idleTimer = c.scrollInertia < 233 ? 250 : 0, n = s.attr("id") === u[1] ? (o = "x", (s[0].offsetLeft - e + i) * l.scrollRatio.x) : (o = "y", (s[0].offsetTop - t + n) * l.scrollRatio.y), K(a, n.toString(), {
				dir: o,
				drag: !0
			})
		}
		var s, o, r, a = L(this),
			l = a.data(O),
			c = l.opt,
			t = "mCS_" + l.idx,
			u = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
			d = L("#mCSB_" + l.idx + "_container"),
			e = L("#" + u[0] + ",#" + u[1]),
			n = c.advanced.releaseDraggableSelectors ? e.add(L(c.advanced.releaseDraggableSelectors)) : e,
			h = c.advanced.extraDraggableSelectors ? L(!j() || top.document).add(L(c.advanced.extraDraggableSelectors)) : L(!j() || top.document);
		e.bind("contextmenu." + t, function(t) {
			t.preventDefault()
		}).bind("mousedown." + t + " touchstart." + t + " pointerdown." + t + " MSPointerDown." + t, function(t) {
			var e, n, i;
			t.stopImmediatePropagation(), t.preventDefault(), tt(t) && (M = !0, g && (document.onselectstart = function() {
				return !1
			}), P.call(d, !1), V(a), i = (s = L(this)).offset(), e = rt(t)[0] - i.top, n = rt(t)[1] - i.left, t = s.height() + i.top, i = s.width() + i.left, e < t && 0 < e && n < i && 0 < n && (o = e, r = n), st(s, "active", c.autoExpandScrollbar))
		}).bind("touchmove." + t, function(t) {
			t.stopImmediatePropagation(), t.preventDefault();
			var e = s.offset(),
				n = rt(t)[0] - e.top,
				e = rt(t)[1] - e.left;
			i(o, r, n, e)
		}), L(document).add(h).bind("mousemove." + t + " pointermove." + t + " MSPointerMove." + t, function(t) {
			var e, n;
			s && (n = s.offset(), e = rt(t)[0] - n.top, n = rt(t)[1] - n.left, o === e && r === n || i(o, r, e, n))
		}).add(n).bind("mouseup." + t + " touchend." + t + " pointerup." + t + " MSPointerUp." + t, function() {
			s && (st(s, "active", c.autoExpandScrollbar), s = null), M = !1, g && (document.onselectstart = null), P.call(d, !0)
		})
	}, A = function() {
		function e(t) {
			var e;
			!et(t) || M || rt(t)[2] ? N = 0 : (y = v = 0, a = N = 1, b.removeClass("mCS_touch_action"), e = S.offset(), l = rt(t)[0] - e.top, c = rt(t)[1] - e.left, I = [rt(t)[0], rt(t)[1]])
		}

		function n(t) {
			var e, n, i, o, s;
			!et(t) || M || rt(t)[2] || (x.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), y && !v || !a) || (p = G(), i = C.offset(), e = rt(t)[0] - i.top, n = rt(t)[1] - i.left, i = "mcsLinearOut", T.push(e), k.push(n), I[2] = Math.abs(rt(t)[0] - I[0]), I[3] = Math.abs(rt(t)[1] - I[1]), w.overflowed[0] && (o = _[0].parent().height() - _[0].height(), o = 0 < l - e && e - l > -o * w.scrollRatio.y && (2 * I[3] < I[2] || "yx" === x.axis)), w.overflowed[1] && (s = _[1].parent().width() - _[1].width(), s = 0 < c - n && n - c > -s * w.scrollRatio.x && (2 * I[2] < I[3] || "yx" === x.axis)), o || s ? (P || t.preventDefault(), v = 1) : (y = 1, b.addClass("mCS_touch_action")), P && t.preventDefault(), g = "yx" === x.axis ? [l - e, c - n] : "x" === x.axis ? [null, c - n] : [l - e, null], S[0].idleTimer = 250, w.overflowed[0] && r(g[0], E, i, "y", "all", !0), w.overflowed[1] && r(g[1], E, i, "x", A, !0))
		}

		function i(t) {
			var e;
			!et(t) || M || rt(t)[2] ? N = 0 : (N = 1, t.stopImmediatePropagation(), V(b), h = G(), e = C.offset(), u = rt(t)[0] - e.top, d = rt(t)[1] - e.left, T = [], k = [])
		}

		function o(t) {
			var e, n, i, o;
			!et(t) || M || rt(t)[2] || (a = 0, t.stopImmediatePropagation(), y = v = 0, f = G(), i = C.offset(), e = rt(t)[0] - i.top, o = rt(t)[1] - i.left, 30 < f - p || (n = "mcsEaseOut", i = (t = (m = 1e3 / (f - h)) < 2.5) ? [T[T.length - 2], k[k.length - 2]] : [0, 0], f = t ? [e - i[0], o - i[1]] : [e - u, o - d], o = [Math.abs(f[0]), Math.abs(f[1])], m = t ? [Math.abs(f[0] / 4), Math.abs(f[1] / 4)] : [m, m], t = [Math.abs(S[0].offsetTop) - f[0] * s(o[0] / m[0], m[0]), Math.abs(S[0].offsetLeft) - f[1] * s(o[1] / m[1], m[1])], g = "yx" === x.axis ? [t[0], t[1]] : "x" === x.axis ? [null, t[1]] : [t[0], null], m = [4 * o[0] + x.scrollInertia, 4 * o[1] + x.scrollInertia], t = parseInt(x.contentTouchScroll) || 0, g[0] = t < o[0] ? g[0] : 0, g[1] = t < o[1] ? g[1] : 0, w.overflowed[0] && r(g[0], m[0], n, "y", A, !1), w.overflowed[1] && r(g[1], m[1], n, "x", A, !1)))
		}

		function s(t, e) {
			var n = [1.5 * e, 2 * e, e / 1.5, e / 2];
			return 90 < t ? 4 < e ? n[0] : n[3] : 60 < t ? 3 < e ? n[3] : n[2] : 30 < t ? 8 < e ? n[1] : 6 < e ? n[0] : 4 < e ? e : n[2] : 8 < e ? e : n[3]
		}

		function r(t, e, n, i, o, s) {
			t && K(b, t.toString(), {
				dur: e,
				scrollEasing: n,
				dir: i,
				overwrite: o,
				drag: s
			})
		}
		var a, l, c, u, d, h, p, f, g, m, v, y, b = L(this),
			w = b.data(O),
			x = w.opt,
			t = "mCS_" + w.idx,
			C = L("#mCSB_" + w.idx),
			S = L("#mCSB_" + w.idx + "_container"),
			_ = [L("#mCSB_" + w.idx + "_dragger_vertical"), L("#mCSB_" + w.idx + "_dragger_horizontal")],
			T = [],
			k = [],
			E = 0,
			A = "yx" === x.axis ? "none" : "all",
			I = [],
			D = S.find("iframe"),
			$ = ["touchstart." + t + " pointerdown." + t + " MSPointerDown." + t, "touchmove." + t + " pointermove." + t + " MSPointerMove." + t, "touchend." + t + " pointerup." + t + " MSPointerUp." + t],
			P = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
		S.bind($[0], function(t) {
			e(t)
		}).bind($[1], function(t) {
			n(t)
		}), C.bind($[0], function(t) {
			i(t)
		}).bind($[2], function(t) {
			o(t)
		}), D.length && D.each(function() {
			L(this).bind("load", function() {
				j(this) && L(this.contentDocument || this.contentWindow.document).bind($[0], function(t) {
					e(t), i(t)
				}).bind($[1], function(t) {
					n(t)
				}).bind($[2], function(t) {
					o(t)
				})
			})
		})
	}, I = function() {
		function i(t, e, n) {
			l.type = n && o ? "stepped" : "stepless", l.scrollAmount = 10, W(s, t, e, "mcsLinearOut", n ? 60 : null)
		}
		var o, s = L(this),
			r = s.data(O),
			a = r.opt,
			l = r.sequential,
			t = "mCS_" + r.idx,
			c = L("#mCSB_" + r.idx + "_container"),
			u = c.parent();
		c.bind("mousedown." + t, function() {
			N || o || (o = 1, M = !0)
		}).add(document).bind("mousemove." + t, function(t) {
			var e, n;
			!N && o && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text) && (n = c.offset(), e = rt(t)[0] - n.top + c[0].offsetTop, n = rt(t)[1] - n.left + c[0].offsetLeft, 0 < e && e < u.height() && 0 < n && n < u.width() ? l.step && i("off", null, "stepped") : ("x" !== a.axis && r.overflowed[0] && (e < 0 ? i("on", 38) : e > u.height() && i("on", 40)), "y" !== a.axis && r.overflowed[1] && (n < 0 ? i("on", 37) : n > u.width() && i("on", 39))))
		}).bind("mouseup." + t + " dragend." + t, function() {
			N || (o && (o = 0, i("off", null)), M = !1)
		})
	}, D = function() {
		function n(t, e) {
			var n, i, o, s, r, a, l, c;
			V(u), H(u, t.target) || (n = "auto" !== h.mouseWheel.deltaFactor ? parseInt(h.mouseWheel.deltaFactor) : !(g && t.deltaFactor < 100) && t.deltaFactor || 100, i = h.scrollInertia, e = "x" === h.axis || "x" === h.mouseWheel.axis ? (o = "x", s = [Math.round(n * d.scrollRatio.x), parseInt(h.mouseWheel.scrollAmount)], r = "auto" !== h.mouseWheel.scrollAmount ? s[1] : s[0] >= p.width() ? .9 * p.width() : s[0], a = Math.abs(L("#mCSB_" + d.idx + "_container")[0].offsetLeft), l = f[1][0].offsetLeft, c = f[1].parent().width() - f[1].width(), "y" === h.mouseWheel.axis ? t.deltaY || e : t.deltaX) : (o = "y", s = [Math.round(n * d.scrollRatio.y), parseInt(h.mouseWheel.scrollAmount)], r = "auto" !== h.mouseWheel.scrollAmount ? s[1] : s[0] >= p.height() ? .9 * p.height() : s[0], a = Math.abs(L("#mCSB_" + d.idx + "_container")[0].offsetTop), l = f[0][0].offsetTop, c = f[0].parent().height() - f[0].height(), t.deltaY || e), "y" === o && !d.overflowed[0] || "x" === o && !d.overflowed[1] || ((h.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (e = -e), h.mouseWheel.normalizeDelta && (e = e < 0 ? -1 : 1), (0 < e && 0 !== l || e < 0 && l !== c || h.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !h.mouseWheel.normalizeDelta && (r = t.deltaFactor, i = 17), K(u, (a - e * r).toString(), {
				dir: o,
				dur: i
			})))
		}
		var u, d, h, t, p, f, e;
		L(this).data(O) && (u = L(this), d = u.data(O), h = d.opt, t = "mCS_" + d.idx, p = L("#mCSB_" + d.idx), f = [L("#mCSB_" + d.idx + "_dragger_vertical"), L("#mCSB_" + d.idx + "_dragger_horizontal")], (e = L("#mCSB_" + d.idx + "_container").find("iframe")).length && e.each(function() {
			L(this).bind("load", function() {
				j(this) && L(this.contentDocument || this.contentWindow.document).bind("mousewheel." + t, function(t, e) {
					n(t, e)
				})
			})
		}), p.bind("mousewheel." + t, function(t, e) {
			n(t, e)
		}))
	}, $ = new Object, j = function(t) {
		var e = !1,
			n = !1,
			i = null;
		if(void 0 === t ? n = "#empty" : void 0 !== L(t).attr("id") && (n = L(t).attr("id")), !1 !== n && void 0 !== $[n]) return $[n];
		if(t) {
			try {
				i = (t.contentDocument || t.contentWindow.document).body.innerHTML
			} catch(t) {}
			e = null !== i
		} else {
			try {
				i = top.document.body.innerHTML
			} catch(t) {}
			e = null !== i
		}
		return !1 !== n && ($[n] = e), e
	}, P = function(t) {
		var e = this.find("iframe");
		e.length && (t = t ? "auto" : "none", e.css("pointer-events", t))
	}, H = function(t, e) {
		var n = e.nodeName.toLowerCase(),
			t = t.data(O).opt.mouseWheel.disableOver;
		return -1 < L.inArray(n, t) && !(-1 < L.inArray(n, ["select", "textarea"]) && !L(e).is(":focus"))
	}, B = function() {
		var r, a = L(this),
			l = a.data(O),
			t = "mCS_" + l.idx,
			c = L("#mCSB_" + l.idx + "_container"),
			u = c.parent();
		L(".mCSB_" + l.idx + "_scrollbar ." + m[12]).bind("mousedown." + t + " touchstart." + t + " pointerdown." + t + " MSPointerDown." + t, function(t) {
			M = !0, L(t.target).hasClass("mCSB_dragger") || (r = 1)
		}).bind("touchend." + t + " pointerup." + t + " MSPointerUp." + t, function() {
			M = !1
		}).bind("click." + t, function(t) {
			if(r && (r = 0, L(t.target).hasClass(m[12]) || L(t.target).hasClass("mCSB_draggerRail"))) {
				V(a);
				var e = L(this),
					n = e.find(".mCSB_dragger");
				if(0 < e.parent(".mCSB_scrollTools_horizontal").length) {
					if(!l.overflowed[1]) return;
					var i = "x",
						o = t.pageX > n.offset().left ? -1 : 1,
						s = Math.abs(c[0].offsetLeft) - o * (.9 * u.width())
				} else {
					if(!l.overflowed[0]) return;
					i = "y", o = t.pageY > n.offset().top ? -1 : 1, s = Math.abs(c[0].offsetTop) - o * (.9 * u.height())
				}
				K(a, s.toString(), {
					dir: i,
					scrollEasing: "mcsEaseInOut"
				})
			}
		})
	}, R = function() {
		var o = L(this),
			t = o.data(O),
			s = t.opt,
			e = "mCS_" + t.idx,
			r = L("#mCSB_" + t.idx + "_container"),
			a = r.parent();
		r.bind("focusin." + e, function() {
			var i = L(document.activeElement),
				t = r.find(".mCustomScrollBox").length;
			i.is(s.advanced.autoScrollOnFocus) && (V(o), clearTimeout(o[0]._focusTimeout), o[0]._focusTimer = t ? 17 * t : 0, o[0]._focusTimeout = setTimeout(function() {
				var t = [it(i)[0], it(i)[1]],
					e = [r[0].offsetTop, r[0].offsetLeft],
					n = [0 <= e[0] + t[0] && e[0] + t[0] < a.height() - i.outerHeight(!1), 0 <= e[1] + t[1] && e[0] + t[1] < a.width() - i.outerWidth(!1)],
					e = "yx" !== s.axis || n[0] || n[1] ? "all" : "none";
				"x" === s.axis || n[0] || K(o, t[0].toString(), {
					dir: "y",
					scrollEasing: "mcsEaseInOut",
					overwrite: e,
					dur: 0
				}), "y" === s.axis || n[1] || K(o, t[1].toString(), {
					dir: "x",
					scrollEasing: "mcsEaseInOut",
					overwrite: e,
					dur: 0
				})
			}, o[0]._focusTimer))
		})
	}, F = function() {
		var t = L(this).data(O),
			e = "mCS_" + t.idx,
			n = L("#mCSB_" + t.idx + "_container").parent();
		n.bind("scroll." + e, function() {
			0 === n.scrollTop() && 0 === n.scrollLeft() || L(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden")
		})
	}, q = function() {
		var i = L(this),
			o = i.data(O),
			s = o.opt,
			r = o.sequential,
			t = "mCS_" + o.idx,
			e = ".mCSB_" + o.idx + "_scrollbar";
		L(e + ">a").bind("contextmenu." + t, function(t) {
			t.preventDefault()
		}).bind("mousedown." + t + " touchstart." + t + " pointerdown." + t + " MSPointerDown." + t + " mouseup." + t + " touchend." + t + " pointerup." + t + " MSPointerUp." + t + " mouseout." + t + " pointerout." + t + " MSPointerOut." + t + " click." + t, function(t) {
			function e(t, e) {
				r.scrollAmount = s.scrollButtons.scrollAmount, W(i, t, e)
			}
			if(t.preventDefault(), tt(t)) {
				var n = L(this).attr("class");
				switch(r.type = s.scrollButtons.scrollType, t.type) {
					case "mousedown":
					case "touchstart":
					case "pointerdown":
					case "MSPointerDown":
						if("stepped" === r.type) return;
						M = !0, o.tweenRunning = !1, e("on", n);
						break;
					case "mouseup":
					case "touchend":
					case "pointerup":
					case "MSPointerUp":
					case "mouseout":
					case "pointerout":
					case "MSPointerOut":
						if("stepped" === r.type) return;
						M = !1, r.dir && e("off", n);
						break;
					case "click":
						if("stepped" !== r.type || o.tweenRunning) return;
						e("on", n)
				}
			}
		})
	}, z = function() {
		function e(t) {
			function e(t, e) {
				c.type = l.keyboard.scrollType, c.scrollAmount = l.keyboard.scrollAmount, "stepped" === c.type && a.tweenRunning || W(r, t, e)
			}
			switch(t.type) {
				case "blur":
					a.tweenRunning && c.dir && e("off", null);
					break;
				case "keydown":
				case "keyup":
					var n, i, o = t.keyCode || t.which,
						s = "on";
					if("x" !== l.axis && (38 === o || 40 === o) || "y" !== l.axis && (37 === o || 39 === o)) {
						if((38 === o || 40 === o) && !a.overflowed[0] || (37 === o || 39 === o) && !a.overflowed[1]) return;
						"keyup" === t.type && (s = "off"), L(document.activeElement).is(h) || (t.preventDefault(), t.stopImmediatePropagation(), e(s, o))
					} else 33 === o || 34 === o ? ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type && (V(r), i = 34 === o ? -1 : 1, i = "x" === l.axis || "yx" === l.axis && a.overflowed[1] && !a.overflowed[0] ? (n = "x", Math.abs(u[0].offsetLeft) - i * (.9 * d.width())) : (n = "y", Math.abs(u[0].offsetTop) - i * (.9 * d.height())), K(r, i.toString(), {
						dir: n,
						scrollEasing: "mcsEaseInOut"
					}))) : 35 !== o && 36 !== o || L(document.activeElement).is(h) || ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" !== t.type) || (i = "x" === l.axis || "yx" === l.axis && a.overflowed[1] && !a.overflowed[0] ? (n = "x", 35 === o ? Math.abs(d.width() - u.outerWidth(!1)) : 0) : (n = "y", 35 === o ? Math.abs(d.height() - u.outerHeight(!1)) : 0), K(r, i.toString(), {
						dir: n,
						scrollEasing: "mcsEaseInOut"
					}))
			}
		}
		var r = L(this),
			a = r.data(O),
			l = a.opt,
			c = a.sequential,
			t = "mCS_" + a.idx,
			n = L("#mCSB_" + a.idx),
			u = L("#mCSB_" + a.idx + "_container"),
			d = u.parent(),
			h = "input,textarea,select,datalist,keygen,[contenteditable='true']",
			i = u.find("iframe"),
			o = ["blur." + t + " keydown." + t + " keyup." + t];
		i.length && i.each(function() {
			L(this).bind("load", function() {
				j(this) && L(this.contentDocument || this.contentWindow.document).bind(o[0], function(t) {
					e(t)
				})
			})
		}), n.attr("tabindex", "0").bind(o[0], function(t) {
			e(t)
		})
	}, W = function(r, t, e, a, l) {
		function c(t) {
			d.snapAmount && (h.scrollAmount = d.snapAmount instanceof Array ? "x" === h.dir[0] ? d.snapAmount[1] : d.snapAmount[0] : d.snapAmount);
			var e = "stepped" !== h.type,
				n = l || (t ? e ? f / 1.5 : g : 1e3 / 60),
				i = t ? e ? 7.5 : 40 : 2.5,
				o = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)],
				s = [10 < u.scrollRatio.y ? 10 : u.scrollRatio.y, 10 < u.scrollRatio.x ? 10 : u.scrollRatio.x],
				s = "x" === h.dir[0] ? o[1] + h.dir[1] * (s[1] * i) : o[0] + h.dir[1] * (s[0] * i),
				i = "x" === h.dir[0] ? o[1] + h.dir[1] * parseInt(h.scrollAmount) : o[0] + h.dir[1] * parseInt(h.scrollAmount),
				i = "auto" !== h.scrollAmount ? i : s,
				s = a || (t ? e ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
				e = !!t;
			return t && n < 17 && (i = "x" === h.dir[0] ? o[1] : o[0]), K(r, i.toString(), {
				dir: h.dir[0],
				scrollEasing: s,
				dur: n,
				onComplete: e
			}), t ? void(h.dir = !1) : (clearTimeout(h.step), void(h.step = setTimeout(function() {
				c()
			}, n)))
		}
		var u = r.data(O),
			d = u.opt,
			h = u.sequential,
			p = L("#mCSB_" + u.idx + "_container"),
			n = "stepped" === h.type,
			f = d.scrollInertia < 26 ? 26 : d.scrollInertia,
			g = d.scrollInertia < 1 ? 17 : d.scrollInertia;
		switch(t) {
			case "on":
				if(h.dir = [e === m[16] || e === m[15] || 39 === e || 37 === e ? "x" : "y", e === m[13] || e === m[15] || 38 === e || 37 === e ? -1 : 1], V(r), nt(e) && "stepped" === h.type) return;
				c(n);
				break;
			case "off":
				clearTimeout(h.step), J(h, "step"), V(r), (n || u.tweenRunning && h.dir) && c(!0)
		}
	}, U = function(t) {
		var e = L(this).data(O).opt,
			n = [];
		return "function" == typeof t && (t = t()), t instanceof Array ? n = 1 < t.length ? [t[0], t[1]] : "x" === e.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y || (t.x || "x" === e.axis ? null : t), n[1] = t.x || (t.y || "y" === e.axis ? null : t)), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
	}, Y = function(t, e) {
		if(null != t && void 0 !== t) {
			var n = L(this),
				i = n.data(O),
				o = i.opt,
				s = L("#mCSB_" + i.idx + "_container"),
				r = s.parent(),
				i = typeof t,
				a = "x" === (e = e || ("x" === o.axis ? "x" : "y")) ? s.outerWidth(!1) - r.width() : s.outerHeight(!1) - r.height(),
				l = "x" === e ? s[0].offsetLeft : s[0].offsetTop,
				c = "x" === e ? "left" : "top";
			switch(i) {
				case "function":
					return t();
				case "object":
					return(d = t.jquery ? t : L(t)).length ? "x" === e ? it(d)[1] : it(d)[0] : void 0;
				case "string":
				case "number":
					if(nt(t)) return Math.abs(t);
					if(-1 !== t.indexOf("%")) return Math.abs(a * parseInt(t) / 100);
					if(-1 !== t.indexOf("-=")) return Math.abs(l - parseInt(t.split("-=")[1]));
					if(-1 !== t.indexOf("+=")) {
						var u = l + parseInt(t.split("+=")[1]);
						return 0 <= u ? 0 : Math.abs(u)
					}
					if(-1 !== t.indexOf("px") && nt(t.split("px")[0])) return Math.abs(t.split("px")[0]);
					if("top" === t || "left" === t) return 0;
					if("bottom" === t) return Math.abs(r.height() - s.outerHeight(!1));
					if("right" === t) return Math.abs(r.width() - s.outerWidth(!1));
					if("first" !== t && "last" !== t) return L(t).length ? "x" === e ? it(L(t))[1] : it(L(t))[0] : (s.css(c, t), void h.update.call(null, n[0]));
					var d = s.find(":" + t);
					return "x" === e ? it(d)[1] : it(d)[0]
			}
		}
	}, X = function(t) {
		function i(t) {
			clearTimeout(s[0].autoUpdate), h.update.call(null, e[0], t)
		}
		var e = L(this),
			n = e.data(O),
			o = n.opt,
			s = L("#mCSB_" + n.idx + "_container");
		return t ? (clearTimeout(s[0].autoUpdate), void J(s[0], "autoUpdate")) : void
		function t() {
			return clearTimeout(s[0].autoUpdate), 0 === e.parents("html").length ? void(e = null) : void(s[0].autoUpdate = setTimeout(function() {
				return o.advanced.updateOnSelectorChange && (n.poll.change.n = function() {
					!0 === o.advanced.updateOnSelectorChange && (o.advanced.updateOnSelectorChange = "*");
					var t = 0,
						e = s.find(o.advanced.updateOnSelectorChange);
					return o.advanced.updateOnSelectorChange && 0 < e.length && e.each(function() {
						t += this.offsetHeight + this.offsetWidth
					}), t
				}(), n.poll.change.n !== n.poll.change.o) ? (n.poll.change.o = n.poll.change.n, void i(3)) : o.advanced.updateOnContentResize && (n.poll.size.n = e[0].scrollHeight + e[0].scrollWidth + s[0].offsetHeight + e[0].offsetHeight + e[0].offsetWidth, n.poll.size.n !== n.poll.size.o) ? (n.poll.size.o = n.poll.size.n, void i(1)) : !o.advanced.updateOnImageLoad || "auto" === o.advanced.updateOnImageLoad && "y" === o.axis || (n.poll.img.n = s.find("img").length, n.poll.img.n === n.poll.img.o) ? void((o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad) && t()) : (n.poll.img.o = n.poll.img.n, void s.find("img").each(function() {
					var t, e, n;
					L(t = this).hasClass(m[2]) ? i() : ((e = new Image).onload = (n = e, function() {
						return function() {
							this.onload = null, L(t).addClass(m[2]), i(2)
						}.apply(n, arguments)
					}), e.src = t.src)
				}))
			}, o.advanced.autoUpdateTimeout))
		}()
	}, V = function(t) {
		t = t.data(O);
		L("#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper,#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal").each(function() {
			Z.call(this)
		})
	}, K = function(o, t, s) {
		function e(t) {
			return i && r.callbacks[t] && "function" == typeof r.callbacks[t]
		}

		function n() {
			var t = [u[0].offsetTop, u[0].offsetLeft],
				e = [f[0].offsetTop, f[0].offsetLeft],
				n = [u.outerHeight(!1), u.outerWidth(!1)],
				i = [c.height(), c.width()];
			o[0].mcs = {
				content: u,
				top: t[0],
				left: t[1],
				draggerTop: e[0],
				draggerLeft: e[1],
				topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(n[0]) - i[0])),
				leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(n[1]) - i[1])),
				direction: s.dir
			}
		}
		var i = o.data(O),
			r = i.opt,
			a = {
				trigger: "internal",
				dir: "y",
				scrollEasing: "mcsEaseOut",
				drag: !1,
				dur: r.scrollInertia,
				overwrite: "all",
				callbacks: !0,
				onStart: !0,
				onUpdate: !0,
				onComplete: !0
			},
			l = [(s = L.extend(a, s)).dur, s.drag ? 0 : s.dur],
			c = L("#mCSB_" + i.idx),
			u = L("#mCSB_" + i.idx + "_container"),
			d = u.parent(),
			h = r.callbacks.onTotalScrollOffset ? U.call(o, r.callbacks.onTotalScrollOffset) : [0, 0],
			p = r.callbacks.onTotalScrollBackOffset ? U.call(o, r.callbacks.onTotalScrollBackOffset) : [0, 0];
		if(i.trigger = s.trigger, 0 === d.scrollTop() && 0 === d.scrollLeft() || (L(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"), d.scrollTop(0).scrollLeft(0)), "_resetY" !== t || i.contentReset.y || (e("onOverflowYNone") && r.callbacks.onOverflowYNone.call(o[0]), i.contentReset.y = 1), "_resetX" !== t || i.contentReset.x || (e("onOverflowXNone") && r.callbacks.onOverflowXNone.call(o[0]), i.contentReset.x = 1), "_resetY" !== t && "_resetX" !== t) {
			switch(!i.contentReset.y && o[0].mcs || !i.overflowed[0] || (e("onOverflowY") && r.callbacks.onOverflowY.call(o[0]), i.contentReset.x = null), !i.contentReset.x && o[0].mcs || !i.overflowed[1] || (e("onOverflowX") && r.callbacks.onOverflowX.call(o[0]), i.contentReset.x = null), r.snapAmount && (a = r.snapAmount instanceof Array ? "x" === s.dir ? r.snapAmount[1] : r.snapAmount[0] : r.snapAmount, d = a, a = r.snapOffset, t = Math.round(t / d) * d - a), s.dir) {
				case "x":
					var f = L("#mCSB_" + i.idx + "_dragger_horizontal"),
						g = "left",
						m = u[0].offsetLeft,
						v = [c.width() - u.outerWidth(!1), f.parent().width() - f.width()],
						y = [t, 0 === t ? 0 : t / i.scrollRatio.x],
						b = h[1],
						w = p[1],
						x = 0 < b ? b / i.scrollRatio.x : 0,
						C = 0 < w ? w / i.scrollRatio.x : 0;
					break;
				case "y":
					f = L("#mCSB_" + i.idx + "_dragger_vertical"), g = "top", m = u[0].offsetTop, v = [c.height() - u.outerHeight(!1), f.parent().height() - f.height()], y = [t, 0 === t ? 0 : t / i.scrollRatio.y], b = h[0], w = p[0], x = 0 < b ? b / i.scrollRatio.y : 0, C = 0 < w ? w / i.scrollRatio.y : 0
			}
			y[1] < 0 || 0 === y[0] && 0 === y[1] ? y = [0, 0] : y[1] >= v[1] ? y = [v[0], v[1]] : y[0] = -y[0], o[0].mcs || (n(), e("onInit") && r.callbacks.onInit.call(o[0])), clearTimeout(u[0].onCompleteTimeout), Q(f[0], g, Math.round(y[1]), l[1], s.scrollEasing), !i.tweenRunning && (0 === m && 0 <= y[0] || m === v[0] && y[0] <= v[0]) || Q(u[0], g, Math.round(y[0]), l[0], s.scrollEasing, s.overwrite, {
				onStart: function() {
					s.callbacks && s.onStart && !i.tweenRunning && (e("onScrollStart") && (n(), r.callbacks.onScrollStart.call(o[0])), i.tweenRunning = !0, st(f), i.cbOffsets = [r.callbacks.alwaysTriggerOffsets || m >= v[0] + b, r.callbacks.alwaysTriggerOffsets || m <= -w])
				},
				onUpdate: function() {
					s.callbacks && s.onUpdate && e("whileScrolling") && (n(), r.callbacks.whileScrolling.call(o[0]))
				},
				onComplete: function() {
					var t;
					s.callbacks && s.onComplete && ("yx" === r.axis && clearTimeout(u[0].onCompleteTimeout), t = u[0].idleTimer || 0, u[0].onCompleteTimeout = setTimeout(function() {
						e("onScroll") && (n(), r.callbacks.onScroll.call(o[0])), e("onTotalScroll") && y[1] >= v[1] - x && i.cbOffsets[0] && (n(), r.callbacks.onTotalScroll.call(o[0])), e("onTotalScrollBack") && y[1] <= C && i.cbOffsets[1] && (n(), r.callbacks.onTotalScrollBack.call(o[0])), i.tweenRunning = !1, u[0].idleTimer = 0, st(f, "hide")
					}, t))
				}
			})
		}
	}, Q = function(t, e, n, i, r, o, s) {
		function a() {
			0 < i ? (v.currVal = function(t, e, n, i) {
				switch(r) {
					case "linear":
					case "mcsLinear":
						return n * t / i + e;
					case "mcsLinearOut":
						return t /= i, t--, n * Math.sqrt(1 - t * t) + e;
					case "easeInOutSmooth":
						return(t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e;
					case "easeInOutStrong":
						return(t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, n / 2 * (2 - Math.pow(2, -10 * t)) + e);
					case "easeInOut":
					case "mcsEaseInOut":
						return(t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e;
					case "easeOutSmooth":
						return t /= i, -n * (--t * t * t * t - 1) + e;
					case "easeOutStrong":
						return n * (1 - Math.pow(2, -10 * t / i)) + e;
					case "easeOut":
					case "mcsEaseOut":
					default:
						var o = (t /= i) * t,
							s = o * t;
						return e + n * (.499999999999997 * s * o + -2.5 * o * o + 5.5 * s + -6.5 * o + 4 * t)
				}
			}(v.time, g, y, i), m[e] = Math.round(v.currVal) + "px") : m[e] = n + "px", d.call()
		}
		t._mTween || (t._mTween = {
			top: {},
			left: {}
		});
		var l, c, u = (s = s || {}).onStart || function() {},
			d = s.onUpdate || function() {},
			h = s.onComplete || function() {},
			p = G(),
			f = 0,
			g = t.offsetTop,
			m = t.style,
			v = t._mTween[e];
		"left" === e && (g = t.offsetLeft);
		var y = n - g;
		v.stop = 0, "none" !== o && null != v.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(v.id) : clearTimeout(v.id), v.id = null), l = 1e3 / 60, v.time = f + l, c = window.requestAnimationFrame || function(t) {
			return a(), setTimeout(t, .01)
		}, v.id = c(function t() {
			v.stop || (f || u.call(), f = G() - p, a(), f >= v.time && (v.time = f > v.time ? f + l - (f - v.time) : f + l - 1, v.time < f + 1 && (v.time = f + 1)), v.time < i ? v.id = c(t) : h.call())
		})
	}, G = function() {
		return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
	}, Z = function() {
		var t = this;
		t._mTween || (t._mTween = {
			top: {},
			left: {}
		});
		for(var e = ["top", "left"], n = 0; n < e.length; n++) {
			var i = e[n];
			t._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[i].id) : clearTimeout(t._mTween[i].id), t._mTween[i].id = null, t._mTween[i].stop = 1)
		}
	}, J = function(e, n) {
		try {
			delete e[n]
		} catch(t) {
			e[n] = null
		}
	}, tt = function(t) {
		return !(t.which && 1 !== t.which)
	}, et = function(t) {
		t = t.originalEvent.pointerType;
		return !(t && "touch" !== t && 2 !== t)
	}, nt = function(t) {
		return !isNaN(parseFloat(t)) && isFinite(t)
	}, it = function(t) {
		var e = t.parents(".mCSB_container");
		return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
	}, ot = function() {
		var t = function() {
			var t = ["webkit", "moz", "ms", "o"];
			if("hidden" in document) return "hidden";
			for(var e = 0; e < t.length; e++)
				if(t[e] + "Hidden" in document) return t[e] + "Hidden";
			return null
		}();
		return !!t && document[t]
	}, L.fn[l] = function(t) {
		return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void L.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
	}, L[l] = function(t) {
		return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void L.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
	}, L[l].defaults = o, window[l] = !0, L(window).bind("load", function() {
		L(i)[l](), L.extend(L.expr[":"], {
			mcsInView: L.expr[":"].mcsInView || function(t) {
				var e = L(t),
					n = e.parents(".mCSB_container");
				if(n.length) return t = n.parent(), 0 <= (n = [n[0].offsetTop, n[0].offsetLeft])[0] + it(e)[0] && n[0] + it(e)[0] < t.height() - e.outerHeight(!1) && 0 <= n[1] + it(e)[1] && n[1] + it(e)[1] < t.width() - e.outerWidth(!1)
			},
			mcsInSight: L.expr[":"].mcsInSight || function(t, e, n) {
				var i = L(t),
					o = i.parents(".mCSB_container"),
					t = "exact" === n[3] ? [
						[1, 0],
						[1, 0]
					] : [
						[.9, .1],
						[.6, .4]
					];
				if(o.length) return n = [i.outerHeight(!1), i.outerWidth(!1)], i = [o[0].offsetTop + it(i)[0], o[0].offsetLeft + it(i)[1]], o = [o.parent()[0].offsetHeight, o.parent()[0].offsetWidth], i[0] - o[0] * (t = [n[0] < o[0] ? t[0] : t[1], n[1] < o[1] ? t[0] : t[1]])[0][0] < 0 && 0 <= i[0] + n[0] - o[0] * t[0][1] && i[1] - o[1] * t[1][0] < 0 && 0 <= i[1] + n[1] - o[1] * t[1][1]
			},
			mcsOverflow: L.expr[":"].mcsOverflow || function(t) {
				t = L(t).data(O);
				if(t) return t.overflowed[0] || t.overflowed[1]
			}
		})
	})
}),
function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], function(t) {
		e(t, window, document)
	}) : "object" == typeof module && module.exports ? module.exports = e(require("jquery"), window, document) : e(jQuery, window, document)
}(function(a, s, t, r) {
	"use strict";
	var l = "intlTelInput",
		n = 1,
		i = {
			allowDropdown: !0,
			autoHideDialCode: !0,
			autoPlaceholder: "polite",
			customPlaceholder: null,
			dropdownContainer: "",
			excludeCountries: [],
			formatOnDisplay: !0,
			geoIpLookup: null,
			hiddenInput: "",
			initialCountry: "",
			nationalMode: !0,
			onlyCountries: [],
			placeholderNumberType: "MOBILE",
			preferredCountries: ["us", "gb"],
			separateDialCode: !1,
			utilsScript: ""
		},
		e = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];

	function c(t, e) {
		this.telInput = a(t), this.options = a.extend({}, i, e), this.ns = "." + l + n++, this.isGoodBrowser = Boolean(t.setSelectionRange), this.hadInitialPlaceholder = Boolean(a(t).attr("placeholder"))
	}
	a(s).on("load", function() {
		a.fn[l].windowLoaded = !0
	}), c.prototype = {
		_init: function() {
			return this.options.nationalMode && (this.options.autoHideDialCode = !1), this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1), this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.isMobile && (a("body").addClass("iti-mobile"), this.options.dropdownContainer || (this.options.dropdownContainer = "body")), this.autoCountryDeferred = new a.Deferred, this.utilsScriptDeferred = new a.Deferred, this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests(), [this.autoCountryDeferred, this.utilsScriptDeferred]
		},
		_processCountryData: function() {
			this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries()
		},
		_addCountryCode: function(t, e, n) {
			e in this.countryCodes || (this.countryCodes[e] = []);
			n = n || 0;
			this.countryCodes[e][n] = t
		},
		_processAllCountries: function() {
			var e, n;
			this.options.onlyCountries.length ? (e = this.options.onlyCountries.map(function(t) {
				return t.toLowerCase()
			}), this.countries = u.filter(function(t) {
				return -1 < e.indexOf(t.iso2)
			})) : this.options.excludeCountries.length ? (n = this.options.excludeCountries.map(function(t) {
				return t.toLowerCase()
			}), this.countries = u.filter(function(t) {
				return -1 === n.indexOf(t.iso2)
			})) : this.countries = u
		},
		_processCountryCodes: function() {
			this.countryCodes = {};
			for(var t = 0; t < this.countries.length; t++) {
				var e = this.countries[t];
				if(this._addCountryCode(e.iso2, e.dialCode, e.priority), e.areaCodes)
					for(var n = 0; n < e.areaCodes.length; n++) this._addCountryCode(e.iso2, e.dialCode + e.areaCodes[n])
			}
		},
		_processPreferredCountries: function() {
			this.preferredCountries = [];
			for(var t = 0; t < this.options.preferredCountries.length; t++) {
				var e = this.options.preferredCountries[t].toLowerCase(),
					e = this._getCountryData(e, !1, !0);
				e && this.preferredCountries.push(e)
			}
		},
		_generateMarkup: function() {
			this.telInput.attr("autocomplete", "off");
			var t = "intl-tel-input";
			this.options.allowDropdown && (t += " allow-dropdown"), this.options.separateDialCode && (t += " separate-dial-code"), this.telInput.wrap(a("<div>", {
				class: t
			})), this.flagsContainer = a("<div>", {
				class: "flag-container"
			}).insertBefore(this.telInput);
			t = a("<div>", {
				class: "selected-flag"
			});
			t.appendTo(this.flagsContainer), this.selectedFlagInner = a("<div>", {
				class: "iti-flag"
			}).appendTo(t), this.options.separateDialCode && (this.selectedDialCode = a("<div>", {
				class: "selected-dial-code"
			}).appendTo(t)), this.options.allowDropdown ? (t.attr("tabindex", "0"), a("<div>", {
				class: "iti-arrow"
			}).appendTo(t), this.countryList = a("<ul>", {
				class: "country-list hide"
			}), this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"), a("<li>", {
				class: "divider"
			}).appendTo(this.countryList)), this._appendListItems(this.countries, ""), this.countryListItems = this.countryList.children(".country"), this.options.dropdownContainer ? this.dropdown = a("<div>", {
				class: "intl-tel-input iti-container"
			}).append(this.countryList) : this.countryList.appendTo(this.flagsContainer)) : this.countryListItems = a(), this.options.hiddenInput && (this.hiddenInput = a("<input>", {
				type: "hidden",
				name: this.options.hiddenInput
			}).insertBefore(this.telInput))
		},
		_appendListItems: function(t, e) {
			for(var n = "", i = 0; i < t.length; i++) {
				var o = t[i];
				n += "<li class='country " + e + "' data-dial-code='" + o.dialCode + "' data-country-code='" + o.iso2 + "'>", n += "<div class='flag-box'><div class='iti-flag " + o.iso2 + "'></div></div>", n += "<span class='country-name'>" + o.name + "</span>", n += "<span class='dial-code'>+" + o.dialCode + "</span>", n += "</li>"
			}
			this.countryList.append(n)
		},
		_setInitialState: function() {
			var t = this.telInput.val();
			this._getDialCode(t) && (!this._isRegionlessNanp(t) || this.options.nationalMode && !this.options.initialCountry) ? this._updateFlagFromNumber(t) : "auto" !== this.options.initialCountry && (this.options.initialCountry ? this._setFlag(this.options.initialCountry.toLowerCase()) : (this.defaultCountry = (this.preferredCountries.length ? this.preferredCountries : this.countries)[0].iso2, t || this._setFlag(this.defaultCountry)), t || this.options.nationalMode || this.options.autoHideDialCode || this.options.separateDialCode || this.telInput.val("+" + this.selectedCountryData.dialCode)), t && this._updateValFromNumber(t)
		},
		_initListeners: function() {
			this._initKeyListeners(), this.options.autoHideDialCode && this._initFocusListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener()
		},
		_initHiddenInputListener: function() {
			var t = this,
				e = this.telInput.closest("form");
			e.length && e.submit(function() {
				t.hiddenInput.val(t.getNumber())
			})
		},
		_initDropdownListeners: function() {
			var e = this,
				t = this.telInput.closest("label");
			t.length && t.on("click" + this.ns, function(t) {
				e.countryList.hasClass("hide") ? e.telInput.focus() : t.preventDefault()
			}), this.selectedFlagInner.parent().on("click" + this.ns, function(t) {
				!e.countryList.hasClass("hide") || e.telInput.prop("disabled") || e.telInput.prop("readonly") || e._showDropdown()
			}), this.flagsContainer.on("keydown" + e.ns, function(t) {
				!e.countryList.hasClass("hide") || 38 != t.which && 40 != t.which && 32 != t.which && 13 != t.which || (t.preventDefault(), t.stopPropagation(), e._showDropdown()), 9 == t.which && e._closeDropdown()
			})
		},
		_initRequests: function() {
			var t = this;
			this.options.utilsScript ? a.fn[l].windowLoaded ? a.fn[l].loadUtils(this.options.utilsScript, this.utilsScriptDeferred) : a(s).on("load", function() {
				a.fn[l].loadUtils(t.options.utilsScript, t.utilsScriptDeferred)
			}) : this.utilsScriptDeferred.resolve(), "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.autoCountryDeferred.resolve()
		},
		_loadAutoCountry: function() {
			a.fn[l].autoCountry ? this.handleAutoCountry() : a.fn[l].startedLoadingAutoCountry || (a.fn[l].startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function(t) {
				a.fn[l].autoCountry = t.toLowerCase(), setTimeout(function() {
					a(".intl-tel-input input").intlTelInput("handleAutoCountry")
				})
			}))
		},
		_initKeyListeners: function() {
			var t = this;
			this.telInput.on("keyup" + this.ns, function() {
				t._updateFlagFromNumber(t.telInput.val()) && t._triggerCountryChange()
			}), this.telInput.on("cut" + this.ns + " paste" + this.ns, function() {
				setTimeout(function() {
					t._updateFlagFromNumber(t.telInput.val()) && t._triggerCountryChange()
				})
			})
		},
		_cap: function(t) {
			var e = this.telInput.attr("maxlength");
			return e && t.length > e ? t.substr(0, e) : t
		},
		_initFocusListeners: function() {
			var n = this;
			this.telInput.on("mousedown" + this.ns, function(t) {
				n.telInput.is(":focus") || n.telInput.val() || (t.preventDefault(), n.telInput.focus())
			}), this.telInput.on("focus" + this.ns, function(t) {
				n.telInput.val() || n.telInput.prop("readonly") || !n.selectedCountryData.dialCode || (n.telInput.val("+" + n.selectedCountryData.dialCode), n.telInput.one("keypress.plus" + n.ns, function(t) {
					43 == t.which && n.telInput.val("")
				}), setTimeout(function() {
					var t, e = n.telInput[0];
					n.isGoodBrowser && (t = n.telInput.val().length, e.setSelectionRange(t, t))
				}))
			});
			var t = this.telInput.prop("form");
			t && a(t).on("submit" + this.ns, function() {
				n._removeEmptyDialCode()
			}), this.telInput.on("blur" + this.ns, function() {
				n._removeEmptyDialCode()
			})
		},
		_removeEmptyDialCode: function() {
			var t = this.telInput.val();
			"+" == t.charAt(0) && ((t = this._getNumeric(t)) && this.selectedCountryData.dialCode != t || this.telInput.val("")), this.telInput.off("keypress.plus" + this.ns)
		},
		_getNumeric: function(t) {
			return t.replace(/\D/g, "")
		},
		_showDropdown: function() {
			this._setDropdownPosition();
			var t = this.countryList.children(".active");
			t.length && (this._highlightListItem(t), this._scrollTo(t)), this._bindDropdownListeners(), this.selectedFlagInner.children(".iti-arrow").addClass("up"), this.telInput.trigger("open:countrydropdown")
		},
		_setDropdownPosition: function() {
			var t, e, n, i, o = this;
			this.options.dropdownContainer && this.dropdown.appendTo(this.options.dropdownContainer), this.dropdownHeight = this.countryList.removeClass("hide").outerHeight(), this.isMobile || (e = (t = this.telInput.offset()).top, i = a(s).scrollTop(), n = e + this.telInput.outerHeight() + this.dropdownHeight < i + a(s).height(), i = e - this.dropdownHeight > i, this.countryList.toggleClass("dropup", !n && i), this.options.dropdownContainer && (i = !n && i ? 0 : this.telInput.innerHeight(), this.dropdown.css({
				top: e + i,
				left: t.left
			}), a(s).on("scroll" + this.ns, function() {
				o._closeDropdown()
			})))
		},
		_bindDropdownListeners: function() {
			var e = this;
			this.countryList.on("mouseover" + this.ns, ".country", function(t) {
				e._highlightListItem(a(this))
			}), this.countryList.on("click" + this.ns, ".country", function(t) {
				e._selectListItem(a(this))
			});
			var n = !0;
			a("html").on("click" + this.ns, function(t) {
				n || e._closeDropdown(), n = !1
			});
			var i = "",
				o = null;
			a(t).on("keydown" + this.ns, function(t) {
				t.preventDefault(), 38 == t.which || 40 == t.which ? e._handleUpDownKey(t.which) : 13 == t.which ? e._handleEnterKey() : 27 == t.which ? e._closeDropdown() : (65 <= t.which && t.which <= 90 || 32 == t.which) && (o && clearTimeout(o), i += String.fromCharCode(t.which), e._searchForCountry(i), o = setTimeout(function() {
					i = ""
				}, 1e3))
			})
		},
		_handleUpDownKey: function(t) {
			var e = this.countryList.children(".highlight").first(),
				e = 38 == t ? e.prev() : e.next();
			e.length && (e.hasClass("divider") && (e = 38 == t ? e.prev() : e.next()), this._highlightListItem(e), this._scrollTo(e))
		},
		_handleEnterKey: function() {
			var t = this.countryList.children(".highlight").first();
			t.length && this._selectListItem(t)
		},
		_searchForCountry: function(t) {
			for(var e = 0; e < this.countries.length; e++)
				if(this._startsWith(this.countries[e].name, t)) {
					var n = this.countryList.children("[data-country-code=" + this.countries[e].iso2 + "]").not(".preferred");
					this._highlightListItem(n), this._scrollTo(n, !0);
					break
				}
		},
		_startsWith: function(t, e) {
			return t.substr(0, e.length).toUpperCase() == e
		},
		_updateValFromNumber: function(t) {
			var e;
			this.options.formatOnDisplay && s.intlTelInputUtils && this.selectedCountryData && (e = this.options.separateDialCode || !this.options.nationalMode && "+" == t.charAt(0) ? intlTelInputUtils.numberFormat.INTERNATIONAL : intlTelInputUtils.numberFormat.NATIONAL, t = intlTelInputUtils.formatNumber(t, this.selectedCountryData.iso2, e)), t = this._beforeSetNumber(t), this.telInput.val(t)
		},
		_updateFlagFromNumber: function(t) {
			t && this.options.nationalMode && "1" == this.selectedCountryData.dialCode && "+" != t.charAt(0) && ("1" != t.charAt(0) && (t = "1" + t), t = "+" + t);
			var e = this._getDialCode(t),
				n = null,
				i = this._getNumeric(t);
			if(e) {
				var o = this.countryCodes[this._getNumeric(e)],
					s = -1 < a.inArray(this.selectedCountryData.iso2, o),
					e = "+1" == e && 4 <= i.length;
				if(!("1" == this.selectedCountryData.dialCode && this._isRegionlessNanp(i) || s && !e))
					for(var r = 0; r < o.length; r++)
						if(o[r]) {
							n = o[r];
							break
						}
			} else "+" == t.charAt(0) && i.length ? n = "" : t && "+" != t || (n = this.defaultCountry);
			return null !== n && this._setFlag(n)
		},
		_isRegionlessNanp: function(t) {
			t = this._getNumeric(t);
			if("1" != t.charAt(0)) return !1;
			t = t.substr(1, 3);
			return -1 < a.inArray(t, e)
		},
		_highlightListItem: function(t) {
			this.countryListItems.removeClass("highlight"), t.addClass("highlight")
		},
		_getCountryData: function(t, e, n) {
			for(var i = e ? u : this.countries, o = 0; o < i.length; o++)
				if(i[o].iso2 == t) return i[o];
			if(n) return null;
			throw new Error("No country data for '" + t + "'")
		},
		_setFlag: function(t) {
			var e = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
			this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedFlagInner.attr("class", "iti-flag " + t);
			var n, i = t ? this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode : "Unknown";
			return this.selectedFlagInner.parent().attr("title", i), this.options.separateDialCode && (n = this.selectedCountryData.dialCode ? "+" + this.selectedCountryData.dialCode : "", i = this.telInput.parent(), e.dialCode && i.removeClass("iti-sdc-" + (e.dialCode.length + 1)), n && i.addClass("iti-sdc-" + n.length), this.selectedDialCode.text(n)), this._updatePlaceholder(), this.countryListItems.removeClass("active"), t && this.countryListItems.find(".iti-flag." + t).first().closest(".country").addClass("active"), e.iso2 !== t
		},
		_updatePlaceholder: function() {
			var t = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && (!0 === this.options.autoPlaceholder || "polite" === this.options.autoPlaceholder);
			s.intlTelInputUtils && t && (t = intlTelInputUtils.numberType[this.options.placeholderNumberType], t = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, t) : "", t = this._beforeSetNumber(t), "function" == typeof this.options.customPlaceholder && (t = this.options.customPlaceholder(t, this.selectedCountryData)), this.telInput.attr("placeholder", t))
		},
		_selectListItem: function(t) {
			var e = this._setFlag(t.attr("data-country-code"));
			this._closeDropdown(), this._updateDialCode(t.attr("data-dial-code"), !0), this.telInput.focus(), this.isGoodBrowser && (t = this.telInput.val().length, this.telInput[0].setSelectionRange(t, t)), e && this._triggerCountryChange()
		},
		_closeDropdown: function() {
			this.countryList.addClass("hide"), this.selectedFlagInner.children(".iti-arrow").removeClass("up"), a(t).off(this.ns), a("html").off(this.ns), this.countryList.off(this.ns), this.options.dropdownContainer && (this.isMobile || a(s).off("scroll" + this.ns), this.dropdown.detach()), this.telInput.trigger("close:countrydropdown")
		},
		_scrollTo: function(t, e) {
			var n = this.countryList,
				i = n.height(),
				o = n.offset().top,
				s = o + i,
				r = t.outerHeight(),
				a = t.offset().top,
				l = a + r,
				c = a - o + n.scrollTop(),
				t = i / 2 - r / 2;
			a < o ? (e && (c -= t), n.scrollTop(c)) : s < l && (e && (c += t), r = i - r, n.scrollTop(c - r))
		},
		_updateDialCode: function(t, e) {
			var n = this.telInput.val();
			if(t = "+" + t, "+" == n.charAt(0)) var i = this._getDialCode(n),
				i = i ? n.replace(i, t) : t;
			else {
				if(this.options.nationalMode || this.options.separateDialCode) return;
				if(n) i = t + n;
				else {
					if(!e && this.options.autoHideDialCode) return;
					i = t
				}
			}
			this.telInput.val(i)
		},
		_getDialCode: function(t) {
			var e = "";
			if("+" == t.charAt(0))
				for(var n = "", i = 0; i < t.length; i++) {
					var o = t.charAt(i);
					if(a.isNumeric(o) && (n += o, this.countryCodes[n] && (e = t.substr(0, i + 1)), 4 == n.length)) break
				}
			return e
		},
		_getFullNumber: function() {
			var t = a.trim(this.telInput.val()),
				e = this.selectedCountryData.dialCode,
				n = this._getNumeric(t),
				n = "1" == n.charAt(0) ? n : "1" + n;
			return(this.options.separateDialCode ? "+" + e : "+" != t.charAt(0) && "1" != t.charAt(0) && e && "1" == e.charAt(0) && 4 == e.length && e != n.substr(0, 4) ? e.substr(1) : "") + t
		},
		_beforeSetNumber: function(t) {
			var e;
			return !this.options.separateDialCode || (e = this._getDialCode(t)) && (null !== this.selectedCountryData.areaCodes && (e = "+" + this.selectedCountryData.dialCode), e = " " === t[e.length] || "-" === t[e.length] ? e.length + 1 : e.length, t = t.substr(e)), this._cap(t)
		},
		_triggerCountryChange: function() {
			this.telInput.trigger("countrychange", this.selectedCountryData)
		},
		handleAutoCountry: function() {
			"auto" === this.options.initialCountry && (this.defaultCountry = a.fn[l].autoCountry, this.telInput.val() || this.setCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
		},
		handleUtils: function() {
			s.intlTelInputUtils && (this.telInput.val() && this._updateValFromNumber(this.telInput.val()), this._updatePlaceholder()), this.utilsScriptDeferred.resolve()
		},
		destroy: function() {
			var t;
			this.allowDropdown && (this._closeDropdown(), this.selectedFlagInner.parent().off(this.ns), this.telInput.closest("label").off(this.ns)), this.options.autoHideDialCode && (t = this.telInput.prop("form")) && a(t).off(this.ns), this.telInput.off(this.ns), this.telInput.parent().before(this.telInput).remove()
		},
		getExtension: function() {
			return s.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
		},
		getNumber: function(t) {
			return s.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._getFullNumber(), this.selectedCountryData.iso2, t) : ""
		},
		getNumberType: function() {
			return s.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99
		},
		getSelectedCountryData: function() {
			return this.selectedCountryData
		},
		getValidationError: function() {
			return s.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._getFullNumber(), this.selectedCountryData.iso2) : -99
		},
		isValidNumber: function() {
			var t = a.trim(this._getFullNumber()),
				e = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
			return s.intlTelInputUtils ? intlTelInputUtils.isValidNumber(t, e) : null
		},
		setCountry: function(t) {
			t = t.toLowerCase(), this.selectedFlagInner.hasClass(t) || (this._setFlag(t), this._updateDialCode(this.selectedCountryData.dialCode, !1), this._triggerCountryChange())
		},
		setNumber: function(t) {
			var e = this._updateFlagFromNumber(t);
			this._updateValFromNumber(t), e && this._triggerCountryChange()
		},
		setPlaceholderNumberType: function(t) {
			this.options.placeholderNumberType = t, this._updatePlaceholder()
		}
	}, a.fn[l] = function(n) {
		var e, i = arguments;
		if(n === r || "object" == typeof n) {
			var o = [];
			return this.each(function() {
				var t, e;
				a.data(this, "plugin_" + l) || (e = (t = new c(this, n))._init(), o.push(e[0]), o.push(e[1]), a.data(this, "plugin_" + l, t))
			}), a.when.apply(null, o)
		}
		if("string" == typeof n && "_" !== n[0]) return this.each(function() {
			var t = a.data(this, "plugin_" + l);
			t instanceof c && "function" == typeof t[n] && (e = t[n].apply(t, Array.prototype.slice.call(i, 1))), "destroy" === n && a.data(this, "plugin_" + l, null)
		}), e !== r ? e : this
	}, a.fn[l].getCountryData = function() {
		return u
	}, a.fn[l].loadUtils = function(t, e) {
		a.fn[l].loadedUtilsScript ? e && e.resolve() : (a.fn[l].loadedUtilsScript = !0, a.ajax({
			type: "GET",
			url: t,
			complete: function() {
				a(".intl-tel-input input").intlTelInput("handleUtils")
			},
			dataType: "script",
			cache: !0
		}))
	}, a.fn[l].defaults = i, a.fn[l].version = "12.1.0";
	for(var u = [
			["Afghanistan", "af", "93"],
			["Aland Islands", "ax", "358", 1],
			["Albania ", "al", "355"],
			["Algeria", "dz", "213"],
			["American Samoa", "as", "1684"],
			["Angola", "ao", "244"],
			["Anguilla", "ai", "1264"],
			["Antigua and Barbuda", "ag", "1268"],
			["Argentina", "ar", "54"],
			["Armenia ", "am", "374"],
			["Aruba", "aw", "297"],
			["Australia", "au", "61", 0],
			["Austria ", "at", "43"],
			["Azerbaijan", "az", "994"],
			["Bahamas", "bs", "1242"],
			["Bahrain", "bh", "973"],
			["Bangladesh", "bd", "880"],
			["Barbados", "bb", "1246"],
			["Belarus", "by", "375"],
			["Belgium", "be", "32"],
			["Belize", "bz", "501"],
			["Benin", "bj", "229"],
			["Bermuda", "bm", "1441"],
			["Bhutan ", "bt", "975"],
			["Bolivia", "bo", "591"],
			["Bosnia and Herzegovina ", "ba", "387"],
			["Botswana", "bw", "267"],
			["Brazil", "br", "55"],
			["British Indian Ocean Territory", "io", "246"],
			["British Virgin Islands", "vg", "1284"],
			["Brunei", "bn", "673"],
			["Bulgaria ", "bg", "359"],
			["Burkina Faso", "bf", "226"],
			["Burundi", "bi", "257"],
			["Cambodia ", "kh", "855"],
			["Cameroon ", "cm", "237"],
			["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
			["Cape Verde", "cv", "238"],
			["Caribbean Netherlands", "bq", "599", 1],
			["Cayman Islands", "ky", "1345"],
			["Central African Republic", "cf", "236"],
			["Chad", "td", "235"],
			["Chile", "cl", "56"],
			["China", "cn", "86"],
			["Christmas Island", "cx", "61", 2],
			["Cocos", "cc", "61", 1],
			["Colombia", "co", "57"],
			["Comoros ", "km", "269"],
			["Congo", "cg", "242"],
			["Cook Islands", "ck", "682"],
			["Costa Rica", "cr", "506"],
			["Cote d'Ivoire", "ci", "225"],
			["Croatia", "hr", "385"],
			["Cuba", "cu", "53"],
			["Curacao", "cw", "599", 0],
			["Cyprus", "cy", "357"],
			["Czech Republic", "cz", "420"],
			["Denmark", "dk", "45"],
			["Djibouti", "dj", "253"],
			["Dominica", "dm", "1767"],
			["Dominican Republic", "do", "1", 2, ["809", "829", "849"]],
			["DR Congo", "cd", "243"],
			["Ecuador", "ec", "593"],
			["Egypt", "eg", "20"],
			["El Salvador", "sv", "503"],
			["Equatorial Guinea", "gq", "240"],
			["Eritrea", "er", "291"],
			["Estonia (Eesti)", "ee", "372"],
			["Ethiopia", "et", "251"],
			["Falkland Islands", "fk", "500"],
			["Faroe Islands", "fo", "298"],
			["Fiji", "fj", "679"],
			["Finland", "fi", "358", 0],
			["France", "fr", "33"],
			["French Guiana ", "gf", "594"],
			["French Polynesia", "pf", "689"],
			["Gabon", "ga", "241"],
			["Gambia", "gm", "220"],
			["Georgia", "ge", "995"],
			["Germany", "de", "49"],
			["Ghana", "gh", "233"],
			["Gibraltar", "gi", "350"],
			["Greece", "gr", "30"],
			["Greenland", "gl", "299"],
			["Grenada", "gd", "1473"],
			["Guadeloupe", "gp", "590", 0],
			["Guam", "gu", "1671"],
			["Guatemala", "gt", "502"],
			["Guernsey", "gg", "44", 1],
			["Guinea", "gn", "224"],
			["Guinea-Bissau", "gw", "245"],
			["Guyana", "gy", "592"],
			["Haiti", "ht", "509"],
			["Honduras", "hn", "504"],
			["Hong Kong", "hk", "852"],
			["Hungary", "hu", "36"],
			["Iceland", "is", "354"],
			["India", "in", "91"],
			["Indonesia", "id", "62"],
			["Iran ", "ir", "98"],
			["Iraq ", "iq", "964"],
			["Ireland", "ie", "353"],
			["Isle of Man", "im", "44", 2],
			["Israel", "il", "972"],
			["Italy", "it", "39", 0],
			["Jamaica", "jm", "1876"],
			["Japan ", "jp", "81"],
			["Jersey", "je", "44", 3],
			["Jordan ", "jo", "962"],
			["Kazakhstan", "kz", "7", 1],
			["Kenya", "ke", "254"],
			["Kiribati", "ki", "686"],
			["Kosovo", "xk", "383"],
			["Kuwait", "kw", "965"],
			["Kyrgyzstan ", "kg", "996"],
			["Laos", "la", "856"],
			["Latvia", "lv", "371"],
			["Lebanon", "lb", "961"],
			["Lesotho", "ls", "266"],
			["Liberia", "lr", "231"],
			["Libya", "ly", "218"],
			["Liechtenstein", "li", "423"],
			["Lithuania", "lt", "370"],
			["Luxembourg", "lu", "352"],
			["Macau", "mo", "853"],
			["Macedonia", "mk", "389"],
			["Madagascar", "mg", "261"],
			["Malawi", "mw", "265"],
			["Malaysia", "my", "60"],
			["Maldives", "mv", "960"],
			["Mali", "ml", "223"],
			["Malta", "mt", "356"],
			["Marshall Islands", "mh", "692"],
			["Martinique", "mq", "596"],
			["Mauritania", "mr", "222"],
			["Mauritius", "mu", "230"],
			["Mayotte", "yt", "262", 1],
			["Mexico", "mx", "52"],
			["Micronesia", "fm", "691"],
			["Moldova", "md", "373"],
			["Monaco", "mc", "377"],
			["Mongolia", "mn", "976"],
			["Montenegro", "me", "382"],
			["Montserrat", "ms", "1664"],
			["Morocco", "ma", "212", 0],
			["Mozambique", "mz", "258"],
			["Myanmar", "mm", "95"],
			["Namibia", "na", "264"],
			["Nauru", "nr", "674"],
			["Nepal", "np", "977"],
			["Netherlands", "nl", "31"],
			["New Caledonia", "nc", "687"],
			["New Zealand", "nz", "64"],
			["Nicaragua", "ni", "505"],
			["Niger", "ne", "227"],
			["Nigeria", "ng", "234"],
			["Niue", "nu", "683"],
			["Norfolk Island", "nf", "672"],
			["North Korea", "kp", "850"],
			["Northern Mariana Islands", "mp", "1670"],
			["Norway", "no", "47", 0],
			["Oman", "om", "968"],
			["Pakistan ", "pk", "92"],
			["Palau", "pw", "680"],
			["Palestine", "ps", "970"],
			["Panama", "pa", "507"],
			["Papua New Guinea", "pg", "675"],
			["Paraguay", "py", "595"],
			["Peru", "pe", "51"],
			["Philippines", "ph", "63"],
			["Poland ", "pl", "48"],
			["Portugal", "pt", "351"],
			["Puerto Rico", "pr", "1", 3, ["787", "939"]],
			["Qatar", "qa", "974"],
			["Reunion", "re", "262", 0],
			["Romania ", "ro", "40"],
			["Russia", "ru", "7", 0],
			["Rwanda", "rw", "250"],
			["Saint Barthelemy", "bl", "590", 1],
			["Saint Helena", "sh", "290"],
			["Saint Kitts and Nevis", "kn", "1869"],
			["Saint Lucia", "lc", "1758"],
			["Saint Martin", "mf", "590", 2],
			["Saint Pierre and Miquelon", "pm", "508"],
			["Saint Vincent and the Grenadines", "vc", "1784"],
			["Samoa", "ws", "685"],
			["San Marino", "sm", "378"],
			["Sao Tome and Principe", "st", "239"],
			["Saudi Arabia", "sa", "966"],
			["Senegal", "sn", "221"],
			["Serbia", "rs", "381"],
			["Seychelles", "sc", "248"],
			["Sierra Leone", "sl", "232"],
			["Singapore", "sg", "65"],
			["Sint Maarten", "sx", "1721"],
			["Slovakia", "sk", "421"],
			["Slovenia", "si", "386"],
			["Solomon Islands", "sb", "677"],
			["Somalia", "so", "252"],
			["South Africa", "za", "27"],
			["South Korea", "kr", "82"],
			["South Sudan", "ss", "211"],
			["Spain ", "es", "34"],
			["Sri Lanka ", "lk", "94"],
			["Sudan", "sd", "249"],
			["Suriname", "sr", "597"],
			["Svalbard and Jan Mayen", "sj", "47", 1],
			["Swaziland", "sz", "268"],
			["Sweden", "se", "46"],
			["Switzerland", "ch", "41"],
			["Syria ", "sy", "963"],
			["Taiwan", "tw", "886"],
			["Tajikistan", "tj", "992"],
			["Tanzania", "tz", "255"],
			["Thailand", "th", "66"],
			["Timor-Leste", "tl", "670"],
			["Togo", "tg", "228"],
			["Tokelau", "tk", "690"],
			["Tonga", "to", "676"],
			["Trinidad and Tobago", "tt", "1868"],
			["Tunisia", "tn", "216"],
			["Turkey", "tr", "90"],
			["Turkmenistan", "tm", "993"],
			["Turks and Caicos Islands", "tc", "1649"],
			["Tuvalu", "tv", "688"],
			["U.S. Virgin Islands", "vi", "1340"],
			["Uganda", "ug", "256"],
			["Ukraine", "ua", "380"],
			["United Arab Emirates", "ae", "971"],
			["United Kingdom", "gb", "44", 0],
			["United States", "us", "1", 0],
			["Uruguay", "uy", "598"],
			["Uzbekistan", "uz", "998"],
			["Vanuatu", "vu", "678"],
			["Vatican City", "va", "39", 1],
			["Venezuela", "ve", "58"],
			["Vietnam", "vn", "84"],
			["Wallis and Futuna", "wf", "681"],
			["Western Sahara", "eh", "212", 1],
			["Yemen", "ye", "967"],
			["Zambia", "zm", "260"],
			["Zimbabwe", "zw", "263"]
		], o = 0; o < u.length; o++) {
		var d = u[o];
		u[o] = {
			name: d[0],
			iso2: d[1],
			dialCode: d[2],
			priority: d[3] || 0,
			areaCodes: d[4] || null
		}
	}
}),
function(c, o, f, g) {
	"use strict";

	function n(t) {
		var e = t.currentTarget,
			n = t.data ? t.data.options : {},
			i = n.selector ? f(n.selector) : t.data ? t.data.items : [],
			o = f(e).attr("data-fancybox") || "",
			s = 0,
			r = f.fancybox.getInstance();
		t.preventDefault(), t.stopPropagation(), r && r.current.opts.$orig.is(e) || (o ? (s = (i = i.length ? i.filter('[data-fancybox="' + o + '"]') : f('[data-fancybox="' + o + '"]')).index(e)) < 0 && (s = 0) : i = [e], f.fancybox.open(i, n, s))
	}
	if(f) {
		if(f.fn.fancybox) return f.error("fancyBox already initialized");
		var s = {
				loop: !1,
				margin: [44, 0],
				gutter: 50,
				keyboard: !0,
				arrows: !0,
				infobar: !1,
				toolbar: !0,
				buttons: ["slideShow", "fullScreen", "thumbs", "close"],
				idleTime: 4,
				smallBtn: "auto",
				protect: !1,
				modal: !1,
				image: {
					preload: "auto"
				},
				ajax: {
					settings: {
						data: {
							fancybox: !0
						}
					}
				},
				iframe: {
					tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
					preload: !0,
					css: {},
					attr: {
						scrolling: "auto"
					}
				},
				animationEffect: "zoom",
				animationDuration: 366,
				zoomOpacity: "auto",
				transitionEffect: "fade",
				transitionDuration: 366,
				slideClass: "",
				baseClass: "",
				baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
				spinnerTpl: '<div class="fancybox-loading"></div>',
				errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
				btnTpl: {
					slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
					fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
					thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
					close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
					smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
				},
				parentEl: "body",
				autoFocus: !0,
				backFocus: !0,
				trapFocus: !0,
				fullScreen: {
					autoStart: !1
				},
				touch: {
					vertical: !0,
					momentum: !0
				},
				hash: null,
				media: {},
				slideShow: {
					autoStart: !1,
					speed: 4e3
				},
				thumbs: {
					autoStart: !1,
					hideOnClose: !0
				},
				onInit: f.noop,
				beforeLoad: f.noop,
				afterLoad: f.noop,
				beforeShow: f.noop,
				afterShow: f.noop,
				beforeClose: f.noop,
				afterClose: f.noop,
				onActivate: f.noop,
				onDeactivate: f.noop,
				clickContent: function(t, e) {
					return "image" === t.type && "zoom"
				},
				clickSlide: "close",
				clickOutside: "close",
				dblclickContent: !1,
				dblclickSlide: !1,
				dblclickOutside: !1,
				mobile: {
					clickContent: function(t, e) {
						return "image" === t.type && "toggleControls"
					},
					clickSlide: function(t, e) {
						return "image" === t.type ? "toggleControls" : "close"
					},
					dblclickContent: function(t, e) {
						return "image" === t.type && "zoom"
					},
					dblclickSlide: function(t, e) {
						return "image" === t.type && "zoom"
					}
				},
				lang: "en",
				i18n: {
					en: {
						CLOSE: "Close",
						NEXT: "Next",
						PREV: "Previous",
						ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
						PLAY_START: "Start slideshow",
						PLAY_STOP: "Pause slideshow",
						FULL_SCREEN: "Full screen",
						THUMBS: "Thumbnails"
					},
					de: {
						CLOSE: "Schliessen",
						NEXT: "Weiter",
						PREV: "ZurÃƒÂ¼ck",
						ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃƒÂ¤ter nochmal.",
						PLAY_START: "Diaschau starten",
						PLAY_STOP: "Diaschau beenden",
						FULL_SCREEN: "Vollbild",
						THUMBS: "Vorschaubilder"
					}
				}
			},
			r = f(c),
			a = f(o),
			l = 0,
			u = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function(t) {
				return c.setTimeout(t, 1e3 / 60)
			},
			d = function() {
				var t, e = o.createElement("fakeelement"),
					n = {
						transition: "transitionend",
						OTransition: "oTransitionEnd",
						MozTransition: "transitionend",
						WebkitTransition: "webkitTransitionEnd"
					};
				for(t in n)
					if(e.style[t] !== g) return n[t]
			}(),
			h = function(t) {
				return t && t.length && t[0].offsetHeight
			},
			i = function(t, e, n) {
				var i = this;
				i.opts = f.extend(!0, {
					index: n
				}, s, e || {}), e && f.isArray(e.buttons) && (i.opts.buttons = e.buttons), i.id = i.opts.id || ++l, i.group = [], i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = null, i.createGroup(t), i.group.length && (i.$lastFocus = f(o.activeElement).blur(), i.slides = {}, i.init(t))
			};
		f.extend(i.prototype, {
			init: function() {
				var t, e, n, i = this,
					o = i.group[i.currIndex].opts;
				i.scrollTop = a.scrollTop(), i.scrollLeft = a.scrollLeft(), f.fancybox.getInstance() || f.fancybox.isMobile || "hidden" === f("body").css("overflow") || (t = f("body").width(), f("html").addClass("fancybox-enabled"), 1 < (t = f("body").width() - t) && f("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), n = "", f.each(o.buttons, function(t, e) {
					n += o.btnTpl[e] || ""
				}), e = f(i.translate(i, o.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + i.id).addClass(o.baseClass).data("FancyBox", i).prependTo(o.parentEl), i.$refs = {
					container: e
				}, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function(t) {
					i.$refs[t] = e.find(".fancybox-" + t)
				}), (!o.arrows || i.group.length < 2) && e.find(".fancybox-navigation").remove(), o.infobar || i.$refs.infobar.remove(), o.toolbar || i.$refs.toolbar.remove(), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
			},
			translate: function(t, e) {
				var n = t.opts.i18n[t.opts.lang];
				return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
					e = n[e];
					return e === g ? t : e
				})
			},
			createGroup: function(t) {
				var l = this,
					t = f.makeArray(t);
				f.each(t, function(t, e) {
					var n, i, o, s = {},
						r = {},
						a = [];
					f.isPlainObject(e) ? r = (s = e).opts || e : "object" === f.type(e) && f(e).length ? (i = f(e), a = i.data(), r = "options" in a ? a.options : {}, r = "object" === f.type(r) ? r : {}, s.src = "src" in a ? a.src : r.src || i.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function(t) {
						t in a && (r[t] = a[t])
					}), "srcset" in a && (r.image = {
						srcset: a.srcset
					}), r.$orig = i, s.type || s.src || (s.type = "inline", s.src = e)) : s = {
						type: "html",
						src: e + ""
					}, s.opts = f.extend(!0, {}, l.opts, r), f.fancybox.isMobile && (s.opts = f.extend(!0, {}, s.opts, s.opts.mobile)), n = s.type || s.opts.type, i = s.src || "", !n && i && (i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) ? n = "pdf" : "#" === i.charAt(0) && (n = "inline")), s.type = n, s.index = l.group.length, s.opts.$orig && !s.opts.$orig.length && delete s.opts.$orig, !s.opts.$thumb && s.opts.$orig && (s.opts.$thumb = s.opts.$orig.find("img:first")), s.opts.$thumb && !s.opts.$thumb.length && delete s.opts.$thumb, "function" === f.type(s.opts.caption) ? s.opts.caption = s.opts.caption.apply(e, [l, s]) : "caption" in a && (s.opts.caption = a.caption), s.opts.caption = s.opts.caption === g ? "" : s.opts.caption + "", "ajax" === n && 1 < (o = i.split(/\s+/, 2)).length && (s.src = o.shift(), s.opts.filter = o.shift()), "auto" == s.opts.smallBtn && (-1 < f.inArray(n, ["html", "inline", "ajax"]) ? (s.opts.toolbar = !1, s.opts.smallBtn = !0) : s.opts.smallBtn = !1), "pdf" === n && (s.type = "iframe", s.opts.iframe.preload = !1), s.opts.modal && (s.opts = f.extend(!0, s.opts, {
						infobar: 0,
						toolbar: 0,
						smallBtn: 0,
						keyboard: 0,
						slideShow: 0,
						fullScreen: 0,
						thumbs: 0,
						touch: 0,
						clickContent: !1,
						clickSlide: !1,
						clickOutside: !1,
						dblclickContent: !1,
						dblclickSlide: !1,
						dblclickOutside: !1
					})), l.group.push(s)
				})
			},
			addEvents: function() {
				var i = this;
				i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
					t.stopPropagation(), t.preventDefault(), i.close(t)
				}).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
					t.stopPropagation(), t.preventDefault(), i.previous()
				}).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
					t.stopPropagation(), t.preventDefault(), i.next()
				}), r.on("orientationchange.fb resize.fb", function(t) {
					t && t.originalEvent && "resize" === t.originalEvent.type ? u(function() {
						i.update()
					}) : (i.$refs.stage.hide(), setTimeout(function() {
						i.$refs.stage.show(), i.update()
					}, 500))
				}), a.on("focusin.fb", function(t) {
					var e = f.fancybox ? f.fancybox.getInstance() : null;
					e.isClosing || !e.current || !e.current.opts.trapFocus || f(t.target).hasClass("fancybox-container") || f(t.target).is(o) || e && "fixed" !== f(t.target).css("position") && !e.$refs.container.has(t.target).length && (t.stopPropagation(), e.focus(), r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
				}), a.on("keydown.fb", function(t) {
					var e = i.current,
						n = t.keyCode || t.which;
					if(e && e.opts.keyboard && !f(t.target).is("input") && !f(t.target).is("textarea")) return 8 === n || 27 === n ? (t.preventDefault(), void i.close(t)) : 37 === n || 38 === n ? (t.preventDefault(), void i.previous()) : 39 === n || 40 === n ? (t.preventDefault(), void i.next()) : void i.trigger("afterKeydown", t, n)
				}), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
					i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
				}), i.idleInterval = c.setInterval(function() {
					i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
				}, 1e3))
			},
			removeEvents: function() {
				r.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), this.idleInterval = null)
			},
			previous: function(t) {
				return this.jumpTo(this.currPos - 1, t)
			},
			next: function(t) {
				return this.jumpTo(this.currPos + 1, t)
			},
			jumpTo: function(t, i, e) {
				var n, o, s, r, a, l, c = this,
					u = c.group.length;
				if(!(c.isSliding || c.isClosing || c.isAnimating && c.firstRun)) {
					if(t = parseInt(t, 10), !(o = (c.current || c).opts.loop) && (t < 0 || u <= t)) return !1;
					if(n = c.firstRun = null === c.firstRun, !(u < 2 && !n && c.isSliding)) {
						if(r = c.current, c.prevIndex = c.currIndex, c.prevPos = c.currPos, s = c.createSlide(t), 1 < u && ((o || 0 < s.index) && c.createSlide(t - 1), (o || s.index < u - 1) && c.createSlide(t + 1)), c.current = s, c.currIndex = s.index, c.currPos = s.pos, c.trigger("beforeShow", n), c.updateControls(), t = f.fancybox.getTranslate(s.$slide), s.isMoved = (0 !== t.left || 0 !== t.top) && !s.$slide.hasClass("fancybox-animated"), s.forcedDuration = g, f.isNumeric(i) ? s.forcedDuration = i : i = s.opts[n ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), n) return s.opts.animationEffect && i && c.$refs.container.css("transition-duration", i + "ms"), c.$refs.container.removeClass("fancybox-is-hidden"), h(c.$refs.container), c.$refs.container.addClass("fancybox-is-open"), s.$slide.addClass("fancybox-slide--current"), c.loadSlide(s), void c.preload();
						f.each(c.slides, function(t, e) {
							f.fancybox.stop(e.$slide)
						}), s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), s.isMoved ? (a = Math.round(s.$slide.width()), f.each(c.slides, function(t, e) {
							var n = e.pos - s.pos;
							f.fancybox.animate(e.$slide, {
								top: 0,
								left: n * a + n * e.opts.gutter
							}, i, function() {
								e.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === c.currPos && (s.isMoved = !1, c.complete())
							})
						})) : c.$refs.stage.children().removeAttr("style"), s.isLoaded ? c.revealContent(s) : c.loadSlide(s), c.preload(), r.pos !== s.pos && (l = "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous"), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), r.isComplete = !1, i && (s.isMoved || s.opts.transitionEffect) && (s.isMoved ? r.$slide.addClass(l) : (l = "fancybox-animated " + l + " fancybox-fx-" + s.opts.transitionEffect, f.fancybox.animate(r.$slide, l, i, function() {
							r.$slide.removeClass(l).removeAttr("style")
						}))))
					}
				}
			},
			createSlide: function(t) {
				var e, n = this,
					i = (i = t % n.group.length) < 0 ? n.group.length + i : i;
				return !n.slides[t] && n.group[i] && (e = f('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[t] = f.extend(!0, {}, n.group[i], {
					pos: t,
					$slide: e,
					isLoaded: !1
				}), n.updateSlide(n.slides[t])), n.slides[t]
			},
			scaleToActual: function(t, e, n) {
				var i, o, s, r, a = this,
					l = a.current,
					c = l.$content,
					u = parseInt(l.$slide.width(), 10),
					d = parseInt(l.$slide.height(), 10),
					h = l.width,
					p = l.height;
				"image" != l.type || l.hasError || !c || a.isAnimating || (f.fancybox.stop(c), a.isAnimating = !0, t = t === g ? .5 * u : t, e = e === g ? .5 * d : e, s = h / (i = f.fancybox.getTranslate(c)).width, r = p / i.height, o = .5 * u - .5 * h, l = .5 * d - .5 * p, u < h && (0 < (o = i.left * s - (t * s - t)) && (o = 0), o < u - h && (o = u - h)), d < p && (0 < (l = i.top * r - (e * r - e)) && (l = 0), l < d - p && (l = d - p)), a.updateCursor(h, p), f.fancybox.animate(c, {
					top: l,
					left: o,
					scaleX: s,
					scaleY: r
				}, n || 330, function() {
					a.isAnimating = !1
				}), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop())
			},
			scaleToFit: function(t) {
				var e = this,
					n = e.current,
					i = n.$content;
				"image" != n.type || n.hasError || !i || e.isAnimating || (f.fancybox.stop(i), e.isAnimating = !0, n = e.getFitPos(n), e.updateCursor(n.width, n.height), f.fancybox.animate(i, {
					top: n.top,
					left: n.left,
					scaleX: n.width / i.width(),
					scaleY: n.height / i.height()
				}, t || 330, function() {
					e.isAnimating = !1
				}))
			},
			getFitPos: function(t) {
				var e, n = t.$content,
					i = t.width,
					o = t.height,
					s = t.opts.margin;
				return !(!n || !n.length || !i && !o) && ("number" === f.type(s) && (s = [s, s]), 2 == s.length && (s = [s[0], s[1], s[0], s[1]]), r.width() < 800 && (s = [0, 0, 0, 0]), e = parseInt(this.$refs.stage.width(), 10) - (s[1] + s[3]), t = parseInt(this.$refs.stage.height(), 10) - (s[0] + s[2]), n = Math.min(1, e / i, t / o), i = Math.floor(n * i), o = Math.floor(n * o), {
					top: Math.floor(.5 * (t - o)) + s[0],
					left: Math.floor(.5 * (e - i)) + s[3],
					width: i,
					height: o
				})
			},
			update: function() {
				var n = this;
				f.each(n.slides, function(t, e) {
					n.updateSlide(e)
				})
			},
			updateSlide: function(t) {
				var e = t.$content;
				e && (t.width || t.height) && (f.fancybox.stop(e), f.fancybox.setTranslate(e, this.getFitPos(t)), t.pos === this.currPos && this.updateCursor()), t.$slide.trigger("refresh"), this.trigger("onUpdate", t)
			},
			updateCursor: function(t, e) {
				var n = this.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
				this.current && !this.isClosing && (this.isZoomable() ? (n.addClass("fancybox-is-zoomable"), (t !== g && e !== g ? t < this.current.width && e < this.current.height : this.isScaledDown()) ? n.addClass("fancybox-can-zoomIn") : this.current.opts.touch ? n.addClass("fancybox-can-drag") : n.addClass("fancybox-can-zoomOut")) : this.current.opts.touch && n.addClass("fancybox-can-drag"))
			},
			isZoomable: function() {
				var t, e = this.current;
				if(e && !this.isClosing) return !!("image" === e.type && e.isLoaded && !e.hasError && ("zoom" === e.opts.clickContent || f.isFunction(e.opts.clickContent) && "zoom" === e.opts.clickContent(e)) && (t = this.getFitPos(e), e.width > t.width || e.height > t.height))
			},
			isScaledDown: function() {
				var t = this.current,
					e = t.$content,
					n = !1;
				return e && (n = (n = f.fancybox.getTranslate(e)).width < t.width || n.height < t.height), n
			},
			canPan: function() {
				var t = this.current,
					e = t.$content,
					n = !1;
				return e && (n = this.getFitPos(t), n = 1 < Math.abs(e.width() - n.width) || 1 < Math.abs(e.height() - n.height)), n
			},
			loadSlide: function(n) {
				var t, e, i, o = this;
				if(!n.isLoading && !n.isLoaded) {
					switch(n.isLoading = !0, o.trigger("beforeLoad", n), t = n.type, (e = n.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(n.opts.slideClass), t) {
						case "image":
							o.setImage(n);
							break;
						case "iframe":
							o.setIframe(n);
							break;
						case "html":
							o.setContent(n, n.src || n.content);
							break;
						case "inline":
							f(n.src).length ? o.setContent(n, f(n.src)) : o.setError(n);
							break;
						case "ajax":
							o.showLoading(n), i = f.ajax(f.extend({}, n.opts.ajax.settings, {
								url: n.src,
								success: function(t, e) {
									"success" === e && o.setContent(n, t)
								},
								error: function(t, e) {
									t && "abort" !== e && o.setError(n)
								}
							})), e.one("onReset", function() {
								i.abort()
							});
							break;
						default:
							o.setError(n)
					}
					return !0
				}
			},
			setImage: function(t) {
				var e, n, i, o, s = this,
					r = t.opts.image.srcset;
				if(r) {
					i = c.devicePixelRatio || 1, o = c.innerWidth * i, (n = r.split(",").map(function(t) {
						var i = {};
						return t.trim().split(/\s+/).forEach(function(t, e) {
							var n = parseInt(t.substring(0, t.length - 1), 10);
							return 0 === e ? i.url = t : void(n && (i.value = n, i.postfix = t[t.length - 1]))
						}), i
					})).sort(function(t, e) {
						return t.value - e.value
					});
					for(var a = 0; a < n.length; a++) {
						var l = n[a];
						if("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= i) {
							e = l;
							break
						}
					}!e && n.length && (e = n[n.length - 1]), e && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value))
				}
				t.$content = f('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = f("<img />").one("error", function() {
					f(this).remove(), t.$ghost = null, s.setBigImage(t)
				}).one("load", function() {
					s.afterLoad(t), s.setBigImage(t)
				}).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : s.setBigImage(t)
			},
			setBigImage: function(t) {
				var e = this,
					n = f("<img />");
				t.$image = n.one("error", function() {
					e.setError(t)
				}).one("load", function() {
					clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
						t.timouts = null, t.$ghost.hide()
					}, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
				}).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), n[0].complete ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function() {
					n[0].complete || t.hasError || e.showLoading(t)
				}, 100)
			},
			setIframe: function(o) {
				var s, e = this,
					r = o.opts.iframe,
					t = o.$slide;
				o.$content = f('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(t), s = f(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(o.$content), r.preload ? (e.showLoading(o), s.on("load.fb error.fb", function(t) {
					this.isReady = 1, o.$slide.trigger("refresh"), e.afterLoad(o)
				}), t.on("refresh.fb", function() {
					var t, e, n, i = o.$content;
					if(1 === s[0].isReady) {
						try {
							t = s.contents().find("body")
						} catch(t) {}
						t && t.length && (r.css.width === g || r.css.height === g) && (n = s[0].contentWindow.document.documentElement.scrollWidth, e = Math.ceil(t.outerWidth(!0) + (i.width() - n)), n = Math.ceil(t.outerHeight(!0)), i.css({
							width: r.css.width === g ? e + (i.outerWidth() - i.innerWidth()) : r.css.width,
							height: r.css.height === g ? n + (i.outerHeight() - i.innerHeight()) : r.css.height
						})), i.removeClass("fancybox-is-hidden")
					}
				})) : this.afterLoad(o), s.attr("src", o.src), !0 === o.opts.smallBtn && o.$content.prepend(e.translate(o, o.opts.btnTpl.smallBtn)), t.one("onReset", function() {
					try {
						f(this).find("iframe").hide().attr("src", "//about:blank")
					} catch(t) {}
					f(this).empty(), o.isLoaded = !1
				})
			},
			setContent: function(t, e) {
				this.isClosing || (this.hideLoading(t), t.$slide.empty(), e && e.hasOwnProperty && e instanceof f && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = f("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === f.type(e) && 3 === (e = f("<div>").append(f.trim(e)).contents())[0].nodeType && (e = f("<div>").html(e)), t.opts.filter && (e = f("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
					t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (f(this).empty(), t.isLoaded = !1)
				}), t.$content = f(e).appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = f(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), this.afterLoad(t))
			},
			setError: function(t) {
				t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
			},
			showLoading: function(t) {
				(t = t || this.current) && !t.$spinner && (t.$spinner = f(this.opts.spinnerTpl).appendTo(t.$slide))
			},
			hideLoading: function(t) {
				(t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
			},
			afterLoad: function(t) {
				this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
					return 2 == t.button && t.preventDefault(), !0
				}), "image" === t.type && f('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.revealContent(t))
			},
			revealContent: function(e) {
				var n, t, i, o = this,
					s = e.$slide,
					r = !1,
					a = e.opts[o.firstRun ? "animationEffect" : "transitionEffect"],
					l = e.opts[o.firstRun ? "animationDuration" : "transitionDuration"];
				return l = parseInt(e.forcedDuration === g ? l : e.forcedDuration, 10), !e.isMoved && e.pos === o.currPos && l || (a = !1), "zoom" !== a || e.pos === o.currPos && l && "image" === e.type && !e.hasError && (r = o.getThumbPos(e)) || (a = "fade"), "zoom" === a ? ((i = o.getFitPos(e)).scaleX = i.width / r.width, i.scaleY = i.height / r.height, delete i.width, delete i.height, "auto" == (t = e.opts.zoomOpacity) && (t = .1 < Math.abs(e.width / e.height - r.width / r.height)), t && (r.opacity = .1, i.opacity = 1), f.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), r), h(e.$content), void f.fancybox.animate(e.$content, i, l, function() {
					o.complete()
				})) : (o.updateSlide(e), a ? (f.fancybox.stop(s), n = "fancybox-animated fancybox-slide--" + (e.pos > o.prevPos ? "next" : "previous") + " fancybox-fx-" + a, s.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(n), e.$content.removeClass("fancybox-is-hidden"), h(s), void f.fancybox.animate(s, "fancybox-slide--current", l, function(t) {
					s.removeClass(n).removeAttr("style"), e.pos === o.currPos && o.complete()
				}, !0)) : (h(s), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === o.currPos && o.complete())))
			},
			getThumbPos: function(t) {
				var e = !1,
					i = t.opts.$thumb,
					n = i ? i.offset() : 0;
				return n && i[0].ownerDocument === o && function() {
					for(var t = i[0], n = t.getBoundingClientRect(), e = []; null !== t.parentElement;) "hidden" !== f(t.parentElement).css("overflow") && "auto" !== f(t.parentElement).css("overflow") || e.push(t.parentElement.getBoundingClientRect()), t = t.parentElement;
					return e.every(function(t) {
						var e = Math.min(n.right, t.right) - Math.max(n.left, t.left),
							t = Math.min(n.bottom, t.bottom) - Math.max(n.top, t.top);
						return 0 < e && 0 < t
					}) && 0 < n.bottom && 0 < n.right && n.left < f(c).width() && n.top < f(c).height()
				}() && (t = this.$refs.stage.offset(), e = {
					top: n.top - t.top + parseFloat(i.css("border-top-width") || 0),
					left: n.left - t.left + parseFloat(i.css("border-left-width") || 0),
					width: i.width(),
					height: i.height(),
					scaleX: 1,
					scaleY: 1
				}), e
			},
			complete: function() {
				var n = this,
					t = n.current,
					i = {};
				t.isMoved || !t.isLoaded || t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), h(t.$slide), t.$slide.addClass("fancybox-slide--complete"), f.each(n.slides, function(t, e) {
					e.pos >= n.currPos - 1 && e.pos <= n.currPos + 1 ? i[e.pos] = e : e && (f.fancybox.stop(e.$slide), e.$slide.unbind().remove())
				}), n.slides = i, n.updateCursor(), n.trigger("afterShow"), (f(o.activeElement).is("[disabled]") || t.opts.autoFocus && "image" != t.type && "iframe" !== t.type) && n.focus())
			},
			preload: function() {
				var t, e;
				this.group.length < 2 || (t = this.slides[this.currPos + 1], e = this.slides[this.currPos - 1], t && "image" === t.type && this.loadSlide(t), e && "image" === e.type && this.loadSlide(e))
			},
			focus: function() {
				var t = this.current;
				this.isClosing || (t = (t = t && t.isComplete ? t.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first") : null) && t.length ? t : this.$refs.container).focus()
			},
			activate: function() {
				var e = this;
				f(".fancybox-container").each(function() {
					var t = f(this).data("FancyBox");
					t && t.uid !== e.uid && !t.isClosing && t.trigger("onDeactivate")
				}), e.current && (0 < e.$refs.container.index() && e.$refs.container.prependTo(o.body), e.updateControls()), e.trigger("onActivate"), e.addEvents()
			},
			close: function(t, e) {
				function n() {
					a.cleanUp(t)
				}
				var i, o, s, r, a = this,
					l = a.current;
				return !(a.isClosing || (!(a.isClosing = !0) === a.trigger("beforeClose", t) ? (a.isClosing = !1, u(function() {
					a.update()
				}), 1) : (a.removeEvents(), l.timouts && clearTimeout(l.timouts), s = l.$content, i = l.opts.animationEffect, o = f.isNumeric(e) ? e : i ? l.opts.animationDuration : 0, l.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), l.$slide.siblings().trigger("onReset").remove(), o && a.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), a.hideLoading(l), a.hideControls(), a.updateCursor(), "zoom" !== i || !0 !== t && s && o && "image" === l.type && !l.hasError && (r = a.getThumbPos(l)) || (i = "fade"), "zoom" === i ? (f.fancybox.stop(s), (e = f.fancybox.getTranslate(s)).width = e.width * e.scaleX, e.height = e.height * e.scaleY, "auto" == (s = l.opts.zoomOpacity) && (s = .1 < Math.abs(l.width / l.height - r.width / r.height)), s && (r.opacity = 0), e.scaleX = e.width / r.width, e.scaleY = e.height / r.height, e.width = r.width, e.height = r.height, f.fancybox.setTranslate(l.$content, e), f.fancybox.animate(l.$content, r, o, n)) : i && o ? !0 === t ? setTimeout(n, o) : f.fancybox.animate(l.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, o, n) : n(), 0)))
			},
			cleanUp: function(t) {
				this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", t), this.$lastFocus && this.current.opts.backFocus && this.$lastFocus.focus(), this.current = null, (t = f.fancybox.getInstance()) ? t.activate() : (r.scrollTop(this.scrollTop).scrollLeft(this.scrollLeft), f("html").removeClass("fancybox-enabled"), f("#fancybox-style-noscroll").remove())
			},
			trigger: function(t, e) {
				var n, i = Array.prototype.slice.call(arguments, 1),
					e = e && e.opts ? e : this.current;
				return e ? i.unshift(e) : e = this, i.unshift(this), f.isFunction(e.opts[t]) && (n = e.opts[t].apply(e, i)), !1 === n ? n : void("afterClose" === t ? a : this.$refs.container).trigger(t + ".fb", i)
			},
			updateControls: function(t) {
				var e = this.current,
					n = e.index,
					i = e.opts,
					o = i.caption,
					s = this.$refs.caption;
				e.$slide.trigger("refresh"), this.$caption = o && o.length ? s.html(o) : null, this.isHiddenControls || this.showControls(), f("[data-fancybox-count]").html(this.group.length), f("[data-fancybox-index]").html(n + 1), f("[data-fancybox-prev]").prop("disabled", !i.loop && n <= 0), f("[data-fancybox-next]").prop("disabled", !i.loop && n >= this.group.length - 1)
			},
			hideControls: function() {
				this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
			},
			showControls: function() {
				var t = (this.current || this).opts,
					e = this.$refs.container;
				this.isHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < this.group.length)).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < this.group.length)).toggleClass("fancybox-is-modal", !!t.modal), this.$caption ? e.addClass("fancybox-show-caption ") : e.removeClass("fancybox-show-caption")
			},
			toggleControls: function() {
				this.isHiddenControls ? this.showControls() : this.hideControls()
			}
		}), f.fancybox = {
			version: "3.1.24",
			defaults: s,
			getInstance: function(t) {
				var e = f('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
					n = Array.prototype.slice.call(arguments, 1);
				return e instanceof i && ("string" === f.type(t) ? e[t].apply(e, n) : "function" === f.type(t) && t.apply(e, n), e)
			},
			open: function(t, e, n) {
				return new i(t, e, n)
			},
			close: function(t) {
				var e = this.getInstance();
				e && (e.close(), !0 === t && this.close())
			},
			destroy: function() {
				this.close(!0), a.off("click.fb-start")
			},
			isMobile: o.createTouch !== g && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
			use3d: (t = o.createElement("div"), c.getComputedStyle && c.getComputedStyle(t).getPropertyValue("transform") && !(o.documentMode && o.documentMode < 11)),
			getTranslate: function(t) {
				var e, n;
				return !(!t || !t.length) && ((e = (e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? (e = (e = e.split("(")[1]).split(")")[0]).split(",") : []).length ? e = (e = 10 < e.length ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat) : (e = [0, 0, 1, 1], (n = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"))) && (e[0] = parseFloat(n[2]), e[1] = parseFloat(n[1]))), {
					top: e[0],
					left: e[1],
					scaleX: e[2],
					scaleY: e[3],
					opacity: parseFloat(t.css("opacity")),
					width: t.width(),
					height: t.height()
				})
			},
			setTranslate: function(t, e) {
				var n = "",
					i = {};
				if(t && e) return e.left === g && e.top === g || (n = (e.left === g ? t.position() : e).left + "px, " + (e.top === g ? t.position() : e).top + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== g && e.scaleY !== g && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== g && (i.opacity = e.opacity), e.width !== g && (i.width = e.width), e.height !== g && (i.height = e.height), t.css(i)
			},
			animate: function(e, n, t, i, o) {
				var s = d || "transitionend";
				f.isFunction(t) && (i = t, t = null), f.isPlainObject(n) || e.removeAttr("style"), e.on(s, function(t) {
					t && t.originalEvent && (!e.is(t.originalEvent.target) || "z-index" == t.originalEvent.propertyName) || (e.off(s), f.isPlainObject(n) ? n.scaleX !== g && n.scaleY !== g && (e.css("transition-duration", "0ms"), n.width = Math.round(e.width() * n.scaleX), n.height = Math.round(e.height() * n.scaleY), n.scaleX = 1, n.scaleY = 1, f.fancybox.setTranslate(e, n)) : !0 !== o && e.removeClass(n), f.isFunction(i) && i(t))
				}), f.isNumeric(t) && e.css("transition-duration", t + "ms"), f.isPlainObject(n) ? f.fancybox.setTranslate(e, n) : e.addClass(n), e.data("timer", setTimeout(function() {
					e.trigger("transitionend")
				}, t + 16))
			},
			stop: function(t) {
				clearTimeout(t.data("timer")), t.off(d)
			}
		}, f.fn.fancybox = function(t) {
			var e;
			return(e = (t = t || {}).selector || !1) ? f("body").off("click.fb-start", e).on("click.fb-start", e, {
				options: t
			}, n) : this.off("click.fb-start").on("click.fb-start", {
				items: this,
				options: t
			}, n), this
		}, a.on("click.fb-start", "[data-fancybox]", n)
	}
	var t
}(window, document, window.jQuery),
function(p) {
	"use strict";

	function f(n, t, e) {
		if(n) return e = e || "", "object" === p.type(e) && (e = p.param(e, !0)), p.each(t, function(t, e) {
			n = n.replace("$" + t, e || "")
		}), e.length && (n += (0 < n.indexOf("?") ? "&" : "?") + e), n
	}
	var n = {
		youtube: {
			matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
			params: {
				autoplay: 1,
				autohide: 1,
				fs: 1,
				rel: 0,
				hd: 1,
				wmode: "transparent",
				enablejsapi: 1,
				html5: 1
			},
			paramPlace: 8,
			type: "iframe",
			url: "//www.youtube.com/embed/$4",
			thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
		},
		vimeo: {
			matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
			params: {
				autoplay: 1,
				hd: 1,
				show_title: 1,
				show_byline: 1,
				show_portrait: 0,
				fullscreen: 1,
				api: 1
			},
			paramPlace: 3,
			type: "iframe",
			url: "//player.vimeo.com/video/$2"
		},
		metacafe: {
			matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
			type: "iframe",
			url: "//www.metacafe.com/embed/$1/?ap=1"
		},
		dailymotion: {
			matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
			params: {
				additionalInfos: 0,
				autoStart: 1
			},
			type: "iframe",
			url: "//www.dailymotion.com/embed/video/$1"
		},
		vine: {
			matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
			type: "iframe",
			url: "//vine.co/v/$1/embed/simple"
		},
		instagram: {
			matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
			type: "image",
			url: "//$1/p/$2/media/?size=l"
		},
		gmap_place: {
			matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
			type: "iframe",
			url: function(t) {
				return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
			}
		},
		gmap_search: {
			matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
			type: "iframe",
			url: function(t) {
				return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
			}
		}
	};
	p(document).on("onInit.fb", function(t, e) {
		p.each(e.group, function(t, o) {
			var e, s, r, a, l, c, u, d = o.src || "",
				h = !1;
			o.type || (e = p.extend(!0, {}, n, o.opts.media), p.each(e, function(t, e) {
				if(r = d.match(e.matcher), c = {}, u = t, r) {
					if(h = e.type, e.paramPlace && r[e.paramPlace]) {
						"?" == (l = r[e.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
						for(var n = 0; n < l.length; ++n) {
							var i = l[n].split("=", 2);
							2 == i.length && (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
						}
					}
					return a = p.extend(!0, {}, e.params, o.opts[t], c), d = "function" === p.type(e.url) ? e.url.call(this, r, a, o) : f(e.url, r, a), s = "function" === p.type(e.thumb) ? e.thumb.call(this, r, a, o) : f(e.thumb, r), "vimeo" === u && (d = d.replace("&%23", "#")), !1
				}
			}), h ? (o.src = d, o.type = h, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = s), "iframe" === h && (p.extend(!0, o.opts, {
				iframe: {
					preload: !1,
					attr: {
						scrolling: "no"
					}
				}
			}), o.contentProvider = u, o.opts.slideClass += " fancybox-slide--" + ("gmap_place" == u || "gmap_search" == u ? "map" : "video"))) : o.type = "image")
		})
	})
}(window.jQuery),
function(u, a, d) {
	"use strict";

	function h(t) {
		var e, n = [];
		for(e in t = (t = t.originalEvent || t || u.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[e].pageX ? n.push({
			x: t[e].pageX,
			y: t[e].pageY
		}) : t[e].clientX && n.push({
			x: t[e].clientX,
			y: t[e].clientY
		});
		return n
	}

	function p(t, e, n) {
		return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
	}

	function l(t) {
		if(t.is("a,button,input,select,textarea") || d.isFunction(t.get(0).onclick)) return 1;
		for(var e = 0, n = t[0].attributes, i = n.length; e < i; e++)
			if("data-fancybox-" === n[e].nodeName.substr(0, 14)) return 1
	}

	function c(t) {
		for(var e, n, i, o = !1; e = t.get(0), n = i = n = void 0, n = u.getComputedStyle(e)["overflow-y"], i = u.getComputedStyle(e)["overflow-x"], n = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight, e = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth, !(o = n || e) && (t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body"););
		return o
	}

	function n(t) {
		this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", d.proxy(this, "ontouchstart"))
	}
	var f = u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || function(t) {
			return u.setTimeout(t, 1e3 / 60)
		},
		g = u.cancelAnimationFrame || u.webkitCancelAnimationFrame || u.mozCancelAnimationFrame || u.oCancelAnimationFrame || function(t) {
			u.clearTimeout(t)
		};
	n.prototype.destroy = function() {
		this.$container.off(".fb.touch")
	}, n.prototype.ontouchstart = function(t) {
		var e = this,
			n = d(t.target),
			i = e.instance,
			o = i.current,
			s = o.$content,
			r = "touchstart" == t.type;
		if(r && e.$container.off("mousedown.fb.touch"), !o || e.instance.isAnimating || e.instance.isClosing) return t.stopPropagation(), void t.preventDefault();
		t.originalEvent && 2 == t.originalEvent.button || !n.length || l(n) || l(n.parent()) || t.originalEvent.clientX > n[0].clientWidth + n.offset().left || (e.startPoints = h(t), !e.startPoints || 1 < e.startPoints.length && i.isSliding) || (e.$target = n, e.$content = s, e.canTap = !0, d(a).off(".fb.touch"), d(a).on(r ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", d.proxy(e, "ontouchend")), d(a).on(r ? "touchmove.fb.touch" : "mousemove.fb.touch", d.proxy(e, "ontouchmove")), t.stopPropagation(), (i.current.opts.touch || i.canPan()) && (n.is(e.$stage) || e.$stage.find(n).length) ? (d.fancybox.isMobile && (c(e.$target) || c(e.$target.parent())) || t.preventDefault(), e.canvasWidth = Math.round(o.$slide[0].clientWidth), e.canvasHeight = Math.round(o.$slide[0].clientHeight), e.startTime = (new Date).getTime(), e.distanceX = e.distanceY = e.distance = 0, e.isPanning = !1, e.isSwiping = !1, e.isZooming = !1, e.sliderStartPos = e.sliderLastPos || {
			top: 0,
			left: 0
		}, e.contentStartPos = d.fancybox.getTranslate(e.$content), e.contentLastPos = null, 1 !== e.startPoints.length || e.isZooming || (e.canTap = !i.isSliding, "image" === o.type && (e.contentStartPos.width > e.canvasWidth + 1 || e.contentStartPos.height > e.canvasHeight + 1) ? (d.fancybox.stop(e.$content), e.$content.css("transition-duration", "0ms"), e.isPanning = !0) : e.isSwiping = !0, e.$container.addClass("fancybox-controls--isGrabbing")), 2 !== e.startPoints.length || i.isAnimating || o.hasError || "image" !== o.type || !o.isLoaded && !o.$ghost || (e.isZooming = !0, e.isSwiping = !1, e.isPanning = !1, d.fancybox.stop(e.$content), e.$content.css("transition-duration", "0ms"), e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - d(u).scrollLeft(), e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - d(u).scrollTop(), e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width, e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height, e.startDistanceBetweenFingers = p(e.startPoints[0], e.startPoints[1]))) : n.is("img") && t.preventDefault())
	}, n.prototype.ontouchmove = function(t) {
		var e = this;
		if(e.newPoints = h(t), d.fancybox.isMobile && (c(e.$target) || c(e.$target.parent()))) return t.stopPropagation(), void(e.canTap = !1);
		(e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = p(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = p(e.newPoints[0], e.startPoints[0], "y"), e.distance = p(e.newPoints[0], e.startPoints[0]), 0 < e.distance) && (e.$target.is(e.$stage) || e.$stage.find(e.$target).length) && (t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom())
	}, n.prototype.onSwipe = function() {
		var t, i = this,
			e = i.isSwiping,
			n = i.sliderStartPos.left || 0;
		!0 === e ? 10 < Math.abs(i.distance) && (i.canTap = !1, i.instance.group.length < 2 && i.instance.opts.touch.vertical ? i.isSwiping = "y" : i.instance.isSliding || !1 === i.instance.opts.touch.vertical || "auto" === i.instance.opts.touch.vertical && 800 < d(u).width() ? i.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(i.distanceY, i.distanceX) / Math.PI), i.isSwiping = 45 < t && t < 135 ? "y" : "x"), i.instance.isSliding = i.isSwiping, i.startPoints = i.newPoints, d.each(i.instance.slides, function(t, e) {
			d.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === i.instance.current.pos && (i.sliderStartPos.left = d.fancybox.getTranslate(e.$slide).left)
		}), i.instance.SlideShow && i.instance.SlideShow.isActive && i.instance.SlideShow.stop()) : ("x" == e && (0 < i.distanceX && (i.instance.group.length < 2 || 0 === i.instance.current.index && !i.instance.current.opts.loop) ? n += Math.pow(i.distanceX, .8) : i.distanceX < 0 && (i.instance.group.length < 2 || i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop) ? n -= Math.pow(-i.distanceX, .8) : n += i.distanceX), i.sliderLastPos = {
			top: "x" == e ? 0 : i.sliderStartPos.top + i.distanceY,
			left: n
		}, i.requestId && (g(i.requestId), i.requestId = null), i.requestId = f(function() {
			i.sliderLastPos && (d.each(i.instance.slides, function(t, e) {
				var n = e.pos - i.instance.currPos;
				d.fancybox.setTranslate(e.$slide, {
					top: i.sliderLastPos.top,
					left: i.sliderLastPos.left + n * i.canvasWidth + n * e.opts.gutter
				})
			}), i.$container.addClass("fancybox-is-sliding"))
		}))
	}, n.prototype.onPan = function() {
		var t, e, n = this;
		n.canTap = !1, t = n.contentStartPos.width > n.canvasWidth ? n.contentStartPos.left + n.distanceX : n.contentStartPos.left, e = n.contentStartPos.top + n.distanceY, (e = n.limitMovement(t, e, n.contentStartPos.width, n.contentStartPos.height)).scaleX = n.contentStartPos.scaleX, e.scaleY = n.contentStartPos.scaleY, n.contentLastPos = e, n.requestId && (g(n.requestId), n.requestId = null), n.requestId = f(function() {
			d.fancybox.setTranslate(n.$content, n.contentLastPos)
		})
	}, n.prototype.limitMovement = function(t, e, n, i) {
		var o = this.canvasWidth,
			s = this.canvasHeight,
			r = this.contentStartPos.left,
			a = this.contentStartPos.top,
			l = this.distanceX,
			c = this.distanceY,
			u = Math.max(0, .5 * o - .5 * n),
			d = Math.max(0, .5 * s - .5 * i),
			h = Math.min(o - n, .5 * o - .5 * n),
			p = Math.min(s - i, .5 * s - .5 * i);
		return o < n && (0 < l && u < t && (t = u - 1 + Math.pow(-u + r + l, .8) || 0), l < 0 && t < h && (t = h + 1 - Math.pow(h - r - l, .8) || 0)), s < i && (0 < c && d < e && (e = d - 1 + Math.pow(-d + a + c, .8) || 0), c < 0 && e < p && (e = p + 1 - Math.pow(p - a - c, .8) || 0)), {
			top: e,
			left: t
		}
	}, n.prototype.limitPosition = function(t, e, n, i) {
		var o = this.canvasWidth,
			s = this.canvasHeight;
		return t = o < n ? (t = 0 < t ? 0 : t) < o - n ? o - n : t : Math.max(0, o / 2 - n / 2), {
			top: e = s < i ? (e = 0 < e ? 0 : e) < s - i ? s - i : e : Math.max(0, s / 2 - i / 2),
			left: t
		}
	}, n.prototype.onZoom = function() {
		var t = this,
			e = t.contentStartPos.width,
			n = t.contentStartPos.height,
			i = t.contentStartPos.left,
			o = t.contentStartPos.top,
			s = p(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
			r = Math.floor(e * s),
			a = Math.floor(n * s),
			l = (e - r) * t.percentageOfImageAtPinchPointX,
			c = (n - a) * t.percentageOfImageAtPinchPointY,
			e = (t.newPoints[0].x + t.newPoints[1].x) / 2 - d(u).scrollLeft(),
			n = (t.newPoints[0].y + t.newPoints[1].y) / 2 - d(u).scrollTop(),
			e = e - t.centerPointStartX,
			s = {
				top: o + (c + (n - t.centerPointStartY)),
				left: i + (l + e),
				scaleX: t.contentStartPos.scaleX * s,
				scaleY: t.contentStartPos.scaleY * s
			};
		t.canTap = !1, t.newWidth = r, t.newHeight = a, t.contentLastPos = s, t.requestId && (g(t.requestId), t.requestId = null), t.requestId = f(function() {
			d.fancybox.setTranslate(t.$content, t.contentLastPos)
		})
	}, n.prototype.ontouchend = function(t) {
		var e = this,
			n = Math.max((new Date).getTime() - e.startTime, 1),
			i = e.isSwiping,
			o = e.isPanning,
			s = e.isZooming;
		return e.endPoints = h(t), e.$container.removeClass("fancybox-controls--isGrabbing"), d(a).off(".fb.touch"), e.requestId && (g(e.requestId), e.requestId = null), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.canTap ? e.onTap(t) : (e.speed = 366, e.velocityX = e.distanceX / n * .5, e.velocityY = e.distanceY / n * .5, e.speedX = Math.max(.5 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), void(o ? e.endPanning() : s ? e.endZooming() : e.endSwiping(i)))
	}, n.prototype.endSwiping = function(t) {
		var e = this,
			n = !1;
		e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && 50 < Math.abs(e.distanceY) ? (d.fancybox.animate(e.instance.current.$slide, {
			top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
			opacity: 0
		}, 150), n = e.instance.close(!0, 300)) : "x" == t && 50 < e.distanceX && 1 < e.instance.group.length ? n = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && 1 < e.instance.group.length && (n = e.instance.next(e.speedX)), !1 !== n || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")
	}, n.prototype.endPanning = function() {
		var t, e, n = this;
		n.contentLastPos && (e = !1 === n.instance.current.opts.touch.momentum ? (t = n.contentLastPos.left, n.contentLastPos.top) : (t = n.contentLastPos.left + n.velocityX * n.speed, n.contentLastPos.top + n.velocityY * n.speed), (e = n.limitPosition(t, e, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width, e.height = n.contentStartPos.height, d.fancybox.animate(n.$content, e, 330))
	}, n.prototype.endZooming = function() {
		var t, e, n, i = this,
			o = i.instance.current,
			s = i.newWidth,
			r = i.newHeight;
		i.contentLastPos && (t = i.contentLastPos.left, n = {
			top: e = i.contentLastPos.top,
			left: t,
			width: s,
			height: r,
			scaleX: 1,
			scaleY: 1
		}, d.fancybox.setTranslate(i.$content, n), s < i.canvasWidth && r < i.canvasHeight ? i.instance.scaleToFit(150) : s > o.width || r > o.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (r = i.limitPosition(t, e, s, r), d.fancybox.setTranslate(i.content, d.fancybox.getTranslate(i.$content)), d.fancybox.animate(i.$content, r, 150)))
	}, n.prototype.onTap = function(e) {
		function t(t) {
			if(t = r.opts[t], d.isFunction(t) && (t = t.apply(s, [r, e])), t) switch(t) {
				case "close":
					s.close(i.startEvent);
					break;
				case "toggleControls":
					s.toggleControls(!0);
					break;
				case "next":
					s.next();
					break;
				case "nextOrClose":
					1 < s.group.length ? s.next() : s.close(i.startEvent);
					break;
				case "zoom":
					"image" == r.type && (r.isLoaded || r.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, c) : s.group.length < 2 && s.close(i.startEvent))
			}
		}
		var n, i = this,
			o = d(e.target),
			s = i.instance,
			r = s.current,
			a = e && h(e) || i.startPoints,
			l = a[0] ? a[0].x - i.$stage.offset().left : 0,
			c = a[0] ? a[0].y - i.$stage.offset().top : 0;
		if(!(e.originalEvent && 2 == e.originalEvent.button || s.isSliding || l > o[0].clientWidth + o.offset().left)) {
			if(o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";
			else if(o.is(".fancybox-slide")) n = "Slide";
			else {
				if(!s.current.$content || !s.current.$content.has(e.target).length) return;
				n = "Content"
			}
			if(i.tapped) {
				if(clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(l - i.tapX) || 50 < Math.abs(c - i.tapY) || s.isSliding) return this;
				t("dblclick" + n)
			} else i.tapX = l, i.tapY = c, r.opts["dblclick" + n] && r.opts["dblclick" + n] !== r.opts["click" + n] ? i.tapped = setTimeout(function() {
				i.tapped = null, t("click" + n)
			}, 300) : t("click" + n);
			return this
		}
	}, d(a).on("onActivate.fb", function(t, e) {
		e && !e.Guestures && (e.Guestures = new n(e))
	}), d(a).on("beforeClose.fb", function(t, e) {
		e && e.Guestures && e.Guestures.destroy()
	})
}(window, document, window.jQuery),
function(s, r) {
	"use strict";

	function n(t) {
		this.instance = t, this.init()
	}
	r.extend(n.prototype, {
		timer: null,
		isActive: !1,
		$button: null,
		speed: 3e3,
		init: function() {
			var t = this;
			t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
				t.toggle()
			}), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
		},
		set: function() {
			var t = this;
			t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
				t.instance.next()
			}, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
		},
		clear: function() {
			clearTimeout(this.timer), this.timer = null
		},
		start: function() {
			var t = this.instance.current;
			this.instance && t && (t.opts.loop || t.index < this.instance.group.length - 1) && (this.isActive = !0, this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), t.isComplete && this.set())
		},
		stop: function() {
			var t = this.instance.current;
			this.clear(), this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), this.isActive = !1
		},
		toggle: function() {
			this.isActive ? this.stop() : this.start()
		}
	}), r(s).on({
		"onInit.fb": function(t, e) {
			e && !e.SlideShow && (e.SlideShow = new n(e))
		},
		"beforeShow.fb": function(t, e, n, i) {
			e = e && e.SlideShow;
			i ? e && n.opts.slideShow.autoStart && e.start() : e && e.isActive && e.clear()
		},
		"afterShow.fb": function(t, e, n) {
			e = e && e.SlideShow;
			e && e.isActive && e.set()
		},
		"afterKeydown.fb": function(t, e, n, i, o) {
			e = e && e.SlideShow;
			!e || !n.opts.slideShow || 80 !== o && 32 !== o || r(s.activeElement).is("button,a,input") || (i.preventDefault(), e.toggle())
		},
		"beforeClose.fb onDeactivate.fb": function(t, e) {
			e = e && e.SlideShow;
			e && e.stop()
		}
	}), r(s).on("visibilitychange", function() {
		var t = r.fancybox.getInstance(),
			t = t && t.SlideShow;
		t && t.isActive && (s.hidden ? t.clear() : t.set())
	})
}(document, window.jQuery),
function(s, e) {
	"use strict";
	var o, n = function() {
		for(var t, e, n = [
				["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
				["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
				["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
				["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
				["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
			], i = {}, o = 0; o < n.length; o++)
			if((t = n[o]) && t[1] in s) {
				for(e = 0; e < t.length; e++) i[n[0][e]] = t[e];
				return i
			}
		return !1
	}();
	n ? (o = {
		request: function(t) {
			(t = t || s.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
		},
		exit: function() {
			s[n.exitFullscreen]()
		},
		toggle: function(t) {
			t = t || s.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
		},
		isFullscreen: function() {
			return Boolean(s[n.fullscreenElement])
		},
		enabled: function() {
			return Boolean(s[n.fullscreenEnabled])
		}
	}, e(s).on({
		"onInit.fb": function(t, e) {
			var n, i = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
			e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? ((n = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
				t.stopPropagation(), t.preventDefault(), o.toggle(n[0])
			}), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(n[0]), e.FullScreen = o) : i.hide()
		},
		"afterKeydown.fb": function(t, e, n, i, o) {
			e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
		},
		"beforeClose.fb": function(t) {
			t && t.FullScreen && o.exit()
		}
	}), e(s).on(n.fullscreenchange, function() {
		var t = e.fancybox.getInstance();
		t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0))
	})) : e.fancybox.defaults.btnTpl.fullScreen = !1
}(document, window.jQuery),
function(t, r) {
	"use strict";

	function n(t) {
		this.instance = t, this.init()
	}
	r.extend(n.prototype, {
		$button: null,
		$grid: null,
		$list: null,
		isVisible: !1,
		init: function() {
			var t = this,
				e = t.instance.group[0],
				n = t.instance.group[1];
			t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), 1 < t.instance.group.length && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) ? (t.$button.on("click", function() {
				t.toggle()
			}), t.isActive = !0) : (t.$button.hide(), t.isActive = !1)
		},
		create: function() {
			var n, i, t = this.instance;
			this.$grid = r('<div class="fancybox-thumbs"></div>').appendTo(t.$refs.container), n = "<ul>", r.each(t.group, function(t, e) {
				(i = e.opts.thumb || (e.opts.$thumb ? e.opts.$thumb.attr("src") : null)) || "image" !== e.type || (i = e.src), i && i.length && (n += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
			}), n += "</ul>", this.$list = r(n).appendTo(this.$grid).on("click", "li", function() {
				t.jumpTo(r(this).data("index"))
			}), this.$list.find("img").hide().one("load", function() {
				var t, e = r(this).parent().removeClass("fancybox-thumbs-loading"),
					n = e.outerWidth(),
					i = e.outerHeight(),
					o = this.naturalWidth || this.width,
					s = (t = this.naturalHeight || this.height) / i;
				1 <= (e = o / n) && 1 <= s && (s < e ? (o /= s, t = i) : (o = n, t /= e)), r(this).css({
					width: Math.floor(o),
					height: Math.floor(t),
					"margin-top": Math.min(0, Math.floor(.3 * i - .3 * t)),
					"margin-left": Math.min(0, Math.floor(.5 * n - .5 * o))
				}).show()
			}).each(function() {
				this.src = r(this).data("src")
			})
		},
		focus: function() {
			this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
		},
		close: function() {
			this.$grid.hide()
		},
		update: function() {
			this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
		},
		hide: function() {
			this.isVisible = !1, this.update()
		},
		show: function() {
			this.isVisible = !0, this.update()
		},
		toggle: function() {
			this.isVisible = !this.isVisible, this.update()
		}
	}), r(t).on({
		"onInit.fb": function(t, e) {
			e && !e.Thumbs && (e.Thumbs = new n(e))
		},
		"beforeShow.fb": function(t, e, n, i) {
			var o = e && e.Thumbs;
			if(o && o.isActive) {
				if(n.modal) return o.$button.hide(), void o.hide();
				i && !0 === e.opts.thumbs.autoStart && o.show(), o.isVisible && o.focus()
			}
		},
		"afterKeydown.fb": function(t, e, n, i, o) {
			e = e && e.Thumbs;
			e && e.isActive && 71 === o && (i.preventDefault(), e.toggle())
		},
		"beforeClose.fb": function(t, e) {
			var n = e && e.Thumbs;
			n && n.isVisible && !1 !== e.opts.thumbs.hideOnClose && n.close()
		}
	})
}(document, window.jQuery),
function(o, s, r) {
	"use strict";

	function a() {
		var t = s.location.hash.substr(1),
			e = t.split("-"),
			n = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
		return n < 1 && (n = 1), {
			hash: t,
			index: n,
			gallery: e.join("-")
		}
	}

	function e(t) {
		var e;
		"" !== t.gallery && ((e = r("[data-fancybox='" + r.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = r("#" + r.escapeSelector(t.gallery))), e.length && (c = !1, e.trigger("click")))
	}

	function l(t) {
		return !!t && ((t = (t.current || t).opts).$orig ? t.$orig.data("fancybox") : t.hash || "")
	}
	r.escapeSelector || (r.escapeSelector = function(t) {
		return(t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
			return e ? "\0" === t ? "Ã¯Â¿Â½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
		})
	});
	var c = !0,
		u = null,
		d = null;
	r(function() {
		setTimeout(function() {
			!1 !== r.fancybox.defaults.hash && (r(o).on({
				"onInit.fb": function(t, e) {
					var n, i;
					!1 !== e.group[e.currIndex].opts.hash && (n = a(), (i = l(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
				},
				"beforeShow.fb": function(t, e, n) {
					var i;
					!1 !== n.opts.hash && (i = l(e)) && "" !== i && (s.location.hash.indexOf(i) < 0 && (e.opts.origHash = s.location.hash), u = i + (1 < e.group.length ? "-" + (n.index + 1) : ""), "replaceState" in s.history ? (d && clearTimeout(d), d = setTimeout(function() {
						s.history[c ? "pushState" : "replaceState"]({}, o.title, s.location.pathname + s.location.search + "#" + u), d = null, c = !1
					}, 300)) : s.location.hash = u)
				},
				"beforeClose.fb": function(t, e, n) {
					var i;
					d && clearTimeout(d), !1 !== n.opts.hash && (i = l(e), n = e && e.opts.origHash ? e.opts.origHash : "", i && "" !== i && ("replaceState" in history ? s.history.replaceState({}, o.title, s.location.pathname + s.location.search + n) : (s.location.hash = n, r(s).scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))), u = null)
				}
			}), r(s).on("hashchange.fb", function() {
				var t = a();
				r.fancybox.getInstance() ? !u || u === t.gallery + "-" + t.index || 1 === t.index && u == t.gallery || (u = null, r.fancybox.close(), c = !0) : "" !== t.gallery && e(t)
			}), e(a()))
		}, 50)
	})
}(document, window, window.jQuery),
function(t, e) {
	"function" == typeof define && define.amd ? define(["module", "exports"], e) : "undefined" != typeof exports ? e(module, exports) : (e(e = {
		exports: {}
	}, e.exports), t.WOW = e.exports)
}(this, function(t, e) {
	"use strict";

	function n(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = function(t, e, n) {
		return e && o(t.prototype, e), n && o(t, n), t
	};

	function o(t, e) {
		for(var n = 0; n < e.length; n++) {
			var i = e[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function s(t, e) {
		return 0 <= e.indexOf(t)
	}

	function r(t, e, n) {
		null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
	}

	function a(t, e, n) {
		null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
	}
	var l = window.WeakMap || window.MozWeakMap || (i(p, [{
			key: "get",
			value: function(t) {
				for(var e = 0; e < this.keys.length; e++)
					if(this.keys[e] === t) return this.values[e]
			}
		}, {
			key: "set",
			value: function(t, e) {
				for(var n = 0; n < this.keys.length; n++)
					if(this.keys[n] === t) return this.values[n] = e, this;
				return this.keys.push(t), this.values.push(e), this
			}
		}]), p),
		c = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (i(h, [{
			key: "observe",
			value: function() {}
		}]), h.notSupported = !0, h),
		u = window.getComputedStyle || function(n) {
			var i = /(\-([a-z]){1})/g;
			return {
				getPropertyValue: function(t) {
					"float" === t && (t = "styleFloat"), i.test(t) && t.replace(i, function(t, e) {
						return e.toUpperCase()
					});
					var e = n.currentStyle;
					return(null != e ? e[t] : void 0) || null
				}
			}
		},
		i = (i(d, [{
			key: "init",
			value: function() {
				this.element = window.document.documentElement, s(document.readyState, ["interactive", "complete"]) ? this.start() : r(document, "DOMContentLoaded", this.start), this.finished = []
			}
		}, {
			key: "start",
			value: function() {
				var s = this;
				if(this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
					if(this.disabled()) this.resetStyle();
					else
						for(var t = 0; t < this.boxes.length; t++) {
							var e = this.boxes[t];
							this.applyStyle(e, !0)
						}
					this.disabled() || (r(this.config.scrollContainer || window, "scroll", this.scrollHandler), r(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live && new c(function(t) {
					for(var e = 0; e < t.length; e++)
						for(var n = t[e], i = 0; i < n.addedNodes.length; i++) {
							var o = n.addedNodes[i];
							s.doSync(o)
						}
				}).observe(document.body, {
					childList: !0,
					subtree: !0
				})
			}
		}, {
			key: "stop",
			value: function() {
				this.stopped = !0, a(this.config.scrollContainer || window, "scroll", this.scrollHandler), a(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
			}
		}, {
			key: "sync",
			value: function() {
				c.notSupported && this.doSync(this.element)
			}
		}, {
			key: "doSync",
			value: function(t) {
				if(null == t && (t = this.element), 1 === t.nodeType)
					for(var e = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass), n = 0; n < e.length; n++) {
						var i = e[n];
						s(i, this.all) || (this.boxes.push(i), this.all.push(i), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(i, !0), this.scrolled = !0)
					}
			}
		}, {
			key: "show",
			value: function(t) {
				var e, n;
				return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), e = t, n = this.wowEvent, null != e.dispatchEvent ? e.dispatchEvent(n) : n in (null != e) ? e[n]() : "on" + n in (null != e) && e["on" + n](), this.config.resetAnimation && (r(t, "animationend", this.resetAnimation), r(t, "oanimationend", this.resetAnimation), r(t, "webkitAnimationEnd", this.resetAnimation), r(t, "MSAnimationEnd", this.resetAnimation)), t
			}
		}, {
			key: "applyStyle",
			value: function(t, e) {
				var n = this,
					i = t.getAttribute("data-wow-duration"),
					o = t.getAttribute("data-wow-delay"),
					s = t.getAttribute("data-wow-iteration");
				return this.animate(function() {
					return n.customStyle(t, e, i, o, s)
				})
			}
		}, {
			key: "resetStyle",
			value: function() {
				for(var t = 0; t < this.boxes.length; t++) this.boxes[t].style.visibility = "visible"
			}
		}, {
			key: "resetAnimation",
			value: function(t) {
				0 <= t.type.toLowerCase().indexOf("animationend") && ((t = t.target || t.srcElement).className = t.className.replace(this.config.animateClass, "").trim())
			}
		}, {
			key: "customStyle",
			value: function(t, e, n, i, o) {
				return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
					animationDuration: n
				}), i && this.vendorSet(t.style, {
					animationDelay: i
				}), o && this.vendorSet(t.style, {
					animationIterationCount: o
				}), this.vendorSet(t.style, {
					animationName: e ? "none" : this.cachedAnimationName(t)
				}), t
			}
		}, {
			key: "vendorSet",
			value: function(t, e) {
				for(var n in e)
					if(e.hasOwnProperty(n)) {
						var i = e[n];
						t["" + n] = i;
						for(var o = 0; o < this.vendors.length; o++) t["" + this.vendors[o] + n.charAt(0).toUpperCase() + n.substr(1)] = i
					}
			}
		}, {
			key: "vendorCSS",
			value: function(t, e) {
				for(var n = u(t), i = n.getPropertyCSSValue(e), o = 0; o < this.vendors.length; o++) var s = this.vendors[o],
					i = i || n.getPropertyCSSValue("-" + s + "-" + e);
				return i
			}
		}, {
			key: "animationName",
			value: function(e) {
				var n = void 0;
				try {
					n = this.vendorCSS(e, "animation-name").cssText
				} catch(t) {
					n = u(e).getPropertyValue("animation-name")
				}
				return "none" === n ? "" : n
			}
		}, {
			key: "cacheAnimationName",
			value: function(t) {
				return this.animationNameCache.set(t, this.animationName(t))
			}
		}, {
			key: "cachedAnimationName",
			value: function(t) {
				return this.animationNameCache.get(t)
			}
		}, {
			key: "scrollHandler",
			value: function() {
				this.scrolled = !0
			}
		}, {
			key: "scrollCallback",
			value: function() {
				if(this.scrolled) {
					this.scrolled = !1;
					for(var t = [], e = 0; e < this.boxes.length; e++) {
						var n = this.boxes[e];
						n && (this.isVisible(n) ? this.show(n) : t.push(n))
					}
					this.boxes = t, this.boxes.length || this.config.live || this.stop()
				}
			}
		}, {
			key: "offsetTop",
			value: function(t) {
				for(; void 0 === t.offsetTop;) t = t.parentNode;
				for(var e = t.offsetTop; t.offsetParent;) e += (t = t.offsetParent).offsetTop;
				return e
			}
		}, {
			key: "isVisible",
			value: function(t) {
				var e = t.getAttribute("data-wow-offset") || this.config.offset,
					n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
					i = n + Math.min(this.element.clientHeight, "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - e,
					e = this.offsetTop(t),
					t = e + t.clientHeight;
				return e <= i && n <= t
			}
		}, {
			key: "disabled",
			value: function() {
				return !this.config.mobile && (t = navigator.userAgent, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t));
				var t
			}
		}]), d);

	function d() {
		var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
		n(this, d), this.defaults = {
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0,
			callback: null,
			scrollContainer: null,
			resetAnimation: !0
		}, this.animate = "requestAnimationFrame" in window ? function(t) {
			return window.requestAnimationFrame(t)
		} : function(t) {
			return t()
		}, this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = function(t, e) {
			for(var n in e) {
				var i;
				null == t[n] && (i = e[n], t[n] = i)
			}
			return t
		}(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new l, this.wowEvent = function(t, e, n, i) {
			var o = !(arguments.length <= 1 || void 0 === e) && e,
				e = !(arguments.length <= 2 || void 0 === n) && n,
				n = arguments.length <= 3 || void 0 === i ? null : i,
				i = void 0;
			return null != document.createEvent ? (i = document.createEvent("CustomEvent")).initCustomEvent(t, o, e, n) : null != document.createEventObject ? (i = document.createEventObject()).eventType = t : i.eventName = t, i
		}(this.config.boxClass)
	}

	function h() {
		n(this, h), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
	}

	function p() {
		n(this, p), this.keys = [], this.values = []
	}
	e.default = i, t.exports = e.default
}),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(u) {
	u.extend(u.fn, {
		validate: function(t) {
			if(this.length) {
				var i = u.data(this[0], "validator");
				return i || (this.attr("novalidate", "novalidate"), i = new u.validator(t, this[0]), u.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
					i.submitButton = t.currentTarget, u(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (i.cancelSubmit = !0)
				}), this.on("submit.validate", function(n) {
					function t() {
						var t, e;
						return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (t = u("<input type='hidden'/>").attr("name", i.submitButton.name).val(u(i.submitButton).val()).appendTo(i.currentForm)), !i.settings.submitHandler || (e = i.settings.submitHandler.call(i, i.currentForm, n), t && t.remove(), void 0 !== e && e)
					}
					return i.settings.debug && n.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, t()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : t() : (i.focusInvalid(), !1)
				})), i)
			}
			t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
		},
		valid: function() {
			var t, e, n;
			return u(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, e = u(this[0].form).validate(), this.each(function() {
				(t = e.element(this) && t) || (n = n.concat(e.errorList))
			}), e.errorList = n), t
		},
		rules: function(t, e) {
			var n, i, o, s, r, a = this[0];
			if(null != a && (!a.form && a.hasAttribute("contenteditable") && (a.form = this.closest("form")[0], a.name = this.attr("name")), null != a.form)) {
				if(t) switch(i = (n = u.data(a.form, "validator").settings).rules, o = u.validator.staticRules(a), t) {
					case "add":
						u.extend(o, u.validator.normalizeRule(e)), delete o.messages, i[a.name] = o, e.messages && (n.messages[a.name] = u.extend(n.messages[a.name], e.messages));
						break;
					case "remove":
						return e ? (r = {}, u.each(e.split(/\s/), function(t, e) {
							r[e] = o[e], delete o[e]
						}), r) : (delete i[a.name], o)
				}
				return(t = u.validator.normalizeRules(u.extend({}, u.validator.classRules(a), u.validator.attributeRules(a), u.validator.dataRules(a), u.validator.staticRules(a)), a)).required && (s = t.required, delete t.required, t = u.extend({
					required: s
				}, t)), t.remote && (s = t.remote, delete t.remote, t = u.extend(t, {
					remote: s
				})), t
			}
		}
	}), u.extend(u.expr.pseudos || u.expr[":"], {
		blank: function(t) {
			return !u.trim("" + u(t).val())
		},
		filled: function(t) {
			t = u(t).val();
			return null !== t && !!u.trim("" + t)
		},
		unchecked: function(t) {
			return !u(t).prop("checked")
		}
	}), u.validator = function(t, e) {
		this.settings = u.extend(!0, {}, u.validator.defaults, t), this.currentForm = e, this.init()
	}, u.validator.format = function(n, t) {
		return 1 === arguments.length ? function() {
			var t = u.makeArray(arguments);
			return t.unshift(n), u.validator.format.apply(this, t)
		} : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = u.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), u.each(t, function(t, e) {
			n = n.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
				return e
			})
		})), n)
	}, u.extend(u.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: u([]),
			errorLabelContainer: u([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(t) {
				this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
			},
			onfocusout: function(t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function(t, e) {
				9 === e.which && "" === this.elementValue(t) || -1 !== u.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
			},
			onclick: function(t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function(t, e, n) {
				("radio" === t.type ? this.findByName(t.name) : u(t)).addClass(e).removeClass(n)
			},
			unhighlight: function(t, e, n) {
				("radio" === t.type ? this.findByName(t.name) : u(t)).removeClass(e).addClass(n)
			}
		},
		setDefaults: function(t) {
			u.extend(u.validator.defaults, t)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: u.validator.format("Please enter no more than {0} characters."),
			minlength: u.validator.format("Please enter at least {0} characters."),
			rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
			range: u.validator.format("Please enter a value between {0} and {1}."),
			max: u.validator.format("Please enter a value less than or equal to {0}."),
			min: u.validator.format("Please enter a value greater than or equal to {0}."),
			step: u.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var n, i = this.groups = {};

				function t(t) {
					!this.form && this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0], this.name = u(this).attr("name"));
					var e = u.data(this.form, "validator"),
						n = "on" + t.type.replace(/^validate/, ""),
						i = e.settings;
					i[n] && !u(this).is(i.ignore) && i[n].call(e, this, t)
				}
				u.each(this.settings.groups, function(n, t) {
					"string" == typeof t && (t = t.split(/\s/)), u.each(t, function(t, e) {
						i[e] = n
					})
				}), n = this.settings.rules, u.each(n, function(t, e) {
					n[t] = u.validator.normalizeRule(e)
				}), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for(var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
				return this.valid()
			},
			element: function(t) {
				var e, n, i = this.clean(t),
					o = this.validationTargetFor(i),
					s = this,
					r = !0;
				return void 0 === o ? delete this.invalid[i.name] : (this.prepareElement(o), this.currentElements = u(o), (n = this.groups[o.name]) && u.each(this.groups, function(t, e) {
					e === n && t !== o.name && (i = s.validationTargetFor(s.clean(s.findByName(t)))) && i.name in s.invalid && (s.currentElements.push(i), r = s.check(i) && r)
				}), e = !1 !== this.check(o), r = r && e, this.invalid[o.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(t).attr("aria-invalid", !e)), r
			},
			showErrors: function(e) {
				var n;
				e && (n = this, u.extend(this.errorMap, e), this.errorList = u.map(this.errorMap, function(t, e) {
					return {
						message: t,
						element: n.findByName(e)[0]
					}
				}), this.successList = u.grep(this.successList, function(t) {
					return !(t.name in e)
				})), this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(t)
			},
			resetElements: function(t) {
				var e;
				if(this.settings.unhighlight)
					for(e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
				else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(t) {
				var e, n = 0;
				for(e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && n++;
				return n
			},
			hideErrors: function() {
				this.hideThese(this.toHide)
			},
			hideThese: function(t) {
				t.not(this.containers).text(""), this.addWrapper(t).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if(this.settings.focusInvalid) try {
					u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch(t) {}
			},
			findLastActive: function() {
				var e = this.lastActive;
				return e && 1 === u.grep(this.errorList, function(t) {
					return t.element.name === e.name
				}).length && e
			},
			elements: function() {
				var e = this,
					n = {};
				return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
					var t = this.name || u(this).attr("name");
					return !t && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0], this.name = t), !(t in n || !e.objectLength(u(this).rules()) || (n[t] = !0, 0))
				})
			},
			clean: function(t) {
				return u(t)[0]
			},
			errors: function() {
				var t = this.settings.errorClass.split(" ").join(".");
				return u(this.settings.errorElement + "." + t, this.errorContext)
			},
			resetInternals: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([])
			},
			reset: function() {
				this.resetInternals(), this.currentElements = u([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(t) {
				this.reset(), this.toHide = this.errorsFor(t)
			},
			elementValue: function(t) {
				var e = u(t),
					n = t.type;
				return "radio" === n || "checkbox" === n ? this.findByName(t.name).filter(":checked").val() : "number" === n && void 0 !== t.validity ? t.validity.badInput ? "NaN" : e.val() : (e = t.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === n ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (n = e.lastIndexOf("/")) || 0 <= (n = e.lastIndexOf("\\")) ? e.substr(n + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
			},
			check: function(e) {
				e = this.validationTargetFor(this.clean(e));
				var t, n, i, o, s = u(e).rules(),
					r = u.map(s, function(t, e) {
						return e
					}).length,
					a = !1,
					l = this.elementValue(e);
				if("function" == typeof s.normalizer ? o = s.normalizer : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer), o) {
					if("string" != typeof(l = o.call(e, l))) throw new TypeError("The normalizer should return a string value.");
					delete s.normalizer
				}
				for(n in s) {
					i = {
						method: n,
						parameters: s[n]
					};
					try {
						if("dependency-mismatch" === (t = u.validator.methods[n].call(this, l, e, i.parameters)) && 1 === r) {
							a = !0;
							continue
						}
						if(a = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
						if(!t) return this.formatAndAdd(e, i), !1
					} catch(t) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + i.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + i.method + "' method."), t
					}
				}
				if(!a) return this.objectLength(s) && this.successList.push(e), !0
			},
			customDataMessage: function(t, e) {
				return u(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg")
			},
			customMessage: function(t, e) {
				t = this.settings.messages[t];
				return t && (t.constructor === String ? t : t[e])
			},
			findDefined: function() {
				for(var t = 0; t < arguments.length; t++)
					if(void 0 !== arguments[t]) return arguments[t]
			},
			defaultMessage: function(t, e) {
				"string" == typeof e && (e = {
					method: e
				});
				var n = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, u.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
					i = /\$?\{(\d+)\}/g;
				return "function" == typeof n ? n = n.call(this, e.parameters, t) : i.test(n) && (n = u.validator.format(n.replace(i, "{$1}"), e.parameters)), n
			},
			formatAndAdd: function(t, e) {
				var n = this.defaultMessage(t, e);
				this.errorList.push({
					message: n,
					element: t,
					method: e.method
				}), this.errorMap[t.name] = n, this.submitted[t.name] = n
			},
			addWrapper: function(t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			},
			defaultShowErrors: function() {
				for(var t, e, n = 0; this.errorList[n]; n++) e = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message);
				if(this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for(n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
				if(this.settings.unhighlight)
					for(n = 0, t = this.validElements(); t[n]; n++) this.settings.unhighlight.call(this, t[n], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return u(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(t, e) {
				var n, i, o, s = this.errorsFor(t),
					r = this.idOrName(t),
					a = u(t).attr("aria-describedby");
				s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(e)) : (n = s = u("<" + this.settings.errorElement + ">").attr("id", r + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (n = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, u(t)) : n.insertAfter(t), s.is("label") ? s.attr("for", r) : 0 === s.parents("label[for='" + this.escapeCssMeta(r) + "']").length && (r = s.attr("id"), a ? a.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (a += " " + r) : a = r, u(t).attr("aria-describedby", a), (i = this.groups[t.name]) && (o = this, u.each(o.groups, function(t, e) {
					e === i && u("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", s.attr("id"))
				})))), !e && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)), this.toShow = this.toShow.add(s)
			},
			errorsFor: function(t) {
				var e = this.escapeCssMeta(this.idOrName(t)),
					t = u(t).attr("aria-describedby"),
					e = "label[for='" + e + "'], label[for='" + e + "'] *";
				return t && (e = e + ", #" + this.escapeCssMeta(t).replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			escapeCssMeta: function(t) {
				return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function(t) {
				return this.groups[t.name] || !this.checkable(t) && t.id || t.name
			},
			validationTargetFor: function(t) {
				return this.checkable(t) && (t = this.findByName(t.name)), u(t).not(this.settings.ignore)[0]
			},
			checkable: function(t) {
				return /radio|checkbox/i.test(t.type)
			},
			findByName: function(t) {
				return u(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
			},
			getLength: function(t, e) {
				switch(e.nodeName.toLowerCase()) {
					case "select":
						return u("option:selected", e).length;
					case "input":
						if(this.checkable(e)) return this.findByName(e.name).filter(":checked").length
				}
				return t.length
			},
			depend: function(t, e) {
				return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
			},
			dependTypes: {
				boolean: function(t) {
					return t
				},
				string: function(t, e) {
					return !!u(t, e.form).length
				},
				function: function(t, e) {
					return t(e)
				}
			},
			optional: function(t) {
				var e = this.elementValue(t);
				return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch"
			},
			startRequest: function(t) {
				this.pending[t.name] || (this.pendingRequest++, u(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
			},
			stopRequest: function(t, e) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], u(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.submitButton && u("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(t, e) {
				return e = "string" == typeof e && e || "remote", u.data(t, "previousValue") || u.data(t, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(t, {
						method: e
					})
				})
			},
			destroy: function() {
				this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(t, e) {
			t.constructor === String ? this.classRuleSettings[t] = e : u.extend(this.classRuleSettings, t)
		},
		classRules: function(t) {
			var e = {},
				t = u(t).attr("class");
			return t && u.each(t.split(" "), function() {
				this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this])
			}), e
		},
		normalizeAttributeRule: function(t, e, n, i) {
			/min|max|step/.test(n) && (null === e || /number|range|text/.test(e)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? t[n] = i : e === n && "range" !== e && (t[n] = !0)
		},
		attributeRules: function(t) {
			var e, n, i = {},
				o = u(t),
				s = t.getAttribute("type");
			for(e in u.validator.methods) n = "required" === e ? ("" === (n = t.getAttribute(e)) && (n = !0), !!n) : o.attr(e), this.normalizeAttributeRule(i, s, e, n);
			return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
		},
		dataRules: function(t) {
			var e, n, i = {},
				o = u(t),
				s = t.getAttribute("type");
			for(e in u.validator.methods) n = o.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), this.normalizeAttributeRule(i, s, e, n);
			return i
		},
		staticRules: function(t) {
			var e = {},
				n = u.data(t.form, "validator");
			return n.settings.rules && (e = u.validator.normalizeRule(n.settings.rules[t.name]) || {}), e
		},
		normalizeRules: function(i, o) {
			return u.each(i, function(t, e) {
				if(!1 !== e) {
					if(e.param || e.depends) {
						var n = !0;
						switch(typeof e.depends) {
							case "string":
								n = !!u(e.depends, o.form).length;
								break;
							case "function":
								n = e.depends.call(o, o)
						}
						n ? i[t] = void 0 === e.param || e.param : (u.data(o.form, "validator").resetElements(u(o)), delete i[t])
					}
				} else delete i[t]
			}), u.each(i, function(t, e) {
				i[t] = u.isFunction(e) && "normalizer" !== t ? e(o) : e
			}), u.each(["minlength", "maxlength"], function() {
				i[this] && (i[this] = Number(i[this]))
			}), u.each(["rangelength", "range"], function() {
				var t;
				i[this] && (u.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (t = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(t[0]), Number(t[1])]))
			}), u.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
		},
		normalizeRule: function(t) {
			var e;
			return "string" == typeof t && (e = {}, u.each(t.split(/\s/), function() {
				e[this] = !0
			}), t = e), t
		},
		addMethod: function(t, e, n) {
			u.validator.methods[t] = e, u.validator.messages[t] = void 0 !== n ? n : u.validator.messages[t], e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t))
		},
		methods: {
			required: function(t, e, n) {
				if(!this.depend(n, e)) return "dependency-mismatch";
				if("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < t.length;
				e = u(e).val();
				return e && 0 < e.length
			},
			email: function(t, e) {
				return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
			},
			url: function(t, e) {
				return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
			},
			date: function(t, e) {
				return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
			},
			dateISO: function(t, e) {
				return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
			},
			number: function(t, e) {
				return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			},
			digits: function(t, e) {
				return this.optional(e) || /^\d+$/.test(t)
			},
			minlength: function(t, e, n) {
				t = u.isArray(t) ? t.length : this.getLength(t, e);
				return this.optional(e) || n <= t
			},
			maxlength: function(t, e, n) {
				t = u.isArray(t) ? t.length : this.getLength(t, e);
				return this.optional(e) || t <= n
			},
			rangelength: function(t, e, n) {
				t = u.isArray(t) ? t.length : this.getLength(t, e);
				return this.optional(e) || t >= n[0] && t <= n[1]
			},
			min: function(t, e, n) {
				return this.optional(e) || n <= t
			},
			max: function(t, e, n) {
				return this.optional(e) || t <= n
			},
			range: function(t, e, n) {
				return this.optional(e) || t >= n[0] && t <= n[1]
			},
			step: function(t, e, n) {
				function i(t) {
					return(t = ("" + t).match(/(?:\.(\d+))?$/)) && t[1] ? t[1].length : 0
				}

				function o(t) {
					return Math.round(t * Math.pow(10, s))
				}
				var s, r = u(e).attr("type"),
					a = "Step attribute on input type " + r + " is not supported.",
					l = new RegExp("\\b" + r + "\\b"),
					c = !0;
				if(r && !l.test(["text", "number", "range"].join())) throw new Error(a);
				return s = i(n), (i(t) > s || o(t) % o(n) != 0) && (c = !1), this.optional(e) || c
			},
			equalTo: function(t, e, n) {
				n = u(n);
				return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
					u(e).valid()
				}), t === n.val()
			},
			remote: function(i, o, t, s) {
				if(this.optional(o)) return "dependency-mismatch";
				s = "string" == typeof s && s || "remote";
				var r, e, a = this.previousValue(o, s);
				return this.settings.messages[o.name] || (this.settings.messages[o.name] = {}), a.originalMessage = a.originalMessage || this.settings.messages[o.name][s], this.settings.messages[o.name][s] = a.message, t = "string" == typeof t ? {
					url: t
				} : t, e = u.param(u.extend({
					data: i
				}, t.data)), a.old === e ? a.valid : (a.old = e, (r = this).startRequest(o), (e = {})[o.name] = i, u.ajax(u.extend(!0, {
					mode: "abort",
					port: "validate" + o.name,
					dataType: "json",
					data: e,
					context: r.currentForm,
					success: function(t) {
						var e, n = !0 === t || "true" === t;
						r.settings.messages[o.name][s] = a.originalMessage, n ? (e = r.formSubmitted, r.resetInternals(), r.toHide = r.errorsFor(o), r.formSubmitted = e, r.successList.push(o), r.invalid[o.name] = !1, r.showErrors()) : (e = {}, t = t || r.defaultMessage(o, {
							method: s,
							parameters: i
						}), e[o.name] = a.message = t, r.invalid[o.name] = !0, r.showErrors(e)), a.valid = n, r.stopRequest(o, n)
					}
				}, t)), "pending")
			}
		}
	});
	var i, o = {};
	return u.ajaxPrefilter ? u.ajaxPrefilter(function(t, e, n) {
		var i = t.port;
		"abort" === t.mode && (o[i] && o[i].abort(), o[i] = n)
	}) : (i = u.ajax, u.ajax = function(t) {
		var e = ("mode" in t ? t : u.ajaxSettings).mode,
			n = ("port" in t ? t : u.ajaxSettings).port;
		return "abort" === e ? (o[n] && o[n].abort(), o[n] = i.apply(this, arguments), o[n]) : i.apply(this, arguments)
	}), u
}),
function() {
	"use strict";
	window.ysExit = function(t) {
		var e, n, i = {
				width: "40%",
				height: "",
				target: "#ys-container",
				cookieValidity: 1,
				closeOnOutsideClick: !0,
				delay: 0,
				debug: !1
			},
			o = (e = t, n = {}, Object.keys(i).forEach(function(t) {
				n[t] = (e.hasOwnProperty(t) ? e : i)[t]
			}), n),
			s = document.querySelector(o.target),
			r = document.querySelector(".ys-layer"),
			a = document.querySelector(o.target + " .ys-popup-close"),
			l = document.querySelector(o.target + " .ys-box"),
			c = document.querySelector(o.target + " .ys-exit"),
			u = {
				active: !1,
				mouseLeftWindow: function(t) {
					(t = (t = t || window.event).relatedTarget || t.toElement) && "HTML" !== t.nodeName || u.open()
				},
				setDimension: function(t, e) {
					-1 === e.toString().indexOf("%") && (e += "px"), l.style[t] = e
				},
				attachEvents: function() {
					function t(t) {
						u.destroy(), t.preventDefault()
					}
					document.addEventListener("mouseout", u.mouseLeftWindow, !1), a.addEventListener("click", t), c.addEventListener("click", t), o.closeOnOutsideClick && (s.addEventListener("click", t), l.addEventListener("click", function(t) {
						t.stopPropagation()
					})), this.active = !0
				},
				detachEvents: function() {
					document.removeEventListener("mouseout", u.mouseLeftWindow)
				},
				open: function() {
					var t = this;
					s.classList.add("visible"), r.classList.add("visible"), t.detachEvents(), setTimeout(function() {
						t.setDimension("width", o.width), t.setDimension("height", o.height)
					}, 20), setTimeout(function() {
						s.classList.add("finished")
					}, 200)
				},
				destroy: function() {
					var t, e, n;
					this.active && (u.detachEvents(), setTimeout(function() {
						s.parentNode.removeChild(s), r.classList.remove("visible")
					}, 200), o.debug || (t = "ysExit", e = 1, n = o.cookieValidity, t = [t + "=" + e], n && ((e = new Date).setTime(e.getTime() + 24 * n * 3600 * 1e3), t.push("expires=" + e.toGMTString())), t.push("path=/"), document.cookie = t.join("; ")))
				}
			};

		function d(t, e) {
			return function() {
				e.apply(t, arguments)
			}
		}
		if(! function() {
				for(var t = o.cookieIdentifier + "=", e = document.cookie.split(";"), n = 0; n < e.length; n++) {
					var i = e[n].trim();
					if(0 === i.indexOf(t)) return i.substring(t.length)
				}
			}()) {
			if("number" != typeof o.delay) throw new Error("options.delay must be a numeric value");
			if(!s) throw new Error("Could not find element with selector: " + o.target);
			if(s.parentNode !== document.body) throw new Error(o.target + " element must be placed directly inside of the <body> element");
			setTimeout(d(u, u.attachEvents), o.delay)
		}
		return {
			open: d(u, u.open),
			destroy: d(u, u.destroy),
			getElement: function() {
				return s
			}
		}
	}
}();




$(document).ready(function () {
    /* Telephone Input Start */
    
    let flagInput = document.querySelectorAll('[name="phone"]');
    
    if (flagInput.length !== 0) {
    
      let ip;
      let ip_value;
    
      $('[name="phone"]').intlTelInput({
    
        geoIpLookup: function (callback) {
          $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
            ip = resp.ip;
          });
        },
    
        initialCountry: "auto",
        nationalMode: true,
        separateDialCode: true,
    
      }).then(() => {
    
         let pc = $('.selected-dial-code').html();
         let ctry = $('.selected-flag').attr('title').split(':')[0];
    
        $('input[name="code"]').val(pc);
        $('input[name="cip"]').val(ip);
        $('input[name="ctry"]').val(ctry);
    
      });
    
    
    
      $(document).on('click', '.country', function () {
        
        
          let countryDetail = $(this).parent().parent().find('.selected-flag').attr('title');
          countryDetail =  countryDetail.split(':');


          $('input[name="code"]').val(countryDetail[0]);
          $('input[name="ctry"]').val(countryDetail[1]);
    
    
      });
    
    }
});
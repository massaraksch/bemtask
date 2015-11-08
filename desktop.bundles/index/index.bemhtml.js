(function(global) {
var buildBemXjst = function(exports, __bem_xjst_libs__){

var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null, $$once = false, $$wrap = false;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$wrap = undefined;
    $$once = undefined;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "content") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            } else if (__$t === "js") {
                var __$r = __$b11(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "page") {
            if (!$$elem && !__$ctx._pageInit && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b50(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 16) === 0) {
                        var __$r = __$b51(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    if ((__$ctx.__$a0 & 32) === 0) {
                        var __$r = __$b52(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
        }
        var __$r = __$b53(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        return undefined;
    } else if (__$t === "mix") {
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b61(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
    throw new Error("Match failed, no templates found");
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    }, resetApplyNext = context.resetApplyNext || function() {};
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
        this._resetApplyNext = resetApplyNext;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = function xmlEscape(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    BEMContext.prototype.attrEscape = function attrEscape(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    };
    BEMContext.prototype.jsAttrEscape = function jsAttrEscape(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/'/g, "&#39;");
    };
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
}, function(exports, context) {
    var BEMContext = exports.BEMContext || context.BEMContext;
    if (!BEMContext) {
        throw Error("Seems like you have no base templates from i-bem.bemhtml");
    }
    BEMContext.prototype.require = function(lib) {
        return __bem_xjst_libs__[lib];
    };
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_pageInit"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b3(__$ctx, __$ref) {
    var ctx__$17 = __$ctx.ctx;
    return [ {
        elem: "title",
        content: ctx__$17.title
    }, ctx__$17.skills.map(function(item) {
        return {
            elem: "item",
            content: [ {
                elem: "desc",
                content: item.desc
            } ]
        };
    }) ];
}

function __$b4(__$ctx, __$ref) {
    var ctx__$18 = __$ctx.ctx;
    return [ {
        elem: "title",
        content: ctx__$18.title
    }, ctx__$18.job.map(function(item) {
        return {
            elem: "item",
            content: [ {
                elem: "year",
                content: item.year
            }, "<br>", {
                elem: "company",
                content: item.company
            }, "<br>", {
                elem: "position",
                content: item.position
            }, "<br>", {
                elem: "description",
                content: item.description
            } ]
        };
    }) ];
}

function __$b5(__$ctx, __$ref) {
    var ctx__$19 = __$ctx.ctx;
    return [ {
        elem: "title",
        content: ctx__$19.title
    }, ctx__$19.education.map(function(item) {
        return {
            elem: "item",
            content: [ {
                elem: "year",
                content: item.year
            }, " — ", {
                elem: "university",
                content: item.university
            }, "<br>", {
                elem: "department",
                content: item.department
            } ]
        };
    }) ];
}

function __$b6(__$ctx, __$ref) {
    var ctx__$20 = __$ctx.ctx;
    return [ {
        elem: "title",
        content: ctx__$20.title
    }, ctx__$20.about.map(function(item) {
        return {
            elem: "item",
            content: [ {
                elem: "email",
                content: item.email
            }, ", ", {
                elem: "skype",
                content: item.skype
            } ]
        };
    }) ];
}

function __$b11(__$ctx, __$ref) {
    var attrs__$24 = {};
    if (__$ctx.ctx.url) {
        attrs__$24.src = __$ctx.ctx.url;
    } else if (__$ctx._nonceCsp) {
        attrs__$24.nonce = __$ctx._nonceCsp;
    }
    return attrs__$24;
}

function __$b50(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    __$ctx._nonceCsp = ctx__$6.nonce;
    var __$r__$8;
    var __$l0__$9 = __$ctx._pageInit;
    __$ctx._pageInit = true;
    var __$r__$11;
    var __$l1__$12 = $$mode;
    $$mode = "";
    var __$l2__$13 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$6.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, ctx__$6.uaCompatible === false ? "" : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: ctx__$6.uaCompatible || "IE=edge"
                }
            }, {
                tag: "title",
                content: ctx__$6.title
            }, {
                block: "ua",
                attrs: {
                    nonce: ctx__$6.nonce
                }
            }, ctx__$6.head, ctx__$6.styles, ctx__$6.favicon ? {
                elem: "favicon",
                url: ctx__$6.favicon
            } : "" ]
        }, ctx__$6 ]
    } ];
    var __$r__$15;
    var __$l3__$16 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$15 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$16;
    __$r__$11 = __$r__$15;
    $$mode = __$l1__$12;
    __$ctx.ctx = __$l2__$13;
    __$r__$8 = __$r__$11;
    __$ctx._pageInit = __$l0__$9;
    return __$r__$8;
}

function __$b51(__$ctx, __$ref) {
    var url__$25 = __$ctx.ctx.url;
    var __$r__$27;
    var __$l0__$28 = $$mode;
    $$mode = "";
    var __$l1__$29 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$25 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$31;
    var __$l2__$32 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$31 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$32;
    __$r__$27 = __$r__$31;
    $$mode = __$l0__$28;
    __$ctx.ctx = __$l1__$29;
    return __$r__$27;
}

function __$b52(__$ctx, __$ref) {
    var ie__$33 = __$ctx.ctx.ie, hideRule__$34 = !ie__$33 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$33 === "!IE" ? [ ie__$33, "<!-->", "<!--" ] : [ ie__$33, "", "" ];
    var __$r__$36;
    var __$l0__$37 = $$mode;
    $$mode = "";
    var __$l1__$38 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$34[0] + "]>" + hideRule__$34[1], __$ctx.ctx, hideRule__$34[2] + "<![endif]-->" ];
    var __$r__$40;
    var __$l2__$41 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$40 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$41;
    __$r__$36 = __$r__$40;
    $$mode = __$l0__$37;
    __$ctx.ctx = __$l1__$38;
    return __$r__$36;
}

function __$b53(__$ctx, __$ref) {
    var BEM_INTERNAL__$42 = __$ctx.BEM.INTERNAL, ctx__$43 = __$ctx.ctx, isBEM__$44, tag__$45, res__$46;
    var __$r__$48;
    var __$l0__$49 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$50 = $$block;
    var __$r__$52;
    var __$l1__$53 = $$mode;
    $$mode = "tag";
    __$r__$52 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$53;
    tag__$45 = __$r__$52;
    typeof tag__$45 !== "undefined" || (tag__$45 = ctx__$43.tag);
    typeof tag__$45 !== "undefined" || (tag__$45 = "div");
    if (tag__$45) {
        var jsParams__$54, js__$55;
        if (vBlock__$50 && ctx__$43.js !== false) {
            var __$r__$56;
            var __$l2__$57 = $$mode;
            $$mode = "js";
            __$r__$56 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$57;
            js__$55 = __$r__$56;
            js__$55 = js__$55 ? __$ctx.extend(ctx__$43.js, js__$55 === true ? {} : js__$55) : ctx__$43.js === true ? {} : ctx__$43.js;
            js__$55 && ((jsParams__$54 = {})[BEM_INTERNAL__$42.buildClass(vBlock__$50, ctx__$43.elem)] = js__$55);
        }
        __$ctx._str += "<" + tag__$45;
        var __$r__$58;
        var __$l3__$59 = $$mode;
        $$mode = "bem";
        __$r__$58 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$59;
        isBEM__$44 = __$r__$58;
        typeof isBEM__$44 !== "undefined" || (isBEM__$44 = typeof ctx__$43.bem !== "undefined" ? ctx__$43.bem : ctx__$43.block || ctx__$43.elem);
        var __$r__$61;
        var __$l4__$62 = $$mode;
        $$mode = "cls";
        __$r__$61 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$62;
        var cls__$60 = __$r__$61;
        cls__$60 || (cls__$60 = ctx__$43.cls);
        var addJSInitClass__$63 = ctx__$43.block && jsParams__$54 && !ctx__$43.elem;
        if (isBEM__$44 || cls__$60) {
            __$ctx._str += ' class="';
            if (isBEM__$44) {
                __$ctx._str += BEM_INTERNAL__$42.buildClasses(vBlock__$50, ctx__$43.elem, ctx__$43.elemMods || ctx__$43.mods);
                var __$r__$65;
                var __$l5__$66 = $$mode;
                $$mode = "mix";
                __$r__$65 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$66;
                var mix__$64 = __$r__$65;
                ctx__$43.mix && (mix__$64 = mix__$64 ? [].concat(mix__$64, ctx__$43.mix) : ctx__$43.mix);
                if (mix__$64) {
                    var visited__$67 = {}, visitedKey__$68 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$67[visitedKey__$68(vBlock__$50, $$elem)] = true;
                    __$ctx.isArray(mix__$64) || (mix__$64 = [ mix__$64 ]);
                    for (var i__$69 = 0; i__$69 < mix__$64.length; i__$69++) {
                        var mixItem__$70 = mix__$64[i__$69];
                        typeof mixItem__$70 === "string" && (mixItem__$70 = {
                            block: mixItem__$70
                        });
                        var hasItem__$71 = mixItem__$70.block && (vBlock__$50 !== ctx__$43.block || mixItem__$70.block !== vBlock__$50) || mixItem__$70.elem, mixBlock__$72 = mixItem__$70.block || mixItem__$70._block || $$block, mixElem__$73 = mixItem__$70.elem || mixItem__$70._elem || $$elem;
                        hasItem__$71 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$42[hasItem__$71 ? "buildClasses" : "buildModsClasses"](mixBlock__$72, mixItem__$70.elem || mixItem__$70._elem || (mixItem__$70.block ? undefined : $$elem), mixItem__$70.elemMods || mixItem__$70.mods);
                        if (mixItem__$70.js) {
                            (jsParams__$54 || (jsParams__$54 = {}))[BEM_INTERNAL__$42.buildClass(mixBlock__$72, mixItem__$70.elem)] = mixItem__$70.js === true ? {} : mixItem__$70.js;
                            addJSInitClass__$63 || (addJSInitClass__$63 = mixBlock__$72 && !mixItem__$70.elem);
                        }
                        if (hasItem__$71 && !visited__$67[visitedKey__$68(mixBlock__$72, mixElem__$73)]) {
                            visited__$67[visitedKey__$68(mixBlock__$72, mixElem__$73)] = true;
                            var __$r__$75;
                            var __$l6__$76 = $$mode;
                            $$mode = "mix";
                            var __$l7__$77 = $$block;
                            $$block = mixBlock__$72;
                            var __$l8__$78 = $$elem;
                            $$elem = mixElem__$73;
                            __$r__$75 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$76;
                            $$block = __$l7__$77;
                            $$elem = __$l8__$78;
                            var nestedMix__$74 = __$r__$75;
                            if (nestedMix__$74) {
                                Array.isArray(nestedMix__$74) || (nestedMix__$74 = [ nestedMix__$74 ]);
                                for (var j__$79 = 0; j__$79 < nestedMix__$74.length; j__$79++) {
                                    var nestedItem__$80 = nestedMix__$74[j__$79];
                                    if (!nestedItem__$80.block && !nestedItem__$80.elem || !visited__$67[visitedKey__$68(nestedItem__$80.block, nestedItem__$80.elem)]) {
                                        nestedItem__$80._block = mixBlock__$72;
                                        nestedItem__$80._elem = mixElem__$73;
                                        mix__$64.splice(i__$69 + 1, 0, nestedItem__$80);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$60 && (__$ctx._str += isBEM__$44 ? " " + cls__$60 : cls__$60);
            __$ctx._str += addJSInitClass__$63 ? ' i-bem"' : '"';
        }
        if (isBEM__$44 && jsParams__$54) {
            __$ctx._str += " data-bem='" + __$ctx.jsAttrEscape(JSON.stringify(jsParams__$54)) + "'";
        }
        var __$r__$82;
        var __$l9__$83 = $$mode;
        $$mode = "attrs";
        __$r__$82 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$83;
        var attrs__$81 = __$r__$82;
        attrs__$81 = __$ctx.extend(attrs__$81, ctx__$43.attrs);
        if (attrs__$81) {
            var name__$84, attr__$85;
            for (name__$84 in attrs__$81) {
                attr__$85 = attrs__$81[name__$84];
                if (typeof attr__$85 === "undefined") continue;
                __$ctx._str += " " + name__$84 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$85) ? attr__$85 : __$ctx.reapply(attr__$85)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$45)) {
        __$ctx._str += "/>";
    } else {
        tag__$45 && (__$ctx._str += ">");
        var __$r__$87;
        var __$l10__$88 = $$mode;
        $$mode = "content";
        __$r__$87 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$88;
        var content__$86 = __$r__$87;
        if (content__$86 || content__$86 === 0) {
            __$ctx._resetApplyNext(__$wrapThis(__$ctx));
            isBEM__$44 = vBlock__$50 || $$elem;
            var __$r__$89;
            var __$l11__$90 = $$mode;
            $$mode = "";
            var __$l12__$91 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$92 = __$ctx.position;
            __$ctx.position = isBEM__$44 ? 1 : __$ctx.position;
            var __$l14__$93 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$44 ? 1 : __$ctx._listLength;
            var __$l15__$94 = __$ctx.ctx;
            __$ctx.ctx = content__$86;
            __$r__$89 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$90;
            __$ctx._notNewList = __$l12__$91;
            __$ctx.position = __$l13__$92;
            __$ctx._listLength = __$l14__$93;
            __$ctx.ctx = __$l15__$94;
        }
        tag__$45 && (__$ctx._str += "</" + tag__$45 + ">");
    }
    res__$46 = __$ctx._str;
    __$r__$48 = undefined;
    __$ctx._str = __$l0__$49;
    __$ctx._buf.push(res__$46);
    return;
}

function __$b57(__$ctx, __$ref) {
    var __$r__$96;
    var __$l0__$97 = $$mode;
    $$mode = "";
    var __$l1__$98 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$100;
    var __$l2__$101 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$100 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$101;
    __$r__$96 = __$r__$100;
    $$mode = __$l0__$97;
    __$ctx.ctx = __$l1__$98;
    return;
}

function __$b58(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$102 = __$ctx.ctx;
    if (ctx__$102 && ctx__$102 !== true || ctx__$102 === 0) {
        __$ctx._str += ctx__$102 + "";
    }
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b60(__$ctx, __$ref) {
    var ctx__$103 = __$ctx.ctx, len__$104 = ctx__$103.length, i__$105 = 0, prevPos__$106 = __$ctx.position, prevNotNewList__$107 = __$ctx._notNewList;
    if (prevNotNewList__$107) {
        __$ctx._listLength += len__$104 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$104;
    }
    __$ctx._notNewList = true;
    while (i__$105 < len__$104) (function __$lb__$108() {
        var __$r__$109;
        var __$l0__$110 = __$ctx.ctx;
        __$ctx.ctx = ctx__$103[i__$105++];
        __$r__$109 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$110;
        return __$r__$109;
    })();
    prevNotNewList__$107 || (__$ctx.position = prevPos__$106);
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$111 = __$ctx.ctx.block, vElem__$112 = __$ctx.ctx.elem, block__$113 = __$ctx._currBlock || $$block;
    var __$r__$115;
    var __$l0__$116 = $$mode;
    $$mode = "default";
    var __$l1__$117 = $$block;
    $$block = vBlock__$111 || (vElem__$112 ? block__$113 : undefined);
    var __$l2__$118 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$111 || vElem__$112 ? undefined : block__$113;
    var __$l3__$119 = $$elem;
    $$elem = vElem__$112;
    var __$l4__$120 = $$mods;
    $$mods = vBlock__$111 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$121 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$115 = undefined;
    $$mode = __$l0__$116;
    $$block = __$l1__$117;
    __$ctx._currBlock = __$l2__$118;
    $$elem = __$l3__$119;
    $$mods = __$l4__$120;
    $$elemMods = __$l5__$121;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "page") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 1) === 0) {
                return {
                    elem: "inner",
                    content: function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
                    }()
                };
            }
            if ((__$ctx.__$a0 & 2) === 0) {
                return [ function __$lb__$3() {
                    var __$r__$4;
                    var __$l0__$5 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2;
                    __$r__$4 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$5;
                    return __$r__$4;
                }(), __$ctx.ctx.scripts ];
            }
        }
    } else if (__$t === "skills") {
        if (!$$elem) {
            var __$r = __$b3(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "job") {
        if (!$$elem) {
            var __$r = __$b4(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "education") {
        if (!$$elem) {
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "about") {
        if (!$$elem) {
            var __$r = __$b6(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 8) === 0) {
                return [ function __$lb__$21() {
                    var __$r__$22;
                    var __$l0__$23 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$22 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$23;
                    return __$r__$22;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "favicon") {
            return "link";
        } else if (__$t === "link") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        } else if (__$t === "head") {
            return "head";
        }
        if (!$$elem) {
            return "body";
        }
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        }
    } else if (__$t === "skills") {
        var __$t = $$elem;
        if (__$t === "title") {
            return "h3";
        } else if (__$t === "desc") {
            return "";
        } else if (__$t === "item") {
            return "p";
        }
    } else if (__$t === "job") {
        var __$t = $$elem;
        if (__$t === "title") {
            return "h3";
        } else if (__$t === "item") {
            return "p";
        } else if (__$t === "description") {
            return "span";
        } else if (__$t === "position") {
            return "";
        } else if (__$t === "company") {
            return "";
        } else if (__$t === "year") {
            return "strong";
        }
    } else if (__$t === "education") {
        var __$t = $$elem;
        if (__$t === "title") {
            return "h3";
        } else if (__$t === "item") {
            return "p";
        } else if (__$t === "year") {
            return "span";
        } else if (__$t === "department") {
            return "span";
        } else if (__$t === "university") {
            return "span";
        }
    } else if (__$t === "about") {
        var __$t = $$elem;
        if (__$t === "title") {
            return "h3";
        } else if (__$t === "item") {
            return "p";
        } else if (__$t === "skype") {
            return "";
        } else if (__$t === "email") {
            return "";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    }
    return undefined;
    return __$ref;
}

function __$wrapThis(ctx) {
    ctx._mode = $$mode;
    ctx.block = $$block;
    ctx.elem = $$elem;
    ctx.elemMods = $$elemMods;
    ctx.mods = $$mods;
    return ctx;
}


    return exports;
};

var defineAsGlobal = true;
if(typeof module === "object" && typeof module.exports === "object") {
    exports["BEMHTML"] = buildBemXjst({}, {});
    defineAsGlobal = false;
}
if(typeof modules === "object") {
    modules.define("BEMHTML", [], function(provide) {
        provide(buildBemXjst({}, {}));
    });
    defineAsGlobal = false;
}
if(defineAsGlobal) {
    global["BEMHTML"] = buildBemXjst({}, {});
}
})(this);
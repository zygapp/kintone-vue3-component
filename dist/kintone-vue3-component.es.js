import { openBlock as X, createBlock as an, resolveDynamicComponent as vu, withModifiers as gu, withCtx as bu, renderSlot as zt, createElementBlock as J, defineComponent as wu, h as ca, computed as Ue, normalizeClass as Ze, createElementVNode as le, createCommentVNode as We, Fragment as dt, renderList as vt, normalizeStyle as Yn, toDisplayString as Qe, mergeProps as Su, createVNode as ct, unref as Pe, getCurrentScope as xu, onScopeDispose as _u, onMounted as Do, nextTick as il, getCurrentInstance as Eu, watch as ol, ref as De, shallowRef as Ou, toValue as Nt, createTextVNode as Au, withDirectives as sn, vShow as To, useSlots as Ru, vModelRadio as Pu, vModelCheckbox as Cu, vModelDynamic as ku, reactive as Du, vModelText as Tu, isRef as Iu } from "vue";
const $u = {
  __name: "wrap",
  props: {
    isForm: { type: Boolean, default: !1 }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, i) => (X(), an(vu(e.isForm ? "form" : "div"), {
      id: "kvc-wrap",
      class: "kvc-wrap",
      onSubmit: i[0] || (i[0] = gu((o) => r("submit", o), ["prevent"]))
    }, {
      default: bu(() => [
        zt(n.$slots, "default")
      ]),
      _: 3
    }, 32));
  }
}, Nu = { class: "kvc-row" }, Mu = {
  __name: "row",
  props: {},
  setup(e) {
    return (t, r) => (X(), J("div", Nu, [
      zt(t.$slots, "default")
    ]));
  }
}, al = /^[a-z0-9]+(-[a-z0-9]+)*$/, Yr = (e, t, r, n = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    n = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const c = i.pop(), u = i.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : n,
      prefix: u,
      name: c
    };
    return t && !Rr(l) ? null : l;
  }
  const o = i[0], s = o.split("-");
  if (s.length > 1) {
    const c = {
      provider: n,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !Rr(c) ? null : c;
  }
  if (r && n === "") {
    const c = {
      provider: n,
      prefix: "",
      name: o
    };
    return t && !Rr(c, r) ? null : c;
  }
  return null;
}, Rr = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, sl = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ur = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Xr = Object.freeze({
  ...sl,
  ...Ur
}), _o = Object.freeze({
  ...Xr,
  body: "",
  hidden: !1
});
function ju(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (r.rotate = n), r;
}
function fa(e, t) {
  const r = ju(e, t);
  for (const n in _o)
    n in Ur ? n in e && !(n in r) && (r[n] = Ur[n]) : n in t ? r[n] = t[n] : n in e && (r[n] = e[n]);
  return r;
}
function qu(e, t) {
  const r = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function o(s) {
    if (r[s])
      return i[s] = [];
    if (!(s in i)) {
      i[s] = null;
      const c = n[s] && n[s].parent, u = c && o(c);
      u && (i[s] = [c].concat(u));
    }
    return i[s];
  }
  return Object.keys(r).concat(Object.keys(n)).forEach(o), i;
}
function Fu(e, t, r) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function s(c) {
    o = fa(
      n[c] || i[c],
      o
    );
  }
  return s(t), r.forEach(s), fa(e, o);
}
function ll(e, t) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((i) => {
    t(i, null), r.push(i);
  });
  const n = qu(e);
  for (const i in n) {
    const o = n[i];
    o && (t(i, Fu(e, i, o)), r.push(i));
  }
  return r;
}
const Bu = {
  provider: "",
  aliases: {},
  not_found: {},
  ...sl
};
function fi(e, t) {
  for (const r in t)
    if (r in e && typeof e[r] != typeof t[r])
      return !1;
  return !0;
}
function ul(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !fi(e, Bu))
    return null;
  const r = t.icons;
  for (const i in r) {
    const o = r[i];
    if (
      // Name cannot be empty
      !i || // Must have body
      typeof o.body != "string" || // Check other props
      !fi(
        o,
        _o
      )
    )
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in n) {
    const o = n[i], s = o.parent;
    if (
      // Name cannot be empty
      !i || // Parent must be set and point to existing icon
      typeof s != "string" || !r[s] && !n[s] || // Check other props
      !fi(
        o,
        _o
      )
    )
      return null;
  }
  return t;
}
const da = /* @__PURE__ */ Object.create(null);
function Lu(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Dn(e, t) {
  const r = da[e] || (da[e] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = Lu(e, t));
}
function cl(e, t) {
  return ul(t) ? ll(t, (r, n) => {
    n ? e.icons[r] = n : e.missing.add(r);
  }) : [];
}
function Uu(e, t, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[t] = { ...r }, !0;
  } catch {
  }
  return !1;
}
let tr = !1;
function fl(e) {
  return typeof e == "boolean" && (tr = e), tr;
}
function Wu(e) {
  const t = typeof e == "string" ? Yr(e, !0, tr) : e;
  if (t) {
    const r = Dn(t.provider, t.prefix), n = t.name;
    return r.icons[n] || (r.missing.has(n) ? null : void 0);
  }
}
function Vu(e, t) {
  const r = Yr(e, !0, tr);
  if (!r)
    return !1;
  const n = Dn(r.provider, r.prefix);
  return t ? Uu(n, r.name, t) : (n.missing.add(r.name), !0);
}
function Hu(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), tr && !t && !e.prefix) {
    let i = !1;
    return ul(e) && (e.prefix = "", ll(e, (o, s) => {
      Vu(o, s) && (i = !0);
    })), i;
  }
  const r = e.prefix;
  if (!Rr({
    provider: t,
    prefix: r,
    name: "a"
  }))
    return !1;
  const n = Dn(t, r);
  return !!cl(n, e);
}
const dl = Object.freeze({
  width: null,
  height: null
}), pl = Object.freeze({
  // Dimensions
  ...dl,
  // Transformations
  ...Ur
}), Gu = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ku = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function pa(e, t, r) {
  if (t === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * t * r) / r;
  if (typeof e != "string")
    return e;
  const n = e.split(Gu);
  if (n === null || !n.length)
    return e;
  const i = [];
  let o = n.shift(), s = Ku.test(o);
  for (; ; ) {
    if (s) {
      const c = parseFloat(o);
      isNaN(c) ? i.push(o) : i.push(Math.ceil(c * t * r) / r);
    } else
      i.push(o);
    if (o = n.shift(), o === void 0)
      return i.join("");
    s = !s;
  }
}
function zu(e, t = "defs") {
  let r = "";
  const n = e.indexOf("<" + t);
  for (; n >= 0; ) {
    const i = e.indexOf(">", n), o = e.indexOf("</" + t);
    if (i === -1 || o === -1)
      break;
    const s = e.indexOf(">", o);
    if (s === -1)
      break;
    r += e.slice(i + 1, o).trim(), e = e.slice(0, n).trim() + e.slice(s + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function Yu(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Xu(e, t, r) {
  const n = zu(e);
  return Yu(n.defs, t + n.content + r);
}
const Ju = (e) => e === "unset" || e === "undefined" || e === "none";
function Qu(e, t) {
  const r = {
    ...Xr,
    ...e
  }, n = {
    ...pl,
    ...t
  }, i = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, n].forEach((d) => {
    const a = [], w = d.hFlip, y = d.vFlip;
    let S = d.rotate;
    w ? y ? S += 2 : (a.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), a.push("scale(-1 1)"), i.top = i.left = 0) : y && (a.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), a.push("scale(1 -1)"), i.top = i.left = 0);
    let E;
    switch (S < 0 && (S -= Math.floor(S / 4) * 4), S = S % 4, S) {
      case 1:
        E = i.height / 2 + i.top, a.unshift(
          "rotate(90 " + E.toString() + " " + E.toString() + ")"
        );
        break;
      case 2:
        a.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        E = i.width / 2 + i.left, a.unshift(
          "rotate(-90 " + E.toString() + " " + E.toString() + ")"
        );
        break;
    }
    S % 2 === 1 && (i.left !== i.top && (E = i.left, i.left = i.top, i.top = E), i.width !== i.height && (E = i.width, i.width = i.height, i.height = E)), a.length && (o = Xu(
      o,
      '<g transform="' + a.join(" ") + '">',
      "</g>"
    ));
  });
  const s = n.width, c = n.height, u = i.width, l = i.height;
  let f, h;
  s === null ? (h = c === null ? "1em" : c === "auto" ? l : c, f = pa(h, u / l)) : (f = s === "auto" ? u : s, h = c === null ? pa(f, l / u) : c === "auto" ? l : c);
  const m = {}, b = (d, a) => {
    Ju(a) || (m[d] = a.toString());
  };
  b("width", f), b("height", h);
  const g = [i.left, i.top, u, l];
  return m.viewBox = g.join(" "), {
    attributes: m,
    viewBox: g,
    body: o
  };
}
const Zu = /\sid="(\S+)"/g, ec = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let tc = 0;
function nc(e, t = ec) {
  const r = [];
  let n;
  for (; n = Zu.exec(e); )
    r.push(n[1]);
  if (!r.length)
    return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((o) => {
    const s = typeof t == "function" ? t(o) : t + (tc++).toString(), c = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + s + i + "$3"
    );
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
const Eo = /* @__PURE__ */ Object.create(null);
function rc(e, t) {
  Eo[e] = t;
}
function Oo(e) {
  return Eo[e] || Eo[""];
}
function Io(e) {
  let t;
  if (typeof e.resources == "string")
    t = [e.resources];
  else if (t = e.resources, !(t instanceof Array) || !t.length)
    return null;
  return {
    // API hosts
    resources: t,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const $o = /* @__PURE__ */ Object.create(null), Un = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Pr = [];
for (; Un.length > 0; )
  Un.length === 1 || Math.random() > 0.5 ? Pr.push(Un.shift()) : Pr.push(Un.pop());
$o[""] = Io({
  resources: ["https://api.iconify.design"].concat(Pr)
});
function ic(e, t) {
  const r = Io(t);
  return r === null ? !1 : ($o[e] = r, !0);
}
function No(e) {
  return $o[e];
}
const oc = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let ha = oc();
function ac(e, t) {
  const r = No(e);
  if (!r)
    return 0;
  let n;
  if (!r.maxURL)
    n = 0;
  else {
    let i = 0;
    r.resources.forEach((s) => {
      i = Math.max(i, s.length);
    });
    const o = t + ".json?icons=";
    n = r.maxURL - i - r.path.length - o.length;
  }
  return n;
}
function sc(e) {
  return e === 404;
}
const lc = (e, t, r) => {
  const n = [], i = ac(e, t), o = "icons";
  let s = {
    type: o,
    provider: e,
    prefix: t,
    icons: []
  }, c = 0;
  return r.forEach((u, l) => {
    c += u.length + 1, c >= i && l > 0 && (n.push(s), s = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, c = u.length), s.icons.push(u);
  }), n.push(s), n;
};
function uc(e) {
  if (typeof e == "string") {
    const t = No(e);
    if (t)
      return t.path;
  }
  return "/";
}
const cc = (e, t, r) => {
  if (!ha) {
    r("abort", 424);
    return;
  }
  let n = uc(t.provider);
  switch (t.type) {
    case "icons": {
      const o = t.prefix, c = t.icons.join(","), u = new URLSearchParams({
        icons: c
      });
      n += o + ".json?" + u.toString();
      break;
    }
    case "custom": {
      const o = t.uri;
      n += o.slice(0, 1) === "/" ? o.slice(1) : o;
      break;
    }
    default:
      r("abort", 400);
      return;
  }
  let i = 503;
  ha(e + n).then((o) => {
    const s = o.status;
    if (s !== 200) {
      setTimeout(() => {
        r(sc(s) ? "abort" : "next", s);
      });
      return;
    }
    return i = 501, o.json();
  }).then((o) => {
    if (typeof o != "object" || o === null) {
      setTimeout(() => {
        o === 404 ? r("abort", o) : r("next", i);
      });
      return;
    }
    setTimeout(() => {
      r("success", o);
    });
  }).catch(() => {
    r("next", i);
  });
}, fc = {
  prepare: lc,
  send: cc
};
function dc(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, r = /* @__PURE__ */ Object.create(null);
  e.sort((i, o) => i.provider !== o.provider ? i.provider.localeCompare(o.provider) : i.prefix !== o.prefix ? i.prefix.localeCompare(o.prefix) : i.name.localeCompare(o.name));
  let n = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((i) => {
    if (n.name === i.name && n.prefix === i.prefix && n.provider === i.provider)
      return;
    n = i;
    const o = i.provider, s = i.prefix, c = i.name, u = r[o] || (r[o] = /* @__PURE__ */ Object.create(null)), l = u[s] || (u[s] = Dn(o, s));
    let f;
    c in l.icons ? f = t.loaded : s === "" || l.missing.has(c) ? f = t.missing : f = t.pending;
    const h = {
      provider: o,
      prefix: s,
      name: c
    };
    f.push(h);
  }), t;
}
function hl(e, t) {
  e.forEach((r) => {
    const n = r.loaderCallbacks;
    n && (r.loaderCallbacks = n.filter((i) => i.id !== t));
  });
}
function pc(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let r = !1;
    const n = e.provider, i = e.prefix;
    t.forEach((o) => {
      const s = o.icons, c = s.pending.length;
      s.pending = s.pending.filter((u) => {
        if (u.prefix !== i)
          return !0;
        const l = u.name;
        if (e.icons[l])
          s.loaded.push({
            provider: n,
            prefix: i,
            name: l
          });
        else if (e.missing.has(l))
          s.missing.push({
            provider: n,
            prefix: i,
            name: l
          });
        else
          return r = !0, !0;
        return !1;
      }), s.pending.length !== c && (r || hl([e], o.id), o.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let hc = 0;
function mc(e, t, r) {
  const n = hc++, i = hl.bind(null, r, n);
  if (!t.pending.length)
    return i;
  const o = {
    id: n,
    icons: t,
    callback: e,
    abort: i
  };
  return r.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(o);
  }), i;
}
function yc(e, t = !0, r = !1) {
  const n = [];
  return e.forEach((i) => {
    const o = typeof i == "string" ? Yr(i, t, r) : i;
    o && n.push(o);
  }), n;
}
var vc = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function gc(e, t, r, n) {
  const i = e.resources.length, o = e.random ? Math.floor(Math.random() * i) : e.index;
  let s;
  if (e.random) {
    let O = e.resources.slice(0);
    for (s = []; O.length > 1; ) {
      const R = Math.floor(Math.random() * O.length);
      s.push(O[R]), O = O.slice(0, R).concat(O.slice(R + 1));
    }
    s = s.concat(O);
  } else
    s = e.resources.slice(o).concat(e.resources.slice(0, o));
  const c = Date.now();
  let u = "pending", l = 0, f, h = null, m = [], b = [];
  typeof n == "function" && b.push(n);
  function g() {
    h && (clearTimeout(h), h = null);
  }
  function d() {
    u === "pending" && (u = "aborted"), g(), m.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), m = [];
  }
  function a(O, R) {
    R && (b = []), typeof O == "function" && b.push(O);
  }
  function w() {
    return {
      startTime: c,
      payload: t,
      status: u,
      queriesSent: l,
      queriesPending: m.length,
      subscribe: a,
      abort: d
    };
  }
  function y() {
    u = "failed", b.forEach((O) => {
      O(void 0, f);
    });
  }
  function S() {
    m.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), m = [];
  }
  function E(O, R, I) {
    const q = R !== "success";
    switch (m = m.filter((j) => j !== O), u) {
      case "pending":
        break;
      case "failed":
        if (q || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (R === "abort") {
      f = I, y();
      return;
    }
    if (q) {
      f = I, m.length || (s.length ? P() : y());
      return;
    }
    if (g(), S(), !e.random) {
      const j = e.resources.indexOf(O.resource);
      j !== -1 && j !== e.index && (e.index = j);
    }
    u = "completed", b.forEach((j) => {
      j(I);
    });
  }
  function P() {
    if (u !== "pending")
      return;
    g();
    const O = s.shift();
    if (O === void 0) {
      if (m.length) {
        h = setTimeout(() => {
          g(), u === "pending" && (S(), y());
        }, e.timeout);
        return;
      }
      y();
      return;
    }
    const R = {
      status: "pending",
      resource: O,
      callback: (I, q) => {
        E(R, I, q);
      }
    };
    m.push(R), l++, h = setTimeout(P, e.rotate), r(O, t, R.callback);
  }
  return setTimeout(P), w;
}
function ml(e) {
  const t = {
    ...vc,
    ...e
  };
  let r = [];
  function n() {
    r = r.filter((c) => c().status === "pending");
  }
  function i(c, u, l) {
    const f = gc(
      t,
      c,
      u,
      (h, m) => {
        n(), l && l(h, m);
      }
    );
    return r.push(f), f;
  }
  function o(c) {
    return r.find((u) => c(u)) || null;
  }
  return {
    query: i,
    find: o,
    setIndex: (c) => {
      t.index = c;
    },
    getIndex: () => t.index,
    cleanup: n
  };
}
function ma() {
}
const di = /* @__PURE__ */ Object.create(null);
function bc(e) {
  if (!di[e]) {
    const t = No(e);
    if (!t)
      return;
    const r = ml(t), n = {
      config: t,
      redundancy: r
    };
    di[e] = n;
  }
  return di[e];
}
function wc(e, t, r) {
  let n, i;
  if (typeof e == "string") {
    const o = Oo(e);
    if (!o)
      return r(void 0, 424), ma;
    i = o.send;
    const s = bc(e);
    s && (n = s.redundancy);
  } else {
    const o = Io(e);
    if (o) {
      n = ml(o);
      const s = e.resources ? e.resources[0] : "", c = Oo(s);
      c && (i = c.send);
    }
  }
  return !n || !i ? (r(void 0, 424), ma) : n.query(t, i, r)().abort;
}
function ya() {
}
function Sc(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, pc(e);
  }));
}
function xc(e) {
  const t = [], r = [];
  return e.forEach((n) => {
    (n.match(al) ? t : r).push(n);
  }), {
    valid: t,
    invalid: r
  };
}
function Wn(e, t, r) {
  function n() {
    const i = e.pendingIcons;
    t.forEach((o) => {
      i && i.delete(o), e.icons[o] || e.missing.add(o);
    });
  }
  if (r && typeof r == "object")
    try {
      if (!cl(e, r).length) {
        n();
        return;
      }
    } catch (i) {
      console.error(i);
    }
  n(), Sc(e);
}
function va(e, t) {
  e instanceof Promise ? e.then((r) => {
    t(r);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function _c(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: r, prefix: n } = e, i = e.iconsToLoad;
    if (delete e.iconsToLoad, !i || !i.length)
      return;
    const o = e.loadIcon;
    if (e.loadIcons && (i.length > 1 || !o)) {
      va(
        e.loadIcons(i, n, r),
        (f) => {
          Wn(e, i, f);
        }
      );
      return;
    }
    if (o) {
      i.forEach((f) => {
        const h = o(f, n, r);
        va(h, (m) => {
          const b = m ? {
            prefix: n,
            icons: {
              [f]: m
            }
          } : null;
          Wn(e, [f], b);
        });
      });
      return;
    }
    const { valid: s, invalid: c } = xc(i);
    if (c.length && Wn(e, c, null), !s.length)
      return;
    const u = n.match(al) ? Oo(r) : null;
    if (!u) {
      Wn(e, s, null);
      return;
    }
    u.prepare(r, n, s).forEach((f) => {
      wc(r, f, (h) => {
        Wn(e, f.icons, h);
      });
    });
  }));
}
const Ec = (e, t) => {
  const r = yc(e, !0, fl()), n = dc(r);
  if (!n.pending.length) {
    let u = !0;
    return t && setTimeout(() => {
      u && t(
        n.loaded,
        n.missing,
        n.pending,
        ya
      );
    }), () => {
      u = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let s, c;
  return n.pending.forEach((u) => {
    const { provider: l, prefix: f } = u;
    if (f === c && l === s)
      return;
    s = l, c = f, o.push(Dn(l, f));
    const h = i[l] || (i[l] = /* @__PURE__ */ Object.create(null));
    h[f] || (h[f] = []);
  }), n.pending.forEach((u) => {
    const { provider: l, prefix: f, name: h } = u, m = Dn(l, f), b = m.pendingIcons || (m.pendingIcons = /* @__PURE__ */ new Set());
    b.has(h) || (b.add(h), i[l][f].push(h));
  }), o.forEach((u) => {
    const l = i[u.provider][u.prefix];
    l.length && _c(u, l);
  }), t ? mc(t, n, o) : ya;
};
function Oc(e, t) {
  const r = {
    ...e
  };
  for (const n in t) {
    const i = t[n], o = typeof i;
    n in dl ? (i === null || i && (o === "string" || o === "number")) && (r[n] = i) : o === typeof r[n] && (r[n] = n === "rotate" ? i % 4 : i);
  }
  return r;
}
const Ac = /[\s,]+/;
function Rc(e, t) {
  t.split(Ac).forEach((r) => {
    switch (r.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Pc(e, t = 0) {
  const r = e.replace(/^-?[0-9.]*/, "");
  function n(i) {
    for (; i < 0; )
      i += 4;
    return i % 4;
  }
  if (r === "") {
    const i = parseInt(e);
    return isNaN(i) ? 0 : n(i);
  } else if (r !== e) {
    let i = 0;
    switch (r) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let o = parseFloat(e.slice(0, e.length - r.length));
      return isNaN(o) ? 0 : (o = o / i, o % 1 === 0 ? n(o) : 0);
    }
  }
  return t;
}
function Cc(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    r += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function kc(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Dc(e) {
  return "data:image/svg+xml," + kc(e);
}
function Tc(e) {
  return 'url("' + Dc(e) + '")';
}
const ga = {
  ...pl,
  inline: !1
}, Ic = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, $c = {
  display: "inline-block"
}, Ao = {
  backgroundColor: "currentColor"
}, yl = {
  backgroundColor: "transparent"
}, ba = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, wa = {
  webkitMask: Ao,
  mask: Ao,
  background: yl
};
for (const e in wa) {
  const t = wa[e];
  for (const r in ba)
    t[e + r] = ba[r];
}
const Cr = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  Cr[e + "-flip"] = t, Cr[e.slice(0, 1) + "-flip"] = t, Cr[e + "Flip"] = t;
});
function Sa(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const xa = (e, t) => {
  const r = Oc(ga, t), n = { ...Ic }, i = t.mode || "svg", o = {}, s = t.style, c = typeof s == "object" && !(s instanceof Array) ? s : {};
  for (let d in t) {
    const a = t[d];
    if (a !== void 0)
      switch (d) {
        // Properties to ignore
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
        case "ssr":
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          r[d] = a === !0 || a === "true" || a === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof a == "string" && Rc(r, a);
          break;
        // Color: override style
        case "color":
          o.color = a;
          break;
        // Rotation as string
        case "rotate":
          typeof a == "string" ? r[d] = Pc(a) : typeof a == "number" && (r[d] = a);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          a !== !0 && a !== "true" && delete n["aria-hidden"];
          break;
        default: {
          const w = Cr[d];
          w ? (a === !0 || a === "true" || a === 1) && (r[w] = !0) : ga[d] === void 0 && (n[d] = a);
        }
      }
  }
  const u = Qu(e, r), l = u.attributes;
  if (r.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    n.style = {
      ...o,
      ...c
    }, Object.assign(n, l);
    let d = 0, a = t.id;
    return typeof a == "string" && (a = a.replace(/-/g, "_")), n.innerHTML = nc(u.body, a ? () => a + "ID" + d++ : "iconifyVue"), ca("svg", n);
  }
  const { body: f, width: h, height: m } = e, b = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), g = Cc(f, {
    ...l,
    width: h + "",
    height: m + ""
  });
  return n.style = {
    ...o,
    "--svg": Tc(g),
    width: Sa(l.width),
    height: Sa(l.height),
    ...$c,
    ...b ? Ao : yl,
    ...c
  }, ca("span", n);
};
fl(!0);
rc("", fc);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Hu(n)) && console.error(r);
      } catch {
        console.error(r);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let r in t) {
        const n = "IconifyProviders[" + r + "] is invalid.";
        try {
          const i = t[r];
          if (typeof i != "object" || !i || i.resources === void 0)
            continue;
          ic(r, i) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
const Nc = {
  ...Xr,
  body: ""
}, Ot = wu({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: !1,
  // Set initial data
  data() {
    return {
      // Current icon name
      _name: "",
      // Loading
      _loadingIcon: null,
      // Mounted status
      iconMounted: !1,
      // Callback counter to trigger re-render
      counter: 0
    };
  },
  mounted() {
    this.iconMounted = !0;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      this._loadingIcon && (this._loadingIcon.abort(), this._loadingIcon = null);
    },
    // Get data for icon to render or null
    getIcon(e, t, r) {
      if (typeof e == "object" && e !== null && typeof e.body == "string")
        return this._name = "", this.abortLoading(), {
          data: e
        };
      let n;
      if (typeof e != "string" || (n = Yr(e, !1, !0)) === null)
        return this.abortLoading(), null;
      let i = Wu(n);
      if (!i)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", i !== null && (this._loadingIcon = {
          name: e,
          abort: Ec([n], () => {
            this.counter++;
          })
        })), null;
      if (this.abortLoading(), this._name !== e && (this._name = e, t && t(e)), r) {
        i = Object.assign({}, i);
        const s = r(i.body, n.name, n.prefix, n.provider);
        typeof s == "string" && (i.body = s);
      }
      const o = ["iconify"];
      return n.prefix !== "" && o.push("iconify--" + n.prefix), n.provider !== "" && o.push("iconify--" + n.provider), { data: i, classes: o };
    }
  },
  // Render icon
  render() {
    this.counter;
    const e = this.$attrs, t = this.iconMounted || e.ssr ? this.getIcon(e.icon, e.onLoad, e.customise) : null;
    if (!t)
      return xa(Nc, e);
    let r = e;
    return t.classes && (r = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), xa({
      ...Xr,
      ...t.data
    }, r);
  }
}), Mc = { key: 0 }, jc = { class: "kvc-table-header-label" }, qc = {
  key: 1,
  class: "kvc-table-operation"
}, Fc = { key: 0 }, Bc = ["href"], Lc = ["data-code"], Uc = {
  key: 1,
  class: "kvc-table-operation"
}, Wc = { class: "kvc-table-operation-buttons" }, Vc = ["onClick"], Hc = ["onClick"], Gc = {
  __name: "table",
  props: {
    readOnly: { type: Boolean, default: !1 },
    rowData: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    modelValue: { type: Array, default: () => [] },
    hideOperations: { type: Boolean, default: !1 },
    recordUrl: { type: String, default: null }
  },
  emits: ["update:modelValue", "add", "delete"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = Ue(() => n.readOnly || n.hideOperations), o = (u) => n.rowData.reduce((l, f) => {
      var h;
      return l[`data-${f.key}`] = ((h = u[f.code]) == null ? void 0 : h.value) || null, l;
    }, {}), s = (u) => {
      const l = [...n.modelValue];
      u >= 0 && (l.splice(u + 1, 0, {}), r("update:modelValue", l), r("add", l, u));
    }, c = (u) => {
      const l = [...n.modelValue];
      u >= 0 && (l.splice(u, 1), r("update:modelValue", l), r("delete", l));
    };
    return (u, l) => (X(), J("table", {
      class: Ze(["kvc-table", { "kvc-table-readonly": e.readOnly }])
    }, [
      le("thead", null, [
        le("tr", null, [
          e.recordUrl ? (X(), J("th", Mc)) : We("", !0),
          (X(!0), J(dt, null, vt(e.columns, (f, h) => (X(), J("th", {
            key: h,
            style: Yn(f != null && f.width ? { width: f == null ? void 0 : f.width } : void 0)
          }, [
            le("span", jc, Qe((f == null ? void 0 : f.label) ?? f), 1)
          ], 4))), 128)),
          i.value ? We("", !0) : (X(), J("th", qc))
        ])
      ]),
      le("tbody", null, [
        (X(!0), J(dt, null, vt(e.modelValue, (f, h) => (X(), J("tr", Su({
          key: "row-" + h,
          ref_for: !0
        }, o(f)), [
          e.recordUrl ? (X(), J("td", Fc, [
            f.$id ? (X(), J("a", {
              key: 0,
              href: e.recordUrl + f.$id.value,
              class: "kvc-link",
              target: "_blank",
              rel: "noopener noreferrer",
              style: Yn(e.readOnly ? null : {
                display: "inline-block",
                margin: "10px 0"
              })
            }, [
              ct(Pe(Ot), {
                icon: "tdesign:file-filled",
                width: "16"
              })
            ], 12, Bc)) : We("", !0)
          ])) : We("", !0),
          (X(!0), J(dt, null, vt(e.columns, (m, b) => (X(), J("td", {
            key: "col-" + b,
            "data-code": (m == null ? void 0 : m.code) || m,
            style: Yn(m != null && m.width ? { width: m == null ? void 0 : m.width } : void 0)
          }, [
            zt(u.$slots, (m == null ? void 0 : m.code) || m, {
              index: h,
              row: f,
              width: m == null ? void 0 : m.width,
              column: (m == null ? void 0 : m.code) || m,
              value: f[(m == null ? void 0 : m.code) || m]
            })
          ], 12, Lc))), 128)),
          i.value ? We("", !0) : (X(), J("td", Uc, [
            le("div", Wc, [
              le("button", {
                type: "button",
                class: "kvc-table-btn-plus",
                onClick: (m) => s(h)
              }, [
                ct(Pe(Ot), {
                  icon: "mdi:plus",
                  width: "14"
                })
              ], 8, Vc),
              le("button", {
                type: "button",
                class: "kvc-table-btn-minus",
                onClick: (m) => c(h)
              }, [
                ct(Pe(Ot), {
                  icon: "mdi:minus",
                  width: "14"
                })
              ], 8, Hc)
            ])
          ]))
        ], 16))), 128))
      ])
    ], 2));
  }
};
function vl(e) {
  return xu() ? (_u(e), !0) : !1;
}
const Jr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Kc = Object.prototype.toString, zc = (e) => Kc.call(e) === "[object Object]", pi = () => {
}, Yc = /* @__PURE__ */ Xc();
function Xc() {
  var e, t;
  return Jr && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Jc(e) {
  return Eu();
}
function hi(e) {
  return Array.isArray(e) ? e : [e];
}
function Qc(e, t = !0, r) {
  Jc() ? Do(e, r) : t ? e() : il(e);
}
function Zc(e, t, r) {
  return ol(
    e,
    t,
    {
      ...r,
      immediate: !0
    }
  );
}
const gl = Jr ? window : void 0, ef = Jr ? window.document : void 0;
function Pn(e) {
  var t;
  const r = Nt(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function $t(...e) {
  const t = [], r = () => {
    t.forEach((c) => c()), t.length = 0;
  }, n = (c, u, l, f) => (c.addEventListener(u, l, f), () => c.removeEventListener(u, l, f)), i = Ue(() => {
    const c = hi(Nt(e[0])).filter((u) => u != null);
    return c.every((u) => typeof u != "string") ? c : void 0;
  }), o = Zc(
    () => {
      var c, u;
      return [
        (u = (c = i.value) == null ? void 0 : c.map((l) => Pn(l))) != null ? u : [gl].filter((l) => l != null),
        hi(Nt(i.value ? e[1] : e[0])),
        hi(Pe(i.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Nt(i.value ? e[3] : e[2])
      ];
    },
    ([c, u, l, f]) => {
      if (r(), !(c != null && c.length) || !(u != null && u.length) || !(l != null && l.length))
        return;
      const h = zc(f) ? { ...f } : f;
      t.push(
        ...c.flatMap(
          (m) => u.flatMap(
            (b) => l.map((g) => n(m, b, g, h))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    o(), r();
  };
  return vl(r), s;
}
let _a = !1;
function nr(e, t, r = {}) {
  const { window: n = gl, ignore: i = [], capture: o = !0, detectIframe: s = !1 } = r;
  if (!n)
    return pi;
  if (Yc && !_a) {
    _a = !0;
    const d = { passive: !0 };
    Array.from(n.document.body.children).forEach((a) => $t(a, "click", pi, d)), $t(n.document.documentElement, "click", pi, d);
  }
  let c = !0;
  const u = (d) => Nt(i).some((a) => {
    if (typeof a == "string")
      return Array.from(n.document.querySelectorAll(a)).some((w) => w === d.target || d.composedPath().includes(w));
    {
      const w = Pn(a);
      return w && (d.target === w || d.composedPath().includes(w));
    }
  });
  function l(d) {
    const a = Nt(d);
    return a && a.$.subTree.shapeFlag === 16;
  }
  function f(d, a) {
    const w = Nt(d), y = w.$.subTree && w.$.subTree.children;
    return y == null || !Array.isArray(y) ? !1 : y.some((S) => S.el === a.target || a.composedPath().includes(S.el));
  }
  const h = (d) => {
    const a = Pn(e);
    if (d.target != null && !(!(a instanceof Element) && l(e) && f(e, d)) && !(!a || a === d.target || d.composedPath().includes(a))) {
      if (d.detail === 0 && (c = !u(d)), !c) {
        c = !0;
        return;
      }
      t(d);
    }
  };
  let m = !1;
  const b = [
    $t(n, "click", (d) => {
      m || (m = !0, setTimeout(() => {
        m = !1;
      }, 0), h(d));
    }, { passive: !0, capture: o }),
    $t(n, "pointerdown", (d) => {
      const a = Pn(e);
      c = !u(d) && !!(a && !d.composedPath().includes(a));
    }, { passive: !0 }),
    s && $t(n, "blur", (d) => {
      setTimeout(() => {
        var a;
        const w = Pn(e);
        ((a = n.document.activeElement) == null ? void 0 : a.tagName) === "IFRAME" && !(w != null && w.contains(n.document.activeElement)) && t(d);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean);
  return () => b.forEach((d) => d());
}
function tf(e, t = {}) {
  var r, n;
  const i = De(!1), o = Ou(null);
  let s = 0, c = !0;
  if (Jr) {
    const u = typeof t == "function" ? { onDrop: t } : t, l = (r = u.multiple) != null ? r : !0, f = (n = u.preventDefaultForUnhandled) != null ? n : !1, h = (a) => {
      var w, y;
      const S = Array.from((y = (w = a.dataTransfer) == null ? void 0 : w.files) != null ? y : []);
      return S.length === 0 ? null : l ? S : [S[0]];
    }, m = (a) => {
      const w = Pe(u.dataTypes);
      return typeof w == "function" ? w(a) : w != null && w.length ? a.length === 0 ? !1 : a.every(
        (y) => w.some((S) => y.includes(S))
      ) : !0;
    }, b = (a) => {
      const w = Array.from(a ?? []).map((E) => E.type), y = m(w), S = l || a.length <= 1;
      return y && S;
    }, g = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !("chrome" in window), d = (a, w) => {
      var y, S, E, P, O, R;
      const I = (y = a.dataTransfer) == null ? void 0 : y.items;
      if (c = (S = I && b(I)) != null ? S : !1, f && a.preventDefault(), !g() && !c) {
        a.dataTransfer && (a.dataTransfer.dropEffect = "none");
        return;
      }
      a.preventDefault(), a.dataTransfer && (a.dataTransfer.dropEffect = "copy");
      const q = h(a);
      switch (w) {
        case "enter":
          s += 1, i.value = !0, (E = u.onEnter) == null || E.call(u, null, a);
          break;
        case "over":
          (P = u.onOver) == null || P.call(u, null, a);
          break;
        case "leave":
          s -= 1, s === 0 && (i.value = !1), (O = u.onLeave) == null || O.call(u, null, a);
          break;
        case "drop":
          s = 0, i.value = !1, c && (o.value = q, (R = u.onDrop) == null || R.call(u, q, a));
          break;
      }
    };
    $t(e, "dragenter", (a) => d(a, "enter")), $t(e, "dragover", (a) => d(a, "over")), $t(e, "dragleave", (a) => d(a, "leave")), $t(e, "drop", (a) => d(a, "drop"));
  }
  return {
    files: o,
    isOverDropZone: i
  };
}
const nf = ["onClick", "onMouseover"], rf = { class: "kvc-select-list-item-icon-space" }, of = { class: "kvc-select-list-item-text" }, Wr = {
  __name: "SelectList",
  props: {
    items: { type: Array, default: () => [] },
    value: { type: [String, Number], default: null },
    modelValue: { type: [String, Number], default: null },
    labelKey: { type: String, default: "label" },
    valueKey: { type: String, default: "value" },
    height: { type: [String, Number], default: "auto" },
    maxHeight: { type: [String, Number], default: "auto" }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = De(), o = /* @__PURE__ */ new Map(), s = Ue(() => typeof n.maxHeight == "string" ? n.maxHeight : n.maxHeight + "px"), c = Ue(() => typeof n.maxHeight == "string" ? n.maxHeight : n.maxHeight + "px"), u = De();
    Do(() => l(n.modelValue));
    const l = (h) => {
      const m = o.get(h);
      if (i.value && m) {
        const b = i.value.offsetHeight, g = m.offsetTop, d = m.offsetHeight, a = g - b / 2 + d / 2;
        i.value.scrollTo({ top: a }), u.value = h;
      }
    }, f = (h) => {
      r("update:modelValue", h), r("change", h);
    };
    return (h, m) => (X(), J("ul", {
      ref_key: "listWrapRef",
      ref: i,
      class: "kvc-select-list",
      style: Yn({
        height: s.value,
        maxHeight: c.value
      })
    }, [
      (X(!0), J(dt, null, vt(e.items, (b, g) => (X(), J("li", {
        key: g,
        ref_for: !0,
        ref: (d) => Pe(o).set(b[e.valueKey] ?? b, d),
        class: Ze(["kvc-select-list-item", {
          "kvc-select-list-item-selected": (b[e.valueKey] ?? b) === e.modelValue
          // 'bg-primary-light': isHoveredValue == (item[valueKey] ?? item),
        }]),
        onClick: (d) => f(b[e.valueKey] ?? b),
        onMouseover: (d) => u.value = b[e.valueKey] ?? b
      }, [
        le("span", rf, [
          (b[e.valueKey] ?? b) === e.modelValue ? (X(), an(Pe(Ot), {
            key: 0,
            icon: "mdi:check-bold",
            width: "15"
          })) : We("", !0)
        ]),
        le("span", of, Qe(b[e.labelKey] ?? b), 1)
      ], 42, nf))), 128))
    ], 4));
  }
}, af = ["innerHTML"], sf = {
  key: 1,
  class: "kvc-dropdown"
}, lf = ["disabled"], uf = {
  __name: "dropdown",
  props: {
    nonstyled: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    itemLabel: { type: String, default: "label" },
    itemValue: { type: String, default: "value" },
    modelValue: { type: [String, Number], default: null }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = Ue({
      get: () => n.modelValue,
      set: (l) => {
        r("update:modelValue", l), r("change", l);
      }
    }), o = De(!1), s = De(!1), c = De(), u = De();
    return nr(u, (l) => {
      o.value || (s.value = !1, o.value = !1);
    }), (l, f) => {
      var h;
      return e.readOnly ? (X(), J("p", {
        key: 0,
        class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
        innerHTML: e.modelValue
      }, null, 10, af)) : (X(), J("div", sf, [
        le("button", {
          ref_key: "buttonRef",
          ref: c,
          type: "button",
          class: "kvc-dropdown-button",
          disabled: e.disabled,
          onClick: f[0] || (f[0] = (m) => s.value = !0)
        }, [
          Au(Qe((h = e.items.find((m) => m[e.itemValue] == i.value)) == null ? void 0 : h[e.itemLabel]) + " ", 1),
          ct(Pe(Ot), {
            icon: "mdi-light:chevron-down",
            width: "24"
          })
        ], 8, lf),
        e.readOnly || e.disabled ? We("", !0) : sn((X(), an(Wr, {
          key: 0,
          modelValue: i.value,
          "onUpdate:modelValue": f[1] || (f[1] = (m) => i.value = m),
          ref_key: "timeRef",
          ref: u,
          items: e.items,
          labelKey: e.itemLabel,
          valueKey: e.itemValue,
          onChange: f[2] || (f[2] = (m) => s.value = !1)
        }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
          [To, s.value]
        ])
      ]));
    };
  }
}, cf = {
  __name: "button",
  props: {
    sm: { type: Boolean, default: !1 },
    color: { type: String, default: "" }
  },
  setup(e) {
    return (t, r) => (X(), J("button", {
      type: "button",
      class: Ze(["kvc-button", {
        "kvc-button-sm": e.sm,
        "kvc-button-normal": e.color === "normal",
        "kvc-button-success": e.color === "success",
        "kvc-button-save": e.color === "save",
        "kvc-button-error": e.color === "error"
      }])
    }, [
      zt(t.$slots, "default")
    ], 2));
  }
}, ff = { class: "kvc-field-label" }, df = {
  key: 0,
  class: "kvc-field-required"
}, pf = { class: "kvc-field-input" }, hf = {
  key: 0,
  class: "kvc-field-prefix"
}, mf = {
  key: 1,
  class: "kvc-field-suffix"
}, yf = {
  __name: "field",
  props: {
    required: { type: Boolean, default: !1 },
    width: { type: [String, Number], default: "auto" },
    errorMessage: { type: String, default: "" },
    successMessage: { type: String, default: "" }
  },
  setup(e) {
    const t = Ru(), r = e, n = Ue(() => r.width + (i(r.width) ? "px" : "")), i = (o) => typeof r.width == "number" || !isNaN(r.width);
    return (o, s) => (X(), J("div", {
      style: Yn({ maxWidth: n.value }),
      class: "kvc-field"
    }, [
      le("label", ff, [
        zt(o.$slots, "label"),
        e.required ? (X(), J("span", df)) : We("", !0)
      ]),
      le("div", pf, [
        Pe(t).prefix && Pe(t).prefix() ? (X(), J("div", hf, [
          zt(o.$slots, "prefix")
        ])) : We("", !0),
        zt(o.$slots, "default"),
        Pe(t).suffix && Pe(t).suffix() ? (X(), J("div", mf, [
          zt(o.$slots, "suffix")
        ])) : We("", !0)
      ]),
      e.errorMessage || e.successMessage ? (X(), J("div", {
        key: 0,
        class: Ze({
          "kvc-field-message-error": e.errorMessage,
          "kvc-field-message-success": e.successMessage
        })
      }, Qe(e.errorMessage || e.successMessage), 3)) : We("", !0)
    ], 4));
  }
}, vf = ["innerHTML"], gf = ["disabled", "value"], bf = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, wf = ["fill"], Sf = {
  __name: "radio",
  props: {
    column: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    nonstyled: { type: Boolean, default: !1 },
    itemLabel: { type: String, default: "label" },
    itemValue: { type: String, default: "value" },
    items: { type: Array, default: () => [] },
    modelValue: { type: [Number, String, Boolean, Object], default: null }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = Ue({
      get: () => n.modelValue,
      set: (s) => {
        r("update:modelValue", s), r("change", s);
      }
    }), o = (s) => s.disabled ? "#d8d8d8" : n.modelValue == ((s == null ? void 0 : s[n.itemValue]) ?? s) ? "#3498db" : "#d8d8d8";
    return (s, c) => e.readOnly ? (X(), J("p", {
      key: 0,
      class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
      innerHTML: e.modelValue
    }, null, 10, vf)) : (X(), J("div", {
      key: 1,
      class: Ze(["kvc-radio-group", { "kvc-radio-group-column": e.column }])
    }, [
      (X(!0), J(dt, null, vt(e.items, (u, l) => (X(), J("label", {
        key: l,
        class: "kvc-radio-item"
      }, [
        sn(le("input", {
          type: "radio",
          "onUpdate:modelValue": c[0] || (c[0] = (f) => i.value = f),
          disabled: typeof u == "object" ? u.disabled : !1,
          value: (u == null ? void 0 : u[e.itemValue]) ?? u
        }, null, 8, gf), [
          [Pu, i.value]
        ]),
        (X(), J("svg", bf, [
          c[1] || (c[1] = le("circle", {
            cx: "10.5",
            cy: "10.5",
            r: "10",
            fill: "white",
            stroke: "#e3e7e8",
            "stroke-width": "1"
          }, null, -1)),
          i.value == ((u == null ? void 0 : u[e.itemValue]) ?? u) ? (X(), J("circle", {
            key: 0,
            cx: "10.5",
            cy: "10.5",
            r: "6.5",
            fill: o(u)
          }, null, 8, wf)) : We("", !0)
        ])),
        le("span", null, Qe((u == null ? void 0 : u[e.itemLabel]) ?? u), 1)
      ]))), 128))
    ], 2));
  }
}, xf = ["innerHTML"], _f = ["disabled", "value"], Ef = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Of = ["stroke"], Af = ["fill"], Rf = {
  __name: "checkbox",
  props: {
    column: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    nonstyled: { type: Boolean, default: !1 },
    itemLabel: { type: String, default: "label" },
    itemValue: { type: String, default: "value" },
    items: { type: Array, default: () => [] },
    modelValue: { type: Array, default: () => [] }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = Ue({
      get: () => n.modelValue,
      set: (s) => {
        r("update:modelValue", s), r("change", s);
      }
    }), o = (s) => s.disabled ? "#e3e7e8" : n.modelValue.includes(s[n.itemValue] ?? s) ? "#3498db" : "#e3e7e8";
    return (s, c) => e.readOnly ? (X(), J("p", {
      key: 0,
      class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
      innerHTML: e.modelValue.join(", ")
    }, null, 10, xf)) : (X(), J("div", {
      key: 1,
      class: Ze(["kvc-checkbox-group", { "kvc-checkbox-group-column": e.column }])
    }, [
      (X(!0), J(dt, null, vt(e.items, (u, l) => (X(), J("label", {
        key: l,
        class: "kvc-checkbox-item"
      }, [
        sn(le("input", {
          type: "checkbox",
          "onUpdate:modelValue": c[0] || (c[0] = (f) => i.value = f),
          disabled: typeof u == "object" ? u.disabled : !1,
          value: u[e.itemValue] ?? u
        }, null, 8, _f), [
          [Cu, i.value]
        ]),
        (X(), J("svg", Ef, [
          le("rect", {
            x: "1",
            y: "1",
            width: "19",
            height: "19",
            rx: "1",
            fill: "white",
            "stroke-width": "2",
            stroke: o(u)
          }, null, 8, Of),
          i.value.includes(u[e.itemValue] ?? u) ? (X(), J("path", {
            key: 0,
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z",
            fill: o(u)
          }, null, 8, Af)) : We("", !0)
        ])),
        le("span", null, Qe(u[e.itemLabel] ?? u), 1)
      ]))), 128))
    ], 2));
  }
}, Pf = ["placeholder", "type", "min", "max"], Mo = {
  __name: "text-input",
  props: {
    modelValue: { type: String, default: "" },
    nonstyled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    width: { type: String, default: "150px" },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    min: { type: [String, Number], default: void 0 },
    max: { type: [String, Number], default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = Ue({
      get: () => n.modelValue,
      set: (o) => r("update:modelValue", o)
    });
    return (o, s) => e.readOnly ? (X(), J("p", {
      key: 0,
      class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }])
    }, Qe((i.value || " ").replace(/\r|\n/g, "") || " "), 3)) : sn((X(), J("input", {
      key: 1,
      "onUpdate:modelValue": s[0] || (s[0] = (c) => i.value = c),
      class: "kvc-field-text",
      placeholder: e.placeholder,
      type: e.type,
      min: e.min,
      max: e.max
    }, null, 8, Pf)), [
      [ku, i.value]
    ]);
  }
};
var rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function In(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Cf(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var kr = { exports: {} }, kf = kr.exports, Ea;
function Df() {
  return Ea || (Ea = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(kf, function() {
      var r = 1e3, n = 6e4, i = 36e5, o = "millisecond", s = "second", c = "minute", u = "hour", l = "day", f = "week", h = "month", m = "quarter", b = "year", g = "date", d = "Invalid Date", a = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(W) {
        var B = ["th", "st", "nd", "rd"], U = W % 100;
        return "[" + W + (B[(U - 20) % 10] || B[U] || B[0]) + "]";
      } }, S = function(W, B, U) {
        var z = String(W);
        return !z || z.length >= B ? W : "" + Array(B + 1 - z.length).join(U) + W;
      }, E = { s: S, z: function(W) {
        var B = -W.utcOffset(), U = Math.abs(B), z = Math.floor(U / 60), M = U % 60;
        return (B <= 0 ? "+" : "-") + S(z, 2, "0") + ":" + S(M, 2, "0");
      }, m: function W(B, U) {
        if (B.date() < U.date()) return -W(U, B);
        var z = 12 * (U.year() - B.year()) + (U.month() - B.month()), M = B.clone().add(z, h), Q = U - M < 0, ee = B.clone().add(z + (Q ? -1 : 1), h);
        return +(-(z + (U - M) / (Q ? M - ee : ee - M)) || 0);
      }, a: function(W) {
        return W < 0 ? Math.ceil(W) || 0 : Math.floor(W);
      }, p: function(W) {
        return { M: h, y: b, w: f, d: l, D: g, h: u, m: c, s, ms: o, Q: m }[W] || String(W || "").toLowerCase().replace(/s$/, "");
      }, u: function(W) {
        return W === void 0;
      } }, P = "en", O = {};
      O[P] = y;
      var R = "$isDayjsObject", I = function(W) {
        return W instanceof V || !(!W || !W[R]);
      }, q = function W(B, U, z) {
        var M;
        if (!B) return P;
        if (typeof B == "string") {
          var Q = B.toLowerCase();
          O[Q] && (M = Q), U && (O[Q] = U, M = Q);
          var ee = B.split("-");
          if (!M && ee.length > 1) return W(ee[0]);
        } else {
          var fe = B.name;
          O[fe] = B, M = fe;
        }
        return !z && M && (P = M), M || !z && P;
      }, j = function(W, B) {
        if (I(W)) return W.clone();
        var U = typeof B == "object" ? B : {};
        return U.date = W, U.args = arguments, new V(U);
      }, F = E;
      F.l = q, F.i = I, F.w = function(W, B) {
        return j(W, { locale: B.$L, utc: B.$u, x: B.$x, $offset: B.$offset });
      };
      var V = function() {
        function W(U) {
          this.$L = q(U.locale, null, !0), this.parse(U), this.$x = this.$x || U.x || {}, this[R] = !0;
        }
        var B = W.prototype;
        return B.parse = function(U) {
          this.$d = function(z) {
            var M = z.date, Q = z.utc;
            if (M === null) return /* @__PURE__ */ new Date(NaN);
            if (F.u(M)) return /* @__PURE__ */ new Date();
            if (M instanceof Date) return new Date(M);
            if (typeof M == "string" && !/Z$/i.test(M)) {
              var ee = M.match(a);
              if (ee) {
                var fe = ee[2] - 1 || 0, me = (ee[7] || "0").substring(0, 3);
                return Q ? new Date(Date.UTC(ee[1], fe, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, me)) : new Date(ee[1], fe, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, me);
              }
            }
            return new Date(M);
          }(U), this.init();
        }, B.init = function() {
          var U = this.$d;
          this.$y = U.getFullYear(), this.$M = U.getMonth(), this.$D = U.getDate(), this.$W = U.getDay(), this.$H = U.getHours(), this.$m = U.getMinutes(), this.$s = U.getSeconds(), this.$ms = U.getMilliseconds();
        }, B.$utils = function() {
          return F;
        }, B.isValid = function() {
          return this.$d.toString() !== d;
        }, B.isSame = function(U, z) {
          var M = j(U);
          return this.startOf(z) <= M && M <= this.endOf(z);
        }, B.isAfter = function(U, z) {
          return j(U) < this.startOf(z);
        }, B.isBefore = function(U, z) {
          return this.endOf(z) < j(U);
        }, B.$g = function(U, z, M) {
          return F.u(U) ? this[z] : this.set(M, U);
        }, B.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, B.valueOf = function() {
          return this.$d.getTime();
        }, B.startOf = function(U, z) {
          var M = this, Q = !!F.u(z) || z, ee = F.p(U), fe = function(ge, Z) {
            var ye = F.w(M.$u ? Date.UTC(M.$y, Z, ge) : new Date(M.$y, Z, ge), M);
            return Q ? ye : ye.endOf(l);
          }, me = function(ge, Z) {
            return F.w(M.toDate()[ge].apply(M.toDate("s"), (Q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), M);
          }, Ee = this.$W, _e = this.$M, N = this.$D, G = "set" + (this.$u ? "UTC" : "");
          switch (ee) {
            case b:
              return Q ? fe(1, 0) : fe(31, 11);
            case h:
              return Q ? fe(1, _e) : fe(0, _e + 1);
            case f:
              var ve = this.$locale().weekStart || 0, Oe = (Ee < ve ? Ee + 7 : Ee) - ve;
              return fe(Q ? N - Oe : N + (6 - Oe), _e);
            case l:
            case g:
              return me(G + "Hours", 0);
            case u:
              return me(G + "Minutes", 1);
            case c:
              return me(G + "Seconds", 2);
            case s:
              return me(G + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, B.endOf = function(U) {
          return this.startOf(U, !1);
        }, B.$set = function(U, z) {
          var M, Q = F.p(U), ee = "set" + (this.$u ? "UTC" : ""), fe = (M = {}, M[l] = ee + "Date", M[g] = ee + "Date", M[h] = ee + "Month", M[b] = ee + "FullYear", M[u] = ee + "Hours", M[c] = ee + "Minutes", M[s] = ee + "Seconds", M[o] = ee + "Milliseconds", M)[Q], me = Q === l ? this.$D + (z - this.$W) : z;
          if (Q === h || Q === b) {
            var Ee = this.clone().set(g, 1);
            Ee.$d[fe](me), Ee.init(), this.$d = Ee.set(g, Math.min(this.$D, Ee.daysInMonth())).$d;
          } else fe && this.$d[fe](me);
          return this.init(), this;
        }, B.set = function(U, z) {
          return this.clone().$set(U, z);
        }, B.get = function(U) {
          return this[F.p(U)]();
        }, B.add = function(U, z) {
          var M, Q = this;
          U = Number(U);
          var ee = F.p(z), fe = function(_e) {
            var N = j(Q);
            return F.w(N.date(N.date() + Math.round(_e * U)), Q);
          };
          if (ee === h) return this.set(h, this.$M + U);
          if (ee === b) return this.set(b, this.$y + U);
          if (ee === l) return fe(1);
          if (ee === f) return fe(7);
          var me = (M = {}, M[c] = n, M[u] = i, M[s] = r, M)[ee] || 1, Ee = this.$d.getTime() + U * me;
          return F.w(Ee, this);
        }, B.subtract = function(U, z) {
          return this.add(-1 * U, z);
        }, B.format = function(U) {
          var z = this, M = this.$locale();
          if (!this.isValid()) return M.invalidDate || d;
          var Q = U || "YYYY-MM-DDTHH:mm:ssZ", ee = F.z(this), fe = this.$H, me = this.$m, Ee = this.$M, _e = M.weekdays, N = M.months, G = M.meridiem, ve = function(Z, ye, he, Ce) {
            return Z && (Z[ye] || Z(z, Q)) || he[ye].slice(0, Ce);
          }, Oe = function(Z) {
            return F.s(fe % 12 || 12, Z, "0");
          }, ge = G || function(Z, ye, he) {
            var Ce = Z < 12 ? "AM" : "PM";
            return he ? Ce.toLowerCase() : Ce;
          };
          return Q.replace(w, function(Z, ye) {
            return ye || function(he) {
              switch (he) {
                case "YY":
                  return String(z.$y).slice(-2);
                case "YYYY":
                  return F.s(z.$y, 4, "0");
                case "M":
                  return Ee + 1;
                case "MM":
                  return F.s(Ee + 1, 2, "0");
                case "MMM":
                  return ve(M.monthsShort, Ee, N, 3);
                case "MMMM":
                  return ve(N, Ee);
                case "D":
                  return z.$D;
                case "DD":
                  return F.s(z.$D, 2, "0");
                case "d":
                  return String(z.$W);
                case "dd":
                  return ve(M.weekdaysMin, z.$W, _e, 2);
                case "ddd":
                  return ve(M.weekdaysShort, z.$W, _e, 3);
                case "dddd":
                  return _e[z.$W];
                case "H":
                  return String(fe);
                case "HH":
                  return F.s(fe, 2, "0");
                case "h":
                  return Oe(1);
                case "hh":
                  return Oe(2);
                case "a":
                  return ge(fe, me, !0);
                case "A":
                  return ge(fe, me, !1);
                case "m":
                  return String(me);
                case "mm":
                  return F.s(me, 2, "0");
                case "s":
                  return String(z.$s);
                case "ss":
                  return F.s(z.$s, 2, "0");
                case "SSS":
                  return F.s(z.$ms, 3, "0");
                case "Z":
                  return ee;
              }
              return null;
            }(Z) || ee.replace(":", "");
          });
        }, B.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, B.diff = function(U, z, M) {
          var Q, ee = this, fe = F.p(z), me = j(U), Ee = (me.utcOffset() - this.utcOffset()) * n, _e = this - me, N = function() {
            return F.m(ee, me);
          };
          switch (fe) {
            case b:
              Q = N() / 12;
              break;
            case h:
              Q = N();
              break;
            case m:
              Q = N() / 3;
              break;
            case f:
              Q = (_e - Ee) / 6048e5;
              break;
            case l:
              Q = (_e - Ee) / 864e5;
              break;
            case u:
              Q = _e / i;
              break;
            case c:
              Q = _e / n;
              break;
            case s:
              Q = _e / r;
              break;
            default:
              Q = _e;
          }
          return M ? Q : F.a(Q);
        }, B.daysInMonth = function() {
          return this.endOf(h).$D;
        }, B.$locale = function() {
          return O[this.$L];
        }, B.locale = function(U, z) {
          if (!U) return this.$L;
          var M = this.clone(), Q = q(U, z, !0);
          return Q && (M.$L = Q), M;
        }, B.clone = function() {
          return F.w(this.$d, this);
        }, B.toDate = function() {
          return new Date(this.valueOf());
        }, B.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, B.toISOString = function() {
          return this.$d.toISOString();
        }, B.toString = function() {
          return this.$d.toUTCString();
        }, W;
      }(), oe = V.prototype;
      return j.prototype = oe, [["$ms", o], ["$s", s], ["$m", c], ["$H", u], ["$W", l], ["$M", h], ["$y", b], ["$D", g]].forEach(function(W) {
        oe[W[1]] = function(B) {
          return this.$g(B, W[0], W[1]);
        };
      }), j.extend = function(W, B) {
        return W.$i || (W(B, V, j), W.$i = !0), j;
      }, j.locale = q, j.isDayjs = I, j.unix = function(W) {
        return j(1e3 * W);
      }, j.en = O[P], j.Ls = O, j.p = {}, j;
    });
  }(kr)), kr.exports;
}
var Tf = Df();
const xe = /* @__PURE__ */ In(Tf);
var Dr = { exports: {} }, If = Dr.exports, Oa;
function $f() {
  return Oa || (Oa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(If, function() {
      return function(r, n) {
        n.prototype.weekday = function(i) {
          var o = this.$locale().weekStart || 0, s = this.$W, c = (s < o ? s + 7 : s) - o;
          return this.$utils().u(i) ? c : this.subtract(c, "day").add(i, "day");
        };
      };
    });
  }(Dr)), Dr.exports;
}
var Nf = $f();
const Mf = /* @__PURE__ */ In(Nf);
var Tr = { exports: {} }, jf = Tr.exports, Aa;
function qf() {
  return Aa || (Aa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(jf, function() {
      return function(r, n) {
        n.prototype.isSameOrBefore = function(i, o) {
          return this.isSame(i, o) || this.isBefore(i, o);
        };
      };
    });
  }(Tr)), Tr.exports;
}
var Ff = qf();
const Bf = /* @__PURE__ */ In(Ff), Lf = { class: "kvc-datepicker-popup" }, Uf = { class: "kvc-datepicker-controls" }, Wf = { class: "kvc-datepicker-control-year-month" }, Vf = { class: "kvc-datepicker-control-year" }, Hf = { class: "kvc-datepicker-control-selector-text" }, Gf = { class: "kvc-datepicker-control-month" }, Kf = { class: "kvc-datepicker-control-selector-text" }, zf = { class: "kvc-datepicker-body" }, Yf = ["onClick"], Xf = { class: "kvc-datepicker-bottom" }, Jf = {
  __name: "DatePicker",
  props: {
    modelValue: { type: String, default: void 0 }
  },
  emits: ["update:modelValue", "close"],
  setup(e, { emit: t }) {
    var O;
    xe.extend(Mf), xe.extend(Bf);
    const r = t, n = e, i = De(), o = De(), s = De(), c = De(), u = De((O = n.modelValue) != null && O.length ? n.modelValue : void 0), l = ["日", "月", "火", "水", "木", "金", "土"], f = Du({
      year: !1,
      month: !1
    }), h = (R) => f[R] = !1;
    nr(i, () => h("year")), nr(o, () => h("month"));
    const m = Ue(() => Array.from({ length: 12 }, (R, I) => ({
      label: 1 + I + "月",
      value: 1 + I
    }))), b = Ue(() => {
      const R = xe(u.value).year(), I = R - 100, q = R + 100, j = [];
      for (let F = I; F <= q; F++)
        j.push({
          label: F + "年",
          value: F
        });
      return j;
    }), g = (R) => {
      u.value = xe(xe(u.value || void 0)).year(R).format("YYYY-MM-DD"), setTimeout(() => f.year = !1, 10);
    }, d = (R) => {
      u.value = xe(xe(u.value || void 0)).month(R - 1).format("YYYY-MM-DD"), setTimeout(() => f.month = !1, 10);
    }, a = Ue(() => xe(u.value).year()), w = Ue(() => xe(u.value).month() + 1), y = Ue(() => {
      const R = xe(u.value).startOf("month"), I = xe(u.value).endOf("month"), q = R.weekday(0), j = I.weekday(6), F = [];
      let V = q;
      for (; V.isSameOrBefore(j); ) {
        const W = [];
        for (let B = 0; B < 7; B++)
          W.push({
            date: V.date(),
            fullDate: V.format("YYYY-MM-DD"),
            isCurrentMonth: V.month() === xe(u.value).month(),
            isCurrentDate: V.isSame(xe(n.modelValue || void 0), "date"),
            isHoliday: V.day() === 0 || V.day() === 6,
            isToday: V.isSame(xe(), "day")
          }), V = V.add(1, "day");
        F.push(W);
      }
      let oe = j.add(1, "day");
      for (; F.length < 6; ) {
        const W = [];
        for (let B = 0; B < 7; B++)
          W.push({
            date: oe.date(),
            fullDate: oe.format("YYYY-MM-DD"),
            isCurrentMonth: oe.month() === xe(u.value).month(),
            isCurrentDate: oe.isSame(xe(n.modelValue || void 0), "date"),
            isHoliday: oe.day() === 0 || oe.day() === 6,
            isToday: oe.isSame(xe(), "day")
          }), oe = oe.add(1, "day");
        F.push(W);
      }
      return F;
    }), S = () => u.value = xe(u.value).subtract(1, "month").format("YYYY-MM-DD"), E = () => u.value = xe(u.value).add(1, "month").format("YYYY-MM-DD"), P = (R) => {
      r("update:modelValue", R || ""), r("close", !0);
    };
    return (R, I) => (X(), J("div", Lf, [
      le("div", Uf, [
        le("button", {
          class: "kvc-datepicker-control-prev",
          onClick: S
        }, [
          ct(Pe(Ot), {
            icon: "mdi-light:chevron-left",
            height: "32"
          })
        ]),
        le("div", Wf, [
          le("div", Vf, [
            le("button", {
              type: "button",
              ref_key: "yearRef",
              ref: i,
              class: "kvc-datepicker-control-selector",
              onClick: I[0] || (I[0] = (q) => f.year = !f.year)
            }, [
              le("span", Hf, Qe(a.value) + "年", 1),
              ct(Pe(Ot), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.year ? (X(), an(Wr, {
                key: 0,
                ref_key: "yearListRef",
                ref: s,
                class: "kvc-datepicker-controll-selector-list",
                items: b.value,
                "model-value": Pe(xe)(u.value).year(),
                "max-height": 300,
                onChange: g
              }, null, 8, ["items", "model-value"])) : We("", !0)
            ], 512)
          ]),
          le("div", Gf, [
            le("button", {
              type: "button",
              ref_key: "monthRef",
              ref: o,
              class: "kvc-datepicker-control-selector",
              onClick: I[1] || (I[1] = (q) => f.month = !f.month)
            }, [
              le("span", Kf, Qe(w.value) + "月", 1),
              ct(Pe(Ot), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.month ? (X(), an(Wr, {
                key: 0,
                ref_key: "monthListRef",
                ref: c,
                class: "kvc-datepicker-controll-selector-list",
                items: m.value,
                "model-value": Pe(xe)(u.value).month() + 1,
                onChange: d
              }, null, 8, ["items", "model-value"])) : We("", !0)
            ], 512)
          ])
        ]),
        le("button", {
          class: "kvc-datepicker-control-next",
          onClick: E
        }, [
          ct(Pe(Ot), {
            icon: "mdi-light:chevron-right",
            height: "32"
          })
        ])
      ]),
      le("table", zf, [
        le("thead", null, [
          le("tr", null, [
            (X(), J(dt, null, vt(l, (q) => le("th", {
              key: q,
              class: Ze(["kvc-datepicker-day", {
                "kvc-datepicker-day-saturday": q == "土",
                "kvc-datepicker-day-sunday": q == "日"
              }])
            }, Qe(q), 3)), 64))
          ])
        ]),
        le("tbody", null, [
          (X(!0), J(dt, null, vt(y.value, (q, j) => (X(), J("tr", { key: j }, [
            (X(!0), J(dt, null, vt(q, (F) => (X(), J("td", {
              key: F.date
            }, [
              le("button", {
                type: "button",
                class: Ze(["kvc-datepicker-date", {
                  "kvc-datepicker-date-notcurrent-month": !F.isCurrentMonth,
                  "kvc-datepicker-date-today": F.isToday,
                  "kvc-datepicker-date-current": F.isCurrentDate
                }]),
                onClick: (V) => P(F.fullDate)
              }, Qe(F.date), 11, Yf)
            ]))), 128))
          ]))), 128))
        ])
      ]),
      le("div", Xf, [
        le("button", {
          type: "button",
          class: "kvc-datepicker-bottom-today",
          onClick: I[2] || (I[2] = (q) => P(Pe(xe)().format("YYYY-MM-DD")))
        }, "今日"),
        le("button", {
          type: "button",
          class: "kvc-datepicker-bottom-clear",
          onClick: I[3] || (I[3] = (q) => P())
        }, "選択を解除")
      ])
    ]));
  }
}, Qf = { class: "kvc-date-picker" }, bl = {
  __name: "date-picker",
  props: {
    modelValue: { type: String, default: "" },
    readOnly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    nonstyled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = Ue({
      get: () => n.modelValue,
      set: (b) => {
        r("update:modelValue", b), r("change", b);
      }
    }), o = (b) => {
      /^\d{4}-\d{2}-\d{2}$/.test(b.target.value) || (r("update:modelValue", ""), r("change", ""));
    }, s = De(!1), c = De(!1), u = De(), l = De(), f = () => {
      s.value = !0, c.value = !0;
    }, h = () => {
      s.value = !1;
    }, m = () => {
      c.value = !1, s.value = !1;
    };
    return nr(l, (b) => {
      s.value || (c.value = !1, s.value = !1);
    }), (b, g) => (X(), J("div", Qf, [
      ct(Pe(Mo), {
        "read-only": e.readOnly,
        disabled: e.disabled,
        nonstyled: e.nonstyled,
        modelValue: i.value,
        "onUpdate:modelValue": g[0] || (g[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: u,
        class: Ze(["text-center", e.readOnly ? "w-28" : "max-w-28"]),
        onFocus: f,
        onBlur: h,
        onChange: o
      }, null, 8, ["read-only", "disabled", "nonstyled", "modelValue", "class"]),
      e.readOnly || e.disabled ? We("", !0) : sn((X(), an(Jf, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": g[1] || (g[1] = (d) => i.value = d),
        ref_key: "calendarRef",
        ref: l,
        onClose: m
      }, null, 8, ["modelValue"])), [
        [To, c.value]
      ])
    ]));
  }
}, Zf = { class: "kvc-time-picker" }, wl = {
  __name: "time-picker",
  props: {
    modelValue: { type: String, default: "" },
    readOnly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = Ue({
      get: () => n.modelValue,
      set: (b) => {
        r("update:modelValue", b), r("change", b);
      }
    }), o = (b) => {
      /^\d{2}-\d{2}$/.test(b.target.value) || (r("update:modelValue", ""), r("change", ""));
    }, s = Ue(() => {
      const b = [];
      for (let g = 0; g < 24; g++)
        for (let d = 0; d < 60; d += 30) {
          const a = `${d === 0 ? "00" : "30"}`;
          b.push({
            label: `${g}:${a}`,
            value: `${g.toString().padStart(2, "0")}:${a}`
          });
        }
      return b;
    }), c = De(!1), u = De(!1), l = De(), f = De(), h = () => {
      c.value = !0, u.value = !0;
    }, m = () => {
      c.value = !1;
    };
    return nr(f, (b) => {
      c.value || (u.value = !1, c.value = !1);
    }), (b, g) => (X(), J("div", Zf, [
      ct(Pe(Mo), {
        "read-only": e.readOnly,
        disabled: e.disabled,
        modelValue: i.value,
        "onUpdate:modelValue": g[0] || (g[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: l,
        class: Ze(e.readOnly ? "w-16 text-left" : "max-w-20 text-center"),
        onFocus: h,
        onBlur: m,
        onChange: o
      }, null, 8, ["read-only", "disabled", "modelValue", "class"]),
      e.readOnly || e.disabled ? We("", !0) : sn((X(), an(Wr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": g[1] || (g[1] = (d) => i.value = d),
        ref_key: "timeRef",
        ref: f,
        items: s.value,
        "max-height": 183,
        onChange: g[2] || (g[2] = (d) => u.value = !1)
      }, null, 8, ["modelValue", "items"])), [
        [To, u.value]
      ])
    ]));
  }
};
var Ir = { exports: {} }, ed = Ir.exports, Ra;
function td() {
  return Ra || (Ra = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(ed, function() {
      var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
      return function(o, s, c) {
        var u = s.prototype;
        c.utc = function(d) {
          var a = { date: d, utc: !0, args: arguments };
          return new s(a);
        }, u.utc = function(d) {
          var a = c(this.toDate(), { locale: this.$L, utc: !0 });
          return d ? a.add(this.utcOffset(), r) : a;
        }, u.local = function() {
          return c(this.toDate(), { locale: this.$L, utc: !1 });
        };
        var l = u.parse;
        u.parse = function(d) {
          d.utc && (this.$u = !0), this.$utils().u(d.$offset) || (this.$offset = d.$offset), l.call(this, d);
        };
        var f = u.init;
        u.init = function() {
          if (this.$u) {
            var d = this.$d;
            this.$y = d.getUTCFullYear(), this.$M = d.getUTCMonth(), this.$D = d.getUTCDate(), this.$W = d.getUTCDay(), this.$H = d.getUTCHours(), this.$m = d.getUTCMinutes(), this.$s = d.getUTCSeconds(), this.$ms = d.getUTCMilliseconds();
          } else f.call(this);
        };
        var h = u.utcOffset;
        u.utcOffset = function(d, a) {
          var w = this.$utils().u;
          if (w(d)) return this.$u ? 0 : w(this.$offset) ? h.call(this) : this.$offset;
          if (typeof d == "string" && (d = function(P) {
            P === void 0 && (P = "");
            var O = P.match(n);
            if (!O) return null;
            var R = ("" + O[0]).match(i) || ["-", 0, 0], I = R[0], q = 60 * +R[1] + +R[2];
            return q === 0 ? 0 : I === "+" ? q : -q;
          }(d), d === null)) return this;
          var y = Math.abs(d) <= 16 ? 60 * d : d, S = this;
          if (a) return S.$offset = y, S.$u = d === 0, S;
          if (d !== 0) {
            var E = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (S = this.local().add(y + E, r)).$offset = y, S.$x.$localOffset = E;
          } else S = this.utc();
          return S;
        };
        var m = u.format;
        u.format = function(d) {
          var a = d || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return m.call(this, a);
        }, u.valueOf = function() {
          var d = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * d;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var b = u.toDate;
        u.toDate = function(d) {
          return d === "s" && this.$offset ? c(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : b.call(this);
        };
        var g = u.diff;
        u.diff = function(d, a, w) {
          if (d && this.$u === d.$u) return g.call(this, d, a, w);
          var y = this.local(), S = c(d).local();
          return g.call(y, S, a, w);
        };
      };
    });
  }(Ir)), Ir.exports;
}
var nd = td();
const rd = /* @__PURE__ */ In(nd);
var $r = { exports: {} }, id = $r.exports, Pa;
function od() {
  return Pa || (Pa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(id, function() {
      var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
      return function(i, o, s) {
        var c, u = function(m, b, g) {
          g === void 0 && (g = {});
          var d = new Date(m), a = function(w, y) {
            y === void 0 && (y = {});
            var S = y.timeZoneName || "short", E = w + "|" + S, P = n[E];
            return P || (P = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: w, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: S }), n[E] = P), P;
          }(b, g);
          return a.formatToParts(d);
        }, l = function(m, b) {
          for (var g = u(m, b), d = [], a = 0; a < g.length; a += 1) {
            var w = g[a], y = w.type, S = w.value, E = r[y];
            E >= 0 && (d[E] = parseInt(S, 10));
          }
          var P = d[3], O = P === 24 ? 0 : P, R = d[0] + "-" + d[1] + "-" + d[2] + " " + O + ":" + d[4] + ":" + d[5] + ":000", I = +m;
          return (s.utc(R).valueOf() - (I -= I % 1e3)) / 6e4;
        }, f = o.prototype;
        f.tz = function(m, b) {
          m === void 0 && (m = c);
          var g, d = this.utcOffset(), a = this.toDate(), w = a.toLocaleString("en-US", { timeZone: m }), y = Math.round((a - new Date(w)) / 1e3 / 60), S = 15 * -Math.round(a.getTimezoneOffset() / 15) - y;
          if (!Number(S)) g = this.utcOffset(0, b);
          else if (g = s(w, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(S, !0), b) {
            var E = g.utcOffset();
            g = g.add(d - E, "minute");
          }
          return g.$x.$timezone = m, g;
        }, f.offsetName = function(m) {
          var b = this.$x.$timezone || s.tz.guess(), g = u(this.valueOf(), b, { timeZoneName: m }).find(function(d) {
            return d.type.toLowerCase() === "timezonename";
          });
          return g && g.value;
        };
        var h = f.startOf;
        f.startOf = function(m, b) {
          if (!this.$x || !this.$x.$timezone) return h.call(this, m, b);
          var g = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return h.call(g, m, b).tz(this.$x.$timezone, !0);
        }, s.tz = function(m, b, g) {
          var d = g && b, a = g || b || c, w = l(+s(), a);
          if (typeof m != "string") return s(m).tz(a);
          var y = function(O, R, I) {
            var q = O - 60 * R * 1e3, j = l(q, I);
            if (R === j) return [q, R];
            var F = l(q -= 60 * (j - R) * 1e3, I);
            return j === F ? [q, j] : [O - 60 * Math.min(j, F) * 1e3, Math.max(j, F)];
          }(s.utc(m, d).valueOf(), w, a), S = y[0], E = y[1], P = s(S).utcOffset(E);
          return P.$x.$timezone = a, P;
        }, s.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, s.tz.setDefault = function(m) {
          c = m;
        };
      };
    });
  }($r)), $r.exports;
}
var ad = od();
const sd = /* @__PURE__ */ In(ad);
var Nr = { exports: {} }, ld = Nr.exports, Ca;
function ud() {
  return Ca || (Ca = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(ld, function() {
      return function(r, n, i) {
        var o = n.prototype, s = function(m) {
          var b, g = m.date, d = m.utc, a = {};
          if (!((b = g) === null || b instanceof Date || b instanceof Array || o.$utils().u(b) || b.constructor.name !== "Object")) {
            if (!Object.keys(g).length) return /* @__PURE__ */ new Date();
            var w = d ? i.utc() : i();
            Object.keys(g).forEach(function(q) {
              var j, F;
              a[j = q, F = o.$utils().p(j), F === "date" ? "day" : F] = g[q];
            });
            var y = a.day || (a.year || a.month >= 0 ? 1 : w.date()), S = a.year || w.year(), E = a.month >= 0 ? a.month : a.year || a.day ? 0 : w.month(), P = a.hour || 0, O = a.minute || 0, R = a.second || 0, I = a.millisecond || 0;
            return d ? new Date(Date.UTC(S, E, y, P, O, R, I)) : new Date(S, E, y, P, O, R, I);
          }
          return g;
        }, c = o.parse;
        o.parse = function(m) {
          m.date = s.bind(this)(m), c.bind(this)(m);
        };
        var u = o.set, l = o.add, f = o.subtract, h = function(m, b, g, d) {
          d === void 0 && (d = 1);
          var a = Object.keys(b), w = this;
          return a.forEach(function(y) {
            w = m.bind(w)(b[y] * d, y);
          }), w;
        };
        o.set = function(m, b) {
          return b = b === void 0 ? m : b, m.constructor.name === "Object" ? h.bind(this)(function(g, d) {
            return u.bind(this)(d, g);
          }, b, m) : u.bind(this)(m, b);
        }, o.add = function(m, b) {
          return m.constructor.name === "Object" ? h.bind(this)(l, m, b) : l.bind(this)(m, b);
        }, o.subtract = function(m, b) {
          return m.constructor.name === "Object" ? h.bind(this)(l, m, b, -1) : f.bind(this)(m, b);
        };
      };
    });
  }(Nr)), Nr.exports;
}
var cd = ud();
const fd = /* @__PURE__ */ In(cd), dd = { class: "kvc-datetime-picker" }, pd = {
  __name: "datetime-picker",
  props: {
    modelValue: { type: String, default: void 0 },
    readOnly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    nonstyled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    xe.extend(rd), xe.extend(sd), xe.extend(fd), xe.tz.setDefault("Asia/Tokyo");
    const r = t, n = e, i = Ue(() => n.modelValue && xe(n.modelValue).isValid()), o = Ue(() => i.value ? xe(n.modelValue) : void 0), s = (u) => {
      if (u && xe(u).isValid()) {
        const [l, f, h] = u.split("-"), m = o.value ? xe(o.value).year(l).month(f - 1).date(h) : xe({ year: l, month: f - 1, date: h });
        r("update:modelValue", m.toISOString());
      } else
        r("update:modelValue", void 0);
    }, c = (u) => {
      if (u) {
        const [l, f] = u.split(":");
        if (l && f) {
          const h = o.value ? xe(o.value).hour(Number(l)).minute(Number(f)) : xe({ hour: l, minute: f });
          r("update:modelValue", h.toISOString());
        } else
          r("update:modelValue", void 0);
      } else
        r("update:modelValue", void 0);
    };
    return (u, l) => (X(), J("div", dd, [
      e.readOnly ? (X(), J("p", {
        key: 0,
        class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }])
      }, Qe(e.modelValue && Pe(xe)(e.modelValue).isValid() ? Pe(xe)(e.modelValue).format("YYYY-MM-DD HH:mm") : " "), 3)) : (X(), J(dt, { key: 1 }, [
        ct(Pe(bl), {
          "model-value": o.value ? o.value.format("YYYY-MM-DD") : void 0,
          disabled: e.disabled,
          onChange: s
        }, null, 8, ["model-value", "disabled"]),
        ct(Pe(wl), {
          "model-value": o.value ? o.value.format("HH:mm") : void 0,
          disabled: e.disabled,
          onChange: c
        }, null, 8, ["model-value", "disabled"])
      ], 64))
    ]));
  }
}, hd = ["innerHTML"], md = {
  __name: "textarea",
  props: {
    modelValue: { type: String, default: "" },
    nonstyled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    width: { type: String, default: "150px" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = Ue({
      get: () => n.modelValue,
      set: (o) => r("update:modelValue", o)
    });
    return (o, s) => e.readOnly ? (X(), J("p", {
      key: 0,
      class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
      innerHTML: (i.value || " ").replace(/\n/g, "<br>")
    }, null, 10, hd)) : sn((X(), J("textarea", {
      key: 1,
      class: "kvc-field-text",
      "onUpdate:modelValue": s[0] || (s[0] = (c) => i.value = c)
    }, null, 512)), [
      [Tu, i.value]
    ]);
  }
};
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ka(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ka(Object(r), !0).forEach(function(n) {
      yd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ka(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mr = function(t) {
    return typeof t;
  } : Mr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mr(e);
}
function yd(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function jt() {
  return jt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jt.apply(this, arguments);
}
function vd(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function gd(e, t) {
  if (e == null) return {};
  var r = vd(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var bd = "1.15.6";
function Mt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var qt = Mt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ir = Mt(/Edge/i), Da = Mt(/firefox/i), Xn = Mt(/safari/i) && !Mt(/chrome/i) && !Mt(/android/i), jo = Mt(/iP(ad|od|hone)/i), Sl = Mt(/chrome/i) && Mt(/android/i), xl = {
  capture: !1,
  passive: !1
};
function Se(e, t, r) {
  e.addEventListener(t, r, !qt && xl);
}
function be(e, t, r) {
  e.removeEventListener(t, r, !qt && xl);
}
function Vr(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function _l(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function yt(e, t, r, n) {
  if (e) {
    r = r || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === r && Vr(e, t) : Vr(e, t)) || n && e === r)
        return e;
      if (e === r) break;
    } while (e = _l(e));
  }
  return null;
}
var Ta = /\s+/g;
function lt(e, t, r) {
  if (e && t)
    if (e.classList)
      e.classList[r ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ").replace(Ta, " ").replace(" " + t + " ", " ");
      e.className = (n + (r ? " " + t : "")).replace(Ta, " ");
    }
}
function ae(e, t, r) {
  var n = e && e.style;
  if (n) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (r = e.currentStyle), t === void 0 ? r : r[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = r + (typeof r == "string" ? "" : "px");
  }
}
function kn(e, t) {
  var r = "";
  if (typeof e == "string")
    r = e;
  else
    do {
      var n = ae(e, "transform");
      n && n !== "none" && (r = n + " " + r);
    } while (!t && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(r);
}
function El(e, t, r) {
  if (e) {
    var n = e.getElementsByTagName(t), i = 0, o = n.length;
    if (r)
      for (; i < o; i++)
        r(n[i], i);
    return n;
  }
  return [];
}
function At() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Le(e, t, r, n, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, s, c, u, l, f, h;
    if (e !== window && e.parentNode && e !== At() ? (o = e.getBoundingClientRect(), s = o.top, c = o.left, u = o.bottom, l = o.right, f = o.height, h = o.width) : (s = 0, c = 0, u = window.innerHeight, l = window.innerWidth, f = window.innerHeight, h = window.innerWidth), (t || r) && e !== window && (i = i || e.parentNode, !qt))
      do
        if (i && i.getBoundingClientRect && (ae(i, "transform") !== "none" || r && ae(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          s -= m.top + parseInt(ae(i, "border-top-width")), c -= m.left + parseInt(ae(i, "border-left-width")), u = s + o.height, l = c + o.width;
          break;
        }
      while (i = i.parentNode);
    if (n && e !== window) {
      var b = kn(i || e), g = b && b.a, d = b && b.d;
      b && (s /= d, c /= g, h /= g, f /= d, u = s + f, l = c + h);
    }
    return {
      top: s,
      left: c,
      bottom: u,
      right: l,
      width: h,
      height: f
    };
  }
}
function Ia(e, t, r) {
  for (var n = Yt(e, !0), i = Le(e)[t]; n; ) {
    var o = Le(n)[r], s = void 0;
    if (s = i >= o, !s) return n;
    if (n === At()) break;
    n = Yt(n, !1);
  }
  return !1;
}
function Tn(e, t, r, n) {
  for (var i = 0, o = 0, s = e.children; o < s.length; ) {
    if (s[o].style.display !== "none" && s[o] !== se.ghost && (n || s[o] !== se.dragged) && yt(s[o], r.draggable, e, !1)) {
      if (i === t)
        return s[o];
      i++;
    }
    o++;
  }
  return null;
}
function qo(e, t) {
  for (var r = e.lastElementChild; r && (r === se.ghost || ae(r, "display") === "none" || t && !Vr(r, t)); )
    r = r.previousElementSibling;
  return r || null;
}
function ft(e, t) {
  var r = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== se.clone && (!t || Vr(e, t)) && r++;
  return r;
}
function $a(e) {
  var t = 0, r = 0, n = At();
  if (e)
    do {
      var i = kn(e), o = i.a, s = i.d;
      t += e.scrollLeft * o, r += e.scrollTop * s;
    } while (e !== n && (e = e.parentNode));
  return [t, r];
}
function wd(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === e[r][n]) return Number(r);
    }
  return -1;
}
function Yt(e, t) {
  if (!e || !e.getBoundingClientRect) return At();
  var r = e, n = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var i = ae(r);
      if (r.clientWidth < r.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return At();
        if (n || t) return r;
        n = !0;
      }
    }
  while (r = r.parentNode);
  return At();
}
function Sd(e, t) {
  if (e && t)
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
function mi(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Jn;
function Ol(e, t) {
  return function() {
    if (!Jn) {
      var r = arguments, n = this;
      r.length === 1 ? e.call(n, r[0]) : e.apply(n, r), Jn = setTimeout(function() {
        Jn = void 0;
      }, t);
    }
  };
}
function xd() {
  clearTimeout(Jn), Jn = void 0;
}
function Al(e, t, r) {
  e.scrollLeft += t, e.scrollTop += r;
}
function Rl(e) {
  var t = window.Polymer, r = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : r ? r(e).clone(!0)[0] : e.cloneNode(!0);
}
function Pl(e, t, r) {
  var n = {};
  return Array.from(e.children).forEach(function(i) {
    var o, s, c, u;
    if (!(!yt(i, t.draggable, e, !1) || i.animated || i === r)) {
      var l = Le(i);
      n.left = Math.min((o = n.left) !== null && o !== void 0 ? o : 1 / 0, l.left), n.top = Math.min((s = n.top) !== null && s !== void 0 ? s : 1 / 0, l.top), n.right = Math.max((c = n.right) !== null && c !== void 0 ? c : -1 / 0, l.right), n.bottom = Math.max((u = n.bottom) !== null && u !== void 0 ? u : -1 / 0, l.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var ot = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function _d() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(ae(i, "display") === "none" || i === se.ghost)) {
            e.push({
              target: i,
              rect: Le(i)
            });
            var o = Rt({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var s = kn(i, !0);
              s && (o.top -= s.f, o.left -= s.e);
            }
            i.fromRect = o;
          }
        });
      }
    },
    addAnimationState: function(n) {
      e.push(n);
    },
    removeAnimationState: function(n) {
      e.splice(wd(e, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var o = !1, s = 0;
      e.forEach(function(c) {
        var u = 0, l = c.target, f = l.fromRect, h = Le(l), m = l.prevFromRect, b = l.prevToRect, g = c.rect, d = kn(l, !0);
        d && (h.top -= d.f, h.left -= d.e), l.toRect = h, l.thisAnimationDuration && mi(m, h) && !mi(f, h) && // Make sure animatingRect is on line between toRect & fromRect
        (g.top - h.top) / (g.left - h.left) === (f.top - h.top) / (f.left - h.left) && (u = Od(g, m, b, i.options)), mi(h, f) || (l.prevFromRect = f, l.prevToRect = h, u || (u = i.options.animation), i.animate(l, g, h, u)), u && (o = !0, s = Math.max(s, u), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, u), l.thisAnimationDuration = u);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, s) : typeof n == "function" && n(), e = [];
    },
    animate: function(n, i, o, s) {
      if (s) {
        ae(n, "transition", ""), ae(n, "transform", "");
        var c = kn(this.el), u = c && c.a, l = c && c.d, f = (i.left - o.left) / (u || 1), h = (i.top - o.top) / (l || 1);
        n.animatingX = !!f, n.animatingY = !!h, ae(n, "transform", "translate3d(" + f + "px," + h + "px,0)"), this.forRepaintDummy = Ed(n), ae(n, "transition", "transform " + s + "ms" + (this.options.easing ? " " + this.options.easing : "")), ae(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          ae(n, "transition", ""), ae(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, s);
      }
    }
  };
}
function Ed(e) {
  return e.offsetWidth;
}
function Od(e, t, r, n) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) * n.animation;
}
var vn = [], yi = {
  initializeByDefault: !0
}, or = {
  mount: function(t) {
    for (var r in yi)
      yi.hasOwnProperty(r) && !(r in t) && (t[r] = yi[r]);
    vn.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), vn.push(t);
  },
  pluginEvent: function(t, r, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var o = t + "Global";
    vn.forEach(function(s) {
      r[s.pluginName] && (r[s.pluginName][o] && r[s.pluginName][o](Rt({
        sortable: r
      }, n)), r.options[s.pluginName] && r[s.pluginName][t] && r[s.pluginName][t](Rt({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(t, r, n, i) {
    vn.forEach(function(c) {
      var u = c.pluginName;
      if (!(!t.options[u] && !c.initializeByDefault)) {
        var l = new c(t, r, t.options);
        l.sortable = t, l.options = t.options, t[u] = l, jt(n, l.defaults);
      }
    });
    for (var o in t.options)
      if (t.options.hasOwnProperty(o)) {
        var s = this.modifyOption(t, o, t.options[o]);
        typeof s < "u" && (t.options[o] = s);
      }
  },
  getEventProperties: function(t, r) {
    var n = {};
    return vn.forEach(function(i) {
      typeof i.eventProperties == "function" && jt(n, i.eventProperties.call(r[i.pluginName], t));
    }), n;
  },
  modifyOption: function(t, r, n) {
    var i;
    return vn.forEach(function(o) {
      t[o.pluginName] && o.optionListeners && typeof o.optionListeners[r] == "function" && (i = o.optionListeners[r].call(t[o.pluginName], n));
    }), i;
  }
};
function Ad(e) {
  var t = e.sortable, r = e.rootEl, n = e.name, i = e.targetEl, o = e.cloneEl, s = e.toEl, c = e.fromEl, u = e.oldIndex, l = e.newIndex, f = e.oldDraggableIndex, h = e.newDraggableIndex, m = e.originalEvent, b = e.putSortable, g = e.extraEventProperties;
  if (t = t || r && r[ot], !!t) {
    var d, a = t.options, w = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !qt && !ir ? d = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(n, !0, !0)), d.to = s || r, d.from = c || r, d.item = i || r, d.clone = o, d.oldIndex = u, d.newIndex = l, d.oldDraggableIndex = f, d.newDraggableIndex = h, d.originalEvent = m, d.pullMode = b ? b.lastPutMode : void 0;
    var y = Rt(Rt({}, g), or.getEventProperties(n, t));
    for (var S in y)
      d[S] = y[S];
    r && r.dispatchEvent(d), a[w] && a[w].call(t, d);
  }
}
var Rd = ["evt"], it = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, o = gd(n, Rd);
  or.pluginEvent.bind(se)(t, r, Rt({
    dragEl: H,
    parentEl: Ne,
    ghostEl: ce,
    rootEl: Te,
    nextEl: on,
    lastDownEl: jr,
    cloneEl: Ie,
    cloneHidden: Kt,
    dragStarted: Gn,
    putSortable: Ye,
    activeSortable: se.active,
    originalEvent: i,
    oldIndex: Cn,
    oldDraggableIndex: Qn,
    newIndex: ut,
    newDraggableIndex: Gt,
    hideGhostForTarget: Tl,
    unhideGhostForTarget: Il,
    cloneNowHidden: function() {
      Kt = !0;
    },
    cloneNowShown: function() {
      Kt = !1;
    },
    dispatchSortableEvent: function(c) {
      tt({
        sortable: r,
        name: c,
        originalEvent: i
      });
    }
  }, o));
};
function tt(e) {
  Ad(Rt({
    putSortable: Ye,
    cloneEl: Ie,
    targetEl: H,
    rootEl: Te,
    oldIndex: Cn,
    oldDraggableIndex: Qn,
    newIndex: ut,
    newDraggableIndex: Gt
  }, e));
}
var H, Ne, ce, Te, on, jr, Ie, Kt, Cn, ut, Qn, Gt, _r, Ye, Rn = !1, Hr = !1, Gr = [], en, ht, vi, gi, Na, Ma, Gn, gn, Zn, er = !1, Er = !1, qr, Je, bi = [], Ro = !1, Kr = [], Qr = typeof document < "u", Or = jo, ja = ir || qt ? "cssFloat" : "float", Pd = Qr && !Sl && !jo && "draggable" in document.createElement("div"), Cl = function() {
  if (Qr) {
    if (qt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), kl = function(t, r) {
  var n = ae(t), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), o = Tn(t, 0, r), s = Tn(t, 1, r), c = o && ae(o), u = s && ae(s), l = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + Le(o).width, f = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + Le(s).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && c.float && c.float !== "none") {
    var h = c.float === "left" ? "left" : "right";
    return s && (u.clear === "both" || u.clear === h) ? "vertical" : "horizontal";
  }
  return o && (c.display === "block" || c.display === "flex" || c.display === "table" || c.display === "grid" || l >= i && n[ja] === "none" || s && n[ja] === "none" && l + f > i) ? "vertical" : "horizontal";
}, Cd = function(t, r, n) {
  var i = n ? t.left : t.top, o = n ? t.right : t.bottom, s = n ? t.width : t.height, c = n ? r.left : r.top, u = n ? r.right : r.bottom, l = n ? r.width : r.height;
  return i === c || o === u || i + s / 2 === c + l / 2;
}, kd = function(t, r) {
  var n;
  return Gr.some(function(i) {
    var o = i[ot].options.emptyInsertThreshold;
    if (!(!o || qo(i))) {
      var s = Le(i), c = t >= s.left - o && t <= s.right + o, u = r >= s.top - o && r <= s.bottom + o;
      if (c && u)
        return n = i;
    }
  }), n;
}, Dl = function(t) {
  function r(o, s) {
    return function(c, u, l, f) {
      var h = c.options.group.name && u.options.group.name && c.options.group.name === u.options.group.name;
      if (o == null && (s || h))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (s && o === "clone")
        return o;
      if (typeof o == "function")
        return r(o(c, u, l, f), s)(c, u, l, f);
      var m = (s ? c : u).options.group.name;
      return o === !0 || typeof o == "string" && o === m || o.join && o.indexOf(m) > -1;
    };
  }
  var n = {}, i = t.group;
  (!i || Mr(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = r(i.pull, !0), n.checkPut = r(i.put), n.revertClone = i.revertClone, t.group = n;
}, Tl = function() {
  !Cl && ce && ae(ce, "display", "none");
}, Il = function() {
  !Cl && ce && ae(ce, "display", "");
};
Qr && !Sl && document.addEventListener("click", function(e) {
  if (Hr)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Hr = !1, !1;
}, !0);
var tn = function(t) {
  if (H) {
    t = t.touches ? t.touches[0] : t;
    var r = kd(t.clientX, t.clientY);
    if (r) {
      var n = {};
      for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[ot]._onDragOver(n);
    }
  }
}, Dd = function(t) {
  H && H.parentNode[ot]._isOutsideThisEl(t.target);
};
function se(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = jt({}, t), e[ot] = this;
  var r = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return kl(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(s, c) {
      s.setData("Text", c.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: se.supportPointer !== !1 && "PointerEvent" in window && (!Xn || jo),
    emptyInsertThreshold: 5
  };
  or.initializePlugins(this, e, r);
  for (var n in r)
    !(n in t) && (t[n] = r[n]);
  Dl(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Pd, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Se(e, "pointerdown", this._onTapStart) : (Se(e, "mousedown", this._onTapStart), Se(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Se(e, "dragover", this), Se(e, "dragenter", this)), Gr.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), jt(this, _d());
}
se.prototype = /** @lends Sortable.prototype */
{
  constructor: se,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (gn = null);
  },
  _getDirection: function(t, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, r, H) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var r = this, n = this.el, i = this.options, o = i.preventOnFilter, s = t.type, c = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, u = (c || t).target, l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || u, f = i.filter;
      if (Fd(n), !H && !(/mousedown|pointerdown/.test(s) && t.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Xn && u && u.tagName.toUpperCase() === "SELECT") && (u = yt(u, i.draggable, n, !1), !(u && u.animated) && jr !== u)) {
        if (Cn = ft(u), Qn = ft(u, i.draggable), typeof f == "function") {
          if (f.call(this, t, u, this)) {
            tt({
              sortable: r,
              rootEl: l,
              name: "filter",
              targetEl: u,
              toEl: n,
              fromEl: n
            }), it("filter", r, {
              evt: t
            }), o && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(h) {
          if (h = yt(l, h.trim(), n, !1), h)
            return tt({
              sortable: r,
              rootEl: h,
              name: "filter",
              targetEl: u,
              fromEl: n,
              toEl: n
            }), it("filter", r, {
              evt: t
            }), !0;
        }), f)) {
          o && t.preventDefault();
          return;
        }
        i.handle && !yt(l, i.handle, n, !1) || this._prepareDragStart(t, c, u);
      }
    }
  },
  _prepareDragStart: function(t, r, n) {
    var i = this, o = i.el, s = i.options, c = o.ownerDocument, u;
    if (n && !H && n.parentNode === o) {
      var l = Le(n);
      if (Te = o, H = n, Ne = H.parentNode, on = H.nextSibling, jr = n, _r = s.group, se.dragged = H, en = {
        target: H,
        clientX: (r || t).clientX,
        clientY: (r || t).clientY
      }, Na = en.clientX - l.left, Ma = en.clientY - l.top, this._lastX = (r || t).clientX, this._lastY = (r || t).clientY, H.style["will-change"] = "all", u = function() {
        if (it("delayEnded", i, {
          evt: t
        }), se.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Da && i.nativeDraggable && (H.draggable = !0), i._triggerDragStart(t, r), tt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), lt(H, s.chosenClass, !0);
      }, s.ignore.split(",").forEach(function(f) {
        El(H, f.trim(), wi);
      }), Se(c, "dragover", tn), Se(c, "mousemove", tn), Se(c, "touchmove", tn), s.supportPointer ? (Se(c, "pointerup", i._onDrop), !this.nativeDraggable && Se(c, "pointercancel", i._onDrop)) : (Se(c, "mouseup", i._onDrop), Se(c, "touchend", i._onDrop), Se(c, "touchcancel", i._onDrop)), Da && this.nativeDraggable && (this.options.touchStartThreshold = 4, H.draggable = !0), it("delayStart", this, {
        evt: t
      }), s.delay && (!s.delayOnTouchOnly || r) && (!this.nativeDraggable || !(ir || qt))) {
        if (se.eventCanceled) {
          this._onDrop();
          return;
        }
        s.supportPointer ? (Se(c, "pointerup", i._disableDelayedDrag), Se(c, "pointercancel", i._disableDelayedDrag)) : (Se(c, "mouseup", i._disableDelayedDrag), Se(c, "touchend", i._disableDelayedDrag), Se(c, "touchcancel", i._disableDelayedDrag)), Se(c, "mousemove", i._delayedDragTouchMoveHandler), Se(c, "touchmove", i._delayedDragTouchMoveHandler), s.supportPointer && Se(c, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(u, s.delay);
      } else
        u();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var r = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    H && wi(H), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    be(t, "mouseup", this._disableDelayedDrag), be(t, "touchend", this._disableDelayedDrag), be(t, "touchcancel", this._disableDelayedDrag), be(t, "pointerup", this._disableDelayedDrag), be(t, "pointercancel", this._disableDelayedDrag), be(t, "mousemove", this._delayedDragTouchMoveHandler), be(t, "touchmove", this._delayedDragTouchMoveHandler), be(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, r) {
    r = r || t.pointerType == "touch" && t, !this.nativeDraggable || r ? this.options.supportPointer ? Se(document, "pointermove", this._onTouchMove) : r ? Se(document, "touchmove", this._onTouchMove) : Se(document, "mousemove", this._onTouchMove) : (Se(H, "dragend", this), Se(Te, "dragstart", this._onDragStart));
    try {
      document.selection ? Fr(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, r) {
    if (Rn = !1, Te && H) {
      it("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && Se(document, "dragover", Dd);
      var n = this.options;
      !t && lt(H, n.dragClass, !1), lt(H, n.ghostClass, !0), se.active = this, t && this._appendGhost(), tt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ht) {
      this._lastX = ht.clientX, this._lastY = ht.clientY, Tl();
      for (var t = document.elementFromPoint(ht.clientX, ht.clientY), r = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(ht.clientX, ht.clientY), t !== r); )
        r = t;
      if (H.parentNode[ot]._isOutsideThisEl(t), r)
        do {
          if (r[ot]) {
            var n = void 0;
            if (n = r[ot]._onDragOver({
              clientX: ht.clientX,
              clientY: ht.clientY,
              target: t,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = r;
        } while (r = _l(r));
      Il();
    }
  },
  _onTouchMove: function(t) {
    if (en) {
      var r = this.options, n = r.fallbackTolerance, i = r.fallbackOffset, o = t.touches ? t.touches[0] : t, s = ce && kn(ce, !0), c = ce && s && s.a, u = ce && s && s.d, l = Or && Je && $a(Je), f = (o.clientX - en.clientX + i.x) / (c || 1) + (l ? l[0] - bi[0] : 0) / (c || 1), h = (o.clientY - en.clientY + i.y) / (u || 1) + (l ? l[1] - bi[1] : 0) / (u || 1);
      if (!se.active && !Rn) {
        if (n && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (ce) {
        s ? (s.e += f - (vi || 0), s.f += h - (gi || 0)) : s = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: h
        };
        var m = "matrix(".concat(s.a, ",").concat(s.b, ",").concat(s.c, ",").concat(s.d, ",").concat(s.e, ",").concat(s.f, ")");
        ae(ce, "webkitTransform", m), ae(ce, "mozTransform", m), ae(ce, "msTransform", m), ae(ce, "transform", m), vi = f, gi = h, ht = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ce) {
      var t = this.options.fallbackOnBody ? document.body : Te, r = Le(H, !0, Or, !0, t), n = this.options;
      if (Or) {
        for (Je = t; ae(Je, "position") === "static" && ae(Je, "transform") === "none" && Je !== document; )
          Je = Je.parentNode;
        Je !== document.body && Je !== document.documentElement ? (Je === document && (Je = At()), r.top += Je.scrollTop, r.left += Je.scrollLeft) : Je = At(), bi = $a(Je);
      }
      ce = H.cloneNode(!0), lt(ce, n.ghostClass, !1), lt(ce, n.fallbackClass, !0), lt(ce, n.dragClass, !0), ae(ce, "transition", ""), ae(ce, "transform", ""), ae(ce, "box-sizing", "border-box"), ae(ce, "margin", 0), ae(ce, "top", r.top), ae(ce, "left", r.left), ae(ce, "width", r.width), ae(ce, "height", r.height), ae(ce, "opacity", "0.8"), ae(ce, "position", Or ? "absolute" : "fixed"), ae(ce, "zIndex", "100000"), ae(ce, "pointerEvents", "none"), se.ghost = ce, t.appendChild(ce), ae(ce, "transform-origin", Na / parseInt(ce.style.width) * 100 + "% " + Ma / parseInt(ce.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, r) {
    var n = this, i = t.dataTransfer, o = n.options;
    if (it("dragStart", this, {
      evt: t
    }), se.eventCanceled) {
      this._onDrop();
      return;
    }
    it("setupClone", this), se.eventCanceled || (Ie = Rl(H), Ie.removeAttribute("id"), Ie.draggable = !1, Ie.style["will-change"] = "", this._hideClone(), lt(Ie, this.options.chosenClass, !1), se.clone = Ie), n.cloneId = Fr(function() {
      it("clone", n), !se.eventCanceled && (n.options.removeCloneOnHide || Te.insertBefore(Ie, H), n._hideClone(), tt({
        sortable: n,
        name: "clone"
      }));
    }), !r && lt(H, o.dragClass, !0), r ? (Hr = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (be(document, "mouseup", n._onDrop), be(document, "touchend", n._onDrop), be(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(n, i, H)), Se(document, "drop", n), ae(H, "transform", "translateZ(0)")), Rn = !0, n._dragStartId = Fr(n._dragStarted.bind(n, r, t)), Se(document, "selectstart", n), Gn = !0, window.getSelection().removeAllRanges(), Xn && ae(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var r = this.el, n = t.target, i, o, s, c = this.options, u = c.group, l = se.active, f = _r === u, h = c.sort, m = Ye || l, b, g = this, d = !1;
    if (Ro) return;
    function a(M, Q) {
      it(M, g, Rt({
        evt: t,
        isOwner: f,
        axis: b ? "vertical" : "horizontal",
        revert: s,
        dragRect: i,
        targetRect: o,
        canSort: h,
        fromSortable: m,
        target: n,
        completed: y,
        onMove: function(fe, me) {
          return Ar(Te, r, H, i, fe, Le(fe), t, me);
        },
        changed: S
      }, Q));
    }
    function w() {
      a("dragOverAnimationCapture"), g.captureAnimationState(), g !== m && m.captureAnimationState();
    }
    function y(M) {
      return a("dragOverCompleted", {
        insertion: M
      }), M && (f ? l._hideClone() : l._showClone(g), g !== m && (lt(H, Ye ? Ye.options.ghostClass : l.options.ghostClass, !1), lt(H, c.ghostClass, !0)), Ye !== g && g !== se.active ? Ye = g : g === se.active && Ye && (Ye = null), m === g && (g._ignoreWhileAnimating = n), g.animateAll(function() {
        a("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === H && !H.animated || n === r && !n.animated) && (gn = null), !c.dragoverBubble && !t.rootEl && n !== document && (H.parentNode[ot]._isOutsideThisEl(t.target), !M && tn(t)), !c.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function S() {
      ut = ft(H), Gt = ft(H, c.draggable), tt({
        sortable: g,
        name: "change",
        toEl: r,
        newIndex: ut,
        newDraggableIndex: Gt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = yt(n, c.draggable, r, !0), a("dragOver"), se.eventCanceled) return d;
    if (H.contains(t.target) || n.animated && n.animatingX && n.animatingY || g._ignoreWhileAnimating === n)
      return y(!1);
    if (Hr = !1, l && !c.disabled && (f ? h || (s = Ne !== Te) : Ye === this || (this.lastPutMode = _r.checkPull(this, l, H, t)) && u.checkPut(this, l, H, t))) {
      if (b = this._getDirection(t, n) === "vertical", i = Le(H), a("dragOverValid"), se.eventCanceled) return d;
      if (s)
        return Ne = Te, w(), this._hideClone(), a("revert"), se.eventCanceled || (on ? Te.insertBefore(H, on) : Te.appendChild(H)), y(!0);
      var E = qo(r, c.draggable);
      if (!E || Nd(t, b, this) && !E.animated) {
        if (E === H)
          return y(!1);
        if (E && r === t.target && (n = E), n && (o = Le(n)), Ar(Te, r, H, i, n, o, t, !!n) !== !1)
          return w(), E && E.nextSibling ? r.insertBefore(H, E.nextSibling) : r.appendChild(H), Ne = r, S(), y(!0);
      } else if (E && $d(t, b, this)) {
        var P = Tn(r, 0, c, !0);
        if (P === H)
          return y(!1);
        if (n = P, o = Le(n), Ar(Te, r, H, i, n, o, t, !1) !== !1)
          return w(), r.insertBefore(H, P), Ne = r, S(), y(!0);
      } else if (n.parentNode === r) {
        o = Le(n);
        var O = 0, R, I = H.parentNode !== r, q = !Cd(H.animated && H.toRect || i, n.animated && n.toRect || o, b), j = b ? "top" : "left", F = Ia(n, "top", "top") || Ia(H, "top", "top"), V = F ? F.scrollTop : void 0;
        gn !== n && (R = o[j], er = !1, Er = !q && c.invertSwap || I), O = Md(t, n, o, b, q ? 1 : c.swapThreshold, c.invertedSwapThreshold == null ? c.swapThreshold : c.invertedSwapThreshold, Er, gn === n);
        var oe;
        if (O !== 0) {
          var W = ft(H);
          do
            W -= O, oe = Ne.children[W];
          while (oe && (ae(oe, "display") === "none" || oe === ce));
        }
        if (O === 0 || oe === n)
          return y(!1);
        gn = n, Zn = O;
        var B = n.nextElementSibling, U = !1;
        U = O === 1;
        var z = Ar(Te, r, H, i, n, o, t, U);
        if (z !== !1)
          return (z === 1 || z === -1) && (U = z === 1), Ro = !0, setTimeout(Id, 30), w(), U && !B ? r.appendChild(H) : n.parentNode.insertBefore(H, U ? B : n), F && Al(F, 0, V - F.scrollTop), Ne = H.parentNode, R !== void 0 && !Er && (qr = Math.abs(R - Le(n)[j])), S(), y(!0);
      }
      if (r.contains(H))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    be(document, "mousemove", this._onTouchMove), be(document, "touchmove", this._onTouchMove), be(document, "pointermove", this._onTouchMove), be(document, "dragover", tn), be(document, "mousemove", tn), be(document, "touchmove", tn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    be(t, "mouseup", this._onDrop), be(t, "touchend", this._onDrop), be(t, "pointerup", this._onDrop), be(t, "pointercancel", this._onDrop), be(t, "touchcancel", this._onDrop), be(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var r = this.el, n = this.options;
    if (ut = ft(H), Gt = ft(H, n.draggable), it("drop", this, {
      evt: t
    }), Ne = H && H.parentNode, ut = ft(H), Gt = ft(H, n.draggable), se.eventCanceled) {
      this._nulling();
      return;
    }
    Rn = !1, Er = !1, er = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Po(this.cloneId), Po(this._dragStartId), this.nativeDraggable && (be(document, "drop", this), be(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Xn && ae(document.body, "user-select", ""), ae(H, "transform", ""), t && (Gn && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), ce && ce.parentNode && ce.parentNode.removeChild(ce), (Te === Ne || Ye && Ye.lastPutMode !== "clone") && Ie && Ie.parentNode && Ie.parentNode.removeChild(Ie), H && (this.nativeDraggable && be(H, "dragend", this), wi(H), H.style["will-change"] = "", Gn && !Rn && lt(H, Ye ? Ye.options.ghostClass : this.options.ghostClass, !1), lt(H, this.options.chosenClass, !1), tt({
      sortable: this,
      name: "unchoose",
      toEl: Ne,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Te !== Ne ? (ut >= 0 && (tt({
      rootEl: Ne,
      name: "add",
      toEl: Ne,
      fromEl: Te,
      originalEvent: t
    }), tt({
      sortable: this,
      name: "remove",
      toEl: Ne,
      originalEvent: t
    }), tt({
      rootEl: Ne,
      name: "sort",
      toEl: Ne,
      fromEl: Te,
      originalEvent: t
    }), tt({
      sortable: this,
      name: "sort",
      toEl: Ne,
      originalEvent: t
    })), Ye && Ye.save()) : ut !== Cn && ut >= 0 && (tt({
      sortable: this,
      name: "update",
      toEl: Ne,
      originalEvent: t
    }), tt({
      sortable: this,
      name: "sort",
      toEl: Ne,
      originalEvent: t
    })), se.active && ((ut == null || ut === -1) && (ut = Cn, Gt = Qn), tt({
      sortable: this,
      name: "end",
      toEl: Ne,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    it("nulling", this), Te = H = Ne = ce = on = Ie = jr = Kt = en = ht = Gn = ut = Gt = Cn = Qn = gn = Zn = Ye = _r = se.dragged = se.ghost = se.clone = se.active = null, Kr.forEach(function(t) {
      t.checked = !0;
    }), Kr.length = vi = gi = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        H && (this._onDragOver(t), Td(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], r, n = this.el.children, i = 0, o = n.length, s = this.options; i < o; i++)
      r = n[i], yt(r, s.draggable, this.el, !1) && t.push(r.getAttribute(s.dataIdAttr) || qd(r));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, r) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(o, s) {
      var c = i.children[s];
      yt(c, this.options.draggable, i, !1) && (n[o] = c);
    }, this), r && this.captureAnimationState(), t.forEach(function(o) {
      n[o] && (i.removeChild(n[o]), i.appendChild(n[o]));
    }), r && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, r) {
    return yt(t, r || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, r) {
    var n = this.options;
    if (r === void 0)
      return n[t];
    var i = or.modifyOption(this, t, r);
    typeof i < "u" ? n[t] = i : n[t] = r, t === "group" && Dl(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    it("destroy", this);
    var t = this.el;
    t[ot] = null, be(t, "mousedown", this._onTapStart), be(t, "touchstart", this._onTapStart), be(t, "pointerdown", this._onTapStart), this.nativeDraggable && (be(t, "dragover", this), be(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Gr.splice(Gr.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Kt) {
      if (it("hideClone", this), se.eventCanceled) return;
      ae(Ie, "display", "none"), this.options.removeCloneOnHide && Ie.parentNode && Ie.parentNode.removeChild(Ie), Kt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Kt) {
      if (it("showClone", this), se.eventCanceled) return;
      H.parentNode == Te && !this.options.group.revertClone ? Te.insertBefore(Ie, H) : on ? Te.insertBefore(Ie, on) : Te.appendChild(Ie), this.options.group.revertClone && this.animate(H, Ie), ae(Ie, "display", ""), Kt = !1;
    }
  }
};
function Td(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ar(e, t, r, n, i, o, s, c) {
  var u, l = e[ot], f = l.options.onMove, h;
  return window.CustomEvent && !qt && !ir ? u = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (u = document.createEvent("Event"), u.initEvent("move", !0, !0)), u.to = t, u.from = e, u.dragged = r, u.draggedRect = n, u.related = i || t, u.relatedRect = o || Le(t), u.willInsertAfter = c, u.originalEvent = s, e.dispatchEvent(u), f && (h = f.call(l, u, s)), h;
}
function wi(e) {
  e.draggable = !1;
}
function Id() {
  Ro = !1;
}
function $d(e, t, r) {
  var n = Le(Tn(r.el, 0, r.options, !0)), i = Pl(r.el, r.options, ce), o = 10;
  return t ? e.clientX < i.left - o || e.clientY < n.top && e.clientX < n.right : e.clientY < i.top - o || e.clientY < n.bottom && e.clientX < n.left;
}
function Nd(e, t, r) {
  var n = Le(qo(r.el, r.options.draggable)), i = Pl(r.el, r.options, ce), o = 10;
  return t ? e.clientX > i.right + o || e.clientY > n.bottom && e.clientX > n.left : e.clientY > i.bottom + o || e.clientX > n.right && e.clientY > n.top;
}
function Md(e, t, r, n, i, o, s, c) {
  var u = n ? e.clientY : e.clientX, l = n ? r.height : r.width, f = n ? r.top : r.left, h = n ? r.bottom : r.right, m = !1;
  if (!s) {
    if (c && qr < l * i) {
      if (!er && (Zn === 1 ? u > f + l * o / 2 : u < h - l * o / 2) && (er = !0), er)
        m = !0;
      else if (Zn === 1 ? u < f + qr : u > h - qr)
        return -Zn;
    } else if (u > f + l * (1 - i) / 2 && u < h - l * (1 - i) / 2)
      return jd(t);
  }
  return m = m || s, m && (u < f + l * o / 2 || u > h - l * o / 2) ? u > f + l / 2 ? 1 : -1 : 0;
}
function jd(e) {
  return ft(H) < ft(e) ? 1 : -1;
}
function qd(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, r = t.length, n = 0; r--; )
    n += t.charCodeAt(r);
  return n.toString(36);
}
function Fd(e) {
  Kr.length = 0;
  for (var t = e.getElementsByTagName("input"), r = t.length; r--; ) {
    var n = t[r];
    n.checked && Kr.push(n);
  }
}
function Fr(e) {
  return setTimeout(e, 0);
}
function Po(e) {
  return clearTimeout(e);
}
Qr && Se(document, "touchmove", function(e) {
  (se.active || Rn) && e.cancelable && e.preventDefault();
});
se.utils = {
  on: Se,
  off: be,
  css: ae,
  find: El,
  is: function(t, r) {
    return !!yt(t, r, t, !1);
  },
  extend: Sd,
  throttle: Ol,
  closest: yt,
  toggleClass: lt,
  clone: Rl,
  index: ft,
  nextTick: Fr,
  cancelNextTick: Po,
  detectDirection: kl,
  getChild: Tn,
  expando: ot
};
se.get = function(e) {
  return e[ot];
};
se.mount = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (se.utils = Rt(Rt({}, se.utils), n.utils)), or.mount(n);
  });
};
se.create = function(e, t) {
  return new se(e, t);
};
se.version = bd;
var Be = [], Kn, Co, ko = !1, Si, xi, zr, zn;
function Bd() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(r) {
      var n = r.originalEvent;
      this.sortable.nativeDraggable ? Se(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Se(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? Se(document, "touchmove", this._handleFallbackAutoScroll) : Se(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var n = r.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? be(document, "dragover", this._handleAutoScroll) : (be(document, "pointermove", this._handleFallbackAutoScroll), be(document, "touchmove", this._handleFallbackAutoScroll), be(document, "mousemove", this._handleFallbackAutoScroll)), qa(), Br(), xd();
    },
    nulling: function() {
      zr = Co = Kn = ko = zn = Si = xi = null, Be.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var i = this, o = (r.touches ? r.touches[0] : r).clientX, s = (r.touches ? r.touches[0] : r).clientY, c = document.elementFromPoint(o, s);
      if (zr = r, n || this.options.forceAutoScrollFallback || ir || qt || Xn) {
        _i(r, this.options, c, n);
        var u = Yt(c, !0);
        ko && (!zn || o !== Si || s !== xi) && (zn && qa(), zn = setInterval(function() {
          var l = Yt(document.elementFromPoint(o, s), !0);
          l !== u && (u = l, Br()), _i(r, i.options, l, n);
        }, 10), Si = o, xi = s);
      } else {
        if (!this.options.bubbleScroll || Yt(c, !0) === At()) {
          Br();
          return;
        }
        _i(r, this.options, Yt(c, !1), !1);
      }
    }
  }, jt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Br() {
  Be.forEach(function(e) {
    clearInterval(e.pid);
  }), Be = [];
}
function qa() {
  clearInterval(zn);
}
var _i = Ol(function(e, t, r, n) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, s = t.scrollSensitivity, c = t.scrollSpeed, u = At(), l = !1, f;
    Co !== r && (Co = r, Br(), Kn = t.scroll, f = t.scrollFn, Kn === !0 && (Kn = Yt(r, !0)));
    var h = 0, m = Kn;
    do {
      var b = m, g = Le(b), d = g.top, a = g.bottom, w = g.left, y = g.right, S = g.width, E = g.height, P = void 0, O = void 0, R = b.scrollWidth, I = b.scrollHeight, q = ae(b), j = b.scrollLeft, F = b.scrollTop;
      b === u ? (P = S < R && (q.overflowX === "auto" || q.overflowX === "scroll" || q.overflowX === "visible"), O = E < I && (q.overflowY === "auto" || q.overflowY === "scroll" || q.overflowY === "visible")) : (P = S < R && (q.overflowX === "auto" || q.overflowX === "scroll"), O = E < I && (q.overflowY === "auto" || q.overflowY === "scroll"));
      var V = P && (Math.abs(y - i) <= s && j + S < R) - (Math.abs(w - i) <= s && !!j), oe = O && (Math.abs(a - o) <= s && F + E < I) - (Math.abs(d - o) <= s && !!F);
      if (!Be[h])
        for (var W = 0; W <= h; W++)
          Be[W] || (Be[W] = {});
      (Be[h].vx != V || Be[h].vy != oe || Be[h].el !== b) && (Be[h].el = b, Be[h].vx = V, Be[h].vy = oe, clearInterval(Be[h].pid), (V != 0 || oe != 0) && (l = !0, Be[h].pid = setInterval((function() {
        n && this.layer === 0 && se.active._onTouchMove(zr);
        var B = Be[this.layer].vy ? Be[this.layer].vy * c : 0, U = Be[this.layer].vx ? Be[this.layer].vx * c : 0;
        typeof f == "function" && f.call(se.dragged.parentNode[ot], U, B, e, zr, Be[this.layer].el) !== "continue" || Al(Be[this.layer].el, U, B);
      }).bind({
        layer: h
      }), 24))), h++;
    } while (t.bubbleScroll && m !== u && (m = Yt(m, !1)));
    ko = l;
  }
}, 30), $l = function(t) {
  var r = t.originalEvent, n = t.putSortable, i = t.dragEl, o = t.activeSortable, s = t.dispatchSortableEvent, c = t.hideGhostForTarget, u = t.unhideGhostForTarget;
  if (r) {
    var l = n || o;
    c();
    var f = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, h = document.elementFromPoint(f.clientX, f.clientY);
    u(), l && !l.el.contains(h) && (s("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function Fo() {
}
Fo.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var r = t.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = Tn(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(r, i) : this.sortable.el.appendChild(r), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: $l
};
jt(Fo, {
  pluginName: "revertOnSpill"
});
function Bo() {
}
Bo.prototype = {
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable, i = n || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: $l
};
jt(Bo, {
  pluginName: "removeOnSpill"
});
se.mount(new Bd());
se.mount(Bo, Fo);
function Ld(e, t, r = {}) {
  let n;
  const { document: i = ef, ...o } = r, s = {
    onUpdate: (f) => {
      Vd(t, f.oldIndex, f.newIndex, f);
    }
  }, c = () => {
    const f = typeof e == "string" ? i == null ? void 0 : i.querySelector(e) : Pn(e);
    !f || n !== void 0 || (n = new se(f, { ...s, ...o }));
  }, u = () => {
    n == null || n.destroy(), n = void 0;
  }, l = (f, h) => {
    if (h !== void 0)
      n == null || n.option(f, h);
    else
      return n == null ? void 0 : n.option(f);
  };
  return Qc(c), vl(u), {
    stop: u,
    start: c,
    option: l
  };
}
function Ud(e, t, r) {
  const n = e.children[r];
  e.insertBefore(t, n);
}
function Wd(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Vd(e, t, r, n = null) {
  n != null && (Wd(n.item), Ud(n.from, n.item, t));
  const i = Iu(e), o = i ? [...Nt(e)] : Nt(e);
  if (r >= 0 && r < o.length) {
    const s = o.splice(t, 1)[0];
    il(() => {
      o.splice(r, 0, s), i && (e.value = o);
    });
  }
}
var nn = {}, Ei = {}, Fa;
function Zr() {
  return Fa || (Fa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.injectPlatformDeps = e.platformDeps = void 0, e.platformDeps = {
      readFileFromPath: function() {
        throw new Error("not implemented");
      },
      getRequestToken: function() {
        throw new Error("not implemented");
      },
      getDefaultAuth: function() {
        throw new Error("not implemented");
      },
      buildPlatformDependentConfig: function() {
        throw new Error("not implemented");
      },
      buildHeaders: function() {
        throw new Error("not implemented");
      },
      buildFormDataValue: function() {
        throw new Error("not implemented");
      },
      buildBaseUrl: function() {
        throw new Error("not implemented");
      },
      getVersion: function() {
        throw new Error("not implemented");
      }
    };
    var t = function(r) {
      r.readFileFromPath && (e.platformDeps.readFileFromPath = r.readFileFromPath), r.getRequestToken && (e.platformDeps.getRequestToken = r.getRequestToken), r.getDefaultAuth && (e.platformDeps.getDefaultAuth = r.getDefaultAuth), r.buildPlatformDependentConfig && (e.platformDeps.buildPlatformDependentConfig = r.buildPlatformDependentConfig), r.buildHeaders && (e.platformDeps.buildHeaders = r.buildHeaders), r.buildFormDataValue && (e.platformDeps.buildFormDataValue = r.buildFormDataValue), r.buildBaseUrl && (e.platformDeps.buildBaseUrl = r.buildBaseUrl), r.getVersion && (e.platformDeps.getVersion = r.getVersion);
    };
    e.injectPlatformDeps = t;
  }(Ei)), Ei;
}
var $e = {}, bn = {}, Ba;
function Lo() {
  if (Ba) return bn;
  Ba = 1;
  var e = bn.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, s) {
        o.__proto__ = s;
      } || function(o, s) {
        for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (o[c] = s[c]);
      }, r(n, i);
    };
    return function(n, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      r(n, i);
      function o() {
        this.constructor = n;
      }
      n.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
    };
  }();
  Object.defineProperty(bn, "__esModule", { value: !0 }), bn.UnsupportedPlatformError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var o = this, s = "This function is not supported in ".concat(i, " environment");
        return o = r.call(this, s) || this, Error.captureStackTrace && Error.captureStackTrace(o, n), o.name = "UnsupportedPlatformError", o.platform = i, Object.setPrototypeOf(o, n.prototype), o;
      }
      return n;
    }(Error)
  );
  return bn.UnsupportedPlatformError = t, bn;
}
var Oi, La;
function Hd() {
  if (La) return Oi;
  La = 1;
  function e() {
    this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
    for (let t = 0; t < arguments.length; t++)
      this.define(arguments[t]);
    this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
  }
  return e.prototype.define = function(t, r) {
    for (let n in t) {
      let i = t[n].map(function(o) {
        return o.toLowerCase();
      });
      n = n.toLowerCase();
      for (let o = 0; o < i.length; o++) {
        const s = i[o];
        if (s[0] !== "*") {
          if (!r && s in this._types)
            throw new Error(
              'Attempt to change mapping for "' + s + '" extension from "' + this._types[s] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + s + '" from the list of extensions for "' + n + '".'
            );
          this._types[s] = n;
        }
      }
      if (r || !this._extensions[n]) {
        const o = i[0];
        this._extensions[n] = o[0] !== "*" ? o : o.substr(1);
      }
    }
  }, e.prototype.getType = function(t) {
    t = String(t);
    let r = t.replace(/^.*[/\\]/, "").toLowerCase(), n = r.replace(/^.*\./, "").toLowerCase(), i = r.length < t.length;
    return (n.length < r.length - 1 || !i) && this._types[n] || null;
  }, e.prototype.getExtension = function(t) {
    return t = /^\s*([^;\s]*)/.test(t) && RegExp.$1, t && this._extensions[t.toLowerCase()] || null;
  }, Oi = e, Oi;
}
var Ai, Ua;
function Gd() {
  return Ua || (Ua = 1, Ai = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }), Ai;
}
var Ri, Wa;
function Kd() {
  if (Wa) return Ri;
  Wa = 1;
  let e = Hd();
  return Ri = new e(Gd()), Ri;
}
const zd = "@kintone/rest-api-client", Yd = "5.7.0", Xd = { access: "public" }, Jd = { name: "Cybozu, Inc.", url: "https://cybozu.co.jp" }, Qd = "Kintone REST API client for JavaScript", Zd = "lib/src/index.js", ep = "esm/src/index.js", tp = "lib/src/index.browser.js", np = "lib/src/index.d.ts", rp = { prebuild: "pnpm clean", build: "tsc --build --force", postbuild: "run-p build:*", lint: "eslint 'src/**/*.ts' --max-warnings 0", prepublishOnly: "run-p build:umd_*", test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest", "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand", "build:umd_dev": "rollup -c --environment BUILD:development", "build:umd_prod": "rollup -c --environment BUILD:production", clean: "rimraf lib esm umd", fix: "pnpm lint --fix", start: "pnpm build --watch" }, ip = { type: "git", url: "git+https://github.com/kintone/js-sdk.git", directory: "packages/rest-api-client" }, op = ["esm", "lib", "umd", "index.mjs"], ap = ["kintone", "rest", "api-client"], sp = "MIT", lp = { url: "https://github.com/kintone/js-sdk/issues" }, up = "https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme", cp = { node: ">=18" }, fp = { "@rollup/plugin-babel": "^6.0.4", "@rollup/plugin-commonjs": "^26.0.3", "@rollup/plugin-json": "^6.1.0", "@rollup/plugin-node-resolve": "^15.3.1", "@rollup/plugin-terser": "^0.4.4", "@types/core-js": "^2.5.8", "@types/js-base64": "^3.3.1", "@types/mime": "^3.0.4", "@types/qs": "^6.9.17", rollup: "^4.30.1", "rollup-plugin-ecma-version-validator": "^0.2.13", "rollup-plugin-license": "^3.5.3", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-polyfill-node": "^0.13.0", webpack: "^5.97.1", "webpack-cli": "^5.1.4", "babel-loader": "^9.2.1", vite: "^5.4.11", rimraf: "^5.0.10", "cross-env": "^7.0.3" }, dp = { "core-js": "^3.39.0", axios: "^1.7.9", "form-data": "^4.0.1", "js-base64": "^3.7.7", mime: "^3.0.0", qs: "^6.12.3" }, pp = { ".": { types: { import: "./esm/src/index.d.ts", require: "./lib/src/index.d.ts", default: "./lib/src/index.d.ts" }, node: { import: "./index.mjs", require: "./lib/src/index.js", default: "./lib/src/index.js" }, browser: "./lib/src/index.browser.js" }, "./package.json": "./package.json" }, hp = {
  name: zd,
  version: Yd,
  publishConfig: Xd,
  author: Jd,
  description: Qd,
  main: Zd,
  module: ep,
  browser: tp,
  types: np,
  scripts: rp,
  repository: ip,
  files: op,
  keywords: ap,
  license: sp,
  bugs: lp,
  homepage: up,
  engines: cp,
  devDependencies: fp,
  dependencies: dp,
  exports: pp
};
var Va;
function mp() {
  if (Va) return $e;
  Va = 1;
  var e = $e.__awaiter || function(g, d, a, w) {
    function y(S) {
      return S instanceof a ? S : new a(function(E) {
        E(S);
      });
    }
    return new (a || (a = Promise))(function(S, E) {
      function P(I) {
        try {
          R(w.next(I));
        } catch (q) {
          E(q);
        }
      }
      function O(I) {
        try {
          R(w.throw(I));
        } catch (q) {
          E(q);
        }
      }
      function R(I) {
        I.done ? S(I.value) : y(I.value).then(P, O);
      }
      R((w = w.apply(g, d || [])).next());
    });
  }, t = $e.__generator || function(g, d) {
    var a = { label: 0, sent: function() {
      if (S[0] & 1) throw S[1];
      return S[1];
    }, trys: [], ops: [] }, w, y, S, E = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return E.next = P(0), E.throw = P(1), E.return = P(2), typeof Symbol == "function" && (E[Symbol.iterator] = function() {
      return this;
    }), E;
    function P(R) {
      return function(I) {
        return O([R, I]);
      };
    }
    function O(R) {
      if (w) throw new TypeError("Generator is already executing.");
      for (; E && (E = 0, R[0] && (a = 0)), a; ) try {
        if (w = 1, y && (S = R[0] & 2 ? y.return : R[0] ? y.throw || ((S = y.return) && S.call(y), 0) : y.next) && !(S = S.call(y, R[1])).done) return S;
        switch (y = 0, S && (R = [R[0] & 2, S.value]), R[0]) {
          case 0:
          case 1:
            S = R;
            break;
          case 4:
            return a.label++, { value: R[1], done: !1 };
          case 5:
            a.label++, y = R[1], R = [0];
            continue;
          case 7:
            R = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (S = a.trys, !(S = S.length > 0 && S[S.length - 1]) && (R[0] === 6 || R[0] === 2)) {
              a = 0;
              continue;
            }
            if (R[0] === 3 && (!S || R[1] > S[0] && R[1] < S[3])) {
              a.label = R[1];
              break;
            }
            if (R[0] === 6 && a.label < S[1]) {
              a.label = S[1], S = R;
              break;
            }
            if (S && a.label < S[2]) {
              a.label = S[2], a.ops.push(R);
              break;
            }
            S[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        R = d.call(g, a);
      } catch (I) {
        R = [6, I], y = 0;
      } finally {
        w = S = 0;
      }
      if (R[0] & 5) throw R[1];
      return { value: R[0] ? R[1] : void 0, done: !0 };
    }
  }, r = $e.__importDefault || function(g) {
    return g && g.__esModule ? g : { default: g };
  };
  Object.defineProperty($e, "__esModule", { value: !0 }), $e.getVersion = $e.buildBaseUrl = $e.buildFormDataValue = $e.buildHeaders = $e.buildPlatformDependentConfig = $e.getDefaultAuth = $e.getRequestToken = $e.readFileFromPath = void 0;
  var n = Lo(), i = r(Kd()), o = r(hp), s = function(g) {
    throw new n.UnsupportedPlatformError("Browser");
  };
  $e.readFileFromPath = s;
  var c = function() {
    return e(void 0, void 0, void 0, function() {
      var g, d;
      return t(this, function(a) {
        if (typeof kintone == "object" && kintone !== null && typeof kintone.getRequestToken == "function")
          return [2, kintone.getRequestToken()];
        if (typeof garoon == "object" && garoon !== null && typeof ((d = (g = garoon.connect) === null || g === void 0 ? void 0 : g.kintone) === null || d === void 0 ? void 0 : d.getRequestToken) == "function")
          return [2, garoon.connect.kintone.getRequestToken()];
        throw new Error("session authentication must specify a request token");
      });
    });
  };
  $e.getRequestToken = c;
  var u = function() {
    return {
      type: "session"
    };
  };
  $e.getDefaultAuth = u;
  var l = function() {
    return {};
  };
  $e.buildPlatformDependentConfig = l;
  var f = function() {
    return {};
  };
  $e.buildHeaders = f;
  var h = function(g, d) {
    var a = {};
    return d && (a.type = i.default.getType(d) || void 0), new Blob([g], a);
  };
  $e.buildFormDataValue = h;
  var m = function(g) {
    if (g)
      return g;
    if (location === void 0)
      throw new Error("The baseUrl parameter is required for this environment");
    var d = location.host, a = location.protocol;
    return "".concat(a, "//").concat(d);
  };
  $e.buildBaseUrl = m;
  var b = function() {
    return o.default.version;
  };
  return $e.getVersion = b, $e;
}
var wn = {}, Ht = {}, Sn = {}, Vn = {}, Ha;
function yp() {
  if (Ha) return Vn;
  Ha = 1, Object.defineProperty(Vn, "__esModule", { value: !0 }), Vn.buildPath = void 0;
  var e = function(t) {
    var r = t.endpointName, n = t.guestSpaceId, i = t.preview, o = n !== void 0 ? "/guest/".concat(n) : "", s = i ? "/preview" : "";
    return "/k".concat(o, "/v1").concat(s, "/").concat(r, ".json");
  };
  return Vn.buildPath = e, Vn;
}
var Ga;
function $n() {
  if (Ga) return Sn;
  Ga = 1;
  var e = Sn.__assign || function() {
    return e = Object.assign || function(n) {
      for (var i, o = 1, s = arguments.length; o < s; o++) {
        i = arguments[o];
        for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (n[c] = i[c]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.BaseClient = void 0;
  var t = yp(), r = (
    /** @class */
    function() {
      function n(i, o) {
        this.client = i, this.guestSpaceId = o;
      }
      return n.prototype.buildPathWithGuestSpaceId = function(i) {
        return (0, t.buildPath)(e(e({}, i), { guestSpaceId: this.guestSpaceId }));
      }, n.prototype.buildPath = function(i) {
        return (0, t.buildPath)(i);
      }, n;
    }()
  );
  return Sn.BaseClient = r, Sn;
}
var Ka;
function vp() {
  if (Ka) return Ht;
  Ka = 1;
  var e = Ht.__extends || /* @__PURE__ */ function() {
    var o = function(s, c) {
      return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, l) {
        u.__proto__ = l;
      } || function(u, l) {
        for (var f in l) Object.prototype.hasOwnProperty.call(l, f) && (u[f] = l[f]);
      }, o(s, c);
    };
    return function(s, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      o(s, c);
      function u() {
        this.constructor = s;
      }
      s.prototype = c === null ? Object.create(c) : (u.prototype = c.prototype, new u());
    };
  }(), t = Ht.__assign || function() {
    return t = Object.assign || function(o) {
      for (var s, c = 1, u = arguments.length; c < u; c++) {
        s = arguments[c];
        for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
      }
      return o;
    }, t.apply(this, arguments);
  }, r = Ht.__rest || function(o, s) {
    var c = {};
    for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && s.indexOf(u) < 0 && (c[u] = o[u]);
    if (o != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, u = Object.getOwnPropertySymbols(o); l < u.length; l++)
        s.indexOf(u[l]) < 0 && Object.prototype.propertyIsEnumerable.call(o, u[l]) && (c[u[l]] = o[u[l]]);
    return c;
  };
  Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.BulkRequestClient = void 0;
  var n = $n(), i = (
    /** @class */
    function(o) {
      e(s, o);
      function s(c, u) {
        var l = o.call(this, c, u) || this;
        return l.REQUESTS_LENGTH_LIMIT = 20, l;
      }
      return s.prototype.send = function(c) {
        var u = this, l = c.requests, f = l.map(function(m) {
          if ("endpointName" in m) {
            var b = m.endpointName, g = r(m, ["endpointName"]);
            return t({ api: u.buildPathWithGuestSpaceId({ endpointName: b }) }, g);
          }
          return m;
        }), h = this.buildPathWithGuestSpaceId({
          endpointName: "bulkRequest"
        });
        return this.client.post(h, { requests: f });
      }, s;
    }(n.BaseClient)
  );
  return Ht.BulkRequestClient = i, Ht;
}
var Et = {}, za;
function gp() {
  if (za) return Et;
  za = 1;
  var e = Et.__extends || /* @__PURE__ */ function() {
    var c = function(u, l) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, h) {
        f.__proto__ = h;
      } || function(f, h) {
        for (var m in h) Object.prototype.hasOwnProperty.call(h, m) && (f[m] = h[m]);
      }, c(u, l);
    };
    return function(u, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      c(u, l);
      function f() {
        this.constructor = u;
      }
      u.prototype = l === null ? Object.create(l) : (f.prototype = l.prototype, new f());
    };
  }(), t = Et.__assign || function() {
    return t = Object.assign || function(c) {
      for (var u, l = 1, f = arguments.length; l < f; l++) {
        u = arguments[l];
        for (var h in u) Object.prototype.hasOwnProperty.call(u, h) && (c[h] = u[h]);
      }
      return c;
    }, t.apply(this, arguments);
  }, r = Et.__awaiter || function(c, u, l, f) {
    function h(m) {
      return m instanceof l ? m : new l(function(b) {
        b(m);
      });
    }
    return new (l || (l = Promise))(function(m, b) {
      function g(w) {
        try {
          a(f.next(w));
        } catch (y) {
          b(y);
        }
      }
      function d(w) {
        try {
          a(f.throw(w));
        } catch (y) {
          b(y);
        }
      }
      function a(w) {
        w.done ? m(w.value) : h(w.value).then(g, d);
      }
      a((f = f.apply(c, u || [])).next());
    });
  }, n = Et.__generator || function(c, u) {
    var l = { label: 0, sent: function() {
      if (m[0] & 1) throw m[1];
      return m[1];
    }, trys: [], ops: [] }, f, h, m, b = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return b.next = g(0), b.throw = g(1), b.return = g(2), typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function g(a) {
      return function(w) {
        return d([a, w]);
      };
    }
    function d(a) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; b && (b = 0, a[0] && (l = 0)), l; ) try {
        if (f = 1, h && (m = a[0] & 2 ? h.return : a[0] ? h.throw || ((m = h.return) && m.call(h), 0) : h.next) && !(m = m.call(h, a[1])).done) return m;
        switch (h = 0, m && (a = [a[0] & 2, m.value]), a[0]) {
          case 0:
          case 1:
            m = a;
            break;
          case 4:
            return l.label++, { value: a[1], done: !1 };
          case 5:
            l.label++, h = a[1], a = [0];
            continue;
          case 7:
            a = l.ops.pop(), l.trys.pop();
            continue;
          default:
            if (m = l.trys, !(m = m.length > 0 && m[m.length - 1]) && (a[0] === 6 || a[0] === 2)) {
              l = 0;
              continue;
            }
            if (a[0] === 3 && (!m || a[1] > m[0] && a[1] < m[3])) {
              l.label = a[1];
              break;
            }
            if (a[0] === 6 && l.label < m[1]) {
              l.label = m[1], m = a;
              break;
            }
            if (m && l.label < m[2]) {
              l.label = m[2], l.ops.push(a);
              break;
            }
            m[2] && l.ops.pop(), l.trys.pop();
            continue;
        }
        a = u.call(c, l);
      } catch (w) {
        a = [6, w], h = 0;
      } finally {
        f = m = 0;
      }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  }, i = Et.__rest || function(c, u) {
    var l = {};
    for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && u.indexOf(f) < 0 && (l[f] = c[f]);
    if (c != null && typeof Object.getOwnPropertySymbols == "function")
      for (var h = 0, f = Object.getOwnPropertySymbols(c); h < f.length; h++)
        u.indexOf(f[h]) < 0 && Object.prototype.propertyIsEnumerable.call(c, f[h]) && (l[f[h]] = c[f[h]]);
    return l;
  };
  Object.defineProperty(Et, "__esModule", { value: !0 }), Et.AppClient = void 0;
  var o = $n(), s = (
    /** @class */
    function(c) {
      e(u, c);
      function u() {
        return c !== null && c.apply(this, arguments) || this;
      }
      return u.prototype.getFormFields = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: f
        });
        return this.client.get(m, t({}, h));
      }, u.prototype.addFormFields = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.post(f, l);
      }, u.prototype.updateFormFields = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.deleteFormFields = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.delete(f, l);
      }, u.prototype.getFormLayout = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: f
        });
        return this.client.get(m, t({}, h));
      }, u.prototype.updateFormLayout = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getViews = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: f
        });
        return this.client.get(m, h);
      }, u.prototype.updateViews = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getApp = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app"
        });
        return this.client.get(f, l);
      }, u.prototype.getApps = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "apps"
        });
        return this.client.get(f, l);
      }, u.prototype.addApp = function(l) {
        return r(this, void 0, void 0, function() {
          var f, h, m, b, g;
          return n(this, function(d) {
            switch (d.label) {
              case 0:
                return f = l.name, h = l.space, m = this.buildPathWithGuestSpaceId({
                  endpointName: "app",
                  preview: !0
                }), h ? (b = this.buildPathWithGuestSpaceId({
                  endpointName: "space"
                }), [4, this.client.get(b, {
                  id: h
                })]) : [3, 2];
              case 1:
                return g = d.sent().defaultThread, [2, this.client.post(m, t(t({}, l), { thread: g }))];
              case 2:
                return [2, this.client.post(m, { name: f })];
            }
          });
        });
      }, u.prototype.getAppSettings = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: f
        });
        return this.client.get(m, h);
      }, u.prototype.updateAppSettings = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getProcessManagement = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: f
        });
        return this.client.get(m, h);
      }, u.prototype.updateProcessManagement = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getDeployStatus = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.get(f, l);
      }, u.prototype.deployApp = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.post(f, l);
      }, u.prototype.getFieldAcl = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: f
        });
        return this.client.get(m, t({}, h));
      }, u.prototype.updateFieldAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getAppAcl = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: f
        });
        return this.client.get(m, t({}, h));
      }, u.prototype.updateAppAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.evaluateRecordsAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "records/acl/evaluate"
        });
        return this.client.get(f, l);
      }, u.prototype.getRecordAcl = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: f
        });
        return this.client.get(m, t({}, h));
      }, u.prototype.updateRecordAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getAppCustomize = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: f
        });
        return this.client.get(m, t({}, h));
      }, u.prototype.updateAppCustomize = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getGeneralNotifications = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: f
        });
        return this.client.get(m, t({}, h));
      }, u.prototype.updateGeneralNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getPerRecordNotifications = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: f
        });
        return this.client.get(m, h);
      }, u.prototype.updatePerRecordNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getReminderNotifications = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: f
        });
        return this.client.get(m, h);
      }, u.prototype.updateReminderNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getReports = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: f
        });
        return this.client.get(m, h);
      }, u.prototype.updateReports = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getAppActions = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: f
        });
        return this.client.get(m, h);
      }, u.prototype.updateAppActions = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.getAdminNotes = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: f
        });
        return this.client.get(m, h);
      }, u.prototype.updateAdminNotes = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: !0
        });
        return this.client.put(f, l);
      }, u.prototype.move = function(l) {
        var f = this.buildPath({
          endpointName: "app/move"
        });
        return this.client.post(f, l);
      }, u.prototype.getPlugins = function(l) {
        var f = l.preview, h = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: f
        });
        return this.client.get(m, h);
      }, u.prototype.addPlugins = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: !0
        });
        return this.client.post(f, l);
      }, u;
    }(o.BaseClient)
  );
  return Et.AppClient = s, Et;
}
var mt = {}, Hn = {}, xn = {}, Ya;
function bp() {
  if (Ya) return xn;
  Ya = 1;
  var e = xn.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, s) {
        o.__proto__ = s;
      } || function(o, s) {
        for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (o[c] = s[c]);
      }, r(n, i);
    };
    return function(n, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      r(n, i);
      function o() {
        this.constructor = n;
      }
      n.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
    };
  }();
  Object.defineProperty(xn, "__esModule", { value: !0 }), xn.KintoneAbortSearchError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var o = r.call(this, i) || this;
        return o.name = "KintoneAbortSearchError", o.message = i, Object.setPrototypeOf(o, n.prototype), o;
      }
      return n;
    }(Error)
  );
  return xn.KintoneAbortSearchError = t, xn;
}
var _n = {}, Xa;
function wp() {
  if (Xa) return _n;
  Xa = 1;
  var e = _n.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, s) {
        o.__proto__ = s;
      } || function(o, s) {
        for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (o[c] = s[c]);
      }, r(n, i);
    };
    return function(n, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      r(n, i);
      function o() {
        this.constructor = n;
      }
      n.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
    };
  }();
  Object.defineProperty(_n, "__esModule", { value: !0 }), _n.KintoneAllRecordsError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i, o, s, c, u) {
        var l = this, f = s - o.length, h = n.extractErrorIndex(f, c, u), m = n.buildErrorMessage(f, s, h);
        return l = r.call(this, m) || this, l.name = "KintoneAllRecordsError", l.processedRecordsResult = i, l.unprocessedRecords = o, l.error = c, l.errorIndex = h, l.message = m, l.numOfProcessedRecords = f, l.numOfAllRecords = s, Object.setPrototypeOf(l, n.prototype), l;
      }
      return n.parseErrorIndex = function(i) {
        var o = [];
        return Object.keys(i).forEach(function(s) {
          var c = s.match(/records\[(\d+)\]/);
          c && o.push(Number(c[1]));
        }), o.length > 0 ? Math.min.apply(Math, o) : null;
      }, n.extractErrorIndex = function(i, o, s) {
        if (o.bulkRequestIndex !== void 0 && o.errors) {
          var c = n.parseErrorIndex(o.errors);
          if (c !== null)
            return i + o.bulkRequestIndex * s + c;
        }
      }, n.buildErrorMessage = function(i, o, s) {
        var c = "";
        return s !== void 0 && (c = "An error occurred at records[".concat(s, "]. ")), c += "".concat(i, "/").concat(o, " records are processed successfully"), c;
      }, n;
    }(Error)
  );
  return _n.KintoneAllRecordsError = t, _n;
}
var En = {}, Ja;
function Sp() {
  if (Ja) return En;
  Ja = 1;
  var e = En.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, s) {
        o.__proto__ = s;
      } || function(o, s) {
        for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (o[c] = s[c]);
      }, r(n, i);
    };
    return function(n, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      r(n, i);
      function o() {
        this.constructor = n;
      }
      n.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
    };
  }();
  Object.defineProperty(En, "__esModule", { value: !0 }), En.KintoneRestAPIError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var o = this, s = n.buildErrorResponseDateWithIndex(i), c = s.data, u = s.bulkRequestIndex;
        return o = r.call(this, c.message) || this, o.name = "KintoneRestAPIError", o.id = c.id, o.code = c.code, o.errors = c.errors, o.status = i.status, o.bulkRequestIndex = u, o.headers = i.headers, o.message = "[".concat(i.status, "] [").concat(o.code, "] ").concat(o.message, " (").concat(o.id, ")"), Error.captureStackTrace && Error.captureStackTrace(o, n), Object.setPrototypeOf(o, n.prototype), o;
      }
      return n.findErrorResponseDataWithIndex = function(i) {
        for (var o = 0; o < i.length; o++)
          if (Object.keys(i[o]).length !== 0) {
            var s = i[o];
            return { data: s, bulkRequestIndex: o };
          }
        throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
      }, n.buildErrorResponseDateWithIndex = function(i) {
        return "results" in i.data ? n.findErrorResponseDataWithIndex(i.data.results) : { data: i.data };
      }, n;
    }(Error)
  );
  return En.KintoneRestAPIError = t, En;
}
var Qa;
function Uo() {
  return Qa || (Qa = 1, function(e) {
    var t = Hn.__createBinding || (Object.create ? function(n, i, o, s) {
      s === void 0 && (s = o);
      var c = Object.getOwnPropertyDescriptor(i, o);
      (!c || ("get" in c ? !i.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
        return i[o];
      } }), Object.defineProperty(n, s, c);
    } : function(n, i, o, s) {
      s === void 0 && (s = o), n[s] = i[o];
    }), r = Hn.__exportStar || function(n, i) {
      for (var o in n) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, n, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), r(bp(), e), r(wp(), e), r(Sp(), e);
  }(Hn)), Hn;
}
var Za;
function xp() {
  if (Za) return mt;
  Za = 1;
  var e = mt.__extends || /* @__PURE__ */ function() {
    var b = function(g, d) {
      return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, w) {
        a.__proto__ = w;
      } || function(a, w) {
        for (var y in w) Object.prototype.hasOwnProperty.call(w, y) && (a[y] = w[y]);
      }, b(g, d);
    };
    return function(g, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
      b(g, d);
      function a() {
        this.constructor = g;
      }
      g.prototype = d === null ? Object.create(d) : (a.prototype = d.prototype, new a());
    };
  }(), t = mt.__assign || function() {
    return t = Object.assign || function(b) {
      for (var g, d = 1, a = arguments.length; d < a; d++) {
        g = arguments[d];
        for (var w in g) Object.prototype.hasOwnProperty.call(g, w) && (b[w] = g[w]);
      }
      return b;
    }, t.apply(this, arguments);
  }, r = mt.__awaiter || function(b, g, d, a) {
    function w(y) {
      return y instanceof d ? y : new d(function(S) {
        S(y);
      });
    }
    return new (d || (d = Promise))(function(y, S) {
      function E(R) {
        try {
          O(a.next(R));
        } catch (I) {
          S(I);
        }
      }
      function P(R) {
        try {
          O(a.throw(R));
        } catch (I) {
          S(I);
        }
      }
      function O(R) {
        R.done ? y(R.value) : w(R.value).then(E, P);
      }
      O((a = a.apply(b, g || [])).next());
    });
  }, n = mt.__generator || function(b, g) {
    var d = { label: 0, sent: function() {
      if (y[0] & 1) throw y[1];
      return y[1];
    }, trys: [], ops: [] }, a, w, y, S = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return S.next = E(0), S.throw = E(1), S.return = E(2), typeof Symbol == "function" && (S[Symbol.iterator] = function() {
      return this;
    }), S;
    function E(O) {
      return function(R) {
        return P([O, R]);
      };
    }
    function P(O) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; S && (S = 0, O[0] && (d = 0)), d; ) try {
        if (a = 1, w && (y = O[0] & 2 ? w.return : O[0] ? w.throw || ((y = w.return) && y.call(w), 0) : w.next) && !(y = y.call(w, O[1])).done) return y;
        switch (w = 0, y && (O = [O[0] & 2, y.value]), O[0]) {
          case 0:
          case 1:
            y = O;
            break;
          case 4:
            return d.label++, { value: O[1], done: !1 };
          case 5:
            d.label++, w = O[1], O = [0];
            continue;
          case 7:
            O = d.ops.pop(), d.trys.pop();
            continue;
          default:
            if (y = d.trys, !(y = y.length > 0 && y[y.length - 1]) && (O[0] === 6 || O[0] === 2)) {
              d = 0;
              continue;
            }
            if (O[0] === 3 && (!y || O[1] > y[0] && O[1] < y[3])) {
              d.label = O[1];
              break;
            }
            if (O[0] === 6 && d.label < y[1]) {
              d.label = y[1], y = O;
              break;
            }
            if (y && d.label < y[2]) {
              d.label = y[2], d.ops.push(O);
              break;
            }
            y[2] && d.ops.pop(), d.trys.pop();
            continue;
        }
        O = g.call(b, d);
      } catch (R) {
        O = [6, R], w = 0;
      } finally {
        a = y = 0;
      }
      if (O[0] & 5) throw O[1];
      return { value: O[0] ? O[1] : void 0, done: !0 };
    }
  }, i = mt.__rest || function(b, g) {
    var d = {};
    for (var a in b) Object.prototype.hasOwnProperty.call(b, a) && g.indexOf(a) < 0 && (d[a] = b[a]);
    if (b != null && typeof Object.getOwnPropertySymbols == "function")
      for (var w = 0, a = Object.getOwnPropertySymbols(b); w < a.length; w++)
        g.indexOf(a[w]) < 0 && Object.prototype.propertyIsEnumerable.call(b, a[w]) && (d[a[w]] = b[a[w]]);
    return d;
  }, o = mt.__spreadArray || function(b, g, d) {
    if (d || arguments.length === 2) for (var a = 0, w = g.length, y; a < w; a++)
      (y || !(a in g)) && (y || (y = Array.prototype.slice.call(g, 0, a)), y[a] = g[a]);
    return b.concat(y || Array.prototype.slice.call(g));
  };
  Object.defineProperty(mt, "__esModule", { value: !0 }), mt.RecordClient = void 0;
  var s = Uo(), c = $n(), u = 100, l = 100, f = 100, h = 500, m = (
    /** @class */
    function(b) {
      e(g, b);
      function g(d, a, w) {
        var y = b.call(this, d, w) || this;
        return y.bulkRequestClient = a, y.didWarnMaximumOffsetValue = !1, y;
      }
      return g.prototype.getRecord = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.get(a, d);
      }, g.prototype.addRecord = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.post(a, d);
      }, g.prototype.updateRecord = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.put(a, d);
      }, g.prototype.upsertRecord = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, y, S, E, P;
          return n(this, function(O) {
            switch (O.label) {
              case 0:
                return a = d.app, w = d.updateKey, y = d.record, [4, this.getRecords({
                  app: a,
                  query: "".concat(w.field, ' = "').concat(w.value, '"')
                })];
              case 1:
                return S = O.sent().records, S.length > 0 ? S[0].$id.type !== "__ID__" ? [3, 3] : [4, this.updateRecord(d)] : [3, 4];
              case 2:
                return E = O.sent().revision, [2, { id: S[0].$id.value, revision: E }];
              case 3:
                throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
              case 4:
                return [2, this.addRecord({
                  app: a,
                  record: Object.assign({}, y, (P = {}, P[w.field] = { value: w.value }, P))
                })];
            }
          });
        });
      }, g.prototype.getRecords = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return a = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.get(a, d)];
              case 1:
                return w = y.sent(), this.warnMaximumOffsetValueIfNeeded(d.query), [2, w];
            }
          });
        });
      }, g.prototype.warnMaximumOffsetValueIfNeeded = function(d) {
        if (d) {
          var a = /offset\s+(\d+)/i, w = d.match(a);
          !this.didWarnMaximumOffsetValue && w && Number(w[1]) > 1e4 && (this.didWarnMaximumOffsetValue = !0, console.warn("Warning: The maximum offset value will be limited to 10,000 in the future. Please use `createCursor()` and `getRecordsByCursor()` instead."));
        }
      }, g.prototype.addRecords = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, y, S;
          return n(this, function(E) {
            switch (E.label) {
              case 0:
                return a = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.post(a, d)];
              case 1:
                return w = E.sent(), y = w.ids, S = w.revisions, [2, {
                  ids: y,
                  revisions: S,
                  records: y.map(function(P, O) {
                    return { id: P, revision: S[O] };
                  })
                }];
            }
          });
        });
      }, g.prototype.updateRecords = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.put(a, d);
      }, g.prototype.deleteRecords = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.delete(a, d);
      }, g.prototype.createCursor = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.post(a, d);
      }, g.prototype.getRecordsByCursor = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.get(a, d);
      }, g.prototype.deleteCursor = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.delete(a, d);
      }, g.prototype.getAllRecords = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, y, S, E, P, O;
          return n(this, function(R) {
            return a = d.condition, w = d.orderBy, y = d.withCursor, S = y === void 0 ? !0 : y, E = i(d, ["condition", "orderBy", "withCursor"]), w ? S ? (P = a ? "".concat(a, " ") : "", O = "".concat(P).concat(w ? "order by ".concat(w) : ""), [2, this.getAllRecordsWithCursor(t(t({}, E), { query: O }))]) : [2, this.getAllRecordsWithOffset(t(t({}, E), { orderBy: w, condition: a }))] : [2, this.getAllRecordsWithId(t(t({}, E), { condition: a }))];
          });
        });
      }, g.prototype.getAllRecordsWithId = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, y, S, E, P, O, R, I, q;
          return n(this, function(j) {
            switch (j.label) {
              case 0:
                a = d.fields, w = d.condition, y = i(d, ["fields", "condition"]), S = a, S && S.length > 0 && S.indexOf("$id") === -1 && (S = o(o([], S, !0), ["$id"], !1)), E = w ? "(".concat(w, ") and ") : "", P = [], O = "0", j.label = 1;
              case 1:
                return R = "".concat(E, "$id > ").concat(O, " order by $id asc limit ").concat(h), [4, this.getRecords(t(t({}, y), { fields: S, query: R }))];
              case 2:
                if (I = j.sent(), P = P.concat(I.records), I.records.length < h)
                  return [3, 3];
                if (q = I.records[I.records.length - 1], q.$id.type === "__ID__")
                  O = q.$id.value;
                else
                  throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
                return [3, 1];
              case 3:
                return [2, P];
            }
          });
        });
      }, g.prototype.getAllRecordsWithOffset = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, y, S, E, P, O, R;
          return n(this, function(I) {
            switch (I.label) {
              case 0:
                a = d.condition, w = d.orderBy, y = i(d, ["condition", "orderBy"]), S = a ? "".concat(a, " ") : "", E = [], P = 0, I.label = 1;
              case 1:
                return O = "".concat(S).concat(w ? "order by ".concat(w, " ") : "", "limit ").concat(h, " offset ").concat(P), [4, this.getRecords(t(t({}, y), { query: O }))];
              case 2:
                return R = I.sent(), E = E.concat(R.records), R.records.length < h ? [3, 3] : (P += h, [3, 1]);
              case 3:
                return [2, E];
            }
          });
        });
      }, g.prototype.getAllRecordsWithCursor = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, y, S;
          return n(this, function(E) {
            switch (E.label) {
              case 0:
                return [4, this.createCursor(d)];
              case 1:
                a = E.sent().id, E.label = 2;
              case 2:
                E.trys.push([2, 6, , 8]), w = [], E.label = 3;
              case 3:
                return [4, this.getRecordsByCursor({ id: a })];
              case 4:
                return y = E.sent(), w = w.concat(y.records), y.next ? [3, 3] : [3, 5];
              case 5:
                return [2, w];
              case 6:
                return S = E.sent(), [4, this.deleteCursor({ id: a })];
              case 7:
                throw E.sent(), S;
              case 8:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, g.prototype.addAllRecords = function(d) {
        return r(this, void 0, void 0, function() {
          return n(this, function(a) {
            if (!d.records.every(function(w) {
              return !Array.isArray(w) && w instanceof Object;
            }))
              throw new Error("the `records` parameter must be an array of object.");
            return [2, this.addAllRecordsRecursive(d, d.records.length, [])];
          });
        });
      }, g.prototype.addAllRecordsRecursive = function(d, a, w) {
        return r(this, void 0, void 0, function() {
          var y, S, E, P, O, R;
          return n(this, function(I) {
            switch (I.label) {
              case 0:
                if (y = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * u, S = d.app, E = d.records, P = E.slice(0, y), P.length === 0)
                  return [2, { records: w }];
                I.label = 1;
              case 1:
                return I.trys.push([1, 3, , 4]), [4, this.addAllRecordsWithBulkRequest({
                  app: S,
                  records: P
                })];
              case 2:
                return O = I.sent(), [3, 4];
              case 3:
                throw R = I.sent(), new s.KintoneAllRecordsError({ records: w }, E, a, R, u);
              case 4:
                return [2, this.addAllRecordsRecursive({
                  app: S,
                  records: E.slice(y)
                }, a, w.concat(O))];
            }
          });
        });
      }, g.prototype.addAllRecordsWithBulkRequest = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, y;
          return n(this, function(S) {
            switch (S.label) {
              case 0:
                return a = this.separateArrayRecursive(u, [], d.records), w = a.map(function(E) {
                  return {
                    method: "POST",
                    endpointName: "records",
                    payload: {
                      app: d.app,
                      records: E
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: w })];
              case 1:
                return y = S.sent().results, [2, y.map(function(E) {
                  var P = E.ids, O = E.revisions;
                  return P.map(function(R, I) {
                    return { id: R, revision: O[I] };
                  });
                }).reduce(function(E, P) {
                  return E.concat(P);
                }, [])];
            }
          });
        });
      }, g.prototype.updateAllRecords = function(d) {
        return r(this, void 0, void 0, function() {
          return n(this, function(a) {
            return [2, this.updateAllRecordsRecursive(d, d.records.length, [])];
          });
        });
      }, g.prototype.updateAllRecordsRecursive = function(d, a, w) {
        return r(this, void 0, void 0, function() {
          var y, S, E, P, O, R, I;
          return n(this, function(q) {
            switch (q.label) {
              case 0:
                if (y = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * l, S = d.app, E = d.upsert, P = d.records, O = P.slice(0, y), O.length === 0)
                  return [2, { records: w }];
                q.label = 1;
              case 1:
                return q.trys.push([1, 3, , 4]), [4, this.updateAllRecordsWithBulkRequest({
                  app: S,
                  upsert: E,
                  records: O
                })];
              case 2:
                return R = q.sent(), [3, 4];
              case 3:
                throw I = q.sent(), new s.KintoneAllRecordsError({ records: w }, P, a, I, l);
              case 4:
                return [2, this.updateAllRecordsRecursive({
                  app: S,
                  upsert: E,
                  records: P.slice(y)
                }, a, w.concat(R))];
            }
          });
        });
      }, g.prototype.updateAllRecordsWithBulkRequest = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, y;
          return n(this, function(S) {
            switch (S.label) {
              case 0:
                return a = this.separateArrayRecursive(l, [], d.records), w = a.map(function(E) {
                  return {
                    method: "PUT",
                    endpointName: "records",
                    payload: {
                      app: d.app,
                      upsert: d.upsert,
                      records: E
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: w })];
              case 1:
                return y = S.sent().results, [2, y.map(function(E) {
                  return E.records;
                }).reduce(function(E, P) {
                  return E.concat(P);
                }, [])];
            }
          });
        });
      }, g.prototype.deleteAllRecords = function(d) {
        return this.deleteAllRecordsRecursive(d, d.records.length);
      }, g.prototype.deleteAllRecordsRecursive = function(d, a) {
        return r(this, void 0, void 0, function() {
          var w, y, S, E, P;
          return n(this, function(O) {
            switch (O.label) {
              case 0:
                if (w = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * f, y = d.app, S = d.records, E = S.slice(0, w), E.length === 0)
                  return [2, {}];
                O.label = 1;
              case 1:
                return O.trys.push([1, 3, , 4]), [4, this.deleteAllRecordsWithBulkRequest({
                  app: y,
                  records: E
                })];
              case 2:
                return O.sent(), [3, 4];
              case 3:
                throw P = O.sent(), new s.KintoneAllRecordsError({}, S, a, P, f);
              case 4:
                return [2, this.deleteAllRecordsRecursive({
                  app: y,
                  records: S.slice(w)
                }, a)];
            }
          });
        });
      }, g.prototype.deleteAllRecordsWithBulkRequest = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return a = this.separateArrayRecursive(f, [], d.records), w = a.map(function(S) {
                  return {
                    method: "DELETE",
                    endpointName: "records",
                    payload: {
                      app: d.app,
                      ids: S.map(function(E) {
                        return E.id;
                      }),
                      revisions: S.map(function(E) {
                        return E.revision;
                      })
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: w })];
              case 1:
                return y.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, g.prototype.separateArrayRecursive = function(d, a, w) {
        var y = w.slice(0, d);
        return y.length === 0 ? a : this.separateArrayRecursive(d, o(o([], a, !0), [y], !1), w.slice(d));
      }, g.prototype.addRecordComment = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.post(a, d);
      }, g.prototype.deleteRecordComment = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.delete(a, d);
      }, g.prototype.getRecordComments = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/comments"
        });
        return this.client.get(a, d);
      }, g.prototype.updateRecordAssignees = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/assignees"
        });
        return this.client.put(a, d);
      }, g.prototype.updateRecordStatus = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/status"
        });
        return this.client.put(a, d);
      }, g.prototype.updateRecordsStatus = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records/status"
        });
        return this.client.put(a, d);
      }, g;
    }(c.BaseClient)
  );
  return mt.RecordClient = m, mt;
}
var On = {}, es;
function _p() {
  if (es) return On;
  es = 1;
  var e = On.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
        s.__proto__ = c;
      } || function(s, c) {
        for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
      }, n(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(i, o);
      function s() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
    };
  }();
  Object.defineProperty(On, "__esModule", { value: !0 }), On.SpaceClient = void 0;
  var t = $n(), r = (
    /** @class */
    function(n) {
      e(i, n);
      function i() {
        return n !== null && n.apply(this, arguments) || this;
      }
      return i.prototype.getSpace = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.get(s, o);
      }, i.prototype.updateSpace = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.put(s, o);
      }, i.prototype.deleteSpace = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.delete(s, o);
      }, i.prototype.updateSpaceBody = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space/body"
        });
        return this.client.put(s, o);
      }, i.prototype.getSpaceMembers = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.get(s, o);
      }, i.prototype.updateSpaceMembers = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.put(s, o);
      }, i.prototype.addThread = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.post(s, o);
      }, i.prototype.updateThread = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.put(s, o);
      }, i.prototype.addThreadComment = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread/comment"
        });
        return this.client.post(s, o);
      }, i.prototype.addGuests = function(o) {
        var s = this.buildPath({
          endpointName: "guests"
        });
        return this.client.post(s, o);
      }, i.prototype.deleteGuests = function(o) {
        var s = this.buildPath({
          endpointName: "guests"
        });
        return this.client.delete(s, o);
      }, i.prototype.updateSpaceGuests = function(o) {
        var s = this.buildPathWithGuestSpaceId({
          endpointName: "space/guests"
        });
        return this.client.put(s, o);
      }, i.prototype.addSpaceFromTemplate = function(o) {
        var s = this.buildPath({
          endpointName: "template/space"
        });
        return this.client.post(s, o);
      }, i;
    }(t.BaseClient)
  );
  return On.SpaceClient = r, On;
}
var Dt = {}, Pi, ts;
function Nl() {
  return ts || (ts = 1, Pi = typeof self == "object" ? self.FormData : window.FormData), Pi;
}
var ns;
function Ep() {
  if (ns) return Dt;
  ns = 1;
  var e = Dt.__extends || /* @__PURE__ */ function() {
    var l = function(f, h) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, b) {
        m.__proto__ = b;
      } || function(m, b) {
        for (var g in b) Object.prototype.hasOwnProperty.call(b, g) && (m[g] = b[g]);
      }, l(f, h);
    };
    return function(f, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      l(f, h);
      function m() {
        this.constructor = f;
      }
      f.prototype = h === null ? Object.create(h) : (m.prototype = h.prototype, new m());
    };
  }(), t = Dt.__awaiter || function(l, f, h, m) {
    function b(g) {
      return g instanceof h ? g : new h(function(d) {
        d(g);
      });
    }
    return new (h || (h = Promise))(function(g, d) {
      function a(S) {
        try {
          y(m.next(S));
        } catch (E) {
          d(E);
        }
      }
      function w(S) {
        try {
          y(m.throw(S));
        } catch (E) {
          d(E);
        }
      }
      function y(S) {
        S.done ? g(S.value) : b(S.value).then(a, w);
      }
      y((m = m.apply(l, f || [])).next());
    });
  }, r = Dt.__generator || function(l, f) {
    var h = { label: 0, sent: function() {
      if (g[0] & 1) throw g[1];
      return g[1];
    }, trys: [], ops: [] }, m, b, g, d = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return d.next = a(0), d.throw = a(1), d.return = a(2), typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function a(y) {
      return function(S) {
        return w([y, S]);
      };
    }
    function w(y) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; d && (d = 0, y[0] && (h = 0)), h; ) try {
        if (m = 1, b && (g = y[0] & 2 ? b.return : y[0] ? b.throw || ((g = b.return) && g.call(b), 0) : b.next) && !(g = g.call(b, y[1])).done) return g;
        switch (b = 0, g && (y = [y[0] & 2, g.value]), y[0]) {
          case 0:
          case 1:
            g = y;
            break;
          case 4:
            return h.label++, { value: y[1], done: !1 };
          case 5:
            h.label++, b = y[1], y = [0];
            continue;
          case 7:
            y = h.ops.pop(), h.trys.pop();
            continue;
          default:
            if (g = h.trys, !(g = g.length > 0 && g[g.length - 1]) && (y[0] === 6 || y[0] === 2)) {
              h = 0;
              continue;
            }
            if (y[0] === 3 && (!g || y[1] > g[0] && y[1] < g[3])) {
              h.label = y[1];
              break;
            }
            if (y[0] === 6 && h.label < g[1]) {
              h.label = g[1], g = y;
              break;
            }
            if (g && h.label < g[2]) {
              h.label = g[2], h.ops.push(y);
              break;
            }
            g[2] && h.ops.pop(), h.trys.pop();
            continue;
        }
        y = f.call(l, h);
      } catch (S) {
        y = [6, S], b = 0;
      } finally {
        m = g = 0;
      }
      if (y[0] & 5) throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  }, n = Dt.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.FileClient = void 0;
  var i = n(Nl()), o = Zr(), s = Lo(), c = $n(), u = (
    /** @class */
    function(l) {
      e(f, l);
      function f() {
        return l !== null && l.apply(this, arguments) || this;
      }
      return f.prototype.uploadFile = function(h) {
        return t(this, void 0, void 0, function() {
          var m, b, g, d, S, a, w, y, S, E;
          return r(this, function(P) {
            switch (P.label) {
              case 0:
                if (m = this.buildPathWithGuestSpaceId({
                  endpointName: "file"
                }), b = new i.default(), !("path" in h.file)) return [3, 5];
                P.label = 1;
              case 1:
                return P.trys.push([1, 3, , 4]), [4, o.platformDeps.readFileFromPath(h.file.path)];
              case 2:
                return g = P.sent(), d = g.name, S = g.data, b.append("file", S, d), [3, 4];
              case 3:
                throw a = P.sent(), a instanceof s.UnsupportedPlatformError ? new Error("uploadFile doesn't allow to accept a file path in ".concat(a.platform, " environment.")) : a;
              case 4:
                return [3, 6];
              case 5:
                w = h.file, y = w.name, S = w.data, E = o.platformDeps.buildFormDataValue(S, y), b.append("file", E, y), P.label = 6;
              case 6:
                return [2, this.client.postData(m, b)];
            }
          });
        });
      }, f.prototype.downloadFile = function(h) {
        var m = this.buildPathWithGuestSpaceId({
          endpointName: "file"
        });
        return this.client.getData(m, h);
      }, f;
    }(c.BaseClient)
  );
  return Dt.FileClient = u, Dt;
}
var An = {}, rs;
function Op() {
  if (rs) return An;
  rs = 1;
  var e = An.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
        s.__proto__ = c;
      } || function(s, c) {
        for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
      }, n(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(i, o);
      function s() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
    };
  }();
  Object.defineProperty(An, "__esModule", { value: !0 }), An.PluginClient = void 0;
  var t = $n(), r = (
    /** @class */
    function(n) {
      e(i, n);
      function i() {
        return n !== null && n.apply(this, arguments) || this;
      }
      return i.prototype.getPlugins = function(o) {
        var s = this.buildPath({ endpointName: "plugins" });
        return this.client.get(s, o);
      }, i.prototype.getRequiredPlugins = function(o) {
        var s = this.buildPath({ endpointName: "plugins/required" });
        return this.client.get(s, o);
      }, i.prototype.getApps = function(o) {
        var s = this.buildPath({ endpointName: "plugin/apps" });
        return this.client.get(s, o);
      }, i.prototype.updatePlugin = function(o) {
        var s = this.buildPath({ endpointName: "plugin" });
        return this.client.put(s, o);
      }, i.prototype.installPlugin = function(o) {
        var s = this.buildPath({ endpointName: "plugin" });
        return this.client.post(s, o);
      }, i.prototype.uninstallPlugin = function(o) {
        var s = this.buildPath({ endpointName: "plugin" });
        return this.client.delete(s, o);
      }, i;
    }(t.BaseClient)
  );
  return An.PluginClient = r, An;
}
var Ci = {}, Tt = {}, ki, is;
function Ap() {
  if (is) return ki;
  is = 1;
  function e(p, v) {
    return function() {
      return p.apply(v, arguments);
    };
  }
  const { toString: t } = Object.prototype, { getPrototypeOf: r } = Object, n = /* @__PURE__ */ ((p) => (v) => {
    const x = t.call(v);
    return p[x] || (p[x] = x.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), i = (p) => (p = p.toLowerCase(), (v) => n(v) === p), o = (p) => (v) => typeof v === p, { isArray: s } = Array, c = o("undefined");
  function u(p) {
    return p !== null && !c(p) && p.constructor !== null && !c(p.constructor) && m(p.constructor.isBuffer) && p.constructor.isBuffer(p);
  }
  const l = i("ArrayBuffer");
  function f(p) {
    let v;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? v = ArrayBuffer.isView(p) : v = p && p.buffer && l(p.buffer), v;
  }
  const h = o("string"), m = o("function"), b = o("number"), g = (p) => p !== null && typeof p == "object", d = (p) => p === !0 || p === !1, a = (p) => {
    if (n(p) !== "object")
      return !1;
    const v = r(p);
    return (v === null || v === Object.prototype || Object.getPrototypeOf(v) === null) && !(Symbol.toStringTag in p) && !(Symbol.iterator in p);
  }, w = i("Date"), y = i("File"), S = i("Blob"), E = i("FileList"), P = (p) => g(p) && m(p.pipe), O = (p) => {
    let v;
    return p && (typeof FormData == "function" && p instanceof FormData || m(p.append) && ((v = n(p)) === "formdata" || // detect form-data instance
    v === "object" && m(p.toString) && p.toString() === "[object FormData]"));
  }, R = i("URLSearchParams"), [I, q, j, F] = ["ReadableStream", "Request", "Response", "Headers"].map(i), V = (p) => p.trim ? p.trim() : p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function oe(p, v, { allOwnKeys: x = !1 } = {}) {
    if (p === null || typeof p > "u")
      return;
    let _, A;
    if (typeof p != "object" && (p = [p]), s(p))
      for (_ = 0, A = p.length; _ < A; _++)
        v.call(null, p[_], _, p);
    else {
      const C = x ? Object.getOwnPropertyNames(p) : Object.keys(p), k = C.length;
      let L;
      for (_ = 0; _ < k; _++)
        L = C[_], v.call(null, p[L], L, p);
    }
  }
  function W(p, v) {
    v = v.toLowerCase();
    const x = Object.keys(p);
    let _ = x.length, A;
    for (; _-- > 0; )
      if (A = x[_], v === A.toLowerCase())
        return A;
    return null;
  }
  const B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : rr, U = (p) => !c(p) && p !== B;
  function z() {
    const { caseless: p } = U(this) && this || {}, v = {}, x = (_, A) => {
      const C = p && W(v, A) || A;
      a(v[C]) && a(_) ? v[C] = z(v[C], _) : a(_) ? v[C] = z({}, _) : s(_) ? v[C] = _.slice() : v[C] = _;
    };
    for (let _ = 0, A = arguments.length; _ < A; _++)
      arguments[_] && oe(arguments[_], x);
    return v;
  }
  const M = (p, v, x, { allOwnKeys: _ } = {}) => (oe(v, (A, C) => {
    x && m(A) ? p[C] = e(A, x) : p[C] = A;
  }, { allOwnKeys: _ }), p), Q = (p) => (p.charCodeAt(0) === 65279 && (p = p.slice(1)), p), ee = (p, v, x, _) => {
    p.prototype = Object.create(v.prototype, _), p.prototype.constructor = p, Object.defineProperty(p, "super", {
      value: v.prototype
    }), x && Object.assign(p.prototype, x);
  }, fe = (p, v, x, _) => {
    let A, C, k;
    const L = {};
    if (v = v || {}, p == null) return v;
    do {
      for (A = Object.getOwnPropertyNames(p), C = A.length; C-- > 0; )
        k = A[C], (!_ || _(k, p, v)) && !L[k] && (v[k] = p[k], L[k] = !0);
      p = x !== !1 && r(p);
    } while (p && (!x || x(p, v)) && p !== Object.prototype);
    return v;
  }, me = (p, v, x) => {
    p = String(p), (x === void 0 || x > p.length) && (x = p.length), x -= v.length;
    const _ = p.indexOf(v, x);
    return _ !== -1 && _ === x;
  }, Ee = (p) => {
    if (!p) return null;
    if (s(p)) return p;
    let v = p.length;
    if (!b(v)) return null;
    const x = new Array(v);
    for (; v-- > 0; )
      x[v] = p[v];
    return x;
  }, _e = /* @__PURE__ */ ((p) => (v) => p && v instanceof p)(typeof Uint8Array < "u" && r(Uint8Array)), N = (p, v) => {
    const _ = (p && p[Symbol.iterator]).call(p);
    let A;
    for (; (A = _.next()) && !A.done; ) {
      const C = A.value;
      v.call(p, C[0], C[1]);
    }
  }, G = (p, v) => {
    let x;
    const _ = [];
    for (; (x = p.exec(v)) !== null; )
      _.push(x);
    return _;
  }, ve = i("HTMLFormElement"), Oe = (p) => p.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function(x, _, A) {
      return _.toUpperCase() + A;
    }
  ), ge = (({ hasOwnProperty: p }) => (v, x) => p.call(v, x))(Object.prototype), Z = i("RegExp"), ye = (p, v) => {
    const x = Object.getOwnPropertyDescriptors(p), _ = {};
    oe(x, (A, C) => {
      let k;
      (k = v(A, C, p)) !== !1 && (_[C] = k || A);
    }), Object.defineProperties(p, _);
  }, he = (p) => {
    ye(p, (v, x) => {
      if (m(p) && ["arguments", "caller", "callee"].indexOf(x) !== -1)
        return !1;
      const _ = p[x];
      if (m(_)) {
        if (v.enumerable = !1, "writable" in v) {
          v.writable = !1;
          return;
        }
        v.set || (v.set = () => {
          throw Error("Can not rewrite read-only method '" + x + "'");
        });
      }
    });
  }, Ce = (p, v) => {
    const x = {}, _ = (A) => {
      A.forEach((C) => {
        x[C] = !0;
      });
    };
    return s(p) ? _(p) : _(String(p).split(v)), x;
  }, Ge = () => {
  }, nt = (p, v) => p != null && Number.isFinite(p = +p) ? p : v, je = "abcdefghijklmnopqrstuvwxyz", ze = "0123456789", et = {
    DIGIT: ze,
    ALPHA: je,
    ALPHA_DIGIT: je + je.toUpperCase() + ze
  }, Ft = (p = 16, v = et.ALPHA_DIGIT) => {
    let x = "";
    const { length: _ } = v;
    for (; p--; )
      x += v[Math.random() * _ | 0];
    return x;
  };
  function gt(p) {
    return !!(p && m(p.append) && p[Symbol.toStringTag] === "FormData" && p[Symbol.iterator]);
  }
  const at = (p) => {
    const v = new Array(10), x = (_, A) => {
      if (g(_)) {
        if (v.indexOf(_) >= 0)
          return;
        if (!("toJSON" in _)) {
          v[A] = _;
          const C = s(_) ? [] : {};
          return oe(_, (k, L) => {
            const te = x(k, A + 1);
            !c(te) && (C[L] = te);
          }), v[A] = void 0, C;
        }
      }
      return _;
    };
    return x(p, 0);
  }, Bt = i("AsyncFunction"), Lt = (p) => p && (g(p) || m(p)) && m(p.then) && m(p.catch), Pt = ((p, v) => p ? setImmediate : v ? ((x, _) => (B.addEventListener("message", ({ source: A, data: C }) => {
    A === B && C === x && _.length && _.shift()();
  }, !1), (A) => {
    _.push(A), B.postMessage(x, "*");
  }))(`axios@${Math.random()}`, []) : (x) => setTimeout(x))(
    typeof setImmediate == "function",
    m(B.postMessage)
  ), ni = typeof queueMicrotask < "u" ? queueMicrotask.bind(B) : typeof process < "u" && process.nextTick || Pt;
  var $ = {
    isArray: s,
    isArrayBuffer: l,
    isBuffer: u,
    isFormData: O,
    isArrayBufferView: f,
    isString: h,
    isNumber: b,
    isBoolean: d,
    isObject: g,
    isPlainObject: a,
    isReadableStream: I,
    isRequest: q,
    isResponse: j,
    isHeaders: F,
    isUndefined: c,
    isDate: w,
    isFile: y,
    isBlob: S,
    isRegExp: Z,
    isFunction: m,
    isStream: P,
    isURLSearchParams: R,
    isTypedArray: _e,
    isFileList: E,
    forEach: oe,
    merge: z,
    extend: M,
    trim: V,
    stripBOM: Q,
    inherits: ee,
    toFlatObject: fe,
    kindOf: n,
    kindOfTest: i,
    endsWith: me,
    toArray: Ee,
    forEachEntry: N,
    matchAll: G,
    isHTMLForm: ve,
    hasOwnProperty: ge,
    hasOwnProp: ge,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: ye,
    freezeMethods: he,
    toObjectSet: Ce,
    toCamelCase: Oe,
    noop: Ge,
    toFiniteNumber: nt,
    findKey: W,
    global: B,
    isContextDefined: U,
    ALPHABET: et,
    generateString: Ft,
    isSpecCompliantForm: gt,
    toJSONObject: at,
    isAsyncFn: Bt,
    isThenable: Lt,
    setImmediate: Pt,
    asap: ni
  };
  function ue(p, v, x, _, A) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = p, this.name = "AxiosError", v && (this.code = v), x && (this.config = x), _ && (this.request = _), A && (this.response = A, this.status = A.status ? A.status : null);
  }
  $.inherits(ue, Error, {
    toJSON: function() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: $.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  const ar = ue.prototype, Ut = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((p) => {
    Ut[p] = { value: p };
  }), Object.defineProperties(ue, Ut), Object.defineProperty(ar, "isAxiosError", { value: !0 }), ue.from = (p, v, x, _, A, C) => {
    const k = Object.create(ar);
    return $.toFlatObject(p, k, function(te) {
      return te !== Error.prototype;
    }, (L) => L !== "isAxiosError"), ue.call(k, p.message, v, x, _, A), k.cause = p, k.name = p.name, C && Object.assign(k, C), k;
  };
  var Mn = null;
  function ln(p) {
    return $.isPlainObject(p) || $.isArray(p);
  }
  function sr(p) {
    return $.endsWith(p, "[]") ? p.slice(0, -2) : p;
  }
  function lr(p, v, x) {
    return p ? p.concat(v).map(function(A, C) {
      return A = sr(A), !x && C ? "[" + A + "]" : A;
    }).join(x ? "." : "") : v;
  }
  function jn(p) {
    return $.isArray(p) && !p.some(ln);
  }
  const un = $.toFlatObject($, {}, null, function(v) {
    return /^is[A-Z]/.test(v);
  });
  function D(p, v, x) {
    if (!$.isObject(p))
      throw new TypeError("target must be an object");
    v = v || new FormData(), x = $.toFlatObject(x, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(pe, ie) {
      return !$.isUndefined(ie[pe]);
    });
    const _ = x.metaTokens, A = x.visitor || Y, C = x.dots, k = x.indexes, te = (x.Blob || typeof Blob < "u" && Blob) && $.isSpecCompliantForm(v);
    if (!$.isFunction(A))
      throw new TypeError("visitor must be a function");
    function K(re) {
      if (re === null) return "";
      if ($.isDate(re))
        return re.toISOString();
      if (!te && $.isBlob(re))
        throw new ue("Blob is not supported. Use a Buffer instead.");
      return $.isArrayBuffer(re) || $.isTypedArray(re) ? te && typeof Blob == "function" ? new Blob([re]) : Buffer.from(re) : re;
    }
    function Y(re, pe, ie) {
      let Me = re;
      if (re && !ie && typeof re == "object") {
        if ($.endsWith(pe, "{}"))
          pe = _ ? pe : pe.slice(0, -2), re = JSON.stringify(re);
        else if ($.isArray(re) && jn(re) || ($.isFileList(re) || $.endsWith(pe, "[]")) && (Me = $.toArray(re)))
          return pe = sr(pe), Me.forEach(function(Ke, kt) {
            !($.isUndefined(Ke) || Ke === null) && v.append(
              // eslint-disable-next-line no-nested-ternary
              k === !0 ? lr([pe], kt, C) : k === null ? pe : pe + "[]",
              K(Ke)
            );
          }), !1;
      }
      return ln(re) ? !0 : (v.append(lr(ie, pe, C), K(re)), !1);
    }
    const ne = [], ke = Object.assign(un, {
      defaultVisitor: Y,
      convertValue: K,
      isVisitable: ln
    });
    function Ve(re, pe) {
      if (!$.isUndefined(re)) {
        if (ne.indexOf(re) !== -1)
          throw Error("Circular reference detected in " + pe.join("."));
        ne.push(re), $.forEach(re, function(Me, He) {
          (!($.isUndefined(Me) || Me === null) && A.call(
            v,
            Me,
            $.isString(He) ? He.trim() : He,
            pe,
            ke
          )) === !0 && Ve(Me, pe ? pe.concat(He) : [He]);
        }), ne.pop();
      }
    }
    if (!$.isObject(p))
      throw new TypeError("data must be an object");
    return Ve(p), v;
  }
  function T(p) {
    const v = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g, function(_) {
      return v[_];
    });
  }
  function we(p, v) {
    this._pairs = [], p && D(p, this, v);
  }
  const Ae = we.prototype;
  Ae.append = function(v, x) {
    this._pairs.push([v, x]);
  }, Ae.toString = function(v) {
    const x = v ? function(_) {
      return v.call(this, _, T);
    } : T;
    return this._pairs.map(function(A) {
      return x(A[0]) + "=" + x(A[1]);
    }, "").join("&");
  };
  function Re(p) {
    return encodeURIComponent(p).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function de(p, v, x) {
    if (!v)
      return p;
    const _ = x && x.encode || Re;
    $.isFunction(x) && (x = {
      serialize: x
    });
    const A = x && x.serialize;
    let C;
    if (A ? C = A(v, x) : C = $.isURLSearchParams(v) ? v.toString() : new we(v, x).toString(_), C) {
      const k = p.indexOf("#");
      k !== -1 && (p = p.slice(0, k)), p += (p.indexOf("?") === -1 ? "?" : "&") + C;
    }
    return p;
  }
  class bt {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(v, x, _) {
      return this.handlers.push({
        fulfilled: v,
        rejected: x,
        synchronous: _ ? _.synchronous : !1,
        runWhen: _ ? _.runWhen : null
      }), this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(v) {
      this.handlers[v] && (this.handlers[v] = null);
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      this.handlers && (this.handlers = []);
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(v) {
      $.forEach(this.handlers, function(_) {
        _ !== null && v(_);
      });
    }
  }
  var wt = bt, Xe = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }, St = typeof URLSearchParams < "u" ? URLSearchParams : we, qn = typeof FormData < "u" ? FormData : null, Wt = typeof Blob < "u" ? Blob : null, st = {
    isBrowser: !0,
    classes: {
      URLSearchParams: St,
      FormData: qn,
      Blob: Wt
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const cn = typeof window < "u" && typeof document < "u", fn = typeof navigator == "object" && navigator || void 0, ur = cn && (!fn || ["ReactNative", "NativeScript", "NS"].indexOf(fn.product) < 0), Xt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Fn = cn && window.location.href || "http://localhost";
  var dn = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    hasBrowserEnv: cn,
    hasStandardBrowserWebWorkerEnv: Xt,
    hasStandardBrowserEnv: ur,
    navigator: fn,
    origin: Fn
  }), qe = {
    ...dn,
    ...st
  };
  function Bn(p, v) {
    return D(p, new qe.classes.URLSearchParams(), Object.assign({
      visitor: function(x, _, A, C) {
        return qe.isNode && $.isBuffer(x) ? (this.append(_, x.toString("base64")), !1) : C.defaultVisitor.apply(this, arguments);
      }
    }, v));
  }
  function cr(p) {
    return $.matchAll(/\w+|\[(\w*)]/g, p).map((v) => v[0] === "[]" ? "" : v[1] || v[0]);
  }
  function fr(p) {
    const v = {}, x = Object.keys(p);
    let _;
    const A = x.length;
    let C;
    for (_ = 0; _ < A; _++)
      C = x[_], v[C] = p[C];
    return v;
  }
  function pn(p) {
    function v(x, _, A, C) {
      let k = x[C++];
      if (k === "__proto__") return !0;
      const L = Number.isFinite(+k), te = C >= x.length;
      return k = !k && $.isArray(A) ? A.length : k, te ? ($.hasOwnProp(A, k) ? A[k] = [A[k], _] : A[k] = _, !L) : ((!A[k] || !$.isObject(A[k])) && (A[k] = []), v(x, _, A[k], C) && $.isArray(A[k]) && (A[k] = fr(A[k])), !L);
    }
    if ($.isFormData(p) && $.isFunction(p.entries)) {
      const x = {};
      return $.forEachEntry(p, (_, A) => {
        v(cr(_), A, x, 0);
      }), x;
    }
    return null;
  }
  function dr(p, v, x) {
    if ($.isString(p))
      try {
        return (v || JSON.parse)(p), $.trim(p);
      } catch (_) {
        if (_.name !== "SyntaxError")
          throw _;
      }
    return (0, JSON.stringify)(p);
  }
  const Jt = {
    transitional: Xe,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(v, x) {
      const _ = x.getContentType() || "", A = _.indexOf("application/json") > -1, C = $.isObject(v);
      if (C && $.isHTMLForm(v) && (v = new FormData(v)), $.isFormData(v))
        return A ? JSON.stringify(pn(v)) : v;
      if ($.isArrayBuffer(v) || $.isBuffer(v) || $.isStream(v) || $.isFile(v) || $.isBlob(v) || $.isReadableStream(v))
        return v;
      if ($.isArrayBufferView(v))
        return v.buffer;
      if ($.isURLSearchParams(v))
        return x.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), v.toString();
      let L;
      if (C) {
        if (_.indexOf("application/x-www-form-urlencoded") > -1)
          return Bn(v, this.formSerializer).toString();
        if ((L = $.isFileList(v)) || _.indexOf("multipart/form-data") > -1) {
          const te = this.env && this.env.FormData;
          return D(
            L ? { "files[]": v } : v,
            te && new te(),
            this.formSerializer
          );
        }
      }
      return C || A ? (x.setContentType("application/json", !1), dr(v)) : v;
    }],
    transformResponse: [function(v) {
      const x = this.transitional || Jt.transitional, _ = x && x.forcedJSONParsing, A = this.responseType === "json";
      if ($.isResponse(v) || $.isReadableStream(v))
        return v;
      if (v && $.isString(v) && (_ && !this.responseType || A)) {
        const k = !(x && x.silentJSONParsing) && A;
        try {
          return JSON.parse(v);
        } catch (L) {
          if (k)
            throw L.name === "SyntaxError" ? ue.from(L, ue.ERR_BAD_RESPONSE, this, null, this.response) : L;
        }
      }
      return v;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: qe.classes.FormData,
      Blob: qe.classes.Blob
    },
    validateStatus: function(v) {
      return v >= 200 && v < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  $.forEach(["delete", "get", "head", "post", "put", "patch"], (p) => {
    Jt.headers[p] = {};
  });
  var hn = Jt;
  const ri = $.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var Ln = (p) => {
    const v = {};
    let x, _, A;
    return p && p.split(`
`).forEach(function(k) {
      A = k.indexOf(":"), x = k.substring(0, A).trim().toLowerCase(), _ = k.substring(A + 1).trim(), !(!x || v[x] && ri[x]) && (x === "set-cookie" ? v[x] ? v[x].push(_) : v[x] = [_] : v[x] = v[x] ? v[x] + ", " + _ : _);
    }), v;
  };
  const Ct = Symbol("internals");
  function xt(p) {
    return p && String(p).trim().toLowerCase();
  }
  function mn(p) {
    return p === !1 || p == null ? p : $.isArray(p) ? p.map(mn) : String(p);
  }
  function pr(p) {
    const v = /* @__PURE__ */ Object.create(null), x = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let _;
    for (; _ = x.exec(p); )
      v[_[1]] = _[2];
    return v;
  }
  const Hl = (p) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(p.trim());
  function ii(p, v, x, _, A) {
    if ($.isFunction(_))
      return _.call(this, v, x);
    if (A && (v = x), !!$.isString(v)) {
      if ($.isString(_))
        return v.indexOf(_) !== -1;
      if ($.isRegExp(_))
        return _.test(v);
    }
  }
  function Gl(p) {
    return p.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (v, x, _) => x.toUpperCase() + _);
  }
  function Kl(p, v) {
    const x = $.toCamelCase(" " + v);
    ["get", "set", "has"].forEach((_) => {
      Object.defineProperty(p, _ + x, {
        value: function(A, C, k) {
          return this[_].call(this, v, A, C, k);
        },
        configurable: !0
      });
    });
  }
  class hr {
    constructor(v) {
      v && this.set(v);
    }
    set(v, x, _) {
      const A = this;
      function C(L, te, K) {
        const Y = xt(te);
        if (!Y)
          throw new Error("header name must be a non-empty string");
        const ne = $.findKey(A, Y);
        (!ne || A[ne] === void 0 || K === !0 || K === void 0 && A[ne] !== !1) && (A[ne || te] = mn(L));
      }
      const k = (L, te) => $.forEach(L, (K, Y) => C(K, Y, te));
      if ($.isPlainObject(v) || v instanceof this.constructor)
        k(v, x);
      else if ($.isString(v) && (v = v.trim()) && !Hl(v))
        k(Ln(v), x);
      else if ($.isHeaders(v))
        for (const [L, te] of v.entries())
          C(te, L, _);
      else
        v != null && C(x, v, _);
      return this;
    }
    get(v, x) {
      if (v = xt(v), v) {
        const _ = $.findKey(this, v);
        if (_) {
          const A = this[_];
          if (!x)
            return A;
          if (x === !0)
            return pr(A);
          if ($.isFunction(x))
            return x.call(this, A, _);
          if ($.isRegExp(x))
            return x.exec(A);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(v, x) {
      if (v = xt(v), v) {
        const _ = $.findKey(this, v);
        return !!(_ && this[_] !== void 0 && (!x || ii(this, this[_], _, x)));
      }
      return !1;
    }
    delete(v, x) {
      const _ = this;
      let A = !1;
      function C(k) {
        if (k = xt(k), k) {
          const L = $.findKey(_, k);
          L && (!x || ii(_, _[L], L, x)) && (delete _[L], A = !0);
        }
      }
      return $.isArray(v) ? v.forEach(C) : C(v), A;
    }
    clear(v) {
      const x = Object.keys(this);
      let _ = x.length, A = !1;
      for (; _--; ) {
        const C = x[_];
        (!v || ii(this, this[C], C, v, !0)) && (delete this[C], A = !0);
      }
      return A;
    }
    normalize(v) {
      const x = this, _ = {};
      return $.forEach(this, (A, C) => {
        const k = $.findKey(_, C);
        if (k) {
          x[k] = mn(A), delete x[C];
          return;
        }
        const L = v ? Gl(C) : String(C).trim();
        L !== C && delete x[C], x[L] = mn(A), _[L] = !0;
      }), this;
    }
    concat(...v) {
      return this.constructor.concat(this, ...v);
    }
    toJSON(v) {
      const x = /* @__PURE__ */ Object.create(null);
      return $.forEach(this, (_, A) => {
        _ != null && _ !== !1 && (x[A] = v && $.isArray(_) ? _.join(", ") : _);
      }), x;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([v, x]) => v + ": " + x).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(v) {
      return v instanceof this ? v : new this(v);
    }
    static concat(v, ...x) {
      const _ = new this(v);
      return x.forEach((A) => _.set(A)), _;
    }
    static accessor(v) {
      const _ = (this[Ct] = this[Ct] = {
        accessors: {}
      }).accessors, A = this.prototype;
      function C(k) {
        const L = xt(k);
        _[L] || (Kl(A, k), _[L] = !0);
      }
      return $.isArray(v) ? v.forEach(C) : C(v), this;
    }
  }
  hr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), $.reduceDescriptors(hr.prototype, ({ value: p }, v) => {
    let x = v[0].toUpperCase() + v.slice(1);
    return {
      get: () => p,
      set(_) {
        this[x] = _;
      }
    };
  }), $.freezeMethods(hr);
  var pt = hr;
  function oi(p, v) {
    const x = this || hn, _ = v || x, A = pt.from(_.headers);
    let C = _.data;
    return $.forEach(p, function(L) {
      C = L.call(x, C, A.normalize(), v ? v.status : void 0);
    }), A.normalize(), C;
  }
  function Go(p) {
    return !!(p && p.__CANCEL__);
  }
  function yn(p, v, x) {
    ue.call(this, p ?? "canceled", ue.ERR_CANCELED, v, x), this.name = "CanceledError";
  }
  $.inherits(yn, ue, {
    __CANCEL__: !0
  });
  function Ko(p, v, x) {
    const _ = x.config.validateStatus;
    !x.status || !_ || _(x.status) ? p(x) : v(new ue(
      "Request failed with status code " + x.status,
      [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][Math.floor(x.status / 100) - 4],
      x.config,
      x.request,
      x
    ));
  }
  function zl(p) {
    const v = /^([-+\w]{1,25})(:?\/\/|:)/.exec(p);
    return v && v[1] || "";
  }
  function Yl(p, v) {
    p = p || 10;
    const x = new Array(p), _ = new Array(p);
    let A = 0, C = 0, k;
    return v = v !== void 0 ? v : 1e3, function(te) {
      const K = Date.now(), Y = _[C];
      k || (k = K), x[A] = te, _[A] = K;
      let ne = C, ke = 0;
      for (; ne !== A; )
        ke += x[ne++], ne = ne % p;
      if (A = (A + 1) % p, A === C && (C = (C + 1) % p), K - k < v)
        return;
      const Ve = Y && K - Y;
      return Ve ? Math.round(ke * 1e3 / Ve) : void 0;
    };
  }
  function Xl(p, v) {
    let x = 0, _ = 1e3 / v, A, C;
    const k = (K, Y = Date.now()) => {
      x = Y, A = null, C && (clearTimeout(C), C = null), p.apply(null, K);
    };
    return [(...K) => {
      const Y = Date.now(), ne = Y - x;
      ne >= _ ? k(K, Y) : (A = K, C || (C = setTimeout(() => {
        C = null, k(A);
      }, _ - ne)));
    }, () => A && k(A)];
  }
  const mr = (p, v, x = 3) => {
    let _ = 0;
    const A = Yl(50, 250);
    return Xl((C) => {
      const k = C.loaded, L = C.lengthComputable ? C.total : void 0, te = k - _, K = A(te), Y = k <= L;
      _ = k;
      const ne = {
        loaded: k,
        total: L,
        progress: L ? k / L : void 0,
        bytes: te,
        rate: K || void 0,
        estimated: K && L && Y ? (L - k) / K : void 0,
        event: C,
        lengthComputable: L != null,
        [v ? "download" : "upload"]: !0
      };
      p(ne);
    }, x);
  }, zo = (p, v) => {
    const x = p != null;
    return [(_) => v[0]({
      lengthComputable: x,
      total: p,
      loaded: _
    }), v[1]];
  }, Yo = (p) => (...v) => $.asap(() => p(...v));
  var Jl = qe.hasStandardBrowserEnv ? /* @__PURE__ */ ((p, v) => (x) => (x = new URL(x, qe.origin), p.protocol === x.protocol && p.host === x.host && (v || p.port === x.port)))(
    new URL(qe.origin),
    qe.navigator && /(msie|trident)/i.test(qe.navigator.userAgent)
  ) : () => !0, Ql = qe.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(p, v, x, _, A, C) {
        const k = [p + "=" + encodeURIComponent(v)];
        $.isNumber(x) && k.push("expires=" + new Date(x).toGMTString()), $.isString(_) && k.push("path=" + _), $.isString(A) && k.push("domain=" + A), C === !0 && k.push("secure"), document.cookie = k.join("; ");
      },
      read(p) {
        const v = document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"));
        return v ? decodeURIComponent(v[3]) : null;
      },
      remove(p) {
        this.write(p, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );
  function Zl(p) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(p);
  }
  function eu(p, v) {
    return v ? p.replace(/\/?\/$/, "") + "/" + v.replace(/^\/+/, "") : p;
  }
  function Xo(p, v) {
    return p && !Zl(v) ? eu(p, v) : v;
  }
  const Jo = (p) => p instanceof pt ? { ...p } : p;
  function Qt(p, v) {
    v = v || {};
    const x = {};
    function _(K, Y, ne, ke) {
      return $.isPlainObject(K) && $.isPlainObject(Y) ? $.merge.call({ caseless: ke }, K, Y) : $.isPlainObject(Y) ? $.merge({}, Y) : $.isArray(Y) ? Y.slice() : Y;
    }
    function A(K, Y, ne, ke) {
      if ($.isUndefined(Y)) {
        if (!$.isUndefined(K))
          return _(void 0, K, ne, ke);
      } else return _(K, Y, ne, ke);
    }
    function C(K, Y) {
      if (!$.isUndefined(Y))
        return _(void 0, Y);
    }
    function k(K, Y) {
      if ($.isUndefined(Y)) {
        if (!$.isUndefined(K))
          return _(void 0, K);
      } else return _(void 0, Y);
    }
    function L(K, Y, ne) {
      if (ne in v)
        return _(K, Y);
      if (ne in p)
        return _(void 0, K);
    }
    const te = {
      url: C,
      method: C,
      data: C,
      baseURL: k,
      transformRequest: k,
      transformResponse: k,
      paramsSerializer: k,
      timeout: k,
      timeoutMessage: k,
      withCredentials: k,
      withXSRFToken: k,
      adapter: k,
      responseType: k,
      xsrfCookieName: k,
      xsrfHeaderName: k,
      onUploadProgress: k,
      onDownloadProgress: k,
      decompress: k,
      maxContentLength: k,
      maxBodyLength: k,
      beforeRedirect: k,
      transport: k,
      httpAgent: k,
      httpsAgent: k,
      cancelToken: k,
      socketPath: k,
      responseEncoding: k,
      validateStatus: L,
      headers: (K, Y, ne) => A(Jo(K), Jo(Y), ne, !0)
    };
    return $.forEach(Object.keys(Object.assign({}, p, v)), function(Y) {
      const ne = te[Y] || A, ke = ne(p[Y], v[Y], Y);
      $.isUndefined(ke) && ne !== L || (x[Y] = ke);
    }), x;
  }
  var Qo = (p) => {
    const v = Qt({}, p);
    let { data: x, withXSRFToken: _, xsrfHeaderName: A, xsrfCookieName: C, headers: k, auth: L } = v;
    v.headers = k = pt.from(k), v.url = de(Xo(v.baseURL, v.url), p.params, p.paramsSerializer), L && k.set(
      "Authorization",
      "Basic " + btoa((L.username || "") + ":" + (L.password ? unescape(encodeURIComponent(L.password)) : ""))
    );
    let te;
    if ($.isFormData(x)) {
      if (qe.hasStandardBrowserEnv || qe.hasStandardBrowserWebWorkerEnv)
        k.setContentType(void 0);
      else if ((te = k.getContentType()) !== !1) {
        const [K, ...Y] = te ? te.split(";").map((ne) => ne.trim()).filter(Boolean) : [];
        k.setContentType([K || "multipart/form-data", ...Y].join("; "));
      }
    }
    if (qe.hasStandardBrowserEnv && (_ && $.isFunction(_) && (_ = _(v)), _ || _ !== !1 && Jl(v.url))) {
      const K = A && C && Ql.read(C);
      K && k.set(A, K);
    }
    return v;
  }, tu = typeof XMLHttpRequest < "u" && function(p) {
    return new Promise(function(x, _) {
      const A = Qo(p);
      let C = A.data;
      const k = pt.from(A.headers).normalize();
      let { responseType: L, onUploadProgress: te, onDownloadProgress: K } = A, Y, ne, ke, Ve, re;
      function pe() {
        Ve && Ve(), re && re(), A.cancelToken && A.cancelToken.unsubscribe(Y), A.signal && A.signal.removeEventListener("abort", Y);
      }
      let ie = new XMLHttpRequest();
      ie.open(A.method.toUpperCase(), A.url, !0), ie.timeout = A.timeout;
      function Me() {
        if (!ie)
          return;
        const Ke = pt.from(
          "getAllResponseHeaders" in ie && ie.getAllResponseHeaders()
        ), rt = {
          data: !L || L === "text" || L === "json" ? ie.responseText : ie.response,
          status: ie.status,
          statusText: ie.statusText,
          headers: Ke,
          config: p,
          request: ie
        };
        Ko(function(Zt) {
          x(Zt), pe();
        }, function(Zt) {
          _(Zt), pe();
        }, rt), ie = null;
      }
      "onloadend" in ie ? ie.onloadend = Me : ie.onreadystatechange = function() {
        !ie || ie.readyState !== 4 || ie.status === 0 && !(ie.responseURL && ie.responseURL.indexOf("file:") === 0) || setTimeout(Me);
      }, ie.onabort = function() {
        ie && (_(new ue("Request aborted", ue.ECONNABORTED, p, ie)), ie = null);
      }, ie.onerror = function() {
        _(new ue("Network Error", ue.ERR_NETWORK, p, ie)), ie = null;
      }, ie.ontimeout = function() {
        let kt = A.timeout ? "timeout of " + A.timeout + "ms exceeded" : "timeout exceeded";
        const rt = A.transitional || Xe;
        A.timeoutErrorMessage && (kt = A.timeoutErrorMessage), _(new ue(
          kt,
          rt.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
          p,
          ie
        )), ie = null;
      }, C === void 0 && k.setContentType(null), "setRequestHeader" in ie && $.forEach(k.toJSON(), function(kt, rt) {
        ie.setRequestHeader(rt, kt);
      }), $.isUndefined(A.withCredentials) || (ie.withCredentials = !!A.withCredentials), L && L !== "json" && (ie.responseType = A.responseType), K && ([ke, re] = mr(K, !0), ie.addEventListener("progress", ke)), te && ie.upload && ([ne, Ve] = mr(te), ie.upload.addEventListener("progress", ne), ie.upload.addEventListener("loadend", Ve)), (A.cancelToken || A.signal) && (Y = (Ke) => {
        ie && (_(!Ke || Ke.type ? new yn(null, p, ie) : Ke), ie.abort(), ie = null);
      }, A.cancelToken && A.cancelToken.subscribe(Y), A.signal && (A.signal.aborted ? Y() : A.signal.addEventListener("abort", Y)));
      const He = zl(A.url);
      if (He && qe.protocols.indexOf(He) === -1) {
        _(new ue("Unsupported protocol " + He + ":", ue.ERR_BAD_REQUEST, p));
        return;
      }
      ie.send(C || null);
    });
  }, nu = (p, v) => {
    const { length: x } = p = p ? p.filter(Boolean) : [];
    if (v || x) {
      let _ = new AbortController(), A;
      const C = function(K) {
        if (!A) {
          A = !0, L();
          const Y = K instanceof Error ? K : this.reason;
          _.abort(Y instanceof ue ? Y : new yn(Y instanceof Error ? Y.message : Y));
        }
      };
      let k = v && setTimeout(() => {
        k = null, C(new ue(`timeout ${v} of ms exceeded`, ue.ETIMEDOUT));
      }, v);
      const L = () => {
        p && (k && clearTimeout(k), k = null, p.forEach((K) => {
          K.unsubscribe ? K.unsubscribe(C) : K.removeEventListener("abort", C);
        }), p = null);
      };
      p.forEach((K) => K.addEventListener("abort", C));
      const { signal: te } = _;
      return te.unsubscribe = () => $.asap(L), te;
    }
  };
  const ru = function* (p, v) {
    let x = p.byteLength;
    if (x < v) {
      yield p;
      return;
    }
    let _ = 0, A;
    for (; _ < x; )
      A = _ + v, yield p.slice(_, A), _ = A;
  }, iu = async function* (p, v) {
    for await (const x of ou(p))
      yield* ru(x, v);
  }, ou = async function* (p) {
    if (p[Symbol.asyncIterator]) {
      yield* p;
      return;
    }
    const v = p.getReader();
    try {
      for (; ; ) {
        const { done: x, value: _ } = await v.read();
        if (x)
          break;
        yield _;
      }
    } finally {
      await v.cancel();
    }
  }, Zo = (p, v, x, _) => {
    const A = iu(p, v);
    let C = 0, k, L = (te) => {
      k || (k = !0, _ && _(te));
    };
    return new ReadableStream({
      async pull(te) {
        try {
          const { done: K, value: Y } = await A.next();
          if (K) {
            L(), te.close();
            return;
          }
          let ne = Y.byteLength;
          if (x) {
            let ke = C += ne;
            x(ke);
          }
          te.enqueue(new Uint8Array(Y));
        } catch (K) {
          throw L(K), K;
        }
      },
      cancel(te) {
        return L(te), A.return();
      }
    }, {
      highWaterMark: 2
    });
  }, yr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ea = yr && typeof ReadableStream == "function", au = yr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((p) => (v) => p.encode(v))(new TextEncoder()) : async (p) => new Uint8Array(await new Response(p).arrayBuffer())), ta = (p, ...v) => {
    try {
      return !!p(...v);
    } catch {
      return !1;
    }
  }, su = ea && ta(() => {
    let p = !1;
    const v = new Request(qe.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !v;
  }), na = 64 * 1024, ai = ea && ta(() => $.isReadableStream(new Response("").body)), vr = {
    stream: ai && ((p) => p.body)
  };
  yr && ((p) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
      !vr[v] && (vr[v] = $.isFunction(p[v]) ? (x) => x[v]() : (x, _) => {
        throw new ue(`Response type '${v}' is not supported`, ue.ERR_NOT_SUPPORT, _);
      });
    });
  })(new Response());
  const lu = async (p) => {
    if (p == null)
      return 0;
    if ($.isBlob(p))
      return p.size;
    if ($.isSpecCompliantForm(p))
      return (await new Request(qe.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if ($.isArrayBufferView(p) || $.isArrayBuffer(p))
      return p.byteLength;
    if ($.isURLSearchParams(p) && (p = p + ""), $.isString(p))
      return (await au(p)).byteLength;
  }, uu = async (p, v) => {
    const x = $.toFiniteNumber(p.getContentLength());
    return x ?? lu(v);
  };
  var cu = yr && (async (p) => {
    let {
      url: v,
      method: x,
      data: _,
      signal: A,
      cancelToken: C,
      timeout: k,
      onDownloadProgress: L,
      onUploadProgress: te,
      responseType: K,
      headers: Y,
      withCredentials: ne = "same-origin",
      fetchOptions: ke
    } = Qo(p);
    K = K ? (K + "").toLowerCase() : "text";
    let Ve = nu([A, C && C.toAbortSignal()], k), re;
    const pe = Ve && Ve.unsubscribe && (() => {
      Ve.unsubscribe();
    });
    let ie;
    try {
      if (te && su && x !== "get" && x !== "head" && (ie = await uu(Y, _)) !== 0) {
        let rt = new Request(v, {
          method: "POST",
          body: _,
          duplex: "half"
        }), Vt;
        if ($.isFormData(_) && (Vt = rt.headers.get("content-type")) && Y.setContentType(Vt), rt.body) {
          const [Zt, xr] = zo(
            ie,
            mr(Yo(te))
          );
          _ = Zo(rt.body, na, Zt, xr);
        }
      }
      $.isString(ne) || (ne = ne ? "include" : "omit");
      const Me = "credentials" in Request.prototype;
      re = new Request(v, {
        ...ke,
        signal: Ve,
        method: x.toUpperCase(),
        headers: Y.normalize().toJSON(),
        body: _,
        duplex: "half",
        credentials: Me ? ne : void 0
      });
      let He = await fetch(re);
      const Ke = ai && (K === "stream" || K === "response");
      if (ai && (L || Ke && pe)) {
        const rt = {};
        ["status", "statusText", "headers"].forEach((ua) => {
          rt[ua] = He[ua];
        });
        const Vt = $.toFiniteNumber(He.headers.get("content-length")), [Zt, xr] = L && zo(
          Vt,
          mr(Yo(L), !0)
        ) || [];
        He = new Response(
          Zo(He.body, na, Zt, () => {
            xr && xr(), pe && pe();
          }),
          rt
        );
      }
      K = K || "text";
      let kt = await vr[$.findKey(vr, K) || "text"](He, p);
      return !Ke && pe && pe(), await new Promise((rt, Vt) => {
        Ko(rt, Vt, {
          data: kt,
          headers: pt.from(He.headers),
          status: He.status,
          statusText: He.statusText,
          config: p,
          request: re
        });
      });
    } catch (Me) {
      throw pe && pe(), Me && Me.name === "TypeError" && /fetch/i.test(Me.message) ? Object.assign(
        new ue("Network Error", ue.ERR_NETWORK, p, re),
        {
          cause: Me.cause || Me
        }
      ) : ue.from(Me, Me && Me.code, p, re);
    }
  });
  const si = {
    http: Mn,
    xhr: tu,
    fetch: cu
  };
  $.forEach(si, (p, v) => {
    if (p) {
      try {
        Object.defineProperty(p, "name", { value: v });
      } catch {
      }
      Object.defineProperty(p, "adapterName", { value: v });
    }
  });
  const ra = (p) => `- ${p}`, fu = (p) => $.isFunction(p) || p === null || p === !1;
  var ia = {
    getAdapter: (p) => {
      p = $.isArray(p) ? p : [p];
      const { length: v } = p;
      let x, _;
      const A = {};
      for (let C = 0; C < v; C++) {
        x = p[C];
        let k;
        if (_ = x, !fu(x) && (_ = si[(k = String(x)).toLowerCase()], _ === void 0))
          throw new ue(`Unknown adapter '${k}'`);
        if (_)
          break;
        A[k || "#" + C] = _;
      }
      if (!_) {
        const C = Object.entries(A).map(
          ([L, te]) => `adapter ${L} ` + (te === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let k = v ? C.length > 1 ? `since :
` + C.map(ra).join(`
`) : " " + ra(C[0]) : "as no adapter specified";
        throw new ue(
          "There is no suitable adapter to dispatch the request " + k,
          "ERR_NOT_SUPPORT"
        );
      }
      return _;
    },
    adapters: si
  };
  function li(p) {
    if (p.cancelToken && p.cancelToken.throwIfRequested(), p.signal && p.signal.aborted)
      throw new yn(null, p);
  }
  function oa(p) {
    return li(p), p.headers = pt.from(p.headers), p.data = oi.call(
      p,
      p.transformRequest
    ), ["post", "put", "patch"].indexOf(p.method) !== -1 && p.headers.setContentType("application/x-www-form-urlencoded", !1), ia.getAdapter(p.adapter || hn.adapter)(p).then(function(_) {
      return li(p), _.data = oi.call(
        p,
        p.transformResponse,
        _
      ), _.headers = pt.from(_.headers), _;
    }, function(_) {
      return Go(_) || (li(p), _ && _.response && (_.response.data = oi.call(
        p,
        p.transformResponse,
        _.response
      ), _.response.headers = pt.from(_.response.headers))), Promise.reject(_);
    });
  }
  const aa = "1.7.9", gr = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((p, v) => {
    gr[p] = function(_) {
      return typeof _ === p || "a" + (v < 1 ? "n " : " ") + p;
    };
  });
  const sa = {};
  gr.transitional = function(v, x, _) {
    function A(C, k) {
      return "[Axios v" + aa + "] Transitional option '" + C + "'" + k + (_ ? ". " + _ : "");
    }
    return (C, k, L) => {
      if (v === !1)
        throw new ue(
          A(k, " has been removed" + (x ? " in " + x : "")),
          ue.ERR_DEPRECATED
        );
      return x && !sa[k] && (sa[k] = !0, console.warn(
        A(
          k,
          " has been deprecated since v" + x + " and will be removed in the near future"
        )
      )), v ? v(C, k, L) : !0;
    };
  }, gr.spelling = function(v) {
    return (x, _) => (console.warn(`${_} is likely a misspelling of ${v}`), !0);
  };
  function du(p, v, x) {
    if (typeof p != "object")
      throw new ue("options must be an object", ue.ERR_BAD_OPTION_VALUE);
    const _ = Object.keys(p);
    let A = _.length;
    for (; A-- > 0; ) {
      const C = _[A], k = v[C];
      if (k) {
        const L = p[C], te = L === void 0 || k(L, C, p);
        if (te !== !0)
          throw new ue("option " + C + " must be " + te, ue.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (x !== !0)
        throw new ue("Unknown option " + C, ue.ERR_BAD_OPTION);
    }
  }
  var br = {
    assertOptions: du,
    validators: gr
  };
  const _t = br.validators;
  class wr {
    constructor(v) {
      this.defaults = v, this.interceptors = {
        request: new wt(),
        response: new wt()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(v, x) {
      try {
        return await this._request(v, x);
      } catch (_) {
        if (_ instanceof Error) {
          let A = {};
          Error.captureStackTrace ? Error.captureStackTrace(A) : A = new Error();
          const C = A.stack ? A.stack.replace(/^.+\n/, "") : "";
          try {
            _.stack ? C && !String(_.stack).endsWith(C.replace(/^.+\n.+\n/, "")) && (_.stack += `
` + C) : _.stack = C;
          } catch {
          }
        }
        throw _;
      }
    }
    _request(v, x) {
      typeof v == "string" ? (x = x || {}, x.url = v) : x = v || {}, x = Qt(this.defaults, x);
      const { transitional: _, paramsSerializer: A, headers: C } = x;
      _ !== void 0 && br.assertOptions(_, {
        silentJSONParsing: _t.transitional(_t.boolean),
        forcedJSONParsing: _t.transitional(_t.boolean),
        clarifyTimeoutError: _t.transitional(_t.boolean)
      }, !1), A != null && ($.isFunction(A) ? x.paramsSerializer = {
        serialize: A
      } : br.assertOptions(A, {
        encode: _t.function,
        serialize: _t.function
      }, !0)), br.assertOptions(x, {
        baseUrl: _t.spelling("baseURL"),
        withXsrfToken: _t.spelling("withXSRFToken")
      }, !0), x.method = (x.method || this.defaults.method || "get").toLowerCase();
      let k = C && $.merge(
        C.common,
        C[x.method]
      );
      C && $.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (re) => {
          delete C[re];
        }
      ), x.headers = pt.concat(k, C);
      const L = [];
      let te = !0;
      this.interceptors.request.forEach(function(pe) {
        typeof pe.runWhen == "function" && pe.runWhen(x) === !1 || (te = te && pe.synchronous, L.unshift(pe.fulfilled, pe.rejected));
      });
      const K = [];
      this.interceptors.response.forEach(function(pe) {
        K.push(pe.fulfilled, pe.rejected);
      });
      let Y, ne = 0, ke;
      if (!te) {
        const re = [oa.bind(this), void 0];
        for (re.unshift.apply(re, L), re.push.apply(re, K), ke = re.length, Y = Promise.resolve(x); ne < ke; )
          Y = Y.then(re[ne++], re[ne++]);
        return Y;
      }
      ke = L.length;
      let Ve = x;
      for (ne = 0; ne < ke; ) {
        const re = L[ne++], pe = L[ne++];
        try {
          Ve = re(Ve);
        } catch (ie) {
          pe.call(this, ie);
          break;
        }
      }
      try {
        Y = oa.call(this, Ve);
      } catch (re) {
        return Promise.reject(re);
      }
      for (ne = 0, ke = K.length; ne < ke; )
        Y = Y.then(K[ne++], K[ne++]);
      return Y;
    }
    getUri(v) {
      v = Qt(this.defaults, v);
      const x = Xo(v.baseURL, v.url);
      return de(x, v.params, v.paramsSerializer);
    }
  }
  $.forEach(["delete", "get", "head", "options"], function(v) {
    wr.prototype[v] = function(x, _) {
      return this.request(Qt(_ || {}, {
        method: v,
        url: x,
        data: (_ || {}).data
      }));
    };
  }), $.forEach(["post", "put", "patch"], function(v) {
    function x(_) {
      return function(C, k, L) {
        return this.request(Qt(L || {}, {
          method: v,
          headers: _ ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: C,
          data: k
        }));
      };
    }
    wr.prototype[v] = x(), wr.prototype[v + "Form"] = x(!0);
  });
  var Sr = wr;
  class ui {
    constructor(v) {
      if (typeof v != "function")
        throw new TypeError("executor must be a function.");
      let x;
      this.promise = new Promise(function(C) {
        x = C;
      });
      const _ = this;
      this.promise.then((A) => {
        if (!_._listeners) return;
        let C = _._listeners.length;
        for (; C-- > 0; )
          _._listeners[C](A);
        _._listeners = null;
      }), this.promise.then = (A) => {
        let C;
        const k = new Promise((L) => {
          _.subscribe(L), C = L;
        }).then(A);
        return k.cancel = function() {
          _.unsubscribe(C);
        }, k;
      }, v(function(C, k, L) {
        _.reason || (_.reason = new yn(C, k, L), x(_.reason));
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason)
        throw this.reason;
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(v) {
      if (this.reason) {
        v(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(v) : this._listeners = [v];
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(v) {
      if (!this._listeners)
        return;
      const x = this._listeners.indexOf(v);
      x !== -1 && this._listeners.splice(x, 1);
    }
    toAbortSignal() {
      const v = new AbortController(), x = (_) => {
        v.abort(_);
      };
      return this.subscribe(x), v.signal.unsubscribe = () => this.unsubscribe(x), v.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let v;
      return {
        token: new ui(function(A) {
          v = A;
        }),
        cancel: v
      };
    }
  }
  var pu = ui;
  function hu(p) {
    return function(x) {
      return p.apply(null, x);
    };
  }
  function mu(p) {
    return $.isObject(p) && p.isAxiosError === !0;
  }
  const ci = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(ci).forEach(([p, v]) => {
    ci[v] = p;
  });
  var yu = ci;
  function la(p) {
    const v = new Sr(p), x = e(Sr.prototype.request, v);
    return $.extend(x, Sr.prototype, v, { allOwnKeys: !0 }), $.extend(x, v, null, { allOwnKeys: !0 }), x.create = function(A) {
      return la(Qt(p, A));
    }, x;
  }
  const Fe = la(hn);
  return Fe.Axios = Sr, Fe.CanceledError = yn, Fe.CancelToken = pu, Fe.isCancel = Go, Fe.VERSION = aa, Fe.toFormData = D, Fe.AxiosError = ue, Fe.Cancel = Fe.CanceledError, Fe.all = function(v) {
    return Promise.all(v);
  }, Fe.spread = hu, Fe.isAxiosError = mu, Fe.mergeConfig = Qt, Fe.AxiosHeaders = pt, Fe.formToJSON = (p) => pn($.isHTMLForm(p) ? new FormData(p) : p), Fe.getAdapter = ia.getAdapter, Fe.HttpStatusCode = yu, Fe.default = Fe, ki = Fe, ki;
}
var os;
function Rp() {
  if (os) return Tt;
  os = 1;
  var e = Tt.__assign || function() {
    return e = Object.assign || function(s) {
      for (var c, u = 1, l = arguments.length; u < l; u++) {
        c = arguments[u];
        for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (s[f] = c[f]);
      }
      return s;
    }, e.apply(this, arguments);
  }, t = Tt.__awaiter || function(s, c, u, l) {
    function f(h) {
      return h instanceof u ? h : new u(function(m) {
        m(h);
      });
    }
    return new (u || (u = Promise))(function(h, m) {
      function b(a) {
        try {
          d(l.next(a));
        } catch (w) {
          m(w);
        }
      }
      function g(a) {
        try {
          d(l.throw(a));
        } catch (w) {
          m(w);
        }
      }
      function d(a) {
        a.done ? h(a.value) : f(a.value).then(b, g);
      }
      d((l = l.apply(s, c || [])).next());
    });
  }, r = Tt.__generator || function(s, c) {
    var u = { label: 0, sent: function() {
      if (h[0] & 1) throw h[1];
      return h[1];
    }, trys: [], ops: [] }, l, f, h, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return m.next = b(0), m.throw = b(1), m.return = b(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function b(d) {
      return function(a) {
        return g([d, a]);
      };
    }
    function g(d) {
      if (l) throw new TypeError("Generator is already executing.");
      for (; m && (m = 0, d[0] && (u = 0)), u; ) try {
        if (l = 1, f && (h = d[0] & 2 ? f.return : d[0] ? f.throw || ((h = f.return) && h.call(f), 0) : f.next) && !(h = h.call(f, d[1])).done) return h;
        switch (f = 0, h && (d = [d[0] & 2, h.value]), d[0]) {
          case 0:
          case 1:
            h = d;
            break;
          case 4:
            return u.label++, { value: d[1], done: !1 };
          case 5:
            u.label++, f = d[1], d = [0];
            continue;
          case 7:
            d = u.ops.pop(), u.trys.pop();
            continue;
          default:
            if (h = u.trys, !(h = h.length > 0 && h[h.length - 1]) && (d[0] === 6 || d[0] === 2)) {
              u = 0;
              continue;
            }
            if (d[0] === 3 && (!h || d[1] > h[0] && d[1] < h[3])) {
              u.label = d[1];
              break;
            }
            if (d[0] === 6 && u.label < h[1]) {
              u.label = h[1], h = d;
              break;
            }
            if (h && u.label < h[2]) {
              u.label = h[2], u.ops.push(d);
              break;
            }
            h[2] && u.ops.pop(), u.trys.pop();
            continue;
        }
        d = c.call(s, u);
      } catch (a) {
        d = [6, a], f = 0;
      } finally {
        l = h = 0;
      }
      if (d[0] & 5) throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, n = Tt.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.AxiosClient = void 0;
  var i = n(/* @__PURE__ */ Ap()), o = (
    /** @class */
    function() {
      function s(c) {
        var u = c.responseHandler, l = c.requestConfigBuilder;
        this.responseHandler = u, this.requestConfigBuilder = l;
      }
      return s.prototype.get = function(c, u) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", c, u)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, s.prototype.getData = function(c, u) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", c, u, {
                  responseType: "arraybuffer"
                })];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, s.prototype.post = function(c, u) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", c, u)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, s.prototype.postData = function(c, u) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", c, u)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, s.prototype.put = function(c, u) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("put", c, u)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, s.prototype.delete = function(c, u) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("delete", c, u)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, s.prototype.sendRequest = function(c) {
        return this.responseHandler.handle(
          // eslint-disable-next-line new-cap
          (0, i.default)(e(e({}, c), { maxBodyLength: 1 / 0, maxContentLength: 1 / 0 }))
        );
      }, s;
    }()
  );
  return Tt.AxiosClient = o, Tt;
}
var as;
function Pp() {
  return as || (as = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DefaultHttpClient = void 0;
    var t = Rp();
    Object.defineProperty(e, "DefaultHttpClient", { enumerable: !0, get: function() {
      return t.AxiosClient;
    } });
  }(Ci)), Ci;
}
var It = {}, Di, ss;
function Nn() {
  return ss || (ss = 1, Di = TypeError), Di;
}
const Cp = {}, kp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cp
}, Symbol.toStringTag, { value: "Module" })), Dp = /* @__PURE__ */ Cf(kp);
var Ti, ls;
function ei() {
  if (ls) return Ti;
  ls = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = i && o && typeof o.get == "function" ? o.get : null, c = i && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, f = typeof WeakSet == "function" && WeakSet.prototype, h = f ? WeakSet.prototype.has : null, m = typeof WeakRef == "function" && WeakRef.prototype, b = m ? WeakRef.prototype.deref : null, g = Boolean.prototype.valueOf, d = Object.prototype.toString, a = Function.prototype.toString, w = String.prototype.match, y = String.prototype.slice, S = String.prototype.replace, E = String.prototype.toUpperCase, P = String.prototype.toLowerCase, O = RegExp.prototype.test, R = Array.prototype.concat, I = Array.prototype.join, q = Array.prototype.slice, j = Math.floor, F = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, V = Object.getOwnPropertySymbols, oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, W = typeof Symbol == "function" && typeof Symbol.iterator == "object", B = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === W || !0) ? Symbol.toStringTag : null, U = Object.prototype.propertyIsEnumerable, z = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(D) {
    return D.__proto__;
  } : null);
  function M(D, T) {
    if (D === 1 / 0 || D === -1 / 0 || D !== D || D && D > -1e3 && D < 1e3 || O.call(/e/, T))
      return T;
    var we = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof D == "number") {
      var Ae = D < 0 ? -j(-D) : j(D);
      if (Ae !== D) {
        var Re = String(Ae), de = y.call(T, Re.length + 1);
        return S.call(Re, we, "$&_") + "." + S.call(S.call(de, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return S.call(T, we, "$&_");
  }
  var Q = Dp, ee = Q.custom, fe = Ge(ee) ? ee : null, me = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Ee = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Ti = function D(T, we, Ae, Re) {
    var de = we || {};
    if (ze(de, "quoteStyle") && !ze(me, de.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (ze(de, "maxStringLength") && (typeof de.maxStringLength == "number" ? de.maxStringLength < 0 && de.maxStringLength !== 1 / 0 : de.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var bt = ze(de, "customInspect") ? de.customInspect : !0;
    if (typeof bt != "boolean" && bt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (ze(de, "indent") && de.indent !== null && de.indent !== "	" && !(parseInt(de.indent, 10) === de.indent && de.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ze(de, "numericSeparator") && typeof de.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var wt = de.numericSeparator;
    if (typeof T > "u")
      return "undefined";
    if (T === null)
      return "null";
    if (typeof T == "boolean")
      return T ? "true" : "false";
    if (typeof T == "string")
      return ue(T, de);
    if (typeof T == "number") {
      if (T === 0)
        return 1 / 0 / T > 0 ? "0" : "-0";
      var Xe = String(T);
      return wt ? M(T, Xe) : Xe;
    }
    if (typeof T == "bigint") {
      var St = String(T) + "n";
      return wt ? M(T, St) : St;
    }
    var qn = typeof de.depth > "u" ? 5 : de.depth;
    if (typeof Ae > "u" && (Ae = 0), Ae >= qn && qn > 0 && typeof T == "object")
      return ve(T) ? "[Array]" : "[Object]";
    var Wt = lr(de, Ae);
    if (typeof Re > "u")
      Re = [];
    else if (gt(Re, T) >= 0)
      return "[Circular]";
    function st(Ct, xt, mn) {
      if (xt && (Re = q.call(Re), Re.push(xt)), mn) {
        var pr = {
          depth: de.depth
        };
        return ze(de, "quoteStyle") && (pr.quoteStyle = de.quoteStyle), D(Ct, pr, Ae + 1, Re);
      }
      return D(Ct, de, Ae + 1, Re);
    }
    if (typeof T == "function" && !ge(T)) {
      var cn = Ft(T), fn = un(T, st);
      return "[Function" + (cn ? ": " + cn : " (anonymous)") + "]" + (fn.length > 0 ? " { " + I.call(fn, ", ") + " }" : "");
    }
    if (Ge(T)) {
      var ur = W ? S.call(String(T), /^(Symbol\(.*\))_[^)]*$/, "$1") : oe.call(T);
      return typeof T == "object" && !W ? Ut(ur) : ur;
    }
    if ($(T)) {
      for (var Xt = "<" + P.call(String(T.nodeName)), Fn = T.attributes || [], dn = 0; dn < Fn.length; dn++)
        Xt += " " + Fn[dn].name + "=" + _e(N(Fn[dn].value), "double", de);
      return Xt += ">", T.childNodes && T.childNodes.length && (Xt += "..."), Xt += "</" + P.call(String(T.nodeName)) + ">", Xt;
    }
    if (ve(T)) {
      if (T.length === 0)
        return "[]";
      var qe = un(T, st);
      return Wt && !sr(qe) ? "[" + jn(qe, Wt) + "]" : "[ " + I.call(qe, ", ") + " ]";
    }
    if (Z(T)) {
      var Bn = un(T, st);
      return !("cause" in Error.prototype) && "cause" in T && !U.call(T, "cause") ? "{ [" + String(T) + "] " + I.call(R.call("[cause]: " + st(T.cause), Bn), ", ") + " }" : Bn.length === 0 ? "[" + String(T) + "]" : "{ [" + String(T) + "] " + I.call(Bn, ", ") + " }";
    }
    if (typeof T == "object" && bt) {
      if (fe && typeof T[fe] == "function" && Q)
        return Q(T, { depth: qn - Ae });
      if (bt !== "symbol" && typeof T.inspect == "function")
        return T.inspect();
    }
    if (at(T)) {
      var cr = [];
      return n && n.call(T, function(Ct, xt) {
        cr.push(st(xt, T, !0) + " => " + st(Ct, T));
      }), ln("Map", r.call(T), cr, Wt);
    }
    if (Pt(T)) {
      var fr = [];
      return c && c.call(T, function(Ct) {
        fr.push(st(Ct, T));
      }), ln("Set", s.call(T), fr, Wt);
    }
    if (Bt(T))
      return Mn("WeakMap");
    if (ni(T))
      return Mn("WeakSet");
    if (Lt(T))
      return Mn("WeakRef");
    if (he(T))
      return Ut(st(Number(T)));
    if (nt(T))
      return Ut(st(F.call(T)));
    if (Ce(T))
      return Ut(g.call(T));
    if (ye(T))
      return Ut(st(String(T)));
    if (typeof window < "u" && T === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && T === globalThis || typeof rr < "u" && T === rr)
      return "{ [object globalThis] }";
    if (!Oe(T) && !ge(T)) {
      var pn = un(T, st), dr = z ? z(T) === Object.prototype : T instanceof Object || T.constructor === Object, Jt = T instanceof Object ? "" : "null prototype", hn = !dr && B && Object(T) === T && B in T ? y.call(et(T), 8, -1) : Jt ? "Object" : "", ri = dr || typeof T.constructor != "function" ? "" : T.constructor.name ? T.constructor.name + " " : "", Ln = ri + (hn || Jt ? "[" + I.call(R.call([], hn || [], Jt || []), ": ") + "] " : "");
      return pn.length === 0 ? Ln + "{}" : Wt ? Ln + "{" + jn(pn, Wt) + "}" : Ln + "{ " + I.call(pn, ", ") + " }";
    }
    return String(T);
  };
  function _e(D, T, we) {
    var Ae = we.quoteStyle || T, Re = me[Ae];
    return Re + D + Re;
  }
  function N(D) {
    return S.call(String(D), /"/g, "&quot;");
  }
  function G(D) {
    return !B || !(typeof D == "object" && (B in D || typeof D[B] < "u"));
  }
  function ve(D) {
    return et(D) === "[object Array]" && G(D);
  }
  function Oe(D) {
    return et(D) === "[object Date]" && G(D);
  }
  function ge(D) {
    return et(D) === "[object RegExp]" && G(D);
  }
  function Z(D) {
    return et(D) === "[object Error]" && G(D);
  }
  function ye(D) {
    return et(D) === "[object String]" && G(D);
  }
  function he(D) {
    return et(D) === "[object Number]" && G(D);
  }
  function Ce(D) {
    return et(D) === "[object Boolean]" && G(D);
  }
  function Ge(D) {
    if (W)
      return D && typeof D == "object" && D instanceof Symbol;
    if (typeof D == "symbol")
      return !0;
    if (!D || typeof D != "object" || !oe)
      return !1;
    try {
      return oe.call(D), !0;
    } catch {
    }
    return !1;
  }
  function nt(D) {
    if (!D || typeof D != "object" || !F)
      return !1;
    try {
      return F.call(D), !0;
    } catch {
    }
    return !1;
  }
  var je = Object.prototype.hasOwnProperty || function(D) {
    return D in this;
  };
  function ze(D, T) {
    return je.call(D, T);
  }
  function et(D) {
    return d.call(D);
  }
  function Ft(D) {
    if (D.name)
      return D.name;
    var T = w.call(a.call(D), /^function\s*([\w$]+)/);
    return T ? T[1] : null;
  }
  function gt(D, T) {
    if (D.indexOf)
      return D.indexOf(T);
    for (var we = 0, Ae = D.length; we < Ae; we++)
      if (D[we] === T)
        return we;
    return -1;
  }
  function at(D) {
    if (!r || !D || typeof D != "object")
      return !1;
    try {
      r.call(D);
      try {
        s.call(D);
      } catch {
        return !0;
      }
      return D instanceof Map;
    } catch {
    }
    return !1;
  }
  function Bt(D) {
    if (!l || !D || typeof D != "object")
      return !1;
    try {
      l.call(D, l);
      try {
        h.call(D, h);
      } catch {
        return !0;
      }
      return D instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Lt(D) {
    if (!b || !D || typeof D != "object")
      return !1;
    try {
      return b.call(D), !0;
    } catch {
    }
    return !1;
  }
  function Pt(D) {
    if (!s || !D || typeof D != "object")
      return !1;
    try {
      s.call(D);
      try {
        r.call(D);
      } catch {
        return !0;
      }
      return D instanceof Set;
    } catch {
    }
    return !1;
  }
  function ni(D) {
    if (!h || !D || typeof D != "object")
      return !1;
    try {
      h.call(D, h);
      try {
        l.call(D, l);
      } catch {
        return !0;
      }
      return D instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function $(D) {
    return !D || typeof D != "object" ? !1 : typeof HTMLElement < "u" && D instanceof HTMLElement ? !0 : typeof D.nodeName == "string" && typeof D.getAttribute == "function";
  }
  function ue(D, T) {
    if (D.length > T.maxStringLength) {
      var we = D.length - T.maxStringLength, Ae = "... " + we + " more character" + (we > 1 ? "s" : "");
      return ue(y.call(D, 0, T.maxStringLength), T) + Ae;
    }
    var Re = Ee[T.quoteStyle || "single"];
    Re.lastIndex = 0;
    var de = S.call(S.call(D, Re, "\\$1"), /[\x00-\x1f]/g, ar);
    return _e(de, "single", T);
  }
  function ar(D) {
    var T = D.charCodeAt(0), we = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[T];
    return we ? "\\" + we : "\\x" + (T < 16 ? "0" : "") + E.call(T.toString(16));
  }
  function Ut(D) {
    return "Object(" + D + ")";
  }
  function Mn(D) {
    return D + " { ? }";
  }
  function ln(D, T, we, Ae) {
    var Re = Ae ? jn(we, Ae) : I.call(we, ", ");
    return D + " (" + T + ") {" + Re + "}";
  }
  function sr(D) {
    for (var T = 0; T < D.length; T++)
      if (gt(D[T], `
`) >= 0)
        return !1;
    return !0;
  }
  function lr(D, T) {
    var we;
    if (D.indent === "	")
      we = "	";
    else if (typeof D.indent == "number" && D.indent > 0)
      we = I.call(Array(D.indent + 1), " ");
    else
      return null;
    return {
      base: we,
      prev: I.call(Array(T + 1), we)
    };
  }
  function jn(D, T) {
    if (D.length === 0)
      return "";
    var we = `
` + T.prev + T.base;
    return we + I.call(D, "," + we) + `
` + T.prev;
  }
  function un(D, T) {
    var we = ve(D), Ae = [];
    if (we) {
      Ae.length = D.length;
      for (var Re = 0; Re < D.length; Re++)
        Ae[Re] = ze(D, Re) ? T(D[Re], D) : "";
    }
    var de = typeof V == "function" ? V(D) : [], bt;
    if (W) {
      bt = {};
      for (var wt = 0; wt < de.length; wt++)
        bt["$" + de[wt]] = de[wt];
    }
    for (var Xe in D)
      ze(D, Xe) && (we && String(Number(Xe)) === Xe && Xe < D.length || W && bt["$" + Xe] instanceof Symbol || (O.call(/[^\w$]/, Xe) ? Ae.push(T(Xe, D) + ": " + T(D[Xe], D)) : Ae.push(Xe + ": " + T(D[Xe], D))));
    if (typeof V == "function")
      for (var St = 0; St < de.length; St++)
        U.call(D, de[St]) && Ae.push("[" + T(de[St]) + "]: " + T(D[de[St]], D));
    return Ae;
  }
  return Ti;
}
var Ii, us;
function Tp() {
  if (us) return Ii;
  us = 1;
  var e = /* @__PURE__ */ ei(), t = /* @__PURE__ */ Nn(), r = function(c, u, l) {
    for (var f = c, h; (h = f.next) != null; f = h)
      if (h.key === u)
        return f.next = h.next, l || (h.next = /** @type {NonNullable<typeof list.next>} */
        c.next, c.next = h), h;
  }, n = function(c, u) {
    if (c) {
      var l = r(c, u);
      return l && l.value;
    }
  }, i = function(c, u, l) {
    var f = r(c, u);
    f ? f.value = l : c.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: c.next,
      value: l
    };
  }, o = function(c, u) {
    return c ? !!r(c, u) : !1;
  }, s = function(c, u) {
    if (c)
      return r(c, u, !0);
  };
  return Ii = function() {
    var u, l = {
      assert: function(f) {
        if (!l.has(f))
          throw new t("Side channel does not contain " + e(f));
      },
      delete: function(f) {
        var h = u && u.next, m = s(u, f);
        return m && h && h === m && (u = void 0), !!m;
      },
      get: function(f) {
        return n(u, f);
      },
      has: function(f) {
        return o(u, f);
      },
      set: function(f, h) {
        u || (u = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          u,
          f,
          h
        );
      }
    };
    return l;
  }, Ii;
}
var $i, cs;
function Ml() {
  return cs || (cs = 1, $i = Object), $i;
}
var Ni, fs;
function Ip() {
  return fs || (fs = 1, Ni = Error), Ni;
}
var Mi, ds;
function $p() {
  return ds || (ds = 1, Mi = EvalError), Mi;
}
var ji, ps;
function Np() {
  return ps || (ps = 1, ji = RangeError), ji;
}
var qi, hs;
function Mp() {
  return hs || (hs = 1, qi = ReferenceError), qi;
}
var Fi, ms;
function jp() {
  return ms || (ms = 1, Fi = SyntaxError), Fi;
}
var Bi, ys;
function qp() {
  return ys || (ys = 1, Bi = URIError), Bi;
}
var Li, vs;
function Fp() {
  return vs || (vs = 1, Li = Math.abs), Li;
}
var Ui, gs;
function Bp() {
  return gs || (gs = 1, Ui = Math.floor), Ui;
}
var Wi, bs;
function Lp() {
  return bs || (bs = 1, Wi = Math.max), Wi;
}
var Vi, ws;
function Up() {
  return ws || (ws = 1, Vi = Math.min), Vi;
}
var Hi, Ss;
function Wp() {
  return Ss || (Ss = 1, Hi = Math.pow), Hi;
}
var Gi, xs;
function Vp() {
  return xs || (xs = 1, Gi = Math.round), Gi;
}
var Ki, _s;
function Hp() {
  return _s || (_s = 1, Ki = Number.isNaN || function(t) {
    return t !== t;
  }), Ki;
}
var zi, Es;
function Gp() {
  if (Es) return zi;
  Es = 1;
  var e = /* @__PURE__ */ Hp();
  return zi = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, zi;
}
var Yi, Os;
function Kp() {
  return Os || (Os = 1, Yi = Object.getOwnPropertyDescriptor), Yi;
}
var Xi, As;
function jl() {
  if (As) return Xi;
  As = 1;
  var e = /* @__PURE__ */ Kp();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Xi = e, Xi;
}
var Ji, Rs;
function zp() {
  if (Rs) return Ji;
  Rs = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ji = e, Ji;
}
var Qi, Ps;
function Yp() {
  return Ps || (Ps = 1, Qi = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var o in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var c = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (c.value !== i || c.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Qi;
}
var Zi, Cs;
function Xp() {
  if (Cs) return Zi;
  Cs = 1;
  var e = typeof Symbol < "u" && Symbol, t = Yp();
  return Zi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Zi;
}
var eo, ks;
function ql() {
  return ks || (ks = 1, eo = typeof Reflect < "u" && Reflect.getPrototypeOf || null), eo;
}
var to, Ds;
function Fl() {
  if (Ds) return to;
  Ds = 1;
  var e = /* @__PURE__ */ Ml();
  return to = e.getPrototypeOf || null, to;
}
var no, Ts;
function Jp() {
  if (Ts) return no;
  Ts = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(u, l) {
    for (var f = [], h = 0; h < u.length; h += 1)
      f[h] = u[h];
    for (var m = 0; m < l.length; m += 1)
      f[m + u.length] = l[m];
    return f;
  }, o = function(u, l) {
    for (var f = [], h = l, m = 0; h < u.length; h += 1, m += 1)
      f[m] = u[h];
    return f;
  }, s = function(c, u) {
    for (var l = "", f = 0; f < c.length; f += 1)
      l += c[f], f + 1 < c.length && (l += u);
    return l;
  };
  return no = function(u) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var f = o(arguments, 1), h, m = function() {
      if (this instanceof h) {
        var w = l.apply(
          this,
          i(f, arguments)
        );
        return Object(w) === w ? w : this;
      }
      return l.apply(
        u,
        i(f, arguments)
      );
    }, b = r(0, l.length - f.length), g = [], d = 0; d < b; d++)
      g[d] = "$" + d;
    if (h = Function("binder", "return function (" + s(g, ",") + "){ return binder.apply(this,arguments); }")(m), l.prototype) {
      var a = function() {
      };
      a.prototype = l.prototype, h.prototype = new a(), a.prototype = null;
    }
    return h;
  }, no;
}
var ro, Is;
function ti() {
  if (Is) return ro;
  Is = 1;
  var e = Jp();
  return ro = Function.prototype.bind || e, ro;
}
var io, $s;
function Wo() {
  return $s || ($s = 1, io = Function.prototype.call), io;
}
var oo, Ns;
function Bl() {
  return Ns || (Ns = 1, oo = Function.prototype.apply), oo;
}
var ao, Ms;
function Qp() {
  return Ms || (Ms = 1, ao = typeof Reflect < "u" && Reflect && Reflect.apply), ao;
}
var so, js;
function Zp() {
  if (js) return so;
  js = 1;
  var e = ti(), t = Bl(), r = Wo(), n = Qp();
  return so = n || e.call(r, t), so;
}
var lo, qs;
function Ll() {
  if (qs) return lo;
  qs = 1;
  var e = ti(), t = /* @__PURE__ */ Nn(), r = Wo(), n = Zp();
  return lo = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, lo;
}
var uo, Fs;
function eh() {
  if (Fs) return uo;
  Fs = 1;
  var e = Ll(), t = /* @__PURE__ */ jl(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return uo = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(c) {
      return o(c == null ? c : i(c));
    }
  ) : !1, uo;
}
var co, Bs;
function th() {
  if (Bs) return co;
  Bs = 1;
  var e = ql(), t = Fl(), r = /* @__PURE__ */ eh();
  return co = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, co;
}
var fo, Ls;
function nh() {
  if (Ls) return fo;
  Ls = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = ti();
  return fo = r.call(e, t), fo;
}
var po, Us;
function Vo() {
  if (Us) return po;
  Us = 1;
  var e, t = /* @__PURE__ */ Ml(), r = /* @__PURE__ */ Ip(), n = /* @__PURE__ */ $p(), i = /* @__PURE__ */ Np(), o = /* @__PURE__ */ Mp(), s = /* @__PURE__ */ jp(), c = /* @__PURE__ */ Nn(), u = /* @__PURE__ */ qp(), l = /* @__PURE__ */ Fp(), f = /* @__PURE__ */ Bp(), h = /* @__PURE__ */ Lp(), m = /* @__PURE__ */ Up(), b = /* @__PURE__ */ Wp(), g = /* @__PURE__ */ Vp(), d = /* @__PURE__ */ Gp(), a = Function, w = function(ge) {
    try {
      return a('"use strict"; return (' + ge + ").constructor;")();
    } catch {
    }
  }, y = /* @__PURE__ */ jl(), S = /* @__PURE__ */ zp(), E = function() {
    throw new c();
  }, P = y ? function() {
    try {
      return arguments.callee, E;
    } catch {
      try {
        return y(arguments, "callee").get;
      } catch {
        return E;
      }
    }
  }() : E, O = Xp()(), R = th(), I = Fl(), q = ql(), j = Bl(), F = Wo(), V = {}, oe = typeof Uint8Array > "u" || !R ? e : R(Uint8Array), W = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": O && R ? R([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": V,
    "%AsyncGenerator%": V,
    "%AsyncGeneratorFunction%": V,
    "%AsyncIteratorPrototype%": V,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": a,
    "%GeneratorFunction%": V,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": O && R ? R(R([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !O || !R ? e : R((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": y,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !O || !R ? e : R((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": O && R ? R(""[Symbol.iterator]()) : e,
    "%Symbol%": O ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": P,
    "%TypedArray%": oe,
    "%TypeError%": c,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": F,
    "%Function.prototype.apply%": j,
    "%Object.defineProperty%": S,
    "%Object.getPrototypeOf%": I,
    "%Math.abs%": l,
    "%Math.floor%": f,
    "%Math.max%": h,
    "%Math.min%": m,
    "%Math.pow%": b,
    "%Math.round%": g,
    "%Math.sign%": d,
    "%Reflect.getPrototypeOf%": q
  };
  if (R)
    try {
      null.error;
    } catch (ge) {
      var B = R(R(ge));
      W["%Error.prototype%"] = B;
    }
  var U = function ge(Z) {
    var ye;
    if (Z === "%AsyncFunction%")
      ye = w("async function () {}");
    else if (Z === "%GeneratorFunction%")
      ye = w("function* () {}");
    else if (Z === "%AsyncGeneratorFunction%")
      ye = w("async function* () {}");
    else if (Z === "%AsyncGenerator%") {
      var he = ge("%AsyncGeneratorFunction%");
      he && (ye = he.prototype);
    } else if (Z === "%AsyncIteratorPrototype%") {
      var Ce = ge("%AsyncGenerator%");
      Ce && R && (ye = R(Ce.prototype));
    }
    return W[Z] = ye, ye;
  }, z = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, M = ti(), Q = /* @__PURE__ */ nh(), ee = M.call(F, Array.prototype.concat), fe = M.call(j, Array.prototype.splice), me = M.call(F, String.prototype.replace), Ee = M.call(F, String.prototype.slice), _e = M.call(F, RegExp.prototype.exec), N = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, G = /\\(\\)?/g, ve = function(Z) {
    var ye = Ee(Z, 0, 1), he = Ee(Z, -1);
    if (ye === "%" && he !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (he === "%" && ye !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var Ce = [];
    return me(Z, N, function(Ge, nt, je, ze) {
      Ce[Ce.length] = je ? me(ze, G, "$1") : nt || Ge;
    }), Ce;
  }, Oe = function(Z, ye) {
    var he = Z, Ce;
    if (Q(z, he) && (Ce = z[he], he = "%" + Ce[0] + "%"), Q(W, he)) {
      var Ge = W[he];
      if (Ge === V && (Ge = U(he)), typeof Ge > "u" && !ye)
        throw new c("intrinsic " + Z + " exists, but is not available. Please file an issue!");
      return {
        alias: Ce,
        name: he,
        value: Ge
      };
    }
    throw new s("intrinsic " + Z + " does not exist!");
  };
  return po = function(Z, ye) {
    if (typeof Z != "string" || Z.length === 0)
      throw new c("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ye != "boolean")
      throw new c('"allowMissing" argument must be a boolean');
    if (_e(/^%?[^%]*%?$/, Z) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var he = ve(Z), Ce = he.length > 0 ? he[0] : "", Ge = Oe("%" + Ce + "%", ye), nt = Ge.name, je = Ge.value, ze = !1, et = Ge.alias;
    et && (Ce = et[0], fe(he, ee([0, 1], et)));
    for (var Ft = 1, gt = !0; Ft < he.length; Ft += 1) {
      var at = he[Ft], Bt = Ee(at, 0, 1), Lt = Ee(at, -1);
      if ((Bt === '"' || Bt === "'" || Bt === "`" || Lt === '"' || Lt === "'" || Lt === "`") && Bt !== Lt)
        throw new s("property names with quotes must have matching quotes");
      if ((at === "constructor" || !gt) && (ze = !0), Ce += "." + at, nt = "%" + Ce + "%", Q(W, nt))
        je = W[nt];
      else if (je != null) {
        if (!(at in je)) {
          if (!ye)
            throw new c("base intrinsic for " + Z + " exists, but the property is not available.");
          return;
        }
        if (y && Ft + 1 >= he.length) {
          var Pt = y(je, at);
          gt = !!Pt, gt && "get" in Pt && !("originalValue" in Pt.get) ? je = Pt.get : je = je[at];
        } else
          gt = Q(je, at), je = je[at];
        gt && !ze && (W[nt] = je);
      }
    }
    return je;
  }, po;
}
var ho, Ws;
function Ul() {
  if (Ws) return ho;
  Ws = 1;
  var e = /* @__PURE__ */ Vo(), t = Ll(), r = t([e("%String.prototype.indexOf%")]);
  return ho = function(i, o) {
    var s = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof s == "function" && r(i, ".prototype.") > -1 ? t([s]) : s;
  }, ho;
}
var mo, Vs;
function Wl() {
  if (Vs) return mo;
  Vs = 1;
  var e = /* @__PURE__ */ Vo(), t = /* @__PURE__ */ Ul(), r = /* @__PURE__ */ ei(), n = /* @__PURE__ */ Nn(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), c = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return mo = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var h, m = {
      assert: function(b) {
        if (!m.has(b))
          throw new n("Side channel does not contain " + r(b));
      },
      delete: function(b) {
        if (h) {
          var g = u(h, b);
          return l(h) === 0 && (h = void 0), g;
        }
        return !1;
      },
      get: function(b) {
        if (h)
          return o(h, b);
      },
      has: function(b) {
        return h ? c(h, b) : !1;
      },
      set: function(b, g) {
        h || (h = new i()), s(h, b, g);
      }
    };
    return m;
  }, mo;
}
var yo, Hs;
function rh() {
  if (Hs) return yo;
  Hs = 1;
  var e = /* @__PURE__ */ Vo(), t = /* @__PURE__ */ Ul(), r = /* @__PURE__ */ ei(), n = Wl(), i = /* @__PURE__ */ Nn(), o = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), c = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return yo = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var h, m, b = {
        assert: function(g) {
          if (!b.has(g))
            throw new i("Side channel does not contain " + r(g));
        },
        delete: function(g) {
          if (o && g && (typeof g == "object" || typeof g == "function")) {
            if (h)
              return l(h, g);
          } else if (n && m)
            return m.delete(g);
          return !1;
        },
        get: function(g) {
          return o && g && (typeof g == "object" || typeof g == "function") && h ? s(h, g) : m && m.get(g);
        },
        has: function(g) {
          return o && g && (typeof g == "object" || typeof g == "function") && h ? u(h, g) : !!m && m.has(g);
        },
        set: function(g, d) {
          o && g && (typeof g == "object" || typeof g == "function") ? (h || (h = new o()), c(h, g, d)) : n && (m || (m = n()), m.set(g, d));
        }
      };
      return b;
    }
  ) : n, yo;
}
var vo, Gs;
function ih() {
  if (Gs) return vo;
  Gs = 1;
  var e = /* @__PURE__ */ Nn(), t = /* @__PURE__ */ ei(), r = Tp(), n = Wl(), i = rh(), o = i || n || r;
  return vo = function() {
    var c, u = {
      assert: function(l) {
        if (!u.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        return !!c && c.delete(l);
      },
      get: function(l) {
        return c && c.get(l);
      },
      has: function(l) {
        return !!c && c.has(l);
      },
      set: function(l, f) {
        c || (c = o()), c.set(l, f);
      }
    };
    return u;
  }, vo;
}
var go, Ks;
function Ho() {
  if (Ks) return go;
  Ks = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return go = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, t, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, go;
}
var bo, zs;
function Vl() {
  if (zs) return bo;
  zs = 1;
  var e = /* @__PURE__ */ Ho(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
    for (var a = [], w = 0; w < 256; ++w)
      a.push("%" + ((w < 16 ? "0" : "") + w.toString(16)).toUpperCase());
    return a;
  }(), i = function(w) {
    for (; w.length > 1; ) {
      var y = w.pop(), S = y.obj[y.prop];
      if (r(S)) {
        for (var E = [], P = 0; P < S.length; ++P)
          typeof S[P] < "u" && E.push(S[P]);
        y.obj[y.prop] = E;
      }
    }
  }, o = function(w, y) {
    for (var S = y && y.plainObjects ? { __proto__: null } : {}, E = 0; E < w.length; ++E)
      typeof w[E] < "u" && (S[E] = w[E]);
    return S;
  }, s = function a(w, y, S) {
    if (!y)
      return w;
    if (typeof y != "object" && typeof y != "function") {
      if (r(w))
        w.push(y);
      else if (w && typeof w == "object")
        (S && (S.plainObjects || S.allowPrototypes) || !t.call(Object.prototype, y)) && (w[y] = !0);
      else
        return [w, y];
      return w;
    }
    if (!w || typeof w != "object")
      return [w].concat(y);
    var E = w;
    return r(w) && !r(y) && (E = o(w, S)), r(w) && r(y) ? (y.forEach(function(P, O) {
      if (t.call(w, O)) {
        var R = w[O];
        R && typeof R == "object" && P && typeof P == "object" ? w[O] = a(R, P, S) : w.push(P);
      } else
        w[O] = P;
    }), w) : Object.keys(y).reduce(function(P, O) {
      var R = y[O];
      return t.call(P, O) ? P[O] = a(P[O], R, S) : P[O] = R, P;
    }, E);
  }, c = function(w, y) {
    return Object.keys(y).reduce(function(S, E) {
      return S[E] = y[E], S;
    }, w);
  }, u = function(a, w, y) {
    var S = a.replace(/\+/g, " ");
    if (y === "iso-8859-1")
      return S.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }, l = 1024, f = function(w, y, S, E, P) {
    if (w.length === 0)
      return w;
    var O = w;
    if (typeof w == "symbol" ? O = Symbol.prototype.toString.call(w) : typeof w != "string" && (O = String(w)), S === "iso-8859-1")
      return escape(O).replace(/%u[0-9a-f]{4}/gi, function(oe) {
        return "%26%23" + parseInt(oe.slice(2), 16) + "%3B";
      });
    for (var R = "", I = 0; I < O.length; I += l) {
      for (var q = O.length >= l ? O.slice(I, I + l) : O, j = [], F = 0; F < q.length; ++F) {
        var V = q.charCodeAt(F);
        if (V === 45 || V === 46 || V === 95 || V === 126 || V >= 48 && V <= 57 || V >= 65 && V <= 90 || V >= 97 && V <= 122 || P === e.RFC1738 && (V === 40 || V === 41)) {
          j[j.length] = q.charAt(F);
          continue;
        }
        if (V < 128) {
          j[j.length] = n[V];
          continue;
        }
        if (V < 2048) {
          j[j.length] = n[192 | V >> 6] + n[128 | V & 63];
          continue;
        }
        if (V < 55296 || V >= 57344) {
          j[j.length] = n[224 | V >> 12] + n[128 | V >> 6 & 63] + n[128 | V & 63];
          continue;
        }
        F += 1, V = 65536 + ((V & 1023) << 10 | q.charCodeAt(F) & 1023), j[j.length] = n[240 | V >> 18] + n[128 | V >> 12 & 63] + n[128 | V >> 6 & 63] + n[128 | V & 63];
      }
      R += j.join("");
    }
    return R;
  }, h = function(w) {
    for (var y = [{ obj: { o: w }, prop: "o" }], S = [], E = 0; E < y.length; ++E)
      for (var P = y[E], O = P.obj[P.prop], R = Object.keys(O), I = 0; I < R.length; ++I) {
        var q = R[I], j = O[q];
        typeof j == "object" && j !== null && S.indexOf(j) === -1 && (y.push({ obj: O, prop: q }), S.push(j));
      }
    return i(y), w;
  }, m = function(w) {
    return Object.prototype.toString.call(w) === "[object RegExp]";
  }, b = function(w) {
    return !w || typeof w != "object" ? !1 : !!(w.constructor && w.constructor.isBuffer && w.constructor.isBuffer(w));
  }, g = function(w, y) {
    return [].concat(w, y);
  }, d = function(w, y) {
    if (r(w)) {
      for (var S = [], E = 0; E < w.length; E += 1)
        S.push(y(w[E]));
      return S;
    }
    return y(w);
  };
  return bo = {
    arrayToObject: o,
    assign: c,
    combine: g,
    compact: h,
    decode: u,
    encode: f,
    isBuffer: b,
    isRegExp: m,
    maybeMap: d,
    merge: s
  }, bo;
}
var wo, Ys;
function oh() {
  if (Ys) return wo;
  Ys = 1;
  var e = ih(), t = /* @__PURE__ */ Vl(), r = /* @__PURE__ */ Ho(), n = Object.prototype.hasOwnProperty, i = {
    brackets: function(a) {
      return a + "[]";
    },
    comma: "comma",
    indices: function(a, w) {
      return a + "[" + w + "]";
    },
    repeat: function(a) {
      return a;
    }
  }, o = Array.isArray, s = Array.prototype.push, c = function(d, a) {
    s.apply(d, o(a) ? a : [a]);
  }, u = Date.prototype.toISOString, l = r.default, f = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: l,
    formatter: r.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(a) {
      return u.call(a);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, h = function(a) {
    return typeof a == "string" || typeof a == "number" || typeof a == "boolean" || typeof a == "symbol" || typeof a == "bigint";
  }, m = {}, b = function d(a, w, y, S, E, P, O, R, I, q, j, F, V, oe, W, B, U, z) {
    for (var M = a, Q = z, ee = 0, fe = !1; (Q = Q.get(m)) !== void 0 && !fe; ) {
      var me = Q.get(a);
      if (ee += 1, typeof me < "u") {
        if (me === ee)
          throw new RangeError("Cyclic object value");
        fe = !0;
      }
      typeof Q.get(m) > "u" && (ee = 0);
    }
    if (typeof q == "function" ? M = q(w, M) : M instanceof Date ? M = V(M) : y === "comma" && o(M) && (M = t.maybeMap(M, function(nt) {
      return nt instanceof Date ? V(nt) : nt;
    })), M === null) {
      if (P)
        return I && !B ? I(w, f.encoder, U, "key", oe) : w;
      M = "";
    }
    if (h(M) || t.isBuffer(M)) {
      if (I) {
        var Ee = B ? w : I(w, f.encoder, U, "key", oe);
        return [W(Ee) + "=" + W(I(M, f.encoder, U, "value", oe))];
      }
      return [W(w) + "=" + W(String(M))];
    }
    var _e = [];
    if (typeof M > "u")
      return _e;
    var N;
    if (y === "comma" && o(M))
      B && I && (M = t.maybeMap(M, I)), N = [{ value: M.length > 0 ? M.join(",") || null : void 0 }];
    else if (o(q))
      N = q;
    else {
      var G = Object.keys(M);
      N = j ? G.sort(j) : G;
    }
    var ve = R ? String(w).replace(/\./g, "%2E") : String(w), Oe = S && o(M) && M.length === 1 ? ve + "[]" : ve;
    if (E && o(M) && M.length === 0)
      return Oe + "[]";
    for (var ge = 0; ge < N.length; ++ge) {
      var Z = N[ge], ye = typeof Z == "object" && Z && typeof Z.value < "u" ? Z.value : M[Z];
      if (!(O && ye === null)) {
        var he = F && R ? String(Z).replace(/\./g, "%2E") : String(Z), Ce = o(M) ? typeof y == "function" ? y(Oe, he) : Oe : Oe + (F ? "." + he : "[" + he + "]");
        z.set(a, ee);
        var Ge = e();
        Ge.set(m, z), c(_e, d(
          ye,
          Ce,
          y,
          S,
          E,
          P,
          O,
          R,
          y === "comma" && B && o(M) ? null : I,
          q,
          j,
          F,
          V,
          oe,
          W,
          B,
          U,
          Ge
        ));
      }
    }
    return _e;
  }, g = function(a) {
    if (!a)
      return f;
    if (typeof a.allowEmptyArrays < "u" && typeof a.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof a.encodeDotInKeys < "u" && typeof a.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (a.encoder !== null && typeof a.encoder < "u" && typeof a.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var w = a.charset || f.charset;
    if (typeof a.charset < "u" && a.charset !== "utf-8" && a.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var y = r.default;
    if (typeof a.format < "u") {
      if (!n.call(r.formatters, a.format))
        throw new TypeError("Unknown format option provided.");
      y = a.format;
    }
    var S = r.formatters[y], E = f.filter;
    (typeof a.filter == "function" || o(a.filter)) && (E = a.filter);
    var P;
    if (a.arrayFormat in i ? P = a.arrayFormat : "indices" in a ? P = a.indices ? "indices" : "repeat" : P = f.arrayFormat, "commaRoundTrip" in a && typeof a.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var O = typeof a.allowDots > "u" ? a.encodeDotInKeys === !0 ? !0 : f.allowDots : !!a.allowDots;
    return {
      addQueryPrefix: typeof a.addQueryPrefix == "boolean" ? a.addQueryPrefix : f.addQueryPrefix,
      allowDots: O,
      allowEmptyArrays: typeof a.allowEmptyArrays == "boolean" ? !!a.allowEmptyArrays : f.allowEmptyArrays,
      arrayFormat: P,
      charset: w,
      charsetSentinel: typeof a.charsetSentinel == "boolean" ? a.charsetSentinel : f.charsetSentinel,
      commaRoundTrip: !!a.commaRoundTrip,
      delimiter: typeof a.delimiter > "u" ? f.delimiter : a.delimiter,
      encode: typeof a.encode == "boolean" ? a.encode : f.encode,
      encodeDotInKeys: typeof a.encodeDotInKeys == "boolean" ? a.encodeDotInKeys : f.encodeDotInKeys,
      encoder: typeof a.encoder == "function" ? a.encoder : f.encoder,
      encodeValuesOnly: typeof a.encodeValuesOnly == "boolean" ? a.encodeValuesOnly : f.encodeValuesOnly,
      filter: E,
      format: y,
      formatter: S,
      serializeDate: typeof a.serializeDate == "function" ? a.serializeDate : f.serializeDate,
      skipNulls: typeof a.skipNulls == "boolean" ? a.skipNulls : f.skipNulls,
      sort: typeof a.sort == "function" ? a.sort : null,
      strictNullHandling: typeof a.strictNullHandling == "boolean" ? a.strictNullHandling : f.strictNullHandling
    };
  };
  return wo = function(d, a) {
    var w = d, y = g(a), S, E;
    typeof y.filter == "function" ? (E = y.filter, w = E("", w)) : o(y.filter) && (E = y.filter, S = E);
    var P = [];
    if (typeof w != "object" || w === null)
      return "";
    var O = i[y.arrayFormat], R = O === "comma" && y.commaRoundTrip;
    S || (S = Object.keys(w)), y.sort && S.sort(y.sort);
    for (var I = e(), q = 0; q < S.length; ++q) {
      var j = S[q], F = w[j];
      y.skipNulls && F === null || c(P, b(
        F,
        j,
        O,
        R,
        y.allowEmptyArrays,
        y.strictNullHandling,
        y.skipNulls,
        y.encodeDotInKeys,
        y.encode ? y.encoder : null,
        y.filter,
        y.sort,
        y.allowDots,
        y.serializeDate,
        y.format,
        y.formatter,
        y.encodeValuesOnly,
        y.charset,
        I
      ));
    }
    var V = P.join(y.delimiter), oe = y.addQueryPrefix === !0 ? "?" : "";
    return y.charsetSentinel && (y.charset === "iso-8859-1" ? oe += "utf8=%26%2310003%3B&" : oe += "utf8=%E2%9C%93&"), V.length > 0 ? oe + V : "";
  }, wo;
}
var So, Xs;
function ah() {
  if (Xs) return So;
  Xs = 1;
  var e = /* @__PURE__ */ Vl(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, i = function(m) {
    return m.replace(/&#(\d+);/g, function(b, g) {
      return String.fromCharCode(parseInt(g, 10));
    });
  }, o = function(m, b, g) {
    if (m && typeof m == "string" && b.comma && m.indexOf(",") > -1)
      return m.split(",");
    if (b.throwOnLimitExceeded && g >= b.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + b.arrayLimit + " element" + (b.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return m;
  }, s = "utf8=%26%2310003%3B", c = "utf8=%E2%9C%93", u = function(b, g) {
    var d = { __proto__: null }, a = g.ignoreQueryPrefix ? b.replace(/^\?/, "") : b;
    a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var w = g.parameterLimit === 1 / 0 ? void 0 : g.parameterLimit, y = a.split(
      g.delimiter,
      g.throwOnLimitExceeded ? w + 1 : w
    );
    if (g.throwOnLimitExceeded && y.length > w)
      throw new RangeError("Parameter limit exceeded. Only " + w + " parameter" + (w === 1 ? "" : "s") + " allowed.");
    var S = -1, E, P = g.charset;
    if (g.charsetSentinel)
      for (E = 0; E < y.length; ++E)
        y[E].indexOf("utf8=") === 0 && (y[E] === c ? P = "utf-8" : y[E] === s && (P = "iso-8859-1"), S = E, E = y.length);
    for (E = 0; E < y.length; ++E)
      if (E !== S) {
        var O = y[E], R = O.indexOf("]="), I = R === -1 ? O.indexOf("=") : R + 1, q, j;
        I === -1 ? (q = g.decoder(O, n.decoder, P, "key"), j = g.strictNullHandling ? null : "") : (q = g.decoder(O.slice(0, I), n.decoder, P, "key"), j = e.maybeMap(
          o(
            O.slice(I + 1),
            g,
            r(d[q]) ? d[q].length : 0
          ),
          function(V) {
            return g.decoder(V, n.decoder, P, "value");
          }
        )), j && g.interpretNumericEntities && P === "iso-8859-1" && (j = i(String(j))), O.indexOf("[]=") > -1 && (j = r(j) ? [j] : j);
        var F = t.call(d, q);
        F && g.duplicates === "combine" ? d[q] = e.combine(d[q], j) : (!F || g.duplicates === "last") && (d[q] = j);
      }
    return d;
  }, l = function(m, b, g, d) {
    var a = 0;
    if (m.length > 0 && m[m.length - 1] === "[]") {
      var w = m.slice(0, -1).join("");
      a = Array.isArray(b) && b[w] ? b[w].length : 0;
    }
    for (var y = d ? b : o(b, g, a), S = m.length - 1; S >= 0; --S) {
      var E, P = m[S];
      if (P === "[]" && g.parseArrays)
        E = g.allowEmptyArrays && (y === "" || g.strictNullHandling && y === null) ? [] : e.combine([], y);
      else {
        E = g.plainObjects ? { __proto__: null } : {};
        var O = P.charAt(0) === "[" && P.charAt(P.length - 1) === "]" ? P.slice(1, -1) : P, R = g.decodeDotInKeys ? O.replace(/%2E/g, ".") : O, I = parseInt(R, 10);
        !g.parseArrays && R === "" ? E = { 0: y } : !isNaN(I) && P !== R && String(I) === R && I >= 0 && g.parseArrays && I <= g.arrayLimit ? (E = [], E[I] = y) : R !== "__proto__" && (E[R] = y);
      }
      y = E;
    }
    return y;
  }, f = function(b, g, d, a) {
    if (b) {
      var w = d.allowDots ? b.replace(/\.([^.[]+)/g, "[$1]") : b, y = /(\[[^[\]]*])/, S = /(\[[^[\]]*])/g, E = d.depth > 0 && y.exec(w), P = E ? w.slice(0, E.index) : w, O = [];
      if (P) {
        if (!d.plainObjects && t.call(Object.prototype, P) && !d.allowPrototypes)
          return;
        O.push(P);
      }
      for (var R = 0; d.depth > 0 && (E = S.exec(w)) !== null && R < d.depth; ) {
        if (R += 1, !d.plainObjects && t.call(Object.prototype, E[1].slice(1, -1)) && !d.allowPrototypes)
          return;
        O.push(E[1]);
      }
      if (E) {
        if (d.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + d.depth + " and strictDepth is true");
        O.push("[" + w.slice(E.index) + "]");
      }
      return l(O, g, d, a);
    }
  }, h = function(b) {
    if (!b)
      return n;
    if (typeof b.allowEmptyArrays < "u" && typeof b.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof b.decodeDotInKeys < "u" && typeof b.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (b.decoder !== null && typeof b.decoder < "u" && typeof b.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof b.charset < "u" && b.charset !== "utf-8" && b.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof b.throwOnLimitExceeded < "u" && typeof b.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var g = typeof b.charset > "u" ? n.charset : b.charset, d = typeof b.duplicates > "u" ? n.duplicates : b.duplicates;
    if (d !== "combine" && d !== "first" && d !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var a = typeof b.allowDots > "u" ? b.decodeDotInKeys === !0 ? !0 : n.allowDots : !!b.allowDots;
    return {
      allowDots: a,
      allowEmptyArrays: typeof b.allowEmptyArrays == "boolean" ? !!b.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof b.allowPrototypes == "boolean" ? b.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof b.allowSparse == "boolean" ? b.allowSparse : n.allowSparse,
      arrayLimit: typeof b.arrayLimit == "number" ? b.arrayLimit : n.arrayLimit,
      charset: g,
      charsetSentinel: typeof b.charsetSentinel == "boolean" ? b.charsetSentinel : n.charsetSentinel,
      comma: typeof b.comma == "boolean" ? b.comma : n.comma,
      decodeDotInKeys: typeof b.decodeDotInKeys == "boolean" ? b.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof b.decoder == "function" ? b.decoder : n.decoder,
      delimiter: typeof b.delimiter == "string" || e.isRegExp(b.delimiter) ? b.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof b.depth == "number" || b.depth === !1 ? +b.depth : n.depth,
      duplicates: d,
      ignoreQueryPrefix: b.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof b.interpretNumericEntities == "boolean" ? b.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof b.parameterLimit == "number" ? b.parameterLimit : n.parameterLimit,
      parseArrays: b.parseArrays !== !1,
      plainObjects: typeof b.plainObjects == "boolean" ? b.plainObjects : n.plainObjects,
      strictDepth: typeof b.strictDepth == "boolean" ? !!b.strictDepth : n.strictDepth,
      strictNullHandling: typeof b.strictNullHandling == "boolean" ? b.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof b.throwOnLimitExceeded == "boolean" ? b.throwOnLimitExceeded : !1
    };
  };
  return So = function(m, b) {
    var g = h(b);
    if (m === "" || m === null || typeof m > "u")
      return g.plainObjects ? { __proto__: null } : {};
    for (var d = typeof m == "string" ? u(m, g) : m, a = g.plainObjects ? { __proto__: null } : {}, w = Object.keys(d), y = 0; y < w.length; ++y) {
      var S = w[y], E = f(S, d[S], g, typeof m == "string");
      a = e.merge(a, E, g);
    }
    return g.allowSparse === !0 ? a : e.compact(a);
  }, So;
}
var xo, Js;
function sh() {
  if (Js) return xo;
  Js = 1;
  var e = /* @__PURE__ */ oh(), t = /* @__PURE__ */ ah(), r = /* @__PURE__ */ Ho();
  return xo = {
    formats: r,
    parse: t,
    stringify: e
  }, xo;
}
var Lr = { exports: {} }, lh = Lr.exports, Qs;
function uh() {
  return Qs || (Qs = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(typeof self < "u" ? self : typeof window < "u" ? window : typeof rr < "u" ? rr : lh, function() {
      var r = "3.7.7", n = r, i = typeof Buffer == "function", o = typeof TextDecoder == "function" ? new TextDecoder() : void 0, s = typeof TextEncoder == "function" ? new TextEncoder() : void 0, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", u = Array.prototype.slice.call(c), l = function(N) {
        var G = {};
        return N.forEach(function(ve, Oe) {
          return G[ve] = Oe;
        }), G;
      }(u), f = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, h = String.fromCharCode.bind(String), m = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function(N) {
        return new Uint8Array(Array.prototype.slice.call(N, 0));
      }, b = function(N) {
        return N.replace(/=/g, "").replace(/[+\/]/g, function(G) {
          return G == "+" ? "-" : "_";
        });
      }, g = function(N) {
        return N.replace(/[^A-Za-z0-9\+\/]/g, "");
      }, d = function(N) {
        for (var G, ve, Oe, ge, Z = "", ye = N.length % 3, he = 0; he < N.length; ) {
          if ((ve = N.charCodeAt(he++)) > 255 || (Oe = N.charCodeAt(he++)) > 255 || (ge = N.charCodeAt(he++)) > 255)
            throw new TypeError("invalid character found");
          G = ve << 16 | Oe << 8 | ge, Z += u[G >> 18 & 63] + u[G >> 12 & 63] + u[G >> 6 & 63] + u[G & 63];
        }
        return ye ? Z.slice(0, ye - 3) + "===".substring(ye) : Z;
      }, a = typeof btoa == "function" ? function(N) {
        return btoa(N);
      } : i ? function(N) {
        return Buffer.from(N, "binary").toString("base64");
      } : d, w = i ? function(N) {
        return Buffer.from(N).toString("base64");
      } : function(N) {
        for (var G = 4096, ve = [], Oe = 0, ge = N.length; Oe < ge; Oe += G)
          ve.push(h.apply(null, N.subarray(Oe, Oe + G)));
        return a(ve.join(""));
      }, y = function(N, G) {
        return G === void 0 && (G = !1), G ? b(w(N)) : w(N);
      }, S = function(N) {
        if (N.length < 2) {
          var G = N.charCodeAt(0);
          return G < 128 ? N : G < 2048 ? h(192 | G >>> 6) + h(128 | G & 63) : h(224 | G >>> 12 & 15) + h(128 | G >>> 6 & 63) + h(128 | G & 63);
        } else {
          var G = 65536 + (N.charCodeAt(0) - 55296) * 1024 + (N.charCodeAt(1) - 56320);
          return h(240 | G >>> 18 & 7) + h(128 | G >>> 12 & 63) + h(128 | G >>> 6 & 63) + h(128 | G & 63);
        }
      }, E = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, P = function(N) {
        return N.replace(E, S);
      }, O = i ? function(N) {
        return Buffer.from(N, "utf8").toString("base64");
      } : s ? function(N) {
        return w(s.encode(N));
      } : function(N) {
        return a(P(N));
      }, R = function(N, G) {
        return G === void 0 && (G = !1), G ? b(O(N)) : O(N);
      }, I = function(N) {
        return R(N, !0);
      }, q = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, j = function(N) {
        switch (N.length) {
          case 4:
            var G = (7 & N.charCodeAt(0)) << 18 | (63 & N.charCodeAt(1)) << 12 | (63 & N.charCodeAt(2)) << 6 | 63 & N.charCodeAt(3), ve = G - 65536;
            return h((ve >>> 10) + 55296) + h((ve & 1023) + 56320);
          case 3:
            return h((15 & N.charCodeAt(0)) << 12 | (63 & N.charCodeAt(1)) << 6 | 63 & N.charCodeAt(2));
          default:
            return h((31 & N.charCodeAt(0)) << 6 | 63 & N.charCodeAt(1));
        }
      }, F = function(N) {
        return N.replace(q, j);
      }, V = function(N) {
        if (N = N.replace(/\s+/g, ""), !f.test(N))
          throw new TypeError("malformed base64.");
        N += "==".slice(2 - (N.length & 3));
        for (var G, ve = "", Oe, ge, Z = 0; Z < N.length; )
          G = l[N.charAt(Z++)] << 18 | l[N.charAt(Z++)] << 12 | (Oe = l[N.charAt(Z++)]) << 6 | (ge = l[N.charAt(Z++)]), ve += Oe === 64 ? h(G >> 16 & 255) : ge === 64 ? h(G >> 16 & 255, G >> 8 & 255) : h(G >> 16 & 255, G >> 8 & 255, G & 255);
        return ve;
      }, oe = typeof atob == "function" ? function(N) {
        return atob(g(N));
      } : i ? function(N) {
        return Buffer.from(N, "base64").toString("binary");
      } : V, W = i ? function(N) {
        return m(Buffer.from(N, "base64"));
      } : function(N) {
        return m(oe(N).split("").map(function(G) {
          return G.charCodeAt(0);
        }));
      }, B = function(N) {
        return W(z(N));
      }, U = i ? function(N) {
        return Buffer.from(N, "base64").toString("utf8");
      } : o ? function(N) {
        return o.decode(W(N));
      } : function(N) {
        return F(oe(N));
      }, z = function(N) {
        return g(N.replace(/[-_]/g, function(G) {
          return G == "-" ? "+" : "/";
        }));
      }, M = function(N) {
        return U(z(N));
      }, Q = function(N) {
        if (typeof N != "string")
          return !1;
        var G = N.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(G) || !/[^\s0-9a-zA-Z\-_]/.test(G);
      }, ee = function(N) {
        return {
          value: N,
          enumerable: !1,
          writable: !0,
          configurable: !0
        };
      }, fe = function() {
        var N = function(G, ve) {
          return Object.defineProperty(String.prototype, G, ee(ve));
        };
        N("fromBase64", function() {
          return M(this);
        }), N("toBase64", function(G) {
          return R(this, G);
        }), N("toBase64URI", function() {
          return R(this, !0);
        }), N("toBase64URL", function() {
          return R(this, !0);
        }), N("toUint8Array", function() {
          return B(this);
        });
      }, me = function() {
        var N = function(G, ve) {
          return Object.defineProperty(Uint8Array.prototype, G, ee(ve));
        };
        N("toBase64", function(G) {
          return y(this, G);
        }), N("toBase64URI", function() {
          return y(this, !0);
        }), N("toBase64URL", function() {
          return y(this, !0);
        });
      }, Ee = function() {
        fe(), me();
      }, _e = {
        version: r,
        VERSION: n,
        atob: oe,
        atobPolyfill: V,
        btoa: a,
        btoaPolyfill: d,
        fromBase64: M,
        toBase64: R,
        encode: R,
        encodeURI: I,
        encodeURL: I,
        utob: P,
        btou: F,
        decode: M,
        isValid: Q,
        fromUint8Array: y,
        toUint8Array: B,
        extendString: fe,
        extendUint8Array: me,
        extendBuiltins: Ee
      };
      return _e.Base64 = {}, Object.keys(_e).forEach(function(N) {
        return _e.Base64[N] = _e[N];
      }), _e;
    });
  }(Lr)), Lr.exports;
}
var Zs;
function ch() {
  if (Zs) return It;
  Zs = 1;
  var e = It.__assign || function() {
    return e = Object.assign || function(h) {
      for (var m, b = 1, g = arguments.length; b < g; b++) {
        m = arguments[b];
        for (var d in m) Object.prototype.hasOwnProperty.call(m, d) && (h[d] = m[d]);
      }
      return h;
    }, e.apply(this, arguments);
  }, t = It.__awaiter || function(h, m, b, g) {
    function d(a) {
      return a instanceof b ? a : new b(function(w) {
        w(a);
      });
    }
    return new (b || (b = Promise))(function(a, w) {
      function y(P) {
        try {
          E(g.next(P));
        } catch (O) {
          w(O);
        }
      }
      function S(P) {
        try {
          E(g.throw(P));
        } catch (O) {
          w(O);
        }
      }
      function E(P) {
        P.done ? a(P.value) : d(P.value).then(y, S);
      }
      E((g = g.apply(h, m || [])).next());
    });
  }, r = It.__generator || function(h, m) {
    var b = { label: 0, sent: function() {
      if (a[0] & 1) throw a[1];
      return a[1];
    }, trys: [], ops: [] }, g, d, a, w = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return w.next = y(0), w.throw = y(1), w.return = y(2), typeof Symbol == "function" && (w[Symbol.iterator] = function() {
      return this;
    }), w;
    function y(E) {
      return function(P) {
        return S([E, P]);
      };
    }
    function S(E) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; w && (w = 0, E[0] && (b = 0)), b; ) try {
        if (g = 1, d && (a = E[0] & 2 ? d.return : E[0] ? d.throw || ((a = d.return) && a.call(d), 0) : d.next) && !(a = a.call(d, E[1])).done) return a;
        switch (d = 0, a && (E = [E[0] & 2, a.value]), E[0]) {
          case 0:
          case 1:
            a = E;
            break;
          case 4:
            return b.label++, { value: E[1], done: !1 };
          case 5:
            b.label++, d = E[1], E = [0];
            continue;
          case 7:
            E = b.ops.pop(), b.trys.pop();
            continue;
          default:
            if (a = b.trys, !(a = a.length > 0 && a[a.length - 1]) && (E[0] === 6 || E[0] === 2)) {
              b = 0;
              continue;
            }
            if (E[0] === 3 && (!a || E[1] > a[0] && E[1] < a[3])) {
              b.label = E[1];
              break;
            }
            if (E[0] === 6 && b.label < a[1]) {
              b.label = a[1], a = E;
              break;
            }
            if (a && b.label < a[2]) {
              b.label = a[2], b.ops.push(E);
              break;
            }
            a[2] && b.ops.pop(), b.trys.pop();
            continue;
        }
        E = m.call(h, b);
      } catch (P) {
        E = [6, P], d = 0;
      } finally {
        g = a = 0;
      }
      if (E[0] & 5) throw E[1];
      return { value: E[0] ? E[1] : void 0, done: !0 };
    }
  }, n = It.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(It, "__esModule", { value: !0 }), It.KintoneRequestConfigBuilder = void 0;
  var i = n(Nl()), o = n(/* @__PURE__ */ sh()), s = /* @__PURE__ */ uh(), c = Zr(), u = "http", l = 4096, f = (
    /** @class */
    function() {
      function h(m) {
        if (this.baseUrl = m.baseUrl, this.auth = m.auth, this.headers = this.buildHeaders({
          basicAuth: m.basicAuth,
          userAgent: m.userAgent
        }), "httpsAgent" in m) {
          if ("clientCertAuth" in m)
            throw new Error("Cannot specify clientCertAuth along with httpsAgent.");
          this.httpsAgent = m.httpsAgent;
        } else "clientCertAuth" in m && (this.clientCertAuth = m.clientCertAuth);
        this.proxy = m.proxy, this.requestToken = null, this.socketTimeout = m.socketTimeout;
      }
      return h.prototype.build = function(m, b, g, d) {
        return t(this, void 0, void 0, function() {
          var a, w, O, y, S, E, P, O, R, I, q, j, F;
          return r(this, function(V) {
            switch (V.label) {
              case 0:
                switch (a = e(e(e({ method: m, headers: this.headers, url: "".concat(this.baseUrl).concat(b) }, d || {}), c.platformDeps.buildPlatformDependentConfig({
                  httpsAgent: this.httpsAgent,
                  clientCertAuth: this.clientCertAuth,
                  socketTimeout: this.socketTimeout
                })), { proxy: this.buildProxyConfig(this.proxy) }), w = m, w) {
                  case "get":
                    return [3, 1];
                  case "post":
                    return [3, 4];
                  case "put":
                    return [3, 8];
                  case "delete":
                    return [3, 10];
                }
                return [3, 12];
              case 1:
                return O = this.buildRequestUrl(b, g), O.length > l ? (y = [e({}, a)], q = { method: "post", headers: e(e({}, this.headers), { "X-HTTP-Method-Override": "GET" }) }, [4, this.buildData(g)]) : [3, 3];
              case 2:
                return [2, e.apply(void 0, y.concat([(q.data = V.sent(), q)]))];
              case 3:
                return [2, e(e({}, a), { url: O })];
              case 4:
                return g instanceof i.default ? [4, this.buildData(g)] : [3, 6];
              case 5:
                return S = V.sent(), [2, e(e({}, a), { headers: (
                  // NOTE: formData.getHeaders does not exist in a browser environment.
                  typeof S.getHeaders == "function" ? e(e({}, this.headers), S.getHeaders()) : this.headers
                ), data: S })];
              case 6:
                return E = [e({}, a)], j = {}, [4, this.buildData(g)];
              case 7:
                return [2, e.apply(void 0, E.concat([(j.data = V.sent(), j)]))];
              case 8:
                return P = [e({}, a)], F = {}, [4, this.buildData(g)];
              case 9:
                return [2, e.apply(void 0, P.concat([(F.data = V.sent(), F)]))];
              case 10:
                return R = this.buildRequestUrl, I = [b], [4, this.buildData(g)];
              case 11:
                return O = R.apply(this, I.concat([V.sent()])), [2, e(e({}, a), { url: O })];
              case 12:
                throw new Error("".concat(m, " method is not supported"));
              case 13:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, h.prototype.buildProxyConfig = function(m) {
        var b;
        if (m !== void 0) {
          if (m === !1)
            return !1;
          var g = m;
          return g.auth && (g.auth.username.length === 0 || g.auth.password.length === 0) && (g.auth = void 0), g.protocol = (b = g.protocol) !== null && b !== void 0 ? b : u, g;
        }
      }, h.prototype.buildRequestUrl = function(m, b) {
        return "".concat(this.baseUrl).concat(m, "?").concat(o.default.stringify(b));
      }, h.prototype.buildData = function(m) {
        return t(this, void 0, void 0, function() {
          var b;
          return r(this, function(g) {
            switch (g.label) {
              case 0:
                return this.auth.type !== "session" ? [3, 2] : [4, this.getRequestToken()];
              case 1:
                return b = g.sent(), m instanceof i.default ? (m.append("__REQUEST_TOKEN__", b), [2, m]) : [2, e({ __REQUEST_TOKEN__: b }, m)];
              case 2:
                return [2, m];
            }
          });
        });
      }, h.prototype.buildHeaders = function(m) {
        var b = m.basicAuth, g = m.userAgent, d = b ? {
          Authorization: "Basic ".concat(s.Base64.encode("".concat(b.username, ":").concat(b.password)))
        } : {}, a = c.platformDeps.buildHeaders({ userAgent: g }), w = e(e({}, a), d);
        switch (this.auth.type) {
          case "password":
            return e(e({}, w), { "X-Cybozu-Authorization": s.Base64.encode("".concat(this.auth.username, ":").concat(this.auth.password)) });
          case "apiToken": {
            var y = this.auth.apiToken;
            return Array.isArray(y) ? e(e({}, w), { "X-Cybozu-API-Token": y.join(",") }) : e(e({}, w), { "X-Cybozu-API-Token": y });
          }
          case "oAuthToken":
            return e(e({}, w), { Authorization: "Bearer ".concat(this.auth.oAuthToken) });
          default:
            return e(e({}, w), { "X-Requested-With": "XMLHttpRequest" });
        }
      }, h.prototype.getRequestToken = function() {
        return t(this, void 0, void 0, function() {
          var m;
          return r(this, function(b) {
            switch (b.label) {
              case 0:
                return this.requestToken !== null ? [3, 2] : (m = this, [4, c.platformDeps.getRequestToken()]);
              case 1:
                m.requestToken = b.sent(), b.label = 2;
              case 2:
                return [2, this.requestToken];
            }
          });
        });
      }, h;
    }()
  );
  return It.KintoneRequestConfigBuilder = f, It;
}
var rn = {}, el;
function fh() {
  if (el) return rn;
  el = 1;
  var e = rn.__assign || function() {
    return e = Object.assign || function(i) {
      for (var o, s = 1, c = arguments.length; s < c; s++) {
        o = arguments[s];
        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (i[u] = o[u]);
      }
      return i;
    }, e.apply(this, arguments);
  }, t = rn.__rest || function(i, o) {
    var s = {};
    for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && o.indexOf(c) < 0 && (s[c] = i[c]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
      for (var u = 0, c = Object.getOwnPropertySymbols(i); u < c.length; u++)
        o.indexOf(c[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, c[u]) && (s[c[u]] = i[c[u]]);
    return s;
  };
  Object.defineProperty(rn, "__esModule", { value: !0 }), rn.KintoneResponseHandler = void 0;
  var r = Uo(), n = (
    /** @class */
    function() {
      function i(o) {
        var s = o.enableAbortSearchError;
        this.enableAbortSearchError = s;
      }
      return i.prototype.handle = function(o) {
        var s = this;
        return o.then(function(c) {
          return s.handleSuccessResponse(c);
        }, function(c) {
          return s.handleErrorResponse(c);
        });
      }, i.prototype.handleSuccessResponse = function(o) {
        if (this.enableAbortSearchError && /Filter aborted because of too many search results/.test(o.headers["x-cybozu-warning"]))
          throw new r.KintoneAbortSearchError(o.headers["x-cybozu-warning"]);
        return o.data;
      }, i.prototype.handleErrorResponse = function(o) {
        if (!o.response)
          throw /mac verify failure/.test(o.toString()) ? new Error("invalid clientCertAuth setting") : o;
        var s = o.response, c = s.data, u = t(s, ["data"]);
        throw typeof c == "string" ? new Error("".concat(u.status, ": ").concat(u.statusText)) : new r.KintoneRestAPIError(e({ data: c }, u));
      }, i;
    }()
  );
  return rn.KintoneResponseHandler = n, rn;
}
var tl;
function dh() {
  if (tl) return wn;
  tl = 1;
  var e = wn.__assign || function() {
    return e = Object.assign || function(y) {
      for (var S, E = 1, P = arguments.length; E < P; E++) {
        S = arguments[E];
        for (var O in S) Object.prototype.hasOwnProperty.call(S, O) && (y[O] = S[O]);
      }
      return y;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(wn, "__esModule", { value: !0 }), wn.KintoneRestAPIClient = void 0;
  var t = vp(), r = gp(), n = xp(), i = _p(), o = Ep(), s = Op(), c = Pp(), u = ch(), l = fh(), f = Zr(), h = Lo(), m = function(y) {
    if ("username" in y)
      return e({ type: "password" }, y);
    if ("apiToken" in y)
      return e({ type: "apiToken" }, y);
    if ("oAuthToken" in y)
      return e({ type: "oAuthToken" }, y);
    try {
      return f.platformDeps.getDefaultAuth();
    } catch (S) {
      throw S instanceof h.UnsupportedPlatformError ? new Error("session authentication is not supported in ".concat(S.platform, " environment.")) : S;
    }
  }, b = (
    /** @class */
    function() {
      function y(S) {
        S === void 0 && (S = {});
        var E, P, O;
        g(S), this.baseUrl = f.platformDeps.buildBaseUrl(S.baseUrl).replace(/\/+$/, "");
        var R = m((E = S.auth) !== null && E !== void 0 ? E : {}), I = new u.KintoneRequestConfigBuilder(e(e({}, S), { baseUrl: this.baseUrl, auth: R })), q = new l.KintoneResponseHandler({
          enableAbortSearchError: (O = (P = S.featureFlags) === null || P === void 0 ? void 0 : P.enableAbortSearchError) !== null && O !== void 0 ? O : !1
        }), j = new c.DefaultHttpClient({
          responseHandler: q,
          requestConfigBuilder: I
        }), F = S.guestSpaceId;
        this.bulkRequest_ = new t.BulkRequestClient(j, F), this.record = new n.RecordClient(j, this.bulkRequest_, F), this.app = new r.AppClient(j, F), this.space = new i.SpaceClient(j, F), this.file = new o.FileClient(j, F), this.plugin = new s.PluginClient(j);
      }
      return Object.defineProperty(y, "version", {
        get: function() {
          return f.platformDeps.getVersion();
        },
        enumerable: !1,
        configurable: !0
      }), y.prototype.getBaseUrl = function() {
        return this.baseUrl;
      }, y.prototype.bulkRequest = function(S) {
        return this.bulkRequest_.send(S);
      }, y;
    }()
  );
  wn.KintoneRestAPIClient = b;
  var g = function(y) {
    d(y.baseUrl), a(y.guestSpaceId), w(y.socketTimeout);
  }, d = function(y) {
    if (y !== void 0) {
      var S = new URL(y);
      if (S.hostname !== "localhost" && S.protocol !== "https:")
        throw new Error('The protocol of baseUrl must be "https".');
    }
  }, a = function(y) {
    if (y === "" || y === null)
      throw new Error("invalid guestSpaceId: got [".concat(y, "]"));
  }, w = function(y) {
    if (y !== void 0) {
      var S = parseFloat(y.toString());
      if (isNaN(S) || S < 0)
        throw new Error("Invalid socketTimeout. Must be a positive number.");
    }
  };
  return wn;
}
var nl;
function ph() {
  return nl || (nl = 1, function(e) {
    var t = nn.__createBinding || (Object.create ? function(u, l, f, h) {
      h === void 0 && (h = f);
      var m = Object.getOwnPropertyDescriptor(l, f);
      (!m || ("get" in m ? !l.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
        return l[f];
      } }), Object.defineProperty(u, h, m);
    } : function(u, l, f, h) {
      h === void 0 && (h = f), u[h] = l[f];
    }), r = nn.__setModuleDefault || (Object.create ? function(u, l) {
      Object.defineProperty(u, "default", { enumerable: !0, value: l });
    } : function(u, l) {
      u.default = l;
    }), n = nn.__importStar || /* @__PURE__ */ function() {
      var u = function(l) {
        return u = Object.getOwnPropertyNames || function(f) {
          var h = [];
          for (var m in f) Object.prototype.hasOwnProperty.call(f, m) && (h[h.length] = m);
          return h;
        }, u(l);
      };
      return function(l) {
        if (l && l.__esModule) return l;
        var f = {};
        if (l != null) for (var h = u(l), m = 0; m < h.length; m++) h[m] !== "default" && t(f, l, h[m]);
        return r(f, l), f;
      };
    }(), i = nn.__exportStar || function(u, l) {
      for (var f in u) f !== "default" && !Object.prototype.hasOwnProperty.call(l, f) && t(l, u, f);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KintoneRestAPIClient = void 0;
    var o = Zr(), s = n(mp());
    (0, o.injectPlatformDeps)(s);
    var c = dh();
    Object.defineProperty(e, "KintoneRestAPIClient", { enumerable: !0, get: function() {
      return c.KintoneRestAPIClient;
    } }), i(Uo(), e);
  }(nn)), nn;
}
var hh = ph();
const mh = {
  key: 0,
  class: "kvc-file-value"
}, yh = { class: "kvc-file-select-list" }, vh = ["src"], gh = { key: 1 }, bh = { class: "kvc-file-select-file-name" }, wh = { class: "kvc-file-select-file-size" }, Sh = { class: "kvc-file-select-list-item" }, xh = ["onClick"], _h = { class: "kvc-file-select-file-name" }, Eh = { class: "kvc-file-select-file-size" }, Oh = ["src"], Ah = { class: "kvc-file-select-group" }, Rh = ["disabled"], Ph = ["multiple", "accept"], Ch = {
  __name: "file-select",
  props: {
    modelValue: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    accept: { type: String, default: void 0 },
    autoUpload: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = new hh.KintoneRestAPIClient(), o = De(), s = De(null), c = De(n.modelValue || []), u = De(), l = De(), f = De();
    ol(() => n.modelValue, (a) => c.value = a ? Array.from(a) : null), Do(async () => {
      if (c.length)
        for await (const a of c.value)
          a.fileKey && !a.data && (a.data = await i.file.downloadFile({ fileKey: a.fileKey }));
      u.value && Ld(u, c, {
        onStart: () => f.value = !0,
        onEnd: () => {
          f.value = !1, setTimeout(() => {
            r("update:modelValue", c.value), r("change", c.value);
          }, 0);
        }
      });
    });
    const h = (a, w = 0) => {
      if (a === 0) return "0 Bytes";
      const y = 1024, S = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], E = Math.floor(Math.log(a) / Math.log(y)), P = (a / Math.pow(y, E)).toFixed(w);
      return `${Number(P).toLocaleString()} ${S[E]}`;
    }, m = (a, w) => {
      if (a && w) {
        let y = "";
        const S = new Uint8Array(a), E = S.byteLength;
        for (let O = 0; O < E; O++)
          y += String.fromCharCode(S[O]);
        const P = btoa(y);
        return `data:${w};base64,${P}`;
      } else
        return !1;
    }, b = (a) => {
      c.value.splice(a, 1), r("update:modelValue", c.value), r("change", c.value);
    }, g = async (a) => {
      if (a = Array.from(a), a && Array.isArray(a)) {
        const w = a.filter((S) => !S.fileKey), y = n.multiple ? [...c.value, ...a.filter((S) => S.fileKey)] : [];
        for await (const S of w) {
          let E = null;
          n.autoUpload && await i.file.uploadFile({
            file: {
              name: S.name,
              data: S
            }
          }).then((P) => E = P.fileKey), y.push({
            fileKey: E,
            name: S.name,
            size: S.size,
            data: await S.arrayBuffer(),
            contentType: S.type
          });
        }
        r("update:modelValue", y), r("change", y), c.value = y, s.value = null;
      }
    }, { isOverDropZone: d } = tf(l, {
      onDrop: g,
      dataTypes: n.accept ? n.accept.split(",") : n.accept,
      multiple: n.multiple,
      preventDefaultForUnhandled: !1
    });
    return (a, w) => e.readOnly ? (X(), J("div", mh, [
      le("ul", yh, [
        (X(!0), J(dt, null, vt(c.value, (y, S) => (X(), J("li", {
          key: S,
          class: "kvc-file-select-list-item-wrap"
        }, [
          y.data && (y.contentType || "").startsWith("image/") ? (X(), J("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(y.data, y.contentType)
          }, null, 8, vh)) : (X(), J("span", gh, [
            le("span", bh, Qe(y.name), 1),
            le("span", wh, "(" + Qe(h(y.size)) + ")", 1)
          ]))
        ]))), 128))
      ])
    ])) : (X(), J("div", {
      key: 1,
      ref_key: "dropZoneRef",
      ref: l,
      class: "kvc-file-select"
    }, [
      le("ul", {
        class: "kvc-file-select-list",
        ref_key: "sortWrapRef",
        ref: u
      }, [
        (X(!0), J(dt, null, vt(c.value, (y, S) => (X(), J("li", {
          key: S,
          class: "kvc-file-select-list-item-wrap"
        }, [
          le("div", Sh, [
            e.disabled ? We("", !0) : (X(), J("button", {
              key: 0,
              type: "button",
              class: "kvc-file-select-delete-button",
              onClick: (E) => b(S)
            }, [
              ct(Pe(Ot), {
                icon: "mdi:close",
                width: "22"
              })
            ], 8, xh)),
            le("span", _h, Qe(y.name), 1),
            le("span", Eh, Qe(h(y.size)), 1)
          ]),
          y.data && (y.contentType || "").startsWith("image/") ? (X(), J("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(y.data, y.contentType)
          }, null, 8, Oh)) : We("", !0)
        ]))), 128))
      ], 512),
      le("div", Ah, [
        le("button", {
          type: "button",
          disabled: e.disabled,
          class: "kvc-file-select-button",
          onClick: w[0] || (w[0] = (y) => o.value.click())
        }, "参照", 8, Rh),
        w[3] || (w[3] = le("p", { class: "kvc-file-select-text" }, "(最大1 GB)", -1))
      ]),
      !f.value && Pe(d) ? (X(), J("div", {
        key: 0,
        class: "kvc-file-select-file-dropzone",
        onClick: w[1] || (w[1] = (y) => d.value = !1)
      }, "ここにファイルをドロップします。")) : We("", !0),
      le("input", {
        type: "file",
        ref_key: "fileSelectRef",
        ref: o,
        multiple: e.multiple,
        accept: e.accept,
        onChange: w[2] || (w[2] = (y) => g(y.target.files))
      }, null, 40, Ph)
    ], 512));
  }
}, rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KvcButton: cf,
  KvcCheckbox: Rf,
  KvcDatePicker: bl,
  KvcDateTimePicker: pd,
  KvcDropdown: uf,
  KvcField: yf,
  KvcFileSelect: Ch,
  KvcRadio: Sf,
  KvcRow: Mu,
  KvcTable: Gc,
  KvcTextInput: Mo,
  KvcTextarea: md,
  KvcTimePicker: wl,
  KvcWrap: $u
}, Symbol.toStringTag, { value: "Module" })), Ih = {
  install: (e) => {
    for (const t in rl) {
      const r = rl[t];
      e.component(r.name || t, r);
    }
  }
};
export {
  cf as KvcButton,
  Rf as KvcCheckbox,
  bl as KvcDatePicker,
  pd as KvcDateTimePicker,
  uf as KvcDropdown,
  yf as KvcField,
  Ch as KvcFileSelect,
  Sf as KvcRadio,
  Mu as KvcRow,
  Gc as KvcTable,
  Mo as KvcTextInput,
  md as KvcTextarea,
  wl as KvcTimePicker,
  $u as KvcWrap,
  Ih as default
};

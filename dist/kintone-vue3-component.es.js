import { defineComponent as Ye, openBlock as X, createBlock as sn, resolveDynamicComponent as bu, withModifiers as wu, withCtx as _u, renderSlot as bt, createElementBlock as J, h as fa, computed as Te, normalizeClass as ze, createElementVNode as oe, createCommentVNode as Me, Fragment as dt, renderList as ht, normalizeStyle as Tn, toDisplayString as Qe, mergeProps as Su, createVNode as ft, unref as He, getCurrentScope as xu, onScopeDispose as Eu, onMounted as Do, nextTick as ol, getCurrentInstance as Ou, watch as al, ref as Ae, shallowRef as Ru, toValue as Mt, withDirectives as ln, vShow as Io, useSlots as sl, vModelRadio as Au, vModelCheckbox as Pu, vModelDynamic as Cu, reactive as ku, vModelText as Tu, isRef as Du, provide as da, inject as Iu } from "vue";
const $u = /* @__PURE__ */ Ye({
  __name: "wrap",
  props: {
    isForm: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, i) => (X(), sn(bu(n.isForm ? "form" : "div"), {
      id: "kvc-wrap",
      class: "kvc-wrap",
      onSubmit: i[0] || (i[0] = wu((o) => r("submit", o), ["prevent"]))
    }, {
      default: _u(() => [
        bt(n.$slots, "default")
      ]),
      _: 3
    }, 32));
  }
}), Nu = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, ju = {}, Mu = { class: "kvc-row" };
function qu(e, t) {
  return X(), J("div", Mu, [
    bt(e.$slots, "default")
  ]);
}
const Fu = /* @__PURE__ */ Nu(ju, [["render", qu]]), ll = /^[a-z0-9]+(-[a-z0-9]+)*$/, Xr = (e, t, r, n = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    n = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const c = i.pop(), s = i.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : n,
      prefix: s,
      name: c
    };
    return t && !Pr(l) ? null : l;
  }
  const o = i[0], u = o.split("-");
  if (u.length > 1) {
    const c = {
      provider: n,
      prefix: u.shift(),
      name: u.join("-")
    };
    return t && !Pr(c) ? null : c;
  }
  if (r && n === "") {
    const c = {
      provider: n,
      prefix: "",
      name: o
    };
    return t && !Pr(c, r) ? null : c;
  }
  return null;
}, Pr = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, ul = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Vr = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Jr = Object.freeze({
  ...ul,
  ...Vr
}), Eo = Object.freeze({
  ...Jr,
  body: "",
  hidden: !1
});
function Bu(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (r.rotate = n), r;
}
function pa(e, t) {
  const r = Bu(e, t);
  for (const n in Eo)
    n in Vr ? n in e && !(n in r) && (r[n] = Vr[n]) : n in t ? r[n] = t[n] : n in e && (r[n] = e[n]);
  return r;
}
function Lu(e, t) {
  const r = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function o(u) {
    if (r[u])
      return i[u] = [];
    if (!(u in i)) {
      i[u] = null;
      const c = n[u] && n[u].parent, s = c && o(c);
      s && (i[u] = [c].concat(s));
    }
    return i[u];
  }
  return Object.keys(r).concat(Object.keys(n)).forEach(o), i;
}
function Uu(e, t, r) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function u(c) {
    o = pa(
      n[c] || i[c],
      o
    );
  }
  return u(t), r.forEach(u), pa(e, o);
}
function cl(e, t) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((i) => {
    t(i, null), r.push(i);
  });
  const n = Lu(e);
  for (const i in n) {
    const o = n[i];
    o && (t(i, Uu(e, i, o)), r.push(i));
  }
  return r;
}
const Vu = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ul
};
function di(e, t) {
  for (const r in t)
    if (r in e && typeof e[r] != typeof t[r])
      return !1;
  return !0;
}
function fl(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !di(e, Vu))
    return null;
  const r = t.icons;
  for (const i in r) {
    const o = r[i];
    if (
      // Name cannot be empty
      !i || // Must have body
      typeof o.body != "string" || // Check other props
      !di(
        o,
        Eo
      )
    )
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in n) {
    const o = n[i], u = o.parent;
    if (
      // Name cannot be empty
      !i || // Parent must be set and point to existing icon
      typeof u != "string" || !r[u] && !n[u] || // Check other props
      !di(
        o,
        Eo
      )
    )
      return null;
  }
  return t;
}
const ha = /* @__PURE__ */ Object.create(null);
function Wu(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function In(e, t) {
  const r = ha[e] || (ha[e] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = Wu(e, t));
}
function dl(e, t) {
  return fl(t) ? cl(t, (r, n) => {
    n ? e.icons[r] = n : e.missing.add(r);
  }) : [];
}
function Hu(e, t, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[t] = { ...r }, !0;
  } catch {
  }
  return !1;
}
let nr = !1;
function pl(e) {
  return typeof e == "boolean" && (nr = e), nr;
}
function Gu(e) {
  const t = typeof e == "string" ? Xr(e, !0, nr) : e;
  if (t) {
    const r = In(t.provider, t.prefix), n = t.name;
    return r.icons[n] || (r.missing.has(n) ? null : void 0);
  }
}
function Ku(e, t) {
  const r = Xr(e, !0, nr);
  if (!r)
    return !1;
  const n = In(r.provider, r.prefix);
  return t ? Hu(n, r.name, t) : (n.missing.add(r.name), !0);
}
function zu(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), nr && !t && !e.prefix) {
    let i = !1;
    return fl(e) && (e.prefix = "", cl(e, (o, u) => {
      Ku(o, u) && (i = !0);
    })), i;
  }
  const r = e.prefix;
  if (!Pr({
    provider: t,
    prefix: r,
    name: "a"
  }))
    return !1;
  const n = In(t, r);
  return !!dl(n, e);
}
const hl = Object.freeze({
  width: null,
  height: null
}), ml = Object.freeze({
  // Dimensions
  ...hl,
  // Transformations
  ...Vr
}), Yu = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Xu = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ma(e, t, r) {
  if (t === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * t * r) / r;
  if (typeof e != "string")
    return e;
  const n = e.split(Yu);
  if (n === null || !n.length)
    return e;
  const i = [];
  let o = n.shift(), u = Xu.test(o);
  for (; ; ) {
    if (u) {
      const c = parseFloat(o);
      isNaN(c) ? i.push(o) : i.push(Math.ceil(c * t * r) / r);
    } else
      i.push(o);
    if (o = n.shift(), o === void 0)
      return i.join("");
    u = !u;
  }
}
function Ju(e, t = "defs") {
  let r = "";
  const n = e.indexOf("<" + t);
  for (; n >= 0; ) {
    const i = e.indexOf(">", n), o = e.indexOf("</" + t);
    if (i === -1 || o === -1)
      break;
    const u = e.indexOf(">", o);
    if (u === -1)
      break;
    r += e.slice(i + 1, o).trim(), e = e.slice(0, n).trim() + e.slice(u + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function Qu(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Zu(e, t, r) {
  const n = Ju(e);
  return Qu(n.defs, t + n.content + r);
}
const ec = (e) => e === "unset" || e === "undefined" || e === "none";
function tc(e, t) {
  const r = {
    ...Jr,
    ...e
  }, n = {
    ...ml,
    ...t
  }, i = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, n].forEach((d) => {
    const a = [], w = d.hFlip, v = d.vFlip;
    let _ = d.rotate;
    w ? v ? _ += 2 : (a.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), a.push("scale(-1 1)"), i.top = i.left = 0) : v && (a.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), a.push("scale(1 -1)"), i.top = i.left = 0);
    let E;
    switch (_ < 0 && (_ -= Math.floor(_ / 4) * 4), _ = _ % 4, _) {
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
    _ % 2 === 1 && (i.left !== i.top && (E = i.left, i.left = i.top, i.top = E), i.width !== i.height && (E = i.width, i.width = i.height, i.height = E)), a.length && (o = Zu(
      o,
      '<g transform="' + a.join(" ") + '">',
      "</g>"
    ));
  });
  const u = n.width, c = n.height, s = i.width, l = i.height;
  let f, p;
  u === null ? (p = c === null ? "1em" : c === "auto" ? l : c, f = ma(p, s / l)) : (f = u === "auto" ? s : u, p = c === null ? ma(f, l / s) : c === "auto" ? l : c);
  const m = {}, g = (d, a) => {
    ec(a) || (m[d] = a.toString());
  };
  g("width", f), g("height", p);
  const b = [i.left, i.top, s, l];
  return m.viewBox = b.join(" "), {
    attributes: m,
    viewBox: b,
    body: o
  };
}
const nc = /\sid="(\S+)"/g, rc = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ic = 0;
function oc(e, t = rc) {
  const r = [];
  let n;
  for (; n = nc.exec(e); )
    r.push(n[1]);
  if (!r.length)
    return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((o) => {
    const u = typeof t == "function" ? t(o) : t + (ic++).toString(), c = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + u + i + "$3"
    );
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
const Oo = /* @__PURE__ */ Object.create(null);
function ac(e, t) {
  Oo[e] = t;
}
function Ro(e) {
  return Oo[e] || Oo[""];
}
function $o(e) {
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
const No = /* @__PURE__ */ Object.create(null), Wn = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Cr = [];
for (; Wn.length > 0; )
  Wn.length === 1 || Math.random() > 0.5 ? Cr.push(Wn.shift()) : Cr.push(Wn.pop());
No[""] = $o({
  resources: ["https://api.iconify.design"].concat(Cr)
});
function sc(e, t) {
  const r = $o(t);
  return r === null ? !1 : (No[e] = r, !0);
}
function jo(e) {
  return No[e];
}
const lc = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let ya = lc();
function uc(e, t) {
  const r = jo(e);
  if (!r)
    return 0;
  let n;
  if (!r.maxURL)
    n = 0;
  else {
    let i = 0;
    r.resources.forEach((u) => {
      i = Math.max(i, u.length);
    });
    const o = t + ".json?icons=";
    n = r.maxURL - i - r.path.length - o.length;
  }
  return n;
}
function cc(e) {
  return e === 404;
}
const fc = (e, t, r) => {
  const n = [], i = uc(e, t), o = "icons";
  let u = {
    type: o,
    provider: e,
    prefix: t,
    icons: []
  }, c = 0;
  return r.forEach((s, l) => {
    c += s.length + 1, c >= i && l > 0 && (n.push(u), u = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, c = s.length), u.icons.push(s);
  }), n.push(u), n;
};
function dc(e) {
  if (typeof e == "string") {
    const t = jo(e);
    if (t)
      return t.path;
  }
  return "/";
}
const pc = (e, t, r) => {
  if (!ya) {
    r("abort", 424);
    return;
  }
  let n = dc(t.provider);
  switch (t.type) {
    case "icons": {
      const o = t.prefix, c = t.icons.join(","), s = new URLSearchParams({
        icons: c
      });
      n += o + ".json?" + s.toString();
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
  ya(e + n).then((o) => {
    const u = o.status;
    if (u !== 200) {
      setTimeout(() => {
        r(cc(u) ? "abort" : "next", u);
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
}, hc = {
  prepare: fc,
  send: pc
};
function mc(e) {
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
    const o = i.provider, u = i.prefix, c = i.name, s = r[o] || (r[o] = /* @__PURE__ */ Object.create(null)), l = s[u] || (s[u] = In(o, u));
    let f;
    c in l.icons ? f = t.loaded : u === "" || l.missing.has(c) ? f = t.missing : f = t.pending;
    const p = {
      provider: o,
      prefix: u,
      name: c
    };
    f.push(p);
  }), t;
}
function yl(e, t) {
  e.forEach((r) => {
    const n = r.loaderCallbacks;
    n && (r.loaderCallbacks = n.filter((i) => i.id !== t));
  });
}
function yc(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let r = !1;
    const n = e.provider, i = e.prefix;
    t.forEach((o) => {
      const u = o.icons, c = u.pending.length;
      u.pending = u.pending.filter((s) => {
        if (s.prefix !== i)
          return !0;
        const l = s.name;
        if (e.icons[l])
          u.loaded.push({
            provider: n,
            prefix: i,
            name: l
          });
        else if (e.missing.has(l))
          u.missing.push({
            provider: n,
            prefix: i,
            name: l
          });
        else
          return r = !0, !0;
        return !1;
      }), u.pending.length !== c && (r || yl([e], o.id), o.callback(
        u.loaded.slice(0),
        u.missing.slice(0),
        u.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let vc = 0;
function gc(e, t, r) {
  const n = vc++, i = yl.bind(null, r, n);
  if (!t.pending.length)
    return i;
  const o = {
    id: n,
    icons: t,
    callback: e,
    abort: i
  };
  return r.forEach((u) => {
    (u.loaderCallbacks || (u.loaderCallbacks = [])).push(o);
  }), i;
}
function bc(e, t = !0, r = !1) {
  const n = [];
  return e.forEach((i) => {
    const o = typeof i == "string" ? Xr(i, t, r) : i;
    o && n.push(o);
  }), n;
}
var wc = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function _c(e, t, r, n) {
  const i = e.resources.length, o = e.random ? Math.floor(Math.random() * i) : e.index;
  let u;
  if (e.random) {
    let R = e.resources.slice(0);
    for (u = []; R.length > 1; ) {
      const A = Math.floor(Math.random() * R.length);
      u.push(R[A]), R = R.slice(0, A).concat(R.slice(A + 1));
    }
    u = u.concat(R);
  } else
    u = e.resources.slice(o).concat(e.resources.slice(0, o));
  const c = Date.now();
  let s = "pending", l = 0, f, p = null, m = [], g = [];
  typeof n == "function" && g.push(n);
  function b() {
    p && (clearTimeout(p), p = null);
  }
  function d() {
    s === "pending" && (s = "aborted"), b(), m.forEach((R) => {
      R.status === "pending" && (R.status = "aborted");
    }), m = [];
  }
  function a(R, A) {
    A && (g = []), typeof R == "function" && g.push(R);
  }
  function w() {
    return {
      startTime: c,
      payload: t,
      status: s,
      queriesSent: l,
      queriesPending: m.length,
      subscribe: a,
      abort: d
    };
  }
  function v() {
    s = "failed", g.forEach((R) => {
      R(void 0, f);
    });
  }
  function _() {
    m.forEach((R) => {
      R.status === "pending" && (R.status = "aborted");
    }), m = [];
  }
  function E(R, A, I) {
    const q = A !== "success";
    switch (m = m.filter((M) => M !== R), s) {
      case "pending":
        break;
      case "failed":
        if (q || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (A === "abort") {
      f = I, v();
      return;
    }
    if (q) {
      f = I, m.length || (u.length ? P() : v());
      return;
    }
    if (b(), _(), !e.random) {
      const M = e.resources.indexOf(R.resource);
      M !== -1 && M !== e.index && (e.index = M);
    }
    s = "completed", g.forEach((M) => {
      M(I);
    });
  }
  function P() {
    if (s !== "pending")
      return;
    b();
    const R = u.shift();
    if (R === void 0) {
      if (m.length) {
        p = setTimeout(() => {
          b(), s === "pending" && (_(), v());
        }, e.timeout);
        return;
      }
      v();
      return;
    }
    const A = {
      status: "pending",
      resource: R,
      callback: (I, q) => {
        E(A, I, q);
      }
    };
    m.push(A), l++, p = setTimeout(P, e.rotate), r(R, t, A.callback);
  }
  return setTimeout(P), w;
}
function vl(e) {
  const t = {
    ...wc,
    ...e
  };
  let r = [];
  function n() {
    r = r.filter((c) => c().status === "pending");
  }
  function i(c, s, l) {
    const f = _c(
      t,
      c,
      s,
      (p, m) => {
        n(), l && l(p, m);
      }
    );
    return r.push(f), f;
  }
  function o(c) {
    return r.find((s) => c(s)) || null;
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
function va() {
}
const pi = /* @__PURE__ */ Object.create(null);
function Sc(e) {
  if (!pi[e]) {
    const t = jo(e);
    if (!t)
      return;
    const r = vl(t), n = {
      config: t,
      redundancy: r
    };
    pi[e] = n;
  }
  return pi[e];
}
function xc(e, t, r) {
  let n, i;
  if (typeof e == "string") {
    const o = Ro(e);
    if (!o)
      return r(void 0, 424), va;
    i = o.send;
    const u = Sc(e);
    u && (n = u.redundancy);
  } else {
    const o = $o(e);
    if (o) {
      n = vl(o);
      const u = e.resources ? e.resources[0] : "", c = Ro(u);
      c && (i = c.send);
    }
  }
  return !n || !i ? (r(void 0, 424), va) : n.query(t, i, r)().abort;
}
function ga() {
}
function Ec(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, yc(e);
  }));
}
function Oc(e) {
  const t = [], r = [];
  return e.forEach((n) => {
    (n.match(ll) ? t : r).push(n);
  }), {
    valid: t,
    invalid: r
  };
}
function Hn(e, t, r) {
  function n() {
    const i = e.pendingIcons;
    t.forEach((o) => {
      i && i.delete(o), e.icons[o] || e.missing.add(o);
    });
  }
  if (r && typeof r == "object")
    try {
      if (!dl(e, r).length) {
        n();
        return;
      }
    } catch (i) {
      console.error(i);
    }
  n(), Ec(e);
}
function ba(e, t) {
  e instanceof Promise ? e.then((r) => {
    t(r);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Rc(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: r, prefix: n } = e, i = e.iconsToLoad;
    if (delete e.iconsToLoad, !i || !i.length)
      return;
    const o = e.loadIcon;
    if (e.loadIcons && (i.length > 1 || !o)) {
      ba(
        e.loadIcons(i, n, r),
        (f) => {
          Hn(e, i, f);
        }
      );
      return;
    }
    if (o) {
      i.forEach((f) => {
        const p = o(f, n, r);
        ba(p, (m) => {
          const g = m ? {
            prefix: n,
            icons: {
              [f]: m
            }
          } : null;
          Hn(e, [f], g);
        });
      });
      return;
    }
    const { valid: u, invalid: c } = Oc(i);
    if (c.length && Hn(e, c, null), !u.length)
      return;
    const s = n.match(ll) ? Ro(r) : null;
    if (!s) {
      Hn(e, u, null);
      return;
    }
    s.prepare(r, n, u).forEach((f) => {
      xc(r, f, (p) => {
        Hn(e, f.icons, p);
      });
    });
  }));
}
const Ac = (e, t) => {
  const r = bc(e, !0, pl()), n = mc(r);
  if (!n.pending.length) {
    let s = !0;
    return t && setTimeout(() => {
      s && t(
        n.loaded,
        n.missing,
        n.pending,
        ga
      );
    }), () => {
      s = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let u, c;
  return n.pending.forEach((s) => {
    const { provider: l, prefix: f } = s;
    if (f === c && l === u)
      return;
    u = l, c = f, o.push(In(l, f));
    const p = i[l] || (i[l] = /* @__PURE__ */ Object.create(null));
    p[f] || (p[f] = []);
  }), n.pending.forEach((s) => {
    const { provider: l, prefix: f, name: p } = s, m = In(l, f), g = m.pendingIcons || (m.pendingIcons = /* @__PURE__ */ new Set());
    g.has(p) || (g.add(p), i[l][f].push(p));
  }), o.forEach((s) => {
    const l = i[s.provider][s.prefix];
    l.length && Rc(s, l);
  }), t ? gc(t, n, o) : ga;
};
function Pc(e, t) {
  const r = {
    ...e
  };
  for (const n in t) {
    const i = t[n], o = typeof i;
    n in hl ? (i === null || i && (o === "string" || o === "number")) && (r[n] = i) : o === typeof r[n] && (r[n] = n === "rotate" ? i % 4 : i);
  }
  return r;
}
const Cc = /[\s,]+/;
function kc(e, t) {
  t.split(Cc).forEach((r) => {
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
function Tc(e, t = 0) {
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
function Dc(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    r += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function Ic(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function $c(e) {
  return "data:image/svg+xml," + Ic(e);
}
function Nc(e) {
  return 'url("' + $c(e) + '")';
}
const wa = {
  ...ml,
  inline: !1
}, jc = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Mc = {
  display: "inline-block"
}, Ao = {
  backgroundColor: "currentColor"
}, gl = {
  backgroundColor: "transparent"
}, _a = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Sa = {
  webkitMask: Ao,
  mask: Ao,
  background: gl
};
for (const e in Sa) {
  const t = Sa[e];
  for (const r in _a)
    t[e + r] = _a[r];
}
const kr = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  kr[e + "-flip"] = t, kr[e.slice(0, 1) + "-flip"] = t, kr[e + "Flip"] = t;
});
function xa(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Ea = (e, t) => {
  const r = Pc(wa, t), n = { ...jc }, i = t.mode || "svg", o = {}, u = t.style, c = typeof u == "object" && !(u instanceof Array) ? u : {};
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
          typeof a == "string" && kc(r, a);
          break;
        // Color: override style
        case "color":
          o.color = a;
          break;
        // Rotation as string
        case "rotate":
          typeof a == "string" ? r[d] = Tc(a) : typeof a == "number" && (r[d] = a);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          a !== !0 && a !== "true" && delete n["aria-hidden"];
          break;
        default: {
          const w = kr[d];
          w ? (a === !0 || a === "true" || a === 1) && (r[w] = !0) : wa[d] === void 0 && (n[d] = a);
        }
      }
  }
  const s = tc(e, r), l = s.attributes;
  if (r.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    n.style = {
      ...o,
      ...c
    }, Object.assign(n, l);
    let d = 0, a = t.id;
    return typeof a == "string" && (a = a.replace(/-/g, "_")), n.innerHTML = oc(s.body, a ? () => a + "ID" + d++ : "iconifyVue"), fa("svg", n);
  }
  const { body: f, width: p, height: m } = e, g = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), b = Dc(f, {
    ...l,
    width: p + "",
    height: m + ""
  });
  return n.style = {
    ...o,
    "--svg": Nc(b),
    width: xa(l.width),
    height: xa(l.height),
    ...Mc,
    ...g ? Ao : gl,
    ...c
  }, fa("span", n);
};
pl(!0);
ac("", hc);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !zu(n)) && console.error(r);
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
          sc(r, i) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
const qc = {
  ...Jr,
  body: ""
}, At = Ye({
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
      if (typeof e != "string" || (n = Xr(e, !1, !0)) === null)
        return this.abortLoading(), null;
      let i = Gu(n);
      if (!i)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", i !== null && (this._loadingIcon = {
          name: e,
          abort: Ac([n], () => {
            this.counter++;
          })
        })), null;
      if (this.abortLoading(), this._name !== e && (this._name = e, t && t(e)), r) {
        i = Object.assign({}, i);
        const u = r(i.body, n.name, n.prefix, n.provider);
        typeof u == "string" && (i.body = u);
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
      return Ea(qc, e);
    let r = e;
    return t.classes && (r = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), Ea({
      ...Jr,
      ...t.data
    }, r);
  }
}), Fc = { key: 0 }, Bc = { class: "kvc-table-header-label" }, Lc = {
  key: 1,
  class: "kvc-table-operation"
}, Uc = { key: 0 }, Vc = ["href"], Wc = ["data-code"], Hc = {
  key: 1,
  class: "kvc-table-operation"
}, Gc = { class: "kvc-table-operation-buttons" }, Kc = ["onClick"], zc = ["onClick"], Yc = /* @__PURE__ */ Ye({
  __name: "table",
  props: {
    readOnly: { type: Boolean },
    rowData: {},
    columns: {},
    modelValue: {},
    hideOperations: { type: Boolean },
    recordUrl: {}
  },
  emits: ["update:modelValue", "add", "delete"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Te(() => r.readOnly || r.hideOperations), o = (s) => (r.rowData || []).reduce((l, f) => {
      var p;
      return l[`data-${f.key}`] = ((p = s[f.code]) == null ? void 0 : p.value) || null, l;
    }, {}), u = (s) => {
      const l = [...r.modelValue];
      s >= 0 && (l.splice(s + 1, 0, {}), n("update:modelValue", l), n("add", l, s));
    }, c = (s) => {
      const l = [...r.modelValue];
      s >= 0 && (l.splice(s, 1), n("update:modelValue", l), n("delete", l));
    };
    return (s, l) => (X(), J("table", {
      class: ze(["kvc-table", { "kvc-table-readonly": s.readOnly }])
    }, [
      oe("thead", null, [
        oe("tr", null, [
          s.recordUrl ? (X(), J("th", Fc)) : Me("", !0),
          (X(!0), J(dt, null, ht(s.columns, (f, p) => (X(), J("th", {
            key: p,
            style: Tn(f != null && f.width ? { width: f == null ? void 0 : f.width } : void 0)
          }, [
            bt(s.$slots, `column-${(f == null ? void 0 : f.code) || f}`, {}, () => [
              oe("span", Bc, Qe((f == null ? void 0 : f.label) ?? f), 1)
            ])
          ], 4))), 128)),
          i.value ? Me("", !0) : (X(), J("th", Lc))
        ])
      ]),
      oe("tbody", null, [
        (X(!0), J(dt, null, ht(s.modelValue, (f, p) => (X(), J("tr", Su({
          key: "row-" + p,
          ref_for: !0
        }, o(f)), [
          s.recordUrl ? (X(), J("td", Uc, [
            f.$id ? (X(), J("a", {
              key: 0,
              href: s.recordUrl + f.$id.value,
              class: "kvc-link",
              target: "_blank",
              rel: "noopener noreferrer",
              style: Tn(s.readOnly ? null : { display: "inline-block", margin: "10px 0" })
            }, [
              ft(He(At), {
                icon: "tdesign:file-filled",
                width: "16"
              })
            ], 12, Vc)) : Me("", !0)
          ])) : Me("", !0),
          (X(!0), J(dt, null, ht(s.columns, (m, g) => (X(), J("td", {
            key: "col-" + g,
            "data-code": (m == null ? void 0 : m.code) || m,
            style: Tn(m != null && m.width ? { width: m == null ? void 0 : m.width } : void 0)
          }, [
            bt(s.$slots, (m == null ? void 0 : m.code) || m, {
              index: p,
              row: f,
              width: m == null ? void 0 : m.width,
              column: (m == null ? void 0 : m.code) || m,
              value: f[(m == null ? void 0 : m.code) || m]
            })
          ], 12, Wc))), 128)),
          i.value ? Me("", !0) : (X(), J("td", Hc, [
            oe("div", Gc, [
              oe("button", {
                type: "button",
                class: "kvc-table-btn-plus",
                onClick: (m) => u(p)
              }, [
                ft(He(At), {
                  icon: "mdi:plus",
                  width: "14"
                })
              ], 8, Kc),
              oe("button", {
                type: "button",
                class: "kvc-table-btn-minus",
                onClick: (m) => c(p)
              }, [
                ft(He(At), {
                  icon: "mdi:minus",
                  width: "14"
                })
              ], 8, zc)
            ])
          ]))
        ], 16))), 128))
      ])
    ], 2));
  }
});
function bl(e) {
  return xu() ? (Eu(e), !0) : !1;
}
const Qr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Xc = Object.prototype.toString, Jc = (e) => Xc.call(e) === "[object Object]", hi = () => {
}, Qc = /* @__PURE__ */ Zc();
function Zc() {
  var e, t;
  return Qr && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function ef(e) {
  return Ou();
}
function mi(e) {
  return Array.isArray(e) ? e : [e];
}
function tf(e, t = !0, r) {
  ef() ? Do(e, r) : t ? e() : ol(e);
}
function nf(e, t, r) {
  return al(
    e,
    t,
    {
      ...r,
      immediate: !0
    }
  );
}
const wl = Qr ? window : void 0, rf = Qr ? window.document : void 0;
function Cn(e) {
  var t;
  const r = Mt(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function jt(...e) {
  const t = [], r = () => {
    t.forEach((c) => c()), t.length = 0;
  }, n = (c, s, l, f) => (c.addEventListener(s, l, f), () => c.removeEventListener(s, l, f)), i = Te(() => {
    const c = mi(Mt(e[0])).filter((s) => s != null);
    return c.every((s) => typeof s != "string") ? c : void 0;
  }), o = nf(
    () => {
      var c, s;
      return [
        (s = (c = i.value) == null ? void 0 : c.map((l) => Cn(l))) != null ? s : [wl].filter((l) => l != null),
        mi(Mt(i.value ? e[1] : e[0])),
        mi(He(i.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Mt(i.value ? e[3] : e[2])
      ];
    },
    ([c, s, l, f]) => {
      if (r(), !(c != null && c.length) || !(s != null && s.length) || !(l != null && l.length))
        return;
      const p = Jc(f) ? { ...f } : f;
      t.push(
        ...c.flatMap(
          (m) => s.flatMap(
            (g) => l.map((b) => n(m, g, b, p))
          )
        )
      );
    },
    { flush: "post" }
  ), u = () => {
    o(), r();
  };
  return bl(r), u;
}
let Oa = !1;
function rr(e, t, r = {}) {
  const { window: n = wl, ignore: i = [], capture: o = !0, detectIframe: u = !1 } = r;
  if (!n)
    return hi;
  if (Qc && !Oa) {
    Oa = !0;
    const d = { passive: !0 };
    Array.from(n.document.body.children).forEach((a) => jt(a, "click", hi, d)), jt(n.document.documentElement, "click", hi, d);
  }
  let c = !0;
  const s = (d) => Mt(i).some((a) => {
    if (typeof a == "string")
      return Array.from(n.document.querySelectorAll(a)).some((w) => w === d.target || d.composedPath().includes(w));
    {
      const w = Cn(a);
      return w && (d.target === w || d.composedPath().includes(w));
    }
  });
  function l(d) {
    const a = Mt(d);
    return a && a.$.subTree.shapeFlag === 16;
  }
  function f(d, a) {
    const w = Mt(d), v = w.$.subTree && w.$.subTree.children;
    return v == null || !Array.isArray(v) ? !1 : v.some((_) => _.el === a.target || a.composedPath().includes(_.el));
  }
  const p = (d) => {
    const a = Cn(e);
    if (d.target != null && !(!(a instanceof Element) && l(e) && f(e, d)) && !(!a || a === d.target || d.composedPath().includes(a))) {
      if (d.detail === 0 && (c = !s(d)), !c) {
        c = !0;
        return;
      }
      t(d);
    }
  };
  let m = !1;
  const g = [
    jt(n, "click", (d) => {
      m || (m = !0, setTimeout(() => {
        m = !1;
      }, 0), p(d));
    }, { passive: !0, capture: o }),
    jt(n, "pointerdown", (d) => {
      const a = Cn(e);
      c = !s(d) && !!(a && !d.composedPath().includes(a));
    }, { passive: !0 }),
    u && jt(n, "blur", (d) => {
      setTimeout(() => {
        var a;
        const w = Cn(e);
        ((a = n.document.activeElement) == null ? void 0 : a.tagName) === "IFRAME" && !(w != null && w.contains(n.document.activeElement)) && t(d);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean);
  return () => g.forEach((d) => d());
}
function of(e, t = {}) {
  var r, n;
  const i = Ae(!1), o = Ru(null);
  let u = 0, c = !0;
  if (Qr) {
    const s = typeof t == "function" ? { onDrop: t } : t, l = (r = s.multiple) != null ? r : !0, f = (n = s.preventDefaultForUnhandled) != null ? n : !1, p = (a) => {
      var w, v;
      const _ = Array.from((v = (w = a.dataTransfer) == null ? void 0 : w.files) != null ? v : []);
      return _.length === 0 ? null : l ? _ : [_[0]];
    }, m = (a) => {
      const w = He(s.dataTypes);
      return typeof w == "function" ? w(a) : w != null && w.length ? a.length === 0 ? !1 : a.every(
        (v) => w.some((_) => v.includes(_))
      ) : !0;
    }, g = (a) => {
      const w = Array.from(a ?? []).map((E) => E.type), v = m(w), _ = l || a.length <= 1;
      return v && _;
    }, b = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !("chrome" in window), d = (a, w) => {
      var v, _, E, P, R, A;
      const I = (v = a.dataTransfer) == null ? void 0 : v.items;
      if (c = (_ = I && g(I)) != null ? _ : !1, f && a.preventDefault(), !b() && !c) {
        a.dataTransfer && (a.dataTransfer.dropEffect = "none");
        return;
      }
      a.preventDefault(), a.dataTransfer && (a.dataTransfer.dropEffect = "copy");
      const q = p(a);
      switch (w) {
        case "enter":
          u += 1, i.value = !0, (E = s.onEnter) == null || E.call(s, null, a);
          break;
        case "over":
          (P = s.onOver) == null || P.call(s, null, a);
          break;
        case "leave":
          u -= 1, u === 0 && (i.value = !1), (R = s.onLeave) == null || R.call(s, null, a);
          break;
        case "drop":
          u = 0, i.value = !1, c && (o.value = q, (A = s.onDrop) == null || A.call(s, q, a));
          break;
      }
    };
    jt(e, "dragenter", (a) => d(a, "enter")), jt(e, "dragover", (a) => d(a, "over")), jt(e, "dragleave", (a) => d(a, "leave")), jt(e, "drop", (a) => d(a, "drop"));
  }
  return {
    files: o,
    isOverDropZone: i
  };
}
const af = ["onClick", "onMouseover"], sf = { class: "kvc-select-list-item-icon-space" }, lf = { class: "kvc-select-list-item-text" }, Wr = /* @__PURE__ */ Ye({
  __name: "SelectList",
  props: {
    items: {},
    modelValue: {},
    value: {},
    labelKey: {},
    valueKey: {},
    height: {},
    maxHeight: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Ae(null), o = /* @__PURE__ */ new Map(), u = Ae(null), c = Te(
      () => typeof r.height == "string" ? r.height : `${r.height}px`
    ), s = Te(
      () => typeof r.maxHeight == "string" ? r.maxHeight : `${r.maxHeight}px`
    ), l = (g) => {
      const b = o.get(g);
      if (i.value && b) {
        const d = i.value.offsetHeight, a = b.offsetTop, w = b.offsetHeight, v = a - d / 2 + w / 2;
        i.value.scrollTo({ top: v }), u.value = g;
      }
    };
    Do(() => l(r.modelValue));
    const f = (g) => {
      n("update:modelValue", g), n("change", g);
    }, p = (g) => typeof g == "object" && g !== null ? g[r.valueKey ?? "value"] ?? g : g, m = (g) => typeof g == "object" && g !== null ? g[r.labelKey ?? "label"] ?? g : g;
    return (g, b) => (X(), J("ul", {
      ref_key: "listWrapRef",
      ref: i,
      class: "kvc-select-list",
      style: Tn({ height: c.value, maxHeight: s.value })
    }, [
      (X(!0), J(dt, null, ht(g.items, (d, a) => (X(), J("li", {
        key: a,
        ref_for: !0,
        ref: (w) => He(o).set(p(d), w),
        class: ze(["kvc-select-list-item", {
          "kvc-select-list-item-selected": p(d) === g.modelValue
        }]),
        onClick: (w) => f(p(d)),
        onMouseover: (w) => u.value = p(d)
      }, [
        oe("span", sf, [
          p(d) === g.modelValue ? (X(), sn(He(At), {
            key: 0,
            icon: "mdi:check-bold",
            width: "15"
          })) : Me("", !0)
        ]),
        oe("span", lf, Qe(m(d)), 1)
      ], 42, af))), 128))
    ], 4));
  }
}), uf = ["innerHTML"], cf = {
  key: 1,
  class: "kvc-dropdown"
}, ff = ["disabled"], df = { class: "kvc-dropdown-label" }, pf = /* @__PURE__ */ Ye({
  __name: "dropdown",
  props: {
    width: {},
    nonstyled: { type: Boolean },
    disabled: { type: Boolean },
    readOnly: { type: Boolean },
    items: {},
    itemLabel: {},
    itemValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Te({
      get: () => r.modelValue ?? "",
      set: (p) => {
        n("update:modelValue", p), n("change", p);
      }
    }), o = Ae(!1), u = Ae(!1), c = Ae(null), s = Ae(null);
    rr(s, () => {
      o.value || (u.value = !1, o.value = !1);
    });
    const l = (p) => typeof p == "number" || !isNaN(Number(p));
    Te(() => r.width ? l(r.width) ? `${r.width}px` : r.width : "100%");
    const f = Te(() => {
      const p = r.itemValue ?? "value", m = r.itemLabel ?? "label", g = r.items.find((b) => typeof b == "object" && b[p] === r.modelValue);
      return g ? g[m] : "";
    });
    return (p, m) => p.readOnly ? (X(), J("p", {
      key: 0,
      class: ze(["kvc-field-value", { "kvc-field-value-nonstyled": p.nonstyled }]),
      innerHTML: p.modelValue
    }, null, 10, uf)) : (X(), J("div", cf, [
      oe("button", {
        ref_key: "buttonRef",
        ref: c,
        type: "button",
        class: "kvc-dropdown-button",
        disabled: p.disabled,
        onClick: m[0] || (m[0] = (g) => u.value = !0)
      }, [
        oe("span", df, Qe(f.value), 1),
        ft(He(At), {
          icon: "mdi-light:chevron-down",
          width: "24",
          style: { "min-width": "24px" }
        })
      ], 8, ff),
      p.readOnly || p.disabled ? Me("", !0) : ln((X(), sn(Wr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": m[1] || (m[1] = (g) => i.value = g),
        ref_key: "timeRef",
        ref: s,
        items: p.items,
        labelKey: p.itemLabel,
        valueKey: p.itemValue,
        onChange: m[2] || (m[2] = (g) => u.value = !1)
      }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
        [Io, u.value]
      ])
    ]));
  }
}), hf = /* @__PURE__ */ Ye({
  __name: "button",
  props: {
    sm: { type: Boolean },
    color: {}
  },
  setup(e) {
    return (t, r) => (X(), J("button", {
      type: "button",
      class: ze(["kvc-button", {
        "kvc-button-sm": t.sm,
        "kvc-button-normal": t.color === "normal",
        "kvc-button-success": t.color === "success",
        "kvc-button-save": t.color === "save",
        "kvc-button-error": t.color === "error"
      }])
    }, [
      bt(t.$slots, "default")
    ], 2));
  }
}), mf = { class: "kvc-field-label" }, yf = {
  key: 0,
  class: "kvc-field-required"
}, vf = { class: "kvc-field-input" }, gf = {
  key: 0,
  class: "kvc-field-prefix"
}, bf = {
  key: 1,
  class: "kvc-field-suffix"
}, wf = /* @__PURE__ */ Ye({
  __name: "field",
  props: {
    required: { type: Boolean },
    width: {},
    errorMessage: {},
    successMessage: {}
  },
  setup(e) {
    const t = e, r = sl(), n = (o) => typeof o == "number" || !isNaN(Number(o)), i = Te(() => t.width ? n(t.width) ? `${t.width}px` : t.width : "fit-content");
    return (o, u) => {
      var c, s, l, f;
      return X(), J("div", {
        style: Tn({ width: i.value }),
        class: "kvc-field"
      }, [
        oe("label", mf, [
          bt(o.$slots, "label"),
          o.required ? (X(), J("span", yf)) : Me("", !0)
        ]),
        oe("div", vf, [
          (s = (c = He(r)).prefix) != null && s.call(c) ? (X(), J("div", gf, [
            bt(o.$slots, "prefix")
          ])) : Me("", !0),
          bt(o.$slots, "default"),
          (f = (l = He(r)).suffix) != null && f.call(l) ? (X(), J("div", bf, [
            bt(o.$slots, "suffix")
          ])) : Me("", !0)
        ]),
        o.errorMessage || o.successMessage ? (X(), J("div", {
          key: 0,
          class: ze({
            "kvc-field-message-error": o.errorMessage,
            "kvc-field-message-success": o.successMessage
          })
        }, Qe(o.errorMessage || o.successMessage), 3)) : Me("", !0)
      ], 4);
    };
  }
}), _f = ["innerHTML"], Sf = ["disabled", "value"], xf = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Ef = ["fill"], Of = /* @__PURE__ */ Ye({
  __name: "radio",
  props: {
    column: { type: Boolean },
    readOnly: { type: Boolean },
    nonstyled: { type: Boolean },
    itemLabel: {},
    itemValue: {},
    items: {},
    modelValue: { type: [String, Number, Boolean, Object, null] }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Te({
      get: () => r.modelValue ?? "",
      set: (f) => {
        n("update:modelValue", f), n("change", f);
      }
    }), o = r.itemValue ?? "value", u = r.itemLabel ?? "label", c = (f) => f != null && f.disabled ? "#d8d8d8" : r.modelValue == ((f == null ? void 0 : f[o]) ?? f) ? "#3498db" : "#d8d8d8", s = (f) => typeof f == "object" && f !== null ? f[o] ?? f : f, l = (f) => typeof f == "object" && f !== null ? f[u] ?? f : f;
    return (f, p) => f.readOnly ? (X(), J("p", {
      key: 0,
      class: ze(["kvc-field-value", { "kvc-field-value-nonstyled": f.nonstyled }]),
      innerHTML: f.modelValue
    }, null, 10, _f)) : (X(), J("div", {
      key: 1,
      class: ze(["kvc-radio-group", { "kvc-radio-group-column": f.column }])
    }, [
      (X(!0), J(dt, null, ht(f.items, (m, g) => (X(), J("label", {
        key: g,
        class: "kvc-radio-item"
      }, [
        ln(oe("input", {
          type: "radio",
          "onUpdate:modelValue": p[0] || (p[0] = (b) => i.value = b),
          disabled: typeof m == "object" ? m.disabled : !1,
          value: s(m)
        }, null, 8, Sf), [
          [Au, i.value]
        ]),
        (X(), J("svg", xf, [
          p[1] || (p[1] = oe("circle", {
            cx: "10.5",
            cy: "10.5",
            r: "10",
            fill: "white",
            stroke: "#e3e7e8",
            "stroke-width": "1"
          }, null, -1)),
          i.value == s(m) ? (X(), J("circle", {
            key: 0,
            cx: "10.5",
            cy: "10.5",
            r: "6.5",
            fill: c(m)
          }, null, 8, Ef)) : Me("", !0)
        ])),
        oe("span", null, Qe(l(m)), 1)
      ]))), 128))
    ], 2));
  }
}), Rf = ["innerHTML"], Af = ["disabled", "value"], Pf = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Cf = ["stroke"], kf = ["fill"], Tf = /* @__PURE__ */ Ye({
  __name: "checkbox",
  props: {
    column: { type: Boolean },
    readOnly: { type: Boolean },
    nonstyled: { type: Boolean },
    itemLabel: {},
    itemValue: {},
    items: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Te({
      get: () => r.modelValue ?? "",
      set: (s) => {
        n("update:modelValue", s), n("change", s);
      }
    }), o = (s) => {
      const l = r.itemValue ?? "value", f = typeof s == "object" ? s[l] : s;
      return s.disabled ? "#e3e7e8" : r.modelValue.includes(f) ? "#3498db" : "#e3e7e8";
    }, u = (s) => {
      const l = r.itemLabel ?? "label";
      return typeof s == "object" ? s[l] : s;
    }, c = (s) => {
      const l = r.itemValue ?? "value";
      return typeof s == "object" ? s[l] : s;
    };
    return (s, l) => s.readOnly ? (X(), J("p", {
      key: 0,
      class: ze(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }]),
      innerHTML: s.modelValue.join(", ")
    }, null, 10, Rf)) : (X(), J("div", {
      key: 1,
      class: ze(["kvc-checkbox-group", { "kvc-checkbox-group-column": s.column }])
    }, [
      (X(!0), J(dt, null, ht(s.items, (f, p) => (X(), J("label", {
        key: p,
        class: "kvc-checkbox-item"
      }, [
        ln(oe("input", {
          type: "checkbox",
          "onUpdate:modelValue": l[0] || (l[0] = (m) => i.value = m),
          disabled: typeof f == "object" ? f.disabled : !1,
          value: c(f)
        }, null, 8, Af), [
          [Pu, i.value]
        ]),
        (X(), J("svg", Pf, [
          oe("rect", {
            x: "1",
            y: "1",
            width: "19",
            height: "19",
            rx: "1",
            fill: "white",
            "stroke-width": "2",
            stroke: o(f)
          }, null, 8, Cf),
          i.value.includes(c(f)) ? (X(), J("path", {
            key: 0,
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z",
            fill: o(f)
          }, null, 8, kf)) : Me("", !0)
        ])),
        oe("span", null, Qe(u(f)), 1)
      ]))), 128))
    ], 2));
  }
}), Df = ["placeholder", "type", "min", "max"], Mo = /* @__PURE__ */ Ye({
  __name: "text-input",
  props: {
    modelValue: {},
    nonstyled: { type: Boolean },
    readOnly: { type: Boolean },
    width: {},
    type: {},
    placeholder: {},
    min: {},
    max: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Te({
      get: () => r.modelValue ?? "",
      set: (c) => n("update:modelValue", c)
    }), o = (c) => typeof c == "number" || !isNaN(Number(c)), u = Te(() => r.width ? o(r.width) ? `${r.width}px` : r.width : "100%");
    return (c, s) => c.readOnly ? (X(), J("p", {
      key: 0,
      class: ze(["kvc-field-value", { "kvc-field-value-nonstyled": c.nonstyled }])
    }, Qe((i.value || " ").replace(/\r|\n/g, "") || " "), 3)) : ln((X(), J("input", {
      key: 1,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => i.value = l),
      class: "kvc-field-text",
      style: Tn({ width: u.value }),
      placeholder: c.placeholder,
      type: c.type,
      min: c.min,
      max: c.max
    }, null, 12, Df)), [
      [Cu, i.value]
    ]);
  }
});
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function If(e) {
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
var Tr = { exports: {} }, $f = Tr.exports, Ra;
function Nf() {
  return Ra || (Ra = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })($f, function() {
      var r = 1e3, n = 6e4, i = 36e5, o = "millisecond", u = "second", c = "minute", s = "hour", l = "day", f = "week", p = "month", m = "quarter", g = "year", b = "date", d = "Invalid Date", a = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(V) {
        var B = ["th", "st", "nd", "rd"], U = V % 100;
        return "[" + V + (B[(U - 20) % 10] || B[U] || B[0]) + "]";
      } }, _ = function(V, B, U) {
        var z = String(V);
        return !z || z.length >= B ? V : "" + Array(B + 1 - z.length).join(U) + V;
      }, E = { s: _, z: function(V) {
        var B = -V.utcOffset(), U = Math.abs(B), z = Math.floor(U / 60), j = U % 60;
        return (B <= 0 ? "+" : "-") + _(z, 2, "0") + ":" + _(j, 2, "0");
      }, m: function V(B, U) {
        if (B.date() < U.date()) return -V(U, B);
        var z = 12 * (U.year() - B.year()) + (U.month() - B.month()), j = B.clone().add(z, p), Q = U - j < 0, ee = B.clone().add(z + (Q ? -1 : 1), p);
        return +(-(z + (U - j) / (Q ? j - ee : ee - j)) || 0);
      }, a: function(V) {
        return V < 0 ? Math.ceil(V) || 0 : Math.floor(V);
      }, p: function(V) {
        return { M: p, y: g, w: f, d: l, D: b, h: s, m: c, s: u, ms: o, Q: m }[V] || String(V || "").toLowerCase().replace(/s$/, "");
      }, u: function(V) {
        return V === void 0;
      } }, P = "en", R = {};
      R[P] = v;
      var A = "$isDayjsObject", I = function(V) {
        return V instanceof W || !(!V || !V[A]);
      }, q = function V(B, U, z) {
        var j;
        if (!B) return P;
        if (typeof B == "string") {
          var Q = B.toLowerCase();
          R[Q] && (j = Q), U && (R[Q] = U, j = Q);
          var ee = B.split("-");
          if (!j && ee.length > 1) return V(ee[0]);
        } else {
          var fe = B.name;
          R[fe] = B, j = fe;
        }
        return !z && j && (P = j), j || !z && P;
      }, M = function(V, B) {
        if (I(V)) return V.clone();
        var U = typeof B == "object" ? B : {};
        return U.date = V, U.args = arguments, new W(U);
      }, F = E;
      F.l = q, F.i = I, F.w = function(V, B) {
        return M(V, { locale: B.$L, utc: B.$u, x: B.$x, $offset: B.$offset });
      };
      var W = function() {
        function V(U) {
          this.$L = q(U.locale, null, !0), this.parse(U), this.$x = this.$x || U.x || {}, this[A] = !0;
        }
        var B = V.prototype;
        return B.parse = function(U) {
          this.$d = function(z) {
            var j = z.date, Q = z.utc;
            if (j === null) return /* @__PURE__ */ new Date(NaN);
            if (F.u(j)) return /* @__PURE__ */ new Date();
            if (j instanceof Date) return new Date(j);
            if (typeof j == "string" && !/Z$/i.test(j)) {
              var ee = j.match(a);
              if (ee) {
                var fe = ee[2] - 1 || 0, me = (ee[7] || "0").substring(0, 3);
                return Q ? new Date(Date.UTC(ee[1], fe, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, me)) : new Date(ee[1], fe, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, me);
              }
            }
            return new Date(j);
          }(U), this.init();
        }, B.init = function() {
          var U = this.$d;
          this.$y = U.getFullYear(), this.$M = U.getMonth(), this.$D = U.getDate(), this.$W = U.getDay(), this.$H = U.getHours(), this.$m = U.getMinutes(), this.$s = U.getSeconds(), this.$ms = U.getMilliseconds();
        }, B.$utils = function() {
          return F;
        }, B.isValid = function() {
          return this.$d.toString() !== d;
        }, B.isSame = function(U, z) {
          var j = M(U);
          return this.startOf(z) <= j && j <= this.endOf(z);
        }, B.isAfter = function(U, z) {
          return M(U) < this.startOf(z);
        }, B.isBefore = function(U, z) {
          return this.endOf(z) < M(U);
        }, B.$g = function(U, z, j) {
          return F.u(U) ? this[z] : this.set(j, U);
        }, B.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, B.valueOf = function() {
          return this.$d.getTime();
        }, B.startOf = function(U, z) {
          var j = this, Q = !!F.u(z) || z, ee = F.p(U), fe = function(ge, Z) {
            var ye = F.w(j.$u ? Date.UTC(j.$y, Z, ge) : new Date(j.$y, Z, ge), j);
            return Q ? ye : ye.endOf(l);
          }, me = function(ge, Z) {
            return F.w(j.toDate()[ge].apply(j.toDate("s"), (Q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), j);
          }, xe = this.$W, Se = this.$M, N = this.$D, G = "set" + (this.$u ? "UTC" : "");
          switch (ee) {
            case g:
              return Q ? fe(1, 0) : fe(31, 11);
            case p:
              return Q ? fe(1, Se) : fe(0, Se + 1);
            case f:
              var ve = this.$locale().weekStart || 0, Oe = (xe < ve ? xe + 7 : xe) - ve;
              return fe(Q ? N - Oe : N + (6 - Oe), Se);
            case l:
            case b:
              return me(G + "Hours", 0);
            case s:
              return me(G + "Minutes", 1);
            case c:
              return me(G + "Seconds", 2);
            case u:
              return me(G + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, B.endOf = function(U) {
          return this.startOf(U, !1);
        }, B.$set = function(U, z) {
          var j, Q = F.p(U), ee = "set" + (this.$u ? "UTC" : ""), fe = (j = {}, j[l] = ee + "Date", j[b] = ee + "Date", j[p] = ee + "Month", j[g] = ee + "FullYear", j[s] = ee + "Hours", j[c] = ee + "Minutes", j[u] = ee + "Seconds", j[o] = ee + "Milliseconds", j)[Q], me = Q === l ? this.$D + (z - this.$W) : z;
          if (Q === p || Q === g) {
            var xe = this.clone().set(b, 1);
            xe.$d[fe](me), xe.init(), this.$d = xe.set(b, Math.min(this.$D, xe.daysInMonth())).$d;
          } else fe && this.$d[fe](me);
          return this.init(), this;
        }, B.set = function(U, z) {
          return this.clone().$set(U, z);
        }, B.get = function(U) {
          return this[F.p(U)]();
        }, B.add = function(U, z) {
          var j, Q = this;
          U = Number(U);
          var ee = F.p(z), fe = function(Se) {
            var N = M(Q);
            return F.w(N.date(N.date() + Math.round(Se * U)), Q);
          };
          if (ee === p) return this.set(p, this.$M + U);
          if (ee === g) return this.set(g, this.$y + U);
          if (ee === l) return fe(1);
          if (ee === f) return fe(7);
          var me = (j = {}, j[c] = n, j[s] = i, j[u] = r, j)[ee] || 1, xe = this.$d.getTime() + U * me;
          return F.w(xe, this);
        }, B.subtract = function(U, z) {
          return this.add(-1 * U, z);
        }, B.format = function(U) {
          var z = this, j = this.$locale();
          if (!this.isValid()) return j.invalidDate || d;
          var Q = U || "YYYY-MM-DDTHH:mm:ssZ", ee = F.z(this), fe = this.$H, me = this.$m, xe = this.$M, Se = j.weekdays, N = j.months, G = j.meridiem, ve = function(Z, ye, he, Ce) {
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
                  return xe + 1;
                case "MM":
                  return F.s(xe + 1, 2, "0");
                case "MMM":
                  return ve(j.monthsShort, xe, N, 3);
                case "MMMM":
                  return ve(N, xe);
                case "D":
                  return z.$D;
                case "DD":
                  return F.s(z.$D, 2, "0");
                case "d":
                  return String(z.$W);
                case "dd":
                  return ve(j.weekdaysMin, z.$W, Se, 2);
                case "ddd":
                  return ve(j.weekdaysShort, z.$W, Se, 3);
                case "dddd":
                  return Se[z.$W];
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
        }, B.diff = function(U, z, j) {
          var Q, ee = this, fe = F.p(z), me = M(U), xe = (me.utcOffset() - this.utcOffset()) * n, Se = this - me, N = function() {
            return F.m(ee, me);
          };
          switch (fe) {
            case g:
              Q = N() / 12;
              break;
            case p:
              Q = N();
              break;
            case m:
              Q = N() / 3;
              break;
            case f:
              Q = (Se - xe) / 6048e5;
              break;
            case l:
              Q = (Se - xe) / 864e5;
              break;
            case s:
              Q = Se / i;
              break;
            case c:
              Q = Se / n;
              break;
            case u:
              Q = Se / r;
              break;
            default:
              Q = Se;
          }
          return j ? Q : F.a(Q);
        }, B.daysInMonth = function() {
          return this.endOf(p).$D;
        }, B.$locale = function() {
          return R[this.$L];
        }, B.locale = function(U, z) {
          if (!U) return this.$L;
          var j = this.clone(), Q = q(U, z, !0);
          return Q && (j.$L = Q), j;
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
        }, V;
      }(), ae = W.prototype;
      return M.prototype = ae, [["$ms", o], ["$s", u], ["$m", c], ["$H", s], ["$W", l], ["$M", p], ["$y", g], ["$D", b]].forEach(function(V) {
        ae[V[1]] = function(B) {
          return this.$g(B, V[0], V[1]);
        };
      }), M.extend = function(V, B) {
        return V.$i || (V(B, W, M), V.$i = !0), M;
      }, M.locale = q, M.isDayjs = I, M.unix = function(V) {
        return M(1e3 * V);
      }, M.en = R[P], M.Ls = R, M.p = {}, M;
    });
  }(Tr)), Tr.exports;
}
var jf = Nf();
const Ee = /* @__PURE__ */ Nn(jf);
var Dr = { exports: {} }, Mf = Dr.exports, Aa;
function qf() {
  return Aa || (Aa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Mf, function() {
      return function(r, n) {
        n.prototype.weekday = function(i) {
          var o = this.$locale().weekStart || 0, u = this.$W, c = (u < o ? u + 7 : u) - o;
          return this.$utils().u(i) ? c : this.subtract(c, "day").add(i, "day");
        };
      };
    });
  }(Dr)), Dr.exports;
}
var Ff = qf();
const Bf = /* @__PURE__ */ Nn(Ff);
var Ir = { exports: {} }, Lf = Ir.exports, Pa;
function Uf() {
  return Pa || (Pa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Lf, function() {
      return function(r, n) {
        n.prototype.isSameOrBefore = function(i, o) {
          return this.isSame(i, o) || this.isBefore(i, o);
        };
      };
    });
  }(Ir)), Ir.exports;
}
var Vf = Uf();
const Wf = /* @__PURE__ */ Nn(Vf), Hf = { class: "kvc-datepicker-popup" }, Gf = { class: "kvc-datepicker-controls" }, Kf = { class: "kvc-datepicker-control-year-month" }, zf = { class: "kvc-datepicker-control-year" }, Yf = { class: "kvc-datepicker-control-selector-text" }, Xf = { class: "kvc-datepicker-control-month" }, Jf = { class: "kvc-datepicker-control-selector-text" }, Qf = { class: "kvc-datepicker-body" }, Zf = ["onClick"], ed = { class: "kvc-datepicker-bottom" }, td = /* @__PURE__ */ Ye({
  __name: "DatePicker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "close"],
  setup(e, { emit: t }) {
    var R;
    Ee.extend(Bf), Ee.extend(Wf);
    const r = e, n = t, i = Ae(null), o = Ae(null), u = Ae(null), c = Ae(null), s = Ae(
      (R = r.modelValue) != null && R.length ? r.modelValue : void 0
    ), l = ["日", "月", "火", "水", "木", "金", "土"], f = ku({
      year: !1,
      month: !1
    }), p = (A) => {
      f[A] = !1;
    };
    rr(i, () => p("year")), rr(o, () => p("month"));
    const m = Te(
      () => Array.from({ length: 12 }, (A, I) => ({
        label: `${I + 1}月`,
        value: I + 1
      }))
    ), g = Te(() => {
      const A = Ee(s.value).year(), I = A - 100, q = A + 100, M = [];
      for (let F = I; F <= q; F++)
        M.push({ label: `${F}年`, value: F });
      return M;
    }), b = (A) => {
      A = Number(A), s.value = Ee(s.value || void 0).year(A).format("YYYY-MM-DD"), setTimeout(() => f.year = !1, 10);
    }, d = (A) => {
      A = Number(A), s.value = Ee(s.value || void 0).month(A - 1).format("YYYY-MM-DD"), setTimeout(() => f.month = !1, 10);
    }, a = Te(() => Ee(s.value).year()), w = Te(() => Ee(s.value).month() + 1), v = Te(() => {
      const A = Ee(s.value).startOf("month"), I = Ee(s.value).endOf("month"), q = A.weekday(0), M = I.weekday(6), F = [];
      let W = q;
      for (; W.isSameOrBefore(M); ) {
        const V = [];
        for (let B = 0; B < 7; B++)
          V.push({
            date: W.date(),
            fullDate: W.format("YYYY-MM-DD"),
            isCurrentMonth: W.month() === Ee(s.value).month(),
            isCurrentDate: W.isSame(Ee(r.modelValue || void 0), "date"),
            isHoliday: W.day() === 0 || W.day() === 6,
            isToday: W.isSame(Ee(), "day")
          }), W = W.add(1, "day");
        F.push(V);
      }
      let ae = M.add(1, "day");
      for (; F.length < 6; ) {
        const V = [];
        for (let B = 0; B < 7; B++)
          V.push({
            date: ae.date(),
            fullDate: ae.format("YYYY-MM-DD"),
            isCurrentMonth: ae.month() === Ee(s.value).month(),
            isCurrentDate: ae.isSame(Ee(r.modelValue || void 0), "date"),
            isHoliday: ae.day() === 0 || ae.day() === 6,
            isToday: ae.isSame(Ee(), "day")
          }), ae = ae.add(1, "day");
        F.push(V);
      }
      return F;
    }), _ = () => {
      s.value = Ee(s.value).subtract(1, "month").format("YYYY-MM-DD");
    }, E = () => {
      s.value = Ee(s.value).add(1, "month").format("YYYY-MM-DD");
    }, P = (A) => {
      n("update:modelValue", A || ""), n("close", !0);
    };
    return (A, I) => (X(), J("div", Hf, [
      oe("div", Gf, [
        oe("button", {
          class: "kvc-datepicker-control-prev",
          onClick: _
        }, [
          ft(He(At), {
            icon: "mdi-light:chevron-left",
            height: "32"
          })
        ]),
        oe("div", Kf, [
          oe("div", zf, [
            oe("button", {
              type: "button",
              ref_key: "yearRef",
              ref: i,
              class: "kvc-datepicker-control-selector",
              onClick: I[0] || (I[0] = (q) => f.year = !f.year)
            }, [
              oe("span", Yf, Qe(a.value) + "年", 1),
              ft(He(At), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.year ? (X(), sn(Wr, {
                key: 0,
                ref_key: "yearListRef",
                ref: u,
                class: "kvc-datepicker-controll-selector-list",
                items: g.value,
                "model-value": a.value,
                "max-height": 300,
                onChange: b
              }, null, 8, ["items", "model-value"])) : Me("", !0)
            ], 512)
          ]),
          oe("div", Xf, [
            oe("button", {
              type: "button",
              ref_key: "monthRef",
              ref: o,
              class: "kvc-datepicker-control-selector",
              onClick: I[1] || (I[1] = (q) => f.month = !f.month)
            }, [
              oe("span", Jf, Qe(w.value) + "月", 1),
              ft(He(At), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.month ? (X(), sn(Wr, {
                key: 0,
                ref_key: "monthListRef",
                ref: c,
                class: "kvc-datepicker-controll-selector-list",
                items: m.value,
                "model-value": w.value,
                onChange: d
              }, null, 8, ["items", "model-value"])) : Me("", !0)
            ], 512)
          ])
        ]),
        oe("button", {
          class: "kvc-datepicker-control-next",
          onClick: E
        }, [
          ft(He(At), {
            icon: "mdi-light:chevron-right",
            height: "32"
          })
        ])
      ]),
      oe("table", Qf, [
        oe("thead", null, [
          oe("tr", null, [
            (X(), J(dt, null, ht(l, (q) => oe("th", {
              key: q,
              class: ze(["kvc-datepicker-day", {
                "kvc-datepicker-day-saturday": q === "土",
                "kvc-datepicker-day-sunday": q === "日"
              }])
            }, Qe(q), 3)), 64))
          ])
        ]),
        oe("tbody", null, [
          (X(!0), J(dt, null, ht(v.value, (q, M) => (X(), J("tr", { key: M }, [
            (X(!0), J(dt, null, ht(q, (F) => (X(), J("td", {
              key: F.date
            }, [
              oe("button", {
                type: "button",
                class: ze(["kvc-datepicker-date", {
                  "kvc-datepicker-date-notcurrent-month": !F.isCurrentMonth,
                  "kvc-datepicker-date-today": F.isToday,
                  "kvc-datepicker-date-current": F.isCurrentDate
                }]),
                onClick: (W) => P(F.fullDate)
              }, Qe(F.date), 11, Zf)
            ]))), 128))
          ]))), 128))
        ])
      ]),
      oe("div", ed, [
        oe("button", {
          type: "button",
          class: "kvc-datepicker-bottom-today",
          onClick: I[2] || (I[2] = (q) => P(He(Ee)().format("YYYY-MM-DD")))
        }, " 今日 "),
        oe("button", {
          type: "button",
          class: "kvc-datepicker-bottom-clear",
          onClick: I[3] || (I[3] = (q) => P())
        }, " 選択を解除 ")
      ])
    ]));
  }
}), nd = { class: "kvc-date-picker" }, _l = /* @__PURE__ */ Ye({
  __name: "date-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Te({
      get: () => r.modelValue ?? "",
      set: (g) => {
        n("update:modelValue", g), n("change", g);
      }
    }), o = (g) => {
      const b = g.target;
      /^\d{4}-\d{2}-\d{2}$/.test(b.value) || (n("update:modelValue", ""), n("change", ""));
    }, u = Ae(!1), c = Ae(!1), s = Ae(null), l = Ae(null), f = () => {
      u.value = !0, c.value = !0;
    }, p = () => {
      u.value = !1;
    }, m = () => {
      c.value = !1, u.value = !1;
    };
    return rr(l, () => {
      u.value || (c.value = !1, u.value = !1);
    }), (g, b) => (X(), J("div", nd, [
      ft(Mo, {
        "read-only": g.readOnly,
        disabled: g.disabled,
        nonstyled: g.nonstyled,
        modelValue: i.value,
        "onUpdate:modelValue": b[0] || (b[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: s,
        class: ze(["text-center", g.readOnly ? "w-28" : "max-w-28"]),
        onFocus: f,
        onBlur: p,
        onChange: o
      }, null, 8, ["read-only", "disabled", "nonstyled", "modelValue", "class"]),
      g.readOnly || g.disabled ? Me("", !0) : ln((X(), sn(td, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": b[1] || (b[1] = (d) => i.value = d),
        ref_key: "calendarRef",
        ref: l,
        onClose: m
      }, null, 8, ["modelValue"])), [
        [Io, c.value]
      ])
    ]));
  }
}), rd = { class: "kvc-time-picker" }, Sl = /* @__PURE__ */ Ye({
  __name: "time-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Te({
      get: () => r.modelValue ?? "",
      set: (g) => {
        n("update:modelValue", g), n("change", g);
      }
    }), o = (g) => {
      const b = g.target;
      /^\d{2}:\d{2}$/.test(b.value) || (n("update:modelValue", ""), n("change", ""));
    }, u = Te(() => {
      const g = [];
      for (let b = 0; b < 24; b++)
        for (let d = 0; d < 60; d += 30) {
          const a = d === 0 ? "00" : "30";
          g.push({
            label: `${b}:${a}`,
            value: `${b.toString().padStart(2, "0")}:${a}`
          });
        }
      return g;
    }), c = Ae(!1), s = Ae(!1), l = Ae(null), f = Ae(null), p = () => {
      c.value = !0, s.value = !0;
    }, m = () => {
      c.value = !1;
    };
    return rr(f, () => {
      c.value || (s.value = !1, c.value = !1);
    }), (g, b) => (X(), J("div", rd, [
      ft(Mo, {
        "read-only": g.readOnly,
        disabled: g.disabled,
        modelValue: i.value,
        "onUpdate:modelValue": b[0] || (b[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: l,
        class: ze(g.readOnly ? "w-16 text-left" : "max-w-20 text-center"),
        onFocus: p,
        onBlur: m,
        onChange: o
      }, null, 8, ["read-only", "disabled", "modelValue", "class"]),
      g.readOnly || g.disabled ? Me("", !0) : ln((X(), sn(Wr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": b[1] || (b[1] = (d) => i.value = d),
        ref_key: "timeRef",
        ref: f,
        items: u.value,
        "max-height": 183,
        onChange: b[2] || (b[2] = (d) => s.value = !1)
      }, null, 8, ["modelValue", "items"])), [
        [Io, s.value]
      ])
    ]));
  }
});
var $r = { exports: {} }, id = $r.exports, Ca;
function od() {
  return Ca || (Ca = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(id, function() {
      var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
      return function(o, u, c) {
        var s = u.prototype;
        c.utc = function(d) {
          var a = { date: d, utc: !0, args: arguments };
          return new u(a);
        }, s.utc = function(d) {
          var a = c(this.toDate(), { locale: this.$L, utc: !0 });
          return d ? a.add(this.utcOffset(), r) : a;
        }, s.local = function() {
          return c(this.toDate(), { locale: this.$L, utc: !1 });
        };
        var l = s.parse;
        s.parse = function(d) {
          d.utc && (this.$u = !0), this.$utils().u(d.$offset) || (this.$offset = d.$offset), l.call(this, d);
        };
        var f = s.init;
        s.init = function() {
          if (this.$u) {
            var d = this.$d;
            this.$y = d.getUTCFullYear(), this.$M = d.getUTCMonth(), this.$D = d.getUTCDate(), this.$W = d.getUTCDay(), this.$H = d.getUTCHours(), this.$m = d.getUTCMinutes(), this.$s = d.getUTCSeconds(), this.$ms = d.getUTCMilliseconds();
          } else f.call(this);
        };
        var p = s.utcOffset;
        s.utcOffset = function(d, a) {
          var w = this.$utils().u;
          if (w(d)) return this.$u ? 0 : w(this.$offset) ? p.call(this) : this.$offset;
          if (typeof d == "string" && (d = function(P) {
            P === void 0 && (P = "");
            var R = P.match(n);
            if (!R) return null;
            var A = ("" + R[0]).match(i) || ["-", 0, 0], I = A[0], q = 60 * +A[1] + +A[2];
            return q === 0 ? 0 : I === "+" ? q : -q;
          }(d), d === null)) return this;
          var v = Math.abs(d) <= 16 ? 60 * d : d, _ = this;
          if (a) return _.$offset = v, _.$u = d === 0, _;
          if (d !== 0) {
            var E = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (_ = this.local().add(v + E, r)).$offset = v, _.$x.$localOffset = E;
          } else _ = this.utc();
          return _;
        };
        var m = s.format;
        s.format = function(d) {
          var a = d || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return m.call(this, a);
        }, s.valueOf = function() {
          var d = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * d;
        }, s.isUTC = function() {
          return !!this.$u;
        }, s.toISOString = function() {
          return this.toDate().toISOString();
        }, s.toString = function() {
          return this.toDate().toUTCString();
        };
        var g = s.toDate;
        s.toDate = function(d) {
          return d === "s" && this.$offset ? c(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : g.call(this);
        };
        var b = s.diff;
        s.diff = function(d, a, w) {
          if (d && this.$u === d.$u) return b.call(this, d, a, w);
          var v = this.local(), _ = c(d).local();
          return b.call(v, _, a, w);
        };
      };
    });
  }($r)), $r.exports;
}
var ad = od();
const sd = /* @__PURE__ */ Nn(ad);
var Nr = { exports: {} }, ld = Nr.exports, ka;
function ud() {
  return ka || (ka = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(ld, function() {
      var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
      return function(i, o, u) {
        var c, s = function(m, g, b) {
          b === void 0 && (b = {});
          var d = new Date(m), a = function(w, v) {
            v === void 0 && (v = {});
            var _ = v.timeZoneName || "short", E = w + "|" + _, P = n[E];
            return P || (P = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: w, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: _ }), n[E] = P), P;
          }(g, b);
          return a.formatToParts(d);
        }, l = function(m, g) {
          for (var b = s(m, g), d = [], a = 0; a < b.length; a += 1) {
            var w = b[a], v = w.type, _ = w.value, E = r[v];
            E >= 0 && (d[E] = parseInt(_, 10));
          }
          var P = d[3], R = P === 24 ? 0 : P, A = d[0] + "-" + d[1] + "-" + d[2] + " " + R + ":" + d[4] + ":" + d[5] + ":000", I = +m;
          return (u.utc(A).valueOf() - (I -= I % 1e3)) / 6e4;
        }, f = o.prototype;
        f.tz = function(m, g) {
          m === void 0 && (m = c);
          var b, d = this.utcOffset(), a = this.toDate(), w = a.toLocaleString("en-US", { timeZone: m }), v = Math.round((a - new Date(w)) / 1e3 / 60), _ = 15 * -Math.round(a.getTimezoneOffset() / 15) - v;
          if (!Number(_)) b = this.utcOffset(0, g);
          else if (b = u(w, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(_, !0), g) {
            var E = b.utcOffset();
            b = b.add(d - E, "minute");
          }
          return b.$x.$timezone = m, b;
        }, f.offsetName = function(m) {
          var g = this.$x.$timezone || u.tz.guess(), b = s(this.valueOf(), g, { timeZoneName: m }).find(function(d) {
            return d.type.toLowerCase() === "timezonename";
          });
          return b && b.value;
        };
        var p = f.startOf;
        f.startOf = function(m, g) {
          if (!this.$x || !this.$x.$timezone) return p.call(this, m, g);
          var b = u(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return p.call(b, m, g).tz(this.$x.$timezone, !0);
        }, u.tz = function(m, g, b) {
          var d = b && g, a = b || g || c, w = l(+u(), a);
          if (typeof m != "string") return u(m).tz(a);
          var v = function(R, A, I) {
            var q = R - 60 * A * 1e3, M = l(q, I);
            if (A === M) return [q, A];
            var F = l(q -= 60 * (M - A) * 1e3, I);
            return M === F ? [q, M] : [R - 60 * Math.min(M, F) * 1e3, Math.max(M, F)];
          }(u.utc(m, d).valueOf(), w, a), _ = v[0], E = v[1], P = u(_).utcOffset(E);
          return P.$x.$timezone = a, P;
        }, u.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, u.tz.setDefault = function(m) {
          c = m;
        };
      };
    });
  }(Nr)), Nr.exports;
}
var cd = ud();
const fd = /* @__PURE__ */ Nn(cd);
var jr = { exports: {} }, dd = jr.exports, Ta;
function pd() {
  return Ta || (Ta = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(dd, function() {
      return function(r, n, i) {
        var o = n.prototype, u = function(m) {
          var g, b = m.date, d = m.utc, a = {};
          if (!((g = b) === null || g instanceof Date || g instanceof Array || o.$utils().u(g) || g.constructor.name !== "Object")) {
            if (!Object.keys(b).length) return /* @__PURE__ */ new Date();
            var w = d ? i.utc() : i();
            Object.keys(b).forEach(function(q) {
              var M, F;
              a[M = q, F = o.$utils().p(M), F === "date" ? "day" : F] = b[q];
            });
            var v = a.day || (a.year || a.month >= 0 ? 1 : w.date()), _ = a.year || w.year(), E = a.month >= 0 ? a.month : a.year || a.day ? 0 : w.month(), P = a.hour || 0, R = a.minute || 0, A = a.second || 0, I = a.millisecond || 0;
            return d ? new Date(Date.UTC(_, E, v, P, R, A, I)) : new Date(_, E, v, P, R, A, I);
          }
          return b;
        }, c = o.parse;
        o.parse = function(m) {
          m.date = u.bind(this)(m), c.bind(this)(m);
        };
        var s = o.set, l = o.add, f = o.subtract, p = function(m, g, b, d) {
          d === void 0 && (d = 1);
          var a = Object.keys(g), w = this;
          return a.forEach(function(v) {
            w = m.bind(w)(g[v] * d, v);
          }), w;
        };
        o.set = function(m, g) {
          return g = g === void 0 ? m : g, m.constructor.name === "Object" ? p.bind(this)(function(b, d) {
            return s.bind(this)(d, b);
          }, g, m) : s.bind(this)(m, g);
        }, o.add = function(m, g) {
          return m.constructor.name === "Object" ? p.bind(this)(l, m, g) : l.bind(this)(m, g);
        }, o.subtract = function(m, g) {
          return m.constructor.name === "Object" ? p.bind(this)(l, m, g, -1) : f.bind(this)(m, g);
        };
      };
    });
  }(jr)), jr.exports;
}
var hd = pd();
const md = /* @__PURE__ */ Nn(hd), yd = { class: "kvc-datetime-picker" }, vd = /* @__PURE__ */ Ye({
  __name: "datetime-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    Ee.extend(sd), Ee.extend(fd), Ee.extend(md), Ee.tz.setDefault("Asia/Tokyo");
    const r = e, n = t, i = Te(() => r.modelValue && Ee(r.modelValue).isValid()), o = Te(() => i.value ? Ee(r.modelValue) : void 0), u = (s) => {
      if (s && Ee(s).isValid()) {
        const [l, f, p] = s.split("-").map(Number), m = o.value ? Ee(o.value).year(l).month(f - 1).date(p) : Ee({ year: l, month: f - 1, date: p });
        n("update:modelValue", m.toISOString());
      } else
        n("update:modelValue", void 0);
    }, c = (s) => {
      if (s) {
        const [l, f] = s.split(":").map(Number);
        if (!isNaN(l) && !isNaN(f)) {
          const p = o.value ? Ee(o.value).hour(l).minute(f) : Ee({ hour: l, minute: f });
          n("update:modelValue", p.toISOString());
        } else
          n("update:modelValue", void 0);
      } else
        n("update:modelValue", void 0);
    };
    return (s, l) => (X(), J("div", yd, [
      s.readOnly ? (X(), J("p", {
        key: 0,
        class: ze(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }])
      }, Qe(s.modelValue && He(Ee)(s.modelValue).isValid() ? He(Ee)(s.modelValue).format("YYYY-MM-DD HH:mm") : " "), 3)) : (X(), J(dt, { key: 1 }, [
        ft(_l, {
          "model-value": o.value ? o.value.format("YYYY-MM-DD") : void 0,
          disabled: s.disabled,
          onChange: u
        }, null, 8, ["model-value", "disabled"]),
        ft(Sl, {
          "model-value": o.value ? o.value.format("HH:mm") : void 0,
          disabled: s.disabled,
          onChange: c
        }, null, 8, ["model-value", "disabled"])
      ], 64))
    ]));
  }
}), gd = ["innerHTML"], bd = /* @__PURE__ */ Ye({
  __name: "textarea",
  props: {
    modelValue: {},
    nonstyled: { type: Boolean },
    readOnly: { type: Boolean },
    width: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Te({
      get: () => r.modelValue ?? "",
      set: (o) => n("update:modelValue", o)
    });
    return (o, u) => o.readOnly ? (X(), J("p", {
      key: 0,
      class: ze(["kvc-field-value", { "kvc-field-value-nonstyled": o.nonstyled }]),
      innerHTML: (i.value || " ").replace(/\n/g, "<br>")
    }, null, 10, gd)) : ln((X(), J("textarea", {
      key: 1,
      class: "kvc-field-text",
      "onUpdate:modelValue": u[0] || (u[0] = (c) => i.value = c)
    }, null, 512)), [
      [Tu, i.value]
    ]);
  }
});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Da(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Da(Object(r), !0).forEach(function(n) {
      wd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Da(Object(r)).forEach(function(n) {
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
function wd(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ft() {
  return Ft = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
function _d(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Sd(e, t) {
  if (e == null) return {};
  var r = _d(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var xd = "1.15.6";
function qt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Bt = qt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), or = qt(/Edge/i), Ia = qt(/firefox/i), Jn = qt(/safari/i) && !qt(/chrome/i) && !qt(/android/i), qo = qt(/iP(ad|od|hone)/i), xl = qt(/chrome/i) && qt(/android/i), El = {
  capture: !1,
  passive: !1
};
function _e(e, t, r) {
  e.addEventListener(t, r, !Bt && El);
}
function be(e, t, r) {
  e.removeEventListener(t, r, !Bt && El);
}
function Hr(e, t) {
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
function Ol(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function gt(e, t, r, n) {
  if (e) {
    r = r || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === r && Hr(e, t) : Hr(e, t)) || n && e === r)
        return e;
      if (e === r) break;
    } while (e = Ol(e));
  }
  return null;
}
var $a = /\s+/g;
function ut(e, t, r) {
  if (e && t)
    if (e.classList)
      e.classList[r ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ").replace($a, " ").replace(" " + t + " ", " ");
      e.className = (n + (r ? " " + t : "")).replace($a, " ");
    }
}
function se(e, t, r) {
  var n = e && e.style;
  if (n) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (r = e.currentStyle), t === void 0 ? r : r[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = r + (typeof r == "string" ? "" : "px");
  }
}
function Dn(e, t) {
  var r = "";
  if (typeof e == "string")
    r = e;
  else
    do {
      var n = se(e, "transform");
      n && n !== "none" && (r = n + " " + r);
    } while (!t && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(r);
}
function Rl(e, t, r) {
  if (e) {
    var n = e.getElementsByTagName(t), i = 0, o = n.length;
    if (r)
      for (; i < o; i++)
        r(n[i], i);
    return n;
  }
  return [];
}
function Pt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Ue(e, t, r, n, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, u, c, s, l, f, p;
    if (e !== window && e.parentNode && e !== Pt() ? (o = e.getBoundingClientRect(), u = o.top, c = o.left, s = o.bottom, l = o.right, f = o.height, p = o.width) : (u = 0, c = 0, s = window.innerHeight, l = window.innerWidth, f = window.innerHeight, p = window.innerWidth), (t || r) && e !== window && (i = i || e.parentNode, !Bt))
      do
        if (i && i.getBoundingClientRect && (se(i, "transform") !== "none" || r && se(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          u -= m.top + parseInt(se(i, "border-top-width")), c -= m.left + parseInt(se(i, "border-left-width")), s = u + o.height, l = c + o.width;
          break;
        }
      while (i = i.parentNode);
    if (n && e !== window) {
      var g = Dn(i || e), b = g && g.a, d = g && g.d;
      g && (u /= d, c /= b, p /= b, f /= d, s = u + f, l = c + p);
    }
    return {
      top: u,
      left: c,
      bottom: s,
      right: l,
      width: p,
      height: f
    };
  }
}
function Na(e, t, r) {
  for (var n = Xt(e, !0), i = Ue(e)[t]; n; ) {
    var o = Ue(n)[r], u = void 0;
    if (u = i >= o, !u) return n;
    if (n === Pt()) break;
    n = Xt(n, !1);
  }
  return !1;
}
function $n(e, t, r, n) {
  for (var i = 0, o = 0, u = e.children; o < u.length; ) {
    if (u[o].style.display !== "none" && u[o] !== le.ghost && (n || u[o] !== le.dragged) && gt(u[o], r.draggable, e, !1)) {
      if (i === t)
        return u[o];
      i++;
    }
    o++;
  }
  return null;
}
function Fo(e, t) {
  for (var r = e.lastElementChild; r && (r === le.ghost || se(r, "display") === "none" || t && !Hr(r, t)); )
    r = r.previousElementSibling;
  return r || null;
}
function pt(e, t) {
  var r = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== le.clone && (!t || Hr(e, t)) && r++;
  return r;
}
function ja(e) {
  var t = 0, r = 0, n = Pt();
  if (e)
    do {
      var i = Dn(e), o = i.a, u = i.d;
      t += e.scrollLeft * o, r += e.scrollTop * u;
    } while (e !== n && (e = e.parentNode));
  return [t, r];
}
function Ed(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === e[r][n]) return Number(r);
    }
  return -1;
}
function Xt(e, t) {
  if (!e || !e.getBoundingClientRect) return Pt();
  var r = e, n = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var i = se(r);
      if (r.clientWidth < r.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return Pt();
        if (n || t) return r;
        n = !0;
      }
    }
  while (r = r.parentNode);
  return Pt();
}
function Od(e, t) {
  if (e && t)
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
function yi(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Qn;
function Al(e, t) {
  return function() {
    if (!Qn) {
      var r = arguments, n = this;
      r.length === 1 ? e.call(n, r[0]) : e.apply(n, r), Qn = setTimeout(function() {
        Qn = void 0;
      }, t);
    }
  };
}
function Rd() {
  clearTimeout(Qn), Qn = void 0;
}
function Pl(e, t, r) {
  e.scrollLeft += t, e.scrollTop += r;
}
function Cl(e) {
  var t = window.Polymer, r = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : r ? r(e).clone(!0)[0] : e.cloneNode(!0);
}
function kl(e, t, r) {
  var n = {};
  return Array.from(e.children).forEach(function(i) {
    var o, u, c, s;
    if (!(!gt(i, t.draggable, e, !1) || i.animated || i === r)) {
      var l = Ue(i);
      n.left = Math.min((o = n.left) !== null && o !== void 0 ? o : 1 / 0, l.left), n.top = Math.min((u = n.top) !== null && u !== void 0 ? u : 1 / 0, l.top), n.right = Math.max((c = n.right) !== null && c !== void 0 ? c : -1 / 0, l.right), n.bottom = Math.max((s = n.bottom) !== null && s !== void 0 ? s : -1 / 0, l.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var at = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ad() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(se(i, "display") === "none" || i === le.ghost)) {
            e.push({
              target: i,
              rect: Ue(i)
            });
            var o = Ct({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var u = Dn(i, !0);
              u && (o.top -= u.f, o.left -= u.e);
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
      e.splice(Ed(e, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var o = !1, u = 0;
      e.forEach(function(c) {
        var s = 0, l = c.target, f = l.fromRect, p = Ue(l), m = l.prevFromRect, g = l.prevToRect, b = c.rect, d = Dn(l, !0);
        d && (p.top -= d.f, p.left -= d.e), l.toRect = p, l.thisAnimationDuration && yi(m, p) && !yi(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - p.top) / (b.left - p.left) === (f.top - p.top) / (f.left - p.left) && (s = Cd(b, m, g, i.options)), yi(p, f) || (l.prevFromRect = f, l.prevToRect = p, s || (s = i.options.animation), i.animate(l, b, p, s)), s && (o = !0, u = Math.max(u, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, u) : typeof n == "function" && n(), e = [];
    },
    animate: function(n, i, o, u) {
      if (u) {
        se(n, "transition", ""), se(n, "transform", "");
        var c = Dn(this.el), s = c && c.a, l = c && c.d, f = (i.left - o.left) / (s || 1), p = (i.top - o.top) / (l || 1);
        n.animatingX = !!f, n.animatingY = !!p, se(n, "transform", "translate3d(" + f + "px," + p + "px,0)"), this.forRepaintDummy = Pd(n), se(n, "transition", "transform " + u + "ms" + (this.options.easing ? " " + this.options.easing : "")), se(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          se(n, "transition", ""), se(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, u);
      }
    }
  };
}
function Pd(e) {
  return e.offsetWidth;
}
function Cd(e, t, r, n) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) * n.animation;
}
var gn = [], vi = {
  initializeByDefault: !0
}, ar = {
  mount: function(t) {
    for (var r in vi)
      vi.hasOwnProperty(r) && !(r in t) && (t[r] = vi[r]);
    gn.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), gn.push(t);
  },
  pluginEvent: function(t, r, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var o = t + "Global";
    gn.forEach(function(u) {
      r[u.pluginName] && (r[u.pluginName][o] && r[u.pluginName][o](Ct({
        sortable: r
      }, n)), r.options[u.pluginName] && r[u.pluginName][t] && r[u.pluginName][t](Ct({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(t, r, n, i) {
    gn.forEach(function(c) {
      var s = c.pluginName;
      if (!(!t.options[s] && !c.initializeByDefault)) {
        var l = new c(t, r, t.options);
        l.sortable = t, l.options = t.options, t[s] = l, Ft(n, l.defaults);
      }
    });
    for (var o in t.options)
      if (t.options.hasOwnProperty(o)) {
        var u = this.modifyOption(t, o, t.options[o]);
        typeof u < "u" && (t.options[o] = u);
      }
  },
  getEventProperties: function(t, r) {
    var n = {};
    return gn.forEach(function(i) {
      typeof i.eventProperties == "function" && Ft(n, i.eventProperties.call(r[i.pluginName], t));
    }), n;
  },
  modifyOption: function(t, r, n) {
    var i;
    return gn.forEach(function(o) {
      t[o.pluginName] && o.optionListeners && typeof o.optionListeners[r] == "function" && (i = o.optionListeners[r].call(t[o.pluginName], n));
    }), i;
  }
};
function kd(e) {
  var t = e.sortable, r = e.rootEl, n = e.name, i = e.targetEl, o = e.cloneEl, u = e.toEl, c = e.fromEl, s = e.oldIndex, l = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, m = e.originalEvent, g = e.putSortable, b = e.extraEventProperties;
  if (t = t || r && r[at], !!t) {
    var d, a = t.options, w = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !Bt && !or ? d = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(n, !0, !0)), d.to = u || r, d.from = c || r, d.item = i || r, d.clone = o, d.oldIndex = s, d.newIndex = l, d.oldDraggableIndex = f, d.newDraggableIndex = p, d.originalEvent = m, d.pullMode = g ? g.lastPutMode : void 0;
    var v = Ct(Ct({}, b), ar.getEventProperties(n, t));
    for (var _ in v)
      d[_] = v[_];
    r && r.dispatchEvent(d), a[w] && a[w].call(t, d);
  }
}
var Td = ["evt"], ot = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, o = Sd(n, Td);
  ar.pluginEvent.bind(le)(t, r, Ct({
    dragEl: H,
    parentEl: Ne,
    ghostEl: ce,
    rootEl: De,
    nextEl: an,
    lastDownEl: qr,
    cloneEl: Ie,
    cloneHidden: Yt,
    dragStarted: zn,
    putSortable: Je,
    activeSortable: le.active,
    originalEvent: i,
    oldIndex: kn,
    oldDraggableIndex: Zn,
    newIndex: ct,
    newDraggableIndex: zt,
    hideGhostForTarget: $l,
    unhideGhostForTarget: Nl,
    cloneNowHidden: function() {
      Yt = !0;
    },
    cloneNowShown: function() {
      Yt = !1;
    },
    dispatchSortableEvent: function(c) {
      nt({
        sortable: r,
        name: c,
        originalEvent: i
      });
    }
  }, o));
};
function nt(e) {
  kd(Ct({
    putSortable: Je,
    cloneEl: Ie,
    targetEl: H,
    rootEl: De,
    oldIndex: kn,
    oldDraggableIndex: Zn,
    newIndex: ct,
    newDraggableIndex: zt
  }, e));
}
var H, Ne, ce, De, an, qr, Ie, Yt, kn, ct, Zn, zt, Er, Je, Pn = !1, Gr = !1, Kr = [], tn, yt, gi, bi, Ma, qa, zn, bn, er, tr = !1, Or = !1, Fr, et, wi = [], Po = !1, zr = [], Zr = typeof document < "u", Rr = qo, Fa = or || Bt ? "cssFloat" : "float", Dd = Zr && !xl && !qo && "draggable" in document.createElement("div"), Tl = function() {
  if (Zr) {
    if (Bt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Dl = function(t, r) {
  var n = se(t), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), o = $n(t, 0, r), u = $n(t, 1, r), c = o && se(o), s = u && se(u), l = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + Ue(o).width, f = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ue(u).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && c.float && c.float !== "none") {
    var p = c.float === "left" ? "left" : "right";
    return u && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (c.display === "block" || c.display === "flex" || c.display === "table" || c.display === "grid" || l >= i && n[Fa] === "none" || u && n[Fa] === "none" && l + f > i) ? "vertical" : "horizontal";
}, Id = function(t, r, n) {
  var i = n ? t.left : t.top, o = n ? t.right : t.bottom, u = n ? t.width : t.height, c = n ? r.left : r.top, s = n ? r.right : r.bottom, l = n ? r.width : r.height;
  return i === c || o === s || i + u / 2 === c + l / 2;
}, $d = function(t, r) {
  var n;
  return Kr.some(function(i) {
    var o = i[at].options.emptyInsertThreshold;
    if (!(!o || Fo(i))) {
      var u = Ue(i), c = t >= u.left - o && t <= u.right + o, s = r >= u.top - o && r <= u.bottom + o;
      if (c && s)
        return n = i;
    }
  }), n;
}, Il = function(t) {
  function r(o, u) {
    return function(c, s, l, f) {
      var p = c.options.group.name && s.options.group.name && c.options.group.name === s.options.group.name;
      if (o == null && (u || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (u && o === "clone")
        return o;
      if (typeof o == "function")
        return r(o(c, s, l, f), u)(c, s, l, f);
      var m = (u ? c : s).options.group.name;
      return o === !0 || typeof o == "string" && o === m || o.join && o.indexOf(m) > -1;
    };
  }
  var n = {}, i = t.group;
  (!i || Mr(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = r(i.pull, !0), n.checkPut = r(i.put), n.revertClone = i.revertClone, t.group = n;
}, $l = function() {
  !Tl && ce && se(ce, "display", "none");
}, Nl = function() {
  !Tl && ce && se(ce, "display", "");
};
Zr && !xl && document.addEventListener("click", function(e) {
  if (Gr)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Gr = !1, !1;
}, !0);
var nn = function(t) {
  if (H) {
    t = t.touches ? t.touches[0] : t;
    var r = $d(t.clientX, t.clientY);
    if (r) {
      var n = {};
      for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[at]._onDragOver(n);
    }
  }
}, Nd = function(t) {
  H && H.parentNode[at]._isOutsideThisEl(t.target);
};
function le(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = Ft({}, t), e[at] = this;
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
      return Dl(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(u, c) {
      u.setData("Text", c.textContent);
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
    supportPointer: le.supportPointer !== !1 && "PointerEvent" in window && (!Jn || qo),
    emptyInsertThreshold: 5
  };
  ar.initializePlugins(this, e, r);
  for (var n in r)
    !(n in t) && (t[n] = r[n]);
  Il(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Dd, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? _e(e, "pointerdown", this._onTapStart) : (_e(e, "mousedown", this._onTapStart), _e(e, "touchstart", this._onTapStart)), this.nativeDraggable && (_e(e, "dragover", this), _e(e, "dragenter", this)), Kr.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Ft(this, Ad());
}
le.prototype = /** @lends Sortable.prototype */
{
  constructor: le,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (bn = null);
  },
  _getDirection: function(t, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, r, H) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var r = this, n = this.el, i = this.options, o = i.preventOnFilter, u = t.type, c = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (c || t).target, l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, f = i.filter;
      if (Vd(n), !H && !(/mousedown|pointerdown/.test(u) && t.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Jn && s && s.tagName.toUpperCase() === "SELECT") && (s = gt(s, i.draggable, n, !1), !(s && s.animated) && qr !== s)) {
        if (kn = pt(s), Zn = pt(s, i.draggable), typeof f == "function") {
          if (f.call(this, t, s, this)) {
            nt({
              sortable: r,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: n,
              fromEl: n
            }), ot("filter", r, {
              evt: t
            }), o && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(p) {
          if (p = gt(l, p.trim(), n, !1), p)
            return nt({
              sortable: r,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: n,
              toEl: n
            }), ot("filter", r, {
              evt: t
            }), !0;
        }), f)) {
          o && t.preventDefault();
          return;
        }
        i.handle && !gt(l, i.handle, n, !1) || this._prepareDragStart(t, c, s);
      }
    }
  },
  _prepareDragStart: function(t, r, n) {
    var i = this, o = i.el, u = i.options, c = o.ownerDocument, s;
    if (n && !H && n.parentNode === o) {
      var l = Ue(n);
      if (De = o, H = n, Ne = H.parentNode, an = H.nextSibling, qr = n, Er = u.group, le.dragged = H, tn = {
        target: H,
        clientX: (r || t).clientX,
        clientY: (r || t).clientY
      }, Ma = tn.clientX - l.left, qa = tn.clientY - l.top, this._lastX = (r || t).clientX, this._lastY = (r || t).clientY, H.style["will-change"] = "all", s = function() {
        if (ot("delayEnded", i, {
          evt: t
        }), le.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Ia && i.nativeDraggable && (H.draggable = !0), i._triggerDragStart(t, r), nt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), ut(H, u.chosenClass, !0);
      }, u.ignore.split(",").forEach(function(f) {
        Rl(H, f.trim(), _i);
      }), _e(c, "dragover", nn), _e(c, "mousemove", nn), _e(c, "touchmove", nn), u.supportPointer ? (_e(c, "pointerup", i._onDrop), !this.nativeDraggable && _e(c, "pointercancel", i._onDrop)) : (_e(c, "mouseup", i._onDrop), _e(c, "touchend", i._onDrop), _e(c, "touchcancel", i._onDrop)), Ia && this.nativeDraggable && (this.options.touchStartThreshold = 4, H.draggable = !0), ot("delayStart", this, {
        evt: t
      }), u.delay && (!u.delayOnTouchOnly || r) && (!this.nativeDraggable || !(or || Bt))) {
        if (le.eventCanceled) {
          this._onDrop();
          return;
        }
        u.supportPointer ? (_e(c, "pointerup", i._disableDelayedDrag), _e(c, "pointercancel", i._disableDelayedDrag)) : (_e(c, "mouseup", i._disableDelayedDrag), _e(c, "touchend", i._disableDelayedDrag), _e(c, "touchcancel", i._disableDelayedDrag)), _e(c, "mousemove", i._delayedDragTouchMoveHandler), _e(c, "touchmove", i._delayedDragTouchMoveHandler), u.supportPointer && _e(c, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, u.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var r = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    H && _i(H), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    be(t, "mouseup", this._disableDelayedDrag), be(t, "touchend", this._disableDelayedDrag), be(t, "touchcancel", this._disableDelayedDrag), be(t, "pointerup", this._disableDelayedDrag), be(t, "pointercancel", this._disableDelayedDrag), be(t, "mousemove", this._delayedDragTouchMoveHandler), be(t, "touchmove", this._delayedDragTouchMoveHandler), be(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, r) {
    r = r || t.pointerType == "touch" && t, !this.nativeDraggable || r ? this.options.supportPointer ? _e(document, "pointermove", this._onTouchMove) : r ? _e(document, "touchmove", this._onTouchMove) : _e(document, "mousemove", this._onTouchMove) : (_e(H, "dragend", this), _e(De, "dragstart", this._onDragStart));
    try {
      document.selection ? Br(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, r) {
    if (Pn = !1, De && H) {
      ot("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && _e(document, "dragover", Nd);
      var n = this.options;
      !t && ut(H, n.dragClass, !1), ut(H, n.ghostClass, !0), le.active = this, t && this._appendGhost(), nt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (yt) {
      this._lastX = yt.clientX, this._lastY = yt.clientY, $l();
      for (var t = document.elementFromPoint(yt.clientX, yt.clientY), r = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(yt.clientX, yt.clientY), t !== r); )
        r = t;
      if (H.parentNode[at]._isOutsideThisEl(t), r)
        do {
          if (r[at]) {
            var n = void 0;
            if (n = r[at]._onDragOver({
              clientX: yt.clientX,
              clientY: yt.clientY,
              target: t,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = r;
        } while (r = Ol(r));
      Nl();
    }
  },
  _onTouchMove: function(t) {
    if (tn) {
      var r = this.options, n = r.fallbackTolerance, i = r.fallbackOffset, o = t.touches ? t.touches[0] : t, u = ce && Dn(ce, !0), c = ce && u && u.a, s = ce && u && u.d, l = Rr && et && ja(et), f = (o.clientX - tn.clientX + i.x) / (c || 1) + (l ? l[0] - wi[0] : 0) / (c || 1), p = (o.clientY - tn.clientY + i.y) / (s || 1) + (l ? l[1] - wi[1] : 0) / (s || 1);
      if (!le.active && !Pn) {
        if (n && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (ce) {
        u ? (u.e += f - (gi || 0), u.f += p - (bi || 0)) : u = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: p
        };
        var m = "matrix(".concat(u.a, ",").concat(u.b, ",").concat(u.c, ",").concat(u.d, ",").concat(u.e, ",").concat(u.f, ")");
        se(ce, "webkitTransform", m), se(ce, "mozTransform", m), se(ce, "msTransform", m), se(ce, "transform", m), gi = f, bi = p, yt = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ce) {
      var t = this.options.fallbackOnBody ? document.body : De, r = Ue(H, !0, Rr, !0, t), n = this.options;
      if (Rr) {
        for (et = t; se(et, "position") === "static" && se(et, "transform") === "none" && et !== document; )
          et = et.parentNode;
        et !== document.body && et !== document.documentElement ? (et === document && (et = Pt()), r.top += et.scrollTop, r.left += et.scrollLeft) : et = Pt(), wi = ja(et);
      }
      ce = H.cloneNode(!0), ut(ce, n.ghostClass, !1), ut(ce, n.fallbackClass, !0), ut(ce, n.dragClass, !0), se(ce, "transition", ""), se(ce, "transform", ""), se(ce, "box-sizing", "border-box"), se(ce, "margin", 0), se(ce, "top", r.top), se(ce, "left", r.left), se(ce, "width", r.width), se(ce, "height", r.height), se(ce, "opacity", "0.8"), se(ce, "position", Rr ? "absolute" : "fixed"), se(ce, "zIndex", "100000"), se(ce, "pointerEvents", "none"), le.ghost = ce, t.appendChild(ce), se(ce, "transform-origin", Ma / parseInt(ce.style.width) * 100 + "% " + qa / parseInt(ce.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, r) {
    var n = this, i = t.dataTransfer, o = n.options;
    if (ot("dragStart", this, {
      evt: t
    }), le.eventCanceled) {
      this._onDrop();
      return;
    }
    ot("setupClone", this), le.eventCanceled || (Ie = Cl(H), Ie.removeAttribute("id"), Ie.draggable = !1, Ie.style["will-change"] = "", this._hideClone(), ut(Ie, this.options.chosenClass, !1), le.clone = Ie), n.cloneId = Br(function() {
      ot("clone", n), !le.eventCanceled && (n.options.removeCloneOnHide || De.insertBefore(Ie, H), n._hideClone(), nt({
        sortable: n,
        name: "clone"
      }));
    }), !r && ut(H, o.dragClass, !0), r ? (Gr = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (be(document, "mouseup", n._onDrop), be(document, "touchend", n._onDrop), be(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(n, i, H)), _e(document, "drop", n), se(H, "transform", "translateZ(0)")), Pn = !0, n._dragStartId = Br(n._dragStarted.bind(n, r, t)), _e(document, "selectstart", n), zn = !0, window.getSelection().removeAllRanges(), Jn && se(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var r = this.el, n = t.target, i, o, u, c = this.options, s = c.group, l = le.active, f = Er === s, p = c.sort, m = Je || l, g, b = this, d = !1;
    if (Po) return;
    function a(j, Q) {
      ot(j, b, Ct({
        evt: t,
        isOwner: f,
        axis: g ? "vertical" : "horizontal",
        revert: u,
        dragRect: i,
        targetRect: o,
        canSort: p,
        fromSortable: m,
        target: n,
        completed: v,
        onMove: function(fe, me) {
          return Ar(De, r, H, i, fe, Ue(fe), t, me);
        },
        changed: _
      }, Q));
    }
    function w() {
      a("dragOverAnimationCapture"), b.captureAnimationState(), b !== m && m.captureAnimationState();
    }
    function v(j) {
      return a("dragOverCompleted", {
        insertion: j
      }), j && (f ? l._hideClone() : l._showClone(b), b !== m && (ut(H, Je ? Je.options.ghostClass : l.options.ghostClass, !1), ut(H, c.ghostClass, !0)), Je !== b && b !== le.active ? Je = b : b === le.active && Je && (Je = null), m === b && (b._ignoreWhileAnimating = n), b.animateAll(function() {
        a("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === H && !H.animated || n === r && !n.animated) && (bn = null), !c.dragoverBubble && !t.rootEl && n !== document && (H.parentNode[at]._isOutsideThisEl(t.target), !j && nn(t)), !c.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function _() {
      ct = pt(H), zt = pt(H, c.draggable), nt({
        sortable: b,
        name: "change",
        toEl: r,
        newIndex: ct,
        newDraggableIndex: zt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = gt(n, c.draggable, r, !0), a("dragOver"), le.eventCanceled) return d;
    if (H.contains(t.target) || n.animated && n.animatingX && n.animatingY || b._ignoreWhileAnimating === n)
      return v(!1);
    if (Gr = !1, l && !c.disabled && (f ? p || (u = Ne !== De) : Je === this || (this.lastPutMode = Er.checkPull(this, l, H, t)) && s.checkPut(this, l, H, t))) {
      if (g = this._getDirection(t, n) === "vertical", i = Ue(H), a("dragOverValid"), le.eventCanceled) return d;
      if (u)
        return Ne = De, w(), this._hideClone(), a("revert"), le.eventCanceled || (an ? De.insertBefore(H, an) : De.appendChild(H)), v(!0);
      var E = Fo(r, c.draggable);
      if (!E || Fd(t, g, this) && !E.animated) {
        if (E === H)
          return v(!1);
        if (E && r === t.target && (n = E), n && (o = Ue(n)), Ar(De, r, H, i, n, o, t, !!n) !== !1)
          return w(), E && E.nextSibling ? r.insertBefore(H, E.nextSibling) : r.appendChild(H), Ne = r, _(), v(!0);
      } else if (E && qd(t, g, this)) {
        var P = $n(r, 0, c, !0);
        if (P === H)
          return v(!1);
        if (n = P, o = Ue(n), Ar(De, r, H, i, n, o, t, !1) !== !1)
          return w(), r.insertBefore(H, P), Ne = r, _(), v(!0);
      } else if (n.parentNode === r) {
        o = Ue(n);
        var R = 0, A, I = H.parentNode !== r, q = !Id(H.animated && H.toRect || i, n.animated && n.toRect || o, g), M = g ? "top" : "left", F = Na(n, "top", "top") || Na(H, "top", "top"), W = F ? F.scrollTop : void 0;
        bn !== n && (A = o[M], tr = !1, Or = !q && c.invertSwap || I), R = Bd(t, n, o, g, q ? 1 : c.swapThreshold, c.invertedSwapThreshold == null ? c.swapThreshold : c.invertedSwapThreshold, Or, bn === n);
        var ae;
        if (R !== 0) {
          var V = pt(H);
          do
            V -= R, ae = Ne.children[V];
          while (ae && (se(ae, "display") === "none" || ae === ce));
        }
        if (R === 0 || ae === n)
          return v(!1);
        bn = n, er = R;
        var B = n.nextElementSibling, U = !1;
        U = R === 1;
        var z = Ar(De, r, H, i, n, o, t, U);
        if (z !== !1)
          return (z === 1 || z === -1) && (U = z === 1), Po = !0, setTimeout(Md, 30), w(), U && !B ? r.appendChild(H) : n.parentNode.insertBefore(H, U ? B : n), F && Pl(F, 0, W - F.scrollTop), Ne = H.parentNode, A !== void 0 && !Or && (Fr = Math.abs(A - Ue(n)[M])), _(), v(!0);
      }
      if (r.contains(H))
        return v(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    be(document, "mousemove", this._onTouchMove), be(document, "touchmove", this._onTouchMove), be(document, "pointermove", this._onTouchMove), be(document, "dragover", nn), be(document, "mousemove", nn), be(document, "touchmove", nn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    be(t, "mouseup", this._onDrop), be(t, "touchend", this._onDrop), be(t, "pointerup", this._onDrop), be(t, "pointercancel", this._onDrop), be(t, "touchcancel", this._onDrop), be(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var r = this.el, n = this.options;
    if (ct = pt(H), zt = pt(H, n.draggable), ot("drop", this, {
      evt: t
    }), Ne = H && H.parentNode, ct = pt(H), zt = pt(H, n.draggable), le.eventCanceled) {
      this._nulling();
      return;
    }
    Pn = !1, Or = !1, tr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Co(this.cloneId), Co(this._dragStartId), this.nativeDraggable && (be(document, "drop", this), be(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Jn && se(document.body, "user-select", ""), se(H, "transform", ""), t && (zn && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), ce && ce.parentNode && ce.parentNode.removeChild(ce), (De === Ne || Je && Je.lastPutMode !== "clone") && Ie && Ie.parentNode && Ie.parentNode.removeChild(Ie), H && (this.nativeDraggable && be(H, "dragend", this), _i(H), H.style["will-change"] = "", zn && !Pn && ut(H, Je ? Je.options.ghostClass : this.options.ghostClass, !1), ut(H, this.options.chosenClass, !1), nt({
      sortable: this,
      name: "unchoose",
      toEl: Ne,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), De !== Ne ? (ct >= 0 && (nt({
      rootEl: Ne,
      name: "add",
      toEl: Ne,
      fromEl: De,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "remove",
      toEl: Ne,
      originalEvent: t
    }), nt({
      rootEl: Ne,
      name: "sort",
      toEl: Ne,
      fromEl: De,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "sort",
      toEl: Ne,
      originalEvent: t
    })), Je && Je.save()) : ct !== kn && ct >= 0 && (nt({
      sortable: this,
      name: "update",
      toEl: Ne,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "sort",
      toEl: Ne,
      originalEvent: t
    })), le.active && ((ct == null || ct === -1) && (ct = kn, zt = Zn), nt({
      sortable: this,
      name: "end",
      toEl: Ne,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ot("nulling", this), De = H = Ne = ce = an = Ie = qr = Yt = tn = yt = zn = ct = zt = kn = Zn = bn = er = Je = Er = le.dragged = le.ghost = le.clone = le.active = null, zr.forEach(function(t) {
      t.checked = !0;
    }), zr.length = gi = bi = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        H && (this._onDragOver(t), jd(t));
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
    for (var t = [], r, n = this.el.children, i = 0, o = n.length, u = this.options; i < o; i++)
      r = n[i], gt(r, u.draggable, this.el, !1) && t.push(r.getAttribute(u.dataIdAttr) || Ud(r));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, r) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(o, u) {
      var c = i.children[u];
      gt(c, this.options.draggable, i, !1) && (n[o] = c);
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
    return gt(t, r || this.options.draggable, this.el, !1);
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
    var i = ar.modifyOption(this, t, r);
    typeof i < "u" ? n[t] = i : n[t] = r, t === "group" && Il(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    ot("destroy", this);
    var t = this.el;
    t[at] = null, be(t, "mousedown", this._onTapStart), be(t, "touchstart", this._onTapStart), be(t, "pointerdown", this._onTapStart), this.nativeDraggable && (be(t, "dragover", this), be(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Kr.splice(Kr.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Yt) {
      if (ot("hideClone", this), le.eventCanceled) return;
      se(Ie, "display", "none"), this.options.removeCloneOnHide && Ie.parentNode && Ie.parentNode.removeChild(Ie), Yt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Yt) {
      if (ot("showClone", this), le.eventCanceled) return;
      H.parentNode == De && !this.options.group.revertClone ? De.insertBefore(Ie, H) : an ? De.insertBefore(Ie, an) : De.appendChild(Ie), this.options.group.revertClone && this.animate(H, Ie), se(Ie, "display", ""), Yt = !1;
    }
  }
};
function jd(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ar(e, t, r, n, i, o, u, c) {
  var s, l = e[at], f = l.options.onMove, p;
  return window.CustomEvent && !Bt && !or ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = r, s.draggedRect = n, s.related = i || t, s.relatedRect = o || Ue(t), s.willInsertAfter = c, s.originalEvent = u, e.dispatchEvent(s), f && (p = f.call(l, s, u)), p;
}
function _i(e) {
  e.draggable = !1;
}
function Md() {
  Po = !1;
}
function qd(e, t, r) {
  var n = Ue($n(r.el, 0, r.options, !0)), i = kl(r.el, r.options, ce), o = 10;
  return t ? e.clientX < i.left - o || e.clientY < n.top && e.clientX < n.right : e.clientY < i.top - o || e.clientY < n.bottom && e.clientX < n.left;
}
function Fd(e, t, r) {
  var n = Ue(Fo(r.el, r.options.draggable)), i = kl(r.el, r.options, ce), o = 10;
  return t ? e.clientX > i.right + o || e.clientY > n.bottom && e.clientX > n.left : e.clientY > i.bottom + o || e.clientX > n.right && e.clientY > n.top;
}
function Bd(e, t, r, n, i, o, u, c) {
  var s = n ? e.clientY : e.clientX, l = n ? r.height : r.width, f = n ? r.top : r.left, p = n ? r.bottom : r.right, m = !1;
  if (!u) {
    if (c && Fr < l * i) {
      if (!tr && (er === 1 ? s > f + l * o / 2 : s < p - l * o / 2) && (tr = !0), tr)
        m = !0;
      else if (er === 1 ? s < f + Fr : s > p - Fr)
        return -er;
    } else if (s > f + l * (1 - i) / 2 && s < p - l * (1 - i) / 2)
      return Ld(t);
  }
  return m = m || u, m && (s < f + l * o / 2 || s > p - l * o / 2) ? s > f + l / 2 ? 1 : -1 : 0;
}
function Ld(e) {
  return pt(H) < pt(e) ? 1 : -1;
}
function Ud(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, r = t.length, n = 0; r--; )
    n += t.charCodeAt(r);
  return n.toString(36);
}
function Vd(e) {
  zr.length = 0;
  for (var t = e.getElementsByTagName("input"), r = t.length; r--; ) {
    var n = t[r];
    n.checked && zr.push(n);
  }
}
function Br(e) {
  return setTimeout(e, 0);
}
function Co(e) {
  return clearTimeout(e);
}
Zr && _e(document, "touchmove", function(e) {
  (le.active || Pn) && e.cancelable && e.preventDefault();
});
le.utils = {
  on: _e,
  off: be,
  css: se,
  find: Rl,
  is: function(t, r) {
    return !!gt(t, r, t, !1);
  },
  extend: Od,
  throttle: Al,
  closest: gt,
  toggleClass: ut,
  clone: Cl,
  index: pt,
  nextTick: Br,
  cancelNextTick: Co,
  detectDirection: Dl,
  getChild: $n,
  expando: at
};
le.get = function(e) {
  return e[at];
};
le.mount = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (le.utils = Ct(Ct({}, le.utils), n.utils)), ar.mount(n);
  });
};
le.create = function(e, t) {
  return new le(e, t);
};
le.version = xd;
var Le = [], Yn, ko, To = !1, Si, xi, Yr, Xn;
function Wd() {
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
      this.sortable.nativeDraggable ? _e(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? _e(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? _e(document, "touchmove", this._handleFallbackAutoScroll) : _e(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var n = r.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? be(document, "dragover", this._handleAutoScroll) : (be(document, "pointermove", this._handleFallbackAutoScroll), be(document, "touchmove", this._handleFallbackAutoScroll), be(document, "mousemove", this._handleFallbackAutoScroll)), Ba(), Lr(), Rd();
    },
    nulling: function() {
      Yr = ko = Yn = To = Xn = Si = xi = null, Le.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var i = this, o = (r.touches ? r.touches[0] : r).clientX, u = (r.touches ? r.touches[0] : r).clientY, c = document.elementFromPoint(o, u);
      if (Yr = r, n || this.options.forceAutoScrollFallback || or || Bt || Jn) {
        Ei(r, this.options, c, n);
        var s = Xt(c, !0);
        To && (!Xn || o !== Si || u !== xi) && (Xn && Ba(), Xn = setInterval(function() {
          var l = Xt(document.elementFromPoint(o, u), !0);
          l !== s && (s = l, Lr()), Ei(r, i.options, l, n);
        }, 10), Si = o, xi = u);
      } else {
        if (!this.options.bubbleScroll || Xt(c, !0) === Pt()) {
          Lr();
          return;
        }
        Ei(r, this.options, Xt(c, !1), !1);
      }
    }
  }, Ft(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Lr() {
  Le.forEach(function(e) {
    clearInterval(e.pid);
  }), Le = [];
}
function Ba() {
  clearInterval(Xn);
}
var Ei = Al(function(e, t, r, n) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, u = t.scrollSensitivity, c = t.scrollSpeed, s = Pt(), l = !1, f;
    ko !== r && (ko = r, Lr(), Yn = t.scroll, f = t.scrollFn, Yn === !0 && (Yn = Xt(r, !0)));
    var p = 0, m = Yn;
    do {
      var g = m, b = Ue(g), d = b.top, a = b.bottom, w = b.left, v = b.right, _ = b.width, E = b.height, P = void 0, R = void 0, A = g.scrollWidth, I = g.scrollHeight, q = se(g), M = g.scrollLeft, F = g.scrollTop;
      g === s ? (P = _ < A && (q.overflowX === "auto" || q.overflowX === "scroll" || q.overflowX === "visible"), R = E < I && (q.overflowY === "auto" || q.overflowY === "scroll" || q.overflowY === "visible")) : (P = _ < A && (q.overflowX === "auto" || q.overflowX === "scroll"), R = E < I && (q.overflowY === "auto" || q.overflowY === "scroll"));
      var W = P && (Math.abs(v - i) <= u && M + _ < A) - (Math.abs(w - i) <= u && !!M), ae = R && (Math.abs(a - o) <= u && F + E < I) - (Math.abs(d - o) <= u && !!F);
      if (!Le[p])
        for (var V = 0; V <= p; V++)
          Le[V] || (Le[V] = {});
      (Le[p].vx != W || Le[p].vy != ae || Le[p].el !== g) && (Le[p].el = g, Le[p].vx = W, Le[p].vy = ae, clearInterval(Le[p].pid), (W != 0 || ae != 0) && (l = !0, Le[p].pid = setInterval((function() {
        n && this.layer === 0 && le.active._onTouchMove(Yr);
        var B = Le[this.layer].vy ? Le[this.layer].vy * c : 0, U = Le[this.layer].vx ? Le[this.layer].vx * c : 0;
        typeof f == "function" && f.call(le.dragged.parentNode[at], U, B, e, Yr, Le[this.layer].el) !== "continue" || Pl(Le[this.layer].el, U, B);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && m !== s && (m = Xt(m, !1)));
    To = l;
  }
}, 30), jl = function(t) {
  var r = t.originalEvent, n = t.putSortable, i = t.dragEl, o = t.activeSortable, u = t.dispatchSortableEvent, c = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (r) {
    var l = n || o;
    c();
    var f = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, p = document.elementFromPoint(f.clientX, f.clientY);
    s(), l && !l.el.contains(p) && (u("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function Bo() {
}
Bo.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var r = t.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = $n(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(r, i) : this.sortable.el.appendChild(r), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: jl
};
Ft(Bo, {
  pluginName: "revertOnSpill"
});
function Lo() {
}
Lo.prototype = {
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable, i = n || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: jl
};
Ft(Lo, {
  pluginName: "removeOnSpill"
});
le.mount(new Wd());
le.mount(Lo, Bo);
function Hd(e, t, r = {}) {
  let n;
  const { document: i = rf, ...o } = r, u = {
    onUpdate: (f) => {
      zd(t, f.oldIndex, f.newIndex, f);
    }
  }, c = () => {
    const f = typeof e == "string" ? i == null ? void 0 : i.querySelector(e) : Cn(e);
    !f || n !== void 0 || (n = new le(f, { ...u, ...o }));
  }, s = () => {
    n == null || n.destroy(), n = void 0;
  }, l = (f, p) => {
    if (p !== void 0)
      n == null || n.option(f, p);
    else
      return n == null ? void 0 : n.option(f);
  };
  return tf(c), bl(s), {
    stop: s,
    start: c,
    option: l
  };
}
function Gd(e, t, r) {
  const n = e.children[r];
  e.insertBefore(t, n);
}
function Kd(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function zd(e, t, r, n = null) {
  n != null && (Kd(n.item), Gd(n.from, n.item, t));
  const i = Du(e), o = i ? [...Mt(e)] : Mt(e);
  if (r >= 0 && r < o.length) {
    const u = o.splice(t, 1)[0];
    ol(() => {
      o.splice(r, 0, u), i && (e.value = o);
    });
  }
}
var rn = {}, Oi = {}, La;
function ei() {
  return La || (La = 1, function(e) {
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
  }(Oi)), Oi;
}
var $e = {}, wn = {}, Ua;
function Uo() {
  if (Ua) return wn;
  Ua = 1;
  var e = wn.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
        o.__proto__ = u;
      } || function(o, u) {
        for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (o[c] = u[c]);
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
  Object.defineProperty(wn, "__esModule", { value: !0 }), wn.UnsupportedPlatformError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var o = this, u = "This function is not supported in ".concat(i, " environment");
        return o = r.call(this, u) || this, Error.captureStackTrace && Error.captureStackTrace(o, n), o.name = "UnsupportedPlatformError", o.platform = i, Object.setPrototypeOf(o, n.prototype), o;
      }
      return n;
    }(Error)
  );
  return wn.UnsupportedPlatformError = t, wn;
}
var Ri, Va;
function Yd() {
  if (Va) return Ri;
  Va = 1;
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
        const u = i[o];
        if (u[0] !== "*") {
          if (!r && u in this._types)
            throw new Error(
              'Attempt to change mapping for "' + u + '" extension from "' + this._types[u] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + u + '" from the list of extensions for "' + n + '".'
            );
          this._types[u] = n;
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
  }, Ri = e, Ri;
}
var Ai, Wa;
function Xd() {
  return Wa || (Wa = 1, Ai = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }), Ai;
}
var Pi, Ha;
function Jd() {
  if (Ha) return Pi;
  Ha = 1;
  let e = Yd();
  return Pi = new e(Xd()), Pi;
}
const Qd = "@kintone/rest-api-client", Zd = "5.7.0", ep = { access: "public" }, tp = { name: "Cybozu, Inc.", url: "https://cybozu.co.jp" }, np = "Kintone REST API client for JavaScript", rp = "lib/src/index.js", ip = "esm/src/index.js", op = "lib/src/index.browser.js", ap = "lib/src/index.d.ts", sp = { prebuild: "pnpm clean", build: "tsc --build --force", postbuild: "run-p build:*", lint: "eslint 'src/**/*.ts' --max-warnings 0", prepublishOnly: "run-p build:umd_*", test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest", "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand", "build:umd_dev": "rollup -c --environment BUILD:development", "build:umd_prod": "rollup -c --environment BUILD:production", clean: "rimraf lib esm umd", fix: "pnpm lint --fix", start: "pnpm build --watch" }, lp = { type: "git", url: "git+https://github.com/kintone/js-sdk.git", directory: "packages/rest-api-client" }, up = ["esm", "lib", "umd", "index.mjs"], cp = ["kintone", "rest", "api-client"], fp = "MIT", dp = { url: "https://github.com/kintone/js-sdk/issues" }, pp = "https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme", hp = { node: ">=18" }, mp = { "@rollup/plugin-babel": "^6.0.4", "@rollup/plugin-commonjs": "^26.0.3", "@rollup/plugin-json": "^6.1.0", "@rollup/plugin-node-resolve": "^15.3.1", "@rollup/plugin-terser": "^0.4.4", "@types/core-js": "^2.5.8", "@types/js-base64": "^3.3.1", "@types/mime": "^3.0.4", "@types/qs": "^6.9.17", rollup: "^4.30.1", "rollup-plugin-ecma-version-validator": "^0.2.13", "rollup-plugin-license": "^3.5.3", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-polyfill-node": "^0.13.0", webpack: "^5.97.1", "webpack-cli": "^5.1.4", "babel-loader": "^9.2.1", vite: "^5.4.11", rimraf: "^5.0.10", "cross-env": "^7.0.3" }, yp = { "core-js": "^3.39.0", axios: "^1.7.9", "form-data": "^4.0.1", "js-base64": "^3.7.7", mime: "^3.0.0", qs: "^6.12.3" }, vp = { ".": { types: { import: "./esm/src/index.d.ts", require: "./lib/src/index.d.ts", default: "./lib/src/index.d.ts" }, node: { import: "./index.mjs", require: "./lib/src/index.js", default: "./lib/src/index.js" }, browser: "./lib/src/index.browser.js" }, "./package.json": "./package.json" }, gp = {
  name: Qd,
  version: Zd,
  publishConfig: ep,
  author: tp,
  description: np,
  main: rp,
  module: ip,
  browser: op,
  types: ap,
  scripts: sp,
  repository: lp,
  files: up,
  keywords: cp,
  license: fp,
  bugs: dp,
  homepage: pp,
  engines: hp,
  devDependencies: mp,
  dependencies: yp,
  exports: vp
};
var Ga;
function bp() {
  if (Ga) return $e;
  Ga = 1;
  var e = $e.__awaiter || function(b, d, a, w) {
    function v(_) {
      return _ instanceof a ? _ : new a(function(E) {
        E(_);
      });
    }
    return new (a || (a = Promise))(function(_, E) {
      function P(I) {
        try {
          A(w.next(I));
        } catch (q) {
          E(q);
        }
      }
      function R(I) {
        try {
          A(w.throw(I));
        } catch (q) {
          E(q);
        }
      }
      function A(I) {
        I.done ? _(I.value) : v(I.value).then(P, R);
      }
      A((w = w.apply(b, d || [])).next());
    });
  }, t = $e.__generator || function(b, d) {
    var a = { label: 0, sent: function() {
      if (_[0] & 1) throw _[1];
      return _[1];
    }, trys: [], ops: [] }, w, v, _, E = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return E.next = P(0), E.throw = P(1), E.return = P(2), typeof Symbol == "function" && (E[Symbol.iterator] = function() {
      return this;
    }), E;
    function P(A) {
      return function(I) {
        return R([A, I]);
      };
    }
    function R(A) {
      if (w) throw new TypeError("Generator is already executing.");
      for (; E && (E = 0, A[0] && (a = 0)), a; ) try {
        if (w = 1, v && (_ = A[0] & 2 ? v.return : A[0] ? v.throw || ((_ = v.return) && _.call(v), 0) : v.next) && !(_ = _.call(v, A[1])).done) return _;
        switch (v = 0, _ && (A = [A[0] & 2, _.value]), A[0]) {
          case 0:
          case 1:
            _ = A;
            break;
          case 4:
            return a.label++, { value: A[1], done: !1 };
          case 5:
            a.label++, v = A[1], A = [0];
            continue;
          case 7:
            A = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (A[0] === 6 || A[0] === 2)) {
              a = 0;
              continue;
            }
            if (A[0] === 3 && (!_ || A[1] > _[0] && A[1] < _[3])) {
              a.label = A[1];
              break;
            }
            if (A[0] === 6 && a.label < _[1]) {
              a.label = _[1], _ = A;
              break;
            }
            if (_ && a.label < _[2]) {
              a.label = _[2], a.ops.push(A);
              break;
            }
            _[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        A = d.call(b, a);
      } catch (I) {
        A = [6, I], v = 0;
      } finally {
        w = _ = 0;
      }
      if (A[0] & 5) throw A[1];
      return { value: A[0] ? A[1] : void 0, done: !0 };
    }
  }, r = $e.__importDefault || function(b) {
    return b && b.__esModule ? b : { default: b };
  };
  Object.defineProperty($e, "__esModule", { value: !0 }), $e.getVersion = $e.buildBaseUrl = $e.buildFormDataValue = $e.buildHeaders = $e.buildPlatformDependentConfig = $e.getDefaultAuth = $e.getRequestToken = $e.readFileFromPath = void 0;
  var n = Uo(), i = r(Jd()), o = r(gp), u = function(b) {
    throw new n.UnsupportedPlatformError("Browser");
  };
  $e.readFileFromPath = u;
  var c = function() {
    return e(void 0, void 0, void 0, function() {
      var b, d;
      return t(this, function(a) {
        if (typeof kintone == "object" && kintone !== null && typeof kintone.getRequestToken == "function")
          return [2, kintone.getRequestToken()];
        if (typeof garoon == "object" && garoon !== null && typeof ((d = (b = garoon.connect) === null || b === void 0 ? void 0 : b.kintone) === null || d === void 0 ? void 0 : d.getRequestToken) == "function")
          return [2, garoon.connect.kintone.getRequestToken()];
        throw new Error("session authentication must specify a request token");
      });
    });
  };
  $e.getRequestToken = c;
  var s = function() {
    return {
      type: "session"
    };
  };
  $e.getDefaultAuth = s;
  var l = function() {
    return {};
  };
  $e.buildPlatformDependentConfig = l;
  var f = function() {
    return {};
  };
  $e.buildHeaders = f;
  var p = function(b, d) {
    var a = {};
    return d && (a.type = i.default.getType(d) || void 0), new Blob([b], a);
  };
  $e.buildFormDataValue = p;
  var m = function(b) {
    if (b)
      return b;
    if (location === void 0)
      throw new Error("The baseUrl parameter is required for this environment");
    var d = location.host, a = location.protocol;
    return "".concat(a, "//").concat(d);
  };
  $e.buildBaseUrl = m;
  var g = function() {
    return o.default.version;
  };
  return $e.getVersion = g, $e;
}
var _n = {}, Kt = {}, Sn = {}, Gn = {}, Ka;
function wp() {
  if (Ka) return Gn;
  Ka = 1, Object.defineProperty(Gn, "__esModule", { value: !0 }), Gn.buildPath = void 0;
  var e = function(t) {
    var r = t.endpointName, n = t.guestSpaceId, i = t.preview, o = n !== void 0 ? "/guest/".concat(n) : "", u = i ? "/preview" : "";
    return "/k".concat(o, "/v1").concat(u, "/").concat(r, ".json");
  };
  return Gn.buildPath = e, Gn;
}
var za;
function jn() {
  if (za) return Sn;
  za = 1;
  var e = Sn.__assign || function() {
    return e = Object.assign || function(n) {
      for (var i, o = 1, u = arguments.length; o < u; o++) {
        i = arguments[o];
        for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (n[c] = i[c]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.BaseClient = void 0;
  var t = wp(), r = (
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
var Ya;
function _p() {
  if (Ya) return Kt;
  Ya = 1;
  var e = Kt.__extends || /* @__PURE__ */ function() {
    var o = function(u, c) {
      return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
        s.__proto__ = l;
      } || function(s, l) {
        for (var f in l) Object.prototype.hasOwnProperty.call(l, f) && (s[f] = l[f]);
      }, o(u, c);
    };
    return function(u, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      o(u, c);
      function s() {
        this.constructor = u;
      }
      u.prototype = c === null ? Object.create(c) : (s.prototype = c.prototype, new s());
    };
  }(), t = Kt.__assign || function() {
    return t = Object.assign || function(o) {
      for (var u, c = 1, s = arguments.length; c < s; c++) {
        u = arguments[c];
        for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (o[l] = u[l]);
      }
      return o;
    }, t.apply(this, arguments);
  }, r = Kt.__rest || function(o, u) {
    var c = {};
    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && u.indexOf(s) < 0 && (c[s] = o[s]);
    if (o != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, s = Object.getOwnPropertySymbols(o); l < s.length; l++)
        u.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(o, s[l]) && (c[s[l]] = o[s[l]]);
    return c;
  };
  Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.BulkRequestClient = void 0;
  var n = jn(), i = (
    /** @class */
    function(o) {
      e(u, o);
      function u(c, s) {
        var l = o.call(this, c, s) || this;
        return l.REQUESTS_LENGTH_LIMIT = 20, l;
      }
      return u.prototype.send = function(c) {
        var s = this, l = c.requests, f = l.map(function(m) {
          if ("endpointName" in m) {
            var g = m.endpointName, b = r(m, ["endpointName"]);
            return t({ api: s.buildPathWithGuestSpaceId({ endpointName: g }) }, b);
          }
          return m;
        }), p = this.buildPathWithGuestSpaceId({
          endpointName: "bulkRequest"
        });
        return this.client.post(p, { requests: f });
      }, u;
    }(n.BaseClient)
  );
  return Kt.BulkRequestClient = i, Kt;
}
var Rt = {}, Xa;
function Sp() {
  if (Xa) return Rt;
  Xa = 1;
  var e = Rt.__extends || /* @__PURE__ */ function() {
    var c = function(s, l) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, p) {
        f.__proto__ = p;
      } || function(f, p) {
        for (var m in p) Object.prototype.hasOwnProperty.call(p, m) && (f[m] = p[m]);
      }, c(s, l);
    };
    return function(s, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      c(s, l);
      function f() {
        this.constructor = s;
      }
      s.prototype = l === null ? Object.create(l) : (f.prototype = l.prototype, new f());
    };
  }(), t = Rt.__assign || function() {
    return t = Object.assign || function(c) {
      for (var s, l = 1, f = arguments.length; l < f; l++) {
        s = arguments[l];
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (c[p] = s[p]);
      }
      return c;
    }, t.apply(this, arguments);
  }, r = Rt.__awaiter || function(c, s, l, f) {
    function p(m) {
      return m instanceof l ? m : new l(function(g) {
        g(m);
      });
    }
    return new (l || (l = Promise))(function(m, g) {
      function b(w) {
        try {
          a(f.next(w));
        } catch (v) {
          g(v);
        }
      }
      function d(w) {
        try {
          a(f.throw(w));
        } catch (v) {
          g(v);
        }
      }
      function a(w) {
        w.done ? m(w.value) : p(w.value).then(b, d);
      }
      a((f = f.apply(c, s || [])).next());
    });
  }, n = Rt.__generator || function(c, s) {
    var l = { label: 0, sent: function() {
      if (m[0] & 1) throw m[1];
      return m[1];
    }, trys: [], ops: [] }, f, p, m, g = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return g.next = b(0), g.throw = b(1), g.return = b(2), typeof Symbol == "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function b(a) {
      return function(w) {
        return d([a, w]);
      };
    }
    function d(a) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; g && (g = 0, a[0] && (l = 0)), l; ) try {
        if (f = 1, p && (m = a[0] & 2 ? p.return : a[0] ? p.throw || ((m = p.return) && m.call(p), 0) : p.next) && !(m = m.call(p, a[1])).done) return m;
        switch (p = 0, m && (a = [a[0] & 2, m.value]), a[0]) {
          case 0:
          case 1:
            m = a;
            break;
          case 4:
            return l.label++, { value: a[1], done: !1 };
          case 5:
            l.label++, p = a[1], a = [0];
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
        a = s.call(c, l);
      } catch (w) {
        a = [6, w], p = 0;
      } finally {
        f = m = 0;
      }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  }, i = Rt.__rest || function(c, s) {
    var l = {};
    for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && s.indexOf(f) < 0 && (l[f] = c[f]);
    if (c != null && typeof Object.getOwnPropertySymbols == "function")
      for (var p = 0, f = Object.getOwnPropertySymbols(c); p < f.length; p++)
        s.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(c, f[p]) && (l[f[p]] = c[f[p]]);
    return l;
  };
  Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.AppClient = void 0;
  var o = jn(), u = (
    /** @class */
    function(c) {
      e(s, c);
      function s() {
        return c !== null && c.apply(this, arguments) || this;
      }
      return s.prototype.getFormFields = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.addFormFields = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.post(f, l);
      }, s.prototype.updateFormFields = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.deleteFormFields = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.delete(f, l);
      }, s.prototype.getFormLayout = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateFormLayout = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getViews = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateViews = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getApp = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app"
        });
        return this.client.get(f, l);
      }, s.prototype.getApps = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "apps"
        });
        return this.client.get(f, l);
      }, s.prototype.addApp = function(l) {
        return r(this, void 0, void 0, function() {
          var f, p, m, g, b;
          return n(this, function(d) {
            switch (d.label) {
              case 0:
                return f = l.name, p = l.space, m = this.buildPathWithGuestSpaceId({
                  endpointName: "app",
                  preview: !0
                }), p ? (g = this.buildPathWithGuestSpaceId({
                  endpointName: "space"
                }), [4, this.client.get(g, {
                  id: p
                })]) : [3, 2];
              case 1:
                return b = d.sent().defaultThread, [2, this.client.post(m, t(t({}, l), { thread: b }))];
              case 2:
                return [2, this.client.post(m, { name: f })];
            }
          });
        });
      }, s.prototype.getAppSettings = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateAppSettings = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getProcessManagement = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateProcessManagement = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getDeployStatus = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.get(f, l);
      }, s.prototype.deployApp = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.post(f, l);
      }, s.prototype.getFieldAcl = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateFieldAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAppAcl = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateAppAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.evaluateRecordsAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "records/acl/evaluate"
        });
        return this.client.get(f, l);
      }, s.prototype.getRecordAcl = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateRecordAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAppCustomize = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateAppCustomize = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getGeneralNotifications = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateGeneralNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getPerRecordNotifications = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updatePerRecordNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getReminderNotifications = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateReminderNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getReports = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateReports = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAppActions = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateAppActions = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAdminNotes = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateAdminNotes = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.move = function(l) {
        var f = this.buildPath({
          endpointName: "app/move"
        });
        return this.client.post(f, l);
      }, s.prototype.getPlugins = function(l) {
        var f = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.addPlugins = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: !0
        });
        return this.client.post(f, l);
      }, s;
    }(o.BaseClient)
  );
  return Rt.AppClient = u, Rt;
}
var vt = {}, Kn = {}, xn = {}, Ja;
function xp() {
  if (Ja) return xn;
  Ja = 1;
  var e = xn.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
        o.__proto__ = u;
      } || function(o, u) {
        for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (o[c] = u[c]);
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
var En = {}, Qa;
function Ep() {
  if (Qa) return En;
  Qa = 1;
  var e = En.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
        o.__proto__ = u;
      } || function(o, u) {
        for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (o[c] = u[c]);
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
  Object.defineProperty(En, "__esModule", { value: !0 }), En.KintoneAllRecordsError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i, o, u, c, s) {
        var l = this, f = u - o.length, p = n.extractErrorIndex(f, c, s), m = n.buildErrorMessage(f, u, p);
        return l = r.call(this, m) || this, l.name = "KintoneAllRecordsError", l.processedRecordsResult = i, l.unprocessedRecords = o, l.error = c, l.errorIndex = p, l.message = m, l.numOfProcessedRecords = f, l.numOfAllRecords = u, Object.setPrototypeOf(l, n.prototype), l;
      }
      return n.parseErrorIndex = function(i) {
        var o = [];
        return Object.keys(i).forEach(function(u) {
          var c = u.match(/records\[(\d+)\]/);
          c && o.push(Number(c[1]));
        }), o.length > 0 ? Math.min.apply(Math, o) : null;
      }, n.extractErrorIndex = function(i, o, u) {
        if (o.bulkRequestIndex !== void 0 && o.errors) {
          var c = n.parseErrorIndex(o.errors);
          if (c !== null)
            return i + o.bulkRequestIndex * u + c;
        }
      }, n.buildErrorMessage = function(i, o, u) {
        var c = "";
        return u !== void 0 && (c = "An error occurred at records[".concat(u, "]. ")), c += "".concat(i, "/").concat(o, " records are processed successfully"), c;
      }, n;
    }(Error)
  );
  return En.KintoneAllRecordsError = t, En;
}
var On = {}, Za;
function Op() {
  if (Za) return On;
  Za = 1;
  var e = On.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
        o.__proto__ = u;
      } || function(o, u) {
        for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (o[c] = u[c]);
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
  Object.defineProperty(On, "__esModule", { value: !0 }), On.KintoneRestAPIError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var o = this, u = n.buildErrorResponseDateWithIndex(i), c = u.data, s = u.bulkRequestIndex;
        return o = r.call(this, c.message) || this, o.name = "KintoneRestAPIError", o.id = c.id, o.code = c.code, o.errors = c.errors, o.status = i.status, o.bulkRequestIndex = s, o.headers = i.headers, o.message = "[".concat(i.status, "] [").concat(o.code, "] ").concat(o.message, " (").concat(o.id, ")"), Error.captureStackTrace && Error.captureStackTrace(o, n), Object.setPrototypeOf(o, n.prototype), o;
      }
      return n.findErrorResponseDataWithIndex = function(i) {
        for (var o = 0; o < i.length; o++)
          if (Object.keys(i[o]).length !== 0) {
            var u = i[o];
            return { data: u, bulkRequestIndex: o };
          }
        throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
      }, n.buildErrorResponseDateWithIndex = function(i) {
        return "results" in i.data ? n.findErrorResponseDataWithIndex(i.data.results) : { data: i.data };
      }, n;
    }(Error)
  );
  return On.KintoneRestAPIError = t, On;
}
var es;
function Vo() {
  return es || (es = 1, function(e) {
    var t = Kn.__createBinding || (Object.create ? function(n, i, o, u) {
      u === void 0 && (u = o);
      var c = Object.getOwnPropertyDescriptor(i, o);
      (!c || ("get" in c ? !i.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
        return i[o];
      } }), Object.defineProperty(n, u, c);
    } : function(n, i, o, u) {
      u === void 0 && (u = o), n[u] = i[o];
    }), r = Kn.__exportStar || function(n, i) {
      for (var o in n) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, n, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), r(xp(), e), r(Ep(), e), r(Op(), e);
  }(Kn)), Kn;
}
var ts;
function Rp() {
  if (ts) return vt;
  ts = 1;
  var e = vt.__extends || /* @__PURE__ */ function() {
    var g = function(b, d) {
      return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, w) {
        a.__proto__ = w;
      } || function(a, w) {
        for (var v in w) Object.prototype.hasOwnProperty.call(w, v) && (a[v] = w[v]);
      }, g(b, d);
    };
    return function(b, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
      g(b, d);
      function a() {
        this.constructor = b;
      }
      b.prototype = d === null ? Object.create(d) : (a.prototype = d.prototype, new a());
    };
  }(), t = vt.__assign || function() {
    return t = Object.assign || function(g) {
      for (var b, d = 1, a = arguments.length; d < a; d++) {
        b = arguments[d];
        for (var w in b) Object.prototype.hasOwnProperty.call(b, w) && (g[w] = b[w]);
      }
      return g;
    }, t.apply(this, arguments);
  }, r = vt.__awaiter || function(g, b, d, a) {
    function w(v) {
      return v instanceof d ? v : new d(function(_) {
        _(v);
      });
    }
    return new (d || (d = Promise))(function(v, _) {
      function E(A) {
        try {
          R(a.next(A));
        } catch (I) {
          _(I);
        }
      }
      function P(A) {
        try {
          R(a.throw(A));
        } catch (I) {
          _(I);
        }
      }
      function R(A) {
        A.done ? v(A.value) : w(A.value).then(E, P);
      }
      R((a = a.apply(g, b || [])).next());
    });
  }, n = vt.__generator || function(g, b) {
    var d = { label: 0, sent: function() {
      if (v[0] & 1) throw v[1];
      return v[1];
    }, trys: [], ops: [] }, a, w, v, _ = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return _.next = E(0), _.throw = E(1), _.return = E(2), typeof Symbol == "function" && (_[Symbol.iterator] = function() {
      return this;
    }), _;
    function E(R) {
      return function(A) {
        return P([R, A]);
      };
    }
    function P(R) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; _ && (_ = 0, R[0] && (d = 0)), d; ) try {
        if (a = 1, w && (v = R[0] & 2 ? w.return : R[0] ? w.throw || ((v = w.return) && v.call(w), 0) : w.next) && !(v = v.call(w, R[1])).done) return v;
        switch (w = 0, v && (R = [R[0] & 2, v.value]), R[0]) {
          case 0:
          case 1:
            v = R;
            break;
          case 4:
            return d.label++, { value: R[1], done: !1 };
          case 5:
            d.label++, w = R[1], R = [0];
            continue;
          case 7:
            R = d.ops.pop(), d.trys.pop();
            continue;
          default:
            if (v = d.trys, !(v = v.length > 0 && v[v.length - 1]) && (R[0] === 6 || R[0] === 2)) {
              d = 0;
              continue;
            }
            if (R[0] === 3 && (!v || R[1] > v[0] && R[1] < v[3])) {
              d.label = R[1];
              break;
            }
            if (R[0] === 6 && d.label < v[1]) {
              d.label = v[1], v = R;
              break;
            }
            if (v && d.label < v[2]) {
              d.label = v[2], d.ops.push(R);
              break;
            }
            v[2] && d.ops.pop(), d.trys.pop();
            continue;
        }
        R = b.call(g, d);
      } catch (A) {
        R = [6, A], w = 0;
      } finally {
        a = v = 0;
      }
      if (R[0] & 5) throw R[1];
      return { value: R[0] ? R[1] : void 0, done: !0 };
    }
  }, i = vt.__rest || function(g, b) {
    var d = {};
    for (var a in g) Object.prototype.hasOwnProperty.call(g, a) && b.indexOf(a) < 0 && (d[a] = g[a]);
    if (g != null && typeof Object.getOwnPropertySymbols == "function")
      for (var w = 0, a = Object.getOwnPropertySymbols(g); w < a.length; w++)
        b.indexOf(a[w]) < 0 && Object.prototype.propertyIsEnumerable.call(g, a[w]) && (d[a[w]] = g[a[w]]);
    return d;
  }, o = vt.__spreadArray || function(g, b, d) {
    if (d || arguments.length === 2) for (var a = 0, w = b.length, v; a < w; a++)
      (v || !(a in b)) && (v || (v = Array.prototype.slice.call(b, 0, a)), v[a] = b[a]);
    return g.concat(v || Array.prototype.slice.call(b));
  };
  Object.defineProperty(vt, "__esModule", { value: !0 }), vt.RecordClient = void 0;
  var u = Vo(), c = jn(), s = 100, l = 100, f = 100, p = 500, m = (
    /** @class */
    function(g) {
      e(b, g);
      function b(d, a, w) {
        var v = g.call(this, d, w) || this;
        return v.bulkRequestClient = a, v.didWarnMaximumOffsetValue = !1, v;
      }
      return b.prototype.getRecord = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.get(a, d);
      }, b.prototype.addRecord = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.post(a, d);
      }, b.prototype.updateRecord = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.put(a, d);
      }, b.prototype.upsertRecord = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, v, _, E, P;
          return n(this, function(R) {
            switch (R.label) {
              case 0:
                return a = d.app, w = d.updateKey, v = d.record, [4, this.getRecords({
                  app: a,
                  query: "".concat(w.field, ' = "').concat(w.value, '"')
                })];
              case 1:
                return _ = R.sent().records, _.length > 0 ? _[0].$id.type !== "__ID__" ? [3, 3] : [4, this.updateRecord(d)] : [3, 4];
              case 2:
                return E = R.sent().revision, [2, { id: _[0].$id.value, revision: E }];
              case 3:
                throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
              case 4:
                return [2, this.addRecord({
                  app: a,
                  record: Object.assign({}, v, (P = {}, P[w.field] = { value: w.value }, P))
                })];
            }
          });
        });
      }, b.prototype.getRecords = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w;
          return n(this, function(v) {
            switch (v.label) {
              case 0:
                return a = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.get(a, d)];
              case 1:
                return w = v.sent(), this.warnMaximumOffsetValueIfNeeded(d.query), [2, w];
            }
          });
        });
      }, b.prototype.warnMaximumOffsetValueIfNeeded = function(d) {
        if (d) {
          var a = /offset\s+(\d+)/i, w = d.match(a);
          !this.didWarnMaximumOffsetValue && w && Number(w[1]) > 1e4 && (this.didWarnMaximumOffsetValue = !0, console.warn("Warning: The maximum offset value will be limited to 10,000 in the future. Please use `createCursor()` and `getRecordsByCursor()` instead."));
        }
      }, b.prototype.addRecords = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, v, _;
          return n(this, function(E) {
            switch (E.label) {
              case 0:
                return a = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.post(a, d)];
              case 1:
                return w = E.sent(), v = w.ids, _ = w.revisions, [2, {
                  ids: v,
                  revisions: _,
                  records: v.map(function(P, R) {
                    return { id: P, revision: _[R] };
                  })
                }];
            }
          });
        });
      }, b.prototype.updateRecords = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.put(a, d);
      }, b.prototype.deleteRecords = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.delete(a, d);
      }, b.prototype.createCursor = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.post(a, d);
      }, b.prototype.getRecordsByCursor = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.get(a, d);
      }, b.prototype.deleteCursor = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.delete(a, d);
      }, b.prototype.getAllRecords = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, v, _, E, P, R;
          return n(this, function(A) {
            return a = d.condition, w = d.orderBy, v = d.withCursor, _ = v === void 0 ? !0 : v, E = i(d, ["condition", "orderBy", "withCursor"]), w ? _ ? (P = a ? "".concat(a, " ") : "", R = "".concat(P).concat(w ? "order by ".concat(w) : ""), [2, this.getAllRecordsWithCursor(t(t({}, E), { query: R }))]) : [2, this.getAllRecordsWithOffset(t(t({}, E), { orderBy: w, condition: a }))] : [2, this.getAllRecordsWithId(t(t({}, E), { condition: a }))];
          });
        });
      }, b.prototype.getAllRecordsWithId = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, v, _, E, P, R, A, I, q;
          return n(this, function(M) {
            switch (M.label) {
              case 0:
                a = d.fields, w = d.condition, v = i(d, ["fields", "condition"]), _ = a, _ && _.length > 0 && _.indexOf("$id") === -1 && (_ = o(o([], _, !0), ["$id"], !1)), E = w ? "(".concat(w, ") and ") : "", P = [], R = "0", M.label = 1;
              case 1:
                return A = "".concat(E, "$id > ").concat(R, " order by $id asc limit ").concat(p), [4, this.getRecords(t(t({}, v), { fields: _, query: A }))];
              case 2:
                if (I = M.sent(), P = P.concat(I.records), I.records.length < p)
                  return [3, 3];
                if (q = I.records[I.records.length - 1], q.$id.type === "__ID__")
                  R = q.$id.value;
                else
                  throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
                return [3, 1];
              case 3:
                return [2, P];
            }
          });
        });
      }, b.prototype.getAllRecordsWithOffset = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, v, _, E, P, R, A;
          return n(this, function(I) {
            switch (I.label) {
              case 0:
                a = d.condition, w = d.orderBy, v = i(d, ["condition", "orderBy"]), _ = a ? "".concat(a, " ") : "", E = [], P = 0, I.label = 1;
              case 1:
                return R = "".concat(_).concat(w ? "order by ".concat(w, " ") : "", "limit ").concat(p, " offset ").concat(P), [4, this.getRecords(t(t({}, v), { query: R }))];
              case 2:
                return A = I.sent(), E = E.concat(A.records), A.records.length < p ? [3, 3] : (P += p, [3, 1]);
              case 3:
                return [2, E];
            }
          });
        });
      }, b.prototype.getAllRecordsWithCursor = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, v, _;
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
                return v = E.sent(), w = w.concat(v.records), v.next ? [3, 3] : [3, 5];
              case 5:
                return [2, w];
              case 6:
                return _ = E.sent(), [4, this.deleteCursor({ id: a })];
              case 7:
                throw E.sent(), _;
              case 8:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, b.prototype.addAllRecords = function(d) {
        return r(this, void 0, void 0, function() {
          return n(this, function(a) {
            if (!d.records.every(function(w) {
              return !Array.isArray(w) && w instanceof Object;
            }))
              throw new Error("the `records` parameter must be an array of object.");
            return [2, this.addAllRecordsRecursive(d, d.records.length, [])];
          });
        });
      }, b.prototype.addAllRecordsRecursive = function(d, a, w) {
        return r(this, void 0, void 0, function() {
          var v, _, E, P, R, A;
          return n(this, function(I) {
            switch (I.label) {
              case 0:
                if (v = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * s, _ = d.app, E = d.records, P = E.slice(0, v), P.length === 0)
                  return [2, { records: w }];
                I.label = 1;
              case 1:
                return I.trys.push([1, 3, , 4]), [4, this.addAllRecordsWithBulkRequest({
                  app: _,
                  records: P
                })];
              case 2:
                return R = I.sent(), [3, 4];
              case 3:
                throw A = I.sent(), new u.KintoneAllRecordsError({ records: w }, E, a, A, s);
              case 4:
                return [2, this.addAllRecordsRecursive({
                  app: _,
                  records: E.slice(v)
                }, a, w.concat(R))];
            }
          });
        });
      }, b.prototype.addAllRecordsWithBulkRequest = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, v;
          return n(this, function(_) {
            switch (_.label) {
              case 0:
                return a = this.separateArrayRecursive(s, [], d.records), w = a.map(function(E) {
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
                return v = _.sent().results, [2, v.map(function(E) {
                  var P = E.ids, R = E.revisions;
                  return P.map(function(A, I) {
                    return { id: A, revision: R[I] };
                  });
                }).reduce(function(E, P) {
                  return E.concat(P);
                }, [])];
            }
          });
        });
      }, b.prototype.updateAllRecords = function(d) {
        return r(this, void 0, void 0, function() {
          return n(this, function(a) {
            return [2, this.updateAllRecordsRecursive(d, d.records.length, [])];
          });
        });
      }, b.prototype.updateAllRecordsRecursive = function(d, a, w) {
        return r(this, void 0, void 0, function() {
          var v, _, E, P, R, A, I;
          return n(this, function(q) {
            switch (q.label) {
              case 0:
                if (v = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * l, _ = d.app, E = d.upsert, P = d.records, R = P.slice(0, v), R.length === 0)
                  return [2, { records: w }];
                q.label = 1;
              case 1:
                return q.trys.push([1, 3, , 4]), [4, this.updateAllRecordsWithBulkRequest({
                  app: _,
                  upsert: E,
                  records: R
                })];
              case 2:
                return A = q.sent(), [3, 4];
              case 3:
                throw I = q.sent(), new u.KintoneAllRecordsError({ records: w }, P, a, I, l);
              case 4:
                return [2, this.updateAllRecordsRecursive({
                  app: _,
                  upsert: E,
                  records: P.slice(v)
                }, a, w.concat(A))];
            }
          });
        });
      }, b.prototype.updateAllRecordsWithBulkRequest = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w, v;
          return n(this, function(_) {
            switch (_.label) {
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
                return v = _.sent().results, [2, v.map(function(E) {
                  return E.records;
                }).reduce(function(E, P) {
                  return E.concat(P);
                }, [])];
            }
          });
        });
      }, b.prototype.deleteAllRecords = function(d) {
        return this.deleteAllRecordsRecursive(d, d.records.length);
      }, b.prototype.deleteAllRecordsRecursive = function(d, a) {
        return r(this, void 0, void 0, function() {
          var w, v, _, E, P;
          return n(this, function(R) {
            switch (R.label) {
              case 0:
                if (w = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * f, v = d.app, _ = d.records, E = _.slice(0, w), E.length === 0)
                  return [2, {}];
                R.label = 1;
              case 1:
                return R.trys.push([1, 3, , 4]), [4, this.deleteAllRecordsWithBulkRequest({
                  app: v,
                  records: E
                })];
              case 2:
                return R.sent(), [3, 4];
              case 3:
                throw P = R.sent(), new u.KintoneAllRecordsError({}, _, a, P, f);
              case 4:
                return [2, this.deleteAllRecordsRecursive({
                  app: v,
                  records: _.slice(w)
                }, a)];
            }
          });
        });
      }, b.prototype.deleteAllRecordsWithBulkRequest = function(d) {
        return r(this, void 0, void 0, function() {
          var a, w;
          return n(this, function(v) {
            switch (v.label) {
              case 0:
                return a = this.separateArrayRecursive(f, [], d.records), w = a.map(function(_) {
                  return {
                    method: "DELETE",
                    endpointName: "records",
                    payload: {
                      app: d.app,
                      ids: _.map(function(E) {
                        return E.id;
                      }),
                      revisions: _.map(function(E) {
                        return E.revision;
                      })
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: w })];
              case 1:
                return v.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, b.prototype.separateArrayRecursive = function(d, a, w) {
        var v = w.slice(0, d);
        return v.length === 0 ? a : this.separateArrayRecursive(d, o(o([], a, !0), [v], !1), w.slice(d));
      }, b.prototype.addRecordComment = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.post(a, d);
      }, b.prototype.deleteRecordComment = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.delete(a, d);
      }, b.prototype.getRecordComments = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/comments"
        });
        return this.client.get(a, d);
      }, b.prototype.updateRecordAssignees = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/assignees"
        });
        return this.client.put(a, d);
      }, b.prototype.updateRecordStatus = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "record/status"
        });
        return this.client.put(a, d);
      }, b.prototype.updateRecordsStatus = function(d) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "records/status"
        });
        return this.client.put(a, d);
      }, b;
    }(c.BaseClient)
  );
  return vt.RecordClient = m, vt;
}
var Rn = {}, ns;
function Ap() {
  if (ns) return Rn;
  ns = 1;
  var e = Rn.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, c) {
        u.__proto__ = c;
      } || function(u, c) {
        for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && (u[s] = c[s]);
      }, n(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(i, o);
      function u() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (u.prototype = o.prototype, new u());
    };
  }();
  Object.defineProperty(Rn, "__esModule", { value: !0 }), Rn.SpaceClient = void 0;
  var t = jn(), r = (
    /** @class */
    function(n) {
      e(i, n);
      function i() {
        return n !== null && n.apply(this, arguments) || this;
      }
      return i.prototype.getSpace = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.get(u, o);
      }, i.prototype.updateSpace = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.put(u, o);
      }, i.prototype.deleteSpace = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.delete(u, o);
      }, i.prototype.updateSpaceBody = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space/body"
        });
        return this.client.put(u, o);
      }, i.prototype.getSpaceMembers = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.get(u, o);
      }, i.prototype.updateSpaceMembers = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.put(u, o);
      }, i.prototype.addThread = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.post(u, o);
      }, i.prototype.updateThread = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.put(u, o);
      }, i.prototype.addThreadComment = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread/comment"
        });
        return this.client.post(u, o);
      }, i.prototype.addGuests = function(o) {
        var u = this.buildPath({
          endpointName: "guests"
        });
        return this.client.post(u, o);
      }, i.prototype.deleteGuests = function(o) {
        var u = this.buildPath({
          endpointName: "guests"
        });
        return this.client.delete(u, o);
      }, i.prototype.updateSpaceGuests = function(o) {
        var u = this.buildPathWithGuestSpaceId({
          endpointName: "space/guests"
        });
        return this.client.put(u, o);
      }, i.prototype.addSpaceFromTemplate = function(o) {
        var u = this.buildPath({
          endpointName: "template/space"
        });
        return this.client.post(u, o);
      }, i;
    }(t.BaseClient)
  );
  return Rn.SpaceClient = r, Rn;
}
var It = {}, Ci, rs;
function Ml() {
  return rs || (rs = 1, Ci = typeof self == "object" ? self.FormData : window.FormData), Ci;
}
var is;
function Pp() {
  if (is) return It;
  is = 1;
  var e = It.__extends || /* @__PURE__ */ function() {
    var l = function(f, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var b in g) Object.prototype.hasOwnProperty.call(g, b) && (m[b] = g[b]);
      }, l(f, p);
    };
    return function(f, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(f, p);
      function m() {
        this.constructor = f;
      }
      f.prototype = p === null ? Object.create(p) : (m.prototype = p.prototype, new m());
    };
  }(), t = It.__awaiter || function(l, f, p, m) {
    function g(b) {
      return b instanceof p ? b : new p(function(d) {
        d(b);
      });
    }
    return new (p || (p = Promise))(function(b, d) {
      function a(_) {
        try {
          v(m.next(_));
        } catch (E) {
          d(E);
        }
      }
      function w(_) {
        try {
          v(m.throw(_));
        } catch (E) {
          d(E);
        }
      }
      function v(_) {
        _.done ? b(_.value) : g(_.value).then(a, w);
      }
      v((m = m.apply(l, f || [])).next());
    });
  }, r = It.__generator || function(l, f) {
    var p = { label: 0, sent: function() {
      if (b[0] & 1) throw b[1];
      return b[1];
    }, trys: [], ops: [] }, m, g, b, d = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return d.next = a(0), d.throw = a(1), d.return = a(2), typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function a(v) {
      return function(_) {
        return w([v, _]);
      };
    }
    function w(v) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; d && (d = 0, v[0] && (p = 0)), p; ) try {
        if (m = 1, g && (b = v[0] & 2 ? g.return : v[0] ? g.throw || ((b = g.return) && b.call(g), 0) : g.next) && !(b = b.call(g, v[1])).done) return b;
        switch (g = 0, b && (v = [v[0] & 2, b.value]), v[0]) {
          case 0:
          case 1:
            b = v;
            break;
          case 4:
            return p.label++, { value: v[1], done: !1 };
          case 5:
            p.label++, g = v[1], v = [0];
            continue;
          case 7:
            v = p.ops.pop(), p.trys.pop();
            continue;
          default:
            if (b = p.trys, !(b = b.length > 0 && b[b.length - 1]) && (v[0] === 6 || v[0] === 2)) {
              p = 0;
              continue;
            }
            if (v[0] === 3 && (!b || v[1] > b[0] && v[1] < b[3])) {
              p.label = v[1];
              break;
            }
            if (v[0] === 6 && p.label < b[1]) {
              p.label = b[1], b = v;
              break;
            }
            if (b && p.label < b[2]) {
              p.label = b[2], p.ops.push(v);
              break;
            }
            b[2] && p.ops.pop(), p.trys.pop();
            continue;
        }
        v = f.call(l, p);
      } catch (_) {
        v = [6, _], g = 0;
      } finally {
        m = b = 0;
      }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  }, n = It.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(It, "__esModule", { value: !0 }), It.FileClient = void 0;
  var i = n(Ml()), o = ei(), u = Uo(), c = jn(), s = (
    /** @class */
    function(l) {
      e(f, l);
      function f() {
        return l !== null && l.apply(this, arguments) || this;
      }
      return f.prototype.uploadFile = function(p) {
        return t(this, void 0, void 0, function() {
          var m, g, b, d, _, a, w, v, _, E;
          return r(this, function(P) {
            switch (P.label) {
              case 0:
                if (m = this.buildPathWithGuestSpaceId({
                  endpointName: "file"
                }), g = new i.default(), !("path" in p.file)) return [3, 5];
                P.label = 1;
              case 1:
                return P.trys.push([1, 3, , 4]), [4, o.platformDeps.readFileFromPath(p.file.path)];
              case 2:
                return b = P.sent(), d = b.name, _ = b.data, g.append("file", _, d), [3, 4];
              case 3:
                throw a = P.sent(), a instanceof u.UnsupportedPlatformError ? new Error("uploadFile doesn't allow to accept a file path in ".concat(a.platform, " environment.")) : a;
              case 4:
                return [3, 6];
              case 5:
                w = p.file, v = w.name, _ = w.data, E = o.platformDeps.buildFormDataValue(_, v), g.append("file", E, v), P.label = 6;
              case 6:
                return [2, this.client.postData(m, g)];
            }
          });
        });
      }, f.prototype.downloadFile = function(p) {
        var m = this.buildPathWithGuestSpaceId({
          endpointName: "file"
        });
        return this.client.getData(m, p);
      }, f;
    }(c.BaseClient)
  );
  return It.FileClient = s, It;
}
var An = {}, os;
function Cp() {
  if (os) return An;
  os = 1;
  var e = An.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, c) {
        u.__proto__ = c;
      } || function(u, c) {
        for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && (u[s] = c[s]);
      }, n(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(i, o);
      function u() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (u.prototype = o.prototype, new u());
    };
  }();
  Object.defineProperty(An, "__esModule", { value: !0 }), An.PluginClient = void 0;
  var t = jn(), r = (
    /** @class */
    function(n) {
      e(i, n);
      function i() {
        return n !== null && n.apply(this, arguments) || this;
      }
      return i.prototype.getPlugins = function(o) {
        var u = this.buildPath({ endpointName: "plugins" });
        return this.client.get(u, o);
      }, i.prototype.getRequiredPlugins = function(o) {
        var u = this.buildPath({ endpointName: "plugins/required" });
        return this.client.get(u, o);
      }, i.prototype.getApps = function(o) {
        var u = this.buildPath({ endpointName: "plugin/apps" });
        return this.client.get(u, o);
      }, i.prototype.updatePlugin = function(o) {
        var u = this.buildPath({ endpointName: "plugin" });
        return this.client.put(u, o);
      }, i.prototype.installPlugin = function(o) {
        var u = this.buildPath({ endpointName: "plugin" });
        return this.client.post(u, o);
      }, i.prototype.uninstallPlugin = function(o) {
        var u = this.buildPath({ endpointName: "plugin" });
        return this.client.delete(u, o);
      }, i;
    }(t.BaseClient)
  );
  return An.PluginClient = r, An;
}
var ki = {}, $t = {}, Ti, as;
function kp() {
  if (as) return Ti;
  as = 1;
  function e(h, y) {
    return function() {
      return h.apply(y, arguments);
    };
  }
  const { toString: t } = Object.prototype, { getPrototypeOf: r } = Object, n = /* @__PURE__ */ ((h) => (y) => {
    const S = t.call(y);
    return h[S] || (h[S] = S.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), i = (h) => (h = h.toLowerCase(), (y) => n(y) === h), o = (h) => (y) => typeof y === h, { isArray: u } = Array, c = o("undefined");
  function s(h) {
    return h !== null && !c(h) && h.constructor !== null && !c(h.constructor) && m(h.constructor.isBuffer) && h.constructor.isBuffer(h);
  }
  const l = i("ArrayBuffer");
  function f(h) {
    let y;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? y = ArrayBuffer.isView(h) : y = h && h.buffer && l(h.buffer), y;
  }
  const p = o("string"), m = o("function"), g = o("number"), b = (h) => h !== null && typeof h == "object", d = (h) => h === !0 || h === !1, a = (h) => {
    if (n(h) !== "object")
      return !1;
    const y = r(h);
    return (y === null || y === Object.prototype || Object.getPrototypeOf(y) === null) && !(Symbol.toStringTag in h) && !(Symbol.iterator in h);
  }, w = i("Date"), v = i("File"), _ = i("Blob"), E = i("FileList"), P = (h) => b(h) && m(h.pipe), R = (h) => {
    let y;
    return h && (typeof FormData == "function" && h instanceof FormData || m(h.append) && ((y = n(h)) === "formdata" || // detect form-data instance
    y === "object" && m(h.toString) && h.toString() === "[object FormData]"));
  }, A = i("URLSearchParams"), [I, q, M, F] = ["ReadableStream", "Request", "Response", "Headers"].map(i), W = (h) => h.trim ? h.trim() : h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function ae(h, y, { allOwnKeys: S = !1 } = {}) {
    if (h === null || typeof h > "u")
      return;
    let x, O;
    if (typeof h != "object" && (h = [h]), u(h))
      for (x = 0, O = h.length; x < O; x++)
        y.call(null, h[x], x, h);
    else {
      const C = S ? Object.getOwnPropertyNames(h) : Object.keys(h), k = C.length;
      let L;
      for (x = 0; x < k; x++)
        L = C[x], y.call(null, h[L], L, h);
    }
  }
  function V(h, y) {
    y = y.toLowerCase();
    const S = Object.keys(h);
    let x = S.length, O;
    for (; x-- > 0; )
      if (O = S[x], y === O.toLowerCase())
        return O;
    return null;
  }
  const B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ir, U = (h) => !c(h) && h !== B;
  function z() {
    const { caseless: h } = U(this) && this || {}, y = {}, S = (x, O) => {
      const C = h && V(y, O) || O;
      a(y[C]) && a(x) ? y[C] = z(y[C], x) : a(x) ? y[C] = z({}, x) : u(x) ? y[C] = x.slice() : y[C] = x;
    };
    for (let x = 0, O = arguments.length; x < O; x++)
      arguments[x] && ae(arguments[x], S);
    return y;
  }
  const j = (h, y, S, { allOwnKeys: x } = {}) => (ae(y, (O, C) => {
    S && m(O) ? h[C] = e(O, S) : h[C] = O;
  }, { allOwnKeys: x }), h), Q = (h) => (h.charCodeAt(0) === 65279 && (h = h.slice(1)), h), ee = (h, y, S, x) => {
    h.prototype = Object.create(y.prototype, x), h.prototype.constructor = h, Object.defineProperty(h, "super", {
      value: y.prototype
    }), S && Object.assign(h.prototype, S);
  }, fe = (h, y, S, x) => {
    let O, C, k;
    const L = {};
    if (y = y || {}, h == null) return y;
    do {
      for (O = Object.getOwnPropertyNames(h), C = O.length; C-- > 0; )
        k = O[C], (!x || x(k, h, y)) && !L[k] && (y[k] = h[k], L[k] = !0);
      h = S !== !1 && r(h);
    } while (h && (!S || S(h, y)) && h !== Object.prototype);
    return y;
  }, me = (h, y, S) => {
    h = String(h), (S === void 0 || S > h.length) && (S = h.length), S -= y.length;
    const x = h.indexOf(y, S);
    return x !== -1 && x === S;
  }, xe = (h) => {
    if (!h) return null;
    if (u(h)) return h;
    let y = h.length;
    if (!g(y)) return null;
    const S = new Array(y);
    for (; y-- > 0; )
      S[y] = h[y];
    return S;
  }, Se = /* @__PURE__ */ ((h) => (y) => h && y instanceof h)(typeof Uint8Array < "u" && r(Uint8Array)), N = (h, y) => {
    const x = (h && h[Symbol.iterator]).call(h);
    let O;
    for (; (O = x.next()) && !O.done; ) {
      const C = O.value;
      y.call(h, C[0], C[1]);
    }
  }, G = (h, y) => {
    let S;
    const x = [];
    for (; (S = h.exec(y)) !== null; )
      x.push(S);
    return x;
  }, ve = i("HTMLFormElement"), Oe = (h) => h.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function(S, x, O) {
      return x.toUpperCase() + O;
    }
  ), ge = (({ hasOwnProperty: h }) => (y, S) => h.call(y, S))(Object.prototype), Z = i("RegExp"), ye = (h, y) => {
    const S = Object.getOwnPropertyDescriptors(h), x = {};
    ae(S, (O, C) => {
      let k;
      (k = y(O, C, h)) !== !1 && (x[C] = k || O);
    }), Object.defineProperties(h, x);
  }, he = (h) => {
    ye(h, (y, S) => {
      if (m(h) && ["arguments", "caller", "callee"].indexOf(S) !== -1)
        return !1;
      const x = h[S];
      if (m(x)) {
        if (y.enumerable = !1, "writable" in y) {
          y.writable = !1;
          return;
        }
        y.set || (y.set = () => {
          throw Error("Can not rewrite read-only method '" + S + "'");
        });
      }
    });
  }, Ce = (h, y) => {
    const S = {}, x = (O) => {
      O.forEach((C) => {
        S[C] = !0;
      });
    };
    return u(h) ? x(h) : x(String(h).split(y)), S;
  }, Ge = () => {
  }, rt = (h, y) => h != null && Number.isFinite(h = +h) ? h : y, qe = "abcdefghijklmnopqrstuvwxyz", Xe = "0123456789", tt = {
    DIGIT: Xe,
    ALPHA: qe,
    ALPHA_DIGIT: qe + qe.toUpperCase() + Xe
  }, Lt = (h = 16, y = tt.ALPHA_DIGIT) => {
    let S = "";
    const { length: x } = y;
    for (; h--; )
      S += y[Math.random() * x | 0];
    return S;
  };
  function wt(h) {
    return !!(h && m(h.append) && h[Symbol.toStringTag] === "FormData" && h[Symbol.iterator]);
  }
  const st = (h) => {
    const y = new Array(10), S = (x, O) => {
      if (b(x)) {
        if (y.indexOf(x) >= 0)
          return;
        if (!("toJSON" in x)) {
          y[O] = x;
          const C = u(x) ? [] : {};
          return ae(x, (k, L) => {
            const te = S(k, O + 1);
            !c(te) && (C[L] = te);
          }), y[O] = void 0, C;
        }
      }
      return x;
    };
    return S(h, 0);
  }, Ut = i("AsyncFunction"), Vt = (h) => h && (b(h) || m(h)) && m(h.then) && m(h.catch), kt = ((h, y) => h ? setImmediate : y ? ((S, x) => (B.addEventListener("message", ({ source: O, data: C }) => {
    O === B && C === S && x.length && x.shift()();
  }, !1), (O) => {
    x.push(O), B.postMessage(S, "*");
  }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(
    typeof setImmediate == "function",
    m(B.postMessage)
  ), ri = typeof queueMicrotask < "u" ? queueMicrotask.bind(B) : typeof process < "u" && process.nextTick || kt;
  var $ = {
    isArray: u,
    isArrayBuffer: l,
    isBuffer: s,
    isFormData: R,
    isArrayBufferView: f,
    isString: p,
    isNumber: g,
    isBoolean: d,
    isObject: b,
    isPlainObject: a,
    isReadableStream: I,
    isRequest: q,
    isResponse: M,
    isHeaders: F,
    isUndefined: c,
    isDate: w,
    isFile: v,
    isBlob: _,
    isRegExp: Z,
    isFunction: m,
    isStream: P,
    isURLSearchParams: A,
    isTypedArray: Se,
    isFileList: E,
    forEach: ae,
    merge: z,
    extend: j,
    trim: W,
    stripBOM: Q,
    inherits: ee,
    toFlatObject: fe,
    kindOf: n,
    kindOfTest: i,
    endsWith: me,
    toArray: xe,
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
    toFiniteNumber: rt,
    findKey: V,
    global: B,
    isContextDefined: U,
    ALPHABET: tt,
    generateString: Lt,
    isSpecCompliantForm: wt,
    toJSONObject: st,
    isAsyncFn: Ut,
    isThenable: Vt,
    setImmediate: kt,
    asap: ri
  };
  function ue(h, y, S, x, O) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = h, this.name = "AxiosError", y && (this.code = y), S && (this.config = S), x && (this.request = x), O && (this.response = O, this.status = O.status ? O.status : null);
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
  const sr = ue.prototype, Wt = {};
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
  ].forEach((h) => {
    Wt[h] = { value: h };
  }), Object.defineProperties(ue, Wt), Object.defineProperty(sr, "isAxiosError", { value: !0 }), ue.from = (h, y, S, x, O, C) => {
    const k = Object.create(sr);
    return $.toFlatObject(h, k, function(te) {
      return te !== Error.prototype;
    }, (L) => L !== "isAxiosError"), ue.call(k, h.message, y, S, x, O), k.cause = h, k.name = h.name, C && Object.assign(k, C), k;
  };
  var qn = null;
  function un(h) {
    return $.isPlainObject(h) || $.isArray(h);
  }
  function lr(h) {
    return $.endsWith(h, "[]") ? h.slice(0, -2) : h;
  }
  function ur(h, y, S) {
    return h ? h.concat(y).map(function(O, C) {
      return O = lr(O), !S && C ? "[" + O + "]" : O;
    }).join(S ? "." : "") : y;
  }
  function Fn(h) {
    return $.isArray(h) && !h.some(un);
  }
  const cn = $.toFlatObject($, {}, null, function(y) {
    return /^is[A-Z]/.test(y);
  });
  function T(h, y, S) {
    if (!$.isObject(h))
      throw new TypeError("target must be an object");
    y = y || new FormData(), S = $.toFlatObject(S, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(pe, ie) {
      return !$.isUndefined(ie[pe]);
    });
    const x = S.metaTokens, O = S.visitor || Y, C = S.dots, k = S.indexes, te = (S.Blob || typeof Blob < "u" && Blob) && $.isSpecCompliantForm(y);
    if (!$.isFunction(O))
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
      let je = re;
      if (re && !ie && typeof re == "object") {
        if ($.endsWith(pe, "{}"))
          pe = x ? pe : pe.slice(0, -2), re = JSON.stringify(re);
        else if ($.isArray(re) && Fn(re) || ($.isFileList(re) || $.endsWith(pe, "[]")) && (je = $.toArray(re)))
          return pe = lr(pe), je.forEach(function(Ke, Dt) {
            !($.isUndefined(Ke) || Ke === null) && y.append(
              // eslint-disable-next-line no-nested-ternary
              k === !0 ? ur([pe], Dt, C) : k === null ? pe : pe + "[]",
              K(Ke)
            );
          }), !1;
      }
      return un(re) ? !0 : (y.append(ur(ie, pe, C), K(re)), !1);
    }
    const ne = [], ke = Object.assign(cn, {
      defaultVisitor: Y,
      convertValue: K,
      isVisitable: un
    });
    function Ve(re, pe) {
      if (!$.isUndefined(re)) {
        if (ne.indexOf(re) !== -1)
          throw Error("Circular reference detected in " + pe.join("."));
        ne.push(re), $.forEach(re, function(je, We) {
          (!($.isUndefined(je) || je === null) && O.call(
            y,
            je,
            $.isString(We) ? We.trim() : We,
            pe,
            ke
          )) === !0 && Ve(je, pe ? pe.concat(We) : [We]);
        }), ne.pop();
      }
    }
    if (!$.isObject(h))
      throw new TypeError("data must be an object");
    return Ve(h), y;
  }
  function D(h) {
    const y = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(h).replace(/[!'()~]|%20|%00/g, function(x) {
      return y[x];
    });
  }
  function we(h, y) {
    this._pairs = [], h && T(h, this, y);
  }
  const Re = we.prototype;
  Re.append = function(y, S) {
    this._pairs.push([y, S]);
  }, Re.toString = function(y) {
    const S = y ? function(x) {
      return y.call(this, x, D);
    } : D;
    return this._pairs.map(function(O) {
      return S(O[0]) + "=" + S(O[1]);
    }, "").join("&");
  };
  function Pe(h) {
    return encodeURIComponent(h).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function de(h, y, S) {
    if (!y)
      return h;
    const x = S && S.encode || Pe;
    $.isFunction(S) && (S = {
      serialize: S
    });
    const O = S && S.serialize;
    let C;
    if (O ? C = O(y, S) : C = $.isURLSearchParams(y) ? y.toString() : new we(y, S).toString(x), C) {
      const k = h.indexOf("#");
      k !== -1 && (h = h.slice(0, k)), h += (h.indexOf("?") === -1 ? "?" : "&") + C;
    }
    return h;
  }
  class _t {
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
    use(y, S, x) {
      return this.handlers.push({
        fulfilled: y,
        rejected: S,
        synchronous: x ? x.synchronous : !1,
        runWhen: x ? x.runWhen : null
      }), this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(y) {
      this.handlers[y] && (this.handlers[y] = null);
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
    forEach(y) {
      $.forEach(this.handlers, function(x) {
        x !== null && y(x);
      });
    }
  }
  var St = _t, Ze = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }, xt = typeof URLSearchParams < "u" ? URLSearchParams : we, Bn = typeof FormData < "u" ? FormData : null, Ht = typeof Blob < "u" ? Blob : null, lt = {
    isBrowser: !0,
    classes: {
      URLSearchParams: xt,
      FormData: Bn,
      Blob: Ht
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const fn = typeof window < "u" && typeof document < "u", dn = typeof navigator == "object" && navigator || void 0, cr = fn && (!dn || ["ReactNative", "NativeScript", "NS"].indexOf(dn.product) < 0), Jt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ln = fn && window.location.href || "http://localhost";
  var pn = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    hasBrowserEnv: fn,
    hasStandardBrowserWebWorkerEnv: Jt,
    hasStandardBrowserEnv: cr,
    navigator: dn,
    origin: Ln
  }), Fe = {
    ...pn,
    ...lt
  };
  function Un(h, y) {
    return T(h, new Fe.classes.URLSearchParams(), Object.assign({
      visitor: function(S, x, O, C) {
        return Fe.isNode && $.isBuffer(S) ? (this.append(x, S.toString("base64")), !1) : C.defaultVisitor.apply(this, arguments);
      }
    }, y));
  }
  function fr(h) {
    return $.matchAll(/\w+|\[(\w*)]/g, h).map((y) => y[0] === "[]" ? "" : y[1] || y[0]);
  }
  function dr(h) {
    const y = {}, S = Object.keys(h);
    let x;
    const O = S.length;
    let C;
    for (x = 0; x < O; x++)
      C = S[x], y[C] = h[C];
    return y;
  }
  function hn(h) {
    function y(S, x, O, C) {
      let k = S[C++];
      if (k === "__proto__") return !0;
      const L = Number.isFinite(+k), te = C >= S.length;
      return k = !k && $.isArray(O) ? O.length : k, te ? ($.hasOwnProp(O, k) ? O[k] = [O[k], x] : O[k] = x, !L) : ((!O[k] || !$.isObject(O[k])) && (O[k] = []), y(S, x, O[k], C) && $.isArray(O[k]) && (O[k] = dr(O[k])), !L);
    }
    if ($.isFormData(h) && $.isFunction(h.entries)) {
      const S = {};
      return $.forEachEntry(h, (x, O) => {
        y(fr(x), O, S, 0);
      }), S;
    }
    return null;
  }
  function pr(h, y, S) {
    if ($.isString(h))
      try {
        return (y || JSON.parse)(h), $.trim(h);
      } catch (x) {
        if (x.name !== "SyntaxError")
          throw x;
      }
    return (0, JSON.stringify)(h);
  }
  const Qt = {
    transitional: Ze,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(y, S) {
      const x = S.getContentType() || "", O = x.indexOf("application/json") > -1, C = $.isObject(y);
      if (C && $.isHTMLForm(y) && (y = new FormData(y)), $.isFormData(y))
        return O ? JSON.stringify(hn(y)) : y;
      if ($.isArrayBuffer(y) || $.isBuffer(y) || $.isStream(y) || $.isFile(y) || $.isBlob(y) || $.isReadableStream(y))
        return y;
      if ($.isArrayBufferView(y))
        return y.buffer;
      if ($.isURLSearchParams(y))
        return S.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), y.toString();
      let L;
      if (C) {
        if (x.indexOf("application/x-www-form-urlencoded") > -1)
          return Un(y, this.formSerializer).toString();
        if ((L = $.isFileList(y)) || x.indexOf("multipart/form-data") > -1) {
          const te = this.env && this.env.FormData;
          return T(
            L ? { "files[]": y } : y,
            te && new te(),
            this.formSerializer
          );
        }
      }
      return C || O ? (S.setContentType("application/json", !1), pr(y)) : y;
    }],
    transformResponse: [function(y) {
      const S = this.transitional || Qt.transitional, x = S && S.forcedJSONParsing, O = this.responseType === "json";
      if ($.isResponse(y) || $.isReadableStream(y))
        return y;
      if (y && $.isString(y) && (x && !this.responseType || O)) {
        const k = !(S && S.silentJSONParsing) && O;
        try {
          return JSON.parse(y);
        } catch (L) {
          if (k)
            throw L.name === "SyntaxError" ? ue.from(L, ue.ERR_BAD_RESPONSE, this, null, this.response) : L;
        }
      }
      return y;
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
      FormData: Fe.classes.FormData,
      Blob: Fe.classes.Blob
    },
    validateStatus: function(y) {
      return y >= 200 && y < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  $.forEach(["delete", "get", "head", "post", "put", "patch"], (h) => {
    Qt.headers[h] = {};
  });
  var mn = Qt;
  const ii = $.toObjectSet([
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
  var Vn = (h) => {
    const y = {};
    let S, x, O;
    return h && h.split(`
`).forEach(function(k) {
      O = k.indexOf(":"), S = k.substring(0, O).trim().toLowerCase(), x = k.substring(O + 1).trim(), !(!S || y[S] && ii[S]) && (S === "set-cookie" ? y[S] ? y[S].push(x) : y[S] = [x] : y[S] = y[S] ? y[S] + ", " + x : x);
    }), y;
  };
  const Tt = Symbol("internals");
  function Et(h) {
    return h && String(h).trim().toLowerCase();
  }
  function yn(h) {
    return h === !1 || h == null ? h : $.isArray(h) ? h.map(yn) : String(h);
  }
  function hr(h) {
    const y = /* @__PURE__ */ Object.create(null), S = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let x;
    for (; x = S.exec(h); )
      y[x[1]] = x[2];
    return y;
  }
  const Kl = (h) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(h.trim());
  function oi(h, y, S, x, O) {
    if ($.isFunction(x))
      return x.call(this, y, S);
    if (O && (y = S), !!$.isString(y)) {
      if ($.isString(x))
        return y.indexOf(x) !== -1;
      if ($.isRegExp(x))
        return x.test(y);
    }
  }
  function zl(h) {
    return h.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (y, S, x) => S.toUpperCase() + x);
  }
  function Yl(h, y) {
    const S = $.toCamelCase(" " + y);
    ["get", "set", "has"].forEach((x) => {
      Object.defineProperty(h, x + S, {
        value: function(O, C, k) {
          return this[x].call(this, y, O, C, k);
        },
        configurable: !0
      });
    });
  }
  class mr {
    constructor(y) {
      y && this.set(y);
    }
    set(y, S, x) {
      const O = this;
      function C(L, te, K) {
        const Y = Et(te);
        if (!Y)
          throw new Error("header name must be a non-empty string");
        const ne = $.findKey(O, Y);
        (!ne || O[ne] === void 0 || K === !0 || K === void 0 && O[ne] !== !1) && (O[ne || te] = yn(L));
      }
      const k = (L, te) => $.forEach(L, (K, Y) => C(K, Y, te));
      if ($.isPlainObject(y) || y instanceof this.constructor)
        k(y, S);
      else if ($.isString(y) && (y = y.trim()) && !Kl(y))
        k(Vn(y), S);
      else if ($.isHeaders(y))
        for (const [L, te] of y.entries())
          C(te, L, x);
      else
        y != null && C(S, y, x);
      return this;
    }
    get(y, S) {
      if (y = Et(y), y) {
        const x = $.findKey(this, y);
        if (x) {
          const O = this[x];
          if (!S)
            return O;
          if (S === !0)
            return hr(O);
          if ($.isFunction(S))
            return S.call(this, O, x);
          if ($.isRegExp(S))
            return S.exec(O);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(y, S) {
      if (y = Et(y), y) {
        const x = $.findKey(this, y);
        return !!(x && this[x] !== void 0 && (!S || oi(this, this[x], x, S)));
      }
      return !1;
    }
    delete(y, S) {
      const x = this;
      let O = !1;
      function C(k) {
        if (k = Et(k), k) {
          const L = $.findKey(x, k);
          L && (!S || oi(x, x[L], L, S)) && (delete x[L], O = !0);
        }
      }
      return $.isArray(y) ? y.forEach(C) : C(y), O;
    }
    clear(y) {
      const S = Object.keys(this);
      let x = S.length, O = !1;
      for (; x--; ) {
        const C = S[x];
        (!y || oi(this, this[C], C, y, !0)) && (delete this[C], O = !0);
      }
      return O;
    }
    normalize(y) {
      const S = this, x = {};
      return $.forEach(this, (O, C) => {
        const k = $.findKey(x, C);
        if (k) {
          S[k] = yn(O), delete S[C];
          return;
        }
        const L = y ? zl(C) : String(C).trim();
        L !== C && delete S[C], S[L] = yn(O), x[L] = !0;
      }), this;
    }
    concat(...y) {
      return this.constructor.concat(this, ...y);
    }
    toJSON(y) {
      const S = /* @__PURE__ */ Object.create(null);
      return $.forEach(this, (x, O) => {
        x != null && x !== !1 && (S[O] = y && $.isArray(x) ? x.join(", ") : x);
      }), S;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([y, S]) => y + ": " + S).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(y) {
      return y instanceof this ? y : new this(y);
    }
    static concat(y, ...S) {
      const x = new this(y);
      return S.forEach((O) => x.set(O)), x;
    }
    static accessor(y) {
      const x = (this[Tt] = this[Tt] = {
        accessors: {}
      }).accessors, O = this.prototype;
      function C(k) {
        const L = Et(k);
        x[L] || (Yl(O, k), x[L] = !0);
      }
      return $.isArray(y) ? y.forEach(C) : C(y), this;
    }
  }
  mr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), $.reduceDescriptors(mr.prototype, ({ value: h }, y) => {
    let S = y[0].toUpperCase() + y.slice(1);
    return {
      get: () => h,
      set(x) {
        this[S] = x;
      }
    };
  }), $.freezeMethods(mr);
  var mt = mr;
  function ai(h, y) {
    const S = this || mn, x = y || S, O = mt.from(x.headers);
    let C = x.data;
    return $.forEach(h, function(L) {
      C = L.call(S, C, O.normalize(), y ? y.status : void 0);
    }), O.normalize(), C;
  }
  function Ko(h) {
    return !!(h && h.__CANCEL__);
  }
  function vn(h, y, S) {
    ue.call(this, h ?? "canceled", ue.ERR_CANCELED, y, S), this.name = "CanceledError";
  }
  $.inherits(vn, ue, {
    __CANCEL__: !0
  });
  function zo(h, y, S) {
    const x = S.config.validateStatus;
    !S.status || !x || x(S.status) ? h(S) : y(new ue(
      "Request failed with status code " + S.status,
      [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][Math.floor(S.status / 100) - 4],
      S.config,
      S.request,
      S
    ));
  }
  function Xl(h) {
    const y = /^([-+\w]{1,25})(:?\/\/|:)/.exec(h);
    return y && y[1] || "";
  }
  function Jl(h, y) {
    h = h || 10;
    const S = new Array(h), x = new Array(h);
    let O = 0, C = 0, k;
    return y = y !== void 0 ? y : 1e3, function(te) {
      const K = Date.now(), Y = x[C];
      k || (k = K), S[O] = te, x[O] = K;
      let ne = C, ke = 0;
      for (; ne !== O; )
        ke += S[ne++], ne = ne % h;
      if (O = (O + 1) % h, O === C && (C = (C + 1) % h), K - k < y)
        return;
      const Ve = Y && K - Y;
      return Ve ? Math.round(ke * 1e3 / Ve) : void 0;
    };
  }
  function Ql(h, y) {
    let S = 0, x = 1e3 / y, O, C;
    const k = (K, Y = Date.now()) => {
      S = Y, O = null, C && (clearTimeout(C), C = null), h.apply(null, K);
    };
    return [(...K) => {
      const Y = Date.now(), ne = Y - S;
      ne >= x ? k(K, Y) : (O = K, C || (C = setTimeout(() => {
        C = null, k(O);
      }, x - ne)));
    }, () => O && k(O)];
  }
  const yr = (h, y, S = 3) => {
    let x = 0;
    const O = Jl(50, 250);
    return Ql((C) => {
      const k = C.loaded, L = C.lengthComputable ? C.total : void 0, te = k - x, K = O(te), Y = k <= L;
      x = k;
      const ne = {
        loaded: k,
        total: L,
        progress: L ? k / L : void 0,
        bytes: te,
        rate: K || void 0,
        estimated: K && L && Y ? (L - k) / K : void 0,
        event: C,
        lengthComputable: L != null,
        [y ? "download" : "upload"]: !0
      };
      h(ne);
    }, S);
  }, Yo = (h, y) => {
    const S = h != null;
    return [(x) => y[0]({
      lengthComputable: S,
      total: h,
      loaded: x
    }), y[1]];
  }, Xo = (h) => (...y) => $.asap(() => h(...y));
  var Zl = Fe.hasStandardBrowserEnv ? /* @__PURE__ */ ((h, y) => (S) => (S = new URL(S, Fe.origin), h.protocol === S.protocol && h.host === S.host && (y || h.port === S.port)))(
    new URL(Fe.origin),
    Fe.navigator && /(msie|trident)/i.test(Fe.navigator.userAgent)
  ) : () => !0, eu = Fe.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(h, y, S, x, O, C) {
        const k = [h + "=" + encodeURIComponent(y)];
        $.isNumber(S) && k.push("expires=" + new Date(S).toGMTString()), $.isString(x) && k.push("path=" + x), $.isString(O) && k.push("domain=" + O), C === !0 && k.push("secure"), document.cookie = k.join("; ");
      },
      read(h) {
        const y = document.cookie.match(new RegExp("(^|;\\s*)(" + h + ")=([^;]*)"));
        return y ? decodeURIComponent(y[3]) : null;
      },
      remove(h) {
        this.write(h, "", Date.now() - 864e5);
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
  function tu(h) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(h);
  }
  function nu(h, y) {
    return y ? h.replace(/\/?\/$/, "") + "/" + y.replace(/^\/+/, "") : h;
  }
  function Jo(h, y) {
    return h && !tu(y) ? nu(h, y) : y;
  }
  const Qo = (h) => h instanceof mt ? { ...h } : h;
  function Zt(h, y) {
    y = y || {};
    const S = {};
    function x(K, Y, ne, ke) {
      return $.isPlainObject(K) && $.isPlainObject(Y) ? $.merge.call({ caseless: ke }, K, Y) : $.isPlainObject(Y) ? $.merge({}, Y) : $.isArray(Y) ? Y.slice() : Y;
    }
    function O(K, Y, ne, ke) {
      if ($.isUndefined(Y)) {
        if (!$.isUndefined(K))
          return x(void 0, K, ne, ke);
      } else return x(K, Y, ne, ke);
    }
    function C(K, Y) {
      if (!$.isUndefined(Y))
        return x(void 0, Y);
    }
    function k(K, Y) {
      if ($.isUndefined(Y)) {
        if (!$.isUndefined(K))
          return x(void 0, K);
      } else return x(void 0, Y);
    }
    function L(K, Y, ne) {
      if (ne in y)
        return x(K, Y);
      if (ne in h)
        return x(void 0, K);
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
      headers: (K, Y, ne) => O(Qo(K), Qo(Y), ne, !0)
    };
    return $.forEach(Object.keys(Object.assign({}, h, y)), function(Y) {
      const ne = te[Y] || O, ke = ne(h[Y], y[Y], Y);
      $.isUndefined(ke) && ne !== L || (S[Y] = ke);
    }), S;
  }
  var Zo = (h) => {
    const y = Zt({}, h);
    let { data: S, withXSRFToken: x, xsrfHeaderName: O, xsrfCookieName: C, headers: k, auth: L } = y;
    y.headers = k = mt.from(k), y.url = de(Jo(y.baseURL, y.url), h.params, h.paramsSerializer), L && k.set(
      "Authorization",
      "Basic " + btoa((L.username || "") + ":" + (L.password ? unescape(encodeURIComponent(L.password)) : ""))
    );
    let te;
    if ($.isFormData(S)) {
      if (Fe.hasStandardBrowserEnv || Fe.hasStandardBrowserWebWorkerEnv)
        k.setContentType(void 0);
      else if ((te = k.getContentType()) !== !1) {
        const [K, ...Y] = te ? te.split(";").map((ne) => ne.trim()).filter(Boolean) : [];
        k.setContentType([K || "multipart/form-data", ...Y].join("; "));
      }
    }
    if (Fe.hasStandardBrowserEnv && (x && $.isFunction(x) && (x = x(y)), x || x !== !1 && Zl(y.url))) {
      const K = O && C && eu.read(C);
      K && k.set(O, K);
    }
    return y;
  }, ru = typeof XMLHttpRequest < "u" && function(h) {
    return new Promise(function(S, x) {
      const O = Zo(h);
      let C = O.data;
      const k = mt.from(O.headers).normalize();
      let { responseType: L, onUploadProgress: te, onDownloadProgress: K } = O, Y, ne, ke, Ve, re;
      function pe() {
        Ve && Ve(), re && re(), O.cancelToken && O.cancelToken.unsubscribe(Y), O.signal && O.signal.removeEventListener("abort", Y);
      }
      let ie = new XMLHttpRequest();
      ie.open(O.method.toUpperCase(), O.url, !0), ie.timeout = O.timeout;
      function je() {
        if (!ie)
          return;
        const Ke = mt.from(
          "getAllResponseHeaders" in ie && ie.getAllResponseHeaders()
        ), it = {
          data: !L || L === "text" || L === "json" ? ie.responseText : ie.response,
          status: ie.status,
          statusText: ie.statusText,
          headers: Ke,
          config: h,
          request: ie
        };
        zo(function(en) {
          S(en), pe();
        }, function(en) {
          x(en), pe();
        }, it), ie = null;
      }
      "onloadend" in ie ? ie.onloadend = je : ie.onreadystatechange = function() {
        !ie || ie.readyState !== 4 || ie.status === 0 && !(ie.responseURL && ie.responseURL.indexOf("file:") === 0) || setTimeout(je);
      }, ie.onabort = function() {
        ie && (x(new ue("Request aborted", ue.ECONNABORTED, h, ie)), ie = null);
      }, ie.onerror = function() {
        x(new ue("Network Error", ue.ERR_NETWORK, h, ie)), ie = null;
      }, ie.ontimeout = function() {
        let Dt = O.timeout ? "timeout of " + O.timeout + "ms exceeded" : "timeout exceeded";
        const it = O.transitional || Ze;
        O.timeoutErrorMessage && (Dt = O.timeoutErrorMessage), x(new ue(
          Dt,
          it.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
          h,
          ie
        )), ie = null;
      }, C === void 0 && k.setContentType(null), "setRequestHeader" in ie && $.forEach(k.toJSON(), function(Dt, it) {
        ie.setRequestHeader(it, Dt);
      }), $.isUndefined(O.withCredentials) || (ie.withCredentials = !!O.withCredentials), L && L !== "json" && (ie.responseType = O.responseType), K && ([ke, re] = yr(K, !0), ie.addEventListener("progress", ke)), te && ie.upload && ([ne, Ve] = yr(te), ie.upload.addEventListener("progress", ne), ie.upload.addEventListener("loadend", Ve)), (O.cancelToken || O.signal) && (Y = (Ke) => {
        ie && (x(!Ke || Ke.type ? new vn(null, h, ie) : Ke), ie.abort(), ie = null);
      }, O.cancelToken && O.cancelToken.subscribe(Y), O.signal && (O.signal.aborted ? Y() : O.signal.addEventListener("abort", Y)));
      const We = Xl(O.url);
      if (We && Fe.protocols.indexOf(We) === -1) {
        x(new ue("Unsupported protocol " + We + ":", ue.ERR_BAD_REQUEST, h));
        return;
      }
      ie.send(C || null);
    });
  }, iu = (h, y) => {
    const { length: S } = h = h ? h.filter(Boolean) : [];
    if (y || S) {
      let x = new AbortController(), O;
      const C = function(K) {
        if (!O) {
          O = !0, L();
          const Y = K instanceof Error ? K : this.reason;
          x.abort(Y instanceof ue ? Y : new vn(Y instanceof Error ? Y.message : Y));
        }
      };
      let k = y && setTimeout(() => {
        k = null, C(new ue(`timeout ${y} of ms exceeded`, ue.ETIMEDOUT));
      }, y);
      const L = () => {
        h && (k && clearTimeout(k), k = null, h.forEach((K) => {
          K.unsubscribe ? K.unsubscribe(C) : K.removeEventListener("abort", C);
        }), h = null);
      };
      h.forEach((K) => K.addEventListener("abort", C));
      const { signal: te } = x;
      return te.unsubscribe = () => $.asap(L), te;
    }
  };
  const ou = function* (h, y) {
    let S = h.byteLength;
    if (S < y) {
      yield h;
      return;
    }
    let x = 0, O;
    for (; x < S; )
      O = x + y, yield h.slice(x, O), x = O;
  }, au = async function* (h, y) {
    for await (const S of su(h))
      yield* ou(S, y);
  }, su = async function* (h) {
    if (h[Symbol.asyncIterator]) {
      yield* h;
      return;
    }
    const y = h.getReader();
    try {
      for (; ; ) {
        const { done: S, value: x } = await y.read();
        if (S)
          break;
        yield x;
      }
    } finally {
      await y.cancel();
    }
  }, ea = (h, y, S, x) => {
    const O = au(h, y);
    let C = 0, k, L = (te) => {
      k || (k = !0, x && x(te));
    };
    return new ReadableStream({
      async pull(te) {
        try {
          const { done: K, value: Y } = await O.next();
          if (K) {
            L(), te.close();
            return;
          }
          let ne = Y.byteLength;
          if (S) {
            let ke = C += ne;
            S(ke);
          }
          te.enqueue(new Uint8Array(Y));
        } catch (K) {
          throw L(K), K;
        }
      },
      cancel(te) {
        return L(te), O.return();
      }
    }, {
      highWaterMark: 2
    });
  }, vr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ta = vr && typeof ReadableStream == "function", lu = vr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((h) => (y) => h.encode(y))(new TextEncoder()) : async (h) => new Uint8Array(await new Response(h).arrayBuffer())), na = (h, ...y) => {
    try {
      return !!h(...y);
    } catch {
      return !1;
    }
  }, uu = ta && na(() => {
    let h = !1;
    const y = new Request(Fe.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !y;
  }), ra = 64 * 1024, si = ta && na(() => $.isReadableStream(new Response("").body)), gr = {
    stream: si && ((h) => h.body)
  };
  vr && ((h) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((y) => {
      !gr[y] && (gr[y] = $.isFunction(h[y]) ? (S) => S[y]() : (S, x) => {
        throw new ue(`Response type '${y}' is not supported`, ue.ERR_NOT_SUPPORT, x);
      });
    });
  })(new Response());
  const cu = async (h) => {
    if (h == null)
      return 0;
    if ($.isBlob(h))
      return h.size;
    if ($.isSpecCompliantForm(h))
      return (await new Request(Fe.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if ($.isArrayBufferView(h) || $.isArrayBuffer(h))
      return h.byteLength;
    if ($.isURLSearchParams(h) && (h = h + ""), $.isString(h))
      return (await lu(h)).byteLength;
  }, fu = async (h, y) => {
    const S = $.toFiniteNumber(h.getContentLength());
    return S ?? cu(y);
  };
  var du = vr && (async (h) => {
    let {
      url: y,
      method: S,
      data: x,
      signal: O,
      cancelToken: C,
      timeout: k,
      onDownloadProgress: L,
      onUploadProgress: te,
      responseType: K,
      headers: Y,
      withCredentials: ne = "same-origin",
      fetchOptions: ke
    } = Zo(h);
    K = K ? (K + "").toLowerCase() : "text";
    let Ve = iu([O, C && C.toAbortSignal()], k), re;
    const pe = Ve && Ve.unsubscribe && (() => {
      Ve.unsubscribe();
    });
    let ie;
    try {
      if (te && uu && S !== "get" && S !== "head" && (ie = await fu(Y, x)) !== 0) {
        let it = new Request(y, {
          method: "POST",
          body: x,
          duplex: "half"
        }), Gt;
        if ($.isFormData(x) && (Gt = it.headers.get("content-type")) && Y.setContentType(Gt), it.body) {
          const [en, xr] = Yo(
            ie,
            yr(Xo(te))
          );
          x = ea(it.body, ra, en, xr);
        }
      }
      $.isString(ne) || (ne = ne ? "include" : "omit");
      const je = "credentials" in Request.prototype;
      re = new Request(y, {
        ...ke,
        signal: Ve,
        method: S.toUpperCase(),
        headers: Y.normalize().toJSON(),
        body: x,
        duplex: "half",
        credentials: je ? ne : void 0
      });
      let We = await fetch(re);
      const Ke = si && (K === "stream" || K === "response");
      if (si && (L || Ke && pe)) {
        const it = {};
        ["status", "statusText", "headers"].forEach((ca) => {
          it[ca] = We[ca];
        });
        const Gt = $.toFiniteNumber(We.headers.get("content-length")), [en, xr] = L && Yo(
          Gt,
          yr(Xo(L), !0)
        ) || [];
        We = new Response(
          ea(We.body, ra, en, () => {
            xr && xr(), pe && pe();
          }),
          it
        );
      }
      K = K || "text";
      let Dt = await gr[$.findKey(gr, K) || "text"](We, h);
      return !Ke && pe && pe(), await new Promise((it, Gt) => {
        zo(it, Gt, {
          data: Dt,
          headers: mt.from(We.headers),
          status: We.status,
          statusText: We.statusText,
          config: h,
          request: re
        });
      });
    } catch (je) {
      throw pe && pe(), je && je.name === "TypeError" && /fetch/i.test(je.message) ? Object.assign(
        new ue("Network Error", ue.ERR_NETWORK, h, re),
        {
          cause: je.cause || je
        }
      ) : ue.from(je, je && je.code, h, re);
    }
  });
  const li = {
    http: qn,
    xhr: ru,
    fetch: du
  };
  $.forEach(li, (h, y) => {
    if (h) {
      try {
        Object.defineProperty(h, "name", { value: y });
      } catch {
      }
      Object.defineProperty(h, "adapterName", { value: y });
    }
  });
  const ia = (h) => `- ${h}`, pu = (h) => $.isFunction(h) || h === null || h === !1;
  var oa = {
    getAdapter: (h) => {
      h = $.isArray(h) ? h : [h];
      const { length: y } = h;
      let S, x;
      const O = {};
      for (let C = 0; C < y; C++) {
        S = h[C];
        let k;
        if (x = S, !pu(S) && (x = li[(k = String(S)).toLowerCase()], x === void 0))
          throw new ue(`Unknown adapter '${k}'`);
        if (x)
          break;
        O[k || "#" + C] = x;
      }
      if (!x) {
        const C = Object.entries(O).map(
          ([L, te]) => `adapter ${L} ` + (te === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let k = y ? C.length > 1 ? `since :
` + C.map(ia).join(`
`) : " " + ia(C[0]) : "as no adapter specified";
        throw new ue(
          "There is no suitable adapter to dispatch the request " + k,
          "ERR_NOT_SUPPORT"
        );
      }
      return x;
    },
    adapters: li
  };
  function ui(h) {
    if (h.cancelToken && h.cancelToken.throwIfRequested(), h.signal && h.signal.aborted)
      throw new vn(null, h);
  }
  function aa(h) {
    return ui(h), h.headers = mt.from(h.headers), h.data = ai.call(
      h,
      h.transformRequest
    ), ["post", "put", "patch"].indexOf(h.method) !== -1 && h.headers.setContentType("application/x-www-form-urlencoded", !1), oa.getAdapter(h.adapter || mn.adapter)(h).then(function(x) {
      return ui(h), x.data = ai.call(
        h,
        h.transformResponse,
        x
      ), x.headers = mt.from(x.headers), x;
    }, function(x) {
      return Ko(x) || (ui(h), x && x.response && (x.response.data = ai.call(
        h,
        h.transformResponse,
        x.response
      ), x.response.headers = mt.from(x.response.headers))), Promise.reject(x);
    });
  }
  const sa = "1.7.9", br = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((h, y) => {
    br[h] = function(x) {
      return typeof x === h || "a" + (y < 1 ? "n " : " ") + h;
    };
  });
  const la = {};
  br.transitional = function(y, S, x) {
    function O(C, k) {
      return "[Axios v" + sa + "] Transitional option '" + C + "'" + k + (x ? ". " + x : "");
    }
    return (C, k, L) => {
      if (y === !1)
        throw new ue(
          O(k, " has been removed" + (S ? " in " + S : "")),
          ue.ERR_DEPRECATED
        );
      return S && !la[k] && (la[k] = !0, console.warn(
        O(
          k,
          " has been deprecated since v" + S + " and will be removed in the near future"
        )
      )), y ? y(C, k, L) : !0;
    };
  }, br.spelling = function(y) {
    return (S, x) => (console.warn(`${x} is likely a misspelling of ${y}`), !0);
  };
  function hu(h, y, S) {
    if (typeof h != "object")
      throw new ue("options must be an object", ue.ERR_BAD_OPTION_VALUE);
    const x = Object.keys(h);
    let O = x.length;
    for (; O-- > 0; ) {
      const C = x[O], k = y[C];
      if (k) {
        const L = h[C], te = L === void 0 || k(L, C, h);
        if (te !== !0)
          throw new ue("option " + C + " must be " + te, ue.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (S !== !0)
        throw new ue("Unknown option " + C, ue.ERR_BAD_OPTION);
    }
  }
  var wr = {
    assertOptions: hu,
    validators: br
  };
  const Ot = wr.validators;
  class _r {
    constructor(y) {
      this.defaults = y, this.interceptors = {
        request: new St(),
        response: new St()
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
    async request(y, S) {
      try {
        return await this._request(y, S);
      } catch (x) {
        if (x instanceof Error) {
          let O = {};
          Error.captureStackTrace ? Error.captureStackTrace(O) : O = new Error();
          const C = O.stack ? O.stack.replace(/^.+\n/, "") : "";
          try {
            x.stack ? C && !String(x.stack).endsWith(C.replace(/^.+\n.+\n/, "")) && (x.stack += `
` + C) : x.stack = C;
          } catch {
          }
        }
        throw x;
      }
    }
    _request(y, S) {
      typeof y == "string" ? (S = S || {}, S.url = y) : S = y || {}, S = Zt(this.defaults, S);
      const { transitional: x, paramsSerializer: O, headers: C } = S;
      x !== void 0 && wr.assertOptions(x, {
        silentJSONParsing: Ot.transitional(Ot.boolean),
        forcedJSONParsing: Ot.transitional(Ot.boolean),
        clarifyTimeoutError: Ot.transitional(Ot.boolean)
      }, !1), O != null && ($.isFunction(O) ? S.paramsSerializer = {
        serialize: O
      } : wr.assertOptions(O, {
        encode: Ot.function,
        serialize: Ot.function
      }, !0)), wr.assertOptions(S, {
        baseUrl: Ot.spelling("baseURL"),
        withXsrfToken: Ot.spelling("withXSRFToken")
      }, !0), S.method = (S.method || this.defaults.method || "get").toLowerCase();
      let k = C && $.merge(
        C.common,
        C[S.method]
      );
      C && $.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (re) => {
          delete C[re];
        }
      ), S.headers = mt.concat(k, C);
      const L = [];
      let te = !0;
      this.interceptors.request.forEach(function(pe) {
        typeof pe.runWhen == "function" && pe.runWhen(S) === !1 || (te = te && pe.synchronous, L.unshift(pe.fulfilled, pe.rejected));
      });
      const K = [];
      this.interceptors.response.forEach(function(pe) {
        K.push(pe.fulfilled, pe.rejected);
      });
      let Y, ne = 0, ke;
      if (!te) {
        const re = [aa.bind(this), void 0];
        for (re.unshift.apply(re, L), re.push.apply(re, K), ke = re.length, Y = Promise.resolve(S); ne < ke; )
          Y = Y.then(re[ne++], re[ne++]);
        return Y;
      }
      ke = L.length;
      let Ve = S;
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
        Y = aa.call(this, Ve);
      } catch (re) {
        return Promise.reject(re);
      }
      for (ne = 0, ke = K.length; ne < ke; )
        Y = Y.then(K[ne++], K[ne++]);
      return Y;
    }
    getUri(y) {
      y = Zt(this.defaults, y);
      const S = Jo(y.baseURL, y.url);
      return de(S, y.params, y.paramsSerializer);
    }
  }
  $.forEach(["delete", "get", "head", "options"], function(y) {
    _r.prototype[y] = function(S, x) {
      return this.request(Zt(x || {}, {
        method: y,
        url: S,
        data: (x || {}).data
      }));
    };
  }), $.forEach(["post", "put", "patch"], function(y) {
    function S(x) {
      return function(C, k, L) {
        return this.request(Zt(L || {}, {
          method: y,
          headers: x ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: C,
          data: k
        }));
      };
    }
    _r.prototype[y] = S(), _r.prototype[y + "Form"] = S(!0);
  });
  var Sr = _r;
  class ci {
    constructor(y) {
      if (typeof y != "function")
        throw new TypeError("executor must be a function.");
      let S;
      this.promise = new Promise(function(C) {
        S = C;
      });
      const x = this;
      this.promise.then((O) => {
        if (!x._listeners) return;
        let C = x._listeners.length;
        for (; C-- > 0; )
          x._listeners[C](O);
        x._listeners = null;
      }), this.promise.then = (O) => {
        let C;
        const k = new Promise((L) => {
          x.subscribe(L), C = L;
        }).then(O);
        return k.cancel = function() {
          x.unsubscribe(C);
        }, k;
      }, y(function(C, k, L) {
        x.reason || (x.reason = new vn(C, k, L), S(x.reason));
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
    subscribe(y) {
      if (this.reason) {
        y(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(y) : this._listeners = [y];
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(y) {
      if (!this._listeners)
        return;
      const S = this._listeners.indexOf(y);
      S !== -1 && this._listeners.splice(S, 1);
    }
    toAbortSignal() {
      const y = new AbortController(), S = (x) => {
        y.abort(x);
      };
      return this.subscribe(S), y.signal.unsubscribe = () => this.unsubscribe(S), y.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let y;
      return {
        token: new ci(function(O) {
          y = O;
        }),
        cancel: y
      };
    }
  }
  var mu = ci;
  function yu(h) {
    return function(S) {
      return h.apply(null, S);
    };
  }
  function vu(h) {
    return $.isObject(h) && h.isAxiosError === !0;
  }
  const fi = {
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
  Object.entries(fi).forEach(([h, y]) => {
    fi[y] = h;
  });
  var gu = fi;
  function ua(h) {
    const y = new Sr(h), S = e(Sr.prototype.request, y);
    return $.extend(S, Sr.prototype, y, { allOwnKeys: !0 }), $.extend(S, y, null, { allOwnKeys: !0 }), S.create = function(O) {
      return ua(Zt(h, O));
    }, S;
  }
  const Be = ua(mn);
  return Be.Axios = Sr, Be.CanceledError = vn, Be.CancelToken = mu, Be.isCancel = Ko, Be.VERSION = sa, Be.toFormData = T, Be.AxiosError = ue, Be.Cancel = Be.CanceledError, Be.all = function(y) {
    return Promise.all(y);
  }, Be.spread = yu, Be.isAxiosError = vu, Be.mergeConfig = Zt, Be.AxiosHeaders = mt, Be.formToJSON = (h) => hn($.isHTMLForm(h) ? new FormData(h) : h), Be.getAdapter = oa.getAdapter, Be.HttpStatusCode = gu, Be.default = Be, Ti = Be, Ti;
}
var ss;
function Tp() {
  if (ss) return $t;
  ss = 1;
  var e = $t.__assign || function() {
    return e = Object.assign || function(u) {
      for (var c, s = 1, l = arguments.length; s < l; s++) {
        c = arguments[s];
        for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (u[f] = c[f]);
      }
      return u;
    }, e.apply(this, arguments);
  }, t = $t.__awaiter || function(u, c, s, l) {
    function f(p) {
      return p instanceof s ? p : new s(function(m) {
        m(p);
      });
    }
    return new (s || (s = Promise))(function(p, m) {
      function g(a) {
        try {
          d(l.next(a));
        } catch (w) {
          m(w);
        }
      }
      function b(a) {
        try {
          d(l.throw(a));
        } catch (w) {
          m(w);
        }
      }
      function d(a) {
        a.done ? p(a.value) : f(a.value).then(g, b);
      }
      d((l = l.apply(u, c || [])).next());
    });
  }, r = $t.__generator || function(u, c) {
    var s = { label: 0, sent: function() {
      if (p[0] & 1) throw p[1];
      return p[1];
    }, trys: [], ops: [] }, l, f, p, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return m.next = g(0), m.throw = g(1), m.return = g(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function g(d) {
      return function(a) {
        return b([d, a]);
      };
    }
    function b(d) {
      if (l) throw new TypeError("Generator is already executing.");
      for (; m && (m = 0, d[0] && (s = 0)), s; ) try {
        if (l = 1, f && (p = d[0] & 2 ? f.return : d[0] ? f.throw || ((p = f.return) && p.call(f), 0) : f.next) && !(p = p.call(f, d[1])).done) return p;
        switch (f = 0, p && (d = [d[0] & 2, p.value]), d[0]) {
          case 0:
          case 1:
            p = d;
            break;
          case 4:
            return s.label++, { value: d[1], done: !1 };
          case 5:
            s.label++, f = d[1], d = [0];
            continue;
          case 7:
            d = s.ops.pop(), s.trys.pop();
            continue;
          default:
            if (p = s.trys, !(p = p.length > 0 && p[p.length - 1]) && (d[0] === 6 || d[0] === 2)) {
              s = 0;
              continue;
            }
            if (d[0] === 3 && (!p || d[1] > p[0] && d[1] < p[3])) {
              s.label = d[1];
              break;
            }
            if (d[0] === 6 && s.label < p[1]) {
              s.label = p[1], p = d;
              break;
            }
            if (p && s.label < p[2]) {
              s.label = p[2], s.ops.push(d);
              break;
            }
            p[2] && s.ops.pop(), s.trys.pop();
            continue;
        }
        d = c.call(u, s);
      } catch (a) {
        d = [6, a], f = 0;
      } finally {
        l = p = 0;
      }
      if (d[0] & 5) throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, n = $t.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty($t, "__esModule", { value: !0 }), $t.AxiosClient = void 0;
  var i = n(/* @__PURE__ */ kp()), o = (
    /** @class */
    function() {
      function u(c) {
        var s = c.responseHandler, l = c.requestConfigBuilder;
        this.responseHandler = s, this.requestConfigBuilder = l;
      }
      return u.prototype.get = function(c, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", c, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, u.prototype.getData = function(c, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", c, s, {
                  responseType: "arraybuffer"
                })];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, u.prototype.post = function(c, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", c, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, u.prototype.postData = function(c, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", c, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, u.prototype.put = function(c, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("put", c, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, u.prototype.delete = function(c, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("delete", c, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, u.prototype.sendRequest = function(c) {
        return this.responseHandler.handle(
          // eslint-disable-next-line new-cap
          (0, i.default)(e(e({}, c), { maxBodyLength: 1 / 0, maxContentLength: 1 / 0 }))
        );
      }, u;
    }()
  );
  return $t.AxiosClient = o, $t;
}
var ls;
function Dp() {
  return ls || (ls = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DefaultHttpClient = void 0;
    var t = Tp();
    Object.defineProperty(e, "DefaultHttpClient", { enumerable: !0, get: function() {
      return t.AxiosClient;
    } });
  }(ki)), ki;
}
var Nt = {}, Di, us;
function Mn() {
  return us || (us = 1, Di = TypeError), Di;
}
const Ip = {}, $p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ip
}, Symbol.toStringTag, { value: "Module" })), Np = /* @__PURE__ */ If($p);
var Ii, cs;
function ti() {
  if (cs) return Ii;
  cs = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, u = i && o && typeof o.get == "function" ? o.get : null, c = i && Set.prototype.forEach, s = typeof WeakMap == "function" && WeakMap.prototype, l = s ? WeakMap.prototype.has : null, f = typeof WeakSet == "function" && WeakSet.prototype, p = f ? WeakSet.prototype.has : null, m = typeof WeakRef == "function" && WeakRef.prototype, g = m ? WeakRef.prototype.deref : null, b = Boolean.prototype.valueOf, d = Object.prototype.toString, a = Function.prototype.toString, w = String.prototype.match, v = String.prototype.slice, _ = String.prototype.replace, E = String.prototype.toUpperCase, P = String.prototype.toLowerCase, R = RegExp.prototype.test, A = Array.prototype.concat, I = Array.prototype.join, q = Array.prototype.slice, M = Math.floor, F = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, W = Object.getOwnPropertySymbols, ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, V = typeof Symbol == "function" && typeof Symbol.iterator == "object", B = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === V || !0) ? Symbol.toStringTag : null, U = Object.prototype.propertyIsEnumerable, z = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(T) {
    return T.__proto__;
  } : null);
  function j(T, D) {
    if (T === 1 / 0 || T === -1 / 0 || T !== T || T && T > -1e3 && T < 1e3 || R.call(/e/, D))
      return D;
    var we = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof T == "number") {
      var Re = T < 0 ? -M(-T) : M(T);
      if (Re !== T) {
        var Pe = String(Re), de = v.call(D, Pe.length + 1);
        return _.call(Pe, we, "$&_") + "." + _.call(_.call(de, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return _.call(D, we, "$&_");
  }
  var Q = Np, ee = Q.custom, fe = Ge(ee) ? ee : null, me = {
    __proto__: null,
    double: '"',
    single: "'"
  }, xe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Ii = function T(D, we, Re, Pe) {
    var de = we || {};
    if (Xe(de, "quoteStyle") && !Xe(me, de.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Xe(de, "maxStringLength") && (typeof de.maxStringLength == "number" ? de.maxStringLength < 0 && de.maxStringLength !== 1 / 0 : de.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var _t = Xe(de, "customInspect") ? de.customInspect : !0;
    if (typeof _t != "boolean" && _t !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Xe(de, "indent") && de.indent !== null && de.indent !== "	" && !(parseInt(de.indent, 10) === de.indent && de.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Xe(de, "numericSeparator") && typeof de.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var St = de.numericSeparator;
    if (typeof D > "u")
      return "undefined";
    if (D === null)
      return "null";
    if (typeof D == "boolean")
      return D ? "true" : "false";
    if (typeof D == "string")
      return ue(D, de);
    if (typeof D == "number") {
      if (D === 0)
        return 1 / 0 / D > 0 ? "0" : "-0";
      var Ze = String(D);
      return St ? j(D, Ze) : Ze;
    }
    if (typeof D == "bigint") {
      var xt = String(D) + "n";
      return St ? j(D, xt) : xt;
    }
    var Bn = typeof de.depth > "u" ? 5 : de.depth;
    if (typeof Re > "u" && (Re = 0), Re >= Bn && Bn > 0 && typeof D == "object")
      return ve(D) ? "[Array]" : "[Object]";
    var Ht = ur(de, Re);
    if (typeof Pe > "u")
      Pe = [];
    else if (wt(Pe, D) >= 0)
      return "[Circular]";
    function lt(Tt, Et, yn) {
      if (Et && (Pe = q.call(Pe), Pe.push(Et)), yn) {
        var hr = {
          depth: de.depth
        };
        return Xe(de, "quoteStyle") && (hr.quoteStyle = de.quoteStyle), T(Tt, hr, Re + 1, Pe);
      }
      return T(Tt, de, Re + 1, Pe);
    }
    if (typeof D == "function" && !ge(D)) {
      var fn = Lt(D), dn = cn(D, lt);
      return "[Function" + (fn ? ": " + fn : " (anonymous)") + "]" + (dn.length > 0 ? " { " + I.call(dn, ", ") + " }" : "");
    }
    if (Ge(D)) {
      var cr = V ? _.call(String(D), /^(Symbol\(.*\))_[^)]*$/, "$1") : ae.call(D);
      return typeof D == "object" && !V ? Wt(cr) : cr;
    }
    if ($(D)) {
      for (var Jt = "<" + P.call(String(D.nodeName)), Ln = D.attributes || [], pn = 0; pn < Ln.length; pn++)
        Jt += " " + Ln[pn].name + "=" + Se(N(Ln[pn].value), "double", de);
      return Jt += ">", D.childNodes && D.childNodes.length && (Jt += "..."), Jt += "</" + P.call(String(D.nodeName)) + ">", Jt;
    }
    if (ve(D)) {
      if (D.length === 0)
        return "[]";
      var Fe = cn(D, lt);
      return Ht && !lr(Fe) ? "[" + Fn(Fe, Ht) + "]" : "[ " + I.call(Fe, ", ") + " ]";
    }
    if (Z(D)) {
      var Un = cn(D, lt);
      return !("cause" in Error.prototype) && "cause" in D && !U.call(D, "cause") ? "{ [" + String(D) + "] " + I.call(A.call("[cause]: " + lt(D.cause), Un), ", ") + " }" : Un.length === 0 ? "[" + String(D) + "]" : "{ [" + String(D) + "] " + I.call(Un, ", ") + " }";
    }
    if (typeof D == "object" && _t) {
      if (fe && typeof D[fe] == "function" && Q)
        return Q(D, { depth: Bn - Re });
      if (_t !== "symbol" && typeof D.inspect == "function")
        return D.inspect();
    }
    if (st(D)) {
      var fr = [];
      return n && n.call(D, function(Tt, Et) {
        fr.push(lt(Et, D, !0) + " => " + lt(Tt, D));
      }), un("Map", r.call(D), fr, Ht);
    }
    if (kt(D)) {
      var dr = [];
      return c && c.call(D, function(Tt) {
        dr.push(lt(Tt, D));
      }), un("Set", u.call(D), dr, Ht);
    }
    if (Ut(D))
      return qn("WeakMap");
    if (ri(D))
      return qn("WeakSet");
    if (Vt(D))
      return qn("WeakRef");
    if (he(D))
      return Wt(lt(Number(D)));
    if (rt(D))
      return Wt(lt(F.call(D)));
    if (Ce(D))
      return Wt(b.call(D));
    if (ye(D))
      return Wt(lt(String(D)));
    if (typeof window < "u" && D === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && D === globalThis || typeof ir < "u" && D === ir)
      return "{ [object globalThis] }";
    if (!Oe(D) && !ge(D)) {
      var hn = cn(D, lt), pr = z ? z(D) === Object.prototype : D instanceof Object || D.constructor === Object, Qt = D instanceof Object ? "" : "null prototype", mn = !pr && B && Object(D) === D && B in D ? v.call(tt(D), 8, -1) : Qt ? "Object" : "", ii = pr || typeof D.constructor != "function" ? "" : D.constructor.name ? D.constructor.name + " " : "", Vn = ii + (mn || Qt ? "[" + I.call(A.call([], mn || [], Qt || []), ": ") + "] " : "");
      return hn.length === 0 ? Vn + "{}" : Ht ? Vn + "{" + Fn(hn, Ht) + "}" : Vn + "{ " + I.call(hn, ", ") + " }";
    }
    return String(D);
  };
  function Se(T, D, we) {
    var Re = we.quoteStyle || D, Pe = me[Re];
    return Pe + T + Pe;
  }
  function N(T) {
    return _.call(String(T), /"/g, "&quot;");
  }
  function G(T) {
    return !B || !(typeof T == "object" && (B in T || typeof T[B] < "u"));
  }
  function ve(T) {
    return tt(T) === "[object Array]" && G(T);
  }
  function Oe(T) {
    return tt(T) === "[object Date]" && G(T);
  }
  function ge(T) {
    return tt(T) === "[object RegExp]" && G(T);
  }
  function Z(T) {
    return tt(T) === "[object Error]" && G(T);
  }
  function ye(T) {
    return tt(T) === "[object String]" && G(T);
  }
  function he(T) {
    return tt(T) === "[object Number]" && G(T);
  }
  function Ce(T) {
    return tt(T) === "[object Boolean]" && G(T);
  }
  function Ge(T) {
    if (V)
      return T && typeof T == "object" && T instanceof Symbol;
    if (typeof T == "symbol")
      return !0;
    if (!T || typeof T != "object" || !ae)
      return !1;
    try {
      return ae.call(T), !0;
    } catch {
    }
    return !1;
  }
  function rt(T) {
    if (!T || typeof T != "object" || !F)
      return !1;
    try {
      return F.call(T), !0;
    } catch {
    }
    return !1;
  }
  var qe = Object.prototype.hasOwnProperty || function(T) {
    return T in this;
  };
  function Xe(T, D) {
    return qe.call(T, D);
  }
  function tt(T) {
    return d.call(T);
  }
  function Lt(T) {
    if (T.name)
      return T.name;
    var D = w.call(a.call(T), /^function\s*([\w$]+)/);
    return D ? D[1] : null;
  }
  function wt(T, D) {
    if (T.indexOf)
      return T.indexOf(D);
    for (var we = 0, Re = T.length; we < Re; we++)
      if (T[we] === D)
        return we;
    return -1;
  }
  function st(T) {
    if (!r || !T || typeof T != "object")
      return !1;
    try {
      r.call(T);
      try {
        u.call(T);
      } catch {
        return !0;
      }
      return T instanceof Map;
    } catch {
    }
    return !1;
  }
  function Ut(T) {
    if (!l || !T || typeof T != "object")
      return !1;
    try {
      l.call(T, l);
      try {
        p.call(T, p);
      } catch {
        return !0;
      }
      return T instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Vt(T) {
    if (!g || !T || typeof T != "object")
      return !1;
    try {
      return g.call(T), !0;
    } catch {
    }
    return !1;
  }
  function kt(T) {
    if (!u || !T || typeof T != "object")
      return !1;
    try {
      u.call(T);
      try {
        r.call(T);
      } catch {
        return !0;
      }
      return T instanceof Set;
    } catch {
    }
    return !1;
  }
  function ri(T) {
    if (!p || !T || typeof T != "object")
      return !1;
    try {
      p.call(T, p);
      try {
        l.call(T, l);
      } catch {
        return !0;
      }
      return T instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function $(T) {
    return !T || typeof T != "object" ? !1 : typeof HTMLElement < "u" && T instanceof HTMLElement ? !0 : typeof T.nodeName == "string" && typeof T.getAttribute == "function";
  }
  function ue(T, D) {
    if (T.length > D.maxStringLength) {
      var we = T.length - D.maxStringLength, Re = "... " + we + " more character" + (we > 1 ? "s" : "");
      return ue(v.call(T, 0, D.maxStringLength), D) + Re;
    }
    var Pe = xe[D.quoteStyle || "single"];
    Pe.lastIndex = 0;
    var de = _.call(_.call(T, Pe, "\\$1"), /[\x00-\x1f]/g, sr);
    return Se(de, "single", D);
  }
  function sr(T) {
    var D = T.charCodeAt(0), we = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[D];
    return we ? "\\" + we : "\\x" + (D < 16 ? "0" : "") + E.call(D.toString(16));
  }
  function Wt(T) {
    return "Object(" + T + ")";
  }
  function qn(T) {
    return T + " { ? }";
  }
  function un(T, D, we, Re) {
    var Pe = Re ? Fn(we, Re) : I.call(we, ", ");
    return T + " (" + D + ") {" + Pe + "}";
  }
  function lr(T) {
    for (var D = 0; D < T.length; D++)
      if (wt(T[D], `
`) >= 0)
        return !1;
    return !0;
  }
  function ur(T, D) {
    var we;
    if (T.indent === "	")
      we = "	";
    else if (typeof T.indent == "number" && T.indent > 0)
      we = I.call(Array(T.indent + 1), " ");
    else
      return null;
    return {
      base: we,
      prev: I.call(Array(D + 1), we)
    };
  }
  function Fn(T, D) {
    if (T.length === 0)
      return "";
    var we = `
` + D.prev + D.base;
    return we + I.call(T, "," + we) + `
` + D.prev;
  }
  function cn(T, D) {
    var we = ve(T), Re = [];
    if (we) {
      Re.length = T.length;
      for (var Pe = 0; Pe < T.length; Pe++)
        Re[Pe] = Xe(T, Pe) ? D(T[Pe], T) : "";
    }
    var de = typeof W == "function" ? W(T) : [], _t;
    if (V) {
      _t = {};
      for (var St = 0; St < de.length; St++)
        _t["$" + de[St]] = de[St];
    }
    for (var Ze in T)
      Xe(T, Ze) && (we && String(Number(Ze)) === Ze && Ze < T.length || V && _t["$" + Ze] instanceof Symbol || (R.call(/[^\w$]/, Ze) ? Re.push(D(Ze, T) + ": " + D(T[Ze], T)) : Re.push(Ze + ": " + D(T[Ze], T))));
    if (typeof W == "function")
      for (var xt = 0; xt < de.length; xt++)
        U.call(T, de[xt]) && Re.push("[" + D(de[xt]) + "]: " + D(T[de[xt]], T));
    return Re;
  }
  return Ii;
}
var $i, fs;
function jp() {
  if (fs) return $i;
  fs = 1;
  var e = /* @__PURE__ */ ti(), t = /* @__PURE__ */ Mn(), r = function(c, s, l) {
    for (var f = c, p; (p = f.next) != null; f = p)
      if (p.key === s)
        return f.next = p.next, l || (p.next = /** @type {NonNullable<typeof list.next>} */
        c.next, c.next = p), p;
  }, n = function(c, s) {
    if (c) {
      var l = r(c, s);
      return l && l.value;
    }
  }, i = function(c, s, l) {
    var f = r(c, s);
    f ? f.value = l : c.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: s,
      next: c.next,
      value: l
    };
  }, o = function(c, s) {
    return c ? !!r(c, s) : !1;
  }, u = function(c, s) {
    if (c)
      return r(c, s, !0);
  };
  return $i = function() {
    var s, l = {
      assert: function(f) {
        if (!l.has(f))
          throw new t("Side channel does not contain " + e(f));
      },
      delete: function(f) {
        var p = s && s.next, m = u(s, f);
        return m && p && p === m && (s = void 0), !!m;
      },
      get: function(f) {
        return n(s, f);
      },
      has: function(f) {
        return o(s, f);
      },
      set: function(f, p) {
        s || (s = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          s,
          f,
          p
        );
      }
    };
    return l;
  }, $i;
}
var Ni, ds;
function ql() {
  return ds || (ds = 1, Ni = Object), Ni;
}
var ji, ps;
function Mp() {
  return ps || (ps = 1, ji = Error), ji;
}
var Mi, hs;
function qp() {
  return hs || (hs = 1, Mi = EvalError), Mi;
}
var qi, ms;
function Fp() {
  return ms || (ms = 1, qi = RangeError), qi;
}
var Fi, ys;
function Bp() {
  return ys || (ys = 1, Fi = ReferenceError), Fi;
}
var Bi, vs;
function Lp() {
  return vs || (vs = 1, Bi = SyntaxError), Bi;
}
var Li, gs;
function Up() {
  return gs || (gs = 1, Li = URIError), Li;
}
var Ui, bs;
function Vp() {
  return bs || (bs = 1, Ui = Math.abs), Ui;
}
var Vi, ws;
function Wp() {
  return ws || (ws = 1, Vi = Math.floor), Vi;
}
var Wi, _s;
function Hp() {
  return _s || (_s = 1, Wi = Math.max), Wi;
}
var Hi, Ss;
function Gp() {
  return Ss || (Ss = 1, Hi = Math.min), Hi;
}
var Gi, xs;
function Kp() {
  return xs || (xs = 1, Gi = Math.pow), Gi;
}
var Ki, Es;
function zp() {
  return Es || (Es = 1, Ki = Math.round), Ki;
}
var zi, Os;
function Yp() {
  return Os || (Os = 1, zi = Number.isNaN || function(t) {
    return t !== t;
  }), zi;
}
var Yi, Rs;
function Xp() {
  if (Rs) return Yi;
  Rs = 1;
  var e = /* @__PURE__ */ Yp();
  return Yi = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Yi;
}
var Xi, As;
function Jp() {
  return As || (As = 1, Xi = Object.getOwnPropertyDescriptor), Xi;
}
var Ji, Ps;
function Fl() {
  if (Ps) return Ji;
  Ps = 1;
  var e = /* @__PURE__ */ Jp();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ji = e, Ji;
}
var Qi, Cs;
function Qp() {
  if (Cs) return Qi;
  Cs = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Qi = e, Qi;
}
var Zi, ks;
function Zp() {
  return ks || (ks = 1, Zi = function() {
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
    var u = Object.getOwnPropertySymbols(t);
    if (u.length !== 1 || u[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
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
  }), Zi;
}
var eo, Ts;
function eh() {
  if (Ts) return eo;
  Ts = 1;
  var e = typeof Symbol < "u" && Symbol, t = Zp();
  return eo = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, eo;
}
var to, Ds;
function Bl() {
  return Ds || (Ds = 1, to = typeof Reflect < "u" && Reflect.getPrototypeOf || null), to;
}
var no, Is;
function Ll() {
  if (Is) return no;
  Is = 1;
  var e = /* @__PURE__ */ ql();
  return no = e.getPrototypeOf || null, no;
}
var ro, $s;
function th() {
  if ($s) return ro;
  $s = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(s, l) {
    for (var f = [], p = 0; p < s.length; p += 1)
      f[p] = s[p];
    for (var m = 0; m < l.length; m += 1)
      f[m + s.length] = l[m];
    return f;
  }, o = function(s, l) {
    for (var f = [], p = l, m = 0; p < s.length; p += 1, m += 1)
      f[m] = s[p];
    return f;
  }, u = function(c, s) {
    for (var l = "", f = 0; f < c.length; f += 1)
      l += c[f], f + 1 < c.length && (l += s);
    return l;
  };
  return ro = function(s) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var f = o(arguments, 1), p, m = function() {
      if (this instanceof p) {
        var w = l.apply(
          this,
          i(f, arguments)
        );
        return Object(w) === w ? w : this;
      }
      return l.apply(
        s,
        i(f, arguments)
      );
    }, g = r(0, l.length - f.length), b = [], d = 0; d < g; d++)
      b[d] = "$" + d;
    if (p = Function("binder", "return function (" + u(b, ",") + "){ return binder.apply(this,arguments); }")(m), l.prototype) {
      var a = function() {
      };
      a.prototype = l.prototype, p.prototype = new a(), a.prototype = null;
    }
    return p;
  }, ro;
}
var io, Ns;
function ni() {
  if (Ns) return io;
  Ns = 1;
  var e = th();
  return io = Function.prototype.bind || e, io;
}
var oo, js;
function Wo() {
  return js || (js = 1, oo = Function.prototype.call), oo;
}
var ao, Ms;
function Ul() {
  return Ms || (Ms = 1, ao = Function.prototype.apply), ao;
}
var so, qs;
function nh() {
  return qs || (qs = 1, so = typeof Reflect < "u" && Reflect && Reflect.apply), so;
}
var lo, Fs;
function rh() {
  if (Fs) return lo;
  Fs = 1;
  var e = ni(), t = Ul(), r = Wo(), n = nh();
  return lo = n || e.call(r, t), lo;
}
var uo, Bs;
function Vl() {
  if (Bs) return uo;
  Bs = 1;
  var e = ni(), t = /* @__PURE__ */ Mn(), r = Wo(), n = rh();
  return uo = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, uo;
}
var co, Ls;
function ih() {
  if (Ls) return co;
  Ls = 1;
  var e = Vl(), t = /* @__PURE__ */ Fl(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (u) {
    if (!u || typeof u != "object" || !("code" in u) || u.code !== "ERR_PROTO_ACCESS")
      throw u;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return co = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(c) {
      return o(c == null ? c : i(c));
    }
  ) : !1, co;
}
var fo, Us;
function oh() {
  if (Us) return fo;
  Us = 1;
  var e = Bl(), t = Ll(), r = /* @__PURE__ */ ih();
  return fo = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, fo;
}
var po, Vs;
function ah() {
  if (Vs) return po;
  Vs = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = ni();
  return po = r.call(e, t), po;
}
var ho, Ws;
function Ho() {
  if (Ws) return ho;
  Ws = 1;
  var e, t = /* @__PURE__ */ ql(), r = /* @__PURE__ */ Mp(), n = /* @__PURE__ */ qp(), i = /* @__PURE__ */ Fp(), o = /* @__PURE__ */ Bp(), u = /* @__PURE__ */ Lp(), c = /* @__PURE__ */ Mn(), s = /* @__PURE__ */ Up(), l = /* @__PURE__ */ Vp(), f = /* @__PURE__ */ Wp(), p = /* @__PURE__ */ Hp(), m = /* @__PURE__ */ Gp(), g = /* @__PURE__ */ Kp(), b = /* @__PURE__ */ zp(), d = /* @__PURE__ */ Xp(), a = Function, w = function(ge) {
    try {
      return a('"use strict"; return (' + ge + ").constructor;")();
    } catch {
    }
  }, v = /* @__PURE__ */ Fl(), _ = /* @__PURE__ */ Qp(), E = function() {
    throw new c();
  }, P = v ? function() {
    try {
      return arguments.callee, E;
    } catch {
      try {
        return v(arguments, "callee").get;
      } catch {
        return E;
      }
    }
  }() : E, R = eh()(), A = oh(), I = Ll(), q = Bl(), M = Ul(), F = Wo(), W = {}, ae = typeof Uint8Array > "u" || !A ? e : A(Uint8Array), V = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": R && A ? A([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": W,
    "%AsyncGenerator%": W,
    "%AsyncGeneratorFunction%": W,
    "%AsyncIteratorPrototype%": W,
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
    "%GeneratorFunction%": W,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": R && A ? A(A([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !R || !A ? e : A((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": v,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !R || !A ? e : A((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": R && A ? A(""[Symbol.iterator]()) : e,
    "%Symbol%": R ? Symbol : e,
    "%SyntaxError%": u,
    "%ThrowTypeError%": P,
    "%TypedArray%": ae,
    "%TypeError%": c,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": s,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": F,
    "%Function.prototype.apply%": M,
    "%Object.defineProperty%": _,
    "%Object.getPrototypeOf%": I,
    "%Math.abs%": l,
    "%Math.floor%": f,
    "%Math.max%": p,
    "%Math.min%": m,
    "%Math.pow%": g,
    "%Math.round%": b,
    "%Math.sign%": d,
    "%Reflect.getPrototypeOf%": q
  };
  if (A)
    try {
      null.error;
    } catch (ge) {
      var B = A(A(ge));
      V["%Error.prototype%"] = B;
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
      Ce && A && (ye = A(Ce.prototype));
    }
    return V[Z] = ye, ye;
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
  }, j = ni(), Q = /* @__PURE__ */ ah(), ee = j.call(F, Array.prototype.concat), fe = j.call(M, Array.prototype.splice), me = j.call(F, String.prototype.replace), xe = j.call(F, String.prototype.slice), Se = j.call(F, RegExp.prototype.exec), N = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, G = /\\(\\)?/g, ve = function(Z) {
    var ye = xe(Z, 0, 1), he = xe(Z, -1);
    if (ye === "%" && he !== "%")
      throw new u("invalid intrinsic syntax, expected closing `%`");
    if (he === "%" && ye !== "%")
      throw new u("invalid intrinsic syntax, expected opening `%`");
    var Ce = [];
    return me(Z, N, function(Ge, rt, qe, Xe) {
      Ce[Ce.length] = qe ? me(Xe, G, "$1") : rt || Ge;
    }), Ce;
  }, Oe = function(Z, ye) {
    var he = Z, Ce;
    if (Q(z, he) && (Ce = z[he], he = "%" + Ce[0] + "%"), Q(V, he)) {
      var Ge = V[he];
      if (Ge === W && (Ge = U(he)), typeof Ge > "u" && !ye)
        throw new c("intrinsic " + Z + " exists, but is not available. Please file an issue!");
      return {
        alias: Ce,
        name: he,
        value: Ge
      };
    }
    throw new u("intrinsic " + Z + " does not exist!");
  };
  return ho = function(Z, ye) {
    if (typeof Z != "string" || Z.length === 0)
      throw new c("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ye != "boolean")
      throw new c('"allowMissing" argument must be a boolean');
    if (Se(/^%?[^%]*%?$/, Z) === null)
      throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var he = ve(Z), Ce = he.length > 0 ? he[0] : "", Ge = Oe("%" + Ce + "%", ye), rt = Ge.name, qe = Ge.value, Xe = !1, tt = Ge.alias;
    tt && (Ce = tt[0], fe(he, ee([0, 1], tt)));
    for (var Lt = 1, wt = !0; Lt < he.length; Lt += 1) {
      var st = he[Lt], Ut = xe(st, 0, 1), Vt = xe(st, -1);
      if ((Ut === '"' || Ut === "'" || Ut === "`" || Vt === '"' || Vt === "'" || Vt === "`") && Ut !== Vt)
        throw new u("property names with quotes must have matching quotes");
      if ((st === "constructor" || !wt) && (Xe = !0), Ce += "." + st, rt = "%" + Ce + "%", Q(V, rt))
        qe = V[rt];
      else if (qe != null) {
        if (!(st in qe)) {
          if (!ye)
            throw new c("base intrinsic for " + Z + " exists, but the property is not available.");
          return;
        }
        if (v && Lt + 1 >= he.length) {
          var kt = v(qe, st);
          wt = !!kt, wt && "get" in kt && !("originalValue" in kt.get) ? qe = kt.get : qe = qe[st];
        } else
          wt = Q(qe, st), qe = qe[st];
        wt && !Xe && (V[rt] = qe);
      }
    }
    return qe;
  }, ho;
}
var mo, Hs;
function Wl() {
  if (Hs) return mo;
  Hs = 1;
  var e = /* @__PURE__ */ Ho(), t = Vl(), r = t([e("%String.prototype.indexOf%")]);
  return mo = function(i, o) {
    var u = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof u == "function" && r(i, ".prototype.") > -1 ? t([u]) : u;
  }, mo;
}
var yo, Gs;
function Hl() {
  if (Gs) return yo;
  Gs = 1;
  var e = /* @__PURE__ */ Ho(), t = /* @__PURE__ */ Wl(), r = /* @__PURE__ */ ti(), n = /* @__PURE__ */ Mn(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), u = t("Map.prototype.set", !0), c = t("Map.prototype.has", !0), s = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return yo = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var p, m = {
      assert: function(g) {
        if (!m.has(g))
          throw new n("Side channel does not contain " + r(g));
      },
      delete: function(g) {
        if (p) {
          var b = s(p, g);
          return l(p) === 0 && (p = void 0), b;
        }
        return !1;
      },
      get: function(g) {
        if (p)
          return o(p, g);
      },
      has: function(g) {
        return p ? c(p, g) : !1;
      },
      set: function(g, b) {
        p || (p = new i()), u(p, g, b);
      }
    };
    return m;
  }, yo;
}
var vo, Ks;
function sh() {
  if (Ks) return vo;
  Ks = 1;
  var e = /* @__PURE__ */ Ho(), t = /* @__PURE__ */ Wl(), r = /* @__PURE__ */ ti(), n = Hl(), i = /* @__PURE__ */ Mn(), o = e("%WeakMap%", !0), u = t("WeakMap.prototype.get", !0), c = t("WeakMap.prototype.set", !0), s = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return vo = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var p, m, g = {
        assert: function(b) {
          if (!g.has(b))
            throw new i("Side channel does not contain " + r(b));
        },
        delete: function(b) {
          if (o && b && (typeof b == "object" || typeof b == "function")) {
            if (p)
              return l(p, b);
          } else if (n && m)
            return m.delete(b);
          return !1;
        },
        get: function(b) {
          return o && b && (typeof b == "object" || typeof b == "function") && p ? u(p, b) : m && m.get(b);
        },
        has: function(b) {
          return o && b && (typeof b == "object" || typeof b == "function") && p ? s(p, b) : !!m && m.has(b);
        },
        set: function(b, d) {
          o && b && (typeof b == "object" || typeof b == "function") ? (p || (p = new o()), c(p, b, d)) : n && (m || (m = n()), m.set(b, d));
        }
      };
      return g;
    }
  ) : n, vo;
}
var go, zs;
function lh() {
  if (zs) return go;
  zs = 1;
  var e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ ti(), r = jp(), n = Hl(), i = sh(), o = i || n || r;
  return go = function() {
    var c, s = {
      assert: function(l) {
        if (!s.has(l))
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
    return s;
  }, go;
}
var bo, Ys;
function Go() {
  if (Ys) return bo;
  Ys = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return bo = {
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
  }, bo;
}
var wo, Xs;
function Gl() {
  if (Xs) return wo;
  Xs = 1;
  var e = /* @__PURE__ */ Go(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
    for (var a = [], w = 0; w < 256; ++w)
      a.push("%" + ((w < 16 ? "0" : "") + w.toString(16)).toUpperCase());
    return a;
  }(), i = function(w) {
    for (; w.length > 1; ) {
      var v = w.pop(), _ = v.obj[v.prop];
      if (r(_)) {
        for (var E = [], P = 0; P < _.length; ++P)
          typeof _[P] < "u" && E.push(_[P]);
        v.obj[v.prop] = E;
      }
    }
  }, o = function(w, v) {
    for (var _ = v && v.plainObjects ? { __proto__: null } : {}, E = 0; E < w.length; ++E)
      typeof w[E] < "u" && (_[E] = w[E]);
    return _;
  }, u = function a(w, v, _) {
    if (!v)
      return w;
    if (typeof v != "object" && typeof v != "function") {
      if (r(w))
        w.push(v);
      else if (w && typeof w == "object")
        (_ && (_.plainObjects || _.allowPrototypes) || !t.call(Object.prototype, v)) && (w[v] = !0);
      else
        return [w, v];
      return w;
    }
    if (!w || typeof w != "object")
      return [w].concat(v);
    var E = w;
    return r(w) && !r(v) && (E = o(w, _)), r(w) && r(v) ? (v.forEach(function(P, R) {
      if (t.call(w, R)) {
        var A = w[R];
        A && typeof A == "object" && P && typeof P == "object" ? w[R] = a(A, P, _) : w.push(P);
      } else
        w[R] = P;
    }), w) : Object.keys(v).reduce(function(P, R) {
      var A = v[R];
      return t.call(P, R) ? P[R] = a(P[R], A, _) : P[R] = A, P;
    }, E);
  }, c = function(w, v) {
    return Object.keys(v).reduce(function(_, E) {
      return _[E] = v[E], _;
    }, w);
  }, s = function(a, w, v) {
    var _ = a.replace(/\+/g, " ");
    if (v === "iso-8859-1")
      return _.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(_);
    } catch {
      return _;
    }
  }, l = 1024, f = function(w, v, _, E, P) {
    if (w.length === 0)
      return w;
    var R = w;
    if (typeof w == "symbol" ? R = Symbol.prototype.toString.call(w) : typeof w != "string" && (R = String(w)), _ === "iso-8859-1")
      return escape(R).replace(/%u[0-9a-f]{4}/gi, function(ae) {
        return "%26%23" + parseInt(ae.slice(2), 16) + "%3B";
      });
    for (var A = "", I = 0; I < R.length; I += l) {
      for (var q = R.length >= l ? R.slice(I, I + l) : R, M = [], F = 0; F < q.length; ++F) {
        var W = q.charCodeAt(F);
        if (W === 45 || W === 46 || W === 95 || W === 126 || W >= 48 && W <= 57 || W >= 65 && W <= 90 || W >= 97 && W <= 122 || P === e.RFC1738 && (W === 40 || W === 41)) {
          M[M.length] = q.charAt(F);
          continue;
        }
        if (W < 128) {
          M[M.length] = n[W];
          continue;
        }
        if (W < 2048) {
          M[M.length] = n[192 | W >> 6] + n[128 | W & 63];
          continue;
        }
        if (W < 55296 || W >= 57344) {
          M[M.length] = n[224 | W >> 12] + n[128 | W >> 6 & 63] + n[128 | W & 63];
          continue;
        }
        F += 1, W = 65536 + ((W & 1023) << 10 | q.charCodeAt(F) & 1023), M[M.length] = n[240 | W >> 18] + n[128 | W >> 12 & 63] + n[128 | W >> 6 & 63] + n[128 | W & 63];
      }
      A += M.join("");
    }
    return A;
  }, p = function(w) {
    for (var v = [{ obj: { o: w }, prop: "o" }], _ = [], E = 0; E < v.length; ++E)
      for (var P = v[E], R = P.obj[P.prop], A = Object.keys(R), I = 0; I < A.length; ++I) {
        var q = A[I], M = R[q];
        typeof M == "object" && M !== null && _.indexOf(M) === -1 && (v.push({ obj: R, prop: q }), _.push(M));
      }
    return i(v), w;
  }, m = function(w) {
    return Object.prototype.toString.call(w) === "[object RegExp]";
  }, g = function(w) {
    return !w || typeof w != "object" ? !1 : !!(w.constructor && w.constructor.isBuffer && w.constructor.isBuffer(w));
  }, b = function(w, v) {
    return [].concat(w, v);
  }, d = function(w, v) {
    if (r(w)) {
      for (var _ = [], E = 0; E < w.length; E += 1)
        _.push(v(w[E]));
      return _;
    }
    return v(w);
  };
  return wo = {
    arrayToObject: o,
    assign: c,
    combine: b,
    compact: p,
    decode: s,
    encode: f,
    isBuffer: g,
    isRegExp: m,
    maybeMap: d,
    merge: u
  }, wo;
}
var _o, Js;
function uh() {
  if (Js) return _o;
  Js = 1;
  var e = lh(), t = /* @__PURE__ */ Gl(), r = /* @__PURE__ */ Go(), n = Object.prototype.hasOwnProperty, i = {
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
  }, o = Array.isArray, u = Array.prototype.push, c = function(d, a) {
    u.apply(d, o(a) ? a : [a]);
  }, s = Date.prototype.toISOString, l = r.default, f = {
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
      return s.call(a);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, p = function(a) {
    return typeof a == "string" || typeof a == "number" || typeof a == "boolean" || typeof a == "symbol" || typeof a == "bigint";
  }, m = {}, g = function d(a, w, v, _, E, P, R, A, I, q, M, F, W, ae, V, B, U, z) {
    for (var j = a, Q = z, ee = 0, fe = !1; (Q = Q.get(m)) !== void 0 && !fe; ) {
      var me = Q.get(a);
      if (ee += 1, typeof me < "u") {
        if (me === ee)
          throw new RangeError("Cyclic object value");
        fe = !0;
      }
      typeof Q.get(m) > "u" && (ee = 0);
    }
    if (typeof q == "function" ? j = q(w, j) : j instanceof Date ? j = W(j) : v === "comma" && o(j) && (j = t.maybeMap(j, function(rt) {
      return rt instanceof Date ? W(rt) : rt;
    })), j === null) {
      if (P)
        return I && !B ? I(w, f.encoder, U, "key", ae) : w;
      j = "";
    }
    if (p(j) || t.isBuffer(j)) {
      if (I) {
        var xe = B ? w : I(w, f.encoder, U, "key", ae);
        return [V(xe) + "=" + V(I(j, f.encoder, U, "value", ae))];
      }
      return [V(w) + "=" + V(String(j))];
    }
    var Se = [];
    if (typeof j > "u")
      return Se;
    var N;
    if (v === "comma" && o(j))
      B && I && (j = t.maybeMap(j, I)), N = [{ value: j.length > 0 ? j.join(",") || null : void 0 }];
    else if (o(q))
      N = q;
    else {
      var G = Object.keys(j);
      N = M ? G.sort(M) : G;
    }
    var ve = A ? String(w).replace(/\./g, "%2E") : String(w), Oe = _ && o(j) && j.length === 1 ? ve + "[]" : ve;
    if (E && o(j) && j.length === 0)
      return Oe + "[]";
    for (var ge = 0; ge < N.length; ++ge) {
      var Z = N[ge], ye = typeof Z == "object" && Z && typeof Z.value < "u" ? Z.value : j[Z];
      if (!(R && ye === null)) {
        var he = F && A ? String(Z).replace(/\./g, "%2E") : String(Z), Ce = o(j) ? typeof v == "function" ? v(Oe, he) : Oe : Oe + (F ? "." + he : "[" + he + "]");
        z.set(a, ee);
        var Ge = e();
        Ge.set(m, z), c(Se, d(
          ye,
          Ce,
          v,
          _,
          E,
          P,
          R,
          A,
          v === "comma" && B && o(j) ? null : I,
          q,
          M,
          F,
          W,
          ae,
          V,
          B,
          U,
          Ge
        ));
      }
    }
    return Se;
  }, b = function(a) {
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
    var v = r.default;
    if (typeof a.format < "u") {
      if (!n.call(r.formatters, a.format))
        throw new TypeError("Unknown format option provided.");
      v = a.format;
    }
    var _ = r.formatters[v], E = f.filter;
    (typeof a.filter == "function" || o(a.filter)) && (E = a.filter);
    var P;
    if (a.arrayFormat in i ? P = a.arrayFormat : "indices" in a ? P = a.indices ? "indices" : "repeat" : P = f.arrayFormat, "commaRoundTrip" in a && typeof a.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var R = typeof a.allowDots > "u" ? a.encodeDotInKeys === !0 ? !0 : f.allowDots : !!a.allowDots;
    return {
      addQueryPrefix: typeof a.addQueryPrefix == "boolean" ? a.addQueryPrefix : f.addQueryPrefix,
      allowDots: R,
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
      format: v,
      formatter: _,
      serializeDate: typeof a.serializeDate == "function" ? a.serializeDate : f.serializeDate,
      skipNulls: typeof a.skipNulls == "boolean" ? a.skipNulls : f.skipNulls,
      sort: typeof a.sort == "function" ? a.sort : null,
      strictNullHandling: typeof a.strictNullHandling == "boolean" ? a.strictNullHandling : f.strictNullHandling
    };
  };
  return _o = function(d, a) {
    var w = d, v = b(a), _, E;
    typeof v.filter == "function" ? (E = v.filter, w = E("", w)) : o(v.filter) && (E = v.filter, _ = E);
    var P = [];
    if (typeof w != "object" || w === null)
      return "";
    var R = i[v.arrayFormat], A = R === "comma" && v.commaRoundTrip;
    _ || (_ = Object.keys(w)), v.sort && _.sort(v.sort);
    for (var I = e(), q = 0; q < _.length; ++q) {
      var M = _[q], F = w[M];
      v.skipNulls && F === null || c(P, g(
        F,
        M,
        R,
        A,
        v.allowEmptyArrays,
        v.strictNullHandling,
        v.skipNulls,
        v.encodeDotInKeys,
        v.encode ? v.encoder : null,
        v.filter,
        v.sort,
        v.allowDots,
        v.serializeDate,
        v.format,
        v.formatter,
        v.encodeValuesOnly,
        v.charset,
        I
      ));
    }
    var W = P.join(v.delimiter), ae = v.addQueryPrefix === !0 ? "?" : "";
    return v.charsetSentinel && (v.charset === "iso-8859-1" ? ae += "utf8=%26%2310003%3B&" : ae += "utf8=%E2%9C%93&"), W.length > 0 ? ae + W : "";
  }, _o;
}
var So, Qs;
function ch() {
  if (Qs) return So;
  Qs = 1;
  var e = /* @__PURE__ */ Gl(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
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
    return m.replace(/&#(\d+);/g, function(g, b) {
      return String.fromCharCode(parseInt(b, 10));
    });
  }, o = function(m, g, b) {
    if (m && typeof m == "string" && g.comma && m.indexOf(",") > -1)
      return m.split(",");
    if (g.throwOnLimitExceeded && b >= g.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + g.arrayLimit + " element" + (g.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return m;
  }, u = "utf8=%26%2310003%3B", c = "utf8=%E2%9C%93", s = function(g, b) {
    var d = { __proto__: null }, a = b.ignoreQueryPrefix ? g.replace(/^\?/, "") : g;
    a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var w = b.parameterLimit === 1 / 0 ? void 0 : b.parameterLimit, v = a.split(
      b.delimiter,
      b.throwOnLimitExceeded ? w + 1 : w
    );
    if (b.throwOnLimitExceeded && v.length > w)
      throw new RangeError("Parameter limit exceeded. Only " + w + " parameter" + (w === 1 ? "" : "s") + " allowed.");
    var _ = -1, E, P = b.charset;
    if (b.charsetSentinel)
      for (E = 0; E < v.length; ++E)
        v[E].indexOf("utf8=") === 0 && (v[E] === c ? P = "utf-8" : v[E] === u && (P = "iso-8859-1"), _ = E, E = v.length);
    for (E = 0; E < v.length; ++E)
      if (E !== _) {
        var R = v[E], A = R.indexOf("]="), I = A === -1 ? R.indexOf("=") : A + 1, q, M;
        I === -1 ? (q = b.decoder(R, n.decoder, P, "key"), M = b.strictNullHandling ? null : "") : (q = b.decoder(R.slice(0, I), n.decoder, P, "key"), M = e.maybeMap(
          o(
            R.slice(I + 1),
            b,
            r(d[q]) ? d[q].length : 0
          ),
          function(W) {
            return b.decoder(W, n.decoder, P, "value");
          }
        )), M && b.interpretNumericEntities && P === "iso-8859-1" && (M = i(String(M))), R.indexOf("[]=") > -1 && (M = r(M) ? [M] : M);
        var F = t.call(d, q);
        F && b.duplicates === "combine" ? d[q] = e.combine(d[q], M) : (!F || b.duplicates === "last") && (d[q] = M);
      }
    return d;
  }, l = function(m, g, b, d) {
    var a = 0;
    if (m.length > 0 && m[m.length - 1] === "[]") {
      var w = m.slice(0, -1).join("");
      a = Array.isArray(g) && g[w] ? g[w].length : 0;
    }
    for (var v = d ? g : o(g, b, a), _ = m.length - 1; _ >= 0; --_) {
      var E, P = m[_];
      if (P === "[]" && b.parseArrays)
        E = b.allowEmptyArrays && (v === "" || b.strictNullHandling && v === null) ? [] : e.combine([], v);
      else {
        E = b.plainObjects ? { __proto__: null } : {};
        var R = P.charAt(0) === "[" && P.charAt(P.length - 1) === "]" ? P.slice(1, -1) : P, A = b.decodeDotInKeys ? R.replace(/%2E/g, ".") : R, I = parseInt(A, 10);
        !b.parseArrays && A === "" ? E = { 0: v } : !isNaN(I) && P !== A && String(I) === A && I >= 0 && b.parseArrays && I <= b.arrayLimit ? (E = [], E[I] = v) : A !== "__proto__" && (E[A] = v);
      }
      v = E;
    }
    return v;
  }, f = function(g, b, d, a) {
    if (g) {
      var w = d.allowDots ? g.replace(/\.([^.[]+)/g, "[$1]") : g, v = /(\[[^[\]]*])/, _ = /(\[[^[\]]*])/g, E = d.depth > 0 && v.exec(w), P = E ? w.slice(0, E.index) : w, R = [];
      if (P) {
        if (!d.plainObjects && t.call(Object.prototype, P) && !d.allowPrototypes)
          return;
        R.push(P);
      }
      for (var A = 0; d.depth > 0 && (E = _.exec(w)) !== null && A < d.depth; ) {
        if (A += 1, !d.plainObjects && t.call(Object.prototype, E[1].slice(1, -1)) && !d.allowPrototypes)
          return;
        R.push(E[1]);
      }
      if (E) {
        if (d.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + d.depth + " and strictDepth is true");
        R.push("[" + w.slice(E.index) + "]");
      }
      return l(R, b, d, a);
    }
  }, p = function(g) {
    if (!g)
      return n;
    if (typeof g.allowEmptyArrays < "u" && typeof g.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof g.decodeDotInKeys < "u" && typeof g.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (g.decoder !== null && typeof g.decoder < "u" && typeof g.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof g.charset < "u" && g.charset !== "utf-8" && g.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof g.throwOnLimitExceeded < "u" && typeof g.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var b = typeof g.charset > "u" ? n.charset : g.charset, d = typeof g.duplicates > "u" ? n.duplicates : g.duplicates;
    if (d !== "combine" && d !== "first" && d !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var a = typeof g.allowDots > "u" ? g.decodeDotInKeys === !0 ? !0 : n.allowDots : !!g.allowDots;
    return {
      allowDots: a,
      allowEmptyArrays: typeof g.allowEmptyArrays == "boolean" ? !!g.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof g.allowPrototypes == "boolean" ? g.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof g.allowSparse == "boolean" ? g.allowSparse : n.allowSparse,
      arrayLimit: typeof g.arrayLimit == "number" ? g.arrayLimit : n.arrayLimit,
      charset: b,
      charsetSentinel: typeof g.charsetSentinel == "boolean" ? g.charsetSentinel : n.charsetSentinel,
      comma: typeof g.comma == "boolean" ? g.comma : n.comma,
      decodeDotInKeys: typeof g.decodeDotInKeys == "boolean" ? g.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof g.decoder == "function" ? g.decoder : n.decoder,
      delimiter: typeof g.delimiter == "string" || e.isRegExp(g.delimiter) ? g.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof g.depth == "number" || g.depth === !1 ? +g.depth : n.depth,
      duplicates: d,
      ignoreQueryPrefix: g.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof g.interpretNumericEntities == "boolean" ? g.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof g.parameterLimit == "number" ? g.parameterLimit : n.parameterLimit,
      parseArrays: g.parseArrays !== !1,
      plainObjects: typeof g.plainObjects == "boolean" ? g.plainObjects : n.plainObjects,
      strictDepth: typeof g.strictDepth == "boolean" ? !!g.strictDepth : n.strictDepth,
      strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof g.throwOnLimitExceeded == "boolean" ? g.throwOnLimitExceeded : !1
    };
  };
  return So = function(m, g) {
    var b = p(g);
    if (m === "" || m === null || typeof m > "u")
      return b.plainObjects ? { __proto__: null } : {};
    for (var d = typeof m == "string" ? s(m, b) : m, a = b.plainObjects ? { __proto__: null } : {}, w = Object.keys(d), v = 0; v < w.length; ++v) {
      var _ = w[v], E = f(_, d[_], b, typeof m == "string");
      a = e.merge(a, E, b);
    }
    return b.allowSparse === !0 ? a : e.compact(a);
  }, So;
}
var xo, Zs;
function fh() {
  if (Zs) return xo;
  Zs = 1;
  var e = /* @__PURE__ */ uh(), t = /* @__PURE__ */ ch(), r = /* @__PURE__ */ Go();
  return xo = {
    formats: r,
    parse: t,
    stringify: e
  }, xo;
}
var Ur = { exports: {} }, dh = Ur.exports, el;
function ph() {
  return el || (el = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(typeof self < "u" ? self : typeof window < "u" ? window : typeof ir < "u" ? ir : dh, function() {
      var r = "3.7.7", n = r, i = typeof Buffer == "function", o = typeof TextDecoder == "function" ? new TextDecoder() : void 0, u = typeof TextEncoder == "function" ? new TextEncoder() : void 0, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = Array.prototype.slice.call(c), l = function(N) {
        var G = {};
        return N.forEach(function(ve, Oe) {
          return G[ve] = Oe;
        }), G;
      }(s), f = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, p = String.fromCharCode.bind(String), m = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function(N) {
        return new Uint8Array(Array.prototype.slice.call(N, 0));
      }, g = function(N) {
        return N.replace(/=/g, "").replace(/[+\/]/g, function(G) {
          return G == "+" ? "-" : "_";
        });
      }, b = function(N) {
        return N.replace(/[^A-Za-z0-9\+\/]/g, "");
      }, d = function(N) {
        for (var G, ve, Oe, ge, Z = "", ye = N.length % 3, he = 0; he < N.length; ) {
          if ((ve = N.charCodeAt(he++)) > 255 || (Oe = N.charCodeAt(he++)) > 255 || (ge = N.charCodeAt(he++)) > 255)
            throw new TypeError("invalid character found");
          G = ve << 16 | Oe << 8 | ge, Z += s[G >> 18 & 63] + s[G >> 12 & 63] + s[G >> 6 & 63] + s[G & 63];
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
          ve.push(p.apply(null, N.subarray(Oe, Oe + G)));
        return a(ve.join(""));
      }, v = function(N, G) {
        return G === void 0 && (G = !1), G ? g(w(N)) : w(N);
      }, _ = function(N) {
        if (N.length < 2) {
          var G = N.charCodeAt(0);
          return G < 128 ? N : G < 2048 ? p(192 | G >>> 6) + p(128 | G & 63) : p(224 | G >>> 12 & 15) + p(128 | G >>> 6 & 63) + p(128 | G & 63);
        } else {
          var G = 65536 + (N.charCodeAt(0) - 55296) * 1024 + (N.charCodeAt(1) - 56320);
          return p(240 | G >>> 18 & 7) + p(128 | G >>> 12 & 63) + p(128 | G >>> 6 & 63) + p(128 | G & 63);
        }
      }, E = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, P = function(N) {
        return N.replace(E, _);
      }, R = i ? function(N) {
        return Buffer.from(N, "utf8").toString("base64");
      } : u ? function(N) {
        return w(u.encode(N));
      } : function(N) {
        return a(P(N));
      }, A = function(N, G) {
        return G === void 0 && (G = !1), G ? g(R(N)) : R(N);
      }, I = function(N) {
        return A(N, !0);
      }, q = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, M = function(N) {
        switch (N.length) {
          case 4:
            var G = (7 & N.charCodeAt(0)) << 18 | (63 & N.charCodeAt(1)) << 12 | (63 & N.charCodeAt(2)) << 6 | 63 & N.charCodeAt(3), ve = G - 65536;
            return p((ve >>> 10) + 55296) + p((ve & 1023) + 56320);
          case 3:
            return p((15 & N.charCodeAt(0)) << 12 | (63 & N.charCodeAt(1)) << 6 | 63 & N.charCodeAt(2));
          default:
            return p((31 & N.charCodeAt(0)) << 6 | 63 & N.charCodeAt(1));
        }
      }, F = function(N) {
        return N.replace(q, M);
      }, W = function(N) {
        if (N = N.replace(/\s+/g, ""), !f.test(N))
          throw new TypeError("malformed base64.");
        N += "==".slice(2 - (N.length & 3));
        for (var G, ve = "", Oe, ge, Z = 0; Z < N.length; )
          G = l[N.charAt(Z++)] << 18 | l[N.charAt(Z++)] << 12 | (Oe = l[N.charAt(Z++)]) << 6 | (ge = l[N.charAt(Z++)]), ve += Oe === 64 ? p(G >> 16 & 255) : ge === 64 ? p(G >> 16 & 255, G >> 8 & 255) : p(G >> 16 & 255, G >> 8 & 255, G & 255);
        return ve;
      }, ae = typeof atob == "function" ? function(N) {
        return atob(b(N));
      } : i ? function(N) {
        return Buffer.from(N, "base64").toString("binary");
      } : W, V = i ? function(N) {
        return m(Buffer.from(N, "base64"));
      } : function(N) {
        return m(ae(N).split("").map(function(G) {
          return G.charCodeAt(0);
        }));
      }, B = function(N) {
        return V(z(N));
      }, U = i ? function(N) {
        return Buffer.from(N, "base64").toString("utf8");
      } : o ? function(N) {
        return o.decode(V(N));
      } : function(N) {
        return F(ae(N));
      }, z = function(N) {
        return b(N.replace(/[-_]/g, function(G) {
          return G == "-" ? "+" : "/";
        }));
      }, j = function(N) {
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
          return j(this);
        }), N("toBase64", function(G) {
          return A(this, G);
        }), N("toBase64URI", function() {
          return A(this, !0);
        }), N("toBase64URL", function() {
          return A(this, !0);
        }), N("toUint8Array", function() {
          return B(this);
        });
      }, me = function() {
        var N = function(G, ve) {
          return Object.defineProperty(Uint8Array.prototype, G, ee(ve));
        };
        N("toBase64", function(G) {
          return v(this, G);
        }), N("toBase64URI", function() {
          return v(this, !0);
        }), N("toBase64URL", function() {
          return v(this, !0);
        });
      }, xe = function() {
        fe(), me();
      }, Se = {
        version: r,
        VERSION: n,
        atob: ae,
        atobPolyfill: W,
        btoa: a,
        btoaPolyfill: d,
        fromBase64: j,
        toBase64: A,
        encode: A,
        encodeURI: I,
        encodeURL: I,
        utob: P,
        btou: F,
        decode: j,
        isValid: Q,
        fromUint8Array: v,
        toUint8Array: B,
        extendString: fe,
        extendUint8Array: me,
        extendBuiltins: xe
      };
      return Se.Base64 = {}, Object.keys(Se).forEach(function(N) {
        return Se.Base64[N] = Se[N];
      }), Se;
    });
  }(Ur)), Ur.exports;
}
var tl;
function hh() {
  if (tl) return Nt;
  tl = 1;
  var e = Nt.__assign || function() {
    return e = Object.assign || function(p) {
      for (var m, g = 1, b = arguments.length; g < b; g++) {
        m = arguments[g];
        for (var d in m) Object.prototype.hasOwnProperty.call(m, d) && (p[d] = m[d]);
      }
      return p;
    }, e.apply(this, arguments);
  }, t = Nt.__awaiter || function(p, m, g, b) {
    function d(a) {
      return a instanceof g ? a : new g(function(w) {
        w(a);
      });
    }
    return new (g || (g = Promise))(function(a, w) {
      function v(P) {
        try {
          E(b.next(P));
        } catch (R) {
          w(R);
        }
      }
      function _(P) {
        try {
          E(b.throw(P));
        } catch (R) {
          w(R);
        }
      }
      function E(P) {
        P.done ? a(P.value) : d(P.value).then(v, _);
      }
      E((b = b.apply(p, m || [])).next());
    });
  }, r = Nt.__generator || function(p, m) {
    var g = { label: 0, sent: function() {
      if (a[0] & 1) throw a[1];
      return a[1];
    }, trys: [], ops: [] }, b, d, a, w = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return w.next = v(0), w.throw = v(1), w.return = v(2), typeof Symbol == "function" && (w[Symbol.iterator] = function() {
      return this;
    }), w;
    function v(E) {
      return function(P) {
        return _([E, P]);
      };
    }
    function _(E) {
      if (b) throw new TypeError("Generator is already executing.");
      for (; w && (w = 0, E[0] && (g = 0)), g; ) try {
        if (b = 1, d && (a = E[0] & 2 ? d.return : E[0] ? d.throw || ((a = d.return) && a.call(d), 0) : d.next) && !(a = a.call(d, E[1])).done) return a;
        switch (d = 0, a && (E = [E[0] & 2, a.value]), E[0]) {
          case 0:
          case 1:
            a = E;
            break;
          case 4:
            return g.label++, { value: E[1], done: !1 };
          case 5:
            g.label++, d = E[1], E = [0];
            continue;
          case 7:
            E = g.ops.pop(), g.trys.pop();
            continue;
          default:
            if (a = g.trys, !(a = a.length > 0 && a[a.length - 1]) && (E[0] === 6 || E[0] === 2)) {
              g = 0;
              continue;
            }
            if (E[0] === 3 && (!a || E[1] > a[0] && E[1] < a[3])) {
              g.label = E[1];
              break;
            }
            if (E[0] === 6 && g.label < a[1]) {
              g.label = a[1], a = E;
              break;
            }
            if (a && g.label < a[2]) {
              g.label = a[2], g.ops.push(E);
              break;
            }
            a[2] && g.ops.pop(), g.trys.pop();
            continue;
        }
        E = m.call(p, g);
      } catch (P) {
        E = [6, P], d = 0;
      } finally {
        b = a = 0;
      }
      if (E[0] & 5) throw E[1];
      return { value: E[0] ? E[1] : void 0, done: !0 };
    }
  }, n = Nt.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.KintoneRequestConfigBuilder = void 0;
  var i = n(Ml()), o = n(/* @__PURE__ */ fh()), u = /* @__PURE__ */ ph(), c = ei(), s = "http", l = 4096, f = (
    /** @class */
    function() {
      function p(m) {
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
      return p.prototype.build = function(m, g, b, d) {
        return t(this, void 0, void 0, function() {
          var a, w, R, v, _, E, P, R, A, I, q, M, F;
          return r(this, function(W) {
            switch (W.label) {
              case 0:
                switch (a = e(e(e({ method: m, headers: this.headers, url: "".concat(this.baseUrl).concat(g) }, d || {}), c.platformDeps.buildPlatformDependentConfig({
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
                return R = this.buildRequestUrl(g, b), R.length > l ? (v = [e({}, a)], q = { method: "post", headers: e(e({}, this.headers), { "X-HTTP-Method-Override": "GET" }) }, [4, this.buildData(b)]) : [3, 3];
              case 2:
                return [2, e.apply(void 0, v.concat([(q.data = W.sent(), q)]))];
              case 3:
                return [2, e(e({}, a), { url: R })];
              case 4:
                return b instanceof i.default ? [4, this.buildData(b)] : [3, 6];
              case 5:
                return _ = W.sent(), [2, e(e({}, a), { headers: (
                  // NOTE: formData.getHeaders does not exist in a browser environment.
                  typeof _.getHeaders == "function" ? e(e({}, this.headers), _.getHeaders()) : this.headers
                ), data: _ })];
              case 6:
                return E = [e({}, a)], M = {}, [4, this.buildData(b)];
              case 7:
                return [2, e.apply(void 0, E.concat([(M.data = W.sent(), M)]))];
              case 8:
                return P = [e({}, a)], F = {}, [4, this.buildData(b)];
              case 9:
                return [2, e.apply(void 0, P.concat([(F.data = W.sent(), F)]))];
              case 10:
                return A = this.buildRequestUrl, I = [g], [4, this.buildData(b)];
              case 11:
                return R = A.apply(this, I.concat([W.sent()])), [2, e(e({}, a), { url: R })];
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
      }, p.prototype.buildProxyConfig = function(m) {
        var g;
        if (m !== void 0) {
          if (m === !1)
            return !1;
          var b = m;
          return b.auth && (b.auth.username.length === 0 || b.auth.password.length === 0) && (b.auth = void 0), b.protocol = (g = b.protocol) !== null && g !== void 0 ? g : s, b;
        }
      }, p.prototype.buildRequestUrl = function(m, g) {
        return "".concat(this.baseUrl).concat(m, "?").concat(o.default.stringify(g));
      }, p.prototype.buildData = function(m) {
        return t(this, void 0, void 0, function() {
          var g;
          return r(this, function(b) {
            switch (b.label) {
              case 0:
                return this.auth.type !== "session" ? [3, 2] : [4, this.getRequestToken()];
              case 1:
                return g = b.sent(), m instanceof i.default ? (m.append("__REQUEST_TOKEN__", g), [2, m]) : [2, e({ __REQUEST_TOKEN__: g }, m)];
              case 2:
                return [2, m];
            }
          });
        });
      }, p.prototype.buildHeaders = function(m) {
        var g = m.basicAuth, b = m.userAgent, d = g ? {
          Authorization: "Basic ".concat(u.Base64.encode("".concat(g.username, ":").concat(g.password)))
        } : {}, a = c.platformDeps.buildHeaders({ userAgent: b }), w = e(e({}, a), d);
        switch (this.auth.type) {
          case "password":
            return e(e({}, w), { "X-Cybozu-Authorization": u.Base64.encode("".concat(this.auth.username, ":").concat(this.auth.password)) });
          case "apiToken": {
            var v = this.auth.apiToken;
            return Array.isArray(v) ? e(e({}, w), { "X-Cybozu-API-Token": v.join(",") }) : e(e({}, w), { "X-Cybozu-API-Token": v });
          }
          case "oAuthToken":
            return e(e({}, w), { Authorization: "Bearer ".concat(this.auth.oAuthToken) });
          default:
            return e(e({}, w), { "X-Requested-With": "XMLHttpRequest" });
        }
      }, p.prototype.getRequestToken = function() {
        return t(this, void 0, void 0, function() {
          var m;
          return r(this, function(g) {
            switch (g.label) {
              case 0:
                return this.requestToken !== null ? [3, 2] : (m = this, [4, c.platformDeps.getRequestToken()]);
              case 1:
                m.requestToken = g.sent(), g.label = 2;
              case 2:
                return [2, this.requestToken];
            }
          });
        });
      }, p;
    }()
  );
  return Nt.KintoneRequestConfigBuilder = f, Nt;
}
var on = {}, nl;
function mh() {
  if (nl) return on;
  nl = 1;
  var e = on.__assign || function() {
    return e = Object.assign || function(i) {
      for (var o, u = 1, c = arguments.length; u < c; u++) {
        o = arguments[u];
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
      }
      return i;
    }, e.apply(this, arguments);
  }, t = on.__rest || function(i, o) {
    var u = {};
    for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && o.indexOf(c) < 0 && (u[c] = i[c]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, c = Object.getOwnPropertySymbols(i); s < c.length; s++)
        o.indexOf(c[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, c[s]) && (u[c[s]] = i[c[s]]);
    return u;
  };
  Object.defineProperty(on, "__esModule", { value: !0 }), on.KintoneResponseHandler = void 0;
  var r = Vo(), n = (
    /** @class */
    function() {
      function i(o) {
        var u = o.enableAbortSearchError;
        this.enableAbortSearchError = u;
      }
      return i.prototype.handle = function(o) {
        var u = this;
        return o.then(function(c) {
          return u.handleSuccessResponse(c);
        }, function(c) {
          return u.handleErrorResponse(c);
        });
      }, i.prototype.handleSuccessResponse = function(o) {
        if (this.enableAbortSearchError && /Filter aborted because of too many search results/.test(o.headers["x-cybozu-warning"]))
          throw new r.KintoneAbortSearchError(o.headers["x-cybozu-warning"]);
        return o.data;
      }, i.prototype.handleErrorResponse = function(o) {
        if (!o.response)
          throw /mac verify failure/.test(o.toString()) ? new Error("invalid clientCertAuth setting") : o;
        var u = o.response, c = u.data, s = t(u, ["data"]);
        throw typeof c == "string" ? new Error("".concat(s.status, ": ").concat(s.statusText)) : new r.KintoneRestAPIError(e({ data: c }, s));
      }, i;
    }()
  );
  return on.KintoneResponseHandler = n, on;
}
var rl;
function yh() {
  if (rl) return _n;
  rl = 1;
  var e = _n.__assign || function() {
    return e = Object.assign || function(v) {
      for (var _, E = 1, P = arguments.length; E < P; E++) {
        _ = arguments[E];
        for (var R in _) Object.prototype.hasOwnProperty.call(_, R) && (v[R] = _[R]);
      }
      return v;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(_n, "__esModule", { value: !0 }), _n.KintoneRestAPIClient = void 0;
  var t = _p(), r = Sp(), n = Rp(), i = Ap(), o = Pp(), u = Cp(), c = Dp(), s = hh(), l = mh(), f = ei(), p = Uo(), m = function(v) {
    if ("username" in v)
      return e({ type: "password" }, v);
    if ("apiToken" in v)
      return e({ type: "apiToken" }, v);
    if ("oAuthToken" in v)
      return e({ type: "oAuthToken" }, v);
    try {
      return f.platformDeps.getDefaultAuth();
    } catch (_) {
      throw _ instanceof p.UnsupportedPlatformError ? new Error("session authentication is not supported in ".concat(_.platform, " environment.")) : _;
    }
  }, g = (
    /** @class */
    function() {
      function v(_) {
        _ === void 0 && (_ = {});
        var E, P, R;
        b(_), this.baseUrl = f.platformDeps.buildBaseUrl(_.baseUrl).replace(/\/+$/, "");
        var A = m((E = _.auth) !== null && E !== void 0 ? E : {}), I = new s.KintoneRequestConfigBuilder(e(e({}, _), { baseUrl: this.baseUrl, auth: A })), q = new l.KintoneResponseHandler({
          enableAbortSearchError: (R = (P = _.featureFlags) === null || P === void 0 ? void 0 : P.enableAbortSearchError) !== null && R !== void 0 ? R : !1
        }), M = new c.DefaultHttpClient({
          responseHandler: q,
          requestConfigBuilder: I
        }), F = _.guestSpaceId;
        this.bulkRequest_ = new t.BulkRequestClient(M, F), this.record = new n.RecordClient(M, this.bulkRequest_, F), this.app = new r.AppClient(M, F), this.space = new i.SpaceClient(M, F), this.file = new o.FileClient(M, F), this.plugin = new u.PluginClient(M);
      }
      return Object.defineProperty(v, "version", {
        get: function() {
          return f.platformDeps.getVersion();
        },
        enumerable: !1,
        configurable: !0
      }), v.prototype.getBaseUrl = function() {
        return this.baseUrl;
      }, v.prototype.bulkRequest = function(_) {
        return this.bulkRequest_.send(_);
      }, v;
    }()
  );
  _n.KintoneRestAPIClient = g;
  var b = function(v) {
    d(v.baseUrl), a(v.guestSpaceId), w(v.socketTimeout);
  }, d = function(v) {
    if (v !== void 0) {
      var _ = new URL(v);
      if (_.hostname !== "localhost" && _.protocol !== "https:")
        throw new Error('The protocol of baseUrl must be "https".');
    }
  }, a = function(v) {
    if (v === "" || v === null)
      throw new Error("invalid guestSpaceId: got [".concat(v, "]"));
  }, w = function(v) {
    if (v !== void 0) {
      var _ = parseFloat(v.toString());
      if (isNaN(_) || _ < 0)
        throw new Error("Invalid socketTimeout. Must be a positive number.");
    }
  };
  return _n;
}
var il;
function vh() {
  return il || (il = 1, function(e) {
    var t = rn.__createBinding || (Object.create ? function(s, l, f, p) {
      p === void 0 && (p = f);
      var m = Object.getOwnPropertyDescriptor(l, f);
      (!m || ("get" in m ? !l.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
        return l[f];
      } }), Object.defineProperty(s, p, m);
    } : function(s, l, f, p) {
      p === void 0 && (p = f), s[p] = l[f];
    }), r = rn.__setModuleDefault || (Object.create ? function(s, l) {
      Object.defineProperty(s, "default", { enumerable: !0, value: l });
    } : function(s, l) {
      s.default = l;
    }), n = rn.__importStar || /* @__PURE__ */ function() {
      var s = function(l) {
        return s = Object.getOwnPropertyNames || function(f) {
          var p = [];
          for (var m in f) Object.prototype.hasOwnProperty.call(f, m) && (p[p.length] = m);
          return p;
        }, s(l);
      };
      return function(l) {
        if (l && l.__esModule) return l;
        var f = {};
        if (l != null) for (var p = s(l), m = 0; m < p.length; m++) p[m] !== "default" && t(f, l, p[m]);
        return r(f, l), f;
      };
    }(), i = rn.__exportStar || function(s, l) {
      for (var f in s) f !== "default" && !Object.prototype.hasOwnProperty.call(l, f) && t(l, s, f);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KintoneRestAPIClient = void 0;
    var o = ei(), u = n(bp());
    (0, o.injectPlatformDeps)(u);
    var c = yh();
    Object.defineProperty(e, "KintoneRestAPIClient", { enumerable: !0, get: function() {
      return c.KintoneRestAPIClient;
    } }), i(Vo(), e);
  }(rn)), rn;
}
var gh = vh();
const bh = {
  key: 0,
  class: "kvc-file-value"
}, wh = { class: "kvc-file-select-list" }, _h = ["src"], Sh = { key: 1 }, xh = { class: "kvc-file-select-file-name" }, Eh = { class: "kvc-file-select-file-size" }, Oh = { class: "kvc-file-select-list-item" }, Rh = ["onClick"], Ah = { class: "kvc-file-select-file-name" }, Ph = { class: "kvc-file-select-file-size" }, Ch = ["src"], kh = { class: "kvc-file-select-group" }, Th = ["disabled"], Dh = ["multiple", "accept"], Ih = /* @__PURE__ */ Ye({
  __name: "file-select",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    readOnly: { type: Boolean },
    multiple: { type: Boolean },
    accept: {},
    autoUpload: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = new gh.KintoneRestAPIClient(), o = Ae(null), u = Ae(null), c = Ae(r.modelValue || []), s = Ae(null), l = Ae(null), f = Ae(!1);
    al(() => r.modelValue, (a) => {
      c.value = a ? Array.from(a) : [];
    }), Do(async () => {
      if (c.value.length)
        for await (const a of c.value)
          a.fileKey && !a.data && (a.data = await i.file.downloadFile({ fileKey: a.fileKey }));
      s.value && Hd(s, c, {
        onStart: () => f.value = !0,
        onEnd: () => {
          f.value = !1, setTimeout(() => {
            n("update:modelValue", c.value), n("change", c.value);
          }, 0);
        }
      });
    });
    const p = (a, w = 0) => {
      if (a === 0) return "0 Bytes";
      const v = 1024, _ = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], E = Math.floor(Math.log(a) / Math.log(v)), P = (a / Math.pow(v, E)).toFixed(w);
      return `${Number(P).toLocaleString()} ${_[E]}`;
    }, m = (a, w) => {
      if (!a || !w) return;
      const v = new Uint8Array(a), _ = Array.from(v).map((E) => String.fromCharCode(E)).join("");
      return `data:${w};base64,${btoa(_)}`;
    }, g = (a) => {
      c.value.splice(a, 1), n("update:modelValue", c.value), n("change", c.value);
    }, b = async (a) => {
      if (!a) return;
      const w = Array.from(a), v = w.filter((E) => !E.fileKey), _ = r.multiple ? [...c.value, ...w.filter((E) => E.fileKey)] : [];
      for await (const E of v) {
        let P = null;
        r.autoUpload && (P = (await i.file.uploadFile({ file: { name: E.name, data: E } })).fileKey);
        const R = await E.arrayBuffer();
        _.push({
          fileKey: P ?? void 0,
          name: E.name,
          size: E.size,
          contentType: E.type,
          data: R
        });
      }
      n("update:modelValue", _), n("change", _), c.value = _, u.value = null;
    }, { isOverDropZone: d } = of(l, {
      onDrop: (a) => {
        b(a);
      },
      dataTypes: Te(() => {
        var a;
        return ((a = r.accept) == null ? void 0 : a.split(",")) ?? [];
      }),
      // ← 明示的にstring[] or []
      multiple: r.multiple,
      preventDefaultForUnhandled: !1
    });
    return (a, w) => a.readOnly ? (X(), J("div", bh, [
      oe("ul", wh, [
        (X(!0), J(dt, null, ht(c.value, (v, _) => (X(), J("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          v.data && (v.contentType || "").startsWith("image/") ? (X(), J("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(v.data, v.contentType)
          }, null, 8, _h)) : (X(), J("span", Sh, [
            oe("span", xh, Qe(v.name), 1),
            oe("span", Eh, "(" + Qe(p(v.size)) + ")", 1)
          ]))
        ]))), 128))
      ])
    ])) : (X(), J("div", {
      key: 1,
      ref_key: "dropZoneRef",
      ref: l,
      class: "kvc-file-select"
    }, [
      oe("ul", {
        class: "kvc-file-select-list",
        ref_key: "sortWrapRef",
        ref: s
      }, [
        (X(!0), J(dt, null, ht(c.value, (v, _) => (X(), J("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          oe("div", Oh, [
            a.disabled ? Me("", !0) : (X(), J("button", {
              key: 0,
              type: "button",
              class: "kvc-file-select-delete-button",
              onClick: (E) => g(_)
            }, [
              ft(He(At), {
                icon: "mdi:close",
                width: "22"
              })
            ], 8, Rh)),
            oe("span", Ah, Qe(v.name), 1),
            oe("span", Ph, Qe(p(v.size)), 1)
          ]),
          v.data && (v.contentType || "").startsWith("image/") ? (X(), J("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(v.data, v.contentType)
          }, null, 8, Ch)) : Me("", !0)
        ]))), 128))
      ], 512),
      oe("div", kh, [
        oe("button", {
          type: "button",
          disabled: a.disabled,
          class: "kvc-file-select-button",
          onClick: w[0] || (w[0] = (v) => {
            var _;
            return (_ = o.value) == null ? void 0 : _.click();
          })
        }, " 参照 ", 8, Th),
        w[3] || (w[3] = oe("p", { class: "kvc-file-select-text" }, "(最大1 GB)", -1))
      ]),
      !f.value && He(d) ? (X(), J("div", {
        key: 0,
        class: "kvc-file-select-file-dropzone",
        onClick: w[1] || (w[1] = (v) => d.value = !1)
      }, " ここにファイルをドロップします。 ")) : Me("", !0),
      oe("input", {
        type: "file",
        ref_key: "fileSelectRef",
        ref: o,
        multiple: a.multiple,
        accept: a.accept,
        onChange: w[2] || (w[2] = (v) => {
          var _;
          return b(((_ = v.target) == null ? void 0 : _.files) ?? null);
        })
      }, null, 40, Dh)
    ], 512));
  }
}), $h = { class: "kvc-tab" }, Nh = { class: "kvc-tab-header" }, jh = ["onClick"], Mh = /* @__PURE__ */ Ye({
  __name: "index",
  props: {
    small: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = t, i = Ae(e.modelValue), o = (s) => {
      i.value = s, r("update:modelValue", s);
    };
    da("activeTab", i), da("setActiveTab", o);
    const u = sl(), c = Te(() => {
      const s = [];
      return (u.default ? u.default({}) : []).forEach((f) => {
        const p = f.props;
        p != null && p.label && (p != null && p.name) && s.push({
          label: p.label,
          name: p.name
        });
      }), !i.value && s.length > 0 && (i.value = s[0].name), s;
    });
    return (s, l) => (X(), J("div", $h, [
      oe("div", Nh, [
        (X(!0), J(dt, null, ht(c.value, (f) => (X(), J("button", {
          key: f.name,
          type: "button",
          class: ze(["kvc-tab-item", {
            "is-active": i.value === f.name,
            "kvc-tab-item-small": s.small
          }]),
          onClick: (p) => o(f.name)
        }, [
          oe("span", null, Qe(f.label), 1)
        ], 10, jh))), 128))
      ]),
      oe("div", {
        class: ze(["kvc-tab-content", {
          "kvc-tab-content-small": s.small
        }])
      }, [
        bt(s.$slots, "default")
      ], 2)
    ]));
  }
}), qh = { key: 0 }, Fh = /* @__PURE__ */ Ye({
  __name: "pane",
  props: {
    label: {},
    name: {}
  },
  setup(e) {
    const t = e, r = Iu("activeTab", Ae("")), n = Te(() => (r == null ? void 0 : r.value) === t.name);
    return (i, o) => n.value ? (X(), J("div", qh, [
      bt(i.$slots, "default")
    ])) : Me("", !0);
  }
}), Bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KvcButton: hf,
  KvcCheckbox: Tf,
  KvcDatePicker: _l,
  KvcDateTimePicker: vd,
  KvcDropdown: pf,
  KvcField: wf,
  KvcFileSelect: Ih,
  KvcRadio: Of,
  KvcRow: Fu,
  KvcTab: Mh,
  KvcTabPane: Fh,
  KvcTable: Yc,
  KvcTextInput: Mo,
  KvcTextarea: bd,
  KvcTimePicker: Sl,
  KvcWrap: $u
}, Symbol.toStringTag, { value: "Module" })), Wh = {
  install(e) {
    Object.entries(Bh).forEach(([t, r]) => {
      const n = r;
      e.component(n.name || t, n);
    });
  }
};
export {
  hf as KvcButton,
  Tf as KvcCheckbox,
  _l as KvcDatePicker,
  vd as KvcDateTimePicker,
  pf as KvcDropdown,
  wf as KvcField,
  Ih as KvcFileSelect,
  Of as KvcRadio,
  Fu as KvcRow,
  Mh as KvcTab,
  Fh as KvcTabPane,
  Yc as KvcTable,
  Mo as KvcTextInput,
  bd as KvcTextarea,
  Sl as KvcTimePicker,
  $u as KvcWrap,
  Wh as default
};

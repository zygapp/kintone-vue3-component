import { defineComponent as et, openBlock as X, createBlock as sn, resolveDynamicComponent as gu, withModifiers as bu, withCtx as wu, renderSlot as jt, createElementBlock as J, h as fa, computed as Ne, normalizeClass as Ze, createElementVNode as le, createCommentVNode as Ve, Fragment as pt, renderList as gt, normalizeStyle as Xn, toDisplayString as Qe, mergeProps as _u, createVNode as ft, unref as Me, getCurrentScope as Su, onScopeDispose as xu, onMounted as To, nextTick as ol, getCurrentInstance as Eu, watch as al, ref as ke, shallowRef as Ou, toValue as Mt, createTextVNode as Ru, withDirectives as ln, vShow as Io, useSlots as Au, vModelRadio as Pu, vModelCheckbox as Cu, vModelDynamic as ku, reactive as Du, vModelText as Tu, isRef as Iu } from "vue";
const $u = /* @__PURE__ */ et({
  __name: "wrap",
  props: {
    isForm: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, i) => (X(), sn(gu(n.isForm ? "form" : "div"), {
      id: "kvc-wrap",
      class: "kvc-wrap",
      onSubmit: i[0] || (i[0] = bu((o) => r("submit", o), ["prevent"]))
    }, {
      default: wu(() => [
        jt(n.$slots, "default")
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
    jt(e.$slots, "default")
  ]);
}
const Fu = /* @__PURE__ */ Nu(ju, [["render", qu]]), sl = /^[a-z0-9]+(-[a-z0-9]+)*$/, Xr = (e, t, r, n = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    n = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const f = i.pop(), s = i.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : n,
      prefix: s,
      name: f
    };
    return t && !Pr(l) ? null : l;
  }
  const o = i[0], u = o.split("-");
  if (u.length > 1) {
    const f = {
      provider: n,
      prefix: u.shift(),
      name: u.join("-")
    };
    return t && !Pr(f) ? null : f;
  }
  if (r && n === "") {
    const f = {
      provider: n,
      prefix: "",
      name: o
    };
    return t && !Pr(f, r) ? null : f;
  }
  return null;
}, Pr = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, ll = Object.freeze(
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
  ...ll,
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
function da(e, t) {
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
      const f = n[u] && n[u].parent, s = f && o(f);
      s && (i[u] = [f].concat(s));
    }
    return i[u];
  }
  return Object.keys(r).concat(Object.keys(n)).forEach(o), i;
}
function Uu(e, t, r) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function u(f) {
    o = da(
      n[f] || i[f],
      o
    );
  }
  return u(t), r.forEach(u), da(e, o);
}
function ul(e, t) {
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
  ...ll
};
function di(e, t) {
  for (const r in t)
    if (r in e && typeof e[r] != typeof t[r])
      return !1;
  return !0;
}
function cl(e) {
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
const pa = /* @__PURE__ */ Object.create(null);
function Wu(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Tn(e, t) {
  const r = pa[e] || (pa[e] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = Wu(e, t));
}
function fl(e, t) {
  return cl(t) ? ul(t, (r, n) => {
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
function dl(e) {
  return typeof e == "boolean" && (nr = e), nr;
}
function Gu(e) {
  const t = typeof e == "string" ? Xr(e, !0, nr) : e;
  if (t) {
    const r = Tn(t.provider, t.prefix), n = t.name;
    return r.icons[n] || (r.missing.has(n) ? null : void 0);
  }
}
function Ku(e, t) {
  const r = Xr(e, !0, nr);
  if (!r)
    return !1;
  const n = Tn(r.provider, r.prefix);
  return t ? Hu(n, r.name, t) : (n.missing.add(r.name), !0);
}
function zu(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), nr && !t && !e.prefix) {
    let i = !1;
    return cl(e) && (e.prefix = "", ul(e, (o, u) => {
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
  const n = Tn(t, r);
  return !!fl(n, e);
}
const pl = Object.freeze({
  width: null,
  height: null
}), hl = Object.freeze({
  // Dimensions
  ...pl,
  // Transformations
  ...Vr
}), Yu = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Xu = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ha(e, t, r) {
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
      const f = parseFloat(o);
      isNaN(f) ? i.push(o) : i.push(Math.ceil(f * t * r) / r);
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
    ...hl,
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
  const u = n.width, f = n.height, s = i.width, l = i.height;
  let c, p;
  u === null ? (p = f === null ? "1em" : f === "auto" ? l : f, c = ha(p, s / l)) : (c = u === "auto" ? s : u, p = f === null ? ha(c, l / s) : f === "auto" ? l : f);
  const m = {}, g = (d, a) => {
    ec(a) || (m[d] = a.toString());
  };
  g("width", c), g("height", p);
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
    const u = typeof t == "function" ? t(o) : t + (ic++).toString(), f = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + f + ')([")]|\\.[a-z])', "g"),
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
const No = /* @__PURE__ */ Object.create(null), Vn = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Cr = [];
for (; Vn.length > 0; )
  Vn.length === 1 || Math.random() > 0.5 ? Cr.push(Vn.shift()) : Cr.push(Vn.pop());
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
let ma = lc();
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
  }, f = 0;
  return r.forEach((s, l) => {
    f += s.length + 1, f >= i && l > 0 && (n.push(u), u = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, f = s.length), u.icons.push(s);
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
  if (!ma) {
    r("abort", 424);
    return;
  }
  let n = dc(t.provider);
  switch (t.type) {
    case "icons": {
      const o = t.prefix, f = t.icons.join(","), s = new URLSearchParams({
        icons: f
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
  ma(e + n).then((o) => {
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
    const o = i.provider, u = i.prefix, f = i.name, s = r[o] || (r[o] = /* @__PURE__ */ Object.create(null)), l = s[u] || (s[u] = Tn(o, u));
    let c;
    f in l.icons ? c = t.loaded : u === "" || l.missing.has(f) ? c = t.missing : c = t.pending;
    const p = {
      provider: o,
      prefix: u,
      name: f
    };
    c.push(p);
  }), t;
}
function ml(e, t) {
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
      const u = o.icons, f = u.pending.length;
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
      }), u.pending.length !== f && (r || ml([e], o.id), o.callback(
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
  const n = vc++, i = ml.bind(null, r, n);
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
  const f = Date.now();
  let s = "pending", l = 0, c, p = null, m = [], g = [];
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
      startTime: f,
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
      R(void 0, c);
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
      c = I, v();
      return;
    }
    if (q) {
      c = I, m.length || (u.length ? P() : v());
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
function yl(e) {
  const t = {
    ...wc,
    ...e
  };
  let r = [];
  function n() {
    r = r.filter((f) => f().status === "pending");
  }
  function i(f, s, l) {
    const c = _c(
      t,
      f,
      s,
      (p, m) => {
        n(), l && l(p, m);
      }
    );
    return r.push(c), c;
  }
  function o(f) {
    return r.find((s) => f(s)) || null;
  }
  return {
    query: i,
    find: o,
    setIndex: (f) => {
      t.index = f;
    },
    getIndex: () => t.index,
    cleanup: n
  };
}
function ya() {
}
const pi = /* @__PURE__ */ Object.create(null);
function Sc(e) {
  if (!pi[e]) {
    const t = jo(e);
    if (!t)
      return;
    const r = yl(t), n = {
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
      return r(void 0, 424), ya;
    i = o.send;
    const u = Sc(e);
    u && (n = u.redundancy);
  } else {
    const o = $o(e);
    if (o) {
      n = yl(o);
      const u = e.resources ? e.resources[0] : "", f = Ro(u);
      f && (i = f.send);
    }
  }
  return !n || !i ? (r(void 0, 424), ya) : n.query(t, i, r)().abort;
}
function va() {
}
function Ec(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, yc(e);
  }));
}
function Oc(e) {
  const t = [], r = [];
  return e.forEach((n) => {
    (n.match(sl) ? t : r).push(n);
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
      if (!fl(e, r).length) {
        n();
        return;
      }
    } catch (i) {
      console.error(i);
    }
  n(), Ec(e);
}
function ga(e, t) {
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
      ga(
        e.loadIcons(i, n, r),
        (c) => {
          Wn(e, i, c);
        }
      );
      return;
    }
    if (o) {
      i.forEach((c) => {
        const p = o(c, n, r);
        ga(p, (m) => {
          const g = m ? {
            prefix: n,
            icons: {
              [c]: m
            }
          } : null;
          Wn(e, [c], g);
        });
      });
      return;
    }
    const { valid: u, invalid: f } = Oc(i);
    if (f.length && Wn(e, f, null), !u.length)
      return;
    const s = n.match(sl) ? Ro(r) : null;
    if (!s) {
      Wn(e, u, null);
      return;
    }
    s.prepare(r, n, u).forEach((c) => {
      xc(r, c, (p) => {
        Wn(e, c.icons, p);
      });
    });
  }));
}
const Ac = (e, t) => {
  const r = bc(e, !0, dl()), n = mc(r);
  if (!n.pending.length) {
    let s = !0;
    return t && setTimeout(() => {
      s && t(
        n.loaded,
        n.missing,
        n.pending,
        va
      );
    }), () => {
      s = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let u, f;
  return n.pending.forEach((s) => {
    const { provider: l, prefix: c } = s;
    if (c === f && l === u)
      return;
    u = l, f = c, o.push(Tn(l, c));
    const p = i[l] || (i[l] = /* @__PURE__ */ Object.create(null));
    p[c] || (p[c] = []);
  }), n.pending.forEach((s) => {
    const { provider: l, prefix: c, name: p } = s, m = Tn(l, c), g = m.pendingIcons || (m.pendingIcons = /* @__PURE__ */ new Set());
    g.has(p) || (g.add(p), i[l][c].push(p));
  }), o.forEach((s) => {
    const l = i[s.provider][s.prefix];
    l.length && Rc(s, l);
  }), t ? gc(t, n, o) : va;
};
function Pc(e, t) {
  const r = {
    ...e
  };
  for (const n in t) {
    const i = t[n], o = typeof i;
    n in pl ? (i === null || i && (o === "string" || o === "number")) && (r[n] = i) : o === typeof r[n] && (r[n] = n === "rotate" ? i % 4 : i);
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
function Dc(e, t = 0) {
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
function Tc(e, t) {
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
const ba = {
  ...hl,
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
}, vl = {
  backgroundColor: "transparent"
}, wa = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, _a = {
  webkitMask: Ao,
  mask: Ao,
  background: vl
};
for (const e in _a) {
  const t = _a[e];
  for (const r in wa)
    t[e + r] = wa[r];
}
const kr = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  kr[e + "-flip"] = t, kr[e.slice(0, 1) + "-flip"] = t, kr[e + "Flip"] = t;
});
function Sa(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const xa = (e, t) => {
  const r = Pc(ba, t), n = { ...jc }, i = t.mode || "svg", o = {}, u = t.style, f = typeof u == "object" && !(u instanceof Array) ? u : {};
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
          typeof a == "string" ? r[d] = Dc(a) : typeof a == "number" && (r[d] = a);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          a !== !0 && a !== "true" && delete n["aria-hidden"];
          break;
        default: {
          const w = kr[d];
          w ? (a === !0 || a === "true" || a === 1) && (r[w] = !0) : ba[d] === void 0 && (n[d] = a);
        }
      }
  }
  const s = tc(e, r), l = s.attributes;
  if (r.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    n.style = {
      ...o,
      ...f
    }, Object.assign(n, l);
    let d = 0, a = t.id;
    return typeof a == "string" && (a = a.replace(/-/g, "_")), n.innerHTML = oc(s.body, a ? () => a + "ID" + d++ : "iconifyVue"), fa("svg", n);
  }
  const { body: c, width: p, height: m } = e, g = i === "mask" || (i === "bg" ? !1 : c.indexOf("currentColor") !== -1), b = Tc(c, {
    ...l,
    width: p + "",
    height: m + ""
  });
  return n.style = {
    ...o,
    "--svg": Nc(b),
    width: Sa(l.width),
    height: Sa(l.height),
    ...Mc,
    ...g ? Ao : vl,
    ...f
  }, fa("span", n);
};
dl(!0);
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
}, Rt = et({
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
      return xa(qc, e);
    let r = e;
    return t.classes && (r = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), xa({
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
}, Gc = { class: "kvc-table-operation-buttons" }, Kc = ["onClick"], zc = ["onClick"], Yc = /* @__PURE__ */ et({
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
    const r = e, n = t, i = Ne(() => r.readOnly || r.hideOperations), o = (s) => (r.rowData || []).reduce((l, c) => {
      var p;
      return l[`data-${c.key}`] = ((p = s[c.code]) == null ? void 0 : p.value) || null, l;
    }, {}), u = (s) => {
      const l = [...r.modelValue];
      s >= 0 && (l.splice(s + 1, 0, {}), n("update:modelValue", l), n("add", l, s));
    }, f = (s) => {
      const l = [...r.modelValue];
      s >= 0 && (l.splice(s, 1), n("update:modelValue", l), n("delete", l));
    };
    return (s, l) => (X(), J("table", {
      class: Ze(["kvc-table", { "kvc-table-readonly": s.readOnly }])
    }, [
      le("thead", null, [
        le("tr", null, [
          s.recordUrl ? (X(), J("th", Fc)) : Ve("", !0),
          (X(!0), J(pt, null, gt(s.columns, (c, p) => (X(), J("th", {
            key: p,
            style: Xn(c != null && c.width ? { width: c == null ? void 0 : c.width } : void 0)
          }, [
            jt(s.$slots, `column-${(c == null ? void 0 : c.code) || c}`, {}, () => [
              le("span", Bc, Qe((c == null ? void 0 : c.label) ?? c), 1)
            ])
          ], 4))), 128)),
          i.value ? Ve("", !0) : (X(), J("th", Lc))
        ])
      ]),
      le("tbody", null, [
        (X(!0), J(pt, null, gt(s.modelValue, (c, p) => (X(), J("tr", _u({
          key: "row-" + p,
          ref_for: !0
        }, o(c)), [
          s.recordUrl ? (X(), J("td", Uc, [
            c.$id ? (X(), J("a", {
              key: 0,
              href: s.recordUrl + c.$id.value,
              class: "kvc-link",
              target: "_blank",
              rel: "noopener noreferrer",
              style: Xn(s.readOnly ? null : { display: "inline-block", margin: "10px 0" })
            }, [
              ft(Me(Rt), {
                icon: "tdesign:file-filled",
                width: "16"
              })
            ], 12, Vc)) : Ve("", !0)
          ])) : Ve("", !0),
          (X(!0), J(pt, null, gt(s.columns, (m, g) => (X(), J("td", {
            key: "col-" + g,
            "data-code": (m == null ? void 0 : m.code) || m,
            style: Xn(m != null && m.width ? { width: m == null ? void 0 : m.width } : void 0)
          }, [
            jt(s.$slots, (m == null ? void 0 : m.code) || m, {
              index: p,
              row: c,
              width: m == null ? void 0 : m.width,
              column: (m == null ? void 0 : m.code) || m,
              value: c[(m == null ? void 0 : m.code) || m]
            })
          ], 12, Wc))), 128)),
          i.value ? Ve("", !0) : (X(), J("td", Hc, [
            le("div", Gc, [
              le("button", {
                type: "button",
                class: "kvc-table-btn-plus",
                onClick: (m) => u(p)
              }, [
                ft(Me(Rt), {
                  icon: "mdi:plus",
                  width: "14"
                })
              ], 8, Kc),
              le("button", {
                type: "button",
                class: "kvc-table-btn-minus",
                onClick: (m) => f(p)
              }, [
                ft(Me(Rt), {
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
function gl(e) {
  return Su() ? (xu(e), !0) : !1;
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
  return Eu();
}
function mi(e) {
  return Array.isArray(e) ? e : [e];
}
function tf(e, t = !0, r) {
  ef() ? To(e, r) : t ? e() : ol(e);
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
const bl = Qr ? window : void 0, rf = Qr ? window.document : void 0;
function Cn(e) {
  var t;
  const r = Mt(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function Nt(...e) {
  const t = [], r = () => {
    t.forEach((f) => f()), t.length = 0;
  }, n = (f, s, l, c) => (f.addEventListener(s, l, c), () => f.removeEventListener(s, l, c)), i = Ne(() => {
    const f = mi(Mt(e[0])).filter((s) => s != null);
    return f.every((s) => typeof s != "string") ? f : void 0;
  }), o = nf(
    () => {
      var f, s;
      return [
        (s = (f = i.value) == null ? void 0 : f.map((l) => Cn(l))) != null ? s : [bl].filter((l) => l != null),
        mi(Mt(i.value ? e[1] : e[0])),
        mi(Me(i.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Mt(i.value ? e[3] : e[2])
      ];
    },
    ([f, s, l, c]) => {
      if (r(), !(f != null && f.length) || !(s != null && s.length) || !(l != null && l.length))
        return;
      const p = Jc(c) ? { ...c } : c;
      t.push(
        ...f.flatMap(
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
  return gl(r), u;
}
let Ea = !1;
function rr(e, t, r = {}) {
  const { window: n = bl, ignore: i = [], capture: o = !0, detectIframe: u = !1 } = r;
  if (!n)
    return hi;
  if (Qc && !Ea) {
    Ea = !0;
    const d = { passive: !0 };
    Array.from(n.document.body.children).forEach((a) => Nt(a, "click", hi, d)), Nt(n.document.documentElement, "click", hi, d);
  }
  let f = !0;
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
  function c(d, a) {
    const w = Mt(d), v = w.$.subTree && w.$.subTree.children;
    return v == null || !Array.isArray(v) ? !1 : v.some((_) => _.el === a.target || a.composedPath().includes(_.el));
  }
  const p = (d) => {
    const a = Cn(e);
    if (d.target != null && !(!(a instanceof Element) && l(e) && c(e, d)) && !(!a || a === d.target || d.composedPath().includes(a))) {
      if (d.detail === 0 && (f = !s(d)), !f) {
        f = !0;
        return;
      }
      t(d);
    }
  };
  let m = !1;
  const g = [
    Nt(n, "click", (d) => {
      m || (m = !0, setTimeout(() => {
        m = !1;
      }, 0), p(d));
    }, { passive: !0, capture: o }),
    Nt(n, "pointerdown", (d) => {
      const a = Cn(e);
      f = !s(d) && !!(a && !d.composedPath().includes(a));
    }, { passive: !0 }),
    u && Nt(n, "blur", (d) => {
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
  const i = ke(!1), o = Ou(null);
  let u = 0, f = !0;
  if (Qr) {
    const s = typeof t == "function" ? { onDrop: t } : t, l = (r = s.multiple) != null ? r : !0, c = (n = s.preventDefaultForUnhandled) != null ? n : !1, p = (a) => {
      var w, v;
      const _ = Array.from((v = (w = a.dataTransfer) == null ? void 0 : w.files) != null ? v : []);
      return _.length === 0 ? null : l ? _ : [_[0]];
    }, m = (a) => {
      const w = Me(s.dataTypes);
      return typeof w == "function" ? w(a) : w != null && w.length ? a.length === 0 ? !1 : a.every(
        (v) => w.some((_) => v.includes(_))
      ) : !0;
    }, g = (a) => {
      const w = Array.from(a ?? []).map((E) => E.type), v = m(w), _ = l || a.length <= 1;
      return v && _;
    }, b = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !("chrome" in window), d = (a, w) => {
      var v, _, E, P, R, A;
      const I = (v = a.dataTransfer) == null ? void 0 : v.items;
      if (f = (_ = I && g(I)) != null ? _ : !1, c && a.preventDefault(), !b() && !f) {
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
          u = 0, i.value = !1, f && (o.value = q, (A = s.onDrop) == null || A.call(s, q, a));
          break;
      }
    };
    Nt(e, "dragenter", (a) => d(a, "enter")), Nt(e, "dragover", (a) => d(a, "over")), Nt(e, "dragleave", (a) => d(a, "leave")), Nt(e, "drop", (a) => d(a, "drop"));
  }
  return {
    files: o,
    isOverDropZone: i
  };
}
const af = ["onClick", "onMouseover"], sf = { class: "kvc-select-list-item-icon-space" }, lf = { class: "kvc-select-list-item-text" }, Wr = /* @__PURE__ */ et({
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
    const r = e, n = t, i = ke(null), o = /* @__PURE__ */ new Map(), u = ke(null), f = Ne(
      () => typeof r.height == "string" ? r.height : `${r.height}px`
    ), s = Ne(
      () => typeof r.maxHeight == "string" ? r.maxHeight : `${r.maxHeight}px`
    ), l = (g) => {
      const b = o.get(g);
      if (i.value && b) {
        const d = i.value.offsetHeight, a = b.offsetTop, w = b.offsetHeight, v = a - d / 2 + w / 2;
        i.value.scrollTo({ top: v }), u.value = g;
      }
    };
    To(() => l(r.modelValue));
    const c = (g) => {
      n("update:modelValue", g), n("change", g);
    }, p = (g) => typeof g == "object" && g !== null ? g[r.valueKey ?? "value"] ?? g : g, m = (g) => typeof g == "object" && g !== null ? g[r.labelKey ?? "label"] ?? g : g;
    return (g, b) => (X(), J("ul", {
      ref_key: "listWrapRef",
      ref: i,
      class: "kvc-select-list",
      style: Xn({ height: f.value, maxHeight: s.value })
    }, [
      (X(!0), J(pt, null, gt(g.items, (d, a) => (X(), J("li", {
        key: a,
        ref_for: !0,
        ref: (w) => Me(o).set(p(d), w),
        class: Ze(["kvc-select-list-item", {
          "kvc-select-list-item-selected": p(d) === g.modelValue
        }]),
        onClick: (w) => c(p(d)),
        onMouseover: (w) => u.value = p(d)
      }, [
        le("span", sf, [
          p(d) === g.modelValue ? (X(), sn(Me(Rt), {
            key: 0,
            icon: "mdi:check-bold",
            width: "15"
          })) : Ve("", !0)
        ]),
        le("span", lf, Qe(m(d)), 1)
      ], 42, af))), 128))
    ], 4));
  }
}), uf = ["innerHTML"], cf = {
  key: 1,
  class: "kvc-dropdown"
}, ff = ["disabled"], df = /* @__PURE__ */ et({
  __name: "dropdown",
  props: {
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
    const r = e, n = t, i = Ne({
      get: () => r.modelValue ?? "",
      set: (c) => {
        n("update:modelValue", c), n("change", c);
      }
    }), o = ke(!1), u = ke(!1), f = ke(null), s = ke(null);
    rr(s, () => {
      o.value || (u.value = !1, o.value = !1);
    });
    const l = Ne(() => {
      const c = r.itemValue ?? "value", p = r.itemLabel ?? "label", m = r.items.find((g) => typeof g == "object" && g[c] === r.modelValue);
      return m ? m[p] : "";
    });
    return (c, p) => c.readOnly ? (X(), J("p", {
      key: 0,
      class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": c.nonstyled }]),
      innerHTML: c.modelValue
    }, null, 10, uf)) : (X(), J("div", cf, [
      le("button", {
        ref_key: "buttonRef",
        ref: f,
        type: "button",
        class: "kvc-dropdown-button",
        disabled: c.disabled,
        onClick: p[0] || (p[0] = (m) => u.value = !0)
      }, [
        Ru(Qe(l.value) + " ", 1),
        ft(Me(Rt), {
          icon: "mdi-light:chevron-down",
          width: "24"
        })
      ], 8, ff),
      c.readOnly || c.disabled ? Ve("", !0) : ln((X(), sn(Wr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": p[1] || (p[1] = (m) => i.value = m),
        ref_key: "timeRef",
        ref: s,
        items: c.items,
        labelKey: c.itemLabel,
        valueKey: c.itemValue,
        onChange: p[2] || (p[2] = (m) => u.value = !1)
      }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
        [Io, u.value]
      ])
    ]));
  }
}), pf = /* @__PURE__ */ et({
  __name: "button",
  props: {
    sm: { type: Boolean },
    color: {}
  },
  setup(e) {
    return (t, r) => (X(), J("button", {
      type: "button",
      class: Ze(["kvc-button", {
        "kvc-button-sm": t.sm,
        "kvc-button-normal": t.color === "normal",
        "kvc-button-success": t.color === "success",
        "kvc-button-save": t.color === "save",
        "kvc-button-error": t.color === "error"
      }])
    }, [
      jt(t.$slots, "default")
    ], 2));
  }
}), hf = { class: "kvc-field-label" }, mf = {
  key: 0,
  class: "kvc-field-required"
}, yf = { class: "kvc-field-input" }, vf = {
  key: 0,
  class: "kvc-field-prefix"
}, gf = {
  key: 1,
  class: "kvc-field-suffix"
}, bf = /* @__PURE__ */ et({
  __name: "field",
  props: {
    required: { type: Boolean },
    width: {},
    errorMessage: {},
    successMessage: {}
  },
  setup(e) {
    const t = e, r = Au(), n = (o) => typeof o == "number" || !isNaN(Number(o)), i = Ne(
      () => n(t.width) ? `${t.width}px` : t.width
    );
    return (o, u) => (X(), J("div", {
      style: Xn({ maxWidth: i.value }),
      class: "kvc-field"
    }, [
      le("label", hf, [
        jt(o.$slots, "label"),
        o.required ? (X(), J("span", mf)) : Ve("", !0)
      ]),
      le("div", yf, [
        Me(r).prefix && Me(r).prefix() ? (X(), J("div", vf, [
          jt(o.$slots, "prefix")
        ])) : Ve("", !0),
        jt(o.$slots, "default"),
        Me(r).suffix && Me(r).suffix() ? (X(), J("div", gf, [
          jt(o.$slots, "suffix")
        ])) : Ve("", !0)
      ]),
      o.errorMessage || o.successMessage ? (X(), J("div", {
        key: 0,
        class: Ze({
          "kvc-field-message-error": o.errorMessage,
          "kvc-field-message-success": o.successMessage
        })
      }, Qe(o.errorMessage || o.successMessage), 3)) : Ve("", !0)
    ], 4));
  }
}), wf = ["innerHTML"], _f = ["disabled", "value"], Sf = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, xf = ["fill"], Ef = /* @__PURE__ */ et({
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
    const r = e, n = t, i = Ne({
      get: () => r.modelValue ?? "",
      set: (c) => {
        n("update:modelValue", c), n("change", c);
      }
    }), o = r.itemValue ?? "value", u = r.itemLabel ?? "label", f = (c) => c != null && c.disabled ? "#d8d8d8" : r.modelValue == ((c == null ? void 0 : c[o]) ?? c) ? "#3498db" : "#d8d8d8", s = (c) => typeof c == "object" && c !== null ? c[o] ?? c : c, l = (c) => typeof c == "object" && c !== null ? c[u] ?? c : c;
    return (c, p) => c.readOnly ? (X(), J("p", {
      key: 0,
      class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": c.nonstyled }]),
      innerHTML: c.modelValue
    }, null, 10, wf)) : (X(), J("div", {
      key: 1,
      class: Ze(["kvc-radio-group", { "kvc-radio-group-column": c.column }])
    }, [
      (X(!0), J(pt, null, gt(c.items, (m, g) => (X(), J("label", {
        key: g,
        class: "kvc-radio-item"
      }, [
        ln(le("input", {
          type: "radio",
          "onUpdate:modelValue": p[0] || (p[0] = (b) => i.value = b),
          disabled: typeof m == "object" ? m.disabled : !1,
          value: s(m)
        }, null, 8, _f), [
          [Pu, i.value]
        ]),
        (X(), J("svg", Sf, [
          p[1] || (p[1] = le("circle", {
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
            fill: f(m)
          }, null, 8, xf)) : Ve("", !0)
        ])),
        le("span", null, Qe(l(m)), 1)
      ]))), 128))
    ], 2));
  }
}), Of = ["innerHTML"], Rf = ["disabled", "value"], Af = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Pf = ["stroke"], Cf = ["fill"], kf = /* @__PURE__ */ et({
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
    const r = e, n = t, i = Ne({
      get: () => r.modelValue ?? "",
      set: (s) => {
        n("update:modelValue", s), n("change", s);
      }
    }), o = (s) => {
      const l = r.itemValue ?? "value", c = typeof s == "object" ? s[l] : s;
      return s.disabled ? "#e3e7e8" : r.modelValue.includes(c) ? "#3498db" : "#e3e7e8";
    }, u = (s) => {
      const l = r.itemLabel ?? "label";
      return typeof s == "object" ? s[l] : s;
    }, f = (s) => {
      const l = r.itemValue ?? "value";
      return typeof s == "object" ? s[l] : s;
    };
    return (s, l) => s.readOnly ? (X(), J("p", {
      key: 0,
      class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }]),
      innerHTML: s.modelValue.join(", ")
    }, null, 10, Of)) : (X(), J("div", {
      key: 1,
      class: Ze(["kvc-checkbox-group", { "kvc-checkbox-group-column": s.column }])
    }, [
      (X(!0), J(pt, null, gt(s.items, (c, p) => (X(), J("label", {
        key: p,
        class: "kvc-checkbox-item"
      }, [
        ln(le("input", {
          type: "checkbox",
          "onUpdate:modelValue": l[0] || (l[0] = (m) => i.value = m),
          disabled: typeof c == "object" ? c.disabled : !1,
          value: f(c)
        }, null, 8, Rf), [
          [Cu, i.value]
        ]),
        (X(), J("svg", Af, [
          le("rect", {
            x: "1",
            y: "1",
            width: "19",
            height: "19",
            rx: "1",
            fill: "white",
            "stroke-width": "2",
            stroke: o(c)
          }, null, 8, Pf),
          i.value.includes(f(c)) ? (X(), J("path", {
            key: 0,
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z",
            fill: o(c)
          }, null, 8, Cf)) : Ve("", !0)
        ])),
        le("span", null, Qe(u(c)), 1)
      ]))), 128))
    ], 2));
  }
}), Df = ["placeholder", "type", "min", "max"], Mo = /* @__PURE__ */ et({
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
    const r = e, n = t, i = Ne({
      get: () => r.modelValue ?? "",
      set: (o) => n("update:modelValue", o)
    });
    return (o, u) => o.readOnly ? (X(), J("p", {
      key: 0,
      class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": o.nonstyled }])
    }, Qe((i.value || " ").replace(/\r|\n/g, "") || " "), 3)) : ln((X(), J("input", {
      key: 1,
      "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f),
      class: "kvc-field-text",
      placeholder: o.placeholder,
      type: o.type,
      min: o.min,
      max: o.max
    }, null, 8, Df)), [
      [ku, i.value]
    ]);
  }
});
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Tf(e) {
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
var Dr = { exports: {} }, If = Dr.exports, Oa;
function $f() {
  return Oa || (Oa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(If, function() {
      var r = 1e3, n = 6e4, i = 36e5, o = "millisecond", u = "second", f = "minute", s = "hour", l = "day", c = "week", p = "month", m = "quarter", g = "year", b = "date", d = "Invalid Date", a = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(V) {
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
        return { M: p, y: g, w: c, d: l, D: b, h: s, m: f, s: u, ms: o, Q: m }[V] || String(V || "").toLowerCase().replace(/s$/, "");
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
            case c:
              var ve = this.$locale().weekStart || 0, Oe = (xe < ve ? xe + 7 : xe) - ve;
              return fe(Q ? N - Oe : N + (6 - Oe), Se);
            case l:
            case b:
              return me(G + "Hours", 0);
            case s:
              return me(G + "Minutes", 1);
            case f:
              return me(G + "Seconds", 2);
            case u:
              return me(G + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, B.endOf = function(U) {
          return this.startOf(U, !1);
        }, B.$set = function(U, z) {
          var j, Q = F.p(U), ee = "set" + (this.$u ? "UTC" : ""), fe = (j = {}, j[l] = ee + "Date", j[b] = ee + "Date", j[p] = ee + "Month", j[g] = ee + "FullYear", j[s] = ee + "Hours", j[f] = ee + "Minutes", j[u] = ee + "Seconds", j[o] = ee + "Milliseconds", j)[Q], me = Q === l ? this.$D + (z - this.$W) : z;
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
          if (ee === c) return fe(7);
          var me = (j = {}, j[f] = n, j[s] = i, j[u] = r, j)[ee] || 1, xe = this.$d.getTime() + U * me;
          return F.w(xe, this);
        }, B.subtract = function(U, z) {
          return this.add(-1 * U, z);
        }, B.format = function(U) {
          var z = this, j = this.$locale();
          if (!this.isValid()) return j.invalidDate || d;
          var Q = U || "YYYY-MM-DDTHH:mm:ssZ", ee = F.z(this), fe = this.$H, me = this.$m, xe = this.$M, Se = j.weekdays, N = j.months, G = j.meridiem, ve = function(Z, ye, he, Pe) {
            return Z && (Z[ye] || Z(z, Q)) || he[ye].slice(0, Pe);
          }, Oe = function(Z) {
            return F.s(fe % 12 || 12, Z, "0");
          }, ge = G || function(Z, ye, he) {
            var Pe = Z < 12 ? "AM" : "PM";
            return he ? Pe.toLowerCase() : Pe;
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
            case c:
              Q = (Se - xe) / 6048e5;
              break;
            case l:
              Q = (Se - xe) / 864e5;
              break;
            case s:
              Q = Se / i;
              break;
            case f:
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
      }(), oe = W.prototype;
      return M.prototype = oe, [["$ms", o], ["$s", u], ["$m", f], ["$H", s], ["$W", l], ["$M", p], ["$y", g], ["$D", b]].forEach(function(V) {
        oe[V[1]] = function(B) {
          return this.$g(B, V[0], V[1]);
        };
      }), M.extend = function(V, B) {
        return V.$i || (V(B, W, M), V.$i = !0), M;
      }, M.locale = q, M.isDayjs = I, M.unix = function(V) {
        return M(1e3 * V);
      }, M.en = R[P], M.Ls = R, M.p = {}, M;
    });
  }(Dr)), Dr.exports;
}
var Nf = $f();
const Ee = /* @__PURE__ */ $n(Nf);
var Tr = { exports: {} }, jf = Tr.exports, Ra;
function Mf() {
  return Ra || (Ra = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(jf, function() {
      return function(r, n) {
        n.prototype.weekday = function(i) {
          var o = this.$locale().weekStart || 0, u = this.$W, f = (u < o ? u + 7 : u) - o;
          return this.$utils().u(i) ? f : this.subtract(f, "day").add(i, "day");
        };
      };
    });
  }(Tr)), Tr.exports;
}
var qf = Mf();
const Ff = /* @__PURE__ */ $n(qf);
var Ir = { exports: {} }, Bf = Ir.exports, Aa;
function Lf() {
  return Aa || (Aa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Bf, function() {
      return function(r, n) {
        n.prototype.isSameOrBefore = function(i, o) {
          return this.isSame(i, o) || this.isBefore(i, o);
        };
      };
    });
  }(Ir)), Ir.exports;
}
var Uf = Lf();
const Vf = /* @__PURE__ */ $n(Uf), Wf = { class: "kvc-datepicker-popup" }, Hf = { class: "kvc-datepicker-controls" }, Gf = { class: "kvc-datepicker-control-year-month" }, Kf = { class: "kvc-datepicker-control-year" }, zf = { class: "kvc-datepicker-control-selector-text" }, Yf = { class: "kvc-datepicker-control-month" }, Xf = { class: "kvc-datepicker-control-selector-text" }, Jf = { class: "kvc-datepicker-body" }, Qf = ["onClick"], Zf = { class: "kvc-datepicker-bottom" }, ed = /* @__PURE__ */ et({
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
    Ee.extend(Ff), Ee.extend(Vf);
    const r = e, n = t, i = ke(null), o = ke(null), u = ke(null), f = ke(null), s = ke(
      (R = r.modelValue) != null && R.length ? r.modelValue : void 0
    ), l = ["日", "月", "火", "水", "木", "金", "土"], c = Du({
      year: !1,
      month: !1
    }), p = (A) => {
      c[A] = !1;
    };
    rr(i, () => p("year")), rr(o, () => p("month"));
    const m = Ne(
      () => Array.from({ length: 12 }, (A, I) => ({
        label: `${I + 1}月`,
        value: I + 1
      }))
    ), g = Ne(() => {
      const A = Ee(s.value).year(), I = A - 100, q = A + 100, M = [];
      for (let F = I; F <= q; F++)
        M.push({ label: `${F}年`, value: F });
      return M;
    }), b = (A) => {
      s.value = Ee(s.value || void 0).year(A).format("YYYY-MM-DD"), setTimeout(() => c.year = !1, 10);
    }, d = (A) => {
      s.value = Ee(s.value || void 0).month(A - 1).format("YYYY-MM-DD"), setTimeout(() => c.month = !1, 10);
    }, a = Ne(() => Ee(s.value).year()), w = Ne(() => Ee(s.value).month() + 1), v = Ne(() => {
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
      let oe = M.add(1, "day");
      for (; F.length < 6; ) {
        const V = [];
        for (let B = 0; B < 7; B++)
          V.push({
            date: oe.date(),
            fullDate: oe.format("YYYY-MM-DD"),
            isCurrentMonth: oe.month() === Ee(s.value).month(),
            isCurrentDate: oe.isSame(Ee(r.modelValue || void 0), "date"),
            isHoliday: oe.day() === 0 || oe.day() === 6,
            isToday: oe.isSame(Ee(), "day")
          }), oe = oe.add(1, "day");
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
    return (A, I) => (X(), J("div", Wf, [
      le("div", Hf, [
        le("button", {
          class: "kvc-datepicker-control-prev",
          onClick: _
        }, [
          ft(Me(Rt), {
            icon: "mdi-light:chevron-left",
            height: "32"
          })
        ]),
        le("div", Gf, [
          le("div", Kf, [
            le("button", {
              type: "button",
              ref_key: "yearRef",
              ref: i,
              class: "kvc-datepicker-control-selector",
              onClick: I[0] || (I[0] = (q) => c.year = !c.year)
            }, [
              le("span", zf, Qe(a.value) + "年", 1),
              ft(Me(Rt), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              c.year ? (X(), sn(Wr, {
                key: 0,
                ref_key: "yearListRef",
                ref: u,
                class: "kvc-datepicker-controll-selector-list",
                items: g.value,
                "model-value": a.value,
                "max-height": 300,
                onChange: b
              }, null, 8, ["items", "model-value"])) : Ve("", !0)
            ], 512)
          ]),
          le("div", Yf, [
            le("button", {
              type: "button",
              ref_key: "monthRef",
              ref: o,
              class: "kvc-datepicker-control-selector",
              onClick: I[1] || (I[1] = (q) => c.month = !c.month)
            }, [
              le("span", Xf, Qe(w.value) + "月", 1),
              ft(Me(Rt), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              c.month ? (X(), sn(Wr, {
                key: 0,
                ref_key: "monthListRef",
                ref: f,
                class: "kvc-datepicker-controll-selector-list",
                items: m.value,
                "model-value": w.value,
                onChange: d
              }, null, 8, ["items", "model-value"])) : Ve("", !0)
            ], 512)
          ])
        ]),
        le("button", {
          class: "kvc-datepicker-control-next",
          onClick: E
        }, [
          ft(Me(Rt), {
            icon: "mdi-light:chevron-right",
            height: "32"
          })
        ])
      ]),
      le("table", Jf, [
        le("thead", null, [
          le("tr", null, [
            (X(), J(pt, null, gt(l, (q) => le("th", {
              key: q,
              class: Ze(["kvc-datepicker-day", {
                "kvc-datepicker-day-saturday": q === "土",
                "kvc-datepicker-day-sunday": q === "日"
              }])
            }, Qe(q), 3)), 64))
          ])
        ]),
        le("tbody", null, [
          (X(!0), J(pt, null, gt(v.value, (q, M) => (X(), J("tr", { key: M }, [
            (X(!0), J(pt, null, gt(q, (F) => (X(), J("td", {
              key: F.date
            }, [
              le("button", {
                type: "button",
                class: Ze(["kvc-datepicker-date", {
                  "kvc-datepicker-date-notcurrent-month": !F.isCurrentMonth,
                  "kvc-datepicker-date-today": F.isToday,
                  "kvc-datepicker-date-current": F.isCurrentDate
                }]),
                onClick: (W) => P(F.fullDate)
              }, Qe(F.date), 11, Qf)
            ]))), 128))
          ]))), 128))
        ])
      ]),
      le("div", Zf, [
        le("button", {
          type: "button",
          class: "kvc-datepicker-bottom-today",
          onClick: I[2] || (I[2] = (q) => P(Me(Ee)().format("YYYY-MM-DD")))
        }, " 今日 "),
        le("button", {
          type: "button",
          class: "kvc-datepicker-bottom-clear",
          onClick: I[3] || (I[3] = (q) => P())
        }, " 選択を解除 ")
      ])
    ]));
  }
}), td = { class: "kvc-date-picker" }, wl = /* @__PURE__ */ et({
  __name: "date-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Ne({
      get: () => r.modelValue ?? "",
      set: (g) => {
        n("update:modelValue", g), n("change", g);
      }
    }), o = (g) => {
      const b = g.target;
      /^\d{4}-\d{2}-\d{2}$/.test(b.value) || (n("update:modelValue", ""), n("change", ""));
    }, u = ke(!1), f = ke(!1), s = ke(null), l = ke(null), c = () => {
      u.value = !0, f.value = !0;
    }, p = () => {
      u.value = !1;
    }, m = () => {
      f.value = !1, u.value = !1;
    };
    return rr(l, () => {
      u.value || (f.value = !1, u.value = !1);
    }), (g, b) => (X(), J("div", td, [
      ft(Mo, {
        "read-only": g.readOnly,
        disabled: g.disabled,
        nonstyled: g.nonstyled,
        modelValue: i.value,
        "onUpdate:modelValue": b[0] || (b[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: s,
        class: Ze(["text-center", g.readOnly ? "w-28" : "max-w-28"]),
        onFocus: c,
        onBlur: p,
        onChange: o
      }, null, 8, ["read-only", "disabled", "nonstyled", "modelValue", "class"]),
      g.readOnly || g.disabled ? Ve("", !0) : ln((X(), sn(ed, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": b[1] || (b[1] = (d) => i.value = d),
        ref_key: "calendarRef",
        ref: l,
        onClose: m
      }, null, 8, ["modelValue"])), [
        [Io, f.value]
      ])
    ]));
  }
}), nd = { class: "kvc-time-picker" }, _l = /* @__PURE__ */ et({
  __name: "time-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Ne({
      get: () => r.modelValue ?? "",
      set: (g) => {
        n("update:modelValue", g), n("change", g);
      }
    }), o = (g) => {
      const b = g.target;
      /^\d{2}:\d{2}$/.test(b.value) || (n("update:modelValue", ""), n("change", ""));
    }, u = Ne(() => {
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
    }), f = ke(!1), s = ke(!1), l = ke(null), c = ke(null), p = () => {
      f.value = !0, s.value = !0;
    }, m = () => {
      f.value = !1;
    };
    return rr(c, () => {
      f.value || (s.value = !1, f.value = !1);
    }), (g, b) => (X(), J("div", nd, [
      ft(Mo, {
        "read-only": g.readOnly,
        disabled: g.disabled,
        modelValue: i.value,
        "onUpdate:modelValue": b[0] || (b[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: l,
        class: Ze(g.readOnly ? "w-16 text-left" : "max-w-20 text-center"),
        onFocus: p,
        onBlur: m,
        onChange: o
      }, null, 8, ["read-only", "disabled", "modelValue", "class"]),
      g.readOnly || g.disabled ? Ve("", !0) : ln((X(), sn(Wr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": b[1] || (b[1] = (d) => i.value = d),
        ref_key: "timeRef",
        ref: c,
        items: u.value,
        "max-height": 183,
        onChange: b[2] || (b[2] = (d) => s.value = !1)
      }, null, 8, ["modelValue", "items"])), [
        [Io, s.value]
      ])
    ]));
  }
});
var $r = { exports: {} }, rd = $r.exports, Pa;
function id() {
  return Pa || (Pa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(rd, function() {
      var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
      return function(o, u, f) {
        var s = u.prototype;
        f.utc = function(d) {
          var a = { date: d, utc: !0, args: arguments };
          return new u(a);
        }, s.utc = function(d) {
          var a = f(this.toDate(), { locale: this.$L, utc: !0 });
          return d ? a.add(this.utcOffset(), r) : a;
        }, s.local = function() {
          return f(this.toDate(), { locale: this.$L, utc: !1 });
        };
        var l = s.parse;
        s.parse = function(d) {
          d.utc && (this.$u = !0), this.$utils().u(d.$offset) || (this.$offset = d.$offset), l.call(this, d);
        };
        var c = s.init;
        s.init = function() {
          if (this.$u) {
            var d = this.$d;
            this.$y = d.getUTCFullYear(), this.$M = d.getUTCMonth(), this.$D = d.getUTCDate(), this.$W = d.getUTCDay(), this.$H = d.getUTCHours(), this.$m = d.getUTCMinutes(), this.$s = d.getUTCSeconds(), this.$ms = d.getUTCMilliseconds();
          } else c.call(this);
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
          return d === "s" && this.$offset ? f(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : g.call(this);
        };
        var b = s.diff;
        s.diff = function(d, a, w) {
          if (d && this.$u === d.$u) return b.call(this, d, a, w);
          var v = this.local(), _ = f(d).local();
          return b.call(v, _, a, w);
        };
      };
    });
  }($r)), $r.exports;
}
var od = id();
const ad = /* @__PURE__ */ $n(od);
var Nr = { exports: {} }, sd = Nr.exports, Ca;
function ld() {
  return Ca || (Ca = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(sd, function() {
      var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
      return function(i, o, u) {
        var f, s = function(m, g, b) {
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
        }, c = o.prototype;
        c.tz = function(m, g) {
          m === void 0 && (m = f);
          var b, d = this.utcOffset(), a = this.toDate(), w = a.toLocaleString("en-US", { timeZone: m }), v = Math.round((a - new Date(w)) / 1e3 / 60), _ = 15 * -Math.round(a.getTimezoneOffset() / 15) - v;
          if (!Number(_)) b = this.utcOffset(0, g);
          else if (b = u(w, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(_, !0), g) {
            var E = b.utcOffset();
            b = b.add(d - E, "minute");
          }
          return b.$x.$timezone = m, b;
        }, c.offsetName = function(m) {
          var g = this.$x.$timezone || u.tz.guess(), b = s(this.valueOf(), g, { timeZoneName: m }).find(function(d) {
            return d.type.toLowerCase() === "timezonename";
          });
          return b && b.value;
        };
        var p = c.startOf;
        c.startOf = function(m, g) {
          if (!this.$x || !this.$x.$timezone) return p.call(this, m, g);
          var b = u(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return p.call(b, m, g).tz(this.$x.$timezone, !0);
        }, u.tz = function(m, g, b) {
          var d = b && g, a = b || g || f, w = l(+u(), a);
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
          f = m;
        };
      };
    });
  }(Nr)), Nr.exports;
}
var ud = ld();
const cd = /* @__PURE__ */ $n(ud);
var jr = { exports: {} }, fd = jr.exports, ka;
function dd() {
  return ka || (ka = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(fd, function() {
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
        }, f = o.parse;
        o.parse = function(m) {
          m.date = u.bind(this)(m), f.bind(this)(m);
        };
        var s = o.set, l = o.add, c = o.subtract, p = function(m, g, b, d) {
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
          return m.constructor.name === "Object" ? p.bind(this)(l, m, g, -1) : c.bind(this)(m, g);
        };
      };
    });
  }(jr)), jr.exports;
}
var pd = dd();
const hd = /* @__PURE__ */ $n(pd), md = { class: "kvc-datetime-picker" }, yd = /* @__PURE__ */ et({
  __name: "datetime-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    Ee.extend(ad), Ee.extend(cd), Ee.extend(hd), Ee.tz.setDefault("Asia/Tokyo");
    const r = e, n = t, i = Ne(() => r.modelValue && Ee(r.modelValue).isValid()), o = Ne(() => i.value ? Ee(r.modelValue) : void 0), u = (s) => {
      if (s && Ee(s).isValid()) {
        const [l, c, p] = s.split("-").map(Number), m = o.value ? Ee(o.value).year(l).month(c - 1).date(p) : Ee({ year: l, month: c - 1, date: p });
        n("update:modelValue", m.toISOString());
      } else
        n("update:modelValue", void 0);
    }, f = (s) => {
      if (s) {
        const [l, c] = s.split(":").map(Number);
        if (!isNaN(l) && !isNaN(c)) {
          const p = o.value ? Ee(o.value).hour(l).minute(c) : Ee({ hour: l, minute: c });
          n("update:modelValue", p.toISOString());
        } else
          n("update:modelValue", void 0);
      } else
        n("update:modelValue", void 0);
    };
    return (s, l) => (X(), J("div", md, [
      s.readOnly ? (X(), J("p", {
        key: 0,
        class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }])
      }, Qe(s.modelValue && Me(Ee)(s.modelValue).isValid() ? Me(Ee)(s.modelValue).format("YYYY-MM-DD HH:mm") : " "), 3)) : (X(), J(pt, { key: 1 }, [
        ft(wl, {
          "model-value": o.value ? o.value.format("YYYY-MM-DD") : void 0,
          disabled: s.disabled,
          onChange: u
        }, null, 8, ["model-value", "disabled"]),
        ft(_l, {
          "model-value": o.value ? o.value.format("HH:mm") : void 0,
          disabled: s.disabled,
          onChange: f
        }, null, 8, ["model-value", "disabled"])
      ], 64))
    ]));
  }
}), vd = ["innerHTML"], gd = /* @__PURE__ */ et({
  __name: "textarea",
  props: {
    modelValue: {},
    nonstyled: { type: Boolean },
    readOnly: { type: Boolean },
    width: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Ne({
      get: () => r.modelValue ?? "",
      set: (o) => n("update:modelValue", o)
    });
    return (o, u) => o.readOnly ? (X(), J("p", {
      key: 0,
      class: Ze(["kvc-field-value", { "kvc-field-value-nonstyled": o.nonstyled }]),
      innerHTML: (i.value || " ").replace(/\n/g, "<br>")
    }, null, 10, vd)) : ln((X(), J("textarea", {
      key: 1,
      class: "kvc-field-text",
      "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f)
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
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Da(Object(r), !0).forEach(function(n) {
      bd(e, n, r[n]);
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
function bd(e, t, r) {
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
function wd(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function _d(e, t) {
  if (e == null) return {};
  var r = wd(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var Sd = "1.15.6";
function qt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Bt = qt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), or = qt(/Edge/i), Ta = qt(/firefox/i), Jn = qt(/safari/i) && !qt(/chrome/i) && !qt(/android/i), qo = qt(/iP(ad|od|hone)/i), Sl = qt(/chrome/i) && qt(/android/i), xl = {
  capture: !1,
  passive: !1
};
function _e(e, t, r) {
  e.addEventListener(t, r, !Bt && xl);
}
function be(e, t, r) {
  e.removeEventListener(t, r, !Bt && xl);
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
function El(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function vt(e, t, r, n) {
  if (e) {
    r = r || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === r && Hr(e, t) : Hr(e, t)) || n && e === r)
        return e;
      if (e === r) break;
    } while (e = El(e));
  }
  return null;
}
var Ia = /\s+/g;
function ut(e, t, r) {
  if (e && t)
    if (e.classList)
      e.classList[r ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ").replace(Ia, " ").replace(" " + t + " ", " ");
      e.className = (n + (r ? " " + t : "")).replace(Ia, " ");
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
function Dn(e, t) {
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
function Ol(e, t, r) {
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
function Ue(e, t, r, n, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, u, f, s, l, c, p;
    if (e !== window && e.parentNode && e !== At() ? (o = e.getBoundingClientRect(), u = o.top, f = o.left, s = o.bottom, l = o.right, c = o.height, p = o.width) : (u = 0, f = 0, s = window.innerHeight, l = window.innerWidth, c = window.innerHeight, p = window.innerWidth), (t || r) && e !== window && (i = i || e.parentNode, !Bt))
      do
        if (i && i.getBoundingClientRect && (ae(i, "transform") !== "none" || r && ae(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          u -= m.top + parseInt(ae(i, "border-top-width")), f -= m.left + parseInt(ae(i, "border-left-width")), s = u + o.height, l = f + o.width;
          break;
        }
      while (i = i.parentNode);
    if (n && e !== window) {
      var g = Dn(i || e), b = g && g.a, d = g && g.d;
      g && (u /= d, f /= b, p /= b, c /= d, s = u + c, l = f + p);
    }
    return {
      top: u,
      left: f,
      bottom: s,
      right: l,
      width: p,
      height: c
    };
  }
}
function $a(e, t, r) {
  for (var n = Xt(e, !0), i = Ue(e)[t]; n; ) {
    var o = Ue(n)[r], u = void 0;
    if (u = i >= o, !u) return n;
    if (n === At()) break;
    n = Xt(n, !1);
  }
  return !1;
}
function In(e, t, r, n) {
  for (var i = 0, o = 0, u = e.children; o < u.length; ) {
    if (u[o].style.display !== "none" && u[o] !== se.ghost && (n || u[o] !== se.dragged) && vt(u[o], r.draggable, e, !1)) {
      if (i === t)
        return u[o];
      i++;
    }
    o++;
  }
  return null;
}
function Fo(e, t) {
  for (var r = e.lastElementChild; r && (r === se.ghost || ae(r, "display") === "none" || t && !Hr(r, t)); )
    r = r.previousElementSibling;
  return r || null;
}
function dt(e, t) {
  var r = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== se.clone && (!t || Hr(e, t)) && r++;
  return r;
}
function Na(e) {
  var t = 0, r = 0, n = At();
  if (e)
    do {
      var i = Dn(e), o = i.a, u = i.d;
      t += e.scrollLeft * o, r += e.scrollTop * u;
    } while (e !== n && (e = e.parentNode));
  return [t, r];
}
function xd(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === e[r][n]) return Number(r);
    }
  return -1;
}
function Xt(e, t) {
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
function Ed(e, t) {
  if (e && t)
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
function yi(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Qn;
function Rl(e, t) {
  return function() {
    if (!Qn) {
      var r = arguments, n = this;
      r.length === 1 ? e.call(n, r[0]) : e.apply(n, r), Qn = setTimeout(function() {
        Qn = void 0;
      }, t);
    }
  };
}
function Od() {
  clearTimeout(Qn), Qn = void 0;
}
function Al(e, t, r) {
  e.scrollLeft += t, e.scrollTop += r;
}
function Pl(e) {
  var t = window.Polymer, r = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : r ? r(e).clone(!0)[0] : e.cloneNode(!0);
}
function Cl(e, t, r) {
  var n = {};
  return Array.from(e.children).forEach(function(i) {
    var o, u, f, s;
    if (!(!vt(i, t.draggable, e, !1) || i.animated || i === r)) {
      var l = Ue(i);
      n.left = Math.min((o = n.left) !== null && o !== void 0 ? o : 1 / 0, l.left), n.top = Math.min((u = n.top) !== null && u !== void 0 ? u : 1 / 0, l.top), n.right = Math.max((f = n.right) !== null && f !== void 0 ? f : -1 / 0, l.right), n.bottom = Math.max((s = n.bottom) !== null && s !== void 0 ? s : -1 / 0, l.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var at = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Rd() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(ae(i, "display") === "none" || i === se.ghost)) {
            e.push({
              target: i,
              rect: Ue(i)
            });
            var o = Pt({}, e[e.length - 1].rect);
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
      e.splice(xd(e, {
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
      e.forEach(function(f) {
        var s = 0, l = f.target, c = l.fromRect, p = Ue(l), m = l.prevFromRect, g = l.prevToRect, b = f.rect, d = Dn(l, !0);
        d && (p.top -= d.f, p.left -= d.e), l.toRect = p, l.thisAnimationDuration && yi(m, p) && !yi(c, p) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - p.top) / (b.left - p.left) === (c.top - p.top) / (c.left - p.left) && (s = Pd(b, m, g, i.options)), yi(p, c) || (l.prevFromRect = c, l.prevToRect = p, s || (s = i.options.animation), i.animate(l, b, p, s)), s && (o = !0, u = Math.max(u, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, u) : typeof n == "function" && n(), e = [];
    },
    animate: function(n, i, o, u) {
      if (u) {
        ae(n, "transition", ""), ae(n, "transform", "");
        var f = Dn(this.el), s = f && f.a, l = f && f.d, c = (i.left - o.left) / (s || 1), p = (i.top - o.top) / (l || 1);
        n.animatingX = !!c, n.animatingY = !!p, ae(n, "transform", "translate3d(" + c + "px," + p + "px,0)"), this.forRepaintDummy = Ad(n), ae(n, "transition", "transform " + u + "ms" + (this.options.easing ? " " + this.options.easing : "")), ae(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          ae(n, "transition", ""), ae(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, u);
      }
    }
  };
}
function Ad(e) {
  return e.offsetWidth;
}
function Pd(e, t, r, n) {
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
      r[u.pluginName] && (r[u.pluginName][o] && r[u.pluginName][o](Pt({
        sortable: r
      }, n)), r.options[u.pluginName] && r[u.pluginName][t] && r[u.pluginName][t](Pt({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(t, r, n, i) {
    gn.forEach(function(f) {
      var s = f.pluginName;
      if (!(!t.options[s] && !f.initializeByDefault)) {
        var l = new f(t, r, t.options);
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
function Cd(e) {
  var t = e.sortable, r = e.rootEl, n = e.name, i = e.targetEl, o = e.cloneEl, u = e.toEl, f = e.fromEl, s = e.oldIndex, l = e.newIndex, c = e.oldDraggableIndex, p = e.newDraggableIndex, m = e.originalEvent, g = e.putSortable, b = e.extraEventProperties;
  if (t = t || r && r[at], !!t) {
    var d, a = t.options, w = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !Bt && !or ? d = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(n, !0, !0)), d.to = u || r, d.from = f || r, d.item = i || r, d.clone = o, d.oldIndex = s, d.newIndex = l, d.oldDraggableIndex = c, d.newDraggableIndex = p, d.originalEvent = m, d.pullMode = g ? g.lastPutMode : void 0;
    var v = Pt(Pt({}, b), ar.getEventProperties(n, t));
    for (var _ in v)
      d[_] = v[_];
    r && r.dispatchEvent(d), a[w] && a[w].call(t, d);
  }
}
var kd = ["evt"], ot = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, o = _d(n, kd);
  ar.pluginEvent.bind(se)(t, r, Pt({
    dragEl: H,
    parentEl: $e,
    ghostEl: ce,
    rootEl: De,
    nextEl: an,
    lastDownEl: qr,
    cloneEl: Te,
    cloneHidden: Yt,
    dragStarted: Kn,
    putSortable: Ye,
    activeSortable: se.active,
    originalEvent: i,
    oldIndex: kn,
    oldDraggableIndex: Zn,
    newIndex: ct,
    newDraggableIndex: zt,
    hideGhostForTarget: Il,
    unhideGhostForTarget: $l,
    cloneNowHidden: function() {
      Yt = !0;
    },
    cloneNowShown: function() {
      Yt = !1;
    },
    dispatchSortableEvent: function(f) {
      nt({
        sortable: r,
        name: f,
        originalEvent: i
      });
    }
  }, o));
};
function nt(e) {
  Cd(Pt({
    putSortable: Ye,
    cloneEl: Te,
    targetEl: H,
    rootEl: De,
    oldIndex: kn,
    oldDraggableIndex: Zn,
    newIndex: ct,
    newDraggableIndex: zt
  }, e));
}
var H, $e, ce, De, an, qr, Te, Yt, kn, ct, Zn, zt, Er, Ye, Pn = !1, Gr = !1, Kr = [], tn, mt, gi, bi, ja, Ma, Kn, bn, er, tr = !1, Or = !1, Fr, Je, wi = [], Po = !1, zr = [], Zr = typeof document < "u", Rr = qo, qa = or || Bt ? "cssFloat" : "float", Dd = Zr && !Sl && !qo && "draggable" in document.createElement("div"), kl = function() {
  if (Zr) {
    if (Bt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Dl = function(t, r) {
  var n = ae(t), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), o = In(t, 0, r), u = In(t, 1, r), f = o && ae(o), s = u && ae(u), l = f && parseInt(f.marginLeft) + parseInt(f.marginRight) + Ue(o).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ue(u).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && f.float && f.float !== "none") {
    var p = f.float === "left" ? "left" : "right";
    return u && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (f.display === "block" || f.display === "flex" || f.display === "table" || f.display === "grid" || l >= i && n[qa] === "none" || u && n[qa] === "none" && l + c > i) ? "vertical" : "horizontal";
}, Td = function(t, r, n) {
  var i = n ? t.left : t.top, o = n ? t.right : t.bottom, u = n ? t.width : t.height, f = n ? r.left : r.top, s = n ? r.right : r.bottom, l = n ? r.width : r.height;
  return i === f || o === s || i + u / 2 === f + l / 2;
}, Id = function(t, r) {
  var n;
  return Kr.some(function(i) {
    var o = i[at].options.emptyInsertThreshold;
    if (!(!o || Fo(i))) {
      var u = Ue(i), f = t >= u.left - o && t <= u.right + o, s = r >= u.top - o && r <= u.bottom + o;
      if (f && s)
        return n = i;
    }
  }), n;
}, Tl = function(t) {
  function r(o, u) {
    return function(f, s, l, c) {
      var p = f.options.group.name && s.options.group.name && f.options.group.name === s.options.group.name;
      if (o == null && (u || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (u && o === "clone")
        return o;
      if (typeof o == "function")
        return r(o(f, s, l, c), u)(f, s, l, c);
      var m = (u ? f : s).options.group.name;
      return o === !0 || typeof o == "string" && o === m || o.join && o.indexOf(m) > -1;
    };
  }
  var n = {}, i = t.group;
  (!i || Mr(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = r(i.pull, !0), n.checkPut = r(i.put), n.revertClone = i.revertClone, t.group = n;
}, Il = function() {
  !kl && ce && ae(ce, "display", "none");
}, $l = function() {
  !kl && ce && ae(ce, "display", "");
};
Zr && !Sl && document.addEventListener("click", function(e) {
  if (Gr)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Gr = !1, !1;
}, !0);
var nn = function(t) {
  if (H) {
    t = t.touches ? t.touches[0] : t;
    var r = Id(t.clientX, t.clientY);
    if (r) {
      var n = {};
      for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[at]._onDragOver(n);
    }
  }
}, $d = function(t) {
  H && H.parentNode[at]._isOutsideThisEl(t.target);
};
function se(e, t) {
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
    setData: function(u, f) {
      u.setData("Text", f.textContent);
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
    supportPointer: se.supportPointer !== !1 && "PointerEvent" in window && (!Jn || qo),
    emptyInsertThreshold: 5
  };
  ar.initializePlugins(this, e, r);
  for (var n in r)
    !(n in t) && (t[n] = r[n]);
  Tl(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Dd, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? _e(e, "pointerdown", this._onTapStart) : (_e(e, "mousedown", this._onTapStart), _e(e, "touchstart", this._onTapStart)), this.nativeDraggable && (_e(e, "dragover", this), _e(e, "dragenter", this)), Kr.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Ft(this, Rd());
}
se.prototype = /** @lends Sortable.prototype */
{
  constructor: se,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (bn = null);
  },
  _getDirection: function(t, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, r, H) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var r = this, n = this.el, i = this.options, o = i.preventOnFilter, u = t.type, f = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (f || t).target, l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, c = i.filter;
      if (Ud(n), !H && !(/mousedown|pointerdown/.test(u) && t.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Jn && s && s.tagName.toUpperCase() === "SELECT") && (s = vt(s, i.draggable, n, !1), !(s && s.animated) && qr !== s)) {
        if (kn = dt(s), Zn = dt(s, i.draggable), typeof c == "function") {
          if (c.call(this, t, s, this)) {
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
        } else if (c && (c = c.split(",").some(function(p) {
          if (p = vt(l, p.trim(), n, !1), p)
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
        }), c)) {
          o && t.preventDefault();
          return;
        }
        i.handle && !vt(l, i.handle, n, !1) || this._prepareDragStart(t, f, s);
      }
    }
  },
  _prepareDragStart: function(t, r, n) {
    var i = this, o = i.el, u = i.options, f = o.ownerDocument, s;
    if (n && !H && n.parentNode === o) {
      var l = Ue(n);
      if (De = o, H = n, $e = H.parentNode, an = H.nextSibling, qr = n, Er = u.group, se.dragged = H, tn = {
        target: H,
        clientX: (r || t).clientX,
        clientY: (r || t).clientY
      }, ja = tn.clientX - l.left, Ma = tn.clientY - l.top, this._lastX = (r || t).clientX, this._lastY = (r || t).clientY, H.style["will-change"] = "all", s = function() {
        if (ot("delayEnded", i, {
          evt: t
        }), se.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Ta && i.nativeDraggable && (H.draggable = !0), i._triggerDragStart(t, r), nt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), ut(H, u.chosenClass, !0);
      }, u.ignore.split(",").forEach(function(c) {
        Ol(H, c.trim(), _i);
      }), _e(f, "dragover", nn), _e(f, "mousemove", nn), _e(f, "touchmove", nn), u.supportPointer ? (_e(f, "pointerup", i._onDrop), !this.nativeDraggable && _e(f, "pointercancel", i._onDrop)) : (_e(f, "mouseup", i._onDrop), _e(f, "touchend", i._onDrop), _e(f, "touchcancel", i._onDrop)), Ta && this.nativeDraggable && (this.options.touchStartThreshold = 4, H.draggable = !0), ot("delayStart", this, {
        evt: t
      }), u.delay && (!u.delayOnTouchOnly || r) && (!this.nativeDraggable || !(or || Bt))) {
        if (se.eventCanceled) {
          this._onDrop();
          return;
        }
        u.supportPointer ? (_e(f, "pointerup", i._disableDelayedDrag), _e(f, "pointercancel", i._disableDelayedDrag)) : (_e(f, "mouseup", i._disableDelayedDrag), _e(f, "touchend", i._disableDelayedDrag), _e(f, "touchcancel", i._disableDelayedDrag)), _e(f, "mousemove", i._delayedDragTouchMoveHandler), _e(f, "touchmove", i._delayedDragTouchMoveHandler), u.supportPointer && _e(f, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, u.delay);
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
      }), this.nativeDraggable && _e(document, "dragover", $d);
      var n = this.options;
      !t && ut(H, n.dragClass, !1), ut(H, n.ghostClass, !0), se.active = this, t && this._appendGhost(), nt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (mt) {
      this._lastX = mt.clientX, this._lastY = mt.clientY, Il();
      for (var t = document.elementFromPoint(mt.clientX, mt.clientY), r = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(mt.clientX, mt.clientY), t !== r); )
        r = t;
      if (H.parentNode[at]._isOutsideThisEl(t), r)
        do {
          if (r[at]) {
            var n = void 0;
            if (n = r[at]._onDragOver({
              clientX: mt.clientX,
              clientY: mt.clientY,
              target: t,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = r;
        } while (r = El(r));
      $l();
    }
  },
  _onTouchMove: function(t) {
    if (tn) {
      var r = this.options, n = r.fallbackTolerance, i = r.fallbackOffset, o = t.touches ? t.touches[0] : t, u = ce && Dn(ce, !0), f = ce && u && u.a, s = ce && u && u.d, l = Rr && Je && Na(Je), c = (o.clientX - tn.clientX + i.x) / (f || 1) + (l ? l[0] - wi[0] : 0) / (f || 1), p = (o.clientY - tn.clientY + i.y) / (s || 1) + (l ? l[1] - wi[1] : 0) / (s || 1);
      if (!se.active && !Pn) {
        if (n && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (ce) {
        u ? (u.e += c - (gi || 0), u.f += p - (bi || 0)) : u = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: p
        };
        var m = "matrix(".concat(u.a, ",").concat(u.b, ",").concat(u.c, ",").concat(u.d, ",").concat(u.e, ",").concat(u.f, ")");
        ae(ce, "webkitTransform", m), ae(ce, "mozTransform", m), ae(ce, "msTransform", m), ae(ce, "transform", m), gi = c, bi = p, mt = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ce) {
      var t = this.options.fallbackOnBody ? document.body : De, r = Ue(H, !0, Rr, !0, t), n = this.options;
      if (Rr) {
        for (Je = t; ae(Je, "position") === "static" && ae(Je, "transform") === "none" && Je !== document; )
          Je = Je.parentNode;
        Je !== document.body && Je !== document.documentElement ? (Je === document && (Je = At()), r.top += Je.scrollTop, r.left += Je.scrollLeft) : Je = At(), wi = Na(Je);
      }
      ce = H.cloneNode(!0), ut(ce, n.ghostClass, !1), ut(ce, n.fallbackClass, !0), ut(ce, n.dragClass, !0), ae(ce, "transition", ""), ae(ce, "transform", ""), ae(ce, "box-sizing", "border-box"), ae(ce, "margin", 0), ae(ce, "top", r.top), ae(ce, "left", r.left), ae(ce, "width", r.width), ae(ce, "height", r.height), ae(ce, "opacity", "0.8"), ae(ce, "position", Rr ? "absolute" : "fixed"), ae(ce, "zIndex", "100000"), ae(ce, "pointerEvents", "none"), se.ghost = ce, t.appendChild(ce), ae(ce, "transform-origin", ja / parseInt(ce.style.width) * 100 + "% " + Ma / parseInt(ce.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, r) {
    var n = this, i = t.dataTransfer, o = n.options;
    if (ot("dragStart", this, {
      evt: t
    }), se.eventCanceled) {
      this._onDrop();
      return;
    }
    ot("setupClone", this), se.eventCanceled || (Te = Pl(H), Te.removeAttribute("id"), Te.draggable = !1, Te.style["will-change"] = "", this._hideClone(), ut(Te, this.options.chosenClass, !1), se.clone = Te), n.cloneId = Br(function() {
      ot("clone", n), !se.eventCanceled && (n.options.removeCloneOnHide || De.insertBefore(Te, H), n._hideClone(), nt({
        sortable: n,
        name: "clone"
      }));
    }), !r && ut(H, o.dragClass, !0), r ? (Gr = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (be(document, "mouseup", n._onDrop), be(document, "touchend", n._onDrop), be(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(n, i, H)), _e(document, "drop", n), ae(H, "transform", "translateZ(0)")), Pn = !0, n._dragStartId = Br(n._dragStarted.bind(n, r, t)), _e(document, "selectstart", n), Kn = !0, window.getSelection().removeAllRanges(), Jn && ae(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var r = this.el, n = t.target, i, o, u, f = this.options, s = f.group, l = se.active, c = Er === s, p = f.sort, m = Ye || l, g, b = this, d = !1;
    if (Po) return;
    function a(j, Q) {
      ot(j, b, Pt({
        evt: t,
        isOwner: c,
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
      }), j && (c ? l._hideClone() : l._showClone(b), b !== m && (ut(H, Ye ? Ye.options.ghostClass : l.options.ghostClass, !1), ut(H, f.ghostClass, !0)), Ye !== b && b !== se.active ? Ye = b : b === se.active && Ye && (Ye = null), m === b && (b._ignoreWhileAnimating = n), b.animateAll(function() {
        a("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === H && !H.animated || n === r && !n.animated) && (bn = null), !f.dragoverBubble && !t.rootEl && n !== document && (H.parentNode[at]._isOutsideThisEl(t.target), !j && nn(t)), !f.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function _() {
      ct = dt(H), zt = dt(H, f.draggable), nt({
        sortable: b,
        name: "change",
        toEl: r,
        newIndex: ct,
        newDraggableIndex: zt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = vt(n, f.draggable, r, !0), a("dragOver"), se.eventCanceled) return d;
    if (H.contains(t.target) || n.animated && n.animatingX && n.animatingY || b._ignoreWhileAnimating === n)
      return v(!1);
    if (Gr = !1, l && !f.disabled && (c ? p || (u = $e !== De) : Ye === this || (this.lastPutMode = Er.checkPull(this, l, H, t)) && s.checkPut(this, l, H, t))) {
      if (g = this._getDirection(t, n) === "vertical", i = Ue(H), a("dragOverValid"), se.eventCanceled) return d;
      if (u)
        return $e = De, w(), this._hideClone(), a("revert"), se.eventCanceled || (an ? De.insertBefore(H, an) : De.appendChild(H)), v(!0);
      var E = Fo(r, f.draggable);
      if (!E || qd(t, g, this) && !E.animated) {
        if (E === H)
          return v(!1);
        if (E && r === t.target && (n = E), n && (o = Ue(n)), Ar(De, r, H, i, n, o, t, !!n) !== !1)
          return w(), E && E.nextSibling ? r.insertBefore(H, E.nextSibling) : r.appendChild(H), $e = r, _(), v(!0);
      } else if (E && Md(t, g, this)) {
        var P = In(r, 0, f, !0);
        if (P === H)
          return v(!1);
        if (n = P, o = Ue(n), Ar(De, r, H, i, n, o, t, !1) !== !1)
          return w(), r.insertBefore(H, P), $e = r, _(), v(!0);
      } else if (n.parentNode === r) {
        o = Ue(n);
        var R = 0, A, I = H.parentNode !== r, q = !Td(H.animated && H.toRect || i, n.animated && n.toRect || o, g), M = g ? "top" : "left", F = $a(n, "top", "top") || $a(H, "top", "top"), W = F ? F.scrollTop : void 0;
        bn !== n && (A = o[M], tr = !1, Or = !q && f.invertSwap || I), R = Fd(t, n, o, g, q ? 1 : f.swapThreshold, f.invertedSwapThreshold == null ? f.swapThreshold : f.invertedSwapThreshold, Or, bn === n);
        var oe;
        if (R !== 0) {
          var V = dt(H);
          do
            V -= R, oe = $e.children[V];
          while (oe && (ae(oe, "display") === "none" || oe === ce));
        }
        if (R === 0 || oe === n)
          return v(!1);
        bn = n, er = R;
        var B = n.nextElementSibling, U = !1;
        U = R === 1;
        var z = Ar(De, r, H, i, n, o, t, U);
        if (z !== !1)
          return (z === 1 || z === -1) && (U = z === 1), Po = !0, setTimeout(jd, 30), w(), U && !B ? r.appendChild(H) : n.parentNode.insertBefore(H, U ? B : n), F && Al(F, 0, W - F.scrollTop), $e = H.parentNode, A !== void 0 && !Or && (Fr = Math.abs(A - Ue(n)[M])), _(), v(!0);
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
    if (ct = dt(H), zt = dt(H, n.draggable), ot("drop", this, {
      evt: t
    }), $e = H && H.parentNode, ct = dt(H), zt = dt(H, n.draggable), se.eventCanceled) {
      this._nulling();
      return;
    }
    Pn = !1, Or = !1, tr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Co(this.cloneId), Co(this._dragStartId), this.nativeDraggable && (be(document, "drop", this), be(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Jn && ae(document.body, "user-select", ""), ae(H, "transform", ""), t && (Kn && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), ce && ce.parentNode && ce.parentNode.removeChild(ce), (De === $e || Ye && Ye.lastPutMode !== "clone") && Te && Te.parentNode && Te.parentNode.removeChild(Te), H && (this.nativeDraggable && be(H, "dragend", this), _i(H), H.style["will-change"] = "", Kn && !Pn && ut(H, Ye ? Ye.options.ghostClass : this.options.ghostClass, !1), ut(H, this.options.chosenClass, !1), nt({
      sortable: this,
      name: "unchoose",
      toEl: $e,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), De !== $e ? (ct >= 0 && (nt({
      rootEl: $e,
      name: "add",
      toEl: $e,
      fromEl: De,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "remove",
      toEl: $e,
      originalEvent: t
    }), nt({
      rootEl: $e,
      name: "sort",
      toEl: $e,
      fromEl: De,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "sort",
      toEl: $e,
      originalEvent: t
    })), Ye && Ye.save()) : ct !== kn && ct >= 0 && (nt({
      sortable: this,
      name: "update",
      toEl: $e,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "sort",
      toEl: $e,
      originalEvent: t
    })), se.active && ((ct == null || ct === -1) && (ct = kn, zt = Zn), nt({
      sortable: this,
      name: "end",
      toEl: $e,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ot("nulling", this), De = H = $e = ce = an = Te = qr = Yt = tn = mt = Kn = ct = zt = kn = Zn = bn = er = Ye = Er = se.dragged = se.ghost = se.clone = se.active = null, zr.forEach(function(t) {
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
        H && (this._onDragOver(t), Nd(t));
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
      r = n[i], vt(r, u.draggable, this.el, !1) && t.push(r.getAttribute(u.dataIdAttr) || Ld(r));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, r) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(o, u) {
      var f = i.children[u];
      vt(f, this.options.draggable, i, !1) && (n[o] = f);
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
    return vt(t, r || this.options.draggable, this.el, !1);
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
    typeof i < "u" ? n[t] = i : n[t] = r, t === "group" && Tl(n);
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
      if (ot("hideClone", this), se.eventCanceled) return;
      ae(Te, "display", "none"), this.options.removeCloneOnHide && Te.parentNode && Te.parentNode.removeChild(Te), Yt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Yt) {
      if (ot("showClone", this), se.eventCanceled) return;
      H.parentNode == De && !this.options.group.revertClone ? De.insertBefore(Te, H) : an ? De.insertBefore(Te, an) : De.appendChild(Te), this.options.group.revertClone && this.animate(H, Te), ae(Te, "display", ""), Yt = !1;
    }
  }
};
function Nd(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ar(e, t, r, n, i, o, u, f) {
  var s, l = e[at], c = l.options.onMove, p;
  return window.CustomEvent && !Bt && !or ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = r, s.draggedRect = n, s.related = i || t, s.relatedRect = o || Ue(t), s.willInsertAfter = f, s.originalEvent = u, e.dispatchEvent(s), c && (p = c.call(l, s, u)), p;
}
function _i(e) {
  e.draggable = !1;
}
function jd() {
  Po = !1;
}
function Md(e, t, r) {
  var n = Ue(In(r.el, 0, r.options, !0)), i = Cl(r.el, r.options, ce), o = 10;
  return t ? e.clientX < i.left - o || e.clientY < n.top && e.clientX < n.right : e.clientY < i.top - o || e.clientY < n.bottom && e.clientX < n.left;
}
function qd(e, t, r) {
  var n = Ue(Fo(r.el, r.options.draggable)), i = Cl(r.el, r.options, ce), o = 10;
  return t ? e.clientX > i.right + o || e.clientY > n.bottom && e.clientX > n.left : e.clientY > i.bottom + o || e.clientX > n.right && e.clientY > n.top;
}
function Fd(e, t, r, n, i, o, u, f) {
  var s = n ? e.clientY : e.clientX, l = n ? r.height : r.width, c = n ? r.top : r.left, p = n ? r.bottom : r.right, m = !1;
  if (!u) {
    if (f && Fr < l * i) {
      if (!tr && (er === 1 ? s > c + l * o / 2 : s < p - l * o / 2) && (tr = !0), tr)
        m = !0;
      else if (er === 1 ? s < c + Fr : s > p - Fr)
        return -er;
    } else if (s > c + l * (1 - i) / 2 && s < p - l * (1 - i) / 2)
      return Bd(t);
  }
  return m = m || u, m && (s < c + l * o / 2 || s > p - l * o / 2) ? s > c + l / 2 ? 1 : -1 : 0;
}
function Bd(e) {
  return dt(H) < dt(e) ? 1 : -1;
}
function Ld(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, r = t.length, n = 0; r--; )
    n += t.charCodeAt(r);
  return n.toString(36);
}
function Ud(e) {
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
  (se.active || Pn) && e.cancelable && e.preventDefault();
});
se.utils = {
  on: _e,
  off: be,
  css: ae,
  find: Ol,
  is: function(t, r) {
    return !!vt(t, r, t, !1);
  },
  extend: Ed,
  throttle: Rl,
  closest: vt,
  toggleClass: ut,
  clone: Pl,
  index: dt,
  nextTick: Br,
  cancelNextTick: Co,
  detectDirection: Dl,
  getChild: In,
  expando: at
};
se.get = function(e) {
  return e[at];
};
se.mount = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (se.utils = Pt(Pt({}, se.utils), n.utils)), ar.mount(n);
  });
};
se.create = function(e, t) {
  return new se(e, t);
};
se.version = Sd;
var Le = [], zn, ko, Do = !1, Si, xi, Yr, Yn;
function Vd() {
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
      this.sortable.nativeDraggable ? be(document, "dragover", this._handleAutoScroll) : (be(document, "pointermove", this._handleFallbackAutoScroll), be(document, "touchmove", this._handleFallbackAutoScroll), be(document, "mousemove", this._handleFallbackAutoScroll)), Fa(), Lr(), Od();
    },
    nulling: function() {
      Yr = ko = zn = Do = Yn = Si = xi = null, Le.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var i = this, o = (r.touches ? r.touches[0] : r).clientX, u = (r.touches ? r.touches[0] : r).clientY, f = document.elementFromPoint(o, u);
      if (Yr = r, n || this.options.forceAutoScrollFallback || or || Bt || Jn) {
        Ei(r, this.options, f, n);
        var s = Xt(f, !0);
        Do && (!Yn || o !== Si || u !== xi) && (Yn && Fa(), Yn = setInterval(function() {
          var l = Xt(document.elementFromPoint(o, u), !0);
          l !== s && (s = l, Lr()), Ei(r, i.options, l, n);
        }, 10), Si = o, xi = u);
      } else {
        if (!this.options.bubbleScroll || Xt(f, !0) === At()) {
          Lr();
          return;
        }
        Ei(r, this.options, Xt(f, !1), !1);
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
function Fa() {
  clearInterval(Yn);
}
var Ei = Rl(function(e, t, r, n) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, u = t.scrollSensitivity, f = t.scrollSpeed, s = At(), l = !1, c;
    ko !== r && (ko = r, Lr(), zn = t.scroll, c = t.scrollFn, zn === !0 && (zn = Xt(r, !0)));
    var p = 0, m = zn;
    do {
      var g = m, b = Ue(g), d = b.top, a = b.bottom, w = b.left, v = b.right, _ = b.width, E = b.height, P = void 0, R = void 0, A = g.scrollWidth, I = g.scrollHeight, q = ae(g), M = g.scrollLeft, F = g.scrollTop;
      g === s ? (P = _ < A && (q.overflowX === "auto" || q.overflowX === "scroll" || q.overflowX === "visible"), R = E < I && (q.overflowY === "auto" || q.overflowY === "scroll" || q.overflowY === "visible")) : (P = _ < A && (q.overflowX === "auto" || q.overflowX === "scroll"), R = E < I && (q.overflowY === "auto" || q.overflowY === "scroll"));
      var W = P && (Math.abs(v - i) <= u && M + _ < A) - (Math.abs(w - i) <= u && !!M), oe = R && (Math.abs(a - o) <= u && F + E < I) - (Math.abs(d - o) <= u && !!F);
      if (!Le[p])
        for (var V = 0; V <= p; V++)
          Le[V] || (Le[V] = {});
      (Le[p].vx != W || Le[p].vy != oe || Le[p].el !== g) && (Le[p].el = g, Le[p].vx = W, Le[p].vy = oe, clearInterval(Le[p].pid), (W != 0 || oe != 0) && (l = !0, Le[p].pid = setInterval((function() {
        n && this.layer === 0 && se.active._onTouchMove(Yr);
        var B = Le[this.layer].vy ? Le[this.layer].vy * f : 0, U = Le[this.layer].vx ? Le[this.layer].vx * f : 0;
        typeof c == "function" && c.call(se.dragged.parentNode[at], U, B, e, Yr, Le[this.layer].el) !== "continue" || Al(Le[this.layer].el, U, B);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && m !== s && (m = Xt(m, !1)));
    Do = l;
  }
}, 30), Nl = function(t) {
  var r = t.originalEvent, n = t.putSortable, i = t.dragEl, o = t.activeSortable, u = t.dispatchSortableEvent, f = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (r) {
    var l = n || o;
    f();
    var c = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, p = document.elementFromPoint(c.clientX, c.clientY);
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
    var i = In(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(r, i) : this.sortable.el.appendChild(r), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Nl
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
  drop: Nl
};
Ft(Lo, {
  pluginName: "removeOnSpill"
});
se.mount(new Vd());
se.mount(Lo, Bo);
function Wd(e, t, r = {}) {
  let n;
  const { document: i = rf, ...o } = r, u = {
    onUpdate: (c) => {
      Kd(t, c.oldIndex, c.newIndex, c);
    }
  }, f = () => {
    const c = typeof e == "string" ? i == null ? void 0 : i.querySelector(e) : Cn(e);
    !c || n !== void 0 || (n = new se(c, { ...u, ...o }));
  }, s = () => {
    n == null || n.destroy(), n = void 0;
  }, l = (c, p) => {
    if (p !== void 0)
      n == null || n.option(c, p);
    else
      return n == null ? void 0 : n.option(c);
  };
  return tf(f), gl(s), {
    stop: s,
    start: f,
    option: l
  };
}
function Hd(e, t, r) {
  const n = e.children[r];
  e.insertBefore(t, n);
}
function Gd(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Kd(e, t, r, n = null) {
  n != null && (Gd(n.item), Hd(n.from, n.item, t));
  const i = Iu(e), o = i ? [...Mt(e)] : Mt(e);
  if (r >= 0 && r < o.length) {
    const u = o.splice(t, 1)[0];
    ol(() => {
      o.splice(r, 0, u), i && (e.value = o);
    });
  }
}
var rn = {}, Oi = {}, Ba;
function ei() {
  return Ba || (Ba = 1, function(e) {
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
var Ie = {}, wn = {}, La;
function Uo() {
  if (La) return wn;
  La = 1;
  var e = wn.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
        o.__proto__ = u;
      } || function(o, u) {
        for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (o[f] = u[f]);
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
var Ri, Ua;
function zd() {
  if (Ua) return Ri;
  Ua = 1;
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
var Ai, Va;
function Yd() {
  return Va || (Va = 1, Ai = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }), Ai;
}
var Pi, Wa;
function Xd() {
  if (Wa) return Pi;
  Wa = 1;
  let e = zd();
  return Pi = new e(Yd()), Pi;
}
const Jd = "@kintone/rest-api-client", Qd = "5.7.0", Zd = { access: "public" }, ep = { name: "Cybozu, Inc.", url: "https://cybozu.co.jp" }, tp = "Kintone REST API client for JavaScript", np = "lib/src/index.js", rp = "esm/src/index.js", ip = "lib/src/index.browser.js", op = "lib/src/index.d.ts", ap = { prebuild: "pnpm clean", build: "tsc --build --force", postbuild: "run-p build:*", lint: "eslint 'src/**/*.ts' --max-warnings 0", prepublishOnly: "run-p build:umd_*", test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest", "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand", "build:umd_dev": "rollup -c --environment BUILD:development", "build:umd_prod": "rollup -c --environment BUILD:production", clean: "rimraf lib esm umd", fix: "pnpm lint --fix", start: "pnpm build --watch" }, sp = { type: "git", url: "git+https://github.com/kintone/js-sdk.git", directory: "packages/rest-api-client" }, lp = ["esm", "lib", "umd", "index.mjs"], up = ["kintone", "rest", "api-client"], cp = "MIT", fp = { url: "https://github.com/kintone/js-sdk/issues" }, dp = "https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme", pp = { node: ">=18" }, hp = { "@rollup/plugin-babel": "^6.0.4", "@rollup/plugin-commonjs": "^26.0.3", "@rollup/plugin-json": "^6.1.0", "@rollup/plugin-node-resolve": "^15.3.1", "@rollup/plugin-terser": "^0.4.4", "@types/core-js": "^2.5.8", "@types/js-base64": "^3.3.1", "@types/mime": "^3.0.4", "@types/qs": "^6.9.17", rollup: "^4.30.1", "rollup-plugin-ecma-version-validator": "^0.2.13", "rollup-plugin-license": "^3.5.3", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-polyfill-node": "^0.13.0", webpack: "^5.97.1", "webpack-cli": "^5.1.4", "babel-loader": "^9.2.1", vite: "^5.4.11", rimraf: "^5.0.10", "cross-env": "^7.0.3" }, mp = { "core-js": "^3.39.0", axios: "^1.7.9", "form-data": "^4.0.1", "js-base64": "^3.7.7", mime: "^3.0.0", qs: "^6.12.3" }, yp = { ".": { types: { import: "./esm/src/index.d.ts", require: "./lib/src/index.d.ts", default: "./lib/src/index.d.ts" }, node: { import: "./index.mjs", require: "./lib/src/index.js", default: "./lib/src/index.js" }, browser: "./lib/src/index.browser.js" }, "./package.json": "./package.json" }, vp = {
  name: Jd,
  version: Qd,
  publishConfig: Zd,
  author: ep,
  description: tp,
  main: np,
  module: rp,
  browser: ip,
  types: op,
  scripts: ap,
  repository: sp,
  files: lp,
  keywords: up,
  license: cp,
  bugs: fp,
  homepage: dp,
  engines: pp,
  devDependencies: hp,
  dependencies: mp,
  exports: yp
};
var Ha;
function gp() {
  if (Ha) return Ie;
  Ha = 1;
  var e = Ie.__awaiter || function(b, d, a, w) {
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
  }, t = Ie.__generator || function(b, d) {
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
  }, r = Ie.__importDefault || function(b) {
    return b && b.__esModule ? b : { default: b };
  };
  Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getVersion = Ie.buildBaseUrl = Ie.buildFormDataValue = Ie.buildHeaders = Ie.buildPlatformDependentConfig = Ie.getDefaultAuth = Ie.getRequestToken = Ie.readFileFromPath = void 0;
  var n = Uo(), i = r(Xd()), o = r(vp), u = function(b) {
    throw new n.UnsupportedPlatformError("Browser");
  };
  Ie.readFileFromPath = u;
  var f = function() {
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
  Ie.getRequestToken = f;
  var s = function() {
    return {
      type: "session"
    };
  };
  Ie.getDefaultAuth = s;
  var l = function() {
    return {};
  };
  Ie.buildPlatformDependentConfig = l;
  var c = function() {
    return {};
  };
  Ie.buildHeaders = c;
  var p = function(b, d) {
    var a = {};
    return d && (a.type = i.default.getType(d) || void 0), new Blob([b], a);
  };
  Ie.buildFormDataValue = p;
  var m = function(b) {
    if (b)
      return b;
    if (location === void 0)
      throw new Error("The baseUrl parameter is required for this environment");
    var d = location.host, a = location.protocol;
    return "".concat(a, "//").concat(d);
  };
  Ie.buildBaseUrl = m;
  var g = function() {
    return o.default.version;
  };
  return Ie.getVersion = g, Ie;
}
var _n = {}, Kt = {}, Sn = {}, Hn = {}, Ga;
function bp() {
  if (Ga) return Hn;
  Ga = 1, Object.defineProperty(Hn, "__esModule", { value: !0 }), Hn.buildPath = void 0;
  var e = function(t) {
    var r = t.endpointName, n = t.guestSpaceId, i = t.preview, o = n !== void 0 ? "/guest/".concat(n) : "", u = i ? "/preview" : "";
    return "/k".concat(o, "/v1").concat(u, "/").concat(r, ".json");
  };
  return Hn.buildPath = e, Hn;
}
var Ka;
function Nn() {
  if (Ka) return Sn;
  Ka = 1;
  var e = Sn.__assign || function() {
    return e = Object.assign || function(n) {
      for (var i, o = 1, u = arguments.length; o < u; o++) {
        i = arguments[o];
        for (var f in i) Object.prototype.hasOwnProperty.call(i, f) && (n[f] = i[f]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.BaseClient = void 0;
  var t = bp(), r = (
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
var za;
function wp() {
  if (za) return Kt;
  za = 1;
  var e = Kt.__extends || /* @__PURE__ */ function() {
    var o = function(u, f) {
      return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
        s.__proto__ = l;
      } || function(s, l) {
        for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (s[c] = l[c]);
      }, o(u, f);
    };
    return function(u, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      o(u, f);
      function s() {
        this.constructor = u;
      }
      u.prototype = f === null ? Object.create(f) : (s.prototype = f.prototype, new s());
    };
  }(), t = Kt.__assign || function() {
    return t = Object.assign || function(o) {
      for (var u, f = 1, s = arguments.length; f < s; f++) {
        u = arguments[f];
        for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (o[l] = u[l]);
      }
      return o;
    }, t.apply(this, arguments);
  }, r = Kt.__rest || function(o, u) {
    var f = {};
    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && u.indexOf(s) < 0 && (f[s] = o[s]);
    if (o != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, s = Object.getOwnPropertySymbols(o); l < s.length; l++)
        u.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(o, s[l]) && (f[s[l]] = o[s[l]]);
    return f;
  };
  Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.BulkRequestClient = void 0;
  var n = Nn(), i = (
    /** @class */
    function(o) {
      e(u, o);
      function u(f, s) {
        var l = o.call(this, f, s) || this;
        return l.REQUESTS_LENGTH_LIMIT = 20, l;
      }
      return u.prototype.send = function(f) {
        var s = this, l = f.requests, c = l.map(function(m) {
          if ("endpointName" in m) {
            var g = m.endpointName, b = r(m, ["endpointName"]);
            return t({ api: s.buildPathWithGuestSpaceId({ endpointName: g }) }, b);
          }
          return m;
        }), p = this.buildPathWithGuestSpaceId({
          endpointName: "bulkRequest"
        });
        return this.client.post(p, { requests: c });
      }, u;
    }(n.BaseClient)
  );
  return Kt.BulkRequestClient = i, Kt;
}
var Ot = {}, Ya;
function _p() {
  if (Ya) return Ot;
  Ya = 1;
  var e = Ot.__extends || /* @__PURE__ */ function() {
    var f = function(s, l) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, p) {
        c.__proto__ = p;
      } || function(c, p) {
        for (var m in p) Object.prototype.hasOwnProperty.call(p, m) && (c[m] = p[m]);
      }, f(s, l);
    };
    return function(s, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      f(s, l);
      function c() {
        this.constructor = s;
      }
      s.prototype = l === null ? Object.create(l) : (c.prototype = l.prototype, new c());
    };
  }(), t = Ot.__assign || function() {
    return t = Object.assign || function(f) {
      for (var s, l = 1, c = arguments.length; l < c; l++) {
        s = arguments[l];
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (f[p] = s[p]);
      }
      return f;
    }, t.apply(this, arguments);
  }, r = Ot.__awaiter || function(f, s, l, c) {
    function p(m) {
      return m instanceof l ? m : new l(function(g) {
        g(m);
      });
    }
    return new (l || (l = Promise))(function(m, g) {
      function b(w) {
        try {
          a(c.next(w));
        } catch (v) {
          g(v);
        }
      }
      function d(w) {
        try {
          a(c.throw(w));
        } catch (v) {
          g(v);
        }
      }
      function a(w) {
        w.done ? m(w.value) : p(w.value).then(b, d);
      }
      a((c = c.apply(f, s || [])).next());
    });
  }, n = Ot.__generator || function(f, s) {
    var l = { label: 0, sent: function() {
      if (m[0] & 1) throw m[1];
      return m[1];
    }, trys: [], ops: [] }, c, p, m, g = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return g.next = b(0), g.throw = b(1), g.return = b(2), typeof Symbol == "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function b(a) {
      return function(w) {
        return d([a, w]);
      };
    }
    function d(a) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; g && (g = 0, a[0] && (l = 0)), l; ) try {
        if (c = 1, p && (m = a[0] & 2 ? p.return : a[0] ? p.throw || ((m = p.return) && m.call(p), 0) : p.next) && !(m = m.call(p, a[1])).done) return m;
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
        a = s.call(f, l);
      } catch (w) {
        a = [6, w], p = 0;
      } finally {
        c = m = 0;
      }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  }, i = Ot.__rest || function(f, s) {
    var l = {};
    for (var c in f) Object.prototype.hasOwnProperty.call(f, c) && s.indexOf(c) < 0 && (l[c] = f[c]);
    if (f != null && typeof Object.getOwnPropertySymbols == "function")
      for (var p = 0, c = Object.getOwnPropertySymbols(f); p < c.length; p++)
        s.indexOf(c[p]) < 0 && Object.prototype.propertyIsEnumerable.call(f, c[p]) && (l[c[p]] = f[c[p]]);
    return l;
  };
  Object.defineProperty(Ot, "__esModule", { value: !0 }), Ot.AppClient = void 0;
  var o = Nn(), u = (
    /** @class */
    function(f) {
      e(s, f);
      function s() {
        return f !== null && f.apply(this, arguments) || this;
      }
      return s.prototype.getFormFields = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: c
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.addFormFields = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.post(c, l);
      }, s.prototype.updateFormFields = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.deleteFormFields = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.delete(c, l);
      }, s.prototype.getFormLayout = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: c
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateFormLayout = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getViews = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: c
        });
        return this.client.get(m, p);
      }, s.prototype.updateViews = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getApp = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app"
        });
        return this.client.get(c, l);
      }, s.prototype.getApps = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "apps"
        });
        return this.client.get(c, l);
      }, s.prototype.addApp = function(l) {
        return r(this, void 0, void 0, function() {
          var c, p, m, g, b;
          return n(this, function(d) {
            switch (d.label) {
              case 0:
                return c = l.name, p = l.space, m = this.buildPathWithGuestSpaceId({
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
                return [2, this.client.post(m, { name: c })];
            }
          });
        });
      }, s.prototype.getAppSettings = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: c
        });
        return this.client.get(m, p);
      }, s.prototype.updateAppSettings = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getProcessManagement = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: c
        });
        return this.client.get(m, p);
      }, s.prototype.updateProcessManagement = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getDeployStatus = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.get(c, l);
      }, s.prototype.deployApp = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.post(c, l);
      }, s.prototype.getFieldAcl = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: c
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateFieldAcl = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getAppAcl = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: c
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateAppAcl = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.evaluateRecordsAcl = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/acl/evaluate"
        });
        return this.client.get(c, l);
      }, s.prototype.getRecordAcl = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: c
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateRecordAcl = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getAppCustomize = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: c
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateAppCustomize = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getGeneralNotifications = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: c
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateGeneralNotifications = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getPerRecordNotifications = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: c
        });
        return this.client.get(m, p);
      }, s.prototype.updatePerRecordNotifications = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getReminderNotifications = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: c
        });
        return this.client.get(m, p);
      }, s.prototype.updateReminderNotifications = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getReports = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: c
        });
        return this.client.get(m, p);
      }, s.prototype.updateReports = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getAppActions = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: c
        });
        return this.client.get(m, p);
      }, s.prototype.updateAppActions = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.getAdminNotes = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: c
        });
        return this.client.get(m, p);
      }, s.prototype.updateAdminNotes = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: !0
        });
        return this.client.put(c, l);
      }, s.prototype.move = function(l) {
        var c = this.buildPath({
          endpointName: "app/move"
        });
        return this.client.post(c, l);
      }, s.prototype.getPlugins = function(l) {
        var c = l.preview, p = i(l, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: c
        });
        return this.client.get(m, p);
      }, s.prototype.addPlugins = function(l) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: !0
        });
        return this.client.post(c, l);
      }, s;
    }(o.BaseClient)
  );
  return Ot.AppClient = u, Ot;
}
var yt = {}, Gn = {}, xn = {}, Xa;
function Sp() {
  if (Xa) return xn;
  Xa = 1;
  var e = xn.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
        o.__proto__ = u;
      } || function(o, u) {
        for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (o[f] = u[f]);
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
var En = {}, Ja;
function xp() {
  if (Ja) return En;
  Ja = 1;
  var e = En.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
        o.__proto__ = u;
      } || function(o, u) {
        for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (o[f] = u[f]);
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
      function n(i, o, u, f, s) {
        var l = this, c = u - o.length, p = n.extractErrorIndex(c, f, s), m = n.buildErrorMessage(c, u, p);
        return l = r.call(this, m) || this, l.name = "KintoneAllRecordsError", l.processedRecordsResult = i, l.unprocessedRecords = o, l.error = f, l.errorIndex = p, l.message = m, l.numOfProcessedRecords = c, l.numOfAllRecords = u, Object.setPrototypeOf(l, n.prototype), l;
      }
      return n.parseErrorIndex = function(i) {
        var o = [];
        return Object.keys(i).forEach(function(u) {
          var f = u.match(/records\[(\d+)\]/);
          f && o.push(Number(f[1]));
        }), o.length > 0 ? Math.min.apply(Math, o) : null;
      }, n.extractErrorIndex = function(i, o, u) {
        if (o.bulkRequestIndex !== void 0 && o.errors) {
          var f = n.parseErrorIndex(o.errors);
          if (f !== null)
            return i + o.bulkRequestIndex * u + f;
        }
      }, n.buildErrorMessage = function(i, o, u) {
        var f = "";
        return u !== void 0 && (f = "An error occurred at records[".concat(u, "]. ")), f += "".concat(i, "/").concat(o, " records are processed successfully"), f;
      }, n;
    }(Error)
  );
  return En.KintoneAllRecordsError = t, En;
}
var On = {}, Qa;
function Ep() {
  if (Qa) return On;
  Qa = 1;
  var e = On.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
        o.__proto__ = u;
      } || function(o, u) {
        for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (o[f] = u[f]);
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
        var o = this, u = n.buildErrorResponseDateWithIndex(i), f = u.data, s = u.bulkRequestIndex;
        return o = r.call(this, f.message) || this, o.name = "KintoneRestAPIError", o.id = f.id, o.code = f.code, o.errors = f.errors, o.status = i.status, o.bulkRequestIndex = s, o.headers = i.headers, o.message = "[".concat(i.status, "] [").concat(o.code, "] ").concat(o.message, " (").concat(o.id, ")"), Error.captureStackTrace && Error.captureStackTrace(o, n), Object.setPrototypeOf(o, n.prototype), o;
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
var Za;
function Vo() {
  return Za || (Za = 1, function(e) {
    var t = Gn.__createBinding || (Object.create ? function(n, i, o, u) {
      u === void 0 && (u = o);
      var f = Object.getOwnPropertyDescriptor(i, o);
      (!f || ("get" in f ? !i.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
        return i[o];
      } }), Object.defineProperty(n, u, f);
    } : function(n, i, o, u) {
      u === void 0 && (u = o), n[u] = i[o];
    }), r = Gn.__exportStar || function(n, i) {
      for (var o in n) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, n, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), r(Sp(), e), r(xp(), e), r(Ep(), e);
  }(Gn)), Gn;
}
var es;
function Op() {
  if (es) return yt;
  es = 1;
  var e = yt.__extends || /* @__PURE__ */ function() {
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
  }(), t = yt.__assign || function() {
    return t = Object.assign || function(g) {
      for (var b, d = 1, a = arguments.length; d < a; d++) {
        b = arguments[d];
        for (var w in b) Object.prototype.hasOwnProperty.call(b, w) && (g[w] = b[w]);
      }
      return g;
    }, t.apply(this, arguments);
  }, r = yt.__awaiter || function(g, b, d, a) {
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
  }, n = yt.__generator || function(g, b) {
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
  }, i = yt.__rest || function(g, b) {
    var d = {};
    for (var a in g) Object.prototype.hasOwnProperty.call(g, a) && b.indexOf(a) < 0 && (d[a] = g[a]);
    if (g != null && typeof Object.getOwnPropertySymbols == "function")
      for (var w = 0, a = Object.getOwnPropertySymbols(g); w < a.length; w++)
        b.indexOf(a[w]) < 0 && Object.prototype.propertyIsEnumerable.call(g, a[w]) && (d[a[w]] = g[a[w]]);
    return d;
  }, o = yt.__spreadArray || function(g, b, d) {
    if (d || arguments.length === 2) for (var a = 0, w = b.length, v; a < w; a++)
      (v || !(a in b)) && (v || (v = Array.prototype.slice.call(b, 0, a)), v[a] = b[a]);
    return g.concat(v || Array.prototype.slice.call(b));
  };
  Object.defineProperty(yt, "__esModule", { value: !0 }), yt.RecordClient = void 0;
  var u = Vo(), f = Nn(), s = 100, l = 100, c = 100, p = 500, m = (
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
                if (w = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * c, v = d.app, _ = d.records, E = _.slice(0, w), E.length === 0)
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
                throw P = R.sent(), new u.KintoneAllRecordsError({}, _, a, P, c);
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
                return a = this.separateArrayRecursive(c, [], d.records), w = a.map(function(_) {
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
    }(f.BaseClient)
  );
  return yt.RecordClient = m, yt;
}
var Rn = {}, ts;
function Rp() {
  if (ts) return Rn;
  ts = 1;
  var e = Rn.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, f) {
        u.__proto__ = f;
      } || function(u, f) {
        for (var s in f) Object.prototype.hasOwnProperty.call(f, s) && (u[s] = f[s]);
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
  var t = Nn(), r = (
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
var Tt = {}, Ci, ns;
function jl() {
  return ns || (ns = 1, Ci = typeof self == "object" ? self.FormData : window.FormData), Ci;
}
var rs;
function Ap() {
  if (rs) return Tt;
  rs = 1;
  var e = Tt.__extends || /* @__PURE__ */ function() {
    var l = function(c, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var b in g) Object.prototype.hasOwnProperty.call(g, b) && (m[b] = g[b]);
      }, l(c, p);
    };
    return function(c, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(c, p);
      function m() {
        this.constructor = c;
      }
      c.prototype = p === null ? Object.create(p) : (m.prototype = p.prototype, new m());
    };
  }(), t = Tt.__awaiter || function(l, c, p, m) {
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
      v((m = m.apply(l, c || [])).next());
    });
  }, r = Tt.__generator || function(l, c) {
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
        v = c.call(l, p);
      } catch (_) {
        v = [6, _], g = 0;
      } finally {
        m = b = 0;
      }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  }, n = Tt.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.FileClient = void 0;
  var i = n(jl()), o = ei(), u = Uo(), f = Nn(), s = (
    /** @class */
    function(l) {
      e(c, l);
      function c() {
        return l !== null && l.apply(this, arguments) || this;
      }
      return c.prototype.uploadFile = function(p) {
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
      }, c.prototype.downloadFile = function(p) {
        var m = this.buildPathWithGuestSpaceId({
          endpointName: "file"
        });
        return this.client.getData(m, p);
      }, c;
    }(f.BaseClient)
  );
  return Tt.FileClient = s, Tt;
}
var An = {}, is;
function Pp() {
  if (is) return An;
  is = 1;
  var e = An.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, f) {
        u.__proto__ = f;
      } || function(u, f) {
        for (var s in f) Object.prototype.hasOwnProperty.call(f, s) && (u[s] = f[s]);
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
  var t = Nn(), r = (
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
var ki = {}, It = {}, Di, os;
function Cp() {
  if (os) return Di;
  os = 1;
  function e(h, y) {
    return function() {
      return h.apply(y, arguments);
    };
  }
  const { toString: t } = Object.prototype, { getPrototypeOf: r } = Object, n = /* @__PURE__ */ ((h) => (y) => {
    const S = t.call(y);
    return h[S] || (h[S] = S.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), i = (h) => (h = h.toLowerCase(), (y) => n(y) === h), o = (h) => (y) => typeof y === h, { isArray: u } = Array, f = o("undefined");
  function s(h) {
    return h !== null && !f(h) && h.constructor !== null && !f(h.constructor) && m(h.constructor.isBuffer) && h.constructor.isBuffer(h);
  }
  const l = i("ArrayBuffer");
  function c(h) {
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
  function oe(h, y, { allOwnKeys: S = !1 } = {}) {
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
  const B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ir, U = (h) => !f(h) && h !== B;
  function z() {
    const { caseless: h } = U(this) && this || {}, y = {}, S = (x, O) => {
      const C = h && V(y, O) || O;
      a(y[C]) && a(x) ? y[C] = z(y[C], x) : a(x) ? y[C] = z({}, x) : u(x) ? y[C] = x.slice() : y[C] = x;
    };
    for (let x = 0, O = arguments.length; x < O; x++)
      arguments[x] && oe(arguments[x], S);
    return y;
  }
  const j = (h, y, S, { allOwnKeys: x } = {}) => (oe(y, (O, C) => {
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
    oe(S, (O, C) => {
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
  }, Pe = (h, y) => {
    const S = {}, x = (O) => {
      O.forEach((C) => {
        S[C] = !0;
      });
    };
    return u(h) ? x(h) : x(String(h).split(y)), S;
  }, Ge = () => {
  }, rt = (h, y) => h != null && Number.isFinite(h = +h) ? h : y, qe = "abcdefghijklmnopqrstuvwxyz", ze = "0123456789", tt = {
    DIGIT: ze,
    ALPHA: qe,
    ALPHA_DIGIT: qe + qe.toUpperCase() + ze
  }, Lt = (h = 16, y = tt.ALPHA_DIGIT) => {
    let S = "";
    const { length: x } = y;
    for (; h--; )
      S += y[Math.random() * x | 0];
    return S;
  };
  function bt(h) {
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
          return oe(x, (k, L) => {
            const te = S(k, O + 1);
            !f(te) && (C[L] = te);
          }), y[O] = void 0, C;
        }
      }
      return x;
    };
    return S(h, 0);
  }, Ut = i("AsyncFunction"), Vt = (h) => h && (b(h) || m(h)) && m(h.then) && m(h.catch), Ct = ((h, y) => h ? setImmediate : y ? ((S, x) => (B.addEventListener("message", ({ source: O, data: C }) => {
    O === B && C === S && x.length && x.shift()();
  }, !1), (O) => {
    x.push(O), B.postMessage(S, "*");
  }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(
    typeof setImmediate == "function",
    m(B.postMessage)
  ), ri = typeof queueMicrotask < "u" ? queueMicrotask.bind(B) : typeof process < "u" && process.nextTick || Ct;
  var $ = {
    isArray: u,
    isArrayBuffer: l,
    isBuffer: s,
    isFormData: R,
    isArrayBufferView: c,
    isString: p,
    isNumber: g,
    isBoolean: d,
    isObject: b,
    isPlainObject: a,
    isReadableStream: I,
    isRequest: q,
    isResponse: M,
    isHeaders: F,
    isUndefined: f,
    isDate: w,
    isFile: v,
    isBlob: _,
    isRegExp: Z,
    isFunction: m,
    isStream: P,
    isURLSearchParams: A,
    isTypedArray: Se,
    isFileList: E,
    forEach: oe,
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
    toObjectSet: Pe,
    toCamelCase: Oe,
    noop: Ge,
    toFiniteNumber: rt,
    findKey: V,
    global: B,
    isContextDefined: U,
    ALPHABET: tt,
    generateString: Lt,
    isSpecCompliantForm: bt,
    toJSONObject: st,
    isAsyncFn: Ut,
    isThenable: Vt,
    setImmediate: Ct,
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
  var Mn = null;
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
  function qn(h) {
    return $.isArray(h) && !h.some(un);
  }
  const cn = $.toFlatObject($, {}, null, function(y) {
    return /^is[A-Z]/.test(y);
  });
  function D(h, y, S) {
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
        else if ($.isArray(re) && qn(re) || ($.isFileList(re) || $.endsWith(pe, "[]")) && (je = $.toArray(re)))
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
    const ne = [], Ce = Object.assign(cn, {
      defaultVisitor: Y,
      convertValue: K,
      isVisitable: un
    });
    function We(re, pe) {
      if (!$.isUndefined(re)) {
        if (ne.indexOf(re) !== -1)
          throw Error("Circular reference detected in " + pe.join("."));
        ne.push(re), $.forEach(re, function(je, He) {
          (!($.isUndefined(je) || je === null) && O.call(
            y,
            je,
            $.isString(He) ? He.trim() : He,
            pe,
            Ce
          )) === !0 && We(je, pe ? pe.concat(He) : [He]);
        }), ne.pop();
      }
    }
    if (!$.isObject(h))
      throw new TypeError("data must be an object");
    return We(h), y;
  }
  function T(h) {
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
    this._pairs = [], h && D(h, this, y);
  }
  const Re = we.prototype;
  Re.append = function(y, S) {
    this._pairs.push([y, S]);
  }, Re.toString = function(y) {
    const S = y ? function(x) {
      return y.call(this, x, T);
    } : T;
    return this._pairs.map(function(O) {
      return S(O[0]) + "=" + S(O[1]);
    }, "").join("&");
  };
  function Ae(h) {
    return encodeURIComponent(h).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function de(h, y, S) {
    if (!y)
      return h;
    const x = S && S.encode || Ae;
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
  class wt {
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
  var _t = wt, Xe = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }, St = typeof URLSearchParams < "u" ? URLSearchParams : we, Fn = typeof FormData < "u" ? FormData : null, Ht = typeof Blob < "u" ? Blob : null, lt = {
    isBrowser: !0,
    classes: {
      URLSearchParams: St,
      FormData: Fn,
      Blob: Ht
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const fn = typeof window < "u" && typeof document < "u", dn = typeof navigator == "object" && navigator || void 0, cr = fn && (!dn || ["ReactNative", "NativeScript", "NS"].indexOf(dn.product) < 0), Jt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Bn = fn && window.location.href || "http://localhost";
  var pn = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    hasBrowserEnv: fn,
    hasStandardBrowserWebWorkerEnv: Jt,
    hasStandardBrowserEnv: cr,
    navigator: dn,
    origin: Bn
  }), Fe = {
    ...pn,
    ...lt
  };
  function Ln(h, y) {
    return D(h, new Fe.classes.URLSearchParams(), Object.assign({
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
    transitional: Xe,
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
          return Ln(y, this.formSerializer).toString();
        if ((L = $.isFileList(y)) || x.indexOf("multipart/form-data") > -1) {
          const te = this.env && this.env.FormData;
          return D(
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
  var Un = (h) => {
    const y = {};
    let S, x, O;
    return h && h.split(`
`).forEach(function(k) {
      O = k.indexOf(":"), S = k.substring(0, O).trim().toLowerCase(), x = k.substring(O + 1).trim(), !(!S || y[S] && ii[S]) && (S === "set-cookie" ? y[S] ? y[S].push(x) : y[S] = [x] : y[S] = y[S] ? y[S] + ", " + x : x);
    }), y;
  };
  const kt = Symbol("internals");
  function xt(h) {
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
  const Gl = (h) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(h.trim());
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
  function Kl(h) {
    return h.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (y, S, x) => S.toUpperCase() + x);
  }
  function zl(h, y) {
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
        const Y = xt(te);
        if (!Y)
          throw new Error("header name must be a non-empty string");
        const ne = $.findKey(O, Y);
        (!ne || O[ne] === void 0 || K === !0 || K === void 0 && O[ne] !== !1) && (O[ne || te] = yn(L));
      }
      const k = (L, te) => $.forEach(L, (K, Y) => C(K, Y, te));
      if ($.isPlainObject(y) || y instanceof this.constructor)
        k(y, S);
      else if ($.isString(y) && (y = y.trim()) && !Gl(y))
        k(Un(y), S);
      else if ($.isHeaders(y))
        for (const [L, te] of y.entries())
          C(te, L, x);
      else
        y != null && C(S, y, x);
      return this;
    }
    get(y, S) {
      if (y = xt(y), y) {
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
      if (y = xt(y), y) {
        const x = $.findKey(this, y);
        return !!(x && this[x] !== void 0 && (!S || oi(this, this[x], x, S)));
      }
      return !1;
    }
    delete(y, S) {
      const x = this;
      let O = !1;
      function C(k) {
        if (k = xt(k), k) {
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
        const L = y ? Kl(C) : String(C).trim();
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
      const x = (this[kt] = this[kt] = {
        accessors: {}
      }).accessors, O = this.prototype;
      function C(k) {
        const L = xt(k);
        x[L] || (zl(O, k), x[L] = !0);
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
  var ht = mr;
  function ai(h, y) {
    const S = this || mn, x = y || S, O = ht.from(x.headers);
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
  function Yl(h) {
    const y = /^([-+\w]{1,25})(:?\/\/|:)/.exec(h);
    return y && y[1] || "";
  }
  function Xl(h, y) {
    h = h || 10;
    const S = new Array(h), x = new Array(h);
    let O = 0, C = 0, k;
    return y = y !== void 0 ? y : 1e3, function(te) {
      const K = Date.now(), Y = x[C];
      k || (k = K), S[O] = te, x[O] = K;
      let ne = C, Ce = 0;
      for (; ne !== O; )
        Ce += S[ne++], ne = ne % h;
      if (O = (O + 1) % h, O === C && (C = (C + 1) % h), K - k < y)
        return;
      const We = Y && K - Y;
      return We ? Math.round(Ce * 1e3 / We) : void 0;
    };
  }
  function Jl(h, y) {
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
    const O = Xl(50, 250);
    return Jl((C) => {
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
  var Ql = Fe.hasStandardBrowserEnv ? /* @__PURE__ */ ((h, y) => (S) => (S = new URL(S, Fe.origin), h.protocol === S.protocol && h.host === S.host && (y || h.port === S.port)))(
    new URL(Fe.origin),
    Fe.navigator && /(msie|trident)/i.test(Fe.navigator.userAgent)
  ) : () => !0, Zl = Fe.hasStandardBrowserEnv ? (
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
  function eu(h) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(h);
  }
  function tu(h, y) {
    return y ? h.replace(/\/?\/$/, "") + "/" + y.replace(/^\/+/, "") : h;
  }
  function Jo(h, y) {
    return h && !eu(y) ? tu(h, y) : y;
  }
  const Qo = (h) => h instanceof ht ? { ...h } : h;
  function Zt(h, y) {
    y = y || {};
    const S = {};
    function x(K, Y, ne, Ce) {
      return $.isPlainObject(K) && $.isPlainObject(Y) ? $.merge.call({ caseless: Ce }, K, Y) : $.isPlainObject(Y) ? $.merge({}, Y) : $.isArray(Y) ? Y.slice() : Y;
    }
    function O(K, Y, ne, Ce) {
      if ($.isUndefined(Y)) {
        if (!$.isUndefined(K))
          return x(void 0, K, ne, Ce);
      } else return x(K, Y, ne, Ce);
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
      const ne = te[Y] || O, Ce = ne(h[Y], y[Y], Y);
      $.isUndefined(Ce) && ne !== L || (S[Y] = Ce);
    }), S;
  }
  var Zo = (h) => {
    const y = Zt({}, h);
    let { data: S, withXSRFToken: x, xsrfHeaderName: O, xsrfCookieName: C, headers: k, auth: L } = y;
    y.headers = k = ht.from(k), y.url = de(Jo(y.baseURL, y.url), h.params, h.paramsSerializer), L && k.set(
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
    if (Fe.hasStandardBrowserEnv && (x && $.isFunction(x) && (x = x(y)), x || x !== !1 && Ql(y.url))) {
      const K = O && C && Zl.read(C);
      K && k.set(O, K);
    }
    return y;
  }, nu = typeof XMLHttpRequest < "u" && function(h) {
    return new Promise(function(S, x) {
      const O = Zo(h);
      let C = O.data;
      const k = ht.from(O.headers).normalize();
      let { responseType: L, onUploadProgress: te, onDownloadProgress: K } = O, Y, ne, Ce, We, re;
      function pe() {
        We && We(), re && re(), O.cancelToken && O.cancelToken.unsubscribe(Y), O.signal && O.signal.removeEventListener("abort", Y);
      }
      let ie = new XMLHttpRequest();
      ie.open(O.method.toUpperCase(), O.url, !0), ie.timeout = O.timeout;
      function je() {
        if (!ie)
          return;
        const Ke = ht.from(
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
        const it = O.transitional || Xe;
        O.timeoutErrorMessage && (Dt = O.timeoutErrorMessage), x(new ue(
          Dt,
          it.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
          h,
          ie
        )), ie = null;
      }, C === void 0 && k.setContentType(null), "setRequestHeader" in ie && $.forEach(k.toJSON(), function(Dt, it) {
        ie.setRequestHeader(it, Dt);
      }), $.isUndefined(O.withCredentials) || (ie.withCredentials = !!O.withCredentials), L && L !== "json" && (ie.responseType = O.responseType), K && ([Ce, re] = yr(K, !0), ie.addEventListener("progress", Ce)), te && ie.upload && ([ne, We] = yr(te), ie.upload.addEventListener("progress", ne), ie.upload.addEventListener("loadend", We)), (O.cancelToken || O.signal) && (Y = (Ke) => {
        ie && (x(!Ke || Ke.type ? new vn(null, h, ie) : Ke), ie.abort(), ie = null);
      }, O.cancelToken && O.cancelToken.subscribe(Y), O.signal && (O.signal.aborted ? Y() : O.signal.addEventListener("abort", Y)));
      const He = Yl(O.url);
      if (He && Fe.protocols.indexOf(He) === -1) {
        x(new ue("Unsupported protocol " + He + ":", ue.ERR_BAD_REQUEST, h));
        return;
      }
      ie.send(C || null);
    });
  }, ru = (h, y) => {
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
  const iu = function* (h, y) {
    let S = h.byteLength;
    if (S < y) {
      yield h;
      return;
    }
    let x = 0, O;
    for (; x < S; )
      O = x + y, yield h.slice(x, O), x = O;
  }, ou = async function* (h, y) {
    for await (const S of au(h))
      yield* iu(S, y);
  }, au = async function* (h) {
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
    const O = ou(h, y);
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
            let Ce = C += ne;
            S(Ce);
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
  }, vr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ta = vr && typeof ReadableStream == "function", su = vr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((h) => (y) => h.encode(y))(new TextEncoder()) : async (h) => new Uint8Array(await new Response(h).arrayBuffer())), na = (h, ...y) => {
    try {
      return !!h(...y);
    } catch {
      return !1;
    }
  }, lu = ta && na(() => {
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
  const uu = async (h) => {
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
      return (await su(h)).byteLength;
  }, cu = async (h, y) => {
    const S = $.toFiniteNumber(h.getContentLength());
    return S ?? uu(y);
  };
  var fu = vr && (async (h) => {
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
      fetchOptions: Ce
    } = Zo(h);
    K = K ? (K + "").toLowerCase() : "text";
    let We = ru([O, C && C.toAbortSignal()], k), re;
    const pe = We && We.unsubscribe && (() => {
      We.unsubscribe();
    });
    let ie;
    try {
      if (te && lu && S !== "get" && S !== "head" && (ie = await cu(Y, x)) !== 0) {
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
        ...Ce,
        signal: We,
        method: S.toUpperCase(),
        headers: Y.normalize().toJSON(),
        body: x,
        duplex: "half",
        credentials: je ? ne : void 0
      });
      let He = await fetch(re);
      const Ke = si && (K === "stream" || K === "response");
      if (si && (L || Ke && pe)) {
        const it = {};
        ["status", "statusText", "headers"].forEach((ca) => {
          it[ca] = He[ca];
        });
        const Gt = $.toFiniteNumber(He.headers.get("content-length")), [en, xr] = L && Yo(
          Gt,
          yr(Xo(L), !0)
        ) || [];
        He = new Response(
          ea(He.body, ra, en, () => {
            xr && xr(), pe && pe();
          }),
          it
        );
      }
      K = K || "text";
      let Dt = await gr[$.findKey(gr, K) || "text"](He, h);
      return !Ke && pe && pe(), await new Promise((it, Gt) => {
        zo(it, Gt, {
          data: Dt,
          headers: ht.from(He.headers),
          status: He.status,
          statusText: He.statusText,
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
    http: Mn,
    xhr: nu,
    fetch: fu
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
  const ia = (h) => `- ${h}`, du = (h) => $.isFunction(h) || h === null || h === !1;
  var oa = {
    getAdapter: (h) => {
      h = $.isArray(h) ? h : [h];
      const { length: y } = h;
      let S, x;
      const O = {};
      for (let C = 0; C < y; C++) {
        S = h[C];
        let k;
        if (x = S, !du(S) && (x = li[(k = String(S)).toLowerCase()], x === void 0))
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
    return ui(h), h.headers = ht.from(h.headers), h.data = ai.call(
      h,
      h.transformRequest
    ), ["post", "put", "patch"].indexOf(h.method) !== -1 && h.headers.setContentType("application/x-www-form-urlencoded", !1), oa.getAdapter(h.adapter || mn.adapter)(h).then(function(x) {
      return ui(h), x.data = ai.call(
        h,
        h.transformResponse,
        x
      ), x.headers = ht.from(x.headers), x;
    }, function(x) {
      return Ko(x) || (ui(h), x && x.response && (x.response.data = ai.call(
        h,
        h.transformResponse,
        x.response
      ), x.response.headers = ht.from(x.response.headers))), Promise.reject(x);
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
  function pu(h, y, S) {
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
    assertOptions: pu,
    validators: br
  };
  const Et = wr.validators;
  class _r {
    constructor(y) {
      this.defaults = y, this.interceptors = {
        request: new _t(),
        response: new _t()
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
        silentJSONParsing: Et.transitional(Et.boolean),
        forcedJSONParsing: Et.transitional(Et.boolean),
        clarifyTimeoutError: Et.transitional(Et.boolean)
      }, !1), O != null && ($.isFunction(O) ? S.paramsSerializer = {
        serialize: O
      } : wr.assertOptions(O, {
        encode: Et.function,
        serialize: Et.function
      }, !0)), wr.assertOptions(S, {
        baseUrl: Et.spelling("baseURL"),
        withXsrfToken: Et.spelling("withXSRFToken")
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
      ), S.headers = ht.concat(k, C);
      const L = [];
      let te = !0;
      this.interceptors.request.forEach(function(pe) {
        typeof pe.runWhen == "function" && pe.runWhen(S) === !1 || (te = te && pe.synchronous, L.unshift(pe.fulfilled, pe.rejected));
      });
      const K = [];
      this.interceptors.response.forEach(function(pe) {
        K.push(pe.fulfilled, pe.rejected);
      });
      let Y, ne = 0, Ce;
      if (!te) {
        const re = [aa.bind(this), void 0];
        for (re.unshift.apply(re, L), re.push.apply(re, K), Ce = re.length, Y = Promise.resolve(S); ne < Ce; )
          Y = Y.then(re[ne++], re[ne++]);
        return Y;
      }
      Ce = L.length;
      let We = S;
      for (ne = 0; ne < Ce; ) {
        const re = L[ne++], pe = L[ne++];
        try {
          We = re(We);
        } catch (ie) {
          pe.call(this, ie);
          break;
        }
      }
      try {
        Y = aa.call(this, We);
      } catch (re) {
        return Promise.reject(re);
      }
      for (ne = 0, Ce = K.length; ne < Ce; )
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
  var hu = ci;
  function mu(h) {
    return function(S) {
      return h.apply(null, S);
    };
  }
  function yu(h) {
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
  var vu = fi;
  function ua(h) {
    const y = new Sr(h), S = e(Sr.prototype.request, y);
    return $.extend(S, Sr.prototype, y, { allOwnKeys: !0 }), $.extend(S, y, null, { allOwnKeys: !0 }), S.create = function(O) {
      return ua(Zt(h, O));
    }, S;
  }
  const Be = ua(mn);
  return Be.Axios = Sr, Be.CanceledError = vn, Be.CancelToken = hu, Be.isCancel = Ko, Be.VERSION = sa, Be.toFormData = D, Be.AxiosError = ue, Be.Cancel = Be.CanceledError, Be.all = function(y) {
    return Promise.all(y);
  }, Be.spread = mu, Be.isAxiosError = yu, Be.mergeConfig = Zt, Be.AxiosHeaders = ht, Be.formToJSON = (h) => hn($.isHTMLForm(h) ? new FormData(h) : h), Be.getAdapter = oa.getAdapter, Be.HttpStatusCode = vu, Be.default = Be, Di = Be, Di;
}
var as;
function kp() {
  if (as) return It;
  as = 1;
  var e = It.__assign || function() {
    return e = Object.assign || function(u) {
      for (var f, s = 1, l = arguments.length; s < l; s++) {
        f = arguments[s];
        for (var c in f) Object.prototype.hasOwnProperty.call(f, c) && (u[c] = f[c]);
      }
      return u;
    }, e.apply(this, arguments);
  }, t = It.__awaiter || function(u, f, s, l) {
    function c(p) {
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
        a.done ? p(a.value) : c(a.value).then(g, b);
      }
      d((l = l.apply(u, f || [])).next());
    });
  }, r = It.__generator || function(u, f) {
    var s = { label: 0, sent: function() {
      if (p[0] & 1) throw p[1];
      return p[1];
    }, trys: [], ops: [] }, l, c, p, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
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
        if (l = 1, c && (p = d[0] & 2 ? c.return : d[0] ? c.throw || ((p = c.return) && p.call(c), 0) : c.next) && !(p = p.call(c, d[1])).done) return p;
        switch (c = 0, p && (d = [d[0] & 2, p.value]), d[0]) {
          case 0:
          case 1:
            p = d;
            break;
          case 4:
            return s.label++, { value: d[1], done: !1 };
          case 5:
            s.label++, c = d[1], d = [0];
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
        d = f.call(u, s);
      } catch (a) {
        d = [6, a], c = 0;
      } finally {
        l = p = 0;
      }
      if (d[0] & 5) throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, n = It.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(It, "__esModule", { value: !0 }), It.AxiosClient = void 0;
  var i = n(/* @__PURE__ */ Cp()), o = (
    /** @class */
    function() {
      function u(f) {
        var s = f.responseHandler, l = f.requestConfigBuilder;
        this.responseHandler = s, this.requestConfigBuilder = l;
      }
      return u.prototype.get = function(f, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(c) {
            switch (c.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", f, s)];
              case 1:
                return l = c.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, c.sent()];
            }
          });
        });
      }, u.prototype.getData = function(f, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(c) {
            switch (c.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", f, s, {
                  responseType: "arraybuffer"
                })];
              case 1:
                return l = c.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, c.sent()];
            }
          });
        });
      }, u.prototype.post = function(f, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(c) {
            switch (c.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", f, s)];
              case 1:
                return l = c.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, c.sent()];
            }
          });
        });
      }, u.prototype.postData = function(f, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(c) {
            switch (c.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", f, s)];
              case 1:
                return l = c.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, c.sent()];
            }
          });
        });
      }, u.prototype.put = function(f, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(c) {
            switch (c.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("put", f, s)];
              case 1:
                return l = c.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, c.sent()];
            }
          });
        });
      }, u.prototype.delete = function(f, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(c) {
            switch (c.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("delete", f, s)];
              case 1:
                return l = c.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, c.sent()];
            }
          });
        });
      }, u.prototype.sendRequest = function(f) {
        return this.responseHandler.handle(
          // eslint-disable-next-line new-cap
          (0, i.default)(e(e({}, f), { maxBodyLength: 1 / 0, maxContentLength: 1 / 0 }))
        );
      }, u;
    }()
  );
  return It.AxiosClient = o, It;
}
var ss;
function Dp() {
  return ss || (ss = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DefaultHttpClient = void 0;
    var t = kp();
    Object.defineProperty(e, "DefaultHttpClient", { enumerable: !0, get: function() {
      return t.AxiosClient;
    } });
  }(ki)), ki;
}
var $t = {}, Ti, ls;
function jn() {
  return ls || (ls = 1, Ti = TypeError), Ti;
}
const Tp = {}, Ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tp
}, Symbol.toStringTag, { value: "Module" })), $p = /* @__PURE__ */ Tf(Ip);
var Ii, us;
function ti() {
  if (us) return Ii;
  us = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, u = i && o && typeof o.get == "function" ? o.get : null, f = i && Set.prototype.forEach, s = typeof WeakMap == "function" && WeakMap.prototype, l = s ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, p = c ? WeakSet.prototype.has : null, m = typeof WeakRef == "function" && WeakRef.prototype, g = m ? WeakRef.prototype.deref : null, b = Boolean.prototype.valueOf, d = Object.prototype.toString, a = Function.prototype.toString, w = String.prototype.match, v = String.prototype.slice, _ = String.prototype.replace, E = String.prototype.toUpperCase, P = String.prototype.toLowerCase, R = RegExp.prototype.test, A = Array.prototype.concat, I = Array.prototype.join, q = Array.prototype.slice, M = Math.floor, F = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, W = Object.getOwnPropertySymbols, oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, V = typeof Symbol == "function" && typeof Symbol.iterator == "object", B = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === V || !0) ? Symbol.toStringTag : null, U = Object.prototype.propertyIsEnumerable, z = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(D) {
    return D.__proto__;
  } : null);
  function j(D, T) {
    if (D === 1 / 0 || D === -1 / 0 || D !== D || D && D > -1e3 && D < 1e3 || R.call(/e/, T))
      return T;
    var we = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof D == "number") {
      var Re = D < 0 ? -M(-D) : M(D);
      if (Re !== D) {
        var Ae = String(Re), de = v.call(T, Ae.length + 1);
        return _.call(Ae, we, "$&_") + "." + _.call(_.call(de, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return _.call(T, we, "$&_");
  }
  var Q = $p, ee = Q.custom, fe = Ge(ee) ? ee : null, me = {
    __proto__: null,
    double: '"',
    single: "'"
  }, xe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Ii = function D(T, we, Re, Ae) {
    var de = we || {};
    if (ze(de, "quoteStyle") && !ze(me, de.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (ze(de, "maxStringLength") && (typeof de.maxStringLength == "number" ? de.maxStringLength < 0 && de.maxStringLength !== 1 / 0 : de.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var wt = ze(de, "customInspect") ? de.customInspect : !0;
    if (typeof wt != "boolean" && wt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (ze(de, "indent") && de.indent !== null && de.indent !== "	" && !(parseInt(de.indent, 10) === de.indent && de.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ze(de, "numericSeparator") && typeof de.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var _t = de.numericSeparator;
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
      return _t ? j(T, Xe) : Xe;
    }
    if (typeof T == "bigint") {
      var St = String(T) + "n";
      return _t ? j(T, St) : St;
    }
    var Fn = typeof de.depth > "u" ? 5 : de.depth;
    if (typeof Re > "u" && (Re = 0), Re >= Fn && Fn > 0 && typeof T == "object")
      return ve(T) ? "[Array]" : "[Object]";
    var Ht = ur(de, Re);
    if (typeof Ae > "u")
      Ae = [];
    else if (bt(Ae, T) >= 0)
      return "[Circular]";
    function lt(kt, xt, yn) {
      if (xt && (Ae = q.call(Ae), Ae.push(xt)), yn) {
        var hr = {
          depth: de.depth
        };
        return ze(de, "quoteStyle") && (hr.quoteStyle = de.quoteStyle), D(kt, hr, Re + 1, Ae);
      }
      return D(kt, de, Re + 1, Ae);
    }
    if (typeof T == "function" && !ge(T)) {
      var fn = Lt(T), dn = cn(T, lt);
      return "[Function" + (fn ? ": " + fn : " (anonymous)") + "]" + (dn.length > 0 ? " { " + I.call(dn, ", ") + " }" : "");
    }
    if (Ge(T)) {
      var cr = V ? _.call(String(T), /^(Symbol\(.*\))_[^)]*$/, "$1") : oe.call(T);
      return typeof T == "object" && !V ? Wt(cr) : cr;
    }
    if ($(T)) {
      for (var Jt = "<" + P.call(String(T.nodeName)), Bn = T.attributes || [], pn = 0; pn < Bn.length; pn++)
        Jt += " " + Bn[pn].name + "=" + Se(N(Bn[pn].value), "double", de);
      return Jt += ">", T.childNodes && T.childNodes.length && (Jt += "..."), Jt += "</" + P.call(String(T.nodeName)) + ">", Jt;
    }
    if (ve(T)) {
      if (T.length === 0)
        return "[]";
      var Fe = cn(T, lt);
      return Ht && !lr(Fe) ? "[" + qn(Fe, Ht) + "]" : "[ " + I.call(Fe, ", ") + " ]";
    }
    if (Z(T)) {
      var Ln = cn(T, lt);
      return !("cause" in Error.prototype) && "cause" in T && !U.call(T, "cause") ? "{ [" + String(T) + "] " + I.call(A.call("[cause]: " + lt(T.cause), Ln), ", ") + " }" : Ln.length === 0 ? "[" + String(T) + "]" : "{ [" + String(T) + "] " + I.call(Ln, ", ") + " }";
    }
    if (typeof T == "object" && wt) {
      if (fe && typeof T[fe] == "function" && Q)
        return Q(T, { depth: Fn - Re });
      if (wt !== "symbol" && typeof T.inspect == "function")
        return T.inspect();
    }
    if (st(T)) {
      var fr = [];
      return n && n.call(T, function(kt, xt) {
        fr.push(lt(xt, T, !0) + " => " + lt(kt, T));
      }), un("Map", r.call(T), fr, Ht);
    }
    if (Ct(T)) {
      var dr = [];
      return f && f.call(T, function(kt) {
        dr.push(lt(kt, T));
      }), un("Set", u.call(T), dr, Ht);
    }
    if (Ut(T))
      return Mn("WeakMap");
    if (ri(T))
      return Mn("WeakSet");
    if (Vt(T))
      return Mn("WeakRef");
    if (he(T))
      return Wt(lt(Number(T)));
    if (rt(T))
      return Wt(lt(F.call(T)));
    if (Pe(T))
      return Wt(b.call(T));
    if (ye(T))
      return Wt(lt(String(T)));
    if (typeof window < "u" && T === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && T === globalThis || typeof ir < "u" && T === ir)
      return "{ [object globalThis] }";
    if (!Oe(T) && !ge(T)) {
      var hn = cn(T, lt), pr = z ? z(T) === Object.prototype : T instanceof Object || T.constructor === Object, Qt = T instanceof Object ? "" : "null prototype", mn = !pr && B && Object(T) === T && B in T ? v.call(tt(T), 8, -1) : Qt ? "Object" : "", ii = pr || typeof T.constructor != "function" ? "" : T.constructor.name ? T.constructor.name + " " : "", Un = ii + (mn || Qt ? "[" + I.call(A.call([], mn || [], Qt || []), ": ") + "] " : "");
      return hn.length === 0 ? Un + "{}" : Ht ? Un + "{" + qn(hn, Ht) + "}" : Un + "{ " + I.call(hn, ", ") + " }";
    }
    return String(T);
  };
  function Se(D, T, we) {
    var Re = we.quoteStyle || T, Ae = me[Re];
    return Ae + D + Ae;
  }
  function N(D) {
    return _.call(String(D), /"/g, "&quot;");
  }
  function G(D) {
    return !B || !(typeof D == "object" && (B in D || typeof D[B] < "u"));
  }
  function ve(D) {
    return tt(D) === "[object Array]" && G(D);
  }
  function Oe(D) {
    return tt(D) === "[object Date]" && G(D);
  }
  function ge(D) {
    return tt(D) === "[object RegExp]" && G(D);
  }
  function Z(D) {
    return tt(D) === "[object Error]" && G(D);
  }
  function ye(D) {
    return tt(D) === "[object String]" && G(D);
  }
  function he(D) {
    return tt(D) === "[object Number]" && G(D);
  }
  function Pe(D) {
    return tt(D) === "[object Boolean]" && G(D);
  }
  function Ge(D) {
    if (V)
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
  function rt(D) {
    if (!D || typeof D != "object" || !F)
      return !1;
    try {
      return F.call(D), !0;
    } catch {
    }
    return !1;
  }
  var qe = Object.prototype.hasOwnProperty || function(D) {
    return D in this;
  };
  function ze(D, T) {
    return qe.call(D, T);
  }
  function tt(D) {
    return d.call(D);
  }
  function Lt(D) {
    if (D.name)
      return D.name;
    var T = w.call(a.call(D), /^function\s*([\w$]+)/);
    return T ? T[1] : null;
  }
  function bt(D, T) {
    if (D.indexOf)
      return D.indexOf(T);
    for (var we = 0, Re = D.length; we < Re; we++)
      if (D[we] === T)
        return we;
    return -1;
  }
  function st(D) {
    if (!r || !D || typeof D != "object")
      return !1;
    try {
      r.call(D);
      try {
        u.call(D);
      } catch {
        return !0;
      }
      return D instanceof Map;
    } catch {
    }
    return !1;
  }
  function Ut(D) {
    if (!l || !D || typeof D != "object")
      return !1;
    try {
      l.call(D, l);
      try {
        p.call(D, p);
      } catch {
        return !0;
      }
      return D instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Vt(D) {
    if (!g || !D || typeof D != "object")
      return !1;
    try {
      return g.call(D), !0;
    } catch {
    }
    return !1;
  }
  function Ct(D) {
    if (!u || !D || typeof D != "object")
      return !1;
    try {
      u.call(D);
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
  function ri(D) {
    if (!p || !D || typeof D != "object")
      return !1;
    try {
      p.call(D, p);
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
      var we = D.length - T.maxStringLength, Re = "... " + we + " more character" + (we > 1 ? "s" : "");
      return ue(v.call(D, 0, T.maxStringLength), T) + Re;
    }
    var Ae = xe[T.quoteStyle || "single"];
    Ae.lastIndex = 0;
    var de = _.call(_.call(D, Ae, "\\$1"), /[\x00-\x1f]/g, sr);
    return Se(de, "single", T);
  }
  function sr(D) {
    var T = D.charCodeAt(0), we = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[T];
    return we ? "\\" + we : "\\x" + (T < 16 ? "0" : "") + E.call(T.toString(16));
  }
  function Wt(D) {
    return "Object(" + D + ")";
  }
  function Mn(D) {
    return D + " { ? }";
  }
  function un(D, T, we, Re) {
    var Ae = Re ? qn(we, Re) : I.call(we, ", ");
    return D + " (" + T + ") {" + Ae + "}";
  }
  function lr(D) {
    for (var T = 0; T < D.length; T++)
      if (bt(D[T], `
`) >= 0)
        return !1;
    return !0;
  }
  function ur(D, T) {
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
  function qn(D, T) {
    if (D.length === 0)
      return "";
    var we = `
` + T.prev + T.base;
    return we + I.call(D, "," + we) + `
` + T.prev;
  }
  function cn(D, T) {
    var we = ve(D), Re = [];
    if (we) {
      Re.length = D.length;
      for (var Ae = 0; Ae < D.length; Ae++)
        Re[Ae] = ze(D, Ae) ? T(D[Ae], D) : "";
    }
    var de = typeof W == "function" ? W(D) : [], wt;
    if (V) {
      wt = {};
      for (var _t = 0; _t < de.length; _t++)
        wt["$" + de[_t]] = de[_t];
    }
    for (var Xe in D)
      ze(D, Xe) && (we && String(Number(Xe)) === Xe && Xe < D.length || V && wt["$" + Xe] instanceof Symbol || (R.call(/[^\w$]/, Xe) ? Re.push(T(Xe, D) + ": " + T(D[Xe], D)) : Re.push(Xe + ": " + T(D[Xe], D))));
    if (typeof W == "function")
      for (var St = 0; St < de.length; St++)
        U.call(D, de[St]) && Re.push("[" + T(de[St]) + "]: " + T(D[de[St]], D));
    return Re;
  }
  return Ii;
}
var $i, cs;
function Np() {
  if (cs) return $i;
  cs = 1;
  var e = /* @__PURE__ */ ti(), t = /* @__PURE__ */ jn(), r = function(f, s, l) {
    for (var c = f, p; (p = c.next) != null; c = p)
      if (p.key === s)
        return c.next = p.next, l || (p.next = /** @type {NonNullable<typeof list.next>} */
        f.next, f.next = p), p;
  }, n = function(f, s) {
    if (f) {
      var l = r(f, s);
      return l && l.value;
    }
  }, i = function(f, s, l) {
    var c = r(f, s);
    c ? c.value = l : f.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: s,
      next: f.next,
      value: l
    };
  }, o = function(f, s) {
    return f ? !!r(f, s) : !1;
  }, u = function(f, s) {
    if (f)
      return r(f, s, !0);
  };
  return $i = function() {
    var s, l = {
      assert: function(c) {
        if (!l.has(c))
          throw new t("Side channel does not contain " + e(c));
      },
      delete: function(c) {
        var p = s && s.next, m = u(s, c);
        return m && p && p === m && (s = void 0), !!m;
      },
      get: function(c) {
        return n(s, c);
      },
      has: function(c) {
        return o(s, c);
      },
      set: function(c, p) {
        s || (s = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          s,
          c,
          p
        );
      }
    };
    return l;
  }, $i;
}
var Ni, fs;
function Ml() {
  return fs || (fs = 1, Ni = Object), Ni;
}
var ji, ds;
function jp() {
  return ds || (ds = 1, ji = Error), ji;
}
var Mi, ps;
function Mp() {
  return ps || (ps = 1, Mi = EvalError), Mi;
}
var qi, hs;
function qp() {
  return hs || (hs = 1, qi = RangeError), qi;
}
var Fi, ms;
function Fp() {
  return ms || (ms = 1, Fi = ReferenceError), Fi;
}
var Bi, ys;
function Bp() {
  return ys || (ys = 1, Bi = SyntaxError), Bi;
}
var Li, vs;
function Lp() {
  return vs || (vs = 1, Li = URIError), Li;
}
var Ui, gs;
function Up() {
  return gs || (gs = 1, Ui = Math.abs), Ui;
}
var Vi, bs;
function Vp() {
  return bs || (bs = 1, Vi = Math.floor), Vi;
}
var Wi, ws;
function Wp() {
  return ws || (ws = 1, Wi = Math.max), Wi;
}
var Hi, _s;
function Hp() {
  return _s || (_s = 1, Hi = Math.min), Hi;
}
var Gi, Ss;
function Gp() {
  return Ss || (Ss = 1, Gi = Math.pow), Gi;
}
var Ki, xs;
function Kp() {
  return xs || (xs = 1, Ki = Math.round), Ki;
}
var zi, Es;
function zp() {
  return Es || (Es = 1, zi = Number.isNaN || function(t) {
    return t !== t;
  }), zi;
}
var Yi, Os;
function Yp() {
  if (Os) return Yi;
  Os = 1;
  var e = /* @__PURE__ */ zp();
  return Yi = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Yi;
}
var Xi, Rs;
function Xp() {
  return Rs || (Rs = 1, Xi = Object.getOwnPropertyDescriptor), Xi;
}
var Ji, As;
function ql() {
  if (As) return Ji;
  As = 1;
  var e = /* @__PURE__ */ Xp();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ji = e, Ji;
}
var Qi, Ps;
function Jp() {
  if (Ps) return Qi;
  Ps = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Qi = e, Qi;
}
var Zi, Cs;
function Qp() {
  return Cs || (Cs = 1, Zi = function() {
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
      var f = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (f.value !== i || f.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Zi;
}
var eo, ks;
function Zp() {
  if (ks) return eo;
  ks = 1;
  var e = typeof Symbol < "u" && Symbol, t = Qp();
  return eo = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, eo;
}
var to, Ds;
function Fl() {
  return Ds || (Ds = 1, to = typeof Reflect < "u" && Reflect.getPrototypeOf || null), to;
}
var no, Ts;
function Bl() {
  if (Ts) return no;
  Ts = 1;
  var e = /* @__PURE__ */ Ml();
  return no = e.getPrototypeOf || null, no;
}
var ro, Is;
function eh() {
  if (Is) return ro;
  Is = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(s, l) {
    for (var c = [], p = 0; p < s.length; p += 1)
      c[p] = s[p];
    for (var m = 0; m < l.length; m += 1)
      c[m + s.length] = l[m];
    return c;
  }, o = function(s, l) {
    for (var c = [], p = l, m = 0; p < s.length; p += 1, m += 1)
      c[m] = s[p];
    return c;
  }, u = function(f, s) {
    for (var l = "", c = 0; c < f.length; c += 1)
      l += f[c], c + 1 < f.length && (l += s);
    return l;
  };
  return ro = function(s) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var c = o(arguments, 1), p, m = function() {
      if (this instanceof p) {
        var w = l.apply(
          this,
          i(c, arguments)
        );
        return Object(w) === w ? w : this;
      }
      return l.apply(
        s,
        i(c, arguments)
      );
    }, g = r(0, l.length - c.length), b = [], d = 0; d < g; d++)
      b[d] = "$" + d;
    if (p = Function("binder", "return function (" + u(b, ",") + "){ return binder.apply(this,arguments); }")(m), l.prototype) {
      var a = function() {
      };
      a.prototype = l.prototype, p.prototype = new a(), a.prototype = null;
    }
    return p;
  }, ro;
}
var io, $s;
function ni() {
  if ($s) return io;
  $s = 1;
  var e = eh();
  return io = Function.prototype.bind || e, io;
}
var oo, Ns;
function Wo() {
  return Ns || (Ns = 1, oo = Function.prototype.call), oo;
}
var ao, js;
function Ll() {
  return js || (js = 1, ao = Function.prototype.apply), ao;
}
var so, Ms;
function th() {
  return Ms || (Ms = 1, so = typeof Reflect < "u" && Reflect && Reflect.apply), so;
}
var lo, qs;
function nh() {
  if (qs) return lo;
  qs = 1;
  var e = ni(), t = Ll(), r = Wo(), n = th();
  return lo = n || e.call(r, t), lo;
}
var uo, Fs;
function Ul() {
  if (Fs) return uo;
  Fs = 1;
  var e = ni(), t = /* @__PURE__ */ jn(), r = Wo(), n = nh();
  return uo = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, uo;
}
var co, Bs;
function rh() {
  if (Bs) return co;
  Bs = 1;
  var e = Ul(), t = /* @__PURE__ */ ql(), r;
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
    function(f) {
      return o(f == null ? f : i(f));
    }
  ) : !1, co;
}
var fo, Ls;
function ih() {
  if (Ls) return fo;
  Ls = 1;
  var e = Fl(), t = Bl(), r = /* @__PURE__ */ rh();
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
var po, Us;
function oh() {
  if (Us) return po;
  Us = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = ni();
  return po = r.call(e, t), po;
}
var ho, Vs;
function Ho() {
  if (Vs) return ho;
  Vs = 1;
  var e, t = /* @__PURE__ */ Ml(), r = /* @__PURE__ */ jp(), n = /* @__PURE__ */ Mp(), i = /* @__PURE__ */ qp(), o = /* @__PURE__ */ Fp(), u = /* @__PURE__ */ Bp(), f = /* @__PURE__ */ jn(), s = /* @__PURE__ */ Lp(), l = /* @__PURE__ */ Up(), c = /* @__PURE__ */ Vp(), p = /* @__PURE__ */ Wp(), m = /* @__PURE__ */ Hp(), g = /* @__PURE__ */ Gp(), b = /* @__PURE__ */ Kp(), d = /* @__PURE__ */ Yp(), a = Function, w = function(ge) {
    try {
      return a('"use strict"; return (' + ge + ").constructor;")();
    } catch {
    }
  }, v = /* @__PURE__ */ ql(), _ = /* @__PURE__ */ Jp(), E = function() {
    throw new f();
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
  }() : E, R = Zp()(), A = ih(), I = Bl(), q = Fl(), M = Ll(), F = Wo(), W = {}, oe = typeof Uint8Array > "u" || !A ? e : A(Uint8Array), V = {
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
    "%TypedArray%": oe,
    "%TypeError%": f,
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
    "%Math.floor%": c,
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
      var Pe = ge("%AsyncGenerator%");
      Pe && A && (ye = A(Pe.prototype));
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
  }, j = ni(), Q = /* @__PURE__ */ oh(), ee = j.call(F, Array.prototype.concat), fe = j.call(M, Array.prototype.splice), me = j.call(F, String.prototype.replace), xe = j.call(F, String.prototype.slice), Se = j.call(F, RegExp.prototype.exec), N = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, G = /\\(\\)?/g, ve = function(Z) {
    var ye = xe(Z, 0, 1), he = xe(Z, -1);
    if (ye === "%" && he !== "%")
      throw new u("invalid intrinsic syntax, expected closing `%`");
    if (he === "%" && ye !== "%")
      throw new u("invalid intrinsic syntax, expected opening `%`");
    var Pe = [];
    return me(Z, N, function(Ge, rt, qe, ze) {
      Pe[Pe.length] = qe ? me(ze, G, "$1") : rt || Ge;
    }), Pe;
  }, Oe = function(Z, ye) {
    var he = Z, Pe;
    if (Q(z, he) && (Pe = z[he], he = "%" + Pe[0] + "%"), Q(V, he)) {
      var Ge = V[he];
      if (Ge === W && (Ge = U(he)), typeof Ge > "u" && !ye)
        throw new f("intrinsic " + Z + " exists, but is not available. Please file an issue!");
      return {
        alias: Pe,
        name: he,
        value: Ge
      };
    }
    throw new u("intrinsic " + Z + " does not exist!");
  };
  return ho = function(Z, ye) {
    if (typeof Z != "string" || Z.length === 0)
      throw new f("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ye != "boolean")
      throw new f('"allowMissing" argument must be a boolean');
    if (Se(/^%?[^%]*%?$/, Z) === null)
      throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var he = ve(Z), Pe = he.length > 0 ? he[0] : "", Ge = Oe("%" + Pe + "%", ye), rt = Ge.name, qe = Ge.value, ze = !1, tt = Ge.alias;
    tt && (Pe = tt[0], fe(he, ee([0, 1], tt)));
    for (var Lt = 1, bt = !0; Lt < he.length; Lt += 1) {
      var st = he[Lt], Ut = xe(st, 0, 1), Vt = xe(st, -1);
      if ((Ut === '"' || Ut === "'" || Ut === "`" || Vt === '"' || Vt === "'" || Vt === "`") && Ut !== Vt)
        throw new u("property names with quotes must have matching quotes");
      if ((st === "constructor" || !bt) && (ze = !0), Pe += "." + st, rt = "%" + Pe + "%", Q(V, rt))
        qe = V[rt];
      else if (qe != null) {
        if (!(st in qe)) {
          if (!ye)
            throw new f("base intrinsic for " + Z + " exists, but the property is not available.");
          return;
        }
        if (v && Lt + 1 >= he.length) {
          var Ct = v(qe, st);
          bt = !!Ct, bt && "get" in Ct && !("originalValue" in Ct.get) ? qe = Ct.get : qe = qe[st];
        } else
          bt = Q(qe, st), qe = qe[st];
        bt && !ze && (V[rt] = qe);
      }
    }
    return qe;
  }, ho;
}
var mo, Ws;
function Vl() {
  if (Ws) return mo;
  Ws = 1;
  var e = /* @__PURE__ */ Ho(), t = Ul(), r = t([e("%String.prototype.indexOf%")]);
  return mo = function(i, o) {
    var u = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof u == "function" && r(i, ".prototype.") > -1 ? t([u]) : u;
  }, mo;
}
var yo, Hs;
function Wl() {
  if (Hs) return yo;
  Hs = 1;
  var e = /* @__PURE__ */ Ho(), t = /* @__PURE__ */ Vl(), r = /* @__PURE__ */ ti(), n = /* @__PURE__ */ jn(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), u = t("Map.prototype.set", !0), f = t("Map.prototype.has", !0), s = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
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
        return p ? f(p, g) : !1;
      },
      set: function(g, b) {
        p || (p = new i()), u(p, g, b);
      }
    };
    return m;
  }, yo;
}
var vo, Gs;
function ah() {
  if (Gs) return vo;
  Gs = 1;
  var e = /* @__PURE__ */ Ho(), t = /* @__PURE__ */ Vl(), r = /* @__PURE__ */ ti(), n = Wl(), i = /* @__PURE__ */ jn(), o = e("%WeakMap%", !0), u = t("WeakMap.prototype.get", !0), f = t("WeakMap.prototype.set", !0), s = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
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
          o && b && (typeof b == "object" || typeof b == "function") ? (p || (p = new o()), f(p, b, d)) : n && (m || (m = n()), m.set(b, d));
        }
      };
      return g;
    }
  ) : n, vo;
}
var go, Ks;
function sh() {
  if (Ks) return go;
  Ks = 1;
  var e = /* @__PURE__ */ jn(), t = /* @__PURE__ */ ti(), r = Np(), n = Wl(), i = ah(), o = i || n || r;
  return go = function() {
    var f, s = {
      assert: function(l) {
        if (!s.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        return !!f && f.delete(l);
      },
      get: function(l) {
        return f && f.get(l);
      },
      has: function(l) {
        return !!f && f.has(l);
      },
      set: function(l, c) {
        f || (f = o()), f.set(l, c);
      }
    };
    return s;
  }, go;
}
var bo, zs;
function Go() {
  if (zs) return bo;
  zs = 1;
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
var wo, Ys;
function Hl() {
  if (Ys) return wo;
  Ys = 1;
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
  }, f = function(w, v) {
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
  }, l = 1024, c = function(w, v, _, E, P) {
    if (w.length === 0)
      return w;
    var R = w;
    if (typeof w == "symbol" ? R = Symbol.prototype.toString.call(w) : typeof w != "string" && (R = String(w)), _ === "iso-8859-1")
      return escape(R).replace(/%u[0-9a-f]{4}/gi, function(oe) {
        return "%26%23" + parseInt(oe.slice(2), 16) + "%3B";
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
    assign: f,
    combine: b,
    compact: p,
    decode: s,
    encode: c,
    isBuffer: g,
    isRegExp: m,
    maybeMap: d,
    merge: u
  }, wo;
}
var _o, Xs;
function lh() {
  if (Xs) return _o;
  Xs = 1;
  var e = sh(), t = /* @__PURE__ */ Hl(), r = /* @__PURE__ */ Go(), n = Object.prototype.hasOwnProperty, i = {
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
  }, o = Array.isArray, u = Array.prototype.push, f = function(d, a) {
    u.apply(d, o(a) ? a : [a]);
  }, s = Date.prototype.toISOString, l = r.default, c = {
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
  }, m = {}, g = function d(a, w, v, _, E, P, R, A, I, q, M, F, W, oe, V, B, U, z) {
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
        return I && !B ? I(w, c.encoder, U, "key", oe) : w;
      j = "";
    }
    if (p(j) || t.isBuffer(j)) {
      if (I) {
        var xe = B ? w : I(w, c.encoder, U, "key", oe);
        return [V(xe) + "=" + V(I(j, c.encoder, U, "value", oe))];
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
        var he = F && A ? String(Z).replace(/\./g, "%2E") : String(Z), Pe = o(j) ? typeof v == "function" ? v(Oe, he) : Oe : Oe + (F ? "." + he : "[" + he + "]");
        z.set(a, ee);
        var Ge = e();
        Ge.set(m, z), f(Se, d(
          ye,
          Pe,
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
          oe,
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
      return c;
    if (typeof a.allowEmptyArrays < "u" && typeof a.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof a.encodeDotInKeys < "u" && typeof a.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (a.encoder !== null && typeof a.encoder < "u" && typeof a.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var w = a.charset || c.charset;
    if (typeof a.charset < "u" && a.charset !== "utf-8" && a.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var v = r.default;
    if (typeof a.format < "u") {
      if (!n.call(r.formatters, a.format))
        throw new TypeError("Unknown format option provided.");
      v = a.format;
    }
    var _ = r.formatters[v], E = c.filter;
    (typeof a.filter == "function" || o(a.filter)) && (E = a.filter);
    var P;
    if (a.arrayFormat in i ? P = a.arrayFormat : "indices" in a ? P = a.indices ? "indices" : "repeat" : P = c.arrayFormat, "commaRoundTrip" in a && typeof a.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var R = typeof a.allowDots > "u" ? a.encodeDotInKeys === !0 ? !0 : c.allowDots : !!a.allowDots;
    return {
      addQueryPrefix: typeof a.addQueryPrefix == "boolean" ? a.addQueryPrefix : c.addQueryPrefix,
      allowDots: R,
      allowEmptyArrays: typeof a.allowEmptyArrays == "boolean" ? !!a.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: P,
      charset: w,
      charsetSentinel: typeof a.charsetSentinel == "boolean" ? a.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!a.commaRoundTrip,
      delimiter: typeof a.delimiter > "u" ? c.delimiter : a.delimiter,
      encode: typeof a.encode == "boolean" ? a.encode : c.encode,
      encodeDotInKeys: typeof a.encodeDotInKeys == "boolean" ? a.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof a.encoder == "function" ? a.encoder : c.encoder,
      encodeValuesOnly: typeof a.encodeValuesOnly == "boolean" ? a.encodeValuesOnly : c.encodeValuesOnly,
      filter: E,
      format: v,
      formatter: _,
      serializeDate: typeof a.serializeDate == "function" ? a.serializeDate : c.serializeDate,
      skipNulls: typeof a.skipNulls == "boolean" ? a.skipNulls : c.skipNulls,
      sort: typeof a.sort == "function" ? a.sort : null,
      strictNullHandling: typeof a.strictNullHandling == "boolean" ? a.strictNullHandling : c.strictNullHandling
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
      v.skipNulls && F === null || f(P, g(
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
    var W = P.join(v.delimiter), oe = v.addQueryPrefix === !0 ? "?" : "";
    return v.charsetSentinel && (v.charset === "iso-8859-1" ? oe += "utf8=%26%2310003%3B&" : oe += "utf8=%E2%9C%93&"), W.length > 0 ? oe + W : "";
  }, _o;
}
var So, Js;
function uh() {
  if (Js) return So;
  Js = 1;
  var e = /* @__PURE__ */ Hl(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
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
  }, u = "utf8=%26%2310003%3B", f = "utf8=%E2%9C%93", s = function(g, b) {
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
        v[E].indexOf("utf8=") === 0 && (v[E] === f ? P = "utf-8" : v[E] === u && (P = "iso-8859-1"), _ = E, E = v.length);
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
  }, c = function(g, b, d, a) {
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
      var _ = w[v], E = c(_, d[_], b, typeof m == "string");
      a = e.merge(a, E, b);
    }
    return b.allowSparse === !0 ? a : e.compact(a);
  }, So;
}
var xo, Qs;
function ch() {
  if (Qs) return xo;
  Qs = 1;
  var e = /* @__PURE__ */ lh(), t = /* @__PURE__ */ uh(), r = /* @__PURE__ */ Go();
  return xo = {
    formats: r,
    parse: t,
    stringify: e
  }, xo;
}
var Ur = { exports: {} }, fh = Ur.exports, Zs;
function dh() {
  return Zs || (Zs = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(typeof self < "u" ? self : typeof window < "u" ? window : typeof ir < "u" ? ir : fh, function() {
      var r = "3.7.7", n = r, i = typeof Buffer == "function", o = typeof TextDecoder == "function" ? new TextDecoder() : void 0, u = typeof TextEncoder == "function" ? new TextEncoder() : void 0, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = Array.prototype.slice.call(f), l = function(N) {
        var G = {};
        return N.forEach(function(ve, Oe) {
          return G[ve] = Oe;
        }), G;
      }(s), c = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, p = String.fromCharCode.bind(String), m = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function(N) {
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
        if (N = N.replace(/\s+/g, ""), !c.test(N))
          throw new TypeError("malformed base64.");
        N += "==".slice(2 - (N.length & 3));
        for (var G, ve = "", Oe, ge, Z = 0; Z < N.length; )
          G = l[N.charAt(Z++)] << 18 | l[N.charAt(Z++)] << 12 | (Oe = l[N.charAt(Z++)]) << 6 | (ge = l[N.charAt(Z++)]), ve += Oe === 64 ? p(G >> 16 & 255) : ge === 64 ? p(G >> 16 & 255, G >> 8 & 255) : p(G >> 16 & 255, G >> 8 & 255, G & 255);
        return ve;
      }, oe = typeof atob == "function" ? function(N) {
        return atob(b(N));
      } : i ? function(N) {
        return Buffer.from(N, "base64").toString("binary");
      } : W, V = i ? function(N) {
        return m(Buffer.from(N, "base64"));
      } : function(N) {
        return m(oe(N).split("").map(function(G) {
          return G.charCodeAt(0);
        }));
      }, B = function(N) {
        return V(z(N));
      }, U = i ? function(N) {
        return Buffer.from(N, "base64").toString("utf8");
      } : o ? function(N) {
        return o.decode(V(N));
      } : function(N) {
        return F(oe(N));
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
        atob: oe,
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
var el;
function ph() {
  if (el) return $t;
  el = 1;
  var e = $t.__assign || function() {
    return e = Object.assign || function(p) {
      for (var m, g = 1, b = arguments.length; g < b; g++) {
        m = arguments[g];
        for (var d in m) Object.prototype.hasOwnProperty.call(m, d) && (p[d] = m[d]);
      }
      return p;
    }, e.apply(this, arguments);
  }, t = $t.__awaiter || function(p, m, g, b) {
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
  }, r = $t.__generator || function(p, m) {
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
  }, n = $t.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty($t, "__esModule", { value: !0 }), $t.KintoneRequestConfigBuilder = void 0;
  var i = n(jl()), o = n(/* @__PURE__ */ ch()), u = /* @__PURE__ */ dh(), f = ei(), s = "http", l = 4096, c = (
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
                switch (a = e(e(e({ method: m, headers: this.headers, url: "".concat(this.baseUrl).concat(g) }, d || {}), f.platformDeps.buildPlatformDependentConfig({
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
        } : {}, a = f.platformDeps.buildHeaders({ userAgent: b }), w = e(e({}, a), d);
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
                return this.requestToken !== null ? [3, 2] : (m = this, [4, f.platformDeps.getRequestToken()]);
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
  return $t.KintoneRequestConfigBuilder = c, $t;
}
var on = {}, tl;
function hh() {
  if (tl) return on;
  tl = 1;
  var e = on.__assign || function() {
    return e = Object.assign || function(i) {
      for (var o, u = 1, f = arguments.length; u < f; u++) {
        o = arguments[u];
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
      }
      return i;
    }, e.apply(this, arguments);
  }, t = on.__rest || function(i, o) {
    var u = {};
    for (var f in i) Object.prototype.hasOwnProperty.call(i, f) && o.indexOf(f) < 0 && (u[f] = i[f]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, f = Object.getOwnPropertySymbols(i); s < f.length; s++)
        o.indexOf(f[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[s]) && (u[f[s]] = i[f[s]]);
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
        return o.then(function(f) {
          return u.handleSuccessResponse(f);
        }, function(f) {
          return u.handleErrorResponse(f);
        });
      }, i.prototype.handleSuccessResponse = function(o) {
        if (this.enableAbortSearchError && /Filter aborted because of too many search results/.test(o.headers["x-cybozu-warning"]))
          throw new r.KintoneAbortSearchError(o.headers["x-cybozu-warning"]);
        return o.data;
      }, i.prototype.handleErrorResponse = function(o) {
        if (!o.response)
          throw /mac verify failure/.test(o.toString()) ? new Error("invalid clientCertAuth setting") : o;
        var u = o.response, f = u.data, s = t(u, ["data"]);
        throw typeof f == "string" ? new Error("".concat(s.status, ": ").concat(s.statusText)) : new r.KintoneRestAPIError(e({ data: f }, s));
      }, i;
    }()
  );
  return on.KintoneResponseHandler = n, on;
}
var nl;
function mh() {
  if (nl) return _n;
  nl = 1;
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
  var t = wp(), r = _p(), n = Op(), i = Rp(), o = Ap(), u = Pp(), f = Dp(), s = ph(), l = hh(), c = ei(), p = Uo(), m = function(v) {
    if ("username" in v)
      return e({ type: "password" }, v);
    if ("apiToken" in v)
      return e({ type: "apiToken" }, v);
    if ("oAuthToken" in v)
      return e({ type: "oAuthToken" }, v);
    try {
      return c.platformDeps.getDefaultAuth();
    } catch (_) {
      throw _ instanceof p.UnsupportedPlatformError ? new Error("session authentication is not supported in ".concat(_.platform, " environment.")) : _;
    }
  }, g = (
    /** @class */
    function() {
      function v(_) {
        _ === void 0 && (_ = {});
        var E, P, R;
        b(_), this.baseUrl = c.platformDeps.buildBaseUrl(_.baseUrl).replace(/\/+$/, "");
        var A = m((E = _.auth) !== null && E !== void 0 ? E : {}), I = new s.KintoneRequestConfigBuilder(e(e({}, _), { baseUrl: this.baseUrl, auth: A })), q = new l.KintoneResponseHandler({
          enableAbortSearchError: (R = (P = _.featureFlags) === null || P === void 0 ? void 0 : P.enableAbortSearchError) !== null && R !== void 0 ? R : !1
        }), M = new f.DefaultHttpClient({
          responseHandler: q,
          requestConfigBuilder: I
        }), F = _.guestSpaceId;
        this.bulkRequest_ = new t.BulkRequestClient(M, F), this.record = new n.RecordClient(M, this.bulkRequest_, F), this.app = new r.AppClient(M, F), this.space = new i.SpaceClient(M, F), this.file = new o.FileClient(M, F), this.plugin = new u.PluginClient(M);
      }
      return Object.defineProperty(v, "version", {
        get: function() {
          return c.platformDeps.getVersion();
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
var rl;
function yh() {
  return rl || (rl = 1, function(e) {
    var t = rn.__createBinding || (Object.create ? function(s, l, c, p) {
      p === void 0 && (p = c);
      var m = Object.getOwnPropertyDescriptor(l, c);
      (!m || ("get" in m ? !l.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
        return l[c];
      } }), Object.defineProperty(s, p, m);
    } : function(s, l, c, p) {
      p === void 0 && (p = c), s[p] = l[c];
    }), r = rn.__setModuleDefault || (Object.create ? function(s, l) {
      Object.defineProperty(s, "default", { enumerable: !0, value: l });
    } : function(s, l) {
      s.default = l;
    }), n = rn.__importStar || /* @__PURE__ */ function() {
      var s = function(l) {
        return s = Object.getOwnPropertyNames || function(c) {
          var p = [];
          for (var m in c) Object.prototype.hasOwnProperty.call(c, m) && (p[p.length] = m);
          return p;
        }, s(l);
      };
      return function(l) {
        if (l && l.__esModule) return l;
        var c = {};
        if (l != null) for (var p = s(l), m = 0; m < p.length; m++) p[m] !== "default" && t(c, l, p[m]);
        return r(c, l), c;
      };
    }(), i = rn.__exportStar || function(s, l) {
      for (var c in s) c !== "default" && !Object.prototype.hasOwnProperty.call(l, c) && t(l, s, c);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KintoneRestAPIClient = void 0;
    var o = ei(), u = n(gp());
    (0, o.injectPlatformDeps)(u);
    var f = mh();
    Object.defineProperty(e, "KintoneRestAPIClient", { enumerable: !0, get: function() {
      return f.KintoneRestAPIClient;
    } }), i(Vo(), e);
  }(rn)), rn;
}
var vh = yh();
const gh = {
  key: 0,
  class: "kvc-file-value"
}, bh = { class: "kvc-file-select-list" }, wh = ["src"], _h = { key: 1 }, Sh = { class: "kvc-file-select-file-name" }, xh = { class: "kvc-file-select-file-size" }, Eh = { class: "kvc-file-select-list-item" }, Oh = ["onClick"], Rh = { class: "kvc-file-select-file-name" }, Ah = { class: "kvc-file-select-file-size" }, Ph = ["src"], Ch = { class: "kvc-file-select-group" }, kh = ["disabled"], Dh = ["multiple", "accept"], Th = /* @__PURE__ */ et({
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
    const r = e, n = t, i = new vh.KintoneRestAPIClient(), o = ke(null), u = ke(null), f = ke(r.modelValue || []), s = ke(null), l = ke(null), c = ke(!1);
    al(() => r.modelValue, (a) => {
      f.value = a ? Array.from(a) : [];
    }), To(async () => {
      if (f.value.length)
        for await (const a of f.value)
          a.fileKey && !a.data && (a.data = await i.file.downloadFile({ fileKey: a.fileKey }));
      s.value && Wd(s, f, {
        onStart: () => c.value = !0,
        onEnd: () => {
          c.value = !1, setTimeout(() => {
            n("update:modelValue", f.value), n("change", f.value);
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
      f.value.splice(a, 1), n("update:modelValue", f.value), n("change", f.value);
    }, b = async (a) => {
      if (!a) return;
      const w = Array.from(a), v = w.filter((E) => !E.fileKey), _ = r.multiple ? [...f.value, ...w.filter((E) => E.fileKey)] : [];
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
      n("update:modelValue", _), n("change", _), f.value = _, u.value = null;
    }, { isOverDropZone: d } = of(l, {
      onDrop: (a) => {
        b(a);
      },
      dataTypes: Ne(() => {
        var a;
        return ((a = r.accept) == null ? void 0 : a.split(",")) ?? [];
      }),
      // ← 明示的にstring[] or []
      multiple: r.multiple,
      preventDefaultForUnhandled: !1
    });
    return (a, w) => a.readOnly ? (X(), J("div", gh, [
      le("ul", bh, [
        (X(!0), J(pt, null, gt(f.value, (v, _) => (X(), J("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          v.data && (v.contentType || "").startsWith("image/") ? (X(), J("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(v.data, v.contentType)
          }, null, 8, wh)) : (X(), J("span", _h, [
            le("span", Sh, Qe(v.name), 1),
            le("span", xh, "(" + Qe(p(v.size)) + ")", 1)
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
        ref: s
      }, [
        (X(!0), J(pt, null, gt(f.value, (v, _) => (X(), J("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          le("div", Eh, [
            a.disabled ? Ve("", !0) : (X(), J("button", {
              key: 0,
              type: "button",
              class: "kvc-file-select-delete-button",
              onClick: (E) => g(_)
            }, [
              ft(Me(Rt), {
                icon: "mdi:close",
                width: "22"
              })
            ], 8, Oh)),
            le("span", Rh, Qe(v.name), 1),
            le("span", Ah, Qe(p(v.size)), 1)
          ]),
          v.data && (v.contentType || "").startsWith("image/") ? (X(), J("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(v.data, v.contentType)
          }, null, 8, Ph)) : Ve("", !0)
        ]))), 128))
      ], 512),
      le("div", Ch, [
        le("button", {
          type: "button",
          disabled: a.disabled,
          class: "kvc-file-select-button",
          onClick: w[0] || (w[0] = (v) => {
            var _;
            return (_ = o.value) == null ? void 0 : _.click();
          })
        }, " 参照 ", 8, kh),
        w[3] || (w[3] = le("p", { class: "kvc-file-select-text" }, "(最大1 GB)", -1))
      ]),
      !c.value && Me(d) ? (X(), J("div", {
        key: 0,
        class: "kvc-file-select-file-dropzone",
        onClick: w[1] || (w[1] = (v) => d.value = !1)
      }, " ここにファイルをドロップします。 ")) : Ve("", !0),
      le("input", {
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
}), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KvcButton: pf,
  KvcCheckbox: kf,
  KvcDatePicker: wl,
  KvcDateTimePicker: yd,
  KvcDropdown: df,
  KvcField: bf,
  KvcFileSelect: Th,
  KvcRadio: Ef,
  KvcRow: Fu,
  KvcTable: Yc,
  KvcTextInput: Mo,
  KvcTextarea: gd,
  KvcTimePicker: _l,
  KvcWrap: $u
}, Symbol.toStringTag, { value: "Module" })), jh = {
  install: (e) => {
    for (const t in il) {
      const r = il[t];
      e.component(r.name || t, r);
    }
  }
};
export {
  pf as KvcButton,
  kf as KvcCheckbox,
  wl as KvcDatePicker,
  yd as KvcDateTimePicker,
  df as KvcDropdown,
  bf as KvcField,
  Th as KvcFileSelect,
  Ef as KvcRadio,
  Fu as KvcRow,
  Yc as KvcTable,
  Mo as KvcTextInput,
  gd as KvcTextarea,
  _l as KvcTimePicker,
  $u as KvcWrap,
  jh as default
};

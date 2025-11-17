import { reactive as mc, readonly as Wf, defineComponent as We, onMounted as Nn, watch as Rr, computed as Ee, withDirectives as fn, createElementBlock as K, openBlock as U, createElementVNode as ne, createStaticVNode as Hf, vShow as Tr, unref as Ie, createBlock as Bt, resolveDynamicComponent as Gf, withModifiers as Kf, withCtx as li, renderSlot as Dt, createVNode as Ge, ref as be, shallowRef as is, onUnmounted as zf, h as Xr, nextTick as xr, resolveComponent as vc, createCommentVNode as Ce, normalizeStyle as at, toDisplayString as Ke, createTextVNode as Fi, getCurrentInstance as yc, useSlots as ws, normalizeClass as Ve, Fragment as yt, renderList as St, mergeProps as cl, getCurrentScope as Yf, onScopeDispose as Xf, toValue as mn, vModelRadio as Jf, vModelCheckbox as Qf, vModelDynamic as Zf, vModelText as ed, isRef as td, provide as fl, inject as nd } from "vue";
const an = mc({
  isVisible: !1,
  text: "読み込み中..."
});
class rd {
  options;
  state;
  constructor(t = {}) {
    this.options = {
      text: "読み込み中...",
      ...t
    }, this.state = Wf(an);
  }
  open(t) {
    an.text = t || this.options.text || "読み込み中...", an.isVisible = !0;
  }
  close() {
    an.isVisible = !1;
  }
  update(t) {
    an.text = t;
  }
  isOpen() {
    return an.isVisible;
  }
}
const ui = new rd(), Pg = () => ui, Ig = (e) => (ui.open(e), ui), $g = () => {
  ui.close();
}, od = { class: "kvc-spinner-wrapper" }, id = { class: "kvc-spinner" }, ad = ["innerHTML"], sd = /* @__PURE__ */ We({
  __name: "spinner",
  setup(e) {
    const t = (n) => {
      const o = document.querySelector("body");
      n ? o && (o.style.overflow = "hidden") : o && (o.style.overflow = "auto");
    };
    Nn(() => t(an.isVisible)), Rr(() => an.isVisible, t);
    const r = Ee(() => (an.text || "").replace(`
`, "<br>"));
    return (n, o) => fn((U(), K("div", od, [
      ne("div", id, [
        o[0] || (o[0] = Hf('<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" data-v-63a02332><g data-v-63a02332><circle cx="12" cy="2.5" r="1.5" fill="#99ccff" opacity="0.14" data-v-63a02332></circle><circle cx="16.75" cy="3.77" r="1.5" fill="#99ccff" opacity="0.29" data-v-63a02332></circle><circle cx="20.23" cy="7.25" r="1.5" fill="#99ccff" opacity="0.43" data-v-63a02332></circle><circle cx="21.5" cy="12" r="1.5" fill="#99ccff" opacity="0.57" data-v-63a02332></circle><circle cx="20.23" cy="16.75" r="1.5" fill="#99ccff" opacity="0.71" data-v-63a02332></circle><circle cx="16.75" cy="20.23" r="1.5" fill="#99ccff" opacity="0.86" data-v-63a02332></circle><circle cx="12" cy="21.5" r="1.5" fill="#99ccff" data-v-63a02332></circle></g></svg>', 1)),
        ne("span", {
          class: "kvc-spinner-text",
          innerHTML: r.value
        }, null, 8, ad)
      ])
    ], 512)), [
      [Tr, Ie(an).isVisible]
    ]);
  }
}), gc = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, bc = /* @__PURE__ */ gc(sd, [["__scopeId", "data-v-63a02332"]]), ld = /* @__PURE__ */ We({
  __name: "wrap",
  props: {
    isForm: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, o) => (U(), Bt(Gf(e.isForm ? "form" : "div"), {
      id: "kvc-wrap",
      class: "kvc-wrap",
      onSubmit: o[0] || (o[0] = Kf((i) => r("submit", i), ["prevent"]))
    }, {
      default: li(() => [
        Dt(n.$slots, "default"),
        Ge(bc)
      ]),
      _: 3
    }, 32));
  }
}), ud = {}, cd = { class: "kvc-row" };
function fd(e, t) {
  return U(), K("div", cd, [
    Dt(e.$slots, "default")
  ]);
}
const dd = /* @__PURE__ */ gc(ud, [["render", fd]]), wc = /^[a-z0-9]+(-[a-z0-9]+)*$/, Si = (e, t, r, n = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    n = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const u = o.pop(), l = o.pop(), s = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : n,
      prefix: l,
      name: u
    };
    return t && !Uo(s) ? null : s;
  }
  const i = o[0], a = i.split("-");
  if (a.length > 1) {
    const u = {
      provider: n,
      prefix: a.shift(),
      name: a.join("-")
    };
    return t && !Uo(u) ? null : u;
  }
  if (r && n === "") {
    const u = {
      provider: n,
      prefix: "",
      name: i
    };
    return t && !Uo(u, r) ? null : u;
  }
  return null;
}, Uo = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Sc = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), ci = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), xi = Object.freeze({
  ...Sc,
  ...ci
}), as = Object.freeze({
  ...xi,
  body: "",
  hidden: !1
});
function pd(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (r.rotate = n), r;
}
function dl(e, t) {
  const r = pd(e, t);
  for (const n in as)
    n in ci ? n in e && !(n in r) && (r[n] = ci[n]) : n in t ? r[n] = t[n] : n in e && (r[n] = e[n]);
  return r;
}
function hd(e, t) {
  const r = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(a) {
    if (r[a])
      return o[a] = [];
    if (!(a in o)) {
      o[a] = null;
      const u = n[a] && n[a].parent, l = u && i(u);
      l && (o[a] = [u].concat(l));
    }
    return o[a];
  }
  return Object.keys(r).concat(Object.keys(n)).forEach(i), o;
}
function md(e, t, r) {
  const n = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function a(u) {
    i = dl(
      n[u] || o[u],
      i
    );
  }
  return a(t), r.forEach(a), dl(e, i);
}
function xc(e, t) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), r.push(o);
  });
  const n = hd(e);
  for (const o in n) {
    const i = n[o];
    i && (t(o, md(e, o, i)), r.push(o));
  }
  return r;
}
const vd = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Sc
};
function ji(e, t) {
  for (const r in t)
    if (r in e && typeof e[r] != typeof t[r])
      return !1;
  return !0;
}
function _c(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !ji(e, vd))
    return null;
  const r = t.icons;
  for (const o in r) {
    const i = r[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof i.body != "string" || // Check other props
      !ji(
        i,
        as
      )
    )
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in n) {
    const i = n[o], a = i.parent;
    if (
      // Name cannot be empty
      !o || // Parent must be set and point to existing icon
      typeof a != "string" || !r[a] && !n[a] || // Check other props
      !ji(
        i,
        as
      )
    )
      return null;
  }
  return t;
}
const pl = /* @__PURE__ */ Object.create(null);
function yd(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Or(e, t) {
  const r = pl[e] || (pl[e] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = yd(e, t));
}
function Ec(e, t) {
  return _c(t) ? xc(t, (r, n) => {
    n ? e.icons[r] = n : e.missing.add(r);
  }) : [];
}
function gd(e, t, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[t] = { ...r }, !0;
  } catch {
  }
  return !1;
}
let so = !1;
function Oc(e) {
  return typeof e == "boolean" && (so = e), so;
}
function bd(e) {
  const t = typeof e == "string" ? Si(e, !0, so) : e;
  if (t) {
    const r = Or(t.provider, t.prefix), n = t.name;
    return r.icons[n] || (r.missing.has(n) ? null : void 0);
  }
}
function wd(e, t) {
  const r = Si(e, !0, so);
  if (!r)
    return !1;
  const n = Or(r.provider, r.prefix);
  return t ? gd(n, r.name, t) : (n.missing.add(r.name), !0);
}
function Sd(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), so && !t && !e.prefix) {
    let o = !1;
    return _c(e) && (e.prefix = "", xc(e, (i, a) => {
      wd(i, a) && (o = !0);
    })), o;
  }
  const r = e.prefix;
  if (!Uo({
    prefix: r,
    name: "a"
  }))
    return !1;
  const n = Or(t, r);
  return !!Ec(n, e);
}
const Ac = Object.freeze({
  width: null,
  height: null
}), Cc = Object.freeze({
  // Dimensions
  ...Ac,
  // Transformations
  ...ci
}), xd = /(-?[0-9.]*[0-9]+[0-9.]*)/g, _d = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function hl(e, t, r) {
  if (t === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * t * r) / r;
  if (typeof e != "string")
    return e;
  const n = e.split(xd);
  if (n === null || !n.length)
    return e;
  const o = [];
  let i = n.shift(), a = _d.test(i);
  for (; ; ) {
    if (a) {
      const u = parseFloat(i);
      isNaN(u) ? o.push(i) : o.push(Math.ceil(u * t * r) / r);
    } else
      o.push(i);
    if (i = n.shift(), i === void 0)
      return o.join("");
    a = !a;
  }
}
function Ed(e, t = "defs") {
  let r = "";
  const n = e.indexOf("<" + t);
  for (; n >= 0; ) {
    const o = e.indexOf(">", n), i = e.indexOf("</" + t);
    if (o === -1 || i === -1)
      break;
    const a = e.indexOf(">", i);
    if (a === -1)
      break;
    r += e.slice(o + 1, i).trim(), e = e.slice(0, n).trim() + e.slice(a + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function Od(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Ad(e, t, r) {
  const n = Ed(e);
  return Od(n.defs, t + n.content + r);
}
const Cd = (e) => e === "unset" || e === "undefined" || e === "none";
function Dd(e, t) {
  const r = {
    ...xi,
    ...e
  }, n = {
    ...Cc,
    ...t
  }, o = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let i = r.body;
  [r, n].forEach((p) => {
    const c = [], b = p.hFlip, y = p.vFlip;
    let S = p.rotate;
    b ? y ? S += 2 : (c.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), c.push("scale(-1 1)"), o.top = o.left = 0) : y && (c.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), c.push("scale(1 -1)"), o.top = o.left = 0);
    let x;
    switch (S < 0 && (S -= Math.floor(S / 4) * 4), S = S % 4, S) {
      case 1:
        x = o.height / 2 + o.top, c.unshift(
          "rotate(90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
      case 2:
        c.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        x = o.width / 2 + o.left, c.unshift(
          "rotate(-90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
    }
    S % 2 === 1 && (o.left !== o.top && (x = o.left, o.left = o.top, o.top = x), o.width !== o.height && (x = o.width, o.width = o.height, o.height = x)), c.length && (i = Ad(
      i,
      '<g transform="' + c.join(" ") + '">',
      "</g>"
    ));
  });
  const a = n.width, u = n.height, l = o.width, s = o.height;
  let f, d;
  a === null ? (d = u === null ? "1em" : u === "auto" ? s : u, f = hl(d, l / s)) : (f = a === "auto" ? l : a, d = u === null ? hl(f, s / l) : u === "auto" ? s : u);
  const m = {}, v = (p, c) => {
    Cd(c) || (m[p] = c.toString());
  };
  v("width", f), v("height", d);
  const h = [o.left, o.top, l, s];
  return m.viewBox = h.join(" "), {
    attributes: m,
    viewBox: h,
    body: i
  };
}
const Rd = /\sid="(\S+)"/g, Td = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let kd = 0;
function Pd(e, t = Td) {
  const r = [];
  let n;
  for (; n = Rd.exec(e); )
    r.push(n[1]);
  if (!r.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((i) => {
    const a = typeof t == "function" ? t(i) : t + (kd++).toString(), u = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
      "$1" + a + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const ss = /* @__PURE__ */ Object.create(null);
function Id(e, t) {
  ss[e] = t;
}
function ls(e) {
  return ss[e] || ss[""];
}
function Ss(e) {
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
const xs = /* @__PURE__ */ Object.create(null), Lr = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Vo = [];
for (; Lr.length > 0; )
  Lr.length === 1 || Math.random() > 0.5 ? Vo.push(Lr.shift()) : Vo.push(Lr.pop());
xs[""] = Ss({
  resources: ["https://api.iconify.design"].concat(Vo)
});
function $d(e, t) {
  const r = Ss(t);
  return r === null ? !1 : (xs[e] = r, !0);
}
function _s(e) {
  return xs[e];
}
const Nd = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let ml = Nd();
function Md(e, t) {
  const r = _s(e);
  if (!r)
    return 0;
  let n;
  if (!r.maxURL)
    n = 0;
  else {
    let o = 0;
    r.resources.forEach((a) => {
      o = Math.max(o, a.length);
    });
    const i = t + ".json?icons=";
    n = r.maxURL - o - r.path.length - i.length;
  }
  return n;
}
function Fd(e) {
  return e === 404;
}
const jd = (e, t, r) => {
  const n = [], o = Md(e, t), i = "icons";
  let a = {
    type: i,
    provider: e,
    prefix: t,
    icons: []
  }, u = 0;
  return r.forEach((l, s) => {
    u += l.length + 1, u >= o && s > 0 && (n.push(a), a = {
      type: i,
      provider: e,
      prefix: t,
      icons: []
    }, u = l.length), a.icons.push(l);
  }), n.push(a), n;
};
function Bd(e) {
  if (typeof e == "string") {
    const t = _s(e);
    if (t)
      return t.path;
  }
  return "/";
}
const qd = (e, t, r) => {
  if (!ml) {
    r("abort", 424);
    return;
  }
  let n = Bd(t.provider);
  switch (t.type) {
    case "icons": {
      const i = t.prefix, u = t.icons.join(","), l = new URLSearchParams({
        icons: u
      });
      n += i + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const i = t.uri;
      n += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      r("abort", 400);
      return;
  }
  let o = 503;
  ml(e + n).then((i) => {
    const a = i.status;
    if (a !== 200) {
      setTimeout(() => {
        r(Fd(a) ? "abort" : "next", a);
      });
      return;
    }
    return o = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? r("abort", i) : r("next", o);
      });
      return;
    }
    setTimeout(() => {
      r("success", i);
    });
  }).catch(() => {
    r("next", o);
  });
}, Ld = {
  prepare: jd,
  send: qd
};
function Ud(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, r = /* @__PURE__ */ Object.create(null);
  e.sort((o, i) => o.provider !== i.provider ? o.provider.localeCompare(i.provider) : o.prefix !== i.prefix ? o.prefix.localeCompare(i.prefix) : o.name.localeCompare(i.name));
  let n = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (n.name === o.name && n.prefix === o.prefix && n.provider === o.provider)
      return;
    n = o;
    const i = o.provider, a = o.prefix, u = o.name, l = r[i] || (r[i] = /* @__PURE__ */ Object.create(null)), s = l[a] || (l[a] = Or(i, a));
    let f;
    u in s.icons ? f = t.loaded : a === "" || s.missing.has(u) ? f = t.missing : f = t.pending;
    const d = {
      provider: i,
      prefix: a,
      name: u
    };
    f.push(d);
  }), t;
}
function Dc(e, t) {
  e.forEach((r) => {
    const n = r.loaderCallbacks;
    n && (r.loaderCallbacks = n.filter((o) => o.id !== t));
  });
}
function Vd(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let r = !1;
    const n = e.provider, o = e.prefix;
    t.forEach((i) => {
      const a = i.icons, u = a.pending.length;
      a.pending = a.pending.filter((l) => {
        if (l.prefix !== o)
          return !0;
        const s = l.name;
        if (e.icons[s])
          a.loaded.push({
            provider: n,
            prefix: o,
            name: s
          });
        else if (e.missing.has(s))
          a.missing.push({
            provider: n,
            prefix: o,
            name: s
          });
        else
          return r = !0, !0;
        return !1;
      }), a.pending.length !== u && (r || Dc([e], i.id), i.callback(
        a.loaded.slice(0),
        a.missing.slice(0),
        a.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let Wd = 0;
function Hd(e, t, r) {
  const n = Wd++, o = Dc.bind(null, r, n);
  if (!t.pending.length)
    return o;
  const i = {
    id: n,
    icons: t,
    callback: e,
    abort: o
  };
  return r.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(i);
  }), o;
}
function Gd(e, t = !0, r = !1) {
  const n = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? Si(o, t, r) : o;
    i && n.push(i);
  }), n;
}
var Kd = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function zd(e, t, r, n) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let a;
  if (e.random) {
    let O = e.resources.slice(0);
    for (a = []; O.length > 1; ) {
      const D = Math.floor(Math.random() * O.length);
      a.push(O[D]), O = O.slice(0, D).concat(O.slice(D + 1));
    }
    a = a.concat(O);
  } else
    a = e.resources.slice(i).concat(e.resources.slice(0, i));
  const u = Date.now();
  let l = "pending", s = 0, f, d = null, m = [], v = [];
  typeof n == "function" && v.push(n);
  function h() {
    d && (clearTimeout(d), d = null);
  }
  function p() {
    l === "pending" && (l = "aborted"), h(), m.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), m = [];
  }
  function c(O, D) {
    D && (v = []), typeof O == "function" && v.push(O);
  }
  function b() {
    return {
      startTime: u,
      payload: t,
      status: l,
      queriesSent: s,
      queriesPending: m.length,
      subscribe: c,
      abort: p
    };
  }
  function y() {
    l = "failed", v.forEach((O) => {
      O(void 0, f);
    });
  }
  function S() {
    m.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), m = [];
  }
  function x(O, D, $) {
    const j = D !== "success";
    switch (m = m.filter((F) => F !== O), l) {
      case "pending":
        break;
      case "failed":
        if (j || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (D === "abort") {
      f = $, y();
      return;
    }
    if (j) {
      f = $, m.length || (a.length ? C() : y());
      return;
    }
    if (h(), S(), !e.random) {
      const F = e.resources.indexOf(O.resource);
      F !== -1 && F !== e.index && (e.index = F);
    }
    l = "completed", v.forEach((F) => {
      F($);
    });
  }
  function C() {
    if (l !== "pending")
      return;
    h();
    const O = a.shift();
    if (O === void 0) {
      if (m.length) {
        d = setTimeout(() => {
          h(), l === "pending" && (S(), y());
        }, e.timeout);
        return;
      }
      y();
      return;
    }
    const D = {
      status: "pending",
      resource: O,
      callback: ($, j) => {
        x(D, $, j);
      }
    };
    m.push(D), s++, d = setTimeout(C, e.rotate), r(O, t, D.callback);
  }
  return setTimeout(C), b;
}
function Rc(e) {
  const t = {
    ...Kd,
    ...e
  };
  let r = [];
  function n() {
    r = r.filter((u) => u().status === "pending");
  }
  function o(u, l, s) {
    const f = zd(
      t,
      u,
      l,
      (d, m) => {
        n(), s && s(d, m);
      }
    );
    return r.push(f), f;
  }
  function i(u) {
    return r.find((l) => u(l)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (u) => {
      t.index = u;
    },
    getIndex: () => t.index,
    cleanup: n
  };
}
function vl() {
}
const Bi = /* @__PURE__ */ Object.create(null);
function Yd(e) {
  if (!Bi[e]) {
    const t = _s(e);
    if (!t)
      return;
    const r = Rc(t), n = {
      config: t,
      redundancy: r
    };
    Bi[e] = n;
  }
  return Bi[e];
}
function Xd(e, t, r) {
  let n, o;
  if (typeof e == "string") {
    const i = ls(e);
    if (!i)
      return r(void 0, 424), vl;
    o = i.send;
    const a = Yd(e);
    a && (n = a.redundancy);
  } else {
    const i = Ss(e);
    if (i) {
      n = Rc(i);
      const a = e.resources ? e.resources[0] : "", u = ls(a);
      u && (o = u.send);
    }
  }
  return !n || !o ? (r(void 0, 424), vl) : n.query(t, o, r)().abort;
}
function yl() {
}
function Jd(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Vd(e);
  }));
}
function Qd(e) {
  const t = [], r = [];
  return e.forEach((n) => {
    (n.match(wc) ? t : r).push(n);
  }), {
    valid: t,
    invalid: r
  };
}
function Ur(e, t, r) {
  function n() {
    const o = e.pendingIcons;
    t.forEach((i) => {
      o && o.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (r && typeof r == "object")
    try {
      if (!Ec(e, r).length) {
        n();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  n(), Jd(e);
}
function gl(e, t) {
  e instanceof Promise ? e.then((r) => {
    t(r);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Zd(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: r, prefix: n } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !i)) {
      gl(
        e.loadIcons(o, n, r),
        (f) => {
          Ur(e, o, f);
        }
      );
      return;
    }
    if (i) {
      o.forEach((f) => {
        const d = i(f, n, r);
        gl(d, (m) => {
          const v = m ? {
            prefix: n,
            icons: {
              [f]: m
            }
          } : null;
          Ur(e, [f], v);
        });
      });
      return;
    }
    const { valid: a, invalid: u } = Qd(o);
    if (u.length && Ur(e, u, null), !a.length)
      return;
    const l = n.match(wc) ? ls(r) : null;
    if (!l) {
      Ur(e, a, null);
      return;
    }
    l.prepare(r, n, a).forEach((f) => {
      Xd(r, f, (d) => {
        Ur(e, f.icons, d);
      });
    });
  }));
}
const ep = (e, t) => {
  const r = Gd(e, !0, Oc()), n = Ud(r);
  if (!n.pending.length) {
    let l = !0;
    return t && setTimeout(() => {
      l && t(
        n.loaded,
        n.missing,
        n.pending,
        yl
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let a, u;
  return n.pending.forEach((l) => {
    const { provider: s, prefix: f } = l;
    if (f === u && s === a)
      return;
    a = s, u = f, i.push(Or(s, f));
    const d = o[s] || (o[s] = /* @__PURE__ */ Object.create(null));
    d[f] || (d[f] = []);
  }), n.pending.forEach((l) => {
    const { provider: s, prefix: f, name: d } = l, m = Or(s, f), v = m.pendingIcons || (m.pendingIcons = /* @__PURE__ */ new Set());
    v.has(d) || (v.add(d), o[s][f].push(d));
  }), i.forEach((l) => {
    const s = o[l.provider][l.prefix];
    s.length && Zd(l, s);
  }), t ? Hd(t, n, i) : yl;
};
function tp(e, t) {
  const r = {
    ...e
  };
  for (const n in t) {
    const o = t[n], i = typeof o;
    n in Ac ? (o === null || o && (i === "string" || i === "number")) && (r[n] = o) : i === typeof r[n] && (r[n] = n === "rotate" ? o % 4 : o);
  }
  return r;
}
const np = /[\s,]+/;
function rp(e, t) {
  t.split(np).forEach((r) => {
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
function op(e, t = 0) {
  const r = e.replace(/^-?[0-9.]*/, "");
  function n(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (r === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : n(o);
  } else if (r !== e) {
    let o = 0;
    switch (r) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let i = parseFloat(e.slice(0, e.length - r.length));
      return isNaN(i) ? 0 : (i = i / o, i % 1 === 0 ? n(i) : 0);
    }
  }
  return t;
}
function ip(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    r += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function ap(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function sp(e) {
  return "data:image/svg+xml," + ap(e);
}
function lp(e) {
  return 'url("' + sp(e) + '")';
}
const bl = {
  ...Cc,
  inline: !1
}, up = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, cp = {
  display: "inline-block"
}, us = {
  backgroundColor: "currentColor"
}, Tc = {
  backgroundColor: "transparent"
}, wl = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Sl = {
  webkitMask: us,
  mask: us,
  background: Tc
};
for (const e in Sl) {
  const t = Sl[e];
  for (const r in wl)
    t[e + r] = wl[r];
}
const Wo = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  Wo[e + "-flip"] = t, Wo[e.slice(0, 1) + "-flip"] = t, Wo[e + "Flip"] = t;
});
function xl(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const _l = (e, t) => {
  const r = tp(bl, t), n = { ...up }, o = t.mode || "svg", i = {}, a = t.style, u = typeof a == "object" && !(a instanceof Array) ? a : {};
  for (let p in t) {
    const c = t[p];
    if (c !== void 0)
      switch (p) {
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
          r[p] = c === !0 || c === "true" || c === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof c == "string" && rp(r, c);
          break;
        // Color: override style
        case "color":
          i.color = c;
          break;
        // Rotation as string
        case "rotate":
          typeof c == "string" ? r[p] = op(c) : typeof c == "number" && (r[p] = c);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          c !== !0 && c !== "true" && delete n["aria-hidden"];
          break;
        default: {
          const b = Wo[p];
          b ? (c === !0 || c === "true" || c === 1) && (r[b] = !0) : bl[p] === void 0 && (n[p] = c);
        }
      }
  }
  const l = Dd(e, r), s = l.attributes;
  if (r.inline && (i.verticalAlign = "-0.125em"), o === "svg") {
    n.style = {
      ...i,
      ...u
    }, Object.assign(n, s);
    let p = 0, c = t.id;
    return typeof c == "string" && (c = c.replace(/-/g, "_")), n.innerHTML = Pd(l.body, c ? () => c + "ID" + p++ : "iconifyVue"), Xr("svg", n);
  }
  const { body: f, width: d, height: m } = e, v = o === "mask" || (o === "bg" ? !1 : f.indexOf("currentColor") !== -1), h = ip(f, {
    ...s,
    width: d + "",
    height: m + ""
  });
  return n.style = {
    ...i,
    "--svg": lp(h),
    width: xl(s.width),
    height: xl(s.height),
    ...cp,
    ...v ? us : Tc,
    ...u
  }, Xr("span", n);
};
Oc(!0);
Id("", Ld);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Sd(n)) && console.error(r);
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
          const o = t[r];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          $d(r, o) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
const fp = {
  ...xi,
  body: ""
}, Je = We((e, { emit: t }) => {
  const r = be(null);
  function n() {
    r.value && (r.value.abort?.(), r.value = null);
  }
  const o = be(!!e.ssr), i = be(""), a = is(null);
  function u() {
    const s = e.icon;
    if (typeof s == "object" && s !== null && typeof s.body == "string")
      return i.value = "", {
        data: s
      };
    let f;
    if (typeof s != "string" || (f = Si(s, !1, !0)) === null)
      return null;
    let d = bd(f);
    if (!d) {
      const h = r.value;
      return (!h || h.name !== s) && (d === null ? r.value = {
        name: s
      } : r.value = {
        name: s,
        abort: ep([f], l)
      }), null;
    }
    n(), i.value !== s && (i.value = s, xr(() => {
      t("load", s);
    }));
    const m = e.customise;
    if (m) {
      d = Object.assign({}, d);
      const h = m(d.body, f.name, f.prefix, f.provider);
      typeof h == "string" && (d.body = h);
    }
    const v = ["iconify"];
    return f.prefix !== "" && v.push("iconify--" + f.prefix), f.provider !== "" && v.push("iconify--" + f.provider), { data: d, classes: v };
  }
  function l() {
    const s = u();
    s ? s.data !== a.value?.data && (a.value = s) : a.value = null;
  }
  return o.value ? l() : Nn(() => {
    o.value = !0, l();
  }), Rr(() => e.icon, l), zf(n), () => {
    const s = a.value;
    if (!s)
      return _l(fp, e);
    let f = e;
    return s.classes && (f = {
      ...e,
      class: s.classes.join(" ")
    }), _l({
      ...xi,
      ...s.data
    }, f);
  };
}, {
  props: [
    // Icon and render mode
    "icon",
    "mode",
    "ssr",
    // Layout and style
    "width",
    "height",
    "style",
    "color",
    "inline",
    // Transformations
    "rotate",
    "hFlip",
    "horizontalFlip",
    "vFlip",
    "verticalFlip",
    "flip",
    // Misc
    "id",
    "ariaHidden",
    "customise",
    "title"
  ],
  emits: ["load"]
}), dp = {
  key: 0,
  class: "kvc-dialog-wrapper"
}, pp = { class: "kvc-dialog-header" }, hp = { class: "kvc-dialog-title" }, mp = { class: "kvc-dialog-content" }, vp = {
  key: 0,
  class: "kvc-dialog-icon"
}, yp = { class: "kvc-dialog-message" }, gp = { class: "kvc-dialog-footer" }, bp = /* @__PURE__ */ We({
  __name: "dialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    width: {},
    title: { default: "Title" },
    showIcon: { type: Boolean, default: !1 },
    iconType: { default: "info" },
    cancelText: { default: "Cancel" },
    confirmText: { default: "OK" },
    showCancel: { type: Boolean, default: !0 },
    showConfirm: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "cancel", "confirm", "close"],
  setup(e, { emit: t }) {
    const r = t, n = e, o = (f) => {
      const d = document.querySelector("body");
      f ? d && (d.style.overflow = "hidden") : d && (d.style.overflow = "auto");
    }, i = () => {
      switch (n.iconType) {
        case "info":
          return "ep:info-filled";
        case "warning":
          return "ep:warning-filled";
        case "error":
          return "ep:circle-close-filled";
        case "success":
          return "ep:circle-check-filled";
        case "question":
          return "ep:question-filled";
        default:
          return "ep:info-filled";
      }
    }, a = () => {
      switch (n.iconType) {
        case "info":
          return "#3498db";
        case "warning":
          return "#f39c12";
        case "error":
          return "#e74c3c";
        case "success":
          return "#27ae60";
        default:
          return "#3498db";
      }
    }, u = () => {
      r("cancel"), r("update:modelValue", !1);
    }, l = () => {
      r("confirm"), r("update:modelValue", !1);
    }, s = () => {
      r("update:modelValue", !1);
    };
    return Nn(() => o(n.modelValue)), Rr(() => n.modelValue, (f) => {
      o(f), f || r("close");
    }), (f, d) => {
      const m = vc("KvcButton");
      return e.modelValue ? (U(), K("div", dp, [
        ne("div", {
          class: "kvc-dialog",
          style: at(e.width ? { width: e.width } : null)
        }, [
          ne("div", pp, [
            ne("h2", hp, Ke(e.title), 1),
            ne("button", {
              type: "button",
              class: "kvc-dialog-close",
              onClick: s
            }, [
              Ge(Ie(Je), {
                icon: "mdi-light:plus",
                width: "24"
              })
            ])
          ]),
          ne("div", mp, [
            e.showIcon ? (U(), K("div", vp, [
              Ge(Ie(Je), {
                icon: i(),
                width: "24",
                style: at({ color: a() })
              }, null, 8, ["icon", "style"])
            ])) : Ce("", !0),
            ne("div", yp, [
              Dt(f.$slots, "default", {}, () => [
                d[0] || (d[0] = Fi("This is Content", -1))
              ])
            ])
          ]),
          ne("div", gp, [
            e.showCancel ? (U(), Bt(m, {
              key: 0,
              color: "normal",
              onClick: u
            }, {
              default: li(() => [
                Fi(Ke(e.cancelText), 1)
              ]),
              _: 1
            })) : Ce("", !0),
            e.showConfirm ? (U(), Bt(m, {
              key: 1,
              color: "save",
              onClick: l
            }, {
              default: li(() => [
                Fi(Ke(e.confirmText), 1)
              ]),
              _: 1
            })) : Ce("", !0)
          ])
        ], 4)
      ])) : Ce("", !0);
    };
  }
});
function wp() {
  return typeof window < "u" ? window.console : global.console;
}
const Sp = wp();
function xp(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] || (t[n] = e(n));
  };
}
const _p = /-(\w)/g, El = xp((e) => e.replace(_p, (t, r) => r ? r.toUpperCase() : ""));
function qi(e) {
  e.parentElement !== null && e.parentElement.removeChild(e);
}
function Ol(e, t, r) {
  const n = r === 0 ? e.children[0] : e.children[r - 1].nextSibling;
  e.insertBefore(t, n);
}
function Al(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Al(Object(r), !0).forEach(function(n) {
      Ep(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Al(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ho(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ho = function(t) {
    return typeof t;
  } : Ho = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ho(e);
}
function Ep(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function gn() {
  return gn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gn.apply(this, arguments);
}
function Op(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ap(e, t) {
  if (e == null) return {};
  var r = Op(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var Cp = "1.14.0";
function vn(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var wn = vn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), co = vn(/Edge/i), Cl = vn(/firefox/i), Jr = vn(/safari/i) && !vn(/chrome/i) && !vn(/android/i), kc = vn(/iP(ad|od|hone)/i), Dp = vn(/chrome/i) && vn(/android/i), Pc = {
  capture: !1,
  passive: !1
};
function $e(e, t, r) {
  e.addEventListener(t, r, !wn && Pc);
}
function Pe(e, t, r) {
  e.removeEventListener(t, r, !wn && Pc);
}
function fi(e, t) {
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
function Rp(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function on(e, t, r, n) {
  if (e) {
    r = r || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === r && fi(e, t) : fi(e, t)) || n && e === r)
        return e;
      if (e === r) break;
    } while (e = Rp(e));
  }
  return null;
}
var Dl = /\s+/g;
function $t(e, t, r) {
  if (e && t)
    if (e.classList)
      e.classList[r ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ").replace(Dl, " ").replace(" " + t + " ", " ");
      e.className = (n + (r ? " " + t : "")).replace(Dl, " ");
    }
}
function de(e, t, r) {
  var n = e && e.style;
  if (n) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (r = e.currentStyle), t === void 0 ? r : r[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = r + (typeof r == "string" ? "" : "px");
  }
}
function _r(e, t) {
  var r = "";
  if (typeof e == "string")
    r = e;
  else
    do {
      var n = de(e, "transform");
      n && n !== "none" && (r = n + " " + r);
    } while (!t && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(r);
}
function Ic(e, t, r) {
  if (e) {
    var n = e.getElementsByTagName(t), o = 0, i = n.length;
    if (r)
      for (; o < i; o++)
        r(n[o], o);
    return n;
  }
  return [];
}
function sn() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function it(e, t, r, n, o) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var i, a, u, l, s, f, d;
    if (e !== window && e.parentNode && e !== sn() ? (i = e.getBoundingClientRect(), a = i.top, u = i.left, l = i.bottom, s = i.right, f = i.height, d = i.width) : (a = 0, u = 0, l = window.innerHeight, s = window.innerWidth, f = window.innerHeight, d = window.innerWidth), (t || r) && e !== window && (o = o || e.parentNode, !wn))
      do
        if (o && o.getBoundingClientRect && (de(o, "transform") !== "none" || r && de(o, "position") !== "static")) {
          var m = o.getBoundingClientRect();
          a -= m.top + parseInt(de(o, "border-top-width")), u -= m.left + parseInt(de(o, "border-left-width")), l = a + i.height, s = u + i.width;
          break;
        }
      while (o = o.parentNode);
    if (n && e !== window) {
      var v = _r(o || e), h = v && v.a, p = v && v.d;
      v && (a /= p, u /= h, d /= h, f /= p, l = a + f, s = u + d);
    }
    return {
      top: a,
      left: u,
      bottom: l,
      right: s,
      width: d,
      height: f
    };
  }
}
function Rl(e, t, r) {
  for (var n = In(e, !0), o = it(e)[t]; n; ) {
    var i = it(n)[r], a = void 0;
    if (a = o >= i, !a) return n;
    if (n === sn()) break;
    n = In(n, !1);
  }
  return !1;
}
function Ar(e, t, r, n) {
  for (var o = 0, i = 0, a = e.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== pe.ghost && (n || a[i] !== pe.dragged) && on(a[i], r.draggable, e, !1)) {
      if (o === t)
        return a[i];
      o++;
    }
    i++;
  }
  return null;
}
function Es(e, t) {
  for (var r = e.lastElementChild; r && (r === pe.ghost || de(r, "display") === "none" || t && !fi(r, t)); )
    r = r.previousElementSibling;
  return r || null;
}
function Ut(e, t) {
  var r = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== pe.clone && (!t || fi(e, t)) && r++;
  return r;
}
function Tl(e) {
  var t = 0, r = 0, n = sn();
  if (e)
    do {
      var o = _r(e), i = o.a, a = o.d;
      t += e.scrollLeft * i, r += e.scrollTop * a;
    } while (e !== n && (e = e.parentNode));
  return [t, r];
}
function Tp(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === e[r][n]) return Number(r);
    }
  return -1;
}
function In(e, t) {
  if (!e || !e.getBoundingClientRect) return sn();
  var r = e, n = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var o = de(r);
      if (r.clientWidth < r.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return sn();
        if (n || t) return r;
        n = !0;
      }
    }
  while (r = r.parentNode);
  return sn();
}
function kp(e, t) {
  if (e && t)
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
function Li(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Qr;
function $c(e, t) {
  return function() {
    if (!Qr) {
      var r = arguments, n = this;
      r.length === 1 ? e.call(n, r[0]) : e.apply(n, r), Qr = setTimeout(function() {
        Qr = void 0;
      }, t);
    }
  };
}
function Pp() {
  clearTimeout(Qr), Qr = void 0;
}
function Nc(e, t, r) {
  e.scrollLeft += t, e.scrollTop += r;
}
function Mc(e) {
  var t = window.Polymer, r = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : r ? r(e).clone(!0)[0] : e.cloneNode(!0);
}
var jt = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ip() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(o) {
          if (!(de(o, "display") === "none" || o === pe.ghost)) {
            e.push({
              target: o,
              rect: it(o)
            });
            var i = un({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = _r(o, !0);
              a && (i.top -= a.f, i.left -= a.e);
            }
            o.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(n) {
      e.push(n);
    },
    removeAnimationState: function(n) {
      e.splice(Tp(e, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var i = !1, a = 0;
      e.forEach(function(u) {
        var l = 0, s = u.target, f = s.fromRect, d = it(s), m = s.prevFromRect, v = s.prevToRect, h = u.rect, p = _r(s, !0);
        p && (d.top -= p.f, d.left -= p.e), s.toRect = d, s.thisAnimationDuration && Li(m, d) && !Li(f, d) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - d.top) / (h.left - d.left) === (f.top - d.top) / (f.left - d.left) && (l = Np(h, m, v, o.options)), Li(d, f) || (s.prevFromRect = f, s.prevToRect = d, l || (l = o.options.animation), o.animate(s, h, d, l)), l && (i = !0, a = Math.max(a, l), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
          s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, s.prevToRect = null, s.thisAnimationDuration = null;
        }, l), s.thisAnimationDuration = l);
      }), clearTimeout(t), i ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), e = [];
    },
    animate: function(n, o, i, a) {
      if (a) {
        de(n, "transition", ""), de(n, "transform", "");
        var u = _r(this.el), l = u && u.a, s = u && u.d, f = (o.left - i.left) / (l || 1), d = (o.top - i.top) / (s || 1);
        n.animatingX = !!f, n.animatingY = !!d, de(n, "transform", "translate3d(" + f + "px," + d + "px,0)"), this.forRepaintDummy = $p(n), de(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), de(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          de(n, "transition", ""), de(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function $p(e) {
  return e.offsetWidth;
}
function Np(e, t, r, n) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) * n.animation;
}
var pr = [], Ui = {
  initializeByDefault: !0
}, fo = {
  mount: function(t) {
    for (var r in Ui)
      Ui.hasOwnProperty(r) && !(r in t) && (t[r] = Ui[r]);
    pr.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), pr.push(t);
  },
  pluginEvent: function(t, r, n) {
    var o = this;
    this.eventCanceled = !1, n.cancel = function() {
      o.eventCanceled = !0;
    };
    var i = t + "Global";
    pr.forEach(function(a) {
      r[a.pluginName] && (r[a.pluginName][i] && r[a.pluginName][i](un({
        sortable: r
      }, n)), r.options[a.pluginName] && r[a.pluginName][t] && r[a.pluginName][t](un({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(t, r, n, o) {
    pr.forEach(function(u) {
      var l = u.pluginName;
      if (!(!t.options[l] && !u.initializeByDefault)) {
        var s = new u(t, r, t.options);
        s.sortable = t, s.options = t.options, t[l] = s, gn(n, s.defaults);
      }
    });
    for (var i in t.options)
      if (t.options.hasOwnProperty(i)) {
        var a = this.modifyOption(t, i, t.options[i]);
        typeof a < "u" && (t.options[i] = a);
      }
  },
  getEventProperties: function(t, r) {
    var n = {};
    return pr.forEach(function(o) {
      typeof o.eventProperties == "function" && gn(n, o.eventProperties.call(r[o.pluginName], t));
    }), n;
  },
  modifyOption: function(t, r, n) {
    var o;
    return pr.forEach(function(i) {
      t[i.pluginName] && i.optionListeners && typeof i.optionListeners[r] == "function" && (o = i.optionListeners[r].call(t[i.pluginName], n));
    }), o;
  }
};
function Mp(e) {
  var t = e.sortable, r = e.rootEl, n = e.name, o = e.targetEl, i = e.cloneEl, a = e.toEl, u = e.fromEl, l = e.oldIndex, s = e.newIndex, f = e.oldDraggableIndex, d = e.newDraggableIndex, m = e.originalEvent, v = e.putSortable, h = e.extraEventProperties;
  if (t = t || r && r[jt], !!t) {
    var p, c = t.options, b = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !wn && !co ? p = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (p = document.createEvent("Event"), p.initEvent(n, !0, !0)), p.to = a || r, p.from = u || r, p.item = o || r, p.clone = i, p.oldIndex = l, p.newIndex = s, p.oldDraggableIndex = f, p.newDraggableIndex = d, p.originalEvent = m, p.pullMode = v ? v.lastPutMode : void 0;
    var y = un(un({}, h), fo.getEventProperties(n, t));
    for (var S in y)
      p[S] = y[S];
    r && r.dispatchEvent(p), c[b] && c[b].call(t, p);
  }
}
var Fp = ["evt"], Ot = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = n.evt, i = Ap(n, Fp);
  fo.pluginEvent.bind(pe)(t, r, un({
    dragEl: te,
    parentEl: ze,
    ghostEl: Se,
    rootEl: Le,
    nextEl: er,
    lastDownEl: Go,
    cloneEl: Xe,
    cloneHidden: kn,
    dragStarted: Wr,
    putSortable: ct,
    activeSortable: pe.active,
    originalEvent: o,
    oldIndex: br,
    oldDraggableIndex: Zr,
    newIndex: Mt,
    newDraggableIndex: Rn,
    hideGhostForTarget: qc,
    unhideGhostForTarget: Lc,
    cloneNowHidden: function() {
      kn = !0;
    },
    cloneNowShown: function() {
      kn = !1;
    },
    dispatchSortableEvent: function(u) {
      bt({
        sortable: r,
        name: u,
        originalEvent: o
      });
    }
  }, i));
};
function bt(e) {
  Mp(un({
    putSortable: ct,
    cloneEl: Xe,
    targetEl: te,
    rootEl: Le,
    oldIndex: br,
    oldDraggableIndex: Zr,
    newIndex: Mt,
    newDraggableIndex: Rn
  }, e));
}
var te, ze, Se, Le, er, Go, Xe, kn, br, Mt, Zr, Rn, Io, ct, yr = !1, di = !1, pi = [], Ln, Gt, Vi, Wi, kl, Pl, Wr, hr, eo, to = !1, $o = !1, Ko, mt, Hi = [], cs = !1, hi = [], _i = typeof document < "u", No = kc, Il = co || wn ? "cssFloat" : "float", jp = _i && !Dp && !kc && "draggable" in document.createElement("div"), Fc = (function() {
  if (_i) {
    if (wn)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
})(), jc = function(t, r) {
  var n = de(t), o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), i = Ar(t, 0, r), a = Ar(t, 1, r), u = i && de(i), l = a && de(a), s = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + it(i).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + it(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && u.float && u.float !== "none") {
    var d = u.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === d) ? "vertical" : "horizontal";
  }
  return i && (u.display === "block" || u.display === "flex" || u.display === "table" || u.display === "grid" || s >= o && n[Il] === "none" || a && n[Il] === "none" && s + f > o) ? "vertical" : "horizontal";
}, Bp = function(t, r, n) {
  var o = n ? t.left : t.top, i = n ? t.right : t.bottom, a = n ? t.width : t.height, u = n ? r.left : r.top, l = n ? r.right : r.bottom, s = n ? r.width : r.height;
  return o === u || i === l || o + a / 2 === u + s / 2;
}, qp = function(t, r) {
  var n;
  return pi.some(function(o) {
    var i = o[jt].options.emptyInsertThreshold;
    if (!(!i || Es(o))) {
      var a = it(o), u = t >= a.left - i && t <= a.right + i, l = r >= a.top - i && r <= a.bottom + i;
      if (u && l)
        return n = o;
    }
  }), n;
}, Bc = function(t) {
  function r(i, a) {
    return function(u, l, s, f) {
      var d = u.options.group.name && l.options.group.name && u.options.group.name === l.options.group.name;
      if (i == null && (a || d))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (a && i === "clone")
        return i;
      if (typeof i == "function")
        return r(i(u, l, s, f), a)(u, l, s, f);
      var m = (a ? u : l).options.group.name;
      return i === !0 || typeof i == "string" && i === m || i.join && i.indexOf(m) > -1;
    };
  }
  var n = {}, o = t.group;
  (!o || Ho(o) != "object") && (o = {
    name: o
  }), n.name = o.name, n.checkPull = r(o.pull, !0), n.checkPut = r(o.put), n.revertClone = o.revertClone, t.group = n;
}, qc = function() {
  !Fc && Se && de(Se, "display", "none");
}, Lc = function() {
  !Fc && Se && de(Se, "display", "");
};
_i && document.addEventListener("click", function(e) {
  if (di)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), di = !1, !1;
}, !0);
var Un = function(t) {
  if (te) {
    t = t.touches ? t.touches[0] : t;
    var r = qp(t.clientX, t.clientY);
    if (r) {
      var n = {};
      for (var o in t)
        t.hasOwnProperty(o) && (n[o] = t[o]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[jt]._onDragOver(n);
    }
  }
}, Lp = function(t) {
  te && te.parentNode[jt]._isOutsideThisEl(t.target);
};
function pe(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = gn({}, t), e[jt] = this;
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
      return jc(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, u) {
      a.setData("Text", u.textContent);
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
    supportPointer: pe.supportPointer !== !1 && "PointerEvent" in window && !Jr,
    emptyInsertThreshold: 5
  };
  fo.initializePlugins(this, e, r);
  for (var n in r)
    !(n in t) && (t[n] = r[n]);
  Bc(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : jp, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? $e(e, "pointerdown", this._onTapStart) : ($e(e, "mousedown", this._onTapStart), $e(e, "touchstart", this._onTapStart)), this.nativeDraggable && ($e(e, "dragover", this), $e(e, "dragenter", this)), pi.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), gn(this, Ip());
}
pe.prototype = /** @lends Sortable.prototype */
{
  constructor: pe,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (hr = null);
  },
  _getDirection: function(t, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, r, te) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var r = this, n = this.el, o = this.options, i = o.preventOnFilter, a = t.type, u = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (u || t).target, s = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, f = o.filter;
      if (Yp(n), !te && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !s.isContentEditable && !(!this.nativeDraggable && Jr && l && l.tagName.toUpperCase() === "SELECT") && (l = on(l, o.draggable, n, !1), !(l && l.animated) && Go !== l)) {
        if (br = Ut(l), Zr = Ut(l, o.draggable), typeof f == "function") {
          if (f.call(this, t, l, this)) {
            bt({
              sortable: r,
              rootEl: s,
              name: "filter",
              targetEl: l,
              toEl: n,
              fromEl: n
            }), Ot("filter", r, {
              evt: t
            }), i && t.cancelable && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(d) {
          if (d = on(s, d.trim(), n, !1), d)
            return bt({
              sortable: r,
              rootEl: d,
              name: "filter",
              targetEl: l,
              fromEl: n,
              toEl: n
            }), Ot("filter", r, {
              evt: t
            }), !0;
        }), f)) {
          i && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !on(s, o.handle, n, !1) || this._prepareDragStart(t, u, l);
      }
    }
  },
  _prepareDragStart: function(t, r, n) {
    var o = this, i = o.el, a = o.options, u = i.ownerDocument, l;
    if (n && !te && n.parentNode === i) {
      var s = it(n);
      if (Le = i, te = n, ze = te.parentNode, er = te.nextSibling, Go = n, Io = a.group, pe.dragged = te, Ln = {
        target: te,
        clientX: (r || t).clientX,
        clientY: (r || t).clientY
      }, kl = Ln.clientX - s.left, Pl = Ln.clientY - s.top, this._lastX = (r || t).clientX, this._lastY = (r || t).clientY, te.style["will-change"] = "all", l = function() {
        if (Ot("delayEnded", o, {
          evt: t
        }), pe.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Cl && o.nativeDraggable && (te.draggable = !0), o._triggerDragStart(t, r), bt({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), $t(te, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        Ic(te, f.trim(), Gi);
      }), $e(u, "dragover", Un), $e(u, "mousemove", Un), $e(u, "touchmove", Un), $e(u, "mouseup", o._onDrop), $e(u, "touchend", o._onDrop), $e(u, "touchcancel", o._onDrop), Cl && this.nativeDraggable && (this.options.touchStartThreshold = 4, te.draggable = !0), Ot("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || r) && (!this.nativeDraggable || !(co || wn))) {
        if (pe.eventCanceled) {
          this._onDrop();
          return;
        }
        $e(u, "mouseup", o._disableDelayedDrag), $e(u, "touchend", o._disableDelayedDrag), $e(u, "touchcancel", o._disableDelayedDrag), $e(u, "mousemove", o._delayedDragTouchMoveHandler), $e(u, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && $e(u, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(l, a.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var r = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    te && Gi(te), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    Pe(t, "mouseup", this._disableDelayedDrag), Pe(t, "touchend", this._disableDelayedDrag), Pe(t, "touchcancel", this._disableDelayedDrag), Pe(t, "mousemove", this._delayedDragTouchMoveHandler), Pe(t, "touchmove", this._delayedDragTouchMoveHandler), Pe(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, r) {
    r = r || t.pointerType == "touch" && t, !this.nativeDraggable || r ? this.options.supportPointer ? $e(document, "pointermove", this._onTouchMove) : r ? $e(document, "touchmove", this._onTouchMove) : $e(document, "mousemove", this._onTouchMove) : ($e(te, "dragend", this), $e(Le, "dragstart", this._onDragStart));
    try {
      document.selection ? zo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, r) {
    if (yr = !1, Le && te) {
      Ot("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && $e(document, "dragover", Lp);
      var n = this.options;
      !t && $t(te, n.dragClass, !1), $t(te, n.ghostClass, !0), pe.active = this, t && this._appendGhost(), bt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Gt) {
      this._lastX = Gt.clientX, this._lastY = Gt.clientY, qc();
      for (var t = document.elementFromPoint(Gt.clientX, Gt.clientY), r = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Gt.clientX, Gt.clientY), t !== r); )
        r = t;
      if (te.parentNode[jt]._isOutsideThisEl(t), r)
        do {
          if (r[jt]) {
            var n = void 0;
            if (n = r[jt]._onDragOver({
              clientX: Gt.clientX,
              clientY: Gt.clientY,
              target: t,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = r;
        } while (r = r.parentNode);
      Lc();
    }
  },
  _onTouchMove: function(t) {
    if (Ln) {
      var r = this.options, n = r.fallbackTolerance, o = r.fallbackOffset, i = t.touches ? t.touches[0] : t, a = Se && _r(Se, !0), u = Se && a && a.a, l = Se && a && a.d, s = No && mt && Tl(mt), f = (i.clientX - Ln.clientX + o.x) / (u || 1) + (s ? s[0] - Hi[0] : 0) / (u || 1), d = (i.clientY - Ln.clientY + o.y) / (l || 1) + (s ? s[1] - Hi[1] : 0) / (l || 1);
      if (!pe.active && !yr) {
        if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (Se) {
        a ? (a.e += f - (Vi || 0), a.f += d - (Wi || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: d
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        de(Se, "webkitTransform", m), de(Se, "mozTransform", m), de(Se, "msTransform", m), de(Se, "transform", m), Vi = f, Wi = d, Gt = i;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Se) {
      var t = this.options.fallbackOnBody ? document.body : Le, r = it(te, !0, No, !0, t), n = this.options;
      if (No) {
        for (mt = t; de(mt, "position") === "static" && de(mt, "transform") === "none" && mt !== document; )
          mt = mt.parentNode;
        mt !== document.body && mt !== document.documentElement ? (mt === document && (mt = sn()), r.top += mt.scrollTop, r.left += mt.scrollLeft) : mt = sn(), Hi = Tl(mt);
      }
      Se = te.cloneNode(!0), $t(Se, n.ghostClass, !1), $t(Se, n.fallbackClass, !0), $t(Se, n.dragClass, !0), de(Se, "transition", ""), de(Se, "transform", ""), de(Se, "box-sizing", "border-box"), de(Se, "margin", 0), de(Se, "top", r.top), de(Se, "left", r.left), de(Se, "width", r.width), de(Se, "height", r.height), de(Se, "opacity", "0.8"), de(Se, "position", No ? "absolute" : "fixed"), de(Se, "zIndex", "100000"), de(Se, "pointerEvents", "none"), pe.ghost = Se, t.appendChild(Se), de(Se, "transform-origin", kl / parseInt(Se.style.width) * 100 + "% " + Pl / parseInt(Se.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, r) {
    var n = this, o = t.dataTransfer, i = n.options;
    if (Ot("dragStart", this, {
      evt: t
    }), pe.eventCanceled) {
      this._onDrop();
      return;
    }
    Ot("setupClone", this), pe.eventCanceled || (Xe = Mc(te), Xe.draggable = !1, Xe.style["will-change"] = "", this._hideClone(), $t(Xe, this.options.chosenClass, !1), pe.clone = Xe), n.cloneId = zo(function() {
      Ot("clone", n), !pe.eventCanceled && (n.options.removeCloneOnHide || Le.insertBefore(Xe, te), n._hideClone(), bt({
        sortable: n,
        name: "clone"
      }));
    }), !r && $t(te, i.dragClass, !0), r ? (di = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (Pe(document, "mouseup", n._onDrop), Pe(document, "touchend", n._onDrop), Pe(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(n, o, te)), $e(document, "drop", n), de(te, "transform", "translateZ(0)")), yr = !0, n._dragStartId = zo(n._dragStarted.bind(n, r, t)), $e(document, "selectstart", n), Wr = !0, Jr && de(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var r = this.el, n = t.target, o, i, a, u = this.options, l = u.group, s = pe.active, f = Io === l, d = u.sort, m = ct || s, v, h = this, p = !1;
    if (cs) return;
    function c(M, re) {
      Ot(M, h, un({
        evt: t,
        isOwner: f,
        axis: v ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: i,
        canSort: d,
        fromSortable: m,
        target: n,
        completed: y,
        onMove: function(fe, xe) {
          return Mo(Le, r, te, o, fe, it(fe), t, xe);
        },
        changed: S
      }, re));
    }
    function b() {
      c("dragOverAnimationCapture"), h.captureAnimationState(), h !== m && m.captureAnimationState();
    }
    function y(M) {
      return c("dragOverCompleted", {
        insertion: M
      }), M && (f ? s._hideClone() : s._showClone(h), h !== m && ($t(te, ct ? ct.options.ghostClass : s.options.ghostClass, !1), $t(te, u.ghostClass, !0)), ct !== h && h !== pe.active ? ct = h : h === pe.active && ct && (ct = null), m === h && (h._ignoreWhileAnimating = n), h.animateAll(function() {
        c("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === te && !te.animated || n === r && !n.animated) && (hr = null), !u.dragoverBubble && !t.rootEl && n !== document && (te.parentNode[jt]._isOutsideThisEl(t.target), !M && Un(t)), !u.dragoverBubble && t.stopPropagation && t.stopPropagation(), p = !0;
    }
    function S() {
      Mt = Ut(te), Rn = Ut(te, u.draggable), bt({
        sortable: h,
        name: "change",
        toEl: r,
        newIndex: Mt,
        newDraggableIndex: Rn,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = on(n, u.draggable, r, !0), c("dragOver"), pe.eventCanceled) return p;
    if (te.contains(t.target) || n.animated && n.animatingX && n.animatingY || h._ignoreWhileAnimating === n)
      return y(!1);
    if (di = !1, s && !u.disabled && (f ? d || (a = ze !== Le) : ct === this || (this.lastPutMode = Io.checkPull(this, s, te, t)) && l.checkPut(this, s, te, t))) {
      if (v = this._getDirection(t, n) === "vertical", o = it(te), c("dragOverValid"), pe.eventCanceled) return p;
      if (a)
        return ze = Le, b(), this._hideClone(), c("revert"), pe.eventCanceled || (er ? Le.insertBefore(te, er) : Le.appendChild(te)), y(!0);
      var x = Es(r, u.draggable);
      if (!x || Hp(t, v, this) && !x.animated) {
        if (x === te)
          return y(!1);
        if (x && r === t.target && (n = x), n && (i = it(n)), Mo(Le, r, te, o, n, i, t, !!n) !== !1)
          return b(), r.appendChild(te), ze = r, S(), y(!0);
      } else if (x && Wp(t, v, this)) {
        var C = Ar(r, 0, u, !0);
        if (C === te)
          return y(!1);
        if (n = C, i = it(n), Mo(Le, r, te, o, n, i, t, !1) !== !1)
          return b(), r.insertBefore(te, C), ze = r, S(), y(!0);
      } else if (n.parentNode === r) {
        i = it(n);
        var O = 0, D, $ = te.parentNode !== r, j = !Bp(te.animated && te.toRect || o, n.animated && n.toRect || i, v), F = v ? "top" : "left", q = Rl(n, "top", "top") || Rl(te, "top", "top"), z = q ? q.scrollTop : void 0;
        hr !== n && (D = i[F], to = !1, $o = !j && u.invertSwap || $), O = Gp(t, n, i, v, j ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, $o, hr === n);
        var ue;
        if (O !== 0) {
          var H = Ut(te);
          do
            H -= O, ue = ze.children[H];
          while (ue && (de(ue, "display") === "none" || ue === Se));
        }
        if (O === 0 || ue === n)
          return y(!1);
        hr = n, eo = O;
        var W = n.nextElementSibling, L = !1;
        L = O === 1;
        var J = Mo(Le, r, te, o, n, i, t, L);
        if (J !== !1)
          return (J === 1 || J === -1) && (L = J === 1), cs = !0, setTimeout(Vp, 30), b(), L && !W ? r.appendChild(te) : n.parentNode.insertBefore(te, L ? W : n), q && Nc(q, 0, z - q.scrollTop), ze = te.parentNode, D !== void 0 && !$o && (Ko = Math.abs(D - it(n)[F])), S(), y(!0);
      }
      if (r.contains(te))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Pe(document, "mousemove", this._onTouchMove), Pe(document, "touchmove", this._onTouchMove), Pe(document, "pointermove", this._onTouchMove), Pe(document, "dragover", Un), Pe(document, "mousemove", Un), Pe(document, "touchmove", Un);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    Pe(t, "mouseup", this._onDrop), Pe(t, "touchend", this._onDrop), Pe(t, "pointerup", this._onDrop), Pe(t, "touchcancel", this._onDrop), Pe(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var r = this.el, n = this.options;
    if (Mt = Ut(te), Rn = Ut(te, n.draggable), Ot("drop", this, {
      evt: t
    }), ze = te && te.parentNode, Mt = Ut(te), Rn = Ut(te, n.draggable), pe.eventCanceled) {
      this._nulling();
      return;
    }
    yr = !1, $o = !1, to = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), fs(this.cloneId), fs(this._dragStartId), this.nativeDraggable && (Pe(document, "drop", this), Pe(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Jr && de(document.body, "user-select", ""), de(te, "transform", ""), t && (Wr && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), Se && Se.parentNode && Se.parentNode.removeChild(Se), (Le === ze || ct && ct.lastPutMode !== "clone") && Xe && Xe.parentNode && Xe.parentNode.removeChild(Xe), te && (this.nativeDraggable && Pe(te, "dragend", this), Gi(te), te.style["will-change"] = "", Wr && !yr && $t(te, ct ? ct.options.ghostClass : this.options.ghostClass, !1), $t(te, this.options.chosenClass, !1), bt({
      sortable: this,
      name: "unchoose",
      toEl: ze,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Le !== ze ? (Mt >= 0 && (bt({
      rootEl: ze,
      name: "add",
      toEl: ze,
      fromEl: Le,
      originalEvent: t
    }), bt({
      sortable: this,
      name: "remove",
      toEl: ze,
      originalEvent: t
    }), bt({
      rootEl: ze,
      name: "sort",
      toEl: ze,
      fromEl: Le,
      originalEvent: t
    }), bt({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), ct && ct.save()) : Mt !== br && Mt >= 0 && (bt({
      sortable: this,
      name: "update",
      toEl: ze,
      originalEvent: t
    }), bt({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), pe.active && ((Mt == null || Mt === -1) && (Mt = br, Rn = Zr), bt({
      sortable: this,
      name: "end",
      toEl: ze,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ot("nulling", this), Le = te = ze = Se = er = Xe = Go = kn = Ln = Gt = Wr = Mt = Rn = br = Zr = hr = eo = ct = Io = pe.dragged = pe.ghost = pe.clone = pe.active = null, hi.forEach(function(t) {
      t.checked = !0;
    }), hi.length = Vi = Wi = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        te && (this._onDragOver(t), Up(t));
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
    for (var t = [], r, n = this.el.children, o = 0, i = n.length, a = this.options; o < i; o++)
      r = n[o], on(r, a.draggable, this.el, !1) && t.push(r.getAttribute(a.dataIdAttr) || zp(r));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, r) {
    var n = {}, o = this.el;
    this.toArray().forEach(function(i, a) {
      var u = o.children[a];
      on(u, this.options.draggable, o, !1) && (n[i] = u);
    }, this), r && this.captureAnimationState(), t.forEach(function(i) {
      n[i] && (o.removeChild(n[i]), o.appendChild(n[i]));
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
    return on(t, r || this.options.draggable, this.el, !1);
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
    var o = fo.modifyOption(this, t, r);
    typeof o < "u" ? n[t] = o : n[t] = r, t === "group" && Bc(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ot("destroy", this);
    var t = this.el;
    t[jt] = null, Pe(t, "mousedown", this._onTapStart), Pe(t, "touchstart", this._onTapStart), Pe(t, "pointerdown", this._onTapStart), this.nativeDraggable && (Pe(t, "dragover", this), Pe(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), pi.splice(pi.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!kn) {
      if (Ot("hideClone", this), pe.eventCanceled) return;
      de(Xe, "display", "none"), this.options.removeCloneOnHide && Xe.parentNode && Xe.parentNode.removeChild(Xe), kn = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (kn) {
      if (Ot("showClone", this), pe.eventCanceled) return;
      te.parentNode == Le && !this.options.group.revertClone ? Le.insertBefore(Xe, te) : er ? Le.insertBefore(Xe, er) : Le.appendChild(Xe), this.options.group.revertClone && this.animate(te, Xe), de(Xe, "display", ""), kn = !1;
    }
  }
};
function Up(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Mo(e, t, r, n, o, i, a, u) {
  var l, s = e[jt], f = s.options.onMove, d;
  return window.CustomEvent && !wn && !co ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = e, l.dragged = r, l.draggedRect = n, l.related = o || t, l.relatedRect = i || it(t), l.willInsertAfter = u, l.originalEvent = a, e.dispatchEvent(l), f && (d = f.call(s, l, a)), d;
}
function Gi(e) {
  e.draggable = !1;
}
function Vp() {
  cs = !1;
}
function Wp(e, t, r) {
  var n = it(Ar(r.el, 0, r.options, !0)), o = 10;
  return t ? e.clientX < n.left - o || e.clientY < n.top && e.clientX < n.right : e.clientY < n.top - o || e.clientY < n.bottom && e.clientX < n.left;
}
function Hp(e, t, r) {
  var n = it(Es(r.el, r.options.draggable)), o = 10;
  return t ? e.clientX > n.right + o || e.clientX <= n.right && e.clientY > n.bottom && e.clientX >= n.left : e.clientX > n.right && e.clientY > n.top || e.clientX <= n.right && e.clientY > n.bottom + o;
}
function Gp(e, t, r, n, o, i, a, u) {
  var l = n ? e.clientY : e.clientX, s = n ? r.height : r.width, f = n ? r.top : r.left, d = n ? r.bottom : r.right, m = !1;
  if (!a) {
    if (u && Ko < s * o) {
      if (!to && (eo === 1 ? l > f + s * i / 2 : l < d - s * i / 2) && (to = !0), to)
        m = !0;
      else if (eo === 1 ? l < f + Ko : l > d - Ko)
        return -eo;
    } else if (l > f + s * (1 - o) / 2 && l < d - s * (1 - o) / 2)
      return Kp(t);
  }
  return m = m || a, m && (l < f + s * i / 2 || l > d - s * i / 2) ? l > f + s / 2 ? 1 : -1 : 0;
}
function Kp(e) {
  return Ut(te) < Ut(e) ? 1 : -1;
}
function zp(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, r = t.length, n = 0; r--; )
    n += t.charCodeAt(r);
  return n.toString(36);
}
function Yp(e) {
  hi.length = 0;
  for (var t = e.getElementsByTagName("input"), r = t.length; r--; ) {
    var n = t[r];
    n.checked && hi.push(n);
  }
}
function zo(e) {
  return setTimeout(e, 0);
}
function fs(e) {
  return clearTimeout(e);
}
_i && $e(document, "touchmove", function(e) {
  (pe.active || yr) && e.cancelable && e.preventDefault();
});
pe.utils = {
  on: $e,
  off: Pe,
  css: de,
  find: Ic,
  is: function(t, r) {
    return !!on(t, r, t, !1);
  },
  extend: kp,
  throttle: $c,
  closest: on,
  toggleClass: $t,
  clone: Mc,
  index: Ut,
  nextTick: zo,
  cancelNextTick: fs,
  detectDirection: jc,
  getChild: Ar
};
pe.get = function(e) {
  return e[jt];
};
pe.mount = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (pe.utils = un(un({}, pe.utils), n.utils)), fo.mount(n);
  });
};
pe.create = function(e, t) {
  return new pe(e, t);
};
pe.version = Cp;
var et = [], Hr, ds, ps = !1, Ki, zi, mi, Gr;
function Xp() {
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
      this.sortable.nativeDraggable ? $e(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? $e(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? $e(document, "touchmove", this._handleFallbackAutoScroll) : $e(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var n = r.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Pe(document, "dragover", this._handleAutoScroll) : (Pe(document, "pointermove", this._handleFallbackAutoScroll), Pe(document, "touchmove", this._handleFallbackAutoScroll), Pe(document, "mousemove", this._handleFallbackAutoScroll)), $l(), Yo(), Pp();
    },
    nulling: function() {
      mi = ds = Hr = ps = Gr = Ki = zi = null, et.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var o = this, i = (r.touches ? r.touches[0] : r).clientX, a = (r.touches ? r.touches[0] : r).clientY, u = document.elementFromPoint(i, a);
      if (mi = r, n || this.options.forceAutoScrollFallback || co || wn || Jr) {
        Yi(r, this.options, u, n);
        var l = In(u, !0);
        ps && (!Gr || i !== Ki || a !== zi) && (Gr && $l(), Gr = setInterval(function() {
          var s = In(document.elementFromPoint(i, a), !0);
          s !== l && (l = s, Yo()), Yi(r, o.options, s, n);
        }, 10), Ki = i, zi = a);
      } else {
        if (!this.options.bubbleScroll || In(u, !0) === sn()) {
          Yo();
          return;
        }
        Yi(r, this.options, In(u, !1), !1);
      }
    }
  }, gn(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Yo() {
  et.forEach(function(e) {
    clearInterval(e.pid);
  }), et = [];
}
function $l() {
  clearInterval(Gr);
}
var Yi = $c(function(e, t, r, n) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, u = t.scrollSpeed, l = sn(), s = !1, f;
    ds !== r && (ds = r, Yo(), Hr = t.scroll, f = t.scrollFn, Hr === !0 && (Hr = In(r, !0)));
    var d = 0, m = Hr;
    do {
      var v = m, h = it(v), p = h.top, c = h.bottom, b = h.left, y = h.right, S = h.width, x = h.height, C = void 0, O = void 0, D = v.scrollWidth, $ = v.scrollHeight, j = de(v), F = v.scrollLeft, q = v.scrollTop;
      v === l ? (C = S < D && (j.overflowX === "auto" || j.overflowX === "scroll" || j.overflowX === "visible"), O = x < $ && (j.overflowY === "auto" || j.overflowY === "scroll" || j.overflowY === "visible")) : (C = S < D && (j.overflowX === "auto" || j.overflowX === "scroll"), O = x < $ && (j.overflowY === "auto" || j.overflowY === "scroll"));
      var z = C && (Math.abs(y - o) <= a && F + S < D) - (Math.abs(b - o) <= a && !!F), ue = O && (Math.abs(c - i) <= a && q + x < $) - (Math.abs(p - i) <= a && !!q);
      if (!et[d])
        for (var H = 0; H <= d; H++)
          et[H] || (et[H] = {});
      (et[d].vx != z || et[d].vy != ue || et[d].el !== v) && (et[d].el = v, et[d].vx = z, et[d].vy = ue, clearInterval(et[d].pid), (z != 0 || ue != 0) && (s = !0, et[d].pid = setInterval((function() {
        n && this.layer === 0 && pe.active._onTouchMove(mi);
        var W = et[this.layer].vy ? et[this.layer].vy * u : 0, L = et[this.layer].vx ? et[this.layer].vx * u : 0;
        typeof f == "function" && f.call(pe.dragged.parentNode[jt], L, W, e, mi, et[this.layer].el) !== "continue" || Nc(et[this.layer].el, L, W);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && m !== l && (m = In(m, !1)));
    ps = s;
  }
}, 30), Uc = function(t) {
  var r = t.originalEvent, n = t.putSortable, o = t.dragEl, i = t.activeSortable, a = t.dispatchSortableEvent, u = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (r) {
    var s = n || i;
    u();
    var f = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, d = document.elementFromPoint(f.clientX, f.clientY);
    l(), s && !s.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: n
    }));
  }
};
function Os() {
}
Os.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var r = t.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var o = Ar(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(r, o) : this.sortable.el.appendChild(r), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Uc
};
gn(Os, {
  pluginName: "revertOnSpill"
});
function As() {
}
As.prototype = {
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable, o = n || this.sortable;
    o.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), o.animateAll();
  },
  drop: Uc
};
gn(As, {
  pluginName: "removeOnSpill"
});
pe.mount(new Xp());
pe.mount(As, Os);
function Jp(e, t) {
  return Object.values(e).indexOf(t);
}
function Qp(e, t, r, n) {
  if (!e)
    return [];
  const o = Object.values(e), i = t.length - n;
  return [...t].map((u, l) => l >= i ? o.length : o.indexOf(u));
}
function Zp(e) {
  return ["transition-group", "TransitionGroup"].includes(e);
}
function Nl(e) {
  if (!e || e.length !== 1)
    return !1;
  const [{ type: t }] = e;
  return t ? Zp(t.name) : !1;
}
function eh(e, t) {
  return t ? { ...t.props, ...t.attrs } : e;
}
const hs = ["Start", "Add", "Remove", "Update", "End"], ms = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], th = ["Move", ...hs, ...ms].map((e) => "on" + e);
let Xi = null;
const nh = We({
  name: "VueDraggableNext",
  inheritAttrs: !1,
  props: {
    options: Object,
    list: {
      type: Array,
      required: !1,
      default: null
    },
    noTransitionOnDrag: {
      type: Boolean,
      default: !1
    },
    clone: {
      type: Function,
      default: (e) => e
    },
    tag: {
      type: String,
      default: "div"
    },
    move: {
      type: Function,
      default: null
    },
    componentData: {
      type: Object,
      required: !1,
      default: null
    },
    component: {
      type: String,
      default: null
    },
    modelValue: {
      type: Array,
      required: !1,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "move",
    "change",
    ...hs.map((e) => e.toLowerCase()),
    ...ms.map((e) => e.toLowerCase())
  ],
  setup(e, { emit: t, slots: r, attrs: n }) {
    const o = be(!1), i = be(!1), a = be(0), u = be(0), l = be([]), s = be(null), f = be(null), d = Ee(() => e.list ? e.list : e.modelValue), m = yc();
    function v() {
      return e.component ? vc(e.component) : e.tag;
    }
    function h(G) {
      if (f.value)
        for (const Q in G) {
          const R = El(Q);
          th.indexOf(R) === -1 && f.value.option(R, G[Q]);
        }
    }
    function p() {
      return m?.proxy?.$el.children || [];
    }
    async function c() {
      await xr(), l.value = Qp(p(), m?.proxy?.$el.children || [], o.value, u.value);
    }
    function b(G) {
      const Q = Jp(p() || [], G);
      if (Q === -1)
        return null;
      const R = d.value ? d.value[Q] : null;
      return { index: Q, element: R };
    }
    function y(G) {
      xr(() => t("change", G));
    }
    function S(G) {
      if (e.list) {
        G(e.list);
        return;
      }
      const Q = [...e.modelValue || []];
      G(Q), t("update:modelValue", Q);
    }
    function x(...G) {
      S((R) => R.splice(...G));
    }
    function C(G, Q) {
      S((V) => V.splice(Q, 0, V.splice(G, 1)[0]));
    }
    function O(G) {
      const Q = l.value, R = Q.length;
      return G > R - 1 ? R : Q[G];
    }
    function D() {
      return r.default && r.default()[0]?.component?.proxy || null;
    }
    function $(G) {
      if (!e.noTransitionOnDrag || !o.value)
        return;
      const Q = p();
      Q[G] && (Q[G].data = null);
      const R = D();
      R && (R.children = [], R.kept = void 0);
    }
    function j(G) {
      c(), s.value = b(G.item), s.value && (G.item._underlying_vm_ = e.clone(s.value.element), Xi = G.item);
    }
    function F(G) {
      const Q = G.item._underlying_vm_;
      if (Q === void 0)
        return;
      qi(G.item);
      const R = O(G.newIndex);
      x(R, 0, Q), c(), y({ added: { element: Q, newIndex: R } });
    }
    function q(G) {
      if (Ol(m?.proxy?.$el, G.item, G.oldIndex), G.pullMode === "clone") {
        qi(G.clone);
        return;
      }
      if (!s.value)
        return;
      const Q = s.value.index;
      x(Q, 1), $(Q), y({ removed: { element: s.value.element, oldIndex: Q } });
    }
    function z(G) {
      qi(G.item), Ol(G.from, G.item, G.oldIndex);
      const Q = s.value?.index, R = O(G.newIndex);
      C(Q, R), y({
        moved: { element: s.value?.element, oldIndex: Q, newIndex: R }
      });
    }
    function ue(G, Q) {
      Object.prototype.hasOwnProperty.call(G, Q) && (G[Q] += a.value);
    }
    function H(G) {
      return G.__draggable_component__;
    }
    function W({ to: G, related: Q }) {
      const R = H(G);
      if (!R)
        return { component: R };
      const V = R.realList, le = { list: V, component: R };
      if (G !== Q && V && R.getUnderlyingVm) {
        const Oe = R.getUnderlyingVm(Q);
        if (Oe)
          return Object.assign(Oe, le);
      }
      return le;
    }
    function L(G, Q) {
      const R = [...Q.to.children].filter((_e) => _e.style.display !== "none");
      if (R.length === 0)
        return 0;
      const V = R.indexOf(Q.related), le = G.component.getVmIndex(V);
      return R.indexOf(Xi) !== -1 || !Q.willInsertAfter ? le : le + 1;
    }
    const J = () => {
      const G = {};
      hs.forEach((le) => {
        G["on" + le] = re(le);
      }), ms.forEach((le) => {
        G["on" + le] = M.bind(null, le);
      });
      const Q = Object.keys(n).reduce((le, Oe) => (le[El(Oe)] = n[Oe], le), {}), R = Object.assign({}, Q, G, {
        onMove: (le, Oe) => oe(le, Oe)
      });
      "draggable" in R || (R.draggable = ">*");
      const V = m?.proxy?.$el.nodeType === 1 ? m.proxy.$el : m?.proxy?.$el.parentElement || null;
      V && (f.value = new pe(V, R), V.__draggable_component__ = m?.proxy, c());
    };
    function M(G, Q) {
      xr(() => t(G.toLowerCase(), Q));
    }
    function re(G) {
      return (Q) => {
        if (d.value !== null) {
          const R = "onDrag" + G, V = xe[R];
          V && V(Q);
        }
        M(G, Q);
      };
    }
    function oe(G, Q) {
      const R = e.move;
      if (!R || !d.value)
        return !0;
      const V = W(G), le = s.value, Oe = L(V, G);
      le && Object.assign(le, { futureIndex: Oe });
      const _e = Object.assign({}, G, {
        relatedContext: V,
        draggedContext: le
      });
      return R(_e, Q);
    }
    function fe() {
      c(), Xi = null;
    }
    const xe = {
      onDragStart: j,
      onDragAdd: F,
      onDragRemove: q,
      onDragUpdate: z,
      onDragMove: oe,
      onDragEnd: fe
    };
    return Nn(() => {
      J();
    }), e.list !== null && e.modelValue !== null && Sp.error("list props are mutually exclusive! Please set one."), {
      getTag: v,
      realList: d,
      visibleIndexes: l,
      noneFunctionalComponentMode: i,
      headerOffset: a,
      footerOffset: u,
      transitionMode: o,
      computeIndexes: c,
      updateOptions: h,
      getChildrenNodes: p,
      getUnderlyingVm: b,
      emitChanges: y,
      alterList: S,
      spliceList: x,
      updatePosition: C,
      getVmIndex: O,
      getComponent: D,
      resetTransitionData: $,
      onDragStart: j,
      onDragAdd: F,
      onDragRemove: q,
      onDragUpdate: z,
      updateProperty: ue,
      onDragMove: oe,
      onDragEnd: fe,
      mounted: J,
      context: s,
      sortableInstance: f,
      getRelatedContextFromMoveEvent: W,
      getTargetedComponent: H,
      computeFutureIndex: L
      // ... other exposed functions as needed
    };
  },
  render() {
    const e = this.getTag(), t = eh(this.$attrs, this.componentData);
    if (typeof e == "string") {
      const n = this.$slots.default && typeof this.$slots.default == "function" ? this.$slots.default() : null;
      return n ? (this.transitionMode = Nl(n), Xr(e, t, n)) : Xr(e, t, []);
    }
    const r = this.$slots.default ? { default: this.$slots.default } : {};
    if (this.$slots.default) {
      const n = typeof this.$slots.default == "function" ? this.$slots.default() : null;
      this.transitionMode = Nl(n || []);
    }
    return Xr(e, t, r);
  }
}), rh = {
  key: 0,
  class: "kvc-table-operation"
}, oh = { key: 1 }, ih = { class: "kvc-table-header-label" }, ah = {
  key: 2,
  class: "kvc-table-operation"
}, sh = {
  key: 0,
  class: "kvc-table-operation"
}, lh = {
  class: "kvc-table-drag-handle",
  style: { cursor: "move" }
}, uh = { key: 1 }, ch = ["href"], fh = ["data-code"], dh = {
  key: 2,
  class: "kvc-table-operation"
}, ph = { class: "kvc-table-operation-buttons" }, hh = ["disabled", "onClick"], mh = ["onClick"], vh = { key: 1 }, yh = { key: 0 }, gh = ["href"], bh = ["data-code"], wh = {
  key: 1,
  class: "kvc-table-operation"
}, Sh = { class: "kvc-table-operation-buttons" }, xh = ["disabled", "onClick"], _h = ["onClick"], Eh = /* @__PURE__ */ We({
  __name: "table",
  props: {
    readOnly: { type: Boolean },
    rowData: {},
    columns: {},
    modelValue: {},
    hideOperations: { type: Boolean },
    recordUrl: {},
    draggable: { type: Boolean, default: !1 },
    animation: { default: 150 },
    minRows: { default: 1 },
    maxRows: {}
  },
  emits: ["update:modelValue", "add", "delete"],
  setup(e, { emit: t }) {
    const r = ws(), n = e, o = t, i = Ee(() => n.readOnly || n.hideOperations), a = () => {
      const v = {};
      for (const h in r)
        typeof r[h] == "function" && typeof h == "string" && !h.startsWith("column-") && (v[h] = "");
      return v;
    };
    Nn(() => {
      if (n.modelValue.length === 0 && n.minRows > 0) {
        const v = Array(n.minRows).fill(null).map(() => a());
        o("update:modelValue", v);
      }
    });
    const u = (v) => (n.rowData || []).reduce((h, p) => (h[`data-${p.key}`] = v[p.code]?.value || null, h), {}), l = (v) => {
      const h = [...n.modelValue];
      if (v >= 0) {
        if (n.maxRows && h.length >= n.maxRows)
          return;
        h.splice(v + 1, 0, a()), o("update:modelValue", h), o("add", h, v);
      }
    }, s = (v) => {
      const h = [...n.modelValue];
      if (v >= 0) {
        if (h.length <= n.minRows)
          return;
        h.splice(v, 1), o("update:modelValue", h), o("delete", h);
      }
    }, f = Ee(() => !n.maxRows || n.modelValue.length < n.maxRows), d = Ee(() => n.modelValue.length > n.minRows), m = Ee({
      get: () => n.modelValue,
      set: (v) => {
        o("update:modelValue", v);
      }
    });
    return (v, h) => (U(), K("table", {
      class: Ve(["kvc-table", { "kvc-table-readonly": e.readOnly }])
    }, [
      ne("thead", null, [
        ne("tr", null, [
          e.draggable && !i.value ? (U(), K("th", rh)) : Ce("", !0),
          e.recordUrl ? (U(), K("th", oh)) : Ce("", !0),
          (U(!0), K(yt, null, St(e.columns, (p, c) => (U(), K("th", {
            key: c,
            style: at(p?.width ? { width: p?.width } : void 0)
          }, [
            Dt(v.$slots, `column-${p?.code || p}`, {}, () => [
              ne("span", ih, Ke(p?.label ?? p), 1)
            ])
          ], 4))), 128)),
          i.value ? Ce("", !0) : (U(), K("th", ah))
        ])
      ]),
      e.draggable ? (U(), Bt(Ie(nh), {
        key: 0,
        modelValue: m.value,
        "onUpdate:modelValue": h[0] || (h[0] = (p) => m.value = p),
        tag: "tbody",
        handle: ".kvc-table-drag-handle",
        disabled: e.readOnly,
        animation: e.animation
      }, {
        default: li(() => [
          (U(!0), K(yt, null, St(m.value, (p, c) => (U(), K("tr", cl({
            key: "row-" + c
          }, { ref_for: !0 }, u(p)), [
            e.draggable && !i.value ? (U(), K("td", sh, [
              ne("div", lh, [
                Ge(Ie(Je), {
                  icon: "mdi:drag",
                  width: "14"
                })
              ])
            ])) : Ce("", !0),
            e.recordUrl ? (U(), K("td", uh, [
              p.$id ? (U(), K("a", {
                key: 0,
                href: e.recordUrl + p.$id.value,
                class: "kvc-link",
                target: "_blank",
                rel: "noopener noreferrer",
                style: at(e.readOnly ? null : { display: "inline-block", margin: "10px 0" })
              }, [
                Ge(Ie(Je), {
                  icon: "tdesign:file-filled",
                  width: "16"
                })
              ], 12, ch)) : Ce("", !0)
            ])) : Ce("", !0),
            (U(!0), K(yt, null, St(e.columns, (b, y) => (U(), K("td", {
              key: "col-" + y,
              "data-code": b?.code || b,
              style: at(b?.width ? { width: b?.width } : void 0)
            }, [
              Dt(v.$slots, b?.code || b, {
                index: c,
                row: p,
                width: b?.width,
                column: b?.code || b,
                value: p[b?.code || b]
              })
            ], 12, fh))), 128)),
            i.value ? Ce("", !0) : (U(), K("td", dh, [
              ne("div", ph, [
                ne("button", {
                  type: "button",
                  class: "kvc-table-btn-plus",
                  disabled: !f.value,
                  onClick: (b) => l(c)
                }, [
                  Ge(Ie(Je), {
                    icon: "mdi:plus",
                    width: "14"
                  })
                ], 8, hh),
                d.value ? (U(), K("button", {
                  key: 0,
                  type: "button",
                  class: "kvc-table-btn-minus",
                  onClick: (b) => s(c)
                }, [
                  Ge(Ie(Je), {
                    icon: "mdi:minus",
                    width: "14"
                  })
                ], 8, mh)) : Ce("", !0)
              ])
            ]))
          ], 16))), 128))
        ]),
        _: 3
      }, 8, ["modelValue", "disabled", "animation"])) : (U(), K("tbody", vh, [
        (U(!0), K(yt, null, St(e.modelValue, (p, c) => (U(), K("tr", cl({
          key: "row-" + c
        }, { ref_for: !0 }, u(p)), [
          e.recordUrl ? (U(), K("td", yh, [
            p.$id ? (U(), K("a", {
              key: 0,
              href: e.recordUrl + p.$id.value,
              class: "kvc-link",
              target: "_blank",
              rel: "noopener noreferrer",
              style: at(e.readOnly ? null : { display: "inline-block", margin: "10px 0" })
            }, [
              Ge(Ie(Je), {
                icon: "tdesign:file-filled",
                width: "16"
              })
            ], 12, gh)) : Ce("", !0)
          ])) : Ce("", !0),
          (U(!0), K(yt, null, St(e.columns, (b, y) => (U(), K("td", {
            key: "col-" + y,
            "data-code": b?.code || b,
            style: at(b?.width ? { width: b?.width } : void 0)
          }, [
            Dt(v.$slots, b?.code || b, {
              index: c,
              row: p,
              width: b?.width,
              column: b?.code || b,
              value: p[b?.code || b]
            })
          ], 12, bh))), 128)),
          i.value ? Ce("", !0) : (U(), K("td", wh, [
            ne("div", Sh, [
              ne("button", {
                type: "button",
                class: "kvc-table-btn-plus",
                disabled: !f.value,
                onClick: (b) => l(c)
              }, [
                Ge(Ie(Je), {
                  icon: "mdi:plus",
                  width: "14"
                })
              ], 8, xh),
              d.value ? (U(), K("button", {
                key: 0,
                type: "button",
                class: "kvc-table-btn-minus",
                onClick: (b) => s(c)
              }, [
                Ge(Ie(Je), {
                  icon: "mdi:minus",
                  width: "14"
                })
              ], 8, _h)) : Ce("", !0)
            ])
          ]))
        ], 16))), 128))
      ]))
    ], 2));
  }
});
function Vc(e, t) {
  return Yf() ? (Xf(e, t), !0) : !1;
}
const Cs = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Oh = Object.prototype.toString, Ah = (e) => Oh.call(e) === "[object Object]", Fo = () => {
};
function Ji(e) {
  return Array.isArray(e) ? e : [e];
}
function Ch(e) {
  return yc();
}
function Dh(e, t = !0, r) {
  Ch() ? Nn(e, r) : t ? e() : xr(e);
}
function Rh(e, t, r) {
  return Rr(e, t, {
    ...r,
    immediate: !0
  });
}
const Wc = Cs ? window : void 0, Th = Cs ? window.document : void 0;
function wr(e) {
  var t;
  const r = mn(e);
  return (t = r?.$el) !== null && t !== void 0 ? t : r;
}
function nr(...e) {
  const t = [], r = () => {
    t.forEach((u) => u()), t.length = 0;
  }, n = (u, l, s, f) => (u.addEventListener(l, s, f), () => u.removeEventListener(l, s, f)), o = Ee(() => {
    const u = Ji(mn(e[0])).filter((l) => l != null);
    return u.every((l) => typeof l != "string") ? u : void 0;
  }), i = Rh(() => {
    var u, l;
    return [
      (u = (l = o.value) === null || l === void 0 ? void 0 : l.map((s) => wr(s))) !== null && u !== void 0 ? u : [Wc].filter((s) => s != null),
      Ji(mn(o.value ? e[1] : e[0])),
      Ji(Ie(o.value ? e[2] : e[1])),
      mn(o.value ? e[3] : e[2])
    ];
  }, ([u, l, s, f]) => {
    if (r(), !u?.length || !l?.length || !s?.length) return;
    const d = Ah(f) ? { ...f } : f;
    t.push(...u.flatMap((m) => l.flatMap((v) => s.map((h) => n(m, v, h, d)))));
  }, { flush: "post" }), a = () => {
    i(), r();
  };
  return Vc(r), a;
}
function Cr(e, t, r = {}) {
  const { window: n = Wc, ignore: o = [], capture: i = !0, detectIframe: a = !1, controls: u = !1 } = r;
  if (!n) return u ? {
    stop: Fo,
    cancel: Fo,
    trigger: Fo
  } : Fo;
  let l = !0;
  const s = (c) => mn(o).some((b) => {
    if (typeof b == "string") return Array.from(n.document.querySelectorAll(b)).some((y) => y === c.target || c.composedPath().includes(y));
    {
      const y = wr(b);
      return y && (c.target === y || c.composedPath().includes(y));
    }
  });
  function f(c) {
    const b = mn(c);
    return b && b.$.subTree.shapeFlag === 16;
  }
  function d(c, b) {
    const y = mn(c), S = y.$.subTree && y.$.subTree.children;
    return S == null || !Array.isArray(S) ? !1 : S.some((x) => x.el === b.target || b.composedPath().includes(x.el));
  }
  const m = (c) => {
    const b = wr(e);
    if (c.target != null && !(!(b instanceof Element) && f(e) && d(e, c)) && !(!b || b === c.target || c.composedPath().includes(b))) {
      if ("detail" in c && c.detail === 0 && (l = !s(c)), !l) {
        l = !0;
        return;
      }
      t(c);
    }
  };
  let v = !1;
  const h = [
    nr(n, "click", (c) => {
      v || (v = !0, setTimeout(() => {
        v = !1;
      }, 0), m(c));
    }, {
      passive: !0,
      capture: i
    }),
    nr(n, "pointerdown", (c) => {
      const b = wr(e);
      l = !s(c) && !!(b && !c.composedPath().includes(b));
    }, { passive: !0 }),
    a && nr(n, "blur", (c) => {
      setTimeout(() => {
        var b;
        const y = wr(e);
        ((b = n.document.activeElement) === null || b === void 0 ? void 0 : b.tagName) === "IFRAME" && !y?.contains(n.document.activeElement) && t(c);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), p = () => h.forEach((c) => c());
  return u ? {
    stop: p,
    cancel: () => {
      l = !1;
    },
    trigger: (c) => {
      l = !0, m(c), l = !1;
    }
  } : p;
}
function kh(e, t = {}) {
  const r = is(!1), n = is(null);
  let o = 0, i = !0;
  if (Cs) {
    var a, u;
    const l = typeof t == "function" ? { onDrop: t } : t, s = (a = l.multiple) !== null && a !== void 0 ? a : !0, f = (u = l.preventDefaultForUnhandled) !== null && u !== void 0 ? u : !1, d = (c) => {
      var b, y;
      const S = Array.from((b = (y = c.dataTransfer) === null || y === void 0 ? void 0 : y.files) !== null && b !== void 0 ? b : []);
      return S.length === 0 ? null : s ? S : [S[0]];
    }, m = (c) => {
      const b = Ie(l.dataTypes);
      return typeof b == "function" ? b(c) : b?.length ? c.length === 0 ? !1 : c.every((y) => b.some((S) => y.includes(S))) : !0;
    }, v = (c) => {
      const b = m(Array.from(c ?? []).map((S) => S.type)), y = s || c.length <= 1;
      return b && y;
    }, h = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !("chrome" in window), p = (c, b) => {
      var y, S;
      const x = (y = c.dataTransfer) === null || y === void 0 ? void 0 : y.items;
      if (i = (S = x && v(x)) !== null && S !== void 0 ? S : !1, f && c.preventDefault(), !h() && !i) {
        c.dataTransfer && (c.dataTransfer.dropEffect = "none");
        return;
      }
      c.preventDefault(), c.dataTransfer && (c.dataTransfer.dropEffect = "copy");
      const C = d(c);
      switch (b) {
        case "enter":
          var O;
          o += 1, r.value = !0, (O = l.onEnter) === null || O === void 0 || O.call(l, null, c);
          break;
        case "over":
          var D;
          (D = l.onOver) === null || D === void 0 || D.call(l, null, c);
          break;
        case "leave":
          var $;
          o -= 1, o === 0 && (r.value = !1), ($ = l.onLeave) === null || $ === void 0 || $.call(l, null, c);
          break;
        case "drop":
          if (o = 0, r.value = !1, i) {
            var j;
            n.value = C, (j = l.onDrop) === null || j === void 0 || j.call(l, C, c);
          }
          break;
      }
    };
    nr(e, "dragenter", (c) => p(c, "enter")), nr(e, "dragover", (c) => p(c, "over")), nr(e, "dragleave", (c) => p(c, "leave")), nr(e, "drop", (c) => p(c, "drop"));
  }
  return {
    files: n,
    isOverDropZone: r
  };
}
const Ph = ["onClick", "onMouseover"], Ih = { class: "kvc-select-list-item-icon-space" }, $h = { class: "kvc-select-list-item-text" }, lo = /* @__PURE__ */ We({
  __name: "SelectList",
  props: {
    items: { default: () => [] },
    modelValue: {},
    value: {},
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    height: {},
    maxHeight: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = be(null), i = /* @__PURE__ */ new Map(), a = be(null), u = Ee(
      () => typeof r.height == "string" ? r.height : `${r.height}px`
    ), l = Ee(
      () => typeof r.maxHeight == "string" ? r.maxHeight : `${r.maxHeight}px`
    ), s = (v) => {
      const h = i.get(v);
      if (o.value && h) {
        const p = o.value.offsetHeight, c = h.offsetTop, b = h.offsetHeight, y = c - p / 2 + b / 2;
        o.value.scrollTo({ top: y }), a.value = v;
      }
    };
    Nn(() => s(r.modelValue));
    const f = (v) => {
      n("update:modelValue", v), n("change", v);
    }, d = (v) => typeof v == "object" && v !== null ? v[r.valueKey ?? "value"] ?? v : v, m = (v) => typeof v == "object" && v !== null ? v[r.labelKey ?? "label"] ?? v : v;
    return (v, h) => (U(), K("ul", {
      ref_key: "listWrapRef",
      ref: o,
      class: "kvc-select-list",
      style: at({ height: u.value, maxHeight: l.value })
    }, [
      (U(!0), K(yt, null, St(e.items, (p, c) => (U(), K("li", {
        key: c,
        ref_for: !0,
        ref: (b) => Ie(i).set(d(p), b),
        class: Ve(["kvc-select-list-item", {
          "kvc-select-list-item-selected": d(p) === e.modelValue
        }]),
        onClick: (b) => f(d(p)),
        onMouseover: (b) => a.value = d(p)
      }, [
        ne("span", Ih, [
          d(p) === e.modelValue ? (U(), Bt(Ie(Je), {
            key: 0,
            icon: "mdi:check-bold",
            width: "15"
          })) : Ce("", !0)
        ]),
        ne("span", $h, Ke(m(p)), 1)
      ], 42, Ph))), 128))
    ], 4));
  }
}), Nh = ["innerHTML"], Mh = ["disabled"], Fh = { class: "kvc-dropdown-label" }, jh = /* @__PURE__ */ We({
  __name: "dropdown",
  props: {
    width: { default: 100 },
    nonstyled: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    items: { default: () => [] },
    itemLabel: { default: "label" },
    itemValue: { default: "value" },
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = Ee({
      get: () => r.modelValue ?? "",
      set: (v) => {
        n("update:modelValue", v), n("change", v);
      }
    }), i = be(!1), a = be(null), u = be(null), l = be(null);
    Cr(l, () => {
      i.value = !1;
    });
    const s = (v) => typeof v == "number" || !isNaN(Number(v)), f = Ee(() => r.width ? s(r.width) ? `${r.width}px` : r.width : "fit-content"), d = Ee(() => {
      const v = r.itemValue ?? "value", h = r.itemLabel ?? "label", p = m.value.find((c) => typeof c == "object" && c[v] === r.modelValue);
      return p ? p[h] : "";
    }), m = Ee(() => {
      const v = r.items.map((h) => typeof h == "object" && h !== null ? JSON.parse(JSON.stringify(h)) : {
        [r.itemLabel]: h,
        [r.itemValue]: h
      });
      return [
        {
          [r.itemLabel]: "---",
          [r.itemValue]: ""
        },
        ...v
      ];
    });
    return (v, h) => e.readOnly ? (U(), K("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
      style: at({ width: f.value }),
      innerHTML: e.modelValue
    }, null, 14, Nh)) : (U(), K("div", {
      key: 1,
      class: "kvc-dropdown",
      ref_key: "dropdownRef",
      ref: l
    }, [
      ne("button", {
        ref_key: "buttonRef",
        ref: a,
        type: "button",
        class: "kvc-dropdown-button",
        disabled: e.disabled,
        style: at({ width: f.value }),
        onClick: h[0] || (h[0] = (p) => i.value = !i.value)
      }, [
        ne("span", Fh, Ke(d.value), 1),
        Ge(Ie(Je), {
          icon: "mdi-light:chevron-down",
          width: "24",
          style: { "min-width": "24px" }
        })
      ], 12, Mh),
      e.readOnly || e.disabled ? Ce("", !0) : fn((U(), Bt(lo, {
        key: 0,
        modelValue: o.value,
        "onUpdate:modelValue": h[1] || (h[1] = (p) => o.value = p),
        ref_key: "selectListRef",
        ref: u,
        items: m.value,
        labelKey: e.itemLabel,
        valueKey: e.itemValue,
        onChange: h[2] || (h[2] = (p) => i.value = !1)
      }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
        [Tr, i.value]
      ])
    ], 512));
  }
}), Bh = ["innerHTML"], qh = {
  key: 1,
  class: "kvc-dropdown"
}, Lh = ["disabled"], Uh = { class: "kvc-dropdown-label" }, Vh = { class: "kvc-autocomplete-input-wrapper" }, Wh = ["value", "disabled", "placeholder"], Hh = { class: "kvc-autocomplete-icons" }, Gh = {
  key: 1,
  class: "kvc-autocomplete-no-results"
}, Kh = /* @__PURE__ */ We({
  __name: "autocomplete",
  props: {
    width: { default: 150 },
    nonstyled: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    items: { default: () => [] },
    itemLabel: { default: "label" },
    itemValue: { default: "value" },
    itemDisabled: { default: "disabled" },
    modelValue: {},
    clearable: { type: Boolean, default: !0 },
    placeholder: { default: "" }
  },
  emits: ["update:modelValue", "change", "input"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = Ee({
      get: () => r.modelValue ?? "",
      set: (S) => {
        n("update:modelValue", S), n("change", S);
      }
    }), i = be(""), a = be(!1), u = be(null), l = be(null), s = be(null);
    Cr(s, () => {
      a.value = !1;
    });
    const f = (S) => typeof S == "number" || !isNaN(Number(S)), d = Ee(() => r.width ? f(r.width) ? `${r.width}px` : r.width : "fit-content"), m = Ee(() => r.items.map((x) => typeof x == "object" && x !== null ? JSON.parse(JSON.stringify(x)) : {
      [r.itemLabel]: x,
      [r.itemValue]: x
    })), v = Ee(() => {
      const S = r.itemValue ?? "value", x = r.itemLabel ?? "label", C = m.value.find((O) => typeof O == "object" && O[S] === r.modelValue);
      return C ? C[x] : r.modelValue || "";
    }), h = Ee(() => {
      if (!i.value)
        return m.value;
      const S = r.itemLabel ?? "label", x = i.value.toString().toLowerCase();
      return m.value.filter((C) => (C[S]?.toString().toLowerCase() || "").includes(x));
    }), p = () => {
      a.value = !0, i.value = "";
    }, c = (S) => {
      const x = S.target;
      i.value = x.value, a.value = !0, n("input", x.value);
    }, b = (S) => {
      o.value = S, i.value = "", a.value = !1;
    }, y = () => {
      o.value = "", i.value = "", a.value = !1;
    };
    return Rr(() => r.modelValue, () => {
      i.value = "";
    }), (S, x) => e.readOnly ? (U(), K("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
      style: at({ width: d.value }),
      innerHTML: e.modelValue
    }, null, 14, Bh)) : e.disabled ? (U(), K("div", qh, [
      ne("button", {
        ref: "buttonRef",
        type: "button",
        class: "kvc-dropdown-button",
        disabled: e.disabled,
        style: at({ width: d.value })
      }, [
        ne("span", Uh, Ke(v.value), 1),
        Ge(Ie(Je), {
          icon: "mdi-light:chevron-down",
          width: "24",
          style: { "min-width": "24px" }
        })
      ], 12, Lh)
    ])) : (U(), K("div", {
      key: 2,
      class: "kvc-autocomplete",
      ref_key: "autocompleteRef",
      ref: s
    }, [
      ne("div", Vh, [
        ne("input", {
          ref_key: "inputRef",
          ref: u,
          type: "text",
          class: "kvc-autocomplete-input",
          value: i.value || v.value,
          disabled: e.disabled,
          placeholder: e.placeholder,
          style: at({ width: d.value }),
          onFocus: p,
          onInput: c
        }, null, 44, Wh),
        ne("div", Hh, [
          e.clearable && o.value && !e.disabled ? (U(), K("button", {
            key: 0,
            type: "button",
            class: "kvc-autocomplete-clear",
            onClick: y
          }, [
            Ge(Ie(Je), {
              icon: "mdi:close",
              width: "18"
            })
          ])) : Ce("", !0),
          Ge(Ie(Je), {
            icon: "mdi-light:chevron-down",
            width: "24",
            class: Ve(["kvc-autocomplete-arrow", { "is-active": a.value }])
          }, null, 8, ["class"])
        ])
      ]),
      e.readOnly || e.disabled ? Ce("", !0) : fn((U(), Bt(lo, {
        key: 0,
        modelValue: o.value,
        "onUpdate:modelValue": x[0] || (x[0] = (C) => o.value = C),
        ref_key: "selectListRef",
        ref: l,
        items: h.value,
        labelKey: e.itemLabel,
        valueKey: e.itemValue,
        onChange: b
      }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
        [Tr, a.value && h.value.length > 0]
      ]),
      a.value && h.value.length === 0 && i.value ? (U(), K("div", Gh, " 該当する項目がありません ")) : Ce("", !0)
    ], 512));
  }
}), zh = ["innerHTML"], Yh = ["onClick"], Xh = { class: "kvc-multi-select-item-text" }, Jh = /* @__PURE__ */ We({
  __name: "multi-select",
  props: {
    modelValue: { default: () => [] },
    items: { default: () => [] },
    itemLabel: { default: "label" },
    itemValue: { default: "value" },
    nonstyled: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    rows: { default: 5 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = t, n = e, o = be(null), i = /* @__PURE__ */ new Map(), a = Ee(() => `calc(12px + ${n.rows * 22}px + ${n.rows * 2}px)`), u = (m) => {
      if (n.readOnly || n.disabled) return;
      const v = [...n.modelValue], h = v.indexOf(m);
      h > -1 ? v.splice(h, 1) : v.push(m), r("update:modelValue", v), r("change", v);
    }, l = (m) => typeof m == "object" && m !== null ? m[n.itemValue] ?? m.value ?? m : m, s = (m) => typeof m == "object" && m !== null ? m[n.itemLabel] ?? m.label ?? m : m, f = (m) => {
      const v = l(m);
      return n.modelValue.includes(v);
    }, d = Ee(() => n.items.map((v) => {
      let h = v;
      return typeof v == "object" && v !== null ? h = JSON.parse(JSON.stringify(v)) : h = {
        [n.itemLabel]: v,
        [n.itemValue]: v
      }, n.disabled && (h.disabled = !0), h;
    }));
    return (m, v) => e.readOnly ? (U(), K("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
      innerHTML: e.modelValue.join(", ")
    }, null, 10, zh)) : (U(), K("ul", {
      key: 1,
      ref_key: "listWrapRef",
      ref: o,
      class: "kvc-multi-select-list",
      style: at({ maxHeight: a.value })
    }, [
      (U(!0), K(yt, null, St(d.value, (h, p) => (U(), K("li", {
        key: p,
        ref_for: !0,
        ref: (c) => Ie(i).set(l(h), c),
        class: Ve(["kvc-multi-select-item", {
          "kvc-multi-select-item-selected": f(h),
          "kvc-multi-select-item-disabled": h?.disabled === !0
        }]),
        onClick: (c) => h?.disabled === !0 ? null : u(l(h))
      }, [
        f(h) ? (U(), Bt(Ie(Je), {
          key: 0,
          icon: "mdi:check-bold",
          width: "14",
          class: "kvc-multi-select-item-icon"
        })) : Ce("", !0),
        ne("span", Xh, Ke(s(h)), 1)
      ], 10, Yh))), 128))
    ], 4));
  }
}), Qh = /* @__PURE__ */ We({
  __name: "button",
  props: {
    small: { type: Boolean, default: !1 },
    color: {}
  },
  setup(e) {
    return (t, r) => (U(), K("button", {
      type: "button",
      class: Ve(["kvc-button", {
        "kvc-button-sm": e.small,
        "kvc-button-normal": e.color === "normal",
        "kvc-button-success": e.color === "success",
        "kvc-button-save": e.color === "save",
        "kvc-button-error": e.color === "error"
      }])
    }, [
      Dt(t.$slots, "default")
    ], 2));
  }
}), Zh = { class: "kvc-field-label" }, em = {
  key: 0,
  class: "kvc-field-required"
}, tm = { class: "kvc-field-input" }, nm = {
  key: 0,
  class: "kvc-field-prefix"
}, rm = {
  key: 1,
  class: "kvc-field-suffix"
}, om = /* @__PURE__ */ We({
  __name: "field",
  props: {
    required: { type: Boolean },
    width: {},
    errorMessage: {},
    successMessage: {}
  },
  setup(e) {
    const t = e, r = ws(), n = (i) => typeof i == "number" || !isNaN(Number(i)), o = Ee(() => t.width ? n(t.width) ? `${t.width}px` : t.width : "fit-content");
    return (i, a) => (U(), K("div", {
      style: at({ width: o.value }),
      class: "kvc-field"
    }, [
      ne("label", Zh, [
        Dt(i.$slots, "label"),
        e.required ? (U(), K("span", em)) : Ce("", !0)
      ]),
      ne("div", tm, [
        Ie(r).prefix?.() ? (U(), K("div", nm, [
          Dt(i.$slots, "prefix")
        ])) : Ce("", !0),
        Dt(i.$slots, "default"),
        Ie(r).suffix?.() ? (U(), K("div", rm, [
          Dt(i.$slots, "suffix")
        ])) : Ce("", !0)
      ]),
      e.errorMessage || e.successMessage ? (U(), K("div", {
        key: 0,
        class: Ve({
          "kvc-field-message-error": e.errorMessage,
          "kvc-field-message-success": e.successMessage
        })
      }, Ke(e.errorMessage || e.successMessage), 3)) : Ce("", !0)
    ], 4));
  }
}), im = { class: "kvc-group-header" }, am = { class: "kvc-group-label" }, sm = { class: "kvc-group-content" }, lm = /* @__PURE__ */ We({
  __name: "group",
  props: {
    label: { default: "グループ" },
    open: { type: Boolean, default: !0 },
    collapsible: { type: Boolean, default: !0 },
    width: { default: 400 }
  },
  setup(e) {
    const t = e, r = be(t.open), n = (u) => typeof u == "number" || !isNaN(Number(u)), o = Ee(() => t.width ? n(t.width) ? `${t.width}px` : t.width : "400px"), i = () => {
      t.collapsible && (r.value = !r.value);
    }, a = Ee(() => r.value ? "0deg" : "-90deg");
    return (u, l) => (U(), K("div", {
      class: Ve(["kvc-group", { "kvc-group-closed": !r.value }]),
      style: at({ width: o.value })
    }, [
      ne("div", im, [
        ne("button", {
          class: Ve(["kvc-group-button", { "kvc-group-button-clickable": e.collapsible }]),
          onClick: i
        }, [
          e.collapsible ? (U(), Bt(Ie(Je), {
            key: 0,
            icon: "mdi-light:chevron-down",
            width: "28",
            class: "kvc-group-icon",
            style: at({ transform: `rotate(${a.value})` })
          }, null, 8, ["style"])) : Ce("", !0),
          ne("span", am, Ke(e.label), 1)
        ], 2)
      ]),
      fn(ne("div", sm, [
        Dt(u.$slots, "default")
      ], 512), [
        [Tr, r.value]
      ])
    ], 6));
  }
}), um = ["innerHTML"], cm = ["disabled", "value"], fm = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, dm = ["fill"], pm = /* @__PURE__ */ We({
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
    const r = e, n = t, o = Ee({
      get: () => r.modelValue ?? "",
      set: (f) => {
        n("update:modelValue", f), n("change", f);
      }
    }), i = r.itemValue ?? "value", a = r.itemLabel ?? "label", u = (f) => f?.disabled ? "#d8d8d8" : r.modelValue == (f?.[i] ?? f) ? "#3498db" : "#d8d8d8", l = (f) => typeof f == "object" && f !== null ? f[i] ?? f : f, s = (f) => typeof f == "object" && f !== null ? f[a] ?? f : f;
    return (f, d) => e.readOnly ? (U(), K("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
      innerHTML: e.modelValue
    }, null, 10, um)) : (U(), K("div", {
      key: 1,
      class: Ve(["kvc-radio-group", { "kvc-radio-group-column": e.column }])
    }, [
      (U(!0), K(yt, null, St(e.items, (m, v) => (U(), K("label", {
        key: v,
        class: "kvc-radio-item"
      }, [
        fn(ne("input", {
          type: "radio",
          "onUpdate:modelValue": d[0] || (d[0] = (h) => o.value = h),
          disabled: typeof m == "object" ? m.disabled : !1,
          value: l(m)
        }, null, 8, cm), [
          [Jf, o.value]
        ]),
        (U(), K("svg", fm, [
          d[1] || (d[1] = ne("circle", {
            cx: "10.5",
            cy: "10.5",
            r: "10",
            fill: "white",
            stroke: "#e3e7e8",
            "stroke-width": "1"
          }, null, -1)),
          o.value == l(m) ? (U(), K("circle", {
            key: 0,
            cx: "10.5",
            cy: "10.5",
            r: "6.5",
            fill: u(m)
          }, null, 8, dm)) : Ce("", !0)
        ])),
        ne("span", null, Ke(s(m)), 1)
      ]))), 128))
    ], 2));
  }
}), hm = ["innerHTML"], mm = ["disabled", "value"], vm = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ym = ["stroke"], gm = ["fill"], bm = /* @__PURE__ */ We({
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
    const r = e, n = t, o = Ee({
      get: () => r.modelValue ?? "",
      set: (l) => {
        n("update:modelValue", l), n("change", l);
      }
    }), i = (l) => {
      const s = r.itemValue ?? "value", f = typeof l == "object" ? l[s] : l;
      return l.disabled ? "#e3e7e8" : r.modelValue.includes(f) ? "#3498db" : "#e3e7e8";
    }, a = (l) => {
      const s = r.itemLabel ?? "label";
      return typeof l == "object" ? l[s] : l;
    }, u = (l) => {
      const s = r.itemValue ?? "value";
      return typeof l == "object" ? l[s] : l;
    };
    return (l, s) => e.readOnly ? (U(), K("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
      innerHTML: e.modelValue.join(", ")
    }, null, 10, hm)) : (U(), K("div", {
      key: 1,
      class: Ve(["kvc-checkbox-group", { "kvc-checkbox-group-column": e.column }])
    }, [
      (U(!0), K(yt, null, St(e.items, (f, d) => (U(), K("label", {
        key: d,
        class: "kvc-checkbox-item"
      }, [
        fn(ne("input", {
          type: "checkbox",
          "onUpdate:modelValue": s[0] || (s[0] = (m) => o.value = m),
          disabled: typeof f == "object" ? f.disabled : !1,
          value: u(f)
        }, null, 8, mm), [
          [Qf, o.value]
        ]),
        (U(), K("svg", vm, [
          ne("rect", {
            x: "1",
            y: "1",
            width: "19",
            height: "19",
            rx: "1",
            fill: "white",
            "stroke-width": "2",
            stroke: i(f)
          }, null, 8, ym),
          o.value.includes(u(f)) ? (U(), K("path", {
            key: 0,
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z",
            fill: i(f)
          }, null, 8, gm)) : Ce("", !0)
        ])),
        ne("span", null, Ke(a(f)), 1)
      ]))), 128))
    ], 2));
  }
}), wm = ["placeholder", "type", "min", "max"], Ds = /* @__PURE__ */ We({
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
    const r = e, n = t, o = Ee({
      get: () => r.modelValue ?? "",
      set: (u) => n("update:modelValue", u)
    }), i = (u) => typeof u == "number" || !isNaN(Number(u)), a = Ee(() => r.width ? i(r.width) ? `${r.width}px` : r.width : "100%");
    return (u, l) => e.readOnly ? (U(), K("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }])
    }, Ke((o.value || " ").replace(/\r|\n/g, "") || " "), 3)) : fn((U(), K("input", {
      key: 1,
      "onUpdate:modelValue": l[0] || (l[0] = (s) => o.value = s),
      class: "kvc-field-text",
      style: at({ width: a.value }),
      placeholder: e.placeholder,
      type: e.type,
      min: e.min,
      max: e.max
    }, null, 12, wm)), [
      [Zf, o.value]
    ]);
  }
});
var uo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Sm(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var o = !1;
      try {
        o = this instanceof n;
      } catch {
      }
      return o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Xo = { exports: {} }, xm = Xo.exports, Ml;
function _m() {
  return Ml || (Ml = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(xm, (function() {
      var r = 1e3, n = 6e4, o = 36e5, i = "millisecond", a = "second", u = "minute", l = "hour", s = "day", f = "week", d = "month", m = "quarter", v = "year", h = "date", p = "Invalid Date", c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, b = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(H) {
        var W = ["th", "st", "nd", "rd"], L = H % 100;
        return "[" + H + (W[(L - 20) % 10] || W[L] || W[0]) + "]";
      } }, S = function(H, W, L) {
        var J = String(H);
        return !J || J.length >= W ? H : "" + Array(W + 1 - J.length).join(L) + H;
      }, x = { s: S, z: function(H) {
        var W = -H.utcOffset(), L = Math.abs(W), J = Math.floor(L / 60), M = L % 60;
        return (W <= 0 ? "+" : "-") + S(J, 2, "0") + ":" + S(M, 2, "0");
      }, m: function H(W, L) {
        if (W.date() < L.date()) return -H(L, W);
        var J = 12 * (L.year() - W.year()) + (L.month() - W.month()), M = W.clone().add(J, d), re = L - M < 0, oe = W.clone().add(J + (re ? -1 : 1), d);
        return +(-(J + (L - M) / (re ? M - oe : oe - M)) || 0);
      }, a: function(H) {
        return H < 0 ? Math.ceil(H) || 0 : Math.floor(H);
      }, p: function(H) {
        return { M: d, y: v, w: f, d: s, D: h, h: l, m: u, s: a, ms: i, Q: m }[H] || String(H || "").toLowerCase().replace(/s$/, "");
      }, u: function(H) {
        return H === void 0;
      } }, C = "en", O = {};
      O[C] = y;
      var D = "$isDayjsObject", $ = function(H) {
        return H instanceof z || !(!H || !H[D]);
      }, j = function H(W, L, J) {
        var M;
        if (!W) return C;
        if (typeof W == "string") {
          var re = W.toLowerCase();
          O[re] && (M = re), L && (O[re] = L, M = re);
          var oe = W.split("-");
          if (!M && oe.length > 1) return H(oe[0]);
        } else {
          var fe = W.name;
          O[fe] = W, M = fe;
        }
        return !J && M && (C = M), M || !J && C;
      }, F = function(H, W) {
        if ($(H)) return H.clone();
        var L = typeof W == "object" ? W : {};
        return L.date = H, L.args = arguments, new z(L);
      }, q = x;
      q.l = j, q.i = $, q.w = function(H, W) {
        return F(H, { locale: W.$L, utc: W.$u, x: W.$x, $offset: W.$offset });
      };
      var z = (function() {
        function H(L) {
          this.$L = j(L.locale, null, !0), this.parse(L), this.$x = this.$x || L.x || {}, this[D] = !0;
        }
        var W = H.prototype;
        return W.parse = function(L) {
          this.$d = (function(J) {
            var M = J.date, re = J.utc;
            if (M === null) return /* @__PURE__ */ new Date(NaN);
            if (q.u(M)) return /* @__PURE__ */ new Date();
            if (M instanceof Date) return new Date(M);
            if (typeof M == "string" && !/Z$/i.test(M)) {
              var oe = M.match(c);
              if (oe) {
                var fe = oe[2] - 1 || 0, xe = (oe[7] || "0").substring(0, 3);
                return re ? new Date(Date.UTC(oe[1], fe, oe[3] || 1, oe[4] || 0, oe[5] || 0, oe[6] || 0, xe)) : new Date(oe[1], fe, oe[3] || 1, oe[4] || 0, oe[5] || 0, oe[6] || 0, xe);
              }
            }
            return new Date(M);
          })(L), this.init();
        }, W.init = function() {
          var L = this.$d;
          this.$y = L.getFullYear(), this.$M = L.getMonth(), this.$D = L.getDate(), this.$W = L.getDay(), this.$H = L.getHours(), this.$m = L.getMinutes(), this.$s = L.getSeconds(), this.$ms = L.getMilliseconds();
        }, W.$utils = function() {
          return q;
        }, W.isValid = function() {
          return this.$d.toString() !== p;
        }, W.isSame = function(L, J) {
          var M = F(L);
          return this.startOf(J) <= M && M <= this.endOf(J);
        }, W.isAfter = function(L, J) {
          return F(L) < this.startOf(J);
        }, W.isBefore = function(L, J) {
          return this.endOf(J) < F(L);
        }, W.$g = function(L, J, M) {
          return q.u(L) ? this[J] : this.set(M, L);
        }, W.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, W.valueOf = function() {
          return this.$d.getTime();
        }, W.startOf = function(L, J) {
          var M = this, re = !!q.u(J) || J, oe = q.p(L), fe = function(_e, ae) {
            var De = q.w(M.$u ? Date.UTC(M.$y, ae, _e) : new Date(M.$y, ae, _e), M);
            return re ? De : De.endOf(s);
          }, xe = function(_e, ae) {
            return q.w(M.toDate()[_e].apply(M.toDate("s"), (re ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ae)), M);
          }, G = this.$W, Q = this.$M, R = this.$D, V = "set" + (this.$u ? "UTC" : "");
          switch (oe) {
            case v:
              return re ? fe(1, 0) : fe(31, 11);
            case d:
              return re ? fe(1, Q) : fe(0, Q + 1);
            case f:
              var le = this.$locale().weekStart || 0, Oe = (G < le ? G + 7 : G) - le;
              return fe(re ? R - Oe : R + (6 - Oe), Q);
            case s:
            case h:
              return xe(V + "Hours", 0);
            case l:
              return xe(V + "Minutes", 1);
            case u:
              return xe(V + "Seconds", 2);
            case a:
              return xe(V + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, W.endOf = function(L) {
          return this.startOf(L, !1);
        }, W.$set = function(L, J) {
          var M, re = q.p(L), oe = "set" + (this.$u ? "UTC" : ""), fe = (M = {}, M[s] = oe + "Date", M[h] = oe + "Date", M[d] = oe + "Month", M[v] = oe + "FullYear", M[l] = oe + "Hours", M[u] = oe + "Minutes", M[a] = oe + "Seconds", M[i] = oe + "Milliseconds", M)[re], xe = re === s ? this.$D + (J - this.$W) : J;
          if (re === d || re === v) {
            var G = this.clone().set(h, 1);
            G.$d[fe](xe), G.init(), this.$d = G.set(h, Math.min(this.$D, G.daysInMonth())).$d;
          } else fe && this.$d[fe](xe);
          return this.init(), this;
        }, W.set = function(L, J) {
          return this.clone().$set(L, J);
        }, W.get = function(L) {
          return this[q.p(L)]();
        }, W.add = function(L, J) {
          var M, re = this;
          L = Number(L);
          var oe = q.p(J), fe = function(Q) {
            var R = F(re);
            return q.w(R.date(R.date() + Math.round(Q * L)), re);
          };
          if (oe === d) return this.set(d, this.$M + L);
          if (oe === v) return this.set(v, this.$y + L);
          if (oe === s) return fe(1);
          if (oe === f) return fe(7);
          var xe = (M = {}, M[u] = n, M[l] = o, M[a] = r, M)[oe] || 1, G = this.$d.getTime() + L * xe;
          return q.w(G, this);
        }, W.subtract = function(L, J) {
          return this.add(-1 * L, J);
        }, W.format = function(L) {
          var J = this, M = this.$locale();
          if (!this.isValid()) return M.invalidDate || p;
          var re = L || "YYYY-MM-DDTHH:mm:ssZ", oe = q.z(this), fe = this.$H, xe = this.$m, G = this.$M, Q = M.weekdays, R = M.months, V = M.meridiem, le = function(ae, De, Ae, je) {
            return ae && (ae[De] || ae(J, re)) || Ae[De].slice(0, je);
          }, Oe = function(ae) {
            return q.s(fe % 12 || 12, ae, "0");
          }, _e = V || function(ae, De, Ae) {
            var je = ae < 12 ? "AM" : "PM";
            return Ae ? je.toLowerCase() : je;
          };
          return re.replace(b, (function(ae, De) {
            return De || (function(Ae) {
              switch (Ae) {
                case "YY":
                  return String(J.$y).slice(-2);
                case "YYYY":
                  return q.s(J.$y, 4, "0");
                case "M":
                  return G + 1;
                case "MM":
                  return q.s(G + 1, 2, "0");
                case "MMM":
                  return le(M.monthsShort, G, R, 3);
                case "MMMM":
                  return le(R, G);
                case "D":
                  return J.$D;
                case "DD":
                  return q.s(J.$D, 2, "0");
                case "d":
                  return String(J.$W);
                case "dd":
                  return le(M.weekdaysMin, J.$W, Q, 2);
                case "ddd":
                  return le(M.weekdaysShort, J.$W, Q, 3);
                case "dddd":
                  return Q[J.$W];
                case "H":
                  return String(fe);
                case "HH":
                  return q.s(fe, 2, "0");
                case "h":
                  return Oe(1);
                case "hh":
                  return Oe(2);
                case "a":
                  return _e(fe, xe, !0);
                case "A":
                  return _e(fe, xe, !1);
                case "m":
                  return String(xe);
                case "mm":
                  return q.s(xe, 2, "0");
                case "s":
                  return String(J.$s);
                case "ss":
                  return q.s(J.$s, 2, "0");
                case "SSS":
                  return q.s(J.$ms, 3, "0");
                case "Z":
                  return oe;
              }
              return null;
            })(ae) || oe.replace(":", "");
          }));
        }, W.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, W.diff = function(L, J, M) {
          var re, oe = this, fe = q.p(J), xe = F(L), G = (xe.utcOffset() - this.utcOffset()) * n, Q = this - xe, R = function() {
            return q.m(oe, xe);
          };
          switch (fe) {
            case v:
              re = R() / 12;
              break;
            case d:
              re = R();
              break;
            case m:
              re = R() / 3;
              break;
            case f:
              re = (Q - G) / 6048e5;
              break;
            case s:
              re = (Q - G) / 864e5;
              break;
            case l:
              re = Q / o;
              break;
            case u:
              re = Q / n;
              break;
            case a:
              re = Q / r;
              break;
            default:
              re = Q;
          }
          return M ? re : q.a(re);
        }, W.daysInMonth = function() {
          return this.endOf(d).$D;
        }, W.$locale = function() {
          return O[this.$L];
        }, W.locale = function(L, J) {
          if (!L) return this.$L;
          var M = this.clone(), re = j(L, J, !0);
          return re && (M.$L = re), M;
        }, W.clone = function() {
          return q.w(this.$d, this);
        }, W.toDate = function() {
          return new Date(this.valueOf());
        }, W.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, W.toISOString = function() {
          return this.$d.toISOString();
        }, W.toString = function() {
          return this.$d.toUTCString();
        }, H;
      })(), ue = z.prototype;
      return F.prototype = ue, [["$ms", i], ["$s", a], ["$m", u], ["$H", l], ["$W", s], ["$M", d], ["$y", v], ["$D", h]].forEach((function(H) {
        ue[H[1]] = function(W) {
          return this.$g(W, H[0], H[1]);
        };
      })), F.extend = function(H, W) {
        return H.$i || (H(W, z, F), H.$i = !0), F;
      }, F.locale = j, F.isDayjs = $, F.unix = function(H) {
        return F(1e3 * H);
      }, F.en = O[C], F.Ls = O, F.p = {}, F;
    }));
  })(Xo)), Xo.exports;
}
var Em = _m();
const Ne = /* @__PURE__ */ kr(Em);
var Jo = { exports: {} }, Om = Jo.exports, Fl;
function Am() {
  return Fl || (Fl = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Om, (function() {
      return function(r, n) {
        n.prototype.weekday = function(o) {
          var i = this.$locale().weekStart || 0, a = this.$W, u = (a < i ? a + 7 : a) - i;
          return this.$utils().u(o) ? u : this.subtract(u, "day").add(o, "day");
        };
      };
    }));
  })(Jo)), Jo.exports;
}
var Cm = Am();
const Dm = /* @__PURE__ */ kr(Cm);
var Qo = { exports: {} }, Rm = Qo.exports, jl;
function Tm() {
  return jl || (jl = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Rm, (function() {
      return function(r, n) {
        n.prototype.isSameOrBefore = function(o, i) {
          return this.isSame(o, i) || this.isBefore(o, i);
        };
      };
    }));
  })(Qo)), Qo.exports;
}
var km = Tm();
const Pm = /* @__PURE__ */ kr(km), Im = { class: "kvc-datepicker-popup" }, $m = { class: "kvc-datepicker-controls" }, Nm = { class: "kvc-datepicker-control-year-month" }, Mm = { class: "kvc-datepicker-control-year" }, Fm = { class: "kvc-datepicker-control-selector-text" }, jm = { class: "kvc-datepicker-control-month" }, Bm = { class: "kvc-datepicker-control-selector-text" }, qm = { class: "kvc-datepicker-body" }, Lm = ["onClick"], Um = { class: "kvc-datepicker-bottom" }, Vm = /* @__PURE__ */ We({
  __name: "DatePicker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "close"],
  setup(e, { emit: t }) {
    Ne.extend(Dm), Ne.extend(Pm);
    const r = e, n = t, o = be(null), i = be(null), a = be(null), u = be(null), l = be(
      r.modelValue?.length ? r.modelValue : void 0
    ), s = ["日", "月", "火", "水", "木", "金", "土"], f = mc({
      year: !1,
      month: !1
    }), d = (O) => {
      f[O] = !1;
    };
    Cr(o, () => d("year")), Cr(i, () => d("month"));
    const m = Ee(
      () => Array.from({ length: 12 }, (O, D) => ({
        label: `${D + 1}月`,
        value: D + 1
      }))
    ), v = Ee(() => {
      const O = Ne(l.value).year(), D = O - 100, $ = O + 100, j = [];
      for (let F = D; F <= $; F++)
        j.push({ label: `${F}年`, value: F });
      return j;
    }), h = (O) => {
      O = Number(O), l.value = Ne(l.value || void 0).year(O).format("YYYY-MM-DD"), setTimeout(() => f.year = !1, 10);
    }, p = (O) => {
      O = Number(O), l.value = Ne(l.value || void 0).month(O - 1).format("YYYY-MM-DD"), setTimeout(() => f.month = !1, 10);
    }, c = Ee(() => Ne(l.value).year()), b = Ee(() => Ne(l.value).month() + 1), y = Ee(() => {
      const O = Ne(l.value).startOf("month"), D = Ne(l.value).endOf("month"), $ = O.weekday(0), j = D.weekday(6), F = [];
      let q = $;
      for (; q.isSameOrBefore(j); ) {
        const ue = [];
        for (let H = 0; H < 7; H++)
          ue.push({
            date: q.date(),
            fullDate: q.format("YYYY-MM-DD"),
            isCurrentMonth: q.month() === Ne(l.value).month(),
            isCurrentDate: q.isSame(Ne(r.modelValue || void 0), "date"),
            isHoliday: q.day() === 0 || q.day() === 6,
            isToday: q.isSame(Ne(), "day")
          }), q = q.add(1, "day");
        F.push(ue);
      }
      let z = j.add(1, "day");
      for (; F.length < 6; ) {
        const ue = [];
        for (let H = 0; H < 7; H++)
          ue.push({
            date: z.date(),
            fullDate: z.format("YYYY-MM-DD"),
            isCurrentMonth: z.month() === Ne(l.value).month(),
            isCurrentDate: z.isSame(Ne(r.modelValue || void 0), "date"),
            isHoliday: z.day() === 0 || z.day() === 6,
            isToday: z.isSame(Ne(), "day")
          }), z = z.add(1, "day");
        F.push(ue);
      }
      return F;
    }), S = () => {
      l.value = Ne(l.value).subtract(1, "month").format("YYYY-MM-DD");
    }, x = () => {
      l.value = Ne(l.value).add(1, "month").format("YYYY-MM-DD");
    }, C = (O) => {
      n("update:modelValue", O || ""), n("close", !0);
    };
    return (O, D) => (U(), K("div", Im, [
      ne("div", $m, [
        ne("button", {
          class: "kvc-datepicker-control-prev",
          onClick: S
        }, [
          Ge(Ie(Je), {
            icon: "mdi-light:chevron-left",
            height: "32"
          })
        ]),
        ne("div", Nm, [
          ne("div", Mm, [
            ne("button", {
              type: "button",
              ref_key: "yearRef",
              ref: o,
              class: "kvc-datepicker-control-selector",
              onClick: D[0] || (D[0] = ($) => f.year = !f.year)
            }, [
              ne("span", Fm, Ke(c.value) + "年", 1),
              Ge(Ie(Je), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.year ? (U(), Bt(lo, {
                key: 0,
                ref_key: "yearListRef",
                ref: a,
                class: "kvc-datepicker-controll-selector-list",
                items: v.value,
                "model-value": c.value,
                "max-height": 300,
                onChange: h
              }, null, 8, ["items", "model-value"])) : Ce("", !0)
            ], 512)
          ]),
          ne("div", jm, [
            ne("button", {
              type: "button",
              ref_key: "monthRef",
              ref: i,
              class: "kvc-datepicker-control-selector",
              onClick: D[1] || (D[1] = ($) => f.month = !f.month)
            }, [
              ne("span", Bm, Ke(b.value) + "月", 1),
              Ge(Ie(Je), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.month ? (U(), Bt(lo, {
                key: 0,
                ref_key: "monthListRef",
                ref: u,
                class: "kvc-datepicker-controll-selector-list",
                items: m.value,
                "model-value": b.value,
                onChange: p
              }, null, 8, ["items", "model-value"])) : Ce("", !0)
            ], 512)
          ])
        ]),
        ne("button", {
          class: "kvc-datepicker-control-next",
          onClick: x
        }, [
          Ge(Ie(Je), {
            icon: "mdi-light:chevron-right",
            height: "32"
          })
        ])
      ]),
      ne("table", qm, [
        ne("thead", null, [
          ne("tr", null, [
            (U(), K(yt, null, St(s, ($) => ne("th", {
              key: $,
              class: Ve(["kvc-datepicker-day", {
                "kvc-datepicker-day-saturday": $ === "土",
                "kvc-datepicker-day-sunday": $ === "日"
              }])
            }, Ke($), 3)), 64))
          ])
        ]),
        ne("tbody", null, [
          (U(!0), K(yt, null, St(y.value, ($, j) => (U(), K("tr", { key: j }, [
            (U(!0), K(yt, null, St($, (F) => (U(), K("td", {
              key: F.date
            }, [
              ne("button", {
                type: "button",
                class: Ve(["kvc-datepicker-date", {
                  "kvc-datepicker-date-notcurrent-month": !F.isCurrentMonth,
                  "kvc-datepicker-date-today": F.isToday,
                  "kvc-datepicker-date-current": F.isCurrentDate
                }]),
                onClick: (q) => C(F.fullDate)
              }, Ke(F.date), 11, Lm)
            ]))), 128))
          ]))), 128))
        ])
      ]),
      ne("div", Um, [
        ne("button", {
          type: "button",
          class: "kvc-datepicker-bottom-today",
          onClick: D[2] || (D[2] = ($) => C(Ie(Ne)().format("YYYY-MM-DD")))
        }, " 今日 "),
        ne("button", {
          type: "button",
          class: "kvc-datepicker-bottom-clear",
          onClick: D[3] || (D[3] = ($) => C())
        }, " 選択を解除 ")
      ])
    ]));
  }
}), Wm = { class: "kvc-date-picker" }, Hc = /* @__PURE__ */ We({
  __name: "date-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = Ee({
      get: () => r.modelValue ?? "",
      set: (v) => {
        n("update:modelValue", v), n("change", v);
      }
    }), i = (v) => {
      const h = v.target;
      /^\d{4}-\d{2}-\d{2}$/.test(h.value) || (n("update:modelValue", ""), n("change", ""));
    }, a = be(!1), u = be(!1), l = be(null), s = be(null), f = () => {
      a.value = !0, u.value = !0;
    }, d = () => {
      a.value = !1;
    }, m = () => {
      u.value = !1, a.value = !1;
    };
    return Cr(s, () => {
      a.value || (u.value = !1, a.value = !1);
    }), (v, h) => (U(), K("div", Wm, [
      Ge(Ds, {
        "read-only": e.readOnly,
        disabled: e.disabled,
        nonstyled: e.nonstyled,
        modelValue: o.value,
        "onUpdate:modelValue": h[0] || (h[0] = (p) => o.value = p),
        ref_key: "inputRef",
        ref: l,
        class: Ve(["text-center", e.readOnly ? "w-28" : "max-w-28"]),
        onFocus: f,
        onBlur: d,
        onChange: i
      }, null, 8, ["read-only", "disabled", "nonstyled", "modelValue", "class"]),
      e.readOnly || e.disabled ? Ce("", !0) : fn((U(), Bt(Vm, {
        key: 0,
        modelValue: o.value,
        "onUpdate:modelValue": h[1] || (h[1] = (p) => o.value = p),
        ref_key: "calendarRef",
        ref: s,
        onClose: m
      }, null, 8, ["modelValue"])), [
        [Tr, u.value]
      ])
    ]));
  }
}), Hm = { class: "kvc-time-picker" }, Gc = /* @__PURE__ */ We({
  __name: "time-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = Ee({
      get: () => r.modelValue ?? "",
      set: (v) => {
        n("update:modelValue", v), n("change", v);
      }
    }), i = (v) => {
      const h = v.target;
      /^\d{2}:\d{2}$/.test(h.value) || (n("update:modelValue", ""), n("change", ""));
    }, a = Ee(() => {
      const v = [];
      for (let h = 0; h < 24; h++)
        for (let p = 0; p < 60; p += 30) {
          const c = p === 0 ? "00" : "30";
          v.push({
            label: `${h}:${c}`,
            value: `${h.toString().padStart(2, "0")}:${c}`
          });
        }
      return v;
    }), u = be(!1), l = be(!1), s = be(null), f = be(null), d = () => {
      u.value = !0, l.value = !0;
    }, m = () => {
      u.value = !1;
    };
    return Cr(f, () => {
      u.value || (l.value = !1, u.value = !1);
    }), (v, h) => (U(), K("div", Hm, [
      Ge(Ds, {
        "read-only": e.readOnly,
        disabled: e.disabled,
        modelValue: o.value,
        "onUpdate:modelValue": h[0] || (h[0] = (p) => o.value = p),
        ref_key: "inputRef",
        ref: s,
        class: Ve(e.readOnly ? "w-16 text-left" : "max-w-20 text-center"),
        onFocus: d,
        onBlur: m,
        onChange: i
      }, null, 8, ["read-only", "disabled", "modelValue", "class"]),
      e.readOnly || e.disabled ? Ce("", !0) : fn((U(), Bt(lo, {
        key: 0,
        modelValue: o.value,
        "onUpdate:modelValue": h[1] || (h[1] = (p) => o.value = p),
        ref_key: "timeRef",
        ref: f,
        items: a.value,
        "max-height": 183,
        onChange: h[2] || (h[2] = (p) => l.value = !1)
      }, null, 8, ["modelValue", "items"])), [
        [Tr, l.value]
      ])
    ]));
  }
});
var Zo = { exports: {} }, Gm = Zo.exports, Bl;
function Km() {
  return Bl || (Bl = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Gm, (function() {
      var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, o = /([+-]|\d\d)/g;
      return function(i, a, u) {
        var l = a.prototype;
        u.utc = function(p) {
          var c = { date: p, utc: !0, args: arguments };
          return new a(c);
        }, l.utc = function(p) {
          var c = u(this.toDate(), { locale: this.$L, utc: !0 });
          return p ? c.add(this.utcOffset(), r) : c;
        }, l.local = function() {
          return u(this.toDate(), { locale: this.$L, utc: !1 });
        };
        var s = l.parse;
        l.parse = function(p) {
          p.utc && (this.$u = !0), this.$utils().u(p.$offset) || (this.$offset = p.$offset), s.call(this, p);
        };
        var f = l.init;
        l.init = function() {
          if (this.$u) {
            var p = this.$d;
            this.$y = p.getUTCFullYear(), this.$M = p.getUTCMonth(), this.$D = p.getUTCDate(), this.$W = p.getUTCDay(), this.$H = p.getUTCHours(), this.$m = p.getUTCMinutes(), this.$s = p.getUTCSeconds(), this.$ms = p.getUTCMilliseconds();
          } else f.call(this);
        };
        var d = l.utcOffset;
        l.utcOffset = function(p, c) {
          var b = this.$utils().u;
          if (b(p)) return this.$u ? 0 : b(this.$offset) ? d.call(this) : this.$offset;
          if (typeof p == "string" && (p = (function(C) {
            C === void 0 && (C = "");
            var O = C.match(n);
            if (!O) return null;
            var D = ("" + O[0]).match(o) || ["-", 0, 0], $ = D[0], j = 60 * +D[1] + +D[2];
            return j === 0 ? 0 : $ === "+" ? j : -j;
          })(p), p === null)) return this;
          var y = Math.abs(p) <= 16 ? 60 * p : p;
          if (y === 0) return this.utc(c);
          var S = this.clone();
          if (c) return S.$offset = y, S.$u = !1, S;
          var x = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (S = this.local().add(y + x, r)).$offset = y, S.$x.$localOffset = x, S;
        };
        var m = l.format;
        l.format = function(p) {
          var c = p || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return m.call(this, c);
        }, l.valueOf = function() {
          var p = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * p;
        }, l.isUTC = function() {
          return !!this.$u;
        }, l.toISOString = function() {
          return this.toDate().toISOString();
        }, l.toString = function() {
          return this.toDate().toUTCString();
        };
        var v = l.toDate;
        l.toDate = function(p) {
          return p === "s" && this.$offset ? u(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : v.call(this);
        };
        var h = l.diff;
        l.diff = function(p, c, b) {
          if (p && this.$u === p.$u) return h.call(this, p, c, b);
          var y = this.local(), S = u(p).local();
          return h.call(y, S, c, b);
        };
      };
    }));
  })(Zo)), Zo.exports;
}
var zm = Km();
const Ym = /* @__PURE__ */ kr(zm);
var ei = { exports: {} }, Xm = ei.exports, ql;
function Jm() {
  return ql || (ql = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Xm, (function() {
      var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
      return function(o, i, a) {
        var u, l = function(m, v, h) {
          h === void 0 && (h = {});
          var p = new Date(m), c = (function(b, y) {
            y === void 0 && (y = {});
            var S = y.timeZoneName || "short", x = b + "|" + S, C = n[x];
            return C || (C = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: b, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: S }), n[x] = C), C;
          })(v, h);
          return c.formatToParts(p);
        }, s = function(m, v) {
          for (var h = l(m, v), p = [], c = 0; c < h.length; c += 1) {
            var b = h[c], y = b.type, S = b.value, x = r[y];
            x >= 0 && (p[x] = parseInt(S, 10));
          }
          var C = p[3], O = C === 24 ? 0 : C, D = p[0] + "-" + p[1] + "-" + p[2] + " " + O + ":" + p[4] + ":" + p[5] + ":000", $ = +m;
          return (a.utc(D).valueOf() - ($ -= $ % 1e3)) / 6e4;
        }, f = i.prototype;
        f.tz = function(m, v) {
          m === void 0 && (m = u);
          var h, p = this.utcOffset(), c = this.toDate(), b = c.toLocaleString("en-US", { timeZone: m }), y = Math.round((c - new Date(b)) / 1e3 / 60), S = 15 * -Math.round(c.getTimezoneOffset() / 15) - y;
          if (!Number(S)) h = this.utcOffset(0, v);
          else if (h = a(b, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(S, !0), v) {
            var x = h.utcOffset();
            h = h.add(p - x, "minute");
          }
          return h.$x.$timezone = m, h;
        }, f.offsetName = function(m) {
          var v = this.$x.$timezone || a.tz.guess(), h = l(this.valueOf(), v, { timeZoneName: m }).find((function(p) {
            return p.type.toLowerCase() === "timezonename";
          }));
          return h && h.value;
        };
        var d = f.startOf;
        f.startOf = function(m, v) {
          if (!this.$x || !this.$x.$timezone) return d.call(this, m, v);
          var h = a(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return d.call(h, m, v).tz(this.$x.$timezone, !0);
        }, a.tz = function(m, v, h) {
          var p = h && v, c = h || v || u, b = s(+a(), c);
          if (typeof m != "string") return a(m).tz(c);
          var y = (function(O, D, $) {
            var j = O - 60 * D * 1e3, F = s(j, $);
            if (D === F) return [j, D];
            var q = s(j -= 60 * (F - D) * 1e3, $);
            return F === q ? [j, F] : [O - 60 * Math.min(F, q) * 1e3, Math.max(F, q)];
          })(a.utc(m, p).valueOf(), b, c), S = y[0], x = y[1], C = a(S).utcOffset(x);
          return C.$x.$timezone = c, C;
        }, a.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, a.tz.setDefault = function(m) {
          u = m;
        };
      };
    }));
  })(ei)), ei.exports;
}
var Qm = Jm();
const Zm = /* @__PURE__ */ kr(Qm);
var ti = { exports: {} }, ev = ti.exports, Ll;
function tv() {
  return Ll || (Ll = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(ev, (function() {
      return function(r, n, o) {
        var i = n.prototype, a = function(m) {
          var v, h = m.date, p = m.utc, c = {};
          if (!((v = h) === null || v instanceof Date || v instanceof Array || i.$utils().u(v) || v.constructor.name !== "Object")) {
            if (!Object.keys(h).length) return /* @__PURE__ */ new Date();
            var b = p ? o.utc() : o();
            Object.keys(h).forEach((function(j) {
              var F, q;
              c[F = j, q = i.$utils().p(F), q === "date" ? "day" : q] = h[j];
            }));
            var y = c.day || (c.year || c.month >= 0 ? 1 : b.date()), S = c.year || b.year(), x = c.month >= 0 ? c.month : c.year || c.day ? 0 : b.month(), C = c.hour || 0, O = c.minute || 0, D = c.second || 0, $ = c.millisecond || 0;
            return p ? new Date(Date.UTC(S, x, y, C, O, D, $)) : new Date(S, x, y, C, O, D, $);
          }
          return h;
        }, u = i.parse;
        i.parse = function(m) {
          m.date = a.bind(this)(m), u.bind(this)(m);
        };
        var l = i.set, s = i.add, f = i.subtract, d = function(m, v, h, p) {
          p === void 0 && (p = 1);
          var c = Object.keys(v), b = this;
          return c.forEach((function(y) {
            b = m.bind(b)(v[y] * p, y);
          })), b;
        };
        i.set = function(m, v) {
          return v = v === void 0 ? m : v, m.constructor.name === "Object" ? d.bind(this)((function(h, p) {
            return l.bind(this)(p, h);
          }), v, m) : l.bind(this)(m, v);
        }, i.add = function(m, v) {
          return m.constructor.name === "Object" ? d.bind(this)(s, m, v) : s.bind(this)(m, v);
        }, i.subtract = function(m, v) {
          return m.constructor.name === "Object" ? d.bind(this)(s, m, v, -1) : f.bind(this)(m, v);
        };
      };
    }));
  })(ti)), ti.exports;
}
var nv = tv();
const rv = /* @__PURE__ */ kr(nv), ov = { class: "kvc-datetime-picker" }, iv = /* @__PURE__ */ We({
  __name: "datetime-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    Ne.extend(Ym), Ne.extend(Zm), Ne.extend(rv), Ne.tz.setDefault("Asia/Tokyo");
    const r = e, n = t, o = Ee(() => r.modelValue && Ne(r.modelValue).isValid()), i = Ee(() => o.value ? Ne(r.modelValue) : void 0), a = (l) => {
      if (l && Ne(l).isValid()) {
        const [s, f, d] = l.split("-").map(Number), m = i.value ? Ne(i.value).year(s).month(f - 1).date(d) : Ne({ year: s, month: f - 1, date: d });
        n("update:modelValue", m.toISOString());
      } else
        n("update:modelValue", void 0);
    }, u = (l) => {
      if (l) {
        const [s, f] = l.split(":").map(Number);
        if (!isNaN(s) && !isNaN(f)) {
          const d = i.value ? Ne(i.value).hour(s).minute(f) : Ne({ hour: s, minute: f });
          n("update:modelValue", d.toISOString());
        } else
          n("update:modelValue", void 0);
      } else
        n("update:modelValue", void 0);
    };
    return (l, s) => (U(), K("div", ov, [
      e.readOnly ? (U(), K("p", {
        key: 0,
        class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }])
      }, Ke(e.modelValue && Ie(Ne)(e.modelValue).isValid() ? Ie(Ne)(e.modelValue).format("YYYY-MM-DD HH:mm") : " "), 3)) : (U(), K(yt, { key: 1 }, [
        Ge(Hc, {
          "model-value": i.value ? i.value.format("YYYY-MM-DD") : void 0,
          disabled: e.disabled,
          onChange: a
        }, null, 8, ["model-value", "disabled"]),
        Ge(Gc, {
          "model-value": i.value ? i.value.format("HH:mm") : void 0,
          disabled: e.disabled,
          onChange: u
        }, null, 8, ["model-value", "disabled"])
      ], 64))
    ]));
  }
}), av = ["innerHTML"], sv = /* @__PURE__ */ We({
  __name: "textarea",
  props: {
    modelValue: {},
    nonstyled: { type: Boolean },
    readOnly: { type: Boolean },
    width: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = Ee({
      get: () => r.modelValue ?? "",
      set: (i) => n("update:modelValue", i)
    });
    return (i, a) => e.readOnly ? (U(), K("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": e.nonstyled }]),
      innerHTML: (o.value || " ").replace(/\n/g, "<br>")
    }, null, 10, av)) : fn((U(), K("textarea", {
      key: 1,
      class: "kvc-field-text",
      "onUpdate:modelValue": a[0] || (a[0] = (u) => o.value = u)
    }, null, 512)), [
      [ed, o.value]
    ]);
  }
});
function Ul(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ul(Object(r), !0).forEach(function(n) {
      lv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ul(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ni(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ni = function(t) {
    return typeof t;
  } : ni = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ni(e);
}
function lv(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function bn() {
  return bn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bn.apply(this, arguments);
}
function uv(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function cv(e, t) {
  if (e == null) return {};
  var r = uv(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var fv = "1.15.6";
function yn(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Sn = yn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), po = yn(/Edge/i), Vl = yn(/firefox/i), no = yn(/safari/i) && !yn(/chrome/i) && !yn(/android/i), Rs = yn(/iP(ad|od|hone)/i), Kc = yn(/chrome/i) && yn(/android/i), zc = {
  capture: !1,
  passive: !1
};
function ke(e, t, r) {
  e.addEventListener(t, r, !Sn && zc);
}
function Re(e, t, r) {
  e.removeEventListener(t, r, !Sn && zc);
}
function vi(e, t) {
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
function Yc(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Xt(e, t, r, n) {
  if (e) {
    r = r || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === r && vi(e, t) : vi(e, t)) || n && e === r)
        return e;
      if (e === r) break;
    } while (e = Yc(e));
  }
  return null;
}
var Wl = /\s+/g;
function Nt(e, t, r) {
  if (e && t)
    if (e.classList)
      e.classList[r ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ").replace(Wl, " ").replace(" " + t + " ", " ");
      e.className = (n + (r ? " " + t : "")).replace(Wl, " ");
    }
}
function he(e, t, r) {
  var n = e && e.style;
  if (n) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (r = e.currentStyle), t === void 0 ? r : r[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = r + (typeof r == "string" ? "" : "px");
  }
}
function Er(e, t) {
  var r = "";
  if (typeof e == "string")
    r = e;
  else
    do {
      var n = he(e, "transform");
      n && n !== "none" && (r = n + " " + r);
    } while (!t && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(r);
}
function Xc(e, t, r) {
  if (e) {
    var n = e.getElementsByTagName(t), o = 0, i = n.length;
    if (r)
      for (; o < i; o++)
        r(n[o], o);
    return n;
  }
  return [];
}
function ln() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function nt(e, t, r, n, o) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var i, a, u, l, s, f, d;
    if (e !== window && e.parentNode && e !== ln() ? (i = e.getBoundingClientRect(), a = i.top, u = i.left, l = i.bottom, s = i.right, f = i.height, d = i.width) : (a = 0, u = 0, l = window.innerHeight, s = window.innerWidth, f = window.innerHeight, d = window.innerWidth), (t || r) && e !== window && (o = o || e.parentNode, !Sn))
      do
        if (o && o.getBoundingClientRect && (he(o, "transform") !== "none" || r && he(o, "position") !== "static")) {
          var m = o.getBoundingClientRect();
          a -= m.top + parseInt(he(o, "border-top-width")), u -= m.left + parseInt(he(o, "border-left-width")), l = a + i.height, s = u + i.width;
          break;
        }
      while (o = o.parentNode);
    if (n && e !== window) {
      var v = Er(o || e), h = v && v.a, p = v && v.d;
      v && (a /= p, u /= h, d /= h, f /= p, l = a + f, s = u + d);
    }
    return {
      top: a,
      left: u,
      bottom: l,
      right: s,
      width: d,
      height: f
    };
  }
}
function Hl(e, t, r) {
  for (var n = $n(e, !0), o = nt(e)[t]; n; ) {
    var i = nt(n)[r], a = void 0;
    if (a = o >= i, !a) return n;
    if (n === ln()) break;
    n = $n(n, !1);
  }
  return !1;
}
function Dr(e, t, r, n) {
  for (var o = 0, i = 0, a = e.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== me.ghost && (n || a[i] !== me.dragged) && Xt(a[i], r.draggable, e, !1)) {
      if (o === t)
        return a[i];
      o++;
    }
    i++;
  }
  return null;
}
function Ts(e, t) {
  for (var r = e.lastElementChild; r && (r === me.ghost || he(r, "display") === "none" || t && !vi(r, t)); )
    r = r.previousElementSibling;
  return r || null;
}
function Vt(e, t) {
  var r = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== me.clone && (!t || vi(e, t)) && r++;
  return r;
}
function Gl(e) {
  var t = 0, r = 0, n = ln();
  if (e)
    do {
      var o = Er(e), i = o.a, a = o.d;
      t += e.scrollLeft * i, r += e.scrollTop * a;
    } while (e !== n && (e = e.parentNode));
  return [t, r];
}
function dv(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === e[r][n]) return Number(r);
    }
  return -1;
}
function $n(e, t) {
  if (!e || !e.getBoundingClientRect) return ln();
  var r = e, n = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var o = he(r);
      if (r.clientWidth < r.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return ln();
        if (n || t) return r;
        n = !0;
      }
    }
  while (r = r.parentNode);
  return ln();
}
function pv(e, t) {
  if (e && t)
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
function Qi(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var ro;
function Jc(e, t) {
  return function() {
    if (!ro) {
      var r = arguments, n = this;
      r.length === 1 ? e.call(n, r[0]) : e.apply(n, r), ro = setTimeout(function() {
        ro = void 0;
      }, t);
    }
  };
}
function hv() {
  clearTimeout(ro), ro = void 0;
}
function Qc(e, t, r) {
  e.scrollLeft += t, e.scrollTop += r;
}
function Zc(e) {
  var t = window.Polymer, r = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : r ? r(e).clone(!0)[0] : e.cloneNode(!0);
}
function ef(e, t, r) {
  var n = {};
  return Array.from(e.children).forEach(function(o) {
    var i, a, u, l;
    if (!(!Xt(o, t.draggable, e, !1) || o.animated || o === r)) {
      var s = nt(o);
      n.left = Math.min((i = n.left) !== null && i !== void 0 ? i : 1 / 0, s.left), n.top = Math.min((a = n.top) !== null && a !== void 0 ? a : 1 / 0, s.top), n.right = Math.max((u = n.right) !== null && u !== void 0 ? u : -1 / 0, s.right), n.bottom = Math.max((l = n.bottom) !== null && l !== void 0 ? l : -1 / 0, s.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var Ct = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function mv() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(o) {
          if (!(he(o, "display") === "none" || o === me.ghost)) {
            e.push({
              target: o,
              rect: nt(o)
            });
            var i = cn({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = Er(o, !0);
              a && (i.top -= a.f, i.left -= a.e);
            }
            o.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(n) {
      e.push(n);
    },
    removeAnimationState: function(n) {
      e.splice(dv(e, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var i = !1, a = 0;
      e.forEach(function(u) {
        var l = 0, s = u.target, f = s.fromRect, d = nt(s), m = s.prevFromRect, v = s.prevToRect, h = u.rect, p = Er(s, !0);
        p && (d.top -= p.f, d.left -= p.e), s.toRect = d, s.thisAnimationDuration && Qi(m, d) && !Qi(f, d) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - d.top) / (h.left - d.left) === (f.top - d.top) / (f.left - d.left) && (l = yv(h, m, v, o.options)), Qi(d, f) || (s.prevFromRect = f, s.prevToRect = d, l || (l = o.options.animation), o.animate(s, h, d, l)), l && (i = !0, a = Math.max(a, l), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
          s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, s.prevToRect = null, s.thisAnimationDuration = null;
        }, l), s.thisAnimationDuration = l);
      }), clearTimeout(t), i ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), e = [];
    },
    animate: function(n, o, i, a) {
      if (a) {
        he(n, "transition", ""), he(n, "transform", "");
        var u = Er(this.el), l = u && u.a, s = u && u.d, f = (o.left - i.left) / (l || 1), d = (o.top - i.top) / (s || 1);
        n.animatingX = !!f, n.animatingY = !!d, he(n, "transform", "translate3d(" + f + "px," + d + "px,0)"), this.forRepaintDummy = vv(n), he(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), he(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          he(n, "transition", ""), he(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function vv(e) {
  return e.offsetWidth;
}
function yv(e, t, r, n) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) * n.animation;
}
var mr = [], Zi = {
  initializeByDefault: !0
}, ho = {
  mount: function(t) {
    for (var r in Zi)
      Zi.hasOwnProperty(r) && !(r in t) && (t[r] = Zi[r]);
    mr.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), mr.push(t);
  },
  pluginEvent: function(t, r, n) {
    var o = this;
    this.eventCanceled = !1, n.cancel = function() {
      o.eventCanceled = !0;
    };
    var i = t + "Global";
    mr.forEach(function(a) {
      r[a.pluginName] && (r[a.pluginName][i] && r[a.pluginName][i](cn({
        sortable: r
      }, n)), r.options[a.pluginName] && r[a.pluginName][t] && r[a.pluginName][t](cn({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(t, r, n, o) {
    mr.forEach(function(u) {
      var l = u.pluginName;
      if (!(!t.options[l] && !u.initializeByDefault)) {
        var s = new u(t, r, t.options);
        s.sortable = t, s.options = t.options, t[l] = s, bn(n, s.defaults);
      }
    });
    for (var i in t.options)
      if (t.options.hasOwnProperty(i)) {
        var a = this.modifyOption(t, i, t.options[i]);
        typeof a < "u" && (t.options[i] = a);
      }
  },
  getEventProperties: function(t, r) {
    var n = {};
    return mr.forEach(function(o) {
      typeof o.eventProperties == "function" && bn(n, o.eventProperties.call(r[o.pluginName], t));
    }), n;
  },
  modifyOption: function(t, r, n) {
    var o;
    return mr.forEach(function(i) {
      t[i.pluginName] && i.optionListeners && typeof i.optionListeners[r] == "function" && (o = i.optionListeners[r].call(t[i.pluginName], n));
    }), o;
  }
};
function gv(e) {
  var t = e.sortable, r = e.rootEl, n = e.name, o = e.targetEl, i = e.cloneEl, a = e.toEl, u = e.fromEl, l = e.oldIndex, s = e.newIndex, f = e.oldDraggableIndex, d = e.newDraggableIndex, m = e.originalEvent, v = e.putSortable, h = e.extraEventProperties;
  if (t = t || r && r[Ct], !!t) {
    var p, c = t.options, b = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !Sn && !po ? p = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (p = document.createEvent("Event"), p.initEvent(n, !0, !0)), p.to = a || r, p.from = u || r, p.item = o || r, p.clone = i, p.oldIndex = l, p.newIndex = s, p.oldDraggableIndex = f, p.newDraggableIndex = d, p.originalEvent = m, p.pullMode = v ? v.lastPutMode : void 0;
    var y = cn(cn({}, h), ho.getEventProperties(n, t));
    for (var S in y)
      p[S] = y[S];
    r && r.dispatchEvent(p), c[b] && c[b].call(t, p);
  }
}
var bv = ["evt"], At = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = n.evt, i = cv(n, bv);
  ho.pluginEvent.bind(me)(t, r, cn({
    dragEl: ee,
    parentEl: Ye,
    ghostEl: ge,
    rootEl: Ue,
    nextEl: tr,
    lastDownEl: ri,
    cloneEl: He,
    cloneHidden: Pn,
    dragStarted: Kr,
    putSortable: ft,
    activeSortable: me.active,
    originalEvent: o,
    oldIndex: Sr,
    oldDraggableIndex: oo,
    newIndex: Ft,
    newDraggableIndex: Tn,
    hideGhostForTarget: of,
    unhideGhostForTarget: af,
    cloneNowHidden: function() {
      Pn = !0;
    },
    cloneNowShown: function() {
      Pn = !1;
    },
    dispatchSortableEvent: function(u) {
      wt({
        sortable: r,
        name: u,
        originalEvent: o
      });
    }
  }, i));
};
function wt(e) {
  gv(cn({
    putSortable: ft,
    cloneEl: He,
    targetEl: ee,
    rootEl: Ue,
    oldIndex: Sr,
    oldDraggableIndex: oo,
    newIndex: Ft,
    newDraggableIndex: Tn
  }, e));
}
var ee, Ye, ge, Ue, tr, ri, He, Pn, Sr, Ft, oo, Tn, jo, ft, gr = !1, yi = !1, gi = [], Vn, Kt, ea, ta, Kl, zl, Kr, vr, io, ao = !1, Bo = !1, oi, vt, na = [], vs = !1, bi = [], Ei = typeof document < "u", qo = Rs, Yl = po || Sn ? "cssFloat" : "float", wv = Ei && !Kc && !Rs && "draggable" in document.createElement("div"), tf = (function() {
  if (Ei) {
    if (Sn)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
})(), nf = function(t, r) {
  var n = he(t), o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), i = Dr(t, 0, r), a = Dr(t, 1, r), u = i && he(i), l = a && he(a), s = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + nt(i).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + nt(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && u.float && u.float !== "none") {
    var d = u.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === d) ? "vertical" : "horizontal";
  }
  return i && (u.display === "block" || u.display === "flex" || u.display === "table" || u.display === "grid" || s >= o && n[Yl] === "none" || a && n[Yl] === "none" && s + f > o) ? "vertical" : "horizontal";
}, Sv = function(t, r, n) {
  var o = n ? t.left : t.top, i = n ? t.right : t.bottom, a = n ? t.width : t.height, u = n ? r.left : r.top, l = n ? r.right : r.bottom, s = n ? r.width : r.height;
  return o === u || i === l || o + a / 2 === u + s / 2;
}, xv = function(t, r) {
  var n;
  return gi.some(function(o) {
    var i = o[Ct].options.emptyInsertThreshold;
    if (!(!i || Ts(o))) {
      var a = nt(o), u = t >= a.left - i && t <= a.right + i, l = r >= a.top - i && r <= a.bottom + i;
      if (u && l)
        return n = o;
    }
  }), n;
}, rf = function(t) {
  function r(i, a) {
    return function(u, l, s, f) {
      var d = u.options.group.name && l.options.group.name && u.options.group.name === l.options.group.name;
      if (i == null && (a || d))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (a && i === "clone")
        return i;
      if (typeof i == "function")
        return r(i(u, l, s, f), a)(u, l, s, f);
      var m = (a ? u : l).options.group.name;
      return i === !0 || typeof i == "string" && i === m || i.join && i.indexOf(m) > -1;
    };
  }
  var n = {}, o = t.group;
  (!o || ni(o) != "object") && (o = {
    name: o
  }), n.name = o.name, n.checkPull = r(o.pull, !0), n.checkPut = r(o.put), n.revertClone = o.revertClone, t.group = n;
}, of = function() {
  !tf && ge && he(ge, "display", "none");
}, af = function() {
  !tf && ge && he(ge, "display", "");
};
Ei && !Kc && document.addEventListener("click", function(e) {
  if (yi)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), yi = !1, !1;
}, !0);
var Wn = function(t) {
  if (ee) {
    t = t.touches ? t.touches[0] : t;
    var r = xv(t.clientX, t.clientY);
    if (r) {
      var n = {};
      for (var o in t)
        t.hasOwnProperty(o) && (n[o] = t[o]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[Ct]._onDragOver(n);
    }
  }
}, _v = function(t) {
  ee && ee.parentNode[Ct]._isOutsideThisEl(t.target);
};
function me(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = bn({}, t), e[Ct] = this;
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
      return nf(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, u) {
      a.setData("Text", u.textContent);
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
    supportPointer: me.supportPointer !== !1 && "PointerEvent" in window && (!no || Rs),
    emptyInsertThreshold: 5
  };
  ho.initializePlugins(this, e, r);
  for (var n in r)
    !(n in t) && (t[n] = r[n]);
  rf(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : wv, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? ke(e, "pointerdown", this._onTapStart) : (ke(e, "mousedown", this._onTapStart), ke(e, "touchstart", this._onTapStart)), this.nativeDraggable && (ke(e, "dragover", this), ke(e, "dragenter", this)), gi.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), bn(this, mv());
}
me.prototype = /** @lends Sortable.prototype */
{
  constructor: me,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (vr = null);
  },
  _getDirection: function(t, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, r, ee) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var r = this, n = this.el, o = this.options, i = o.preventOnFilter, a = t.type, u = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (u || t).target, s = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, f = o.filter;
      if (kv(n), !ee && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !s.isContentEditable && !(!this.nativeDraggable && no && l && l.tagName.toUpperCase() === "SELECT") && (l = Xt(l, o.draggable, n, !1), !(l && l.animated) && ri !== l)) {
        if (Sr = Vt(l), oo = Vt(l, o.draggable), typeof f == "function") {
          if (f.call(this, t, l, this)) {
            wt({
              sortable: r,
              rootEl: s,
              name: "filter",
              targetEl: l,
              toEl: n,
              fromEl: n
            }), At("filter", r, {
              evt: t
            }), i && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(d) {
          if (d = Xt(s, d.trim(), n, !1), d)
            return wt({
              sortable: r,
              rootEl: d,
              name: "filter",
              targetEl: l,
              fromEl: n,
              toEl: n
            }), At("filter", r, {
              evt: t
            }), !0;
        }), f)) {
          i && t.preventDefault();
          return;
        }
        o.handle && !Xt(s, o.handle, n, !1) || this._prepareDragStart(t, u, l);
      }
    }
  },
  _prepareDragStart: function(t, r, n) {
    var o = this, i = o.el, a = o.options, u = i.ownerDocument, l;
    if (n && !ee && n.parentNode === i) {
      var s = nt(n);
      if (Ue = i, ee = n, Ye = ee.parentNode, tr = ee.nextSibling, ri = n, jo = a.group, me.dragged = ee, Vn = {
        target: ee,
        clientX: (r || t).clientX,
        clientY: (r || t).clientY
      }, Kl = Vn.clientX - s.left, zl = Vn.clientY - s.top, this._lastX = (r || t).clientX, this._lastY = (r || t).clientY, ee.style["will-change"] = "all", l = function() {
        if (At("delayEnded", o, {
          evt: t
        }), me.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Vl && o.nativeDraggable && (ee.draggable = !0), o._triggerDragStart(t, r), wt({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), Nt(ee, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        Xc(ee, f.trim(), ra);
      }), ke(u, "dragover", Wn), ke(u, "mousemove", Wn), ke(u, "touchmove", Wn), a.supportPointer ? (ke(u, "pointerup", o._onDrop), !this.nativeDraggable && ke(u, "pointercancel", o._onDrop)) : (ke(u, "mouseup", o._onDrop), ke(u, "touchend", o._onDrop), ke(u, "touchcancel", o._onDrop)), Vl && this.nativeDraggable && (this.options.touchStartThreshold = 4, ee.draggable = !0), At("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || r) && (!this.nativeDraggable || !(po || Sn))) {
        if (me.eventCanceled) {
          this._onDrop();
          return;
        }
        a.supportPointer ? (ke(u, "pointerup", o._disableDelayedDrag), ke(u, "pointercancel", o._disableDelayedDrag)) : (ke(u, "mouseup", o._disableDelayedDrag), ke(u, "touchend", o._disableDelayedDrag), ke(u, "touchcancel", o._disableDelayedDrag)), ke(u, "mousemove", o._delayedDragTouchMoveHandler), ke(u, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && ke(u, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(l, a.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var r = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ee && ra(ee), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    Re(t, "mouseup", this._disableDelayedDrag), Re(t, "touchend", this._disableDelayedDrag), Re(t, "touchcancel", this._disableDelayedDrag), Re(t, "pointerup", this._disableDelayedDrag), Re(t, "pointercancel", this._disableDelayedDrag), Re(t, "mousemove", this._delayedDragTouchMoveHandler), Re(t, "touchmove", this._delayedDragTouchMoveHandler), Re(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, r) {
    r = r || t.pointerType == "touch" && t, !this.nativeDraggable || r ? this.options.supportPointer ? ke(document, "pointermove", this._onTouchMove) : r ? ke(document, "touchmove", this._onTouchMove) : ke(document, "mousemove", this._onTouchMove) : (ke(ee, "dragend", this), ke(Ue, "dragstart", this._onDragStart));
    try {
      document.selection ? ii(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, r) {
    if (gr = !1, Ue && ee) {
      At("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && ke(document, "dragover", _v);
      var n = this.options;
      !t && Nt(ee, n.dragClass, !1), Nt(ee, n.ghostClass, !0), me.active = this, t && this._appendGhost(), wt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Kt) {
      this._lastX = Kt.clientX, this._lastY = Kt.clientY, of();
      for (var t = document.elementFromPoint(Kt.clientX, Kt.clientY), r = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Kt.clientX, Kt.clientY), t !== r); )
        r = t;
      if (ee.parentNode[Ct]._isOutsideThisEl(t), r)
        do {
          if (r[Ct]) {
            var n = void 0;
            if (n = r[Ct]._onDragOver({
              clientX: Kt.clientX,
              clientY: Kt.clientY,
              target: t,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = r;
        } while (r = Yc(r));
      af();
    }
  },
  _onTouchMove: function(t) {
    if (Vn) {
      var r = this.options, n = r.fallbackTolerance, o = r.fallbackOffset, i = t.touches ? t.touches[0] : t, a = ge && Er(ge, !0), u = ge && a && a.a, l = ge && a && a.d, s = qo && vt && Gl(vt), f = (i.clientX - Vn.clientX + o.x) / (u || 1) + (s ? s[0] - na[0] : 0) / (u || 1), d = (i.clientY - Vn.clientY + o.y) / (l || 1) + (s ? s[1] - na[1] : 0) / (l || 1);
      if (!me.active && !gr) {
        if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (ge) {
        a ? (a.e += f - (ea || 0), a.f += d - (ta || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: d
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        he(ge, "webkitTransform", m), he(ge, "mozTransform", m), he(ge, "msTransform", m), he(ge, "transform", m), ea = f, ta = d, Kt = i;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ge) {
      var t = this.options.fallbackOnBody ? document.body : Ue, r = nt(ee, !0, qo, !0, t), n = this.options;
      if (qo) {
        for (vt = t; he(vt, "position") === "static" && he(vt, "transform") === "none" && vt !== document; )
          vt = vt.parentNode;
        vt !== document.body && vt !== document.documentElement ? (vt === document && (vt = ln()), r.top += vt.scrollTop, r.left += vt.scrollLeft) : vt = ln(), na = Gl(vt);
      }
      ge = ee.cloneNode(!0), Nt(ge, n.ghostClass, !1), Nt(ge, n.fallbackClass, !0), Nt(ge, n.dragClass, !0), he(ge, "transition", ""), he(ge, "transform", ""), he(ge, "box-sizing", "border-box"), he(ge, "margin", 0), he(ge, "top", r.top), he(ge, "left", r.left), he(ge, "width", r.width), he(ge, "height", r.height), he(ge, "opacity", "0.8"), he(ge, "position", qo ? "absolute" : "fixed"), he(ge, "zIndex", "100000"), he(ge, "pointerEvents", "none"), me.ghost = ge, t.appendChild(ge), he(ge, "transform-origin", Kl / parseInt(ge.style.width) * 100 + "% " + zl / parseInt(ge.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, r) {
    var n = this, o = t.dataTransfer, i = n.options;
    if (At("dragStart", this, {
      evt: t
    }), me.eventCanceled) {
      this._onDrop();
      return;
    }
    At("setupClone", this), me.eventCanceled || (He = Zc(ee), He.removeAttribute("id"), He.draggable = !1, He.style["will-change"] = "", this._hideClone(), Nt(He, this.options.chosenClass, !1), me.clone = He), n.cloneId = ii(function() {
      At("clone", n), !me.eventCanceled && (n.options.removeCloneOnHide || Ue.insertBefore(He, ee), n._hideClone(), wt({
        sortable: n,
        name: "clone"
      }));
    }), !r && Nt(ee, i.dragClass, !0), r ? (yi = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (Re(document, "mouseup", n._onDrop), Re(document, "touchend", n._onDrop), Re(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(n, o, ee)), ke(document, "drop", n), he(ee, "transform", "translateZ(0)")), gr = !0, n._dragStartId = ii(n._dragStarted.bind(n, r, t)), ke(document, "selectstart", n), Kr = !0, window.getSelection().removeAllRanges(), no && he(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var r = this.el, n = t.target, o, i, a, u = this.options, l = u.group, s = me.active, f = jo === l, d = u.sort, m = ft || s, v, h = this, p = !1;
    if (vs) return;
    function c(M, re) {
      At(M, h, cn({
        evt: t,
        isOwner: f,
        axis: v ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: i,
        canSort: d,
        fromSortable: m,
        target: n,
        completed: y,
        onMove: function(fe, xe) {
          return Lo(Ue, r, ee, o, fe, nt(fe), t, xe);
        },
        changed: S
      }, re));
    }
    function b() {
      c("dragOverAnimationCapture"), h.captureAnimationState(), h !== m && m.captureAnimationState();
    }
    function y(M) {
      return c("dragOverCompleted", {
        insertion: M
      }), M && (f ? s._hideClone() : s._showClone(h), h !== m && (Nt(ee, ft ? ft.options.ghostClass : s.options.ghostClass, !1), Nt(ee, u.ghostClass, !0)), ft !== h && h !== me.active ? ft = h : h === me.active && ft && (ft = null), m === h && (h._ignoreWhileAnimating = n), h.animateAll(function() {
        c("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === ee && !ee.animated || n === r && !n.animated) && (vr = null), !u.dragoverBubble && !t.rootEl && n !== document && (ee.parentNode[Ct]._isOutsideThisEl(t.target), !M && Wn(t)), !u.dragoverBubble && t.stopPropagation && t.stopPropagation(), p = !0;
    }
    function S() {
      Ft = Vt(ee), Tn = Vt(ee, u.draggable), wt({
        sortable: h,
        name: "change",
        toEl: r,
        newIndex: Ft,
        newDraggableIndex: Tn,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = Xt(n, u.draggable, r, !0), c("dragOver"), me.eventCanceled) return p;
    if (ee.contains(t.target) || n.animated && n.animatingX && n.animatingY || h._ignoreWhileAnimating === n)
      return y(!1);
    if (yi = !1, s && !u.disabled && (f ? d || (a = Ye !== Ue) : ft === this || (this.lastPutMode = jo.checkPull(this, s, ee, t)) && l.checkPut(this, s, ee, t))) {
      if (v = this._getDirection(t, n) === "vertical", o = nt(ee), c("dragOverValid"), me.eventCanceled) return p;
      if (a)
        return Ye = Ue, b(), this._hideClone(), c("revert"), me.eventCanceled || (tr ? Ue.insertBefore(ee, tr) : Ue.appendChild(ee)), y(!0);
      var x = Ts(r, u.draggable);
      if (!x || Cv(t, v, this) && !x.animated) {
        if (x === ee)
          return y(!1);
        if (x && r === t.target && (n = x), n && (i = nt(n)), Lo(Ue, r, ee, o, n, i, t, !!n) !== !1)
          return b(), x && x.nextSibling ? r.insertBefore(ee, x.nextSibling) : r.appendChild(ee), Ye = r, S(), y(!0);
      } else if (x && Av(t, v, this)) {
        var C = Dr(r, 0, u, !0);
        if (C === ee)
          return y(!1);
        if (n = C, i = nt(n), Lo(Ue, r, ee, o, n, i, t, !1) !== !1)
          return b(), r.insertBefore(ee, C), Ye = r, S(), y(!0);
      } else if (n.parentNode === r) {
        i = nt(n);
        var O = 0, D, $ = ee.parentNode !== r, j = !Sv(ee.animated && ee.toRect || o, n.animated && n.toRect || i, v), F = v ? "top" : "left", q = Hl(n, "top", "top") || Hl(ee, "top", "top"), z = q ? q.scrollTop : void 0;
        vr !== n && (D = i[F], ao = !1, Bo = !j && u.invertSwap || $), O = Dv(t, n, i, v, j ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, Bo, vr === n);
        var ue;
        if (O !== 0) {
          var H = Vt(ee);
          do
            H -= O, ue = Ye.children[H];
          while (ue && (he(ue, "display") === "none" || ue === ge));
        }
        if (O === 0 || ue === n)
          return y(!1);
        vr = n, io = O;
        var W = n.nextElementSibling, L = !1;
        L = O === 1;
        var J = Lo(Ue, r, ee, o, n, i, t, L);
        if (J !== !1)
          return (J === 1 || J === -1) && (L = J === 1), vs = !0, setTimeout(Ov, 30), b(), L && !W ? r.appendChild(ee) : n.parentNode.insertBefore(ee, L ? W : n), q && Qc(q, 0, z - q.scrollTop), Ye = ee.parentNode, D !== void 0 && !Bo && (oi = Math.abs(D - nt(n)[F])), S(), y(!0);
      }
      if (r.contains(ee))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Re(document, "mousemove", this._onTouchMove), Re(document, "touchmove", this._onTouchMove), Re(document, "pointermove", this._onTouchMove), Re(document, "dragover", Wn), Re(document, "mousemove", Wn), Re(document, "touchmove", Wn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    Re(t, "mouseup", this._onDrop), Re(t, "touchend", this._onDrop), Re(t, "pointerup", this._onDrop), Re(t, "pointercancel", this._onDrop), Re(t, "touchcancel", this._onDrop), Re(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var r = this.el, n = this.options;
    if (Ft = Vt(ee), Tn = Vt(ee, n.draggable), At("drop", this, {
      evt: t
    }), Ye = ee && ee.parentNode, Ft = Vt(ee), Tn = Vt(ee, n.draggable), me.eventCanceled) {
      this._nulling();
      return;
    }
    gr = !1, Bo = !1, ao = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ys(this.cloneId), ys(this._dragStartId), this.nativeDraggable && (Re(document, "drop", this), Re(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), no && he(document.body, "user-select", ""), he(ee, "transform", ""), t && (Kr && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), ge && ge.parentNode && ge.parentNode.removeChild(ge), (Ue === Ye || ft && ft.lastPutMode !== "clone") && He && He.parentNode && He.parentNode.removeChild(He), ee && (this.nativeDraggable && Re(ee, "dragend", this), ra(ee), ee.style["will-change"] = "", Kr && !gr && Nt(ee, ft ? ft.options.ghostClass : this.options.ghostClass, !1), Nt(ee, this.options.chosenClass, !1), wt({
      sortable: this,
      name: "unchoose",
      toEl: Ye,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Ue !== Ye ? (Ft >= 0 && (wt({
      rootEl: Ye,
      name: "add",
      toEl: Ye,
      fromEl: Ue,
      originalEvent: t
    }), wt({
      sortable: this,
      name: "remove",
      toEl: Ye,
      originalEvent: t
    }), wt({
      rootEl: Ye,
      name: "sort",
      toEl: Ye,
      fromEl: Ue,
      originalEvent: t
    }), wt({
      sortable: this,
      name: "sort",
      toEl: Ye,
      originalEvent: t
    })), ft && ft.save()) : Ft !== Sr && Ft >= 0 && (wt({
      sortable: this,
      name: "update",
      toEl: Ye,
      originalEvent: t
    }), wt({
      sortable: this,
      name: "sort",
      toEl: Ye,
      originalEvent: t
    })), me.active && ((Ft == null || Ft === -1) && (Ft = Sr, Tn = oo), wt({
      sortable: this,
      name: "end",
      toEl: Ye,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    At("nulling", this), Ue = ee = Ye = ge = tr = He = ri = Pn = Vn = Kt = Kr = Ft = Tn = Sr = oo = vr = io = ft = jo = me.dragged = me.ghost = me.clone = me.active = null, bi.forEach(function(t) {
      t.checked = !0;
    }), bi.length = ea = ta = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        ee && (this._onDragOver(t), Ev(t));
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
    for (var t = [], r, n = this.el.children, o = 0, i = n.length, a = this.options; o < i; o++)
      r = n[o], Xt(r, a.draggable, this.el, !1) && t.push(r.getAttribute(a.dataIdAttr) || Tv(r));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, r) {
    var n = {}, o = this.el;
    this.toArray().forEach(function(i, a) {
      var u = o.children[a];
      Xt(u, this.options.draggable, o, !1) && (n[i] = u);
    }, this), r && this.captureAnimationState(), t.forEach(function(i) {
      n[i] && (o.removeChild(n[i]), o.appendChild(n[i]));
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
    return Xt(t, r || this.options.draggable, this.el, !1);
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
    var o = ho.modifyOption(this, t, r);
    typeof o < "u" ? n[t] = o : n[t] = r, t === "group" && rf(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    At("destroy", this);
    var t = this.el;
    t[Ct] = null, Re(t, "mousedown", this._onTapStart), Re(t, "touchstart", this._onTapStart), Re(t, "pointerdown", this._onTapStart), this.nativeDraggable && (Re(t, "dragover", this), Re(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), gi.splice(gi.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Pn) {
      if (At("hideClone", this), me.eventCanceled) return;
      he(He, "display", "none"), this.options.removeCloneOnHide && He.parentNode && He.parentNode.removeChild(He), Pn = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Pn) {
      if (At("showClone", this), me.eventCanceled) return;
      ee.parentNode == Ue && !this.options.group.revertClone ? Ue.insertBefore(He, ee) : tr ? Ue.insertBefore(He, tr) : Ue.appendChild(He), this.options.group.revertClone && this.animate(ee, He), he(He, "display", ""), Pn = !1;
    }
  }
};
function Ev(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Lo(e, t, r, n, o, i, a, u) {
  var l, s = e[Ct], f = s.options.onMove, d;
  return window.CustomEvent && !Sn && !po ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = e, l.dragged = r, l.draggedRect = n, l.related = o || t, l.relatedRect = i || nt(t), l.willInsertAfter = u, l.originalEvent = a, e.dispatchEvent(l), f && (d = f.call(s, l, a)), d;
}
function ra(e) {
  e.draggable = !1;
}
function Ov() {
  vs = !1;
}
function Av(e, t, r) {
  var n = nt(Dr(r.el, 0, r.options, !0)), o = ef(r.el, r.options, ge), i = 10;
  return t ? e.clientX < o.left - i || e.clientY < n.top && e.clientX < n.right : e.clientY < o.top - i || e.clientY < n.bottom && e.clientX < n.left;
}
function Cv(e, t, r) {
  var n = nt(Ts(r.el, r.options.draggable)), o = ef(r.el, r.options, ge), i = 10;
  return t ? e.clientX > o.right + i || e.clientY > n.bottom && e.clientX > n.left : e.clientY > o.bottom + i || e.clientX > n.right && e.clientY > n.top;
}
function Dv(e, t, r, n, o, i, a, u) {
  var l = n ? e.clientY : e.clientX, s = n ? r.height : r.width, f = n ? r.top : r.left, d = n ? r.bottom : r.right, m = !1;
  if (!a) {
    if (u && oi < s * o) {
      if (!ao && (io === 1 ? l > f + s * i / 2 : l < d - s * i / 2) && (ao = !0), ao)
        m = !0;
      else if (io === 1 ? l < f + oi : l > d - oi)
        return -io;
    } else if (l > f + s * (1 - o) / 2 && l < d - s * (1 - o) / 2)
      return Rv(t);
  }
  return m = m || a, m && (l < f + s * i / 2 || l > d - s * i / 2) ? l > f + s / 2 ? 1 : -1 : 0;
}
function Rv(e) {
  return Vt(ee) < Vt(e) ? 1 : -1;
}
function Tv(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, r = t.length, n = 0; r--; )
    n += t.charCodeAt(r);
  return n.toString(36);
}
function kv(e) {
  bi.length = 0;
  for (var t = e.getElementsByTagName("input"), r = t.length; r--; ) {
    var n = t[r];
    n.checked && bi.push(n);
  }
}
function ii(e) {
  return setTimeout(e, 0);
}
function ys(e) {
  return clearTimeout(e);
}
Ei && ke(document, "touchmove", function(e) {
  (me.active || gr) && e.cancelable && e.preventDefault();
});
me.utils = {
  on: ke,
  off: Re,
  css: he,
  find: Xc,
  is: function(t, r) {
    return !!Xt(t, r, t, !1);
  },
  extend: pv,
  throttle: Jc,
  closest: Xt,
  toggleClass: Nt,
  clone: Zc,
  index: Vt,
  nextTick: ii,
  cancelNextTick: ys,
  detectDirection: nf,
  getChild: Dr,
  expando: Ct
};
me.get = function(e) {
  return e[Ct];
};
me.mount = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (me.utils = cn(cn({}, me.utils), n.utils)), ho.mount(n);
  });
};
me.create = function(e, t) {
  return new me(e, t);
};
me.version = fv;
var tt = [], zr, gs, bs = !1, oa, ia, wi, Yr;
function Pv() {
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
      this.sortable.nativeDraggable ? ke(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ke(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? ke(document, "touchmove", this._handleFallbackAutoScroll) : ke(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var n = r.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Re(document, "dragover", this._handleAutoScroll) : (Re(document, "pointermove", this._handleFallbackAutoScroll), Re(document, "touchmove", this._handleFallbackAutoScroll), Re(document, "mousemove", this._handleFallbackAutoScroll)), Xl(), ai(), hv();
    },
    nulling: function() {
      wi = gs = zr = bs = Yr = oa = ia = null, tt.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var o = this, i = (r.touches ? r.touches[0] : r).clientX, a = (r.touches ? r.touches[0] : r).clientY, u = document.elementFromPoint(i, a);
      if (wi = r, n || this.options.forceAutoScrollFallback || po || Sn || no) {
        aa(r, this.options, u, n);
        var l = $n(u, !0);
        bs && (!Yr || i !== oa || a !== ia) && (Yr && Xl(), Yr = setInterval(function() {
          var s = $n(document.elementFromPoint(i, a), !0);
          s !== l && (l = s, ai()), aa(r, o.options, s, n);
        }, 10), oa = i, ia = a);
      } else {
        if (!this.options.bubbleScroll || $n(u, !0) === ln()) {
          ai();
          return;
        }
        aa(r, this.options, $n(u, !1), !1);
      }
    }
  }, bn(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ai() {
  tt.forEach(function(e) {
    clearInterval(e.pid);
  }), tt = [];
}
function Xl() {
  clearInterval(Yr);
}
var aa = Jc(function(e, t, r, n) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, u = t.scrollSpeed, l = ln(), s = !1, f;
    gs !== r && (gs = r, ai(), zr = t.scroll, f = t.scrollFn, zr === !0 && (zr = $n(r, !0)));
    var d = 0, m = zr;
    do {
      var v = m, h = nt(v), p = h.top, c = h.bottom, b = h.left, y = h.right, S = h.width, x = h.height, C = void 0, O = void 0, D = v.scrollWidth, $ = v.scrollHeight, j = he(v), F = v.scrollLeft, q = v.scrollTop;
      v === l ? (C = S < D && (j.overflowX === "auto" || j.overflowX === "scroll" || j.overflowX === "visible"), O = x < $ && (j.overflowY === "auto" || j.overflowY === "scroll" || j.overflowY === "visible")) : (C = S < D && (j.overflowX === "auto" || j.overflowX === "scroll"), O = x < $ && (j.overflowY === "auto" || j.overflowY === "scroll"));
      var z = C && (Math.abs(y - o) <= a && F + S < D) - (Math.abs(b - o) <= a && !!F), ue = O && (Math.abs(c - i) <= a && q + x < $) - (Math.abs(p - i) <= a && !!q);
      if (!tt[d])
        for (var H = 0; H <= d; H++)
          tt[H] || (tt[H] = {});
      (tt[d].vx != z || tt[d].vy != ue || tt[d].el !== v) && (tt[d].el = v, tt[d].vx = z, tt[d].vy = ue, clearInterval(tt[d].pid), (z != 0 || ue != 0) && (s = !0, tt[d].pid = setInterval((function() {
        n && this.layer === 0 && me.active._onTouchMove(wi);
        var W = tt[this.layer].vy ? tt[this.layer].vy * u : 0, L = tt[this.layer].vx ? tt[this.layer].vx * u : 0;
        typeof f == "function" && f.call(me.dragged.parentNode[Ct], L, W, e, wi, tt[this.layer].el) !== "continue" || Qc(tt[this.layer].el, L, W);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && m !== l && (m = $n(m, !1)));
    bs = s;
  }
}, 30), sf = function(t) {
  var r = t.originalEvent, n = t.putSortable, o = t.dragEl, i = t.activeSortable, a = t.dispatchSortableEvent, u = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (r) {
    var s = n || i;
    u();
    var f = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, d = document.elementFromPoint(f.clientX, f.clientY);
    l(), s && !s.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: n
    }));
  }
};
function ks() {
}
ks.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var r = t.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var o = Dr(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(r, o) : this.sortable.el.appendChild(r), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: sf
};
bn(ks, {
  pluginName: "revertOnSpill"
});
function Ps() {
}
Ps.prototype = {
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable, o = n || this.sortable;
    o.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), o.animateAll();
  },
  drop: sf
};
bn(Ps, {
  pluginName: "removeOnSpill"
});
me.mount(new Pv());
me.mount(Ps, ks);
function Iv(e, t, r = {}) {
  let n;
  const { document: o = Th, ...i } = r, a = { onUpdate: (f) => {
    Mv(t, f.oldIndex, f.newIndex, f);
  } }, u = () => {
    const f = typeof e == "string" ? o?.querySelector(e) : wr(e);
    !f || n !== void 0 || (n = new me(f, {
      ...a,
      ...i
    }));
  }, l = () => {
    n?.destroy(), n = void 0;
  }, s = (f, d) => {
    if (d !== void 0) n?.option(f, d);
    else return n?.option(f);
  };
  return Dh(u), Vc(l), {
    stop: l,
    start: u,
    option: s
  };
}
function $v(e, t, r) {
  const n = e.children[r];
  e.insertBefore(t, n);
}
function Nv(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Mv(e, t, r, n = null) {
  n != null && (Nv(n.item), $v(n.from, n.item, t));
  const o = td(e), i = o ? [...mn(e)] : mn(e);
  if (r >= 0 && r < i.length) {
    const a = i.splice(t, 1)[0];
    xr(() => {
      i.splice(r, 0, a), o && (e.value = i);
    });
  }
}
var zt = {}, sa = {}, Jl;
function Oi() {
  return Jl || (Jl = 1, (function(e) {
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
  })(sa)), sa;
}
var qe = {}, Hn = {}, Ql;
function Is() {
  if (Ql) return Hn;
  Ql = 1;
  var e = Hn && Hn.__extends || /* @__PURE__ */ (function() {
    var r = function(n, o) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
        i.__proto__ = a;
      } || function(i, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
      }, r(n, o);
    };
    return function(n, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      r(n, o);
      function i() {
        this.constructor = n;
      }
      n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i());
    };
  })();
  Object.defineProperty(Hn, "__esModule", { value: !0 }), Hn.UnsupportedPlatformError = void 0;
  var t = (
    /** @class */
    (function(r) {
      e(n, r);
      function n(o) {
        var i = this, a = "This function is not supported in ".concat(o, " environment");
        return i = r.call(this, a) || this, Error.captureStackTrace && Error.captureStackTrace(i, n), i.name = "UnsupportedPlatformError", i.platform = o, Object.setPrototypeOf(i, n.prototype), i;
      }
      return n;
    })(Error)
  );
  return Hn.UnsupportedPlatformError = t, Hn;
}
var la, Zl;
function Fv() {
  if (Zl) return la;
  Zl = 1;
  function e() {
    this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
    for (let t = 0; t < arguments.length; t++)
      this.define(arguments[t]);
    this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
  }
  return e.prototype.define = function(t, r) {
    for (let n in t) {
      let o = t[n].map(function(i) {
        return i.toLowerCase();
      });
      n = n.toLowerCase();
      for (let i = 0; i < o.length; i++) {
        const a = o[i];
        if (a[0] !== "*") {
          if (!r && a in this._types)
            throw new Error(
              'Attempt to change mapping for "' + a + '" extension from "' + this._types[a] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + a + '" from the list of extensions for "' + n + '".'
            );
          this._types[a] = n;
        }
      }
      if (r || !this._extensions[n]) {
        const i = o[0];
        this._extensions[n] = i[0] !== "*" ? i : i.substr(1);
      }
    }
  }, e.prototype.getType = function(t) {
    t = String(t);
    let r = t.replace(/^.*[/\\]/, "").toLowerCase(), n = r.replace(/^.*\./, "").toLowerCase(), o = r.length < t.length;
    return (n.length < r.length - 1 || !o) && this._types[n] || null;
  }, e.prototype.getExtension = function(t) {
    return t = /^\s*([^;\s]*)/.test(t) && RegExp.$1, t && this._extensions[t.toLowerCase()] || null;
  }, la = e, la;
}
var ua, eu;
function jv() {
  return eu || (eu = 1, ua = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }), ua;
}
var ca, tu;
function Bv() {
  if (tu) return ca;
  tu = 1;
  let e = Fv();
  return ca = new e(jv()), ca;
}
const qv = "@kintone/rest-api-client", Lv = "6.0.0", Uv = "Kintone REST API client for JavaScript", Vv = ["kintone", "rest", "api-client"], Wv = "https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme", Hv = { url: "https://github.com/kintone/js-sdk/issues" }, Gv = { type: "git", url: "git+https://github.com/kintone/js-sdk.git", directory: "packages/rest-api-client" }, Kv = "MIT", zv = { name: "Cybozu, Inc.", url: "https://cybozu.co.jp" }, Yv = { ".": { types: { import: "./esm/src/index.d.ts", require: "./lib/src/index.d.ts", default: "./lib/src/index.d.ts" }, node: { import: "./index.mjs", require: "./lib/src/index.js", default: "./lib/src/index.js" }, browser: "./lib/src/index.browser.js" }, "./package.json": "./package.json" }, Xv = "lib/src/index.js", Jv = "esm/src/index.js", Qv = "lib/src/index.browser.js", Zv = "lib/src/index.d.ts", ey = ["esm", "lib", "umd", "index.mjs"], ty = { prebuild: "pnpm clean", build: "tsc --build --force", postbuild: "run-p build:*", "build:umd_dev": "rollup -c --environment BUILD:development", "build:umd_prod": "rollup -c --environment BUILD:production", clean: "rimraf lib esm umd", fix: "pnpm lint --fix", lint: "eslint 'src/**/*.ts' --max-warnings 0", prepublishOnly: "run-p build:umd_*", start: "pnpm build --watch", test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest", "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand" }, ny = { axios: "^1.12.2", "core-js": "^3.45.1", "form-data": "^4.0.4", "js-base64": "^3.7.8", mime: "^3.0.0", qs: "^6.14.0" }, ry = { "@rollup/plugin-babel": "^6.0.4", "@rollup/plugin-commonjs": "^26.0.3", "@rollup/plugin-json": "^6.1.0", "@rollup/plugin-node-resolve": "^15.3.1", "@rollup/plugin-terser": "^0.4.4", "@types/core-js": "^2.5.8", "@types/js-base64": "^3.3.1", "@types/mime": "^3.0.4", "@types/qs": "^6.14.0", "babel-loader": "^9.2.1", "cross-env": "^7.0.3", rimraf: "^5.0.10", rollup: "^4.52.3", "rollup-plugin-ecma-version-validator": "^0.2.13", "rollup-plugin-license": "^3.6.0", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-polyfill-node": "^0.13.0", vite: "^5.4.20", webpack: "^5.101.3", "webpack-cli": "^5.1.4" }, oy = { node: ">=20" }, iy = { access: "public" }, ay = {
  name: qv,
  version: Lv,
  description: Uv,
  keywords: Vv,
  homepage: Wv,
  bugs: Hv,
  repository: Gv,
  license: Kv,
  author: zv,
  exports: Yv,
  main: Xv,
  module: Jv,
  browser: Qv,
  types: Zv,
  files: ey,
  scripts: ty,
  dependencies: ny,
  devDependencies: ry,
  engines: oy,
  publishConfig: iy
};
var nu;
function sy() {
  if (nu) return qe;
  nu = 1;
  var e = qe && qe.__awaiter || function(h, p, c, b) {
    function y(S) {
      return S instanceof c ? S : new c(function(x) {
        x(S);
      });
    }
    return new (c || (c = Promise))(function(S, x) {
      function C($) {
        try {
          D(b.next($));
        } catch (j) {
          x(j);
        }
      }
      function O($) {
        try {
          D(b.throw($));
        } catch (j) {
          x(j);
        }
      }
      function D($) {
        $.done ? S($.value) : y($.value).then(C, O);
      }
      D((b = b.apply(h, p || [])).next());
    });
  }, t = qe && qe.__generator || function(h, p) {
    var c = { label: 0, sent: function() {
      if (S[0] & 1) throw S[1];
      return S[1];
    }, trys: [], ops: [] }, b, y, S, x = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return x.next = C(0), x.throw = C(1), x.return = C(2), typeof Symbol == "function" && (x[Symbol.iterator] = function() {
      return this;
    }), x;
    function C(D) {
      return function($) {
        return O([D, $]);
      };
    }
    function O(D) {
      if (b) throw new TypeError("Generator is already executing.");
      for (; x && (x = 0, D[0] && (c = 0)), c; ) try {
        if (b = 1, y && (S = D[0] & 2 ? y.return : D[0] ? y.throw || ((S = y.return) && S.call(y), 0) : y.next) && !(S = S.call(y, D[1])).done) return S;
        switch (y = 0, S && (D = [D[0] & 2, S.value]), D[0]) {
          case 0:
          case 1:
            S = D;
            break;
          case 4:
            return c.label++, { value: D[1], done: !1 };
          case 5:
            c.label++, y = D[1], D = [0];
            continue;
          case 7:
            D = c.ops.pop(), c.trys.pop();
            continue;
          default:
            if (S = c.trys, !(S = S.length > 0 && S[S.length - 1]) && (D[0] === 6 || D[0] === 2)) {
              c = 0;
              continue;
            }
            if (D[0] === 3 && (!S || D[1] > S[0] && D[1] < S[3])) {
              c.label = D[1];
              break;
            }
            if (D[0] === 6 && c.label < S[1]) {
              c.label = S[1], S = D;
              break;
            }
            if (S && c.label < S[2]) {
              c.label = S[2], c.ops.push(D);
              break;
            }
            S[2] && c.ops.pop(), c.trys.pop();
            continue;
        }
        D = p.call(h, c);
      } catch ($) {
        D = [6, $], y = 0;
      } finally {
        b = S = 0;
      }
      if (D[0] & 5) throw D[1];
      return { value: D[0] ? D[1] : void 0, done: !0 };
    }
  }, r = qe && qe.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getVersion = qe.buildBaseUrl = qe.buildFormDataValue = qe.buildHeaders = qe.buildPlatformDependentConfig = qe.getDefaultAuth = qe.getRequestToken = qe.readFileFromPath = void 0;
  var n = Is(), o = r(Bv()), i = r(ay), a = function(h) {
    throw new n.UnsupportedPlatformError("Browser");
  };
  qe.readFileFromPath = a;
  var u = function() {
    return e(void 0, void 0, void 0, function() {
      var h, p;
      return t(this, function(c) {
        if (typeof kintone == "object" && kintone !== null && typeof kintone.getRequestToken == "function")
          return [2, kintone.getRequestToken()];
        if (typeof garoon == "object" && garoon !== null && typeof ((p = (h = garoon.connect) === null || h === void 0 ? void 0 : h.kintone) === null || p === void 0 ? void 0 : p.getRequestToken) == "function")
          return [2, garoon.connect.kintone.getRequestToken()];
        throw new Error("session authentication must specify a request token");
      });
    });
  };
  qe.getRequestToken = u;
  var l = function() {
    return {
      type: "session"
    };
  };
  qe.getDefaultAuth = l;
  var s = function() {
    return {};
  };
  qe.buildPlatformDependentConfig = s;
  var f = function() {
    return {};
  };
  qe.buildHeaders = f;
  var d = function(h, p) {
    var c = {};
    return p && (c.type = o.default.getType(p) || void 0), new Blob([h], c);
  };
  qe.buildFormDataValue = d;
  var m = function(h) {
    if (h)
      return h;
    if (location === void 0)
      throw new Error("The baseUrl parameter is required for this environment");
    var p = location.host, c = location.protocol;
    return "".concat(c, "//").concat(p);
  };
  qe.buildBaseUrl = m;
  var v = function() {
    return i.default.version;
  };
  return qe.getVersion = v, qe;
}
var Gn = {}, Yt = {}, Kn = {}, Vr = {}, ru;
function ly() {
  if (ru) return Vr;
  ru = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.buildPath = void 0;
  var e = function(t) {
    var r = t.endpointName, n = t.guestSpaceId, o = t.preview, i = n !== void 0 ? "/guest/".concat(n) : "", a = o ? "/preview" : "";
    return "/k".concat(i, "/v1").concat(a, "/").concat(r, ".json");
  };
  return Vr.buildPath = e, Vr;
}
var ou;
function Pr() {
  if (ou) return Kn;
  ou = 1;
  var e = Kn && Kn.__assign || function() {
    return e = Object.assign || function(n) {
      for (var o, i = 1, a = arguments.length; i < a; i++) {
        o = arguments[i];
        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (n[u] = o[u]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Kn, "__esModule", { value: !0 }), Kn.BaseClient = void 0;
  var t = ly(), r = (
    /** @class */
    (function() {
      function n(o, i) {
        this.client = o, this.guestSpaceId = i;
      }
      return n.prototype.buildPathWithGuestSpaceId = function(o) {
        return (0, t.buildPath)(e(e({}, o), { guestSpaceId: this.guestSpaceId }));
      }, n.prototype.buildPath = function(o) {
        return (0, t.buildPath)(o);
      }, n;
    })()
  );
  return Kn.BaseClient = r, Kn;
}
var iu;
function uy() {
  if (iu) return Yt;
  iu = 1;
  var e = Yt && Yt.__extends || /* @__PURE__ */ (function() {
    var i = function(a, u) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, s) {
        l.__proto__ = s;
      } || function(l, s) {
        for (var f in s) Object.prototype.hasOwnProperty.call(s, f) && (l[f] = s[f]);
      }, i(a, u);
    };
    return function(a, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      i(a, u);
      function l() {
        this.constructor = a;
      }
      a.prototype = u === null ? Object.create(u) : (l.prototype = u.prototype, new l());
    };
  })(), t = Yt && Yt.__assign || function() {
    return t = Object.assign || function(i) {
      for (var a, u = 1, l = arguments.length; u < l; u++) {
        a = arguments[u];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (i[s] = a[s]);
      }
      return i;
    }, t.apply(this, arguments);
  }, r = Yt && Yt.__rest || function(i, a) {
    var u = {};
    for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && a.indexOf(l) < 0 && (u[l] = i[l]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, l = Object.getOwnPropertySymbols(i); s < l.length; s++)
        a.indexOf(l[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[s]) && (u[l[s]] = i[l[s]]);
    return u;
  };
  Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.BulkRequestClient = void 0;
  var n = Pr(), o = (
    /** @class */
    (function(i) {
      e(a, i);
      function a(u, l) {
        var s = i.call(this, u, l) || this;
        return s.REQUESTS_LENGTH_LIMIT = 20, s;
      }
      return a.prototype.send = function(u) {
        var l = this, s = u.requests, f = s.map(function(m) {
          if ("endpointName" in m) {
            var v = m.endpointName, h = r(m, ["endpointName"]);
            return t({ api: l.buildPathWithGuestSpaceId({ endpointName: v }) }, h);
          }
          return m;
        }), d = this.buildPathWithGuestSpaceId({
          endpointName: "bulkRequest"
        });
        return this.client.post(d, { requests: f });
      }, a;
    })(n.BaseClient)
  );
  return Yt.BulkRequestClient = o, Yt;
}
var gt = {}, au;
function cy() {
  if (au) return gt;
  au = 1;
  var e = gt && gt.__extends || /* @__PURE__ */ (function() {
    var u = function(l, s) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, d) {
        f.__proto__ = d;
      } || function(f, d) {
        for (var m in d) Object.prototype.hasOwnProperty.call(d, m) && (f[m] = d[m]);
      }, u(l, s);
    };
    return function(l, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      u(l, s);
      function f() {
        this.constructor = l;
      }
      l.prototype = s === null ? Object.create(s) : (f.prototype = s.prototype, new f());
    };
  })(), t = gt && gt.__assign || function() {
    return t = Object.assign || function(u) {
      for (var l, s = 1, f = arguments.length; s < f; s++) {
        l = arguments[s];
        for (var d in l) Object.prototype.hasOwnProperty.call(l, d) && (u[d] = l[d]);
      }
      return u;
    }, t.apply(this, arguments);
  }, r = gt && gt.__awaiter || function(u, l, s, f) {
    function d(m) {
      return m instanceof s ? m : new s(function(v) {
        v(m);
      });
    }
    return new (s || (s = Promise))(function(m, v) {
      function h(b) {
        try {
          c(f.next(b));
        } catch (y) {
          v(y);
        }
      }
      function p(b) {
        try {
          c(f.throw(b));
        } catch (y) {
          v(y);
        }
      }
      function c(b) {
        b.done ? m(b.value) : d(b.value).then(h, p);
      }
      c((f = f.apply(u, l || [])).next());
    });
  }, n = gt && gt.__generator || function(u, l) {
    var s = { label: 0, sent: function() {
      if (m[0] & 1) throw m[1];
      return m[1];
    }, trys: [], ops: [] }, f, d, m, v = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return v.next = h(0), v.throw = h(1), v.return = h(2), typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(c) {
      return function(b) {
        return p([c, b]);
      };
    }
    function p(c) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; v && (v = 0, c[0] && (s = 0)), s; ) try {
        if (f = 1, d && (m = c[0] & 2 ? d.return : c[0] ? d.throw || ((m = d.return) && m.call(d), 0) : d.next) && !(m = m.call(d, c[1])).done) return m;
        switch (d = 0, m && (c = [c[0] & 2, m.value]), c[0]) {
          case 0:
          case 1:
            m = c;
            break;
          case 4:
            return s.label++, { value: c[1], done: !1 };
          case 5:
            s.label++, d = c[1], c = [0];
            continue;
          case 7:
            c = s.ops.pop(), s.trys.pop();
            continue;
          default:
            if (m = s.trys, !(m = m.length > 0 && m[m.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              s = 0;
              continue;
            }
            if (c[0] === 3 && (!m || c[1] > m[0] && c[1] < m[3])) {
              s.label = c[1];
              break;
            }
            if (c[0] === 6 && s.label < m[1]) {
              s.label = m[1], m = c;
              break;
            }
            if (m && s.label < m[2]) {
              s.label = m[2], s.ops.push(c);
              break;
            }
            m[2] && s.ops.pop(), s.trys.pop();
            continue;
        }
        c = l.call(u, s);
      } catch (b) {
        c = [6, b], d = 0;
      } finally {
        f = m = 0;
      }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
  }, o = gt && gt.__rest || function(u, l) {
    var s = {};
    for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && l.indexOf(f) < 0 && (s[f] = u[f]);
    if (u != null && typeof Object.getOwnPropertySymbols == "function")
      for (var d = 0, f = Object.getOwnPropertySymbols(u); d < f.length; d++)
        l.indexOf(f[d]) < 0 && Object.prototype.propertyIsEnumerable.call(u, f[d]) && (s[f[d]] = u[f[d]]);
    return s;
  };
  Object.defineProperty(gt, "__esModule", { value: !0 }), gt.AppClient = void 0;
  var i = Pr(), a = (
    /** @class */
    (function(u) {
      e(l, u);
      function l() {
        return u !== null && u.apply(this, arguments) || this;
      }
      return l.prototype.getFormFields = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: f
        });
        return this.client.get(m, t({}, d));
      }, l.prototype.addFormFields = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.post(f, s);
      }, l.prototype.updateFormFields = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.deleteFormFields = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.delete(f, s);
      }, l.prototype.getFormLayout = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: f
        });
        return this.client.get(m, t({}, d));
      }, l.prototype.updateFormLayout = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getViews = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: f
        });
        return this.client.get(m, d);
      }, l.prototype.updateViews = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getApp = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app"
        });
        return this.client.get(f, s);
      }, l.prototype.getApps = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "apps"
        });
        return this.client.get(f, s);
      }, l.prototype.addApp = function(s) {
        return r(this, void 0, void 0, function() {
          var f, d, m, v, h;
          return n(this, function(p) {
            switch (p.label) {
              case 0:
                return f = s.name, d = s.space, m = this.buildPathWithGuestSpaceId({
                  endpointName: "app",
                  preview: !0
                }), d ? (v = this.buildPathWithGuestSpaceId({
                  endpointName: "space"
                }), [4, this.client.get(v, {
                  id: d
                })]) : [3, 2];
              case 1:
                return h = p.sent().defaultThread, [2, this.client.post(m, t(t({}, s), { thread: h }))];
              case 2:
                return [2, this.client.post(m, { name: f })];
            }
          });
        });
      }, l.prototype.getAppSettings = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: f
        });
        return this.client.get(m, d);
      }, l.prototype.updateAppSettings = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getProcessManagement = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: f
        });
        return this.client.get(m, d);
      }, l.prototype.updateProcessManagement = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getDeployStatus = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.get(f, s);
      }, l.prototype.deployApp = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.post(f, s);
      }, l.prototype.getFieldAcl = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: f
        });
        return this.client.get(m, t({}, d));
      }, l.prototype.updateFieldAcl = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getAppAcl = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: f
        });
        return this.client.get(m, t({}, d));
      }, l.prototype.updateAppAcl = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.evaluateRecordsAcl = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "records/acl/evaluate"
        });
        return this.client.get(f, s);
      }, l.prototype.getRecordAcl = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: f
        });
        return this.client.get(m, t({}, d));
      }, l.prototype.updateRecordAcl = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getAppCustomize = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: f
        });
        return this.client.get(m, t({}, d));
      }, l.prototype.updateAppCustomize = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getGeneralNotifications = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: f
        });
        return this.client.get(m, t({}, d));
      }, l.prototype.updateGeneralNotifications = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getPerRecordNotifications = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: f
        });
        return this.client.get(m, d);
      }, l.prototype.updatePerRecordNotifications = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getReminderNotifications = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: f
        });
        return this.client.get(m, d);
      }, l.prototype.updateReminderNotifications = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getReports = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: f
        });
        return this.client.get(m, d);
      }, l.prototype.updateReports = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getAppActions = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: f
        });
        return this.client.get(m, d);
      }, l.prototype.updateAppActions = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.getAdminNotes = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: f
        });
        return this.client.get(m, d);
      }, l.prototype.updateAdminNotes = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: !0
        });
        return this.client.put(f, s);
      }, l.prototype.move = function(s) {
        var f = this.buildPath({
          endpointName: "app/move"
        });
        return this.client.post(f, s);
      }, l.prototype.getPlugins = function(s) {
        var f = s.preview, d = o(s, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: f
        });
        return this.client.get(m, d);
      }, l.prototype.addPlugins = function(s) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: !0
        });
        return this.client.post(f, s);
      }, l;
    })(i.BaseClient)
  );
  return gt.AppClient = a, gt;
}
var ut = {}, zn = {}, Yn = {}, su;
function fy() {
  if (su) return Yn;
  su = 1;
  var e = Yn && Yn.__extends || /* @__PURE__ */ (function() {
    var r = function(n, o) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
        i.__proto__ = a;
      } || function(i, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
      }, r(n, o);
    };
    return function(n, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      r(n, o);
      function i() {
        this.constructor = n;
      }
      n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i());
    };
  })();
  Object.defineProperty(Yn, "__esModule", { value: !0 }), Yn.KintoneAbortSearchError = void 0;
  var t = (
    /** @class */
    (function(r) {
      e(n, r);
      function n(o) {
        var i = r.call(this, o) || this;
        return i.name = "KintoneAbortSearchError", i.message = o, Object.setPrototypeOf(i, n.prototype), i;
      }
      return n;
    })(Error)
  );
  return Yn.KintoneAbortSearchError = t, Yn;
}
var Xn = {}, lu;
function dy() {
  if (lu) return Xn;
  lu = 1;
  var e = Xn && Xn.__extends || /* @__PURE__ */ (function() {
    var r = function(n, o) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
        i.__proto__ = a;
      } || function(i, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
      }, r(n, o);
    };
    return function(n, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      r(n, o);
      function i() {
        this.constructor = n;
      }
      n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i());
    };
  })();
  Object.defineProperty(Xn, "__esModule", { value: !0 }), Xn.KintoneAllRecordsError = void 0;
  var t = (
    /** @class */
    (function(r) {
      e(n, r);
      function n(o, i, a, u, l) {
        var s = this, f = a - i.length, d = n.extractErrorIndex(f, u, l), m = n.buildErrorMessage(f, a, d);
        return s = r.call(this, m) || this, s.name = "KintoneAllRecordsError", s.processedRecordsResult = o, s.unprocessedRecords = i, s.error = u, s.errorIndex = d, s.message = m, s.numOfProcessedRecords = f, s.numOfAllRecords = a, Object.setPrototypeOf(s, n.prototype), s;
      }
      return n.parseErrorIndex = function(o) {
        var i = [];
        return Object.keys(o).forEach(function(a) {
          var u = a.match(/records\[(\d+)\]/);
          u && i.push(Number(u[1]));
        }), i.length > 0 ? Math.min.apply(Math, i) : null;
      }, n.extractErrorIndex = function(o, i, a) {
        if (i.bulkRequestIndex !== void 0 && i.errors) {
          var u = n.parseErrorIndex(i.errors);
          if (u !== null)
            return o + i.bulkRequestIndex * a + u;
        }
      }, n.buildErrorMessage = function(o, i, a) {
        var u = "";
        return a !== void 0 && (u = "An error occurred at records[".concat(a, "]. ")), u += "".concat(o, "/").concat(i, " records are processed successfully"), u;
      }, n;
    })(Error)
  );
  return Xn.KintoneAllRecordsError = t, Xn;
}
var Jn = {}, uu;
function py() {
  if (uu) return Jn;
  uu = 1;
  var e = Jn && Jn.__extends || /* @__PURE__ */ (function() {
    var r = function(n, o) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
        i.__proto__ = a;
      } || function(i, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
      }, r(n, o);
    };
    return function(n, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      r(n, o);
      function i() {
        this.constructor = n;
      }
      n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i());
    };
  })();
  Object.defineProperty(Jn, "__esModule", { value: !0 }), Jn.KintoneRestAPIError = void 0;
  var t = (
    /** @class */
    (function(r) {
      e(n, r);
      function n(o) {
        var i = this, a = n.buildErrorResponseDateWithIndex(o), u = a.data, l = a.bulkRequestIndex;
        return i = r.call(this, u.message) || this, i.name = "KintoneRestAPIError", i.id = u.id, i.code = u.code, i.errors = u.errors, i.status = o.status, i.bulkRequestIndex = l, i.headers = o.headers, i.message = "[".concat(o.status, "] [").concat(i.code, "] ").concat(i.message, " (").concat(i.id, ")"), Error.captureStackTrace && Error.captureStackTrace(i, n), Object.setPrototypeOf(i, n.prototype), i;
      }
      return n.findErrorResponseDataWithIndex = function(o) {
        for (var i = 0; i < o.length; i++)
          if (Object.keys(o[i]).length !== 0) {
            var a = o[i];
            return { data: a, bulkRequestIndex: i };
          }
        throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
      }, n.buildErrorResponseDateWithIndex = function(o) {
        return "results" in o.data ? n.findErrorResponseDataWithIndex(o.data.results) : { data: o.data };
      }, n;
    })(Error)
  );
  return Jn.KintoneRestAPIError = t, Jn;
}
var cu;
function $s() {
  return cu || (cu = 1, (function(e) {
    var t = zn && zn.__createBinding || (Object.create ? (function(n, o, i, a) {
      a === void 0 && (a = i);
      var u = Object.getOwnPropertyDescriptor(o, i);
      (!u || ("get" in u ? !o.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
        return o[i];
      } }), Object.defineProperty(n, a, u);
    }) : (function(n, o, i, a) {
      a === void 0 && (a = i), n[a] = o[i];
    })), r = zn && zn.__exportStar || function(n, o) {
      for (var i in n) i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && t(o, n, i);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), r(fy(), e), r(dy(), e), r(py(), e);
  })(zn)), zn;
}
var fu;
function hy() {
  if (fu) return ut;
  fu = 1;
  var e = ut && ut.__extends || /* @__PURE__ */ (function() {
    var v = function(h, p) {
      return v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, b) {
        c.__proto__ = b;
      } || function(c, b) {
        for (var y in b) Object.prototype.hasOwnProperty.call(b, y) && (c[y] = b[y]);
      }, v(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      v(h, p);
      function c() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (c.prototype = p.prototype, new c());
    };
  })(), t = ut && ut.__assign || function() {
    return t = Object.assign || function(v) {
      for (var h, p = 1, c = arguments.length; p < c; p++) {
        h = arguments[p];
        for (var b in h) Object.prototype.hasOwnProperty.call(h, b) && (v[b] = h[b]);
      }
      return v;
    }, t.apply(this, arguments);
  }, r = ut && ut.__awaiter || function(v, h, p, c) {
    function b(y) {
      return y instanceof p ? y : new p(function(S) {
        S(y);
      });
    }
    return new (p || (p = Promise))(function(y, S) {
      function x(D) {
        try {
          O(c.next(D));
        } catch ($) {
          S($);
        }
      }
      function C(D) {
        try {
          O(c.throw(D));
        } catch ($) {
          S($);
        }
      }
      function O(D) {
        D.done ? y(D.value) : b(D.value).then(x, C);
      }
      O((c = c.apply(v, h || [])).next());
    });
  }, n = ut && ut.__generator || function(v, h) {
    var p = { label: 0, sent: function() {
      if (y[0] & 1) throw y[1];
      return y[1];
    }, trys: [], ops: [] }, c, b, y, S = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return S.next = x(0), S.throw = x(1), S.return = x(2), typeof Symbol == "function" && (S[Symbol.iterator] = function() {
      return this;
    }), S;
    function x(O) {
      return function(D) {
        return C([O, D]);
      };
    }
    function C(O) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; S && (S = 0, O[0] && (p = 0)), p; ) try {
        if (c = 1, b && (y = O[0] & 2 ? b.return : O[0] ? b.throw || ((y = b.return) && y.call(b), 0) : b.next) && !(y = y.call(b, O[1])).done) return y;
        switch (b = 0, y && (O = [O[0] & 2, y.value]), O[0]) {
          case 0:
          case 1:
            y = O;
            break;
          case 4:
            return p.label++, { value: O[1], done: !1 };
          case 5:
            p.label++, b = O[1], O = [0];
            continue;
          case 7:
            O = p.ops.pop(), p.trys.pop();
            continue;
          default:
            if (y = p.trys, !(y = y.length > 0 && y[y.length - 1]) && (O[0] === 6 || O[0] === 2)) {
              p = 0;
              continue;
            }
            if (O[0] === 3 && (!y || O[1] > y[0] && O[1] < y[3])) {
              p.label = O[1];
              break;
            }
            if (O[0] === 6 && p.label < y[1]) {
              p.label = y[1], y = O;
              break;
            }
            if (y && p.label < y[2]) {
              p.label = y[2], p.ops.push(O);
              break;
            }
            y[2] && p.ops.pop(), p.trys.pop();
            continue;
        }
        O = h.call(v, p);
      } catch (D) {
        O = [6, D], b = 0;
      } finally {
        c = y = 0;
      }
      if (O[0] & 5) throw O[1];
      return { value: O[0] ? O[1] : void 0, done: !0 };
    }
  }, o = ut && ut.__rest || function(v, h) {
    var p = {};
    for (var c in v) Object.prototype.hasOwnProperty.call(v, c) && h.indexOf(c) < 0 && (p[c] = v[c]);
    if (v != null && typeof Object.getOwnPropertySymbols == "function")
      for (var b = 0, c = Object.getOwnPropertySymbols(v); b < c.length; b++)
        h.indexOf(c[b]) < 0 && Object.prototype.propertyIsEnumerable.call(v, c[b]) && (p[c[b]] = v[c[b]]);
    return p;
  }, i = ut && ut.__spreadArray || function(v, h, p) {
    if (p || arguments.length === 2) for (var c = 0, b = h.length, y; c < b; c++)
      (y || !(c in h)) && (y || (y = Array.prototype.slice.call(h, 0, c)), y[c] = h[c]);
    return v.concat(y || Array.prototype.slice.call(h));
  };
  Object.defineProperty(ut, "__esModule", { value: !0 }), ut.RecordClient = void 0;
  var a = $s(), u = Pr(), l = 100, s = 100, f = 100, d = 500, m = (
    /** @class */
    (function(v) {
      e(h, v);
      function h(p, c, b) {
        var y = v.call(this, p, b) || this;
        return y.bulkRequestClient = c, y.didWarnMaximumOffsetValue = !1, y;
      }
      return h.prototype.getRecord = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.get(c, p);
      }, h.prototype.addRecord = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.post(c, p);
      }, h.prototype.updateRecord = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.put(c, p);
      }, h.prototype.upsertRecord = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b, y, S, x, C;
          return n(this, function(O) {
            switch (O.label) {
              case 0:
                return c = p.app, b = p.updateKey, y = p.record, [4, this.getRecords({
                  app: c,
                  query: "".concat(b.field, ' = "').concat(b.value, '"')
                })];
              case 1:
                return S = O.sent().records, S.length > 0 ? S[0].$id.type !== "__ID__" ? [3, 3] : [4, this.updateRecord(p)] : [3, 4];
              case 2:
                return x = O.sent().revision, [2, { id: S[0].$id.value, revision: x }];
              case 3:
                throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
              case 4:
                return [2, this.addRecord({
                  app: c,
                  record: Object.assign({}, y, (C = {}, C[b.field] = { value: b.value }, C))
                })];
            }
          });
        });
      }, h.prototype.getRecords = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return c = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.get(c, p)];
              case 1:
                return b = y.sent(), this.warnMaximumOffsetValueIfNeeded(p.query), [2, b];
            }
          });
        });
      }, h.prototype.warnMaximumOffsetValueIfNeeded = function(p) {
        if (p) {
          var c = /offset\s+(\d+)/i, b = p.match(c);
          !this.didWarnMaximumOffsetValue && b && Number(b[1]) > 1e4 && (this.didWarnMaximumOffsetValue = !0, console.warn("Warning: The maximum offset value will be limited to 10,000 in the future. Please use `createCursor()` and `getRecordsByCursor()` instead."));
        }
      }, h.prototype.addRecords = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b, y, S;
          return n(this, function(x) {
            switch (x.label) {
              case 0:
                return c = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.post(c, p)];
              case 1:
                return b = x.sent(), y = b.ids, S = b.revisions, [2, {
                  ids: y,
                  revisions: S,
                  records: y.map(function(C, O) {
                    return { id: C, revision: S[O] };
                  })
                }];
            }
          });
        });
      }, h.prototype.updateRecords = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.put(c, p);
      }, h.prototype.deleteRecords = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.delete(c, p);
      }, h.prototype.createCursor = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.post(c, p);
      }, h.prototype.getRecordsByCursor = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.get(c, p);
      }, h.prototype.deleteCursor = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.delete(c, p);
      }, h.prototype.getAllRecords = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b, y, S, x, C, O;
          return n(this, function(D) {
            return c = p.condition, b = p.orderBy, y = p.withCursor, S = y === void 0 ? !0 : y, x = o(p, ["condition", "orderBy", "withCursor"]), b ? S ? (C = c ? "".concat(c, " ") : "", O = "".concat(C).concat(b ? "order by ".concat(b) : ""), [2, this.getAllRecordsWithCursor(t(t({}, x), { query: O }))]) : [2, this.getAllRecordsWithOffset(t(t({}, x), { orderBy: b, condition: c }))] : [2, this.getAllRecordsWithId(t(t({}, x), { condition: c }))];
          });
        });
      }, h.prototype.getAllRecordsWithId = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b, y, S, x, C, O, D, $, j;
          return n(this, function(F) {
            switch (F.label) {
              case 0:
                c = p.fields, b = p.condition, y = o(p, ["fields", "condition"]), S = c, S && S.length > 0 && S.indexOf("$id") === -1 && (S = i(i([], S, !0), ["$id"], !1)), x = b ? "(".concat(b, ") and ") : "", C = [], O = "0", F.label = 1;
              case 1:
                return D = "".concat(x, "$id > ").concat(O, " order by $id asc limit ").concat(d), [4, this.getRecords(t(t({}, y), { fields: S, query: D }))];
              case 2:
                if ($ = F.sent(), C = C.concat($.records), $.records.length < d)
                  return [3, 3];
                if (j = $.records[$.records.length - 1], j.$id.type === "__ID__")
                  O = j.$id.value;
                else
                  throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
                return [3, 1];
              case 3:
                return [2, C];
            }
          });
        });
      }, h.prototype.getAllRecordsWithOffset = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b, y, S, x, C, O, D;
          return n(this, function($) {
            switch ($.label) {
              case 0:
                c = p.condition, b = p.orderBy, y = o(p, ["condition", "orderBy"]), S = c ? "".concat(c, " ") : "", x = [], C = 0, $.label = 1;
              case 1:
                return O = "".concat(S).concat(b ? "order by ".concat(b, " ") : "", "limit ").concat(d, " offset ").concat(C), [4, this.getRecords(t(t({}, y), { query: O }))];
              case 2:
                return D = $.sent(), x = x.concat(D.records), D.records.length < d ? [3, 3] : (C += d, [3, 1]);
              case 3:
                return [2, x];
            }
          });
        });
      }, h.prototype.getAllRecordsWithCursor = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b, y, S;
          return n(this, function(x) {
            switch (x.label) {
              case 0:
                return [4, this.createCursor(p)];
              case 1:
                c = x.sent().id, x.label = 2;
              case 2:
                x.trys.push([2, 6, , 8]), b = [], x.label = 3;
              case 3:
                return [4, this.getRecordsByCursor({ id: c })];
              case 4:
                return y = x.sent(), b = b.concat(y.records), y.next ? [3, 3] : [3, 5];
              case 5:
                return [2, b];
              case 6:
                return S = x.sent(), [4, this.deleteCursor({ id: c })];
              case 7:
                throw x.sent(), S;
              case 8:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, h.prototype.addAllRecords = function(p) {
        return r(this, void 0, void 0, function() {
          return n(this, function(c) {
            if (!p.records.every(function(b) {
              return !Array.isArray(b) && b instanceof Object;
            }))
              throw new Error("the `records` parameter must be an array of object.");
            return [2, this.addAllRecordsRecursive(p, p.records.length, [])];
          });
        });
      }, h.prototype.addAllRecordsRecursive = function(p, c, b) {
        return r(this, void 0, void 0, function() {
          var y, S, x, C, O, D;
          return n(this, function($) {
            switch ($.label) {
              case 0:
                if (y = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * l, S = p.app, x = p.records, C = x.slice(0, y), C.length === 0)
                  return [2, { records: b }];
                $.label = 1;
              case 1:
                return $.trys.push([1, 3, , 4]), [4, this.addAllRecordsWithBulkRequest({
                  app: S,
                  records: C
                })];
              case 2:
                return O = $.sent(), [3, 4];
              case 3:
                throw D = $.sent(), new a.KintoneAllRecordsError({ records: b }, x, c, D, l);
              case 4:
                return [2, this.addAllRecordsRecursive({
                  app: S,
                  records: x.slice(y)
                }, c, b.concat(O))];
            }
          });
        });
      }, h.prototype.addAllRecordsWithBulkRequest = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b, y;
          return n(this, function(S) {
            switch (S.label) {
              case 0:
                return c = this.separateArrayRecursive(l, [], p.records), b = c.map(function(x) {
                  return {
                    method: "POST",
                    endpointName: "records",
                    payload: {
                      app: p.app,
                      records: x
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: b })];
              case 1:
                return y = S.sent().results, [2, y.map(function(x) {
                  var C = x.ids, O = x.revisions;
                  return C.map(function(D, $) {
                    return { id: D, revision: O[$] };
                  });
                }).reduce(function(x, C) {
                  return x.concat(C);
                }, [])];
            }
          });
        });
      }, h.prototype.updateAllRecords = function(p) {
        return r(this, void 0, void 0, function() {
          return n(this, function(c) {
            return [2, this.updateAllRecordsRecursive(p, p.records.length, [])];
          });
        });
      }, h.prototype.updateAllRecordsRecursive = function(p, c, b) {
        return r(this, void 0, void 0, function() {
          var y, S, x, C, O, D, $;
          return n(this, function(j) {
            switch (j.label) {
              case 0:
                if (y = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * s, S = p.app, x = p.upsert, C = p.records, O = C.slice(0, y), O.length === 0)
                  return [2, { records: b }];
                j.label = 1;
              case 1:
                return j.trys.push([1, 3, , 4]), [4, this.updateAllRecordsWithBulkRequest({
                  app: S,
                  upsert: x,
                  records: O
                })];
              case 2:
                return D = j.sent(), [3, 4];
              case 3:
                throw $ = j.sent(), new a.KintoneAllRecordsError({ records: b }, C, c, $, s);
              case 4:
                return [2, this.updateAllRecordsRecursive({
                  app: S,
                  upsert: x,
                  records: C.slice(y)
                }, c, b.concat(D))];
            }
          });
        });
      }, h.prototype.updateAllRecordsWithBulkRequest = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b, y;
          return n(this, function(S) {
            switch (S.label) {
              case 0:
                return c = this.separateArrayRecursive(s, [], p.records), b = c.map(function(x) {
                  return {
                    method: "PUT",
                    endpointName: "records",
                    payload: {
                      app: p.app,
                      upsert: p.upsert,
                      records: x
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: b })];
              case 1:
                return y = S.sent().results, [2, y.map(function(x) {
                  return x.records;
                }).reduce(function(x, C) {
                  return x.concat(C);
                }, [])];
            }
          });
        });
      }, h.prototype.deleteAllRecords = function(p) {
        return this.deleteAllRecordsRecursive(p, p.records.length);
      }, h.prototype.deleteAllRecordsRecursive = function(p, c) {
        return r(this, void 0, void 0, function() {
          var b, y, S, x, C;
          return n(this, function(O) {
            switch (O.label) {
              case 0:
                if (b = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * f, y = p.app, S = p.records, x = S.slice(0, b), x.length === 0)
                  return [2, {}];
                O.label = 1;
              case 1:
                return O.trys.push([1, 3, , 4]), [4, this.deleteAllRecordsWithBulkRequest({
                  app: y,
                  records: x
                })];
              case 2:
                return O.sent(), [3, 4];
              case 3:
                throw C = O.sent(), new a.KintoneAllRecordsError({}, S, c, C, f);
              case 4:
                return [2, this.deleteAllRecordsRecursive({
                  app: y,
                  records: S.slice(b)
                }, c)];
            }
          });
        });
      }, h.prototype.deleteAllRecordsWithBulkRequest = function(p) {
        return r(this, void 0, void 0, function() {
          var c, b;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return c = this.separateArrayRecursive(f, [], p.records), b = c.map(function(S) {
                  return {
                    method: "DELETE",
                    endpointName: "records",
                    payload: {
                      app: p.app,
                      ids: S.map(function(x) {
                        return x.id;
                      }),
                      revisions: S.map(function(x) {
                        return x.revision;
                      })
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: b })];
              case 1:
                return y.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, h.prototype.separateArrayRecursive = function(p, c, b) {
        var y = b.slice(0, p);
        return y.length === 0 ? c : this.separateArrayRecursive(p, i(i([], c, !0), [y], !1), b.slice(p));
      }, h.prototype.addRecordComment = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.post(c, p);
      }, h.prototype.deleteRecordComment = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.delete(c, p);
      }, h.prototype.getRecordComments = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/comments"
        });
        return this.client.get(c, p);
      }, h.prototype.updateRecordAssignees = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/assignees"
        });
        return this.client.put(c, p);
      }, h.prototype.updateRecordStatus = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/status"
        });
        return this.client.put(c, p);
      }, h.prototype.updateRecordsStatus = function(p) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/status"
        });
        return this.client.put(c, p);
      }, h;
    })(u.BaseClient)
  );
  return ut.RecordClient = m, ut;
}
var Qn = {}, du;
function my() {
  if (du) return Qn;
  du = 1;
  var e = Qn && Qn.__extends || /* @__PURE__ */ (function() {
    var n = function(o, i) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
        a.__proto__ = u;
      } || function(a, u) {
        for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (a[l] = u[l]);
      }, n(o, i);
    };
    return function(o, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      n(o, i);
      function a() {
        this.constructor = o;
      }
      o.prototype = i === null ? Object.create(i) : (a.prototype = i.prototype, new a());
    };
  })();
  Object.defineProperty(Qn, "__esModule", { value: !0 }), Qn.SpaceClient = void 0;
  var t = Pr(), r = (
    /** @class */
    (function(n) {
      e(o, n);
      function o() {
        return n !== null && n.apply(this, arguments) || this;
      }
      return o.prototype.getSpace = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.get(a, i);
      }, o.prototype.updateSpace = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.put(a, i);
      }, o.prototype.deleteSpace = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.delete(a, i);
      }, o.prototype.updateSpaceBody = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/body"
        });
        return this.client.put(a, i);
      }, o.prototype.getSpaceMembers = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.get(a, i);
      }, o.prototype.updateSpaceMembers = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.put(a, i);
      }, o.prototype.addThread = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.post(a, i);
      }, o.prototype.updateThread = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.put(a, i);
      }, o.prototype.addThreadComment = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread/comment"
        });
        return this.client.post(a, i);
      }, o.prototype.addGuests = function(i) {
        var a = this.buildPath({
          endpointName: "guests"
        });
        return this.client.post(a, i);
      }, o.prototype.deleteGuests = function(i) {
        var a = this.buildPath({
          endpointName: "guests"
        });
        return this.client.delete(a, i);
      }, o.prototype.updateSpaceGuests = function(i) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/guests"
        });
        return this.client.put(a, i);
      }, o.prototype.addSpaceFromTemplate = function(i) {
        var a = this.buildPath({
          endpointName: "template/space"
        });
        return this.client.post(a, i);
      }, o;
    })(t.BaseClient)
  );
  return Qn.SpaceClient = r, Qn;
}
var kt = {}, fa, pu;
function lf() {
  return pu || (pu = 1, fa = typeof self == "object" ? self.FormData : window.FormData), fa;
}
var hu;
function vy() {
  if (hu) return kt;
  hu = 1;
  var e = kt && kt.__extends || /* @__PURE__ */ (function() {
    var s = function(f, d) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, v) {
        m.__proto__ = v;
      } || function(m, v) {
        for (var h in v) Object.prototype.hasOwnProperty.call(v, h) && (m[h] = v[h]);
      }, s(f, d);
    };
    return function(f, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
      s(f, d);
      function m() {
        this.constructor = f;
      }
      f.prototype = d === null ? Object.create(d) : (m.prototype = d.prototype, new m());
    };
  })(), t = kt && kt.__awaiter || function(s, f, d, m) {
    function v(h) {
      return h instanceof d ? h : new d(function(p) {
        p(h);
      });
    }
    return new (d || (d = Promise))(function(h, p) {
      function c(S) {
        try {
          y(m.next(S));
        } catch (x) {
          p(x);
        }
      }
      function b(S) {
        try {
          y(m.throw(S));
        } catch (x) {
          p(x);
        }
      }
      function y(S) {
        S.done ? h(S.value) : v(S.value).then(c, b);
      }
      y((m = m.apply(s, f || [])).next());
    });
  }, r = kt && kt.__generator || function(s, f) {
    var d = { label: 0, sent: function() {
      if (h[0] & 1) throw h[1];
      return h[1];
    }, trys: [], ops: [] }, m, v, h, p = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return p.next = c(0), p.throw = c(1), p.return = c(2), typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function c(y) {
      return function(S) {
        return b([y, S]);
      };
    }
    function b(y) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; p && (p = 0, y[0] && (d = 0)), d; ) try {
        if (m = 1, v && (h = y[0] & 2 ? v.return : y[0] ? v.throw || ((h = v.return) && h.call(v), 0) : v.next) && !(h = h.call(v, y[1])).done) return h;
        switch (v = 0, h && (y = [y[0] & 2, h.value]), y[0]) {
          case 0:
          case 1:
            h = y;
            break;
          case 4:
            return d.label++, { value: y[1], done: !1 };
          case 5:
            d.label++, v = y[1], y = [0];
            continue;
          case 7:
            y = d.ops.pop(), d.trys.pop();
            continue;
          default:
            if (h = d.trys, !(h = h.length > 0 && h[h.length - 1]) && (y[0] === 6 || y[0] === 2)) {
              d = 0;
              continue;
            }
            if (y[0] === 3 && (!h || y[1] > h[0] && y[1] < h[3])) {
              d.label = y[1];
              break;
            }
            if (y[0] === 6 && d.label < h[1]) {
              d.label = h[1], h = y;
              break;
            }
            if (h && d.label < h[2]) {
              d.label = h[2], d.ops.push(y);
              break;
            }
            h[2] && d.ops.pop(), d.trys.pop();
            continue;
        }
        y = f.call(s, d);
      } catch (S) {
        y = [6, S], v = 0;
      } finally {
        m = h = 0;
      }
      if (y[0] & 5) throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  }, n = kt && kt.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(kt, "__esModule", { value: !0 }), kt.FileClient = void 0;
  var o = n(lf()), i = Oi(), a = Is(), u = Pr(), l = (
    /** @class */
    (function(s) {
      e(f, s);
      function f() {
        return s !== null && s.apply(this, arguments) || this;
      }
      return f.prototype.uploadFile = function(d) {
        return t(this, void 0, void 0, function() {
          var m, v, h, p, S, c, b, y, S, x;
          return r(this, function(C) {
            switch (C.label) {
              case 0:
                if (m = this.buildPathWithGuestSpaceId({
                  endpointName: "file"
                }), v = new o.default(), !("path" in d.file)) return [3, 5];
                C.label = 1;
              case 1:
                return C.trys.push([1, 3, , 4]), [4, i.platformDeps.readFileFromPath(d.file.path)];
              case 2:
                return h = C.sent(), p = h.name, S = h.data, v.append("file", S, p), [3, 4];
              case 3:
                throw c = C.sent(), c instanceof a.UnsupportedPlatformError ? new Error("uploadFile doesn't allow to accept a file path in ".concat(c.platform, " environment.")) : c;
              case 4:
                return [3, 6];
              case 5:
                b = d.file, y = b.name, S = b.data, x = i.platformDeps.buildFormDataValue(S, y), v.append("file", x, y), C.label = 6;
              case 6:
                return [2, this.client.postData(m, v)];
            }
          });
        });
      }, f.prototype.downloadFile = function(d) {
        var m = this.buildPathWithGuestSpaceId({
          endpointName: "file"
        });
        return this.client.getData(m, d);
      }, f;
    })(u.BaseClient)
  );
  return kt.FileClient = l, kt;
}
var Zn = {}, mu;
function yy() {
  if (mu) return Zn;
  mu = 1;
  var e = Zn && Zn.__extends || /* @__PURE__ */ (function() {
    var n = function(o, i) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
        a.__proto__ = u;
      } || function(a, u) {
        for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (a[l] = u[l]);
      }, n(o, i);
    };
    return function(o, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      n(o, i);
      function a() {
        this.constructor = o;
      }
      o.prototype = i === null ? Object.create(i) : (a.prototype = i.prototype, new a());
    };
  })();
  Object.defineProperty(Zn, "__esModule", { value: !0 }), Zn.PluginClient = void 0;
  var t = Pr(), r = (
    /** @class */
    (function(n) {
      e(o, n);
      function o() {
        return n !== null && n.apply(this, arguments) || this;
      }
      return o.prototype.getPlugins = function(i) {
        var a = this.buildPath({ endpointName: "plugins" });
        return this.client.get(a, i);
      }, o.prototype.getRequiredPlugins = function(i) {
        var a = this.buildPath({ endpointName: "plugins/required" });
        return this.client.get(a, i);
      }, o.prototype.getApps = function(i) {
        var a = this.buildPath({ endpointName: "plugin/apps" });
        return this.client.get(a, i);
      }, o.prototype.updatePlugin = function(i) {
        var a = this.buildPath({ endpointName: "plugin" });
        return this.client.put(a, i);
      }, o.prototype.installPlugin = function(i) {
        var a = this.buildPath({ endpointName: "plugin" });
        return this.client.post(a, i);
      }, o.prototype.uninstallPlugin = function(i) {
        var a = this.buildPath({ endpointName: "plugin" });
        return this.client.delete(a, i);
      }, o;
    })(t.BaseClient)
  );
  return Zn.PluginClient = r, Zn;
}
var da = {}, Pt = {};
var pa, vu;
function gy() {
  if (vu) return pa;
  vu = 1;
  function e(g, w) {
    return function() {
      return g.apply(w, arguments);
    };
  }
  const { toString: t } = Object.prototype, { getPrototypeOf: r } = Object, { iterator: n, toStringTag: o } = Symbol, i = /* @__PURE__ */ ((g) => (w) => {
    const _ = t.call(w);
    return g[_] || (g[_] = _.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), a = (g) => (g = g.toLowerCase(), (w) => i(w) === g), u = (g) => (w) => typeof w === g, { isArray: l } = Array, s = u("undefined");
  function f(g) {
    return g !== null && !s(g) && g.constructor !== null && !s(g.constructor) && h(g.constructor.isBuffer) && g.constructor.isBuffer(g);
  }
  const d = a("ArrayBuffer");
  function m(g) {
    let w;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? w = ArrayBuffer.isView(g) : w = g && g.buffer && d(g.buffer), w;
  }
  const v = u("string"), h = u("function"), p = u("number"), c = (g) => g !== null && typeof g == "object", b = (g) => g === !0 || g === !1, y = (g) => {
    if (i(g) !== "object")
      return !1;
    const w = r(g);
    return (w === null || w === Object.prototype || Object.getPrototypeOf(w) === null) && !(o in g) && !(n in g);
  }, S = (g) => {
    if (!c(g) || f(g))
      return !1;
    try {
      return Object.keys(g).length === 0 && Object.getPrototypeOf(g) === Object.prototype;
    } catch {
      return !1;
    }
  }, x = a("Date"), C = a("File"), O = a("Blob"), D = a("FileList"), $ = (g) => c(g) && h(g.pipe), j = (g) => {
    let w;
    return g && (typeof FormData == "function" && g instanceof FormData || h(g.append) && ((w = i(g)) === "formdata" || // detect form-data instance
    w === "object" && h(g.toString) && g.toString() === "[object FormData]"));
  }, F = a("URLSearchParams"), [q, z, ue, H] = ["ReadableStream", "Request", "Response", "Headers"].map(a), W = (g) => g.trim ? g.trim() : g.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function L(g, w, { allOwnKeys: _ = !1 } = {}) {
    if (g === null || typeof g > "u")
      return;
    let E, A;
    if (typeof g != "object" && (g = [g]), l(g))
      for (E = 0, A = g.length; E < A; E++)
        w.call(null, g[E], E, g);
    else {
      if (f(g))
        return;
      const k = _ ? Object.getOwnPropertyNames(g) : Object.keys(g), T = k.length;
      let B;
      for (E = 0; E < T; E++)
        B = k[E], w.call(null, g[B], B, g);
    }
  }
  function J(g, w) {
    if (f(g))
      return null;
    w = w.toLowerCase();
    const _ = Object.keys(g);
    let E = _.length, A;
    for (; E-- > 0; )
      if (A = _[E], w === A.toLowerCase())
        return A;
    return null;
  }
  const M = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : uo, re = (g) => !s(g) && g !== M;
  function oe() {
    const { caseless: g, skipUndefined: w } = re(this) && this || {}, _ = {}, E = (A, k) => {
      const T = g && J(_, k) || k;
      y(_[T]) && y(A) ? _[T] = oe(_[T], A) : y(A) ? _[T] = oe({}, A) : l(A) ? _[T] = A.slice() : (!w || !s(A)) && (_[T] = A);
    };
    for (let A = 0, k = arguments.length; A < k; A++)
      arguments[A] && L(arguments[A], E);
    return _;
  }
  const fe = (g, w, _, { allOwnKeys: E } = {}) => (L(w, (A, k) => {
    _ && h(A) ? g[k] = e(A, _) : g[k] = A;
  }, { allOwnKeys: E }), g), xe = (g) => (g.charCodeAt(0) === 65279 && (g = g.slice(1)), g), G = (g, w, _, E) => {
    g.prototype = Object.create(w.prototype, E), g.prototype.constructor = g, Object.defineProperty(g, "super", {
      value: w.prototype
    }), _ && Object.assign(g.prototype, _);
  }, Q = (g, w, _, E) => {
    let A, k, T;
    const B = {};
    if (w = w || {}, g == null) return w;
    do {
      for (A = Object.getOwnPropertyNames(g), k = A.length; k-- > 0; )
        T = A[k], (!E || E(T, g, w)) && !B[T] && (w[T] = g[T], B[T] = !0);
      g = _ !== !1 && r(g);
    } while (g && (!_ || _(g, w)) && g !== Object.prototype);
    return w;
  }, R = (g, w, _) => {
    g = String(g), (_ === void 0 || _ > g.length) && (_ = g.length), _ -= w.length;
    const E = g.indexOf(w, _);
    return E !== -1 && E === _;
  }, V = (g) => {
    if (!g) return null;
    if (l(g)) return g;
    let w = g.length;
    if (!p(w)) return null;
    const _ = new Array(w);
    for (; w-- > 0; )
      _[w] = g[w];
    return _;
  }, le = /* @__PURE__ */ ((g) => (w) => g && w instanceof g)(typeof Uint8Array < "u" && r(Uint8Array)), Oe = (g, w) => {
    const E = (g && g[n]).call(g);
    let A;
    for (; (A = E.next()) && !A.done; ) {
      const k = A.value;
      w.call(g, k[0], k[1]);
    }
  }, _e = (g, w) => {
    let _;
    const E = [];
    for (; (_ = g.exec(w)) !== null; )
      E.push(_);
    return E;
  }, ae = a("HTMLFormElement"), De = (g) => g.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function(_, E, A) {
      return E.toUpperCase() + A;
    }
  ), Ae = (({ hasOwnProperty: g }) => (w, _) => g.call(w, _))(Object.prototype), je = a("RegExp"), rt = (g, w) => {
    const _ = Object.getOwnPropertyDescriptors(g), E = {};
    L(_, (A, k) => {
      let T;
      (T = w(A, k, g)) !== !1 && (E[k] = T || A);
    }), Object.defineProperties(g, E);
  }, xt = (g) => {
    rt(g, (w, _) => {
      if (h(g) && ["arguments", "caller", "callee"].indexOf(_) !== -1)
        return !1;
      const E = g[_];
      if (h(E)) {
        if (w.enumerable = !1, "writable" in w) {
          w.writable = !1;
          return;
        }
        w.set || (w.set = () => {
          throw Error("Can not rewrite read-only method '" + _ + "'");
        });
      }
    });
  }, st = (g, w) => {
    const _ = {}, E = (A) => {
      A.forEach((k) => {
        _[k] = !0;
      });
    };
    return l(g) ? E(g) : E(String(g).split(w)), _;
  }, dt = () => {
  }, _t = (g, w) => g != null && Number.isFinite(g = +g) ? g : w;
  function xn(g) {
    return !!(g && h(g.append) && g[o] === "FormData" && g[n]);
  }
  const Jt = (g) => {
    const w = new Array(10), _ = (E, A) => {
      if (c(E)) {
        if (w.indexOf(E) >= 0)
          return;
        if (f(E))
          return E;
        if (!("toJSON" in E)) {
          w[A] = E;
          const k = l(E) ? [] : {};
          return L(E, (T, B) => {
            const ie = _(T, A + 1);
            !s(ie) && (k[B] = ie);
          }), w[A] = void 0, k;
        }
      }
      return E;
    };
    return _(g, 0);
  }, Rt = a("AsyncFunction"), _n = (g) => g && (c(g) || h(g)) && h(g.then) && h(g.catch), dn = ((g, w) => g ? setImmediate : w ? ((_, E) => (M.addEventListener("message", ({ source: A, data: k }) => {
    A === M && k === _ && E.length && E.shift()();
  }, !1), (A) => {
    E.push(A), M.postMessage(_, "*");
  }))(`axios@${Math.random()}`, []) : (_) => setTimeout(_))(
    typeof setImmediate == "function",
    h(M.postMessage)
  ), En = typeof queueMicrotask < "u" ? queueMicrotask.bind(M) : typeof process < "u" && process.nextTick || dn;
  var I = {
    isArray: l,
    isArrayBuffer: d,
    isBuffer: f,
    isFormData: j,
    isArrayBufferView: m,
    isString: v,
    isNumber: p,
    isBoolean: b,
    isObject: c,
    isPlainObject: y,
    isEmptyObject: S,
    isReadableStream: q,
    isRequest: z,
    isResponse: ue,
    isHeaders: H,
    isUndefined: s,
    isDate: x,
    isFile: C,
    isBlob: O,
    isRegExp: je,
    isFunction: h,
    isStream: $,
    isURLSearchParams: F,
    isTypedArray: le,
    isFileList: D,
    forEach: L,
    merge: oe,
    extend: fe,
    trim: W,
    stripBOM: xe,
    inherits: G,
    toFlatObject: Q,
    kindOf: i,
    kindOfTest: a,
    endsWith: R,
    toArray: V,
    forEachEntry: Oe,
    matchAll: _e,
    isHTMLForm: ae,
    hasOwnProperty: Ae,
    hasOwnProp: Ae,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: rt,
    freezeMethods: xt,
    toObjectSet: st,
    toCamelCase: De,
    noop: dt,
    toFiniteNumber: _t,
    findKey: J,
    global: M,
    isContextDefined: re,
    isSpecCompliantForm: xn,
    toJSONObject: Jt,
    isAsyncFn: Rt,
    isThenable: _n,
    setImmediate: dn,
    asap: En,
    isIterable: (g) => g != null && h(g[n])
  };
  function ye(g, w, _, E, A) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = g, this.name = "AxiosError", w && (this.code = w), _ && (this.config = _), E && (this.request = E), A && (this.response = A, this.status = A.status ? A.status : null);
  }
  I.inherits(ye, Error, {
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
        config: I.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  const mo = ye.prototype, On = {};
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
  ].forEach((g) => {
    On[g] = { value: g };
  }), Object.defineProperties(ye, On), Object.defineProperty(mo, "isAxiosError", { value: !0 }), ye.from = (g, w, _, E, A, k) => {
    const T = Object.create(mo);
    I.toFlatObject(g, T, function(Y) {
      return Y !== Error.prototype;
    }, (Z) => Z !== "isAxiosError");
    const B = g && g.message ? g.message : "Error", ie = w == null && g ? g.code : w;
    return ye.call(T, B, ie, _, E, A), g && T.cause == null && Object.defineProperty(T, "cause", { value: g, configurable: !0 }), T.name = g && g.name || "Error", k && Object.assign(T, k), T;
  };
  var $r = null;
  function rr(g) {
    return I.isPlainObject(g) || I.isArray(g);
  }
  function vo(g) {
    return I.endsWith(g, "[]") ? g.slice(0, -2) : g;
  }
  function yo(g, w, _) {
    return g ? g.concat(w).map(function(A, k) {
      return A = vo(A), !_ && k ? "[" + A + "]" : A;
    }).join(_ ? "." : "") : w;
  }
  function Nr(g) {
    return I.isArray(g) && !g.some(rr);
  }
  const or = I.toFlatObject(I, {}, null, function(w) {
    return /^is[A-Z]/.test(w);
  });
  function P(g, w, _) {
    if (!I.isObject(g))
      throw new TypeError("target must be an object");
    w = w || new FormData(), _ = I.toFlatObject(_, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(ve, se) {
      return !I.isUndefined(se[ve]);
    });
    const E = _.metaTokens, A = _.visitor || Y, k = _.dots, T = _.indexes, ie = (_.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(w);
    if (!I.isFunction(A))
      throw new TypeError("visitor must be a function");
    function Z(X) {
      if (X === null) return "";
      if (I.isDate(X))
        return X.toISOString();
      if (I.isBoolean(X))
        return X.toString();
      if (!ie && I.isBlob(X))
        throw new ye("Blob is not supported. Use a Buffer instead.");
      return I.isArrayBuffer(X) || I.isTypedArray(X) ? ie && typeof Blob == "function" ? new Blob([X]) : Buffer.from(X) : X;
    }
    function Y(X, ve, se) {
      let ot = X;
      if (X && !se && typeof X == "object") {
        if (I.endsWith(ve, "{}"))
          ve = E ? ve : ve.slice(0, -2), X = JSON.stringify(X);
        else if (I.isArray(X) && Nr(X) || (I.isFileList(X) || I.endsWith(ve, "[]")) && (ot = I.toArray(X)))
          return ve = vo(ve), ot.forEach(function(lt, Et) {
            !(I.isUndefined(lt) || lt === null) && w.append(
              // eslint-disable-next-line no-nested-ternary
              T === !0 ? yo([ve], Et, k) : T === null ? ve : ve + "[]",
              Z(lt)
            );
          }), !1;
      }
      return rr(X) ? !0 : (w.append(yo(se, ve, k), Z(X)), !1);
    }
    const ce = [], Be = Object.assign(or, {
      defaultVisitor: Y,
      convertValue: Z,
      isVisitable: rr
    });
    function ht(X, ve) {
      if (!I.isUndefined(X)) {
        if (ce.indexOf(X) !== -1)
          throw Error("Circular reference detected in " + ve.join("."));
        ce.push(X), I.forEach(X, function(ot, qt) {
          (!(I.isUndefined(ot) || ot === null) && A.call(
            w,
            ot,
            I.isString(qt) ? qt.trim() : qt,
            ve,
            Be
          )) === !0 && ht(ot, ve ? ve.concat(qt) : [qt]);
        }), ce.pop();
      }
    }
    if (!I.isObject(g))
      throw new TypeError("data must be an object");
    return ht(g), w;
  }
  function N(g) {
    const w = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(g).replace(/[!'()~]|%20|%00/g, function(E) {
      return w[E];
    });
  }
  function Te(g, w) {
    this._pairs = [], g && P(g, this, w);
  }
  const Me = Te.prototype;
  Me.append = function(w, _) {
    this._pairs.push([w, _]);
  }, Me.toString = function(w) {
    const _ = w ? function(E) {
      return w.call(this, E, N);
    } : N;
    return this._pairs.map(function(A) {
      return _(A[0]) + "=" + _(A[1]);
    }, "").join("&");
  };
  function Fe(g) {
    return encodeURIComponent(g).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
  }
  function we(g, w, _) {
    if (!w)
      return g;
    const E = _ && _.encode || Fe;
    I.isFunction(_) && (_ = {
      serialize: _
    });
    const A = _ && _.serialize;
    let k;
    if (A ? k = A(w, _) : k = I.isURLSearchParams(w) ? w.toString() : new Te(w, _).toString(E), k) {
      const T = g.indexOf("#");
      T !== -1 && (g = g.slice(0, T)), g += (g.indexOf("?") === -1 ? "?" : "&") + k;
    }
    return g;
  }
  class Qt {
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
    use(w, _, E) {
      return this.handlers.push({
        fulfilled: w,
        rejected: _,
        synchronous: E ? E.synchronous : !1,
        runWhen: E ? E.runWhen : null
      }), this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {void}
     */
    eject(w) {
      this.handlers[w] && (this.handlers[w] = null);
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
    forEach(w) {
      I.forEach(this.handlers, function(E) {
        E !== null && w(E);
      });
    }
  }
  var Zt = Qt, pt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }, en = typeof URLSearchParams < "u" ? URLSearchParams : Te, Mr = typeof FormData < "u" ? FormData : null, An = typeof Blob < "u" ? Blob : null, Tt = {
    isBrowser: !0,
    classes: {
      URLSearchParams: en,
      FormData: Mr,
      Blob: An
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const ir = typeof window < "u" && typeof document < "u", ar = typeof navigator == "object" && navigator || void 0, go = ir && (!ar || ["ReactNative", "NativeScript", "NS"].indexOf(ar.product) < 0), Mn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Fr = ir && window.location.href || "http://localhost";
  var sr = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    hasBrowserEnv: ir,
    hasStandardBrowserWebWorkerEnv: Mn,
    hasStandardBrowserEnv: go,
    navigator: ar,
    origin: Fr
  }), Qe = {
    ...sr,
    ...Tt
  };
  function jr(g, w) {
    return P(g, new Qe.classes.URLSearchParams(), {
      visitor: function(_, E, A, k) {
        return Qe.isNode && I.isBuffer(_) ? (this.append(E, _.toString("base64")), !1) : k.defaultVisitor.apply(this, arguments);
      },
      ...w
    });
  }
  function bo(g) {
    return I.matchAll(/\w+|\[(\w*)]/g, g).map((w) => w[0] === "[]" ? "" : w[1] || w[0]);
  }
  function wo(g) {
    const w = {}, _ = Object.keys(g);
    let E;
    const A = _.length;
    let k;
    for (E = 0; E < A; E++)
      k = _[E], w[k] = g[k];
    return w;
  }
  function lr(g) {
    function w(_, E, A, k) {
      let T = _[k++];
      if (T === "__proto__") return !0;
      const B = Number.isFinite(+T), ie = k >= _.length;
      return T = !T && I.isArray(A) ? A.length : T, ie ? (I.hasOwnProp(A, T) ? A[T] = [A[T], E] : A[T] = E, !B) : ((!A[T] || !I.isObject(A[T])) && (A[T] = []), w(_, E, A[T], k) && I.isArray(A[T]) && (A[T] = wo(A[T])), !B);
    }
    if (I.isFormData(g) && I.isFunction(g.entries)) {
      const _ = {};
      return I.forEachEntry(g, (E, A) => {
        w(bo(E), A, _, 0);
      }), _;
    }
    return null;
  }
  function So(g, w, _) {
    if (I.isString(g))
      try {
        return (w || JSON.parse)(g), I.trim(g);
      } catch (E) {
        if (E.name !== "SyntaxError")
          throw E;
      }
    return (_ || JSON.stringify)(g);
  }
  const Fn = {
    transitional: pt,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(w, _) {
      const E = _.getContentType() || "", A = E.indexOf("application/json") > -1, k = I.isObject(w);
      if (k && I.isHTMLForm(w) && (w = new FormData(w)), I.isFormData(w))
        return A ? JSON.stringify(lr(w)) : w;
      if (I.isArrayBuffer(w) || I.isBuffer(w) || I.isStream(w) || I.isFile(w) || I.isBlob(w) || I.isReadableStream(w))
        return w;
      if (I.isArrayBufferView(w))
        return w.buffer;
      if (I.isURLSearchParams(w))
        return _.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), w.toString();
      let B;
      if (k) {
        if (E.indexOf("application/x-www-form-urlencoded") > -1)
          return jr(w, this.formSerializer).toString();
        if ((B = I.isFileList(w)) || E.indexOf("multipart/form-data") > -1) {
          const ie = this.env && this.env.FormData;
          return P(
            B ? { "files[]": w } : w,
            ie && new ie(),
            this.formSerializer
          );
        }
      }
      return k || A ? (_.setContentType("application/json", !1), So(w)) : w;
    }],
    transformResponse: [function(w) {
      const _ = this.transitional || Fn.transitional, E = _ && _.forcedJSONParsing, A = this.responseType === "json";
      if (I.isResponse(w) || I.isReadableStream(w))
        return w;
      if (w && I.isString(w) && (E && !this.responseType || A)) {
        const T = !(_ && _.silentJSONParsing) && A;
        try {
          return JSON.parse(w, this.parseReviver);
        } catch (B) {
          if (T)
            throw B.name === "SyntaxError" ? ye.from(B, ye.ERR_BAD_RESPONSE, this, null, this.response) : B;
        }
      }
      return w;
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
      FormData: Qe.classes.FormData,
      Blob: Qe.classes.Blob
    },
    validateStatus: function(w) {
      return w >= 200 && w < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  I.forEach(["delete", "get", "head", "post", "put", "patch"], (g) => {
    Fn.headers[g] = {};
  });
  var ur = Fn;
  const Di = I.toObjectSet([
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
  var Br = (g) => {
    const w = {};
    let _, E, A;
    return g && g.split(`
`).forEach(function(T) {
      A = T.indexOf(":"), _ = T.substring(0, A).trim().toLowerCase(), E = T.substring(A + 1).trim(), !(!_ || w[_] && Di[_]) && (_ === "set-cookie" ? w[_] ? w[_].push(E) : w[_] = [E] : w[_] = w[_] ? w[_] + ", " + E : E);
    }), w;
  };
  const pn = Symbol("internals");
  function tn(g) {
    return g && String(g).trim().toLowerCase();
  }
  function cr(g) {
    return g === !1 || g == null ? g : I.isArray(g) ? g.map(cr) : String(g);
  }
  function xo(g) {
    const w = /* @__PURE__ */ Object.create(null), _ = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let E;
    for (; E = _.exec(g); )
      w[E[1]] = E[2];
    return w;
  }
  const gf = (g) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(g.trim());
  function Ri(g, w, _, E, A) {
    if (I.isFunction(E))
      return E.call(this, w, _);
    if (A && (w = _), !!I.isString(w)) {
      if (I.isString(E))
        return w.indexOf(E) !== -1;
      if (I.isRegExp(E))
        return E.test(w);
    }
  }
  function bf(g) {
    return g.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, _, E) => _.toUpperCase() + E);
  }
  function wf(g, w) {
    const _ = I.toCamelCase(" " + w);
    ["get", "set", "has"].forEach((E) => {
      Object.defineProperty(g, E + _, {
        value: function(A, k, T) {
          return this[E].call(this, w, A, k, T);
        },
        configurable: !0
      });
    });
  }
  class _o {
    constructor(w) {
      w && this.set(w);
    }
    set(w, _, E) {
      const A = this;
      function k(B, ie, Z) {
        const Y = tn(ie);
        if (!Y)
          throw new Error("header name must be a non-empty string");
        const ce = I.findKey(A, Y);
        (!ce || A[ce] === void 0 || Z === !0 || Z === void 0 && A[ce] !== !1) && (A[ce || ie] = cr(B));
      }
      const T = (B, ie) => I.forEach(B, (Z, Y) => k(Z, Y, ie));
      if (I.isPlainObject(w) || w instanceof this.constructor)
        T(w, _);
      else if (I.isString(w) && (w = w.trim()) && !gf(w))
        T(Br(w), _);
      else if (I.isObject(w) && I.isIterable(w)) {
        let B = {}, ie, Z;
        for (const Y of w) {
          if (!I.isArray(Y))
            throw TypeError("Object iterator must return a key-value pair");
          B[Z = Y[0]] = (ie = B[Z]) ? I.isArray(ie) ? [...ie, Y[1]] : [ie, Y[1]] : Y[1];
        }
        T(B, _);
      } else
        w != null && k(_, w, E);
      return this;
    }
    get(w, _) {
      if (w = tn(w), w) {
        const E = I.findKey(this, w);
        if (E) {
          const A = this[E];
          if (!_)
            return A;
          if (_ === !0)
            return xo(A);
          if (I.isFunction(_))
            return _.call(this, A, E);
          if (I.isRegExp(_))
            return _.exec(A);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(w, _) {
      if (w = tn(w), w) {
        const E = I.findKey(this, w);
        return !!(E && this[E] !== void 0 && (!_ || Ri(this, this[E], E, _)));
      }
      return !1;
    }
    delete(w, _) {
      const E = this;
      let A = !1;
      function k(T) {
        if (T = tn(T), T) {
          const B = I.findKey(E, T);
          B && (!_ || Ri(E, E[B], B, _)) && (delete E[B], A = !0);
        }
      }
      return I.isArray(w) ? w.forEach(k) : k(w), A;
    }
    clear(w) {
      const _ = Object.keys(this);
      let E = _.length, A = !1;
      for (; E--; ) {
        const k = _[E];
        (!w || Ri(this, this[k], k, w, !0)) && (delete this[k], A = !0);
      }
      return A;
    }
    normalize(w) {
      const _ = this, E = {};
      return I.forEach(this, (A, k) => {
        const T = I.findKey(E, k);
        if (T) {
          _[T] = cr(A), delete _[k];
          return;
        }
        const B = w ? bf(k) : String(k).trim();
        B !== k && delete _[k], _[B] = cr(A), E[B] = !0;
      }), this;
    }
    concat(...w) {
      return this.constructor.concat(this, ...w);
    }
    toJSON(w) {
      const _ = /* @__PURE__ */ Object.create(null);
      return I.forEach(this, (E, A) => {
        E != null && E !== !1 && (_[A] = w && I.isArray(E) ? E.join(", ") : E);
      }), _;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([w, _]) => w + ": " + _).join(`
`);
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(w) {
      return w instanceof this ? w : new this(w);
    }
    static concat(w, ..._) {
      const E = new this(w);
      return _.forEach((A) => E.set(A)), E;
    }
    static accessor(w) {
      const E = (this[pn] = this[pn] = {
        accessors: {}
      }).accessors, A = this.prototype;
      function k(T) {
        const B = tn(T);
        E[B] || (wf(A, T), E[B] = !0);
      }
      return I.isArray(w) ? w.forEach(k) : k(w), this;
    }
  }
  _o.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), I.reduceDescriptors(_o.prototype, ({ value: g }, w) => {
    let _ = w[0].toUpperCase() + w.slice(1);
    return {
      get: () => g,
      set(E) {
        this[_] = E;
      }
    };
  }), I.freezeMethods(_o);
  var Wt = _o;
  function Ti(g, w) {
    const _ = this || ur, E = w || _, A = Wt.from(E.headers);
    let k = E.data;
    return I.forEach(g, function(B) {
      k = B.call(_, k, A.normalize(), w ? w.status : void 0);
    }), A.normalize(), k;
  }
  function Bs(g) {
    return !!(g && g.__CANCEL__);
  }
  function fr(g, w, _) {
    ye.call(this, g ?? "canceled", ye.ERR_CANCELED, w, _), this.name = "CanceledError";
  }
  I.inherits(fr, ye, {
    __CANCEL__: !0
  });
  function qs(g, w, _) {
    const E = _.config.validateStatus;
    !_.status || !E || E(_.status) ? g(_) : w(new ye(
      "Request failed with status code " + _.status,
      [ye.ERR_BAD_REQUEST, ye.ERR_BAD_RESPONSE][Math.floor(_.status / 100) - 4],
      _.config,
      _.request,
      _
    ));
  }
  function Sf(g) {
    const w = /^([-+\w]{1,25})(:?\/\/|:)/.exec(g);
    return w && w[1] || "";
  }
  function xf(g, w) {
    g = g || 10;
    const _ = new Array(g), E = new Array(g);
    let A = 0, k = 0, T;
    return w = w !== void 0 ? w : 1e3, function(ie) {
      const Z = Date.now(), Y = E[k];
      T || (T = Z), _[A] = ie, E[A] = Z;
      let ce = k, Be = 0;
      for (; ce !== A; )
        Be += _[ce++], ce = ce % g;
      if (A = (A + 1) % g, A === k && (k = (k + 1) % g), Z - T < w)
        return;
      const ht = Y && Z - Y;
      return ht ? Math.round(Be * 1e3 / ht) : void 0;
    };
  }
  function _f(g, w) {
    let _ = 0, E = 1e3 / w, A, k;
    const T = (Z, Y = Date.now()) => {
      _ = Y, A = null, k && (clearTimeout(k), k = null), g(...Z);
    };
    return [(...Z) => {
      const Y = Date.now(), ce = Y - _;
      ce >= E ? T(Z, Y) : (A = Z, k || (k = setTimeout(() => {
        k = null, T(A);
      }, E - ce)));
    }, () => A && T(A)];
  }
  const Eo = (g, w, _ = 3) => {
    let E = 0;
    const A = xf(50, 250);
    return _f((k) => {
      const T = k.loaded, B = k.lengthComputable ? k.total : void 0, ie = T - E, Z = A(ie), Y = T <= B;
      E = T;
      const ce = {
        loaded: T,
        total: B,
        progress: B ? T / B : void 0,
        bytes: ie,
        rate: Z || void 0,
        estimated: Z && B && Y ? (B - T) / Z : void 0,
        event: k,
        lengthComputable: B != null,
        [w ? "download" : "upload"]: !0
      };
      g(ce);
    }, _);
  }, Ls = (g, w) => {
    const _ = g != null;
    return [(E) => w[0]({
      lengthComputable: _,
      total: g,
      loaded: E
    }), w[1]];
  }, Us = (g) => (...w) => I.asap(() => g(...w));
  var Ef = Qe.hasStandardBrowserEnv ? /* @__PURE__ */ ((g, w) => (_) => (_ = new URL(_, Qe.origin), g.protocol === _.protocol && g.host === _.host && (w || g.port === _.port)))(
    new URL(Qe.origin),
    Qe.navigator && /(msie|trident)/i.test(Qe.navigator.userAgent)
  ) : () => !0, Of = Qe.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(g, w, _, E, A, k, T) {
        if (typeof document > "u") return;
        const B = [`${g}=${encodeURIComponent(w)}`];
        I.isNumber(_) && B.push(`expires=${new Date(_).toUTCString()}`), I.isString(E) && B.push(`path=${E}`), I.isString(A) && B.push(`domain=${A}`), k === !0 && B.push("secure"), I.isString(T) && B.push(`SameSite=${T}`), document.cookie = B.join("; ");
      },
      read(g) {
        if (typeof document > "u") return null;
        const w = document.cookie.match(new RegExp("(?:^|; )" + g + "=([^;]*)"));
        return w ? decodeURIComponent(w[1]) : null;
      },
      remove(g) {
        this.write(g, "", Date.now() - 864e5, "/");
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
  function Af(g) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(g);
  }
  function Cf(g, w) {
    return w ? g.replace(/\/?\/$/, "") + "/" + w.replace(/^\/+/, "") : g;
  }
  function Vs(g, w, _) {
    let E = !Af(w);
    return g && (E || _ == !1) ? Cf(g, w) : w;
  }
  const Ws = (g) => g instanceof Wt ? { ...g } : g;
  function jn(g, w) {
    w = w || {};
    const _ = {};
    function E(Z, Y, ce, Be) {
      return I.isPlainObject(Z) && I.isPlainObject(Y) ? I.merge.call({ caseless: Be }, Z, Y) : I.isPlainObject(Y) ? I.merge({}, Y) : I.isArray(Y) ? Y.slice() : Y;
    }
    function A(Z, Y, ce, Be) {
      if (I.isUndefined(Y)) {
        if (!I.isUndefined(Z))
          return E(void 0, Z, ce, Be);
      } else return E(Z, Y, ce, Be);
    }
    function k(Z, Y) {
      if (!I.isUndefined(Y))
        return E(void 0, Y);
    }
    function T(Z, Y) {
      if (I.isUndefined(Y)) {
        if (!I.isUndefined(Z))
          return E(void 0, Z);
      } else return E(void 0, Y);
    }
    function B(Z, Y, ce) {
      if (ce in w)
        return E(Z, Y);
      if (ce in g)
        return E(void 0, Z);
    }
    const ie = {
      url: k,
      method: k,
      data: k,
      baseURL: T,
      transformRequest: T,
      transformResponse: T,
      paramsSerializer: T,
      timeout: T,
      timeoutMessage: T,
      withCredentials: T,
      withXSRFToken: T,
      adapter: T,
      responseType: T,
      xsrfCookieName: T,
      xsrfHeaderName: T,
      onUploadProgress: T,
      onDownloadProgress: T,
      decompress: T,
      maxContentLength: T,
      maxBodyLength: T,
      beforeRedirect: T,
      transport: T,
      httpAgent: T,
      httpsAgent: T,
      cancelToken: T,
      socketPath: T,
      responseEncoding: T,
      validateStatus: B,
      headers: (Z, Y, ce) => A(Ws(Z), Ws(Y), ce, !0)
    };
    return I.forEach(Object.keys({ ...g, ...w }), function(Y) {
      const ce = ie[Y] || A, Be = ce(g[Y], w[Y], Y);
      I.isUndefined(Be) && ce !== B || (_[Y] = Be);
    }), _;
  }
  var Hs = (g) => {
    const w = jn({}, g);
    let { data: _, withXSRFToken: E, xsrfHeaderName: A, xsrfCookieName: k, headers: T, auth: B } = w;
    if (w.headers = T = Wt.from(T), w.url = we(Vs(w.baseURL, w.url, w.allowAbsoluteUrls), g.params, g.paramsSerializer), B && T.set(
      "Authorization",
      "Basic " + btoa((B.username || "") + ":" + (B.password ? unescape(encodeURIComponent(B.password)) : ""))
    ), I.isFormData(_)) {
      if (Qe.hasStandardBrowserEnv || Qe.hasStandardBrowserWebWorkerEnv)
        T.setContentType(void 0);
      else if (I.isFunction(_.getHeaders)) {
        const ie = _.getHeaders(), Z = ["content-type", "content-length"];
        Object.entries(ie).forEach(([Y, ce]) => {
          Z.includes(Y.toLowerCase()) && T.set(Y, ce);
        });
      }
    }
    if (Qe.hasStandardBrowserEnv && (E && I.isFunction(E) && (E = E(w)), E || E !== !1 && Ef(w.url))) {
      const ie = A && k && Of.read(k);
      ie && T.set(A, ie);
    }
    return w;
  }, Df = typeof XMLHttpRequest < "u" && function(g) {
    return new Promise(function(_, E) {
      const A = Hs(g);
      let k = A.data;
      const T = Wt.from(A.headers).normalize();
      let { responseType: B, onUploadProgress: ie, onDownloadProgress: Z } = A, Y, ce, Be, ht, X;
      function ve() {
        ht && ht(), X && X(), A.cancelToken && A.cancelToken.unsubscribe(Y), A.signal && A.signal.removeEventListener("abort", Y);
      }
      let se = new XMLHttpRequest();
      se.open(A.method.toUpperCase(), A.url, !0), se.timeout = A.timeout;
      function ot() {
        if (!se)
          return;
        const lt = Wt.from(
          "getAllResponseHeaders" in se && se.getAllResponseHeaders()
        ), Ht = {
          data: !B || B === "text" || B === "json" ? se.responseText : se.response,
          status: se.status,
          statusText: se.statusText,
          headers: lt,
          config: g,
          request: se
        };
        qs(function(Lt) {
          _(Lt), ve();
        }, function(Lt) {
          E(Lt), ve();
        }, Ht), se = null;
      }
      "onloadend" in se ? se.onloadend = ot : se.onreadystatechange = function() {
        !se || se.readyState !== 4 || se.status === 0 && !(se.responseURL && se.responseURL.indexOf("file:") === 0) || setTimeout(ot);
      }, se.onabort = function() {
        se && (E(new ye("Request aborted", ye.ECONNABORTED, g, se)), se = null);
      }, se.onerror = function(Et) {
        const Ht = Et && Et.message ? Et.message : "Network Error", Bn = new ye(Ht, ye.ERR_NETWORK, g, se);
        Bn.event = Et || null, E(Bn), se = null;
      }, se.ontimeout = function() {
        let Et = A.timeout ? "timeout of " + A.timeout + "ms exceeded" : "timeout exceeded";
        const Ht = A.transitional || pt;
        A.timeoutErrorMessage && (Et = A.timeoutErrorMessage), E(new ye(
          Et,
          Ht.clarifyTimeoutError ? ye.ETIMEDOUT : ye.ECONNABORTED,
          g,
          se
        )), se = null;
      }, k === void 0 && T.setContentType(null), "setRequestHeader" in se && I.forEach(T.toJSON(), function(Et, Ht) {
        se.setRequestHeader(Ht, Et);
      }), I.isUndefined(A.withCredentials) || (se.withCredentials = !!A.withCredentials), B && B !== "json" && (se.responseType = A.responseType), Z && ([Be, X] = Eo(Z, !0), se.addEventListener("progress", Be)), ie && se.upload && ([ce, ht] = Eo(ie), se.upload.addEventListener("progress", ce), se.upload.addEventListener("loadend", ht)), (A.cancelToken || A.signal) && (Y = (lt) => {
        se && (E(!lt || lt.type ? new fr(null, g, se) : lt), se.abort(), se = null);
      }, A.cancelToken && A.cancelToken.subscribe(Y), A.signal && (A.signal.aborted ? Y() : A.signal.addEventListener("abort", Y)));
      const qt = Sf(A.url);
      if (qt && Qe.protocols.indexOf(qt) === -1) {
        E(new ye("Unsupported protocol " + qt + ":", ye.ERR_BAD_REQUEST, g));
        return;
      }
      se.send(k || null);
    });
  }, Rf = (g, w) => {
    const { length: _ } = g = g ? g.filter(Boolean) : [];
    if (w || _) {
      let E = new AbortController(), A;
      const k = function(Z) {
        if (!A) {
          A = !0, B();
          const Y = Z instanceof Error ? Z : this.reason;
          E.abort(Y instanceof ye ? Y : new fr(Y instanceof Error ? Y.message : Y));
        }
      };
      let T = w && setTimeout(() => {
        T = null, k(new ye(`timeout ${w} of ms exceeded`, ye.ETIMEDOUT));
      }, w);
      const B = () => {
        g && (T && clearTimeout(T), T = null, g.forEach((Z) => {
          Z.unsubscribe ? Z.unsubscribe(k) : Z.removeEventListener("abort", k);
        }), g = null);
      };
      g.forEach((Z) => Z.addEventListener("abort", k));
      const { signal: ie } = E;
      return ie.unsubscribe = () => I.asap(B), ie;
    }
  };
  const Tf = function* (g, w) {
    let _ = g.byteLength;
    if (_ < w) {
      yield g;
      return;
    }
    let E = 0, A;
    for (; E < _; )
      A = E + w, yield g.slice(E, A), E = A;
  }, kf = async function* (g, w) {
    for await (const _ of Pf(g))
      yield* Tf(_, w);
  }, Pf = async function* (g) {
    if (g[Symbol.asyncIterator]) {
      yield* g;
      return;
    }
    const w = g.getReader();
    try {
      for (; ; ) {
        const { done: _, value: E } = await w.read();
        if (_)
          break;
        yield E;
      }
    } finally {
      await w.cancel();
    }
  }, Gs = (g, w, _, E) => {
    const A = kf(g, w);
    let k = 0, T, B = (ie) => {
      T || (T = !0, E && E(ie));
    };
    return new ReadableStream({
      async pull(ie) {
        try {
          const { done: Z, value: Y } = await A.next();
          if (Z) {
            B(), ie.close();
            return;
          }
          let ce = Y.byteLength;
          if (_) {
            let Be = k += ce;
            _(Be);
          }
          ie.enqueue(new Uint8Array(Y));
        } catch (Z) {
          throw B(Z), Z;
        }
      },
      cancel(ie) {
        return B(ie), A.return();
      }
    }, {
      highWaterMark: 2
    });
  }, Ks = 64 * 1024, { isFunction: Oo } = I, If = (({ Request: g, Response: w }) => ({
    Request: g,
    Response: w
  }))(I.global), {
    ReadableStream: zs,
    TextEncoder: Ys
  } = I.global, Xs = (g, ...w) => {
    try {
      return !!g(...w);
    } catch {
      return !1;
    }
  }, $f = (g) => {
    g = I.merge.call({
      skipUndefined: !0
    }, If, g);
    const { fetch: w, Request: _, Response: E } = g, A = w ? Oo(w) : typeof fetch == "function", k = Oo(_), T = Oo(E);
    if (!A)
      return !1;
    const B = A && Oo(zs), ie = A && (typeof Ys == "function" ? /* @__PURE__ */ ((X) => (ve) => X.encode(ve))(new Ys()) : async (X) => new Uint8Array(await new _(X).arrayBuffer())), Z = k && B && Xs(() => {
      let X = !1;
      const ve = new _(Qe.origin, {
        body: new zs(),
        method: "POST",
        get duplex() {
          return X = !0, "half";
        }
      }).headers.has("Content-Type");
      return X && !ve;
    }), Y = T && B && Xs(() => I.isReadableStream(new E("").body)), ce = {
      stream: Y && ((X) => X.body)
    };
    A && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((X) => {
      !ce[X] && (ce[X] = (ve, se) => {
        let ot = ve && ve[X];
        if (ot)
          return ot.call(ve);
        throw new ye(`Response type '${X}' is not supported`, ye.ERR_NOT_SUPPORT, se);
      });
    });
    const Be = async (X) => {
      if (X == null)
        return 0;
      if (I.isBlob(X))
        return X.size;
      if (I.isSpecCompliantForm(X))
        return (await new _(Qe.origin, {
          method: "POST",
          body: X
        }).arrayBuffer()).byteLength;
      if (I.isArrayBufferView(X) || I.isArrayBuffer(X))
        return X.byteLength;
      if (I.isURLSearchParams(X) && (X = X + ""), I.isString(X))
        return (await ie(X)).byteLength;
    }, ht = async (X, ve) => {
      const se = I.toFiniteNumber(X.getContentLength());
      return se ?? Be(ve);
    };
    return async (X) => {
      let {
        url: ve,
        method: se,
        data: ot,
        signal: qt,
        cancelToken: lt,
        timeout: Et,
        onDownloadProgress: Ht,
        onUploadProgress: Bn,
        responseType: Lt,
        headers: Ni,
        withCredentials: To = "same-origin",
        fetchOptions: ol
      } = Hs(X), il = w || fetch;
      Lt = Lt ? (Lt + "").toLowerCase() : "text";
      let ko = Rf([qt, lt && lt.toAbortSignal()], Et), qr = null;
      const qn = ko && ko.unsubscribe && (() => {
        ko.unsubscribe();
      });
      let al;
      try {
        if (Bn && Z && se !== "get" && se !== "head" && (al = await ht(Ni, ot)) !== 0) {
          let Dn = new _(ve, {
            method: "POST",
            body: ot,
            duplex: "half"
          }), dr;
          if (I.isFormData(ot) && (dr = Dn.headers.get("content-type")) && Ni.setContentType(dr), Dn.body) {
            const [Mi, Po] = Ls(
              al,
              Eo(Us(Bn))
            );
            ot = Gs(Dn.body, Ks, Mi, Po);
          }
        }
        I.isString(To) || (To = To ? "include" : "omit");
        const rn = k && "credentials" in _.prototype, sl = {
          ...ol,
          signal: ko,
          method: se.toUpperCase(),
          headers: Ni.normalize().toJSON(),
          body: ot,
          duplex: "half",
          credentials: rn ? To : void 0
        };
        qr = k && new _(ve, sl);
        let Cn = await (k ? il(qr, ol) : il(ve, sl));
        const ll = Y && (Lt === "stream" || Lt === "response");
        if (Y && (Ht || ll && qn)) {
          const Dn = {};
          ["status", "statusText", "headers"].forEach((ul) => {
            Dn[ul] = Cn[ul];
          });
          const dr = I.toFiniteNumber(Cn.headers.get("content-length")), [Mi, Po] = Ht && Ls(
            dr,
            Eo(Us(Ht), !0)
          ) || [];
          Cn = new E(
            Gs(Cn.body, Ks, Mi, () => {
              Po && Po(), qn && qn();
            }),
            Dn
          );
        }
        Lt = Lt || "text";
        let Vf = await ce[I.findKey(ce, Lt) || "text"](Cn, X);
        return !ll && qn && qn(), await new Promise((Dn, dr) => {
          qs(Dn, dr, {
            data: Vf,
            headers: Wt.from(Cn.headers),
            status: Cn.status,
            statusText: Cn.statusText,
            config: X,
            request: qr
          });
        });
      } catch (rn) {
        throw qn && qn(), rn && rn.name === "TypeError" && /Load failed|fetch/i.test(rn.message) ? Object.assign(
          new ye("Network Error", ye.ERR_NETWORK, X, qr),
          {
            cause: rn.cause || rn
          }
        ) : ye.from(rn, rn && rn.code, X, qr);
      }
    };
  }, Nf = /* @__PURE__ */ new Map(), Js = (g) => {
    let w = g && g.env || {};
    const { fetch: _, Request: E, Response: A } = w, k = [
      E,
      A,
      _
    ];
    let T = k.length, B = T, ie, Z, Y = Nf;
    for (; B--; )
      ie = k[B], Z = Y.get(ie), Z === void 0 && Y.set(ie, Z = B ? /* @__PURE__ */ new Map() : $f(w)), Y = Z;
    return Z;
  };
  Js();
  const ki = {
    http: $r,
    xhr: Df,
    fetch: {
      get: Js
    }
  };
  I.forEach(ki, (g, w) => {
    if (g) {
      try {
        Object.defineProperty(g, "name", { value: w });
      } catch {
      }
      Object.defineProperty(g, "adapterName", { value: w });
    }
  });
  const Qs = (g) => `- ${g}`, Mf = (g) => I.isFunction(g) || g === null || g === !1;
  function Ff(g, w) {
    g = I.isArray(g) ? g : [g];
    const { length: _ } = g;
    let E, A;
    const k = {};
    for (let T = 0; T < _; T++) {
      E = g[T];
      let B;
      if (A = E, !Mf(E) && (A = ki[(B = String(E)).toLowerCase()], A === void 0))
        throw new ye(`Unknown adapter '${B}'`);
      if (A && (I.isFunction(A) || (A = A.get(w))))
        break;
      k[B || "#" + T] = A;
    }
    if (!A) {
      const T = Object.entries(k).map(
        ([ie, Z]) => `adapter ${ie} ` + (Z === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let B = _ ? T.length > 1 ? `since :
` + T.map(Qs).join(`
`) : " " + Qs(T[0]) : "as no adapter specified";
      throw new ye(
        "There is no suitable adapter to dispatch the request " + B,
        "ERR_NOT_SUPPORT"
      );
    }
    return A;
  }
  var Zs = {
    /**
     * Resolve an adapter from a list of adapter names or functions.
     * @type {Function}
     */
    getAdapter: Ff,
    /**
     * Exposes all known adapters
     * @type {Object<string, Function|Object>}
     */
    adapters: ki
  };
  function Pi(g) {
    if (g.cancelToken && g.cancelToken.throwIfRequested(), g.signal && g.signal.aborted)
      throw new fr(null, g);
  }
  function el(g) {
    return Pi(g), g.headers = Wt.from(g.headers), g.data = Ti.call(
      g,
      g.transformRequest
    ), ["post", "put", "patch"].indexOf(g.method) !== -1 && g.headers.setContentType("application/x-www-form-urlencoded", !1), Zs.getAdapter(g.adapter || ur.adapter, g)(g).then(function(E) {
      return Pi(g), E.data = Ti.call(
        g,
        g.transformResponse,
        E
      ), E.headers = Wt.from(E.headers), E;
    }, function(E) {
      return Bs(E) || (Pi(g), E && E.response && (E.response.data = Ti.call(
        g,
        g.transformResponse,
        E.response
      ), E.response.headers = Wt.from(E.response.headers))), Promise.reject(E);
    });
  }
  const tl = "1.13.2", Ao = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((g, w) => {
    Ao[g] = function(E) {
      return typeof E === g || "a" + (w < 1 ? "n " : " ") + g;
    };
  });
  const nl = {};
  Ao.transitional = function(w, _, E) {
    function A(k, T) {
      return "[Axios v" + tl + "] Transitional option '" + k + "'" + T + (E ? ". " + E : "");
    }
    return (k, T, B) => {
      if (w === !1)
        throw new ye(
          A(T, " has been removed" + (_ ? " in " + _ : "")),
          ye.ERR_DEPRECATED
        );
      return _ && !nl[T] && (nl[T] = !0, console.warn(
        A(
          T,
          " has been deprecated since v" + _ + " and will be removed in the near future"
        )
      )), w ? w(k, T, B) : !0;
    };
  }, Ao.spelling = function(w) {
    return (_, E) => (console.warn(`${E} is likely a misspelling of ${w}`), !0);
  };
  function jf(g, w, _) {
    if (typeof g != "object")
      throw new ye("options must be an object", ye.ERR_BAD_OPTION_VALUE);
    const E = Object.keys(g);
    let A = E.length;
    for (; A-- > 0; ) {
      const k = E[A], T = w[k];
      if (T) {
        const B = g[k], ie = B === void 0 || T(B, k, g);
        if (ie !== !0)
          throw new ye("option " + k + " must be " + ie, ye.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (_ !== !0)
        throw new ye("Unknown option " + k, ye.ERR_BAD_OPTION);
    }
  }
  var Co = {
    assertOptions: jf,
    validators: Ao
  };
  const nn = Co.validators;
  class Do {
    constructor(w) {
      this.defaults = w || {}, this.interceptors = {
        request: new Zt(),
        response: new Zt()
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
    async request(w, _) {
      try {
        return await this._request(w, _);
      } catch (E) {
        if (E instanceof Error) {
          let A = {};
          Error.captureStackTrace ? Error.captureStackTrace(A) : A = new Error();
          const k = A.stack ? A.stack.replace(/^.+\n/, "") : "";
          try {
            E.stack ? k && !String(E.stack).endsWith(k.replace(/^.+\n.+\n/, "")) && (E.stack += `
` + k) : E.stack = k;
          } catch {
          }
        }
        throw E;
      }
    }
    _request(w, _) {
      typeof w == "string" ? (_ = _ || {}, _.url = w) : _ = w || {}, _ = jn(this.defaults, _);
      const { transitional: E, paramsSerializer: A, headers: k } = _;
      E !== void 0 && Co.assertOptions(E, {
        silentJSONParsing: nn.transitional(nn.boolean),
        forcedJSONParsing: nn.transitional(nn.boolean),
        clarifyTimeoutError: nn.transitional(nn.boolean)
      }, !1), A != null && (I.isFunction(A) ? _.paramsSerializer = {
        serialize: A
      } : Co.assertOptions(A, {
        encode: nn.function,
        serialize: nn.function
      }, !0)), _.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? _.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : _.allowAbsoluteUrls = !0), Co.assertOptions(_, {
        baseUrl: nn.spelling("baseURL"),
        withXsrfToken: nn.spelling("withXSRFToken")
      }, !0), _.method = (_.method || this.defaults.method || "get").toLowerCase();
      let T = k && I.merge(
        k.common,
        k[_.method]
      );
      k && I.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (X) => {
          delete k[X];
        }
      ), _.headers = Wt.concat(T, k);
      const B = [];
      let ie = !0;
      this.interceptors.request.forEach(function(ve) {
        typeof ve.runWhen == "function" && ve.runWhen(_) === !1 || (ie = ie && ve.synchronous, B.unshift(ve.fulfilled, ve.rejected));
      });
      const Z = [];
      this.interceptors.response.forEach(function(ve) {
        Z.push(ve.fulfilled, ve.rejected);
      });
      let Y, ce = 0, Be;
      if (!ie) {
        const X = [el.bind(this), void 0];
        for (X.unshift(...B), X.push(...Z), Be = X.length, Y = Promise.resolve(_); ce < Be; )
          Y = Y.then(X[ce++], X[ce++]);
        return Y;
      }
      Be = B.length;
      let ht = _;
      for (; ce < Be; ) {
        const X = B[ce++], ve = B[ce++];
        try {
          ht = X(ht);
        } catch (se) {
          ve.call(this, se);
          break;
        }
      }
      try {
        Y = el.call(this, ht);
      } catch (X) {
        return Promise.reject(X);
      }
      for (ce = 0, Be = Z.length; ce < Be; )
        Y = Y.then(Z[ce++], Z[ce++]);
      return Y;
    }
    getUri(w) {
      w = jn(this.defaults, w);
      const _ = Vs(w.baseURL, w.url, w.allowAbsoluteUrls);
      return we(_, w.params, w.paramsSerializer);
    }
  }
  I.forEach(["delete", "get", "head", "options"], function(w) {
    Do.prototype[w] = function(_, E) {
      return this.request(jn(E || {}, {
        method: w,
        url: _,
        data: (E || {}).data
      }));
    };
  }), I.forEach(["post", "put", "patch"], function(w) {
    function _(E) {
      return function(k, T, B) {
        return this.request(jn(B || {}, {
          method: w,
          headers: E ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: k,
          data: T
        }));
      };
    }
    Do.prototype[w] = _(), Do.prototype[w + "Form"] = _(!0);
  });
  var Ro = Do;
  class Ii {
    constructor(w) {
      if (typeof w != "function")
        throw new TypeError("executor must be a function.");
      let _;
      this.promise = new Promise(function(k) {
        _ = k;
      });
      const E = this;
      this.promise.then((A) => {
        if (!E._listeners) return;
        let k = E._listeners.length;
        for (; k-- > 0; )
          E._listeners[k](A);
        E._listeners = null;
      }), this.promise.then = (A) => {
        let k;
        const T = new Promise((B) => {
          E.subscribe(B), k = B;
        }).then(A);
        return T.cancel = function() {
          E.unsubscribe(k);
        }, T;
      }, w(function(k, T, B) {
        E.reason || (E.reason = new fr(k, T, B), _(E.reason));
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
    subscribe(w) {
      if (this.reason) {
        w(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(w) : this._listeners = [w];
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(w) {
      if (!this._listeners)
        return;
      const _ = this._listeners.indexOf(w);
      _ !== -1 && this._listeners.splice(_, 1);
    }
    toAbortSignal() {
      const w = new AbortController(), _ = (E) => {
        w.abort(E);
      };
      return this.subscribe(_), w.signal.unsubscribe = () => this.unsubscribe(_), w.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let w;
      return {
        token: new Ii(function(A) {
          w = A;
        }),
        cancel: w
      };
    }
  }
  var Bf = Ii;
  function qf(g) {
    return function(_) {
      return g.apply(null, _);
    };
  }
  function Lf(g) {
    return I.isObject(g) && g.isAxiosError === !0;
  }
  const $i = {
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
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
  };
  Object.entries($i).forEach(([g, w]) => {
    $i[w] = g;
  });
  var Uf = $i;
  function rl(g) {
    const w = new Ro(g), _ = e(Ro.prototype.request, w);
    return I.extend(_, Ro.prototype, w, { allOwnKeys: !0 }), I.extend(_, w, null, { allOwnKeys: !0 }), _.create = function(A) {
      return rl(jn(g, A));
    }, _;
  }
  const Ze = rl(ur);
  return Ze.Axios = Ro, Ze.CanceledError = fr, Ze.CancelToken = Bf, Ze.isCancel = Bs, Ze.VERSION = tl, Ze.toFormData = P, Ze.AxiosError = ye, Ze.Cancel = Ze.CanceledError, Ze.all = function(w) {
    return Promise.all(w);
  }, Ze.spread = qf, Ze.isAxiosError = Lf, Ze.mergeConfig = jn, Ze.AxiosHeaders = Wt, Ze.formToJSON = (g) => lr(I.isHTMLForm(g) ? new FormData(g) : g), Ze.getAdapter = Zs.getAdapter, Ze.HttpStatusCode = Uf, Ze.default = Ze, pa = Ze, pa;
}
var yu;
function by() {
  if (yu) return Pt;
  yu = 1;
  var e = Pt && Pt.__assign || function() {
    return e = Object.assign || function(a) {
      for (var u, l = 1, s = arguments.length; l < s; l++) {
        u = arguments[l];
        for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (a[f] = u[f]);
      }
      return a;
    }, e.apply(this, arguments);
  }, t = Pt && Pt.__awaiter || function(a, u, l, s) {
    function f(d) {
      return d instanceof l ? d : new l(function(m) {
        m(d);
      });
    }
    return new (l || (l = Promise))(function(d, m) {
      function v(c) {
        try {
          p(s.next(c));
        } catch (b) {
          m(b);
        }
      }
      function h(c) {
        try {
          p(s.throw(c));
        } catch (b) {
          m(b);
        }
      }
      function p(c) {
        c.done ? d(c.value) : f(c.value).then(v, h);
      }
      p((s = s.apply(a, u || [])).next());
    });
  }, r = Pt && Pt.__generator || function(a, u) {
    var l = { label: 0, sent: function() {
      if (d[0] & 1) throw d[1];
      return d[1];
    }, trys: [], ops: [] }, s, f, d, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return m.next = v(0), m.throw = v(1), m.return = v(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function v(p) {
      return function(c) {
        return h([p, c]);
      };
    }
    function h(p) {
      if (s) throw new TypeError("Generator is already executing.");
      for (; m && (m = 0, p[0] && (l = 0)), l; ) try {
        if (s = 1, f && (d = p[0] & 2 ? f.return : p[0] ? f.throw || ((d = f.return) && d.call(f), 0) : f.next) && !(d = d.call(f, p[1])).done) return d;
        switch (f = 0, d && (p = [p[0] & 2, d.value]), p[0]) {
          case 0:
          case 1:
            d = p;
            break;
          case 4:
            return l.label++, { value: p[1], done: !1 };
          case 5:
            l.label++, f = p[1], p = [0];
            continue;
          case 7:
            p = l.ops.pop(), l.trys.pop();
            continue;
          default:
            if (d = l.trys, !(d = d.length > 0 && d[d.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              l = 0;
              continue;
            }
            if (p[0] === 3 && (!d || p[1] > d[0] && p[1] < d[3])) {
              l.label = p[1];
              break;
            }
            if (p[0] === 6 && l.label < d[1]) {
              l.label = d[1], d = p;
              break;
            }
            if (d && l.label < d[2]) {
              l.label = d[2], l.ops.push(p);
              break;
            }
            d[2] && l.ops.pop(), l.trys.pop();
            continue;
        }
        p = u.call(a, l);
      } catch (c) {
        p = [6, c], f = 0;
      } finally {
        s = d = 0;
      }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  }, n = Pt && Pt.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.AxiosClient = void 0;
  var o = n(/* @__PURE__ */ gy()), i = (
    /** @class */
    (function() {
      function a(u) {
        var l = u.responseHandler, s = u.requestConfigBuilder;
        this.responseHandler = l, this.requestConfigBuilder = s;
      }
      return a.prototype.get = function(u, l) {
        return t(this, void 0, void 0, function() {
          var s;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", u, l)];
              case 1:
                return s = f.sent(), [4, this.sendRequest(s)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.getData = function(u, l) {
        return t(this, void 0, void 0, function() {
          var s;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", u, l, {
                  responseType: "arraybuffer"
                })];
              case 1:
                return s = f.sent(), [4, this.sendRequest(s)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.post = function(u, l) {
        return t(this, void 0, void 0, function() {
          var s;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", u, l)];
              case 1:
                return s = f.sent(), [4, this.sendRequest(s)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.postData = function(u, l) {
        return t(this, void 0, void 0, function() {
          var s;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", u, l)];
              case 1:
                return s = f.sent(), [4, this.sendRequest(s)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.put = function(u, l) {
        return t(this, void 0, void 0, function() {
          var s;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("put", u, l)];
              case 1:
                return s = f.sent(), [4, this.sendRequest(s)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.delete = function(u, l) {
        return t(this, void 0, void 0, function() {
          var s;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("delete", u, l)];
              case 1:
                return s = f.sent(), [4, this.sendRequest(s)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.sendRequest = function(u) {
        return this.responseHandler.handle(
          // eslint-disable-next-line new-cap
          (0, o.default)(e(e({}, u), { maxBodyLength: 1 / 0, maxContentLength: 1 / 0 }))
        );
      }, a;
    })()
  );
  return Pt.AxiosClient = i, Pt;
}
var gu;
function wy() {
  return gu || (gu = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DefaultHttpClient = void 0;
    var t = by();
    Object.defineProperty(e, "DefaultHttpClient", { enumerable: !0, get: function() {
      return t.AxiosClient;
    } });
  })(da)), da;
}
var It = {}, ha, bu;
function Ir() {
  return bu || (bu = 1, ha = TypeError), ha;
}
const Sy = {}, xy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sy
}, Symbol.toStringTag, { value: "Module" })), _y = /* @__PURE__ */ Sm(xy);
var ma, wu;
function Ai() {
  if (wu) return ma;
  wu = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, i = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = o && i && typeof i.get == "function" ? i.get : null, u = o && Set.prototype.forEach, l = typeof WeakMap == "function" && WeakMap.prototype, s = l ? WeakMap.prototype.has : null, f = typeof WeakSet == "function" && WeakSet.prototype, d = f ? WeakSet.prototype.has : null, m = typeof WeakRef == "function" && WeakRef.prototype, v = m ? WeakRef.prototype.deref : null, h = Boolean.prototype.valueOf, p = Object.prototype.toString, c = Function.prototype.toString, b = String.prototype.match, y = String.prototype.slice, S = String.prototype.replace, x = String.prototype.toUpperCase, C = String.prototype.toLowerCase, O = RegExp.prototype.test, D = Array.prototype.concat, $ = Array.prototype.join, j = Array.prototype.slice, F = Math.floor, q = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, z = Object.getOwnPropertySymbols, ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, H = typeof Symbol == "function" && typeof Symbol.iterator == "object", W = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === H || !0) ? Symbol.toStringTag : null, L = Object.prototype.propertyIsEnumerable, J = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(P) {
    return P.__proto__;
  } : null);
  function M(P, N) {
    if (P === 1 / 0 || P === -1 / 0 || P !== P || P && P > -1e3 && P < 1e3 || O.call(/e/, N))
      return N;
    var Te = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof P == "number") {
      var Me = P < 0 ? -F(-P) : F(P);
      if (Me !== P) {
        var Fe = String(Me), we = y.call(N, Fe.length + 1);
        return S.call(Fe, Te, "$&_") + "." + S.call(S.call(we, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return S.call(N, Te, "$&_");
  }
  var re = _y, oe = re.custom, fe = rt(oe) ? oe : null, xe = {
    __proto__: null,
    double: '"',
    single: "'"
  }, G = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ma = function P(N, Te, Me, Fe) {
    var we = Te || {};
    if (dt(we, "quoteStyle") && !dt(xe, we.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (dt(we, "maxStringLength") && (typeof we.maxStringLength == "number" ? we.maxStringLength < 0 && we.maxStringLength !== 1 / 0 : we.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Qt = dt(we, "customInspect") ? we.customInspect : !0;
    if (typeof Qt != "boolean" && Qt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (dt(we, "indent") && we.indent !== null && we.indent !== "	" && !(parseInt(we.indent, 10) === we.indent && we.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (dt(we, "numericSeparator") && typeof we.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Zt = we.numericSeparator;
    if (typeof N > "u")
      return "undefined";
    if (N === null)
      return "null";
    if (typeof N == "boolean")
      return N ? "true" : "false";
    if (typeof N == "string")
      return ye(N, we);
    if (typeof N == "number") {
      if (N === 0)
        return 1 / 0 / N > 0 ? "0" : "-0";
      var pt = String(N);
      return Zt ? M(N, pt) : pt;
    }
    if (typeof N == "bigint") {
      var en = String(N) + "n";
      return Zt ? M(N, en) : en;
    }
    var Mr = typeof we.depth > "u" ? 5 : we.depth;
    if (typeof Me > "u" && (Me = 0), Me >= Mr && Mr > 0 && typeof N == "object")
      return le(N) ? "[Array]" : "[Object]";
    var An = yo(we, Me);
    if (typeof Fe > "u")
      Fe = [];
    else if (Jt(Fe, N) >= 0)
      return "[Circular]";
    function Tt(pn, tn, cr) {
      if (tn && (Fe = j.call(Fe), Fe.push(tn)), cr) {
        var xo = {
          depth: we.depth
        };
        return dt(we, "quoteStyle") && (xo.quoteStyle = we.quoteStyle), P(pn, xo, Me + 1, Fe);
      }
      return P(pn, we, Me + 1, Fe);
    }
    if (typeof N == "function" && !_e(N)) {
      var ir = xn(N), ar = or(N, Tt);
      return "[Function" + (ir ? ": " + ir : " (anonymous)") + "]" + (ar.length > 0 ? " { " + $.call(ar, ", ") + " }" : "");
    }
    if (rt(N)) {
      var go = H ? S.call(String(N), /^(Symbol\(.*\))_[^)]*$/, "$1") : ue.call(N);
      return typeof N == "object" && !H ? On(go) : go;
    }
    if (I(N)) {
      for (var Mn = "<" + C.call(String(N.nodeName)), Fr = N.attributes || [], sr = 0; sr < Fr.length; sr++)
        Mn += " " + Fr[sr].name + "=" + Q(R(Fr[sr].value), "double", we);
      return Mn += ">", N.childNodes && N.childNodes.length && (Mn += "..."), Mn += "</" + C.call(String(N.nodeName)) + ">", Mn;
    }
    if (le(N)) {
      if (N.length === 0)
        return "[]";
      var Qe = or(N, Tt);
      return An && !vo(Qe) ? "[" + Nr(Qe, An) + "]" : "[ " + $.call(Qe, ", ") + " ]";
    }
    if (ae(N)) {
      var jr = or(N, Tt);
      return !("cause" in Error.prototype) && "cause" in N && !L.call(N, "cause") ? "{ [" + String(N) + "] " + $.call(D.call("[cause]: " + Tt(N.cause), jr), ", ") + " }" : jr.length === 0 ? "[" + String(N) + "]" : "{ [" + String(N) + "] " + $.call(jr, ", ") + " }";
    }
    if (typeof N == "object" && Qt) {
      if (fe && typeof N[fe] == "function" && re)
        return re(N, { depth: Mr - Me });
      if (Qt !== "symbol" && typeof N.inspect == "function")
        return N.inspect();
    }
    if (Rt(N)) {
      var bo = [];
      return n && n.call(N, function(pn, tn) {
        bo.push(Tt(tn, N, !0) + " => " + Tt(pn, N));
      }), rr("Map", r.call(N), bo, An);
    }
    if (En(N)) {
      var wo = [];
      return u && u.call(N, function(pn) {
        wo.push(Tt(pn, N));
      }), rr("Set", a.call(N), wo, An);
    }
    if (_n(N))
      return $r("WeakMap");
    if (js(N))
      return $r("WeakSet");
    if (dn(N))
      return $r("WeakRef");
    if (Ae(N))
      return On(Tt(Number(N)));
    if (xt(N))
      return On(Tt(q.call(N)));
    if (je(N))
      return On(h.call(N));
    if (De(N))
      return On(Tt(String(N)));
    if (typeof window < "u" && N === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && N === globalThis || typeof uo < "u" && N === uo)
      return "{ [object globalThis] }";
    if (!Oe(N) && !_e(N)) {
      var lr = or(N, Tt), So = J ? J(N) === Object.prototype : N instanceof Object || N.constructor === Object, Fn = N instanceof Object ? "" : "null prototype", ur = !So && W && Object(N) === N && W in N ? y.call(_t(N), 8, -1) : Fn ? "Object" : "", Di = So || typeof N.constructor != "function" ? "" : N.constructor.name ? N.constructor.name + " " : "", Br = Di + (ur || Fn ? "[" + $.call(D.call([], ur || [], Fn || []), ": ") + "] " : "");
      return lr.length === 0 ? Br + "{}" : An ? Br + "{" + Nr(lr, An) + "}" : Br + "{ " + $.call(lr, ", ") + " }";
    }
    return String(N);
  };
  function Q(P, N, Te) {
    var Me = Te.quoteStyle || N, Fe = xe[Me];
    return Fe + P + Fe;
  }
  function R(P) {
    return S.call(String(P), /"/g, "&quot;");
  }
  function V(P) {
    return !W || !(typeof P == "object" && (W in P || typeof P[W] < "u"));
  }
  function le(P) {
    return _t(P) === "[object Array]" && V(P);
  }
  function Oe(P) {
    return _t(P) === "[object Date]" && V(P);
  }
  function _e(P) {
    return _t(P) === "[object RegExp]" && V(P);
  }
  function ae(P) {
    return _t(P) === "[object Error]" && V(P);
  }
  function De(P) {
    return _t(P) === "[object String]" && V(P);
  }
  function Ae(P) {
    return _t(P) === "[object Number]" && V(P);
  }
  function je(P) {
    return _t(P) === "[object Boolean]" && V(P);
  }
  function rt(P) {
    if (H)
      return P && typeof P == "object" && P instanceof Symbol;
    if (typeof P == "symbol")
      return !0;
    if (!P || typeof P != "object" || !ue)
      return !1;
    try {
      return ue.call(P), !0;
    } catch {
    }
    return !1;
  }
  function xt(P) {
    if (!P || typeof P != "object" || !q)
      return !1;
    try {
      return q.call(P), !0;
    } catch {
    }
    return !1;
  }
  var st = Object.prototype.hasOwnProperty || function(P) {
    return P in this;
  };
  function dt(P, N) {
    return st.call(P, N);
  }
  function _t(P) {
    return p.call(P);
  }
  function xn(P) {
    if (P.name)
      return P.name;
    var N = b.call(c.call(P), /^function\s*([\w$]+)/);
    return N ? N[1] : null;
  }
  function Jt(P, N) {
    if (P.indexOf)
      return P.indexOf(N);
    for (var Te = 0, Me = P.length; Te < Me; Te++)
      if (P[Te] === N)
        return Te;
    return -1;
  }
  function Rt(P) {
    if (!r || !P || typeof P != "object")
      return !1;
    try {
      r.call(P);
      try {
        a.call(P);
      } catch {
        return !0;
      }
      return P instanceof Map;
    } catch {
    }
    return !1;
  }
  function _n(P) {
    if (!s || !P || typeof P != "object")
      return !1;
    try {
      s.call(P, s);
      try {
        d.call(P, d);
      } catch {
        return !0;
      }
      return P instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function dn(P) {
    if (!v || !P || typeof P != "object")
      return !1;
    try {
      return v.call(P), !0;
    } catch {
    }
    return !1;
  }
  function En(P) {
    if (!a || !P || typeof P != "object")
      return !1;
    try {
      a.call(P);
      try {
        r.call(P);
      } catch {
        return !0;
      }
      return P instanceof Set;
    } catch {
    }
    return !1;
  }
  function js(P) {
    if (!d || !P || typeof P != "object")
      return !1;
    try {
      d.call(P, d);
      try {
        s.call(P, s);
      } catch {
        return !0;
      }
      return P instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function I(P) {
    return !P || typeof P != "object" ? !1 : typeof HTMLElement < "u" && P instanceof HTMLElement ? !0 : typeof P.nodeName == "string" && typeof P.getAttribute == "function";
  }
  function ye(P, N) {
    if (P.length > N.maxStringLength) {
      var Te = P.length - N.maxStringLength, Me = "... " + Te + " more character" + (Te > 1 ? "s" : "");
      return ye(y.call(P, 0, N.maxStringLength), N) + Me;
    }
    var Fe = G[N.quoteStyle || "single"];
    Fe.lastIndex = 0;
    var we = S.call(S.call(P, Fe, "\\$1"), /[\x00-\x1f]/g, mo);
    return Q(we, "single", N);
  }
  function mo(P) {
    var N = P.charCodeAt(0), Te = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[N];
    return Te ? "\\" + Te : "\\x" + (N < 16 ? "0" : "") + x.call(N.toString(16));
  }
  function On(P) {
    return "Object(" + P + ")";
  }
  function $r(P) {
    return P + " { ? }";
  }
  function rr(P, N, Te, Me) {
    var Fe = Me ? Nr(Te, Me) : $.call(Te, ", ");
    return P + " (" + N + ") {" + Fe + "}";
  }
  function vo(P) {
    for (var N = 0; N < P.length; N++)
      if (Jt(P[N], `
`) >= 0)
        return !1;
    return !0;
  }
  function yo(P, N) {
    var Te;
    if (P.indent === "	")
      Te = "	";
    else if (typeof P.indent == "number" && P.indent > 0)
      Te = $.call(Array(P.indent + 1), " ");
    else
      return null;
    return {
      base: Te,
      prev: $.call(Array(N + 1), Te)
    };
  }
  function Nr(P, N) {
    if (P.length === 0)
      return "";
    var Te = `
` + N.prev + N.base;
    return Te + $.call(P, "," + Te) + `
` + N.prev;
  }
  function or(P, N) {
    var Te = le(P), Me = [];
    if (Te) {
      Me.length = P.length;
      for (var Fe = 0; Fe < P.length; Fe++)
        Me[Fe] = dt(P, Fe) ? N(P[Fe], P) : "";
    }
    var we = typeof z == "function" ? z(P) : [], Qt;
    if (H) {
      Qt = {};
      for (var Zt = 0; Zt < we.length; Zt++)
        Qt["$" + we[Zt]] = we[Zt];
    }
    for (var pt in P)
      dt(P, pt) && (Te && String(Number(pt)) === pt && pt < P.length || H && Qt["$" + pt] instanceof Symbol || (O.call(/[^\w$]/, pt) ? Me.push(N(pt, P) + ": " + N(P[pt], P)) : Me.push(pt + ": " + N(P[pt], P))));
    if (typeof z == "function")
      for (var en = 0; en < we.length; en++)
        L.call(P, we[en]) && Me.push("[" + N(we[en]) + "]: " + N(P[we[en]], P));
    return Me;
  }
  return ma;
}
var va, Su;
function Ey() {
  if (Su) return va;
  Su = 1;
  var e = /* @__PURE__ */ Ai(), t = /* @__PURE__ */ Ir(), r = function(u, l, s) {
    for (var f = u, d; (d = f.next) != null; f = d)
      if (d.key === l)
        return f.next = d.next, s || (d.next = /** @type {NonNullable<typeof list.next>} */
        u.next, u.next = d), d;
  }, n = function(u, l) {
    if (u) {
      var s = r(u, l);
      return s && s.value;
    }
  }, o = function(u, l, s) {
    var f = r(u, l);
    f ? f.value = s : u.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: l,
      next: u.next,
      value: s
    };
  }, i = function(u, l) {
    return u ? !!r(u, l) : !1;
  }, a = function(u, l) {
    if (u)
      return r(u, l, !0);
  };
  return va = function() {
    var l, s = {
      assert: function(f) {
        if (!s.has(f))
          throw new t("Side channel does not contain " + e(f));
      },
      delete: function(f) {
        var d = l && l.next, m = a(l, f);
        return m && d && d === m && (l = void 0), !!m;
      },
      get: function(f) {
        return n(l, f);
      },
      has: function(f) {
        return i(l, f);
      },
      set: function(f, d) {
        l || (l = {
          next: void 0
        }), o(
          /** @type {NonNullable<typeof $o>} */
          l,
          f,
          d
        );
      }
    };
    return s;
  }, va;
}
var ya, xu;
function uf() {
  return xu || (xu = 1, ya = Object), ya;
}
var ga, _u;
function Oy() {
  return _u || (_u = 1, ga = Error), ga;
}
var ba, Eu;
function Ay() {
  return Eu || (Eu = 1, ba = EvalError), ba;
}
var wa, Ou;
function Cy() {
  return Ou || (Ou = 1, wa = RangeError), wa;
}
var Sa, Au;
function Dy() {
  return Au || (Au = 1, Sa = ReferenceError), Sa;
}
var xa, Cu;
function Ry() {
  return Cu || (Cu = 1, xa = SyntaxError), xa;
}
var _a, Du;
function Ty() {
  return Du || (Du = 1, _a = URIError), _a;
}
var Ea, Ru;
function ky() {
  return Ru || (Ru = 1, Ea = Math.abs), Ea;
}
var Oa, Tu;
function Py() {
  return Tu || (Tu = 1, Oa = Math.floor), Oa;
}
var Aa, ku;
function Iy() {
  return ku || (ku = 1, Aa = Math.max), Aa;
}
var Ca, Pu;
function $y() {
  return Pu || (Pu = 1, Ca = Math.min), Ca;
}
var Da, Iu;
function Ny() {
  return Iu || (Iu = 1, Da = Math.pow), Da;
}
var Ra, $u;
function My() {
  return $u || ($u = 1, Ra = Math.round), Ra;
}
var Ta, Nu;
function Fy() {
  return Nu || (Nu = 1, Ta = Number.isNaN || function(t) {
    return t !== t;
  }), Ta;
}
var ka, Mu;
function jy() {
  if (Mu) return ka;
  Mu = 1;
  var e = /* @__PURE__ */ Fy();
  return ka = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, ka;
}
var Pa, Fu;
function By() {
  return Fu || (Fu = 1, Pa = Object.getOwnPropertyDescriptor), Pa;
}
var Ia, ju;
function cf() {
  if (ju) return Ia;
  ju = 1;
  var e = /* @__PURE__ */ By();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ia = e, Ia;
}
var $a, Bu;
function qy() {
  if (Bu) return $a;
  Bu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return $a = e, $a;
}
var Na, qu;
function Ly() {
  return qu || (qu = 1, Na = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[r] = o;
    for (var i in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var u = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (u.value !== o || u.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Na;
}
var Ma, Lu;
function Uy() {
  if (Lu) return Ma;
  Lu = 1;
  var e = typeof Symbol < "u" && Symbol, t = Ly();
  return Ma = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Ma;
}
var Fa, Uu;
function ff() {
  return Uu || (Uu = 1, Fa = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Fa;
}
var ja, Vu;
function df() {
  if (Vu) return ja;
  Vu = 1;
  var e = /* @__PURE__ */ uf();
  return ja = e.getPrototypeOf || null, ja;
}
var Ba, Wu;
function Vy() {
  if (Wu) return Ba;
  Wu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", o = function(l, s) {
    for (var f = [], d = 0; d < l.length; d += 1)
      f[d] = l[d];
    for (var m = 0; m < s.length; m += 1)
      f[m + l.length] = s[m];
    return f;
  }, i = function(l, s) {
    for (var f = [], d = s, m = 0; d < l.length; d += 1, m += 1)
      f[m] = l[d];
    return f;
  }, a = function(u, l) {
    for (var s = "", f = 0; f < u.length; f += 1)
      s += u[f], f + 1 < u.length && (s += l);
    return s;
  };
  return Ba = function(l) {
    var s = this;
    if (typeof s != "function" || t.apply(s) !== n)
      throw new TypeError(e + s);
    for (var f = i(arguments, 1), d, m = function() {
      if (this instanceof d) {
        var b = s.apply(
          this,
          o(f, arguments)
        );
        return Object(b) === b ? b : this;
      }
      return s.apply(
        l,
        o(f, arguments)
      );
    }, v = r(0, s.length - f.length), h = [], p = 0; p < v; p++)
      h[p] = "$" + p;
    if (d = Function("binder", "return function (" + a(h, ",") + "){ return binder.apply(this,arguments); }")(m), s.prototype) {
      var c = function() {
      };
      c.prototype = s.prototype, d.prototype = new c(), c.prototype = null;
    }
    return d;
  }, Ba;
}
var qa, Hu;
function Ci() {
  if (Hu) return qa;
  Hu = 1;
  var e = Vy();
  return qa = Function.prototype.bind || e, qa;
}
var La, Gu;
function Ns() {
  return Gu || (Gu = 1, La = Function.prototype.call), La;
}
var Ua, Ku;
function pf() {
  return Ku || (Ku = 1, Ua = Function.prototype.apply), Ua;
}
var Va, zu;
function Wy() {
  return zu || (zu = 1, Va = typeof Reflect < "u" && Reflect && Reflect.apply), Va;
}
var Wa, Yu;
function Hy() {
  if (Yu) return Wa;
  Yu = 1;
  var e = Ci(), t = pf(), r = Ns(), n = Wy();
  return Wa = n || e.call(r, t), Wa;
}
var Ha, Xu;
function hf() {
  if (Xu) return Ha;
  Xu = 1;
  var e = Ci(), t = /* @__PURE__ */ Ir(), r = Ns(), n = Hy();
  return Ha = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, Ha;
}
var Ga, Ju;
function Gy() {
  if (Ju) return Ga;
  Ju = 1;
  var e = hf(), t = /* @__PURE__ */ cf(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return Ga = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(u) {
      return i(u == null ? u : o(u));
    }
  ) : !1, Ga;
}
var Ka, Qu;
function Ky() {
  if (Qu) return Ka;
  Qu = 1;
  var e = ff(), t = df(), r = /* @__PURE__ */ Gy();
  return Ka = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : r ? function(o) {
    return r(o);
  } : null, Ka;
}
var za, Zu;
function zy() {
  if (Zu) return za;
  Zu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Ci();
  return za = r.call(e, t), za;
}
var Ya, ec;
function Ms() {
  if (ec) return Ya;
  ec = 1;
  var e, t = /* @__PURE__ */ uf(), r = /* @__PURE__ */ Oy(), n = /* @__PURE__ */ Ay(), o = /* @__PURE__ */ Cy(), i = /* @__PURE__ */ Dy(), a = /* @__PURE__ */ Ry(), u = /* @__PURE__ */ Ir(), l = /* @__PURE__ */ Ty(), s = /* @__PURE__ */ ky(), f = /* @__PURE__ */ Py(), d = /* @__PURE__ */ Iy(), m = /* @__PURE__ */ $y(), v = /* @__PURE__ */ Ny(), h = /* @__PURE__ */ My(), p = /* @__PURE__ */ jy(), c = Function, b = function(_e) {
    try {
      return c('"use strict"; return (' + _e + ").constructor;")();
    } catch {
    }
  }, y = /* @__PURE__ */ cf(), S = /* @__PURE__ */ qy(), x = function() {
    throw new u();
  }, C = y ? (function() {
    try {
      return arguments.callee, x;
    } catch {
      try {
        return y(arguments, "callee").get;
      } catch {
        return x;
      }
    }
  })() : x, O = Uy()(), D = Ky(), $ = df(), j = ff(), F = pf(), q = Ns(), z = {}, ue = typeof Uint8Array > "u" || !D ? e : D(Uint8Array), H = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": O && D ? D([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": z,
    "%AsyncGenerator%": z,
    "%AsyncGeneratorFunction%": z,
    "%AsyncIteratorPrototype%": z,
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
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": c,
    "%GeneratorFunction%": z,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": O && D ? D(D([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !O || !D ? e : D((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": y,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !O || !D ? e : D((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": O && D ? D(""[Symbol.iterator]()) : e,
    "%Symbol%": O ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": C,
    "%TypedArray%": ue,
    "%TypeError%": u,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": l,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": q,
    "%Function.prototype.apply%": F,
    "%Object.defineProperty%": S,
    "%Object.getPrototypeOf%": $,
    "%Math.abs%": s,
    "%Math.floor%": f,
    "%Math.max%": d,
    "%Math.min%": m,
    "%Math.pow%": v,
    "%Math.round%": h,
    "%Math.sign%": p,
    "%Reflect.getPrototypeOf%": j
  };
  if (D)
    try {
      null.error;
    } catch (_e) {
      var W = D(D(_e));
      H["%Error.prototype%"] = W;
    }
  var L = function _e(ae) {
    var De;
    if (ae === "%AsyncFunction%")
      De = b("async function () {}");
    else if (ae === "%GeneratorFunction%")
      De = b("function* () {}");
    else if (ae === "%AsyncGeneratorFunction%")
      De = b("async function* () {}");
    else if (ae === "%AsyncGenerator%") {
      var Ae = _e("%AsyncGeneratorFunction%");
      Ae && (De = Ae.prototype);
    } else if (ae === "%AsyncIteratorPrototype%") {
      var je = _e("%AsyncGenerator%");
      je && D && (De = D(je.prototype));
    }
    return H[ae] = De, De;
  }, J = {
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
  }, M = Ci(), re = /* @__PURE__ */ zy(), oe = M.call(q, Array.prototype.concat), fe = M.call(F, Array.prototype.splice), xe = M.call(q, String.prototype.replace), G = M.call(q, String.prototype.slice), Q = M.call(q, RegExp.prototype.exec), R = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, V = /\\(\\)?/g, le = function(ae) {
    var De = G(ae, 0, 1), Ae = G(ae, -1);
    if (De === "%" && Ae !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (Ae === "%" && De !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var je = [];
    return xe(ae, R, function(rt, xt, st, dt) {
      je[je.length] = st ? xe(dt, V, "$1") : xt || rt;
    }), je;
  }, Oe = function(ae, De) {
    var Ae = ae, je;
    if (re(J, Ae) && (je = J[Ae], Ae = "%" + je[0] + "%"), re(H, Ae)) {
      var rt = H[Ae];
      if (rt === z && (rt = L(Ae)), typeof rt > "u" && !De)
        throw new u("intrinsic " + ae + " exists, but is not available. Please file an issue!");
      return {
        alias: je,
        name: Ae,
        value: rt
      };
    }
    throw new a("intrinsic " + ae + " does not exist!");
  };
  return Ya = function(ae, De) {
    if (typeof ae != "string" || ae.length === 0)
      throw new u("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof De != "boolean")
      throw new u('"allowMissing" argument must be a boolean');
    if (Q(/^%?[^%]*%?$/, ae) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var Ae = le(ae), je = Ae.length > 0 ? Ae[0] : "", rt = Oe("%" + je + "%", De), xt = rt.name, st = rt.value, dt = !1, _t = rt.alias;
    _t && (je = _t[0], fe(Ae, oe([0, 1], _t)));
    for (var xn = 1, Jt = !0; xn < Ae.length; xn += 1) {
      var Rt = Ae[xn], _n = G(Rt, 0, 1), dn = G(Rt, -1);
      if ((_n === '"' || _n === "'" || _n === "`" || dn === '"' || dn === "'" || dn === "`") && _n !== dn)
        throw new a("property names with quotes must have matching quotes");
      if ((Rt === "constructor" || !Jt) && (dt = !0), je += "." + Rt, xt = "%" + je + "%", re(H, xt))
        st = H[xt];
      else if (st != null) {
        if (!(Rt in st)) {
          if (!De)
            throw new u("base intrinsic for " + ae + " exists, but the property is not available.");
          return;
        }
        if (y && xn + 1 >= Ae.length) {
          var En = y(st, Rt);
          Jt = !!En, Jt && "get" in En && !("originalValue" in En.get) ? st = En.get : st = st[Rt];
        } else
          Jt = re(st, Rt), st = st[Rt];
        Jt && !dt && (H[xt] = st);
      }
    }
    return st;
  }, Ya;
}
var Xa, tc;
function mf() {
  if (tc) return Xa;
  tc = 1;
  var e = /* @__PURE__ */ Ms(), t = hf(), r = t([e("%String.prototype.indexOf%")]);
  return Xa = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof a == "function" && r(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, Xa;
}
var Ja, nc;
function vf() {
  if (nc) return Ja;
  nc = 1;
  var e = /* @__PURE__ */ Ms(), t = /* @__PURE__ */ mf(), r = /* @__PURE__ */ Ai(), n = /* @__PURE__ */ Ir(), o = e("%Map%", !0), i = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), u = t("Map.prototype.has", !0), l = t("Map.prototype.delete", !0), s = t("Map.prototype.size", !0);
  return Ja = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var d, m = {
      assert: function(v) {
        if (!m.has(v))
          throw new n("Side channel does not contain " + r(v));
      },
      delete: function(v) {
        if (d) {
          var h = l(d, v);
          return s(d) === 0 && (d = void 0), h;
        }
        return !1;
      },
      get: function(v) {
        if (d)
          return i(d, v);
      },
      has: function(v) {
        return d ? u(d, v) : !1;
      },
      set: function(v, h) {
        d || (d = new o()), a(d, v, h);
      }
    };
    return m;
  }, Ja;
}
var Qa, rc;
function Yy() {
  if (rc) return Qa;
  rc = 1;
  var e = /* @__PURE__ */ Ms(), t = /* @__PURE__ */ mf(), r = /* @__PURE__ */ Ai(), n = vf(), o = /* @__PURE__ */ Ir(), i = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), u = t("WeakMap.prototype.set", !0), l = t("WeakMap.prototype.has", !0), s = t("WeakMap.prototype.delete", !0);
  return Qa = i ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var d, m, v = {
        assert: function(h) {
          if (!v.has(h))
            throw new o("Side channel does not contain " + r(h));
        },
        delete: function(h) {
          if (i && h && (typeof h == "object" || typeof h == "function")) {
            if (d)
              return s(d, h);
          } else if (n && m)
            return m.delete(h);
          return !1;
        },
        get: function(h) {
          return i && h && (typeof h == "object" || typeof h == "function") && d ? a(d, h) : m && m.get(h);
        },
        has: function(h) {
          return i && h && (typeof h == "object" || typeof h == "function") && d ? l(d, h) : !!m && m.has(h);
        },
        set: function(h, p) {
          i && h && (typeof h == "object" || typeof h == "function") ? (d || (d = new i()), u(d, h, p)) : n && (m || (m = n()), m.set(h, p));
        }
      };
      return v;
    }
  ) : n, Qa;
}
var Za, oc;
function Xy() {
  if (oc) return Za;
  oc = 1;
  var e = /* @__PURE__ */ Ir(), t = /* @__PURE__ */ Ai(), r = Ey(), n = vf(), o = Yy(), i = o || n || r;
  return Za = function() {
    var u, l = {
      assert: function(s) {
        if (!l.has(s))
          throw new e("Side channel does not contain " + t(s));
      },
      delete: function(s) {
        return !!u && u.delete(s);
      },
      get: function(s) {
        return u && u.get(s);
      },
      has: function(s) {
        return !!u && u.has(s);
      },
      set: function(s, f) {
        u || (u = i()), u.set(s, f);
      }
    };
    return l;
  }, Za;
}
var es, ic;
function Fs() {
  if (ic) return es;
  ic = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return es = {
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
  }, es;
}
var ts, ac;
function yf() {
  if (ac) return ts;
  ac = 1;
  var e = /* @__PURE__ */ Fs(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = (function() {
    for (var c = [], b = 0; b < 256; ++b)
      c.push("%" + ((b < 16 ? "0" : "") + b.toString(16)).toUpperCase());
    return c;
  })(), o = function(b) {
    for (; b.length > 1; ) {
      var y = b.pop(), S = y.obj[y.prop];
      if (r(S)) {
        for (var x = [], C = 0; C < S.length; ++C)
          typeof S[C] < "u" && x.push(S[C]);
        y.obj[y.prop] = x;
      }
    }
  }, i = function(b, y) {
    for (var S = y && y.plainObjects ? { __proto__: null } : {}, x = 0; x < b.length; ++x)
      typeof b[x] < "u" && (S[x] = b[x]);
    return S;
  }, a = function c(b, y, S) {
    if (!y)
      return b;
    if (typeof y != "object" && typeof y != "function") {
      if (r(b))
        b.push(y);
      else if (b && typeof b == "object")
        (S && (S.plainObjects || S.allowPrototypes) || !t.call(Object.prototype, y)) && (b[y] = !0);
      else
        return [b, y];
      return b;
    }
    if (!b || typeof b != "object")
      return [b].concat(y);
    var x = b;
    return r(b) && !r(y) && (x = i(b, S)), r(b) && r(y) ? (y.forEach(function(C, O) {
      if (t.call(b, O)) {
        var D = b[O];
        D && typeof D == "object" && C && typeof C == "object" ? b[O] = c(D, C, S) : b.push(C);
      } else
        b[O] = C;
    }), b) : Object.keys(y).reduce(function(C, O) {
      var D = y[O];
      return t.call(C, O) ? C[O] = c(C[O], D, S) : C[O] = D, C;
    }, x);
  }, u = function(b, y) {
    return Object.keys(y).reduce(function(S, x) {
      return S[x] = y[x], S;
    }, b);
  }, l = function(c, b, y) {
    var S = c.replace(/\+/g, " ");
    if (y === "iso-8859-1")
      return S.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }, s = 1024, f = function(b, y, S, x, C) {
    if (b.length === 0)
      return b;
    var O = b;
    if (typeof b == "symbol" ? O = Symbol.prototype.toString.call(b) : typeof b != "string" && (O = String(b)), S === "iso-8859-1")
      return escape(O).replace(/%u[0-9a-f]{4}/gi, function(ue) {
        return "%26%23" + parseInt(ue.slice(2), 16) + "%3B";
      });
    for (var D = "", $ = 0; $ < O.length; $ += s) {
      for (var j = O.length >= s ? O.slice($, $ + s) : O, F = [], q = 0; q < j.length; ++q) {
        var z = j.charCodeAt(q);
        if (z === 45 || z === 46 || z === 95 || z === 126 || z >= 48 && z <= 57 || z >= 65 && z <= 90 || z >= 97 && z <= 122 || C === e.RFC1738 && (z === 40 || z === 41)) {
          F[F.length] = j.charAt(q);
          continue;
        }
        if (z < 128) {
          F[F.length] = n[z];
          continue;
        }
        if (z < 2048) {
          F[F.length] = n[192 | z >> 6] + n[128 | z & 63];
          continue;
        }
        if (z < 55296 || z >= 57344) {
          F[F.length] = n[224 | z >> 12] + n[128 | z >> 6 & 63] + n[128 | z & 63];
          continue;
        }
        q += 1, z = 65536 + ((z & 1023) << 10 | j.charCodeAt(q) & 1023), F[F.length] = n[240 | z >> 18] + n[128 | z >> 12 & 63] + n[128 | z >> 6 & 63] + n[128 | z & 63];
      }
      D += F.join("");
    }
    return D;
  }, d = function(b) {
    for (var y = [{ obj: { o: b }, prop: "o" }], S = [], x = 0; x < y.length; ++x)
      for (var C = y[x], O = C.obj[C.prop], D = Object.keys(O), $ = 0; $ < D.length; ++$) {
        var j = D[$], F = O[j];
        typeof F == "object" && F !== null && S.indexOf(F) === -1 && (y.push({ obj: O, prop: j }), S.push(F));
      }
    return o(y), b;
  }, m = function(b) {
    return Object.prototype.toString.call(b) === "[object RegExp]";
  }, v = function(b) {
    return !b || typeof b != "object" ? !1 : !!(b.constructor && b.constructor.isBuffer && b.constructor.isBuffer(b));
  }, h = function(b, y) {
    return [].concat(b, y);
  }, p = function(b, y) {
    if (r(b)) {
      for (var S = [], x = 0; x < b.length; x += 1)
        S.push(y(b[x]));
      return S;
    }
    return y(b);
  };
  return ts = {
    arrayToObject: i,
    assign: u,
    combine: h,
    compact: d,
    decode: l,
    encode: f,
    isBuffer: v,
    isRegExp: m,
    maybeMap: p,
    merge: a
  }, ts;
}
var ns, sc;
function Jy() {
  if (sc) return ns;
  sc = 1;
  var e = Xy(), t = /* @__PURE__ */ yf(), r = /* @__PURE__ */ Fs(), n = Object.prototype.hasOwnProperty, o = {
    brackets: function(c) {
      return c + "[]";
    },
    comma: "comma",
    indices: function(c, b) {
      return c + "[" + b + "]";
    },
    repeat: function(c) {
      return c;
    }
  }, i = Array.isArray, a = Array.prototype.push, u = function(p, c) {
    a.apply(p, i(c) ? c : [c]);
  }, l = Date.prototype.toISOString, s = r.default, f = {
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
    format: s,
    formatter: r.formatters[s],
    // deprecated
    indices: !1,
    serializeDate: function(c) {
      return l.call(c);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, d = function(c) {
    return typeof c == "string" || typeof c == "number" || typeof c == "boolean" || typeof c == "symbol" || typeof c == "bigint";
  }, m = {}, v = function p(c, b, y, S, x, C, O, D, $, j, F, q, z, ue, H, W, L, J) {
    for (var M = c, re = J, oe = 0, fe = !1; (re = re.get(m)) !== void 0 && !fe; ) {
      var xe = re.get(c);
      if (oe += 1, typeof xe < "u") {
        if (xe === oe)
          throw new RangeError("Cyclic object value");
        fe = !0;
      }
      typeof re.get(m) > "u" && (oe = 0);
    }
    if (typeof j == "function" ? M = j(b, M) : M instanceof Date ? M = z(M) : y === "comma" && i(M) && (M = t.maybeMap(M, function(xt) {
      return xt instanceof Date ? z(xt) : xt;
    })), M === null) {
      if (C)
        return $ && !W ? $(b, f.encoder, L, "key", ue) : b;
      M = "";
    }
    if (d(M) || t.isBuffer(M)) {
      if ($) {
        var G = W ? b : $(b, f.encoder, L, "key", ue);
        return [H(G) + "=" + H($(M, f.encoder, L, "value", ue))];
      }
      return [H(b) + "=" + H(String(M))];
    }
    var Q = [];
    if (typeof M > "u")
      return Q;
    var R;
    if (y === "comma" && i(M))
      W && $ && (M = t.maybeMap(M, $)), R = [{ value: M.length > 0 ? M.join(",") || null : void 0 }];
    else if (i(j))
      R = j;
    else {
      var V = Object.keys(M);
      R = F ? V.sort(F) : V;
    }
    var le = D ? String(b).replace(/\./g, "%2E") : String(b), Oe = S && i(M) && M.length === 1 ? le + "[]" : le;
    if (x && i(M) && M.length === 0)
      return Oe + "[]";
    for (var _e = 0; _e < R.length; ++_e) {
      var ae = R[_e], De = typeof ae == "object" && ae && typeof ae.value < "u" ? ae.value : M[ae];
      if (!(O && De === null)) {
        var Ae = q && D ? String(ae).replace(/\./g, "%2E") : String(ae), je = i(M) ? typeof y == "function" ? y(Oe, Ae) : Oe : Oe + (q ? "." + Ae : "[" + Ae + "]");
        J.set(c, oe);
        var rt = e();
        rt.set(m, J), u(Q, p(
          De,
          je,
          y,
          S,
          x,
          C,
          O,
          D,
          y === "comma" && W && i(M) ? null : $,
          j,
          F,
          q,
          z,
          ue,
          H,
          W,
          L,
          rt
        ));
      }
    }
    return Q;
  }, h = function(c) {
    if (!c)
      return f;
    if (typeof c.allowEmptyArrays < "u" && typeof c.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof c.encodeDotInKeys < "u" && typeof c.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (c.encoder !== null && typeof c.encoder < "u" && typeof c.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var b = c.charset || f.charset;
    if (typeof c.charset < "u" && c.charset !== "utf-8" && c.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var y = r.default;
    if (typeof c.format < "u") {
      if (!n.call(r.formatters, c.format))
        throw new TypeError("Unknown format option provided.");
      y = c.format;
    }
    var S = r.formatters[y], x = f.filter;
    (typeof c.filter == "function" || i(c.filter)) && (x = c.filter);
    var C;
    if (c.arrayFormat in o ? C = c.arrayFormat : "indices" in c ? C = c.indices ? "indices" : "repeat" : C = f.arrayFormat, "commaRoundTrip" in c && typeof c.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var O = typeof c.allowDots > "u" ? c.encodeDotInKeys === !0 ? !0 : f.allowDots : !!c.allowDots;
    return {
      addQueryPrefix: typeof c.addQueryPrefix == "boolean" ? c.addQueryPrefix : f.addQueryPrefix,
      allowDots: O,
      allowEmptyArrays: typeof c.allowEmptyArrays == "boolean" ? !!c.allowEmptyArrays : f.allowEmptyArrays,
      arrayFormat: C,
      charset: b,
      charsetSentinel: typeof c.charsetSentinel == "boolean" ? c.charsetSentinel : f.charsetSentinel,
      commaRoundTrip: !!c.commaRoundTrip,
      delimiter: typeof c.delimiter > "u" ? f.delimiter : c.delimiter,
      encode: typeof c.encode == "boolean" ? c.encode : f.encode,
      encodeDotInKeys: typeof c.encodeDotInKeys == "boolean" ? c.encodeDotInKeys : f.encodeDotInKeys,
      encoder: typeof c.encoder == "function" ? c.encoder : f.encoder,
      encodeValuesOnly: typeof c.encodeValuesOnly == "boolean" ? c.encodeValuesOnly : f.encodeValuesOnly,
      filter: x,
      format: y,
      formatter: S,
      serializeDate: typeof c.serializeDate == "function" ? c.serializeDate : f.serializeDate,
      skipNulls: typeof c.skipNulls == "boolean" ? c.skipNulls : f.skipNulls,
      sort: typeof c.sort == "function" ? c.sort : null,
      strictNullHandling: typeof c.strictNullHandling == "boolean" ? c.strictNullHandling : f.strictNullHandling
    };
  };
  return ns = function(p, c) {
    var b = p, y = h(c), S, x;
    typeof y.filter == "function" ? (x = y.filter, b = x("", b)) : i(y.filter) && (x = y.filter, S = x);
    var C = [];
    if (typeof b != "object" || b === null)
      return "";
    var O = o[y.arrayFormat], D = O === "comma" && y.commaRoundTrip;
    S || (S = Object.keys(b)), y.sort && S.sort(y.sort);
    for (var $ = e(), j = 0; j < S.length; ++j) {
      var F = S[j], q = b[F];
      y.skipNulls && q === null || u(C, v(
        q,
        F,
        O,
        D,
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
        $
      ));
    }
    var z = C.join(y.delimiter), ue = y.addQueryPrefix === !0 ? "?" : "";
    return y.charsetSentinel && (y.charset === "iso-8859-1" ? ue += "utf8=%26%2310003%3B&" : ue += "utf8=%E2%9C%93&"), z.length > 0 ? ue + z : "";
  }, ns;
}
var rs, lc;
function Qy() {
  if (lc) return rs;
  lc = 1;
  var e = /* @__PURE__ */ yf(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
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
  }, o = function(m) {
    return m.replace(/&#(\d+);/g, function(v, h) {
      return String.fromCharCode(parseInt(h, 10));
    });
  }, i = function(m, v, h) {
    if (m && typeof m == "string" && v.comma && m.indexOf(",") > -1)
      return m.split(",");
    if (v.throwOnLimitExceeded && h >= v.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + v.arrayLimit + " element" + (v.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return m;
  }, a = "utf8=%26%2310003%3B", u = "utf8=%E2%9C%93", l = function(v, h) {
    var p = { __proto__: null }, c = h.ignoreQueryPrefix ? v.replace(/^\?/, "") : v;
    c = c.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var b = h.parameterLimit === 1 / 0 ? void 0 : h.parameterLimit, y = c.split(
      h.delimiter,
      h.throwOnLimitExceeded ? b + 1 : b
    );
    if (h.throwOnLimitExceeded && y.length > b)
      throw new RangeError("Parameter limit exceeded. Only " + b + " parameter" + (b === 1 ? "" : "s") + " allowed.");
    var S = -1, x, C = h.charset;
    if (h.charsetSentinel)
      for (x = 0; x < y.length; ++x)
        y[x].indexOf("utf8=") === 0 && (y[x] === u ? C = "utf-8" : y[x] === a && (C = "iso-8859-1"), S = x, x = y.length);
    for (x = 0; x < y.length; ++x)
      if (x !== S) {
        var O = y[x], D = O.indexOf("]="), $ = D === -1 ? O.indexOf("=") : D + 1, j, F;
        $ === -1 ? (j = h.decoder(O, n.decoder, C, "key"), F = h.strictNullHandling ? null : "") : (j = h.decoder(O.slice(0, $), n.decoder, C, "key"), F = e.maybeMap(
          i(
            O.slice($ + 1),
            h,
            r(p[j]) ? p[j].length : 0
          ),
          function(z) {
            return h.decoder(z, n.decoder, C, "value");
          }
        )), F && h.interpretNumericEntities && C === "iso-8859-1" && (F = o(String(F))), O.indexOf("[]=") > -1 && (F = r(F) ? [F] : F);
        var q = t.call(p, j);
        q && h.duplicates === "combine" ? p[j] = e.combine(p[j], F) : (!q || h.duplicates === "last") && (p[j] = F);
      }
    return p;
  }, s = function(m, v, h, p) {
    var c = 0;
    if (m.length > 0 && m[m.length - 1] === "[]") {
      var b = m.slice(0, -1).join("");
      c = Array.isArray(v) && v[b] ? v[b].length : 0;
    }
    for (var y = p ? v : i(v, h, c), S = m.length - 1; S >= 0; --S) {
      var x, C = m[S];
      if (C === "[]" && h.parseArrays)
        x = h.allowEmptyArrays && (y === "" || h.strictNullHandling && y === null) ? [] : e.combine([], y);
      else {
        x = h.plainObjects ? { __proto__: null } : {};
        var O = C.charAt(0) === "[" && C.charAt(C.length - 1) === "]" ? C.slice(1, -1) : C, D = h.decodeDotInKeys ? O.replace(/%2E/g, ".") : O, $ = parseInt(D, 10);
        !h.parseArrays && D === "" ? x = { 0: y } : !isNaN($) && C !== D && String($) === D && $ >= 0 && h.parseArrays && $ <= h.arrayLimit ? (x = [], x[$] = y) : D !== "__proto__" && (x[D] = y);
      }
      y = x;
    }
    return y;
  }, f = function(v, h, p, c) {
    if (v) {
      var b = p.allowDots ? v.replace(/\.([^.[]+)/g, "[$1]") : v, y = /(\[[^[\]]*])/, S = /(\[[^[\]]*])/g, x = p.depth > 0 && y.exec(b), C = x ? b.slice(0, x.index) : b, O = [];
      if (C) {
        if (!p.plainObjects && t.call(Object.prototype, C) && !p.allowPrototypes)
          return;
        O.push(C);
      }
      for (var D = 0; p.depth > 0 && (x = S.exec(b)) !== null && D < p.depth; ) {
        if (D += 1, !p.plainObjects && t.call(Object.prototype, x[1].slice(1, -1)) && !p.allowPrototypes)
          return;
        O.push(x[1]);
      }
      if (x) {
        if (p.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
        O.push("[" + b.slice(x.index) + "]");
      }
      return s(O, h, p, c);
    }
  }, d = function(v) {
    if (!v)
      return n;
    if (typeof v.allowEmptyArrays < "u" && typeof v.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof v.decodeDotInKeys < "u" && typeof v.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (v.decoder !== null && typeof v.decoder < "u" && typeof v.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof v.charset < "u" && v.charset !== "utf-8" && v.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof v.throwOnLimitExceeded < "u" && typeof v.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var h = typeof v.charset > "u" ? n.charset : v.charset, p = typeof v.duplicates > "u" ? n.duplicates : v.duplicates;
    if (p !== "combine" && p !== "first" && p !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var c = typeof v.allowDots > "u" ? v.decodeDotInKeys === !0 ? !0 : n.allowDots : !!v.allowDots;
    return {
      allowDots: c,
      allowEmptyArrays: typeof v.allowEmptyArrays == "boolean" ? !!v.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof v.allowPrototypes == "boolean" ? v.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof v.allowSparse == "boolean" ? v.allowSparse : n.allowSparse,
      arrayLimit: typeof v.arrayLimit == "number" ? v.arrayLimit : n.arrayLimit,
      charset: h,
      charsetSentinel: typeof v.charsetSentinel == "boolean" ? v.charsetSentinel : n.charsetSentinel,
      comma: typeof v.comma == "boolean" ? v.comma : n.comma,
      decodeDotInKeys: typeof v.decodeDotInKeys == "boolean" ? v.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof v.decoder == "function" ? v.decoder : n.decoder,
      delimiter: typeof v.delimiter == "string" || e.isRegExp(v.delimiter) ? v.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof v.depth == "number" || v.depth === !1 ? +v.depth : n.depth,
      duplicates: p,
      ignoreQueryPrefix: v.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof v.interpretNumericEntities == "boolean" ? v.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof v.parameterLimit == "number" ? v.parameterLimit : n.parameterLimit,
      parseArrays: v.parseArrays !== !1,
      plainObjects: typeof v.plainObjects == "boolean" ? v.plainObjects : n.plainObjects,
      strictDepth: typeof v.strictDepth == "boolean" ? !!v.strictDepth : n.strictDepth,
      strictNullHandling: typeof v.strictNullHandling == "boolean" ? v.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof v.throwOnLimitExceeded == "boolean" ? v.throwOnLimitExceeded : !1
    };
  };
  return rs = function(m, v) {
    var h = d(v);
    if (m === "" || m === null || typeof m > "u")
      return h.plainObjects ? { __proto__: null } : {};
    for (var p = typeof m == "string" ? l(m, h) : m, c = h.plainObjects ? { __proto__: null } : {}, b = Object.keys(p), y = 0; y < b.length; ++y) {
      var S = b[y], x = f(S, p[S], h, typeof m == "string");
      c = e.merge(c, x, h);
    }
    return h.allowSparse === !0 ? c : e.compact(c);
  }, rs;
}
var os, uc;
function Zy() {
  if (uc) return os;
  uc = 1;
  var e = /* @__PURE__ */ Jy(), t = /* @__PURE__ */ Qy(), r = /* @__PURE__ */ Fs();
  return os = {
    formats: r,
    parse: t,
    stringify: e
  }, os;
}
var si = { exports: {} }, eg = si.exports, cc;
function tg() {
  return cc || (cc = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(typeof self < "u" ? self : typeof window < "u" ? window : typeof uo < "u" ? uo : eg, function() {
      var r = "3.7.8", n = r, o = typeof Buffer == "function", i = typeof TextDecoder == "function" ? new TextDecoder() : void 0, a = typeof TextEncoder == "function" ? new TextEncoder() : void 0, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", l = Array.prototype.slice.call(u), s = (function(R) {
        var V = {};
        return R.forEach(function(le, Oe) {
          return V[le] = Oe;
        }), V;
      })(l), f = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, d = String.fromCharCode.bind(String), m = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function(R) {
        return new Uint8Array(Array.prototype.slice.call(R, 0));
      }, v = function(R) {
        return R.replace(/=/g, "").replace(/[+\/]/g, function(V) {
          return V == "+" ? "-" : "_";
        });
      }, h = function(R) {
        return R.replace(/[^A-Za-z0-9\+\/]/g, "");
      }, p = function(R) {
        for (var V, le, Oe, _e, ae = "", De = R.length % 3, Ae = 0; Ae < R.length; ) {
          if ((le = R.charCodeAt(Ae++)) > 255 || (Oe = R.charCodeAt(Ae++)) > 255 || (_e = R.charCodeAt(Ae++)) > 255)
            throw new TypeError("invalid character found");
          V = le << 16 | Oe << 8 | _e, ae += l[V >> 18 & 63] + l[V >> 12 & 63] + l[V >> 6 & 63] + l[V & 63];
        }
        return De ? ae.slice(0, De - 3) + "===".substring(De) : ae;
      }, c = typeof btoa == "function" ? function(R) {
        return btoa(R);
      } : o ? function(R) {
        return Buffer.from(R, "binary").toString("base64");
      } : p, b = o ? function(R) {
        return Buffer.from(R).toString("base64");
      } : function(R) {
        for (var V = 4096, le = [], Oe = 0, _e = R.length; Oe < _e; Oe += V)
          le.push(d.apply(null, R.subarray(Oe, Oe + V)));
        return c(le.join(""));
      }, y = function(R, V) {
        return V === void 0 && (V = !1), V ? v(b(R)) : b(R);
      }, S = function(R) {
        if (R.length < 2) {
          var V = R.charCodeAt(0);
          return V < 128 ? R : V < 2048 ? d(192 | V >>> 6) + d(128 | V & 63) : d(224 | V >>> 12 & 15) + d(128 | V >>> 6 & 63) + d(128 | V & 63);
        } else {
          var V = 65536 + (R.charCodeAt(0) - 55296) * 1024 + (R.charCodeAt(1) - 56320);
          return d(240 | V >>> 18 & 7) + d(128 | V >>> 12 & 63) + d(128 | V >>> 6 & 63) + d(128 | V & 63);
        }
      }, x = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, C = function(R) {
        return R.replace(x, S);
      }, O = o ? function(R) {
        return Buffer.from(R, "utf8").toString("base64");
      } : a ? function(R) {
        return b(a.encode(R));
      } : function(R) {
        return c(C(R));
      }, D = function(R, V) {
        return V === void 0 && (V = !1), V ? v(O(R)) : O(R);
      }, $ = function(R) {
        return D(R, !0);
      }, j = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, F = function(R) {
        switch (R.length) {
          case 4:
            var V = (7 & R.charCodeAt(0)) << 18 | (63 & R.charCodeAt(1)) << 12 | (63 & R.charCodeAt(2)) << 6 | 63 & R.charCodeAt(3), le = V - 65536;
            return d((le >>> 10) + 55296) + d((le & 1023) + 56320);
          case 3:
            return d((15 & R.charCodeAt(0)) << 12 | (63 & R.charCodeAt(1)) << 6 | 63 & R.charCodeAt(2));
          default:
            return d((31 & R.charCodeAt(0)) << 6 | 63 & R.charCodeAt(1));
        }
      }, q = function(R) {
        return R.replace(j, F);
      }, z = function(R) {
        if (R = R.replace(/\s+/g, ""), !f.test(R))
          throw new TypeError("malformed base64.");
        R += "==".slice(2 - (R.length & 3));
        for (var V, le, Oe, _e = [], ae = 0; ae < R.length; )
          V = s[R.charAt(ae++)] << 18 | s[R.charAt(ae++)] << 12 | (le = s[R.charAt(ae++)]) << 6 | (Oe = s[R.charAt(ae++)]), le === 64 ? _e.push(d(V >> 16 & 255)) : Oe === 64 ? _e.push(d(V >> 16 & 255, V >> 8 & 255)) : _e.push(d(V >> 16 & 255, V >> 8 & 255, V & 255));
        return _e.join("");
      }, ue = typeof atob == "function" ? function(R) {
        return atob(h(R));
      } : o ? function(R) {
        return Buffer.from(R, "base64").toString("binary");
      } : z, H = o ? function(R) {
        return m(Buffer.from(R, "base64"));
      } : function(R) {
        return m(ue(R).split("").map(function(V) {
          return V.charCodeAt(0);
        }));
      }, W = function(R) {
        return H(J(R));
      }, L = o ? function(R) {
        return Buffer.from(R, "base64").toString("utf8");
      } : i ? function(R) {
        return i.decode(H(R));
      } : function(R) {
        return q(ue(R));
      }, J = function(R) {
        return h(R.replace(/[-_]/g, function(V) {
          return V == "-" ? "+" : "/";
        }));
      }, M = function(R) {
        return L(J(R));
      }, re = function(R) {
        if (typeof R != "string")
          return !1;
        var V = R.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(V) || !/[^\s0-9a-zA-Z\-_]/.test(V);
      }, oe = function(R) {
        return {
          value: R,
          enumerable: !1,
          writable: !0,
          configurable: !0
        };
      }, fe = function() {
        var R = function(V, le) {
          return Object.defineProperty(String.prototype, V, oe(le));
        };
        R("fromBase64", function() {
          return M(this);
        }), R("toBase64", function(V) {
          return D(this, V);
        }), R("toBase64URI", function() {
          return D(this, !0);
        }), R("toBase64URL", function() {
          return D(this, !0);
        }), R("toUint8Array", function() {
          return W(this);
        });
      }, xe = function() {
        var R = function(V, le) {
          return Object.defineProperty(Uint8Array.prototype, V, oe(le));
        };
        R("toBase64", function(V) {
          return y(this, V);
        }), R("toBase64URI", function() {
          return y(this, !0);
        }), R("toBase64URL", function() {
          return y(this, !0);
        });
      }, G = function() {
        fe(), xe();
      }, Q = {
        version: r,
        VERSION: n,
        atob: ue,
        atobPolyfill: z,
        btoa: c,
        btoaPolyfill: p,
        fromBase64: M,
        toBase64: D,
        encode: D,
        encodeURI: $,
        encodeURL: $,
        utob: C,
        btou: q,
        decode: M,
        isValid: re,
        fromUint8Array: y,
        toUint8Array: W,
        extendString: fe,
        extendUint8Array: xe,
        extendBuiltins: G
      };
      return Q.Base64 = {}, Object.keys(Q).forEach(function(R) {
        return Q.Base64[R] = Q[R];
      }), Q;
    });
  })(si)), si.exports;
}
var fc;
function ng() {
  if (fc) return It;
  fc = 1;
  var e = It && It.__assign || function() {
    return e = Object.assign || function(d) {
      for (var m, v = 1, h = arguments.length; v < h; v++) {
        m = arguments[v];
        for (var p in m) Object.prototype.hasOwnProperty.call(m, p) && (d[p] = m[p]);
      }
      return d;
    }, e.apply(this, arguments);
  }, t = It && It.__awaiter || function(d, m, v, h) {
    function p(c) {
      return c instanceof v ? c : new v(function(b) {
        b(c);
      });
    }
    return new (v || (v = Promise))(function(c, b) {
      function y(C) {
        try {
          x(h.next(C));
        } catch (O) {
          b(O);
        }
      }
      function S(C) {
        try {
          x(h.throw(C));
        } catch (O) {
          b(O);
        }
      }
      function x(C) {
        C.done ? c(C.value) : p(C.value).then(y, S);
      }
      x((h = h.apply(d, m || [])).next());
    });
  }, r = It && It.__generator || function(d, m) {
    var v = { label: 0, sent: function() {
      if (c[0] & 1) throw c[1];
      return c[1];
    }, trys: [], ops: [] }, h, p, c, b = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return b.next = y(0), b.throw = y(1), b.return = y(2), typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function y(x) {
      return function(C) {
        return S([x, C]);
      };
    }
    function S(x) {
      if (h) throw new TypeError("Generator is already executing.");
      for (; b && (b = 0, x[0] && (v = 0)), v; ) try {
        if (h = 1, p && (c = x[0] & 2 ? p.return : x[0] ? p.throw || ((c = p.return) && c.call(p), 0) : p.next) && !(c = c.call(p, x[1])).done) return c;
        switch (p = 0, c && (x = [x[0] & 2, c.value]), x[0]) {
          case 0:
          case 1:
            c = x;
            break;
          case 4:
            return v.label++, { value: x[1], done: !1 };
          case 5:
            v.label++, p = x[1], x = [0];
            continue;
          case 7:
            x = v.ops.pop(), v.trys.pop();
            continue;
          default:
            if (c = v.trys, !(c = c.length > 0 && c[c.length - 1]) && (x[0] === 6 || x[0] === 2)) {
              v = 0;
              continue;
            }
            if (x[0] === 3 && (!c || x[1] > c[0] && x[1] < c[3])) {
              v.label = x[1];
              break;
            }
            if (x[0] === 6 && v.label < c[1]) {
              v.label = c[1], c = x;
              break;
            }
            if (c && v.label < c[2]) {
              v.label = c[2], v.ops.push(x);
              break;
            }
            c[2] && v.ops.pop(), v.trys.pop();
            continue;
        }
        x = m.call(d, v);
      } catch (C) {
        x = [6, C], p = 0;
      } finally {
        h = c = 0;
      }
      if (x[0] & 5) throw x[1];
      return { value: x[0] ? x[1] : void 0, done: !0 };
    }
  }, n = It && It.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(It, "__esModule", { value: !0 }), It.KintoneRequestConfigBuilder = void 0;
  var o = n(lf()), i = n(/* @__PURE__ */ Zy()), a = /* @__PURE__ */ tg(), u = Oi(), l = "http", s = 4096, f = (
    /** @class */
    (function() {
      function d(m) {
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
      return d.prototype.build = function(m, v, h, p) {
        return t(this, void 0, void 0, function() {
          var c, b, O, y, S, x, C, O, D, $, j, F, q;
          return r(this, function(z) {
            switch (z.label) {
              case 0:
                switch (c = e(e(e({ method: m, headers: this.headers, url: "".concat(this.baseUrl).concat(v) }, p || {}), u.platformDeps.buildPlatformDependentConfig({
                  httpsAgent: this.httpsAgent,
                  clientCertAuth: this.clientCertAuth,
                  socketTimeout: this.socketTimeout
                })), { proxy: this.buildProxyConfig(this.proxy) }), b = m, b) {
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
                return O = this.buildRequestUrl(v, h), O.length > s ? (y = [e({}, c)], j = { method: "post", headers: e(e({}, this.headers), { "X-HTTP-Method-Override": "GET" }) }, [4, this.buildData(h)]) : [3, 3];
              case 2:
                return [2, e.apply(void 0, y.concat([(j.data = z.sent(), j)]))];
              case 3:
                return [2, e(e({}, c), { url: O })];
              case 4:
                return h instanceof o.default ? [4, this.buildData(h)] : [3, 6];
              case 5:
                return S = z.sent(), [2, e(e({}, c), { headers: (
                  // NOTE: formData.getHeaders does not exist in a browser environment.
                  typeof S.getHeaders == "function" ? e(e({}, this.headers), S.getHeaders()) : this.headers
                ), data: S })];
              case 6:
                return x = [e({}, c)], F = {}, [4, this.buildData(h)];
              case 7:
                return [2, e.apply(void 0, x.concat([(F.data = z.sent(), F)]))];
              case 8:
                return C = [e({}, c)], q = {}, [4, this.buildData(h)];
              case 9:
                return [2, e.apply(void 0, C.concat([(q.data = z.sent(), q)]))];
              case 10:
                return D = this.buildRequestUrl, $ = [v], [4, this.buildData(h)];
              case 11:
                return O = D.apply(this, $.concat([z.sent()])), [2, e(e({}, c), { url: O })];
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
      }, d.prototype.buildProxyConfig = function(m) {
        var v;
        if (m !== void 0) {
          if (m === !1)
            return !1;
          var h = m;
          return h.auth && (h.auth.username.length === 0 || h.auth.password.length === 0) && (h.auth = void 0), h.protocol = (v = h.protocol) !== null && v !== void 0 ? v : l, h;
        }
      }, d.prototype.buildRequestUrl = function(m, v) {
        return "".concat(this.baseUrl).concat(m, "?").concat(i.default.stringify(v));
      }, d.prototype.buildData = function(m) {
        return t(this, void 0, void 0, function() {
          var v;
          return r(this, function(h) {
            switch (h.label) {
              case 0:
                return this.auth.type !== "session" ? [3, 2] : [4, this.getRequestToken()];
              case 1:
                return v = h.sent(), m instanceof o.default ? (m.append("__REQUEST_TOKEN__", v), [2, m]) : [2, e({ __REQUEST_TOKEN__: v }, m)];
              case 2:
                return [2, m];
            }
          });
        });
      }, d.prototype.buildHeaders = function(m) {
        var v = m.basicAuth, h = m.userAgent, p = v ? {
          Authorization: "Basic ".concat(a.Base64.encode("".concat(v.username, ":").concat(v.password)))
        } : {}, c = u.platformDeps.buildHeaders({ userAgent: h }), b = e(e({}, c), p);
        switch (this.auth.type) {
          case "password":
            return e(e({}, b), { "X-Cybozu-Authorization": a.Base64.encode("".concat(this.auth.username, ":").concat(this.auth.password)) });
          case "apiToken": {
            var y = this.auth.apiToken;
            return Array.isArray(y) ? e(e({}, b), { "X-Cybozu-API-Token": y.join(",") }) : e(e({}, b), { "X-Cybozu-API-Token": y });
          }
          case "oAuthToken":
            return e(e({}, b), { Authorization: "Bearer ".concat(this.auth.oAuthToken) });
          default:
            return e(e({}, b), { "X-Requested-With": "XMLHttpRequest" });
        }
      }, d.prototype.getRequestToken = function() {
        return t(this, void 0, void 0, function() {
          var m;
          return r(this, function(v) {
            switch (v.label) {
              case 0:
                return this.requestToken !== null ? [3, 2] : (m = this, [4, u.platformDeps.getRequestToken()]);
              case 1:
                m.requestToken = v.sent(), v.label = 2;
              case 2:
                return [2, this.requestToken];
            }
          });
        });
      }, d;
    })()
  );
  return It.KintoneRequestConfigBuilder = f, It;
}
var hn = {}, dc;
function rg() {
  if (dc) return hn;
  dc = 1;
  var e = hn && hn.__assign || function() {
    return e = Object.assign || function(o) {
      for (var i, a = 1, u = arguments.length; a < u; a++) {
        i = arguments[a];
        for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (o[l] = i[l]);
      }
      return o;
    }, e.apply(this, arguments);
  }, t = hn && hn.__rest || function(o, i) {
    var a = {};
    for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && i.indexOf(u) < 0 && (a[u] = o[u]);
    if (o != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, u = Object.getOwnPropertySymbols(o); l < u.length; l++)
        i.indexOf(u[l]) < 0 && Object.prototype.propertyIsEnumerable.call(o, u[l]) && (a[u[l]] = o[u[l]]);
    return a;
  };
  Object.defineProperty(hn, "__esModule", { value: !0 }), hn.KintoneResponseHandler = void 0;
  var r = $s(), n = (
    /** @class */
    (function() {
      function o(i) {
        var a = i.enableAbortSearchError;
        this.enableAbortSearchError = a;
      }
      return o.prototype.handle = function(i) {
        var a = this;
        return i.then(function(u) {
          return a.handleSuccessResponse(u);
        }, function(u) {
          return a.handleErrorResponse(u);
        });
      }, o.prototype.handleSuccessResponse = function(i) {
        if (this.enableAbortSearchError && /Filter aborted because of too many search results/.test(i.headers["x-cybozu-warning"]))
          throw new r.KintoneAbortSearchError(i.headers["x-cybozu-warning"]);
        return i.data;
      }, o.prototype.handleErrorResponse = function(i) {
        if (!i.response)
          throw /mac verify failure/.test(i.toString()) ? new Error("invalid clientCertAuth setting") : i;
        var a = i.response, u = a.data, l = t(a, ["data"]);
        throw typeof u == "string" ? new Error("".concat(l.status, ": ").concat(l.statusText)) : new r.KintoneRestAPIError(e({ data: u }, l));
      }, o;
    })()
  );
  return hn.KintoneResponseHandler = n, hn;
}
var pc;
function og() {
  if (pc) return Gn;
  pc = 1;
  var e = Gn && Gn.__assign || function() {
    return e = Object.assign || function(y) {
      for (var S, x = 1, C = arguments.length; x < C; x++) {
        S = arguments[x];
        for (var O in S) Object.prototype.hasOwnProperty.call(S, O) && (y[O] = S[O]);
      }
      return y;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Gn, "__esModule", { value: !0 }), Gn.KintoneRestAPIClient = void 0;
  var t = uy(), r = cy(), n = hy(), o = my(), i = vy(), a = yy(), u = wy(), l = ng(), s = rg(), f = Oi(), d = Is(), m = function(y) {
    if ("username" in y)
      return e({ type: "password" }, y);
    if ("apiToken" in y)
      return e({ type: "apiToken" }, y);
    if ("oAuthToken" in y)
      return e({ type: "oAuthToken" }, y);
    try {
      return f.platformDeps.getDefaultAuth();
    } catch (S) {
      throw S instanceof d.UnsupportedPlatformError ? new Error("session authentication is not supported in ".concat(S.platform, " environment.")) : S;
    }
  }, v = (
    /** @class */
    (function() {
      function y(S) {
        S === void 0 && (S = {});
        var x, C, O;
        h(S), this.baseUrl = f.platformDeps.buildBaseUrl(S.baseUrl).replace(/\/+$/, "");
        var D = m((x = S.auth) !== null && x !== void 0 ? x : {}), $ = new l.KintoneRequestConfigBuilder(e(e({}, S), { baseUrl: this.baseUrl, auth: D })), j = new s.KintoneResponseHandler({
          enableAbortSearchError: (O = (C = S.featureFlags) === null || C === void 0 ? void 0 : C.enableAbortSearchError) !== null && O !== void 0 ? O : !1
        }), F = new u.DefaultHttpClient({
          responseHandler: j,
          requestConfigBuilder: $
        }), q = S.guestSpaceId;
        this.bulkRequest_ = new t.BulkRequestClient(F, q), this.record = new n.RecordClient(F, this.bulkRequest_, q), this.app = new r.AppClient(F, q), this.space = new o.SpaceClient(F, q), this.file = new i.FileClient(F, q), this.plugin = new a.PluginClient(F);
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
    })()
  );
  Gn.KintoneRestAPIClient = v;
  var h = function(y) {
    p(y.baseUrl), c(y.guestSpaceId), b(y.socketTimeout);
  }, p = function(y) {
    if (y !== void 0) {
      var S = new URL(y);
      if (S.hostname !== "localhost" && S.protocol !== "https:")
        throw new Error('The protocol of baseUrl must be "https".');
    }
  }, c = function(y) {
    if (y === "" || y === null)
      throw new Error("invalid guestSpaceId: got [".concat(y, "]"));
  }, b = function(y) {
    if (y !== void 0) {
      var S = parseFloat(y.toString());
      if (isNaN(S) || S < 0)
        throw new Error("Invalid socketTimeout. Must be a positive number.");
    }
  };
  return Gn;
}
var hc;
function ig() {
  return hc || (hc = 1, (function(e) {
    var t = zt && zt.__createBinding || (Object.create ? (function(l, s, f, d) {
      d === void 0 && (d = f);
      var m = Object.getOwnPropertyDescriptor(s, f);
      (!m || ("get" in m ? !s.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
        return s[f];
      } }), Object.defineProperty(l, d, m);
    }) : (function(l, s, f, d) {
      d === void 0 && (d = f), l[d] = s[f];
    })), r = zt && zt.__setModuleDefault || (Object.create ? (function(l, s) {
      Object.defineProperty(l, "default", { enumerable: !0, value: s });
    }) : function(l, s) {
      l.default = s;
    }), n = zt && zt.__importStar || /* @__PURE__ */ (function() {
      var l = function(s) {
        return l = Object.getOwnPropertyNames || function(f) {
          var d = [];
          for (var m in f) Object.prototype.hasOwnProperty.call(f, m) && (d[d.length] = m);
          return d;
        }, l(s);
      };
      return function(s) {
        if (s && s.__esModule) return s;
        var f = {};
        if (s != null) for (var d = l(s), m = 0; m < d.length; m++) d[m] !== "default" && t(f, s, d[m]);
        return r(f, s), f;
      };
    })(), o = zt && zt.__exportStar || function(l, s) {
      for (var f in l) f !== "default" && !Object.prototype.hasOwnProperty.call(s, f) && t(s, l, f);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KintoneRestAPIClient = void 0;
    var i = Oi(), a = n(sy());
    (0, i.injectPlatformDeps)(a);
    var u = og();
    Object.defineProperty(e, "KintoneRestAPIClient", { enumerable: !0, get: function() {
      return u.KintoneRestAPIClient;
    } }), o($s(), e);
  })(zt)), zt;
}
var ag = ig();
const sg = {
  key: 0,
  class: "kvc-file-value"
}, lg = { class: "kvc-file-select-list" }, ug = ["src"], cg = { key: 1 }, fg = { class: "kvc-file-select-file-name" }, dg = { class: "kvc-file-select-file-size" }, pg = { class: "kvc-file-select-list-item" }, hg = ["onClick"], mg = { class: "kvc-file-select-file-name" }, vg = { class: "kvc-file-select-file-size" }, yg = ["src"], gg = { class: "kvc-file-select-group" }, bg = ["disabled"], wg = ["multiple", "accept"], Sg = /* @__PURE__ */ We({
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
    const r = e, n = t, o = new ag.KintoneRestAPIClient(), i = be(null), a = be(null), u = be(r.modelValue || []), l = be(null), s = be(null), f = be(!1);
    Rr(() => r.modelValue, (c) => {
      u.value = c ? Array.from(c) : [];
    }), Nn(async () => {
      if (u.value.length)
        for await (const c of u.value)
          c.fileKey && !c.data && (c.data = await o.file.downloadFile({ fileKey: c.fileKey }));
      l.value && Iv(l, u, {
        onStart: () => f.value = !0,
        onEnd: () => {
          f.value = !1, setTimeout(() => {
            n("update:modelValue", u.value), n("change", u.value);
          }, 0);
        }
      });
    });
    const d = (c, b = 0) => {
      if (c === 0) return "0 Bytes";
      const y = 1024, S = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], x = Math.floor(Math.log(c) / Math.log(y)), C = (c / Math.pow(y, x)).toFixed(b);
      return `${Number(C).toLocaleString()} ${S[x]}`;
    }, m = (c, b) => {
      if (!c || !b) return;
      const y = new Uint8Array(c), S = Array.from(y).map((x) => String.fromCharCode(x)).join("");
      return `data:${b};base64,${btoa(S)}`;
    }, v = (c) => {
      u.value.splice(c, 1), n("update:modelValue", u.value), n("change", u.value);
    }, h = async (c) => {
      if (!c) return;
      const b = Array.from(c), y = b.filter((x) => !x.fileKey), S = r.multiple ? [...u.value, ...b.filter((x) => x.fileKey)] : [];
      for await (const x of y) {
        let C = null;
        r.autoUpload && (C = (await o.file.uploadFile({ file: { name: x.name, data: x } })).fileKey);
        const O = await x.arrayBuffer();
        S.push({
          fileKey: C ?? void 0,
          name: x.name,
          size: x.size,
          contentType: x.type,
          data: O
        });
      }
      n("update:modelValue", S), n("change", S), u.value = S, a.value = null;
    }, { isOverDropZone: p } = kh(s, {
      onDrop: (c) => {
        h(c);
      },
      dataTypes: Ee(() => r.accept?.split(",") ?? []),
      // ← 明示的にstring[] or []
      multiple: r.multiple,
      preventDefaultForUnhandled: !1
    });
    return (c, b) => e.readOnly ? (U(), K("div", sg, [
      ne("ul", lg, [
        (U(!0), K(yt, null, St(u.value, (y, S) => (U(), K("li", {
          key: S,
          class: "kvc-file-select-list-item-wrap"
        }, [
          y.data && (y.contentType || "").startsWith("image/") ? (U(), K("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(y.data, y.contentType)
          }, null, 8, ug)) : (U(), K("span", cg, [
            ne("span", fg, Ke(y.name), 1),
            ne("span", dg, "(" + Ke(d(y.size)) + ")", 1)
          ]))
        ]))), 128))
      ])
    ])) : (U(), K("div", {
      key: 1,
      ref_key: "dropZoneRef",
      ref: s,
      class: "kvc-file-select"
    }, [
      ne("ul", {
        class: "kvc-file-select-list",
        ref_key: "sortWrapRef",
        ref: l
      }, [
        (U(!0), K(yt, null, St(u.value, (y, S) => (U(), K("li", {
          key: S,
          class: "kvc-file-select-list-item-wrap"
        }, [
          ne("div", pg, [
            e.disabled ? Ce("", !0) : (U(), K("button", {
              key: 0,
              type: "button",
              class: "kvc-file-select-delete-button",
              onClick: (x) => v(S)
            }, [
              Ge(Ie(Je), {
                icon: "mdi:close",
                width: "22"
              })
            ], 8, hg)),
            ne("span", mg, Ke(y.name), 1),
            ne("span", vg, Ke(d(y.size)), 1)
          ]),
          y.data && (y.contentType || "").startsWith("image/") ? (U(), K("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(y.data, y.contentType)
          }, null, 8, yg)) : Ce("", !0)
        ]))), 128))
      ], 512),
      ne("div", gg, [
        ne("button", {
          type: "button",
          disabled: e.disabled,
          class: "kvc-file-select-button",
          onClick: b[0] || (b[0] = (y) => i.value?.click())
        }, " 参照 ", 8, bg),
        b[3] || (b[3] = ne("p", { class: "kvc-file-select-text" }, "(最大1 GB)", -1))
      ]),
      !f.value && Ie(p) ? (U(), K("div", {
        key: 0,
        class: "kvc-file-select-file-dropzone",
        onClick: b[1] || (b[1] = (y) => p.value = !1)
      }, " ここにファイルをドロップします。 ")) : Ce("", !0),
      ne("input", {
        type: "file",
        ref_key: "fileSelectRef",
        ref: i,
        multiple: e.multiple,
        accept: e.accept,
        onChange: b[2] || (b[2] = (y) => h(y.target?.files ?? null))
      }, null, 40, wg)
    ], 512));
  }
}), xg = { class: "kvc-tab" }, _g = { class: "kvc-tab-header" }, Eg = ["onClick"], Og = /* @__PURE__ */ We({
  __name: "index",
  props: {
    small: { type: Boolean },
    modelValue: {},
    width: {},
    height: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = t, o = be(e.modelValue), i = (l) => {
      o.value = l, r("update:modelValue", l);
    };
    fl("activeTab", o), fl("setActiveTab", i);
    const a = ws(), u = Ee(() => {
      const l = [];
      return (a.default ? a.default({}) : []).forEach((f) => {
        const d = f.props;
        d?.label && d?.name && l.push({
          label: d.label,
          name: d.name
        });
      }), !o.value && l.length > 0 && (o.value = l[0].name), l;
    });
    return (l, s) => (U(), K("div", xg, [
      ne("div", _g, [
        (U(!0), K(yt, null, St(u.value, (f) => (U(), K("button", {
          key: f.name,
          type: "button",
          class: Ve(["kvc-tab-item", {
            "is-active": o.value === f.name,
            "kvc-tab-item-small": e.small
          }]),
          onClick: (d) => i(f.name)
        }, [
          ne("span", null, Ke(f.label), 1)
        ], 10, Eg))), 128))
      ]),
      ne("div", {
        class: Ve(["kvc-tab-content", {
          "kvc-tab-content-small": e.small
        }]),
        style: at({
          minWidth: e.width,
          minHeight: e.height
        })
      }, [
        Dt(l.$slots, "default")
      ], 6)
    ]));
  }
}), Ag = { key: 0 }, Cg = /* @__PURE__ */ We({
  __name: "pane",
  props: {
    label: {},
    name: {}
  },
  setup(e) {
    const t = e, r = nd("activeTab", be("")), n = Ee(() => r?.value === t.name);
    return (o, i) => n.value ? (U(), K("div", Ag, [
      Dt(o.$slots, "default")
    ])) : Ce("", !0);
  }
}), Dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KvcAutocomplete: Kh,
  KvcButton: Qh,
  KvcCheckbox: bm,
  KvcDatePicker: Hc,
  KvcDateTimePicker: iv,
  KvcDialog: bp,
  KvcDropdown: jh,
  KvcField: om,
  KvcFileSelect: Sg,
  KvcGroup: lm,
  KvcMultiSelect: Jh,
  KvcRadio: pm,
  KvcRow: dd,
  KvcSpinner: bc,
  KvcTab: Og,
  KvcTabPane: Cg,
  KvcTable: Eh,
  KvcTextInput: Ds,
  KvcTextarea: sv,
  KvcTimePicker: Gc,
  KvcWrap: ld
}, Symbol.toStringTag, { value: "Module" })), Ng = {
  install(e) {
    Object.entries(Dg).forEach(([t, r]) => {
      const n = r;
      e.component(n.name || t, n);
    });
  }
};
export {
  Kh as KvcAutocomplete,
  Qh as KvcButton,
  bm as KvcCheckbox,
  Hc as KvcDatePicker,
  iv as KvcDateTimePicker,
  bp as KvcDialog,
  jh as KvcDropdown,
  om as KvcField,
  Sg as KvcFileSelect,
  lm as KvcGroup,
  Jh as KvcMultiSelect,
  pm as KvcRadio,
  dd as KvcRow,
  bc as KvcSpinner,
  Og as KvcTab,
  Cg as KvcTabPane,
  Eh as KvcTable,
  Ds as KvcTextInput,
  sv as KvcTextarea,
  Gc as KvcTimePicker,
  ld as KvcWrap,
  rd as Spinner,
  Ng as default,
  $g as hideSpinner,
  Ig as showSpinner,
  an as spinnerState,
  Pg as useSpinner
};

var Rf = Object.defineProperty;
var Tf = (e, t, n) => t in e ? Rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ks = (e, t, n) => Tf(e, typeof t != "symbol" ? t + "" : t, n);
import { reactive as Zu, readonly as Pf, defineComponent as We, onMounted as _r, watch as ti, computed as we, withDirectives as tn, openBlock as V, createElementBlock as G, createElementVNode as Z, createStaticVNode as kf, vShow as Sr, createBlock as jt, resolveDynamicComponent as If, withModifiers as $f, withCtx as Ji, renderSlot as Dt, createVNode as Ue, unref as Pe, h as Qi, resolveComponent as ec, normalizeStyle as ct, toDisplayString as Ye, createCommentVNode as Oe, createTextVNode as Co, useSlots as fs, normalizeClass as Xe, Fragment as wt, renderList as Ot, mergeProps as zs, getCurrentScope as Nf, onScopeDispose as Mf, nextTick as tc, getCurrentInstance as jf, ref as Ce, shallowRef as Ff, toValue as cn, vModelRadio as Bf, vModelCheckbox as qf, vModelDynamic as Lf, vModelText as Vf, isRef as Uf, provide as Ys, inject as Wf } from "vue";
const ur = Zu({
  isVisible: !1,
  text: "読み込み中..."
});
class ds {
  constructor(t = {}) {
    Ks(this, "options");
    this.options = {
      text: "読み込み中...",
      ...t
    };
  }
  open(t) {
    ur.text = t || this.options.text || "読み込み中...", ur.isVisible = !0;
  }
  close() {
    ur.isVisible = !1;
  }
  update(t) {
    ur.text = t;
  }
  isOpen() {
    return ur.isVisible;
  }
}
const Hf = () => ({
  spinnerState: Pf(ur),
  createSpinner: (e) => new ds(e)
}), Gf = new ds(), xy = (e) => {
  const t = new ds({ text: e });
  return t.open(), t;
}, Ey = () => {
  Gf.close();
}, Kf = { class: "kvc-spinner-wrapper" }, zf = { class: "kvc-spinner" }, Yf = ["innerHTML"], Xf = /* @__PURE__ */ We({
  __name: "spinner",
  props: {
    modelValue: { type: Boolean, default: !1 },
    text: { default: "読み込み中..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = (o) => {
      const a = document.querySelector("body");
      o ? a && (a.style.overflow = "hidden") : a && (a.style.overflow = "auto");
    };
    _r(() => r(n.modelValue)), ti(() => n.modelValue, r);
    const i = we(() => (n.text || "").replace(`
`, "<br>"));
    return (o, a) => tn((V(), G("div", Kf, [
      Z("div", zf, [
        a[0] || (a[0] = kf('<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" data-v-e1a38298><g data-v-e1a38298><circle cx="12" cy="2.5" r="1.5" fill="#99ccff" opacity="0.14" data-v-e1a38298></circle><circle cx="16.75" cy="3.77" r="1.5" fill="#99ccff" opacity="0.29" data-v-e1a38298></circle><circle cx="20.23" cy="7.25" r="1.5" fill="#99ccff" opacity="0.43" data-v-e1a38298></circle><circle cx="21.5" cy="12" r="1.5" fill="#99ccff" opacity="0.57" data-v-e1a38298></circle><circle cx="20.23" cy="16.75" r="1.5" fill="#99ccff" opacity="0.71" data-v-e1a38298></circle><circle cx="16.75" cy="20.23" r="1.5" fill="#99ccff" opacity="0.86" data-v-e1a38298></circle><circle cx="12" cy="21.5" r="1.5" fill="#99ccff" data-v-e1a38298></circle></g></svg>', 1)),
        Z("span", {
          class: "kvc-spinner-text",
          innerHTML: i.value
        }, null, 8, Yf)
      ])
    ], 512)), [
      [Sr, o.modelValue]
    ]);
  }
}), nc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, rc = /* @__PURE__ */ nc(Xf, [["__scopeId", "data-v-e1a38298"]]), Jf = /* @__PURE__ */ We({
  __name: "wrap",
  props: {
    isForm: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = t, { spinnerState: r } = Hf();
    return (i, o) => (V(), jt(If(i.isForm ? "form" : "div"), {
      id: "kvc-wrap",
      class: "kvc-wrap",
      onSubmit: o[0] || (o[0] = $f((a) => n("submit", a), ["prevent"]))
    }, {
      default: Ji(() => [
        Dt(i.$slots, "default"),
        Ue(rc, {
          modelValue: Pe(r).isVisible,
          text: Pe(r).text
        }, null, 8, ["modelValue", "text"])
      ]),
      _: 3
    }, 32));
  }
}), Qf = {}, Zf = { class: "kvc-row" };
function ed(e, t) {
  return V(), G("div", Zf, [
    Dt(e.$slots, "default")
  ]);
}
const td = /* @__PURE__ */ nc(Qf, [["render", ed]]), ic = /^[a-z0-9]+(-[a-z0-9]+)*$/, co = (e, t, n, r = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    r = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const u = i.pop(), s = i.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : r,
      prefix: s,
      name: u
    };
    return t && !Pi(l) ? null : l;
  }
  const o = i[0], a = o.split("-");
  if (a.length > 1) {
    const u = {
      provider: r,
      prefix: a.shift(),
      name: a.join("-")
    };
    return t && !Pi(u) ? null : u;
  }
  if (n && r === "") {
    const u = {
      provider: r,
      prefix: "",
      name: o
    };
    return t && !Pi(u, n) ? null : u;
  }
  return null;
}, Pi = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, oc = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Zi = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), fo = Object.freeze({
  ...oc,
  ...Zi
}), Ja = Object.freeze({
  ...fo,
  body: "",
  hidden: !1
});
function nd(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Xs(e, t) {
  const n = nd(e, t);
  for (const r in Ja)
    r in Zi ? r in e && !(r in n) && (n[r] = Zi[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function rd(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function o(a) {
    if (n[a])
      return i[a] = [];
    if (!(a in i)) {
      i[a] = null;
      const u = r[a] && r[a].parent, s = u && o(u);
      s && (i[a] = [u].concat(s));
    }
    return i[a];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(o), i;
}
function id(e, t, n) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function a(u) {
    o = Xs(
      r[u] || i[u],
      o
    );
  }
  return a(t), n.forEach(a), Xs(e, o);
}
function ac(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((i) => {
    t(i, null), n.push(i);
  });
  const r = rd(e);
  for (const i in r) {
    const o = r[i];
    o && (t(i, id(e, i, o)), n.push(i));
  }
  return n;
}
const od = {
  provider: "",
  aliases: {},
  not_found: {},
  ...oc
};
function Ro(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function sc(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ro(e, od))
    return null;
  const n = t.icons;
  for (const i in n) {
    const o = n[i];
    if (
      // Name cannot be empty
      !i || // Must have body
      typeof o.body != "string" || // Check other props
      !Ro(
        o,
        Ja
      )
    )
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in r) {
    const o = r[i], a = o.parent;
    if (
      // Name cannot be empty
      !i || // Parent must be set and point to existing icon
      typeof a != "string" || !n[a] && !r[a] || // Check other props
      !Ro(
        o,
        Ja
      )
    )
      return null;
  }
  return t;
}
const Js = /* @__PURE__ */ Object.create(null);
function ad(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function vr(e, t) {
  const n = Js[e] || (Js[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = ad(e, t));
}
function lc(e, t) {
  return sc(t) ? ac(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function sd(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Qr = !1;
function uc(e) {
  return typeof e == "boolean" && (Qr = e), Qr;
}
function ld(e) {
  const t = typeof e == "string" ? co(e, !0, Qr) : e;
  if (t) {
    const n = vr(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function ud(e, t) {
  const n = co(e, !0, Qr);
  if (!n)
    return !1;
  const r = vr(n.provider, n.prefix);
  return t ? sd(r, n.name, t) : (r.missing.add(n.name), !0);
}
function cd(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Qr && !t && !e.prefix) {
    let i = !1;
    return sc(e) && (e.prefix = "", ac(e, (o, a) => {
      ud(o, a) && (i = !0);
    })), i;
  }
  const n = e.prefix;
  if (!Pi({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = vr(t, n);
  return !!lc(r, e);
}
const cc = Object.freeze({
  width: null,
  height: null
}), fc = Object.freeze({
  // Dimensions
  ...cc,
  // Transformations
  ...Zi
}), fd = /(-?[0-9.]*[0-9]+[0-9.]*)/g, dd = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Qs(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(fd);
  if (r === null || !r.length)
    return e;
  const i = [];
  let o = r.shift(), a = dd.test(o);
  for (; ; ) {
    if (a) {
      const u = parseFloat(o);
      isNaN(u) ? i.push(o) : i.push(Math.ceil(u * t * n) / n);
    } else
      i.push(o);
    if (o = r.shift(), o === void 0)
      return i.join("");
    a = !a;
  }
}
function pd(e, t = "defs") {
  let n = "";
  const r = e.indexOf("<" + t);
  for (; r >= 0; ) {
    const i = e.indexOf(">", r), o = e.indexOf("</" + t);
    if (i === -1 || o === -1)
      break;
    const a = e.indexOf(">", o);
    if (a === -1)
      break;
    n += e.slice(i + 1, o).trim(), e = e.slice(0, r).trim() + e.slice(a + 1);
  }
  return {
    defs: n,
    content: e
  };
}
function hd(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function md(e, t, n) {
  const r = pd(e);
  return hd(r.defs, t + r.content + n);
}
const gd = (e) => e === "unset" || e === "undefined" || e === "none";
function vd(e, t) {
  const n = {
    ...fo,
    ...e
  }, r = {
    ...fc,
    ...t
  }, i = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let o = n.body;
  [n, r].forEach((d) => {
    const c = [], y = d.hFlip, b = d.vFlip;
    let _ = d.rotate;
    y ? b ? _ += 2 : (c.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), c.push("scale(-1 1)"), i.top = i.left = 0) : b && (c.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), c.push("scale(1 -1)"), i.top = i.left = 0);
    let S;
    switch (_ < 0 && (_ -= Math.floor(_ / 4) * 4), _ = _ % 4, _) {
      case 1:
        S = i.height / 2 + i.top, c.unshift(
          "rotate(90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
      case 2:
        c.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        S = i.width / 2 + i.left, c.unshift(
          "rotate(-90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
    }
    _ % 2 === 1 && (i.left !== i.top && (S = i.left, i.left = i.top, i.top = S), i.width !== i.height && (S = i.width, i.width = i.height, i.height = S)), c.length && (o = md(
      o,
      '<g transform="' + c.join(" ") + '">',
      "</g>"
    ));
  });
  const a = r.width, u = r.height, s = i.width, l = i.height;
  let f, p;
  a === null ? (p = u === null ? "1em" : u === "auto" ? l : u, f = Qs(p, s / l)) : (f = a === "auto" ? s : a, p = u === null ? Qs(f, l / s) : u === "auto" ? l : u);
  const g = {}, h = (d, c) => {
    gd(c) || (g[d] = c.toString());
  };
  h("width", f), h("height", p);
  const m = [i.left, i.top, s, l];
  return g.viewBox = m.join(" "), {
    attributes: g,
    viewBox: m,
    body: o
  };
}
const yd = /\sid="(\S+)"/g, bd = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let wd = 0;
function _d(e, t = bd) {
  const n = [];
  let r;
  for (; r = yd.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((o) => {
    const a = typeof t == "function" ? t(o) : t + (wd++).toString(), u = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
      "$1" + a + i + "$3"
    );
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
const Qa = /* @__PURE__ */ Object.create(null);
function Sd(e, t) {
  Qa[e] = t;
}
function Za(e) {
  return Qa[e] || Qa[""];
}
function ps(e) {
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
const hs = /* @__PURE__ */ Object.create(null), kr = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], ki = [];
for (; kr.length > 0; )
  kr.length === 1 || Math.random() > 0.5 ? ki.push(kr.shift()) : ki.push(kr.pop());
hs[""] = ps({
  resources: ["https://api.iconify.design"].concat(ki)
});
function xd(e, t) {
  const n = ps(t);
  return n === null ? !1 : (hs[e] = n, !0);
}
function ms(e) {
  return hs[e];
}
const Ed = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Zs = Ed();
function Od(e, t) {
  const n = ms(e);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let i = 0;
    n.resources.forEach((a) => {
      i = Math.max(i, a.length);
    });
    const o = t + ".json?icons=";
    r = n.maxURL - i - n.path.length - o.length;
  }
  return r;
}
function Ad(e) {
  return e === 404;
}
const Dd = (e, t, n) => {
  const r = [], i = Od(e, t), o = "icons";
  let a = {
    type: o,
    provider: e,
    prefix: t,
    icons: []
  }, u = 0;
  return n.forEach((s, l) => {
    u += s.length + 1, u >= i && l > 0 && (r.push(a), a = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, u = s.length), a.icons.push(s);
  }), r.push(a), r;
};
function Cd(e) {
  if (typeof e == "string") {
    const t = ms(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Rd = (e, t, n) => {
  if (!Zs) {
    n("abort", 424);
    return;
  }
  let r = Cd(t.provider);
  switch (t.type) {
    case "icons": {
      const o = t.prefix, u = t.icons.join(","), s = new URLSearchParams({
        icons: u
      });
      r += o + ".json?" + s.toString();
      break;
    }
    case "custom": {
      const o = t.uri;
      r += o.slice(0, 1) === "/" ? o.slice(1) : o;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let i = 503;
  Zs(e + r).then((o) => {
    const a = o.status;
    if (a !== 200) {
      setTimeout(() => {
        n(Ad(a) ? "abort" : "next", a);
      });
      return;
    }
    return i = 501, o.json();
  }).then((o) => {
    if (typeof o != "object" || o === null) {
      setTimeout(() => {
        o === 404 ? n("abort", o) : n("next", i);
      });
      return;
    }
    setTimeout(() => {
      n("success", o);
    });
  }).catch(() => {
    n("next", i);
  });
}, Td = {
  prepare: Dd,
  send: Rd
};
function Pd(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((i, o) => i.provider !== o.provider ? i.provider.localeCompare(o.provider) : i.prefix !== o.prefix ? i.prefix.localeCompare(o.prefix) : i.name.localeCompare(o.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((i) => {
    if (r.name === i.name && r.prefix === i.prefix && r.provider === i.provider)
      return;
    r = i;
    const o = i.provider, a = i.prefix, u = i.name, s = n[o] || (n[o] = /* @__PURE__ */ Object.create(null)), l = s[a] || (s[a] = vr(o, a));
    let f;
    u in l.icons ? f = t.loaded : a === "" || l.missing.has(u) ? f = t.missing : f = t.pending;
    const p = {
      provider: o,
      prefix: a,
      name: u
    };
    f.push(p);
  }), t;
}
function dc(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((i) => i.id !== t));
  });
}
function kd(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, i = e.prefix;
    t.forEach((o) => {
      const a = o.icons, u = a.pending.length;
      a.pending = a.pending.filter((s) => {
        if (s.prefix !== i)
          return !0;
        const l = s.name;
        if (e.icons[l])
          a.loaded.push({
            provider: r,
            prefix: i,
            name: l
          });
        else if (e.missing.has(l))
          a.missing.push({
            provider: r,
            prefix: i,
            name: l
          });
        else
          return n = !0, !0;
        return !1;
      }), a.pending.length !== u && (n || dc([e], o.id), o.callback(
        a.loaded.slice(0),
        a.missing.slice(0),
        a.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let Id = 0;
function $d(e, t, n) {
  const r = Id++, i = dc.bind(null, n, r);
  if (!t.pending.length)
    return i;
  const o = {
    id: r,
    icons: t,
    callback: e,
    abort: i
  };
  return n.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(o);
  }), i;
}
function Nd(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((i) => {
    const o = typeof i == "string" ? co(i, t, n) : i;
    o && r.push(o);
  }), r;
}
var Md = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function jd(e, t, n, r) {
  const i = e.resources.length, o = e.random ? Math.floor(Math.random() * i) : e.index;
  let a;
  if (e.random) {
    let O = e.resources.slice(0);
    for (a = []; O.length > 1; ) {
      const D = Math.floor(Math.random() * O.length);
      a.push(O[D]), O = O.slice(0, D).concat(O.slice(D + 1));
    }
    a = a.concat(O);
  } else
    a = e.resources.slice(o).concat(e.resources.slice(0, o));
  const u = Date.now();
  let s = "pending", l = 0, f, p = null, g = [], h = [];
  typeof r == "function" && h.push(r);
  function m() {
    p && (clearTimeout(p), p = null);
  }
  function d() {
    s === "pending" && (s = "aborted"), m(), g.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), g = [];
  }
  function c(O, D) {
    D && (h = []), typeof O == "function" && h.push(O);
  }
  function y() {
    return {
      startTime: u,
      payload: t,
      status: s,
      queriesSent: l,
      queriesPending: g.length,
      subscribe: c,
      abort: d
    };
  }
  function b() {
    s = "failed", h.forEach((O) => {
      O(void 0, f);
    });
  }
  function _() {
    g.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), g = [];
  }
  function S(O, D, I) {
    const M = D !== "success";
    switch (g = g.filter((F) => F !== O), s) {
      case "pending":
        break;
      case "failed":
        if (M || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (D === "abort") {
      f = I, b();
      return;
    }
    if (M) {
      f = I, g.length || (a.length ? C() : b());
      return;
    }
    if (m(), _(), !e.random) {
      const F = e.resources.indexOf(O.resource);
      F !== -1 && F !== e.index && (e.index = F);
    }
    s = "completed", h.forEach((F) => {
      F(I);
    });
  }
  function C() {
    if (s !== "pending")
      return;
    m();
    const O = a.shift();
    if (O === void 0) {
      if (g.length) {
        p = setTimeout(() => {
          m(), s === "pending" && (_(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const D = {
      status: "pending",
      resource: O,
      callback: (I, M) => {
        S(D, I, M);
      }
    };
    g.push(D), l++, p = setTimeout(C, e.rotate), n(O, t, D.callback);
  }
  return setTimeout(C), y;
}
function pc(e) {
  const t = {
    ...Md,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((u) => u().status === "pending");
  }
  function i(u, s, l) {
    const f = jd(
      t,
      u,
      s,
      (p, g) => {
        r(), l && l(p, g);
      }
    );
    return n.push(f), f;
  }
  function o(u) {
    return n.find((s) => u(s)) || null;
  }
  return {
    query: i,
    find: o,
    setIndex: (u) => {
      t.index = u;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function el() {
}
const To = /* @__PURE__ */ Object.create(null);
function Fd(e) {
  if (!To[e]) {
    const t = ms(e);
    if (!t)
      return;
    const n = pc(t), r = {
      config: t,
      redundancy: n
    };
    To[e] = r;
  }
  return To[e];
}
function Bd(e, t, n) {
  let r, i;
  if (typeof e == "string") {
    const o = Za(e);
    if (!o)
      return n(void 0, 424), el;
    i = o.send;
    const a = Fd(e);
    a && (r = a.redundancy);
  } else {
    const o = ps(e);
    if (o) {
      r = pc(o);
      const a = e.resources ? e.resources[0] : "", u = Za(a);
      u && (i = u.send);
    }
  }
  return !r || !i ? (n(void 0, 424), el) : r.query(t, i, n)().abort;
}
function tl() {
}
function qd(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, kd(e);
  }));
}
function Ld(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match(ic) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function Ir(e, t, n) {
  function r() {
    const i = e.pendingIcons;
    t.forEach((o) => {
      i && i.delete(o), e.icons[o] || e.missing.add(o);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!lc(e, n).length) {
        r();
        return;
      }
    } catch (i) {
      console.error(i);
    }
  r(), qd(e);
}
function nl(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Vd(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, i = e.iconsToLoad;
    if (delete e.iconsToLoad, !i || !i.length)
      return;
    const o = e.loadIcon;
    if (e.loadIcons && (i.length > 1 || !o)) {
      nl(
        e.loadIcons(i, r, n),
        (f) => {
          Ir(e, i, f);
        }
      );
      return;
    }
    if (o) {
      i.forEach((f) => {
        const p = o(f, r, n);
        nl(p, (g) => {
          const h = g ? {
            prefix: r,
            icons: {
              [f]: g
            }
          } : null;
          Ir(e, [f], h);
        });
      });
      return;
    }
    const { valid: a, invalid: u } = Ld(i);
    if (u.length && Ir(e, u, null), !a.length)
      return;
    const s = r.match(ic) ? Za(n) : null;
    if (!s) {
      Ir(e, a, null);
      return;
    }
    s.prepare(n, r, a).forEach((f) => {
      Bd(n, f, (p) => {
        Ir(e, f.icons, p);
      });
    });
  }));
}
const Ud = (e, t) => {
  const n = Nd(e, !0, uc()), r = Pd(n);
  if (!r.pending.length) {
    let s = !0;
    return t && setTimeout(() => {
      s && t(
        r.loaded,
        r.missing,
        r.pending,
        tl
      );
    }), () => {
      s = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let a, u;
  return r.pending.forEach((s) => {
    const { provider: l, prefix: f } = s;
    if (f === u && l === a)
      return;
    a = l, u = f, o.push(vr(l, f));
    const p = i[l] || (i[l] = /* @__PURE__ */ Object.create(null));
    p[f] || (p[f] = []);
  }), r.pending.forEach((s) => {
    const { provider: l, prefix: f, name: p } = s, g = vr(l, f), h = g.pendingIcons || (g.pendingIcons = /* @__PURE__ */ new Set());
    h.has(p) || (h.add(p), i[l][f].push(p));
  }), o.forEach((s) => {
    const l = i[s.provider][s.prefix];
    l.length && Vd(s, l);
  }), t ? $d(t, r, o) : tl;
};
function Wd(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const i = t[r], o = typeof i;
    r in cc ? (i === null || i && (o === "string" || o === "number")) && (n[r] = i) : o === typeof n[r] && (n[r] = r === "rotate" ? i % 4 : i);
  }
  return n;
}
const Hd = /[\s,]+/;
function Gd(e, t) {
  t.split(Hd).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Kd(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function r(i) {
    for (; i < 0; )
      i += 4;
    return i % 4;
  }
  if (n === "") {
    const i = parseInt(e);
    return isNaN(i) ? 0 : r(i);
  } else if (n !== e) {
    let i = 0;
    switch (n) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let o = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(o) ? 0 : (o = o / i, o % 1 === 0 ? r(o) : 0);
    }
  }
  return t;
}
function zd(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Yd(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Xd(e) {
  return "data:image/svg+xml," + Yd(e);
}
function Jd(e) {
  return 'url("' + Xd(e) + '")';
}
const rl = {
  ...fc,
  inline: !1
}, Qd = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Zd = {
  display: "inline-block"
}, es = {
  backgroundColor: "currentColor"
}, hc = {
  backgroundColor: "transparent"
}, il = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ol = {
  webkitMask: es,
  mask: es,
  background: hc
};
for (const e in ol) {
  const t = ol[e];
  for (const n in il)
    t[e + n] = il[n];
}
const Ii = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  Ii[e + "-flip"] = t, Ii[e.slice(0, 1) + "-flip"] = t, Ii[e + "Flip"] = t;
});
function al(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const sl = (e, t) => {
  const n = Wd(rl, t), r = { ...Qd }, i = t.mode || "svg", o = {}, a = t.style, u = typeof a == "object" && !(a instanceof Array) ? a : {};
  for (let d in t) {
    const c = t[d];
    if (c !== void 0)
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
          n[d] = c === !0 || c === "true" || c === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof c == "string" && Gd(n, c);
          break;
        // Color: override style
        case "color":
          o.color = c;
          break;
        // Rotation as string
        case "rotate":
          typeof c == "string" ? n[d] = Kd(c) : typeof c == "number" && (n[d] = c);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          c !== !0 && c !== "true" && delete r["aria-hidden"];
          break;
        default: {
          const y = Ii[d];
          y ? (c === !0 || c === "true" || c === 1) && (n[y] = !0) : rl[d] === void 0 && (r[d] = c);
        }
      }
  }
  const s = vd(e, n), l = s.attributes;
  if (n.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    r.style = {
      ...o,
      ...u
    }, Object.assign(r, l);
    let d = 0, c = t.id;
    return typeof c == "string" && (c = c.replace(/-/g, "_")), r.innerHTML = _d(s.body, c ? () => c + "ID" + d++ : "iconifyVue"), Qi("svg", r);
  }
  const { body: f, width: p, height: g } = e, h = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), m = zd(f, {
    ...l,
    width: p + "",
    height: g + ""
  });
  return r.style = {
    ...o,
    "--svg": Jd(m),
    width: al(l.width),
    height: al(l.height),
    ...Zd,
    ...h ? es : hc,
    ...u
  }, Qi("span", r);
};
uc(!0);
Sd("", Td);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !cd(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const i = t[n];
          if (typeof i != "object" || !i || i.resources === void 0)
            continue;
          xd(n, i) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const ep = {
  ...fo,
  body: ""
}, it = We({
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
    getIcon(e, t, n) {
      if (typeof e == "object" && e !== null && typeof e.body == "string")
        return this._name = "", this.abortLoading(), {
          data: e
        };
      let r;
      if (typeof e != "string" || (r = co(e, !1, !0)) === null)
        return this.abortLoading(), null;
      let i = ld(r);
      if (!i)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", i !== null && (this._loadingIcon = {
          name: e,
          abort: Ud([r], () => {
            this.counter++;
          })
        })), null;
      if (this.abortLoading(), this._name !== e && (this._name = e, t && t(e)), n) {
        i = Object.assign({}, i);
        const a = n(i.body, r.name, r.prefix, r.provider);
        typeof a == "string" && (i.body = a);
      }
      const o = ["iconify"];
      return r.prefix !== "" && o.push("iconify--" + r.prefix), r.provider !== "" && o.push("iconify--" + r.provider), { data: i, classes: o };
    }
  },
  // Render icon
  render() {
    this.counter;
    const e = this.$attrs, t = this.iconMounted || e.ssr ? this.getIcon(e.icon, e.onLoad, e.customise) : null;
    if (!t)
      return sl(ep, e);
    let n = e;
    return t.classes && (n = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), sl({
      ...fo,
      ...t.data
    }, n);
  }
}), tp = {
  key: 0,
  class: "kvc-dialog-wrapper"
}, np = { class: "kvc-dialog-header" }, rp = { class: "kvc-dialog-title" }, ip = { class: "kvc-dialog-content" }, op = {
  key: 0,
  class: "kvc-dialog-icon"
}, ap = { class: "kvc-dialog-message" }, sp = { class: "kvc-dialog-footer" }, lp = /* @__PURE__ */ We({
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
    const n = t, r = e, i = (f) => {
      const p = document.querySelector("body");
      f ? p && (p.style.overflow = "hidden") : p && (p.style.overflow = "auto");
    }, o = () => {
      switch (r.iconType) {
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
      switch (r.iconType) {
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
      n("cancel"), n("update:modelValue", !1);
    }, s = () => {
      n("confirm"), n("update:modelValue", !1);
    }, l = () => {
      n("update:modelValue", !1);
    };
    return _r(() => i(r.modelValue)), ti(() => r.modelValue, (f) => {
      i(f), f || n("close");
    }), (f, p) => {
      const g = ec("KvcButton");
      return f.modelValue ? (V(), G("div", tp, [
        Z("div", {
          class: "kvc-dialog",
          style: ct(f.width ? { width: f.width } : null)
        }, [
          Z("div", np, [
            Z("h2", rp, Ye(f.title), 1),
            Z("button", {
              type: "button",
              class: "kvc-dialog-close",
              onClick: l
            }, [
              Ue(Pe(it), {
                icon: "mdi-light:plus",
                width: "24"
              })
            ])
          ]),
          Z("div", ip, [
            f.showIcon ? (V(), G("div", op, [
              Ue(Pe(it), {
                icon: o(),
                width: "24",
                style: ct({ color: a() })
              }, null, 8, ["icon", "style"])
            ])) : Oe("", !0),
            Z("div", ap, [
              Dt(f.$slots, "default", {}, () => [
                p[0] || (p[0] = Co("This is Content"))
              ])
            ])
          ]),
          Z("div", sp, [
            f.showCancel ? (V(), jt(g, {
              key: 0,
              color: "normal",
              onClick: u
            }, {
              default: Ji(() => [
                Co(Ye(f.cancelText), 1)
              ]),
              _: 1
            })) : Oe("", !0),
            f.showConfirm ? (V(), jt(g, {
              key: 1,
              color: "save",
              onClick: s
            }, {
              default: Ji(() => [
                Co(Ye(f.confirmText), 1)
              ]),
              _: 1
            })) : Oe("", !0)
          ])
        ], 4)
      ])) : Oe("", !0);
    };
  }
});
/*!
  * vue-draggable-next v2.2.0
  * (c) 2023 Anish George
  * @license MIT
  */
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ll(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ll(Object(n), !0).forEach(function(r) {
      up(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ll(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $i(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $i = function(t) {
    return typeof t;
  } : $i = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function up(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function pn() {
  return pn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pn.apply(this, arguments);
}
function cp(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function fp(e, t) {
  if (e == null) return {};
  var n = cp(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var dp = "1.14.0";
function fn(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var mn = fn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ni = fn(/Edge/i), ul = fn(/firefox/i), Vr = fn(/safari/i) && !fn(/chrome/i) && !fn(/android/i), mc = fn(/iP(ad|od|hone)/i), pp = fn(/chrome/i) && fn(/android/i), gc = {
  capture: !1,
  passive: !1
};
function Ie(e, t, n) {
  e.addEventListener(t, n, !mn && gc);
}
function Te(e, t, n) {
  e.removeEventListener(t, n, !mn && gc);
}
function eo(e, t) {
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
function hp(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Xt(e, t, n, r) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && eo(e, t) : eo(e, t)) || r && e === n)
        return e;
      if (e === n) break;
    } while (e = hp(e));
  }
  return null;
}
var cl = /\s+/g;
function Tt(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var r = (" " + e.className + " ").replace(cl, " ").replace(" " + t + " ", " ");
      e.className = (r + (n ? " " + t : "")).replace(cl, " ");
    }
}
function le(e, t, n) {
  var r = e && e.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function mr(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var r = le(e, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!t && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function vc(e, t, n) {
  if (e) {
    var r = e.getElementsByTagName(t), i = 0, o = r.length;
    if (n)
      for (; i < o; i++)
        n(r[i], i);
    return r;
  }
  return [];
}
function Jt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function st(e, t, n, r, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, a, u, s, l, f, p;
    if (e !== window && e.parentNode && e !== Jt() ? (o = e.getBoundingClientRect(), a = o.top, u = o.left, s = o.bottom, l = o.right, f = o.height, p = o.width) : (a = 0, u = 0, s = window.innerHeight, l = window.innerWidth, f = window.innerHeight, p = window.innerWidth), (t || n) && e !== window && (i = i || e.parentNode, !mn))
      do
        if (i && i.getBoundingClientRect && (le(i, "transform") !== "none" || n && le(i, "position") !== "static")) {
          var g = i.getBoundingClientRect();
          a -= g.top + parseInt(le(i, "border-top-width")), u -= g.left + parseInt(le(i, "border-left-width")), s = a + o.height, l = u + o.width;
          break;
        }
      while (i = i.parentNode);
    if (r && e !== window) {
      var h = mr(i || e), m = h && h.a, d = h && h.d;
      h && (a /= d, u /= m, p /= m, f /= d, s = a + f, l = u + p);
    }
    return {
      top: a,
      left: u,
      bottom: s,
      right: l,
      width: p,
      height: f
    };
  }
}
function fl(e, t, n) {
  for (var r = Cn(e, !0), i = st(e)[t]; r; ) {
    var o = st(r)[n], a = void 0;
    if (a = i >= o, !a) return r;
    if (r === Jt()) break;
    r = Cn(r, !1);
  }
  return !1;
}
function yr(e, t, n, r) {
  for (var i = 0, o = 0, a = e.children; o < a.length; ) {
    if (a[o].style.display !== "none" && a[o] !== ue.ghost && (r || a[o] !== ue.dragged) && Xt(a[o], n.draggable, e, !1)) {
      if (i === t)
        return a[o];
      i++;
    }
    o++;
  }
  return null;
}
function gs(e, t) {
  for (var n = e.lastElementChild; n && (n === ue.ghost || le(n, "display") === "none" || t && !eo(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function Nt(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== ue.clone && (!t || eo(e, t)) && n++;
  return n;
}
function dl(e) {
  var t = 0, n = 0, r = Jt();
  if (e)
    do {
      var i = mr(e), o = i.a, a = i.d;
      t += e.scrollLeft * o, n += e.scrollTop * a;
    } while (e !== r && (e = e.parentNode));
  return [t, n];
}
function mp(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var r in t)
        if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
    }
  return -1;
}
function Cn(e, t) {
  if (!e || !e.getBoundingClientRect) return Jt();
  var n = e, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = le(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return Jt();
        if (r || t) return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return Jt();
}
function gp(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Po(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Ur;
function yc(e, t) {
  return function() {
    if (!Ur) {
      var n = arguments, r = this;
      n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), Ur = setTimeout(function() {
        Ur = void 0;
      }, t);
    }
  };
}
function vp() {
  clearTimeout(Ur), Ur = void 0;
}
function bc(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function wc(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
var $t = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function yp() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(i) {
          if (!(le(i, "display") === "none" || i === ue.ghost)) {
            e.push({
              target: i,
              rect: st(i)
            });
            var o = Zt({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = mr(i, !0);
              a && (o.top -= a.f, o.left -= a.e);
            }
            i.fromRect = o;
          }
        });
      }
    },
    addAnimationState: function(r) {
      e.push(r);
    },
    removeAnimationState: function(r) {
      e.splice(mp(e, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof r == "function" && r();
        return;
      }
      var o = !1, a = 0;
      e.forEach(function(u) {
        var s = 0, l = u.target, f = l.fromRect, p = st(l), g = l.prevFromRect, h = l.prevToRect, m = u.rect, d = mr(l, !0);
        d && (p.top -= d.f, p.left -= d.e), l.toRect = p, l.thisAnimationDuration && Po(g, p) && !Po(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (m.top - p.top) / (m.left - p.left) === (f.top - p.top) / (f.left - p.left) && (s = wp(m, g, h, i.options)), Po(p, f) || (l.prevFromRect = f, l.prevToRect = p, s || (s = i.options.animation), i.animate(l, m, p, s)), s && (o = !0, a = Math.max(a, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof r == "function" && r();
      }, a) : typeof r == "function" && r(), e = [];
    },
    animate: function(r, i, o, a) {
      if (a) {
        le(r, "transition", ""), le(r, "transform", "");
        var u = mr(this.el), s = u && u.a, l = u && u.d, f = (i.left - o.left) / (s || 1), p = (i.top - o.top) / (l || 1);
        r.animatingX = !!f, r.animatingY = !!p, le(r, "transform", "translate3d(" + f + "px," + p + "px,0)"), this.forRepaintDummy = bp(r), le(r, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), le(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          le(r, "transition", ""), le(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, a);
      }
    }
  };
}
function bp(e) {
  return e.offsetWidth;
}
function wp(e, t, n, r) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation;
}
var Jn = [], ko = {
  initializeByDefault: !0
}, ri = {
  mount: function(t) {
    for (var n in ko)
      ko.hasOwnProperty(n) && !(n in t) && (t[n] = ko[n]);
    Jn.forEach(function(r) {
      if (r.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Jn.push(t);
  },
  pluginEvent: function(t, n, r) {
    var i = this;
    this.eventCanceled = !1, r.cancel = function() {
      i.eventCanceled = !0;
    };
    var o = t + "Global";
    Jn.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][o] && n[a.pluginName][o](Zt({
        sortable: n
      }, r)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](Zt({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(t, n, r, i) {
    Jn.forEach(function(u) {
      var s = u.pluginName;
      if (!(!t.options[s] && !u.initializeByDefault)) {
        var l = new u(t, n, t.options);
        l.sortable = t, l.options = t.options, t[s] = l, pn(r, l.defaults);
      }
    });
    for (var o in t.options)
      if (t.options.hasOwnProperty(o)) {
        var a = this.modifyOption(t, o, t.options[o]);
        typeof a < "u" && (t.options[o] = a);
      }
  },
  getEventProperties: function(t, n) {
    var r = {};
    return Jn.forEach(function(i) {
      typeof i.eventProperties == "function" && pn(r, i.eventProperties.call(n[i.pluginName], t));
    }), r;
  },
  modifyOption: function(t, n, r) {
    var i;
    return Jn.forEach(function(o) {
      t[o.pluginName] && o.optionListeners && typeof o.optionListeners[n] == "function" && (i = o.optionListeners[n].call(t[o.pluginName], r));
    }), i;
  }
};
function _p(e) {
  var t = e.sortable, n = e.rootEl, r = e.name, i = e.targetEl, o = e.cloneEl, a = e.toEl, u = e.fromEl, s = e.oldIndex, l = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, g = e.originalEvent, h = e.putSortable, m = e.extraEventProperties;
  if (t = t || n && n[$t], !!t) {
    var d, c = t.options, y = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !mn && !ni ? d = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(r, !0, !0)), d.to = a || n, d.from = u || n, d.item = i || n, d.clone = o, d.oldIndex = s, d.newIndex = l, d.oldDraggableIndex = f, d.newDraggableIndex = p, d.originalEvent = g, d.pullMode = h ? h.lastPutMode : void 0;
    var b = Zt(Zt({}, m), ri.getEventProperties(r, t));
    for (var _ in b)
      d[_] = b[_];
    n && n.dispatchEvent(d), c[y] && c[y].call(t, d);
  }
}
var Sp = ["evt"], xt = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, o = fp(r, Sp);
  ri.pluginEvent.bind(ue)(t, n, Zt({
    dragEl: Y,
    parentEl: Ge,
    ghostEl: ge,
    rootEl: qe,
    nextEl: qn,
    lastDownEl: Ni,
    cloneEl: ze,
    cloneHidden: An,
    dragStarted: Mr,
    putSortable: dt,
    activeSortable: ue.active,
    originalEvent: i,
    oldIndex: dr,
    oldDraggableIndex: Wr,
    newIndex: kt,
    newDraggableIndex: En,
    hideGhostForTarget: Ec,
    unhideGhostForTarget: Oc,
    cloneNowHidden: function() {
      An = !0;
    },
    cloneNowShown: function() {
      An = !1;
    },
    dispatchSortableEvent: function(u) {
      yt({
        sortable: n,
        name: u,
        originalEvent: i
      });
    }
  }, o));
};
function yt(e) {
  _p(Zt({
    putSortable: dt,
    cloneEl: ze,
    targetEl: Y,
    rootEl: qe,
    oldIndex: dr,
    oldDraggableIndex: Wr,
    newIndex: kt,
    newDraggableIndex: En
  }, e));
}
var Y, Ge, ge, qe, qn, Ni, ze, An, dr, kt, Wr, En, xi, dt, cr = !1, to = !1, no = [], $n, Bt, Io, $o, pl, hl, Mr, Qn, Hr, Gr = !1, Ei = !1, Mi, mt, No = [], ts = !1, ro = [], po = typeof document < "u", Oi = mc, ml = ni || mn ? "cssFloat" : "float", xp = po && !pp && !mc && "draggable" in document.createElement("div"), _c = function() {
  if (po) {
    if (mn)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Sc = function(t, n) {
  var r = le(t), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), o = yr(t, 0, n), a = yr(t, 1, n), u = o && le(o), s = a && le(a), l = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + st(o).width, f = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + st(a).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && u.float && u.float !== "none") {
    var p = u.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (u.display === "block" || u.display === "flex" || u.display === "table" || u.display === "grid" || l >= i && r[ml] === "none" || a && r[ml] === "none" && l + f > i) ? "vertical" : "horizontal";
}, Ep = function(t, n, r) {
  var i = r ? t.left : t.top, o = r ? t.right : t.bottom, a = r ? t.width : t.height, u = r ? n.left : n.top, s = r ? n.right : n.bottom, l = r ? n.width : n.height;
  return i === u || o === s || i + a / 2 === u + l / 2;
}, Op = function(t, n) {
  var r;
  return no.some(function(i) {
    var o = i[$t].options.emptyInsertThreshold;
    if (!(!o || gs(i))) {
      var a = st(i), u = t >= a.left - o && t <= a.right + o, s = n >= a.top - o && n <= a.bottom + o;
      if (u && s)
        return r = i;
    }
  }), r;
}, xc = function(t) {
  function n(o, a) {
    return function(u, s, l, f) {
      var p = u.options.group.name && s.options.group.name && u.options.group.name === s.options.group.name;
      if (o == null && (a || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (a && o === "clone")
        return o;
      if (typeof o == "function")
        return n(o(u, s, l, f), a)(u, s, l, f);
      var g = (a ? u : s).options.group.name;
      return o === !0 || typeof o == "string" && o === g || o.join && o.indexOf(g) > -1;
    };
  }
  var r = {}, i = t.group;
  (!i || $i(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = n(i.pull, !0), r.checkPut = n(i.put), r.revertClone = i.revertClone, t.group = r;
}, Ec = function() {
  !_c && ge && le(ge, "display", "none");
}, Oc = function() {
  !_c && ge && le(ge, "display", "");
};
po && document.addEventListener("click", function(e) {
  if (to)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), to = !1, !1;
}, !0);
var Nn = function(t) {
  if (Y) {
    t = t.touches ? t.touches[0] : t;
    var n = Op(t.clientX, t.clientY);
    if (n) {
      var r = {};
      for (var i in t)
        t.hasOwnProperty(i) && (r[i] = t[i]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[$t]._onDragOver(r);
    }
  }
}, Ap = function(t) {
  Y && Y.parentNode[$t]._isOutsideThisEl(t.target);
};
function ue(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = pn({}, t), e[$t] = this;
  var n = {
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
      return Sc(e, this.options);
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
    supportPointer: ue.supportPointer !== !1 && "PointerEvent" in window && !Vr,
    emptyInsertThreshold: 5
  };
  ri.initializePlugins(this, e, n);
  for (var r in n)
    !(r in t) && (t[r] = n[r]);
  xc(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : xp, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Ie(e, "pointerdown", this._onTapStart) : (Ie(e, "mousedown", this._onTapStart), Ie(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Ie(e, "dragover", this), Ie(e, "dragenter", this)), no.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), pn(this, yp());
}
ue.prototype = /** @lends Sortable.prototype */
{
  constructor: ue,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Qn = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, Y) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, r = this.el, i = this.options, o = i.preventOnFilter, a = t.type, u = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (u || t).target, l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, f = i.filter;
      if ($p(r), !Y && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Vr && s && s.tagName.toUpperCase() === "SELECT") && (s = Xt(s, i.draggable, r, !1), !(s && s.animated) && Ni !== s)) {
        if (dr = Nt(s), Wr = Nt(s, i.draggable), typeof f == "function") {
          if (f.call(this, t, s, this)) {
            yt({
              sortable: n,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: r,
              fromEl: r
            }), xt("filter", n, {
              evt: t
            }), o && t.cancelable && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(p) {
          if (p = Xt(l, p.trim(), r, !1), p)
            return yt({
              sortable: n,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: r,
              toEl: r
            }), xt("filter", n, {
              evt: t
            }), !0;
        }), f)) {
          o && t.cancelable && t.preventDefault();
          return;
        }
        i.handle && !Xt(l, i.handle, r, !1) || this._prepareDragStart(t, u, s);
      }
    }
  },
  _prepareDragStart: function(t, n, r) {
    var i = this, o = i.el, a = i.options, u = o.ownerDocument, s;
    if (r && !Y && r.parentNode === o) {
      var l = st(r);
      if (qe = o, Y = r, Ge = Y.parentNode, qn = Y.nextSibling, Ni = r, xi = a.group, ue.dragged = Y, $n = {
        target: Y,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, pl = $n.clientX - l.left, hl = $n.clientY - l.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, Y.style["will-change"] = "all", s = function() {
        if (xt("delayEnded", i, {
          evt: t
        }), ue.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !ul && i.nativeDraggable && (Y.draggable = !0), i._triggerDragStart(t, n), yt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), Tt(Y, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        vc(Y, f.trim(), Mo);
      }), Ie(u, "dragover", Nn), Ie(u, "mousemove", Nn), Ie(u, "touchmove", Nn), Ie(u, "mouseup", i._onDrop), Ie(u, "touchend", i._onDrop), Ie(u, "touchcancel", i._onDrop), ul && this.nativeDraggable && (this.options.touchStartThreshold = 4, Y.draggable = !0), xt("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ni || mn))) {
        if (ue.eventCanceled) {
          this._onDrop();
          return;
        }
        Ie(u, "mouseup", i._disableDelayedDrag), Ie(u, "touchend", i._disableDelayedDrag), Ie(u, "touchcancel", i._disableDelayedDrag), Ie(u, "mousemove", i._delayedDragTouchMoveHandler), Ie(u, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && Ie(u, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Y && Mo(Y), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    Te(t, "mouseup", this._disableDelayedDrag), Te(t, "touchend", this._disableDelayedDrag), Te(t, "touchcancel", this._disableDelayedDrag), Te(t, "mousemove", this._delayedDragTouchMoveHandler), Te(t, "touchmove", this._delayedDragTouchMoveHandler), Te(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? Ie(document, "pointermove", this._onTouchMove) : n ? Ie(document, "touchmove", this._onTouchMove) : Ie(document, "mousemove", this._onTouchMove) : (Ie(Y, "dragend", this), Ie(qe, "dragstart", this._onDragStart));
    try {
      document.selection ? ji(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (cr = !1, qe && Y) {
      xt("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Ie(document, "dragover", Ap);
      var r = this.options;
      !t && Tt(Y, r.dragClass, !1), Tt(Y, r.ghostClass, !0), ue.active = this, t && this._appendGhost(), yt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Bt) {
      this._lastX = Bt.clientX, this._lastY = Bt.clientY, Ec();
      for (var t = document.elementFromPoint(Bt.clientX, Bt.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Bt.clientX, Bt.clientY), t !== n); )
        n = t;
      if (Y.parentNode[$t]._isOutsideThisEl(t), n)
        do {
          if (n[$t]) {
            var r = void 0;
            if (r = n[$t]._onDragOver({
              clientX: Bt.clientX,
              clientY: Bt.clientY,
              target: t,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      Oc();
    }
  },
  _onTouchMove: function(t) {
    if ($n) {
      var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, o = t.touches ? t.touches[0] : t, a = ge && mr(ge, !0), u = ge && a && a.a, s = ge && a && a.d, l = Oi && mt && dl(mt), f = (o.clientX - $n.clientX + i.x) / (u || 1) + (l ? l[0] - No[0] : 0) / (u || 1), p = (o.clientY - $n.clientY + i.y) / (s || 1) + (l ? l[1] - No[1] : 0) / (s || 1);
      if (!ue.active && !cr) {
        if (r && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < r)
          return;
        this._onDragStart(t, !0);
      }
      if (ge) {
        a ? (a.e += f - (Io || 0), a.f += p - ($o || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: p
        };
        var g = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        le(ge, "webkitTransform", g), le(ge, "mozTransform", g), le(ge, "msTransform", g), le(ge, "transform", g), Io = f, $o = p, Bt = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ge) {
      var t = this.options.fallbackOnBody ? document.body : qe, n = st(Y, !0, Oi, !0, t), r = this.options;
      if (Oi) {
        for (mt = t; le(mt, "position") === "static" && le(mt, "transform") === "none" && mt !== document; )
          mt = mt.parentNode;
        mt !== document.body && mt !== document.documentElement ? (mt === document && (mt = Jt()), n.top += mt.scrollTop, n.left += mt.scrollLeft) : mt = Jt(), No = dl(mt);
      }
      ge = Y.cloneNode(!0), Tt(ge, r.ghostClass, !1), Tt(ge, r.fallbackClass, !0), Tt(ge, r.dragClass, !0), le(ge, "transition", ""), le(ge, "transform", ""), le(ge, "box-sizing", "border-box"), le(ge, "margin", 0), le(ge, "top", n.top), le(ge, "left", n.left), le(ge, "width", n.width), le(ge, "height", n.height), le(ge, "opacity", "0.8"), le(ge, "position", Oi ? "absolute" : "fixed"), le(ge, "zIndex", "100000"), le(ge, "pointerEvents", "none"), ue.ghost = ge, t.appendChild(ge), le(ge, "transform-origin", pl / parseInt(ge.style.width) * 100 + "% " + hl / parseInt(ge.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var r = this, i = t.dataTransfer, o = r.options;
    if (xt("dragStart", this, {
      evt: t
    }), ue.eventCanceled) {
      this._onDrop();
      return;
    }
    xt("setupClone", this), ue.eventCanceled || (ze = wc(Y), ze.draggable = !1, ze.style["will-change"] = "", this._hideClone(), Tt(ze, this.options.chosenClass, !1), ue.clone = ze), r.cloneId = ji(function() {
      xt("clone", r), !ue.eventCanceled && (r.options.removeCloneOnHide || qe.insertBefore(ze, Y), r._hideClone(), yt({
        sortable: r,
        name: "clone"
      }));
    }), !n && Tt(Y, o.dragClass, !0), n ? (to = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (Te(document, "mouseup", r._onDrop), Te(document, "touchend", r._onDrop), Te(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(r, i, Y)), Ie(document, "drop", r), le(Y, "transform", "translateZ(0)")), cr = !0, r._dragStartId = ji(r._dragStarted.bind(r, n, t)), Ie(document, "selectstart", r), Mr = !0, Vr && le(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, r = t.target, i, o, a, u = this.options, s = u.group, l = ue.active, f = xi === s, p = u.sort, g = dt || l, h, m = this, d = !1;
    if (ts) return;
    function c(j, ee) {
      xt(j, m, Zt({
        evt: t,
        isOwner: f,
        axis: h ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: o,
        canSort: p,
        fromSortable: g,
        target: r,
        completed: b,
        onMove: function(de, ye) {
          return Ai(qe, n, Y, i, de, st(de), t, ye);
        },
        changed: _
      }, ee));
    }
    function y() {
      c("dragOverAnimationCapture"), m.captureAnimationState(), m !== g && g.captureAnimationState();
    }
    function b(j) {
      return c("dragOverCompleted", {
        insertion: j
      }), j && (f ? l._hideClone() : l._showClone(m), m !== g && (Tt(Y, dt ? dt.options.ghostClass : l.options.ghostClass, !1), Tt(Y, u.ghostClass, !0)), dt !== m && m !== ue.active ? dt = m : m === ue.active && dt && (dt = null), g === m && (m._ignoreWhileAnimating = r), m.animateAll(function() {
        c("dragOverAnimationComplete"), m._ignoreWhileAnimating = null;
      }), m !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (r === Y && !Y.animated || r === n && !r.animated) && (Qn = null), !u.dragoverBubble && !t.rootEl && r !== document && (Y.parentNode[$t]._isOutsideThisEl(t.target), !j && Nn(t)), !u.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function _() {
      kt = Nt(Y), En = Nt(Y, u.draggable), yt({
        sortable: m,
        name: "change",
        toEl: n,
        newIndex: kt,
        newDraggableIndex: En,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), r = Xt(r, u.draggable, n, !0), c("dragOver"), ue.eventCanceled) return d;
    if (Y.contains(t.target) || r.animated && r.animatingX && r.animatingY || m._ignoreWhileAnimating === r)
      return b(!1);
    if (to = !1, l && !u.disabled && (f ? p || (a = Ge !== qe) : dt === this || (this.lastPutMode = xi.checkPull(this, l, Y, t)) && s.checkPut(this, l, Y, t))) {
      if (h = this._getDirection(t, r) === "vertical", i = st(Y), c("dragOverValid"), ue.eventCanceled) return d;
      if (a)
        return Ge = qe, y(), this._hideClone(), c("revert"), ue.eventCanceled || (qn ? qe.insertBefore(Y, qn) : qe.appendChild(Y)), b(!0);
      var S = gs(n, u.draggable);
      if (!S || Tp(t, h, this) && !S.animated) {
        if (S === Y)
          return b(!1);
        if (S && n === t.target && (r = S), r && (o = st(r)), Ai(qe, n, Y, i, r, o, t, !!r) !== !1)
          return y(), n.appendChild(Y), Ge = n, _(), b(!0);
      } else if (S && Rp(t, h, this)) {
        var C = yr(n, 0, u, !0);
        if (C === Y)
          return b(!1);
        if (r = C, o = st(r), Ai(qe, n, Y, i, r, o, t, !1) !== !1)
          return y(), n.insertBefore(Y, C), Ge = n, _(), b(!0);
      } else if (r.parentNode === n) {
        o = st(r);
        var O = 0, D, I = Y.parentNode !== n, M = !Ep(Y.animated && Y.toRect || i, r.animated && r.toRect || o, h), F = h ? "top" : "left", B = fl(r, "top", "top") || fl(Y, "top", "top"), H = B ? B.scrollTop : void 0;
        Qn !== r && (D = o[F], Gr = !1, Ei = !M && u.invertSwap || I), O = Pp(t, r, o, h, M ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, Ei, Qn === r);
        var te;
        if (O !== 0) {
          var W = Nt(Y);
          do
            W -= O, te = Ge.children[W];
          while (te && (le(te, "display") === "none" || te === ge));
        }
        if (O === 0 || te === r)
          return b(!1);
        Qn = r, Hr = O;
        var q = r.nextElementSibling, L = !1;
        L = O === 1;
        var X = Ai(qe, n, Y, i, r, o, t, L);
        if (X !== !1)
          return (X === 1 || X === -1) && (L = X === 1), ts = !0, setTimeout(Cp, 30), y(), L && !q ? n.appendChild(Y) : r.parentNode.insertBefore(Y, L ? q : r), B && bc(B, 0, H - B.scrollTop), Ge = Y.parentNode, D !== void 0 && !Ei && (Mi = Math.abs(D - st(r)[F])), _(), b(!0);
      }
      if (n.contains(Y))
        return b(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Te(document, "mousemove", this._onTouchMove), Te(document, "touchmove", this._onTouchMove), Te(document, "pointermove", this._onTouchMove), Te(document, "dragover", Nn), Te(document, "mousemove", Nn), Te(document, "touchmove", Nn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    Te(t, "mouseup", this._onDrop), Te(t, "touchend", this._onDrop), Te(t, "pointerup", this._onDrop), Te(t, "touchcancel", this._onDrop), Te(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, r = this.options;
    if (kt = Nt(Y), En = Nt(Y, r.draggable), xt("drop", this, {
      evt: t
    }), Ge = Y && Y.parentNode, kt = Nt(Y), En = Nt(Y, r.draggable), ue.eventCanceled) {
      this._nulling();
      return;
    }
    cr = !1, Ei = !1, Gr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ns(this.cloneId), ns(this._dragStartId), this.nativeDraggable && (Te(document, "drop", this), Te(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Vr && le(document.body, "user-select", ""), le(Y, "transform", ""), t && (Mr && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), ge && ge.parentNode && ge.parentNode.removeChild(ge), (qe === Ge || dt && dt.lastPutMode !== "clone") && ze && ze.parentNode && ze.parentNode.removeChild(ze), Y && (this.nativeDraggable && Te(Y, "dragend", this), Mo(Y), Y.style["will-change"] = "", Mr && !cr && Tt(Y, dt ? dt.options.ghostClass : this.options.ghostClass, !1), Tt(Y, this.options.chosenClass, !1), yt({
      sortable: this,
      name: "unchoose",
      toEl: Ge,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), qe !== Ge ? (kt >= 0 && (yt({
      rootEl: Ge,
      name: "add",
      toEl: Ge,
      fromEl: qe,
      originalEvent: t
    }), yt({
      sortable: this,
      name: "remove",
      toEl: Ge,
      originalEvent: t
    }), yt({
      rootEl: Ge,
      name: "sort",
      toEl: Ge,
      fromEl: qe,
      originalEvent: t
    }), yt({
      sortable: this,
      name: "sort",
      toEl: Ge,
      originalEvent: t
    })), dt && dt.save()) : kt !== dr && kt >= 0 && (yt({
      sortable: this,
      name: "update",
      toEl: Ge,
      originalEvent: t
    }), yt({
      sortable: this,
      name: "sort",
      toEl: Ge,
      originalEvent: t
    })), ue.active && ((kt == null || kt === -1) && (kt = dr, En = Wr), yt({
      sortable: this,
      name: "end",
      toEl: Ge,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    xt("nulling", this), qe = Y = Ge = ge = qn = ze = Ni = An = $n = Bt = Mr = kt = En = dr = Wr = Qn = Hr = dt = xi = ue.dragged = ue.ghost = ue.clone = ue.active = null, ro.forEach(function(t) {
      t.checked = !0;
    }), ro.length = Io = $o = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        Y && (this._onDragOver(t), Dp(t));
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
    for (var t = [], n, r = this.el.children, i = 0, o = r.length, a = this.options; i < o; i++)
      n = r[i], Xt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || Ip(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var r = {}, i = this.el;
    this.toArray().forEach(function(o, a) {
      var u = i.children[a];
      Xt(u, this.options.draggable, i, !1) && (r[o] = u);
    }, this), n && this.captureAnimationState(), t.forEach(function(o) {
      r[o] && (i.removeChild(r[o]), i.appendChild(r[o]));
    }), n && this.animateAll();
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
  closest: function(t, n) {
    return Xt(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var r = this.options;
    if (n === void 0)
      return r[t];
    var i = ri.modifyOption(this, t, n);
    typeof i < "u" ? r[t] = i : r[t] = n, t === "group" && xc(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    xt("destroy", this);
    var t = this.el;
    t[$t] = null, Te(t, "mousedown", this._onTapStart), Te(t, "touchstart", this._onTapStart), Te(t, "pointerdown", this._onTapStart), this.nativeDraggable && (Te(t, "dragover", this), Te(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), no.splice(no.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!An) {
      if (xt("hideClone", this), ue.eventCanceled) return;
      le(ze, "display", "none"), this.options.removeCloneOnHide && ze.parentNode && ze.parentNode.removeChild(ze), An = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (An) {
      if (xt("showClone", this), ue.eventCanceled) return;
      Y.parentNode == qe && !this.options.group.revertClone ? qe.insertBefore(ze, Y) : qn ? qe.insertBefore(ze, qn) : qe.appendChild(ze), this.options.group.revertClone && this.animate(Y, ze), le(ze, "display", ""), An = !1;
    }
  }
};
function Dp(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ai(e, t, n, r, i, o, a, u) {
  var s, l = e[$t], f = l.options.onMove, p;
  return window.CustomEvent && !mn && !ni ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = r, s.related = i || t, s.relatedRect = o || st(t), s.willInsertAfter = u, s.originalEvent = a, e.dispatchEvent(s), f && (p = f.call(l, s, a)), p;
}
function Mo(e) {
  e.draggable = !1;
}
function Cp() {
  ts = !1;
}
function Rp(e, t, n) {
  var r = st(yr(n.el, 0, n.options, !0)), i = 10;
  return t ? e.clientX < r.left - i || e.clientY < r.top && e.clientX < r.right : e.clientY < r.top - i || e.clientY < r.bottom && e.clientX < r.left;
}
function Tp(e, t, n) {
  var r = st(gs(n.el, n.options.draggable)), i = 10;
  return t ? e.clientX > r.right + i || e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left : e.clientX > r.right && e.clientY > r.top || e.clientX <= r.right && e.clientY > r.bottom + i;
}
function Pp(e, t, n, r, i, o, a, u) {
  var s = r ? e.clientY : e.clientX, l = r ? n.height : n.width, f = r ? n.top : n.left, p = r ? n.bottom : n.right, g = !1;
  if (!a) {
    if (u && Mi < l * i) {
      if (!Gr && (Hr === 1 ? s > f + l * o / 2 : s < p - l * o / 2) && (Gr = !0), Gr)
        g = !0;
      else if (Hr === 1 ? s < f + Mi : s > p - Mi)
        return -Hr;
    } else if (s > f + l * (1 - i) / 2 && s < p - l * (1 - i) / 2)
      return kp(t);
  }
  return g = g || a, g && (s < f + l * o / 2 || s > p - l * o / 2) ? s > f + l / 2 ? 1 : -1 : 0;
}
function kp(e) {
  return Nt(Y) < Nt(e) ? 1 : -1;
}
function Ip(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--; )
    r += t.charCodeAt(n);
  return r.toString(36);
}
function $p(e) {
  ro.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var r = t[n];
    r.checked && ro.push(r);
  }
}
function ji(e) {
  return setTimeout(e, 0);
}
function ns(e) {
  return clearTimeout(e);
}
po && Ie(document, "touchmove", function(e) {
  (ue.active || cr) && e.cancelable && e.preventDefault();
});
ue.utils = {
  on: Ie,
  off: Te,
  css: le,
  find: vc,
  is: function(t, n) {
    return !!Xt(t, n, t, !1);
  },
  extend: gp,
  throttle: yc,
  closest: Xt,
  toggleClass: Tt,
  clone: wc,
  index: Nt,
  nextTick: ji,
  cancelNextTick: ns,
  detectDirection: Sc,
  getChild: yr
};
ue.get = function(e) {
  return e[$t];
};
ue.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (ue.utils = Zt(Zt({}, ue.utils), r.utils)), ri.mount(r);
  });
};
ue.create = function(e, t) {
  return new ue(e, t);
};
ue.version = dp;
var tt = [], jr, rs, is = !1, jo, Fo, io, Fr;
function Np() {
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
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? Ie(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ie(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? Ie(document, "touchmove", this._handleFallbackAutoScroll) : Ie(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Te(document, "dragover", this._handleAutoScroll) : (Te(document, "pointermove", this._handleFallbackAutoScroll), Te(document, "touchmove", this._handleFallbackAutoScroll), Te(document, "mousemove", this._handleFallbackAutoScroll)), gl(), Fi(), vp();
    },
    nulling: function() {
      io = rs = jr = is = Fr = jo = Fo = null, tt.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var i = this, o = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, u = document.elementFromPoint(o, a);
      if (io = n, r || this.options.forceAutoScrollFallback || ni || mn || Vr) {
        Bo(n, this.options, u, r);
        var s = Cn(u, !0);
        is && (!Fr || o !== jo || a !== Fo) && (Fr && gl(), Fr = setInterval(function() {
          var l = Cn(document.elementFromPoint(o, a), !0);
          l !== s && (s = l, Fi()), Bo(n, i.options, l, r);
        }, 10), jo = o, Fo = a);
      } else {
        if (!this.options.bubbleScroll || Cn(u, !0) === Jt()) {
          Fi();
          return;
        }
        Bo(n, this.options, Cn(u, !1), !1);
      }
    }
  }, pn(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Fi() {
  tt.forEach(function(e) {
    clearInterval(e.pid);
  }), tt = [];
}
function gl() {
  clearInterval(Fr);
}
var Bo = yc(function(e, t, n, r) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, u = t.scrollSpeed, s = Jt(), l = !1, f;
    rs !== n && (rs = n, Fi(), jr = t.scroll, f = t.scrollFn, jr === !0 && (jr = Cn(n, !0)));
    var p = 0, g = jr;
    do {
      var h = g, m = st(h), d = m.top, c = m.bottom, y = m.left, b = m.right, _ = m.width, S = m.height, C = void 0, O = void 0, D = h.scrollWidth, I = h.scrollHeight, M = le(h), F = h.scrollLeft, B = h.scrollTop;
      h === s ? (C = _ < D && (M.overflowX === "auto" || M.overflowX === "scroll" || M.overflowX === "visible"), O = S < I && (M.overflowY === "auto" || M.overflowY === "scroll" || M.overflowY === "visible")) : (C = _ < D && (M.overflowX === "auto" || M.overflowX === "scroll"), O = S < I && (M.overflowY === "auto" || M.overflowY === "scroll"));
      var H = C && (Math.abs(b - i) <= a && F + _ < D) - (Math.abs(y - i) <= a && !!F), te = O && (Math.abs(c - o) <= a && B + S < I) - (Math.abs(d - o) <= a && !!B);
      if (!tt[p])
        for (var W = 0; W <= p; W++)
          tt[W] || (tt[W] = {});
      (tt[p].vx != H || tt[p].vy != te || tt[p].el !== h) && (tt[p].el = h, tt[p].vx = H, tt[p].vy = te, clearInterval(tt[p].pid), (H != 0 || te != 0) && (l = !0, tt[p].pid = setInterval((function() {
        r && this.layer === 0 && ue.active._onTouchMove(io);
        var q = tt[this.layer].vy ? tt[this.layer].vy * u : 0, L = tt[this.layer].vx ? tt[this.layer].vx * u : 0;
        typeof f == "function" && f.call(ue.dragged.parentNode[$t], L, q, e, io, tt[this.layer].el) !== "continue" || bc(tt[this.layer].el, L, q);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && g !== s && (g = Cn(g, !1)));
    is = l;
  }
}, 30), Ac = function(t) {
  var n = t.originalEvent, r = t.putSortable, i = t.dragEl, o = t.activeSortable, a = t.dispatchSortableEvent, u = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var l = r || o;
    u();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, p = document.elementFromPoint(f.clientX, f.clientY);
    s(), l && !l.el.contains(p) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: r
    }));
  }
};
function vs() {
}
vs.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var i = yr(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: Ac
};
pn(vs, {
  pluginName: "revertOnSpill"
});
function ys() {
}
ys.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable, i = r || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: Ac
};
pn(ys, {
  pluginName: "removeOnSpill"
});
ue.mount(new Np());
ue.mount(ys, vs);
function Mp() {
  return typeof window < "u" ? window.console : global.console;
}
const jp = Mp();
function Fp(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] || (t[r] = e(r));
  };
}
const Bp = /-(\w)/g, vl = Fp((e) => e.replace(Bp, (t, n) => n ? n.toUpperCase() : ""));
function qo(e) {
  e.parentElement !== null && e.parentElement.removeChild(e);
}
function yl(e, t, n) {
  const r = n === 0 ? e.children[0] : e.children[n - 1].nextSibling;
  e.insertBefore(t, r);
}
function qp(e, t) {
  return Object.values(e).indexOf(t);
}
function Lp(e, t, n, r) {
  if (!e)
    return [];
  const i = Object.values(e), o = t.length - r;
  return [...t].map((u, s) => s >= o ? i.length : i.indexOf(u));
}
function Dc(e, t) {
  this.$nextTick(() => this.$emit(e.toLowerCase(), t));
}
function Vp(e) {
  return (t) => {
    this.realList !== null && this["onDrag" + e](t), Dc.call(this, e, t);
  };
}
function Up(e) {
  return ["transition-group", "TransitionGroup"].includes(e);
}
function Wp(e) {
  if (!e || e.length !== 1)
    return !1;
  const [{ type: t }] = e;
  return t ? Up(t.name) : !1;
}
function Hp(e, t) {
  return t ? { ...t.props, ...t.attrs } : e;
}
const os = ["Start", "Add", "Remove", "Update", "End"], as = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Gp = ["Move", ...os, ...as].map((e) => "on" + e);
let Lo = null;
const Kp = {
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
}, zp = We({
  name: "VueDraggableNext",
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "move",
    "change",
    ...os.map((e) => e.toLowerCase()),
    ...as.map((e) => e.toLowerCase())
  ],
  props: Kp,
  data() {
    return {
      transitionMode: !1,
      noneFunctionalComponentMode: !1,
      headerOffset: 0,
      footerOffset: 0,
      _sortable: {},
      visibleIndexes: [],
      context: {}
    };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : null, t = Hp(this.$attrs, this.componentData);
    return e ? (this.transitionMode = Wp(e), Qi(this.getTag(), t, e)) : Qi(this.getTag(), t, []);
  },
  created() {
    this.list !== null && this.modelValue !== null && jp.error("list props are mutually exclusive! Please set one.");
  },
  mounted() {
    const e = {};
    os.forEach((i) => {
      e["on" + i] = Vp.call(this, i);
    }), as.forEach((i) => {
      e["on" + i] = Dc.bind(this, i);
    });
    const t = Object.keys(this.$attrs).reduce((i, o) => (i[vl(o)] = this.$attrs[o], i), {}), n = Object.assign({}, t, e, {
      onMove: (i, o) => this.onDragMove(i, o)
    });
    !("draggable" in n) && (n.draggable = ">*");
    const r = this.$el.nodeType === 1 ? this.$el : this.$el.parentElement;
    this._sortable = new ue(r, n), r.__draggable_component__ = this, this.computeIndexes();
  },
  beforeUnmount() {
    try {
      this._sortable !== void 0 && this._sortable.destroy();
    } catch {
    }
  },
  computed: {
    realList() {
      return this.list ? this.list : this.modelValue;
    }
  },
  watch: {
    $attrs: {
      handler(e) {
        this.updateOptions(e);
      },
      deep: !0
    },
    realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getTag() {
      return this.component ? ec(this.component) : this.tag;
    },
    updateOptions(e) {
      for (var t in e) {
        const n = vl(t);
        Gp.indexOf(n) === -1 && this._sortable.option(n, e[t]);
      }
    },
    getChildrenNodes() {
      return this.$el.children;
    },
    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = Lp(this.getChildrenNodes(), this.$el.children, this.transitionMode, this.footerOffset);
      });
    },
    getUnderlyingVm(e) {
      const t = qp(this.getChildrenNodes() || [], e);
      if (t === -1)
        return null;
      const n = this.realList[t];
      return { index: t, element: n };
    },
    emitChanges(e) {
      this.$nextTick(() => {
        this.$emit("change", e);
      });
    },
    alterList(e) {
      if (this.list) {
        e(this.list);
        return;
      }
      const t = [...this.modelValue];
      e(t), this.$emit("update:modelValue", t);
    },
    spliceList() {
      const e = (t) => t.splice(...arguments);
      this.alterList(e);
    },
    updatePosition(e, t) {
      const n = (r) => r.splice(t, 0, r.splice(e, 1)[0]);
      this.alterList(n);
    },
    getVmIndex(e) {
      const t = this.visibleIndexes, n = t.length;
      return e > n - 1 ? n : t[e];
    },
    getComponent() {
      return this.$slots.default ? (
        //@ts-ignore
        this.$slots.default()[0].componentInstance
      ) : null;
    },
    resetTransitionData(e) {
      if (!this.noTransitionOnDrag || !this.transitionMode)
        return;
      var t = this.getChildrenNodes();
      t[e].data = null;
      const n = this.getComponent();
      n.children = [], n.kept = void 0;
    },
    onDragStart(e) {
      this.computeIndexes(), this.context = this.getUnderlyingVm(e.item), this.context && (e.item._underlying_vm_ = this.clone(this.context.element), Lo = e.item);
    },
    onDragAdd(e) {
      const t = e.item._underlying_vm_;
      if (t === void 0)
        return;
      qo(e.item);
      const n = this.getVmIndex(e.newIndex);
      this.spliceList(n, 0, t), this.computeIndexes();
      const r = { element: t, newIndex: n };
      this.emitChanges({ added: r });
    },
    onDragRemove(e) {
      if (yl(this.$el, e.item, e.oldIndex), e.pullMode === "clone") {
        qo(e.clone);
        return;
      }
      if (!this.context)
        return;
      const t = this.context.index;
      this.spliceList(t, 1);
      const n = { element: this.context.element, oldIndex: t };
      this.resetTransitionData(t), this.emitChanges({ removed: n });
    },
    onDragUpdate(e) {
      qo(e.item), yl(e.from, e.item, e.oldIndex);
      const t = this.context.index, n = this.getVmIndex(e.newIndex);
      this.updatePosition(t, n);
      const r = { element: this.context.element, oldIndex: t, newIndex: n };
      this.emitChanges({ moved: r });
    },
    updateProperty(e, t) {
      e.hasOwnProperty(t) && (e[t] += this.headerOffset);
    },
    onDragMove(e, t) {
      const n = this.move;
      if (!n || !this.realList)
        return !0;
      const r = this.getRelatedContextFromMoveEvent(e), i = this.context, o = this.computeFutureIndex(r, e);
      Object.assign(i, { futureIndex: o });
      const a = Object.assign({}, e, {
        relatedContext: r,
        draggedContext: i
      });
      return n(a, t);
    },
    onDragEnd() {
      this.computeIndexes(), Lo = null;
    },
    getTrargetedComponent(e) {
      return e.__draggable_component__;
    },
    getRelatedContextFromMoveEvent({ to: e, related: t }) {
      const n = this.getTrargetedComponent(e);
      if (!n)
        return { component: n };
      const r = n.realList, i = { list: r, component: n };
      if (e !== t && r && n.getUnderlyingVm) {
        const o = n.getUnderlyingVm(t);
        if (o)
          return Object.assign(o, i);
      }
      return i;
    },
    computeFutureIndex(e, t) {
      const n = [...t.to.children].filter((a) => a.style.display !== "none");
      if (n.length === 0)
        return 0;
      const r = n.indexOf(t.related), i = e.component.getVmIndex(r);
      return n.indexOf(Lo) !== -1 || !t.willInsertAfter ? i : i + 1;
    }
  }
}), Yp = {
  key: 0,
  class: "kvc-table-operation"
}, Xp = { key: 1 }, Jp = { class: "kvc-table-header-label" }, Qp = {
  key: 2,
  class: "kvc-table-operation"
}, Zp = {
  key: 0,
  class: "kvc-table-operation"
}, eh = {
  class: "kvc-table-drag-handle",
  style: { cursor: "move" }
}, th = { key: 1 }, nh = ["href"], rh = ["data-code"], ih = {
  key: 2,
  class: "kvc-table-operation"
}, oh = { class: "kvc-table-operation-buttons" }, ah = ["disabled", "onClick"], sh = ["onClick"], lh = { key: 1 }, uh = { key: 0 }, ch = ["href"], fh = ["data-code"], dh = {
  key: 1,
  class: "kvc-table-operation"
}, ph = { class: "kvc-table-operation-buttons" }, hh = ["disabled", "onClick"], mh = ["onClick"], gh = /* @__PURE__ */ We({
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
    const n = fs(), r = e, i = t, o = we(() => r.readOnly || r.hideOperations), a = () => {
      const h = {};
      for (const m in n)
        typeof n[m] == "function" && typeof m == "string" && !m.startsWith("column-") && (h[m] = "");
      return h;
    };
    _r(() => {
      if (r.modelValue.length === 0 && r.minRows > 0) {
        const h = Array(r.minRows).fill(null).map(() => a());
        i("update:modelValue", h);
      }
    });
    const u = (h) => (r.rowData || []).reduce((m, d) => {
      var c;
      return m[`data-${d.key}`] = ((c = h[d.code]) == null ? void 0 : c.value) || null, m;
    }, {}), s = (h) => {
      const m = [...r.modelValue];
      if (h >= 0) {
        if (r.maxRows && m.length >= r.maxRows)
          return;
        m.splice(h + 1, 0, a()), i("update:modelValue", m), i("add", m, h);
      }
    }, l = (h) => {
      const m = [...r.modelValue];
      if (h >= 0) {
        if (m.length <= r.minRows)
          return;
        m.splice(h, 1), i("update:modelValue", m), i("delete", m);
      }
    }, f = we(() => !r.maxRows || r.modelValue.length < r.maxRows), p = we(() => r.modelValue.length > r.minRows), g = we({
      get: () => r.modelValue,
      set: (h) => {
        i("update:modelValue", h);
      }
    });
    return (h, m) => (V(), G("table", {
      class: Xe(["kvc-table", { "kvc-table-readonly": h.readOnly }])
    }, [
      Z("thead", null, [
        Z("tr", null, [
          h.draggable && !o.value ? (V(), G("th", Yp)) : Oe("", !0),
          h.recordUrl ? (V(), G("th", Xp)) : Oe("", !0),
          (V(!0), G(wt, null, Ot(h.columns, (d, c) => (V(), G("th", {
            key: c,
            style: ct(d != null && d.width ? { width: d == null ? void 0 : d.width } : void 0)
          }, [
            Dt(h.$slots, `column-${(d == null ? void 0 : d.code) || d}`, {}, () => [
              Z("span", Jp, Ye((d == null ? void 0 : d.label) ?? d), 1)
            ])
          ], 4))), 128)),
          o.value ? Oe("", !0) : (V(), G("th", Qp))
        ])
      ]),
      h.draggable ? (V(), jt(Pe(zp), {
        key: 0,
        modelValue: g.value,
        "onUpdate:modelValue": m[0] || (m[0] = (d) => g.value = d),
        tag: "tbody",
        handle: ".kvc-table-drag-handle",
        disabled: h.readOnly,
        animation: h.animation
      }, {
        default: Ji(() => [
          (V(!0), G(wt, null, Ot(g.value, (d, c) => (V(), G("tr", zs({
            key: "row-" + c,
            ref_for: !0
          }, u(d)), [
            h.draggable && !o.value ? (V(), G("td", Zp, [
              Z("div", eh, [
                Ue(Pe(it), {
                  icon: "mdi:drag",
                  width: "14"
                })
              ])
            ])) : Oe("", !0),
            h.recordUrl ? (V(), G("td", th, [
              d.$id ? (V(), G("a", {
                key: 0,
                href: h.recordUrl + d.$id.value,
                class: "kvc-link",
                target: "_blank",
                rel: "noopener noreferrer",
                style: ct(h.readOnly ? null : { display: "inline-block", margin: "10px 0" })
              }, [
                Ue(Pe(it), {
                  icon: "tdesign:file-filled",
                  width: "16"
                })
              ], 12, nh)) : Oe("", !0)
            ])) : Oe("", !0),
            (V(!0), G(wt, null, Ot(h.columns, (y, b) => (V(), G("td", {
              key: "col-" + b,
              "data-code": (y == null ? void 0 : y.code) || y,
              style: ct(y != null && y.width ? { width: y == null ? void 0 : y.width } : void 0)
            }, [
              Dt(h.$slots, (y == null ? void 0 : y.code) || y, {
                index: c,
                row: d,
                width: y == null ? void 0 : y.width,
                column: (y == null ? void 0 : y.code) || y,
                value: d[(y == null ? void 0 : y.code) || y]
              })
            ], 12, rh))), 128)),
            o.value ? Oe("", !0) : (V(), G("td", ih, [
              Z("div", oh, [
                Z("button", {
                  type: "button",
                  class: "kvc-table-btn-plus",
                  disabled: !f.value,
                  onClick: (y) => s(c)
                }, [
                  Ue(Pe(it), {
                    icon: "mdi:plus",
                    width: "14"
                  })
                ], 8, ah),
                p.value ? (V(), G("button", {
                  key: 0,
                  type: "button",
                  class: "kvc-table-btn-minus",
                  onClick: (y) => l(c)
                }, [
                  Ue(Pe(it), {
                    icon: "mdi:minus",
                    width: "14"
                  })
                ], 8, sh)) : Oe("", !0)
              ])
            ]))
          ], 16))), 128))
        ]),
        _: 3
      }, 8, ["modelValue", "disabled", "animation"])) : (V(), G("tbody", lh, [
        (V(!0), G(wt, null, Ot(h.modelValue, (d, c) => (V(), G("tr", zs({
          key: "row-" + c,
          ref_for: !0
        }, u(d)), [
          h.recordUrl ? (V(), G("td", uh, [
            d.$id ? (V(), G("a", {
              key: 0,
              href: h.recordUrl + d.$id.value,
              class: "kvc-link",
              target: "_blank",
              rel: "noopener noreferrer",
              style: ct(h.readOnly ? null : { display: "inline-block", margin: "10px 0" })
            }, [
              Ue(Pe(it), {
                icon: "tdesign:file-filled",
                width: "16"
              })
            ], 12, ch)) : Oe("", !0)
          ])) : Oe("", !0),
          (V(!0), G(wt, null, Ot(h.columns, (y, b) => (V(), G("td", {
            key: "col-" + b,
            "data-code": (y == null ? void 0 : y.code) || y,
            style: ct(y != null && y.width ? { width: y == null ? void 0 : y.width } : void 0)
          }, [
            Dt(h.$slots, (y == null ? void 0 : y.code) || y, {
              index: c,
              row: d,
              width: y == null ? void 0 : y.width,
              column: (y == null ? void 0 : y.code) || y,
              value: d[(y == null ? void 0 : y.code) || y]
            })
          ], 12, fh))), 128)),
          o.value ? Oe("", !0) : (V(), G("td", dh, [
            Z("div", ph, [
              Z("button", {
                type: "button",
                class: "kvc-table-btn-plus",
                disabled: !f.value,
                onClick: (y) => s(c)
              }, [
                Ue(Pe(it), {
                  icon: "mdi:plus",
                  width: "14"
                })
              ], 8, hh),
              p.value ? (V(), G("button", {
                key: 0,
                type: "button",
                class: "kvc-table-btn-minus",
                onClick: (y) => l(c)
              }, [
                Ue(Pe(it), {
                  icon: "mdi:minus",
                  width: "14"
                })
              ], 8, mh)) : Oe("", !0)
            ])
          ]))
        ], 16))), 128))
      ]))
    ], 2));
  }
});
function Cc(e) {
  return Nf() ? (Mf(e), !0) : !1;
}
const ho = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const vh = Object.prototype.toString, yh = (e) => vh.call(e) === "[object Object]", Vo = () => {
}, bh = /* @__PURE__ */ wh();
function wh() {
  var e, t;
  return ho && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function _h(e) {
  return jf();
}
function Uo(e) {
  return Array.isArray(e) ? e : [e];
}
function Sh(e, t = !0, n) {
  _h() ? _r(e, n) : t ? e() : tc(e);
}
function xh(e, t, n) {
  return ti(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Rc = ho ? window : void 0, Eh = ho ? window.document : void 0;
function pr(e) {
  var t;
  const n = cn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function un(...e) {
  const t = [], n = () => {
    t.forEach((u) => u()), t.length = 0;
  }, r = (u, s, l, f) => (u.addEventListener(s, l, f), () => u.removeEventListener(s, l, f)), i = we(() => {
    const u = Uo(cn(e[0])).filter((s) => s != null);
    return u.every((s) => typeof s != "string") ? u : void 0;
  }), o = xh(
    () => {
      var u, s;
      return [
        (s = (u = i.value) == null ? void 0 : u.map((l) => pr(l))) != null ? s : [Rc].filter((l) => l != null),
        Uo(cn(i.value ? e[1] : e[0])),
        Uo(Pe(i.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        cn(i.value ? e[3] : e[2])
      ];
    },
    ([u, s, l, f]) => {
      if (n(), !(u != null && u.length) || !(s != null && s.length) || !(l != null && l.length))
        return;
      const p = yh(f) ? { ...f } : f;
      t.push(
        ...u.flatMap(
          (g) => s.flatMap(
            (h) => l.map((m) => r(g, h, m, p))
          )
        )
      );
    },
    { flush: "post" }
  ), a = () => {
    o(), n();
  };
  return Cc(n), a;
}
let bl = !1;
function br(e, t, n = {}) {
  const { window: r = Rc, ignore: i = [], capture: o = !0, detectIframe: a = !1 } = n;
  if (!r)
    return Vo;
  if (bh && !bl) {
    bl = !0;
    const d = { passive: !0 };
    Array.from(r.document.body.children).forEach((c) => un(c, "click", Vo, d)), un(r.document.documentElement, "click", Vo, d);
  }
  let u = !0;
  const s = (d) => cn(i).some((c) => {
    if (typeof c == "string")
      return Array.from(r.document.querySelectorAll(c)).some((y) => y === d.target || d.composedPath().includes(y));
    {
      const y = pr(c);
      return y && (d.target === y || d.composedPath().includes(y));
    }
  });
  function l(d) {
    const c = cn(d);
    return c && c.$.subTree.shapeFlag === 16;
  }
  function f(d, c) {
    const y = cn(d), b = y.$.subTree && y.$.subTree.children;
    return b == null || !Array.isArray(b) ? !1 : b.some((_) => _.el === c.target || c.composedPath().includes(_.el));
  }
  const p = (d) => {
    const c = pr(e);
    if (d.target != null && !(!(c instanceof Element) && l(e) && f(e, d)) && !(!c || c === d.target || d.composedPath().includes(c))) {
      if (d.detail === 0 && (u = !s(d)), !u) {
        u = !0;
        return;
      }
      t(d);
    }
  };
  let g = !1;
  const h = [
    un(r, "click", (d) => {
      g || (g = !0, setTimeout(() => {
        g = !1;
      }, 0), p(d));
    }, { passive: !0, capture: o }),
    un(r, "pointerdown", (d) => {
      const c = pr(e);
      u = !s(d) && !!(c && !d.composedPath().includes(c));
    }, { passive: !0 }),
    a && un(r, "blur", (d) => {
      setTimeout(() => {
        var c;
        const y = pr(e);
        ((c = r.document.activeElement) == null ? void 0 : c.tagName) === "IFRAME" && !(y != null && y.contains(r.document.activeElement)) && t(d);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean);
  return () => h.forEach((d) => d());
}
function Oh(e, t = {}) {
  var n, r;
  const i = Ce(!1), o = Ff(null);
  let a = 0, u = !0;
  if (ho) {
    const s = typeof t == "function" ? { onDrop: t } : t, l = (n = s.multiple) != null ? n : !0, f = (r = s.preventDefaultForUnhandled) != null ? r : !1, p = (c) => {
      var y, b;
      const _ = Array.from((b = (y = c.dataTransfer) == null ? void 0 : y.files) != null ? b : []);
      return _.length === 0 ? null : l ? _ : [_[0]];
    }, g = (c) => {
      const y = Pe(s.dataTypes);
      return typeof y == "function" ? y(c) : y != null && y.length ? c.length === 0 ? !1 : c.every(
        (b) => y.some((_) => b.includes(_))
      ) : !0;
    }, h = (c) => {
      const y = Array.from(c ?? []).map((S) => S.type), b = g(y), _ = l || c.length <= 1;
      return b && _;
    }, m = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !("chrome" in window), d = (c, y) => {
      var b, _, S, C, O, D;
      const I = (b = c.dataTransfer) == null ? void 0 : b.items;
      if (u = (_ = I && h(I)) != null ? _ : !1, f && c.preventDefault(), !m() && !u) {
        c.dataTransfer && (c.dataTransfer.dropEffect = "none");
        return;
      }
      c.preventDefault(), c.dataTransfer && (c.dataTransfer.dropEffect = "copy");
      const M = p(c);
      switch (y) {
        case "enter":
          a += 1, i.value = !0, (S = s.onEnter) == null || S.call(s, null, c);
          break;
        case "over":
          (C = s.onOver) == null || C.call(s, null, c);
          break;
        case "leave":
          a -= 1, a === 0 && (i.value = !1), (O = s.onLeave) == null || O.call(s, null, c);
          break;
        case "drop":
          a = 0, i.value = !1, u && (o.value = M, (D = s.onDrop) == null || D.call(s, M, c));
          break;
      }
    };
    un(e, "dragenter", (c) => d(c, "enter")), un(e, "dragover", (c) => d(c, "over")), un(e, "dragleave", (c) => d(c, "leave")), un(e, "drop", (c) => d(c, "drop"));
  }
  return {
    files: o,
    isOverDropZone: i
  };
}
const Ah = ["onClick", "onMouseover"], Dh = { class: "kvc-select-list-item-icon-space" }, Ch = { class: "kvc-select-list-item-text" }, Zr = /* @__PURE__ */ We({
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
    const n = e, r = t, i = Ce(null), o = /* @__PURE__ */ new Map(), a = Ce(null), u = we(
      () => typeof n.height == "string" ? n.height : `${n.height}px`
    ), s = we(
      () => typeof n.maxHeight == "string" ? n.maxHeight : `${n.maxHeight}px`
    ), l = (h) => {
      const m = o.get(h);
      if (i.value && m) {
        const d = i.value.offsetHeight, c = m.offsetTop, y = m.offsetHeight, b = c - d / 2 + y / 2;
        i.value.scrollTo({ top: b }), a.value = h;
      }
    };
    _r(() => l(n.modelValue));
    const f = (h) => {
      console.log("onSelectItem", h), r("update:modelValue", h), r("change", h);
    }, p = (h) => typeof h == "object" && h !== null ? h[n.valueKey ?? "value"] ?? h : h, g = (h) => typeof h == "object" && h !== null ? h[n.labelKey ?? "label"] ?? h : h;
    return (h, m) => (V(), G("ul", {
      ref_key: "listWrapRef",
      ref: i,
      class: "kvc-select-list",
      style: ct({ height: u.value, maxHeight: s.value })
    }, [
      (V(!0), G(wt, null, Ot(h.items, (d, c) => (V(), G("li", {
        key: c,
        ref_for: !0,
        ref: (y) => Pe(o).set(p(d), y),
        class: Xe(["kvc-select-list-item", {
          "kvc-select-list-item-selected": p(d) === h.modelValue
        }]),
        onClick: (y) => f(p(d)),
        onMouseover: (y) => a.value = p(d)
      }, [
        Z("span", Dh, [
          p(d) === h.modelValue ? (V(), jt(Pe(it), {
            key: 0,
            icon: "mdi:check-bold",
            width: "15"
          })) : Oe("", !0)
        ]),
        Z("span", Ch, Ye(g(d)), 1)
      ], 42, Ah))), 128))
    ], 4));
  }
}), Rh = ["innerHTML"], Th = ["disabled"], Ph = { class: "kvc-dropdown-label" }, kh = /* @__PURE__ */ We({
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
    const n = e, r = t, i = we({
      get: () => n.modelValue ?? "",
      set: (h) => {
        r("update:modelValue", h), r("change", h);
      }
    }), o = Ce(!1), a = Ce(null), u = Ce(null), s = Ce(null);
    br(s, () => {
      o.value = !1;
    });
    const l = (h) => typeof h == "number" || !isNaN(Number(h)), f = we(() => n.width ? l(n.width) ? `${n.width}px` : n.width : "fit-content"), p = we(() => {
      const h = n.itemValue ?? "value", m = n.itemLabel ?? "label", d = g.value.find((c) => typeof c == "object" && c[h] === n.modelValue);
      return d ? d[m] : "";
    }), g = we(() => {
      const h = n.items.map((m) => typeof m == "object" && m !== null ? JSON.parse(JSON.stringify(m)) : {
        [n.itemLabel]: m,
        [n.itemValue]: m
      });
      return console.log(h), [
        {
          [n.itemLabel]: "---",
          [n.itemValue]: ""
        },
        ...h
      ];
    });
    return (h, m) => h.readOnly ? (V(), G("p", {
      key: 0,
      class: Xe(["kvc-field-value", { "kvc-field-value-nonstyled": h.nonstyled }]),
      style: ct({ width: f.value }),
      innerHTML: h.modelValue
    }, null, 14, Rh)) : (V(), G("div", {
      key: 1,
      class: "kvc-dropdown",
      ref_key: "dropdownRef",
      ref: s
    }, [
      Z("button", {
        ref_key: "buttonRef",
        ref: a,
        type: "button",
        class: "kvc-dropdown-button",
        disabled: h.disabled,
        style: ct({ width: f.value }),
        onClick: m[0] || (m[0] = (d) => o.value = !o.value)
      }, [
        Z("span", Ph, Ye(p.value), 1),
        Ue(Pe(it), {
          icon: "mdi-light:chevron-down",
          width: "24",
          style: { "min-width": "24px" }
        })
      ], 12, Th),
      h.readOnly || h.disabled ? Oe("", !0) : tn((V(), jt(Zr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": m[1] || (m[1] = (d) => i.value = d),
        ref_key: "selectListRef",
        ref: u,
        items: g.value,
        labelKey: h.itemLabel,
        valueKey: h.itemValue,
        onChange: m[2] || (m[2] = (d) => o.value = !1)
      }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
        [Sr, o.value]
      ])
    ], 512));
  }
}), Ih = ["innerHTML"], $h = {
  key: 1,
  class: "kvc-dropdown"
}, Nh = ["disabled"], Mh = { class: "kvc-dropdown-label" }, jh = { class: "kvc-autocomplete-input-wrapper" }, Fh = ["value", "disabled", "placeholder"], Bh = { class: "kvc-autocomplete-icons" }, qh = {
  key: 1,
  class: "kvc-autocomplete-no-results"
}, Lh = /* @__PURE__ */ We({
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
    const n = e, r = t, i = we({
      get: () => n.modelValue ?? "",
      set: (_) => {
        r("update:modelValue", _), r("change", _);
      }
    }), o = Ce(""), a = Ce(!1), u = Ce(null), s = Ce(null), l = Ce(null);
    br(l, () => {
      a.value = !1;
    });
    const f = (_) => typeof _ == "number" || !isNaN(Number(_)), p = we(() => n.width ? f(n.width) ? `${n.width}px` : n.width : "fit-content"), g = we(() => n.items.map((S) => typeof S == "object" && S !== null ? JSON.parse(JSON.stringify(S)) : {
      [n.itemLabel]: S,
      [n.itemValue]: S
    })), h = we(() => {
      const _ = n.itemValue ?? "value", S = n.itemLabel ?? "label", C = g.value.find((O) => typeof O == "object" && O[_] === n.modelValue);
      return C ? C[S] : n.modelValue || "";
    }), m = we(() => {
      if (!o.value)
        return g.value;
      const _ = n.itemLabel ?? "label", S = o.value.toString().toLowerCase();
      return g.value.filter((C) => {
        var D;
        return (((D = C[_]) == null ? void 0 : D.toString().toLowerCase()) || "").includes(S);
      });
    }), d = () => {
      a.value = !0, o.value = "";
    }, c = (_) => {
      const S = _.target;
      o.value = S.value, a.value = !0, r("input", S.value);
    }, y = (_) => {
      i.value = _, o.value = "", a.value = !1;
    }, b = () => {
      i.value = "", o.value = "", a.value = !1;
    };
    return ti(() => n.modelValue, () => {
      o.value = "";
    }), (_, S) => _.readOnly ? (V(), G("p", {
      key: 0,
      class: Xe(["kvc-field-value", { "kvc-field-value-nonstyled": _.nonstyled }]),
      style: ct({ width: p.value }),
      innerHTML: _.modelValue
    }, null, 14, Ih)) : _.disabled ? (V(), G("div", $h, [
      Z("button", {
        ref: "buttonRef",
        type: "button",
        class: "kvc-dropdown-button",
        disabled: _.disabled,
        style: ct({ width: p.value })
      }, [
        Z("span", Mh, Ye(h.value), 1),
        Ue(Pe(it), {
          icon: "mdi-light:chevron-down",
          width: "24",
          style: { "min-width": "24px" }
        })
      ], 12, Nh)
    ])) : (V(), G("div", {
      key: 2,
      class: "kvc-autocomplete",
      ref_key: "autocompleteRef",
      ref: l
    }, [
      Z("div", jh, [
        Z("input", {
          ref_key: "inputRef",
          ref: u,
          type: "text",
          class: "kvc-autocomplete-input",
          value: o.value || h.value,
          disabled: _.disabled,
          placeholder: _.placeholder,
          style: ct({ width: p.value }),
          onFocus: d,
          onInput: c
        }, null, 44, Fh),
        Z("div", Bh, [
          _.clearable && i.value && !_.disabled ? (V(), G("button", {
            key: 0,
            type: "button",
            class: "kvc-autocomplete-clear",
            onClick: b
          }, [
            Ue(Pe(it), {
              icon: "mdi:close",
              width: "18"
            })
          ])) : Oe("", !0),
          Ue(Pe(it), {
            icon: "mdi-light:chevron-down",
            width: "24",
            class: Xe(["kvc-autocomplete-arrow", { "is-active": a.value }])
          }, null, 8, ["class"])
        ])
      ]),
      _.readOnly || _.disabled ? Oe("", !0) : tn((V(), jt(Zr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": S[0] || (S[0] = (C) => i.value = C),
        ref_key: "selectListRef",
        ref: s,
        items: m.value,
        labelKey: _.itemLabel,
        valueKey: _.itemValue,
        onChange: y
      }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
        [Sr, a.value && m.value.length > 0]
      ]),
      a.value && m.value.length === 0 && o.value ? (V(), G("div", qh, " 該当する項目がありません ")) : Oe("", !0)
    ], 512));
  }
}), Vh = /* @__PURE__ */ We({
  __name: "button",
  props: {
    small: { type: Boolean, default: !1 },
    color: {}
  },
  setup(e) {
    return (t, n) => (V(), G("button", {
      type: "button",
      class: Xe(["kvc-button", {
        "kvc-button-sm": t.small,
        "kvc-button-normal": t.color === "normal",
        "kvc-button-success": t.color === "success",
        "kvc-button-save": t.color === "save",
        "kvc-button-error": t.color === "error"
      }])
    }, [
      Dt(t.$slots, "default")
    ], 2));
  }
}), Uh = { class: "kvc-field-label" }, Wh = {
  key: 0,
  class: "kvc-field-required"
}, Hh = { class: "kvc-field-input" }, Gh = {
  key: 0,
  class: "kvc-field-prefix"
}, Kh = {
  key: 1,
  class: "kvc-field-suffix"
}, zh = /* @__PURE__ */ We({
  __name: "field",
  props: {
    required: { type: Boolean },
    width: {},
    errorMessage: {},
    successMessage: {}
  },
  setup(e) {
    const t = e, n = fs(), r = (o) => typeof o == "number" || !isNaN(Number(o)), i = we(() => t.width ? r(t.width) ? `${t.width}px` : t.width : "fit-content");
    return (o, a) => {
      var u, s, l, f;
      return V(), G("div", {
        style: ct({ width: i.value }),
        class: "kvc-field"
      }, [
        Z("label", Uh, [
          Dt(o.$slots, "label"),
          o.required ? (V(), G("span", Wh)) : Oe("", !0)
        ]),
        Z("div", Hh, [
          (s = (u = Pe(n)).prefix) != null && s.call(u) ? (V(), G("div", Gh, [
            Dt(o.$slots, "prefix")
          ])) : Oe("", !0),
          Dt(o.$slots, "default"),
          (f = (l = Pe(n)).suffix) != null && f.call(l) ? (V(), G("div", Kh, [
            Dt(o.$slots, "suffix")
          ])) : Oe("", !0)
        ]),
        o.errorMessage || o.successMessage ? (V(), G("div", {
          key: 0,
          class: Xe({
            "kvc-field-message-error": o.errorMessage,
            "kvc-field-message-success": o.successMessage
          })
        }, Ye(o.errorMessage || o.successMessage), 3)) : Oe("", !0)
      ], 4);
    };
  }
}), Yh = { class: "kvc-group-header" }, Xh = { class: "kvc-group-label" }, Jh = { class: "kvc-group-content" }, Qh = /* @__PURE__ */ We({
  __name: "group",
  props: {
    label: { default: "グループ" },
    open: { type: Boolean, default: !0 },
    collapsible: { type: Boolean, default: !0 },
    width: { default: 400 }
  },
  setup(e) {
    const t = e, n = Ce(t.open), r = (u) => typeof u == "number" || !isNaN(Number(u)), i = we(() => t.width ? r(t.width) ? `${t.width}px` : t.width : "400px"), o = () => {
      t.collapsible && (n.value = !n.value);
    }, a = we(() => n.value ? "0deg" : "-90deg");
    return (u, s) => (V(), G("div", {
      class: Xe(["kvc-group", { "kvc-group-closed": !n.value }]),
      style: ct({ width: i.value })
    }, [
      Z("div", Yh, [
        Z("button", {
          class: Xe(["kvc-group-button", { "kvc-group-button-clickable": u.collapsible }]),
          onClick: o
        }, [
          u.collapsible ? (V(), jt(Pe(it), {
            key: 0,
            icon: "mdi-light:chevron-down",
            width: "28",
            class: "kvc-group-icon",
            style: ct({ transform: `rotate(${a.value})` })
          }, null, 8, ["style"])) : Oe("", !0),
          Z("span", Xh, Ye(u.label), 1)
        ], 2)
      ]),
      tn(Z("div", Jh, [
        Dt(u.$slots, "default")
      ], 512), [
        [Sr, n.value]
      ])
    ], 6));
  }
}), Zh = ["innerHTML"], em = ["disabled", "value"], tm = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, nm = ["fill"], rm = /* @__PURE__ */ We({
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
    const n = e, r = t, i = we({
      get: () => n.modelValue ?? "",
      set: (f) => {
        r("update:modelValue", f), r("change", f);
      }
    }), o = n.itemValue ?? "value", a = n.itemLabel ?? "label", u = (f) => f != null && f.disabled ? "#d8d8d8" : n.modelValue == ((f == null ? void 0 : f[o]) ?? f) ? "#3498db" : "#d8d8d8", s = (f) => typeof f == "object" && f !== null ? f[o] ?? f : f, l = (f) => typeof f == "object" && f !== null ? f[a] ?? f : f;
    return (f, p) => f.readOnly ? (V(), G("p", {
      key: 0,
      class: Xe(["kvc-field-value", { "kvc-field-value-nonstyled": f.nonstyled }]),
      innerHTML: f.modelValue
    }, null, 10, Zh)) : (V(), G("div", {
      key: 1,
      class: Xe(["kvc-radio-group", { "kvc-radio-group-column": f.column }])
    }, [
      (V(!0), G(wt, null, Ot(f.items, (g, h) => (V(), G("label", {
        key: h,
        class: "kvc-radio-item"
      }, [
        tn(Z("input", {
          type: "radio",
          "onUpdate:modelValue": p[0] || (p[0] = (m) => i.value = m),
          disabled: typeof g == "object" ? g.disabled : !1,
          value: s(g)
        }, null, 8, em), [
          [Bf, i.value]
        ]),
        (V(), G("svg", tm, [
          p[1] || (p[1] = Z("circle", {
            cx: "10.5",
            cy: "10.5",
            r: "10",
            fill: "white",
            stroke: "#e3e7e8",
            "stroke-width": "1"
          }, null, -1)),
          i.value == s(g) ? (V(), G("circle", {
            key: 0,
            cx: "10.5",
            cy: "10.5",
            r: "6.5",
            fill: u(g)
          }, null, 8, nm)) : Oe("", !0)
        ])),
        Z("span", null, Ye(l(g)), 1)
      ]))), 128))
    ], 2));
  }
}), im = ["innerHTML"], om = ["disabled", "value"], am = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, sm = ["stroke"], lm = ["fill"], um = /* @__PURE__ */ We({
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
    const n = e, r = t, i = we({
      get: () => n.modelValue ?? "",
      set: (s) => {
        r("update:modelValue", s), r("change", s);
      }
    }), o = (s) => {
      const l = n.itemValue ?? "value", f = typeof s == "object" ? s[l] : s;
      return s.disabled ? "#e3e7e8" : n.modelValue.includes(f) ? "#3498db" : "#e3e7e8";
    }, a = (s) => {
      const l = n.itemLabel ?? "label";
      return typeof s == "object" ? s[l] : s;
    }, u = (s) => {
      const l = n.itemValue ?? "value";
      return typeof s == "object" ? s[l] : s;
    };
    return (s, l) => s.readOnly ? (V(), G("p", {
      key: 0,
      class: Xe(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }]),
      innerHTML: s.modelValue.join(", ")
    }, null, 10, im)) : (V(), G("div", {
      key: 1,
      class: Xe(["kvc-checkbox-group", { "kvc-checkbox-group-column": s.column }])
    }, [
      (V(!0), G(wt, null, Ot(s.items, (f, p) => (V(), G("label", {
        key: p,
        class: "kvc-checkbox-item"
      }, [
        tn(Z("input", {
          type: "checkbox",
          "onUpdate:modelValue": l[0] || (l[0] = (g) => i.value = g),
          disabled: typeof f == "object" ? f.disabled : !1,
          value: u(f)
        }, null, 8, om), [
          [qf, i.value]
        ]),
        (V(), G("svg", am, [
          Z("rect", {
            x: "1",
            y: "1",
            width: "19",
            height: "19",
            rx: "1",
            fill: "white",
            "stroke-width": "2",
            stroke: o(f)
          }, null, 8, sm),
          i.value.includes(u(f)) ? (V(), G("path", {
            key: 0,
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z",
            fill: o(f)
          }, null, 8, lm)) : Oe("", !0)
        ])),
        Z("span", null, Ye(a(f)), 1)
      ]))), 128))
    ], 2));
  }
}), cm = ["placeholder", "type", "min", "max"], bs = /* @__PURE__ */ We({
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
    const n = e, r = t, i = we({
      get: () => n.modelValue ?? "",
      set: (u) => r("update:modelValue", u)
    }), o = (u) => typeof u == "number" || !isNaN(Number(u)), a = we(() => n.width ? o(n.width) ? `${n.width}px` : n.width : "100%");
    return (u, s) => u.readOnly ? (V(), G("p", {
      key: 0,
      class: Xe(["kvc-field-value", { "kvc-field-value-nonstyled": u.nonstyled }])
    }, Ye((i.value || " ").replace(/\r|\n/g, "") || " "), 3)) : tn((V(), G("input", {
      key: 1,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => i.value = l),
      class: "kvc-field-text",
      style: ct({ width: a.value }),
      placeholder: u.placeholder,
      type: u.type,
      min: u.min,
      max: u.max
    }, null, 12, cm)), [
      [Lf, i.value]
    ]);
  }
});
var ei = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fm(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Bi = { exports: {} }, dm = Bi.exports, wl;
function pm() {
  return wl || (wl = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(dm, function() {
      var n = 1e3, r = 6e4, i = 36e5, o = "millisecond", a = "second", u = "minute", s = "hour", l = "day", f = "week", p = "month", g = "quarter", h = "year", m = "date", d = "Invalid Date", c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(W) {
        var q = ["th", "st", "nd", "rd"], L = W % 100;
        return "[" + W + (q[(L - 20) % 10] || q[L] || q[0]) + "]";
      } }, _ = function(W, q, L) {
        var X = String(W);
        return !X || X.length >= q ? W : "" + Array(q + 1 - X.length).join(L) + W;
      }, S = { s: _, z: function(W) {
        var q = -W.utcOffset(), L = Math.abs(q), X = Math.floor(L / 60), j = L % 60;
        return (q <= 0 ? "+" : "-") + _(X, 2, "0") + ":" + _(j, 2, "0");
      }, m: function W(q, L) {
        if (q.date() < L.date()) return -W(L, q);
        var X = 12 * (L.year() - q.year()) + (L.month() - q.month()), j = q.clone().add(X, p), ee = L - j < 0, re = q.clone().add(X + (ee ? -1 : 1), p);
        return +(-(X + (L - j) / (ee ? j - re : re - j)) || 0);
      }, a: function(W) {
        return W < 0 ? Math.ceil(W) || 0 : Math.floor(W);
      }, p: function(W) {
        return { M: p, y: h, w: f, d: l, D: m, h: s, m: u, s: a, ms: o, Q: g }[W] || String(W || "").toLowerCase().replace(/s$/, "");
      }, u: function(W) {
        return W === void 0;
      } }, C = "en", O = {};
      O[C] = b;
      var D = "$isDayjsObject", I = function(W) {
        return W instanceof H || !(!W || !W[D]);
      }, M = function W(q, L, X) {
        var j;
        if (!q) return C;
        if (typeof q == "string") {
          var ee = q.toLowerCase();
          O[ee] && (j = ee), L && (O[ee] = L, j = ee);
          var re = q.split("-");
          if (!j && re.length > 1) return W(re[0]);
        } else {
          var de = q.name;
          O[de] = q, j = de;
        }
        return !X && j && (C = j), j || !X && C;
      }, F = function(W, q) {
        if (I(W)) return W.clone();
        var L = typeof q == "object" ? q : {};
        return L.date = W, L.args = arguments, new H(L);
      }, B = S;
      B.l = M, B.i = I, B.w = function(W, q) {
        return F(W, { locale: q.$L, utc: q.$u, x: q.$x, $offset: q.$offset });
      };
      var H = function() {
        function W(L) {
          this.$L = M(L.locale, null, !0), this.parse(L), this.$x = this.$x || L.x || {}, this[D] = !0;
        }
        var q = W.prototype;
        return q.parse = function(L) {
          this.$d = function(X) {
            var j = X.date, ee = X.utc;
            if (j === null) return /* @__PURE__ */ new Date(NaN);
            if (B.u(j)) return /* @__PURE__ */ new Date();
            if (j instanceof Date) return new Date(j);
            if (typeof j == "string" && !/Z$/i.test(j)) {
              var re = j.match(c);
              if (re) {
                var de = re[2] - 1 || 0, ye = (re[7] || "0").substring(0, 3);
                return ee ? new Date(Date.UTC(re[1], de, re[3] || 1, re[4] || 0, re[5] || 0, re[6] || 0, ye)) : new Date(re[1], de, re[3] || 1, re[4] || 0, re[5] || 0, re[6] || 0, ye);
              }
            }
            return new Date(j);
          }(L), this.init();
        }, q.init = function() {
          var L = this.$d;
          this.$y = L.getFullYear(), this.$M = L.getMonth(), this.$D = L.getDate(), this.$W = L.getDay(), this.$H = L.getHours(), this.$m = L.getMinutes(), this.$s = L.getSeconds(), this.$ms = L.getMilliseconds();
        }, q.$utils = function() {
          return B;
        }, q.isValid = function() {
          return this.$d.toString() !== d;
        }, q.isSame = function(L, X) {
          var j = F(L);
          return this.startOf(X) <= j && j <= this.endOf(X);
        }, q.isAfter = function(L, X) {
          return F(L) < this.startOf(X);
        }, q.isBefore = function(L, X) {
          return this.endOf(X) < F(L);
        }, q.$g = function(L, X, j) {
          return B.u(L) ? this[X] : this.set(j, L);
        }, q.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, q.valueOf = function() {
          return this.$d.getTime();
        }, q.startOf = function(L, X) {
          var j = this, ee = !!B.u(X) || X, re = B.p(L), de = function(xe, ne) {
            var _e = B.w(j.$u ? Date.UTC(j.$y, ne, xe) : new Date(j.$y, ne, xe), j);
            return ee ? _e : _e.endOf(l);
          }, ye = function(xe, ne) {
            return B.w(j.toDate()[xe].apply(j.toDate("s"), (ee ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), j);
          }, ke = this.$W, Re = this.$M, N = this.$D, z = "set" + (this.$u ? "UTC" : "");
          switch (re) {
            case h:
              return ee ? de(1, 0) : de(31, 11);
            case p:
              return ee ? de(1, Re) : de(0, Re + 1);
            case f:
              var Se = this.$locale().weekStart || 0, Ne = (ke < Se ? ke + 7 : ke) - Se;
              return de(ee ? N - Ne : N + (6 - Ne), Re);
            case l:
            case m:
              return ye(z + "Hours", 0);
            case s:
              return ye(z + "Minutes", 1);
            case u:
              return ye(z + "Seconds", 2);
            case a:
              return ye(z + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, q.endOf = function(L) {
          return this.startOf(L, !1);
        }, q.$set = function(L, X) {
          var j, ee = B.p(L), re = "set" + (this.$u ? "UTC" : ""), de = (j = {}, j[l] = re + "Date", j[m] = re + "Date", j[p] = re + "Month", j[h] = re + "FullYear", j[s] = re + "Hours", j[u] = re + "Minutes", j[a] = re + "Seconds", j[o] = re + "Milliseconds", j)[ee], ye = ee === l ? this.$D + (X - this.$W) : X;
          if (ee === p || ee === h) {
            var ke = this.clone().set(m, 1);
            ke.$d[de](ye), ke.init(), this.$d = ke.set(m, Math.min(this.$D, ke.daysInMonth())).$d;
          } else de && this.$d[de](ye);
          return this.init(), this;
        }, q.set = function(L, X) {
          return this.clone().$set(L, X);
        }, q.get = function(L) {
          return this[B.p(L)]();
        }, q.add = function(L, X) {
          var j, ee = this;
          L = Number(L);
          var re = B.p(X), de = function(Re) {
            var N = F(ee);
            return B.w(N.date(N.date() + Math.round(Re * L)), ee);
          };
          if (re === p) return this.set(p, this.$M + L);
          if (re === h) return this.set(h, this.$y + L);
          if (re === l) return de(1);
          if (re === f) return de(7);
          var ye = (j = {}, j[u] = r, j[s] = i, j[a] = n, j)[re] || 1, ke = this.$d.getTime() + L * ye;
          return B.w(ke, this);
        }, q.subtract = function(L, X) {
          return this.add(-1 * L, X);
        }, q.format = function(L) {
          var X = this, j = this.$locale();
          if (!this.isValid()) return j.invalidDate || d;
          var ee = L || "YYYY-MM-DDTHH:mm:ssZ", re = B.z(this), de = this.$H, ye = this.$m, ke = this.$M, Re = j.weekdays, N = j.months, z = j.meridiem, Se = function(ne, _e, be, Fe) {
            return ne && (ne[_e] || ne(X, ee)) || be[_e].slice(0, Fe);
          }, Ne = function(ne) {
            return B.s(de % 12 || 12, ne, "0");
          }, xe = z || function(ne, _e, be) {
            var Fe = ne < 12 ? "AM" : "PM";
            return be ? Fe.toLowerCase() : Fe;
          };
          return ee.replace(y, function(ne, _e) {
            return _e || function(be) {
              switch (be) {
                case "YY":
                  return String(X.$y).slice(-2);
                case "YYYY":
                  return B.s(X.$y, 4, "0");
                case "M":
                  return ke + 1;
                case "MM":
                  return B.s(ke + 1, 2, "0");
                case "MMM":
                  return Se(j.monthsShort, ke, N, 3);
                case "MMMM":
                  return Se(N, ke);
                case "D":
                  return X.$D;
                case "DD":
                  return B.s(X.$D, 2, "0");
                case "d":
                  return String(X.$W);
                case "dd":
                  return Se(j.weekdaysMin, X.$W, Re, 2);
                case "ddd":
                  return Se(j.weekdaysShort, X.$W, Re, 3);
                case "dddd":
                  return Re[X.$W];
                case "H":
                  return String(de);
                case "HH":
                  return B.s(de, 2, "0");
                case "h":
                  return Ne(1);
                case "hh":
                  return Ne(2);
                case "a":
                  return xe(de, ye, !0);
                case "A":
                  return xe(de, ye, !1);
                case "m":
                  return String(ye);
                case "mm":
                  return B.s(ye, 2, "0");
                case "s":
                  return String(X.$s);
                case "ss":
                  return B.s(X.$s, 2, "0");
                case "SSS":
                  return B.s(X.$ms, 3, "0");
                case "Z":
                  return re;
              }
              return null;
            }(ne) || re.replace(":", "");
          });
        }, q.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, q.diff = function(L, X, j) {
          var ee, re = this, de = B.p(X), ye = F(L), ke = (ye.utcOffset() - this.utcOffset()) * r, Re = this - ye, N = function() {
            return B.m(re, ye);
          };
          switch (de) {
            case h:
              ee = N() / 12;
              break;
            case p:
              ee = N();
              break;
            case g:
              ee = N() / 3;
              break;
            case f:
              ee = (Re - ke) / 6048e5;
              break;
            case l:
              ee = (Re - ke) / 864e5;
              break;
            case s:
              ee = Re / i;
              break;
            case u:
              ee = Re / r;
              break;
            case a:
              ee = Re / n;
              break;
            default:
              ee = Re;
          }
          return j ? ee : B.a(ee);
        }, q.daysInMonth = function() {
          return this.endOf(p).$D;
        }, q.$locale = function() {
          return O[this.$L];
        }, q.locale = function(L, X) {
          if (!L) return this.$L;
          var j = this.clone(), ee = M(L, X, !0);
          return ee && (j.$L = ee), j;
        }, q.clone = function() {
          return B.w(this.$d, this);
        }, q.toDate = function() {
          return new Date(this.valueOf());
        }, q.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, q.toISOString = function() {
          return this.$d.toISOString();
        }, q.toString = function() {
          return this.$d.toUTCString();
        }, W;
      }(), te = H.prototype;
      return F.prototype = te, [["$ms", o], ["$s", a], ["$m", u], ["$H", s], ["$W", l], ["$M", p], ["$y", h], ["$D", m]].forEach(function(W) {
        te[W[1]] = function(q) {
          return this.$g(q, W[0], W[1]);
        };
      }), F.extend = function(W, q) {
        return W.$i || (W(q, H, F), W.$i = !0), F;
      }, F.locale = M, F.isDayjs = I, F.unix = function(W) {
        return F(1e3 * W);
      }, F.en = O[C], F.Ls = O, F.p = {}, F;
    });
  }(Bi)), Bi.exports;
}
var hm = pm();
const $e = /* @__PURE__ */ xr(hm);
var qi = { exports: {} }, mm = qi.exports, _l;
function gm() {
  return _l || (_l = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(mm, function() {
      return function(n, r) {
        r.prototype.weekday = function(i) {
          var o = this.$locale().weekStart || 0, a = this.$W, u = (a < o ? a + 7 : a) - o;
          return this.$utils().u(i) ? u : this.subtract(u, "day").add(i, "day");
        };
      };
    });
  }(qi)), qi.exports;
}
var vm = gm();
const ym = /* @__PURE__ */ xr(vm);
var Li = { exports: {} }, bm = Li.exports, Sl;
function wm() {
  return Sl || (Sl = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(bm, function() {
      return function(n, r) {
        r.prototype.isSameOrBefore = function(i, o) {
          return this.isSame(i, o) || this.isBefore(i, o);
        };
      };
    });
  }(Li)), Li.exports;
}
var _m = wm();
const Sm = /* @__PURE__ */ xr(_m), xm = { class: "kvc-datepicker-popup" }, Em = { class: "kvc-datepicker-controls" }, Om = { class: "kvc-datepicker-control-year-month" }, Am = { class: "kvc-datepicker-control-year" }, Dm = { class: "kvc-datepicker-control-selector-text" }, Cm = { class: "kvc-datepicker-control-month" }, Rm = { class: "kvc-datepicker-control-selector-text" }, Tm = { class: "kvc-datepicker-body" }, Pm = ["onClick"], km = { class: "kvc-datepicker-bottom" }, Im = /* @__PURE__ */ We({
  __name: "DatePicker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "close"],
  setup(e, { emit: t }) {
    var O;
    $e.extend(ym), $e.extend(Sm);
    const n = e, r = t, i = Ce(null), o = Ce(null), a = Ce(null), u = Ce(null), s = Ce(
      (O = n.modelValue) != null && O.length ? n.modelValue : void 0
    ), l = ["日", "月", "火", "水", "木", "金", "土"], f = Zu({
      year: !1,
      month: !1
    }), p = (D) => {
      f[D] = !1;
    };
    br(i, () => p("year")), br(o, () => p("month"));
    const g = we(
      () => Array.from({ length: 12 }, (D, I) => ({
        label: `${I + 1}月`,
        value: I + 1
      }))
    ), h = we(() => {
      const D = $e(s.value).year(), I = D - 100, M = D + 100, F = [];
      for (let B = I; B <= M; B++)
        F.push({ label: `${B}年`, value: B });
      return F;
    }), m = (D) => {
      D = Number(D), s.value = $e(s.value || void 0).year(D).format("YYYY-MM-DD"), setTimeout(() => f.year = !1, 10);
    }, d = (D) => {
      D = Number(D), s.value = $e(s.value || void 0).month(D - 1).format("YYYY-MM-DD"), setTimeout(() => f.month = !1, 10);
    }, c = we(() => $e(s.value).year()), y = we(() => $e(s.value).month() + 1), b = we(() => {
      const D = $e(s.value).startOf("month"), I = $e(s.value).endOf("month"), M = D.weekday(0), F = I.weekday(6), B = [];
      let H = M;
      for (; H.isSameOrBefore(F); ) {
        const W = [];
        for (let q = 0; q < 7; q++)
          W.push({
            date: H.date(),
            fullDate: H.format("YYYY-MM-DD"),
            isCurrentMonth: H.month() === $e(s.value).month(),
            isCurrentDate: H.isSame($e(n.modelValue || void 0), "date"),
            isHoliday: H.day() === 0 || H.day() === 6,
            isToday: H.isSame($e(), "day")
          }), H = H.add(1, "day");
        B.push(W);
      }
      let te = F.add(1, "day");
      for (; B.length < 6; ) {
        const W = [];
        for (let q = 0; q < 7; q++)
          W.push({
            date: te.date(),
            fullDate: te.format("YYYY-MM-DD"),
            isCurrentMonth: te.month() === $e(s.value).month(),
            isCurrentDate: te.isSame($e(n.modelValue || void 0), "date"),
            isHoliday: te.day() === 0 || te.day() === 6,
            isToday: te.isSame($e(), "day")
          }), te = te.add(1, "day");
        B.push(W);
      }
      return B;
    }), _ = () => {
      s.value = $e(s.value).subtract(1, "month").format("YYYY-MM-DD");
    }, S = () => {
      s.value = $e(s.value).add(1, "month").format("YYYY-MM-DD");
    }, C = (D) => {
      r("update:modelValue", D || ""), r("close", !0);
    };
    return (D, I) => (V(), G("div", xm, [
      Z("div", Em, [
        Z("button", {
          class: "kvc-datepicker-control-prev",
          onClick: _
        }, [
          Ue(Pe(it), {
            icon: "mdi-light:chevron-left",
            height: "32"
          })
        ]),
        Z("div", Om, [
          Z("div", Am, [
            Z("button", {
              type: "button",
              ref_key: "yearRef",
              ref: i,
              class: "kvc-datepicker-control-selector",
              onClick: I[0] || (I[0] = (M) => f.year = !f.year)
            }, [
              Z("span", Dm, Ye(c.value) + "年", 1),
              Ue(Pe(it), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.year ? (V(), jt(Zr, {
                key: 0,
                ref_key: "yearListRef",
                ref: a,
                class: "kvc-datepicker-controll-selector-list",
                items: h.value,
                "model-value": c.value,
                "max-height": 300,
                onChange: m
              }, null, 8, ["items", "model-value"])) : Oe("", !0)
            ], 512)
          ]),
          Z("div", Cm, [
            Z("button", {
              type: "button",
              ref_key: "monthRef",
              ref: o,
              class: "kvc-datepicker-control-selector",
              onClick: I[1] || (I[1] = (M) => f.month = !f.month)
            }, [
              Z("span", Rm, Ye(y.value) + "月", 1),
              Ue(Pe(it), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.month ? (V(), jt(Zr, {
                key: 0,
                ref_key: "monthListRef",
                ref: u,
                class: "kvc-datepicker-controll-selector-list",
                items: g.value,
                "model-value": y.value,
                onChange: d
              }, null, 8, ["items", "model-value"])) : Oe("", !0)
            ], 512)
          ])
        ]),
        Z("button", {
          class: "kvc-datepicker-control-next",
          onClick: S
        }, [
          Ue(Pe(it), {
            icon: "mdi-light:chevron-right",
            height: "32"
          })
        ])
      ]),
      Z("table", Tm, [
        Z("thead", null, [
          Z("tr", null, [
            (V(), G(wt, null, Ot(l, (M) => Z("th", {
              key: M,
              class: Xe(["kvc-datepicker-day", {
                "kvc-datepicker-day-saturday": M === "土",
                "kvc-datepicker-day-sunday": M === "日"
              }])
            }, Ye(M), 3)), 64))
          ])
        ]),
        Z("tbody", null, [
          (V(!0), G(wt, null, Ot(b.value, (M, F) => (V(), G("tr", { key: F }, [
            (V(!0), G(wt, null, Ot(M, (B) => (V(), G("td", {
              key: B.date
            }, [
              Z("button", {
                type: "button",
                class: Xe(["kvc-datepicker-date", {
                  "kvc-datepicker-date-notcurrent-month": !B.isCurrentMonth,
                  "kvc-datepicker-date-today": B.isToday,
                  "kvc-datepicker-date-current": B.isCurrentDate
                }]),
                onClick: (H) => C(B.fullDate)
              }, Ye(B.date), 11, Pm)
            ]))), 128))
          ]))), 128))
        ])
      ]),
      Z("div", km, [
        Z("button", {
          type: "button",
          class: "kvc-datepicker-bottom-today",
          onClick: I[2] || (I[2] = (M) => C(Pe($e)().format("YYYY-MM-DD")))
        }, " 今日 "),
        Z("button", {
          type: "button",
          class: "kvc-datepicker-bottom-clear",
          onClick: I[3] || (I[3] = (M) => C())
        }, " 選択を解除 ")
      ])
    ]));
  }
}), $m = { class: "kvc-date-picker" }, Tc = /* @__PURE__ */ We({
  __name: "date-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = we({
      get: () => n.modelValue ?? "",
      set: (h) => {
        r("update:modelValue", h), r("change", h);
      }
    }), o = (h) => {
      const m = h.target;
      /^\d{4}-\d{2}-\d{2}$/.test(m.value) || (r("update:modelValue", ""), r("change", ""));
    }, a = Ce(!1), u = Ce(!1), s = Ce(null), l = Ce(null), f = () => {
      a.value = !0, u.value = !0;
    }, p = () => {
      a.value = !1;
    }, g = () => {
      u.value = !1, a.value = !1;
    };
    return br(l, () => {
      a.value || (u.value = !1, a.value = !1);
    }), (h, m) => (V(), G("div", $m, [
      Ue(bs, {
        "read-only": h.readOnly,
        disabled: h.disabled,
        nonstyled: h.nonstyled,
        modelValue: i.value,
        "onUpdate:modelValue": m[0] || (m[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: s,
        class: Xe(["text-center", h.readOnly ? "w-28" : "max-w-28"]),
        onFocus: f,
        onBlur: p,
        onChange: o
      }, null, 8, ["read-only", "disabled", "nonstyled", "modelValue", "class"]),
      h.readOnly || h.disabled ? Oe("", !0) : tn((V(), jt(Im, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": m[1] || (m[1] = (d) => i.value = d),
        ref_key: "calendarRef",
        ref: l,
        onClose: g
      }, null, 8, ["modelValue"])), [
        [Sr, u.value]
      ])
    ]));
  }
}), Nm = { class: "kvc-time-picker" }, Pc = /* @__PURE__ */ We({
  __name: "time-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = we({
      get: () => n.modelValue ?? "",
      set: (h) => {
        r("update:modelValue", h), r("change", h);
      }
    }), o = (h) => {
      const m = h.target;
      /^\d{2}:\d{2}$/.test(m.value) || (r("update:modelValue", ""), r("change", ""));
    }, a = we(() => {
      const h = [];
      for (let m = 0; m < 24; m++)
        for (let d = 0; d < 60; d += 30) {
          const c = d === 0 ? "00" : "30";
          h.push({
            label: `${m}:${c}`,
            value: `${m.toString().padStart(2, "0")}:${c}`
          });
        }
      return h;
    }), u = Ce(!1), s = Ce(!1), l = Ce(null), f = Ce(null), p = () => {
      u.value = !0, s.value = !0;
    }, g = () => {
      u.value = !1;
    };
    return br(f, () => {
      u.value || (s.value = !1, u.value = !1);
    }), (h, m) => (V(), G("div", Nm, [
      Ue(bs, {
        "read-only": h.readOnly,
        disabled: h.disabled,
        modelValue: i.value,
        "onUpdate:modelValue": m[0] || (m[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: l,
        class: Xe(h.readOnly ? "w-16 text-left" : "max-w-20 text-center"),
        onFocus: p,
        onBlur: g,
        onChange: o
      }, null, 8, ["read-only", "disabled", "modelValue", "class"]),
      h.readOnly || h.disabled ? Oe("", !0) : tn((V(), jt(Zr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": m[1] || (m[1] = (d) => i.value = d),
        ref_key: "timeRef",
        ref: f,
        items: a.value,
        "max-height": 183,
        onChange: m[2] || (m[2] = (d) => s.value = !1)
      }, null, 8, ["modelValue", "items"])), [
        [Sr, s.value]
      ])
    ]));
  }
});
var Vi = { exports: {} }, Mm = Vi.exports, xl;
function jm() {
  return xl || (xl = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Mm, function() {
      var n = "minute", r = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
      return function(o, a, u) {
        var s = a.prototype;
        u.utc = function(d) {
          var c = { date: d, utc: !0, args: arguments };
          return new a(c);
        }, s.utc = function(d) {
          var c = u(this.toDate(), { locale: this.$L, utc: !0 });
          return d ? c.add(this.utcOffset(), n) : c;
        }, s.local = function() {
          return u(this.toDate(), { locale: this.$L, utc: !1 });
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
        s.utcOffset = function(d, c) {
          var y = this.$utils().u;
          if (y(d)) return this.$u ? 0 : y(this.$offset) ? p.call(this) : this.$offset;
          if (typeof d == "string" && (d = function(C) {
            C === void 0 && (C = "");
            var O = C.match(r);
            if (!O) return null;
            var D = ("" + O[0]).match(i) || ["-", 0, 0], I = D[0], M = 60 * +D[1] + +D[2];
            return M === 0 ? 0 : I === "+" ? M : -M;
          }(d), d === null)) return this;
          var b = Math.abs(d) <= 16 ? 60 * d : d, _ = this;
          if (c) return _.$offset = b, _.$u = d === 0, _;
          if (d !== 0) {
            var S = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (_ = this.local().add(b + S, n)).$offset = b, _.$x.$localOffset = S;
          } else _ = this.utc();
          return _;
        };
        var g = s.format;
        s.format = function(d) {
          var c = d || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return g.call(this, c);
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
        var h = s.toDate;
        s.toDate = function(d) {
          return d === "s" && this.$offset ? u(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : h.call(this);
        };
        var m = s.diff;
        s.diff = function(d, c, y) {
          if (d && this.$u === d.$u) return m.call(this, d, c, y);
          var b = this.local(), _ = u(d).local();
          return m.call(b, _, c, y);
        };
      };
    });
  }(Vi)), Vi.exports;
}
var Fm = jm();
const Bm = /* @__PURE__ */ xr(Fm);
var Ui = { exports: {} }, qm = Ui.exports, El;
function Lm() {
  return El || (El = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(qm, function() {
      var n = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, r = {};
      return function(i, o, a) {
        var u, s = function(g, h, m) {
          m === void 0 && (m = {});
          var d = new Date(g), c = function(y, b) {
            b === void 0 && (b = {});
            var _ = b.timeZoneName || "short", S = y + "|" + _, C = r[S];
            return C || (C = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: y, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: _ }), r[S] = C), C;
          }(h, m);
          return c.formatToParts(d);
        }, l = function(g, h) {
          for (var m = s(g, h), d = [], c = 0; c < m.length; c += 1) {
            var y = m[c], b = y.type, _ = y.value, S = n[b];
            S >= 0 && (d[S] = parseInt(_, 10));
          }
          var C = d[3], O = C === 24 ? 0 : C, D = d[0] + "-" + d[1] + "-" + d[2] + " " + O + ":" + d[4] + ":" + d[5] + ":000", I = +g;
          return (a.utc(D).valueOf() - (I -= I % 1e3)) / 6e4;
        }, f = o.prototype;
        f.tz = function(g, h) {
          g === void 0 && (g = u);
          var m, d = this.utcOffset(), c = this.toDate(), y = c.toLocaleString("en-US", { timeZone: g }), b = Math.round((c - new Date(y)) / 1e3 / 60), _ = 15 * -Math.round(c.getTimezoneOffset() / 15) - b;
          if (!Number(_)) m = this.utcOffset(0, h);
          else if (m = a(y, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(_, !0), h) {
            var S = m.utcOffset();
            m = m.add(d - S, "minute");
          }
          return m.$x.$timezone = g, m;
        }, f.offsetName = function(g) {
          var h = this.$x.$timezone || a.tz.guess(), m = s(this.valueOf(), h, { timeZoneName: g }).find(function(d) {
            return d.type.toLowerCase() === "timezonename";
          });
          return m && m.value;
        };
        var p = f.startOf;
        f.startOf = function(g, h) {
          if (!this.$x || !this.$x.$timezone) return p.call(this, g, h);
          var m = a(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return p.call(m, g, h).tz(this.$x.$timezone, !0);
        }, a.tz = function(g, h, m) {
          var d = m && h, c = m || h || u, y = l(+a(), c);
          if (typeof g != "string") return a(g).tz(c);
          var b = function(O, D, I) {
            var M = O - 60 * D * 1e3, F = l(M, I);
            if (D === F) return [M, D];
            var B = l(M -= 60 * (F - D) * 1e3, I);
            return F === B ? [M, F] : [O - 60 * Math.min(F, B) * 1e3, Math.max(F, B)];
          }(a.utc(g, d).valueOf(), y, c), _ = b[0], S = b[1], C = a(_).utcOffset(S);
          return C.$x.$timezone = c, C;
        }, a.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, a.tz.setDefault = function(g) {
          u = g;
        };
      };
    });
  }(Ui)), Ui.exports;
}
var Vm = Lm();
const Um = /* @__PURE__ */ xr(Vm);
var Wi = { exports: {} }, Wm = Wi.exports, Ol;
function Hm() {
  return Ol || (Ol = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Wm, function() {
      return function(n, r, i) {
        var o = r.prototype, a = function(g) {
          var h, m = g.date, d = g.utc, c = {};
          if (!((h = m) === null || h instanceof Date || h instanceof Array || o.$utils().u(h) || h.constructor.name !== "Object")) {
            if (!Object.keys(m).length) return /* @__PURE__ */ new Date();
            var y = d ? i.utc() : i();
            Object.keys(m).forEach(function(M) {
              var F, B;
              c[F = M, B = o.$utils().p(F), B === "date" ? "day" : B] = m[M];
            });
            var b = c.day || (c.year || c.month >= 0 ? 1 : y.date()), _ = c.year || y.year(), S = c.month >= 0 ? c.month : c.year || c.day ? 0 : y.month(), C = c.hour || 0, O = c.minute || 0, D = c.second || 0, I = c.millisecond || 0;
            return d ? new Date(Date.UTC(_, S, b, C, O, D, I)) : new Date(_, S, b, C, O, D, I);
          }
          return m;
        }, u = o.parse;
        o.parse = function(g) {
          g.date = a.bind(this)(g), u.bind(this)(g);
        };
        var s = o.set, l = o.add, f = o.subtract, p = function(g, h, m, d) {
          d === void 0 && (d = 1);
          var c = Object.keys(h), y = this;
          return c.forEach(function(b) {
            y = g.bind(y)(h[b] * d, b);
          }), y;
        };
        o.set = function(g, h) {
          return h = h === void 0 ? g : h, g.constructor.name === "Object" ? p.bind(this)(function(m, d) {
            return s.bind(this)(d, m);
          }, h, g) : s.bind(this)(g, h);
        }, o.add = function(g, h) {
          return g.constructor.name === "Object" ? p.bind(this)(l, g, h) : l.bind(this)(g, h);
        }, o.subtract = function(g, h) {
          return g.constructor.name === "Object" ? p.bind(this)(l, g, h, -1) : f.bind(this)(g, h);
        };
      };
    });
  }(Wi)), Wi.exports;
}
var Gm = Hm();
const Km = /* @__PURE__ */ xr(Gm), zm = { class: "kvc-datetime-picker" }, Ym = /* @__PURE__ */ We({
  __name: "datetime-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    $e.extend(Bm), $e.extend(Um), $e.extend(Km), $e.tz.setDefault("Asia/Tokyo");
    const n = e, r = t, i = we(() => n.modelValue && $e(n.modelValue).isValid()), o = we(() => i.value ? $e(n.modelValue) : void 0), a = (s) => {
      if (s && $e(s).isValid()) {
        const [l, f, p] = s.split("-").map(Number), g = o.value ? $e(o.value).year(l).month(f - 1).date(p) : $e({ year: l, month: f - 1, date: p });
        r("update:modelValue", g.toISOString());
      } else
        r("update:modelValue", void 0);
    }, u = (s) => {
      if (s) {
        const [l, f] = s.split(":").map(Number);
        if (!isNaN(l) && !isNaN(f)) {
          const p = o.value ? $e(o.value).hour(l).minute(f) : $e({ hour: l, minute: f });
          r("update:modelValue", p.toISOString());
        } else
          r("update:modelValue", void 0);
      } else
        r("update:modelValue", void 0);
    };
    return (s, l) => (V(), G("div", zm, [
      s.readOnly ? (V(), G("p", {
        key: 0,
        class: Xe(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }])
      }, Ye(s.modelValue && Pe($e)(s.modelValue).isValid() ? Pe($e)(s.modelValue).format("YYYY-MM-DD HH:mm") : " "), 3)) : (V(), G(wt, { key: 1 }, [
        Ue(Tc, {
          "model-value": o.value ? o.value.format("YYYY-MM-DD") : void 0,
          disabled: s.disabled,
          onChange: a
        }, null, 8, ["model-value", "disabled"]),
        Ue(Pc, {
          "model-value": o.value ? o.value.format("HH:mm") : void 0,
          disabled: s.disabled,
          onChange: u
        }, null, 8, ["model-value", "disabled"])
      ], 64))
    ]));
  }
}), Xm = ["innerHTML"], Jm = /* @__PURE__ */ We({
  __name: "textarea",
  props: {
    modelValue: {},
    nonstyled: { type: Boolean },
    readOnly: { type: Boolean },
    width: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = we({
      get: () => n.modelValue ?? "",
      set: (o) => r("update:modelValue", o)
    });
    return (o, a) => o.readOnly ? (V(), G("p", {
      key: 0,
      class: Xe(["kvc-field-value", { "kvc-field-value-nonstyled": o.nonstyled }]),
      innerHTML: (i.value || " ").replace(/\n/g, "<br>")
    }, null, 10, Xm)) : tn((V(), G("textarea", {
      key: 1,
      class: "kvc-field-text",
      "onUpdate:modelValue": a[0] || (a[0] = (u) => i.value = u)
    }, null, 512)), [
      [Vf, i.value]
    ]);
  }
});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Al(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function en(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Al(Object(n), !0).forEach(function(r) {
      Qm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Al(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Hi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hi = function(t) {
    return typeof t;
  } : Hi = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hi(e);
}
function Qm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function hn() {
  return hn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hn.apply(this, arguments);
}
function Zm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function eg(e, t) {
  if (e == null) return {};
  var n = Zm(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var tg = "1.15.6";
function dn(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var gn = dn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ii = dn(/Edge/i), Dl = dn(/firefox/i), Kr = dn(/safari/i) && !dn(/chrome/i) && !dn(/android/i), ws = dn(/iP(ad|od|hone)/i), kc = dn(/chrome/i) && dn(/android/i), Ic = {
  capture: !1,
  passive: !1
};
function De(e, t, n) {
  e.addEventListener(t, n, !gn && Ic);
}
function Ee(e, t, n) {
  e.removeEventListener(t, n, !gn && Ic);
}
function oo(e, t) {
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
function $c(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Vt(e, t, n, r) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && oo(e, t) : oo(e, t)) || r && e === n)
        return e;
      if (e === n) break;
    } while (e = $c(e));
  }
  return null;
}
var Cl = /\s+/g;
function Pt(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var r = (" " + e.className + " ").replace(Cl, " ").replace(" " + t + " ", " ");
      e.className = (r + (n ? " " + t : "")).replace(Cl, " ");
    }
}
function ce(e, t, n) {
  var r = e && e.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function gr(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var r = ce(e, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!t && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function Nc(e, t, n) {
  if (e) {
    var r = e.getElementsByTagName(t), i = 0, o = r.length;
    if (n)
      for (; i < o; i++)
        n(r[i], i);
    return r;
  }
  return [];
}
function Qt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function rt(e, t, n, r, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, a, u, s, l, f, p;
    if (e !== window && e.parentNode && e !== Qt() ? (o = e.getBoundingClientRect(), a = o.top, u = o.left, s = o.bottom, l = o.right, f = o.height, p = o.width) : (a = 0, u = 0, s = window.innerHeight, l = window.innerWidth, f = window.innerHeight, p = window.innerWidth), (t || n) && e !== window && (i = i || e.parentNode, !gn))
      do
        if (i && i.getBoundingClientRect && (ce(i, "transform") !== "none" || n && ce(i, "position") !== "static")) {
          var g = i.getBoundingClientRect();
          a -= g.top + parseInt(ce(i, "border-top-width")), u -= g.left + parseInt(ce(i, "border-left-width")), s = a + o.height, l = u + o.width;
          break;
        }
      while (i = i.parentNode);
    if (r && e !== window) {
      var h = gr(i || e), m = h && h.a, d = h && h.d;
      h && (a /= d, u /= m, p /= m, f /= d, s = a + f, l = u + p);
    }
    return {
      top: a,
      left: u,
      bottom: s,
      right: l,
      width: p,
      height: f
    };
  }
}
function Rl(e, t, n) {
  for (var r = Rn(e, !0), i = rt(e)[t]; r; ) {
    var o = rt(r)[n], a = void 0;
    if (a = i >= o, !a) return r;
    if (r === Qt()) break;
    r = Rn(r, !1);
  }
  return !1;
}
function wr(e, t, n, r) {
  for (var i = 0, o = 0, a = e.children; o < a.length; ) {
    if (a[o].style.display !== "none" && a[o] !== fe.ghost && (r || a[o] !== fe.dragged) && Vt(a[o], n.draggable, e, !1)) {
      if (i === t)
        return a[o];
      i++;
    }
    o++;
  }
  return null;
}
function _s(e, t) {
  for (var n = e.lastElementChild; n && (n === fe.ghost || ce(n, "display") === "none" || t && !oo(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function Mt(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== fe.clone && (!t || oo(e, t)) && n++;
  return n;
}
function Tl(e) {
  var t = 0, n = 0, r = Qt();
  if (e)
    do {
      var i = gr(e), o = i.a, a = i.d;
      t += e.scrollLeft * o, n += e.scrollTop * a;
    } while (e !== r && (e = e.parentNode));
  return [t, n];
}
function ng(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var r in t)
        if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
    }
  return -1;
}
function Rn(e, t) {
  if (!e || !e.getBoundingClientRect) return Qt();
  var n = e, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = ce(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return Qt();
        if (r || t) return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return Qt();
}
function rg(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Wo(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var zr;
function Mc(e, t) {
  return function() {
    if (!zr) {
      var n = arguments, r = this;
      n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), zr = setTimeout(function() {
        zr = void 0;
      }, t);
    }
  };
}
function ig() {
  clearTimeout(zr), zr = void 0;
}
function jc(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Fc(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Bc(e, t, n) {
  var r = {};
  return Array.from(e.children).forEach(function(i) {
    var o, a, u, s;
    if (!(!Vt(i, t.draggable, e, !1) || i.animated || i === n)) {
      var l = rt(i);
      r.left = Math.min((o = r.left) !== null && o !== void 0 ? o : 1 / 0, l.left), r.top = Math.min((a = r.top) !== null && a !== void 0 ? a : 1 / 0, l.top), r.right = Math.max((u = r.right) !== null && u !== void 0 ? u : -1 / 0, l.right), r.bottom = Math.max((s = r.bottom) !== null && s !== void 0 ? s : -1 / 0, l.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var At = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function og() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(i) {
          if (!(ce(i, "display") === "none" || i === fe.ghost)) {
            e.push({
              target: i,
              rect: rt(i)
            });
            var o = en({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = gr(i, !0);
              a && (o.top -= a.f, o.left -= a.e);
            }
            i.fromRect = o;
          }
        });
      }
    },
    addAnimationState: function(r) {
      e.push(r);
    },
    removeAnimationState: function(r) {
      e.splice(ng(e, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof r == "function" && r();
        return;
      }
      var o = !1, a = 0;
      e.forEach(function(u) {
        var s = 0, l = u.target, f = l.fromRect, p = rt(l), g = l.prevFromRect, h = l.prevToRect, m = u.rect, d = gr(l, !0);
        d && (p.top -= d.f, p.left -= d.e), l.toRect = p, l.thisAnimationDuration && Wo(g, p) && !Wo(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (m.top - p.top) / (m.left - p.left) === (f.top - p.top) / (f.left - p.left) && (s = sg(m, g, h, i.options)), Wo(p, f) || (l.prevFromRect = f, l.prevToRect = p, s || (s = i.options.animation), i.animate(l, m, p, s)), s && (o = !0, a = Math.max(a, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof r == "function" && r();
      }, a) : typeof r == "function" && r(), e = [];
    },
    animate: function(r, i, o, a) {
      if (a) {
        ce(r, "transition", ""), ce(r, "transform", "");
        var u = gr(this.el), s = u && u.a, l = u && u.d, f = (i.left - o.left) / (s || 1), p = (i.top - o.top) / (l || 1);
        r.animatingX = !!f, r.animatingY = !!p, ce(r, "transform", "translate3d(" + f + "px," + p + "px,0)"), this.forRepaintDummy = ag(r), ce(r, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ce(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          ce(r, "transition", ""), ce(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, a);
      }
    }
  };
}
function ag(e) {
  return e.offsetWidth;
}
function sg(e, t, n, r) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation;
}
var Zn = [], Ho = {
  initializeByDefault: !0
}, oi = {
  mount: function(t) {
    for (var n in Ho)
      Ho.hasOwnProperty(n) && !(n in t) && (t[n] = Ho[n]);
    Zn.forEach(function(r) {
      if (r.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Zn.push(t);
  },
  pluginEvent: function(t, n, r) {
    var i = this;
    this.eventCanceled = !1, r.cancel = function() {
      i.eventCanceled = !0;
    };
    var o = t + "Global";
    Zn.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][o] && n[a.pluginName][o](en({
        sortable: n
      }, r)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](en({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(t, n, r, i) {
    Zn.forEach(function(u) {
      var s = u.pluginName;
      if (!(!t.options[s] && !u.initializeByDefault)) {
        var l = new u(t, n, t.options);
        l.sortable = t, l.options = t.options, t[s] = l, hn(r, l.defaults);
      }
    });
    for (var o in t.options)
      if (t.options.hasOwnProperty(o)) {
        var a = this.modifyOption(t, o, t.options[o]);
        typeof a < "u" && (t.options[o] = a);
      }
  },
  getEventProperties: function(t, n) {
    var r = {};
    return Zn.forEach(function(i) {
      typeof i.eventProperties == "function" && hn(r, i.eventProperties.call(n[i.pluginName], t));
    }), r;
  },
  modifyOption: function(t, n, r) {
    var i;
    return Zn.forEach(function(o) {
      t[o.pluginName] && o.optionListeners && typeof o.optionListeners[n] == "function" && (i = o.optionListeners[n].call(t[o.pluginName], r));
    }), i;
  }
};
function lg(e) {
  var t = e.sortable, n = e.rootEl, r = e.name, i = e.targetEl, o = e.cloneEl, a = e.toEl, u = e.fromEl, s = e.oldIndex, l = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, g = e.originalEvent, h = e.putSortable, m = e.extraEventProperties;
  if (t = t || n && n[At], !!t) {
    var d, c = t.options, y = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !gn && !ii ? d = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(r, !0, !0)), d.to = a || n, d.from = u || n, d.item = i || n, d.clone = o, d.oldIndex = s, d.newIndex = l, d.oldDraggableIndex = f, d.newDraggableIndex = p, d.originalEvent = g, d.pullMode = h ? h.lastPutMode : void 0;
    var b = en(en({}, m), oi.getEventProperties(r, t));
    for (var _ in b)
      d[_] = b[_];
    n && n.dispatchEvent(d), c[y] && c[y].call(t, d);
  }
}
var ug = ["evt"], Et = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, o = eg(r, ug);
  oi.pluginEvent.bind(fe)(t, n, en({
    dragEl: K,
    parentEl: Ke,
    ghostEl: he,
    rootEl: Le,
    nextEl: Ln,
    lastDownEl: Gi,
    cloneEl: Ve,
    cloneHidden: Dn,
    dragStarted: Br,
    putSortable: pt,
    activeSortable: fe.active,
    originalEvent: i,
    oldIndex: hr,
    oldDraggableIndex: Yr,
    newIndex: It,
    newDraggableIndex: On,
    hideGhostForTarget: Uc,
    unhideGhostForTarget: Wc,
    cloneNowHidden: function() {
      Dn = !0;
    },
    cloneNowShown: function() {
      Dn = !1;
    },
    dispatchSortableEvent: function(u) {
      bt({
        sortable: n,
        name: u,
        originalEvent: i
      });
    }
  }, o));
};
function bt(e) {
  lg(en({
    putSortable: pt,
    cloneEl: Ve,
    targetEl: K,
    rootEl: Le,
    oldIndex: hr,
    oldDraggableIndex: Yr,
    newIndex: It,
    newDraggableIndex: On
  }, e));
}
var K, Ke, he, Le, Ln, Gi, Ve, Dn, hr, It, Yr, On, Di, pt, fr = !1, ao = !1, so = [], Mn, qt, Go, Ko, Pl, kl, Br, er, Xr, Jr = !1, Ci = !1, Ki, gt, zo = [], ss = !1, lo = [], mo = typeof document < "u", Ri = ws, Il = ii || gn ? "cssFloat" : "float", cg = mo && !kc && !ws && "draggable" in document.createElement("div"), qc = function() {
  if (mo) {
    if (gn)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Lc = function(t, n) {
  var r = ce(t), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), o = wr(t, 0, n), a = wr(t, 1, n), u = o && ce(o), s = a && ce(a), l = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + rt(o).width, f = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + rt(a).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && u.float && u.float !== "none") {
    var p = u.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (u.display === "block" || u.display === "flex" || u.display === "table" || u.display === "grid" || l >= i && r[Il] === "none" || a && r[Il] === "none" && l + f > i) ? "vertical" : "horizontal";
}, fg = function(t, n, r) {
  var i = r ? t.left : t.top, o = r ? t.right : t.bottom, a = r ? t.width : t.height, u = r ? n.left : n.top, s = r ? n.right : n.bottom, l = r ? n.width : n.height;
  return i === u || o === s || i + a / 2 === u + l / 2;
}, dg = function(t, n) {
  var r;
  return so.some(function(i) {
    var o = i[At].options.emptyInsertThreshold;
    if (!(!o || _s(i))) {
      var a = rt(i), u = t >= a.left - o && t <= a.right + o, s = n >= a.top - o && n <= a.bottom + o;
      if (u && s)
        return r = i;
    }
  }), r;
}, Vc = function(t) {
  function n(o, a) {
    return function(u, s, l, f) {
      var p = u.options.group.name && s.options.group.name && u.options.group.name === s.options.group.name;
      if (o == null && (a || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (a && o === "clone")
        return o;
      if (typeof o == "function")
        return n(o(u, s, l, f), a)(u, s, l, f);
      var g = (a ? u : s).options.group.name;
      return o === !0 || typeof o == "string" && o === g || o.join && o.indexOf(g) > -1;
    };
  }
  var r = {}, i = t.group;
  (!i || Hi(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = n(i.pull, !0), r.checkPut = n(i.put), r.revertClone = i.revertClone, t.group = r;
}, Uc = function() {
  !qc && he && ce(he, "display", "none");
}, Wc = function() {
  !qc && he && ce(he, "display", "");
};
mo && !kc && document.addEventListener("click", function(e) {
  if (ao)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), ao = !1, !1;
}, !0);
var jn = function(t) {
  if (K) {
    t = t.touches ? t.touches[0] : t;
    var n = dg(t.clientX, t.clientY);
    if (n) {
      var r = {};
      for (var i in t)
        t.hasOwnProperty(i) && (r[i] = t[i]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[At]._onDragOver(r);
    }
  }
}, pg = function(t) {
  K && K.parentNode[At]._isOutsideThisEl(t.target);
};
function fe(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = hn({}, t), e[At] = this;
  var n = {
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
      return Lc(e, this.options);
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
    supportPointer: fe.supportPointer !== !1 && "PointerEvent" in window && (!Kr || ws),
    emptyInsertThreshold: 5
  };
  oi.initializePlugins(this, e, n);
  for (var r in n)
    !(r in t) && (t[r] = n[r]);
  Vc(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : cg, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? De(e, "pointerdown", this._onTapStart) : (De(e, "mousedown", this._onTapStart), De(e, "touchstart", this._onTapStart)), this.nativeDraggable && (De(e, "dragover", this), De(e, "dragenter", this)), so.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), hn(this, og());
}
fe.prototype = /** @lends Sortable.prototype */
{
  constructor: fe,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (er = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, K) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, r = this.el, i = this.options, o = i.preventOnFilter, a = t.type, u = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (u || t).target, l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, f = i.filter;
      if (_g(r), !K && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Kr && s && s.tagName.toUpperCase() === "SELECT") && (s = Vt(s, i.draggable, r, !1), !(s && s.animated) && Gi !== s)) {
        if (hr = Mt(s), Yr = Mt(s, i.draggable), typeof f == "function") {
          if (f.call(this, t, s, this)) {
            bt({
              sortable: n,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: r,
              fromEl: r
            }), Et("filter", n, {
              evt: t
            }), o && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(p) {
          if (p = Vt(l, p.trim(), r, !1), p)
            return bt({
              sortable: n,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: r,
              toEl: r
            }), Et("filter", n, {
              evt: t
            }), !0;
        }), f)) {
          o && t.preventDefault();
          return;
        }
        i.handle && !Vt(l, i.handle, r, !1) || this._prepareDragStart(t, u, s);
      }
    }
  },
  _prepareDragStart: function(t, n, r) {
    var i = this, o = i.el, a = i.options, u = o.ownerDocument, s;
    if (r && !K && r.parentNode === o) {
      var l = rt(r);
      if (Le = o, K = r, Ke = K.parentNode, Ln = K.nextSibling, Gi = r, Di = a.group, fe.dragged = K, Mn = {
        target: K,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Pl = Mn.clientX - l.left, kl = Mn.clientY - l.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, K.style["will-change"] = "all", s = function() {
        if (Et("delayEnded", i, {
          evt: t
        }), fe.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Dl && i.nativeDraggable && (K.draggable = !0), i._triggerDragStart(t, n), bt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), Pt(K, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        Nc(K, f.trim(), Yo);
      }), De(u, "dragover", jn), De(u, "mousemove", jn), De(u, "touchmove", jn), a.supportPointer ? (De(u, "pointerup", i._onDrop), !this.nativeDraggable && De(u, "pointercancel", i._onDrop)) : (De(u, "mouseup", i._onDrop), De(u, "touchend", i._onDrop), De(u, "touchcancel", i._onDrop)), Dl && this.nativeDraggable && (this.options.touchStartThreshold = 4, K.draggable = !0), Et("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ii || gn))) {
        if (fe.eventCanceled) {
          this._onDrop();
          return;
        }
        a.supportPointer ? (De(u, "pointerup", i._disableDelayedDrag), De(u, "pointercancel", i._disableDelayedDrag)) : (De(u, "mouseup", i._disableDelayedDrag), De(u, "touchend", i._disableDelayedDrag), De(u, "touchcancel", i._disableDelayedDrag)), De(u, "mousemove", i._delayedDragTouchMoveHandler), De(u, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && De(u, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    K && Yo(K), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    Ee(t, "mouseup", this._disableDelayedDrag), Ee(t, "touchend", this._disableDelayedDrag), Ee(t, "touchcancel", this._disableDelayedDrag), Ee(t, "pointerup", this._disableDelayedDrag), Ee(t, "pointercancel", this._disableDelayedDrag), Ee(t, "mousemove", this._delayedDragTouchMoveHandler), Ee(t, "touchmove", this._delayedDragTouchMoveHandler), Ee(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? De(document, "pointermove", this._onTouchMove) : n ? De(document, "touchmove", this._onTouchMove) : De(document, "mousemove", this._onTouchMove) : (De(K, "dragend", this), De(Le, "dragstart", this._onDragStart));
    try {
      document.selection ? zi(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (fr = !1, Le && K) {
      Et("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && De(document, "dragover", pg);
      var r = this.options;
      !t && Pt(K, r.dragClass, !1), Pt(K, r.ghostClass, !0), fe.active = this, t && this._appendGhost(), bt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (qt) {
      this._lastX = qt.clientX, this._lastY = qt.clientY, Uc();
      for (var t = document.elementFromPoint(qt.clientX, qt.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(qt.clientX, qt.clientY), t !== n); )
        n = t;
      if (K.parentNode[At]._isOutsideThisEl(t), n)
        do {
          if (n[At]) {
            var r = void 0;
            if (r = n[At]._onDragOver({
              clientX: qt.clientX,
              clientY: qt.clientY,
              target: t,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = $c(n));
      Wc();
    }
  },
  _onTouchMove: function(t) {
    if (Mn) {
      var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, o = t.touches ? t.touches[0] : t, a = he && gr(he, !0), u = he && a && a.a, s = he && a && a.d, l = Ri && gt && Tl(gt), f = (o.clientX - Mn.clientX + i.x) / (u || 1) + (l ? l[0] - zo[0] : 0) / (u || 1), p = (o.clientY - Mn.clientY + i.y) / (s || 1) + (l ? l[1] - zo[1] : 0) / (s || 1);
      if (!fe.active && !fr) {
        if (r && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < r)
          return;
        this._onDragStart(t, !0);
      }
      if (he) {
        a ? (a.e += f - (Go || 0), a.f += p - (Ko || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: p
        };
        var g = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ce(he, "webkitTransform", g), ce(he, "mozTransform", g), ce(he, "msTransform", g), ce(he, "transform", g), Go = f, Ko = p, qt = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!he) {
      var t = this.options.fallbackOnBody ? document.body : Le, n = rt(K, !0, Ri, !0, t), r = this.options;
      if (Ri) {
        for (gt = t; ce(gt, "position") === "static" && ce(gt, "transform") === "none" && gt !== document; )
          gt = gt.parentNode;
        gt !== document.body && gt !== document.documentElement ? (gt === document && (gt = Qt()), n.top += gt.scrollTop, n.left += gt.scrollLeft) : gt = Qt(), zo = Tl(gt);
      }
      he = K.cloneNode(!0), Pt(he, r.ghostClass, !1), Pt(he, r.fallbackClass, !0), Pt(he, r.dragClass, !0), ce(he, "transition", ""), ce(he, "transform", ""), ce(he, "box-sizing", "border-box"), ce(he, "margin", 0), ce(he, "top", n.top), ce(he, "left", n.left), ce(he, "width", n.width), ce(he, "height", n.height), ce(he, "opacity", "0.8"), ce(he, "position", Ri ? "absolute" : "fixed"), ce(he, "zIndex", "100000"), ce(he, "pointerEvents", "none"), fe.ghost = he, t.appendChild(he), ce(he, "transform-origin", Pl / parseInt(he.style.width) * 100 + "% " + kl / parseInt(he.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var r = this, i = t.dataTransfer, o = r.options;
    if (Et("dragStart", this, {
      evt: t
    }), fe.eventCanceled) {
      this._onDrop();
      return;
    }
    Et("setupClone", this), fe.eventCanceled || (Ve = Fc(K), Ve.removeAttribute("id"), Ve.draggable = !1, Ve.style["will-change"] = "", this._hideClone(), Pt(Ve, this.options.chosenClass, !1), fe.clone = Ve), r.cloneId = zi(function() {
      Et("clone", r), !fe.eventCanceled && (r.options.removeCloneOnHide || Le.insertBefore(Ve, K), r._hideClone(), bt({
        sortable: r,
        name: "clone"
      }));
    }), !n && Pt(K, o.dragClass, !0), n ? (ao = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (Ee(document, "mouseup", r._onDrop), Ee(document, "touchend", r._onDrop), Ee(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(r, i, K)), De(document, "drop", r), ce(K, "transform", "translateZ(0)")), fr = !0, r._dragStartId = zi(r._dragStarted.bind(r, n, t)), De(document, "selectstart", r), Br = !0, window.getSelection().removeAllRanges(), Kr && ce(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, r = t.target, i, o, a, u = this.options, s = u.group, l = fe.active, f = Di === s, p = u.sort, g = pt || l, h, m = this, d = !1;
    if (ss) return;
    function c(j, ee) {
      Et(j, m, en({
        evt: t,
        isOwner: f,
        axis: h ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: o,
        canSort: p,
        fromSortable: g,
        target: r,
        completed: b,
        onMove: function(de, ye) {
          return Ti(Le, n, K, i, de, rt(de), t, ye);
        },
        changed: _
      }, ee));
    }
    function y() {
      c("dragOverAnimationCapture"), m.captureAnimationState(), m !== g && g.captureAnimationState();
    }
    function b(j) {
      return c("dragOverCompleted", {
        insertion: j
      }), j && (f ? l._hideClone() : l._showClone(m), m !== g && (Pt(K, pt ? pt.options.ghostClass : l.options.ghostClass, !1), Pt(K, u.ghostClass, !0)), pt !== m && m !== fe.active ? pt = m : m === fe.active && pt && (pt = null), g === m && (m._ignoreWhileAnimating = r), m.animateAll(function() {
        c("dragOverAnimationComplete"), m._ignoreWhileAnimating = null;
      }), m !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (r === K && !K.animated || r === n && !r.animated) && (er = null), !u.dragoverBubble && !t.rootEl && r !== document && (K.parentNode[At]._isOutsideThisEl(t.target), !j && jn(t)), !u.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function _() {
      It = Mt(K), On = Mt(K, u.draggable), bt({
        sortable: m,
        name: "change",
        toEl: n,
        newIndex: It,
        newDraggableIndex: On,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), r = Vt(r, u.draggable, n, !0), c("dragOver"), fe.eventCanceled) return d;
    if (K.contains(t.target) || r.animated && r.animatingX && r.animatingY || m._ignoreWhileAnimating === r)
      return b(!1);
    if (ao = !1, l && !u.disabled && (f ? p || (a = Ke !== Le) : pt === this || (this.lastPutMode = Di.checkPull(this, l, K, t)) && s.checkPut(this, l, K, t))) {
      if (h = this._getDirection(t, r) === "vertical", i = rt(K), c("dragOverValid"), fe.eventCanceled) return d;
      if (a)
        return Ke = Le, y(), this._hideClone(), c("revert"), fe.eventCanceled || (Ln ? Le.insertBefore(K, Ln) : Le.appendChild(K)), b(!0);
      var S = _s(n, u.draggable);
      if (!S || vg(t, h, this) && !S.animated) {
        if (S === K)
          return b(!1);
        if (S && n === t.target && (r = S), r && (o = rt(r)), Ti(Le, n, K, i, r, o, t, !!r) !== !1)
          return y(), S && S.nextSibling ? n.insertBefore(K, S.nextSibling) : n.appendChild(K), Ke = n, _(), b(!0);
      } else if (S && gg(t, h, this)) {
        var C = wr(n, 0, u, !0);
        if (C === K)
          return b(!1);
        if (r = C, o = rt(r), Ti(Le, n, K, i, r, o, t, !1) !== !1)
          return y(), n.insertBefore(K, C), Ke = n, _(), b(!0);
      } else if (r.parentNode === n) {
        o = rt(r);
        var O = 0, D, I = K.parentNode !== n, M = !fg(K.animated && K.toRect || i, r.animated && r.toRect || o, h), F = h ? "top" : "left", B = Rl(r, "top", "top") || Rl(K, "top", "top"), H = B ? B.scrollTop : void 0;
        er !== r && (D = o[F], Jr = !1, Ci = !M && u.invertSwap || I), O = yg(t, r, o, h, M ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, Ci, er === r);
        var te;
        if (O !== 0) {
          var W = Mt(K);
          do
            W -= O, te = Ke.children[W];
          while (te && (ce(te, "display") === "none" || te === he));
        }
        if (O === 0 || te === r)
          return b(!1);
        er = r, Xr = O;
        var q = r.nextElementSibling, L = !1;
        L = O === 1;
        var X = Ti(Le, n, K, i, r, o, t, L);
        if (X !== !1)
          return (X === 1 || X === -1) && (L = X === 1), ss = !0, setTimeout(mg, 30), y(), L && !q ? n.appendChild(K) : r.parentNode.insertBefore(K, L ? q : r), B && jc(B, 0, H - B.scrollTop), Ke = K.parentNode, D !== void 0 && !Ci && (Ki = Math.abs(D - rt(r)[F])), _(), b(!0);
      }
      if (n.contains(K))
        return b(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ee(document, "mousemove", this._onTouchMove), Ee(document, "touchmove", this._onTouchMove), Ee(document, "pointermove", this._onTouchMove), Ee(document, "dragover", jn), Ee(document, "mousemove", jn), Ee(document, "touchmove", jn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    Ee(t, "mouseup", this._onDrop), Ee(t, "touchend", this._onDrop), Ee(t, "pointerup", this._onDrop), Ee(t, "pointercancel", this._onDrop), Ee(t, "touchcancel", this._onDrop), Ee(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, r = this.options;
    if (It = Mt(K), On = Mt(K, r.draggable), Et("drop", this, {
      evt: t
    }), Ke = K && K.parentNode, It = Mt(K), On = Mt(K, r.draggable), fe.eventCanceled) {
      this._nulling();
      return;
    }
    fr = !1, Ci = !1, Jr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ls(this.cloneId), ls(this._dragStartId), this.nativeDraggable && (Ee(document, "drop", this), Ee(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Kr && ce(document.body, "user-select", ""), ce(K, "transform", ""), t && (Br && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), he && he.parentNode && he.parentNode.removeChild(he), (Le === Ke || pt && pt.lastPutMode !== "clone") && Ve && Ve.parentNode && Ve.parentNode.removeChild(Ve), K && (this.nativeDraggable && Ee(K, "dragend", this), Yo(K), K.style["will-change"] = "", Br && !fr && Pt(K, pt ? pt.options.ghostClass : this.options.ghostClass, !1), Pt(K, this.options.chosenClass, !1), bt({
      sortable: this,
      name: "unchoose",
      toEl: Ke,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Le !== Ke ? (It >= 0 && (bt({
      rootEl: Ke,
      name: "add",
      toEl: Ke,
      fromEl: Le,
      originalEvent: t
    }), bt({
      sortable: this,
      name: "remove",
      toEl: Ke,
      originalEvent: t
    }), bt({
      rootEl: Ke,
      name: "sort",
      toEl: Ke,
      fromEl: Le,
      originalEvent: t
    }), bt({
      sortable: this,
      name: "sort",
      toEl: Ke,
      originalEvent: t
    })), pt && pt.save()) : It !== hr && It >= 0 && (bt({
      sortable: this,
      name: "update",
      toEl: Ke,
      originalEvent: t
    }), bt({
      sortable: this,
      name: "sort",
      toEl: Ke,
      originalEvent: t
    })), fe.active && ((It == null || It === -1) && (It = hr, On = Yr), bt({
      sortable: this,
      name: "end",
      toEl: Ke,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Et("nulling", this), Le = K = Ke = he = Ln = Ve = Gi = Dn = Mn = qt = Br = It = On = hr = Yr = er = Xr = pt = Di = fe.dragged = fe.ghost = fe.clone = fe.active = null, lo.forEach(function(t) {
      t.checked = !0;
    }), lo.length = Go = Ko = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        K && (this._onDragOver(t), hg(t));
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
    for (var t = [], n, r = this.el.children, i = 0, o = r.length, a = this.options; i < o; i++)
      n = r[i], Vt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || wg(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var r = {}, i = this.el;
    this.toArray().forEach(function(o, a) {
      var u = i.children[a];
      Vt(u, this.options.draggable, i, !1) && (r[o] = u);
    }, this), n && this.captureAnimationState(), t.forEach(function(o) {
      r[o] && (i.removeChild(r[o]), i.appendChild(r[o]));
    }), n && this.animateAll();
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
  closest: function(t, n) {
    return Vt(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var r = this.options;
    if (n === void 0)
      return r[t];
    var i = oi.modifyOption(this, t, n);
    typeof i < "u" ? r[t] = i : r[t] = n, t === "group" && Vc(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Et("destroy", this);
    var t = this.el;
    t[At] = null, Ee(t, "mousedown", this._onTapStart), Ee(t, "touchstart", this._onTapStart), Ee(t, "pointerdown", this._onTapStart), this.nativeDraggable && (Ee(t, "dragover", this), Ee(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), so.splice(so.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Dn) {
      if (Et("hideClone", this), fe.eventCanceled) return;
      ce(Ve, "display", "none"), this.options.removeCloneOnHide && Ve.parentNode && Ve.parentNode.removeChild(Ve), Dn = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Dn) {
      if (Et("showClone", this), fe.eventCanceled) return;
      K.parentNode == Le && !this.options.group.revertClone ? Le.insertBefore(Ve, K) : Ln ? Le.insertBefore(Ve, Ln) : Le.appendChild(Ve), this.options.group.revertClone && this.animate(K, Ve), ce(Ve, "display", ""), Dn = !1;
    }
  }
};
function hg(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ti(e, t, n, r, i, o, a, u) {
  var s, l = e[At], f = l.options.onMove, p;
  return window.CustomEvent && !gn && !ii ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = r, s.related = i || t, s.relatedRect = o || rt(t), s.willInsertAfter = u, s.originalEvent = a, e.dispatchEvent(s), f && (p = f.call(l, s, a)), p;
}
function Yo(e) {
  e.draggable = !1;
}
function mg() {
  ss = !1;
}
function gg(e, t, n) {
  var r = rt(wr(n.el, 0, n.options, !0)), i = Bc(n.el, n.options, he), o = 10;
  return t ? e.clientX < i.left - o || e.clientY < r.top && e.clientX < r.right : e.clientY < i.top - o || e.clientY < r.bottom && e.clientX < r.left;
}
function vg(e, t, n) {
  var r = rt(_s(n.el, n.options.draggable)), i = Bc(n.el, n.options, he), o = 10;
  return t ? e.clientX > i.right + o || e.clientY > r.bottom && e.clientX > r.left : e.clientY > i.bottom + o || e.clientX > r.right && e.clientY > r.top;
}
function yg(e, t, n, r, i, o, a, u) {
  var s = r ? e.clientY : e.clientX, l = r ? n.height : n.width, f = r ? n.top : n.left, p = r ? n.bottom : n.right, g = !1;
  if (!a) {
    if (u && Ki < l * i) {
      if (!Jr && (Xr === 1 ? s > f + l * o / 2 : s < p - l * o / 2) && (Jr = !0), Jr)
        g = !0;
      else if (Xr === 1 ? s < f + Ki : s > p - Ki)
        return -Xr;
    } else if (s > f + l * (1 - i) / 2 && s < p - l * (1 - i) / 2)
      return bg(t);
  }
  return g = g || a, g && (s < f + l * o / 2 || s > p - l * o / 2) ? s > f + l / 2 ? 1 : -1 : 0;
}
function bg(e) {
  return Mt(K) < Mt(e) ? 1 : -1;
}
function wg(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--; )
    r += t.charCodeAt(n);
  return r.toString(36);
}
function _g(e) {
  lo.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var r = t[n];
    r.checked && lo.push(r);
  }
}
function zi(e) {
  return setTimeout(e, 0);
}
function ls(e) {
  return clearTimeout(e);
}
mo && De(document, "touchmove", function(e) {
  (fe.active || fr) && e.cancelable && e.preventDefault();
});
fe.utils = {
  on: De,
  off: Ee,
  css: ce,
  find: Nc,
  is: function(t, n) {
    return !!Vt(t, n, t, !1);
  },
  extend: rg,
  throttle: Mc,
  closest: Vt,
  toggleClass: Pt,
  clone: Fc,
  index: Mt,
  nextTick: zi,
  cancelNextTick: ls,
  detectDirection: Lc,
  getChild: wr,
  expando: At
};
fe.get = function(e) {
  return e[At];
};
fe.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (fe.utils = en(en({}, fe.utils), r.utils)), oi.mount(r);
  });
};
fe.create = function(e, t) {
  return new fe(e, t);
};
fe.version = tg;
var nt = [], qr, us, cs = !1, Xo, Jo, uo, Lr;
function Sg() {
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
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? De(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? De(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? De(document, "touchmove", this._handleFallbackAutoScroll) : De(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ee(document, "dragover", this._handleAutoScroll) : (Ee(document, "pointermove", this._handleFallbackAutoScroll), Ee(document, "touchmove", this._handleFallbackAutoScroll), Ee(document, "mousemove", this._handleFallbackAutoScroll)), $l(), Yi(), ig();
    },
    nulling: function() {
      uo = us = qr = cs = Lr = Xo = Jo = null, nt.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var i = this, o = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, u = document.elementFromPoint(o, a);
      if (uo = n, r || this.options.forceAutoScrollFallback || ii || gn || Kr) {
        Qo(n, this.options, u, r);
        var s = Rn(u, !0);
        cs && (!Lr || o !== Xo || a !== Jo) && (Lr && $l(), Lr = setInterval(function() {
          var l = Rn(document.elementFromPoint(o, a), !0);
          l !== s && (s = l, Yi()), Qo(n, i.options, l, r);
        }, 10), Xo = o, Jo = a);
      } else {
        if (!this.options.bubbleScroll || Rn(u, !0) === Qt()) {
          Yi();
          return;
        }
        Qo(n, this.options, Rn(u, !1), !1);
      }
    }
  }, hn(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Yi() {
  nt.forEach(function(e) {
    clearInterval(e.pid);
  }), nt = [];
}
function $l() {
  clearInterval(Lr);
}
var Qo = Mc(function(e, t, n, r) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, u = t.scrollSpeed, s = Qt(), l = !1, f;
    us !== n && (us = n, Yi(), qr = t.scroll, f = t.scrollFn, qr === !0 && (qr = Rn(n, !0)));
    var p = 0, g = qr;
    do {
      var h = g, m = rt(h), d = m.top, c = m.bottom, y = m.left, b = m.right, _ = m.width, S = m.height, C = void 0, O = void 0, D = h.scrollWidth, I = h.scrollHeight, M = ce(h), F = h.scrollLeft, B = h.scrollTop;
      h === s ? (C = _ < D && (M.overflowX === "auto" || M.overflowX === "scroll" || M.overflowX === "visible"), O = S < I && (M.overflowY === "auto" || M.overflowY === "scroll" || M.overflowY === "visible")) : (C = _ < D && (M.overflowX === "auto" || M.overflowX === "scroll"), O = S < I && (M.overflowY === "auto" || M.overflowY === "scroll"));
      var H = C && (Math.abs(b - i) <= a && F + _ < D) - (Math.abs(y - i) <= a && !!F), te = O && (Math.abs(c - o) <= a && B + S < I) - (Math.abs(d - o) <= a && !!B);
      if (!nt[p])
        for (var W = 0; W <= p; W++)
          nt[W] || (nt[W] = {});
      (nt[p].vx != H || nt[p].vy != te || nt[p].el !== h) && (nt[p].el = h, nt[p].vx = H, nt[p].vy = te, clearInterval(nt[p].pid), (H != 0 || te != 0) && (l = !0, nt[p].pid = setInterval((function() {
        r && this.layer === 0 && fe.active._onTouchMove(uo);
        var q = nt[this.layer].vy ? nt[this.layer].vy * u : 0, L = nt[this.layer].vx ? nt[this.layer].vx * u : 0;
        typeof f == "function" && f.call(fe.dragged.parentNode[At], L, q, e, uo, nt[this.layer].el) !== "continue" || jc(nt[this.layer].el, L, q);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && g !== s && (g = Rn(g, !1)));
    cs = l;
  }
}, 30), Hc = function(t) {
  var n = t.originalEvent, r = t.putSortable, i = t.dragEl, o = t.activeSortable, a = t.dispatchSortableEvent, u = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var l = r || o;
    u();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, p = document.elementFromPoint(f.clientX, f.clientY);
    s(), l && !l.el.contains(p) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: r
    }));
  }
};
function Ss() {
}
Ss.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var i = wr(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: Hc
};
hn(Ss, {
  pluginName: "revertOnSpill"
});
function xs() {
}
xs.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable, i = r || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: Hc
};
hn(xs, {
  pluginName: "removeOnSpill"
});
fe.mount(new Sg());
fe.mount(xs, Ss);
function xg(e, t, n = {}) {
  let r;
  const { document: i = Eh, ...o } = n, a = {
    onUpdate: (f) => {
      Ag(t, f.oldIndex, f.newIndex, f);
    }
  }, u = () => {
    const f = typeof e == "string" ? i == null ? void 0 : i.querySelector(e) : pr(e);
    !f || r !== void 0 || (r = new fe(f, { ...a, ...o }));
  }, s = () => {
    r == null || r.destroy(), r = void 0;
  }, l = (f, p) => {
    if (p !== void 0)
      r == null || r.option(f, p);
    else
      return r == null ? void 0 : r.option(f);
  };
  return Sh(u), Cc(s), {
    stop: s,
    start: u,
    option: l
  };
}
function Eg(e, t, n) {
  const r = e.children[n];
  e.insertBefore(t, r);
}
function Og(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Ag(e, t, n, r = null) {
  r != null && (Og(r.item), Eg(r.from, r.item, t));
  const i = Uf(e), o = i ? [...cn(e)] : cn(e);
  if (n >= 0 && n < o.length) {
    const a = o.splice(t, 1)[0];
    tc(() => {
      o.splice(n, 0, a), i && (e.value = o);
    });
  }
}
var Fn = {}, Zo = {}, Nl;
function go() {
  return Nl || (Nl = 1, function(e) {
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
    var t = function(n) {
      n.readFileFromPath && (e.platformDeps.readFileFromPath = n.readFileFromPath), n.getRequestToken && (e.platformDeps.getRequestToken = n.getRequestToken), n.getDefaultAuth && (e.platformDeps.getDefaultAuth = n.getDefaultAuth), n.buildPlatformDependentConfig && (e.platformDeps.buildPlatformDependentConfig = n.buildPlatformDependentConfig), n.buildHeaders && (e.platformDeps.buildHeaders = n.buildHeaders), n.buildFormDataValue && (e.platformDeps.buildFormDataValue = n.buildFormDataValue), n.buildBaseUrl && (e.platformDeps.buildBaseUrl = n.buildBaseUrl), n.getVersion && (e.platformDeps.getVersion = n.getVersion);
    };
    e.injectPlatformDeps = t;
  }(Zo)), Zo;
}
var He = {}, tr = {}, Ml;
function Es() {
  if (Ml) return tr;
  Ml = 1;
  var e = tr.__extends || /* @__PURE__ */ function() {
    var n = function(r, i) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
        o.__proto__ = a;
      } || function(o, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
      }, n(r, i);
    };
    return function(r, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      n(r, i);
      function o() {
        this.constructor = r;
      }
      r.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
    };
  }();
  Object.defineProperty(tr, "__esModule", { value: !0 }), tr.UnsupportedPlatformError = void 0;
  var t = (
    /** @class */
    function(n) {
      e(r, n);
      function r(i) {
        var o = this, a = "This function is not supported in ".concat(i, " environment");
        return o = n.call(this, a) || this, Error.captureStackTrace && Error.captureStackTrace(o, r), o.name = "UnsupportedPlatformError", o.platform = i, Object.setPrototypeOf(o, r.prototype), o;
      }
      return r;
    }(Error)
  );
  return tr.UnsupportedPlatformError = t, tr;
}
var ea, jl;
function Dg() {
  if (jl) return ea;
  jl = 1;
  function e() {
    this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
    for (let t = 0; t < arguments.length; t++)
      this.define(arguments[t]);
    this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
  }
  return e.prototype.define = function(t, n) {
    for (let r in t) {
      let i = t[r].map(function(o) {
        return o.toLowerCase();
      });
      r = r.toLowerCase();
      for (let o = 0; o < i.length; o++) {
        const a = i[o];
        if (a[0] !== "*") {
          if (!n && a in this._types)
            throw new Error(
              'Attempt to change mapping for "' + a + '" extension from "' + this._types[a] + '" to "' + r + '". Pass `force=true` to allow this, otherwise remove "' + a + '" from the list of extensions for "' + r + '".'
            );
          this._types[a] = r;
        }
      }
      if (n || !this._extensions[r]) {
        const o = i[0];
        this._extensions[r] = o[0] !== "*" ? o : o.substr(1);
      }
    }
  }, e.prototype.getType = function(t) {
    t = String(t);
    let n = t.replace(/^.*[/\\]/, "").toLowerCase(), r = n.replace(/^.*\./, "").toLowerCase(), i = n.length < t.length;
    return (r.length < n.length - 1 || !i) && this._types[r] || null;
  }, e.prototype.getExtension = function(t) {
    return t = /^\s*([^;\s]*)/.test(t) && RegExp.$1, t && this._extensions[t.toLowerCase()] || null;
  }, ea = e, ea;
}
var ta, Fl;
function Cg() {
  return Fl || (Fl = 1, ta = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }), ta;
}
var na, Bl;
function Rg() {
  if (Bl) return na;
  Bl = 1;
  let e = Dg();
  return na = new e(Cg()), na;
}
const Tg = "@kintone/rest-api-client", Pg = "5.7.0", kg = { access: "public" }, Ig = { name: "Cybozu, Inc.", url: "https://cybozu.co.jp" }, $g = "Kintone REST API client for JavaScript", Ng = "lib/src/index.js", Mg = "esm/src/index.js", jg = "lib/src/index.browser.js", Fg = "lib/src/index.d.ts", Bg = { prebuild: "pnpm clean", build: "tsc --build --force", postbuild: "run-p build:*", lint: "eslint 'src/**/*.ts' --max-warnings 0", prepublishOnly: "run-p build:umd_*", test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest", "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand", "build:umd_dev": "rollup -c --environment BUILD:development", "build:umd_prod": "rollup -c --environment BUILD:production", clean: "rimraf lib esm umd", fix: "pnpm lint --fix", start: "pnpm build --watch" }, qg = { type: "git", url: "git+https://github.com/kintone/js-sdk.git", directory: "packages/rest-api-client" }, Lg = ["esm", "lib", "umd", "index.mjs"], Vg = ["kintone", "rest", "api-client"], Ug = "MIT", Wg = { url: "https://github.com/kintone/js-sdk/issues" }, Hg = "https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme", Gg = { node: ">=18" }, Kg = { "@rollup/plugin-babel": "^6.0.4", "@rollup/plugin-commonjs": "^26.0.3", "@rollup/plugin-json": "^6.1.0", "@rollup/plugin-node-resolve": "^15.3.1", "@rollup/plugin-terser": "^0.4.4", "@types/core-js": "^2.5.8", "@types/js-base64": "^3.3.1", "@types/mime": "^3.0.4", "@types/qs": "^6.9.17", rollup: "^4.30.1", "rollup-plugin-ecma-version-validator": "^0.2.13", "rollup-plugin-license": "^3.5.3", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-polyfill-node": "^0.13.0", webpack: "^5.97.1", "webpack-cli": "^5.1.4", "babel-loader": "^9.2.1", vite: "^5.4.11", rimraf: "^5.0.10", "cross-env": "^7.0.3" }, zg = { "core-js": "^3.39.0", axios: "^1.7.9", "form-data": "^4.0.1", "js-base64": "^3.7.7", mime: "^3.0.0", qs: "^6.12.3" }, Yg = { ".": { types: { import: "./esm/src/index.d.ts", require: "./lib/src/index.d.ts", default: "./lib/src/index.d.ts" }, node: { import: "./index.mjs", require: "./lib/src/index.js", default: "./lib/src/index.js" }, browser: "./lib/src/index.browser.js" }, "./package.json": "./package.json" }, Xg = {
  name: Tg,
  version: Pg,
  publishConfig: kg,
  author: Ig,
  description: $g,
  main: Ng,
  module: Mg,
  browser: jg,
  types: Fg,
  scripts: Bg,
  repository: qg,
  files: Lg,
  keywords: Vg,
  license: Ug,
  bugs: Wg,
  homepage: Hg,
  engines: Gg,
  devDependencies: Kg,
  dependencies: zg,
  exports: Yg
};
var ql;
function Jg() {
  if (ql) return He;
  ql = 1;
  var e = He.__awaiter || function(m, d, c, y) {
    function b(_) {
      return _ instanceof c ? _ : new c(function(S) {
        S(_);
      });
    }
    return new (c || (c = Promise))(function(_, S) {
      function C(I) {
        try {
          D(y.next(I));
        } catch (M) {
          S(M);
        }
      }
      function O(I) {
        try {
          D(y.throw(I));
        } catch (M) {
          S(M);
        }
      }
      function D(I) {
        I.done ? _(I.value) : b(I.value).then(C, O);
      }
      D((y = y.apply(m, d || [])).next());
    });
  }, t = He.__generator || function(m, d) {
    var c = { label: 0, sent: function() {
      if (_[0] & 1) throw _[1];
      return _[1];
    }, trys: [], ops: [] }, y, b, _, S = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return S.next = C(0), S.throw = C(1), S.return = C(2), typeof Symbol == "function" && (S[Symbol.iterator] = function() {
      return this;
    }), S;
    function C(D) {
      return function(I) {
        return O([D, I]);
      };
    }
    function O(D) {
      if (y) throw new TypeError("Generator is already executing.");
      for (; S && (S = 0, D[0] && (c = 0)), c; ) try {
        if (y = 1, b && (_ = D[0] & 2 ? b.return : D[0] ? b.throw || ((_ = b.return) && _.call(b), 0) : b.next) && !(_ = _.call(b, D[1])).done) return _;
        switch (b = 0, _ && (D = [D[0] & 2, _.value]), D[0]) {
          case 0:
          case 1:
            _ = D;
            break;
          case 4:
            return c.label++, { value: D[1], done: !1 };
          case 5:
            c.label++, b = D[1], D = [0];
            continue;
          case 7:
            D = c.ops.pop(), c.trys.pop();
            continue;
          default:
            if (_ = c.trys, !(_ = _.length > 0 && _[_.length - 1]) && (D[0] === 6 || D[0] === 2)) {
              c = 0;
              continue;
            }
            if (D[0] === 3 && (!_ || D[1] > _[0] && D[1] < _[3])) {
              c.label = D[1];
              break;
            }
            if (D[0] === 6 && c.label < _[1]) {
              c.label = _[1], _ = D;
              break;
            }
            if (_ && c.label < _[2]) {
              c.label = _[2], c.ops.push(D);
              break;
            }
            _[2] && c.ops.pop(), c.trys.pop();
            continue;
        }
        D = d.call(m, c);
      } catch (I) {
        D = [6, I], b = 0;
      } finally {
        y = _ = 0;
      }
      if (D[0] & 5) throw D[1];
      return { value: D[0] ? D[1] : void 0, done: !0 };
    }
  }, n = He.__importDefault || function(m) {
    return m && m.__esModule ? m : { default: m };
  };
  Object.defineProperty(He, "__esModule", { value: !0 }), He.getVersion = He.buildBaseUrl = He.buildFormDataValue = He.buildHeaders = He.buildPlatformDependentConfig = He.getDefaultAuth = He.getRequestToken = He.readFileFromPath = void 0;
  var r = Es(), i = n(Rg()), o = n(Xg), a = function(m) {
    throw new r.UnsupportedPlatformError("Browser");
  };
  He.readFileFromPath = a;
  var u = function() {
    return e(void 0, void 0, void 0, function() {
      var m, d;
      return t(this, function(c) {
        if (typeof kintone == "object" && kintone !== null && typeof kintone.getRequestToken == "function")
          return [2, kintone.getRequestToken()];
        if (typeof garoon == "object" && garoon !== null && typeof ((d = (m = garoon.connect) === null || m === void 0 ? void 0 : m.kintone) === null || d === void 0 ? void 0 : d.getRequestToken) == "function")
          return [2, garoon.connect.kintone.getRequestToken()];
        throw new Error("session authentication must specify a request token");
      });
    });
  };
  He.getRequestToken = u;
  var s = function() {
    return {
      type: "session"
    };
  };
  He.getDefaultAuth = s;
  var l = function() {
    return {};
  };
  He.buildPlatformDependentConfig = l;
  var f = function() {
    return {};
  };
  He.buildHeaders = f;
  var p = function(m, d) {
    var c = {};
    return d && (c.type = i.default.getType(d) || void 0), new Blob([m], c);
  };
  He.buildFormDataValue = p;
  var g = function(m) {
    if (m)
      return m;
    if (location === void 0)
      throw new Error("The baseUrl parameter is required for this environment");
    var d = location.host, c = location.protocol;
    return "".concat(c, "//").concat(d);
  };
  He.buildBaseUrl = g;
  var h = function() {
    return o.default.version;
  };
  return He.getVersion = h, He;
}
var nr = {}, xn = {}, rr = {}, $r = {}, Ll;
function Qg() {
  if (Ll) return $r;
  Ll = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.buildPath = void 0;
  var e = function(t) {
    var n = t.endpointName, r = t.guestSpaceId, i = t.preview, o = r !== void 0 ? "/guest/".concat(r) : "", a = i ? "/preview" : "";
    return "/k".concat(o, "/v1").concat(a, "/").concat(n, ".json");
  };
  return $r.buildPath = e, $r;
}
var Vl;
function Er() {
  if (Vl) return rr;
  Vl = 1;
  var e = rr.__assign || function() {
    return e = Object.assign || function(r) {
      for (var i, o = 1, a = arguments.length; o < a; o++) {
        i = arguments[o];
        for (var u in i) Object.prototype.hasOwnProperty.call(i, u) && (r[u] = i[u]);
      }
      return r;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(rr, "__esModule", { value: !0 }), rr.BaseClient = void 0;
  var t = Qg(), n = (
    /** @class */
    function() {
      function r(i, o) {
        this.client = i, this.guestSpaceId = o;
      }
      return r.prototype.buildPathWithGuestSpaceId = function(i) {
        return (0, t.buildPath)(e(e({}, i), { guestSpaceId: this.guestSpaceId }));
      }, r.prototype.buildPath = function(i) {
        return (0, t.buildPath)(i);
      }, r;
    }()
  );
  return rr.BaseClient = n, rr;
}
var Ul;
function Zg() {
  if (Ul) return xn;
  Ul = 1;
  var e = xn.__extends || /* @__PURE__ */ function() {
    var o = function(a, u) {
      return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
        s.__proto__ = l;
      } || function(s, l) {
        for (var f in l) Object.prototype.hasOwnProperty.call(l, f) && (s[f] = l[f]);
      }, o(a, u);
    };
    return function(a, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      o(a, u);
      function s() {
        this.constructor = a;
      }
      a.prototype = u === null ? Object.create(u) : (s.prototype = u.prototype, new s());
    };
  }(), t = xn.__assign || function() {
    return t = Object.assign || function(o) {
      for (var a, u = 1, s = arguments.length; u < s; u++) {
        a = arguments[u];
        for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (o[l] = a[l]);
      }
      return o;
    }, t.apply(this, arguments);
  }, n = xn.__rest || function(o, a) {
    var u = {};
    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && a.indexOf(s) < 0 && (u[s] = o[s]);
    if (o != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, s = Object.getOwnPropertySymbols(o); l < s.length; l++)
        a.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(o, s[l]) && (u[s[l]] = o[s[l]]);
    return u;
  };
  Object.defineProperty(xn, "__esModule", { value: !0 }), xn.BulkRequestClient = void 0;
  var r = Er(), i = (
    /** @class */
    function(o) {
      e(a, o);
      function a(u, s) {
        var l = o.call(this, u, s) || this;
        return l.REQUESTS_LENGTH_LIMIT = 20, l;
      }
      return a.prototype.send = function(u) {
        var s = this, l = u.requests, f = l.map(function(g) {
          if ("endpointName" in g) {
            var h = g.endpointName, m = n(g, ["endpointName"]);
            return t({ api: s.buildPathWithGuestSpaceId({ endpointName: h }) }, m);
          }
          return g;
        }), p = this.buildPathWithGuestSpaceId({
          endpointName: "bulkRequest"
        });
        return this.client.post(p, { requests: f });
      }, a;
    }(r.BaseClient)
  );
  return xn.BulkRequestClient = i, xn;
}
var Yt = {}, Wl;
function ev() {
  if (Wl) return Yt;
  Wl = 1;
  var e = Yt.__extends || /* @__PURE__ */ function() {
    var u = function(s, l) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, p) {
        f.__proto__ = p;
      } || function(f, p) {
        for (var g in p) Object.prototype.hasOwnProperty.call(p, g) && (f[g] = p[g]);
      }, u(s, l);
    };
    return function(s, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      u(s, l);
      function f() {
        this.constructor = s;
      }
      s.prototype = l === null ? Object.create(l) : (f.prototype = l.prototype, new f());
    };
  }(), t = Yt.__assign || function() {
    return t = Object.assign || function(u) {
      for (var s, l = 1, f = arguments.length; l < f; l++) {
        s = arguments[l];
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (u[p] = s[p]);
      }
      return u;
    }, t.apply(this, arguments);
  }, n = Yt.__awaiter || function(u, s, l, f) {
    function p(g) {
      return g instanceof l ? g : new l(function(h) {
        h(g);
      });
    }
    return new (l || (l = Promise))(function(g, h) {
      function m(y) {
        try {
          c(f.next(y));
        } catch (b) {
          h(b);
        }
      }
      function d(y) {
        try {
          c(f.throw(y));
        } catch (b) {
          h(b);
        }
      }
      function c(y) {
        y.done ? g(y.value) : p(y.value).then(m, d);
      }
      c((f = f.apply(u, s || [])).next());
    });
  }, r = Yt.__generator || function(u, s) {
    var l = { label: 0, sent: function() {
      if (g[0] & 1) throw g[1];
      return g[1];
    }, trys: [], ops: [] }, f, p, g, h = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return h.next = m(0), h.throw = m(1), h.return = m(2), typeof Symbol == "function" && (h[Symbol.iterator] = function() {
      return this;
    }), h;
    function m(c) {
      return function(y) {
        return d([c, y]);
      };
    }
    function d(c) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; h && (h = 0, c[0] && (l = 0)), l; ) try {
        if (f = 1, p && (g = c[0] & 2 ? p.return : c[0] ? p.throw || ((g = p.return) && g.call(p), 0) : p.next) && !(g = g.call(p, c[1])).done) return g;
        switch (p = 0, g && (c = [c[0] & 2, g.value]), c[0]) {
          case 0:
          case 1:
            g = c;
            break;
          case 4:
            return l.label++, { value: c[1], done: !1 };
          case 5:
            l.label++, p = c[1], c = [0];
            continue;
          case 7:
            c = l.ops.pop(), l.trys.pop();
            continue;
          default:
            if (g = l.trys, !(g = g.length > 0 && g[g.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              l = 0;
              continue;
            }
            if (c[0] === 3 && (!g || c[1] > g[0] && c[1] < g[3])) {
              l.label = c[1];
              break;
            }
            if (c[0] === 6 && l.label < g[1]) {
              l.label = g[1], g = c;
              break;
            }
            if (g && l.label < g[2]) {
              l.label = g[2], l.ops.push(c);
              break;
            }
            g[2] && l.ops.pop(), l.trys.pop();
            continue;
        }
        c = s.call(u, l);
      } catch (y) {
        c = [6, y], p = 0;
      } finally {
        f = g = 0;
      }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
  }, i = Yt.__rest || function(u, s) {
    var l = {};
    for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && s.indexOf(f) < 0 && (l[f] = u[f]);
    if (u != null && typeof Object.getOwnPropertySymbols == "function")
      for (var p = 0, f = Object.getOwnPropertySymbols(u); p < f.length; p++)
        s.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(u, f[p]) && (l[f[p]] = u[f[p]]);
    return l;
  };
  Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.AppClient = void 0;
  var o = Er(), a = (
    /** @class */
    function(u) {
      e(s, u);
      function s() {
        return u !== null && u.apply(this, arguments) || this;
      }
      return s.prototype.getFormFields = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: f
        });
        return this.client.get(g, t({}, p));
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
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: f
        });
        return this.client.get(g, t({}, p));
      }, s.prototype.updateFormLayout = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getViews = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: f
        });
        return this.client.get(g, p);
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
        return n(this, void 0, void 0, function() {
          var f, p, g, h, m;
          return r(this, function(d) {
            switch (d.label) {
              case 0:
                return f = l.name, p = l.space, g = this.buildPathWithGuestSpaceId({
                  endpointName: "app",
                  preview: !0
                }), p ? (h = this.buildPathWithGuestSpaceId({
                  endpointName: "space"
                }), [4, this.client.get(h, {
                  id: p
                })]) : [3, 2];
              case 1:
                return m = d.sent().defaultThread, [2, this.client.post(g, t(t({}, l), { thread: m }))];
              case 2:
                return [2, this.client.post(g, { name: f })];
            }
          });
        });
      }, s.prototype.getAppSettings = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: f
        });
        return this.client.get(g, p);
      }, s.prototype.updateAppSettings = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getProcessManagement = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: f
        });
        return this.client.get(g, p);
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
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: f
        });
        return this.client.get(g, t({}, p));
      }, s.prototype.updateFieldAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAppAcl = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: f
        });
        return this.client.get(g, t({}, p));
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
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: f
        });
        return this.client.get(g, t({}, p));
      }, s.prototype.updateRecordAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAppCustomize = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: f
        });
        return this.client.get(g, t({}, p));
      }, s.prototype.updateAppCustomize = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getGeneralNotifications = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: f
        });
        return this.client.get(g, t({}, p));
      }, s.prototype.updateGeneralNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getPerRecordNotifications = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: f
        });
        return this.client.get(g, p);
      }, s.prototype.updatePerRecordNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getReminderNotifications = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: f
        });
        return this.client.get(g, p);
      }, s.prototype.updateReminderNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getReports = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: f
        });
        return this.client.get(g, p);
      }, s.prototype.updateReports = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAppActions = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: f
        });
        return this.client.get(g, p);
      }, s.prototype.updateAppActions = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAdminNotes = function(l) {
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: f
        });
        return this.client.get(g, p);
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
        var f = l.preview, p = i(l, ["preview"]), g = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: f
        });
        return this.client.get(g, p);
      }, s.prototype.addPlugins = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: !0
        });
        return this.client.post(f, l);
      }, s;
    }(o.BaseClient)
  );
  return Yt.AppClient = a, Yt;
}
var Lt = {}, Nr = {}, ir = {}, Hl;
function tv() {
  if (Hl) return ir;
  Hl = 1;
  var e = ir.__extends || /* @__PURE__ */ function() {
    var n = function(r, i) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
        o.__proto__ = a;
      } || function(o, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
      }, n(r, i);
    };
    return function(r, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      n(r, i);
      function o() {
        this.constructor = r;
      }
      r.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
    };
  }();
  Object.defineProperty(ir, "__esModule", { value: !0 }), ir.KintoneAbortSearchError = void 0;
  var t = (
    /** @class */
    function(n) {
      e(r, n);
      function r(i) {
        var o = n.call(this, i) || this;
        return o.name = "KintoneAbortSearchError", o.message = i, Object.setPrototypeOf(o, r.prototype), o;
      }
      return r;
    }(Error)
  );
  return ir.KintoneAbortSearchError = t, ir;
}
var or = {}, Gl;
function nv() {
  if (Gl) return or;
  Gl = 1;
  var e = or.__extends || /* @__PURE__ */ function() {
    var n = function(r, i) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
        o.__proto__ = a;
      } || function(o, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
      }, n(r, i);
    };
    return function(r, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      n(r, i);
      function o() {
        this.constructor = r;
      }
      r.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
    };
  }();
  Object.defineProperty(or, "__esModule", { value: !0 }), or.KintoneAllRecordsError = void 0;
  var t = (
    /** @class */
    function(n) {
      e(r, n);
      function r(i, o, a, u, s) {
        var l = this, f = a - o.length, p = r.extractErrorIndex(f, u, s), g = r.buildErrorMessage(f, a, p);
        return l = n.call(this, g) || this, l.name = "KintoneAllRecordsError", l.processedRecordsResult = i, l.unprocessedRecords = o, l.error = u, l.errorIndex = p, l.message = g, l.numOfProcessedRecords = f, l.numOfAllRecords = a, Object.setPrototypeOf(l, r.prototype), l;
      }
      return r.parseErrorIndex = function(i) {
        var o = [];
        return Object.keys(i).forEach(function(a) {
          var u = a.match(/records\[(\d+)\]/);
          u && o.push(Number(u[1]));
        }), o.length > 0 ? Math.min.apply(Math, o) : null;
      }, r.extractErrorIndex = function(i, o, a) {
        if (o.bulkRequestIndex !== void 0 && o.errors) {
          var u = r.parseErrorIndex(o.errors);
          if (u !== null)
            return i + o.bulkRequestIndex * a + u;
        }
      }, r.buildErrorMessage = function(i, o, a) {
        var u = "";
        return a !== void 0 && (u = "An error occurred at records[".concat(a, "]. ")), u += "".concat(i, "/").concat(o, " records are processed successfully"), u;
      }, r;
    }(Error)
  );
  return or.KintoneAllRecordsError = t, or;
}
var ar = {}, Kl;
function rv() {
  if (Kl) return ar;
  Kl = 1;
  var e = ar.__extends || /* @__PURE__ */ function() {
    var n = function(r, i) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
        o.__proto__ = a;
      } || function(o, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
      }, n(r, i);
    };
    return function(r, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      n(r, i);
      function o() {
        this.constructor = r;
      }
      r.prototype = i === null ? Object.create(i) : (o.prototype = i.prototype, new o());
    };
  }();
  Object.defineProperty(ar, "__esModule", { value: !0 }), ar.KintoneRestAPIError = void 0;
  var t = (
    /** @class */
    function(n) {
      e(r, n);
      function r(i) {
        var o = this, a = r.buildErrorResponseDateWithIndex(i), u = a.data, s = a.bulkRequestIndex;
        return o = n.call(this, u.message) || this, o.name = "KintoneRestAPIError", o.id = u.id, o.code = u.code, o.errors = u.errors, o.status = i.status, o.bulkRequestIndex = s, o.headers = i.headers, o.message = "[".concat(i.status, "] [").concat(o.code, "] ").concat(o.message, " (").concat(o.id, ")"), Error.captureStackTrace && Error.captureStackTrace(o, r), Object.setPrototypeOf(o, r.prototype), o;
      }
      return r.findErrorResponseDataWithIndex = function(i) {
        for (var o = 0; o < i.length; o++)
          if (Object.keys(i[o]).length !== 0) {
            var a = i[o];
            return { data: a, bulkRequestIndex: o };
          }
        throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
      }, r.buildErrorResponseDateWithIndex = function(i) {
        return "results" in i.data ? r.findErrorResponseDataWithIndex(i.data.results) : { data: i.data };
      }, r;
    }(Error)
  );
  return ar.KintoneRestAPIError = t, ar;
}
var zl;
function Os() {
  return zl || (zl = 1, function(e) {
    var t = Nr.__createBinding || (Object.create ? function(r, i, o, a) {
      a === void 0 && (a = o);
      var u = Object.getOwnPropertyDescriptor(i, o);
      (!u || ("get" in u ? !i.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
        return i[o];
      } }), Object.defineProperty(r, a, u);
    } : function(r, i, o, a) {
      a === void 0 && (a = o), r[a] = i[o];
    }), n = Nr.__exportStar || function(r, i) {
      for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), n(tv(), e), n(nv(), e), n(rv(), e);
  }(Nr)), Nr;
}
var Yl;
function iv() {
  if (Yl) return Lt;
  Yl = 1;
  var e = Lt.__extends || /* @__PURE__ */ function() {
    var h = function(m, d) {
      return h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, y) {
        c.__proto__ = y;
      } || function(c, y) {
        for (var b in y) Object.prototype.hasOwnProperty.call(y, b) && (c[b] = y[b]);
      }, h(m, d);
    };
    return function(m, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
      h(m, d);
      function c() {
        this.constructor = m;
      }
      m.prototype = d === null ? Object.create(d) : (c.prototype = d.prototype, new c());
    };
  }(), t = Lt.__assign || function() {
    return t = Object.assign || function(h) {
      for (var m, d = 1, c = arguments.length; d < c; d++) {
        m = arguments[d];
        for (var y in m) Object.prototype.hasOwnProperty.call(m, y) && (h[y] = m[y]);
      }
      return h;
    }, t.apply(this, arguments);
  }, n = Lt.__awaiter || function(h, m, d, c) {
    function y(b) {
      return b instanceof d ? b : new d(function(_) {
        _(b);
      });
    }
    return new (d || (d = Promise))(function(b, _) {
      function S(D) {
        try {
          O(c.next(D));
        } catch (I) {
          _(I);
        }
      }
      function C(D) {
        try {
          O(c.throw(D));
        } catch (I) {
          _(I);
        }
      }
      function O(D) {
        D.done ? b(D.value) : y(D.value).then(S, C);
      }
      O((c = c.apply(h, m || [])).next());
    });
  }, r = Lt.__generator || function(h, m) {
    var d = { label: 0, sent: function() {
      if (b[0] & 1) throw b[1];
      return b[1];
    }, trys: [], ops: [] }, c, y, b, _ = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return _.next = S(0), _.throw = S(1), _.return = S(2), typeof Symbol == "function" && (_[Symbol.iterator] = function() {
      return this;
    }), _;
    function S(O) {
      return function(D) {
        return C([O, D]);
      };
    }
    function C(O) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; _ && (_ = 0, O[0] && (d = 0)), d; ) try {
        if (c = 1, y && (b = O[0] & 2 ? y.return : O[0] ? y.throw || ((b = y.return) && b.call(y), 0) : y.next) && !(b = b.call(y, O[1])).done) return b;
        switch (y = 0, b && (O = [O[0] & 2, b.value]), O[0]) {
          case 0:
          case 1:
            b = O;
            break;
          case 4:
            return d.label++, { value: O[1], done: !1 };
          case 5:
            d.label++, y = O[1], O = [0];
            continue;
          case 7:
            O = d.ops.pop(), d.trys.pop();
            continue;
          default:
            if (b = d.trys, !(b = b.length > 0 && b[b.length - 1]) && (O[0] === 6 || O[0] === 2)) {
              d = 0;
              continue;
            }
            if (O[0] === 3 && (!b || O[1] > b[0] && O[1] < b[3])) {
              d.label = O[1];
              break;
            }
            if (O[0] === 6 && d.label < b[1]) {
              d.label = b[1], b = O;
              break;
            }
            if (b && d.label < b[2]) {
              d.label = b[2], d.ops.push(O);
              break;
            }
            b[2] && d.ops.pop(), d.trys.pop();
            continue;
        }
        O = m.call(h, d);
      } catch (D) {
        O = [6, D], y = 0;
      } finally {
        c = b = 0;
      }
      if (O[0] & 5) throw O[1];
      return { value: O[0] ? O[1] : void 0, done: !0 };
    }
  }, i = Lt.__rest || function(h, m) {
    var d = {};
    for (var c in h) Object.prototype.hasOwnProperty.call(h, c) && m.indexOf(c) < 0 && (d[c] = h[c]);
    if (h != null && typeof Object.getOwnPropertySymbols == "function")
      for (var y = 0, c = Object.getOwnPropertySymbols(h); y < c.length; y++)
        m.indexOf(c[y]) < 0 && Object.prototype.propertyIsEnumerable.call(h, c[y]) && (d[c[y]] = h[c[y]]);
    return d;
  }, o = Lt.__spreadArray || function(h, m, d) {
    if (d || arguments.length === 2) for (var c = 0, y = m.length, b; c < y; c++)
      (b || !(c in m)) && (b || (b = Array.prototype.slice.call(m, 0, c)), b[c] = m[c]);
    return h.concat(b || Array.prototype.slice.call(m));
  };
  Object.defineProperty(Lt, "__esModule", { value: !0 }), Lt.RecordClient = void 0;
  var a = Os(), u = Er(), s = 100, l = 100, f = 100, p = 500, g = (
    /** @class */
    function(h) {
      e(m, h);
      function m(d, c, y) {
        var b = h.call(this, d, y) || this;
        return b.bulkRequestClient = c, b.didWarnMaximumOffsetValue = !1, b;
      }
      return m.prototype.getRecord = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.get(c, d);
      }, m.prototype.addRecord = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.post(c, d);
      }, m.prototype.updateRecord = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.put(c, d);
      }, m.prototype.upsertRecord = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b, _, S, C;
          return r(this, function(O) {
            switch (O.label) {
              case 0:
                return c = d.app, y = d.updateKey, b = d.record, [4, this.getRecords({
                  app: c,
                  query: "".concat(y.field, ' = "').concat(y.value, '"')
                })];
              case 1:
                return _ = O.sent().records, _.length > 0 ? _[0].$id.type !== "__ID__" ? [3, 3] : [4, this.updateRecord(d)] : [3, 4];
              case 2:
                return S = O.sent().revision, [2, { id: _[0].$id.value, revision: S }];
              case 3:
                throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
              case 4:
                return [2, this.addRecord({
                  app: c,
                  record: Object.assign({}, b, (C = {}, C[y.field] = { value: y.value }, C))
                })];
            }
          });
        });
      }, m.prototype.getRecords = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y;
          return r(this, function(b) {
            switch (b.label) {
              case 0:
                return c = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.get(c, d)];
              case 1:
                return y = b.sent(), this.warnMaximumOffsetValueIfNeeded(d.query), [2, y];
            }
          });
        });
      }, m.prototype.warnMaximumOffsetValueIfNeeded = function(d) {
        if (d) {
          var c = /offset\s+(\d+)/i, y = d.match(c);
          !this.didWarnMaximumOffsetValue && y && Number(y[1]) > 1e4 && (this.didWarnMaximumOffsetValue = !0, console.warn("Warning: The maximum offset value will be limited to 10,000 in the future. Please use `createCursor()` and `getRecordsByCursor()` instead."));
        }
      }, m.prototype.addRecords = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b, _;
          return r(this, function(S) {
            switch (S.label) {
              case 0:
                return c = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.post(c, d)];
              case 1:
                return y = S.sent(), b = y.ids, _ = y.revisions, [2, {
                  ids: b,
                  revisions: _,
                  records: b.map(function(C, O) {
                    return { id: C, revision: _[O] };
                  })
                }];
            }
          });
        });
      }, m.prototype.updateRecords = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.put(c, d);
      }, m.prototype.deleteRecords = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.delete(c, d);
      }, m.prototype.createCursor = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.post(c, d);
      }, m.prototype.getRecordsByCursor = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.get(c, d);
      }, m.prototype.deleteCursor = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.delete(c, d);
      }, m.prototype.getAllRecords = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b, _, S, C, O;
          return r(this, function(D) {
            return c = d.condition, y = d.orderBy, b = d.withCursor, _ = b === void 0 ? !0 : b, S = i(d, ["condition", "orderBy", "withCursor"]), y ? _ ? (C = c ? "".concat(c, " ") : "", O = "".concat(C).concat(y ? "order by ".concat(y) : ""), [2, this.getAllRecordsWithCursor(t(t({}, S), { query: O }))]) : [2, this.getAllRecordsWithOffset(t(t({}, S), { orderBy: y, condition: c }))] : [2, this.getAllRecordsWithId(t(t({}, S), { condition: c }))];
          });
        });
      }, m.prototype.getAllRecordsWithId = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b, _, S, C, O, D, I, M;
          return r(this, function(F) {
            switch (F.label) {
              case 0:
                c = d.fields, y = d.condition, b = i(d, ["fields", "condition"]), _ = c, _ && _.length > 0 && _.indexOf("$id") === -1 && (_ = o(o([], _, !0), ["$id"], !1)), S = y ? "(".concat(y, ") and ") : "", C = [], O = "0", F.label = 1;
              case 1:
                return D = "".concat(S, "$id > ").concat(O, " order by $id asc limit ").concat(p), [4, this.getRecords(t(t({}, b), { fields: _, query: D }))];
              case 2:
                if (I = F.sent(), C = C.concat(I.records), I.records.length < p)
                  return [3, 3];
                if (M = I.records[I.records.length - 1], M.$id.type === "__ID__")
                  O = M.$id.value;
                else
                  throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
                return [3, 1];
              case 3:
                return [2, C];
            }
          });
        });
      }, m.prototype.getAllRecordsWithOffset = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b, _, S, C, O, D;
          return r(this, function(I) {
            switch (I.label) {
              case 0:
                c = d.condition, y = d.orderBy, b = i(d, ["condition", "orderBy"]), _ = c ? "".concat(c, " ") : "", S = [], C = 0, I.label = 1;
              case 1:
                return O = "".concat(_).concat(y ? "order by ".concat(y, " ") : "", "limit ").concat(p, " offset ").concat(C), [4, this.getRecords(t(t({}, b), { query: O }))];
              case 2:
                return D = I.sent(), S = S.concat(D.records), D.records.length < p ? [3, 3] : (C += p, [3, 1]);
              case 3:
                return [2, S];
            }
          });
        });
      }, m.prototype.getAllRecordsWithCursor = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b, _;
          return r(this, function(S) {
            switch (S.label) {
              case 0:
                return [4, this.createCursor(d)];
              case 1:
                c = S.sent().id, S.label = 2;
              case 2:
                S.trys.push([2, 6, , 8]), y = [], S.label = 3;
              case 3:
                return [4, this.getRecordsByCursor({ id: c })];
              case 4:
                return b = S.sent(), y = y.concat(b.records), b.next ? [3, 3] : [3, 5];
              case 5:
                return [2, y];
              case 6:
                return _ = S.sent(), [4, this.deleteCursor({ id: c })];
              case 7:
                throw S.sent(), _;
              case 8:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, m.prototype.addAllRecords = function(d) {
        return n(this, void 0, void 0, function() {
          return r(this, function(c) {
            if (!d.records.every(function(y) {
              return !Array.isArray(y) && y instanceof Object;
            }))
              throw new Error("the `records` parameter must be an array of object.");
            return [2, this.addAllRecordsRecursive(d, d.records.length, [])];
          });
        });
      }, m.prototype.addAllRecordsRecursive = function(d, c, y) {
        return n(this, void 0, void 0, function() {
          var b, _, S, C, O, D;
          return r(this, function(I) {
            switch (I.label) {
              case 0:
                if (b = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * s, _ = d.app, S = d.records, C = S.slice(0, b), C.length === 0)
                  return [2, { records: y }];
                I.label = 1;
              case 1:
                return I.trys.push([1, 3, , 4]), [4, this.addAllRecordsWithBulkRequest({
                  app: _,
                  records: C
                })];
              case 2:
                return O = I.sent(), [3, 4];
              case 3:
                throw D = I.sent(), new a.KintoneAllRecordsError({ records: y }, S, c, D, s);
              case 4:
                return [2, this.addAllRecordsRecursive({
                  app: _,
                  records: S.slice(b)
                }, c, y.concat(O))];
            }
          });
        });
      }, m.prototype.addAllRecordsWithBulkRequest = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b;
          return r(this, function(_) {
            switch (_.label) {
              case 0:
                return c = this.separateArrayRecursive(s, [], d.records), y = c.map(function(S) {
                  return {
                    method: "POST",
                    endpointName: "records",
                    payload: {
                      app: d.app,
                      records: S
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: y })];
              case 1:
                return b = _.sent().results, [2, b.map(function(S) {
                  var C = S.ids, O = S.revisions;
                  return C.map(function(D, I) {
                    return { id: D, revision: O[I] };
                  });
                }).reduce(function(S, C) {
                  return S.concat(C);
                }, [])];
            }
          });
        });
      }, m.prototype.updateAllRecords = function(d) {
        return n(this, void 0, void 0, function() {
          return r(this, function(c) {
            return [2, this.updateAllRecordsRecursive(d, d.records.length, [])];
          });
        });
      }, m.prototype.updateAllRecordsRecursive = function(d, c, y) {
        return n(this, void 0, void 0, function() {
          var b, _, S, C, O, D, I;
          return r(this, function(M) {
            switch (M.label) {
              case 0:
                if (b = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * l, _ = d.app, S = d.upsert, C = d.records, O = C.slice(0, b), O.length === 0)
                  return [2, { records: y }];
                M.label = 1;
              case 1:
                return M.trys.push([1, 3, , 4]), [4, this.updateAllRecordsWithBulkRequest({
                  app: _,
                  upsert: S,
                  records: O
                })];
              case 2:
                return D = M.sent(), [3, 4];
              case 3:
                throw I = M.sent(), new a.KintoneAllRecordsError({ records: y }, C, c, I, l);
              case 4:
                return [2, this.updateAllRecordsRecursive({
                  app: _,
                  upsert: S,
                  records: C.slice(b)
                }, c, y.concat(D))];
            }
          });
        });
      }, m.prototype.updateAllRecordsWithBulkRequest = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b;
          return r(this, function(_) {
            switch (_.label) {
              case 0:
                return c = this.separateArrayRecursive(l, [], d.records), y = c.map(function(S) {
                  return {
                    method: "PUT",
                    endpointName: "records",
                    payload: {
                      app: d.app,
                      upsert: d.upsert,
                      records: S
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: y })];
              case 1:
                return b = _.sent().results, [2, b.map(function(S) {
                  return S.records;
                }).reduce(function(S, C) {
                  return S.concat(C);
                }, [])];
            }
          });
        });
      }, m.prototype.deleteAllRecords = function(d) {
        return this.deleteAllRecordsRecursive(d, d.records.length);
      }, m.prototype.deleteAllRecordsRecursive = function(d, c) {
        return n(this, void 0, void 0, function() {
          var y, b, _, S, C;
          return r(this, function(O) {
            switch (O.label) {
              case 0:
                if (y = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * f, b = d.app, _ = d.records, S = _.slice(0, y), S.length === 0)
                  return [2, {}];
                O.label = 1;
              case 1:
                return O.trys.push([1, 3, , 4]), [4, this.deleteAllRecordsWithBulkRequest({
                  app: b,
                  records: S
                })];
              case 2:
                return O.sent(), [3, 4];
              case 3:
                throw C = O.sent(), new a.KintoneAllRecordsError({}, _, c, C, f);
              case 4:
                return [2, this.deleteAllRecordsRecursive({
                  app: b,
                  records: _.slice(y)
                }, c)];
            }
          });
        });
      }, m.prototype.deleteAllRecordsWithBulkRequest = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y;
          return r(this, function(b) {
            switch (b.label) {
              case 0:
                return c = this.separateArrayRecursive(f, [], d.records), y = c.map(function(_) {
                  return {
                    method: "DELETE",
                    endpointName: "records",
                    payload: {
                      app: d.app,
                      ids: _.map(function(S) {
                        return S.id;
                      }),
                      revisions: _.map(function(S) {
                        return S.revision;
                      })
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: y })];
              case 1:
                return b.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, m.prototype.separateArrayRecursive = function(d, c, y) {
        var b = y.slice(0, d);
        return b.length === 0 ? c : this.separateArrayRecursive(d, o(o([], c, !0), [b], !1), y.slice(d));
      }, m.prototype.addRecordComment = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.post(c, d);
      }, m.prototype.deleteRecordComment = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.delete(c, d);
      }, m.prototype.getRecordComments = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/comments"
        });
        return this.client.get(c, d);
      }, m.prototype.updateRecordAssignees = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/assignees"
        });
        return this.client.put(c, d);
      }, m.prototype.updateRecordStatus = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/status"
        });
        return this.client.put(c, d);
      }, m.prototype.updateRecordsStatus = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/status"
        });
        return this.client.put(c, d);
      }, m;
    }(u.BaseClient)
  );
  return Lt.RecordClient = g, Lt;
}
var sr = {}, Xl;
function ov() {
  if (Xl) return sr;
  Xl = 1;
  var e = sr.__extends || /* @__PURE__ */ function() {
    var r = function(i, o) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
        a.__proto__ = u;
      } || function(a, u) {
        for (var s in u) Object.prototype.hasOwnProperty.call(u, s) && (a[s] = u[s]);
      }, r(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      r(i, o);
      function a() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
    };
  }();
  Object.defineProperty(sr, "__esModule", { value: !0 }), sr.SpaceClient = void 0;
  var t = Er(), n = (
    /** @class */
    function(r) {
      e(i, r);
      function i() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return i.prototype.getSpace = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.get(a, o);
      }, i.prototype.updateSpace = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.put(a, o);
      }, i.prototype.deleteSpace = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.delete(a, o);
      }, i.prototype.updateSpaceBody = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/body"
        });
        return this.client.put(a, o);
      }, i.prototype.getSpaceMembers = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.get(a, o);
      }, i.prototype.updateSpaceMembers = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.put(a, o);
      }, i.prototype.addThread = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.post(a, o);
      }, i.prototype.updateThread = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.put(a, o);
      }, i.prototype.addThreadComment = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread/comment"
        });
        return this.client.post(a, o);
      }, i.prototype.addGuests = function(o) {
        var a = this.buildPath({
          endpointName: "guests"
        });
        return this.client.post(a, o);
      }, i.prototype.deleteGuests = function(o) {
        var a = this.buildPath({
          endpointName: "guests"
        });
        return this.client.delete(a, o);
      }, i.prototype.updateSpaceGuests = function(o) {
        var a = this.buildPathWithGuestSpaceId({
          endpointName: "space/guests"
        });
        return this.client.put(a, o);
      }, i.prototype.addSpaceFromTemplate = function(o) {
        var a = this.buildPath({
          endpointName: "template/space"
        });
        return this.client.post(a, o);
      }, i;
    }(t.BaseClient)
  );
  return sr.SpaceClient = n, sr;
}
var an = {}, ra, Jl;
function Gc() {
  return Jl || (Jl = 1, ra = typeof self == "object" ? self.FormData : window.FormData), ra;
}
var Ql;
function av() {
  if (Ql) return an;
  Ql = 1;
  var e = an.__extends || /* @__PURE__ */ function() {
    var l = function(f, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, h) {
        g.__proto__ = h;
      } || function(g, h) {
        for (var m in h) Object.prototype.hasOwnProperty.call(h, m) && (g[m] = h[m]);
      }, l(f, p);
    };
    return function(f, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(f, p);
      function g() {
        this.constructor = f;
      }
      f.prototype = p === null ? Object.create(p) : (g.prototype = p.prototype, new g());
    };
  }(), t = an.__awaiter || function(l, f, p, g) {
    function h(m) {
      return m instanceof p ? m : new p(function(d) {
        d(m);
      });
    }
    return new (p || (p = Promise))(function(m, d) {
      function c(_) {
        try {
          b(g.next(_));
        } catch (S) {
          d(S);
        }
      }
      function y(_) {
        try {
          b(g.throw(_));
        } catch (S) {
          d(S);
        }
      }
      function b(_) {
        _.done ? m(_.value) : h(_.value).then(c, y);
      }
      b((g = g.apply(l, f || [])).next());
    });
  }, n = an.__generator || function(l, f) {
    var p = { label: 0, sent: function() {
      if (m[0] & 1) throw m[1];
      return m[1];
    }, trys: [], ops: [] }, g, h, m, d = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return d.next = c(0), d.throw = c(1), d.return = c(2), typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function c(b) {
      return function(_) {
        return y([b, _]);
      };
    }
    function y(b) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; d && (d = 0, b[0] && (p = 0)), p; ) try {
        if (g = 1, h && (m = b[0] & 2 ? h.return : b[0] ? h.throw || ((m = h.return) && m.call(h), 0) : h.next) && !(m = m.call(h, b[1])).done) return m;
        switch (h = 0, m && (b = [b[0] & 2, m.value]), b[0]) {
          case 0:
          case 1:
            m = b;
            break;
          case 4:
            return p.label++, { value: b[1], done: !1 };
          case 5:
            p.label++, h = b[1], b = [0];
            continue;
          case 7:
            b = p.ops.pop(), p.trys.pop();
            continue;
          default:
            if (m = p.trys, !(m = m.length > 0 && m[m.length - 1]) && (b[0] === 6 || b[0] === 2)) {
              p = 0;
              continue;
            }
            if (b[0] === 3 && (!m || b[1] > m[0] && b[1] < m[3])) {
              p.label = b[1];
              break;
            }
            if (b[0] === 6 && p.label < m[1]) {
              p.label = m[1], m = b;
              break;
            }
            if (m && p.label < m[2]) {
              p.label = m[2], p.ops.push(b);
              break;
            }
            m[2] && p.ops.pop(), p.trys.pop();
            continue;
        }
        b = f.call(l, p);
      } catch (_) {
        b = [6, _], h = 0;
      } finally {
        g = m = 0;
      }
      if (b[0] & 5) throw b[1];
      return { value: b[0] ? b[1] : void 0, done: !0 };
    }
  }, r = an.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(an, "__esModule", { value: !0 }), an.FileClient = void 0;
  var i = r(Gc()), o = go(), a = Es(), u = Er(), s = (
    /** @class */
    function(l) {
      e(f, l);
      function f() {
        return l !== null && l.apply(this, arguments) || this;
      }
      return f.prototype.uploadFile = function(p) {
        return t(this, void 0, void 0, function() {
          var g, h, m, d, _, c, y, b, _, S;
          return n(this, function(C) {
            switch (C.label) {
              case 0:
                if (g = this.buildPathWithGuestSpaceId({
                  endpointName: "file"
                }), h = new i.default(), !("path" in p.file)) return [3, 5];
                C.label = 1;
              case 1:
                return C.trys.push([1, 3, , 4]), [4, o.platformDeps.readFileFromPath(p.file.path)];
              case 2:
                return m = C.sent(), d = m.name, _ = m.data, h.append("file", _, d), [3, 4];
              case 3:
                throw c = C.sent(), c instanceof a.UnsupportedPlatformError ? new Error("uploadFile doesn't allow to accept a file path in ".concat(c.platform, " environment.")) : c;
              case 4:
                return [3, 6];
              case 5:
                y = p.file, b = y.name, _ = y.data, S = o.platformDeps.buildFormDataValue(_, b), h.append("file", S, b), C.label = 6;
              case 6:
                return [2, this.client.postData(g, h)];
            }
          });
        });
      }, f.prototype.downloadFile = function(p) {
        var g = this.buildPathWithGuestSpaceId({
          endpointName: "file"
        });
        return this.client.getData(g, p);
      }, f;
    }(u.BaseClient)
  );
  return an.FileClient = s, an;
}
var lr = {}, Zl;
function sv() {
  if (Zl) return lr;
  Zl = 1;
  var e = lr.__extends || /* @__PURE__ */ function() {
    var r = function(i, o) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
        a.__proto__ = u;
      } || function(a, u) {
        for (var s in u) Object.prototype.hasOwnProperty.call(u, s) && (a[s] = u[s]);
      }, r(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      r(i, o);
      function a() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
    };
  }();
  Object.defineProperty(lr, "__esModule", { value: !0 }), lr.PluginClient = void 0;
  var t = Er(), n = (
    /** @class */
    function(r) {
      e(i, r);
      function i() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return i.prototype.getPlugins = function(o) {
        var a = this.buildPath({ endpointName: "plugins" });
        return this.client.get(a, o);
      }, i.prototype.getRequiredPlugins = function(o) {
        var a = this.buildPath({ endpointName: "plugins/required" });
        return this.client.get(a, o);
      }, i.prototype.getApps = function(o) {
        var a = this.buildPath({ endpointName: "plugin/apps" });
        return this.client.get(a, o);
      }, i.prototype.updatePlugin = function(o) {
        var a = this.buildPath({ endpointName: "plugin" });
        return this.client.put(a, o);
      }, i.prototype.installPlugin = function(o) {
        var a = this.buildPath({ endpointName: "plugin" });
        return this.client.post(a, o);
      }, i.prototype.uninstallPlugin = function(o) {
        var a = this.buildPath({ endpointName: "plugin" });
        return this.client.delete(a, o);
      }, i;
    }(t.BaseClient)
  );
  return lr.PluginClient = n, lr;
}
var ia = {}, sn = {}, oa, eu;
function lv() {
  if (eu) return oa;
  eu = 1;
  function e(v, w) {
    return function() {
      return v.apply(w, arguments);
    };
  }
  const { toString: t } = Object.prototype, { getPrototypeOf: n } = Object, r = /* @__PURE__ */ ((v) => (w) => {
    const x = t.call(w);
    return v[x] || (v[x] = x.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), i = (v) => (v = v.toLowerCase(), (w) => r(w) === v), o = (v) => (w) => typeof w === v, { isArray: a } = Array, u = o("undefined");
  function s(v) {
    return v !== null && !u(v) && v.constructor !== null && !u(v.constructor) && g(v.constructor.isBuffer) && v.constructor.isBuffer(v);
  }
  const l = i("ArrayBuffer");
  function f(v) {
    let w;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? w = ArrayBuffer.isView(v) : w = v && v.buffer && l(v.buffer), w;
  }
  const p = o("string"), g = o("function"), h = o("number"), m = (v) => v !== null && typeof v == "object", d = (v) => v === !0 || v === !1, c = (v) => {
    if (r(v) !== "object")
      return !1;
    const w = n(v);
    return (w === null || w === Object.prototype || Object.getPrototypeOf(w) === null) && !(Symbol.toStringTag in v) && !(Symbol.iterator in v);
  }, y = i("Date"), b = i("File"), _ = i("Blob"), S = i("FileList"), C = (v) => m(v) && g(v.pipe), O = (v) => {
    let w;
    return v && (typeof FormData == "function" && v instanceof FormData || g(v.append) && ((w = r(v)) === "formdata" || // detect form-data instance
    w === "object" && g(v.toString) && v.toString() === "[object FormData]"));
  }, D = i("URLSearchParams"), [I, M, F, B] = ["ReadableStream", "Request", "Response", "Headers"].map(i), H = (v) => v.trim ? v.trim() : v.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function te(v, w, { allOwnKeys: x = !1 } = {}) {
    if (v === null || typeof v > "u")
      return;
    let E, A;
    if (typeof v != "object" && (v = [v]), a(v))
      for (E = 0, A = v.length; E < A; E++)
        w.call(null, v[E], E, v);
    else {
      const R = x ? Object.getOwnPropertyNames(v) : Object.keys(v), T = R.length;
      let U;
      for (E = 0; E < T; E++)
        U = R[E], w.call(null, v[U], U, v);
    }
  }
  function W(v, w) {
    w = w.toLowerCase();
    const x = Object.keys(v);
    let E = x.length, A;
    for (; E-- > 0; )
      if (A = x[E], w === A.toLowerCase())
        return A;
    return null;
  }
  const q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ei, L = (v) => !u(v) && v !== q;
  function X() {
    const { caseless: v } = L(this) && this || {}, w = {}, x = (E, A) => {
      const R = v && W(w, A) || A;
      c(w[R]) && c(E) ? w[R] = X(w[R], E) : c(E) ? w[R] = X({}, E) : a(E) ? w[R] = E.slice() : w[R] = E;
    };
    for (let E = 0, A = arguments.length; E < A; E++)
      arguments[E] && te(arguments[E], x);
    return w;
  }
  const j = (v, w, x, { allOwnKeys: E } = {}) => (te(w, (A, R) => {
    x && g(A) ? v[R] = e(A, x) : v[R] = A;
  }, { allOwnKeys: E }), v), ee = (v) => (v.charCodeAt(0) === 65279 && (v = v.slice(1)), v), re = (v, w, x, E) => {
    v.prototype = Object.create(w.prototype, E), v.prototype.constructor = v, Object.defineProperty(v, "super", {
      value: w.prototype
    }), x && Object.assign(v.prototype, x);
  }, de = (v, w, x, E) => {
    let A, R, T;
    const U = {};
    if (w = w || {}, v == null) return w;
    do {
      for (A = Object.getOwnPropertyNames(v), R = A.length; R-- > 0; )
        T = A[R], (!E || E(T, v, w)) && !U[T] && (w[T] = v[T], U[T] = !0);
      v = x !== !1 && n(v);
    } while (v && (!x || x(v, w)) && v !== Object.prototype);
    return w;
  }, ye = (v, w, x) => {
    v = String(v), (x === void 0 || x > v.length) && (x = v.length), x -= w.length;
    const E = v.indexOf(w, x);
    return E !== -1 && E === x;
  }, ke = (v) => {
    if (!v) return null;
    if (a(v)) return v;
    let w = v.length;
    if (!h(w)) return null;
    const x = new Array(w);
    for (; w-- > 0; )
      x[w] = v[w];
    return x;
  }, Re = /* @__PURE__ */ ((v) => (w) => v && w instanceof v)(typeof Uint8Array < "u" && n(Uint8Array)), N = (v, w) => {
    const E = (v && v[Symbol.iterator]).call(v);
    let A;
    for (; (A = E.next()) && !A.done; ) {
      const R = A.value;
      w.call(v, R[0], R[1]);
    }
  }, z = (v, w) => {
    let x;
    const E = [];
    for (; (x = v.exec(w)) !== null; )
      E.push(x);
    return E;
  }, Se = i("HTMLFormElement"), Ne = (v) => v.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function(x, E, A) {
      return E.toUpperCase() + A;
    }
  ), xe = (({ hasOwnProperty: v }) => (w, x) => v.call(w, x))(Object.prototype), ne = i("RegExp"), _e = (v, w) => {
    const x = Object.getOwnPropertyDescriptors(v), E = {};
    te(x, (A, R) => {
      let T;
      (T = w(A, R, v)) !== !1 && (E[R] = T || A);
    }), Object.defineProperties(v, E);
  }, be = (v) => {
    _e(v, (w, x) => {
      if (g(v) && ["arguments", "caller", "callee"].indexOf(x) !== -1)
        return !1;
      const E = v[x];
      if (g(E)) {
        if (w.enumerable = !1, "writable" in w) {
          w.writable = !1;
          return;
        }
        w.set || (w.set = () => {
          throw Error("Can not rewrite read-only method '" + x + "'");
        });
      }
    });
  }, Fe = (v, w) => {
    const x = {}, E = (A) => {
      A.forEach((R) => {
        x[R] = !0;
      });
    };
    return a(v) ? E(v) : E(String(v).split(w)), x;
  }, lt = () => {
  }, _t = (v, w) => v != null && Number.isFinite(v = +v) ? v : w, Qe = "abcdefghijklmnopqrstuvwxyz", ft = "0123456789", vt = {
    DIGIT: ft,
    ALPHA: Qe,
    ALPHA_DIGIT: Qe + Qe.toUpperCase() + ft
  }, vn = (v = 16, w = vt.ALPHA_DIGIT) => {
    let x = "";
    const { length: E } = w;
    for (; v--; )
      x += w[Math.random() * E | 0];
    return x;
  };
  function Ut(v) {
    return !!(v && g(v.append) && v[Symbol.toStringTag] === "FormData" && v[Symbol.iterator]);
  }
  const Ct = (v) => {
    const w = new Array(10), x = (E, A) => {
      if (m(E)) {
        if (w.indexOf(E) >= 0)
          return;
        if (!("toJSON" in E)) {
          w[A] = E;
          const R = a(E) ? [] : {};
          return te(E, (T, U) => {
            const ie = x(T, A + 1);
            !u(ie) && (R[U] = ie);
          }), w[A] = void 0, R;
        }
      }
      return E;
    };
    return x(v, 0);
  }, yn = i("AsyncFunction"), bn = (v) => v && (m(v) || g(v)) && g(v.then) && g(v.catch), nn = ((v, w) => v ? setImmediate : w ? ((x, E) => (q.addEventListener("message", ({ source: A, data: R }) => {
    A === q && R === x && E.length && E.shift()();
  }, !1), (A) => {
    E.push(A), q.postMessage(x, "*");
  }))(`axios@${Math.random()}`, []) : (x) => setTimeout(x))(
    typeof setImmediate == "function",
    g(q.postMessage)
  ), bo = typeof queueMicrotask < "u" ? queueMicrotask.bind(q) : typeof process < "u" && process.nextTick || nn;
  var $ = {
    isArray: a,
    isArrayBuffer: l,
    isBuffer: s,
    isFormData: O,
    isArrayBufferView: f,
    isString: p,
    isNumber: h,
    isBoolean: d,
    isObject: m,
    isPlainObject: c,
    isReadableStream: I,
    isRequest: M,
    isResponse: F,
    isHeaders: B,
    isUndefined: u,
    isDate: y,
    isFile: b,
    isBlob: _,
    isRegExp: ne,
    isFunction: g,
    isStream: C,
    isURLSearchParams: D,
    isTypedArray: Re,
    isFileList: S,
    forEach: te,
    merge: X,
    extend: j,
    trim: H,
    stripBOM: ee,
    inherits: re,
    toFlatObject: de,
    kindOf: r,
    kindOfTest: i,
    endsWith: ye,
    toArray: ke,
    forEachEntry: N,
    matchAll: z,
    isHTMLForm: Se,
    hasOwnProperty: xe,
    hasOwnProp: xe,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: _e,
    freezeMethods: be,
    toObjectSet: Fe,
    toCamelCase: Ne,
    noop: lt,
    toFiniteNumber: _t,
    findKey: W,
    global: q,
    isContextDefined: L,
    ALPHABET: vt,
    generateString: vn,
    isSpecCompliantForm: Ut,
    toJSONObject: Ct,
    isAsyncFn: yn,
    isThenable: bn,
    setImmediate: nn,
    asap: bo
  };
  function pe(v, w, x, E, A) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = v, this.name = "AxiosError", w && (this.code = w), x && (this.config = x), E && (this.request = E), A && (this.response = A, this.status = A.status ? A.status : null);
  }
  $.inherits(pe, Error, {
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
  const ai = pe.prototype, wn = {};
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
  ].forEach((v) => {
    wn[v] = { value: v };
  }), Object.defineProperties(pe, wn), Object.defineProperty(ai, "isAxiosError", { value: !0 }), pe.from = (v, w, x, E, A, R) => {
    const T = Object.create(ai);
    return $.toFlatObject(v, T, function(ie) {
      return ie !== Error.prototype;
    }, (U) => U !== "isAxiosError"), pe.call(T, v.message, w, x, E, A), T.cause = v, T.name = v.name, R && Object.assign(T, R), T;
  };
  var Ar = null;
  function Vn(v) {
    return $.isPlainObject(v) || $.isArray(v);
  }
  function si(v) {
    return $.endsWith(v, "[]") ? v.slice(0, -2) : v;
  }
  function li(v, w, x) {
    return v ? v.concat(w).map(function(A, R) {
      return A = si(A), !x && R ? "[" + A + "]" : A;
    }).join(x ? "." : "") : w;
  }
  function Dr(v) {
    return $.isArray(v) && !v.some(Vn);
  }
  const Un = $.toFlatObject($, {}, null, function(w) {
    return /^is[A-Z]/.test(w);
  });
  function P(v, w, x) {
    if (!$.isObject(v))
      throw new TypeError("target must be an object");
    w = w || new FormData(), x = $.toFlatObject(x, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(ve, se) {
      return !$.isUndefined(se[ve]);
    });
    const E = x.metaTokens, A = x.visitor || Q, R = x.dots, T = x.indexes, ie = (x.Blob || typeof Blob < "u" && Blob) && $.isSpecCompliantForm(w);
    if (!$.isFunction(A))
      throw new TypeError("visitor must be a function");
    function J(ae) {
      if (ae === null) return "";
      if ($.isDate(ae))
        return ae.toISOString();
      if (!ie && $.isBlob(ae))
        throw new pe("Blob is not supported. Use a Buffer instead.");
      return $.isArrayBuffer(ae) || $.isTypedArray(ae) ? ie && typeof Blob == "function" ? new Blob([ae]) : Buffer.from(ae) : ae;
    }
    function Q(ae, ve, se) {
      let Je = ae;
      if (ae && !se && typeof ae == "object") {
        if ($.endsWith(ve, "{}"))
          ve = E ? ve : ve.slice(0, -2), ae = JSON.stringify(ae);
        else if ($.isArray(ae) && Dr(ae) || ($.isFileList(ae) || $.endsWith(ve, "[]")) && (Je = $.toArray(ae)))
          return ve = si(ve), Je.forEach(function(ut, on) {
            !($.isUndefined(ut) || ut === null) && w.append(
              // eslint-disable-next-line no-nested-ternary
              T === !0 ? li([ve], on, R) : T === null ? ve : ve + "[]",
              J(ut)
            );
          }), !1;
      }
      return Vn(ae) ? !0 : (w.append(li(se, ve, R), J(ae)), !1);
    }
    const oe = [], Be = Object.assign(Un, {
      defaultVisitor: Q,
      convertValue: J,
      isVisitable: Vn
    });
    function ot(ae, ve) {
      if (!$.isUndefined(ae)) {
        if (oe.indexOf(ae) !== -1)
          throw Error("Circular reference detected in " + ve.join("."));
        oe.push(ae), $.forEach(ae, function(Je, at) {
          (!($.isUndefined(Je) || Je === null) && A.call(
            w,
            Je,
            $.isString(at) ? at.trim() : at,
            ve,
            Be
          )) === !0 && ot(Je, ve ? ve.concat(at) : [at]);
        }), oe.pop();
      }
    }
    if (!$.isObject(v))
      throw new TypeError("data must be an object");
    return ot(v), w;
  }
  function k(v) {
    const w = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(v).replace(/[!'()~]|%20|%00/g, function(E) {
      return w[E];
    });
  }
  function Ae(v, w) {
    this._pairs = [], v && P(v, this, w);
  }
  const Me = Ae.prototype;
  Me.append = function(w, x) {
    this._pairs.push([w, x]);
  }, Me.toString = function(w) {
    const x = w ? function(E) {
      return w.call(this, E, k);
    } : k;
    return this._pairs.map(function(A) {
      return x(A[0]) + "=" + x(A[1]);
    }, "").join("&");
  };
  function je(v) {
    return encodeURIComponent(v).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function me(v, w, x) {
    if (!w)
      return v;
    const E = x && x.encode || je;
    $.isFunction(x) && (x = {
      serialize: x
    });
    const A = x && x.serialize;
    let R;
    if (A ? R = A(w, x) : R = $.isURLSearchParams(w) ? w.toString() : new Ae(w, x).toString(E), R) {
      const T = v.indexOf("#");
      T !== -1 && (v = v.slice(0, T)), v += (v.indexOf("?") === -1 ? "?" : "&") + R;
    }
    return v;
  }
  class Wt {
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
    use(w, x, E) {
      return this.handlers.push({
        fulfilled: w,
        rejected: x,
        synchronous: E ? E.synchronous : !1,
        runWhen: E ? E.runWhen : null
      }), this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
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
      $.forEach(this.handlers, function(E) {
        E !== null && w(E);
      });
    }
  }
  var Ht = Wt, ht = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }, Gt = typeof URLSearchParams < "u" ? URLSearchParams : Ae, Cr = typeof FormData < "u" ? FormData : null, _n = typeof Blob < "u" ? Blob : null, Rt = {
    isBrowser: !0,
    classes: {
      URLSearchParams: Gt,
      FormData: Cr,
      Blob: _n
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const Wn = typeof window < "u" && typeof document < "u", Hn = typeof navigator == "object" && navigator || void 0, ui = Wn && (!Hn || ["ReactNative", "NativeScript", "NS"].indexOf(Hn.product) < 0), Tn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Rr = Wn && window.location.href || "http://localhost";
  var Gn = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    hasBrowserEnv: Wn,
    hasStandardBrowserWebWorkerEnv: Tn,
    hasStandardBrowserEnv: ui,
    navigator: Hn,
    origin: Rr
  }), Ze = {
    ...Gn,
    ...Rt
  };
  function Tr(v, w) {
    return P(v, new Ze.classes.URLSearchParams(), Object.assign({
      visitor: function(x, E, A, R) {
        return Ze.isNode && $.isBuffer(x) ? (this.append(E, x.toString("base64")), !1) : R.defaultVisitor.apply(this, arguments);
      }
    }, w));
  }
  function ci(v) {
    return $.matchAll(/\w+|\[(\w*)]/g, v).map((w) => w[0] === "[]" ? "" : w[1] || w[0]);
  }
  function fi(v) {
    const w = {}, x = Object.keys(v);
    let E;
    const A = x.length;
    let R;
    for (E = 0; E < A; E++)
      R = x[E], w[R] = v[R];
    return w;
  }
  function Kn(v) {
    function w(x, E, A, R) {
      let T = x[R++];
      if (T === "__proto__") return !0;
      const U = Number.isFinite(+T), ie = R >= x.length;
      return T = !T && $.isArray(A) ? A.length : T, ie ? ($.hasOwnProp(A, T) ? A[T] = [A[T], E] : A[T] = E, !U) : ((!A[T] || !$.isObject(A[T])) && (A[T] = []), w(x, E, A[T], R) && $.isArray(A[T]) && (A[T] = fi(A[T])), !U);
    }
    if ($.isFormData(v) && $.isFunction(v.entries)) {
      const x = {};
      return $.forEachEntry(v, (E, A) => {
        w(ci(E), A, x, 0);
      }), x;
    }
    return null;
  }
  function di(v, w, x) {
    if ($.isString(v))
      try {
        return (w || JSON.parse)(v), $.trim(v);
      } catch (E) {
        if (E.name !== "SyntaxError")
          throw E;
      }
    return (0, JSON.stringify)(v);
  }
  const Pn = {
    transitional: ht,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(w, x) {
      const E = x.getContentType() || "", A = E.indexOf("application/json") > -1, R = $.isObject(w);
      if (R && $.isHTMLForm(w) && (w = new FormData(w)), $.isFormData(w))
        return A ? JSON.stringify(Kn(w)) : w;
      if ($.isArrayBuffer(w) || $.isBuffer(w) || $.isStream(w) || $.isFile(w) || $.isBlob(w) || $.isReadableStream(w))
        return w;
      if ($.isArrayBufferView(w))
        return w.buffer;
      if ($.isURLSearchParams(w))
        return x.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), w.toString();
      let U;
      if (R) {
        if (E.indexOf("application/x-www-form-urlencoded") > -1)
          return Tr(w, this.formSerializer).toString();
        if ((U = $.isFileList(w)) || E.indexOf("multipart/form-data") > -1) {
          const ie = this.env && this.env.FormData;
          return P(
            U ? { "files[]": w } : w,
            ie && new ie(),
            this.formSerializer
          );
        }
      }
      return R || A ? (x.setContentType("application/json", !1), di(w)) : w;
    }],
    transformResponse: [function(w) {
      const x = this.transitional || Pn.transitional, E = x && x.forcedJSONParsing, A = this.responseType === "json";
      if ($.isResponse(w) || $.isReadableStream(w))
        return w;
      if (w && $.isString(w) && (E && !this.responseType || A)) {
        const T = !(x && x.silentJSONParsing) && A;
        try {
          return JSON.parse(w);
        } catch (U) {
          if (T)
            throw U.name === "SyntaxError" ? pe.from(U, pe.ERR_BAD_RESPONSE, this, null, this.response) : U;
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
      FormData: Ze.classes.FormData,
      Blob: Ze.classes.Blob
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
  $.forEach(["delete", "get", "head", "post", "put", "patch"], (v) => {
    Pn.headers[v] = {};
  });
  var zn = Pn;
  const wo = $.toObjectSet([
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
  var Pr = (v) => {
    const w = {};
    let x, E, A;
    return v && v.split(`
`).forEach(function(T) {
      A = T.indexOf(":"), x = T.substring(0, A).trim().toLowerCase(), E = T.substring(A + 1).trim(), !(!x || w[x] && wo[x]) && (x === "set-cookie" ? w[x] ? w[x].push(E) : w[x] = [E] : w[x] = w[x] ? w[x] + ", " + E : E);
    }), w;
  };
  const rn = Symbol("internals");
  function Kt(v) {
    return v && String(v).trim().toLowerCase();
  }
  function Yn(v) {
    return v === !1 || v == null ? v : $.isArray(v) ? v.map(Yn) : String(v);
  }
  function pi(v) {
    const w = /* @__PURE__ */ Object.create(null), x = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let E;
    for (; E = x.exec(v); )
      w[E[1]] = E[2];
    return w;
  }
  const nf = (v) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(v.trim());
  function _o(v, w, x, E, A) {
    if ($.isFunction(E))
      return E.call(this, w, x);
    if (A && (w = x), !!$.isString(w)) {
      if ($.isString(E))
        return w.indexOf(E) !== -1;
      if ($.isRegExp(E))
        return E.test(w);
    }
  }
  function rf(v) {
    return v.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, x, E) => x.toUpperCase() + E);
  }
  function of(v, w) {
    const x = $.toCamelCase(" " + w);
    ["get", "set", "has"].forEach((E) => {
      Object.defineProperty(v, E + x, {
        value: function(A, R, T) {
          return this[E].call(this, w, A, R, T);
        },
        configurable: !0
      });
    });
  }
  class hi {
    constructor(w) {
      w && this.set(w);
    }
    set(w, x, E) {
      const A = this;
      function R(U, ie, J) {
        const Q = Kt(ie);
        if (!Q)
          throw new Error("header name must be a non-empty string");
        const oe = $.findKey(A, Q);
        (!oe || A[oe] === void 0 || J === !0 || J === void 0 && A[oe] !== !1) && (A[oe || ie] = Yn(U));
      }
      const T = (U, ie) => $.forEach(U, (J, Q) => R(J, Q, ie));
      if ($.isPlainObject(w) || w instanceof this.constructor)
        T(w, x);
      else if ($.isString(w) && (w = w.trim()) && !nf(w))
        T(Pr(w), x);
      else if ($.isHeaders(w))
        for (const [U, ie] of w.entries())
          R(ie, U, E);
      else
        w != null && R(x, w, E);
      return this;
    }
    get(w, x) {
      if (w = Kt(w), w) {
        const E = $.findKey(this, w);
        if (E) {
          const A = this[E];
          if (!x)
            return A;
          if (x === !0)
            return pi(A);
          if ($.isFunction(x))
            return x.call(this, A, E);
          if ($.isRegExp(x))
            return x.exec(A);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(w, x) {
      if (w = Kt(w), w) {
        const E = $.findKey(this, w);
        return !!(E && this[E] !== void 0 && (!x || _o(this, this[E], E, x)));
      }
      return !1;
    }
    delete(w, x) {
      const E = this;
      let A = !1;
      function R(T) {
        if (T = Kt(T), T) {
          const U = $.findKey(E, T);
          U && (!x || _o(E, E[U], U, x)) && (delete E[U], A = !0);
        }
      }
      return $.isArray(w) ? w.forEach(R) : R(w), A;
    }
    clear(w) {
      const x = Object.keys(this);
      let E = x.length, A = !1;
      for (; E--; ) {
        const R = x[E];
        (!w || _o(this, this[R], R, w, !0)) && (delete this[R], A = !0);
      }
      return A;
    }
    normalize(w) {
      const x = this, E = {};
      return $.forEach(this, (A, R) => {
        const T = $.findKey(E, R);
        if (T) {
          x[T] = Yn(A), delete x[R];
          return;
        }
        const U = w ? rf(R) : String(R).trim();
        U !== R && delete x[R], x[U] = Yn(A), E[U] = !0;
      }), this;
    }
    concat(...w) {
      return this.constructor.concat(this, ...w);
    }
    toJSON(w) {
      const x = /* @__PURE__ */ Object.create(null);
      return $.forEach(this, (E, A) => {
        E != null && E !== !1 && (x[A] = w && $.isArray(E) ? E.join(", ") : E);
      }), x;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([w, x]) => w + ": " + x).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(w) {
      return w instanceof this ? w : new this(w);
    }
    static concat(w, ...x) {
      const E = new this(w);
      return x.forEach((A) => E.set(A)), E;
    }
    static accessor(w) {
      const E = (this[rn] = this[rn] = {
        accessors: {}
      }).accessors, A = this.prototype;
      function R(T) {
        const U = Kt(T);
        E[U] || (of(A, T), E[U] = !0);
      }
      return $.isArray(w) ? w.forEach(R) : R(w), this;
    }
  }
  hi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), $.reduceDescriptors(hi.prototype, ({ value: v }, w) => {
    let x = w[0].toUpperCase() + w.slice(1);
    return {
      get: () => v,
      set(E) {
        this[x] = E;
      }
    };
  }), $.freezeMethods(hi);
  var Ft = hi;
  function So(v, w) {
    const x = this || zn, E = w || x, A = Ft.from(E.headers);
    let R = E.data;
    return $.forEach(v, function(U) {
      R = U.call(x, R, A.normalize(), w ? w.status : void 0);
    }), A.normalize(), R;
  }
  function Rs(v) {
    return !!(v && v.__CANCEL__);
  }
  function Xn(v, w, x) {
    pe.call(this, v ?? "canceled", pe.ERR_CANCELED, w, x), this.name = "CanceledError";
  }
  $.inherits(Xn, pe, {
    __CANCEL__: !0
  });
  function Ts(v, w, x) {
    const E = x.config.validateStatus;
    !x.status || !E || E(x.status) ? v(x) : w(new pe(
      "Request failed with status code " + x.status,
      [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(x.status / 100) - 4],
      x.config,
      x.request,
      x
    ));
  }
  function af(v) {
    const w = /^([-+\w]{1,25})(:?\/\/|:)/.exec(v);
    return w && w[1] || "";
  }
  function sf(v, w) {
    v = v || 10;
    const x = new Array(v), E = new Array(v);
    let A = 0, R = 0, T;
    return w = w !== void 0 ? w : 1e3, function(ie) {
      const J = Date.now(), Q = E[R];
      T || (T = J), x[A] = ie, E[A] = J;
      let oe = R, Be = 0;
      for (; oe !== A; )
        Be += x[oe++], oe = oe % v;
      if (A = (A + 1) % v, A === R && (R = (R + 1) % v), J - T < w)
        return;
      const ot = Q && J - Q;
      return ot ? Math.round(Be * 1e3 / ot) : void 0;
    };
  }
  function lf(v, w) {
    let x = 0, E = 1e3 / w, A, R;
    const T = (J, Q = Date.now()) => {
      x = Q, A = null, R && (clearTimeout(R), R = null), v.apply(null, J);
    };
    return [(...J) => {
      const Q = Date.now(), oe = Q - x;
      oe >= E ? T(J, Q) : (A = J, R || (R = setTimeout(() => {
        R = null, T(A);
      }, E - oe)));
    }, () => A && T(A)];
  }
  const mi = (v, w, x = 3) => {
    let E = 0;
    const A = sf(50, 250);
    return lf((R) => {
      const T = R.loaded, U = R.lengthComputable ? R.total : void 0, ie = T - E, J = A(ie), Q = T <= U;
      E = T;
      const oe = {
        loaded: T,
        total: U,
        progress: U ? T / U : void 0,
        bytes: ie,
        rate: J || void 0,
        estimated: J && U && Q ? (U - T) / J : void 0,
        event: R,
        lengthComputable: U != null,
        [w ? "download" : "upload"]: !0
      };
      v(oe);
    }, x);
  }, Ps = (v, w) => {
    const x = v != null;
    return [(E) => w[0]({
      lengthComputable: x,
      total: v,
      loaded: E
    }), w[1]];
  }, ks = (v) => (...w) => $.asap(() => v(...w));
  var uf = Ze.hasStandardBrowserEnv ? /* @__PURE__ */ ((v, w) => (x) => (x = new URL(x, Ze.origin), v.protocol === x.protocol && v.host === x.host && (w || v.port === x.port)))(
    new URL(Ze.origin),
    Ze.navigator && /(msie|trident)/i.test(Ze.navigator.userAgent)
  ) : () => !0, cf = Ze.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(v, w, x, E, A, R) {
        const T = [v + "=" + encodeURIComponent(w)];
        $.isNumber(x) && T.push("expires=" + new Date(x).toGMTString()), $.isString(E) && T.push("path=" + E), $.isString(A) && T.push("domain=" + A), R === !0 && T.push("secure"), document.cookie = T.join("; ");
      },
      read(v) {
        const w = document.cookie.match(new RegExp("(^|;\\s*)(" + v + ")=([^;]*)"));
        return w ? decodeURIComponent(w[3]) : null;
      },
      remove(v) {
        this.write(v, "", Date.now() - 864e5);
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
  function ff(v) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(v);
  }
  function df(v, w) {
    return w ? v.replace(/\/?\/$/, "") + "/" + w.replace(/^\/+/, "") : v;
  }
  function Is(v, w) {
    return v && !ff(w) ? df(v, w) : w;
  }
  const $s = (v) => v instanceof Ft ? { ...v } : v;
  function kn(v, w) {
    w = w || {};
    const x = {};
    function E(J, Q, oe, Be) {
      return $.isPlainObject(J) && $.isPlainObject(Q) ? $.merge.call({ caseless: Be }, J, Q) : $.isPlainObject(Q) ? $.merge({}, Q) : $.isArray(Q) ? Q.slice() : Q;
    }
    function A(J, Q, oe, Be) {
      if ($.isUndefined(Q)) {
        if (!$.isUndefined(J))
          return E(void 0, J, oe, Be);
      } else return E(J, Q, oe, Be);
    }
    function R(J, Q) {
      if (!$.isUndefined(Q))
        return E(void 0, Q);
    }
    function T(J, Q) {
      if ($.isUndefined(Q)) {
        if (!$.isUndefined(J))
          return E(void 0, J);
      } else return E(void 0, Q);
    }
    function U(J, Q, oe) {
      if (oe in w)
        return E(J, Q);
      if (oe in v)
        return E(void 0, J);
    }
    const ie = {
      url: R,
      method: R,
      data: R,
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
      validateStatus: U,
      headers: (J, Q, oe) => A($s(J), $s(Q), oe, !0)
    };
    return $.forEach(Object.keys(Object.assign({}, v, w)), function(Q) {
      const oe = ie[Q] || A, Be = oe(v[Q], w[Q], Q);
      $.isUndefined(Be) && oe !== U || (x[Q] = Be);
    }), x;
  }
  var Ns = (v) => {
    const w = kn({}, v);
    let { data: x, withXSRFToken: E, xsrfHeaderName: A, xsrfCookieName: R, headers: T, auth: U } = w;
    w.headers = T = Ft.from(T), w.url = me(Is(w.baseURL, w.url), v.params, v.paramsSerializer), U && T.set(
      "Authorization",
      "Basic " + btoa((U.username || "") + ":" + (U.password ? unescape(encodeURIComponent(U.password)) : ""))
    );
    let ie;
    if ($.isFormData(x)) {
      if (Ze.hasStandardBrowserEnv || Ze.hasStandardBrowserWebWorkerEnv)
        T.setContentType(void 0);
      else if ((ie = T.getContentType()) !== !1) {
        const [J, ...Q] = ie ? ie.split(";").map((oe) => oe.trim()).filter(Boolean) : [];
        T.setContentType([J || "multipart/form-data", ...Q].join("; "));
      }
    }
    if (Ze.hasStandardBrowserEnv && (E && $.isFunction(E) && (E = E(w)), E || E !== !1 && uf(w.url))) {
      const J = A && R && cf.read(R);
      J && T.set(A, J);
    }
    return w;
  }, pf = typeof XMLHttpRequest < "u" && function(v) {
    return new Promise(function(x, E) {
      const A = Ns(v);
      let R = A.data;
      const T = Ft.from(A.headers).normalize();
      let { responseType: U, onUploadProgress: ie, onDownloadProgress: J } = A, Q, oe, Be, ot, ae;
      function ve() {
        ot && ot(), ae && ae(), A.cancelToken && A.cancelToken.unsubscribe(Q), A.signal && A.signal.removeEventListener("abort", Q);
      }
      let se = new XMLHttpRequest();
      se.open(A.method.toUpperCase(), A.url, !0), se.timeout = A.timeout;
      function Je() {
        if (!se)
          return;
        const ut = Ft.from(
          "getAllResponseHeaders" in se && se.getAllResponseHeaders()
        ), St = {
          data: !U || U === "text" || U === "json" ? se.responseText : se.response,
          status: se.status,
          statusText: se.statusText,
          headers: ut,
          config: v,
          request: se
        };
        Ts(function(In) {
          x(In), ve();
        }, function(In) {
          E(In), ve();
        }, St), se = null;
      }
      "onloadend" in se ? se.onloadend = Je : se.onreadystatechange = function() {
        !se || se.readyState !== 4 || se.status === 0 && !(se.responseURL && se.responseURL.indexOf("file:") === 0) || setTimeout(Je);
      }, se.onabort = function() {
        se && (E(new pe("Request aborted", pe.ECONNABORTED, v, se)), se = null);
      }, se.onerror = function() {
        E(new pe("Network Error", pe.ERR_NETWORK, v, se)), se = null;
      }, se.ontimeout = function() {
        let on = A.timeout ? "timeout of " + A.timeout + "ms exceeded" : "timeout exceeded";
        const St = A.transitional || ht;
        A.timeoutErrorMessage && (on = A.timeoutErrorMessage), E(new pe(
          on,
          St.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,
          v,
          se
        )), se = null;
      }, R === void 0 && T.setContentType(null), "setRequestHeader" in se && $.forEach(T.toJSON(), function(on, St) {
        se.setRequestHeader(St, on);
      }), $.isUndefined(A.withCredentials) || (se.withCredentials = !!A.withCredentials), U && U !== "json" && (se.responseType = A.responseType), J && ([Be, ae] = mi(J, !0), se.addEventListener("progress", Be)), ie && se.upload && ([oe, ot] = mi(ie), se.upload.addEventListener("progress", oe), se.upload.addEventListener("loadend", ot)), (A.cancelToken || A.signal) && (Q = (ut) => {
        se && (E(!ut || ut.type ? new Xn(null, v, se) : ut), se.abort(), se = null);
      }, A.cancelToken && A.cancelToken.subscribe(Q), A.signal && (A.signal.aborted ? Q() : A.signal.addEventListener("abort", Q)));
      const at = af(A.url);
      if (at && Ze.protocols.indexOf(at) === -1) {
        E(new pe("Unsupported protocol " + at + ":", pe.ERR_BAD_REQUEST, v));
        return;
      }
      se.send(R || null);
    });
  }, hf = (v, w) => {
    const { length: x } = v = v ? v.filter(Boolean) : [];
    if (w || x) {
      let E = new AbortController(), A;
      const R = function(J) {
        if (!A) {
          A = !0, U();
          const Q = J instanceof Error ? J : this.reason;
          E.abort(Q instanceof pe ? Q : new Xn(Q instanceof Error ? Q.message : Q));
        }
      };
      let T = w && setTimeout(() => {
        T = null, R(new pe(`timeout ${w} of ms exceeded`, pe.ETIMEDOUT));
      }, w);
      const U = () => {
        v && (T && clearTimeout(T), T = null, v.forEach((J) => {
          J.unsubscribe ? J.unsubscribe(R) : J.removeEventListener("abort", R);
        }), v = null);
      };
      v.forEach((J) => J.addEventListener("abort", R));
      const { signal: ie } = E;
      return ie.unsubscribe = () => $.asap(U), ie;
    }
  };
  const mf = function* (v, w) {
    let x = v.byteLength;
    if (x < w) {
      yield v;
      return;
    }
    let E = 0, A;
    for (; E < x; )
      A = E + w, yield v.slice(E, A), E = A;
  }, gf = async function* (v, w) {
    for await (const x of vf(v))
      yield* mf(x, w);
  }, vf = async function* (v) {
    if (v[Symbol.asyncIterator]) {
      yield* v;
      return;
    }
    const w = v.getReader();
    try {
      for (; ; ) {
        const { done: x, value: E } = await w.read();
        if (x)
          break;
        yield E;
      }
    } finally {
      await w.cancel();
    }
  }, Ms = (v, w, x, E) => {
    const A = gf(v, w);
    let R = 0, T, U = (ie) => {
      T || (T = !0, E && E(ie));
    };
    return new ReadableStream({
      async pull(ie) {
        try {
          const { done: J, value: Q } = await A.next();
          if (J) {
            U(), ie.close();
            return;
          }
          let oe = Q.byteLength;
          if (x) {
            let Be = R += oe;
            x(Be);
          }
          ie.enqueue(new Uint8Array(Q));
        } catch (J) {
          throw U(J), J;
        }
      },
      cancel(ie) {
        return U(ie), A.return();
      }
    }, {
      highWaterMark: 2
    });
  }, gi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", js = gi && typeof ReadableStream == "function", yf = gi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((v) => (w) => v.encode(w))(new TextEncoder()) : async (v) => new Uint8Array(await new Response(v).arrayBuffer())), Fs = (v, ...w) => {
    try {
      return !!v(...w);
    } catch {
      return !1;
    }
  }, bf = js && Fs(() => {
    let v = !1;
    const w = new Request(Ze.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }).headers.has("Content-Type");
    return v && !w;
  }), Bs = 64 * 1024, xo = js && Fs(() => $.isReadableStream(new Response("").body)), vi = {
    stream: xo && ((v) => v.body)
  };
  gi && ((v) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((w) => {
      !vi[w] && (vi[w] = $.isFunction(v[w]) ? (x) => x[w]() : (x, E) => {
        throw new pe(`Response type '${w}' is not supported`, pe.ERR_NOT_SUPPORT, E);
      });
    });
  })(new Response());
  const wf = async (v) => {
    if (v == null)
      return 0;
    if ($.isBlob(v))
      return v.size;
    if ($.isSpecCompliantForm(v))
      return (await new Request(Ze.origin, {
        method: "POST",
        body: v
      }).arrayBuffer()).byteLength;
    if ($.isArrayBufferView(v) || $.isArrayBuffer(v))
      return v.byteLength;
    if ($.isURLSearchParams(v) && (v = v + ""), $.isString(v))
      return (await yf(v)).byteLength;
  }, _f = async (v, w) => {
    const x = $.toFiniteNumber(v.getContentLength());
    return x ?? wf(w);
  };
  var Sf = gi && (async (v) => {
    let {
      url: w,
      method: x,
      data: E,
      signal: A,
      cancelToken: R,
      timeout: T,
      onDownloadProgress: U,
      onUploadProgress: ie,
      responseType: J,
      headers: Q,
      withCredentials: oe = "same-origin",
      fetchOptions: Be
    } = Ns(v);
    J = J ? (J + "").toLowerCase() : "text";
    let ot = hf([A, R && R.toAbortSignal()], T), ae;
    const ve = ot && ot.unsubscribe && (() => {
      ot.unsubscribe();
    });
    let se;
    try {
      if (ie && bf && x !== "get" && x !== "head" && (se = await _f(Q, E)) !== 0) {
        let St = new Request(w, {
          method: "POST",
          body: E,
          duplex: "half"
        }), Sn;
        if ($.isFormData(E) && (Sn = St.headers.get("content-type")) && Q.setContentType(Sn), St.body) {
          const [In, Si] = Ps(
            se,
            mi(ks(ie))
          );
          E = Ms(St.body, Bs, In, Si);
        }
      }
      $.isString(oe) || (oe = oe ? "include" : "omit");
      const Je = "credentials" in Request.prototype;
      ae = new Request(w, {
        ...Be,
        signal: ot,
        method: x.toUpperCase(),
        headers: Q.normalize().toJSON(),
        body: E,
        duplex: "half",
        credentials: Je ? oe : void 0
      });
      let at = await fetch(ae);
      const ut = xo && (J === "stream" || J === "response");
      if (xo && (U || ut && ve)) {
        const St = {};
        ["status", "statusText", "headers"].forEach((Gs) => {
          St[Gs] = at[Gs];
        });
        const Sn = $.toFiniteNumber(at.headers.get("content-length")), [In, Si] = U && Ps(
          Sn,
          mi(ks(U), !0)
        ) || [];
        at = new Response(
          Ms(at.body, Bs, In, () => {
            Si && Si(), ve && ve();
          }),
          St
        );
      }
      J = J || "text";
      let on = await vi[$.findKey(vi, J) || "text"](at, v);
      return !ut && ve && ve(), await new Promise((St, Sn) => {
        Ts(St, Sn, {
          data: on,
          headers: Ft.from(at.headers),
          status: at.status,
          statusText: at.statusText,
          config: v,
          request: ae
        });
      });
    } catch (Je) {
      throw ve && ve(), Je && Je.name === "TypeError" && /fetch/i.test(Je.message) ? Object.assign(
        new pe("Network Error", pe.ERR_NETWORK, v, ae),
        {
          cause: Je.cause || Je
        }
      ) : pe.from(Je, Je && Je.code, v, ae);
    }
  });
  const Eo = {
    http: Ar,
    xhr: pf,
    fetch: Sf
  };
  $.forEach(Eo, (v, w) => {
    if (v) {
      try {
        Object.defineProperty(v, "name", { value: w });
      } catch {
      }
      Object.defineProperty(v, "adapterName", { value: w });
    }
  });
  const qs = (v) => `- ${v}`, xf = (v) => $.isFunction(v) || v === null || v === !1;
  var Ls = {
    getAdapter: (v) => {
      v = $.isArray(v) ? v : [v];
      const { length: w } = v;
      let x, E;
      const A = {};
      for (let R = 0; R < w; R++) {
        x = v[R];
        let T;
        if (E = x, !xf(x) && (E = Eo[(T = String(x)).toLowerCase()], E === void 0))
          throw new pe(`Unknown adapter '${T}'`);
        if (E)
          break;
        A[T || "#" + R] = E;
      }
      if (!E) {
        const R = Object.entries(A).map(
          ([U, ie]) => `adapter ${U} ` + (ie === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let T = w ? R.length > 1 ? `since :
` + R.map(qs).join(`
`) : " " + qs(R[0]) : "as no adapter specified";
        throw new pe(
          "There is no suitable adapter to dispatch the request " + T,
          "ERR_NOT_SUPPORT"
        );
      }
      return E;
    },
    adapters: Eo
  };
  function Oo(v) {
    if (v.cancelToken && v.cancelToken.throwIfRequested(), v.signal && v.signal.aborted)
      throw new Xn(null, v);
  }
  function Vs(v) {
    return Oo(v), v.headers = Ft.from(v.headers), v.data = So.call(
      v,
      v.transformRequest
    ), ["post", "put", "patch"].indexOf(v.method) !== -1 && v.headers.setContentType("application/x-www-form-urlencoded", !1), Ls.getAdapter(v.adapter || zn.adapter)(v).then(function(E) {
      return Oo(v), E.data = So.call(
        v,
        v.transformResponse,
        E
      ), E.headers = Ft.from(E.headers), E;
    }, function(E) {
      return Rs(E) || (Oo(v), E && E.response && (E.response.data = So.call(
        v,
        v.transformResponse,
        E.response
      ), E.response.headers = Ft.from(E.response.headers))), Promise.reject(E);
    });
  }
  const Us = "1.7.9", yi = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((v, w) => {
    yi[v] = function(E) {
      return typeof E === v || "a" + (w < 1 ? "n " : " ") + v;
    };
  });
  const Ws = {};
  yi.transitional = function(w, x, E) {
    function A(R, T) {
      return "[Axios v" + Us + "] Transitional option '" + R + "'" + T + (E ? ". " + E : "");
    }
    return (R, T, U) => {
      if (w === !1)
        throw new pe(
          A(T, " has been removed" + (x ? " in " + x : "")),
          pe.ERR_DEPRECATED
        );
      return x && !Ws[T] && (Ws[T] = !0, console.warn(
        A(
          T,
          " has been deprecated since v" + x + " and will be removed in the near future"
        )
      )), w ? w(R, T, U) : !0;
    };
  }, yi.spelling = function(w) {
    return (x, E) => (console.warn(`${E} is likely a misspelling of ${w}`), !0);
  };
  function Ef(v, w, x) {
    if (typeof v != "object")
      throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
    const E = Object.keys(v);
    let A = E.length;
    for (; A-- > 0; ) {
      const R = E[A], T = w[R];
      if (T) {
        const U = v[R], ie = U === void 0 || T(U, R, v);
        if (ie !== !0)
          throw new pe("option " + R + " must be " + ie, pe.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (x !== !0)
        throw new pe("Unknown option " + R, pe.ERR_BAD_OPTION);
    }
  }
  var bi = {
    assertOptions: Ef,
    validators: yi
  };
  const zt = bi.validators;
  class wi {
    constructor(w) {
      this.defaults = w, this.interceptors = {
        request: new Ht(),
        response: new Ht()
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
    async request(w, x) {
      try {
        return await this._request(w, x);
      } catch (E) {
        if (E instanceof Error) {
          let A = {};
          Error.captureStackTrace ? Error.captureStackTrace(A) : A = new Error();
          const R = A.stack ? A.stack.replace(/^.+\n/, "") : "";
          try {
            E.stack ? R && !String(E.stack).endsWith(R.replace(/^.+\n.+\n/, "")) && (E.stack += `
` + R) : E.stack = R;
          } catch {
          }
        }
        throw E;
      }
    }
    _request(w, x) {
      typeof w == "string" ? (x = x || {}, x.url = w) : x = w || {}, x = kn(this.defaults, x);
      const { transitional: E, paramsSerializer: A, headers: R } = x;
      E !== void 0 && bi.assertOptions(E, {
        silentJSONParsing: zt.transitional(zt.boolean),
        forcedJSONParsing: zt.transitional(zt.boolean),
        clarifyTimeoutError: zt.transitional(zt.boolean)
      }, !1), A != null && ($.isFunction(A) ? x.paramsSerializer = {
        serialize: A
      } : bi.assertOptions(A, {
        encode: zt.function,
        serialize: zt.function
      }, !0)), bi.assertOptions(x, {
        baseUrl: zt.spelling("baseURL"),
        withXsrfToken: zt.spelling("withXSRFToken")
      }, !0), x.method = (x.method || this.defaults.method || "get").toLowerCase();
      let T = R && $.merge(
        R.common,
        R[x.method]
      );
      R && $.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (ae) => {
          delete R[ae];
        }
      ), x.headers = Ft.concat(T, R);
      const U = [];
      let ie = !0;
      this.interceptors.request.forEach(function(ve) {
        typeof ve.runWhen == "function" && ve.runWhen(x) === !1 || (ie = ie && ve.synchronous, U.unshift(ve.fulfilled, ve.rejected));
      });
      const J = [];
      this.interceptors.response.forEach(function(ve) {
        J.push(ve.fulfilled, ve.rejected);
      });
      let Q, oe = 0, Be;
      if (!ie) {
        const ae = [Vs.bind(this), void 0];
        for (ae.unshift.apply(ae, U), ae.push.apply(ae, J), Be = ae.length, Q = Promise.resolve(x); oe < Be; )
          Q = Q.then(ae[oe++], ae[oe++]);
        return Q;
      }
      Be = U.length;
      let ot = x;
      for (oe = 0; oe < Be; ) {
        const ae = U[oe++], ve = U[oe++];
        try {
          ot = ae(ot);
        } catch (se) {
          ve.call(this, se);
          break;
        }
      }
      try {
        Q = Vs.call(this, ot);
      } catch (ae) {
        return Promise.reject(ae);
      }
      for (oe = 0, Be = J.length; oe < Be; )
        Q = Q.then(J[oe++], J[oe++]);
      return Q;
    }
    getUri(w) {
      w = kn(this.defaults, w);
      const x = Is(w.baseURL, w.url);
      return me(x, w.params, w.paramsSerializer);
    }
  }
  $.forEach(["delete", "get", "head", "options"], function(w) {
    wi.prototype[w] = function(x, E) {
      return this.request(kn(E || {}, {
        method: w,
        url: x,
        data: (E || {}).data
      }));
    };
  }), $.forEach(["post", "put", "patch"], function(w) {
    function x(E) {
      return function(R, T, U) {
        return this.request(kn(U || {}, {
          method: w,
          headers: E ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: R,
          data: T
        }));
      };
    }
    wi.prototype[w] = x(), wi.prototype[w + "Form"] = x(!0);
  });
  var _i = wi;
  class Ao {
    constructor(w) {
      if (typeof w != "function")
        throw new TypeError("executor must be a function.");
      let x;
      this.promise = new Promise(function(R) {
        x = R;
      });
      const E = this;
      this.promise.then((A) => {
        if (!E._listeners) return;
        let R = E._listeners.length;
        for (; R-- > 0; )
          E._listeners[R](A);
        E._listeners = null;
      }), this.promise.then = (A) => {
        let R;
        const T = new Promise((U) => {
          E.subscribe(U), R = U;
        }).then(A);
        return T.cancel = function() {
          E.unsubscribe(R);
        }, T;
      }, w(function(R, T, U) {
        E.reason || (E.reason = new Xn(R, T, U), x(E.reason));
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
      const x = this._listeners.indexOf(w);
      x !== -1 && this._listeners.splice(x, 1);
    }
    toAbortSignal() {
      const w = new AbortController(), x = (E) => {
        w.abort(E);
      };
      return this.subscribe(x), w.signal.unsubscribe = () => this.unsubscribe(x), w.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let w;
      return {
        token: new Ao(function(A) {
          w = A;
        }),
        cancel: w
      };
    }
  }
  var Of = Ao;
  function Af(v) {
    return function(x) {
      return v.apply(null, x);
    };
  }
  function Df(v) {
    return $.isObject(v) && v.isAxiosError === !0;
  }
  const Do = {
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
  Object.entries(Do).forEach(([v, w]) => {
    Do[w] = v;
  });
  var Cf = Do;
  function Hs(v) {
    const w = new _i(v), x = e(_i.prototype.request, w);
    return $.extend(x, _i.prototype, w, { allOwnKeys: !0 }), $.extend(x, w, null, { allOwnKeys: !0 }), x.create = function(A) {
      return Hs(kn(v, A));
    }, x;
  }
  const et = Hs(zn);
  return et.Axios = _i, et.CanceledError = Xn, et.CancelToken = Of, et.isCancel = Rs, et.VERSION = Us, et.toFormData = P, et.AxiosError = pe, et.Cancel = et.CanceledError, et.all = function(w) {
    return Promise.all(w);
  }, et.spread = Af, et.isAxiosError = Df, et.mergeConfig = kn, et.AxiosHeaders = Ft, et.formToJSON = (v) => Kn($.isHTMLForm(v) ? new FormData(v) : v), et.getAdapter = Ls.getAdapter, et.HttpStatusCode = Cf, et.default = et, oa = et, oa;
}
var tu;
function uv() {
  if (tu) return sn;
  tu = 1;
  var e = sn.__assign || function() {
    return e = Object.assign || function(a) {
      for (var u, s = 1, l = arguments.length; s < l; s++) {
        u = arguments[s];
        for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (a[f] = u[f]);
      }
      return a;
    }, e.apply(this, arguments);
  }, t = sn.__awaiter || function(a, u, s, l) {
    function f(p) {
      return p instanceof s ? p : new s(function(g) {
        g(p);
      });
    }
    return new (s || (s = Promise))(function(p, g) {
      function h(c) {
        try {
          d(l.next(c));
        } catch (y) {
          g(y);
        }
      }
      function m(c) {
        try {
          d(l.throw(c));
        } catch (y) {
          g(y);
        }
      }
      function d(c) {
        c.done ? p(c.value) : f(c.value).then(h, m);
      }
      d((l = l.apply(a, u || [])).next());
    });
  }, n = sn.__generator || function(a, u) {
    var s = { label: 0, sent: function() {
      if (p[0] & 1) throw p[1];
      return p[1];
    }, trys: [], ops: [] }, l, f, p, g = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return g.next = h(0), g.throw = h(1), g.return = h(2), typeof Symbol == "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function h(d) {
      return function(c) {
        return m([d, c]);
      };
    }
    function m(d) {
      if (l) throw new TypeError("Generator is already executing.");
      for (; g && (g = 0, d[0] && (s = 0)), s; ) try {
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
        d = u.call(a, s);
      } catch (c) {
        d = [6, c], f = 0;
      } finally {
        l = p = 0;
      }
      if (d[0] & 5) throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, r = sn.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(sn, "__esModule", { value: !0 }), sn.AxiosClient = void 0;
  var i = r(/* @__PURE__ */ lv()), o = (
    /** @class */
    function() {
      function a(u) {
        var s = u.responseHandler, l = u.requestConfigBuilder;
        this.responseHandler = s, this.requestConfigBuilder = l;
      }
      return a.prototype.get = function(u, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", u, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.getData = function(u, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", u, s, {
                  responseType: "arraybuffer"
                })];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.post = function(u, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", u, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.postData = function(u, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", u, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.put = function(u, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("put", u, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.delete = function(u, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("delete", u, s)];
              case 1:
                return l = f.sent(), [4, this.sendRequest(l)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, a.prototype.sendRequest = function(u) {
        return this.responseHandler.handle(
          // eslint-disable-next-line new-cap
          (0, i.default)(e(e({}, u), { maxBodyLength: 1 / 0, maxContentLength: 1 / 0 }))
        );
      }, a;
    }()
  );
  return sn.AxiosClient = o, sn;
}
var nu;
function cv() {
  return nu || (nu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DefaultHttpClient = void 0;
    var t = uv();
    Object.defineProperty(e, "DefaultHttpClient", { enumerable: !0, get: function() {
      return t.AxiosClient;
    } });
  }(ia)), ia;
}
var ln = {}, aa, ru;
function Or() {
  return ru || (ru = 1, aa = TypeError), aa;
}
const fv = {}, dv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fv
}, Symbol.toStringTag, { value: "Module" })), pv = /* @__PURE__ */ fm(dv);
var sa, iu;
function vo() {
  if (iu) return sa;
  iu = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, u = i && Set.prototype.forEach, s = typeof WeakMap == "function" && WeakMap.prototype, l = s ? WeakMap.prototype.has : null, f = typeof WeakSet == "function" && WeakSet.prototype, p = f ? WeakSet.prototype.has : null, g = typeof WeakRef == "function" && WeakRef.prototype, h = g ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, d = Object.prototype.toString, c = Function.prototype.toString, y = String.prototype.match, b = String.prototype.slice, _ = String.prototype.replace, S = String.prototype.toUpperCase, C = String.prototype.toLowerCase, O = RegExp.prototype.test, D = Array.prototype.concat, I = Array.prototype.join, M = Array.prototype.slice, F = Math.floor, B = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, H = Object.getOwnPropertySymbols, te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, W = typeof Symbol == "function" && typeof Symbol.iterator == "object", q = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === W || !0) ? Symbol.toStringTag : null, L = Object.prototype.propertyIsEnumerable, X = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(P) {
    return P.__proto__;
  } : null);
  function j(P, k) {
    if (P === 1 / 0 || P === -1 / 0 || P !== P || P && P > -1e3 && P < 1e3 || O.call(/e/, k))
      return k;
    var Ae = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof P == "number") {
      var Me = P < 0 ? -F(-P) : F(P);
      if (Me !== P) {
        var je = String(Me), me = b.call(k, je.length + 1);
        return _.call(je, Ae, "$&_") + "." + _.call(_.call(me, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return _.call(k, Ae, "$&_");
  }
  var ee = pv, re = ee.custom, de = lt(re) ? re : null, ye = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ke = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  sa = function P(k, Ae, Me, je) {
    var me = Ae || {};
    if (ft(me, "quoteStyle") && !ft(ye, me.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (ft(me, "maxStringLength") && (typeof me.maxStringLength == "number" ? me.maxStringLength < 0 && me.maxStringLength !== 1 / 0 : me.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Wt = ft(me, "customInspect") ? me.customInspect : !0;
    if (typeof Wt != "boolean" && Wt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (ft(me, "indent") && me.indent !== null && me.indent !== "	" && !(parseInt(me.indent, 10) === me.indent && me.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ft(me, "numericSeparator") && typeof me.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ht = me.numericSeparator;
    if (typeof k > "u")
      return "undefined";
    if (k === null)
      return "null";
    if (typeof k == "boolean")
      return k ? "true" : "false";
    if (typeof k == "string")
      return pe(k, me);
    if (typeof k == "number") {
      if (k === 0)
        return 1 / 0 / k > 0 ? "0" : "-0";
      var ht = String(k);
      return Ht ? j(k, ht) : ht;
    }
    if (typeof k == "bigint") {
      var Gt = String(k) + "n";
      return Ht ? j(k, Gt) : Gt;
    }
    var Cr = typeof me.depth > "u" ? 5 : me.depth;
    if (typeof Me > "u" && (Me = 0), Me >= Cr && Cr > 0 && typeof k == "object")
      return Se(k) ? "[Array]" : "[Object]";
    var _n = li(me, Me);
    if (typeof je > "u")
      je = [];
    else if (Ut(je, k) >= 0)
      return "[Circular]";
    function Rt(rn, Kt, Yn) {
      if (Kt && (je = M.call(je), je.push(Kt)), Yn) {
        var pi = {
          depth: me.depth
        };
        return ft(me, "quoteStyle") && (pi.quoteStyle = me.quoteStyle), P(rn, pi, Me + 1, je);
      }
      return P(rn, me, Me + 1, je);
    }
    if (typeof k == "function" && !xe(k)) {
      var Wn = vn(k), Hn = Un(k, Rt);
      return "[Function" + (Wn ? ": " + Wn : " (anonymous)") + "]" + (Hn.length > 0 ? " { " + I.call(Hn, ", ") + " }" : "");
    }
    if (lt(k)) {
      var ui = W ? _.call(String(k), /^(Symbol\(.*\))_[^)]*$/, "$1") : te.call(k);
      return typeof k == "object" && !W ? wn(ui) : ui;
    }
    if ($(k)) {
      for (var Tn = "<" + C.call(String(k.nodeName)), Rr = k.attributes || [], Gn = 0; Gn < Rr.length; Gn++)
        Tn += " " + Rr[Gn].name + "=" + Re(N(Rr[Gn].value), "double", me);
      return Tn += ">", k.childNodes && k.childNodes.length && (Tn += "..."), Tn += "</" + C.call(String(k.nodeName)) + ">", Tn;
    }
    if (Se(k)) {
      if (k.length === 0)
        return "[]";
      var Ze = Un(k, Rt);
      return _n && !si(Ze) ? "[" + Dr(Ze, _n) + "]" : "[ " + I.call(Ze, ", ") + " ]";
    }
    if (ne(k)) {
      var Tr = Un(k, Rt);
      return !("cause" in Error.prototype) && "cause" in k && !L.call(k, "cause") ? "{ [" + String(k) + "] " + I.call(D.call("[cause]: " + Rt(k.cause), Tr), ", ") + " }" : Tr.length === 0 ? "[" + String(k) + "]" : "{ [" + String(k) + "] " + I.call(Tr, ", ") + " }";
    }
    if (typeof k == "object" && Wt) {
      if (de && typeof k[de] == "function" && ee)
        return ee(k, { depth: Cr - Me });
      if (Wt !== "symbol" && typeof k.inspect == "function")
        return k.inspect();
    }
    if (Ct(k)) {
      var ci = [];
      return r && r.call(k, function(rn, Kt) {
        ci.push(Rt(Kt, k, !0) + " => " + Rt(rn, k));
      }), Vn("Map", n.call(k), ci, _n);
    }
    if (nn(k)) {
      var fi = [];
      return u && u.call(k, function(rn) {
        fi.push(Rt(rn, k));
      }), Vn("Set", a.call(k), fi, _n);
    }
    if (yn(k))
      return Ar("WeakMap");
    if (bo(k))
      return Ar("WeakSet");
    if (bn(k))
      return Ar("WeakRef");
    if (be(k))
      return wn(Rt(Number(k)));
    if (_t(k))
      return wn(Rt(B.call(k)));
    if (Fe(k))
      return wn(m.call(k));
    if (_e(k))
      return wn(Rt(String(k)));
    if (typeof window < "u" && k === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && k === globalThis || typeof ei < "u" && k === ei)
      return "{ [object globalThis] }";
    if (!Ne(k) && !xe(k)) {
      var Kn = Un(k, Rt), di = X ? X(k) === Object.prototype : k instanceof Object || k.constructor === Object, Pn = k instanceof Object ? "" : "null prototype", zn = !di && q && Object(k) === k && q in k ? b.call(vt(k), 8, -1) : Pn ? "Object" : "", wo = di || typeof k.constructor != "function" ? "" : k.constructor.name ? k.constructor.name + " " : "", Pr = wo + (zn || Pn ? "[" + I.call(D.call([], zn || [], Pn || []), ": ") + "] " : "");
      return Kn.length === 0 ? Pr + "{}" : _n ? Pr + "{" + Dr(Kn, _n) + "}" : Pr + "{ " + I.call(Kn, ", ") + " }";
    }
    return String(k);
  };
  function Re(P, k, Ae) {
    var Me = Ae.quoteStyle || k, je = ye[Me];
    return je + P + je;
  }
  function N(P) {
    return _.call(String(P), /"/g, "&quot;");
  }
  function z(P) {
    return !q || !(typeof P == "object" && (q in P || typeof P[q] < "u"));
  }
  function Se(P) {
    return vt(P) === "[object Array]" && z(P);
  }
  function Ne(P) {
    return vt(P) === "[object Date]" && z(P);
  }
  function xe(P) {
    return vt(P) === "[object RegExp]" && z(P);
  }
  function ne(P) {
    return vt(P) === "[object Error]" && z(P);
  }
  function _e(P) {
    return vt(P) === "[object String]" && z(P);
  }
  function be(P) {
    return vt(P) === "[object Number]" && z(P);
  }
  function Fe(P) {
    return vt(P) === "[object Boolean]" && z(P);
  }
  function lt(P) {
    if (W)
      return P && typeof P == "object" && P instanceof Symbol;
    if (typeof P == "symbol")
      return !0;
    if (!P || typeof P != "object" || !te)
      return !1;
    try {
      return te.call(P), !0;
    } catch {
    }
    return !1;
  }
  function _t(P) {
    if (!P || typeof P != "object" || !B)
      return !1;
    try {
      return B.call(P), !0;
    } catch {
    }
    return !1;
  }
  var Qe = Object.prototype.hasOwnProperty || function(P) {
    return P in this;
  };
  function ft(P, k) {
    return Qe.call(P, k);
  }
  function vt(P) {
    return d.call(P);
  }
  function vn(P) {
    if (P.name)
      return P.name;
    var k = y.call(c.call(P), /^function\s*([\w$]+)/);
    return k ? k[1] : null;
  }
  function Ut(P, k) {
    if (P.indexOf)
      return P.indexOf(k);
    for (var Ae = 0, Me = P.length; Ae < Me; Ae++)
      if (P[Ae] === k)
        return Ae;
    return -1;
  }
  function Ct(P) {
    if (!n || !P || typeof P != "object")
      return !1;
    try {
      n.call(P);
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
  function yn(P) {
    if (!l || !P || typeof P != "object")
      return !1;
    try {
      l.call(P, l);
      try {
        p.call(P, p);
      } catch {
        return !0;
      }
      return P instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function bn(P) {
    if (!h || !P || typeof P != "object")
      return !1;
    try {
      return h.call(P), !0;
    } catch {
    }
    return !1;
  }
  function nn(P) {
    if (!a || !P || typeof P != "object")
      return !1;
    try {
      a.call(P);
      try {
        n.call(P);
      } catch {
        return !0;
      }
      return P instanceof Set;
    } catch {
    }
    return !1;
  }
  function bo(P) {
    if (!p || !P || typeof P != "object")
      return !1;
    try {
      p.call(P, p);
      try {
        l.call(P, l);
      } catch {
        return !0;
      }
      return P instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function $(P) {
    return !P || typeof P != "object" ? !1 : typeof HTMLElement < "u" && P instanceof HTMLElement ? !0 : typeof P.nodeName == "string" && typeof P.getAttribute == "function";
  }
  function pe(P, k) {
    if (P.length > k.maxStringLength) {
      var Ae = P.length - k.maxStringLength, Me = "... " + Ae + " more character" + (Ae > 1 ? "s" : "");
      return pe(b.call(P, 0, k.maxStringLength), k) + Me;
    }
    var je = ke[k.quoteStyle || "single"];
    je.lastIndex = 0;
    var me = _.call(_.call(P, je, "\\$1"), /[\x00-\x1f]/g, ai);
    return Re(me, "single", k);
  }
  function ai(P) {
    var k = P.charCodeAt(0), Ae = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[k];
    return Ae ? "\\" + Ae : "\\x" + (k < 16 ? "0" : "") + S.call(k.toString(16));
  }
  function wn(P) {
    return "Object(" + P + ")";
  }
  function Ar(P) {
    return P + " { ? }";
  }
  function Vn(P, k, Ae, Me) {
    var je = Me ? Dr(Ae, Me) : I.call(Ae, ", ");
    return P + " (" + k + ") {" + je + "}";
  }
  function si(P) {
    for (var k = 0; k < P.length; k++)
      if (Ut(P[k], `
`) >= 0)
        return !1;
    return !0;
  }
  function li(P, k) {
    var Ae;
    if (P.indent === "	")
      Ae = "	";
    else if (typeof P.indent == "number" && P.indent > 0)
      Ae = I.call(Array(P.indent + 1), " ");
    else
      return null;
    return {
      base: Ae,
      prev: I.call(Array(k + 1), Ae)
    };
  }
  function Dr(P, k) {
    if (P.length === 0)
      return "";
    var Ae = `
` + k.prev + k.base;
    return Ae + I.call(P, "," + Ae) + `
` + k.prev;
  }
  function Un(P, k) {
    var Ae = Se(P), Me = [];
    if (Ae) {
      Me.length = P.length;
      for (var je = 0; je < P.length; je++)
        Me[je] = ft(P, je) ? k(P[je], P) : "";
    }
    var me = typeof H == "function" ? H(P) : [], Wt;
    if (W) {
      Wt = {};
      for (var Ht = 0; Ht < me.length; Ht++)
        Wt["$" + me[Ht]] = me[Ht];
    }
    for (var ht in P)
      ft(P, ht) && (Ae && String(Number(ht)) === ht && ht < P.length || W && Wt["$" + ht] instanceof Symbol || (O.call(/[^\w$]/, ht) ? Me.push(k(ht, P) + ": " + k(P[ht], P)) : Me.push(ht + ": " + k(P[ht], P))));
    if (typeof H == "function")
      for (var Gt = 0; Gt < me.length; Gt++)
        L.call(P, me[Gt]) && Me.push("[" + k(me[Gt]) + "]: " + k(P[me[Gt]], P));
    return Me;
  }
  return sa;
}
var la, ou;
function hv() {
  if (ou) return la;
  ou = 1;
  var e = /* @__PURE__ */ vo(), t = /* @__PURE__ */ Or(), n = function(u, s, l) {
    for (var f = u, p; (p = f.next) != null; f = p)
      if (p.key === s)
        return f.next = p.next, l || (p.next = /** @type {NonNullable<typeof list.next>} */
        u.next, u.next = p), p;
  }, r = function(u, s) {
    if (u) {
      var l = n(u, s);
      return l && l.value;
    }
  }, i = function(u, s, l) {
    var f = n(u, s);
    f ? f.value = l : u.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: s,
      next: u.next,
      value: l
    };
  }, o = function(u, s) {
    return u ? !!n(u, s) : !1;
  }, a = function(u, s) {
    if (u)
      return n(u, s, !0);
  };
  return la = function() {
    var s, l = {
      assert: function(f) {
        if (!l.has(f))
          throw new t("Side channel does not contain " + e(f));
      },
      delete: function(f) {
        var p = s && s.next, g = a(s, f);
        return g && p && p === g && (s = void 0), !!g;
      },
      get: function(f) {
        return r(s, f);
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
  }, la;
}
var ua, au;
function Kc() {
  return au || (au = 1, ua = Object), ua;
}
var ca, su;
function mv() {
  return su || (su = 1, ca = Error), ca;
}
var fa, lu;
function gv() {
  return lu || (lu = 1, fa = EvalError), fa;
}
var da, uu;
function vv() {
  return uu || (uu = 1, da = RangeError), da;
}
var pa, cu;
function yv() {
  return cu || (cu = 1, pa = ReferenceError), pa;
}
var ha, fu;
function bv() {
  return fu || (fu = 1, ha = SyntaxError), ha;
}
var ma, du;
function wv() {
  return du || (du = 1, ma = URIError), ma;
}
var ga, pu;
function _v() {
  return pu || (pu = 1, ga = Math.abs), ga;
}
var va, hu;
function Sv() {
  return hu || (hu = 1, va = Math.floor), va;
}
var ya, mu;
function xv() {
  return mu || (mu = 1, ya = Math.max), ya;
}
var ba, gu;
function Ev() {
  return gu || (gu = 1, ba = Math.min), ba;
}
var wa, vu;
function Ov() {
  return vu || (vu = 1, wa = Math.pow), wa;
}
var _a, yu;
function Av() {
  return yu || (yu = 1, _a = Math.round), _a;
}
var Sa, bu;
function Dv() {
  return bu || (bu = 1, Sa = Number.isNaN || function(t) {
    return t !== t;
  }), Sa;
}
var xa, wu;
function Cv() {
  if (wu) return xa;
  wu = 1;
  var e = /* @__PURE__ */ Dv();
  return xa = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, xa;
}
var Ea, _u;
function Rv() {
  return _u || (_u = 1, Ea = Object.getOwnPropertyDescriptor), Ea;
}
var Oa, Su;
function zc() {
  if (Su) return Oa;
  Su = 1;
  var e = /* @__PURE__ */ Rv();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Oa = e, Oa;
}
var Aa, xu;
function Tv() {
  if (xu) return Aa;
  xu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Aa = e, Aa;
}
var Da, Eu;
function Pv() {
  return Eu || (Eu = 1, Da = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[n] = i;
    for (var o in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var u = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (u.value !== i || u.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Da;
}
var Ca, Ou;
function kv() {
  if (Ou) return Ca;
  Ou = 1;
  var e = typeof Symbol < "u" && Symbol, t = Pv();
  return Ca = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Ca;
}
var Ra, Au;
function Yc() {
  return Au || (Au = 1, Ra = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ra;
}
var Ta, Du;
function Xc() {
  if (Du) return Ta;
  Du = 1;
  var e = /* @__PURE__ */ Kc();
  return Ta = e.getPrototypeOf || null, Ta;
}
var Pa, Cu;
function Iv() {
  if (Cu) return Pa;
  Cu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", i = function(s, l) {
    for (var f = [], p = 0; p < s.length; p += 1)
      f[p] = s[p];
    for (var g = 0; g < l.length; g += 1)
      f[g + s.length] = l[g];
    return f;
  }, o = function(s, l) {
    for (var f = [], p = l, g = 0; p < s.length; p += 1, g += 1)
      f[g] = s[p];
    return f;
  }, a = function(u, s) {
    for (var l = "", f = 0; f < u.length; f += 1)
      l += u[f], f + 1 < u.length && (l += s);
    return l;
  };
  return Pa = function(s) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var f = o(arguments, 1), p, g = function() {
      if (this instanceof p) {
        var y = l.apply(
          this,
          i(f, arguments)
        );
        return Object(y) === y ? y : this;
      }
      return l.apply(
        s,
        i(f, arguments)
      );
    }, h = n(0, l.length - f.length), m = [], d = 0; d < h; d++)
      m[d] = "$" + d;
    if (p = Function("binder", "return function (" + a(m, ",") + "){ return binder.apply(this,arguments); }")(g), l.prototype) {
      var c = function() {
      };
      c.prototype = l.prototype, p.prototype = new c(), c.prototype = null;
    }
    return p;
  }, Pa;
}
var ka, Ru;
function yo() {
  if (Ru) return ka;
  Ru = 1;
  var e = Iv();
  return ka = Function.prototype.bind || e, ka;
}
var Ia, Tu;
function As() {
  return Tu || (Tu = 1, Ia = Function.prototype.call), Ia;
}
var $a, Pu;
function Jc() {
  return Pu || (Pu = 1, $a = Function.prototype.apply), $a;
}
var Na, ku;
function $v() {
  return ku || (ku = 1, Na = typeof Reflect < "u" && Reflect && Reflect.apply), Na;
}
var Ma, Iu;
function Nv() {
  if (Iu) return Ma;
  Iu = 1;
  var e = yo(), t = Jc(), n = As(), r = $v();
  return Ma = r || e.call(n, t), Ma;
}
var ja, $u;
function Qc() {
  if ($u) return ja;
  $u = 1;
  var e = yo(), t = /* @__PURE__ */ Or(), n = As(), r = Nv();
  return ja = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return r(e, n, o);
  }, ja;
}
var Fa, Nu;
function Mv() {
  if (Nu) return Fa;
  Nu = 1;
  var e = Qc(), t = /* @__PURE__ */ zc(), n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return Fa = r && typeof r.get == "function" ? e([r.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(u) {
      return o(u == null ? u : i(u));
    }
  ) : !1, Fa;
}
var Ba, Mu;
function jv() {
  if (Mu) return Ba;
  Mu = 1;
  var e = Yc(), t = Xc(), n = /* @__PURE__ */ Mv();
  return Ba = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : n ? function(i) {
    return n(i);
  } : null, Ba;
}
var qa, ju;
function Fv() {
  if (ju) return qa;
  ju = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = yo();
  return qa = n.call(e, t), qa;
}
var La, Fu;
function Ds() {
  if (Fu) return La;
  Fu = 1;
  var e, t = /* @__PURE__ */ Kc(), n = /* @__PURE__ */ mv(), r = /* @__PURE__ */ gv(), i = /* @__PURE__ */ vv(), o = /* @__PURE__ */ yv(), a = /* @__PURE__ */ bv(), u = /* @__PURE__ */ Or(), s = /* @__PURE__ */ wv(), l = /* @__PURE__ */ _v(), f = /* @__PURE__ */ Sv(), p = /* @__PURE__ */ xv(), g = /* @__PURE__ */ Ev(), h = /* @__PURE__ */ Ov(), m = /* @__PURE__ */ Av(), d = /* @__PURE__ */ Cv(), c = Function, y = function(xe) {
    try {
      return c('"use strict"; return (' + xe + ").constructor;")();
    } catch {
    }
  }, b = /* @__PURE__ */ zc(), _ = /* @__PURE__ */ Tv(), S = function() {
    throw new u();
  }, C = b ? function() {
    try {
      return arguments.callee, S;
    } catch {
      try {
        return b(arguments, "callee").get;
      } catch {
        return S;
      }
    }
  }() : S, O = kv()(), D = jv(), I = Xc(), M = Yc(), F = Jc(), B = As(), H = {}, te = typeof Uint8Array > "u" || !D ? e : D(Uint8Array), W = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": O && D ? D([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": H,
    "%AsyncGenerator%": H,
    "%AsyncGeneratorFunction%": H,
    "%AsyncIteratorPrototype%": H,
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
    "%Error%": n,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": r,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": c,
    "%GeneratorFunction%": H,
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
    "%Object.getOwnPropertyDescriptor%": b,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
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
    "%TypedArray%": te,
    "%TypeError%": u,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": s,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": B,
    "%Function.prototype.apply%": F,
    "%Object.defineProperty%": _,
    "%Object.getPrototypeOf%": I,
    "%Math.abs%": l,
    "%Math.floor%": f,
    "%Math.max%": p,
    "%Math.min%": g,
    "%Math.pow%": h,
    "%Math.round%": m,
    "%Math.sign%": d,
    "%Reflect.getPrototypeOf%": M
  };
  if (D)
    try {
      null.error;
    } catch (xe) {
      var q = D(D(xe));
      W["%Error.prototype%"] = q;
    }
  var L = function xe(ne) {
    var _e;
    if (ne === "%AsyncFunction%")
      _e = y("async function () {}");
    else if (ne === "%GeneratorFunction%")
      _e = y("function* () {}");
    else if (ne === "%AsyncGeneratorFunction%")
      _e = y("async function* () {}");
    else if (ne === "%AsyncGenerator%") {
      var be = xe("%AsyncGeneratorFunction%");
      be && (_e = be.prototype);
    } else if (ne === "%AsyncIteratorPrototype%") {
      var Fe = xe("%AsyncGenerator%");
      Fe && D && (_e = D(Fe.prototype));
    }
    return W[ne] = _e, _e;
  }, X = {
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
  }, j = yo(), ee = /* @__PURE__ */ Fv(), re = j.call(B, Array.prototype.concat), de = j.call(F, Array.prototype.splice), ye = j.call(B, String.prototype.replace), ke = j.call(B, String.prototype.slice), Re = j.call(B, RegExp.prototype.exec), N = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, z = /\\(\\)?/g, Se = function(ne) {
    var _e = ke(ne, 0, 1), be = ke(ne, -1);
    if (_e === "%" && be !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (be === "%" && _e !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var Fe = [];
    return ye(ne, N, function(lt, _t, Qe, ft) {
      Fe[Fe.length] = Qe ? ye(ft, z, "$1") : _t || lt;
    }), Fe;
  }, Ne = function(ne, _e) {
    var be = ne, Fe;
    if (ee(X, be) && (Fe = X[be], be = "%" + Fe[0] + "%"), ee(W, be)) {
      var lt = W[be];
      if (lt === H && (lt = L(be)), typeof lt > "u" && !_e)
        throw new u("intrinsic " + ne + " exists, but is not available. Please file an issue!");
      return {
        alias: Fe,
        name: be,
        value: lt
      };
    }
    throw new a("intrinsic " + ne + " does not exist!");
  };
  return La = function(ne, _e) {
    if (typeof ne != "string" || ne.length === 0)
      throw new u("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof _e != "boolean")
      throw new u('"allowMissing" argument must be a boolean');
    if (Re(/^%?[^%]*%?$/, ne) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var be = Se(ne), Fe = be.length > 0 ? be[0] : "", lt = Ne("%" + Fe + "%", _e), _t = lt.name, Qe = lt.value, ft = !1, vt = lt.alias;
    vt && (Fe = vt[0], de(be, re([0, 1], vt)));
    for (var vn = 1, Ut = !0; vn < be.length; vn += 1) {
      var Ct = be[vn], yn = ke(Ct, 0, 1), bn = ke(Ct, -1);
      if ((yn === '"' || yn === "'" || yn === "`" || bn === '"' || bn === "'" || bn === "`") && yn !== bn)
        throw new a("property names with quotes must have matching quotes");
      if ((Ct === "constructor" || !Ut) && (ft = !0), Fe += "." + Ct, _t = "%" + Fe + "%", ee(W, _t))
        Qe = W[_t];
      else if (Qe != null) {
        if (!(Ct in Qe)) {
          if (!_e)
            throw new u("base intrinsic for " + ne + " exists, but the property is not available.");
          return;
        }
        if (b && vn + 1 >= be.length) {
          var nn = b(Qe, Ct);
          Ut = !!nn, Ut && "get" in nn && !("originalValue" in nn.get) ? Qe = nn.get : Qe = Qe[Ct];
        } else
          Ut = ee(Qe, Ct), Qe = Qe[Ct];
        Ut && !ft && (W[_t] = Qe);
      }
    }
    return Qe;
  }, La;
}
var Va, Bu;
function Zc() {
  if (Bu) return Va;
  Bu = 1;
  var e = /* @__PURE__ */ Ds(), t = Qc(), n = t([e("%String.prototype.indexOf%")]);
  return Va = function(i, o) {
    var a = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof a == "function" && n(i, ".prototype.") > -1 ? t([a]) : a;
  }, Va;
}
var Ua, qu;
function ef() {
  if (qu) return Ua;
  qu = 1;
  var e = /* @__PURE__ */ Ds(), t = /* @__PURE__ */ Zc(), n = /* @__PURE__ */ vo(), r = /* @__PURE__ */ Or(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), u = t("Map.prototype.has", !0), s = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Ua = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var p, g = {
      assert: function(h) {
        if (!g.has(h))
          throw new r("Side channel does not contain " + n(h));
      },
      delete: function(h) {
        if (p) {
          var m = s(p, h);
          return l(p) === 0 && (p = void 0), m;
        }
        return !1;
      },
      get: function(h) {
        if (p)
          return o(p, h);
      },
      has: function(h) {
        return p ? u(p, h) : !1;
      },
      set: function(h, m) {
        p || (p = new i()), a(p, h, m);
      }
    };
    return g;
  }, Ua;
}
var Wa, Lu;
function Bv() {
  if (Lu) return Wa;
  Lu = 1;
  var e = /* @__PURE__ */ Ds(), t = /* @__PURE__ */ Zc(), n = /* @__PURE__ */ vo(), r = ef(), i = /* @__PURE__ */ Or(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), u = t("WeakMap.prototype.set", !0), s = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Wa = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var p, g, h = {
        assert: function(m) {
          if (!h.has(m))
            throw new i("Side channel does not contain " + n(m));
        },
        delete: function(m) {
          if (o && m && (typeof m == "object" || typeof m == "function")) {
            if (p)
              return l(p, m);
          } else if (r && g)
            return g.delete(m);
          return !1;
        },
        get: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && p ? a(p, m) : g && g.get(m);
        },
        has: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && p ? s(p, m) : !!g && g.has(m);
        },
        set: function(m, d) {
          o && m && (typeof m == "object" || typeof m == "function") ? (p || (p = new o()), u(p, m, d)) : r && (g || (g = r()), g.set(m, d));
        }
      };
      return h;
    }
  ) : r, Wa;
}
var Ha, Vu;
function qv() {
  if (Vu) return Ha;
  Vu = 1;
  var e = /* @__PURE__ */ Or(), t = /* @__PURE__ */ vo(), n = hv(), r = ef(), i = Bv(), o = i || r || n;
  return Ha = function() {
    var u, s = {
      assert: function(l) {
        if (!s.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        return !!u && u.delete(l);
      },
      get: function(l) {
        return u && u.get(l);
      },
      has: function(l) {
        return !!u && u.has(l);
      },
      set: function(l, f) {
        u || (u = o()), u.set(l, f);
      }
    };
    return s;
  }, Ha;
}
var Ga, Uu;
function Cs() {
  if (Uu) return Ga;
  Uu = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Ga = {
    default: n.RFC3986,
    formatters: {
      RFC1738: function(r) {
        return e.call(r, t, "+");
      },
      RFC3986: function(r) {
        return String(r);
      }
    },
    RFC1738: n.RFC1738,
    RFC3986: n.RFC3986
  }, Ga;
}
var Ka, Wu;
function tf() {
  if (Wu) return Ka;
  Wu = 1;
  var e = /* @__PURE__ */ Cs(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var c = [], y = 0; y < 256; ++y)
      c.push("%" + ((y < 16 ? "0" : "") + y.toString(16)).toUpperCase());
    return c;
  }(), i = function(y) {
    for (; y.length > 1; ) {
      var b = y.pop(), _ = b.obj[b.prop];
      if (n(_)) {
        for (var S = [], C = 0; C < _.length; ++C)
          typeof _[C] < "u" && S.push(_[C]);
        b.obj[b.prop] = S;
      }
    }
  }, o = function(y, b) {
    for (var _ = b && b.plainObjects ? { __proto__: null } : {}, S = 0; S < y.length; ++S)
      typeof y[S] < "u" && (_[S] = y[S]);
    return _;
  }, a = function c(y, b, _) {
    if (!b)
      return y;
    if (typeof b != "object" && typeof b != "function") {
      if (n(y))
        y.push(b);
      else if (y && typeof y == "object")
        (_ && (_.plainObjects || _.allowPrototypes) || !t.call(Object.prototype, b)) && (y[b] = !0);
      else
        return [y, b];
      return y;
    }
    if (!y || typeof y != "object")
      return [y].concat(b);
    var S = y;
    return n(y) && !n(b) && (S = o(y, _)), n(y) && n(b) ? (b.forEach(function(C, O) {
      if (t.call(y, O)) {
        var D = y[O];
        D && typeof D == "object" && C && typeof C == "object" ? y[O] = c(D, C, _) : y.push(C);
      } else
        y[O] = C;
    }), y) : Object.keys(b).reduce(function(C, O) {
      var D = b[O];
      return t.call(C, O) ? C[O] = c(C[O], D, _) : C[O] = D, C;
    }, S);
  }, u = function(y, b) {
    return Object.keys(b).reduce(function(_, S) {
      return _[S] = b[S], _;
    }, y);
  }, s = function(c, y, b) {
    var _ = c.replace(/\+/g, " ");
    if (b === "iso-8859-1")
      return _.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(_);
    } catch {
      return _;
    }
  }, l = 1024, f = function(y, b, _, S, C) {
    if (y.length === 0)
      return y;
    var O = y;
    if (typeof y == "symbol" ? O = Symbol.prototype.toString.call(y) : typeof y != "string" && (O = String(y)), _ === "iso-8859-1")
      return escape(O).replace(/%u[0-9a-f]{4}/gi, function(te) {
        return "%26%23" + parseInt(te.slice(2), 16) + "%3B";
      });
    for (var D = "", I = 0; I < O.length; I += l) {
      for (var M = O.length >= l ? O.slice(I, I + l) : O, F = [], B = 0; B < M.length; ++B) {
        var H = M.charCodeAt(B);
        if (H === 45 || H === 46 || H === 95 || H === 126 || H >= 48 && H <= 57 || H >= 65 && H <= 90 || H >= 97 && H <= 122 || C === e.RFC1738 && (H === 40 || H === 41)) {
          F[F.length] = M.charAt(B);
          continue;
        }
        if (H < 128) {
          F[F.length] = r[H];
          continue;
        }
        if (H < 2048) {
          F[F.length] = r[192 | H >> 6] + r[128 | H & 63];
          continue;
        }
        if (H < 55296 || H >= 57344) {
          F[F.length] = r[224 | H >> 12] + r[128 | H >> 6 & 63] + r[128 | H & 63];
          continue;
        }
        B += 1, H = 65536 + ((H & 1023) << 10 | M.charCodeAt(B) & 1023), F[F.length] = r[240 | H >> 18] + r[128 | H >> 12 & 63] + r[128 | H >> 6 & 63] + r[128 | H & 63];
      }
      D += F.join("");
    }
    return D;
  }, p = function(y) {
    for (var b = [{ obj: { o: y }, prop: "o" }], _ = [], S = 0; S < b.length; ++S)
      for (var C = b[S], O = C.obj[C.prop], D = Object.keys(O), I = 0; I < D.length; ++I) {
        var M = D[I], F = O[M];
        typeof F == "object" && F !== null && _.indexOf(F) === -1 && (b.push({ obj: O, prop: M }), _.push(F));
      }
    return i(b), y;
  }, g = function(y) {
    return Object.prototype.toString.call(y) === "[object RegExp]";
  }, h = function(y) {
    return !y || typeof y != "object" ? !1 : !!(y.constructor && y.constructor.isBuffer && y.constructor.isBuffer(y));
  }, m = function(y, b) {
    return [].concat(y, b);
  }, d = function(y, b) {
    if (n(y)) {
      for (var _ = [], S = 0; S < y.length; S += 1)
        _.push(b(y[S]));
      return _;
    }
    return b(y);
  };
  return Ka = {
    arrayToObject: o,
    assign: u,
    combine: m,
    compact: p,
    decode: s,
    encode: f,
    isBuffer: h,
    isRegExp: g,
    maybeMap: d,
    merge: a
  }, Ka;
}
var za, Hu;
function Lv() {
  if (Hu) return za;
  Hu = 1;
  var e = qv(), t = /* @__PURE__ */ tf(), n = /* @__PURE__ */ Cs(), r = Object.prototype.hasOwnProperty, i = {
    brackets: function(c) {
      return c + "[]";
    },
    comma: "comma",
    indices: function(c, y) {
      return c + "[" + y + "]";
    },
    repeat: function(c) {
      return c;
    }
  }, o = Array.isArray, a = Array.prototype.push, u = function(d, c) {
    a.apply(d, o(c) ? c : [c]);
  }, s = Date.prototype.toISOString, l = n.default, f = {
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
    formatter: n.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(c) {
      return s.call(c);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, p = function(c) {
    return typeof c == "string" || typeof c == "number" || typeof c == "boolean" || typeof c == "symbol" || typeof c == "bigint";
  }, g = {}, h = function d(c, y, b, _, S, C, O, D, I, M, F, B, H, te, W, q, L, X) {
    for (var j = c, ee = X, re = 0, de = !1; (ee = ee.get(g)) !== void 0 && !de; ) {
      var ye = ee.get(c);
      if (re += 1, typeof ye < "u") {
        if (ye === re)
          throw new RangeError("Cyclic object value");
        de = !0;
      }
      typeof ee.get(g) > "u" && (re = 0);
    }
    if (typeof M == "function" ? j = M(y, j) : j instanceof Date ? j = H(j) : b === "comma" && o(j) && (j = t.maybeMap(j, function(_t) {
      return _t instanceof Date ? H(_t) : _t;
    })), j === null) {
      if (C)
        return I && !q ? I(y, f.encoder, L, "key", te) : y;
      j = "";
    }
    if (p(j) || t.isBuffer(j)) {
      if (I) {
        var ke = q ? y : I(y, f.encoder, L, "key", te);
        return [W(ke) + "=" + W(I(j, f.encoder, L, "value", te))];
      }
      return [W(y) + "=" + W(String(j))];
    }
    var Re = [];
    if (typeof j > "u")
      return Re;
    var N;
    if (b === "comma" && o(j))
      q && I && (j = t.maybeMap(j, I)), N = [{ value: j.length > 0 ? j.join(",") || null : void 0 }];
    else if (o(M))
      N = M;
    else {
      var z = Object.keys(j);
      N = F ? z.sort(F) : z;
    }
    var Se = D ? String(y).replace(/\./g, "%2E") : String(y), Ne = _ && o(j) && j.length === 1 ? Se + "[]" : Se;
    if (S && o(j) && j.length === 0)
      return Ne + "[]";
    for (var xe = 0; xe < N.length; ++xe) {
      var ne = N[xe], _e = typeof ne == "object" && ne && typeof ne.value < "u" ? ne.value : j[ne];
      if (!(O && _e === null)) {
        var be = B && D ? String(ne).replace(/\./g, "%2E") : String(ne), Fe = o(j) ? typeof b == "function" ? b(Ne, be) : Ne : Ne + (B ? "." + be : "[" + be + "]");
        X.set(c, re);
        var lt = e();
        lt.set(g, X), u(Re, d(
          _e,
          Fe,
          b,
          _,
          S,
          C,
          O,
          D,
          b === "comma" && q && o(j) ? null : I,
          M,
          F,
          B,
          H,
          te,
          W,
          q,
          L,
          lt
        ));
      }
    }
    return Re;
  }, m = function(c) {
    if (!c)
      return f;
    if (typeof c.allowEmptyArrays < "u" && typeof c.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof c.encodeDotInKeys < "u" && typeof c.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (c.encoder !== null && typeof c.encoder < "u" && typeof c.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var y = c.charset || f.charset;
    if (typeof c.charset < "u" && c.charset !== "utf-8" && c.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var b = n.default;
    if (typeof c.format < "u") {
      if (!r.call(n.formatters, c.format))
        throw new TypeError("Unknown format option provided.");
      b = c.format;
    }
    var _ = n.formatters[b], S = f.filter;
    (typeof c.filter == "function" || o(c.filter)) && (S = c.filter);
    var C;
    if (c.arrayFormat in i ? C = c.arrayFormat : "indices" in c ? C = c.indices ? "indices" : "repeat" : C = f.arrayFormat, "commaRoundTrip" in c && typeof c.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var O = typeof c.allowDots > "u" ? c.encodeDotInKeys === !0 ? !0 : f.allowDots : !!c.allowDots;
    return {
      addQueryPrefix: typeof c.addQueryPrefix == "boolean" ? c.addQueryPrefix : f.addQueryPrefix,
      allowDots: O,
      allowEmptyArrays: typeof c.allowEmptyArrays == "boolean" ? !!c.allowEmptyArrays : f.allowEmptyArrays,
      arrayFormat: C,
      charset: y,
      charsetSentinel: typeof c.charsetSentinel == "boolean" ? c.charsetSentinel : f.charsetSentinel,
      commaRoundTrip: !!c.commaRoundTrip,
      delimiter: typeof c.delimiter > "u" ? f.delimiter : c.delimiter,
      encode: typeof c.encode == "boolean" ? c.encode : f.encode,
      encodeDotInKeys: typeof c.encodeDotInKeys == "boolean" ? c.encodeDotInKeys : f.encodeDotInKeys,
      encoder: typeof c.encoder == "function" ? c.encoder : f.encoder,
      encodeValuesOnly: typeof c.encodeValuesOnly == "boolean" ? c.encodeValuesOnly : f.encodeValuesOnly,
      filter: S,
      format: b,
      formatter: _,
      serializeDate: typeof c.serializeDate == "function" ? c.serializeDate : f.serializeDate,
      skipNulls: typeof c.skipNulls == "boolean" ? c.skipNulls : f.skipNulls,
      sort: typeof c.sort == "function" ? c.sort : null,
      strictNullHandling: typeof c.strictNullHandling == "boolean" ? c.strictNullHandling : f.strictNullHandling
    };
  };
  return za = function(d, c) {
    var y = d, b = m(c), _, S;
    typeof b.filter == "function" ? (S = b.filter, y = S("", y)) : o(b.filter) && (S = b.filter, _ = S);
    var C = [];
    if (typeof y != "object" || y === null)
      return "";
    var O = i[b.arrayFormat], D = O === "comma" && b.commaRoundTrip;
    _ || (_ = Object.keys(y)), b.sort && _.sort(b.sort);
    for (var I = e(), M = 0; M < _.length; ++M) {
      var F = _[M], B = y[F];
      b.skipNulls && B === null || u(C, h(
        B,
        F,
        O,
        D,
        b.allowEmptyArrays,
        b.strictNullHandling,
        b.skipNulls,
        b.encodeDotInKeys,
        b.encode ? b.encoder : null,
        b.filter,
        b.sort,
        b.allowDots,
        b.serializeDate,
        b.format,
        b.formatter,
        b.encodeValuesOnly,
        b.charset,
        I
      ));
    }
    var H = C.join(b.delimiter), te = b.addQueryPrefix === !0 ? "?" : "";
    return b.charsetSentinel && (b.charset === "iso-8859-1" ? te += "utf8=%26%2310003%3B&" : te += "utf8=%E2%9C%93&"), H.length > 0 ? te + H : "";
  }, za;
}
var Ya, Gu;
function Vv() {
  if (Gu) return Ya;
  Gu = 1;
  var e = /* @__PURE__ */ tf(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
  }, i = function(g) {
    return g.replace(/&#(\d+);/g, function(h, m) {
      return String.fromCharCode(parseInt(m, 10));
    });
  }, o = function(g, h, m) {
    if (g && typeof g == "string" && h.comma && g.indexOf(",") > -1)
      return g.split(",");
    if (h.throwOnLimitExceeded && m >= h.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return g;
  }, a = "utf8=%26%2310003%3B", u = "utf8=%E2%9C%93", s = function(h, m) {
    var d = { __proto__: null }, c = m.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    c = c.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var y = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, b = c.split(
      m.delimiter,
      m.throwOnLimitExceeded ? y + 1 : y
    );
    if (m.throwOnLimitExceeded && b.length > y)
      throw new RangeError("Parameter limit exceeded. Only " + y + " parameter" + (y === 1 ? "" : "s") + " allowed.");
    var _ = -1, S, C = m.charset;
    if (m.charsetSentinel)
      for (S = 0; S < b.length; ++S)
        b[S].indexOf("utf8=") === 0 && (b[S] === u ? C = "utf-8" : b[S] === a && (C = "iso-8859-1"), _ = S, S = b.length);
    for (S = 0; S < b.length; ++S)
      if (S !== _) {
        var O = b[S], D = O.indexOf("]="), I = D === -1 ? O.indexOf("=") : D + 1, M, F;
        I === -1 ? (M = m.decoder(O, r.decoder, C, "key"), F = m.strictNullHandling ? null : "") : (M = m.decoder(O.slice(0, I), r.decoder, C, "key"), F = e.maybeMap(
          o(
            O.slice(I + 1),
            m,
            n(d[M]) ? d[M].length : 0
          ),
          function(H) {
            return m.decoder(H, r.decoder, C, "value");
          }
        )), F && m.interpretNumericEntities && C === "iso-8859-1" && (F = i(String(F))), O.indexOf("[]=") > -1 && (F = n(F) ? [F] : F);
        var B = t.call(d, M);
        B && m.duplicates === "combine" ? d[M] = e.combine(d[M], F) : (!B || m.duplicates === "last") && (d[M] = F);
      }
    return d;
  }, l = function(g, h, m, d) {
    var c = 0;
    if (g.length > 0 && g[g.length - 1] === "[]") {
      var y = g.slice(0, -1).join("");
      c = Array.isArray(h) && h[y] ? h[y].length : 0;
    }
    for (var b = d ? h : o(h, m, c), _ = g.length - 1; _ >= 0; --_) {
      var S, C = g[_];
      if (C === "[]" && m.parseArrays)
        S = m.allowEmptyArrays && (b === "" || m.strictNullHandling && b === null) ? [] : e.combine([], b);
      else {
        S = m.plainObjects ? { __proto__: null } : {};
        var O = C.charAt(0) === "[" && C.charAt(C.length - 1) === "]" ? C.slice(1, -1) : C, D = m.decodeDotInKeys ? O.replace(/%2E/g, ".") : O, I = parseInt(D, 10);
        !m.parseArrays && D === "" ? S = { 0: b } : !isNaN(I) && C !== D && String(I) === D && I >= 0 && m.parseArrays && I <= m.arrayLimit ? (S = [], S[I] = b) : D !== "__proto__" && (S[D] = b);
      }
      b = S;
    }
    return b;
  }, f = function(h, m, d, c) {
    if (h) {
      var y = d.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h, b = /(\[[^[\]]*])/, _ = /(\[[^[\]]*])/g, S = d.depth > 0 && b.exec(y), C = S ? y.slice(0, S.index) : y, O = [];
      if (C) {
        if (!d.plainObjects && t.call(Object.prototype, C) && !d.allowPrototypes)
          return;
        O.push(C);
      }
      for (var D = 0; d.depth > 0 && (S = _.exec(y)) !== null && D < d.depth; ) {
        if (D += 1, !d.plainObjects && t.call(Object.prototype, S[1].slice(1, -1)) && !d.allowPrototypes)
          return;
        O.push(S[1]);
      }
      if (S) {
        if (d.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + d.depth + " and strictDepth is true");
        O.push("[" + y.slice(S.index) + "]");
      }
      return l(O, m, d, c);
    }
  }, p = function(h) {
    if (!h)
      return r;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.decodeDotInKeys < "u" && typeof h.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.decoder !== null && typeof h.decoder < "u" && typeof h.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof h.throwOnLimitExceeded < "u" && typeof h.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var m = typeof h.charset > "u" ? r.charset : h.charset, d = typeof h.duplicates > "u" ? r.duplicates : h.duplicates;
    if (d !== "combine" && d !== "first" && d !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var c = typeof h.allowDots > "u" ? h.decodeDotInKeys === !0 ? !0 : r.allowDots : !!h.allowDots;
    return {
      allowDots: c,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof h.allowPrototypes == "boolean" ? h.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof h.allowSparse == "boolean" ? h.allowSparse : r.allowSparse,
      arrayLimit: typeof h.arrayLimit == "number" ? h.arrayLimit : r.arrayLimit,
      charset: m,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : r.charsetSentinel,
      comma: typeof h.comma == "boolean" ? h.comma : r.comma,
      decodeDotInKeys: typeof h.decodeDotInKeys == "boolean" ? h.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof h.decoder == "function" ? h.decoder : r.decoder,
      delimiter: typeof h.delimiter == "string" || e.isRegExp(h.delimiter) ? h.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof h.depth == "number" || h.depth === !1 ? +h.depth : r.depth,
      duplicates: d,
      ignoreQueryPrefix: h.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof h.interpretNumericEntities == "boolean" ? h.interpretNumericEntities : r.interpretNumericEntities,
      parameterLimit: typeof h.parameterLimit == "number" ? h.parameterLimit : r.parameterLimit,
      parseArrays: h.parseArrays !== !1,
      plainObjects: typeof h.plainObjects == "boolean" ? h.plainObjects : r.plainObjects,
      strictDepth: typeof h.strictDepth == "boolean" ? !!h.strictDepth : r.strictDepth,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : r.strictNullHandling,
      throwOnLimitExceeded: typeof h.throwOnLimitExceeded == "boolean" ? h.throwOnLimitExceeded : !1
    };
  };
  return Ya = function(g, h) {
    var m = p(h);
    if (g === "" || g === null || typeof g > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var d = typeof g == "string" ? s(g, m) : g, c = m.plainObjects ? { __proto__: null } : {}, y = Object.keys(d), b = 0; b < y.length; ++b) {
      var _ = y[b], S = f(_, d[_], m, typeof g == "string");
      c = e.merge(c, S, m);
    }
    return m.allowSparse === !0 ? c : e.compact(c);
  }, Ya;
}
var Xa, Ku;
function Uv() {
  if (Ku) return Xa;
  Ku = 1;
  var e = /* @__PURE__ */ Lv(), t = /* @__PURE__ */ Vv(), n = /* @__PURE__ */ Cs();
  return Xa = {
    formats: n,
    parse: t,
    stringify: e
  }, Xa;
}
var Xi = { exports: {} }, Wv = Xi.exports, zu;
function Hv() {
  return zu || (zu = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(typeof self < "u" ? self : typeof window < "u" ? window : typeof ei < "u" ? ei : Wv, function() {
      var n = "3.7.7", r = n, i = typeof Buffer == "function", o = typeof TextDecoder == "function" ? new TextDecoder() : void 0, a = typeof TextEncoder == "function" ? new TextEncoder() : void 0, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = Array.prototype.slice.call(u), l = function(N) {
        var z = {};
        return N.forEach(function(Se, Ne) {
          return z[Se] = Ne;
        }), z;
      }(s), f = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, p = String.fromCharCode.bind(String), g = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function(N) {
        return new Uint8Array(Array.prototype.slice.call(N, 0));
      }, h = function(N) {
        return N.replace(/=/g, "").replace(/[+\/]/g, function(z) {
          return z == "+" ? "-" : "_";
        });
      }, m = function(N) {
        return N.replace(/[^A-Za-z0-9\+\/]/g, "");
      }, d = function(N) {
        for (var z, Se, Ne, xe, ne = "", _e = N.length % 3, be = 0; be < N.length; ) {
          if ((Se = N.charCodeAt(be++)) > 255 || (Ne = N.charCodeAt(be++)) > 255 || (xe = N.charCodeAt(be++)) > 255)
            throw new TypeError("invalid character found");
          z = Se << 16 | Ne << 8 | xe, ne += s[z >> 18 & 63] + s[z >> 12 & 63] + s[z >> 6 & 63] + s[z & 63];
        }
        return _e ? ne.slice(0, _e - 3) + "===".substring(_e) : ne;
      }, c = typeof btoa == "function" ? function(N) {
        return btoa(N);
      } : i ? function(N) {
        return Buffer.from(N, "binary").toString("base64");
      } : d, y = i ? function(N) {
        return Buffer.from(N).toString("base64");
      } : function(N) {
        for (var z = 4096, Se = [], Ne = 0, xe = N.length; Ne < xe; Ne += z)
          Se.push(p.apply(null, N.subarray(Ne, Ne + z)));
        return c(Se.join(""));
      }, b = function(N, z) {
        return z === void 0 && (z = !1), z ? h(y(N)) : y(N);
      }, _ = function(N) {
        if (N.length < 2) {
          var z = N.charCodeAt(0);
          return z < 128 ? N : z < 2048 ? p(192 | z >>> 6) + p(128 | z & 63) : p(224 | z >>> 12 & 15) + p(128 | z >>> 6 & 63) + p(128 | z & 63);
        } else {
          var z = 65536 + (N.charCodeAt(0) - 55296) * 1024 + (N.charCodeAt(1) - 56320);
          return p(240 | z >>> 18 & 7) + p(128 | z >>> 12 & 63) + p(128 | z >>> 6 & 63) + p(128 | z & 63);
        }
      }, S = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, C = function(N) {
        return N.replace(S, _);
      }, O = i ? function(N) {
        return Buffer.from(N, "utf8").toString("base64");
      } : a ? function(N) {
        return y(a.encode(N));
      } : function(N) {
        return c(C(N));
      }, D = function(N, z) {
        return z === void 0 && (z = !1), z ? h(O(N)) : O(N);
      }, I = function(N) {
        return D(N, !0);
      }, M = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, F = function(N) {
        switch (N.length) {
          case 4:
            var z = (7 & N.charCodeAt(0)) << 18 | (63 & N.charCodeAt(1)) << 12 | (63 & N.charCodeAt(2)) << 6 | 63 & N.charCodeAt(3), Se = z - 65536;
            return p((Se >>> 10) + 55296) + p((Se & 1023) + 56320);
          case 3:
            return p((15 & N.charCodeAt(0)) << 12 | (63 & N.charCodeAt(1)) << 6 | 63 & N.charCodeAt(2));
          default:
            return p((31 & N.charCodeAt(0)) << 6 | 63 & N.charCodeAt(1));
        }
      }, B = function(N) {
        return N.replace(M, F);
      }, H = function(N) {
        if (N = N.replace(/\s+/g, ""), !f.test(N))
          throw new TypeError("malformed base64.");
        N += "==".slice(2 - (N.length & 3));
        for (var z, Se = "", Ne, xe, ne = 0; ne < N.length; )
          z = l[N.charAt(ne++)] << 18 | l[N.charAt(ne++)] << 12 | (Ne = l[N.charAt(ne++)]) << 6 | (xe = l[N.charAt(ne++)]), Se += Ne === 64 ? p(z >> 16 & 255) : xe === 64 ? p(z >> 16 & 255, z >> 8 & 255) : p(z >> 16 & 255, z >> 8 & 255, z & 255);
        return Se;
      }, te = typeof atob == "function" ? function(N) {
        return atob(m(N));
      } : i ? function(N) {
        return Buffer.from(N, "base64").toString("binary");
      } : H, W = i ? function(N) {
        return g(Buffer.from(N, "base64"));
      } : function(N) {
        return g(te(N).split("").map(function(z) {
          return z.charCodeAt(0);
        }));
      }, q = function(N) {
        return W(X(N));
      }, L = i ? function(N) {
        return Buffer.from(N, "base64").toString("utf8");
      } : o ? function(N) {
        return o.decode(W(N));
      } : function(N) {
        return B(te(N));
      }, X = function(N) {
        return m(N.replace(/[-_]/g, function(z) {
          return z == "-" ? "+" : "/";
        }));
      }, j = function(N) {
        return L(X(N));
      }, ee = function(N) {
        if (typeof N != "string")
          return !1;
        var z = N.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(z) || !/[^\s0-9a-zA-Z\-_]/.test(z);
      }, re = function(N) {
        return {
          value: N,
          enumerable: !1,
          writable: !0,
          configurable: !0
        };
      }, de = function() {
        var N = function(z, Se) {
          return Object.defineProperty(String.prototype, z, re(Se));
        };
        N("fromBase64", function() {
          return j(this);
        }), N("toBase64", function(z) {
          return D(this, z);
        }), N("toBase64URI", function() {
          return D(this, !0);
        }), N("toBase64URL", function() {
          return D(this, !0);
        }), N("toUint8Array", function() {
          return q(this);
        });
      }, ye = function() {
        var N = function(z, Se) {
          return Object.defineProperty(Uint8Array.prototype, z, re(Se));
        };
        N("toBase64", function(z) {
          return b(this, z);
        }), N("toBase64URI", function() {
          return b(this, !0);
        }), N("toBase64URL", function() {
          return b(this, !0);
        });
      }, ke = function() {
        de(), ye();
      }, Re = {
        version: n,
        VERSION: r,
        atob: te,
        atobPolyfill: H,
        btoa: c,
        btoaPolyfill: d,
        fromBase64: j,
        toBase64: D,
        encode: D,
        encodeURI: I,
        encodeURL: I,
        utob: C,
        btou: B,
        decode: j,
        isValid: ee,
        fromUint8Array: b,
        toUint8Array: q,
        extendString: de,
        extendUint8Array: ye,
        extendBuiltins: ke
      };
      return Re.Base64 = {}, Object.keys(Re).forEach(function(N) {
        return Re.Base64[N] = Re[N];
      }), Re;
    });
  }(Xi)), Xi.exports;
}
var Yu;
function Gv() {
  if (Yu) return ln;
  Yu = 1;
  var e = ln.__assign || function() {
    return e = Object.assign || function(p) {
      for (var g, h = 1, m = arguments.length; h < m; h++) {
        g = arguments[h];
        for (var d in g) Object.prototype.hasOwnProperty.call(g, d) && (p[d] = g[d]);
      }
      return p;
    }, e.apply(this, arguments);
  }, t = ln.__awaiter || function(p, g, h, m) {
    function d(c) {
      return c instanceof h ? c : new h(function(y) {
        y(c);
      });
    }
    return new (h || (h = Promise))(function(c, y) {
      function b(C) {
        try {
          S(m.next(C));
        } catch (O) {
          y(O);
        }
      }
      function _(C) {
        try {
          S(m.throw(C));
        } catch (O) {
          y(O);
        }
      }
      function S(C) {
        C.done ? c(C.value) : d(C.value).then(b, _);
      }
      S((m = m.apply(p, g || [])).next());
    });
  }, n = ln.__generator || function(p, g) {
    var h = { label: 0, sent: function() {
      if (c[0] & 1) throw c[1];
      return c[1];
    }, trys: [], ops: [] }, m, d, c, y = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return y.next = b(0), y.throw = b(1), y.return = b(2), typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
    function b(S) {
      return function(C) {
        return _([S, C]);
      };
    }
    function _(S) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; y && (y = 0, S[0] && (h = 0)), h; ) try {
        if (m = 1, d && (c = S[0] & 2 ? d.return : S[0] ? d.throw || ((c = d.return) && c.call(d), 0) : d.next) && !(c = c.call(d, S[1])).done) return c;
        switch (d = 0, c && (S = [S[0] & 2, c.value]), S[0]) {
          case 0:
          case 1:
            c = S;
            break;
          case 4:
            return h.label++, { value: S[1], done: !1 };
          case 5:
            h.label++, d = S[1], S = [0];
            continue;
          case 7:
            S = h.ops.pop(), h.trys.pop();
            continue;
          default:
            if (c = h.trys, !(c = c.length > 0 && c[c.length - 1]) && (S[0] === 6 || S[0] === 2)) {
              h = 0;
              continue;
            }
            if (S[0] === 3 && (!c || S[1] > c[0] && S[1] < c[3])) {
              h.label = S[1];
              break;
            }
            if (S[0] === 6 && h.label < c[1]) {
              h.label = c[1], c = S;
              break;
            }
            if (c && h.label < c[2]) {
              h.label = c[2], h.ops.push(S);
              break;
            }
            c[2] && h.ops.pop(), h.trys.pop();
            continue;
        }
        S = g.call(p, h);
      } catch (C) {
        S = [6, C], d = 0;
      } finally {
        m = c = 0;
      }
      if (S[0] & 5) throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  }, r = ln.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(ln, "__esModule", { value: !0 }), ln.KintoneRequestConfigBuilder = void 0;
  var i = r(Gc()), o = r(/* @__PURE__ */ Uv()), a = /* @__PURE__ */ Hv(), u = go(), s = "http", l = 4096, f = (
    /** @class */
    function() {
      function p(g) {
        if (this.baseUrl = g.baseUrl, this.auth = g.auth, this.headers = this.buildHeaders({
          basicAuth: g.basicAuth,
          userAgent: g.userAgent
        }), "httpsAgent" in g) {
          if ("clientCertAuth" in g)
            throw new Error("Cannot specify clientCertAuth along with httpsAgent.");
          this.httpsAgent = g.httpsAgent;
        } else "clientCertAuth" in g && (this.clientCertAuth = g.clientCertAuth);
        this.proxy = g.proxy, this.requestToken = null, this.socketTimeout = g.socketTimeout;
      }
      return p.prototype.build = function(g, h, m, d) {
        return t(this, void 0, void 0, function() {
          var c, y, O, b, _, S, C, O, D, I, M, F, B;
          return n(this, function(H) {
            switch (H.label) {
              case 0:
                switch (c = e(e(e({ method: g, headers: this.headers, url: "".concat(this.baseUrl).concat(h) }, d || {}), u.platformDeps.buildPlatformDependentConfig({
                  httpsAgent: this.httpsAgent,
                  clientCertAuth: this.clientCertAuth,
                  socketTimeout: this.socketTimeout
                })), { proxy: this.buildProxyConfig(this.proxy) }), y = g, y) {
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
                return O = this.buildRequestUrl(h, m), O.length > l ? (b = [e({}, c)], M = { method: "post", headers: e(e({}, this.headers), { "X-HTTP-Method-Override": "GET" }) }, [4, this.buildData(m)]) : [3, 3];
              case 2:
                return [2, e.apply(void 0, b.concat([(M.data = H.sent(), M)]))];
              case 3:
                return [2, e(e({}, c), { url: O })];
              case 4:
                return m instanceof i.default ? [4, this.buildData(m)] : [3, 6];
              case 5:
                return _ = H.sent(), [2, e(e({}, c), { headers: (
                  // NOTE: formData.getHeaders does not exist in a browser environment.
                  typeof _.getHeaders == "function" ? e(e({}, this.headers), _.getHeaders()) : this.headers
                ), data: _ })];
              case 6:
                return S = [e({}, c)], F = {}, [4, this.buildData(m)];
              case 7:
                return [2, e.apply(void 0, S.concat([(F.data = H.sent(), F)]))];
              case 8:
                return C = [e({}, c)], B = {}, [4, this.buildData(m)];
              case 9:
                return [2, e.apply(void 0, C.concat([(B.data = H.sent(), B)]))];
              case 10:
                return D = this.buildRequestUrl, I = [h], [4, this.buildData(m)];
              case 11:
                return O = D.apply(this, I.concat([H.sent()])), [2, e(e({}, c), { url: O })];
              case 12:
                throw new Error("".concat(g, " method is not supported"));
              case 13:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, p.prototype.buildProxyConfig = function(g) {
        var h;
        if (g !== void 0) {
          if (g === !1)
            return !1;
          var m = g;
          return m.auth && (m.auth.username.length === 0 || m.auth.password.length === 0) && (m.auth = void 0), m.protocol = (h = m.protocol) !== null && h !== void 0 ? h : s, m;
        }
      }, p.prototype.buildRequestUrl = function(g, h) {
        return "".concat(this.baseUrl).concat(g, "?").concat(o.default.stringify(h));
      }, p.prototype.buildData = function(g) {
        return t(this, void 0, void 0, function() {
          var h;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return this.auth.type !== "session" ? [3, 2] : [4, this.getRequestToken()];
              case 1:
                return h = m.sent(), g instanceof i.default ? (g.append("__REQUEST_TOKEN__", h), [2, g]) : [2, e({ __REQUEST_TOKEN__: h }, g)];
              case 2:
                return [2, g];
            }
          });
        });
      }, p.prototype.buildHeaders = function(g) {
        var h = g.basicAuth, m = g.userAgent, d = h ? {
          Authorization: "Basic ".concat(a.Base64.encode("".concat(h.username, ":").concat(h.password)))
        } : {}, c = u.platformDeps.buildHeaders({ userAgent: m }), y = e(e({}, c), d);
        switch (this.auth.type) {
          case "password":
            return e(e({}, y), { "X-Cybozu-Authorization": a.Base64.encode("".concat(this.auth.username, ":").concat(this.auth.password)) });
          case "apiToken": {
            var b = this.auth.apiToken;
            return Array.isArray(b) ? e(e({}, y), { "X-Cybozu-API-Token": b.join(",") }) : e(e({}, y), { "X-Cybozu-API-Token": b });
          }
          case "oAuthToken":
            return e(e({}, y), { Authorization: "Bearer ".concat(this.auth.oAuthToken) });
          default:
            return e(e({}, y), { "X-Requested-With": "XMLHttpRequest" });
        }
      }, p.prototype.getRequestToken = function() {
        return t(this, void 0, void 0, function() {
          var g;
          return n(this, function(h) {
            switch (h.label) {
              case 0:
                return this.requestToken !== null ? [3, 2] : (g = this, [4, u.platformDeps.getRequestToken()]);
              case 1:
                g.requestToken = h.sent(), h.label = 2;
              case 2:
                return [2, this.requestToken];
            }
          });
        });
      }, p;
    }()
  );
  return ln.KintoneRequestConfigBuilder = f, ln;
}
var Bn = {}, Xu;
function Kv() {
  if (Xu) return Bn;
  Xu = 1;
  var e = Bn.__assign || function() {
    return e = Object.assign || function(i) {
      for (var o, a = 1, u = arguments.length; a < u; a++) {
        o = arguments[a];
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
      }
      return i;
    }, e.apply(this, arguments);
  }, t = Bn.__rest || function(i, o) {
    var a = {};
    for (var u in i) Object.prototype.hasOwnProperty.call(i, u) && o.indexOf(u) < 0 && (a[u] = i[u]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, u = Object.getOwnPropertySymbols(i); s < u.length; s++)
        o.indexOf(u[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, u[s]) && (a[u[s]] = i[u[s]]);
    return a;
  };
  Object.defineProperty(Bn, "__esModule", { value: !0 }), Bn.KintoneResponseHandler = void 0;
  var n = Os(), r = (
    /** @class */
    function() {
      function i(o) {
        var a = o.enableAbortSearchError;
        this.enableAbortSearchError = a;
      }
      return i.prototype.handle = function(o) {
        var a = this;
        return o.then(function(u) {
          return a.handleSuccessResponse(u);
        }, function(u) {
          return a.handleErrorResponse(u);
        });
      }, i.prototype.handleSuccessResponse = function(o) {
        if (this.enableAbortSearchError && /Filter aborted because of too many search results/.test(o.headers["x-cybozu-warning"]))
          throw new n.KintoneAbortSearchError(o.headers["x-cybozu-warning"]);
        return o.data;
      }, i.prototype.handleErrorResponse = function(o) {
        if (!o.response)
          throw /mac verify failure/.test(o.toString()) ? new Error("invalid clientCertAuth setting") : o;
        var a = o.response, u = a.data, s = t(a, ["data"]);
        throw typeof u == "string" ? new Error("".concat(s.status, ": ").concat(s.statusText)) : new n.KintoneRestAPIError(e({ data: u }, s));
      }, i;
    }()
  );
  return Bn.KintoneResponseHandler = r, Bn;
}
var Ju;
function zv() {
  if (Ju) return nr;
  Ju = 1;
  var e = nr.__assign || function() {
    return e = Object.assign || function(b) {
      for (var _, S = 1, C = arguments.length; S < C; S++) {
        _ = arguments[S];
        for (var O in _) Object.prototype.hasOwnProperty.call(_, O) && (b[O] = _[O]);
      }
      return b;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(nr, "__esModule", { value: !0 }), nr.KintoneRestAPIClient = void 0;
  var t = Zg(), n = ev(), r = iv(), i = ov(), o = av(), a = sv(), u = cv(), s = Gv(), l = Kv(), f = go(), p = Es(), g = function(b) {
    if ("username" in b)
      return e({ type: "password" }, b);
    if ("apiToken" in b)
      return e({ type: "apiToken" }, b);
    if ("oAuthToken" in b)
      return e({ type: "oAuthToken" }, b);
    try {
      return f.platformDeps.getDefaultAuth();
    } catch (_) {
      throw _ instanceof p.UnsupportedPlatformError ? new Error("session authentication is not supported in ".concat(_.platform, " environment.")) : _;
    }
  }, h = (
    /** @class */
    function() {
      function b(_) {
        _ === void 0 && (_ = {});
        var S, C, O;
        m(_), this.baseUrl = f.platformDeps.buildBaseUrl(_.baseUrl).replace(/\/+$/, "");
        var D = g((S = _.auth) !== null && S !== void 0 ? S : {}), I = new s.KintoneRequestConfigBuilder(e(e({}, _), { baseUrl: this.baseUrl, auth: D })), M = new l.KintoneResponseHandler({
          enableAbortSearchError: (O = (C = _.featureFlags) === null || C === void 0 ? void 0 : C.enableAbortSearchError) !== null && O !== void 0 ? O : !1
        }), F = new u.DefaultHttpClient({
          responseHandler: M,
          requestConfigBuilder: I
        }), B = _.guestSpaceId;
        this.bulkRequest_ = new t.BulkRequestClient(F, B), this.record = new r.RecordClient(F, this.bulkRequest_, B), this.app = new n.AppClient(F, B), this.space = new i.SpaceClient(F, B), this.file = new o.FileClient(F, B), this.plugin = new a.PluginClient(F);
      }
      return Object.defineProperty(b, "version", {
        get: function() {
          return f.platformDeps.getVersion();
        },
        enumerable: !1,
        configurable: !0
      }), b.prototype.getBaseUrl = function() {
        return this.baseUrl;
      }, b.prototype.bulkRequest = function(_) {
        return this.bulkRequest_.send(_);
      }, b;
    }()
  );
  nr.KintoneRestAPIClient = h;
  var m = function(b) {
    d(b.baseUrl), c(b.guestSpaceId), y(b.socketTimeout);
  }, d = function(b) {
    if (b !== void 0) {
      var _ = new URL(b);
      if (_.hostname !== "localhost" && _.protocol !== "https:")
        throw new Error('The protocol of baseUrl must be "https".');
    }
  }, c = function(b) {
    if (b === "" || b === null)
      throw new Error("invalid guestSpaceId: got [".concat(b, "]"));
  }, y = function(b) {
    if (b !== void 0) {
      var _ = parseFloat(b.toString());
      if (isNaN(_) || _ < 0)
        throw new Error("Invalid socketTimeout. Must be a positive number.");
    }
  };
  return nr;
}
var Qu;
function Yv() {
  return Qu || (Qu = 1, function(e) {
    var t = Fn.__createBinding || (Object.create ? function(s, l, f, p) {
      p === void 0 && (p = f);
      var g = Object.getOwnPropertyDescriptor(l, f);
      (!g || ("get" in g ? !l.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
        return l[f];
      } }), Object.defineProperty(s, p, g);
    } : function(s, l, f, p) {
      p === void 0 && (p = f), s[p] = l[f];
    }), n = Fn.__setModuleDefault || (Object.create ? function(s, l) {
      Object.defineProperty(s, "default", { enumerable: !0, value: l });
    } : function(s, l) {
      s.default = l;
    }), r = Fn.__importStar || /* @__PURE__ */ function() {
      var s = function(l) {
        return s = Object.getOwnPropertyNames || function(f) {
          var p = [];
          for (var g in f) Object.prototype.hasOwnProperty.call(f, g) && (p[p.length] = g);
          return p;
        }, s(l);
      };
      return function(l) {
        if (l && l.__esModule) return l;
        var f = {};
        if (l != null) for (var p = s(l), g = 0; g < p.length; g++) p[g] !== "default" && t(f, l, p[g]);
        return n(f, l), f;
      };
    }(), i = Fn.__exportStar || function(s, l) {
      for (var f in s) f !== "default" && !Object.prototype.hasOwnProperty.call(l, f) && t(l, s, f);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KintoneRestAPIClient = void 0;
    var o = go(), a = r(Jg());
    (0, o.injectPlatformDeps)(a);
    var u = zv();
    Object.defineProperty(e, "KintoneRestAPIClient", { enumerable: !0, get: function() {
      return u.KintoneRestAPIClient;
    } }), i(Os(), e);
  }(Fn)), Fn;
}
var Xv = Yv();
const Jv = {
  key: 0,
  class: "kvc-file-value"
}, Qv = { class: "kvc-file-select-list" }, Zv = ["src"], ey = { key: 1 }, ty = { class: "kvc-file-select-file-name" }, ny = { class: "kvc-file-select-file-size" }, ry = { class: "kvc-file-select-list-item" }, iy = ["onClick"], oy = { class: "kvc-file-select-file-name" }, ay = { class: "kvc-file-select-file-size" }, sy = ["src"], ly = { class: "kvc-file-select-group" }, uy = ["disabled"], cy = ["multiple", "accept"], fy = /* @__PURE__ */ We({
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
    const n = e, r = t, i = new Xv.KintoneRestAPIClient(), o = Ce(null), a = Ce(null), u = Ce(n.modelValue || []), s = Ce(null), l = Ce(null), f = Ce(!1);
    ti(() => n.modelValue, (c) => {
      u.value = c ? Array.from(c) : [];
    }), _r(async () => {
      if (u.value.length)
        for await (const c of u.value)
          c.fileKey && !c.data && (c.data = await i.file.downloadFile({ fileKey: c.fileKey }));
      s.value && xg(s, u, {
        onStart: () => f.value = !0,
        onEnd: () => {
          f.value = !1, setTimeout(() => {
            r("update:modelValue", u.value), r("change", u.value);
          }, 0);
        }
      });
    });
    const p = (c, y = 0) => {
      if (c === 0) return "0 Bytes";
      const b = 1024, _ = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], S = Math.floor(Math.log(c) / Math.log(b)), C = (c / Math.pow(b, S)).toFixed(y);
      return `${Number(C).toLocaleString()} ${_[S]}`;
    }, g = (c, y) => {
      if (!c || !y) return;
      const b = new Uint8Array(c), _ = Array.from(b).map((S) => String.fromCharCode(S)).join("");
      return `data:${y};base64,${btoa(_)}`;
    }, h = (c) => {
      u.value.splice(c, 1), r("update:modelValue", u.value), r("change", u.value);
    }, m = async (c) => {
      if (!c) return;
      const y = Array.from(c), b = y.filter((S) => !S.fileKey), _ = n.multiple ? [...u.value, ...y.filter((S) => S.fileKey)] : [];
      for await (const S of b) {
        let C = null;
        n.autoUpload && (C = (await i.file.uploadFile({ file: { name: S.name, data: S } })).fileKey);
        const O = await S.arrayBuffer();
        _.push({
          fileKey: C ?? void 0,
          name: S.name,
          size: S.size,
          contentType: S.type,
          data: O
        });
      }
      r("update:modelValue", _), r("change", _), u.value = _, a.value = null;
    }, { isOverDropZone: d } = Oh(l, {
      onDrop: (c) => {
        m(c);
      },
      dataTypes: we(() => {
        var c;
        return ((c = n.accept) == null ? void 0 : c.split(",")) ?? [];
      }),
      // ← 明示的にstring[] or []
      multiple: n.multiple,
      preventDefaultForUnhandled: !1
    });
    return (c, y) => c.readOnly ? (V(), G("div", Jv, [
      Z("ul", Qv, [
        (V(!0), G(wt, null, Ot(u.value, (b, _) => (V(), G("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          b.data && (b.contentType || "").startsWith("image/") ? (V(), G("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: g(b.data, b.contentType)
          }, null, 8, Zv)) : (V(), G("span", ey, [
            Z("span", ty, Ye(b.name), 1),
            Z("span", ny, "(" + Ye(p(b.size)) + ")", 1)
          ]))
        ]))), 128))
      ])
    ])) : (V(), G("div", {
      key: 1,
      ref_key: "dropZoneRef",
      ref: l,
      class: "kvc-file-select"
    }, [
      Z("ul", {
        class: "kvc-file-select-list",
        ref_key: "sortWrapRef",
        ref: s
      }, [
        (V(!0), G(wt, null, Ot(u.value, (b, _) => (V(), G("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          Z("div", ry, [
            c.disabled ? Oe("", !0) : (V(), G("button", {
              key: 0,
              type: "button",
              class: "kvc-file-select-delete-button",
              onClick: (S) => h(_)
            }, [
              Ue(Pe(it), {
                icon: "mdi:close",
                width: "22"
              })
            ], 8, iy)),
            Z("span", oy, Ye(b.name), 1),
            Z("span", ay, Ye(p(b.size)), 1)
          ]),
          b.data && (b.contentType || "").startsWith("image/") ? (V(), G("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: g(b.data, b.contentType)
          }, null, 8, sy)) : Oe("", !0)
        ]))), 128))
      ], 512),
      Z("div", ly, [
        Z("button", {
          type: "button",
          disabled: c.disabled,
          class: "kvc-file-select-button",
          onClick: y[0] || (y[0] = (b) => {
            var _;
            return (_ = o.value) == null ? void 0 : _.click();
          })
        }, " 参照 ", 8, uy),
        y[3] || (y[3] = Z("p", { class: "kvc-file-select-text" }, "(最大1 GB)", -1))
      ]),
      !f.value && Pe(d) ? (V(), G("div", {
        key: 0,
        class: "kvc-file-select-file-dropzone",
        onClick: y[1] || (y[1] = (b) => d.value = !1)
      }, " ここにファイルをドロップします。 ")) : Oe("", !0),
      Z("input", {
        type: "file",
        ref_key: "fileSelectRef",
        ref: o,
        multiple: c.multiple,
        accept: c.accept,
        onChange: y[2] || (y[2] = (b) => {
          var _;
          return m(((_ = b.target) == null ? void 0 : _.files) ?? null);
        })
      }, null, 40, cy)
    ], 512));
  }
}), dy = { class: "kvc-tab" }, py = { class: "kvc-tab-header" }, hy = ["onClick"], my = /* @__PURE__ */ We({
  __name: "index",
  props: {
    small: { type: Boolean },
    modelValue: {},
    width: {},
    height: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, i = Ce(e.modelValue), o = (s) => {
      i.value = s, n("update:modelValue", s);
    };
    Ys("activeTab", i), Ys("setActiveTab", o);
    const a = fs(), u = we(() => {
      const s = [];
      return (a.default ? a.default({}) : []).forEach((f) => {
        const p = f.props;
        p != null && p.label && (p != null && p.name) && s.push({
          label: p.label,
          name: p.name
        });
      }), !i.value && s.length > 0 && (i.value = s[0].name), s;
    });
    return (s, l) => (V(), G("div", dy, [
      Z("div", py, [
        (V(!0), G(wt, null, Ot(u.value, (f) => (V(), G("button", {
          key: f.name,
          type: "button",
          class: Xe(["kvc-tab-item", {
            "is-active": i.value === f.name,
            "kvc-tab-item-small": s.small
          }]),
          onClick: (p) => o(f.name)
        }, [
          Z("span", null, Ye(f.label), 1)
        ], 10, hy))), 128))
      ]),
      Z("div", {
        class: Xe(["kvc-tab-content", {
          "kvc-tab-content-small": s.small
        }]),
        style: ct({
          minWidth: s.width,
          minHeight: s.height
        })
      }, [
        Dt(s.$slots, "default")
      ], 6)
    ]));
  }
}), gy = { key: 0 }, vy = /* @__PURE__ */ We({
  __name: "pane",
  props: {
    label: {},
    name: {}
  },
  setup(e) {
    const t = e, n = Wf("activeTab", Ce("")), r = we(() => (n == null ? void 0 : n.value) === t.name);
    return (i, o) => r.value ? (V(), G("div", gy, [
      Dt(i.$slots, "default")
    ])) : Oe("", !0);
  }
}), yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KvcAutocomplete: Lh,
  KvcButton: Vh,
  KvcCheckbox: um,
  KvcDatePicker: Tc,
  KvcDateTimePicker: Ym,
  KvcDialog: lp,
  KvcDropdown: kh,
  KvcField: zh,
  KvcFileSelect: fy,
  KvcGroup: Qh,
  KvcRadio: rm,
  KvcRow: td,
  KvcSpinner: rc,
  KvcTab: my,
  KvcTabPane: vy,
  KvcTable: gh,
  KvcTextInput: bs,
  KvcTextarea: Jm,
  KvcTimePicker: Pc,
  KvcWrap: Jf
}, Symbol.toStringTag, { value: "Module" })), Oy = {
  install(e) {
    Object.entries(yy).forEach(([t, n]) => {
      const r = n;
      e.component(r.name || t, r);
    });
  }
};
export {
  Lh as KvcAutocomplete,
  Vh as KvcButton,
  um as KvcCheckbox,
  Tc as KvcDatePicker,
  Ym as KvcDateTimePicker,
  lp as KvcDialog,
  kh as KvcDropdown,
  zh as KvcField,
  fy as KvcFileSelect,
  Qh as KvcGroup,
  rm as KvcRadio,
  td as KvcRow,
  rc as KvcSpinner,
  my as KvcTab,
  vy as KvcTabPane,
  gh as KvcTable,
  bs as KvcTextInput,
  Jm as KvcTextarea,
  Pc as KvcTimePicker,
  Jf as KvcWrap,
  ds as Spinner,
  Oy as default,
  Gf as defaultSpinner,
  Ey as hideSpinner,
  xy as showSpinner,
  Hf as useSpinner
};

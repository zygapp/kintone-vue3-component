var Rf = Object.defineProperty;
var Tf = (e, t, n) => t in e ? Rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ks = (e, t, n) => Tf(e, typeof t != "symbol" ? t + "" : t, n);
import { reactive as Zu, readonly as kf, defineComponent as Ue, onMounted as _r, watch as ti, computed as ye, withDirectives as tn, openBlock as V, createElementBlock as H, createElementVNode as Z, createStaticVNode as Pf, vShow as Sr, createBlock as Nt, resolveDynamicComponent as If, withModifiers as $f, withCtx as Ji, renderSlot as Ct, createVNode as He, unref as Re, h as Qi, resolveComponent as ec, normalizeStyle as lt, toDisplayString as Ge, createCommentVNode as Se, createTextVNode as Do, useSlots as fs, normalizeClass as Ve, Fragment as gt, renderList as _t, mergeProps as zs, getCurrentScope as Nf, onScopeDispose as Mf, nextTick as tc, getCurrentInstance as jf, ref as De, shallowRef as Ff, toValue as cn, vModelRadio as Bf, vModelCheckbox as qf, vModelDynamic as Lf, vModelText as Vf, isRef as Uf, provide as Ys, inject as Wf } from "vue";
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
  spinnerState: kf(ur),
  createSpinner: (e) => new ds(e)
}), Gf = new ds(), Cy = (e) => {
  const t = new ds({ text: e });
  return t.open(), t;
}, Dy = () => {
  Gf.close();
}, Kf = { class: "kvc-spinner-wrapper" }, zf = { class: "kvc-spinner" }, Yf = ["innerHTML"], Xf = /* @__PURE__ */ Ue({
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
    const i = ye(() => (n.text || "").replace(`
`, "<br>"));
    return (o, a) => tn((V(), H("div", Kf, [
      Z("div", zf, [
        a[0] || (a[0] = Pf('<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" data-v-e1a38298><g data-v-e1a38298><circle cx="12" cy="2.5" r="1.5" fill="#99ccff" opacity="0.14" data-v-e1a38298></circle><circle cx="16.75" cy="3.77" r="1.5" fill="#99ccff" opacity="0.29" data-v-e1a38298></circle><circle cx="20.23" cy="7.25" r="1.5" fill="#99ccff" opacity="0.43" data-v-e1a38298></circle><circle cx="21.5" cy="12" r="1.5" fill="#99ccff" opacity="0.57" data-v-e1a38298></circle><circle cx="20.23" cy="16.75" r="1.5" fill="#99ccff" opacity="0.71" data-v-e1a38298></circle><circle cx="16.75" cy="20.23" r="1.5" fill="#99ccff" opacity="0.86" data-v-e1a38298></circle><circle cx="12" cy="21.5" r="1.5" fill="#99ccff" data-v-e1a38298></circle></g></svg>', 1)),
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
}, rc = /* @__PURE__ */ nc(Xf, [["__scopeId", "data-v-e1a38298"]]), Jf = /* @__PURE__ */ Ue({
  __name: "wrap",
  props: {
    isForm: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = t, { spinnerState: r } = Hf();
    return (i, o) => (V(), Nt(If(i.isForm ? "form" : "div"), {
      id: "kvc-wrap",
      class: "kvc-wrap",
      onSubmit: o[0] || (o[0] = $f((a) => n("submit", a), ["prevent"]))
    }, {
      default: Ji(() => [
        Ct(i.$slots, "default"),
        He(rc, {
          modelValue: Re(r).isVisible,
          text: Re(r).text
        }, null, 8, ["modelValue", "text"])
      ]),
      _: 3
    }, 32));
  }
}), Qf = {}, Zf = { class: "kvc-row" };
function ed(e, t) {
  return V(), H("div", Zf, [
    Ct(e.$slots, "default")
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
    return t && !ki(l) ? null : l;
  }
  const o = i[0], a = o.split("-");
  if (a.length > 1) {
    const u = {
      provider: r,
      prefix: a.shift(),
      name: a.join("-")
    };
    return t && !ki(u) ? null : u;
  }
  if (n && r === "") {
    const u = {
      provider: r,
      prefix: "",
      name: o
    };
    return t && !ki(u, n) ? null : u;
  }
  return null;
}, ki = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
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
function gr(e, t) {
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
    const n = gr(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function ud(e, t) {
  const n = co(e, !0, Qr);
  if (!n)
    return !1;
  const r = gr(n.provider, n.prefix);
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
  if (!ki({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = gr(t, n);
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
const vd = (e) => e === "unset" || e === "undefined" || e === "none";
function gd(e, t) {
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
  const v = {}, h = (d, c) => {
    vd(c) || (v[d] = c.toString());
  };
  h("width", f), h("height", p);
  const m = [i.left, i.top, s, l];
  return v.viewBox = m.join(" "), {
    attributes: v,
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
const hs = /* @__PURE__ */ Object.create(null), Pr = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Pi = [];
for (; Pr.length > 0; )
  Pr.length === 1 || Math.random() > 0.5 ? Pi.push(Pr.shift()) : Pi.push(Pr.pop());
hs[""] = ps({
  resources: ["https://api.iconify.design"].concat(Pi)
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
const Cd = (e, t, n) => {
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
function Dd(e) {
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
  let r = Dd(t.provider);
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
  prepare: Cd,
  send: Rd
};
function kd(e) {
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
    const o = i.provider, a = i.prefix, u = i.name, s = n[o] || (n[o] = /* @__PURE__ */ Object.create(null)), l = s[a] || (s[a] = gr(o, a));
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
function Pd(e) {
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
      const C = Math.floor(Math.random() * O.length);
      a.push(O[C]), O = O.slice(0, C).concat(O.slice(C + 1));
    }
    a = a.concat(O);
  } else
    a = e.resources.slice(o).concat(e.resources.slice(0, o));
  const u = Date.now();
  let s = "pending", l = 0, f, p = null, v = [], h = [];
  typeof r == "function" && h.push(r);
  function m() {
    p && (clearTimeout(p), p = null);
  }
  function d() {
    s === "pending" && (s = "aborted"), m(), v.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), v = [];
  }
  function c(O, C) {
    C && (h = []), typeof O == "function" && h.push(O);
  }
  function y() {
    return {
      startTime: u,
      payload: t,
      status: s,
      queriesSent: l,
      queriesPending: v.length,
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
    v.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), v = [];
  }
  function S(O, C, I) {
    const M = C !== "success";
    switch (v = v.filter((F) => F !== O), s) {
      case "pending":
        break;
      case "failed":
        if (M || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (C === "abort") {
      f = I, b();
      return;
    }
    if (M) {
      f = I, v.length || (a.length ? D() : b());
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
  function D() {
    if (s !== "pending")
      return;
    m();
    const O = a.shift();
    if (O === void 0) {
      if (v.length) {
        p = setTimeout(() => {
          m(), s === "pending" && (_(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const C = {
      status: "pending",
      resource: O,
      callback: (I, M) => {
        S(C, I, M);
      }
    };
    v.push(C), l++, p = setTimeout(D, e.rotate), n(O, t, C.callback);
  }
  return setTimeout(D), y;
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
      (p, v) => {
        r(), l && l(p, v);
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
    e.iconsLoaderFlag = !1, Pd(e);
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
        nl(p, (v) => {
          const h = v ? {
            prefix: r,
            icons: {
              [f]: v
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
  const n = Nd(e, !0, uc()), r = kd(n);
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
    a = l, u = f, o.push(gr(l, f));
    const p = i[l] || (i[l] = /* @__PURE__ */ Object.create(null));
    p[f] || (p[f] = []);
  }), r.pending.forEach((s) => {
    const { provider: l, prefix: f, name: p } = s, v = gr(l, f), h = v.pendingIcons || (v.pendingIcons = /* @__PURE__ */ new Set());
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
  const s = gd(e, n), l = s.attributes;
  if (n.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    r.style = {
      ...o,
      ...u
    }, Object.assign(r, l);
    let d = 0, c = t.id;
    return typeof c == "string" && (c = c.replace(/-/g, "_")), r.innerHTML = _d(s.body, c ? () => c + "ID" + d++ : "iconifyVue"), Qi("svg", r);
  }
  const { body: f, width: p, height: v } = e, h = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), m = zd(f, {
    ...l,
    width: p + "",
    height: v + ""
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
}, Qe = Ue({
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
}, ap = { class: "kvc-dialog-message" }, sp = { class: "kvc-dialog-footer" }, lp = /* @__PURE__ */ Ue({
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
      const v = ec("KvcButton");
      return f.modelValue ? (V(), H("div", tp, [
        Z("div", {
          class: "kvc-dialog",
          style: lt(f.width ? { width: f.width } : null)
        }, [
          Z("div", np, [
            Z("h2", rp, Ge(f.title), 1),
            Z("button", {
              type: "button",
              class: "kvc-dialog-close",
              onClick: l
            }, [
              He(Re(Qe), {
                icon: "mdi-light:plus",
                width: "24"
              })
            ])
          ]),
          Z("div", ip, [
            f.showIcon ? (V(), H("div", op, [
              He(Re(Qe), {
                icon: o(),
                width: "24",
                style: lt({ color: a() })
              }, null, 8, ["icon", "style"])
            ])) : Se("", !0),
            Z("div", ap, [
              Ct(f.$slots, "default", {}, () => [
                p[0] || (p[0] = Do("This is Content"))
              ])
            ])
          ]),
          Z("div", sp, [
            f.showCancel ? (V(), Nt(v, {
              key: 0,
              color: "normal",
              onClick: u
            }, {
              default: Ji(() => [
                Do(Ge(f.cancelText), 1)
              ]),
              _: 1
            })) : Se("", !0),
            f.showConfirm ? (V(), Nt(v, {
              key: 1,
              color: "save",
              onClick: s
            }, {
              default: Ji(() => [
                Do(Ge(f.confirmText), 1)
              ]),
              _: 1
            })) : Se("", !0)
          ])
        ], 4)
      ])) : Se("", !0);
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
var mn = fn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ni = fn(/Edge/i), ul = fn(/firefox/i), Vr = fn(/safari/i) && !fn(/chrome/i) && !fn(/android/i), mc = fn(/iP(ad|od|hone)/i), pp = fn(/chrome/i) && fn(/android/i), vc = {
  capture: !1,
  passive: !1
};
function Ie(e, t, n) {
  e.addEventListener(t, n, !mn && vc);
}
function ke(e, t, n) {
  e.removeEventListener(t, n, !mn && vc);
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
function gc(e, t, n) {
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
          var v = i.getBoundingClientRect();
          a -= v.top + parseInt(le(i, "border-top-width")), u -= v.left + parseInt(le(i, "border-left-width")), s = a + o.height, l = u + o.width;
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
  for (var r = Dn(e, !0), i = st(e)[t]; r; ) {
    var o = st(r)[n], a = void 0;
    if (a = i >= o, !a) return r;
    if (r === Jt()) break;
    r = Dn(r, !1);
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
function vs(e, t) {
  for (var n = e.lastElementChild; n && (n === ue.ghost || le(n, "display") === "none" || t && !eo(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function Mt(e, t) {
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
function Dn(e, t) {
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
function vp(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function ko(e, t) {
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
function gp() {
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
        var s = 0, l = u.target, f = l.fromRect, p = st(l), v = l.prevFromRect, h = l.prevToRect, m = u.rect, d = mr(l, !0);
        d && (p.top -= d.f, p.left -= d.e), l.toRect = p, l.thisAnimationDuration && ko(v, p) && !ko(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (m.top - p.top) / (m.left - p.left) === (f.top - p.top) / (f.left - p.left) && (s = wp(m, v, h, i.options)), ko(p, f) || (l.prevFromRect = f, l.prevToRect = p, s || (s = i.options.animation), i.animate(l, m, p, s)), s && (o = !0, a = Math.max(a, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
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
var Jn = [], Po = {
  initializeByDefault: !0
}, ri = {
  mount: function(t) {
    for (var n in Po)
      Po.hasOwnProperty(n) && !(n in t) && (t[n] = Po[n]);
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
  var t = e.sortable, n = e.rootEl, r = e.name, i = e.targetEl, o = e.cloneEl, a = e.toEl, u = e.fromEl, s = e.oldIndex, l = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, v = e.originalEvent, h = e.putSortable, m = e.extraEventProperties;
  if (t = t || n && n[$t], !!t) {
    var d, c = t.options, y = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !mn && !ni ? d = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(r, !0, !0)), d.to = a || n, d.from = u || n, d.item = i || n, d.clone = o, d.oldIndex = s, d.newIndex = l, d.oldDraggableIndex = f, d.newDraggableIndex = p, d.originalEvent = v, d.pullMode = h ? h.lastPutMode : void 0;
    var b = Zt(Zt({}, m), ri.getEventProperties(r, t));
    for (var _ in b)
      d[_] = b[_];
    n && n.dispatchEvent(d), c[y] && c[y].call(t, d);
  }
}
var Sp = ["evt"], Et = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, o = fp(r, Sp);
  ri.pluginEvent.bind(ue)(t, n, Zt({
    dragEl: Y,
    parentEl: ze,
    ghostEl: ve,
    rootEl: qe,
    nextEl: qn,
    lastDownEl: Ni,
    cloneEl: Xe,
    cloneHidden: An,
    dragStarted: Mr,
    putSortable: dt,
    activeSortable: ue.active,
    originalEvent: i,
    oldIndex: dr,
    oldDraggableIndex: Wr,
    newIndex: Pt,
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
      bt({
        sortable: n,
        name: u,
        originalEvent: i
      });
    }
  }, o));
};
function bt(e) {
  _p(Zt({
    putSortable: dt,
    cloneEl: Xe,
    targetEl: Y,
    rootEl: qe,
    oldIndex: dr,
    oldDraggableIndex: Wr,
    newIndex: Pt,
    newDraggableIndex: En
  }, e));
}
var Y, ze, ve, qe, qn, Ni, Xe, An, dr, Pt, Wr, En, xi, dt, cr = !1, to = !1, no = [], $n, Bt, Io, $o, pl, hl, Mr, Qn, Hr, Gr = !1, Ei = !1, Mi, mt, No = [], ts = !1, ro = [], po = typeof document < "u", Oi = mc, ml = ni || mn ? "cssFloat" : "float", xp = po && !pp && !mc && "draggable" in document.createElement("div"), _c = function() {
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
    if (!(!o || vs(i))) {
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
      var v = (a ? u : s).options.group.name;
      return o === !0 || typeof o == "string" && o === v || o.join && o.indexOf(v) > -1;
    };
  }
  var r = {}, i = t.group;
  (!i || $i(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = n(i.pull, !0), r.checkPut = n(i.put), r.revertClone = i.revertClone, t.group = r;
}, Ec = function() {
  !_c && ve && le(ve, "display", "none");
}, Oc = function() {
  !_c && ve && le(ve, "display", "");
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
        if (dr = Mt(s), Wr = Mt(s, i.draggable), typeof f == "function") {
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
            }), o && t.cancelable && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(p) {
          if (p = Xt(l, p.trim(), r, !1), p)
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
      if (qe = o, Y = r, ze = Y.parentNode, qn = Y.nextSibling, Ni = r, xi = a.group, ue.dragged = Y, $n = {
        target: Y,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, pl = $n.clientX - l.left, hl = $n.clientY - l.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, Y.style["will-change"] = "all", s = function() {
        if (Et("delayEnded", i, {
          evt: t
        }), ue.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !ul && i.nativeDraggable && (Y.draggable = !0), i._triggerDragStart(t, n), bt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), Tt(Y, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        gc(Y, f.trim(), Mo);
      }), Ie(u, "dragover", Nn), Ie(u, "mousemove", Nn), Ie(u, "touchmove", Nn), Ie(u, "mouseup", i._onDrop), Ie(u, "touchend", i._onDrop), Ie(u, "touchcancel", i._onDrop), ul && this.nativeDraggable && (this.options.touchStartThreshold = 4, Y.draggable = !0), Et("delayStart", this, {
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
    ke(t, "mouseup", this._disableDelayedDrag), ke(t, "touchend", this._disableDelayedDrag), ke(t, "touchcancel", this._disableDelayedDrag), ke(t, "mousemove", this._delayedDragTouchMoveHandler), ke(t, "touchmove", this._delayedDragTouchMoveHandler), ke(t, "pointermove", this._delayedDragTouchMoveHandler);
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
      Et("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Ie(document, "dragover", Ap);
      var r = this.options;
      !t && Tt(Y, r.dragClass, !1), Tt(Y, r.ghostClass, !0), ue.active = this, t && this._appendGhost(), bt({
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
      var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, o = t.touches ? t.touches[0] : t, a = ve && mr(ve, !0), u = ve && a && a.a, s = ve && a && a.d, l = Oi && mt && dl(mt), f = (o.clientX - $n.clientX + i.x) / (u || 1) + (l ? l[0] - No[0] : 0) / (u || 1), p = (o.clientY - $n.clientY + i.y) / (s || 1) + (l ? l[1] - No[1] : 0) / (s || 1);
      if (!ue.active && !cr) {
        if (r && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < r)
          return;
        this._onDragStart(t, !0);
      }
      if (ve) {
        a ? (a.e += f - (Io || 0), a.f += p - ($o || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: p
        };
        var v = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        le(ve, "webkitTransform", v), le(ve, "mozTransform", v), le(ve, "msTransform", v), le(ve, "transform", v), Io = f, $o = p, Bt = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ve) {
      var t = this.options.fallbackOnBody ? document.body : qe, n = st(Y, !0, Oi, !0, t), r = this.options;
      if (Oi) {
        for (mt = t; le(mt, "position") === "static" && le(mt, "transform") === "none" && mt !== document; )
          mt = mt.parentNode;
        mt !== document.body && mt !== document.documentElement ? (mt === document && (mt = Jt()), n.top += mt.scrollTop, n.left += mt.scrollLeft) : mt = Jt(), No = dl(mt);
      }
      ve = Y.cloneNode(!0), Tt(ve, r.ghostClass, !1), Tt(ve, r.fallbackClass, !0), Tt(ve, r.dragClass, !0), le(ve, "transition", ""), le(ve, "transform", ""), le(ve, "box-sizing", "border-box"), le(ve, "margin", 0), le(ve, "top", n.top), le(ve, "left", n.left), le(ve, "width", n.width), le(ve, "height", n.height), le(ve, "opacity", "0.8"), le(ve, "position", Oi ? "absolute" : "fixed"), le(ve, "zIndex", "100000"), le(ve, "pointerEvents", "none"), ue.ghost = ve, t.appendChild(ve), le(ve, "transform-origin", pl / parseInt(ve.style.width) * 100 + "% " + hl / parseInt(ve.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var r = this, i = t.dataTransfer, o = r.options;
    if (Et("dragStart", this, {
      evt: t
    }), ue.eventCanceled) {
      this._onDrop();
      return;
    }
    Et("setupClone", this), ue.eventCanceled || (Xe = wc(Y), Xe.draggable = !1, Xe.style["will-change"] = "", this._hideClone(), Tt(Xe, this.options.chosenClass, !1), ue.clone = Xe), r.cloneId = ji(function() {
      Et("clone", r), !ue.eventCanceled && (r.options.removeCloneOnHide || qe.insertBefore(Xe, Y), r._hideClone(), bt({
        sortable: r,
        name: "clone"
      }));
    }), !n && Tt(Y, o.dragClass, !0), n ? (to = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (ke(document, "mouseup", r._onDrop), ke(document, "touchend", r._onDrop), ke(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(r, i, Y)), Ie(document, "drop", r), le(Y, "transform", "translateZ(0)")), cr = !0, r._dragStartId = ji(r._dragStarted.bind(r, n, t)), Ie(document, "selectstart", r), Mr = !0, Vr && le(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, r = t.target, i, o, a, u = this.options, s = u.group, l = ue.active, f = xi === s, p = u.sort, v = dt || l, h, m = this, d = !1;
    if (ts) return;
    function c(j, ee) {
      Et(j, m, Zt({
        evt: t,
        isOwner: f,
        axis: h ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: o,
        canSort: p,
        fromSortable: v,
        target: r,
        completed: b,
        onMove: function(de, be) {
          return Ai(qe, n, Y, i, de, st(de), t, be);
        },
        changed: _
      }, ee));
    }
    function y() {
      c("dragOverAnimationCapture"), m.captureAnimationState(), m !== v && v.captureAnimationState();
    }
    function b(j) {
      return c("dragOverCompleted", {
        insertion: j
      }), j && (f ? l._hideClone() : l._showClone(m), m !== v && (Tt(Y, dt ? dt.options.ghostClass : l.options.ghostClass, !1), Tt(Y, u.ghostClass, !0)), dt !== m && m !== ue.active ? dt = m : m === ue.active && dt && (dt = null), v === m && (m._ignoreWhileAnimating = r), m.animateAll(function() {
        c("dragOverAnimationComplete"), m._ignoreWhileAnimating = null;
      }), m !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (r === Y && !Y.animated || r === n && !r.animated) && (Qn = null), !u.dragoverBubble && !t.rootEl && r !== document && (Y.parentNode[$t]._isOutsideThisEl(t.target), !j && Nn(t)), !u.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function _() {
      Pt = Mt(Y), En = Mt(Y, u.draggable), bt({
        sortable: m,
        name: "change",
        toEl: n,
        newIndex: Pt,
        newDraggableIndex: En,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), r = Xt(r, u.draggable, n, !0), c("dragOver"), ue.eventCanceled) return d;
    if (Y.contains(t.target) || r.animated && r.animatingX && r.animatingY || m._ignoreWhileAnimating === r)
      return b(!1);
    if (to = !1, l && !u.disabled && (f ? p || (a = ze !== qe) : dt === this || (this.lastPutMode = xi.checkPull(this, l, Y, t)) && s.checkPut(this, l, Y, t))) {
      if (h = this._getDirection(t, r) === "vertical", i = st(Y), c("dragOverValid"), ue.eventCanceled) return d;
      if (a)
        return ze = qe, y(), this._hideClone(), c("revert"), ue.eventCanceled || (qn ? qe.insertBefore(Y, qn) : qe.appendChild(Y)), b(!0);
      var S = vs(n, u.draggable);
      if (!S || Tp(t, h, this) && !S.animated) {
        if (S === Y)
          return b(!1);
        if (S && n === t.target && (r = S), r && (o = st(r)), Ai(qe, n, Y, i, r, o, t, !!r) !== !1)
          return y(), n.appendChild(Y), ze = n, _(), b(!0);
      } else if (S && Rp(t, h, this)) {
        var D = yr(n, 0, u, !0);
        if (D === Y)
          return b(!1);
        if (r = D, o = st(r), Ai(qe, n, Y, i, r, o, t, !1) !== !1)
          return y(), n.insertBefore(Y, D), ze = n, _(), b(!0);
      } else if (r.parentNode === n) {
        o = st(r);
        var O = 0, C, I = Y.parentNode !== n, M = !Ep(Y.animated && Y.toRect || i, r.animated && r.toRect || o, h), F = h ? "top" : "left", B = fl(r, "top", "top") || fl(Y, "top", "top"), G = B ? B.scrollTop : void 0;
        Qn !== r && (C = o[F], Gr = !1, Ei = !M && u.invertSwap || I), O = kp(t, r, o, h, M ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, Ei, Qn === r);
        var te;
        if (O !== 0) {
          var W = Mt(Y);
          do
            W -= O, te = ze.children[W];
          while (te && (le(te, "display") === "none" || te === ve));
        }
        if (O === 0 || te === r)
          return b(!1);
        Qn = r, Hr = O;
        var q = r.nextElementSibling, L = !1;
        L = O === 1;
        var X = Ai(qe, n, Y, i, r, o, t, L);
        if (X !== !1)
          return (X === 1 || X === -1) && (L = X === 1), ts = !0, setTimeout(Dp, 30), y(), L && !q ? n.appendChild(Y) : r.parentNode.insertBefore(Y, L ? q : r), B && bc(B, 0, G - B.scrollTop), ze = Y.parentNode, C !== void 0 && !Ei && (Mi = Math.abs(C - st(r)[F])), _(), b(!0);
      }
      if (n.contains(Y))
        return b(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ke(document, "mousemove", this._onTouchMove), ke(document, "touchmove", this._onTouchMove), ke(document, "pointermove", this._onTouchMove), ke(document, "dragover", Nn), ke(document, "mousemove", Nn), ke(document, "touchmove", Nn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    ke(t, "mouseup", this._onDrop), ke(t, "touchend", this._onDrop), ke(t, "pointerup", this._onDrop), ke(t, "touchcancel", this._onDrop), ke(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, r = this.options;
    if (Pt = Mt(Y), En = Mt(Y, r.draggable), Et("drop", this, {
      evt: t
    }), ze = Y && Y.parentNode, Pt = Mt(Y), En = Mt(Y, r.draggable), ue.eventCanceled) {
      this._nulling();
      return;
    }
    cr = !1, Ei = !1, Gr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ns(this.cloneId), ns(this._dragStartId), this.nativeDraggable && (ke(document, "drop", this), ke(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Vr && le(document.body, "user-select", ""), le(Y, "transform", ""), t && (Mr && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), ve && ve.parentNode && ve.parentNode.removeChild(ve), (qe === ze || dt && dt.lastPutMode !== "clone") && Xe && Xe.parentNode && Xe.parentNode.removeChild(Xe), Y && (this.nativeDraggable && ke(Y, "dragend", this), Mo(Y), Y.style["will-change"] = "", Mr && !cr && Tt(Y, dt ? dt.options.ghostClass : this.options.ghostClass, !1), Tt(Y, this.options.chosenClass, !1), bt({
      sortable: this,
      name: "unchoose",
      toEl: ze,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), qe !== ze ? (Pt >= 0 && (bt({
      rootEl: ze,
      name: "add",
      toEl: ze,
      fromEl: qe,
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
      fromEl: qe,
      originalEvent: t
    }), bt({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), dt && dt.save()) : Pt !== dr && Pt >= 0 && (bt({
      sortable: this,
      name: "update",
      toEl: ze,
      originalEvent: t
    }), bt({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), ue.active && ((Pt == null || Pt === -1) && (Pt = dr, En = Wr), bt({
      sortable: this,
      name: "end",
      toEl: ze,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Et("nulling", this), qe = Y = ze = ve = qn = Xe = Ni = An = $n = Bt = Mr = Pt = En = dr = Wr = Qn = Hr = dt = xi = ue.dragged = ue.ghost = ue.clone = ue.active = null, ro.forEach(function(t) {
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
        Y && (this._onDragOver(t), Cp(t));
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
    Et("destroy", this);
    var t = this.el;
    t[$t] = null, ke(t, "mousedown", this._onTapStart), ke(t, "touchstart", this._onTapStart), ke(t, "pointerdown", this._onTapStart), this.nativeDraggable && (ke(t, "dragover", this), ke(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), no.splice(no.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!An) {
      if (Et("hideClone", this), ue.eventCanceled) return;
      le(Xe, "display", "none"), this.options.removeCloneOnHide && Xe.parentNode && Xe.parentNode.removeChild(Xe), An = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (An) {
      if (Et("showClone", this), ue.eventCanceled) return;
      Y.parentNode == qe && !this.options.group.revertClone ? qe.insertBefore(Xe, Y) : qn ? qe.insertBefore(Xe, qn) : qe.appendChild(Xe), this.options.group.revertClone && this.animate(Y, Xe), le(Xe, "display", ""), An = !1;
    }
  }
};
function Cp(e) {
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
function Dp() {
  ts = !1;
}
function Rp(e, t, n) {
  var r = st(yr(n.el, 0, n.options, !0)), i = 10;
  return t ? e.clientX < r.left - i || e.clientY < r.top && e.clientX < r.right : e.clientY < r.top - i || e.clientY < r.bottom && e.clientX < r.left;
}
function Tp(e, t, n) {
  var r = st(vs(n.el, n.options.draggable)), i = 10;
  return t ? e.clientX > r.right + i || e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left : e.clientX > r.right && e.clientY > r.top || e.clientX <= r.right && e.clientY > r.bottom + i;
}
function kp(e, t, n, r, i, o, a, u) {
  var s = r ? e.clientY : e.clientX, l = r ? n.height : n.width, f = r ? n.top : n.left, p = r ? n.bottom : n.right, v = !1;
  if (!a) {
    if (u && Mi < l * i) {
      if (!Gr && (Hr === 1 ? s > f + l * o / 2 : s < p - l * o / 2) && (Gr = !0), Gr)
        v = !0;
      else if (Hr === 1 ? s < f + Mi : s > p - Mi)
        return -Hr;
    } else if (s > f + l * (1 - i) / 2 && s < p - l * (1 - i) / 2)
      return Pp(t);
  }
  return v = v || a, v && (s < f + l * o / 2 || s > p - l * o / 2) ? s > f + l / 2 ? 1 : -1 : 0;
}
function Pp(e) {
  return Mt(Y) < Mt(e) ? 1 : -1;
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
  off: ke,
  css: le,
  find: gc,
  is: function(t, n) {
    return !!Xt(t, n, t, !1);
  },
  extend: vp,
  throttle: yc,
  closest: Xt,
  toggleClass: Tt,
  clone: wc,
  index: Mt,
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
var nt = [], jr, rs, is = !1, jo, Fo, io, Fr;
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
      this.sortable.nativeDraggable ? ke(document, "dragover", this._handleAutoScroll) : (ke(document, "pointermove", this._handleFallbackAutoScroll), ke(document, "touchmove", this._handleFallbackAutoScroll), ke(document, "mousemove", this._handleFallbackAutoScroll)), vl(), Fi(), gp();
    },
    nulling: function() {
      io = rs = jr = is = Fr = jo = Fo = null, nt.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var i = this, o = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, u = document.elementFromPoint(o, a);
      if (io = n, r || this.options.forceAutoScrollFallback || ni || mn || Vr) {
        Bo(n, this.options, u, r);
        var s = Dn(u, !0);
        is && (!Fr || o !== jo || a !== Fo) && (Fr && vl(), Fr = setInterval(function() {
          var l = Dn(document.elementFromPoint(o, a), !0);
          l !== s && (s = l, Fi()), Bo(n, i.options, l, r);
        }, 10), jo = o, Fo = a);
      } else {
        if (!this.options.bubbleScroll || Dn(u, !0) === Jt()) {
          Fi();
          return;
        }
        Bo(n, this.options, Dn(u, !1), !1);
      }
    }
  }, pn(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Fi() {
  nt.forEach(function(e) {
    clearInterval(e.pid);
  }), nt = [];
}
function vl() {
  clearInterval(Fr);
}
var Bo = yc(function(e, t, n, r) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, u = t.scrollSpeed, s = Jt(), l = !1, f;
    rs !== n && (rs = n, Fi(), jr = t.scroll, f = t.scrollFn, jr === !0 && (jr = Dn(n, !0)));
    var p = 0, v = jr;
    do {
      var h = v, m = st(h), d = m.top, c = m.bottom, y = m.left, b = m.right, _ = m.width, S = m.height, D = void 0, O = void 0, C = h.scrollWidth, I = h.scrollHeight, M = le(h), F = h.scrollLeft, B = h.scrollTop;
      h === s ? (D = _ < C && (M.overflowX === "auto" || M.overflowX === "scroll" || M.overflowX === "visible"), O = S < I && (M.overflowY === "auto" || M.overflowY === "scroll" || M.overflowY === "visible")) : (D = _ < C && (M.overflowX === "auto" || M.overflowX === "scroll"), O = S < I && (M.overflowY === "auto" || M.overflowY === "scroll"));
      var G = D && (Math.abs(b - i) <= a && F + _ < C) - (Math.abs(y - i) <= a && !!F), te = O && (Math.abs(c - o) <= a && B + S < I) - (Math.abs(d - o) <= a && !!B);
      if (!nt[p])
        for (var W = 0; W <= p; W++)
          nt[W] || (nt[W] = {});
      (nt[p].vx != G || nt[p].vy != te || nt[p].el !== h) && (nt[p].el = h, nt[p].vx = G, nt[p].vy = te, clearInterval(nt[p].pid), (G != 0 || te != 0) && (l = !0, nt[p].pid = setInterval((function() {
        r && this.layer === 0 && ue.active._onTouchMove(io);
        var q = nt[this.layer].vy ? nt[this.layer].vy * u : 0, L = nt[this.layer].vx ? nt[this.layer].vx * u : 0;
        typeof f == "function" && f.call(ue.dragged.parentNode[$t], L, q, e, io, nt[this.layer].el) !== "continue" || bc(nt[this.layer].el, L, q);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && v !== s && (v = Dn(v, !1)));
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
function gs() {
}
gs.prototype = {
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
pn(gs, {
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
ue.mount(ys, gs);
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
const Bp = /-(\w)/g, gl = Fp((e) => e.replace(Bp, (t, n) => n ? n.toUpperCase() : ""));
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
function Cc(e, t) {
  this.$nextTick(() => this.$emit(e.toLowerCase(), t));
}
function Vp(e) {
  return (t) => {
    this.realList !== null && this["onDrag" + e](t), Cc.call(this, e, t);
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
}, zp = Ue({
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
      e["on" + i] = Cc.bind(this, i);
    });
    const t = Object.keys(this.$attrs).reduce((i, o) => (i[gl(o)] = this.$attrs[o], i), {}), n = Object.assign({}, t, e, {
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
        const n = gl(t);
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
}, ph = { class: "kvc-table-operation-buttons" }, hh = ["disabled", "onClick"], mh = ["onClick"], vh = /* @__PURE__ */ Ue({
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
    const n = fs(), r = e, i = t, o = ye(() => r.readOnly || r.hideOperations), a = () => {
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
    }, f = ye(() => !r.maxRows || r.modelValue.length < r.maxRows), p = ye(() => r.modelValue.length > r.minRows), v = ye({
      get: () => r.modelValue,
      set: (h) => {
        i("update:modelValue", h);
      }
    });
    return (h, m) => (V(), H("table", {
      class: Ve(["kvc-table", { "kvc-table-readonly": h.readOnly }])
    }, [
      Z("thead", null, [
        Z("tr", null, [
          h.draggable && !o.value ? (V(), H("th", Yp)) : Se("", !0),
          h.recordUrl ? (V(), H("th", Xp)) : Se("", !0),
          (V(!0), H(gt, null, _t(h.columns, (d, c) => (V(), H("th", {
            key: c,
            style: lt(d != null && d.width ? { width: d == null ? void 0 : d.width } : void 0)
          }, [
            Ct(h.$slots, `column-${(d == null ? void 0 : d.code) || d}`, {}, () => [
              Z("span", Jp, Ge((d == null ? void 0 : d.label) ?? d), 1)
            ])
          ], 4))), 128)),
          o.value ? Se("", !0) : (V(), H("th", Qp))
        ])
      ]),
      h.draggable ? (V(), Nt(Re(zp), {
        key: 0,
        modelValue: v.value,
        "onUpdate:modelValue": m[0] || (m[0] = (d) => v.value = d),
        tag: "tbody",
        handle: ".kvc-table-drag-handle",
        disabled: h.readOnly,
        animation: h.animation
      }, {
        default: Ji(() => [
          (V(!0), H(gt, null, _t(v.value, (d, c) => (V(), H("tr", zs({
            key: "row-" + c,
            ref_for: !0
          }, u(d)), [
            h.draggable && !o.value ? (V(), H("td", Zp, [
              Z("div", eh, [
                He(Re(Qe), {
                  icon: "mdi:drag",
                  width: "14"
                })
              ])
            ])) : Se("", !0),
            h.recordUrl ? (V(), H("td", th, [
              d.$id ? (V(), H("a", {
                key: 0,
                href: h.recordUrl + d.$id.value,
                class: "kvc-link",
                target: "_blank",
                rel: "noopener noreferrer",
                style: lt(h.readOnly ? null : { display: "inline-block", margin: "10px 0" })
              }, [
                He(Re(Qe), {
                  icon: "tdesign:file-filled",
                  width: "16"
                })
              ], 12, nh)) : Se("", !0)
            ])) : Se("", !0),
            (V(!0), H(gt, null, _t(h.columns, (y, b) => (V(), H("td", {
              key: "col-" + b,
              "data-code": (y == null ? void 0 : y.code) || y,
              style: lt(y != null && y.width ? { width: y == null ? void 0 : y.width } : void 0)
            }, [
              Ct(h.$slots, (y == null ? void 0 : y.code) || y, {
                index: c,
                row: d,
                width: y == null ? void 0 : y.width,
                column: (y == null ? void 0 : y.code) || y,
                value: d[(y == null ? void 0 : y.code) || y]
              })
            ], 12, rh))), 128)),
            o.value ? Se("", !0) : (V(), H("td", ih, [
              Z("div", oh, [
                Z("button", {
                  type: "button",
                  class: "kvc-table-btn-plus",
                  disabled: !f.value,
                  onClick: (y) => s(c)
                }, [
                  He(Re(Qe), {
                    icon: "mdi:plus",
                    width: "14"
                  })
                ], 8, ah),
                p.value ? (V(), H("button", {
                  key: 0,
                  type: "button",
                  class: "kvc-table-btn-minus",
                  onClick: (y) => l(c)
                }, [
                  He(Re(Qe), {
                    icon: "mdi:minus",
                    width: "14"
                  })
                ], 8, sh)) : Se("", !0)
              ])
            ]))
          ], 16))), 128))
        ]),
        _: 3
      }, 8, ["modelValue", "disabled", "animation"])) : (V(), H("tbody", lh, [
        (V(!0), H(gt, null, _t(h.modelValue, (d, c) => (V(), H("tr", zs({
          key: "row-" + c,
          ref_for: !0
        }, u(d)), [
          h.recordUrl ? (V(), H("td", uh, [
            d.$id ? (V(), H("a", {
              key: 0,
              href: h.recordUrl + d.$id.value,
              class: "kvc-link",
              target: "_blank",
              rel: "noopener noreferrer",
              style: lt(h.readOnly ? null : { display: "inline-block", margin: "10px 0" })
            }, [
              He(Re(Qe), {
                icon: "tdesign:file-filled",
                width: "16"
              })
            ], 12, ch)) : Se("", !0)
          ])) : Se("", !0),
          (V(!0), H(gt, null, _t(h.columns, (y, b) => (V(), H("td", {
            key: "col-" + b,
            "data-code": (y == null ? void 0 : y.code) || y,
            style: lt(y != null && y.width ? { width: y == null ? void 0 : y.width } : void 0)
          }, [
            Ct(h.$slots, (y == null ? void 0 : y.code) || y, {
              index: c,
              row: d,
              width: y == null ? void 0 : y.width,
              column: (y == null ? void 0 : y.code) || y,
              value: d[(y == null ? void 0 : y.code) || y]
            })
          ], 12, fh))), 128)),
          o.value ? Se("", !0) : (V(), H("td", dh, [
            Z("div", ph, [
              Z("button", {
                type: "button",
                class: "kvc-table-btn-plus",
                disabled: !f.value,
                onClick: (y) => s(c)
              }, [
                He(Re(Qe), {
                  icon: "mdi:plus",
                  width: "14"
                })
              ], 8, hh),
              p.value ? (V(), H("button", {
                key: 0,
                type: "button",
                class: "kvc-table-btn-minus",
                onClick: (y) => l(c)
              }, [
                He(Re(Qe), {
                  icon: "mdi:minus",
                  width: "14"
                })
              ], 8, mh)) : Se("", !0)
            ])
          ]))
        ], 16))), 128))
      ]))
    ], 2));
  }
});
function Dc(e) {
  return Nf() ? (Mf(e), !0) : !1;
}
const ho = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const gh = Object.prototype.toString, yh = (e) => gh.call(e) === "[object Object]", Vo = () => {
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
  }, r = (u, s, l, f) => (u.addEventListener(s, l, f), () => u.removeEventListener(s, l, f)), i = ye(() => {
    const u = Uo(cn(e[0])).filter((s) => s != null);
    return u.every((s) => typeof s != "string") ? u : void 0;
  }), o = xh(
    () => {
      var u, s;
      return [
        (s = (u = i.value) == null ? void 0 : u.map((l) => pr(l))) != null ? s : [Rc].filter((l) => l != null),
        Uo(cn(i.value ? e[1] : e[0])),
        Uo(Re(i.value ? e[2] : e[1])),
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
          (v) => s.flatMap(
            (h) => l.map((m) => r(v, h, m, p))
          )
        )
      );
    },
    { flush: "post" }
  ), a = () => {
    o(), n();
  };
  return Dc(n), a;
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
  let v = !1;
  const h = [
    un(r, "click", (d) => {
      v || (v = !0, setTimeout(() => {
        v = !1;
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
  const i = De(!1), o = Ff(null);
  let a = 0, u = !0;
  if (ho) {
    const s = typeof t == "function" ? { onDrop: t } : t, l = (n = s.multiple) != null ? n : !0, f = (r = s.preventDefaultForUnhandled) != null ? r : !1, p = (c) => {
      var y, b;
      const _ = Array.from((b = (y = c.dataTransfer) == null ? void 0 : y.files) != null ? b : []);
      return _.length === 0 ? null : l ? _ : [_[0]];
    }, v = (c) => {
      const y = Re(s.dataTypes);
      return typeof y == "function" ? y(c) : y != null && y.length ? c.length === 0 ? !1 : c.every(
        (b) => y.some((_) => b.includes(_))
      ) : !0;
    }, h = (c) => {
      const y = Array.from(c ?? []).map((S) => S.type), b = v(y), _ = l || c.length <= 1;
      return b && _;
    }, m = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !("chrome" in window), d = (c, y) => {
      var b, _, S, D, O, C;
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
          (D = s.onOver) == null || D.call(s, null, c);
          break;
        case "leave":
          a -= 1, a === 0 && (i.value = !1), (O = s.onLeave) == null || O.call(s, null, c);
          break;
        case "drop":
          a = 0, i.value = !1, u && (o.value = M, (C = s.onDrop) == null || C.call(s, M, c));
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
const Ah = ["onClick", "onMouseover"], Ch = { class: "kvc-select-list-item-icon-space" }, Dh = { class: "kvc-select-list-item-text" }, Zr = /* @__PURE__ */ Ue({
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
    const n = e, r = t, i = De(null), o = /* @__PURE__ */ new Map(), a = De(null), u = ye(
      () => typeof n.height == "string" ? n.height : `${n.height}px`
    ), s = ye(
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
    }, p = (h) => typeof h == "object" && h !== null ? h[n.valueKey ?? "value"] ?? h : h, v = (h) => typeof h == "object" && h !== null ? h[n.labelKey ?? "label"] ?? h : h;
    return (h, m) => (V(), H("ul", {
      ref_key: "listWrapRef",
      ref: i,
      class: "kvc-select-list",
      style: lt({ height: u.value, maxHeight: s.value })
    }, [
      (V(!0), H(gt, null, _t(h.items, (d, c) => (V(), H("li", {
        key: c,
        ref_for: !0,
        ref: (y) => Re(o).set(p(d), y),
        class: Ve(["kvc-select-list-item", {
          "kvc-select-list-item-selected": p(d) === h.modelValue
        }]),
        onClick: (y) => f(p(d)),
        onMouseover: (y) => a.value = p(d)
      }, [
        Z("span", Ch, [
          p(d) === h.modelValue ? (V(), Nt(Re(Qe), {
            key: 0,
            icon: "mdi:check-bold",
            width: "15"
          })) : Se("", !0)
        ]),
        Z("span", Dh, Ge(v(d)), 1)
      ], 42, Ah))), 128))
    ], 4));
  }
}), Rh = ["innerHTML"], Th = ["disabled"], kh = { class: "kvc-dropdown-label" }, Ph = /* @__PURE__ */ Ue({
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
    const n = e, r = t, i = ye({
      get: () => n.modelValue ?? "",
      set: (h) => {
        r("update:modelValue", h), r("change", h);
      }
    }), o = De(!1), a = De(null), u = De(null), s = De(null);
    br(s, () => {
      o.value = !1;
    });
    const l = (h) => typeof h == "number" || !isNaN(Number(h)), f = ye(() => n.width ? l(n.width) ? `${n.width}px` : n.width : "fit-content"), p = ye(() => {
      const h = n.itemValue ?? "value", m = n.itemLabel ?? "label", d = v.value.find((c) => typeof c == "object" && c[h] === n.modelValue);
      return d ? d[m] : "";
    }), v = ye(() => {
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
    return (h, m) => h.readOnly ? (V(), H("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": h.nonstyled }]),
      style: lt({ width: f.value }),
      innerHTML: h.modelValue
    }, null, 14, Rh)) : (V(), H("div", {
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
        style: lt({ width: f.value }),
        onClick: m[0] || (m[0] = (d) => o.value = !o.value)
      }, [
        Z("span", kh, Ge(p.value), 1),
        He(Re(Qe), {
          icon: "mdi-light:chevron-down",
          width: "24",
          style: { "min-width": "24px" }
        })
      ], 12, Th),
      h.readOnly || h.disabled ? Se("", !0) : tn((V(), Nt(Zr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": m[1] || (m[1] = (d) => i.value = d),
        ref_key: "selectListRef",
        ref: u,
        items: v.value,
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
}, Lh = /* @__PURE__ */ Ue({
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
    const n = e, r = t, i = ye({
      get: () => n.modelValue ?? "",
      set: (_) => {
        r("update:modelValue", _), r("change", _);
      }
    }), o = De(""), a = De(!1), u = De(null), s = De(null), l = De(null);
    br(l, () => {
      a.value = !1;
    });
    const f = (_) => typeof _ == "number" || !isNaN(Number(_)), p = ye(() => n.width ? f(n.width) ? `${n.width}px` : n.width : "fit-content"), v = ye(() => n.items.map((S) => typeof S == "object" && S !== null ? JSON.parse(JSON.stringify(S)) : {
      [n.itemLabel]: S,
      [n.itemValue]: S
    })), h = ye(() => {
      const _ = n.itemValue ?? "value", S = n.itemLabel ?? "label", D = v.value.find((O) => typeof O == "object" && O[_] === n.modelValue);
      return D ? D[S] : n.modelValue || "";
    }), m = ye(() => {
      if (!o.value)
        return v.value;
      const _ = n.itemLabel ?? "label", S = o.value.toString().toLowerCase();
      return v.value.filter((D) => {
        var C;
        return (((C = D[_]) == null ? void 0 : C.toString().toLowerCase()) || "").includes(S);
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
    }), (_, S) => _.readOnly ? (V(), H("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": _.nonstyled }]),
      style: lt({ width: p.value }),
      innerHTML: _.modelValue
    }, null, 14, Ih)) : _.disabled ? (V(), H("div", $h, [
      Z("button", {
        ref: "buttonRef",
        type: "button",
        class: "kvc-dropdown-button",
        disabled: _.disabled,
        style: lt({ width: p.value })
      }, [
        Z("span", Mh, Ge(h.value), 1),
        He(Re(Qe), {
          icon: "mdi-light:chevron-down",
          width: "24",
          style: { "min-width": "24px" }
        })
      ], 12, Nh)
    ])) : (V(), H("div", {
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
          style: lt({ width: p.value }),
          onFocus: d,
          onInput: c
        }, null, 44, Fh),
        Z("div", Bh, [
          _.clearable && i.value && !_.disabled ? (V(), H("button", {
            key: 0,
            type: "button",
            class: "kvc-autocomplete-clear",
            onClick: b
          }, [
            He(Re(Qe), {
              icon: "mdi:close",
              width: "18"
            })
          ])) : Se("", !0),
          He(Re(Qe), {
            icon: "mdi-light:chevron-down",
            width: "24",
            class: Ve(["kvc-autocomplete-arrow", { "is-active": a.value }])
          }, null, 8, ["class"])
        ])
      ]),
      _.readOnly || _.disabled ? Se("", !0) : tn((V(), Nt(Zr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": S[0] || (S[0] = (D) => i.value = D),
        ref_key: "selectListRef",
        ref: s,
        items: m.value,
        labelKey: _.itemLabel,
        valueKey: _.itemValue,
        onChange: y
      }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
        [Sr, a.value && m.value.length > 0]
      ]),
      a.value && m.value.length === 0 && o.value ? (V(), H("div", qh, " 該当する項目がありません ")) : Se("", !0)
    ], 512));
  }
}), Vh = ["innerHTML"], Uh = ["onClick"], Wh = { class: "kvc-multi-select-item-text" }, Hh = /* @__PURE__ */ Ue({
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
    const n = t, r = e, i = De(null), o = /* @__PURE__ */ new Map(), a = ye(() => `calc(12px + ${r.rows * 22}px + ${r.rows * 2}px)`), u = (v) => {
      if (r.readOnly || r.disabled) return;
      const h = [...r.modelValue], m = h.indexOf(v);
      m > -1 ? h.splice(m, 1) : h.push(v), n("update:modelValue", h), n("change", h);
    }, s = (v) => typeof v == "object" && v !== null ? v[r.itemValue] ?? v.value ?? v : v, l = (v) => typeof v == "object" && v !== null ? v[r.itemLabel] ?? v.label ?? v : v, f = (v) => {
      const h = s(v);
      return r.modelValue.includes(h);
    }, p = ye(() => r.items.map((h) => {
      let m = h;
      return typeof h == "object" && h !== null ? m = JSON.parse(JSON.stringify(h)) : m = {
        [r.itemLabel]: h,
        [r.itemValue]: h
      }, r.disabled && (m.disabled = !0), m;
    }));
    return (v, h) => v.readOnly ? (V(), H("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": v.nonstyled }]),
      innerHTML: v.modelValue.join(", ")
    }, null, 10, Vh)) : (V(), H("ul", {
      key: 1,
      ref_key: "listWrapRef",
      ref: i,
      class: "kvc-multi-select-list",
      style: lt({ maxHeight: a.value })
    }, [
      (V(!0), H(gt, null, _t(p.value, (m, d) => (V(), H("li", {
        key: d,
        ref_for: !0,
        ref: (c) => Re(o).set(s(m), c),
        class: Ve(["kvc-multi-select-item", {
          "kvc-multi-select-item-selected": f(m),
          "kvc-multi-select-item-disabled": (m == null ? void 0 : m.disabled) === !0
        }]),
        onClick: (c) => (m == null ? void 0 : m.disabled) === !0 ? null : u(s(m))
      }, [
        f(m) ? (V(), Nt(Re(Qe), {
          key: 0,
          icon: "mdi:check-bold",
          width: "14",
          class: "kvc-multi-select-item-icon"
        })) : Se("", !0),
        Z("span", Wh, Ge(l(m)), 1)
      ], 10, Uh))), 128))
    ], 4));
  }
}), Gh = /* @__PURE__ */ Ue({
  __name: "button",
  props: {
    small: { type: Boolean, default: !1 },
    color: {}
  },
  setup(e) {
    return (t, n) => (V(), H("button", {
      type: "button",
      class: Ve(["kvc-button", {
        "kvc-button-sm": t.small,
        "kvc-button-normal": t.color === "normal",
        "kvc-button-success": t.color === "success",
        "kvc-button-save": t.color === "save",
        "kvc-button-error": t.color === "error"
      }])
    }, [
      Ct(t.$slots, "default")
    ], 2));
  }
}), Kh = { class: "kvc-field-label" }, zh = {
  key: 0,
  class: "kvc-field-required"
}, Yh = { class: "kvc-field-input" }, Xh = {
  key: 0,
  class: "kvc-field-prefix"
}, Jh = {
  key: 1,
  class: "kvc-field-suffix"
}, Qh = /* @__PURE__ */ Ue({
  __name: "field",
  props: {
    required: { type: Boolean },
    width: {},
    errorMessage: {},
    successMessage: {}
  },
  setup(e) {
    const t = e, n = fs(), r = (o) => typeof o == "number" || !isNaN(Number(o)), i = ye(() => t.width ? r(t.width) ? `${t.width}px` : t.width : "fit-content");
    return (o, a) => {
      var u, s, l, f;
      return V(), H("div", {
        style: lt({ width: i.value }),
        class: "kvc-field"
      }, [
        Z("label", Kh, [
          Ct(o.$slots, "label"),
          o.required ? (V(), H("span", zh)) : Se("", !0)
        ]),
        Z("div", Yh, [
          (s = (u = Re(n)).prefix) != null && s.call(u) ? (V(), H("div", Xh, [
            Ct(o.$slots, "prefix")
          ])) : Se("", !0),
          Ct(o.$slots, "default"),
          (f = (l = Re(n)).suffix) != null && f.call(l) ? (V(), H("div", Jh, [
            Ct(o.$slots, "suffix")
          ])) : Se("", !0)
        ]),
        o.errorMessage || o.successMessage ? (V(), H("div", {
          key: 0,
          class: Ve({
            "kvc-field-message-error": o.errorMessage,
            "kvc-field-message-success": o.successMessage
          })
        }, Ge(o.errorMessage || o.successMessage), 3)) : Se("", !0)
      ], 4);
    };
  }
}), Zh = { class: "kvc-group-header" }, em = { class: "kvc-group-label" }, tm = { class: "kvc-group-content" }, nm = /* @__PURE__ */ Ue({
  __name: "group",
  props: {
    label: { default: "グループ" },
    open: { type: Boolean, default: !0 },
    collapsible: { type: Boolean, default: !0 },
    width: { default: 400 }
  },
  setup(e) {
    const t = e, n = De(t.open), r = (u) => typeof u == "number" || !isNaN(Number(u)), i = ye(() => t.width ? r(t.width) ? `${t.width}px` : t.width : "400px"), o = () => {
      t.collapsible && (n.value = !n.value);
    }, a = ye(() => n.value ? "0deg" : "-90deg");
    return (u, s) => (V(), H("div", {
      class: Ve(["kvc-group", { "kvc-group-closed": !n.value }]),
      style: lt({ width: i.value })
    }, [
      Z("div", Zh, [
        Z("button", {
          class: Ve(["kvc-group-button", { "kvc-group-button-clickable": u.collapsible }]),
          onClick: o
        }, [
          u.collapsible ? (V(), Nt(Re(Qe), {
            key: 0,
            icon: "mdi-light:chevron-down",
            width: "28",
            class: "kvc-group-icon",
            style: lt({ transform: `rotate(${a.value})` })
          }, null, 8, ["style"])) : Se("", !0),
          Z("span", em, Ge(u.label), 1)
        ], 2)
      ]),
      tn(Z("div", tm, [
        Ct(u.$slots, "default")
      ], 512), [
        [Sr, n.value]
      ])
    ], 6));
  }
}), rm = ["innerHTML"], im = ["disabled", "value"], om = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, am = ["fill"], sm = /* @__PURE__ */ Ue({
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
    const n = e, r = t, i = ye({
      get: () => n.modelValue ?? "",
      set: (f) => {
        r("update:modelValue", f), r("change", f);
      }
    }), o = n.itemValue ?? "value", a = n.itemLabel ?? "label", u = (f) => f != null && f.disabled ? "#d8d8d8" : n.modelValue == ((f == null ? void 0 : f[o]) ?? f) ? "#3498db" : "#d8d8d8", s = (f) => typeof f == "object" && f !== null ? f[o] ?? f : f, l = (f) => typeof f == "object" && f !== null ? f[a] ?? f : f;
    return (f, p) => f.readOnly ? (V(), H("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": f.nonstyled }]),
      innerHTML: f.modelValue
    }, null, 10, rm)) : (V(), H("div", {
      key: 1,
      class: Ve(["kvc-radio-group", { "kvc-radio-group-column": f.column }])
    }, [
      (V(!0), H(gt, null, _t(f.items, (v, h) => (V(), H("label", {
        key: h,
        class: "kvc-radio-item"
      }, [
        tn(Z("input", {
          type: "radio",
          "onUpdate:modelValue": p[0] || (p[0] = (m) => i.value = m),
          disabled: typeof v == "object" ? v.disabled : !1,
          value: s(v)
        }, null, 8, im), [
          [Bf, i.value]
        ]),
        (V(), H("svg", om, [
          p[1] || (p[1] = Z("circle", {
            cx: "10.5",
            cy: "10.5",
            r: "10",
            fill: "white",
            stroke: "#e3e7e8",
            "stroke-width": "1"
          }, null, -1)),
          i.value == s(v) ? (V(), H("circle", {
            key: 0,
            cx: "10.5",
            cy: "10.5",
            r: "6.5",
            fill: u(v)
          }, null, 8, am)) : Se("", !0)
        ])),
        Z("span", null, Ge(l(v)), 1)
      ]))), 128))
    ], 2));
  }
}), lm = ["innerHTML"], um = ["disabled", "value"], cm = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, fm = ["stroke"], dm = ["fill"], pm = /* @__PURE__ */ Ue({
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
    const n = e, r = t, i = ye({
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
    return (s, l) => s.readOnly ? (V(), H("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }]),
      innerHTML: s.modelValue.join(", ")
    }, null, 10, lm)) : (V(), H("div", {
      key: 1,
      class: Ve(["kvc-checkbox-group", { "kvc-checkbox-group-column": s.column }])
    }, [
      (V(!0), H(gt, null, _t(s.items, (f, p) => (V(), H("label", {
        key: p,
        class: "kvc-checkbox-item"
      }, [
        tn(Z("input", {
          type: "checkbox",
          "onUpdate:modelValue": l[0] || (l[0] = (v) => i.value = v),
          disabled: typeof f == "object" ? f.disabled : !1,
          value: u(f)
        }, null, 8, um), [
          [qf, i.value]
        ]),
        (V(), H("svg", cm, [
          Z("rect", {
            x: "1",
            y: "1",
            width: "19",
            height: "19",
            rx: "1",
            fill: "white",
            "stroke-width": "2",
            stroke: o(f)
          }, null, 8, fm),
          i.value.includes(u(f)) ? (V(), H("path", {
            key: 0,
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z",
            fill: o(f)
          }, null, 8, dm)) : Se("", !0)
        ])),
        Z("span", null, Ge(a(f)), 1)
      ]))), 128))
    ], 2));
  }
}), hm = ["placeholder", "type", "min", "max"], bs = /* @__PURE__ */ Ue({
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
    const n = e, r = t, i = ye({
      get: () => n.modelValue ?? "",
      set: (u) => r("update:modelValue", u)
    }), o = (u) => typeof u == "number" || !isNaN(Number(u)), a = ye(() => n.width ? o(n.width) ? `${n.width}px` : n.width : "100%");
    return (u, s) => u.readOnly ? (V(), H("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": u.nonstyled }])
    }, Ge((i.value || " ").replace(/\r|\n/g, "") || " "), 3)) : tn((V(), H("input", {
      key: 1,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => i.value = l),
      class: "kvc-field-text",
      style: lt({ width: a.value }),
      placeholder: u.placeholder,
      type: u.type,
      min: u.min,
      max: u.max
    }, null, 12, hm)), [
      [Lf, i.value]
    ]);
  }
});
var ei = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function mm(e) {
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
var Bi = { exports: {} }, vm = Bi.exports, wl;
function gm() {
  return wl || (wl = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(vm, function() {
      var n = 1e3, r = 6e4, i = 36e5, o = "millisecond", a = "second", u = "minute", s = "hour", l = "day", f = "week", p = "month", v = "quarter", h = "year", m = "date", d = "Invalid Date", c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(W) {
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
        return { M: p, y: h, w: f, d: l, D: m, h: s, m: u, s: a, ms: o, Q: v }[W] || String(W || "").toLowerCase().replace(/s$/, "");
      }, u: function(W) {
        return W === void 0;
      } }, D = "en", O = {};
      O[D] = b;
      var C = "$isDayjsObject", I = function(W) {
        return W instanceof G || !(!W || !W[C]);
      }, M = function W(q, L, X) {
        var j;
        if (!q) return D;
        if (typeof q == "string") {
          var ee = q.toLowerCase();
          O[ee] && (j = ee), L && (O[ee] = L, j = ee);
          var re = q.split("-");
          if (!j && re.length > 1) return W(re[0]);
        } else {
          var de = q.name;
          O[de] = q, j = de;
        }
        return !X && j && (D = j), j || !X && D;
      }, F = function(W, q) {
        if (I(W)) return W.clone();
        var L = typeof q == "object" ? q : {};
        return L.date = W, L.args = arguments, new G(L);
      }, B = S;
      B.l = M, B.i = I, B.w = function(W, q) {
        return F(W, { locale: q.$L, utc: q.$u, x: q.$x, $offset: q.$offset });
      };
      var G = function() {
        function W(L) {
          this.$L = M(L.locale, null, !0), this.parse(L), this.$x = this.$x || L.x || {}, this[C] = !0;
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
                var de = re[2] - 1 || 0, be = (re[7] || "0").substring(0, 3);
                return ee ? new Date(Date.UTC(re[1], de, re[3] || 1, re[4] || 0, re[5] || 0, re[6] || 0, be)) : new Date(re[1], de, re[3] || 1, re[4] || 0, re[5] || 0, re[6] || 0, be);
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
          var j = this, ee = !!B.u(X) || X, re = B.p(L), de = function(Ee, ne) {
            var _e = B.w(j.$u ? Date.UTC(j.$y, ne, Ee) : new Date(j.$y, ne, Ee), j);
            return ee ? _e : _e.endOf(l);
          }, be = function(Ee, ne) {
            return B.w(j.toDate()[Ee].apply(j.toDate("s"), (ee ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), j);
          }, Pe = this.$W, Te = this.$M, N = this.$D, z = "set" + (this.$u ? "UTC" : "");
          switch (re) {
            case h:
              return ee ? de(1, 0) : de(31, 11);
            case p:
              return ee ? de(1, Te) : de(0, Te + 1);
            case f:
              var xe = this.$locale().weekStart || 0, Ne = (Pe < xe ? Pe + 7 : Pe) - xe;
              return de(ee ? N - Ne : N + (6 - Ne), Te);
            case l:
            case m:
              return be(z + "Hours", 0);
            case s:
              return be(z + "Minutes", 1);
            case u:
              return be(z + "Seconds", 2);
            case a:
              return be(z + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, q.endOf = function(L) {
          return this.startOf(L, !1);
        }, q.$set = function(L, X) {
          var j, ee = B.p(L), re = "set" + (this.$u ? "UTC" : ""), de = (j = {}, j[l] = re + "Date", j[m] = re + "Date", j[p] = re + "Month", j[h] = re + "FullYear", j[s] = re + "Hours", j[u] = re + "Minutes", j[a] = re + "Seconds", j[o] = re + "Milliseconds", j)[ee], be = ee === l ? this.$D + (X - this.$W) : X;
          if (ee === p || ee === h) {
            var Pe = this.clone().set(m, 1);
            Pe.$d[de](be), Pe.init(), this.$d = Pe.set(m, Math.min(this.$D, Pe.daysInMonth())).$d;
          } else de && this.$d[de](be);
          return this.init(), this;
        }, q.set = function(L, X) {
          return this.clone().$set(L, X);
        }, q.get = function(L) {
          return this[B.p(L)]();
        }, q.add = function(L, X) {
          var j, ee = this;
          L = Number(L);
          var re = B.p(X), de = function(Te) {
            var N = F(ee);
            return B.w(N.date(N.date() + Math.round(Te * L)), ee);
          };
          if (re === p) return this.set(p, this.$M + L);
          if (re === h) return this.set(h, this.$y + L);
          if (re === l) return de(1);
          if (re === f) return de(7);
          var be = (j = {}, j[u] = r, j[s] = i, j[a] = n, j)[re] || 1, Pe = this.$d.getTime() + L * be;
          return B.w(Pe, this);
        }, q.subtract = function(L, X) {
          return this.add(-1 * L, X);
        }, q.format = function(L) {
          var X = this, j = this.$locale();
          if (!this.isValid()) return j.invalidDate || d;
          var ee = L || "YYYY-MM-DDTHH:mm:ssZ", re = B.z(this), de = this.$H, be = this.$m, Pe = this.$M, Te = j.weekdays, N = j.months, z = j.meridiem, xe = function(ne, _e, we, Fe) {
            return ne && (ne[_e] || ne(X, ee)) || we[_e].slice(0, Fe);
          }, Ne = function(ne) {
            return B.s(de % 12 || 12, ne, "0");
          }, Ee = z || function(ne, _e, we) {
            var Fe = ne < 12 ? "AM" : "PM";
            return we ? Fe.toLowerCase() : Fe;
          };
          return ee.replace(y, function(ne, _e) {
            return _e || function(we) {
              switch (we) {
                case "YY":
                  return String(X.$y).slice(-2);
                case "YYYY":
                  return B.s(X.$y, 4, "0");
                case "M":
                  return Pe + 1;
                case "MM":
                  return B.s(Pe + 1, 2, "0");
                case "MMM":
                  return xe(j.monthsShort, Pe, N, 3);
                case "MMMM":
                  return xe(N, Pe);
                case "D":
                  return X.$D;
                case "DD":
                  return B.s(X.$D, 2, "0");
                case "d":
                  return String(X.$W);
                case "dd":
                  return xe(j.weekdaysMin, X.$W, Te, 2);
                case "ddd":
                  return xe(j.weekdaysShort, X.$W, Te, 3);
                case "dddd":
                  return Te[X.$W];
                case "H":
                  return String(de);
                case "HH":
                  return B.s(de, 2, "0");
                case "h":
                  return Ne(1);
                case "hh":
                  return Ne(2);
                case "a":
                  return Ee(de, be, !0);
                case "A":
                  return Ee(de, be, !1);
                case "m":
                  return String(be);
                case "mm":
                  return B.s(be, 2, "0");
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
          var ee, re = this, de = B.p(X), be = F(L), Pe = (be.utcOffset() - this.utcOffset()) * r, Te = this - be, N = function() {
            return B.m(re, be);
          };
          switch (de) {
            case h:
              ee = N() / 12;
              break;
            case p:
              ee = N();
              break;
            case v:
              ee = N() / 3;
              break;
            case f:
              ee = (Te - Pe) / 6048e5;
              break;
            case l:
              ee = (Te - Pe) / 864e5;
              break;
            case s:
              ee = Te / i;
              break;
            case u:
              ee = Te / r;
              break;
            case a:
              ee = Te / n;
              break;
            default:
              ee = Te;
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
      }(), te = G.prototype;
      return F.prototype = te, [["$ms", o], ["$s", a], ["$m", u], ["$H", s], ["$W", l], ["$M", p], ["$y", h], ["$D", m]].forEach(function(W) {
        te[W[1]] = function(q) {
          return this.$g(q, W[0], W[1]);
        };
      }), F.extend = function(W, q) {
        return W.$i || (W(q, G, F), W.$i = !0), F;
      }, F.locale = M, F.isDayjs = I, F.unix = function(W) {
        return F(1e3 * W);
      }, F.en = O[D], F.Ls = O, F.p = {}, F;
    });
  }(Bi)), Bi.exports;
}
var ym = gm();
const $e = /* @__PURE__ */ xr(ym);
var qi = { exports: {} }, bm = qi.exports, _l;
function wm() {
  return _l || (_l = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(bm, function() {
      return function(n, r) {
        r.prototype.weekday = function(i) {
          var o = this.$locale().weekStart || 0, a = this.$W, u = (a < o ? a + 7 : a) - o;
          return this.$utils().u(i) ? u : this.subtract(u, "day").add(i, "day");
        };
      };
    });
  }(qi)), qi.exports;
}
var _m = wm();
const Sm = /* @__PURE__ */ xr(_m);
var Li = { exports: {} }, xm = Li.exports, Sl;
function Em() {
  return Sl || (Sl = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(xm, function() {
      return function(n, r) {
        r.prototype.isSameOrBefore = function(i, o) {
          return this.isSame(i, o) || this.isBefore(i, o);
        };
      };
    });
  }(Li)), Li.exports;
}
var Om = Em();
const Am = /* @__PURE__ */ xr(Om), Cm = { class: "kvc-datepicker-popup" }, Dm = { class: "kvc-datepicker-controls" }, Rm = { class: "kvc-datepicker-control-year-month" }, Tm = { class: "kvc-datepicker-control-year" }, km = { class: "kvc-datepicker-control-selector-text" }, Pm = { class: "kvc-datepicker-control-month" }, Im = { class: "kvc-datepicker-control-selector-text" }, $m = { class: "kvc-datepicker-body" }, Nm = ["onClick"], Mm = { class: "kvc-datepicker-bottom" }, jm = /* @__PURE__ */ Ue({
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
    $e.extend(Sm), $e.extend(Am);
    const n = e, r = t, i = De(null), o = De(null), a = De(null), u = De(null), s = De(
      (O = n.modelValue) != null && O.length ? n.modelValue : void 0
    ), l = ["日", "月", "火", "水", "木", "金", "土"], f = Zu({
      year: !1,
      month: !1
    }), p = (C) => {
      f[C] = !1;
    };
    br(i, () => p("year")), br(o, () => p("month"));
    const v = ye(
      () => Array.from({ length: 12 }, (C, I) => ({
        label: `${I + 1}月`,
        value: I + 1
      }))
    ), h = ye(() => {
      const C = $e(s.value).year(), I = C - 100, M = C + 100, F = [];
      for (let B = I; B <= M; B++)
        F.push({ label: `${B}年`, value: B });
      return F;
    }), m = (C) => {
      C = Number(C), s.value = $e(s.value || void 0).year(C).format("YYYY-MM-DD"), setTimeout(() => f.year = !1, 10);
    }, d = (C) => {
      C = Number(C), s.value = $e(s.value || void 0).month(C - 1).format("YYYY-MM-DD"), setTimeout(() => f.month = !1, 10);
    }, c = ye(() => $e(s.value).year()), y = ye(() => $e(s.value).month() + 1), b = ye(() => {
      const C = $e(s.value).startOf("month"), I = $e(s.value).endOf("month"), M = C.weekday(0), F = I.weekday(6), B = [];
      let G = M;
      for (; G.isSameOrBefore(F); ) {
        const W = [];
        for (let q = 0; q < 7; q++)
          W.push({
            date: G.date(),
            fullDate: G.format("YYYY-MM-DD"),
            isCurrentMonth: G.month() === $e(s.value).month(),
            isCurrentDate: G.isSame($e(n.modelValue || void 0), "date"),
            isHoliday: G.day() === 0 || G.day() === 6,
            isToday: G.isSame($e(), "day")
          }), G = G.add(1, "day");
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
    }, D = (C) => {
      r("update:modelValue", C || ""), r("close", !0);
    };
    return (C, I) => (V(), H("div", Cm, [
      Z("div", Dm, [
        Z("button", {
          class: "kvc-datepicker-control-prev",
          onClick: _
        }, [
          He(Re(Qe), {
            icon: "mdi-light:chevron-left",
            height: "32"
          })
        ]),
        Z("div", Rm, [
          Z("div", Tm, [
            Z("button", {
              type: "button",
              ref_key: "yearRef",
              ref: i,
              class: "kvc-datepicker-control-selector",
              onClick: I[0] || (I[0] = (M) => f.year = !f.year)
            }, [
              Z("span", km, Ge(c.value) + "年", 1),
              He(Re(Qe), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.year ? (V(), Nt(Zr, {
                key: 0,
                ref_key: "yearListRef",
                ref: a,
                class: "kvc-datepicker-controll-selector-list",
                items: h.value,
                "model-value": c.value,
                "max-height": 300,
                onChange: m
              }, null, 8, ["items", "model-value"])) : Se("", !0)
            ], 512)
          ]),
          Z("div", Pm, [
            Z("button", {
              type: "button",
              ref_key: "monthRef",
              ref: o,
              class: "kvc-datepicker-control-selector",
              onClick: I[1] || (I[1] = (M) => f.month = !f.month)
            }, [
              Z("span", Im, Ge(y.value) + "月", 1),
              He(Re(Qe), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.month ? (V(), Nt(Zr, {
                key: 0,
                ref_key: "monthListRef",
                ref: u,
                class: "kvc-datepicker-controll-selector-list",
                items: v.value,
                "model-value": y.value,
                onChange: d
              }, null, 8, ["items", "model-value"])) : Se("", !0)
            ], 512)
          ])
        ]),
        Z("button", {
          class: "kvc-datepicker-control-next",
          onClick: S
        }, [
          He(Re(Qe), {
            icon: "mdi-light:chevron-right",
            height: "32"
          })
        ])
      ]),
      Z("table", $m, [
        Z("thead", null, [
          Z("tr", null, [
            (V(), H(gt, null, _t(l, (M) => Z("th", {
              key: M,
              class: Ve(["kvc-datepicker-day", {
                "kvc-datepicker-day-saturday": M === "土",
                "kvc-datepicker-day-sunday": M === "日"
              }])
            }, Ge(M), 3)), 64))
          ])
        ]),
        Z("tbody", null, [
          (V(!0), H(gt, null, _t(b.value, (M, F) => (V(), H("tr", { key: F }, [
            (V(!0), H(gt, null, _t(M, (B) => (V(), H("td", {
              key: B.date
            }, [
              Z("button", {
                type: "button",
                class: Ve(["kvc-datepicker-date", {
                  "kvc-datepicker-date-notcurrent-month": !B.isCurrentMonth,
                  "kvc-datepicker-date-today": B.isToday,
                  "kvc-datepicker-date-current": B.isCurrentDate
                }]),
                onClick: (G) => D(B.fullDate)
              }, Ge(B.date), 11, Nm)
            ]))), 128))
          ]))), 128))
        ])
      ]),
      Z("div", Mm, [
        Z("button", {
          type: "button",
          class: "kvc-datepicker-bottom-today",
          onClick: I[2] || (I[2] = (M) => D(Re($e)().format("YYYY-MM-DD")))
        }, " 今日 "),
        Z("button", {
          type: "button",
          class: "kvc-datepicker-bottom-clear",
          onClick: I[3] || (I[3] = (M) => D())
        }, " 選択を解除 ")
      ])
    ]));
  }
}), Fm = { class: "kvc-date-picker" }, Tc = /* @__PURE__ */ Ue({
  __name: "date-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = ye({
      get: () => n.modelValue ?? "",
      set: (h) => {
        r("update:modelValue", h), r("change", h);
      }
    }), o = (h) => {
      const m = h.target;
      /^\d{4}-\d{2}-\d{2}$/.test(m.value) || (r("update:modelValue", ""), r("change", ""));
    }, a = De(!1), u = De(!1), s = De(null), l = De(null), f = () => {
      a.value = !0, u.value = !0;
    }, p = () => {
      a.value = !1;
    }, v = () => {
      u.value = !1, a.value = !1;
    };
    return br(l, () => {
      a.value || (u.value = !1, a.value = !1);
    }), (h, m) => (V(), H("div", Fm, [
      He(bs, {
        "read-only": h.readOnly,
        disabled: h.disabled,
        nonstyled: h.nonstyled,
        modelValue: i.value,
        "onUpdate:modelValue": m[0] || (m[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: s,
        class: Ve(["text-center", h.readOnly ? "w-28" : "max-w-28"]),
        onFocus: f,
        onBlur: p,
        onChange: o
      }, null, 8, ["read-only", "disabled", "nonstyled", "modelValue", "class"]),
      h.readOnly || h.disabled ? Se("", !0) : tn((V(), Nt(jm, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": m[1] || (m[1] = (d) => i.value = d),
        ref_key: "calendarRef",
        ref: l,
        onClose: v
      }, null, 8, ["modelValue"])), [
        [Sr, u.value]
      ])
    ]));
  }
}), Bm = { class: "kvc-time-picker" }, kc = /* @__PURE__ */ Ue({
  __name: "time-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = ye({
      get: () => n.modelValue ?? "",
      set: (h) => {
        r("update:modelValue", h), r("change", h);
      }
    }), o = (h) => {
      const m = h.target;
      /^\d{2}:\d{2}$/.test(m.value) || (r("update:modelValue", ""), r("change", ""));
    }, a = ye(() => {
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
    }), u = De(!1), s = De(!1), l = De(null), f = De(null), p = () => {
      u.value = !0, s.value = !0;
    }, v = () => {
      u.value = !1;
    };
    return br(f, () => {
      u.value || (s.value = !1, u.value = !1);
    }), (h, m) => (V(), H("div", Bm, [
      He(bs, {
        "read-only": h.readOnly,
        disabled: h.disabled,
        modelValue: i.value,
        "onUpdate:modelValue": m[0] || (m[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: l,
        class: Ve(h.readOnly ? "w-16 text-left" : "max-w-20 text-center"),
        onFocus: p,
        onBlur: v,
        onChange: o
      }, null, 8, ["read-only", "disabled", "modelValue", "class"]),
      h.readOnly || h.disabled ? Se("", !0) : tn((V(), Nt(Zr, {
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
var Vi = { exports: {} }, qm = Vi.exports, xl;
function Lm() {
  return xl || (xl = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(qm, function() {
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
          if (typeof d == "string" && (d = function(D) {
            D === void 0 && (D = "");
            var O = D.match(r);
            if (!O) return null;
            var C = ("" + O[0]).match(i) || ["-", 0, 0], I = C[0], M = 60 * +C[1] + +C[2];
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
        var v = s.format;
        s.format = function(d) {
          var c = d || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return v.call(this, c);
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
var Vm = Lm();
const Um = /* @__PURE__ */ xr(Vm);
var Ui = { exports: {} }, Wm = Ui.exports, El;
function Hm() {
  return El || (El = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Wm, function() {
      var n = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, r = {};
      return function(i, o, a) {
        var u, s = function(v, h, m) {
          m === void 0 && (m = {});
          var d = new Date(v), c = function(y, b) {
            b === void 0 && (b = {});
            var _ = b.timeZoneName || "short", S = y + "|" + _, D = r[S];
            return D || (D = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: y, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: _ }), r[S] = D), D;
          }(h, m);
          return c.formatToParts(d);
        }, l = function(v, h) {
          for (var m = s(v, h), d = [], c = 0; c < m.length; c += 1) {
            var y = m[c], b = y.type, _ = y.value, S = n[b];
            S >= 0 && (d[S] = parseInt(_, 10));
          }
          var D = d[3], O = D === 24 ? 0 : D, C = d[0] + "-" + d[1] + "-" + d[2] + " " + O + ":" + d[4] + ":" + d[5] + ":000", I = +v;
          return (a.utc(C).valueOf() - (I -= I % 1e3)) / 6e4;
        }, f = o.prototype;
        f.tz = function(v, h) {
          v === void 0 && (v = u);
          var m, d = this.utcOffset(), c = this.toDate(), y = c.toLocaleString("en-US", { timeZone: v }), b = Math.round((c - new Date(y)) / 1e3 / 60), _ = 15 * -Math.round(c.getTimezoneOffset() / 15) - b;
          if (!Number(_)) m = this.utcOffset(0, h);
          else if (m = a(y, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(_, !0), h) {
            var S = m.utcOffset();
            m = m.add(d - S, "minute");
          }
          return m.$x.$timezone = v, m;
        }, f.offsetName = function(v) {
          var h = this.$x.$timezone || a.tz.guess(), m = s(this.valueOf(), h, { timeZoneName: v }).find(function(d) {
            return d.type.toLowerCase() === "timezonename";
          });
          return m && m.value;
        };
        var p = f.startOf;
        f.startOf = function(v, h) {
          if (!this.$x || !this.$x.$timezone) return p.call(this, v, h);
          var m = a(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return p.call(m, v, h).tz(this.$x.$timezone, !0);
        }, a.tz = function(v, h, m) {
          var d = m && h, c = m || h || u, y = l(+a(), c);
          if (typeof v != "string") return a(v).tz(c);
          var b = function(O, C, I) {
            var M = O - 60 * C * 1e3, F = l(M, I);
            if (C === F) return [M, C];
            var B = l(M -= 60 * (F - C) * 1e3, I);
            return F === B ? [M, F] : [O - 60 * Math.min(F, B) * 1e3, Math.max(F, B)];
          }(a.utc(v, d).valueOf(), y, c), _ = b[0], S = b[1], D = a(_).utcOffset(S);
          return D.$x.$timezone = c, D;
        }, a.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, a.tz.setDefault = function(v) {
          u = v;
        };
      };
    });
  }(Ui)), Ui.exports;
}
var Gm = Hm();
const Km = /* @__PURE__ */ xr(Gm);
var Wi = { exports: {} }, zm = Wi.exports, Ol;
function Ym() {
  return Ol || (Ol = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(zm, function() {
      return function(n, r, i) {
        var o = r.prototype, a = function(v) {
          var h, m = v.date, d = v.utc, c = {};
          if (!((h = m) === null || h instanceof Date || h instanceof Array || o.$utils().u(h) || h.constructor.name !== "Object")) {
            if (!Object.keys(m).length) return /* @__PURE__ */ new Date();
            var y = d ? i.utc() : i();
            Object.keys(m).forEach(function(M) {
              var F, B;
              c[F = M, B = o.$utils().p(F), B === "date" ? "day" : B] = m[M];
            });
            var b = c.day || (c.year || c.month >= 0 ? 1 : y.date()), _ = c.year || y.year(), S = c.month >= 0 ? c.month : c.year || c.day ? 0 : y.month(), D = c.hour || 0, O = c.minute || 0, C = c.second || 0, I = c.millisecond || 0;
            return d ? new Date(Date.UTC(_, S, b, D, O, C, I)) : new Date(_, S, b, D, O, C, I);
          }
          return m;
        }, u = o.parse;
        o.parse = function(v) {
          v.date = a.bind(this)(v), u.bind(this)(v);
        };
        var s = o.set, l = o.add, f = o.subtract, p = function(v, h, m, d) {
          d === void 0 && (d = 1);
          var c = Object.keys(h), y = this;
          return c.forEach(function(b) {
            y = v.bind(y)(h[b] * d, b);
          }), y;
        };
        o.set = function(v, h) {
          return h = h === void 0 ? v : h, v.constructor.name === "Object" ? p.bind(this)(function(m, d) {
            return s.bind(this)(d, m);
          }, h, v) : s.bind(this)(v, h);
        }, o.add = function(v, h) {
          return v.constructor.name === "Object" ? p.bind(this)(l, v, h) : l.bind(this)(v, h);
        }, o.subtract = function(v, h) {
          return v.constructor.name === "Object" ? p.bind(this)(l, v, h, -1) : f.bind(this)(v, h);
        };
      };
    });
  }(Wi)), Wi.exports;
}
var Xm = Ym();
const Jm = /* @__PURE__ */ xr(Xm), Qm = { class: "kvc-datetime-picker" }, Zm = /* @__PURE__ */ Ue({
  __name: "datetime-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    $e.extend(Um), $e.extend(Km), $e.extend(Jm), $e.tz.setDefault("Asia/Tokyo");
    const n = e, r = t, i = ye(() => n.modelValue && $e(n.modelValue).isValid()), o = ye(() => i.value ? $e(n.modelValue) : void 0), a = (s) => {
      if (s && $e(s).isValid()) {
        const [l, f, p] = s.split("-").map(Number), v = o.value ? $e(o.value).year(l).month(f - 1).date(p) : $e({ year: l, month: f - 1, date: p });
        r("update:modelValue", v.toISOString());
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
    return (s, l) => (V(), H("div", Qm, [
      s.readOnly ? (V(), H("p", {
        key: 0,
        class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }])
      }, Ge(s.modelValue && Re($e)(s.modelValue).isValid() ? Re($e)(s.modelValue).format("YYYY-MM-DD HH:mm") : " "), 3)) : (V(), H(gt, { key: 1 }, [
        He(Tc, {
          "model-value": o.value ? o.value.format("YYYY-MM-DD") : void 0,
          disabled: s.disabled,
          onChange: a
        }, null, 8, ["model-value", "disabled"]),
        He(kc, {
          "model-value": o.value ? o.value.format("HH:mm") : void 0,
          disabled: s.disabled,
          onChange: u
        }, null, 8, ["model-value", "disabled"])
      ], 64))
    ]));
  }
}), ev = ["innerHTML"], tv = /* @__PURE__ */ Ue({
  __name: "textarea",
  props: {
    modelValue: {},
    nonstyled: { type: Boolean },
    readOnly: { type: Boolean },
    width: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = ye({
      get: () => n.modelValue ?? "",
      set: (o) => r("update:modelValue", o)
    });
    return (o, a) => o.readOnly ? (V(), H("p", {
      key: 0,
      class: Ve(["kvc-field-value", { "kvc-field-value-nonstyled": o.nonstyled }]),
      innerHTML: (i.value || " ").replace(/\n/g, "<br>")
    }, null, 10, ev)) : tn((V(), H("textarea", {
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
      nv(e, r, n[r]);
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
function nv(e, t, n) {
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
function rv(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function iv(e, t) {
  if (e == null) return {};
  var n = rv(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var ov = "1.15.6";
function dn(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var vn = dn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ii = dn(/Edge/i), Cl = dn(/firefox/i), Kr = dn(/safari/i) && !dn(/chrome/i) && !dn(/android/i), ws = dn(/iP(ad|od|hone)/i), Pc = dn(/chrome/i) && dn(/android/i), Ic = {
  capture: !1,
  passive: !1
};
function Ce(e, t, n) {
  e.addEventListener(t, n, !vn && Ic);
}
function Oe(e, t, n) {
  e.removeEventListener(t, n, !vn && Ic);
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
var Dl = /\s+/g;
function kt(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var r = (" " + e.className + " ").replace(Dl, " ").replace(" " + t + " ", " ");
      e.className = (r + (n ? " " + t : "")).replace(Dl, " ");
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
function vr(e, t) {
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
function it(e, t, n, r, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, a, u, s, l, f, p;
    if (e !== window && e.parentNode && e !== Qt() ? (o = e.getBoundingClientRect(), a = o.top, u = o.left, s = o.bottom, l = o.right, f = o.height, p = o.width) : (a = 0, u = 0, s = window.innerHeight, l = window.innerWidth, f = window.innerHeight, p = window.innerWidth), (t || n) && e !== window && (i = i || e.parentNode, !vn))
      do
        if (i && i.getBoundingClientRect && (ce(i, "transform") !== "none" || n && ce(i, "position") !== "static")) {
          var v = i.getBoundingClientRect();
          a -= v.top + parseInt(ce(i, "border-top-width")), u -= v.left + parseInt(ce(i, "border-left-width")), s = a + o.height, l = u + o.width;
          break;
        }
      while (i = i.parentNode);
    if (r && e !== window) {
      var h = vr(i || e), m = h && h.a, d = h && h.d;
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
  for (var r = Rn(e, !0), i = it(e)[t]; r; ) {
    var o = it(r)[n], a = void 0;
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
function jt(e, t) {
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
      var i = vr(e), o = i.a, a = i.d;
      t += e.scrollLeft * o, n += e.scrollTop * a;
    } while (e !== r && (e = e.parentNode));
  return [t, n];
}
function av(e, t) {
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
function sv(e, t) {
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
function lv() {
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
      var l = it(i);
      r.left = Math.min((o = r.left) !== null && o !== void 0 ? o : 1 / 0, l.left), r.top = Math.min((a = r.top) !== null && a !== void 0 ? a : 1 / 0, l.top), r.right = Math.max((u = r.right) !== null && u !== void 0 ? u : -1 / 0, l.right), r.bottom = Math.max((s = r.bottom) !== null && s !== void 0 ? s : -1 / 0, l.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var At = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function uv() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(i) {
          if (!(ce(i, "display") === "none" || i === fe.ghost)) {
            e.push({
              target: i,
              rect: it(i)
            });
            var o = en({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = vr(i, !0);
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
      e.splice(av(e, {
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
        var s = 0, l = u.target, f = l.fromRect, p = it(l), v = l.prevFromRect, h = l.prevToRect, m = u.rect, d = vr(l, !0);
        d && (p.top -= d.f, p.left -= d.e), l.toRect = p, l.thisAnimationDuration && Wo(v, p) && !Wo(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (m.top - p.top) / (m.left - p.left) === (f.top - p.top) / (f.left - p.left) && (s = fv(m, v, h, i.options)), Wo(p, f) || (l.prevFromRect = f, l.prevToRect = p, s || (s = i.options.animation), i.animate(l, m, p, s)), s && (o = !0, a = Math.max(a, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof r == "function" && r();
      }, a) : typeof r == "function" && r(), e = [];
    },
    animate: function(r, i, o, a) {
      if (a) {
        ce(r, "transition", ""), ce(r, "transform", "");
        var u = vr(this.el), s = u && u.a, l = u && u.d, f = (i.left - o.left) / (s || 1), p = (i.top - o.top) / (l || 1);
        r.animatingX = !!f, r.animatingY = !!p, ce(r, "transform", "translate3d(" + f + "px," + p + "px,0)"), this.forRepaintDummy = cv(r), ce(r, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ce(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          ce(r, "transition", ""), ce(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, a);
      }
    }
  };
}
function cv(e) {
  return e.offsetWidth;
}
function fv(e, t, n, r) {
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
function dv(e) {
  var t = e.sortable, n = e.rootEl, r = e.name, i = e.targetEl, o = e.cloneEl, a = e.toEl, u = e.fromEl, s = e.oldIndex, l = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, v = e.originalEvent, h = e.putSortable, m = e.extraEventProperties;
  if (t = t || n && n[At], !!t) {
    var d, c = t.options, y = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !vn && !ii ? d = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(r, !0, !0)), d.to = a || n, d.from = u || n, d.item = i || n, d.clone = o, d.oldIndex = s, d.newIndex = l, d.oldDraggableIndex = f, d.newDraggableIndex = p, d.originalEvent = v, d.pullMode = h ? h.lastPutMode : void 0;
    var b = en(en({}, m), oi.getEventProperties(r, t));
    for (var _ in b)
      d[_] = b[_];
    n && n.dispatchEvent(d), c[y] && c[y].call(t, d);
  }
}
var pv = ["evt"], Ot = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, o = iv(r, pv);
  oi.pluginEvent.bind(fe)(t, n, en({
    dragEl: K,
    parentEl: Ye,
    ghostEl: he,
    rootEl: Le,
    nextEl: Ln,
    lastDownEl: Gi,
    cloneEl: We,
    cloneHidden: Cn,
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
      Cn = !0;
    },
    cloneNowShown: function() {
      Cn = !1;
    },
    dispatchSortableEvent: function(u) {
      wt({
        sortable: n,
        name: u,
        originalEvent: i
      });
    }
  }, o));
};
function wt(e) {
  dv(en({
    putSortable: pt,
    cloneEl: We,
    targetEl: K,
    rootEl: Le,
    oldIndex: hr,
    oldDraggableIndex: Yr,
    newIndex: It,
    newDraggableIndex: On
  }, e));
}
var K, Ye, he, Le, Ln, Gi, We, Cn, hr, It, Yr, On, Ci, pt, fr = !1, ao = !1, so = [], Mn, qt, Go, Ko, kl, Pl, Br, er, Xr, Jr = !1, Di = !1, Ki, vt, zo = [], ss = !1, lo = [], mo = typeof document < "u", Ri = ws, Il = ii || vn ? "cssFloat" : "float", hv = mo && !Pc && !ws && "draggable" in document.createElement("div"), qc = function() {
  if (mo) {
    if (vn)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Lc = function(t, n) {
  var r = ce(t), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), o = wr(t, 0, n), a = wr(t, 1, n), u = o && ce(o), s = a && ce(a), l = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + it(o).width, f = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + it(a).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && u.float && u.float !== "none") {
    var p = u.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (u.display === "block" || u.display === "flex" || u.display === "table" || u.display === "grid" || l >= i && r[Il] === "none" || a && r[Il] === "none" && l + f > i) ? "vertical" : "horizontal";
}, mv = function(t, n, r) {
  var i = r ? t.left : t.top, o = r ? t.right : t.bottom, a = r ? t.width : t.height, u = r ? n.left : n.top, s = r ? n.right : n.bottom, l = r ? n.width : n.height;
  return i === u || o === s || i + a / 2 === u + l / 2;
}, vv = function(t, n) {
  var r;
  return so.some(function(i) {
    var o = i[At].options.emptyInsertThreshold;
    if (!(!o || _s(i))) {
      var a = it(i), u = t >= a.left - o && t <= a.right + o, s = n >= a.top - o && n <= a.bottom + o;
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
      var v = (a ? u : s).options.group.name;
      return o === !0 || typeof o == "string" && o === v || o.join && o.indexOf(v) > -1;
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
mo && !Pc && document.addEventListener("click", function(e) {
  if (ao)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), ao = !1, !1;
}, !0);
var jn = function(t) {
  if (K) {
    t = t.touches ? t.touches[0] : t;
    var n = vv(t.clientX, t.clientY);
    if (n) {
      var r = {};
      for (var i in t)
        t.hasOwnProperty(i) && (r[i] = t[i]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[At]._onDragOver(r);
    }
  }
}, gv = function(t) {
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
  this.nativeDraggable = t.forceFallback ? !1 : hv, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Ce(e, "pointerdown", this._onTapStart) : (Ce(e, "mousedown", this._onTapStart), Ce(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Ce(e, "dragover", this), Ce(e, "dragenter", this)), so.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), hn(this, uv());
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
      if (Ov(r), !K && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Kr && s && s.tagName.toUpperCase() === "SELECT") && (s = Vt(s, i.draggable, r, !1), !(s && s.animated) && Gi !== s)) {
        if (hr = jt(s), Yr = jt(s, i.draggable), typeof f == "function") {
          if (f.call(this, t, s, this)) {
            wt({
              sortable: n,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: r,
              fromEl: r
            }), Ot("filter", n, {
              evt: t
            }), o && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(p) {
          if (p = Vt(l, p.trim(), r, !1), p)
            return wt({
              sortable: n,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: r,
              toEl: r
            }), Ot("filter", n, {
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
      var l = it(r);
      if (Le = o, K = r, Ye = K.parentNode, Ln = K.nextSibling, Gi = r, Ci = a.group, fe.dragged = K, Mn = {
        target: K,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, kl = Mn.clientX - l.left, Pl = Mn.clientY - l.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, K.style["will-change"] = "all", s = function() {
        if (Ot("delayEnded", i, {
          evt: t
        }), fe.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Cl && i.nativeDraggable && (K.draggable = !0), i._triggerDragStart(t, n), wt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), kt(K, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        Nc(K, f.trim(), Yo);
      }), Ce(u, "dragover", jn), Ce(u, "mousemove", jn), Ce(u, "touchmove", jn), a.supportPointer ? (Ce(u, "pointerup", i._onDrop), !this.nativeDraggable && Ce(u, "pointercancel", i._onDrop)) : (Ce(u, "mouseup", i._onDrop), Ce(u, "touchend", i._onDrop), Ce(u, "touchcancel", i._onDrop)), Cl && this.nativeDraggable && (this.options.touchStartThreshold = 4, K.draggable = !0), Ot("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ii || vn))) {
        if (fe.eventCanceled) {
          this._onDrop();
          return;
        }
        a.supportPointer ? (Ce(u, "pointerup", i._disableDelayedDrag), Ce(u, "pointercancel", i._disableDelayedDrag)) : (Ce(u, "mouseup", i._disableDelayedDrag), Ce(u, "touchend", i._disableDelayedDrag), Ce(u, "touchcancel", i._disableDelayedDrag)), Ce(u, "mousemove", i._delayedDragTouchMoveHandler), Ce(u, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && Ce(u, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
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
    Oe(t, "mouseup", this._disableDelayedDrag), Oe(t, "touchend", this._disableDelayedDrag), Oe(t, "touchcancel", this._disableDelayedDrag), Oe(t, "pointerup", this._disableDelayedDrag), Oe(t, "pointercancel", this._disableDelayedDrag), Oe(t, "mousemove", this._delayedDragTouchMoveHandler), Oe(t, "touchmove", this._delayedDragTouchMoveHandler), Oe(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? Ce(document, "pointermove", this._onTouchMove) : n ? Ce(document, "touchmove", this._onTouchMove) : Ce(document, "mousemove", this._onTouchMove) : (Ce(K, "dragend", this), Ce(Le, "dragstart", this._onDragStart));
    try {
      document.selection ? zi(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (fr = !1, Le && K) {
      Ot("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Ce(document, "dragover", gv);
      var r = this.options;
      !t && kt(K, r.dragClass, !1), kt(K, r.ghostClass, !0), fe.active = this, t && this._appendGhost(), wt({
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
      var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, o = t.touches ? t.touches[0] : t, a = he && vr(he, !0), u = he && a && a.a, s = he && a && a.d, l = Ri && vt && Tl(vt), f = (o.clientX - Mn.clientX + i.x) / (u || 1) + (l ? l[0] - zo[0] : 0) / (u || 1), p = (o.clientY - Mn.clientY + i.y) / (s || 1) + (l ? l[1] - zo[1] : 0) / (s || 1);
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
        var v = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ce(he, "webkitTransform", v), ce(he, "mozTransform", v), ce(he, "msTransform", v), ce(he, "transform", v), Go = f, Ko = p, qt = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!he) {
      var t = this.options.fallbackOnBody ? document.body : Le, n = it(K, !0, Ri, !0, t), r = this.options;
      if (Ri) {
        for (vt = t; ce(vt, "position") === "static" && ce(vt, "transform") === "none" && vt !== document; )
          vt = vt.parentNode;
        vt !== document.body && vt !== document.documentElement ? (vt === document && (vt = Qt()), n.top += vt.scrollTop, n.left += vt.scrollLeft) : vt = Qt(), zo = Tl(vt);
      }
      he = K.cloneNode(!0), kt(he, r.ghostClass, !1), kt(he, r.fallbackClass, !0), kt(he, r.dragClass, !0), ce(he, "transition", ""), ce(he, "transform", ""), ce(he, "box-sizing", "border-box"), ce(he, "margin", 0), ce(he, "top", n.top), ce(he, "left", n.left), ce(he, "width", n.width), ce(he, "height", n.height), ce(he, "opacity", "0.8"), ce(he, "position", Ri ? "absolute" : "fixed"), ce(he, "zIndex", "100000"), ce(he, "pointerEvents", "none"), fe.ghost = he, t.appendChild(he), ce(he, "transform-origin", kl / parseInt(he.style.width) * 100 + "% " + Pl / parseInt(he.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var r = this, i = t.dataTransfer, o = r.options;
    if (Ot("dragStart", this, {
      evt: t
    }), fe.eventCanceled) {
      this._onDrop();
      return;
    }
    Ot("setupClone", this), fe.eventCanceled || (We = Fc(K), We.removeAttribute("id"), We.draggable = !1, We.style["will-change"] = "", this._hideClone(), kt(We, this.options.chosenClass, !1), fe.clone = We), r.cloneId = zi(function() {
      Ot("clone", r), !fe.eventCanceled && (r.options.removeCloneOnHide || Le.insertBefore(We, K), r._hideClone(), wt({
        sortable: r,
        name: "clone"
      }));
    }), !n && kt(K, o.dragClass, !0), n ? (ao = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (Oe(document, "mouseup", r._onDrop), Oe(document, "touchend", r._onDrop), Oe(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(r, i, K)), Ce(document, "drop", r), ce(K, "transform", "translateZ(0)")), fr = !0, r._dragStartId = zi(r._dragStarted.bind(r, n, t)), Ce(document, "selectstart", r), Br = !0, window.getSelection().removeAllRanges(), Kr && ce(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, r = t.target, i, o, a, u = this.options, s = u.group, l = fe.active, f = Ci === s, p = u.sort, v = pt || l, h, m = this, d = !1;
    if (ss) return;
    function c(j, ee) {
      Ot(j, m, en({
        evt: t,
        isOwner: f,
        axis: h ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: o,
        canSort: p,
        fromSortable: v,
        target: r,
        completed: b,
        onMove: function(de, be) {
          return Ti(Le, n, K, i, de, it(de), t, be);
        },
        changed: _
      }, ee));
    }
    function y() {
      c("dragOverAnimationCapture"), m.captureAnimationState(), m !== v && v.captureAnimationState();
    }
    function b(j) {
      return c("dragOverCompleted", {
        insertion: j
      }), j && (f ? l._hideClone() : l._showClone(m), m !== v && (kt(K, pt ? pt.options.ghostClass : l.options.ghostClass, !1), kt(K, u.ghostClass, !0)), pt !== m && m !== fe.active ? pt = m : m === fe.active && pt && (pt = null), v === m && (m._ignoreWhileAnimating = r), m.animateAll(function() {
        c("dragOverAnimationComplete"), m._ignoreWhileAnimating = null;
      }), m !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (r === K && !K.animated || r === n && !r.animated) && (er = null), !u.dragoverBubble && !t.rootEl && r !== document && (K.parentNode[At]._isOutsideThisEl(t.target), !j && jn(t)), !u.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function _() {
      It = jt(K), On = jt(K, u.draggable), wt({
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
    if (ao = !1, l && !u.disabled && (f ? p || (a = Ye !== Le) : pt === this || (this.lastPutMode = Ci.checkPull(this, l, K, t)) && s.checkPut(this, l, K, t))) {
      if (h = this._getDirection(t, r) === "vertical", i = it(K), c("dragOverValid"), fe.eventCanceled) return d;
      if (a)
        return Ye = Le, y(), this._hideClone(), c("revert"), fe.eventCanceled || (Ln ? Le.insertBefore(K, Ln) : Le.appendChild(K)), b(!0);
      var S = _s(n, u.draggable);
      if (!S || _v(t, h, this) && !S.animated) {
        if (S === K)
          return b(!1);
        if (S && n === t.target && (r = S), r && (o = it(r)), Ti(Le, n, K, i, r, o, t, !!r) !== !1)
          return y(), S && S.nextSibling ? n.insertBefore(K, S.nextSibling) : n.appendChild(K), Ye = n, _(), b(!0);
      } else if (S && wv(t, h, this)) {
        var D = wr(n, 0, u, !0);
        if (D === K)
          return b(!1);
        if (r = D, o = it(r), Ti(Le, n, K, i, r, o, t, !1) !== !1)
          return y(), n.insertBefore(K, D), Ye = n, _(), b(!0);
      } else if (r.parentNode === n) {
        o = it(r);
        var O = 0, C, I = K.parentNode !== n, M = !mv(K.animated && K.toRect || i, r.animated && r.toRect || o, h), F = h ? "top" : "left", B = Rl(r, "top", "top") || Rl(K, "top", "top"), G = B ? B.scrollTop : void 0;
        er !== r && (C = o[F], Jr = !1, Di = !M && u.invertSwap || I), O = Sv(t, r, o, h, M ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, Di, er === r);
        var te;
        if (O !== 0) {
          var W = jt(K);
          do
            W -= O, te = Ye.children[W];
          while (te && (ce(te, "display") === "none" || te === he));
        }
        if (O === 0 || te === r)
          return b(!1);
        er = r, Xr = O;
        var q = r.nextElementSibling, L = !1;
        L = O === 1;
        var X = Ti(Le, n, K, i, r, o, t, L);
        if (X !== !1)
          return (X === 1 || X === -1) && (L = X === 1), ss = !0, setTimeout(bv, 30), y(), L && !q ? n.appendChild(K) : r.parentNode.insertBefore(K, L ? q : r), B && jc(B, 0, G - B.scrollTop), Ye = K.parentNode, C !== void 0 && !Di && (Ki = Math.abs(C - it(r)[F])), _(), b(!0);
      }
      if (n.contains(K))
        return b(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Oe(document, "mousemove", this._onTouchMove), Oe(document, "touchmove", this._onTouchMove), Oe(document, "pointermove", this._onTouchMove), Oe(document, "dragover", jn), Oe(document, "mousemove", jn), Oe(document, "touchmove", jn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    Oe(t, "mouseup", this._onDrop), Oe(t, "touchend", this._onDrop), Oe(t, "pointerup", this._onDrop), Oe(t, "pointercancel", this._onDrop), Oe(t, "touchcancel", this._onDrop), Oe(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, r = this.options;
    if (It = jt(K), On = jt(K, r.draggable), Ot("drop", this, {
      evt: t
    }), Ye = K && K.parentNode, It = jt(K), On = jt(K, r.draggable), fe.eventCanceled) {
      this._nulling();
      return;
    }
    fr = !1, Di = !1, Jr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ls(this.cloneId), ls(this._dragStartId), this.nativeDraggable && (Oe(document, "drop", this), Oe(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Kr && ce(document.body, "user-select", ""), ce(K, "transform", ""), t && (Br && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), he && he.parentNode && he.parentNode.removeChild(he), (Le === Ye || pt && pt.lastPutMode !== "clone") && We && We.parentNode && We.parentNode.removeChild(We), K && (this.nativeDraggable && Oe(K, "dragend", this), Yo(K), K.style["will-change"] = "", Br && !fr && kt(K, pt ? pt.options.ghostClass : this.options.ghostClass, !1), kt(K, this.options.chosenClass, !1), wt({
      sortable: this,
      name: "unchoose",
      toEl: Ye,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Le !== Ye ? (It >= 0 && (wt({
      rootEl: Ye,
      name: "add",
      toEl: Ye,
      fromEl: Le,
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
      fromEl: Le,
      originalEvent: t
    }), wt({
      sortable: this,
      name: "sort",
      toEl: Ye,
      originalEvent: t
    })), pt && pt.save()) : It !== hr && It >= 0 && (wt({
      sortable: this,
      name: "update",
      toEl: Ye,
      originalEvent: t
    }), wt({
      sortable: this,
      name: "sort",
      toEl: Ye,
      originalEvent: t
    })), fe.active && ((It == null || It === -1) && (It = hr, On = Yr), wt({
      sortable: this,
      name: "end",
      toEl: Ye,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ot("nulling", this), Le = K = Ye = he = Ln = We = Gi = Cn = Mn = qt = Br = It = On = hr = Yr = er = Xr = pt = Ci = fe.dragged = fe.ghost = fe.clone = fe.active = null, lo.forEach(function(t) {
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
        K && (this._onDragOver(t), yv(t));
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
      n = r[i], Vt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || Ev(n));
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
    Ot("destroy", this);
    var t = this.el;
    t[At] = null, Oe(t, "mousedown", this._onTapStart), Oe(t, "touchstart", this._onTapStart), Oe(t, "pointerdown", this._onTapStart), this.nativeDraggable && (Oe(t, "dragover", this), Oe(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), so.splice(so.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Cn) {
      if (Ot("hideClone", this), fe.eventCanceled) return;
      ce(We, "display", "none"), this.options.removeCloneOnHide && We.parentNode && We.parentNode.removeChild(We), Cn = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Cn) {
      if (Ot("showClone", this), fe.eventCanceled) return;
      K.parentNode == Le && !this.options.group.revertClone ? Le.insertBefore(We, K) : Ln ? Le.insertBefore(We, Ln) : Le.appendChild(We), this.options.group.revertClone && this.animate(K, We), ce(We, "display", ""), Cn = !1;
    }
  }
};
function yv(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ti(e, t, n, r, i, o, a, u) {
  var s, l = e[At], f = l.options.onMove, p;
  return window.CustomEvent && !vn && !ii ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = r, s.related = i || t, s.relatedRect = o || it(t), s.willInsertAfter = u, s.originalEvent = a, e.dispatchEvent(s), f && (p = f.call(l, s, a)), p;
}
function Yo(e) {
  e.draggable = !1;
}
function bv() {
  ss = !1;
}
function wv(e, t, n) {
  var r = it(wr(n.el, 0, n.options, !0)), i = Bc(n.el, n.options, he), o = 10;
  return t ? e.clientX < i.left - o || e.clientY < r.top && e.clientX < r.right : e.clientY < i.top - o || e.clientY < r.bottom && e.clientX < r.left;
}
function _v(e, t, n) {
  var r = it(_s(n.el, n.options.draggable)), i = Bc(n.el, n.options, he), o = 10;
  return t ? e.clientX > i.right + o || e.clientY > r.bottom && e.clientX > r.left : e.clientY > i.bottom + o || e.clientX > r.right && e.clientY > r.top;
}
function Sv(e, t, n, r, i, o, a, u) {
  var s = r ? e.clientY : e.clientX, l = r ? n.height : n.width, f = r ? n.top : n.left, p = r ? n.bottom : n.right, v = !1;
  if (!a) {
    if (u && Ki < l * i) {
      if (!Jr && (Xr === 1 ? s > f + l * o / 2 : s < p - l * o / 2) && (Jr = !0), Jr)
        v = !0;
      else if (Xr === 1 ? s < f + Ki : s > p - Ki)
        return -Xr;
    } else if (s > f + l * (1 - i) / 2 && s < p - l * (1 - i) / 2)
      return xv(t);
  }
  return v = v || a, v && (s < f + l * o / 2 || s > p - l * o / 2) ? s > f + l / 2 ? 1 : -1 : 0;
}
function xv(e) {
  return jt(K) < jt(e) ? 1 : -1;
}
function Ev(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--; )
    r += t.charCodeAt(n);
  return r.toString(36);
}
function Ov(e) {
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
mo && Ce(document, "touchmove", function(e) {
  (fe.active || fr) && e.cancelable && e.preventDefault();
});
fe.utils = {
  on: Ce,
  off: Oe,
  css: ce,
  find: Nc,
  is: function(t, n) {
    return !!Vt(t, n, t, !1);
  },
  extend: sv,
  throttle: Mc,
  closest: Vt,
  toggleClass: kt,
  clone: Fc,
  index: jt,
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
fe.version = ov;
var rt = [], qr, us, cs = !1, Xo, Jo, uo, Lr;
function Av() {
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
      this.sortable.nativeDraggable ? Ce(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ce(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? Ce(document, "touchmove", this._handleFallbackAutoScroll) : Ce(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Oe(document, "dragover", this._handleAutoScroll) : (Oe(document, "pointermove", this._handleFallbackAutoScroll), Oe(document, "touchmove", this._handleFallbackAutoScroll), Oe(document, "mousemove", this._handleFallbackAutoScroll)), $l(), Yi(), lv();
    },
    nulling: function() {
      uo = us = qr = cs = Lr = Xo = Jo = null, rt.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var i = this, o = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, u = document.elementFromPoint(o, a);
      if (uo = n, r || this.options.forceAutoScrollFallback || ii || vn || Kr) {
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
  rt.forEach(function(e) {
    clearInterval(e.pid);
  }), rt = [];
}
function $l() {
  clearInterval(Lr);
}
var Qo = Mc(function(e, t, n, r) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, u = t.scrollSpeed, s = Qt(), l = !1, f;
    us !== n && (us = n, Yi(), qr = t.scroll, f = t.scrollFn, qr === !0 && (qr = Rn(n, !0)));
    var p = 0, v = qr;
    do {
      var h = v, m = it(h), d = m.top, c = m.bottom, y = m.left, b = m.right, _ = m.width, S = m.height, D = void 0, O = void 0, C = h.scrollWidth, I = h.scrollHeight, M = ce(h), F = h.scrollLeft, B = h.scrollTop;
      h === s ? (D = _ < C && (M.overflowX === "auto" || M.overflowX === "scroll" || M.overflowX === "visible"), O = S < I && (M.overflowY === "auto" || M.overflowY === "scroll" || M.overflowY === "visible")) : (D = _ < C && (M.overflowX === "auto" || M.overflowX === "scroll"), O = S < I && (M.overflowY === "auto" || M.overflowY === "scroll"));
      var G = D && (Math.abs(b - i) <= a && F + _ < C) - (Math.abs(y - i) <= a && !!F), te = O && (Math.abs(c - o) <= a && B + S < I) - (Math.abs(d - o) <= a && !!B);
      if (!rt[p])
        for (var W = 0; W <= p; W++)
          rt[W] || (rt[W] = {});
      (rt[p].vx != G || rt[p].vy != te || rt[p].el !== h) && (rt[p].el = h, rt[p].vx = G, rt[p].vy = te, clearInterval(rt[p].pid), (G != 0 || te != 0) && (l = !0, rt[p].pid = setInterval((function() {
        r && this.layer === 0 && fe.active._onTouchMove(uo);
        var q = rt[this.layer].vy ? rt[this.layer].vy * u : 0, L = rt[this.layer].vx ? rt[this.layer].vx * u : 0;
        typeof f == "function" && f.call(fe.dragged.parentNode[At], L, q, e, uo, rt[this.layer].el) !== "continue" || jc(rt[this.layer].el, L, q);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && v !== s && (v = Rn(v, !1)));
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
fe.mount(new Av());
fe.mount(xs, Ss);
function Cv(e, t, n = {}) {
  let r;
  const { document: i = Eh, ...o } = n, a = {
    onUpdate: (f) => {
      Tv(t, f.oldIndex, f.newIndex, f);
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
  return Sh(u), Dc(s), {
    stop: s,
    start: u,
    option: l
  };
}
function Dv(e, t, n) {
  const r = e.children[n];
  e.insertBefore(t, r);
}
function Rv(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Tv(e, t, n, r = null) {
  r != null && (Rv(r.item), Dv(r.from, r.item, t));
  const i = Uf(e), o = i ? [...cn(e)] : cn(e);
  if (n >= 0 && n < o.length) {
    const a = o.splice(t, 1)[0];
    tc(() => {
      o.splice(n, 0, a), i && (e.value = o);
    });
  }
}
var Fn = {}, Zo = {}, Nl;
function vo() {
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
var Ke = {}, tr = {}, Ml;
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
function kv() {
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
function Pv() {
  return Fl || (Fl = 1, ta = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }), ta;
}
var na, Bl;
function Iv() {
  if (Bl) return na;
  Bl = 1;
  let e = kv();
  return na = new e(Pv()), na;
}
const $v = "@kintone/rest-api-client", Nv = "5.7.0", Mv = { access: "public" }, jv = { name: "Cybozu, Inc.", url: "https://cybozu.co.jp" }, Fv = "Kintone REST API client for JavaScript", Bv = "lib/src/index.js", qv = "esm/src/index.js", Lv = "lib/src/index.browser.js", Vv = "lib/src/index.d.ts", Uv = { prebuild: "pnpm clean", build: "tsc --build --force", postbuild: "run-p build:*", lint: "eslint 'src/**/*.ts' --max-warnings 0", prepublishOnly: "run-p build:umd_*", test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest", "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand", "build:umd_dev": "rollup -c --environment BUILD:development", "build:umd_prod": "rollup -c --environment BUILD:production", clean: "rimraf lib esm umd", fix: "pnpm lint --fix", start: "pnpm build --watch" }, Wv = { type: "git", url: "git+https://github.com/kintone/js-sdk.git", directory: "packages/rest-api-client" }, Hv = ["esm", "lib", "umd", "index.mjs"], Gv = ["kintone", "rest", "api-client"], Kv = "MIT", zv = { url: "https://github.com/kintone/js-sdk/issues" }, Yv = "https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme", Xv = { node: ">=18" }, Jv = { "@rollup/plugin-babel": "^6.0.4", "@rollup/plugin-commonjs": "^26.0.3", "@rollup/plugin-json": "^6.1.0", "@rollup/plugin-node-resolve": "^15.3.1", "@rollup/plugin-terser": "^0.4.4", "@types/core-js": "^2.5.8", "@types/js-base64": "^3.3.1", "@types/mime": "^3.0.4", "@types/qs": "^6.9.17", rollup: "^4.30.1", "rollup-plugin-ecma-version-validator": "^0.2.13", "rollup-plugin-license": "^3.5.3", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-polyfill-node": "^0.13.0", webpack: "^5.97.1", "webpack-cli": "^5.1.4", "babel-loader": "^9.2.1", vite: "^5.4.11", rimraf: "^5.0.10", "cross-env": "^7.0.3" }, Qv = { "core-js": "^3.39.0", axios: "^1.7.9", "form-data": "^4.0.1", "js-base64": "^3.7.7", mime: "^3.0.0", qs: "^6.12.3" }, Zv = { ".": { types: { import: "./esm/src/index.d.ts", require: "./lib/src/index.d.ts", default: "./lib/src/index.d.ts" }, node: { import: "./index.mjs", require: "./lib/src/index.js", default: "./lib/src/index.js" }, browser: "./lib/src/index.browser.js" }, "./package.json": "./package.json" }, eg = {
  name: $v,
  version: Nv,
  publishConfig: Mv,
  author: jv,
  description: Fv,
  main: Bv,
  module: qv,
  browser: Lv,
  types: Vv,
  scripts: Uv,
  repository: Wv,
  files: Hv,
  keywords: Gv,
  license: Kv,
  bugs: zv,
  homepage: Yv,
  engines: Xv,
  devDependencies: Jv,
  dependencies: Qv,
  exports: Zv
};
var ql;
function tg() {
  if (ql) return Ke;
  ql = 1;
  var e = Ke.__awaiter || function(m, d, c, y) {
    function b(_) {
      return _ instanceof c ? _ : new c(function(S) {
        S(_);
      });
    }
    return new (c || (c = Promise))(function(_, S) {
      function D(I) {
        try {
          C(y.next(I));
        } catch (M) {
          S(M);
        }
      }
      function O(I) {
        try {
          C(y.throw(I));
        } catch (M) {
          S(M);
        }
      }
      function C(I) {
        I.done ? _(I.value) : b(I.value).then(D, O);
      }
      C((y = y.apply(m, d || [])).next());
    });
  }, t = Ke.__generator || function(m, d) {
    var c = { label: 0, sent: function() {
      if (_[0] & 1) throw _[1];
      return _[1];
    }, trys: [], ops: [] }, y, b, _, S = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return S.next = D(0), S.throw = D(1), S.return = D(2), typeof Symbol == "function" && (S[Symbol.iterator] = function() {
      return this;
    }), S;
    function D(C) {
      return function(I) {
        return O([C, I]);
      };
    }
    function O(C) {
      if (y) throw new TypeError("Generator is already executing.");
      for (; S && (S = 0, C[0] && (c = 0)), c; ) try {
        if (y = 1, b && (_ = C[0] & 2 ? b.return : C[0] ? b.throw || ((_ = b.return) && _.call(b), 0) : b.next) && !(_ = _.call(b, C[1])).done) return _;
        switch (b = 0, _ && (C = [C[0] & 2, _.value]), C[0]) {
          case 0:
          case 1:
            _ = C;
            break;
          case 4:
            return c.label++, { value: C[1], done: !1 };
          case 5:
            c.label++, b = C[1], C = [0];
            continue;
          case 7:
            C = c.ops.pop(), c.trys.pop();
            continue;
          default:
            if (_ = c.trys, !(_ = _.length > 0 && _[_.length - 1]) && (C[0] === 6 || C[0] === 2)) {
              c = 0;
              continue;
            }
            if (C[0] === 3 && (!_ || C[1] > _[0] && C[1] < _[3])) {
              c.label = C[1];
              break;
            }
            if (C[0] === 6 && c.label < _[1]) {
              c.label = _[1], _ = C;
              break;
            }
            if (_ && c.label < _[2]) {
              c.label = _[2], c.ops.push(C);
              break;
            }
            _[2] && c.ops.pop(), c.trys.pop();
            continue;
        }
        C = d.call(m, c);
      } catch (I) {
        C = [6, I], b = 0;
      } finally {
        y = _ = 0;
      }
      if (C[0] & 5) throw C[1];
      return { value: C[0] ? C[1] : void 0, done: !0 };
    }
  }, n = Ke.__importDefault || function(m) {
    return m && m.__esModule ? m : { default: m };
  };
  Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.getVersion = Ke.buildBaseUrl = Ke.buildFormDataValue = Ke.buildHeaders = Ke.buildPlatformDependentConfig = Ke.getDefaultAuth = Ke.getRequestToken = Ke.readFileFromPath = void 0;
  var r = Es(), i = n(Iv()), o = n(eg), a = function(m) {
    throw new r.UnsupportedPlatformError("Browser");
  };
  Ke.readFileFromPath = a;
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
  Ke.getRequestToken = u;
  var s = function() {
    return {
      type: "session"
    };
  };
  Ke.getDefaultAuth = s;
  var l = function() {
    return {};
  };
  Ke.buildPlatformDependentConfig = l;
  var f = function() {
    return {};
  };
  Ke.buildHeaders = f;
  var p = function(m, d) {
    var c = {};
    return d && (c.type = i.default.getType(d) || void 0), new Blob([m], c);
  };
  Ke.buildFormDataValue = p;
  var v = function(m) {
    if (m)
      return m;
    if (location === void 0)
      throw new Error("The baseUrl parameter is required for this environment");
    var d = location.host, c = location.protocol;
    return "".concat(c, "//").concat(d);
  };
  Ke.buildBaseUrl = v;
  var h = function() {
    return o.default.version;
  };
  return Ke.getVersion = h, Ke;
}
var nr = {}, xn = {}, rr = {}, $r = {}, Ll;
function ng() {
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
  var t = ng(), n = (
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
function rg() {
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
        var s = this, l = u.requests, f = l.map(function(v) {
          if ("endpointName" in v) {
            var h = v.endpointName, m = n(v, ["endpointName"]);
            return t({ api: s.buildPathWithGuestSpaceId({ endpointName: h }) }, m);
          }
          return v;
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
function ig() {
  if (Wl) return Yt;
  Wl = 1;
  var e = Yt.__extends || /* @__PURE__ */ function() {
    var u = function(s, l) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, p) {
        f.__proto__ = p;
      } || function(f, p) {
        for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && (f[v] = p[v]);
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
    function p(v) {
      return v instanceof l ? v : new l(function(h) {
        h(v);
      });
    }
    return new (l || (l = Promise))(function(v, h) {
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
        y.done ? v(y.value) : p(y.value).then(m, d);
      }
      c((f = f.apply(u, s || [])).next());
    });
  }, r = Yt.__generator || function(u, s) {
    var l = { label: 0, sent: function() {
      if (v[0] & 1) throw v[1];
      return v[1];
    }, trys: [], ops: [] }, f, p, v, h = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
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
        if (f = 1, p && (v = c[0] & 2 ? p.return : c[0] ? p.throw || ((v = p.return) && v.call(p), 0) : p.next) && !(v = v.call(p, c[1])).done) return v;
        switch (p = 0, v && (c = [c[0] & 2, v.value]), c[0]) {
          case 0:
          case 1:
            v = c;
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
            if (v = l.trys, !(v = v.length > 0 && v[v.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              l = 0;
              continue;
            }
            if (c[0] === 3 && (!v || c[1] > v[0] && c[1] < v[3])) {
              l.label = c[1];
              break;
            }
            if (c[0] === 6 && l.label < v[1]) {
              l.label = v[1], v = c;
              break;
            }
            if (v && l.label < v[2]) {
              l.label = v[2], l.ops.push(c);
              break;
            }
            v[2] && l.ops.pop(), l.trys.pop();
            continue;
        }
        c = s.call(u, l);
      } catch (y) {
        c = [6, y], p = 0;
      } finally {
        f = v = 0;
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
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: f
        });
        return this.client.get(v, t({}, p));
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
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: f
        });
        return this.client.get(v, t({}, p));
      }, s.prototype.updateFormLayout = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getViews = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: f
        });
        return this.client.get(v, p);
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
          var f, p, v, h, m;
          return r(this, function(d) {
            switch (d.label) {
              case 0:
                return f = l.name, p = l.space, v = this.buildPathWithGuestSpaceId({
                  endpointName: "app",
                  preview: !0
                }), p ? (h = this.buildPathWithGuestSpaceId({
                  endpointName: "space"
                }), [4, this.client.get(h, {
                  id: p
                })]) : [3, 2];
              case 1:
                return m = d.sent().defaultThread, [2, this.client.post(v, t(t({}, l), { thread: m }))];
              case 2:
                return [2, this.client.post(v, { name: f })];
            }
          });
        });
      }, s.prototype.getAppSettings = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: f
        });
        return this.client.get(v, p);
      }, s.prototype.updateAppSettings = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getProcessManagement = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: f
        });
        return this.client.get(v, p);
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
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: f
        });
        return this.client.get(v, t({}, p));
      }, s.prototype.updateFieldAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAppAcl = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: f
        });
        return this.client.get(v, t({}, p));
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
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: f
        });
        return this.client.get(v, t({}, p));
      }, s.prototype.updateRecordAcl = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAppCustomize = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: f
        });
        return this.client.get(v, t({}, p));
      }, s.prototype.updateAppCustomize = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getGeneralNotifications = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: f
        });
        return this.client.get(v, t({}, p));
      }, s.prototype.updateGeneralNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getPerRecordNotifications = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: f
        });
        return this.client.get(v, p);
      }, s.prototype.updatePerRecordNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getReminderNotifications = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: f
        });
        return this.client.get(v, p);
      }, s.prototype.updateReminderNotifications = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getReports = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: f
        });
        return this.client.get(v, p);
      }, s.prototype.updateReports = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAppActions = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: f
        });
        return this.client.get(v, p);
      }, s.prototype.updateAppActions = function(l) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: !0
        });
        return this.client.put(f, l);
      }, s.prototype.getAdminNotes = function(l) {
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: f
        });
        return this.client.get(v, p);
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
        var f = l.preview, p = i(l, ["preview"]), v = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: f
        });
        return this.client.get(v, p);
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
function og() {
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
function ag() {
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
        var l = this, f = a - o.length, p = r.extractErrorIndex(f, u, s), v = r.buildErrorMessage(f, a, p);
        return l = n.call(this, v) || this, l.name = "KintoneAllRecordsError", l.processedRecordsResult = i, l.unprocessedRecords = o, l.error = u, l.errorIndex = p, l.message = v, l.numOfProcessedRecords = f, l.numOfAllRecords = a, Object.setPrototypeOf(l, r.prototype), l;
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
function sg() {
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
    Object.defineProperty(e, "__esModule", { value: !0 }), n(og(), e), n(ag(), e), n(sg(), e);
  }(Nr)), Nr;
}
var Yl;
function lg() {
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
      function S(C) {
        try {
          O(c.next(C));
        } catch (I) {
          _(I);
        }
      }
      function D(C) {
        try {
          O(c.throw(C));
        } catch (I) {
          _(I);
        }
      }
      function O(C) {
        C.done ? b(C.value) : y(C.value).then(S, D);
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
      return function(C) {
        return D([O, C]);
      };
    }
    function D(O) {
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
      } catch (C) {
        O = [6, C], y = 0;
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
  var a = Os(), u = Er(), s = 100, l = 100, f = 100, p = 500, v = (
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
          var c, y, b, _, S, D;
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
                  record: Object.assign({}, b, (D = {}, D[y.field] = { value: y.value }, D))
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
                  records: b.map(function(D, O) {
                    return { id: D, revision: _[O] };
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
          var c, y, b, _, S, D, O;
          return r(this, function(C) {
            return c = d.condition, y = d.orderBy, b = d.withCursor, _ = b === void 0 ? !0 : b, S = i(d, ["condition", "orderBy", "withCursor"]), y ? _ ? (D = c ? "".concat(c, " ") : "", O = "".concat(D).concat(y ? "order by ".concat(y) : ""), [2, this.getAllRecordsWithCursor(t(t({}, S), { query: O }))]) : [2, this.getAllRecordsWithOffset(t(t({}, S), { orderBy: y, condition: c }))] : [2, this.getAllRecordsWithId(t(t({}, S), { condition: c }))];
          });
        });
      }, m.prototype.getAllRecordsWithId = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b, _, S, D, O, C, I, M;
          return r(this, function(F) {
            switch (F.label) {
              case 0:
                c = d.fields, y = d.condition, b = i(d, ["fields", "condition"]), _ = c, _ && _.length > 0 && _.indexOf("$id") === -1 && (_ = o(o([], _, !0), ["$id"], !1)), S = y ? "(".concat(y, ") and ") : "", D = [], O = "0", F.label = 1;
              case 1:
                return C = "".concat(S, "$id > ").concat(O, " order by $id asc limit ").concat(p), [4, this.getRecords(t(t({}, b), { fields: _, query: C }))];
              case 2:
                if (I = F.sent(), D = D.concat(I.records), I.records.length < p)
                  return [3, 3];
                if (M = I.records[I.records.length - 1], M.$id.type === "__ID__")
                  O = M.$id.value;
                else
                  throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
                return [3, 1];
              case 3:
                return [2, D];
            }
          });
        });
      }, m.prototype.getAllRecordsWithOffset = function(d) {
        return n(this, void 0, void 0, function() {
          var c, y, b, _, S, D, O, C;
          return r(this, function(I) {
            switch (I.label) {
              case 0:
                c = d.condition, y = d.orderBy, b = i(d, ["condition", "orderBy"]), _ = c ? "".concat(c, " ") : "", S = [], D = 0, I.label = 1;
              case 1:
                return O = "".concat(_).concat(y ? "order by ".concat(y, " ") : "", "limit ").concat(p, " offset ").concat(D), [4, this.getRecords(t(t({}, b), { query: O }))];
              case 2:
                return C = I.sent(), S = S.concat(C.records), C.records.length < p ? [3, 3] : (D += p, [3, 1]);
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
          var b, _, S, D, O, C;
          return r(this, function(I) {
            switch (I.label) {
              case 0:
                if (b = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * s, _ = d.app, S = d.records, D = S.slice(0, b), D.length === 0)
                  return [2, { records: y }];
                I.label = 1;
              case 1:
                return I.trys.push([1, 3, , 4]), [4, this.addAllRecordsWithBulkRequest({
                  app: _,
                  records: D
                })];
              case 2:
                return O = I.sent(), [3, 4];
              case 3:
                throw C = I.sent(), new a.KintoneAllRecordsError({ records: y }, S, c, C, s);
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
                  var D = S.ids, O = S.revisions;
                  return D.map(function(C, I) {
                    return { id: C, revision: O[I] };
                  });
                }).reduce(function(S, D) {
                  return S.concat(D);
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
          var b, _, S, D, O, C, I;
          return r(this, function(M) {
            switch (M.label) {
              case 0:
                if (b = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * l, _ = d.app, S = d.upsert, D = d.records, O = D.slice(0, b), O.length === 0)
                  return [2, { records: y }];
                M.label = 1;
              case 1:
                return M.trys.push([1, 3, , 4]), [4, this.updateAllRecordsWithBulkRequest({
                  app: _,
                  upsert: S,
                  records: O
                })];
              case 2:
                return C = M.sent(), [3, 4];
              case 3:
                throw I = M.sent(), new a.KintoneAllRecordsError({ records: y }, D, c, I, l);
              case 4:
                return [2, this.updateAllRecordsRecursive({
                  app: _,
                  upsert: S,
                  records: D.slice(b)
                }, c, y.concat(C))];
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
                }).reduce(function(S, D) {
                  return S.concat(D);
                }, [])];
            }
          });
        });
      }, m.prototype.deleteAllRecords = function(d) {
        return this.deleteAllRecordsRecursive(d, d.records.length);
      }, m.prototype.deleteAllRecordsRecursive = function(d, c) {
        return n(this, void 0, void 0, function() {
          var y, b, _, S, D;
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
                throw D = O.sent(), new a.KintoneAllRecordsError({}, _, c, D, f);
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
  return Lt.RecordClient = v, Lt;
}
var sr = {}, Xl;
function ug() {
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
function cg() {
  if (Ql) return an;
  Ql = 1;
  var e = an.__extends || /* @__PURE__ */ function() {
    var l = function(f, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(v, h) {
        v.__proto__ = h;
      } || function(v, h) {
        for (var m in h) Object.prototype.hasOwnProperty.call(h, m) && (v[m] = h[m]);
      }, l(f, p);
    };
    return function(f, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(f, p);
      function v() {
        this.constructor = f;
      }
      f.prototype = p === null ? Object.create(p) : (v.prototype = p.prototype, new v());
    };
  }(), t = an.__awaiter || function(l, f, p, v) {
    function h(m) {
      return m instanceof p ? m : new p(function(d) {
        d(m);
      });
    }
    return new (p || (p = Promise))(function(m, d) {
      function c(_) {
        try {
          b(v.next(_));
        } catch (S) {
          d(S);
        }
      }
      function y(_) {
        try {
          b(v.throw(_));
        } catch (S) {
          d(S);
        }
      }
      function b(_) {
        _.done ? m(_.value) : h(_.value).then(c, y);
      }
      b((v = v.apply(l, f || [])).next());
    });
  }, n = an.__generator || function(l, f) {
    var p = { label: 0, sent: function() {
      if (m[0] & 1) throw m[1];
      return m[1];
    }, trys: [], ops: [] }, v, h, m, d = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return d.next = c(0), d.throw = c(1), d.return = c(2), typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function c(b) {
      return function(_) {
        return y([b, _]);
      };
    }
    function y(b) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; d && (d = 0, b[0] && (p = 0)), p; ) try {
        if (v = 1, h && (m = b[0] & 2 ? h.return : b[0] ? h.throw || ((m = h.return) && m.call(h), 0) : h.next) && !(m = m.call(h, b[1])).done) return m;
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
        v = m = 0;
      }
      if (b[0] & 5) throw b[1];
      return { value: b[0] ? b[1] : void 0, done: !0 };
    }
  }, r = an.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(an, "__esModule", { value: !0 }), an.FileClient = void 0;
  var i = r(Gc()), o = vo(), a = Es(), u = Er(), s = (
    /** @class */
    function(l) {
      e(f, l);
      function f() {
        return l !== null && l.apply(this, arguments) || this;
      }
      return f.prototype.uploadFile = function(p) {
        return t(this, void 0, void 0, function() {
          var v, h, m, d, _, c, y, b, _, S;
          return n(this, function(D) {
            switch (D.label) {
              case 0:
                if (v = this.buildPathWithGuestSpaceId({
                  endpointName: "file"
                }), h = new i.default(), !("path" in p.file)) return [3, 5];
                D.label = 1;
              case 1:
                return D.trys.push([1, 3, , 4]), [4, o.platformDeps.readFileFromPath(p.file.path)];
              case 2:
                return m = D.sent(), d = m.name, _ = m.data, h.append("file", _, d), [3, 4];
              case 3:
                throw c = D.sent(), c instanceof a.UnsupportedPlatformError ? new Error("uploadFile doesn't allow to accept a file path in ".concat(c.platform, " environment.")) : c;
              case 4:
                return [3, 6];
              case 5:
                y = p.file, b = y.name, _ = y.data, S = o.platformDeps.buildFormDataValue(_, b), h.append("file", S, b), D.label = 6;
              case 6:
                return [2, this.client.postData(v, h)];
            }
          });
        });
      }, f.prototype.downloadFile = function(p) {
        var v = this.buildPathWithGuestSpaceId({
          endpointName: "file"
        });
        return this.client.getData(v, p);
      }, f;
    }(u.BaseClient)
  );
  return an.FileClient = s, an;
}
var lr = {}, Zl;
function fg() {
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
function dg() {
  if (eu) return oa;
  eu = 1;
  function e(g, w) {
    return function() {
      return g.apply(w, arguments);
    };
  }
  const { toString: t } = Object.prototype, { getPrototypeOf: n } = Object, r = /* @__PURE__ */ ((g) => (w) => {
    const x = t.call(w);
    return g[x] || (g[x] = x.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), i = (g) => (g = g.toLowerCase(), (w) => r(w) === g), o = (g) => (w) => typeof w === g, { isArray: a } = Array, u = o("undefined");
  function s(g) {
    return g !== null && !u(g) && g.constructor !== null && !u(g.constructor) && v(g.constructor.isBuffer) && g.constructor.isBuffer(g);
  }
  const l = i("ArrayBuffer");
  function f(g) {
    let w;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? w = ArrayBuffer.isView(g) : w = g && g.buffer && l(g.buffer), w;
  }
  const p = o("string"), v = o("function"), h = o("number"), m = (g) => g !== null && typeof g == "object", d = (g) => g === !0 || g === !1, c = (g) => {
    if (r(g) !== "object")
      return !1;
    const w = n(g);
    return (w === null || w === Object.prototype || Object.getPrototypeOf(w) === null) && !(Symbol.toStringTag in g) && !(Symbol.iterator in g);
  }, y = i("Date"), b = i("File"), _ = i("Blob"), S = i("FileList"), D = (g) => m(g) && v(g.pipe), O = (g) => {
    let w;
    return g && (typeof FormData == "function" && g instanceof FormData || v(g.append) && ((w = r(g)) === "formdata" || // detect form-data instance
    w === "object" && v(g.toString) && g.toString() === "[object FormData]"));
  }, C = i("URLSearchParams"), [I, M, F, B] = ["ReadableStream", "Request", "Response", "Headers"].map(i), G = (g) => g.trim ? g.trim() : g.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function te(g, w, { allOwnKeys: x = !1 } = {}) {
    if (g === null || typeof g > "u")
      return;
    let E, A;
    if (typeof g != "object" && (g = [g]), a(g))
      for (E = 0, A = g.length; E < A; E++)
        w.call(null, g[E], E, g);
    else {
      const R = x ? Object.getOwnPropertyNames(g) : Object.keys(g), T = R.length;
      let U;
      for (E = 0; E < T; E++)
        U = R[E], w.call(null, g[U], U, g);
    }
  }
  function W(g, w) {
    w = w.toLowerCase();
    const x = Object.keys(g);
    let E = x.length, A;
    for (; E-- > 0; )
      if (A = x[E], w === A.toLowerCase())
        return A;
    return null;
  }
  const q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ei, L = (g) => !u(g) && g !== q;
  function X() {
    const { caseless: g } = L(this) && this || {}, w = {}, x = (E, A) => {
      const R = g && W(w, A) || A;
      c(w[R]) && c(E) ? w[R] = X(w[R], E) : c(E) ? w[R] = X({}, E) : a(E) ? w[R] = E.slice() : w[R] = E;
    };
    for (let E = 0, A = arguments.length; E < A; E++)
      arguments[E] && te(arguments[E], x);
    return w;
  }
  const j = (g, w, x, { allOwnKeys: E } = {}) => (te(w, (A, R) => {
    x && v(A) ? g[R] = e(A, x) : g[R] = A;
  }, { allOwnKeys: E }), g), ee = (g) => (g.charCodeAt(0) === 65279 && (g = g.slice(1)), g), re = (g, w, x, E) => {
    g.prototype = Object.create(w.prototype, E), g.prototype.constructor = g, Object.defineProperty(g, "super", {
      value: w.prototype
    }), x && Object.assign(g.prototype, x);
  }, de = (g, w, x, E) => {
    let A, R, T;
    const U = {};
    if (w = w || {}, g == null) return w;
    do {
      for (A = Object.getOwnPropertyNames(g), R = A.length; R-- > 0; )
        T = A[R], (!E || E(T, g, w)) && !U[T] && (w[T] = g[T], U[T] = !0);
      g = x !== !1 && n(g);
    } while (g && (!x || x(g, w)) && g !== Object.prototype);
    return w;
  }, be = (g, w, x) => {
    g = String(g), (x === void 0 || x > g.length) && (x = g.length), x -= w.length;
    const E = g.indexOf(w, x);
    return E !== -1 && E === x;
  }, Pe = (g) => {
    if (!g) return null;
    if (a(g)) return g;
    let w = g.length;
    if (!h(w)) return null;
    const x = new Array(w);
    for (; w-- > 0; )
      x[w] = g[w];
    return x;
  }, Te = /* @__PURE__ */ ((g) => (w) => g && w instanceof g)(typeof Uint8Array < "u" && n(Uint8Array)), N = (g, w) => {
    const E = (g && g[Symbol.iterator]).call(g);
    let A;
    for (; (A = E.next()) && !A.done; ) {
      const R = A.value;
      w.call(g, R[0], R[1]);
    }
  }, z = (g, w) => {
    let x;
    const E = [];
    for (; (x = g.exec(w)) !== null; )
      E.push(x);
    return E;
  }, xe = i("HTMLFormElement"), Ne = (g) => g.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function(x, E, A) {
      return E.toUpperCase() + A;
    }
  ), Ee = (({ hasOwnProperty: g }) => (w, x) => g.call(w, x))(Object.prototype), ne = i("RegExp"), _e = (g, w) => {
    const x = Object.getOwnPropertyDescriptors(g), E = {};
    te(x, (A, R) => {
      let T;
      (T = w(A, R, g)) !== !1 && (E[R] = T || A);
    }), Object.defineProperties(g, E);
  }, we = (g) => {
    _e(g, (w, x) => {
      if (v(g) && ["arguments", "caller", "callee"].indexOf(x) !== -1)
        return !1;
      const E = g[x];
      if (v(E)) {
        if (w.enumerable = !1, "writable" in w) {
          w.writable = !1;
          return;
        }
        w.set || (w.set = () => {
          throw Error("Can not rewrite read-only method '" + x + "'");
        });
      }
    });
  }, Fe = (g, w) => {
    const x = {}, E = (A) => {
      A.forEach((R) => {
        x[R] = !0;
      });
    };
    return a(g) ? E(g) : E(String(g).split(w)), x;
  }, ut = () => {
  }, St = (g, w) => g != null && Number.isFinite(g = +g) ? g : w, Ze = "abcdefghijklmnopqrstuvwxyz", ft = "0123456789", yt = {
    DIGIT: ft,
    ALPHA: Ze,
    ALPHA_DIGIT: Ze + Ze.toUpperCase() + ft
  }, gn = (g = 16, w = yt.ALPHA_DIGIT) => {
    let x = "";
    const { length: E } = w;
    for (; g--; )
      x += w[Math.random() * E | 0];
    return x;
  };
  function Ut(g) {
    return !!(g && v(g.append) && g[Symbol.toStringTag] === "FormData" && g[Symbol.iterator]);
  }
  const Dt = (g) => {
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
    return x(g, 0);
  }, yn = i("AsyncFunction"), bn = (g) => g && (m(g) || v(g)) && v(g.then) && v(g.catch), nn = ((g, w) => g ? setImmediate : w ? ((x, E) => (q.addEventListener("message", ({ source: A, data: R }) => {
    A === q && R === x && E.length && E.shift()();
  }, !1), (A) => {
    E.push(A), q.postMessage(x, "*");
  }))(`axios@${Math.random()}`, []) : (x) => setTimeout(x))(
    typeof setImmediate == "function",
    v(q.postMessage)
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
    isFunction: v,
    isStream: D,
    isURLSearchParams: C,
    isTypedArray: Te,
    isFileList: S,
    forEach: te,
    merge: X,
    extend: j,
    trim: G,
    stripBOM: ee,
    inherits: re,
    toFlatObject: de,
    kindOf: r,
    kindOfTest: i,
    endsWith: be,
    toArray: Pe,
    forEachEntry: N,
    matchAll: z,
    isHTMLForm: xe,
    hasOwnProperty: Ee,
    hasOwnProp: Ee,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: _e,
    freezeMethods: we,
    toObjectSet: Fe,
    toCamelCase: Ne,
    noop: ut,
    toFiniteNumber: St,
    findKey: W,
    global: q,
    isContextDefined: L,
    ALPHABET: yt,
    generateString: gn,
    isSpecCompliantForm: Ut,
    toJSONObject: Dt,
    isAsyncFn: yn,
    isThenable: bn,
    setImmediate: nn,
    asap: bo
  };
  function pe(g, w, x, E, A) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = g, this.name = "AxiosError", w && (this.code = w), x && (this.config = x), E && (this.request = E), A && (this.response = A, this.status = A.status ? A.status : null);
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
  ].forEach((g) => {
    wn[g] = { value: g };
  }), Object.defineProperties(pe, wn), Object.defineProperty(ai, "isAxiosError", { value: !0 }), pe.from = (g, w, x, E, A, R) => {
    const T = Object.create(ai);
    return $.toFlatObject(g, T, function(ie) {
      return ie !== Error.prototype;
    }, (U) => U !== "isAxiosError"), pe.call(T, g.message, w, x, E, A), T.cause = g, T.name = g.name, R && Object.assign(T, R), T;
  };
  var Ar = null;
  function Vn(g) {
    return $.isPlainObject(g) || $.isArray(g);
  }
  function si(g) {
    return $.endsWith(g, "[]") ? g.slice(0, -2) : g;
  }
  function li(g, w, x) {
    return g ? g.concat(w).map(function(A, R) {
      return A = si(A), !x && R ? "[" + A + "]" : A;
    }).join(x ? "." : "") : w;
  }
  function Cr(g) {
    return $.isArray(g) && !g.some(Vn);
  }
  const Un = $.toFlatObject($, {}, null, function(w) {
    return /^is[A-Z]/.test(w);
  });
  function k(g, w, x) {
    if (!$.isObject(g))
      throw new TypeError("target must be an object");
    w = w || new FormData(), x = $.toFlatObject(x, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(ge, se) {
      return !$.isUndefined(se[ge]);
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
    function Q(ae, ge, se) {
      let Je = ae;
      if (ae && !se && typeof ae == "object") {
        if ($.endsWith(ge, "{}"))
          ge = E ? ge : ge.slice(0, -2), ae = JSON.stringify(ae);
        else if ($.isArray(ae) && Cr(ae) || ($.isFileList(ae) || $.endsWith(ge, "[]")) && (Je = $.toArray(ae)))
          return ge = si(ge), Je.forEach(function(ct, on) {
            !($.isUndefined(ct) || ct === null) && w.append(
              // eslint-disable-next-line no-nested-ternary
              T === !0 ? li([ge], on, R) : T === null ? ge : ge + "[]",
              J(ct)
            );
          }), !1;
      }
      return Vn(ae) ? !0 : (w.append(li(se, ge, R), J(ae)), !1);
    }
    const oe = [], Be = Object.assign(Un, {
      defaultVisitor: Q,
      convertValue: J,
      isVisitable: Vn
    });
    function ot(ae, ge) {
      if (!$.isUndefined(ae)) {
        if (oe.indexOf(ae) !== -1)
          throw Error("Circular reference detected in " + ge.join("."));
        oe.push(ae), $.forEach(ae, function(Je, at) {
          (!($.isUndefined(Je) || Je === null) && A.call(
            w,
            Je,
            $.isString(at) ? at.trim() : at,
            ge,
            Be
          )) === !0 && ot(Je, ge ? ge.concat(at) : [at]);
        }), oe.pop();
      }
    }
    if (!$.isObject(g))
      throw new TypeError("data must be an object");
    return ot(g), w;
  }
  function P(g) {
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
  function Ae(g, w) {
    this._pairs = [], g && k(g, this, w);
  }
  const Me = Ae.prototype;
  Me.append = function(w, x) {
    this._pairs.push([w, x]);
  }, Me.toString = function(w) {
    const x = w ? function(E) {
      return w.call(this, E, P);
    } : P;
    return this._pairs.map(function(A) {
      return x(A[0]) + "=" + x(A[1]);
    }, "").join("&");
  };
  function je(g) {
    return encodeURIComponent(g).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function me(g, w, x) {
    if (!w)
      return g;
    const E = x && x.encode || je;
    $.isFunction(x) && (x = {
      serialize: x
    });
    const A = x && x.serialize;
    let R;
    if (A ? R = A(w, x) : R = $.isURLSearchParams(w) ? w.toString() : new Ae(w, x).toString(E), R) {
      const T = g.indexOf("#");
      T !== -1 && (g = g.slice(0, T)), g += (g.indexOf("?") === -1 ? "?" : "&") + R;
    }
    return g;
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
  }, Gt = typeof URLSearchParams < "u" ? URLSearchParams : Ae, Dr = typeof FormData < "u" ? FormData : null, _n = typeof Blob < "u" ? Blob : null, Rt = {
    isBrowser: !0,
    classes: {
      URLSearchParams: Gt,
      FormData: Dr,
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
  }), et = {
    ...Gn,
    ...Rt
  };
  function Tr(g, w) {
    return k(g, new et.classes.URLSearchParams(), Object.assign({
      visitor: function(x, E, A, R) {
        return et.isNode && $.isBuffer(x) ? (this.append(E, x.toString("base64")), !1) : R.defaultVisitor.apply(this, arguments);
      }
    }, w));
  }
  function ci(g) {
    return $.matchAll(/\w+|\[(\w*)]/g, g).map((w) => w[0] === "[]" ? "" : w[1] || w[0]);
  }
  function fi(g) {
    const w = {}, x = Object.keys(g);
    let E;
    const A = x.length;
    let R;
    for (E = 0; E < A; E++)
      R = x[E], w[R] = g[R];
    return w;
  }
  function Kn(g) {
    function w(x, E, A, R) {
      let T = x[R++];
      if (T === "__proto__") return !0;
      const U = Number.isFinite(+T), ie = R >= x.length;
      return T = !T && $.isArray(A) ? A.length : T, ie ? ($.hasOwnProp(A, T) ? A[T] = [A[T], E] : A[T] = E, !U) : ((!A[T] || !$.isObject(A[T])) && (A[T] = []), w(x, E, A[T], R) && $.isArray(A[T]) && (A[T] = fi(A[T])), !U);
    }
    if ($.isFormData(g) && $.isFunction(g.entries)) {
      const x = {};
      return $.forEachEntry(g, (E, A) => {
        w(ci(E), A, x, 0);
      }), x;
    }
    return null;
  }
  function di(g, w, x) {
    if ($.isString(g))
      try {
        return (w || JSON.parse)(g), $.trim(g);
      } catch (E) {
        if (E.name !== "SyntaxError")
          throw E;
      }
    return (0, JSON.stringify)(g);
  }
  const kn = {
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
          return k(
            U ? { "files[]": w } : w,
            ie && new ie(),
            this.formSerializer
          );
        }
      }
      return R || A ? (x.setContentType("application/json", !1), di(w)) : w;
    }],
    transformResponse: [function(w) {
      const x = this.transitional || kn.transitional, E = x && x.forcedJSONParsing, A = this.responseType === "json";
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
      FormData: et.classes.FormData,
      Blob: et.classes.Blob
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
  $.forEach(["delete", "get", "head", "post", "put", "patch"], (g) => {
    kn.headers[g] = {};
  });
  var zn = kn;
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
  var kr = (g) => {
    const w = {};
    let x, E, A;
    return g && g.split(`
`).forEach(function(T) {
      A = T.indexOf(":"), x = T.substring(0, A).trim().toLowerCase(), E = T.substring(A + 1).trim(), !(!x || w[x] && wo[x]) && (x === "set-cookie" ? w[x] ? w[x].push(E) : w[x] = [E] : w[x] = w[x] ? w[x] + ", " + E : E);
    }), w;
  };
  const rn = Symbol("internals");
  function Kt(g) {
    return g && String(g).trim().toLowerCase();
  }
  function Yn(g) {
    return g === !1 || g == null ? g : $.isArray(g) ? g.map(Yn) : String(g);
  }
  function pi(g) {
    const w = /* @__PURE__ */ Object.create(null), x = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let E;
    for (; E = x.exec(g); )
      w[E[1]] = E[2];
    return w;
  }
  const nf = (g) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(g.trim());
  function _o(g, w, x, E, A) {
    if ($.isFunction(E))
      return E.call(this, w, x);
    if (A && (w = x), !!$.isString(w)) {
      if ($.isString(E))
        return w.indexOf(E) !== -1;
      if ($.isRegExp(E))
        return E.test(w);
    }
  }
  function rf(g) {
    return g.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, x, E) => x.toUpperCase() + E);
  }
  function of(g, w) {
    const x = $.toCamelCase(" " + w);
    ["get", "set", "has"].forEach((E) => {
      Object.defineProperty(g, E + x, {
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
        T(kr(w), x);
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
  hi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), $.reduceDescriptors(hi.prototype, ({ value: g }, w) => {
    let x = w[0].toUpperCase() + w.slice(1);
    return {
      get: () => g,
      set(E) {
        this[x] = E;
      }
    };
  }), $.freezeMethods(hi);
  var Ft = hi;
  function So(g, w) {
    const x = this || zn, E = w || x, A = Ft.from(E.headers);
    let R = E.data;
    return $.forEach(g, function(U) {
      R = U.call(x, R, A.normalize(), w ? w.status : void 0);
    }), A.normalize(), R;
  }
  function Rs(g) {
    return !!(g && g.__CANCEL__);
  }
  function Xn(g, w, x) {
    pe.call(this, g ?? "canceled", pe.ERR_CANCELED, w, x), this.name = "CanceledError";
  }
  $.inherits(Xn, pe, {
    __CANCEL__: !0
  });
  function Ts(g, w, x) {
    const E = x.config.validateStatus;
    !x.status || !E || E(x.status) ? g(x) : w(new pe(
      "Request failed with status code " + x.status,
      [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(x.status / 100) - 4],
      x.config,
      x.request,
      x
    ));
  }
  function af(g) {
    const w = /^([-+\w]{1,25})(:?\/\/|:)/.exec(g);
    return w && w[1] || "";
  }
  function sf(g, w) {
    g = g || 10;
    const x = new Array(g), E = new Array(g);
    let A = 0, R = 0, T;
    return w = w !== void 0 ? w : 1e3, function(ie) {
      const J = Date.now(), Q = E[R];
      T || (T = J), x[A] = ie, E[A] = J;
      let oe = R, Be = 0;
      for (; oe !== A; )
        Be += x[oe++], oe = oe % g;
      if (A = (A + 1) % g, A === R && (R = (R + 1) % g), J - T < w)
        return;
      const ot = Q && J - Q;
      return ot ? Math.round(Be * 1e3 / ot) : void 0;
    };
  }
  function lf(g, w) {
    let x = 0, E = 1e3 / w, A, R;
    const T = (J, Q = Date.now()) => {
      x = Q, A = null, R && (clearTimeout(R), R = null), g.apply(null, J);
    };
    return [(...J) => {
      const Q = Date.now(), oe = Q - x;
      oe >= E ? T(J, Q) : (A = J, R || (R = setTimeout(() => {
        R = null, T(A);
      }, E - oe)));
    }, () => A && T(A)];
  }
  const mi = (g, w, x = 3) => {
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
      g(oe);
    }, x);
  }, ks = (g, w) => {
    const x = g != null;
    return [(E) => w[0]({
      lengthComputable: x,
      total: g,
      loaded: E
    }), w[1]];
  }, Ps = (g) => (...w) => $.asap(() => g(...w));
  var uf = et.hasStandardBrowserEnv ? /* @__PURE__ */ ((g, w) => (x) => (x = new URL(x, et.origin), g.protocol === x.protocol && g.host === x.host && (w || g.port === x.port)))(
    new URL(et.origin),
    et.navigator && /(msie|trident)/i.test(et.navigator.userAgent)
  ) : () => !0, cf = et.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(g, w, x, E, A, R) {
        const T = [g + "=" + encodeURIComponent(w)];
        $.isNumber(x) && T.push("expires=" + new Date(x).toGMTString()), $.isString(E) && T.push("path=" + E), $.isString(A) && T.push("domain=" + A), R === !0 && T.push("secure"), document.cookie = T.join("; ");
      },
      read(g) {
        const w = document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"));
        return w ? decodeURIComponent(w[3]) : null;
      },
      remove(g) {
        this.write(g, "", Date.now() - 864e5);
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
  function ff(g) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(g);
  }
  function df(g, w) {
    return w ? g.replace(/\/?\/$/, "") + "/" + w.replace(/^\/+/, "") : g;
  }
  function Is(g, w) {
    return g && !ff(w) ? df(g, w) : w;
  }
  const $s = (g) => g instanceof Ft ? { ...g } : g;
  function Pn(g, w) {
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
      if (oe in g)
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
    return $.forEach(Object.keys(Object.assign({}, g, w)), function(Q) {
      const oe = ie[Q] || A, Be = oe(g[Q], w[Q], Q);
      $.isUndefined(Be) && oe !== U || (x[Q] = Be);
    }), x;
  }
  var Ns = (g) => {
    const w = Pn({}, g);
    let { data: x, withXSRFToken: E, xsrfHeaderName: A, xsrfCookieName: R, headers: T, auth: U } = w;
    w.headers = T = Ft.from(T), w.url = me(Is(w.baseURL, w.url), g.params, g.paramsSerializer), U && T.set(
      "Authorization",
      "Basic " + btoa((U.username || "") + ":" + (U.password ? unescape(encodeURIComponent(U.password)) : ""))
    );
    let ie;
    if ($.isFormData(x)) {
      if (et.hasStandardBrowserEnv || et.hasStandardBrowserWebWorkerEnv)
        T.setContentType(void 0);
      else if ((ie = T.getContentType()) !== !1) {
        const [J, ...Q] = ie ? ie.split(";").map((oe) => oe.trim()).filter(Boolean) : [];
        T.setContentType([J || "multipart/form-data", ...Q].join("; "));
      }
    }
    if (et.hasStandardBrowserEnv && (E && $.isFunction(E) && (E = E(w)), E || E !== !1 && uf(w.url))) {
      const J = A && R && cf.read(R);
      J && T.set(A, J);
    }
    return w;
  }, pf = typeof XMLHttpRequest < "u" && function(g) {
    return new Promise(function(x, E) {
      const A = Ns(g);
      let R = A.data;
      const T = Ft.from(A.headers).normalize();
      let { responseType: U, onUploadProgress: ie, onDownloadProgress: J } = A, Q, oe, Be, ot, ae;
      function ge() {
        ot && ot(), ae && ae(), A.cancelToken && A.cancelToken.unsubscribe(Q), A.signal && A.signal.removeEventListener("abort", Q);
      }
      let se = new XMLHttpRequest();
      se.open(A.method.toUpperCase(), A.url, !0), se.timeout = A.timeout;
      function Je() {
        if (!se)
          return;
        const ct = Ft.from(
          "getAllResponseHeaders" in se && se.getAllResponseHeaders()
        ), xt = {
          data: !U || U === "text" || U === "json" ? se.responseText : se.response,
          status: se.status,
          statusText: se.statusText,
          headers: ct,
          config: g,
          request: se
        };
        Ts(function(In) {
          x(In), ge();
        }, function(In) {
          E(In), ge();
        }, xt), se = null;
      }
      "onloadend" in se ? se.onloadend = Je : se.onreadystatechange = function() {
        !se || se.readyState !== 4 || se.status === 0 && !(se.responseURL && se.responseURL.indexOf("file:") === 0) || setTimeout(Je);
      }, se.onabort = function() {
        se && (E(new pe("Request aborted", pe.ECONNABORTED, g, se)), se = null);
      }, se.onerror = function() {
        E(new pe("Network Error", pe.ERR_NETWORK, g, se)), se = null;
      }, se.ontimeout = function() {
        let on = A.timeout ? "timeout of " + A.timeout + "ms exceeded" : "timeout exceeded";
        const xt = A.transitional || ht;
        A.timeoutErrorMessage && (on = A.timeoutErrorMessage), E(new pe(
          on,
          xt.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,
          g,
          se
        )), se = null;
      }, R === void 0 && T.setContentType(null), "setRequestHeader" in se && $.forEach(T.toJSON(), function(on, xt) {
        se.setRequestHeader(xt, on);
      }), $.isUndefined(A.withCredentials) || (se.withCredentials = !!A.withCredentials), U && U !== "json" && (se.responseType = A.responseType), J && ([Be, ae] = mi(J, !0), se.addEventListener("progress", Be)), ie && se.upload && ([oe, ot] = mi(ie), se.upload.addEventListener("progress", oe), se.upload.addEventListener("loadend", ot)), (A.cancelToken || A.signal) && (Q = (ct) => {
        se && (E(!ct || ct.type ? new Xn(null, g, se) : ct), se.abort(), se = null);
      }, A.cancelToken && A.cancelToken.subscribe(Q), A.signal && (A.signal.aborted ? Q() : A.signal.addEventListener("abort", Q)));
      const at = af(A.url);
      if (at && et.protocols.indexOf(at) === -1) {
        E(new pe("Unsupported protocol " + at + ":", pe.ERR_BAD_REQUEST, g));
        return;
      }
      se.send(R || null);
    });
  }, hf = (g, w) => {
    const { length: x } = g = g ? g.filter(Boolean) : [];
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
        g && (T && clearTimeout(T), T = null, g.forEach((J) => {
          J.unsubscribe ? J.unsubscribe(R) : J.removeEventListener("abort", R);
        }), g = null);
      };
      g.forEach((J) => J.addEventListener("abort", R));
      const { signal: ie } = E;
      return ie.unsubscribe = () => $.asap(U), ie;
    }
  };
  const mf = function* (g, w) {
    let x = g.byteLength;
    if (x < w) {
      yield g;
      return;
    }
    let E = 0, A;
    for (; E < x; )
      A = E + w, yield g.slice(E, A), E = A;
  }, vf = async function* (g, w) {
    for await (const x of gf(g))
      yield* mf(x, w);
  }, gf = async function* (g) {
    if (g[Symbol.asyncIterator]) {
      yield* g;
      return;
    }
    const w = g.getReader();
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
  }, Ms = (g, w, x, E) => {
    const A = vf(g, w);
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
  }, vi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", js = vi && typeof ReadableStream == "function", yf = vi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((g) => (w) => g.encode(w))(new TextEncoder()) : async (g) => new Uint8Array(await new Response(g).arrayBuffer())), Fs = (g, ...w) => {
    try {
      return !!g(...w);
    } catch {
      return !1;
    }
  }, bf = js && Fs(() => {
    let g = !1;
    const w = new Request(et.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !w;
  }), Bs = 64 * 1024, xo = js && Fs(() => $.isReadableStream(new Response("").body)), gi = {
    stream: xo && ((g) => g.body)
  };
  vi && ((g) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((w) => {
      !gi[w] && (gi[w] = $.isFunction(g[w]) ? (x) => x[w]() : (x, E) => {
        throw new pe(`Response type '${w}' is not supported`, pe.ERR_NOT_SUPPORT, E);
      });
    });
  })(new Response());
  const wf = async (g) => {
    if (g == null)
      return 0;
    if ($.isBlob(g))
      return g.size;
    if ($.isSpecCompliantForm(g))
      return (await new Request(et.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if ($.isArrayBufferView(g) || $.isArrayBuffer(g))
      return g.byteLength;
    if ($.isURLSearchParams(g) && (g = g + ""), $.isString(g))
      return (await yf(g)).byteLength;
  }, _f = async (g, w) => {
    const x = $.toFiniteNumber(g.getContentLength());
    return x ?? wf(w);
  };
  var Sf = vi && (async (g) => {
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
    } = Ns(g);
    J = J ? (J + "").toLowerCase() : "text";
    let ot = hf([A, R && R.toAbortSignal()], T), ae;
    const ge = ot && ot.unsubscribe && (() => {
      ot.unsubscribe();
    });
    let se;
    try {
      if (ie && bf && x !== "get" && x !== "head" && (se = await _f(Q, E)) !== 0) {
        let xt = new Request(w, {
          method: "POST",
          body: E,
          duplex: "half"
        }), Sn;
        if ($.isFormData(E) && (Sn = xt.headers.get("content-type")) && Q.setContentType(Sn), xt.body) {
          const [In, Si] = ks(
            se,
            mi(Ps(ie))
          );
          E = Ms(xt.body, Bs, In, Si);
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
      const ct = xo && (J === "stream" || J === "response");
      if (xo && (U || ct && ge)) {
        const xt = {};
        ["status", "statusText", "headers"].forEach((Gs) => {
          xt[Gs] = at[Gs];
        });
        const Sn = $.toFiniteNumber(at.headers.get("content-length")), [In, Si] = U && ks(
          Sn,
          mi(Ps(U), !0)
        ) || [];
        at = new Response(
          Ms(at.body, Bs, In, () => {
            Si && Si(), ge && ge();
          }),
          xt
        );
      }
      J = J || "text";
      let on = await gi[$.findKey(gi, J) || "text"](at, g);
      return !ct && ge && ge(), await new Promise((xt, Sn) => {
        Ts(xt, Sn, {
          data: on,
          headers: Ft.from(at.headers),
          status: at.status,
          statusText: at.statusText,
          config: g,
          request: ae
        });
      });
    } catch (Je) {
      throw ge && ge(), Je && Je.name === "TypeError" && /fetch/i.test(Je.message) ? Object.assign(
        new pe("Network Error", pe.ERR_NETWORK, g, ae),
        {
          cause: Je.cause || Je
        }
      ) : pe.from(Je, Je && Je.code, g, ae);
    }
  });
  const Eo = {
    http: Ar,
    xhr: pf,
    fetch: Sf
  };
  $.forEach(Eo, (g, w) => {
    if (g) {
      try {
        Object.defineProperty(g, "name", { value: w });
      } catch {
      }
      Object.defineProperty(g, "adapterName", { value: w });
    }
  });
  const qs = (g) => `- ${g}`, xf = (g) => $.isFunction(g) || g === null || g === !1;
  var Ls = {
    getAdapter: (g) => {
      g = $.isArray(g) ? g : [g];
      const { length: w } = g;
      let x, E;
      const A = {};
      for (let R = 0; R < w; R++) {
        x = g[R];
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
  function Oo(g) {
    if (g.cancelToken && g.cancelToken.throwIfRequested(), g.signal && g.signal.aborted)
      throw new Xn(null, g);
  }
  function Vs(g) {
    return Oo(g), g.headers = Ft.from(g.headers), g.data = So.call(
      g,
      g.transformRequest
    ), ["post", "put", "patch"].indexOf(g.method) !== -1 && g.headers.setContentType("application/x-www-form-urlencoded", !1), Ls.getAdapter(g.adapter || zn.adapter)(g).then(function(E) {
      return Oo(g), E.data = So.call(
        g,
        g.transformResponse,
        E
      ), E.headers = Ft.from(E.headers), E;
    }, function(E) {
      return Rs(E) || (Oo(g), E && E.response && (E.response.data = So.call(
        g,
        g.transformResponse,
        E.response
      ), E.response.headers = Ft.from(E.response.headers))), Promise.reject(E);
    });
  }
  const Us = "1.7.9", yi = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((g, w) => {
    yi[g] = function(E) {
      return typeof E === g || "a" + (w < 1 ? "n " : " ") + g;
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
  function Ef(g, w, x) {
    if (typeof g != "object")
      throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
    const E = Object.keys(g);
    let A = E.length;
    for (; A-- > 0; ) {
      const R = E[A], T = w[R];
      if (T) {
        const U = g[R], ie = U === void 0 || T(U, R, g);
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
      typeof w == "string" ? (x = x || {}, x.url = w) : x = w || {}, x = Pn(this.defaults, x);
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
      this.interceptors.request.forEach(function(ge) {
        typeof ge.runWhen == "function" && ge.runWhen(x) === !1 || (ie = ie && ge.synchronous, U.unshift(ge.fulfilled, ge.rejected));
      });
      const J = [];
      this.interceptors.response.forEach(function(ge) {
        J.push(ge.fulfilled, ge.rejected);
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
        const ae = U[oe++], ge = U[oe++];
        try {
          ot = ae(ot);
        } catch (se) {
          ge.call(this, se);
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
      w = Pn(this.defaults, w);
      const x = Is(w.baseURL, w.url);
      return me(x, w.params, w.paramsSerializer);
    }
  }
  $.forEach(["delete", "get", "head", "options"], function(w) {
    wi.prototype[w] = function(x, E) {
      return this.request(Pn(E || {}, {
        method: w,
        url: x,
        data: (E || {}).data
      }));
    };
  }), $.forEach(["post", "put", "patch"], function(w) {
    function x(E) {
      return function(R, T, U) {
        return this.request(Pn(U || {}, {
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
  function Af(g) {
    return function(x) {
      return g.apply(null, x);
    };
  }
  function Cf(g) {
    return $.isObject(g) && g.isAxiosError === !0;
  }
  const Co = {
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
  Object.entries(Co).forEach(([g, w]) => {
    Co[w] = g;
  });
  var Df = Co;
  function Hs(g) {
    const w = new _i(g), x = e(_i.prototype.request, w);
    return $.extend(x, _i.prototype, w, { allOwnKeys: !0 }), $.extend(x, w, null, { allOwnKeys: !0 }), x.create = function(A) {
      return Hs(Pn(g, A));
    }, x;
  }
  const tt = Hs(zn);
  return tt.Axios = _i, tt.CanceledError = Xn, tt.CancelToken = Of, tt.isCancel = Rs, tt.VERSION = Us, tt.toFormData = k, tt.AxiosError = pe, tt.Cancel = tt.CanceledError, tt.all = function(w) {
    return Promise.all(w);
  }, tt.spread = Af, tt.isAxiosError = Cf, tt.mergeConfig = Pn, tt.AxiosHeaders = Ft, tt.formToJSON = (g) => Kn($.isHTMLForm(g) ? new FormData(g) : g), tt.getAdapter = Ls.getAdapter, tt.HttpStatusCode = Df, tt.default = tt, oa = tt, oa;
}
var tu;
function pg() {
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
      return p instanceof s ? p : new s(function(v) {
        v(p);
      });
    }
    return new (s || (s = Promise))(function(p, v) {
      function h(c) {
        try {
          d(l.next(c));
        } catch (y) {
          v(y);
        }
      }
      function m(c) {
        try {
          d(l.throw(c));
        } catch (y) {
          v(y);
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
    }, trys: [], ops: [] }, l, f, p, v = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return v.next = h(0), v.throw = h(1), v.return = h(2), typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function h(d) {
      return function(c) {
        return m([d, c]);
      };
    }
    function m(d) {
      if (l) throw new TypeError("Generator is already executing.");
      for (; v && (v = 0, d[0] && (s = 0)), s; ) try {
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
  var i = r(/* @__PURE__ */ dg()), o = (
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
function hg() {
  return nu || (nu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DefaultHttpClient = void 0;
    var t = pg();
    Object.defineProperty(e, "DefaultHttpClient", { enumerable: !0, get: function() {
      return t.AxiosClient;
    } });
  }(ia)), ia;
}
var ln = {}, aa, ru;
function Or() {
  return ru || (ru = 1, aa = TypeError), aa;
}
const mg = {}, vg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mg
}, Symbol.toStringTag, { value: "Module" })), gg = /* @__PURE__ */ mm(vg);
var sa, iu;
function go() {
  if (iu) return sa;
  iu = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, u = i && Set.prototype.forEach, s = typeof WeakMap == "function" && WeakMap.prototype, l = s ? WeakMap.prototype.has : null, f = typeof WeakSet == "function" && WeakSet.prototype, p = f ? WeakSet.prototype.has : null, v = typeof WeakRef == "function" && WeakRef.prototype, h = v ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, d = Object.prototype.toString, c = Function.prototype.toString, y = String.prototype.match, b = String.prototype.slice, _ = String.prototype.replace, S = String.prototype.toUpperCase, D = String.prototype.toLowerCase, O = RegExp.prototype.test, C = Array.prototype.concat, I = Array.prototype.join, M = Array.prototype.slice, F = Math.floor, B = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, G = Object.getOwnPropertySymbols, te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, W = typeof Symbol == "function" && typeof Symbol.iterator == "object", q = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === W || !0) ? Symbol.toStringTag : null, L = Object.prototype.propertyIsEnumerable, X = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(k) {
    return k.__proto__;
  } : null);
  function j(k, P) {
    if (k === 1 / 0 || k === -1 / 0 || k !== k || k && k > -1e3 && k < 1e3 || O.call(/e/, P))
      return P;
    var Ae = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof k == "number") {
      var Me = k < 0 ? -F(-k) : F(k);
      if (Me !== k) {
        var je = String(Me), me = b.call(P, je.length + 1);
        return _.call(je, Ae, "$&_") + "." + _.call(_.call(me, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return _.call(P, Ae, "$&_");
  }
  var ee = gg, re = ee.custom, de = ut(re) ? re : null, be = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Pe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  sa = function k(P, Ae, Me, je) {
    var me = Ae || {};
    if (ft(me, "quoteStyle") && !ft(be, me.quoteStyle))
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
    if (typeof P > "u")
      return "undefined";
    if (P === null)
      return "null";
    if (typeof P == "boolean")
      return P ? "true" : "false";
    if (typeof P == "string")
      return pe(P, me);
    if (typeof P == "number") {
      if (P === 0)
        return 1 / 0 / P > 0 ? "0" : "-0";
      var ht = String(P);
      return Ht ? j(P, ht) : ht;
    }
    if (typeof P == "bigint") {
      var Gt = String(P) + "n";
      return Ht ? j(P, Gt) : Gt;
    }
    var Dr = typeof me.depth > "u" ? 5 : me.depth;
    if (typeof Me > "u" && (Me = 0), Me >= Dr && Dr > 0 && typeof P == "object")
      return xe(P) ? "[Array]" : "[Object]";
    var _n = li(me, Me);
    if (typeof je > "u")
      je = [];
    else if (Ut(je, P) >= 0)
      return "[Circular]";
    function Rt(rn, Kt, Yn) {
      if (Kt && (je = M.call(je), je.push(Kt)), Yn) {
        var pi = {
          depth: me.depth
        };
        return ft(me, "quoteStyle") && (pi.quoteStyle = me.quoteStyle), k(rn, pi, Me + 1, je);
      }
      return k(rn, me, Me + 1, je);
    }
    if (typeof P == "function" && !Ee(P)) {
      var Wn = gn(P), Hn = Un(P, Rt);
      return "[Function" + (Wn ? ": " + Wn : " (anonymous)") + "]" + (Hn.length > 0 ? " { " + I.call(Hn, ", ") + " }" : "");
    }
    if (ut(P)) {
      var ui = W ? _.call(String(P), /^(Symbol\(.*\))_[^)]*$/, "$1") : te.call(P);
      return typeof P == "object" && !W ? wn(ui) : ui;
    }
    if ($(P)) {
      for (var Tn = "<" + D.call(String(P.nodeName)), Rr = P.attributes || [], Gn = 0; Gn < Rr.length; Gn++)
        Tn += " " + Rr[Gn].name + "=" + Te(N(Rr[Gn].value), "double", me);
      return Tn += ">", P.childNodes && P.childNodes.length && (Tn += "..."), Tn += "</" + D.call(String(P.nodeName)) + ">", Tn;
    }
    if (xe(P)) {
      if (P.length === 0)
        return "[]";
      var et = Un(P, Rt);
      return _n && !si(et) ? "[" + Cr(et, _n) + "]" : "[ " + I.call(et, ", ") + " ]";
    }
    if (ne(P)) {
      var Tr = Un(P, Rt);
      return !("cause" in Error.prototype) && "cause" in P && !L.call(P, "cause") ? "{ [" + String(P) + "] " + I.call(C.call("[cause]: " + Rt(P.cause), Tr), ", ") + " }" : Tr.length === 0 ? "[" + String(P) + "]" : "{ [" + String(P) + "] " + I.call(Tr, ", ") + " }";
    }
    if (typeof P == "object" && Wt) {
      if (de && typeof P[de] == "function" && ee)
        return ee(P, { depth: Dr - Me });
      if (Wt !== "symbol" && typeof P.inspect == "function")
        return P.inspect();
    }
    if (Dt(P)) {
      var ci = [];
      return r && r.call(P, function(rn, Kt) {
        ci.push(Rt(Kt, P, !0) + " => " + Rt(rn, P));
      }), Vn("Map", n.call(P), ci, _n);
    }
    if (nn(P)) {
      var fi = [];
      return u && u.call(P, function(rn) {
        fi.push(Rt(rn, P));
      }), Vn("Set", a.call(P), fi, _n);
    }
    if (yn(P))
      return Ar("WeakMap");
    if (bo(P))
      return Ar("WeakSet");
    if (bn(P))
      return Ar("WeakRef");
    if (we(P))
      return wn(Rt(Number(P)));
    if (St(P))
      return wn(Rt(B.call(P)));
    if (Fe(P))
      return wn(m.call(P));
    if (_e(P))
      return wn(Rt(String(P)));
    if (typeof window < "u" && P === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && P === globalThis || typeof ei < "u" && P === ei)
      return "{ [object globalThis] }";
    if (!Ne(P) && !Ee(P)) {
      var Kn = Un(P, Rt), di = X ? X(P) === Object.prototype : P instanceof Object || P.constructor === Object, kn = P instanceof Object ? "" : "null prototype", zn = !di && q && Object(P) === P && q in P ? b.call(yt(P), 8, -1) : kn ? "Object" : "", wo = di || typeof P.constructor != "function" ? "" : P.constructor.name ? P.constructor.name + " " : "", kr = wo + (zn || kn ? "[" + I.call(C.call([], zn || [], kn || []), ": ") + "] " : "");
      return Kn.length === 0 ? kr + "{}" : _n ? kr + "{" + Cr(Kn, _n) + "}" : kr + "{ " + I.call(Kn, ", ") + " }";
    }
    return String(P);
  };
  function Te(k, P, Ae) {
    var Me = Ae.quoteStyle || P, je = be[Me];
    return je + k + je;
  }
  function N(k) {
    return _.call(String(k), /"/g, "&quot;");
  }
  function z(k) {
    return !q || !(typeof k == "object" && (q in k || typeof k[q] < "u"));
  }
  function xe(k) {
    return yt(k) === "[object Array]" && z(k);
  }
  function Ne(k) {
    return yt(k) === "[object Date]" && z(k);
  }
  function Ee(k) {
    return yt(k) === "[object RegExp]" && z(k);
  }
  function ne(k) {
    return yt(k) === "[object Error]" && z(k);
  }
  function _e(k) {
    return yt(k) === "[object String]" && z(k);
  }
  function we(k) {
    return yt(k) === "[object Number]" && z(k);
  }
  function Fe(k) {
    return yt(k) === "[object Boolean]" && z(k);
  }
  function ut(k) {
    if (W)
      return k && typeof k == "object" && k instanceof Symbol;
    if (typeof k == "symbol")
      return !0;
    if (!k || typeof k != "object" || !te)
      return !1;
    try {
      return te.call(k), !0;
    } catch {
    }
    return !1;
  }
  function St(k) {
    if (!k || typeof k != "object" || !B)
      return !1;
    try {
      return B.call(k), !0;
    } catch {
    }
    return !1;
  }
  var Ze = Object.prototype.hasOwnProperty || function(k) {
    return k in this;
  };
  function ft(k, P) {
    return Ze.call(k, P);
  }
  function yt(k) {
    return d.call(k);
  }
  function gn(k) {
    if (k.name)
      return k.name;
    var P = y.call(c.call(k), /^function\s*([\w$]+)/);
    return P ? P[1] : null;
  }
  function Ut(k, P) {
    if (k.indexOf)
      return k.indexOf(P);
    for (var Ae = 0, Me = k.length; Ae < Me; Ae++)
      if (k[Ae] === P)
        return Ae;
    return -1;
  }
  function Dt(k) {
    if (!n || !k || typeof k != "object")
      return !1;
    try {
      n.call(k);
      try {
        a.call(k);
      } catch {
        return !0;
      }
      return k instanceof Map;
    } catch {
    }
    return !1;
  }
  function yn(k) {
    if (!l || !k || typeof k != "object")
      return !1;
    try {
      l.call(k, l);
      try {
        p.call(k, p);
      } catch {
        return !0;
      }
      return k instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function bn(k) {
    if (!h || !k || typeof k != "object")
      return !1;
    try {
      return h.call(k), !0;
    } catch {
    }
    return !1;
  }
  function nn(k) {
    if (!a || !k || typeof k != "object")
      return !1;
    try {
      a.call(k);
      try {
        n.call(k);
      } catch {
        return !0;
      }
      return k instanceof Set;
    } catch {
    }
    return !1;
  }
  function bo(k) {
    if (!p || !k || typeof k != "object")
      return !1;
    try {
      p.call(k, p);
      try {
        l.call(k, l);
      } catch {
        return !0;
      }
      return k instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function $(k) {
    return !k || typeof k != "object" ? !1 : typeof HTMLElement < "u" && k instanceof HTMLElement ? !0 : typeof k.nodeName == "string" && typeof k.getAttribute == "function";
  }
  function pe(k, P) {
    if (k.length > P.maxStringLength) {
      var Ae = k.length - P.maxStringLength, Me = "... " + Ae + " more character" + (Ae > 1 ? "s" : "");
      return pe(b.call(k, 0, P.maxStringLength), P) + Me;
    }
    var je = Pe[P.quoteStyle || "single"];
    je.lastIndex = 0;
    var me = _.call(_.call(k, je, "\\$1"), /[\x00-\x1f]/g, ai);
    return Te(me, "single", P);
  }
  function ai(k) {
    var P = k.charCodeAt(0), Ae = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[P];
    return Ae ? "\\" + Ae : "\\x" + (P < 16 ? "0" : "") + S.call(P.toString(16));
  }
  function wn(k) {
    return "Object(" + k + ")";
  }
  function Ar(k) {
    return k + " { ? }";
  }
  function Vn(k, P, Ae, Me) {
    var je = Me ? Cr(Ae, Me) : I.call(Ae, ", ");
    return k + " (" + P + ") {" + je + "}";
  }
  function si(k) {
    for (var P = 0; P < k.length; P++)
      if (Ut(k[P], `
`) >= 0)
        return !1;
    return !0;
  }
  function li(k, P) {
    var Ae;
    if (k.indent === "	")
      Ae = "	";
    else if (typeof k.indent == "number" && k.indent > 0)
      Ae = I.call(Array(k.indent + 1), " ");
    else
      return null;
    return {
      base: Ae,
      prev: I.call(Array(P + 1), Ae)
    };
  }
  function Cr(k, P) {
    if (k.length === 0)
      return "";
    var Ae = `
` + P.prev + P.base;
    return Ae + I.call(k, "," + Ae) + `
` + P.prev;
  }
  function Un(k, P) {
    var Ae = xe(k), Me = [];
    if (Ae) {
      Me.length = k.length;
      for (var je = 0; je < k.length; je++)
        Me[je] = ft(k, je) ? P(k[je], k) : "";
    }
    var me = typeof G == "function" ? G(k) : [], Wt;
    if (W) {
      Wt = {};
      for (var Ht = 0; Ht < me.length; Ht++)
        Wt["$" + me[Ht]] = me[Ht];
    }
    for (var ht in k)
      ft(k, ht) && (Ae && String(Number(ht)) === ht && ht < k.length || W && Wt["$" + ht] instanceof Symbol || (O.call(/[^\w$]/, ht) ? Me.push(P(ht, k) + ": " + P(k[ht], k)) : Me.push(ht + ": " + P(k[ht], k))));
    if (typeof G == "function")
      for (var Gt = 0; Gt < me.length; Gt++)
        L.call(k, me[Gt]) && Me.push("[" + P(me[Gt]) + "]: " + P(k[me[Gt]], k));
    return Me;
  }
  return sa;
}
var la, ou;
function yg() {
  if (ou) return la;
  ou = 1;
  var e = /* @__PURE__ */ go(), t = /* @__PURE__ */ Or(), n = function(u, s, l) {
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
        var p = s && s.next, v = a(s, f);
        return v && p && p === v && (s = void 0), !!v;
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
function bg() {
  return su || (su = 1, ca = Error), ca;
}
var fa, lu;
function wg() {
  return lu || (lu = 1, fa = EvalError), fa;
}
var da, uu;
function _g() {
  return uu || (uu = 1, da = RangeError), da;
}
var pa, cu;
function Sg() {
  return cu || (cu = 1, pa = ReferenceError), pa;
}
var ha, fu;
function xg() {
  return fu || (fu = 1, ha = SyntaxError), ha;
}
var ma, du;
function Eg() {
  return du || (du = 1, ma = URIError), ma;
}
var va, pu;
function Og() {
  return pu || (pu = 1, va = Math.abs), va;
}
var ga, hu;
function Ag() {
  return hu || (hu = 1, ga = Math.floor), ga;
}
var ya, mu;
function Cg() {
  return mu || (mu = 1, ya = Math.max), ya;
}
var ba, vu;
function Dg() {
  return vu || (vu = 1, ba = Math.min), ba;
}
var wa, gu;
function Rg() {
  return gu || (gu = 1, wa = Math.pow), wa;
}
var _a, yu;
function Tg() {
  return yu || (yu = 1, _a = Math.round), _a;
}
var Sa, bu;
function kg() {
  return bu || (bu = 1, Sa = Number.isNaN || function(t) {
    return t !== t;
  }), Sa;
}
var xa, wu;
function Pg() {
  if (wu) return xa;
  wu = 1;
  var e = /* @__PURE__ */ kg();
  return xa = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, xa;
}
var Ea, _u;
function Ig() {
  return _u || (_u = 1, Ea = Object.getOwnPropertyDescriptor), Ea;
}
var Oa, Su;
function zc() {
  if (Su) return Oa;
  Su = 1;
  var e = /* @__PURE__ */ Ig();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Oa = e, Oa;
}
var Aa, xu;
function $g() {
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
var Ca, Eu;
function Ng() {
  return Eu || (Eu = 1, Ca = function() {
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
  }), Ca;
}
var Da, Ou;
function Mg() {
  if (Ou) return Da;
  Ou = 1;
  var e = typeof Symbol < "u" && Symbol, t = Ng();
  return Da = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Da;
}
var Ra, Au;
function Yc() {
  return Au || (Au = 1, Ra = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ra;
}
var Ta, Cu;
function Xc() {
  if (Cu) return Ta;
  Cu = 1;
  var e = /* @__PURE__ */ Kc();
  return Ta = e.getPrototypeOf || null, Ta;
}
var ka, Du;
function jg() {
  if (Du) return ka;
  Du = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", i = function(s, l) {
    for (var f = [], p = 0; p < s.length; p += 1)
      f[p] = s[p];
    for (var v = 0; v < l.length; v += 1)
      f[v + s.length] = l[v];
    return f;
  }, o = function(s, l) {
    for (var f = [], p = l, v = 0; p < s.length; p += 1, v += 1)
      f[v] = s[p];
    return f;
  }, a = function(u, s) {
    for (var l = "", f = 0; f < u.length; f += 1)
      l += u[f], f + 1 < u.length && (l += s);
    return l;
  };
  return ka = function(s) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var f = o(arguments, 1), p, v = function() {
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
    if (p = Function("binder", "return function (" + a(m, ",") + "){ return binder.apply(this,arguments); }")(v), l.prototype) {
      var c = function() {
      };
      c.prototype = l.prototype, p.prototype = new c(), c.prototype = null;
    }
    return p;
  }, ka;
}
var Pa, Ru;
function yo() {
  if (Ru) return Pa;
  Ru = 1;
  var e = jg();
  return Pa = Function.prototype.bind || e, Pa;
}
var Ia, Tu;
function As() {
  return Tu || (Tu = 1, Ia = Function.prototype.call), Ia;
}
var $a, ku;
function Jc() {
  return ku || (ku = 1, $a = Function.prototype.apply), $a;
}
var Na, Pu;
function Fg() {
  return Pu || (Pu = 1, Na = typeof Reflect < "u" && Reflect && Reflect.apply), Na;
}
var Ma, Iu;
function Bg() {
  if (Iu) return Ma;
  Iu = 1;
  var e = yo(), t = Jc(), n = As(), r = Fg();
  return Ma = r || e.call(n, t), Ma;
}
var ja, $u;
function Qc() {
  if ($u) return ja;
  $u = 1;
  var e = yo(), t = /* @__PURE__ */ Or(), n = As(), r = Bg();
  return ja = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return r(e, n, o);
  }, ja;
}
var Fa, Nu;
function qg() {
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
function Lg() {
  if (Mu) return Ba;
  Mu = 1;
  var e = Yc(), t = Xc(), n = /* @__PURE__ */ qg();
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
function Vg() {
  if (ju) return qa;
  ju = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = yo();
  return qa = n.call(e, t), qa;
}
var La, Fu;
function Cs() {
  if (Fu) return La;
  Fu = 1;
  var e, t = /* @__PURE__ */ Kc(), n = /* @__PURE__ */ bg(), r = /* @__PURE__ */ wg(), i = /* @__PURE__ */ _g(), o = /* @__PURE__ */ Sg(), a = /* @__PURE__ */ xg(), u = /* @__PURE__ */ Or(), s = /* @__PURE__ */ Eg(), l = /* @__PURE__ */ Og(), f = /* @__PURE__ */ Ag(), p = /* @__PURE__ */ Cg(), v = /* @__PURE__ */ Dg(), h = /* @__PURE__ */ Rg(), m = /* @__PURE__ */ Tg(), d = /* @__PURE__ */ Pg(), c = Function, y = function(Ee) {
    try {
      return c('"use strict"; return (' + Ee + ").constructor;")();
    } catch {
    }
  }, b = /* @__PURE__ */ zc(), _ = /* @__PURE__ */ $g(), S = function() {
    throw new u();
  }, D = b ? function() {
    try {
      return arguments.callee, S;
    } catch {
      try {
        return b(arguments, "callee").get;
      } catch {
        return S;
      }
    }
  }() : S, O = Mg()(), C = Lg(), I = Xc(), M = Yc(), F = Jc(), B = As(), G = {}, te = typeof Uint8Array > "u" || !C ? e : C(Uint8Array), W = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": O && C ? C([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": G,
    "%AsyncGenerator%": G,
    "%AsyncGeneratorFunction%": G,
    "%AsyncIteratorPrototype%": G,
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
    "%GeneratorFunction%": G,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": O && C ? C(C([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !O || !C ? e : C((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !O || !C ? e : C((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": O && C ? C(""[Symbol.iterator]()) : e,
    "%Symbol%": O ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": D,
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
    "%Math.min%": v,
    "%Math.pow%": h,
    "%Math.round%": m,
    "%Math.sign%": d,
    "%Reflect.getPrototypeOf%": M
  };
  if (C)
    try {
      null.error;
    } catch (Ee) {
      var q = C(C(Ee));
      W["%Error.prototype%"] = q;
    }
  var L = function Ee(ne) {
    var _e;
    if (ne === "%AsyncFunction%")
      _e = y("async function () {}");
    else if (ne === "%GeneratorFunction%")
      _e = y("function* () {}");
    else if (ne === "%AsyncGeneratorFunction%")
      _e = y("async function* () {}");
    else if (ne === "%AsyncGenerator%") {
      var we = Ee("%AsyncGeneratorFunction%");
      we && (_e = we.prototype);
    } else if (ne === "%AsyncIteratorPrototype%") {
      var Fe = Ee("%AsyncGenerator%");
      Fe && C && (_e = C(Fe.prototype));
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
  }, j = yo(), ee = /* @__PURE__ */ Vg(), re = j.call(B, Array.prototype.concat), de = j.call(F, Array.prototype.splice), be = j.call(B, String.prototype.replace), Pe = j.call(B, String.prototype.slice), Te = j.call(B, RegExp.prototype.exec), N = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, z = /\\(\\)?/g, xe = function(ne) {
    var _e = Pe(ne, 0, 1), we = Pe(ne, -1);
    if (_e === "%" && we !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (we === "%" && _e !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var Fe = [];
    return be(ne, N, function(ut, St, Ze, ft) {
      Fe[Fe.length] = Ze ? be(ft, z, "$1") : St || ut;
    }), Fe;
  }, Ne = function(ne, _e) {
    var we = ne, Fe;
    if (ee(X, we) && (Fe = X[we], we = "%" + Fe[0] + "%"), ee(W, we)) {
      var ut = W[we];
      if (ut === G && (ut = L(we)), typeof ut > "u" && !_e)
        throw new u("intrinsic " + ne + " exists, but is not available. Please file an issue!");
      return {
        alias: Fe,
        name: we,
        value: ut
      };
    }
    throw new a("intrinsic " + ne + " does not exist!");
  };
  return La = function(ne, _e) {
    if (typeof ne != "string" || ne.length === 0)
      throw new u("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof _e != "boolean")
      throw new u('"allowMissing" argument must be a boolean');
    if (Te(/^%?[^%]*%?$/, ne) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var we = xe(ne), Fe = we.length > 0 ? we[0] : "", ut = Ne("%" + Fe + "%", _e), St = ut.name, Ze = ut.value, ft = !1, yt = ut.alias;
    yt && (Fe = yt[0], de(we, re([0, 1], yt)));
    for (var gn = 1, Ut = !0; gn < we.length; gn += 1) {
      var Dt = we[gn], yn = Pe(Dt, 0, 1), bn = Pe(Dt, -1);
      if ((yn === '"' || yn === "'" || yn === "`" || bn === '"' || bn === "'" || bn === "`") && yn !== bn)
        throw new a("property names with quotes must have matching quotes");
      if ((Dt === "constructor" || !Ut) && (ft = !0), Fe += "." + Dt, St = "%" + Fe + "%", ee(W, St))
        Ze = W[St];
      else if (Ze != null) {
        if (!(Dt in Ze)) {
          if (!_e)
            throw new u("base intrinsic for " + ne + " exists, but the property is not available.");
          return;
        }
        if (b && gn + 1 >= we.length) {
          var nn = b(Ze, Dt);
          Ut = !!nn, Ut && "get" in nn && !("originalValue" in nn.get) ? Ze = nn.get : Ze = Ze[Dt];
        } else
          Ut = ee(Ze, Dt), Ze = Ze[Dt];
        Ut && !ft && (W[St] = Ze);
      }
    }
    return Ze;
  }, La;
}
var Va, Bu;
function Zc() {
  if (Bu) return Va;
  Bu = 1;
  var e = /* @__PURE__ */ Cs(), t = Qc(), n = t([e("%String.prototype.indexOf%")]);
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
  var e = /* @__PURE__ */ Cs(), t = /* @__PURE__ */ Zc(), n = /* @__PURE__ */ go(), r = /* @__PURE__ */ Or(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), u = t("Map.prototype.has", !0), s = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Ua = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var p, v = {
      assert: function(h) {
        if (!v.has(h))
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
    return v;
  }, Ua;
}
var Wa, Lu;
function Ug() {
  if (Lu) return Wa;
  Lu = 1;
  var e = /* @__PURE__ */ Cs(), t = /* @__PURE__ */ Zc(), n = /* @__PURE__ */ go(), r = ef(), i = /* @__PURE__ */ Or(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), u = t("WeakMap.prototype.set", !0), s = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Wa = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var p, v, h = {
        assert: function(m) {
          if (!h.has(m))
            throw new i("Side channel does not contain " + n(m));
        },
        delete: function(m) {
          if (o && m && (typeof m == "object" || typeof m == "function")) {
            if (p)
              return l(p, m);
          } else if (r && v)
            return v.delete(m);
          return !1;
        },
        get: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && p ? a(p, m) : v && v.get(m);
        },
        has: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && p ? s(p, m) : !!v && v.has(m);
        },
        set: function(m, d) {
          o && m && (typeof m == "object" || typeof m == "function") ? (p || (p = new o()), u(p, m, d)) : r && (v || (v = r()), v.set(m, d));
        }
      };
      return h;
    }
  ) : r, Wa;
}
var Ha, Vu;
function Wg() {
  if (Vu) return Ha;
  Vu = 1;
  var e = /* @__PURE__ */ Or(), t = /* @__PURE__ */ go(), n = yg(), r = ef(), i = Ug(), o = i || r || n;
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
function Ds() {
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
  var e = /* @__PURE__ */ Ds(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var c = [], y = 0; y < 256; ++y)
      c.push("%" + ((y < 16 ? "0" : "") + y.toString(16)).toUpperCase());
    return c;
  }(), i = function(y) {
    for (; y.length > 1; ) {
      var b = y.pop(), _ = b.obj[b.prop];
      if (n(_)) {
        for (var S = [], D = 0; D < _.length; ++D)
          typeof _[D] < "u" && S.push(_[D]);
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
    return n(y) && !n(b) && (S = o(y, _)), n(y) && n(b) ? (b.forEach(function(D, O) {
      if (t.call(y, O)) {
        var C = y[O];
        C && typeof C == "object" && D && typeof D == "object" ? y[O] = c(C, D, _) : y.push(D);
      } else
        y[O] = D;
    }), y) : Object.keys(b).reduce(function(D, O) {
      var C = b[O];
      return t.call(D, O) ? D[O] = c(D[O], C, _) : D[O] = C, D;
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
  }, l = 1024, f = function(y, b, _, S, D) {
    if (y.length === 0)
      return y;
    var O = y;
    if (typeof y == "symbol" ? O = Symbol.prototype.toString.call(y) : typeof y != "string" && (O = String(y)), _ === "iso-8859-1")
      return escape(O).replace(/%u[0-9a-f]{4}/gi, function(te) {
        return "%26%23" + parseInt(te.slice(2), 16) + "%3B";
      });
    for (var C = "", I = 0; I < O.length; I += l) {
      for (var M = O.length >= l ? O.slice(I, I + l) : O, F = [], B = 0; B < M.length; ++B) {
        var G = M.charCodeAt(B);
        if (G === 45 || G === 46 || G === 95 || G === 126 || G >= 48 && G <= 57 || G >= 65 && G <= 90 || G >= 97 && G <= 122 || D === e.RFC1738 && (G === 40 || G === 41)) {
          F[F.length] = M.charAt(B);
          continue;
        }
        if (G < 128) {
          F[F.length] = r[G];
          continue;
        }
        if (G < 2048) {
          F[F.length] = r[192 | G >> 6] + r[128 | G & 63];
          continue;
        }
        if (G < 55296 || G >= 57344) {
          F[F.length] = r[224 | G >> 12] + r[128 | G >> 6 & 63] + r[128 | G & 63];
          continue;
        }
        B += 1, G = 65536 + ((G & 1023) << 10 | M.charCodeAt(B) & 1023), F[F.length] = r[240 | G >> 18] + r[128 | G >> 12 & 63] + r[128 | G >> 6 & 63] + r[128 | G & 63];
      }
      C += F.join("");
    }
    return C;
  }, p = function(y) {
    for (var b = [{ obj: { o: y }, prop: "o" }], _ = [], S = 0; S < b.length; ++S)
      for (var D = b[S], O = D.obj[D.prop], C = Object.keys(O), I = 0; I < C.length; ++I) {
        var M = C[I], F = O[M];
        typeof F == "object" && F !== null && _.indexOf(F) === -1 && (b.push({ obj: O, prop: M }), _.push(F));
      }
    return i(b), y;
  }, v = function(y) {
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
    isRegExp: v,
    maybeMap: d,
    merge: a
  }, Ka;
}
var za, Hu;
function Hg() {
  if (Hu) return za;
  Hu = 1;
  var e = Wg(), t = /* @__PURE__ */ tf(), n = /* @__PURE__ */ Ds(), r = Object.prototype.hasOwnProperty, i = {
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
  }, v = {}, h = function d(c, y, b, _, S, D, O, C, I, M, F, B, G, te, W, q, L, X) {
    for (var j = c, ee = X, re = 0, de = !1; (ee = ee.get(v)) !== void 0 && !de; ) {
      var be = ee.get(c);
      if (re += 1, typeof be < "u") {
        if (be === re)
          throw new RangeError("Cyclic object value");
        de = !0;
      }
      typeof ee.get(v) > "u" && (re = 0);
    }
    if (typeof M == "function" ? j = M(y, j) : j instanceof Date ? j = G(j) : b === "comma" && o(j) && (j = t.maybeMap(j, function(St) {
      return St instanceof Date ? G(St) : St;
    })), j === null) {
      if (D)
        return I && !q ? I(y, f.encoder, L, "key", te) : y;
      j = "";
    }
    if (p(j) || t.isBuffer(j)) {
      if (I) {
        var Pe = q ? y : I(y, f.encoder, L, "key", te);
        return [W(Pe) + "=" + W(I(j, f.encoder, L, "value", te))];
      }
      return [W(y) + "=" + W(String(j))];
    }
    var Te = [];
    if (typeof j > "u")
      return Te;
    var N;
    if (b === "comma" && o(j))
      q && I && (j = t.maybeMap(j, I)), N = [{ value: j.length > 0 ? j.join(",") || null : void 0 }];
    else if (o(M))
      N = M;
    else {
      var z = Object.keys(j);
      N = F ? z.sort(F) : z;
    }
    var xe = C ? String(y).replace(/\./g, "%2E") : String(y), Ne = _ && o(j) && j.length === 1 ? xe + "[]" : xe;
    if (S && o(j) && j.length === 0)
      return Ne + "[]";
    for (var Ee = 0; Ee < N.length; ++Ee) {
      var ne = N[Ee], _e = typeof ne == "object" && ne && typeof ne.value < "u" ? ne.value : j[ne];
      if (!(O && _e === null)) {
        var we = B && C ? String(ne).replace(/\./g, "%2E") : String(ne), Fe = o(j) ? typeof b == "function" ? b(Ne, we) : Ne : Ne + (B ? "." + we : "[" + we + "]");
        X.set(c, re);
        var ut = e();
        ut.set(v, X), u(Te, d(
          _e,
          Fe,
          b,
          _,
          S,
          D,
          O,
          C,
          b === "comma" && q && o(j) ? null : I,
          M,
          F,
          B,
          G,
          te,
          W,
          q,
          L,
          ut
        ));
      }
    }
    return Te;
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
    var D;
    if (c.arrayFormat in i ? D = c.arrayFormat : "indices" in c ? D = c.indices ? "indices" : "repeat" : D = f.arrayFormat, "commaRoundTrip" in c && typeof c.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var O = typeof c.allowDots > "u" ? c.encodeDotInKeys === !0 ? !0 : f.allowDots : !!c.allowDots;
    return {
      addQueryPrefix: typeof c.addQueryPrefix == "boolean" ? c.addQueryPrefix : f.addQueryPrefix,
      allowDots: O,
      allowEmptyArrays: typeof c.allowEmptyArrays == "boolean" ? !!c.allowEmptyArrays : f.allowEmptyArrays,
      arrayFormat: D,
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
    var D = [];
    if (typeof y != "object" || y === null)
      return "";
    var O = i[b.arrayFormat], C = O === "comma" && b.commaRoundTrip;
    _ || (_ = Object.keys(y)), b.sort && _.sort(b.sort);
    for (var I = e(), M = 0; M < _.length; ++M) {
      var F = _[M], B = y[F];
      b.skipNulls && B === null || u(D, h(
        B,
        F,
        O,
        C,
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
    var G = D.join(b.delimiter), te = b.addQueryPrefix === !0 ? "?" : "";
    return b.charsetSentinel && (b.charset === "iso-8859-1" ? te += "utf8=%26%2310003%3B&" : te += "utf8=%E2%9C%93&"), G.length > 0 ? te + G : "";
  }, za;
}
var Ya, Gu;
function Gg() {
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
  }, i = function(v) {
    return v.replace(/&#(\d+);/g, function(h, m) {
      return String.fromCharCode(parseInt(m, 10));
    });
  }, o = function(v, h, m) {
    if (v && typeof v == "string" && h.comma && v.indexOf(",") > -1)
      return v.split(",");
    if (h.throwOnLimitExceeded && m >= h.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return v;
  }, a = "utf8=%26%2310003%3B", u = "utf8=%E2%9C%93", s = function(h, m) {
    var d = { __proto__: null }, c = m.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    c = c.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var y = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, b = c.split(
      m.delimiter,
      m.throwOnLimitExceeded ? y + 1 : y
    );
    if (m.throwOnLimitExceeded && b.length > y)
      throw new RangeError("Parameter limit exceeded. Only " + y + " parameter" + (y === 1 ? "" : "s") + " allowed.");
    var _ = -1, S, D = m.charset;
    if (m.charsetSentinel)
      for (S = 0; S < b.length; ++S)
        b[S].indexOf("utf8=") === 0 && (b[S] === u ? D = "utf-8" : b[S] === a && (D = "iso-8859-1"), _ = S, S = b.length);
    for (S = 0; S < b.length; ++S)
      if (S !== _) {
        var O = b[S], C = O.indexOf("]="), I = C === -1 ? O.indexOf("=") : C + 1, M, F;
        I === -1 ? (M = m.decoder(O, r.decoder, D, "key"), F = m.strictNullHandling ? null : "") : (M = m.decoder(O.slice(0, I), r.decoder, D, "key"), F = e.maybeMap(
          o(
            O.slice(I + 1),
            m,
            n(d[M]) ? d[M].length : 0
          ),
          function(G) {
            return m.decoder(G, r.decoder, D, "value");
          }
        )), F && m.interpretNumericEntities && D === "iso-8859-1" && (F = i(String(F))), O.indexOf("[]=") > -1 && (F = n(F) ? [F] : F);
        var B = t.call(d, M);
        B && m.duplicates === "combine" ? d[M] = e.combine(d[M], F) : (!B || m.duplicates === "last") && (d[M] = F);
      }
    return d;
  }, l = function(v, h, m, d) {
    var c = 0;
    if (v.length > 0 && v[v.length - 1] === "[]") {
      var y = v.slice(0, -1).join("");
      c = Array.isArray(h) && h[y] ? h[y].length : 0;
    }
    for (var b = d ? h : o(h, m, c), _ = v.length - 1; _ >= 0; --_) {
      var S, D = v[_];
      if (D === "[]" && m.parseArrays)
        S = m.allowEmptyArrays && (b === "" || m.strictNullHandling && b === null) ? [] : e.combine([], b);
      else {
        S = m.plainObjects ? { __proto__: null } : {};
        var O = D.charAt(0) === "[" && D.charAt(D.length - 1) === "]" ? D.slice(1, -1) : D, C = m.decodeDotInKeys ? O.replace(/%2E/g, ".") : O, I = parseInt(C, 10);
        !m.parseArrays && C === "" ? S = { 0: b } : !isNaN(I) && D !== C && String(I) === C && I >= 0 && m.parseArrays && I <= m.arrayLimit ? (S = [], S[I] = b) : C !== "__proto__" && (S[C] = b);
      }
      b = S;
    }
    return b;
  }, f = function(h, m, d, c) {
    if (h) {
      var y = d.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h, b = /(\[[^[\]]*])/, _ = /(\[[^[\]]*])/g, S = d.depth > 0 && b.exec(y), D = S ? y.slice(0, S.index) : y, O = [];
      if (D) {
        if (!d.plainObjects && t.call(Object.prototype, D) && !d.allowPrototypes)
          return;
        O.push(D);
      }
      for (var C = 0; d.depth > 0 && (S = _.exec(y)) !== null && C < d.depth; ) {
        if (C += 1, !d.plainObjects && t.call(Object.prototype, S[1].slice(1, -1)) && !d.allowPrototypes)
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
  return Ya = function(v, h) {
    var m = p(h);
    if (v === "" || v === null || typeof v > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var d = typeof v == "string" ? s(v, m) : v, c = m.plainObjects ? { __proto__: null } : {}, y = Object.keys(d), b = 0; b < y.length; ++b) {
      var _ = y[b], S = f(_, d[_], m, typeof v == "string");
      c = e.merge(c, S, m);
    }
    return m.allowSparse === !0 ? c : e.compact(c);
  }, Ya;
}
var Xa, Ku;
function Kg() {
  if (Ku) return Xa;
  Ku = 1;
  var e = /* @__PURE__ */ Hg(), t = /* @__PURE__ */ Gg(), n = /* @__PURE__ */ Ds();
  return Xa = {
    formats: n,
    parse: t,
    stringify: e
  }, Xa;
}
var Xi = { exports: {} }, zg = Xi.exports, zu;
function Yg() {
  return zu || (zu = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(typeof self < "u" ? self : typeof window < "u" ? window : typeof ei < "u" ? ei : zg, function() {
      var n = "3.7.7", r = n, i = typeof Buffer == "function", o = typeof TextDecoder == "function" ? new TextDecoder() : void 0, a = typeof TextEncoder == "function" ? new TextEncoder() : void 0, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = Array.prototype.slice.call(u), l = function(N) {
        var z = {};
        return N.forEach(function(xe, Ne) {
          return z[xe] = Ne;
        }), z;
      }(s), f = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, p = String.fromCharCode.bind(String), v = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function(N) {
        return new Uint8Array(Array.prototype.slice.call(N, 0));
      }, h = function(N) {
        return N.replace(/=/g, "").replace(/[+\/]/g, function(z) {
          return z == "+" ? "-" : "_";
        });
      }, m = function(N) {
        return N.replace(/[^A-Za-z0-9\+\/]/g, "");
      }, d = function(N) {
        for (var z, xe, Ne, Ee, ne = "", _e = N.length % 3, we = 0; we < N.length; ) {
          if ((xe = N.charCodeAt(we++)) > 255 || (Ne = N.charCodeAt(we++)) > 255 || (Ee = N.charCodeAt(we++)) > 255)
            throw new TypeError("invalid character found");
          z = xe << 16 | Ne << 8 | Ee, ne += s[z >> 18 & 63] + s[z >> 12 & 63] + s[z >> 6 & 63] + s[z & 63];
        }
        return _e ? ne.slice(0, _e - 3) + "===".substring(_e) : ne;
      }, c = typeof btoa == "function" ? function(N) {
        return btoa(N);
      } : i ? function(N) {
        return Buffer.from(N, "binary").toString("base64");
      } : d, y = i ? function(N) {
        return Buffer.from(N).toString("base64");
      } : function(N) {
        for (var z = 4096, xe = [], Ne = 0, Ee = N.length; Ne < Ee; Ne += z)
          xe.push(p.apply(null, N.subarray(Ne, Ne + z)));
        return c(xe.join(""));
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
      }, S = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, D = function(N) {
        return N.replace(S, _);
      }, O = i ? function(N) {
        return Buffer.from(N, "utf8").toString("base64");
      } : a ? function(N) {
        return y(a.encode(N));
      } : function(N) {
        return c(D(N));
      }, C = function(N, z) {
        return z === void 0 && (z = !1), z ? h(O(N)) : O(N);
      }, I = function(N) {
        return C(N, !0);
      }, M = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, F = function(N) {
        switch (N.length) {
          case 4:
            var z = (7 & N.charCodeAt(0)) << 18 | (63 & N.charCodeAt(1)) << 12 | (63 & N.charCodeAt(2)) << 6 | 63 & N.charCodeAt(3), xe = z - 65536;
            return p((xe >>> 10) + 55296) + p((xe & 1023) + 56320);
          case 3:
            return p((15 & N.charCodeAt(0)) << 12 | (63 & N.charCodeAt(1)) << 6 | 63 & N.charCodeAt(2));
          default:
            return p((31 & N.charCodeAt(0)) << 6 | 63 & N.charCodeAt(1));
        }
      }, B = function(N) {
        return N.replace(M, F);
      }, G = function(N) {
        if (N = N.replace(/\s+/g, ""), !f.test(N))
          throw new TypeError("malformed base64.");
        N += "==".slice(2 - (N.length & 3));
        for (var z, xe = "", Ne, Ee, ne = 0; ne < N.length; )
          z = l[N.charAt(ne++)] << 18 | l[N.charAt(ne++)] << 12 | (Ne = l[N.charAt(ne++)]) << 6 | (Ee = l[N.charAt(ne++)]), xe += Ne === 64 ? p(z >> 16 & 255) : Ee === 64 ? p(z >> 16 & 255, z >> 8 & 255) : p(z >> 16 & 255, z >> 8 & 255, z & 255);
        return xe;
      }, te = typeof atob == "function" ? function(N) {
        return atob(m(N));
      } : i ? function(N) {
        return Buffer.from(N, "base64").toString("binary");
      } : G, W = i ? function(N) {
        return v(Buffer.from(N, "base64"));
      } : function(N) {
        return v(te(N).split("").map(function(z) {
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
        var N = function(z, xe) {
          return Object.defineProperty(String.prototype, z, re(xe));
        };
        N("fromBase64", function() {
          return j(this);
        }), N("toBase64", function(z) {
          return C(this, z);
        }), N("toBase64URI", function() {
          return C(this, !0);
        }), N("toBase64URL", function() {
          return C(this, !0);
        }), N("toUint8Array", function() {
          return q(this);
        });
      }, be = function() {
        var N = function(z, xe) {
          return Object.defineProperty(Uint8Array.prototype, z, re(xe));
        };
        N("toBase64", function(z) {
          return b(this, z);
        }), N("toBase64URI", function() {
          return b(this, !0);
        }), N("toBase64URL", function() {
          return b(this, !0);
        });
      }, Pe = function() {
        de(), be();
      }, Te = {
        version: n,
        VERSION: r,
        atob: te,
        atobPolyfill: G,
        btoa: c,
        btoaPolyfill: d,
        fromBase64: j,
        toBase64: C,
        encode: C,
        encodeURI: I,
        encodeURL: I,
        utob: D,
        btou: B,
        decode: j,
        isValid: ee,
        fromUint8Array: b,
        toUint8Array: q,
        extendString: de,
        extendUint8Array: be,
        extendBuiltins: Pe
      };
      return Te.Base64 = {}, Object.keys(Te).forEach(function(N) {
        return Te.Base64[N] = Te[N];
      }), Te;
    });
  }(Xi)), Xi.exports;
}
var Yu;
function Xg() {
  if (Yu) return ln;
  Yu = 1;
  var e = ln.__assign || function() {
    return e = Object.assign || function(p) {
      for (var v, h = 1, m = arguments.length; h < m; h++) {
        v = arguments[h];
        for (var d in v) Object.prototype.hasOwnProperty.call(v, d) && (p[d] = v[d]);
      }
      return p;
    }, e.apply(this, arguments);
  }, t = ln.__awaiter || function(p, v, h, m) {
    function d(c) {
      return c instanceof h ? c : new h(function(y) {
        y(c);
      });
    }
    return new (h || (h = Promise))(function(c, y) {
      function b(D) {
        try {
          S(m.next(D));
        } catch (O) {
          y(O);
        }
      }
      function _(D) {
        try {
          S(m.throw(D));
        } catch (O) {
          y(O);
        }
      }
      function S(D) {
        D.done ? c(D.value) : d(D.value).then(b, _);
      }
      S((m = m.apply(p, v || [])).next());
    });
  }, n = ln.__generator || function(p, v) {
    var h = { label: 0, sent: function() {
      if (c[0] & 1) throw c[1];
      return c[1];
    }, trys: [], ops: [] }, m, d, c, y = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return y.next = b(0), y.throw = b(1), y.return = b(2), typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
    function b(S) {
      return function(D) {
        return _([S, D]);
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
        S = v.call(p, h);
      } catch (D) {
        S = [6, D], d = 0;
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
  var i = r(Gc()), o = r(/* @__PURE__ */ Kg()), a = /* @__PURE__ */ Yg(), u = vo(), s = "http", l = 4096, f = (
    /** @class */
    function() {
      function p(v) {
        if (this.baseUrl = v.baseUrl, this.auth = v.auth, this.headers = this.buildHeaders({
          basicAuth: v.basicAuth,
          userAgent: v.userAgent
        }), "httpsAgent" in v) {
          if ("clientCertAuth" in v)
            throw new Error("Cannot specify clientCertAuth along with httpsAgent.");
          this.httpsAgent = v.httpsAgent;
        } else "clientCertAuth" in v && (this.clientCertAuth = v.clientCertAuth);
        this.proxy = v.proxy, this.requestToken = null, this.socketTimeout = v.socketTimeout;
      }
      return p.prototype.build = function(v, h, m, d) {
        return t(this, void 0, void 0, function() {
          var c, y, O, b, _, S, D, O, C, I, M, F, B;
          return n(this, function(G) {
            switch (G.label) {
              case 0:
                switch (c = e(e(e({ method: v, headers: this.headers, url: "".concat(this.baseUrl).concat(h) }, d || {}), u.platformDeps.buildPlatformDependentConfig({
                  httpsAgent: this.httpsAgent,
                  clientCertAuth: this.clientCertAuth,
                  socketTimeout: this.socketTimeout
                })), { proxy: this.buildProxyConfig(this.proxy) }), y = v, y) {
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
                return [2, e.apply(void 0, b.concat([(M.data = G.sent(), M)]))];
              case 3:
                return [2, e(e({}, c), { url: O })];
              case 4:
                return m instanceof i.default ? [4, this.buildData(m)] : [3, 6];
              case 5:
                return _ = G.sent(), [2, e(e({}, c), { headers: (
                  // NOTE: formData.getHeaders does not exist in a browser environment.
                  typeof _.getHeaders == "function" ? e(e({}, this.headers), _.getHeaders()) : this.headers
                ), data: _ })];
              case 6:
                return S = [e({}, c)], F = {}, [4, this.buildData(m)];
              case 7:
                return [2, e.apply(void 0, S.concat([(F.data = G.sent(), F)]))];
              case 8:
                return D = [e({}, c)], B = {}, [4, this.buildData(m)];
              case 9:
                return [2, e.apply(void 0, D.concat([(B.data = G.sent(), B)]))];
              case 10:
                return C = this.buildRequestUrl, I = [h], [4, this.buildData(m)];
              case 11:
                return O = C.apply(this, I.concat([G.sent()])), [2, e(e({}, c), { url: O })];
              case 12:
                throw new Error("".concat(v, " method is not supported"));
              case 13:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, p.prototype.buildProxyConfig = function(v) {
        var h;
        if (v !== void 0) {
          if (v === !1)
            return !1;
          var m = v;
          return m.auth && (m.auth.username.length === 0 || m.auth.password.length === 0) && (m.auth = void 0), m.protocol = (h = m.protocol) !== null && h !== void 0 ? h : s, m;
        }
      }, p.prototype.buildRequestUrl = function(v, h) {
        return "".concat(this.baseUrl).concat(v, "?").concat(o.default.stringify(h));
      }, p.prototype.buildData = function(v) {
        return t(this, void 0, void 0, function() {
          var h;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return this.auth.type !== "session" ? [3, 2] : [4, this.getRequestToken()];
              case 1:
                return h = m.sent(), v instanceof i.default ? (v.append("__REQUEST_TOKEN__", h), [2, v]) : [2, e({ __REQUEST_TOKEN__: h }, v)];
              case 2:
                return [2, v];
            }
          });
        });
      }, p.prototype.buildHeaders = function(v) {
        var h = v.basicAuth, m = v.userAgent, d = h ? {
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
          var v;
          return n(this, function(h) {
            switch (h.label) {
              case 0:
                return this.requestToken !== null ? [3, 2] : (v = this, [4, u.platformDeps.getRequestToken()]);
              case 1:
                v.requestToken = h.sent(), h.label = 2;
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
function Jg() {
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
function Qg() {
  if (Ju) return nr;
  Ju = 1;
  var e = nr.__assign || function() {
    return e = Object.assign || function(b) {
      for (var _, S = 1, D = arguments.length; S < D; S++) {
        _ = arguments[S];
        for (var O in _) Object.prototype.hasOwnProperty.call(_, O) && (b[O] = _[O]);
      }
      return b;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(nr, "__esModule", { value: !0 }), nr.KintoneRestAPIClient = void 0;
  var t = rg(), n = ig(), r = lg(), i = ug(), o = cg(), a = fg(), u = hg(), s = Xg(), l = Jg(), f = vo(), p = Es(), v = function(b) {
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
        var S, D, O;
        m(_), this.baseUrl = f.platformDeps.buildBaseUrl(_.baseUrl).replace(/\/+$/, "");
        var C = v((S = _.auth) !== null && S !== void 0 ? S : {}), I = new s.KintoneRequestConfigBuilder(e(e({}, _), { baseUrl: this.baseUrl, auth: C })), M = new l.KintoneResponseHandler({
          enableAbortSearchError: (O = (D = _.featureFlags) === null || D === void 0 ? void 0 : D.enableAbortSearchError) !== null && O !== void 0 ? O : !1
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
function Zg() {
  return Qu || (Qu = 1, function(e) {
    var t = Fn.__createBinding || (Object.create ? function(s, l, f, p) {
      p === void 0 && (p = f);
      var v = Object.getOwnPropertyDescriptor(l, f);
      (!v || ("get" in v ? !l.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
        return l[f];
      } }), Object.defineProperty(s, p, v);
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
          for (var v in f) Object.prototype.hasOwnProperty.call(f, v) && (p[p.length] = v);
          return p;
        }, s(l);
      };
      return function(l) {
        if (l && l.__esModule) return l;
        var f = {};
        if (l != null) for (var p = s(l), v = 0; v < p.length; v++) p[v] !== "default" && t(f, l, p[v]);
        return n(f, l), f;
      };
    }(), i = Fn.__exportStar || function(s, l) {
      for (var f in s) f !== "default" && !Object.prototype.hasOwnProperty.call(l, f) && t(l, s, f);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KintoneRestAPIClient = void 0;
    var o = vo(), a = r(tg());
    (0, o.injectPlatformDeps)(a);
    var u = Qg();
    Object.defineProperty(e, "KintoneRestAPIClient", { enumerable: !0, get: function() {
      return u.KintoneRestAPIClient;
    } }), i(Os(), e);
  }(Fn)), Fn;
}
var ey = Zg();
const ty = {
  key: 0,
  class: "kvc-file-value"
}, ny = { class: "kvc-file-select-list" }, ry = ["src"], iy = { key: 1 }, oy = { class: "kvc-file-select-file-name" }, ay = { class: "kvc-file-select-file-size" }, sy = { class: "kvc-file-select-list-item" }, ly = ["onClick"], uy = { class: "kvc-file-select-file-name" }, cy = { class: "kvc-file-select-file-size" }, fy = ["src"], dy = { class: "kvc-file-select-group" }, py = ["disabled"], hy = ["multiple", "accept"], my = /* @__PURE__ */ Ue({
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
    const n = e, r = t, i = new ey.KintoneRestAPIClient(), o = De(null), a = De(null), u = De(n.modelValue || []), s = De(null), l = De(null), f = De(!1);
    ti(() => n.modelValue, (c) => {
      u.value = c ? Array.from(c) : [];
    }), _r(async () => {
      if (u.value.length)
        for await (const c of u.value)
          c.fileKey && !c.data && (c.data = await i.file.downloadFile({ fileKey: c.fileKey }));
      s.value && Cv(s, u, {
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
      const b = 1024, _ = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], S = Math.floor(Math.log(c) / Math.log(b)), D = (c / Math.pow(b, S)).toFixed(y);
      return `${Number(D).toLocaleString()} ${_[S]}`;
    }, v = (c, y) => {
      if (!c || !y) return;
      const b = new Uint8Array(c), _ = Array.from(b).map((S) => String.fromCharCode(S)).join("");
      return `data:${y};base64,${btoa(_)}`;
    }, h = (c) => {
      u.value.splice(c, 1), r("update:modelValue", u.value), r("change", u.value);
    }, m = async (c) => {
      if (!c) return;
      const y = Array.from(c), b = y.filter((S) => !S.fileKey), _ = n.multiple ? [...u.value, ...y.filter((S) => S.fileKey)] : [];
      for await (const S of b) {
        let D = null;
        n.autoUpload && (D = (await i.file.uploadFile({ file: { name: S.name, data: S } })).fileKey);
        const O = await S.arrayBuffer();
        _.push({
          fileKey: D ?? void 0,
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
      dataTypes: ye(() => {
        var c;
        return ((c = n.accept) == null ? void 0 : c.split(",")) ?? [];
      }),
      // ← 明示的にstring[] or []
      multiple: n.multiple,
      preventDefaultForUnhandled: !1
    });
    return (c, y) => c.readOnly ? (V(), H("div", ty, [
      Z("ul", ny, [
        (V(!0), H(gt, null, _t(u.value, (b, _) => (V(), H("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          b.data && (b.contentType || "").startsWith("image/") ? (V(), H("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: v(b.data, b.contentType)
          }, null, 8, ry)) : (V(), H("span", iy, [
            Z("span", oy, Ge(b.name), 1),
            Z("span", ay, "(" + Ge(p(b.size)) + ")", 1)
          ]))
        ]))), 128))
      ])
    ])) : (V(), H("div", {
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
        (V(!0), H(gt, null, _t(u.value, (b, _) => (V(), H("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          Z("div", sy, [
            c.disabled ? Se("", !0) : (V(), H("button", {
              key: 0,
              type: "button",
              class: "kvc-file-select-delete-button",
              onClick: (S) => h(_)
            }, [
              He(Re(Qe), {
                icon: "mdi:close",
                width: "22"
              })
            ], 8, ly)),
            Z("span", uy, Ge(b.name), 1),
            Z("span", cy, Ge(p(b.size)), 1)
          ]),
          b.data && (b.contentType || "").startsWith("image/") ? (V(), H("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: v(b.data, b.contentType)
          }, null, 8, fy)) : Se("", !0)
        ]))), 128))
      ], 512),
      Z("div", dy, [
        Z("button", {
          type: "button",
          disabled: c.disabled,
          class: "kvc-file-select-button",
          onClick: y[0] || (y[0] = (b) => {
            var _;
            return (_ = o.value) == null ? void 0 : _.click();
          })
        }, " 参照 ", 8, py),
        y[3] || (y[3] = Z("p", { class: "kvc-file-select-text" }, "(最大1 GB)", -1))
      ]),
      !f.value && Re(d) ? (V(), H("div", {
        key: 0,
        class: "kvc-file-select-file-dropzone",
        onClick: y[1] || (y[1] = (b) => d.value = !1)
      }, " ここにファイルをドロップします。 ")) : Se("", !0),
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
      }, null, 40, hy)
    ], 512));
  }
}), vy = { class: "kvc-tab" }, gy = { class: "kvc-tab-header" }, yy = ["onClick"], by = /* @__PURE__ */ Ue({
  __name: "index",
  props: {
    small: { type: Boolean },
    modelValue: {},
    width: {},
    height: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, i = De(e.modelValue), o = (s) => {
      i.value = s, n("update:modelValue", s);
    };
    Ys("activeTab", i), Ys("setActiveTab", o);
    const a = fs(), u = ye(() => {
      const s = [];
      return (a.default ? a.default({}) : []).forEach((f) => {
        const p = f.props;
        p != null && p.label && (p != null && p.name) && s.push({
          label: p.label,
          name: p.name
        });
      }), !i.value && s.length > 0 && (i.value = s[0].name), s;
    });
    return (s, l) => (V(), H("div", vy, [
      Z("div", gy, [
        (V(!0), H(gt, null, _t(u.value, (f) => (V(), H("button", {
          key: f.name,
          type: "button",
          class: Ve(["kvc-tab-item", {
            "is-active": i.value === f.name,
            "kvc-tab-item-small": s.small
          }]),
          onClick: (p) => o(f.name)
        }, [
          Z("span", null, Ge(f.label), 1)
        ], 10, yy))), 128))
      ]),
      Z("div", {
        class: Ve(["kvc-tab-content", {
          "kvc-tab-content-small": s.small
        }]),
        style: lt({
          minWidth: s.width,
          minHeight: s.height
        })
      }, [
        Ct(s.$slots, "default")
      ], 6)
    ]));
  }
}), wy = { key: 0 }, _y = /* @__PURE__ */ Ue({
  __name: "pane",
  props: {
    label: {},
    name: {}
  },
  setup(e) {
    const t = e, n = Wf("activeTab", De("")), r = ye(() => (n == null ? void 0 : n.value) === t.name);
    return (i, o) => r.value ? (V(), H("div", wy, [
      Ct(i.$slots, "default")
    ])) : Se("", !0);
  }
}), Sy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KvcAutocomplete: Lh,
  KvcButton: Gh,
  KvcCheckbox: pm,
  KvcDatePicker: Tc,
  KvcDateTimePicker: Zm,
  KvcDialog: lp,
  KvcDropdown: Ph,
  KvcField: Qh,
  KvcFileSelect: my,
  KvcGroup: nm,
  KvcMultiSelect: Hh,
  KvcRadio: sm,
  KvcRow: td,
  KvcSpinner: rc,
  KvcTab: by,
  KvcTabPane: _y,
  KvcTable: vh,
  KvcTextInput: bs,
  KvcTextarea: tv,
  KvcTimePicker: kc,
  KvcWrap: Jf
}, Symbol.toStringTag, { value: "Module" })), Ry = {
  install(e) {
    Object.entries(Sy).forEach(([t, n]) => {
      const r = n;
      e.component(r.name || t, r);
    });
  }
};
export {
  Lh as KvcAutocomplete,
  Gh as KvcButton,
  pm as KvcCheckbox,
  Tc as KvcDatePicker,
  Zm as KvcDateTimePicker,
  lp as KvcDialog,
  Ph as KvcDropdown,
  Qh as KvcField,
  my as KvcFileSelect,
  nm as KvcGroup,
  Hh as KvcMultiSelect,
  sm as KvcRadio,
  td as KvcRow,
  rc as KvcSpinner,
  by as KvcTab,
  _y as KvcTabPane,
  vh as KvcTable,
  bs as KvcTextInput,
  tv as KvcTextarea,
  kc as KvcTimePicker,
  Jf as KvcWrap,
  ds as Spinner,
  Ry as default,
  Gf as defaultSpinner,
  Dy as hideSpinner,
  Cy as showSpinner,
  Hf as useSpinner
};

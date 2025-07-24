import { defineComponent as ze, openBlock as H, createBlock as Cn, resolveDynamicComponent as Sf, withModifiers as xf, withCtx as Yu, renderSlot as ft, createElementBlock as X, onMounted as br, watch as ao, computed as Te, withDirectives as Rn, createElementVNode as ee, createStaticVNode as Ef, vShow as so, normalizeStyle as Yt, createCommentVNode as $e, h as Ki, resolveComponent as Of, useSlots as ls, normalizeClass as at, Fragment as bt, renderList as Ot, toDisplayString as dt, unref as Le, mergeProps as Ws, createVNode as ct, getCurrentScope as Af, onScopeDispose as Df, nextTick as Xu, getCurrentInstance as Cf, ref as Ne, shallowRef as Rf, toValue as ln, vModelRadio as Pf, vModelCheckbox as Tf, vModelDynamic as kf, reactive as If, vModelText as $f, isRef as Nf, provide as Hs, inject as Mf } from "vue";
const jf = /* @__PURE__ */ ze({
  __name: "wrap",
  props: {
    isForm: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, i) => (H(), Cn(Sf(n.isForm ? "form" : "div"), {
      id: "kvc-wrap",
      class: "kvc-wrap",
      onSubmit: i[0] || (i[0] = xf((o) => r("submit", o), ["prevent"]))
    }, {
      default: Yu(() => [
        ft(n.$slots, "default")
      ]),
      _: 3
    }, 32));
  }
}), us = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Ff = {}, Bf = { class: "kvc-row" };
function qf(e, t) {
  return H(), X("div", Bf, [
    ft(e.$slots, "default")
  ]);
}
const Lf = /* @__PURE__ */ us(Ff, [["render", qf]]), Uf = { class: "kvc-spinner-wrapper" }, Vf = { class: "kvc-spinner" }, Wf = ["innerHTML"], Hf = /* @__PURE__ */ ze({
  __name: "spinner",
  props: {
    modelValue: { type: Boolean, default: !1 },
    text: { default: "読み込み中..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = (o) => {
      const a = document.querySelector("body");
      o ? a && (a.style.overflow = "hidden") : a && (a.style.overflow = "auto");
    };
    br(() => n(r.modelValue)), ao(() => r.modelValue, n);
    const i = Te(() => (r.text || "").replace(`
`, "<br>"));
    return (o, a) => Rn((H(), X("div", Uf, [
      ee("div", Vf, [
        a[0] || (a[0] = Ef('<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" data-v-e1a38298><g data-v-e1a38298><circle cx="12" cy="2.5" r="1.5" fill="#99ccff" opacity="0.14" data-v-e1a38298></circle><circle cx="16.75" cy="3.77" r="1.5" fill="#99ccff" opacity="0.29" data-v-e1a38298></circle><circle cx="20.23" cy="7.25" r="1.5" fill="#99ccff" opacity="0.43" data-v-e1a38298></circle><circle cx="21.5" cy="12" r="1.5" fill="#99ccff" opacity="0.57" data-v-e1a38298></circle><circle cx="20.23" cy="16.75" r="1.5" fill="#99ccff" opacity="0.71" data-v-e1a38298></circle><circle cx="16.75" cy="20.23" r="1.5" fill="#99ccff" opacity="0.86" data-v-e1a38298></circle><circle cx="12" cy="21.5" r="1.5" fill="#99ccff" data-v-e1a38298></circle></g></svg>', 1)),
        ee("span", {
          class: "kvc-spinner-text",
          innerHTML: i.value
        }, null, 8, Wf)
      ])
    ], 512)), [
      [so, o.modelValue]
    ]);
  }
}), Gf = /* @__PURE__ */ us(Hf, [["__scopeId", "data-v-e1a38298"]]), Kf = {
  key: 0,
  class: "kvc-dialog-wrapper"
}, zf = { class: "kvc-dialog-header" }, Yf = { class: "kvc-dialog-content-wrapper" }, Xf = { class: "kvc-dialog-content" }, Jf = { class: "kvc-dialog-footer" }, Qf = /* @__PURE__ */ ze({
  __name: "dialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    width: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = (o) => {
      const a = document.querySelector("body");
      o ? a && (a.style.overflow = "hidden") : a && (a.style.overflow = "auto");
    };
    return br(() => i(n.modelValue)), ao(() => n.modelValue, i), (o, a) => o.modelValue ? (H(), X("div", Kf, [
      ee("div", {
        class: "kvc-dialog",
        style: Yt(o.width ? { width: o.width } : null)
      }, [
        ee("div", zf, [
          ft(o.$slots, "header", {}, void 0, !0),
          ee("button", {
            type: "button",
            class: "kvc-dialog-close",
            onClick: a[0] || (a[0] = (u) => r("update:modelValue", !1))
          }, a[1] || (a[1] = [
            ee("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "18",
              height: "18",
              viewBox: "0 0 24 24"
            }, [
              ee("path", {
                fill: "currentColor",
                d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              })
            ], -1)
          ]))
        ]),
        ee("div", Yf, [
          ft(o.$slots, "body-header", {}, void 0, !0),
          ee("div", Xf, [
            ft(o.$slots, "default", {}, void 0, !0)
          ]),
          ft(o.$slots, "body-footer", {}, void 0, !0)
        ]),
        ee("div", Jf, [
          ft(o.$slots, "footer", {}, void 0, !0)
        ])
      ], 4)
    ])) : $e("", !0);
  }
}), Zf = /* @__PURE__ */ us(Qf, [["__scopeId", "data-v-5f807e54"]]), Ju = /^[a-z0-9]+(-[a-z0-9]+)*$/, lo = (e, t, r, n = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    n = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const u = i.pop(), s = i.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : n,
      prefix: s,
      name: u
    };
    return t && !Di(l) ? null : l;
  }
  const o = i[0], a = o.split("-");
  if (a.length > 1) {
    const u = {
      provider: n,
      prefix: a.shift(),
      name: a.join("-")
    };
    return t && !Di(u) ? null : u;
  }
  if (r && n === "") {
    const u = {
      provider: n,
      prefix: "",
      name: o
    };
    return t && !Di(u, r) ? null : u;
  }
  return null;
}, Di = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Qu = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), zi = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), uo = Object.freeze({
  ...Qu,
  ...zi
}), za = Object.freeze({
  ...uo,
  body: "",
  hidden: !1
});
function ed(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (r.rotate = n), r;
}
function Gs(e, t) {
  const r = ed(e, t);
  for (const n in za)
    n in zi ? n in e && !(n in r) && (r[n] = zi[n]) : n in t ? r[n] = t[n] : n in e && (r[n] = e[n]);
  return r;
}
function td(e, t) {
  const r = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function o(a) {
    if (r[a])
      return i[a] = [];
    if (!(a in i)) {
      i[a] = null;
      const u = n[a] && n[a].parent, s = u && o(u);
      s && (i[a] = [u].concat(s));
    }
    return i[a];
  }
  return Object.keys(r).concat(Object.keys(n)).forEach(o), i;
}
function nd(e, t, r) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function a(u) {
    o = Gs(
      n[u] || i[u],
      o
    );
  }
  return a(t), r.forEach(a), Gs(e, o);
}
function Zu(e, t) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((i) => {
    t(i, null), r.push(i);
  });
  const n = td(e);
  for (const i in n) {
    const o = n[i];
    o && (t(i, nd(e, i, o)), r.push(i));
  }
  return r;
}
const rd = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Qu
};
function Ao(e, t) {
  for (const r in t)
    if (r in e && typeof e[r] != typeof t[r])
      return !1;
  return !0;
}
function ec(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ao(e, rd))
    return null;
  const r = t.icons;
  for (const i in r) {
    const o = r[i];
    if (
      // Name cannot be empty
      !i || // Must have body
      typeof o.body != "string" || // Check other props
      !Ao(
        o,
        za
      )
    )
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in n) {
    const o = n[i], a = o.parent;
    if (
      // Name cannot be empty
      !i || // Parent must be set and point to existing icon
      typeof a != "string" || !r[a] && !n[a] || // Check other props
      !Ao(
        o,
        za
      )
    )
      return null;
  }
  return t;
}
const Ks = /* @__PURE__ */ Object.create(null);
function id(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function gr(e, t) {
  const r = Ks[e] || (Ks[e] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = id(e, t));
}
function tc(e, t) {
  return ec(t) ? Zu(t, (r, n) => {
    n ? e.icons[r] = n : e.missing.add(r);
  }) : [];
}
function od(e, t, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[t] = { ...r }, !0;
  } catch {
  }
  return !1;
}
let Yr = !1;
function nc(e) {
  return typeof e == "boolean" && (Yr = e), Yr;
}
function ad(e) {
  const t = typeof e == "string" ? lo(e, !0, Yr) : e;
  if (t) {
    const r = gr(t.provider, t.prefix), n = t.name;
    return r.icons[n] || (r.missing.has(n) ? null : void 0);
  }
}
function sd(e, t) {
  const r = lo(e, !0, Yr);
  if (!r)
    return !1;
  const n = gr(r.provider, r.prefix);
  return t ? od(n, r.name, t) : (n.missing.add(r.name), !0);
}
function ld(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Yr && !t && !e.prefix) {
    let i = !1;
    return ec(e) && (e.prefix = "", Zu(e, (o, a) => {
      sd(o, a) && (i = !0);
    })), i;
  }
  const r = e.prefix;
  if (!Di({
    provider: t,
    prefix: r,
    name: "a"
  }))
    return !1;
  const n = gr(t, r);
  return !!tc(n, e);
}
const rc = Object.freeze({
  width: null,
  height: null
}), ic = Object.freeze({
  // Dimensions
  ...rc,
  // Transformations
  ...zi
}), ud = /(-?[0-9.]*[0-9]+[0-9.]*)/g, cd = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function zs(e, t, r) {
  if (t === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * t * r) / r;
  if (typeof e != "string")
    return e;
  const n = e.split(ud);
  if (n === null || !n.length)
    return e;
  const i = [];
  let o = n.shift(), a = cd.test(o);
  for (; ; ) {
    if (a) {
      const u = parseFloat(o);
      isNaN(u) ? i.push(o) : i.push(Math.ceil(u * t * r) / r);
    } else
      i.push(o);
    if (o = n.shift(), o === void 0)
      return i.join("");
    a = !a;
  }
}
function fd(e, t = "defs") {
  let r = "";
  const n = e.indexOf("<" + t);
  for (; n >= 0; ) {
    const i = e.indexOf(">", n), o = e.indexOf("</" + t);
    if (i === -1 || o === -1)
      break;
    const a = e.indexOf(">", o);
    if (a === -1)
      break;
    r += e.slice(i + 1, o).trim(), e = e.slice(0, n).trim() + e.slice(a + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function dd(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function pd(e, t, r) {
  const n = fd(e);
  return dd(n.defs, t + n.content + r);
}
const hd = (e) => e === "unset" || e === "undefined" || e === "none";
function md(e, t) {
  const r = {
    ...uo,
    ...e
  }, n = {
    ...ic,
    ...t
  }, i = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, n].forEach((d) => {
    const c = [], v = d.hFlip, b = d.vFlip;
    let _ = d.rotate;
    v ? b ? _ += 2 : (c.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), c.push("scale(-1 1)"), i.top = i.left = 0) : b && (c.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), c.push("scale(1 -1)"), i.top = i.left = 0);
    let E;
    switch (_ < 0 && (_ -= Math.floor(_ / 4) * 4), _ = _ % 4, _) {
      case 1:
        E = i.height / 2 + i.top, c.unshift(
          "rotate(90 " + E.toString() + " " + E.toString() + ")"
        );
        break;
      case 2:
        c.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        E = i.width / 2 + i.left, c.unshift(
          "rotate(-90 " + E.toString() + " " + E.toString() + ")"
        );
        break;
    }
    _ % 2 === 1 && (i.left !== i.top && (E = i.left, i.left = i.top, i.top = E), i.width !== i.height && (E = i.width, i.width = i.height, i.height = E)), c.length && (o = pd(
      o,
      '<g transform="' + c.join(" ") + '">',
      "</g>"
    ));
  });
  const a = n.width, u = n.height, s = i.width, l = i.height;
  let f, p;
  a === null ? (p = u === null ? "1em" : u === "auto" ? l : u, f = zs(p, s / l)) : (f = a === "auto" ? s : a, p = u === null ? zs(f, l / s) : u === "auto" ? l : u);
  const m = {}, h = (d, c) => {
    hd(c) || (m[d] = c.toString());
  };
  h("width", f), h("height", p);
  const g = [i.left, i.top, s, l];
  return m.viewBox = g.join(" "), {
    attributes: m,
    viewBox: g,
    body: o
  };
}
const gd = /\sid="(\S+)"/g, yd = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let vd = 0;
function bd(e, t = yd) {
  const r = [];
  let n;
  for (; n = gd.exec(e); )
    r.push(n[1]);
  if (!r.length)
    return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((o) => {
    const a = typeof t == "function" ? t(o) : t + (vd++).toString(), u = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
      "$1" + a + i + "$3"
    );
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
const Ya = /* @__PURE__ */ Object.create(null);
function wd(e, t) {
  Ya[e] = t;
}
function Xa(e) {
  return Ya[e] || Ya[""];
}
function cs(e) {
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
const fs = /* @__PURE__ */ Object.create(null), Rr = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ci = [];
for (; Rr.length > 0; )
  Rr.length === 1 || Math.random() > 0.5 ? Ci.push(Rr.shift()) : Ci.push(Rr.pop());
fs[""] = cs({
  resources: ["https://api.iconify.design"].concat(Ci)
});
function _d(e, t) {
  const r = cs(t);
  return r === null ? !1 : (fs[e] = r, !0);
}
function ds(e) {
  return fs[e];
}
const Sd = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Ys = Sd();
function xd(e, t) {
  const r = ds(e);
  if (!r)
    return 0;
  let n;
  if (!r.maxURL)
    n = 0;
  else {
    let i = 0;
    r.resources.forEach((a) => {
      i = Math.max(i, a.length);
    });
    const o = t + ".json?icons=";
    n = r.maxURL - i - r.path.length - o.length;
  }
  return n;
}
function Ed(e) {
  return e === 404;
}
const Od = (e, t, r) => {
  const n = [], i = xd(e, t), o = "icons";
  let a = {
    type: o,
    provider: e,
    prefix: t,
    icons: []
  }, u = 0;
  return r.forEach((s, l) => {
    u += s.length + 1, u >= i && l > 0 && (n.push(a), a = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, u = s.length), a.icons.push(s);
  }), n.push(a), n;
};
function Ad(e) {
  if (typeof e == "string") {
    const t = ds(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Dd = (e, t, r) => {
  if (!Ys) {
    r("abort", 424);
    return;
  }
  let n = Ad(t.provider);
  switch (t.type) {
    case "icons": {
      const o = t.prefix, u = t.icons.join(","), s = new URLSearchParams({
        icons: u
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
  Ys(e + n).then((o) => {
    const a = o.status;
    if (a !== 200) {
      setTimeout(() => {
        r(Ed(a) ? "abort" : "next", a);
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
}, Cd = {
  prepare: Od,
  send: Dd
};
function Rd(e) {
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
    const o = i.provider, a = i.prefix, u = i.name, s = r[o] || (r[o] = /* @__PURE__ */ Object.create(null)), l = s[a] || (s[a] = gr(o, a));
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
function oc(e, t) {
  e.forEach((r) => {
    const n = r.loaderCallbacks;
    n && (r.loaderCallbacks = n.filter((i) => i.id !== t));
  });
}
function Pd(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let r = !1;
    const n = e.provider, i = e.prefix;
    t.forEach((o) => {
      const a = o.icons, u = a.pending.length;
      a.pending = a.pending.filter((s) => {
        if (s.prefix !== i)
          return !0;
        const l = s.name;
        if (e.icons[l])
          a.loaded.push({
            provider: n,
            prefix: i,
            name: l
          });
        else if (e.missing.has(l))
          a.missing.push({
            provider: n,
            prefix: i,
            name: l
          });
        else
          return r = !0, !0;
        return !1;
      }), a.pending.length !== u && (r || oc([e], o.id), o.callback(
        a.loaded.slice(0),
        a.missing.slice(0),
        a.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let Td = 0;
function kd(e, t, r) {
  const n = Td++, i = oc.bind(null, r, n);
  if (!t.pending.length)
    return i;
  const o = {
    id: n,
    icons: t,
    callback: e,
    abort: i
  };
  return r.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(o);
  }), i;
}
function Id(e, t = !0, r = !1) {
  const n = [];
  return e.forEach((i) => {
    const o = typeof i == "string" ? lo(i, t, r) : i;
    o && n.push(o);
  }), n;
}
var $d = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Nd(e, t, r, n) {
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
  let s = "pending", l = 0, f, p = null, m = [], h = [];
  typeof n == "function" && h.push(n);
  function g() {
    p && (clearTimeout(p), p = null);
  }
  function d() {
    s === "pending" && (s = "aborted"), g(), m.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), m = [];
  }
  function c(O, D) {
    D && (h = []), typeof O == "function" && h.push(O);
  }
  function v() {
    return {
      startTime: u,
      payload: t,
      status: s,
      queriesSent: l,
      queriesPending: m.length,
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
    m.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), m = [];
  }
  function E(O, D, I) {
    const M = D !== "success";
    switch (m = m.filter((F) => F !== O), s) {
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
      f = I, m.length || (a.length ? C() : b());
      return;
    }
    if (g(), _(), !e.random) {
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
    g();
    const O = a.shift();
    if (O === void 0) {
      if (m.length) {
        p = setTimeout(() => {
          g(), s === "pending" && (_(), b());
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
        E(D, I, M);
      }
    };
    m.push(D), l++, p = setTimeout(C, e.rotate), r(O, t, D.callback);
  }
  return setTimeout(C), v;
}
function ac(e) {
  const t = {
    ...$d,
    ...e
  };
  let r = [];
  function n() {
    r = r.filter((u) => u().status === "pending");
  }
  function i(u, s, l) {
    const f = Nd(
      t,
      u,
      s,
      (p, m) => {
        n(), l && l(p, m);
      }
    );
    return r.push(f), f;
  }
  function o(u) {
    return r.find((s) => u(s)) || null;
  }
  return {
    query: i,
    find: o,
    setIndex: (u) => {
      t.index = u;
    },
    getIndex: () => t.index,
    cleanup: n
  };
}
function Xs() {
}
const Do = /* @__PURE__ */ Object.create(null);
function Md(e) {
  if (!Do[e]) {
    const t = ds(e);
    if (!t)
      return;
    const r = ac(t), n = {
      config: t,
      redundancy: r
    };
    Do[e] = n;
  }
  return Do[e];
}
function jd(e, t, r) {
  let n, i;
  if (typeof e == "string") {
    const o = Xa(e);
    if (!o)
      return r(void 0, 424), Xs;
    i = o.send;
    const a = Md(e);
    a && (n = a.redundancy);
  } else {
    const o = cs(e);
    if (o) {
      n = ac(o);
      const a = e.resources ? e.resources[0] : "", u = Xa(a);
      u && (i = u.send);
    }
  }
  return !n || !i ? (r(void 0, 424), Xs) : n.query(t, i, r)().abort;
}
function Js() {
}
function Fd(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Pd(e);
  }));
}
function Bd(e) {
  const t = [], r = [];
  return e.forEach((n) => {
    (n.match(Ju) ? t : r).push(n);
  }), {
    valid: t,
    invalid: r
  };
}
function Pr(e, t, r) {
  function n() {
    const i = e.pendingIcons;
    t.forEach((o) => {
      i && i.delete(o), e.icons[o] || e.missing.add(o);
    });
  }
  if (r && typeof r == "object")
    try {
      if (!tc(e, r).length) {
        n();
        return;
      }
    } catch (i) {
      console.error(i);
    }
  n(), Fd(e);
}
function Qs(e, t) {
  e instanceof Promise ? e.then((r) => {
    t(r);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function qd(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: r, prefix: n } = e, i = e.iconsToLoad;
    if (delete e.iconsToLoad, !i || !i.length)
      return;
    const o = e.loadIcon;
    if (e.loadIcons && (i.length > 1 || !o)) {
      Qs(
        e.loadIcons(i, n, r),
        (f) => {
          Pr(e, i, f);
        }
      );
      return;
    }
    if (o) {
      i.forEach((f) => {
        const p = o(f, n, r);
        Qs(p, (m) => {
          const h = m ? {
            prefix: n,
            icons: {
              [f]: m
            }
          } : null;
          Pr(e, [f], h);
        });
      });
      return;
    }
    const { valid: a, invalid: u } = Bd(i);
    if (u.length && Pr(e, u, null), !a.length)
      return;
    const s = n.match(Ju) ? Xa(r) : null;
    if (!s) {
      Pr(e, a, null);
      return;
    }
    s.prepare(r, n, a).forEach((f) => {
      jd(r, f, (p) => {
        Pr(e, f.icons, p);
      });
    });
  }));
}
const Ld = (e, t) => {
  const r = Id(e, !0, nc()), n = Rd(r);
  if (!n.pending.length) {
    let s = !0;
    return t && setTimeout(() => {
      s && t(
        n.loaded,
        n.missing,
        n.pending,
        Js
      );
    }), () => {
      s = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let a, u;
  return n.pending.forEach((s) => {
    const { provider: l, prefix: f } = s;
    if (f === u && l === a)
      return;
    a = l, u = f, o.push(gr(l, f));
    const p = i[l] || (i[l] = /* @__PURE__ */ Object.create(null));
    p[f] || (p[f] = []);
  }), n.pending.forEach((s) => {
    const { provider: l, prefix: f, name: p } = s, m = gr(l, f), h = m.pendingIcons || (m.pendingIcons = /* @__PURE__ */ new Set());
    h.has(p) || (h.add(p), i[l][f].push(p));
  }), o.forEach((s) => {
    const l = i[s.provider][s.prefix];
    l.length && qd(s, l);
  }), t ? kd(t, n, o) : Js;
};
function Ud(e, t) {
  const r = {
    ...e
  };
  for (const n in t) {
    const i = t[n], o = typeof i;
    n in rc ? (i === null || i && (o === "string" || o === "number")) && (r[n] = i) : o === typeof r[n] && (r[n] = n === "rotate" ? i % 4 : i);
  }
  return r;
}
const Vd = /[\s,]+/;
function Wd(e, t) {
  t.split(Vd).forEach((r) => {
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
function Hd(e, t = 0) {
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
function Gd(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    r += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function Kd(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function zd(e) {
  return "data:image/svg+xml," + Kd(e);
}
function Yd(e) {
  return 'url("' + zd(e) + '")';
}
const Zs = {
  ...ic,
  inline: !1
}, Xd = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Jd = {
  display: "inline-block"
}, Ja = {
  backgroundColor: "currentColor"
}, sc = {
  backgroundColor: "transparent"
}, el = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, tl = {
  webkitMask: Ja,
  mask: Ja,
  background: sc
};
for (const e in tl) {
  const t = tl[e];
  for (const r in el)
    t[e + r] = el[r];
}
const Ri = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  Ri[e + "-flip"] = t, Ri[e.slice(0, 1) + "-flip"] = t, Ri[e + "Flip"] = t;
});
function nl(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const rl = (e, t) => {
  const r = Ud(Zs, t), n = { ...Xd }, i = t.mode || "svg", o = {}, a = t.style, u = typeof a == "object" && !(a instanceof Array) ? a : {};
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
          r[d] = c === !0 || c === "true" || c === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof c == "string" && Wd(r, c);
          break;
        // Color: override style
        case "color":
          o.color = c;
          break;
        // Rotation as string
        case "rotate":
          typeof c == "string" ? r[d] = Hd(c) : typeof c == "number" && (r[d] = c);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          c !== !0 && c !== "true" && delete n["aria-hidden"];
          break;
        default: {
          const v = Ri[d];
          v ? (c === !0 || c === "true" || c === 1) && (r[v] = !0) : Zs[d] === void 0 && (n[d] = c);
        }
      }
  }
  const s = md(e, r), l = s.attributes;
  if (r.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    n.style = {
      ...o,
      ...u
    }, Object.assign(n, l);
    let d = 0, c = t.id;
    return typeof c == "string" && (c = c.replace(/-/g, "_")), n.innerHTML = bd(s.body, c ? () => c + "ID" + d++ : "iconifyVue"), Ki("svg", n);
  }
  const { body: f, width: p, height: m } = e, h = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), g = Gd(f, {
    ...l,
    width: p + "",
    height: m + ""
  });
  return n.style = {
    ...o,
    "--svg": Yd(g),
    width: nl(l.width),
    height: nl(l.height),
    ...Jd,
    ...h ? Ja : sc,
    ...u
  }, Ki("span", n);
};
nc(!0);
wd("", Cd);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !ld(n)) && console.error(r);
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
          _d(r, i) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
const Qd = {
  ...uo,
  body: ""
}, Et = ze({
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
      if (typeof e != "string" || (n = lo(e, !1, !0)) === null)
        return this.abortLoading(), null;
      let i = ad(n);
      if (!i)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", i !== null && (this._loadingIcon = {
          name: e,
          abort: Ld([n], () => {
            this.counter++;
          })
        })), null;
      if (this.abortLoading(), this._name !== e && (this._name = e, t && t(e)), r) {
        i = Object.assign({}, i);
        const a = r(i.body, n.name, n.prefix, n.provider);
        typeof a == "string" && (i.body = a);
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
      return rl(Qd, e);
    let r = e;
    return t.classes && (r = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), rl({
      ...uo,
      ...t.data
    }, r);
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
function il(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? il(Object(r), !0).forEach(function(n) {
      Zd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : il(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pi = function(t) {
    return typeof t;
  } : Pi = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pi(e);
}
function Zd(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function fn() {
  return fn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fn.apply(this, arguments);
}
function ep(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function tp(e, t) {
  if (e == null) return {};
  var r = ep(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var np = "1.14.0";
function un(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var pn = un(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Qr = un(/Edge/i), ol = un(/firefox/i), Br = un(/safari/i) && !un(/chrome/i) && !un(/android/i), lc = un(/iP(ad|od|hone)/i), rp = un(/chrome/i) && un(/android/i), uc = {
  capture: !1,
  passive: !1
};
function Re(e, t, r) {
  e.addEventListener(t, r, !pn && uc);
}
function De(e, t, r) {
  e.removeEventListener(t, r, !pn && uc);
}
function Yi(e, t) {
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
function ip(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function zt(e, t, r, n) {
  if (e) {
    r = r || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === r && Yi(e, t) : Yi(e, t)) || n && e === r)
        return e;
      if (e === r) break;
    } while (e = ip(e));
  }
  return null;
}
var al = /\s+/g;
function Rt(e, t, r) {
  if (e && t)
    if (e.classList)
      e.classList[r ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ").replace(al, " ").replace(" " + t + " ", " ");
      e.className = (n + (r ? " " + t : "")).replace(al, " ");
    }
}
function le(e, t, r) {
  var n = e && e.style;
  if (n) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (r = e.currentStyle), t === void 0 ? r : r[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = r + (typeof r == "string" ? "" : "px");
  }
}
function hr(e, t) {
  var r = "";
  if (typeof e == "string")
    r = e;
  else
    do {
      var n = le(e, "transform");
      n && n !== "none" && (r = n + " " + r);
    } while (!t && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(r);
}
function cc(e, t, r) {
  if (e) {
    var n = e.getElementsByTagName(t), i = 0, o = n.length;
    if (r)
      for (; i < o; i++)
        r(n[i], i);
    return n;
  }
  return [];
}
function Xt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function rt(e, t, r, n, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, a, u, s, l, f, p;
    if (e !== window && e.parentNode && e !== Xt() ? (o = e.getBoundingClientRect(), a = o.top, u = o.left, s = o.bottom, l = o.right, f = o.height, p = o.width) : (a = 0, u = 0, s = window.innerHeight, l = window.innerWidth, f = window.innerHeight, p = window.innerWidth), (t || r) && e !== window && (i = i || e.parentNode, !pn))
      do
        if (i && i.getBoundingClientRect && (le(i, "transform") !== "none" || r && le(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          a -= m.top + parseInt(le(i, "border-top-width")), u -= m.left + parseInt(le(i, "border-left-width")), s = a + o.height, l = u + o.width;
          break;
        }
      while (i = i.parentNode);
    if (n && e !== window) {
      var h = hr(i || e), g = h && h.a, d = h && h.d;
      h && (a /= d, u /= g, p /= g, f /= d, s = a + f, l = u + p);
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
function sl(e, t, r) {
  for (var n = An(e, !0), i = rt(e)[t]; n; ) {
    var o = rt(n)[r], a = void 0;
    if (a = i >= o, !a) return n;
    if (n === Xt()) break;
    n = An(n, !1);
  }
  return !1;
}
function yr(e, t, r, n) {
  for (var i = 0, o = 0, a = e.children; o < a.length; ) {
    if (a[o].style.display !== "none" && a[o] !== ue.ghost && (n || a[o] !== ue.dragged) && zt(a[o], r.draggable, e, !1)) {
      if (i === t)
        return a[o];
      i++;
    }
    o++;
  }
  return null;
}
function ps(e, t) {
  for (var r = e.lastElementChild; r && (r === ue.ghost || le(r, "display") === "none" || t && !Yi(r, t)); )
    r = r.previousElementSibling;
  return r || null;
}
function $t(e, t) {
  var r = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== ue.clone && (!t || Yi(e, t)) && r++;
  return r;
}
function ll(e) {
  var t = 0, r = 0, n = Xt();
  if (e)
    do {
      var i = hr(e), o = i.a, a = i.d;
      t += e.scrollLeft * o, r += e.scrollTop * a;
    } while (e !== n && (e = e.parentNode));
  return [t, r];
}
function op(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === e[r][n]) return Number(r);
    }
  return -1;
}
function An(e, t) {
  if (!e || !e.getBoundingClientRect) return Xt();
  var r = e, n = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var i = le(r);
      if (r.clientWidth < r.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return Xt();
        if (n || t) return r;
        n = !0;
      }
    }
  while (r = r.parentNode);
  return Xt();
}
function ap(e, t) {
  if (e && t)
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
function Co(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var qr;
function fc(e, t) {
  return function() {
    if (!qr) {
      var r = arguments, n = this;
      r.length === 1 ? e.call(n, r[0]) : e.apply(n, r), qr = setTimeout(function() {
        qr = void 0;
      }, t);
    }
  };
}
function sp() {
  clearTimeout(qr), qr = void 0;
}
function dc(e, t, r) {
  e.scrollLeft += t, e.scrollTop += r;
}
function pc(e) {
  var t = window.Polymer, r = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : r ? r(e).clone(!0)[0] : e.cloneNode(!0);
}
var It = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function lp() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(le(i, "display") === "none" || i === ue.ghost)) {
            e.push({
              target: i,
              rect: rt(i)
            });
            var o = Qt({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = hr(i, !0);
              a && (o.top -= a.f, o.left -= a.e);
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
      e.splice(op(e, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var o = !1, a = 0;
      e.forEach(function(u) {
        var s = 0, l = u.target, f = l.fromRect, p = rt(l), m = l.prevFromRect, h = l.prevToRect, g = u.rect, d = hr(l, !0);
        d && (p.top -= d.f, p.left -= d.e), l.toRect = p, l.thisAnimationDuration && Co(m, p) && !Co(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (g.top - p.top) / (g.left - p.left) === (f.top - p.top) / (f.left - p.left) && (s = cp(g, m, h, i.options)), Co(p, f) || (l.prevFromRect = f, l.prevToRect = p, s || (s = i.options.animation), i.animate(l, g, p, s)), s && (o = !0, a = Math.max(a, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), e = [];
    },
    animate: function(n, i, o, a) {
      if (a) {
        le(n, "transition", ""), le(n, "transform", "");
        var u = hr(this.el), s = u && u.a, l = u && u.d, f = (i.left - o.left) / (s || 1), p = (i.top - o.top) / (l || 1);
        n.animatingX = !!f, n.animatingY = !!p, le(n, "transform", "translate3d(" + f + "px," + p + "px,0)"), this.forRepaintDummy = up(n), le(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), le(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          le(n, "transition", ""), le(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function up(e) {
  return e.offsetWidth;
}
function cp(e, t, r, n) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) * n.animation;
}
var Jn = [], Ro = {
  initializeByDefault: !0
}, Zr = {
  mount: function(t) {
    for (var r in Ro)
      Ro.hasOwnProperty(r) && !(r in t) && (t[r] = Ro[r]);
    Jn.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Jn.push(t);
  },
  pluginEvent: function(t, r, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var o = t + "Global";
    Jn.forEach(function(a) {
      r[a.pluginName] && (r[a.pluginName][o] && r[a.pluginName][o](Qt({
        sortable: r
      }, n)), r.options[a.pluginName] && r[a.pluginName][t] && r[a.pluginName][t](Qt({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(t, r, n, i) {
    Jn.forEach(function(u) {
      var s = u.pluginName;
      if (!(!t.options[s] && !u.initializeByDefault)) {
        var l = new u(t, r, t.options);
        l.sortable = t, l.options = t.options, t[s] = l, fn(n, l.defaults);
      }
    });
    for (var o in t.options)
      if (t.options.hasOwnProperty(o)) {
        var a = this.modifyOption(t, o, t.options[o]);
        typeof a < "u" && (t.options[o] = a);
      }
  },
  getEventProperties: function(t, r) {
    var n = {};
    return Jn.forEach(function(i) {
      typeof i.eventProperties == "function" && fn(n, i.eventProperties.call(r[i.pluginName], t));
    }), n;
  },
  modifyOption: function(t, r, n) {
    var i;
    return Jn.forEach(function(o) {
      t[o.pluginName] && o.optionListeners && typeof o.optionListeners[r] == "function" && (i = o.optionListeners[r].call(t[o.pluginName], n));
    }), i;
  }
};
function fp(e) {
  var t = e.sortable, r = e.rootEl, n = e.name, i = e.targetEl, o = e.cloneEl, a = e.toEl, u = e.fromEl, s = e.oldIndex, l = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, m = e.originalEvent, h = e.putSortable, g = e.extraEventProperties;
  if (t = t || r && r[It], !!t) {
    var d, c = t.options, v = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !pn && !Qr ? d = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(n, !0, !0)), d.to = a || r, d.from = u || r, d.item = i || r, d.clone = o, d.oldIndex = s, d.newIndex = l, d.oldDraggableIndex = f, d.newDraggableIndex = p, d.originalEvent = m, d.pullMode = h ? h.lastPutMode : void 0;
    var b = Qt(Qt({}, g), Zr.getEventProperties(n, t));
    for (var _ in b)
      d[_] = b[_];
    r && r.dispatchEvent(d), c[v] && c[v].call(t, d);
  }
}
var dp = ["evt"], St = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, o = tp(n, dp);
  Zr.pluginEvent.bind(ue)(t, r, Qt({
    dragEl: z,
    parentEl: We,
    ghostEl: ge,
    rootEl: Be,
    nextEl: qn,
    lastDownEl: Ti,
    cloneEl: Ge,
    cloneHidden: En,
    dragStarted: Ir,
    putSortable: lt,
    activeSortable: ue.active,
    originalEvent: i,
    oldIndex: fr,
    oldDraggableIndex: Lr,
    newIndex: Tt,
    newDraggableIndex: Sn,
    hideGhostForTarget: yc,
    unhideGhostForTarget: vc,
    cloneNowHidden: function() {
      En = !0;
    },
    cloneNowShown: function() {
      En = !1;
    },
    dispatchSortableEvent: function(u) {
      yt({
        sortable: r,
        name: u,
        originalEvent: i
      });
    }
  }, o));
};
function yt(e) {
  fp(Qt({
    putSortable: lt,
    cloneEl: Ge,
    targetEl: z,
    rootEl: Be,
    oldIndex: fr,
    oldDraggableIndex: Lr,
    newIndex: Tt,
    newDraggableIndex: Sn
  }, e));
}
var z, We, ge, Be, qn, Ti, Ge, En, fr, Tt, Lr, Sn, bi, lt, ur = !1, Xi = !1, Ji = [], $n, jt, Po, To, ul, cl, Ir, Qn, Ur, Vr = !1, wi = !1, ki, ht, ko = [], Qa = !1, Qi = [], co = typeof document < "u", _i = lc, fl = Qr || pn ? "cssFloat" : "float", pp = co && !rp && !lc && "draggable" in document.createElement("div"), hc = function() {
  if (co) {
    if (pn)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), mc = function(t, r) {
  var n = le(t), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), o = yr(t, 0, r), a = yr(t, 1, r), u = o && le(o), s = a && le(a), l = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + rt(o).width, f = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + rt(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && u.float && u.float !== "none") {
    var p = u.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (u.display === "block" || u.display === "flex" || u.display === "table" || u.display === "grid" || l >= i && n[fl] === "none" || a && n[fl] === "none" && l + f > i) ? "vertical" : "horizontal";
}, hp = function(t, r, n) {
  var i = n ? t.left : t.top, o = n ? t.right : t.bottom, a = n ? t.width : t.height, u = n ? r.left : r.top, s = n ? r.right : r.bottom, l = n ? r.width : r.height;
  return i === u || o === s || i + a / 2 === u + l / 2;
}, mp = function(t, r) {
  var n;
  return Ji.some(function(i) {
    var o = i[It].options.emptyInsertThreshold;
    if (!(!o || ps(i))) {
      var a = rt(i), u = t >= a.left - o && t <= a.right + o, s = r >= a.top - o && r <= a.bottom + o;
      if (u && s)
        return n = i;
    }
  }), n;
}, gc = function(t) {
  function r(o, a) {
    return function(u, s, l, f) {
      var p = u.options.group.name && s.options.group.name && u.options.group.name === s.options.group.name;
      if (o == null && (a || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (a && o === "clone")
        return o;
      if (typeof o == "function")
        return r(o(u, s, l, f), a)(u, s, l, f);
      var m = (a ? u : s).options.group.name;
      return o === !0 || typeof o == "string" && o === m || o.join && o.indexOf(m) > -1;
    };
  }
  var n = {}, i = t.group;
  (!i || Pi(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = r(i.pull, !0), n.checkPut = r(i.put), n.revertClone = i.revertClone, t.group = n;
}, yc = function() {
  !hc && ge && le(ge, "display", "none");
}, vc = function() {
  !hc && ge && le(ge, "display", "");
};
co && document.addEventListener("click", function(e) {
  if (Xi)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Xi = !1, !1;
}, !0);
var Nn = function(t) {
  if (z) {
    t = t.touches ? t.touches[0] : t;
    var r = mp(t.clientX, t.clientY);
    if (r) {
      var n = {};
      for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[It]._onDragOver(n);
    }
  }
}, gp = function(t) {
  z && z.parentNode[It]._isOutsideThisEl(t.target);
};
function ue(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = fn({}, t), e[It] = this;
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
      return mc(e, this.options);
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
    supportPointer: ue.supportPointer !== !1 && "PointerEvent" in window && !Br,
    emptyInsertThreshold: 5
  };
  Zr.initializePlugins(this, e, r);
  for (var n in r)
    !(n in t) && (t[n] = r[n]);
  gc(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : pp, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Re(e, "pointerdown", this._onTapStart) : (Re(e, "mousedown", this._onTapStart), Re(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Re(e, "dragover", this), Re(e, "dragenter", this)), Ji.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), fn(this, lp());
}
ue.prototype = /** @lends Sortable.prototype */
{
  constructor: ue,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Qn = null);
  },
  _getDirection: function(t, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, r, z) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var r = this, n = this.el, i = this.options, o = i.preventOnFilter, a = t.type, u = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (u || t).target, l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, f = i.filter;
      if (Ep(n), !z && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Br && s && s.tagName.toUpperCase() === "SELECT") && (s = zt(s, i.draggable, n, !1), !(s && s.animated) && Ti !== s)) {
        if (fr = $t(s), Lr = $t(s, i.draggable), typeof f == "function") {
          if (f.call(this, t, s, this)) {
            yt({
              sortable: r,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: n,
              fromEl: n
            }), St("filter", r, {
              evt: t
            }), o && t.cancelable && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(p) {
          if (p = zt(l, p.trim(), n, !1), p)
            return yt({
              sortable: r,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: n,
              toEl: n
            }), St("filter", r, {
              evt: t
            }), !0;
        }), f)) {
          o && t.cancelable && t.preventDefault();
          return;
        }
        i.handle && !zt(l, i.handle, n, !1) || this._prepareDragStart(t, u, s);
      }
    }
  },
  _prepareDragStart: function(t, r, n) {
    var i = this, o = i.el, a = i.options, u = o.ownerDocument, s;
    if (n && !z && n.parentNode === o) {
      var l = rt(n);
      if (Be = o, z = n, We = z.parentNode, qn = z.nextSibling, Ti = n, bi = a.group, ue.dragged = z, $n = {
        target: z,
        clientX: (r || t).clientX,
        clientY: (r || t).clientY
      }, ul = $n.clientX - l.left, cl = $n.clientY - l.top, this._lastX = (r || t).clientX, this._lastY = (r || t).clientY, z.style["will-change"] = "all", s = function() {
        if (St("delayEnded", i, {
          evt: t
        }), ue.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !ol && i.nativeDraggable && (z.draggable = !0), i._triggerDragStart(t, r), yt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), Rt(z, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        cc(z, f.trim(), Io);
      }), Re(u, "dragover", Nn), Re(u, "mousemove", Nn), Re(u, "touchmove", Nn), Re(u, "mouseup", i._onDrop), Re(u, "touchend", i._onDrop), Re(u, "touchcancel", i._onDrop), ol && this.nativeDraggable && (this.options.touchStartThreshold = 4, z.draggable = !0), St("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || r) && (!this.nativeDraggable || !(Qr || pn))) {
        if (ue.eventCanceled) {
          this._onDrop();
          return;
        }
        Re(u, "mouseup", i._disableDelayedDrag), Re(u, "touchend", i._disableDelayedDrag), Re(u, "touchcancel", i._disableDelayedDrag), Re(u, "mousemove", i._delayedDragTouchMoveHandler), Re(u, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && Re(u, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var r = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    z && Io(z), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    De(t, "mouseup", this._disableDelayedDrag), De(t, "touchend", this._disableDelayedDrag), De(t, "touchcancel", this._disableDelayedDrag), De(t, "mousemove", this._delayedDragTouchMoveHandler), De(t, "touchmove", this._delayedDragTouchMoveHandler), De(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, r) {
    r = r || t.pointerType == "touch" && t, !this.nativeDraggable || r ? this.options.supportPointer ? Re(document, "pointermove", this._onTouchMove) : r ? Re(document, "touchmove", this._onTouchMove) : Re(document, "mousemove", this._onTouchMove) : (Re(z, "dragend", this), Re(Be, "dragstart", this._onDragStart));
    try {
      document.selection ? Ii(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, r) {
    if (ur = !1, Be && z) {
      St("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && Re(document, "dragover", gp);
      var n = this.options;
      !t && Rt(z, n.dragClass, !1), Rt(z, n.ghostClass, !0), ue.active = this, t && this._appendGhost(), yt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (jt) {
      this._lastX = jt.clientX, this._lastY = jt.clientY, yc();
      for (var t = document.elementFromPoint(jt.clientX, jt.clientY), r = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(jt.clientX, jt.clientY), t !== r); )
        r = t;
      if (z.parentNode[It]._isOutsideThisEl(t), r)
        do {
          if (r[It]) {
            var n = void 0;
            if (n = r[It]._onDragOver({
              clientX: jt.clientX,
              clientY: jt.clientY,
              target: t,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = r;
        } while (r = r.parentNode);
      vc();
    }
  },
  _onTouchMove: function(t) {
    if ($n) {
      var r = this.options, n = r.fallbackTolerance, i = r.fallbackOffset, o = t.touches ? t.touches[0] : t, a = ge && hr(ge, !0), u = ge && a && a.a, s = ge && a && a.d, l = _i && ht && ll(ht), f = (o.clientX - $n.clientX + i.x) / (u || 1) + (l ? l[0] - ko[0] : 0) / (u || 1), p = (o.clientY - $n.clientY + i.y) / (s || 1) + (l ? l[1] - ko[1] : 0) / (s || 1);
      if (!ue.active && !ur) {
        if (n && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (ge) {
        a ? (a.e += f - (Po || 0), a.f += p - (To || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: p
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        le(ge, "webkitTransform", m), le(ge, "mozTransform", m), le(ge, "msTransform", m), le(ge, "transform", m), Po = f, To = p, jt = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ge) {
      var t = this.options.fallbackOnBody ? document.body : Be, r = rt(z, !0, _i, !0, t), n = this.options;
      if (_i) {
        for (ht = t; le(ht, "position") === "static" && le(ht, "transform") === "none" && ht !== document; )
          ht = ht.parentNode;
        ht !== document.body && ht !== document.documentElement ? (ht === document && (ht = Xt()), r.top += ht.scrollTop, r.left += ht.scrollLeft) : ht = Xt(), ko = ll(ht);
      }
      ge = z.cloneNode(!0), Rt(ge, n.ghostClass, !1), Rt(ge, n.fallbackClass, !0), Rt(ge, n.dragClass, !0), le(ge, "transition", ""), le(ge, "transform", ""), le(ge, "box-sizing", "border-box"), le(ge, "margin", 0), le(ge, "top", r.top), le(ge, "left", r.left), le(ge, "width", r.width), le(ge, "height", r.height), le(ge, "opacity", "0.8"), le(ge, "position", _i ? "absolute" : "fixed"), le(ge, "zIndex", "100000"), le(ge, "pointerEvents", "none"), ue.ghost = ge, t.appendChild(ge), le(ge, "transform-origin", ul / parseInt(ge.style.width) * 100 + "% " + cl / parseInt(ge.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, r) {
    var n = this, i = t.dataTransfer, o = n.options;
    if (St("dragStart", this, {
      evt: t
    }), ue.eventCanceled) {
      this._onDrop();
      return;
    }
    St("setupClone", this), ue.eventCanceled || (Ge = pc(z), Ge.draggable = !1, Ge.style["will-change"] = "", this._hideClone(), Rt(Ge, this.options.chosenClass, !1), ue.clone = Ge), n.cloneId = Ii(function() {
      St("clone", n), !ue.eventCanceled && (n.options.removeCloneOnHide || Be.insertBefore(Ge, z), n._hideClone(), yt({
        sortable: n,
        name: "clone"
      }));
    }), !r && Rt(z, o.dragClass, !0), r ? (Xi = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (De(document, "mouseup", n._onDrop), De(document, "touchend", n._onDrop), De(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(n, i, z)), Re(document, "drop", n), le(z, "transform", "translateZ(0)")), ur = !0, n._dragStartId = Ii(n._dragStarted.bind(n, r, t)), Re(document, "selectstart", n), Ir = !0, Br && le(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var r = this.el, n = t.target, i, o, a, u = this.options, s = u.group, l = ue.active, f = bi === s, p = u.sort, m = lt || l, h, g = this, d = !1;
    if (Qa) return;
    function c(j, Z) {
      St(j, g, Qt({
        evt: t,
        isOwner: f,
        axis: h ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: o,
        canSort: p,
        fromSortable: m,
        target: n,
        completed: b,
        onMove: function(de, ve) {
          return Si(Be, r, z, i, de, rt(de), t, ve);
        },
        changed: _
      }, Z));
    }
    function v() {
      c("dragOverAnimationCapture"), g.captureAnimationState(), g !== m && m.captureAnimationState();
    }
    function b(j) {
      return c("dragOverCompleted", {
        insertion: j
      }), j && (f ? l._hideClone() : l._showClone(g), g !== m && (Rt(z, lt ? lt.options.ghostClass : l.options.ghostClass, !1), Rt(z, u.ghostClass, !0)), lt !== g && g !== ue.active ? lt = g : g === ue.active && lt && (lt = null), m === g && (g._ignoreWhileAnimating = n), g.animateAll(function() {
        c("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === z && !z.animated || n === r && !n.animated) && (Qn = null), !u.dragoverBubble && !t.rootEl && n !== document && (z.parentNode[It]._isOutsideThisEl(t.target), !j && Nn(t)), !u.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function _() {
      Tt = $t(z), Sn = $t(z, u.draggable), yt({
        sortable: g,
        name: "change",
        toEl: r,
        newIndex: Tt,
        newDraggableIndex: Sn,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = zt(n, u.draggable, r, !0), c("dragOver"), ue.eventCanceled) return d;
    if (z.contains(t.target) || n.animated && n.animatingX && n.animatingY || g._ignoreWhileAnimating === n)
      return b(!1);
    if (Xi = !1, l && !u.disabled && (f ? p || (a = We !== Be) : lt === this || (this.lastPutMode = bi.checkPull(this, l, z, t)) && s.checkPut(this, l, z, t))) {
      if (h = this._getDirection(t, n) === "vertical", i = rt(z), c("dragOverValid"), ue.eventCanceled) return d;
      if (a)
        return We = Be, v(), this._hideClone(), c("revert"), ue.eventCanceled || (qn ? Be.insertBefore(z, qn) : Be.appendChild(z)), b(!0);
      var E = ps(r, u.draggable);
      if (!E || wp(t, h, this) && !E.animated) {
        if (E === z)
          return b(!1);
        if (E && r === t.target && (n = E), n && (o = rt(n)), Si(Be, r, z, i, n, o, t, !!n) !== !1)
          return v(), r.appendChild(z), We = r, _(), b(!0);
      } else if (E && bp(t, h, this)) {
        var C = yr(r, 0, u, !0);
        if (C === z)
          return b(!1);
        if (n = C, o = rt(n), Si(Be, r, z, i, n, o, t, !1) !== !1)
          return v(), r.insertBefore(z, C), We = r, _(), b(!0);
      } else if (n.parentNode === r) {
        o = rt(n);
        var O = 0, D, I = z.parentNode !== r, M = !hp(z.animated && z.toRect || i, n.animated && n.toRect || o, h), F = h ? "top" : "left", B = sl(n, "top", "top") || sl(z, "top", "top"), W = B ? B.scrollTop : void 0;
        Qn !== n && (D = o[F], Vr = !1, wi = !M && u.invertSwap || I), O = _p(t, n, o, h, M ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, wi, Qn === n);
        var te;
        if (O !== 0) {
          var V = $t(z);
          do
            V -= O, te = We.children[V];
          while (te && (le(te, "display") === "none" || te === ge));
        }
        if (O === 0 || te === n)
          return b(!1);
        Qn = n, Ur = O;
        var q = n.nextElementSibling, L = !1;
        L = O === 1;
        var Y = Si(Be, r, z, i, n, o, t, L);
        if (Y !== !1)
          return (Y === 1 || Y === -1) && (L = Y === 1), Qa = !0, setTimeout(vp, 30), v(), L && !q ? r.appendChild(z) : n.parentNode.insertBefore(z, L ? q : n), B && dc(B, 0, W - B.scrollTop), We = z.parentNode, D !== void 0 && !wi && (ki = Math.abs(D - rt(n)[F])), _(), b(!0);
      }
      if (r.contains(z))
        return b(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    De(document, "mousemove", this._onTouchMove), De(document, "touchmove", this._onTouchMove), De(document, "pointermove", this._onTouchMove), De(document, "dragover", Nn), De(document, "mousemove", Nn), De(document, "touchmove", Nn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    De(t, "mouseup", this._onDrop), De(t, "touchend", this._onDrop), De(t, "pointerup", this._onDrop), De(t, "touchcancel", this._onDrop), De(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var r = this.el, n = this.options;
    if (Tt = $t(z), Sn = $t(z, n.draggable), St("drop", this, {
      evt: t
    }), We = z && z.parentNode, Tt = $t(z), Sn = $t(z, n.draggable), ue.eventCanceled) {
      this._nulling();
      return;
    }
    ur = !1, wi = !1, Vr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Za(this.cloneId), Za(this._dragStartId), this.nativeDraggable && (De(document, "drop", this), De(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Br && le(document.body, "user-select", ""), le(z, "transform", ""), t && (Ir && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), ge && ge.parentNode && ge.parentNode.removeChild(ge), (Be === We || lt && lt.lastPutMode !== "clone") && Ge && Ge.parentNode && Ge.parentNode.removeChild(Ge), z && (this.nativeDraggable && De(z, "dragend", this), Io(z), z.style["will-change"] = "", Ir && !ur && Rt(z, lt ? lt.options.ghostClass : this.options.ghostClass, !1), Rt(z, this.options.chosenClass, !1), yt({
      sortable: this,
      name: "unchoose",
      toEl: We,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Be !== We ? (Tt >= 0 && (yt({
      rootEl: We,
      name: "add",
      toEl: We,
      fromEl: Be,
      originalEvent: t
    }), yt({
      sortable: this,
      name: "remove",
      toEl: We,
      originalEvent: t
    }), yt({
      rootEl: We,
      name: "sort",
      toEl: We,
      fromEl: Be,
      originalEvent: t
    }), yt({
      sortable: this,
      name: "sort",
      toEl: We,
      originalEvent: t
    })), lt && lt.save()) : Tt !== fr && Tt >= 0 && (yt({
      sortable: this,
      name: "update",
      toEl: We,
      originalEvent: t
    }), yt({
      sortable: this,
      name: "sort",
      toEl: We,
      originalEvent: t
    })), ue.active && ((Tt == null || Tt === -1) && (Tt = fr, Sn = Lr), yt({
      sortable: this,
      name: "end",
      toEl: We,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    St("nulling", this), Be = z = We = ge = qn = Ge = Ti = En = $n = jt = Ir = Tt = Sn = fr = Lr = Qn = Ur = lt = bi = ue.dragged = ue.ghost = ue.clone = ue.active = null, Qi.forEach(function(t) {
      t.checked = !0;
    }), Qi.length = Po = To = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        z && (this._onDragOver(t), yp(t));
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
    for (var t = [], r, n = this.el.children, i = 0, o = n.length, a = this.options; i < o; i++)
      r = n[i], zt(r, a.draggable, this.el, !1) && t.push(r.getAttribute(a.dataIdAttr) || xp(r));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, r) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(o, a) {
      var u = i.children[a];
      zt(u, this.options.draggable, i, !1) && (n[o] = u);
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
    return zt(t, r || this.options.draggable, this.el, !1);
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
    var i = Zr.modifyOption(this, t, r);
    typeof i < "u" ? n[t] = i : n[t] = r, t === "group" && gc(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    St("destroy", this);
    var t = this.el;
    t[It] = null, De(t, "mousedown", this._onTapStart), De(t, "touchstart", this._onTapStart), De(t, "pointerdown", this._onTapStart), this.nativeDraggable && (De(t, "dragover", this), De(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ji.splice(Ji.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!En) {
      if (St("hideClone", this), ue.eventCanceled) return;
      le(Ge, "display", "none"), this.options.removeCloneOnHide && Ge.parentNode && Ge.parentNode.removeChild(Ge), En = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (En) {
      if (St("showClone", this), ue.eventCanceled) return;
      z.parentNode == Be && !this.options.group.revertClone ? Be.insertBefore(Ge, z) : qn ? Be.insertBefore(Ge, qn) : Be.appendChild(Ge), this.options.group.revertClone && this.animate(z, Ge), le(Ge, "display", ""), En = !1;
    }
  }
};
function yp(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Si(e, t, r, n, i, o, a, u) {
  var s, l = e[It], f = l.options.onMove, p;
  return window.CustomEvent && !pn && !Qr ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = r, s.draggedRect = n, s.related = i || t, s.relatedRect = o || rt(t), s.willInsertAfter = u, s.originalEvent = a, e.dispatchEvent(s), f && (p = f.call(l, s, a)), p;
}
function Io(e) {
  e.draggable = !1;
}
function vp() {
  Qa = !1;
}
function bp(e, t, r) {
  var n = rt(yr(r.el, 0, r.options, !0)), i = 10;
  return t ? e.clientX < n.left - i || e.clientY < n.top && e.clientX < n.right : e.clientY < n.top - i || e.clientY < n.bottom && e.clientX < n.left;
}
function wp(e, t, r) {
  var n = rt(ps(r.el, r.options.draggable)), i = 10;
  return t ? e.clientX > n.right + i || e.clientX <= n.right && e.clientY > n.bottom && e.clientX >= n.left : e.clientX > n.right && e.clientY > n.top || e.clientX <= n.right && e.clientY > n.bottom + i;
}
function _p(e, t, r, n, i, o, a, u) {
  var s = n ? e.clientY : e.clientX, l = n ? r.height : r.width, f = n ? r.top : r.left, p = n ? r.bottom : r.right, m = !1;
  if (!a) {
    if (u && ki < l * i) {
      if (!Vr && (Ur === 1 ? s > f + l * o / 2 : s < p - l * o / 2) && (Vr = !0), Vr)
        m = !0;
      else if (Ur === 1 ? s < f + ki : s > p - ki)
        return -Ur;
    } else if (s > f + l * (1 - i) / 2 && s < p - l * (1 - i) / 2)
      return Sp(t);
  }
  return m = m || a, m && (s < f + l * o / 2 || s > p - l * o / 2) ? s > f + l / 2 ? 1 : -1 : 0;
}
function Sp(e) {
  return $t(z) < $t(e) ? 1 : -1;
}
function xp(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, r = t.length, n = 0; r--; )
    n += t.charCodeAt(r);
  return n.toString(36);
}
function Ep(e) {
  Qi.length = 0;
  for (var t = e.getElementsByTagName("input"), r = t.length; r--; ) {
    var n = t[r];
    n.checked && Qi.push(n);
  }
}
function Ii(e) {
  return setTimeout(e, 0);
}
function Za(e) {
  return clearTimeout(e);
}
co && Re(document, "touchmove", function(e) {
  (ue.active || ur) && e.cancelable && e.preventDefault();
});
ue.utils = {
  on: Re,
  off: De,
  css: le,
  find: cc,
  is: function(t, r) {
    return !!zt(t, r, t, !1);
  },
  extend: ap,
  throttle: fc,
  closest: zt,
  toggleClass: Rt,
  clone: pc,
  index: $t,
  nextTick: Ii,
  cancelNextTick: Za,
  detectDirection: mc,
  getChild: yr
};
ue.get = function(e) {
  return e[It];
};
ue.mount = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (ue.utils = Qt(Qt({}, ue.utils), n.utils)), Zr.mount(n);
  });
};
ue.create = function(e, t) {
  return new ue(e, t);
};
ue.version = np;
var Qe = [], $r, es, ts = !1, $o, No, Zi, Nr;
function Op() {
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
      this.sortable.nativeDraggable ? Re(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Re(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? Re(document, "touchmove", this._handleFallbackAutoScroll) : Re(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var n = r.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? De(document, "dragover", this._handleAutoScroll) : (De(document, "pointermove", this._handleFallbackAutoScroll), De(document, "touchmove", this._handleFallbackAutoScroll), De(document, "mousemove", this._handleFallbackAutoScroll)), dl(), $i(), sp();
    },
    nulling: function() {
      Zi = es = $r = ts = Nr = $o = No = null, Qe.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var i = this, o = (r.touches ? r.touches[0] : r).clientX, a = (r.touches ? r.touches[0] : r).clientY, u = document.elementFromPoint(o, a);
      if (Zi = r, n || this.options.forceAutoScrollFallback || Qr || pn || Br) {
        Mo(r, this.options, u, n);
        var s = An(u, !0);
        ts && (!Nr || o !== $o || a !== No) && (Nr && dl(), Nr = setInterval(function() {
          var l = An(document.elementFromPoint(o, a), !0);
          l !== s && (s = l, $i()), Mo(r, i.options, l, n);
        }, 10), $o = o, No = a);
      } else {
        if (!this.options.bubbleScroll || An(u, !0) === Xt()) {
          $i();
          return;
        }
        Mo(r, this.options, An(u, !1), !1);
      }
    }
  }, fn(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function $i() {
  Qe.forEach(function(e) {
    clearInterval(e.pid);
  }), Qe = [];
}
function dl() {
  clearInterval(Nr);
}
var Mo = fc(function(e, t, r, n) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, u = t.scrollSpeed, s = Xt(), l = !1, f;
    es !== r && (es = r, $i(), $r = t.scroll, f = t.scrollFn, $r === !0 && ($r = An(r, !0)));
    var p = 0, m = $r;
    do {
      var h = m, g = rt(h), d = g.top, c = g.bottom, v = g.left, b = g.right, _ = g.width, E = g.height, C = void 0, O = void 0, D = h.scrollWidth, I = h.scrollHeight, M = le(h), F = h.scrollLeft, B = h.scrollTop;
      h === s ? (C = _ < D && (M.overflowX === "auto" || M.overflowX === "scroll" || M.overflowX === "visible"), O = E < I && (M.overflowY === "auto" || M.overflowY === "scroll" || M.overflowY === "visible")) : (C = _ < D && (M.overflowX === "auto" || M.overflowX === "scroll"), O = E < I && (M.overflowY === "auto" || M.overflowY === "scroll"));
      var W = C && (Math.abs(b - i) <= a && F + _ < D) - (Math.abs(v - i) <= a && !!F), te = O && (Math.abs(c - o) <= a && B + E < I) - (Math.abs(d - o) <= a && !!B);
      if (!Qe[p])
        for (var V = 0; V <= p; V++)
          Qe[V] || (Qe[V] = {});
      (Qe[p].vx != W || Qe[p].vy != te || Qe[p].el !== h) && (Qe[p].el = h, Qe[p].vx = W, Qe[p].vy = te, clearInterval(Qe[p].pid), (W != 0 || te != 0) && (l = !0, Qe[p].pid = setInterval((function() {
        n && this.layer === 0 && ue.active._onTouchMove(Zi);
        var q = Qe[this.layer].vy ? Qe[this.layer].vy * u : 0, L = Qe[this.layer].vx ? Qe[this.layer].vx * u : 0;
        typeof f == "function" && f.call(ue.dragged.parentNode[It], L, q, e, Zi, Qe[this.layer].el) !== "continue" || dc(Qe[this.layer].el, L, q);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && m !== s && (m = An(m, !1)));
    ts = l;
  }
}, 30), bc = function(t) {
  var r = t.originalEvent, n = t.putSortable, i = t.dragEl, o = t.activeSortable, a = t.dispatchSortableEvent, u = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (r) {
    var l = n || o;
    u();
    var f = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, p = document.elementFromPoint(f.clientX, f.clientY);
    s(), l && !l.el.contains(p) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function hs() {
}
hs.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var r = t.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = yr(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(r, i) : this.sortable.el.appendChild(r), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: bc
};
fn(hs, {
  pluginName: "revertOnSpill"
});
function ms() {
}
ms.prototype = {
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable, i = n || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: bc
};
fn(ms, {
  pluginName: "removeOnSpill"
});
ue.mount(new Op());
ue.mount(ms, hs);
function Ap() {
  return typeof window < "u" ? window.console : global.console;
}
const Dp = Ap();
function Cp(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] || (t[n] = e(n));
  };
}
const Rp = /-(\w)/g, pl = Cp((e) => e.replace(Rp, (t, r) => r ? r.toUpperCase() : ""));
function jo(e) {
  e.parentElement !== null && e.parentElement.removeChild(e);
}
function hl(e, t, r) {
  const n = r === 0 ? e.children[0] : e.children[r - 1].nextSibling;
  e.insertBefore(t, n);
}
function Pp(e, t) {
  return Object.values(e).indexOf(t);
}
function Tp(e, t, r, n) {
  if (!e)
    return [];
  const i = Object.values(e), o = t.length - n;
  return [...t].map((u, s) => s >= o ? i.length : i.indexOf(u));
}
function wc(e, t) {
  this.$nextTick(() => this.$emit(e.toLowerCase(), t));
}
function kp(e) {
  return (t) => {
    this.realList !== null && this["onDrag" + e](t), wc.call(this, e, t);
  };
}
function Ip(e) {
  return ["transition-group", "TransitionGroup"].includes(e);
}
function $p(e) {
  if (!e || e.length !== 1)
    return !1;
  const [{ type: t }] = e;
  return t ? Ip(t.name) : !1;
}
function Np(e, t) {
  return t ? { ...t.props, ...t.attrs } : e;
}
const ns = ["Start", "Add", "Remove", "Update", "End"], rs = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Mp = ["Move", ...ns, ...rs].map((e) => "on" + e);
let Fo = null;
const jp = {
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
}, Fp = ze({
  name: "VueDraggableNext",
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "move",
    "change",
    ...ns.map((e) => e.toLowerCase()),
    ...rs.map((e) => e.toLowerCase())
  ],
  props: jp,
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
    const e = this.$slots.default ? this.$slots.default() : null, t = Np(this.$attrs, this.componentData);
    return e ? (this.transitionMode = $p(e), Ki(this.getTag(), t, e)) : Ki(this.getTag(), t, []);
  },
  created() {
    this.list !== null && this.modelValue !== null && Dp.error("list props are mutually exclusive! Please set one.");
  },
  mounted() {
    const e = {};
    ns.forEach((i) => {
      e["on" + i] = kp.call(this, i);
    }), rs.forEach((i) => {
      e["on" + i] = wc.bind(this, i);
    });
    const t = Object.keys(this.$attrs).reduce((i, o) => (i[pl(o)] = this.$attrs[o], i), {}), r = Object.assign({}, t, e, {
      onMove: (i, o) => this.onDragMove(i, o)
    });
    !("draggable" in r) && (r.draggable = ">*");
    const n = this.$el.nodeType === 1 ? this.$el : this.$el.parentElement;
    this._sortable = new ue(n, r), n.__draggable_component__ = this, this.computeIndexes();
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
      return this.component ? Of(this.component) : this.tag;
    },
    updateOptions(e) {
      for (var t in e) {
        const r = pl(t);
        Mp.indexOf(r) === -1 && this._sortable.option(r, e[t]);
      }
    },
    getChildrenNodes() {
      return this.$el.children;
    },
    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = Tp(this.getChildrenNodes(), this.$el.children, this.transitionMode, this.footerOffset);
      });
    },
    getUnderlyingVm(e) {
      const t = Pp(this.getChildrenNodes() || [], e);
      if (t === -1)
        return null;
      const r = this.realList[t];
      return { index: t, element: r };
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
      const r = (n) => n.splice(t, 0, n.splice(e, 1)[0]);
      this.alterList(r);
    },
    getVmIndex(e) {
      const t = this.visibleIndexes, r = t.length;
      return e > r - 1 ? r : t[e];
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
      const r = this.getComponent();
      r.children = [], r.kept = void 0;
    },
    onDragStart(e) {
      this.computeIndexes(), this.context = this.getUnderlyingVm(e.item), this.context && (e.item._underlying_vm_ = this.clone(this.context.element), Fo = e.item);
    },
    onDragAdd(e) {
      const t = e.item._underlying_vm_;
      if (t === void 0)
        return;
      jo(e.item);
      const r = this.getVmIndex(e.newIndex);
      this.spliceList(r, 0, t), this.computeIndexes();
      const n = { element: t, newIndex: r };
      this.emitChanges({ added: n });
    },
    onDragRemove(e) {
      if (hl(this.$el, e.item, e.oldIndex), e.pullMode === "clone") {
        jo(e.clone);
        return;
      }
      if (!this.context)
        return;
      const t = this.context.index;
      this.spliceList(t, 1);
      const r = { element: this.context.element, oldIndex: t };
      this.resetTransitionData(t), this.emitChanges({ removed: r });
    },
    onDragUpdate(e) {
      jo(e.item), hl(e.from, e.item, e.oldIndex);
      const t = this.context.index, r = this.getVmIndex(e.newIndex);
      this.updatePosition(t, r);
      const n = { element: this.context.element, oldIndex: t, newIndex: r };
      this.emitChanges({ moved: n });
    },
    updateProperty(e, t) {
      e.hasOwnProperty(t) && (e[t] += this.headerOffset);
    },
    onDragMove(e, t) {
      const r = this.move;
      if (!r || !this.realList)
        return !0;
      const n = this.getRelatedContextFromMoveEvent(e), i = this.context, o = this.computeFutureIndex(n, e);
      Object.assign(i, { futureIndex: o });
      const a = Object.assign({}, e, {
        relatedContext: n,
        draggedContext: i
      });
      return r(a, t);
    },
    onDragEnd() {
      this.computeIndexes(), Fo = null;
    },
    getTrargetedComponent(e) {
      return e.__draggable_component__;
    },
    getRelatedContextFromMoveEvent({ to: e, related: t }) {
      const r = this.getTrargetedComponent(e);
      if (!r)
        return { component: r };
      const n = r.realList, i = { list: n, component: r };
      if (e !== t && n && r.getUnderlyingVm) {
        const o = r.getUnderlyingVm(t);
        if (o)
          return Object.assign(o, i);
      }
      return i;
    },
    computeFutureIndex(e, t) {
      const r = [...t.to.children].filter((a) => a.style.display !== "none");
      if (r.length === 0)
        return 0;
      const n = r.indexOf(t.related), i = e.component.getVmIndex(n);
      return r.indexOf(Fo) !== -1 || !t.willInsertAfter ? i : i + 1;
    }
  }
}), Bp = {
  key: 0,
  class: "kvc-table-operation"
}, qp = { key: 1 }, Lp = { class: "kvc-table-header-label" }, Up = {
  key: 2,
  class: "kvc-table-operation"
}, Vp = {
  key: 0,
  class: "kvc-table-operation"
}, Wp = {
  class: "kvc-table-drag-handle",
  style: { cursor: "move" }
}, Hp = { key: 1 }, Gp = ["href"], Kp = ["data-code"], zp = {
  key: 2,
  class: "kvc-table-operation"
}, Yp = { class: "kvc-table-operation-buttons" }, Xp = ["disabled", "onClick"], Jp = ["onClick"], Qp = { key: 1 }, Zp = { key: 0 }, eh = ["href"], th = ["data-code"], nh = {
  key: 1,
  class: "kvc-table-operation"
}, rh = { class: "kvc-table-operation-buttons" }, ih = ["disabled", "onClick"], oh = ["onClick"], ah = /* @__PURE__ */ ze({
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
    const r = ls(), n = e, i = t, o = Te(() => n.readOnly || n.hideOperations), a = () => {
      const h = {};
      for (const g in r)
        typeof r[g] == "function" && typeof g == "string" && !g.startsWith("column-") && (h[g] = "");
      return h;
    };
    br(() => {
      if (n.modelValue.length === 0 && n.minRows > 0) {
        const h = Array(n.minRows).fill(null).map(() => a());
        i("update:modelValue", h);
      }
    });
    const u = (h) => (n.rowData || []).reduce((g, d) => {
      var c;
      return g[`data-${d.key}`] = ((c = h[d.code]) == null ? void 0 : c.value) || null, g;
    }, {}), s = (h) => {
      const g = [...n.modelValue];
      if (h >= 0) {
        if (n.maxRows && g.length >= n.maxRows)
          return;
        g.splice(h + 1, 0, a()), i("update:modelValue", g), i("add", g, h);
      }
    }, l = (h) => {
      const g = [...n.modelValue];
      if (h >= 0) {
        if (g.length <= n.minRows)
          return;
        g.splice(h, 1), i("update:modelValue", g), i("delete", g);
      }
    }, f = Te(() => !n.maxRows || n.modelValue.length < n.maxRows), p = Te(() => n.modelValue.length > n.minRows), m = Te({
      get: () => n.modelValue,
      set: (h) => {
        i("update:modelValue", h);
      }
    });
    return (h, g) => (H(), X("table", {
      class: at(["kvc-table", { "kvc-table-readonly": h.readOnly }])
    }, [
      ee("thead", null, [
        ee("tr", null, [
          h.draggable && !o.value ? (H(), X("th", Bp)) : $e("", !0),
          h.recordUrl ? (H(), X("th", qp)) : $e("", !0),
          (H(!0), X(bt, null, Ot(h.columns, (d, c) => (H(), X("th", {
            key: c,
            style: Yt(d != null && d.width ? { width: d == null ? void 0 : d.width } : void 0)
          }, [
            ft(h.$slots, `column-${(d == null ? void 0 : d.code) || d}`, {}, () => [
              ee("span", Lp, dt((d == null ? void 0 : d.label) ?? d), 1)
            ])
          ], 4))), 128)),
          o.value ? $e("", !0) : (H(), X("th", Up))
        ])
      ]),
      h.draggable ? (H(), Cn(Le(Fp), {
        key: 0,
        modelValue: m.value,
        "onUpdate:modelValue": g[0] || (g[0] = (d) => m.value = d),
        tag: "tbody",
        handle: ".kvc-table-drag-handle",
        disabled: h.readOnly,
        animation: h.animation
      }, {
        default: Yu(() => [
          (H(!0), X(bt, null, Ot(m.value, (d, c) => (H(), X("tr", Ws({
            key: "row-" + c,
            ref_for: !0
          }, u(d)), [
            h.draggable && !o.value ? (H(), X("td", Vp, [
              ee("div", Wp, [
                ct(Le(Et), {
                  icon: "mdi:drag",
                  width: "14"
                })
              ])
            ])) : $e("", !0),
            h.recordUrl ? (H(), X("td", Hp, [
              d.$id ? (H(), X("a", {
                key: 0,
                href: h.recordUrl + d.$id.value,
                class: "kvc-link",
                target: "_blank",
                rel: "noopener noreferrer",
                style: Yt(h.readOnly ? null : { display: "inline-block", margin: "10px 0" })
              }, [
                ct(Le(Et), {
                  icon: "tdesign:file-filled",
                  width: "16"
                })
              ], 12, Gp)) : $e("", !0)
            ])) : $e("", !0),
            (H(!0), X(bt, null, Ot(h.columns, (v, b) => (H(), X("td", {
              key: "col-" + b,
              "data-code": (v == null ? void 0 : v.code) || v,
              style: Yt(v != null && v.width ? { width: v == null ? void 0 : v.width } : void 0)
            }, [
              ft(h.$slots, (v == null ? void 0 : v.code) || v, {
                index: c,
                row: d,
                width: v == null ? void 0 : v.width,
                column: (v == null ? void 0 : v.code) || v,
                value: d[(v == null ? void 0 : v.code) || v]
              })
            ], 12, Kp))), 128)),
            o.value ? $e("", !0) : (H(), X("td", zp, [
              ee("div", Yp, [
                ee("button", {
                  type: "button",
                  class: "kvc-table-btn-plus",
                  disabled: !f.value,
                  onClick: (v) => s(c)
                }, [
                  ct(Le(Et), {
                    icon: "mdi:plus",
                    width: "14"
                  })
                ], 8, Xp),
                p.value ? (H(), X("button", {
                  key: 0,
                  type: "button",
                  class: "kvc-table-btn-minus",
                  onClick: (v) => l(c)
                }, [
                  ct(Le(Et), {
                    icon: "mdi:minus",
                    width: "14"
                  })
                ], 8, Jp)) : $e("", !0)
              ])
            ]))
          ], 16))), 128))
        ]),
        _: 3
      }, 8, ["modelValue", "disabled", "animation"])) : (H(), X("tbody", Qp, [
        (H(!0), X(bt, null, Ot(h.modelValue, (d, c) => (H(), X("tr", Ws({
          key: "row-" + c,
          ref_for: !0
        }, u(d)), [
          h.recordUrl ? (H(), X("td", Zp, [
            d.$id ? (H(), X("a", {
              key: 0,
              href: h.recordUrl + d.$id.value,
              class: "kvc-link",
              target: "_blank",
              rel: "noopener noreferrer",
              style: Yt(h.readOnly ? null : { display: "inline-block", margin: "10px 0" })
            }, [
              ct(Le(Et), {
                icon: "tdesign:file-filled",
                width: "16"
              })
            ], 12, eh)) : $e("", !0)
          ])) : $e("", !0),
          (H(!0), X(bt, null, Ot(h.columns, (v, b) => (H(), X("td", {
            key: "col-" + b,
            "data-code": (v == null ? void 0 : v.code) || v,
            style: Yt(v != null && v.width ? { width: v == null ? void 0 : v.width } : void 0)
          }, [
            ft(h.$slots, (v == null ? void 0 : v.code) || v, {
              index: c,
              row: d,
              width: v == null ? void 0 : v.width,
              column: (v == null ? void 0 : v.code) || v,
              value: d[(v == null ? void 0 : v.code) || v]
            })
          ], 12, th))), 128)),
          o.value ? $e("", !0) : (H(), X("td", nh, [
            ee("div", rh, [
              ee("button", {
                type: "button",
                class: "kvc-table-btn-plus",
                disabled: !f.value,
                onClick: (v) => s(c)
              }, [
                ct(Le(Et), {
                  icon: "mdi:plus",
                  width: "14"
                })
              ], 8, ih),
              p.value ? (H(), X("button", {
                key: 0,
                type: "button",
                class: "kvc-table-btn-minus",
                onClick: (v) => l(c)
              }, [
                ct(Le(Et), {
                  icon: "mdi:minus",
                  width: "14"
                })
              ], 8, oh)) : $e("", !0)
            ])
          ]))
        ], 16))), 128))
      ]))
    ], 2));
  }
});
function _c(e) {
  return Af() ? (Df(e), !0) : !1;
}
const fo = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sh = Object.prototype.toString, lh = (e) => sh.call(e) === "[object Object]", Bo = () => {
}, uh = /* @__PURE__ */ ch();
function ch() {
  var e, t;
  return fo && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function fh(e) {
  return Cf();
}
function qo(e) {
  return Array.isArray(e) ? e : [e];
}
function dh(e, t = !0, r) {
  fh() ? br(e, r) : t ? e() : Xu(e);
}
function ph(e, t, r) {
  return ao(
    e,
    t,
    {
      ...r,
      immediate: !0
    }
  );
}
const Sc = fo ? window : void 0, hh = fo ? window.document : void 0;
function dr(e) {
  var t;
  const r = ln(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function sn(...e) {
  const t = [], r = () => {
    t.forEach((u) => u()), t.length = 0;
  }, n = (u, s, l, f) => (u.addEventListener(s, l, f), () => u.removeEventListener(s, l, f)), i = Te(() => {
    const u = qo(ln(e[0])).filter((s) => s != null);
    return u.every((s) => typeof s != "string") ? u : void 0;
  }), o = ph(
    () => {
      var u, s;
      return [
        (s = (u = i.value) == null ? void 0 : u.map((l) => dr(l))) != null ? s : [Sc].filter((l) => l != null),
        qo(ln(i.value ? e[1] : e[0])),
        qo(Le(i.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        ln(i.value ? e[3] : e[2])
      ];
    },
    ([u, s, l, f]) => {
      if (r(), !(u != null && u.length) || !(s != null && s.length) || !(l != null && l.length))
        return;
      const p = lh(f) ? { ...f } : f;
      t.push(
        ...u.flatMap(
          (m) => s.flatMap(
            (h) => l.map((g) => n(m, h, g, p))
          )
        )
      );
    },
    { flush: "post" }
  ), a = () => {
    o(), r();
  };
  return _c(r), a;
}
let ml = !1;
function Xr(e, t, r = {}) {
  const { window: n = Sc, ignore: i = [], capture: o = !0, detectIframe: a = !1 } = r;
  if (!n)
    return Bo;
  if (uh && !ml) {
    ml = !0;
    const d = { passive: !0 };
    Array.from(n.document.body.children).forEach((c) => sn(c, "click", Bo, d)), sn(n.document.documentElement, "click", Bo, d);
  }
  let u = !0;
  const s = (d) => ln(i).some((c) => {
    if (typeof c == "string")
      return Array.from(n.document.querySelectorAll(c)).some((v) => v === d.target || d.composedPath().includes(v));
    {
      const v = dr(c);
      return v && (d.target === v || d.composedPath().includes(v));
    }
  });
  function l(d) {
    const c = ln(d);
    return c && c.$.subTree.shapeFlag === 16;
  }
  function f(d, c) {
    const v = ln(d), b = v.$.subTree && v.$.subTree.children;
    return b == null || !Array.isArray(b) ? !1 : b.some((_) => _.el === c.target || c.composedPath().includes(_.el));
  }
  const p = (d) => {
    const c = dr(e);
    if (d.target != null && !(!(c instanceof Element) && l(e) && f(e, d)) && !(!c || c === d.target || d.composedPath().includes(c))) {
      if (d.detail === 0 && (u = !s(d)), !u) {
        u = !0;
        return;
      }
      t(d);
    }
  };
  let m = !1;
  const h = [
    sn(n, "click", (d) => {
      m || (m = !0, setTimeout(() => {
        m = !1;
      }, 0), p(d));
    }, { passive: !0, capture: o }),
    sn(n, "pointerdown", (d) => {
      const c = dr(e);
      u = !s(d) && !!(c && !d.composedPath().includes(c));
    }, { passive: !0 }),
    a && sn(n, "blur", (d) => {
      setTimeout(() => {
        var c;
        const v = dr(e);
        ((c = n.document.activeElement) == null ? void 0 : c.tagName) === "IFRAME" && !(v != null && v.contains(n.document.activeElement)) && t(d);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean);
  return () => h.forEach((d) => d());
}
function mh(e, t = {}) {
  var r, n;
  const i = Ne(!1), o = Rf(null);
  let a = 0, u = !0;
  if (fo) {
    const s = typeof t == "function" ? { onDrop: t } : t, l = (r = s.multiple) != null ? r : !0, f = (n = s.preventDefaultForUnhandled) != null ? n : !1, p = (c) => {
      var v, b;
      const _ = Array.from((b = (v = c.dataTransfer) == null ? void 0 : v.files) != null ? b : []);
      return _.length === 0 ? null : l ? _ : [_[0]];
    }, m = (c) => {
      const v = Le(s.dataTypes);
      return typeof v == "function" ? v(c) : v != null && v.length ? c.length === 0 ? !1 : c.every(
        (b) => v.some((_) => b.includes(_))
      ) : !0;
    }, h = (c) => {
      const v = Array.from(c ?? []).map((E) => E.type), b = m(v), _ = l || c.length <= 1;
      return b && _;
    }, g = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !("chrome" in window), d = (c, v) => {
      var b, _, E, C, O, D;
      const I = (b = c.dataTransfer) == null ? void 0 : b.items;
      if (u = (_ = I && h(I)) != null ? _ : !1, f && c.preventDefault(), !g() && !u) {
        c.dataTransfer && (c.dataTransfer.dropEffect = "none");
        return;
      }
      c.preventDefault(), c.dataTransfer && (c.dataTransfer.dropEffect = "copy");
      const M = p(c);
      switch (v) {
        case "enter":
          a += 1, i.value = !0, (E = s.onEnter) == null || E.call(s, null, c);
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
    sn(e, "dragenter", (c) => d(c, "enter")), sn(e, "dragover", (c) => d(c, "over")), sn(e, "dragleave", (c) => d(c, "leave")), sn(e, "drop", (c) => d(c, "drop"));
  }
  return {
    files: o,
    isOverDropZone: i
  };
}
const gh = ["onClick", "onMouseover"], yh = { class: "kvc-select-list-item-icon-space" }, vh = { class: "kvc-select-list-item-text" }, eo = /* @__PURE__ */ ze({
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
    const r = e, n = t, i = Ne(null), o = /* @__PURE__ */ new Map(), a = Ne(null), u = Te(
      () => typeof r.height == "string" ? r.height : `${r.height}px`
    ), s = Te(
      () => typeof r.maxHeight == "string" ? r.maxHeight : `${r.maxHeight}px`
    ), l = (h) => {
      const g = o.get(h);
      if (i.value && g) {
        const d = i.value.offsetHeight, c = g.offsetTop, v = g.offsetHeight, b = c - d / 2 + v / 2;
        i.value.scrollTo({ top: b }), a.value = h;
      }
    };
    br(() => l(r.modelValue));
    const f = (h) => {
      n("update:modelValue", h), n("change", h);
    }, p = (h) => typeof h == "object" && h !== null ? h[r.valueKey ?? "value"] ?? h : h, m = (h) => typeof h == "object" && h !== null ? h[r.labelKey ?? "label"] ?? h : h;
    return (h, g) => (H(), X("ul", {
      ref_key: "listWrapRef",
      ref: i,
      class: "kvc-select-list",
      style: Yt({ height: u.value, maxHeight: s.value })
    }, [
      (H(!0), X(bt, null, Ot(h.items, (d, c) => (H(), X("li", {
        key: c,
        ref_for: !0,
        ref: (v) => Le(o).set(p(d), v),
        class: at(["kvc-select-list-item", {
          "kvc-select-list-item-selected": p(d) === h.modelValue
        }]),
        onClick: (v) => f(p(d)),
        onMouseover: (v) => a.value = p(d)
      }, [
        ee("span", yh, [
          p(d) === h.modelValue ? (H(), Cn(Le(Et), {
            key: 0,
            icon: "mdi:check-bold",
            width: "15"
          })) : $e("", !0)
        ]),
        ee("span", vh, dt(m(d)), 1)
      ], 42, gh))), 128))
    ], 4));
  }
}), bh = ["innerHTML"], wh = {
  key: 1,
  class: "kvc-dropdown"
}, _h = ["disabled"], Sh = { class: "kvc-dropdown-label" }, xh = /* @__PURE__ */ ze({
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
    }), o = Ne(!1), a = Ne(!1), u = Ne(null), s = Ne(null);
    Xr(s, () => {
      o.value || (a.value = !1, o.value = !1);
    });
    const l = (p) => typeof p == "number" || !isNaN(Number(p));
    Te(() => r.width ? l(r.width) ? `${r.width}px` : r.width : "100%");
    const f = Te(() => {
      const p = r.itemValue ?? "value", m = r.itemLabel ?? "label", h = r.items.find((g) => typeof g == "object" && g[p] === r.modelValue);
      return h ? h[m] : "";
    });
    return (p, m) => p.readOnly ? (H(), X("p", {
      key: 0,
      class: at(["kvc-field-value", { "kvc-field-value-nonstyled": p.nonstyled }]),
      innerHTML: p.modelValue
    }, null, 10, bh)) : (H(), X("div", wh, [
      ee("button", {
        ref_key: "buttonRef",
        ref: u,
        type: "button",
        class: "kvc-dropdown-button",
        disabled: p.disabled,
        onClick: m[0] || (m[0] = (h) => a.value = !0)
      }, [
        ee("span", Sh, dt(f.value), 1),
        ct(Le(Et), {
          icon: "mdi-light:chevron-down",
          width: "24",
          style: { "min-width": "24px" }
        })
      ], 8, _h),
      p.readOnly || p.disabled ? $e("", !0) : Rn((H(), Cn(eo, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": m[1] || (m[1] = (h) => i.value = h),
        ref_key: "timeRef",
        ref: s,
        items: p.items,
        labelKey: p.itemLabel,
        valueKey: p.itemValue,
        onChange: m[2] || (m[2] = (h) => a.value = !1)
      }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
        [so, a.value]
      ])
    ]));
  }
}), Eh = /* @__PURE__ */ ze({
  __name: "button",
  props: {
    small: { type: Boolean, default: !1 },
    color: {}
  },
  setup(e) {
    return (t, r) => (H(), X("button", {
      type: "button",
      class: at(["kvc-button", {
        "kvc-button-sm": t.small,
        "kvc-button-normal": t.color === "normal",
        "kvc-button-success": t.color === "success",
        "kvc-button-save": t.color === "save",
        "kvc-button-error": t.color === "error"
      }])
    }, [
      ft(t.$slots, "default")
    ], 2));
  }
}), Oh = { class: "kvc-field-label" }, Ah = {
  key: 0,
  class: "kvc-field-required"
}, Dh = { class: "kvc-field-input" }, Ch = {
  key: 0,
  class: "kvc-field-prefix"
}, Rh = {
  key: 1,
  class: "kvc-field-suffix"
}, Ph = /* @__PURE__ */ ze({
  __name: "field",
  props: {
    required: { type: Boolean },
    width: {},
    errorMessage: {},
    successMessage: {}
  },
  setup(e) {
    const t = e, r = ls(), n = (o) => typeof o == "number" || !isNaN(Number(o)), i = Te(() => t.width ? n(t.width) ? `${t.width}px` : t.width : "fit-content");
    return (o, a) => {
      var u, s, l, f;
      return H(), X("div", {
        style: Yt({ width: i.value }),
        class: "kvc-field"
      }, [
        ee("label", Oh, [
          ft(o.$slots, "label"),
          o.required ? (H(), X("span", Ah)) : $e("", !0)
        ]),
        ee("div", Dh, [
          (s = (u = Le(r)).prefix) != null && s.call(u) ? (H(), X("div", Ch, [
            ft(o.$slots, "prefix")
          ])) : $e("", !0),
          ft(o.$slots, "default"),
          (f = (l = Le(r)).suffix) != null && f.call(l) ? (H(), X("div", Rh, [
            ft(o.$slots, "suffix")
          ])) : $e("", !0)
        ]),
        o.errorMessage || o.successMessage ? (H(), X("div", {
          key: 0,
          class: at({
            "kvc-field-message-error": o.errorMessage,
            "kvc-field-message-success": o.successMessage
          })
        }, dt(o.errorMessage || o.successMessage), 3)) : $e("", !0)
      ], 4);
    };
  }
}), Th = ["innerHTML"], kh = ["disabled", "value"], Ih = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, $h = ["fill"], Nh = /* @__PURE__ */ ze({
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
    }), o = r.itemValue ?? "value", a = r.itemLabel ?? "label", u = (f) => f != null && f.disabled ? "#d8d8d8" : r.modelValue == ((f == null ? void 0 : f[o]) ?? f) ? "#3498db" : "#d8d8d8", s = (f) => typeof f == "object" && f !== null ? f[o] ?? f : f, l = (f) => typeof f == "object" && f !== null ? f[a] ?? f : f;
    return (f, p) => f.readOnly ? (H(), X("p", {
      key: 0,
      class: at(["kvc-field-value", { "kvc-field-value-nonstyled": f.nonstyled }]),
      innerHTML: f.modelValue
    }, null, 10, Th)) : (H(), X("div", {
      key: 1,
      class: at(["kvc-radio-group", { "kvc-radio-group-column": f.column }])
    }, [
      (H(!0), X(bt, null, Ot(f.items, (m, h) => (H(), X("label", {
        key: h,
        class: "kvc-radio-item"
      }, [
        Rn(ee("input", {
          type: "radio",
          "onUpdate:modelValue": p[0] || (p[0] = (g) => i.value = g),
          disabled: typeof m == "object" ? m.disabled : !1,
          value: s(m)
        }, null, 8, kh), [
          [Pf, i.value]
        ]),
        (H(), X("svg", Ih, [
          p[1] || (p[1] = ee("circle", {
            cx: "10.5",
            cy: "10.5",
            r: "10",
            fill: "white",
            stroke: "#e3e7e8",
            "stroke-width": "1"
          }, null, -1)),
          i.value == s(m) ? (H(), X("circle", {
            key: 0,
            cx: "10.5",
            cy: "10.5",
            r: "6.5",
            fill: u(m)
          }, null, 8, $h)) : $e("", !0)
        ])),
        ee("span", null, dt(l(m)), 1)
      ]))), 128))
    ], 2));
  }
}), Mh = ["innerHTML"], jh = ["disabled", "value"], Fh = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Bh = ["stroke"], qh = ["fill"], Lh = /* @__PURE__ */ ze({
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
    }, a = (s) => {
      const l = r.itemLabel ?? "label";
      return typeof s == "object" ? s[l] : s;
    }, u = (s) => {
      const l = r.itemValue ?? "value";
      return typeof s == "object" ? s[l] : s;
    };
    return (s, l) => s.readOnly ? (H(), X("p", {
      key: 0,
      class: at(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }]),
      innerHTML: s.modelValue.join(", ")
    }, null, 10, Mh)) : (H(), X("div", {
      key: 1,
      class: at(["kvc-checkbox-group", { "kvc-checkbox-group-column": s.column }])
    }, [
      (H(!0), X(bt, null, Ot(s.items, (f, p) => (H(), X("label", {
        key: p,
        class: "kvc-checkbox-item"
      }, [
        Rn(ee("input", {
          type: "checkbox",
          "onUpdate:modelValue": l[0] || (l[0] = (m) => i.value = m),
          disabled: typeof f == "object" ? f.disabled : !1,
          value: u(f)
        }, null, 8, jh), [
          [Tf, i.value]
        ]),
        (H(), X("svg", Fh, [
          ee("rect", {
            x: "1",
            y: "1",
            width: "19",
            height: "19",
            rx: "1",
            fill: "white",
            "stroke-width": "2",
            stroke: o(f)
          }, null, 8, Bh),
          i.value.includes(u(f)) ? (H(), X("path", {
            key: 0,
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z",
            fill: o(f)
          }, null, 8, qh)) : $e("", !0)
        ])),
        ee("span", null, dt(a(f)), 1)
      ]))), 128))
    ], 2));
  }
}), Uh = ["placeholder", "type", "min", "max"], gs = /* @__PURE__ */ ze({
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
      set: (u) => n("update:modelValue", u)
    }), o = (u) => typeof u == "number" || !isNaN(Number(u)), a = Te(() => r.width ? o(r.width) ? `${r.width}px` : r.width : "100%");
    return (u, s) => u.readOnly ? (H(), X("p", {
      key: 0,
      class: at(["kvc-field-value", { "kvc-field-value-nonstyled": u.nonstyled }])
    }, dt((i.value || " ").replace(/\r|\n/g, "") || " "), 3)) : Rn((H(), X("input", {
      key: 1,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => i.value = l),
      class: "kvc-field-text",
      style: Yt({ width: a.value }),
      placeholder: u.placeholder,
      type: u.type,
      min: u.min,
      max: u.max
    }, null, 12, Uh)), [
      [kf, i.value]
    ]);
  }
});
var Jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Vh(e) {
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
var Ni = { exports: {} }, Wh = Ni.exports, gl;
function Hh() {
  return gl || (gl = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Wh, function() {
      var r = 1e3, n = 6e4, i = 36e5, o = "millisecond", a = "second", u = "minute", s = "hour", l = "day", f = "week", p = "month", m = "quarter", h = "year", g = "date", d = "Invalid Date", c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(V) {
        var q = ["th", "st", "nd", "rd"], L = V % 100;
        return "[" + V + (q[(L - 20) % 10] || q[L] || q[0]) + "]";
      } }, _ = function(V, q, L) {
        var Y = String(V);
        return !Y || Y.length >= q ? V : "" + Array(q + 1 - Y.length).join(L) + V;
      }, E = { s: _, z: function(V) {
        var q = -V.utcOffset(), L = Math.abs(q), Y = Math.floor(L / 60), j = L % 60;
        return (q <= 0 ? "+" : "-") + _(Y, 2, "0") + ":" + _(j, 2, "0");
      }, m: function V(q, L) {
        if (q.date() < L.date()) return -V(L, q);
        var Y = 12 * (L.year() - q.year()) + (L.month() - q.month()), j = q.clone().add(Y, p), Z = L - j < 0, re = q.clone().add(Y + (Z ? -1 : 1), p);
        return +(-(Y + (L - j) / (Z ? j - re : re - j)) || 0);
      }, a: function(V) {
        return V < 0 ? Math.ceil(V) || 0 : Math.floor(V);
      }, p: function(V) {
        return { M: p, y: h, w: f, d: l, D: g, h: s, m: u, s: a, ms: o, Q: m }[V] || String(V || "").toLowerCase().replace(/s$/, "");
      }, u: function(V) {
        return V === void 0;
      } }, C = "en", O = {};
      O[C] = b;
      var D = "$isDayjsObject", I = function(V) {
        return V instanceof W || !(!V || !V[D]);
      }, M = function V(q, L, Y) {
        var j;
        if (!q) return C;
        if (typeof q == "string") {
          var Z = q.toLowerCase();
          O[Z] && (j = Z), L && (O[Z] = L, j = Z);
          var re = q.split("-");
          if (!j && re.length > 1) return V(re[0]);
        } else {
          var de = q.name;
          O[de] = q, j = de;
        }
        return !Y && j && (C = j), j || !Y && C;
      }, F = function(V, q) {
        if (I(V)) return V.clone();
        var L = typeof q == "object" ? q : {};
        return L.date = V, L.args = arguments, new W(L);
      }, B = E;
      B.l = M, B.i = I, B.w = function(V, q) {
        return F(V, { locale: q.$L, utc: q.$u, x: q.$x, $offset: q.$offset });
      };
      var W = function() {
        function V(L) {
          this.$L = M(L.locale, null, !0), this.parse(L), this.$x = this.$x || L.x || {}, this[D] = !0;
        }
        var q = V.prototype;
        return q.parse = function(L) {
          this.$d = function(Y) {
            var j = Y.date, Z = Y.utc;
            if (j === null) return /* @__PURE__ */ new Date(NaN);
            if (B.u(j)) return /* @__PURE__ */ new Date();
            if (j instanceof Date) return new Date(j);
            if (typeof j == "string" && !/Z$/i.test(j)) {
              var re = j.match(c);
              if (re) {
                var de = re[2] - 1 || 0, ve = (re[7] || "0").substring(0, 3);
                return Z ? new Date(Date.UTC(re[1], de, re[3] || 1, re[4] || 0, re[5] || 0, re[6] || 0, ve)) : new Date(re[1], de, re[3] || 1, re[4] || 0, re[5] || 0, re[6] || 0, ve);
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
        }, q.isSame = function(L, Y) {
          var j = F(L);
          return this.startOf(Y) <= j && j <= this.endOf(Y);
        }, q.isAfter = function(L, Y) {
          return F(L) < this.startOf(Y);
        }, q.isBefore = function(L, Y) {
          return this.endOf(Y) < F(L);
        }, q.$g = function(L, Y, j) {
          return B.u(L) ? this[Y] : this.set(j, L);
        }, q.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, q.valueOf = function() {
          return this.$d.getTime();
        }, q.startOf = function(L, Y) {
          var j = this, Z = !!B.u(Y) || Y, re = B.p(L), de = function(Se, ne) {
            var we = B.w(j.$u ? Date.UTC(j.$y, ne, Se) : new Date(j.$y, ne, Se), j);
            return Z ? we : we.endOf(l);
          }, ve = function(Se, ne) {
            return B.w(j.toDate()[Se].apply(j.toDate("s"), (Z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), j);
          }, Ce = this.$W, Ae = this.$M, N = this.$D, K = "set" + (this.$u ? "UTC" : "");
          switch (re) {
            case h:
              return Z ? de(1, 0) : de(31, 11);
            case p:
              return Z ? de(1, Ae) : de(0, Ae + 1);
            case f:
              var _e = this.$locale().weekStart || 0, ke = (Ce < _e ? Ce + 7 : Ce) - _e;
              return de(Z ? N - ke : N + (6 - ke), Ae);
            case l:
            case g:
              return ve(K + "Hours", 0);
            case s:
              return ve(K + "Minutes", 1);
            case u:
              return ve(K + "Seconds", 2);
            case a:
              return ve(K + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, q.endOf = function(L) {
          return this.startOf(L, !1);
        }, q.$set = function(L, Y) {
          var j, Z = B.p(L), re = "set" + (this.$u ? "UTC" : ""), de = (j = {}, j[l] = re + "Date", j[g] = re + "Date", j[p] = re + "Month", j[h] = re + "FullYear", j[s] = re + "Hours", j[u] = re + "Minutes", j[a] = re + "Seconds", j[o] = re + "Milliseconds", j)[Z], ve = Z === l ? this.$D + (Y - this.$W) : Y;
          if (Z === p || Z === h) {
            var Ce = this.clone().set(g, 1);
            Ce.$d[de](ve), Ce.init(), this.$d = Ce.set(g, Math.min(this.$D, Ce.daysInMonth())).$d;
          } else de && this.$d[de](ve);
          return this.init(), this;
        }, q.set = function(L, Y) {
          return this.clone().$set(L, Y);
        }, q.get = function(L) {
          return this[B.p(L)]();
        }, q.add = function(L, Y) {
          var j, Z = this;
          L = Number(L);
          var re = B.p(Y), de = function(Ae) {
            var N = F(Z);
            return B.w(N.date(N.date() + Math.round(Ae * L)), Z);
          };
          if (re === p) return this.set(p, this.$M + L);
          if (re === h) return this.set(h, this.$y + L);
          if (re === l) return de(1);
          if (re === f) return de(7);
          var ve = (j = {}, j[u] = n, j[s] = i, j[a] = r, j)[re] || 1, Ce = this.$d.getTime() + L * ve;
          return B.w(Ce, this);
        }, q.subtract = function(L, Y) {
          return this.add(-1 * L, Y);
        }, q.format = function(L) {
          var Y = this, j = this.$locale();
          if (!this.isValid()) return j.invalidDate || d;
          var Z = L || "YYYY-MM-DDTHH:mm:ssZ", re = B.z(this), de = this.$H, ve = this.$m, Ce = this.$M, Ae = j.weekdays, N = j.months, K = j.meridiem, _e = function(ne, we, be, je) {
            return ne && (ne[we] || ne(Y, Z)) || be[we].slice(0, je);
          }, ke = function(ne) {
            return B.s(de % 12 || 12, ne, "0");
          }, Se = K || function(ne, we, be) {
            var je = ne < 12 ? "AM" : "PM";
            return be ? je.toLowerCase() : je;
          };
          return Z.replace(v, function(ne, we) {
            return we || function(be) {
              switch (be) {
                case "YY":
                  return String(Y.$y).slice(-2);
                case "YYYY":
                  return B.s(Y.$y, 4, "0");
                case "M":
                  return Ce + 1;
                case "MM":
                  return B.s(Ce + 1, 2, "0");
                case "MMM":
                  return _e(j.monthsShort, Ce, N, 3);
                case "MMMM":
                  return _e(N, Ce);
                case "D":
                  return Y.$D;
                case "DD":
                  return B.s(Y.$D, 2, "0");
                case "d":
                  return String(Y.$W);
                case "dd":
                  return _e(j.weekdaysMin, Y.$W, Ae, 2);
                case "ddd":
                  return _e(j.weekdaysShort, Y.$W, Ae, 3);
                case "dddd":
                  return Ae[Y.$W];
                case "H":
                  return String(de);
                case "HH":
                  return B.s(de, 2, "0");
                case "h":
                  return ke(1);
                case "hh":
                  return ke(2);
                case "a":
                  return Se(de, ve, !0);
                case "A":
                  return Se(de, ve, !1);
                case "m":
                  return String(ve);
                case "mm":
                  return B.s(ve, 2, "0");
                case "s":
                  return String(Y.$s);
                case "ss":
                  return B.s(Y.$s, 2, "0");
                case "SSS":
                  return B.s(Y.$ms, 3, "0");
                case "Z":
                  return re;
              }
              return null;
            }(ne) || re.replace(":", "");
          });
        }, q.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, q.diff = function(L, Y, j) {
          var Z, re = this, de = B.p(Y), ve = F(L), Ce = (ve.utcOffset() - this.utcOffset()) * n, Ae = this - ve, N = function() {
            return B.m(re, ve);
          };
          switch (de) {
            case h:
              Z = N() / 12;
              break;
            case p:
              Z = N();
              break;
            case m:
              Z = N() / 3;
              break;
            case f:
              Z = (Ae - Ce) / 6048e5;
              break;
            case l:
              Z = (Ae - Ce) / 864e5;
              break;
            case s:
              Z = Ae / i;
              break;
            case u:
              Z = Ae / n;
              break;
            case a:
              Z = Ae / r;
              break;
            default:
              Z = Ae;
          }
          return j ? Z : B.a(Z);
        }, q.daysInMonth = function() {
          return this.endOf(p).$D;
        }, q.$locale = function() {
          return O[this.$L];
        }, q.locale = function(L, Y) {
          if (!L) return this.$L;
          var j = this.clone(), Z = M(L, Y, !0);
          return Z && (j.$L = Z), j;
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
        }, V;
      }(), te = W.prototype;
      return F.prototype = te, [["$ms", o], ["$s", a], ["$m", u], ["$H", s], ["$W", l], ["$M", p], ["$y", h], ["$D", g]].forEach(function(V) {
        te[V[1]] = function(q) {
          return this.$g(q, V[0], V[1]);
        };
      }), F.extend = function(V, q) {
        return V.$i || (V(q, W, F), V.$i = !0), F;
      }, F.locale = M, F.isDayjs = I, F.unix = function(V) {
        return F(1e3 * V);
      }, F.en = O[C], F.Ls = O, F.p = {}, F;
    });
  }(Ni)), Ni.exports;
}
var Gh = Hh();
const Pe = /* @__PURE__ */ wr(Gh);
var Mi = { exports: {} }, Kh = Mi.exports, yl;
function zh() {
  return yl || (yl = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Kh, function() {
      return function(r, n) {
        n.prototype.weekday = function(i) {
          var o = this.$locale().weekStart || 0, a = this.$W, u = (a < o ? a + 7 : a) - o;
          return this.$utils().u(i) ? u : this.subtract(u, "day").add(i, "day");
        };
      };
    });
  }(Mi)), Mi.exports;
}
var Yh = zh();
const Xh = /* @__PURE__ */ wr(Yh);
var ji = { exports: {} }, Jh = ji.exports, vl;
function Qh() {
  return vl || (vl = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Jh, function() {
      return function(r, n) {
        n.prototype.isSameOrBefore = function(i, o) {
          return this.isSame(i, o) || this.isBefore(i, o);
        };
      };
    });
  }(ji)), ji.exports;
}
var Zh = Qh();
const em = /* @__PURE__ */ wr(Zh), tm = { class: "kvc-datepicker-popup" }, nm = { class: "kvc-datepicker-controls" }, rm = { class: "kvc-datepicker-control-year-month" }, im = { class: "kvc-datepicker-control-year" }, om = { class: "kvc-datepicker-control-selector-text" }, am = { class: "kvc-datepicker-control-month" }, sm = { class: "kvc-datepicker-control-selector-text" }, lm = { class: "kvc-datepicker-body" }, um = ["onClick"], cm = { class: "kvc-datepicker-bottom" }, fm = /* @__PURE__ */ ze({
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
    Pe.extend(Xh), Pe.extend(em);
    const r = e, n = t, i = Ne(null), o = Ne(null), a = Ne(null), u = Ne(null), s = Ne(
      (O = r.modelValue) != null && O.length ? r.modelValue : void 0
    ), l = ["日", "月", "火", "水", "木", "金", "土"], f = If({
      year: !1,
      month: !1
    }), p = (D) => {
      f[D] = !1;
    };
    Xr(i, () => p("year")), Xr(o, () => p("month"));
    const m = Te(
      () => Array.from({ length: 12 }, (D, I) => ({
        label: `${I + 1}月`,
        value: I + 1
      }))
    ), h = Te(() => {
      const D = Pe(s.value).year(), I = D - 100, M = D + 100, F = [];
      for (let B = I; B <= M; B++)
        F.push({ label: `${B}年`, value: B });
      return F;
    }), g = (D) => {
      D = Number(D), s.value = Pe(s.value || void 0).year(D).format("YYYY-MM-DD"), setTimeout(() => f.year = !1, 10);
    }, d = (D) => {
      D = Number(D), s.value = Pe(s.value || void 0).month(D - 1).format("YYYY-MM-DD"), setTimeout(() => f.month = !1, 10);
    }, c = Te(() => Pe(s.value).year()), v = Te(() => Pe(s.value).month() + 1), b = Te(() => {
      const D = Pe(s.value).startOf("month"), I = Pe(s.value).endOf("month"), M = D.weekday(0), F = I.weekday(6), B = [];
      let W = M;
      for (; W.isSameOrBefore(F); ) {
        const V = [];
        for (let q = 0; q < 7; q++)
          V.push({
            date: W.date(),
            fullDate: W.format("YYYY-MM-DD"),
            isCurrentMonth: W.month() === Pe(s.value).month(),
            isCurrentDate: W.isSame(Pe(r.modelValue || void 0), "date"),
            isHoliday: W.day() === 0 || W.day() === 6,
            isToday: W.isSame(Pe(), "day")
          }), W = W.add(1, "day");
        B.push(V);
      }
      let te = F.add(1, "day");
      for (; B.length < 6; ) {
        const V = [];
        for (let q = 0; q < 7; q++)
          V.push({
            date: te.date(),
            fullDate: te.format("YYYY-MM-DD"),
            isCurrentMonth: te.month() === Pe(s.value).month(),
            isCurrentDate: te.isSame(Pe(r.modelValue || void 0), "date"),
            isHoliday: te.day() === 0 || te.day() === 6,
            isToday: te.isSame(Pe(), "day")
          }), te = te.add(1, "day");
        B.push(V);
      }
      return B;
    }), _ = () => {
      s.value = Pe(s.value).subtract(1, "month").format("YYYY-MM-DD");
    }, E = () => {
      s.value = Pe(s.value).add(1, "month").format("YYYY-MM-DD");
    }, C = (D) => {
      n("update:modelValue", D || ""), n("close", !0);
    };
    return (D, I) => (H(), X("div", tm, [
      ee("div", nm, [
        ee("button", {
          class: "kvc-datepicker-control-prev",
          onClick: _
        }, [
          ct(Le(Et), {
            icon: "mdi-light:chevron-left",
            height: "32"
          })
        ]),
        ee("div", rm, [
          ee("div", im, [
            ee("button", {
              type: "button",
              ref_key: "yearRef",
              ref: i,
              class: "kvc-datepicker-control-selector",
              onClick: I[0] || (I[0] = (M) => f.year = !f.year)
            }, [
              ee("span", om, dt(c.value) + "年", 1),
              ct(Le(Et), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.year ? (H(), Cn(eo, {
                key: 0,
                ref_key: "yearListRef",
                ref: a,
                class: "kvc-datepicker-controll-selector-list",
                items: h.value,
                "model-value": c.value,
                "max-height": 300,
                onChange: g
              }, null, 8, ["items", "model-value"])) : $e("", !0)
            ], 512)
          ]),
          ee("div", am, [
            ee("button", {
              type: "button",
              ref_key: "monthRef",
              ref: o,
              class: "kvc-datepicker-control-selector",
              onClick: I[1] || (I[1] = (M) => f.month = !f.month)
            }, [
              ee("span", sm, dt(v.value) + "月", 1),
              ct(Le(Et), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.month ? (H(), Cn(eo, {
                key: 0,
                ref_key: "monthListRef",
                ref: u,
                class: "kvc-datepicker-controll-selector-list",
                items: m.value,
                "model-value": v.value,
                onChange: d
              }, null, 8, ["items", "model-value"])) : $e("", !0)
            ], 512)
          ])
        ]),
        ee("button", {
          class: "kvc-datepicker-control-next",
          onClick: E
        }, [
          ct(Le(Et), {
            icon: "mdi-light:chevron-right",
            height: "32"
          })
        ])
      ]),
      ee("table", lm, [
        ee("thead", null, [
          ee("tr", null, [
            (H(), X(bt, null, Ot(l, (M) => ee("th", {
              key: M,
              class: at(["kvc-datepicker-day", {
                "kvc-datepicker-day-saturday": M === "土",
                "kvc-datepicker-day-sunday": M === "日"
              }])
            }, dt(M), 3)), 64))
          ])
        ]),
        ee("tbody", null, [
          (H(!0), X(bt, null, Ot(b.value, (M, F) => (H(), X("tr", { key: F }, [
            (H(!0), X(bt, null, Ot(M, (B) => (H(), X("td", {
              key: B.date
            }, [
              ee("button", {
                type: "button",
                class: at(["kvc-datepicker-date", {
                  "kvc-datepicker-date-notcurrent-month": !B.isCurrentMonth,
                  "kvc-datepicker-date-today": B.isToday,
                  "kvc-datepicker-date-current": B.isCurrentDate
                }]),
                onClick: (W) => C(B.fullDate)
              }, dt(B.date), 11, um)
            ]))), 128))
          ]))), 128))
        ])
      ]),
      ee("div", cm, [
        ee("button", {
          type: "button",
          class: "kvc-datepicker-bottom-today",
          onClick: I[2] || (I[2] = (M) => C(Le(Pe)().format("YYYY-MM-DD")))
        }, " 今日 "),
        ee("button", {
          type: "button",
          class: "kvc-datepicker-bottom-clear",
          onClick: I[3] || (I[3] = (M) => C())
        }, " 選択を解除 ")
      ])
    ]));
  }
}), dm = { class: "kvc-date-picker" }, xc = /* @__PURE__ */ ze({
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
      set: (h) => {
        n("update:modelValue", h), n("change", h);
      }
    }), o = (h) => {
      const g = h.target;
      /^\d{4}-\d{2}-\d{2}$/.test(g.value) || (n("update:modelValue", ""), n("change", ""));
    }, a = Ne(!1), u = Ne(!1), s = Ne(null), l = Ne(null), f = () => {
      a.value = !0, u.value = !0;
    }, p = () => {
      a.value = !1;
    }, m = () => {
      u.value = !1, a.value = !1;
    };
    return Xr(l, () => {
      a.value || (u.value = !1, a.value = !1);
    }), (h, g) => (H(), X("div", dm, [
      ct(gs, {
        "read-only": h.readOnly,
        disabled: h.disabled,
        nonstyled: h.nonstyled,
        modelValue: i.value,
        "onUpdate:modelValue": g[0] || (g[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: s,
        class: at(["text-center", h.readOnly ? "w-28" : "max-w-28"]),
        onFocus: f,
        onBlur: p,
        onChange: o
      }, null, 8, ["read-only", "disabled", "nonstyled", "modelValue", "class"]),
      h.readOnly || h.disabled ? $e("", !0) : Rn((H(), Cn(fm, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": g[1] || (g[1] = (d) => i.value = d),
        ref_key: "calendarRef",
        ref: l,
        onClose: m
      }, null, 8, ["modelValue"])), [
        [so, u.value]
      ])
    ]));
  }
}), pm = { class: "kvc-time-picker" }, Ec = /* @__PURE__ */ ze({
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
      set: (h) => {
        n("update:modelValue", h), n("change", h);
      }
    }), o = (h) => {
      const g = h.target;
      /^\d{2}:\d{2}$/.test(g.value) || (n("update:modelValue", ""), n("change", ""));
    }, a = Te(() => {
      const h = [];
      for (let g = 0; g < 24; g++)
        for (let d = 0; d < 60; d += 30) {
          const c = d === 0 ? "00" : "30";
          h.push({
            label: `${g}:${c}`,
            value: `${g.toString().padStart(2, "0")}:${c}`
          });
        }
      return h;
    }), u = Ne(!1), s = Ne(!1), l = Ne(null), f = Ne(null), p = () => {
      u.value = !0, s.value = !0;
    }, m = () => {
      u.value = !1;
    };
    return Xr(f, () => {
      u.value || (s.value = !1, u.value = !1);
    }), (h, g) => (H(), X("div", pm, [
      ct(gs, {
        "read-only": h.readOnly,
        disabled: h.disabled,
        modelValue: i.value,
        "onUpdate:modelValue": g[0] || (g[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: l,
        class: at(h.readOnly ? "w-16 text-left" : "max-w-20 text-center"),
        onFocus: p,
        onBlur: m,
        onChange: o
      }, null, 8, ["read-only", "disabled", "modelValue", "class"]),
      h.readOnly || h.disabled ? $e("", !0) : Rn((H(), Cn(eo, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": g[1] || (g[1] = (d) => i.value = d),
        ref_key: "timeRef",
        ref: f,
        items: a.value,
        "max-height": 183,
        onChange: g[2] || (g[2] = (d) => s.value = !1)
      }, null, 8, ["modelValue", "items"])), [
        [so, s.value]
      ])
    ]));
  }
});
var Fi = { exports: {} }, hm = Fi.exports, bl;
function mm() {
  return bl || (bl = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(hm, function() {
      var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
      return function(o, a, u) {
        var s = a.prototype;
        u.utc = function(d) {
          var c = { date: d, utc: !0, args: arguments };
          return new a(c);
        }, s.utc = function(d) {
          var c = u(this.toDate(), { locale: this.$L, utc: !0 });
          return d ? c.add(this.utcOffset(), r) : c;
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
          var v = this.$utils().u;
          if (v(d)) return this.$u ? 0 : v(this.$offset) ? p.call(this) : this.$offset;
          if (typeof d == "string" && (d = function(C) {
            C === void 0 && (C = "");
            var O = C.match(n);
            if (!O) return null;
            var D = ("" + O[0]).match(i) || ["-", 0, 0], I = D[0], M = 60 * +D[1] + +D[2];
            return M === 0 ? 0 : I === "+" ? M : -M;
          }(d), d === null)) return this;
          var b = Math.abs(d) <= 16 ? 60 * d : d, _ = this;
          if (c) return _.$offset = b, _.$u = d === 0, _;
          if (d !== 0) {
            var E = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (_ = this.local().add(b + E, r)).$offset = b, _.$x.$localOffset = E;
          } else _ = this.utc();
          return _;
        };
        var m = s.format;
        s.format = function(d) {
          var c = d || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return m.call(this, c);
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
        var g = s.diff;
        s.diff = function(d, c, v) {
          if (d && this.$u === d.$u) return g.call(this, d, c, v);
          var b = this.local(), _ = u(d).local();
          return g.call(b, _, c, v);
        };
      };
    });
  }(Fi)), Fi.exports;
}
var gm = mm();
const ym = /* @__PURE__ */ wr(gm);
var Bi = { exports: {} }, vm = Bi.exports, wl;
function bm() {
  return wl || (wl = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(vm, function() {
      var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
      return function(i, o, a) {
        var u, s = function(m, h, g) {
          g === void 0 && (g = {});
          var d = new Date(m), c = function(v, b) {
            b === void 0 && (b = {});
            var _ = b.timeZoneName || "short", E = v + "|" + _, C = n[E];
            return C || (C = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: v, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: _ }), n[E] = C), C;
          }(h, g);
          return c.formatToParts(d);
        }, l = function(m, h) {
          for (var g = s(m, h), d = [], c = 0; c < g.length; c += 1) {
            var v = g[c], b = v.type, _ = v.value, E = r[b];
            E >= 0 && (d[E] = parseInt(_, 10));
          }
          var C = d[3], O = C === 24 ? 0 : C, D = d[0] + "-" + d[1] + "-" + d[2] + " " + O + ":" + d[4] + ":" + d[5] + ":000", I = +m;
          return (a.utc(D).valueOf() - (I -= I % 1e3)) / 6e4;
        }, f = o.prototype;
        f.tz = function(m, h) {
          m === void 0 && (m = u);
          var g, d = this.utcOffset(), c = this.toDate(), v = c.toLocaleString("en-US", { timeZone: m }), b = Math.round((c - new Date(v)) / 1e3 / 60), _ = 15 * -Math.round(c.getTimezoneOffset() / 15) - b;
          if (!Number(_)) g = this.utcOffset(0, h);
          else if (g = a(v, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(_, !0), h) {
            var E = g.utcOffset();
            g = g.add(d - E, "minute");
          }
          return g.$x.$timezone = m, g;
        }, f.offsetName = function(m) {
          var h = this.$x.$timezone || a.tz.guess(), g = s(this.valueOf(), h, { timeZoneName: m }).find(function(d) {
            return d.type.toLowerCase() === "timezonename";
          });
          return g && g.value;
        };
        var p = f.startOf;
        f.startOf = function(m, h) {
          if (!this.$x || !this.$x.$timezone) return p.call(this, m, h);
          var g = a(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return p.call(g, m, h).tz(this.$x.$timezone, !0);
        }, a.tz = function(m, h, g) {
          var d = g && h, c = g || h || u, v = l(+a(), c);
          if (typeof m != "string") return a(m).tz(c);
          var b = function(O, D, I) {
            var M = O - 60 * D * 1e3, F = l(M, I);
            if (D === F) return [M, D];
            var B = l(M -= 60 * (F - D) * 1e3, I);
            return F === B ? [M, F] : [O - 60 * Math.min(F, B) * 1e3, Math.max(F, B)];
          }(a.utc(m, d).valueOf(), v, c), _ = b[0], E = b[1], C = a(_).utcOffset(E);
          return C.$x.$timezone = c, C;
        }, a.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, a.tz.setDefault = function(m) {
          u = m;
        };
      };
    });
  }(Bi)), Bi.exports;
}
var wm = bm();
const _m = /* @__PURE__ */ wr(wm);
var qi = { exports: {} }, Sm = qi.exports, _l;
function xm() {
  return _l || (_l = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Sm, function() {
      return function(r, n, i) {
        var o = n.prototype, a = function(m) {
          var h, g = m.date, d = m.utc, c = {};
          if (!((h = g) === null || h instanceof Date || h instanceof Array || o.$utils().u(h) || h.constructor.name !== "Object")) {
            if (!Object.keys(g).length) return /* @__PURE__ */ new Date();
            var v = d ? i.utc() : i();
            Object.keys(g).forEach(function(M) {
              var F, B;
              c[F = M, B = o.$utils().p(F), B === "date" ? "day" : B] = g[M];
            });
            var b = c.day || (c.year || c.month >= 0 ? 1 : v.date()), _ = c.year || v.year(), E = c.month >= 0 ? c.month : c.year || c.day ? 0 : v.month(), C = c.hour || 0, O = c.minute || 0, D = c.second || 0, I = c.millisecond || 0;
            return d ? new Date(Date.UTC(_, E, b, C, O, D, I)) : new Date(_, E, b, C, O, D, I);
          }
          return g;
        }, u = o.parse;
        o.parse = function(m) {
          m.date = a.bind(this)(m), u.bind(this)(m);
        };
        var s = o.set, l = o.add, f = o.subtract, p = function(m, h, g, d) {
          d === void 0 && (d = 1);
          var c = Object.keys(h), v = this;
          return c.forEach(function(b) {
            v = m.bind(v)(h[b] * d, b);
          }), v;
        };
        o.set = function(m, h) {
          return h = h === void 0 ? m : h, m.constructor.name === "Object" ? p.bind(this)(function(g, d) {
            return s.bind(this)(d, g);
          }, h, m) : s.bind(this)(m, h);
        }, o.add = function(m, h) {
          return m.constructor.name === "Object" ? p.bind(this)(l, m, h) : l.bind(this)(m, h);
        }, o.subtract = function(m, h) {
          return m.constructor.name === "Object" ? p.bind(this)(l, m, h, -1) : f.bind(this)(m, h);
        };
      };
    });
  }(qi)), qi.exports;
}
var Em = xm();
const Om = /* @__PURE__ */ wr(Em), Am = { class: "kvc-datetime-picker" }, Dm = /* @__PURE__ */ ze({
  __name: "datetime-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    Pe.extend(ym), Pe.extend(_m), Pe.extend(Om), Pe.tz.setDefault("Asia/Tokyo");
    const r = e, n = t, i = Te(() => r.modelValue && Pe(r.modelValue).isValid()), o = Te(() => i.value ? Pe(r.modelValue) : void 0), a = (s) => {
      if (s && Pe(s).isValid()) {
        const [l, f, p] = s.split("-").map(Number), m = o.value ? Pe(o.value).year(l).month(f - 1).date(p) : Pe({ year: l, month: f - 1, date: p });
        n("update:modelValue", m.toISOString());
      } else
        n("update:modelValue", void 0);
    }, u = (s) => {
      if (s) {
        const [l, f] = s.split(":").map(Number);
        if (!isNaN(l) && !isNaN(f)) {
          const p = o.value ? Pe(o.value).hour(l).minute(f) : Pe({ hour: l, minute: f });
          n("update:modelValue", p.toISOString());
        } else
          n("update:modelValue", void 0);
      } else
        n("update:modelValue", void 0);
    };
    return (s, l) => (H(), X("div", Am, [
      s.readOnly ? (H(), X("p", {
        key: 0,
        class: at(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }])
      }, dt(s.modelValue && Le(Pe)(s.modelValue).isValid() ? Le(Pe)(s.modelValue).format("YYYY-MM-DD HH:mm") : " "), 3)) : (H(), X(bt, { key: 1 }, [
        ct(xc, {
          "model-value": o.value ? o.value.format("YYYY-MM-DD") : void 0,
          disabled: s.disabled,
          onChange: a
        }, null, 8, ["model-value", "disabled"]),
        ct(Ec, {
          "model-value": o.value ? o.value.format("HH:mm") : void 0,
          disabled: s.disabled,
          onChange: u
        }, null, 8, ["model-value", "disabled"])
      ], 64))
    ]));
  }
}), Cm = ["innerHTML"], Rm = /* @__PURE__ */ ze({
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
    return (o, a) => o.readOnly ? (H(), X("p", {
      key: 0,
      class: at(["kvc-field-value", { "kvc-field-value-nonstyled": o.nonstyled }]),
      innerHTML: (i.value || " ").replace(/\n/g, "<br>")
    }, null, 10, Cm)) : Rn((H(), X("textarea", {
      key: 1,
      class: "kvc-field-text",
      "onUpdate:modelValue": a[0] || (a[0] = (u) => i.value = u)
    }, null, 512)), [
      [$f, i.value]
    ]);
  }
});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Sl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sl(Object(r), !0).forEach(function(n) {
      Pm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Li(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Li = function(t) {
    return typeof t;
  } : Li = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Li(e);
}
function Pm(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function dn() {
  return dn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, dn.apply(this, arguments);
}
function Tm(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function km(e, t) {
  if (e == null) return {};
  var r = Tm(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var Im = "1.15.6";
function cn(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var hn = cn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ei = cn(/Edge/i), xl = cn(/firefox/i), Wr = cn(/safari/i) && !cn(/chrome/i) && !cn(/android/i), ys = cn(/iP(ad|od|hone)/i), Oc = cn(/chrome/i) && cn(/android/i), Ac = {
  capture: !1,
  passive: !1
};
function Oe(e, t, r) {
  e.addEventListener(t, r, !hn && Ac);
}
function xe(e, t, r) {
  e.removeEventListener(t, r, !hn && Ac);
}
function to(e, t) {
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
function Dc(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function qt(e, t, r, n) {
  if (e) {
    r = r || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === r && to(e, t) : to(e, t)) || n && e === r)
        return e;
      if (e === r) break;
    } while (e = Dc(e));
  }
  return null;
}
var El = /\s+/g;
function Pt(e, t, r) {
  if (e && t)
    if (e.classList)
      e.classList[r ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ").replace(El, " ").replace(" " + t + " ", " ");
      e.className = (n + (r ? " " + t : "")).replace(El, " ");
    }
}
function ce(e, t, r) {
  var n = e && e.style;
  if (n) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (r = e.currentStyle), t === void 0 ? r : r[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = r + (typeof r == "string" ? "" : "px");
  }
}
function mr(e, t) {
  var r = "";
  if (typeof e == "string")
    r = e;
  else
    do {
      var n = ce(e, "transform");
      n && n !== "none" && (r = n + " " + r);
    } while (!t && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(r);
}
function Cc(e, t, r) {
  if (e) {
    var n = e.getElementsByTagName(t), i = 0, o = n.length;
    if (r)
      for (; i < o; i++)
        r(n[i], i);
    return n;
  }
  return [];
}
function Jt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function et(e, t, r, n, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, a, u, s, l, f, p;
    if (e !== window && e.parentNode && e !== Jt() ? (o = e.getBoundingClientRect(), a = o.top, u = o.left, s = o.bottom, l = o.right, f = o.height, p = o.width) : (a = 0, u = 0, s = window.innerHeight, l = window.innerWidth, f = window.innerHeight, p = window.innerWidth), (t || r) && e !== window && (i = i || e.parentNode, !hn))
      do
        if (i && i.getBoundingClientRect && (ce(i, "transform") !== "none" || r && ce(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          a -= m.top + parseInt(ce(i, "border-top-width")), u -= m.left + parseInt(ce(i, "border-left-width")), s = a + o.height, l = u + o.width;
          break;
        }
      while (i = i.parentNode);
    if (n && e !== window) {
      var h = mr(i || e), g = h && h.a, d = h && h.d;
      h && (a /= d, u /= g, p /= g, f /= d, s = a + f, l = u + p);
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
function Ol(e, t, r) {
  for (var n = Dn(e, !0), i = et(e)[t]; n; ) {
    var o = et(n)[r], a = void 0;
    if (a = i >= o, !a) return n;
    if (n === Jt()) break;
    n = Dn(n, !1);
  }
  return !1;
}
function vr(e, t, r, n) {
  for (var i = 0, o = 0, a = e.children; o < a.length; ) {
    if (a[o].style.display !== "none" && a[o] !== fe.ghost && (n || a[o] !== fe.dragged) && qt(a[o], r.draggable, e, !1)) {
      if (i === t)
        return a[o];
      i++;
    }
    o++;
  }
  return null;
}
function vs(e, t) {
  for (var r = e.lastElementChild; r && (r === fe.ghost || ce(r, "display") === "none" || t && !to(r, t)); )
    r = r.previousElementSibling;
  return r || null;
}
function Nt(e, t) {
  var r = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== fe.clone && (!t || to(e, t)) && r++;
  return r;
}
function Al(e) {
  var t = 0, r = 0, n = Jt();
  if (e)
    do {
      var i = mr(e), o = i.a, a = i.d;
      t += e.scrollLeft * o, r += e.scrollTop * a;
    } while (e !== n && (e = e.parentNode));
  return [t, r];
}
function $m(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === e[r][n]) return Number(r);
    }
  return -1;
}
function Dn(e, t) {
  if (!e || !e.getBoundingClientRect) return Jt();
  var r = e, n = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var i = ce(r);
      if (r.clientWidth < r.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return Jt();
        if (n || t) return r;
        n = !0;
      }
    }
  while (r = r.parentNode);
  return Jt();
}
function Nm(e, t) {
  if (e && t)
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
function Lo(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Hr;
function Rc(e, t) {
  return function() {
    if (!Hr) {
      var r = arguments, n = this;
      r.length === 1 ? e.call(n, r[0]) : e.apply(n, r), Hr = setTimeout(function() {
        Hr = void 0;
      }, t);
    }
  };
}
function Mm() {
  clearTimeout(Hr), Hr = void 0;
}
function Pc(e, t, r) {
  e.scrollLeft += t, e.scrollTop += r;
}
function Tc(e) {
  var t = window.Polymer, r = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : r ? r(e).clone(!0)[0] : e.cloneNode(!0);
}
function kc(e, t, r) {
  var n = {};
  return Array.from(e.children).forEach(function(i) {
    var o, a, u, s;
    if (!(!qt(i, t.draggable, e, !1) || i.animated || i === r)) {
      var l = et(i);
      n.left = Math.min((o = n.left) !== null && o !== void 0 ? o : 1 / 0, l.left), n.top = Math.min((a = n.top) !== null && a !== void 0 ? a : 1 / 0, l.top), n.right = Math.max((u = n.right) !== null && u !== void 0 ? u : -1 / 0, l.right), n.bottom = Math.max((s = n.bottom) !== null && s !== void 0 ? s : -1 / 0, l.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var At = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function jm() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(ce(i, "display") === "none" || i === fe.ghost)) {
            e.push({
              target: i,
              rect: et(i)
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
    addAnimationState: function(n) {
      e.push(n);
    },
    removeAnimationState: function(n) {
      e.splice($m(e, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var o = !1, a = 0;
      e.forEach(function(u) {
        var s = 0, l = u.target, f = l.fromRect, p = et(l), m = l.prevFromRect, h = l.prevToRect, g = u.rect, d = mr(l, !0);
        d && (p.top -= d.f, p.left -= d.e), l.toRect = p, l.thisAnimationDuration && Lo(m, p) && !Lo(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (g.top - p.top) / (g.left - p.left) === (f.top - p.top) / (f.left - p.left) && (s = Bm(g, m, h, i.options)), Lo(p, f) || (l.prevFromRect = f, l.prevToRect = p, s || (s = i.options.animation), i.animate(l, g, p, s)), s && (o = !0, a = Math.max(a, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), e = [];
    },
    animate: function(n, i, o, a) {
      if (a) {
        ce(n, "transition", ""), ce(n, "transform", "");
        var u = mr(this.el), s = u && u.a, l = u && u.d, f = (i.left - o.left) / (s || 1), p = (i.top - o.top) / (l || 1);
        n.animatingX = !!f, n.animatingY = !!p, ce(n, "transform", "translate3d(" + f + "px," + p + "px,0)"), this.forRepaintDummy = Fm(n), ce(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ce(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          ce(n, "transition", ""), ce(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function Fm(e) {
  return e.offsetWidth;
}
function Bm(e, t, r, n) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) * n.animation;
}
var Zn = [], Uo = {
  initializeByDefault: !0
}, ti = {
  mount: function(t) {
    for (var r in Uo)
      Uo.hasOwnProperty(r) && !(r in t) && (t[r] = Uo[r]);
    Zn.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Zn.push(t);
  },
  pluginEvent: function(t, r, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var o = t + "Global";
    Zn.forEach(function(a) {
      r[a.pluginName] && (r[a.pluginName][o] && r[a.pluginName][o](Zt({
        sortable: r
      }, n)), r.options[a.pluginName] && r[a.pluginName][t] && r[a.pluginName][t](Zt({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(t, r, n, i) {
    Zn.forEach(function(u) {
      var s = u.pluginName;
      if (!(!t.options[s] && !u.initializeByDefault)) {
        var l = new u(t, r, t.options);
        l.sortable = t, l.options = t.options, t[s] = l, dn(n, l.defaults);
      }
    });
    for (var o in t.options)
      if (t.options.hasOwnProperty(o)) {
        var a = this.modifyOption(t, o, t.options[o]);
        typeof a < "u" && (t.options[o] = a);
      }
  },
  getEventProperties: function(t, r) {
    var n = {};
    return Zn.forEach(function(i) {
      typeof i.eventProperties == "function" && dn(n, i.eventProperties.call(r[i.pluginName], t));
    }), n;
  },
  modifyOption: function(t, r, n) {
    var i;
    return Zn.forEach(function(o) {
      t[o.pluginName] && o.optionListeners && typeof o.optionListeners[r] == "function" && (i = o.optionListeners[r].call(t[o.pluginName], n));
    }), i;
  }
};
function qm(e) {
  var t = e.sortable, r = e.rootEl, n = e.name, i = e.targetEl, o = e.cloneEl, a = e.toEl, u = e.fromEl, s = e.oldIndex, l = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, m = e.originalEvent, h = e.putSortable, g = e.extraEventProperties;
  if (t = t || r && r[At], !!t) {
    var d, c = t.options, v = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !hn && !ei ? d = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(n, !0, !0)), d.to = a || r, d.from = u || r, d.item = i || r, d.clone = o, d.oldIndex = s, d.newIndex = l, d.oldDraggableIndex = f, d.newDraggableIndex = p, d.originalEvent = m, d.pullMode = h ? h.lastPutMode : void 0;
    var b = Zt(Zt({}, g), ti.getEventProperties(n, t));
    for (var _ in b)
      d[_] = b[_];
    r && r.dispatchEvent(d), c[v] && c[v].call(t, d);
  }
}
var Lm = ["evt"], xt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, o = km(n, Lm);
  ti.pluginEvent.bind(fe)(t, r, Zt({
    dragEl: G,
    parentEl: He,
    ghostEl: he,
    rootEl: qe,
    nextEl: Ln,
    lastDownEl: Ui,
    cloneEl: Ue,
    cloneHidden: On,
    dragStarted: Mr,
    putSortable: ut,
    activeSortable: fe.active,
    originalEvent: i,
    oldIndex: pr,
    oldDraggableIndex: Gr,
    newIndex: kt,
    newDraggableIndex: xn,
    hideGhostForTarget: Mc,
    unhideGhostForTarget: jc,
    cloneNowHidden: function() {
      On = !0;
    },
    cloneNowShown: function() {
      On = !1;
    },
    dispatchSortableEvent: function(u) {
      vt({
        sortable: r,
        name: u,
        originalEvent: i
      });
    }
  }, o));
};
function vt(e) {
  qm(Zt({
    putSortable: ut,
    cloneEl: Ue,
    targetEl: G,
    rootEl: qe,
    oldIndex: pr,
    oldDraggableIndex: Gr,
    newIndex: kt,
    newDraggableIndex: xn
  }, e));
}
var G, He, he, qe, Ln, Ui, Ue, On, pr, kt, Gr, xn, xi, ut, cr = !1, no = !1, ro = [], Mn, Ft, Vo, Wo, Dl, Cl, Mr, er, Kr, zr = !1, Ei = !1, Vi, mt, Ho = [], is = !1, io = [], po = typeof document < "u", Oi = ys, Rl = ei || hn ? "cssFloat" : "float", Um = po && !Oc && !ys && "draggable" in document.createElement("div"), Ic = function() {
  if (po) {
    if (hn)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), $c = function(t, r) {
  var n = ce(t), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), o = vr(t, 0, r), a = vr(t, 1, r), u = o && ce(o), s = a && ce(a), l = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + et(o).width, f = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + et(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && u.float && u.float !== "none") {
    var p = u.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (u.display === "block" || u.display === "flex" || u.display === "table" || u.display === "grid" || l >= i && n[Rl] === "none" || a && n[Rl] === "none" && l + f > i) ? "vertical" : "horizontal";
}, Vm = function(t, r, n) {
  var i = n ? t.left : t.top, o = n ? t.right : t.bottom, a = n ? t.width : t.height, u = n ? r.left : r.top, s = n ? r.right : r.bottom, l = n ? r.width : r.height;
  return i === u || o === s || i + a / 2 === u + l / 2;
}, Wm = function(t, r) {
  var n;
  return ro.some(function(i) {
    var o = i[At].options.emptyInsertThreshold;
    if (!(!o || vs(i))) {
      var a = et(i), u = t >= a.left - o && t <= a.right + o, s = r >= a.top - o && r <= a.bottom + o;
      if (u && s)
        return n = i;
    }
  }), n;
}, Nc = function(t) {
  function r(o, a) {
    return function(u, s, l, f) {
      var p = u.options.group.name && s.options.group.name && u.options.group.name === s.options.group.name;
      if (o == null && (a || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (a && o === "clone")
        return o;
      if (typeof o == "function")
        return r(o(u, s, l, f), a)(u, s, l, f);
      var m = (a ? u : s).options.group.name;
      return o === !0 || typeof o == "string" && o === m || o.join && o.indexOf(m) > -1;
    };
  }
  var n = {}, i = t.group;
  (!i || Li(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = r(i.pull, !0), n.checkPut = r(i.put), n.revertClone = i.revertClone, t.group = n;
}, Mc = function() {
  !Ic && he && ce(he, "display", "none");
}, jc = function() {
  !Ic && he && ce(he, "display", "");
};
po && !Oc && document.addEventListener("click", function(e) {
  if (no)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), no = !1, !1;
}, !0);
var jn = function(t) {
  if (G) {
    t = t.touches ? t.touches[0] : t;
    var r = Wm(t.clientX, t.clientY);
    if (r) {
      var n = {};
      for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[At]._onDragOver(n);
    }
  }
}, Hm = function(t) {
  G && G.parentNode[At]._isOutsideThisEl(t.target);
};
function fe(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = dn({}, t), e[At] = this;
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
      return $c(e, this.options);
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
    supportPointer: fe.supportPointer !== !1 && "PointerEvent" in window && (!Wr || ys),
    emptyInsertThreshold: 5
  };
  ti.initializePlugins(this, e, r);
  for (var n in r)
    !(n in t) && (t[n] = r[n]);
  Nc(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Um, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Oe(e, "pointerdown", this._onTapStart) : (Oe(e, "mousedown", this._onTapStart), Oe(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Oe(e, "dragover", this), Oe(e, "dragenter", this)), ro.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), dn(this, jm());
}
fe.prototype = /** @lends Sortable.prototype */
{
  constructor: fe,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (er = null);
  },
  _getDirection: function(t, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, r, G) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var r = this, n = this.el, i = this.options, o = i.preventOnFilter, a = t.type, u = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (u || t).target, l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, f = i.filter;
      if (Zm(n), !G && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Wr && s && s.tagName.toUpperCase() === "SELECT") && (s = qt(s, i.draggable, n, !1), !(s && s.animated) && Ui !== s)) {
        if (pr = Nt(s), Gr = Nt(s, i.draggable), typeof f == "function") {
          if (f.call(this, t, s, this)) {
            vt({
              sortable: r,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: n,
              fromEl: n
            }), xt("filter", r, {
              evt: t
            }), o && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(p) {
          if (p = qt(l, p.trim(), n, !1), p)
            return vt({
              sortable: r,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: n,
              toEl: n
            }), xt("filter", r, {
              evt: t
            }), !0;
        }), f)) {
          o && t.preventDefault();
          return;
        }
        i.handle && !qt(l, i.handle, n, !1) || this._prepareDragStart(t, u, s);
      }
    }
  },
  _prepareDragStart: function(t, r, n) {
    var i = this, o = i.el, a = i.options, u = o.ownerDocument, s;
    if (n && !G && n.parentNode === o) {
      var l = et(n);
      if (qe = o, G = n, He = G.parentNode, Ln = G.nextSibling, Ui = n, xi = a.group, fe.dragged = G, Mn = {
        target: G,
        clientX: (r || t).clientX,
        clientY: (r || t).clientY
      }, Dl = Mn.clientX - l.left, Cl = Mn.clientY - l.top, this._lastX = (r || t).clientX, this._lastY = (r || t).clientY, G.style["will-change"] = "all", s = function() {
        if (xt("delayEnded", i, {
          evt: t
        }), fe.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !xl && i.nativeDraggable && (G.draggable = !0), i._triggerDragStart(t, r), vt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), Pt(G, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        Cc(G, f.trim(), Go);
      }), Oe(u, "dragover", jn), Oe(u, "mousemove", jn), Oe(u, "touchmove", jn), a.supportPointer ? (Oe(u, "pointerup", i._onDrop), !this.nativeDraggable && Oe(u, "pointercancel", i._onDrop)) : (Oe(u, "mouseup", i._onDrop), Oe(u, "touchend", i._onDrop), Oe(u, "touchcancel", i._onDrop)), xl && this.nativeDraggable && (this.options.touchStartThreshold = 4, G.draggable = !0), xt("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || r) && (!this.nativeDraggable || !(ei || hn))) {
        if (fe.eventCanceled) {
          this._onDrop();
          return;
        }
        a.supportPointer ? (Oe(u, "pointerup", i._disableDelayedDrag), Oe(u, "pointercancel", i._disableDelayedDrag)) : (Oe(u, "mouseup", i._disableDelayedDrag), Oe(u, "touchend", i._disableDelayedDrag), Oe(u, "touchcancel", i._disableDelayedDrag)), Oe(u, "mousemove", i._delayedDragTouchMoveHandler), Oe(u, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && Oe(u, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var r = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    G && Go(G), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    xe(t, "mouseup", this._disableDelayedDrag), xe(t, "touchend", this._disableDelayedDrag), xe(t, "touchcancel", this._disableDelayedDrag), xe(t, "pointerup", this._disableDelayedDrag), xe(t, "pointercancel", this._disableDelayedDrag), xe(t, "mousemove", this._delayedDragTouchMoveHandler), xe(t, "touchmove", this._delayedDragTouchMoveHandler), xe(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, r) {
    r = r || t.pointerType == "touch" && t, !this.nativeDraggable || r ? this.options.supportPointer ? Oe(document, "pointermove", this._onTouchMove) : r ? Oe(document, "touchmove", this._onTouchMove) : Oe(document, "mousemove", this._onTouchMove) : (Oe(G, "dragend", this), Oe(qe, "dragstart", this._onDragStart));
    try {
      document.selection ? Wi(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, r) {
    if (cr = !1, qe && G) {
      xt("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && Oe(document, "dragover", Hm);
      var n = this.options;
      !t && Pt(G, n.dragClass, !1), Pt(G, n.ghostClass, !0), fe.active = this, t && this._appendGhost(), vt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Ft) {
      this._lastX = Ft.clientX, this._lastY = Ft.clientY, Mc();
      for (var t = document.elementFromPoint(Ft.clientX, Ft.clientY), r = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Ft.clientX, Ft.clientY), t !== r); )
        r = t;
      if (G.parentNode[At]._isOutsideThisEl(t), r)
        do {
          if (r[At]) {
            var n = void 0;
            if (n = r[At]._onDragOver({
              clientX: Ft.clientX,
              clientY: Ft.clientY,
              target: t,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = r;
        } while (r = Dc(r));
      jc();
    }
  },
  _onTouchMove: function(t) {
    if (Mn) {
      var r = this.options, n = r.fallbackTolerance, i = r.fallbackOffset, o = t.touches ? t.touches[0] : t, a = he && mr(he, !0), u = he && a && a.a, s = he && a && a.d, l = Oi && mt && Al(mt), f = (o.clientX - Mn.clientX + i.x) / (u || 1) + (l ? l[0] - Ho[0] : 0) / (u || 1), p = (o.clientY - Mn.clientY + i.y) / (s || 1) + (l ? l[1] - Ho[1] : 0) / (s || 1);
      if (!fe.active && !cr) {
        if (n && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (he) {
        a ? (a.e += f - (Vo || 0), a.f += p - (Wo || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: p
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ce(he, "webkitTransform", m), ce(he, "mozTransform", m), ce(he, "msTransform", m), ce(he, "transform", m), Vo = f, Wo = p, Ft = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!he) {
      var t = this.options.fallbackOnBody ? document.body : qe, r = et(G, !0, Oi, !0, t), n = this.options;
      if (Oi) {
        for (mt = t; ce(mt, "position") === "static" && ce(mt, "transform") === "none" && mt !== document; )
          mt = mt.parentNode;
        mt !== document.body && mt !== document.documentElement ? (mt === document && (mt = Jt()), r.top += mt.scrollTop, r.left += mt.scrollLeft) : mt = Jt(), Ho = Al(mt);
      }
      he = G.cloneNode(!0), Pt(he, n.ghostClass, !1), Pt(he, n.fallbackClass, !0), Pt(he, n.dragClass, !0), ce(he, "transition", ""), ce(he, "transform", ""), ce(he, "box-sizing", "border-box"), ce(he, "margin", 0), ce(he, "top", r.top), ce(he, "left", r.left), ce(he, "width", r.width), ce(he, "height", r.height), ce(he, "opacity", "0.8"), ce(he, "position", Oi ? "absolute" : "fixed"), ce(he, "zIndex", "100000"), ce(he, "pointerEvents", "none"), fe.ghost = he, t.appendChild(he), ce(he, "transform-origin", Dl / parseInt(he.style.width) * 100 + "% " + Cl / parseInt(he.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, r) {
    var n = this, i = t.dataTransfer, o = n.options;
    if (xt("dragStart", this, {
      evt: t
    }), fe.eventCanceled) {
      this._onDrop();
      return;
    }
    xt("setupClone", this), fe.eventCanceled || (Ue = Tc(G), Ue.removeAttribute("id"), Ue.draggable = !1, Ue.style["will-change"] = "", this._hideClone(), Pt(Ue, this.options.chosenClass, !1), fe.clone = Ue), n.cloneId = Wi(function() {
      xt("clone", n), !fe.eventCanceled && (n.options.removeCloneOnHide || qe.insertBefore(Ue, G), n._hideClone(), vt({
        sortable: n,
        name: "clone"
      }));
    }), !r && Pt(G, o.dragClass, !0), r ? (no = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (xe(document, "mouseup", n._onDrop), xe(document, "touchend", n._onDrop), xe(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(n, i, G)), Oe(document, "drop", n), ce(G, "transform", "translateZ(0)")), cr = !0, n._dragStartId = Wi(n._dragStarted.bind(n, r, t)), Oe(document, "selectstart", n), Mr = !0, window.getSelection().removeAllRanges(), Wr && ce(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var r = this.el, n = t.target, i, o, a, u = this.options, s = u.group, l = fe.active, f = xi === s, p = u.sort, m = ut || l, h, g = this, d = !1;
    if (is) return;
    function c(j, Z) {
      xt(j, g, Zt({
        evt: t,
        isOwner: f,
        axis: h ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: o,
        canSort: p,
        fromSortable: m,
        target: n,
        completed: b,
        onMove: function(de, ve) {
          return Ai(qe, r, G, i, de, et(de), t, ve);
        },
        changed: _
      }, Z));
    }
    function v() {
      c("dragOverAnimationCapture"), g.captureAnimationState(), g !== m && m.captureAnimationState();
    }
    function b(j) {
      return c("dragOverCompleted", {
        insertion: j
      }), j && (f ? l._hideClone() : l._showClone(g), g !== m && (Pt(G, ut ? ut.options.ghostClass : l.options.ghostClass, !1), Pt(G, u.ghostClass, !0)), ut !== g && g !== fe.active ? ut = g : g === fe.active && ut && (ut = null), m === g && (g._ignoreWhileAnimating = n), g.animateAll(function() {
        c("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === G && !G.animated || n === r && !n.animated) && (er = null), !u.dragoverBubble && !t.rootEl && n !== document && (G.parentNode[At]._isOutsideThisEl(t.target), !j && jn(t)), !u.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function _() {
      kt = Nt(G), xn = Nt(G, u.draggable), vt({
        sortable: g,
        name: "change",
        toEl: r,
        newIndex: kt,
        newDraggableIndex: xn,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = qt(n, u.draggable, r, !0), c("dragOver"), fe.eventCanceled) return d;
    if (G.contains(t.target) || n.animated && n.animatingX && n.animatingY || g._ignoreWhileAnimating === n)
      return b(!1);
    if (no = !1, l && !u.disabled && (f ? p || (a = He !== qe) : ut === this || (this.lastPutMode = xi.checkPull(this, l, G, t)) && s.checkPut(this, l, G, t))) {
      if (h = this._getDirection(t, n) === "vertical", i = et(G), c("dragOverValid"), fe.eventCanceled) return d;
      if (a)
        return He = qe, v(), this._hideClone(), c("revert"), fe.eventCanceled || (Ln ? qe.insertBefore(G, Ln) : qe.appendChild(G)), b(!0);
      var E = vs(r, u.draggable);
      if (!E || Ym(t, h, this) && !E.animated) {
        if (E === G)
          return b(!1);
        if (E && r === t.target && (n = E), n && (o = et(n)), Ai(qe, r, G, i, n, o, t, !!n) !== !1)
          return v(), E && E.nextSibling ? r.insertBefore(G, E.nextSibling) : r.appendChild(G), He = r, _(), b(!0);
      } else if (E && zm(t, h, this)) {
        var C = vr(r, 0, u, !0);
        if (C === G)
          return b(!1);
        if (n = C, o = et(n), Ai(qe, r, G, i, n, o, t, !1) !== !1)
          return v(), r.insertBefore(G, C), He = r, _(), b(!0);
      } else if (n.parentNode === r) {
        o = et(n);
        var O = 0, D, I = G.parentNode !== r, M = !Vm(G.animated && G.toRect || i, n.animated && n.toRect || o, h), F = h ? "top" : "left", B = Ol(n, "top", "top") || Ol(G, "top", "top"), W = B ? B.scrollTop : void 0;
        er !== n && (D = o[F], zr = !1, Ei = !M && u.invertSwap || I), O = Xm(t, n, o, h, M ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, Ei, er === n);
        var te;
        if (O !== 0) {
          var V = Nt(G);
          do
            V -= O, te = He.children[V];
          while (te && (ce(te, "display") === "none" || te === he));
        }
        if (O === 0 || te === n)
          return b(!1);
        er = n, Kr = O;
        var q = n.nextElementSibling, L = !1;
        L = O === 1;
        var Y = Ai(qe, r, G, i, n, o, t, L);
        if (Y !== !1)
          return (Y === 1 || Y === -1) && (L = Y === 1), is = !0, setTimeout(Km, 30), v(), L && !q ? r.appendChild(G) : n.parentNode.insertBefore(G, L ? q : n), B && Pc(B, 0, W - B.scrollTop), He = G.parentNode, D !== void 0 && !Ei && (Vi = Math.abs(D - et(n)[F])), _(), b(!0);
      }
      if (r.contains(G))
        return b(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    xe(document, "mousemove", this._onTouchMove), xe(document, "touchmove", this._onTouchMove), xe(document, "pointermove", this._onTouchMove), xe(document, "dragover", jn), xe(document, "mousemove", jn), xe(document, "touchmove", jn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    xe(t, "mouseup", this._onDrop), xe(t, "touchend", this._onDrop), xe(t, "pointerup", this._onDrop), xe(t, "pointercancel", this._onDrop), xe(t, "touchcancel", this._onDrop), xe(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var r = this.el, n = this.options;
    if (kt = Nt(G), xn = Nt(G, n.draggable), xt("drop", this, {
      evt: t
    }), He = G && G.parentNode, kt = Nt(G), xn = Nt(G, n.draggable), fe.eventCanceled) {
      this._nulling();
      return;
    }
    cr = !1, Ei = !1, zr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), os(this.cloneId), os(this._dragStartId), this.nativeDraggable && (xe(document, "drop", this), xe(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Wr && ce(document.body, "user-select", ""), ce(G, "transform", ""), t && (Mr && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), he && he.parentNode && he.parentNode.removeChild(he), (qe === He || ut && ut.lastPutMode !== "clone") && Ue && Ue.parentNode && Ue.parentNode.removeChild(Ue), G && (this.nativeDraggable && xe(G, "dragend", this), Go(G), G.style["will-change"] = "", Mr && !cr && Pt(G, ut ? ut.options.ghostClass : this.options.ghostClass, !1), Pt(G, this.options.chosenClass, !1), vt({
      sortable: this,
      name: "unchoose",
      toEl: He,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), qe !== He ? (kt >= 0 && (vt({
      rootEl: He,
      name: "add",
      toEl: He,
      fromEl: qe,
      originalEvent: t
    }), vt({
      sortable: this,
      name: "remove",
      toEl: He,
      originalEvent: t
    }), vt({
      rootEl: He,
      name: "sort",
      toEl: He,
      fromEl: qe,
      originalEvent: t
    }), vt({
      sortable: this,
      name: "sort",
      toEl: He,
      originalEvent: t
    })), ut && ut.save()) : kt !== pr && kt >= 0 && (vt({
      sortable: this,
      name: "update",
      toEl: He,
      originalEvent: t
    }), vt({
      sortable: this,
      name: "sort",
      toEl: He,
      originalEvent: t
    })), fe.active && ((kt == null || kt === -1) && (kt = pr, xn = Gr), vt({
      sortable: this,
      name: "end",
      toEl: He,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    xt("nulling", this), qe = G = He = he = Ln = Ue = Ui = On = Mn = Ft = Mr = kt = xn = pr = Gr = er = Kr = ut = xi = fe.dragged = fe.ghost = fe.clone = fe.active = null, io.forEach(function(t) {
      t.checked = !0;
    }), io.length = Vo = Wo = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        G && (this._onDragOver(t), Gm(t));
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
    for (var t = [], r, n = this.el.children, i = 0, o = n.length, a = this.options; i < o; i++)
      r = n[i], qt(r, a.draggable, this.el, !1) && t.push(r.getAttribute(a.dataIdAttr) || Qm(r));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, r) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(o, a) {
      var u = i.children[a];
      qt(u, this.options.draggable, i, !1) && (n[o] = u);
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
    return qt(t, r || this.options.draggable, this.el, !1);
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
    var i = ti.modifyOption(this, t, r);
    typeof i < "u" ? n[t] = i : n[t] = r, t === "group" && Nc(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    xt("destroy", this);
    var t = this.el;
    t[At] = null, xe(t, "mousedown", this._onTapStart), xe(t, "touchstart", this._onTapStart), xe(t, "pointerdown", this._onTapStart), this.nativeDraggable && (xe(t, "dragover", this), xe(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ro.splice(ro.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!On) {
      if (xt("hideClone", this), fe.eventCanceled) return;
      ce(Ue, "display", "none"), this.options.removeCloneOnHide && Ue.parentNode && Ue.parentNode.removeChild(Ue), On = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (On) {
      if (xt("showClone", this), fe.eventCanceled) return;
      G.parentNode == qe && !this.options.group.revertClone ? qe.insertBefore(Ue, G) : Ln ? qe.insertBefore(Ue, Ln) : qe.appendChild(Ue), this.options.group.revertClone && this.animate(G, Ue), ce(Ue, "display", ""), On = !1;
    }
  }
};
function Gm(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ai(e, t, r, n, i, o, a, u) {
  var s, l = e[At], f = l.options.onMove, p;
  return window.CustomEvent && !hn && !ei ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = r, s.draggedRect = n, s.related = i || t, s.relatedRect = o || et(t), s.willInsertAfter = u, s.originalEvent = a, e.dispatchEvent(s), f && (p = f.call(l, s, a)), p;
}
function Go(e) {
  e.draggable = !1;
}
function Km() {
  is = !1;
}
function zm(e, t, r) {
  var n = et(vr(r.el, 0, r.options, !0)), i = kc(r.el, r.options, he), o = 10;
  return t ? e.clientX < i.left - o || e.clientY < n.top && e.clientX < n.right : e.clientY < i.top - o || e.clientY < n.bottom && e.clientX < n.left;
}
function Ym(e, t, r) {
  var n = et(vs(r.el, r.options.draggable)), i = kc(r.el, r.options, he), o = 10;
  return t ? e.clientX > i.right + o || e.clientY > n.bottom && e.clientX > n.left : e.clientY > i.bottom + o || e.clientX > n.right && e.clientY > n.top;
}
function Xm(e, t, r, n, i, o, a, u) {
  var s = n ? e.clientY : e.clientX, l = n ? r.height : r.width, f = n ? r.top : r.left, p = n ? r.bottom : r.right, m = !1;
  if (!a) {
    if (u && Vi < l * i) {
      if (!zr && (Kr === 1 ? s > f + l * o / 2 : s < p - l * o / 2) && (zr = !0), zr)
        m = !0;
      else if (Kr === 1 ? s < f + Vi : s > p - Vi)
        return -Kr;
    } else if (s > f + l * (1 - i) / 2 && s < p - l * (1 - i) / 2)
      return Jm(t);
  }
  return m = m || a, m && (s < f + l * o / 2 || s > p - l * o / 2) ? s > f + l / 2 ? 1 : -1 : 0;
}
function Jm(e) {
  return Nt(G) < Nt(e) ? 1 : -1;
}
function Qm(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, r = t.length, n = 0; r--; )
    n += t.charCodeAt(r);
  return n.toString(36);
}
function Zm(e) {
  io.length = 0;
  for (var t = e.getElementsByTagName("input"), r = t.length; r--; ) {
    var n = t[r];
    n.checked && io.push(n);
  }
}
function Wi(e) {
  return setTimeout(e, 0);
}
function os(e) {
  return clearTimeout(e);
}
po && Oe(document, "touchmove", function(e) {
  (fe.active || cr) && e.cancelable && e.preventDefault();
});
fe.utils = {
  on: Oe,
  off: xe,
  css: ce,
  find: Cc,
  is: function(t, r) {
    return !!qt(t, r, t, !1);
  },
  extend: Nm,
  throttle: Rc,
  closest: qt,
  toggleClass: Pt,
  clone: Tc,
  index: Nt,
  nextTick: Wi,
  cancelNextTick: os,
  detectDirection: $c,
  getChild: vr,
  expando: At
};
fe.get = function(e) {
  return e[At];
};
fe.mount = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (fe.utils = Zt(Zt({}, fe.utils), n.utils)), ti.mount(n);
  });
};
fe.create = function(e, t) {
  return new fe(e, t);
};
fe.version = Im;
var Ze = [], jr, as, ss = !1, Ko, zo, oo, Fr;
function eg() {
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
      this.sortable.nativeDraggable ? Oe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Oe(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? Oe(document, "touchmove", this._handleFallbackAutoScroll) : Oe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var n = r.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? xe(document, "dragover", this._handleAutoScroll) : (xe(document, "pointermove", this._handleFallbackAutoScroll), xe(document, "touchmove", this._handleFallbackAutoScroll), xe(document, "mousemove", this._handleFallbackAutoScroll)), Pl(), Hi(), Mm();
    },
    nulling: function() {
      oo = as = jr = ss = Fr = Ko = zo = null, Ze.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var i = this, o = (r.touches ? r.touches[0] : r).clientX, a = (r.touches ? r.touches[0] : r).clientY, u = document.elementFromPoint(o, a);
      if (oo = r, n || this.options.forceAutoScrollFallback || ei || hn || Wr) {
        Yo(r, this.options, u, n);
        var s = Dn(u, !0);
        ss && (!Fr || o !== Ko || a !== zo) && (Fr && Pl(), Fr = setInterval(function() {
          var l = Dn(document.elementFromPoint(o, a), !0);
          l !== s && (s = l, Hi()), Yo(r, i.options, l, n);
        }, 10), Ko = o, zo = a);
      } else {
        if (!this.options.bubbleScroll || Dn(u, !0) === Jt()) {
          Hi();
          return;
        }
        Yo(r, this.options, Dn(u, !1), !1);
      }
    }
  }, dn(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Hi() {
  Ze.forEach(function(e) {
    clearInterval(e.pid);
  }), Ze = [];
}
function Pl() {
  clearInterval(Fr);
}
var Yo = Rc(function(e, t, r, n) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, u = t.scrollSpeed, s = Jt(), l = !1, f;
    as !== r && (as = r, Hi(), jr = t.scroll, f = t.scrollFn, jr === !0 && (jr = Dn(r, !0)));
    var p = 0, m = jr;
    do {
      var h = m, g = et(h), d = g.top, c = g.bottom, v = g.left, b = g.right, _ = g.width, E = g.height, C = void 0, O = void 0, D = h.scrollWidth, I = h.scrollHeight, M = ce(h), F = h.scrollLeft, B = h.scrollTop;
      h === s ? (C = _ < D && (M.overflowX === "auto" || M.overflowX === "scroll" || M.overflowX === "visible"), O = E < I && (M.overflowY === "auto" || M.overflowY === "scroll" || M.overflowY === "visible")) : (C = _ < D && (M.overflowX === "auto" || M.overflowX === "scroll"), O = E < I && (M.overflowY === "auto" || M.overflowY === "scroll"));
      var W = C && (Math.abs(b - i) <= a && F + _ < D) - (Math.abs(v - i) <= a && !!F), te = O && (Math.abs(c - o) <= a && B + E < I) - (Math.abs(d - o) <= a && !!B);
      if (!Ze[p])
        for (var V = 0; V <= p; V++)
          Ze[V] || (Ze[V] = {});
      (Ze[p].vx != W || Ze[p].vy != te || Ze[p].el !== h) && (Ze[p].el = h, Ze[p].vx = W, Ze[p].vy = te, clearInterval(Ze[p].pid), (W != 0 || te != 0) && (l = !0, Ze[p].pid = setInterval((function() {
        n && this.layer === 0 && fe.active._onTouchMove(oo);
        var q = Ze[this.layer].vy ? Ze[this.layer].vy * u : 0, L = Ze[this.layer].vx ? Ze[this.layer].vx * u : 0;
        typeof f == "function" && f.call(fe.dragged.parentNode[At], L, q, e, oo, Ze[this.layer].el) !== "continue" || Pc(Ze[this.layer].el, L, q);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && m !== s && (m = Dn(m, !1)));
    ss = l;
  }
}, 30), Fc = function(t) {
  var r = t.originalEvent, n = t.putSortable, i = t.dragEl, o = t.activeSortable, a = t.dispatchSortableEvent, u = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (r) {
    var l = n || o;
    u();
    var f = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, p = document.elementFromPoint(f.clientX, f.clientY);
    s(), l && !l.el.contains(p) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function bs() {
}
bs.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var r = t.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = vr(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(r, i) : this.sortable.el.appendChild(r), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Fc
};
dn(bs, {
  pluginName: "revertOnSpill"
});
function ws() {
}
ws.prototype = {
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable, i = n || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: Fc
};
dn(ws, {
  pluginName: "removeOnSpill"
});
fe.mount(new eg());
fe.mount(ws, bs);
function tg(e, t, r = {}) {
  let n;
  const { document: i = hh, ...o } = r, a = {
    onUpdate: (f) => {
      ig(t, f.oldIndex, f.newIndex, f);
    }
  }, u = () => {
    const f = typeof e == "string" ? i == null ? void 0 : i.querySelector(e) : dr(e);
    !f || n !== void 0 || (n = new fe(f, { ...a, ...o }));
  }, s = () => {
    n == null || n.destroy(), n = void 0;
  }, l = (f, p) => {
    if (p !== void 0)
      n == null || n.option(f, p);
    else
      return n == null ? void 0 : n.option(f);
  };
  return dh(u), _c(s), {
    stop: s,
    start: u,
    option: l
  };
}
function ng(e, t, r) {
  const n = e.children[r];
  e.insertBefore(t, n);
}
function rg(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ig(e, t, r, n = null) {
  n != null && (rg(n.item), ng(n.from, n.item, t));
  const i = Nf(e), o = i ? [...ln(e)] : ln(e);
  if (r >= 0 && r < o.length) {
    const a = o.splice(t, 1)[0];
    Xu(() => {
      o.splice(r, 0, a), i && (e.value = o);
    });
  }
}
var Fn = {}, Xo = {}, Tl;
function ho() {
  return Tl || (Tl = 1, function(e) {
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
  }(Xo)), Xo;
}
var Ve = {}, tr = {}, kl;
function _s() {
  if (kl) return tr;
  kl = 1;
  var e = tr.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
        o.__proto__ = a;
      } || function(o, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
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
  Object.defineProperty(tr, "__esModule", { value: !0 }), tr.UnsupportedPlatformError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var o = this, a = "This function is not supported in ".concat(i, " environment");
        return o = r.call(this, a) || this, Error.captureStackTrace && Error.captureStackTrace(o, n), o.name = "UnsupportedPlatformError", o.platform = i, Object.setPrototypeOf(o, n.prototype), o;
      }
      return n;
    }(Error)
  );
  return tr.UnsupportedPlatformError = t, tr;
}
var Jo, Il;
function og() {
  if (Il) return Jo;
  Il = 1;
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
        const a = i[o];
        if (a[0] !== "*") {
          if (!r && a in this._types)
            throw new Error(
              'Attempt to change mapping for "' + a + '" extension from "' + this._types[a] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + a + '" from the list of extensions for "' + n + '".'
            );
          this._types[a] = n;
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
  }, Jo = e, Jo;
}
var Qo, $l;
function ag() {
  return $l || ($l = 1, Qo = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }), Qo;
}
var Zo, Nl;
function sg() {
  if (Nl) return Zo;
  Nl = 1;
  let e = og();
  return Zo = new e(ag()), Zo;
}
const lg = "@kintone/rest-api-client", ug = "5.7.0", cg = { access: "public" }, fg = { name: "Cybozu, Inc.", url: "https://cybozu.co.jp" }, dg = "Kintone REST API client for JavaScript", pg = "lib/src/index.js", hg = "esm/src/index.js", mg = "lib/src/index.browser.js", gg = "lib/src/index.d.ts", yg = { prebuild: "pnpm clean", build: "tsc --build --force", postbuild: "run-p build:*", lint: "eslint 'src/**/*.ts' --max-warnings 0", prepublishOnly: "run-p build:umd_*", test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest", "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand", "build:umd_dev": "rollup -c --environment BUILD:development", "build:umd_prod": "rollup -c --environment BUILD:production", clean: "rimraf lib esm umd", fix: "pnpm lint --fix", start: "pnpm build --watch" }, vg = { type: "git", url: "git+https://github.com/kintone/js-sdk.git", directory: "packages/rest-api-client" }, bg = ["esm", "lib", "umd", "index.mjs"], wg = ["kintone", "rest", "api-client"], _g = "MIT", Sg = { url: "https://github.com/kintone/js-sdk/issues" }, xg = "https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme", Eg = { node: ">=18" }, Og = { "@rollup/plugin-babel": "^6.0.4", "@rollup/plugin-commonjs": "^26.0.3", "@rollup/plugin-json": "^6.1.0", "@rollup/plugin-node-resolve": "^15.3.1", "@rollup/plugin-terser": "^0.4.4", "@types/core-js": "^2.5.8", "@types/js-base64": "^3.3.1", "@types/mime": "^3.0.4", "@types/qs": "^6.9.17", rollup: "^4.30.1", "rollup-plugin-ecma-version-validator": "^0.2.13", "rollup-plugin-license": "^3.5.3", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-polyfill-node": "^0.13.0", webpack: "^5.97.1", "webpack-cli": "^5.1.4", "babel-loader": "^9.2.1", vite: "^5.4.11", rimraf: "^5.0.10", "cross-env": "^7.0.3" }, Ag = { "core-js": "^3.39.0", axios: "^1.7.9", "form-data": "^4.0.1", "js-base64": "^3.7.7", mime: "^3.0.0", qs: "^6.12.3" }, Dg = { ".": { types: { import: "./esm/src/index.d.ts", require: "./lib/src/index.d.ts", default: "./lib/src/index.d.ts" }, node: { import: "./index.mjs", require: "./lib/src/index.js", default: "./lib/src/index.js" }, browser: "./lib/src/index.browser.js" }, "./package.json": "./package.json" }, Cg = {
  name: lg,
  version: ug,
  publishConfig: cg,
  author: fg,
  description: dg,
  main: pg,
  module: hg,
  browser: mg,
  types: gg,
  scripts: yg,
  repository: vg,
  files: bg,
  keywords: wg,
  license: _g,
  bugs: Sg,
  homepage: xg,
  engines: Eg,
  devDependencies: Og,
  dependencies: Ag,
  exports: Dg
};
var Ml;
function Rg() {
  if (Ml) return Ve;
  Ml = 1;
  var e = Ve.__awaiter || function(g, d, c, v) {
    function b(_) {
      return _ instanceof c ? _ : new c(function(E) {
        E(_);
      });
    }
    return new (c || (c = Promise))(function(_, E) {
      function C(I) {
        try {
          D(v.next(I));
        } catch (M) {
          E(M);
        }
      }
      function O(I) {
        try {
          D(v.throw(I));
        } catch (M) {
          E(M);
        }
      }
      function D(I) {
        I.done ? _(I.value) : b(I.value).then(C, O);
      }
      D((v = v.apply(g, d || [])).next());
    });
  }, t = Ve.__generator || function(g, d) {
    var c = { label: 0, sent: function() {
      if (_[0] & 1) throw _[1];
      return _[1];
    }, trys: [], ops: [] }, v, b, _, E = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return E.next = C(0), E.throw = C(1), E.return = C(2), typeof Symbol == "function" && (E[Symbol.iterator] = function() {
      return this;
    }), E;
    function C(D) {
      return function(I) {
        return O([D, I]);
      };
    }
    function O(D) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; E && (E = 0, D[0] && (c = 0)), c; ) try {
        if (v = 1, b && (_ = D[0] & 2 ? b.return : D[0] ? b.throw || ((_ = b.return) && _.call(b), 0) : b.next) && !(_ = _.call(b, D[1])).done) return _;
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
        D = d.call(g, c);
      } catch (I) {
        D = [6, I], b = 0;
      } finally {
        v = _ = 0;
      }
      if (D[0] & 5) throw D[1];
      return { value: D[0] ? D[1] : void 0, done: !0 };
    }
  }, r = Ve.__importDefault || function(g) {
    return g && g.__esModule ? g : { default: g };
  };
  Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.getVersion = Ve.buildBaseUrl = Ve.buildFormDataValue = Ve.buildHeaders = Ve.buildPlatformDependentConfig = Ve.getDefaultAuth = Ve.getRequestToken = Ve.readFileFromPath = void 0;
  var n = _s(), i = r(sg()), o = r(Cg), a = function(g) {
    throw new n.UnsupportedPlatformError("Browser");
  };
  Ve.readFileFromPath = a;
  var u = function() {
    return e(void 0, void 0, void 0, function() {
      var g, d;
      return t(this, function(c) {
        if (typeof kintone == "object" && kintone !== null && typeof kintone.getRequestToken == "function")
          return [2, kintone.getRequestToken()];
        if (typeof garoon == "object" && garoon !== null && typeof ((d = (g = garoon.connect) === null || g === void 0 ? void 0 : g.kintone) === null || d === void 0 ? void 0 : d.getRequestToken) == "function")
          return [2, garoon.connect.kintone.getRequestToken()];
        throw new Error("session authentication must specify a request token");
      });
    });
  };
  Ve.getRequestToken = u;
  var s = function() {
    return {
      type: "session"
    };
  };
  Ve.getDefaultAuth = s;
  var l = function() {
    return {};
  };
  Ve.buildPlatformDependentConfig = l;
  var f = function() {
    return {};
  };
  Ve.buildHeaders = f;
  var p = function(g, d) {
    var c = {};
    return d && (c.type = i.default.getType(d) || void 0), new Blob([g], c);
  };
  Ve.buildFormDataValue = p;
  var m = function(g) {
    if (g)
      return g;
    if (location === void 0)
      throw new Error("The baseUrl parameter is required for this environment");
    var d = location.host, c = location.protocol;
    return "".concat(c, "//").concat(d);
  };
  Ve.buildBaseUrl = m;
  var h = function() {
    return o.default.version;
  };
  return Ve.getVersion = h, Ve;
}
var nr = {}, _n = {}, rr = {}, Tr = {}, jl;
function Pg() {
  if (jl) return Tr;
  jl = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.buildPath = void 0;
  var e = function(t) {
    var r = t.endpointName, n = t.guestSpaceId, i = t.preview, o = n !== void 0 ? "/guest/".concat(n) : "", a = i ? "/preview" : "";
    return "/k".concat(o, "/v1").concat(a, "/").concat(r, ".json");
  };
  return Tr.buildPath = e, Tr;
}
var Fl;
function _r() {
  if (Fl) return rr;
  Fl = 1;
  var e = rr.__assign || function() {
    return e = Object.assign || function(n) {
      for (var i, o = 1, a = arguments.length; o < a; o++) {
        i = arguments[o];
        for (var u in i) Object.prototype.hasOwnProperty.call(i, u) && (n[u] = i[u]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(rr, "__esModule", { value: !0 }), rr.BaseClient = void 0;
  var t = Pg(), r = (
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
  return rr.BaseClient = r, rr;
}
var Bl;
function Tg() {
  if (Bl) return _n;
  Bl = 1;
  var e = _n.__extends || /* @__PURE__ */ function() {
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
  }(), t = _n.__assign || function() {
    return t = Object.assign || function(o) {
      for (var a, u = 1, s = arguments.length; u < s; u++) {
        a = arguments[u];
        for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (o[l] = a[l]);
      }
      return o;
    }, t.apply(this, arguments);
  }, r = _n.__rest || function(o, a) {
    var u = {};
    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && a.indexOf(s) < 0 && (u[s] = o[s]);
    if (o != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, s = Object.getOwnPropertySymbols(o); l < s.length; l++)
        a.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(o, s[l]) && (u[s[l]] = o[s[l]]);
    return u;
  };
  Object.defineProperty(_n, "__esModule", { value: !0 }), _n.BulkRequestClient = void 0;
  var n = _r(), i = (
    /** @class */
    function(o) {
      e(a, o);
      function a(u, s) {
        var l = o.call(this, u, s) || this;
        return l.REQUESTS_LENGTH_LIMIT = 20, l;
      }
      return a.prototype.send = function(u) {
        var s = this, l = u.requests, f = l.map(function(m) {
          if ("endpointName" in m) {
            var h = m.endpointName, g = r(m, ["endpointName"]);
            return t({ api: s.buildPathWithGuestSpaceId({ endpointName: h }) }, g);
          }
          return m;
        }), p = this.buildPathWithGuestSpaceId({
          endpointName: "bulkRequest"
        });
        return this.client.post(p, { requests: f });
      }, a;
    }(n.BaseClient)
  );
  return _n.BulkRequestClient = i, _n;
}
var Kt = {}, ql;
function kg() {
  if (ql) return Kt;
  ql = 1;
  var e = Kt.__extends || /* @__PURE__ */ function() {
    var u = function(s, l) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, p) {
        f.__proto__ = p;
      } || function(f, p) {
        for (var m in p) Object.prototype.hasOwnProperty.call(p, m) && (f[m] = p[m]);
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
  }(), t = Kt.__assign || function() {
    return t = Object.assign || function(u) {
      for (var s, l = 1, f = arguments.length; l < f; l++) {
        s = arguments[l];
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (u[p] = s[p]);
      }
      return u;
    }, t.apply(this, arguments);
  }, r = Kt.__awaiter || function(u, s, l, f) {
    function p(m) {
      return m instanceof l ? m : new l(function(h) {
        h(m);
      });
    }
    return new (l || (l = Promise))(function(m, h) {
      function g(v) {
        try {
          c(f.next(v));
        } catch (b) {
          h(b);
        }
      }
      function d(v) {
        try {
          c(f.throw(v));
        } catch (b) {
          h(b);
        }
      }
      function c(v) {
        v.done ? m(v.value) : p(v.value).then(g, d);
      }
      c((f = f.apply(u, s || [])).next());
    });
  }, n = Kt.__generator || function(u, s) {
    var l = { label: 0, sent: function() {
      if (m[0] & 1) throw m[1];
      return m[1];
    }, trys: [], ops: [] }, f, p, m, h = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return h.next = g(0), h.throw = g(1), h.return = g(2), typeof Symbol == "function" && (h[Symbol.iterator] = function() {
      return this;
    }), h;
    function g(c) {
      return function(v) {
        return d([c, v]);
      };
    }
    function d(c) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; h && (h = 0, c[0] && (l = 0)), l; ) try {
        if (f = 1, p && (m = c[0] & 2 ? p.return : c[0] ? p.throw || ((m = p.return) && m.call(p), 0) : p.next) && !(m = m.call(p, c[1])).done) return m;
        switch (p = 0, m && (c = [c[0] & 2, m.value]), c[0]) {
          case 0:
          case 1:
            m = c;
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
            if (m = l.trys, !(m = m.length > 0 && m[m.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              l = 0;
              continue;
            }
            if (c[0] === 3 && (!m || c[1] > m[0] && c[1] < m[3])) {
              l.label = c[1];
              break;
            }
            if (c[0] === 6 && l.label < m[1]) {
              l.label = m[1], m = c;
              break;
            }
            if (m && l.label < m[2]) {
              l.label = m[2], l.ops.push(c);
              break;
            }
            m[2] && l.ops.pop(), l.trys.pop();
            continue;
        }
        c = s.call(u, l);
      } catch (v) {
        c = [6, v], p = 0;
      } finally {
        f = m = 0;
      }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
  }, i = Kt.__rest || function(u, s) {
    var l = {};
    for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && s.indexOf(f) < 0 && (l[f] = u[f]);
    if (u != null && typeof Object.getOwnPropertySymbols == "function")
      for (var p = 0, f = Object.getOwnPropertySymbols(u); p < f.length; p++)
        s.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(u, f[p]) && (l[f[p]] = u[f[p]]);
    return l;
  };
  Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.AppClient = void 0;
  var o = _r(), a = (
    /** @class */
    function(u) {
      e(s, u);
      function s() {
        return u !== null && u.apply(this, arguments) || this;
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
          var f, p, m, h, g;
          return n(this, function(d) {
            switch (d.label) {
              case 0:
                return f = l.name, p = l.space, m = this.buildPathWithGuestSpaceId({
                  endpointName: "app",
                  preview: !0
                }), p ? (h = this.buildPathWithGuestSpaceId({
                  endpointName: "space"
                }), [4, this.client.get(h, {
                  id: p
                })]) : [3, 2];
              case 1:
                return g = d.sent().defaultThread, [2, this.client.post(m, t(t({}, l), { thread: g }))];
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
  return Kt.AppClient = a, Kt;
}
var Bt = {}, kr = {}, ir = {}, Ll;
function Ig() {
  if (Ll) return ir;
  Ll = 1;
  var e = ir.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
        o.__proto__ = a;
      } || function(o, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
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
  Object.defineProperty(ir, "__esModule", { value: !0 }), ir.KintoneAbortSearchError = void 0;
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
  return ir.KintoneAbortSearchError = t, ir;
}
var or = {}, Ul;
function $g() {
  if (Ul) return or;
  Ul = 1;
  var e = or.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
        o.__proto__ = a;
      } || function(o, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
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
  Object.defineProperty(or, "__esModule", { value: !0 }), or.KintoneAllRecordsError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i, o, a, u, s) {
        var l = this, f = a - o.length, p = n.extractErrorIndex(f, u, s), m = n.buildErrorMessage(f, a, p);
        return l = r.call(this, m) || this, l.name = "KintoneAllRecordsError", l.processedRecordsResult = i, l.unprocessedRecords = o, l.error = u, l.errorIndex = p, l.message = m, l.numOfProcessedRecords = f, l.numOfAllRecords = a, Object.setPrototypeOf(l, n.prototype), l;
      }
      return n.parseErrorIndex = function(i) {
        var o = [];
        return Object.keys(i).forEach(function(a) {
          var u = a.match(/records\[(\d+)\]/);
          u && o.push(Number(u[1]));
        }), o.length > 0 ? Math.min.apply(Math, o) : null;
      }, n.extractErrorIndex = function(i, o, a) {
        if (o.bulkRequestIndex !== void 0 && o.errors) {
          var u = n.parseErrorIndex(o.errors);
          if (u !== null)
            return i + o.bulkRequestIndex * a + u;
        }
      }, n.buildErrorMessage = function(i, o, a) {
        var u = "";
        return a !== void 0 && (u = "An error occurred at records[".concat(a, "]. ")), u += "".concat(i, "/").concat(o, " records are processed successfully"), u;
      }, n;
    }(Error)
  );
  return or.KintoneAllRecordsError = t, or;
}
var ar = {}, Vl;
function Ng() {
  if (Vl) return ar;
  Vl = 1;
  var e = ar.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
        o.__proto__ = a;
      } || function(o, a) {
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
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
  Object.defineProperty(ar, "__esModule", { value: !0 }), ar.KintoneRestAPIError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var o = this, a = n.buildErrorResponseDateWithIndex(i), u = a.data, s = a.bulkRequestIndex;
        return o = r.call(this, u.message) || this, o.name = "KintoneRestAPIError", o.id = u.id, o.code = u.code, o.errors = u.errors, o.status = i.status, o.bulkRequestIndex = s, o.headers = i.headers, o.message = "[".concat(i.status, "] [").concat(o.code, "] ").concat(o.message, " (").concat(o.id, ")"), Error.captureStackTrace && Error.captureStackTrace(o, n), Object.setPrototypeOf(o, n.prototype), o;
      }
      return n.findErrorResponseDataWithIndex = function(i) {
        for (var o = 0; o < i.length; o++)
          if (Object.keys(i[o]).length !== 0) {
            var a = i[o];
            return { data: a, bulkRequestIndex: o };
          }
        throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
      }, n.buildErrorResponseDateWithIndex = function(i) {
        return "results" in i.data ? n.findErrorResponseDataWithIndex(i.data.results) : { data: i.data };
      }, n;
    }(Error)
  );
  return ar.KintoneRestAPIError = t, ar;
}
var Wl;
function Ss() {
  return Wl || (Wl = 1, function(e) {
    var t = kr.__createBinding || (Object.create ? function(n, i, o, a) {
      a === void 0 && (a = o);
      var u = Object.getOwnPropertyDescriptor(i, o);
      (!u || ("get" in u ? !i.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
        return i[o];
      } }), Object.defineProperty(n, a, u);
    } : function(n, i, o, a) {
      a === void 0 && (a = o), n[a] = i[o];
    }), r = kr.__exportStar || function(n, i) {
      for (var o in n) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, n, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), r(Ig(), e), r($g(), e), r(Ng(), e);
  }(kr)), kr;
}
var Hl;
function Mg() {
  if (Hl) return Bt;
  Hl = 1;
  var e = Bt.__extends || /* @__PURE__ */ function() {
    var h = function(g, d) {
      return h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, v) {
        c.__proto__ = v;
      } || function(c, v) {
        for (var b in v) Object.prototype.hasOwnProperty.call(v, b) && (c[b] = v[b]);
      }, h(g, d);
    };
    return function(g, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
      h(g, d);
      function c() {
        this.constructor = g;
      }
      g.prototype = d === null ? Object.create(d) : (c.prototype = d.prototype, new c());
    };
  }(), t = Bt.__assign || function() {
    return t = Object.assign || function(h) {
      for (var g, d = 1, c = arguments.length; d < c; d++) {
        g = arguments[d];
        for (var v in g) Object.prototype.hasOwnProperty.call(g, v) && (h[v] = g[v]);
      }
      return h;
    }, t.apply(this, arguments);
  }, r = Bt.__awaiter || function(h, g, d, c) {
    function v(b) {
      return b instanceof d ? b : new d(function(_) {
        _(b);
      });
    }
    return new (d || (d = Promise))(function(b, _) {
      function E(D) {
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
        D.done ? b(D.value) : v(D.value).then(E, C);
      }
      O((c = c.apply(h, g || [])).next());
    });
  }, n = Bt.__generator || function(h, g) {
    var d = { label: 0, sent: function() {
      if (b[0] & 1) throw b[1];
      return b[1];
    }, trys: [], ops: [] }, c, v, b, _ = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return _.next = E(0), _.throw = E(1), _.return = E(2), typeof Symbol == "function" && (_[Symbol.iterator] = function() {
      return this;
    }), _;
    function E(O) {
      return function(D) {
        return C([O, D]);
      };
    }
    function C(O) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; _ && (_ = 0, O[0] && (d = 0)), d; ) try {
        if (c = 1, v && (b = O[0] & 2 ? v.return : O[0] ? v.throw || ((b = v.return) && b.call(v), 0) : v.next) && !(b = b.call(v, O[1])).done) return b;
        switch (v = 0, b && (O = [O[0] & 2, b.value]), O[0]) {
          case 0:
          case 1:
            b = O;
            break;
          case 4:
            return d.label++, { value: O[1], done: !1 };
          case 5:
            d.label++, v = O[1], O = [0];
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
        O = g.call(h, d);
      } catch (D) {
        O = [6, D], v = 0;
      } finally {
        c = b = 0;
      }
      if (O[0] & 5) throw O[1];
      return { value: O[0] ? O[1] : void 0, done: !0 };
    }
  }, i = Bt.__rest || function(h, g) {
    var d = {};
    for (var c in h) Object.prototype.hasOwnProperty.call(h, c) && g.indexOf(c) < 0 && (d[c] = h[c]);
    if (h != null && typeof Object.getOwnPropertySymbols == "function")
      for (var v = 0, c = Object.getOwnPropertySymbols(h); v < c.length; v++)
        g.indexOf(c[v]) < 0 && Object.prototype.propertyIsEnumerable.call(h, c[v]) && (d[c[v]] = h[c[v]]);
    return d;
  }, o = Bt.__spreadArray || function(h, g, d) {
    if (d || arguments.length === 2) for (var c = 0, v = g.length, b; c < v; c++)
      (b || !(c in g)) && (b || (b = Array.prototype.slice.call(g, 0, c)), b[c] = g[c]);
    return h.concat(b || Array.prototype.slice.call(g));
  };
  Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.RecordClient = void 0;
  var a = Ss(), u = _r(), s = 100, l = 100, f = 100, p = 500, m = (
    /** @class */
    function(h) {
      e(g, h);
      function g(d, c, v) {
        var b = h.call(this, d, v) || this;
        return b.bulkRequestClient = c, b.didWarnMaximumOffsetValue = !1, b;
      }
      return g.prototype.getRecord = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.get(c, d);
      }, g.prototype.addRecord = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.post(c, d);
      }, g.prototype.updateRecord = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record"
        });
        return this.client.put(c, d);
      }, g.prototype.upsertRecord = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v, b, _, E, C;
          return n(this, function(O) {
            switch (O.label) {
              case 0:
                return c = d.app, v = d.updateKey, b = d.record, [4, this.getRecords({
                  app: c,
                  query: "".concat(v.field, ' = "').concat(v.value, '"')
                })];
              case 1:
                return _ = O.sent().records, _.length > 0 ? _[0].$id.type !== "__ID__" ? [3, 3] : [4, this.updateRecord(d)] : [3, 4];
              case 2:
                return E = O.sent().revision, [2, { id: _[0].$id.value, revision: E }];
              case 3:
                throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
              case 4:
                return [2, this.addRecord({
                  app: c,
                  record: Object.assign({}, b, (C = {}, C[v.field] = { value: v.value }, C))
                })];
            }
          });
        });
      }, g.prototype.getRecords = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v;
          return n(this, function(b) {
            switch (b.label) {
              case 0:
                return c = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.get(c, d)];
              case 1:
                return v = b.sent(), this.warnMaximumOffsetValueIfNeeded(d.query), [2, v];
            }
          });
        });
      }, g.prototype.warnMaximumOffsetValueIfNeeded = function(d) {
        if (d) {
          var c = /offset\s+(\d+)/i, v = d.match(c);
          !this.didWarnMaximumOffsetValue && v && Number(v[1]) > 1e4 && (this.didWarnMaximumOffsetValue = !0, console.warn("Warning: The maximum offset value will be limited to 10,000 in the future. Please use `createCursor()` and `getRecordsByCursor()` instead."));
        }
      }, g.prototype.addRecords = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v, b, _;
          return n(this, function(E) {
            switch (E.label) {
              case 0:
                return c = this.buildPathWithGuestSpaceId({
                  endpointName: "records"
                }), [4, this.client.post(c, d)];
              case 1:
                return v = E.sent(), b = v.ids, _ = v.revisions, [2, {
                  ids: b,
                  revisions: _,
                  records: b.map(function(C, O) {
                    return { id: C, revision: _[O] };
                  })
                }];
            }
          });
        });
      }, g.prototype.updateRecords = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.put(c, d);
      }, g.prototype.deleteRecords = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records"
        });
        return this.client.delete(c, d);
      }, g.prototype.createCursor = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.post(c, d);
      }, g.prototype.getRecordsByCursor = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.get(c, d);
      }, g.prototype.deleteCursor = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/cursor"
        });
        return this.client.delete(c, d);
      }, g.prototype.getAllRecords = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v, b, _, E, C, O;
          return n(this, function(D) {
            return c = d.condition, v = d.orderBy, b = d.withCursor, _ = b === void 0 ? !0 : b, E = i(d, ["condition", "orderBy", "withCursor"]), v ? _ ? (C = c ? "".concat(c, " ") : "", O = "".concat(C).concat(v ? "order by ".concat(v) : ""), [2, this.getAllRecordsWithCursor(t(t({}, E), { query: O }))]) : [2, this.getAllRecordsWithOffset(t(t({}, E), { orderBy: v, condition: c }))] : [2, this.getAllRecordsWithId(t(t({}, E), { condition: c }))];
          });
        });
      }, g.prototype.getAllRecordsWithId = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v, b, _, E, C, O, D, I, M;
          return n(this, function(F) {
            switch (F.label) {
              case 0:
                c = d.fields, v = d.condition, b = i(d, ["fields", "condition"]), _ = c, _ && _.length > 0 && _.indexOf("$id") === -1 && (_ = o(o([], _, !0), ["$id"], !1)), E = v ? "(".concat(v, ") and ") : "", C = [], O = "0", F.label = 1;
              case 1:
                return D = "".concat(E, "$id > ").concat(O, " order by $id asc limit ").concat(p), [4, this.getRecords(t(t({}, b), { fields: _, query: D }))];
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
      }, g.prototype.getAllRecordsWithOffset = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v, b, _, E, C, O, D;
          return n(this, function(I) {
            switch (I.label) {
              case 0:
                c = d.condition, v = d.orderBy, b = i(d, ["condition", "orderBy"]), _ = c ? "".concat(c, " ") : "", E = [], C = 0, I.label = 1;
              case 1:
                return O = "".concat(_).concat(v ? "order by ".concat(v, " ") : "", "limit ").concat(p, " offset ").concat(C), [4, this.getRecords(t(t({}, b), { query: O }))];
              case 2:
                return D = I.sent(), E = E.concat(D.records), D.records.length < p ? [3, 3] : (C += p, [3, 1]);
              case 3:
                return [2, E];
            }
          });
        });
      }, g.prototype.getAllRecordsWithCursor = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v, b, _;
          return n(this, function(E) {
            switch (E.label) {
              case 0:
                return [4, this.createCursor(d)];
              case 1:
                c = E.sent().id, E.label = 2;
              case 2:
                E.trys.push([2, 6, , 8]), v = [], E.label = 3;
              case 3:
                return [4, this.getRecordsByCursor({ id: c })];
              case 4:
                return b = E.sent(), v = v.concat(b.records), b.next ? [3, 3] : [3, 5];
              case 5:
                return [2, v];
              case 6:
                return _ = E.sent(), [4, this.deleteCursor({ id: c })];
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
      }, g.prototype.addAllRecords = function(d) {
        return r(this, void 0, void 0, function() {
          return n(this, function(c) {
            if (!d.records.every(function(v) {
              return !Array.isArray(v) && v instanceof Object;
            }))
              throw new Error("the `records` parameter must be an array of object.");
            return [2, this.addAllRecordsRecursive(d, d.records.length, [])];
          });
        });
      }, g.prototype.addAllRecordsRecursive = function(d, c, v) {
        return r(this, void 0, void 0, function() {
          var b, _, E, C, O, D;
          return n(this, function(I) {
            switch (I.label) {
              case 0:
                if (b = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * s, _ = d.app, E = d.records, C = E.slice(0, b), C.length === 0)
                  return [2, { records: v }];
                I.label = 1;
              case 1:
                return I.trys.push([1, 3, , 4]), [4, this.addAllRecordsWithBulkRequest({
                  app: _,
                  records: C
                })];
              case 2:
                return O = I.sent(), [3, 4];
              case 3:
                throw D = I.sent(), new a.KintoneAllRecordsError({ records: v }, E, c, D, s);
              case 4:
                return [2, this.addAllRecordsRecursive({
                  app: _,
                  records: E.slice(b)
                }, c, v.concat(O))];
            }
          });
        });
      }, g.prototype.addAllRecordsWithBulkRequest = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v, b;
          return n(this, function(_) {
            switch (_.label) {
              case 0:
                return c = this.separateArrayRecursive(s, [], d.records), v = c.map(function(E) {
                  return {
                    method: "POST",
                    endpointName: "records",
                    payload: {
                      app: d.app,
                      records: E
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: v })];
              case 1:
                return b = _.sent().results, [2, b.map(function(E) {
                  var C = E.ids, O = E.revisions;
                  return C.map(function(D, I) {
                    return { id: D, revision: O[I] };
                  });
                }).reduce(function(E, C) {
                  return E.concat(C);
                }, [])];
            }
          });
        });
      }, g.prototype.updateAllRecords = function(d) {
        return r(this, void 0, void 0, function() {
          return n(this, function(c) {
            return [2, this.updateAllRecordsRecursive(d, d.records.length, [])];
          });
        });
      }, g.prototype.updateAllRecordsRecursive = function(d, c, v) {
        return r(this, void 0, void 0, function() {
          var b, _, E, C, O, D, I;
          return n(this, function(M) {
            switch (M.label) {
              case 0:
                if (b = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * l, _ = d.app, E = d.upsert, C = d.records, O = C.slice(0, b), O.length === 0)
                  return [2, { records: v }];
                M.label = 1;
              case 1:
                return M.trys.push([1, 3, , 4]), [4, this.updateAllRecordsWithBulkRequest({
                  app: _,
                  upsert: E,
                  records: O
                })];
              case 2:
                return D = M.sent(), [3, 4];
              case 3:
                throw I = M.sent(), new a.KintoneAllRecordsError({ records: v }, C, c, I, l);
              case 4:
                return [2, this.updateAllRecordsRecursive({
                  app: _,
                  upsert: E,
                  records: C.slice(b)
                }, c, v.concat(D))];
            }
          });
        });
      }, g.prototype.updateAllRecordsWithBulkRequest = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v, b;
          return n(this, function(_) {
            switch (_.label) {
              case 0:
                return c = this.separateArrayRecursive(l, [], d.records), v = c.map(function(E) {
                  return {
                    method: "PUT",
                    endpointName: "records",
                    payload: {
                      app: d.app,
                      upsert: d.upsert,
                      records: E
                    }
                  };
                }), [4, this.bulkRequestClient.send({ requests: v })];
              case 1:
                return b = _.sent().results, [2, b.map(function(E) {
                  return E.records;
                }).reduce(function(E, C) {
                  return E.concat(C);
                }, [])];
            }
          });
        });
      }, g.prototype.deleteAllRecords = function(d) {
        return this.deleteAllRecordsRecursive(d, d.records.length);
      }, g.prototype.deleteAllRecordsRecursive = function(d, c) {
        return r(this, void 0, void 0, function() {
          var v, b, _, E, C;
          return n(this, function(O) {
            switch (O.label) {
              case 0:
                if (v = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * f, b = d.app, _ = d.records, E = _.slice(0, v), E.length === 0)
                  return [2, {}];
                O.label = 1;
              case 1:
                return O.trys.push([1, 3, , 4]), [4, this.deleteAllRecordsWithBulkRequest({
                  app: b,
                  records: E
                })];
              case 2:
                return O.sent(), [3, 4];
              case 3:
                throw C = O.sent(), new a.KintoneAllRecordsError({}, _, c, C, f);
              case 4:
                return [2, this.deleteAllRecordsRecursive({
                  app: b,
                  records: _.slice(v)
                }, c)];
            }
          });
        });
      }, g.prototype.deleteAllRecordsWithBulkRequest = function(d) {
        return r(this, void 0, void 0, function() {
          var c, v;
          return n(this, function(b) {
            switch (b.label) {
              case 0:
                return c = this.separateArrayRecursive(f, [], d.records), v = c.map(function(_) {
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
                }), [4, this.bulkRequestClient.send({ requests: v })];
              case 1:
                return b.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, g.prototype.separateArrayRecursive = function(d, c, v) {
        var b = v.slice(0, d);
        return b.length === 0 ? c : this.separateArrayRecursive(d, o(o([], c, !0), [b], !1), v.slice(d));
      }, g.prototype.addRecordComment = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.post(c, d);
      }, g.prototype.deleteRecordComment = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/comment"
        });
        return this.client.delete(c, d);
      }, g.prototype.getRecordComments = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/comments"
        });
        return this.client.get(c, d);
      }, g.prototype.updateRecordAssignees = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/assignees"
        });
        return this.client.put(c, d);
      }, g.prototype.updateRecordStatus = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "record/status"
        });
        return this.client.put(c, d);
      }, g.prototype.updateRecordsStatus = function(d) {
        var c = this.buildPathWithGuestSpaceId({
          endpointName: "records/status"
        });
        return this.client.put(c, d);
      }, g;
    }(u.BaseClient)
  );
  return Bt.RecordClient = m, Bt;
}
var sr = {}, Gl;
function jg() {
  if (Gl) return sr;
  Gl = 1;
  var e = sr.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
        a.__proto__ = u;
      } || function(a, u) {
        for (var s in u) Object.prototype.hasOwnProperty.call(u, s) && (a[s] = u[s]);
      }, n(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(i, o);
      function a() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
    };
  }();
  Object.defineProperty(sr, "__esModule", { value: !0 }), sr.SpaceClient = void 0;
  var t = _r(), r = (
    /** @class */
    function(n) {
      e(i, n);
      function i() {
        return n !== null && n.apply(this, arguments) || this;
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
  return sr.SpaceClient = r, sr;
}
var rn = {}, ea, Kl;
function Bc() {
  return Kl || (Kl = 1, ea = typeof self == "object" ? self.FormData : window.FormData), ea;
}
var zl;
function Fg() {
  if (zl) return rn;
  zl = 1;
  var e = rn.__extends || /* @__PURE__ */ function() {
    var l = function(f, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, h) {
        m.__proto__ = h;
      } || function(m, h) {
        for (var g in h) Object.prototype.hasOwnProperty.call(h, g) && (m[g] = h[g]);
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
  }(), t = rn.__awaiter || function(l, f, p, m) {
    function h(g) {
      return g instanceof p ? g : new p(function(d) {
        d(g);
      });
    }
    return new (p || (p = Promise))(function(g, d) {
      function c(_) {
        try {
          b(m.next(_));
        } catch (E) {
          d(E);
        }
      }
      function v(_) {
        try {
          b(m.throw(_));
        } catch (E) {
          d(E);
        }
      }
      function b(_) {
        _.done ? g(_.value) : h(_.value).then(c, v);
      }
      b((m = m.apply(l, f || [])).next());
    });
  }, r = rn.__generator || function(l, f) {
    var p = { label: 0, sent: function() {
      if (g[0] & 1) throw g[1];
      return g[1];
    }, trys: [], ops: [] }, m, h, g, d = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return d.next = c(0), d.throw = c(1), d.return = c(2), typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function c(b) {
      return function(_) {
        return v([b, _]);
      };
    }
    function v(b) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; d && (d = 0, b[0] && (p = 0)), p; ) try {
        if (m = 1, h && (g = b[0] & 2 ? h.return : b[0] ? h.throw || ((g = h.return) && g.call(h), 0) : h.next) && !(g = g.call(h, b[1])).done) return g;
        switch (h = 0, g && (b = [b[0] & 2, g.value]), b[0]) {
          case 0:
          case 1:
            g = b;
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
            if (g = p.trys, !(g = g.length > 0 && g[g.length - 1]) && (b[0] === 6 || b[0] === 2)) {
              p = 0;
              continue;
            }
            if (b[0] === 3 && (!g || b[1] > g[0] && b[1] < g[3])) {
              p.label = b[1];
              break;
            }
            if (b[0] === 6 && p.label < g[1]) {
              p.label = g[1], g = b;
              break;
            }
            if (g && p.label < g[2]) {
              p.label = g[2], p.ops.push(b);
              break;
            }
            g[2] && p.ops.pop(), p.trys.pop();
            continue;
        }
        b = f.call(l, p);
      } catch (_) {
        b = [6, _], h = 0;
      } finally {
        m = g = 0;
      }
      if (b[0] & 5) throw b[1];
      return { value: b[0] ? b[1] : void 0, done: !0 };
    }
  }, n = rn.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(rn, "__esModule", { value: !0 }), rn.FileClient = void 0;
  var i = n(Bc()), o = ho(), a = _s(), u = _r(), s = (
    /** @class */
    function(l) {
      e(f, l);
      function f() {
        return l !== null && l.apply(this, arguments) || this;
      }
      return f.prototype.uploadFile = function(p) {
        return t(this, void 0, void 0, function() {
          var m, h, g, d, _, c, v, b, _, E;
          return r(this, function(C) {
            switch (C.label) {
              case 0:
                if (m = this.buildPathWithGuestSpaceId({
                  endpointName: "file"
                }), h = new i.default(), !("path" in p.file)) return [3, 5];
                C.label = 1;
              case 1:
                return C.trys.push([1, 3, , 4]), [4, o.platformDeps.readFileFromPath(p.file.path)];
              case 2:
                return g = C.sent(), d = g.name, _ = g.data, h.append("file", _, d), [3, 4];
              case 3:
                throw c = C.sent(), c instanceof a.UnsupportedPlatformError ? new Error("uploadFile doesn't allow to accept a file path in ".concat(c.platform, " environment.")) : c;
              case 4:
                return [3, 6];
              case 5:
                v = p.file, b = v.name, _ = v.data, E = o.platformDeps.buildFormDataValue(_, b), h.append("file", E, b), C.label = 6;
              case 6:
                return [2, this.client.postData(m, h)];
            }
          });
        });
      }, f.prototype.downloadFile = function(p) {
        var m = this.buildPathWithGuestSpaceId({
          endpointName: "file"
        });
        return this.client.getData(m, p);
      }, f;
    }(u.BaseClient)
  );
  return rn.FileClient = s, rn;
}
var lr = {}, Yl;
function Bg() {
  if (Yl) return lr;
  Yl = 1;
  var e = lr.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
        a.__proto__ = u;
      } || function(a, u) {
        for (var s in u) Object.prototype.hasOwnProperty.call(u, s) && (a[s] = u[s]);
      }, n(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(i, o);
      function a() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
    };
  }();
  Object.defineProperty(lr, "__esModule", { value: !0 }), lr.PluginClient = void 0;
  var t = _r(), r = (
    /** @class */
    function(n) {
      e(i, n);
      function i() {
        return n !== null && n.apply(this, arguments) || this;
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
  return lr.PluginClient = r, lr;
}
var ta = {}, on = {}, na, Xl;
function qg() {
  if (Xl) return na;
  Xl = 1;
  function e(y, w) {
    return function() {
      return y.apply(w, arguments);
    };
  }
  const { toString: t } = Object.prototype, { getPrototypeOf: r } = Object, n = /* @__PURE__ */ ((y) => (w) => {
    const S = t.call(w);
    return y[S] || (y[S] = S.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), i = (y) => (y = y.toLowerCase(), (w) => n(w) === y), o = (y) => (w) => typeof w === y, { isArray: a } = Array, u = o("undefined");
  function s(y) {
    return y !== null && !u(y) && y.constructor !== null && !u(y.constructor) && m(y.constructor.isBuffer) && y.constructor.isBuffer(y);
  }
  const l = i("ArrayBuffer");
  function f(y) {
    let w;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? w = ArrayBuffer.isView(y) : w = y && y.buffer && l(y.buffer), w;
  }
  const p = o("string"), m = o("function"), h = o("number"), g = (y) => y !== null && typeof y == "object", d = (y) => y === !0 || y === !1, c = (y) => {
    if (n(y) !== "object")
      return !1;
    const w = r(y);
    return (w === null || w === Object.prototype || Object.getPrototypeOf(w) === null) && !(Symbol.toStringTag in y) && !(Symbol.iterator in y);
  }, v = i("Date"), b = i("File"), _ = i("Blob"), E = i("FileList"), C = (y) => g(y) && m(y.pipe), O = (y) => {
    let w;
    return y && (typeof FormData == "function" && y instanceof FormData || m(y.append) && ((w = n(y)) === "formdata" || // detect form-data instance
    w === "object" && m(y.toString) && y.toString() === "[object FormData]"));
  }, D = i("URLSearchParams"), [I, M, F, B] = ["ReadableStream", "Request", "Response", "Headers"].map(i), W = (y) => y.trim ? y.trim() : y.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function te(y, w, { allOwnKeys: S = !1 } = {}) {
    if (y === null || typeof y > "u")
      return;
    let x, A;
    if (typeof y != "object" && (y = [y]), a(y))
      for (x = 0, A = y.length; x < A; x++)
        w.call(null, y[x], x, y);
    else {
      const R = S ? Object.getOwnPropertyNames(y) : Object.keys(y), P = R.length;
      let U;
      for (x = 0; x < P; x++)
        U = R[x], w.call(null, y[U], U, y);
    }
  }
  function V(y, w) {
    w = w.toLowerCase();
    const S = Object.keys(y);
    let x = S.length, A;
    for (; x-- > 0; )
      if (A = S[x], w === A.toLowerCase())
        return A;
    return null;
  }
  const q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Jr, L = (y) => !u(y) && y !== q;
  function Y() {
    const { caseless: y } = L(this) && this || {}, w = {}, S = (x, A) => {
      const R = y && V(w, A) || A;
      c(w[R]) && c(x) ? w[R] = Y(w[R], x) : c(x) ? w[R] = Y({}, x) : a(x) ? w[R] = x.slice() : w[R] = x;
    };
    for (let x = 0, A = arguments.length; x < A; x++)
      arguments[x] && te(arguments[x], S);
    return w;
  }
  const j = (y, w, S, { allOwnKeys: x } = {}) => (te(w, (A, R) => {
    S && m(A) ? y[R] = e(A, S) : y[R] = A;
  }, { allOwnKeys: x }), y), Z = (y) => (y.charCodeAt(0) === 65279 && (y = y.slice(1)), y), re = (y, w, S, x) => {
    y.prototype = Object.create(w.prototype, x), y.prototype.constructor = y, Object.defineProperty(y, "super", {
      value: w.prototype
    }), S && Object.assign(y.prototype, S);
  }, de = (y, w, S, x) => {
    let A, R, P;
    const U = {};
    if (w = w || {}, y == null) return w;
    do {
      for (A = Object.getOwnPropertyNames(y), R = A.length; R-- > 0; )
        P = A[R], (!x || x(P, y, w)) && !U[P] && (w[P] = y[P], U[P] = !0);
      y = S !== !1 && r(y);
    } while (y && (!S || S(y, w)) && y !== Object.prototype);
    return w;
  }, ve = (y, w, S) => {
    y = String(y), (S === void 0 || S > y.length) && (S = y.length), S -= w.length;
    const x = y.indexOf(w, S);
    return x !== -1 && x === S;
  }, Ce = (y) => {
    if (!y) return null;
    if (a(y)) return y;
    let w = y.length;
    if (!h(w)) return null;
    const S = new Array(w);
    for (; w-- > 0; )
      S[w] = y[w];
    return S;
  }, Ae = /* @__PURE__ */ ((y) => (w) => y && w instanceof y)(typeof Uint8Array < "u" && r(Uint8Array)), N = (y, w) => {
    const x = (y && y[Symbol.iterator]).call(y);
    let A;
    for (; (A = x.next()) && !A.done; ) {
      const R = A.value;
      w.call(y, R[0], R[1]);
    }
  }, K = (y, w) => {
    let S;
    const x = [];
    for (; (S = y.exec(w)) !== null; )
      x.push(S);
    return x;
  }, _e = i("HTMLFormElement"), ke = (y) => y.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function(S, x, A) {
      return x.toUpperCase() + A;
    }
  ), Se = (({ hasOwnProperty: y }) => (w, S) => y.call(w, S))(Object.prototype), ne = i("RegExp"), we = (y, w) => {
    const S = Object.getOwnPropertyDescriptors(y), x = {};
    te(S, (A, R) => {
      let P;
      (P = w(A, R, y)) !== !1 && (x[R] = P || A);
    }), Object.defineProperties(y, x);
  }, be = (y) => {
    we(y, (w, S) => {
      if (m(y) && ["arguments", "caller", "callee"].indexOf(S) !== -1)
        return !1;
      const x = y[S];
      if (m(x)) {
        if (w.enumerable = !1, "writable" in w) {
          w.writable = !1;
          return;
        }
        w.set || (w.set = () => {
          throw Error("Can not rewrite read-only method '" + S + "'");
        });
      }
    });
  }, je = (y, w) => {
    const S = {}, x = (A) => {
      A.forEach((R) => {
        S[R] = !0;
      });
    };
    return a(y) ? x(y) : x(String(y).split(w)), S;
  }, it = () => {
  }, wt = (y, w) => y != null && Number.isFinite(y = +y) ? y : w, Ye = "abcdefghijklmnopqrstuvwxyz", st = "0123456789", gt = {
    DIGIT: st,
    ALPHA: Ye,
    ALPHA_DIGIT: Ye + Ye.toUpperCase() + st
  }, mn = (y = 16, w = gt.ALPHA_DIGIT) => {
    let S = "";
    const { length: x } = w;
    for (; y--; )
      S += w[Math.random() * x | 0];
    return S;
  };
  function Lt(y) {
    return !!(y && m(y.append) && y[Symbol.toStringTag] === "FormData" && y[Symbol.iterator]);
  }
  const Dt = (y) => {
    const w = new Array(10), S = (x, A) => {
      if (g(x)) {
        if (w.indexOf(x) >= 0)
          return;
        if (!("toJSON" in x)) {
          w[A] = x;
          const R = a(x) ? [] : {};
          return te(x, (P, U) => {
            const ie = S(P, A + 1);
            !u(ie) && (R[U] = ie);
          }), w[A] = void 0, R;
        }
      }
      return x;
    };
    return S(y, 0);
  }, gn = i("AsyncFunction"), yn = (y) => y && (g(y) || m(y)) && m(y.then) && m(y.catch), en = ((y, w) => y ? setImmediate : w ? ((S, x) => (q.addEventListener("message", ({ source: A, data: R }) => {
    A === q && R === S && x.length && x.shift()();
  }, !1), (A) => {
    x.push(A), q.postMessage(S, "*");
  }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(
    typeof setImmediate == "function",
    m(q.postMessage)
  ), yo = typeof queueMicrotask < "u" ? queueMicrotask.bind(q) : typeof process < "u" && process.nextTick || en;
  var $ = {
    isArray: a,
    isArrayBuffer: l,
    isBuffer: s,
    isFormData: O,
    isArrayBufferView: f,
    isString: p,
    isNumber: h,
    isBoolean: d,
    isObject: g,
    isPlainObject: c,
    isReadableStream: I,
    isRequest: M,
    isResponse: F,
    isHeaders: B,
    isUndefined: u,
    isDate: v,
    isFile: b,
    isBlob: _,
    isRegExp: ne,
    isFunction: m,
    isStream: C,
    isURLSearchParams: D,
    isTypedArray: Ae,
    isFileList: E,
    forEach: te,
    merge: Y,
    extend: j,
    trim: W,
    stripBOM: Z,
    inherits: re,
    toFlatObject: de,
    kindOf: n,
    kindOfTest: i,
    endsWith: ve,
    toArray: Ce,
    forEachEntry: N,
    matchAll: K,
    isHTMLForm: _e,
    hasOwnProperty: Se,
    hasOwnProp: Se,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: we,
    freezeMethods: be,
    toObjectSet: je,
    toCamelCase: ke,
    noop: it,
    toFiniteNumber: wt,
    findKey: V,
    global: q,
    isContextDefined: L,
    ALPHABET: gt,
    generateString: mn,
    isSpecCompliantForm: Lt,
    toJSONObject: Dt,
    isAsyncFn: gn,
    isThenable: yn,
    setImmediate: en,
    asap: yo
  };
  function pe(y, w, S, x, A) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = y, this.name = "AxiosError", w && (this.code = w), S && (this.config = S), x && (this.request = x), A && (this.response = A, this.status = A.status ? A.status : null);
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
  const ni = pe.prototype, vn = {};
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
  ].forEach((y) => {
    vn[y] = { value: y };
  }), Object.defineProperties(pe, vn), Object.defineProperty(ni, "isAxiosError", { value: !0 }), pe.from = (y, w, S, x, A, R) => {
    const P = Object.create(ni);
    return $.toFlatObject(y, P, function(ie) {
      return ie !== Error.prototype;
    }, (U) => U !== "isAxiosError"), pe.call(P, y.message, w, S, x, A), P.cause = y, P.name = y.name, R && Object.assign(P, R), P;
  };
  var xr = null;
  function Un(y) {
    return $.isPlainObject(y) || $.isArray(y);
  }
  function ri(y) {
    return $.endsWith(y, "[]") ? y.slice(0, -2) : y;
  }
  function ii(y, w, S) {
    return y ? y.concat(w).map(function(A, R) {
      return A = ri(A), !S && R ? "[" + A + "]" : A;
    }).join(S ? "." : "") : w;
  }
  function Er(y) {
    return $.isArray(y) && !y.some(Un);
  }
  const Vn = $.toFlatObject($, {}, null, function(w) {
    return /^is[A-Z]/.test(w);
  });
  function T(y, w, S) {
    if (!$.isObject(y))
      throw new TypeError("target must be an object");
    w = w || new FormData(), S = $.toFlatObject(S, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(ye, se) {
      return !$.isUndefined(se[ye]);
    });
    const x = S.metaTokens, A = S.visitor || Q, R = S.dots, P = S.indexes, ie = (S.Blob || typeof Blob < "u" && Blob) && $.isSpecCompliantForm(w);
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
    function Q(ae, ye, se) {
      let Ke = ae;
      if (ae && !se && typeof ae == "object") {
        if ($.endsWith(ye, "{}"))
          ye = x ? ye : ye.slice(0, -2), ae = JSON.stringify(ae);
        else if ($.isArray(ae) && Er(ae) || ($.isFileList(ae) || $.endsWith(ye, "[]")) && (Ke = $.toArray(ae)))
          return ye = ri(ye), Ke.forEach(function(ot, nn) {
            !($.isUndefined(ot) || ot === null) && w.append(
              // eslint-disable-next-line no-nested-ternary
              P === !0 ? ii([ye], nn, R) : P === null ? ye : ye + "[]",
              J(ot)
            );
          }), !1;
      }
      return Un(ae) ? !0 : (w.append(ii(se, ye, R), J(ae)), !1);
    }
    const oe = [], Fe = Object.assign(Vn, {
      defaultVisitor: Q,
      convertValue: J,
      isVisitable: Un
    });
    function tt(ae, ye) {
      if (!$.isUndefined(ae)) {
        if (oe.indexOf(ae) !== -1)
          throw Error("Circular reference detected in " + ye.join("."));
        oe.push(ae), $.forEach(ae, function(Ke, nt) {
          (!($.isUndefined(Ke) || Ke === null) && A.call(
            w,
            Ke,
            $.isString(nt) ? nt.trim() : nt,
            ye,
            Fe
          )) === !0 && tt(Ke, ye ? ye.concat(nt) : [nt]);
        }), oe.pop();
      }
    }
    if (!$.isObject(y))
      throw new TypeError("data must be an object");
    return tt(y), w;
  }
  function k(y) {
    const w = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(y).replace(/[!'()~]|%20|%00/g, function(x) {
      return w[x];
    });
  }
  function Ee(y, w) {
    this._pairs = [], y && T(y, this, w);
  }
  const Ie = Ee.prototype;
  Ie.append = function(w, S) {
    this._pairs.push([w, S]);
  }, Ie.toString = function(w) {
    const S = w ? function(x) {
      return w.call(this, x, k);
    } : k;
    return this._pairs.map(function(A) {
      return S(A[0]) + "=" + S(A[1]);
    }, "").join("&");
  };
  function Me(y) {
    return encodeURIComponent(y).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function me(y, w, S) {
    if (!w)
      return y;
    const x = S && S.encode || Me;
    $.isFunction(S) && (S = {
      serialize: S
    });
    const A = S && S.serialize;
    let R;
    if (A ? R = A(w, S) : R = $.isURLSearchParams(w) ? w.toString() : new Ee(w, S).toString(x), R) {
      const P = y.indexOf("#");
      P !== -1 && (y = y.slice(0, P)), y += (y.indexOf("?") === -1 ? "?" : "&") + R;
    }
    return y;
  }
  class Ut {
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
    use(w, S, x) {
      return this.handlers.push({
        fulfilled: w,
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
      $.forEach(this.handlers, function(x) {
        x !== null && w(x);
      });
    }
  }
  var Vt = Ut, pt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }, Wt = typeof URLSearchParams < "u" ? URLSearchParams : Ee, Or = typeof FormData < "u" ? FormData : null, bn = typeof Blob < "u" ? Blob : null, Ct = {
    isBrowser: !0,
    classes: {
      URLSearchParams: Wt,
      FormData: Or,
      Blob: bn
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const Wn = typeof window < "u" && typeof document < "u", Hn = typeof navigator == "object" && navigator || void 0, oi = Wn && (!Hn || ["ReactNative", "NativeScript", "NS"].indexOf(Hn.product) < 0), Pn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ar = Wn && window.location.href || "http://localhost";
  var Gn = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    hasBrowserEnv: Wn,
    hasStandardBrowserWebWorkerEnv: Pn,
    hasStandardBrowserEnv: oi,
    navigator: Hn,
    origin: Ar
  }), Xe = {
    ...Gn,
    ...Ct
  };
  function Dr(y, w) {
    return T(y, new Xe.classes.URLSearchParams(), Object.assign({
      visitor: function(S, x, A, R) {
        return Xe.isNode && $.isBuffer(S) ? (this.append(x, S.toString("base64")), !1) : R.defaultVisitor.apply(this, arguments);
      }
    }, w));
  }
  function ai(y) {
    return $.matchAll(/\w+|\[(\w*)]/g, y).map((w) => w[0] === "[]" ? "" : w[1] || w[0]);
  }
  function si(y) {
    const w = {}, S = Object.keys(y);
    let x;
    const A = S.length;
    let R;
    for (x = 0; x < A; x++)
      R = S[x], w[R] = y[R];
    return w;
  }
  function Kn(y) {
    function w(S, x, A, R) {
      let P = S[R++];
      if (P === "__proto__") return !0;
      const U = Number.isFinite(+P), ie = R >= S.length;
      return P = !P && $.isArray(A) ? A.length : P, ie ? ($.hasOwnProp(A, P) ? A[P] = [A[P], x] : A[P] = x, !U) : ((!A[P] || !$.isObject(A[P])) && (A[P] = []), w(S, x, A[P], R) && $.isArray(A[P]) && (A[P] = si(A[P])), !U);
    }
    if ($.isFormData(y) && $.isFunction(y.entries)) {
      const S = {};
      return $.forEachEntry(y, (x, A) => {
        w(ai(x), A, S, 0);
      }), S;
    }
    return null;
  }
  function li(y, w, S) {
    if ($.isString(y))
      try {
        return (w || JSON.parse)(y), $.trim(y);
      } catch (x) {
        if (x.name !== "SyntaxError")
          throw x;
      }
    return (0, JSON.stringify)(y);
  }
  const Tn = {
    transitional: pt,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(w, S) {
      const x = S.getContentType() || "", A = x.indexOf("application/json") > -1, R = $.isObject(w);
      if (R && $.isHTMLForm(w) && (w = new FormData(w)), $.isFormData(w))
        return A ? JSON.stringify(Kn(w)) : w;
      if ($.isArrayBuffer(w) || $.isBuffer(w) || $.isStream(w) || $.isFile(w) || $.isBlob(w) || $.isReadableStream(w))
        return w;
      if ($.isArrayBufferView(w))
        return w.buffer;
      if ($.isURLSearchParams(w))
        return S.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), w.toString();
      let U;
      if (R) {
        if (x.indexOf("application/x-www-form-urlencoded") > -1)
          return Dr(w, this.formSerializer).toString();
        if ((U = $.isFileList(w)) || x.indexOf("multipart/form-data") > -1) {
          const ie = this.env && this.env.FormData;
          return T(
            U ? { "files[]": w } : w,
            ie && new ie(),
            this.formSerializer
          );
        }
      }
      return R || A ? (S.setContentType("application/json", !1), li(w)) : w;
    }],
    transformResponse: [function(w) {
      const S = this.transitional || Tn.transitional, x = S && S.forcedJSONParsing, A = this.responseType === "json";
      if ($.isResponse(w) || $.isReadableStream(w))
        return w;
      if (w && $.isString(w) && (x && !this.responseType || A)) {
        const P = !(S && S.silentJSONParsing) && A;
        try {
          return JSON.parse(w);
        } catch (U) {
          if (P)
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
      FormData: Xe.classes.FormData,
      Blob: Xe.classes.Blob
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
  $.forEach(["delete", "get", "head", "post", "put", "patch"], (y) => {
    Tn.headers[y] = {};
  });
  var zn = Tn;
  const vo = $.toObjectSet([
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
  var Cr = (y) => {
    const w = {};
    let S, x, A;
    return y && y.split(`
`).forEach(function(P) {
      A = P.indexOf(":"), S = P.substring(0, A).trim().toLowerCase(), x = P.substring(A + 1).trim(), !(!S || w[S] && vo[S]) && (S === "set-cookie" ? w[S] ? w[S].push(x) : w[S] = [x] : w[S] = w[S] ? w[S] + ", " + x : x);
    }), w;
  };
  const tn = Symbol("internals");
  function Ht(y) {
    return y && String(y).trim().toLowerCase();
  }
  function Yn(y) {
    return y === !1 || y == null ? y : $.isArray(y) ? y.map(Yn) : String(y);
  }
  function ui(y) {
    const w = /* @__PURE__ */ Object.create(null), S = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let x;
    for (; x = S.exec(y); )
      w[x[1]] = x[2];
    return w;
  }
  const Yc = (y) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(y.trim());
  function bo(y, w, S, x, A) {
    if ($.isFunction(x))
      return x.call(this, w, S);
    if (A && (w = S), !!$.isString(w)) {
      if ($.isString(x))
        return w.indexOf(x) !== -1;
      if ($.isRegExp(x))
        return x.test(w);
    }
  }
  function Xc(y) {
    return y.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, S, x) => S.toUpperCase() + x);
  }
  function Jc(y, w) {
    const S = $.toCamelCase(" " + w);
    ["get", "set", "has"].forEach((x) => {
      Object.defineProperty(y, x + S, {
        value: function(A, R, P) {
          return this[x].call(this, w, A, R, P);
        },
        configurable: !0
      });
    });
  }
  class ci {
    constructor(w) {
      w && this.set(w);
    }
    set(w, S, x) {
      const A = this;
      function R(U, ie, J) {
        const Q = Ht(ie);
        if (!Q)
          throw new Error("header name must be a non-empty string");
        const oe = $.findKey(A, Q);
        (!oe || A[oe] === void 0 || J === !0 || J === void 0 && A[oe] !== !1) && (A[oe || ie] = Yn(U));
      }
      const P = (U, ie) => $.forEach(U, (J, Q) => R(J, Q, ie));
      if ($.isPlainObject(w) || w instanceof this.constructor)
        P(w, S);
      else if ($.isString(w) && (w = w.trim()) && !Yc(w))
        P(Cr(w), S);
      else if ($.isHeaders(w))
        for (const [U, ie] of w.entries())
          R(ie, U, x);
      else
        w != null && R(S, w, x);
      return this;
    }
    get(w, S) {
      if (w = Ht(w), w) {
        const x = $.findKey(this, w);
        if (x) {
          const A = this[x];
          if (!S)
            return A;
          if (S === !0)
            return ui(A);
          if ($.isFunction(S))
            return S.call(this, A, x);
          if ($.isRegExp(S))
            return S.exec(A);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(w, S) {
      if (w = Ht(w), w) {
        const x = $.findKey(this, w);
        return !!(x && this[x] !== void 0 && (!S || bo(this, this[x], x, S)));
      }
      return !1;
    }
    delete(w, S) {
      const x = this;
      let A = !1;
      function R(P) {
        if (P = Ht(P), P) {
          const U = $.findKey(x, P);
          U && (!S || bo(x, x[U], U, S)) && (delete x[U], A = !0);
        }
      }
      return $.isArray(w) ? w.forEach(R) : R(w), A;
    }
    clear(w) {
      const S = Object.keys(this);
      let x = S.length, A = !1;
      for (; x--; ) {
        const R = S[x];
        (!w || bo(this, this[R], R, w, !0)) && (delete this[R], A = !0);
      }
      return A;
    }
    normalize(w) {
      const S = this, x = {};
      return $.forEach(this, (A, R) => {
        const P = $.findKey(x, R);
        if (P) {
          S[P] = Yn(A), delete S[R];
          return;
        }
        const U = w ? Xc(R) : String(R).trim();
        U !== R && delete S[R], S[U] = Yn(A), x[U] = !0;
      }), this;
    }
    concat(...w) {
      return this.constructor.concat(this, ...w);
    }
    toJSON(w) {
      const S = /* @__PURE__ */ Object.create(null);
      return $.forEach(this, (x, A) => {
        x != null && x !== !1 && (S[A] = w && $.isArray(x) ? x.join(", ") : x);
      }), S;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([w, S]) => w + ": " + S).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(w) {
      return w instanceof this ? w : new this(w);
    }
    static concat(w, ...S) {
      const x = new this(w);
      return S.forEach((A) => x.set(A)), x;
    }
    static accessor(w) {
      const x = (this[tn] = this[tn] = {
        accessors: {}
      }).accessors, A = this.prototype;
      function R(P) {
        const U = Ht(P);
        x[U] || (Jc(A, P), x[U] = !0);
      }
      return $.isArray(w) ? w.forEach(R) : R(w), this;
    }
  }
  ci.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), $.reduceDescriptors(ci.prototype, ({ value: y }, w) => {
    let S = w[0].toUpperCase() + w.slice(1);
    return {
      get: () => y,
      set(x) {
        this[S] = x;
      }
    };
  }), $.freezeMethods(ci);
  var Mt = ci;
  function wo(y, w) {
    const S = this || zn, x = w || S, A = Mt.from(x.headers);
    let R = x.data;
    return $.forEach(y, function(U) {
      R = U.call(S, R, A.normalize(), w ? w.status : void 0);
    }), A.normalize(), R;
  }
  function As(y) {
    return !!(y && y.__CANCEL__);
  }
  function Xn(y, w, S) {
    pe.call(this, y ?? "canceled", pe.ERR_CANCELED, w, S), this.name = "CanceledError";
  }
  $.inherits(Xn, pe, {
    __CANCEL__: !0
  });
  function Ds(y, w, S) {
    const x = S.config.validateStatus;
    !S.status || !x || x(S.status) ? y(S) : w(new pe(
      "Request failed with status code " + S.status,
      [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(S.status / 100) - 4],
      S.config,
      S.request,
      S
    ));
  }
  function Qc(y) {
    const w = /^([-+\w]{1,25})(:?\/\/|:)/.exec(y);
    return w && w[1] || "";
  }
  function Zc(y, w) {
    y = y || 10;
    const S = new Array(y), x = new Array(y);
    let A = 0, R = 0, P;
    return w = w !== void 0 ? w : 1e3, function(ie) {
      const J = Date.now(), Q = x[R];
      P || (P = J), S[A] = ie, x[A] = J;
      let oe = R, Fe = 0;
      for (; oe !== A; )
        Fe += S[oe++], oe = oe % y;
      if (A = (A + 1) % y, A === R && (R = (R + 1) % y), J - P < w)
        return;
      const tt = Q && J - Q;
      return tt ? Math.round(Fe * 1e3 / tt) : void 0;
    };
  }
  function ef(y, w) {
    let S = 0, x = 1e3 / w, A, R;
    const P = (J, Q = Date.now()) => {
      S = Q, A = null, R && (clearTimeout(R), R = null), y.apply(null, J);
    };
    return [(...J) => {
      const Q = Date.now(), oe = Q - S;
      oe >= x ? P(J, Q) : (A = J, R || (R = setTimeout(() => {
        R = null, P(A);
      }, x - oe)));
    }, () => A && P(A)];
  }
  const fi = (y, w, S = 3) => {
    let x = 0;
    const A = Zc(50, 250);
    return ef((R) => {
      const P = R.loaded, U = R.lengthComputable ? R.total : void 0, ie = P - x, J = A(ie), Q = P <= U;
      x = P;
      const oe = {
        loaded: P,
        total: U,
        progress: U ? P / U : void 0,
        bytes: ie,
        rate: J || void 0,
        estimated: J && U && Q ? (U - P) / J : void 0,
        event: R,
        lengthComputable: U != null,
        [w ? "download" : "upload"]: !0
      };
      y(oe);
    }, S);
  }, Cs = (y, w) => {
    const S = y != null;
    return [(x) => w[0]({
      lengthComputable: S,
      total: y,
      loaded: x
    }), w[1]];
  }, Rs = (y) => (...w) => $.asap(() => y(...w));
  var tf = Xe.hasStandardBrowserEnv ? /* @__PURE__ */ ((y, w) => (S) => (S = new URL(S, Xe.origin), y.protocol === S.protocol && y.host === S.host && (w || y.port === S.port)))(
    new URL(Xe.origin),
    Xe.navigator && /(msie|trident)/i.test(Xe.navigator.userAgent)
  ) : () => !0, nf = Xe.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(y, w, S, x, A, R) {
        const P = [y + "=" + encodeURIComponent(w)];
        $.isNumber(S) && P.push("expires=" + new Date(S).toGMTString()), $.isString(x) && P.push("path=" + x), $.isString(A) && P.push("domain=" + A), R === !0 && P.push("secure"), document.cookie = P.join("; ");
      },
      read(y) {
        const w = document.cookie.match(new RegExp("(^|;\\s*)(" + y + ")=([^;]*)"));
        return w ? decodeURIComponent(w[3]) : null;
      },
      remove(y) {
        this.write(y, "", Date.now() - 864e5);
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
  function rf(y) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(y);
  }
  function of(y, w) {
    return w ? y.replace(/\/?\/$/, "") + "/" + w.replace(/^\/+/, "") : y;
  }
  function Ps(y, w) {
    return y && !rf(w) ? of(y, w) : w;
  }
  const Ts = (y) => y instanceof Mt ? { ...y } : y;
  function kn(y, w) {
    w = w || {};
    const S = {};
    function x(J, Q, oe, Fe) {
      return $.isPlainObject(J) && $.isPlainObject(Q) ? $.merge.call({ caseless: Fe }, J, Q) : $.isPlainObject(Q) ? $.merge({}, Q) : $.isArray(Q) ? Q.slice() : Q;
    }
    function A(J, Q, oe, Fe) {
      if ($.isUndefined(Q)) {
        if (!$.isUndefined(J))
          return x(void 0, J, oe, Fe);
      } else return x(J, Q, oe, Fe);
    }
    function R(J, Q) {
      if (!$.isUndefined(Q))
        return x(void 0, Q);
    }
    function P(J, Q) {
      if ($.isUndefined(Q)) {
        if (!$.isUndefined(J))
          return x(void 0, J);
      } else return x(void 0, Q);
    }
    function U(J, Q, oe) {
      if (oe in w)
        return x(J, Q);
      if (oe in y)
        return x(void 0, J);
    }
    const ie = {
      url: R,
      method: R,
      data: R,
      baseURL: P,
      transformRequest: P,
      transformResponse: P,
      paramsSerializer: P,
      timeout: P,
      timeoutMessage: P,
      withCredentials: P,
      withXSRFToken: P,
      adapter: P,
      responseType: P,
      xsrfCookieName: P,
      xsrfHeaderName: P,
      onUploadProgress: P,
      onDownloadProgress: P,
      decompress: P,
      maxContentLength: P,
      maxBodyLength: P,
      beforeRedirect: P,
      transport: P,
      httpAgent: P,
      httpsAgent: P,
      cancelToken: P,
      socketPath: P,
      responseEncoding: P,
      validateStatus: U,
      headers: (J, Q, oe) => A(Ts(J), Ts(Q), oe, !0)
    };
    return $.forEach(Object.keys(Object.assign({}, y, w)), function(Q) {
      const oe = ie[Q] || A, Fe = oe(y[Q], w[Q], Q);
      $.isUndefined(Fe) && oe !== U || (S[Q] = Fe);
    }), S;
  }
  var ks = (y) => {
    const w = kn({}, y);
    let { data: S, withXSRFToken: x, xsrfHeaderName: A, xsrfCookieName: R, headers: P, auth: U } = w;
    w.headers = P = Mt.from(P), w.url = me(Ps(w.baseURL, w.url), y.params, y.paramsSerializer), U && P.set(
      "Authorization",
      "Basic " + btoa((U.username || "") + ":" + (U.password ? unescape(encodeURIComponent(U.password)) : ""))
    );
    let ie;
    if ($.isFormData(S)) {
      if (Xe.hasStandardBrowserEnv || Xe.hasStandardBrowserWebWorkerEnv)
        P.setContentType(void 0);
      else if ((ie = P.getContentType()) !== !1) {
        const [J, ...Q] = ie ? ie.split(";").map((oe) => oe.trim()).filter(Boolean) : [];
        P.setContentType([J || "multipart/form-data", ...Q].join("; "));
      }
    }
    if (Xe.hasStandardBrowserEnv && (x && $.isFunction(x) && (x = x(w)), x || x !== !1 && tf(w.url))) {
      const J = A && R && nf.read(R);
      J && P.set(A, J);
    }
    return w;
  }, af = typeof XMLHttpRequest < "u" && function(y) {
    return new Promise(function(S, x) {
      const A = ks(y);
      let R = A.data;
      const P = Mt.from(A.headers).normalize();
      let { responseType: U, onUploadProgress: ie, onDownloadProgress: J } = A, Q, oe, Fe, tt, ae;
      function ye() {
        tt && tt(), ae && ae(), A.cancelToken && A.cancelToken.unsubscribe(Q), A.signal && A.signal.removeEventListener("abort", Q);
      }
      let se = new XMLHttpRequest();
      se.open(A.method.toUpperCase(), A.url, !0), se.timeout = A.timeout;
      function Ke() {
        if (!se)
          return;
        const ot = Mt.from(
          "getAllResponseHeaders" in se && se.getAllResponseHeaders()
        ), _t = {
          data: !U || U === "text" || U === "json" ? se.responseText : se.response,
          status: se.status,
          statusText: se.statusText,
          headers: ot,
          config: y,
          request: se
        };
        Ds(function(In) {
          S(In), ye();
        }, function(In) {
          x(In), ye();
        }, _t), se = null;
      }
      "onloadend" in se ? se.onloadend = Ke : se.onreadystatechange = function() {
        !se || se.readyState !== 4 || se.status === 0 && !(se.responseURL && se.responseURL.indexOf("file:") === 0) || setTimeout(Ke);
      }, se.onabort = function() {
        se && (x(new pe("Request aborted", pe.ECONNABORTED, y, se)), se = null);
      }, se.onerror = function() {
        x(new pe("Network Error", pe.ERR_NETWORK, y, se)), se = null;
      }, se.ontimeout = function() {
        let nn = A.timeout ? "timeout of " + A.timeout + "ms exceeded" : "timeout exceeded";
        const _t = A.transitional || pt;
        A.timeoutErrorMessage && (nn = A.timeoutErrorMessage), x(new pe(
          nn,
          _t.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,
          y,
          se
        )), se = null;
      }, R === void 0 && P.setContentType(null), "setRequestHeader" in se && $.forEach(P.toJSON(), function(nn, _t) {
        se.setRequestHeader(_t, nn);
      }), $.isUndefined(A.withCredentials) || (se.withCredentials = !!A.withCredentials), U && U !== "json" && (se.responseType = A.responseType), J && ([Fe, ae] = fi(J, !0), se.addEventListener("progress", Fe)), ie && se.upload && ([oe, tt] = fi(ie), se.upload.addEventListener("progress", oe), se.upload.addEventListener("loadend", tt)), (A.cancelToken || A.signal) && (Q = (ot) => {
        se && (x(!ot || ot.type ? new Xn(null, y, se) : ot), se.abort(), se = null);
      }, A.cancelToken && A.cancelToken.subscribe(Q), A.signal && (A.signal.aborted ? Q() : A.signal.addEventListener("abort", Q)));
      const nt = Qc(A.url);
      if (nt && Xe.protocols.indexOf(nt) === -1) {
        x(new pe("Unsupported protocol " + nt + ":", pe.ERR_BAD_REQUEST, y));
        return;
      }
      se.send(R || null);
    });
  }, sf = (y, w) => {
    const { length: S } = y = y ? y.filter(Boolean) : [];
    if (w || S) {
      let x = new AbortController(), A;
      const R = function(J) {
        if (!A) {
          A = !0, U();
          const Q = J instanceof Error ? J : this.reason;
          x.abort(Q instanceof pe ? Q : new Xn(Q instanceof Error ? Q.message : Q));
        }
      };
      let P = w && setTimeout(() => {
        P = null, R(new pe(`timeout ${w} of ms exceeded`, pe.ETIMEDOUT));
      }, w);
      const U = () => {
        y && (P && clearTimeout(P), P = null, y.forEach((J) => {
          J.unsubscribe ? J.unsubscribe(R) : J.removeEventListener("abort", R);
        }), y = null);
      };
      y.forEach((J) => J.addEventListener("abort", R));
      const { signal: ie } = x;
      return ie.unsubscribe = () => $.asap(U), ie;
    }
  };
  const lf = function* (y, w) {
    let S = y.byteLength;
    if (S < w) {
      yield y;
      return;
    }
    let x = 0, A;
    for (; x < S; )
      A = x + w, yield y.slice(x, A), x = A;
  }, uf = async function* (y, w) {
    for await (const S of cf(y))
      yield* lf(S, w);
  }, cf = async function* (y) {
    if (y[Symbol.asyncIterator]) {
      yield* y;
      return;
    }
    const w = y.getReader();
    try {
      for (; ; ) {
        const { done: S, value: x } = await w.read();
        if (S)
          break;
        yield x;
      }
    } finally {
      await w.cancel();
    }
  }, Is = (y, w, S, x) => {
    const A = uf(y, w);
    let R = 0, P, U = (ie) => {
      P || (P = !0, x && x(ie));
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
          if (S) {
            let Fe = R += oe;
            S(Fe);
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
  }, di = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", $s = di && typeof ReadableStream == "function", ff = di && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((y) => (w) => y.encode(w))(new TextEncoder()) : async (y) => new Uint8Array(await new Response(y).arrayBuffer())), Ns = (y, ...w) => {
    try {
      return !!y(...w);
    } catch {
      return !1;
    }
  }, df = $s && Ns(() => {
    let y = !1;
    const w = new Request(Xe.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return y = !0, "half";
      }
    }).headers.has("Content-Type");
    return y && !w;
  }), Ms = 64 * 1024, _o = $s && Ns(() => $.isReadableStream(new Response("").body)), pi = {
    stream: _o && ((y) => y.body)
  };
  di && ((y) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((w) => {
      !pi[w] && (pi[w] = $.isFunction(y[w]) ? (S) => S[w]() : (S, x) => {
        throw new pe(`Response type '${w}' is not supported`, pe.ERR_NOT_SUPPORT, x);
      });
    });
  })(new Response());
  const pf = async (y) => {
    if (y == null)
      return 0;
    if ($.isBlob(y))
      return y.size;
    if ($.isSpecCompliantForm(y))
      return (await new Request(Xe.origin, {
        method: "POST",
        body: y
      }).arrayBuffer()).byteLength;
    if ($.isArrayBufferView(y) || $.isArrayBuffer(y))
      return y.byteLength;
    if ($.isURLSearchParams(y) && (y = y + ""), $.isString(y))
      return (await ff(y)).byteLength;
  }, hf = async (y, w) => {
    const S = $.toFiniteNumber(y.getContentLength());
    return S ?? pf(w);
  };
  var mf = di && (async (y) => {
    let {
      url: w,
      method: S,
      data: x,
      signal: A,
      cancelToken: R,
      timeout: P,
      onDownloadProgress: U,
      onUploadProgress: ie,
      responseType: J,
      headers: Q,
      withCredentials: oe = "same-origin",
      fetchOptions: Fe
    } = ks(y);
    J = J ? (J + "").toLowerCase() : "text";
    let tt = sf([A, R && R.toAbortSignal()], P), ae;
    const ye = tt && tt.unsubscribe && (() => {
      tt.unsubscribe();
    });
    let se;
    try {
      if (ie && df && S !== "get" && S !== "head" && (se = await hf(Q, x)) !== 0) {
        let _t = new Request(w, {
          method: "POST",
          body: x,
          duplex: "half"
        }), wn;
        if ($.isFormData(x) && (wn = _t.headers.get("content-type")) && Q.setContentType(wn), _t.body) {
          const [In, vi] = Cs(
            se,
            fi(Rs(ie))
          );
          x = Is(_t.body, Ms, In, vi);
        }
      }
      $.isString(oe) || (oe = oe ? "include" : "omit");
      const Ke = "credentials" in Request.prototype;
      ae = new Request(w, {
        ...Fe,
        signal: tt,
        method: S.toUpperCase(),
        headers: Q.normalize().toJSON(),
        body: x,
        duplex: "half",
        credentials: Ke ? oe : void 0
      });
      let nt = await fetch(ae);
      const ot = _o && (J === "stream" || J === "response");
      if (_o && (U || ot && ye)) {
        const _t = {};
        ["status", "statusText", "headers"].forEach((Vs) => {
          _t[Vs] = nt[Vs];
        });
        const wn = $.toFiniteNumber(nt.headers.get("content-length")), [In, vi] = U && Cs(
          wn,
          fi(Rs(U), !0)
        ) || [];
        nt = new Response(
          Is(nt.body, Ms, In, () => {
            vi && vi(), ye && ye();
          }),
          _t
        );
      }
      J = J || "text";
      let nn = await pi[$.findKey(pi, J) || "text"](nt, y);
      return !ot && ye && ye(), await new Promise((_t, wn) => {
        Ds(_t, wn, {
          data: nn,
          headers: Mt.from(nt.headers),
          status: nt.status,
          statusText: nt.statusText,
          config: y,
          request: ae
        });
      });
    } catch (Ke) {
      throw ye && ye(), Ke && Ke.name === "TypeError" && /fetch/i.test(Ke.message) ? Object.assign(
        new pe("Network Error", pe.ERR_NETWORK, y, ae),
        {
          cause: Ke.cause || Ke
        }
      ) : pe.from(Ke, Ke && Ke.code, y, ae);
    }
  });
  const So = {
    http: xr,
    xhr: af,
    fetch: mf
  };
  $.forEach(So, (y, w) => {
    if (y) {
      try {
        Object.defineProperty(y, "name", { value: w });
      } catch {
      }
      Object.defineProperty(y, "adapterName", { value: w });
    }
  });
  const js = (y) => `- ${y}`, gf = (y) => $.isFunction(y) || y === null || y === !1;
  var Fs = {
    getAdapter: (y) => {
      y = $.isArray(y) ? y : [y];
      const { length: w } = y;
      let S, x;
      const A = {};
      for (let R = 0; R < w; R++) {
        S = y[R];
        let P;
        if (x = S, !gf(S) && (x = So[(P = String(S)).toLowerCase()], x === void 0))
          throw new pe(`Unknown adapter '${P}'`);
        if (x)
          break;
        A[P || "#" + R] = x;
      }
      if (!x) {
        const R = Object.entries(A).map(
          ([U, ie]) => `adapter ${U} ` + (ie === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let P = w ? R.length > 1 ? `since :
` + R.map(js).join(`
`) : " " + js(R[0]) : "as no adapter specified";
        throw new pe(
          "There is no suitable adapter to dispatch the request " + P,
          "ERR_NOT_SUPPORT"
        );
      }
      return x;
    },
    adapters: So
  };
  function xo(y) {
    if (y.cancelToken && y.cancelToken.throwIfRequested(), y.signal && y.signal.aborted)
      throw new Xn(null, y);
  }
  function Bs(y) {
    return xo(y), y.headers = Mt.from(y.headers), y.data = wo.call(
      y,
      y.transformRequest
    ), ["post", "put", "patch"].indexOf(y.method) !== -1 && y.headers.setContentType("application/x-www-form-urlencoded", !1), Fs.getAdapter(y.adapter || zn.adapter)(y).then(function(x) {
      return xo(y), x.data = wo.call(
        y,
        y.transformResponse,
        x
      ), x.headers = Mt.from(x.headers), x;
    }, function(x) {
      return As(x) || (xo(y), x && x.response && (x.response.data = wo.call(
        y,
        y.transformResponse,
        x.response
      ), x.response.headers = Mt.from(x.response.headers))), Promise.reject(x);
    });
  }
  const qs = "1.7.9", hi = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((y, w) => {
    hi[y] = function(x) {
      return typeof x === y || "a" + (w < 1 ? "n " : " ") + y;
    };
  });
  const Ls = {};
  hi.transitional = function(w, S, x) {
    function A(R, P) {
      return "[Axios v" + qs + "] Transitional option '" + R + "'" + P + (x ? ". " + x : "");
    }
    return (R, P, U) => {
      if (w === !1)
        throw new pe(
          A(P, " has been removed" + (S ? " in " + S : "")),
          pe.ERR_DEPRECATED
        );
      return S && !Ls[P] && (Ls[P] = !0, console.warn(
        A(
          P,
          " has been deprecated since v" + S + " and will be removed in the near future"
        )
      )), w ? w(R, P, U) : !0;
    };
  }, hi.spelling = function(w) {
    return (S, x) => (console.warn(`${x} is likely a misspelling of ${w}`), !0);
  };
  function yf(y, w, S) {
    if (typeof y != "object")
      throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
    const x = Object.keys(y);
    let A = x.length;
    for (; A-- > 0; ) {
      const R = x[A], P = w[R];
      if (P) {
        const U = y[R], ie = U === void 0 || P(U, R, y);
        if (ie !== !0)
          throw new pe("option " + R + " must be " + ie, pe.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (S !== !0)
        throw new pe("Unknown option " + R, pe.ERR_BAD_OPTION);
    }
  }
  var mi = {
    assertOptions: yf,
    validators: hi
  };
  const Gt = mi.validators;
  class gi {
    constructor(w) {
      this.defaults = w, this.interceptors = {
        request: new Vt(),
        response: new Vt()
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
    async request(w, S) {
      try {
        return await this._request(w, S);
      } catch (x) {
        if (x instanceof Error) {
          let A = {};
          Error.captureStackTrace ? Error.captureStackTrace(A) : A = new Error();
          const R = A.stack ? A.stack.replace(/^.+\n/, "") : "";
          try {
            x.stack ? R && !String(x.stack).endsWith(R.replace(/^.+\n.+\n/, "")) && (x.stack += `
` + R) : x.stack = R;
          } catch {
          }
        }
        throw x;
      }
    }
    _request(w, S) {
      typeof w == "string" ? (S = S || {}, S.url = w) : S = w || {}, S = kn(this.defaults, S);
      const { transitional: x, paramsSerializer: A, headers: R } = S;
      x !== void 0 && mi.assertOptions(x, {
        silentJSONParsing: Gt.transitional(Gt.boolean),
        forcedJSONParsing: Gt.transitional(Gt.boolean),
        clarifyTimeoutError: Gt.transitional(Gt.boolean)
      }, !1), A != null && ($.isFunction(A) ? S.paramsSerializer = {
        serialize: A
      } : mi.assertOptions(A, {
        encode: Gt.function,
        serialize: Gt.function
      }, !0)), mi.assertOptions(S, {
        baseUrl: Gt.spelling("baseURL"),
        withXsrfToken: Gt.spelling("withXSRFToken")
      }, !0), S.method = (S.method || this.defaults.method || "get").toLowerCase();
      let P = R && $.merge(
        R.common,
        R[S.method]
      );
      R && $.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (ae) => {
          delete R[ae];
        }
      ), S.headers = Mt.concat(P, R);
      const U = [];
      let ie = !0;
      this.interceptors.request.forEach(function(ye) {
        typeof ye.runWhen == "function" && ye.runWhen(S) === !1 || (ie = ie && ye.synchronous, U.unshift(ye.fulfilled, ye.rejected));
      });
      const J = [];
      this.interceptors.response.forEach(function(ye) {
        J.push(ye.fulfilled, ye.rejected);
      });
      let Q, oe = 0, Fe;
      if (!ie) {
        const ae = [Bs.bind(this), void 0];
        for (ae.unshift.apply(ae, U), ae.push.apply(ae, J), Fe = ae.length, Q = Promise.resolve(S); oe < Fe; )
          Q = Q.then(ae[oe++], ae[oe++]);
        return Q;
      }
      Fe = U.length;
      let tt = S;
      for (oe = 0; oe < Fe; ) {
        const ae = U[oe++], ye = U[oe++];
        try {
          tt = ae(tt);
        } catch (se) {
          ye.call(this, se);
          break;
        }
      }
      try {
        Q = Bs.call(this, tt);
      } catch (ae) {
        return Promise.reject(ae);
      }
      for (oe = 0, Fe = J.length; oe < Fe; )
        Q = Q.then(J[oe++], J[oe++]);
      return Q;
    }
    getUri(w) {
      w = kn(this.defaults, w);
      const S = Ps(w.baseURL, w.url);
      return me(S, w.params, w.paramsSerializer);
    }
  }
  $.forEach(["delete", "get", "head", "options"], function(w) {
    gi.prototype[w] = function(S, x) {
      return this.request(kn(x || {}, {
        method: w,
        url: S,
        data: (x || {}).data
      }));
    };
  }), $.forEach(["post", "put", "patch"], function(w) {
    function S(x) {
      return function(R, P, U) {
        return this.request(kn(U || {}, {
          method: w,
          headers: x ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: R,
          data: P
        }));
      };
    }
    gi.prototype[w] = S(), gi.prototype[w + "Form"] = S(!0);
  });
  var yi = gi;
  class Eo {
    constructor(w) {
      if (typeof w != "function")
        throw new TypeError("executor must be a function.");
      let S;
      this.promise = new Promise(function(R) {
        S = R;
      });
      const x = this;
      this.promise.then((A) => {
        if (!x._listeners) return;
        let R = x._listeners.length;
        for (; R-- > 0; )
          x._listeners[R](A);
        x._listeners = null;
      }), this.promise.then = (A) => {
        let R;
        const P = new Promise((U) => {
          x.subscribe(U), R = U;
        }).then(A);
        return P.cancel = function() {
          x.unsubscribe(R);
        }, P;
      }, w(function(R, P, U) {
        x.reason || (x.reason = new Xn(R, P, U), S(x.reason));
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
      const S = this._listeners.indexOf(w);
      S !== -1 && this._listeners.splice(S, 1);
    }
    toAbortSignal() {
      const w = new AbortController(), S = (x) => {
        w.abort(x);
      };
      return this.subscribe(S), w.signal.unsubscribe = () => this.unsubscribe(S), w.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let w;
      return {
        token: new Eo(function(A) {
          w = A;
        }),
        cancel: w
      };
    }
  }
  var vf = Eo;
  function bf(y) {
    return function(S) {
      return y.apply(null, S);
    };
  }
  function wf(y) {
    return $.isObject(y) && y.isAxiosError === !0;
  }
  const Oo = {
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
  Object.entries(Oo).forEach(([y, w]) => {
    Oo[w] = y;
  });
  var _f = Oo;
  function Us(y) {
    const w = new yi(y), S = e(yi.prototype.request, w);
    return $.extend(S, yi.prototype, w, { allOwnKeys: !0 }), $.extend(S, w, null, { allOwnKeys: !0 }), S.create = function(A) {
      return Us(kn(y, A));
    }, S;
  }
  const Je = Us(zn);
  return Je.Axios = yi, Je.CanceledError = Xn, Je.CancelToken = vf, Je.isCancel = As, Je.VERSION = qs, Je.toFormData = T, Je.AxiosError = pe, Je.Cancel = Je.CanceledError, Je.all = function(w) {
    return Promise.all(w);
  }, Je.spread = bf, Je.isAxiosError = wf, Je.mergeConfig = kn, Je.AxiosHeaders = Mt, Je.formToJSON = (y) => Kn($.isHTMLForm(y) ? new FormData(y) : y), Je.getAdapter = Fs.getAdapter, Je.HttpStatusCode = _f, Je.default = Je, na = Je, na;
}
var Jl;
function Lg() {
  if (Jl) return on;
  Jl = 1;
  var e = on.__assign || function() {
    return e = Object.assign || function(a) {
      for (var u, s = 1, l = arguments.length; s < l; s++) {
        u = arguments[s];
        for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (a[f] = u[f]);
      }
      return a;
    }, e.apply(this, arguments);
  }, t = on.__awaiter || function(a, u, s, l) {
    function f(p) {
      return p instanceof s ? p : new s(function(m) {
        m(p);
      });
    }
    return new (s || (s = Promise))(function(p, m) {
      function h(c) {
        try {
          d(l.next(c));
        } catch (v) {
          m(v);
        }
      }
      function g(c) {
        try {
          d(l.throw(c));
        } catch (v) {
          m(v);
        }
      }
      function d(c) {
        c.done ? p(c.value) : f(c.value).then(h, g);
      }
      d((l = l.apply(a, u || [])).next());
    });
  }, r = on.__generator || function(a, u) {
    var s = { label: 0, sent: function() {
      if (p[0] & 1) throw p[1];
      return p[1];
    }, trys: [], ops: [] }, l, f, p, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return m.next = h(0), m.throw = h(1), m.return = h(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function h(d) {
      return function(c) {
        return g([d, c]);
      };
    }
    function g(d) {
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
        d = u.call(a, s);
      } catch (c) {
        d = [6, c], f = 0;
      } finally {
        l = p = 0;
      }
      if (d[0] & 5) throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, n = on.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(on, "__esModule", { value: !0 }), on.AxiosClient = void 0;
  var i = n(/* @__PURE__ */ qg()), o = (
    /** @class */
    function() {
      function a(u) {
        var s = u.responseHandler, l = u.requestConfigBuilder;
        this.responseHandler = s, this.requestConfigBuilder = l;
      }
      return a.prototype.get = function(u, s) {
        return t(this, void 0, void 0, function() {
          var l;
          return r(this, function(f) {
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
          return r(this, function(f) {
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
          return r(this, function(f) {
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
          return r(this, function(f) {
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
          return r(this, function(f) {
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
          return r(this, function(f) {
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
  return on.AxiosClient = o, on;
}
var Ql;
function Ug() {
  return Ql || (Ql = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DefaultHttpClient = void 0;
    var t = Lg();
    Object.defineProperty(e, "DefaultHttpClient", { enumerable: !0, get: function() {
      return t.AxiosClient;
    } });
  }(ta)), ta;
}
var an = {}, ra, Zl;
function Sr() {
  return Zl || (Zl = 1, ra = TypeError), ra;
}
const Vg = {}, Wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vg
}, Symbol.toStringTag, { value: "Module" })), Hg = /* @__PURE__ */ Vh(Wg);
var ia, eu;
function mo() {
  if (eu) return ia;
  eu = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, u = i && Set.prototype.forEach, s = typeof WeakMap == "function" && WeakMap.prototype, l = s ? WeakMap.prototype.has : null, f = typeof WeakSet == "function" && WeakSet.prototype, p = f ? WeakSet.prototype.has : null, m = typeof WeakRef == "function" && WeakRef.prototype, h = m ? WeakRef.prototype.deref : null, g = Boolean.prototype.valueOf, d = Object.prototype.toString, c = Function.prototype.toString, v = String.prototype.match, b = String.prototype.slice, _ = String.prototype.replace, E = String.prototype.toUpperCase, C = String.prototype.toLowerCase, O = RegExp.prototype.test, D = Array.prototype.concat, I = Array.prototype.join, M = Array.prototype.slice, F = Math.floor, B = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, W = Object.getOwnPropertySymbols, te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, V = typeof Symbol == "function" && typeof Symbol.iterator == "object", q = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === V || !0) ? Symbol.toStringTag : null, L = Object.prototype.propertyIsEnumerable, Y = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(T) {
    return T.__proto__;
  } : null);
  function j(T, k) {
    if (T === 1 / 0 || T === -1 / 0 || T !== T || T && T > -1e3 && T < 1e3 || O.call(/e/, k))
      return k;
    var Ee = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof T == "number") {
      var Ie = T < 0 ? -F(-T) : F(T);
      if (Ie !== T) {
        var Me = String(Ie), me = b.call(k, Me.length + 1);
        return _.call(Me, Ee, "$&_") + "." + _.call(_.call(me, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return _.call(k, Ee, "$&_");
  }
  var Z = Hg, re = Z.custom, de = it(re) ? re : null, ve = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Ce = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ia = function T(k, Ee, Ie, Me) {
    var me = Ee || {};
    if (st(me, "quoteStyle") && !st(ve, me.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (st(me, "maxStringLength") && (typeof me.maxStringLength == "number" ? me.maxStringLength < 0 && me.maxStringLength !== 1 / 0 : me.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Ut = st(me, "customInspect") ? me.customInspect : !0;
    if (typeof Ut != "boolean" && Ut !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (st(me, "indent") && me.indent !== null && me.indent !== "	" && !(parseInt(me.indent, 10) === me.indent && me.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (st(me, "numericSeparator") && typeof me.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Vt = me.numericSeparator;
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
      var pt = String(k);
      return Vt ? j(k, pt) : pt;
    }
    if (typeof k == "bigint") {
      var Wt = String(k) + "n";
      return Vt ? j(k, Wt) : Wt;
    }
    var Or = typeof me.depth > "u" ? 5 : me.depth;
    if (typeof Ie > "u" && (Ie = 0), Ie >= Or && Or > 0 && typeof k == "object")
      return _e(k) ? "[Array]" : "[Object]";
    var bn = ii(me, Ie);
    if (typeof Me > "u")
      Me = [];
    else if (Lt(Me, k) >= 0)
      return "[Circular]";
    function Ct(tn, Ht, Yn) {
      if (Ht && (Me = M.call(Me), Me.push(Ht)), Yn) {
        var ui = {
          depth: me.depth
        };
        return st(me, "quoteStyle") && (ui.quoteStyle = me.quoteStyle), T(tn, ui, Ie + 1, Me);
      }
      return T(tn, me, Ie + 1, Me);
    }
    if (typeof k == "function" && !Se(k)) {
      var Wn = mn(k), Hn = Vn(k, Ct);
      return "[Function" + (Wn ? ": " + Wn : " (anonymous)") + "]" + (Hn.length > 0 ? " { " + I.call(Hn, ", ") + " }" : "");
    }
    if (it(k)) {
      var oi = V ? _.call(String(k), /^(Symbol\(.*\))_[^)]*$/, "$1") : te.call(k);
      return typeof k == "object" && !V ? vn(oi) : oi;
    }
    if ($(k)) {
      for (var Pn = "<" + C.call(String(k.nodeName)), Ar = k.attributes || [], Gn = 0; Gn < Ar.length; Gn++)
        Pn += " " + Ar[Gn].name + "=" + Ae(N(Ar[Gn].value), "double", me);
      return Pn += ">", k.childNodes && k.childNodes.length && (Pn += "..."), Pn += "</" + C.call(String(k.nodeName)) + ">", Pn;
    }
    if (_e(k)) {
      if (k.length === 0)
        return "[]";
      var Xe = Vn(k, Ct);
      return bn && !ri(Xe) ? "[" + Er(Xe, bn) + "]" : "[ " + I.call(Xe, ", ") + " ]";
    }
    if (ne(k)) {
      var Dr = Vn(k, Ct);
      return !("cause" in Error.prototype) && "cause" in k && !L.call(k, "cause") ? "{ [" + String(k) + "] " + I.call(D.call("[cause]: " + Ct(k.cause), Dr), ", ") + " }" : Dr.length === 0 ? "[" + String(k) + "]" : "{ [" + String(k) + "] " + I.call(Dr, ", ") + " }";
    }
    if (typeof k == "object" && Ut) {
      if (de && typeof k[de] == "function" && Z)
        return Z(k, { depth: Or - Ie });
      if (Ut !== "symbol" && typeof k.inspect == "function")
        return k.inspect();
    }
    if (Dt(k)) {
      var ai = [];
      return n && n.call(k, function(tn, Ht) {
        ai.push(Ct(Ht, k, !0) + " => " + Ct(tn, k));
      }), Un("Map", r.call(k), ai, bn);
    }
    if (en(k)) {
      var si = [];
      return u && u.call(k, function(tn) {
        si.push(Ct(tn, k));
      }), Un("Set", a.call(k), si, bn);
    }
    if (gn(k))
      return xr("WeakMap");
    if (yo(k))
      return xr("WeakSet");
    if (yn(k))
      return xr("WeakRef");
    if (be(k))
      return vn(Ct(Number(k)));
    if (wt(k))
      return vn(Ct(B.call(k)));
    if (je(k))
      return vn(g.call(k));
    if (we(k))
      return vn(Ct(String(k)));
    if (typeof window < "u" && k === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && k === globalThis || typeof Jr < "u" && k === Jr)
      return "{ [object globalThis] }";
    if (!ke(k) && !Se(k)) {
      var Kn = Vn(k, Ct), li = Y ? Y(k) === Object.prototype : k instanceof Object || k.constructor === Object, Tn = k instanceof Object ? "" : "null prototype", zn = !li && q && Object(k) === k && q in k ? b.call(gt(k), 8, -1) : Tn ? "Object" : "", vo = li || typeof k.constructor != "function" ? "" : k.constructor.name ? k.constructor.name + " " : "", Cr = vo + (zn || Tn ? "[" + I.call(D.call([], zn || [], Tn || []), ": ") + "] " : "");
      return Kn.length === 0 ? Cr + "{}" : bn ? Cr + "{" + Er(Kn, bn) + "}" : Cr + "{ " + I.call(Kn, ", ") + " }";
    }
    return String(k);
  };
  function Ae(T, k, Ee) {
    var Ie = Ee.quoteStyle || k, Me = ve[Ie];
    return Me + T + Me;
  }
  function N(T) {
    return _.call(String(T), /"/g, "&quot;");
  }
  function K(T) {
    return !q || !(typeof T == "object" && (q in T || typeof T[q] < "u"));
  }
  function _e(T) {
    return gt(T) === "[object Array]" && K(T);
  }
  function ke(T) {
    return gt(T) === "[object Date]" && K(T);
  }
  function Se(T) {
    return gt(T) === "[object RegExp]" && K(T);
  }
  function ne(T) {
    return gt(T) === "[object Error]" && K(T);
  }
  function we(T) {
    return gt(T) === "[object String]" && K(T);
  }
  function be(T) {
    return gt(T) === "[object Number]" && K(T);
  }
  function je(T) {
    return gt(T) === "[object Boolean]" && K(T);
  }
  function it(T) {
    if (V)
      return T && typeof T == "object" && T instanceof Symbol;
    if (typeof T == "symbol")
      return !0;
    if (!T || typeof T != "object" || !te)
      return !1;
    try {
      return te.call(T), !0;
    } catch {
    }
    return !1;
  }
  function wt(T) {
    if (!T || typeof T != "object" || !B)
      return !1;
    try {
      return B.call(T), !0;
    } catch {
    }
    return !1;
  }
  var Ye = Object.prototype.hasOwnProperty || function(T) {
    return T in this;
  };
  function st(T, k) {
    return Ye.call(T, k);
  }
  function gt(T) {
    return d.call(T);
  }
  function mn(T) {
    if (T.name)
      return T.name;
    var k = v.call(c.call(T), /^function\s*([\w$]+)/);
    return k ? k[1] : null;
  }
  function Lt(T, k) {
    if (T.indexOf)
      return T.indexOf(k);
    for (var Ee = 0, Ie = T.length; Ee < Ie; Ee++)
      if (T[Ee] === k)
        return Ee;
    return -1;
  }
  function Dt(T) {
    if (!r || !T || typeof T != "object")
      return !1;
    try {
      r.call(T);
      try {
        a.call(T);
      } catch {
        return !0;
      }
      return T instanceof Map;
    } catch {
    }
    return !1;
  }
  function gn(T) {
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
  function yn(T) {
    if (!h || !T || typeof T != "object")
      return !1;
    try {
      return h.call(T), !0;
    } catch {
    }
    return !1;
  }
  function en(T) {
    if (!a || !T || typeof T != "object")
      return !1;
    try {
      a.call(T);
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
  function yo(T) {
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
  function pe(T, k) {
    if (T.length > k.maxStringLength) {
      var Ee = T.length - k.maxStringLength, Ie = "... " + Ee + " more character" + (Ee > 1 ? "s" : "");
      return pe(b.call(T, 0, k.maxStringLength), k) + Ie;
    }
    var Me = Ce[k.quoteStyle || "single"];
    Me.lastIndex = 0;
    var me = _.call(_.call(T, Me, "\\$1"), /[\x00-\x1f]/g, ni);
    return Ae(me, "single", k);
  }
  function ni(T) {
    var k = T.charCodeAt(0), Ee = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[k];
    return Ee ? "\\" + Ee : "\\x" + (k < 16 ? "0" : "") + E.call(k.toString(16));
  }
  function vn(T) {
    return "Object(" + T + ")";
  }
  function xr(T) {
    return T + " { ? }";
  }
  function Un(T, k, Ee, Ie) {
    var Me = Ie ? Er(Ee, Ie) : I.call(Ee, ", ");
    return T + " (" + k + ") {" + Me + "}";
  }
  function ri(T) {
    for (var k = 0; k < T.length; k++)
      if (Lt(T[k], `
`) >= 0)
        return !1;
    return !0;
  }
  function ii(T, k) {
    var Ee;
    if (T.indent === "	")
      Ee = "	";
    else if (typeof T.indent == "number" && T.indent > 0)
      Ee = I.call(Array(T.indent + 1), " ");
    else
      return null;
    return {
      base: Ee,
      prev: I.call(Array(k + 1), Ee)
    };
  }
  function Er(T, k) {
    if (T.length === 0)
      return "";
    var Ee = `
` + k.prev + k.base;
    return Ee + I.call(T, "," + Ee) + `
` + k.prev;
  }
  function Vn(T, k) {
    var Ee = _e(T), Ie = [];
    if (Ee) {
      Ie.length = T.length;
      for (var Me = 0; Me < T.length; Me++)
        Ie[Me] = st(T, Me) ? k(T[Me], T) : "";
    }
    var me = typeof W == "function" ? W(T) : [], Ut;
    if (V) {
      Ut = {};
      for (var Vt = 0; Vt < me.length; Vt++)
        Ut["$" + me[Vt]] = me[Vt];
    }
    for (var pt in T)
      st(T, pt) && (Ee && String(Number(pt)) === pt && pt < T.length || V && Ut["$" + pt] instanceof Symbol || (O.call(/[^\w$]/, pt) ? Ie.push(k(pt, T) + ": " + k(T[pt], T)) : Ie.push(pt + ": " + k(T[pt], T))));
    if (typeof W == "function")
      for (var Wt = 0; Wt < me.length; Wt++)
        L.call(T, me[Wt]) && Ie.push("[" + k(me[Wt]) + "]: " + k(T[me[Wt]], T));
    return Ie;
  }
  return ia;
}
var oa, tu;
function Gg() {
  if (tu) return oa;
  tu = 1;
  var e = /* @__PURE__ */ mo(), t = /* @__PURE__ */ Sr(), r = function(u, s, l) {
    for (var f = u, p; (p = f.next) != null; f = p)
      if (p.key === s)
        return f.next = p.next, l || (p.next = /** @type {NonNullable<typeof list.next>} */
        u.next, u.next = p), p;
  }, n = function(u, s) {
    if (u) {
      var l = r(u, s);
      return l && l.value;
    }
  }, i = function(u, s, l) {
    var f = r(u, s);
    f ? f.value = l : u.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: s,
      next: u.next,
      value: l
    };
  }, o = function(u, s) {
    return u ? !!r(u, s) : !1;
  }, a = function(u, s) {
    if (u)
      return r(u, s, !0);
  };
  return oa = function() {
    var s, l = {
      assert: function(f) {
        if (!l.has(f))
          throw new t("Side channel does not contain " + e(f));
      },
      delete: function(f) {
        var p = s && s.next, m = a(s, f);
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
  }, oa;
}
var aa, nu;
function qc() {
  return nu || (nu = 1, aa = Object), aa;
}
var sa, ru;
function Kg() {
  return ru || (ru = 1, sa = Error), sa;
}
var la, iu;
function zg() {
  return iu || (iu = 1, la = EvalError), la;
}
var ua, ou;
function Yg() {
  return ou || (ou = 1, ua = RangeError), ua;
}
var ca, au;
function Xg() {
  return au || (au = 1, ca = ReferenceError), ca;
}
var fa, su;
function Jg() {
  return su || (su = 1, fa = SyntaxError), fa;
}
var da, lu;
function Qg() {
  return lu || (lu = 1, da = URIError), da;
}
var pa, uu;
function Zg() {
  return uu || (uu = 1, pa = Math.abs), pa;
}
var ha, cu;
function ey() {
  return cu || (cu = 1, ha = Math.floor), ha;
}
var ma, fu;
function ty() {
  return fu || (fu = 1, ma = Math.max), ma;
}
var ga, du;
function ny() {
  return du || (du = 1, ga = Math.min), ga;
}
var ya, pu;
function ry() {
  return pu || (pu = 1, ya = Math.pow), ya;
}
var va, hu;
function iy() {
  return hu || (hu = 1, va = Math.round), va;
}
var ba, mu;
function oy() {
  return mu || (mu = 1, ba = Number.isNaN || function(t) {
    return t !== t;
  }), ba;
}
var wa, gu;
function ay() {
  if (gu) return wa;
  gu = 1;
  var e = /* @__PURE__ */ oy();
  return wa = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, wa;
}
var _a, yu;
function sy() {
  return yu || (yu = 1, _a = Object.getOwnPropertyDescriptor), _a;
}
var Sa, vu;
function Lc() {
  if (vu) return Sa;
  vu = 1;
  var e = /* @__PURE__ */ sy();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Sa = e, Sa;
}
var xa, bu;
function ly() {
  if (bu) return xa;
  bu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return xa = e, xa;
}
var Ea, wu;
function uy() {
  return wu || (wu = 1, Ea = function() {
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
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var u = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (u.value !== i || u.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Ea;
}
var Oa, _u;
function cy() {
  if (_u) return Oa;
  _u = 1;
  var e = typeof Symbol < "u" && Symbol, t = uy();
  return Oa = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Oa;
}
var Aa, Su;
function Uc() {
  return Su || (Su = 1, Aa = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Aa;
}
var Da, xu;
function Vc() {
  if (xu) return Da;
  xu = 1;
  var e = /* @__PURE__ */ qc();
  return Da = e.getPrototypeOf || null, Da;
}
var Ca, Eu;
function fy() {
  if (Eu) return Ca;
  Eu = 1;
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
  }, a = function(u, s) {
    for (var l = "", f = 0; f < u.length; f += 1)
      l += u[f], f + 1 < u.length && (l += s);
    return l;
  };
  return Ca = function(s) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var f = o(arguments, 1), p, m = function() {
      if (this instanceof p) {
        var v = l.apply(
          this,
          i(f, arguments)
        );
        return Object(v) === v ? v : this;
      }
      return l.apply(
        s,
        i(f, arguments)
      );
    }, h = r(0, l.length - f.length), g = [], d = 0; d < h; d++)
      g[d] = "$" + d;
    if (p = Function("binder", "return function (" + a(g, ",") + "){ return binder.apply(this,arguments); }")(m), l.prototype) {
      var c = function() {
      };
      c.prototype = l.prototype, p.prototype = new c(), c.prototype = null;
    }
    return p;
  }, Ca;
}
var Ra, Ou;
function go() {
  if (Ou) return Ra;
  Ou = 1;
  var e = fy();
  return Ra = Function.prototype.bind || e, Ra;
}
var Pa, Au;
function xs() {
  return Au || (Au = 1, Pa = Function.prototype.call), Pa;
}
var Ta, Du;
function Wc() {
  return Du || (Du = 1, Ta = Function.prototype.apply), Ta;
}
var ka, Cu;
function dy() {
  return Cu || (Cu = 1, ka = typeof Reflect < "u" && Reflect && Reflect.apply), ka;
}
var Ia, Ru;
function py() {
  if (Ru) return Ia;
  Ru = 1;
  var e = go(), t = Wc(), r = xs(), n = dy();
  return Ia = n || e.call(r, t), Ia;
}
var $a, Pu;
function Hc() {
  if (Pu) return $a;
  Pu = 1;
  var e = go(), t = /* @__PURE__ */ Sr(), r = xs(), n = py();
  return $a = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, $a;
}
var Na, Tu;
function hy() {
  if (Tu) return Na;
  Tu = 1;
  var e = Hc(), t = /* @__PURE__ */ Lc(), r;
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
  ), i = Object, o = i.getPrototypeOf;
  return Na = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(u) {
      return o(u == null ? u : i(u));
    }
  ) : !1, Na;
}
var Ma, ku;
function my() {
  if (ku) return Ma;
  ku = 1;
  var e = Uc(), t = Vc(), r = /* @__PURE__ */ hy();
  return Ma = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Ma;
}
var ja, Iu;
function gy() {
  if (Iu) return ja;
  Iu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = go();
  return ja = r.call(e, t), ja;
}
var Fa, $u;
function Es() {
  if ($u) return Fa;
  $u = 1;
  var e, t = /* @__PURE__ */ qc(), r = /* @__PURE__ */ Kg(), n = /* @__PURE__ */ zg(), i = /* @__PURE__ */ Yg(), o = /* @__PURE__ */ Xg(), a = /* @__PURE__ */ Jg(), u = /* @__PURE__ */ Sr(), s = /* @__PURE__ */ Qg(), l = /* @__PURE__ */ Zg(), f = /* @__PURE__ */ ey(), p = /* @__PURE__ */ ty(), m = /* @__PURE__ */ ny(), h = /* @__PURE__ */ ry(), g = /* @__PURE__ */ iy(), d = /* @__PURE__ */ ay(), c = Function, v = function(Se) {
    try {
      return c('"use strict"; return (' + Se + ").constructor;")();
    } catch {
    }
  }, b = /* @__PURE__ */ Lc(), _ = /* @__PURE__ */ ly(), E = function() {
    throw new u();
  }, C = b ? function() {
    try {
      return arguments.callee, E;
    } catch {
      try {
        return b(arguments, "callee").get;
      } catch {
        return E;
      }
    }
  }() : E, O = cy()(), D = my(), I = Vc(), M = Uc(), F = Wc(), B = xs(), W = {}, te = typeof Uint8Array > "u" || !D ? e : D(Uint8Array), V = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": O && D ? D([][Symbol.iterator]()) : e,
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
    "%Function%": c,
    "%GeneratorFunction%": W,
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
    "%Math.min%": m,
    "%Math.pow%": h,
    "%Math.round%": g,
    "%Math.sign%": d,
    "%Reflect.getPrototypeOf%": M
  };
  if (D)
    try {
      null.error;
    } catch (Se) {
      var q = D(D(Se));
      V["%Error.prototype%"] = q;
    }
  var L = function Se(ne) {
    var we;
    if (ne === "%AsyncFunction%")
      we = v("async function () {}");
    else if (ne === "%GeneratorFunction%")
      we = v("function* () {}");
    else if (ne === "%AsyncGeneratorFunction%")
      we = v("async function* () {}");
    else if (ne === "%AsyncGenerator%") {
      var be = Se("%AsyncGeneratorFunction%");
      be && (we = be.prototype);
    } else if (ne === "%AsyncIteratorPrototype%") {
      var je = Se("%AsyncGenerator%");
      je && D && (we = D(je.prototype));
    }
    return V[ne] = we, we;
  }, Y = {
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
  }, j = go(), Z = /* @__PURE__ */ gy(), re = j.call(B, Array.prototype.concat), de = j.call(F, Array.prototype.splice), ve = j.call(B, String.prototype.replace), Ce = j.call(B, String.prototype.slice), Ae = j.call(B, RegExp.prototype.exec), N = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, K = /\\(\\)?/g, _e = function(ne) {
    var we = Ce(ne, 0, 1), be = Ce(ne, -1);
    if (we === "%" && be !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (be === "%" && we !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var je = [];
    return ve(ne, N, function(it, wt, Ye, st) {
      je[je.length] = Ye ? ve(st, K, "$1") : wt || it;
    }), je;
  }, ke = function(ne, we) {
    var be = ne, je;
    if (Z(Y, be) && (je = Y[be], be = "%" + je[0] + "%"), Z(V, be)) {
      var it = V[be];
      if (it === W && (it = L(be)), typeof it > "u" && !we)
        throw new u("intrinsic " + ne + " exists, but is not available. Please file an issue!");
      return {
        alias: je,
        name: be,
        value: it
      };
    }
    throw new a("intrinsic " + ne + " does not exist!");
  };
  return Fa = function(ne, we) {
    if (typeof ne != "string" || ne.length === 0)
      throw new u("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof we != "boolean")
      throw new u('"allowMissing" argument must be a boolean');
    if (Ae(/^%?[^%]*%?$/, ne) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var be = _e(ne), je = be.length > 0 ? be[0] : "", it = ke("%" + je + "%", we), wt = it.name, Ye = it.value, st = !1, gt = it.alias;
    gt && (je = gt[0], de(be, re([0, 1], gt)));
    for (var mn = 1, Lt = !0; mn < be.length; mn += 1) {
      var Dt = be[mn], gn = Ce(Dt, 0, 1), yn = Ce(Dt, -1);
      if ((gn === '"' || gn === "'" || gn === "`" || yn === '"' || yn === "'" || yn === "`") && gn !== yn)
        throw new a("property names with quotes must have matching quotes");
      if ((Dt === "constructor" || !Lt) && (st = !0), je += "." + Dt, wt = "%" + je + "%", Z(V, wt))
        Ye = V[wt];
      else if (Ye != null) {
        if (!(Dt in Ye)) {
          if (!we)
            throw new u("base intrinsic for " + ne + " exists, but the property is not available.");
          return;
        }
        if (b && mn + 1 >= be.length) {
          var en = b(Ye, Dt);
          Lt = !!en, Lt && "get" in en && !("originalValue" in en.get) ? Ye = en.get : Ye = Ye[Dt];
        } else
          Lt = Z(Ye, Dt), Ye = Ye[Dt];
        Lt && !st && (V[wt] = Ye);
      }
    }
    return Ye;
  }, Fa;
}
var Ba, Nu;
function Gc() {
  if (Nu) return Ba;
  Nu = 1;
  var e = /* @__PURE__ */ Es(), t = Hc(), r = t([e("%String.prototype.indexOf%")]);
  return Ba = function(i, o) {
    var a = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t([a]) : a;
  }, Ba;
}
var qa, Mu;
function Kc() {
  if (Mu) return qa;
  Mu = 1;
  var e = /* @__PURE__ */ Es(), t = /* @__PURE__ */ Gc(), r = /* @__PURE__ */ mo(), n = /* @__PURE__ */ Sr(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), u = t("Map.prototype.has", !0), s = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return qa = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var p, m = {
      assert: function(h) {
        if (!m.has(h))
          throw new n("Side channel does not contain " + r(h));
      },
      delete: function(h) {
        if (p) {
          var g = s(p, h);
          return l(p) === 0 && (p = void 0), g;
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
      set: function(h, g) {
        p || (p = new i()), a(p, h, g);
      }
    };
    return m;
  }, qa;
}
var La, ju;
function yy() {
  if (ju) return La;
  ju = 1;
  var e = /* @__PURE__ */ Es(), t = /* @__PURE__ */ Gc(), r = /* @__PURE__ */ mo(), n = Kc(), i = /* @__PURE__ */ Sr(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), u = t("WeakMap.prototype.set", !0), s = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return La = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var p, m, h = {
        assert: function(g) {
          if (!h.has(g))
            throw new i("Side channel does not contain " + r(g));
        },
        delete: function(g) {
          if (o && g && (typeof g == "object" || typeof g == "function")) {
            if (p)
              return l(p, g);
          } else if (n && m)
            return m.delete(g);
          return !1;
        },
        get: function(g) {
          return o && g && (typeof g == "object" || typeof g == "function") && p ? a(p, g) : m && m.get(g);
        },
        has: function(g) {
          return o && g && (typeof g == "object" || typeof g == "function") && p ? s(p, g) : !!m && m.has(g);
        },
        set: function(g, d) {
          o && g && (typeof g == "object" || typeof g == "function") ? (p || (p = new o()), u(p, g, d)) : n && (m || (m = n()), m.set(g, d));
        }
      };
      return h;
    }
  ) : n, La;
}
var Ua, Fu;
function vy() {
  if (Fu) return Ua;
  Fu = 1;
  var e = /* @__PURE__ */ Sr(), t = /* @__PURE__ */ mo(), r = Gg(), n = Kc(), i = yy(), o = i || n || r;
  return Ua = function() {
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
  }, Ua;
}
var Va, Bu;
function Os() {
  if (Bu) return Va;
  Bu = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Va = {
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
  }, Va;
}
var Wa, qu;
function zc() {
  if (qu) return Wa;
  qu = 1;
  var e = /* @__PURE__ */ Os(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
    for (var c = [], v = 0; v < 256; ++v)
      c.push("%" + ((v < 16 ? "0" : "") + v.toString(16)).toUpperCase());
    return c;
  }(), i = function(v) {
    for (; v.length > 1; ) {
      var b = v.pop(), _ = b.obj[b.prop];
      if (r(_)) {
        for (var E = [], C = 0; C < _.length; ++C)
          typeof _[C] < "u" && E.push(_[C]);
        b.obj[b.prop] = E;
      }
    }
  }, o = function(v, b) {
    for (var _ = b && b.plainObjects ? { __proto__: null } : {}, E = 0; E < v.length; ++E)
      typeof v[E] < "u" && (_[E] = v[E]);
    return _;
  }, a = function c(v, b, _) {
    if (!b)
      return v;
    if (typeof b != "object" && typeof b != "function") {
      if (r(v))
        v.push(b);
      else if (v && typeof v == "object")
        (_ && (_.plainObjects || _.allowPrototypes) || !t.call(Object.prototype, b)) && (v[b] = !0);
      else
        return [v, b];
      return v;
    }
    if (!v || typeof v != "object")
      return [v].concat(b);
    var E = v;
    return r(v) && !r(b) && (E = o(v, _)), r(v) && r(b) ? (b.forEach(function(C, O) {
      if (t.call(v, O)) {
        var D = v[O];
        D && typeof D == "object" && C && typeof C == "object" ? v[O] = c(D, C, _) : v.push(C);
      } else
        v[O] = C;
    }), v) : Object.keys(b).reduce(function(C, O) {
      var D = b[O];
      return t.call(C, O) ? C[O] = c(C[O], D, _) : C[O] = D, C;
    }, E);
  }, u = function(v, b) {
    return Object.keys(b).reduce(function(_, E) {
      return _[E] = b[E], _;
    }, v);
  }, s = function(c, v, b) {
    var _ = c.replace(/\+/g, " ");
    if (b === "iso-8859-1")
      return _.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(_);
    } catch {
      return _;
    }
  }, l = 1024, f = function(v, b, _, E, C) {
    if (v.length === 0)
      return v;
    var O = v;
    if (typeof v == "symbol" ? O = Symbol.prototype.toString.call(v) : typeof v != "string" && (O = String(v)), _ === "iso-8859-1")
      return escape(O).replace(/%u[0-9a-f]{4}/gi, function(te) {
        return "%26%23" + parseInt(te.slice(2), 16) + "%3B";
      });
    for (var D = "", I = 0; I < O.length; I += l) {
      for (var M = O.length >= l ? O.slice(I, I + l) : O, F = [], B = 0; B < M.length; ++B) {
        var W = M.charCodeAt(B);
        if (W === 45 || W === 46 || W === 95 || W === 126 || W >= 48 && W <= 57 || W >= 65 && W <= 90 || W >= 97 && W <= 122 || C === e.RFC1738 && (W === 40 || W === 41)) {
          F[F.length] = M.charAt(B);
          continue;
        }
        if (W < 128) {
          F[F.length] = n[W];
          continue;
        }
        if (W < 2048) {
          F[F.length] = n[192 | W >> 6] + n[128 | W & 63];
          continue;
        }
        if (W < 55296 || W >= 57344) {
          F[F.length] = n[224 | W >> 12] + n[128 | W >> 6 & 63] + n[128 | W & 63];
          continue;
        }
        B += 1, W = 65536 + ((W & 1023) << 10 | M.charCodeAt(B) & 1023), F[F.length] = n[240 | W >> 18] + n[128 | W >> 12 & 63] + n[128 | W >> 6 & 63] + n[128 | W & 63];
      }
      D += F.join("");
    }
    return D;
  }, p = function(v) {
    for (var b = [{ obj: { o: v }, prop: "o" }], _ = [], E = 0; E < b.length; ++E)
      for (var C = b[E], O = C.obj[C.prop], D = Object.keys(O), I = 0; I < D.length; ++I) {
        var M = D[I], F = O[M];
        typeof F == "object" && F !== null && _.indexOf(F) === -1 && (b.push({ obj: O, prop: M }), _.push(F));
      }
    return i(b), v;
  }, m = function(v) {
    return Object.prototype.toString.call(v) === "[object RegExp]";
  }, h = function(v) {
    return !v || typeof v != "object" ? !1 : !!(v.constructor && v.constructor.isBuffer && v.constructor.isBuffer(v));
  }, g = function(v, b) {
    return [].concat(v, b);
  }, d = function(v, b) {
    if (r(v)) {
      for (var _ = [], E = 0; E < v.length; E += 1)
        _.push(b(v[E]));
      return _;
    }
    return b(v);
  };
  return Wa = {
    arrayToObject: o,
    assign: u,
    combine: g,
    compact: p,
    decode: s,
    encode: f,
    isBuffer: h,
    isRegExp: m,
    maybeMap: d,
    merge: a
  }, Wa;
}
var Ha, Lu;
function by() {
  if (Lu) return Ha;
  Lu = 1;
  var e = vy(), t = /* @__PURE__ */ zc(), r = /* @__PURE__ */ Os(), n = Object.prototype.hasOwnProperty, i = {
    brackets: function(c) {
      return c + "[]";
    },
    comma: "comma",
    indices: function(c, v) {
      return c + "[" + v + "]";
    },
    repeat: function(c) {
      return c;
    }
  }, o = Array.isArray, a = Array.prototype.push, u = function(d, c) {
    a.apply(d, o(c) ? c : [c]);
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
    serializeDate: function(c) {
      return s.call(c);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, p = function(c) {
    return typeof c == "string" || typeof c == "number" || typeof c == "boolean" || typeof c == "symbol" || typeof c == "bigint";
  }, m = {}, h = function d(c, v, b, _, E, C, O, D, I, M, F, B, W, te, V, q, L, Y) {
    for (var j = c, Z = Y, re = 0, de = !1; (Z = Z.get(m)) !== void 0 && !de; ) {
      var ve = Z.get(c);
      if (re += 1, typeof ve < "u") {
        if (ve === re)
          throw new RangeError("Cyclic object value");
        de = !0;
      }
      typeof Z.get(m) > "u" && (re = 0);
    }
    if (typeof M == "function" ? j = M(v, j) : j instanceof Date ? j = W(j) : b === "comma" && o(j) && (j = t.maybeMap(j, function(wt) {
      return wt instanceof Date ? W(wt) : wt;
    })), j === null) {
      if (C)
        return I && !q ? I(v, f.encoder, L, "key", te) : v;
      j = "";
    }
    if (p(j) || t.isBuffer(j)) {
      if (I) {
        var Ce = q ? v : I(v, f.encoder, L, "key", te);
        return [V(Ce) + "=" + V(I(j, f.encoder, L, "value", te))];
      }
      return [V(v) + "=" + V(String(j))];
    }
    var Ae = [];
    if (typeof j > "u")
      return Ae;
    var N;
    if (b === "comma" && o(j))
      q && I && (j = t.maybeMap(j, I)), N = [{ value: j.length > 0 ? j.join(",") || null : void 0 }];
    else if (o(M))
      N = M;
    else {
      var K = Object.keys(j);
      N = F ? K.sort(F) : K;
    }
    var _e = D ? String(v).replace(/\./g, "%2E") : String(v), ke = _ && o(j) && j.length === 1 ? _e + "[]" : _e;
    if (E && o(j) && j.length === 0)
      return ke + "[]";
    for (var Se = 0; Se < N.length; ++Se) {
      var ne = N[Se], we = typeof ne == "object" && ne && typeof ne.value < "u" ? ne.value : j[ne];
      if (!(O && we === null)) {
        var be = B && D ? String(ne).replace(/\./g, "%2E") : String(ne), je = o(j) ? typeof b == "function" ? b(ke, be) : ke : ke + (B ? "." + be : "[" + be + "]");
        Y.set(c, re);
        var it = e();
        it.set(m, Y), u(Ae, d(
          we,
          je,
          b,
          _,
          E,
          C,
          O,
          D,
          b === "comma" && q && o(j) ? null : I,
          M,
          F,
          B,
          W,
          te,
          V,
          q,
          L,
          it
        ));
      }
    }
    return Ae;
  }, g = function(c) {
    if (!c)
      return f;
    if (typeof c.allowEmptyArrays < "u" && typeof c.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof c.encodeDotInKeys < "u" && typeof c.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (c.encoder !== null && typeof c.encoder < "u" && typeof c.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var v = c.charset || f.charset;
    if (typeof c.charset < "u" && c.charset !== "utf-8" && c.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var b = r.default;
    if (typeof c.format < "u") {
      if (!n.call(r.formatters, c.format))
        throw new TypeError("Unknown format option provided.");
      b = c.format;
    }
    var _ = r.formatters[b], E = f.filter;
    (typeof c.filter == "function" || o(c.filter)) && (E = c.filter);
    var C;
    if (c.arrayFormat in i ? C = c.arrayFormat : "indices" in c ? C = c.indices ? "indices" : "repeat" : C = f.arrayFormat, "commaRoundTrip" in c && typeof c.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var O = typeof c.allowDots > "u" ? c.encodeDotInKeys === !0 ? !0 : f.allowDots : !!c.allowDots;
    return {
      addQueryPrefix: typeof c.addQueryPrefix == "boolean" ? c.addQueryPrefix : f.addQueryPrefix,
      allowDots: O,
      allowEmptyArrays: typeof c.allowEmptyArrays == "boolean" ? !!c.allowEmptyArrays : f.allowEmptyArrays,
      arrayFormat: C,
      charset: v,
      charsetSentinel: typeof c.charsetSentinel == "boolean" ? c.charsetSentinel : f.charsetSentinel,
      commaRoundTrip: !!c.commaRoundTrip,
      delimiter: typeof c.delimiter > "u" ? f.delimiter : c.delimiter,
      encode: typeof c.encode == "boolean" ? c.encode : f.encode,
      encodeDotInKeys: typeof c.encodeDotInKeys == "boolean" ? c.encodeDotInKeys : f.encodeDotInKeys,
      encoder: typeof c.encoder == "function" ? c.encoder : f.encoder,
      encodeValuesOnly: typeof c.encodeValuesOnly == "boolean" ? c.encodeValuesOnly : f.encodeValuesOnly,
      filter: E,
      format: b,
      formatter: _,
      serializeDate: typeof c.serializeDate == "function" ? c.serializeDate : f.serializeDate,
      skipNulls: typeof c.skipNulls == "boolean" ? c.skipNulls : f.skipNulls,
      sort: typeof c.sort == "function" ? c.sort : null,
      strictNullHandling: typeof c.strictNullHandling == "boolean" ? c.strictNullHandling : f.strictNullHandling
    };
  };
  return Ha = function(d, c) {
    var v = d, b = g(c), _, E;
    typeof b.filter == "function" ? (E = b.filter, v = E("", v)) : o(b.filter) && (E = b.filter, _ = E);
    var C = [];
    if (typeof v != "object" || v === null)
      return "";
    var O = i[b.arrayFormat], D = O === "comma" && b.commaRoundTrip;
    _ || (_ = Object.keys(v)), b.sort && _.sort(b.sort);
    for (var I = e(), M = 0; M < _.length; ++M) {
      var F = _[M], B = v[F];
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
    var W = C.join(b.delimiter), te = b.addQueryPrefix === !0 ? "?" : "";
    return b.charsetSentinel && (b.charset === "iso-8859-1" ? te += "utf8=%26%2310003%3B&" : te += "utf8=%E2%9C%93&"), W.length > 0 ? te + W : "";
  }, Ha;
}
var Ga, Uu;
function wy() {
  if (Uu) return Ga;
  Uu = 1;
  var e = /* @__PURE__ */ zc(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
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
    return m.replace(/&#(\d+);/g, function(h, g) {
      return String.fromCharCode(parseInt(g, 10));
    });
  }, o = function(m, h, g) {
    if (m && typeof m == "string" && h.comma && m.indexOf(",") > -1)
      return m.split(",");
    if (h.throwOnLimitExceeded && g >= h.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return m;
  }, a = "utf8=%26%2310003%3B", u = "utf8=%E2%9C%93", s = function(h, g) {
    var d = { __proto__: null }, c = g.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    c = c.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var v = g.parameterLimit === 1 / 0 ? void 0 : g.parameterLimit, b = c.split(
      g.delimiter,
      g.throwOnLimitExceeded ? v + 1 : v
    );
    if (g.throwOnLimitExceeded && b.length > v)
      throw new RangeError("Parameter limit exceeded. Only " + v + " parameter" + (v === 1 ? "" : "s") + " allowed.");
    var _ = -1, E, C = g.charset;
    if (g.charsetSentinel)
      for (E = 0; E < b.length; ++E)
        b[E].indexOf("utf8=") === 0 && (b[E] === u ? C = "utf-8" : b[E] === a && (C = "iso-8859-1"), _ = E, E = b.length);
    for (E = 0; E < b.length; ++E)
      if (E !== _) {
        var O = b[E], D = O.indexOf("]="), I = D === -1 ? O.indexOf("=") : D + 1, M, F;
        I === -1 ? (M = g.decoder(O, n.decoder, C, "key"), F = g.strictNullHandling ? null : "") : (M = g.decoder(O.slice(0, I), n.decoder, C, "key"), F = e.maybeMap(
          o(
            O.slice(I + 1),
            g,
            r(d[M]) ? d[M].length : 0
          ),
          function(W) {
            return g.decoder(W, n.decoder, C, "value");
          }
        )), F && g.interpretNumericEntities && C === "iso-8859-1" && (F = i(String(F))), O.indexOf("[]=") > -1 && (F = r(F) ? [F] : F);
        var B = t.call(d, M);
        B && g.duplicates === "combine" ? d[M] = e.combine(d[M], F) : (!B || g.duplicates === "last") && (d[M] = F);
      }
    return d;
  }, l = function(m, h, g, d) {
    var c = 0;
    if (m.length > 0 && m[m.length - 1] === "[]") {
      var v = m.slice(0, -1).join("");
      c = Array.isArray(h) && h[v] ? h[v].length : 0;
    }
    for (var b = d ? h : o(h, g, c), _ = m.length - 1; _ >= 0; --_) {
      var E, C = m[_];
      if (C === "[]" && g.parseArrays)
        E = g.allowEmptyArrays && (b === "" || g.strictNullHandling && b === null) ? [] : e.combine([], b);
      else {
        E = g.plainObjects ? { __proto__: null } : {};
        var O = C.charAt(0) === "[" && C.charAt(C.length - 1) === "]" ? C.slice(1, -1) : C, D = g.decodeDotInKeys ? O.replace(/%2E/g, ".") : O, I = parseInt(D, 10);
        !g.parseArrays && D === "" ? E = { 0: b } : !isNaN(I) && C !== D && String(I) === D && I >= 0 && g.parseArrays && I <= g.arrayLimit ? (E = [], E[I] = b) : D !== "__proto__" && (E[D] = b);
      }
      b = E;
    }
    return b;
  }, f = function(h, g, d, c) {
    if (h) {
      var v = d.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h, b = /(\[[^[\]]*])/, _ = /(\[[^[\]]*])/g, E = d.depth > 0 && b.exec(v), C = E ? v.slice(0, E.index) : v, O = [];
      if (C) {
        if (!d.plainObjects && t.call(Object.prototype, C) && !d.allowPrototypes)
          return;
        O.push(C);
      }
      for (var D = 0; d.depth > 0 && (E = _.exec(v)) !== null && D < d.depth; ) {
        if (D += 1, !d.plainObjects && t.call(Object.prototype, E[1].slice(1, -1)) && !d.allowPrototypes)
          return;
        O.push(E[1]);
      }
      if (E) {
        if (d.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + d.depth + " and strictDepth is true");
        O.push("[" + v.slice(E.index) + "]");
      }
      return l(O, g, d, c);
    }
  }, p = function(h) {
    if (!h)
      return n;
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
    var g = typeof h.charset > "u" ? n.charset : h.charset, d = typeof h.duplicates > "u" ? n.duplicates : h.duplicates;
    if (d !== "combine" && d !== "first" && d !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var c = typeof h.allowDots > "u" ? h.decodeDotInKeys === !0 ? !0 : n.allowDots : !!h.allowDots;
    return {
      allowDots: c,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof h.allowPrototypes == "boolean" ? h.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof h.allowSparse == "boolean" ? h.allowSparse : n.allowSparse,
      arrayLimit: typeof h.arrayLimit == "number" ? h.arrayLimit : n.arrayLimit,
      charset: g,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : n.charsetSentinel,
      comma: typeof h.comma == "boolean" ? h.comma : n.comma,
      decodeDotInKeys: typeof h.decodeDotInKeys == "boolean" ? h.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof h.decoder == "function" ? h.decoder : n.decoder,
      delimiter: typeof h.delimiter == "string" || e.isRegExp(h.delimiter) ? h.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof h.depth == "number" || h.depth === !1 ? +h.depth : n.depth,
      duplicates: d,
      ignoreQueryPrefix: h.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof h.interpretNumericEntities == "boolean" ? h.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof h.parameterLimit == "number" ? h.parameterLimit : n.parameterLimit,
      parseArrays: h.parseArrays !== !1,
      plainObjects: typeof h.plainObjects == "boolean" ? h.plainObjects : n.plainObjects,
      strictDepth: typeof h.strictDepth == "boolean" ? !!h.strictDepth : n.strictDepth,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof h.throwOnLimitExceeded == "boolean" ? h.throwOnLimitExceeded : !1
    };
  };
  return Ga = function(m, h) {
    var g = p(h);
    if (m === "" || m === null || typeof m > "u")
      return g.plainObjects ? { __proto__: null } : {};
    for (var d = typeof m == "string" ? s(m, g) : m, c = g.plainObjects ? { __proto__: null } : {}, v = Object.keys(d), b = 0; b < v.length; ++b) {
      var _ = v[b], E = f(_, d[_], g, typeof m == "string");
      c = e.merge(c, E, g);
    }
    return g.allowSparse === !0 ? c : e.compact(c);
  }, Ga;
}
var Ka, Vu;
function _y() {
  if (Vu) return Ka;
  Vu = 1;
  var e = /* @__PURE__ */ by(), t = /* @__PURE__ */ wy(), r = /* @__PURE__ */ Os();
  return Ka = {
    formats: r,
    parse: t,
    stringify: e
  }, Ka;
}
var Gi = { exports: {} }, Sy = Gi.exports, Wu;
function xy() {
  return Wu || (Wu = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(typeof self < "u" ? self : typeof window < "u" ? window : typeof Jr < "u" ? Jr : Sy, function() {
      var r = "3.7.7", n = r, i = typeof Buffer == "function", o = typeof TextDecoder == "function" ? new TextDecoder() : void 0, a = typeof TextEncoder == "function" ? new TextEncoder() : void 0, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = Array.prototype.slice.call(u), l = function(N) {
        var K = {};
        return N.forEach(function(_e, ke) {
          return K[_e] = ke;
        }), K;
      }(s), f = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, p = String.fromCharCode.bind(String), m = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function(N) {
        return new Uint8Array(Array.prototype.slice.call(N, 0));
      }, h = function(N) {
        return N.replace(/=/g, "").replace(/[+\/]/g, function(K) {
          return K == "+" ? "-" : "_";
        });
      }, g = function(N) {
        return N.replace(/[^A-Za-z0-9\+\/]/g, "");
      }, d = function(N) {
        for (var K, _e, ke, Se, ne = "", we = N.length % 3, be = 0; be < N.length; ) {
          if ((_e = N.charCodeAt(be++)) > 255 || (ke = N.charCodeAt(be++)) > 255 || (Se = N.charCodeAt(be++)) > 255)
            throw new TypeError("invalid character found");
          K = _e << 16 | ke << 8 | Se, ne += s[K >> 18 & 63] + s[K >> 12 & 63] + s[K >> 6 & 63] + s[K & 63];
        }
        return we ? ne.slice(0, we - 3) + "===".substring(we) : ne;
      }, c = typeof btoa == "function" ? function(N) {
        return btoa(N);
      } : i ? function(N) {
        return Buffer.from(N, "binary").toString("base64");
      } : d, v = i ? function(N) {
        return Buffer.from(N).toString("base64");
      } : function(N) {
        for (var K = 4096, _e = [], ke = 0, Se = N.length; ke < Se; ke += K)
          _e.push(p.apply(null, N.subarray(ke, ke + K)));
        return c(_e.join(""));
      }, b = function(N, K) {
        return K === void 0 && (K = !1), K ? h(v(N)) : v(N);
      }, _ = function(N) {
        if (N.length < 2) {
          var K = N.charCodeAt(0);
          return K < 128 ? N : K < 2048 ? p(192 | K >>> 6) + p(128 | K & 63) : p(224 | K >>> 12 & 15) + p(128 | K >>> 6 & 63) + p(128 | K & 63);
        } else {
          var K = 65536 + (N.charCodeAt(0) - 55296) * 1024 + (N.charCodeAt(1) - 56320);
          return p(240 | K >>> 18 & 7) + p(128 | K >>> 12 & 63) + p(128 | K >>> 6 & 63) + p(128 | K & 63);
        }
      }, E = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, C = function(N) {
        return N.replace(E, _);
      }, O = i ? function(N) {
        return Buffer.from(N, "utf8").toString("base64");
      } : a ? function(N) {
        return v(a.encode(N));
      } : function(N) {
        return c(C(N));
      }, D = function(N, K) {
        return K === void 0 && (K = !1), K ? h(O(N)) : O(N);
      }, I = function(N) {
        return D(N, !0);
      }, M = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, F = function(N) {
        switch (N.length) {
          case 4:
            var K = (7 & N.charCodeAt(0)) << 18 | (63 & N.charCodeAt(1)) << 12 | (63 & N.charCodeAt(2)) << 6 | 63 & N.charCodeAt(3), _e = K - 65536;
            return p((_e >>> 10) + 55296) + p((_e & 1023) + 56320);
          case 3:
            return p((15 & N.charCodeAt(0)) << 12 | (63 & N.charCodeAt(1)) << 6 | 63 & N.charCodeAt(2));
          default:
            return p((31 & N.charCodeAt(0)) << 6 | 63 & N.charCodeAt(1));
        }
      }, B = function(N) {
        return N.replace(M, F);
      }, W = function(N) {
        if (N = N.replace(/\s+/g, ""), !f.test(N))
          throw new TypeError("malformed base64.");
        N += "==".slice(2 - (N.length & 3));
        for (var K, _e = "", ke, Se, ne = 0; ne < N.length; )
          K = l[N.charAt(ne++)] << 18 | l[N.charAt(ne++)] << 12 | (ke = l[N.charAt(ne++)]) << 6 | (Se = l[N.charAt(ne++)]), _e += ke === 64 ? p(K >> 16 & 255) : Se === 64 ? p(K >> 16 & 255, K >> 8 & 255) : p(K >> 16 & 255, K >> 8 & 255, K & 255);
        return _e;
      }, te = typeof atob == "function" ? function(N) {
        return atob(g(N));
      } : i ? function(N) {
        return Buffer.from(N, "base64").toString("binary");
      } : W, V = i ? function(N) {
        return m(Buffer.from(N, "base64"));
      } : function(N) {
        return m(te(N).split("").map(function(K) {
          return K.charCodeAt(0);
        }));
      }, q = function(N) {
        return V(Y(N));
      }, L = i ? function(N) {
        return Buffer.from(N, "base64").toString("utf8");
      } : o ? function(N) {
        return o.decode(V(N));
      } : function(N) {
        return B(te(N));
      }, Y = function(N) {
        return g(N.replace(/[-_]/g, function(K) {
          return K == "-" ? "+" : "/";
        }));
      }, j = function(N) {
        return L(Y(N));
      }, Z = function(N) {
        if (typeof N != "string")
          return !1;
        var K = N.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(K) || !/[^\s0-9a-zA-Z\-_]/.test(K);
      }, re = function(N) {
        return {
          value: N,
          enumerable: !1,
          writable: !0,
          configurable: !0
        };
      }, de = function() {
        var N = function(K, _e) {
          return Object.defineProperty(String.prototype, K, re(_e));
        };
        N("fromBase64", function() {
          return j(this);
        }), N("toBase64", function(K) {
          return D(this, K);
        }), N("toBase64URI", function() {
          return D(this, !0);
        }), N("toBase64URL", function() {
          return D(this, !0);
        }), N("toUint8Array", function() {
          return q(this);
        });
      }, ve = function() {
        var N = function(K, _e) {
          return Object.defineProperty(Uint8Array.prototype, K, re(_e));
        };
        N("toBase64", function(K) {
          return b(this, K);
        }), N("toBase64URI", function() {
          return b(this, !0);
        }), N("toBase64URL", function() {
          return b(this, !0);
        });
      }, Ce = function() {
        de(), ve();
      }, Ae = {
        version: r,
        VERSION: n,
        atob: te,
        atobPolyfill: W,
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
        isValid: Z,
        fromUint8Array: b,
        toUint8Array: q,
        extendString: de,
        extendUint8Array: ve,
        extendBuiltins: Ce
      };
      return Ae.Base64 = {}, Object.keys(Ae).forEach(function(N) {
        return Ae.Base64[N] = Ae[N];
      }), Ae;
    });
  }(Gi)), Gi.exports;
}
var Hu;
function Ey() {
  if (Hu) return an;
  Hu = 1;
  var e = an.__assign || function() {
    return e = Object.assign || function(p) {
      for (var m, h = 1, g = arguments.length; h < g; h++) {
        m = arguments[h];
        for (var d in m) Object.prototype.hasOwnProperty.call(m, d) && (p[d] = m[d]);
      }
      return p;
    }, e.apply(this, arguments);
  }, t = an.__awaiter || function(p, m, h, g) {
    function d(c) {
      return c instanceof h ? c : new h(function(v) {
        v(c);
      });
    }
    return new (h || (h = Promise))(function(c, v) {
      function b(C) {
        try {
          E(g.next(C));
        } catch (O) {
          v(O);
        }
      }
      function _(C) {
        try {
          E(g.throw(C));
        } catch (O) {
          v(O);
        }
      }
      function E(C) {
        C.done ? c(C.value) : d(C.value).then(b, _);
      }
      E((g = g.apply(p, m || [])).next());
    });
  }, r = an.__generator || function(p, m) {
    var h = { label: 0, sent: function() {
      if (c[0] & 1) throw c[1];
      return c[1];
    }, trys: [], ops: [] }, g, d, c, v = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return v.next = b(0), v.throw = b(1), v.return = b(2), typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function b(E) {
      return function(C) {
        return _([E, C]);
      };
    }
    function _(E) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; v && (v = 0, E[0] && (h = 0)), h; ) try {
        if (g = 1, d && (c = E[0] & 2 ? d.return : E[0] ? d.throw || ((c = d.return) && c.call(d), 0) : d.next) && !(c = c.call(d, E[1])).done) return c;
        switch (d = 0, c && (E = [E[0] & 2, c.value]), E[0]) {
          case 0:
          case 1:
            c = E;
            break;
          case 4:
            return h.label++, { value: E[1], done: !1 };
          case 5:
            h.label++, d = E[1], E = [0];
            continue;
          case 7:
            E = h.ops.pop(), h.trys.pop();
            continue;
          default:
            if (c = h.trys, !(c = c.length > 0 && c[c.length - 1]) && (E[0] === 6 || E[0] === 2)) {
              h = 0;
              continue;
            }
            if (E[0] === 3 && (!c || E[1] > c[0] && E[1] < c[3])) {
              h.label = E[1];
              break;
            }
            if (E[0] === 6 && h.label < c[1]) {
              h.label = c[1], c = E;
              break;
            }
            if (c && h.label < c[2]) {
              h.label = c[2], h.ops.push(E);
              break;
            }
            c[2] && h.ops.pop(), h.trys.pop();
            continue;
        }
        E = m.call(p, h);
      } catch (C) {
        E = [6, C], d = 0;
      } finally {
        g = c = 0;
      }
      if (E[0] & 5) throw E[1];
      return { value: E[0] ? E[1] : void 0, done: !0 };
    }
  }, n = an.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(an, "__esModule", { value: !0 }), an.KintoneRequestConfigBuilder = void 0;
  var i = n(Bc()), o = n(/* @__PURE__ */ _y()), a = /* @__PURE__ */ xy(), u = ho(), s = "http", l = 4096, f = (
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
      return p.prototype.build = function(m, h, g, d) {
        return t(this, void 0, void 0, function() {
          var c, v, O, b, _, E, C, O, D, I, M, F, B;
          return r(this, function(W) {
            switch (W.label) {
              case 0:
                switch (c = e(e(e({ method: m, headers: this.headers, url: "".concat(this.baseUrl).concat(h) }, d || {}), u.platformDeps.buildPlatformDependentConfig({
                  httpsAgent: this.httpsAgent,
                  clientCertAuth: this.clientCertAuth,
                  socketTimeout: this.socketTimeout
                })), { proxy: this.buildProxyConfig(this.proxy) }), v = m, v) {
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
                return O = this.buildRequestUrl(h, g), O.length > l ? (b = [e({}, c)], M = { method: "post", headers: e(e({}, this.headers), { "X-HTTP-Method-Override": "GET" }) }, [4, this.buildData(g)]) : [3, 3];
              case 2:
                return [2, e.apply(void 0, b.concat([(M.data = W.sent(), M)]))];
              case 3:
                return [2, e(e({}, c), { url: O })];
              case 4:
                return g instanceof i.default ? [4, this.buildData(g)] : [3, 6];
              case 5:
                return _ = W.sent(), [2, e(e({}, c), { headers: (
                  // NOTE: formData.getHeaders does not exist in a browser environment.
                  typeof _.getHeaders == "function" ? e(e({}, this.headers), _.getHeaders()) : this.headers
                ), data: _ })];
              case 6:
                return E = [e({}, c)], F = {}, [4, this.buildData(g)];
              case 7:
                return [2, e.apply(void 0, E.concat([(F.data = W.sent(), F)]))];
              case 8:
                return C = [e({}, c)], B = {}, [4, this.buildData(g)];
              case 9:
                return [2, e.apply(void 0, C.concat([(B.data = W.sent(), B)]))];
              case 10:
                return D = this.buildRequestUrl, I = [h], [4, this.buildData(g)];
              case 11:
                return O = D.apply(this, I.concat([W.sent()])), [2, e(e({}, c), { url: O })];
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
        var h;
        if (m !== void 0) {
          if (m === !1)
            return !1;
          var g = m;
          return g.auth && (g.auth.username.length === 0 || g.auth.password.length === 0) && (g.auth = void 0), g.protocol = (h = g.protocol) !== null && h !== void 0 ? h : s, g;
        }
      }, p.prototype.buildRequestUrl = function(m, h) {
        return "".concat(this.baseUrl).concat(m, "?").concat(o.default.stringify(h));
      }, p.prototype.buildData = function(m) {
        return t(this, void 0, void 0, function() {
          var h;
          return r(this, function(g) {
            switch (g.label) {
              case 0:
                return this.auth.type !== "session" ? [3, 2] : [4, this.getRequestToken()];
              case 1:
                return h = g.sent(), m instanceof i.default ? (m.append("__REQUEST_TOKEN__", h), [2, m]) : [2, e({ __REQUEST_TOKEN__: h }, m)];
              case 2:
                return [2, m];
            }
          });
        });
      }, p.prototype.buildHeaders = function(m) {
        var h = m.basicAuth, g = m.userAgent, d = h ? {
          Authorization: "Basic ".concat(a.Base64.encode("".concat(h.username, ":").concat(h.password)))
        } : {}, c = u.platformDeps.buildHeaders({ userAgent: g }), v = e(e({}, c), d);
        switch (this.auth.type) {
          case "password":
            return e(e({}, v), { "X-Cybozu-Authorization": a.Base64.encode("".concat(this.auth.username, ":").concat(this.auth.password)) });
          case "apiToken": {
            var b = this.auth.apiToken;
            return Array.isArray(b) ? e(e({}, v), { "X-Cybozu-API-Token": b.join(",") }) : e(e({}, v), { "X-Cybozu-API-Token": b });
          }
          case "oAuthToken":
            return e(e({}, v), { Authorization: "Bearer ".concat(this.auth.oAuthToken) });
          default:
            return e(e({}, v), { "X-Requested-With": "XMLHttpRequest" });
        }
      }, p.prototype.getRequestToken = function() {
        return t(this, void 0, void 0, function() {
          var m;
          return r(this, function(h) {
            switch (h.label) {
              case 0:
                return this.requestToken !== null ? [3, 2] : (m = this, [4, u.platformDeps.getRequestToken()]);
              case 1:
                m.requestToken = h.sent(), h.label = 2;
              case 2:
                return [2, this.requestToken];
            }
          });
        });
      }, p;
    }()
  );
  return an.KintoneRequestConfigBuilder = f, an;
}
var Bn = {}, Gu;
function Oy() {
  if (Gu) return Bn;
  Gu = 1;
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
  var r = Ss(), n = (
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
          throw new r.KintoneAbortSearchError(o.headers["x-cybozu-warning"]);
        return o.data;
      }, i.prototype.handleErrorResponse = function(o) {
        if (!o.response)
          throw /mac verify failure/.test(o.toString()) ? new Error("invalid clientCertAuth setting") : o;
        var a = o.response, u = a.data, s = t(a, ["data"]);
        throw typeof u == "string" ? new Error("".concat(s.status, ": ").concat(s.statusText)) : new r.KintoneRestAPIError(e({ data: u }, s));
      }, i;
    }()
  );
  return Bn.KintoneResponseHandler = n, Bn;
}
var Ku;
function Ay() {
  if (Ku) return nr;
  Ku = 1;
  var e = nr.__assign || function() {
    return e = Object.assign || function(b) {
      for (var _, E = 1, C = arguments.length; E < C; E++) {
        _ = arguments[E];
        for (var O in _) Object.prototype.hasOwnProperty.call(_, O) && (b[O] = _[O]);
      }
      return b;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(nr, "__esModule", { value: !0 }), nr.KintoneRestAPIClient = void 0;
  var t = Tg(), r = kg(), n = Mg(), i = jg(), o = Fg(), a = Bg(), u = Ug(), s = Ey(), l = Oy(), f = ho(), p = _s(), m = function(b) {
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
        var E, C, O;
        g(_), this.baseUrl = f.platformDeps.buildBaseUrl(_.baseUrl).replace(/\/+$/, "");
        var D = m((E = _.auth) !== null && E !== void 0 ? E : {}), I = new s.KintoneRequestConfigBuilder(e(e({}, _), { baseUrl: this.baseUrl, auth: D })), M = new l.KintoneResponseHandler({
          enableAbortSearchError: (O = (C = _.featureFlags) === null || C === void 0 ? void 0 : C.enableAbortSearchError) !== null && O !== void 0 ? O : !1
        }), F = new u.DefaultHttpClient({
          responseHandler: M,
          requestConfigBuilder: I
        }), B = _.guestSpaceId;
        this.bulkRequest_ = new t.BulkRequestClient(F, B), this.record = new n.RecordClient(F, this.bulkRequest_, B), this.app = new r.AppClient(F, B), this.space = new i.SpaceClient(F, B), this.file = new o.FileClient(F, B), this.plugin = new a.PluginClient(F);
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
  var g = function(b) {
    d(b.baseUrl), c(b.guestSpaceId), v(b.socketTimeout);
  }, d = function(b) {
    if (b !== void 0) {
      var _ = new URL(b);
      if (_.hostname !== "localhost" && _.protocol !== "https:")
        throw new Error('The protocol of baseUrl must be "https".');
    }
  }, c = function(b) {
    if (b === "" || b === null)
      throw new Error("invalid guestSpaceId: got [".concat(b, "]"));
  }, v = function(b) {
    if (b !== void 0) {
      var _ = parseFloat(b.toString());
      if (isNaN(_) || _ < 0)
        throw new Error("Invalid socketTimeout. Must be a positive number.");
    }
  };
  return nr;
}
var zu;
function Dy() {
  return zu || (zu = 1, function(e) {
    var t = Fn.__createBinding || (Object.create ? function(s, l, f, p) {
      p === void 0 && (p = f);
      var m = Object.getOwnPropertyDescriptor(l, f);
      (!m || ("get" in m ? !l.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
        return l[f];
      } }), Object.defineProperty(s, p, m);
    } : function(s, l, f, p) {
      p === void 0 && (p = f), s[p] = l[f];
    }), r = Fn.__setModuleDefault || (Object.create ? function(s, l) {
      Object.defineProperty(s, "default", { enumerable: !0, value: l });
    } : function(s, l) {
      s.default = l;
    }), n = Fn.__importStar || /* @__PURE__ */ function() {
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
    }(), i = Fn.__exportStar || function(s, l) {
      for (var f in s) f !== "default" && !Object.prototype.hasOwnProperty.call(l, f) && t(l, s, f);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KintoneRestAPIClient = void 0;
    var o = ho(), a = n(Rg());
    (0, o.injectPlatformDeps)(a);
    var u = Ay();
    Object.defineProperty(e, "KintoneRestAPIClient", { enumerable: !0, get: function() {
      return u.KintoneRestAPIClient;
    } }), i(Ss(), e);
  }(Fn)), Fn;
}
var Cy = Dy();
const Ry = {
  key: 0,
  class: "kvc-file-value"
}, Py = { class: "kvc-file-select-list" }, Ty = ["src"], ky = { key: 1 }, Iy = { class: "kvc-file-select-file-name" }, $y = { class: "kvc-file-select-file-size" }, Ny = { class: "kvc-file-select-list-item" }, My = ["onClick"], jy = { class: "kvc-file-select-file-name" }, Fy = { class: "kvc-file-select-file-size" }, By = ["src"], qy = { class: "kvc-file-select-group" }, Ly = ["disabled"], Uy = ["multiple", "accept"], Vy = /* @__PURE__ */ ze({
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
    const r = e, n = t, i = new Cy.KintoneRestAPIClient(), o = Ne(null), a = Ne(null), u = Ne(r.modelValue || []), s = Ne(null), l = Ne(null), f = Ne(!1);
    ao(() => r.modelValue, (c) => {
      u.value = c ? Array.from(c) : [];
    }), br(async () => {
      if (u.value.length)
        for await (const c of u.value)
          c.fileKey && !c.data && (c.data = await i.file.downloadFile({ fileKey: c.fileKey }));
      s.value && tg(s, u, {
        onStart: () => f.value = !0,
        onEnd: () => {
          f.value = !1, setTimeout(() => {
            n("update:modelValue", u.value), n("change", u.value);
          }, 0);
        }
      });
    });
    const p = (c, v = 0) => {
      if (c === 0) return "0 Bytes";
      const b = 1024, _ = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], E = Math.floor(Math.log(c) / Math.log(b)), C = (c / Math.pow(b, E)).toFixed(v);
      return `${Number(C).toLocaleString()} ${_[E]}`;
    }, m = (c, v) => {
      if (!c || !v) return;
      const b = new Uint8Array(c), _ = Array.from(b).map((E) => String.fromCharCode(E)).join("");
      return `data:${v};base64,${btoa(_)}`;
    }, h = (c) => {
      u.value.splice(c, 1), n("update:modelValue", u.value), n("change", u.value);
    }, g = async (c) => {
      if (!c) return;
      const v = Array.from(c), b = v.filter((E) => !E.fileKey), _ = r.multiple ? [...u.value, ...v.filter((E) => E.fileKey)] : [];
      for await (const E of b) {
        let C = null;
        r.autoUpload && (C = (await i.file.uploadFile({ file: { name: E.name, data: E } })).fileKey);
        const O = await E.arrayBuffer();
        _.push({
          fileKey: C ?? void 0,
          name: E.name,
          size: E.size,
          contentType: E.type,
          data: O
        });
      }
      n("update:modelValue", _), n("change", _), u.value = _, a.value = null;
    }, { isOverDropZone: d } = mh(l, {
      onDrop: (c) => {
        g(c);
      },
      dataTypes: Te(() => {
        var c;
        return ((c = r.accept) == null ? void 0 : c.split(",")) ?? [];
      }),
      // ← 明示的にstring[] or []
      multiple: r.multiple,
      preventDefaultForUnhandled: !1
    });
    return (c, v) => c.readOnly ? (H(), X("div", Ry, [
      ee("ul", Py, [
        (H(!0), X(bt, null, Ot(u.value, (b, _) => (H(), X("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          b.data && (b.contentType || "").startsWith("image/") ? (H(), X("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(b.data, b.contentType)
          }, null, 8, Ty)) : (H(), X("span", ky, [
            ee("span", Iy, dt(b.name), 1),
            ee("span", $y, "(" + dt(p(b.size)) + ")", 1)
          ]))
        ]))), 128))
      ])
    ])) : (H(), X("div", {
      key: 1,
      ref_key: "dropZoneRef",
      ref: l,
      class: "kvc-file-select"
    }, [
      ee("ul", {
        class: "kvc-file-select-list",
        ref_key: "sortWrapRef",
        ref: s
      }, [
        (H(!0), X(bt, null, Ot(u.value, (b, _) => (H(), X("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          ee("div", Ny, [
            c.disabled ? $e("", !0) : (H(), X("button", {
              key: 0,
              type: "button",
              class: "kvc-file-select-delete-button",
              onClick: (E) => h(_)
            }, [
              ct(Le(Et), {
                icon: "mdi:close",
                width: "22"
              })
            ], 8, My)),
            ee("span", jy, dt(b.name), 1),
            ee("span", Fy, dt(p(b.size)), 1)
          ]),
          b.data && (b.contentType || "").startsWith("image/") ? (H(), X("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(b.data, b.contentType)
          }, null, 8, By)) : $e("", !0)
        ]))), 128))
      ], 512),
      ee("div", qy, [
        ee("button", {
          type: "button",
          disabled: c.disabled,
          class: "kvc-file-select-button",
          onClick: v[0] || (v[0] = (b) => {
            var _;
            return (_ = o.value) == null ? void 0 : _.click();
          })
        }, " 参照 ", 8, Ly),
        v[3] || (v[3] = ee("p", { class: "kvc-file-select-text" }, "(最大1 GB)", -1))
      ]),
      !f.value && Le(d) ? (H(), X("div", {
        key: 0,
        class: "kvc-file-select-file-dropzone",
        onClick: v[1] || (v[1] = (b) => d.value = !1)
      }, " ここにファイルをドロップします。 ")) : $e("", !0),
      ee("input", {
        type: "file",
        ref_key: "fileSelectRef",
        ref: o,
        multiple: c.multiple,
        accept: c.accept,
        onChange: v[2] || (v[2] = (b) => {
          var _;
          return g(((_ = b.target) == null ? void 0 : _.files) ?? null);
        })
      }, null, 40, Uy)
    ], 512));
  }
}), Wy = { class: "kvc-tab" }, Hy = { class: "kvc-tab-header" }, Gy = ["onClick"], Ky = /* @__PURE__ */ ze({
  __name: "index",
  props: {
    small: { type: Boolean },
    modelValue: {},
    width: {},
    height: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = t, i = Ne(e.modelValue), o = (s) => {
      i.value = s, r("update:modelValue", s);
    };
    Hs("activeTab", i), Hs("setActiveTab", o);
    const a = ls(), u = Te(() => {
      const s = [];
      return (a.default ? a.default({}) : []).forEach((f) => {
        const p = f.props;
        p != null && p.label && (p != null && p.name) && s.push({
          label: p.label,
          name: p.name
        });
      }), !i.value && s.length > 0 && (i.value = s[0].name), s;
    });
    return (s, l) => (H(), X("div", Wy, [
      ee("div", Hy, [
        (H(!0), X(bt, null, Ot(u.value, (f) => (H(), X("button", {
          key: f.name,
          type: "button",
          class: at(["kvc-tab-item", {
            "is-active": i.value === f.name,
            "kvc-tab-item-small": s.small
          }]),
          onClick: (p) => o(f.name)
        }, [
          ee("span", null, dt(f.label), 1)
        ], 10, Gy))), 128))
      ]),
      ee("div", {
        class: at(["kvc-tab-content", {
          "kvc-tab-content-small": s.small
        }]),
        style: Yt({
          minWidth: s.width,
          minHeight: s.height
        })
      }, [
        ft(s.$slots, "default")
      ], 6)
    ]));
  }
}), zy = { key: 0 }, Yy = /* @__PURE__ */ ze({
  __name: "pane",
  props: {
    label: {},
    name: {}
  },
  setup(e) {
    const t = e, r = Mf("activeTab", Ne("")), n = Te(() => (r == null ? void 0 : r.value) === t.name);
    return (i, o) => n.value ? (H(), X("div", zy, [
      ft(i.$slots, "default")
    ])) : $e("", !0);
  }
}), Xy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KvcButton: Eh,
  KvcCheckbox: Lh,
  KvcDatePicker: xc,
  KvcDateTimePicker: Dm,
  KvcDialog: Zf,
  KvcDropdown: xh,
  KvcField: Ph,
  KvcFileSelect: Vy,
  KvcRadio: Nh,
  KvcRow: Lf,
  KvcSpinner: Gf,
  KvcTab: Ky,
  KvcTabPane: Yy,
  KvcTable: ah,
  KvcTextInput: gs,
  KvcTextarea: Rm,
  KvcTimePicker: Ec,
  KvcWrap: jf
}, Symbol.toStringTag, { value: "Module" })), ev = {
  install(e) {
    Object.entries(Xy).forEach(([t, r]) => {
      const n = r;
      e.component(n.name || t, n);
    });
  }
};
export {
  Eh as KvcButton,
  Lh as KvcCheckbox,
  xc as KvcDatePicker,
  Dm as KvcDateTimePicker,
  Zf as KvcDialog,
  xh as KvcDropdown,
  Ph as KvcField,
  Vy as KvcFileSelect,
  Nh as KvcRadio,
  Lf as KvcRow,
  Gf as KvcSpinner,
  Ky as KvcTab,
  Yy as KvcTabPane,
  ah as KvcTable,
  gs as KvcTextInput,
  Rm as KvcTextarea,
  Ec as KvcTimePicker,
  jf as KvcWrap,
  ev as default
};

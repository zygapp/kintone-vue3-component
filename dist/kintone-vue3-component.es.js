import { defineComponent as Ve, openBlock as X, createBlock as un, resolveDynamicComponent as wu, withModifiers as _u, withCtx as Su, renderSlot as tt, createElementBlock as J, onMounted as or, watch as Jr, computed as ke, withDirectives as Jt, createElementVNode as Q, createStaticVNode as xu, vShow as Qr, normalizeStyle as ln, createCommentVNode as je, h as pa, normalizeClass as Ye, Fragment as pt, renderList as mt, toDisplayString as Qe, mergeProps as Eu, createVNode as dt, unref as Ge, getCurrentScope as Ou, onScopeDispose as Ru, nextTick as sl, getCurrentInstance as Au, ref as Ae, shallowRef as Pu, toValue as Mt, useSlots as ll, vModelRadio as ku, vModelCheckbox as Cu, vModelDynamic as Tu, reactive as Du, vModelText as Iu, isRef as $u, provide as ha, inject as Nu } from "vue";
const ju = /* @__PURE__ */ Ve({
  __name: "wrap",
  props: {
    isForm: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, i) => (X(), un(wu(n.isForm ? "form" : "div"), {
      id: "kvc-wrap",
      class: "kvc-wrap",
      onSubmit: i[0] || (i[0] = _u((o) => r("submit", o), ["prevent"]))
    }, {
      default: Su(() => [
        tt(n.$slots, "default")
      ]),
      _: 3
    }, 32));
  }
}), No = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Mu = {}, qu = { class: "kvc-row" };
function Bu(e, t) {
  return X(), J("div", qu, [
    tt(e.$slots, "default")
  ]);
}
const Fu = /* @__PURE__ */ No(Mu, [["render", Bu]]), Lu = { class: "kvc-spinner-wrapper" }, Uu = { class: "kvc-spinner" }, Vu = ["innerHTML"], Wu = /* @__PURE__ */ Ve({
  __name: "spinner",
  props: {
    modelValue: { type: Boolean, default: !1 },
    text: { default: "読み込み中..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = (o) => {
      const l = document.querySelector("body");
      o ? l && (l.style.overflow = "hidden") : l && (l.style.overflow = "auto");
    };
    or(() => n(r.modelValue)), Jr(() => r.modelValue, n);
    const i = ke(() => (r.text || "").replace(`
`, "<br>"));
    return (o, l) => Jt((X(), J("div", Lu, [
      Q("div", Uu, [
        l[0] || (l[0] = xu('<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" data-v-e1a38298><g data-v-e1a38298><circle cx="12" cy="2.5" r="1.5" fill="#99ccff" opacity="0.14" data-v-e1a38298></circle><circle cx="16.75" cy="3.77" r="1.5" fill="#99ccff" opacity="0.29" data-v-e1a38298></circle><circle cx="20.23" cy="7.25" r="1.5" fill="#99ccff" opacity="0.43" data-v-e1a38298></circle><circle cx="21.5" cy="12" r="1.5" fill="#99ccff" opacity="0.57" data-v-e1a38298></circle><circle cx="20.23" cy="16.75" r="1.5" fill="#99ccff" opacity="0.71" data-v-e1a38298></circle><circle cx="16.75" cy="20.23" r="1.5" fill="#99ccff" opacity="0.86" data-v-e1a38298></circle><circle cx="12" cy="21.5" r="1.5" fill="#99ccff" data-v-e1a38298></circle></g></svg>', 1)),
        Q("span", {
          class: "kvc-spinner-text",
          innerHTML: i.value
        }, null, 8, Vu)
      ])
    ], 512)), [
      [Qr, o.modelValue]
    ]);
  }
}), Hu = /* @__PURE__ */ No(Wu, [["__scopeId", "data-v-e1a38298"]]), Gu = {
  key: 0,
  class: "kvc-dialog-wrapper"
}, Ku = { class: "kvc-dialog-header" }, zu = { class: "kvc-dialog-content-wrapper" }, Yu = { class: "kvc-dialog-content" }, Xu = { class: "kvc-dialog-footer" }, Ju = /* @__PURE__ */ Ve({
  __name: "dialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    width: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = t, n = e, i = (o) => {
      const l = document.querySelector("body");
      o ? l && (l.style.overflow = "hidden") : l && (l.style.overflow = "auto");
    };
    return or(() => i(n.modelValue)), Jr(() => n.modelValue, i), (o, l) => o.modelValue ? (X(), J("div", Gu, [
      Q("div", {
        class: "kvc-dialog",
        style: ln(o.width ? { width: o.width } : null)
      }, [
        Q("div", Ku, [
          tt(o.$slots, "header", {}, void 0, !0),
          Q("button", {
            type: "button",
            class: "kvc-dialog-close",
            onClick: l[0] || (l[0] = (c) => r("update:modelValue", !1))
          }, l[1] || (l[1] = [
            Q("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "18",
              height: "18",
              viewBox: "0 0 24 24"
            }, [
              Q("path", {
                fill: "currentColor",
                d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              })
            ], -1)
          ]))
        ]),
        Q("div", zu, [
          tt(o.$slots, "body-header", {}, void 0, !0),
          Q("div", Yu, [
            tt(o.$slots, "default", {}, void 0, !0)
          ]),
          tt(o.$slots, "body-footer", {}, void 0, !0)
        ]),
        Q("div", Xu, [
          tt(o.$slots, "footer", {}, void 0, !0)
        ])
      ], 4)
    ])) : je("", !0);
  }
}), Qu = /* @__PURE__ */ No(Ju, [["__scopeId", "data-v-5f807e54"]]), ul = /^[a-z0-9]+(-[a-z0-9]+)*$/, Zr = (e, t, r, n = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    n = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const c = i.pop(), s = i.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : n,
      prefix: s,
      name: c
    };
    return t && !kr(u) ? null : u;
  }
  const o = i[0], l = o.split("-");
  if (l.length > 1) {
    const c = {
      provider: n,
      prefix: l.shift(),
      name: l.join("-")
    };
    return t && !kr(c) ? null : c;
  }
  if (r && n === "") {
    const c = {
      provider: n,
      prefix: "",
      name: o
    };
    return t && !kr(c, r) ? null : c;
  }
  return null;
}, kr = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, cl = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Wr = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), ei = Object.freeze({
  ...cl,
  ...Wr
}), Ao = Object.freeze({
  ...ei,
  body: "",
  hidden: !1
});
function Zu(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (r.rotate = n), r;
}
function ma(e, t) {
  const r = Zu(e, t);
  for (const n in Ao)
    n in Wr ? n in e && !(n in r) && (r[n] = Wr[n]) : n in t ? r[n] = t[n] : n in e && (r[n] = e[n]);
  return r;
}
function ec(e, t) {
  const r = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function o(l) {
    if (r[l])
      return i[l] = [];
    if (!(l in i)) {
      i[l] = null;
      const c = n[l] && n[l].parent, s = c && o(c);
      s && (i[l] = [c].concat(s));
    }
    return i[l];
  }
  return Object.keys(r).concat(Object.keys(n)).forEach(o), i;
}
function tc(e, t, r) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function l(c) {
    o = ma(
      n[c] || i[c],
      o
    );
  }
  return l(t), r.forEach(l), ma(e, o);
}
function fl(e, t) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((i) => {
    t(i, null), r.push(i);
  });
  const n = ec(e);
  for (const i in n) {
    const o = n[i];
    o && (t(i, tc(e, i, o)), r.push(i));
  }
  return r;
}
const nc = {
  provider: "",
  aliases: {},
  not_found: {},
  ...cl
};
function mi(e, t) {
  for (const r in t)
    if (r in e && typeof e[r] != typeof t[r])
      return !1;
  return !0;
}
function dl(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !mi(e, nc))
    return null;
  const r = t.icons;
  for (const i in r) {
    const o = r[i];
    if (
      // Name cannot be empty
      !i || // Must have body
      typeof o.body != "string" || // Check other props
      !mi(
        o,
        Ao
      )
    )
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in n) {
    const o = n[i], l = o.parent;
    if (
      // Name cannot be empty
      !i || // Parent must be set and point to existing icon
      typeof l != "string" || !r[l] && !n[l] || // Check other props
      !mi(
        o,
        Ao
      )
    )
      return null;
  }
  return t;
}
const ya = /* @__PURE__ */ Object.create(null);
function rc(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function In(e, t) {
  const r = ya[e] || (ya[e] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = rc(e, t));
}
function pl(e, t) {
  return dl(t) ? fl(t, (r, n) => {
    n ? e.icons[r] = n : e.missing.add(r);
  }) : [];
}
function ic(e, t, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[t] = { ...r }, !0;
  } catch {
  }
  return !1;
}
let nr = !1;
function hl(e) {
  return typeof e == "boolean" && (nr = e), nr;
}
function oc(e) {
  const t = typeof e == "string" ? Zr(e, !0, nr) : e;
  if (t) {
    const r = In(t.provider, t.prefix), n = t.name;
    return r.icons[n] || (r.missing.has(n) ? null : void 0);
  }
}
function ac(e, t) {
  const r = Zr(e, !0, nr);
  if (!r)
    return !1;
  const n = In(r.provider, r.prefix);
  return t ? ic(n, r.name, t) : (n.missing.add(r.name), !0);
}
function sc(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), nr && !t && !e.prefix) {
    let i = !1;
    return dl(e) && (e.prefix = "", fl(e, (o, l) => {
      ac(o, l) && (i = !0);
    })), i;
  }
  const r = e.prefix;
  if (!kr({
    provider: t,
    prefix: r,
    name: "a"
  }))
    return !1;
  const n = In(t, r);
  return !!pl(n, e);
}
const ml = Object.freeze({
  width: null,
  height: null
}), yl = Object.freeze({
  // Dimensions
  ...ml,
  // Transformations
  ...Wr
}), lc = /(-?[0-9.]*[0-9]+[0-9.]*)/g, uc = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function va(e, t, r) {
  if (t === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * t * r) / r;
  if (typeof e != "string")
    return e;
  const n = e.split(lc);
  if (n === null || !n.length)
    return e;
  const i = [];
  let o = n.shift(), l = uc.test(o);
  for (; ; ) {
    if (l) {
      const c = parseFloat(o);
      isNaN(c) ? i.push(o) : i.push(Math.ceil(c * t * r) / r);
    } else
      i.push(o);
    if (o = n.shift(), o === void 0)
      return i.join("");
    l = !l;
  }
}
function cc(e, t = "defs") {
  let r = "";
  const n = e.indexOf("<" + t);
  for (; n >= 0; ) {
    const i = e.indexOf(">", n), o = e.indexOf("</" + t);
    if (i === -1 || o === -1)
      break;
    const l = e.indexOf(">", o);
    if (l === -1)
      break;
    r += e.slice(i + 1, o).trim(), e = e.slice(0, n).trim() + e.slice(l + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function fc(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function dc(e, t, r) {
  const n = cc(e);
  return fc(n.defs, t + n.content + r);
}
const pc = (e) => e === "unset" || e === "undefined" || e === "none";
function hc(e, t) {
  const r = {
    ...ei,
    ...e
  }, n = {
    ...yl,
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
    _ % 2 === 1 && (i.left !== i.top && (E = i.left, i.left = i.top, i.top = E), i.width !== i.height && (E = i.width, i.width = i.height, i.height = E)), a.length && (o = dc(
      o,
      '<g transform="' + a.join(" ") + '">',
      "</g>"
    ));
  });
  const l = n.width, c = n.height, s = i.width, u = i.height;
  let f, p;
  l === null ? (p = c === null ? "1em" : c === "auto" ? u : c, f = va(p, s / u)) : (f = l === "auto" ? s : l, p = c === null ? va(f, u / s) : c === "auto" ? u : c);
  const m = {}, g = (d, a) => {
    pc(a) || (m[d] = a.toString());
  };
  g("width", f), g("height", p);
  const b = [i.left, i.top, s, u];
  return m.viewBox = b.join(" "), {
    attributes: m,
    viewBox: b,
    body: o
  };
}
const mc = /\sid="(\S+)"/g, yc = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let vc = 0;
function gc(e, t = yc) {
  const r = [];
  let n;
  for (; n = mc.exec(e); )
    r.push(n[1]);
  if (!r.length)
    return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((o) => {
    const l = typeof t == "function" ? t(o) : t + (vc++).toString(), c = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + l + i + "$3"
    );
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
const Po = /* @__PURE__ */ Object.create(null);
function bc(e, t) {
  Po[e] = t;
}
function ko(e) {
  return Po[e] || Po[""];
}
function jo(e) {
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
const Mo = /* @__PURE__ */ Object.create(null), Wn = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Cr = [];
for (; Wn.length > 0; )
  Wn.length === 1 || Math.random() > 0.5 ? Cr.push(Wn.shift()) : Cr.push(Wn.pop());
Mo[""] = jo({
  resources: ["https://api.iconify.design"].concat(Cr)
});
function wc(e, t) {
  const r = jo(t);
  return r === null ? !1 : (Mo[e] = r, !0);
}
function qo(e) {
  return Mo[e];
}
const _c = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let ga = _c();
function Sc(e, t) {
  const r = qo(e);
  if (!r)
    return 0;
  let n;
  if (!r.maxURL)
    n = 0;
  else {
    let i = 0;
    r.resources.forEach((l) => {
      i = Math.max(i, l.length);
    });
    const o = t + ".json?icons=";
    n = r.maxURL - i - r.path.length - o.length;
  }
  return n;
}
function xc(e) {
  return e === 404;
}
const Ec = (e, t, r) => {
  const n = [], i = Sc(e, t), o = "icons";
  let l = {
    type: o,
    provider: e,
    prefix: t,
    icons: []
  }, c = 0;
  return r.forEach((s, u) => {
    c += s.length + 1, c >= i && u > 0 && (n.push(l), l = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, c = s.length), l.icons.push(s);
  }), n.push(l), n;
};
function Oc(e) {
  if (typeof e == "string") {
    const t = qo(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Rc = (e, t, r) => {
  if (!ga) {
    r("abort", 424);
    return;
  }
  let n = Oc(t.provider);
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
  ga(e + n).then((o) => {
    const l = o.status;
    if (l !== 200) {
      setTimeout(() => {
        r(xc(l) ? "abort" : "next", l);
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
}, Ac = {
  prepare: Ec,
  send: Rc
};
function Pc(e) {
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
    const o = i.provider, l = i.prefix, c = i.name, s = r[o] || (r[o] = /* @__PURE__ */ Object.create(null)), u = s[l] || (s[l] = In(o, l));
    let f;
    c in u.icons ? f = t.loaded : l === "" || u.missing.has(c) ? f = t.missing : f = t.pending;
    const p = {
      provider: o,
      prefix: l,
      name: c
    };
    f.push(p);
  }), t;
}
function vl(e, t) {
  e.forEach((r) => {
    const n = r.loaderCallbacks;
    n && (r.loaderCallbacks = n.filter((i) => i.id !== t));
  });
}
function kc(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let r = !1;
    const n = e.provider, i = e.prefix;
    t.forEach((o) => {
      const l = o.icons, c = l.pending.length;
      l.pending = l.pending.filter((s) => {
        if (s.prefix !== i)
          return !0;
        const u = s.name;
        if (e.icons[u])
          l.loaded.push({
            provider: n,
            prefix: i,
            name: u
          });
        else if (e.missing.has(u))
          l.missing.push({
            provider: n,
            prefix: i,
            name: u
          });
        else
          return r = !0, !0;
        return !1;
      }), l.pending.length !== c && (r || vl([e], o.id), o.callback(
        l.loaded.slice(0),
        l.missing.slice(0),
        l.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let Cc = 0;
function Tc(e, t, r) {
  const n = Cc++, i = vl.bind(null, r, n);
  if (!t.pending.length)
    return i;
  const o = {
    id: n,
    icons: t,
    callback: e,
    abort: i
  };
  return r.forEach((l) => {
    (l.loaderCallbacks || (l.loaderCallbacks = [])).push(o);
  }), i;
}
function Dc(e, t = !0, r = !1) {
  const n = [];
  return e.forEach((i) => {
    const o = typeof i == "string" ? Zr(i, t, r) : i;
    o && n.push(o);
  }), n;
}
var Ic = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function $c(e, t, r, n) {
  const i = e.resources.length, o = e.random ? Math.floor(Math.random() * i) : e.index;
  let l;
  if (e.random) {
    let R = e.resources.slice(0);
    for (l = []; R.length > 1; ) {
      const A = Math.floor(Math.random() * R.length);
      l.push(R[A]), R = R.slice(0, A).concat(R.slice(A + 1));
    }
    l = l.concat(R);
  } else
    l = e.resources.slice(o).concat(e.resources.slice(0, o));
  const c = Date.now();
  let s = "pending", u = 0, f, p = null, m = [], g = [];
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
      queriesSent: u,
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
      f = I, m.length || (l.length ? P() : v());
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
    const R = l.shift();
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
    m.push(A), u++, p = setTimeout(P, e.rotate), r(R, t, A.callback);
  }
  return setTimeout(P), w;
}
function gl(e) {
  const t = {
    ...Ic,
    ...e
  };
  let r = [];
  function n() {
    r = r.filter((c) => c().status === "pending");
  }
  function i(c, s, u) {
    const f = $c(
      t,
      c,
      s,
      (p, m) => {
        n(), u && u(p, m);
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
function ba() {
}
const yi = /* @__PURE__ */ Object.create(null);
function Nc(e) {
  if (!yi[e]) {
    const t = qo(e);
    if (!t)
      return;
    const r = gl(t), n = {
      config: t,
      redundancy: r
    };
    yi[e] = n;
  }
  return yi[e];
}
function jc(e, t, r) {
  let n, i;
  if (typeof e == "string") {
    const o = ko(e);
    if (!o)
      return r(void 0, 424), ba;
    i = o.send;
    const l = Nc(e);
    l && (n = l.redundancy);
  } else {
    const o = jo(e);
    if (o) {
      n = gl(o);
      const l = e.resources ? e.resources[0] : "", c = ko(l);
      c && (i = c.send);
    }
  }
  return !n || !i ? (r(void 0, 424), ba) : n.query(t, i, r)().abort;
}
function wa() {
}
function Mc(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, kc(e);
  }));
}
function qc(e) {
  const t = [], r = [];
  return e.forEach((n) => {
    (n.match(ul) ? t : r).push(n);
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
      if (!pl(e, r).length) {
        n();
        return;
      }
    } catch (i) {
      console.error(i);
    }
  n(), Mc(e);
}
function _a(e, t) {
  e instanceof Promise ? e.then((r) => {
    t(r);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Bc(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: r, prefix: n } = e, i = e.iconsToLoad;
    if (delete e.iconsToLoad, !i || !i.length)
      return;
    const o = e.loadIcon;
    if (e.loadIcons && (i.length > 1 || !o)) {
      _a(
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
        _a(p, (m) => {
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
    const { valid: l, invalid: c } = qc(i);
    if (c.length && Hn(e, c, null), !l.length)
      return;
    const s = n.match(ul) ? ko(r) : null;
    if (!s) {
      Hn(e, l, null);
      return;
    }
    s.prepare(r, n, l).forEach((f) => {
      jc(r, f, (p) => {
        Hn(e, f.icons, p);
      });
    });
  }));
}
const Fc = (e, t) => {
  const r = Dc(e, !0, hl()), n = Pc(r);
  if (!n.pending.length) {
    let s = !0;
    return t && setTimeout(() => {
      s && t(
        n.loaded,
        n.missing,
        n.pending,
        wa
      );
    }), () => {
      s = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let l, c;
  return n.pending.forEach((s) => {
    const { provider: u, prefix: f } = s;
    if (f === c && u === l)
      return;
    l = u, c = f, o.push(In(u, f));
    const p = i[u] || (i[u] = /* @__PURE__ */ Object.create(null));
    p[f] || (p[f] = []);
  }), n.pending.forEach((s) => {
    const { provider: u, prefix: f, name: p } = s, m = In(u, f), g = m.pendingIcons || (m.pendingIcons = /* @__PURE__ */ new Set());
    g.has(p) || (g.add(p), i[u][f].push(p));
  }), o.forEach((s) => {
    const u = i[s.provider][s.prefix];
    u.length && Bc(s, u);
  }), t ? Tc(t, n, o) : wa;
};
function Lc(e, t) {
  const r = {
    ...e
  };
  for (const n in t) {
    const i = t[n], o = typeof i;
    n in ml ? (i === null || i && (o === "string" || o === "number")) && (r[n] = i) : o === typeof r[n] && (r[n] = n === "rotate" ? i % 4 : i);
  }
  return r;
}
const Uc = /[\s,]+/;
function Vc(e, t) {
  t.split(Uc).forEach((r) => {
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
function Wc(e, t = 0) {
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
function Hc(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    r += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function Gc(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Kc(e) {
  return "data:image/svg+xml," + Gc(e);
}
function zc(e) {
  return 'url("' + Kc(e) + '")';
}
const Sa = {
  ...yl,
  inline: !1
}, Yc = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Xc = {
  display: "inline-block"
}, Co = {
  backgroundColor: "currentColor"
}, bl = {
  backgroundColor: "transparent"
}, xa = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Ea = {
  webkitMask: Co,
  mask: Co,
  background: bl
};
for (const e in Ea) {
  const t = Ea[e];
  for (const r in xa)
    t[e + r] = xa[r];
}
const Tr = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  Tr[e + "-flip"] = t, Tr[e.slice(0, 1) + "-flip"] = t, Tr[e + "Flip"] = t;
});
function Oa(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Ra = (e, t) => {
  const r = Lc(Sa, t), n = { ...Yc }, i = t.mode || "svg", o = {}, l = t.style, c = typeof l == "object" && !(l instanceof Array) ? l : {};
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
          typeof a == "string" && Vc(r, a);
          break;
        // Color: override style
        case "color":
          o.color = a;
          break;
        // Rotation as string
        case "rotate":
          typeof a == "string" ? r[d] = Wc(a) : typeof a == "number" && (r[d] = a);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          a !== !0 && a !== "true" && delete n["aria-hidden"];
          break;
        default: {
          const w = Tr[d];
          w ? (a === !0 || a === "true" || a === 1) && (r[w] = !0) : Sa[d] === void 0 && (n[d] = a);
        }
      }
  }
  const s = hc(e, r), u = s.attributes;
  if (r.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    n.style = {
      ...o,
      ...c
    }, Object.assign(n, u);
    let d = 0, a = t.id;
    return typeof a == "string" && (a = a.replace(/-/g, "_")), n.innerHTML = gc(s.body, a ? () => a + "ID" + d++ : "iconifyVue"), pa("svg", n);
  }
  const { body: f, width: p, height: m } = e, g = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), b = Hc(f, {
    ...u,
    width: p + "",
    height: m + ""
  });
  return n.style = {
    ...o,
    "--svg": zc(b),
    width: Oa(u.width),
    height: Oa(u.height),
    ...Xc,
    ...g ? Co : bl,
    ...c
  }, pa("span", n);
};
hl(!0);
bc("", Ac);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !sc(n)) && console.error(r);
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
          wc(r, i) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
const Jc = {
  ...ei,
  body: ""
}, At = Ve({
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
      if (typeof e != "string" || (n = Zr(e, !1, !0)) === null)
        return this.abortLoading(), null;
      let i = oc(n);
      if (!i)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", i !== null && (this._loadingIcon = {
          name: e,
          abort: Fc([n], () => {
            this.counter++;
          })
        })), null;
      if (this.abortLoading(), this._name !== e && (this._name = e, t && t(e)), r) {
        i = Object.assign({}, i);
        const l = r(i.body, n.name, n.prefix, n.provider);
        typeof l == "string" && (i.body = l);
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
      return Ra(Jc, e);
    let r = e;
    return t.classes && (r = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), Ra({
      ...ei,
      ...t.data
    }, r);
  }
}), Qc = { key: 0 }, Zc = { class: "kvc-table-header-label" }, ef = {
  key: 1,
  class: "kvc-table-operation"
}, tf = { key: 0 }, nf = ["href"], rf = ["data-code"], of = {
  key: 1,
  class: "kvc-table-operation"
}, af = { class: "kvc-table-operation-buttons" }, sf = ["onClick"], lf = ["onClick"], uf = /* @__PURE__ */ Ve({
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
    const r = e, n = t, i = ke(() => r.readOnly || r.hideOperations), o = (s) => (r.rowData || []).reduce((u, f) => {
      var p;
      return u[`data-${f.key}`] = ((p = s[f.code]) == null ? void 0 : p.value) || null, u;
    }, {}), l = (s) => {
      const u = [...r.modelValue];
      s >= 0 && (u.splice(s + 1, 0, {}), n("update:modelValue", u), n("add", u, s));
    }, c = (s) => {
      const u = [...r.modelValue];
      s >= 0 && (u.splice(s, 1), n("update:modelValue", u), n("delete", u));
    };
    return (s, u) => (X(), J("table", {
      class: Ye(["kvc-table", { "kvc-table-readonly": s.readOnly }])
    }, [
      Q("thead", null, [
        Q("tr", null, [
          s.recordUrl ? (X(), J("th", Qc)) : je("", !0),
          (X(!0), J(pt, null, mt(s.columns, (f, p) => (X(), J("th", {
            key: p,
            style: ln(f != null && f.width ? { width: f == null ? void 0 : f.width } : void 0)
          }, [
            tt(s.$slots, `column-${(f == null ? void 0 : f.code) || f}`, {}, () => [
              Q("span", Zc, Qe((f == null ? void 0 : f.label) ?? f), 1)
            ])
          ], 4))), 128)),
          i.value ? je("", !0) : (X(), J("th", ef))
        ])
      ]),
      Q("tbody", null, [
        (X(!0), J(pt, null, mt(s.modelValue, (f, p) => (X(), J("tr", Eu({
          key: "row-" + p,
          ref_for: !0
        }, o(f)), [
          s.recordUrl ? (X(), J("td", tf, [
            f.$id ? (X(), J("a", {
              key: 0,
              href: s.recordUrl + f.$id.value,
              class: "kvc-link",
              target: "_blank",
              rel: "noopener noreferrer",
              style: ln(s.readOnly ? null : { display: "inline-block", margin: "10px 0" })
            }, [
              dt(Ge(At), {
                icon: "tdesign:file-filled",
                width: "16"
              })
            ], 12, nf)) : je("", !0)
          ])) : je("", !0),
          (X(!0), J(pt, null, mt(s.columns, (m, g) => (X(), J("td", {
            key: "col-" + g,
            "data-code": (m == null ? void 0 : m.code) || m,
            style: ln(m != null && m.width ? { width: m == null ? void 0 : m.width } : void 0)
          }, [
            tt(s.$slots, (m == null ? void 0 : m.code) || m, {
              index: p,
              row: f,
              width: m == null ? void 0 : m.width,
              column: (m == null ? void 0 : m.code) || m,
              value: f[(m == null ? void 0 : m.code) || m]
            })
          ], 12, rf))), 128)),
          i.value ? je("", !0) : (X(), J("td", of, [
            Q("div", af, [
              Q("button", {
                type: "button",
                class: "kvc-table-btn-plus",
                onClick: (m) => l(p)
              }, [
                dt(Ge(At), {
                  icon: "mdi:plus",
                  width: "14"
                })
              ], 8, sf),
              Q("button", {
                type: "button",
                class: "kvc-table-btn-minus",
                onClick: (m) => c(p)
              }, [
                dt(Ge(At), {
                  icon: "mdi:minus",
                  width: "14"
                })
              ], 8, lf)
            ])
          ]))
        ], 16))), 128))
      ])
    ], 2));
  }
});
function wl(e) {
  return Ou() ? (Ru(e), !0) : !1;
}
const ti = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const cf = Object.prototype.toString, ff = (e) => cf.call(e) === "[object Object]", vi = () => {
}, df = /* @__PURE__ */ pf();
function pf() {
  var e, t;
  return ti && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function hf(e) {
  return Au();
}
function gi(e) {
  return Array.isArray(e) ? e : [e];
}
function mf(e, t = !0, r) {
  hf() ? or(e, r) : t ? e() : sl(e);
}
function yf(e, t, r) {
  return Jr(
    e,
    t,
    {
      ...r,
      immediate: !0
    }
  );
}
const _l = ti ? window : void 0, vf = ti ? window.document : void 0;
function Cn(e) {
  var t;
  const r = Mt(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function jt(...e) {
  const t = [], r = () => {
    t.forEach((c) => c()), t.length = 0;
  }, n = (c, s, u, f) => (c.addEventListener(s, u, f), () => c.removeEventListener(s, u, f)), i = ke(() => {
    const c = gi(Mt(e[0])).filter((s) => s != null);
    return c.every((s) => typeof s != "string") ? c : void 0;
  }), o = yf(
    () => {
      var c, s;
      return [
        (s = (c = i.value) == null ? void 0 : c.map((u) => Cn(u))) != null ? s : [_l].filter((u) => u != null),
        gi(Mt(i.value ? e[1] : e[0])),
        gi(Ge(i.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Mt(i.value ? e[3] : e[2])
      ];
    },
    ([c, s, u, f]) => {
      if (r(), !(c != null && c.length) || !(s != null && s.length) || !(u != null && u.length))
        return;
      const p = ff(f) ? { ...f } : f;
      t.push(
        ...c.flatMap(
          (m) => s.flatMap(
            (g) => u.map((b) => n(m, g, b, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    o(), r();
  };
  return wl(r), l;
}
let Aa = !1;
function rr(e, t, r = {}) {
  const { window: n = _l, ignore: i = [], capture: o = !0, detectIframe: l = !1 } = r;
  if (!n)
    return vi;
  if (df && !Aa) {
    Aa = !0;
    const d = { passive: !0 };
    Array.from(n.document.body.children).forEach((a) => jt(a, "click", vi, d)), jt(n.document.documentElement, "click", vi, d);
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
  function u(d) {
    const a = Mt(d);
    return a && a.$.subTree.shapeFlag === 16;
  }
  function f(d, a) {
    const w = Mt(d), v = w.$.subTree && w.$.subTree.children;
    return v == null || !Array.isArray(v) ? !1 : v.some((_) => _.el === a.target || a.composedPath().includes(_.el));
  }
  const p = (d) => {
    const a = Cn(e);
    if (d.target != null && !(!(a instanceof Element) && u(e) && f(e, d)) && !(!a || a === d.target || d.composedPath().includes(a))) {
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
    l && jt(n, "blur", (d) => {
      setTimeout(() => {
        var a;
        const w = Cn(e);
        ((a = n.document.activeElement) == null ? void 0 : a.tagName) === "IFRAME" && !(w != null && w.contains(n.document.activeElement)) && t(d);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean);
  return () => g.forEach((d) => d());
}
function gf(e, t = {}) {
  var r, n;
  const i = Ae(!1), o = Pu(null);
  let l = 0, c = !0;
  if (ti) {
    const s = typeof t == "function" ? { onDrop: t } : t, u = (r = s.multiple) != null ? r : !0, f = (n = s.preventDefaultForUnhandled) != null ? n : !1, p = (a) => {
      var w, v;
      const _ = Array.from((v = (w = a.dataTransfer) == null ? void 0 : w.files) != null ? v : []);
      return _.length === 0 ? null : u ? _ : [_[0]];
    }, m = (a) => {
      const w = Ge(s.dataTypes);
      return typeof w == "function" ? w(a) : w != null && w.length ? a.length === 0 ? !1 : a.every(
        (v) => w.some((_) => v.includes(_))
      ) : !0;
    }, g = (a) => {
      const w = Array.from(a ?? []).map((E) => E.type), v = m(w), _ = u || a.length <= 1;
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
          l += 1, i.value = !0, (E = s.onEnter) == null || E.call(s, null, a);
          break;
        case "over":
          (P = s.onOver) == null || P.call(s, null, a);
          break;
        case "leave":
          l -= 1, l === 0 && (i.value = !1), (R = s.onLeave) == null || R.call(s, null, a);
          break;
        case "drop":
          l = 0, i.value = !1, c && (o.value = q, (A = s.onDrop) == null || A.call(s, q, a));
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
const bf = ["onClick", "onMouseover"], wf = { class: "kvc-select-list-item-icon-space" }, _f = { class: "kvc-select-list-item-text" }, Hr = /* @__PURE__ */ Ve({
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
    const r = e, n = t, i = Ae(null), o = /* @__PURE__ */ new Map(), l = Ae(null), c = ke(
      () => typeof r.height == "string" ? r.height : `${r.height}px`
    ), s = ke(
      () => typeof r.maxHeight == "string" ? r.maxHeight : `${r.maxHeight}px`
    ), u = (g) => {
      const b = o.get(g);
      if (i.value && b) {
        const d = i.value.offsetHeight, a = b.offsetTop, w = b.offsetHeight, v = a - d / 2 + w / 2;
        i.value.scrollTo({ top: v }), l.value = g;
      }
    };
    or(() => u(r.modelValue));
    const f = (g) => {
      n("update:modelValue", g), n("change", g);
    }, p = (g) => typeof g == "object" && g !== null ? g[r.valueKey ?? "value"] ?? g : g, m = (g) => typeof g == "object" && g !== null ? g[r.labelKey ?? "label"] ?? g : g;
    return (g, b) => (X(), J("ul", {
      ref_key: "listWrapRef",
      ref: i,
      class: "kvc-select-list",
      style: ln({ height: c.value, maxHeight: s.value })
    }, [
      (X(!0), J(pt, null, mt(g.items, (d, a) => (X(), J("li", {
        key: a,
        ref_for: !0,
        ref: (w) => Ge(o).set(p(d), w),
        class: Ye(["kvc-select-list-item", {
          "kvc-select-list-item-selected": p(d) === g.modelValue
        }]),
        onClick: (w) => f(p(d)),
        onMouseover: (w) => l.value = p(d)
      }, [
        Q("span", wf, [
          p(d) === g.modelValue ? (X(), un(Ge(At), {
            key: 0,
            icon: "mdi:check-bold",
            width: "15"
          })) : je("", !0)
        ]),
        Q("span", _f, Qe(m(d)), 1)
      ], 42, bf))), 128))
    ], 4));
  }
}), Sf = ["innerHTML"], xf = {
  key: 1,
  class: "kvc-dropdown"
}, Ef = ["disabled"], Of = { class: "kvc-dropdown-label" }, Rf = /* @__PURE__ */ Ve({
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
    const r = e, n = t, i = ke({
      get: () => r.modelValue ?? "",
      set: (p) => {
        n("update:modelValue", p), n("change", p);
      }
    }), o = Ae(!1), l = Ae(!1), c = Ae(null), s = Ae(null);
    rr(s, () => {
      o.value || (l.value = !1, o.value = !1);
    });
    const u = (p) => typeof p == "number" || !isNaN(Number(p));
    ke(() => r.width ? u(r.width) ? `${r.width}px` : r.width : "100%");
    const f = ke(() => {
      const p = r.itemValue ?? "value", m = r.itemLabel ?? "label", g = r.items.find((b) => typeof b == "object" && b[p] === r.modelValue);
      return g ? g[m] : "";
    });
    return (p, m) => p.readOnly ? (X(), J("p", {
      key: 0,
      class: Ye(["kvc-field-value", { "kvc-field-value-nonstyled": p.nonstyled }]),
      innerHTML: p.modelValue
    }, null, 10, Sf)) : (X(), J("div", xf, [
      Q("button", {
        ref_key: "buttonRef",
        ref: c,
        type: "button",
        class: "kvc-dropdown-button",
        disabled: p.disabled,
        onClick: m[0] || (m[0] = (g) => l.value = !0)
      }, [
        Q("span", Of, Qe(f.value), 1),
        dt(Ge(At), {
          icon: "mdi-light:chevron-down",
          width: "24",
          style: { "min-width": "24px" }
        })
      ], 8, Ef),
      p.readOnly || p.disabled ? je("", !0) : Jt((X(), un(Hr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": m[1] || (m[1] = (g) => i.value = g),
        ref_key: "timeRef",
        ref: s,
        items: p.items,
        labelKey: p.itemLabel,
        valueKey: p.itemValue,
        onChange: m[2] || (m[2] = (g) => l.value = !1)
      }, null, 8, ["modelValue", "items", "labelKey", "valueKey"])), [
        [Qr, l.value]
      ])
    ]));
  }
}), Af = /* @__PURE__ */ Ve({
  __name: "button",
  props: {
    sm: { type: Boolean },
    color: {}
  },
  setup(e) {
    return (t, r) => (X(), J("button", {
      type: "button",
      class: Ye(["kvc-button", {
        "kvc-button-sm": t.sm,
        "kvc-button-normal": t.color === "normal",
        "kvc-button-success": t.color === "success",
        "kvc-button-save": t.color === "save",
        "kvc-button-error": t.color === "error"
      }])
    }, [
      tt(t.$slots, "default")
    ], 2));
  }
}), Pf = { class: "kvc-field-label" }, kf = {
  key: 0,
  class: "kvc-field-required"
}, Cf = { class: "kvc-field-input" }, Tf = {
  key: 0,
  class: "kvc-field-prefix"
}, Df = {
  key: 1,
  class: "kvc-field-suffix"
}, If = /* @__PURE__ */ Ve({
  __name: "field",
  props: {
    required: { type: Boolean },
    width: {},
    errorMessage: {},
    successMessage: {}
  },
  setup(e) {
    const t = e, r = ll(), n = (o) => typeof o == "number" || !isNaN(Number(o)), i = ke(() => t.width ? n(t.width) ? `${t.width}px` : t.width : "fit-content");
    return (o, l) => {
      var c, s, u, f;
      return X(), J("div", {
        style: ln({ width: i.value }),
        class: "kvc-field"
      }, [
        Q("label", Pf, [
          tt(o.$slots, "label"),
          o.required ? (X(), J("span", kf)) : je("", !0)
        ]),
        Q("div", Cf, [
          (s = (c = Ge(r)).prefix) != null && s.call(c) ? (X(), J("div", Tf, [
            tt(o.$slots, "prefix")
          ])) : je("", !0),
          tt(o.$slots, "default"),
          (f = (u = Ge(r)).suffix) != null && f.call(u) ? (X(), J("div", Df, [
            tt(o.$slots, "suffix")
          ])) : je("", !0)
        ]),
        o.errorMessage || o.successMessage ? (X(), J("div", {
          key: 0,
          class: Ye({
            "kvc-field-message-error": o.errorMessage,
            "kvc-field-message-success": o.successMessage
          })
        }, Qe(o.errorMessage || o.successMessage), 3)) : je("", !0)
      ], 4);
    };
  }
}), $f = ["innerHTML"], Nf = ["disabled", "value"], jf = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Mf = ["fill"], qf = /* @__PURE__ */ Ve({
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
    const r = e, n = t, i = ke({
      get: () => r.modelValue ?? "",
      set: (f) => {
        n("update:modelValue", f), n("change", f);
      }
    }), o = r.itemValue ?? "value", l = r.itemLabel ?? "label", c = (f) => f != null && f.disabled ? "#d8d8d8" : r.modelValue == ((f == null ? void 0 : f[o]) ?? f) ? "#3498db" : "#d8d8d8", s = (f) => typeof f == "object" && f !== null ? f[o] ?? f : f, u = (f) => typeof f == "object" && f !== null ? f[l] ?? f : f;
    return (f, p) => f.readOnly ? (X(), J("p", {
      key: 0,
      class: Ye(["kvc-field-value", { "kvc-field-value-nonstyled": f.nonstyled }]),
      innerHTML: f.modelValue
    }, null, 10, $f)) : (X(), J("div", {
      key: 1,
      class: Ye(["kvc-radio-group", { "kvc-radio-group-column": f.column }])
    }, [
      (X(!0), J(pt, null, mt(f.items, (m, g) => (X(), J("label", {
        key: g,
        class: "kvc-radio-item"
      }, [
        Jt(Q("input", {
          type: "radio",
          "onUpdate:modelValue": p[0] || (p[0] = (b) => i.value = b),
          disabled: typeof m == "object" ? m.disabled : !1,
          value: s(m)
        }, null, 8, Nf), [
          [ku, i.value]
        ]),
        (X(), J("svg", jf, [
          p[1] || (p[1] = Q("circle", {
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
          }, null, 8, Mf)) : je("", !0)
        ])),
        Q("span", null, Qe(u(m)), 1)
      ]))), 128))
    ], 2));
  }
}), Bf = ["innerHTML"], Ff = ["disabled", "value"], Lf = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Uf = ["stroke"], Vf = ["fill"], Wf = /* @__PURE__ */ Ve({
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
    const r = e, n = t, i = ke({
      get: () => r.modelValue ?? "",
      set: (s) => {
        n("update:modelValue", s), n("change", s);
      }
    }), o = (s) => {
      const u = r.itemValue ?? "value", f = typeof s == "object" ? s[u] : s;
      return s.disabled ? "#e3e7e8" : r.modelValue.includes(f) ? "#3498db" : "#e3e7e8";
    }, l = (s) => {
      const u = r.itemLabel ?? "label";
      return typeof s == "object" ? s[u] : s;
    }, c = (s) => {
      const u = r.itemValue ?? "value";
      return typeof s == "object" ? s[u] : s;
    };
    return (s, u) => s.readOnly ? (X(), J("p", {
      key: 0,
      class: Ye(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }]),
      innerHTML: s.modelValue.join(", ")
    }, null, 10, Bf)) : (X(), J("div", {
      key: 1,
      class: Ye(["kvc-checkbox-group", { "kvc-checkbox-group-column": s.column }])
    }, [
      (X(!0), J(pt, null, mt(s.items, (f, p) => (X(), J("label", {
        key: p,
        class: "kvc-checkbox-item"
      }, [
        Jt(Q("input", {
          type: "checkbox",
          "onUpdate:modelValue": u[0] || (u[0] = (m) => i.value = m),
          disabled: typeof f == "object" ? f.disabled : !1,
          value: c(f)
        }, null, 8, Ff), [
          [Cu, i.value]
        ]),
        (X(), J("svg", Lf, [
          Q("rect", {
            x: "1",
            y: "1",
            width: "19",
            height: "19",
            rx: "1",
            fill: "white",
            "stroke-width": "2",
            stroke: o(f)
          }, null, 8, Uf),
          i.value.includes(c(f)) ? (X(), J("path", {
            key: 0,
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z",
            fill: o(f)
          }, null, 8, Vf)) : je("", !0)
        ])),
        Q("span", null, Qe(l(f)), 1)
      ]))), 128))
    ], 2));
  }
}), Hf = ["placeholder", "type", "min", "max"], Bo = /* @__PURE__ */ Ve({
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
    const r = e, n = t, i = ke({
      get: () => r.modelValue ?? "",
      set: (c) => n("update:modelValue", c)
    }), o = (c) => typeof c == "number" || !isNaN(Number(c)), l = ke(() => r.width ? o(r.width) ? `${r.width}px` : r.width : "100%");
    return (c, s) => c.readOnly ? (X(), J("p", {
      key: 0,
      class: Ye(["kvc-field-value", { "kvc-field-value-nonstyled": c.nonstyled }])
    }, Qe((i.value || " ").replace(/\r|\n/g, "") || " "), 3)) : Jt((X(), J("input", {
      key: 1,
      "onUpdate:modelValue": s[0] || (s[0] = (u) => i.value = u),
      class: "kvc-field-text",
      style: ln({ width: l.value }),
      placeholder: c.placeholder,
      type: c.type,
      min: c.min,
      max: c.max
    }, null, 12, Hf)), [
      [Tu, i.value]
    ]);
  }
});
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Gf(e) {
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
var Dr = { exports: {} }, Kf = Dr.exports, Pa;
function zf() {
  return Pa || (Pa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Kf, function() {
      var r = 1e3, n = 6e4, i = 36e5, o = "millisecond", l = "second", c = "minute", s = "hour", u = "day", f = "week", p = "month", m = "quarter", g = "year", b = "date", d = "Invalid Date", a = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(V) {
        var F = ["th", "st", "nd", "rd"], U = V % 100;
        return "[" + V + (F[(U - 20) % 10] || F[U] || F[0]) + "]";
      } }, _ = function(V, F, U) {
        var z = String(V);
        return !z || z.length >= F ? V : "" + Array(F + 1 - z.length).join(U) + V;
      }, E = { s: _, z: function(V) {
        var F = -V.utcOffset(), U = Math.abs(F), z = Math.floor(U / 60), j = U % 60;
        return (F <= 0 ? "+" : "-") + _(z, 2, "0") + ":" + _(j, 2, "0");
      }, m: function V(F, U) {
        if (F.date() < U.date()) return -V(U, F);
        var z = 12 * (U.year() - F.year()) + (U.month() - F.month()), j = F.clone().add(z, p), Z = U - j < 0, te = F.clone().add(z + (Z ? -1 : 1), p);
        return +(-(z + (U - j) / (Z ? j - te : te - j)) || 0);
      }, a: function(V) {
        return V < 0 ? Math.ceil(V) || 0 : Math.floor(V);
      }, p: function(V) {
        return { M: p, y: g, w: f, d: u, D: b, h: s, m: c, s: l, ms: o, Q: m }[V] || String(V || "").toLowerCase().replace(/s$/, "");
      }, u: function(V) {
        return V === void 0;
      } }, P = "en", R = {};
      R[P] = v;
      var A = "$isDayjsObject", I = function(V) {
        return V instanceof W || !(!V || !V[A]);
      }, q = function V(F, U, z) {
        var j;
        if (!F) return P;
        if (typeof F == "string") {
          var Z = F.toLowerCase();
          R[Z] && (j = Z), U && (R[Z] = U, j = Z);
          var te = F.split("-");
          if (!j && te.length > 1) return V(te[0]);
        } else {
          var fe = F.name;
          R[fe] = F, j = fe;
        }
        return !z && j && (P = j), j || !z && P;
      }, M = function(V, F) {
        if (I(V)) return V.clone();
        var U = typeof F == "object" ? F : {};
        return U.date = V, U.args = arguments, new W(U);
      }, B = E;
      B.l = q, B.i = I, B.w = function(V, F) {
        return M(V, { locale: F.$L, utc: F.$u, x: F.$x, $offset: F.$offset });
      };
      var W = function() {
        function V(U) {
          this.$L = q(U.locale, null, !0), this.parse(U), this.$x = this.$x || U.x || {}, this[A] = !0;
        }
        var F = V.prototype;
        return F.parse = function(U) {
          this.$d = function(z) {
            var j = z.date, Z = z.utc;
            if (j === null) return /* @__PURE__ */ new Date(NaN);
            if (B.u(j)) return /* @__PURE__ */ new Date();
            if (j instanceof Date) return new Date(j);
            if (typeof j == "string" && !/Z$/i.test(j)) {
              var te = j.match(a);
              if (te) {
                var fe = te[2] - 1 || 0, me = (te[7] || "0").substring(0, 3);
                return Z ? new Date(Date.UTC(te[1], fe, te[3] || 1, te[4] || 0, te[5] || 0, te[6] || 0, me)) : new Date(te[1], fe, te[3] || 1, te[4] || 0, te[5] || 0, te[6] || 0, me);
              }
            }
            return new Date(j);
          }(U), this.init();
        }, F.init = function() {
          var U = this.$d;
          this.$y = U.getFullYear(), this.$M = U.getMonth(), this.$D = U.getDate(), this.$W = U.getDay(), this.$H = U.getHours(), this.$m = U.getMinutes(), this.$s = U.getSeconds(), this.$ms = U.getMilliseconds();
        }, F.$utils = function() {
          return B;
        }, F.isValid = function() {
          return this.$d.toString() !== d;
        }, F.isSame = function(U, z) {
          var j = M(U);
          return this.startOf(z) <= j && j <= this.endOf(z);
        }, F.isAfter = function(U, z) {
          return M(U) < this.startOf(z);
        }, F.isBefore = function(U, z) {
          return this.endOf(z) < M(U);
        }, F.$g = function(U, z, j) {
          return B.u(U) ? this[z] : this.set(j, U);
        }, F.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, F.valueOf = function() {
          return this.$d.getTime();
        }, F.startOf = function(U, z) {
          var j = this, Z = !!B.u(z) || z, te = B.p(U), fe = function(ge, ee) {
            var ye = B.w(j.$u ? Date.UTC(j.$y, ee, ge) : new Date(j.$y, ee, ge), j);
            return Z ? ye : ye.endOf(u);
          }, me = function(ge, ee) {
            return B.w(j.toDate()[ge].apply(j.toDate("s"), (Z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ee)), j);
          }, xe = this.$W, Se = this.$M, N = this.$D, G = "set" + (this.$u ? "UTC" : "");
          switch (te) {
            case g:
              return Z ? fe(1, 0) : fe(31, 11);
            case p:
              return Z ? fe(1, Se) : fe(0, Se + 1);
            case f:
              var ve = this.$locale().weekStart || 0, Oe = (xe < ve ? xe + 7 : xe) - ve;
              return fe(Z ? N - Oe : N + (6 - Oe), Se);
            case u:
            case b:
              return me(G + "Hours", 0);
            case s:
              return me(G + "Minutes", 1);
            case c:
              return me(G + "Seconds", 2);
            case l:
              return me(G + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, F.endOf = function(U) {
          return this.startOf(U, !1);
        }, F.$set = function(U, z) {
          var j, Z = B.p(U), te = "set" + (this.$u ? "UTC" : ""), fe = (j = {}, j[u] = te + "Date", j[b] = te + "Date", j[p] = te + "Month", j[g] = te + "FullYear", j[s] = te + "Hours", j[c] = te + "Minutes", j[l] = te + "Seconds", j[o] = te + "Milliseconds", j)[Z], me = Z === u ? this.$D + (z - this.$W) : z;
          if (Z === p || Z === g) {
            var xe = this.clone().set(b, 1);
            xe.$d[fe](me), xe.init(), this.$d = xe.set(b, Math.min(this.$D, xe.daysInMonth())).$d;
          } else fe && this.$d[fe](me);
          return this.init(), this;
        }, F.set = function(U, z) {
          return this.clone().$set(U, z);
        }, F.get = function(U) {
          return this[B.p(U)]();
        }, F.add = function(U, z) {
          var j, Z = this;
          U = Number(U);
          var te = B.p(z), fe = function(Se) {
            var N = M(Z);
            return B.w(N.date(N.date() + Math.round(Se * U)), Z);
          };
          if (te === p) return this.set(p, this.$M + U);
          if (te === g) return this.set(g, this.$y + U);
          if (te === u) return fe(1);
          if (te === f) return fe(7);
          var me = (j = {}, j[c] = n, j[s] = i, j[l] = r, j)[te] || 1, xe = this.$d.getTime() + U * me;
          return B.w(xe, this);
        }, F.subtract = function(U, z) {
          return this.add(-1 * U, z);
        }, F.format = function(U) {
          var z = this, j = this.$locale();
          if (!this.isValid()) return j.invalidDate || d;
          var Z = U || "YYYY-MM-DDTHH:mm:ssZ", te = B.z(this), fe = this.$H, me = this.$m, xe = this.$M, Se = j.weekdays, N = j.months, G = j.meridiem, ve = function(ee, ye, he, Ce) {
            return ee && (ee[ye] || ee(z, Z)) || he[ye].slice(0, Ce);
          }, Oe = function(ee) {
            return B.s(fe % 12 || 12, ee, "0");
          }, ge = G || function(ee, ye, he) {
            var Ce = ee < 12 ? "AM" : "PM";
            return he ? Ce.toLowerCase() : Ce;
          };
          return Z.replace(w, function(ee, ye) {
            return ye || function(he) {
              switch (he) {
                case "YY":
                  return String(z.$y).slice(-2);
                case "YYYY":
                  return B.s(z.$y, 4, "0");
                case "M":
                  return xe + 1;
                case "MM":
                  return B.s(xe + 1, 2, "0");
                case "MMM":
                  return ve(j.monthsShort, xe, N, 3);
                case "MMMM":
                  return ve(N, xe);
                case "D":
                  return z.$D;
                case "DD":
                  return B.s(z.$D, 2, "0");
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
                  return B.s(fe, 2, "0");
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
                  return B.s(me, 2, "0");
                case "s":
                  return String(z.$s);
                case "ss":
                  return B.s(z.$s, 2, "0");
                case "SSS":
                  return B.s(z.$ms, 3, "0");
                case "Z":
                  return te;
              }
              return null;
            }(ee) || te.replace(":", "");
          });
        }, F.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, F.diff = function(U, z, j) {
          var Z, te = this, fe = B.p(z), me = M(U), xe = (me.utcOffset() - this.utcOffset()) * n, Se = this - me, N = function() {
            return B.m(te, me);
          };
          switch (fe) {
            case g:
              Z = N() / 12;
              break;
            case p:
              Z = N();
              break;
            case m:
              Z = N() / 3;
              break;
            case f:
              Z = (Se - xe) / 6048e5;
              break;
            case u:
              Z = (Se - xe) / 864e5;
              break;
            case s:
              Z = Se / i;
              break;
            case c:
              Z = Se / n;
              break;
            case l:
              Z = Se / r;
              break;
            default:
              Z = Se;
          }
          return j ? Z : B.a(Z);
        }, F.daysInMonth = function() {
          return this.endOf(p).$D;
        }, F.$locale = function() {
          return R[this.$L];
        }, F.locale = function(U, z) {
          if (!U) return this.$L;
          var j = this.clone(), Z = q(U, z, !0);
          return Z && (j.$L = Z), j;
        }, F.clone = function() {
          return B.w(this.$d, this);
        }, F.toDate = function() {
          return new Date(this.valueOf());
        }, F.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, F.toISOString = function() {
          return this.$d.toISOString();
        }, F.toString = function() {
          return this.$d.toUTCString();
        }, V;
      }(), ae = W.prototype;
      return M.prototype = ae, [["$ms", o], ["$s", l], ["$m", c], ["$H", s], ["$W", u], ["$M", p], ["$y", g], ["$D", b]].forEach(function(V) {
        ae[V[1]] = function(F) {
          return this.$g(F, V[0], V[1]);
        };
      }), M.extend = function(V, F) {
        return V.$i || (V(F, W, M), V.$i = !0), M;
      }, M.locale = q, M.isDayjs = I, M.unix = function(V) {
        return M(1e3 * V);
      }, M.en = R[P], M.Ls = R, M.p = {}, M;
    });
  }(Dr)), Dr.exports;
}
var Yf = zf();
const Ee = /* @__PURE__ */ Nn(Yf);
var Ir = { exports: {} }, Xf = Ir.exports, ka;
function Jf() {
  return ka || (ka = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Xf, function() {
      return function(r, n) {
        n.prototype.weekday = function(i) {
          var o = this.$locale().weekStart || 0, l = this.$W, c = (l < o ? l + 7 : l) - o;
          return this.$utils().u(i) ? c : this.subtract(c, "day").add(i, "day");
        };
      };
    });
  }(Ir)), Ir.exports;
}
var Qf = Jf();
const Zf = /* @__PURE__ */ Nn(Qf);
var $r = { exports: {} }, ed = $r.exports, Ca;
function td() {
  return Ca || (Ca = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(ed, function() {
      return function(r, n) {
        n.prototype.isSameOrBefore = function(i, o) {
          return this.isSame(i, o) || this.isBefore(i, o);
        };
      };
    });
  }($r)), $r.exports;
}
var nd = td();
const rd = /* @__PURE__ */ Nn(nd), id = { class: "kvc-datepicker-popup" }, od = { class: "kvc-datepicker-controls" }, ad = { class: "kvc-datepicker-control-year-month" }, sd = { class: "kvc-datepicker-control-year" }, ld = { class: "kvc-datepicker-control-selector-text" }, ud = { class: "kvc-datepicker-control-month" }, cd = { class: "kvc-datepicker-control-selector-text" }, fd = { class: "kvc-datepicker-body" }, dd = ["onClick"], pd = { class: "kvc-datepicker-bottom" }, hd = /* @__PURE__ */ Ve({
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
    Ee.extend(Zf), Ee.extend(rd);
    const r = e, n = t, i = Ae(null), o = Ae(null), l = Ae(null), c = Ae(null), s = Ae(
      (R = r.modelValue) != null && R.length ? r.modelValue : void 0
    ), u = ["日", "月", "火", "水", "木", "金", "土"], f = Du({
      year: !1,
      month: !1
    }), p = (A) => {
      f[A] = !1;
    };
    rr(i, () => p("year")), rr(o, () => p("month"));
    const m = ke(
      () => Array.from({ length: 12 }, (A, I) => ({
        label: `${I + 1}月`,
        value: I + 1
      }))
    ), g = ke(() => {
      const A = Ee(s.value).year(), I = A - 100, q = A + 100, M = [];
      for (let B = I; B <= q; B++)
        M.push({ label: `${B}年`, value: B });
      return M;
    }), b = (A) => {
      A = Number(A), s.value = Ee(s.value || void 0).year(A).format("YYYY-MM-DD"), setTimeout(() => f.year = !1, 10);
    }, d = (A) => {
      A = Number(A), s.value = Ee(s.value || void 0).month(A - 1).format("YYYY-MM-DD"), setTimeout(() => f.month = !1, 10);
    }, a = ke(() => Ee(s.value).year()), w = ke(() => Ee(s.value).month() + 1), v = ke(() => {
      const A = Ee(s.value).startOf("month"), I = Ee(s.value).endOf("month"), q = A.weekday(0), M = I.weekday(6), B = [];
      let W = q;
      for (; W.isSameOrBefore(M); ) {
        const V = [];
        for (let F = 0; F < 7; F++)
          V.push({
            date: W.date(),
            fullDate: W.format("YYYY-MM-DD"),
            isCurrentMonth: W.month() === Ee(s.value).month(),
            isCurrentDate: W.isSame(Ee(r.modelValue || void 0), "date"),
            isHoliday: W.day() === 0 || W.day() === 6,
            isToday: W.isSame(Ee(), "day")
          }), W = W.add(1, "day");
        B.push(V);
      }
      let ae = M.add(1, "day");
      for (; B.length < 6; ) {
        const V = [];
        for (let F = 0; F < 7; F++)
          V.push({
            date: ae.date(),
            fullDate: ae.format("YYYY-MM-DD"),
            isCurrentMonth: ae.month() === Ee(s.value).month(),
            isCurrentDate: ae.isSame(Ee(r.modelValue || void 0), "date"),
            isHoliday: ae.day() === 0 || ae.day() === 6,
            isToday: ae.isSame(Ee(), "day")
          }), ae = ae.add(1, "day");
        B.push(V);
      }
      return B;
    }), _ = () => {
      s.value = Ee(s.value).subtract(1, "month").format("YYYY-MM-DD");
    }, E = () => {
      s.value = Ee(s.value).add(1, "month").format("YYYY-MM-DD");
    }, P = (A) => {
      n("update:modelValue", A || ""), n("close", !0);
    };
    return (A, I) => (X(), J("div", id, [
      Q("div", od, [
        Q("button", {
          class: "kvc-datepicker-control-prev",
          onClick: _
        }, [
          dt(Ge(At), {
            icon: "mdi-light:chevron-left",
            height: "32"
          })
        ]),
        Q("div", ad, [
          Q("div", sd, [
            Q("button", {
              type: "button",
              ref_key: "yearRef",
              ref: i,
              class: "kvc-datepicker-control-selector",
              onClick: I[0] || (I[0] = (q) => f.year = !f.year)
            }, [
              Q("span", ld, Qe(a.value) + "年", 1),
              dt(Ge(At), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.year ? (X(), un(Hr, {
                key: 0,
                ref_key: "yearListRef",
                ref: l,
                class: "kvc-datepicker-controll-selector-list",
                items: g.value,
                "model-value": a.value,
                "max-height": 300,
                onChange: b
              }, null, 8, ["items", "model-value"])) : je("", !0)
            ], 512)
          ]),
          Q("div", ud, [
            Q("button", {
              type: "button",
              ref_key: "monthRef",
              ref: o,
              class: "kvc-datepicker-control-selector",
              onClick: I[1] || (I[1] = (q) => f.month = !f.month)
            }, [
              Q("span", cd, Qe(w.value) + "月", 1),
              dt(Ge(At), {
                icon: "mdi-light:chevron-down",
                width: "24"
              }),
              f.month ? (X(), un(Hr, {
                key: 0,
                ref_key: "monthListRef",
                ref: c,
                class: "kvc-datepicker-controll-selector-list",
                items: m.value,
                "model-value": w.value,
                onChange: d
              }, null, 8, ["items", "model-value"])) : je("", !0)
            ], 512)
          ])
        ]),
        Q("button", {
          class: "kvc-datepicker-control-next",
          onClick: E
        }, [
          dt(Ge(At), {
            icon: "mdi-light:chevron-right",
            height: "32"
          })
        ])
      ]),
      Q("table", fd, [
        Q("thead", null, [
          Q("tr", null, [
            (X(), J(pt, null, mt(u, (q) => Q("th", {
              key: q,
              class: Ye(["kvc-datepicker-day", {
                "kvc-datepicker-day-saturday": q === "土",
                "kvc-datepicker-day-sunday": q === "日"
              }])
            }, Qe(q), 3)), 64))
          ])
        ]),
        Q("tbody", null, [
          (X(!0), J(pt, null, mt(v.value, (q, M) => (X(), J("tr", { key: M }, [
            (X(!0), J(pt, null, mt(q, (B) => (X(), J("td", {
              key: B.date
            }, [
              Q("button", {
                type: "button",
                class: Ye(["kvc-datepicker-date", {
                  "kvc-datepicker-date-notcurrent-month": !B.isCurrentMonth,
                  "kvc-datepicker-date-today": B.isToday,
                  "kvc-datepicker-date-current": B.isCurrentDate
                }]),
                onClick: (W) => P(B.fullDate)
              }, Qe(B.date), 11, dd)
            ]))), 128))
          ]))), 128))
        ])
      ]),
      Q("div", pd, [
        Q("button", {
          type: "button",
          class: "kvc-datepicker-bottom-today",
          onClick: I[2] || (I[2] = (q) => P(Ge(Ee)().format("YYYY-MM-DD")))
        }, " 今日 "),
        Q("button", {
          type: "button",
          class: "kvc-datepicker-bottom-clear",
          onClick: I[3] || (I[3] = (q) => P())
        }, " 選択を解除 ")
      ])
    ]));
  }
}), md = { class: "kvc-date-picker" }, Sl = /* @__PURE__ */ Ve({
  __name: "date-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = ke({
      get: () => r.modelValue ?? "",
      set: (g) => {
        n("update:modelValue", g), n("change", g);
      }
    }), o = (g) => {
      const b = g.target;
      /^\d{4}-\d{2}-\d{2}$/.test(b.value) || (n("update:modelValue", ""), n("change", ""));
    }, l = Ae(!1), c = Ae(!1), s = Ae(null), u = Ae(null), f = () => {
      l.value = !0, c.value = !0;
    }, p = () => {
      l.value = !1;
    }, m = () => {
      c.value = !1, l.value = !1;
    };
    return rr(u, () => {
      l.value || (c.value = !1, l.value = !1);
    }), (g, b) => (X(), J("div", md, [
      dt(Bo, {
        "read-only": g.readOnly,
        disabled: g.disabled,
        nonstyled: g.nonstyled,
        modelValue: i.value,
        "onUpdate:modelValue": b[0] || (b[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: s,
        class: Ye(["text-center", g.readOnly ? "w-28" : "max-w-28"]),
        onFocus: f,
        onBlur: p,
        onChange: o
      }, null, 8, ["read-only", "disabled", "nonstyled", "modelValue", "class"]),
      g.readOnly || g.disabled ? je("", !0) : Jt((X(), un(hd, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": b[1] || (b[1] = (d) => i.value = d),
        ref_key: "calendarRef",
        ref: u,
        onClose: m
      }, null, 8, ["modelValue"])), [
        [Qr, c.value]
      ])
    ]));
  }
}), yd = { class: "kvc-time-picker" }, xl = /* @__PURE__ */ Ve({
  __name: "time-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = ke({
      get: () => r.modelValue ?? "",
      set: (g) => {
        n("update:modelValue", g), n("change", g);
      }
    }), o = (g) => {
      const b = g.target;
      /^\d{2}:\d{2}$/.test(b.value) || (n("update:modelValue", ""), n("change", ""));
    }, l = ke(() => {
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
    }), c = Ae(!1), s = Ae(!1), u = Ae(null), f = Ae(null), p = () => {
      c.value = !0, s.value = !0;
    }, m = () => {
      c.value = !1;
    };
    return rr(f, () => {
      c.value || (s.value = !1, c.value = !1);
    }), (g, b) => (X(), J("div", yd, [
      dt(Bo, {
        "read-only": g.readOnly,
        disabled: g.disabled,
        modelValue: i.value,
        "onUpdate:modelValue": b[0] || (b[0] = (d) => i.value = d),
        ref_key: "inputRef",
        ref: u,
        class: Ye(g.readOnly ? "w-16 text-left" : "max-w-20 text-center"),
        onFocus: p,
        onBlur: m,
        onChange: o
      }, null, 8, ["read-only", "disabled", "modelValue", "class"]),
      g.readOnly || g.disabled ? je("", !0) : Jt((X(), un(Hr, {
        key: 0,
        modelValue: i.value,
        "onUpdate:modelValue": b[1] || (b[1] = (d) => i.value = d),
        ref_key: "timeRef",
        ref: f,
        items: l.value,
        "max-height": 183,
        onChange: b[2] || (b[2] = (d) => s.value = !1)
      }, null, 8, ["modelValue", "items"])), [
        [Qr, s.value]
      ])
    ]));
  }
});
var Nr = { exports: {} }, vd = Nr.exports, Ta;
function gd() {
  return Ta || (Ta = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(vd, function() {
      var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
      return function(o, l, c) {
        var s = l.prototype;
        c.utc = function(d) {
          var a = { date: d, utc: !0, args: arguments };
          return new l(a);
        }, s.utc = function(d) {
          var a = c(this.toDate(), { locale: this.$L, utc: !0 });
          return d ? a.add(this.utcOffset(), r) : a;
        }, s.local = function() {
          return c(this.toDate(), { locale: this.$L, utc: !1 });
        };
        var u = s.parse;
        s.parse = function(d) {
          d.utc && (this.$u = !0), this.$utils().u(d.$offset) || (this.$offset = d.$offset), u.call(this, d);
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
  }(Nr)), Nr.exports;
}
var bd = gd();
const wd = /* @__PURE__ */ Nn(bd);
var jr = { exports: {} }, _d = jr.exports, Da;
function Sd() {
  return Da || (Da = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(_d, function() {
      var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
      return function(i, o, l) {
        var c, s = function(m, g, b) {
          b === void 0 && (b = {});
          var d = new Date(m), a = function(w, v) {
            v === void 0 && (v = {});
            var _ = v.timeZoneName || "short", E = w + "|" + _, P = n[E];
            return P || (P = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: w, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: _ }), n[E] = P), P;
          }(g, b);
          return a.formatToParts(d);
        }, u = function(m, g) {
          for (var b = s(m, g), d = [], a = 0; a < b.length; a += 1) {
            var w = b[a], v = w.type, _ = w.value, E = r[v];
            E >= 0 && (d[E] = parseInt(_, 10));
          }
          var P = d[3], R = P === 24 ? 0 : P, A = d[0] + "-" + d[1] + "-" + d[2] + " " + R + ":" + d[4] + ":" + d[5] + ":000", I = +m;
          return (l.utc(A).valueOf() - (I -= I % 1e3)) / 6e4;
        }, f = o.prototype;
        f.tz = function(m, g) {
          m === void 0 && (m = c);
          var b, d = this.utcOffset(), a = this.toDate(), w = a.toLocaleString("en-US", { timeZone: m }), v = Math.round((a - new Date(w)) / 1e3 / 60), _ = 15 * -Math.round(a.getTimezoneOffset() / 15) - v;
          if (!Number(_)) b = this.utcOffset(0, g);
          else if (b = l(w, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(_, !0), g) {
            var E = b.utcOffset();
            b = b.add(d - E, "minute");
          }
          return b.$x.$timezone = m, b;
        }, f.offsetName = function(m) {
          var g = this.$x.$timezone || l.tz.guess(), b = s(this.valueOf(), g, { timeZoneName: m }).find(function(d) {
            return d.type.toLowerCase() === "timezonename";
          });
          return b && b.value;
        };
        var p = f.startOf;
        f.startOf = function(m, g) {
          if (!this.$x || !this.$x.$timezone) return p.call(this, m, g);
          var b = l(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return p.call(b, m, g).tz(this.$x.$timezone, !0);
        }, l.tz = function(m, g, b) {
          var d = b && g, a = b || g || c, w = u(+l(), a);
          if (typeof m != "string") return l(m).tz(a);
          var v = function(R, A, I) {
            var q = R - 60 * A * 1e3, M = u(q, I);
            if (A === M) return [q, A];
            var B = u(q -= 60 * (M - A) * 1e3, I);
            return M === B ? [q, M] : [R - 60 * Math.min(M, B) * 1e3, Math.max(M, B)];
          }(l.utc(m, d).valueOf(), w, a), _ = v[0], E = v[1], P = l(_).utcOffset(E);
          return P.$x.$timezone = a, P;
        }, l.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, l.tz.setDefault = function(m) {
          c = m;
        };
      };
    });
  }(jr)), jr.exports;
}
var xd = Sd();
const Ed = /* @__PURE__ */ Nn(xd);
var Mr = { exports: {} }, Od = Mr.exports, Ia;
function Rd() {
  return Ia || (Ia = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Od, function() {
      return function(r, n, i) {
        var o = n.prototype, l = function(m) {
          var g, b = m.date, d = m.utc, a = {};
          if (!((g = b) === null || g instanceof Date || g instanceof Array || o.$utils().u(g) || g.constructor.name !== "Object")) {
            if (!Object.keys(b).length) return /* @__PURE__ */ new Date();
            var w = d ? i.utc() : i();
            Object.keys(b).forEach(function(q) {
              var M, B;
              a[M = q, B = o.$utils().p(M), B === "date" ? "day" : B] = b[q];
            });
            var v = a.day || (a.year || a.month >= 0 ? 1 : w.date()), _ = a.year || w.year(), E = a.month >= 0 ? a.month : a.year || a.day ? 0 : w.month(), P = a.hour || 0, R = a.minute || 0, A = a.second || 0, I = a.millisecond || 0;
            return d ? new Date(Date.UTC(_, E, v, P, R, A, I)) : new Date(_, E, v, P, R, A, I);
          }
          return b;
        }, c = o.parse;
        o.parse = function(m) {
          m.date = l.bind(this)(m), c.bind(this)(m);
        };
        var s = o.set, u = o.add, f = o.subtract, p = function(m, g, b, d) {
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
          return m.constructor.name === "Object" ? p.bind(this)(u, m, g) : u.bind(this)(m, g);
        }, o.subtract = function(m, g) {
          return m.constructor.name === "Object" ? p.bind(this)(u, m, g, -1) : f.bind(this)(m, g);
        };
      };
    });
  }(Mr)), Mr.exports;
}
var Ad = Rd();
const Pd = /* @__PURE__ */ Nn(Ad), kd = { class: "kvc-datetime-picker" }, Cd = /* @__PURE__ */ Ve({
  __name: "datetime-picker",
  props: {
    modelValue: {},
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    nonstyled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    Ee.extend(wd), Ee.extend(Ed), Ee.extend(Pd), Ee.tz.setDefault("Asia/Tokyo");
    const r = e, n = t, i = ke(() => r.modelValue && Ee(r.modelValue).isValid()), o = ke(() => i.value ? Ee(r.modelValue) : void 0), l = (s) => {
      if (s && Ee(s).isValid()) {
        const [u, f, p] = s.split("-").map(Number), m = o.value ? Ee(o.value).year(u).month(f - 1).date(p) : Ee({ year: u, month: f - 1, date: p });
        n("update:modelValue", m.toISOString());
      } else
        n("update:modelValue", void 0);
    }, c = (s) => {
      if (s) {
        const [u, f] = s.split(":").map(Number);
        if (!isNaN(u) && !isNaN(f)) {
          const p = o.value ? Ee(o.value).hour(u).minute(f) : Ee({ hour: u, minute: f });
          n("update:modelValue", p.toISOString());
        } else
          n("update:modelValue", void 0);
      } else
        n("update:modelValue", void 0);
    };
    return (s, u) => (X(), J("div", kd, [
      s.readOnly ? (X(), J("p", {
        key: 0,
        class: Ye(["kvc-field-value", { "kvc-field-value-nonstyled": s.nonstyled }])
      }, Qe(s.modelValue && Ge(Ee)(s.modelValue).isValid() ? Ge(Ee)(s.modelValue).format("YYYY-MM-DD HH:mm") : " "), 3)) : (X(), J(pt, { key: 1 }, [
        dt(Sl, {
          "model-value": o.value ? o.value.format("YYYY-MM-DD") : void 0,
          disabled: s.disabled,
          onChange: l
        }, null, 8, ["model-value", "disabled"]),
        dt(xl, {
          "model-value": o.value ? o.value.format("HH:mm") : void 0,
          disabled: s.disabled,
          onChange: c
        }, null, 8, ["model-value", "disabled"])
      ], 64))
    ]));
  }
}), Td = ["innerHTML"], Dd = /* @__PURE__ */ Ve({
  __name: "textarea",
  props: {
    modelValue: {},
    nonstyled: { type: Boolean },
    readOnly: { type: Boolean },
    width: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = ke({
      get: () => r.modelValue ?? "",
      set: (o) => n("update:modelValue", o)
    });
    return (o, l) => o.readOnly ? (X(), J("p", {
      key: 0,
      class: Ye(["kvc-field-value", { "kvc-field-value-nonstyled": o.nonstyled }]),
      innerHTML: (i.value || " ").replace(/\n/g, "<br>")
    }, null, 10, Td)) : Jt((X(), J("textarea", {
      key: 1,
      class: "kvc-field-text",
      "onUpdate:modelValue": l[0] || (l[0] = (c) => i.value = c)
    }, null, 512)), [
      [Iu, i.value]
    ]);
  }
});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function $a(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $a(Object(r), !0).forEach(function(n) {
      Id(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $a(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qr = function(t) {
    return typeof t;
  } : qr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qr(e);
}
function Id(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Bt() {
  return Bt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
function $d(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Nd(e, t) {
  if (e == null) return {};
  var r = $d(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var jd = "1.15.6";
function qt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Ft = qt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ar = qt(/Edge/i), Na = qt(/firefox/i), Jn = qt(/safari/i) && !qt(/chrome/i) && !qt(/android/i), Fo = qt(/iP(ad|od|hone)/i), El = qt(/chrome/i) && qt(/android/i), Ol = {
  capture: !1,
  passive: !1
};
function _e(e, t, r) {
  e.addEventListener(t, r, !Ft && Ol);
}
function be(e, t, r) {
  e.removeEventListener(t, r, !Ft && Ol);
}
function Gr(e, t) {
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
function Rl(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function bt(e, t, r, n) {
  if (e) {
    r = r || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === r && Gr(e, t) : Gr(e, t)) || n && e === r)
        return e;
      if (e === r) break;
    } while (e = Rl(e));
  }
  return null;
}
var ja = /\s+/g;
function ct(e, t, r) {
  if (e && t)
    if (e.classList)
      e.classList[r ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ").replace(ja, " ").replace(" " + t + " ", " ");
      e.className = (n + (r ? " " + t : "")).replace(ja, " ");
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
function Al(e, t, r) {
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
    var o, l, c, s, u, f, p;
    if (e !== window && e.parentNode && e !== Pt() ? (o = e.getBoundingClientRect(), l = o.top, c = o.left, s = o.bottom, u = o.right, f = o.height, p = o.width) : (l = 0, c = 0, s = window.innerHeight, u = window.innerWidth, f = window.innerHeight, p = window.innerWidth), (t || r) && e !== window && (i = i || e.parentNode, !Ft))
      do
        if (i && i.getBoundingClientRect && (se(i, "transform") !== "none" || r && se(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          l -= m.top + parseInt(se(i, "border-top-width")), c -= m.left + parseInt(se(i, "border-left-width")), s = l + o.height, u = c + o.width;
          break;
        }
      while (i = i.parentNode);
    if (n && e !== window) {
      var g = Dn(i || e), b = g && g.a, d = g && g.d;
      g && (l /= d, c /= b, p /= b, f /= d, s = l + f, u = c + p);
    }
    return {
      top: l,
      left: c,
      bottom: s,
      right: u,
      width: p,
      height: f
    };
  }
}
function Ma(e, t, r) {
  for (var n = Xt(e, !0), i = Ue(e)[t]; n; ) {
    var o = Ue(n)[r], l = void 0;
    if (l = i >= o, !l) return n;
    if (n === Pt()) break;
    n = Xt(n, !1);
  }
  return !1;
}
function $n(e, t, r, n) {
  for (var i = 0, o = 0, l = e.children; o < l.length; ) {
    if (l[o].style.display !== "none" && l[o] !== le.ghost && (n || l[o] !== le.dragged) && bt(l[o], r.draggable, e, !1)) {
      if (i === t)
        return l[o];
      i++;
    }
    o++;
  }
  return null;
}
function Lo(e, t) {
  for (var r = e.lastElementChild; r && (r === le.ghost || se(r, "display") === "none" || t && !Gr(r, t)); )
    r = r.previousElementSibling;
  return r || null;
}
function ht(e, t) {
  var r = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== le.clone && (!t || Gr(e, t)) && r++;
  return r;
}
function qa(e) {
  var t = 0, r = 0, n = Pt();
  if (e)
    do {
      var i = Dn(e), o = i.a, l = i.d;
      t += e.scrollLeft * o, r += e.scrollTop * l;
    } while (e !== n && (e = e.parentNode));
  return [t, r];
}
function Md(e, t) {
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
function qd(e, t) {
  if (e && t)
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
function bi(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Qn;
function Pl(e, t) {
  return function() {
    if (!Qn) {
      var r = arguments, n = this;
      r.length === 1 ? e.call(n, r[0]) : e.apply(n, r), Qn = setTimeout(function() {
        Qn = void 0;
      }, t);
    }
  };
}
function Bd() {
  clearTimeout(Qn), Qn = void 0;
}
function kl(e, t, r) {
  e.scrollLeft += t, e.scrollTop += r;
}
function Cl(e) {
  var t = window.Polymer, r = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : r ? r(e).clone(!0)[0] : e.cloneNode(!0);
}
function Tl(e, t, r) {
  var n = {};
  return Array.from(e.children).forEach(function(i) {
    var o, l, c, s;
    if (!(!bt(i, t.draggable, e, !1) || i.animated || i === r)) {
      var u = Ue(i);
      n.left = Math.min((o = n.left) !== null && o !== void 0 ? o : 1 / 0, u.left), n.top = Math.min((l = n.top) !== null && l !== void 0 ? l : 1 / 0, u.top), n.right = Math.max((c = n.right) !== null && c !== void 0 ? c : -1 / 0, u.right), n.bottom = Math.max((s = n.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var st = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Fd() {
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
            var o = kt({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var l = Dn(i, !0);
              l && (o.top -= l.f, o.left -= l.e);
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
      e.splice(Md(e, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var o = !1, l = 0;
      e.forEach(function(c) {
        var s = 0, u = c.target, f = u.fromRect, p = Ue(u), m = u.prevFromRect, g = u.prevToRect, b = c.rect, d = Dn(u, !0);
        d && (p.top -= d.f, p.left -= d.e), u.toRect = p, u.thisAnimationDuration && bi(m, p) && !bi(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - p.top) / (b.left - p.left) === (f.top - p.top) / (f.left - p.left) && (s = Ud(b, m, g, i.options)), bi(p, f) || (u.prevFromRect = f, u.prevToRect = p, s || (s = i.options.animation), i.animate(u, b, p, s)), s && (o = !0, l = Math.max(l, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, l) : typeof n == "function" && n(), e = [];
    },
    animate: function(n, i, o, l) {
      if (l) {
        se(n, "transition", ""), se(n, "transform", "");
        var c = Dn(this.el), s = c && c.a, u = c && c.d, f = (i.left - o.left) / (s || 1), p = (i.top - o.top) / (u || 1);
        n.animatingX = !!f, n.animatingY = !!p, se(n, "transform", "translate3d(" + f + "px," + p + "px,0)"), this.forRepaintDummy = Ld(n), se(n, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), se(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          se(n, "transition", ""), se(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, l);
      }
    }
  };
}
function Ld(e) {
  return e.offsetWidth;
}
function Ud(e, t, r, n) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) * n.animation;
}
var bn = [], wi = {
  initializeByDefault: !0
}, sr = {
  mount: function(t) {
    for (var r in wi)
      wi.hasOwnProperty(r) && !(r in t) && (t[r] = wi[r]);
    bn.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), bn.push(t);
  },
  pluginEvent: function(t, r, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var o = t + "Global";
    bn.forEach(function(l) {
      r[l.pluginName] && (r[l.pluginName][o] && r[l.pluginName][o](kt({
        sortable: r
      }, n)), r.options[l.pluginName] && r[l.pluginName][t] && r[l.pluginName][t](kt({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(t, r, n, i) {
    bn.forEach(function(c) {
      var s = c.pluginName;
      if (!(!t.options[s] && !c.initializeByDefault)) {
        var u = new c(t, r, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, Bt(n, u.defaults);
      }
    });
    for (var o in t.options)
      if (t.options.hasOwnProperty(o)) {
        var l = this.modifyOption(t, o, t.options[o]);
        typeof l < "u" && (t.options[o] = l);
      }
  },
  getEventProperties: function(t, r) {
    var n = {};
    return bn.forEach(function(i) {
      typeof i.eventProperties == "function" && Bt(n, i.eventProperties.call(r[i.pluginName], t));
    }), n;
  },
  modifyOption: function(t, r, n) {
    var i;
    return bn.forEach(function(o) {
      t[o.pluginName] && o.optionListeners && typeof o.optionListeners[r] == "function" && (i = o.optionListeners[r].call(t[o.pluginName], n));
    }), i;
  }
};
function Vd(e) {
  var t = e.sortable, r = e.rootEl, n = e.name, i = e.targetEl, o = e.cloneEl, l = e.toEl, c = e.fromEl, s = e.oldIndex, u = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, m = e.originalEvent, g = e.putSortable, b = e.extraEventProperties;
  if (t = t || r && r[st], !!t) {
    var d, a = t.options, w = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !Ft && !ar ? d = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(n, !0, !0)), d.to = l || r, d.from = c || r, d.item = i || r, d.clone = o, d.oldIndex = s, d.newIndex = u, d.oldDraggableIndex = f, d.newDraggableIndex = p, d.originalEvent = m, d.pullMode = g ? g.lastPutMode : void 0;
    var v = kt(kt({}, b), sr.getEventProperties(n, t));
    for (var _ in v)
      d[_] = v[_];
    r && r.dispatchEvent(d), a[w] && a[w].call(t, d);
  }
}
var Wd = ["evt"], at = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, o = Nd(n, Wd);
  sr.pluginEvent.bind(le)(t, r, kt({
    dragEl: H,
    parentEl: Ne,
    ghostEl: ce,
    rootEl: De,
    nextEl: sn,
    lastDownEl: Br,
    cloneEl: Ie,
    cloneHidden: Yt,
    dragStarted: zn,
    putSortable: Je,
    activeSortable: le.active,
    originalEvent: i,
    oldIndex: Tn,
    oldDraggableIndex: Zn,
    newIndex: ft,
    newDraggableIndex: zt,
    hideGhostForTarget: Nl,
    unhideGhostForTarget: jl,
    cloneNowHidden: function() {
      Yt = !0;
    },
    cloneNowShown: function() {
      Yt = !1;
    },
    dispatchSortableEvent: function(c) {
      rt({
        sortable: r,
        name: c,
        originalEvent: i
      });
    }
  }, o));
};
function rt(e) {
  Vd(kt({
    putSortable: Je,
    cloneEl: Ie,
    targetEl: H,
    rootEl: De,
    oldIndex: Tn,
    oldDraggableIndex: Zn,
    newIndex: ft,
    newDraggableIndex: zt
  }, e));
}
var H, Ne, ce, De, sn, Br, Ie, Yt, Tn, ft, Zn, zt, Or, Je, kn = !1, Kr = !1, zr = [], nn, vt, _i, Si, Ba, Fa, zn, wn, er, tr = !1, Rr = !1, Fr, et, xi = [], To = !1, Yr = [], ni = typeof document < "u", Ar = Fo, La = ar || Ft ? "cssFloat" : "float", Hd = ni && !El && !Fo && "draggable" in document.createElement("div"), Dl = function() {
  if (ni) {
    if (Ft)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Il = function(t, r) {
  var n = se(t), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), o = $n(t, 0, r), l = $n(t, 1, r), c = o && se(o), s = l && se(l), u = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + Ue(o).width, f = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ue(l).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && c.float && c.float !== "none") {
    var p = c.float === "left" ? "left" : "right";
    return l && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (c.display === "block" || c.display === "flex" || c.display === "table" || c.display === "grid" || u >= i && n[La] === "none" || l && n[La] === "none" && u + f > i) ? "vertical" : "horizontal";
}, Gd = function(t, r, n) {
  var i = n ? t.left : t.top, o = n ? t.right : t.bottom, l = n ? t.width : t.height, c = n ? r.left : r.top, s = n ? r.right : r.bottom, u = n ? r.width : r.height;
  return i === c || o === s || i + l / 2 === c + u / 2;
}, Kd = function(t, r) {
  var n;
  return zr.some(function(i) {
    var o = i[st].options.emptyInsertThreshold;
    if (!(!o || Lo(i))) {
      var l = Ue(i), c = t >= l.left - o && t <= l.right + o, s = r >= l.top - o && r <= l.bottom + o;
      if (c && s)
        return n = i;
    }
  }), n;
}, $l = function(t) {
  function r(o, l) {
    return function(c, s, u, f) {
      var p = c.options.group.name && s.options.group.name && c.options.group.name === s.options.group.name;
      if (o == null && (l || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (l && o === "clone")
        return o;
      if (typeof o == "function")
        return r(o(c, s, u, f), l)(c, s, u, f);
      var m = (l ? c : s).options.group.name;
      return o === !0 || typeof o == "string" && o === m || o.join && o.indexOf(m) > -1;
    };
  }
  var n = {}, i = t.group;
  (!i || qr(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = r(i.pull, !0), n.checkPut = r(i.put), n.revertClone = i.revertClone, t.group = n;
}, Nl = function() {
  !Dl && ce && se(ce, "display", "none");
}, jl = function() {
  !Dl && ce && se(ce, "display", "");
};
ni && !El && document.addEventListener("click", function(e) {
  if (Kr)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Kr = !1, !1;
}, !0);
var rn = function(t) {
  if (H) {
    t = t.touches ? t.touches[0] : t;
    var r = Kd(t.clientX, t.clientY);
    if (r) {
      var n = {};
      for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[st]._onDragOver(n);
    }
  }
}, zd = function(t) {
  H && H.parentNode[st]._isOutsideThisEl(t.target);
};
function le(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = Bt({}, t), e[st] = this;
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
      return Il(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(l, c) {
      l.setData("Text", c.textContent);
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
    supportPointer: le.supportPointer !== !1 && "PointerEvent" in window && (!Jn || Fo),
    emptyInsertThreshold: 5
  };
  sr.initializePlugins(this, e, r);
  for (var n in r)
    !(n in t) && (t[n] = r[n]);
  $l(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Hd, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? _e(e, "pointerdown", this._onTapStart) : (_e(e, "mousedown", this._onTapStart), _e(e, "touchstart", this._onTapStart)), this.nativeDraggable && (_e(e, "dragover", this), _e(e, "dragenter", this)), zr.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Bt(this, Fd());
}
le.prototype = /** @lends Sortable.prototype */
{
  constructor: le,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (wn = null);
  },
  _getDirection: function(t, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, r, H) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var r = this, n = this.el, i = this.options, o = i.preventOnFilter, l = t.type, c = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (c || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, f = i.filter;
      if (np(n), !H && !(/mousedown|pointerdown/.test(l) && t.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Jn && s && s.tagName.toUpperCase() === "SELECT") && (s = bt(s, i.draggable, n, !1), !(s && s.animated) && Br !== s)) {
        if (Tn = ht(s), Zn = ht(s, i.draggable), typeof f == "function") {
          if (f.call(this, t, s, this)) {
            rt({
              sortable: r,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: n,
              fromEl: n
            }), at("filter", r, {
              evt: t
            }), o && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(p) {
          if (p = bt(u, p.trim(), n, !1), p)
            return rt({
              sortable: r,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: n,
              toEl: n
            }), at("filter", r, {
              evt: t
            }), !0;
        }), f)) {
          o && t.preventDefault();
          return;
        }
        i.handle && !bt(u, i.handle, n, !1) || this._prepareDragStart(t, c, s);
      }
    }
  },
  _prepareDragStart: function(t, r, n) {
    var i = this, o = i.el, l = i.options, c = o.ownerDocument, s;
    if (n && !H && n.parentNode === o) {
      var u = Ue(n);
      if (De = o, H = n, Ne = H.parentNode, sn = H.nextSibling, Br = n, Or = l.group, le.dragged = H, nn = {
        target: H,
        clientX: (r || t).clientX,
        clientY: (r || t).clientY
      }, Ba = nn.clientX - u.left, Fa = nn.clientY - u.top, this._lastX = (r || t).clientX, this._lastY = (r || t).clientY, H.style["will-change"] = "all", s = function() {
        if (at("delayEnded", i, {
          evt: t
        }), le.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Na && i.nativeDraggable && (H.draggable = !0), i._triggerDragStart(t, r), rt({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), ct(H, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(f) {
        Al(H, f.trim(), Ei);
      }), _e(c, "dragover", rn), _e(c, "mousemove", rn), _e(c, "touchmove", rn), l.supportPointer ? (_e(c, "pointerup", i._onDrop), !this.nativeDraggable && _e(c, "pointercancel", i._onDrop)) : (_e(c, "mouseup", i._onDrop), _e(c, "touchend", i._onDrop), _e(c, "touchcancel", i._onDrop)), Na && this.nativeDraggable && (this.options.touchStartThreshold = 4, H.draggable = !0), at("delayStart", this, {
        evt: t
      }), l.delay && (!l.delayOnTouchOnly || r) && (!this.nativeDraggable || !(ar || Ft))) {
        if (le.eventCanceled) {
          this._onDrop();
          return;
        }
        l.supportPointer ? (_e(c, "pointerup", i._disableDelayedDrag), _e(c, "pointercancel", i._disableDelayedDrag)) : (_e(c, "mouseup", i._disableDelayedDrag), _e(c, "touchend", i._disableDelayedDrag), _e(c, "touchcancel", i._disableDelayedDrag)), _e(c, "mousemove", i._delayedDragTouchMoveHandler), _e(c, "touchmove", i._delayedDragTouchMoveHandler), l.supportPointer && _e(c, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, l.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var r = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    H && Ei(H), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    be(t, "mouseup", this._disableDelayedDrag), be(t, "touchend", this._disableDelayedDrag), be(t, "touchcancel", this._disableDelayedDrag), be(t, "pointerup", this._disableDelayedDrag), be(t, "pointercancel", this._disableDelayedDrag), be(t, "mousemove", this._delayedDragTouchMoveHandler), be(t, "touchmove", this._delayedDragTouchMoveHandler), be(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, r) {
    r = r || t.pointerType == "touch" && t, !this.nativeDraggable || r ? this.options.supportPointer ? _e(document, "pointermove", this._onTouchMove) : r ? _e(document, "touchmove", this._onTouchMove) : _e(document, "mousemove", this._onTouchMove) : (_e(H, "dragend", this), _e(De, "dragstart", this._onDragStart));
    try {
      document.selection ? Lr(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, r) {
    if (kn = !1, De && H) {
      at("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && _e(document, "dragover", zd);
      var n = this.options;
      !t && ct(H, n.dragClass, !1), ct(H, n.ghostClass, !0), le.active = this, t && this._appendGhost(), rt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (vt) {
      this._lastX = vt.clientX, this._lastY = vt.clientY, Nl();
      for (var t = document.elementFromPoint(vt.clientX, vt.clientY), r = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(vt.clientX, vt.clientY), t !== r); )
        r = t;
      if (H.parentNode[st]._isOutsideThisEl(t), r)
        do {
          if (r[st]) {
            var n = void 0;
            if (n = r[st]._onDragOver({
              clientX: vt.clientX,
              clientY: vt.clientY,
              target: t,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = r;
        } while (r = Rl(r));
      jl();
    }
  },
  _onTouchMove: function(t) {
    if (nn) {
      var r = this.options, n = r.fallbackTolerance, i = r.fallbackOffset, o = t.touches ? t.touches[0] : t, l = ce && Dn(ce, !0), c = ce && l && l.a, s = ce && l && l.d, u = Ar && et && qa(et), f = (o.clientX - nn.clientX + i.x) / (c || 1) + (u ? u[0] - xi[0] : 0) / (c || 1), p = (o.clientY - nn.clientY + i.y) / (s || 1) + (u ? u[1] - xi[1] : 0) / (s || 1);
      if (!le.active && !kn) {
        if (n && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (ce) {
        l ? (l.e += f - (_i || 0), l.f += p - (Si || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: p
        };
        var m = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        se(ce, "webkitTransform", m), se(ce, "mozTransform", m), se(ce, "msTransform", m), se(ce, "transform", m), _i = f, Si = p, vt = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ce) {
      var t = this.options.fallbackOnBody ? document.body : De, r = Ue(H, !0, Ar, !0, t), n = this.options;
      if (Ar) {
        for (et = t; se(et, "position") === "static" && se(et, "transform") === "none" && et !== document; )
          et = et.parentNode;
        et !== document.body && et !== document.documentElement ? (et === document && (et = Pt()), r.top += et.scrollTop, r.left += et.scrollLeft) : et = Pt(), xi = qa(et);
      }
      ce = H.cloneNode(!0), ct(ce, n.ghostClass, !1), ct(ce, n.fallbackClass, !0), ct(ce, n.dragClass, !0), se(ce, "transition", ""), se(ce, "transform", ""), se(ce, "box-sizing", "border-box"), se(ce, "margin", 0), se(ce, "top", r.top), se(ce, "left", r.left), se(ce, "width", r.width), se(ce, "height", r.height), se(ce, "opacity", "0.8"), se(ce, "position", Ar ? "absolute" : "fixed"), se(ce, "zIndex", "100000"), se(ce, "pointerEvents", "none"), le.ghost = ce, t.appendChild(ce), se(ce, "transform-origin", Ba / parseInt(ce.style.width) * 100 + "% " + Fa / parseInt(ce.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, r) {
    var n = this, i = t.dataTransfer, o = n.options;
    if (at("dragStart", this, {
      evt: t
    }), le.eventCanceled) {
      this._onDrop();
      return;
    }
    at("setupClone", this), le.eventCanceled || (Ie = Cl(H), Ie.removeAttribute("id"), Ie.draggable = !1, Ie.style["will-change"] = "", this._hideClone(), ct(Ie, this.options.chosenClass, !1), le.clone = Ie), n.cloneId = Lr(function() {
      at("clone", n), !le.eventCanceled && (n.options.removeCloneOnHide || De.insertBefore(Ie, H), n._hideClone(), rt({
        sortable: n,
        name: "clone"
      }));
    }), !r && ct(H, o.dragClass, !0), r ? (Kr = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (be(document, "mouseup", n._onDrop), be(document, "touchend", n._onDrop), be(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(n, i, H)), _e(document, "drop", n), se(H, "transform", "translateZ(0)")), kn = !0, n._dragStartId = Lr(n._dragStarted.bind(n, r, t)), _e(document, "selectstart", n), zn = !0, window.getSelection().removeAllRanges(), Jn && se(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var r = this.el, n = t.target, i, o, l, c = this.options, s = c.group, u = le.active, f = Or === s, p = c.sort, m = Je || u, g, b = this, d = !1;
    if (To) return;
    function a(j, Z) {
      at(j, b, kt({
        evt: t,
        isOwner: f,
        axis: g ? "vertical" : "horizontal",
        revert: l,
        dragRect: i,
        targetRect: o,
        canSort: p,
        fromSortable: m,
        target: n,
        completed: v,
        onMove: function(fe, me) {
          return Pr(De, r, H, i, fe, Ue(fe), t, me);
        },
        changed: _
      }, Z));
    }
    function w() {
      a("dragOverAnimationCapture"), b.captureAnimationState(), b !== m && m.captureAnimationState();
    }
    function v(j) {
      return a("dragOverCompleted", {
        insertion: j
      }), j && (f ? u._hideClone() : u._showClone(b), b !== m && (ct(H, Je ? Je.options.ghostClass : u.options.ghostClass, !1), ct(H, c.ghostClass, !0)), Je !== b && b !== le.active ? Je = b : b === le.active && Je && (Je = null), m === b && (b._ignoreWhileAnimating = n), b.animateAll(function() {
        a("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === H && !H.animated || n === r && !n.animated) && (wn = null), !c.dragoverBubble && !t.rootEl && n !== document && (H.parentNode[st]._isOutsideThisEl(t.target), !j && rn(t)), !c.dragoverBubble && t.stopPropagation && t.stopPropagation(), d = !0;
    }
    function _() {
      ft = ht(H), zt = ht(H, c.draggable), rt({
        sortable: b,
        name: "change",
        toEl: r,
        newIndex: ft,
        newDraggableIndex: zt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = bt(n, c.draggable, r, !0), a("dragOver"), le.eventCanceled) return d;
    if (H.contains(t.target) || n.animated && n.animatingX && n.animatingY || b._ignoreWhileAnimating === n)
      return v(!1);
    if (Kr = !1, u && !c.disabled && (f ? p || (l = Ne !== De) : Je === this || (this.lastPutMode = Or.checkPull(this, u, H, t)) && s.checkPut(this, u, H, t))) {
      if (g = this._getDirection(t, n) === "vertical", i = Ue(H), a("dragOverValid"), le.eventCanceled) return d;
      if (l)
        return Ne = De, w(), this._hideClone(), a("revert"), le.eventCanceled || (sn ? De.insertBefore(H, sn) : De.appendChild(H)), v(!0);
      var E = Lo(r, c.draggable);
      if (!E || Qd(t, g, this) && !E.animated) {
        if (E === H)
          return v(!1);
        if (E && r === t.target && (n = E), n && (o = Ue(n)), Pr(De, r, H, i, n, o, t, !!n) !== !1)
          return w(), E && E.nextSibling ? r.insertBefore(H, E.nextSibling) : r.appendChild(H), Ne = r, _(), v(!0);
      } else if (E && Jd(t, g, this)) {
        var P = $n(r, 0, c, !0);
        if (P === H)
          return v(!1);
        if (n = P, o = Ue(n), Pr(De, r, H, i, n, o, t, !1) !== !1)
          return w(), r.insertBefore(H, P), Ne = r, _(), v(!0);
      } else if (n.parentNode === r) {
        o = Ue(n);
        var R = 0, A, I = H.parentNode !== r, q = !Gd(H.animated && H.toRect || i, n.animated && n.toRect || o, g), M = g ? "top" : "left", B = Ma(n, "top", "top") || Ma(H, "top", "top"), W = B ? B.scrollTop : void 0;
        wn !== n && (A = o[M], tr = !1, Rr = !q && c.invertSwap || I), R = Zd(t, n, o, g, q ? 1 : c.swapThreshold, c.invertedSwapThreshold == null ? c.swapThreshold : c.invertedSwapThreshold, Rr, wn === n);
        var ae;
        if (R !== 0) {
          var V = ht(H);
          do
            V -= R, ae = Ne.children[V];
          while (ae && (se(ae, "display") === "none" || ae === ce));
        }
        if (R === 0 || ae === n)
          return v(!1);
        wn = n, er = R;
        var F = n.nextElementSibling, U = !1;
        U = R === 1;
        var z = Pr(De, r, H, i, n, o, t, U);
        if (z !== !1)
          return (z === 1 || z === -1) && (U = z === 1), To = !0, setTimeout(Xd, 30), w(), U && !F ? r.appendChild(H) : n.parentNode.insertBefore(H, U ? F : n), B && kl(B, 0, W - B.scrollTop), Ne = H.parentNode, A !== void 0 && !Rr && (Fr = Math.abs(A - Ue(n)[M])), _(), v(!0);
      }
      if (r.contains(H))
        return v(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    be(document, "mousemove", this._onTouchMove), be(document, "touchmove", this._onTouchMove), be(document, "pointermove", this._onTouchMove), be(document, "dragover", rn), be(document, "mousemove", rn), be(document, "touchmove", rn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    be(t, "mouseup", this._onDrop), be(t, "touchend", this._onDrop), be(t, "pointerup", this._onDrop), be(t, "pointercancel", this._onDrop), be(t, "touchcancel", this._onDrop), be(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var r = this.el, n = this.options;
    if (ft = ht(H), zt = ht(H, n.draggable), at("drop", this, {
      evt: t
    }), Ne = H && H.parentNode, ft = ht(H), zt = ht(H, n.draggable), le.eventCanceled) {
      this._nulling();
      return;
    }
    kn = !1, Rr = !1, tr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Do(this.cloneId), Do(this._dragStartId), this.nativeDraggable && (be(document, "drop", this), be(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Jn && se(document.body, "user-select", ""), se(H, "transform", ""), t && (zn && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), ce && ce.parentNode && ce.parentNode.removeChild(ce), (De === Ne || Je && Je.lastPutMode !== "clone") && Ie && Ie.parentNode && Ie.parentNode.removeChild(Ie), H && (this.nativeDraggable && be(H, "dragend", this), Ei(H), H.style["will-change"] = "", zn && !kn && ct(H, Je ? Je.options.ghostClass : this.options.ghostClass, !1), ct(H, this.options.chosenClass, !1), rt({
      sortable: this,
      name: "unchoose",
      toEl: Ne,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), De !== Ne ? (ft >= 0 && (rt({
      rootEl: Ne,
      name: "add",
      toEl: Ne,
      fromEl: De,
      originalEvent: t
    }), rt({
      sortable: this,
      name: "remove",
      toEl: Ne,
      originalEvent: t
    }), rt({
      rootEl: Ne,
      name: "sort",
      toEl: Ne,
      fromEl: De,
      originalEvent: t
    }), rt({
      sortable: this,
      name: "sort",
      toEl: Ne,
      originalEvent: t
    })), Je && Je.save()) : ft !== Tn && ft >= 0 && (rt({
      sortable: this,
      name: "update",
      toEl: Ne,
      originalEvent: t
    }), rt({
      sortable: this,
      name: "sort",
      toEl: Ne,
      originalEvent: t
    })), le.active && ((ft == null || ft === -1) && (ft = Tn, zt = Zn), rt({
      sortable: this,
      name: "end",
      toEl: Ne,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    at("nulling", this), De = H = Ne = ce = sn = Ie = Br = Yt = nn = vt = zn = ft = zt = Tn = Zn = wn = er = Je = Or = le.dragged = le.ghost = le.clone = le.active = null, Yr.forEach(function(t) {
      t.checked = !0;
    }), Yr.length = _i = Si = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        H && (this._onDragOver(t), Yd(t));
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
    for (var t = [], r, n = this.el.children, i = 0, o = n.length, l = this.options; i < o; i++)
      r = n[i], bt(r, l.draggable, this.el, !1) && t.push(r.getAttribute(l.dataIdAttr) || tp(r));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, r) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(o, l) {
      var c = i.children[l];
      bt(c, this.options.draggable, i, !1) && (n[o] = c);
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
    return bt(t, r || this.options.draggable, this.el, !1);
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
    var i = sr.modifyOption(this, t, r);
    typeof i < "u" ? n[t] = i : n[t] = r, t === "group" && $l(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    at("destroy", this);
    var t = this.el;
    t[st] = null, be(t, "mousedown", this._onTapStart), be(t, "touchstart", this._onTapStart), be(t, "pointerdown", this._onTapStart), this.nativeDraggable && (be(t, "dragover", this), be(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), zr.splice(zr.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Yt) {
      if (at("hideClone", this), le.eventCanceled) return;
      se(Ie, "display", "none"), this.options.removeCloneOnHide && Ie.parentNode && Ie.parentNode.removeChild(Ie), Yt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Yt) {
      if (at("showClone", this), le.eventCanceled) return;
      H.parentNode == De && !this.options.group.revertClone ? De.insertBefore(Ie, H) : sn ? De.insertBefore(Ie, sn) : De.appendChild(Ie), this.options.group.revertClone && this.animate(H, Ie), se(Ie, "display", ""), Yt = !1;
    }
  }
};
function Yd(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Pr(e, t, r, n, i, o, l, c) {
  var s, u = e[st], f = u.options.onMove, p;
  return window.CustomEvent && !Ft && !ar ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = r, s.draggedRect = n, s.related = i || t, s.relatedRect = o || Ue(t), s.willInsertAfter = c, s.originalEvent = l, e.dispatchEvent(s), f && (p = f.call(u, s, l)), p;
}
function Ei(e) {
  e.draggable = !1;
}
function Xd() {
  To = !1;
}
function Jd(e, t, r) {
  var n = Ue($n(r.el, 0, r.options, !0)), i = Tl(r.el, r.options, ce), o = 10;
  return t ? e.clientX < i.left - o || e.clientY < n.top && e.clientX < n.right : e.clientY < i.top - o || e.clientY < n.bottom && e.clientX < n.left;
}
function Qd(e, t, r) {
  var n = Ue(Lo(r.el, r.options.draggable)), i = Tl(r.el, r.options, ce), o = 10;
  return t ? e.clientX > i.right + o || e.clientY > n.bottom && e.clientX > n.left : e.clientY > i.bottom + o || e.clientX > n.right && e.clientY > n.top;
}
function Zd(e, t, r, n, i, o, l, c) {
  var s = n ? e.clientY : e.clientX, u = n ? r.height : r.width, f = n ? r.top : r.left, p = n ? r.bottom : r.right, m = !1;
  if (!l) {
    if (c && Fr < u * i) {
      if (!tr && (er === 1 ? s > f + u * o / 2 : s < p - u * o / 2) && (tr = !0), tr)
        m = !0;
      else if (er === 1 ? s < f + Fr : s > p - Fr)
        return -er;
    } else if (s > f + u * (1 - i) / 2 && s < p - u * (1 - i) / 2)
      return ep(t);
  }
  return m = m || l, m && (s < f + u * o / 2 || s > p - u * o / 2) ? s > f + u / 2 ? 1 : -1 : 0;
}
function ep(e) {
  return ht(H) < ht(e) ? 1 : -1;
}
function tp(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, r = t.length, n = 0; r--; )
    n += t.charCodeAt(r);
  return n.toString(36);
}
function np(e) {
  Yr.length = 0;
  for (var t = e.getElementsByTagName("input"), r = t.length; r--; ) {
    var n = t[r];
    n.checked && Yr.push(n);
  }
}
function Lr(e) {
  return setTimeout(e, 0);
}
function Do(e) {
  return clearTimeout(e);
}
ni && _e(document, "touchmove", function(e) {
  (le.active || kn) && e.cancelable && e.preventDefault();
});
le.utils = {
  on: _e,
  off: be,
  css: se,
  find: Al,
  is: function(t, r) {
    return !!bt(t, r, t, !1);
  },
  extend: qd,
  throttle: Pl,
  closest: bt,
  toggleClass: ct,
  clone: Cl,
  index: ht,
  nextTick: Lr,
  cancelNextTick: Do,
  detectDirection: Il,
  getChild: $n,
  expando: st
};
le.get = function(e) {
  return e[st];
};
le.mount = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (le.utils = kt(kt({}, le.utils), n.utils)), sr.mount(n);
  });
};
le.create = function(e, t) {
  return new le(e, t);
};
le.version = jd;
var Le = [], Yn, Io, $o = !1, Oi, Ri, Xr, Xn;
function rp() {
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
      this.sortable.nativeDraggable ? be(document, "dragover", this._handleAutoScroll) : (be(document, "pointermove", this._handleFallbackAutoScroll), be(document, "touchmove", this._handleFallbackAutoScroll), be(document, "mousemove", this._handleFallbackAutoScroll)), Ua(), Ur(), Bd();
    },
    nulling: function() {
      Xr = Io = Yn = $o = Xn = Oi = Ri = null, Le.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var i = this, o = (r.touches ? r.touches[0] : r).clientX, l = (r.touches ? r.touches[0] : r).clientY, c = document.elementFromPoint(o, l);
      if (Xr = r, n || this.options.forceAutoScrollFallback || ar || Ft || Jn) {
        Ai(r, this.options, c, n);
        var s = Xt(c, !0);
        $o && (!Xn || o !== Oi || l !== Ri) && (Xn && Ua(), Xn = setInterval(function() {
          var u = Xt(document.elementFromPoint(o, l), !0);
          u !== s && (s = u, Ur()), Ai(r, i.options, u, n);
        }, 10), Oi = o, Ri = l);
      } else {
        if (!this.options.bubbleScroll || Xt(c, !0) === Pt()) {
          Ur();
          return;
        }
        Ai(r, this.options, Xt(c, !1), !1);
      }
    }
  }, Bt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ur() {
  Le.forEach(function(e) {
    clearInterval(e.pid);
  }), Le = [];
}
function Ua() {
  clearInterval(Xn);
}
var Ai = Pl(function(e, t, r, n) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, l = t.scrollSensitivity, c = t.scrollSpeed, s = Pt(), u = !1, f;
    Io !== r && (Io = r, Ur(), Yn = t.scroll, f = t.scrollFn, Yn === !0 && (Yn = Xt(r, !0)));
    var p = 0, m = Yn;
    do {
      var g = m, b = Ue(g), d = b.top, a = b.bottom, w = b.left, v = b.right, _ = b.width, E = b.height, P = void 0, R = void 0, A = g.scrollWidth, I = g.scrollHeight, q = se(g), M = g.scrollLeft, B = g.scrollTop;
      g === s ? (P = _ < A && (q.overflowX === "auto" || q.overflowX === "scroll" || q.overflowX === "visible"), R = E < I && (q.overflowY === "auto" || q.overflowY === "scroll" || q.overflowY === "visible")) : (P = _ < A && (q.overflowX === "auto" || q.overflowX === "scroll"), R = E < I && (q.overflowY === "auto" || q.overflowY === "scroll"));
      var W = P && (Math.abs(v - i) <= l && M + _ < A) - (Math.abs(w - i) <= l && !!M), ae = R && (Math.abs(a - o) <= l && B + E < I) - (Math.abs(d - o) <= l && !!B);
      if (!Le[p])
        for (var V = 0; V <= p; V++)
          Le[V] || (Le[V] = {});
      (Le[p].vx != W || Le[p].vy != ae || Le[p].el !== g) && (Le[p].el = g, Le[p].vx = W, Le[p].vy = ae, clearInterval(Le[p].pid), (W != 0 || ae != 0) && (u = !0, Le[p].pid = setInterval((function() {
        n && this.layer === 0 && le.active._onTouchMove(Xr);
        var F = Le[this.layer].vy ? Le[this.layer].vy * c : 0, U = Le[this.layer].vx ? Le[this.layer].vx * c : 0;
        typeof f == "function" && f.call(le.dragged.parentNode[st], U, F, e, Xr, Le[this.layer].el) !== "continue" || kl(Le[this.layer].el, U, F);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && m !== s && (m = Xt(m, !1)));
    $o = u;
  }
}, 30), Ml = function(t) {
  var r = t.originalEvent, n = t.putSortable, i = t.dragEl, o = t.activeSortable, l = t.dispatchSortableEvent, c = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (r) {
    var u = n || o;
    c();
    var f = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, p = document.elementFromPoint(f.clientX, f.clientY);
    s(), u && !u.el.contains(p) && (l("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function Uo() {
}
Uo.prototype = {
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
  drop: Ml
};
Bt(Uo, {
  pluginName: "revertOnSpill"
});
function Vo() {
}
Vo.prototype = {
  onSpill: function(t) {
    var r = t.dragEl, n = t.putSortable, i = n || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: Ml
};
Bt(Vo, {
  pluginName: "removeOnSpill"
});
le.mount(new rp());
le.mount(Vo, Uo);
function ip(e, t, r = {}) {
  let n;
  const { document: i = vf, ...o } = r, l = {
    onUpdate: (f) => {
      sp(t, f.oldIndex, f.newIndex, f);
    }
  }, c = () => {
    const f = typeof e == "string" ? i == null ? void 0 : i.querySelector(e) : Cn(e);
    !f || n !== void 0 || (n = new le(f, { ...l, ...o }));
  }, s = () => {
    n == null || n.destroy(), n = void 0;
  }, u = (f, p) => {
    if (p !== void 0)
      n == null || n.option(f, p);
    else
      return n == null ? void 0 : n.option(f);
  };
  return mf(c), wl(s), {
    stop: s,
    start: c,
    option: u
  };
}
function op(e, t, r) {
  const n = e.children[r];
  e.insertBefore(t, n);
}
function ap(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function sp(e, t, r, n = null) {
  n != null && (ap(n.item), op(n.from, n.item, t));
  const i = $u(e), o = i ? [...Mt(e)] : Mt(e);
  if (r >= 0 && r < o.length) {
    const l = o.splice(t, 1)[0];
    sl(() => {
      o.splice(r, 0, l), i && (e.value = o);
    });
  }
}
var on = {}, Pi = {}, Va;
function ri() {
  return Va || (Va = 1, function(e) {
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
  }(Pi)), Pi;
}
var $e = {}, _n = {}, Wa;
function Wo() {
  if (Wa) return _n;
  Wa = 1;
  var e = _n.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, l) {
        o.__proto__ = l;
      } || function(o, l) {
        for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (o[c] = l[c]);
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
  Object.defineProperty(_n, "__esModule", { value: !0 }), _n.UnsupportedPlatformError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var o = this, l = "This function is not supported in ".concat(i, " environment");
        return o = r.call(this, l) || this, Error.captureStackTrace && Error.captureStackTrace(o, n), o.name = "UnsupportedPlatformError", o.platform = i, Object.setPrototypeOf(o, n.prototype), o;
      }
      return n;
    }(Error)
  );
  return _n.UnsupportedPlatformError = t, _n;
}
var ki, Ha;
function lp() {
  if (Ha) return ki;
  Ha = 1;
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
        const l = i[o];
        if (l[0] !== "*") {
          if (!r && l in this._types)
            throw new Error(
              'Attempt to change mapping for "' + l + '" extension from "' + this._types[l] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + l + '" from the list of extensions for "' + n + '".'
            );
          this._types[l] = n;
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
  }, ki = e, ki;
}
var Ci, Ga;
function up() {
  return Ga || (Ga = 1, Ci = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }), Ci;
}
var Ti, Ka;
function cp() {
  if (Ka) return Ti;
  Ka = 1;
  let e = lp();
  return Ti = new e(up()), Ti;
}
const fp = "@kintone/rest-api-client", dp = "5.7.0", pp = { access: "public" }, hp = { name: "Cybozu, Inc.", url: "https://cybozu.co.jp" }, mp = "Kintone REST API client for JavaScript", yp = "lib/src/index.js", vp = "esm/src/index.js", gp = "lib/src/index.browser.js", bp = "lib/src/index.d.ts", wp = { prebuild: "pnpm clean", build: "tsc --build --force", postbuild: "run-p build:*", lint: "eslint 'src/**/*.ts' --max-warnings 0", prepublishOnly: "run-p build:umd_*", test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest", "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand", "build:umd_dev": "rollup -c --environment BUILD:development", "build:umd_prod": "rollup -c --environment BUILD:production", clean: "rimraf lib esm umd", fix: "pnpm lint --fix", start: "pnpm build --watch" }, _p = { type: "git", url: "git+https://github.com/kintone/js-sdk.git", directory: "packages/rest-api-client" }, Sp = ["esm", "lib", "umd", "index.mjs"], xp = ["kintone", "rest", "api-client"], Ep = "MIT", Op = { url: "https://github.com/kintone/js-sdk/issues" }, Rp = "https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme", Ap = { node: ">=18" }, Pp = { "@rollup/plugin-babel": "^6.0.4", "@rollup/plugin-commonjs": "^26.0.3", "@rollup/plugin-json": "^6.1.0", "@rollup/plugin-node-resolve": "^15.3.1", "@rollup/plugin-terser": "^0.4.4", "@types/core-js": "^2.5.8", "@types/js-base64": "^3.3.1", "@types/mime": "^3.0.4", "@types/qs": "^6.9.17", rollup: "^4.30.1", "rollup-plugin-ecma-version-validator": "^0.2.13", "rollup-plugin-license": "^3.5.3", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-polyfill-node": "^0.13.0", webpack: "^5.97.1", "webpack-cli": "^5.1.4", "babel-loader": "^9.2.1", vite: "^5.4.11", rimraf: "^5.0.10", "cross-env": "^7.0.3" }, kp = { "core-js": "^3.39.0", axios: "^1.7.9", "form-data": "^4.0.1", "js-base64": "^3.7.7", mime: "^3.0.0", qs: "^6.12.3" }, Cp = { ".": { types: { import: "./esm/src/index.d.ts", require: "./lib/src/index.d.ts", default: "./lib/src/index.d.ts" }, node: { import: "./index.mjs", require: "./lib/src/index.js", default: "./lib/src/index.js" }, browser: "./lib/src/index.browser.js" }, "./package.json": "./package.json" }, Tp = {
  name: fp,
  version: dp,
  publishConfig: pp,
  author: hp,
  description: mp,
  main: yp,
  module: vp,
  browser: gp,
  types: bp,
  scripts: wp,
  repository: _p,
  files: Sp,
  keywords: xp,
  license: Ep,
  bugs: Op,
  homepage: Rp,
  engines: Ap,
  devDependencies: Pp,
  dependencies: kp,
  exports: Cp
};
var za;
function Dp() {
  if (za) return $e;
  za = 1;
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
  var n = Wo(), i = r(cp()), o = r(Tp), l = function(b) {
    throw new n.UnsupportedPlatformError("Browser");
  };
  $e.readFileFromPath = l;
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
  var u = function() {
    return {};
  };
  $e.buildPlatformDependentConfig = u;
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
var Sn = {}, Kt = {}, xn = {}, Gn = {}, Ya;
function Ip() {
  if (Ya) return Gn;
  Ya = 1, Object.defineProperty(Gn, "__esModule", { value: !0 }), Gn.buildPath = void 0;
  var e = function(t) {
    var r = t.endpointName, n = t.guestSpaceId, i = t.preview, o = n !== void 0 ? "/guest/".concat(n) : "", l = i ? "/preview" : "";
    return "/k".concat(o, "/v1").concat(l, "/").concat(r, ".json");
  };
  return Gn.buildPath = e, Gn;
}
var Xa;
function jn() {
  if (Xa) return xn;
  Xa = 1;
  var e = xn.__assign || function() {
    return e = Object.assign || function(n) {
      for (var i, o = 1, l = arguments.length; o < l; o++) {
        i = arguments[o];
        for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (n[c] = i[c]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(xn, "__esModule", { value: !0 }), xn.BaseClient = void 0;
  var t = Ip(), r = (
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
  return xn.BaseClient = r, xn;
}
var Ja;
function $p() {
  if (Ja) return Kt;
  Ja = 1;
  var e = Kt.__extends || /* @__PURE__ */ function() {
    var o = function(l, c) {
      return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
        s.__proto__ = u;
      } || function(s, u) {
        for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (s[f] = u[f]);
      }, o(l, c);
    };
    return function(l, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      o(l, c);
      function s() {
        this.constructor = l;
      }
      l.prototype = c === null ? Object.create(c) : (s.prototype = c.prototype, new s());
    };
  }(), t = Kt.__assign || function() {
    return t = Object.assign || function(o) {
      for (var l, c = 1, s = arguments.length; c < s; c++) {
        l = arguments[c];
        for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (o[u] = l[u]);
      }
      return o;
    }, t.apply(this, arguments);
  }, r = Kt.__rest || function(o, l) {
    var c = {};
    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && l.indexOf(s) < 0 && (c[s] = o[s]);
    if (o != null && typeof Object.getOwnPropertySymbols == "function")
      for (var u = 0, s = Object.getOwnPropertySymbols(o); u < s.length; u++)
        l.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(o, s[u]) && (c[s[u]] = o[s[u]]);
    return c;
  };
  Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.BulkRequestClient = void 0;
  var n = jn(), i = (
    /** @class */
    function(o) {
      e(l, o);
      function l(c, s) {
        var u = o.call(this, c, s) || this;
        return u.REQUESTS_LENGTH_LIMIT = 20, u;
      }
      return l.prototype.send = function(c) {
        var s = this, u = c.requests, f = u.map(function(m) {
          if ("endpointName" in m) {
            var g = m.endpointName, b = r(m, ["endpointName"]);
            return t({ api: s.buildPathWithGuestSpaceId({ endpointName: g }) }, b);
          }
          return m;
        }), p = this.buildPathWithGuestSpaceId({
          endpointName: "bulkRequest"
        });
        return this.client.post(p, { requests: f });
      }, l;
    }(n.BaseClient)
  );
  return Kt.BulkRequestClient = i, Kt;
}
var Rt = {}, Qa;
function Np() {
  if (Qa) return Rt;
  Qa = 1;
  var e = Rt.__extends || /* @__PURE__ */ function() {
    var c = function(s, u) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, p) {
        f.__proto__ = p;
      } || function(f, p) {
        for (var m in p) Object.prototype.hasOwnProperty.call(p, m) && (f[m] = p[m]);
      }, c(s, u);
    };
    return function(s, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      c(s, u);
      function f() {
        this.constructor = s;
      }
      s.prototype = u === null ? Object.create(u) : (f.prototype = u.prototype, new f());
    };
  }(), t = Rt.__assign || function() {
    return t = Object.assign || function(c) {
      for (var s, u = 1, f = arguments.length; u < f; u++) {
        s = arguments[u];
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (c[p] = s[p]);
      }
      return c;
    }, t.apply(this, arguments);
  }, r = Rt.__awaiter || function(c, s, u, f) {
    function p(m) {
      return m instanceof u ? m : new u(function(g) {
        g(m);
      });
    }
    return new (u || (u = Promise))(function(m, g) {
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
    var u = { label: 0, sent: function() {
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
      for (; g && (g = 0, a[0] && (u = 0)), u; ) try {
        if (f = 1, p && (m = a[0] & 2 ? p.return : a[0] ? p.throw || ((m = p.return) && m.call(p), 0) : p.next) && !(m = m.call(p, a[1])).done) return m;
        switch (p = 0, m && (a = [a[0] & 2, m.value]), a[0]) {
          case 0:
          case 1:
            m = a;
            break;
          case 4:
            return u.label++, { value: a[1], done: !1 };
          case 5:
            u.label++, p = a[1], a = [0];
            continue;
          case 7:
            a = u.ops.pop(), u.trys.pop();
            continue;
          default:
            if (m = u.trys, !(m = m.length > 0 && m[m.length - 1]) && (a[0] === 6 || a[0] === 2)) {
              u = 0;
              continue;
            }
            if (a[0] === 3 && (!m || a[1] > m[0] && a[1] < m[3])) {
              u.label = a[1];
              break;
            }
            if (a[0] === 6 && u.label < m[1]) {
              u.label = m[1], m = a;
              break;
            }
            if (m && u.label < m[2]) {
              u.label = m[2], u.ops.push(a);
              break;
            }
            m[2] && u.ops.pop(), u.trys.pop();
            continue;
        }
        a = s.call(c, u);
      } catch (w) {
        a = [6, w], p = 0;
      } finally {
        f = m = 0;
      }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  }, i = Rt.__rest || function(c, s) {
    var u = {};
    for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && s.indexOf(f) < 0 && (u[f] = c[f]);
    if (c != null && typeof Object.getOwnPropertySymbols == "function")
      for (var p = 0, f = Object.getOwnPropertySymbols(c); p < f.length; p++)
        s.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(c, f[p]) && (u[f[p]] = c[f[p]]);
    return u;
  };
  Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.AppClient = void 0;
  var o = jn(), l = (
    /** @class */
    function(c) {
      e(s, c);
      function s() {
        return c !== null && c.apply(this, arguments) || this;
      }
      return s.prototype.getFormFields = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.addFormFields = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.post(f, u);
      }, s.prototype.updateFormFields = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.deleteFormFields = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/fields",
          preview: !0
        });
        return this.client.delete(f, u);
      }, s.prototype.getFormLayout = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateFormLayout = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/form/layout",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getViews = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateViews = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/views",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getApp = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app"
        });
        return this.client.get(f, u);
      }, s.prototype.getApps = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "apps"
        });
        return this.client.get(f, u);
      }, s.prototype.addApp = function(u) {
        return r(this, void 0, void 0, function() {
          var f, p, m, g, b;
          return n(this, function(d) {
            switch (d.label) {
              case 0:
                return f = u.name, p = u.space, m = this.buildPathWithGuestSpaceId({
                  endpointName: "app",
                  preview: !0
                }), p ? (g = this.buildPathWithGuestSpaceId({
                  endpointName: "space"
                }), [4, this.client.get(g, {
                  id: p
                })]) : [3, 2];
              case 1:
                return b = d.sent().defaultThread, [2, this.client.post(m, t(t({}, u), { thread: b }))];
              case 2:
                return [2, this.client.post(m, { name: f })];
            }
          });
        });
      }, s.prototype.getAppSettings = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateAppSettings = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/settings",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getProcessManagement = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateProcessManagement = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/status",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getDeployStatus = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.get(f, u);
      }, s.prototype.deployApp = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/deploy",
          preview: !0
        });
        return this.client.post(f, u);
      }, s.prototype.getFieldAcl = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateFieldAcl = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "field/acl",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getAppAcl = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateAppAcl = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/acl",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.evaluateRecordsAcl = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "records/acl/evaluate"
        });
        return this.client.get(f, u);
      }, s.prototype.getRecordAcl = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateRecordAcl = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "record/acl",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getAppCustomize = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateAppCustomize = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/customize",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getGeneralNotifications = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: f
        });
        return this.client.get(m, t({}, p));
      }, s.prototype.updateGeneralNotifications = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/general",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getPerRecordNotifications = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updatePerRecordNotifications = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/perRecord",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getReminderNotifications = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateReminderNotifications = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/notifications/reminder",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getReports = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateReports = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/reports",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getAppActions = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateAppActions = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/actions",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.getAdminNotes = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.updateAdminNotes = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/adminNotes",
          preview: !0
        });
        return this.client.put(f, u);
      }, s.prototype.move = function(u) {
        var f = this.buildPath({
          endpointName: "app/move"
        });
        return this.client.post(f, u);
      }, s.prototype.getPlugins = function(u) {
        var f = u.preview, p = i(u, ["preview"]), m = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: f
        });
        return this.client.get(m, p);
      }, s.prototype.addPlugins = function(u) {
        var f = this.buildPathWithGuestSpaceId({
          endpointName: "app/plugins",
          preview: !0
        });
        return this.client.post(f, u);
      }, s;
    }(o.BaseClient)
  );
  return Rt.AppClient = l, Rt;
}
var gt = {}, Kn = {}, En = {}, Za;
function jp() {
  if (Za) return En;
  Za = 1;
  var e = En.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, l) {
        o.__proto__ = l;
      } || function(o, l) {
        for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (o[c] = l[c]);
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
  Object.defineProperty(En, "__esModule", { value: !0 }), En.KintoneAbortSearchError = void 0;
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
  return En.KintoneAbortSearchError = t, En;
}
var On = {}, es;
function Mp() {
  if (es) return On;
  es = 1;
  var e = On.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, l) {
        o.__proto__ = l;
      } || function(o, l) {
        for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (o[c] = l[c]);
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
  Object.defineProperty(On, "__esModule", { value: !0 }), On.KintoneAllRecordsError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i, o, l, c, s) {
        var u = this, f = l - o.length, p = n.extractErrorIndex(f, c, s), m = n.buildErrorMessage(f, l, p);
        return u = r.call(this, m) || this, u.name = "KintoneAllRecordsError", u.processedRecordsResult = i, u.unprocessedRecords = o, u.error = c, u.errorIndex = p, u.message = m, u.numOfProcessedRecords = f, u.numOfAllRecords = l, Object.setPrototypeOf(u, n.prototype), u;
      }
      return n.parseErrorIndex = function(i) {
        var o = [];
        return Object.keys(i).forEach(function(l) {
          var c = l.match(/records\[(\d+)\]/);
          c && o.push(Number(c[1]));
        }), o.length > 0 ? Math.min.apply(Math, o) : null;
      }, n.extractErrorIndex = function(i, o, l) {
        if (o.bulkRequestIndex !== void 0 && o.errors) {
          var c = n.parseErrorIndex(o.errors);
          if (c !== null)
            return i + o.bulkRequestIndex * l + c;
        }
      }, n.buildErrorMessage = function(i, o, l) {
        var c = "";
        return l !== void 0 && (c = "An error occurred at records[".concat(l, "]. ")), c += "".concat(i, "/").concat(o, " records are processed successfully"), c;
      }, n;
    }(Error)
  );
  return On.KintoneAllRecordsError = t, On;
}
var Rn = {}, ts;
function qp() {
  if (ts) return Rn;
  ts = 1;
  var e = Rn.__extends || /* @__PURE__ */ function() {
    var r = function(n, i) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, l) {
        o.__proto__ = l;
      } || function(o, l) {
        for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (o[c] = l[c]);
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
  Object.defineProperty(Rn, "__esModule", { value: !0 }), Rn.KintoneRestAPIError = void 0;
  var t = (
    /** @class */
    function(r) {
      e(n, r);
      function n(i) {
        var o = this, l = n.buildErrorResponseDateWithIndex(i), c = l.data, s = l.bulkRequestIndex;
        return o = r.call(this, c.message) || this, o.name = "KintoneRestAPIError", o.id = c.id, o.code = c.code, o.errors = c.errors, o.status = i.status, o.bulkRequestIndex = s, o.headers = i.headers, o.message = "[".concat(i.status, "] [").concat(o.code, "] ").concat(o.message, " (").concat(o.id, ")"), Error.captureStackTrace && Error.captureStackTrace(o, n), Object.setPrototypeOf(o, n.prototype), o;
      }
      return n.findErrorResponseDataWithIndex = function(i) {
        for (var o = 0; o < i.length; o++)
          if (Object.keys(i[o]).length !== 0) {
            var l = i[o];
            return { data: l, bulkRequestIndex: o };
          }
        throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
      }, n.buildErrorResponseDateWithIndex = function(i) {
        return "results" in i.data ? n.findErrorResponseDataWithIndex(i.data.results) : { data: i.data };
      }, n;
    }(Error)
  );
  return Rn.KintoneRestAPIError = t, Rn;
}
var ns;
function Ho() {
  return ns || (ns = 1, function(e) {
    var t = Kn.__createBinding || (Object.create ? function(n, i, o, l) {
      l === void 0 && (l = o);
      var c = Object.getOwnPropertyDescriptor(i, o);
      (!c || ("get" in c ? !i.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
        return i[o];
      } }), Object.defineProperty(n, l, c);
    } : function(n, i, o, l) {
      l === void 0 && (l = o), n[l] = i[o];
    }), r = Kn.__exportStar || function(n, i) {
      for (var o in n) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, n, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), r(jp(), e), r(Mp(), e), r(qp(), e);
  }(Kn)), Kn;
}
var rs;
function Bp() {
  if (rs) return gt;
  rs = 1;
  var e = gt.__extends || /* @__PURE__ */ function() {
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
  }(), t = gt.__assign || function() {
    return t = Object.assign || function(g) {
      for (var b, d = 1, a = arguments.length; d < a; d++) {
        b = arguments[d];
        for (var w in b) Object.prototype.hasOwnProperty.call(b, w) && (g[w] = b[w]);
      }
      return g;
    }, t.apply(this, arguments);
  }, r = gt.__awaiter || function(g, b, d, a) {
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
  }, n = gt.__generator || function(g, b) {
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
  }, i = gt.__rest || function(g, b) {
    var d = {};
    for (var a in g) Object.prototype.hasOwnProperty.call(g, a) && b.indexOf(a) < 0 && (d[a] = g[a]);
    if (g != null && typeof Object.getOwnPropertySymbols == "function")
      for (var w = 0, a = Object.getOwnPropertySymbols(g); w < a.length; w++)
        b.indexOf(a[w]) < 0 && Object.prototype.propertyIsEnumerable.call(g, a[w]) && (d[a[w]] = g[a[w]]);
    return d;
  }, o = gt.__spreadArray || function(g, b, d) {
    if (d || arguments.length === 2) for (var a = 0, w = b.length, v; a < w; a++)
      (v || !(a in b)) && (v || (v = Array.prototype.slice.call(b, 0, a)), v[a] = b[a]);
    return g.concat(v || Array.prototype.slice.call(b));
  };
  Object.defineProperty(gt, "__esModule", { value: !0 }), gt.RecordClient = void 0;
  var l = Ho(), c = jn(), s = 100, u = 100, f = 100, p = 500, m = (
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
                throw A = I.sent(), new l.KintoneAllRecordsError({ records: w }, E, a, A, s);
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
                if (v = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * u, _ = d.app, E = d.upsert, P = d.records, R = P.slice(0, v), R.length === 0)
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
                throw I = q.sent(), new l.KintoneAllRecordsError({ records: w }, P, a, I, u);
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
                return a = this.separateArrayRecursive(u, [], d.records), w = a.map(function(E) {
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
                throw P = R.sent(), new l.KintoneAllRecordsError({}, _, a, P, f);
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
  return gt.RecordClient = m, gt;
}
var An = {}, is;
function Fp() {
  if (is) return An;
  is = 1;
  var e = An.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, c) {
        l.__proto__ = c;
      } || function(l, c) {
        for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && (l[s] = c[s]);
      }, n(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(i, o);
      function l() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (l.prototype = o.prototype, new l());
    };
  }();
  Object.defineProperty(An, "__esModule", { value: !0 }), An.SpaceClient = void 0;
  var t = jn(), r = (
    /** @class */
    function(n) {
      e(i, n);
      function i() {
        return n !== null && n.apply(this, arguments) || this;
      }
      return i.prototype.getSpace = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.get(l, o);
      }, i.prototype.updateSpace = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.put(l, o);
      }, i.prototype.deleteSpace = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space"
        });
        return this.client.delete(l, o);
      }, i.prototype.updateSpaceBody = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space/body"
        });
        return this.client.put(l, o);
      }, i.prototype.getSpaceMembers = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.get(l, o);
      }, i.prototype.updateSpaceMembers = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space/members"
        });
        return this.client.put(l, o);
      }, i.prototype.addThread = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.post(l, o);
      }, i.prototype.updateThread = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread"
        });
        return this.client.put(l, o);
      }, i.prototype.addThreadComment = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space/thread/comment"
        });
        return this.client.post(l, o);
      }, i.prototype.addGuests = function(o) {
        var l = this.buildPath({
          endpointName: "guests"
        });
        return this.client.post(l, o);
      }, i.prototype.deleteGuests = function(o) {
        var l = this.buildPath({
          endpointName: "guests"
        });
        return this.client.delete(l, o);
      }, i.prototype.updateSpaceGuests = function(o) {
        var l = this.buildPathWithGuestSpaceId({
          endpointName: "space/guests"
        });
        return this.client.put(l, o);
      }, i.prototype.addSpaceFromTemplate = function(o) {
        var l = this.buildPath({
          endpointName: "template/space"
        });
        return this.client.post(l, o);
      }, i;
    }(t.BaseClient)
  );
  return An.SpaceClient = r, An;
}
var It = {}, Di, os;
function ql() {
  return os || (os = 1, Di = typeof self == "object" ? self.FormData : window.FormData), Di;
}
var as;
function Lp() {
  if (as) return It;
  as = 1;
  var e = It.__extends || /* @__PURE__ */ function() {
    var u = function(f, p) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var b in g) Object.prototype.hasOwnProperty.call(g, b) && (m[b] = g[b]);
      }, u(f, p);
    };
    return function(f, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      u(f, p);
      function m() {
        this.constructor = f;
      }
      f.prototype = p === null ? Object.create(p) : (m.prototype = p.prototype, new m());
    };
  }(), t = It.__awaiter || function(u, f, p, m) {
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
      v((m = m.apply(u, f || [])).next());
    });
  }, r = It.__generator || function(u, f) {
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
        v = f.call(u, p);
      } catch (_) {
        v = [6, _], g = 0;
      } finally {
        m = b = 0;
      }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  }, n = It.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(It, "__esModule", { value: !0 }), It.FileClient = void 0;
  var i = n(ql()), o = ri(), l = Wo(), c = jn(), s = (
    /** @class */
    function(u) {
      e(f, u);
      function f() {
        return u !== null && u.apply(this, arguments) || this;
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
                throw a = P.sent(), a instanceof l.UnsupportedPlatformError ? new Error("uploadFile doesn't allow to accept a file path in ".concat(a.platform, " environment.")) : a;
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
var Pn = {}, ss;
function Up() {
  if (ss) return Pn;
  ss = 1;
  var e = Pn.__extends || /* @__PURE__ */ function() {
    var n = function(i, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, c) {
        l.__proto__ = c;
      } || function(l, c) {
        for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && (l[s] = c[s]);
      }, n(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(i, o);
      function l() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (l.prototype = o.prototype, new l());
    };
  }();
  Object.defineProperty(Pn, "__esModule", { value: !0 }), Pn.PluginClient = void 0;
  var t = jn(), r = (
    /** @class */
    function(n) {
      e(i, n);
      function i() {
        return n !== null && n.apply(this, arguments) || this;
      }
      return i.prototype.getPlugins = function(o) {
        var l = this.buildPath({ endpointName: "plugins" });
        return this.client.get(l, o);
      }, i.prototype.getRequiredPlugins = function(o) {
        var l = this.buildPath({ endpointName: "plugins/required" });
        return this.client.get(l, o);
      }, i.prototype.getApps = function(o) {
        var l = this.buildPath({ endpointName: "plugin/apps" });
        return this.client.get(l, o);
      }, i.prototype.updatePlugin = function(o) {
        var l = this.buildPath({ endpointName: "plugin" });
        return this.client.put(l, o);
      }, i.prototype.installPlugin = function(o) {
        var l = this.buildPath({ endpointName: "plugin" });
        return this.client.post(l, o);
      }, i.prototype.uninstallPlugin = function(o) {
        var l = this.buildPath({ endpointName: "plugin" });
        return this.client.delete(l, o);
      }, i;
    }(t.BaseClient)
  );
  return Pn.PluginClient = r, Pn;
}
var Ii = {}, $t = {}, $i, ls;
function Vp() {
  if (ls) return $i;
  ls = 1;
  function e(h, y) {
    return function() {
      return h.apply(y, arguments);
    };
  }
  const { toString: t } = Object.prototype, { getPrototypeOf: r } = Object, n = /* @__PURE__ */ ((h) => (y) => {
    const S = t.call(y);
    return h[S] || (h[S] = S.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), i = (h) => (h = h.toLowerCase(), (y) => n(y) === h), o = (h) => (y) => typeof y === h, { isArray: l } = Array, c = o("undefined");
  function s(h) {
    return h !== null && !c(h) && h.constructor !== null && !c(h.constructor) && m(h.constructor.isBuffer) && h.constructor.isBuffer(h);
  }
  const u = i("ArrayBuffer");
  function f(h) {
    let y;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? y = ArrayBuffer.isView(h) : y = h && h.buffer && u(h.buffer), y;
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
  }, A = i("URLSearchParams"), [I, q, M, B] = ["ReadableStream", "Request", "Response", "Headers"].map(i), W = (h) => h.trim ? h.trim() : h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function ae(h, y, { allOwnKeys: S = !1 } = {}) {
    if (h === null || typeof h > "u")
      return;
    let x, O;
    if (typeof h != "object" && (h = [h]), l(h))
      for (x = 0, O = h.length; x < O; x++)
        y.call(null, h[x], x, h);
    else {
      const k = S ? Object.getOwnPropertyNames(h) : Object.keys(h), C = k.length;
      let L;
      for (x = 0; x < C; x++)
        L = k[x], y.call(null, h[L], L, h);
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
  const F = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ir, U = (h) => !c(h) && h !== F;
  function z() {
    const { caseless: h } = U(this) && this || {}, y = {}, S = (x, O) => {
      const k = h && V(y, O) || O;
      a(y[k]) && a(x) ? y[k] = z(y[k], x) : a(x) ? y[k] = z({}, x) : l(x) ? y[k] = x.slice() : y[k] = x;
    };
    for (let x = 0, O = arguments.length; x < O; x++)
      arguments[x] && ae(arguments[x], S);
    return y;
  }
  const j = (h, y, S, { allOwnKeys: x } = {}) => (ae(y, (O, k) => {
    S && m(O) ? h[k] = e(O, S) : h[k] = O;
  }, { allOwnKeys: x }), h), Z = (h) => (h.charCodeAt(0) === 65279 && (h = h.slice(1)), h), te = (h, y, S, x) => {
    h.prototype = Object.create(y.prototype, x), h.prototype.constructor = h, Object.defineProperty(h, "super", {
      value: y.prototype
    }), S && Object.assign(h.prototype, S);
  }, fe = (h, y, S, x) => {
    let O, k, C;
    const L = {};
    if (y = y || {}, h == null) return y;
    do {
      for (O = Object.getOwnPropertyNames(h), k = O.length; k-- > 0; )
        C = O[k], (!x || x(C, h, y)) && !L[C] && (y[C] = h[C], L[C] = !0);
      h = S !== !1 && r(h);
    } while (h && (!S || S(h, y)) && h !== Object.prototype);
    return y;
  }, me = (h, y, S) => {
    h = String(h), (S === void 0 || S > h.length) && (S = h.length), S -= y.length;
    const x = h.indexOf(y, S);
    return x !== -1 && x === S;
  }, xe = (h) => {
    if (!h) return null;
    if (l(h)) return h;
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
      const k = O.value;
      y.call(h, k[0], k[1]);
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
  ), ge = (({ hasOwnProperty: h }) => (y, S) => h.call(y, S))(Object.prototype), ee = i("RegExp"), ye = (h, y) => {
    const S = Object.getOwnPropertyDescriptors(h), x = {};
    ae(S, (O, k) => {
      let C;
      (C = y(O, k, h)) !== !1 && (x[k] = C || O);
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
      O.forEach((k) => {
        S[k] = !0;
      });
    };
    return l(h) ? x(h) : x(String(h).split(y)), S;
  }, Ke = () => {
  }, it = (h, y) => h != null && Number.isFinite(h = +h) ? h : y, qe = "abcdefghijklmnopqrstuvwxyz", Xe = "0123456789", nt = {
    DIGIT: Xe,
    ALPHA: qe,
    ALPHA_DIGIT: qe + qe.toUpperCase() + Xe
  }, Lt = (h = 16, y = nt.ALPHA_DIGIT) => {
    let S = "";
    const { length: x } = y;
    for (; h--; )
      S += y[Math.random() * x | 0];
    return S;
  };
  function wt(h) {
    return !!(h && m(h.append) && h[Symbol.toStringTag] === "FormData" && h[Symbol.iterator]);
  }
  const lt = (h) => {
    const y = new Array(10), S = (x, O) => {
      if (b(x)) {
        if (y.indexOf(x) >= 0)
          return;
        if (!("toJSON" in x)) {
          y[O] = x;
          const k = l(x) ? [] : {};
          return ae(x, (C, L) => {
            const ne = S(C, O + 1);
            !c(ne) && (k[L] = ne);
          }), y[O] = void 0, k;
        }
      }
      return x;
    };
    return S(h, 0);
  }, Ut = i("AsyncFunction"), Vt = (h) => h && (b(h) || m(h)) && m(h.then) && m(h.catch), Ct = ((h, y) => h ? setImmediate : y ? ((S, x) => (F.addEventListener("message", ({ source: O, data: k }) => {
    O === F && k === S && x.length && x.shift()();
  }, !1), (O) => {
    x.push(O), F.postMessage(S, "*");
  }))(`axios@${Math.random()}`, []) : (S) => setTimeout(S))(
    typeof setImmediate == "function",
    m(F.postMessage)
  ), ai = typeof queueMicrotask < "u" ? queueMicrotask.bind(F) : typeof process < "u" && process.nextTick || Ct;
  var $ = {
    isArray: l,
    isArrayBuffer: u,
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
    isHeaders: B,
    isUndefined: c,
    isDate: w,
    isFile: v,
    isBlob: _,
    isRegExp: ee,
    isFunction: m,
    isStream: P,
    isURLSearchParams: A,
    isTypedArray: Se,
    isFileList: E,
    forEach: ae,
    merge: z,
    extend: j,
    trim: W,
    stripBOM: Z,
    inherits: te,
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
    noop: Ke,
    toFiniteNumber: it,
    findKey: V,
    global: F,
    isContextDefined: U,
    ALPHABET: nt,
    generateString: Lt,
    isSpecCompliantForm: wt,
    toJSONObject: lt,
    isAsyncFn: Ut,
    isThenable: Vt,
    setImmediate: Ct,
    asap: ai
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
  const lr = ue.prototype, Wt = {};
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
  }), Object.defineProperties(ue, Wt), Object.defineProperty(lr, "isAxiosError", { value: !0 }), ue.from = (h, y, S, x, O, k) => {
    const C = Object.create(lr);
    return $.toFlatObject(h, C, function(ne) {
      return ne !== Error.prototype;
    }, (L) => L !== "isAxiosError"), ue.call(C, h.message, y, S, x, O), C.cause = h, C.name = h.name, k && Object.assign(C, k), C;
  };
  var qn = null;
  function cn(h) {
    return $.isPlainObject(h) || $.isArray(h);
  }
  function ur(h) {
    return $.endsWith(h, "[]") ? h.slice(0, -2) : h;
  }
  function cr(h, y, S) {
    return h ? h.concat(y).map(function(O, k) {
      return O = ur(O), !S && k ? "[" + O + "]" : O;
    }).join(S ? "." : "") : y;
  }
  function Bn(h) {
    return $.isArray(h) && !h.some(cn);
  }
  const fn = $.toFlatObject($, {}, null, function(y) {
    return /^is[A-Z]/.test(y);
  });
  function T(h, y, S) {
    if (!$.isObject(h))
      throw new TypeError("target must be an object");
    y = y || new FormData(), S = $.toFlatObject(S, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(pe, oe) {
      return !$.isUndefined(oe[pe]);
    });
    const x = S.metaTokens, O = S.visitor || Y, k = S.dots, C = S.indexes, ne = (S.Blob || typeof Blob < "u" && Blob) && $.isSpecCompliantForm(y);
    if (!$.isFunction(O))
      throw new TypeError("visitor must be a function");
    function K(ie) {
      if (ie === null) return "";
      if ($.isDate(ie))
        return ie.toISOString();
      if (!ne && $.isBlob(ie))
        throw new ue("Blob is not supported. Use a Buffer instead.");
      return $.isArrayBuffer(ie) || $.isTypedArray(ie) ? ne && typeof Blob == "function" ? new Blob([ie]) : Buffer.from(ie) : ie;
    }
    function Y(ie, pe, oe) {
      let Me = ie;
      if (ie && !oe && typeof ie == "object") {
        if ($.endsWith(pe, "{}"))
          pe = x ? pe : pe.slice(0, -2), ie = JSON.stringify(ie);
        else if ($.isArray(ie) && Bn(ie) || ($.isFileList(ie) || $.endsWith(pe, "[]")) && (Me = $.toArray(ie)))
          return pe = ur(pe), Me.forEach(function(ze, Dt) {
            !($.isUndefined(ze) || ze === null) && y.append(
              // eslint-disable-next-line no-nested-ternary
              C === !0 ? cr([pe], Dt, k) : C === null ? pe : pe + "[]",
              K(ze)
            );
          }), !1;
      }
      return cn(ie) ? !0 : (y.append(cr(oe, pe, k), K(ie)), !1);
    }
    const re = [], Te = Object.assign(fn, {
      defaultVisitor: Y,
      convertValue: K,
      isVisitable: cn
    });
    function We(ie, pe) {
      if (!$.isUndefined(ie)) {
        if (re.indexOf(ie) !== -1)
          throw Error("Circular reference detected in " + pe.join("."));
        re.push(ie), $.forEach(ie, function(Me, He) {
          (!($.isUndefined(Me) || Me === null) && O.call(
            y,
            Me,
            $.isString(He) ? He.trim() : He,
            pe,
            Te
          )) === !0 && We(Me, pe ? pe.concat(He) : [He]);
        }), re.pop();
      }
    }
    if (!$.isObject(h))
      throw new TypeError("data must be an object");
    return We(h), y;
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
    let k;
    if (O ? k = O(y, S) : k = $.isURLSearchParams(y) ? y.toString() : new we(y, S).toString(x), k) {
      const C = h.indexOf("#");
      C !== -1 && (h = h.slice(0, C)), h += (h.indexOf("?") === -1 ? "?" : "&") + k;
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
  }, xt = typeof URLSearchParams < "u" ? URLSearchParams : we, Fn = typeof FormData < "u" ? FormData : null, Ht = typeof Blob < "u" ? Blob : null, ut = {
    isBrowser: !0,
    classes: {
      URLSearchParams: xt,
      FormData: Fn,
      Blob: Ht
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const dn = typeof window < "u" && typeof document < "u", pn = typeof navigator == "object" && navigator || void 0, fr = dn && (!pn || ["ReactNative", "NativeScript", "NS"].indexOf(pn.product) < 0), Qt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ln = dn && window.location.href || "http://localhost";
  var hn = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    hasBrowserEnv: dn,
    hasStandardBrowserWebWorkerEnv: Qt,
    hasStandardBrowserEnv: fr,
    navigator: pn,
    origin: Ln
  }), Be = {
    ...hn,
    ...ut
  };
  function Un(h, y) {
    return T(h, new Be.classes.URLSearchParams(), Object.assign({
      visitor: function(S, x, O, k) {
        return Be.isNode && $.isBuffer(S) ? (this.append(x, S.toString("base64")), !1) : k.defaultVisitor.apply(this, arguments);
      }
    }, y));
  }
  function dr(h) {
    return $.matchAll(/\w+|\[(\w*)]/g, h).map((y) => y[0] === "[]" ? "" : y[1] || y[0]);
  }
  function pr(h) {
    const y = {}, S = Object.keys(h);
    let x;
    const O = S.length;
    let k;
    for (x = 0; x < O; x++)
      k = S[x], y[k] = h[k];
    return y;
  }
  function mn(h) {
    function y(S, x, O, k) {
      let C = S[k++];
      if (C === "__proto__") return !0;
      const L = Number.isFinite(+C), ne = k >= S.length;
      return C = !C && $.isArray(O) ? O.length : C, ne ? ($.hasOwnProp(O, C) ? O[C] = [O[C], x] : O[C] = x, !L) : ((!O[C] || !$.isObject(O[C])) && (O[C] = []), y(S, x, O[C], k) && $.isArray(O[C]) && (O[C] = pr(O[C])), !L);
    }
    if ($.isFormData(h) && $.isFunction(h.entries)) {
      const S = {};
      return $.forEachEntry(h, (x, O) => {
        y(dr(x), O, S, 0);
      }), S;
    }
    return null;
  }
  function hr(h, y, S) {
    if ($.isString(h))
      try {
        return (y || JSON.parse)(h), $.trim(h);
      } catch (x) {
        if (x.name !== "SyntaxError")
          throw x;
      }
    return (0, JSON.stringify)(h);
  }
  const Zt = {
    transitional: Ze,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(y, S) {
      const x = S.getContentType() || "", O = x.indexOf("application/json") > -1, k = $.isObject(y);
      if (k && $.isHTMLForm(y) && (y = new FormData(y)), $.isFormData(y))
        return O ? JSON.stringify(mn(y)) : y;
      if ($.isArrayBuffer(y) || $.isBuffer(y) || $.isStream(y) || $.isFile(y) || $.isBlob(y) || $.isReadableStream(y))
        return y;
      if ($.isArrayBufferView(y))
        return y.buffer;
      if ($.isURLSearchParams(y))
        return S.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), y.toString();
      let L;
      if (k) {
        if (x.indexOf("application/x-www-form-urlencoded") > -1)
          return Un(y, this.formSerializer).toString();
        if ((L = $.isFileList(y)) || x.indexOf("multipart/form-data") > -1) {
          const ne = this.env && this.env.FormData;
          return T(
            L ? { "files[]": y } : y,
            ne && new ne(),
            this.formSerializer
          );
        }
      }
      return k || O ? (S.setContentType("application/json", !1), hr(y)) : y;
    }],
    transformResponse: [function(y) {
      const S = this.transitional || Zt.transitional, x = S && S.forcedJSONParsing, O = this.responseType === "json";
      if ($.isResponse(y) || $.isReadableStream(y))
        return y;
      if (y && $.isString(y) && (x && !this.responseType || O)) {
        const C = !(S && S.silentJSONParsing) && O;
        try {
          return JSON.parse(y);
        } catch (L) {
          if (C)
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
      FormData: Be.classes.FormData,
      Blob: Be.classes.Blob
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
    Zt.headers[h] = {};
  });
  var yn = Zt;
  const si = $.toObjectSet([
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
`).forEach(function(C) {
      O = C.indexOf(":"), S = C.substring(0, O).trim().toLowerCase(), x = C.substring(O + 1).trim(), !(!S || y[S] && si[S]) && (S === "set-cookie" ? y[S] ? y[S].push(x) : y[S] = [x] : y[S] = y[S] ? y[S] + ", " + x : x);
    }), y;
  };
  const Tt = Symbol("internals");
  function Et(h) {
    return h && String(h).trim().toLowerCase();
  }
  function vn(h) {
    return h === !1 || h == null ? h : $.isArray(h) ? h.map(vn) : String(h);
  }
  function mr(h) {
    const y = /* @__PURE__ */ Object.create(null), S = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let x;
    for (; x = S.exec(h); )
      y[x[1]] = x[2];
    return y;
  }
  const zl = (h) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(h.trim());
  function li(h, y, S, x, O) {
    if ($.isFunction(x))
      return x.call(this, y, S);
    if (O && (y = S), !!$.isString(y)) {
      if ($.isString(x))
        return y.indexOf(x) !== -1;
      if ($.isRegExp(x))
        return x.test(y);
    }
  }
  function Yl(h) {
    return h.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (y, S, x) => S.toUpperCase() + x);
  }
  function Xl(h, y) {
    const S = $.toCamelCase(" " + y);
    ["get", "set", "has"].forEach((x) => {
      Object.defineProperty(h, x + S, {
        value: function(O, k, C) {
          return this[x].call(this, y, O, k, C);
        },
        configurable: !0
      });
    });
  }
  class yr {
    constructor(y) {
      y && this.set(y);
    }
    set(y, S, x) {
      const O = this;
      function k(L, ne, K) {
        const Y = Et(ne);
        if (!Y)
          throw new Error("header name must be a non-empty string");
        const re = $.findKey(O, Y);
        (!re || O[re] === void 0 || K === !0 || K === void 0 && O[re] !== !1) && (O[re || ne] = vn(L));
      }
      const C = (L, ne) => $.forEach(L, (K, Y) => k(K, Y, ne));
      if ($.isPlainObject(y) || y instanceof this.constructor)
        C(y, S);
      else if ($.isString(y) && (y = y.trim()) && !zl(y))
        C(Vn(y), S);
      else if ($.isHeaders(y))
        for (const [L, ne] of y.entries())
          k(ne, L, x);
      else
        y != null && k(S, y, x);
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
            return mr(O);
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
        return !!(x && this[x] !== void 0 && (!S || li(this, this[x], x, S)));
      }
      return !1;
    }
    delete(y, S) {
      const x = this;
      let O = !1;
      function k(C) {
        if (C = Et(C), C) {
          const L = $.findKey(x, C);
          L && (!S || li(x, x[L], L, S)) && (delete x[L], O = !0);
        }
      }
      return $.isArray(y) ? y.forEach(k) : k(y), O;
    }
    clear(y) {
      const S = Object.keys(this);
      let x = S.length, O = !1;
      for (; x--; ) {
        const k = S[x];
        (!y || li(this, this[k], k, y, !0)) && (delete this[k], O = !0);
      }
      return O;
    }
    normalize(y) {
      const S = this, x = {};
      return $.forEach(this, (O, k) => {
        const C = $.findKey(x, k);
        if (C) {
          S[C] = vn(O), delete S[k];
          return;
        }
        const L = y ? Yl(k) : String(k).trim();
        L !== k && delete S[k], S[L] = vn(O), x[L] = !0;
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
      function k(C) {
        const L = Et(C);
        x[L] || (Xl(O, C), x[L] = !0);
      }
      return $.isArray(y) ? y.forEach(k) : k(y), this;
    }
  }
  yr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), $.reduceDescriptors(yr.prototype, ({ value: h }, y) => {
    let S = y[0].toUpperCase() + y.slice(1);
    return {
      get: () => h,
      set(x) {
        this[S] = x;
      }
    };
  }), $.freezeMethods(yr);
  var yt = yr;
  function ui(h, y) {
    const S = this || yn, x = y || S, O = yt.from(x.headers);
    let k = x.data;
    return $.forEach(h, function(L) {
      k = L.call(S, k, O.normalize(), y ? y.status : void 0);
    }), O.normalize(), k;
  }
  function Yo(h) {
    return !!(h && h.__CANCEL__);
  }
  function gn(h, y, S) {
    ue.call(this, h ?? "canceled", ue.ERR_CANCELED, y, S), this.name = "CanceledError";
  }
  $.inherits(gn, ue, {
    __CANCEL__: !0
  });
  function Xo(h, y, S) {
    const x = S.config.validateStatus;
    !S.status || !x || x(S.status) ? h(S) : y(new ue(
      "Request failed with status code " + S.status,
      [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][Math.floor(S.status / 100) - 4],
      S.config,
      S.request,
      S
    ));
  }
  function Jl(h) {
    const y = /^([-+\w]{1,25})(:?\/\/|:)/.exec(h);
    return y && y[1] || "";
  }
  function Ql(h, y) {
    h = h || 10;
    const S = new Array(h), x = new Array(h);
    let O = 0, k = 0, C;
    return y = y !== void 0 ? y : 1e3, function(ne) {
      const K = Date.now(), Y = x[k];
      C || (C = K), S[O] = ne, x[O] = K;
      let re = k, Te = 0;
      for (; re !== O; )
        Te += S[re++], re = re % h;
      if (O = (O + 1) % h, O === k && (k = (k + 1) % h), K - C < y)
        return;
      const We = Y && K - Y;
      return We ? Math.round(Te * 1e3 / We) : void 0;
    };
  }
  function Zl(h, y) {
    let S = 0, x = 1e3 / y, O, k;
    const C = (K, Y = Date.now()) => {
      S = Y, O = null, k && (clearTimeout(k), k = null), h.apply(null, K);
    };
    return [(...K) => {
      const Y = Date.now(), re = Y - S;
      re >= x ? C(K, Y) : (O = K, k || (k = setTimeout(() => {
        k = null, C(O);
      }, x - re)));
    }, () => O && C(O)];
  }
  const vr = (h, y, S = 3) => {
    let x = 0;
    const O = Ql(50, 250);
    return Zl((k) => {
      const C = k.loaded, L = k.lengthComputable ? k.total : void 0, ne = C - x, K = O(ne), Y = C <= L;
      x = C;
      const re = {
        loaded: C,
        total: L,
        progress: L ? C / L : void 0,
        bytes: ne,
        rate: K || void 0,
        estimated: K && L && Y ? (L - C) / K : void 0,
        event: k,
        lengthComputable: L != null,
        [y ? "download" : "upload"]: !0
      };
      h(re);
    }, S);
  }, Jo = (h, y) => {
    const S = h != null;
    return [(x) => y[0]({
      lengthComputable: S,
      total: h,
      loaded: x
    }), y[1]];
  }, Qo = (h) => (...y) => $.asap(() => h(...y));
  var eu = Be.hasStandardBrowserEnv ? /* @__PURE__ */ ((h, y) => (S) => (S = new URL(S, Be.origin), h.protocol === S.protocol && h.host === S.host && (y || h.port === S.port)))(
    new URL(Be.origin),
    Be.navigator && /(msie|trident)/i.test(Be.navigator.userAgent)
  ) : () => !0, tu = Be.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(h, y, S, x, O, k) {
        const C = [h + "=" + encodeURIComponent(y)];
        $.isNumber(S) && C.push("expires=" + new Date(S).toGMTString()), $.isString(x) && C.push("path=" + x), $.isString(O) && C.push("domain=" + O), k === !0 && C.push("secure"), document.cookie = C.join("; ");
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
  function nu(h) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(h);
  }
  function ru(h, y) {
    return y ? h.replace(/\/?\/$/, "") + "/" + y.replace(/^\/+/, "") : h;
  }
  function Zo(h, y) {
    return h && !nu(y) ? ru(h, y) : y;
  }
  const ea = (h) => h instanceof yt ? { ...h } : h;
  function en(h, y) {
    y = y || {};
    const S = {};
    function x(K, Y, re, Te) {
      return $.isPlainObject(K) && $.isPlainObject(Y) ? $.merge.call({ caseless: Te }, K, Y) : $.isPlainObject(Y) ? $.merge({}, Y) : $.isArray(Y) ? Y.slice() : Y;
    }
    function O(K, Y, re, Te) {
      if ($.isUndefined(Y)) {
        if (!$.isUndefined(K))
          return x(void 0, K, re, Te);
      } else return x(K, Y, re, Te);
    }
    function k(K, Y) {
      if (!$.isUndefined(Y))
        return x(void 0, Y);
    }
    function C(K, Y) {
      if ($.isUndefined(Y)) {
        if (!$.isUndefined(K))
          return x(void 0, K);
      } else return x(void 0, Y);
    }
    function L(K, Y, re) {
      if (re in y)
        return x(K, Y);
      if (re in h)
        return x(void 0, K);
    }
    const ne = {
      url: k,
      method: k,
      data: k,
      baseURL: C,
      transformRequest: C,
      transformResponse: C,
      paramsSerializer: C,
      timeout: C,
      timeoutMessage: C,
      withCredentials: C,
      withXSRFToken: C,
      adapter: C,
      responseType: C,
      xsrfCookieName: C,
      xsrfHeaderName: C,
      onUploadProgress: C,
      onDownloadProgress: C,
      decompress: C,
      maxContentLength: C,
      maxBodyLength: C,
      beforeRedirect: C,
      transport: C,
      httpAgent: C,
      httpsAgent: C,
      cancelToken: C,
      socketPath: C,
      responseEncoding: C,
      validateStatus: L,
      headers: (K, Y, re) => O(ea(K), ea(Y), re, !0)
    };
    return $.forEach(Object.keys(Object.assign({}, h, y)), function(Y) {
      const re = ne[Y] || O, Te = re(h[Y], y[Y], Y);
      $.isUndefined(Te) && re !== L || (S[Y] = Te);
    }), S;
  }
  var ta = (h) => {
    const y = en({}, h);
    let { data: S, withXSRFToken: x, xsrfHeaderName: O, xsrfCookieName: k, headers: C, auth: L } = y;
    y.headers = C = yt.from(C), y.url = de(Zo(y.baseURL, y.url), h.params, h.paramsSerializer), L && C.set(
      "Authorization",
      "Basic " + btoa((L.username || "") + ":" + (L.password ? unescape(encodeURIComponent(L.password)) : ""))
    );
    let ne;
    if ($.isFormData(S)) {
      if (Be.hasStandardBrowserEnv || Be.hasStandardBrowserWebWorkerEnv)
        C.setContentType(void 0);
      else if ((ne = C.getContentType()) !== !1) {
        const [K, ...Y] = ne ? ne.split(";").map((re) => re.trim()).filter(Boolean) : [];
        C.setContentType([K || "multipart/form-data", ...Y].join("; "));
      }
    }
    if (Be.hasStandardBrowserEnv && (x && $.isFunction(x) && (x = x(y)), x || x !== !1 && eu(y.url))) {
      const K = O && k && tu.read(k);
      K && C.set(O, K);
    }
    return y;
  }, iu = typeof XMLHttpRequest < "u" && function(h) {
    return new Promise(function(S, x) {
      const O = ta(h);
      let k = O.data;
      const C = yt.from(O.headers).normalize();
      let { responseType: L, onUploadProgress: ne, onDownloadProgress: K } = O, Y, re, Te, We, ie;
      function pe() {
        We && We(), ie && ie(), O.cancelToken && O.cancelToken.unsubscribe(Y), O.signal && O.signal.removeEventListener("abort", Y);
      }
      let oe = new XMLHttpRequest();
      oe.open(O.method.toUpperCase(), O.url, !0), oe.timeout = O.timeout;
      function Me() {
        if (!oe)
          return;
        const ze = yt.from(
          "getAllResponseHeaders" in oe && oe.getAllResponseHeaders()
        ), ot = {
          data: !L || L === "text" || L === "json" ? oe.responseText : oe.response,
          status: oe.status,
          statusText: oe.statusText,
          headers: ze,
          config: h,
          request: oe
        };
        Xo(function(tn) {
          S(tn), pe();
        }, function(tn) {
          x(tn), pe();
        }, ot), oe = null;
      }
      "onloadend" in oe ? oe.onloadend = Me : oe.onreadystatechange = function() {
        !oe || oe.readyState !== 4 || oe.status === 0 && !(oe.responseURL && oe.responseURL.indexOf("file:") === 0) || setTimeout(Me);
      }, oe.onabort = function() {
        oe && (x(new ue("Request aborted", ue.ECONNABORTED, h, oe)), oe = null);
      }, oe.onerror = function() {
        x(new ue("Network Error", ue.ERR_NETWORK, h, oe)), oe = null;
      }, oe.ontimeout = function() {
        let Dt = O.timeout ? "timeout of " + O.timeout + "ms exceeded" : "timeout exceeded";
        const ot = O.transitional || Ze;
        O.timeoutErrorMessage && (Dt = O.timeoutErrorMessage), x(new ue(
          Dt,
          ot.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
          h,
          oe
        )), oe = null;
      }, k === void 0 && C.setContentType(null), "setRequestHeader" in oe && $.forEach(C.toJSON(), function(Dt, ot) {
        oe.setRequestHeader(ot, Dt);
      }), $.isUndefined(O.withCredentials) || (oe.withCredentials = !!O.withCredentials), L && L !== "json" && (oe.responseType = O.responseType), K && ([Te, ie] = vr(K, !0), oe.addEventListener("progress", Te)), ne && oe.upload && ([re, We] = vr(ne), oe.upload.addEventListener("progress", re), oe.upload.addEventListener("loadend", We)), (O.cancelToken || O.signal) && (Y = (ze) => {
        oe && (x(!ze || ze.type ? new gn(null, h, oe) : ze), oe.abort(), oe = null);
      }, O.cancelToken && O.cancelToken.subscribe(Y), O.signal && (O.signal.aborted ? Y() : O.signal.addEventListener("abort", Y)));
      const He = Jl(O.url);
      if (He && Be.protocols.indexOf(He) === -1) {
        x(new ue("Unsupported protocol " + He + ":", ue.ERR_BAD_REQUEST, h));
        return;
      }
      oe.send(k || null);
    });
  }, ou = (h, y) => {
    const { length: S } = h = h ? h.filter(Boolean) : [];
    if (y || S) {
      let x = new AbortController(), O;
      const k = function(K) {
        if (!O) {
          O = !0, L();
          const Y = K instanceof Error ? K : this.reason;
          x.abort(Y instanceof ue ? Y : new gn(Y instanceof Error ? Y.message : Y));
        }
      };
      let C = y && setTimeout(() => {
        C = null, k(new ue(`timeout ${y} of ms exceeded`, ue.ETIMEDOUT));
      }, y);
      const L = () => {
        h && (C && clearTimeout(C), C = null, h.forEach((K) => {
          K.unsubscribe ? K.unsubscribe(k) : K.removeEventListener("abort", k);
        }), h = null);
      };
      h.forEach((K) => K.addEventListener("abort", k));
      const { signal: ne } = x;
      return ne.unsubscribe = () => $.asap(L), ne;
    }
  };
  const au = function* (h, y) {
    let S = h.byteLength;
    if (S < y) {
      yield h;
      return;
    }
    let x = 0, O;
    for (; x < S; )
      O = x + y, yield h.slice(x, O), x = O;
  }, su = async function* (h, y) {
    for await (const S of lu(h))
      yield* au(S, y);
  }, lu = async function* (h) {
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
  }, na = (h, y, S, x) => {
    const O = su(h, y);
    let k = 0, C, L = (ne) => {
      C || (C = !0, x && x(ne));
    };
    return new ReadableStream({
      async pull(ne) {
        try {
          const { done: K, value: Y } = await O.next();
          if (K) {
            L(), ne.close();
            return;
          }
          let re = Y.byteLength;
          if (S) {
            let Te = k += re;
            S(Te);
          }
          ne.enqueue(new Uint8Array(Y));
        } catch (K) {
          throw L(K), K;
        }
      },
      cancel(ne) {
        return L(ne), O.return();
      }
    }, {
      highWaterMark: 2
    });
  }, gr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ra = gr && typeof ReadableStream == "function", uu = gr && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((h) => (y) => h.encode(y))(new TextEncoder()) : async (h) => new Uint8Array(await new Response(h).arrayBuffer())), ia = (h, ...y) => {
    try {
      return !!h(...y);
    } catch {
      return !1;
    }
  }, cu = ra && ia(() => {
    let h = !1;
    const y = new Request(Be.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !y;
  }), oa = 64 * 1024, ci = ra && ia(() => $.isReadableStream(new Response("").body)), br = {
    stream: ci && ((h) => h.body)
  };
  gr && ((h) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((y) => {
      !br[y] && (br[y] = $.isFunction(h[y]) ? (S) => S[y]() : (S, x) => {
        throw new ue(`Response type '${y}' is not supported`, ue.ERR_NOT_SUPPORT, x);
      });
    });
  })(new Response());
  const fu = async (h) => {
    if (h == null)
      return 0;
    if ($.isBlob(h))
      return h.size;
    if ($.isSpecCompliantForm(h))
      return (await new Request(Be.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if ($.isArrayBufferView(h) || $.isArrayBuffer(h))
      return h.byteLength;
    if ($.isURLSearchParams(h) && (h = h + ""), $.isString(h))
      return (await uu(h)).byteLength;
  }, du = async (h, y) => {
    const S = $.toFiniteNumber(h.getContentLength());
    return S ?? fu(y);
  };
  var pu = gr && (async (h) => {
    let {
      url: y,
      method: S,
      data: x,
      signal: O,
      cancelToken: k,
      timeout: C,
      onDownloadProgress: L,
      onUploadProgress: ne,
      responseType: K,
      headers: Y,
      withCredentials: re = "same-origin",
      fetchOptions: Te
    } = ta(h);
    K = K ? (K + "").toLowerCase() : "text";
    let We = ou([O, k && k.toAbortSignal()], C), ie;
    const pe = We && We.unsubscribe && (() => {
      We.unsubscribe();
    });
    let oe;
    try {
      if (ne && cu && S !== "get" && S !== "head" && (oe = await du(Y, x)) !== 0) {
        let ot = new Request(y, {
          method: "POST",
          body: x,
          duplex: "half"
        }), Gt;
        if ($.isFormData(x) && (Gt = ot.headers.get("content-type")) && Y.setContentType(Gt), ot.body) {
          const [tn, Er] = Jo(
            oe,
            vr(Qo(ne))
          );
          x = na(ot.body, oa, tn, Er);
        }
      }
      $.isString(re) || (re = re ? "include" : "omit");
      const Me = "credentials" in Request.prototype;
      ie = new Request(y, {
        ...Te,
        signal: We,
        method: S.toUpperCase(),
        headers: Y.normalize().toJSON(),
        body: x,
        duplex: "half",
        credentials: Me ? re : void 0
      });
      let He = await fetch(ie);
      const ze = ci && (K === "stream" || K === "response");
      if (ci && (L || ze && pe)) {
        const ot = {};
        ["status", "statusText", "headers"].forEach((da) => {
          ot[da] = He[da];
        });
        const Gt = $.toFiniteNumber(He.headers.get("content-length")), [tn, Er] = L && Jo(
          Gt,
          vr(Qo(L), !0)
        ) || [];
        He = new Response(
          na(He.body, oa, tn, () => {
            Er && Er(), pe && pe();
          }),
          ot
        );
      }
      K = K || "text";
      let Dt = await br[$.findKey(br, K) || "text"](He, h);
      return !ze && pe && pe(), await new Promise((ot, Gt) => {
        Xo(ot, Gt, {
          data: Dt,
          headers: yt.from(He.headers),
          status: He.status,
          statusText: He.statusText,
          config: h,
          request: ie
        });
      });
    } catch (Me) {
      throw pe && pe(), Me && Me.name === "TypeError" && /fetch/i.test(Me.message) ? Object.assign(
        new ue("Network Error", ue.ERR_NETWORK, h, ie),
        {
          cause: Me.cause || Me
        }
      ) : ue.from(Me, Me && Me.code, h, ie);
    }
  });
  const fi = {
    http: qn,
    xhr: iu,
    fetch: pu
  };
  $.forEach(fi, (h, y) => {
    if (h) {
      try {
        Object.defineProperty(h, "name", { value: y });
      } catch {
      }
      Object.defineProperty(h, "adapterName", { value: y });
    }
  });
  const aa = (h) => `- ${h}`, hu = (h) => $.isFunction(h) || h === null || h === !1;
  var sa = {
    getAdapter: (h) => {
      h = $.isArray(h) ? h : [h];
      const { length: y } = h;
      let S, x;
      const O = {};
      for (let k = 0; k < y; k++) {
        S = h[k];
        let C;
        if (x = S, !hu(S) && (x = fi[(C = String(S)).toLowerCase()], x === void 0))
          throw new ue(`Unknown adapter '${C}'`);
        if (x)
          break;
        O[C || "#" + k] = x;
      }
      if (!x) {
        const k = Object.entries(O).map(
          ([L, ne]) => `adapter ${L} ` + (ne === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let C = y ? k.length > 1 ? `since :
` + k.map(aa).join(`
`) : " " + aa(k[0]) : "as no adapter specified";
        throw new ue(
          "There is no suitable adapter to dispatch the request " + C,
          "ERR_NOT_SUPPORT"
        );
      }
      return x;
    },
    adapters: fi
  };
  function di(h) {
    if (h.cancelToken && h.cancelToken.throwIfRequested(), h.signal && h.signal.aborted)
      throw new gn(null, h);
  }
  function la(h) {
    return di(h), h.headers = yt.from(h.headers), h.data = ui.call(
      h,
      h.transformRequest
    ), ["post", "put", "patch"].indexOf(h.method) !== -1 && h.headers.setContentType("application/x-www-form-urlencoded", !1), sa.getAdapter(h.adapter || yn.adapter)(h).then(function(x) {
      return di(h), x.data = ui.call(
        h,
        h.transformResponse,
        x
      ), x.headers = yt.from(x.headers), x;
    }, function(x) {
      return Yo(x) || (di(h), x && x.response && (x.response.data = ui.call(
        h,
        h.transformResponse,
        x.response
      ), x.response.headers = yt.from(x.response.headers))), Promise.reject(x);
    });
  }
  const ua = "1.7.9", wr = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((h, y) => {
    wr[h] = function(x) {
      return typeof x === h || "a" + (y < 1 ? "n " : " ") + h;
    };
  });
  const ca = {};
  wr.transitional = function(y, S, x) {
    function O(k, C) {
      return "[Axios v" + ua + "] Transitional option '" + k + "'" + C + (x ? ". " + x : "");
    }
    return (k, C, L) => {
      if (y === !1)
        throw new ue(
          O(C, " has been removed" + (S ? " in " + S : "")),
          ue.ERR_DEPRECATED
        );
      return S && !ca[C] && (ca[C] = !0, console.warn(
        O(
          C,
          " has been deprecated since v" + S + " and will be removed in the near future"
        )
      )), y ? y(k, C, L) : !0;
    };
  }, wr.spelling = function(y) {
    return (S, x) => (console.warn(`${x} is likely a misspelling of ${y}`), !0);
  };
  function mu(h, y, S) {
    if (typeof h != "object")
      throw new ue("options must be an object", ue.ERR_BAD_OPTION_VALUE);
    const x = Object.keys(h);
    let O = x.length;
    for (; O-- > 0; ) {
      const k = x[O], C = y[k];
      if (C) {
        const L = h[k], ne = L === void 0 || C(L, k, h);
        if (ne !== !0)
          throw new ue("option " + k + " must be " + ne, ue.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (S !== !0)
        throw new ue("Unknown option " + k, ue.ERR_BAD_OPTION);
    }
  }
  var _r = {
    assertOptions: mu,
    validators: wr
  };
  const Ot = _r.validators;
  class Sr {
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
          const k = O.stack ? O.stack.replace(/^.+\n/, "") : "";
          try {
            x.stack ? k && !String(x.stack).endsWith(k.replace(/^.+\n.+\n/, "")) && (x.stack += `
` + k) : x.stack = k;
          } catch {
          }
        }
        throw x;
      }
    }
    _request(y, S) {
      typeof y == "string" ? (S = S || {}, S.url = y) : S = y || {}, S = en(this.defaults, S);
      const { transitional: x, paramsSerializer: O, headers: k } = S;
      x !== void 0 && _r.assertOptions(x, {
        silentJSONParsing: Ot.transitional(Ot.boolean),
        forcedJSONParsing: Ot.transitional(Ot.boolean),
        clarifyTimeoutError: Ot.transitional(Ot.boolean)
      }, !1), O != null && ($.isFunction(O) ? S.paramsSerializer = {
        serialize: O
      } : _r.assertOptions(O, {
        encode: Ot.function,
        serialize: Ot.function
      }, !0)), _r.assertOptions(S, {
        baseUrl: Ot.spelling("baseURL"),
        withXsrfToken: Ot.spelling("withXSRFToken")
      }, !0), S.method = (S.method || this.defaults.method || "get").toLowerCase();
      let C = k && $.merge(
        k.common,
        k[S.method]
      );
      k && $.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (ie) => {
          delete k[ie];
        }
      ), S.headers = yt.concat(C, k);
      const L = [];
      let ne = !0;
      this.interceptors.request.forEach(function(pe) {
        typeof pe.runWhen == "function" && pe.runWhen(S) === !1 || (ne = ne && pe.synchronous, L.unshift(pe.fulfilled, pe.rejected));
      });
      const K = [];
      this.interceptors.response.forEach(function(pe) {
        K.push(pe.fulfilled, pe.rejected);
      });
      let Y, re = 0, Te;
      if (!ne) {
        const ie = [la.bind(this), void 0];
        for (ie.unshift.apply(ie, L), ie.push.apply(ie, K), Te = ie.length, Y = Promise.resolve(S); re < Te; )
          Y = Y.then(ie[re++], ie[re++]);
        return Y;
      }
      Te = L.length;
      let We = S;
      for (re = 0; re < Te; ) {
        const ie = L[re++], pe = L[re++];
        try {
          We = ie(We);
        } catch (oe) {
          pe.call(this, oe);
          break;
        }
      }
      try {
        Y = la.call(this, We);
      } catch (ie) {
        return Promise.reject(ie);
      }
      for (re = 0, Te = K.length; re < Te; )
        Y = Y.then(K[re++], K[re++]);
      return Y;
    }
    getUri(y) {
      y = en(this.defaults, y);
      const S = Zo(y.baseURL, y.url);
      return de(S, y.params, y.paramsSerializer);
    }
  }
  $.forEach(["delete", "get", "head", "options"], function(y) {
    Sr.prototype[y] = function(S, x) {
      return this.request(en(x || {}, {
        method: y,
        url: S,
        data: (x || {}).data
      }));
    };
  }), $.forEach(["post", "put", "patch"], function(y) {
    function S(x) {
      return function(k, C, L) {
        return this.request(en(L || {}, {
          method: y,
          headers: x ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: k,
          data: C
        }));
      };
    }
    Sr.prototype[y] = S(), Sr.prototype[y + "Form"] = S(!0);
  });
  var xr = Sr;
  class pi {
    constructor(y) {
      if (typeof y != "function")
        throw new TypeError("executor must be a function.");
      let S;
      this.promise = new Promise(function(k) {
        S = k;
      });
      const x = this;
      this.promise.then((O) => {
        if (!x._listeners) return;
        let k = x._listeners.length;
        for (; k-- > 0; )
          x._listeners[k](O);
        x._listeners = null;
      }), this.promise.then = (O) => {
        let k;
        const C = new Promise((L) => {
          x.subscribe(L), k = L;
        }).then(O);
        return C.cancel = function() {
          x.unsubscribe(k);
        }, C;
      }, y(function(k, C, L) {
        x.reason || (x.reason = new gn(k, C, L), S(x.reason));
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
        token: new pi(function(O) {
          y = O;
        }),
        cancel: y
      };
    }
  }
  var yu = pi;
  function vu(h) {
    return function(S) {
      return h.apply(null, S);
    };
  }
  function gu(h) {
    return $.isObject(h) && h.isAxiosError === !0;
  }
  const hi = {
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
  Object.entries(hi).forEach(([h, y]) => {
    hi[y] = h;
  });
  var bu = hi;
  function fa(h) {
    const y = new xr(h), S = e(xr.prototype.request, y);
    return $.extend(S, xr.prototype, y, { allOwnKeys: !0 }), $.extend(S, y, null, { allOwnKeys: !0 }), S.create = function(O) {
      return fa(en(h, O));
    }, S;
  }
  const Fe = fa(yn);
  return Fe.Axios = xr, Fe.CanceledError = gn, Fe.CancelToken = yu, Fe.isCancel = Yo, Fe.VERSION = ua, Fe.toFormData = T, Fe.AxiosError = ue, Fe.Cancel = Fe.CanceledError, Fe.all = function(y) {
    return Promise.all(y);
  }, Fe.spread = vu, Fe.isAxiosError = gu, Fe.mergeConfig = en, Fe.AxiosHeaders = yt, Fe.formToJSON = (h) => mn($.isHTMLForm(h) ? new FormData(h) : h), Fe.getAdapter = sa.getAdapter, Fe.HttpStatusCode = bu, Fe.default = Fe, $i = Fe, $i;
}
var us;
function Wp() {
  if (us) return $t;
  us = 1;
  var e = $t.__assign || function() {
    return e = Object.assign || function(l) {
      for (var c, s = 1, u = arguments.length; s < u; s++) {
        c = arguments[s];
        for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (l[f] = c[f]);
      }
      return l;
    }, e.apply(this, arguments);
  }, t = $t.__awaiter || function(l, c, s, u) {
    function f(p) {
      return p instanceof s ? p : new s(function(m) {
        m(p);
      });
    }
    return new (s || (s = Promise))(function(p, m) {
      function g(a) {
        try {
          d(u.next(a));
        } catch (w) {
          m(w);
        }
      }
      function b(a) {
        try {
          d(u.throw(a));
        } catch (w) {
          m(w);
        }
      }
      function d(a) {
        a.done ? p(a.value) : f(a.value).then(g, b);
      }
      d((u = u.apply(l, c || [])).next());
    });
  }, r = $t.__generator || function(l, c) {
    var s = { label: 0, sent: function() {
      if (p[0] & 1) throw p[1];
      return p[1];
    }, trys: [], ops: [] }, u, f, p, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return m.next = g(0), m.throw = g(1), m.return = g(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function g(d) {
      return function(a) {
        return b([d, a]);
      };
    }
    function b(d) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; m && (m = 0, d[0] && (s = 0)), s; ) try {
        if (u = 1, f && (p = d[0] & 2 ? f.return : d[0] ? f.throw || ((p = f.return) && p.call(f), 0) : f.next) && !(p = p.call(f, d[1])).done) return p;
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
        d = c.call(l, s);
      } catch (a) {
        d = [6, a], f = 0;
      } finally {
        u = p = 0;
      }
      if (d[0] & 5) throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  }, n = $t.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty($t, "__esModule", { value: !0 }), $t.AxiosClient = void 0;
  var i = n(/* @__PURE__ */ Vp()), o = (
    /** @class */
    function() {
      function l(c) {
        var s = c.responseHandler, u = c.requestConfigBuilder;
        this.responseHandler = s, this.requestConfigBuilder = u;
      }
      return l.prototype.get = function(c, s) {
        return t(this, void 0, void 0, function() {
          var u;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", c, s)];
              case 1:
                return u = f.sent(), [4, this.sendRequest(u)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, l.prototype.getData = function(c, s) {
        return t(this, void 0, void 0, function() {
          var u;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("get", c, s, {
                  responseType: "arraybuffer"
                })];
              case 1:
                return u = f.sent(), [4, this.sendRequest(u)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, l.prototype.post = function(c, s) {
        return t(this, void 0, void 0, function() {
          var u;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", c, s)];
              case 1:
                return u = f.sent(), [4, this.sendRequest(u)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, l.prototype.postData = function(c, s) {
        return t(this, void 0, void 0, function() {
          var u;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("post", c, s)];
              case 1:
                return u = f.sent(), [4, this.sendRequest(u)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, l.prototype.put = function(c, s) {
        return t(this, void 0, void 0, function() {
          var u;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("put", c, s)];
              case 1:
                return u = f.sent(), [4, this.sendRequest(u)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, l.prototype.delete = function(c, s) {
        return t(this, void 0, void 0, function() {
          var u;
          return r(this, function(f) {
            switch (f.label) {
              case 0:
                return [4, this.requestConfigBuilder.build("delete", c, s)];
              case 1:
                return u = f.sent(), [4, this.sendRequest(u)];
              case 2:
                return [2, f.sent()];
            }
          });
        });
      }, l.prototype.sendRequest = function(c) {
        return this.responseHandler.handle(
          // eslint-disable-next-line new-cap
          (0, i.default)(e(e({}, c), { maxBodyLength: 1 / 0, maxContentLength: 1 / 0 }))
        );
      }, l;
    }()
  );
  return $t.AxiosClient = o, $t;
}
var cs;
function Hp() {
  return cs || (cs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DefaultHttpClient = void 0;
    var t = Wp();
    Object.defineProperty(e, "DefaultHttpClient", { enumerable: !0, get: function() {
      return t.AxiosClient;
    } });
  }(Ii)), Ii;
}
var Nt = {}, Ni, fs;
function Mn() {
  return fs || (fs = 1, Ni = TypeError), Ni;
}
const Gp = {}, Kp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gp
}, Symbol.toStringTag, { value: "Module" })), zp = /* @__PURE__ */ Gf(Kp);
var ji, ds;
function ii() {
  if (ds) return ji;
  ds = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, l = i && o && typeof o.get == "function" ? o.get : null, c = i && Set.prototype.forEach, s = typeof WeakMap == "function" && WeakMap.prototype, u = s ? WeakMap.prototype.has : null, f = typeof WeakSet == "function" && WeakSet.prototype, p = f ? WeakSet.prototype.has : null, m = typeof WeakRef == "function" && WeakRef.prototype, g = m ? WeakRef.prototype.deref : null, b = Boolean.prototype.valueOf, d = Object.prototype.toString, a = Function.prototype.toString, w = String.prototype.match, v = String.prototype.slice, _ = String.prototype.replace, E = String.prototype.toUpperCase, P = String.prototype.toLowerCase, R = RegExp.prototype.test, A = Array.prototype.concat, I = Array.prototype.join, q = Array.prototype.slice, M = Math.floor, B = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, W = Object.getOwnPropertySymbols, ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, V = typeof Symbol == "function" && typeof Symbol.iterator == "object", F = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === V || !0) ? Symbol.toStringTag : null, U = Object.prototype.propertyIsEnumerable, z = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(T) {
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
  var Z = zp, te = Z.custom, fe = Ke(te) ? te : null, me = {
    __proto__: null,
    double: '"',
    single: "'"
  }, xe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ji = function T(D, we, Re, Pe) {
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
    var Fn = typeof de.depth > "u" ? 5 : de.depth;
    if (typeof Re > "u" && (Re = 0), Re >= Fn && Fn > 0 && typeof D == "object")
      return ve(D) ? "[Array]" : "[Object]";
    var Ht = cr(de, Re);
    if (typeof Pe > "u")
      Pe = [];
    else if (wt(Pe, D) >= 0)
      return "[Circular]";
    function ut(Tt, Et, vn) {
      if (Et && (Pe = q.call(Pe), Pe.push(Et)), vn) {
        var mr = {
          depth: de.depth
        };
        return Xe(de, "quoteStyle") && (mr.quoteStyle = de.quoteStyle), T(Tt, mr, Re + 1, Pe);
      }
      return T(Tt, de, Re + 1, Pe);
    }
    if (typeof D == "function" && !ge(D)) {
      var dn = Lt(D), pn = fn(D, ut);
      return "[Function" + (dn ? ": " + dn : " (anonymous)") + "]" + (pn.length > 0 ? " { " + I.call(pn, ", ") + " }" : "");
    }
    if (Ke(D)) {
      var fr = V ? _.call(String(D), /^(Symbol\(.*\))_[^)]*$/, "$1") : ae.call(D);
      return typeof D == "object" && !V ? Wt(fr) : fr;
    }
    if ($(D)) {
      for (var Qt = "<" + P.call(String(D.nodeName)), Ln = D.attributes || [], hn = 0; hn < Ln.length; hn++)
        Qt += " " + Ln[hn].name + "=" + Se(N(Ln[hn].value), "double", de);
      return Qt += ">", D.childNodes && D.childNodes.length && (Qt += "..."), Qt += "</" + P.call(String(D.nodeName)) + ">", Qt;
    }
    if (ve(D)) {
      if (D.length === 0)
        return "[]";
      var Be = fn(D, ut);
      return Ht && !ur(Be) ? "[" + Bn(Be, Ht) + "]" : "[ " + I.call(Be, ", ") + " ]";
    }
    if (ee(D)) {
      var Un = fn(D, ut);
      return !("cause" in Error.prototype) && "cause" in D && !U.call(D, "cause") ? "{ [" + String(D) + "] " + I.call(A.call("[cause]: " + ut(D.cause), Un), ", ") + " }" : Un.length === 0 ? "[" + String(D) + "]" : "{ [" + String(D) + "] " + I.call(Un, ", ") + " }";
    }
    if (typeof D == "object" && _t) {
      if (fe && typeof D[fe] == "function" && Z)
        return Z(D, { depth: Fn - Re });
      if (_t !== "symbol" && typeof D.inspect == "function")
        return D.inspect();
    }
    if (lt(D)) {
      var dr = [];
      return n && n.call(D, function(Tt, Et) {
        dr.push(ut(Et, D, !0) + " => " + ut(Tt, D));
      }), cn("Map", r.call(D), dr, Ht);
    }
    if (Ct(D)) {
      var pr = [];
      return c && c.call(D, function(Tt) {
        pr.push(ut(Tt, D));
      }), cn("Set", l.call(D), pr, Ht);
    }
    if (Ut(D))
      return qn("WeakMap");
    if (ai(D))
      return qn("WeakSet");
    if (Vt(D))
      return qn("WeakRef");
    if (he(D))
      return Wt(ut(Number(D)));
    if (it(D))
      return Wt(ut(B.call(D)));
    if (Ce(D))
      return Wt(b.call(D));
    if (ye(D))
      return Wt(ut(String(D)));
    if (typeof window < "u" && D === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && D === globalThis || typeof ir < "u" && D === ir)
      return "{ [object globalThis] }";
    if (!Oe(D) && !ge(D)) {
      var mn = fn(D, ut), hr = z ? z(D) === Object.prototype : D instanceof Object || D.constructor === Object, Zt = D instanceof Object ? "" : "null prototype", yn = !hr && F && Object(D) === D && F in D ? v.call(nt(D), 8, -1) : Zt ? "Object" : "", si = hr || typeof D.constructor != "function" ? "" : D.constructor.name ? D.constructor.name + " " : "", Vn = si + (yn || Zt ? "[" + I.call(A.call([], yn || [], Zt || []), ": ") + "] " : "");
      return mn.length === 0 ? Vn + "{}" : Ht ? Vn + "{" + Bn(mn, Ht) + "}" : Vn + "{ " + I.call(mn, ", ") + " }";
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
    return !F || !(typeof T == "object" && (F in T || typeof T[F] < "u"));
  }
  function ve(T) {
    return nt(T) === "[object Array]" && G(T);
  }
  function Oe(T) {
    return nt(T) === "[object Date]" && G(T);
  }
  function ge(T) {
    return nt(T) === "[object RegExp]" && G(T);
  }
  function ee(T) {
    return nt(T) === "[object Error]" && G(T);
  }
  function ye(T) {
    return nt(T) === "[object String]" && G(T);
  }
  function he(T) {
    return nt(T) === "[object Number]" && G(T);
  }
  function Ce(T) {
    return nt(T) === "[object Boolean]" && G(T);
  }
  function Ke(T) {
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
  function it(T) {
    if (!T || typeof T != "object" || !B)
      return !1;
    try {
      return B.call(T), !0;
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
  function nt(T) {
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
  function lt(T) {
    if (!r || !T || typeof T != "object")
      return !1;
    try {
      r.call(T);
      try {
        l.call(T);
      } catch {
        return !0;
      }
      return T instanceof Map;
    } catch {
    }
    return !1;
  }
  function Ut(T) {
    if (!u || !T || typeof T != "object")
      return !1;
    try {
      u.call(T, u);
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
  function Ct(T) {
    if (!l || !T || typeof T != "object")
      return !1;
    try {
      l.call(T);
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
  function ai(T) {
    if (!p || !T || typeof T != "object")
      return !1;
    try {
      p.call(T, p);
      try {
        u.call(T, u);
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
    var de = _.call(_.call(T, Pe, "\\$1"), /[\x00-\x1f]/g, lr);
    return Se(de, "single", D);
  }
  function lr(T) {
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
  function cn(T, D, we, Re) {
    var Pe = Re ? Bn(we, Re) : I.call(we, ", ");
    return T + " (" + D + ") {" + Pe + "}";
  }
  function ur(T) {
    for (var D = 0; D < T.length; D++)
      if (wt(T[D], `
`) >= 0)
        return !1;
    return !0;
  }
  function cr(T, D) {
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
  function Bn(T, D) {
    if (T.length === 0)
      return "";
    var we = `
` + D.prev + D.base;
    return we + I.call(T, "," + we) + `
` + D.prev;
  }
  function fn(T, D) {
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
  return ji;
}
var Mi, ps;
function Yp() {
  if (ps) return Mi;
  ps = 1;
  var e = /* @__PURE__ */ ii(), t = /* @__PURE__ */ Mn(), r = function(c, s, u) {
    for (var f = c, p; (p = f.next) != null; f = p)
      if (p.key === s)
        return f.next = p.next, u || (p.next = /** @type {NonNullable<typeof list.next>} */
        c.next, c.next = p), p;
  }, n = function(c, s) {
    if (c) {
      var u = r(c, s);
      return u && u.value;
    }
  }, i = function(c, s, u) {
    var f = r(c, s);
    f ? f.value = u : c.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: s,
      next: c.next,
      value: u
    };
  }, o = function(c, s) {
    return c ? !!r(c, s) : !1;
  }, l = function(c, s) {
    if (c)
      return r(c, s, !0);
  };
  return Mi = function() {
    var s, u = {
      assert: function(f) {
        if (!u.has(f))
          throw new t("Side channel does not contain " + e(f));
      },
      delete: function(f) {
        var p = s && s.next, m = l(s, f);
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
    return u;
  }, Mi;
}
var qi, hs;
function Bl() {
  return hs || (hs = 1, qi = Object), qi;
}
var Bi, ms;
function Xp() {
  return ms || (ms = 1, Bi = Error), Bi;
}
var Fi, ys;
function Jp() {
  return ys || (ys = 1, Fi = EvalError), Fi;
}
var Li, vs;
function Qp() {
  return vs || (vs = 1, Li = RangeError), Li;
}
var Ui, gs;
function Zp() {
  return gs || (gs = 1, Ui = ReferenceError), Ui;
}
var Vi, bs;
function eh() {
  return bs || (bs = 1, Vi = SyntaxError), Vi;
}
var Wi, ws;
function th() {
  return ws || (ws = 1, Wi = URIError), Wi;
}
var Hi, _s;
function nh() {
  return _s || (_s = 1, Hi = Math.abs), Hi;
}
var Gi, Ss;
function rh() {
  return Ss || (Ss = 1, Gi = Math.floor), Gi;
}
var Ki, xs;
function ih() {
  return xs || (xs = 1, Ki = Math.max), Ki;
}
var zi, Es;
function oh() {
  return Es || (Es = 1, zi = Math.min), zi;
}
var Yi, Os;
function ah() {
  return Os || (Os = 1, Yi = Math.pow), Yi;
}
var Xi, Rs;
function sh() {
  return Rs || (Rs = 1, Xi = Math.round), Xi;
}
var Ji, As;
function lh() {
  return As || (As = 1, Ji = Number.isNaN || function(t) {
    return t !== t;
  }), Ji;
}
var Qi, Ps;
function uh() {
  if (Ps) return Qi;
  Ps = 1;
  var e = /* @__PURE__ */ lh();
  return Qi = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Qi;
}
var Zi, ks;
function ch() {
  return ks || (ks = 1, Zi = Object.getOwnPropertyDescriptor), Zi;
}
var eo, Cs;
function Fl() {
  if (Cs) return eo;
  Cs = 1;
  var e = /* @__PURE__ */ ch();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return eo = e, eo;
}
var to, Ts;
function fh() {
  if (Ts) return to;
  Ts = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return to = e, to;
}
var no, Ds;
function dh() {
  return Ds || (Ds = 1, no = function() {
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
    var l = Object.getOwnPropertySymbols(t);
    if (l.length !== 1 || l[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
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
  }), no;
}
var ro, Is;
function ph() {
  if (Is) return ro;
  Is = 1;
  var e = typeof Symbol < "u" && Symbol, t = dh();
  return ro = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, ro;
}
var io, $s;
function Ll() {
  return $s || ($s = 1, io = typeof Reflect < "u" && Reflect.getPrototypeOf || null), io;
}
var oo, Ns;
function Ul() {
  if (Ns) return oo;
  Ns = 1;
  var e = /* @__PURE__ */ Bl();
  return oo = e.getPrototypeOf || null, oo;
}
var ao, js;
function hh() {
  if (js) return ao;
  js = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(s, u) {
    for (var f = [], p = 0; p < s.length; p += 1)
      f[p] = s[p];
    for (var m = 0; m < u.length; m += 1)
      f[m + s.length] = u[m];
    return f;
  }, o = function(s, u) {
    for (var f = [], p = u, m = 0; p < s.length; p += 1, m += 1)
      f[m] = s[p];
    return f;
  }, l = function(c, s) {
    for (var u = "", f = 0; f < c.length; f += 1)
      u += c[f], f + 1 < c.length && (u += s);
    return u;
  };
  return ao = function(s) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var f = o(arguments, 1), p, m = function() {
      if (this instanceof p) {
        var w = u.apply(
          this,
          i(f, arguments)
        );
        return Object(w) === w ? w : this;
      }
      return u.apply(
        s,
        i(f, arguments)
      );
    }, g = r(0, u.length - f.length), b = [], d = 0; d < g; d++)
      b[d] = "$" + d;
    if (p = Function("binder", "return function (" + l(b, ",") + "){ return binder.apply(this,arguments); }")(m), u.prototype) {
      var a = function() {
      };
      a.prototype = u.prototype, p.prototype = new a(), a.prototype = null;
    }
    return p;
  }, ao;
}
var so, Ms;
function oi() {
  if (Ms) return so;
  Ms = 1;
  var e = hh();
  return so = Function.prototype.bind || e, so;
}
var lo, qs;
function Go() {
  return qs || (qs = 1, lo = Function.prototype.call), lo;
}
var uo, Bs;
function Vl() {
  return Bs || (Bs = 1, uo = Function.prototype.apply), uo;
}
var co, Fs;
function mh() {
  return Fs || (Fs = 1, co = typeof Reflect < "u" && Reflect && Reflect.apply), co;
}
var fo, Ls;
function yh() {
  if (Ls) return fo;
  Ls = 1;
  var e = oi(), t = Vl(), r = Go(), n = mh();
  return fo = n || e.call(r, t), fo;
}
var po, Us;
function Wl() {
  if (Us) return po;
  Us = 1;
  var e = oi(), t = /* @__PURE__ */ Mn(), r = Go(), n = yh();
  return po = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, po;
}
var ho, Vs;
function vh() {
  if (Vs) return ho;
  Vs = 1;
  var e = Wl(), t = /* @__PURE__ */ Fl(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (l) {
    if (!l || typeof l != "object" || !("code" in l) || l.code !== "ERR_PROTO_ACCESS")
      throw l;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return ho = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(c) {
      return o(c == null ? c : i(c));
    }
  ) : !1, ho;
}
var mo, Ws;
function gh() {
  if (Ws) return mo;
  Ws = 1;
  var e = Ll(), t = Ul(), r = /* @__PURE__ */ vh();
  return mo = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, mo;
}
var yo, Hs;
function bh() {
  if (Hs) return yo;
  Hs = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = oi();
  return yo = r.call(e, t), yo;
}
var vo, Gs;
function Ko() {
  if (Gs) return vo;
  Gs = 1;
  var e, t = /* @__PURE__ */ Bl(), r = /* @__PURE__ */ Xp(), n = /* @__PURE__ */ Jp(), i = /* @__PURE__ */ Qp(), o = /* @__PURE__ */ Zp(), l = /* @__PURE__ */ eh(), c = /* @__PURE__ */ Mn(), s = /* @__PURE__ */ th(), u = /* @__PURE__ */ nh(), f = /* @__PURE__ */ rh(), p = /* @__PURE__ */ ih(), m = /* @__PURE__ */ oh(), g = /* @__PURE__ */ ah(), b = /* @__PURE__ */ sh(), d = /* @__PURE__ */ uh(), a = Function, w = function(ge) {
    try {
      return a('"use strict"; return (' + ge + ").constructor;")();
    } catch {
    }
  }, v = /* @__PURE__ */ Fl(), _ = /* @__PURE__ */ fh(), E = function() {
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
  }() : E, R = ph()(), A = gh(), I = Ul(), q = Ll(), M = Vl(), B = Go(), W = {}, ae = typeof Uint8Array > "u" || !A ? e : A(Uint8Array), V = {
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
    "%SyntaxError%": l,
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
    "%Function.prototype.call%": B,
    "%Function.prototype.apply%": M,
    "%Object.defineProperty%": _,
    "%Object.getPrototypeOf%": I,
    "%Math.abs%": u,
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
      var F = A(A(ge));
      V["%Error.prototype%"] = F;
    }
  var U = function ge(ee) {
    var ye;
    if (ee === "%AsyncFunction%")
      ye = w("async function () {}");
    else if (ee === "%GeneratorFunction%")
      ye = w("function* () {}");
    else if (ee === "%AsyncGeneratorFunction%")
      ye = w("async function* () {}");
    else if (ee === "%AsyncGenerator%") {
      var he = ge("%AsyncGeneratorFunction%");
      he && (ye = he.prototype);
    } else if (ee === "%AsyncIteratorPrototype%") {
      var Ce = ge("%AsyncGenerator%");
      Ce && A && (ye = A(Ce.prototype));
    }
    return V[ee] = ye, ye;
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
  }, j = oi(), Z = /* @__PURE__ */ bh(), te = j.call(B, Array.prototype.concat), fe = j.call(M, Array.prototype.splice), me = j.call(B, String.prototype.replace), xe = j.call(B, String.prototype.slice), Se = j.call(B, RegExp.prototype.exec), N = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, G = /\\(\\)?/g, ve = function(ee) {
    var ye = xe(ee, 0, 1), he = xe(ee, -1);
    if (ye === "%" && he !== "%")
      throw new l("invalid intrinsic syntax, expected closing `%`");
    if (he === "%" && ye !== "%")
      throw new l("invalid intrinsic syntax, expected opening `%`");
    var Ce = [];
    return me(ee, N, function(Ke, it, qe, Xe) {
      Ce[Ce.length] = qe ? me(Xe, G, "$1") : it || Ke;
    }), Ce;
  }, Oe = function(ee, ye) {
    var he = ee, Ce;
    if (Z(z, he) && (Ce = z[he], he = "%" + Ce[0] + "%"), Z(V, he)) {
      var Ke = V[he];
      if (Ke === W && (Ke = U(he)), typeof Ke > "u" && !ye)
        throw new c("intrinsic " + ee + " exists, but is not available. Please file an issue!");
      return {
        alias: Ce,
        name: he,
        value: Ke
      };
    }
    throw new l("intrinsic " + ee + " does not exist!");
  };
  return vo = function(ee, ye) {
    if (typeof ee != "string" || ee.length === 0)
      throw new c("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ye != "boolean")
      throw new c('"allowMissing" argument must be a boolean');
    if (Se(/^%?[^%]*%?$/, ee) === null)
      throw new l("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var he = ve(ee), Ce = he.length > 0 ? he[0] : "", Ke = Oe("%" + Ce + "%", ye), it = Ke.name, qe = Ke.value, Xe = !1, nt = Ke.alias;
    nt && (Ce = nt[0], fe(he, te([0, 1], nt)));
    for (var Lt = 1, wt = !0; Lt < he.length; Lt += 1) {
      var lt = he[Lt], Ut = xe(lt, 0, 1), Vt = xe(lt, -1);
      if ((Ut === '"' || Ut === "'" || Ut === "`" || Vt === '"' || Vt === "'" || Vt === "`") && Ut !== Vt)
        throw new l("property names with quotes must have matching quotes");
      if ((lt === "constructor" || !wt) && (Xe = !0), Ce += "." + lt, it = "%" + Ce + "%", Z(V, it))
        qe = V[it];
      else if (qe != null) {
        if (!(lt in qe)) {
          if (!ye)
            throw new c("base intrinsic for " + ee + " exists, but the property is not available.");
          return;
        }
        if (v && Lt + 1 >= he.length) {
          var Ct = v(qe, lt);
          wt = !!Ct, wt && "get" in Ct && !("originalValue" in Ct.get) ? qe = Ct.get : qe = qe[lt];
        } else
          wt = Z(qe, lt), qe = qe[lt];
        wt && !Xe && (V[it] = qe);
      }
    }
    return qe;
  }, vo;
}
var go, Ks;
function Hl() {
  if (Ks) return go;
  Ks = 1;
  var e = /* @__PURE__ */ Ko(), t = Wl(), r = t([e("%String.prototype.indexOf%")]);
  return go = function(i, o) {
    var l = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof l == "function" && r(i, ".prototype.") > -1 ? t([l]) : l;
  }, go;
}
var bo, zs;
function Gl() {
  if (zs) return bo;
  zs = 1;
  var e = /* @__PURE__ */ Ko(), t = /* @__PURE__ */ Hl(), r = /* @__PURE__ */ ii(), n = /* @__PURE__ */ Mn(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), l = t("Map.prototype.set", !0), c = t("Map.prototype.has", !0), s = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return bo = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var p, m = {
      assert: function(g) {
        if (!m.has(g))
          throw new n("Side channel does not contain " + r(g));
      },
      delete: function(g) {
        if (p) {
          var b = s(p, g);
          return u(p) === 0 && (p = void 0), b;
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
        p || (p = new i()), l(p, g, b);
      }
    };
    return m;
  }, bo;
}
var wo, Ys;
function wh() {
  if (Ys) return wo;
  Ys = 1;
  var e = /* @__PURE__ */ Ko(), t = /* @__PURE__ */ Hl(), r = /* @__PURE__ */ ii(), n = Gl(), i = /* @__PURE__ */ Mn(), o = e("%WeakMap%", !0), l = t("WeakMap.prototype.get", !0), c = t("WeakMap.prototype.set", !0), s = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return wo = o ? (
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
              return u(p, b);
          } else if (n && m)
            return m.delete(b);
          return !1;
        },
        get: function(b) {
          return o && b && (typeof b == "object" || typeof b == "function") && p ? l(p, b) : m && m.get(b);
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
  ) : n, wo;
}
var _o, Xs;
function _h() {
  if (Xs) return _o;
  Xs = 1;
  var e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ ii(), r = Yp(), n = Gl(), i = wh(), o = i || n || r;
  return _o = function() {
    var c, s = {
      assert: function(u) {
        if (!s.has(u))
          throw new e("Side channel does not contain " + t(u));
      },
      delete: function(u) {
        return !!c && c.delete(u);
      },
      get: function(u) {
        return c && c.get(u);
      },
      has: function(u) {
        return !!c && c.has(u);
      },
      set: function(u, f) {
        c || (c = o()), c.set(u, f);
      }
    };
    return s;
  }, _o;
}
var So, Js;
function zo() {
  if (Js) return So;
  Js = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return So = {
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
  }, So;
}
var xo, Qs;
function Kl() {
  if (Qs) return xo;
  Qs = 1;
  var e = /* @__PURE__ */ zo(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
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
  }, l = function a(w, v, _) {
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
  }, u = 1024, f = function(w, v, _, E, P) {
    if (w.length === 0)
      return w;
    var R = w;
    if (typeof w == "symbol" ? R = Symbol.prototype.toString.call(w) : typeof w != "string" && (R = String(w)), _ === "iso-8859-1")
      return escape(R).replace(/%u[0-9a-f]{4}/gi, function(ae) {
        return "%26%23" + parseInt(ae.slice(2), 16) + "%3B";
      });
    for (var A = "", I = 0; I < R.length; I += u) {
      for (var q = R.length >= u ? R.slice(I, I + u) : R, M = [], B = 0; B < q.length; ++B) {
        var W = q.charCodeAt(B);
        if (W === 45 || W === 46 || W === 95 || W === 126 || W >= 48 && W <= 57 || W >= 65 && W <= 90 || W >= 97 && W <= 122 || P === e.RFC1738 && (W === 40 || W === 41)) {
          M[M.length] = q.charAt(B);
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
        B += 1, W = 65536 + ((W & 1023) << 10 | q.charCodeAt(B) & 1023), M[M.length] = n[240 | W >> 18] + n[128 | W >> 12 & 63] + n[128 | W >> 6 & 63] + n[128 | W & 63];
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
  return xo = {
    arrayToObject: o,
    assign: c,
    combine: b,
    compact: p,
    decode: s,
    encode: f,
    isBuffer: g,
    isRegExp: m,
    maybeMap: d,
    merge: l
  }, xo;
}
var Eo, Zs;
function Sh() {
  if (Zs) return Eo;
  Zs = 1;
  var e = _h(), t = /* @__PURE__ */ Kl(), r = /* @__PURE__ */ zo(), n = Object.prototype.hasOwnProperty, i = {
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
  }, o = Array.isArray, l = Array.prototype.push, c = function(d, a) {
    l.apply(d, o(a) ? a : [a]);
  }, s = Date.prototype.toISOString, u = r.default, f = {
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
    format: u,
    formatter: r.formatters[u],
    // deprecated
    indices: !1,
    serializeDate: function(a) {
      return s.call(a);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, p = function(a) {
    return typeof a == "string" || typeof a == "number" || typeof a == "boolean" || typeof a == "symbol" || typeof a == "bigint";
  }, m = {}, g = function d(a, w, v, _, E, P, R, A, I, q, M, B, W, ae, V, F, U, z) {
    for (var j = a, Z = z, te = 0, fe = !1; (Z = Z.get(m)) !== void 0 && !fe; ) {
      var me = Z.get(a);
      if (te += 1, typeof me < "u") {
        if (me === te)
          throw new RangeError("Cyclic object value");
        fe = !0;
      }
      typeof Z.get(m) > "u" && (te = 0);
    }
    if (typeof q == "function" ? j = q(w, j) : j instanceof Date ? j = W(j) : v === "comma" && o(j) && (j = t.maybeMap(j, function(it) {
      return it instanceof Date ? W(it) : it;
    })), j === null) {
      if (P)
        return I && !F ? I(w, f.encoder, U, "key", ae) : w;
      j = "";
    }
    if (p(j) || t.isBuffer(j)) {
      if (I) {
        var xe = F ? w : I(w, f.encoder, U, "key", ae);
        return [V(xe) + "=" + V(I(j, f.encoder, U, "value", ae))];
      }
      return [V(w) + "=" + V(String(j))];
    }
    var Se = [];
    if (typeof j > "u")
      return Se;
    var N;
    if (v === "comma" && o(j))
      F && I && (j = t.maybeMap(j, I)), N = [{ value: j.length > 0 ? j.join(",") || null : void 0 }];
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
      var ee = N[ge], ye = typeof ee == "object" && ee && typeof ee.value < "u" ? ee.value : j[ee];
      if (!(R && ye === null)) {
        var he = B && A ? String(ee).replace(/\./g, "%2E") : String(ee), Ce = o(j) ? typeof v == "function" ? v(Oe, he) : Oe : Oe + (B ? "." + he : "[" + he + "]");
        z.set(a, te);
        var Ke = e();
        Ke.set(m, z), c(Se, d(
          ye,
          Ce,
          v,
          _,
          E,
          P,
          R,
          A,
          v === "comma" && F && o(j) ? null : I,
          q,
          M,
          B,
          W,
          ae,
          V,
          F,
          U,
          Ke
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
  return Eo = function(d, a) {
    var w = d, v = b(a), _, E;
    typeof v.filter == "function" ? (E = v.filter, w = E("", w)) : o(v.filter) && (E = v.filter, _ = E);
    var P = [];
    if (typeof w != "object" || w === null)
      return "";
    var R = i[v.arrayFormat], A = R === "comma" && v.commaRoundTrip;
    _ || (_ = Object.keys(w)), v.sort && _.sort(v.sort);
    for (var I = e(), q = 0; q < _.length; ++q) {
      var M = _[q], B = w[M];
      v.skipNulls && B === null || c(P, g(
        B,
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
  }, Eo;
}
var Oo, el;
function xh() {
  if (el) return Oo;
  el = 1;
  var e = /* @__PURE__ */ Kl(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
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
  }, l = "utf8=%26%2310003%3B", c = "utf8=%E2%9C%93", s = function(g, b) {
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
        v[E].indexOf("utf8=") === 0 && (v[E] === c ? P = "utf-8" : v[E] === l && (P = "iso-8859-1"), _ = E, E = v.length);
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
        var B = t.call(d, q);
        B && b.duplicates === "combine" ? d[q] = e.combine(d[q], M) : (!B || b.duplicates === "last") && (d[q] = M);
      }
    return d;
  }, u = function(m, g, b, d) {
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
      return u(R, b, d, a);
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
  return Oo = function(m, g) {
    var b = p(g);
    if (m === "" || m === null || typeof m > "u")
      return b.plainObjects ? { __proto__: null } : {};
    for (var d = typeof m == "string" ? s(m, b) : m, a = b.plainObjects ? { __proto__: null } : {}, w = Object.keys(d), v = 0; v < w.length; ++v) {
      var _ = w[v], E = f(_, d[_], b, typeof m == "string");
      a = e.merge(a, E, b);
    }
    return b.allowSparse === !0 ? a : e.compact(a);
  }, Oo;
}
var Ro, tl;
function Eh() {
  if (tl) return Ro;
  tl = 1;
  var e = /* @__PURE__ */ Sh(), t = /* @__PURE__ */ xh(), r = /* @__PURE__ */ zo();
  return Ro = {
    formats: r,
    parse: t,
    stringify: e
  }, Ro;
}
var Vr = { exports: {} }, Oh = Vr.exports, nl;
function Rh() {
  return nl || (nl = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(typeof self < "u" ? self : typeof window < "u" ? window : typeof ir < "u" ? ir : Oh, function() {
      var r = "3.7.7", n = r, i = typeof Buffer == "function", o = typeof TextDecoder == "function" ? new TextDecoder() : void 0, l = typeof TextEncoder == "function" ? new TextEncoder() : void 0, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = Array.prototype.slice.call(c), u = function(N) {
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
        for (var G, ve, Oe, ge, ee = "", ye = N.length % 3, he = 0; he < N.length; ) {
          if ((ve = N.charCodeAt(he++)) > 255 || (Oe = N.charCodeAt(he++)) > 255 || (ge = N.charCodeAt(he++)) > 255)
            throw new TypeError("invalid character found");
          G = ve << 16 | Oe << 8 | ge, ee += s[G >> 18 & 63] + s[G >> 12 & 63] + s[G >> 6 & 63] + s[G & 63];
        }
        return ye ? ee.slice(0, ye - 3) + "===".substring(ye) : ee;
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
      } : l ? function(N) {
        return w(l.encode(N));
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
      }, B = function(N) {
        return N.replace(q, M);
      }, W = function(N) {
        if (N = N.replace(/\s+/g, ""), !f.test(N))
          throw new TypeError("malformed base64.");
        N += "==".slice(2 - (N.length & 3));
        for (var G, ve = "", Oe, ge, ee = 0; ee < N.length; )
          G = u[N.charAt(ee++)] << 18 | u[N.charAt(ee++)] << 12 | (Oe = u[N.charAt(ee++)]) << 6 | (ge = u[N.charAt(ee++)]), ve += Oe === 64 ? p(G >> 16 & 255) : ge === 64 ? p(G >> 16 & 255, G >> 8 & 255) : p(G >> 16 & 255, G >> 8 & 255, G & 255);
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
      }, F = function(N) {
        return V(z(N));
      }, U = i ? function(N) {
        return Buffer.from(N, "base64").toString("utf8");
      } : o ? function(N) {
        return o.decode(V(N));
      } : function(N) {
        return B(ae(N));
      }, z = function(N) {
        return b(N.replace(/[-_]/g, function(G) {
          return G == "-" ? "+" : "/";
        }));
      }, j = function(N) {
        return U(z(N));
      }, Z = function(N) {
        if (typeof N != "string")
          return !1;
        var G = N.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(G) || !/[^\s0-9a-zA-Z\-_]/.test(G);
      }, te = function(N) {
        return {
          value: N,
          enumerable: !1,
          writable: !0,
          configurable: !0
        };
      }, fe = function() {
        var N = function(G, ve) {
          return Object.defineProperty(String.prototype, G, te(ve));
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
          return F(this);
        });
      }, me = function() {
        var N = function(G, ve) {
          return Object.defineProperty(Uint8Array.prototype, G, te(ve));
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
        btou: B,
        decode: j,
        isValid: Z,
        fromUint8Array: v,
        toUint8Array: F,
        extendString: fe,
        extendUint8Array: me,
        extendBuiltins: xe
      };
      return Se.Base64 = {}, Object.keys(Se).forEach(function(N) {
        return Se.Base64[N] = Se[N];
      }), Se;
    });
  }(Vr)), Vr.exports;
}
var rl;
function Ah() {
  if (rl) return Nt;
  rl = 1;
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
  var i = n(ql()), o = n(/* @__PURE__ */ Eh()), l = /* @__PURE__ */ Rh(), c = ri(), s = "http", u = 4096, f = (
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
          var a, w, R, v, _, E, P, R, A, I, q, M, B;
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
                return R = this.buildRequestUrl(g, b), R.length > u ? (v = [e({}, a)], q = { method: "post", headers: e(e({}, this.headers), { "X-HTTP-Method-Override": "GET" }) }, [4, this.buildData(b)]) : [3, 3];
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
                return P = [e({}, a)], B = {}, [4, this.buildData(b)];
              case 9:
                return [2, e.apply(void 0, P.concat([(B.data = W.sent(), B)]))];
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
          Authorization: "Basic ".concat(l.Base64.encode("".concat(g.username, ":").concat(g.password)))
        } : {}, a = c.platformDeps.buildHeaders({ userAgent: b }), w = e(e({}, a), d);
        switch (this.auth.type) {
          case "password":
            return e(e({}, w), { "X-Cybozu-Authorization": l.Base64.encode("".concat(this.auth.username, ":").concat(this.auth.password)) });
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
var an = {}, il;
function Ph() {
  if (il) return an;
  il = 1;
  var e = an.__assign || function() {
    return e = Object.assign || function(i) {
      for (var o, l = 1, c = arguments.length; l < c; l++) {
        o = arguments[l];
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
      }
      return i;
    }, e.apply(this, arguments);
  }, t = an.__rest || function(i, o) {
    var l = {};
    for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && o.indexOf(c) < 0 && (l[c] = i[c]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, c = Object.getOwnPropertySymbols(i); s < c.length; s++)
        o.indexOf(c[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, c[s]) && (l[c[s]] = i[c[s]]);
    return l;
  };
  Object.defineProperty(an, "__esModule", { value: !0 }), an.KintoneResponseHandler = void 0;
  var r = Ho(), n = (
    /** @class */
    function() {
      function i(o) {
        var l = o.enableAbortSearchError;
        this.enableAbortSearchError = l;
      }
      return i.prototype.handle = function(o) {
        var l = this;
        return o.then(function(c) {
          return l.handleSuccessResponse(c);
        }, function(c) {
          return l.handleErrorResponse(c);
        });
      }, i.prototype.handleSuccessResponse = function(o) {
        if (this.enableAbortSearchError && /Filter aborted because of too many search results/.test(o.headers["x-cybozu-warning"]))
          throw new r.KintoneAbortSearchError(o.headers["x-cybozu-warning"]);
        return o.data;
      }, i.prototype.handleErrorResponse = function(o) {
        if (!o.response)
          throw /mac verify failure/.test(o.toString()) ? new Error("invalid clientCertAuth setting") : o;
        var l = o.response, c = l.data, s = t(l, ["data"]);
        throw typeof c == "string" ? new Error("".concat(s.status, ": ").concat(s.statusText)) : new r.KintoneRestAPIError(e({ data: c }, s));
      }, i;
    }()
  );
  return an.KintoneResponseHandler = n, an;
}
var ol;
function kh() {
  if (ol) return Sn;
  ol = 1;
  var e = Sn.__assign || function() {
    return e = Object.assign || function(v) {
      for (var _, E = 1, P = arguments.length; E < P; E++) {
        _ = arguments[E];
        for (var R in _) Object.prototype.hasOwnProperty.call(_, R) && (v[R] = _[R]);
      }
      return v;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.KintoneRestAPIClient = void 0;
  var t = $p(), r = Np(), n = Bp(), i = Fp(), o = Lp(), l = Up(), c = Hp(), s = Ah(), u = Ph(), f = ri(), p = Wo(), m = function(v) {
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
        var A = m((E = _.auth) !== null && E !== void 0 ? E : {}), I = new s.KintoneRequestConfigBuilder(e(e({}, _), { baseUrl: this.baseUrl, auth: A })), q = new u.KintoneResponseHandler({
          enableAbortSearchError: (R = (P = _.featureFlags) === null || P === void 0 ? void 0 : P.enableAbortSearchError) !== null && R !== void 0 ? R : !1
        }), M = new c.DefaultHttpClient({
          responseHandler: q,
          requestConfigBuilder: I
        }), B = _.guestSpaceId;
        this.bulkRequest_ = new t.BulkRequestClient(M, B), this.record = new n.RecordClient(M, this.bulkRequest_, B), this.app = new r.AppClient(M, B), this.space = new i.SpaceClient(M, B), this.file = new o.FileClient(M, B), this.plugin = new l.PluginClient(M);
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
  Sn.KintoneRestAPIClient = g;
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
  return Sn;
}
var al;
function Ch() {
  return al || (al = 1, function(e) {
    var t = on.__createBinding || (Object.create ? function(s, u, f, p) {
      p === void 0 && (p = f);
      var m = Object.getOwnPropertyDescriptor(u, f);
      (!m || ("get" in m ? !u.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
        return u[f];
      } }), Object.defineProperty(s, p, m);
    } : function(s, u, f, p) {
      p === void 0 && (p = f), s[p] = u[f];
    }), r = on.__setModuleDefault || (Object.create ? function(s, u) {
      Object.defineProperty(s, "default", { enumerable: !0, value: u });
    } : function(s, u) {
      s.default = u;
    }), n = on.__importStar || /* @__PURE__ */ function() {
      var s = function(u) {
        return s = Object.getOwnPropertyNames || function(f) {
          var p = [];
          for (var m in f) Object.prototype.hasOwnProperty.call(f, m) && (p[p.length] = m);
          return p;
        }, s(u);
      };
      return function(u) {
        if (u && u.__esModule) return u;
        var f = {};
        if (u != null) for (var p = s(u), m = 0; m < p.length; m++) p[m] !== "default" && t(f, u, p[m]);
        return r(f, u), f;
      };
    }(), i = on.__exportStar || function(s, u) {
      for (var f in s) f !== "default" && !Object.prototype.hasOwnProperty.call(u, f) && t(u, s, f);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KintoneRestAPIClient = void 0;
    var o = ri(), l = n(Dp());
    (0, o.injectPlatformDeps)(l);
    var c = kh();
    Object.defineProperty(e, "KintoneRestAPIClient", { enumerable: !0, get: function() {
      return c.KintoneRestAPIClient;
    } }), i(Ho(), e);
  }(on)), on;
}
var Th = Ch();
const Dh = {
  key: 0,
  class: "kvc-file-value"
}, Ih = { class: "kvc-file-select-list" }, $h = ["src"], Nh = { key: 1 }, jh = { class: "kvc-file-select-file-name" }, Mh = { class: "kvc-file-select-file-size" }, qh = { class: "kvc-file-select-list-item" }, Bh = ["onClick"], Fh = { class: "kvc-file-select-file-name" }, Lh = { class: "kvc-file-select-file-size" }, Uh = ["src"], Vh = { class: "kvc-file-select-group" }, Wh = ["disabled"], Hh = ["multiple", "accept"], Gh = /* @__PURE__ */ Ve({
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
    const r = e, n = t, i = new Th.KintoneRestAPIClient(), o = Ae(null), l = Ae(null), c = Ae(r.modelValue || []), s = Ae(null), u = Ae(null), f = Ae(!1);
    Jr(() => r.modelValue, (a) => {
      c.value = a ? Array.from(a) : [];
    }), or(async () => {
      if (c.value.length)
        for await (const a of c.value)
          a.fileKey && !a.data && (a.data = await i.file.downloadFile({ fileKey: a.fileKey }));
      s.value && ip(s, c, {
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
      n("update:modelValue", _), n("change", _), c.value = _, l.value = null;
    }, { isOverDropZone: d } = gf(u, {
      onDrop: (a) => {
        b(a);
      },
      dataTypes: ke(() => {
        var a;
        return ((a = r.accept) == null ? void 0 : a.split(",")) ?? [];
      }),
      // ← 明示的にstring[] or []
      multiple: r.multiple,
      preventDefaultForUnhandled: !1
    });
    return (a, w) => a.readOnly ? (X(), J("div", Dh, [
      Q("ul", Ih, [
        (X(!0), J(pt, null, mt(c.value, (v, _) => (X(), J("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          v.data && (v.contentType || "").startsWith("image/") ? (X(), J("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(v.data, v.contentType)
          }, null, 8, $h)) : (X(), J("span", Nh, [
            Q("span", jh, Qe(v.name), 1),
            Q("span", Mh, "(" + Qe(p(v.size)) + ")", 1)
          ]))
        ]))), 128))
      ])
    ])) : (X(), J("div", {
      key: 1,
      ref_key: "dropZoneRef",
      ref: u,
      class: "kvc-file-select"
    }, [
      Q("ul", {
        class: "kvc-file-select-list",
        ref_key: "sortWrapRef",
        ref: s
      }, [
        (X(!0), J(pt, null, mt(c.value, (v, _) => (X(), J("li", {
          key: _,
          class: "kvc-file-select-list-item-wrap"
        }, [
          Q("div", qh, [
            a.disabled ? je("", !0) : (X(), J("button", {
              key: 0,
              type: "button",
              class: "kvc-file-select-delete-button",
              onClick: (E) => g(_)
            }, [
              dt(Ge(At), {
                icon: "mdi:close",
                width: "22"
              })
            ], 8, Bh)),
            Q("span", Fh, Qe(v.name), 1),
            Q("span", Lh, Qe(p(v.size)), 1)
          ]),
          v.data && (v.contentType || "").startsWith("image/") ? (X(), J("img", {
            key: 0,
            class: "kvc-file-select-file-image",
            src: m(v.data, v.contentType)
          }, null, 8, Uh)) : je("", !0)
        ]))), 128))
      ], 512),
      Q("div", Vh, [
        Q("button", {
          type: "button",
          disabled: a.disabled,
          class: "kvc-file-select-button",
          onClick: w[0] || (w[0] = (v) => {
            var _;
            return (_ = o.value) == null ? void 0 : _.click();
          })
        }, " 参照 ", 8, Wh),
        w[3] || (w[3] = Q("p", { class: "kvc-file-select-text" }, "(最大1 GB)", -1))
      ]),
      !f.value && Ge(d) ? (X(), J("div", {
        key: 0,
        class: "kvc-file-select-file-dropzone",
        onClick: w[1] || (w[1] = (v) => d.value = !1)
      }, " ここにファイルをドロップします。 ")) : je("", !0),
      Q("input", {
        type: "file",
        ref_key: "fileSelectRef",
        ref: o,
        multiple: a.multiple,
        accept: a.accept,
        onChange: w[2] || (w[2] = (v) => {
          var _;
          return b(((_ = v.target) == null ? void 0 : _.files) ?? null);
        })
      }, null, 40, Hh)
    ], 512));
  }
}), Kh = { class: "kvc-tab" }, zh = { class: "kvc-tab-header" }, Yh = ["onClick"], Xh = /* @__PURE__ */ Ve({
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
    ha("activeTab", i), ha("setActiveTab", o);
    const l = ll(), c = ke(() => {
      const s = [];
      return (l.default ? l.default({}) : []).forEach((f) => {
        const p = f.props;
        p != null && p.label && (p != null && p.name) && s.push({
          label: p.label,
          name: p.name
        });
      }), !i.value && s.length > 0 && (i.value = s[0].name), s;
    });
    return (s, u) => (X(), J("div", Kh, [
      Q("div", zh, [
        (X(!0), J(pt, null, mt(c.value, (f) => (X(), J("button", {
          key: f.name,
          type: "button",
          class: Ye(["kvc-tab-item", {
            "is-active": i.value === f.name,
            "kvc-tab-item-small": s.small
          }]),
          onClick: (p) => o(f.name)
        }, [
          Q("span", null, Qe(f.label), 1)
        ], 10, Yh))), 128))
      ]),
      Q("div", {
        class: Ye(["kvc-tab-content", {
          "kvc-tab-content-small": s.small
        }])
      }, [
        tt(s.$slots, "default")
      ], 2)
    ]));
  }
}), Jh = { key: 0 }, Qh = /* @__PURE__ */ Ve({
  __name: "pane",
  props: {
    label: {},
    name: {}
  },
  setup(e) {
    const t = e, r = Nu("activeTab", Ae("")), n = ke(() => (r == null ? void 0 : r.value) === t.name);
    return (i, o) => n.value ? (X(), J("div", Jh, [
      tt(i.$slots, "default")
    ])) : je("", !0);
  }
}), Zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KvcButton: Af,
  KvcCheckbox: Wf,
  KvcDatePicker: Sl,
  KvcDateTimePicker: Cd,
  KvcDialog: Qu,
  KvcDropdown: Rf,
  KvcField: If,
  KvcFileSelect: Gh,
  KvcRadio: qf,
  KvcRow: Fu,
  KvcSpinner: Hu,
  KvcTab: Xh,
  KvcTabPane: Qh,
  KvcTable: uf,
  KvcTextInput: Bo,
  KvcTextarea: Dd,
  KvcTimePicker: xl,
  KvcWrap: ju
}, Symbol.toStringTag, { value: "Module" })), rm = {
  install(e) {
    Object.entries(Zh).forEach(([t, r]) => {
      const n = r;
      e.component(n.name || t, n);
    });
  }
};
export {
  Af as KvcButton,
  Wf as KvcCheckbox,
  Sl as KvcDatePicker,
  Cd as KvcDateTimePicker,
  Qu as KvcDialog,
  Rf as KvcDropdown,
  If as KvcField,
  Gh as KvcFileSelect,
  qf as KvcRadio,
  Fu as KvcRow,
  Hu as KvcSpinner,
  Xh as KvcTab,
  Qh as KvcTabPane,
  uf as KvcTable,
  Bo as KvcTextInput,
  Dd as KvcTextarea,
  xl as KvcTimePicker,
  ju as KvcWrap,
  rm as default
};

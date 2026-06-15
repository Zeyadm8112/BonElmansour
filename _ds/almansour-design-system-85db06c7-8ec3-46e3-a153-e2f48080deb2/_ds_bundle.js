/* @ds-bundle: {"format":3,"namespace":"AlmansourDesignSystem_85db06","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"MenuItem","sourcePath":"components/menu/MenuItem.jsx"},{"name":"ProductCard","sourcePath":"components/menu/ProductCard.jsx"},{"name":"SectionHeader","sourcePath":"components/menu/SectionHeader.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5b451cd424ee","components/core/Button.jsx":"778bc32f5115","components/core/Divider.jsx":"62b1e1ba63e6","components/core/Input.jsx":"e21c8635a86b","components/core/Tag.jsx":"efcd52b3531e","components/menu/MenuItem.jsx":"af36e2ce3696","components/menu/ProductCard.jsx":"1f408b38e385","components/menu/SectionHeader.jsx":"905aca7b4d10"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AlmansourDesignSystem_85db06 = window.AlmansourDesignSystem_85db06 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small label for status / category emphasis.
 * Tones: coffee (default), teal, cream, slate, gold. solid | soft | outline.
 */
function Badge({
  children,
  tone = 'coffee',
  variant = 'solid',
  style,
  ...rest
}) {
  const palette = {
    coffee: {
      c: 'var(--coffee-500)',
      on: 'var(--sand-100)'
    },
    teal: {
      c: 'var(--teal-500)',
      on: 'var(--sand-50)'
    },
    cream: {
      c: 'var(--sand-300)',
      on: 'var(--coffee-800)'
    },
    slate: {
      c: 'var(--ink-800)',
      on: 'var(--sand-200)'
    },
    gold: {
      c: 'var(--gold-400)',
      on: 'var(--coffee-800)'
    }
  };
  const p = palette[tone] || palette.coffee;
  const variants = {
    solid: {
      background: p.c,
      color: p.on,
      border: `1px solid ${p.c}`
    },
    soft: {
      background: `color-mix(in srgb, ${p.c} 16%, transparent)`,
      color: p.c,
      border: `1px solid transparent`
    },
    outline: {
      background: 'transparent',
      color: p.c,
      border: `1px solid ${p.c}`
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-xs)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Almansour primary button.
 * Variants: primary (coffee), accent (teal), secondary (slate outline), ghost.
 * Sizes: sm, md, lg.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '13px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '14px'
    },
    lg: {
      padding: '16px 34px',
      fontSize: '15px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--sand-100)',
      border: '1px solid var(--brand-primary)'
    },
    accent: {
      background: 'var(--brand-accent)',
      color: 'var(--sand-50)',
      border: '1px solid var(--brand-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-primary-hover)';
    if (variant === 'accent') e.currentTarget.style.background = 'var(--brand-accent-hover)';
    if (variant === 'secondary') {
      e.currentTarget.style.background = 'var(--surface-sunken)';
    }
    if (variant === 'ghost') e.currentTarget.style.background = 'color-mix(in srgb, var(--brand-primary) 10%, transparent)';
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'none';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ornamental divider echoing the logo's tagline rule (ـــ • ـــ).
 * label: optional small text/diamond shown centered.
 * tone: "line" (on light) | "onDark".
 */
function Divider({
  label,
  tone = 'line',
  style,
  ...rest
}) {
  const lineColor = tone === 'onDark' ? 'var(--border-on-dark)' : 'var(--border-strong)';
  const dotColor = tone === 'onDark' ? 'var(--sand-300)' : 'var(--coffee-400)';
  const textColor = tone === 'onDark' ? 'var(--sand-300)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      width: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: lineColor
    }
  }), label != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      fontSize: '11px',
      color: textColor,
      whiteSpace: 'nowrap'
    }
  }, label) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      transform: 'rotate(45deg)',
      background: dotColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: lineColor
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with a quiet, paper-like field. Supports label, hint, error, RTL.
 */
function Input({
  label,
  hint,
  error,
  dir = 'ltr',
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? `in-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    dir: dir,
    style: {
      fontFamily: dir === 'rtl' ? 'var(--font-ar)' : 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--text-primary)',
      background: 'var(--surface-raised)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      padding: '11px 14px',
      width: '100%',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--brand-accent)';
      e.currentTarget.style.boxShadow = `0 0 0 3px var(--focus-ring)`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill chip for filters / categories. Toggle-able with `active`.
 */
function Tag({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const interactive = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.02em',
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'all var(--dur-base) var(--ease-out)',
      background: active ? 'var(--brand-primary)' : 'transparent',
      color: active ? 'var(--sand-100)' : 'var(--text-secondary)',
      border: `1px solid ${active ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
      ...style
    },
    onMouseEnter: e => {
      if (!active && interactive) e.currentTarget.style.background = 'var(--surface-sunken)';
    },
    onMouseLeave: e => {
      if (!active && interactive) e.currentTarget.style.background = 'transparent';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/menu/MenuItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A single menu line: name (Arabic + optional Latin), leader dots, price, description.
 * Bilingual & RTL-aware. Pass `tone="onDark"` on coffee/slate menus.
 */
function MenuItem({
  name,
  nameLatin,
  description,
  price,
  currency = 'SAR',
  badge,
  tone = 'light',
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  const ink = onDark ? 'var(--sand-100)' : 'var(--text-primary)';
  const sub = onDark ? 'var(--sand-300)' : 'var(--text-secondary)';
  const leader = onDark ? 'var(--border-on-dark)' : 'var(--border-strong)';
  const priceColor = onDark ? 'var(--sand-50)' : 'var(--brand-primary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ar-display)',
      fontSize: '19px',
      fontWeight: 600,
      color: ink,
      lineHeight: 1.2
    }
  }, name), nameLatin ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: '11px',
      color: sub
    }
  }, nameLatin) : null, badge), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      alignSelf: 'flex-end',
      height: 0,
      borderBottom: `1px dotted ${leader}`,
      transform: 'translateY(-4px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      fontWeight: 600,
      color: priceColor,
      whiteSpace: 'nowrap',
      letterSpacing: '0.04em'
    }
  }, price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      marginInlineStart: '4px',
      color: sub,
      letterSpacing: '0.1em'
    }
  }, currency))), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ar)',
      fontSize: '13px',
      lineHeight: 1.6,
      color: sub,
      maxWidth: '46ch'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { MenuItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/MenuItem.jsx", error: String((e && e.message) || e) }); }

// components/menu/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Product / drink card for social posts and ordering grids.
 * image: src string (drink photo). Falls back to a coffee-field placeholder.
 */
function ProductCard({
  name,
  nameLatin,
  price,
  currency = 'SAR',
  image,
  badge,
  tone = 'paper',
  style,
  ...rest
}) {
  const dark = tone === 'coffee';
  const surface = dark ? 'var(--surface-coffee)' : 'var(--surface-raised)';
  const ink = dark ? 'var(--sand-100)' : 'var(--text-primary)';
  const sub = dark ? 'var(--sand-300)' : 'var(--text-secondary)';
  const priceColor = dark ? 'var(--sand-50)' : 'var(--brand-primary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: surface,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      border: dark ? 'none' : '1px solid var(--border-soft)',
      width: '260px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '190px',
      position: 'relative',
      background: image ? `center/cover no-repeat url("${image}")` : 'radial-gradient(120% 120% at 30% 20%, var(--coffee-400), var(--coffee-700))'
    }
  }, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '12px',
      insetInlineStart: '12px'
    }
  }, typeof badge === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold"
  }, badge) : badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, nameLatin ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      fontSize: '10px',
      color: 'var(--brand-accent)',
      fontWeight: 600
    }
  }, nameLatin) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ar-display)',
      fontSize: '22px',
      fontWeight: 600,
      color: ink,
      lineHeight: 1.2
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px',
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      fontWeight: 600,
      color: priceColor,
      letterSpacing: '0.04em'
    }
  }, price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      marginInlineStart: '4px',
      color: sub,
      letterSpacing: '0.1em'
    }
  }, currency)))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/menu/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section header for menus / pages: small Latin eyebrow + large Arabic title,
 * with an optional ornamental rule underneath. Align start | center.
 */
function SectionHeader({
  eyebrow,
  title,
  align = 'start',
  tone = 'light',
  rule = true,
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  const titleColor = onDark ? 'var(--sand-100)' : 'var(--text-primary)';
  const eyebrowColor = onDark ? 'var(--sand-300)' : 'var(--brand-accent)';
  const ruleColor = onDark ? 'var(--border-on-dark)' : 'var(--border-strong)';
  const dot = onDark ? 'var(--sand-300)' : 'var(--coffee-400)';
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: centered ? 'center' : 'flex-start',
      gap: '8px',
      textAlign: centered ? 'center' : 'start',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: '12px',
      fontWeight: 600,
      color: eyebrowColor
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-ar-display)',
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: 700,
      lineHeight: 1.15,
      color: titleColor,
      margin: 0
    }
  }, title), rule ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      width: centered ? '160px' : '120px',
      marginTop: '4px'
    }
  }, centered ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: ruleColor
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      transform: 'rotate(45deg)',
      background: dot
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: ruleColor
    }
  })) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/SectionHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

})();

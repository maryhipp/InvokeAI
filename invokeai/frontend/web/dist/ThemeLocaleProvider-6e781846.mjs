import { j as jsxRuntimeExports, cK as Global, cL as ColorModeContext, q as isObject, cM as defineStyle, cN as createMultiStyleConfigHelpers, cO as cssVar$2, cP as defineStyleConfig, cQ as mergeWith, cR as toCSSVar, cS as ThemeProvider$1, cJ as useColorMode, cT as memoizedGet, n as runIfFn$1, cU as css, E as useTranslation } from "./component-4dacb96f.mjs";
import { d as useSafeLayoutEffect, i as PortalManager, T as ToastOptionProvider, j as ToastProvider, h as useAppSelector } from "./storeHooks-ee83548f.mjs";
import { useState, useMemo, useCallback, useEffect, createContext as createContext$1, useContext, useRef } from "react";
import "react-dom";
var vhPolyfill = `
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`;
var CSSPolyfill = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Global, { styles: vhPolyfill });
var CSSReset = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Global,
  {
    styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `
  }
);
var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function getColorModeUtils(options = {}) {
  const { preventTransition = true } = options;
  const utils = {
    setDataset: (value) => {
      const cleanup = preventTransition ? utils.preventTransition() : void 0;
      document.documentElement.dataset.theme = value;
      document.documentElement.style.colorScheme = value;
      cleanup == null ? void 0 : cleanup();
    },
    setClassName(dark) {
      document.body.classList.add(dark ? classNames.dark : classNames.light);
      document.body.classList.remove(dark ? classNames.light : classNames.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(fallback) {
      var _a4;
      const dark = (_a4 = utils.query().matches) != null ? _a4 : fallback === "dark";
      return dark ? "dark" : "light";
    },
    addListener(fn) {
      const mql = utils.query();
      const listener = (e) => {
        fn(e.matches ? "dark" : "light");
      };
      if (typeof mql.addListener === "function")
        mql.addListener(listener);
      else
        mql.addEventListener("change", listener);
      return () => {
        if (typeof mql.removeListener === "function")
          mql.removeListener(listener);
        else
          mql.removeEventListener("change", listener);
      };
    },
    preventTransition() {
      const css2 = document.createElement("style");
      css2.appendChild(
        document.createTextNode(
          `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      document.head.appendChild(css2);
      return () => {
        (() => window.getComputedStyle(document.body))();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(css2);
          });
        });
      };
    }
  };
  return utils;
}
var STORAGE_KEY = "chakra-ui-color-mode";
function createLocalStorageManager(key) {
  return {
    ssr: false,
    type: "localStorage",
    get(init) {
      if (!(globalThis == null ? void 0 : globalThis.document))
        return init;
      let value;
      try {
        value = localStorage.getItem(key) || init;
      } catch (e) {
      }
      return value || init;
    },
    set(value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
      }
    }
  };
}
var localStorageManager = createLocalStorageManager(STORAGE_KEY);
var noop = () => {
};
function getTheme(manager, fallback) {
  return manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback;
}
function ColorModeProvider(props) {
  const {
    value,
    children,
    options: {
      useSystemColorMode,
      initialColorMode,
      disableTransitionOnChange
    } = {},
    colorModeManager = localStorageManager
  } = props;
  const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  const [colorMode, rawSetColorMode] = useState(
    () => getTheme(colorModeManager, defaultColorMode)
  );
  const [resolvedColorMode, setResolvedColorMode] = useState(
    () => getTheme(colorModeManager)
  );
  const { getSystemTheme, setClassName, setDataset, addListener } = useMemo(
    () => getColorModeUtils({ preventTransition: disableTransitionOnChange }),
    [disableTransitionOnChange]
  );
  const resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
  const setColorMode = useCallback(
    (value2) => {
      const resolved = value2 === "system" ? getSystemTheme() : value2;
      rawSetColorMode(resolved);
      setClassName(resolved === "dark");
      setDataset(resolved);
      colorModeManager.set(resolved);
    },
    [colorModeManager, getSystemTheme, setClassName, setDataset]
  );
  useSafeLayoutEffect(() => {
    if (initialColorMode === "system") {
      setResolvedColorMode(getSystemTheme());
    }
  }, []);
  useEffect(() => {
    const managerValue = colorModeManager.get();
    if (managerValue) {
      setColorMode(managerValue);
      return;
    }
    if (initialColorMode === "system") {
      setColorMode("system");
      return;
    }
    setColorMode(defaultColorMode);
  }, [colorModeManager, defaultColorMode, initialColorMode, setColorMode]);
  const toggleColorMode = useCallback(() => {
    setColorMode(resolvedValue === "dark" ? "light" : "dark");
  }, [resolvedValue, setColorMode]);
  useEffect(() => {
    if (!useSystemColorMode)
      return;
    return addListener(setColorMode);
  }, [useSystemColorMode, addListener, setColorMode]);
  const context = useMemo(
    () => ({
      colorMode: value != null ? value : resolvedValue,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode,
      forced: value !== void 0
    }),
    [resolvedValue, toggleColorMode, setColorMode, value]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ColorModeContext.Provider, { value: context, children });
}
ColorModeProvider.displayName = "ColorModeProvider";
var requiredChakraThemeKeys = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function isChakraTheme(unit) {
  if (!isObject(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every(
    (propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName)
  );
}
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var z_index_default = zIndices;
var breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
};
var breakpoints_default = breakpoints;
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var colors_default = colors;
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var radius_default = radii;
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var shadows_default = shadows;
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var transition_default = transition;
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var blur_default = blur;
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var borders_default = borders;
var typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var typography_default = typography;
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes$m = {
  ...spacing,
  ...largeSizes,
  container
};
var sizes_default = sizes$m;
var foundations = {
  breakpoints: breakpoints_default,
  zIndices: z_index_default,
  radii: radius_default,
  blur: blur_default,
  colors: colors_default,
  ...typography_default,
  sizes: sizes_default,
  shadows: shadows_default,
  space: spacing,
  borders: borders_default,
  transition: transition_default
};
function anatomy$1(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function parts(...values) {
    assert();
    for (const part of values) {
      map[part] = toPart(part);
    }
    return anatomy$1(name, map);
  }
  function extend(...parts2) {
    for (const part of parts2) {
      if (part in map)
        continue;
      map[part] = toPart(part);
    }
    return anatomy$1(name, map);
  }
  function selectors() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.selector])
    );
    return value;
  }
  function classnames() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.className])
    );
    return value;
  }
  function toPart(part) {
    const el = ["container", "root"].includes(part != null ? part : "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  const __type = {};
  return {
    parts,
    toPart,
    extend,
    selectors,
    classnames,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}
var accordionAnatomy$1 = anatomy$1("accordion").parts("root", "container", "button", "panel").extend("icon");
var alertAnatomy = anatomy$1("alert").parts("title", "description", "container").extend("icon", "spinner");
var avatarAnatomy = anatomy$1("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy$1("breadcrumb").parts("link", "item", "container").extend("separator");
anatomy$1("button").parts();
var checkboxAnatomy$1 = anatomy$1("checkbox").parts("control", "icon", "container").extend("label");
anatomy$1("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy$1("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy$1("editable").parts(
  "preview",
  "input",
  "textarea"
);
var formAnatomy = anatomy$1("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
var formErrorAnatomy = anatomy$1("formError").parts("text", "icon");
var inputAnatomy$1 = anatomy$1("input").parts("addon", "field", "element");
var listAnatomy = anatomy$1("list").parts("container", "item", "icon");
var menuAnatomy$1 = anatomy$1("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
var modalAnatomy$1 = anatomy$1("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy$1 = anatomy$1("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
anatomy$1("pininput").parts("field");
var popoverAnatomy$1 = anatomy$1("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy$1 = anatomy$1("progress").parts(
  "label",
  "filledTrack",
  "track"
);
var radioAnatomy = anatomy$1("radio").parts(
  "container",
  "control",
  "label"
);
var selectAnatomy$1 = anatomy$1("select").parts("field", "icon");
var sliderAnatomy$1 = anatomy$1("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
var statAnatomy = anatomy$1("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
var switchAnatomy$1 = anatomy$1("switch").parts(
  "container",
  "track",
  "thumb"
);
var tableAnatomy = anatomy$1("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
var tabsAnatomy$1 = anatomy$1("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
var tagAnatomy = anatomy$1("tag").parts(
  "container",
  "label",
  "closeButton"
);
var cardAnatomy = anatomy$1("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function guard(low, high, value) {
  return Math.min(Math.max(low, value), high);
}
class ColorError extends Error {
  constructor(color) {
    super(`Failed to parse color: "${color}"`);
  }
}
var ColorError$1 = ColorError;
function parseToRgba(color) {
  if (typeof color !== "string")
    throw new ColorError$1(color);
  if (color.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let normalizedColor = color.trim();
  normalizedColor = namedColorRegex.test(color) ? nameToHex(color) : color;
  const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
  if (reducedHexMatch) {
    const arr = Array.from(reducedHexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(r(x, 2), 16)), parseInt(r(arr[3] || "f", 2), 16) / 255];
  }
  const hexMatch = hexRegex.exec(normalizedColor);
  if (hexMatch) {
    const arr = Array.from(hexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 16)), parseInt(arr[3] || "ff", 16) / 255];
  }
  const rgbaMatch = rgbaRegex.exec(normalizedColor);
  if (rgbaMatch) {
    const arr = Array.from(rgbaMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 10)), parseFloat(arr[3] || "1")];
  }
  const hslaMatch = hslaRegex.exec(normalizedColor);
  if (hslaMatch) {
    const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
    if (guard(0, 100, s) !== s)
      throw new ColorError$1(color);
    if (guard(0, 100, l) !== l)
      throw new ColorError$1(color);
    return [...hslToRgb(h, s, l), Number.isNaN(a) ? 1 : a];
  }
  throw new ColorError$1(color);
}
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i) {
    hash2 = hash2 * 33 ^ str.charCodeAt(--i);
  }
  return (hash2 >>> 0) % 2341;
}
const colorToInt = (x) => parseInt(x.replace(/_/g, ""), 36);
const compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next) => {
  const key = colorToInt(next.substring(0, 3));
  const hex = colorToInt(next.substring(3)).toString(16);
  let prefix = "";
  for (let i = 0; i < 6 - hex.length; i++) {
    prefix += "0";
  }
  acc[key] = `${prefix}${hex}`;
  return acc;
}, {});
function nameToHex(color) {
  const normalizedColorName = color.toLowerCase().trim();
  const result = compressedColorMap[hash(normalizedColorName)];
  if (!result)
    throw new ColorError$1(color);
  return `#${result}`;
}
const r = (str, amount) => Array.from(Array(amount)).map(() => str).join("");
const reducedHexRegex = new RegExp(`^#${r("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
const hexRegex = new RegExp(`^#${r("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
const rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
const hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
const namedColorRegex = /^[a-z]+$/i;
const roundColor = (color) => {
  return Math.round(color * 255);
};
const hslToRgb = (hue, saturation, lightness) => {
  let l = lightness / 100;
  if (saturation === 0) {
    return [l, l, l].map(roundColor);
  }
  const huePrime = (hue % 360 + 360) % 360 / 60;
  const chroma = (1 - Math.abs(2 * l - 1)) * (saturation / 100);
  const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  let red = 0;
  let green = 0;
  let blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  const lightnessModification = l - chroma / 2;
  const finalRed = red + lightnessModification;
  const finalGreen = green + lightnessModification;
  const finalBlue = blue + lightnessModification;
  return [finalRed, finalGreen, finalBlue].map(roundColor);
};
function rgba(red, green, blue, alpha) {
  return `rgba(${guard(0, 255, red).toFixed()}, ${guard(0, 255, green).toFixed()}, ${guard(0, 255, blue).toFixed()}, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
function transparentize$1(color, amount) {
  const [r2, g, b, a] = parseToRgba(color);
  return rgba(r2, g, b, a - amount);
}
function toHex(color) {
  const [r2, g, b, a] = parseToRgba(color);
  let hex = (x) => {
    const h = guard(0, 255, x).toString(16);
    return h.length === 1 ? `0${h}` : h;
  };
  return `#${hex(r2)}${hex(g)}${hex(b)}${a < 1 ? hex(Math.round(a * 255)) : ""}`;
}
function dlv_es_default(t, e, l, n, r2) {
  for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
    t = t ? t[e[n]] : r2;
  return t === r2 ? l : t;
}
var isEmptyObject = (obj) => Object.keys(obj).length === 0;
var getColor = (theme2, color, fallback) => {
  const hex = dlv_es_default(theme2, `colors.${color}`, color);
  try {
    toHex(hex);
    return hex;
  } catch {
    return fallback != null ? fallback : "#000000";
  }
};
var getBrightness = (color) => {
  const [r2, g, b] = parseToRgba(color);
  return (r2 * 299 + g * 587 + b * 114) / 1e3;
};
var tone = (color) => (theme2) => {
  const hex = getColor(theme2, color);
  const brightness = getBrightness(hex);
  const isDark2 = brightness < 128;
  return isDark2 ? "dark" : "light";
};
var isDark = (color) => (theme2) => tone(color)(theme2) === "dark";
var transparentize = (color, opacity) => (theme2) => {
  const raw = getColor(theme2, color);
  return transparentize$1(raw, 1 - opacity);
};
function generateStripe(size2 = "1rem", color = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${color} 25%,
    transparent 25%,
    transparent 50%,
    ${color} 50%,
    ${color} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${size2} ${size2}`
  };
}
var randomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function randomColor(opts) {
  const fallback = randomHex();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  let hash2 = 0;
  if (str.length === 0)
    return hash2.toString();
  for (let i = 0; i < str.length; i += 1) {
    hash2 = str.charCodeAt(i) + ((hash2 << 5) - hash2);
    hash2 = hash2 & hash2;
  }
  let color = "#";
  for (let j = 0; j < 3; j += 1) {
    const value = hash2 >> j * 8 & 255;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}
function randomColorFromList(str, list) {
  let index = 0;
  if (str.length === 0)
    return list[0];
  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list.length + list.length) % list.length;
  return list[index];
}
function randomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
function mode(light, dark) {
  return (props) => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}
function toRef(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpr = (operator, ...operands) => operands.map(toRef).join(` ${operator} `).replace(/calc/g, "");
var add = (...operands) => `calc(${toExpr("+", ...operands)})`;
var subtract = (...operands) => `calc(${toExpr("-", ...operands)})`;
var multiply = (...operands) => `calc(${toExpr("*", ...operands)})`;
var divide = (...operands) => `calc(${toExpr("/", ...operands)})`;
var negate = (x) => {
  const value = toRef(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply(value, -1);
};
var calc = Object.assign(
  (x) => ({
    add: (...operands) => calc(add(x, ...operands)),
    subtract: (...operands) => calc(subtract(x, ...operands)),
    multiply: (...operands) => calc(multiply(x, ...operands)),
    divide: (...operands) => calc(divide(x, ...operands)),
    negate: () => calc(negate(x)),
    toString: () => x.toString()
  }),
  {
    add,
    subtract,
    multiply,
    divide,
    negate
  }
);
function isDecimal$1(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace$1(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape$1(value) {
  const valueStr = replaceWhiteSpace$1(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal$1(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix$1(value, prefix = "") {
  return [prefix, escape$1(value)].filter(Boolean).join("-");
}
function toVarRef$1(name, fallback) {
  return `var(${escape$1(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar$1(value, prefix = "") {
  return `--${addPrefix$1(value, prefix)}`;
}
function cssVar$1(name, options) {
  const cssVariable = toVar$1(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef$1(cssVariable, getFallback$1(options == null ? void 0 : options.fallback))
  };
}
function getFallback$1(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}
var { defineMultiStyleConfig: defineMultiStyleConfig$A, definePartsStyle: definePartsStyle$A } = createMultiStyleConfigHelpers(switchAnatomy$1.keys);
var $width = cssVar$1("switch-track-width");
var $height = cssVar$1("switch-track-height");
var $diff = cssVar$1("switch-track-diff");
var diffValue = calc.subtract($width, $height);
var $translateX = cssVar$1("switch-thumb-x");
var $bg$e = cssVar$1("switch-bg");
var baseStyleTrack$2 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [$bg$e.variable]: "colors.gray.300",
    _dark: {
      [$bg$e.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [$bg$e.variable]: `colors.${c}.500`,
      _dark: {
        [$bg$e.variable]: `colors.${c}.200`
      }
    },
    bg: $bg$e.reference
  };
});
var baseStyleThumb$1 = defineStyle({
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`
  }
});
var baseStyle$E = definePartsStyle$A((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc($diff).negate().toString()
    }
  },
  track: baseStyleTrack$2(props),
  thumb: baseStyleThumb$1
}));
var sizes$l = {
  sm: definePartsStyle$A({
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "sizes.3"
    }
  }),
  md: definePartsStyle$A({
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "sizes.4"
    }
  }),
  lg: definePartsStyle$A({
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "sizes.6"
    }
  })
};
var switchTheme$1 = defineMultiStyleConfig$A({
  baseStyle: baseStyle$E,
  sizes: sizes$l,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$z, definePartsStyle: definePartsStyle$z } = createMultiStyleConfigHelpers(tableAnatomy.keys);
var baseStyle$D = definePartsStyle$z({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
});
var numericStyles = defineStyle({
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
});
var variantSimple = definePartsStyle$z((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variantStripe = definePartsStyle$z((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(`${c}.100`, `${c}.700`)(props)
          },
          td: {
            background: mode(`${c}.100`, `${c}.700`)(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variants$b = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({})
};
var sizes$k = {
  sm: definePartsStyle$z({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: definePartsStyle$z({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: definePartsStyle$z({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
};
var tableTheme = defineMultiStyleConfig$z({
  baseStyle: baseStyle$D,
  variants: variants$b,
  sizes: sizes$k,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
});
var $fg$6 = cssVar$2("tabs-color");
var $bg$d = cssVar$2("tabs-bg");
var $border$3 = cssVar$2("tabs-border-color");
var { defineMultiStyleConfig: defineMultiStyleConfig$y, definePartsStyle: definePartsStyle$y } = createMultiStyleConfigHelpers(tabsAnatomy$1.keys);
var baseStyleRoot$1 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
});
var baseStyleTab = defineStyle((props) => {
  const { isFitted } = props;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
});
var baseStyleTablist = defineStyle((props) => {
  const { align = "start", orientation } = props;
  const alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
});
var baseStyleTabpanel = defineStyle({
  p: 4
});
var baseStyle$C = definePartsStyle$y((props) => ({
  root: baseStyleRoot$1(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
}));
var sizes$j = {
  sm: definePartsStyle$y({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: definePartsStyle$y({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: definePartsStyle$y({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
};
var variantLine = definePartsStyle$y((props) => {
  const { colorScheme: c, orientation } = props;
  const isVertical = orientation === "vertical";
  const borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        [$fg$6.variable]: `colors.${c}.600`,
        _dark: {
          [$fg$6.variable]: `colors.${c}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [$bg$d.variable]: "colors.gray.200",
        _dark: {
          [$bg$d.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: $fg$6.reference,
      bg: $bg$d.reference
    }
  };
});
var variantEnclosed = definePartsStyle$y((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [$border$3.variable]: "transparent",
      _selected: {
        [$fg$6.variable]: `colors.${c}.600`,
        [$border$3.variable]: `colors.white`,
        _dark: {
          [$fg$6.variable]: `colors.${c}.300`,
          [$border$3.variable]: `colors.gray.800`
        },
        borderColor: "inherit",
        borderBottomColor: $border$3.reference
      },
      color: $fg$6.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantEnclosedColored = definePartsStyle$y((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [$bg$d.variable]: "colors.gray.50",
      _dark: {
        [$bg$d.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [$bg$d.variable]: "colors.white",
        [$fg$6.variable]: `colors.${c}.600`,
        _dark: {
          [$bg$d.variable]: "colors.gray.800",
          [$fg$6.variable]: `colors.${c}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: $fg$6.reference,
      bg: $bg$d.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantSoftRounded = definePartsStyle$y((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme2, `${c}.700`),
        bg: getColor(theme2, `${c}.100`)
      }
    }
  };
});
var variantSolidRounded = definePartsStyle$y((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [$fg$6.variable]: "colors.gray.600",
      _dark: {
        [$fg$6.variable]: "inherit"
      },
      _selected: {
        [$fg$6.variable]: "colors.white",
        [$bg$d.variable]: `colors.${c}.600`,
        _dark: {
          [$fg$6.variable]: "colors.gray.800",
          [$bg$d.variable]: `colors.${c}.300`
        }
      },
      color: $fg$6.reference,
      bg: $bg$d.reference
    }
  };
});
var variantUnstyled$2 = definePartsStyle$y({});
var variants$a = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled$2
};
var tabsTheme$1 = defineMultiStyleConfig$y({
  baseStyle: baseStyle$C,
  sizes: sizes$j,
  variants: variants$a,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
});
var baseStyle$B = defineStyle({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
});
var $bg$c = cssVar$2("badge-bg");
var $fg$5 = cssVar$2("badge-color");
var variantSolid$3 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const dark = transparentize(`${c}.500`, 0.6)(theme2);
  return {
    [$bg$c.variable]: `colors.${c}.500`,
    [$fg$5.variable]: `colors.white`,
    _dark: {
      [$bg$c.variable]: dark,
      [$fg$5.variable]: `colors.whiteAlpha.800`
    },
    bg: $bg$c.reference,
    color: $fg$5.reference
  };
});
var variantSubtle$1 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkBg = transparentize(`${c}.200`, 0.16)(theme2);
  return {
    [$bg$c.variable]: `colors.${c}.100`,
    [$fg$5.variable]: `colors.${c}.800`,
    _dark: {
      [$bg$c.variable]: darkBg,
      [$fg$5.variable]: `colors.${c}.200`
    },
    bg: $bg$c.reference,
    color: $fg$5.reference
  };
});
var variantOutline$2 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkColor = transparentize(`${c}.200`, 0.8)(theme2);
  return {
    [$fg$5.variable]: `colors.${c}.500`,
    _dark: {
      [$fg$5.variable]: darkColor
    },
    color: $fg$5.reference,
    boxShadow: `inset 0 0 0px 1px ${$fg$5.reference}`
  };
});
var variants$9 = {
  solid: variantSolid$3,
  subtle: variantSubtle$1,
  outline: variantOutline$2
};
var badgeTheme = defineStyleConfig({
  baseStyle: baseStyle$B,
  variants: variants$9,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$x, definePartsStyle: definePartsStyle$x } = createMultiStyleConfigHelpers(tagAnatomy.keys);
var baseStyleContainer$4 = defineStyle({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  borderRadius: "md",
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyleLabel$3 = defineStyle({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton$3 = defineStyle({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
var baseStyle$A = definePartsStyle$x({
  container: baseStyleContainer$4,
  label: baseStyleLabel$3,
  closeButton: baseStyleCloseButton$3
});
var sizes$i = {
  sm: definePartsStyle$x({
    container: {
      minH: "5",
      minW: "5",
      fontSize: "xs",
      px: "2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle$x({
    container: {
      minH: "6",
      minW: "6",
      fontSize: "sm",
      px: "2"
    }
  }),
  lg: definePartsStyle$x({
    container: {
      minH: "8",
      minW: "8",
      fontSize: "md",
      px: "3"
    }
  })
};
var variants$8 = {
  subtle: definePartsStyle$x((props) => {
    var _a4;
    return {
      container: (_a4 = badgeTheme.variants) == null ? void 0 : _a4.subtle(props)
    };
  }),
  solid: definePartsStyle$x((props) => {
    var _a4;
    return {
      container: (_a4 = badgeTheme.variants) == null ? void 0 : _a4.solid(props)
    };
  }),
  outline: definePartsStyle$x((props) => {
    var _a4;
    return {
      container: (_a4 = badgeTheme.variants) == null ? void 0 : _a4.outline(props)
    };
  })
};
var tagTheme = defineMultiStyleConfig$x({
  variants: variants$8,
  baseStyle: baseStyle$A,
  sizes: sizes$i,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});
var { definePartsStyle: definePartsStyle$w, defineMultiStyleConfig: defineMultiStyleConfig$w } = createMultiStyleConfigHelpers(inputAnatomy$1.keys);
var baseStyle$z = definePartsStyle$w({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: defineStyle({
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  })
};
var sizes$h = {
  lg: definePartsStyle$w({
    field: size.lg,
    addon: size.lg
  }),
  md: definePartsStyle$w({
    field: size.md,
    addon: size.md
  }),
  sm: definePartsStyle$w({
    field: size.sm,
    addon: size.sm
  }),
  xs: definePartsStyle$w({
    field: size.xs,
    addon: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}
var variantOutline$1 = definePartsStyle$w((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0 0 0 1px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme2, fc),
        boxShadow: `0 0 0 1px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle$w((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme2, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle$w((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        borderColor: getColor(theme2, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled$1 = definePartsStyle$w({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants$7 = {
  outline: variantOutline$1,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled$1
};
var inputTheme$1 = defineMultiStyleConfig$w({
  baseStyle: baseStyle$z,
  sizes: sizes$h,
  variants: variants$7,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});
var _a$2;
var baseStyle$y = defineStyle({
  ...(_a$2 = inputTheme$1.baseStyle) == null ? void 0 : _a$2.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
var _a2$2, _b$2;
var variants$6 = {
  outline: defineStyle(
    (props) => {
      var _a4, _b3;
      return (_b3 = (_a4 = inputTheme$1.variants) == null ? void 0 : _a4.outline(props).field) != null ? _b3 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a4, _b3;
      return (_b3 = (_a4 = inputTheme$1.variants) == null ? void 0 : _a4.flushed(props).field) != null ? _b3 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a4, _b3;
      return (_b3 = (_a4 = inputTheme$1.variants) == null ? void 0 : _a4.filled(props).field) != null ? _b3 : {};
    }
  ),
  unstyled: (_b$2 = (_a2$2 = inputTheme$1.variants) == null ? void 0 : _a2$2.unstyled.field) != null ? _b$2 : {}
};
var _a3, _b2, _c$1, _d$1, _e$1, _f$1, _g$1, _h$1;
var sizes$g = {
  xs: (_b2 = (_a3 = inputTheme$1.sizes) == null ? void 0 : _a3.xs.field) != null ? _b2 : {},
  sm: (_d$1 = (_c$1 = inputTheme$1.sizes) == null ? void 0 : _c$1.sm.field) != null ? _d$1 : {},
  md: (_f$1 = (_e$1 = inputTheme$1.sizes) == null ? void 0 : _e$1.md.field) != null ? _f$1 : {},
  lg: (_h$1 = (_g$1 = inputTheme$1.sizes) == null ? void 0 : _g$1.lg.field) != null ? _h$1 : {}
};
var textareaTheme$1 = defineStyleConfig({
  baseStyle: baseStyle$y,
  sizes: sizes$g,
  variants: variants$6,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});
var $bg$b = cssVar$1("tooltip-bg");
var $fg$4 = cssVar$1("tooltip-fg");
var $arrowBg$2 = cssVar$1("popper-arrow-bg");
var baseStyle$x = defineStyle({
  bg: $bg$b.reference,
  color: $fg$4.reference,
  [$bg$b.variable]: "colors.gray.700",
  [$fg$4.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$bg$b.variable]: "colors.gray.300",
    [$fg$4.variable]: "colors.gray.900"
  },
  [$arrowBg$2.variable]: $bg$b.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
});
var tooltipTheme = defineStyleConfig({
  baseStyle: baseStyle$x
});
var { defineMultiStyleConfig: defineMultiStyleConfig$v, definePartsStyle: definePartsStyle$v } = createMultiStyleConfigHelpers(progressAnatomy$1.keys);
var filledStyle = defineStyle((props) => {
  const { colorScheme: c, theme: t, isIndeterminate, hasStripe } = props;
  const stripeStyle = mode(
    generateStripe(),
    generateStripe("1rem", "rgba(0,0,0,0.1)")
  )(props);
  const bgColor = mode(`${c}.500`, `${c}.200`)(props);
  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t, bgColor)} 50%,
    transparent 100%
  )`;
  const addStripe = !isIndeterminate && hasStripe;
  return {
    ...addStripe && stripeStyle,
    ...isIndeterminate ? { bgImage: gradient } : { bgColor }
  };
});
var baseStyleLabel$2 = defineStyle({
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
});
var baseStyleTrack$1 = defineStyle((props) => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
});
var baseStyleFilledTrack$1 = defineStyle((props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props)
  };
});
var baseStyle$w = definePartsStyle$v((props) => ({
  label: baseStyleLabel$2,
  filledTrack: baseStyleFilledTrack$1(props),
  track: baseStyleTrack$1(props)
}));
var sizes$f = {
  xs: definePartsStyle$v({
    track: { h: "1" }
  }),
  sm: definePartsStyle$v({
    track: { h: "2" }
  }),
  md: definePartsStyle$v({
    track: { h: "3" }
  }),
  lg: definePartsStyle$v({
    track: { h: "4" }
  })
};
var progressTheme$1 = defineMultiStyleConfig$v({
  sizes: sizes$f,
  baseStyle: baseStyle$w,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var isFunction$1 = (value) => typeof value === "function";
function runIfFn(valueOrFn, ...args) {
  return isFunction$1(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
var { definePartsStyle: definePartsStyle$u, defineMultiStyleConfig: defineMultiStyleConfig$u } = createMultiStyleConfigHelpers(checkboxAnatomy$1.keys);
var $size$2 = cssVar$2("checkbox-size");
var baseStyleControl$1 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    w: $size$2.reference,
    h: $size$2.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: mode(`${c}.600`, `${c}.300`)(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
});
var baseStyleContainer$3 = defineStyle({
  _disabled: { cursor: "not-allowed" }
});
var baseStyleLabel$1 = defineStyle({
  userSelect: "none",
  _disabled: { opacity: 0.4 }
});
var baseStyleIcon$5 = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal"
});
var baseStyle$v = definePartsStyle$u((props) => ({
  icon: baseStyleIcon$5,
  container: baseStyleContainer$3,
  control: runIfFn(baseStyleControl$1, props),
  label: baseStyleLabel$1
}));
var sizes$e = {
  sm: definePartsStyle$u({
    control: { [$size$2.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: definePartsStyle$u({
    control: { [$size$2.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: definePartsStyle$u({
    control: { [$size$2.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
};
var checkboxTheme$1 = defineMultiStyleConfig$u({
  baseStyle: baseStyle$v,
  sizes: sizes$e,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$t, definePartsStyle: definePartsStyle$t } = createMultiStyleConfigHelpers(radioAnatomy.keys);
var baseStyleControl = defineStyle((props) => {
  var _a4;
  const controlStyle = (_a4 = runIfFn(checkboxTheme$1.baseStyle, props)) == null ? void 0 : _a4.control;
  return {
    ...controlStyle,
    borderRadius: "full",
    _checked: {
      ...controlStyle == null ? void 0 : controlStyle["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
});
var baseStyle$u = definePartsStyle$t((props) => {
  var _a4, _b3, _c2, _d2;
  return {
    label: (_b3 = (_a4 = checkboxTheme$1).baseStyle) == null ? void 0 : _b3.call(_a4, props).label,
    container: (_d2 = (_c2 = checkboxTheme$1).baseStyle) == null ? void 0 : _d2.call(_c2, props).container,
    control: baseStyleControl(props)
  };
});
var sizes$d = {
  md: definePartsStyle$t({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: definePartsStyle$t({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: definePartsStyle$t({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
};
var radioTheme = defineMultiStyleConfig$t({
  baseStyle: baseStyle$u,
  sizes: sizes$d,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$s, definePartsStyle: definePartsStyle$s } = createMultiStyleConfigHelpers(selectAnatomy$1.keys);
var $bg$a = cssVar$2("select-bg");
var _a$1;
var baseStyleField$1 = defineStyle({
  ...(_a$1 = inputTheme$1.baseStyle) == null ? void 0 : _a$1.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $bg$a.reference,
  [$bg$a.variable]: "colors.white",
  _dark: {
    [$bg$a.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: $bg$a.reference
  }
});
var baseStyleIcon$4 = defineStyle({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
});
var baseStyle$t = definePartsStyle$s({
  field: baseStyleField$1,
  icon: baseStyleIcon$4
});
var iconSpacing = defineStyle({
  paddingInlineEnd: "8"
});
var _a2$1, _b$1, _c, _d, _e, _f, _g, _h;
var sizes$c = {
  lg: {
    ...(_a2$1 = inputTheme$1.sizes) == null ? void 0 : _a2$1.lg,
    field: {
      ...(_b$1 = inputTheme$1.sizes) == null ? void 0 : _b$1.lg.field,
      ...iconSpacing
    }
  },
  md: {
    ...(_c = inputTheme$1.sizes) == null ? void 0 : _c.md,
    field: {
      ...(_d = inputTheme$1.sizes) == null ? void 0 : _d.md.field,
      ...iconSpacing
    }
  },
  sm: {
    ...(_e = inputTheme$1.sizes) == null ? void 0 : _e.sm,
    field: {
      ...(_f = inputTheme$1.sizes) == null ? void 0 : _f.sm.field,
      ...iconSpacing
    }
  },
  xs: {
    ...(_g = inputTheme$1.sizes) == null ? void 0 : _g.xs,
    field: {
      ...(_h = inputTheme$1.sizes) == null ? void 0 : _h.xs.field,
      ...iconSpacing
    },
    icon: {
      insetEnd: "1"
    }
  }
};
var selectTheme$1 = defineMultiStyleConfig$s({
  baseStyle: baseStyle$t,
  sizes: sizes$c,
  variants: inputTheme$1.variants,
  defaultProps: inputTheme$1.defaultProps
});
var $startColor = cssVar$2("skeleton-start-color");
var $endColor = cssVar$2("skeleton-end-color");
var baseStyle$s = defineStyle({
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.400",
  _dark: {
    [$startColor.variable]: "colors.gray.800",
    [$endColor.variable]: "colors.gray.600"
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.7,
  borderRadius: "sm"
});
var skeletonTheme = defineStyleConfig({
  baseStyle: baseStyle$s
});
var $bg$9 = cssVar$2("skip-link-bg");
var baseStyle$r = defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$bg$9.variable]: "colors.white",
    _dark: {
      [$bg$9.variable]: "colors.gray.700"
    },
    bg: $bg$9.reference
  }
});
var skipLinkTheme = defineStyleConfig({
  baseStyle: baseStyle$r
});
var { defineMultiStyleConfig: defineMultiStyleConfig$r, definePartsStyle: definePartsStyle$r } = createMultiStyleConfigHelpers(sliderAnatomy$1.keys);
var $thumbSize = cssVar$2("slider-thumb-size");
var $trackSize = cssVar$2("slider-track-size");
var $bg$8 = cssVar$2("slider-bg");
var baseStyleContainer$2 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...orient({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
});
var baseStyleTrack = defineStyle((props) => {
  const orientationStyles = orient({
    orientation: props.orientation,
    horizontal: { h: $trackSize.reference },
    vertical: { w: $trackSize.reference }
  });
  return {
    ...orientationStyles,
    overflow: "hidden",
    borderRadius: "sm",
    [$bg$8.variable]: "colors.gray.200",
    _dark: {
      [$bg$8.variable]: "colors.whiteAlpha.200"
    },
    _disabled: {
      [$bg$8.variable]: "colors.gray.300",
      _dark: {
        [$bg$8.variable]: "colors.whiteAlpha.300"
      }
    },
    bg: $bg$8.reference
  };
});
var baseStyleThumb = defineStyle((props) => {
  const { orientation } = props;
  const orientationStyle = orient({
    orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`
      }
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`
      }
    }
  });
  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
});
var baseStyleFilledTrack = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    width: "inherit",
    height: "inherit",
    [$bg$8.variable]: `colors.${c}.500`,
    _dark: {
      [$bg$8.variable]: `colors.${c}.200`
    },
    bg: $bg$8.reference
  };
});
var baseStyle$q = definePartsStyle$r((props) => ({
  container: baseStyleContainer$2(props),
  track: baseStyleTrack(props),
  thumb: baseStyleThumb(props),
  filledTrack: baseStyleFilledTrack(props)
}));
var sizeLg = definePartsStyle$r({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeMd = definePartsStyle$r({
  container: {
    [$thumbSize.variable]: `sizes.3.5`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeSm = definePartsStyle$r({
  container: {
    [$thumbSize.variable]: `sizes.2.5`,
    [$trackSize.variable]: `sizes.0.5`
  }
});
var sizes$b = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var sliderTheme$1 = defineMultiStyleConfig$r({
  baseStyle: baseStyle$q,
  sizes: sizes$b,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var $size$1 = cssVar$1("spinner-size");
var baseStyle$p = defineStyle({
  width: [$size$1.reference],
  height: [$size$1.reference]
});
var sizes$a = {
  xs: defineStyle({
    [$size$1.variable]: "sizes.3"
  }),
  sm: defineStyle({
    [$size$1.variable]: "sizes.4"
  }),
  md: defineStyle({
    [$size$1.variable]: "sizes.6"
  }),
  lg: defineStyle({
    [$size$1.variable]: "sizes.8"
  }),
  xl: defineStyle({
    [$size$1.variable]: "sizes.12"
  })
};
var spinnerTheme = defineStyleConfig({
  baseStyle: baseStyle$p,
  sizes: sizes$a,
  defaultProps: {
    size: "md"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$q, definePartsStyle: definePartsStyle$q } = createMultiStyleConfigHelpers(statAnatomy.keys);
var baseStyleLabel = defineStyle({
  fontWeight: "medium"
});
var baseStyleHelpText = defineStyle({
  opacity: 0.8,
  marginBottom: "2"
});
var baseStyleNumber = defineStyle({
  verticalAlign: "baseline",
  fontWeight: "semibold"
});
var baseStyleIcon$3 = defineStyle({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
});
var baseStyle$o = definePartsStyle$q({
  container: {},
  label: baseStyleLabel,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon$3
});
var sizes$9 = {
  md: definePartsStyle$q({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
};
var statTheme = defineMultiStyleConfig$q({
  baseStyle: baseStyle$o,
  sizes: sizes$9,
  defaultProps: {
    size: "md"
  }
});
var $bg$7 = cssVar$2("kbd-bg");
var baseStyle$n = defineStyle({
  [$bg$7.variable]: "colors.gray.100",
  _dark: {
    [$bg$7.variable]: "colors.whiteAlpha.100"
  },
  bg: $bg$7.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
});
var kbdTheme = defineStyleConfig({
  baseStyle: baseStyle$n
});
var baseStyle$m = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var linkTheme = defineStyleConfig({
  baseStyle: baseStyle$m
});
var { defineMultiStyleConfig: defineMultiStyleConfig$p, definePartsStyle: definePartsStyle$p } = createMultiStyleConfigHelpers(listAnatomy.keys);
var baseStyleIcon$2 = defineStyle({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
});
var baseStyle$l = definePartsStyle$p({
  icon: baseStyleIcon$2
});
var listTheme = defineMultiStyleConfig$p({
  baseStyle: baseStyle$l
});
var { defineMultiStyleConfig: defineMultiStyleConfig$o, definePartsStyle: definePartsStyle$o } = createMultiStyleConfigHelpers(menuAnatomy$1.keys);
var $bg$6 = cssVar$2("menu-bg");
var $shadow$1 = cssVar$2("menu-shadow");
var baseStyleList = defineStyle({
  [$bg$6.variable]: "#fff",
  [$shadow$1.variable]: "shadows.sm",
  _dark: {
    [$bg$6.variable]: "colors.gray.700",
    [$shadow$1.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: $bg$6.reference,
  boxShadow: $shadow$1.reference
});
var baseStyleItem = defineStyle({
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [$bg$6.variable]: "colors.gray.100",
    _dark: {
      [$bg$6.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg$6.variable]: "colors.gray.200",
    _dark: {
      [$bg$6.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [$bg$6.variable]: "colors.gray.100",
    _dark: {
      [$bg$6.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: $bg$6.reference
});
var baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
});
var baseStyleCommand = defineStyle({
  opacity: 0.6
});
var baseStyleDivider = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
});
var baseStyleButton$1 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyle$k = definePartsStyle$o({
  button: baseStyleButton$1,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider
});
var menuTheme$1 = defineMultiStyleConfig$o({
  baseStyle: baseStyle$k
});
var { defineMultiStyleConfig: defineMultiStyleConfig$n, definePartsStyle: definePartsStyle$n } = createMultiStyleConfigHelpers(modalAnatomy$1.keys);
var baseStyleOverlay$1 = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer$1 = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
});
var baseStyleDialog$1 = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    borderRadius: "md",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    my: "16",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: mode("lg", "dark-lg")(props)
  };
});
var baseStyleHeader$2 = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton$2 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody$2 = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
});
var baseStyleFooter$2 = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle$j = definePartsStyle$n((props) => ({
  overlay: baseStyleOverlay$1,
  dialogContainer: runIfFn(baseStyleDialogContainer$1, props),
  dialog: runIfFn(baseStyleDialog$1, props),
  header: baseStyleHeader$2,
  closeButton: baseStyleCloseButton$2,
  body: runIfFn(baseStyleBody$2, props),
  footer: baseStyleFooter$2
}));
function getSize$3(value) {
  if (value === "full") {
    return definePartsStyle$n({
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0"
      }
    });
  }
  return definePartsStyle$n({
    dialog: { maxW: value }
  });
}
var sizes$8 = {
  xs: getSize$3("xs"),
  sm: getSize$3("sm"),
  md: getSize$3("md"),
  lg: getSize$3("lg"),
  xl: getSize$3("xl"),
  "2xl": getSize$3("2xl"),
  "3xl": getSize$3("3xl"),
  "4xl": getSize$3("4xl"),
  "5xl": getSize$3("5xl"),
  "6xl": getSize$3("6xl"),
  full: getSize$3("full")
};
var modalTheme$1 = defineMultiStyleConfig$n({
  baseStyle: baseStyle$j,
  sizes: sizes$8,
  defaultProps: { size: "md" }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$m, definePartsStyle: definePartsStyle$m } = createMultiStyleConfigHelpers(numberInputAnatomy$1.keys);
var $stepperWidth = cssVar$1("number-input-stepper-width");
var $inputPadding = cssVar$1("number-input-input-padding");
var inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();
var $bg$5 = cssVar$1("number-input-bg");
var $fg$3 = cssVar$1("number-input-color");
var $border$2 = cssVar$1("number-input-border-color");
var baseStyleRoot = defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
var baseStyleField = defineStyle(
  (props) => {
    var _a4, _b3;
    return (_b3 = (_a4 = runIfFn(inputTheme$1.baseStyle, props)) == null ? void 0 : _a4.field) != null ? _b3 : {};
  }
);
var baseStyleStepperGroup = defineStyle({
  width: $stepperWidth.reference
});
var baseStyleStepper = defineStyle({
  borderStart: "1px solid",
  borderStartColor: $border$2.reference,
  color: $fg$3.reference,
  bg: $bg$5.reference,
  [$fg$3.variable]: "colors.chakra-body-text",
  [$border$2.variable]: "colors.chakra-border-color",
  _dark: {
    [$fg$3.variable]: "colors.whiteAlpha.800",
    [$border$2.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [$bg$5.variable]: "colors.gray.200",
    _dark: {
      [$bg$5.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
});
var baseStyle$i = definePartsStyle$m((props) => {
  var _a4;
  return {
    root: baseStyleRoot,
    field: (_a4 = runIfFn(baseStyleField, props)) != null ? _a4 : {},
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper
  };
});
function getSize$2(size2) {
  var _a4, _b3, _c2;
  const sizeStyle = (_a4 = inputTheme$1.sizes) == null ? void 0 : _a4[size2];
  const radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  const _fontSize = (_c2 = (_b3 = sizeStyle.field) == null ? void 0 : _b3.fontSize) != null ? _c2 : "md";
  const fontSize = typography_default.fontSizes[_fontSize];
  return definePartsStyle$m({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: calc(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var sizes$7 = {
  xs: getSize$2("xs"),
  sm: getSize$2("sm"),
  md: getSize$2("md"),
  lg: getSize$2("lg")
};
var numberInputTheme$1 = defineMultiStyleConfig$m({
  baseStyle: baseStyle$i,
  sizes: sizes$7,
  variants: inputTheme$1.variants,
  defaultProps: inputTheme$1.defaultProps
});
var _a;
var baseStyle$h = defineStyle({
  ...(_a = inputTheme$1.baseStyle) == null ? void 0 : _a.field,
  textAlign: "center"
});
var sizes$6 = {
  lg: defineStyle({
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  })
};
var _a2, _b;
var variants$5 = {
  outline: defineStyle(
    (props) => {
      var _a32, _b22, _c2;
      return (_c2 = (_b22 = runIfFn((_a32 = inputTheme$1.variants) == null ? void 0 : _a32.outline, props)) == null ? void 0 : _b22.field) != null ? _c2 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a32, _b22, _c2;
      return (_c2 = (_b22 = runIfFn((_a32 = inputTheme$1.variants) == null ? void 0 : _a32.flushed, props)) == null ? void 0 : _b22.field) != null ? _c2 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a32, _b22, _c2;
      return (_c2 = (_b22 = runIfFn((_a32 = inputTheme$1.variants) == null ? void 0 : _a32.filled, props)) == null ? void 0 : _b22.field) != null ? _c2 : {};
    }
  ),
  unstyled: (_b = (_a2 = inputTheme$1.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
};
var pinInputTheme = defineStyleConfig({
  baseStyle: baseStyle$h,
  sizes: sizes$6,
  variants: variants$5,
  defaultProps: inputTheme$1.defaultProps
});
var { defineMultiStyleConfig: defineMultiStyleConfig$l, definePartsStyle: definePartsStyle$l } = createMultiStyleConfigHelpers(popoverAnatomy$1.keys);
var $popperBg$1 = cssVar$1("popper-bg");
var $arrowBg$1 = cssVar$1("popper-arrow-bg");
var $arrowShadowColor$1 = cssVar$1("popper-arrow-shadow-color");
var baseStylePopper = defineStyle({ zIndex: 10 });
var baseStyleContent = defineStyle({
  [$popperBg$1.variable]: `colors.white`,
  bg: $popperBg$1.reference,
  [$arrowBg$1.variable]: $popperBg$1.reference,
  [$arrowShadowColor$1.variable]: `colors.gray.200`,
  _dark: {
    [$popperBg$1.variable]: `colors.gray.700`,
    [$arrowShadowColor$1.variable]: `colors.whiteAlpha.300`
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
});
var baseStyleHeader$1 = defineStyle({
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
});
var baseStyleBody$1 = defineStyle({
  px: 3,
  py: 2
});
var baseStyleFooter$1 = defineStyle({
  px: 3,
  py: 2,
  borderTopWidth: "1px"
});
var baseStyleCloseButton$1 = defineStyle({
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
});
var baseStyle$g = definePartsStyle$l({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader$1,
  body: baseStyleBody$1,
  footer: baseStyleFooter$1,
  closeButton: baseStyleCloseButton$1
});
var popoverTheme$1 = defineMultiStyleConfig$l({
  baseStyle: baseStyle$g
});
var { definePartsStyle: definePartsStyle$k, defineMultiStyleConfig: defineMultiStyleConfig$k } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
var $bg$4 = cssVar$2("drawer-bg");
var $bs = cssVar$2("drawer-box-shadow");
function getSize$1(value) {
  if (value === "full") {
    return definePartsStyle$k({
      dialog: { maxW: "100vw", h: "100vh" }
    });
  }
  return definePartsStyle$k({
    dialog: { maxW: value }
  });
}
var baseStyleOverlay = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "overlay"
});
var baseStyleDialogContainer = defineStyle({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
});
var baseStyleDialog = defineStyle((props) => {
  const { isFullHeight } = props;
  return {
    ...isFullHeight && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$bg$4.variable]: "colors.white",
    [$bs.variable]: "shadows.lg",
    _dark: {
      [$bg$4.variable]: "colors.gray.700",
      [$bs.variable]: "shadows.dark-lg"
    },
    bg: $bg$4.reference,
    boxShadow: $bs.reference
  };
});
var baseStyleHeader = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody = defineStyle({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
});
var baseStyleFooter = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle$f = definePartsStyle$k((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter
}));
var sizes$5 = {
  xs: getSize$1("xs"),
  sm: getSize$1("md"),
  md: getSize$1("lg"),
  lg: getSize$1("2xl"),
  xl: getSize$1("4xl"),
  full: getSize$1("full")
};
var drawerTheme = defineMultiStyleConfig$k({
  baseStyle: baseStyle$f,
  sizes: sizes$5,
  defaultProps: {
    size: "xs"
  }
});
var { definePartsStyle: definePartsStyle$j, defineMultiStyleConfig: defineMultiStyleConfig$j } = createMultiStyleConfigHelpers(editableAnatomy.keys);
var baseStylePreview = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyleInput = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyleTextarea = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyle$e = definePartsStyle$j({
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
});
var editableTheme = defineMultiStyleConfig$j({
  baseStyle: baseStyle$e
});
var { definePartsStyle: definePartsStyle$i, defineMultiStyleConfig: defineMultiStyleConfig$i } = createMultiStyleConfigHelpers(formAnatomy.keys);
var $fg$2 = cssVar$2("form-control-color");
var baseStyleRequiredIndicator = defineStyle({
  marginStart: "1",
  [$fg$2.variable]: "colors.red.500",
  _dark: {
    [$fg$2.variable]: "colors.red.300"
  },
  color: $fg$2.reference
});
var baseStyleHelperText = defineStyle({
  mt: "2",
  [$fg$2.variable]: "colors.gray.600",
  _dark: {
    [$fg$2.variable]: "colors.whiteAlpha.600"
  },
  color: $fg$2.reference,
  lineHeight: "normal",
  fontSize: "sm"
});
var baseStyle$d = definePartsStyle$i({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});
var formTheme = defineMultiStyleConfig$i({
  baseStyle: baseStyle$d
});
var { definePartsStyle: definePartsStyle$h, defineMultiStyleConfig: defineMultiStyleConfig$h } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);
var $fg$1 = cssVar$2("form-error-color");
var baseStyleText = defineStyle({
  [$fg$1.variable]: `colors.red.500`,
  _dark: {
    [$fg$1.variable]: `colors.red.300`
  },
  color: $fg$1.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
});
var baseStyleIcon$1 = defineStyle({
  marginEnd: "0.5em",
  [$fg$1.variable]: `colors.red.500`,
  _dark: {
    [$fg$1.variable]: `colors.red.300`
  },
  color: $fg$1.reference
});
var baseStyle$c = definePartsStyle$h({
  text: baseStyleText,
  icon: baseStyleIcon$1
});
var formErrorTheme = defineMultiStyleConfig$h({
  baseStyle: baseStyle$c
});
var baseStyle$b = defineStyle({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
var formLabelTheme$1 = defineStyleConfig({
  baseStyle: baseStyle$b
});
var baseStyle$a = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold"
});
var sizes$4 = {
  "4xl": defineStyle({
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  }),
  "3xl": defineStyle({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  }),
  "2xl": defineStyle({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  }),
  xl: defineStyle({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  lg: defineStyle({
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  md: defineStyle({
    fontSize: "xl",
    lineHeight: 1.2
  }),
  sm: defineStyle({
    fontSize: "md",
    lineHeight: 1.2
  }),
  xs: defineStyle({
    fontSize: "sm",
    lineHeight: 1.2
  })
};
var headingTheme = defineStyleConfig({
  baseStyle: baseStyle$a,
  sizes: sizes$4,
  defaultProps: {
    size: "xl"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$g, definePartsStyle: definePartsStyle$g } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
var baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyle$9 = definePartsStyle$g({
  link: baseStyleLink
});
var breadcrumbTheme = defineMultiStyleConfig$g({
  baseStyle: baseStyle$9
});
var baseStyle$8 = defineStyle({
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
});
var variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }
  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme2);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme2);
  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props)
    }
  };
});
var variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...runIfFn(variantGhost, props)
  };
});
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid$2 = defineStyle((props) => {
  var _a4;
  const { colorScheme: c } = props;
  if (c === "gray") {
    const bg2 = mode(`gray.100`, `whiteAlpha.200`)(props);
    return {
      bg: bg2,
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg: bg2
        }
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) }
    };
  }
  const {
    bg = `${c}.500`,
    color = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`
  } = (_a4 = accessibleColorMap[c]) != null ? _a4 : {};
  const background = mode(bg, `${c}.200`)(props);
  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background
      }
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) }
  };
});
var variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantUnstyled = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
});
var variants$4 = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid$2,
  link: variantLink,
  unstyled: variantUnstyled
};
var sizes$3 = {
  lg: defineStyle({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  }),
  md: defineStyle({
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  }),
  sm: defineStyle({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  }),
  xs: defineStyle({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  })
};
var buttonTheme$1 = defineStyleConfig({
  baseStyle: baseStyle$8,
  variants: variants$4,
  sizes: sizes$3,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
});
var { definePartsStyle: definePartsStyle$f, defineMultiStyleConfig: defineMultiStyleConfig$f } = createMultiStyleConfigHelpers(cardAnatomy.keys);
var $bg$3 = cssVar$2("card-bg");
var $padding = cssVar$2("card-padding");
var $shadow = cssVar$2("card-shadow");
var $radius = cssVar$2("card-radius");
var $border$1 = cssVar$2("card-border-width", "0");
var $borderColor = cssVar$2("card-border-color");
var baseStyle$7 = definePartsStyle$f({
  container: {
    [$bg$3.variable]: "colors.chakra-body-bg",
    backgroundColor: $bg$3.reference,
    boxShadow: $shadow.reference,
    borderRadius: $radius.reference,
    color: "chakra-body-text",
    borderWidth: $border$1.reference,
    borderColor: $borderColor.reference
  },
  body: {
    padding: $padding.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: $padding.reference
  },
  footer: {
    padding: $padding.reference
  }
});
var sizes$2 = {
  sm: definePartsStyle$f({
    container: {
      [$radius.variable]: "radii.base",
      [$padding.variable]: "space.3"
    }
  }),
  md: definePartsStyle$f({
    container: {
      [$radius.variable]: "radii.md",
      [$padding.variable]: "space.5"
    }
  }),
  lg: definePartsStyle$f({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding.variable]: "space.7"
    }
  })
};
var variants$3 = {
  elevated: definePartsStyle$f({
    container: {
      [$shadow.variable]: "shadows.base",
      _dark: {
        [$bg$3.variable]: "colors.gray.700"
      }
    }
  }),
  outline: definePartsStyle$f({
    container: {
      [$border$1.variable]: "1px",
      [$borderColor.variable]: "colors.chakra-border-color"
    }
  }),
  filled: definePartsStyle$f({
    container: {
      [$bg$3.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [$padding.variable]: 0
    },
    header: {
      [$padding.variable]: 0
    },
    footer: {
      [$padding.variable]: 0
    }
  }
};
var cardTheme = defineMultiStyleConfig$f({
  baseStyle: baseStyle$7,
  variants: variants$3,
  sizes: sizes$2,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
});
var $size = cssVar$1("close-button-size");
var $bg$2 = cssVar$1("close-button-bg");
var baseStyle$6 = defineStyle({
  w: [$size.reference],
  h: [$size.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [$bg$2.variable]: "colors.blackAlpha.100",
    _dark: {
      [$bg$2.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg$2.variable]: "colors.blackAlpha.200",
    _dark: {
      [$bg$2.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: $bg$2.reference
});
var sizes$1 = {
  lg: defineStyle({
    [$size.variable]: "sizes.10",
    fontSize: "md"
  }),
  md: defineStyle({
    [$size.variable]: "sizes.8",
    fontSize: "xs"
  }),
  sm: defineStyle({
    [$size.variable]: "sizes.6",
    fontSize: "2xs"
  })
};
var closeButtonTheme = defineStyleConfig({
  baseStyle: baseStyle$6,
  sizes: sizes$1,
  defaultProps: {
    size: "md"
  }
});
var { variants: variants$2, defaultProps } = badgeTheme;
var baseStyle$5 = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
});
var codeTheme = defineStyleConfig({
  baseStyle: baseStyle$5,
  variants: variants$2,
  defaultProps
});
var baseStyle$4 = defineStyle({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
var containerTheme = defineStyleConfig({
  baseStyle: baseStyle$4
});
var baseStyle$3 = defineStyle({
  opacity: 0.6,
  borderColor: "inherit"
});
var variantSolid$1 = defineStyle({
  borderStyle: "solid"
});
var variantDashed = defineStyle({
  borderStyle: "dashed"
});
var variants$1 = {
  solid: variantSolid$1,
  dashed: variantDashed
};
var dividerTheme = defineStyleConfig({
  baseStyle: baseStyle$3,
  variants: variants$1,
  defaultProps: {
    variant: "solid"
  }
});
var { definePartsStyle: definePartsStyle$e, defineMultiStyleConfig: defineMultiStyleConfig$e } = createMultiStyleConfigHelpers(accordionAnatomy$1.keys);
var baseStyleContainer$1 = defineStyle({
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
});
var baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
});
var baseStylePanel = defineStyle({
  pt: "2",
  px: "4",
  pb: "5"
});
var baseStyleIcon = defineStyle({
  fontSize: "1.25em"
});
var baseStyle$2 = definePartsStyle$e({
  container: baseStyleContainer$1,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon
});
var accordionTheme$1 = defineMultiStyleConfig$e({ baseStyle: baseStyle$2 });
var { definePartsStyle: definePartsStyle$d, defineMultiStyleConfig: defineMultiStyleConfig$d } = createMultiStyleConfigHelpers(alertAnatomy.keys);
var $fg = cssVar$2("alert-fg");
var $bg$1 = cssVar$2("alert-bg");
var baseStyle$1 = definePartsStyle$d({
  container: {
    bg: $bg$1.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function getBg(props) {
  const { theme: theme2, colorScheme: c } = props;
  const darkBg = transparentize(`${c}.200`, 0.16)(theme2);
  return {
    light: `colors.${c}.100`,
    dark: darkBg
  };
}
var variantSubtle = definePartsStyle$d((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg$1.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg$1.variable]: bg.dark
      }
    }
  };
});
var variantLeftAccent = definePartsStyle$d((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg$1.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg$1.variable]: bg.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $fg.reference
    }
  };
});
var variantTopAccent = definePartsStyle$d((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg$1.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg$1.variable]: bg.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $fg.reference
    }
  };
});
var variantSolid = definePartsStyle$d((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      [$fg.variable]: `colors.white`,
      [$bg$1.variable]: `colors.${c}.500`,
      _dark: {
        [$fg.variable]: `colors.gray.900`,
        [$bg$1.variable]: `colors.${c}.200`
      },
      color: $fg.reference
    }
  };
});
var variants = {
  subtle: variantSubtle,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid
};
var alertTheme = defineMultiStyleConfig$d({
  baseStyle: baseStyle$1,
  variants,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});
var { definePartsStyle: definePartsStyle$c, defineMultiStyleConfig: defineMultiStyleConfig$c } = createMultiStyleConfigHelpers(avatarAnatomy.keys);
var $border = cssVar$2("avatar-border-color");
var $bg = cssVar$2("avatar-bg");
var baseStyleBadge = defineStyle({
  borderRadius: "full",
  border: "0.2em solid",
  [$border.variable]: "white",
  _dark: {
    [$border.variable]: "colors.gray.800"
  },
  borderColor: $border.reference
});
var baseStyleExcessLabel = defineStyle({
  [$bg.variable]: "colors.gray.200",
  _dark: {
    [$bg.variable]: "colors.whiteAlpha.400"
  },
  bgColor: $bg.reference
});
var $avatarBg = cssVar$2("avatar-background");
var baseStyleContainer = defineStyle((props) => {
  const { name, theme: theme2 } = props;
  const bg = name ? randomColor({ string: name }) : "colors.gray.400";
  const isBgDark = isDark(bg)(theme2);
  let color = "white";
  if (!isBgDark)
    color = "gray.800";
  return {
    bg: $avatarBg.reference,
    "&:not([data-loaded])": {
      [$avatarBg.variable]: bg
    },
    color,
    [$border.variable]: "colors.white",
    _dark: {
      [$border.variable]: "colors.gray.800"
    },
    borderColor: $border.reference,
    verticalAlign: "top"
  };
});
var baseStyle = definePartsStyle$c((props) => ({
  badge: runIfFn(baseStyleBadge, props),
  excessLabel: runIfFn(baseStyleExcessLabel, props),
  container: runIfFn(baseStyleContainer, props)
}));
function getSize(size2) {
  const themeSize = size2 !== "100%" ? sizes_default[size2] : void 0;
  return definePartsStyle$c({
    container: {
      width: size2,
      height: size2,
      fontSize: `calc(${themeSize != null ? themeSize : size2} / 2.5)`
    },
    excessLabel: {
      width: size2,
      height: size2
    },
    label: {
      fontSize: `calc(${themeSize != null ? themeSize : size2} / 2.5)`,
      lineHeight: size2 !== "100%" ? themeSize != null ? themeSize : size2 : void 0
    }
  });
}
var sizes = {
  "2xs": getSize(4),
  xs: getSize(6),
  sm: getSize(8),
  md: getSize(12),
  lg: getSize(16),
  xl: getSize(24),
  "2xl": getSize(32),
  full: getSize("100%")
};
var avatarTheme = defineMultiStyleConfig$c({
  baseStyle,
  sizes,
  defaultProps: { size: "md" }
});
var components = {
  Accordion: accordionTheme$1,
  Alert: alertTheme,
  Avatar: avatarTheme,
  Badge: badgeTheme,
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme$1,
  Checkbox: checkboxTheme$1,
  CloseButton: closeButtonTheme,
  Code: codeTheme,
  Container: containerTheme,
  Divider: dividerTheme,
  Drawer: drawerTheme,
  Editable: editableTheme,
  Form: formTheme,
  FormError: formErrorTheme,
  FormLabel: formLabelTheme$1,
  Heading: headingTheme,
  Input: inputTheme$1,
  Kbd: kbdTheme,
  Link: linkTheme,
  List: listTheme,
  Menu: menuTheme$1,
  Modal: modalTheme$1,
  NumberInput: numberInputTheme$1,
  PinInput: pinInputTheme,
  Popover: popoverTheme$1,
  Progress: progressTheme$1,
  Radio: radioTheme,
  Select: selectTheme$1,
  Skeleton: skeletonTheme,
  SkipLink: skipLinkTheme,
  Slider: sliderTheme$1,
  Spinner: spinnerTheme,
  Stat: statTheme,
  Switch: switchTheme$1,
  Table: tableTheme,
  Tabs: tabsTheme$1,
  Tag: tagTheme,
  Textarea: textareaTheme$1,
  Tooltip: tooltipTheme,
  Card: cardTheme
};
var semanticTokens = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
};
var styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
      wordWrap: "break-word"
    }
  }
};
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme$1 = {
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config
};
function isFunction(value) {
  return typeof value === "function";
}
function pipe(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
var createExtendTheme = (theme2) => {
  return function extendTheme2(...extensions) {
    let overrides = [...extensions];
    let activeTheme = extensions[extensions.length - 1];
    if (isChakraTheme(activeTheme) && overrides.length > 1) {
      overrides = overrides.slice(0, overrides.length - 1);
    } else {
      activeTheme = theme2;
    }
    return pipe(
      ...overrides.map(
        (extension) => (prevTheme) => isFunction(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension)
      )
    )(activeTheme);
  };
};
var extendTheme = createExtendTheme(theme$1);
function mergeThemeOverride(...overrides) {
  return mergeWith({}, ...overrides, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction(source) || isFunction(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return (...args) => {
      const sourceValue = isFunction(source) ? source(...args) : source;
      const overrideValue = isFunction(override) ? override(...args) : override;
      return mergeWith({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  return void 0;
}
function createContext(options = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  const Context = createContext$1(void 0);
  Context.displayName = name;
  function useContext$1() {
    var _a4;
    const context = useContext(Context);
    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = "ContextError";
      (_a4 = Error.captureStackTrace) == null ? void 0 : _a4.call(Error, error, useContext$1);
      throw error;
    }
    return context;
  }
  return [
    Context.Provider,
    useContext$1,
    Context
  ];
}
function ThemeProvider(props) {
  const { cssVarsRoot, theme: theme2, children } = props;
  const computedTheme = useMemo(() => toCSSVar(theme2), [theme2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider$1, { theme: computedTheme, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CSSVars, { root: cssVarsRoot }),
    children
  ] });
}
function CSSVars({ root = ":host, :root" }) {
  const selector = [root, `[data-theme]`].join(",");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Global, { styles: (theme2) => ({ [selector]: theme2.__cssVars }) });
}
createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function GlobalStyle() {
  const { colorMode } = useColorMode();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Global,
    {
      styles: (theme2) => {
        const styleObjectOrFn = memoizedGet(theme2, "styles.global");
        const globalStyles = runIfFn$1(styleObjectOrFn, { theme: theme2, colorMode });
        if (!globalStyles)
          return void 0;
        const styles2 = css(globalStyles)(theme2);
        return styles2;
      }
    }
  );
}
var EnvironmentContext = createContext$1({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
EnvironmentContext.displayName = "EnvironmentContext";
function EnvironmentProvider(props) {
  const { children, environment: environmentProp, disabled } = props;
  const ref = useRef(null);
  const context = useMemo(() => {
    if (environmentProp)
      return environmentProp;
    return {
      getDocument: () => {
        var _a4, _b3;
        return (_b3 = (_a4 = ref.current) == null ? void 0 : _a4.ownerDocument) != null ? _b3 : document;
      },
      getWindow: () => {
        var _a4, _b3;
        return (_b3 = (_a4 = ref.current) == null ? void 0 : _a4.ownerDocument.defaultView) != null ? _b3 : window;
      }
    };
  }, [environmentProp]);
  const showSpan = !disabled || !environmentProp;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(EnvironmentContext.Provider, { value: context, children: [
    children,
    showSpan && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "__chakra_env", hidden: true, ref })
  ] });
}
EnvironmentProvider.displayName = "EnvironmentProvider";
var ChakraProvider$1 = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetCSS = true,
    theme: theme2 = {},
    environment,
    cssVarsRoot,
    disableEnvironment
  } = props;
  const _children = /* @__PURE__ */ jsxRuntimeExports.jsx(
    EnvironmentProvider,
    {
      environment,
      disabled: disableEnvironment,
      children
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { theme: theme2, cssVarsRoot, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ColorModeProvider,
    {
      colorModeManager,
      options: theme2.config,
      children: [
        resetCSS ? /* @__PURE__ */ jsxRuntimeExports.jsx(CSSReset, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(CSSPolyfill, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyle, {}),
        portalZIndex ? /* @__PURE__ */ jsxRuntimeExports.jsx(PortalManager, { zIndex: portalZIndex, children: _children }) : _children
      ]
    }
  ) });
};
var createChakraProvider = (providerTheme) => {
  return function ChakraProvider2({
    children,
    theme: theme2 = providerTheme,
    toastOptions,
    ...restProps
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(ChakraProvider$1, { theme: theme2, ...restProps, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToastOptionProvider, { value: toastOptions == null ? void 0 : toastOptions.defaultOptions, children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToastProvider, { ...toastOptions })
    ] });
  };
};
var ChakraProvider = createChakraProvider(theme$1);
function generateColorPalette(hue, saturation, light = false) {
  hue = String(hue);
  saturation = String(saturation);
  const colorSteps = Array.from({ length: 21 }, (_, i) => i * 50);
  const lightnessSteps = [
    "0",
    "5",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
    "59",
    "64",
    "68",
    "73",
    "77",
    "82",
    "86",
    "95",
    "100"
  ];
  const darkPalette = {};
  const lightPalette = {};
  colorSteps.forEach((colorStep, index) => {
    darkPalette[colorStep] = `hsl(${hue}, ${saturation}%, ${lightnessSteps[colorSteps.length - 1 - index]}%)`;
    lightPalette[colorStep] = `hsl(${hue}, ${saturation}%, ${lightnessSteps[index]}%)`;
  });
  return light ? lightPalette : darkPalette;
}
const invokeAIThemeColors = {
  base: generateColorPalette(225, 15),
  accent: generateColorPalette(250, 50),
  working: generateColorPalette(47, 67),
  warning: generateColorPalette(28, 75),
  ok: generateColorPalette(113, 70),
  error: generateColorPalette(0, 76),
  gridLineColor: "rgba(255, 255, 255, 0.2)"
};
function anatomy(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function parts(...values) {
    assert();
    for (const part of values) {
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function extend(...parts2) {
    for (const part of parts2) {
      if (part in map)
        continue;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function selectors() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.selector])
    );
    return value;
  }
  function classnames() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.className])
    );
    return value;
  }
  function toPart(part) {
    const el = ["container", "root"].includes(part != null ? part : "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  const __type = {};
  return {
    parts,
    toPart,
    extend,
    selectors,
    classnames,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel").extend("icon");
anatomy("alert").parts("title", "description", "container").extend("icon", "spinner");
anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
anatomy("progress").parts("track", "filledTrack").extend("label");
anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
anatomy("editable").parts(
  "preview",
  "input",
  "textarea"
);
anatomy("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts("addon", "field", "element");
anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts(
  "label",
  "filledTrack",
  "track"
);
anatomy("radio").parts(
  "container",
  "control",
  "label"
);
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
anatomy("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
var switchAnatomy = anatomy("switch").parts(
  "container",
  "track",
  "thumb"
);
anatomy("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
var tabsAnatomy = anatomy("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
anatomy("tag").parts(
  "container",
  "label",
  "closeButton"
);
anatomy("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
const { definePartsStyle: definePartsStyle$b, defineMultiStyleConfig: defineMultiStyleConfig$b } = createMultiStyleConfigHelpers(accordionAnatomy.keys);
const invokeAIContainer = defineStyle({
  border: "none"
});
const invokeAIButton = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontWeight: "600",
    fontSize: "sm",
    border: "none",
    borderRadius: "base",
    bg: `${c}.800`,
    color: "base.100",
    _hover: {
      bg: `${c}.700`
    },
    _expanded: {
      bg: `${c}.750`,
      borderBottomRadius: "none",
      _hover: {
        bg: `${c}.700`
      }
    }
  };
});
const invokeAIPanel = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.800`,
    borderRadius: "base",
    borderTopRadius: "none"
  };
});
const invokeAIIcon$1 = defineStyle({});
const invokeAI$e = definePartsStyle$b((props) => ({
  container: invokeAIContainer,
  button: invokeAIButton(props),
  panel: invokeAIPanel(props),
  icon: invokeAIIcon$1
}));
const accordionTheme = defineMultiStyleConfig$b({
  variants: { invokeAI: invokeAI$e },
  defaultProps: {
    variant: "invokeAI",
    colorScheme: "base"
  }
});
const invokeAI$d = defineStyle((props) => {
  const { colorScheme: c } = props;
  const _disabled = {
    bg: `${c}.600`,
    color: `${c}.100`,
    svg: {
      fill: `${c}.100`
    }
  };
  return {
    bg: `${c}.700`,
    color: `${c}.100`,
    borderRadius: "base",
    svg: {
      fill: `${c}.100`
    },
    _disabled,
    _hover: {
      bg: `${c}.650`,
      color: `${c}.50`,
      svg: {
        fill: `${c}.50`
      },
      _disabled
    },
    _checked: {
      bg: "accent.700",
      color: "accent.100",
      svg: {
        fill: "accent.100"
      },
      _disabled,
      _hover: {
        bg: "accent.600",
        color: "accent.50",
        svg: {
          fill: "accent.50"
        },
        _disabled
      }
    }
  };
});
const buttonTheme = defineStyleConfig({
  variants: {
    invokeAI: invokeAI$d
  },
  defaultProps: {
    variant: "invokeAI",
    colorScheme: "base"
  }
});
const { definePartsStyle: definePartsStyle$a, defineMultiStyleConfig: defineMultiStyleConfig$a } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
const invokeAIControl = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    _checked: {
      bg: `${c}.200`,
      borderColor: `${c}.200`,
      color: "base.900",
      _hover: {
        bg: `${c}.300`,
        borderColor: `${c}.300`
      },
      _disabled: {
        borderColor: "transparent",
        bg: "whiteAlpha.300",
        color: "whiteAlpha.500"
      }
    },
    _indeterminate: {
      bg: `${c}.200`,
      borderColor: `${c}.200`,
      color: "base.900"
    },
    _disabled: {
      bg: "whiteAlpha.100",
      borderColor: "transparent"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: "red.300"
    }
  };
});
const invokeAI$c = definePartsStyle$a((props) => ({
  control: invokeAIControl(props)
}));
const checkboxTheme = defineMultiStyleConfig$a({
  variants: {
    invokeAI: invokeAI$c
  },
  defaultProps: {
    variant: "invokeAI",
    colorScheme: "accent"
  }
});
const invokeAI$b = defineStyle((_props) => {
  return {
    fontSize: "sm",
    marginEnd: 0,
    mb: 1,
    fontWeight: "400",
    transitionProperty: "common",
    transitionDuration: "normal",
    whiteSpace: "nowrap",
    _disabled: {
      opacity: 0.4
    },
    color: "base.300"
  };
});
const formLabelTheme = defineStyleConfig({
  variants: {
    invokeAI: invokeAI$b
  },
  defaultProps: {
    variant: "invokeAI"
  }
});
const getInputOutlineStyles = (_props) => ({
  outline: "none",
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "base.800",
  bg: "base.900",
  borderRadius: "base",
  color: "base.100",
  boxShadow: "none",
  _hover: {
    borderColor: "base.600"
  },
  _focus: {
    borderColor: "accent.700",
    boxShadow: "none",
    _hover: {
      borderColor: "accent.600"
    }
  },
  _invalid: {
    borderColor: "error.700",
    boxShadow: "none",
    _hover: {
      borderColor: "error.600"
    }
  },
  _disabled: {
    borderColor: "base.700",
    bg: "base.700",
    color: "base.400",
    _hover: {
      borderColor: "base.700"
    }
  },
  _placeholder: {
    color: "base.400"
  }
});
const { definePartsStyle: definePartsStyle$9, defineMultiStyleConfig: defineMultiStyleConfig$9 } = createMultiStyleConfigHelpers(inputAnatomy.keys);
const invokeAI$a = definePartsStyle$9((props) => {
  return {
    field: getInputOutlineStyles()
  };
});
const inputTheme = defineMultiStyleConfig$9({
  variants: {
    invokeAI: invokeAI$a
  },
  defaultProps: {
    size: "sm",
    variant: "invokeAI"
  }
});
const { definePartsStyle: definePartsStyle$8, defineMultiStyleConfig: defineMultiStyleConfig$8 } = createMultiStyleConfigHelpers(menuAnatomy.keys);
const invokeAI$9 = definePartsStyle$8({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: "600",
    bg: "base.500",
    color: "base.200",
    _hover: {
      bg: "base.600",
      color: "white"
    }
  },
  list: {
    zIndex: 9999,
    bg: "base.800"
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    fontSize: "sm",
    bg: "base.800",
    _hover: {
      bg: "base.750"
    },
    _focus: {
      bg: "base.700"
    }
  }
});
const menuTheme = defineMultiStyleConfig$8({
  variants: {
    invokeAI: invokeAI$9
  },
  defaultProps: {
    variant: "invokeAI"
  }
});
const { defineMultiStyleConfig: defineMultiStyleConfig$7, definePartsStyle: definePartsStyle$7 } = createMultiStyleConfigHelpers(modalAnatomy.keys);
const invokeAIOverlay = defineStyle({
  bg: "blackAlpha.600"
});
const invokeAIDialogContainer = defineStyle({});
const invokeAIDialog = defineStyle((_props) => {
  return {
    bg: "base.850",
    maxH: "80vh"
  };
});
const invokeAIHeader = defineStyle((_props) => {
  return {
    fontWeight: "600",
    fontSize: "lg",
    color: "base.200"
  };
});
const invokeAICloseButton = defineStyle({});
const invokeAIBody = defineStyle({
  overflowY: "scroll"
});
const invokeAIFooter = defineStyle({});
const invokeAI$8 = definePartsStyle$7((props) => ({
  overlay: invokeAIOverlay,
  dialogContainer: invokeAIDialogContainer,
  dialog: invokeAIDialog(props),
  header: invokeAIHeader(props),
  closeButton: invokeAICloseButton,
  body: invokeAIBody,
  footer: invokeAIFooter
}));
const modalTheme = defineMultiStyleConfig$7({
  variants: {
    invokeAI: invokeAI$8
  },
  defaultProps: { variant: "invokeAI", size: "lg" }
});
const { defineMultiStyleConfig: defineMultiStyleConfig$6, definePartsStyle: definePartsStyle$6 } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
const invokeAIRoot$1 = defineStyle((_props) => {
  return {
    height: 8
  };
});
const invokeAIField$1 = defineStyle((props) => {
  return {
    border: "none",
    fontWeight: "600",
    height: "auto",
    py: 1,
    ps: 2,
    pe: 6,
    ...getInputOutlineStyles()
  };
});
const invokeAIStepperGroup = defineStyle((_props) => {
  return {
    display: "flex"
  };
});
const invokeAIStepper = defineStyle((_props) => {
  return {
    border: "none",
    // expand arrow hitbox
    px: 2,
    py: 0,
    mx: -2,
    my: 0,
    svg: {
      color: "base.300",
      width: 2.5,
      height: 2.5,
      _hover: {
        color: "base.50"
      }
    }
  };
});
const invokeAI$7 = definePartsStyle$6((props) => ({
  root: invokeAIRoot$1(props),
  field: invokeAIField$1(props),
  stepperGroup: invokeAIStepperGroup(props),
  stepper: invokeAIStepper(props)
}));
const numberInputTheme = defineMultiStyleConfig$6({
  variants: {
    invokeAI: invokeAI$7
  },
  defaultProps: {
    size: "sm",
    variant: "invokeAI"
  }
});
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  const valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix(value, prefix = "") {
  return [prefix, escape(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return `var(${escape(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar(value, prefix = "") {
  return `--${addPrefix(value, prefix)}`;
}
function cssVar(name, options) {
  const cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}
const { defineMultiStyleConfig: defineMultiStyleConfig$5, definePartsStyle: definePartsStyle$5 } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
const $popperBg = cssVar("popper-bg");
const $arrowBg = cssVar("popper-arrow-bg");
const $arrowShadowColor = cssVar("popper-arrow-shadow-color");
const invokeAIContent = defineStyle((_props) => {
  return {
    [$arrowBg.variable]: `colors.base.800`,
    [$popperBg.variable]: `colors.base.800`,
    [$arrowShadowColor.variable]: `colors.base.600`,
    minW: "unset",
    width: "unset",
    p: 4,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "base.600",
    bg: "base.800"
  };
});
const invokeAI$6 = definePartsStyle$5((props) => ({
  content: invokeAIContent(props)
}));
const popoverTheme = defineMultiStyleConfig$5({
  variants: {
    invokeAI: invokeAI$6
  },
  defaultProps: {
    variant: "invokeAI"
  }
});
const { defineMultiStyleConfig: defineMultiStyleConfig$4, definePartsStyle: definePartsStyle$4 } = createMultiStyleConfigHelpers(progressAnatomy.keys);
const invokeAIFilledTrack$1 = defineStyle((_props) => ({
  bg: "accent.600",
  transition: "width 0.2s ease-in-out",
  _indeterminate: {
    bgGradient: "linear(to-r, transparent 0%, accent.600 50%, transparent 100%);"
  }
}));
const invokeAITrack$2 = defineStyle((_props) => {
  return {
    bg: "base.800"
  };
});
const invokeAI$5 = definePartsStyle$4((props) => ({
  filledTrack: invokeAIFilledTrack$1(props),
  track: invokeAITrack$2(props)
}));
const progressTheme = defineMultiStyleConfig$4({
  variants: {
    invokeAI: invokeAI$5
  },
  defaultProps: {
    variant: "invokeAI"
  }
});
const no_scrollbar = {
  "::-webkit-scrollbar": {
    display: "none"
  },
  scrollbarWidth: "none"
};
const { definePartsStyle: definePartsStyle$3, defineMultiStyleConfig: defineMultiStyleConfig$3 } = createMultiStyleConfigHelpers(selectAnatomy.keys);
const invokeAIIcon = defineStyle((_props) => {
  return {
    color: "base.300"
  };
});
const invokeAIField = defineStyle((props) => ({
  fontWeight: "600",
  ...getInputOutlineStyles()
}));
const invokeAI$4 = definePartsStyle$3((props) => {
  return {
    field: invokeAIField(props),
    icon: invokeAIIcon(props)
  };
});
const selectTheme = defineMultiStyleConfig$3({
  variants: {
    invokeAI: invokeAI$4
  },
  defaultProps: {
    size: "sm",
    variant: "invokeAI"
  }
});
const { definePartsStyle: definePartsStyle$2, defineMultiStyleConfig: defineMultiStyleConfig$2 } = createMultiStyleConfigHelpers(sliderAnatomy.keys);
const invokeAITrack$1 = defineStyle((_props) => {
  return {
    bg: "base.400",
    h: 1.5
  };
});
const invokeAIFilledTrack = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.600`,
    h: 1.5
  };
});
const invokeAIThumb$1 = defineStyle((_props) => {
  return {
    w: 2,
    h: 4
  };
});
const invokeAIMark = defineStyle((_props) => {
  return {
    fontSize: "xs",
    fontWeight: "500",
    color: "base.200",
    mt: 2,
    insetInlineStart: "unset"
  };
});
const invokeAI$3 = definePartsStyle$2((props) => ({
  track: invokeAITrack$1(props),
  filledTrack: invokeAIFilledTrack(props),
  thumb: invokeAIThumb$1(props),
  mark: invokeAIMark(props)
}));
const sliderTheme = defineMultiStyleConfig$2({
  variants: { invokeAI: invokeAI$3 },
  defaultProps: {
    variant: "invokeAI",
    colorScheme: "accent"
  }
});
const { defineMultiStyleConfig: defineMultiStyleConfig$1, definePartsStyle: definePartsStyle$1 } = createMultiStyleConfigHelpers(switchAnatomy.keys);
const invokeAITrack = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: "base.600",
    _focusVisible: {
      boxShadow: "none"
    },
    _checked: {
      bg: `${c}.600`
    }
  };
});
const invokeAIThumb = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.50`
  };
});
const invokeAI$2 = definePartsStyle$1((props) => ({
  container: {},
  track: invokeAITrack(props),
  thumb: invokeAIThumb(props)
}));
const switchTheme = defineMultiStyleConfig$1({
  variants: { invokeAI: invokeAI$2 },
  defaultProps: {
    size: "md",
    variant: "invokeAI",
    colorScheme: "accent"
  }
});
const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
const invokeAIRoot = defineStyle((_props) => {
  return {
    display: "flex",
    columnGap: 4
  };
});
const invokeAITab = defineStyle((_props) => ({}));
const invokeAITablist = defineStyle((_props) => ({
  display: "flex",
  flexDirection: "column",
  gap: 1,
  color: "base.700",
  button: {
    fontSize: "sm",
    padding: 2,
    borderRadius: "base",
    _selected: {
      bg: "accent.700",
      color: "accent.100",
      _hover: {
        bg: "accent.600",
        color: "accent.50"
      }
    },
    _hover: {
      bg: "base.600",
      color: "base.50"
    }
  }
}));
const invokeAITabpanel = defineStyle((_props) => ({
  padding: 0,
  height: "100%"
}));
const invokeAI$1 = definePartsStyle((props) => ({
  root: invokeAIRoot(props),
  tab: invokeAITab(props),
  tablist: invokeAITablist(props),
  tabpanel: invokeAITabpanel(props)
}));
const tabsTheme = defineMultiStyleConfig({
  variants: {
    invokeAI: invokeAI$1
  },
  defaultProps: {
    variant: "invokeAI"
  }
});
const subtext = defineStyle((_props) => ({
  color: "base.400"
}));
const textTheme = defineStyleConfig({
  variants: {
    subtext
  }
});
const invokeAI = defineStyle((props) => getInputOutlineStyles());
const textareaTheme = defineStyleConfig({
  variants: {
    invokeAI
  },
  defaultProps: {
    size: "md",
    variant: "invokeAI"
  }
});
const theme = {
  config: {
    cssVarPrefix: "invokeai"
  },
  styles: {
    global: (_props) => ({
      body: {
        bg: "base.900",
        color: "base.50",
        overflow: "hidden"
      },
      "*": { ...no_scrollbar }
    })
  },
  direction: "ltr",
  fonts: {
    body: `'Inter', sans-serif`
  },
  shadows: {
    light: {
      accent: `0 0 10px 0 var(--invokeai-colors-accent-300)`,
      accentHover: `0 0 10px 0 var(--invokeai-colors-accent-400)`,
      ok: `0 0 7px var(--invokeai-colors-ok-600)`,
      working: `0 0 7px var(--invokeai-colors-working-600)`,
      error: `0 0 7px var(--invokeai-colors-error-600)`
    },
    dark: {
      accent: `0 0 10px 0 var(--invokeai-colors-accent-600)`,
      accentHover: `0 0 10px 0 var(--invokeai-colors-accent-500)`,
      ok: `0 0 7px var(--invokeai-colors-ok-400)`,
      working: `0 0 7px var(--invokeai-colors-working-400)`,
      error: `0 0 7px var(--invokeai-colors-error-400)`
    }
  },
  colors: {
    ...invokeAIThemeColors
  },
  components: {
    Button: buttonTheme,
    // Button and IconButton
    Input: inputTheme,
    Textarea: textareaTheme,
    Tabs: tabsTheme,
    Progress: progressTheme,
    Accordion: accordionTheme,
    FormLabel: formLabelTheme,
    Switch: switchTheme,
    NumberInput: numberInputTheme,
    Select: selectTheme,
    Slider: sliderTheme,
    Popover: popoverTheme,
    Modal: modalTheme,
    Checkbox: checkboxTheme,
    Menu: menuTheme,
    Text: textTheme
  }
};
const greenTeaThemeColors = {
  base: generateColorPalette(223, 10),
  accent: generateColorPalette(155, 80),
  working: generateColorPalette(47, 68),
  warning: generateColorPalette(28, 75),
  ok: generateColorPalette(122, 49),
  error: generateColorPalette(0, 50),
  gridLineColor: "rgba(255, 255, 255, 0.2)"
};
const lightThemeColors = {
  base: generateColorPalette(223, 10, true),
  accent: generateColorPalette(40, 80, true),
  working: generateColorPalette(47, 68, true),
  warning: generateColorPalette(28, 75, true),
  ok: generateColorPalette(122, 49, true),
  error: generateColorPalette(0, 50, true),
  gridLineColor: "rgba(0, 0, 0, 0.2)"
};
const oceanBlueColors = {
  base: generateColorPalette(220, 30),
  accent: generateColorPalette(210, 80),
  working: generateColorPalette(47, 68),
  warning: generateColorPalette(28, 75),
  ok: generateColorPalette(122, 49),
  error: generateColorPalette(0, 100),
  gridLineColor: "rgba(136, 148, 184, 0.2)"
};
const THEMES = {
  dark: invokeAIThemeColors,
  light: lightThemeColors,
  green: greenTeaThemeColors,
  ocean: oceanBlueColors
};
function ThemeLocaleProvider({ children }) {
  const { i18n } = useTranslation();
  const currentTheme = useAppSelector(
    (state) => state.ui.currentTheme
  );
  const direction2 = i18n.dir();
  const theme$12 = extendTheme({
    ...theme,
    colors: THEMES[currentTheme],
    direction: direction2
  });
  useEffect(() => {
    document.body.dir = direction2;
  }, [direction2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ChakraProvider, { theme: theme$12, children });
}
export {
  ThemeLocaleProvider as default
};

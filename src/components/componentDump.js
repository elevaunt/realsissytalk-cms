const converted = {
  ".navbar .navbar-menu": { boxShadow: "none !important" },
  ".content .taglist": {
    listStyle: "none",
    margin: "1.5rem 1.5rem 0 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    alignItems: "center"
  },
  ".content .taglist li": {
    padding: "0 2rem 1rem 0",
    marginBottom: "1.5rem",
    marginTop: "0"
  },
  ".full-width-image-container": {
    position: "relative",
    left: "50%",
    right: "50%",
    margin: "2em -50vw"
  },
  ".full-width-image,.full-width-image-container": {
    width: "100vw",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  ".btn": {
    display: "inline-block",
    padding: "12px 16px 10px",
    fontSize: ["18px", "1rem"],
    lineHeight: "1.25",
    backgroundColor: "#fff",
    borderRadius: ".25rem",
    textDecoration: "none",
    fontWeight: "700",
    color: "#cc3700",
    textAlign: "center",
    boxShadow: "inset 0 0 0 2px #f40",
    transition: "all .15s ease"
  },
  ".margin-top-0": { marginTop: "0 !important" },
  ".navbar-item .icon": { color: "#d64000" },
  ".icon svg": { width: "1.5rem", height: "1.5rem", fill: "currentColor" },
  ".navbar-brand .navbar-item.logo": { padding: "0 1rem" },
  "footer.footer": { padding: "3rem 0 0", backgroundColor: "transparent" },
  ".menu-list": {
    listStyle: "none !important",
    textAlign: "left",
    lineHeight: "1.25"
  },
  ".social": { padding: "2em" },
  ".social a": {
    padding: ".5em .5em .3em",
    borderRadius: "1em",
    backgroundColor: "#f5f5f5",
    margin: ".5em",
    width: "1em",
    height: "1em",
    verticalAlign: "middle",
    display: "inline"
  },
  ".blog-list-item.is-featured": { backgroundColor: "rgba(214,64,0,.2)" },
  ".blog-list-item header": { display: "flex", marginBottom: "1em" },
  ".blog-list-item .featured-thumbnail": {
    flexBasis: "35%",
    margin: "0 1.5em 0 0"
  },
  "@keyframes spinAround": {
    "0%": { transform: "rotate(0deg)" },
    to: { transform: "rotate(359deg)" }
  },
  ".button,.file": {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
  },
  ".box:not(:last-child),.content:not(:last-child),.message:not(:last-child),.notification:not(:last-child),.subtitle:not(:last-child),.title:not(:last-child)": {
    marginBottom: "1.5rem"
  },
  ".button,.file-cta,.input,.textarea": {
    MozAppearance: "none",
    WebkitAppearance: "none",
    alignItems: "center",
    border: "1px solid transparent",
    borderRadius: "4px",
    boxShadow: "none",
    display: "inline-flex",
    fontSize: "1rem",
    height: "2.5em",
    justifyContent: "flex-start",
    lineHeight: "1.5",
    padding: "calc(.5em - 1px) calc(.75em - 1px)",
    position: "relative",
    verticalAlign: "top"
  },
  ".button:active,.button:focus,.file-cta:active,.file-cta:focus,.input:active,.input:focus,.is-active.button,.is-active.file-cta,.is-active.input,.is-active.textarea,.textarea:active,.textarea:focus": {
    outline: "none"
  },
  "body,h1,h2,h3,h4,html,li,p,textarea,ul": { margin: "0", padding: "0" },
  "h1,h2,h3,h4": { fontSize: "100%", fontWeight: "400" },
  ul: { listStyle: "none" },
  "button,input,textarea": { margin: "0" },
  html: {
    boxSizing: "border-box",
    backgroundColor: "#fff",
    fontSize: "16px",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    minWidth: "300px",
    overflowX: "hidden",
    overflowY: "scroll",
    textRendering: "optimizeLegibility",
    WebkitTextSizeAdjust: "100%",
    msTextSizeAdjust: "100%",
    textSizeAdjust: "100%"
  },
  "*,:after,:before": { boxSizing: "inherit" },
  "article,footer,header,section": { display: "block" },
  "body,button,input,textarea": {
    fontFamily:
      "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif"
  },
  code: {
    MozOsxFontSmoothing: "auto",
    WebkitFontSmoothing: "auto",
    fontFamily: "monospace",
    backgroundColor: "#f5f5f5",
    color: "#f14668",
    fontSize: ".875em",
    fontWeight: "400",
    padding: ".25em .5em"
  },
  body: {
    color: "#333",
    fontSize: "1em",
    fontWeight: "400",
    lineHeight: "1.5"
  },
  a: { color: "#3273dc", cursor: "pointer", textDecoration: "none" },
  "a:hover": { color: "#363636" },
  img: { height: "auto", maxWidth: "100%" },
  span: { fontStyle: "inherit", fontWeight: "inherit" },
  ".is-size-1": { fontSize: "3rem !important" },
  ".is-size-2": { fontSize: "2.5rem !important" },
  ".is-size-3": { fontSize: "2rem !important" },
  ".is-size-4": { fontSize: "1.5rem !important" },
  ".is-size-5": { fontSize: "1.25rem !important" },
  "@media screen and (max-width:768px)": [
    {
      ".is-size-3-mobile": { fontSize: "2rem !important" },
      ".is-size-5-mobile": { fontSize: "1.25rem !important" }
    },
    {
      ".blog-list-item header": { display: "block" },
      ".blog-list-item .featured-thumbnail": {
        textAlign: "center",
        maxWidth: "70%",
        margin: "0 0 1em"
      }
    }
  ],
  "@media print,screen and (min-width:769px)": [
    {
      ".is-size-2-tablet": { fontSize: "2.5rem !important" },
      ".is-size-5-tablet": { fontSize: "1.25rem !important" }
    },
    {
      ".column.is-offset-1": { marginLeft: "8.33333%" },
      ".column.is-4": { flex: "none", width: "33.33333%" },
      ".column.is-6": { flex: "none", width: "50%" },
      ".column.is-7": { flex: "none", width: "58.33333%" },
      ".column.is-10": { flex: "none", width: "83.33333%" },
      ".column.is-12": { flex: "none", width: "100%" }
    },
    { ".columns:not(.is-desktop)": { display: "flex" } },
    {
      ".tile:not(.is-child)": { display: "flex" },
      ".tile.is-4": { flex: "none", width: "33.33333%" },
      ".tile.is-6": { flex: "none", width: "50%" },
      ".tile.is-7": { flex: "none", width: "58.33333%" },
      ".tile.is-10": { flex: "none", width: "83.33333%" },
      ".tile.is-12": { flex: "none", width: "100%" }
    }
  ],
  "@media screen and (min-width:1216px)": [
    {
      ".is-size-1-widescreen": { fontSize: "3rem !important" },
      ".is-size-4-widescreen": { fontSize: "1.5rem !important" }
    },
    { ".container": { maxWidth: "1152px" } }
  ],
  ".has-text-centered": { textAlign: "center !important" },
  ".has-background-black": { backgroundColor: "#2b2523 !important" },
  ".has-text-primary": { color: "#d64000 !important" },
  "a.has-text-primary:focus,a.has-text-primary:hover": {
    color: "#a33100 !important"
  },
  ".has-text-white-ter": { color: "#f5f5f5 !important" },
  ".has-text-weight-semibold": { fontWeight: "600 !important" },
  ".has-text-weight-bold": { fontWeight: "700 !important" },
  ".is-block": { display: "block !important" },
  ".box": {
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow:
      "0 .5em 1em -.125em rgba(43,37,35,.1),0 0 0 1px rgba(43,37,35,.02)",
    color: "#4a4a4a",
    display: "block",
    padding: "1.25rem"
  },
  "a.box:focus,a.box:hover": {
    boxShadow: "0 .5em 1em -.125em rgba(43,37,35,.1),0 0 0 1px #3273dc"
  },
  "a.box:active": {
    boxShadow: "inset 0 1px 2px rgba(43,37,35,.2),0 0 0 1px #3273dc"
  },
  ".button": {
    backgroundColor: "#fff",
    borderColor: "#dbdbdb",
    borderWidth: "1px",
    color: "#363636",
    cursor: "pointer",
    justifyContent: "center",
    padding: "calc(.5em - 1px) 1em",
    textAlign: "center",
    whiteSpace: "nowrap"
  },
  ".button .icon": { height: "1.5em", width: "1.5em" },
  ".button .icon:first-child:not(:last-child)": {
    marginLeft: "calc(-.5em - 1px)",
    marginRight: ".25em"
  },
  ".button .icon:last-child:not(:first-child)": {
    marginLeft: ".25em",
    marginRight: "calc(-.5em - 1px)"
  },
  ".button .icon:first-child:last-child": {
    marginLeft: "calc(-.5em - 1px)",
    marginRight: "calc(-.5em - 1px)"
  },
  ".button:hover": { borderColor: "#b5b5b5", color: "#363636" },
  ".button:focus": { borderColor: "#3273dc", color: "#363636" },
  ".button:focus:not(:active)": {
    boxShadow: "0 0 0 .125em rgba(50,115,220,.25)"
  },
  ".button.is-active,.button:active": {
    borderColor: "#4a4a4a",
    color: "#363636"
  },
  ".button.is-link": {
    backgroundColor: "#3273dc",
    borderColor: "transparent",
    color: "#fff"
  },
  ".button.is-link:hover": { backgroundColor: "#276cda" },
  ".button.is-link:focus,.button.is-link:hover": {
    borderColor: "transparent",
    color: "#fff"
  },
  ".button.is-link:focus:not(:active)": {
    boxShadow: "0 0 0 .125em rgba(50,115,220,.25)"
  },
  ".button.is-link.is-active,.button.is-link:active": {
    backgroundColor: "#2366d1",
    borderColor: "transparent",
    color: "#fff"
  },
  ".container": {
    flexGrow: "1",
    margin: "0 auto",
    position: "relative",
    width: "auto"
  },
  "@media screen and (min-width:1024px)": [
    { ".container": { maxWidth: "960px" } },
    {
      ".navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start>.navbar-item": {
        color: "#fff"
      },
      ".navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:focus,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:focus,.navbar.is-link .navbar-start>a.navbar-item:hover": {
        backgroundColor: "#2366d1",
        color: "#fff"
      }
    },
    {
      ".navbar,.navbar-end,.navbar-menu,.navbar-start": {
        alignItems: "stretch",
        display: "flex"
      },
      ".navbar": { minHeight: "3.25rem" },
      ".navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:focus,.navbar.is-transparent a.navbar-item:hover": {
        backgroundColor: "transparent !important"
      },
      ".navbar-burger": { display: "none" },
      ".navbar-item": { alignItems: "center", display: "flex" },
      ".navbar-menu": { flexGrow: "1", flexShrink: "0" },
      ".navbar-start": { justifyContent: "flex-start", marginRight: "auto" },
      ".navbar-end": { justifyContent: "flex-end", marginLeft: "auto" },
      ".container>.navbar .navbar-brand,.navbar>.container .navbar-brand": {
        marginLeft: "-.75rem"
      },
      ".container>.navbar .navbar-menu,.navbar>.container .navbar-menu": {
        marginRight: "-.75rem"
      },
      "a.navbar-item.is-active": { color: "#2b2523" },
      "a.navbar-item.is-active:not(:focus):not(:hover)": {
        backgroundColor: "transparent"
      }
    }
  ],
  "@media screen and (min-width:1408px)": {
    ".container": { maxWidth: "1344px" }
  },
  ".content li+li": { marginTop: ".25em" },
  ".content p:not(:last-child),.content ul:not(:last-child)": {
    marginBottom: "1em"
  },
  ".content h1,.content h2,.content h3,.content h4": {
    color: "#363636",
    fontWeight: "600",
    lineHeight: "1.125"
  },
  ".content h1": { fontSize: "2em", marginBottom: ".5em" },
  ".content h1:not(:first-child)": { marginTop: "1em" },
  ".content h2": { fontSize: "1.75em", marginBottom: ".5714em" },
  ".content h2:not(:first-child)": { marginTop: "1.1428em" },
  ".content h3": { fontSize: "1.5em", marginBottom: ".6666em" },
  ".content h3:not(:first-child)": { marginTop: "1.3333em" },
  ".content h4": { fontSize: "1.25em", marginBottom: ".8em" },
  ".content ul": {
    listStyle: "disc outside",
    marginLeft: "2em",
    marginTop: "1em"
  },
  ".content ul ul": { listStyleType: "circle", marginTop: ".5em" },
  ".content ul ul ul": { listStyleType: "square" },
  ".icon": {
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
    height: "1.5rem",
    width: "1.5rem"
  },
  ".image": { display: "block", position: "relative" },
  ".image img": { display: "block", height: "auto", width: "100%" },
  ".notification": {
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    padding: "1.25rem 2.5rem 1.25rem 1.5rem",
    position: "relative"
  },
  ".notification a:not(.button):not(.dropdown-item)": {
    color: "currentColor",
    textDecoration: "underline"
  },
  ".notification code": { background: "#fff" },
  ".notification .content,.notification .subtitle,.notification .title": {
    color: "currentColor"
  },
  ".notification.is-link": { backgroundColor: "#3273dc", color: "#fff" },
  "@keyframes moveIndeterminate": {
    "0%": { backgroundPosition: "200% 0" },
    to: { backgroundPosition: "-200% 0" }
  },
  ".tags": {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  ".tags .tag": { marginBottom: ".5rem" },
  ".tags .tag:not(:last-child)": { marginRight: ".5rem" },
  ".tags:last-child": { marginBottom: "-.5rem" },
  ".tags:not(:last-child)": { marginBottom: "1rem" },
  ".tag:not(body)": {
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    color: "#4a4a4a",
    display: "inline-flex",
    fontSize: ".75rem",
    height: "2em",
    justifyContent: "center",
    lineHeight: "1.5",
    paddingLeft: ".75em",
    paddingRight: ".75em",
    whiteSpace: "nowrap"
  },
  ".tag:not(body).is-link": { backgroundColor: "#3273dc", color: "#fff" },
  ".tag:not(body) .icon:first-child:not(:last-child)": {
    marginLeft: "-.375em",
    marginRight: ".1875em"
  },
  ".tag:not(body) .icon:last-child:not(:first-child)": {
    marginLeft: ".1875em",
    marginRight: "-.375em"
  },
  ".tag:not(body) .icon:first-child:last-child": {
    marginLeft: "-.375em",
    marginRight: "-.375em"
  },
  "a.tag:hover": { textDecoration: "underline" },
  ".subtitle,.title": { wordBreak: "break-word" },
  ".subtitle span,.title span": { fontWeight: "inherit" },
  ".subtitle .tag,.title .tag": { verticalAlign: "middle" },
  ".title": {
    color: "#363636",
    fontSize: "2rem",
    fontWeight: "600",
    lineHeight: "1.125"
  },
  ".title:not(.is-spaced)+.subtitle": { marginTop: "-1.25rem" },
  ".title.is-4": { fontSize: "1.5rem" },
  ".title.is-6": { fontSize: "1rem" },
  ".title.is-7": { fontSize: ".75rem" },
  ".subtitle": {
    color: "#4a4a4a",
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "1.25"
  },
  ".subtitle:not(.is-spaced)+.title": { marginTop: "-1.25rem" },
  ".subtitle.is-4": { fontSize: "1.5rem" },
  ".subtitle.is-6": { fontSize: "1rem" },
  ".subtitle.is-7": { fontSize: ".75rem" },
  ".heading": {
    display: "block",
    fontSize: "11px",
    letterSpacing: "1px",
    marginBottom: "5px",
    textTransform: "uppercase"
  },
  ".number": {
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "290486px",
    display: "inline-flex",
    fontSize: "1.25rem",
    height: "2em",
    justifyContent: "center",
    marginRight: "1.5rem",
    minWidth: "2.5em",
    padding: ".25rem .5rem",
    textAlign: "center",
    verticalAlign: "top"
  },
  ".input,.textarea": {
    backgroundColor: "#fff",
    borderColor: "#dbdbdb",
    borderRadius: "4px",
    color: "#363636",
    boxShadow: "inset 0 .0625em .125em rgba(43,37,35,.05)",
    maxWidth: "100%",
    width: "100%"
  },
  ".input::-moz-placeholder,.textarea::-moz-placeholder": {
    color: "rgba(54,54,54,.3)"
  },
  ".input::-webkit-input-placeholder,.textarea::-webkit-input-placeholder": {
    color: "rgba(54,54,54,.3)"
  },
  ".input:-moz-placeholder,.textarea:-moz-placeholder": {
    color: "rgba(54,54,54,.3)"
  },
  ".input:-ms-input-placeholder,.textarea:-ms-input-placeholder": {
    color: "rgba(54,54,54,.3)"
  },
  ".input:hover,.textarea:hover": { borderColor: "#b5b5b5" },
  ".input:active,.input:focus,.is-active.input,.is-active.textarea,.textarea:active,.textarea:focus": {
    borderColor: "#3273dc",
    boxShadow: "0 0 0 .125em rgba(50,115,220,.25)"
  },
  ".is-link.input,.is-link.textarea": { borderColor: "#3273dc" },
  ".is-link.input:active,.is-link.input:focus,.is-link.is-active.input,.is-link.is-active.textarea,.is-link.textarea:active,.is-link.textarea:focus": {
    boxShadow: "0 0 0 .125em rgba(50,115,220,.25)"
  },
  ".textarea": {
    display: "block",
    maxWidth: "100%",
    minWidth: "100%",
    padding: "calc(.75em - 1px)",
    resize: "vertical"
  },
  ".textarea:not([rows])": { maxHeight: "40em", minHeight: "8em" },
  ".file": {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "flex-start",
    position: "relative"
  },
  ".file.is-link .file-cta": {
    backgroundColor: "#3273dc",
    borderColor: "transparent",
    color: "#fff"
  },
  ".file.is-link:hover .file-cta": {
    backgroundColor: "#276cda",
    borderColor: "transparent",
    color: "#fff"
  },
  ".file.is-link:focus .file-cta": {
    borderColor: "transparent",
    boxShadow: "0 0 .5em rgba(50,115,220,.25)",
    color: "#fff"
  },
  ".file.is-link.is-active .file-cta,.file.is-link:active .file-cta": {
    backgroundColor: "#2366d1",
    borderColor: "transparent",
    color: "#fff"
  },
  ".file-label": {
    alignItems: "stretch",
    display: "flex",
    cursor: "pointer",
    justifyContent: "flex-start",
    overflow: "hidden",
    position: "relative"
  },
  ".file-label:hover .file-cta": { backgroundColor: "#eee", color: "#363636" },
  ".file-label:active .file-cta": {
    backgroundColor: "#e8e8e8",
    color: "#363636"
  },
  ".file-input": {
    height: "100%",
    left: "0",
    opacity: "0",
    outline: "none",
    position: "absolute",
    top: "0",
    width: "100%"
  },
  ".file-cta": {
    borderColor: "#dbdbdb",
    borderRadius: "4px",
    fontSize: "1em",
    paddingLeft: "1em",
    paddingRight: "1em",
    whiteSpace: "nowrap",
    backgroundColor: "#f5f5f5",
    color: "#4a4a4a"
  },
  ".label": {
    color: "#363636",
    display: "block",
    fontSize: "1rem",
    fontWeight: "700"
  },
  ".label:not(:last-child)": { marginBottom: ".5em" },
  ".field:not(:last-child)": { marginBottom: ".75rem" },
  ".control": {
    boxSizing: "border-box",
    clear: "both",
    position: "relative",
    textAlign: "left"
  },
  ".control,.menu": { fontSize: "1rem" },
  ".menu-list a": {
    borderRadius: "2px",
    color: "#f5f5f5",
    display: "block",
    padding: ".5em .75em"
  },
  ".menu-list a:hover": {
    backgroundColor: "#2b2523",
    color: "#2b2523 !important"
  },
  ".menu-list a.is-active": { backgroundColor: "#fff", color: "#fff" },
  ".menu-list li ul": {
    borderLeft: "1px solid #fff",
    margin: ".75em",
    paddingLeft: ".75em"
  },
  ".message": {
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    fontSize: "1rem"
  },
  ".message a:not(.button):not(.tag):not(.dropdown-item)": {
    color: "currentColor",
    textDecoration: "underline"
  },
  ".message.is-link": { backgroundColor: "#eef3fc" },
  ".message.is-link .message-body": {
    borderColor: "#3273dc",
    color: "#2160c4"
  },
  ".message-body": {
    borderRadius: "4px",
    border: "solid #dbdbdb",
    borderWidth: "0 0 0 4px",
    color: "#4a4a4a",
    padding: "1.25em 1.5em"
  },
  ".message-body code,.navbar": { backgroundColor: "#fff" },
  ".navbar": { minHeight: "3.25rem", position: "relative", zIndex: "30" },
  ".navbar.is-link": { backgroundColor: "#3273dc", color: "#fff" },
  ".navbar.is-link .navbar-brand>.navbar-item": { color: "#fff" },
  ".navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:focus,.navbar.is-link .navbar-brand>a.navbar-item:hover": {
    backgroundColor: "#2366d1",
    color: "#fff"
  },
  ".navbar.is-link .navbar-burger": { color: "#fff" },
  ".navbar>.container": { width: "100%" },
  ".navbar-brand,.navbar>.container": {
    alignItems: "stretch",
    display: "flex",
    minHeight: "3.25rem"
  },
  ".navbar-brand": { flexShrink: "0" },
  ".navbar-brand a.navbar-item:focus,.navbar-brand a.navbar-item:hover": {
    backgroundColor: "transparent"
  },
  ".navbar-burger": {
    color: "#4a4a4a",
    cursor: "pointer",
    display: "block",
    height: "3.25rem",
    position: "relative",
    width: "3.25rem",
    marginLeft: "auto"
  },
  ".navbar-burger span": {
    backgroundColor: "currentColor",
    display: "block",
    height: "1px",
    left: "calc(50% - 8px)",
    position: "absolute",
    transformOrigin: "center",
    transitionDuration: "86ms",
    transitionProperty: "background-color,opacity,transform",
    transitionTimingFunction: "ease-out",
    width: "16px"
  },
  ".navbar-burger span:first-child": { top: "calc(50% - 6px)" },
  ".navbar-burger span:nth-child(2)": { top: "calc(50% - 1px)" },
  ".navbar-burger span:nth-child(3)": { top: "calc(50% + 4px)" },
  ".navbar-burger:hover": { backgroundColor: "rgba(0,0,0,.05)" },
  ".navbar-burger.is-active span:first-child": {
    transform: "translateY(5px) rotate(45deg)"
  },
  ".navbar-burger.is-active span:nth-child(2)": { opacity: "0" },
  ".navbar-burger.is-active span:nth-child(3)": {
    transform: "translateY(-5px) rotate(-45deg)"
  },
  ".navbar-menu": { display: "none" },
  ".navbar-item": {
    color: "#4a4a4a",
    display: "block",
    lineHeight: "1.5",
    padding: ".5rem .75rem",
    position: "relative",
    flexGrow: "0",
    flexShrink: "0"
  },
  ".navbar-item .icon:only-child": {
    marginLeft: "-.25rem",
    marginRight: "-.25rem"
  },
  "a.navbar-item": { cursor: "pointer" },
  "a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:focus-within,a.navbar-item:hover": {
    backgroundColor: "#fafafa",
    color: "#3273dc"
  },
  ".navbar-item img": { maxHeight: "1.75rem" },
  "@media screen and (max-width:1023px)": {
    ".navbar>.container": { display: "block" },
    ".navbar-brand .navbar-item": { alignItems: "center", display: "flex" },
    ".navbar-menu": {
      backgroundColor: "#fff",
      boxShadow: "0 8px 16px rgba(43,37,35,.1)",
      padding: ".5rem 0"
    },
    ".navbar-menu.is-active": { display: "block" }
  },
  ".column": {
    display: "block",
    flexBasis: "0",
    flexGrow: "1",
    flexShrink: "1",
    padding: ".75rem"
  },
  ".columns": {
    marginLeft: "-.75rem",
    marginRight: "-.75rem",
    marginTop: "-.75rem"
  },
  ".columns:last-child": { marginBottom: "-.75rem" },
  ".columns:not(:last-child)": { marginBottom: ".75rem" },
  ".columns.is-multiline": { flexWrap: "wrap" },
  ".tile": {
    alignItems: "stretch",
    display: "block",
    flexBasis: "0",
    flexGrow: "1",
    flexShrink: "1",
    minHeight: ["-webkit-min-content", "min-content"]
  },
  ".tile.is-ancestor": {
    marginLeft: "-.75rem",
    marginRight: "-.75rem",
    marginTop: "-.75rem"
  },
  ".tile.is-ancestor:last-child": { marginBottom: "-.75rem" },
  ".tile.is-ancestor:not(:last-child)": { marginBottom: ".75rem" },
  ".tile.is-child": { margin: "0 !important" },
  ".tile.is-parent": { padding: ".75rem" },
  ".tile.is-vertical": { flexDirection: "column" },
  ".tile.is-vertical>.tile.is-child:not(:last-child)": {
    marginBottom: "1.5rem !important"
  },
  ".section": { padding: "3rem 1.5rem" },
  ".footer": { backgroundColor: "#fafafa", padding: "3rem 1.5rem 6rem" },
  "@media screen and (min-width:769px) and (max-width:1023px)": {
    ".blog-list-item .featured-thumbnail": { flexBasis: "50%" }
  }
};

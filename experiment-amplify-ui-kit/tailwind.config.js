module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundsprimary: "var(--backgroundsprimary)",
        "colorred500-d40511-dhl-red": "var(--colorred500-d40511-dhl-red)",
        "dhl-red": "var(--dhl-red)",
        "gray-05": "var(--gray-05)",
        "gray-10": "var(--gray-10)",
        "gray-20": "var(--gray-20)",
        "gray-30": "var(--gray-30)",
        "gray-45": "var(--gray-45)",
        "gray-60": "var(--gray-60)",
        "gray-80": "var(--gray-80)",
        "grey-05": "var(--grey-05)",
        "grey-20": "var(--grey-20)",
        "grey-45": "var(--grey-45)",
        "grey-80": "var(--grey-80)",
        "light-green": "var(--light-green)",
        "light-labels-1primary": "var(--light-labels-1primary)",
        primaryblack: "var(--primaryblack)",
        "primarydhl-red": "rgba(212, 5, 17, 1)",
        primarypostyellow: "var(--primarypostyellow)",
        primarywhite: "rgba(255, 255, 255, 1)",
        "secondarylight-yellow": "rgba(253, 250, 236, 1)",
        "web-black": "rgba(0, 0, 0, 0.9)",
        white: "var(--white)",
      },
      fontFamily: {
        "body-large-bd": "var(--body-large-bd-font-family)",
        "body-large-rg": "var(--body-large-rg-font-family)",
        "body-large-rg-underlined":
          "var(--body-large-rg-underlined-font-family)",
        "body-medium-bd": "var(--body-medium-bd-font-family)",
        "body-medium-rg": "var(--body-medium-rg-font-family)",
        "body-medium-rg-underlined":
          "var(--body-medium-rg-underlined-font-family)",
        "copy-large": "var(--copy-large-font-family)",
        "copy-medium-bold": "var(--copy-medium-bold-font-family)",
        "copy-text": "var(--copy-text-font-family)",
        "desktop-body-copy": "var(--desktop-body-copy-font-family)",
        "desktop-body-copy-bold": "var(--desktop-body-copy-bold-font-family)",
        "desktop-body-copy-small": "var(--desktop-body-copy-small-font-family)",
        "desktop-body-copy-small-bold":
          "var(--desktop-body-copy-small-bold-font-family)",
        "desktop-heading3-blk": "var(--desktop-heading3-blk-font-family)",
        "desktop-heading4-blk": "var(--desktop-heading4-blk-font-family)",
        "desktop-heading4-rg": "var(--desktop-heading4-rg-font-family)",
        "desktop-headline-large": "var(--desktop-headline-large-font-family)",
        "desktop-headline-main": "var(--desktop-headline-main-font-family)",
        "desktop-headline-secondary":
          "var(--desktop-headline-secondary-font-family)",
        "desktop-paragraph-header":
          "var(--desktop-paragraph-header-font-family)",
        "desktop-paragraph-header-bold":
          "var(--desktop-paragraph-header-bold-font-family)",
        "desktop-section-header": "var(--desktop-section-header-font-family)",
        "desktop-section-header-condensed":
          "var(--desktop-section-header-condensed-font-family)",
        "desktop-section-header-small-bold":
          "var(--desktop-section-header-small-bold-font-family)",
        "larger-copy-bold-compact":
          "var(--larger-copy-bold-compact-font-family)",
        "mobile-body-copy": "var(--mobile-body-copy-font-family)",
        "mobile-body-copy-med": "var(--mobile-body-copy-med-font-family)",
        "mobile-body-copy-med-bold":
          "var(--mobile-body-copy-med-bold-font-family)",
        "mobile-body-copy-small": "var(--mobile-body-copy-small-font-family)",
        "mobile-body-copy-small-bold":
          "var(--mobile-body-copy-small-bold-font-family)",
        "mobile-heading2": "var(--mobile-heading2-font-family)",
        "mobile-heading4-bd": "var(--mobile-heading4-bd-font-family)",
        "mobile-heading4-rg": "var(--mobile-heading4-rg-font-family)",
        "mobile-heading5-bd": "var(--mobile-heading5-bd-font-family)",
        "mobile-heading5-rg": "var(--mobile-heading5-rg-font-family)",
        "mobile-headline-main": "var(--mobile-headline-main-font-family)",
        "mobile-headline-secondary":
          "var(--mobile-headline-secondary-font-family)",
        "mobile-paragraph-header": "var(--mobile-paragraph-header-font-family)",
        "mobile-section-header": "var(--mobile-section-header-font-family)",
        "paragraph-medium": "var(--paragraph-medium-font-family)",
        "paragraph-medium-bold": "var(--paragraph-medium-bold-font-family)",
        "SECONDARY-HEADLINE": "var(--SECONDARY-HEADLINE-font-family)",
      },
      boxShadow: {
        "card-drop-shadow": "var(--card-drop-shadow)",
        "shadow-15": "var(--shadow-15)",
      },
      fontSize: {
        "desktop-paragraph-header": "var(--desktop-paragraph-header-font-size)",
        "desktop-paragraph-header-bold":
          "var(--desktop-paragraph-header-bold-font-size)",
        "desktop-section-header-condensed":
          "var(--desktop-section-header-condensed-font-size)",
        "mobile-body-copy": "var(--mobile-body-copy-font-size)",
      },
      fontWeight: {
        "desktop-paragraph-header":
          "var(--desktop-paragraph-header-font-weight)",
        "desktop-paragraph-header-bold":
          "var(--desktop-paragraph-header-bold-font-weight)",
        "desktop-section-header-condensed":
          "var(--desktop-section-header-condensed-font-weight)",
        "mobile-body-copy": "var(--mobile-body-copy-font-weight)",
      },
      lineHeight: {
        "desktop-paragraph-header":
          "var(--desktop-paragraph-header-line-height)",
        "desktop-paragraph-header-bold":
          "var(--desktop-paragraph-header-bold-line-height)",
        "desktop-section-header-condensed":
          "var(--desktop-section-header-condensed-line-height)",
        "mobile-body-copy": "var(--mobile-body-copy-line-height)",
      },
      letterSpacing: {
        "desktop-paragraph-header":
          "var(--desktop-paragraph-header-letter-spacing)",
        "desktop-paragraph-header-bold":
          "var(--desktop-paragraph-header-bold-letter-spacing)",
        "desktop-section-header-condensed":
          "var(--desktop-section-header-condensed-letter-spacing)",
        "mobile-body-copy": "var(--mobile-body-copy-letter-spacing)",
      },
    },
  },
  plugins: [],
};

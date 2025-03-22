/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorsbackgrounderror: "#F5E9E8",
        colorsbackgroundinfo: "#E9F1F8",
        colorsbackgroundprimary: "#F2F7FA",
        colorsbackgroundsecondary: "#F5F5F5",
        colorsbackgroundtertiary: "#FFFFFF",
        "colorsblue-80": "#1569E0",
        colorsbordererror: "#D32822",
        "colorsbrandprimary-10": "#F2F7FA",
        "colorsbrandprimary-100": "#0052CC",
        "colorsbrandprimary-60": "#6554C0",
        "colorsbrandprimary-80": "#367BF5",
        "colorsbrandprimary-90": "#174EA6",
        "colorsbrandsecondary-60": "#6554C0",
        colorsfonterror: "#D32822",
        colorsfontinfo: "#174EA6",
        colorsfontinteractive: "#0052CC",
        colorsfontprimary: "#262626",
        colorsfontsecondary: "#595959",
        colorsfonttertiary: "#8C8C8C",
        "colorsneutral-60": "#69758C",
        colorswhite: "#FFFFFF",
        componentsalertbackgroundcolor: "#F2F7FA",
        componentsalerterrorbackgroundcolor: "#F5E9E8",
        componentsalertinfobackgroundcolor: "#E9F1F8",
        componentsalertsuccessbackgroundcolor: "#E8F5E9",
        componentsalertwarningbackgroundcolor: "#FDF6EC",
        componentsbadgebackgroundcolor: "#F2F7FA",
        componentsbadgeerrorbackgroundcolor: "#F5E9E8",
        componentsbadgeinfobackgroundcolor: "#E9F1F8",
        componentsbadgesuccessbackgroundcolor: "#E8F5E9",
        componentsbadgewarningbackgroundcolor: "#FDF6EC",
        componentsbuttonbordercolor: "#D9E1E7",
        componentsbuttoncolor: "#FFFFFF",
        componentsbuttondestructivebackgroundcolor: "#FFEBEB",
        componentsbuttondestructivebordercolor: "#FFCDD2",
        componentsbuttondestructivedisabledbackgroundcolor: "#F2F2F2",
        componentsbuttondisabledbordercolor: "#D9E1E7",
        componentsbuttonlinkcolor: "#0052CC",
        componentsbuttonprimarybackgroundcolor: "#0052CC",
        componentsbuttonprimarybordercolor: "#0052CC",
        componentsbuttonprimarycolor: "#FFFFFF",
        componentsbuttonprimarydisabledbackgroundcolor: "#CCD9F2",
        componentsbuttonwarningbackgroundcolor: "#FFF4E5",
        componentsbuttonwarningbordercolor: "#FFE19C",
        componentsbuttonwarningdisabledbackgroundcolor: "#FDF6EC",
        componentsbuttonwarningdisabledbordercolor: "#F5C97B",
        componentscardoutlinedbordercolor: "#EBEBEB",
        componentsdividerbordercolor: "#D9E1E7",
        componentsfieldcontrolbordercolor: "#D9E1E7",
        componentsfieldcontrolplaceholdercolor: "#8C8C8C",
        componentsfieldlabelcolor: "#262626",
        componentsfieldmessagesdescriptioncolor: "#8C8C8C",
        grayscalewhite: "#FFFFFF",
        background: "#FFFFFF",
        foreground: "#262626",
      },
      fontFamily: {
        "body-body": ["Inter"],
        "body-body-large": ["Inter"],
        "button-default": ["Inter"],
        "components-button-default": ["Inter"],
        "components-button-large": ["Inter"],
        "components-fieldcontrol-default": ["Inter"],
        "fieldmessages-description-default": ["Inter"],
        "heading-h4": ["Inter"],
        "label-default": ["Inter"],
        medium: ["Inter"],
        xxxl: ["Inter"],
        sans: ["Inter"],
        mono: ["IBM Plex Mono"],
      },
      fontSize: {
        "body-body": "16px",
        "body-body-large": "18px",
        "button-default": "16px",
        "components-button-default": "16px",
        "components-button-large": "18px",
        "components-fieldcontrol-default": "16px",
        "fieldmessages-description-default": "14px",
        "heading-h4": "30px",
        "label-default": "16px",
        medium: "16px",
        xxxl: "48px",
      },
      fontWeight: {
        "body-body": 400,
        "body-body-large": 400,
        "button-default": 500,
        "components-button-default": 500,
        "components-button-large": 500,
        "components-fieldcontrol-default": 400,
        "fieldmessages-description-default": 400,
        "heading-h4": 600,
        "label-default": 400,
        medium: 500,
        xxxl: 600,
      },
      lineHeight: {
        "body-body": "24px",
        "body-body-large": "28px",
        "button-default": "24px",
        "components-button-default": "24px",
        "components-button-large": "24px",
        "components-fieldcontrol-default": "24px",
        "fieldmessages-description-default": "20px",
        "heading-h4": "36px",
        "label-default": "24px",
        medium: "24px",
        xxxl: "56px",
      },
      letterSpacing: {
        "body-body": "0px",
        "body-body-large": "0px",
        "button-default": "0.2px",
        "components-button-default": "0.2px",
        "components-button-large": "0.2px",
        "components-fieldcontrol-default": "0.2px",
        "fieldmessages-description-default": "0.2px",
        "heading-h4": "0.2px",
        "label-default": "0.2px",
        medium: "0.2px",
        xxxl: "0.2px",
      },
      fontStyle: {
        "body-body": "normal",
        "body-body-large": "normal",
        "button-default": "normal",
        "components-button-default": "normal",
        "components-button-large": "normal",
        "components-fieldcontrol-default": "normal",
        "fieldmessages-description-default": "normal",
        "heading-h4": "normal",
        "label-default": "normal",
        medium: "normal",
        xxxl: "normal",
      },
      boxShadow: {
        "components-fieldcontrol-quiet": "0px 1px 2px rgba(0, 0, 0, 0.06)",
        "drop-shadow": "0px 4px 12px rgba(0, 0, 0, 0.1)",
        dropshadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        "shadows-medium": "0px 2px 6px rgba(0, 0, 0, 0.1)",
        "shadows-small": "0px 1px 3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

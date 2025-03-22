/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorsbackgrounderror: "var(--colorsbackgrounderror)",
        colorsbackgroundinfo: "var(--colorsbackgroundinfo)",
        colorsbackgroundprimary: "var(--colorsbackgroundprimary)",
        colorsbackgroundsecondary: "var(--colorsbackgroundsecondary)",
        colorsbackgroundtertiary: "var(--colorsbackgroundtertiary)",
        "colorsblue-80": "var(--colorsblue-80)",
        colorsbordererror: "var(--colorsbordererror)",
        "colorsbrandprimary-10": "var(--colorsbrandprimary-10)",
        "colorsbrandprimary-100": "var(--colorsbrandprimary-100)",
        "colorsbrandprimary-60": "var(--colorsbrandprimary-60)",
        "colorsbrandprimary-80": "var(--colorsbrandprimary-80)",
        "colorsbrandprimary-90": "var(--colorsbrandprimary-90)",
        "colorsbrandsecondary-60": "var(--colorsbrandsecondary-60)",
        colorsfonterror: "var(--colorsfonterror)",
        colorsfontinfo: "var(--colorsfontinfo)",
        colorsfontinteractive: "var(--colorsfontinteractive)",
        colorsfontprimary: "var(--colorsfontprimary)",
        colorsfontsecondary: "var(--colorsfontsecondary)",
        colorsfonttertiary: "var(--colorsfonttertiary)",
        "colorsneutral-40": "var(--colorsneutral-40)",
        "colorsneutral-60": "var(--colorsneutral-60)",
        colorswhite: "var(--colorswhite)",
        componentsalertbackgroundcolor: "var(--componentsalertbackgroundcolor)",
        componentsalerterrorbackgroundcolor:
          "var(--componentsalerterrorbackgroundcolor)",
        componentsalertinfobackgroundcolor:
          "var(--componentsalertinfobackgroundcolor)",
        componentsalertsuccessbackgroundcolor:
          "var(--componentsalertsuccessbackgroundcolor)",
        componentsalertwarningbackgroundcolor:
          "var(--componentsalertwarningbackgroundcolor)",
        componentsbadgebackgroundcolor: "var(--componentsbadgebackgroundcolor)",
        componentsbadgeerrorbackgroundcolor:
          "var(--componentsbadgeerrorbackgroundcolor)",
        componentsbadgeinfobackgroundcolor:
          "var(--componentsbadgeinfobackgroundcolor)",
        componentsbadgesuccessbackgroundcolor:
          "var(--componentsbadgesuccessbackgroundcolor)",
        componentsbadgewarningbackgroundcolor:
          "var(--componentsbadgewarningbackgroundcolor)",
        componentsbuttonbordercolor: "var(--componentsbuttonbordercolor)",
        componentsbuttoncolor: "var(--componentsbuttoncolor)",
        componentsbuttondestructivebackgroundcolor:
          "var(--componentsbuttondestructivebackgroundcolor)",
        componentsbuttondestructivebordercolor:
          "var(--componentsbuttondestructivebordercolor)",
        componentsbuttondestructivedisabledbackgroundcolor:
          "var(--componentsbuttondestructivedisabledbackgroundcolor)",
        componentsbuttondisabledbordercolor:
          "var(--componentsbuttondisabledbordercolor)",
        componentsbuttonlinkcolor: "var(--componentsbuttonlinkcolor)",
        componentsbuttonprimarybackgroundcolor:
          "var(--componentsbuttonprimarybackgroundcolor)",
        componentsbuttonprimarybordercolor:
          "var(--componentsbuttonprimarybordercolor)",
        componentsbuttonprimarycolor: "var(--componentsbuttonprimarycolor)",
        componentsbuttonprimarydisabledbackgroundcolor:
          "var(--componentsbuttonprimarydisabledbackgroundcolor)",
        componentsbuttonwarningbackgroundcolor:
          "var(--componentsbuttonwarningbackgroundcolor)",
        componentsbuttonwarningbordercolor:
          "var(--componentsbuttonwarningbordercolor)",
        componentsbuttonwarningdisabledbackgroundcolor:
          "var(--componentsbuttonwarningdisabledbackgroundcolor)",
        componentsbuttonwarningdisabledbordercolor:
          "var(--componentsbuttonwarningdisabledbordercolor)",
        componentscardoutlinedbordercolor:
          "var(--componentscardoutlinedbordercolor)",
        componentsdividerbordercolor: "var(--componentsdividerbordercolor)",
        componentscheckboxbuttoncolor: "var(--componentscheckboxbuttoncolor)",
        componentscheckboxiconbackgroundcolor:
          "var(--componentscheckboxiconbackgroundcolor)",
        componentsfieldcontrolbordercolor:
          "var(--componentsfieldcontrolbordercolor)",
        componentsfieldcontrolplaceholdercolor:
          "var(--componentsfieldcontrolplaceholdercolor)",
        componentsfieldlabelcolor: "var(--componentsfieldlabelcolor)",
        componentsfieldmessagesdescriptioncolor:
          "var(--componentsfieldmessagesdescriptioncolor)",
        grayscalewhite: "var(--grayscalewhite)",
      },
      fontFamily: {
        "body-body": "var(--body-body-font-family)",
        "body-body-large": "var(--body-body-large-font-family)",
        "button-default": "var(--button-default-font-family)",
        "components-button-default":
          "var(--components-button-default-font-family)",
        "components-button-large": "var(--components-button-large-font-family)",
        "components-button-small": "var(--components-button-small-font-family)",
        "components-field-default":
          "var(--components-field-default-font-family)",
        "components-fieldcontrol-default":
          "var(--components-fieldcontrol-default-font-family)",
        "fieldmessages-description-default":
          "var(--fieldmessages-description-default-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
        "label-default": "var(--label-default-font-family)",
        medium: "var(--medium-font-family)",
        xxxl: "var(--xxxl-font-family)",
      },
      boxShadow: {
        "components-fieldcontrol-quiet": "var(--components-fieldcontrol-quiet)",
        "drop-shadow": "var(--drop-shadow)",
        dropshadow: "var(--dropshadow)",
        "shadows-medium": "var(--shadows-medium)",
        "shadows-small": "var(--shadows-small)",
      },
    },
  },
  plugins: [],
};

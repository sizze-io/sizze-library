import React from "react";
import * as _Builtin from "./_Builtin";
import { SettingsInsideSection } from "./SettingsInsideSection";

export function SettingsSection({
  as: _Component = _Builtin.Block,
  settingsSlot,
  theme,
  styleProps = {},
}) {
  return (
    <_Component
      className="settingssection"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      {settingsSlot ?? (
        <>
          <SettingsInsideSection />
          <_Builtin.Block className="sectioninsidesettings" tag="div">
            <_Builtin.Block tag="div">{"Support"}</_Builtin.Block>
            <_Builtin.Block className="rowsettings" tag="div">
              <_Builtin.Block className="settingswrapperrow" tag="div">
                <_Builtin.Block className="wrappericon" tag="div">
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10%208.50224C10.1762%208.00136%2010.524%207.579%2010.9817%207.30998C11.4395%207.04095%2011.9777%206.9426%2012.501%207.03237C13.0243%207.12213%2013.499%207.39421%2013.8409%207.80041C14.1829%208.20661%2014.37%208.72072%2014.3692%209.25168C14.3692%2010.7506%2012.1209%2011.5%2012.1209%2011.5M12.1499%2014.5H12.1599M9.9%2019.2L11.36%2021.1467C11.5771%2021.4362%2011.6857%2021.5809%2011.8188%2021.6327C11.9353%2021.678%2012.0647%2021.678%2012.1812%2021.6327C12.3143%2021.5809%2012.4229%2021.4362%2012.64%2021.1467L14.1%2019.2C14.3931%2018.8091%2014.5397%2018.6137%2014.7185%2018.4645C14.9569%2018.2656%2015.2383%2018.1248%2015.5405%2018.0535C15.7671%2018%2016.0114%2018%2016.5%2018C17.8978%2018%2018.5967%2018%2019.1481%2017.7716C19.8831%2017.4672%2020.4672%2016.8831%2020.7716%2016.1481C21%2015.5967%2021%2014.8978%2021%2013.5V7.8C21%206.11984%2021%205.27976%2020.673%204.63803C20.3854%204.07354%2019.9265%203.6146%2019.362%203.32698C18.7202%203%2017.8802%203%2016.2%203H7.8C6.11984%203%205.27976%203%204.63803%203.32698C4.07354%203.6146%203.6146%204.07354%203.32698%204.63803C3%205.27976%203%206.11984%203%207.8V13.5C3%2014.8978%203%2015.5967%203.22836%2016.1481C3.53284%2016.8831%204.11687%2017.4672%204.85195%2017.7716C5.40326%2018%206.10218%2018%207.5%2018C7.98858%2018%208.23287%2018%208.45951%2018.0535C8.76169%2018.1248%209.04312%2018.2656%209.2815%2018.4645C9.46028%2018.6137%209.60685%2018.8091%209.9%2019.2Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="text-block-6"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c70150559a-01505578"
                  tag="div"
                >
                  {"Help center"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="arrowright"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c70150559c-01505578"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon is-icon-large"
                    id="w-node-_798c00bb-0cff-9bf3-0ade-35c70150559d-01505578"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="settingswrapperrow" tag="div">
                <_Builtin.Block className="wrappericon" tag="div">
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3%207.8C3%206.11984%203%205.27976%203.32698%204.63803C3.6146%204.07354%204.07354%203.6146%204.63803%203.32698C5.27976%203%206.11984%203%207.8%203H16.2C17.8802%203%2018.7202%203%2019.362%203.32698C19.9265%203.6146%2020.3854%204.07354%2020.673%204.63803C21%205.27976%2021%206.11984%2021%207.8V13.2C21%2014.8802%2021%2015.7202%2020.673%2016.362C20.3854%2016.9265%2019.9265%2017.3854%2019.362%2017.673C18.7202%2018%2017.8802%2018%2016.2%2018H13.6837C13.0597%2018%2012.7477%2018%2012.4492%2018.0613C12.1844%2018.1156%2011.9282%2018.2055%2011.6875%2018.3285C11.4162%2018.4671%2011.1725%2018.662%2010.6852%2019.0518L8.29976%2020.9602C7.88367%2021.2931%207.67563%2021.4595%207.50054%2021.4597C7.34827%2021.4599%207.20422%2021.3906%207.10923%2021.2716C7%2021.1348%207%2020.8684%207%2020.3355V18C6.07003%2018%205.60504%2018%205.22354%2017.8978C4.18827%2017.6204%203.37962%2016.8117%203.10222%2015.7765C3%2015.395%203%2014.93%203%2014V7.8Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.9969%207.69925C11.0972%206.6604%209.59689%206.38095%208.46961%207.33223C7.34234%208.2835%207.18364%209.87399%208.06889%2010.9991C8.61733%2011.6961%209.99389%2012.9691%2010.962%2013.837C11.3176%2014.1557%2011.4953%2014.3151%2011.7087%2014.3793C11.8918%2014.4344%2012.1021%2014.4344%2012.2851%2014.3793C12.4985%2014.3151%2012.6763%2014.1557%2013.0319%2013.837C13.9999%2012.9691%2015.3765%2011.6961%2015.9249%2010.9991C16.8102%209.87399%2016.6709%208.2735%2015.5242%207.33223C14.3776%206.39096%2012.8966%206.6604%2011.9969%207.69925Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="text-block-6"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055a1-01505578"
                  tag="div"
                >
                  {"Send feedback "}
                </_Builtin.Block>
                <_Builtin.Block
                  className="arrowright"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055a3-01505578"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon is-icon-large"
                    id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055a4-01505578"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="sectioninsidesettings" tag="div">
            <_Builtin.Block tag="div">{"More"}</_Builtin.Block>
            <_Builtin.Block className="rowsettings" tag="div">
              <_Builtin.Block className="settingswrapperrow" tag="div">
                <_Builtin.Block className="wrappericon" tag="div">
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16.5%204L21.5%209M21.5%204L16.5%209M16%2021V19.8C16%2018.1198%2016%2017.2798%2015.673%2016.638C15.3854%2016.0735%2014.9265%2015.6146%2014.362%2015.327C13.7202%2015%2012.8802%2015%2011.2%2015H6.8C5.11984%2015%204.27976%2015%203.63803%2015.327C3.07354%2015.6146%202.6146%2016.0735%202.32698%2016.638C2%2017.2798%202%2018.1198%202%2019.8V21M12.5%207.5C12.5%209.433%2010.933%2011%209%2011C7.067%2011%205.5%209.433%205.5%207.5C5.5%205.567%207.067%204%209%204C10.933%204%2012.5%205.567%2012.5%207.5Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="text-block-6"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055ac-01505578"
                  tag="div"
                >
                  {"Delete account"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="arrowright"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055ae-01505578"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon is-icon-large"
                    id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055af-01505578"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="settingswrapperrow" tag="div">
                <_Builtin.Block className="wrappericon" tag="div">
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2014L4%209M4%209L9%204M4%209H10.4C13.7603%209%2015.4405%209%2016.7239%209.65396C17.8529%2010.2292%2018.7708%2011.1471%2019.346%2012.2761C20%2013.5595%2020%2015.2397%2020%2018.6V20%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="text-block-6"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055b3-01505578"
                  tag="div"
                >
                  {"Log out"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="arrowright"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055b5-01505578"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon is-icon-large"
                    id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055b6-01505578"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </>
      )}
    </_Component>
  );
}

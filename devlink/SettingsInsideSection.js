import React from "react";
import * as _Builtin from "./_Builtin";
import { RowSettings } from "./RowSettings";

export function SettingsInsideSection({
  as: _Component = _Builtin.Block,
  title = "General",
  settingsItemSlot,
  theme,
  styleProps = {},
  titleSettings = {},
}) {
  return (
    <_Component
      className="sectioninsidesettings"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block tag="div" {...titleSettings}>
        {title}
      </_Builtin.Block>
      <_Builtin.Block className="rowsettings" tag="div">
        {settingsItemSlot ?? (
          <>
            <RowSettings visibilityIconLeft={true} visibilityIconRight={true} />
            <_Builtin.Block className="settingswrapperrow" tag="div">
              <_Builtin.Block className="wrappericon" tag="div">
                <_Builtin.HtmlEmbed
                  className="uui-button-icon"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5%2022V17M4.5%207V2M2%204.5H7M2%2019.5H7M13%203L11.2658%207.50886C10.9838%208.24209%2010.8428%208.60871%2010.6235%208.91709C10.4292%209.1904%2010.1904%209.42919%209.91709%209.62353C9.60871%209.84281%209.24209%209.98381%208.50886%2010.2658L4%2012L8.50886%2013.7342C9.24209%2014.0162%209.60871%2014.1572%209.91709%2014.3765C10.1904%2014.5708%2010.4292%2014.8096%2010.6235%2015.0829C10.8428%2015.3913%2010.9838%2015.7579%2011.2658%2016.4911L13%2021L14.7342%2016.4911C15.0162%2015.7579%2015.1572%2015.3913%2015.3765%2015.0829C15.5708%2014.8096%2015.8096%2014.5708%2016.0829%2014.3765C16.3913%2014.1572%2016.7579%2014.0162%2017.4911%2013.7342L22%2012L17.4911%2010.2658C16.7579%209.98381%2016.3913%209.8428%2016.0829%209.62353C15.8096%209.42919%2015.5708%209.1904%2015.3765%208.91709C15.1572%208.60871%2015.0162%208.24209%2014.7342%207.50886L13%203Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className="text-block-6"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6ec-327ee6e4"
                tag="div"
              >
                {"Subscription"}
              </_Builtin.Block>
              <_Builtin.Block
                className="arrowright"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6ee-327ee6e4"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="uui-button-icon is-icon-large"
                  id="w-node-bc598409-72b6-93de-61f3-3a51327ee6ef-327ee6e4"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="settingswrapperrow" tag="div">
              <_Builtin.Block className="wrappericon" tag="div">
                <_Builtin.HtmlEmbed
                  className="uui-button-icon"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.07598%207.48282L7.36402%2010.5457C7.58715%2010.705%207.69872%2010.7847%207.81548%2010.8031C7.91821%2010.8192%208.02343%2010.8029%208.11648%2010.7565C8.22223%2010.7037%208.30449%2010.594%208.46901%2010.3747L9.37511%209.16652C9.42164%209.10448%209.4449%209.07347%209.47224%209.04671C9.49652%209.02295%209.52315%209.00173%209.55173%208.98338C9.58392%208.9627%209.61935%208.94696%209.6902%208.91546L13.5588%207.19609C13.7192%207.12482%2013.7993%207.08918%2013.8598%207.03352C13.9133%206.9843%2013.9554%206.924%2013.9832%206.85684C14.0146%206.78091%2014.0204%206.69336%2014.0321%206.51826L14.3154%202.2694M13.5%2013.5L16.116%2014.6211C16.4195%2014.7512%2016.5713%2014.8163%2016.6517%2014.9243C16.7222%2015.0191%2016.7569%2015.1358%2016.7496%2015.2537C16.7413%2015.3881%2016.6497%2015.5255%2016.4665%2015.8002L15.2375%2017.6438C15.1507%2017.774%2015.1072%2017.8391%2015.0499%2017.8863C14.9991%2017.928%2014.9406%2017.9593%2014.8777%2017.9784C14.8067%2018%2014.7284%2018%2014.5719%2018H12.5766C12.3693%2018%2012.2656%2018%2012.1774%2017.9653C12.0995%2017.9347%2012.0305%2017.885%2011.9768%2017.8208C11.916%2017.7481%2011.8832%2017.6497%2011.8177%2017.453L11.1048%2015.3144C11.0661%2015.1983%2011.0468%2015.1403%2011.0417%2015.0814C11.0372%2015.0291%2011.0409%2014.9764%2011.0528%2014.9253C11.0662%2014.8677%2011.0935%2014.813%2011.1482%2014.7036L11.6897%2013.6206C11.7997%2013.4005%2011.8547%2013.2905%2011.9395%2013.2222C12.0141%2013.162%2012.1046%2013.1246%2012.1999%2013.1143C12.3081%2013.1027%2012.4248%2013.1416%2012.6582%2013.2194L13.5%2013.5ZM22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className="text-block-6"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6f3-327ee6e4"
                tag="div"
              >
                {"Language"}
              </_Builtin.Block>
              <_Builtin.Block
                className="arrowright"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6f5-327ee6e4"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="uui-button-icon is-icon-large"
                  id="w-node-bc598409-72b6-93de-61f3-3a51327ee6f6-327ee6e4"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="settingswrapperrow" tag="div">
              <_Builtin.Block className="wrappericon" tag="div">
                <_Builtin.HtmlEmbed
                  className="uui-button-icon"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.35419%2021C10.0593%2021.6224%2010.9856%2022%2012%2022C13.0145%2022%2013.9407%2021.6224%2014.6458%2021M18%208C18%206.4087%2017.3679%204.88258%2016.2427%203.75736C15.1174%202.63214%2013.5913%202%2012%202C10.4087%202%208.8826%202.63214%207.75738%203.75736C6.63216%204.88258%206.00002%206.4087%206.00002%208C6.00002%2011.0902%205.22049%2013.206%204.34968%2014.6054C3.61515%2015.7859%203.24788%2016.3761%203.26134%2016.5408C3.27626%2016.7231%203.31488%2016.7926%203.46179%2016.9016C3.59448%2017%204.19261%2017%205.38887%2017H18.6112C19.8074%2017%2020.4056%2017%2020.5382%2016.9016C20.6852%2016.7926%2020.7238%2016.7231%2020.7387%2016.5408C20.7522%2016.3761%2020.3849%2015.7859%2019.6504%2014.6054C18.7795%2013.206%2018%2011.0902%2018%208Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className="text-block-6"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6fa-327ee6e4"
                tag="div"
              >
                {"Notifications"}
              </_Builtin.Block>
              <_Builtin.Block
                className="arrowright"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6fc-327ee6e4"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="uui-button-icon is-icon-large"
                  id="w-node-bc598409-72b6-93de-61f3-3a51327ee6fd-327ee6e4"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}

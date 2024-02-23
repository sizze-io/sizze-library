import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium"],"target":{"selector":".button-secondary","originalId":"65cc4bbc91d3b0194f43510a|fb8fd56b-b8f6-1ca1-ce62-353ed0d87116","appliesTo":"CLASS"},"targets":[{"selector":".button-secondary","originalId":"65cc4bbc91d3b0194f43510a|fb8fd56b-b8f6-1ca1-ce62-353ed0d87116","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681376168077}},"actionLists":{"a-29":{"id":"a-29","title":"Arrow icon hover -> IN","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outSine","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".arrow-icon_icon","selectorGuids":["e0c48bbf-90ff-57b8-1690-d94aa75120f9"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outSine","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".arrow-icon_icon","selectorGuids":["e0c48bbf-90ff-57b8-1690-d94aa75120f9"]},"xValue":-10,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-29-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outSine","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".arrow-icon_icon","selectorGuids":["e0c48bbf-90ff-57b8-1690-d94aa75120f9"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-29-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outSine","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrow-icon_icon","selectorGuids":["e0c48bbf-90ff-57b8-1690-d94aa75120f9"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-29-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outSine","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".arrow-icon_icon","selectorGuids":["e0c48bbf-90ff-57b8-1690-d94aa75120f9"]},"xValue":10,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-29-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outSine","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".arrow-icon_icon","selectorGuids":["e0c48bbf-90ff-57b8-1690-d94aa75120f9"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681376175969}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function WrapperNoLicences({
  as: _Component = _Builtin.Block,
  actionClick = {},
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="wrappernolicences" tag="div">
      <_Builtin.Block className="you-don-t-have-a-license" tag="div">
        <_Builtin.Block className="div-block-27" tag="div">
          <_Builtin.Block className="div-block-28" tag="div">
            <_Builtin.Block className="wrappericon" tag="div">
              <_Builtin.Block className="iconslot" tag="div">
                <_Builtin.HtmlEmbed
                  className="uui-button-icon"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018.5H15M7%2015H17M5%202H19C20.1046%202%2021%202.99492%2021%204.22222V19.7778C21%2021.0051%2020.1046%2022%2019%2022H5C3.89543%2022%203%2021.0051%203%2019.7778V4.22222C3%202.99492%203.89543%202%205%202ZM11.9976%206.21194C11.2978%205.4328%2010.1309%205.22321%209.25414%205.93667C8.37738%206.65013%208.25394%207.84299%208.94247%208.6868C9.631%209.53061%2011.9976%2011.5%2011.9976%2011.5C11.9976%2011.5%2014.3642%209.53061%2015.0527%208.6868C15.7413%207.84299%2015.6329%206.64262%2014.7411%205.93667C13.8492%205.23072%2012.6974%205.4328%2011.9976%206.21194Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {"You don't have a license"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="button-secondary" tag="div" {...actionClick}>
          <_Builtin.Block tag="div">{"Open access"}</_Builtin.Block>
          <_Builtin.Block
            className="arrow-icon_component is-pointing-up"
            tag="div"
          >
            <_Builtin.Block className="arrow-icon_circle" tag="div" />
            <_Builtin.HtmlEmbed
              className="arrow-icon_icon"
              value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewbox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%2010H14M14%2010L10%206M14%2010L10%2014%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="wrapperlogoabsolute" tag="div">
        <_Builtin.Image
          loading="lazy"
          width="65"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65d67d056f9ffbd77ac0bf95_sizze.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}

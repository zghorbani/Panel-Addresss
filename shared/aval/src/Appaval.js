import React, { useEffect } from "react";
import * as cheerio from "cheerio";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import aval from "./aval.html";
import "./avalstyle.css";
import reactDom from "react-dom";
function AppAval() {
  const $ = cheerio.load(aval, {
    _useHtmlParser2: true,
    decodeEntities: false,
  });
  const body = $(`body`).html();
  const address = `<p>
  تهران، منطقه 1، محله قیطریه، قیطریه، خیابان کاوه شمالی، خیابان روشنایی، خیابان صفا، پلاک 4</p>`;
  const name = $(`div.data h1`).html();
  const rate = $("span.score").text();
  // const url ='<iframe src="https://www.google.com/maps/d/edit?mid=113Pa-e5JIgpPS3qxzFKDWlrQGHClnqRg&usp=sharing" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'

  return (
    <>
      <h3 dangerouslySetInnerHTML={{ __html: name }} />
      <div dangerouslySetInnerHTML={{ __html: address }} />
      <div dangerouslySetInnerHTML={{ __html: rate }} />

      {/* <div dangerouslySetInnerHTML={{ __html: url }} />  */}
    </>
  );
}
export default AppAval;

import React from "react";
import * as cheerio from "cheerio";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import neshan from "./neshan.html";

function AppNeshan() {
  const $ = cheerio.load(neshan);
  const body = $(`body`).html();
  const address = $(`span[itemprop=streetAddress]`).html();
  const name = $(`span.point-title`).html();
  // const url =
  //   '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.620523079268!2d51.41073731499735!3d35.76013083324868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5757ddc80486eee!2zMzXCsDQ1JzM2LjUiTiA1McKwMjQnNDYuNSJF!5e0!3m2!1sen!2s!4v1643103458966!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  return (
    <>
      <h3 dangerouslySetInnerHTML={{ __html: name }} />
      <div dangerouslySetInnerHTML={{ __html: address }} />
      {/* <div dangerouslySetInnerHTML={{__html: rate}} /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: url }} />  */}
    </>
  );
}
export default AppNeshan;

import "./App.css";
import React from "react";
import * as cheerio from "cheerio";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import balad from "./balad.html";

function App() {
  const $ = cheerio.load(balad);
  const body = $(`body`).html();
  const address = $(`p.DynamicFields_text__36H36`).html();
  const name = $(`h1.BottomSheet_title__15d-g`).html(); 
  const star= $(`span.Rating_container__141En`).html()
  const rate = $("span.RatingDetail_ratingValue__3uM_E").html();
  // const url =
  //   '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.6205190098194!2d51.41073741499735!3d35.760130933248675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1647a3fd9dd1045!2zMzXCsDQ1JzM2LjUiTiA1McKwMjQnNDYuNSJF!5e0!3m2!1sen!2s!4v1643097479604!5m2!1sen!2s" width="600" height="450" style="border:0;"  loading="lazy"></iframe>';

  return (
    <>
      <h3 dangerouslySetInnerHTML={{ __html: name }} />
      <div dangerouslySetInnerHTML={{ __html: address }} />
      <span dangerouslySetInnerHTML={{ __html: star }} />
      <span dangerouslySetInnerHTML={{ __html: rate }} />

      {/* <div dangerouslySetInnerHTML={{ __html: url }} /> */}
    </>
  );
}
export default App;

/* PLACE */

Carlyle.Place = function (node) {
  if (Carlyle == this) { return new Carlyle.Place(node); }

  // Constants.
  var k = {
  }

  // Properties.
  var p = {
    component: null,
    percent: null
  }

  // Methods and properties available to external code.
  var API = {
    constructor: Carlyle.Place,
    constants: k,
    properties: p
  }


  function setPlace(cmpt, pageN) {
    p.component = cmpt;
    p.percent = pageN / cmpt.lastPageNumber();
    p.chapter = null;
  }


  function componentId() {
    return p.component.properties.id;
  }


  function percentageThrough() {
    return p.percent;
  }


  function pageAtPercentageThrough(pc) {
    return Math.ceil(p.component.lastPageNumber() * pc);
  }


  function pageNumber() {
    return pageAtPercentageThrough(p.percent);
  }


  function chapterInfo() {
    if (p.chapter) {
      return p.chapter;
    }
    return p.chapter = p.component.chapterForPage(pageNumber());
  }


  function chapterTitle() {
    var chp = chapterInfo();
    return chp ? chp.title : null;
  }


  API.setPlace = setPlace;
  API.componentId = componentId;
  API.percentageThrough = percentageThrough;
  API.pageAtPercentageThrough = pageAtPercentageThrough;
  API.pageNumber = pageNumber;
  API.chapterInfo = chapterInfo;
  API.chapterTitle = chapterTitle;

  return API;
}
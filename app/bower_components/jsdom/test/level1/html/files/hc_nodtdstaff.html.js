var jsdom = require("../../../..");
var multiline = require("multiline");

exports.hc_nodtdstaff = function () {
  return jsdom.jsdom(multiline(function () {/*
<html><head><title>hc_nodtdstaff</title></head><body onload="parent.loadComplete()">
 <p>
  <em>EMP0001</em>
  <strong>Margaret Martin</strong>
  <code>Accountant</code>
  <sup>56,000</sup>
  <var>Female</var>
  <acronym title="Yes">1230 North Ave. Dallas, Texas 98551</acronym>
 </p>
</body></html>
*/}));
};

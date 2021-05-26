(this["webpackJsonpcountry-info"]=this["webpackJsonpcountry-info"]||[]).push([[0],{31:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),o=n(8),l=Object(o.b)({name:"filter",initialState:{continent:"all",metric:"all",max:"5"},reducers:{updateContinent:function(t,e){t.continent=e.payload},updateMetric:function(t,e){t.metric=e.payload},updateMax:function(t,e){t.max=e.payload}}}),s=l.actions,u=s.updateContinent,j=s.updateMetric,d=s.updateMax,b=l.reducer,h=Object(o.a)({reducer:{filter:b}}),O=n(3),p=(n(31),n(6)),f=n.n(p),x=n(13),m=n(5),v=n(22),g=n.n(v),y=(n(51),n(52),n(0));function S(t){var e=t.title,n=t.onClick;return Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)("h1",{children:e}),Object(y.jsx)("button",{className:"btn",onClick:n,children:"GO"})]})}n(54);var C=function(t){return t.filter.continent},k=function(t){return t.filter.metric},I=function(t){return t.filter.max};function N(t){var e=t.enable,n=t.continents,c=Object(O.b)(),r=Object(O.b)(),a=Object(O.b)(),i=Object(O.c)(C),o=Object(O.c)(k),l=Object(O.c)(I);return Object(y.jsxs)("div",{className:"filters",children:[Object(y.jsx)("h3",{children:"Filters"}),Object(y.jsxs)("select",{value:i,disabled:e,onChange:function(t){c(u(t.target.value))},children:[Object(y.jsx)("option",{value:"all",children:"ALL"}),n.map((function(t){return Object(y.jsx)("option",{value:t,children:t},t)}))]}),Object(y.jsxs)("select",{disabled:e,value:o,onChange:function(t){r(j(t.target.value))},children:[Object(y.jsx)("option",{value:"all",children:"ALL"}),Object(y.jsx)("option",{value:"areaInSqKm",children:"areaInSqKm"}),Object(y.jsx)("option",{value:"population",children:"Population"})]}),Object(y.jsxs)("select",{disabled:e,value:l,onChange:function(t){a(d(t.target.value))},children:[Object(y.jsx)("option",{value:"5",children:"5"}),Object(y.jsx)("option",{value:"10",children:"10"}),Object(y.jsx)("option",{value:"15",children:"15"}),Object(y.jsx)("option",{value:"20",children:"20"})]})]})}var w=n(4),q=n.n(w),K=n(9),F=n.n(K);n(55);function L(t){var e=t.data,n=t.metric,r=t.onOrder,a=Object(c.useState)(!0),i=Object(m.a)(a,2),o=i[0],l=i[1],s=function(t){r(o,t),l(!o)},u=function(t){var n=0;for(var c in e)n+=parseInt(e[c][t]);return n};return Object(y.jsx)("div",{children:Object(y.jsxs)("table",{children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:Object(y.jsx)("button",{onClick:function(){return s("continent")},children:"Continent Name"})}),Object(y.jsx)("th",{children:Object(y.jsx)("button",{onClick:function(){return s("countryName")},children:"Country Name"})}),"all"===n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("th",{children:Object(y.jsx)("button",{onClick:function(){return s("population")},children:"population"})}),Object(y.jsx)("th",{children:Object(y.jsx)("button",{onClick:function(){return s("areaInSqKm")},children:"areaInSqKm"})})]}):Object(y.jsx)("th",{children:Object(y.jsx)("button",{onClick:function(){return s("".concat(n))},children:n})})]})}),Object(y.jsx)("tbody",{children:e.map((function(t){var e=t.continent,c=t.geonameId,r=t.countryName,a=t.population,i=t.areaInSqKm;return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e}),Object(y.jsx)("td",{children:r}),"all"===n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("td",{children:a}),Object(y.jsx)("td",{children:i})]}):Object(y.jsx)("td",{children:t[n]})]},c)}))}),Object(y.jsx)("tfoot",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{colSpan:"2",children:Object(y.jsx)("strong",{children:"TOTAL"})}),"all"===n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("td",{children:u("population")}),Object(y.jsx)("td",{children:u("areaInSqKm")})]}):Object(y.jsx)("td",{children:u("".concat(n))})]})})]})})}n(56);function M(t){var e=t.data,n=t.continent,c=t.metric,r=t.max,a=t.onOrder,i="all"===n?e:e.filter((function(t){return t.continent===n}));function o(t){var e=i.slice(0,r),n=[];e.map((function(e){return n.push({name:e.countryName,y:parseInt(e[t])}),e}));var c=function(t){var e=i.slice(r,i.length),n=0;for(var c in e)n+=parseInt(e[c][t]);return n}(t);return n.push({name:"Others",y:c}),{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Results ".concat(t)},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f} %</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"".concat(t),data:n}]}}return Object(y.jsxs)("div",{className:"results",children:["all"===c?Object(y.jsxs)("div",{className:"chart-container",children:[Object(y.jsx)(F.a,{highcharts:q.a,options:o("population")}),Object(y.jsx)(F.a,{highcharts:q.a,options:o("areaInSqKm")})]}):Object(y.jsx)(F.a,{highcharts:q.a,options:o(c)}),"all"===n?Object(y.jsx)(L,{data:e,metric:c,onOrder:a}):Object(y.jsx)(L,{data:i,metric:c,onOrder:a})]})}var A=function(t){return t.filter.continent},B=function(t){return t.filter.metric},J=function(t){return t.filter.max};var P=function(){var t,e,n=Object(c.useState)([]),r=Object(m.a)(n,2),a=r[0],i=r[1],o=Object(c.useState)(!0),l=Object(m.a)(o,2),s=l[0],u=l[1],j=Object(O.c)(A),d=Object(O.c)(B),b=Object(O.c)(J),h=function(){var t=Object(x.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://cors-anywhere.herokuapp.com/http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=(t=a,e="continent",t.map((function(t){return t[e]})).map((function(t,e,n){return n.indexOf(t)===e&&e})).filter((function(e){return t[e]})).map((function(e){return t[e]}))).map((function(t){return t.continent}));return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(S,{title:"Frontend Dev CS",onClick:function(t){(function(){var t=Object(x.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:e=t.sent,i(e.geonames);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),u(!1)}}),Object(y.jsx)(N,{enable:s,continents:p}),a.length>0&&Object(y.jsx)(M,{data:a,continent:j,metric:d,max:b,onOrder:function(t,e){var n=a.sort((function(n,c){var r=n[e],a=c[e];return t?r>a:r<a}));i(n)}})]})};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(O.a,{store:h,children:Object(y.jsx)(P,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.2164f4f3.chunk.js.map
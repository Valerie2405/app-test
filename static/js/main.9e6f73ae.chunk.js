(this["webpackJsonpapp-test"]=this["webpackJsonpapp-test"]||[]).push([[0],{21:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),r=s(14),a=s.n(r),i=(s(21),s(3)),l=s(16),o=s(0);var j=function(e){var t=e.handleInput,s=e.search;return Object(o.jsx)("section",{className:"searchbox-wrap",children:Object(o.jsx)("input",{type:"text",placeholder:"Search for your favorite movie here...",className:"searchbox",onChange:t,onKeyPress:s})})};var u=function(e){var t=e.result,s=e.openPopup;return Object(o.jsxs)("div",{className:"result",onClick:function(){return s(t.imdbID)},children:[Object(o.jsx)("img",{src:t.Poster}),Object(o.jsx)("figcaption",{children:Object(o.jsx)("h3",{className:"movieTitle",children:t.Title})})]})};var b=function(e){var t=e.results,s=e.openPopup;return t?Object(o.jsx)("section",{className:"results",children:t&&t.map((function(e){return Object(o.jsx)(u,{result:e,openPopup:s},e.imdbID)}))}):Object(o.jsx)("p",{children:"Sorry please try a different Movie Title :) "})};var d=function(e){var t=e.selected,s=e.closedPopup;return Object(o.jsx)("section",{className:"popup",children:Object(o.jsxs)("div",{className:"information",children:[Object(o.jsxs)("p",{className:"title",children:[" ",Object(o.jsx)("h2",{children:t.Title})," "]}),Object(o.jsxs)("p",{className:"year",children:[" ",Object(o.jsxs)("h5",{children:["Year: ",t.Year]})," "]}),Object(o.jsxs)("p",{className:"director",children:[" ",Object(o.jsxs)("h5",{children:["Director: ",t.Director]})," "]}),Object(o.jsxs)("p",{className:"releasedate",children:[" ",Object(o.jsxs)("h5",{children:["Release Date: ",t.Released]})]}),Object(o.jsxs)("p",{className:"genre",children:[" ",Object(o.jsxs)("h5",{children:["Genre: ",t.Genre]})]}),Object(o.jsx)("div",{className:"poster",children:Object(o.jsx)("img",{src:t.Poster})}),Object(o.jsx)("button",{className:"exit",onClick:s,children:"Exit"})]})})},h=s(4),p=s.n(h),O=s(15),x=s.n(O);var f=function(){var e=Object(c.useState)({s:"",results:[],selected:{},totalResults:0}),t=Object(l.a)(e,2),s=t[0],n=t[1],r="https://www.omdbapi.com/?apikey=7f581b67";return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:" Let's find you're favorite Movie !"})}),Object(o.jsxs)("main",{children:[Object(o.jsx)(j,{handleInput:function(e){var t=e.target.value;n((function(e){return Object(i.a)(Object(i.a)({},e),{},{s:t})})),console.log(s.s)},search:function(e){"Enter"===e.key&&p()(r+"&s="+s.s).then((function(e){var t=e.data,s=t.Search;n((function(e){return Object(i.a)(Object(i.a)({},e),{},{results:s,totalResults:t.total_results})})),console.log(t)}))}}),Object(o.jsx)(b,{results:s.results,openPopup:function(e){p()(r+"&i="+e).then((function(e){var t=e.data;console.log(t),n((function(e){return Object(i.a)(Object(i.a)({},e),{},{selected:t})}))}))}}),"undefined"!=typeof s.selected.Title&&Object(o.jsx)(d,{selected:s.selected,closedPopup:function(){n((function(e){return Object(i.a)(Object(i.a)({},e),{},{selected:{}})}))}}),Object(o.jsx)(x.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",onPageChange:function(e){var t=e+1;p()(r+"&s="+s.s+"&page="+{pageNumber1:t}).then((function(s){var c=s.data,r=c.Search;n((function(e){return Object(i.a)(Object(i.a)({},e),{},{results:r,currentPage:t})})),console.log(c),console.log(e)}))},activeClassName:"active"})]})]})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),m()}},[[42,1,2]]]);
//# sourceMappingURL=main.9e6f73ae.chunk.js.map
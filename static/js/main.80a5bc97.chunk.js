(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(25)},15:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=(a(15),a(6)),l=a.n(s),i=a(9),u=a(1),m=a(2),p=a(4),d=a(3),h=a(5),b=(a(19),a(21),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12"},r.a.createElement("h1",null,"Generate the longest word!"),r.a.createElement("h3",null,"Excluding letters you don't want"))))}}]),t}(r.a.Component)),f=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input"},r.a.createElement("form",{onSubmit:this.props.submit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12"},r.a.createElement("input",{id:"actual-input",type:"text",name:"words",placeholder:"type the letters you don't want here with no spaces eg. abcd"})),r.a.createElement("div",{className:"col col-12 offset-md-3 col-md-6"},r.a.createElement("button",null,"Longest word me!")))))}}]),t}(r.a.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"result"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12"},this.props.input&&r.a.createElement("p",null,"The following letters were left out to make this longest word: ",r.a.createElement("span",null,this.props.input))),r.a.createElement("div",{className:"col col-12"},this.props.longestWord&&r.a.createElement("p",{className:"long"},this.props.longestWord)),"/*",r.a.createElement("div",{className:"col col-12"},this.props.definition&&r.a.createElement("p",{className:"long"},this.props.definition)),r.a.createElement("div",{className:"col col-12"},this.props.author&&r.a.createElement("p",{className:"long"}," -- By, ",this.props.author)),"*/"))}}]),t}(r.a.Component),w=a(24),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",words:"",longestWord:"",definition:"",author:""},a.submit=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r,o,c,s,i,u,m,p;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=t.target.elements.words.value,r=new RegExp("["+n+"]","g"),console.log(w),a.setState({input:n,words:w}),o="",c=!0,s=!1,i=void 0,e.prev=9,u=w[Symbol.iterator]();case 11:if(c=(m=u.next()).done){e.next=21;break}if(!((p=m.value).length<=o.length)){e.next=15;break}return e.abrupt("continue",18);case 15:if(!p.match(r)){e.next=17;break}return e.abrupt("continue",18);case 17:o=p;case 18:c=!0,e.next=11;break;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(9),s=!0,i=e.t0;case 27:e.prev=27,e.prev=28,c||null==u.return||u.return();case 30:if(e.prev=30,!s){e.next=33;break}throw i;case 33:return e.finish(30);case 34:return e.finish(27);case 35:a.setState({longestWord:o});case 36:case"end":return e.stop()}},e,this,[[9,23,27,35],[28,,30,34]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(f,{submit:this.submit}),r.a.createElement(v,{input:this.state.input,longestWord:this.state.longestWord}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.80a5bc97.chunk.js.map
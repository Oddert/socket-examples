(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(68)},39:function(e,t,n){},41:function(e,t,n){},65:function(e,t){},68:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),i=n(26),c=n.n(i),l=(n(39),n(31)),r=n(27),s=n(28),u=n(32),m=n(29),d=n(33),h=n(6),f=(n(41),n(30)),k=n.n(f)()(),p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={items:[]},n.handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Going to connect to the socket..."),k.on("newItem",function(t){console.log(t);var n=Object(l.a)(e.state.items);n.push(t),e.setState({items:n})})}},{key:"handleClick",value:function(){console.log("Dispatching an item..."),k.emit("userAdd",Math.floor(100*Math.random())),console.log("Finished")}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("button",{onClick:this.handleClick},"Add item")),a.a.createElement("div",null,a.a.createElement("ul",null,this.state.items.map(function(e,t){return a.a.createElement("li",{key:t},e)}))))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.a9812d5b.chunk.js.map
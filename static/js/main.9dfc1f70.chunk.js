(this.webpackJsonppalindrome=this.webpackJsonppalindrome||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),l=n.n(i),o=n(1),c=n(2),s=n(4),u=n(3),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("label",null,"Palindrome"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),n}(r.a.Component),p=n(7),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"item"},this.props.palindrome)}}]),n}(r.a.Component),h=(n(13),function(e){if(e.results.length>0){var t=Object(p.a)(new Set(e.results)),n=t.map((function(e,t){return r.a.createElement(f,{key:t,palindrome:e})}));return r.a.createElement("div",{className:"results"},"There are ",e.results.length," Palindromes with ",t.length," ","unique results",r.a.createElement("div",{className:"result-list"},n))}return r.a.createElement("div",null,"Technically, no characters is a palindrome. It reads the same forward and backward."," ")}),d=function(e){return e.toString()===e.toString().split("").reverse().join("")},v=function(e){for(var t=[],n="",a=e.toString().split(""),r=0;r<a.length;r++)for(var i=1;i<a.length-r+1;i++)n=a.slice(r,i+r).join(""),d(n)&&t.push(n);return t},b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={palindromes:[]},e.onInputSubmit=function(t){console.log("oninputsubmit term = ".concat(t));var n=v(t);e.setState({palindromes:n}),console.log(n)},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(m,{onSubmit:this.onInputSubmit}),r.a.createElement(h,{results:this.state.palindromes}))}}]),n}(r.a.Component);l.a.render(r.a.createElement(b,null),document.querySelector("#root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9dfc1f70.chunk.js.map
webpackJsonp([216,359],{683:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(7),a(6)),o=t(p),c=(a(48),a(47)),e=t(c),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:[["p","\u4f7f\u7528 ",["code","confirm()"]," \u53ef\u4ee5\u5feb\u6377\u5730\u5f39\u51fa\u786e\u8ba4\u6846\u3002onCancel/onOk \u8fd4\u56de promise \u53ef\u4ee5\u5ef6\u8fdf\u5173\u95ed"]],meta:{order:5,title:"\u786e\u8ba4\u5bf9\u8bdd\u6846",filename:"components/modal/demo/confirm-promise.md",id:"components-modal-demo-confirm-promise"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Modal<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> confirm <span class="token operator" >=</span> Modal<span class="token punctuation" >.</span>confirm<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >showConfirm</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token function" >confirm</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u60a8\u662f\u5426\u786e\u8ba4\u8981\u5220\u9664\u8fd9\u9879\u5185\u5bb9\'</span><span class="token punctuation" >,</span>\n    content<span class="token punctuation" >:</span> <span class="token string" >\'\u70b9\u786e\u8ba4 1 \u79d2\u540e\u5173\u95ed\'</span><span class="token punctuation" >,</span>\n    <span class="token function" >onOk</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >return</span> <span class="token keyword" >new</span> <span class="token class-name" >Promise</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>resolve<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        <span class="token function" >setTimeout</span><span class="token punctuation" >(</span>resolve<span class="token punctuation" >,</span> <span class="token number" >1000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token function" >onCancel</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>showConfirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    \u786e\u8ba4\u5bf9\u8bdd\u6846\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){s({title:"\u60a8\u662f\u5426\u786e\u8ba4\u8981\u5220\u9664\u8fd9\u9879\u5185\u5bb9",content:"\u70b9\u786e\u8ba4 1 \u79d2\u540e\u5173\u95ed",onOk:function(){return new Promise(function(n){setTimeout(n,1e3)})},onCancel:function(){}})}var s=e["default"].confirm;return l["default"].createElement(o["default"],{onClick:n},"\u786e\u8ba4\u5bf9\u8bdd\u6846")}}}});
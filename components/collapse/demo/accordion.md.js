webpackJsonp([291,359],{605:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(197),s(196)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u624b\u98ce\u7434\uff0c\u6bcf\u6b21\u53ea\u6253\u5f00\u4e00\u4e2atab\u3002\u9ed8\u8ba4\u6253\u5f00\u7b2c\u4e00\u4e2a\u3002"]],meta:{order:1,title:"\u624b\u98ce\u7434",filename:"components/collapse/demo/accordion.md",id:"components-collapse-demo-accordion"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Collapse <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Panel <span class="token operator" >=</span> Collapse<span class="token punctuation" >.</span>Panel<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> text <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`</span></span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Collapse</span> <span class="token attr-name" >accordion</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Panel</span> <span class="token attr-name" >header</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'This is panel header 1\'</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Panel</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Panel</span> <span class="token attr-name" >header</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'This is panel header 2\'</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Panel</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Panel</span> <span class="token attr-name" >header</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'This is panel header 3\'</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Panel</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Collapse</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=e["default"].Panel,a="\n      A dog is a type of domesticated animal.\n      Known for its loyalty and faithfulness,\n      it can be found as a welcome guest in many households across the world.\n    ";return c["default"].createElement(e["default"],{accordion:!0},c["default"].createElement(n,{header:"This is panel header 1",key:"1"},c["default"].createElement("p",null,a)),c["default"].createElement(n,{header:"This is panel header 2",key:"2"},c["default"].createElement("p",null,a)),c["default"].createElement(n,{header:"This is panel header 3",key:"3"},c["default"].createElement("p",null,a)))}}}});
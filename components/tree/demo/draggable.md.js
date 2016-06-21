webpackJsonp([58,359],{843:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){if(Array.isArray(n)){for(var s=0,a=Array(n.length);s<n.length;s++)a[s]=n[s];return a}return Array.from(n)}var o=(a(180),a(179)),c=t(o),e=a(1),u=t(e),l=a(2);t(l);n.exports={content:[["p","\u5c06\u8282\u70b9\u62d6\u62fd\u5230\u5176\u4ed6\u8282\u70b9\u5185\u90e8\u6216\u524d\u540e\u3002"]],meta:{order:2,title:"\u62d6\u52a8\u793a\u4f8b",filename:"components/tree/demo/draggable.md",id:"components-tree-demo-draggable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tree <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TreeNode <span class="token operator" >=</span> Tree<span class="token punctuation" >.</span>TreeNode<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> x <span class="token operator" >=</span> <span class="token number" >3</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> y <span class="token operator" >=</span> <span class="token number" >2</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> z <span class="token operator" >=</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> gData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> generateData <span class="token operator" >=</span> <span class="token punctuation" >(</span>_level<span class="token punctuation" >,</span> _preKey<span class="token punctuation" >,</span> _tns<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> preKey <span class="token operator" >=</span> _preKey <span class="token operator" >||</span> <span class="token string" >\'0\'</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> tns <span class="token operator" >=</span> _tns <span class="token operator" >||</span> gData<span class="token punctuation" >;</span>\n\n  <span class="token keyword" >const</span> children <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> x<span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> key <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>preKey<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n    tns<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> key<span class="token punctuation" >,</span> key <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>i <span class="token operator" >&lt;</span> y<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      children<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>_level <span class="token operator" >&lt;</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> tns<span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >const</span> level <span class="token operator" >=</span> _level <span class="token operator" >-</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n  children<span class="token punctuation" >.</span><span class="token function" >forEach</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>key<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    tns<span class="token punctuation" >[</span>index<span class="token punctuation" >]</span><span class="token punctuation" >.</span>children <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token function" >generateData</span><span class="token punctuation" >(</span>level<span class="token punctuation" >,</span> key<span class="token punctuation" >,</span> tns<span class="token punctuation" >[</span>index<span class="token punctuation" >]</span><span class="token punctuation" >.</span>children<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token function" >generateData</span><span class="token punctuation" >(</span>z<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      gData<span class="token punctuation" >,</span>\n      expandedKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'0-0\'</span><span class="token punctuation" >,</span> <span class="token string" >\'0-0-0\'</span><span class="token punctuation" >,</span> <span class="token string" >\'0-0-0-0\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onDragEnter</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token comment" spellcheck="true">// expandedKeys \u9700\u8981\u53d7\u63a7\u65f6\u8bbe\u7f6e</span>\n    <span class="token comment" spellcheck="true">// this.setState({</span>\n    <span class="token comment" spellcheck="true">//   expandedKeys: info.expandedKeys,</span>\n    <span class="token comment" spellcheck="true">// });</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onDrop</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> dropKey <span class="token operator" >=</span> info<span class="token punctuation" >.</span>node<span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>eventKey<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> dragKey <span class="token operator" >=</span> info<span class="token punctuation" >.</span>dragNode<span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>eventKey<span class="token punctuation" >;</span>\n    <span class="token comment" spellcheck="true">// const dragNodesKeys = info.dragNodesKeys;</span>\n    <span class="token keyword" >const</span> loop <span class="token operator" >=</span> <span class="token punctuation" >(</span>data<span class="token punctuation" >,</span> key<span class="token punctuation" >,</span> callback<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      data<span class="token punctuation" >.</span><span class="token function" >forEach</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >,</span> index<span class="token punctuation" >,</span> arr<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >if</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>key <span class="token operator" >===</span> key<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >return</span> <span class="token function" >callback</span><span class="token punctuation" >(</span>item<span class="token punctuation" >,</span> index<span class="token punctuation" >,</span> arr<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span>\n        <span class="token keyword" >if</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >return</span> <span class="token function" >loop</span><span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >,</span> key<span class="token punctuation" >,</span> callback<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>gData<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >let</span> dragObj<span class="token punctuation" >;</span>\n    <span class="token function" >loop</span><span class="token punctuation" >(</span>data<span class="token punctuation" >,</span> dragKey<span class="token punctuation" >,</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >,</span> index<span class="token punctuation" >,</span> arr<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      arr<span class="token punctuation" >.</span><span class="token function" >splice</span><span class="token punctuation" >(</span>index<span class="token punctuation" >,</span> <span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      dragObj <span class="token operator" >=</span> item<span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>dropToGap<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >let</span> ar<span class="token punctuation" >;</span>\n      <span class="token keyword" >let</span> i<span class="token punctuation" >;</span>\n      <span class="token function" >loop</span><span class="token punctuation" >(</span>data<span class="token punctuation" >,</span> dropKey<span class="token punctuation" >,</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >,</span> index<span class="token punctuation" >,</span> arr<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        ar <span class="token operator" >=</span> arr<span class="token punctuation" >;</span>\n        i <span class="token operator" >=</span> index<span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      ar<span class="token punctuation" >.</span><span class="token function" >splice</span><span class="token punctuation" >(</span>i<span class="token punctuation" >,</span> <span class="token number" >0</span><span class="token punctuation" >,</span> dragObj<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n      <span class="token function" >loop</span><span class="token punctuation" >(</span>data<span class="token punctuation" >,</span> dropKey<span class="token punctuation" >,</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        item<span class="token punctuation" >.</span>children <span class="token operator" >=</span> item<span class="token punctuation" >.</span>children <span class="token operator" >||</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n        <span class="token comment" spellcheck="true">// where to insert \u793a\u4f8b\u6dfb\u52a0\u5230\u5c3e\u90e8\uff0c\u53ef\u4ee5\u662f\u968f\u610f\u4f4d\u7f6e</span>\n        item<span class="token punctuation" >.</span>children<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>dragObj<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      gData<span class="token punctuation" >:</span> data<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> loop <span class="token operator" >=</span> data <span class="token operator" >=</span><span class="token operator" >></span> data<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span><span class="token function" >loop</span><span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span><span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeNode</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tree</span> <span class="token attr-name" >defaultExpandedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>expandedKeys<span class="token punctuation" >}</span></span> <span class="token attr-name" >openAnimation</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >draggable</span>\n        <span class="token attr-name" >onDragEnter</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onDragEnter<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onDrop</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onDrop<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token function" >loop</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>gData<span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tree</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].TreeNode,s=3,a=2,t=1,o=[],e=function k(n,t,p){for(var c=t||"0",e=p||o,u=[],l=0;l<s;l++){var i=c+"-"+l;e.push({title:i,key:i}),l<a&&u.push(i)}if(n<0)return e;var r=n-1;u.forEach(function(n,s){return e[s].children=[],k(r,n,e[s].children)})};e(t);var l=u["default"].createClass({displayName:"Demo",getInitialState:function(){return{gData:o,expandedKeys:["0-0","0-0-0","0-0-0-0"]}},onDragEnter:function(n){console.log(n)},onDrop:function(n){console.log(n);var s=n.node.props.eventKey,a=n.dragNode.props.eventKey,t=function l(n,s,a){n.forEach(function(n,t,p){return n.key===s?a(n,t,p):n.children?l(n.children,s,a):void 0})},o=[].concat(p(this.state.gData)),c=void 0;if(t(o,a,function(n,s,a){a.splice(s,1),c=n}),n.dropToGap){var e=void 0,u=void 0;t(o,s,function(n,s,a){e=a,u=s}),e.splice(u,0,c)}else t(o,s,function(n){n.children=n.children||[],n.children.push(c)});this.setState({gData:o})},render:function(){var s=function a(s){return s.map(function(s){return s.children?u["default"].createElement(n,{key:s.key,title:s.key},a(s.children)):u["default"].createElement(n,{key:s.key,title:s.key})})};return u["default"].createElement(c["default"],{defaultExpandedKeys:this.state.expandedKeys,openAnimation:{},draggable:!0,onDragEnter:this.onDragEnter,onDrop:this.onDrop},s(this.state.gData))}});return u["default"].createElement(l,null)}}}});
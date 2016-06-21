webpackJsonp([0,359],{749:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(17),a(24)),o=t(p),e=(a(7),a(6)),c=t(e),u=(a(10),a(8)),l=t(u),i=(a(21),a(20)),r=t(i),k=a(1),d=t(k),f=a(2),m=(t(f),a(1586)),g=t(m),h=a(1604),y=t(h),v=a(5),w=t(v);n.exports={content:[["p","\u5e26\u6709\u641c\u7d22\u6309\u94ae\u7684\u81ea\u52a8\u8865\u5168\u8f93\u5165\u6846\u3002"]],meta:{order:9,title:"\u641c\u7d22\u6846",filename:"components/select/demo/search-box.md",id:"components-select-demo-search-box"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Input<span class="token punctuation" >,</span> Select<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> jsonp <span class="token keyword" >from</span> <span class="token string" >\'jsonp\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> querystring <span class="token keyword" >from</span> <span class="token string" >\'querystring\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> classNames <span class="token keyword" >from</span> <span class="token string" >\'classnames\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> timeout<span class="token punctuation" >;</span>\n<span class="token keyword" >let</span> currentValue<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >fetch</span><span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> callback<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>timeout<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >clearTimeout</span><span class="token punctuation" >(</span>timeout<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    timeout <span class="token operator" >=</span> <span class="token keyword" >null</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  currentValue <span class="token operator" >=</span> value<span class="token punctuation" >;</span>\n\n  <span class="token keyword" >function</span> <span class="token function" >fake</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> str <span class="token operator" >=</span> querystring<span class="token punctuation" >.</span><span class="token function" >encode</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      code<span class="token punctuation" >:</span> <span class="token string" >\'utf-8\'</span><span class="token punctuation" >,</span>\n      q<span class="token punctuation" >:</span> value<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token function" >jsonp</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`http://suggest.taobao.com/sug?</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>str<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span> <span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> d<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>currentValue <span class="token operator" >===</span> value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >const</span> result <span class="token operator" >=</span> d<span class="token punctuation" >.</span>result<span class="token punctuation" >;</span>\n        <span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n        result<span class="token punctuation" >.</span><span class="token function" >forEach</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>r<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          data<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n            value<span class="token punctuation" >:</span> r<span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n            text<span class="token punctuation" >:</span> r<span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token function" >callback</span><span class="token punctuation" >(</span>data<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  timeout <span class="token operator" >=</span> <span class="token function" >setTimeout</span><span class="token punctuation" >(</span>fake<span class="token punctuation" >,</span> <span class="token number" >300</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> SearchInput <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      data<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >,</span>\n      focus<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token function" >fetch</span><span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> <span class="token punctuation" >(</span>data<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> data <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleSubmit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u8f93\u5165\u6846\u5185\u5bb9\u662f: \'</span><span class="token punctuation" >,</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleFocusBlur</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      focus<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>target <span class="token operator" >===</span> document<span class="token punctuation" >.</span>activeElement<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> btnCls <span class="token operator" >=</span> <span class="token function" >classNames</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      <span class="token string" >\'ant-search-btn\'</span><span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      <span class="token string" >\'ant-search-btn-noempty\'</span><span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >.</span><span class="token function" >trim</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> searchCls <span class="token operator" >=</span> <span class="token function" >classNames</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      <span class="token string" >\'ant-search-input\'</span><span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      <span class="token string" >\'ant-search-input-focus\'</span><span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>focus<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> options <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>data<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>d <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>d<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>d<span class="token punctuation" >.</span>text<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-search-input-wrapper<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>style<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input.Group</span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>searchCls<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span>\n            <span class="token attr-name" >combobox</span>\n            <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >placeholder</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>placeholder<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >notFoundContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span><span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >defaultActiveFirstOption</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >showArrow</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >filterOption</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >onFocus</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleFocusBlur<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >onBlur</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleFocusBlur<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>options<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-input-group-wrap<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>btnCls<span class="token punctuation" >}</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleSubmit<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Input.Group</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SearchInput</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>input</span> <span class="token attr-name" >search</span> <span class="token attr-name" >text"</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,s){function p(){var a=y["default"].encode({code:"utf-8",q:n});(0,g["default"])("http://suggest.taobao.com/sug?"+a,function(a,p){t===n&&!function(){var n=p.result,a=[];n.forEach(function(n){a.push({value:n[0],text:n[0]})}),s(a)}()})}a&&(clearTimeout(a),a=null),t=n,a=setTimeout(p,300)}var s=r["default"].Option,a=void 0,t=void 0,p=d["default"].createClass({displayName:"SearchInput",getInitialState:function(){return{data:[],value:"",focus:!1}},handleChange:function(s){var a=this;this.setState({value:s}),n(s,function(n){return a.setState({data:n})})},handleSubmit:function(){console.log("\u8f93\u5165\u6846\u5185\u5bb9\u662f: ",this.state.value)},handleFocusBlur:function(n){this.setState({focus:n.target===document.activeElement})},render:function(){var n=(0,w["default"])({"ant-search-btn":!0,"ant-search-btn-noempty":!!this.state.value.trim()}),a=(0,w["default"])({"ant-search-input":!0,"ant-search-input-focus":this.state.focus}),t=this.state.data.map(function(n){return d["default"].createElement(s,{key:n.value},n.text)});return d["default"].createElement("div",{className:"ant-search-input-wrapper",style:this.props.style},d["default"].createElement(o["default"].Group,{className:a},d["default"].createElement(r["default"],{combobox:!0,value:this.state.value,placeholder:this.props.placeholder,notFoundContent:"",defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,onChange:this.handleChange,onFocus:this.handleFocusBlur,onBlur:this.handleFocusBlur},t),d["default"].createElement("div",{className:"ant-input-group-wrap"},d["default"].createElement(c["default"],{className:n,onClick:this.handleSubmit},d["default"].createElement(l["default"],{type:"search"})))))}});return d["default"].createElement(p,{placeholder:"input search text",style:{width:200}})}}},1586:function(n,s,a){function t(){}function p(n,s,a){function p(){u.parentNode&&u.parentNode.removeChild(u),window[r]=t,l&&clearTimeout(l)}function c(){window[r]&&p()}"function"==typeof s&&(a=s,s={}),s||(s={});var u,l,i=s.prefix||"__jp",r=s.name||i+e++,k=s.param||"callback",d=null!=s.timeout?s.timeout:6e4,f=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head;return d&&(l=setTimeout(function(){p(),a&&a(new Error("Timeout"))},d)),window[r]=function(n){o("jsonp got",n),p(),a&&a(null,n)},n+=(~n.indexOf("?")?"&":"?")+k+"="+f(r),n=n.replace("?&","?"),o('jsonp req "%s"',n),u=document.createElement("script"),u.src=n,m.parentNode.insertBefore(u,m),c}var o=a(1587)("jsonp");n.exports=p;var e=0},1587:function(n,s,a){function t(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function p(){var n=arguments,a=this.useColors;if(n[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+n[0]+(a?"%c ":" ")+"+"+s.humanize(this.diff),!a)return n;var t="color: "+this.color;n=[n[0],t,"color: inherit"].concat(Array.prototype.slice.call(n,1));var p=0,o=0;return n[0].replace(/%[a-z%]/g,function(n){"%%"!==n&&(p++,"%c"===n&&(o=p))}),n.splice(o,0,t),n}function o(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function e(n){try{null==n?l.removeItem("debug"):l.debug=n}catch(s){}}function c(){var n;try{n=l.debug}catch(s){}return n}function u(){try{return window.localStorage}catch(n){}}s=n.exports=a(1588),s.log=o,s.formatArgs=p,s.save=e,s.load=c,s.useColors=t;var l;l="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),s.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],s.formatters.j=function(n){return JSON.stringify(n)},s.enable(c())},1588:function(n,s,a){function t(){return s.colors[i++%s.colors.length]}function p(n){function a(){}function p(){var n=p,a=+new Date,o=a-(l||a);n.diff=o,n.prev=l,n.curr=a,l=a,null==n.useColors&&(n.useColors=s.useColors()),null==n.color&&n.useColors&&(n.color=t());var e=Array.prototype.slice.call(arguments);e[0]=s.coerce(e[0]),"string"!=typeof e[0]&&(e=["%o"].concat(e));var c=0;e[0]=e[0].replace(/%([a-z%])/g,function(a,t){if("%%"===a)return a;c++;var p=s.formatters[t];if("function"==typeof p){var o=e[c];a=p.call(n,o),e.splice(c,1),c--}return a}),"function"==typeof s.formatArgs&&(e=s.formatArgs.apply(n,e));var u=p.log||s.log||console.log.bind(console);u.apply(n,e)}a.enabled=!1,p.enabled=!0;var o=s.enabled(n)?p:a;return o.namespace=n,o}function o(n){s.save(n);for(var a=(n||"").split(/[\s,]+/),t=a.length,p=0;p<t;p++)a[p]&&(n=a[p].replace(/\*/g,".*?"),"-"===n[0]?s.skips.push(new RegExp("^"+n.substr(1)+"$")):s.names.push(new RegExp("^"+n+"$")))}function e(){s.enable("")}function c(n){var a,t;for(a=0,t=s.skips.length;a<t;a++)if(s.skips[a].test(n))return!1;for(a=0,t=s.names.length;a<t;a++)if(s.names[a].test(n))return!0;return!1}function u(n){return n instanceof Error?n.stack||n.message:n}s=n.exports=p,s.coerce=u,s.disable=e,s.enable=o,s.enabled=c,s.humanize=a(1589),s.names=[],s.skips=[],s.formatters={};var l,i=0},1589:function(n,s){function a(n){var s=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(n);if(s){var a=parseFloat(s[1]),t=(s[2]||"ms").toLowerCase();switch(t){case"years":case"year":case"yrs":case"yr":case"y":return a*i;case"days":case"day":case"d":return a*l;case"hours":case"hour":case"hrs":case"hr":case"h":return a*u;case"minutes":case"minute":case"mins":case"min":case"m":return a*c;case"seconds":case"second":case"secs":case"sec":case"s":return a*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a}}}function t(n){return n>=l?Math.round(n/l)+"d":n>=u?Math.round(n/u)+"h":n>=c?Math.round(n/c)+"m":n>=e?Math.round(n/e)+"s":n+"ms"}function p(n){return o(n,l,"day")||o(n,u,"hour")||o(n,c,"minute")||o(n,e,"second")||n+" ms"}function o(n,s,a){if(!(n<s))return n<1.5*s?Math.floor(n/s)+" "+a:Math.ceil(n/s)+" "+a+"s"}var e=1e3,c=60*e,u=60*c,l=24*u,i=365.25*l;n.exports=function(n,s){return s=s||{},"string"==typeof n?a(n):s["long"]?p(n):t(n)}},1602:function(n,s){"use strict";function a(n,s){return Object.prototype.hasOwnProperty.call(n,s)}n.exports=function(n,s,t,p){s=s||"&",t=t||"=";var o={};if("string"!=typeof n||0===n.length)return o;var e=/\+/g;n=n.split(s);var c=1e3;p&&"number"==typeof p.maxKeys&&(c=p.maxKeys);var u=n.length;c>0&&u>c&&(u=c);for(var l=0;l<u;++l){var i,r,k,d,f=n[l].replace(e,"%20"),m=f.indexOf(t);m>=0?(i=f.substr(0,m),r=f.substr(m+1)):(i=f,r=""),k=decodeURIComponent(i),d=decodeURIComponent(r),a(o,k)?Array.isArray(o[k])?o[k].push(d):o[k]=[o[k],d]:o[k]=d}return o}},1603:function(n,s){"use strict";var a=function(n){switch(typeof n){case"string":return n;case"boolean":return n?"true":"false";case"number":return isFinite(n)?n:"";default:return""}};n.exports=function(n,s,t,p){return s=s||"&",t=t||"=",null===n&&(n=void 0),"object"==typeof n?Object.keys(n).map(function(p){var o=encodeURIComponent(a(p))+t;return Array.isArray(n[p])?n[p].map(function(n){return o+encodeURIComponent(a(n))}).join(s):o+encodeURIComponent(a(n[p]))}).join(s):p?encodeURIComponent(a(p))+t+encodeURIComponent(a(n)):""}},1604:function(n,s,a){"use strict";s.decode=s.parse=a(1602),s.encode=s.stringify=a(1603)}});
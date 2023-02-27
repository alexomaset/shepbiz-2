(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{9368:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-form",function(){return n(8593)}])},1045:function(e,t,n){var r=n(3454),i=n(7294);function s(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=s(i);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a="undefined"!==typeof r&&r.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){var e,t,n,r=function(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,s=void 0===i?a:i;d(l(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",d("boolean"===typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null},i=r.prototype;return i.setOptimizeForSpeed=function(e){d("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},i.isOptimizeForSpeed=function(){return this._optimizeForSpeed},i.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},i.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},i.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},i.insertRule=function(e,t){if(d(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(i){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},i.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];d(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},i.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},i.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]},i.cssRules=function(){var e=this;return this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[])},i.makeStyleTag=function(e,t,n){t&&d(l(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},e=r,(t=[{key:"length",get:function(){return this._rulesCount}}])&&u(e.prototype,t),n&&u(e,n),r}();function d(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}var h=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},f={};function p(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return f[r]||(f[r]="jsx-"+h(e+"-"+n)),f[r]}function m(e,t){var n=e+t;return f[n]||(f[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),f[n]}var _=function(){var e=function(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i;this._sheet=r||new c({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],r=e[1];return o.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=p(r,n);return{styleId:i,rules:Array.isArray(t)?t.map((function(e){return m(i,e)})):[m(i,t)]}}return{styleId:p(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();var v=i.createContext(null);function S(){return new _}function g(){return i.useContext(v)}v.displayName="StyleSheetContext";var y=o.default.useInsertionEffect||o.default.useLayoutEffect,b=S();function x(e){var t=b||g();return t?(y((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}x.dynamic=function(e){return e.map((function(e){return p(e[0],e[1])})).join(" ")},t.style=x},357:function(e,t,n){"use strict";e.exports=n(1045).style},8593:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(357),s=n.n(i),o=n(7294);t.default=function(){var e=(0,o.useState)(""),t=e[0],n=e[1],i=(0,o.useState)(""),u=i[0],a=i[1],l=(0,o.useState)(null),c=l[0],d=l[1];return(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(t,u,c)},className:"jsx-e5753190d3ee304f",children:[(0,r.jsxs)("div",{className:"jsx-e5753190d3ee304f form-group",children:[(0,r.jsx)("label",{className:"jsx-e5753190d3ee304f form-label",children:"Title:"}),(0,r.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},className:"jsx-e5753190d3ee304f form-input"})]}),(0,r.jsxs)("div",{className:"jsx-e5753190d3ee304f form-group",children:[(0,r.jsx)("label",{className:"jsx-e5753190d3ee304f form-label",children:"Content:"}),(0,r.jsx)("textarea",{value:u,onChange:function(e){return a(e.target.value)},className:"jsx-e5753190d3ee304f form-input"})]}),(0,r.jsxs)("div",{className:"jsx-e5753190d3ee304f form-group",children:[(0,r.jsx)("label",{className:"jsx-e5753190d3ee304f form-label",children:"Image:"}),(0,r.jsx)("input",{type:"file",onChange:function(e){return d(e.target.files[0])},className:"jsx-e5753190d3ee304f form-input"})]}),(0,r.jsx)("button",{className:"jsx-e5753190d3ee304f submit-button",children:"Submit"}),(0,r.jsx)(s(),{id:"e5753190d3ee304f",children:".form-group.jsx-e5753190d3ee304f{margin-bottom:20px}.form-label.jsx-e5753190d3ee304f{font-size:18px;font-weight:bold;margin-bottom:10px}.form-input.jsx-e5753190d3ee304f{padding:10px;font-size:16px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid#ccc;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.submit-button.jsx-e5753190d3ee304f{background-color:#4caf50;color:white;padding:12px 20px;border:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;cursor:pointer;float:right;font-size:16px}.submit-button.jsx-e5753190d3ee304f:hover{background-color:#45a049}"})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=9368,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(this.webpackJsonpreact03=this.webpackJsonpreact03||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=(n(19),n(2)),s=n(3),l=n(5),o=n(4),m=(n(20),n(13)),p=(n(21),n(10)),d=n(11),f=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.props.setUpdate(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(p.a,{className:"faicons",icon:"trash",onClick:function(){return e.props.deleteItem(t.key)}}))))}));return r.a.createElement(d.a,{duration:300,easing:"ease-in-out"},t)}}]),n}(a.Component),h=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleAddInput=function(t){t.preventDefault();var n=e.state.currentItem;if(""!==n.text){var a=[].concat(Object(m.a)(e.state.items),[n]);e.setState({items:a,currentItem:{text:"",key:""}})}},e.handleInput=function(t){e.setState({currentItem:{text:t.target.value,key:Date.now()}})},e.deleteItem=function(t){var n=e.state.items.filter((function(e){return e.key!==t}));e.setState({items:n})},e.setUpdate=function(t,n){var a=e.state.items;a.map((function(e){e.key===n&&(e.text=t)})),e.setState({items:a})},e.state={items:[],currentItem:{text:"",key:""}},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.handleAddInput},r.a.createElement("input",{type:"text",placeholder:"Enter text",onChange:this.handleInput,value:this.state.currentItem.text}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),n}(a.Component),v=n(7),b=n(12);v.b.add(b.a);var y=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null))}}]),n}(a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.007764d1.chunk.js.map
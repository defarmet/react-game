(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),s=a(1),l=a(2),o=a(4),d=a(3),u=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props),r.a.createElement("div",{className:"col-2 card card-body",onClick:function(){return e.props.click(e.props.id)}},r.a.createElement("img",{className:"img-fluid",alt:this.props.id,src:this.props.img}))}}]),a}(n.Component),g=a(7),p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:g,score:0,high:0},e.shuffle=function(){for(var t=e.state.images.slice(0),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[n],t[n]=r}return t},e.reset=function(){e.state.images.map((function(e){return e.clicked=!1})),e.setState({images:e.shuffle(),score:0})},e.set_high=function(t){return e.state.high<t?t:e.state.high},e.set_click=function(t){var a=e.state.images.filter((function(e){return e.id===t}));a[0].clicked?e.reset():(a[0].clicked=!0,e.setState({images:e.shuffle(),score:e.state.score+1,high:e.set_high(e.state.score+1)}))},e.render_header=function(){return r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Score: ",e.state.score," | High Score: ",e.state.high))},e.render_images=function(){var t=e.state.images.map((function(t){return r.a.createElement(u,{id:t.id,key:t.id,img:t.img,click:e.set_click})}));return t.splice(0,0,r.a.createElement("div",{className:"col-1"})),t.splice(6,0,r.a.createElement("div",{className:"w-100"})),t.splice(7,0,r.a.createElement("div",{className:"col-1"})),t},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({images:this.shuffle()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("div",{className:"row text-center"},this.render_header()),r.a.createElement("br",null),r.a.createElement("div",{className:"row text-center no-gutters"},this.render_images()))}}]),a}(n.Component);c.a.render(r.a.createElement(p,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":1,"img":"https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"},{"id":2,"img":"https://cdn.bulbagarden.net/upload/3/3e/039Jigglypuff.png"},{"id":3,"img":"https://cdn.bulbagarden.net/upload/b/b9/172Pichu.png"},{"id":4,"img":"https://cdn.bulbagarden.net/upload/7/78/150Mewtwo.png"},{"id":5,"img":"https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"},{"id":6,"img":"https://cdn.bulbagarden.net/upload/7/73/002Ivysaur.png"},{"id":7,"img":"https://cdn.bulbagarden.net/upload/7/7e/006Charizard.png"},{"id":8,"img":"https://cdn.bulbagarden.net/upload/6/67/658Greninja.png"},{"id":9,"img":"https://cdn.bulbagarden.net/upload/d/d7/448Lucario.png"},{"id":10,"img":"https://cdn.bulbagarden.net/upload/2/27/727Incineroar.png"}]')},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.d97fcbfc.chunk.js.map
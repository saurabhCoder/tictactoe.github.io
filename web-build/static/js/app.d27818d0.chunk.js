(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{121:function(e,t,n){e.exports=n.p+"static/media/new.6fb6cfe2.png"},122:function(e,t,n){e.exports=n.p+"static/media/undo.52dd95ad.png"},123:function(e,t,n){e.exports=n.p+"static/media/x.15237e2e.png"},124:function(e,t,n){e.exports=n.p+"static/media/o.c907f0c3.png"},135:function(e,t,n){"use strict";n.r(t);var a=n(144),r=n(6),s=n.n(r),c=n(12),i=n.n(c),o=n(18),u=n.n(o),l=n(19),f=n.n(l),m=n(10),h=n.n(m),d=n(72),p=n.n(d),g=(n(104),n(1)),y=n.n(g),E=n(3),x=n(60),q=n(2),S=n(13),k=n(39);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var v=function(e){for(var t="N",n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<n.length;a++){var r=p()(n[a],3),s=r[0],c=r[1],i=r[2];if(("X"===e[s]||"O"===e[s])&&e[s]===e[c]&&e[s]===e[i])return e[s];" "===e[s]&&(t=" ")}return t},w=function(e){u()(a,e);var t=C(a);function a(e){var n;return s()(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(" ")}],xIsNext:!0,stepNumber:0},n}return i()(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice(),a=v(n);"X"!==a&&"O"!==a&&"X"!==n[e]&&"O"!==n[e]&&(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history[this.state.stepNumber],r=v(a.squares);return e="X"===r||"O"===r?"Winner "+r:"N"===r?"Draw":"Next player: "+(this.state.xIsNext?"X":"O"),y.a.createElement(q.a,{style:{padding:10,justifyContent:"center",paddingHorizontal:10}},y.a.createElement(q.a,{style:N.menu},y.a.createElement(S.a,{onPress:function(){return t.jumpTo(0)}},y.a.createElement(q.a,null,y.a.createElement(k.a,{style:N.menuImage,source:n(121)}))),y.a.createElement(S.a,{onPress:function(){return t.jumpTo(t.state.stepNumber-1)}},y.a.createElement(q.a,null,y.a.createElement(k.a,{style:N.menuImage,source:n(122)})))),y.a.createElement(q.a,{style:{flexDirection:"row",justifyContent:"center"}},y.a.createElement(S.a,{onPress:function(){return t.handleClick(0)}},y.a.createElement(q.a,{style:N.Square},b(a.squares[0]))),y.a.createElement(S.a,{onPress:function(){return t.handleClick(1)}},y.a.createElement(q.a,{style:N.Square},b(a.squares[1]))),y.a.createElement(S.a,{onPress:function(){return t.handleClick(2)}},y.a.createElement(q.a,{style:N.Square},b(a.squares[2])))),y.a.createElement(q.a,{style:{flexDirection:"row",justifyContent:"center"}},y.a.createElement(S.a,{onPress:function(){return t.handleClick(3)}},y.a.createElement(q.a,{style:N.Square},b(a.squares[3]))),y.a.createElement(S.a,{onPress:function(){return t.handleClick(4)}},y.a.createElement(q.a,{style:N.Square},b(a.squares[4]))),y.a.createElement(S.a,{onPress:function(){return t.handleClick(5)}},y.a.createElement(q.a,{style:N.Square},b(a.squares[5])))),y.a.createElement(q.a,{style:{flexDirection:"row",justifyContent:"center"}},y.a.createElement(S.a,{onPress:function(){return t.handleClick(6)}},y.a.createElement(q.a,{style:N.Square},b(a.squares[6]))),y.a.createElement(S.a,{onPress:function(){return t.handleClick(7)}},y.a.createElement(q.a,{style:N.Square},b(a.squares[7]))),y.a.createElement(S.a,{onPress:function(){return t.handleClick(8)}},y.a.createElement(q.a,{style:N.Square},b(a.squares[8])))),y.a.createElement(q.a,{style:N.Status},y.a.createElement(x.a,{style:N.StatusText},e)))}}]),a}(y.a.Component),b=function(e){return"X"===e?y.a.createElement(k.a,{style:N.SquareImage,source:n(123)}):"O"===e?y.a.createElement(k.a,{style:N.SquareImage,source:n(124)}):y.a.createElement(x.a,{style:N.SquareText},e)},N=E.a.create({Square:{marginRight:-1,marginTop:-1,borderWidth:1,borderColor:"black",height:100,width:100,alignContent:"center",alignItems:"center",backgroundColor:"white",padding:0},SquareText:{fontSize:64,fontWeight:"bold",textAlign:"center"},SquareImage:{width:95,height:95,alignContent:"center",padding:0,backgroundColor:"white",alignItems:"center"},Status:{flexDirection:"row",justifyContent:"center",paddingTop:50},StatusText:{fontSize:34,fontWeight:"bold"},menu:{flexDirection:"row",justifyContent:"flex-end",paddingBottom:30,paddingTop:10},menuImage:{width:50,height:50,paddingRight:20}}),I=w;Object(a.a)(I)},95:function(e,t,n){n(96),e.exports=n(135)},96:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/tictactoe/expo-service-worker.js",{scope:"/tictactoe/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[95,1,2]]]);
//# sourceMappingURL=app.d27818d0.chunk.js.map
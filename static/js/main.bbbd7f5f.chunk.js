(this["webpackJsonpclone-coding-react-movie"]=this["webpackJsonpclone-coding-react-movie"]||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},55:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),i=a(7),l=a(1),o=a(15),m=a.n(o),u=a(29),v=a(10),p=a(11),d=a(13),E=a(12),g=a(30),f=a.n(g);a(55);var y=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,s=e.poster,l=e.genres;return e.description_full,r.a.createElement(i.b,{className:"col-lg-3 col-md-6",to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:c,poster:s,genres:l}}},r.a.createElement("div",{className:"movie mb-5 shadow-sm"},r.a.createElement("div",{className:"movie__poster"},r.a.createElement("img",{src:s,alt:n,title:n})),r.a.createElement("div",{className:"movie__data p-3"},r.a.createElement("div",{className:"movie__title font-weight-bold"},n," (",a,")"),r.a.createElement("p",{className:"movie__summary text-break mt-3"},c),r.a.createElement("ul",{className:"genres d-flex flex-wrap text-break text-break-1"},l.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre mr-3"},"#",e)}))))))},b=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1}),console.log(n);case 6:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("div",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"loading...")):r.a.createElement("div",{className:"movies row mt-5"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component);var h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("span",null,"About page"))},N=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"container mt-5 text-center"},r.a.createElement("h1",null,e.state.title," (",e.state.year,")"),r.a.createElement("img",{className:"my-4",src:e.state.poster,alt:e.state.title,title:e.state.title}),r.a.createElement("ul",{className:"genres text-center flex-wrap text-break text-break-1"},e.state.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre mr-3"},"#",e)}))),r.a.createElement("div",{className:"text-muted"},e.state.summary)):null}}]),a}(r.a.Component);var x=function(){return r.a.createElement("div",{className:"navigation my-4 container d-flex"},r.a.createElement("div",{className:"links"},r.a.createElement(i.c,{to:"/",activeClassName:"active",exact:!0},"Home"),r.a.createElement(i.c,{to:"/about",activeClassName:"active",exact:!0},"About")))};a(61);var _=function(){return r.a.createElement(i.a,null,r.a.createElement(x,null),r.a.createElement(l.a,{path:"/",exact:!0,component:b}),r.a.createElement(l.a,{path:"/about",component:h}),r.a.createElement(l.a,{path:"/movie/:id",component:N}))};a(62);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.bbbd7f5f.chunk.js.map
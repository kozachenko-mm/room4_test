(this.webpackJsonproom4_test=this.webpackJsonproom4_test||[]).push([[0],{11:function(t,e,n){t.exports={nav:"Nav_nav__2vW3s",list:"Nav_list__2dkmd",listItem:"Nav_listItem__3DHdT",link:"Nav_link__18ow0",activeLink:"Nav_activeLink__2xpdl",svg:"Nav_svg__2EnUD"}},13:function(t,e,n){t.exports={head:"ArtistInfo_head__niUFu",name:"ArtistInfo_name__1-krU",img:"ArtistInfo_img__O8ftA",text:"ArtistInfo_text__1HTZo",tags:"ArtistInfo_tags__Y7esh"}},20:function(t,e,n){t.exports={listItem:"TrackCard_listItem__25RYH",trackName:"TrackCard_trackName__1lnaM",artistName:"TrackCard_artistName__3765b",link:"TrackCard_link__3hdmB",img:"TrackCard_img__1_QPf"}},22:function(t,e,n){t.exports={controls:"ControlsButtons_controls__MK3Ar",button:"ControlsButtons_button__10XbJ",numberPage:"ControlsButtons_numberPage__2x935"}},30:function(t,e,n){t.exports={App:"ScrollUpButton_App__BPRbn",show:"ScrollUpButton_show__139ai"}},33:function(t,e,n){t.exports={list:"HomePage_list__WGs8F",loader:"HomePage_loader__-SeGv"}},55:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0),c=n.n(r),s=n(23),o=n.n(s),i=n(16),l=n(12),u=n(4),d=(n(55),n(14)),b=n(15),h=n(18),m=n(17),j=n(25),_=n.n(j),p=n(22),f=n.n(p),T=function(t){var e=t.numberPage,n=t.handleButtons;return Object(a.jsxs)("div",{className:f.a.controls,children:[Object(a.jsx)("button",{className:f.a.button,type:"button",name:"prev",onClick:n,disabled:e<=1,children:"prev"}),Object(a.jsx)("span",{className:f.a.numberPage,children:e}),Object(a.jsx)("button",{className:f.a.button,type:"button",name:"next",onClick:n,children:"next"})]})},O=n(26),g=n(30),v=n.n(g);function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function S(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var R=r.createElement("g",null,r.createElement("rect",{fill:"none",height:24,width:24}),r.createElement("path",{d:"M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M12,22c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10 C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22L12,22z M11,12l0,4h2l0-4h3l-4-4l-4,4H11z"}));function x(t,e){var n=t.title,a=t.titleId,c=S(t,["title","titleId"]);return r.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px",ref:e,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,R)}var E=r.forwardRef(x),k=(n.p,function(){return window.scrollTo({top:0,behavior:"smooth"})}),y=function(){var t=Object(r.useState)(0),e=Object(O.a)(t,2),n=e[0],c=e[1],s=function(){c(window.scrollY)};return Object(r.useEffect)((function(){return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}}),[]),Object(a.jsx)("div",{className:v.a.App,children:Object(a.jsx)("button",{className:n<200?"":v.a.show,onClick:function(){k()},children:Object(a.jsx)(E,{fill:"#4a32ff"})})})},A=n(20),w=n.n(A),N=n(19),F=n.n(N),H="b0ef57de6689f3bee614bd769ab91be2",I=function(t){var e,n=t.track,c=Object(r.useState)([]),s=Object(O.a)(c,2),o=s[0],i=s[1];return Object(r.useEffect)((function(){return function(t,e){return F.a.get("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=".concat(H,"&artist=").concat(t,"&track=").concat(e,"&format=json\n "))}(n.artist.name,n.name).then((function(t){var e=t.data;return i(e.track)})).catch((function(t){return console.log(t)})),function(){return!1}}),[n.artist.name,n.name]),Object(a.jsxs)("li",{className:w.a.listItem,children:[Object(a.jsx)(l.b,{className:w.a.artistName,to:{pathname:"/artist/".concat(n.artist.name)},children:n.artist.name}),Object(a.jsx)("h5",{className:w.a.trackName,children:n.name}),Object(a.jsx)("img",{className:w.a.img,src:(null===o||void 0===o||null===(e=o.album)||void 0===e?void 0:e.image[3]["#text"])||n.image[3]["#text"],alt:"#"}),Object(a.jsxs)("a",{className:w.a.link,href:n.artist.url,target:"blank",children:["Read more of ",n.artist.name," on Last.fm."]})]})},P={FETCH_TRACKS_START:"FETCH_TRACKS_START",FETCH_TRACKS_SUCCESS:"FETCH_TRACKS_SUCCESS",FETCH_TRACKS_ERROR:"FETCH_TRACKS_ERROR",FETCH_ARTIST_START:"FETCH_ARTIST_START",FETCH_ARTIST_SUCCESS:"FETCH_ARTIST_SUCCESS",FETCHARTISTS_ERROR:"FETCH_ARTIST_ERROR"},B=n(33),K=n.n(B),U=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={numberPage:1},t.handleButtons=function(e){"next"===e.target.name?t.setState((function(t){return{numberPage:t.numberPage+1}})):t.setState((function(t){return{numberPage:t.numberPage-1}})),k()},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=this.state.numberPage;this.props.fetchTracks(t)}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.numberPage;this.state.numberPage!==e.numberPage&&this.props.fetchTracks(n)}},{key:"render",value:function(){var t=this.props,e=t.data,n=t.isLoading,r=t.isError,c=this.state.numberPage;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(T,{numberPage:c,handleButtons:this.handleButtons}),n&&Object(a.jsx)(_.a,{className:K.a.loader,type:"Oval",color:"#00BFFF",height:200,width:200}),r&&Object(a.jsx)("p",{children:r}),Object(a.jsx)("ul",{className:K.a.list,children:e.map((function(t,e){return Object(a.jsx)(I,{track:t},t.mbid||e)}))}),Object(a.jsx)(T,{numberPage:c,handleButtons:this.handleButtons}),Object(a.jsx)(y,{})]})}}]),n}(r.Component),L={fetchTracks:function(t){return function(e){var n;e({type:P.FETCH_TRACKS_START}),(n=t,F.a.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=".concat(H,"&format=json&page=").concat(n))).then((function(t){var n;e((n=t.data,{type:P.FETCH_TRACKS_SUCCESS,payload:n}))})).catch((function(t){return e(function(t){return{type:P.FETCH_TRACKS_ERROR,payload:t}}(t.message))}))}}},M=Object(i.b)((function(t){return{data:t.tracks.tracks,isLoading:t.tracks.loading,isError:t.tracks.error}}),L)(U),D=function(){return Object(a.jsx)("div",{children:"search"})},J=n(13),W=n.n(J),Y=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).createMarkup=function(t){return{__html:t}},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){k();var t=this.props.match.params.name;this.props.fetchArtist(t)}},{key:"render",value:function(){var t=this.props,e=t.artist,n=t.isError,r=t.isLoading;return Object(a.jsxs)("div",{children:[r&&Object(a.jsx)(_.a,{className:W.a.loader,type:"Oval",color:"#00BFFF",height:200,width:200}),n&&Object(a.jsx)("p",{children:n}),Object.keys(e).length>0&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:W.a.head,children:[Object(a.jsx)("img",{className:W.a.img,src:e.image[4]["#text"],alt:"#"}),Object(a.jsx)("h2",{className:W.a.name,children:e.name})]}),Object(a.jsx)("p",{className:W.a.text,dangerouslySetInnerHTML:this.createMarkup(e.bio.content)}),Object(a.jsxs)("p",{className:W.a.tags,children:["tags:"," ",e.tags.tag.map((function(t,e){return Object(a.jsxs)("span",{children:[t.name,", "]},e)}))," "]})]})]})}}]),n}(r.Component),z={fetchArtist:function(t){return function(e){e({type:P.FETCH_ARTIST_START}),function(t){return F.a.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".concat(t,"&api_key=").concat(H,"&format=json "))}(t).then((function(t){e(function(t){return{type:P.FETCH_ARTIST_SUCCESS,payload:t}}(t.data))})).catch((function(t){return e(function(t){return{type:P.FETCH_ARTIST_ERROR,payload:t}}(t))}))}}},G=Object(i.b)((function(t){return{artist:t.artist.artist,isLoading:t.artist.loading,isError:t.artist.error}}),z)(Y),Q=n(11),X=n.n(Q),Z=function(){return Object(a.jsx)("nav",{className:X.a.nav,children:Object(a.jsxs)("ul",{className:X.a.list,children:[Object(a.jsx)("li",{className:X.a.listItem,children:Object(a.jsx)(l.c,{to:"/",exact:!0,className:X.a.link,activeClassName:X.a.activeLink,children:"TopTracks"})}),Object(a.jsx)("li",{className:X.a.listItem,children:Object(a.jsx)(l.c,{to:"/search",className:X.a.link,activeClassName:X.a.activeLink,children:"Searsh TRACK"})})]})})},q=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(Z,{}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{path:"/",exact:!0,component:M}),Object(a.jsx)(u.b,{path:"/search",component:D}),Object(a.jsx)(u.b,{path:"/artist/:name",component:G}),Object(a.jsx)(u.a,{to:"/"})]})]})}}]),n}(r.Component),V=n(10),$=Object(V.combineReducers)({tracks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case P.FETCH_TRACKS_SUCCESS:return a.tracks.track;default:return t}},error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case P.FETCH_TRACKS_ERROR:return a;default:return t}},loading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=e.type;e.payload;switch(n){case P.FETCH_TRACKS_START:return!0;case P.FETCH_TRACKS_ERROR:case P.FETCH_TRACKS_SUCCESS:return!1;default:return t}}}),tt=Object(V.combineReducers)({artist:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case P.FETCH_ARTIST_SUCCESS:return a.artist;default:return t}},error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case P.FETCH_ARTTIST_ERROR:return a;default:return t}},loading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=e.type;e.payload;switch(n){case P.FETCH_ARTIST_START:return!0;case P.FETCH_ARTIST_ERROR:case P.FETCH_ARTIST_SUCCESS:return!1;default:return t}}}),et=n(44),nt=n(45),at=Object(V.combineReducers)({tracks:$,artist:tt}),rt=Object(V.applyMiddleware)(nt.a),ct=Object(V.createStore)(at,Object(et.composeWithDevTools)(rt));F.a.get("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=b0ef57de6689f3bee614bd769ab91be2&artist=Kanye west&track=power&format=json").then((function(t){return console.log(t)})),o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(i.a,{store:ct,children:Object(a.jsx)(u.b,{component:q})})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.63617250.chunk.js.map
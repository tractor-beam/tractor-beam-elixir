(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1097:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{current:"all",pagination:{showTotal:function(t,e){return"".concat(t," items")},pageSize:20}}},computed:{collection:function(){var t=this;return this.$store.state.collection.shows.filter(function(e){return e.type===t.current||"all"===t.current})}},fetch:function(t){t.store.dispatch("collection/loadCollection")},methods:{handleClick:function(t){this.current=t.key}}},l=n(58),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{style:{padding:"show"===t.$mq?"50px":"0"}},[n("a-layout-content",[n("section",{style:{background:"#fff",padding:"24px",minHeight:"380px"}},[n("a-menu",{attrs:{mode:"horizontal","selected-keys":[t.current]},on:{click:t.handleClick}},[n("a-menu-item",{key:"all"},[t._v("All")]),t._v(" "),n("a-menu-item",{key:"movie"},[t._v("Movies")]),t._v(" "),n("a-menu-item",{key:"tv"},[t._v("TV")]),t._v(" "),n("a-menu-item",{key:"music"},[t._v("Music")]),t._v(" "),n("a-menu-item",{key:"comic"},[t._v("Comic")])],1),t._v(" "),n("a-list",{attrs:{"item-layout":"vertical",pagination:t.pagination,"data-source":t.collection},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{key:"item.id"},[n("a-list-item-meta",[n("n-link",{attrs:{slot:"title",to:{name:"show",params:{show:e.id}}},slot:"title"},[t._v(t._s(e.title))]),t._v(" "),n("span",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(e.summary))])],1),t._v(" "),n("img",{attrs:{slot:"extra",alt:"poster",src:e.poster_url,width:"150"},slot:"extra"})],1)}}])})],1)])],1)},[],!1,null,null,null);e.default=component.exports}}]);
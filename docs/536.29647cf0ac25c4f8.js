"use strict";(self.webpackChunkmulti_layout=self.webpackChunkmulti_layout||[]).push([[536],{8536:(dt,y,r)=>{r.r(y),r.d(y,{ThisIsMyFirstFormComponent:()=>m,ThisIsMyFirstFormModule:()=>g});var h=r(5861),c=r(6895),s=r(433),T=r(646),M=r(3249),t=r(1571),u=r(2953),C=r(5156),w=r(7579),b=r(1135),O=r(6451),Z=r(2722),I=r(8505);function f(n,a=self,e="."){return n.split(e).reduce((o,l)=>o?.[l],a)}var v=r(3488);const A={asc:"desc",desc:"","":"asc"};class p{constructor(){this.sortable="",this.direction="",this.sort=new t.vpe}rotate(){this.direction=A[this.direction],this.sort.emit({column:this.sortable,direction:this.direction})}}p.\u0275fac=function(a){return new(a||p)},p.\u0275dir=t.lG2({type:p,selectors:[["th","sortable",""]],hostVars:4,hostBindings:function(a,e){1&a&&t.NdJ("click",function(){return e.rotate()}),2&a&&t.ekj("asc","asc"===e.direction)("desc","desc"===e.direction)},inputs:{sortable:"sortable",direction:"direction"},outputs:{sort:"sort"},standalone:!0});var P=r(138);function J(n,a){if(1&n&&(t.TgZ(0,"option",13),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e)}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"ngb-pagination",10),t.NdJ("pageChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.page=o)})("pageChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.paginate())}),t.qZA(),t.TgZ(2,"select",11),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.pageSize=o)})("ngModelChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.paginate())}),t.YNc(3,J,2,2,"option",12),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("collectionSize",e.collectionSize)("page",e.page)("pageSize",e.pageSize)("maxSize",3)("rotate",!0)("boundaryLinks",!0),t.xp6(1),t.Q6J("ngModel",e.pageSize),t.xp6(1),t.Q6J("ngForOf",e.pageSizes)}}function Q(n,a){if(1&n&&t._UZ(0,"app-input",17),2&n){const e=t.oxw(2);t.Q6J("ngControl",e.searchInput)("name","search-input-"+e._guid)}}function k(n,a){1&n&&t.GkF(0)}function S(n,a){if(1&n&&(t.TgZ(0,"div",9),t.YNc(1,k,1,0,"ng-container",5),t.qZA()),2&n){t.oxw(2);const e=t.MAs(1);t.xp6(1),t.Q6J("ngTemplateOutlet",e)}}function E(n,a){if(1&n&&(t.TgZ(0,"div",14)(1,"div"),t.YNc(2,Q,1,2,"app-input",15),t.qZA(),t.YNc(3,S,2,1,"div",16),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.searchable),t.xp6(1),t.Q6J("ngIf",e.paginated)}}function L(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"th",18)(1,"div",19)(2,"input",20),t.NdJ("change",function(o){t.CHM(e);const l=t.oxw();return t.KtG(o.currentTarget.checked?l.onEveryRowSelect():l.onEveryRowDeselect())}),t.qZA()()()}}function z(n,a){1&n&&t._UZ(0,"th",18)}function H(n,a){1&n&&t.GkF(0)}function q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"div",19)(2,"input",24),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw(2).$implicit;return t.KtG(l._selected=o)})("change",function(o){t.CHM(e);const l=t.oxw(2).$implicit,d=t.oxw();return t.KtG(o.currentTarget.checked?d.onRowSelect(l):d.onRowDeselect(l))}),t.qZA()()()}if(2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Q6J("ngModel",e._selected)}}function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"button",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().ngLet;return t.KtG(o.collapsed=!o.collapsed)}),t.qZA()()}if(2&n){const e=t.oxw().ngLet;t.xp6(1),t.uIk("aria-expanded",!e.collapsed)}}function U(n,a){1&n&&t.GkF(0)}function $(n,a){1&n&&t.GkF(0)}const x=function(n,a,e){return{$implicit:n,index:a,term$:e}};function j(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",26)(2,"div",27,28),t.NdJ("ngbCollapseChange",function(o){t.CHM(e);const l=t.oxw().ngLet;return t.KtG(l.collapsed=o)}),t.YNc(4,$,1,0,"ng-container",22),t.qZA()()()}if(2&n){const e=t.oxw().ngLet,i=t.oxw(),o=i.$implicit,l=i.index,d=t.oxw();t.xp6(1),t.uIk("colspan",d.colspan+(d.rowExpand?1:0)),t.xp6(1),t.Q6J("ngbCollapse",e.collapsed),t.xp6(2),t.Q6J("ngTemplateOutlet",d.rowExpand)("ngTemplateOutletContext",t.kEZ(4,x,o,l,d.lastTerm$))}}function G(n,a){1&n&&t._UZ(0,"tr",29)}function D(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"tr"),t.YNc(2,q,3,1,"td",7),t.YNc(3,Y,2,1,"td",7),t.YNc(4,U,1,0,"ng-container",22),t.qZA(),t.YNc(5,j,5,8,"tr",7),t.YNc(6,G,1,0,"tr",23),t.BQk()),2&n){const e=t.oxw(),i=e.$implicit,o=e.index,l=t.oxw();t.xp6(1),t.ekj("animated",l.animated),t.xp6(1),t.Q6J("ngIf",l.selectable),t.xp6(1),t.Q6J("ngIf",l.rowExpand),t.xp6(1),t.Q6J("ngTemplateOutlet",l.tbody)("ngTemplateOutletContext",t.kEZ(8,x,i,o,l.lastTerm$)),t.xp6(1),t.Q6J("ngIf",l.rowExpand),t.xp6(1),t.Q6J("ngIf",l.rowExpand)}}const R=function(){return{collapsed:!0}};function V(n,a){1&n&&(t.ynx(0),t.YNc(1,D,7,12,"ng-container",21),t.BQk()),2&n&&(t.xp6(1),t.Q6J("ngLet",t.DdM(1,R)))}function K(n,a){1&n&&t.GkF(0)}function B(n,a){if(1&n&&(t.ynx(0),t.YNc(1,K,1,0,"ng-container",5),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.emptyTemplate)}}function W(n,a){if(1&n&&(t.TgZ(0,"div",32),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.emptyMessage)}}function X(n,a){if(1&n&&(t.TgZ(0,"td"),t.YNc(1,B,2,1,"ng-container",30),t.YNc(2,W,2,1,"ng-template",null,31,t.W1O),t.qZA()),2&n){const e=t.MAs(3),i=t.oxw();t.uIk("colspan",i.colspan+(i.rowExpand?1:0)),t.xp6(1),t.Q6J("ngIf",i.emptyTemplate)("ngIfElse",e)}}function tt(n,a){1&n&&t.GkF(0)}function et(n,a){if(1&n&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,tt,1,0,"ng-container",5),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",e.tfoot)}}function nt(n,a){if(1&n&&t._UZ(0,"app-input",17),2&n){const e=t.oxw(2);t.Q6J("ngControl",e.searchInputRelay)("name","search-input-relay-"+e._guid)}}function at(n,a){1&n&&t.GkF(0)}function it(n,a){if(1&n&&(t.TgZ(0,"div",9),t.YNc(1,at,1,0,"ng-container",5),t.qZA()),2&n){t.oxw(2);const e=t.MAs(1);t.xp6(1),t.Q6J("ngTemplateOutlet",e)}}function ot(n,a){if(1&n&&(t.TgZ(0,"div",33)(1,"div"),t.YNc(2,nt,1,2,"app-input",15),t.qZA(),t.YNc(3,it,2,1,"div",16),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.searchable),t.xp6(1),t.Q6J("ngIf",e.paginated)}}const lt=function(n){return{"max-height":n}};class _{constructor(){this.destroy$=new w.x,this._guid="app-table-"+(0,v.M)(),this.animated=!1,this.showFootIfEmpty=!1,this.trackByFn=(a,e)=>e,this.emptyMessage="No results to display",this.stickyHead=!1,this.maxHeight=!1,this.tableFixed=!1,this.colspan=99,this.searchable=!1,this.paginated=!1,this.pageSize=5,this.pageSizes=[5,10,25,50],this.duplicateControls=!1,this.paginatedItems$=new b.X([]),this.page=1,this.searchInput=new s.NI("",{nonNullable:!0}),this.searchInputRelay=new s.NI("",{nonNullable:!0}),this.lastTerm$=new b.X(""),this.filteredItems=[],this.lastColumn="",this.lastDirection="",this.sortedItems=[],this.selectable=!1,this.rowSelected=new t.vpe,this.rowDeselected=new t.vpe}get selectedRows(){return this.paginatedItems$.getValue().filter(a=>a._selected)}ngOnInit(){if(!this.thead)throw Error("AppTable needs a thead template");if(!this.tbody)throw Error("AppTable needs a tbody template");if(!this.items||this.items&&!Array.isArray(this.items))throw Error("AppTable needs the items array");const[a,e]=[this.searchInput,this.searchInputRelay],i={onlySelf:!0,emitEvent:!1,emitModelToViewChange:!0};a.valueChanges.subscribe(o=>e.setValue(o,i)),e.valueChanges.subscribe(o=>a.setValue(o,i)),(0,O.T)(a.valueChanges,e.valueChanges).pipe((0,Z.R)(this.destroy$),(0,I.b)(o=>{this.lastTerm$.next(o),this.search()})).subscribe()}ngOnChanges(a){if("items"in a){const e=a.items.previousValue,i=a.items.currentValue;i&&Array.isArray(i)?e!==i&&(this.paginated||(this.pageSize=i.length),this.collectionSize=i.length,this.search()):console.warn("Items must have a value and be an array.")}}ngOnDestroy(){this.destroy$.next()}search(){this.filter(),this.sort({column:this.lastColumn,direction:this.lastDirection})}filter(){const a=(this.lastTerm$.getValue()||"").toLowerCase();this.filteredItems=this.items.filter(e=>this.searchable&&Array.isArray(this.searchable)&&this.searchable.length?this.searchable.some(o=>((f(o,e)||"")+"").toLowerCase().includes(a)):JSON.stringify(e).toLowerCase().includes(a)),this.collectionSize=this.filteredItems.length}sort({column:a,direction:e}){if(!this.headers)return this.sortedItems=this.filteredItems,void this.paginate();this.headers.forEach(i=>{i.sortable!==a&&(i.direction="")}),this.sortedItems=""===a||""===e?this.filteredItems:[...this.filteredItems].sort((i,o)=>{const l=function F(n,a){const e=null==n,i=null==a;return e&&i?0:e?-1:i?1:n<a?-1:n>a?1:0}(f(a,i),f(a,o));return"asc"===e?l:-l}),this.lastColumn=a,this.lastDirection=e,this.paginate()}paginate(){this.sortedItems.forEach(e=>e._selected=!1);const a=this.sortedItems.slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize);this.paginatedItems$.next(a)}onRowSelect(a){this.rowSelected.emit(a)}onRowDeselect(a){this.rowDeselected.emit(a)}onEveryRowSelect(){this.paginatedItems$.getValue().forEach(e=>e._selected=!0)}onEveryRowDeselect(){this.paginatedItems$.getValue().forEach(e=>e._selected=!1)}}function st(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"th",20),t.NdJ("sort",function(o){t.CHM(e),t.oxw();const l=t.MAs(25);return t.KtG(l.sort(o))}),t._uU(1,"First name"),t.qZA(),t.TgZ(2,"th",21),t.NdJ("sort",function(o){t.CHM(e),t.oxw();const l=t.MAs(25);return t.KtG(l.sort(o))}),t._uU(3,"Last name"),t.qZA(),t.TgZ(4,"th",22),t.NdJ("sort",function(o){t.CHM(e),t.oxw();const l=t.MAs(25);return t.KtG(l.sort(o))}),t._uU(5,"Agree"),t.qZA(),t.TgZ(6,"th",23),t.NdJ("sort",function(o){t.CHM(e),t.oxw();const l=t.MAs(25);return t.KtG(l.sort(o))}),t._uU(7,"Email"),t.qZA(),t.TgZ(8,"th",24),t.NdJ("sort",function(o){t.CHM(e),t.oxw();const l=t.MAs(25);return t.KtG(l.sort(o))}),t._uU(9,"City"),t.qZA(),t.TgZ(10,"th",25),t.NdJ("sort",function(o){t.CHM(e),t.oxw();const l=t.MAs(25);return t.KtG(l.sort(o))}),t._uU(11,"Zip"),t.qZA()}}function rt(n,a){if(1&n&&(t.TgZ(0,"td",26),t._UZ(1,"ngb-highlight",27),t.ALo(2,"async"),t.qZA(),t.TgZ(3,"td",28),t._UZ(4,"ngb-highlight",27),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"td",29),t._UZ(7,"ngb-highlight",27),t.ALo(8,"async"),t.qZA(),t.TgZ(9,"td",30),t._UZ(10,"ngb-highlight",27),t.ALo(11,"async"),t.qZA(),t.TgZ(12,"td",31),t._UZ(13,"ngb-highlight",27),t.ALo(14,"async"),t.qZA(),t.TgZ(15,"td",32),t._UZ(16,"ngb-highlight",27),t.ALo(17,"async"),t.qZA()),2&n){const e=a.$implicit,i=a.term$;t.xp6(1),t.Q6J("result",e["First name"])("term",t.lcZ(2,12,i)||""),t.xp6(3),t.Q6J("result",e["Last name"])("term",t.lcZ(5,14,i)||""),t.xp6(3),t.Q6J("result",e.Agree)("term",t.lcZ(8,16,i)||""),t.xp6(3),t.Q6J("result",e.Email)("term",t.lcZ(11,18,i)||""),t.xp6(3),t.Q6J("result",e.City)("term",t.lcZ(14,20,i)||""),t.xp6(3),t.Q6J("result",e.Zip)("term",t.lcZ(17,22,i)||"")}}_.\u0275fac=function(a){return new(a||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-table"]],contentQueries:function(a,e,i){if(1&a&&t.Suo(i,p,4),2&a){let o;t.iGM(o=t.CRH())&&(e.headers=o)}},inputs:{thead:"thead",tbody:"tbody",animated:"animated",rowExpand:"rowExpand",tfoot:"tfoot",showFootIfEmpty:"showFootIfEmpty",items:"items",trackByFn:"trackByFn",emptyTemplate:"emptyTemplate",emptyMessage:"emptyMessage",stickyHead:"stickyHead",maxHeight:"maxHeight",tableFixed:"tableFixed",colspan:"colspan",searchable:"searchable",paginated:"paginated",pageSize:"pageSize",pageSizes:"pageSizes",duplicateControls:"duplicateControls",selectable:"selectable"},outputs:{rowSelected:"rowSelected",rowDeselected:"rowDeselected"},features:[t.TTD],decls:18,vars:22,consts:[["paginationTemplate",""],["class","d-flex justify-content-center justify-content-lg-between flex-wrap gap-2 p-3 mb-2",4,"ngIf"],[1,"table-responsive",3,"ngStyle"],[1,"table","table-striped"],["style","width: 60px",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],["class","d-flex justify-content-center justify-content-lg-between flex-wrap gap-2 p-3",4,"ngIf"],[1,"d-flex","flex-wrap","justify-content-center","gap-2"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"],[1,"form-select",2,"width","auto",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"],[1,"d-flex","justify-content-center","justify-content-lg-between","flex-wrap","gap-2","p-3","mb-2"],["style","max-width: 250px","placeholder","Search \u2315",3,"ngControl","name",4,"ngIf"],["class","d-flex flex-wrap justify-content-center gap-2",4,"ngIf"],["placeholder","Search \u2315",2,"max-width","250px",3,"ngControl","name"],[2,"width","60px"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"change"],[4,"ngLet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","hidden",4,"ngIf"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange","change"],["type","button","aria-controls","collapseExample",1,"btn","collapse-toggle",3,"click"],[1,"row-expand"],[3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"],[1,"hidden"],[4,"ngIf","ngIfElse"],["showEmptyMessage",""],[1,"p-3","text-center"],[1,"d-flex","justify-content-center","justify-content-lg-between","flex-wrap","gap-2","p-3"]],template:function(a,e){if(1&a&&(t.YNc(0,N,4,8,"ng-template",null,0,t.W1O),t.YNc(2,E,4,2,"div",1),t.TgZ(3,"div",2)(4,"table",3)(5,"thead")(6,"tr"),t.YNc(7,L,3,0,"th",4),t.YNc(8,z,1,0,"th",4),t.YNc(9,H,1,0,"ng-container",5),t.qZA()(),t.TgZ(10,"tbody"),t.YNc(11,V,2,2,"ng-container",6),t.ALo(12,"async"),t.YNc(13,X,4,3,"td",7),t.ALo(14,"async"),t.qZA(),t.YNc(15,et,3,1,"tfoot",7),t.ALo(16,"async"),t.qZA()(),t.YNc(17,ot,4,2,"div",8)),2&a){let i,o;t.xp6(2),t.Q6J("ngIf",e.searchable||e.paginated),t.xp6(1),t.Q6J("ngStyle",t.VKq(20,lt,e.maxHeight)),t.xp6(1),t.Udp("table-layout",e.tableFixed?"fixed":null),t.xp6(1),t.ekj("sticky-head",e.stickyHead),t.xp6(2),t.Q6J("ngIf",e.selectable),t.xp6(1),t.Q6J("ngIf",e.rowExpand),t.xp6(1),t.Q6J("ngTemplateOutlet",e.thead),t.xp6(2),t.Q6J("ngForOf",t.lcZ(12,14,e.paginatedItems$))("ngForTrackBy",e.trackByFn),t.xp6(2),t.Q6J("ngIf",!(null!=(i=t.lcZ(14,16,e.paginatedItems$))&&i.length)),t.xp6(2),t.Q6J("ngIf",e.tfoot&&(e.showFootIfEmpty||(null==(o=t.lcZ(16,18,e.paginatedItems$))?null:o.length))),t.xp6(2),t.Q6J("ngIf",e.duplicateControls&&(e.searchable||e.paginated))}},dependencies:[c.sg,c.O5,c.tP,c.PC,s.YN,s.Kr,s.Wl,s.EJ,s.JJ,s.On,u._D,u.N9,C.a,P.e,c.Ov],styles:['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .ngb-highlight{background-color:#ff0}[_nghost-%COMP%]     th{white-space:nowrap}.table[_ngcontent-%COMP%]{margin-bottom:0;vertical-align:middle}.animated[_ngcontent-%COMP%]{animation:forwards ease-out .3s _ngcontent-%COMP%_FadeIn;filter:blur(2px);left:-5px;opacity:0;position:relative}.animated[_ngcontent-%COMP%]:nth-child(1){animation-delay:20ms}.animated[_ngcontent-%COMP%]:nth-child(2){animation-delay:40ms}.animated[_ngcontent-%COMP%]:nth-child(3){animation-delay:60ms}.animated[_ngcontent-%COMP%]:nth-child(4){animation-delay:80ms}.animated[_ngcontent-%COMP%]:nth-child(5){animation-delay:.1s}.animated[_ngcontent-%COMP%]:nth-child(6){animation-delay:.12s}.animated[_ngcontent-%COMP%]:nth-child(7){animation-delay:.14s}.animated[_ngcontent-%COMP%]:nth-child(8){animation-delay:.16s}.animated[_ngcontent-%COMP%]:nth-child(9){animation-delay:.18s}.animated[_ngcontent-%COMP%]:nth-child(10){animation-delay:.2s}.animated[_ngcontent-%COMP%]:nth-child(11){animation-delay:.22s}.animated[_ngcontent-%COMP%]:nth-child(12){animation-delay:.24s}.animated[_ngcontent-%COMP%]:nth-child(13){animation-delay:.26s}.animated[_ngcontent-%COMP%]:nth-child(14){animation-delay:.28s}.animated[_ngcontent-%COMP%]:nth-child(15){animation-delay:.3s}.animated[_ngcontent-%COMP%]:nth-child(16){animation-delay:.32s}.animated[_ngcontent-%COMP%]:nth-child(17){animation-delay:.34s}.animated[_ngcontent-%COMP%]:nth-child(18){animation-delay:.36s}.animated[_ngcontent-%COMP%]:nth-child(19){animation-delay:.38s}.animated[_ngcontent-%COMP%]:nth-child(20){animation-delay:.4s}.animated[_ngcontent-%COMP%]:nth-child(21){animation-delay:.42s}.animated[_ngcontent-%COMP%]:nth-child(22){animation-delay:.44s}.animated[_ngcontent-%COMP%]:nth-child(23){animation-delay:.46s}.animated[_ngcontent-%COMP%]:nth-child(24){animation-delay:.48s}.animated[_ngcontent-%COMP%]:nth-child(25){animation-delay:.5s}.animated[_ngcontent-%COMP%]:nth-child(26){animation-delay:.52s}.animated[_ngcontent-%COMP%]:nth-child(27){animation-delay:.54s}.animated[_ngcontent-%COMP%]:nth-child(28){animation-delay:.56s}.animated[_ngcontent-%COMP%]:nth-child(29){animation-delay:.58s}.animated[_ngcontent-%COMP%]:nth-child(30){animation-delay:.6s}.animated[_ngcontent-%COMP%]:nth-child(31){animation-delay:.62s}.animated[_ngcontent-%COMP%]:nth-child(32){animation-delay:.64s}.animated[_ngcontent-%COMP%]:nth-child(33){animation-delay:.66s}.animated[_ngcontent-%COMP%]:nth-child(34){animation-delay:.68s}.animated[_ngcontent-%COMP%]:nth-child(35){animation-delay:.7s}.animated[_ngcontent-%COMP%]:nth-child(36){animation-delay:.72s}.animated[_ngcontent-%COMP%]:nth-child(37){animation-delay:.74s}.animated[_ngcontent-%COMP%]:nth-child(38){animation-delay:.76s}.animated[_ngcontent-%COMP%]:nth-child(39){animation-delay:.78s}.animated[_ngcontent-%COMP%]:nth-child(40){animation-delay:.8s}.animated[_ngcontent-%COMP%]:nth-child(41){animation-delay:.82s}.animated[_ngcontent-%COMP%]:nth-child(42){animation-delay:.84s}.animated[_ngcontent-%COMP%]:nth-child(43){animation-delay:.86s}.animated[_ngcontent-%COMP%]:nth-child(44){animation-delay:.88s}.animated[_ngcontent-%COMP%]:nth-child(45){animation-delay:.9s}.animated[_ngcontent-%COMP%]:nth-child(46){animation-delay:.92s}.animated[_ngcontent-%COMP%]:nth-child(47){animation-delay:.94s}.animated[_ngcontent-%COMP%]:nth-child(48){animation-delay:.96s}.animated[_ngcontent-%COMP%]:nth-child(49){animation-delay:.98s}.animated[_ngcontent-%COMP%]:nth-child(50){animation-delay:1s}@keyframes _ngcontent-%COMP%_FadeIn{0%{filter:blur(2px);left:-5px;opacity:0}to{filter:blur(0px);left:0;opacity:1}}.row-expand[_ngcontent-%COMP%]{background:#0000!important;border:none;padding:0!important}.collapse-toggle[_ngcontent-%COMP%]:after{content:"\\f283";display:inline-block;font-family:bootstrap-icons!important;font-style:normal;font-weight:400!important;font-variant:normal;text-transform:none;line-height:1;vertical-align:-.125em}.collapse-toggle[aria-expanded=true][_ngcontent-%COMP%]:after{content:"\\f27d"}.collapse-toggle.collapsed[_ngcontent-%COMP%]:after{content:"\\f283"}tfoot[_ngcontent-%COMP%]{background:rgba(var(--app-gray_800),1);color:rgba(var(--app-gray_0),1)}.sticky-head[_ngcontent-%COMP%]{background:rgba(var(--app-gray_0),1);box-shadow:0 2px 16px #0002;position:sticky;top:0;z-index:1}@media (max-width: 650px){thead[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     td{display:grid}[_nghost-%COMP%]     td:before{content:attr(data-label);font-weight:700}}@media (min-width: 650px){[_nghost-%COMP%]     .table>thead>tr>th:first-child, [_nghost-%COMP%]     .table>tbody>tr>td:not(.row-expand):first-child{padding-left:1.5rem!important}[_nghost-%COMP%]     .table>thead>tr>th:last-child, [_nghost-%COMP%]     .table>tbody>tr>td:not(.row-expand):last-child{padding-right:1.5rem!important}}']});const ct=function(){return["First name","Last name","Email"]};class m{constructor(){this.intervalId=null,this.results=[],this.form=new s.cw({firstName:new s.NI(null),lastName:new s.NI(null),email:new s.NI(null,[s.kI.required,s.kI.email]),city:new s.NI(null,[s.kI.required]),zip:new s.NI(null,[s.kI.required]),agree:new s.NI(!1,[s.kI.requiredTrue])})}ngOnInit(){var a=this;const e=function(){var i=(0,h.Z)(function*(){return a.results=yield a.loadData()});return function(){return i.apply(this,arguments)}}();e(),this.intervalId=setInterval(e.bind(this),2e3)}ngOnDestroy(){this.intervalId&&clearInterval(this.intervalId)}submit(){var a=this;return(0,h.Z)(function*(){yield fetch("https://eoyhpvivfett3ub.m.pipedream.net",{method:"POST",body:JSON.stringify(a.form.getRawValue())})})()}getFormattedForm(){return JSON.stringify(this.form.getRawValue(),null,4)}loadData(){return(0,h.Z)(function*(){return yield(yield fetch("https://eoy6t4x2oybru9.m.pipedream.net")).json()})()}}m.\u0275fac=function(a){return new(a||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["ng-component"]],decls:30,vars:19,consts:[[1,"container"],[1,"d-grid","gap-4","p-3"],[1,"card","shadow"],[1,"card-header"],[1,"m-0"],[1,"card-body"],[1,"flexgrid","flexgrid--3"],["name","firstName","label","First name",3,"ngControl","floatingLabel"],["name","lastName","label","Last name",3,"ngControl","floatingLabel"],["name","email","label","Email address",3,"ngControl","floatingLabel"],["name","city","label","City",3,"ngControl","floatingLabel"],["type","number","name","zip","label","ZIP",3,"ngControl","floatingLabel"],[1,"d-flex","flex-wrap","gap-3","mb-3"],["type","checkbox","name","agree","label","Agree to terms and conditions",3,"ngControl"],[1,"text-center"],[1,"btn","btn-primary",3,"disabled","click"],[3,"thead","tbody","items","searchable","paginated","pageSize"],["dt",""],["thead",""],["tbody",""],["sortable","First name",3,"sort"],["sortable","Last name",3,"sort"],["sortable","Agree",3,"sort"],["sortable","Email",3,"sort"],["sortable","City",3,"sort"],["sortable","Zip",3,"sort"],["data-label","First name"],[3,"result","term"],["data-label","Last name"],["data-label","Agree"],["data-label","Email"],["data-label","City"],["data-label","Zip"]],template:function(a,e){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h4",4),t._uU(5,"Complete form"),t.qZA()(),t.TgZ(6,"div",5)(7,"p"),t._uU(8,"Complete form with almost all available form controls."),t._UZ(9,"br"),t._uU(10,"This includes input elements necessary for filling out and submitting information."),t.qZA(),t.TgZ(11,"div",6),t._UZ(12,"app-input",7)(13,"app-input",8)(14,"app-input",9),t.qZA(),t.TgZ(15,"div",6),t._UZ(16,"app-input",10)(17,"app-input",11),t.qZA(),t.TgZ(18,"div",12),t._UZ(19,"app-input",13),t.qZA(),t.TgZ(20,"div",14)(21,"button",15),t.NdJ("click",function(){return e.submit()}),t._uU(22," Submit "),t.qZA()()()(),t.TgZ(23,"section",2)(24,"app-table",16,17),t.YNc(26,st,12,0,"ng-template",null,18,t.W1O),t.YNc(28,rt,18,24,"ng-template",null,19,t.W1O),t.qZA()()()()),2&a){const i=t.MAs(27),o=t.MAs(29);t.xp6(12),t.Q6J("ngControl",e.form.controls.firstName)("floatingLabel",!0),t.xp6(1),t.Q6J("ngControl",e.form.controls.lastName)("floatingLabel",!0),t.xp6(1),t.Q6J("ngControl",e.form.controls.email)("floatingLabel",!0),t.xp6(2),t.Q6J("ngControl",e.form.controls.city)("floatingLabel",!0),t.xp6(1),t.Q6J("ngControl",e.form.controls.zip)("floatingLabel",!0),t.xp6(2),t.Q6J("ngControl",e.form.controls.agree),t.xp6(2),t.Q6J("disabled",!!e.form.disabled||e.form.invalid),t.xp6(3),t.Q6J("thead",i)("tbody",o)("items",e.results)("searchable",t.DdM(18,ct))("paginated",!0)("pageSize",10)}},dependencies:[u._h,C.a,_,p,c.Ov],encapsulation:2});class g{}g.\u0275fac=function(a){return new(a||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[c.ez,M.m,T.Bz.forChild([{path:"",component:m}])]})}}]);
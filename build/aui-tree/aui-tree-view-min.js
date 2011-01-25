AUI.add("aui-tree-view",function(y){var q=y.Lang,r=q.isString,ao="boundingBox",F="children",h="container",aa="content",S="contentBox",O=".",ad="file",al="hitarea",W="icon",aq="label",b="lastSelected",t="leaf",at="node",ai="ownerTree",am="root",a=" ",ab="tree",H="tree-view",D="type",J="view",R=function(){return Array.prototype.slice.call(arguments).join(a);},X=function(A){return(A instanceof y.TreeNode);},o=y.ClassNameManager.getClassName,C=o(ab,al),s=o(ab,W),n=o(ab,aq),Q=o(ab,at,aa),G=o(ab,am,h),j=o(ab,J,aa);var v=y.Component.create({NAME:H,ATTRS:{type:{value:ad,validator:r},lastSelected:{value:null,validator:X},io:{value:null},paginator:{value:null}},EXTENDS:y.TreeData,prototype:{CONTENT_TEMPLATE:"<ul></ul>",bindUI:function(){var A=this;A._delegateDOM();},renderUI:function(){var A=this;A._renderElements();},syncUI:function(){var A=this;A.refreshIndex();},registerNode:function(L){var A=this;L.set(ai,A);v.superclass.registerNode.apply(this,arguments);},_createFromHTMLMarkup:function(L){var A=this;L.all("> li").each(function(aA){var ay=aA.one("> *").remove();var ax=ay.outerHTML();docFrag=null;var aB=new y.TreeNode({boundingBox:aA,label:ax});var aw=aA.one("> ul");if(aw){aB.set(t,false);aB.set(h,aw);aB.render();A._createFromHTMLMarkup(aw);}else{aB.render();}var av=aA.get(u).get(u);var az=y.Widget.getByNode(av);az.appendChild(aB);});},_renderElements:function(){var A=this;var L=A.get(S);var av=A.get(F);var aw=A.get(D);var ax=o(ab,aw);L.addClass(j);A.set(h,L);L.addClass(R(ax,G));if(av.length){A.eachChildren(function(ay){A.appendChild(ay,true);});}else{A._createFromHTMLMarkup(L);}},_delegateDOM:function(){var A=this;var L=A.get(ao);L.delegate("click",y.bind(A._onClickHitArea,A),O+C);L.delegate("dblclick",y.bind(A._onClickHitArea,A),O+s);L.delegate("dblclick",y.bind(A._onClickHitArea,A),O+n);L.delegate("mouseenter",y.bind(A._onMouseEnterNodeEl,A),O+Q);L.delegate("mouseleave",y.bind(A._onMouseLeaveNodeEl,A),O+Q);L.delegate("click",y.bind(A._onClickNodeEl,A),O+Q);},_onClickNodeEl:function(L){var A=this;var aw=A.getNodeByChild(L.currentTarget);if(aw&&!aw.isSelected()){var av=A.get(b);if(av){av.unselect();}aw.select();}},_onMouseEnterNodeEl:function(L){var A=this;var av=A.getNodeByChild(L.currentTarget);if(av){av.over();}},_onMouseLeaveNodeEl:function(L){var A=this;var av=A.getNodeByChild(L.currentTarget);if(av){av.out();}},_onClickHitArea:function(L){var A=this;var av=A.getNodeByChild(L.currentTarget);if(av){av.toggle();}}}});y.TreeView=v;var au=q.isNumber,E="above",x="append",ae="below",B="block",aj="body",g="clearfix",ag="default",d="display",T="down",N="drag",w="draggable",ap="dragCursor",m="dragNode",c="expanded",ah="helper",af="insert",Z="offsetHeight",u="parentNode",V="scrollDelay",k="state",ac="tree-drag-drop",I="up",l=y.DD.DDM,p=o(ah,g),an=o(W),P=o(ab,N,ah),i=o(ab,N,ah,aa),z=o(ab,N,ah,aq),f=o(ab,N,af,E),ar=o(ab,N,af,x),M=o(ab,N,af,ae),Y=o(ab,N,k,x),K=o(ab,N,k,af,E),ak=o(ab,N,k,af,ae),e='<div class="'+P+'">'+'<div class="'+[i,p].join(a)+'">'+'<span class="'+an+'"></span>'+'<span class="'+z+'"></span>'+"</div>"+"</div>";var U=y.Component.create({NAME:ac,ATTRS:{helper:{value:null},scrollDelay:{value:100,validator:au}},EXTENDS:y.TreeView,prototype:{direction:ae,dropAction:null,lastY:0,node:null,nodeContent:null,destructor:function(){var A=this;var L=A.get(ah);if(L){L.remove(true);}A.eachChildren(function(aw){if(aw.get(w)){var av=l.getDrag(aw.get(S));if(av){av.destroy();}}},true);},bindUI:function(){var A=this;U.superclass.bindUI.apply(this,arguments);A._bindDragDrop();},renderUI:function(){var A=this;U.superclass.renderUI.apply(this,arguments);var L=y.Node.create(e).hide();y.one(aj).append(L);A.set(ah,L);l.set(ap,ag);},_createDrag:function(aw){var L=this;if(!L.dragTimers){L.dragTimers=[];}if(!l.getDrag(aw)){var A=L.dragTimers;var av=50*A.length;var ax=setTimeout(function(){if(!l.getDrag(aw)){var ay=new y.DD.Drag({bubbleTargets:L,node:aw,target:true}).plug(y.Plugin.DDProxy,{moveOnEnd:false,positionProxy:false,borderStyle:null}).plug(y.Plugin.DDNodeScroll,{scrollDelay:L.get(V),node:L.get(ao)});}y.Array.removeItem(A,ax);},av);A.push(ax);}},_bindDragDrop:function(){var A=this;var L=A.get(ao);A._createDragInitHandler=y.bind(function(){A.eachChildren(function(av){if(av.get(w)){A._createDrag(av.get(S));}},true);L.detach("mouseover",A._createDragInitHandler);},A);L.on("mouseover",A._createDragInitHandler);A.after("insert",y.bind(A._afterAppend,A));A.after("append",y.bind(A._afterAppend,A));A.on("drag:align",A._onDragAlign);A.on("drag:start",A._onDragStart);A.on("drop:exit",A._onDropExit);A.after("drop:hit",A._afterDropHit);A.on("drop:hit",A._onDropHit);A.on("drop:over",A._onDropOver);},_appendState:function(L){var A=this;A.dropAction=x;A.get(ah).addClass(Y);L.addClass(ar);},_goingDownState:function(L){var A=this;A.dropAction=ae;A.get(ah).addClass(ak);L.addClass(M);},_goingUpState:function(L){var A=this;A.dropAction=E;A.get(ah).addClass(K);L.addClass(f);},_resetState:function(L){var A=this;var av=A.get(ah);av.removeClass(Y);av.removeClass(K);av.removeClass(ak);if(L){L.removeClass(f);L.removeClass(ar);L.removeClass(M);}},_updateNodeState:function(A){var aE=this;var aA=A.drag;var ax=A.drop;var L=ax.get(at);var aD=L.get(u);var az=aA.get(at).get(u);var aw=y.Widget.getByNode(aD);aE._resetState(aE.nodeContent);if(!az.contains(aD)){var aF=L.get(Z)/3;var av=L.getY();var aC=av+aF*1;var aB=av+aF*2;var ay=aA.mouseXY[1];if((ay>av)&&(ay<aC)){aE._goingUpState(L);}else{if(ay>aB){aE._goingDownState(L);}else{if((ay>aC)&&(ay<aB)){if(aw&&!aw.isLeaf()){aE._appendState(L);}else{if(aE.direction==I){aE._goingUpState(L);}else{aE._goingDownState(L);}}}}}}aE.nodeContent=L;},_afterAppend:function(L){var A=this;var av=L.tree.node;if(av.get(w)){A._createDrag(av.get(S));}},_afterDropHit:function(ax){var A=this;var az=A.dropAction;var ay=ax.drag.get(at).get(u);var av=ax.drop.get(at).get(u);var aA=y.Widget.getByNode(av);var aw=y.Widget.getByNode(ay);var L=A.getEventOutputMap(A);L.tree.dropNode=aA;L.tree.dragNode=aw;if(az==E){aA.insertBefore(aw);
A.bubbleEvent("dropInsert",L);}else{if(az==ae){aA.insertAfter(aw);A.bubbleEvent("dropInsert",L);}else{if(az==x){if(aA&&!aA.isLeaf()){aA.appendChild(aw);if(!aA.get(c)){aA.expand();}A.bubbleEvent("dropAppend",L);}}}}A._resetState(A.nodeContent);A.bubbleEvent("drop",L);A.dropAction=null;},_onDragAlign:function(av){var A=this;var L=A.lastY;var aw=av.target.lastXY[1];if(aw!=L){A.direction=(aw<L)?I:T;}A.lastY=aw;},_onDragStart:function(ay){var A=this;var aw=ay.target;var aA=aw.get(at).get(u);var av=y.Widget.getByNode(aA);var az=A.get(b);if(az){az.unselect();}av.select();var ax=A.get(ah);var L=ax.one(O+z);ax.setStyle(d,B).show();L.html(av.get(aq));aw.set(m,ax);},_onDropOver:function(L){var A=this;A._updateNodeState(L);},_onDropHit:function(L){var A=L.drop.get(at).get(u);var av=y.Widget.getByNode(A);if(!X(av)){L.preventDefault();}},_onDropExit:function(){var A=this;A.dropAction=null;A._resetState(A.nodeContent);}}});y.TreeViewDD=U;},"@VERSION@",{requires:["aui-tree-node","dd-drag","dd-drop","dd-proxy"],skinnable:true});
AUI.add("aui-tree-node",function(ac){var W=ac.Lang,aI=W.isString,az=W.isBoolean,aP="alwaysShowHitArea",O="",r="boundingBox",g="children",aE="clearfix",w="collapsed",a="container",aa="content",u="contentBox",j="expanded",o="helper",T="hidden",G="hitarea",f="hitAreaEl",S="icon",aO="iconEl",ar="id",ai="label",U="labelEl",R="lastSelected",aD="leaf",p="node",ak="over",X="ownerTree",e="parentNode",aC="selected",s=" ",h="tree",H="tree-node",aL=function(){return Array.prototype.slice.call(arguments).join(s);},ao=function(A){return(A instanceof ac.TreeNode);},aK=function(A){return(A instanceof ac.TreeView);},E=ac.ClassNameManager.getClassName,af=E(o,aE),y=E(h,w),b=E(h,a),aQ=E(h,j),t=E(h,T),au=E(h,G),D=E(h,S),k=E(h,ai),C=E(h,p,aa),av=E(h,p,T,G),i=E(h,p,aD),aH=E(h,p,ak),I=E(h,p,aC),ab='<div class="'+au+'"></div>',q='<div class="'+D+'"></div>',d='<div class="'+k+'"></div>',aN="<ul></ul>",v="<li></li>",Y='<div class="'+aL(af,C)+'"></div>';var M=ac.Component.create({NAME:H,ATTRS:{draggable:{value:true,validator:az},ownerTree:{value:null},label:{value:O,validator:aI},expanded:{value:false,validator:az},id:{validator:aI},leaf:{value:true,setter:function(A){if(A&&this.get(g).length){return false;}return A;},validator:az},nextSibling:{value:null,validator:ao},prevSibling:{value:null,validator:ao},parentNode:{value:null,validator:function(A){return ao(A)||aK(A);}},labelEl:{setter:ac.one,valueFn:function(){var A=this.get(ai);return ac.Node.create(d).html(A).unselectable();}},hitAreaEl:{setter:ac.one,valueFn:function(){return ac.Node.create(ab);}},alwaysShowHitArea:{value:true,validator:az},iconEl:{setter:ac.one,valueFn:function(){return ac.Node.create(q);}},tabIndex:{value:null}},EXTENDS:ac.TreeData,prototype:{BOUNDING_TEMPLATE:v,CONTENT_TEMPLATE:Y,initializer:function(){var A=this;A._syncTreeNodeBBId();M.superclass.initializer.apply(this,arguments);},bindUI:function(){var A=this;A.publish("collapse",{defaultFn:A._collapse});A.publish("expand",{defaultFn:A._expand});A.after("childrenChange",ac.bind(A._afterSetChildren,A));A.after("idChange",A._afterSetId,A);},_renderUI:function(A){this._renderBoxClassNames();},renderUI:function(){var A=this;A._renderBoundingBox();A._renderContentBox();},syncUI:function(){var A=this;A._syncHitArea(A.get(g));},_renderContentBox:function(aU){var A=this;var L=A.get(u);if(A.isLeaf()){L.addClass(i);}else{var aT=A.get(j);L.addClass(aT?aQ:y);if(aT){A.expand();}}return L;},_renderBoundingBox:function(){var A=this;var aT=A.get(r);var L=A.get(u);var aU=null;if(!A.isLeaf()){L.append(A.get(f));aU=A._createNodeContainer();}L.append(A.get(aO));L.append(A.get(U));aT.append(L);if(aU){if(!A.get(j)){aU.addClass(t);}aT.append(aU);}return aT;},_createNodeContainer:function(){var A=this;var L=A.get(a)||ac.Node.create(aN);L.addClass(b);A.set(a,L);A.eachChildren(function(aT){A.appendChild(aT);});return L;},_syncHitArea:function(L){var A=this;if(A.get(aP)||L.length){A.showHitArea();}else{A.hideHitArea();A.collapse();}},appendChild:function(){var A=this;if(!A.isLeaf()){M.superclass.appendChild.apply(A,arguments);}},collapse:function(){var A=this;if(A.get(j)){var L=A.getEventOutputMap(A);A.bubbleEvent("collapse",L);}},_collapse:function(aU){if(aU.stopActionPropagation){return false;}var A=this;if(!A.isLeaf()){var aT=A.get(a);var L=A.get(u);L.replaceClass(aQ,y);if(aT){aT.addClass(t);}A.set(j,false);}},collapseAll:function(){var A=this;M.superclass.collapseAll.apply(A,arguments);A.collapse();},contains:function(A){return A.isAncestor(this);},expand:function(){var A=this;if(!A.get(j)){var L=A.getEventOutputMap(A);A.bubbleEvent("expand",L);}},_expand:function(aU){if(aU.stopActionPropagation){return false;}var A=this;if(!A.isLeaf()){var aT=A.get(a);var L=A.get(u);L.replaceClass(y,aQ);if(aT){aT.removeClass(t);}A.set(j,true);}},expandAll:function(){var A=this;M.superclass.expandAll.apply(A,arguments);A.expand();},getDepth:function(){var aT=0;var L=this;var A=L.get(e);while(A){++aT;A=A.get(e);}return aT;},hasChildNodes:function(){var A=this;return(!A.isLeaf()&&M.superclass.hasChildNodes.apply(this,arguments));},isSelected:function(){return this.get(u).hasClass(I);},isLeaf:function(){var A=this;return A.get(aD);},isAncestor:function(aT){var L=this;var A=L.get(e);while(A){if(A==aT){return true;}A=A.get(e);}return false;},insertAfter:function(aT,L){var A=this;M.superclass.insertAfter.apply(this,[aT,A]);},insertBefore:function(L){var A=this;M.superclass.insertBefore.apply(this,[L,A]);},removeChild:function(L){var A=this;if(!A.isLeaf()){M.superclass.removeChild.apply(A,arguments);}},toggle:function(){var A=this;if(A.get(j)){A.collapse();}else{A.expand();}},select:function(){var A=this;var L=A.get(X);if(L){L.set(R,A);}A.get(u).addClass(I);A.fire("select");},unselect:function(){var A=this;A.get(u).removeClass(I);A.fire("unselect");},over:function(){this.get(u).addClass(aH);},out:function(){this.get(u).removeClass(aH);},showHitArea:function(){var A=this;var L=A.get(f);L.removeClass(av);},hideHitArea:function(){var A=this;var L=A.get(f);L.addClass(av);},_syncTreeNodeBBId:function(L){var A=this;A.get(r).attr(ar,A.get(ar));},_afterSetChildren:function(L){var A=this;A._syncHitArea(L.newVal);}}});ac.TreeNode=M;var ax=W.isFunction,F=W.isObject,ad=W.isValue,aJ="cache",at="end",aj="io",aA="limit",aM="loaded",aR="loading",ah="paginator",am="start",aq="tree-node-io",c="paginatorClick",ay=E(h,p,ah),x=E(h,p,aj,aR),aw='<a class="'+ay+'" href="javascript:void(0);">Load more results</a>';var K=ac.Component.create({NAME:aq,ATTRS:{io:{lazyAdd:false,value:null,setter:function(A){return this._setIO(A);}},loading:{value:false,validator:az},loaded:{value:false,validator:az},cache:{value:true,validator:az},leaf:{value:false,validator:az},paginator:{setter:function(A){return ac.merge({alwaysVisible:false,autoFocus:true,element:ac.Node.create(aw),endParam:at,limitParam:aA,start:0,startParam:am},A);},validator:F}},EXTENDS:ac.TreeNode,prototype:{renderUI:function(){var A=this;A._inheritOwnerTreeAttrs();K.superclass.renderUI.apply(this,arguments);
},bindUI:function(){var A=this;K.superclass.bindUI.apply(this,arguments);A._bindPaginatorUI();A._createEvents();},_bindPaginatorUI:function(){var A=this;var aT=A.get(ah);if(aT){var L=ac.bind(A._handlePaginatorClickEvent,A);aT.element.on("click",L);}},createNode:function(L){var A=this;ac.each(L,function(aU){var aT=K.superclass.createNode.apply(A,[aU]);A.appendChild(aT);});A._syncPaginatorUI(L);},expand:function(){var A=this;var L=A.get(aJ);var aV=A.get(aj);var aT=A.get(aM);var aU=A.get(aR);if(!L){A.set(aM,false);}if(!aV||aT){K.superclass.expand.apply(this,arguments);}else{if(!aU){if(!L){A.empty();}A.initIO();}}},initIO:function(){var L=this;var aT=L.get(aj);if(ax(aT.cfg.data)){aT.cfg.data=aT.cfg.data.apply(L,[L]);}L._syncPaginatorIOData(aT);if(ax(aT.loader)){var A=ac.bind(aT.loader,L);A(aT.url,aT.cfg,L);}else{ac.io(aT.url,aT.cfg);}},ioStartHandler:function(){var A=this;var L=A.get(u);A.set(aR,true);L.addClass(x);},ioCompleteHandler:function(){var A=this;var L=A.get(u);A.set(aR,false);A.set(aM,true);L.removeClass(x);},ioSuccessHandler:function(){var A=this;var aY=A.get(aj);var aT=Array.prototype.slice.call(arguments);var aV=aT.length;var L=aT[0];if(aV>=2){var aX=aT[1];try{L=ac.JSON.parse(aX.responseText);}catch(aW){}}var aU=aY.formatter;if(aU){L=aU(L);}A.createNode(L);A.expand();},ioFailureHandler:function(){var A=this;A.set(aR,false);A.set(aM,false);},_createEvents:function(){var A=this;A.publish(c,{defaultFn:A._defPaginatorClickFn,prefix:aq});},_defPaginatorClickFn:function(L){var A=this;var aT=A.get(ah);if(ad(aT.limit)){aT.start+=aT.limit;}if(A.get(aj)){A.initIO();}},_handlePaginatorClickEvent:function(aU){var A=this;var aT=A.get(X);var L=A.getEventOutputMap(A);A.fire(c,L);if(aT){aT.fire(c,L);}aU.halt();},_inheritOwnerTreeAttrs:function(){var L=this;var aT=L.get(X);if(aT){if(!L.get(aj)){L.set(aj,ac.clone(aT.get(aj)));}if(!L.get(ah)){var A=aT.get(ah);if(A&&A.element){A.element=A.element.clone();}L.set(ah,A);}}},_setIO:function(aT){var A=this;if(!aT){return null;}else{if(aI(aT)){aT={url:aT};}}aT=aT||{};aT.cfg=aT.cfg||{};aT.cfg.on=aT.cfg.on||{};var L={start:ac.bind(A.ioStartHandler,A),complete:ac.bind(A.ioCompleteHandler,A),success:ac.bind(A.ioSuccessHandler,A),failure:ac.bind(A.ioFailureHandler,A)};ac.each(L,function(aW,aU){var aX=aT.cfg.on[aU];if(ax(aX)){var aV=function(){aW.apply(A,arguments);aX.apply(A,arguments);};aT.cfg.on[aU]=ac.bind(aV,A);}else{aT.cfg.on[aU]=aW;}});return aT;},_syncPaginatorIOData:function(aU){var A=this;var aT=A.get(ah);if(aT&&ad(aT.limit)){var L=aU.cfg.data||{};L[aT.limitParam]=aT.limit;L[aT.startParam]=aT.start;L[aT.endParam]=(aT.start+aT.limit);aU.cfg.data=L;}},_syncPaginatorUI:function(L){var A=this;var aT=A.get(g);var aX=A.get(ah);if(aX){var aW=(L&&L.length);var aU=aW&&(aT.length>=aX.limit);if(aX.alwaysVisible||aU){A.get(a).append(aX.element.show());if(aX.autoFocus){try{aX.element.focus();}catch(aV){}}}else{aX.element.hide();}}}}});ac.TreeNodeIO=K;var l="checkbox",n="checked",Z="checkContainerEl",aF="checkEl",N="checkName",V=".",m="name",z="tree-node-check",ag=E(h,p,l),an=E(h,p,l,a),ap=E(h,p,n),Q='<div class="'+an+'"></div>',al='<input class="'+ag+'" type="checkbox" />';var aB=ac.Component.create({NAME:z,ATTRS:{checked:{value:false,validator:az},checkName:{value:z,validator:aI},checkContainerEl:{setter:ac.one,valueFn:function(){return ac.Node.create(Q);}},checkEl:{setter:ac.one,valueFn:function(){var A=this.get(N);return ac.Node.create(al).attr(m,A);}}},EXTENDS:ac.TreeNodeIO,prototype:{renderUI:function(){var L=this;aB.superclass.renderUI.apply(L,arguments);var aT=L.get(U);var A=L.get(aF);var aU=L.get(Z);A.hide();aU.append(A);aT.placeBefore(aU);if(L.isChecked()){L.check();}},bindUI:function(){var A=this;var L=A.get(u);var aT=A.get(U);aB.superclass.bindUI.apply(A,arguments);A.publish("check");A.publish("uncheck");L.delegate("click",ac.bind(A.toggleCheck,A),V+an);L.delegate("click",ac.bind(A.toggleCheck,A),V+k);aT.swallowEvent("dblclick");},check:function(){var L=this;var aT=L.get(u);var A=L.get(aF);aT.addClass(ap);L.set(n,true);A.attr(n,n);L.fire("check");},uncheck:function(){var L=this;var aT=L.get(u);var A=L.get(aF);aT.removeClass(ap);L.set(n,false);A.attr(n,O);L.fire("uncheck");},toggleCheck:function(){var L=this;var A=L.get(aF);var aT=A.attr(n);if(!aT){L.check();}else{L.uncheck();}},isChecked:function(){var A=this;return A.get(n);}}});ac.TreeNodeCheck=aB;var B="child",P="tree-node-task",J="unchecked",aG=function(A){return A instanceof ac.TreeNodeCheck;},ae=E(h,p,B,J);var aS=ac.Component.create({NAME:P,EXTENDS:ac.TreeNodeCheck,prototype:{check:function(aU){var L=this;var A=L.get(e);var aT=L.get(u);aS.superclass.check.apply(this,arguments);if(!aU){aT.removeClass(ae);L.eachParent(function(aV){if(aG(aV)){var aW=false;aV.check(true);aV.get(u).addClass(ae);aV.eachChildren(function(aX){if(aG(aX)&&!aX.isChecked()){aW=true;}},true);if(!aW){aV.get(u).removeClass(ae);}}});if(!L.isLeaf()){L.eachChildren(function(aV){if(aG(aV)){aV.check();}});}}},uncheck:function(){var A=this;var L=A.get(u);aS.superclass.uncheck.apply(this,arguments);L.removeClass(ae);A.eachParent(function(aT){if(aG(aT)&&aT.isChecked()){aT.get(u).addClass(ae);}});if(!A.isLeaf()){A.eachChildren(function(aT){if(aT instanceof ac.TreeNodeCheck){aT.uncheck();}});}}}});ac.TreeNodeTask=aS;ac.TreeNode.nodeTypes={task:ac.TreeNodeTask,check:ac.TreeNodeCheck,node:ac.TreeNode,io:ac.TreeNodeIO};},"@VERSION@",{requires:["aui-tree-data","io-base","json","querystring-stringify"],skinnable:false});
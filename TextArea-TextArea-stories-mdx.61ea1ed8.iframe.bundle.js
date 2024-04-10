"use strict";(self.webpackChunkreact_component_library=self.webpackChunkreact_component_library||[]).push([[786],{"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./src/TextArea/TextArea.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{alternativeSizes:function(){return alternativeSizes},default:function(){return TextArea_stories},defaultStory:function(){return defaultStory},inAGroup:function(){return inAGroup}});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Utils=__webpack_require__("./src/utils/Utils.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["fieldId","id","rows","disabled","error","readonly","width","value","onChange","classBlock","classModifiers","className"],TextArea_TextArea=function TextArea(_ref){var fieldId=_ref.fieldId,_ref$id=_ref.id,id=void 0===_ref$id?fieldId:_ref$id,_ref$rows=_ref.rows,rows=void 0===_ref$rows?4:_ref$rows,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,error=_ref.error,_ref$width=(_ref.readonly,_ref.width),width=void 0===_ref$width?"two-thirds":_ref$width,_ref$value=_ref.value,value=void 0===_ref$value?void 0:_ref$value,onChange=_ref.onChange,_ref$classBlock=_ref.classBlock,classBlock=void 0===_ref$classBlock?"text-area":_ref$classBlock,_ref$classModifiers=_ref.classModifiers,_classModifiers=void 0===_ref$classModifiers?[width]:_ref$classModifiers,className=_ref.className,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded),classModifiers=[].concat((0,toConsumableArray.Z)((0,Utils.qo)(_classModifiers)),[error&&"error"]),classes=(0,Utils.bE)(classBlock,classModifiers,className),cleanedAttrs=(0,Utils.fy)(attrs,Utils.dT.INPUT);return(0,jsx_runtime.jsx)("textarea",(0,objectSpread2.Z)((0,objectSpread2.Z)({},cleanedAttrs),{},{disabled:disabled,id:id,name:fieldId,rows:rows,value:value,onChange:onChange,className:classes()}))};TextArea_TextArea.displayName="TextArea";var src_TextArea_TextArea=TextArea_TextArea;try{TextArea_TextArea.displayName="TextArea",TextArea_TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{fieldId:{defaultValue:null,description:"",name:"fieldId",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},rows:{defaultValue:{value:"4"},description:"",name:"rows",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"two-thirds"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"one-third"'},{value:'"two-thirds"'},{value:'"half"'},{value:'"full"'}]}},value:{defaultValue:{value:"undefined"},description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLTextAreaElement>) => void)"}},classBlock:{defaultValue:{value:"text-area"},description:"",name:"classBlock",required:!1,type:{name:"string"}},classModifiers:{defaultValue:null,description:"",name:"classModifiers",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea_TextArea.__docgenInfo,name:"TextArea",path:"src/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}var src_TextArea=src_TextArea_TextArea,Group=__webpack_require__("./src/Group/index.ts"),BackToTop=__webpack_require__("./src/BackToTop/index.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{name:"TextArea",component:src_TextArea}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"textarea",children:"TextArea"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A ",(0,jsx_runtime.jsx)(_components.code,{children:"<TextArea/>"})," component is used when the user is required to enter more\nthan one line of text."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"full"})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"in-a-group",children:"In a Group"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A ",(0,jsx_runtime.jsx)(_components.code,{children:"<TextArea/>"})," can be rendered inside a ",(0,jsx_runtime.jsx)(_components.code,{children:"<Group>"})," in order to add a label,\nand optional ",(0,jsx_runtime.jsx)(_components.code,{children:"<Hint/>"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"<Error/>"})," messages."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"In a Group",children:(0,jsx_runtime.jsx)(Group.Z,{id:"text-area-in-grop",label:"Please provide further details",hint:"Please go into as much detail as possible",error:"This field is required",children:(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"full",error:!0})})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"alternative-sizes",children:"Alternative Sizes"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A TextArea will take up 100% of the width of its container by default.\nThis can be overridden by passing a value of\n",(0,jsx_runtime.jsx)(_components.code,{children:"'one-third' | 'two-thirds' | 'two-thirds' | 'half' | 'full'"})," to the ",(0,jsx_runtime.jsx)(_components.code,{children:"width"}),"\nprop."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Alternative Sizes",children:[(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"one-third"}),(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"half"}),(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"two-thirds"}),(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"full"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:src_TextArea}),"\n",(0,jsx_runtime.jsx)(BackToTop.Z,{})]})}const defaultStory=()=>(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"full"});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<TextArea id="text-area" width="full" />'}};const inAGroup=()=>(0,jsx_runtime.jsx)(Group.Z,{id:"text-area-in-grop",label:"Please provide further details",hint:"Please go into as much detail as possible",error:"This field is required",children:(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"full",error:!0})});inAGroup.storyName="In a Group",inAGroup.parameters={storySource:{source:'<Group id="text-area-in-grop" label="Please provide further details" hint="Please go into as much detail as possible" error="This field is required"><TextArea id="text-area" width="full" error /></Group>'}};const alternativeSizes=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"one-third"}),(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"half"}),(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"two-thirds"}),(0,jsx_runtime.jsx)(src_TextArea,{id:"text-area",width:"full"})]});alternativeSizes.storyName="Alternative Sizes",alternativeSizes.parameters={storySource:{source:'<TextArea id="text-area" width="one-third" />\n<TextArea id="text-area" width="half" />\n<TextArea id="text-area" width="two-thirds" />\n<TextArea id="text-area" width="full" />'}};const componentMeta={component:src_TextArea,tags:["stories-mdx"],includeStories:["defaultStory","inAGroup","alternativeSizes"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};var TextArea_stories=componentMeta},"./src/Error/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return src_Error}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Utils=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/utils/Utils.js")),Hidden=__webpack_require__("./src/Hidden/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","id","classBlock","classModifiers","className"],Error_Error=function Error(_ref){var children=_ref.children,_ref$classBlock=(_ref.id,_ref.classBlock),classBlock=void 0===_ref$classBlock?"error":_ref$classBlock,classModifiers=_ref.classModifiers,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded),classes=(0,Utils.bE)(classBlock,classModifiers,className);return(0,jsx_runtime.jsxs)("span",(0,objectSpread2.Z)((0,objectSpread2.Z)({},attrs),{},{className:classes(),children:[(0,jsx_runtime.jsx)(Hidden.Z,{children:"Error: "}),children]}))};Error_Error.displayName="Error";var src_Error_Error=Error_Error;try{Error_Error.displayName="Error",Error_Error.__docgenInfo={description:"",displayName:"Error",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classBlock:{defaultValue:{value:"error"},description:"",name:"classBlock",required:!1,type:{name:"string"}},classModifiers:{defaultValue:null,description:"",name:"classModifiers",required:!1,type:{name:"string | string[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Error/Error.tsx#Error"]={docgenInfo:Error_Error.__docgenInfo,name:"Error",path:"src/Error/Error.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}var src_Error=src_Error_Error},"./src/Group/Group.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZP:function(){return src_Group_Group}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),Label=__webpack_require__("./src/Label/index.ts"),Hint=__webpack_require__("./src/Hint/index.ts"),Error=__webpack_require__("./src/Error/index.ts"),Utils=__webpack_require__("./src/utils/Utils.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","fieldId","id","label","labelSize","hint","error","fieldset","classBlock","classModifiers","className"],Group_Group=function Group(_ref){var children=_ref.children,fieldId=_ref.fieldId,_ref$id=_ref.id,id=void 0===_ref$id?fieldId:_ref$id,label=_ref.label,labelSize=_ref.labelSize,hint=_ref.hint,error=_ref.error,_ref$fieldset=_ref.fieldset,fieldset=void 0!==_ref$fieldset&&_ref$fieldset,_ref$classBlock=_ref.classBlock,classBlock=void 0===_ref$classBlock?"group":_ref$classBlock,_ref$classModifiers=_ref.classModifiers,_classModifiers=void 0===_ref$classModifiers?[]:_ref$classModifiers,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded),classModifiers=[].concat((0,toConsumableArray.Z)((0,Utils.qo)(_classModifiers)),[error&&"error"]),classes=(0,Utils.bE)(classBlock,classModifiers,className),cleanedAttrs=(0,Utils.fy)(attrs);return(0,react.createElement)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},cleanedAttrs),{},{key:id,className:classes()}),fieldset&&(0,jsx_runtime.jsxs)("fieldset",{className:classes("fieldset"),children:[(0,jsx_runtime.jsx)("legend",{className:classes("legend"),children:(0,jsx_runtime.jsx)(Label.Z,{fieldId:id,size:labelSize,children:label})}),hint&&(0,jsx_runtime.jsx)(Hint.Z,{size:"s",children:hint}),error&&(0,jsx_runtime.jsx)(Error.Z,{id:"".concat(id,"-error"),children:error}),children]}),!fieldset&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Label.Z,{fieldId:id,size:labelSize,children:label}),hint&&(0,jsx_runtime.jsx)(Hint.Z,{size:"s",children:hint}),error&&(0,jsx_runtime.jsx)(Error.Z,{id:"".concat(id,"-error"),children:error}),children]}))};Group_Group.displayName="Group";var src_Group_Group=Group_Group;try{Group_Group.displayName="Group",Group_Group.__docgenInfo={description:"",displayName:"Group",props:{fieldId:{defaultValue:null,description:"",name:"fieldId",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},labelSize:{defaultValue:null,description:"",name:"labelSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'},{value:'"xl"'}]}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},fieldset:{defaultValue:{value:"false"},description:"",name:"fieldset",required:!1,type:{name:"boolean"}},classBlock:{defaultValue:{value:"group"},description:"",name:"classBlock",required:!1,type:{name:"string"}},classModifiers:{defaultValue:null,description:"",name:"classModifiers",required:!1,type:{name:"string[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Group/Group.tsx#Group"]={docgenInfo:Group_Group.__docgenInfo,name:"Group",path:"src/Group/Group.tsx#Group"})}catch(__react_docgen_typescript_loader_error){}},"./src/Group/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Group__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Group/Group.tsx");__webpack_exports__.Z=_Group__WEBPACK_IMPORTED_MODULE_0__.ZP},"./src/Hidden/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return src_Hidden}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Utils=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/utils/Utils.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","classBlock","classModifiers","className"],Hidden_Hidden=function Hidden(_ref){var children=_ref.children,_ref$classBlock=_ref.classBlock,classBlock=void 0===_ref$classBlock?"hidden":_ref$classBlock,_ref$classModifiers=_ref.classModifiers,classModifiers=void 0===_ref$classModifiers?[]:_ref$classModifiers,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded),classes=(0,Utils.bE)(classBlock,classModifiers,className);return(0,jsx_runtime.jsx)("span",(0,objectSpread2.Z)((0,objectSpread2.Z)({},attrs),{},{className:classes(),children:children}))};Hidden_Hidden.displayName="Hidden";var src_Hidden_Hidden=Hidden_Hidden;try{Hidden_Hidden.displayName="Hidden",Hidden_Hidden.__docgenInfo={description:"",displayName:"Hidden",props:{classBlock:{defaultValue:{value:"hidden"},description:"",name:"classBlock",required:!1,type:{name:"string"}},classModifiers:{defaultValue:{value:"[]"},description:"",name:"classModifiers",required:!1,type:{name:"string[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hidden/Hidden.tsx#Hidden"]={docgenInfo:Hidden_Hidden.__docgenInfo,name:"Hidden",path:"src/Hidden/Hidden.tsx#Hidden"})}catch(__react_docgen_typescript_loader_error){}var src_Hidden=src_Hidden_Hidden},"./src/Hint/Hint.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Qz:function(){return DEFAULT_CLASS},ZP:function(){return src_Hint_Hint}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Utils=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/utils/Utils.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","size","classBlock","classModifiers","className"],DEFAULT_CLASS="hint",Hint_Hint=function Hint(_ref){var children=_ref.children,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,_ref$classBlock=_ref.classBlock,classBlock=void 0===_ref$classBlock?DEFAULT_CLASS:_ref$classBlock,_ref$classModifiers=_ref.classModifiers,_classModifiers=void 0===_ref$classModifiers?[size]:_ref$classModifiers,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded),classes=(0,Utils.bE)(classBlock,_classModifiers,className),cleanedAttrs=(0,Utils.fy)(attrs);return(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},cleanedAttrs),{},{className:classes(),children:children}))};Hint_Hint.displayName="Hint";var src_Hint_Hint=Hint_Hint;try{Hint_Hint.displayName="Hint",Hint_Hint.__docgenInfo={description:"",displayName:"Hint",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},classBlock:{defaultValue:{value:"hint"},description:"",name:"classBlock",required:!1,type:{name:"string"}},classModifiers:{defaultValue:null,description:"",name:"classModifiers",required:!1,type:{name:"string[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hint/Hint.tsx#Hint"]={docgenInfo:Hint_Hint.__docgenInfo,name:"Hint",path:"src/Hint/Hint.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}},"./src/Hint/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Hint__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Hint/Hint.tsx");__webpack_exports__.Z=_Hint__WEBPACK_IMPORTED_MODULE_0__.ZP},"./src/Label/Label.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Qz:function(){return DEFAULT_CLASS},ZP:function(){return src_Label_Label}});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),Utils=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/utils/Utils.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DEFAULT_CLASS="label",Label_Label=function Label(_ref){var fieldId=_ref.fieldId,_ref$id=_ref.id,id=void 0===_ref$id?"".concat(fieldId,"--").concat(DEFAULT_CLASS):_ref$id,children=_ref.children,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,_ref$classBlock=_ref.classBlock,classBlock=void 0===_ref$classBlock?DEFAULT_CLASS:_ref$classBlock,_ref$classModifiers=_ref.classModifiers,_classModifiers=void 0===_ref$classModifiers?[size]:_ref$classModifiers,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,classModifiers=(0,toConsumableArray.Z)((0,Utils.qo)(_classModifiers)),classes=(0,Utils.bE)(classBlock,classModifiers,className);return(0,jsx_runtime.jsx)("label",{id:id,htmlFor:fieldId,className:classes(),children:children})};Label_Label.displayName="Label";var src_Label_Label=Label_Label;try{Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",displayName:"Label",props:{id:{defaultValue:{value:"`${fieldId}--${DEFAULT_CLASS}`"},description:"",name:"id",required:!1,type:{name:"string"}},fieldId:{defaultValue:null,description:"",name:"fieldId",required:!0,type:{name:"string"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'},{value:'"xl"'}]}},classBlock:{defaultValue:{value:"label"},description:"",name:"classBlock",required:!1,type:{name:"string"}},classModifiers:{defaultValue:null,description:"",name:"classModifiers",required:!1,type:{name:"string[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Label/Label.tsx#Label"]={docgenInfo:Label_Label.__docgenInfo,name:"Label",path:"src/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/Label/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Label__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Label/Label.tsx");__webpack_exports__.Z=_Label__WEBPACK_IMPORTED_MODULE_0__.ZP}}]);
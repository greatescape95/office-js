var oteljs=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u}));var i=n(3),r=n(4);function o(e,t){return{name:e,dataType:i.a.Boolean,value:t,classification:r.a.SystemMetadata}}function a(e,t){return{name:e,dataType:i.a.Int64,value:t,classification:r.a.SystemMetadata}}function c(e,t){return{name:e,dataType:i.a.Double,value:t,classification:r.a.SystemMetadata}}function s(e,t){return{name:e,dataType:i.a.String,value:t,classification:r.a.SystemMetadata}}function u(e,t){return{name:e,dataType:i.a.Guid,value:t,classification:r.a.SystemMetadata}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return s}));var i,r,o=new(n(9).a);function a(){return o}function c(e,t,n){o.fireEvent({level:e,category:t,message:n})}function s(e,t,n){c(i.Error,e,(function(){var e=n instanceof Error?n.message:"";return t+": "+e}))}!function(e){e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Info=2]="Info",e[e.Verbose=3]="Verbose"}(i||(i={})),function(e){e[e.Core=0]="Core",e[e.Sink=1]="Sink",e[e.Transport=2]="Transport"}(r||(r={}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0);function r(e,t,n){e.push(Object(i.e)("zC."+t,n))}},function(e,t,n){"use strict";var i;n.d(t,"a",(function(){return i})),function(e){e[e.String=0]="String",e[e.Boolean=1]="Boolean",e[e.Int64=2]="Int64",e[e.Double=3]="Double",e[e.Guid=4]="Guid"}(i||(i={}))},function(e,t,n){"use strict";var i;n.d(t,"a",(function(){return i})),function(e){e[e.EssentialServiceMetadata=1]="EssentialServiceMetadata",e[e.AccountData=2]="AccountData",e[e.SystemMetadata=4]="SystemMetadata",e[e.OrganizationIdentifiableInformation=8]="OrganizationIdentifiableInformation",e[e.EndUserIdentifiableInformation=16]="EndUserIdentifiableInformation",e[e.CustomerContent=32]="CustomerContent",e[e.AccessControl=64]="AccessControl"}(i||(i={}))},function(e,t,n){"use strict";var i,r,o,a,c;n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),function(e){e[e.NotSet=0]="NotSet",e[e.Measure=1]="Measure",e[e.Diagnostics=2]="Diagnostics",e[e.CriticalBusinessImpact=191]="CriticalBusinessImpact",e[e.CriticalCensus=192]="CriticalCensus",e[e.CriticalExperimentation=193]="CriticalExperimentation",e[e.CriticalUsage=194]="CriticalUsage"}(i||(i={})),function(e){e[e.NotSet=0]="NotSet",e[e.Normal=1]="Normal",e[e.High=2]="High"}(r||(r={})),function(e){e[e.NotSet=0]="NotSet",e[e.Normal=1]="Normal",e[e.High=2]="High"}(o||(o={})),function(e){e[e.NotSet=0]="NotSet",e[e.SoftwareSetup=1]="SoftwareSetup",e[e.ProductServiceUsage=2]="ProductServiceUsage",e[e.ProductServicePerformance=4]="ProductServicePerformance",e[e.DeviceConfiguration=8]="DeviceConfiguration",e[e.InkingTypingSpeech=16]="InkingTypingSpeech"}(a||(a={})),function(e){e[e.ReservedDoNotUse=0]="ReservedDoNotUse",e[e.BasicEvent=10]="BasicEvent",e[e.FullEvent=100]="FullEvent",e[e.NecessaryServiceDataEvent=110]="NecessaryServiceDataEvent",e[e.AlwaysOnNecessaryServiceDataEvent=120]="AlwaysOnNecessaryServiceDataEvent"}(c||(c={}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i,r,o,a,c,s,u,d,f,l=n(0),v=n(2);(i||(i={})).getFields=function(e,t){var n=[];return n.push(Object(l.d)(e+".Code",t.code)),void 0!==t.type&&n.push(Object(l.e)(e+".Type",t.type)),void 0!==t.tag&&n.push(Object(l.d)(e+".Tag",t.tag)),void 0!==t.isExpected&&n.push(Object(l.a)(e+".IsExpected",t.isExpected)),Object(v.a)(n,e,"Office.System.Result"),n},(o=r||(r={})).contractName="Office.System.Activity",o.getFields=function(e){var t=[];return void 0!==e.cV&&t.push(Object(l.e)("Activity.CV",e.cV)),t.push(Object(l.d)("Activity.Duration",e.duration)),t.push(Object(l.d)("Activity.Count",e.count)),t.push(Object(l.d)("Activity.AggMode",e.aggMode)),void 0!==e.success&&t.push(Object(l.a)("Activity.Success",e.success)),void 0!==e.result&&t.push.apply(t,i.getFields("Activity.Result",e.result)),Object(v.a)(t,"Activity",o.contractName),t},(a||(a={})).getFields=function(e,t){var n=[];return void 0!==t.id&&n.push(Object(l.e)(e+".Id",t.id)),void 0!==t.version&&n.push(Object(l.e)(e+".Version",t.version)),void 0!==t.sessionId&&n.push(Object(l.e)(e+".SessionId",t.sessionId)),Object(v.a)(n,e,"Office.System.Host"),n},(c||(c={})).getFields=function(e,t){var n=[];return void 0!==t.alias&&n.push(Object(l.e)(e+".Alias",t.alias)),void 0!==t.primaryIdentityHash&&n.push(Object(l.e)(e+".PrimaryIdentityHash",t.primaryIdentityHash)),void 0!==t.primaryIdentitySpace&&n.push(Object(l.e)(e+".PrimaryIdentitySpace",t.primaryIdentitySpace)),void 0!==t.tenantId&&n.push(Object(l.e)(e+".TenantId",t.tenantId)),void 0!==t.tenantGroup&&n.push(Object(l.e)(e+".TenantGroup",t.tenantGroup)),void 0!==t.isAnonymous&&n.push(Object(l.a)(e+".IsAnonymous",t.isAnonymous)),Object(v.a)(n,e,"Office.System.User"),n},(s||(s={})).getFields=function(e,t){var n=[];return void 0!==t.id&&n.push(Object(l.e)(e+".Id",t.id)),void 0!==t.version&&n.push(Object(l.e)(e+".Version",t.version)),void 0!==t.instanceId&&n.push(Object(l.e)(e+".InstanceId",t.instanceId)),void 0!==t.name&&n.push(Object(l.e)(e+".Name",t.name)),void 0!==t.marketplaceType&&n.push(Object(l.e)(e+".MarketplaceType",t.marketplaceType)),void 0!==t.sessionId&&n.push(Object(l.e)(e+".SessionId",t.sessionId)),void 0!==t.browserToken&&n.push(Object(l.e)(e+".BrowserToken",t.browserToken)),void 0!==t.osfRuntimeVersion&&n.push(Object(l.e)(e+".OsfRuntimeVersion",t.osfRuntimeVersion)),void 0!==t.officeJsVersion&&n.push(Object(l.e)(e+".OfficeJsVersion",t.officeJsVersion)),void 0!==t.hostJsVersion&&n.push(Object(l.e)(e+".HostJsVersion",t.hostJsVersion)),void 0!==t.assetId&&n.push(Object(l.e)(e+".AssetId",t.assetId)),void 0!==t.providerName&&n.push(Object(l.e)(e+".ProviderName",t.providerName)),void 0!==t.type&&n.push(Object(l.e)(e+".Type",t.type)),Object(v.a)(n,e,"Office.System.SDX"),n},(u||(u={})).getFields=function(e,t){var n=[];return void 0!==t.name&&n.push(Object(l.e)(e+".Name",t.name)),void 0!==t.state&&n.push(Object(l.e)(e+".State",t.state)),Object(v.a)(n,e,"Office.System.Funnel"),n},(d||(d={})).getFields=function(e,t){var n=[];return void 0!==t.id&&n.push(Object(l.d)(e+".Id",t.id)),void 0!==t.name&&n.push(Object(l.e)(e+".Name",t.name)),void 0!==t.commandSurface&&n.push(Object(l.e)(e+".CommandSurface",t.commandSurface)),void 0!==t.parentName&&n.push(Object(l.e)(e+".ParentName",t.parentName)),void 0!==t.triggerMethod&&n.push(Object(l.e)(e+".TriggerMethod",t.triggerMethod)),void 0!==t.timeOffsetMs&&n.push(Object(l.d)(e+".TimeOffsetMs",t.timeOffsetMs)),Object(v.a)(n,e,"Office.System.UserAction"),n},function(e){e.getFields=function(e,t){var n=[];return n.push(Object(l.e)(e+".ErrorGroup",t.errorGroup)),n.push(Object(l.d)(e+".Tag",t.tag)),void 0!==t.code&&n.push(Object(l.d)(e+".Code",t.code)),void 0!==t.id&&n.push(Object(l.d)(e+".Id",t.id)),void 0!==t.count&&n.push(Object(l.d)(e+".Count",t.count)),Object(v.a)(n,e,"Office.System.Error"),n}}(f||(f={}));var p,y=r,g=i,h=f,m=u,b=a,F=s,S=d,O=c;!function(e){!function(e){!function(e){e.Activity=y,e.Result=g,e.Error=h,e.Funnel=m,e.Host=b,e.SDX=F,e.User=O,e.UserAction=S}(e.System||(e.System={}))}(e.Office||(e.Office={}))}(p||(p={}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return l}));var i,r,o=n(1);!function(e){e[e.Aria=0]="Aria",e[e.Nexus=1]="Nexus"}(i||(i={})),function(e){var t={},n={},r={};function a(e){if("object"!=typeof e)throw new Error("tokenTree must be an object");r=function e(t,n){if("object"!=typeof n)return n;for(var i=0,r=Object.keys(n);i<r.length;i++){var o=r[i];o in t&&(t[o],1)?t[o]=e(t[o],n[o]):t[o]=n[o]}return t}(r,e)}function c(e){if(t[e])return t[e];var n=u(e,i.Aria);return"string"==typeof n?(t[e]=n,n):void 0}function s(e){if(n[e])return n[e];var t=u(e,i.Nexus);return"number"==typeof t?(n[e]=t,t):void 0}function u(e,t){var n=e.split("."),o=r,a=void 0;if(o){for(var c=0;c<n.length-1;c++)o[n[c]]&&(o=o[n[c]],t===i.Aria&&"string"==typeof o.ariaTenantToken?a=o.ariaTenantToken:t===i.Nexus&&"number"==typeof o.nexusTenantToken&&(a=o.nexusTenantToken));return a}}e.setTenantToken=function(e,t,n){var i=e.split(".");if(i.length<2||"Office"!==i[0])Object(o.d)(o.b.Error,o.a.Core,(function(){return"Invalid namespace: "+e}));else{var r=Object.create(Object.prototype);t&&(r.ariaTenantToken=t),n&&(r.nexusTenantToken=n);var c,s=r;for(c=i.length-1;c>=0;--c){var u=Object.create(Object.prototype);u[i[c]]=s,s=u}a(s)}},e.setTenantTokens=a,e.getTenantTokens=function(e){var t=c(e),n=s(e);if(!n||!t)throw new Error("Could not find tenant token for "+e);return{ariaTenantToken:t,nexusTenantToken:n}},e.getAriaTenantToken=c,e.getNexusTenantToken=s,e.clear=function(){t={},n={},r={}}}(r||(r={}));var a,c=n(3);!function(e){var t=/^[A-Z][a-zA-Z0-9]*$/,n=/^[a-zA-Z0-9_\.]*$/;function i(e){return void 0!==e&&n.test(e)}function r(e){if(!((t=e.name)&&i(t)&&t.length+5<100))throw new Error("Invalid dataField name");var t;e.dataType===c.a.Int64&&o(e.value)}function o(e){if("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e<-9007199254740991||e>9007199254740991)throw new Error("Invalid integer "+JSON.stringify(e))}e.validateTelemetryEvent=function(e){if(!function(e){if(!e||e.length>98)return!1;var n=e.split("."),i=n[n.length-1];return function(e){return!!e&&e.length>=3&&"Office"===e[0]}(n)&&(r=i,void 0!==r&&t.test(r));var r}(e.eventName))throw new Error("Invalid eventName");if(e.eventContract&&!i(e.eventContract.name))throw new Error("Invalid eventContract");if(null!=e.dataFields)for(var n=0;n<e.dataFields.length;n++)r(e.dataFields[n])},e.validateInt=o}(a||(a={}));var s=n(9),u=n(0),d=function(){return(d=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},f=-1,l=function(){function e(e,t,n){var i,r;this.onSendEvent=new s.a,this.persistentDataFields=[],this.config=n||{},e?(this.onSendEvent=e.onSendEvent,(i=this.persistentDataFields).push.apply(i,e.persistentDataFields),this.config=d(d({},e.getConfig()),this.config)):this.persistentDataFields.push(Object(u.e)("OTelJS.Version","3.1.49")),t&&(r=this.persistentDataFields).push.apply(r,t)}return e.prototype.sendTelemetryEvent=function(e){var t;try{if(0===this.onSendEvent.getListenerCount())return void Object(o.d)(o.b.Warning,o.a.Core,(function(){return"No telemetry sinks are attached."}));t=this.cloneEvent(e),this.processTelemetryEvent(t)}catch(e){return void Object(o.c)(o.a.Core,"SendTelemetryEvent",e)}try{this.onSendEvent.fireEvent(t)}catch(e){}},e.prototype.processTelemetryEvent=function(e){var t;e.telemetryProperties||(e.telemetryProperties=r.getTenantTokens(e.eventName)),e.dataFields&&this.persistentDataFields&&(t=e.dataFields).unshift.apply(t,this.persistentDataFields),this.config.disableValidation||a.validateTelemetryEvent(e)},e.prototype.addSink=function(e){this.onSendEvent.addListener((function(t){return e.sendTelemetryEvent(t)}))},e.prototype.setTenantToken=function(e,t,n){r.setTenantToken(e,t,n)},e.prototype.setTenantTokens=function(e){r.setTenantTokens(e)},e.prototype.cloneEvent=function(e){var t={eventName:e.eventName,eventFlags:e.eventFlags};return e.telemetryProperties&&(t.telemetryProperties={ariaTenantToken:e.telemetryProperties.ariaTenantToken,nexusTenantToken:e.telemetryProperties.nexusTenantToken}),e.eventContract&&(t.eventContract={name:e.eventContract.name,dataFields:e.eventContract.dataFields.slice()}),t.dataFields=e.dataFields?e.dataFields.slice():[],t},e.prototype.getConfig=function(){return this.config},e}()},function(e,t,n){"use strict";var i;n.d(t,"a",(function(){return s})),function(e){var t,n=0;e.getNext=function(){return void 0===t&&(t=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=[],n=0;n<22;n++)t.push(e.charAt(Math.floor(Math.random()*e.length)));return t.join("")}()),new i(t,++n)},e.getNextChild=function(e){return new i(e.getString(),++e.nextChild)};var i=function(){function e(e,t){this.base=e,this.id=t,this.nextChild=0}return e.prototype.getString=function(){return this.base+"."+this.id},e}();e.CV=i}(i||(i={}));var r=n(1),o=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))},a=function(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},c=function(){return 1e3*Date.now()};"object"==typeof window.performance&&"now"in window.performance&&(c=function(){return 1e3*Math.floor(window.performance.now())});var s=function(){function e(e,t,n){this._optionalEventFlags={},this._ended=!1,this._telemetryLogger=e,this._activityName=t,this._cv=n?i.getNextChild(n._cv):i.getNext(),this._dataFields=[],this._success=void 0,this._startTime=c()}return e.createNew=function(t,n){return new e(t,n)},e.prototype.createChildActivity=function(t){return new e(this._telemetryLogger,t,this)},e.prototype.setEventFlags=function(e){this._optionalEventFlags=e},e.prototype.addDataField=function(e){this._dataFields.push(e)},e.prototype.addDataFields=function(e){var t;(t=this._dataFields).push.apply(t,e)},e.prototype.setSuccess=function(e){this._success=e},e.prototype.setResult=function(e,t,n){this._result={code:e,type:t,tag:n}},e.prototype.endNow=function(){if(!this._ended){void 0===this._success&&void 0===this._result&&Object(r.d)(r.b.Warning,r.a.Core,(function(){return"Activity does not have success or result set"}));var e=c()-this._startTime;this._ended=!0;var t={duration:e,count:1,aggMode:0,cV:this._cv.getString(),success:this._success,result:this._result};return this._telemetryLogger.sendActivity(this._activityName,t,this._dataFields,this._optionalEventFlags)}Object(r.d)(r.b.Error,r.a.Core,(function(){return"Activity has already ended"}))},e.prototype.executeAsync=function(e){return o(this,void 0,void 0,(function(){var t=this;return a(this,(function(n){return[2,e(this).then((function(e){return t.endNow(),e})).catch((function(e){throw t.endNow(),e}))]}))}))},e.prototype.executeSync=function(e){try{var t=e(this);return this.endNow(),t}catch(e){throw this.endNow(),e}},e.prototype.executeChildActivityAsync=function(e,t){return o(this,void 0,void 0,(function(){return a(this,(function(n){return[2,this.createChildActivity(e).executeAsync(t)]}))}))},e.prototype.executeChildActivitySync=function(e,t){return this.createChildActivity(e).executeSync(t)},e}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(){function e(){this._listeners=[]}return e.prototype.fireEvent=function(e){this._listeners.forEach((function(t){return t(e)}))},e.prototype.addListener=function(e){e&&this._listeners.push(e)},e.prototype.removeListener=function(e){this._listeners=this._listeners.filter((function(t){return t!==e}))},e.prototype.getListenerCount=function(){return this._listeners.length},e}()},function(e,t,n){"use strict";n.r(t);var i=n(6);n.d(t,"Contracts",(function(){return i.a}));var r=n(8);n.d(t,"ActivityScope",(function(){return r.a}));var o=n(2);n.d(t,"addContractField",(function(){return o.a}));var a=n(11);n.d(t,"getFieldsForContract",(function(){return a.a}));var c=n(4);n.d(t,"DataClassification",(function(){return c.a}));var s=n(12);for(var u in s)["Contracts","ActivityScope","addContractField","getFieldsForContract","DataClassification","default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(u);var d=n(0);n.d(t,"makeBooleanDataField",(function(){return d.a})),n.d(t,"makeInt64DataField",(function(){return d.d})),n.d(t,"makeDoubleDataField",(function(){return d.b})),n.d(t,"makeStringDataField",(function(){return d.e})),n.d(t,"makeGuidDataField",(function(){return d.c}));var f=n(3);n.d(t,"DataFieldType",(function(){return f.a}));var l=n(13);n.d(t,"getEffectiveEventFlags",(function(){return l.a}));var v=n(5);n.d(t,"SamplingPolicy",(function(){return v.e})),n.d(t,"PersistencePriority",(function(){return v.d})),n.d(t,"CostPriority",(function(){return v.a})),n.d(t,"DataCategories",(function(){return v.b})),n.d(t,"DiagnosticLevel",(function(){return v.c}));var p=n(14);for(var u in p)["Contracts","ActivityScope","addContractField","getFieldsForContract","DataClassification","makeBooleanDataField","makeInt64DataField","makeDoubleDataField","makeStringDataField","makeGuidDataField","DataFieldType","getEffectiveEventFlags","SamplingPolicy","PersistencePriority","CostPriority","DataCategories","DiagnosticLevel","default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return p[e]}))}(u);var y=n(1);n.d(t,"LogLevel",(function(){return y.b})),n.d(t,"Category",(function(){return y.a})),n.d(t,"onNotification",(function(){return y.e})),n.d(t,"logNotification",(function(){return y.d})),n.d(t,"logError",(function(){return y.c}));var g=n(7);n.d(t,"SuppressNexus",(function(){return g.b})),n.d(t,"SimpleTelemetryLogger",(function(){return g.a}));var h=n(15);n.d(t,"TelemetryLogger",(function(){return h.a}));var m=n(16);for(var u in m)["Contracts","ActivityScope","addContractField","getFieldsForContract","DataClassification","makeBooleanDataField","makeInt64DataField","makeDoubleDataField","makeStringDataField","makeGuidDataField","DataFieldType","getEffectiveEventFlags","SamplingPolicy","PersistencePriority","CostPriority","DataCategories","DiagnosticLevel","LogLevel","Category","onNotification","logNotification","logError","SuppressNexus","SimpleTelemetryLogger","TelemetryLogger","default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return m[e]}))}(u);var b=n(17);for(var u in b)["Contracts","ActivityScope","addContractField","getFieldsForContract","DataClassification","makeBooleanDataField","makeInt64DataField","makeDoubleDataField","makeStringDataField","makeGuidDataField","DataFieldType","getEffectiveEventFlags","SamplingPolicy","PersistencePriority","CostPriority","DataCategories","DiagnosticLevel","LogLevel","Category","onNotification","logNotification","logError","SuppressNexus","SimpleTelemetryLogger","TelemetryLogger","default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return b[e]}))}(u);var F=n(18);for(var u in F)["Contracts","ActivityScope","addContractField","getFieldsForContract","DataClassification","makeBooleanDataField","makeInt64DataField","makeDoubleDataField","makeStringDataField","makeGuidDataField","DataFieldType","getEffectiveEventFlags","SamplingPolicy","PersistencePriority","CostPriority","DataCategories","DiagnosticLevel","LogLevel","Category","onNotification","logNotification","logError","SuppressNexus","SimpleTelemetryLogger","TelemetryLogger","default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return F[e]}))}(u)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(2);function r(e,t,n){var r=n.map((function(t){return{name:e+"."+t.name,value:t.value,dataType:t.dataType}}));return Object(i.a)(r,e,t),r}},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(5),r=n(1);function o(e){var t={costPriority:i.a.Normal,samplingPolicy:i.e.Measure,persistencePriority:i.d.Normal,dataCategories:i.b.NotSet,diagnosticLevel:i.c.FullEvent};return e.eventFlags&&e.eventFlags.dataCategories||Object(r.d)(r.b.Error,r.a.Core,(function(){return"Event is missing DataCategories event flag"})),e.eventFlags?(e.eventFlags.costPriority&&(t.costPriority=e.eventFlags.costPriority),e.eventFlags.samplingPolicy&&(t.samplingPolicy=e.eventFlags.samplingPolicy),e.eventFlags.persistencePriority&&(t.persistencePriority=e.eventFlags.persistencePriority),e.eventFlags.dataCategories&&(t.dataCategories=e.eventFlags.dataCategories),e.eventFlags.diagnosticLevel&&(t.diagnosticLevel=e.eventFlags.diagnosticLevel),t):t}},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i,r=n(7),o=n(8),a=n(6),c=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))},u=function(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.executeActivityAsync=function(e,t){return s(this,void 0,void 0,(function(){return u(this,(function(n){return[2,this.createNewActivity(e).executeAsync(t)]}))}))},t.prototype.executeActivitySync=function(e,t){return this.createNewActivity(e).executeSync(t)},t.prototype.createNewActivity=function(e){return o.a.createNew(this,e)},t.prototype.sendActivity=function(e,t,n,i){return this.sendTelemetryEvent({eventName:e,eventContract:{name:a.a.Office.System.Activity.contractName,dataFields:a.a.Office.System.Activity.getFields(t)},dataFields:n,eventFlags:i})},t.prototype.sendError=function(e){var t=a.a.Office.System.Error.getFields("Error",e.error);return null!=e.dataFields&&t.push.apply(t,e.dataFields),this.sendTelemetryEvent({eventName:e.eventName,dataFields:t,eventFlags:e.eventFlags})},t}(r.a)},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){e.exports=n(10)}]);
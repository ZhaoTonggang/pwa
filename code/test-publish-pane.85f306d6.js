import{w as J,y as U,z as K,C as z,D as ve,E as le,F as v,t as l,n as k,e as $,s as R,i as h,a as ee,x as n,G as u,g as N,H,r as p,A as c,I as w,c as de,l as ce,m as pe,J as P,o as ye}from"./index.096edba8.js";import"./arrow-link.b865ef08.js";const ke=/[^a-zA-Z0-9_]/g,G=2097152;function ue(e){const t=e.split(".").reverse().map(i=>i.trim().toLowerCase()).map(i=>xe(i)).filter(i=>i.length>0).map(i=>i.replace(ke,"_"));return t.push("twa"),t.join(".")}function he(e){const t=[];return e||t.push({field:"packageId",error:"No package ID"}),e&&e.search(/[^a-zA-Z0-9-_.]/)!==-1&&t.push({field:"packageId",error:"Package ID must not contain any character other than alphanumeric, period, hyphen, and underscore."}),e&&(e.includes(".if.")||e.startsWith("if.")||(e==null?void 0:e.endsWith(".if")))&&t.push({field:"packageId",error:'Package ID must not contain ".if.", must not start with "if.", and must not end with ".if"'}),t}function we(e){const t=[];if(!e)return t.push({field:null,error:"No options specified "}),t;if(t.push(...he(e==null?void 0:e.packageId)),(!e.name||e.name.trim().length===0)&&t.push({field:"name",error:"Must have a valid app name"}),e.name&&(e.name.length<3||e.name.length>50)&&t.push({field:"name",error:"Name must be between 3 and 50 characters in length"}),e.launcherName&&(e.launcherName.length<3||e.launcherName.length>30)&&t.push({field:"launcherName",error:"Launcher name must be between 3 and 30 characters in length"}),(!e.appVersion||e.appVersion.trim().length===0)&&t.push({field:"appVersion",error:"Must have a valid app version"}),(!e.appVersionCode||e.appVersionCode>21e8)&&t.push({field:"appVersionCode",error:"App version code must be between 1 and 2,100,000,000"}),e.backgroundColor||t.push({field:"backgroundColor",error:"Must have a background color"}),e.display!=="standalone"&&e.display!=="fullscreen"&&e.display!=="fullscreen-sticky"&&t.push({field:"display",error:"Display must be 'standalone' or 'fullscreen'"}),e.fallbackType!=="customtabs"&&e.fallbackType!=="webview"&&t.push({field:"fallbackType",error:"Fallback type must be 'customtabs' or 'webview'"}),!e.host)t.push({field:"host",error:"Host must be specified"});else{const i=e.host.startsWith("https")?e.host:`https://${e.host}`;L(i)&&t.push({field:"host",error:"Host URL must be a valid URL"})}if(e.iconUrl?L(e.iconUrl,e.webManifestUrl)&&t.push({field:"iconUrl",error:"Icon URL is invalid"}):t.push({field:"iconUrl",error:"Must have a icon URL"}),(!e.launcherName||e.launcherName.trim().length===0)&&t.push({field:"launcherName",error:"Must have an app launcher name"}),e.webManifestUrl?L(e.webManifestUrl)&&t.push({field:"webManifestUrl",error:"Manifest URL is invalid"}):t.push({field:"webManifestUrl",error:"Must have a manifest URL"}),e.maskableIconUrl&&L(e.maskableIconUrl,e.webManifestUrl)&&t.push({field:"maskableIconUrl",error:"Maskable icon URL was invalid. If you specify a maskable icon URL, it must be a valid URL."}),e.monochromeIconUrl&&L(e.monochromeIconUrl,e.webManifestUrl)&&t.push({field:"monochromeIconUrl",error:"Monochrome icon URL was invalid. If you specify a monochrome icon URL, it must be a valid URL."}),e.navigationColor||t.push({field:"navigationColor",error:"Navigation color is required"}),e.signingMode==="mine"||e.signingMode==="new")if(!e.signing)t.push({field:"signing",error:"Signing information must be supplied."});else{const i=["alias"];e.signingMode==="mine"?i.push("file","keyPassword","storePassword"):e.signingMode==="new"&&i.push("fullName","organization","organizationalUnit","countryCode"),i.filter(o=>!e.signing[o]).forEach(o=>t.push({field:o,error:`${o.toString()} must be specified`})),e.signing.keyPassword&&e.signing.keyPassword.length<6&&t.push({field:"keyPassword",error:"Key password must be at least 6 characters"}),e.signing.storePassword&&e.signing.storePassword.length<6&&t.push({field:"storePassword",error:"Key store password must be at least 6 characters"}),e.signingMode==="new"&&e.signing.countryCode&&e.signing.countryCode.length!==2&&t.push({field:"countryCode",error:"Signing key country code must be 2 letters"})}return(e.splashScreenFadeOutDuration===null||e.splashScreenFadeOutDuration===void 0||e.splashScreenFadeOutDuration<0)&&t.push({field:"splashScreenFadeOutDuration",error:"Splash screen fade duration must be 0 or greater"}),e.startUrl?L(e.startUrl,e.webManifestUrl)&&t.push({field:"startUrl",error:"Start URL is invalid"}):t.push({field:"startUrl",error:"Start URL must be specified. If your start URL is the same as Host, you can use '/' as the start URL."}),e.themeColor||t.push({field:"themeColor",error:"Theme color must be specified"}),t}function L(e,t){try{return new URL(e,t),null}catch(i){return`${i}`}}function xe(e){return e.length===0?"app":e&&e.length&&e[0].match(/^\d/)?`app_${e}`:e}async function ge(e){const t=we(e);if(t.length>0||!e)throw new Error("Invalid Android options. "+t.map(r=>r.error).join(`
`));let i={...K(),"content-type":"application/json"};const o=sessionStorage.getItem("ref"),a=`${z.androidPackageGeneratorUrl}/generateAppPackage${o?"?ref="+encodeURIComponent(o):""}`,s=await fetch(a,{method:"POST",body:JSON.stringify(e),headers:new Headers(i)});if(s.status===200)return await s.blob();{const r=await s.text(),d=e.iconUrl&&e.iconUrl.includes(z.safeUrlFetcher||""),S=(r||"").includes("ECONNREFUSED")||s.status===403;if(!d&&S){console.warn("Android package generation failed with ECONNREFUSED. Retrying with safe images.",r);const m=Pe(e);await ge(m)}else{let m=new Error(`Error generating Android package.
Status code: ${s.status}
Error: ${s.statusText}
Details: ${r}`);throw Object.defineProperty(s,"stack_trace",{value:r}),m.response=s,m}}}function Oe(){return{appVersion:"1.0.0.0",appVersionCode:1,backgroundColor:"#ffffff",display:"standalone",enableNotifications:!1,enableSiteSettingsShortcut:!0,fallbackType:"customtabs",features:{locationDelegation:{enabled:!1},playBilling:{enabled:!1}},host:"",iconUrl:"",includeSourceCode:!1,isChromeOSOnly:!1,isMetaQuest:!1,launcherName:"",maskableIconUrl:"",monochromeIconUrl:"",name:"",navigationColor:"#ffffff",navigationColorDark:"#000000",navigationDividerColor:"#ffffff",navigationDividerColorDark:"#000000",orientation:"default",packageId:"",pwaUrl:"",shortcuts:[],signing:{file:null,alias:"",fullName:"",organization:"",organizationalUnit:"",countryCode:"",keyPassword:"",storePassword:""},signingMode:"none",splashScreenFadeOutDuration:300,startUrl:"",themeColor:"#ffffff",themeColorDark:"#000000",webManifestUrl:"",fullScopeUrl:""}}function ne(e){var oe;const t=e.manifestUrl,i=e.siteUrl,o=e.manifest;if(!i)throw new Error("Can't find the current URL");if(!t)throw new Error("Cant find the manifest URL");const a=o.short_name||o.name||"My PWA",s=ue(new URL(i).hostname),r=o.display==="fullscreen"?"fullscreen":"standalone",d=o.icons||[],S=J(d);if(!S)throw new Error("Can't find a suitable icon to use for the Android package. Ensure your manifest has a square, large (512x512 or better) PNG icon.");const m=U(d,"maskable",512,512,"image/png")||U(d,"maskable",192,192,"image/png")||U(d,"maskable",192,192,void 0),B=U(d,"monochrome",512,512,"image/png")||U(d,"monochrome",192,192,"image/png")||U(d,"monochrome",192,192,void 0),q=o.theme_color||o.background_color||"#000000",T=t.startsWith("data:application/manifest+json,")?i:t,be=new URL(o.scope||".",T).toString(),ie=o.share_target;if(ie){const ae=(oe=ie.params)==null?void 0:oe.files;let se=[];if(ae)for(const Q of ae)Q.accept&&(Q.accept.forEach(re=>{re.startsWith(".")===!1&&se.push(re)}),Q.accept=se)}return{appVersion:"1.0.0.0",appVersionCode:1,backgroundColor:o.background_color||o.theme_color||"#FFFFFF",display:r,enableNotifications:!0,enableSiteSettingsShortcut:!0,fallbackType:"customtabs",features:{locationDelegation:{enabled:!1},playBilling:{enabled:!1}},host:new URL(i).host,iconUrl:X(S.src,T),includeSourceCode:!1,isChromeOSOnly:!1,isMetaQuest:!1,launcherName:(o.short_name||a||"My PWA").substring(0,30),maskableIconUrl:X(m==null?void 0:m.src,T),monochromeIconUrl:X(B==null?void 0:B.src,T),name:a,navigationColor:q,navigationColorDark:q,navigationDividerColor:q,navigationDividerColorDark:q,orientation:o.orientation||"default",packageId:s,shortcuts:o.shortcuts||[],signing:{file:null,alias:"my-key-alias",fullName:`${o.short_name||o.name||"App"} Admin`,organization:o.name||"PWABuilder",organizationalUnit:"Engineering",countryCode:"US",keyPassword:"",storePassword:""},signingMode:"new",splashScreenFadeOutDuration:300,startUrl:$e(o.start_url,new URL(T)),themeColor:o.theme_color||"#FFFFFF",themeColorDark:o.theme_color||"#000000",shareTarget:o.share_target,webManifestUrl:t,pwaUrl:e.siteUrl,fullScopeUrl:be}}function X(e,t){return e?new URL(e,t).toString():""}function $e(e,t){const i=new URL(e||"/",t);return i.pathname+(i.search||"")}function Pe(e){const t=["maskableIconUrl","monochromeIconUrl","iconUrl","webManifestUrl"];for(const i of t){const o=e[i];if(o&&typeof o=="string"){const a=`${{}.safeUrlFetcher}?url=${encodeURIComponent(o)}`;e[i]=a}}return e}function Ce(e){return e.split(".").reverse().map(i=>i.trim().toLowerCase()).filter(i=>i.length>0).join(".")}function Se(e){const t=[];e.bundleId||t.push("Bundle ID required"),e.bundleId.length<3&&t.push("Bundle ID must be at least 3 characters in length"),e.bundleId.includes("*")&&t.push("Bundle ID cannot contain asterisk"),e.imageUrl||t.push("Image URL required"),e.manifest||t.push("Manifest required"),e.manifestUrl||t.push("Manifest URL required"),e.name||t.push("Name required"),e.name.length<3&&t.push("Name must be at least 3 characters in length"),e.progressBarColor||t.push("Progress bar color required"),e.splashColor||t.push("Splash color required"),e.statusBarColor||t.push("Status bar color required"),e.url||t.push("URL required");try{new URL(e.url)}catch{t.push("URL must be a valid, absolute URL")}return t}async function Ie(e){const t=Se(e);if(t.length>0)throw new Error("Invalid iOS app package options. "+t.join(`
`));let i={...K(),"content-type":"application/json"};const o=sessionStorage.getItem("ref"),a=`${z.iosPackageGeneratorUrl}${o?"?ref="+encodeURIComponent(o):""}`,s=await fetch(a,{method:"POST",body:JSON.stringify(e),headers:new Headers(i)});if(!s.ok){const r=await s.text();let d=new Error(`Error generating iOS package.
Status code: ${s.status}
Error: ${s.statusText}
Details: ${r}`);throw Object.defineProperty(s,"stack_trace",{value:r}),d.response=s,d}return await s.blob()}function _e(e){var i;const t=[e.siteUrl,e.manifestUrl].map(o=>Le(o)).find(o=>!!o)||"";return{name:e.manifest.short_name||e.manifest.name||"My PWA",bundleId:Ce(t),url:new URL(e.manifest.start_url||"/",e.manifestUrl).toString(),imageUrl:((i=J(e.manifest.icons))==null?void 0:i.src)||"",splashColor:e.manifest.background_color||"#ffffff",progressBarColor:e.manifest.theme_color||"#000000",statusBarColor:e.manifest.theme_color||e.manifest.background_color||"#ffffff",permittedUrls:[],manifestUrl:e.manifestUrl,manifest:e.manifest}}function Ue(){return{name:"",bundleId:"",url:"",imageUrl:"",splashColor:"#ffffff",progressBarColor:"#000000",statusBarColor:"#ffffff",permittedUrls:[],manifestUrl:"",manifest:{}}}function Le(e){try{return new URL(e).host}catch(t){return console.warn("Unable to parse host URL due to error",e,t),null}}var b=(e=>(e[e.None=0]="None",e[e.New=1]="New",e[e.Existing=2]="Existing",e))(b||{});function Fe(e){const t=[];if(!e)return t.push("No Oculus package options supplied"),t;he(e.packageId).forEach(i=>t.push(i.error)),e.name?(e.name.length<3||e.name.length>50)&&t.push("Name must be between 3 and 50 characters in length"):t.push("Name required"),(!e.versionCode||e.versionCode<=0)&&t.push("Version code must be greater than zero"),e.versionName||t.push("Version name required"),e.manifest||t.push("Manifest required"),e.manifestUrl||t.push("Manifest URL required");try{new URL(e.manifestUrl)}catch{t.push("Manifest URL must be a valid, absolute URL")}try{new URL(e.url)}catch{t.push("Url must be a valid, absolute URL")}return e.signingMode===2&&(e.existingSigningKey?(e.existingSigningKey.storePassword||t.push("Store password required when using existing signing key"),e.existingSigningKey.password||t.push("Key password required when using existing signing key"),e.existingSigningKey.alias||t.push("Key alias required when using existing signing key")):t.push("Existing signing key required when SigningMode === SigningMode.Existing")),t}async function Ae(e){const t=Fe(e);if(t.length>0)throw new Error("Invalid Oculus app package options. "+t.join(`
`));let i={...K(),"content-type":"application/json"};const o=sessionStorage.getItem("ref"),a=`${z.oculusPackageGeneratorUrl}${o?"?ref="+encodeURIComponent(o):""}`,s=await fetch(a,{method:"POST",body:JSON.stringify(e),headers:new Headers(i)});if(!s.ok){const r=await s.text();let d=new Error(`Error generating Oculus package.
Status code: ${s.status}
Error: ${s.statusText}
Details: ${r}`);throw Object.defineProperty(s,"stack_trace",{value:r}),d.response=s,d}return await s.blob()}function Me(e){return{name:e.manifest.short_name||e.manifest.name||"My PWA",packageId:ue(new URL(e.siteUrl).host),manifestUrl:e.manifestUrl,manifest:e.manifest,versionCode:1,versionName:"1.0.0.0",existingSigningKey:null,signingMode:b.New,url:e.siteUrl}}function Ee(){return{name:"",packageId:"",manifestUrl:"",manifest:{},versionCode:1,versionName:"1.0.0.0",existingSigningKey:null,signingMode:b.New,url:""}}function Te(){return{keyStoreFile:"",storePassword:"",alias:"",password:""}}const ze=/[^a-zA-Z0-9_]/g;function De(e){const t=e.split(".").reverse().map(i=>i.trim().toLowerCase()).filter(i=>i.length>0).map(i=>i.replace(ze,"-"));return t.push("edge"),t.join(".").slice(0,50)}function Re(e){const t=[];if(!e)return t.push({field:null,error:"No options specified "}),t;e.packageId||t.push({field:"packageId",error:"No package ID"}),!e.name||e.name.trim().length===0?t.push({field:"name",error:"App name required"}):e.name.trim().length>=256&&t.push({field:"name",error:"App name must be less than 256 characters"});const i=(e.version||"").trim();if(!e.classicPackage)t.push({field:"classicPackage",error:"Must have classic package information"});else{const o=(e.classicPackage.version||"").trim();!i||!o?t.push({field:"version",error:"Must have an app version and a classic package version"}):t.push(...Ne(i,o))}return e.publisher?(e.publisher.commonName||t.push({field:"commonName",error:"Publisher ID required."}),e.publisher.displayName||t.push({field:"displayName",error:"Publisher display name required."})):t.push({field:"publisher",error:"Publisher information required."}),e.url?ve(e.url)&&t.push({field:"url",error:"URL is invalid"}):t.push({field:"url",error:"Start URL must be specified. If your start URL is the same as Host, you can use '/' as the start URL."}),t}function Ne(e,t){const i=[],o=e.split(".").map(Number),a=t.split(".").map(Number);let s=null;const r=[{name:"version",label:"Version",value:e},{name:"classicPackage",label:"Classic version",value:t}];for(const S of r)i.push(...He(S));for(var d=0;d<o.length;d++){if(o[d]<a[d]){s=!1;break}if(o[d]>a[d]){s=!0;break}}return d==o.length&&(s=!1),s||i.push({field:"version",error:"App version must be greater than classic package version"}),i}function He(e){const t=[],i=e.value?e.value.split("."):[];i.length!==3&&t.push({field:e.name,error:`${e.label} must have 3 segments: 1.0.0.`}),i.some(a=>!a.match(/^(0|[1-9][0-9]*)$/))&&t.push({field:e.name,error:`${e.label} must only contain integers separated by periods.`});const o=i.map(a=>parseInt(a));return o&&o.length>0&&o[0]<=0&&t.push({field:e.name,error:`${e.label} must start with an integer >= 1.`}),t}async function We(e){if(!e)throw new Error("Invalid Windows options. No options specified.");!e.resourceLanguage||e.resourceLanguage.length===0?e.resourceLanguage="en-us":typeof e.resourceLanguage!="string"&&(e.resourceLanguage=e.resourceLanguage.join(","));const t=Re(e);if(t.length>0||!e)throw new Error("Invalid Windows options. "+t.map(s=>s.error).join(`
`));let i={...K(),"content-type":"application/json"};const o=sessionStorage.getItem("ref"),a=await fetch(`${z.windowsPackageGeneratorUrl}${o?"?ref="+encodeURIComponent(o):""}`,{method:"POST",body:JSON.stringify(e),headers:new Headers(i)});if(a.status===200)return await a.blob();{const s=await a.text();let r=new Error(`Failed. Status code ${a.status}, Error: ${a.statusText}, Details: ${s}`);throw Object.defineProperty(a,"stack_trace",{value:s}),r.response=a,r}}function Be(){return{name:"",packageId:"",url:"",version:"1.0.0.1",manifestUrl:"",classicPackage:{generate:!0,version:"1.0.0.0",url:""},publisher:{displayName:"",commonName:""}}}function me(e){const t=le(),i=v();if(!i)throw new Error("Can't find the current URL");if(!t)throw new Error("Cant find the manifest URL");const o=e.short_name||e.name||"My PWA",a=De(new URL(i).hostname),s=e.icons||[];let r=[];if(e.lang){for(let m=0;m<Z.length;m++)if(Z[m].codes.includes(e.lang.toLowerCase())){r.push(e.lang.toLowerCase());break}}const d=J(s);return{name:o,packageId:a,url:i,version:"1.0.1",allowSigning:!0,publisher:{displayName:"Contoso, Inc.",commonName:"CN=3a54a224-05dd-42aa-85bd-3f3c1478fdca"},generateModernPackage:!0,classicPackage:{generate:!0,version:"1.0.0",url:i},edgeHtmlPackage:{generate:!1},manifestUrl:t,manifest:e,images:{baseImage:(d==null?void 0:d.src)||"",backgroundColor:"transparent",padding:0},resourceLanguage:r,enableWebAppWidgets:Object.keys(e).includes("widgets")}}const Z=[{codes:["ar","ar-sa","ar-ae","ar-bh","ar-dz","ar-eg","ar-iq","ar-jo","ar-kw","ar-lb","ar-ly","ar-ma","ar-om","ar-qa","ar-sy","ar-tn","ar-ye"],name:"Arabic"},{codes:["af","af-za"],name:"Afrikaans"},{codes:["sq","sq-al"],name:"Albanian"},{codes:["am","am-et"],name:"Amharic"},{codes:["hy","hy-am"],name:"Armenian"},{codes:["as","as-in"],name:"Assamese"},{codes:["az-arab","az-arab-az","az-cyrl","az-cyrl-az","az-latn","az-latn-az"],name:"Azerbaijani"},{codes:["eu","eu-us"],name:"Basque (Basque)"},{codes:["be","be-by"],name:"Belarusian"},{codes:["bn","bn-bd","bn-in"],name:"Bangla"},{codes:["bs","bs-cyrl","bs-cyrl-ba","bs-latn","bs-latn-ba"],name:"Bosnian"},{codes:["bg","bg-bg"],name:"Bulgarian"},{codes:["ca","ca-es","ca-es-valencia"],name:"Catalan"},{codes:["chr-cher","chr-cher-us","chr-latn"],name:"Cherokee"},{codes:["zh-Hans","zh-cn","zh-hans-cn","zh-sg","zh-hans-sg"],name:"Chinese (Simplified)"},{codes:["zh-Hant","zh-hk","zh-mo","zh-tw","zh-hant-hk","zh-hant-mo","zh-hant-tw"],name:"Chinese (Traditional)"},{codes:["hr","hr-hr","hr-ba"],name:"Croatian"},{codes:["cs","cs-cz"],name:"Czech"},{codes:["da","da-dk"],name:"Danish"},{codes:["prs","prs-af","prs-arab"],name:"Dari"},{codes:["nl","nl-nl","nl-be"],name:"Dutch"},{codes:["en","en-au","en-ca","en-gb","en-ie","en-in","en-nz","en-sg","en-us","en-za","en-bz","en-hk","en-id","en-jm","en-kz","en-mt","en-my","en-ph","en-pk","en-tt","en-vn","en-zw","en-053","en-021","en-029","en-011","en-018","en-014"],name:"English"},{codes:["et","et-ee"],name:"Estonian"},{codes:["fil","fil-latn","fil-ph"],name:"Filipino"},{codes:["fi","fi-fi"],name:"Finnish"},{codes:["fr","fr-be","fr-ca","fr-ch","fr-fr","fr-lu","fr-015","fr-cd","fr-ci","fr-cm","fr-ht","fr-ma","fr-mc","fr-ml","fr-re","frc-latn","frp-latn","fr-155","fr-029","fr-021","fr-011"],name:"French"},{codes:["gl","gl-es"],name:"Galician"},{codes:["ka","ka-ge"],name:"Georgian"},{codes:["de","de-at","de-ch","de-de","de-lu","de-li"],name:"German"},{codes:["el","el-gr"],name:"Greek"},{codes:["gu","gu-in"],name:"Gujarati"},{codes:["ha","ha-latn","ha-latn-ng"],name:"Hausa"},{codes:["he","he-il"],name:"Hebrew"},{codes:["hi","hi-in"],name:"Hindi"},{codes:["hu","hu-hu"],name:"Hungarian"},{codes:["is","is-is"],name:"Icelandic"},{codes:["ig-latn","ig-ng"],name:"Igbo"},{codes:["id","id-id"],name:"Indonesian"},{codes:["iu-cans","iu-latn","iu-latn-ca"],name:"Inuktitut (Latin)"},{codes:["ga","ga-ie"],name:"Irish"},{codes:["xh","xh-za"],name:"isiXhosa"},{codes:["zu","zu-za"],name:"isiZulu"},{codes:["it","it-it","it-ch"],name:"Italian"},{codes:["ja","ja-jp"],name:"Japanese"},{codes:["kn","kn-in"],name:"Kannada"},{codes:["kk","kk-kz"],name:"Kazakh"},{codes:["km","km-kh"],name:"Khmer"},{codes:["quc-latn","qut-gt","qut-latn"],name:"K'iche'"},{codes:["rw","rw-rw"],name:"Kinyarwanda"},{codes:["sw","sw-ke"],name:"KiSwahili"},{codes:["kok","kok-in"],name:"Konkani"},{codes:["ko","ko-kr"],name:"Korean"},{codes:["ku-arab","ku-arab-iq"],name:"Kurdish"},{codes:["ky-kg","ky-cyrl"],name:"Kyrgyz"},{codes:["lo","lo-la"],name:"Lao"},{codes:["lv","lv-lv"],name:"Latvian"},{codes:["lt","lt-lt"],name:"Lithuanian"},{codes:["lb","lb-lu"],name:"Luxembourgish"},{codes:["mk","mk-mk"],name:"Macedonian"},{codes:["ms","ms-bn","ms-my"],name:"Malay"},{codes:["ml","ml-in"],name:"Malayalam"},{codes:["mt","mt-mt"],name:"Maltese"},{codes:["mi","mi-latn","mi-nz"],name:"Maori"},{codes:["mr","mr-in"],name:"Marathi"},{codes:["mn-cyrl","mn-mong","mn-mn","mn-phag"],name:"Mongolian (Cyrillic)"},{codes:["ne","ne-np"],name:"Nepali"},{codes:["nb","nb-no","nn","nn-no","no","no-no"],name:"Norwegian"},{codes:["or","or-in"],name:"Odia"},{codes:["fa","fa-ir"],name:"Persian"},{codes:["pl","pl-pl"],name:"Polish"},{codes:["pt-br"],name:"Portuguese (Brazil)"},{codes:["pt","pt-pt"],name:"Portuguese (Portugal)"},{codes:["pa","pa-arab","pa-arab-pk","pa-deva","pa-in"],name:"Panjabi"},{codes:["quz","quz-bo","quz-ec","quz-pe"],name:"Quechua"},{codes:["ro","ro-ro"],name:"Romanian"},{codes:["ru","ru-ru"],name:"Russian"},{codes:["gd-gb","gd-latn"],name:"Scottish Gaelic"},{codes:["sr-Latn","sr-latn-cs","sr","sr-latn-ba","sr-latn-me","sr-latn-rs"],name:"Serbian (Latin)"},{codes:["sr-cyrl","sr-cyrl-ba","sr-cyrl-cs","sr-cyrl-me","sr-cyrl-rs"],name:"Serbian (Cyrillic)"},{codes:["nso","nso-za"],name:"Sesotho sa Leboa"},{codes:["tn","tn-bw","tn-za"],name:"Setswana"},{codes:["sd-arab","sd-arab-pk","sd-deva"],name:"Sindhi"},{codes:["si","si-lk"],name:"Sinhala"},{codes:["sk","sk-sk"],name:"Slovak"},{codes:["sl","sl-si"],name:"Slovenian"},{codes:["es","es-cl","es-co","es-es","es-mx","es-ar","es-bo","es-cr","es-do","es-ec","es-gt","es-hn","es-ni","es-pa","es-pe","es-pr","es-py","es-sv","es-us","es-uy","es-ve","es-019","es-419"],name:"Spanish"},{codes:["sv","sv-se","sv-fi"],name:"Swedish"},{codes:["tg-arab","tg-cyrl","tg-cyrl-tj","tg-latn"],name:"Tajik (Cyrillic)"},{codes:["ta","ta-in"],name:"Tamil"},{codes:["tt-arab","tt-cyrl","tt-latn","tt-ru"],name:"Tatar"},{codes:["te","te-in"],name:"Telugu"},{codes:["th","th-th"],name:"Thai"},{codes:["tr","tr-tr"],name:"Turkish"},{codes:["tk-cyrl","tk-latn","tk-tm","tk-latn-tr","tk-cyrl-tr"],name:"Turkmen"},{codes:["uk","uk-ua"],name:"Ukrainian"},{codes:["ur","ur-pk"],name:"Urdu"},{codes:["ug-arab","ug-cn","ug-cyrl","ug-latn"],name:"Uyghur"},{codes:["uz","uz-cyrl","uz-latn","uz-latn-uz"],name:"Uzbek (Latin)"},{codes:["vi","vi-vn"],name:"Vietnamese"},{codes:["cy","cy-gb"],name:"Welsh"},{codes:["wo","wo-sn"],name:"Wolof"},{codes:["yo-latn","yo-ng"],name:"Yoruba"}];async function fe(e,t){switch(e){case"windows":return await je(t);case"android":return await Ke(t);case"ios":return await qe(t);case"meta":return await Ge(t);default:throw new Error(`A platform type must be passed, ${e} is not a valid platform.`)}}async function qe(e){const t=await Ie(e);return{appName:e.name,blob:t,type:"store"}}async function Ge(e){const t=await Ae(e);return{appName:e.name,blob:t,type:"store"}}async function je(e){const t=await We(e);return{appName:e.name,blob:t||null,type:"store"}}async function Ke(e){const t=await ge(e);return{appName:e.name,blob:t||null,type:"store"}}var Ve=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,M=(e,t,i,o)=>{for(var a=o>1?void 0:o?Ye(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&Ve(t,i,a),a};let I=class extends R{constructor(){super(),this.anchor="",this.text="",this.link="",this.tooltipVisible=!1,this.tooltipLocation=[0,0],this.anchorElement=null,this.tooltipContainsFocus=!1,this.tooltipContainsHover=!1,this.anchorContainsFocus=!1,this.anchorContainsHover=!1,this.hideTooltipTimeoutHandle=0,this.mouseEnterListener=()=>this.anchorMouseEntered(),this.focusInListner=()=>this.anchorFocused(),this.mouseLeaveListener=()=>this.anchorMouseLeave(),this.focusOutListener=()=>this.anchorBlurred()}static get styles(){return h`
      .tooltip-dialog {
        position: absolute;
        margin: 0px;
        box-shadow: 0 0 5px gray;
        background-color: #000;
        opacity: 0;
        transform: translate(10px, 5px); /* shift it down and to the right a bit */
        transition: opacity 0.2s ease-in-out;
        visibility: collapse;
        border-radius: 0.25rem;
        z-index: 1000;
        width: max-content;
        max-width: 250px;
      }

      .tooltip-dialog.show {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
      }

      .tooltip-inner {
        position: relative;
        color: #fff;
        font-size: 14px;
        font-weight: normal;
        padding: 0px 15px 0px 15px;
        line-height: 21px;
      }

      ${ee(h`
          .tooltip-inner {
            max-width: 200px;
          }
        `)}

      a, a:hover, a:active {
        color: white;
        display: block;
        margin-bottom: 15px;
      }
    `}connectedCallback(){var e;if(super.connectedCallback(),!this.anchor){console.error("Attempted to use a <hover-tooltip>, but didn't set the anchor. It should be set to the ID of the element the tooltip is for.");return}this.anchorElement=(e=this.parentNode)==null?void 0:e.querySelector(`#${this.anchor}`),this.anchorElement&&(this.anchorElement.addEventListener("mouseenter",this.mouseEnterListener,{passive:!0}),this.anchorElement.addEventListener("mouseleave",this.mouseLeaveListener,{passive:!0}),this.anchorElement.addEventListener("focusin",this.focusInListner,{passive:!0}),this.anchorElement.addEventListener("focusout",this.focusOutListener,{passive:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.anchorElement&&(this.anchorElement.removeEventListener("mouseenter",this.mouseEnterListener),this.anchorElement.removeEventListener("mouseleave",this.focusInListner),this.anchorElement.removeEventListener("focusin",this.mouseEnterListener),this.anchorElement.removeEventListener("focusout",this.focusOutListener)),clearTimeout(this.hideTooltipTimeoutHandle)}showTooltip(){if(this.anchorElement){let e=0;!!this.getAbsoluteOrFixedOffsetParent(this.anchorElement)||(e=window.scrollY);const i=this.anchorElement.getBoundingClientRect(),[o,a]=this.getCumulativeOffset(this.anchorElement),s=i.top+e-a,r=i.right-o;this.tooltipLocation=[s,r],this.tooltipVisible=!0}}getCumulativeOffset(e){let t=0,i=0,o=e.parentNode;for(;o!=null;)t+=o.offsetTop,i+=o.offsetLeft,o=o.parentNode;return[i,t]}getAbsoluteOrFixedOffsetParent(e){if(!e)return null;let t=e.offsetParent;for(;t!=null&&t!==document.body;){const i=window.getComputedStyle(t,null).position;if(t.style&&(i==="absolute"||i==="fixed"))return t;t=t.offsetParent}return null}hideTooltipIfNecessary(){const e=()=>{this.tooltipVisible=this.anchorContainsFocus||this.anchorContainsHover||this.tooltipContainsFocus||this.tooltipContainsHover};clearTimeout(this.hideTooltipTimeoutHandle),this.hideTooltipTimeoutHandle=window.setTimeout(()=>e(),350)}anchorMouseEntered(){this.anchorContainsHover=!0,this.showTooltip()}anchorMouseLeave(){this.anchorContainsHover=!1,this.hideTooltipIfNecessary()}anchorFocused(){this.anchorContainsFocus=!0,this.showTooltip()}anchorBlurred(){this.anchorContainsFocus=!1,this.hideTooltipIfNecessary()}tooltipMouseEntered(){this.tooltipContainsHover=!0}tooltipMouseLeave(){this.tooltipContainsHover=!1,this.hideTooltipIfNecessary()}tooltipFocused(){this.tooltipContainsFocus=!0}tooltipBlurred(){this.tooltipContainsFocus=!1,this.hideTooltipIfNecessary()}render(){const e=this.tooltipVisible?"tooltip-dialog show":"tooltip-dialog";return n`
      <div class="${e}" 
        style="top: ${this.tooltipLocation[0]}px; left: ${this.tooltipLocation[1]}px;"
        @mouseover="${this.tooltipMouseEntered}"
        @mouseleave="${this.tooltipMouseLeave}"
        @focusin="${this.tooltipFocused}"
        @focusout="${this.tooltipBlurred}">
        <div class="tooltip-inner">
          <p>${this.text}</p>
          ${this.renderLink()}
        </div>
      </div>
    `}renderLink(){return this.link?n`
      <a target="_blank" href="${this.link}">
        Read more...
      </a>
    `:n``}};M([k()],I.prototype,"anchor",2);M([k({type:String})],I.prototype,"text",2);M([k({type:String})],I.prototype,"link",2);M([l()],I.prototype,"tooltipVisible",2);M([l()],I.prototype,"tooltipLocation",2);I=M([$("hover-tooltip")],I);var Qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,te=(e,t,i,o)=>{for(var a=o>1?void 0:o?Xe(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&Qe(t,i,a),a};let j=class extends R{constructor(){super(),this.text="",this.link="",this.circleId=Math.random().toString(36).replace("0.","info-circle-")}static get styles(){return h`
      .holder {
        display: flex;
        height: fit-content;
      }
      .info-circle-img {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        padding: 4px;
        margin-left: 6px;
      }
    `}render(){return n`
      <div class="holder">
        <img id="${this.circleId}" class="info-circle-img" src="assets/tooltip.svg" alt="help outline"
          aria-hidden="true" />

        <hover-tooltip anchor="${this.circleId}" text="${this.text}" link="${u(this.link)}">
        </hover-tooltip>
      </div>
    `}};te([k({type:String})],j.prototype,"text",2);te([k({type:String})],j.prototype,"link",2);j=te([$("info-circle-tooltip")],j);var Ze=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,et=(e,t,i,o)=>{for(var a=o>1?void 0:o?Je(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&Ze(t,i,a),a};let F=class extends R{static get styles(){return[h`
      #form-layout input {
        border: 1px solid rgba(194, 201, 209, 1);
        border-radius: var(--input-border-radius);
        color: var(--font-color);
      }

      #form-layout input:not([type='color']) {
        padding: 10px;
      }

      input::placeholder {
        color: var(--placeholder-color);
        font-style: italic;
      }

      #form-extras sl-button::part(base) {
        background-color: var(--font-color);
        color: #ffffff;
        font-size: 14px;
        height: 3em;
        width: 25%;
        border-radius: var(--button-border-radius);
      }

      #form-extras sl-button::part(label){
        display: flex;
        align-items: center;
      }

      #form-layout {
        overflow-y: auto;
        padding: 0em 1.5em 0 1em;
      }

      .tooltip {
        margin-left: 10px;
      }

      .form-group .tooltip a {
        color: #fff;
      }

      .form-group {
        display: flex;
        flex-direction: column;
      }

      .form-group label {
        font-size: var(--small-medium-font-size);
        font-weight: bold;
        line-height: 40px;
        display: flex;
        align-items: center;
      }

      .form-group label a {
        text-decoration: none;
        color: var(--font-color);
      }

      #form-options-actions {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: .25em;
      }

      #form-details-block {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;
        gap: .25em;
      }

      #form-details-block p {
        font-weight: 300;
        font-size: 14px;
        color: #808080;
        margin: 0;
      }

      .select-group {
        display: flex;
        margin-bottom: 10px;
        padding-left: 2em;
      }

      #all-settings-header {
        color: var(--font-color);
        font-weight: var(--font-bold);
        font-size: 18px;

        display: flex;
        align-items: center;
      }

      .form-check {
        display: flex;
        align-items: center;
      }

      .form-check label {
        font-weight: normal;
        margin-left: 8px;
      }

      #form-layout input:invalid {
        color: var(--error-color);
        border: 1px solid var(--error-color);
      }

      input:disabled {
        cursor: no-drop;
      }

      sl-color-picker {
        --grid-width: 315px;
        height: 25px;
      }

      sl-color-picker::part(trigger){
        border-radius: 0;
        height: 25px;
        width: 75px;
        display: flex;
      }

      .colorPickerAndValue {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .colorPickerAndValue p {
        margin: 0;
        color: var(--secondary-font-color);
      }


      @media (min-height: 760px) and (max-height: 1000px) {
        form {
          width: 100%;
        }
      }
    `]}constructor(){super()}getPackageOptions(){return{}}getForm(){}renderFormInput(e){return e.type==="checkbox"||e.type==="radio"?n`
        ${this.renderFormInputTextbox(e)}
        ${this.renderFormInputLabel(e)}
      `:e.type==="color"?n`
        ${this.renderFormInputLabel(e)}
        ${this.renderFormColorPicker(e)}
      `:n`
      ${this.renderFormInputLabel(e)}
      ${this.renderFormInputTextbox(e)}
    `}renderFormColorPicker(e){return n`
    <div class="colorPickerAndValue">
      <sl-color-picker
              id="${e.inputId}" 
              class="form-control" 
              placeholder="${e.placeholder||""}"
              value="${u(e.value)}" 
              type="color" 
              ?required="${e.required}"
              name="${u(e.name)}" 
              minlength="${u(e.minLength)}"
              maxlength="${u(e.maxLength)}"
              min=${u(e.minValue)}
              max="${u(e.maxValue)}" 
              pattern="${u(e.pattern)}"
              spellcheck="${u(e.spellcheck)}" 
              ?checked="${e.checked}" 
              ?readonly="${e.readonly}"
              custom-validation-error-message="${u(e.validationErrorMessage)}"
              ?disabled=${e.disabled}
              @sl-change="${t=>this.colorChanged(t,e)}" 
              @sl-invalid=${this.inputInvalid}
            ></sl-color-picker>
            <p>${e.value}</p>
  </div>`}renderFormInputTextbox(e){const t=e.type||"text",i=e.type==="radio"?"form-check-input":"form-control";return n`
      <input id="${e.inputId}" class="${i}" placeholder="${e.placeholder||""}"
        value="${u(e.value)}" type="${t}" ?required="${e.required}"
        name="${u(e.name)}" minlength="${u(e.minLength)}"
        maxlength="${u(e.maxLength)}" min=${u(e.minValue)}
        max="${u(e.maxValue)}" pattern="${u(e.pattern)}"
        spellcheck="${u(e.spellcheck)}" ?checked="${e.checked}" ?readonly="${e.readonly}"
        custom-validation-error-message="${u(e.validationErrorMessage)}"
        ?disabled=${e.disabled}
        @input="${o=>this.inputChanged(o,e)}" @invalid=${this.inputInvalid} />
    `}renderFormInputLabel(e){return n`
      <label for="${e.inputId}">
        ${e.label}
        ${this.renderTooltip(e)}
      </label>
    `}renderTooltip(e){return e.tooltip?(e.inputId||(e.inputId=Math.random().toString(36).replace("0.","form-input-")),n`
      <info-circle-tooltip text="${e.tooltip}" link="${u(e.tooltipLink)}">
      </info-circle-tooltip>
    `):n``}colorChanged(e,t){const i=e.target;if(!i||!i.nextElementSibling)return;const o=i.getFormattedValue("hex").toLocaleUpperCase(),a=i.nextElementSibling,s=document.createElement("p");if(s.textContent=o,a.replaceWith(s),t.inputHandler&&t.inputHandler(o,i.checked,i),t.validationErrorMessage){const r=this.inputHasValidationErrors(i)?t.validationErrorMessage:"";i.setCustomValidity(r),i.title=r}}inputChanged(e,t){const i=e.target;if(i&&(t.inputHandler&&t.inputHandler(i.value||"",i.checked,i),t.validationErrorMessage)){const o=this.inputHasValidationErrors(i)?t.validationErrorMessage:"";i.setCustomValidity(o),i.title=o}}inputInvalid(e){const t=e.target;t&&this.expandParentAccordionIfNeeded(t)}inputHasValidationErrors(e){return[e.validity.badInput,e.validity.patternMismatch,e.validity.rangeOverflow,e.validity.rangeUnderflow,e.validity.stepMismatch,e.validity.tooLong,e.validity.tooShort,e.validity.typeMismatch,e.validity.valueMissing].some(i=>i===!0)}expandParentAccordionIfNeeded(e){const t=!e.validity.valid,i=e.closest("fast-accordion-item");if(i&&i.expanded===!1&&t){const o=i.querySelector(".flipper-button");o==null||o.click(),setTimeout(()=>{e.scrollIntoView(),e.reportValidity()},0)}}};F=et([$("app-package-form-base")],F);const V="[^\\|\\$\\@\\#\\>\\<\\)\\(\\!\\&\\%\\*]+$";var tt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,x=(e,t,i,o)=>{for(var a=o>1?void 0:o?it(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&tt(t,i,a),a};let y=class extends F{constructor(){super(),this.generating=!1,this.showAdvanced=!1,this.customSelected=!1,this.initialBgColor="",this.currentSelectedColor="",this.packageOptions=Be(),this.activeLanguages=[],this.activeLanguageCodes=[],this.userBackgroundColor=""}static get styles(){return[...super.styles,h`
        #windows-options-form {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;

        }
        .flipper-button {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .form-generate-button {
          width: 135px;
          height: 40px;
        }
        .basic-settings, .adv-settings {
          display: flex;
          flex-direction: column;
          gap: .75em;
        }
        #form-layout {
          flex-grow: 1;
          display: flex;
          overflow: auto;
          flex-direction: column;
        }

        sl-details {
          margin-top: 1em;
        }

        sl-details::part(base){
          border: none;
        }

        sl-details::part(summary-icon){
          display: none;
        }

        .dropdown_icon {
          transform: rotate(0deg);
          transition: transform .5s;
          height: 30px;
        }

        sl-details::part(header){
          padding: 0 10px;
        }

        .details-summary {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .details-summary p {
          margin: 0;
          font-size: 18px;
          font-weight: bold;
        }

        .sub-multi {
          font-size: var(--body-font-size);
          margin: 0;
          color: rgba(0,0,0,.5);
        }

        arrow-link {
          margin: 10px 0;
        }

        :host{
          --sl-focus-ring-width: 3px;
          --sl-input-focus-ring-color: #4f3fb670;
          --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
          --sl-input-border-color-focus: #4F3FB6ac;
          --sl-input-font-size-small: 22px;
          
        }

        #languageDrop::part(display-input){
          min-height: 40px;
        }

        #languageDrop::part(tag){
          font-size: var(--body-font-size);
          color: #757575;
          background-color: #f0f0f0;
          border-radius: var(--input-border-radius);
        }

        #languageDrop::part(listbox){
          background-color: #ffffff;
          height: 200px;
          overflow-y: scroll;
          border-radius: var(--input-border-radius);
          border: 1px solid #c5c5c5;
          margin-top: 3px;
        }

        #languageDrop sl-option::part(base){
          font-size: var(--body-font-size);
          color: #757575;
        }

        #languageDrop sl-option:focus-within::part(base) {
          color: #ffffff;
          background-color: #4F3FB6;
        }

        #languageDrop sl-option::part(base):hover{
          color: #ffffff;
          background-color: #4F3FB6;
        }

        #languageDrop::part(display-label){
          font-size: var(--body-font-size);
          color: #757575;
        }

        sl-color-picker {
          --grid-width: 315px;
          height: 25px;
        }

        sl-color-picker::part(trigger){
          border-radius: 0;
          height: 25px;
          width: 75px;
          display: flex;
        }

        .color-radio::part(control--checked){
          background-color: var(--primary-color);
          border-color: var(--primary-color);
        }

        #ai-hub-label {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        #ai-hub-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }

        #ai-hub-text p {
          margin: 0;
          color: #7f7f7f;
          font-size: 14px;
        }
       
    `]}async connectedCallback(){var t,i;super.connectedCallback();let e=N();e.isGenerated&&(e=await H()),this.packageOptions=me(e.manifest),this.packageOptions.targetDeviceFamilies=["Desktop","Holographic"],this.customSelected=((t=this.packageOptions.images)==null?void 0:t.backgroundColor)!="transparent",this.currentSelectedColor=(i=this.packageOptions.images)==null?void 0:i.backgroundColor,e!=null&&e.manifest.background_color?this.initialBgColor=e.manifest.background_color:this.initialBgColor="#000000;"}toggleSettings(e){e==="advanced"?this.showAdvanced=!0:e==="basic"?this.showAdvanced=!1:this.showAdvanced=!1}get manifestUrl(){return le()}addOrRemoveDeviceFamily(e,t){var i,o,a,s;if(t)(i=this.packageOptions.targetDeviceFamilies)!=null&&i.includes(e)||(o=this.packageOptions.targetDeviceFamilies)==null||o.push(e);else{let r=(a=this.packageOptions.targetDeviceFamilies)==null?void 0:a.indexOf(e,0);r>-1&&((s=this.packageOptions.targetDeviceFamilies)==null||s.splice(r,1))}this.checkValidityForDeviceFamily()}checkValidityForDeviceFamily(){var o,a;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("#target-device-families"),t=e==null?void 0:e.querySelectorAll('input[type="checkbox"]:checked'),i=(a=this.shadowRoot)==null?void 0:a.querySelector("#device-family-input-desktop");t!==void 0&&(t==null?void 0:t.length)===0?i.setCustomValidity("Please select at least one device family"):i.setCustomValidity("")}rotateZero(){p("windows_form_all_settings_expanded",c.ProcessCheckpoint);let e=this.shadowRoot.querySelector(".dropdown_icon");e.style.transform="rotate(0deg)"}rotateNinety(){p("windows_form_all_settings_collapsed",c.ProcessCheckpoint);let e=this.shadowRoot.querySelector(".dropdown_icon");e.style.transform="rotate(90deg)"}getPackageOptions(){return this.packageOptions}getForm(){return this.shadowRoot.querySelector("form")}renderMultiSelect(e){return n`
      <label for="${e.inputId}">
        ${e.label}
        ${this.renderTooltip(e)}
      </label>
      <div id="multiSelectBox">
        <div class="multi-wrap">
          <p class="sub-multi">Select Multiple Languages</p>
          <sl-select id="languageDrop" 
            placeholder="Select one or more languages"
            @sl-change=${t=>this.packageOptions.resourceLanguage=t.target.value} 
            value=${this.packageOptions.resourceLanguage}
            ?stayopenonselect=${!0} 
            multiple
            .maxOptionsVisible=${5}
            size="small"
          >
          ${Z.map(t=>n`
              ${t.codes.map(i=>n`
                  <sl-option value=${i}>${t.name} - ${i}</sl-option>
                `)}
            `)} 
          </sl-select>
        </div>
      </div>
    `}renderColorToggle(e){return n`
      <label for="${e.inputId}">
        ${e.label}
        ${this.renderTooltip(e)}
      </label>
      <div id="iconColorPicker">
        <div class="color-wrap">
          <p class="sub-multi">Select your Windows icons background color</p>
          <sl-radio-group 
            id="icon-bg-radio-group" 
            .value=${"transparent"}
            @sl-change=${()=>this.toggleIconBgRadios()}
          >
            <sl-radio class="color-radio" size="small" value="transparent">Transparent</sl-radio>
            <sl-radio class="color-radio" size="small" value="custom">Custom Color</sl-radio>
          </sl-radio-group>
          ${this.customSelected?n`
            ${this.renderFormInput(e)}
          `:null}
        </div>
      </div>
    `}toggleIconBgRadios(){var i;let t=((i=this.shadowRoot)==null?void 0:i.getElementById("icon-bg-radio-group")).value;this.customSelected?this.packageOptions.images.backgroundColor="transparent":(this.packageOptions.images.backgroundColor=this.initialBgColor,this.currentSelectedColor=this.initialBgColor),this.customSelected=t!=="transparent"}render(){var e,t,i;return n`
    <div id="form-holder">
      <form
        id="windows-options-form"
        slot="modal-form"
        style="width: 100%"
      >
        <div id="form-layout">
          <div class="basic-settings">
            <div class="form-group">
              ${this.renderFormInput({label:"Package ID",tooltip:"The Package ID uniquely identifying your app in the Microsoft Store. Get this value from Windows Partner Center.",tooltipLink:"https://blog.pwabuilder.com/docs/finding-your-windows-publisher-info/",inputId:"package-id-input",required:!0,placeholder:"MyCompany.MyApp",minLength:3,maxLength:50,spellcheck:!1,pattern:"[a-zA-Z0-9.-]*$",validationErrorMessage:"Package ID must contain only letters, numbers, period, or hyphen.",inputHandler:o=>this.packageOptions.packageId=o})}
            </div>
            <div class="form-group">
              ${this.renderFormInput({label:"Publisher ID",tooltip:"The ID of your app's publisher. Get this value from Windows Partner Center.",tooltipLink:"https://blog.pwabuilder.com/docs/finding-your-windows-publisher-info/",inputId:"publisher-id-input",placeholder:"CN=3a54a224-05dd-42aa-85bd-3f3c1478fdca",validationErrorMessage:"Publisher ID must be in the format CN=XXXX. Get your publisher ID from Partner Center.",pattern:"CN=.+",required:!0,spellcheck:!1,minLength:4,inputHandler:o=>this.packageOptions.publisher.commonName=o})}
            </div>
            <div class="form-group">
              ${this.renderFormInput({label:"Publisher display name",tooltip:"The display name of your app's publisher. Gets this value from Windows Partner Center.",tooltipLink:"https://blog.pwabuilder.com/docs/finding-your-windows-publisher-info/",inputId:"publisher-display-name-input",required:!0,minLength:3,spellcheck:!1,validationErrorMessage:"Publisher display name must be at least 3 characters. Get this value from Windows Partner Center.",placeholder:"Contoso Inc",inputHandler:o=>this.packageOptions.publisher.displayName=o})}
            </div>
            <div class="form-group" id="ai-hub">
              <div id="ai-hub-label">
                <label>Does your app use AI?</label>
                <info-circle-tooltip 
                  text="AI Hub is a new curated section in the Microsoft Store that navigates Windows users to the best AI experiences built by the developer community and Microsoft."
                  link="https://blogs.windows.com/windowsdeveloper/2023/05/23/welcoming-ai-to-the-microsoft-store-on-windows/"
                  @click=${()=>{p("ai_hub_read_more_link_click",c.ProcessCheckpoint)}}
                  ></info-circle-tooltip>
              </div>
              <div id="ai-hub-text">
                <p>We will promote the best AI experiences built by the developer community on our Microsoft Store's AI Hub.</p>
                <arrow-link .text=${"Join Us"} .link=${"https://aka.ms/MicrosoftStoreAIHub"}></arrow-link>
              </div>
            </div>
          </div>
          <!-- "all settings" section of the modal -->
          <sl-details @sl-show=${()=>this.rotateNinety()} @sl-hide=${()=>this.rotateZero()}>
            <div class="details-summary" slot="summary">
              <p>All Settings</p>
              <img class="dropdown_icon" src="/assets/new/dropdownIcon.svg" alt="dropdown toggler"/>
            </div>
            <div class="adv-settings">
              <div class="form-group">
                ${this.renderFormInput({label:"App name",tooltip:"The name of your app. This is displayed to users in the Store.",tooltipLink:"https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/element-displayname",inputId:"app-name-input",required:!0,minLength:1,maxLength:256,value:this.packageOptions.name,placeholder:"My Awesome PWA",pattern:V,validationErrorMessage:"App name must not include special characters and be between 1 and 256 characters",inputHandler:o=>this.packageOptions.name=o})}
              </div>
              <div class="form-group">
                ${this.renderFormInput({label:"App version",tooltip:"Your app version in the form of '1.0.0'. It must not start with zero and must be greater than classic package version. For new apps, this should be set to 1.0.1",tooltipLink:"https://blog.pwabuilder.com/docs/what-is-a-classic-package/",inputId:"version-input",required:!0,minLength:5,value:this.packageOptions.version,placeholder:"1.0.1",spellcheck:!1,pattern:"^[^0]+\\d*.\\d+.\\d+$",validationErrorMessage:"Version must be in the form of '1.0.0', cannot start with zero, and must be greater than classic version",inputHandler:o=>this.packageOptions.version=o})}
              </div>
              <div class="form-group">
                ${this.renderFormInput({label:"Classic app version",tooltip:"The version of your app that runs on older versions of Windows. Must be in the form of '1.0.0', it cannot start with zero, and must be less than app version. For new apps, this should be set to 1.0.0",tooltipLink:"https://blog.pwabuilder.com/docs/what-is-a-classic-package/",inputId:"classic-version-input",required:!0,minLength:5,value:(e=this.packageOptions.classicPackage)==null?void 0:e.version,placeholder:"1.0.0",pattern:"^[^0]+\\d*.\\d+.\\d+$",validationErrorMessage:"Classic app version must be in the form of '1.0.0', cannot start with zero, and must be less than than app version",inputHandler:o=>this.packageOptions.classicPackage.version=o})}
              </div>
              <div class="form-group">
                ${this.renderFormInput({label:"Icon URL",tooltip:"The URL of an icon to use for your app. This should be a 512x512 or larger, square PNG image. Additional Windows image sizes will be fetched from your manifest, and any missing Windows image sizes will be generated by PWABuilder. The URL can be an absolute path or relative to your manifest.",tooltipLink:"https://blog.pwabuilder.com/docs/image-recommendations-for-windows-pwa-packages/",inputId:"icon-url-input",required:!0,type:"text",minLength:2,validationErrorMessage:"Must be an absolute URL or a URL relative to your manifest",value:((t=this.packageOptions.images)==null?void 0:t.baseImage)||"",placeholder:"/images/512x512.png",inputHandler:o=>this.packageOptions.images.baseImage=o})}
              </div>
              <div class="form-group">
                ${this.renderColorToggle({label:"Icon Background Color",tooltip:"Optional. The background color of the Windows icons that will be generated with your .msix.",tooltipLink:"https://learn.microsoft.com/en-us/windows/apps/design/style/iconography/app-icon-design#color-contrast",inputId:"icon-bg-color-input",type:"color",value:(i=this.packageOptions.images)==null?void 0:i.backgroundColor,placeholder:"transparent",inputHandler:o=>this.packageOptions.images.backgroundColor=o})}
              </div>
              <div class="form-group">
                ${this.renderMultiSelect({label:"Language",tooltip:"Optional. Select as many languages as your app supports. Additional languages can be specified in Windows Partner Center. If empty, EN-US will be used.",tooltipLink:"https://docs.microsoft.com/en-us/windows/uwp/publish/supported-languages",inputId:"language-input",value:this.packageOptions.resourceLanguage,placeholder:"EN-US",inputHandler:o=>this.packageOptions.resourceLanguage=o})}
              </div>
              <div class="form-group" id="target-device-families">
                <label>Target device families</label>
                <div class="form-check">
                  ${this.renderFormInput({label:"Desktop",value:"Desktop",tooltip:"Identifies the device family that your package targets. Both Desktop and Holographic are enabled by default",tooltipLink:"https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/element-targetdevicefamily",inputId:"device-family-input-desktop",type:"checkbox",checked:!0,inputHandler:(o,a)=>{this.addOrRemoveDeviceFamily(o,a)}})}
                </div>
                <div class="form-check">
                  ${this.renderFormInput({label:"Holographic (HoloLens)",value:"Holographic",tooltip:"Identifies the device family that your package targets. Both Desktop and Holographic are enabled by default",tooltipLink:"https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/element-targetdevicefamily",inputId:"device-family-input-holographic",type:"checkbox",checked:!0,inputHandler:(o,a)=>{this.addOrRemoveDeviceFamily(o,a)}})}
                </div>
                <div class="form-check">
                  ${this.renderFormInput({label:"Surface Hub (Team)",value:"Team",tooltip:"Identifies the device family that your package targets.",tooltipLink:"https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/element-targetdevicefamily",inputId:"device-family-input-team",type:"checkbox",checked:!1,inputHandler:(o,a)=>{this.addOrRemoveDeviceFamily(o,a)}})}
                </div>
              </div>
              <div class="form-group" id="widgets-picker">
                <label>Widgets</label>
                <div class="form-check">
                  ${this.renderFormInput({label:"Enable Widgets",value:"Widgets",tooltip:"Enables your Windows package to serve the widgets listed in your web manifest to the Widgets Panel.",tooltipLink:"https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/widgets",inputId:"widget-checkbox",type:"checkbox",checked:this.packageOptions.enableWebAppWidgets,disabled:!this.packageOptions.enableWebAppWidgets,inputHandler:(o,a)=>this.packageOptions.enableWebAppWidgets=a})}
                </div>
              </div>
            </div>
          </sl-details>
        </div>

      </form>
    </div>
    `}};x([k({type:Boolean})],y.prototype,"generating",2);x([l()],y.prototype,"showAdvanced",2);x([l()],y.prototype,"customSelected",2);x([l()],y.prototype,"initialBgColor",2);x([l()],y.prototype,"currentSelectedColor",2);x([l()],y.prototype,"packageOptions",2);x([l()],y.prototype,"activeLanguages",2);x([l()],y.prototype,"activeLanguageCodes",2);x([l()],y.prototype,"userBackgroundColor",2);y=x([$("windows-form")],y);var ot=Object.defineProperty,at=Object.getOwnPropertyDescriptor,E=(e,t,i,o)=>{for(var a=o>1?void 0:o?at(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&ot(t,i,a),a};let _=class extends F{constructor(){super(),this.generating=!1,this.isGooglePlayApk=!1,this.showAdvanced=!1,this.packageOptions=Oe(),this.manifestContext=N()}static get styles(){const e=h`
      :host {
        width: 100%;
      }

      #android-options-form {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .signing-key-fields {
        margin-left: 30px;
      }

      #signing-key-file-input {
        border: none;
      }

      .flipper-button {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .form-generate-button {
        width: 135px;
        height: 40px;
      }

      .basic-settings, .adv-settings {
        display: flex;
        flex-direction: column;
        gap: .75em;
      }
      #form-layout {
        flex-grow: 1;
        display: flex;
        overflow: auto;
        flex-direction: column;
      }

      sl-details {
        margin-top: 1em;
      }

      sl-details::part(base){
        border: none;
      }

      sl-details::part(summary-icon){
        display: none;
      }

      .dropdown_icon {
        transform: rotate(0deg);
        transition: transform .5s;
        height: 30px;
      }

      sl-details::part(header){
        padding: 0 10px;
      }
      .details-summary {
        display: flex;
        align-items: center;
        width: 100%;
      }
      .details-summary p {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
      }

    `;return[...super.styles,e]}async firstUpdated(){this.manifestContext.isGenerated&&(this.manifestContext=await H()),this.packageOptions=ne(this.manifestContext)}updated(e){e.has("isGooglePlayApk")&&(this.packageOptions=ne(this.manifestContext),this.isGooglePlayApk||(this.packageOptions.features.locationDelegation.enabled=!1,this.packageOptions.features.playBilling.enabled=!1,this.packageOptions.isChromeOSOnly=!1,this.packageOptions.enableNotifications=!1,this.packageOptions.signingMode="none",this.packageOptions.signing={file:null,alias:"",fullName:"",organization:"",organizationalUnit:"",countryCode:"",keyPassword:"",storePassword:""}))}toggleSettings(e){e==="advanced"?this.showAdvanced=!0:e==="basic"?this.showAdvanced=!1:this.showAdvanced=!1}androidSigningModeChanged(e){this.packageOptions.signingMode=e,e==="mine"||e==="none"?(this.packageOptions.signing.alias="",this.packageOptions.signing.fullName="",this.packageOptions.signing.organization="",this.packageOptions.signing.organizationalUnit="",this.packageOptions.signing.countryCode="",this.packageOptions.signing.keyPassword="",this.packageOptions.signing.storePassword=""):e==="new"&&(this.packageOptions.signing.alias="my-key-alias",this.packageOptions.signing.fullName=(this.manifestContext.manifest.short_name||this.manifestContext.manifest.name||"My PWA")+" Admin",this.packageOptions.signing.organization=this.manifestContext.manifest.name||"PWABuilder",this.packageOptions.signing.organizationalUnit="Engineering",this.packageOptions.signing.countryCode="US",this.packageOptions.signing.keyPassword="",this.packageOptions.signing.storePassword="",this.packageOptions.signing.file=null),this.requestUpdate()}isMetaQuestChanged(e){this.packageOptions.isMetaQuest=e,e?this.packageOptions.minSdkVersion=23:delete this.packageOptions.minSdkVersion}androidSigningKeyUploaded(e){const t=e;if(t&&t.files&&t.files.length>0){const i=t.files[0];i&&i.size>G&&(console.error("Android signing key file is too large. Max size:",{maxSize:G,fileSize:i.size}),this.packageOptions.signingMode="none");const o=new FileReader;o.onload=()=>{this.packageOptions.signing.file=o.result},o.onerror=a=>{console.error("Unable to read Android signing key file",o.error,a),this.packageOptions.signing.file=null,this.packageOptions.signingMode="none"},o.readAsDataURL(i)}}rotateZero(){p("android_form_all_settings_expanded",c.ProcessCheckpoint);let e=this.shadowRoot.querySelector(".dropdown_icon");e.style.transform="rotate(0deg)"}rotateNinety(){p("android_form_all_settings_collapsed",c.ProcessCheckpoint);let e=this.shadowRoot.querySelector(".dropdown_icon");e.style.transform="rotate(90deg)"}getPackageOptions(){return this.packageOptions}getForm(){return this.shadowRoot.querySelector("form")}render(){var e,t;return n`
    <div id="form-holder">
      <form
        id="android-options-form"
        slot="modal-form"
        style="width: 100%"
      >
        <div id="form-layout">
          <div class="basic-settings">

            <div class="form-group">
              ${this.renderFormInput({label:"Package ID",tooltip:"The ID of your app on Google Play. Google recommends a reverse-domain style string: com.domainname.appname. Letters, numbers, periods, hyphens, and underscores are allowed.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#package",inputId:"package-id-input",required:!0,placeholder:"MyCompany.MyApp",value:this.packageOptions.packageId,minLength:3,maxLength:Number.MAX_SAFE_INTEGER,spellcheck:!1,pattern:"[a-zA-Z0-9.-_]*$",validationErrorMessage:"Package ID must contain only letters, numbers, periods, hyphens, and underscores.",inputHandler:i=>this.packageOptions.packageId=i})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"App name",tooltip:"The full name of your app as displayed to end users",tooltipLink:"https://support.google.com/googleplay/android-developer/answer/9859152?hl=en&visit_id=637726158830539690-3630173317&rd=1#details&zippy=%2Cproduct-details",inputId:"app-name-input",required:!0,placeholder:"My Awesome PWA",value:this.packageOptions.name,minLength:3,maxLength:50,spellcheck:!1,pattern:V,validationErrorMessage:"App name must not include special characters and be between 3 and 50 characters",inputHandler:i=>this.packageOptions.name=i})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Short name",tooltip:"The shorter version of your app name displayed on the Android home screen. Google recommends no more than 12 characters.",tooltipLink:"https://developer.chrome.com/apps/manifest/name#short_name",inputId:"short-name-input",required:!0,placeholder:"My PWA",value:this.packageOptions.launcherName,minLength:3,maxLength:30,spellcheck:!1,validationErrorMessage:"Short name must be between 3 and 30 characters in length. Google recommends 12 characters or fewer.",inputHandler:i=>this.packageOptions.launcherName=i})}
            </div>

            <div class="form-group">
              <label>${w.text.android.titles.source_code}</label>
              <div class="form-check">
                ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your download will include the source code for your Android app.",inputId:"include-src-input",type:"checkbox",checked:this.packageOptions.includeSourceCode===!0,inputHandler:(i,o)=>this.packageOptions.includeSourceCode=o})}
              </div>
            </div>
          </div>

          <!-- The "all settings" section of the options dialog -->
          <sl-details @sl-show=${()=>this.rotateNinety()} @sl-hide=${()=>this.rotateZero()}>
            <div class="details-summary" slot="summary">
              <p>All Settings</p>
              <img class="dropdown_icon" src="/assets/new/dropdownIcon.svg" alt="dropdown toggler"/>
            </div>
              <div class="adv-settings">
                <div class="form-group">
                  ${this.renderFormInput({label:"Host",tooltip:"The host portion of your PWA's URL. For example, mypwa.com",inputId:"host-input",required:!0,placeholder:"mypwa.com",value:this.packageOptions.host,minLength:3,spellcheck:!1,inputHandler:i=>this.packageOptions.host=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Start URL",tooltip:"The start path for your PWA. Must be relative to the Host URL. If Host URL contains your PWA, you can use '/' to specify a default",tooltipLink:"https://docs.pwabuilder.com/#/builder/manifest?id=start_url-string",inputId:"start-url-input",required:!0,placeholder:"/index.html",value:this.packageOptions.startUrl,spellcheck:!1,validationErrorMessage:"You must specify a relative start URL. If you don't have a start URL, use '/'",inputHandler:i=>this.packageOptions.startUrl=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Version",tooltip:"The version of your app displayed to users. This is a string, typically in the form of '1.0.0.0'. Maps to android:versionName.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#vname",inputId:"version-input",required:!0,placeholder:"1.0.0.0",value:this.packageOptions.appVersion,spellcheck:!1,inputHandler:i=>this.packageOptions.appVersion=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Version code",tooltip:"A positive integer used as an internal version number. This is not shown to users. This number is used by Google Play to determine whether one version is more recent than another, with higher numbers indicating more recent versions. Maps to android:versionCode.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#vcode",inputId:"version-code-input",type:"number",minValue:1,maxValue:21e8,required:!0,placeholder:"1",value:this.packageOptions.appVersionCode.toString(),inputHandler:i=>this.packageOptions.appVersionCode=parseInt(i,10)})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Theme color",tooltip:"The theme color used for the Android status bar in your app. Typically, this should be set to your manifest's theme_color.",inputId:"theme-color-input",type:"color",value:this.packageOptions.themeColor,inputHandler:i=>this.packageOptions.themeColor=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Theme dark color",tooltip:"The theme color used for the Android status bar in your app when the Android device is in dark mode.",inputId:"theme-dark-color-input",type:"color",value:this.packageOptions.themeColorDark,inputHandler:i=>this.packageOptions.themeColorDark=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Background color",tooltip:"The background color to use for your app's splash screen. Typically this is set to your manifest's background_color.",inputId:"background-color-input",type:"color",value:this.packageOptions.backgroundColor,inputHandler:i=>this.packageOptions.backgroundColor=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Nav color",tooltip:"The color of the Android navigation bar in your app. Typically this is set to your manifest's theme_color",inputId:"nav-color-input",type:"color",value:this.packageOptions.navigationColor,inputHandler:i=>this.packageOptions.navigationColor=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Nav dark color",tooltip:"The color of the Android navigation bar in your app when the Android device is in dark mode.",inputId:"nav-dark-color-input",type:"color",value:this.packageOptions.navigationColorDark,inputHandler:i=>this.packageOptions.navigationColorDark=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Nav divider color",tooltip:"The color of the Android navigation bar divider in your app.",inputId:"nav-divider-color-input",type:"color",value:this.packageOptions.navigationDividerColor,inputHandler:i=>this.packageOptions.navigationDividerColor=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Nav divider dark color",tooltip:"The color of the Android navigation bar divider in your app when the Android device is in dark mode.",inputId:"nav-divider-dark-color-input",type:"color",value:this.packageOptions.navigationDividerColorDark,inputHandler:i=>this.packageOptions.navigationDividerColorDark=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Icon URL",tooltip:"The URL to a square PNG image to use for your app's icon. Can be absolute or relative to your manifest. Google recommends a 512x512 PNG without shadows.",tooltipLink:"https://developer.android.com/distribute/google-play/resources/icon-design-specifications",inputId:"icon-url-input",required:!0,spellcheck:!1,value:this.packageOptions.iconUrl,placeholder:"/icons/512x512.png",inputHandler:i=>this.packageOptions.iconUrl=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Maskable icon URL",tooltip:"Optional. The URL to a PNG image with a minimum safe zone of trimmable padding, enabling rounded icons on certain Android versions. Google recommends a 512x512 PNG without shadows.",tooltipLink:"https://web.dev/maskable-icon",inputId:"maskable-icon-url-input",spellcheck:!1,value:this.packageOptions.maskableIconUrl||"",placeholder:"/icons/512x512-maskable.png",inputHandler:i=>this.packageOptions.maskableIconUrl=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Monochrome icon URL",tooltip:`Optional. The URL to a PNG image containing only white and black colors, enabling Android to fill the icon with user-specified color or
                    gradient depending on theme, color mode, or Android ontrast settings.`,tooltipLink:"https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills",inputId:"monochrome-icon-url-input",spellcheck:!1,value:this.packageOptions.monochromeIconUrl||"",placeholder:"/icons/512x512-monochrome.png",inputHandler:i=>this.packageOptions.monochromeIconUrl=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Manifest URL",tooltip:"The absolute URL of your web manifest.",inputId:"manifest-url-input",type:"url",value:this.packageOptions.webManifestUrl,placeholder:"https://myawesomepwa.com/manifest.json",inputHandler:i=>this.packageOptions.webManifestUrl=i})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Splash fade out duration (ms)",tooltip:"How long the splash screen fade out animation should last in milliseconds.",inputId:"splash-fade-out-input",type:"number",value:(this.packageOptions.splashScreenFadeOutDuration||0).toString(),placeholder:"300",inputHandler:i=>this.packageOptions.splashScreenFadeOutDuration=parseInt(i,10)})}
                </div>

                <div class="form-group">
                  <label>
                    ${w.text.android.titles.settings_shortcut}
                  </label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, users can long-press on your app tile and a Settings menu item will appear, letting users manage space for your app.",tooltipLink:"https://github.com/pwa-builder/PWABuilder/issues/1113",inputId:"site-settings-shortcut-input",type:"checkbox",checked:this.packageOptions.enableSiteSettingsShortcut===!0,inputHandler:(i,o)=>this.packageOptions.enableSiteSettingsShortcut=o})}
                  </div>
                </div>

                <div class="form-group">
                  <label>${w.text.android.titles.display_mode}</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Standalone",tooltip:"Recommended for most apps. The Android status bar and navigation bar will be shown while your app is running.",tooltipLink:"https://developer.android.com/training/system-ui/immersive",inputId:"display-standalone-input",type:"radio",name:"displayMode",value:"standalone",checked:this.packageOptions.display==="standalone",inputHandler:()=>this.packageOptions.display="standalone"})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Fullscreen",tooltip:"The Android status bar and navigation bar will be hidden while your app is running. Suitable for immersive experiences such as games or media apps.",tooltipLink:"https://developer.android.com/training/system-ui/immersive#immersive",inputId:"display-fullscreen-input",type:"radio",name:"displayMode",value:"fullscreen",checked:this.packageOptions.display==="fullscreen",inputHandler:()=>this.packageOptions.display="fullscreen"})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Fullscreen sticky",tooltip:"The Android status bar and navigation bar will be hidden while your app is running, and if the user swipes from the edge of the Android device, the system bars will be semi-transparent, and the touch gesture will be passed to your app. Recommended for drawing apps, and games that require lots of swiping.",tooltipLink:"https://developer.android.com/training/system-ui/immersive#sticky-immersive",inputId:"display-fullscreen-sticky-input",type:"radio",name:"displayMode",value:"fullscreen-sticky",checked:this.packageOptions.display==="fullscreen-sticky",inputHandler:()=>this.packageOptions.display="fullscreen-sticky"})}
                  </div>
                </div>

                ${this.isGooglePlayApk?n`
                <div class="form-group">
                  <label>${w.text.android.titles.notification}</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your PWA can send push notifications without browser permission prompts.",tooltipLink:"https://github.com/GoogleChromeLabs/svgomg-twa/issues/60",inputId:"notification-delegation-input",type:"checkbox",checked:this.packageOptions.enableNotifications===!0,inputHandler:(i,o)=>this.packageOptions.enableNotifications=o})}
                  </div>
                </div>`:null}

                ${this.isGooglePlayApk?n`
                <div class="form-group">
                  <label
                    >${w.text.android.titles.location_delegation}</label
                  >
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your PWA can access navigator.geolocation without browser permission prompts.",inputId:"location-delegation-input",type:"checkbox",checked:((e=this.packageOptions.features.locationDelegation)==null?void 0:e.enabled)===!0,inputHandler:(i,o)=>this.packageOptions.features.locationDelegation.enabled=o})}
                  </div>
                </div>`:null}

                ${this.isGooglePlayApk?n`
                  <div class="form-group">
                    <label
                      >${w.text.android.titles.google_play_billing}</label
                    >
                    <div class="form-check">
                      ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your PWA can sell in-app purchases and subscriptions via the Digital Goods API.",tooltipLink:"https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/",inputId:"google-play-billing-input",type:"checkbox",checked:((t=this.packageOptions.features.playBilling)==null?void 0:t.enabled)===!0,inputHandler:(i,o)=>this.packageOptions.features.playBilling.enabled=o})}
                    </div>
                  </div>`:null}

                ${this.isGooglePlayApk?n`
                <div class="form-group">
                  <label>${w.text.android.titles.signing_key}</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"New",tooltip:"Recommended for new apps in Google Play. PWABuilder will generate a new signing key for you and sign your package with it. Your download will contain the new signing details.",inputId:"signing-new-input",name:"signingMode",value:"new",type:"radio",checked:this.packageOptions.signingMode==="new",inputHandler:()=>this.androidSigningModeChanged("new")})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Use mine",tooltip:"Recommended for existing apps in Google Play. Use this option if you already have a signing key and you want to publish a new version of an existing app in Google Play.",inputId:"signing-mine-input",name:"signingMode",value:"mine",type:"radio",checked:this.packageOptions.signingMode==="mine",inputHandler:()=>this.androidSigningModeChanged("mine")})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"None",tooltip:"PWABuilder will generate a raw, unsigned APK. Raw, unsigned APKs cannot be uploaded to the Google Play Store.",inputId:"signing-none-input",name:"signingMode",value:"none",type:"radio",checked:this.packageOptions.signingMode==="none",inputHandler:()=>this.androidSigningModeChanged("none")})}
                  </div>
                </div>

                ${this.renderSigningKeyFields()}`:null}

                ${this.isGooglePlayApk?n`
                <div class="form-group">
                  <label>
                    ${w.text.android.titles.chromeos_only}
                  </label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your Android package will only run on ChromeOS devices.",inputId:"chromeos-only-input",type:"checkbox",checked:this.packageOptions.isChromeOSOnly===!0,inputHandler:(i,o)=>this.packageOptions.isChromeOSOnly=o})}
                  </div>
                </div>`:null}

                <div class="form-group">
                  <label>
                    ${w.text.android.titles.metaquest}
                  </label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your Android package will be compatible with Meta Quest devices.",inputId:"metaquest-input",type:"checkbox",checked:this.packageOptions.isMetaQuest===!0,inputHandler:(i,o)=>this.isMetaQuestChanged(o)})}
                  </div>
                </div>

                <div class="form-group">
                  <label>${w.text.android.titles.fallback}</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Custom Tabs",tooltip:"When Trusted Web Activity (TWA) is unavailable, use Chrome Custom Tabs as a fallback to run your app.",tooltipLink:"https://developer.chrome.com/docs/android/custom-tabs/",inputId:"chrome-custom-tab-fallback-input",type:"radio",name:"fallbackType",value:"customtabs",checked:this.packageOptions.fallbackType==="customtabs",inputHandler:()=>this.packageOptions.fallbackType="customtabs"})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Web View",tooltip:"When Trusted Web Activity (TWA) is unavailable, use a web view as a fallback to run your app.",tooltipLink:"https://developer.chrome.com/docs/android/custom-tabs/",inputId:"web-view-fallback-input",type:"radio",name:"fallbackType",value:"webview",checked:this.packageOptions.fallbackType==="webview",inputHandler:()=>this.packageOptions.fallbackType="webview"})}
                  </div>
                </div>
              </div>
          </sl-details>
        </div>
      </form>
    </div>
    </div>
    `}renderSigningKeyFields(){return this.packageOptions.signingMode==="new"?this.renderNewSigningKeyFields():this.packageOptions.signingMode==="mine"?this.renderExistingSigningKeyFields():n``}renderNewSigningKeyFields(){return n`
      <div class="signing-key-fields">
        <div class="form-group">
          ${this.renderKeyAlias()}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key full name",tooltip:"Your full name. Used when create the new signing key.",tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-full-name-input",required:!0,placeholder:"John Doe",value:this.packageOptions.signing.fullName||"",spellcheck:!1,inputHandler:e=>this.packageOptions.signing.fullName=e})}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key organization",tooltip:"The name of your company or organization. Used as the organization of the new signing key.",tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-org-input",required:!0,placeholder:"My Company",value:this.packageOptions.signing.organization||"",spellcheck:!1,inputHandler:e=>this.packageOptions.signing.organization=e})}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key organizational unit",tooltip:'The department you work in, e.g. "Engineering". Used as the organizational unit of the new signing key.',tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-org-unit-input",required:!0,placeholder:"Engineering Department",value:this.packageOptions.signing.organizationalUnit,spellcheck:!1,inputHandler:e=>this.packageOptions.signing.organizationalUnit=e})}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key country code",tooltip:`Your country's 2 letter code (e.g. "US"). Used as the country of the new signing key.`,tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-country-code-input",required:!0,placeholder:"US",value:this.packageOptions.signing.countryCode,spellcheck:!1,minLength:2,maxLength:2,validationErrorMessage:"Country code must be 2 characters in length",inputHandler:e=>this.packageOptions.signing.countryCode=e})}
        </div>
      </div>
    `}renderExistingSigningKeyFields(){return n`
      <div class="signing-key-fields">
        <div class="form-group">
          <label for="signing-key-file-input">Key file</label>
          <input
            type="file"
            class="form-control"
            id="signing-key-file-input"
            @change="${e=>this.androidSigningKeyUploaded(e.target)}"
            accept=".keystore"
            required
          />
        </div>
        ${this.renderKeyAlias()}
        ${this.renderKeyPassword()}
        ${this.renderKeyStorePassword()}
      </div>
    `}renderKeyAlias(){const e=this.packageOptions.signingMode==="new"?"The alias to use in the new signing key.":"The alias of your existing signing key.";return n`
      <div class="form-group">
        ${this.renderFormInput({label:"Key alias",tooltip:e,tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-alias-input",required:!0,placeholder:"my-key-alias",value:this.packageOptions.signing.alias||"",spellcheck:!1,inputHandler:t=>this.packageOptions.signing.alias=t})}
      </div>
    `}renderKeyPassword(){const e=this.packageOptions.signingMode==="new"?"The password to use for the new signing key. Leave blank to let PWABuilder generate a strong password for you.":"Your existing key password";return n`
      <div class="form-group">
        ${this.renderFormInput({label:"Key password",tooltip:e,tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-password-input",type:"password",minLength:6,required:this.packageOptions.signingMode==="mine",value:this.packageOptions.signing.keyPassword,inputHandler:t=>this.packageOptions.signing.keyPassword=t})}
      </div>
    `}renderKeyStorePassword(){const e=this.packageOptions.signingMode==="new"?"The key store password to use in the new signing key. Leave blank to let PWABuilder generate a strong key store password for you.":"Your existing key store password";return n`
      <div class="form-group">
        ${this.renderFormInput({label:"Key store password",tooltip:e,tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-store-password-input",type:"password",minLength:6,required:this.packageOptions.signingMode==="mine",value:this.packageOptions.signing.storePassword,inputHandler:t=>this.packageOptions.signing.storePassword=t})}
      </div>
    `}};E([k({type:Boolean})],_.prototype,"generating",2);E([k({type:Boolean})],_.prototype,"isGooglePlayApk",2);E([l()],_.prototype,"showAdvanced",2);E([l()],_.prototype,"packageOptions",2);E([l()],_.prototype,"manifestContext",2);_=E([$("android-form")],_);var st=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Y=(e,t,i,o)=>{for(var a=o>1?void 0:o?rt(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&st(t,i,a),a};let D=class extends F{constructor(){super(),this.generating=!1,this.showAllSettings=!1,this.packageOptions=Ue()}static get styles(){const e=h`

      #ios-options-form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
       .flipper-button {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .form-generate-button {
        width: 135px;
        height: 40px;
      }

      .basic-settings, .adv-settings {
        display: flex;
        flex-direction: column;
        gap: .75em;
      }

      #form-layout {
        flex-grow: 1;
        display: flex;
        overflow: auto;
        flex-direction: column;
        height: 54vh;
      }

      sl-details {
        margin-top: 1em;
      }

      sl-details::part(base){
        border: none;
      }

      sl-details::part(summary-icon){
        display: none;
      }

      .dropdown_icon {
        transform: rotate(0deg);
        transition: transform .5s;
        height: 30px;
      }

      sl-details::part(header){
        padding: 0 10px;
      }

      .details-summary {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .details-summary p {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
      }

      #form-holder{
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          justify-content: spacve-between;
          height: 100%;
        }



    `;return[...super.styles,e]}async firstUpdated(){let e=N();e.isGenerated&&(e=await H()),this.packageOptions=_e(e)}rotateZero(){p("ios_form_all_settings_expanded",c.ProcessCheckpoint);let e=this.shadowRoot.querySelector(".dropdown_icon");e.style.transform="rotate(0deg)"}rotateNinety(){p("ios_form_all_settings_collapsed",c.ProcessCheckpoint);let e=this.shadowRoot.querySelector(".dropdown_icon");e.style.transform="rotate(90deg)"}getPackageOptions(){return this.packageOptions}getForm(){return this.shadowRoot.querySelector("form")}render(){return n`
    <div id="form-holder">
      <form
        id="ios-options-form"
        slot="modal-form"
        style="width: 100%"
        title=""
      >
        <div id="form-layout">
          <div class="basic-settings">
            <div class="form-group">
              ${super.renderFormInput({label:"Bundle ID",tooltip:"The unique identifier of your app. Apple recommends a reverse-domain style string: com.domainname.appname. You'll need this value when uploading your app to the App Store.",tooltipLink:"https://blog.pwabuilder.com/docs/publish-your-pwa-to-the-ios-app-store/#create-your-bundle-id",inputId:"bundleIdInput",value:this.packageOptions.bundleId||"com.domainname.appname",required:!0,placeholder:"com.domainname.appname",minLength:3,spellcheck:!1,inputHandler:e=>this.packageOptions.bundleId=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"App name",tooltip:"The name of your app as displayed to users",tooltipLink:"https://blog.pwabuilder.com/docs/publish-your-pwa-to-the-ios-app-store",inputId:"appNameInput",placeholder:"My PWA",value:this.packageOptions.name||"My PWA",required:!0,spellcheck:!1,minLength:3,pattern:V,inputHandler:e=>this.packageOptions.name=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"URL",inputId:"urlInput",placeholder:"https://domainname.com/app",value:this.packageOptions.url,required:!0,type:"url",inputHandler:e=>this.packageOptions.url=e})}
            </div>
          </div>

          <sl-details @sl-show=${()=>this.rotateNinety()} @sl-hide=${()=>this.rotateZero()}>
            <div class="details-summary" slot="summary">
              <p>All Settings</p>
              <img class="dropdown_icon" src="/assets/new/dropdownIcon.svg" alt="dropdown toggler"/>
            </div>
            <div class="adv-settings">
              <div>
                <div class="">
                  <div class="form-group">
                    ${this.renderFormInput({label:"Image URL",inputId:"imageUrlInput",tooltip:"The URL of a square 512x512 or larger PNG image from which to generate your iOS app icons. This can be an absolute URL or a URL relative to your web manifest.",placeholder:"/images/512x512.png",value:this.packageOptions.imageUrl,required:!0,inputHandler:e=>this.packageOptions.imageUrl=e})}
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Status bar color",inputId:"statusBarColorInput",tooltip:"The background color of the iOS status bar while your app is running. We recommend using your manifest's theme_color or background_color.",type:"color",placeholder:"#ffffff",value:this.packageOptions.statusBarColor,required:!0,inputHandler:e=>this.packageOptions.statusBarColor=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Splash screen color",inputId:"splashColorInput",tooltip:"The background color of the splash screen shown while your PWA is launching. We recommend using your manifest's background_color.",type:"color",placeholder:"#ffffff",value:this.packageOptions.splashColor,required:!0,inputHandler:e=>this.packageOptions.splashColor=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Progress bar color",inputId:"progressBarColorInput",tooltip:"The color of the progress bar shown on your app's splash screen while your PWA is loaded. We recommend using your manifest's theme_color.",type:"color",placeholder:"#000000",value:this.packageOptions.progressBarColor,required:!0,inputHandler:e=>this.packageOptions.progressBarColor=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Permitted URLs",inputId:"permittedUrlsInput",tooltip:"Optional. A comma-separated list of URLs or hosts that your PWA should be allowed to navigate to. You don't need to add your PWA's domain, as it's automatically included.",placeholder:"account.google.com, login.microsoft.com",value:this.packageOptions.permittedUrls.join(", "),inputHandler:e=>this.packageOptions.permittedUrls=e.split(",").map(t=>t.trim()).filter(t=>!!t)})}
            </div>
            </sl-details>
        </div>
      </form>
    </div>
    `}getInputValue(e){const t=e;return(t==null?void 0:t.value)||""}};Y([k({type:Boolean})],D.prototype,"generating",2);Y([l()],D.prototype,"showAllSettings",2);Y([l()],D.prototype,"packageOptions",2);D=Y([$("ios-form")],D);var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,W=(e,t,i,o)=>{for(var a=o>1?void 0:o?lt(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nt(t,i,a),a};let A=class extends F{constructor(){super(),this.generating=!1,this.showAllSettings=!1,this.packageOptions=Ee(),this.existingSigningKey=Te()}static get styles(){const e=h`

      #oculus-options-form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .basic-settings, .adv-settings {
        display: flex;
        flex-direction: column;
        gap: .75em;
      }

      #form-layout {
        flex-grow: 1;
        display: flex;
        overflow: auto;
        flex-direction: column;
        height: 54vh;
      }

      sl-details {
        margin-top: 1em;
      }

      sl-details::part(base){
        border: none;
      }

      sl-details::part(summary-icon){
        display: none;
      }

      .dropdown_icon {
        transform: rotate(0deg);
        transition: transform .5s;
        height: 30px;
      }

      #generate-submit::part(base) {
        background-color: black;
        color: white;
        font-size: 14px;
        height: 3em;
        width: 100%;
        border-radius: 50px;
      }

      sl-details::part(header){
        padding: 0 10px;
      }

      .details-summary {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .details-summary p {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
      }

      #form-holder{
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        justify-content: spacve-between;
        height: 100%;
      }

      sl-button::part(label){
        font-size: 16px;
        padding: .5em 2em;
      }

      .arrow_link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-weight: bold;
        margin-bottom: .25em;
        font-size: 14px;
      }
      .arrow_link a {
        text-decoration: none;
        border-bottom: 1px solid rgb(79, 63, 182);
        font-size: 1em;
        font-weight: bold;
        margin: 0px 0.5em 0px 0px;
        line-height: 1em;
        color: rgb(79, 63, 182);
      }
      .arrow_link a:visited {
        color: #4F3FB6;
      }
      .arrow_link:hover {
        cursor: pointer;
      }
      .arrow_link:hover img {
        animation: bounce 1s;
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
          transform: translateX(-5px);
        }
        60% {
            transform: translateX(5px);
        }
      }

      #tou-link{
        color: 757575;
        font-size: 14px;
      }

      @media(max-width: 640px){
        #form-extras {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1em;
        }
        #form-details-block {
          flex-direction: column;
          gap: .75em;
          align-items: center;
          text-align: center;
          width: 100%;
        }
        #form-options-actions {
          flex-direction: column;
        }
      }
        `;return[...super.styles,e]}async firstUpdated(){let e=N();e.isGenerated&&(e=await H()),this.packageOptions=Me(e)}rotateZero(){p("meta_form_all_settings_expanded",c.ProcessCheckpoint);let e=this.shadowRoot.querySelector(".dropdown_icon");e.style.transform="rotate(0deg)"}rotateNinety(){p("meta_form_all_settings_collapsed",c.ProcessCheckpoint);let e=this.shadowRoot.querySelector(".dropdown_icon");e.style.transform="rotate(90deg)"}getPackageOptions(){return this.packageOptions}getForm(){return this.shadowRoot.querySelector("form")}render(){return n`
    <div id="form-holder">
      <form
        id="oculus-options-form"
        slot="modal-form"
        style="width: 100%"
        title=""
      >
        <div id="form-layout">
          <div class="basic-settings">
            <div class="form-group">
              ${this.renderFormInput({label:"Package ID",tooltip:"The ID of your Meta Quest app. We recommend a reverse-domain style string: com.domainname.appname. Letters, numbers, periods, hyphens, and underscores are allowed.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#package",inputId:"package-id-input",required:!0,placeholder:"MyCompany.MyApp",value:this.packageOptions.packageId,minLength:3,maxLength:50,spellcheck:!1,pattern:"[a-zA-Z0-9.-_]*$",validationErrorMessage:"Package ID must contain only letters, numbers, periods, hyphens, and underscores.",inputHandler:e=>this.packageOptions.packageId=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"App name",tooltip:"The name of your app as displayed to users",inputId:"appNameInput",placeholder:"My PWA",value:this.packageOptions.name||"My PWA",required:!0,spellcheck:!1,minLength:3,pattern:V,inputHandler:e=>this.packageOptions.name=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Version name",tooltip:"The version of your app displayed to users. This is a string, typically in the form of '1.0.0.0'. This is purely for display purposes to users, Meta Quest Store uses Version Code to determine the latest version of your app.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#vname",inputId:"version-input",required:!0,placeholder:"1.0.0.0",value:this.packageOptions.versionName,spellcheck:!1,inputHandler:e=>this.packageOptions.versionName=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Version code",tooltip:"A positive integer used as your app's version number. This number is used by the Meta Quest Store to determine whether one version is more recent than another, with higher numbers indicating more recent versions.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#vcode",inputId:"version-code-input",type:"number",minValue:1,maxValue:21e8,required:!0,placeholder:"1",value:this.packageOptions.versionCode.toString(),inputHandler:e=>this.packageOptions.versionCode=parseInt(e,10)})}
            </div>
          </div>


          <sl-details @sl-show=${()=>this.rotateNinety()} @sl-hide=${()=>this.rotateZero()}>
            <div class="details-summary" slot="summary">
              <p>All Settings</p>
              <img class="dropdown_icon" src="/assets/new/dropdownIcon.svg" alt="dropdown toggler"/>
            </div>
              <div class="adv-settings">
                <div class="form-group">
                  ${this.renderFormInput({label:"Manifest URL",tooltip:"The absolute URL of your web manifest.",inputId:"manifest-url-input",type:"url",value:this.packageOptions.manifestUrl,readonly:!0,placeholder:"https://myawesomepwa.com/manifest.json",inputHandler:e=>this.packageOptions.manifestUrl=e})}
                </div>

                <div class="form-group">
                  <label>Signing key</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"New",tooltip:"Recommended for new Meta Quest apps. PWABuilder will generate a new signing key for you and sign your app package with it. Your download will contain the new signing key details.",inputId:"signing-new-input",name:"signingMode",value:"new",type:"radio",checked:this.packageOptions.signingMode===b.New,inputHandler:()=>this.signingModeChanged(b.New)})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"None",tooltip:"PWABuilder will generate an unsigned APK. Unsigned APKs cannot be uploaded to the Meta Quest Store; you will need to sign the APK manually via Java keytool before submitting to the Store.",tooltipLink:"https://docs.oracle.com/en/java/javase/12/tools/keytool.html",inputId:"signing-none-input",name:"signingMode",value:"none",type:"radio",checked:this.packageOptions.signingMode===b.None,inputHandler:()=>this.signingModeChanged(b.None)})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Existing",tooltip:"Recommended for existing apps in the Meta Quest Store. Use this option if you already have a signing key and you want to publish a new version of an existing app in the Meta Quest Store.",inputId:"signing-mine-input",name:"signingMode",value:"mine",type:"radio",checked:this.packageOptions.signingMode===b.Existing,inputHandler:()=>this.signingModeChanged(b.Existing)})}
                  </div>

                  ${this.renderSigningKeyFields()}
                </div>
              </div>
            </sl-details>
        </div>
      </form>
      
    </div>
    `}renderSigningKeyFields(){return this.packageOptions.signingMode!==b.Existing?n``:this.renderExistingSigningKeyFields()}renderExistingSigningKeyFields(){return n`
      <div class="signing-key-fields">
        <div class="form-group">
          <label for="signing-key-file-input">
            Keystore file
            ${this.renderTooltip({label:"Keystore file",inputId:"signing-key-file-input",tooltipLink:"https://developer.android.com/studio/publish/app-signing",tooltip:"Your existing .keystore file used to sign the previous version of your app. If you don't have an existing .keystore file, you should choose 'New' above."})}
          </label>
          <input
            type="file"
            class="form-control"
            id="signing-key-file-input"
            @change="${e=>this.signingKeyUploaded(e.target)}"
            accept=".keystore"
            required
          />
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Keystore password",tooltip:"The password to access the .keystore file",tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-store-password-input",type:"password",minLength:6,required:!0,value:this.existingSigningKey.storePassword,inputHandler:e=>{this.existingSigningKey.storePassword=this.existingSigningKey.password=e}})}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key alias",tooltip:"The alias of the key to sign the app package with.",tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-alias-input",required:!0,placeholder:"my-key-alias",value:this.existingSigningKey.alias,spellcheck:!1,inputHandler:e=>this.existingSigningKey.alias=e})}
        </div>
      </div>
    `}signingKeyUploaded(e){const t=e;if(t&&t.files&&t.files.length>0){const i=t.files[0];i&&i.size>G&&console.error("Signing key file is too large. Max size:",{maxSize:G,fileSize:i.size});const o=new FileReader;o.onload=()=>this.existingSigningKey.keyStoreFile=o.result,o.onerror=a=>{console.error("Unable to read signing key file",o.error,a)},o.readAsDataURL(i)}}signingModeChanged(e){this.packageOptions.signingMode=e,e===b.Existing?this.packageOptions.existingSigningKey=this.existingSigningKey:this.packageOptions.existingSigningKey=null,this.requestUpdate()}};W([k({type:Boolean})],A.prototype,"generating",2);W([l()],A.prototype,"showAllSettings",2);W([l()],A.prototype,"packageOptions",2);W([l()],A.prototype,"existingSigningKey",2);A=W([$("oculus-form")],A);var dt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,f=(e,t,i,o)=>{for(var a=o>1?void 0:o?ct(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&dt(t,i,a),a};let g=class extends R{constructor(){super(),this.generating=!1,this.cardsOrForm=!0,this.isGooglePlay=!0,this.selectedStore="",this.readyToDownload=!1,this.downloadFileName=null,this.feedbackMessages=[],this.preventClosing=!1,this.storeMap={Windows:{logo:"/assets/windows_icon.svg",packaging_text:"Click below for instructions on how to submit to the Windows Store.",package_instructions:"https://docs.pwabuilder.com/#/builder/windows"},Android:{logo:"/assets/android_icon.svg"},iOS:{logo:"/assets/apple_icon.svg",packaging_text:"Click below for instructions on how to submit to the Apple App Store.",package_instructions:"https://docs.pwabuilder.com/#/builder/app-store"},Meta:{logo:"/assets/meta_icon.svg",packaging_text:"Click below for instructions on how to submit to the Meta Quest Store.",package_instructions:"https://docs.pwabuilder.com/#/builder/meta"}},this.platforms=[{title:"Windows",factoids:["PWAs can be indistinguishable from native apps on Windows","PWAs are first class applications","Collect 100% of revenue generated via third party commerce platforms","1B+ store enabled devices"],isActionCard:!0,icon:"/assets/Publish_Windows.svg",renderDownloadButton:()=>this.renderWindowsDownloadButton()},{title:"Android",factoids:["PWAs are first class applications","One app store listing for all devices (mobile, tablet, desktop)","2.5 billion store enabled devices"],isActionCard:!0,icon:"/assets/Publish_Android.svg",renderDownloadButton:()=>this.renderAndroidDownloadButton()},{title:"iOS",factoids:["Leverage same codebase across all platforms","Large user base","Premium devices"],isActionCard:!0,icon:"/assets/Publish_Apple.svg",renderDownloadButton:()=>this.renderiOSDownloadButton()},{title:"Meta Quest",factoids:["PWAs are first class applications","Bring your 2D apps to VR's immersive screen","Build immersive 3D experiences for VR using WebXR","Currently in developer preview via sideloading"],isActionCard:!0,icon:"/assets/Publish_Meta.svg",renderDownloadButton:()=>this.renderOculusDownloadButton()}]}static get styles(){return[h`
      * {
        box-sizing: border-box;
      }

      #pp-frame-wrapper {
        width: 100%;
        height: 90vh;
      }
      #pp-frame-content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      #pp-frame-header {
        display: flex;
        flex-direction: column;
        row-gap: .25em;
        padding: 1em;
        padding-bottom: 0;
      }
      #pp-frame-header > * {
        margin: 0;
      }
      #pp-frame-header h1 {
        font-size: 24px;
      }
      #pp-frame-header p {
        font-size: 14px;
      }
      .card-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.05);
        position: relative;
        border-radius: var(--card-border-radius);
      }
      .packaged-tracker {
        height: max-content;
        width: 33%;
        background-color: #E2F2E8;
        align-self: flex-end;
        justify-self: flex-end;
        border-bottom-left-radius: 5px;
        padding: 7px;
        padding-left: 9px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .packaged-tracker p {
        margin: 0;
        text-align: center;
        color: #50BA87;
        font-size: 10px;
        line-height: 12px;
        font-weight: bold;
      }
      .experimental-tracker {
        height: max-content;
        width: 33%;
        background-color: #F2F3FB;
        align-self: flex-end;
        justify-self: flex-end;
        border-bottom-left-radius: 5px;
        padding: 7px;
        padding-left: 9px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .experimental-tracker p {
        margin: 0;
        text-align: center;
        color: #4F3FB6;
        font-size: 10px;
        line-height: 12px;
        font-weight: bold;
      }
      .title-block {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        row-gap: .45em;
        padding: 1em;
      }
      .title-block h2 {
        margin: 0;
        font-size: 24px;
      }
      .factoids {
        width: 100%;
        height: max-content;
        padding-left: 16px;
        margin: 0;
        margin-top: 10px;
      }
      .factoids li {
        font-size: 14px;
      }
      .platform-actions-block {
        align-self: center;
        display: flex;
        justify-content: center;
        row-gap: 10px;
        width: 100%;
      }
      #store-cards {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: .75em;
        padding: 1em;
        overflow-y: auto;
      }
      app-button {
        display: flex;
        justify-content: center;
      }
      .package-button {
        all: unset;
        width: 75%;
        background-color: var(--font-color);
        color: #ffffff;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 50px;
        padding: .75em 1em;
        text-align: center;
        font-weight: bold;
      }
      .package-button:focus, .package-button:hover {
        box-shadow: var(--button-box-shadow);
        border: 1px solid #ffffff;
        outline: 2px solid #000000;
        background-color: rgba(0, 0, 0, 0.75);
        cursor: pointer;
      }
      #apk-tabs {
        display: flex;
        align-items: baseline;
        width: 100%;
        border-bottom: 2px solid var(--primary-color);
        margin-top: 20px;
        margin-bottom: 14px;
      }
      .tab-holder {
        width: 100%;
        display: flex;
        align-items: center;
        gap: .5em;
        justify-content: center;
      }
      .tab-holder p {
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: center;
        margin: 0;
        padding: 10px 0;
        white-space: nowrap;
      }
      .tab-holder p:hover {
        cursor: pointer;
      }
      #other-android{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      #info-tooltip {
        height: 20px
      }
      .selected-apk {
        border-bottom: 5px solid var(--primary-color);
        color: var(--primary-color);
      }

      .unselected-apk {
        border-bottom: 5px solid transparent;
      }
      #pp-form-header {
        display: flex;
        flex-direction: column;
        background-color: #F2F3FB;
        border-top-left-radius: var(--card-border-radius);
        border-top-right-radius: var(--card-border-radius);
        padding: 1em;
        gap: .5em;
      }
      #pp-form-header > img {
        width: 25px;
      }
      #pp-form-header > button {
        all: unset;
      }
      #pp-form-header > button:hover {
        cursor: pointer;
      }
      #pp-form-header-content {
        display: flex;
        gap: 1em;
      }
      #pp-form-header-content img {
        height: 40px;
      }
      #pp-form-header-text {
        display: flex;
        flex-direction: column;
      }
      #pp-form-header-text > * {
        margin: 0;
      }
      #pp-form-header-text h1 {
        font-size: 24px;
        white-space: nowrap;
        line-height: 24px;
      }
      #pp-form-header-text p {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5)
      }

      windows-form, android-form, ios-form, oculus-form {
        height: 100%;
      }

      #form-area {
        height: 100%;
        width: 100%;
        overflow: auto;
        position: relative;
      }

      #form-area[data-store="Android"] {
        padding-top: 0;
        flex-direction: column;
      }

      .noX::part(close-button) {
        display: none;
      }

      .dialog::part(body){
        padding: 0;
        width: 100%;
      }
      .dialog::part(title){
        display: none;
      }
      .dialog::part(panel) {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: var(--card-border-radius);
      }
      .dialog::part(overlay){
        backdrop-filter: blur(10px);
      }
      .dialog::part(close-button__base){
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 1000;
      }

      #unsigned-tooltip{
        position: relative;
      }

      .toolTip {
        visibility: hidden;
        font-size: 14px;
        width: 150px;
        background: var(--font-color);
        color: white;
        font-weight: 500;
        text-align: center;
        border-radius: 6px;
        padding: .75em;
        /* Position the tooltip */
        position: absolute;
        top: 25px;
        left: -100px;
        z-index: 1;
        box-shadow: 0px 2px 20px 0px #0000006c;
      }
      #unsigned-tooltip:hover .toolTip {
        visibility: visible;
      }

      #feedback {
        position: absolute;
        bottom: .5em;
        padding: 0 1em;
        width: 100%;
      }

      .feedback-holder {
        display: flex;
        gap: .5em;
        padding: .5em;
        border-radius: 3px;
        width: 100%;
        word-break: break-word;
      }

      .type-error {
        align-items: flex-start;
        background-color: #FAEDF1;
        border-left: 4px solid var(--error-color);
      }

      .type-success {
        align-items: center;
        background-color: #eefaed;
        border-left: 4px solid var(--success-color);
      }

      .feedback-holder p {
        margin: 0;
        font-size: 14px;
      }

      .error-title {
        font-weight: bold;
      }

      .error-actions {
        display: flex;
        align-items: center;
        gap: 1em;
        margin-top: .25em;
      }

      .error-actions > * {
        all: unset;
        color: var(--font-color);
        font-weight: bold;
        font-size: 14px;
        border-bottom: 1px solid transparent;
      }

      .error-actions > *:hover {
        cursor: pointer;
        border-bottom: 1px solid var(--font-color);
      }

      .error-desc {
        max-height: 175px;
        overflow-y: auto;
        line-height: normal;
      }

      .close_feedback {
        margin-left: auto;
      }

      .close_feedback:hover {
        cursor: pointer;
      }

      #form-extras {
        display: flex;
        justify-content: space-between;
        padding: 1.5em 2em;
        background-color: #F2F3FB;
        border-bottom-right-radius: var(--card-border-radius);
        border-bottom-left-radius: var(--card-border-radius);
      }

      #form-details-block {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      #form-details-block p {
        font-size: 14px;
        color: #808080;
      }

      #form-options-actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5em;
      }

      #generate-submit::part(base) {
        background-color: var(--font-color);
        color: white;
        height: 3em;
        width: 100%;
        border-radius: 50px;
      }

      #form-extras sl-button::part(label){
        font-size: 16px;
        padding: .5em 2em;
        display: flex;
        align-items: center;
      }

      .arrow_link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-weight: bold;
        margin-bottom: .25em;
        font-size: 14px;
      }
      .arrow_link a {
        text-decoration: none;
        border-bottom: 1px solid rgb(79, 63, 182);
        font-size: 1em;
        font-weight: bold;
        margin: 0px 0.5em 0px 0px;
        line-height: 1em;
        color: rgb(79, 63, 182);
      }
      .arrow_link a:visited {
        color: #4F3FB6;
      }
      .arrow_link:hover {
        cursor: pointer;
      }
      .arrow_link:hover img {
        animation: bounce 1s;
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
          transform: translateX(-5px);
        }
        60% {
            transform: translateX(5px);
        }
      }

      #tou-link{
        color: 757575;
        font-size: 14px;
      }

      @media(max-width: 640px){
        #form-extras {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1em;
        }
        #form-details-block {
          flex-direction: column;
          gap: .75em;
          align-items: center;
          text-align: center;
          width: 100%;
        }
        #form-options-actions {
          flex-direction: column;
        }
      }

      @media(min-height: 900px){
        #pp-frame-wrapper {
          width: 100%;
          height: 85vh;
        }
      }

      /* > 1920 */
      ${de(h``)}

      /* 640px - 1023px */
      ${ce(h``)}

      /* 480px - 639px */
      ${pe(h`
        #store-cards {
          display: flex;
          flex-direction: column;
          row-gap: .5em;
          overflow-y: auto;
        }
      `)}
      /* < 480 */
      ${ee(h`
        #store-cards {
          display: flex;
          flex-direction: column;
          row-gap: .5em;
          overflow-y: auto;
        }
        #pp-frame-header{
          margin-bottom: 10px;
          padding: 1em 2em 0em 1em;
        }
        #pp-frame-header h1 {
          font-size: 20px;
          line-height: 20px;
        }
        #pp-frame-header p {
          font-size: 12px;
        }
        #pp-form-header-content img {
          height: 35px;
        }
        #pp-form-header-text h1 {
          font-size: 20px;
          white-space: nowrap;
          line-height: 20px;
        }
        #pp-form-header-text p {
          font-size: 12px;
        }
        #apk-type p {
          font-size: 16px;
        }

        #info-tooltip {
          height: 16px
        }

      `)}

    `]}firstUpdated(){}renderWindowsDownloadButton(){return n`
      <button class="package-button" id="windows-package-button" @click="${()=>this.showWindowsOptions()}">
        Generate Package
      </button>
    `}renderAndroidDownloadButton(){return n`
      <button class="package-button" id="android-package-button" @click="${()=>this.showAndroidOptions()}">
        Generate Package
      </button>
    `}renderiOSDownloadButton(){return n`
      <button class="package-button" id="ios-package-button" @click="${()=>this.showiOSOptions()}">
        Generate Package
      </button>
    `}renderOculusDownloadButton(){return n`
      <button class="package-button" id="oculus-package-button" @click="${()=>this.showMetaOptions()}">
        Generate Package
      </button>
    `}renderForm(){return this.selectedStore==="Windows"?n`<windows-form id="packaging-form" .generating=${this.generating}></windows-form>`:this.selectedStore==="Android"?n`
      <div id="apk-tabs">
        <div class="tab-holder selected-apk">
          <p class="apk-type" @click=${e=>this.toggleApkType(e)}>Google Play</p>
        </div>
        <div class="tab-holder unselected-apk">
          <p class="apk-type" id="other-android" @click=${e=>this.toggleApkType(e)}>Other Android</p>
          <div id="unsigned-tooltip">
            <img src="/assets/new/tooltip.svg" alt="info circle tooltip" />
            <span class="toolTip">
              Generates an unsigned APK.
            </span>
          </div>
        </div>
      </div>
      ${this.isGooglePlay?n`<android-form id="packaging-form" .generating=${this.generating} .isGooglePlayApk=${this.isGooglePlay}></android-form>`:n`<android-form id="packaging-form" .generating=${this.generating} .isGooglePlayApk=${this.isGooglePlay}></android-form>`}`:this.selectedStore==="Meta"?n`<oculus-form id="packaging-form" .generating=${this.generating}>
      </oculus-form>`:n`<ios-form id="packaging-form" .generating=${this.generating}></ios-form>`}showWindowsOptions(){p("windows_store_form_opened",c.ProcessCheckpoint),this.selectedStore="Windows",this.cardsOrForm=!1,this.requestUpdate()}showAndroidOptions(){p("android_store_form_opened",c.ProcessCheckpoint),this.selectedStore="Android",this.cardsOrForm=!1,this.requestUpdate()}toggleApkType(e){let t=this.shadowRoot.querySelector(".selected-apk");t==null||t.classList.replace("selected-apk","unselected-apk"),e.target.parentNode.classList.replace("unselected-apk","selected-apk"),e.target.innerHTML==="Google Play"?this.isGooglePlay=!0:this.isGooglePlay=!1}showiOSOptions(){p("ios_store_form_opened",c.ProcessCheckpoint),this.selectedStore="iOS",this.cardsOrForm=!1,this.requestUpdate()}showMetaOptions(){p("meta_store_form_opened",c.ProcessCheckpoint),this.selectedStore="Meta",this.cardsOrForm=!1,this.requestUpdate()}async generate(e,t){P("analyze-and-package-pwa",`create-${e}-package`,c.CompleteProcess,{url:v()}),P("pwa-builder",`create-${e}-package`,c.CompleteProcess,{url:v()});try{this.generating=!0;const i=await fe(e,t);i&&(this.downloadFileName=`${i.appName}.zip`,i.type==="test"?this.testBlob=i.blob:(this.blob=i.blob,this.readyToDownload=!0,this.downloadPackage())),this.renderSuccessMessage()}catch(i){this.renderErrorMessage(i),P("analyze-and-package-pwa",`create-${e}-package-failed`,c.CancelProcess,{url:v(),error:i}),P("pwa-builder",`create-${e}-package-failed`,c.CancelProcess,{url:v(),error:i})}finally{this.generating=!1}}renderErrorMessage(e){let t=e.response,i=`The site I was testing is: ${v()}
`,o="",a="",s="";if(e.message==="Failed to fetch")o=e.message,s="Our service was unable to package your PWA. Please open an issue on github here: https://github.com/pwa-builder/PWABuilder/issues/new/choose",i+="No stack trace available";else if(this.selectedStore==="Windows"){let d=e.stack;i+=d.slice(d.indexOf(" at ")+1),o=d.split(",")[0],s=d.slice(d.indexOf("Details:")+8,d.indexOf(" at "))}else this.selectedStore==="Android"?(o=t.statusText,i+=t.stack_trace.split("stack:")[1],a=t.stack_trace.split("stack:")[0],s=`Status code: ${t.status}. ${a}`):(o=t.statusText,i+=e.stack,s=`Status code: ${t.status}. ${t.stack_trace}`);let r=n`
      <div class="feedback-holder type-error">
        <img src="/assets/new/stop.svg" alt="invalid result icon" />
        <div class="error-info">
          <p class="error-title">${o}</p>
          <p class="error-desc">${s}</p>
          <div class="error-actions">
            <button class="copy_stack" @click=${()=>this.copyText(i)}>Copy stack trace</button>
            <a href="https://docs.pwabuilder.com/#/builder/faq" target="_blank" rel="noopener">Visit FAQ</a>
          </div>
        </div>
        <img @click=${()=>this.feedbackMessages=[]} class="close_feedback" src="assets/images/Close_desk.png" alt="close icon" />
      </div>
    `;this.feedbackMessages.push(r)}renderSuccessMessage(){this.feedbackMessages.push(n`
      <div class="feedback-holder type-success">
        <img src="/assets/new/valid.svg" alt="successful download icon" />
        <p class="success-desc">${`Congratulations! Your ${this.selectedStore} package has successfully downloaded!`}</p>
        <img @click=${()=>this.feedbackMessages=[]} class="close_feedback" src="assets/images/Close_desk.png" alt="close icon" />
      </div>
    `)}copyText(e){navigator.clipboard.writeText(e)}async downloadPackage(){let e=this.blob||this.testBlob;if(e){let i=this.downloadFileName||"your_pwa.zip";var t=document.createElement("a");t.href=URL.createObjectURL(e),t.setAttribute("download",i),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),this.blob=void 0,this.testBlob=void 0}}renderContentCards(){return this.platforms.map(e=>n`
        <div class="card-wrapper">
          ${e.title!="iOS"?null:n`
            <div class="experimental-tracker">
            <p>Experimental</p>
            </div>`}
          <div class="title-block">
            <img class="platform-icon" src="${e.icon}" alt="platform icon" />
            <h2>${e.title}</h2>
            <!-- TODO need to fix the platform action blocks text spacing for the left. -->
            <div class="platform-actions-block">
              ${e.renderDownloadButton()}
            </div>
            <ul class="factoids">
              ${e.factoids.map(t=>n`<li>${t}</li>`)}
            </ul>
          </div>
        </div>`)}async hideDialog(e){let t=this.shadowRoot.querySelector(".dialog");e.target===t&&(this.blob=void 0,this.generating=!1,this.feedbackMessages=[],await t.hide(),p("publish_pane_closed",c.ProcessCheckpoint),document.body.style.height="unset",this.cardsOrForm=!0)}handleRequestClose(e){this.preventClosing&&e.preventDefault()}backToCards(){this.cardsOrForm=!this.cardsOrForm,this.feedbackMessages=[],p(`left_${this.selectedStore}_form`,c.ProcessCheckpoint)}renderFormFooter(){return this.selectedStore==="Android"?n`
        <div id="form-extras">
          <div id="form-details-block">
            <p>${this.isGooglePlay?"Click below for instructions on how to submit to the Google Play Store.":"Click below for instructions on how to submit to other Android stores."}</p>
            <div class="arrow_link">
              <a @click=${()=>p(`${this.isGooglePlay?this.selectedStore.toLowerCase():`other_${this.selectedStore.toLowerCase()}`}_packaging_instructions_clicked`,c.ProcessCheckpoint)} href=${this.isGooglePlay?"https://docs.pwabuilder.com/#/builder/android":"https://docs.pwabuilder.com/#/builder/other-android"} target="_blank" rel="noopener">Packaging Instructions</a>
              <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>
            </div>
          </div>
          <div id="form-options-actions" class="modal-actions">
            <sl-button  id="generate-submit" type="submit" @click=${()=>this.submitForm()} ?loading="${this.generating}" ?disabled=${this.feedbackMessages.length>0} >
              Download Package
            </sl-button>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/pwa-builder/PWABuilder/blob/master/TERMS_OF_USE.md"
              id="tou-link"
              @click=${()=>p("TOU_clicked",c.ProcessCheckpoint)}
              >Terms of Use</a>
          </div>
        </div>
    `:n`
      <div id="form-extras">
        <div id="form-details-block">
          <p>${this.storeMap[this.selectedStore].packaging_text}</p>
          <div class="arrow_link">
            <a @click=${()=>p(`${this.selectedStore.toLowerCase()}_packaging_instructions_clicked`,c.ProcessCheckpoint)} href=${this.storeMap[this.selectedStore].package_instructions} target="_blank" rel="noopener">Packaging Instructions</a>
            <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>
          </div>
        </div>
        <div id="form-options-actions" class="modal-actions">
          <sl-button  id="generate-submit" type="submit" @click=${()=>this.submitForm()} ?loading="${this.generating}" >
            Download Package
          </sl-button>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/pwa-builder/PWABuilder/blob/master/TERMS_OF_USE.md"
            id="tou-link"
            @click=${()=>p("TOU_clicked",c.ProcessCheckpoint)}
            >Terms of Use</a>
        </div>
      </div>
    `}submitForm(){let e=this.shadowRoot.getElementById("packaging-form"),t=e.getForm();if(t.checkValidity()){let i=e.getPackageOptions();this.generate(this.selectedStore.toLowerCase(),i)}else t.reportValidity()}render(){return n`
      <sl-dialog
        label="Dialog"
        class=${ye({noX:this.preventClosing,dialog:!0})}
        @sl-hide=${e=>this.hideDialog(e)}
        @sl-request-close=${e=>this.handleRequestClose(e)}
        noHeader
      >
        <div id="pp-frame-wrapper">
          <div id="pp-frame-content">
          ${this.cardsOrForm?n`
              <div id="pp-frame-header">
                <h1>Awesome! Your PWA is store ready!</h1>
                <p>You are now ready to ship your PWA to the app stores. Generate store-ready packages for the Microsoft Store, Google Play, iOS and Meta stores.</p>
              </div>
              <div id="store-cards">
                ${this.renderContentCards()}
              </div>
            `:n`
              <div id="pp-form-header">
                <button type="button"><img src="/assets/new/back_for_package_form.svg" alt="back to store cards button" @click=${()=>this.backToCards()} /></button>
                <div id="pp-form-header-content">
                  <img src="${this.storeMap[this.selectedStore].logo}" alt="${this.selectedStore} logo" />
                  <div id="pp-form-header-text">
                    <h1>${this.selectedStore} Package Options</h1>
                    <p>Customize your ${this.selectedStore} app below!</p>
                  </div>
                </div>
              </div>
              <div id="form-area" data-store=${this.selectedStore}>
                ${this.renderForm()}
                <div id="feedback">${this.feedbackMessages.length>0?this.feedbackMessages.map(e=>e):null}</div>
              </div>
              ${this.renderFormFooter()}
            `}
          </div>
        </div>
      </sl-dialog>

    `}};f([l()],g.prototype,"generating",2);f([l()],g.prototype,"cardsOrForm",2);f([l()],g.prototype,"isGooglePlay",2);f([l()],g.prototype,"selectedStore",2);f([l()],g.prototype,"readyToDownload",2);f([l()],g.prototype,"blob",2);f([l()],g.prototype,"testBlob",2);f([l()],g.prototype,"downloadFileName",2);f([l()],g.prototype,"feedbackMessages",2);f([k({type:Boolean})],g.prototype,"preventClosing",2);f([l()],g.prototype,"storeMap",2);g=f([$("publish-pane")],g);var pt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,C=(e,t,i,o)=>{for(var a=o>1?void 0:o?ut(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&pt(t,i,a),a};let O=class extends R{constructor(){super(),this.generating=!1,this.selectedStore="",this.readyToDownload=!1,this.downloadFileName=null,this.feedbackMessages=[],this.platforms=[{title:"Windows",factoids:["PWAs can be indistinguishable from native apps on Windows","PWAs are first class applications","Collect 100% of revenue generated via third party commerce platforms","1B+ store enabled devices"],isActionCard:!0,icon:"/assets/Publish_Windows.svg",renderDownloadButton:()=>this.renderWindowsDownloadButton()}]}static get styles(){return[h`
      * {
        box-sizing: border-box;
      }

      #pp-frame-wrapper {
        width: 100%;
        height: fit-content;
      }
      #pp-frame-content {
        display: flex;
        flex-direction: column;
        height: fit-content;
      }
      #pp-frame-header {
        display: flex;
        flex-direction: column;
        row-gap: .25em;
        padding: 1em;
        padding-bottom: 0;
      }
      #pp-frame-header > * {
        margin: 0;
      }
      #pp-frame-header h1 {
        font-size: 24px;
      }
      #pp-frame-header p {
        font-size: 14px;
      }
      .card-wrapper {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.05);
        position: relative;
        padding: 1em;
        border-radius: var(--card-border-radius);
      }
      .packaged-tracker {
        height: max-content;
        width: 33%;
        background-color: #E2F2E8;
        align-self: flex-end;
        justify-self: flex-end;
        border-bottom-left-radius: 5px;
        padding: 7px;
        padding-left: 9px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .packaged-tracker p {
        margin: 0;
        text-align: center;
        color: #50BA87;
        font-size: 10px;
        line-height: 12px;
        font-weight: bold;
      }
      .experimental-tracker {
        height: max-content;
        width: 33%;
        background-color: #F2F3FB;
        align-self: flex-end;
        justify-self: flex-end;
        border-bottom-left-radius: 5px;
        padding: 7px;
        padding-left: 9px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .experimental-tracker p {
        margin: 0;
        text-align: center;
        color: #4F3FB6;
        font-size: 10px;
        line-height: 12px;
        font-weight: bold;
      }
      .title-block {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        row-gap: .45em;
      }
      .title-block h3 {
        margin: 0;
        font-size: 24px;
      }
      .factoids {
        width: 100%;
        height: max-content;
        padding-left: 16px;
        margin: 0;
        margin-top: 10px;
      }
      .factoids li {
        font-size: 14px;
      }
      .platform-actions-block {
        align-self: center;
        display: flex;
        justify-content: center;
        row-gap: 10px;
        width: 100%;
      }
      #store-cards {
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: .75em;
        padding: 1em;
        overflow-y: auto;
      }
      .package-button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .package-button::part(base) {
        all: unset;
        width: 75%;
        background-color: #ffffff;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        font-size: 14px;
        border-radius: 50px;
        padding: .75em 1em;
        text-align: center;
        font-weight: bold;
      }
      .package-button::part(label){
        padding: 0;
      }
      .package-button:hover {
        cursor: pointer;
      }
      .package-button::part(base):hover{
        box-shadow: var(--button-box-shadow);
      }
      #info-tooltip {
        height: 20px
      }
      .dialog::part(body){
        padding: 0;
        width: 100%;
      }
      .dialog::part(title){
        display: none;
      }
      .dialog::part(panel) {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .dialog::part(overlay){
        backdrop-filter: blur(10px);
      }
      .dialog::part(close-button__base){
        position: absolute;
        top: 5px;
        right: 5px;
      }

      #feedback {
        position: absolute;
        bottom: .5em;
        padding: 0 1em;
        width: 100%;
      }

      .feedback-holder {
        display: flex;
        gap: .5em;
        padding: .5em;
        border-radius: 3px;
        width: 100%;
        word-break: break-word;
      }

      .type-error {
        align-items: flex-start;
        background-color: #FAEDF1;
        border-left: 4px solid var(--error-color);
      }

      .type-success {
        align-items: center;
        background-color: #eefaed;
        border-left: 4px solid var(--success-color);
      }

      .feedback-holder p {
        margin: 0;
        font-size: 14px;
      }

      .error-desc {
        max-height: 175px;
        overflow-y: auto;
        line-height: normal;
      }

      .error-title {
        font-weight: bold;
      }

      .error-actions {
        display: flex;
        align-items: center;
        gap: 1em;
        margin-top: .25em;
      }

      .error-actions > * {
        all: unset;
        color: black;
        font-weight: bold;
        font-size: 14px;
        border-bottom: 1px solid transparent;
      }

      .error-actions > *:hover {
        cursor: pointer;
        border-bottom: 1px solid black;
      }

      .close_feedback {
        margin-left: auto;
      }

      .close_feedback:hover {
        cursor: pointer;
      }




      /* > 1920 */
      ${de(h``)}

      /* 640px - 1023px */
      ${ce(h``)}

      /* 480px - 639px */
      ${pe(h`
        #store-cards {
          display: flex;
          flex-direction: column;
          row-gap: .5em;
          overflow-y: auto;
        }
      `)}
      /* < 480 */
      ${ee(h`
        #store-cards {
          display: flex;
          flex-direction: column;
          row-gap: .5em;
          overflow-y: auto;
        }
        #pp-frame-header{
          margin-bottom: 10px;
          padding: 1em 2em 0em 1em;
        }
        #pp-frame-header h1 {
          font-size: 20px;
          line-height: 20px;
        }
        #pp-frame-header p {
          font-size: 12px;
        }

      `)}
    `]}firstUpdated(){}renderWindowsDownloadButton(){return n`
      <sl-button class="package-button" ?loading=${this.generating} id="test-package-button"
          @click="${this.generateWindowsTestPackage}" .secondary="${!0}">
        Download Test Package
      </sl-button>
    `}async generateWindowsTestPackage(){p("windows_test_package_clicked",c.ProcessCheckpoint);let e=N();e.isGenerated&&(e=await H());const t=me(e.manifest);await this.generate("windows",t)}async generate(e,t){P("analyze-and-package-pwa",`create-${e}-package`,c.CompleteProcess,{url:v()}),P("pwa-builder",`create-${e}-package`,c.CompleteProcess,{url:v()});try{this.generating=!0;const i=await fe(e,t);i&&(this.downloadFileName=`${i.appName}.zip`,i.type==="test"?this.testBlob=i.blob:(this.blob=i.blob,this.readyToDownload=!0,this.downloadPackage())),this.renderSuccessMessage()}catch(i){console.error(i),this.renderErrorMessage(i),P("analyze-and-package-pwa",`create-${e}-package-failed`,c.CancelProcess,{url:v(),error:i}),P("pwa-builder",`create-${e}-package-failed`,c.CancelProcess,{url:v(),error:i})}finally{this.generating=!1}}renderErrorMessage(e){let t=e.stack,i=`The site I was testing is: ${v()}
`;i+=t.slice(t.indexOf(" at ")+1);let o=t.split(",")[0],a=t.slice(t.indexOf("Details:")+8,t.indexOf(" at ")),s=n`
      <div class="feedback-holder type-error">
        <img src="/assets/new/stop.svg" alt="invalid result icon" />
        <div class="error-info">
          <p class="error-title">${o}</p>
          <p class="error-desc">${a}</p>
          <div class="error-actions">
            <button class="copy_stack" @click=${()=>this.copyText(i)}>Copy stack trace</button>
            <a href="https://docs.pwabuilder.com/#/builder/faq" target="_blank" rel="noopener">Visit FAQ</a>
          </div>
        </div>
        <img @click=${()=>this.feedbackMessages=[]} class="close_feedback" src="assets/images/Close_desk.png" alt="close icon" />
      </div>
    `;this.feedbackMessages.push(s)}renderSuccessMessage(){this.feedbackMessages.push(n`
      <div class="feedback-holder type-success">
        <img src="/assets/new/valid.svg" alt="successful download icon" />
        <p class="success-desc">${`Congratulations! Your ${this.selectedStore} test package has successfully downloaded!`}</p>
        <img @click=${()=>this.feedbackMessages=[]} class="close_feedback" src="assets/images/Close_desk.png" alt="close icon" />
      </div>
    `)}copyText(e){navigator.clipboard.writeText(e)}async downloadPackage(){let e=this.blob||this.testBlob;if(e){let i=this.downloadFileName||"your_pwa.zip";var t=document.createElement("a");t.href=URL.createObjectURL(e),t.setAttribute("download",i),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),this.blob=void 0,this.testBlob=void 0}}renderContentCards(){return this.platforms.map(e=>n`
        <div class="card-wrapper">
          ${e.title!="iOS"?null:n`
            <div class="experimental-tracker">
            <p>Experimental</p>
            </div>`} 
          <div class="title-block">
            <img class="platform-icon" src="${e.icon}" alt="platform icon" />
            <h3>${e.title}</h3>
            <!-- TODO need to fix the platform action blocks text spacing for the left. -->
            <div class="platform-actions-block">
              ${e.renderDownloadButton()}
            </div>
            <ul class="factoids">
              ${e.factoids.map(t=>n`<li>${t}</li>`)}
            </ul>
          </div>
        </div>`)}async hideDialog(e){let t=this.shadowRoot.querySelector(".dialog");e.target===t&&(this.blob=void 0,this.generating=!1,await t.hide(),p("test_publish_pane_closed",c.ProcessCheckpoint),document.body.style.height="unset")}render(){return n`
      <sl-dialog class="dialog" @sl-show=${()=>document.body.style.height="100vh"} @sl-hide=${e=>this.hideDialog(e)} noHeader>
        <div id="pp-frame-wrapper">
          <div id="pp-frame-content">
            <div id="pp-frame-header">
              <h1>Download Test Package</h1>
              <p>If you want to see what your app would look like in its current state, use the test package button below!</p>
            </div>
            <div id="store-cards">
              ${this.renderContentCards()}
            </div>
            
            <div id="feedback">${this.feedbackMessages.length>0?this.feedbackMessages.map(e=>e):null}</div>
          </div>
        </div>
      </sl-dialog>
    `}};C([l()],O.prototype,"generating",2);C([l()],O.prototype,"selectedStore",2);C([l()],O.prototype,"readyToDownload",2);C([l()],O.prototype,"blob",2);C([l()],O.prototype,"testBlob",2);C([l()],O.prototype,"downloadFileName",2);C([l()],O.prototype,"feedbackMessages",2);O=C([$("test-publish-pane")],O);
//# sourceMappingURL=test-publish-pane.85f306d6.js.map

import{i as p,a as h,m as x,l as g,s as u,r as s,A as d,R as f,x as l,e as b}from"./index.096edba8.js";import"./arrow-link.b865ef08.js";var w=p`
  #congrats-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 101px;
  }
  #header h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;
    text-align: center;
  }
  #header h2 {
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #292c3a;
    font-weight: 400;
  }
  .strike-through {
    text-decoration: line-through;
    text-decoration-color: var(--error-color);
    text-decoration-thickness: 5px;
  }
  .username {
    color: #4f3fb6;
  }
  #content-holder {
    flex-direction: column;
    justify-content: center;
    display: flex;
    padding: 0 52px;
  }
  #token-id {
    display: grid;
    grid-auto-rows: 165px;
    grid-auto-columns: 82px;
    grid-row-gap: 95px;
    width: 719px;
    height: 691px;
    margin: 20px 0;
    background-image: url(/assets/token_code_bg_image.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    position: relative;
  }
  .site-card {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 256px;
    height: 86px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    margin: 26px 0 0 25px;
  }
  .site-icon {
    display: grid;
    width: 62px;
    height: 62px;
    background: #ffffff;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }
  .site-icon img {
    width: 38.26px;
    height: 36.65px;
    place-self: center;
  }
  .site-desc {
    font-weight: bold;
    color: #292c3a;
  }
  .title {
    font-size: 24px;
    width: 145px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .url {
    font-size: 14px;
    width: 145px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .token-input-container {
    display: flex;
    align-items: center;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid #4f3fb6;
    box-shadow: 2px 2px 20px rgba(79, 63, 182, 0.4);
    border-radius: 4px;

    position: absolute;
    right: 165px;
    top: 250px;
  }
  .token-input-container sl-input::part(base) {
    min-width: 300px;
    width: 100%;
    height: 50px;
    background: #ffffff;
    border: 1px;
    border-radius: 4px;
    background: #ffffff;
    border: 1px dashed #000000;
    border-radius: 4px;
    display: flex;
    align-items: center;

  }

  #code::part(input){
    height: 50px;
    font-size: 14px;
    font-weight: 500;

    padding: 0 15px;
    text-align: center;
  }
  
  .copy-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #4f3fb6;
    border-radius: 4px;
    margin-left: 5px;
    gap: 5px;
    padding: 10px 5px;
  }

  .copy-code img {
    width: 25px;
  }

  .copy-button:hover {
    cursor: pointer;
  }

  .copy-button p{
    margin: 0;
    font-size: 8px;
    white-space: nowrap;
  }

  .sign-out {
		font-size: 16px;
		color: var(--font-color);
		margin: 0;
    margin-bottom: 20px;
	}

	.sign-out a {
		font-size: 16px;
		color: var(--primary-color);
		margin: 0;
		text-decoration: none;
		font-weight: 700;
	}

	.sign-out a:hover {
		text-decoration: underline;
    cursor: pointer;
	}

  #next-steps {
    width: 719px;
    height: fit-content;
    border-radius: 10px;
    background-color: #fff;
    align-self: center;
    font-size: 14px;
  }
  #next-steps h3 {
    font-family: Hind;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #4f3fb6;
    margin: 0;
    padding: 15px 0px 0px 10px;
  }
  #next-steps h4 {
    color: #4f3fb6;
  }
  arrow-link {
    margin: 10px 0;
  }
  .steps-list {
    padding: 0px 25px 0px 30px;
    margin-bottom: 0;
  }
  .steps-list li {
    padding: 10px 0;
  }
  .steps-list a {
    color: black;
    text-decoration: underline;
  }
  .steps-list a:hover,
  .steps-list a:hover {
    cursor: pointer;
    color: #4f3fb6;
  }
  #publishing-instructions {
    padding: 0px 0px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }

  @media screen and (max-width: 479px) {
    #code {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .token-input-container sl-input::part(base) {
      height: 40px;
    }
    #code::part(input) {
      font-size: 12px;
    }
    .copy-button {
      width: 45px;
      height: 40px;
    }
    .copy-button p {
      display: none;
    }
    .title {
      width: 100px;
    }
    .url {
      width: 100px;
      font-size: 11px;
    }
    
  }

  @media screen and (min-width: 1199px) {
    #header h1 {
      max-width: 900px;
    }
  }
  /* screen at pixels 479 and 639 seem to not take breakpoint styling -- bug */
  ${h(p`
    #congrats-wrapper {
      padding: 30px;
    }
    #content-holder {
      padding: 0;
    }
    #token-id {
      width: 345px;
      height: 519px;
      background-image: url(/assets/congrats-manny-mobile.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      grid-auto-rows: 100px;
      grid-auto-columns: 22px;
      row-gap: 108px;
      align-self: center;
    }
    .token-input-container {
      width: 300px;
    }
    .token-input-container {
      right: 12px;
      top: 205px;
    }
    .token-input-container sl-input::part(base) {
      min-width: 250px;
    }
    .token-input-container sl-input::part(input) {
      text-align: center;
      font-size: 12px;
    }
    .site-card {
      width: 185px;
      height: 60px;
      margin: 10px 0 0 10px;
    }
    .title {
      font-size: 18px;
    }
    .url {
      font-size: 11px;
    }
    .site-icon {
      width: 45px;
      height: 45px;
    }
    #next-steps {
      width: 345px;
      font-size: 16px;
    }
    #publishing-instructions {
      flex-direction: column;
      gap: 0;
      align-items: flex-start;
    }
  `)}
  ${x(p`
    #congrats-wrapper {
      padding: 40px 50px;
    }
    #content-holder {
      padding: 0 25px;
    }
    #token-id {
      width: 469px;
      height: 447px;
      grid-auto-rows: 125px;
      grid-auto-columns: 35px;
      row-gap: 30px;
    }

    .token-input-container {
      right: 46px;
      top: 160px;
    }

    sl-input {
      height: fit-content;
    }

    .token-input-container sl-input::part(base){
      height: 35px;
    }
    #code::part(input){
      height: 35px;
    }
    .copy-button {
      height: 35px
    }
    .copy-button img {
      height: 25px
    }
    
    .site-card {
      width: 215px;
      height: 72px;
      margin: 10px 0px 0px 10px;
    }
    .title {
      font-size: 18px;
    }
    .url {
      width: 125px;
      font-size: 11px;
    }
    .site-icon {
      width: 50px;
      height: 50px;
    }
    #next-steps {
      width: 469px;
    }
  `)}
${g(p`
    #congrats-wrapper {
      padding: 50px 32px;
    }
    #token-id {
      width: 570px;
      height: 548px;
      grid-auto-rows: 150px;
      align-self: center;
      grid-auto-columns: 82px;
      row-gap: 45px;
    }
    .site-card {
      width: 248px;
      height: 78px;
    }
    .token-input-container {
      right: 90px;
      top: 195px;
    }
    #next-steps {
      width: 570px;
      align-self: center;
    }
  `)}
`,m=Object.defineProperty,k=Object.getOwnPropertyDescriptor,v=(t,i,o,n)=>{for(var e=n>1?void 0:n?k(i,o):i,r=t.length-1,a;r>=0;r--)(a=t[r])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&m(i,o,e),e};let c=class extends u{constructor(){super(...arguments),this.paramsData=null}static get styles(){return[w]}async onBeforeEnter(t){this.paramsData=t.params,console.log(this.paramsData)}firstUpdated(){s("free-token-page-loaded",d.CompleteProcess)}copyCode(){let t=this.shadowRoot.getElementById("code"),i=this.shadowRoot.getElementById("tool-tip"),o=t.value;navigator.clipboard.writeText(o).then(()=>{setTimeout(()=>{i.removeAttribute("open")},2e3)}),s("copy_code_button_clicked",d.ProcessCheckpoint)}trackLinkClick(t){s(`${t}_link_clicked`,d.ProcessCheckpoint)}async signOut(){try{window.authModule?(await window.authModule.signOut(),s("sign_out_button_clicked",d.ProcessCheckpoint),this.requestUpdate()):f.go("/freeToken")}catch(t){console.log(t,"Authentication Error")}}render(){var t,i,o,n,e,r,a;return l`
      <div id="congrats-wrapper">
        <div id="header">
          <h1>
            <span class="username"> Congratulations ${(t=this.paramsData)==null?void 0:t.username}!</span> Use the code below to get a <span class="strike-through">$19</span> free Windows developer account on the Microsoft Store
          </h1>
          <h2>
            Microsoft Store is the best place to find apps on Windows. Find your success in the Microsoft Store!
          </h2>
        </div>
        <div id="content-holder">
          <div id="token-id">
          ${(i=this.paramsData)!=null&&i.appurl?l`
            <div class="site-card">
              <div class="site-icon">
                <img src=${(o=this.paramsData)==null?void 0:o.appicon} alt="website icon"/>
              </div>
              <div class="site-desc">
                <div class="title">${(n=this.paramsData)==null?void 0:n.appname}</div>
                <div class="url">${(e=this.paramsData)==null?void 0:e.appurl}</div>
              </div>
            </div>`:null}
            <div class="token-input-container">
              <div style="display: flex; width: 100%; justify-content: space-evenly">
                <sl-input id="code" value=${(r=this.paramsData)==null?void 0:r.token}></sl-input>
                <sl-tooltip id="tool-tip" content="Copied!" trigger="click">
                  <button class="copy-button" @click=${()=>this.copyCode()}>
                    <img src="/assets/copy_icon_darkgrey.svg" alt="Click here to copy your token code"/>
                    <p>Copy code</p>
                  </button>
                </sl-tooltip>
              </div>
            </div>
          </div>
          <p class="sign-out">You are signed in as ${(a=this.paramsData)==null?void 0:a.email} <a @click=${this.signOut}>Sign out</a></p>
          <div id="next-steps">
            <h3>Next Steps</h3>
            <ol class="steps-list">
              <li>
                <strong>Create a developer account and reserve your app name:</strong> Use the code above to create a free developer account on Partner Center Dashboard and reserve your app on Microsoft Store.
                <a aria-label="Click here to learn how to open a developer account" href="https://learn.microsoft.com/en-us/windows/apps/publish/partner-center/open-a-developer-account" target="_blank" rel="noopener" @click=${()=>this.trackLinkClick("partner_center_account_setup")}>Click here for full instruction on creating a developer account</a>
              </li>
              <li>
                <strong>Package Your App:</strong>
                Go back to
                <a aria-label="Click here to visit PWABuilder homepage" href="/" target="_blank" rel="noopener" @click=${()=>this.trackLinkClick("pwabuilder_homepage")}>PWABuilder</a>
                and generate package for Windows. You will be prompted to provide some options for your app. Fill these out with the three values you got from reserving your app name.
              </li>
              <li>
                <strong>Submitting Your PWA:</strong>
                Navigate back to <a aria-label="Click here to visit Partner Center Dashboard" href="https://partner.microsoft.com/dashboard" target="_blank" rel="noopener" @click=${()=>this.trackLinkClick("partner_center_dashboard")}>Partner Center Dashboard</a>
                and drag and drop both the packages you downloaded from PWABuilder into your submission. It usually takes 24 to 48 hours for your app to be reviewed, after which, it will be available on the Microsoft Store.
              </li>
            </ol>
             <!-- Need link to publishing instructions -->
            <div id="publishing-instructions">
              <arrow-link .text=${"Detailed Publishing Instructions"} .link=${"https://docs.pwabuilder.com/#/builder/windows"}></arrow-link>
              <arrow-link .text=${"PWABuilder"} .link=${"https://pwabuilder.com"}></arrow-link>
            </div>
          </div>
        </div>
      </div>
    `}};c=v([b("token-congratulations")],c);export{c as TokenCongratulations};
//# sourceMappingURL=token-congratulations.80862a9d.js.map

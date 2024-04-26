import{i as l,t as d,n as k,L as _,e as $,s as y,M as C,x as h,G as I,J as m,A as f,I as v,C as E}from"./index.655a240e.js";const w=l`
  .hidden {
    display: none;
    visibility: none;
  }
`,O=l`
  @media screen and (max-width: 479px) {
    .hidden-sm {
      display: none;
      visibility: none;
    }
  }
`,P=l`
  @media screen and (min-width: 480px) and (max-width: 639px) {
    .hidden-med {
      display: none;
      visibility: none;
    }
  }
`,S=l`
  @media screen and (min-width: 640px) and (max-width: 1023px) {
    .hidden-lrg {
      display: none;
      visibility: none;
    }
  }
`,z=l`
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    .hidden-xlrg {
      display: none;
      visibility: none;
    }
  }
`,F=l`
  @media screen and (min-width: 1366px) and (max-width: 1919px) {
    .hidden-xxlrg {
      display: none;
      visibility: none;
    }
  }
`,G=l`
  @media screen and (min-width: 1920px) {
    .hidden-xxxlrg {
      display: none;
      visibility: none;
    }
  }
`;l`
  ${w}
  ${O}
  ${P}
  ${S}
  ${z}
  ${F}
  ${G}
`;var M=Object.defineProperty,T=Object.getOwnPropertyDescriptor,g=(t,e,n,r)=>{for(var i=r>1?void 0:r?T(e,n):e,s=t.length-1,c;s>=0;s--)(c=t[s])&&(i=(r?c(e,n,i):c(i))||i);return r&&i&&M(e,n,i),i};let u=class extends y{constructor(){super(),this.inputId="",this.buttonText="Choose File"}static get styles(){return[l`
        [appearance='lightweight'] {
          box-shadow: none;
        }
        :hover {
          background-color: transparent;
        }
      `,w,C]}get input(){return this.fileInput}get value(){var t;return(t=this.fileInput)==null?void 0:t.value}get files(){var t;return((t=this.fileInput)==null?void 0:t.files)||void 0}render(){return h`
      <div>
        <fast-button
          class="file-button"
          appearance="lightweight"
          @click=${this.clickModalInput}
        >
          ${this.buttonText}
        </fast-button>
        <input
          id="${I(this.inputId)}"
          class="file-input hidden"
          type="file"
          aria-hidden="true"
          @change=${this.handleModalInputFileChosen}
        />
      </div>
    `}clickModalInput(){var t;(t=this.fileInput)==null||t.click()}handleModalInputFileChosen(){var t,e,n;if(this.input){const r=new CustomEvent("input-change",{detail:{input:this.input},composed:!0,bubbles:!0});this.buttonText=(n=(e=(t=this.input)==null?void 0:t.files)==null?void 0:e.item(0))==null?void 0:n.name,this.dispatchEvent(r),this.requestUpdate()}}clearInput(){this.buttonText="Choose File",this.fileInput&&(this.fileInput.files=null)}};g([k({type:String,attribute:!0})],u.prototype,"inputId",2);g([_(".file-input")],u.prototype,"fileInput",2);g([d()],u.prototype,"buttonText",2);u=g([$("app-file-input")],u);var B=Object.defineProperty,D=Object.getOwnPropertyDescriptor,p=(t,e,n,r)=>{for(var i=r>1?void 0:r?D(e,n):e,s=t.length-1,c;s>=0;s--)(c=t[s])&&(i=(r?c(e,n,i):c(i))||i);return r&&i&&B(e,n,i),i};const a=v.imageGenerator,b=[{label:a.windows11,value:"windows11"},{label:a.android,value:"android"},{label:a.ios,value:"ios"}],x=E.imageGeneratorUrl;function j(t,e){return!t||!e?!1:t.toString()===e.toString()}let o=class extends y{constructor(){super(),this.platformSelected=b.map(()=>!0),this.padding=.3,this.colorOption="transparent",this.color="#ffffff",this.selectAllState=!1,this.generating=!1,this.generateEnabled=!1}static get styles(){return[l`
        :host {
          --loader-size: 1.8em;
          --sl-input-height-medium: 1.5rem;
        }

        h1 {
          font-size: var(--xlarge-font-size);
          line-height: 48px;
          letter-spacing: -0.015em;
          margin: 0;
        }

        h2 {
          font-size: var(--large-font-size);
        }

        p {
          font-size: var(--font-size);
        }

        small {
          display: block;
          font-size: 10px;
        }


        app-file-input:hover {
          cursor: pointer;
        }

        sl-button {
          height: 24px;
          padding: 8px 0;
        }

        sl-button::part(base) {
          margin: 0 16px;
        }

        #image-generator-card {
          background: #ffffff;
          padding: 16px;
        }

        #submit {
          margin-top: 8px;
        }

        .background {
          background-color: var(--primary-color);
          color: var(--font-color);
        }

        .main {
          padding: 32px;
        }

        input[type="number"] {
          width: 30%;
          font-size: 22px;
        }
        small {
          margin-top: 10px;
        }
        .color-radio, .platform-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .color-radio >*, .platform-list >* {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        input[type="radio"] {
          border: 0px;
          width: 22px;
          height: 22px;
          margin: 0;
          accent-color: var(--primary-color);
        }

        input[type="radio"]:hover {
          cursor: pointer;
        }

        input[type="checkbox"] {
          border: 0px;
          width: 22px;
          height: 22px;
          margin: 0;
          accent-color: var(--primary-color);
        }

        input[type="checkbox"]:hover {
          cursor: pointer;
        }
      `]}firstUpdated(){m("image-generation","page-loaded",f.StartProcess)}render(){return h`
      <div>
        <app-header></app-header>
        <main id="main" class="main background">
          <div id="image-generator-card">
            <h1>${a.image_generator}</h1>
            <p>${a.image_generator_text}</p>
            <form id="imageFileInputForm" enctype="multipart/form-data" class="form">
              <section class="form-left">
                <div class="image-section">
                  <h2>${a.input_image}</h2>
                  <p>${a.input_image_help}</p>
                  <app-file-input @input-change=${this.handleInputChange}></app-file-input>
                </div>
                <div class="padding-section">
                  <label for="padding"><h2>${a.padding}</h2></label>
                  <input 
                    id="padding"
                    name="padding" 
                    type="number" 
                    max="1" 
                    min="0" 
                    step="0.1" 
                    value=${this.padding}
                    @change=${this.handlePaddingChange} required></input>
                  <small>${a.padding_text}</small>
                </div>
                <div class="color-section">
                  <h2>${a.background_color}</h2>
                  <div class="color-radio">
                    <div class="radio-div">
                      <input type="radio" id="best-guess-radio" name="colorOption" value="best guess" @change=${this.handleBackgroundRadioChange} ?checked=${this.colorOption==="best guess"} />
                      <label for="best-guess-radio">${a.best_guess}</label>
                    </div>

                    <div class="radio-div">
                      <input type="radio" id="transparent-radio" name="colorOption" value="transparent" @change=${this.handleBackgroundRadioChange} ?checked=${this.colorOption==="transparent"} />
                      <label for="transparent-radio">${a.transparent}</label>
                    </div>

                    <div class="radio-div">
                      <input type="radio" id="custom-radio" name="colorOption" value="custom" @change=${this.handleBackgroundRadioChange} ?checked=${this.colorOption==="custom"} />
                      <label for="custom-radio">${a.custom_color}</label>
                    </div>
                  </div>
                  ${this.renderColorPicker()}
                </div>
              </section>
              <section class="form-right platforms-section">
                <h4>${a.platforms}</h4>
                <p>${a.platforms_text}</p>
                <div role="group" class="platform-list">
                  ${this.renderPlatformList()}
                </div>
              </section>
              <section id="submit" class="form-bottom">
                <sl-button id="generateButton" class="primary" ?disabled=${!this.generateEnabled||this.generating}
                  @click=${this.generateZip}
                  ?loading=${this.generating}>
                  ${v.button.generate}

                </sl-button>

                ${this.renderError()}
              </section>
            </form>
          </div>
        </main>
      </div>
    `}renderPlatformList(){return b.map((t,e)=>h`
      <div class="checkbox-div">
        <input 
          type="checkbox"
          name="platform" 
          id="${`${t.value}-checkbox`}"
          value="${t.value}" 
          ?checked=${this.platformSelected[e]}
          @change=${this.handleCheckbox} 
          data-index=${e} />
        <label for="${t.value}-checkbox">${t.label}</label>
      </div>
      `)}renderColorPicker(){if(this.colorOption==="custom")return h`<div class="custom-color-block">
  <label for="theme-custom-color">${v.values.custom}</label>
  <input type="color" id="theme-custom-color" name="color" .value=${this.color}
    @change=${this.handleThemeColorInputChange} />
</div>`}renderError(){return this.error?h`<p style="font-size: 16px; color: red;">${this.error}</p>`:h``}handleInputChange(t){m("image-generation","choose-file-clicked",f.ProcessCheckpoint);const e=t.detail.input;e.files&&(this.files=e.files),this.checkGenerateEnabled()}handlePaddingChange(t){let n=t.target.value;this.padding=parseFloat(n)}handleCheckbox(t){const e=t.target,n=e.dataset.index;this.platformSelected[n]=e.checked,this.checkGenerateEnabled()}handleBackgroundRadioChange(t){const e=t.target.value;this.colorOption=e,this.checkGenerateEnabled()}handleThemeColorInputChange(t){const e=t.target;this.color=e.value,this.checkGenerateEnabled()}async generateZip(){m("image-generation","generate-zip-clicked",f.CompleteProcess);const t=this.files?this.files[0]:null;if(!t){const e="No file available to generate zip";console.error(e),this.error=e;return}try{this.generateEnabled=!1,this.generating=!0;const e=new FormData,n=this.colorOption==="custom"?this.color:this.colorOption==="best guess"?"":"transparent";e.append("fileName",t),e.append("padding",String(this.padding)),e.append("color",n),b.filter((s,c)=>this.platformSelected[c]).forEach(s=>e.append("platform",s.value));const i=await(await fetch(`${x}/api/image`,{method:"POST",body:e})).json();if(i.Message)throw new Error("Error from service: "+i.Message);this.downloadZip(`${x}${i.Uri}`)}catch(e){console.error(e),this.error=e.message}finally{this.generating=!1,this.generateEnabled=!0}}downloadZip(t){const e=document.createElement("a");e.href=t,e.download="",e.click()}checkGenerateEnabled(){return this.generateEnabled=this.files!==void 0&&this.platformSelected.reduce((t,e)=>t||e),this.generateEnabled}};p([d({hasChanged:j})],o.prototype,"platformSelected",2);p([d()],o.prototype,"files",2);p([d()],o.prototype,"padding",2);p([d()],o.prototype,"colorOption",2);p([d()],o.prototype,"color",2);p([d()],o.prototype,"selectAllState",2);p([d()],o.prototype,"generating",2);p([d()],o.prototype,"generateEnabled",2);p([d()],o.prototype,"error",2);o=p([$("image-generator")],o);export{o as ImageGenerator};
//# sourceMappingURL=image-generator.6ee0b752.js.map

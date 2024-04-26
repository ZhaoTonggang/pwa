import{s as n,i as d,K as c,R as i,x as h,e as u}from"./index.096edba8.js";import"./test-publish-pane.85f306d6.js";import"./arrow-link.b865ef08.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,m=(r,e,l,t)=>{for(var s=t>1?void 0:t?g(e,l):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(t?a(e,l,s):a(s))||s);return t&&s&&f(e,l,s),s};let p=class extends n{static get styles(){return[d`
        * {
          box-sizing: border-box;
          font-family: inherit;
        }

        app-header::part(header) {
          position: sticky;
          top: 0;
        }


        #report-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          row-gap: 1.5em;
          align-items: center;
          background-color: #f2f3fb;
          padding: 20px;
        }
        #content-holder {
          max-width: 1300px;
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          gap: 1em;
        }

        .skeleton-shapes sl-skeleton {
          display: inline-flex;
          width: 50px;
          height: 50px;
        }

        .skeleton-shapes .square::part(indicator) {
          --border-radius: var(--sl-border-radius-medium);
        }

        .skeleton-shapes .circle::part(indicator) {
          --border-radius: var(--sl-border-radius-circle);
        }

        .skeleton-shapes .triangle::part(indicator) {
          --border-radius: 0;
          clip-path: polygon(50% 0, 0 100%, 100% 100%);
        }

        .skeleton-shapes .cross::part(indicator) {
          --border-radius: 0;
          clip-path: polygon(
            20% 0%,
            0% 20%,
            30% 50%,
            0% 80%,
            20% 100%,
            50% 70%,
            80% 100%,
            100% 80%,
            70% 50%,
            100% 20%,
            80% 0%,
            50% 30%
          );
        }

        .skeleton-shapes .comment::part(indicator) {
          --border-radius: 0;
          clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
        }

        .skeleton-shapes sl-skeleton:not(:last-child) {
          margin-right: 0.5rem;
        }

      `]}async firstUpdated(){const e=new URLSearchParams(location.search).get("site");e?await c(e)?this.openPublishModal():i.go(`/reportcard?site=${e}`):i.go("/")}delay(r){return new Promise(e=>setTimeout(e,r))}async openPublishModal(){await this.shadowRoot.querySelector("publish-pane").shadowRoot.querySelector(".dialog").show()}render(){return h`
      <app-header></app-header>
      <div id="report-wrapper">
      <div class="skeleton-shapes">
        <sl-skeleton effect="pulse" class="square"></sl-skeleton>
        <sl-skeleton effect="pulse" class="circle"></sl-skeleton>
        <sl-skeleton effect="pulse" class="triangle"></sl-skeleton>
        <sl-skeleton effect="pulse" class="cross"></sl-skeleton>
        <sl-skeleton effect="pulse" class="comment"></sl-skeleton>
      </div>
      </div>

      <publish-pane .preventClosing=${!0}></publish-pane>
    `}};p=m([u("powerplatform-publish")],p);export{p as AppReport};
//# sourceMappingURL=powerplatform-publish.737ab374.js.map

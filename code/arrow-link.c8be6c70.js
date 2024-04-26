import{n as c,e as p,s as h,i as w,r as f,A as m,x as _}from"./index.655a240e.js";var x=Object.defineProperty,k=Object.getOwnPropertyDescriptor,l=(t,e,n,o)=>{for(var r=o>1?void 0:o?k(e,n):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(o?s(e,n,r):s(r))||r);return o&&r&&x(e,n,r),r};let a=class extends h{constructor(){super(),this.link="",this.text=""}static get styles(){return[w`
      .arrow_anchor {
        font-size: var(--arrow-link-font-size);
        font-weight: bold;
        margin: 0px 0.5em 0px 0px;
        line-height: 1em;
        color: var(--primary-color);
        display: flex;
        column-gap: 10px;
        width: fit-content;
        text-decoration: none;
      }

      .arrow_anchor p {
        margin: 0;
        border-bottom: 1px solid #4f3fb6;
      }

      .arrow_anchor:visited {
        color: var(--primary-color);
      }

      .arrow_anchor:hover {
        cursor: pointer;
      }

      .arrow_anchor:hover img {
        animation: bounce 1s;
      }

      @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateX(-5px);
          }
          60% {
            transform: translateX(5px);
          }
      }
        `]}trackLinkClick(t){f(`${t}_link_clicked`,m.ProcessCheckpoint)}render(){return _`
      <a
        class="arrow_anchor"
        href=${this.link}
        target="_blank" 
        rel="noopener" 
        aria-label="${this.text}, will open in separate tab"
        @click=${()=>this.trackLinkClick(this.text.toLowerCase().split("").join("_"))}
      >
        <p class="arrow_link">${this.text}</p>
        <img
          class="arrow"
          src="/assets/new/arrow.svg"
          alt="arrow"
        />
    </a>
    `}};l([c({type:String})],a.prototype,"link",2);l([c({type:String})],a.prototype,"text",2);a=l([p("arrow-link")],a);
//# sourceMappingURL=arrow-link.c8be6c70.js.map

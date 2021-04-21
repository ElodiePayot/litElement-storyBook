import { html, LitElement } from 'lit-element';

import myElementStyles from './my-element.css';

class MyElement extends LitElement {

  constructor(){
    super();
    this.propTest = '💔';
  }

  static get properties() {
    return {
      propTest: {
        type: String
      },
    };
  }

  static get styles() {
		return [myElementStyles];
  }
  
  render() {
    return html`
      <el-typography component="h1">LitElement / Webpack starterpack<br>for developers who <span>${this.propTest}</span> CSS</el-typography>
      <slot></slot>
    `;
  }
  
}

window.customElements.define('my-element', MyElement);
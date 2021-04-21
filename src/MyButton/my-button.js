import { html, LitElement } from 'lit-element';

import myButtonStyles from './my-button.css';

class myButton extends LitElement {

  constructor(){
    super();
    this.size="";
    this.background="primary";
  }

  static get properties() {
    return {
      size: {
        type: String
      },
      background: {
        type: String
      },
    };
  }

  static get styles() {
		return [myButtonStyles];
  }
  
  render() {
    return html`
      <button background=${this.background} size=${this.size}>
        <slot></slot>
      </button>
    `;
  }
  
}

window.customElements.define('my-button', myButton);
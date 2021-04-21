import { LitElement, html} from 'lit-element';
import typographyStyles from './typography.css';

export class Typography extends LitElement {
    static get properties() {
        return {
          component: {type: String},
          variant: {type: String},
        };
    }

    static get styles() {
        return [typographyStyles];
    }

    constructor() {
        super();
    }

    createElt() {
        let createdComponent;
        createdComponent = document.createElement(this.component);
        createdComponent.innerHTML = '<slot></slot>';
        
        if (this.variant) {
            this.eltVariant(createdComponent, this.variant);
            return createdComponent;
        } else {
            return createdComponent;
        }
    }

    eltVariant(el, variant) {
        el.classList.add(variant)
    }

    render() {
        return html`
            ${this.createElt()}
        `;
    }
}

customElements.define('el-typography', Typography);
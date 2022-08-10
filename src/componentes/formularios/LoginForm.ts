import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

import {z} from "zod";
import {when} from "lit/directives/when.js";
import {LoginFormData} from "./LoginFormData";


@customElement('mi-formulario-login')
export class LoginForm extends LitElement {

    static override styles = css`
    
  `;


    @property({type: Object})
    loginFormData= new LoginFormData();
    

    @state()
    showErrors = false;

    mySchema = z.object({
        username: z.string().min(1, { message: "No puede estar vacío" }),
        password: z.string().min(8, {message: "Debe tener al menos 8 caracteres"})
    });

    @state()
    validation: any = {
        success: true,
        error: {
            issues: [],
            format : () => {}
        }
    };

    onSubmit(e:Event){
        e.preventDefault();
        console.log(this.loginFormData);
        console.log(this.loginFormData.username);
        this.validation = this.mySchema.safeParse(this.loginFormData)
        console.log(this.validation)
        console.log(this.validation.success)
        if (!this.validation.success){
            console.log("no valida")
            console.log(this.validation.error.issues)
            console.log(this.validation.error.format())
            this.showErrors = true
        }
    }




    override render() {
        return html`
      <h1>Form01</h1>
      <form @submit="${this.onSubmit}">
          <div>
              <label for="username">Username</label>
              <input 
                id="username" 
                type="text"  
                name="username" 
                @input=${(e: Event) => {
                        const target = e.target as HTMLInputElement;
                        // console.log(target.value);
                        this.loginFormData.username= target.value;
                        // console.log(this.loginFormData.username)
                        this.validation = this.mySchema.safeParse(this.loginFormData)
                    }
                } 
                value="${this.loginFormData.username}"/>
                ${when(
                      !this.validation.success && this.validation.error.format().username!=undefined,
                      () => html`
                          <div class="input-error" id="error-username">
                              <span >${this.validation.error.format().username._errors}</span>
                          </div>
                      `,
                      () => html``)}
          </div>
          <div>
              <label for="password">Password</label>
              <input id="password" type="password"  name="password" value="${this.loginFormData.password}"
                     @input=${(e: Event) => {
                         const target = e.target as HTMLInputElement;
                         console.log(target.value);
                         this.loginFormData.password = target.value;
                         console.log(this.loginFormData.password)
                         this.validation = this.mySchema.safeParse(this.loginFormData)
                     }
                     } />
              ${when(
                    !this.validation.success && this.validation.error.format().password!=undefined,
                    () => html`
                        <div id="error-age" class="input-error" >
                            <span >${this.validation.error.format().password._errors}</span>
                        </div>
                    `, 
                    () => html``)}
          </div>
          <div>
              ${when(
                      this.validation.success,
                      () => html`<input type="submit" value="Enviar">`,
                      () => html`<input type="submit" value="Enviar" disabled>`, 
              )}
              
          </div>
      </form>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-formulario-login': LoginForm;
    }
}

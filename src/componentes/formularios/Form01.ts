import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

import {z} from "zod";
import {Person} from "./Person";
import {when} from "lit/directives/when.js";


@customElement('mi-formulario')
export class Form01 extends LitElement {

    static override styles = css`
    
  `;


    @property({type: Object})
    person: Person = new Person("Pepe", 14);
    

    @state()
    showErrors = false;

    mySchema = z.object({
        name: z.string().min(1, { message: "No puede estar vacío" }),
        age: z.number().gt(0, {message: "Debe ser al menos 1"})
    });

    @state()
    validation: any = {
        success: true,
        error: {
            issues: [],
            format : () => {}
        }
    };
    @state()
    myError = new z.ZodError([]);

    onSubmit(e:Event){
        e.preventDefault();
        console.log(this.person);
        console.log(this.person.name);
        this.validation = this.mySchema.safeParse(this.person)
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
              <label for="name">Nombre</label>
              <input 
                id="name" 
                type="text"  
                name="name" 
                @input=${(e: Event) => {
                        const target = e.target as HTMLInputElement;
                        console.log(target.value);
                        this.person.name = target.value;
                        console.log(this.person.name)
                    }
                } 
                value="${this.person.name}"/>
                ${when(
                      !this.validation.success && this.validation.error.format().name._errors,
                      () => html`
                          <div class="input-error" id="error-name">
                              <span >${this.validation.error.format().name._errors}</span>
                          </div>
                      `,
                      () => html``)}
          </div>
          <div>
              <label for="age">Edad</label>
              <input id="age" type="number"  name="age" value="${this.person.age}"
                     @input=${(e: Event) => {
                         const target = e.target as HTMLInputElement;
                         console.log(target.value);
                         this.person.name = target.value;
                         console.log(this.person.age)
                     }
                     } />
              ${when(
                    !this.validation.success && this.validation.error.format().age._errors,
                    () => html`
                        <div id="error-age" class="input-error" >
                            <span >${this.validation.error.format().age._errors}</span>
                        </div>
                    `, 
                    () => html``)}
          </div>
          <div>
              <input type="submit" value="Enviar">
          </div>
      </form>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-formulario': Form01;
    }
}

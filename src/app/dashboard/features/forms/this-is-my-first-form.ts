import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    template: `
<div class="container">
    <div class="d-grid gap-4 p-3">
            
        <section class="card shadow">
    
            <div class="card-header">
                <h4 class="m-0">Complete form</h4>
            </div>
            
            <div class="card-body">
    
                <p>Complete form with almost all available form controls.<br>This includes input elements necessary for filling out and submitting information.</p>
    
                <div class="flexgrid flexgrid--3">
        
                    <app-input
                        name="firstName"
                        label="First name"
                        [ngControl]="form.controls.firstName"
                        [disabled]="true"
                        [floatingLabel]="true"
                    />
        
                    <app-input
                        name="lastName"
                        label="Last name"
                        [ngControl]="form.controls.lastName"
                        [disabled]="true"
                        [floatingLabel]="true"
                    />
        
                    <app-input
                        name="email"
                        label="Email address"
                        [ngControl]="form.controls.email"
                        [floatingLabel]="true"
                    />
                </div>
        
                <div class="flexgrid flexgrid--3">
        
                    <app-input
                        name="city"
                        label="City"
                        [ngControl]="form.controls.city"
                        [floatingLabel]="true"
                        [disabled]="disableFields.value!"
                    />
        
                    <app-input
                        type="number"
                        name="zip"
                        label="ZIP"
                        [ngControl]="form.controls.zip"
                        [floatingLabel]="true"
                    />
                </div>
        
                <div class="d-flex flex-wrap gap-3 mb-3">
        
                    <app-input
                        type="checkbox"
                        name="agree"
                        label="Agree to terms and conditions"
                        [ngControl]="form.controls.agree"
                    />
        
                    <app-input
                        type="checkbox"
                        name="disableForm"
                        label="Disable form (reactive approach)"
                        [ngControl]="disableForm"
                    />
        
                    <app-input
                        type="checkbox"
                        name="disableFields"
                        label="Disable fields (template approach)"
                        [ngControl]="disableFields"
                    />
                </div>
        
                <div class="text-center">
                    <button
                        class="btn btn-primary"
                        [disabled]="form.disabled ? true : form.invalid"
                        (click)="submit()"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
        
        <section class="card shadow">
    
            <div class="card-header">
                <h4 class="m-0">Form value</h4>
            </div>
    
            <div class="card-body">
    
                <p>The formatted output of the form value.<br>Fiddle with the inputs to see realtime changes in the form value down below.</p>
        
                <pre>{{ getFormattedForm() }}</pre>
            </div>
        </section>
    </div>
</div>
`
})
export class ThisIsMyFirstFormComponent {

    states = []; // imported from autocomplete/mock
    statesFormatter = (state: any) => state.name;
    statesFilter = (term: string, state: any) => {
        return state.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }

    flavorList = []; // imported from tagger/mock
    flavorsFormatter = (flavor: any) => flavor.name;
    flavorsFilter = (term: string, flavor: any) => {
        return flavor.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }

    form = new FormGroup({
        firstName: new FormControl<string | null>(null),
        lastName: new FormControl<string | null>(null),
        email: new FormControl<string | null>(null, [ Validators.required, Validators.email ]),
        city: new FormControl<string | null>(null, [ Validators.required ]),
        zip: new FormControl<number | null>(null, [ Validators.required ]),
        agree: new FormControl(false, [ Validators.requiredTrue ])
    });

    disableForm = new FormControl(false);
    disableFields = new FormControl(false);

    ngOnInit() {
        this.disableForm.valueChanges
            .subscribe(disabled =>
                disabled
                    ? this.form.disable()
                    : this.form.enable()
            );
    }

    async submit() {

        await fetch("https://eoyhpvivfett3ub.m.pipedream.net", {
            method: "POST",
            body: JSON.stringify(this.form.getRawValue())
        });

        alert("Submitted!");
    }

    getFormattedForm() {
        return JSON.stringify(this.form.getRawValue(), null, 4);
    }

}

@NgModule({
    declarations: [
        ThisIsMyFirstFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: ThisIsMyFirstFormComponent },
        ])
    ]
})
export class ThisIsMyFirstFormModule { }
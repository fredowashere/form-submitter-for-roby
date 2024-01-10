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
                        [floatingLabel]="true"
                    />
        
                    <app-input
                        name="lastName"
                        label="Last name"
                        [ngControl]="form.controls.lastName"
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
            <app-table
                #dt
                [thead]="thead"
                [tbody]="tbody"
                [items]="results"
                [searchable]="['First name', 'Last name', 'Email']"
                [paginated]="true"
                [pageSize]="10"
            >

                <ng-template #thead>
                    <th sortable="First name" (sort)="dt.sort($event)">First name</th>
                    <th sortable="Last name" (sort)="dt.sort($event)">Last name</th>
                    <th sortable="Agree" (sort)="dt.sort($event)">Agree</th>
                    <th sortable="Email" (sort)="dt.sort($event)">Email</th>
                    <th sortable="City" (sort)="dt.sort($event)">City</th>
                    <th sortable="Zip" (sort)="dt.sort($event)">Zip</th>
                </ng-template>

                <ng-template #tbody let-item let-term$="term$">

                    <td data-label="First name">
                        <ngb-highlight [result]="item['First name']" [term]="(term$ | async) || ''"/>
                    </td>

                    <td data-label="Last name">
                        <ngb-highlight [result]="item['Last name']" [term]="(term$ | async) || ''"/>
                    </td>

                    <td data-label="Agree">
                        <ngb-highlight [result]="item['Agree']" [term]="(term$ | async) || ''"/>
                    </td>

                    <td data-label="Email">
                        <ngb-highlight [result]="item['Email']" [term]="(term$ | async) || ''"/>
                    </td>

                    <td data-label="City">
                        <ngb-highlight [result]="item['City']" [term]="(term$ | async) || ''"/>
                    </td>

                    <td data-label="Zip">
                        <ngb-highlight [result]="item['Zip']" [term]="(term$ | async) || ''"/>
                    </td>
                </ng-template>
            </app-table>
        </section>
    </div>
</div>
`
})
export class ThisIsMyFirstFormComponent {

    intervalId: any = null;
    results: any[] = [];

    form = new FormGroup({
        firstName: new FormControl<string | null>(null),
        lastName: new FormControl<string | null>(null),
        email: new FormControl<string | null>(null, [ Validators.required, Validators.email ]),
        city: new FormControl<string | null>(null, [ Validators.required ]),
        zip: new FormControl<number | null>(null, [ Validators.required ]),
        agree: new FormControl(false, [ Validators.requiredTrue ])
    });

    ngOnInit() {
        const updateResults = async () => this.results = await this.loadData();
        updateResults();
        this.intervalId = setInterval(updateResults.bind(this), 2000);
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    async submit() {
        await fetch("https://eoyhpvivfett3ub.m.pipedream.net", {
            method: "POST",
            body: JSON.stringify(this.form.getRawValue())
        });
    }

    getFormattedForm() {
        return JSON.stringify(this.form.getRawValue(), null, 4);
    }

    async loadData() {
        return await (await fetch("https://eoy6t4x2oybru9.m.pipedream.net")).json();
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
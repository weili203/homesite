import { Component, OnInit， Inject } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

import { IRentService } from './rent.service';
import { Tenant } from "../model/tenant";

@Component({
    selector : 'tenant-details',
    templateUrl : './tenantDetails.component.html'
})
export class TenantDetailsComponent implements OnInit {
    tenant: Tenant = new Tenant();

    constructor(private router : Router, private route: ActivatedRoute,
               @Inject('IRentService') private rentService : IRentService){

    }

    ngOnInit() {
        this.route.params
            // (+) converts string 'id' to a number
            .switchMap((params: Params) => this.rentService.getTenantsForLastName(params['lastName']) )
            .subscribe((tenant: Tenant) => {
                    this.tenant = tenant;
                    console.log(tenant.lastName);
                }
            );
    }

    goBackToActiveRent() : void {
        this.router.navigate(['./activerent']);
    }

   

}
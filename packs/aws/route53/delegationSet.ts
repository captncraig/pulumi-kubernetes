// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class DelegationSet extends lumi.NamedResource implements DelegationSetArgs {
    public /*out*/ readonly nameServers: string[];
    public readonly referenceName?: string;

    constructor(name: string, args: DelegationSetArgs) {
        super(name);
        this.referenceName = args.referenceName;
    }
}

export interface DelegationSetArgs {
    readonly referenceName?: string;
}


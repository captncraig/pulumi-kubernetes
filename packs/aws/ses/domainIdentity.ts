// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class DomainIdentity extends lumi.NamedResource implements DomainIdentityArgs {
    public /*out*/ readonly arn: string;
    public readonly domain: string;
    public /*out*/ readonly verificationToken: string;

    constructor(name: string, args: DomainIdentityArgs) {
        super(name);
        if (args.domain === undefined) {
            throw new Error("Property argument 'domain' is required, but was missing");
        }
        this.domain = args.domain;
    }
}

export interface DomainIdentityArgs {
    readonly domain: string;
}


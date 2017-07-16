// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class GlobalAddress extends lumi.NamedResource implements GlobalAddressArgs {
    public /*out*/ readonly address: string;
    public readonly globalAddressName?: string;
    public readonly project?: string;
    public /*out*/ readonly selfLink: string;

    constructor(name: string, args: GlobalAddressArgs) {
        super(name);
        this.globalAddressName = args.globalAddressName;
        this.project = args.project;
    }
}

export interface GlobalAddressArgs {
    readonly globalAddressName?: string;
    readonly project?: string;
}


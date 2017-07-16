// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Group extends lumi.NamedResource implements GroupArgs {
    public /*out*/ readonly arn: string;
    public readonly groupName?: string;
    public readonly path?: string;
    public /*out*/ readonly uniqueId: string;

    constructor(name: string, args: GroupArgs) {
        super(name);
        this.groupName = args.groupName;
        this.path = args.path;
    }
}

export interface GroupArgs {
    readonly groupName?: string;
    readonly path?: string;
}


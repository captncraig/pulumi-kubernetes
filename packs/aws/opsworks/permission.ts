// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Permission extends lumi.NamedResource implements PermissionArgs {
    public readonly allowSsh: boolean;
    public readonly allowSudo: boolean;
    public /*out*/ readonly permissionId: string;
    public readonly level: string;
    public readonly stackId: string;
    public readonly userArn: string;

    constructor(name: string, args: PermissionArgs) {
        super(name);
        this.allowSsh = args.allowSsh;
        this.allowSudo = args.allowSudo;
        this.level = args.level;
        this.stackId = args.stackId;
        if (args.userArn === undefined) {
            throw new Error("Property argument 'userArn' is required, but was missing");
        }
        this.userArn = args.userArn;
    }
}

export interface PermissionArgs {
    readonly allowSsh?: boolean;
    readonly allowSudo?: boolean;
    readonly level?: string;
    readonly stackId?: string;
    readonly userArn: string;
}


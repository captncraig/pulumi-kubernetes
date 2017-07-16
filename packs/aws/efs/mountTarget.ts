// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class MountTarget extends lumi.NamedResource implements MountTargetArgs {
    public /*out*/ readonly dnsName: string;
    public readonly fileSystemId: string;
    public readonly ipAddress: string;
    public /*out*/ readonly networkInterfaceId: string;
    public readonly securityGroups: string[];
    public readonly subnetId: string;

    constructor(name: string, args: MountTargetArgs) {
        super(name);
        if (args.fileSystemId === undefined) {
            throw new Error("Property argument 'fileSystemId' is required, but was missing");
        }
        this.fileSystemId = args.fileSystemId;
        this.ipAddress = args.ipAddress;
        this.securityGroups = args.securityGroups;
        if (args.subnetId === undefined) {
            throw new Error("Property argument 'subnetId' is required, but was missing");
        }
        this.subnetId = args.subnetId;
    }
}

export interface MountTargetArgs {
    readonly fileSystemId: string;
    readonly ipAddress?: string;
    readonly securityGroups?: string[];
    readonly subnetId: string;
}


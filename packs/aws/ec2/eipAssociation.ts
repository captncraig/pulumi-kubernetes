// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class EipAssociation extends lumi.NamedResource implements EipAssociationArgs {
    public readonly allocationId: string;
    public readonly allowReassociation?: boolean;
    public readonly instanceId: string;
    public readonly networkInterfaceId: string;
    public readonly privateIpAddress: string;
    public readonly publicIp: string;

    constructor(name: string, args: EipAssociationArgs) {
        super(name);
        this.allocationId = args.allocationId;
        this.allowReassociation = args.allowReassociation;
        this.instanceId = args.instanceId;
        this.networkInterfaceId = args.networkInterfaceId;
        this.privateIpAddress = args.privateIpAddress;
        this.publicIp = args.publicIp;
    }
}

export interface EipAssociationArgs {
    readonly allocationId?: string;
    readonly allowReassociation?: boolean;
    readonly instanceId?: string;
    readonly networkInterfaceId?: string;
    readonly privateIpAddress?: string;
    readonly publicIp?: string;
}


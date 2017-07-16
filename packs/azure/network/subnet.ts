// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Subnet extends lumi.NamedResource implements SubnetArgs {
    public readonly addressPrefix: string;
    public readonly ipConfigurations: string[];
    public readonly subnetName?: string;
    public readonly networkSecurityGroupId: string;
    public readonly resourceGroupName: string;
    public readonly routeTableId: string;
    public readonly virtualNetworkName: string;

    constructor(name: string, args: SubnetArgs) {
        super(name);
        if (args.addressPrefix === undefined) {
            throw new Error("Property argument 'addressPrefix' is required, but was missing");
        }
        this.addressPrefix = args.addressPrefix;
        this.ipConfigurations = args.ipConfigurations;
        this.subnetName = args.subnetName;
        this.networkSecurityGroupId = args.networkSecurityGroupId;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        this.routeTableId = args.routeTableId;
        if (args.virtualNetworkName === undefined) {
            throw new Error("Property argument 'virtualNetworkName' is required, but was missing");
        }
        this.virtualNetworkName = args.virtualNetworkName;
    }
}

export interface SubnetArgs {
    readonly addressPrefix: string;
    readonly ipConfigurations?: string[];
    readonly subnetName?: string;
    readonly networkSecurityGroupId?: string;
    readonly resourceGroupName: string;
    readonly routeTableId?: string;
    readonly virtualNetworkName: string;
}


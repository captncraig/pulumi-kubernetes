// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class NatPool extends lumi.NamedResource implements NatPoolArgs {
    public readonly backendPort: number;
    public /*out*/ readonly frontendIpConfigurationId: string;
    public readonly frontendIpConfigurationName: string;
    public readonly frontendPortEnd: number;
    public readonly frontendPortStart: number;
    public readonly loadbalancerId: string;
    public readonly location?: string;
    public readonly natPoolName?: string;
    public readonly protocol: string;
    public readonly resourceGroupName: string;

    constructor(name: string, args: NatPoolArgs) {
        super(name);
        if (args.backendPort === undefined) {
            throw new Error("Property argument 'backendPort' is required, but was missing");
        }
        this.backendPort = args.backendPort;
        if (args.frontendIpConfigurationName === undefined) {
            throw new Error("Property argument 'frontendIpConfigurationName' is required, but was missing");
        }
        this.frontendIpConfigurationName = args.frontendIpConfigurationName;
        if (args.frontendPortEnd === undefined) {
            throw new Error("Property argument 'frontendPortEnd' is required, but was missing");
        }
        this.frontendPortEnd = args.frontendPortEnd;
        if (args.frontendPortStart === undefined) {
            throw new Error("Property argument 'frontendPortStart' is required, but was missing");
        }
        this.frontendPortStart = args.frontendPortStart;
        if (args.loadbalancerId === undefined) {
            throw new Error("Property argument 'loadbalancerId' is required, but was missing");
        }
        this.loadbalancerId = args.loadbalancerId;
        this.location = args.location;
        this.natPoolName = args.natPoolName;
        if (args.protocol === undefined) {
            throw new Error("Property argument 'protocol' is required, but was missing");
        }
        this.protocol = args.protocol;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
    }
}

export interface NatPoolArgs {
    readonly backendPort: number;
    readonly frontendIpConfigurationName: string;
    readonly frontendPortEnd: number;
    readonly frontendPortStart: number;
    readonly loadbalancerId: string;
    readonly location?: string;
    readonly natPoolName?: string;
    readonly protocol: string;
    readonly resourceGroupName: string;
}


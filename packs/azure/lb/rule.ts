// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Rule extends lumi.NamedResource implements RuleArgs {
    public readonly backendAddressPoolId: string;
    public readonly backendPort: number;
    public readonly enableFloatingIp?: boolean;
    public /*out*/ readonly frontendIpConfigurationId: string;
    public readonly frontendIpConfigurationName: string;
    public readonly frontendPort: number;
    public readonly idleTimeoutInMinutes: number;
    public readonly loadDistribution: string;
    public readonly loadbalancerId: string;
    public readonly location?: string;
    public readonly ruleName?: string;
    public readonly probeId: string;
    public readonly protocol: string;
    public readonly resourceGroupName: string;

    constructor(name: string, args: RuleArgs) {
        super(name);
        this.backendAddressPoolId = args.backendAddressPoolId;
        if (args.backendPort === undefined) {
            throw new Error("Property argument 'backendPort' is required, but was missing");
        }
        this.backendPort = args.backendPort;
        this.enableFloatingIp = args.enableFloatingIp;
        if (args.frontendIpConfigurationName === undefined) {
            throw new Error("Property argument 'frontendIpConfigurationName' is required, but was missing");
        }
        this.frontendIpConfigurationName = args.frontendIpConfigurationName;
        if (args.frontendPort === undefined) {
            throw new Error("Property argument 'frontendPort' is required, but was missing");
        }
        this.frontendPort = args.frontendPort;
        this.idleTimeoutInMinutes = args.idleTimeoutInMinutes;
        this.loadDistribution = args.loadDistribution;
        if (args.loadbalancerId === undefined) {
            throw new Error("Property argument 'loadbalancerId' is required, but was missing");
        }
        this.loadbalancerId = args.loadbalancerId;
        this.location = args.location;
        this.ruleName = args.ruleName;
        this.probeId = args.probeId;
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

export interface RuleArgs {
    readonly backendAddressPoolId?: string;
    readonly backendPort: number;
    readonly enableFloatingIp?: boolean;
    readonly frontendIpConfigurationName: string;
    readonly frontendPort: number;
    readonly idleTimeoutInMinutes?: number;
    readonly loadDistribution?: string;
    readonly loadbalancerId: string;
    readonly location?: string;
    readonly ruleName?: string;
    readonly probeId?: string;
    readonly protocol: string;
    readonly resourceGroupName: string;
}


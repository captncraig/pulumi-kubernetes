// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class BackendService extends lumi.NamedResource implements BackendServiceArgs {
    public readonly backend?: { balancingMode?: string, capacityScaler?: number, description?: string, group?: string, maxRate?: number, maxRatePerInstance?: number, maxUtilization?: number }[];
    public readonly connectionDrainingTimeoutSec?: number;
    public readonly description?: string;
    public readonly enableCdn?: boolean;
    public /*out*/ readonly fingerprint: string;
    public readonly healthChecks: string[];
    public readonly backendServiceName?: string;
    public readonly portName: string;
    public readonly project?: string;
    public readonly protocol: string;
    public /*out*/ readonly selfLink: string;
    public readonly sessionAffinity: string;
    public readonly timeoutSec: number;

    constructor(name: string, args: BackendServiceArgs) {
        super(name);
        this.backend = args.backend;
        this.connectionDrainingTimeoutSec = args.connectionDrainingTimeoutSec;
        this.description = args.description;
        this.enableCdn = args.enableCdn;
        if (args.healthChecks === undefined) {
            throw new Error("Property argument 'healthChecks' is required, but was missing");
        }
        this.healthChecks = args.healthChecks;
        this.backendServiceName = args.backendServiceName;
        this.portName = args.portName;
        this.project = args.project;
        this.protocol = args.protocol;
        this.sessionAffinity = args.sessionAffinity;
        this.timeoutSec = args.timeoutSec;
    }
}

export interface BackendServiceArgs {
    readonly backend?: { balancingMode?: string, capacityScaler?: number, description?: string, group?: string, maxRate?: number, maxRatePerInstance?: number, maxUtilization?: number }[];
    readonly connectionDrainingTimeoutSec?: number;
    readonly description?: string;
    readonly enableCdn?: boolean;
    readonly healthChecks: string[];
    readonly backendServiceName?: string;
    readonly portName?: string;
    readonly project?: string;
    readonly protocol?: string;
    readonly sessionAffinity?: string;
    readonly timeoutSec?: number;
}


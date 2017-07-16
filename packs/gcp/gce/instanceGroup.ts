// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class InstanceGroup extends lumi.NamedResource implements InstanceGroupArgs {
    public readonly description?: string;
    public readonly instances: string[];
    public readonly instanceGroupName?: string;
    public readonly namedPort?: { name: string, port: number }[];
    public readonly network: string;
    public readonly project?: string;
    public /*out*/ readonly selfLink: string;
    public /*out*/ readonly size: number;
    public readonly zone: string;

    constructor(name: string, args: InstanceGroupArgs) {
        super(name);
        this.description = args.description;
        this.instances = args.instances;
        this.instanceGroupName = args.instanceGroupName;
        this.namedPort = args.namedPort;
        this.network = args.network;
        this.project = args.project;
        if (args.zone === undefined) {
            throw new Error("Property argument 'zone' is required, but was missing");
        }
        this.zone = args.zone;
    }
}

export interface InstanceGroupArgs {
    readonly description?: string;
    readonly instances?: string[];
    readonly instanceGroupName?: string;
    readonly namedPort?: { name: string, port: number }[];
    readonly network?: string;
    readonly project?: string;
    readonly zone: string;
}


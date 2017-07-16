// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Environment extends lumi.NamedResource implements EnvironmentArgs {
    public /*out*/ readonly allSettings: { name: string, namespace: string, resource?: string, value: string }[];
    public readonly application: string;
    public /*out*/ readonly autoscalingGroups: string[];
    public /*out*/ readonly cname: string;
    public readonly cnamePrefix: string;
    public readonly description?: string;
    public /*out*/ readonly instances: string[];
    public /*out*/ readonly launchConfigurations: string[];
    public /*out*/ readonly loadBalancers: string[];
    public readonly environmentName?: string;
    public readonly pollInterval?: string;
    public /*out*/ readonly queues: string[];
    public readonly setting?: { name: string, namespace: string, resource?: string, value: string }[];
    public readonly solutionStackName: string;
    public readonly tags?: {[key: string]: any};
    public readonly templateName?: string;
    public readonly tier?: string;
    public /*out*/ readonly triggers: string[];
    public readonly versionLabel: string;
    public readonly waitForReadyTimeout?: string;

    constructor(name: string, args: EnvironmentArgs) {
        super(name);
        if (args.application === undefined) {
            throw new Error("Property argument 'application' is required, but was missing");
        }
        this.application = args.application;
        this.cnamePrefix = args.cnamePrefix;
        this.description = args.description;
        this.environmentName = args.environmentName;
        this.pollInterval = args.pollInterval;
        this.setting = args.setting;
        this.solutionStackName = args.solutionStackName;
        this.tags = args.tags;
        this.templateName = args.templateName;
        this.tier = args.tier;
        this.versionLabel = args.versionLabel;
        this.waitForReadyTimeout = args.waitForReadyTimeout;
    }
}

export interface EnvironmentArgs {
    readonly application: string;
    readonly cnamePrefix?: string;
    readonly description?: string;
    readonly environmentName?: string;
    readonly pollInterval?: string;
    readonly setting?: { name: string, namespace: string, resource?: string, value: string }[];
    readonly solutionStackName?: string;
    readonly tags?: {[key: string]: any};
    readonly templateName?: string;
    readonly tier?: string;
    readonly versionLabel?: string;
    readonly waitForReadyTimeout?: string;
}


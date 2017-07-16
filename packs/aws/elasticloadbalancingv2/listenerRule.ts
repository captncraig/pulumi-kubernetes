// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class ListenerRule extends lumi.NamedResource implements ListenerRuleArgs {
    public readonly action: { targetGroupArn: string, type: string }[];
    public /*out*/ readonly arn: string;
    public readonly condition: { field?: string, values?: string[] }[];
    public readonly listenerArn: string;
    public readonly priority: number;

    constructor(name: string, args: ListenerRuleArgs) {
        super(name);
        if (args.action === undefined) {
            throw new Error("Property argument 'action' is required, but was missing");
        }
        this.action = args.action;
        if (args.condition === undefined) {
            throw new Error("Property argument 'condition' is required, but was missing");
        }
        this.condition = args.condition;
        if (args.listenerArn === undefined) {
            throw new Error("Property argument 'listenerArn' is required, but was missing");
        }
        this.listenerArn = args.listenerArn;
        if (args.priority === undefined) {
            throw new Error("Property argument 'priority' is required, but was missing");
        }
        this.priority = args.priority;
    }
}

export interface ListenerRuleArgs {
    readonly action: { targetGroupArn: string, type: string }[];
    readonly condition: { field?: string, values?: string[] }[];
    readonly listenerArn: string;
    readonly priority: number;
}


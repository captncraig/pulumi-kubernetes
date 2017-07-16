// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class ReplicationTask extends lumi.NamedResource implements ReplicationTaskArgs {
    public readonly cdcStartTime?: string;
    public readonly migrationType: string;
    public readonly replicationInstanceArn: string;
    public /*out*/ readonly replicationTaskArn: string;
    public readonly replicationTaskId: string;
    public readonly replicationTaskSettings?: string;
    public readonly sourceEndpointArn: string;
    public readonly tableMappings: string;
    public readonly tags?: {[key: string]: any};
    public readonly targetEndpointArn: string;

    constructor(name: string, args: ReplicationTaskArgs) {
        super(name);
        this.cdcStartTime = args.cdcStartTime;
        if (args.migrationType === undefined) {
            throw new Error("Property argument 'migrationType' is required, but was missing");
        }
        this.migrationType = args.migrationType;
        if (args.replicationInstanceArn === undefined) {
            throw new Error("Property argument 'replicationInstanceArn' is required, but was missing");
        }
        this.replicationInstanceArn = args.replicationInstanceArn;
        if (args.replicationTaskId === undefined) {
            throw new Error("Property argument 'replicationTaskId' is required, but was missing");
        }
        this.replicationTaskId = args.replicationTaskId;
        this.replicationTaskSettings = args.replicationTaskSettings;
        if (args.sourceEndpointArn === undefined) {
            throw new Error("Property argument 'sourceEndpointArn' is required, but was missing");
        }
        this.sourceEndpointArn = args.sourceEndpointArn;
        if (args.tableMappings === undefined) {
            throw new Error("Property argument 'tableMappings' is required, but was missing");
        }
        this.tableMappings = args.tableMappings;
        this.tags = args.tags;
        if (args.targetEndpointArn === undefined) {
            throw new Error("Property argument 'targetEndpointArn' is required, but was missing");
        }
        this.targetEndpointArn = args.targetEndpointArn;
    }
}

export interface ReplicationTaskArgs {
    readonly cdcStartTime?: string;
    readonly migrationType: string;
    readonly replicationInstanceArn: string;
    readonly replicationTaskId: string;
    readonly replicationTaskSettings?: string;
    readonly sourceEndpointArn: string;
    readonly tableMappings: string;
    readonly tags?: {[key: string]: any};
    readonly targetEndpointArn: string;
}


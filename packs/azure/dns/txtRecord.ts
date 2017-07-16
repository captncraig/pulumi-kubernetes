// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class TxtRecord extends lumi.NamedResource implements TxtRecordArgs {
    public readonly txtRecordName?: string;
    public readonly record: { value: string }[];
    public readonly resourceGroupName: string;
    public readonly tags: {[key: string]: any};
    public readonly ttl: number;
    public readonly zoneName: string;

    constructor(name: string, args: TxtRecordArgs) {
        super(name);
        this.txtRecordName = args.txtRecordName;
        if (args.record === undefined) {
            throw new Error("Property argument 'record' is required, but was missing");
        }
        this.record = args.record;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        this.tags = args.tags;
        if (args.ttl === undefined) {
            throw new Error("Property argument 'ttl' is required, but was missing");
        }
        this.ttl = args.ttl;
        if (args.zoneName === undefined) {
            throw new Error("Property argument 'zoneName' is required, but was missing");
        }
        this.zoneName = args.zoneName;
    }
}

export interface TxtRecordArgs {
    readonly txtRecordName?: string;
    readonly record: { value: string }[];
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: any};
    readonly ttl: number;
    readonly zoneName: string;
}


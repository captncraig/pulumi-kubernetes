// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class BackendBucket extends lumi.NamedResource implements BackendBucketArgs {
    public readonly bucketName: string;
    public readonly description?: string;
    public readonly enableCdn?: boolean;
    public readonly backendBucketName?: string;
    public readonly project?: string;
    public /*out*/ readonly selfLink: string;

    constructor(name: string, args: BackendBucketArgs) {
        super(name);
        if (args.bucketName === undefined) {
            throw new Error("Property argument 'bucketName' is required, but was missing");
        }
        this.bucketName = args.bucketName;
        this.description = args.description;
        this.enableCdn = args.enableCdn;
        this.backendBucketName = args.backendBucketName;
        this.project = args.project;
    }
}

export interface BackendBucketArgs {
    readonly bucketName: string;
    readonly description?: string;
    readonly enableCdn?: boolean;
    readonly backendBucketName?: string;
    readonly project?: string;
}


// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class AssessmentTarget extends lumi.NamedResource implements AssessmentTargetArgs {
    public /*out*/ readonly arn: string;
    public readonly assessmentTargetName?: string;
    public readonly resourceGroupArn: string;

    constructor(name: string, args: AssessmentTargetArgs) {
        super(name);
        this.assessmentTargetName = args.assessmentTargetName;
        if (args.resourceGroupArn === undefined) {
            throw new Error("Property argument 'resourceGroupArn' is required, but was missing");
        }
        this.resourceGroupArn = args.resourceGroupArn;
    }
}

export interface AssessmentTargetArgs {
    readonly assessmentTargetName?: string;
    readonly resourceGroupArn: string;
}


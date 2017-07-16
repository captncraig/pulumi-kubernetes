// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class TopicSubscription extends lumi.NamedResource implements TopicSubscriptionArgs {
    public /*out*/ readonly arn: string;
    public readonly confirmationTimeoutInMinutes?: number;
    public readonly deliveryPolicy?: string;
    public readonly endpoint: string;
    public readonly endpointAutoConfirms?: boolean;
    public readonly protocol: string;
    public readonly rawMessageDelivery?: boolean;
    public readonly topicArn: string;

    constructor(name: string, args: TopicSubscriptionArgs) {
        super(name);
        this.confirmationTimeoutInMinutes = args.confirmationTimeoutInMinutes;
        this.deliveryPolicy = args.deliveryPolicy;
        if (args.endpoint === undefined) {
            throw new Error("Property argument 'endpoint' is required, but was missing");
        }
        this.endpoint = args.endpoint;
        this.endpointAutoConfirms = args.endpointAutoConfirms;
        if (args.protocol === undefined) {
            throw new Error("Property argument 'protocol' is required, but was missing");
        }
        this.protocol = args.protocol;
        this.rawMessageDelivery = args.rawMessageDelivery;
        if (args.topicArn === undefined) {
            throw new Error("Property argument 'topicArn' is required, but was missing");
        }
        this.topicArn = args.topicArn;
    }
}

export interface TopicSubscriptionArgs {
    readonly confirmationTimeoutInMinutes?: number;
    readonly deliveryPolicy?: string;
    readonly endpoint: string;
    readonly endpointAutoConfirms?: boolean;
    readonly protocol: string;
    readonly rawMessageDelivery?: boolean;
    readonly topicArn: string;
}


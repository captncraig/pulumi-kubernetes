// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Bucket extends lumi.NamedResource implements BucketArgs {
    public readonly accelerationStatus: string;
    public readonly acl?: string;
    public readonly arn: string;
    public readonly bucket: string;
    public /*out*/ readonly bucketDomainName: string;
    public readonly bucketPrefix?: string;
    public readonly corsRule?: { allowedHeaders?: string[], allowedMethods: string[], allowedOrigins: string[], exposeHeaders?: string[], maxAgeSeconds?: number }[];
    public readonly forceDestroy?: boolean;
    public readonly hostedZoneId: string;
    public readonly lifecycleRule?: { abortIncompleteMultipartUploadDays?: number, enabled: boolean, expiration?: { date?: string, days?: number, expiredObjectDeleteMarker?: boolean }[], id: string, noncurrentVersionExpiration?: { days?: number }[], noncurrentVersionTransition?: { days?: number, storageClass: string }[], prefix?: string, tags?: {[key: string]: any}, transition?: { date?: string, days?: number, storageClass: string }[] }[];
    public readonly logging?: { targetBucket: string, targetPrefix?: string }[];
    public readonly policy?: string;
    public readonly region: string;
    public readonly replicationConfiguration?: { role: string, rules: { destination: { bucket: string, storageClass?: string }[], id?: string, prefix: string, status: string }[] }[];
    public readonly requestPayer: string;
    public readonly tags?: {[key: string]: any};
    public readonly versioning: { enabled?: boolean, mfaDelete?: boolean }[];
    public readonly website?: { errorDocument?: string, indexDocument?: string, redirectAllRequestsTo?: string, routingRules?: string }[];
    public readonly websiteDomain: string;
    public readonly websiteEndpoint: string;

    constructor(name: string, args: BucketArgs) {
        super(name);
        this.accelerationStatus = args.accelerationStatus;
        this.acl = args.acl;
        this.arn = args.arn;
        this.bucket = args.bucket;
        this.bucketPrefix = args.bucketPrefix;
        this.corsRule = args.corsRule;
        this.forceDestroy = args.forceDestroy;
        this.hostedZoneId = args.hostedZoneId;
        this.lifecycleRule = args.lifecycleRule;
        this.logging = args.logging;
        this.policy = args.policy;
        this.region = args.region;
        this.replicationConfiguration = args.replicationConfiguration;
        this.requestPayer = args.requestPayer;
        this.tags = args.tags;
        this.versioning = args.versioning;
        this.website = args.website;
        this.websiteDomain = args.websiteDomain;
        this.websiteEndpoint = args.websiteEndpoint;
    }
}

export interface BucketArgs {
    readonly accelerationStatus?: string;
    readonly acl?: string;
    readonly arn?: string;
    readonly bucket?: string;
    readonly bucketPrefix?: string;
    readonly corsRule?: { allowedHeaders?: string[], allowedMethods: string[], allowedOrigins: string[], exposeHeaders?: string[], maxAgeSeconds?: number }[];
    readonly forceDestroy?: boolean;
    readonly hostedZoneId?: string;
    readonly lifecycleRule?: { abortIncompleteMultipartUploadDays?: number, enabled: boolean, expiration?: { date?: string, days?: number, expiredObjectDeleteMarker?: boolean }[], id: string, noncurrentVersionExpiration?: { days?: number }[], noncurrentVersionTransition?: { days?: number, storageClass: string }[], prefix?: string, tags?: {[key: string]: any}, transition?: { date?: string, days?: number, storageClass: string }[] }[];
    readonly logging?: { targetBucket: string, targetPrefix?: string }[];
    readonly policy?: string;
    readonly region?: string;
    readonly replicationConfiguration?: { role: string, rules: { destination: { bucket: string, storageClass?: string }[], id?: string, prefix: string, status: string }[] }[];
    readonly requestPayer?: string;
    readonly tags?: {[key: string]: any};
    readonly versioning?: { enabled?: boolean, mfaDelete?: boolean }[];
    readonly website?: { errorDocument?: string, indexDocument?: string, redirectAllRequestsTo?: string, routingRules?: string }[];
    readonly websiteDomain?: string;
    readonly websiteEndpoint?: string;
}


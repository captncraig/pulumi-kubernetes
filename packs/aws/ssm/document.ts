// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Document extends lumi.NamedResource implements DocumentArgs {
    public /*out*/ readonly arn: string;
    public readonly content: string;
    public /*out*/ readonly createdDate: string;
    public /*out*/ readonly defaultVersion: string;
    public /*out*/ readonly description: string;
    public readonly documentType: string;
    public /*out*/ readonly hash: string;
    public /*out*/ readonly hashType: string;
    public /*out*/ readonly latestVersion: string;
    public readonly documentName?: string;
    public /*out*/ readonly owner: string;
    public /*out*/ readonly parameter: { defaultValue?: string, description?: string, name?: string, type?: string }[];
    public readonly permissions?: {[key: string]: { accountIds: string, type: string }};
    public /*out*/ readonly platformTypes: string[];
    public /*out*/ readonly schemaVersion: string;
    public /*out*/ readonly status: string;

    constructor(name: string, args: DocumentArgs) {
        super(name);
        if (args.content === undefined) {
            throw new Error("Property argument 'content' is required, but was missing");
        }
        this.content = args.content;
        if (args.documentType === undefined) {
            throw new Error("Property argument 'documentType' is required, but was missing");
        }
        this.documentType = args.documentType;
        this.documentName = args.documentName;
        this.permissions = args.permissions;
    }
}

export interface DocumentArgs {
    readonly content: string;
    readonly documentType: string;
    readonly documentName?: string;
    readonly permissions?: {[key: string]: { accountIds: string, type: string }};
}


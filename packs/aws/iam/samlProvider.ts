// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class SamlProvider extends lumi.NamedResource implements SamlProviderArgs {
    public /*out*/ readonly arn: string;
    public readonly samlProviderName?: string;
    public readonly samlMetadataDocument: string;
    public /*out*/ readonly validUntil: string;

    constructor(name: string, args: SamlProviderArgs) {
        super(name);
        this.samlProviderName = args.samlProviderName;
        if (args.samlMetadataDocument === undefined) {
            throw new Error("Property argument 'samlMetadataDocument' is required, but was missing");
        }
        this.samlMetadataDocument = args.samlMetadataDocument;
    }
}

export interface SamlProviderArgs {
    readonly samlProviderName?: string;
    readonly samlMetadataDocument: string;
}


// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

import {Resource} from "./resource";
import {RestApi} from "./restApi";

export class Integration extends lumi.NamedResource implements IntegrationArgs {
    public readonly cacheKeyParameters?: string[];
    public readonly cacheNamespace: string;
    public readonly contentHandling?: string;
    public readonly credentials?: string;
    public readonly httpMethod: string;
    public readonly integrationHttpMethod?: string;
    public readonly passthroughBehavior: string;
    public readonly requestParameters?: {[key: string]: string};
    public readonly requestParametersInJson?: string;
    public readonly requestTemplates?: {[key: string]: string};
    public readonly resource: Resource;
    public readonly restApi: RestApi;
    public readonly type: string;
    public readonly uri?: string;

    constructor(name: string, args: IntegrationArgs) {
        super(name);
        this.cacheKeyParameters = args.cacheKeyParameters;
        this.cacheNamespace = args.cacheNamespace;
        this.contentHandling = args.contentHandling;
        this.credentials = args.credentials;
        if (args.httpMethod === undefined) {
            throw new Error("Property argument 'httpMethod' is required, but was missing");
        }
        this.httpMethod = args.httpMethod;
        this.integrationHttpMethod = args.integrationHttpMethod;
        this.passthroughBehavior = args.passthroughBehavior;
        this.requestParameters = args.requestParameters;
        this.requestParametersInJson = args.requestParametersInJson;
        this.requestTemplates = args.requestTemplates;
        if (args.resource === undefined) {
            throw new Error("Property argument 'resource' is required, but was missing");
        }
        this.resource = args.resource;
        if (args.restApi === undefined) {
            throw new Error("Property argument 'restApi' is required, but was missing");
        }
        this.restApi = args.restApi;
        if (args.type === undefined) {
            throw new Error("Property argument 'type' is required, but was missing");
        }
        this.type = args.type;
        this.uri = args.uri;
    }
}

export interface IntegrationArgs {
    readonly cacheKeyParameters?: string[];
    readonly cacheNamespace?: string;
    readonly contentHandling?: string;
    readonly credentials?: string;
    readonly httpMethod: string;
    readonly integrationHttpMethod?: string;
    readonly passthroughBehavior?: string;
    readonly requestParameters?: {[key: string]: string};
    readonly requestParametersInJson?: string;
    readonly requestTemplates?: {[key: string]: string};
    readonly resource: Resource;
    readonly restApi: RestApi;
    readonly type: string;
    readonly uri?: string;
}


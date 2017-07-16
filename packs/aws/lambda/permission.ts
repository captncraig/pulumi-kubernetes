// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

import {Function} from "./function";

export class Permission extends lumi.NamedResource implements PermissionArgs {
    public readonly action: string;
    public readonly function: Function;
    public readonly principal: string;
    public readonly qualifier?: string;
    public readonly sourceAccount?: string;
    public readonly sourceArn?: string;
    public readonly statementId?: string;

    constructor(name: string, args: PermissionArgs) {
        super(name);
        if (args.action === undefined) {
            throw new Error("Property argument 'action' is required, but was missing");
        }
        this.action = args.action;
        if (args.function === undefined) {
            throw new Error("Property argument 'function' is required, but was missing");
        }
        this.function = args.function;
        if (args.principal === undefined) {
            throw new Error("Property argument 'principal' is required, but was missing");
        }
        this.principal = args.principal;
        this.qualifier = args.qualifier;
        this.sourceAccount = args.sourceAccount;
        this.sourceArn = args.sourceArn;
        this.statementId = args.statementId;
    }
}

export interface PermissionArgs {
    readonly action: string;
    readonly function: Function;
    readonly principal: string;
    readonly qualifier?: string;
    readonly sourceAccount?: string;
    readonly sourceArn?: string;
    readonly statementId?: string;
}


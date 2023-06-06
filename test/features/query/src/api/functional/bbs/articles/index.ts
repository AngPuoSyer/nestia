/**
 * @packageDocumentation
 * @module api.functional.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";

import type { IPage } from "./../../../structures/IPage";
import type { IBbsArticle } from "./../../../structures/IBbsArticle";

/**
 * @controller BbsArticlesController.index()
 * @path GET /bbs/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    query: Primitive<index.Query>,
): Promise<index.Output> {
    return Fetcher.fetch(
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(query),
    );
}
export namespace index {
    export type Query = Primitive<IPage.IRequest>;
    export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/bbs/articles";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (query: IPage.IRequest): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/bbs/articles${encoded.length ? `?${encoded}` : ""}`;;
    }
}
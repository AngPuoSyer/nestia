/**
 * @packageDocumentation
 * @module api.functional.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";
import typia from "typia";

import type { IBbsArticle } from "./../../../structures/IBbsArticle";

/**
 * Store a new article.
 * 
 * @param section Section code
 * @param input Content to store
 * @returns Newly archived article
 * 
 * @controller BbsArticlesController.store()
 * @path POST /bbs/articles/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
    connection: IConnection,
    section: string,
    input: Primitive<store.Input>,
): Promise<store.Output> {
    typia.assert<typeof section>(section);
    typia.assert<typeof input>(input);

    return Fetcher.fetch(
        connection,
        store.ENCRYPTED,
        store.METHOD,
        store.path(section),
        input,
    );
}
export namespace store {
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/bbs/articles/:section";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (section: string): string => {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}`;
    }
}

/**
 * Update an article.
 * 
 * @param section Section code
 * @param id Target article ID
 * @param input Content to update
 * @returns Updated content
 * 
 * @controller BbsArticlesController.update()
 * @path PUT /bbs/articles/:section/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    section: string,
    id: string,
    input: Primitive<update.Input>,
): Promise<update.Output> {
    typia.assert<typeof section>(section);
    typia.assert<typeof id>(id);
    typia.assert<typeof input>(input);

    return Fetcher.fetch(
        connection,
        update.ENCRYPTED,
        update.METHOD,
        update.path(section, id),
        input,
    );
}
export namespace update {
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METHOD = "PUT" as const;
    export const PATH: string = "/bbs/articles/:section/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (section: string, id: string): string => {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}/${encodeURIComponent(id ?? "null")}`;
    }
}
/**
 * @packageDocumentation
 * @module api.functional.users.normals
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { HttpError, IConnection, IPropagation, Primitive, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IAuthentication } from "../../../structures/IAuthentication";
import type { INormal } from "../../../structures/INormal";
import { NestiaSimulator } from "../../../utils/NestiaSimulator";

/**
 * @controller UserNormalsController.get
 * @path GET /users/normals
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
    query: get.Query,
): Promise<get.Output> {
    return !!connection.simulate
        ? get.simulate(
              connection,
              query,
          )
        : PlainFetcher.propagate(
              connection,
              {
                  ...get.METADATA,
                  path: get.path(query),
              } as const,
          );
}
export namespace get {
    export type Query = Resolved<IAuthentication.IQuery>;
    export type Output = IPropagation<{
        200: INormal.IPublicProfile;
    }>;

    export const METADATA = {
        method: "GET",
        path: "/users/normals",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (query: get.Query): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/users/normals${encoded.length ? `?${encoded}` : ""}`;;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<INormal.IPublicProfile> =>
        typia.random<Primitive<INormal.IPublicProfile>>(g);
    export const simulate = async (
        connection: IConnection,
        query: get.Query,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(query),
            contentType: "application/json",
        });
        try {
            assert.query(() => typia.assert(query));
        } catch (exp) {
            if (!typia.is<HttpError>(exp)) throw exp;
            return {
                success: false,
                status: exp.status,
                headers: exp.headers,
                data: exp.toJSON().message,
            } as any;
        }
        return {
            success: true,
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
            data: random(
                typeof connection.simulate === 'object' &&
                    connection.simulate !== null
                    ? connection.simulate
                    : undefined
            ),
        }
    }
}

/**
 * @throws 404
 * 
 * @controller UserNormalsController.getByNormalId
 * @path GET /users/normals/:normalId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByNormalId(
    connection: IConnection,
    normalId: string,
    query: getByNormalId.Query,
): Promise<getByNormalId.Output> {
    return !!connection.simulate
        ? getByNormalId.simulate(
              connection,
              normalId,
              query,
          )
        : PlainFetcher.propagate(
              connection,
              {
                  ...getByNormalId.METADATA,
                  path: getByNormalId.path(normalId, query),
              } as const,
          );
}
export namespace getByNormalId {
    export type Query = Resolved<INormal>;
    export type Output = IPropagation<{
        200: INormal.IPublicProfile;
        404: IAuthentication.OuathType;
    }>;

    export const METADATA = {
        method: "GET",
        path: "/users/normals/:normalId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (normalId: string, query: getByNormalId.Query): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/users/normals/${encodeURIComponent(normalId ?? "null")}${encoded.length ? `?${encoded}` : ""}`;;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<INormal.IPublicProfile> =>
        typia.random<Primitive<INormal.IPublicProfile>>(g);
    export const simulate = async (
        connection: IConnection,
        normalId: string,
        query: getByNormalId.Query,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(normalId, query),
            contentType: "application/json",
        });
        try {
            assert.param("normalId")(() => typia.assert(normalId));
            assert.query(() => typia.assert(query));
        } catch (exp) {
            if (!typia.is<HttpError>(exp)) throw exp;
            return {
                success: false,
                status: exp.status,
                headers: exp.headers,
                data: exp.toJSON().message,
            } as any;
        }
        return {
            success: true,
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
            data: random(
                typeof connection.simulate === 'object' &&
                    connection.simulate !== null
                    ? connection.simulate
                    : undefined
            ),
        }
    }
}
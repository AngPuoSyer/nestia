/**
 * @packageDocumentation
 * @module api.functional.performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";
import typia from "typia";

import type { IPerformance } from "./../../structures/IPerformance";

/**
 * @controller PerformanceController.get()
 * @path GET /performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
): Promise<get.Output> {
    return !!connection.random
        ? get.random(
              typeof connection.random === "object" &&
                  connection.random !== null
                  ? connection.random
                  : undefined
          )
        : Fetcher.fetch(
              connection,
              get.ENCRYPTED,
              get.METHOD,
              get.path(),
          );
}
export namespace get {
    export type Output = Primitive<IPerformance>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/performance";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/performance`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
}
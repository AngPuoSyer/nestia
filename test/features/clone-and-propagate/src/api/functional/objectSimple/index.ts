/**
 * @packageDocumentation
 * @module api.functional.objectSimple
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type {
  IConnection,
  IPropagation,
  Primitive,
  HttpError,
} from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { ObjectSimple } from "../../structures/ObjectSimple";
import { NestiaSimulator } from "../../utils/NestiaSimulator";

/**
 * @controller ObjectSimpleController.index
 * @path GET /objectSimple
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(connection: IConnection): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection)
    : PlainFetcher.propagate(connection, {
        ...index.METADATA,
        path: index.path(),
      });
}
export namespace index {
  export type Output = IPropagation<{
    200: ObjectSimple.IBox3D[];
  }>;

  export const METADATA = {
    method: "GET",
    path: "/objectSimple",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/objectSimple";
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<ObjectSimple.IBox3D[]>>(g);
  export const simulate = (connection: IConnection): Output => {
    return {
      success: true,
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    };
  };
}

/**
 * @controller ObjectSimpleController.at
 * @path GET /objectSimple/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  id: number,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, id)
    : PlainFetcher.propagate(connection, {
        ...at.METADATA,
        path: at.path(id),
      });
}
export namespace at {
  export type Output = IPropagation<{
    200: ObjectSimple.IBox3D;
  }>;

  export const METADATA = {
    method: "GET",
    path: "/objectSimple/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: number) =>
    `/objectSimple/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<ObjectSimple.IBox3D>>(g);
  export const simulate = (connection: IConnection, id: number): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    try {
      assert.param("id")(() => typia.assert(id));
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
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    };
  };
}

/**
 * @controller ObjectSimpleController.store
 * @path POST /objectSimple
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
  connection: IConnection,
  body: store.Input,
): Promise<store.Output> {
  return !!connection.simulate
    ? store.simulate(connection, body)
    : PlainFetcher.propagate(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...store.METADATA,
          path: store.path(),
        },
        body,
      );
}
export namespace store {
  export type Input = Primitive<ObjectSimple.IBox3D>;
  export type Output = IPropagation<{
    201: ObjectSimple.IBox3D;
  }>;

  export const METADATA = {
    method: "POST",
    path: "/objectSimple",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/objectSimple";
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<ObjectSimple.IBox3D>>(g);
  export const simulate = (
    connection: IConnection,
    body: store.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    try {
      assert.body(() => typia.assert(body));
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
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    };
  };
}

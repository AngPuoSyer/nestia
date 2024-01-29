import type { Format } from "typia/lib/tags/Format";

import type { ISwaggerComponents } from "./ISwaggerComponents";
import type { ISwaggerInfo } from "./ISwaggerInfo";
import type { RecordstringRecordstringISwaggerRoute } from "./RecordstringRecordstringISwaggerRoute";

/**
 * Swagger Document.
 *
 * `ISwagger` is a data structure representing content of `swagger.json` file
 * generated by Nestia. Note that, this is not an universal structure, but a dedicated
 * structure only for Nestia.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type ISwagger = {
  /**
   * The version of the OpenAPI document.
   *
   * Nestia always generate OpenAPI 3.0.x document.
   */
  openapi: `3.0.${number}`;
  /**
   * List of servers that provide the API.
   */
  servers: ISwagger.IServer[];
  /**
   * Information about the API.
   */
  info: ISwaggerInfo;
  /**
   * The available paths and operations for the API.
   *
   * The 1st key is the path, and the 2nd key is the HTTP method.
   */
  paths: RecordstringRecordstringISwaggerRoute;
  /**
   * An object to hold reusable data structures.
   *
   * It stores both DTO schemas and security schemes.
   *
   * For reference, `nestia` defines every object and alias types as reusable DTO
   * schemas. The alias type means that defined by `type` keyword in TypeScript.
   */
  components: ISwaggerComponents;
};
export namespace ISwagger {
  /**
   * Remote server definition.
   */
  export type IServer = {
    /**
     * A URL to the target host.
     */
    url: string & Format<"uri">;
    /**
     * An optional string describing the target server.
     */
    description?: undefined | string;
  };
}

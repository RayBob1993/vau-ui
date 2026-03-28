import { FormItemValidationStatus, FormModel } from '../types';
import { ZodObject } from 'zod';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseFormItemValidationOptions {
    data: MaybeRefOrGetter<MaybeNull<FormModel>>;
    schema: MaybeRefOrGetter<MaybeNull<ZodObject>>;
    onValid?: VoidFunction;
    onInvalid?: VoidFunction;
}
export declare function useFormItemValidation(options: UseFormItemValidationOptions): {
    validationStatus: import('vue').Ref<{
        isError: boolean;
        isValidating: boolean;
        isSuccess: boolean;
    }, FormItemValidationStatus | {
        isError: boolean;
        isValidating: boolean;
        isSuccess: boolean;
    }>;
    validationErrors: import('vue').Ref<({
        readonly code: "invalid_type";
        readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "too_big";
        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
        readonly maximum: number | bigint;
        readonly inclusive?: boolean | undefined;
        readonly exact?: boolean | undefined;
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "too_small";
        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
        readonly minimum: number | bigint;
        readonly inclusive?: boolean | undefined;
        readonly exact?: boolean | undefined;
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_format";
        readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
        readonly pattern?: string | undefined;
        readonly input?: string | undefined;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "not_multiple_of";
        readonly divisor: number;
        readonly input?: number | bigint | undefined;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "unrecognized_keys";
        readonly keys: string[];
        readonly input?: Record<string, unknown> | undefined;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_union";
        readonly errors: ({
            readonly code: "invalid_type";
            readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_format";
            readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | bigint | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: Record<string, unknown> | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | /*elided*/ any | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_key";
            readonly origin: "map" | "record";
            readonly issues: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: unknown;
                readonly issues: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_element";
            readonly origin: "map" | "set";
            readonly key: unknown;
            readonly issues: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_value";
            readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: Record<string, any> | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        })[][];
        readonly input?: unknown;
        readonly discriminator?: string | undefined | undefined;
        readonly inclusive?: true | undefined;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_union";
        readonly errors: [];
        readonly input?: unknown;
        readonly discriminator?: string | undefined | undefined;
        readonly inclusive: false;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_key";
        readonly origin: "map" | "record";
        readonly issues: ({
            readonly code: "invalid_type";
            readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_format";
            readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | bigint | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: Record<string, unknown> | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: unknown;
                readonly issues: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[][];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive?: true | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: PropertyKey[];
            readonly message: string;
        } | /*elided*/ any | {
            readonly code: "invalid_element";
            readonly origin: "map" | "set";
            readonly key: unknown;
            readonly issues: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[][];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_value";
            readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: Record<string, any> | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        })[];
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_element";
        readonly origin: "map" | "set";
        readonly key: unknown;
        readonly issues: ({
            readonly code: "invalid_type";
            readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_format";
            readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | bigint | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: Record<string, unknown> | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[][];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive?: true | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_key";
            readonly origin: "map" | "record";
            readonly issues: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[][];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | /*elided*/ any | {
            readonly code: "invalid_value";
            readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: Record<string, any> | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        })[];
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_value";
        readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "custom";
        readonly params?: Record<string, any> | undefined;
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    })[], import('zod/v4/core').$ZodIssue[] | ({
        readonly code: "invalid_type";
        readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "too_big";
        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
        readonly maximum: number | bigint;
        readonly inclusive?: boolean | undefined;
        readonly exact?: boolean | undefined;
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "too_small";
        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
        readonly minimum: number | bigint;
        readonly inclusive?: boolean | undefined;
        readonly exact?: boolean | undefined;
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_format";
        readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
        readonly pattern?: string | undefined;
        readonly input?: string | undefined;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "not_multiple_of";
        readonly divisor: number;
        readonly input?: number | bigint | undefined;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "unrecognized_keys";
        readonly keys: string[];
        readonly input?: Record<string, unknown> | undefined;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_union";
        readonly errors: ({
            readonly code: "invalid_type";
            readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_format";
            readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | bigint | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: Record<string, unknown> | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | /*elided*/ any | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_key";
            readonly origin: "map" | "record";
            readonly issues: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: unknown;
                readonly issues: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_element";
            readonly origin: "map" | "set";
            readonly key: unknown;
            readonly issues: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_value";
            readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: Record<string, any> | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        })[][];
        readonly input?: unknown;
        readonly discriminator?: string | undefined | undefined;
        readonly inclusive?: true | undefined;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_union";
        readonly errors: [];
        readonly input?: unknown;
        readonly discriminator?: string | undefined | undefined;
        readonly inclusive: false;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_key";
        readonly origin: "map" | "record";
        readonly issues: ({
            readonly code: "invalid_type";
            readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_format";
            readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | bigint | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: Record<string, unknown> | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: unknown;
                readonly issues: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[][];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive?: true | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: PropertyKey[];
            readonly message: string;
        } | /*elided*/ any | {
            readonly code: "invalid_element";
            readonly origin: "map" | "set";
            readonly key: unknown;
            readonly issues: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[][];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_value";
            readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: Record<string, any> | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        })[];
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_element";
        readonly origin: "map" | "set";
        readonly key: unknown;
        readonly issues: ({
            readonly code: "invalid_type";
            readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number | bigint;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_format";
            readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | bigint | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: Record<string, unknown> | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[][];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive?: true | undefined;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: unknown;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "invalid_key";
            readonly origin: "map" | "record";
            readonly issues: ({
                readonly code: "invalid_type";
                readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number | bigint;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_format";
                readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | bigint | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: Record<string, unknown> | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_type";
                    readonly expected: import('zod/v4/core').$ZodInvalidTypeExpected;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number | bigint;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_format";
                    readonly format: import('zod/v4/core').$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | bigint | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: Record<string, unknown> | undefined;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: unknown;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: Record<string, any> | undefined;
                    readonly input?: unknown;
                    readonly path: PropertyKey[];
                    readonly message: string;
                })[][];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: unknown;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: PropertyKey[];
                readonly message: string;
            } | /*elided*/ any | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: Record<string, any> | undefined;
                readonly input?: unknown;
                readonly path: PropertyKey[];
                readonly message: string;
            })[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | /*elided*/ any | {
            readonly code: "invalid_value";
            readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: Record<string, any> | undefined;
            readonly input?: unknown;
            readonly path: PropertyKey[];
            readonly message: string;
        })[];
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "invalid_value";
        readonly values: import('node_modules/zod/v4/core/util.cjs').Primitive[];
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "custom";
        readonly params?: Record<string, any> | undefined;
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    })[]>;
    clearValidateErrors: () => void;
    validate: (silent?: boolean) => Promise<boolean>;
};

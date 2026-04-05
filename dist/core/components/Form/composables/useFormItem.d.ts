import { MaybeNull } from '../../../types';
import { FormRootContext, FormItemProps } from '../types';
import { z } from 'zod';
import { MaybeRefOrGetter, Ref, ComputedRef } from 'vue';
import { FormItemValidationStatus, FormItemField } from '..';
export interface UseFormItemOptions {
    formRootContext: MaybeNull<FormRootContext>;
    props: MaybeRefOrGetter<FormItemProps>;
    onValid?: VoidFunction;
    onInvalid?: VoidFunction;
}
export declare function useFormItem(options: UseFormItemOptions): {
    id: string;
    validationErrors: Ref<({
        readonly code: "invalid_type";
        readonly expected: z.core.$ZodInvalidTypeExpected;
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
        readonly format: z.core.$ZodStringFormats | (string & {});
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
            readonly expected: z.core.$ZodInvalidTypeExpected;
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
            readonly format: z.core.$ZodStringFormats | (string & {});
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
            readonly values: z.core.util.Primitive[];
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
            readonly expected: z.core.$ZodInvalidTypeExpected;
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
            readonly format: z.core.$ZodStringFormats | (string & {});
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
            readonly values: z.core.util.Primitive[];
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
            readonly expected: z.core.$ZodInvalidTypeExpected;
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
            readonly format: z.core.$ZodStringFormats | (string & {});
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
            readonly values: z.core.util.Primitive[];
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
        readonly values: z.core.util.Primitive[];
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    } | {
        readonly code: "custom";
        readonly params?: Record<string, any> | undefined;
        readonly input?: unknown;
        readonly path: PropertyKey[];
        readonly message: string;
    })[], z.core.$ZodIssue[] | ({
        readonly code: "invalid_type";
        readonly expected: z.core.$ZodInvalidTypeExpected;
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
        readonly format: z.core.$ZodStringFormats | (string & {});
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
            readonly expected: z.core.$ZodInvalidTypeExpected;
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
            readonly format: z.core.$ZodStringFormats | (string & {});
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
            readonly values: z.core.util.Primitive[];
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
            readonly expected: z.core.$ZodInvalidTypeExpected;
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
            readonly format: z.core.$ZodStringFormats | (string & {});
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
            readonly values: z.core.util.Primitive[];
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
            readonly expected: z.core.$ZodInvalidTypeExpected;
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
            readonly format: z.core.$ZodStringFormats | (string & {});
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
                readonly expected: z.core.$ZodInvalidTypeExpected;
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
                readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly expected: z.core.$ZodInvalidTypeExpected;
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
                    readonly format: z.core.$ZodStringFormats | (string & {});
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
                    readonly values: z.core.util.Primitive[];
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
                readonly values: z.core.util.Primitive[];
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
            readonly values: z.core.util.Primitive[];
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
        readonly values: z.core.util.Primitive[];
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
    validationStatus: Ref<{
        isError: boolean;
        isValidating: boolean;
        isSuccess: boolean;
    }, FormItemValidationStatus | {
        isError: boolean;
        isValidating: boolean;
        isSuccess: boolean;
    }>;
    isDisabled: ComputedRef<boolean>;
    isRequired: ComputedRef<boolean>;
    reset: () => void;
    validate: (silent?: boolean) => Promise<boolean>;
    clearValidateErrors: () => void;
    registerField: (newField: FormItemField) => void;
    unregisterField: () => void;
};

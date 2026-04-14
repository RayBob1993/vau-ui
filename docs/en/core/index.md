# Core

The **core** layer of the **`vau-ui`** npm package — headless primitives and shared logic: compound components, composables, utilities, types, and constants.

## Purpose

- **Compound components** — each primitive is an object of parts (`Root`, `Item`, `Trigger`, etc.) composed in the template.
- **Composables** take an explicit `Use*Options` contract without hidden globals, which keeps logic testable and composable.
- **Styles** are loaded separately (e.g. `vau-ui/styles`); primitives focus on markup and behavior.

## Import

```ts
import { Button, Form, Accordion } from 'vau-ui';
```

## Sections

- [Components](components/)
- [Composables](composables/)
- [Utils](utils/)
- [Directives](directives/)
- [Constants](constants/)
- [Types](types/)

## Source

Repository path: [`src/lib/core/`](https://github.com/RayBob1993/vau-ui/tree/main/src/lib/core).

# Getting started

A minimal guide for the **`vau-ui`** npm package. This section will expand as the API stabilizes and the package is published.

## Installation

When the package is published to npm:

```bash
pnpm add vau-ui
```

Before publication you can depend on Git (branch or tag) — see [pnpm’s docs on git dependencies](https://pnpm.io/cli/add).

## Requirements

The library declares **peer dependencies** (your app must provide them), including **Vue 3** and **zod** — see `peerDependencies` in the repository `package.json`.

## Import

Primitives and widgets are imported from a single package:

```ts
import { Button, VButton } from 'vau-ui';
```

More on the **Core** and **UI** layers: [Core](core/index.md), [UI](ui/index.md).

## Styles

Import core styles in your app entry, for example:

```ts
import 'vau-ui/styles';
```

Additional entries (`config`, `mixins`) are listed under `exports` in the `vau-ui` `package.json`.

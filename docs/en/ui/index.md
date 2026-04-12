# UI

The **ui** layer of the **`vau-ui`** npm package — ready-made **`V*`** widgets and Vue **plugins**. It builds on the **core** layer from the same package and does not expose the lower layer directly as the public consumer API.

## Purpose

- **`V…` components** (e.g. `app.component`) — consistent look and theming.
- **Plugins** — register groups of components for your app.
- Layering: **UI → core** is allowed; the reverse is not.

## Import

```ts
import { VButton, VForm } from 'vau-ui';
```

See [`src/lib/ui/`](https://github.com/RayBob1993/vau-ui/tree/main/src/lib/ui) for exports; use plugins from the `plugins` subfolders when needed.

## Source

Repository path: [`src/lib/ui/`](https://github.com/RayBob1993/vau-ui/tree/main/src/lib/ui).

This section will grow with widget pages and plugin setup guides.

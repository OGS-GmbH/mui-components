---
prev: false
next: false
---

# Holy Grail Layout

The Holy Grail layout is a common page structure consisting of:

- A header
- A footer
- A central area with optional sidebars

It is typically used for application layouts where content needs to be framed by navigation or additional panels.

---

## The Expanded Layout (Common Holy Grail Layout)

::: warning Required
The contained layout requires `variant="expand"` to be set on the `HolyGrail` container.

Without this, the layout will not be rendered vertically.
:::

This variant represents the classic Holy Grail layout:

- Header at the top
- Footer at the bottom
- A central row containing:
  - Left sidebar
  - Main content
  - Right sidebar

The layout expands to fill the available viewport space.

### Structure

```txt
Header
---------------------------
Sidebar | Content | Sidebar
---------------------------
Footer
```

### Example

```tsx [expanded.tsx]
import { HolyGrail } from "./holy-grail";
import {
  HolyGrailColumn,
  HolyGrailContent,
  HolyGrailFooter,
  HolyGrailHeader,
  HolyGrailRow
} from "./container";

function Expanded() {
  return (
    <HolyGrail variant="expand">
      <HolyGrailHeader>
        <ExampleHeader>HEADER</ExampleHeader>
      </HolyGrailHeader>

      <HolyGrailRow>
        <HolyGrailColumn overflow>
          <ExampleSidebar>SIDEBAR</ExampleSidebar>
        </HolyGrailColumn>

        <HolyGrailContent overflow>
          <ExampleContent>Holy-grail-content</ExampleContent>
        </HolyGrailContent>

        <HolyGrailColumn overflow>
          <ExampleSidebar>SIDEBAR</ExampleSidebar>
        </HolyGrailColumn>
      </HolyGrailRow>
      <HolyGrailFooter>
        <ExampleFooter>FOOTER</ExampleFooter>
      </HolyGrailFooter>
    </HolyGrail>
  );
}
```

## The Contained Layout

::: warning Required
The contained layout requires `variant="contained"` to be set on the `HolyGrail` container.

Without this, the layout will not be rendered horizontally.
:::

This variant represents a horizontally structured Holy Grail layout:

- Sidebars are placed on the left and right
- The main content area is centered
- Header and footer are nested inside the central column

The layout uses a horizontal main axis and distributes space across columns.

---

### Structure

```txt
Sidebar |        Header         | Sidebar
        |-----------------------|
        |        Content        |
        |-----------------------|
        |        Footer         |
```

### Example

```tsx [contained.tsx]
import { HolyGrail } from "./holy-grail";
import { HolyGrailColumn, HolyGrailContent, HolyGrailFooter, HolyGrailHeader } from "./container";

function Contained() {
  return (
    <HolyGrail variant="contained">
      <HolyGrailColumn overflow>
        <ExampleSidebar>SIDEBAR</ExampleSidebar>
      </HolyGrailColumn>

      <HolyGrailColumn expand>
        {/* main column expands to fill remaining space */}
        <HolyGrailHeader>
          <ExampleHeader>HEADER</ExampleHeader>
        </HolyGrailHeader>
        <HolyGrailContent overflow>
          <ExampleContent>Holy-grail-content</ExampleContent>
        </HolyGrailContent>
        <HolyGrailFooter>
          <ExampleFooter>FOOTER</ExampleFooter>
        </HolyGrailFooter>
      </HolyGrailColumn>

      <HolyGrailColumn overflow>
        <ExampleSidebar>SIDEBAR</ExampleSidebar>
      </HolyGrailColumn>
    </HolyGrail>
  );
}
```

## Advanced Layout Variants

The following variants extend the expanded layout by moving the header or footer into the central layout column.

These layouts still rely on `variant="expand"` but change how sections are composed.

---

### Expanded Header

In this variant, the footer is moved into the main layout column,
while the header remains at the top level.

This changes the layout structure by making the footer part of the central column
instead of a top-level section.

### Structure

```txt
Header
-----------------------------------
Sidebar |                 | Sidebar
        |-----------------|
        |     Content     |
        |-----------------|
        |     Footer      |
```

### Example

```tsx [expanded-header.tsx]
import { HolyGrail } from "./holy-grail";
import { HolyGrailColumn, HolyGrailContent, HolyGrailFooter, HolyGrailHeader } from "./container";

function ExpandedHeader() {
  return (
    <HolyGrail variant="expand">
      <HolyGrailHeader>
        <ExampleHeader>HEADER</ExampleHeader>
      </HolyGrailHeader>

      <HolyGrailRow>
        <HolyGrailColumn overflow>
          <ExampleSidebar>SIDEBAR</ExampleSidebar>
        </HolyGrailColumn>

        <HolyGrailColumn expand>
          {/* main column expands to fill remaining space */}
          <HolyGrailContent overflow>
            <ExampleContent>Holy-grail-content</ExampleContent>
          </HolyGrailContent>
          <HolyGrailFooter>
            <ExampleFooter>FOOTER</ExampleFooter>
          </HolyGrailFooter>
        </HolyGrailColumn>

        <HolyGrailColumn overflow>
          <ExampleSidebar>SIDEBAR</ExampleSidebar>
        </HolyGrailColumn>
      </HolyGrailRow>
    </HolyGrail>
  );
}
```

---

### Expanded Footer

In this variant, the header is moved into the main layout column,
while the footer remains at the top level.

This changes the layout structure by making the header part of the central column
instead of a top-level section.

### Structure

```txt
Sidebar |     Header      | Sidebar
        |-----------------|
        |     Content     |
-----------------------------------
Footer
```

### Example

```tsx [expanded-footer.tsx]
import { HolyGrail } from "./holy-grail";
import { HolyGrailColumn, HolyGrailContent, HolyGrailFooter, HolyGrailHeader } from "./container";

function ExpandedFooter() {
  return (
    <HolyGrail variant="expand">
      <HolyGrailRow>
        <HolyGrailColumn overflow>
          <ExampleSidebar>SIDEBAR</ExampleSidebar>
        </HolyGrailColumn>

        <HolyGrailColumn expand>
          {/* main column expands to fill remaining space */}
          <HolyGrailHeader>
            <ExampleHeader>HEADER</ExampleHeader>
          </HolyGrailHeader>
          <HolyGrailContent>
            <ExampleContent>Holy-grail-content</ExampleContent>
          </HolyGrailContent>
        </HolyGrailColumn>

        <HolyGrailColumn overflow>
          <ExampleSidebar>SIDEBAR</ExampleSidebar>
        </HolyGrailColumn>
      </HolyGrailRow>

      <HolyGrailFooter>
        <ExampleFooter>FOOTER</ExampleFooter>
      </HolyGrailFooter>
    </HolyGrail>
  );
}
```

## Summary

The Holy Grail layout is built from composable primitives:

- `HolyGrail` defines the main layout axis
- `HolyGrailRow` and `HolyGrailColumn` structure the layout
- `HolyGrailHeader`, `HolyGrailContent`, and `HolyGrailFooter` define sections

By rearranging these components, different layout variants can be created
without introducing new abstractions.

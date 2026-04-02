# Henkel Design System

Angular component library for Henkel DX applications — built with Angular 19, Storybook 10, and a token-driven Figma library.

---

## Quick links

| Resource | URL |
|---|---|
| Figma file | [Henkel Design System](https://www.figma.com/design/PfBwGyxNyCE5ir5Ec9gj2r/Henkel-Design-System) |
| Storybook (live) | _add your deployed URL here_ |
| Figma Dev Mode | Open Figma link → click `</>` top-right |

---

## Getting started

### Prerequisites
- Node.js 18+
- npm 9+

### Install
```bash
cd design-system-angular
npm install
```

### Run Storybook locally
```bash
npm run storybook
# Opens at http://localhost:6006
```

### Build static Storybook
```bash
npm run build-storybook
# Output → storybook-static/
```

### Run the Angular app
```bash
npm start
# Opens at http://localhost:4200
```

---

## Components

All components live in `projects/design-system-angular-app/src/stories/henkel/`.
Every component is **standalone** (Angular 19) — import directly, no NgModule needed.

| Component | Selector | File |
|---|---|---|
| Button | `<hds-button>` | `hds-button.component.ts` |
| Input Field | `<hds-input>` | `input-field.component.ts` |
| Toggle | `<hds-toggle>` | `toggle.component.ts` |
| Tab Navigation | `<hds-tab-nav>` | `tab-nav.component.ts` |
| List Item | `<hds-list-item>` | `list-item.component.ts` |
| Filter Panel | `<hds-filter-panel>` | `filter-panel.component.ts` |

---

## Usage examples

### Button
```html
<hds-button
  label="New Initiative"
  variant="primary"
  icon="add"
  (clicked)="onAdd()">
</hds-button>
```
| Input | Type | Default | Values |
|---|---|---|---|
| `label` | `string` | `''` | any text |
| `variant` | `string` | `'primary'` | `primary` · `secondary` · `ghost` |
| `size` | `string` | `'md'` | `sm` · `md` · `lg` |
| `icon` | `string` | — | `add` · `delete` · `expand_more` · `expand_less` |
| `disabled` | `boolean` | `false` | — |
| `(clicked)` | `EventEmitter<Event>` | — | — |

---

### Input Field
```html
<hds-input
  label="Name"
  [required]="true"
  [value]="name"
  (valueChange)="name = $event">
</hds-input>
```
Implements `ControlValueAccessor` — works with Reactive Forms:
```html
<hds-input formControlName="projectName" label="Project Name"></hds-input>
```

---

### Toggle
```html
<hds-toggle
  [checked]="isEnabled"
  label="Enable notifications"
  (checkedChange)="isEnabled = $event">
</hds-toggle>
```

---

### Tab Navigation
```typescript
tabs = [
  { label: 'Details / Components', icon: 'quick_reference_all' },
  { label: 'Sites', icon: 'adjust' },
  { label: 'History', icon: 'history' },
];
```
```html
<hds-tab-nav
  [tabs]="tabs"
  [activeIndex]="activeTab"
  (tabChange)="activeTab = $event">
</hds-tab-nav>
```

---

### List Item
```html
<hds-list-item
  title="RAQN Web – Consent Management"
  subtitle="Test subtext lorem ipsum dolor"
  [expandable]="true"
  [deletable]="true"
  (deleteItem)="onDelete()">
</hds-list-item>
```

---

### Filter Panel
```typescript
filterOptions = [
  { label: 'SalonLab Core Acceleration', checked: false },
  { label: 'Salonory USA / Europe', checked: false },
];
```
```html
<hds-filter-panel
  title="Filter by Initiatives"
  [options]="filterOptions"
  [expanded]="true"
  (optionsChange)="filterOptions = $event">
</hds-filter-panel>
```

---

## Design tokens

All tokens are defined as Figma variables and map 1-to-1 to CSS custom properties.
Add these to your app's global stylesheet (`styles.css`):

```css
:root {
  /* Brand */
  --color-brand-default: #e1000f;
  --color-brand-hover:   #c0000d;

  /* Text */
  --color-text-primary:   #161616;
  --color-text-secondary: #6c7884;
  --color-text-on-brand:  #ffffff;

  /* Backgrounds */
  --color-bg-surface: #ffffff;
  --color-bg-input:   #f1f3f7;
  --color-bg-track:   #d7dbe0;
  --color-bg-error:   #fff0f1;

  /* Border & Error */
  --color-border-default: #e6eaf0;
  --color-error-default:  #e1000f;

  /* Spacing */
  --spacing-xs:  4px;
  --spacing-sm:  8px;
  --spacing-md:  12px;
  --spacing-lg:  16px;
  --spacing-xl:  24px;
  --spacing-2xl: 32px;

  /* Radius */
  --radius-sm:   2px;
  --radius-md:   8px;
  --radius-lg:   28px;
  --radius-full: 100px;
}
```

---

## Typography

| Style | Font | Weight | Size | Line height |
|---|---|---|---|---|
| `Heading/M` | Segoe UI | Semibold | 15px | 24px |
| `Body/L` | Segoe UI | Semibold | 15px | 24px |
| `Body/M` | Segoe UI | Regular | 13px | 20px |
| `Body/S` | Segoe UI | Regular | 11px | 14px |
| `Button/M` | Segoe UI | Semibold | 15px | 23px |
| `Label/M` | Segoe UI | Regular | 13px | 18px |

---

## Project structure

```
design-system-angular/
├── projects/
│   └── design-system-angular-app/
│       ├── .storybook/               # Storybook config (main.ts, preview.ts)
│       └── src/
│           └── stories/
│               └── henkel/           # ← HDS components
│                   ├── hds-button.component.ts
│                   ├── hds-button.css
│                   ├── hds-button.stories.ts
│                   ├── input-field.component.ts
│                   ├── toggle.component.ts
│                   ├── tab-nav.component.ts
│                   ├── list-item.component.ts
│                   └── filter-panel.component.ts
├── package.json
└── README.md
```

---

## Contributing

1. Branch off main: `git checkout -b feat/component-name`
2. Build the component in `stories/henkel/`
3. Add a `.stories.ts` with all variants and states
4. Mirror the changes in the Figma file
5. Open a PR — include a Storybook screenshot and Figma node link

---

## Tech stack

| Tool | Version |
|---|---|
| Angular | 19.2 |
| Storybook | 10.3 |
| TypeScript | 5.7 |
| Compodoc | 1.2 |

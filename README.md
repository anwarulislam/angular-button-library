# Medatus Button

A customizable button library for Angular applications.

## Installation

To install this library, run:

Copy code

`npm install medatus-button`

## Usage

Import the `MedatusButtonModule` in your Angular application:

```typescript
import { MedatusButtonModule } from "medatus-button";

@NgModule({
  imports: [MedatusButtonModule],
  // ...
})
export class AppModule {}
```

Use the `medatus-button` directive in your template:

```html
<button medatus-button>Click me</button>
```

## Customization

The `medatus-button` directive supports several inputs for customization:

### `medatusButton` (required)

This input is required for the directive to work. It should be set to a string value.

### `size` (optional)

This input sets the size of the button. It can be one of the following values:

- `small`
- `medium` (default)
- `large`

### `type` (optional)

This input sets the type of the button. It can be one of the following values:

- `filled` (default)
- `outline`
- `text`

### `color` (optional)

This input sets the color of the button. It can be any valid CSS color value. The default value is `primary`.

### `shape` (optional)

This input sets the shape of the button. It can be one of the following values:

- `rounded`
- `square`
- `pilled` (default)

## Events

The `medatus-button` directive supports the following events:

- `mouseenter` and `mouseleave` for hover state
- `mousedown` and `mouseup` for active state
- `focus` and `blur` for focus state

## Example

Here is an example of a customized `medatus-button`:

```html
<button
  medatus-button
  size="large"
  type="outline"
  color="orange"
  shape="rounded"
>
  Click me
</button>
```

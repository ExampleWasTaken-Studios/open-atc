# FLARE 
FLARE (Fast, Lightweight, Adaptable and Reactive Engine) is a 2D render engine.  
It uses a custom canvas and does not make use of the native HTML `<canvas>` element.
---
## Getting Started
Each FLARE implementation needs at least three components (although it will most likely be more):
- [\<Scene\>](#Scene)
- [\<Canvas\>](#Canvas)
- \<CanvasElement\>
  - [\<Rectangle\>](#Rectangle)
  - [\<Circle\>](#Circle)

### `<Scene>`
Think of the `<Scene>` component kind of like the viewport of FLARE.
Inside it is where it's all happening. 
The scene component is used to position FLARE on your website.

### `<Canvas>`
The `<Canvas>` component is the components that actually renders your content.
It is always the size of the Scene component.

### `<Rectangle>`
The `<Rectangle>` component is a canvas element meaning it can be rendered
on the canvas by passing it as a child to it.
As the name implies it renders as a rectangle of the specified size.

### `<Circle>`
The `<Circle>` component, too, is a canvas element.
As the name suggests it renders as a circle.

> This guide does not cover props. Use the TypeScript interfaces as reference.

# Usage

```tsx
import { Scene } from '@ewt-studios/flare'
import { Canvas } from '@ewt-studios/flare';
import { Rectangle } from '@ewt-studios/flare';

const App = () => {
  return (
    <Scene className="class-1 class-2">
      <Canvas>
        <Rectangle
          x={10}
          y={10}
          z={0} // Controls the z-index
          width={100}
          height={80}
          style="outline"
          color="green"
          borderWidth={2}
          key={0}
        >
          <div>Hello World from a rectangle!</div>
        </Rectangle>
        <Circle
          x={30}    
          y={30}
          z={0}
          diameter={100}
          key={1}
        >
          <div>Hello World from a circle!</div>
        </Circle>
      </Canvas>
    </Scene>
  )
}
```

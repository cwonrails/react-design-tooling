---

# The State of<br/>Design Tooling & React

---

<img
  data-src='http://jxnblk.com/avatar/avatar.svg'
  src='http://jxnblk.com/avatar/avatar-640.png'
  width='128'
  height='128'
  style='border-radius:9999px'
  alt='avatar'
/>

## Brent Jackson

## @jxnblk


---

Principal UX Developer<br/>at Priceline.com

1/3 of Compositor. Previously at<br />Kickstarter, Etsy, and The Grid

---

Rebass, Basscss, CSS Stats

---

# Background

---

Designer

---

Stitch Fix

---

Downward spiral of<br /> front-end development

---

Nicole Sullivan & OOCSS

---

1. Separate structure and skin
2. Separate container and content

---

Basscss & Tachyons

---

Design constraints

---

<div style='font-size:64px'>64px</div>
<div style='font-size:48px'>48px</div>
<div style='font-size:32px'>32px</div>
<div style='font-size:24px'>24px</div>
<div style='font-size:16px'>16px</div>

---

- Typographic Scale `h1 – h6`
- Spacing Scale `m0 – m4`
- Composition `className='h2 mt4 mb2'`

---

Design velocity

---

> “We've been trying OOCSS at @kickstarter (thx to @jxnblk) and it now means I can prototype new pages without writing a single line of CSS.”

- [Jessica Harlee](https://twitter.com/harllee/status/403175957089222656)

---

Designers who code

---

Code literacy

---

Ideas spread like fire

---

- Etsy
- Buzzfeed
- Functional CSS
- GitHub

---

> “Basscss is an atomic class based CSS library... A very good one! But I really hated it at the time. But I don’t hate it anymore!”

- [Sam Thurman](https://medium.com/buzzfeed-design/how-i-learned-to-stop-worrying-and-love-the-atomic-class-98d6ccc45781#.yqnsfkbx2)

---

༼ ༎ຶ ෴ ༎ຶ༽

---

ᕕ( ᐛ )ᕗ

---

React

---

> “If you’re writing React, you have access to a more powerful styling construct than CSS class names. You have components.”

- [Michael Chan](https://medium.learnreact.com/scale-fud-and-style-components-c0ce87ec9772)

---

Pure UI

---

<!--
> “A pure function is one that exhibits the property of substitution: replacing a call with its returned value should make the program equivalent. As an example, `concat('hello', 'world')` can be substituted with `'hello world'` without changing the behavior of your program.

- [Guillermo Rauch *Pure UI*](https://rauchg.com/2015/pure-ui)



> “How can we apply this to a graphical user interface? By having the function return an abstract representation of widgets (or markup) to be rendered on the screen...”

- [Guillermo Rauch *Pure UI*](https://rauchg.com/2015/pure-ui)

-->

```js
(state) => ui
```

---

Presentational & Container Components

---

# Current Landscape

---

Create React App

---

```sh
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```

---

Hot Loading

---

Storybook

---

![Rebass Storybook](https://cdn-images-1.medium.com/max/1600/1*YqvTIkE53v_Id97Y_6V8eg.gif)

---

- Isolated UI Development
- Pure, Functional UI
- Approachable
- Separation of presentation & containers

---

styled-components

---

- Components as styling construct
- Approachable
- Themeable
- Extensible

---

```js
const Heading = styled.h2`
  font-size: 32px;
  line-height: 1.25;
  margin: 0;
`

const BlueHeading = styled(Heading)`
  color: ${props => props.theme.blue};
`
```

---

Rebass

---

- Components as styling construct
- Design constraints
- Themeable
- Extensible

---

```
<Text
  bold
  fontSize={4}>
  Hello
</Text>
```

---

```
<Box
  m={2}
  p={3}
  color='white'
  bg='blue'
/>
```

---

```
const Card = styled(Box)`
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .25);
`
```

---

```
const ProductCard = props => (
  <Card width={256}>
    <BackgroundImage src={props.image} />
    <Box p={2}>
      <Subhead>{props.title}</Subhead>
      <Small>{props.text}</Small>
    </Box>
  </Card>
)
```

---

styled-system

---

```js
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
```

---

React Sketch.app

---

![react-sketchapp](https://cloud.githubusercontent.com/assets/591643/24777148/e742cd0e-1ad8-11e7-8751-090f6b2db514.png)

---

- Single source of truth
- Design systems
- True to the medium

---

## Others

- UX Pin
- Figma
- Webflow
- React Studio
- Sketch Plugins
- Etc.

---

# What's wrong with design tools generally?

---

Static images

---

Proprietary formats

---

Redlines

---

![handoff](images/handoff.png)

---

![redline](images/spec.png)

---

Handoff

---

Inefficient workflows

---

Compromised design

---

## The Medium of The Web

---

- Responsive Web Design
- Links & Routing
- Network Connections
- Data Fetching
- Progressive Web Apps

---


# Better Tooling

---

Composition

---

> “A highly composable system provides recombinant components that can be selected and assembled in various combinations to satisfy specific user requirements. In information systems, the essential features that make a component composable are that it be:”

- [Composability (Wikipedia)](https://en.wikipedia.org/wiki/Composability)

---

> self-contained (modular): it can be deployed independently

- [Composability (Wikipedia)](https://en.wikipedia.org/wiki/Composability)

---

> stateless: it treats each request as an independent transaction, unrelated to any previous request

- [Composability (Wikipedia)](https://en.wikipedia.org/wiki/Composability)

---

Design Systems

---

![](images/cf-ui.png)

---

![](images/primer.png)

---

![](images/polaris.png)

---

Design Constraints

---

Baseline Alignment

---

![](images/paper-baseline.jpg)

---

Embrace the Web

---

# The Future

---

Layouts

---

Prototyping

---

Rapid prototyping

---

Browser Dev Tools

---

Design modes

---

Design systems

---

UI component libraries

---

# Thanks

jxnblk.com

---


## References

- [The Media Object][media-object]
- [Pure UI][pure-ui]
- [Presentational & Container Components][dumb-smart]
- [React Sketch.app][react-sketchapp]
- [Storybook][storybook]
- [Rebass][rebass]

[media-object]: http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/
[pure-ui]: https://rauchg.com/2015/pure-ui
[dumb-smart]: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
[react-sketchapp]: https://github.com/airbnb/react-sketchapp
[storybook]: https://storybook.js.org
[rebass]: http://jxnblk.com/rebass

---

## See Also

- [Spectrum.chat](https://spectrum.chat)
- [Figma](https://www.figma.com)
- [Compositor](https://compositor.io)






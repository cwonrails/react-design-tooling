import React from 'react'
import md from 'raw-loader!../DECK.md'
import { createProvider } from 'refunk'
import ThemeProvider from './ThemeProvider'
import Carousel from './Carousel'
import Slide from './Slide'
import Markdown from './Markdown'
import KeyboardShortcuts from './KeyboardShortcuts'
import Hash from './Hash'
import XRay from 'react-x-ray'
import Index from './Index'
import Footer from './Footer'

const slides = md.split('---\n')
  .filter(n => n.length)

const hoc = createProvider({
  index: 0,
  xray: false
})

const App = hoc(props => (
  <ThemeProvider>
    <XRay disabled={!props.xray}>
      <Carousel
        index={props.index % slides.length}
        length={slides.length}>
        {slides.map(slide => (
          <Slide key={slide}>
            <Markdown
              children={slide}
            />
          </Slide>
        ))}
      </Carousel>
      <KeyboardShortcuts />
      <Hash />
      <Index slides={slides} />
      <Footer />
    </XRay>
  </ThemeProvider>
))

export default App

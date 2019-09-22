// https://github.com/react-spring/react-spring/issues/448#issuecomment-460598042

import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import useRouter from './useRouter'
import './styles.css'
import Home from './components/home'
import Nosotros from './components/nosotros'


export default function App() {
  const { location } = useRouter()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-20%,0,0)' },
  })
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route path="/" exact component={Home} />
        <Route path="/nosotros" component={Nosotros}  />
      </Switch>
    </animated.div>
  ))
}


render(
<HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
)

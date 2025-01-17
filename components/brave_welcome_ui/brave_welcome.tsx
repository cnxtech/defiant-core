/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Theme from 'dissenter-ui/theme/brave-default'
import { ThemeProvider } from 'dissenter-ui/theme'

// Components
import App from './components/app'

// Utils
import store from './store'

window.cr.define('brave_welcome', function () {
  'use strict'

  function initialize () {
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </Provider>,
      document.getElementById('root'))
    window.i18nTemplate.process(window.document, window.loadTimeData)
  }

  return {
    initialize
  }
})

document.addEventListener('DOMContentLoaded', window.brave_welcome.initialize)

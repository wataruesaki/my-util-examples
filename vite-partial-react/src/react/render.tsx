import React from 'react'
import ReactDOM from 'react-dom/client'

type App = {
  App: React.ReactNode
}

/**
 * Render React App in one place
 *
 * @param elementId - HTML element id
 * @param App - React App Component
 *
 * @example
 * ```
 * // * HTML
 * <div id="react-example"></div>
 *
 * // * React
 * renderReactApp({
 *   elementId: 'react-example',
 *   App: <ExampleApp />,
 * })
 * ```
 */
export function renderReactApp({
  elementId,
  App,
}: {
  elementId: string
} & App): void {
  ReactDOM.createRoot(document.getElementById(elementId) as HTMLElement).render(
    <React.StrictMode>{App}</React.StrictMode>
  )
}

/**
 * Render React App in multiple places
 *
 * @param selectors - HTML selectors
 * @param App - React App Component
 *
 * @example
 * ```
 * // * HTML
 * <div class="react-example"></div>
 * <div class="react-example"></div>
 * <div class="react-example"></div>
 * ...
 *
 * // * React
 * renderReactApps({
 *   selectors: '.react-example',
 *   App: <ExampleApp />,
 * })
 * ```
 */
export function renderReactApps({
  selectors,
  App,
}: {
  selectors: string
} & App): void {
  const $nodeList = document.querySelectorAll(selectors)

  for (const $node of $nodeList) {
    ReactDOM.createRoot($node).render(
      <React.StrictMode>{App}</React.StrictMode>
    )
  }
}

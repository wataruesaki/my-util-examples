function showTextInElement() {
  const $el = document.getElementById('js-el') as HTMLDivElement
  $el.textContent = 'Hello from scripts!!!'
}

showTextInElement()

export {}

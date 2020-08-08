//META{"name":"CodeBlockLanguage","author":"CyberGsus","url":"https://github.com/CyberGsus/discord-code-block-language"}*//

class CodeBlockLanguage {
  constructor() {
    this.style = `
    .hljs::before {
      content: attr(language);
      text-transform: uppercase;
      font-size: 0.95em;
      font-weight: bold;
      float: right;
      margin: 0 3px;
      color: grey;
    }
    `
    this.styleTag = document.createElement('style')
    this.styleTag.textContent = this.style
  }
  getName() {
    return 'CodeBlockLanguage'
  }
  getAuthor() {
    return 'CyberGsus'
  }
  getShortName() {
    return this.getName()
  }
  getDescription() {
    return 'Adds a language hint to markdown code tags'
  }
  getVersion() {
    return '1.0.0'
  }
  observer(e) {
    if (e.type === 'childList') {
      this.round()
    }
  }
  round() {
    ;[...document.querySelectorAll('.da-markup .hljs')]
      .filter(el => !this.viewedElements.has(el))
      .forEach(el => {
        this.viewedElements.add(el)

        el.setAttribute('language', '')
        el.setAttribute('style', this.style)
        el.onmouseover = () => {
          const language = el.className.split(' ').slice(-1)[0]
          if (language === 'hljs') return
          el.setAttribute('language', language)
        }
        el.onmouseleave = () => el.setAttribute('language', '')
      })
  }
  start() {
    document.head.appendChild(this.styleTag)
    this.viewedElements = new Set()
    this.round()
  }
  stop() {
    document.head.removeChild(this.styleTag)
    this.viewedElements = null
  }
}

module.exports = CodeBlockLanguage

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
        el.onmouseover = () => {
          const splitNames = el.className
            .split(' ')
            .filter(cn => !cn.startsWith('da-'))
          let language = ''
          // 'hljs' and language class are the two last things added to className
          let languageIndex = splitNames.indexOf('hljs') + 1
          // no language set
          if (languageIndex === 0 || languageIndex >= splitNames.length)
            language = ''
          else language = splitNames[languageIndex]
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

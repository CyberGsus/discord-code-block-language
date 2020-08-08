# discord-code-block-language

A [betterdiscord](https://betterdiscord.net/home/) plugin that adds the language name for any given code block when on mouse hover.

## Styling

Currently, the styling uses `.hljs::before` as its target and a `language` attribute added to the code blocks to get the effect done. To override the CSS set for it (position, font, font size etc) can be overriden with the custom CSS option, only take care not to touch the `content` property.

This is the current styling:
```css
.hljs::before {
  content: attr(language); /* DONT TOUCH THIS */
  text-transform: uppercase;
  font-size: 0.95em;
  font-weight: bold;
  float: right;
  margin: 0 3px;
  color: grey;
}
```

## TODO

- [ ] Use a white + opacity color for text.
- [ ] Plugin options (if possible)
  - [ ] Text color
  - [ ] `language` attribute template (or before and after text for content)

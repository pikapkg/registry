import build from './build';

export function main(options) {
  const { position } = options;
  const { text, buttonText, buttonCallback } = options;
  const { css } = build(position);

  return `<div style='${css.modal}'>
    <div style='${css.inner}'>
      ${text}
      <button onclick=${buttonCallback}>${buttonText}</button>
    </div>
  </div>`;
}

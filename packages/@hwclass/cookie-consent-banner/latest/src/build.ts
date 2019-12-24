export default function build(position) {
  let modalCss = '';
  let innerCss = '';

  if (position === 'modal') {
    // open the banner as modal
    modalCss = `
        position: fixed;
        left:50%;
    `;

    innerCss = `
        position: relative;
        left:-50%;
    `;
  } else {
    // place the banner at the bottom of the page as fixed
  }

  return {
    css: {
      modal: modalCss,
      inner: innerCss
    }
  };
}

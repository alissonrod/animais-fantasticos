export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside'; // pq usado aims de 1vez

  function handleOutsideClick(event) { // criada dentro pq só qr q a funcão seja criada quando exec
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, '');
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
}

function ScrollUp() {
  let scrollUp = document.createElement("div");
  scrollUp.setAttribute("id", "scrollUp");
  scrollUp.innerHTML = `
  &#8593;
  `;
  return scrollUp;
}

export { ScrollUp };

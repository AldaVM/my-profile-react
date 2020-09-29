export function getPositionElement(idElement) {
  const element = document.getElementById(idElement);

  return element ? element.offsetTop : 1;
}

export function positionScrollOfElement(position) {
  return (document.documentElement.scrollTop = position);
}

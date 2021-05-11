export const getRoute = () => {
  const url = new URL(window.location.href);
  const hash = url.hash.slice(1).toLowerCase() || "/";
  console.log(`Current URL is ${hash}`);
  const paths = hash.split("/");
  return {
    resource: paths[1],
    id: paths[2],
    verb: paths[3],
  };
};

export const getParsedRoute = () => {
  const request = getRoute();
  // Parse the URL and if it has an id part, change it with the string ":id"
  return (
    `/${request?.resource}` +
    `${request.id ? "/:id" : ""}` +
    `${request.verb ? `/${request.verb}` : ""}`
  );
};

export const setVisible = (element, visible) => {
  if (element instanceof HTMLElement === false) {
    throw new Error(element instanceof HTMLElement);
  }
  if (typeof visible !== "boolean") {
    throw new Error(typeof visible === "boolean");
  }
  element.style.display = visible ? "block" : "none";
};

export const wait = (delay = 0) =>
  new Promise((resolve) => setTimeout(resolve, delay));

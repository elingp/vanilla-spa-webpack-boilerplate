// eslint-disable-next-line import/no-extraneous-dependencies
import { template } from "lodash";
import DOMPurify from "dompurify";

/**
 * Returns parsed lodash template with provided options.
 * @param {string} [string=""] The lodash template string.
 * @param {Object} [data={}] The data injected into the template.
 * @param {Object} [options={}] The options object.
 * @returns {string} Parsed template with options.
 */
export default function compileTemplate(string = "", data = {}, options = {}) {
  const compiled = template(string, options);
  const view = compiled(data);
  const cleanedView = DOMPurify.sanitize(view);
  console.group("Purified using DOMPurify:");
  console.log(DOMPurify.removed);
  console.groupEnd();
  return cleanedView;
}

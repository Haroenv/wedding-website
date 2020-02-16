export const emailAddress = 'help@abi-and-haroen.fr';
/**
 * @param {string} subject
 */
export function getMailTo(subject) {
  const url = new URL(`mailto:${emailAddress}?subject=${subject}`);
  return url.toString();
}

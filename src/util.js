export const emailAddress = 'help@abi-and-haroen.fr';
/**
 * @param {string} subject
 * @param {string} [body]
 */
export function getMailTo(subject, body) {
  const url = new URL(
    `mailto:${emailAddress}?subject=${subject}${body ? '&body=' : ''}${body}`
  );
  return url.toString();
}

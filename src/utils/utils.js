export function isPhone(phone) {
  return /^[1][0-9]{10}$/.test(phone);
}

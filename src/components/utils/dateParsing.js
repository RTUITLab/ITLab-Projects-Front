export default function isoToDDMMYYYY(date) {
  return new Date(Date.parse(date)).toLocaleDateString();
}

/* يقبل 06/07/05XXXXXXXX أو +212 / 00212، ويرجع الرقم بصيغة 0XXXXXXXXX */
export function normalizePhone(input: string): string | null {
  const latin = input.replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
  let d = latin.replace(/[^\d+]/g, '');
  if (d.startsWith('+212')) d = '0' + d.slice(4);
  else if (d.startsWith('00212')) d = '0' + d.slice(5);
  else if (d.startsWith('212') && d.length === 12) d = '0' + d.slice(3);
  return /^0[5-7]\d{8}$/.test(d) ? d : null;
}

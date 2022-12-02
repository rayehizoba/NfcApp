export const ndefRecordIcon = protocol => {
  if (protocol >= 1 && protocol <= 4) return 'link-variant';
  else if (protocol === 5) return 'phone';
};

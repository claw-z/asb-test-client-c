export function sanitizeOwnername(ownername: string, rule: string): string {
    switch(rule) {
      case ' ': return ownername.replaceAll(' ', '_');
      case '_': return ownername.replaceAll('_', ' ');
      case '2%': return ownername.replaceAll('2%', ' ');
    }
  return ownername;
  }
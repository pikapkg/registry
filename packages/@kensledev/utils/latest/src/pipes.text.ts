export type TextCases =
  | 'normal'
  | 'normalUpper'
  | 'camel'
  | 'pascal'
  | 'snake'
  | 'scream'
  | 'kebab';

export interface FirstWordSentance {
  firstWord: string;
  sentace: string[];
}

// ----------------------------------------

export function splitSentancebyCase(
  input: string,
  textCase: TextCases
): string[] {
  if (textCase === 'normal') return input.split(' ');
  else if (textCase === 'normalUpper') return input.split(' ');
  else if (textCase === 'camel') return input.match(/[A-Z][a-z]+|[0-9]+/g);
  else if (textCase === 'pascal') return input.match(/[A-Z][a-z]+|[0-9]+/g);
  else if (textCase === 'snake') return input.split('_');
  else if (textCase === 'scream') return input.split('_');
  else if (textCase === 'kebab') return input.split('-');
}

// ----------------------------------------

export function convertCase(
  input: string,
  caseFrom: TextCases,
  caseTo: TextCases
): string {
  const words = new SplitByCase()[caseFrom](input);
  return new SentanceToCase()[caseTo](words);
}

// ----------------------------------------

export class SplitByCase {
  normal(input: string): string[] {
    return input.split(' ');
  }
  normalUpper(input: string): string[] {
    return input.split(' ');
  }
  camel(input: string): string[] {
    return input.match(/[A-Z][a-z]+|[0-9]+/g);
  }
  pascal(input: string): string[] {
    return input.match(/[A-Z][a-z]+|[0-9]+/g);
  }
  snake(input: string): string[] {
    return input.split('_');
  }
  scream(input: string): string[] {
    return input.split('_');
  }
  kebab(input: string): string[] {
    return input.split('-');
  }
}

export class SentanceToCase {
  constructor() {}

  normal(words: string[]): string {
    const firstWord = firstToUpper(words.shift());
    const sentace = words.map(word => word.toLowerCase()).join(' ');
    return `${firstWord} ${sentace}`;
  }
  normalUpper(words: string[]): string {
    return words.map(word => firstToUpper(word.toLowerCase())).join(' ');
  }
  camel(words: string[]): string {
    const firstWord = words.shift().toLowerCase();
    const sentace = words.map(word => firstToUpper(word)).join('');
    return `${firstWord} ${sentace}`;
  }
  pascal(words: string[]): string {
    return words.map(word => firstToUpper(word.toLowerCase())).join('');
  }
  snake(words: string[]): string {
    return words.map(word => word.toLowerCase()).join('_');
  }
  scream(words: string[]): string {
    return words.map(word => word.toUpperCase()).join('_');
  }
  kebab(words: string[]): string {
    return words.map(word => word.toLowerCase()).join('_');
  }
}

export function firstToUpper(input: string): string {
  const letters = input.split('');
  const firstLetter = letters[0].toUpperCase();
  return firstLetter + input.substring(1).toLowerCase();
}

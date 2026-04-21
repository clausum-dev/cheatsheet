import { CATEGORY_LABELS, SUBTYPE_LABELS } from '@/data/declensionPatterns';
import { DeclensionPattern, MainCategory, MasculineSubtype } from '@/types/declension';

export const getPatternsBySelection = (
  patterns: DeclensionPattern[],
  category: MainCategory,
  subtype?: MasculineSubtype,
) =>
  patterns.filter((pattern) => {
    if (pattern.category !== category) {
      return false;
    }

    if (category !== 'masculine') {
      return true;
    }

    return pattern.subtype === subtype;
  });

export const getDefaultPatternId = (
  patterns: DeclensionPattern[],
  category: MainCategory,
  subtype?: MasculineSubtype,
) => getPatternsBySelection(patterns, category, subtype)[0]?.id;

export const getSelectionLabel = (
  category: MainCategory,
  subtype?: MasculineSubtype,
) => {
  if (category === 'masculine' && subtype) {
    return `${CATEGORY_LABELS[category]} · ${SUBTYPE_LABELS[subtype]}`;
  }

  return CATEGORY_LABELS[category];
};

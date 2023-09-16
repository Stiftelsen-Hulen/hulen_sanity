export function validateUniquenessNumber(array: unknown) {
    if (Array.isArray(array)) {
      if (new Set(array).size !== array.length) return 'Each sort order must be unique!'
    }
    return true
  }
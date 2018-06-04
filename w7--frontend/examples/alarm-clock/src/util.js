export function diffObject (a, b) {
  return Object.keys(a).reduce(function (list, k) {
    if (a[k] !== b[k]) {
      return list.concat(k)
    }
    return list
  }, [])
}

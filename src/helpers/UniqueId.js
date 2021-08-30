/**
 * Returns a unique identifier every time.
 *
 * @return  Integer, beginning at 0 and incrementing by 1.
 */
const UniqueID = (() => {
  let UUID = -1
  return () => {
    UUID += 1
    return UUID
  }
})()

// example of use
// console.log(['andrew', 'kyle', 'roland'].map((x) => ({ [UniqueID()]: x })))

export default UniqueID

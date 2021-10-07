/* eslint-disable max-len */
export default function findSearchedSpots(spotsList, keywordSpot) {
  const spotsResult = spotsList.filter((testedElem) => {
    const searchedReplace = keywordSpot.replace(' ', '-');
    const regex = new RegExp(searchedReplace);
    return regex.test(testedElem.slug);
  });
  return spotsResult;
}

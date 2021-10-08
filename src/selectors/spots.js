export function findSearchedSpots(spotsList, keywordSpot) {
  const spotsResult = spotsList.filter((testedElem) => {
    const searchedReplace = keywordSpot.replace(' ', '-');
    const regex = new RegExp(searchedReplace);
    return regex.test(testedElem.slug);
  });
  return spotsResult;
}

export function findFiltredDepartementSpots(spotsList, departTested) {
  const filteredResult = spotsList.filter(
    (testedElem) => testedElem.departement.id === Number(departTested),
  );
  return filteredResult;
}

export function findFilteredCategoriesSpots(newSpotsList, categTested) {
  const filteredCateg = newSpotsList.filter(
    (testedElem) => testedElem.categories.some((elem) => elem.id === categTested),
  );
  return filteredCateg;
}

/* eslint-disable import/prefer-default-export */

/**
 * Permet de trouver un spot selon son id
 * @param {Array} spots - listes de tous les spots
 * @param {Number} spotId - l'id du spot recherché
 * @returns {Object} - le spot trouvé
 */
export function findSpot(spots, spotId) {
  const spot = spots.find((testedSpot) => testedSpot.id === spotId);
  return spot;
}

export default function findIfParticipate(newParticipations, testedUserId) {
  const filteredParticipate = newParticipations.some(
    (testedElem) => testedElem.user.id === Number(testedUserId),
  );
  return filteredParticipate;
}

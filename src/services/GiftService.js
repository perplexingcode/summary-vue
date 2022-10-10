const gifts = [
  'cool air',
  'snickers',
  'yogurt',
  'teddy bear',
  'watch',
  'scarf',
  'shirt',
  'hat',
  'globe',
  'kiss',
];

export default {
  getGifts(perPage, page) {
    const total = perPage * page;
    if (perPage > 10) {
      perPage = 10;
    }
    if (total > 10 && total - 10 >= perPage) {
      page = 1;
    }
    const givenGifts = [];
    for (let i = 1; i <= perPage; i++) {
      const g = i + (page - 1) * perPage;
      givenGifts.push(gifts[g]);
    }
    return givenGifts;
  },
};

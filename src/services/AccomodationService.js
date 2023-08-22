import accommodationsData from '../data/accomodations.json';

const accommodationService = {
  getAllAccommodations: () => [...accommodationsData],
  getOneAccommodation: (accommodationId) =>
    accommodationsData.find(accommodation => accommodation.id === accommodationId)
};

export default accommodationService;

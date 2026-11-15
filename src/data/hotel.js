
export const hotel = {
  name: 'Aurelia Hotel',
  address: 'Delhi, India',
  phone: '7668487832',
  email: 'hello@aureliahotel.com',
};

const photoIds = [
  'photo-1571896349842-33c89424de2d',
  'photo-1611892440504-42a792e24d32',
  'photo-1590490360182-c33d57733427',
  'photo-1566665797739-1674de7a421a',
  'photo-1414235077428-338989a2e8c0',
  'photo-1540555700478-4be289fbecef',
];

export function hotelPhoto(index, width = 900) {
  return `https://images.unsplash.com/${photoIds[index]}?w=${width}&q=85`;
}

export const rooms = [
  { name: 'Deluxe Room', price: '₹8,500', photoIndex: 1 },
  { name: 'Premier Suite', price: '₹14,500', photoIndex: 2 },
  { name: 'Royal Residence', price: '₹24,000', photoIndex: 3 },
];

export const experiences = [
  { name: 'Poolside Serenity', photoIndex: 0 },
  { name: 'Fine Dining', photoIndex: 4 },
  { name: 'The Aurelia Spa', photoIndex: 5 },
];

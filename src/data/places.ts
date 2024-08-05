import { IPin, EPinType } from 'src/lib/types'

export const PLACES: IPin[] = [
  /*{
    author: '...', // First and last name. A list of people can be added as well, in case several peeps were involved (as an example, due to a trip or visit).
    username: '...', // Username (or list of usernames).
    type: ..., // Type of the marker. You'll find more information below.
    title?: '...', // An optional title for the picture, useful to indicate the name of special events (a concert, a certain Museum...).
    city: '...', // The city where the image was taken.
    country: '...', // The country where the image was taken.
    coordinates: [..., ...], // The coordinates of the marker (ideally, they should be as precise as possible).
    date: '...', // The date when the image was taken, YYYY-MM-DD.
    streetview?: '...', // An optional link to Google Map Street View.
    photo: '...' // The image itself, stored under 'public/photos/YourGitHubUsername'.
  }, */
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Event,
    title : 'Aquàrium Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.3770228,2.1844112],
    date: '2024-06-10',
    photo: '/photos/Nitya/aquarium-bcn.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Coffee,
    title : 'La Central',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.38331985473633, 2.168530225753784],
    date: '2024-02-08',
    photo: '/photos/Simar/barcelona-la-central.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Picture,
    title : 'Parque de la Ciutadella',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.383941650390625, 2.1787397861480713],
    date: '2024-06-04',
    photo: '/photos/Nitya/la_ciutadella.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Coffee,
    title : 'Kahiki',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.38510513305664, 2.1625702381134033],
    date: '2024-05-18',
    photo: '/photos/Nitya/kahiki.jpg'
  },
{
  author: 'Nitya Pasrija',
  username: '_.nityaaa_._',
  type: EPinType.Coffee,
  title : 'Mescladís del Pou',
  city: 'Barcelona',
  country: 'Spain',
  coordinates: [41.3870865, 2.1803497],
  date: '2024-06-04',
  photo: '/photos/Nitya/mescladis_del_pou.jpg'
},
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Event,
    title : 'Museu Nacional d\'Art de Catalunya',
    city: 'Montjuïc, Barcelona',
    country: 'Spain',
    coordinates: [41.36857223510742, 2.1534512042999268],
    date: '2024-05-25',
    photo: '/photos/Nitya/museum.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Goal,
    title : 'Les gens que j\'aime',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.39382553100586, 2.16481614112854],
    date: '2024-05-25',
    photo: '/photos/Nitya/les_gens_que_jaime.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Picture,
    title : 'Castell de Montjuïc',
    city: 'Montjuïc, Barcelona',
    country: 'Spain',
    coordinates: [41.3687339, 2.1690936],
    date: '2024-05-18',
    photo: '/photos/Nitya/montjuic.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Home,
    city: 'Engelhartszell an der Donau',
    country: 'Austria',
    coordinates: [48.5070, 13.7321],
    date: '2021-12-03',
    photo: '/photos/Simar/engel.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Event,
    title: 'Schloss Ort',
    city: 'Gmunden',
    country: 'Austria',
    coordinates: [47.911659240722656, 13.7923583984375],
    date: '2022-01-16',
    photo: '/photos/Simar/gmunden.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Home,
    city: 'Granollers',
    country: 'Spain',
    coordinates: [41.598167419433594, 2.283038854598999],
    date: '2024-04-07',
    photo: '/photos/Simar/granollers.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Coffee,
    title : "Palo Santo",
    city: 'Granollers',
    country: 'Spain',
    coordinates: [41.6047293, 2.2863076],
    date: '2024-06-01',
    photo: '/photos/Nitya/palo_santo.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Picture,
    city: 'Krakóv',
    country: 'Poland',
    coordinates: [50.049683, 19.944544],
    date: '2022-06-04',
    photo: '/photos/Nitya/krakow.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Coffee,
    title : 'Europeska',
    city: 'Krakóv',
    country: 'Poland',
    coordinates: [50.062374114990234, 19.9366512298584],
    date: '2022-06-04',
    photo: '/photos/Nitya/europeska_krakow.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Event,
    title: 'Fête des Lumières',
    city: 'Lyon',
    country: 'France',
    coordinates: [45.7640, 4.8357],
    date: '2022-12-11',
    photo: '/photos/Simar/lyon-fete-lumieres.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Coffee,
    title : 'Lyon Particule',
    city: 'Lyon',
    country: 'France',
    coordinates: [45.761122, 4.8280905],
    date: '2022-09-18',
    photo: '/photos/Nitya/lyon_particule.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Coffee,
    title: 'Caffè il Forno',
    city: 'Mataró',
    country: 'Spain',
    coordinates: [41.5381, 2.4447],
    date: '2024-04-15',
    photo: '/photos/Simar/mataro.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Coffee,
    title: 'Can Margarit',
    city: 'Mataró',
    country: 'Spain',
    coordinates: [41.53901672363281, 2.453969717025757],
    date: '2024-05-06',
    photo: '/photos/Nitya/can_margarit_mataro.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Picture,
    city: 'Paris',
    country: 'France',
    coordinates: [48.85785675048828, 2.3009138107299805],
    date: '2024-05-03',
    photo: '/photos/Nitya/paris-eiffel.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Coffee,
    title: 'Le Triomphe',
    city: 'Paris',
    country: 'France',
    coordinates: [48.84734344482422, 2.395885944366455],
    date: '2024-05-03',
    photo: '/photos/Nitya/paris.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Picture,
    city: 'Passau',
    country: 'Germany',
    coordinates: [48.5748229, 13.4609744],
    date: '2021-12-04',
    photo: '/photos/Simar/passau.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Picture,
    city: 'Roma',
    country: 'Italy',
    coordinates: [41.889048, 12.492502],
    date: '2022-03-29',
    photo: '/photos/Simar/roma-colosseo.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Coffee,
    title: 'Augustiner Bräu Mülln',
    city: 'Salzburg',
    country: 'Austria',
    coordinates: [47.80522537231445, 13.032347679138184],
    date: '2022-01-14',
    photo: '/photos/Simar/salzburg-augustiner.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912',
    type: EPinType.Picture,
    city: 'Schärding',
    country: 'Austria',
    coordinates: [48.45577621459961, 13.431777954101562],
    date: '2022-01-14',
    photo: '/photos/Simar/scharding.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Coffee,
    title : 'Mont Roig Café',
    city: 'Sitges',
    country: 'Spain',
    coordinates: [41.23596954345703, 1.806681752204895],
    date: '2024-06-05',
    photo: '/photos/Nitya/mont_roig_cafe.jpg'
  },
  {
    author: 'Nitya Pasrija',
    username: '_.nityaaa_._',
    type: EPinType.Coffee,
    title : 'La formatgeria de Sitges',
    city: 'Sitges',
    country: 'Spain',
    coordinates: [41.2375727,1.8113308],
    date: '2024-06-05',
    photo: '/photos/Nitya/la_formatgeria.jpg'
  },
  {
    author: 'Simar Monga',
    username: 'sima_r0912', 
    type: EPinType.Picture,
    city: 'Vienne',
    country: 'France',
    coordinates: [45.5256, 4.8743],
    date: '2022-12-08',
    photo: '/photos/Simar/vienne-saint-maurice.jpg'
  }, 
]

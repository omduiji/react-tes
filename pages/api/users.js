// names and positions from https://pipl.ir/v1/getPerson
// images from https://thispersondoesnotexist.com
// companies from https://fauxid.com/tools/fake-company-generator
const _fakeUsers = [
  {
    id: 1,
    last_name:'Peck',
    first_name:'Kalli',
    photo: '/people/1.jpg',
    company: 'King, Hoeger and Mann',
    title: 'Doctor',
  },
  {
    id: 2,
    last_name:'Decker',
    first_name:'Jessi',
    photo: '/people/2.jpg',
    company: 'Wolf and Sons',
    title: 'Accountant',
  },
  {
    id: 3,
    last_name:'Vick',
    first_name:'Odelle',
    photo: '/people/3.jpg',
    company: 'Ankunding PLC',
    title: 'Barber',
  },
  {
    id: 4,
    last_name:'Reid',
    first_name:'Tommie',
    photo: '/people/4.jpg',
    company: 'Kub-Nicolas',
    title: 'Engineer',
  },
  {
    id: 5,
    last_name:'Casey',
    first_name:'Frieda',
    photo: '/people/5.jpg',
    company: 'Bosco-Cummings',
    title: 'Assistant',
  },
  {
    id: 6,
    last_name:'Kinney',
    first_name:'Ofelia',
    photo: '/people/6.jpg',
    company: 'Lubowitz-Rosenbaum',
    title: 'Developer',
  },
]

export default (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json(_fakeUsers)
  }
}

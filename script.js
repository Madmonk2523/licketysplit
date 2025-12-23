// Basic data
const featured = [
  { name: 'Double Cone', desc: 'Plain or with toppings', price: '$5.00' },
  { name: 'Chocolate Sundae', desc: 'Rich chocolate sauce', price: '$6.00' },
  { name: 'Oreo Crunch Shake', desc: 'Loaded with Oreos', price: '$8.00' },
]

const categories = [
  { id: 'cones', label: 'Cones & Cups' },
  { id: 'sundaes', label: 'Sundaes' },
  { id: 'shakes', label: 'Shakes & Floats' },
  { id: 'slush', label: 'Slush' },
]

const menuItems = {
  cones: [
    { name: 'Plain Cone or Cup', desc: 'Classic soft serve', price: '$3.50' },
    { name: 'Cone/Cup with Toppings', desc: 'Your choice of toppings', price: '$4.50' },
    { name: 'Cone with Dip', desc: 'Chocolate, cherry, or butterscotch', price: '$5.00' },
    { name: 'Double Cone - Plain', desc: 'Double the ice cream', price: '$5.00' },
    { name: 'Double Cone with Toppings', desc: 'Double with toppings', price: '$6.00' },
    { name: 'Flavor Burst', desc: 'Cone or cup with flavor burst', price: '$5.00' },
    { name: 'Waffle Cone - Plain', desc: 'Fresh waffle cone', price: '$5.00' },
    { name: 'Waffle Cone with Toppings', desc: 'Waffle cone loaded', price: '$6.50' },
  ],
  sundaes: [
    { name: 'Chocolate Sundae', desc: 'Rich chocolate sauce', price: '$6.00' },
    { name: 'Caramel Sundae', desc: 'Smooth caramel', price: '$6.00' },
    { name: 'Strawberry Sundae', desc: 'Sweet strawberry topping', price: '$6.00' },
    { name: 'Pineapple Sundae', desc: 'Tropical pineapple', price: '$6.00' },
    { name: 'Crushed Cherry Sundae', desc: 'Cherry lovers dream', price: '$6.00' },
    { name: 'Chocolate Nut Sundae', desc: 'Chocolate with nuts', price: '$7.00' },
    { name: 'Banana Boat', desc: 'The ultimate sundae', price: '$9.00' },
  ],
  shakes: [
    { name: 'Vanilla Shake', desc: 'Classic vanilla', price: '$7.00' },
    { name: 'Chocolate Shake', desc: 'Rich chocolate', price: '$7.00' },
    { name: 'Strawberry Shake', desc: 'Fresh strawberry', price: '$7.00' },
    { name: 'Oreo Crunch Shake', desc: 'Loaded with Oreos', price: '$8.00' },
    { name: 'Pineapple Shake', desc: 'Tropical twist', price: '$8.00' },
    { name: 'Banana Shake', desc: 'Creamy banana', price: '$8.00' },
    { name: 'Mango Shake', desc: 'Exotic mango flavor', price: '$8.00' },
    { name: 'Soda Float', desc: 'Classic ice cream float', price: '$7.00' },
  ],
  slush: [
    { name: 'Slush', desc: 'Frozen and refreshing', price: '$4.50' },
    { name: 'Slush Float', desc: 'Slush with ice cream', price: '$6.50' },
  ],
}

const testimonials = [
  { name: 'Sarah M.', text: 'Best ice cream truck ever! Kids go crazy when they hear the music.', rating: 5 },
  { name: 'Mike T.', text: 'Hired them for a birthday party—professional and delicious.', rating: 5 },
  { name: 'Jennifer L.', text: 'Twist cone is perfection. Friendly crew and clean truck!', rating: 5 },
]

const faqs = [
  { q: 'Do you accept credit cards?', a: 'Yes! Cash, credit cards, and mobile payments are welcome.' },
  { q: 'Where can I find the truck?', a: 'We serve the Woodland Park area. Follow us for daily locations.' },
  { q: 'Do you cater events?', a: 'Absolutely—birthdays, schools, corporate events, and more.' },
]

// Helpers
const qs = (sel) => document.querySelector(sel)
const qsa = (sel) => Array.from(document.querySelectorAll(sel))
const create = (tag, className, text) => {
  const el = document.createElement(tag)
  if (className) el.className = className
  if (text) el.textContent = text
  return el
}

// Navigation toggle
const navLinks = qs('#nav-links')
qs('#menu-toggle').addEventListener('click', () => {
  navLinks.classList.toggle('is-open')
})
qsa('.nav__links a').forEach((link) =>
  link.addEventListener('click', () => navLinks.classList.remove('is-open'))
)

// Status card actions
qs('#directions-btn').addEventListener('click', (e) => {
  e.preventDefault()
  window.open('https://www.google.com/maps/dir/?api=1&destination=85%20Pompton%20Ave%2C%20Woodland%20Park%2C%20NJ%2007424', '_blank')
})

// Featured grid
const featuredGrid = qs('#featured-grid')
featured.forEach((item) => {
  const card = create('article', 'card card--lift')
  const title = create('h3', '', item.name)
  const desc = create('p', 'muted', item.desc)
  const price = create('p', '', item.price)
  price.style.fontWeight = '700'
  price.style.color = '#b83280'
  card.append(title, desc, price)
  featuredGrid.append(card)
})

// Menu tabs + items
const tabsWrap = qs('#menu-tabs')
const itemsGrid = qs('#menu-items')
let activeTab = categories[0].id

const renderTabs = () => {
  tabsWrap.innerHTML = ''
  categories.forEach((cat) => {
    const tab = create('button', `tab${cat.id === activeTab ? ' is-active' : ''}`, cat.label)
    tab.addEventListener('click', () => {
      activeTab = cat.id
      renderTabs()
      renderItems()
    })
    tabsWrap.append(tab)
  })
}

const renderItems = () => {
  itemsGrid.innerHTML = ''
  menuItems[activeTab].forEach((item) => {
    const card = create('article', 'card card--lift')
    const title = create('h3', '', item.name)
    const desc = create('p', 'muted', item.desc)
    const price = create('p', '', item.price)
    price.style.fontWeight = '700'
    price.style.color = '#0f172a'
    card.append(title, desc, price)
    itemsGrid.append(card)
  })
}

// Testimonials
const testimonialGrid = qs('#testimonial-grid')
testimonials.forEach((t) => {
  const card = create('article', 'card')
  const name = create('h3', '', t.name)
  const rating = create('div', 'rating', '★★★★★'.slice(0, t.rating))
  const quote = create('p', 'quote', t.text)
  card.append(name, rating, quote)
  testimonialGrid.append(card)
})

// FAQ
const faqList = qs('#faq-list')
faqs.forEach((item) => {
  const detail = create('details')
  const summary = create('summary', '', item.q)
  const answer = create('p', '', item.a)
  detail.append(summary, answer)
  faqList.append(detail)
})

// Footer year
qs('#year').textContent = new Date().getFullYear()

// Initialize menu
renderTabs()
renderItems()

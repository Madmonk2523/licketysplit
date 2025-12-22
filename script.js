// Basic data
const featured = [
  { name: 'Classic Twist Cone', desc: 'Vanilla, chocolate, or swirl', price: '$4.50' },
  { name: 'Hot Fudge Sundae', desc: 'Rich fudge, whipped cream, cherry', price: '$6.50' },
  { name: 'Cookies & Cream Shake', desc: 'Blended with real Oreos', price: '$6.50' },
]

const categories = [
  { id: 'soft-serve', label: 'Soft Serve' },
  { id: 'sundaes', label: 'Sundaes' },
  { id: 'shakes', label: 'Shakes' },
  { id: 'toppings', label: 'Toppings' },
]

const menuItems = {
  'soft-serve': [
    { name: 'Classic Twist Cone', desc: 'Vanilla, chocolate, or swirl', price: '$4.50' },
    { name: 'Waffle Cone Delight', desc: 'Crispy golden waffle cone', price: '$5.50' },
    { name: 'Dipped Cone', desc: 'Chocolate, cherry, or butterscotch shell', price: '$5.00' },
  ],
  sundaes: [
    { name: 'Hot Fudge Sundae', desc: 'Fudge, whipped cream, cherry', price: '$6.50' },
    { name: 'Caramel Dream', desc: 'Smooth caramel and nuts', price: '$6.50' },
    { name: 'Banana Split', desc: 'Three scoops, toppings galore', price: '$8.00' },
  ],
  shakes: [
    { name: 'Classic Shake', desc: 'Vanilla, chocolate, strawberry', price: '$5.50' },
    { name: 'Cookies & Cream', desc: 'Loaded with Oreos', price: '$6.50' },
    { name: 'Mint Chip Shake', desc: 'Cool mint, chocolate chips', price: '$6.00' },
  ],
  toppings: [
    { name: 'Rainbow Sprinkles', desc: 'Colorful crunch', price: '$0.75' },
    { name: 'Hot Fudge', desc: 'Warm, rich chocolate', price: '$1.25' },
    { name: 'Cookie Crumble', desc: 'Oreo or graham pieces', price: '$1.00' },
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

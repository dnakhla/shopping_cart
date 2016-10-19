const discounts = [
  {
    code: '5off',
    value: -5,
    conditions: {
      products: [],
      category: [],
      total: ''
    }
  },
  {
    code: 'over50',
    value: -10,
    conditions: {
      products: [],
      category: [],
      total: 50
    }
  },
  {
    code: 'over75footwear',
    value: -15,
    conditions: {
      products: [],
      category: ['footwear'],
      total: 75
    }
  },
]
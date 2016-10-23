const discounts = [
  {
    code: '5off',
    value: 5,
    message: '£5 off applied',
    conditions: {
      category: [],
      total: ''
    }
  },
  {
    code: 'over50',
    value: 10,
    message: '£10 off applied',
    conditions: {
      category: [],
      total: 50
    }
  },
  {
    code: 'over75footwear',
    value: 15,
    message: '£15 off applied',
    conditions: {
      category: ['Men’s Casualwear'],
      total: 75
    }
  },
]
export default discounts;
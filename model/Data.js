import icons from '../constants/Icons';
import images from '../constants/Images';


export const Category=[
    {
        id:1,
        name:'Lamb',
        icon:icons.lamb
    },
    {
        id:2,
        name:'Chicken',
        icon:icons.chicken
    },
    {
        id:3,
        name:'Fish',
        icon:icons.fish
    },
]

export const Option=[
    {
        id:1,
        name:'SMALL',
       
    },
    {
        id:2,
        name:'MEDIUM',
      
    },
    {
        id:3,
        name:'LARGE',
       
    },
]

export const Data= [
    {
        id:1,
        name:'GRILL-CHICKEN',
        photo:images.chicken,
        price:10
    },
    {
        id:2,
        name:'GRILL-BURGER',
        photo:images.b1,
        price:22
    },
    {
        id:3,
        name:'COCACOLA',
        photo:images.d3,
        price:16
    },
    {
        id:4,
        name:'CHICKEN-PIZZA',
        photo:images.p3,
        price:14
    },
    {
        id:5,
        name:'SANDWISH',
        photo:images.s1,
        price:20
    },
    {
        id:6,
        name:'STARBUCKS',
        photo:images.d5,
        price:12
    },
    {
        id:7,
        name:'BBQ-CHICKEN',
        photo:images.bbq,
        price:15
    },
]

export const Food = [
    {
        id: 1,
        name: "GRISPY LAMB",
        categories: [1],
        photo: images.lamb2,
        description: "Rice with crispy lamb, cheese and lettuce",
        duration: "30 - 45 min",
        price:20,
        menu: [
            {
                menuId: 1,
                name: "Crispy Lamb",
                photo: images.lamb2,
                description: "Rice with crispy lamb, cheese and lettuce",
                price: 15
            },
            {
                menuId: 2,
                name: "Chopped Lamb",
                photo: images.lamb3,
                description: "Bread,Salad & Sauce Burger with Chopped Lamb",
                price: 14
            },
          
        ]
    },
    {
        id: 2,
        name: "ROASTED LAMB",
        categories: [1],
        photo: images.lamb5,
        description: "French Fries & Sauce with Delicoius Roasted Lamb",
        price: 17
    },
    {
        id: 3,
        name: "FRIED LAMB",
        categories: [1],
        photo: images.lamb4,
        description: "French Fries & Sauce with Delicoius Fried Lamb",
        price: 18
    },
   
    {
        id: 4,
        name: "MANDI CHICKEN",
        categories: [2],
        photo: images.chicken3,
        description: "Sauce,Salad & Rice with mandi Chicken",
        duration: "15 - 20 min",
        price :15,
        menu: [
            {
                menuId: 3,
                name: "Mandi Chicken",
                photo: images.chicken2,
                description: "Sauce,Salad & Rice with mandi Chicken",
                price: 20
            },
            {
                menuId: 4,
                name: "Grill Chicken",
                photo: images.chicken3,
                description: "French Fries & Sauce with Grill Chicken",
                price: 18
            },
           
        ]
    },

    {
        id: 5,
        name: "WINGS CHICKEN",
        categories:[2],
        photo: images.chicken4,
        description: "French Fries & Sauce with wings Chicken",
        price: 15
    },

    {
        id: 6,
        name: "NUGTS CHICKEN",
        categories:[2],
        photo: images.chicken5,
        description: "Sauce, Galic with French Fries & Nugts",
        price: 16
    },
   
    {
        id: 7,
        name: "SALMON FISH",
        categories: [3],
        photo: images.fish4,
        description: "Lemon, Garlic & Bread with Salmon Fish",
        duration: "15 - 20 min",
        price:19,
    
        menu: [
            {
                menuId: 5,
                name: "Salmon Fish",
                photo: images.fish2,
                description: "Lemon, Garlic & Bread with Salmon Fish",
                price: 18
            },
            {
                menuId: 6,
                name: "Slid Fish",
                photo: images.fish3,
                description: "Salad & Sauce with Slide Fish",
                price: 22
            },
        ]
    },
    {
        id: 8,
        name: "Mix Fish",
        categories :[3],
        photo: images.fish5,
        description: "Mix Fish, French Fries and Rice with Sauce",
        price: 18
    },
    {
        id: 9,
        name: 'Fried Fish',
        categories:[3],
        photo: images.fish4,
        description: "Traditional Fish with Rice & Arab Salad",
        price: 15
    },
  

   

    
       
]


export const DrinkData =[
    {
        id:1,
        name:'STARBUCKS',
        photo:images.d1,
        price:12
    },
    {
        id:2,
        name:'STARBUCKS',
        photo:images.d2,
        price:13
    },
    {
        id:3,
        name:'STARBUCKS',
        photo:images.d3,
        price:11
    },
    {
        id:4,
        name:'CHATIME',
        photo:images.d4,
        price:12
    },
    {
        id:5,
        name:'CHATIME',
        photo:images.d5,
        price:10
    },
    {
        id:6,
        name:'CHATIME',
        photo:images.d6,
        price:12
    },
]

export const SoftDrink=[
    {
        id:11,
        name:'ZERO',
        photo:images.d11,
        price:7
    },
    {
        id:12,
        name:'PEPSI',
        photo:images.d12,
        price:8
    },
    {
        id:13,
        name:'STRAWBARRY',
        photo:images.d13,
        price:8
    },
    {
        id:14,
        name:'FANTA',
        photo:images.d14,
        price:7
    },
    
    
]

export const BugerData=[
    {
        id:1,
        name:'LAMB BURGER',
        photo:images.b1,
        price:15
    },
    {
        id:2,
        name:'CHICKEN BURGER',
        photo:images.b2,
        price:13
    },
    {
        id:3,
        name:'FISH BURGER',
        photo:images.b3,
        price:12
    },
    {
        id:4,
        name:'DOUBLE CHEESE',
        photo:images.b4,
        price:15
    },
    {
        id:5,
        name:'BIG BURGER',
        photo:images.b5,
        price:17
    },
    {
        id:6,
        name:'MEAL BURGER',
        photo:images.b6,
        price:20
    },
]


export const PizzaData=[
    {
        id:1,
        name:'LAMB PIZZA',
        photo:images.p1,
        price:15
    },
    {
        id:2,
        name:'CHICKEN PIZZA',
        photo:images.p2,
        price:13
    },
    {
        id:3,
        name:'FISH PIZZA',
        photo:images.p3,
        price:12
    },
    {
        id:4,
        name:'CHEESE PIZZA',
        photo:images.p4,
        price:15
    },
    {
        id:5,
        name:'DOUBLE PIZZA',
        photo:images.p5,
        price:17
    },
    {
        id:6,
        name:'TUNA PIZZA',
        photo:images.p6,
        price:20
    },
]

export const SandData=[
    {
        id:1,
        name:'CHEESE SANDWISH',
        photo:images.s1,
        price:20
    },
    {
        id:2,
        name:'EGG SANDWISH',
        photo:images.s2,
        price:10
    },
    {
        id:3,
        name:'TUNA SANDWISH',
        photo:images.s3,
        price:25
    },
    {
        id:4,
        name:'SLIDES SANDWISH',
        photo:images.s4,
        price:20
    },
    {
        id:5,
        name:'CHICKEN SANDWISH',
        photo:images.s5,
        price:17
    },
    {
        id:6,
        name:'LAMB SANDWISH',
        photo:images.s6,
        price:20
    },
    {
        id:7,
        name:'MIX SANDWISH',
        photo:images.s7,
        price:20
    },
    {
        id:8,
        name:'SUPER SANDWISH',
        photo:images.s8,
        price:20
    },
    {
        id:9,
        name:'NUGT SANDWISH',
        photo:images.s9,
        price:20
    },
]
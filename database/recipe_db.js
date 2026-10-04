const Recipe = require('../data/recipe').Recipe
const Ingredient = require('../data/ingredient').Ingredient

exports.get_recipe_id = (recipe_name) => {
    return 0
}

exports.get_recipe = (recipe_id) => {
    return new Recipe(
        0,
        'Korean Beef',
        'Yeah this ones tasty',
        [
            new Ingredient(0, '1/4 cup', 'brown sugar'), 
            new Ingredient(0, '1/4 cup',  'soy sauce'), 
            new Ingredient(0, '2 teaspoons', 'sesame oil'),
            new Ingredient(0, '1/2 teaspoon', 'crushed red-pepper flakes, or more to taste'),
            new Ingredient(0, '1/4 teaspoon', 'ground ginger'),
            new Ingredient(0, '1 tablespoon', 'vegetable oil'),
            new Ingredient(0, '3 cloves', 'garlic, minced'),
            new Ingredient(0, '1 pound', 'ground beef'),
            new Ingredient(0, '2 green', 'onions, thinly sliced'),
            new Ingredient(0, '1/4 teaspoon', 'sesame seeds'),
        ],
        [
            'In a small bowl, whisk together brown sugar, soy sauce, sesame oil, red pepper flakes and ginger.', 
            'Heat vegetable oil in a large cast iron skillet over medium high heat. Add garlic and cook, stirring constantly, until fragrant, about 1 minute. Add ground beef and cook until browned, about 3-5 minutes, making sure to crumble the beef as it cooks; drain excess fat.',
            'Stir in soy sauce mixture and green onions until well combined, allowing to simmer until heated through, about 2 minutes.',
            'Serve immediately, garnished with green onion and sesame seeds, if desired.'
        ]
    )
}
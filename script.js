"use strict";

class Recipe {
    constructor(title, list, description, time) {
        this.title = title
        this.list = list
        this.description = description
        this.time = time
    }

    validate() {
        if (!this.title || !this.list || !this.description || !this.time) {
            return false
        } else if (!isNaN(this.list) || !isNaN(this.description) || isNaN(this.time) || this.time < 0) {
            return false
        } else {
            return true
        }
    }
}

class BookOfRecipes {
    recipeArr = []
    addRecipe(example) {
        if (example.validate()) {
            return this.recipeArr.push(example)
        }
    }

    findByTime(timeLimit) {
        let timeLimitArr = ''
        this.recipeArr.forEach(recipe => {
            if (recipe.time <= timeLimit) {
                timeLimitArr += recipe.title + ' '
            }
        })
        if (timeLimitArr.length === 0) {
            return console.log('У книзі немає рецептів з таким лімітом часу :(')
        }
        return console.log(timeLimitArr)
    }

    findByIngredient(ingredient) {
        let ingredientArr = ''
        this.recipeArr.forEach(recipe => {
            if (recipe.list.includes(ingredient[0]) && recipe.list.includes(ingredient[1])) {
                ingredientArr += recipe.title + ' '
            }
        })
        if (ingredientArr.length === 0) {
            return console.log('У книзі немає рецептів з такими інгредієнтами :(')
        }
        return console.log(ingredientArr)
    }
}

const firstValidRecipe = new Recipe('Олів\'є', ['картопля', 'морква', 'горошок'], 'опис', 30)
const secondValidRecipe = new Recipe('Суп', ['картопля', 'куряче філе', 'цибуля', 'морква'], 'опис', 120)
const thirdValidRecipe = new Recipe('Паста', ['спагеті', 'бекон', 'пармезан', 'вершки'], 'опис', 50)
const fourthValidRecipe = new Recipe('Деруни', ['картопля', 'борошно', 'часник'], 'опис', 40)
const fifthValidRecipe = new Recipe('Рагу', ['картопля', 'морква', 'цибуля'], 'опис', 60)
const invalidRecipe = new Recipe('Пюре', ['картопля', 'молоко', 'вершкове масло'], 'опис', 'година')

const book = new BookOfRecipes()

book.addRecipe(firstValidRecipe)
book.addRecipe(secondValidRecipe)
book.addRecipe(thirdValidRecipe)
book.addRecipe(fourthValidRecipe)
book.addRecipe(fifthValidRecipe)
book.addRecipe(invalidRecipe)

book.findByTime(60)
book.findByIngredient(['картопля', 'морква'])

exports.Recipe = class {
    constructor(id, title, notes, ingredients, steps) {
        this.id = id
        this.title = title
        this.notes = notes
        this.ingredients = ingredients
        this.steps = steps
    }
}
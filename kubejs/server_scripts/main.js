// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
    event.remove({id: 'waystones:warp_stone'})
    event.recipes.minecraft.crafting_shaped('waystones:warp_stone', [
            ' E ',
            'ESE',
            ' E '
        ], {
        E: 'minecraft:copper_ingot',
        S: "minecraft:redstone"
    })

    event.forEachRecipe({input: 'waystones:warp_stone'}, recipe => {
        recipe.replaceInput("minecraft:obsidian", "minecraft:polished_andesite")
    })
})
// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')

RecipeViewerEvents.groupEntries("item", event => {
    event.group("#minecraft:decorated_pot_sherds", 'kubejs:pottery_sherd', "Pottery Sherd")

    event.group("#minecraft:chest_armor", 'kubejs:chestplates', "Chestplates")
    event.group("#minecraft:foot_armor", 'kubejs:boots', "Boots")
    event.group("#minecraft:head_armor", 'kubejs:helmets', "Helmets")
    event.group("#minecraft:leg_armor", 'kubejs:leggings', "Leggings")
    event.group("#minecraft:trim_templates", 'kubejs:templates', "Smithing Templates")

    event.group("#waystones:waystones", 'kubejs:waystones', "Waystones")
    event.group("#waystones:sharestones", "kubejs:sharestones", "Sharestones")
    event.group('/_portstone$/', "kubejs:portstones", "Portstones")

    event.group('#minecraft:chest_boats', "kubejs:chest_boats", "Chest Boats")
    event.group('#minecraft:boats', "kubejs:boats", "Boats")
})
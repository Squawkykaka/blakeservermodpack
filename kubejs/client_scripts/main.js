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

    event.group('#comforts:sleeping_bags', "kubejs:sleeping_bags", "Sleeping Bags")
    event.group('#comforts:hammocks', "kubejs:hammocks", "Hammocks")

    event.group('#minecraft:terracotta', "kubejs:terracotta", "Terracotta")
    event.group('#minecraft:wool', 'kubejs:wool', 'Wool')
    event.group('#minecraft:wool_carpets', 'kubejs:wool_carpets', 'Carpets')
    event.group('#c:glass_blocks', 'kubejs:glass_blocks', 'Glass Blocks')
    event.group('#c:glass_panes', 'kubejs:glass_panes', 'Glass Panes')
    event.group('#c:glazed_terracottas', 'kubejs:glazed_terracotta', 'Glazed Terracotta')
    event.group('#c:concretes', 'kubejs:concrete', 'Concrete')
    event.group('#c:concrete_powders', 'kubejs:concrete_powder', 'Concrete Powder')
    event.group('#minecraft:beds', 'kubejs:beds', 'Beds')
    event.group('#minecraft:banners', 'kubejs:banners', 'Banners')
    event.group('#minecraft:candles', 'kubejs:candles', 'Candles')
    event.group('#c:dyes', 'kubejs:dyes', 'Dyes')

    // This should show if the group is being correctly applied or not
    event.group("#c:shulker_boxes", 'kubejs:shulker_boxes', 'Shulker Boxes')

    event.group('/exposed_/', 'kubejs:exposed_copper', 'Exposed Copper')
    event.group('/weathered_/', 'kubejs:weathered_copper', 'Weathered Copper')
    event.group('/oxidized_/', 'kubejs:oxidized_copper', 'Oxidized Copper')
    event.group('/_pattern/', 'kubejs:banner_pattern', 'Banner Patterns')


    const useNbt = ['painting', 'goat_horn', "minecraft:suspicious_stew"]
    event.group("goat_horn", "kubejs:goat_horns", "Goat Horns")
    event.group("minecraft:suspicious_stew", "kubejs:suspicious_stews", "Suspicious Stews")
    event.group("minecraft:painting", "kubejs:paintings", "Paintings")
})
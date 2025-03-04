// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

BlockEvents.modification(event => {
    event.modify('minecraft:bedrock', block => {
        block.setDestroySpeed(5)
        block.setSpeedFactor(1)
    })
})
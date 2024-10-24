GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('naq_mk1')
        .category('ctnh')
        .setMaxIOSize(0, 0, 4, 4)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('naq_mk2')
        .category('ctnh')
        .setMaxIOSize(0, 0, 4, 4)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('naq_mk1_machine', 'multiblock',holder => $NaqReactorMachine(holder,1))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('naq_mk1')
        .recipeModifier((/**@type {$MultiblockControllerMachine}*/machine,/**@type {$GTRecipe}*/recipe, params, result) => {
            return $NaqReactorMachine.recipeModifier(machine,recipe,params,result)
        })
        .appearanceBlock(() => Block.getBlock("kubejs:naquadah_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("##AAA##", "##BBB##", "##BBB##", "##BBB##", "##BBB##", "##BBB##", "##AAA##")
            .aisle("#AAAAA#", "#A###A#", "#A###A#", "#A#C#A#", "#A###A#", "#A###A#", "#AAAAA#")
            .aisle("AAAAAAA", "B#####B", "B##C##B", "B#CCC#B", "B##C##B", "B#####B", "AAAAAAA")
            .aisle("AAAAAAA", "B##C##B", "B#CCC#B", "BCCCCCB", "B#CCC#B", "B##C##B", "AAAAAAA")
            .aisle("AAAAAAA", "B#####B", "B##C##B", "B#CCC#B", "B##C##B", "B#####B", "AAAAAAA")
            .aisle("#AAAAA#", "#A###A#", "#A###A#", "#A#C#A#", "#A###A#", "#A###A#", "#AAAAA#")
            .aisle("##A@A##", "##BBB##", "##BBB##", "##BBB##", "##BBB##", "##BBB##", "##AAA##")
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("kubejs:naquadah_casing"))
            .where("B", Predicates.blocks("gtceu:fusion_glass"))
            .where("C", Predicates.blocks("kubejs:annihilate_core"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .tooltips(
            Component.translatable("gtceu.universal.tooltip.base_production_eut", GTValues.V[GTValues.UV]),
            Component.translatable("gtceu.universal.tooltip.uses_per_hour_lubricant",1000),
            Component.translatable("ctnh.machine.naq_reactor_machine.tooltip.boost_mk1",GTValues.V[GTValues.UV] * 8))
        .workableCasingRenderer('kubejs:block/na_casing', 'gtceu:block/multiblock/fusion_reactor', false)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('naq_mk2_machine', 'multiblock',holder => $NaqReactorMachine(holder,2))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('naq_mk1')
        .recipeType('naq_mk2')
        .recipeModifier((/**@type {$MultiblockControllerMachine}*/machine,/**@type {$GTRecipe}*/recipe, params, result) => {
            return $NaqReactorMachine.recipeModifier(machine,recipe,params,result)
        })
        .appearanceBlock(() => Block.getBlock("kubejs:naquadah_alloy_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("###############", "###############", "######AAA######", "###############", "###############")
            .aisle("#######A#######", "######AAA######", "####AABCBAA####", "######AAA######", "#######A#######")
            .aisle("###############", "####AA###AA####", "###ADDAAADDA###", "####AA###AA####", "###############")
            .aisle("###A#######A###", "###A#######A###", "##ABAA###AABA##", "###A#######A###", "###A#######A###")
            .aisle("###############", "##A#########A##", "#ADA#######ADA#", "##A#########A##", "###############")
            .aisle("#######A#######", "##A###EFE###A##", "#ADA#AFFFA#ADA#", "##A###EFE###A##", "#######A#######")
            .aisle("######EEE######", "#A###EAGAE###A#", "ABA##FGGGF##ABA", "#A###EAGAE###A#", "######EEE######")
            .aisle("#A###AEEEA###A#", "#A###FGGGF###A#", "ACA##FGCGF##ACA", "#A###FGGGF###A#", "#A###AEEEA###A#")
            .aisle("######EEE######", "#A###EAGAE###A#", "ABA##FGGGF##ABA", "#A###EAGAE###A#", "######EEE######")
            .aisle("#######A#######", "##A###EFE###A##", "#ADA#AFFFA#ADA#", "##A###EFE###A##", "#######A#######")
            .aisle("###############", "##A#########A##", "#ADA#######ADA#", "##A#########A##", "###############")
            .aisle("###A#######A###", "###A#######A###", "##ABAA###AABA##", "###A#######A###", "###A#######A###")
            .aisle("###############", "####AA###AA####", "###ADDAAADDA###", "####AA###AA####", "###############")
            .aisle("#######A#######", "######AAA######", "####AABCBAA####", "######AAA######", "#######A#######")
            .aisle("###############", "###############", "######A@A######", "###############", "##############E")
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("kubejs:naquadah_alloy_casing"))
            .where("B", Predicates.blocks("gtceu:superconducting_coil"))
            .where("C", Predicates.blocks("gtceu:magnetic_samarium_block"))
            .where("D", Predicates.blocks("kubejs:annihilate_core"))
            .where("E", Predicates.blocks("kubejs:naquadah_casing"))
            .where("F", Predicates.blocks("gtceu:fusion_glass"))
            .where("G", Predicates.blocks("kubejs:annihilate_core1"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .tooltips(
            Component.translatable("gtceu.universal.tooltip.base_production_eut", GTValues.V[GTValues.UHV]),
            Component.translatable("gtceu.universal.tooltip.uses_per_hour_lubricant",1000),
            Component.translatable("ctnh.machine.naq_reactor_machine.tooltip.boost_mk2",GTValues.V[GTValues.UHV] * 16))
        .workableCasingRenderer('kubejs:block/nqhejing_casing', 'gtceu:block/multiblock/fusion_reactor', false)
})
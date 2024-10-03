// priority -10
const { $RecipeJS } = require("packages/dev/latvian/mods/kubejs/recipe/$RecipeJS");
const { $RecipesEventJS } = require("packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS");

/*event.recipes.gtceu.配方类型("id")            
        .itemInputs("物品id","物品id",....)
        .itemOutputs("物品id")
        .duration(时间)
        .EUt(功率)*/
ServerEvents.recipes(event => {
    event.forEachRecipe({ mod: 'gtceu' , type: 'gtceu:electric_blast_furnace'}, recipe => {
        try {
            var newDuration = recipe.get("duration");
            recipe.set("duration", newDuration * 3/4>=1?newDuration * 3/4:1);
            
        } catch (err) {
        }
    })
    event.forEachRecipe({ mod: 'gtceu' , type: 'gtceu:alloy_blast_smelter'}, recipe => {
      try {
          var newDuration = recipe.get("duration");
          recipe.set("duration", newDuration * 3/4>=1?newDuration * 3/4:1);
          
      } catch (err) {
      }
  })
    event.forEachRecipe({id:'gtceu:large_chemical_reactor/ethylene_from_ethanol'}, recipe =>{
      let newduration = recipe.get('duration')
      recipe.set('duration',newduration/3)
    })
})
const GTNNRecipes = Java.loadClass("dev.arbor.gtnn.data.GTNNRecipes")
ServerEvents.recipes(event => {
  event.recipes.gtceu.create_mixer("rose_quartz")
    .itemInputs("minecraft:quartz", "4x minecraft:redstone")
    .itemOutputs("create:rose_quartz")
    .duration(100)
    .EUt(32)
    .rpm(64)
  event.recipes.gtceu.mixer("rose_quartz2")
    .itemInputs("minecraft:quartz", "4x minecraft:redstone")
    .itemOutputs("create:rose_quartz")
    .duration(100)
    .EUt(32)
  event.recipes.gtceu.create_mixer("polished_rose_quartz")
    .itemInputs("minecraft:quartz")
    .inputFluids("gtceu:redstone 288")
    .itemOutputs("create:polished_rose_quartz")
    .duration(100)
    .EUt(32)
    .rpm(64)
  event.recipes.gtceu.mixer("polished_rose_quartz2")
    .itemInputs("minecraft:quartz")
    .inputFluids("gtceu:redstone 288")
    .itemOutputs("create:polished_rose_quartz")
    .duration(100)
    .EUt(32)
  event.recipes.gtceu.alloy_smelter("andesite_alloy")
    .EUt(7)
    .duration(100)
    .itemInputs("minecraft:andesite")
    .itemInputs("minecraft:iron_ingot")
    .itemOutputs("2x gtceu:andesite_alloy_ingot")
  event.recipes.gtceu.assembler("manatransformer")
    .EUt(30)
    .duration(100)
    .itemInputs(["#gtceu:circuits/lv", "4x gtceu:red_alloy_plate", "4x botania:livingrock"])
    .itemOutputs("botania:mana_fluxfield")
  event.recipes.gtceu.assembler("submarine")
    .EUt(480)
    .duration(400)
    .itemInputs(["alexscaves:enigmatic_engine", "2x #gtceu:circuits/hv", "4x gtceu:energy_crystal", "2x gtceu:hv_sensor", "4x gtceu:hv_electric_motor", "8x gtceu:red_steel_plate"])
    .itemOutputs("alexscaves:submarine")
  event.recipes.gtceu.desalting("salt1")
    .EUt(120)
    .duration(400)
    .blastFurnaceTemp(1600)
    .circuit(0)
    .inputFluids("minecraft:water 1000")
    .itemOutputs("2x gtceu:salt_dust")
    .chancedOutput("gtceu:small_rock_salt_dust", 4000, 500)
  event.recipes.gtceu.desalting("salt2")
    .EUt(480)
    .duration(400)
    .blastFurnaceTemp(2900)
    .circuit(1)
    .inputFluids("minecraft:water 2000")
    .itemOutputs("3x gtceu:salt_dust")
    .chancedOutput("gtceu:small_rock_salt_dust", 6000, 500)
    .outputFluids("gtceu:iodized_brine 100")
  event.recipes.gtceu.alloy_smelter("scarlet_ingot")
    .EUt(7)
    .duration(100)
    .itemInputs(["alexscaves:raw_scarlet_neodymium", "minecraft:iron_ingot"])
    .itemOutputs("2x alexscaves:scarlet_neodymium_ingot")
  event.recipes.gtceu.alloy_smelter("azure_ingot")
    .EUt(7)
    .duration(100)
    .itemInputs(["alexscaves:raw_azure_neodymium", "minecraft:iron_ingot"])
    .itemOutputs("2x alexscaves:azure_neodymium_ingot")
  event.recipes.gtceu.mixer("sky_dust")
    .EUt(120)
    .duration(100)
    .itemInputs(["10x gtceu:stone_dust", "2x gtceu:silicon_dust", "gtceu:electrotine_dust"])
    .itemOutputs("13x ae2:sky_dust")
    .circuit(2)
  event.recipes.gtceu.compressor("dense_obsidian_plate")
    .EUt(96)
    .duration(400)
    .itemInputs("9x gtceu:obsidian_plate")
    .circuit(9)
    .itemOutputs("gtceu:dense_obsidian_plate")
  event.recipes.gtceu.compressor("dense_obsidian_plate2")
    .EUt(96)
    .duration(400)
    .itemInputs("9x gtceu:obsidian_dust")
    .circuit(9)
    .itemOutputs("gtceu:dense_obsidian_plate")
  /*event.recipes.gtceu.rocket_engine("rocket_fuel")
  .outputEU(25600)
  .duration(25)
  .inputFluids("gtceu:rocket_fuel 16")*/
  event.recipes.gtceu.alloy_smelter("dark_steel")
    .EUt(120)
    .duration(150)
    .itemInputs(["gtceu:steel_ingot", "gtceu:obsidian_dust"])
    .itemOutputs("gtceu:dark_steel_ingot")
  event.recipes.gtceu.primitive_blast_furnace("lockwood")
    .duration(1500)
    .itemInputs(["twilightforest:ironwood_ingot", "gtceu:coke_gem"])
    .itemOutputs("tetranichematerials:lockwood_ingot")
    .chancedOutput("gtceu:ash_dust", 1111, 0)
  event.recipes.gtceu.primitive_blast_furnace("lockwood2")
    .duration(1500)
    .itemInputs(["twilightforest:ironwood_ingot", "gtceu:coke_dust"])
    .itemOutputs("tetranichematerials:lockwood_ingot")
    .chancedOutput("gtceu:ash_dust", 1111, 0)
  event.recipes.gtceu.kinetic_steam_turbine("steam")
    .inputFluids(Fluid.of("gtceu:steam", 640))
    .outputFluids(Fluid.of("gtceu:distilled_water", 4))
    .outputStress(8192)
    .addData('output_stress',8192)
    .duration(10)
  event.recipes.gtceu.seaweed_farm("seaweed")
    .itemInputs("gtceu:fertilizer")
    .notConsumable("minecraft:kelp")
    .duration(400)
    .itemOutputs("4x minecraft:kelp")
    .chancedOutput("2x minecraft:kelp", 2000, 500)
    .chancedOutput("1x minecraft:kelp", 500, 500)
    .inputStress(512)
    .addData('inputStress',512)
  event.recipes.gtceu.chemical_reactor("fix")
    .inputFluids(Fluid.of("gtceu:dilute_iodine_solution", 1000))
    .inputFluids(Fluid.of("gtceu:chlorine", 2000))
    .outputFluids(Fluid.of("gtceu:iodine_solution", 1000))
    .outputFluids(Fluid.of("gtceu:hydrochloric_acid", 2000))
    .duration(100)
    .EUt(240)
  event.remove({ id: "gtceu:chemical_reactor/iodine_solution" })
  event.remove({ id: "gtceu:large_chemical_reactor/iodine_solution" })
  event.recipes.gtceu.mixer("aeternium")
    .itemInputs("2x gtceu:steel_dust")
    .itemInputs("gtceu:ender_pearl_dust")
    .itemInputs("gtceu:netherite_dust")
    .itemOutputs("4x gtceu:aeternium_dust")
    .EUt(480)
    .duration(100)
  event.recipes.gtceu.electric_blast_furnace("aeternium_ingot")
    .itemInputs("gtceu:aeternium_dust")
    .itemOutputs("betterend:aeternium_ingot")
    .circuit(1)
    .EUt(1920)
    .duration(664)
  // event.recipes.gtceu.electric_blast_furnace("aeternium_ingot")
  // .itemInputs("gtceu:aeternium_dust")
  // .itemOutputs("betterend:aeternium_ingot")
  // .InputFluids(Fluid.of("gtceu:nitrogen",1000))
  // .circuit(1)
  // .EUt(1920)
  // .duration(664)
  event.recipes.gtceu.chemical_reactor("ancient_debris_leach")
    .itemInputs("3x gtceu:ancient_debris_dust")
    .inputFluids(Fluid.of("gtceu:aqua_regia", 3000))
    .outputFluids(Fluid.of("gtceu:ancient_debris_leach", 2000))
    .outputFluids(Fluid.of("gtceu:nitrogen_dioxide", 1000))
    .EUt(120)
    .duration(100)
  event.recipes.gtceu.macerator("ancient_debris_dust")
    .itemInputs("minecraft:ancient_debris")
    .itemOutputs("4x gtceu:ancient_debris_dust")
    .itemOutputs("1x gtceu:netherrack_dust")
    .chancedOutput("1x gtceu:gold_dust", 2000, 200)
    .EUt(120)
    .duration(200)
  event.recipes.gtceu.centrifuge("netherite_dust")
    .itemInputs("2x gtceu:gold_dust")
    .inputFluids(Fluid.of("gtceu:ancient_debris_leach", 2000))
    .outputFluids(Fluid.of("gtceu:rare_earth_chloride_solution", 2000))
    .itemOutputs("gtceu:netherite_dust")
    .EUt(120)
    .duration(100)
  event.recipes.gtceu.slaughter_house("kill")
    .EUt(480)
    .duration(60)
    .inputFluids(Fluid.of("gtceu:lubricant", 2))
  event.recipes.gtceu.assembler("blaze_blast_furnace_casing")
    .itemInputs(["4x gtceu:stainless_steel_plate", "2x gtceu:stainless_steel_frame", "botania:blaze_block"])
    .inputFluids(Fluid.of("gtceu:polyvinyl_chloride", 288))
    .EUt(480)
    .duration(100)
    .itemOutputs("kubejs:blaze_blast_furnace_casing")
  event.recipes.gtceu.mana_generator("mana_generator")
    .inputFluids(Fluid.of("gtceu:mana", 4))
    .duration(60)
    .EUt(-32)
    .circuit(0)
  let tier1 = ["water", "fire", "earth", "air"]
  let tier2 = ["spring", "summer", "autumn", "winter", "mana"]
  let tier3 = ["lust", "gluttony", "greed", "sloth", "wrath", "envy", "pride"]
  let tier4 = ["asgard", "vanaheim", "alfheim", "midgard", "joetunheim", "muspelheim", "niflheim", "nidavellir", "helheim"]
  tier1.forEach(rune => {
    event.recipes.gtceu.mana_generator("mana_generator_rune_" + rune)
      .inputFluids(Fluid.of("gtceu:mana", 4))
      .chancedInput("botania:rune_" + rune, 500, 0)
      .duration(80)
      .EUt(-32)
      .circuit(1)
  })
  tier2.forEach(rune => {
    event.recipes.gtceu.mana_generator("mana_generator_rune_" + rune)
      .inputFluids(Fluid.of("gtceu:mana", 4))
      .chancedInput("botania:rune_" + rune, 250, 0)
      .duration(100)
      .EUt(-32)
      .circuit(1)
  })
  tier3.forEach(rune => {
    event.recipes.gtceu.mana_generator("mana_generator_rune_" + rune)
      .inputFluids(Fluid.of("gtceu:mana", 4))
      .chancedInput("botania:rune_" + rune, 125, 0)
      .duration(100)
      .EUt(-48)
      .circuit(1)
  })
  tier4.forEach(rune => {
    event.recipes.gtceu.mana_generator("mana_generator_rune_" + rune)
      .inputFluids(Fluid.of("gtceu:mana", 4))
      .notConsumable("mythicbotany:" + rune + "_rune")
      .duration(120)
      .EUt(-48)
      .circuit(1)
  })
  event.recipes.gtceu.assembler("blaze_blast_furnace")
    .itemInputs(["4x gtceu:nano_processor_assembly", "4x kubejs:blaze_blast_furnace_casing", "2x gtceu:pyrotheum_dust", "2x gtceu:hv_sensor", "gtceu:hv_field_generator"])
    .inputFluids(Fluid.of("gtceu:polyvinyl_chloride", 288))
    .EUt(480)
    .duration(200)
    .itemOutputs("gtceu:blaze_blast_furnace")
  event.recipes.gtceu.assembler("temperature_keeping_device")
    .itemInputs(["4x gtnn:heavy_plate_t1", "minecraft:iron_chestplate", "2x gtceu:polyvinyl_chloride_foil", "gtceu:pyrotheum_bucket", "gtceu:cryotheum_bucket", "2x gtceu:hv_sensor", "cold_sweat:thermometer"])
    .itemOutputs("kubejs:temperature_keeping_device")
    .inputFluids(Fluid.of("gtceu:polyethylene", 288))
    .EUt(480)
    .duration(400)
  event.recipes.gtceu.mixer("pyrotheum")
    .itemInputs(["gtceu:small_saltpeter_dust", "gtceu:sulfur_dust", "gtceu:coke_dust", "minecraft:blaze_powder"])
    .itemOutputs("2x gtceu:pyrotheum_dust")
    .EUt(120)
    .duration(40)
  event.recipes.gtceu.mixer("cryotheum")
    .itemInputs(["gtceu:small_saltpeter_dust", "minecraft:snowball", "gtceu:ice_dust", "minecraft:redstone"])
    .itemOutputs("2x gtceu:cryotheum_dust")
    .EUt(480)
    .duration(40)
  event.recipes.gtceu.water_power("water_power")
    .inputFluids(Fluid.of("gtceu:lubricant", 2))
    .duration(20)
    .EUt(-32)
  event.recipes.gtceu.primitive_blast_furnace("high_quality")
    .itemInputs(["minecraft:iron_ingot", "kubejs:high_quality_solid_fuel"])
    .itemOutputs("gtceu:steel_ingot")
    .chancedOutput("gtceu:ash_dust", 500, 0)
    .duration(1200)
  event.recipes.gtceu.primitive_blast_furnace("high_quality1")
    .itemInputs(["gtceu:wrought_iron_ingot", "kubejs:high_quality_solid_fuel"])
    .itemOutputs("gtceu:steel_ingot")
    .chancedOutput("gtceu:ash_dust", 500, 0)
    .duration(300)
  event.recipes.gtceu.assembler("thermometer_casing")
    .itemInputs(["2x gtceu:gold_plate", "2x minecraft:redstone", "gtceu:steel_rod"])
    .itemOutputs("kubejs:thermometer_case")
    .inputFluids(Fluid.of("gtceu:rubber", 144))
    .EUt(30)
    .duration(100)
  event.recipes.gtceu.chemical_reactor("titaniumtetrachloride")
    .itemInputs(["gtceu:rutile_dust", "2x gtceu:carbon_dust"])
    .inputFluids(Fluid.of("gtceu:chlorine", 4000))
    .outputFluids([Fluid.of("gtceu:titanium_tetrachloride", 1000), Fluid.of("gtceu:carbon_monoxide", 2000)])
    .EUt(480)
    .duration(500)
  event.recipes.gtceu.chemical_plant("rp_1_mixed_fuel")
    .inputFluids(Fluid.of("gtceu:rp_1_rocket_fuel", 500))
    .inputFluids(Fluid.of("gtceu:rocket_fuel", 500))
    .outputFluids(Fluid.of("gtceu:rp_1_mixed_fuel", 1000))
    .inputFluids(Fluid.of("gtceu:oxygen", 2000))
    .circuit(1)
    .addCondition(GTNNRecipes.INSTANCE.setPlantCasing(5))
    .EUt(480)
    .duration(300)
  event.recipes.gtceu.hot_coolant_turbine("steam")
    .inputFluids(Fluid.of("gtceu:hot_steam", 540))
    .outputFluids(Fluid.of("gtceu:steam", 540))
    .EUt(-32)
    .duration(20)
  event.recipes.gtceu.hot_coolant_turbine("deuterium")
    .inputFluids(Fluid.of("gtceu:hot_deuterium", 180))
    .outputFluids(Fluid.of("gtceu:deuterium", 180))
    .EUt(-32)
    .duration(20)
  event.recipes.gtceu.hot_coolant_turbine("sodium")
    .inputFluids(Fluid.of("gtceu:hot_sodium", 108))
    .outputFluids(Fluid.of("gtceu:sodium", 108))
    .EUt(-32)
    .duration(20)
  event.recipes.gtceu.hot_coolant_turbine("sodium_potassium")
    .inputFluids(Fluid.of("gtceu:hot_sodium_potassium", 90))
    .outputFluids(Fluid.of("gtceu:sodium_potassium", 90))
    .EUt(-32)
    .duration(20)
  event.recipes.gtceu.forming_press("shielded_reactor_casing")
    .itemInputs(["12x gtceu:dense_lead_plate", "2x gtceu:dense_stainless_steel_plate", "4x gtceu:dense_vanadium_steel_plate"])
    .itemOutputs("4x kubejs:shielded_reactor_casing")
    .EUt(500)
    .duration(1500)
  event.recipes.gtceu.assembler("nuclear_reactor")
    .itemInputs(["4x kubejs:shielded_reactor_casing", "2x gtceu:ev_sensor", "2x gtceu:ev_electric_motor", "2x gtceu:ultimet_plate"])
    .itemOutputs("gtceu:nuclear_reactor")
    .EUt(1920)
    .duration(400)
  event.recipes.gtceu.assembler("hot_coolant_turbine")
    .itemInputs(["4x gtceu:stellite_100_gear", "2x #gtceu:circuits/ev", "2x gtceu:ultimet_large_item_pipe", "gtceu:ev_machine_hull"])
    .itemOutputs("gtceu:hot_coolant_turbine")
    .EUt(1920)
    .duration(400)
  event.recipes.gtceu.centrifuge("mana_fused")
    .itemInputs("4x gtceu:mana_fused_dust")
    .itemOutputs("3x gtceu:mana_steel_dust")
    .itemOutputs("botania:mana_diamond")
    .chancedOutput("gtceu:elementium_dust", 2000, 500)
    .EUt(120)
    .duration(160)
  event.recipes.gtceu.centrifuge("alexscaves:acid")
    .inputFluids(Fluid.of("alexscaves:acid", 1000))
    .outputFluids(Fluid.of("minecraft:water", 500))
    .outputFluids(Fluid.of("gtceu:hydrochloric_acid", 250))
    .outputFluids(Fluid.of("gtceu:sulfuric_acid", 100))
    .outputFluids(Fluid.of("gtceu:phosphoric_acid", 150))
    .itemOutputs("2x gtceu:tiny_uranium_dust")
    .chancedOutput("gtceu:tiny_plutonium_dust", 2000, 500)
    .EUt(30)
    .duration(80)
  event.recipes.gtceu.gaia_reactor("gaia1")
    .itemInputs("botania:terrasteel_ingot")
    .itemOutputs("4x botania:life_essence")
    .itemOutputs("10x botania:manasteel_ingot")
    .itemOutputs("5x botania:mana_diamond")
    .itemOutputs("5x botania:mana_pearl")
    .outputFluids(Fluid.of("gtceu:mana", 1000))
    .chancedOutput("botania:rune_water", 2500, 250)
    .chancedOutput("botania:rune_fire", 2500, 250)
    .chancedOutput("botania:rune_earth", 2500, 250)
    .chancedOutput("botania:rune_air", 2500, 250)
    .chancedOutput("botania:rune_spring", 1500, 150)
    .chancedOutput("botania:rune_summer", 1500, 150)
    .chancedOutput("botania:rune_autumn", 1500, 150)
    .chancedOutput("botania:rune_winter", 1500, 150)
    .duration(400)
    .EUt(480)

  event.recipes.gtceu.gaia_reactor("gaia2")
    .itemInputs("botania:gaia_ingot")
    .itemOutputs("16x botania:life_essence")
    .itemOutputs("12x botania:manasteel_ingot")
    .itemOutputs("8x botania:mana_diamond")
    .itemOutputs("8x botania:mana_pearl")
    .itemOutputs("2x botania:terrasteel_ingot")
    .itemOutputs("4x botania:dragonstone")
    .outputFluids(Fluid.of("gtceu:mana", 10000))
    .chancedOutput("botania:rune_water", 5000, 500)
    .chancedOutput("botania:rune_fire", 5000, 500)
    .chancedOutput("botania:rune_earth", 5000, 500)
    .chancedOutput("botania:rune_air", 5000, 500)
    .chancedOutput("botania:rune_spring", 3000, 300)
    .chancedOutput("botania:rune_summer", 3000, 300)
    .chancedOutput("botania:rune_autumn", 3000, 300)
    .chancedOutput("botania:rune_winter", 3000, 300)
    .chancedOutput("botania:rune_lust", 2000, 200)
    .chancedOutput("botania:rune_gluttony", 2000, 200)
    .chancedOutput("botania:rune_greed", 2000, 200)
    .chancedOutput("botania:rune_sloth", 2000, 200)
    .chancedOutput("botania:rune_wrath", 2000, 200)
    .chancedOutput("botania:rune_envy", 2000, 200)
    .chancedOutput("botania:rune_pride", 2000, 200)
    .duration(800)
    .EUt(1920)

  event.recipes.gtceu.assembler("gaia_reactor")
    .EUt(120)
    .duration(200)
    .itemInputs(["4x botania:gaia_ingot", "4x gtceu:solid_machine_casing", "2x gtceu:mv_emitter", "2x botania:mana_diamond", "2x gtceu:terra_steel_screw"])
    .inputFluids(Fluid.of("gtceu:polyethylene", 288))
    .itemOutputs("gtceu:gaia_reactor")

  event.remove({ id: "gtceu:assembler/cover_ender_fluid_link" })
  event.recipes.gtceu.assembler("cover_ender_fluid_link")
    .EUt(480)
    .duration(320)
    .itemInputs(["2x gtceu:ender_pearl_plate", "gtceu:hv_sensor", "gtceu:double_stainless_steel_plate", "gtceu:hv_emitter", "gtceu:hv_electric_pump"])
    .inputFluids(Fluid.of("gtceu:polyethylene", 288))
    .itemOutputs("gtceu:ender_fluid_link_cover")

  event.recipes.gtceu.macerator("tiny_uranium_dust")
    .itemInputs("alexscaves:uranium_shard")
    .itemOutputs("gtceu:tiny_uranium_dust")
    .chancedOutput("gtceu:tiny_uranium_dust", 2000, 150)
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.assembler("lv_energy_output_hatch_4a")
    .itemInputs(["gtceu:lv_energy_output_hatch", "2x gtceu:tin_quadruple_wire", "2x gtceu:steel_plate"])
    .itemOutputs("gtceu:lv_energy_output_hatch_4a0")
    .EUt(7)
    .duration(100)

  event.recipes.gtceu.assembler("mv_energy_output_hatch_4a")
    .itemInputs(["gtceu:mv_energy_output_hatch", "2x gtceu:cupronickel_quadruple_wire", "2x gtceu:aluminium_plate"])
    .itemOutputs("gtceu:mv_energy_output_hatch_4a1")
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.assembler("hv_energy_output_hatch_4a")
    .itemInputs(["gtceu:hv_energy_output_hatch", "2x gtceu:silver_quadruple_wire", "2x gtceu:stainless_steel_plate"])
    .itemOutputs("gtceu:hv_energy_output_hatch_4a2")
    .EUt(120)
    .duration(100)

  event.recipes.gtceu.centrifuge("oil_refined_residues")
    .itemInputs("gtceu:oil_refined_residues_dust")
    .itemOutputs("gtceu:stone_dust")
    .itemOutputs("gtceu:small_oxidized_residues_dust")
    .chancedOutput("gtceu:magnetite_dust", 1500, 100)
    .chancedOutput("gtceu:garnierite_dust", 1500, 100)
    .chancedOutput("gtceu:pyrite_dust", 1500, 100)
    .EUt(30)
    .duration(20)
  event.recipes.gtceu.centrifuge("dried_salt")
    .itemInputs("gtceu:dried_salt_dust")
    .itemOutputs("gtceu:stone_dust")
    .itemOutputs("2x gtceu:tiny_salt_dust")
    .itemOutputs("2x gtceu:tiny_rock_salt_dust")
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.macerator("dried_salt_stone")
    .itemInputs("biomesoplenty:dried_salt")
    .itemOutputs("gtceu:dried_salt_dust")
    .EUt(16)
    .duration(30)

  event.replaceOutput({ id: "gtceu:centrifuge/endstone_separation" }, "gtceu:platinum_dust", "gtceu:platinum_metal_dust")

  event.recipes.gtceu.macerator("rich_soil")
    .itemInputs("farmersdelight:rich_soil")
    .itemOutputs("4x gtceu:rich_soil_dust")
    .chancedOutput("gtceu:normal_yeast_dust", 2500, 200)
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.macerator("rich_soul_soil")
    .itemInputs('mynethersdelight:resurgent_soil')
    .itemOutputs("4x gtceu:rich_soul_soil_dust")
    .chancedOutput("gtceu:crimson_yeast_dust", 1500, 150)
    .chancedOutput("gtceu:warped_yeast_dust", 1500, 150)
    .EUt(30)
    .duration(20)

  event.replaceInput({ id: "gtceu:shaped/small_wooden_pipe" }, "#minecraft:planks", "gtceu:wood_plate")
  event.recipes.gtceu.gas_collector("twilightforest_air")
    .circuit(4)
    .dimension("twilightforest:twilight_forest")
    .outputFluids(Fluid.of("gtceu:twilightforest_air", 10000))
    .EUt(16)
    .duration(200)
  event.recipes.gtceu.gas_collector("alfheim_air")
    .circuit(5)
    .dimension("mythicbotany:alfheim")
    .outputFluids(Fluid.of("gtceu:alfheim_air", 10000))
    .EUt(64)
    .duration(200)
  event.recipes.gtceu.gas_collector("aether_air")
    .circuit(6)
    .dimension("aether:the_aether")
    .outputFluids(Fluid.of("gtceu:aether_air", 10000))
    .EUt(256)
    .duration(200)
  event.recipes.gtceu.gas_collector("venus_air")
    .circuit(7)
    .dimension("ad_astra:venus")
    .outputFluids(Fluid.of("gtceu:venus_air", 10000))
    .EUt(1024)
    .duration(200)
  event.recipes.gtceu.vacuum_freezer("twilightforest_air_freeze")
    .inputFluids(Fluid.of("gtceu:twilightforest_air", 4000))
    .outputFluids(Fluid.of("gtceu:liquid_twilightforest_air", 4000))
    .EUt(120)
    .duration(80)
  event.recipes.gtceu.vacuum_freezer("alfheim_air_freeze")
    .inputFluids(Fluid.of("gtceu:alfheim_air", 4000))
    .outputFluids(Fluid.of("gtceu:liquid_alfheim_air", 4000))
    .EUt(480)
    .duration(80)
  event.recipes.gtceu.vacuum_freezer("aether_air_freeze")
    .inputFluids(Fluid.of("gtceu:aether_air", 4000))
    .outputFluids(Fluid.of("gtceu:liquid_aether_air", 4000))
    .EUt(GTValues.VA[GTValues.LuV])
    .duration(80)
  event.recipes.gtceu.vacuum_freezer("venus_air_freeze")
    .inputFluids(Fluid.of("gtceu:venus_air", 4000))
    .outputFluids(Fluid.of("gtceu:liquid_venus_air", 4000))
    .EUt(GTValues.VA[GTValues.LuV])
    .duration(80)
  event.recipes.gtceu.distillation_tower("liquid_twilightforest_air")
    .inputFluids(Fluid.of("gtceu:liquid_twilightforest_air", 25000))
    .outputFluids(Fluid.of("gtceu:nitrogen", 12500))
    .outputFluids(Fluid.of("gtceu:oxygen", 10000))
    .outputFluids(Fluid.of("gtceu:carbon_dioxide", 2000))
    .outputFluids(Fluid.of("gtceu:helium", 500))
    .EUt(120)
    .duration(2000)
  event.recipes.gtceu.centrifuge("twilightforest_air")
    .inputFluids(Fluid.of("gtceu:twilightforest_air", 10000))
    .outputFluids(Fluid.of("gtceu:nitrogen", 2500))
    .outputFluids(Fluid.of("gtceu:oxygen", 2500))
    .EUt(7)
    .duration(800)
  event.recipes.gtceu.distillation_tower("liquid_alfheim_air")
    .inputFluids(Fluid.of("gtceu:liquid_alfheim_air", 100000))
    .itemOutputs("botania:mana_powder")
    .outputFluids(Fluid.of("gtceu:mana", 40000))
    .outputFluids(Fluid.of("gtceu:oxygen", 25000))
    .outputFluids(Fluid.of("gtceu:steam", 12000))
    .outputFluids(Fluid.of("gtceu:neon", 10000))
    .outputFluids(Fluid.of("gtceu:carbon_dioxide", 5000))
    .outputFluids(Fluid.of("gtceu:helium", 5000))
    .outputFluids(Fluid.of("gtceu:argon", 3000))
    .EUt(480)
    .duration(2000)
  event.recipes.gtceu.centrifuge("alfheim_air")
    .inputFluids(Fluid.of("gtceu:alfheim_air", 10000))
    .outputFluids(Fluid.of("gtceu:mana", 2500))
    .outputFluids(Fluid.of("gtceu:oxygen", 1500))
    .outputFluids(Fluid.of("gtceu:helium", 1000))
    .EUt(120)
    .duration(800)
  // event.recipes.gtceu.distillation_tower("liquid_aether_air")
  //   .inputFluids(Fluid.of("gtceu:aether_air",100000))
  //   .itemOutputs("botania:mana_powder")
  //   .outputFluids(Fluid.of("gtceu:mana",40000))
  //   .outputFluids(Fluid.of("gtceu:oxygen",25000))
  //   .outputFluids(Fluid.of("gtceu:steam",12000))
  //   .outputFluids(Fluid.of("gtceu:neon",10000))
  //   .outputFluids(Fluid.of("gtceu:carbon_dioxide",5000))
  //   .outputFluids(Fluid.of("gtceu:helium",5000))
  //   .outputFluids(Fluid.of("gtceu:argon",3000))
  //   .EUt(480)
  //   .duration(2000)
  event.recipes.gtceu.assembler("barrel")
    .itemInputs("7x #minecraft:planks")
    .itemOutputs("minecraft:barrel")
    .circuit(7)
    .EUt(4)
    .duration(100)
  event.remove({ id: "gtceu:assembler/barrel" })
  event.recipes.gtceu.kinetic_generator("generator")
    .inputFluids(Fluid.of("gtceu:lubricant", 1))
    .inputStress(512)
    .duration(40)
    .EUt(-32)

  event.recipes.gtceu.mixer("chorusite_alloy_dust")
    .itemInputs(["gtceu:andesite_alloy_dust", "2x minecraft:popped_chorus_fruit", "minecraft:dragon_breath"])
    .itemOutputs("4x gtceu:chorusite_alloy_dust")
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.big_dam("big_dam")
    .inputFluids(Fluid.of("gtceu:lubricant", 50))
    .outputStress(1048576)
    .addData('output_stress',1048576)
    .duration(200)

  event.recipes.gtceu.centrifuge('slag')
    .itemInputs('8x gtceu:slag_dust')
    .itemOutputs('3x gtceu:alumina_dust')
    .itemOutputs('3x gtceu:silicon_dioxide_dust')
    .itemOutputs('2x gtceu:magnesia_dust')
    .chancedOutput('gtceu:calcium_sulfide_dust',2500,500)
    .chancedOutput('gtceu:sodium_sulfide_dust',1500,500)
    .EUt(30)
    .duration(288)
  let stones = ['asurine','crimsite','ochrum','veridium']
  stones.forEach(stone =>{
    event.recipes.gtceu.macerator(stone+'_macerator')
      .itemInputs('create:' + stone)
      .itemOutputs('gtceu:' + stone + '_dust')
      .chancedOutput('gtceu:' + stone + '_dust',1500,500)
      .EUt(30)
      .duration(100)
    event.recipes.gtceu.mixer(stone + "_slurry")
      .itemInputs('gtceu:' + stone + '_dust')
      .inputFluids(Fluid.of('gtceu:aqua_regia',3000))
      .outputFluids(Fluid.of('gtceu:' + stone + '_slurry',3000))
      .EUt(480)
      .duration(100)
  })
  event.recipes.gtceu.centrifuge('asurine_dust')
    .itemInputs('gtceu:asurine_dust')
    .itemOutputs('gtceu:silicon_dioxide_dust')
    .itemOutputs('gtceu:small_zinc_dust')
    .chancedOutput('gtceu:small_gallium_dust',1500,250)
    .EUt(30)
    .duration(60)
  event.recipes.gtceu.centrifuge('crimsite_dust')
    .itemInputs('gtceu:crimsite_dust')
    .itemOutputs('gtceu:silicon_dioxide_dust')
    .itemOutputs('gtceu:small_iron_dust')
    .chancedOutput('gtceu:small_cobalt_dust',1500,250)
    .EUt(30)
    .duration(60)
  event.recipes.gtceu.centrifuge('ochrum_dust')
    .itemInputs('gtceu:ochrum_dust')
    .itemOutputs('gtceu:silicon_dioxide_dust')
    .itemOutputs('gtceu:small_precious_alloy_dust')
    .chancedOutput('gtceu:small_silver_dust',1500,250)
    .EUt(30)
    .duration(60)
  event.recipes.gtceu.centrifuge('veridium_dust')
    .itemInputs('gtceu:veridium_dust')
    .itemOutputs('gtceu:silicon_dioxide_dust')
    .itemOutputs('gtceu:small_copper_dust')
    .chancedOutput('gtceu:small_nickel_dust',1500,250)
    .EUt(30)
    .duration(60)
  event.recipes.gtceu.centrifuge('asurine_slurry')
    .inputFluids(Fluid.of('gtceu:asurine_slurry',3000))
    .outputFluids(Fluid.of('gtceu:diluted_hydrochloric_acid',2000))
    .itemOutputs('2x gtceu:small_silicon_dust')
    .itemOutputs('gtceu:zinc_dust')
    .chancedOutput('gtceu:gallium_dust',1000,500)
    .chancedOutput('gtceu:aluminium_dust',1000,250)
    .EUt(480)
    .duration(200)
  event.recipes.gtceu.centrifuge('crimsite_slurry')
    .inputFluids(Fluid.of('gtceu:crimsite_slurry',3000))
    .outputFluids(Fluid.of('gtceu:diluted_hydrochloric_acid',2000))
    .itemOutputs('2x gtceu:small_silicon_dust')
    .itemOutputs('gtceu:iron_dust')
    .chancedOutput('gtceu:cobalt_dust',1000,500)
    .chancedOutput('gtceu:chromium_dust',500,250)
    .EUt(480)
    .duration(200)
  event.recipes.gtceu.centrifuge('ochrum_slurry')
    .inputFluids(Fluid.of('gtceu:ochrum_slurry',3000))
    .outputFluids(Fluid.of('gtceu:diluted_hydrochloric_acid',1000))
    .itemOutputs('2x gtceu:small_silicon_dust')
    .outputFluids(Fluid.of('gtceu:chloroauric_acid',500))
    .chancedOutput('gtceu:silver_dust',1000,500)
    .chancedOutput(Fluid.of('gtceu:mercury'),1000,250)
    .EUt(480)
    .duration(200)
  event.recipes.gtceu.centrifuge('veridium_slurry')
    .inputFluids(Fluid.of('gtceu:veridium_slurry',3000))
    .outputFluids(Fluid.of('gtceu:diluted_hydrochloric_acid',2000))
    .itemOutputs('2x gtceu:small_silicon_dust')
    .itemOutputs('gtceu:copper_dust')
    .chancedOutput('gtceu:nickel_dust',1000,500)
    .chancedOutput('gtceu:tin_dust',1000,250)
    .EUt(480)
    .duration(200)
  function Greenhouse(id, input, fluid, output, boosted) {
        if (boosted) {
            event.recipes.gtceu.greenhouse(id)
                .circuit(2)
                .notConsumable(InputItem.of(input))
                .itemInputs('4x gtceu:fertilizer')
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(320)
                .EUt(120)
        } else {
            event.recipes.gtceu.greenhouse(id)
                .circuit(1)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(640)
                .EUt(120)
        }
    }
  // Rubber
  Greenhouse('rubber_sapling', 'gtceu:rubber_sapling', 1000, ['32x gtceu:rubber_log', '8x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], false)
  Greenhouse('rubber_sapling_boosted', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], true)

  // Oak
  Greenhouse('oak_sapling', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '4x minecraft:oak_sapling'], false)
  Greenhouse('oak_sapling_boosted', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:oak_sapling'], true)

  // Dark Oak
  Greenhouse('dark_oak_sapling', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], false)
  Greenhouse('dark_oak_sapling_boosted', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], true)

  // Spruce
  Greenhouse('spruce_sapling', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], false)
  Greenhouse('spruce_sapling_boosted', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], true)

  // Birch
  Greenhouse('birch_sapling', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '4x minecraft:birch_sapling'], false)
  Greenhouse('birch_sapling_boosted', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '64x minecraft:birch_log', '4x minecraft:birch_sapling'], true)

  // Acacia
  Greenhouse('acacia_sapling', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], false)
  Greenhouse('acacia_sapling_boosted', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], true)

  // Jungle
  Greenhouse('jungle_sapling', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], false)
  Greenhouse('jungle_sapling_boosted', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], true)

  // Azalea
  Greenhouse('azalea_sapling', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:azalea'], false)
  Greenhouse('azalea_boosted', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:azalea'], true)

  // Flowering Azalea
  Greenhouse('flowering_azalea', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:flowering_azalea'], false)
  Greenhouse('flowering_azalea_boosted', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:flowering_azalea'], true)

  // Mangrove
  Greenhouse('mangrove_propagule', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], false)
  Greenhouse('mangrove_propagule_boosted', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], true)

  Greenhouse('cherry_sapling', 'minecraft:cherry_sapling',1000,['64x minecraft:cherry_log', '4x miencraft:cherry_sapling'],false)
  Greenhouse('cherry_sapling_boosted', 'minecraft:cherry_sapling',1000,['64x minecraft:cherry_log', '64x minecraft:cherry_log','4x miencraft:cherry_sapling'],true)

  Greenhouse('hollow_oak_sapling', 'twilightforest:hollow_oak_sapling',1000,['64x twilightforest:twilight_oak_log', '4x twilightforest:hollow_oak_sapling'],false)
  Greenhouse('hollow_oak_sapling_boosted', 'twilightforest:hollow_oak_sapling',1000,['64x twilightforest:twilight_oak_log', '64x twilightforest:twilight_oak_log','4x twilightforest:hollow_oak_sapling'],true)

  ////// Crops //////

  // Sugarcane
  Greenhouse('sugar_cane', 'minecraft:sugar_cane', 1000, '24x minecraft:sugar_cane', false)
  Greenhouse('sugar_cane_boosted', 'minecraft:sugar_cane', 1000, '48x minecraft:sugar_cane', true)

  // Kelp
  Greenhouse('kelp', 'minecraft:kelp', 2000, '24x minecraft:kelp', false)
  Greenhouse('kelp_boosted', 'minecraft:kelp', 2000, '48x minecraft:kelp', true)

  // Bamboo
  Greenhouse('bamboo', 'minecraft:bamboo', 1000, '24x minecraft:bamboo', false)
  Greenhouse('bamboo_boosted', 'minecraft:bamboo', 1000, '48x minecraft:bamboo', true)

  // Cactus
  Greenhouse('cactus', 'minecraft:cactus', 1000, '24x minecraft:cactus', false)
  Greenhouse('cactus_boosted', 'minecraft:cactus', 1000, '48x minecraft:cactus', true)

  // Wheat
  Greenhouse('wheat', 'minecraft:wheat_seeds', 1000, '24x minecraft:wheat', false)
  Greenhouse('wheat_boosted', 'minecraft:wheat_seeds', 1000, '48x minecraft:wheat', true)

  // Carrot
  Greenhouse('carrot', 'minecraft:carrot', 1000, '24x minecraft:carrot', false)
  Greenhouse('carrot_boosted', 'minecraft:carrot', 1000, '48x minecraft:carrot', true)

  // Potato
  Greenhouse('potato', 'minecraft:potato', 1000, '24x minecraft:potato', false)
  Greenhouse('potato_boosted', 'minecraft:potato', 1000, '48x minecraft:potato', true)

  // Beetroot
  Greenhouse('beetroot', 'minecraft:beetroot_seeds', 1000, '24x minecraft:beetroot', false)
  Greenhouse('beetroot_boosted', 'minecraft:beetroot_seeds', 1000, '48x minecraft:beetroot', true)

  // Mellon
  Greenhouse('melon', 'minecraft:melon_seeds', 1000, '12x minecraft:melon', false)
  Greenhouse('melon_boosted', 'minecraft:melon_seeds', 1000, '24x minecraft:melon', true)

  // Pumpkin
  Greenhouse('pumpkin', 'minecraft:pumpkin_seeds', 1000, '12x minecraft:pumpkin', false)
  Greenhouse('pumpkin_boosted', 'minecraft:pumpkin_seeds', 1000, '24x minecraft:pumpkin', true)

  // Nether Wart
  Greenhouse('nether_wart', 'minecraft:nether_wart', 1000, '12x minecraft:nether_wart', false)
  Greenhouse('nether_wart_boosted', 'minecraft:nether_wart', 1000, '24x minecraft:nether_wart', true)

  // Red Mushroom
  Greenhouse('red_mushroom', 'minecraft:red_mushroom', 1000, '12x minecraft:red_mushroom', false)
  Greenhouse('red_mushroom_boosted', 'minecraft:red_mushroom', 1000, '24x minecraft:red_mushroom', true)

  // Brown Mushroom
  Greenhouse('brown_mushroom', 'minecraft:brown_mushroom', 1000, '12x minecraft:brown_mushroom', false)
  Greenhouse('brown_mushroom_boosted', 'minecraft:brown_mushroom', 1000, '24x minecraft:brown_mushroom', true)

  event.recipes.gtceu.greenhouse('rhizobium')
    .circuit(3)
    .duration(640)
    .EUt(120)
    .notConsumable('minecraft:spruce_sapling')
    .itemInputs('4x gtceu:rhizobium_dust')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .itemInputs('4x gtceu:fertilizer')
    .itemOutputs('32x minecraft:spruce_log')
    .itemOutputs('8x gtceu:rhizobium_dust')
    .itemOutputs('50x gtceu:sodium_nitrate_dust')
  
  event.recipes.gtceu.mixer('magneto_resonatic')
    .itemInputs(['gtceu:zanite_dust','gtceu:ambrosium_dust','gtceu:skyjade_dust','gtceu:magnetic_steel_dust','gtceu:cubic_zirconia_dust'])
    .itemOutputs('5x gtceu:magneto_resonatic_dust')
    .EUt(480)
    .duration(200)

  event.recipes.gtceu.circuit_assembler('circuit_resonatic_ulv')
    .itemInputs(['gtceu:magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','gtceu:vacuum_tube','4x gtceu:resistor','4x gtceu:capacitor','4x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',36))
    .itemOutputs('4x kubejs:circuit_resonatic_ulv')
    .EUt(30)
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_lv')
    .itemInputs(['gtceu:magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_ulv','4x gtceu:diode','4x gtceu:capacitor','4x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
    .itemOutputs('4x kubejs:circuit_resonatic_lv')
    .EUt(120)
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_mv')
    .itemInputs(['2x gtceu:magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_lv','4x gtceu:inductor','4x gtceu:transistor','8x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',108))
    .itemOutputs('4x kubejs:circuit_resonatic_mv')
    .EUt(480)
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_hv')
    .itemInputs(['2x gtceu:magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_mv','4x gtceu:smd_resistor','4x gtceu:smd_capacitor','8x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',144))
    .itemOutputs('4x kubejs:circuit_resonatic_hv')
    .EUt(1920)
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_ev')
    .itemInputs(['4x gtceu:magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_hv','4x gtceu:smd_diode','4x gtceu:smd_capacitor','16x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',180))
    .itemOutputs('4x kubejs:circuit_resonatic_ev')
    .EUt(GTValues.VA[GTValues.IV])
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_iv')
    .itemInputs(['4x gtceu:magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_ev','4x gtceu:smd_inductor','4x gtceu:smd_transistor','16x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',864))
    .itemOutputs('4x kubejs:circuit_resonatic_iv')
    .EUt(GTValues.VA[GTValues.LuV])
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_luv')
    .itemInputs(['2x gtceu:exquisite_magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_iv','4x gtceu:advanced_smd_resistor','4x gtceu:advanced_smd_capacitor','32x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',1008))
    .itemOutputs('4x kubejs:circuit_resonatic_luv')
    .EUt(GTValues.VA[GTValues.ZPM])
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_zpm')
    .itemInputs(['2x gtceu:exquisite_magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_luv','4x gtceu:advanced_smd_diode','4x gtceu:advanced_smd_capacitor','32x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',4608))
    .itemOutputs('4x kubejs:circuit_resonatic_zpm')
    .EUt(GTValues.VA[GTValues.UV])
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_uv')
    .itemInputs(['4x gtceu:exquisite_magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_zpm','4x gtceu:advanced_smd_inductor','4x gtceu:advanced_smd_transistor','64x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',5184))
    .itemOutputs('4x kubejs:circuit_resonatic_uv')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_uhv')
    .itemInputs(['4x gtceu:exquisite_magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_uv','4x gtceu:advanced_smd_inductor','4x gtceu:advanced_smd_transistor','64x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',5760))
    .itemOutputs('4x kubejs:circuit_resonatic_uhv')
    .EUt(GTValues.VA[GTValues.UEV])
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_uev')
    .itemInputs(['8x gtceu:exquisite_magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_uhv','4x gtceu:advanced_smd_inductor','4x gtceu:advanced_smd_transistor','64x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',9216))
    .itemOutputs('4x kubejs:circuit_resonatic_uev')
    .EUt(GTValues.VA[GTValues.UIV])
    .duration(75)
  event.recipes.gtceu.circuit_assembler('circuit_resonatic_uiv')
    .itemInputs(['8x gtceu:exquisite_magneto_resonatic_gem','kubejs:imprinted_resonatic_circuit_board','kubejs:circuit_resonatic_uev','4x gtceu:advanced_smd_inductor','4x gtceu:advanced_smd_transistor','64x gtceu:ram_chip'])
    .inputFluids(Fluid.of('gtceu:soldering_alloy',13824))
    .itemOutputs('4x kubejs:circuit_resonatic_uiv')
    .EUt(GTValues.VA[GTValues.UXV])
    .duration(75)
  event.recipes.gtceu.chemical_bath('netherite_magnet')
    .itemInputs('create_new_age:fluxuated_magnetite')
    .inputFluids(Fluid.of('gtceu:ancient_debris_leach',8000))
    .itemOutputs('create_new_age:netherite_magnet')
    .EUt(120)
    .duration(60)
  event.recipes.gtceu.assembler('fluxuated_magnetite')
    .itemInputs(['create_new_age:layered_magnet','2x botania:mana_diamond','2x gtceu:diamond_screw'])
    .itemOutputs('create_new_age:fluxuated_magnetite')
    .EUt(30)
    .duration(60)
  event.shaped(
    "gtceu:treated_wood_small_fluid_pipe",
    [
      "S",
      "P",
      "M",
    ], {
    'P': "#forge:treated_wood",
    'M': "#forge:tools/mallets",
    'S': "#forge:tools/saws",
  })
  event.shaped(
    "gtceu:treated_wood_normal_fluid_pipe",
    [
      "PS",
      "P ",
      "PM",
    ], {
    'P': "#forge:treated_wood",
    'M': "#forge:tools/mallets",
    'S': "#forge:tools/saws",
  })
  event.shaped(
    "gtceu:treated_wood_large_fluid_pipe",
    [
      "PSP",
      "P P",
      "PMP",
    ], {
    'P': "#forge:treated_wood",
    'M': "#forge:tools/mallets",
    'S': "#forge:tools/saws",
  })

  event.recipes.gtceu.windmill_control_center('windmill_control')
    .inputFluids(Fluid.of("gtceu:lubricant", 25))
    .duration(200)
    .outputStress(512)
  event.recipes.gtceu.chemical_bath('fiber_glass')
    .itemInputs('gtceu:cellulose_dust')
    .inputFluids(Fluid.of('gtceu:glass',288))
    .outputFluids(Fluid.of('gtceu:fiber_glass',288))
    .EUt(30)
    .duration(120)
  event.remove({id:'gtceu:assembler/space_helmet'})
  event.remove({id:'gtceu:shaped/space_suit'})
  event.remove({id:'gtceu:shaped/space_pants'})
  event.remove({id:'gtceu:shaped/space_boots'})
  event.recipes.gtceu.assembler('space_helmet')
    .itemInputs('gtceu:glass_plate','4x kubejs:space_fabric')
    .inputFluids(Fluid.of('gtceu:glue',72))
    .itemOutputs('ad_astra:space_helmet')
    .EUt(120)
    .duration(400)
  event.recipes.gtceu.assembler('space_suit')
    .itemInputs(['ad_astra:oxygen_gear', '2x ad_astra:gas_tank', '4x gtnn:heavy_plate_t1', '2x gtceu:stainless_steel_screw', '4x kubejs:space_fabric'])
    .itemOutputs('ad_astra:space_suit')
    .EUt(120)
    .duration(400)
  event.recipes.gtceu.assembler('space_pants')
    .itemInputs(['5x gtnn:heavy_plate_t1','3x kubejs:space_fabric'])
    .itemOutputs('ad_astra:space_pants')
    .EUt(120)
    .duration(400)
  event.recipes.gtceu.assembler('space_boots')
    .itemInputs(['4x gtnn:heavy_plate_t1','2x kubejs:space_fabric'])
    .itemOutputs('ad_astra:space_boots')
    .EUt(120)
    .duration(400)
  event.recipes.gtceu.autoclave('imprinted_resonatic_circuit_board')
    .itemInputs('kubejs:raw_imprinted_resonatic_circuit_board')
    .itemOutputs('kubejs:imprinted_resonatic_circuit_board')
    .inputFluids(Fluid.of('gtceu:soldering_alloy',432))
    .EUt(1920)
    .duration(300)
  event.recipes.gtceu.assembler('force_field_casing')
    .itemInputs(['2x kubejs:blood_casing','2x gtceu:titanium_plate','4x bloodmagic:defaultcrystal','bloodmagic:weakbloodshard'])
    .itemOutputs('2x kubejs:force_field_casing')
    .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',2000))
    .EUt(1920)
    .duration(300)

  event.recipes.gtceu.assembler('meteor_capturer')
    .itemInputs(['2x #gtceu:circuits/luv','2x gtceu:tungsten_steel_frame','gtceu:ev_field_generator','4x gtceu:tungsten_steel_plate','4x bloodmagic:largebloodstonebrick','kubejs:endslate'])
    .inputFluids(Fluid.of('gtceu:epoxy',576))
    .itemOutputs('gtceu:meteor_capturer')
    .EUt(7680)
    .duration(100)
      event.recipes.gtceu.mark_of_falling_tower('stone_iron')
        .itemInputs('minecraft:iron_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',128000))
        .itemOutputs('256x gtceu:iron_ore','64x gtceu:hematite_ore','64x gtceu:yellow_limonite_ore',
            '64x gtceu:pyrite_ore','64x gtceu:magnetite_ore','64x gtceu:goethite_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('stone_copper')
        .itemInputs('minecraft:copper_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',128000))
        .itemOutputs('256x gtceu:copper_ore','64x gtceu:chalcopyrite_ore','64x gtceu:tetrahedrite_ore','64x gtceu:bornite_ore','64x gtceu:chalcocite_ore')
        .addData('radius',5)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('stone_gems_red')
        .itemInputs('gtceu:exquisite_ruby_gem')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',192000))
        .itemOutputs('64x gtceu:ruby_ore','64x gtceu:almandine_ore','64x gtceu:cinnabar_ore',
            '64x gtceu:pyrope_ore','64x gtceu:realgar_ore','64x gtceu:red_garnet_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('stone_gems_blue')
        .itemInputs('gtceu:exquisite_sapphire_gem')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',192000))
        .itemOutputs('64x gtceu:blue_topaz_ore','64x gtceu:diamond_ore','64x gtceu:lazurite_ore',
            '64x gtceu:sodalite_ore','64x gtceu:sapphire_ore','64x gtceu:lapis_ore','64x gtceu:apatite_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('stone_gems_green')
        .itemInputs('gtceu:exquisite_green_sapphire_gem')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',192000))
        .itemOutputs('64x gtceu:emerald_ore','64x gtceu:green_sapphire_ore','64x gtceu:malachite_ore',
            '64x gtceu:olivine_ore','64x gtceu:monazite_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);
      
    event.recipes.gtceu.mark_of_falling_tower('andesite')
        .itemInputs('gtceu:andesite_alloy_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',128000))
        .itemOutputs('64x minecraft:andesite','64x gtceu:zinc_ore','64x gtceu:copper_ore',
            '64x gtceu:tin_ore','256x gtceu:iron_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:andesite')
        .EUt(1920)
        .duration(400);
    
    event.recipes.gtceu.mark_of_falling_tower('end_al')
        .itemInputs('gtceu:mv_emitter')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',256000))
        .itemOutputs('256x gtceu:endstone_aluminium_ore','256x gtceu:endstone_bauxite_ore','256x gtceu:endstone_cryolite_ore')
        .addData('radius',8)
        .addData('rock','minecraft:endstone')
        .EUt(1920)
        .duration(400); 
    
    event.recipes.gtceu.mark_of_falling_tower('end_w')
        .itemInputs('gtceu:tungsten_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',1024000))
        .itemOutputs('512x gtceu:endstone_scheelite_ore','512x gtceu:endstone_tungstate_ore')
        .addData('radius',8)
        .addData('rock','minecraft:endstone')
        .EUt(7680)
        .duration(400);
    event.recipes.gtceu.mark_of_falling_tower('moon_pt')
        .itemInputs('gtceu:hv_emitter')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',1024000))
        .itemOutputs('64x gtceu:moon_stone_palladium_ore','256x gtceu:moon_stone_platinum_ore','128x gtceu:moon_stone_cooperite_ore',
            '64x gtceu:moon_stone_pentlandite_ore','64x gtceu:moon_stone_tetrahedrite_ore'
        )
        .addData('radius',8)
        .addData('rock','ad_astra:moon_stone')
        .EUt(7680)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('mars_pt')
        .itemInputs('gtceu:luv_assembler')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',1024000))
        .itemOutputs('64x gtceu:mars_stone_palladium_ore','256x gtceu:mars_stone_platinum_ore','64x gtceu:mars_stone_cooperite_ore',
            '64x gtceu:mars_stone_iridium_ore','64x gtceu:mars_stone_osmium_ore','64x gtceu:mars_stone_copper_ore'
        )
        .addData('radius',6)
        .addData('rock','ad_astra:mars_stone')
        .EUt(30720)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('mars_radioactive')
        .itemInputs('gtceu:naquadria_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',4096000))
        .itemOutputs('2048x gtceu:mars_stone_naquadah_ore','1024x gtceu:mars_stone_uranium_ore','1024x gtceu:mars_stone_plutonium_ore')
        .addData('radius',12)
        .addData('rock','ad_astra:mars_stone')
        .EUt(122880)
        .duration(800);

    event.recipes.gtceu.mark_of_falling_tower('sandstone_oil')
        .itemInputs('gtceu:oil_bucket')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',256000))
        .itemOutputs('1024x gtceu:sand_oilsands_ore')
        .addData('radius',9)
        .addData('rock','minecraft:sandstone')
        .EUt(7680)
        .duration(800);

    event.replaceInput({id:'gtceu:shaped/hv_diode'},'gtceu:smd_diode','#gtceu:diodes')

    event.recipes.gtceu.twisted_fusion('ascr')
        .inputFluids(Fluid.of('gtceu:arsenic',144),Fluid.of('gtceu:chromium',144))
        .outputFluids(Fluid.of('gtceu:caesium',144),Fluid.of('gtceu:argon',1000))
        .EUt(30720)
        .duration(16);
    event.recipes.gtceu.twisted_fusion('fen')
        .inputFluids(Fluid.of('gtceu:iron',144),Fluid.of('gtceu:nitrogen',1000))
        .outputFluids(Fluid.of('gtceu:neon',1000),Fluid.of('gtceu:fluorine',1000))
        .EUt(30720)
        .duration(16);
    event.recipes.gtceu.twisted_fusion('kcr')
        .inputFluids(Fluid.of('gtceu:potassium',144),Fluid.of('gtceu:chromium',144))
        .outputFluids(Fluid.of('gtceu:carbon',144),Fluid.of('gtceu:krypton',1000))
        .EUt(30720)
        .duration(16);
    event.recipes.gtceu.twisted_fusion('isn')
        .inputFluids(Fluid.of('gtceu:iodine',144),Fluid.of('gtceu:tin',144))
        .outputFluids(Fluid.of('gtceu:sulfur',144),Fluid.of('gtceu:indium',144))
        .EUt(30720)
        .duration(16);
    event.recipes.gtceu.twisted_fusion('icr')
        .inputFluids(Fluid.of('gtceu:iodine',144),Fluid.of('gtceu:chromium',144))
        .outputFluids(Fluid.of('gtceu:carbon',144),Fluid.of('gtceu:iridium',144))
        .EUt(30720)
        .duration(16);
    event.recipes.gtceu.twisted_fusion('kfe')
        .inputFluids(Fluid.of('gtceu:potassium',144),Fluid.of('gtceu:iron',144))
        .outputFluids(Fluid.of('gtceu:fluorine',1000),Fluid.of('gtceu:trinium',144))
        .EUt(122880)
        .duration(16);
    event.recipes.gtceu.twisted_fusion('dkr')
        .inputFluids(Fluid.of('gtceu:deuterium',1000),Fluid.of('gtceu:krypton',1000))
        .outputFluids(Fluid.of('gtceu:potassium',144),Fluid.of('gtceu:duranium',144))
        .EUt(122880)
        .duration(16);
    event.recipes.gtceu.twisted_fusion('tdr')
        .inputFluids(Fluid.of('gtceu:tritium',1000),Fluid.of('gtceu:duranium',144))
        .outputFluids(Fluid.of('gtceu:deuterium',1000),Fluid.of('gtceu:tritanium',144))
        .EUt(491520)
        .duration(16);
    event.recipes.gtceu.twisted_fusion('npt')
        .inputFluids(Fluid.of('gtceu:nitrogen',1000),Fluid.of('gtceu:platinum',144))
        .outputFluids(Fluid.of('gtceu:neutronium',144),Fluid.of('gtceu:phosphorus',144))
        .EUt(491520)
        .duration(16);
    event.recipes.gtceu.meadow('meadow')
        .circuit(0)
        .inputStress(1024)
        .duration(100)
        .addData('inputStress',1024)
    event.recipes.gtceu.mixer('dibismuthhydroborat')
        .itemInputs(['2x gtceu:bismuth_dust','gtceu:boron_dust'])
        .inputFluids(Fluid.of('gtceu:hydrogen',1000))
        .itemOutputs('4x gtceu:dibismuthhydroborat_dust')
        .EUt(120)
        .duration(590)
    event.recipes.gtceu.mixer('bismuth_tellurite')
        .itemInputs(['2x gtceu:bismuth_dust','3x gtceu:tellurium_dust'])
        .itemOutputs('5x gtceu:bismuth_tellurite_dust')
        .EUt(80)
        .duration(162)
    event.recipes.gtceu.mixer('circuit_compound')
        .itemInputs(['3x gtceu:dibismuthhydroborat_dust','2x gtceu:bismuth_tellurite_dust','gtceu:indium_gallium_phosphide_dust'])
        .itemOutputs('6x gtceu:circuit_compound_dust')
        .duration(982)
        .EUt(15)
    event.recipes.gtceu.forming_press('pressed_circuit')
        .itemInputs(['4x gtceu:circuit_compound_dust','gtceu:magneto_resonatic_dust'])
        .itemOutputs('kubejs:raw_imprinted_resonatic_circuit_board')
        .duration(300)
        .EUt(480)
    event.recipes.gtceu.electric_blast_furnace('titanium')
        .itemInputs(['10x gtceu:ilmenite_dust','2x gtceu:carbon_dust'])
        .itemOutputs(['2x gtceu:wrought_iron_ingot','2x gtceu:rutile_dust'])
        .outputFluids(Fluid.of('gtceu:carbon_monoxide',2000))
        .duration(800)
        .EUt(480)
        .blastFurnaceTemp(1700)
    event.remove({id:'gtceu:electric_blast_furnace/rutile_from_ilmenite'})
    event.shaped(
      'gtceu:hellforge',
      [
          'ICI',
          'SHS',
          'IFI'
      ], {
      C: '#gtceu:circuits/luv',
      H: 'gtceu:iv_machine_hull',
      I: 'bloodmagic:ingot_hellforged',
      S: 'bloodmagic:etherealslate',
      F: 'bloodmagic:soulforge'
  })

  event.recipes.gtceu.hellforge('hellpart')
      .itemInputs('bloodmagic:hellforgedparts','minecraft:diamond','minecraft:netherite_scrap','bloodmagic:defaultcrystal')
      .itemOutputs('2x bloodmagic:hellforgedparts')
      .EUt(4000)
      .duration(200)
      .addDataNumber('minimumDrain',1000)
      .addDataNumber('drain',200);

      // event.forEachRecipe({type:'bloodmagic:soulforge'},(/**@type {$RecipeJS}*/recipe)=>{
      //   console.info(recipe.json.get('drain'))
      // })
  var counter=1;
  event.forEachRecipe({type:'bloodmagic:soulforge'},(/**@type {$RecipeJS}*/recipe)=>{
      let input0 = Item.of(recipe.json.get('input0'));
      let input1 = Item.of(recipe.json.get('input1'));
      let input2 = Item.of(recipe.json.get('input2'));
      let input3 = Item.of(recipe.json.get('input3'));
      let output = Item.of(recipe.json.get('output'));
      let inputs = [input0,input1,input2,input3]
      var drain=recipe.json.get('drain');
      var minimumDrain=recipe.json.get('minimumDrain');
      
      var builder=event.recipes.gtceu.hellforge(counter+'_hellforge');
      inputs.forEach(input=>{
          if(input!==null) builder.itemInputs(input);
      })
      builder.itemOutputs(output)
      .EUt(minimumDrain===0?30:minimumDrain*20)
      .duration(200)
      .addDataNumber('minimumDrain',minimumDrain)
      .addDataNumber('drain',drain);
      counter++;
  })

  function dwos_crafting_recipe(event,voltage) {
    event.shaped(
        `gtceu:${voltage}_digital_well_of_suffer`,
        [
            'PCP',
            'SHS',
            'PCP'
        ], {
        P: `gtceu:${voltage}_electric_pump`,
        C: `#gtceu:circuits/${voltage}`,
        H: `gtceu:${voltage}_machine_hull`,
        ShaderTexture: 'bloodmagic:sacrificerune'
    })
  }
  ['lv','mv','hv','ev','iv','luv','zpm','uv'].forEach(voltage=>dwos_crafting_recipe(event,voltage));
  // function addModel(event, entity, voltage, outputValue){
  //   event.recipes.gtceu.digital_well_of_suffer('dwos_'+entity)
  //       .outputFluids(Fluid.of('bloodmagic:life_essence_fluid',outputValue))
  //       .notConsumable(Item.of('gtceu:data_stick', `{mobs:${entity}}`).strongNBT())
  //       .EUt(voltage)
  //       .duration(20);
  // }
  function addModel(event, entity, voltage, outputValue){
    event.recipes.gtceu.digital_well_of_suffer('dwos_'+entity)
        .outputFluids(Fluid.of('bloodmagic:life_essence_fluid',outputValue))
        .notConsumable(Item.of('hostilenetworks:data_model', {data_model:{id:'hostilenetworks:'+entity}}).weakNBT())
        .EUt(voltage)
        .duration(20);
}

  let low = ['chicken','cod','cow','glow_squid','mooshroom','pig','rabbit','polar_bear','squid','snow_golem','sheep']
  let mid = ['ars_nouveau/wilden_mobs','blaze','creeper','drowned','ghast','guardian','hoglin','magma_cube','phantom','skeleton','slime','twilightforste/death_tome','twilightforste/stable_ice_core',
    'spider','twilightforest/death_tomb','twilightforest/deer','twilightforest/raven','twilight_forest/stable_ice_core','witch','zombie','zombified_piglin']
  let high = ['elder_guardian','enderman','evoker','iron_golem','shulker','twilightforest/giant','twilightforest/kobold','twilightforest/goblin',
    'wither_skeleton','twilightforest/winter_wolf','twilightforest/redcap','twilightforest/helmet_crab','twilightforest/troll',
    'twilightforest/naga','twilightforest/minotaur','twilightforest/fire_beetle','twilightforest/carminite_golem','twilightforest/towerwood_borer',
    'vindicator','twilightforest/lich','twilightforest/yeti','twilightforest/wraith','twilightforest/skeleton_druid']
  let supers = ['artifacts/mimic','wither','ender_dragon','warden','twilightforest/snow_queen','twilightforest/hydra','twilightforest/minoshroom','twilightforest/alpha_yeti']
  let boss =['twilightforest/ur_ghast']
    low.forEach(entity=>
      addModel(event, entity, 30, 100)
    );
    
    mid.forEach(entity=>
      addModel(event, entity, 120, 400)
    );
    
    high.forEach(entity=>
        addModel(event, entity, 480, 1600)
    );

    supers.forEach(entity=>
        addModel(event, entity, 1920, 6400)
    );

    boss.forEach(entity=>
        addModel(event, entity, 7680, 25600)
    );

  event.recipes.gtceu.assembly_line('eternalwos')
  .itemInputs(
      'bloodmagic:largebloodstonebrick',
      '2x gtceu:luv_electric_pump',
      '4x bloodmagic:rawdemoncrystal',
      '4x bloodmagic:corrosivedemoncrystal',
      '4x bloodmagic:destructivedemoncrystal',
      '4x bloodmagic:steadfastdemoncrystal',
      '4x bloodmagic:vengefuldemoncrystal',
      '64x hostilenetworks:prediction_matrix'
  )
  .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',1024000))
  .itemOutputs('gtceu:eternal_well_of_suffer')
  .duration(4800)
  .EUt(32000)
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_digital_well_of_suffer')).EUt(120).duration(9600)) // (1)

  event.recipes.gtceu.dehydrator('ammonium_chloride')
    .inputFluids(Fluid.of('gtceu:ammonium_chloride',144))
    .itemOutputs('gtceu:ammonium_chloride_dust')
    .EUt(30)
    .duration(40)
  event.recipes.gtceu.forming_press('blank_data_model')
    .itemInputs(['2x gtceu:ender_pearl_plate', '2x gtceu:stainless_steel_plate', '2x gtceu:fine_platinum_wire', 'minecraft:smooth_stone'])
    .itemOutputs('hostilenetworks:blank_data_model')
    .duration(200)
    .EUt(480)
  event.recipes.gtceu.assembler('deep_learner')
    .itemInputs(['gtceu:computer_monitor_cover', '2x gtceu:double_black_steel_plate', '2x gtceu:black_steel_plate', 'gtceu:black_steel_gear', '#gtceu:circuits/ev'])
    .itemOutputs('hostilenetworks:deep_learner')
    .duration(200)
    .EUt(480)
  
  event.recipes.gtceu.boom_of_create("boom_of_create1")
    .itemInputs(["gtceu:industrial_tnt"])
    .inputFluids(Fluid.of("gtceu:pcb_coolant", 50))
    .outputStress(16777216)
    .duration(160)

  event.recipes.gtceu.boom_of_create("boom_of_create2")
    .itemInputs(["4x minecraft:tnt"])
    .inputFluids(Fluid.of("gtceu:pcb_coolant", 50))
    .outputStress(16777216)
    .duration(160)

  event.recipes.gtceu.boom_of_create("boom_of_create3")
    .itemInputs(["2x gtceu:dynamite"])
    .inputFluids(Fluid.of("gtceu:pcb_coolant", 50))
    .outputStress(16777216)
    .duration(160)

  event.recipes.gtceu.boom_of_create("boom_of_create4")
    .itemInputs(["8x gtceu:powderbarrel"])
    .inputFluids(Fluid.of("gtceu:pcb_coolant", 50))
    .outputStress(16777216)
    .duration(160)
  event.recipes.gtceu.assembler('fuel_refining_factory_mk1')
    .itemInputs(['8x gtceu:large_chemical_reactor', '4x gtceu:distillation_tower', '4x gtceu:cracker', '16x gtceu:nichrome_coil_block', '32x gtceu:dense_steel_plate', '32x gtceu:black_steel_frame', '16x #gtceu:circuits/iv'])
    .itemOutputs('gtceu:fuel_refining_factory_mk1')
    .duration(24000)
    .EUt(480)
  
})

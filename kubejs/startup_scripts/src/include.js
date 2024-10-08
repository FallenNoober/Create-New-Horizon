// priority: 100
const $LDLib = Java.loadClass("com.lowdragmc.lowdraglib.LDLib")
const $GTRecipeBuilder = Java.loadClass("com.gregtechceu.gtceu.data.recipe.builder.GTRecipeBuilder")
const $CycleItemStackHandler = Java.loadClass("com.lowdragmc.lowdraglib.utils.CycleItemStackHandler")
const $CoilBlock = Java.loadClass("com.gregtechceu.gtceu.common.block.CoilBlock")
const $IO = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.IO")
const $RotorHolderMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.RotorHolderPartMachine")
const $MachineRender = Java.loadClass("com.gregtechceu.gtceu.client.renderer.machine.RotorHolderMachineRenderer")
const $EnergyHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.EnergyHatchPartMachine")
const $MetaMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.MetaMachine")
const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe")
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")
const $IngotProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty")
const $FluidBuilder = Java.loadClass("com.gregtechceu.gtceu.api.fluids.FluidBuilder")
const $DustProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty")
const $FluidProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty")
const $WireProperties = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")
const $LocalizationUtils = Java.loadClass("com.lowdragmc.lowdraglib.utils.LocalizationUtils")
const $FluidStack = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidStack")
const $FluidHatchPart = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.FluidHatchPartMachine")
const $CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
const $FluidRecipeCapability = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.FluidRecipeCapability")
const $IMultiPart = Java.loadClass("com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiPart")
const $MultiblockControllerMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.MultiblockControllerMachine")
const $IRecipeHandlerTrait = Java.loadClass("com.gregtechceu.gtceu.api.machine.trait.IRecipeHandlerTrait")
const $FormattingUtil = Java.loadClass("com.gregtechceu.gtceu.utils.FormattingUtil")
const $ICoilType = Java.loadClass("com.gregtechceu.gtceu.api.block.ICoilType")
const $I18n = $LDLib.isClient() ? Java.loadClass("net.minecraft.client.resources.language.I18n") : null
const $WorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine")
const $ContentModifier = Java.loadClass("com.gregtechceu.gtceu.api.recipe.content.ContentModifier")
const $LargeTurbineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine")
const $LargeMinerMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.LargeMinerMachine")
const $ManaLargeTurbineMachine = Java.loadClass("io.github.cpearl0.ctnhcore.common.machine.multiblock.ManaLargeTurbineMachine")
const $RecipeHelper = Java.loadClass("com.gregtechceu.gtceu.api.recipe.RecipeHelper")
const $GTUtil = Java.loadClass("com.gregtechceu.gtceu.utils.GTUtil")
const $SteamParallelMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine")
const $ItemRecipeCapability = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability")
const $StressRecipeCapability = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.StressRecipeCapability")
const $IKineticMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.kinetic.IKineticMachine")
const $IRotorHolderMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.feature.multiblock.IRotorHolderMachine")
const $SimpleTieredMachine=Java.loadClass("com.gregtechceu.gtceu.api.machine.SimpleTieredMachine")
const $GTRecipeCapabilities=Java.loadClass('com.gregtechceu.gtceu.common.data.GTRecipeCapabilities')
const $WorkableTieredMachine=Java.loadClass('com.gregtechceu.gtceu.api.machine.WorkableTieredMachine')
const $EURecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.EURecipeCapability')
const $Temperature = Java.loadClass("com.momosoftworks.coldsweat.api.util.Temperature")
const $WindmillBearingBlockEntity = Java.loadClass("com.simibubi.create.content.contraptions.bearing.WindmillBearingBlockEntity")
const $BloodMagicAPI = Java.loadClass("wayoftime.bloodmagic.impl.BloodMagicAPI")

const $FoodEatenEventJS = Java.loadClass("dev.latvian.mods.kubejs.item.FoodEatenEventJS")
const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")
const $Registry = Java.loadClass("net.minecraft.core.Registry")
const $ServerLevel = Java.loadClass("net.minecraft.server.level.ServerLevel")
const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")
const $EyeOfEnder = Java.loadClass("net.minecraft.world.entity.projectile.EyeOfEnder")
const $ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack")
const $Entity = Java.loadClass("net.minecraft.world.entity.Entity")

const $ArrayList = Java.loadClass("java.util.ArrayList")
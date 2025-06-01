export default {
  VERSION: "1.1.0",
  ACTOR_CLASS_TYPE: "npc",
  ITEM_CLASS_LOOT_TYPE: "trapping",
  ITEM_CLASS_WEAPON_TYPE: "weapon",
  ITEM_CLASS_EQUIPMENT_TYPE: "trapping",
  ITEM_QUANTITY_ATTRIBUTE: "system.quantity.value",
  ITEM_PRICE_ATTRIBUTE: "system.price",
  ITEM_SIMILARITIES: ["name", "type"],

  ITEM_FILTERS: [
    {
      path: "type",
      filters: "career,container,critical,disease,injury,mutation,prayer,psychology,talent,skill,spell,trait,extendedTest,vehicleMod,cargo,chanty,astralsign,template,vehicleTest,vehicleRole",
    },
  ],

  ITEM_COST_TRANSFORMER: item => {
    let overallCost = 0;
    const prices = foundry.utils.getProperty(item, "system.price");
    overallCost += (Number(prices?.gc) || 0) * 240;
    overallCost += (Number(prices?.ss) || 0) * 12;
    overallCost += (Number(prices?.bp) || 0) * 1;

    return overallCost;
  },

  PILE_DEFAULTS: {
    merchantColumns: [
      {
        label: "Availability",
        path: "system.availability.value",
        formatting: "",
        buying: true,
        selling: false,
        mapping: {
          common: "WFRP4E.Availability.Common",
          scarce: "WFRP4E.Availability.Scarce",
          rare: "WFRP4E.Availability.Rare",
          exotic: "WFRP4E.Availability.Exotic",
          special: "Special",
        },
      },
      {
        label: "SHEET.Encumbrance",
        path: "system.encumbrance.value",
        formatting: "",
        buying: true,
        selling: true,
      },
    ],
  },

  CURRENCIES: [
    {
      type: "item",
      name: "NAME.GC",
      img: "modules/wfrp4e-core/icons/currency/goldcrown.png",
      abbreviation: "MARKET.Abbrev.GC",
      data: {
        item: {
          name: "NAME.GC",
          type: "money",
          img: "modules/wfrp4e-core/icons/currency/goldcrown.png",
          system: {
            quantity: {type: "Number", label: "Quantity", value: 1},
            encumbrance: {type: "Number", label: "SHEET.Encumbrance", value: 0.005},
            coinValue: {label: "ITEM.PenniesValue", type: "Number", value: 240},
            source: {type: "String", label: "SHEET.Source"},
          },
        },
      },
      primary: false,
      exchangeRate: 240,
    },
    {
      type: "item",
      name: "NAME.SS",
      img: "modules/wfrp4e-core/icons/currency/silvershilling.png",
      abbreviation: "MARKET.Abbrev.SS",
      data: {
        item: {
          name: "NAME.SS",
          type: "money",
          img: "modules/wfrp4e-core/icons/currency/silvershilling.png",
          system: {
            quantity: {type: "Number", label: "Quantity", value: 1},
            encumbrance: {type: "Number", label: "SHEET.Encumbrance", value: 0.005},
            coinValue: {label: "ITEM.PenniesValue", type: "Number", value: 12},
            source: {type: "String", label: "SHEET.Source"},
          },
        },
      },
      primary: false,
      exchangeRate: 12,
    },
    {
      type: "item",
      name: "NAME.BP",
      img: "modules/wfrp4e-core/icons/currency/brasspenny.png",
      abbreviation: "MARKET.Abbrev.BP",
      data: {
        item: {
          name: "NAME.BP",
          type: "money",
          img: "modules/wfrp4e-core/icons/currency/brasspenny.png",
          system: {
            quantity: {type: "Number", label: "Quantity", value: 1},
            encumbrance: {type: "Number", label: "SHEET.Encumbrance", value: 0.005},
            coinValue: {label: "ITEM.PenniesValue", type: "Number", value: 1},
            source: {type: "String", label: "SHEET.Source"},
          },
        },
      },
      primary: true,
      exchangeRate: 1,
    },
  ],
};

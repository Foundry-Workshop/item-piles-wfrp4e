import * as versions from "versions/_module";

export function itemPilesReady() {
  Hooks.once("item-piles-ready", async () => {
    for (const ver in versions) {
      const config = versions[ver];

      for (const currency of config.CURRENCIES) {
        currency.name = game.i18n.localize(currency.name);
        currency.abbreviation = "{#}" + game.i18n.localize(currency.abbreviation);
        currency.data.item.name = game.i18n.localize(currency.data.item.name);
      }

      await game.itempiles.API.addSystemIntegration(config, config.VERSION);
    }
  });
}

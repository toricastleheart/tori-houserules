Hooks.on("ready", () => {
  if (game.modules.get("pf2e-brewrata")?.active) {
    const registry = game.brewrata.register("tori-houserules");
    // errata 1
    registry.errata("Compendium.pf2e.classes.Item.XwfcJuskrhI9GIjX", { uuid: "Compendium.tori-houserules.tori-module.Item.P0kSf07OKF392gHT", description: "alchemist" });
    // errata 2
    registry.errata("Compendium.pf2e.classes.Item.9KiqZVG9r5g8mC4V", { uuid: "Compendium.tori-houserules.tori-module.Item.DHeI0g43pQjdSrRl", description: "animist" });
    // errata 3
    registry.errata("Compendium.pf2e.classes.Item.YDRiP7uVvr9WRhOI", { uuid: "Compendium.tori-houserules.tori-module.Item.qd4eosnmx5GwbXH7", description: "barbarian" });
    // errata 4
    registry.errata("Compendium.pf2e.classes.Item.3gweRQ5gn7szIWAv", { uuid: "Compendium.tori-houserules.tori-module.Item.ueYi8kwoumTuRM9f", description: "bard" });
    // errata 5
    registry.errata("Compendium.pf2e.classes.Item.x8iwnpdLbfcoZkHA", { uuid: "Compendium.tori-houserules.tori-module.Item.Dc6nLQxIeKCybvvO", description: "champion" });
    // errata 6
    registry.errata("Compendium.pf2e.classes.Item.EizrWvUPMS67Pahd", { uuid: "Compendium.tori-houserules.tori-module.Item.Z0j5tdMQVbIFJCxw", description: "cleric" });
    // errata 7
    registry.errata("Compendium.pf2e.classes.Item.Oyee5Ds9uwYLEkD0", { uuid: "Compendium.tori-houserules.tori-module.Item.BcXjVQRkCMIwOiDu", description: "commander" });
    // errata 8
    registry.errata("Compendium.pf2e.classes.Item.7s57JDCaiYYCAdFx", { uuid: "Compendium.tori-houserules.tori-module.Item.Z9C6X995NlzG82l1", description: "druid" });
    // errata 9
    registry.errata("Compendium.pf2e.classes.Item.vZ0jL7pwthV2pm4A", { uuid: "Compendium.tori-houserules.tori-module.Item.200X5cyT1fOft34K", description: "exemplar" });
    // errata 10
    registry.errata("Compendium.pf2e.classes.Item.8zn3cD6GSmoo1LW4", { uuid: "Compendium.tori-houserules.tori-module.Item.6bFzZ6lDoZ53ub2a", description: "fighter" });
    // errata 11
    registry.errata("Compendium.pf2e.classes.Item.1L7geK3aoosye3Xj", { uuid: "Compendium.tori-houserules.tori-module.Item.u6TgnRDS1qwUasDZ", description: "guardian" });
    // errata 12
    registry.errata("Compendium.pf2e.classes.Item.Z9li154CPNmun29Q", { uuid: "Compendium.tori-houserules.tori-module.Item.No7bVTBGOdvbwaeL", description: "gunslinger" });
    // errata 13
    registry.errata("Compendium.pf2e.classes.Item.30qVs46dVNflgQNx", { uuid: "Compendium.tori-houserules.tori-module.Item.buuv5ujqnkRc0NY6", description: "inventor" });
    // errata 14
    registry.errata("Compendium.pf2e.classes.Item.4wrSCyX6akmyo7Wj", { uuid: "Compendium.tori-houserules.tori-module.Item.XxXtOr7FxQOt3nYX", description: "investigator" });
    // errata 15
    registry.errata("Compendium.pf2e.classes.Item.RggQN3bX5SEcsffR", { uuid: "Compendium.tori-houserules.tori-module.Item.G8LYuIzKCEnO47GG", description: "kineticist" });
    // errata 16
    registry.errata("Compendium.pf2e.classes.Item.YPxpk9JbMnKjbNLc", { uuid: "Compendium.tori-houserules.tori-module.Item.Z6yzJAD6QfCoTByx", description: "magus" });
    // errata 17
    registry.errata("Compendium.pf2e.classes.Item.HQBA9Yx2s8ycvz3C", { uuid: "Compendium.tori-houserules.tori-module.Item.XZgoRMdcyIpnxIXt", description: "monk" });
    // errata 18
    registry.errata("Compendium.pf2e.classes.Item.pWHx4SXcft9O2udP", { uuid: "Compendium.tori-houserules.tori-module.Item.NQy3zVscPJ5m3RFW", description: "oracle" });
    // errata 19
    registry.errata("Compendium.pf2e.classes.Item.Inq4gH3P5PYjSQbD", { uuid: "Compendium.tori-houserules.tori-module.Item.Vz1ntofBXVI6zOSW", description: "psychic" });
    // errata 20
    registry.errata("Compendium.pf2e.classes.Item.Yix76sfxrIlltSTJ", { uuid: "Compendium.tori-houserules.tori-module.Item.shnQScin2GVcsRBj", description: "ranger" });
    // errata 21
    registry.errata("Compendium.pf2e.classes.Item.LO9STvskJemPkiAI", { uuid: "Compendium.tori-houserules.tori-module.Item.GQzF1AiKNA3A1J27", description: "rogue" });
    // errata 22
    registry.errata("Compendium.pf2e.classes.Item.15Yc1r6s9CEhSTMe", { uuid: "Compendium.tori-houserules.tori-module.Item.II0qkLn3rEWBhqK1", description: "sorcerer" });
    // errata 23
    registry.errata("Compendium.pf2e.classes.Item.YtOm245r8GFSFYeD", { uuid: "Compendium.tori-houserules.tori-module.Item.UM0S2NuTz0HtRRuJ", description: "summoner" });
    // errata 24
    registry.errata("Compendium.pf2e.classes.Item.uJ5aCzlw34GGdWjp", { uuid: "Compendium.tori-houserules.tori-module.Item.055yHsoaWQw0kma8", description: "swashbuckler" });
    // errata 25
    registry.errata("Compendium.pf2e.classes.Item.Y5GsHqzCzJlKka6x", { uuid: "Compendium.tori-houserules.tori-module.Item.x0SWlWfC2Z2wEVUw", description: "thaumaturge" });
    // errata 26
    registry.errata("Compendium.pf2e.classes.Item.bYDXk9HUMKOuym9h", { uuid: "Compendium.tori-houserules.tori-module.Item.AI848lUtqqrwbLjc", description: "witch" });
    // errata 27
    registry.errata("Compendium.pf2e.classes.Item.RwjIZzIxzPpUglnK", { uuid: "Compendium.tori-houserules.tori-module.Item.1kQ6PTRRVhr9OwN2", description: "wizard" });
    // errata 28
    registry.errata("Compendium.pf2e.classfeatures.Item.xmZ7oeTDcQVXegUP", { uuid: "Compendium.tori-houserules.tori-module.Item.xmZ7oeTDcQVXegUP", description: "agile mind" });
    // errata 29
    registry.errata("Compendium.pf2e.classfeatures.Item.O04RZa20X6fcbLAy", { uuid: "Compendium.tori-houserules.tori-module.Item.O04RZa20X6fcbLAy", description: "anvils hardness" });
    // errata 30
    registry.errata("Compendium.pf2e.classfeatures.Item.gdSmSTaGDxf4g2d8", { uuid: "Compendium.tori-houserules.tori-module.Item.gdSmSTaGDxf4g2d8", description: "battle hardened" });
    // errata 31
    registry.errata("Compendium.pf2e.classfeatures.Item.KQ87ZZVAT4q00Dyr", { uuid: "Compendium.tori-houserules.tori-module.Item.KQ87ZZVAT4q00Dyr", description: "battlefield intuition" });
    // errata 32
    registry.errata("Compendium.pf2e.classfeatures.Item.Uz2Izzi5A8N6Dxjn", { uuid: "Compendium.tori-houserules.tori-module.Item.Uz2Izzi5A8N6Dxjn", description: "blast dodger" });
    // errata 33
    registry.errata("Compendium.pf2e.classfeatures.Item.GJKJafDGuX4BeAeN", { uuid: "Compendium.tori-houserules.tori-module.Item.GJKJafDGuX4BeAeN", description: "bravery" });
    // errata 34
    registry.errata("Compendium.pf2e.classfeatures.Item.PjuFdRe1moLd1VhP", { uuid: "Compendium.tori-houserules.tori-module.Item.PjuFdRe1moLd1VhP", description: "chemical hardiness" });
    // errata 35
    registry.errata("Compendium.pf2e.classfeatures.Item.VSbNezLoWtWRDok7", { uuid: "Compendium.tori-houserules.tori-module.Item.VSbNezLoWtWRDok7", description: "churning mind" });
    // errata 36
    registry.errata("Compendium.pf2e.classfeatures.Item.fbMy0ltflHJjxFPD", { uuid: "Compendium.tori-houserules.tori-module.Item.fbMy0ltflHJjxFPD", description: "commanding will" });
    // errata 37
    registry.errata("Compendium.pf2e.classfeatures.Item.HBTLwREPKK3H4xVD", { uuid: "Compendium.tori-houserules.tori-module.Item.HBTLwREPKK3H4xVD", description: "confident evasion" });
    // errata 38
    registry.errata("Compendium.pf2e.classfeatures.Item.cF7GqQQvQbnUVf5o", { uuid: "Compendium.tori-houserules.tori-module.Item.cF7GqQQvQbnUVf5o", description: "disciplined mind" });
    // errata 39
    registry.errata("Compendium.pf2e.classfeatures.Item.xygfZopqXBJ6dKBA", { uuid: "Compendium.tori-houserules.tori-module.Item.xygfZopqXBJ6dKBA", description: "divine will" });
    // errata 40
    registry.errata("Compendium.pf2e.classfeatures.Item.uuHRYE8Oljk1ORxJ", { uuid: "Compendium.tori-houserules.tori-module.Item.uuHRYE8Oljk1ORxJ", description: "dogged will" });
    // errata 41
    registry.errata("Compendium.pf2e.classfeatures.Item.puHtHGCjsJLWCP1u", { uuid: "Compendium.tori-houserules.tori-module.Item.puHtHGCjsJLWCP1u", description: "earned resilience" });
    // errata 42
    registry.errata("Compendium.pf2e.classfeatures.Item.oa3TJpPnvL98EUHh", { uuid: "Compendium.tori-houserules.tori-module.Item.oa3TJpPnvL98EUHh", description: "evasive reflexes" });
    // errata 43
    registry.errata("Compendium.pf2e.classfeatures.Item.ZqNKqBJWagU1fg4A", { uuid: "Compendium.tori-houserules.tori-module.Item.ZqNKqBJWagU1fg4A", description: "explosion dodger" });
    // errata 44
    registry.errata("Compendium.pf2e.feats-srd.Item.i4yRvVwvXbGZDsD1", { uuid: "Compendium.tori-houserules.tori-module.Item.i4yRvVwvXbGZDsD1", description: "wow i fucked up, uhhh,  this is canny acumen, it wasnt supposed to be here but i guess i misplaced the save upgrades, whoops!" });
    // errata 45
    registry.errata("Compendium.clerics-remaster.clerics-features.Item.3vKoRbcYaHuLHG5K", { uuid: "Compendium.tori-houserules.tori-module.Item.3vKoRbcYaHuLHG5K", description: "fifth doctrine armorclad+" });
    // errata 46
    registry.errata("Compendium.pf2e.classfeatures.Item.kmimy4VOaoEOgOiQ", { uuid: "Compendium.tori-houserules.tori-module.Item.kmimy4VOaoEOgOiQ", description: "fifth doctrine warpriest" });
    // errata 47
    registry.errata("Compendium.pf2e.classfeatures.Item.CdDcUXv9J3aEo9HR", { uuid: "Compendium.tori-houserules.tori-module.Item.CdDcUXv9J3aEo9HR", description: "guardian mastery" });
    // errata 48
    registry.errata("Compendium.pf2e.classfeatures.Item.BZnqKnqKVImjSIFE", { uuid: "Compendium.tori-houserules.tori-module.Item.BZnqKnqKVImjSIFE", description: "indomitable will" });
    // errata 49
    registry.errata("Compendium.pf2e.classfeatures.Item.OMZs5y16jZRW9KQK", { uuid: "Compendium.tori-houserules.tori-module.Item.OMZs5y16jZRW9KQK", description: "juggernaut" });
    // errata 50
    registry.errata("Compendium.pf2e.classfeatures.Item.eTHq1Cwf1pOvsx2R", { uuid: "Compendium.tori-houserules.tori-module.Item.eTHq1Cwf1pOvsx2R", description: "kinetic durability" });
    // errata 51
    registry.errata("Compendium.pf2e.classfeatures.Item.9BUk7zy1aE092XCS", { uuid: "Compendium.tori-houserules.tori-module.Item.9BUk7zy1aE092XCS", description: "kinetic quickness" });
    // errata 52
    registry.errata("Compendium.pf2e.classfeatures.Item.i7NKYQNGu5AaR1qb", { uuid: "Compendium.tori-houserules.tori-module.Item.i7NKYQNGu5AaR1qb", description: "lead constitution" });
    // errata 53
    registry.errata("Compendium.pf2e.classfeatures.Item.7D8duG4ARFxLLm9F", { uuid: "Compendium.tori-houserules.tori-module.Item.7D8duG4ARFxLLm9F", description: "majestic will" });
    // errata 54
    registry.errata("Compendium.pf2e.classfeatures.Item.8LhwKWBxF2lgxEG5", { uuid: "Compendium.tori-houserules.tori-module.Item.8LhwKWBxF2lgxEG5", description: "master of mind and spirit" });
    // errata 55
    registry.errata("Compendium.pf2e.classfeatures.Item.A8rAsfXHpO8lWe2r", { uuid: "Compendium.tori-houserules.tori-module.Item.A8rAsfXHpO8lWe2r", description: "mortality reforged" });
    // errata 56
    registry.errata("Compendium.pf2e.classfeatures.Item.cCTqkTHYnVCJKg4S", { uuid: "Compendium.tori-houserules.tori-module.Item.cCTqkTHYnVCJKg4S", description: "mysterious resolve" });
    // errata 57
    registry.errata("Compendium.pf2e.classfeatures.Item.7dMDxvzGKbqoEAdX", { uuid: "Compendium.tori-houserules.tori-module.Item.7dMDxvzGKbqoEAdX", description: "natural reflexes" });
    // errata 58
    registry.errata("Compendium.pf2e.classfeatures.Item.1K6m6AVmn3r8XZ9d", { uuid: "Compendium.tori-houserules.tori-module.Item.1K6m6AVmn3r8XZ9d", description: "path to perfection" });
    // errata 59
    registry.errata("Compendium.pf2e.classfeatures.Item.nPwYSuMLkJWMB4CH", { uuid: "Compendium.tori-houserules.tori-module.Item.nPwYSuMLkJWMB4CH", description: "performers heart" });
    // errata 60
    registry.errata("Compendium.pf2e.classfeatures.Item.j5TZw3xoIo6Lz0Re", { uuid: "Compendium.tori-houserules.tori-module.Item.j5TZw3xoIo6Lz0Re", description: "prodigious will" });
    // errata 61
    registry.errata("Compendium.pf2e.classfeatures.Item.5cjr4uwygBp6vihP", { uuid: "Compendium.tori-houserules.tori-module.Item.5cjr4uwygBp6vihP", description: "reinforced ego" });
    // errata 62
    registry.errata("Compendium.pf2e.classfeatures.Item.0TjNGzs0FuD7JBf4", { uuid: "Compendium.tori-houserules.tori-module.Item.0TjNGzs0FuD7JBf4", description: "resolute faith" });
    // errata 63
    registry.errata("Compendium.pf2e.classfeatures.Item.JQAujUXjczVnYDEI", { uuid: "Compendium.tori-houserules.tori-module.Item.JQAujUXjczVnYDEI", description: "resolve" });
    // errata 64
    registry.errata("Compendium.pf2e.classfeatures.Item.fMHYzXEUMoWskKMF", { uuid: "Compendium.tori-houserules.tori-module.Item.fMHYzXEUMoWskKMF", description: "rogue resilience" });
    // errata 65
    registry.errata("Compendium.pf2e.classfeatures.Item.AkIJrmsX3kjHqQ0b", { uuid: "Compendium.tori-houserules.tori-module.Item.AkIJrmsX3kjHqQ0b", description: "sacred body" });
    // errata 66
    registry.errata("Compendium.pf2e.classfeatures.Item.uTBiXs4zWkmRG7qF", { uuid: "Compendium.tori-houserules.tori-module.Item.uTBiXs4zWkmRG7qF", description: "savvy reflexes" });
    // errata 67
    registry.errata("Compendium.pf2e.classfeatures.Item.y6qnbUc8y0815QNE", { uuid: "Compendium.tori-houserules.tori-module.Item.y6qnbUc8y0815QNE", description: "second path to perfection" });
    // errata 68
    registry.errata("Compendium.pf2e.classfeatures.Item.eZPfHVz14j42jCnS", { uuid: "Compendium.tori-houserules.tori-module.Item.eZPfHVz14j42jCnS", description: "shared resolve" });
    // errata 69
    registry.errata("Compendium.pf2e.classfeatures.Item.Wpdeh6EkcAKA60oH", { uuid: "Compendium.tori-houserules.tori-module.Item.Wpdeh6EkcAKA60oH", description: "stubborn" });
    // errata 70
    registry.errata("Compendium.pf2e.classfeatures.Item.2ImD2TB0RVic1VUc", { uuid: "Compendium.tori-houserules.tori-module.Item.2ImD2TB0RVic1VUc", description: "tempered reflexes" });
    // errata 71
    registry.errata("Compendium.pf2e.classfeatures.Item.q1Y12Pg2gQg2FJPR", { uuid: "Compendium.tori-houserules.tori-module.Item.q1Y12Pg2gQg2FJPR", description: "twin juggernauts" });
    // errata 72
    registry.errata("Compendium.pf2e.classfeatures.Item.ScUPQN2FDfr9shQj", { uuid: "Compendium.tori-houserules.tori-module.Item.ScUPQN2FDfr9shQj", description: "unassailable soul" });
    // errata 73
    registry.errata("Compendium.pf2e.classfeatures.Item.4nFnYNPMXIaI7KiY", { uuid: "Compendium.tori-houserules.tori-module.Item.4nFnYNPMXIaI7KiY", description: "unyielding reseolve" });
    // errata 74
    registry.errata("Compendium.pf2e.classfeatures.Item.Kf9lSN6pVS2Hy4KI", { uuid: "Compendium.tori-houserules.tori-module.Item.Kf9lSN6pVS2Hy4KII", description: "walls of will" });
    // errata 75
    registry.errata("Compendium.pf2e.classfeatures.Item.gc6OMDRxTpSfsVtk", { uuid: "Compendium.tori-houserules.tori-module.Item.gc6OMDRxTpSfsVtk", description: "warden's endurance" });
    // errata 76
    registry.errata("Compendium.pf2e.classfeatures.Item.yqaRnXFjRnFWsWvY", { uuid: "Compendium.tori-houserules.tori-module.Item.yqaRnXFjRnFWsWvY", description: "wild willpower" });
    // errata 77
    registry.errata("Compendium.pf2e.classfeatures.Item.FuVO8ksHI1B5ozVI", { uuid: "Compendium.tori-houserules.tori-module.Item.FuVO8ksHI1B5ozVI", description: "will of the pupil" });
    // errata 78
    registry.errata("Compendium.pf2e.classfeatures.Item.ZZzLMOUAtBVgV1DF", { uuid: "Compendium.tori-houserules.tori-module.Item.ZZzLMOUAtBVgV1DF", description: "Cloisterd Cleric (bump)" });
    // errata 79
    registry.errata("Compendium.pf2e.feats-srd.Item.nDjTJq7PEbvRktnb", { uuid: "Compendium.tori-houserules.tori-module.Item.nDjTJq7PEbvRktnb", description: "Advanced weapon training (fighter)" });
    // errata 80
    registry.errata("Compendium.ancestries-enhanced-part-3.Feats.Item.KdPOgCr9dGHt3QTQ", { uuid: "Compendium.tori-houserules.tori-module.Item.KdPOgCr9dGHt3QTQ", description: "Classical Understanding" });
    // errata 81
    registry.errata("Compendium.pf2e.other-effects.Item.EpvyTaklBQAOr1eT", { uuid: "Compendium.tori-houserules.tori-module.Item.EpvyTaklBQAOr1eT", description: "Effect:Disarm(bonus)" });
    // errata 82
    registry.errata("Compendium.pf2e.other-effects.Item.PuDS0DEq0CnaSIFV", { uuid: "Compendium.tori-houserules.tori-module.Item.PuDS0DEq0CnaSIFV", description: "Effect:Disarm(Success)" });
    // errata 83
    registry.errata("Compendium.pf2e.feats-srd.Item.49mBVNF4SK6iYdJm", { uuid: "Compendium.tori-houserules.tori-module.Item.49mBVNF4SK6iYdJm", description: "Unconventional Weaponry" });
    // errata 84
    registry.errata("Compendium.ancestries-enhanced-part-3.Feats.Item.yh5yFPe8VT6ZFwPG", { uuid: "Compendium.tori-houserules.tori-module.Item.yh5yFPe8VT6ZFwPG", description: "Plainly Talented Human" })
  }
});
Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class EPSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "base", default: 0x3ae62e, name: "Base"},
                {id: "full", default: 0xe6c42e, name: "Full" },
                { id: "fly", default: 0x033154, name: "Fly" }, 
                { id: "fly_full", default: 0x2cf5da, name: "FlyFull" }
            ]
        }

        getRanges(token) {

            let base = token.actor.system.additionalSystems.movementBase
            let full = 20
            let hBase = base / 2
            let hFull = full / 2
            let fBase = 8 //set flight to static "fast" values
            let fFull = 32

            //console.log("Loading terrain type...")

            //let terrainName = canvas.terrain.terrainFromPixels(token.x, token.y)[0]?.environment ?? "global"
            //console.log("Terrain type is", terrainName)

            //console.log("Terrain type is", terrainName)

            let Base = { range: base, color: "base" }
            let Full = { range: full, color: "full" }
            let half_Base = { range: hBase, color: "base" }
            let half_Full = { range: hFull, color: "full" }
            let flyBase = { range: fBase, color: "fly" }
            let flyFull = { range: fFull, color: "fly_full" }

			let ranges = [
                Base,
				Full
            ]

            if (token.actor.statuses.has("stun")) {
                ranges = [
                    half_Base,
                    half_Full
                ];
                return ranges;
            }
            if (token.actor.statuses.has("blind")) {
                ranges = [
                    Base
                ];
                return ranges;
            }
            if (token.actor.statuses.has("fly")) {
                token.elevation = 1;
                ranges = [
                    flyBase,
                    flyFull
                ];
                return ranges;
            }

            //conditions with no movement
            if (token.actor.statuses.has("restrain")) {
                ranges = [];
                return ranges;
            }
            if (token.actor.statuses.has("paralysis")) {
                ranges = [];
                return ranges;
            }
            if (token.actor.statuses.has("dead")) {
                ranges = [];
                return ranges;
            }
            if (token.actor.statuses.has("unconscious")) {
                ranges = [];
                return ranges;
            }
            if (token.actor.statuses.has("prone")) {
                ranges = [];
                return ranges;
            }
            if (token.actor.statuses.has("incapacitated")) {
                ranges = [];
                return ranges;
            }
            return ranges
        }
    }
    dragRuler.registerModule("ep-dragruler", EPSpeedProvider)
})

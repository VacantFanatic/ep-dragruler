Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class EPSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "base", default: 0xB45205, name: "Base"},
                {id: "full", default: 0x79F12F, name: "Full"},
            ]
        }

        getRanges(token) {
            let base = 4
            let slow_full = 12
			let normal_full = 20
			let fast_base = 8
			let fast_full = 32
			let vfast_full = 40

            //console.log("Loading terrain type...")

            //let terrainName = canvas.terrain.terrainFromPixels(token.x, token.y)[0]?.environment ?? "global"
            //console.log("Terrain type is", terrainName)

            //console.log("Terrain type is", terrainName)

            let sBase = {range: base, color: "base"}
            let sFull = {range: slow_full, color: "full"}
			let nBase = {range: base, color: "base"}
            let nFull = {range: normal_full, color: "full"}
			let fBase = {range: fast_base, color: "base"}
            let fFull = {range: fast_full, color: "full"}
			let vfBase = {range: fast_base, color: "base"}
            let vfFull = {range: vfast_full, color: "full"}
			

            let ranges = [
                nBase,
				nFull
            ]
            // If a token is "Dying", use the combat tracker to "Mark Defeated"
            //if (token?.overlayEffect === "icons/svg/skull.svg") {
            if (token.actor.hasCondition("dying")) {
                ranges = [
                    sBase,
					sFull
                ]
                return ranges
            }
            if (token.actor.hasCondition("walker")) {
                ranges = [
                    nBase,
                    nFull
                ]
                return ranges
            }
            if (token.actor.hasCondition("hopper")) {
                ranges = [
                    sBase,
                    sFull
                ]
                return ranges
            }
			if (token.actor.hasCondition("wheeled")) {
                ranges = [
                    vfBase,
                    vfFull
                ]
                return ranges
            }
			if (token.actor.hasCondition("snake")) {
                ranges = [
                    sBase,
                    sFull
                ]
                return ranges
            }
			if ( token.actor.hasCondition("Dazed") ){
                nBase
                return ranges;
            }
			
			//conditions with no movement
            if (token.actor.hasCondition("grappled")) {
                ranges = []
                return ranges
            }
			if ( token.actor.hasCondition("immobilized") ){
                ranges = [];
                return ranges;
            }
            if ( token.actor.hasCondition("dead") ){
                ranges = [];
                return ranges;
            }
			if ( token.actor.hasCondition("unconcious") ){
                ranges = [];
                return ranges;
            }
			if ( token.actor.hasCondition("prone") ){
                ranges = [];
                return ranges;
            }
			if ( token.actor.hasCondition("incapacitated") ){
                ranges = [];
                return ranges;
            }
            return ranges
        }
    }

    dragRuler.registerModule("ep-dragruler", EPSpeedProvider)
})
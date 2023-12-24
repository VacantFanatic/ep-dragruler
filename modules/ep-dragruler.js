Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class EPSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "base", default: 0x3ae62e, name: "Base"},
                {id: "full", default: 0xe6c42e, name: "Full"},
            ]
        }

        getRanges(token) {

            let base = token.actor.system.additionalSystems.movementBase
            let full = 20

            //console.log("Loading terrain type...")

            //let terrainName = canvas.terrain.terrainFromPixels(token.x, token.y)[0]?.environment ?? "global"
            //console.log("Terrain type is", terrainName)

            //console.log("Terrain type is", terrainName)

            let Base = {range: base, color: "base"}
            let Full = {range: full, color: "full"}
			
			let ranges = [
                Base,
				Full
            ]
            // If a token is "Dying", use the combat tracker to "Mark Defeated"
            //if (token?.overlayEffect === "icons/svg/skull.svg") {
           
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
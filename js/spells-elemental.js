// Elemental Category Spells for Mages CYOA
// All 31 spells of the Elemental Category with 5 proficiency levels each
// Rewritten 2026-05-03

// Initialize spell data object if it doesn't exist
if (typeof spellData === 'undefined') {
    var spellData = {
        physical: [],
        elemental: [],
        esoteric: []
    };
}

const baseElementalSpells = [
    {
        id: 'fireball',
        name: 'Fireball',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device draws in ambient thermal energy from the surrounding air and ground, compressing it into a stabilized sphere of superheated plasma roughly the size of a softball. The process is computationally intensive—the device must calculate and maintain a magnetic containment field while the plasma core burns at approximately 800 degrees Celsius, preventing premature dissipation before the projectile reaches its target.

Range is limited to roughly 15 meters. Beyond that distance, the containment field degrades and the plasma sphere loses cohesion, dispersing harmlessly. A mage with a low-rank Mana Reactor can manage three to four casts per mana cycle before reserves dip to unsafe levels. Each cast requires roughly two seconds of concentration—the device needs that window to finish its compression calculations and spin up the magnetic bottle.

At Beginner, Fireball is a short-range skirmishing tool. It will ignite flammable materials, cause second-degree burns on direct impact, and stagger an unarmored opponent. It will not punch through reinforced barriers, incinerate a target instantly, or function reliably in environments with extreme ambient cold that starve the device of thermal energy to compress. The spell lays the groundwork for thermal manipulation, nothing more.`,

            apprentice: `The plasma sphere grows to roughly basketball size, with the containment field strengthening proportionally to hold a denser, hotter core of approximately 1200 degrees Celsius. The device now models the thermal expansion rate of the target environment, adjusting compression ratios on the fly so that Fireballs maintain cohesion out to 30 meters. A mid-rank reactor can sustain six to eight casts per cycle.

Concussive force accompanies the thermal payload. The rapid expansion of superheated gases on impact creates a shockwave that can knock a person off their feet or buckle a wooden door. The device staggers the collapse of the magnetic bottle to optimize this effect—too fast and the plasma dissipates before transferring heat; too slow and the blast is underwhelming. The computation is non-trivial, and the device's processor runs near its limit during sustained volleys.

At Apprentice, Fireball becomes a legitimate battlefield tool. It can clear rooms, suppress groups of unarmored targets, and create zones of denied space through persistent thermal bloom. The spell still struggles against magically reinforced defenses and does not discriminate between friend and foe—anything in the blast radius takes the full effect.`,

            adept: `The device achieves near-instantaneous thermal compression and magnetic bottle formation, reducing cast time to a fraction of a second. Range extends to 60 meters with a core temperature of roughly 2000 degrees Celsius, hot enough to melt common metals and flash-boil water on contact. A high-rank reactor can sustain twenty or more casts per cycle.

Remote detonation becomes available. The device can calculate a delayed containment collapse, allowing the mage to fire a Fireball that hangs in the air or travels to a designated coordinate before detonating on command. This introduces tactical flexibility—trap-setting, area denial, and timed simultaneous strikes against multiple points. The device tracks and manages up to three delayed spheres simultaneously, each with independent detonation timers.

At Adept, Fireball is professional combat-grade. It can breach light fortifications, disable armored vehicles through thermal shock, and serve as artillery support in squad-level engagements. The spell's primary limitation remains environmental—extreme cold, vacuum, and magically warded areas all degrade compression efficiency and reduce effective temperature.`,

            expert: `Cast time drops to effectively instant. The device pre-computes thermal compression parameters for likely combat scenarios and holds them in a cache, allowing the mage to deploy Fireball as fast as they can form intent. Range pushes to 100 meters with core temperatures reaching 3000 degrees Celsius, sufficient to melt structural steel given direct and sustained exposure.

Sub-munition splitting becomes standard. The device can fragment a single plasma sphere into three to five smaller projectiles mid-flight, each independently tracked and guided to separate targets or spread across an area for saturation bombardment. Sustained bombardment mode allows the mage to maintain a continuous stream of Fireballs—one every 0.3 seconds—for as long as mana reserves hold. The device handles all trajectory calculations and thermal modeling autonomously.

At Expert, Fireball is a primary weapon system. A single mage can match the area-denial output of a mortar team, breach hardened structures, and engage multiple dispersed targets simultaneously. The mana cost per cast has been optimized, but sustained bombardment will still drain even a Keter-rank reactor within minutes of continuous fire.`,

            master: `The device achieves the theoretical optimum of thermal compression for a Tier 1 spell. The plasma sphere is modeled with near-perfect efficiency—every joule of ambient heat is captured, compressed, and delivered with minimal waste. Core temperature plateaus at approximately 3500 degrees Celsius, the maximum that the containment field can sustain before the plasma's own radiation pressure begins to destabilize the magnetic bottle. Cast time is reflexive; the mage no longer consciously activates the spell, merely wills it and the device executes.

Sustained bombardment efficiency is maximized. The device recycles waste heat from its own processor into the compression cycle, reducing net mana cost per cast to the lowest possible value. A Keter-rank mage can maintain continuous fire for extended engagements, and the sub-munition system can now split a sphere into up to eight guided fragments with independent targeting.

This is the ceiling of Fireball as a Tier 1 spell. A mage at this level can demolish a small building with sustained, concentrated fire over several minutes. They cannot level a city block, cannot produce temperatures exceeding what a Tier 1 containment field can hold, and cannot bypass magical barriers of equal or higher tier through raw thermal output alone.`
        }
    },
    {
        id: 'ice_shard',
        name: 'Ice Shard',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device identifies and draws in ambient atmospheric moisture, flash-freezing it into a crystalline projectile roughly the size of a dagger. The freezing process is nearly instantaneous—the device strips thermal energy from a pinpoint volume of air, forcing water molecules into a dense, ordered lattice while simultaneously shaping the resulting ice into an aerodynamic form. A low-power magnetic pulse then accelerates the shard toward the target.

Range is limited to approximately 15 meters. Beyond that, the magnetic impulse loses coherence and the shard's trajectory becomes unreliable. A mage with a low-rank Mana Reactor can produce four to five shards per cycle before the device's thermal-extraction systems need a rest. Each shard hits with roughly the force of a thrown knife and causes localized numbness on impact as residual cold leaches into the surrounding tissue.

At Beginner, Ice Shard is a precision harassment tool. It is nearly silent in flight and leaves no flash or smoke signature, making it useful for discreet engagement. It will not penetrate body armor, shatter on hardened surfaces, or function in arid environments where atmospheric moisture is scarce. The spell requires an atmosphere to work—it cannot conjure ice from vacuum.`,

            apprentice: `The shards grow to short-sword dimensions with a denser crystal structure. The device now layers the freezing process, building the shard from the core outward in concentric rings that interlock molecularly—the result is ice with roughly the compressive strength of pine wood rather than the brittleness of common frost. Range extends to 30 meters, and a mid-rank reactor can sustain eight to ten casts per cycle.

Spiraling magnetic acceleration is introduced. The device imparts a controlled rotation to each shard, gyroscopically stabilizing it in flight and significantly improving accuracy at range. The shard also carries a cold pulse on impact—a brief but intense thermal drain that flash-freezes a palm-sized area of the target, causing tissue damage beyond the physical penetration.

At Apprentice, Ice Shard transitions from nuisance to threat. It can penetrate light leather armor and embed itself two to three centimeters into exposed wood. The silence and flashlessness remain tactical assets, but the spell still depends on sufficient atmospheric humidity. A desert or an artificially dehumidified environment cuts effective output by more than half.`,

            adept: `Shards accelerate to crossbow-bolt velocities—roughly 100 meters per second—and the device can now form and fire them in under a second. Range pushes to 60 meters with maintained accuracy thanks to improved gyroscopic modeling. A high-rank reactor can sustain twenty or more casts per cycle. The cold pulse on impact expands to a significant freezing burst: a shard striking a target's center mass can drop the temperature of the surrounding tissue by 30 degrees Celsius in a fraction of a second, causing immediate muscular paralysis in the affected area.

The crystalline structure is further refined. The device now grows shards in a hexagonal columnar pattern—the same molecular architecture that gives natural ice its structural integrity at glacial scales, compressed into a weaponized form. Each shard is hard enough to chip stone and embed itself in soft metals like copper or aluminum.

At Adept, Ice Shard is a lethal weapon. A single well-placed shard can disable a limb, and sustained volleys can dismantle light cover. The freezing pulse also has utility applications—sealing a coolant leak, reinforcing a failing structural joint, or creating an improvised cold patch on overheating equipment. The spell remains bounded by the moisture content of the local atmosphere.`,

            expert: `Shards achieve supersonic velocities—the magnetic accelerator has been optimized to the point where each projectile breaks the sound barrier with a sharp crack that is the spell's only audible signature. Range extends to 100 meters with maintained lethality. The device can now fire rapid volleys: up to five shards per second, each independently targeted, as the freezing and acceleration pipelines operate in parallel rather than sequentially.

Core temperature drops to approximately negative 80 degrees Celsius. On impact, the shard detonates in a freezing burst that drops a 2-meter radius to sub-zero temperatures for several seconds, flash-freezing standing water, shattering brittle materials, and causing severe frostbite to any organic tissue in the zone. A direct hit on an unarmored human is almost certainly fatal from thermal shock alone.

At Expert, Ice Shard is a suppression weapon. Sustained fire can freeze an area solid, create improvised barriers of ice from ambient moisture, and lock down chokepoints. The spell's primary limitation is no longer casting speed or accuracy—it is the total available water vapor in the engagement zone. The device cannot manufacture water; it can only freeze what is already present.`,

            master: `The device achieves the theoretical optimum of crystallization and magnetic acceleration for a Tier 1 spell. Each shard is grown with a flawless crystal lattice—no internal fractures, no weak planes—resulting in a projectile harder than tempered steel and sharp enough to score diamond. The freezing burst on impact drops to negative 100 degrees Celsius at the core, flash-freezing a 1.5-meter sphere solid within a tenth of a second.

Volley fire is fully reflexive. The device's thermal-extraction and acceleration pipelines run continuously, drawing moisture from a steadily expanding radius as local vapor is depleted. The mage no longer thinks about individual shards—they designate targets or areas and the device handles all formation and firing calculations. The mana cost per shard is the lowest theoretically achievable for a Tier 1 thermal-extraction routine.

This is the ceiling of Ice Shard as a Tier 1 spell. The mage can sustain fire long enough to freeze a small building's exterior solid or create a localized ice field covering a few hundred square meters—provided sufficient atmospheric moisture. They cannot flash-freeze a lake, cannot produce ice in a true vacuum, and cannot overcome magical thermal barriers of equal or higher tier.`
        }
    },
    {
        id: 'lightning_bolt',
        name: 'Lightning Bolt',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device ionizes a narrow channel of air between the mage and the target, creating a conductive path through which a stored electrical potential discharges as an arc. The ionization is accomplished by projecting a focused laser pulse that strips electrons from atmospheric molecules; the resulting plasma channel is maintained for a fraction of a second—just long enough for the electrical discharge to travel through it. The arc itself moves at the speed of electricity through ionized air, which is effectively instantaneous to human perception.

Range is limited to roughly 10 meters. Beyond that, the ionization laser loses coherence and the plasma channel fails before the discharge can complete. The stored charge is equivalent to a high-powered stun gun—sufficient to cause full-body neuromuscular disruption lasting 10 to 15 seconds, but not lethal to a healthy adult unless pre-existing cardiac conditions are present. A low-rank reactor can manage three to four casts per cycle.

At Beginner, Lightning Bolt is a non-lethal incapacitation tool. It is reliable against unarmored targets within its short range, but conductive armor, electrical grounding, and magically insulated barriers can all negate or redirect the arc. The spell also produces a loud thunderclap as superheated air expands along the discharge path, making it useless for stealth.`,

            apprentice: `Voltage increases by roughly an order of magnitude, bringing the discharge to lethal levels against unarmored human targets. The device now ionizes a wider, more stable plasma channel that holds coherence out to 25 meters, and the laser's targeting is refined to track moving targets in real time. A mid-rank reactor can produce six to eight casts per cycle.

Full neuromuscular disruption becomes the standard effect—every muscle group along the discharge path seizes simultaneously, causing a target to collapse regardless of pain tolerance or combat conditioning. The electrical pulse also generates an electromagnetic disruption: electronics within a 10-meter radius of the impact point experience transient failure, and unshielded devices may suffer permanent damage.

At Apprentice, Lightning Bolt transitions from less-lethal to weapon. It can disable an armored vehicle's electronics, fry unshielded communication gear, and kill a human target outright with a center-mass hit. Grounded targets and Faraday-cage environments still offer significant protection, and the spell remains useless against targets that the ionization laser cannot reach—behind thick walls, in sealed containers, or in vacuum where no atmosphere exists to ionize.`,

            adept: `The ionization laser incorporates real-time atmospheric modeling, compensating for humidity, air pressure, and particulate density to optimize the plasma channel's conductivity. Range extends to 50 meters, and the device can now sustain the arc for up to 15 seconds in a continuous-mode discharge—the lightning bolt does not strike and end; it persists, chaining damage over time to a single target or sweeping across multiple targets in sequence.

Voltage reaches levels that are reliably lethal against any organic target short of those with active magical shielding. A sustained-arc hit will carbonize tissue along the discharge path within seconds. The electromagnetic pulse radius expands to 20 meters, enough to disable vehicles and squad-level communications gear. Bioelectric tracking is added: the device detects the faint electromagnetic signature of living nervous systems and adjusts the ionization laser to ensure the arc seeks the target's core rather than dissipating into a nearby conductor.

At Adept, Lightning Bolt is a heavy weapon. It can down aircraft via avionics disruption, destroy drone swarms through chain-arcing, and neutralize hardened targets through sustained electrical delivery. The spell's signature—visible arc, thunderclap, EMP spike—makes it highly detectable, and the continuous-mode discharge drains mana rapidly.`,

            expert: `Cast time drops to effectively instant. The device pre-ionizes multiple potential paths before the mage commits to a discharge, so the arc fires the moment intent is formed. Range extends to 100 meters, and the EMP radius expands to 50 meters—sufficient to black out a city block's electronics for the duration of the discharge. Multiple simultaneous bolts can be fired at independent targets, each tracked and sustained by a parallel ionization thread.

Sustained-arc mode can run for up to 30 seconds continuously, during which the device dynamically adjusts the ionization path to account for target movement, atmospheric changes, and energy bleed. The arc can also be modulated in frequency to optimize penetration—high-frequency pulses bypass surface conductivity and deliver damage deeper into a target's internal structure.

At Expert, Lightning Bolt is an area-denial and anti-materiel weapon. A single cast can disable an armored convoy's electronics, and sustained fire can destroy hardened electrical infrastructure. The mage remains vulnerable during the discharge—the arc is a direct line to their position, and anyone who can trace it knows exactly where the fire is coming from.`,

            master: `The device achieves the theoretical optimum of atmospheric ionization and electrical discharge for a Tier 1 spell. The plasma channel is modeled with perfect precision—minimal energy bleed, maximum conductivity, exact atmospheric compensation in real time. The arc fires with zero conscious delay; the mage wills and the lightning strikes. EMP radius reaches 75 meters, affecting even hardened military electronics within that zone. Sustained-arc mode can run for up to 60 seconds without degradation.

Multiple simultaneous bolts are managed with the same ease as a single discharge. The device can track and engage up to eight independent targets across the full 100-meter range, each with its own dedicated ionization thread and discharge modulation. Bioelectric tracking is refined to the point where the arc can distinguish between friendlies and hostiles based on pre-registered bioelectric signatures.

This is the ceiling of Lightning Bolt as a Tier 1 spell. The mage can neutralize an infantry platoon and its electronic support within seconds. They cannot produce an EMP at city scale, cannot "control all electricity" within a zone, and cannot discharge through barriers that the ionization laser cannot physically penetrate.`
        }
    },
    {
        id: 'wind_blade',
        name: 'Wind Blade',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device compresses a volume of ambient air into a monomolecular-thin cutting edge and accelerates it as a silent projectile. The compression is achieved by manipulating air pressure gradients—the device creates a high-pressure region that collapses into a linear wavefront, shearing along its leading edge with enough force to cut soft materials. The blade is nearly invisible in flight, betraying itself only as a faint shimmer like heat haze over asphalt.

Range is limited to roughly 15 meters. The compression wavefront begins to disperse beyond that distance, losing its cutting edge and dissolving into a harmless breeze. A low-rank Mana Reactor can produce four to five blades per cycle. Each blade cuts with roughly the force of a sharpened kitchen knife—enough to slice through heavy fabric, score wood to a depth of a few millimeters, and cause shallow but painful lacerations on exposed skin.

At Beginner, Wind Blade is a stealth engagement tool. It produces no flash, no sound beyond a faint hiss, and no projectile that can be visually tracked without enhancement. It will not penetrate body armor, cut through structural materials, or remain coherent in turbulent air conditions. The spell requires an atmosphere—in vacuum, there is nothing to compress.`,

            apprentice: `The device introduces helical vortex stabilization. Each blade is wrapped in a counter-rotating air jacket that maintains the cutting edge's coherence over longer distances and through mild air turbulence. Range extends to 30 meters, and the edge sharpens as the device compresses the wavefront to approximately a tenth of a millimeter in thickness. A mid-rank reactor can sustain eight to ten casts per cycle.

Cutting power increases proportionally. The blade can now shear through light leather as if it were paper, embed itself two to three centimeters into solid wood, and cause deep lacerations that require immediate medical attention. The near-invisibility is preserved—the vortex jacket actually smooths out the shimmer that the Beginner-level blade produced, making the projectile even harder to spot.

At Apprentice, Wind Blade becomes a lethal precision weapon. A single well-placed blade to the throat or femoral artery can kill. The spell's weakness remains its dependence on air density—at high altitude or in thin atmospheres, the compression wavefront is weaker and the blade loses cutting force proportionally.`,

            adept: `The blade becomes functionally invisible. The device eliminates all optical distortion by precisely matching the air density gradient around the projectile to the surrounding atmosphere—there is no shimmer, no haze, no visual signature of any kind. The only way to detect an incoming blade is through air-pressure sensors, enhanced hearing capable of registering the faint hiss, or magical detection. Range extends to 60 meters with maintained lethality, and a high-rank reactor can sustain twenty or more casts per cycle.

Cutting power reaches the threshold where sheet metal is sheared cleanly. A blade will pass through a car door, sever a tree branch as thick as a human arm, or bisect an unarmored target without losing velocity. A room-clearing vortex storm becomes available: the device fires a cluster of five to eight blades in a fan pattern that covers a cone roughly four meters wide at its terminal point, shredding everything in its path.

At Adept, Wind Blade is a squad-level threat. It can clear entrenched positions, disable light vehicles by severing critical components, and create zones where moving without cover is effectively suicidal. The spell's invisibility makes it ideal for ambush tactics, but the blade's path can be predicted by anyone who can perceive the air-pressure wake it leaves behind.`,

            expert: `Range extends to 100 meters, and cutting power reaches the point where structural steel is severed. The device can now sustain barrages—a continuous stream of blades fired at a rate of up to three per second, each independently tracked and guided. The acoustic signature is actively suppressed; the device generates a counter-phase sound wave that cancels the blade's hiss, making the projectile both invisible and completely silent.

The compression wavefront has been refined to the thickness of a few molecules. At this scale, the blade cuts by physically separating atomic bonds along its edge rather than by brute force. The result is a projectile that passes through most materials with almost no resistance—it does not smash or tear; it cleaves at the molecular level.

At Expert, Wind Blade is an assassination-grade weapon. A single silent, invisible blade can take a target from 100 meters with no warning. Sustained barrages can dismantle a reinforced structure piece by piece, each blade slicing through steel, concrete, and composite materials with equal ease. The spell is still bounded by air density—in thin atmospheres, cutting power and range both degrade proportionally.`,

            master: `The device achieves the theoretical optimum of air compression and projectile guidance for a Tier 1 spell. Each blade is compressed to the absolute minimum thickness that the atmosphere can support—a wavefront just a few atoms wide, capable of cleaving through reinforced concrete to a depth of 10 centimeters before dissipating. The projectile is silent, invisible, and leaves no detectable wake in still air. Reflexive casting is achieved: the mage designates targets through intent alone, and the device handles all compression, acceleration, and guidance calculations autonomously.

Sustained barrages are maintained with negligible conscious overhead. The device can engage a room full of targets, track moving vehicles, and intercept incoming projectiles mid-flight. The mana cost per blade is optimized to the lowest value compatible with Tier 1 computational limits—the spell is a model of efficiency within its design tier.

This is the ceiling of Wind Blade as a Tier 1 spell. A mage at this level can dismantle a small building or a vehicle column through sustained, precise fire. They cannot cut through magical barriers of equal or higher tier, cannot project blades through vacuum, and cannot overcome targets that are fully sealed in airtight, magically reinforced enclosures.`
        }
    },
    {
        id: 'earth_spike',
        name: 'Earth Spike',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device emits a directed seismic pulse into the ground at the target location, vibrating the subterranean material at its resonant frequency. This liquefies a narrow channel through soil, clay, and loose rock, through which the device then compresses and extrudes a spire of available stone. The entire process takes roughly two seconds from pulse to emergence. The resulting spike stands about one meter tall with a tapered, spear-like tip.

Range is limited to roughly 10 meters. Beyond that, the seismic pulse attenuates too much to maintain the resonance needed for channel liquefaction. A low-rank Mana Reactor can manage three to four casts per cycle. The stone spire is crude—roughly the consistency of common building stone—and serves more as a trip hazard, barricade, or stagger-inducing obstacle than a direct weapon.

At Beginner, Earth Spike is a battlefield-shaping tool. It can create improvised cover, block a doorway, trip an advancing opponent, or provide a step to reach higher ground. It will not pierce armor, stop a charging target, or function on surfaces that lack an earthen substrate—concrete slabs, metal decking, and magically warded ground are immune.`, 

            apprentice: `The spire grows to two meters in height with significantly denser stone. The device now selects the optimal mineral composition from the available substrate—quartz-rich soil produces harder spikes; clay-heavy ground yields wider, blunter formations. The seismic pulse is tuned to propagate deeper, creating a more stable base, and the extrusion process compresses the stone under higher pressure to eliminate internal fractures. Range extends to 20 meters, and a mid-rank reactor can sustain six to eight casts per cycle.

The spike can now pierce light body armor. A direct hit to an unarmored torso will penetrate, and the sudden eruption from below is difficult to anticipate or dodge without enhanced reflexes. The utility applications expand—the mage can create a line of spikes as a temporary barricade, breach a ground-floor wall by undermining its foundation, or collapse a shallow tunnel by disrupting the substrate.

At Apprentice, Earth Spike becomes a weapon and a tool in equal measure. It can shape engagements by altering terrain and pose a genuine threat to lightly armored opponents. The spell still cannot function on artificial surfaces or in environments where the ground is frozen solid beyond the depth the seismic pulse can reach.`,

            adept: `The spire reaches three meters in height with granite-grade hardness. The device models the local geology in real time—soil composition, water table depth, bedrock proximity—and optimizes the liquefaction channel for maximum structural integrity of the resulting spike. Range extends to 50 meters, and a high-rank reactor can sustain 15 or more casts per cycle.

Formation patterns become available. The device can erupt multiple spikes simultaneously in geometric configurations—a ring to trap a target, a line to create a wall, a grid to deny an area to vehicles. Stone sonar sensing is added: by pulsing the ground and analyzing the reflected vibrations, the device builds a crude 3D map of subsurface structures, useful for detecting tunnels, buried objects, or approaching subterranean threats.

At Adept, Earth Spike is a tactical engineering tool. The mage can reshape a battlefield in seconds—raising cover, creating chokepoints, disabling vehicles by erupting spikes through their undercarriages. The spell remains entirely dependent on available substrate. Bedrock at depth produces the strongest spikes; loose sand produces barely coherent formations that collapse under their own weight.`,

            expert: `The spire reaches three to four meters with near-instantaneous eruption—the seismic pulse, liquefaction, and extrusion occur in a single, seamless computational cycle that takes less than a tenth of a second. Range extends to 100 meters. The stone is compressed to maximum density, approaching the hardness of industrial-grade concrete, and the spike's tip is sharpened to a razor point by the device's extrusion modeling.

The spikes can stop small-arms fire. A line of them serves as legitimate cover against rifles and fragmentation grenades. Complex terrain mazes become possible—the mage can raise a network of walls, barriers, and obstacles across a wide area in seconds, creating a labyrinth that channels enemy movement into kill zones. The stone sonar system is refined to provide meter-resolution subsurface imaging out to 50 meters in all directions.

At Expert, Earth Spike is a fortification spell. The mage can create defensive positions from nothing, trap vehicles, collapse terrain under enemy formations, and maintain full subsurface awareness. The spell's ceiling is geological—it cannot affect substrates deeper than roughly 5 meters, and the quality of the spike is always determined by the quality of the available stone.`,

            master: `The device achieves the theoretical optimum of geological modeling and resonant extrusion for a Tier 1 spell. Each spike erupts with perfect density, shape, and placement—no wasted stone, no structural flaws, no computation lag. The mage deploys them reflexively: intent triggers the seismic pulse, and the device handles everything from geological analysis to final formation. Fortified positions with interlocking cover, elevated firing platforms, and anti-vehicle barriers can be raised in under five seconds across a wide area.

The stone sonar provides continuous, real-time subsurface mapping with centimeter-level resolution. The mage is aware of every buried object, every tunnel, every approaching subterranean threat within the spell's 50-meter sensing radius. This awareness is maintained passively, a background process that requires no conscious attention.

This is the ceiling of Earth Spike as a Tier 1 spell. The mage can reshape natural terrain into a fortified position in seconds and maintain complete geological awareness of the engagement zone. They cannot erupt spikes from metal surfaces, magically warded ground, or locations where no earth or stone substrate exists within the spell's 5-meter depth penetration. The spell cannot create stone from nothing—it only compresses and extrudes what is already present.`
        }
}
];
// Merge base spells into spellData
if (typeof spellData !== "undefined" && spellData.elemental) {
    spellData.elemental = baseElementalSpells.concat(spellData.elemental);
}

const elementalSpellsBatch1 = [
    {
        id: 'water_whip',
        name: 'Water Whip',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device draws moisture from the surrounding air and condenses it into a pressurized stream roughly one meter in length, anchored to the mage's palm by a thin mana tether. The stream functions as a flexible lash—striking, wrapping, and retracting on command with the speed and force of a swung chain. The device maintains the whip's cohesion through continuous hydrostatic pressure calculations, keeping the water compressed enough to hold shape without dispersing into spray.

Range is limited to approximately two meters from the mage's hand. Beyond that, the mana tether loses integrity and the water collapses into an harmless splash. The whip can trip, sting, and disarm but lacks the mass to cause serious blunt trauma. A low-rank Mana Reactor can sustain the whip for roughly five minutes of active combat before the device's moisture-extraction cycle needs to recalibrate.

At Beginner, Water Whip is a utility and harassment tool. It provides a mage with a reach advantage in close quarters, can retrieve small objects from a short distance, and serves as a non-lethal compliance tool. It will not cut, pierce, or injure a determined opponent through armor of any kind.`,
            apprentice: `The whip extends to roughly four meters and gains the ability to change its cross-sectional density on command. The device can thin the stream to a razor-fine filament for cutting, or swell it into a heavy blunt rope for concussive impact. Cutting capability is modest—light leather and fabric can be sliced, but the water lacks the pressure to penetrate armor or dense materials. Blunt strikes land with roughly the force of a weighted sap.

The moisture-extraction range expands, allowing the device to pull water from damp soil, plant matter, or nearby containers within ten meters. The whip can be split into two shorter lashes operating independently, though the device's processing load doubles and a mid-rank reactor is recommended for sustained dual-whip combat.

At Apprentice, Water Whip transitions from utility tool to flexible combat option. The mage can switch between cutting and bludgeoning modes mid-swing, and the extended reach makes the spell effective at controlling distance against melee opponents.`,
            adept: `The whip reaches eight meters with maintained structural integrity, and the device achieves water pressures sufficient to cut through sheet metal and shatter bone on impact. The lash can be reshaped mid-strike—the device calculates the optimal form for each phase of an attack, transitioning from a thin cutting edge to a broad sweeping surface to a coiling snare in a single fluid motion. The mana tether is robust enough to lift and throw objects up to roughly fifty kilograms.

Ambient moisture extraction becomes the default. The device continuously siphons water vapor from the air, maintaining the whip indefinitely without requiring the mage to stand near a water source. In humid environments, the whip actually grows stronger as excess moisture is absorbed and compressed into the stream. The whip can be projected as a high-pressure jet—effectively a short-range water cutter that slices through most conventional materials given sustained contact.

At Adept, Water Whip is a versatile combat tool and precision instrument. It cuts, crushes, grapples, and lifts with equal facility. The spell demands a mid-rank reactor for sustained pressure output, but the mana cost per strike is well within the budget of any combat-rated mage.`,
            expert: `The whip extends to fifteen meters with no loss of pressure or responsiveness, and the device can maintain up to four independent lashes simultaneously—each tracking separate targets with dedicated processing threads. Cutting pressure reaches industrial water-jet levels, slicing through reinforced concrete and inch-thick steel plate. The mage can reshape any lash into a spray, a barrier, a net, or a concentrated jet without conscious input—the device reads intent and reconfigures the water instantly.

Molecular-level compression allows the water to achieve densities far beyond natural limits. A whip-strike from this density carries the kinetic impact of a sledgehammer focused into a contact area the size of a fingernail. The device can freeze sections of the whip into ice for rigidity, or superheat them into steam for concussive expansion on contact, blending thermal manipulation with hydrostatic control.

At Expert, Water Whip is a weapon system in its own right. A single mage wielding four high-pressure lashes can engage multiple opponents at range, cut through fortified positions, and manipulate the battlefield with a fluidity that unenhanced fighters simply cannot counter.`,
            master: `The spell operates at the theoretical optimum of hydrostatic manipulation for a Tier 1 spell. The whip can extend up to twenty meters, split into any number of independent lashes the device can process, and achieve pressures that cut through any known conventional material given brief sustained contact. The mana tether is effectively unbreakable within its operational range—the device maintains the molecular bond between mage and water with near-perfect computational efficiency.

The device extracts moisture from any available source within a thirty-meter radius, including the water content of organic tissue—a capability that borders on unsettling but is primarily useful for maintaining the whip in arid environments where atmospheric moisture is scarce. The transition between solid ice, liquid water, and pressurized steam is seamless and instantaneous, allowing the mage to adapt the whip's properties to any tactical requirement without conscious direction.

This is the ceiling of Water Whip as a Tier 1 spell. The mage cannot control vast bodies of water, cannot generate water from nothing in a true vacuum, and cannot manipulate water inside a living creature's body to harmful effect—the device's moisture-extraction from organic tissue is limited to surface-level condensation. What Master offers is the most refined, most versatile hydrostatic weapon that Tier 1 computation can sustain—nothing more, nothing less.`
        }
    },
    {
        id: 'mist_veil',
        name: 'Mist Veil',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device extracts atmospheric moisture and disperses it as a fine, lingering mist in a radius of roughly five meters around the mage. The mist is thick enough to obscure vision—opponents beyond three meters appear as vague shapes, and fine details like weapon type or hand position are lost entirely. The device maintains the mist's density by continuously cycling water vapor through a mana-enhanced condensation loop, preventing natural dissipation for up to two minutes.

The spell provides no physical protection. The mist is simply water vapor—arrows, bullets, and spells pass through it unimpeded. Its value is purely tactical: breaking line of sight, concealing movement, and forcing opponents to close distance or rely on non-visual targeting. The mage's own vision is equally impaired unless they close their eyes and rely on the device's spatial sonar, which provides a crude but functional awareness of movement within the mist.

At Beginner, Mist Veil is a disengagement and repositioning tool. It buys seconds rather than minutes, and a determined opponent can simply push through the mist and close to melee range. The spell is ineffective in extremely dry or hot environments where the device cannot extract sufficient moisture.`,
            apprentice: `The mist expands to a ten-meter radius and can be shaped—the device allows the mage to create corridors of clear air within the mist for allied firing lanes, or concentrate the fog into dense patches that block even enhanced vision. Duration extends to roughly five minutes. The mage's own vision is now compensated: the device renders a wireframe overlay of movement and shapes within the mist, allowing the mage to see what others cannot.

Thermal insulation becomes a secondary effect. The mist absorbs and diffuses infrared radiation, degrading thermal imaging and heat-based targeting within its radius. This makes the spell effective against opponents who rely on thermal scopes or infrared sensors, though the effect is moderate—a sufficiently powerful thermal array can still detect the heat differential of a living body through the fog.

At Apprentice, Mist Veil becomes a genuine tactical asset. The mage controls the battlefield's visibility, creating firing lanes and concealment zones that favor their own side. The spell still depends on atmospheric moisture and cannot function in extremely arid conditions.`,
            adept: `The mist expands to twenty meters and persists indefinitely while the device maintains the condensation cycle. The device now extracts moisture from the ground, nearby plant life, and even the exhaled breath of creatures within range—effectively guaranteeing that the mist can be sustained in any environment that contains biological or geological water, which is virtually all terrestrial environments.

The mage gains full environmental awareness within the mist. Every droplet functions as a distributed sensor: movement disturbs the fog, and the device maps those disturbances into a real-time three-dimensional awareness overlay. Nothing moves within the mist without the mage knowing its position, velocity, and approximate mass. Invisible opponents, concealed threats, and hidden passages all become perceptible through this droplet-based sonar network.

At Adept, Mist Veil is both a concealment system and a sensory network. The mage operates with perfect awareness in a space where opponents are functionally blind. The spell requires a mid-rank reactor to maintain the distributed sensor processing alongside the condensation cycle.`,
            expert: `The mist covers a fifty-meter radius and can be layered with mana-infused particles that scatter active sensor emissions—lidar, radar, and magical detection spells are all significantly degraded within the fog. The device can selectively clear or thicken sections of the mist in real time, creating a dynamic environment where allies always have clear firing lanes and enemies always face dense, disorienting fog.

The droplet sensor network achieves millimeter resolution. The device tracks not just movement but the specific outlines of objects and creatures within the mist, providing the mage with detailed spatial awareness that rivals direct visual observation. The mist can be flash-densified into a momentary wall of water vapor thick enough to deflect lightweight projectiles and disrupt energy-based attacks for a fraction of a second.

At Expert, Mist Veil turns any engagement into a battle fought on the mage's terms. Opponents cannot see, cannot target effectively, and cannot move without broadcasting their position. The mage, by contrast, perceives everything within the fog with clarity that makes the mist feel like an extension of their own body.`,
            master: `The spell operates at the theoretical optimum of atmospheric moisture manipulation for a Tier 1 spell. The mist can extend to a hundred-meter radius, with every droplet functioning as a sensor node in a distributed awareness network that provides the mage with real-time, three-dimensional mapping of the entire volume at centimeter resolution. The device manages the condensation cycle with negligible mana overhead, making the mist effectively permanent until the mage dismisses it.

Selective transparency allows the mage to grant allies perfect visibility while enemies see only impenetrable fog. The device differentiates between registered and unregistered bioelectric signatures, adjusting mist density around each individual in real time. Flash-densification can produce momentary water barriers strong enough to deflect small-arms fire.

This is the ceiling of Mist Veil as a Tier 1 spell. The mage cannot create fog from nothing in a true vacuum, cannot condense the mist into solid ice or liquid water weapons, and cannot extend the sensor network beyond the physical range of the dispersed droplets. What Master offers is the most comprehensive tactical concealment and awareness system that Tier 1 atmospheric manipulation can deliver—turning any environment into the mage's domain.`
        }
    },
    {
        id: 'frost_nova',
        name: 'Frost Nova',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device rapidly extracts thermal energy from the air in a spherical radius of roughly five meters around the mage, dropping the temperature by approximately forty degrees Celsius in under two seconds. The sudden cold snap freezes standing moisture—dew, puddles, sweat—into a thin layer of ice on every surface within range. Exposed skin suffers immediate frostnip; wet clothing freezes stiff; condensation on equipment becomes a slick, hazardous glaze.

The effect is a single burst rather than a sustained field. Once the thermal energy has been extracted and vented through the device's heat sinks, the environment begins warming immediately. In normal conditions, the ice begins melting within thirty seconds. The device requires a brief recalibration period—roughly ten seconds—before it can extract thermal energy again, making Frost Nova a one-shot engagement opener rather than a sustained defensive tool.

At Beginner, Frost Nova is an area-denial and disengagement tool. It creates a momentary zone of extreme cold that punishes anyone within melee range, buying the mage time to reposition. It will not kill a healthy adult outright, but the sudden temperature shock is deeply disorienting and the ice underfoot makes pursuit treacherous.`,
            apprentice: `The thermal extraction radius expands to eight meters, and the temperature drop reaches sixty degrees Celsius—sufficient to freeze standing water solid and cause immediate frostbite on exposed skin within seconds. The device can now sustain the cold zone for up to thirty seconds by continuously extracting heat and venting it as waste energy, creating a persistent area of frozen ground and chilled air rather than a single burst.

The ice layer thickens enough to impede movement—surfaces become dangerously slick, and the frozen ground can crack and buckle as moisture expands, creating uneven terrain that punishes careless footwork. The device can direct the thermal extraction asymmetrically, freezing one side of the radius more aggressively to channel opponents toward a desired direction.

At Apprentice, Frost Nova becomes a battlefield-shaping tool. The mage can create zones of frozen ground that slow and destabilize opponents, channel movement toward prepared positions, and persist long enough to influence an entire skirmish rather than a single exchange.`,
            adept: `The cold zone extends to fifteen meters, and the temperature drops by over a hundred degrees Celsius—sufficient to freeze human tissue through to the bone within seconds of exposure. The device maintains the field indefinitely by converting extracted thermal energy directly into mana, partially offsetting the spell's own cost. Frost crystals form on every surface, growing into elaborate fractal structures that further degrade footing and visibility.

The device can now shape the cold field. Rather than a simple sphere, the mage can project cones, walls, or rings of extreme cold, creating barriers of frozen air that are painful and damaging to cross. Living creatures within the sustained field suffer cumulative cold damage—initial shock gives way to frostbite, then hypothermia, then tissue death as exposure continues. A mage with a high-rank reactor can maintain the field through extended combat.

At Adept, Frost Nova is a lethal area-denial weapon. Opponents must either exit the zone immediately or accept progressively worse cold injuries. The field can be shaped to protect allies, creating corridors of normal temperature within the frozen perimeter.`,
            expert: `The cold zone reaches twenty-five meters with temperature drops exceeding a hundred and fifty degrees Celsius—cold enough to embrittle metals, shatter conventional plastics, and cause near-instantaneous tissue destruction in unprotected organic matter. The device extracts heat so efficiently that materials within the zone undergo thermal shock: glass cracks, metal warps, and stone fractures as differential contraction rips through structures.

The frost field becomes adaptive. The device monitors the positions of registered allies and maintains safe corridors for them while maximizing cold output everywhere else. Sustained exposure within the expert-level field is lethal within minutes for any unprotected human. Even heavily insulated opponents suffer from the sheer thermal gradient as the device leaches heat faster than protective gear can retain it.

At Expert, Frost Nova is a weapon of environmental domination. The mage creates a killing field where only they and their allies can operate effectively. The mana cost is significant, but the tactical advantage of rendering a large area hostile to all unprepared life is immense.`,
            master: `The spell operates at the theoretical optimum of localized thermal extraction for a Tier 2 spell. The cold zone reaches thirty meters with temperature drops approaching two hundred degrees Celsius—the hard limit of what the device's thermal-compression architecture can achieve before the extracted energy destabilizes the containment cycle. Every surface within the zone freezes instantly; the air itself becomes a hazard as moisture crystallizes into a dense suspension of ice particles that obscure vision and abrade lungs.

The device manages the field autonomously, maintaining safe zones for allies and concentrating cold output against detected threats. The mana cost is optimized to the theoretical minimum for the thermal energy being extracted, making sustained operation practical for a high-rank reactor through extended engagements.

This is the ceiling of Frost Nova as a Tier 2 spell. The mage cannot freeze an entire city block, cannot reduce temperatures to absolute zero, and cannot extract thermal energy from targets shielded by thermal barriers of equal or higher tier. What Master provides is the most lethal, most efficient localized cold-field that Tier 2 thermal manipulation can sustain—a weapon that turns the immediate environment itself into a hostile, freezing trap.`
        }
    },
    {
        id: 'chain_lightning',
        name: 'Chain Lightning',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device ionizes a conductive channel to the nearest target within ten meters, then on impact releases an electrical discharge that seeks the next nearest conductive body within three meters. The arc chains between up to three targets total, each successive strike carrying roughly two-thirds the voltage of the previous one as energy dissipates across the chain. The first target receives a stun-grade shock; the second and third receive diminishing shocks that are painful but rarely incapacitating.

The device must calculate the ionization path for each link in the chain before releasing the discharge, which adds roughly half a second to the cast time compared to a standard Lightning Bolt. The chain follows the path of least electrical resistance, which means it arcs through conductive materials—metal armor, wet surfaces, and grounded opponents chain more reliably than dry, insulated ones. This can be a liability if the arc chooses an unintended target.

At Beginner, Chain Lightning is a crowd-control tool for closely grouped opponents. It will not reliably kill any of its targets, but it can stagger multiple enemies simultaneously, creating openings for follow-up attacks or retreats. The spell requires line of sight to the primary target; secondary targets are selected automatically by the device.`,
            apprentice: `The chain extends to five targets with a maximum jump distance of five meters between each. The device now models the electrical properties of all potential targets in real time, selecting the chain path that maximizes damage to hostiles while avoiding registered allies. Voltage at the primary target reaches lethal levels against unarmored humans; successive targets receive shocks sufficient to cause full neuromuscular disruption lasting ten to fifteen seconds.

The cast time drops as the device pre-computes likely chain paths based on battlefield positioning. The mage can now designate a preferred chain sequence—targeting specific enemies in order—though the device will override this if the designated path is electrically impractical. A mid-rank reactor can sustain five to six chained casts per mana cycle.

At Apprentice, Chain Lightning becomes a legitimate anti-group weapon. A single cast can disable an entire fire team, and the selective targeting prevents the common beginner problem of arcing into allies. The spell remains limited by the requirement for conductive proximity—widely dispersed opponents cannot be chained.`,
            adept: `The chain reaches eight targets with a jump distance of eight meters, and the device can now split the initial discharge into two independent chains that track separate target groups. Each chain maintains full voltage through the first four targets before degrading, effectively giving the mage two simultaneous Lightning Bolts that each chain to four opponents. The cast time is functionally instantaneous as the device runs continuous path calculations in the background.

The electrical discharge carries an electromagnetic pulse component that disables unshielded electronics within five meters of any target in the chain. This makes the spell devastating against technologically equipped forces—a single cast can disable a squad's communications, optics, and vehicle electronics while also incapacitating the soldiers themselves.

At Adept, Chain Lightning is a force-multiplying engagement opener. The mage can neutralize two separate groups of opponents simultaneously, crippling both their combat capability and their technological support. The mana cost is significant but well within the budget of a high-rank reactor.`,
            expert: `The chain reaches twelve targets per discharge with a jump distance of twelve meters, and the device can split into three independent chains. The voltage at every target in the chain is now standardized—the degradation effect has been engineered out, meaning the last target in the chain receives the same lethal discharge as the first. The EMP radius expands to fifteen meters from any point in the chain, blacking out a substantial area of electronic infrastructure with a single cast.

The device achieves real-time bioelectric targeting. The chain preferentially arcs to living targets based on their bioelectric signatures, allowing the mage to fire into a mixed environment of friendlies, hostiles, and inanimate objects with high confidence that the chain will find enemy combatants rather than allied ones. Pre-computed chain paths are generated and updated continuously, so the discharge fires the instant the mage forms intent.

At Expert, Chain Lightning is a tactical weapon of extraordinary flexibility. A single cast can disable a platoon, fry an entire vehicle column's electronics, and create a zone of electromagnetic chaos that disrupts enemy coordination for minutes afterward.`,
            master: `The spell operates at the theoretical optimum of chained electrical discharge for a Tier 2 spell. Up to fifteen targets can be chained with a jump distance of fifteen meters, split into up to four independent chains. Every target in the chain receives a discharge equivalent to a focused Lightning Bolt—no degradation, no energy loss between arcs. The device computes the optimal chain geometry in milliseconds, factoring in target conductivity, atmospheric conditions, and ally positions to deliver maximum destructive output with zero friendly fire risk.

The EMP component is refined to a directed pulse that can be configured for maximum electronic disruption or minimal collateral damage, depending on the tactical requirement. The mana cost per target in the chain is optimized to the theoretical minimum for Tier 2 electrical discharge, making sustained chaining practical for extended engagements.

This is the ceiling of Chain Lightning as a Tier 2 spell. The mage cannot chain a discharge through non-conductive vacuum, cannot arc through targets beyond the device's ionization range, and cannot generate electrical output that exceeds Tier 2 voltage limits regardless of how many targets are chained. Master means the spell has been refined to the absolute limit of chained electrical weaponology within its designed tier.`
        }
    },
    {
        id: 'magma_surge',
        name: 'Magma Surge',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device emits a focused seismic pulse into the ground that fractures subsurface rock and injects a compressed mana charge into the resulting cavity. The mana charge superheats the fractured material to approximately eight hundred degrees Celsius, creating a small reservoir of molten rock that the device then extrudes upward through the fracture channel. The result is a geyser of magma roughly one meter wide and two meters tall that erupts at the targeted point within ten meters, persisting for roughly thirty seconds before cooling into a rough, igneous mound.

The magma is genuine molten stone—hot enough to cause severe burns from radiant heat alone at close range, and fatal on direct contact. However, the volume is small: roughly enough to fill a bathtub. The eruption is slow by combat standards, taking nearly three seconds from pulse to emergence, giving alert opponents time to clear the area.

At Beginner, Magma Surge is a denial and obstruction tool. The magma fountain creates a hazardous zone that opponents must avoid, and the resulting igneous mound permanently alters the terrain. The spell requires a rocky or earthen substrate—it cannot function on metal decking, deep water, or magically reinforced surfaces.`,
            apprentice: `The magma reservoir grows larger, producing a geyser roughly two meters wide and three meters tall that persists for up to two minutes. The device can now shape the eruption—directing the flow into a spreading pool that covers a wider area, a narrow stream that acts as a burning wall, or a concentrated pillar that reaches four meters. Temperature increases to approximately twelve hundred degrees Celsius, hot enough to soften steel given sustained proximity.

Multiple reservoirs can be created and maintained simultaneously. The device can manage up to three magma sources at once, though each requires a separate seismic pulse and injection cycle. The mage can use this to create overlapping zones of molten rock that funnel opponents through narrow gaps or cut off retreat routes with walls of radiant heat.

At Apprentice, Magma Surge becomes a battlefield-shaping tool with lethal potential. The sustained magma flows create persistent hazards that cannot be ignored, and the ability to shape the eruption gives the mage fine control over how the terrain is modified. The mana cost per reservoir is moderate but cumulative—a mid-rank reactor can maintain three reservoirs through a typical engagement.`,
            adept: `The device achieves near-instantaneous eruption—the seismic pulse, fracture, injection, and extrusion occur in a single computational cycle taking under half a second. Temperature reaches approximately eighteen hundred degrees Celsius, sufficient to melt common metals and ignite most organic materials from radiant heat alone at close range. The magma can be erupted in any shape the mage conceives: walls, domes, trenches, or sprays of molten droplets that function as a short-range area weapon.

Subsurface magma manipulation becomes available. The device can maintain a reservoir of molten rock beneath the surface, heating and pressurizing it without eruption, then trigger a sudden release when opponents pass overhead. This creates the potential for devastating trap deployment—openings that suddenly become fountains of molten stone, corridors that flood with magma, fortifications that erupt from beneath enemy positions.

At Adept, Magma Surge is both a weapon and an engineering tool. The mage can reshape the battlefield with molten stone, creating fortifications that cool into permanent structures, traps that lie dormant until triggered, and zone-denial hazards that render entire areas impassable to unprotected personnel.`,
            expert: `The magma temperature reaches approximately twenty-five hundred degrees Celsius—approaching the melting point of steel—and the device can create eruptions of substantial volume, producing flows large enough to fill a small room. The mage can direct magma underground through subterranean channels, causing it to emerge at any point within fifty meters where the substrate allows. The seismic pulse can fracture rock at greater depth, creating larger reservoirs that sustain more voluminous and longer-lasting eruptions.

Obsidian shaping becomes a standard capability. The device can control the cooling rate of erupted magma with precision, producing volcanic glass in any form the mage requires—razor-sharp blades, reflective surfaces, or transparent panels. Rapidly cooled magma forms structural walls of exceptional hardness; slowly cooled magma forms dense, heat-resistant barriers. The mage can build a fortified position from raw earth in under a minute.

At Expert, Magma Surge blurs the line between weapon and architecture. The mage carries the capability to reshape terrain with fire and stone, creating obstacles, weapons, and fortifications from nothing but the ground beneath their feet. The mana cost is substantial but manageable for a high-rank reactor.`,
            master: `The spell operates at the theoretical optimum of geological thermal manipulation for a Tier 2 spell. Magma temperature approaches three thousand degrees Celsius—the practical ceiling of what the device's containment fields can sustain before the molten stone's own radiant energy begins destabilizing the injection cycle. Eruption volume, shaping precision, and subsurface channeling all reach the maximum that Tier 2 seismic and thermal computation can deliver.

The device manages all reservoirs, channels, and active flows autonomously, allowing the mage to focus on tactical decisions while the spell handles the engineering. Obsidian and igneous structures are produced with structural integrity comparable to reinforced concrete, and the mage can switch between creating weapons, barriers, and traps with zero conscious overhead.

This is the ceiling of Magma Surge as a Tier 2 spell. The mage cannot trigger actual volcanic eruptions, cannot melt materials with melting points above approximately three thousand degrees Celsius, and cannot create magma from substrates that lack appropriate mineral composition. The spell transforms what is already present in the ground into a weapon and a tool—nothing more, nothing less—but at Master, it does so with absolute precision and devastating efficiency.`
        }
    },
    {
        id: 'vortex',
        name: 'Vortex',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device establishes a rotating pressure differential at a targeted point within fifteen meters, causing the surrounding air to spin inward and upward in a narrow column roughly two meters across and three meters tall. The resulting vortex is comparable to a strong dust devil—enough to lift loose debris, scatter lightweight objects, and make standing difficult for anyone within a meter of the column. The rotation persists for roughly thirty seconds before the pressure differential equalizes and the vortex dissipates.

The vortex has limited lifting capacity—roughly ten kilograms of sustained vertical force at its core. It will loft dust, papers, and small objects but cannot lift a person. The noise is significant; the spinning column produces a constant roaring sound that makes stealth impossible within earshot. The device requires several seconds to establish the pressure differential, during which the mage must maintain focus on the target point.

At Beginner, Vortex is a disruption and area-denial tool. It creates a distracting, noisy obstacle that forces opponents to reroute and provides the mage with a moment of chaos to exploit. It will not seriously injure a determined opponent, but it makes their life difficult in the immediate vicinity.`,
            apprentice: `The vortex expands to roughly four meters across and six meters tall, with sustained wind speeds at the core exceeding one hundred kilometers per hour. Lifting capacity increases to roughly fifty kilograms—enough to loft a person briefly off their feet and tumble them before depositing them several meters away. The device can now sustain the vortex for up to two minutes by continuously maintaining the pressure differential.

Directional control is introduced. The mage can direct the vortex to move slowly across the ground—roughly walking speed—allowing it to be steered toward opponents or positioned as a mobile barrier. The device can also tilt the vortex axis, creating a horizontal spinning column that sweeps across the battlefield like a rotating wall of wind.

At Apprentice, Vortex becomes a genuine battlefield hazard. It can displace personnel, scatter equipment, and force opponents into unfavorable positions. The mana cost is moderate, and a mid-rank reactor can sustain the vortex through a standard engagement.`,
            adept: `The vortex reaches eight meters across and twelve meters tall, with core wind speeds exceeding two hundred kilometers per hour—sufficient to lift and throw a grown human dozens of meters. The device can sustain the vortex indefinitely while mana holds, and the column can be moved at running speed. Multiple smaller vortices can be spawned from the main column, creating a field of spinning air columns that shred anything loose within a twenty-meter radius.

The lifting capacity at the core exceeds two hundred kilograms. Vehicles, debris, and entire sections of light structures can be torn from their moorings and hurled. The mage can selectively add a suction component to the vortex, pulling opponents inward toward the core rather than merely pushing them away. This makes the spell a trap as well as a weapon—opponents who get too close find themselves drawn into the spinning column.

At Adept, Vortex is a devastating environmental weapon. The mage deploys a mobile, sustained tornado that can be directed with precision, and anything caught in its path is subjected to forces that exceed what unaugmented humans can withstand.`,
            expert: `The vortex expands to fifteen meters across and can extend up to thirty meters tall, with core wind speeds approaching three hundred and fifty kilometers per hour. The device can maintain up to three independent vortices simultaneously, each tracked and steered with independent targeting. The combined lifting capacity of a single expert-level vortex exceeds a thousand kilograms—enough to tear the roof off a small building and deposit it hundreds of meters away.

The pressure differential at the core becomes extreme enough to cause barotrauma in unprotected humans. The rapid pressure changes as the vortex passes can rupture eardrums, damage lungs, and cause disorienting vertigo even in opponents who are not physically lifted. The mage can collapse a vortex on command, creating an implosion that sucks nearby objects toward the point of collapse before releasing the compressed air as a concussive blast.

At Expert, Vortex is a natural disaster in miniature. The mage can deploy tornado-force winds with surgical precision, using them as weapons, barriers, or tools of demolition. The mana cost is high but sustainable for a high-rank reactor through extended engagements.`,
            master: `The spell operates at the theoretical optimum of localized atmospheric pressure manipulation for a Tier 2 spell. A single vortex can reach twenty meters across and forty meters tall with core wind speeds approaching four hundred kilometers per hour—the practical ceiling of what the device's pressure-differential computations can sustain before atmospheric friction and energy dissipation make further acceleration impossible. Up to five independent vortices can be maintained and directed simultaneously.

Each vortex is tracked with millimeter-precision targeting and can be steered, tilted, merged, or collapsed on command with zero conscious overhead. The device handles all atmospheric calculations autonomously. Allies within the mage's operational radius are automatically flagged as protected targets, and the vortices will not draw them in or subject them to harmful pressure changes.

This is the ceiling of Vortex as a Tier 2 spell. The mage cannot create hurricane-scale weather systems, cannot sustain wind speeds beyond what the device's localized pressure differential can generate, and cannot project vortices through environments that lack an atmosphere. Master means the spell has been refined to the absolute limit of Tier 2 aerodynamic manipulation—mobile, precise, devastating, and bounded by the physics of air pressure and computational capacity.`
        }
    },
    {
        id: 'quicksand',
        name: 'Quicksand',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device emits a sustained low-frequency vibration into a patch of ground within ten meters, disrupting the structural bonds between soil particles and forcing groundwater toward the surface. The result is a circular patch of liquefied earth roughly three meters across that behaves like thick mud—anything standing on it begins to sink at a rate of roughly ten centimeters per second. The liquefaction persists for up to a minute after the vibration ceases.

The quicksand is not bottomless; it extends roughly half a meter below the surface before hitting compacted subsoil that the vibration cannot penetrate. A person caught in it sinks to roughly thigh depth before the compacted layer stops them, at which point they are immobilized but not drowning. Extraction requires significant effort—the suction of the liquefied earth makes pulling free difficult without assistance.

At Beginner, Quicksand is a trapping spell. It creates a hazard that can immobilize a single opponent and force others to reroute around the affected area. The spell requires earthen ground with some moisture content—it cannot liquefy solid rock, metal flooring, or bone-dry sand.`,
            apprentice: `The quicksand patch expands to roughly five meters across, and the depth of liquefaction reaches one meter—deep enough to submerge a person to the chest. The device can now maintain the vibration indefinitely, keeping the ground liquefied for as long as the mage channels mana. The sinking rate increases to roughly twenty centimeters per second, and the suction force makes self-extraction extremely difficult without enhanced strength or assistance.

Multiple patches can be created and maintained simultaneously—up to three at once with a mid-rank reactor. The device can selectively liquefy and re-solidify patches on command, allowing the mage to trap opponents and then release allies who stumble into the same hazard. The vibration frequency can be adjusted to affect different soil compositions with greater efficiency.

At Apprentice, Quicksand becomes a tactical terrain-modification tool. The mage can create a field of hidden traps that immobilize opponents while remaining virtually undetectable until triggered—the surface of a quicksand patch looks identical to normal ground until weight is applied.`,
            adept: `The quicksand patch reaches eight meters across with a liquefaction depth of up to two meters. The device can now create quicksand that appears completely stable until a specific trigger condition is met—weight exceeding a threshold, a specific number of footsteps, or a delay timer. This allows the mage to lay traps that opponents walk onto without suspicion, only to have the ground liquefy beneath them without warning.

The suction force increases to the point where even enhanced-strength opponents struggle to extract themselves. The device can selectively liquefy specific sections of ground within the patch, creating channels that guide sinking victims toward or away from specific positions. This allows the mage to control where trapped opponents end up—pulling them toward the mage for capture, or pushing them deeper into the hazard.

At Adept, Quicksand is a concealable, controllable trap system. The mage can prepare an entire area as a minefield of hidden ground hazards, each triggered on the mage's terms. The mana cost per patch is moderate, and the device can maintain several patches indefinitely with a mid-to-high-rank reactor.`,
            expert: `The quicksand patch reaches fifteen meters across with a liquefaction depth of three meters—deep enough to fully submerge a standing human. The device can create patches that selectively affect targets based on bioelectric signature, weight, or device identification, allowing allies to walk across quicksand without triggering it while enemies sink immediately. The liquefaction can be activated and deactivated in under a second, allowing the mage to trap and release with precision timing.

The vibration frequency can be tuned to affect different materials. Metal-reinforced concrete, compacted gravel, and even wooden flooring can be liquefied if the device finds the correct resonant frequency. This dramatically expands the environments where Quicksand can be deployed—no longer limited to natural earthen terrain.

At Expert, Quicksand is a comprehensive terrain-denial system. The mage can turn virtually any surface into a trap, selectively target hostiles, and control the depth and duration of liquefaction with millimeter precision. The spell becomes a strategic tool for area control and prisoner capture.`,
            master: `The spell operates at the theoretical optimum of localized seismic liquefaction for a Tier 2 spell. Patches can reach twenty meters across with a liquefaction depth of five meters, and the device can maintain an unlimited number of patches simultaneously within the mage's operational radius. Each patch is a precisely controlled hazard with customizable trigger conditions, selective targeting, and instant activation or deactivation.

The device maps subsurface composition continuously and adjusts vibration parameters in real time to maintain optimal liquefaction regardless of changing moisture content, temperature, or seismic interference. Allies are protected automatically—the device registers their positions and ensures the ground remains solid beneath their feet even when surrounded by patches of active quicksand.

This is the ceiling of Quicksand as a Tier 2 spell. The mage cannot liquefy bedrock or magically reinforced surfaces, cannot create bottomless pits, and cannot affect substrates that lack particulate structure for the vibrations to disrupt. What Master offers is the most sophisticated, most selective, most lethal ground-based trapping system that Tier 2 seismic manipulation can deliver—turning the very earth beneath an enemy's feet into a weapon.`
        }
    },
    {
        id: 'flash_freeze',
        name: 'Flash Freeze',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device performs a focused thermal extraction on a single target within fifteen meters, dropping the temperature of a roughly one-meter sphere around the target point by approximately two hundred degrees Celsius in under a second. The effect is instantaneous and violent: moisture in the air crystallizes into a dense cloud of ice particles, any liquid on the target freezes solid, and exposed skin suffers immediate cold burns. The freeze persists for roughly ten seconds before ambient heat begins reversing the effect.

The spell targets a point in space rather than a specific creature, making it possible to freeze environmental features—door locks, pipes, standing water—or to target an opponent directly. A direct hit on an unarmored human causes immediate frostbite at the contact zone and a painful but temporary nerve-numbing cold that spreads outward from the point of impact. It will not freeze a person solid, but it can lock a joint or disable a hand for the crucial seconds needed to capitalize.

At Beginner, Flash Freeze is a precision cold weapon. It trades Frost Nova's area of effect for focused intensity on a single target, making it useful for disabling specific threats or manipulating the environment. The spell requires atmospheric moisture or a target that contains water—it cannot freeze dry objects in arid conditions.`,
            apprentice: `The freeze radius expands to two meters, and the temperature drop reaches approximately three hundred degrees Celsius—sufficient to freeze a human limb solid on direct impact if the target lacks thermal protection. The device can now sustain the freeze for up to thirty seconds, keeping the affected zone locked at sub-zero temperatures while the mage takes action. The mana cost is significant but manageable for a mid-rank reactor through a typical engagement.

The spell gains a chain component. On impact, secondary freeze pulses radiate outward from the initial point, each carrying a fraction of the original thermal extraction. Targets within two meters of the primary freeze zone suffer a milder but still painful cold snap that slows movement and numbs extremities. This makes Flash Freeze effective against closely grouped opponents even though it is nominally a single-target spell.

At Apprentice, Flash Freeze becomes a precision disable tool. The mage can freeze a weapon arm solid, lock a door by freezing its mechanism, or create a patch of ice on a walkway that sends an opponent tumbling. The sustained freeze component allows the mage to keep a target immobilized while deciding what to do next.`,
            adept: `The freeze radius reaches three meters with a temperature drop exceeding four hundred degrees Celsius—cold enough to embrittle steel and shatter frozen organic tissue with a firm impact. The device can target a specific region of the body with surgical precision, freezing only the intended area while leaving surrounding tissue functional. This allows the mage to disable without killing: freeze a hand to drop a weapon, freeze a leg to prevent escape, freeze a throat to silence without suffocation.

The sustained freeze becomes indefinite while the device maintains thermal extraction. The mage can hold a target in a state of frozen immobility for as long as mana holds, creating a prison of ice that is painful but not necessarily lethal. The device compensates for the target's body heat, continuously extracting thermal energy faster than metabolism can produce it.

At Adept, Flash Freeze is a precision weapon and capture tool. The mage can disable opponents with selective, non-lethal freezing or deliver devastating cold injuries to specific body regions. The spell's focused nature makes it more mana-efficient than Frost Nova for single-target engagements.`,
            expert: `The freeze radius reaches five meters with a temperature drop approaching five hundred degrees Celsius—sufficient to flash-freeze most organic matter solid in under a second. A direct hit on a human target without thermal protection results in total body freeze: tissue crystallizes, blood solidifies, and the target becomes a frozen statue. The device can selectively thaw specific regions while keeping the rest frozen, allowing the mage to interrogate a frozen prisoner by thawing their head while keeping their body immobilized.

The spell can be channeled into a sustained beam rather than an instantaneous pulse. The beam maintains a continuous thermal extraction along its path, freezing everything it touches. This allows the mage to sweep the beam across a battlefield, creating walls of ice, freezing corridors, and denying movement through specific areas. A high-rank reactor can sustain the beam for over a minute of continuous output.

At Expert, Flash Freeze is both a lethal weapon and a precision tool. The mage can freeze opponents solid, create ice structures from ambient moisture, and shape the battlefield with walls and barriers of frozen air and water. The spell's versatility makes it one of the most tactically flexible cold-based routines available.`,
            master: `The spell operates at the theoretical optimum of focused thermal extraction for a Tier 3 spell. The freeze radius reaches eight meters with a temperature drop that approaches six hundred degrees Celsius—the practical ceiling of what Tier 3 thermal-compression architecture can sustain before the extraction cycle destabilizes. The device can freeze virtually any conventional material solid in under a second, and the sustained beam mode can maintain sub-zero temperatures along its entire path indefinitely while mana holds.

Selective thawing and refreezing is instantaneous and requires no conscious direction—the device reads the mage's intent and adjusts thermal output accordingly. A frozen opponent can be kept in a state of suspended animation indefinitely, their biological processes halted at the molecular level by the cold, with zero risk of tissue damage from thaw-related cellular rupture. This makes Flash Freeze one of the most effective non-lethal containment tools in a mage's arsenal.

This is the ceiling of Flash Freeze as a Tier 3 spell. The mage cannot reduce temperatures to absolute zero, cannot freeze targets shielded by thermal barriers of equal or higher tier, and cannot freeze matter that lacks thermal energy to extract. The spell provides the most precise, most lethal, and most versatile focused cold weapon that Tier 3 computation can deliver—capable of both surgical disable and devastating area control.`
        }
    },
    {
        id: 'inferno',
        name: 'Inferno',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device superheats the air in a roughly five-meter radius around a targeted point within twenty meters, raising the temperature to approximately five hundred degrees Celsius in under two seconds. The sudden heat blast ignites flammable materials, causes first-degree burns on exposed skin, and creates a shimmering haze that distorts vision through the zone. The inferno persists for roughly thirty seconds before the device's thermal output wanes and ambient cooling takes over.

The heat is diffuse rather than focused—this is not a cutting beam or a concentrated plasma projectile but a zone of superheated air that punishes everything within it. Unprotected humans suffer immediate heat exhaustion and superficial burns; armored opponents are insulated but experience dangerous internal temperatures after more than a few seconds of exposure. The device must maintain line of sight to the target point for the duration of the heating cycle.

At Beginner, Inferno is an area-denial tool that creates a zone of extreme heat opponents must avoid. It will not incinerate a target outright, but it makes an area hostile to unprotected life for the duration. The spell is ineffective against targets with active thermal shielding and cannot function in environments that dissipate heat faster than the device can generate it, such as deep water or vacuum.`,
            apprentice: `The temperature reaches approximately eight hundred degrees Celsius and the radius expands to eight meters. The heat zone persists for up to two minutes, and the device can now shape the inferno—concentrating heat into a narrower column for greater intensity or spreading it across a wider area for broader denial. Sustained exposure causes second-degree burns within seconds and ignites most common materials on contact.

The device introduces oxygen management. By controlling the availability of oxygen within the inferno zone, the mage can prevent the combustion of specific materials or exacerbate it in others. This allows the creation of "clean" infernos that burn hot but produce minimal smoke, or suffocating firestorms that consume oxygen so rapidly that targets within the zone asphyxiate before they burn. The tactical flexibility is significant.

At Apprentice, Inferno becomes a sustained lethal hazard. A target caught in the zone without thermal protection will die from burn injuries within minutes. The mana cost is substantial but manageable for a mid-rank reactor through a typical engagement.`,
            adept: `The temperature reaches approximately twelve hundred degrees Celsius—hot enough to melt aluminum and soften steel—with a radius of twelve meters. The inferno can be maintained indefinitely while mana holds, and the device manages all thermal calculations autonomously. The mage can create moving walls of fire, fire tornadoes by combining Inferno with atmospheric manipulation, and precisely controlled burn zones that advance or retreat on command.

The oxygen management system becomes sophisticated enough to support selective combustion. The mage can designate zones within the inferno where specific materials burn while others remain untouched—burning the supports of a structure while leaving its contents intact, or igniting an opponent's equipment while preserving evidence on their person. The inferno can also be made to burn without visible flame, producing an invisible zone of superheated air that kills without warning.

At Adept, Inferno is a devastating environmental weapon. The mage controls fire with the precision of a pyrotechnic engineer, creating zones of lethal heat that can be shaped, moved, and controlled with tactical flexibility. The spell demands a high-rank reactor for sustained output.`,
            expert: `The temperature exceeds two thousand degrees Celsius with a radius of twenty meters. The inferno can melt structural steel on contact and ignite virtually any organic material within seconds. The device achieves near-perfect thermal containment—heat radiates inward rather than outward, allowing the mage to create zones of annihilating heat immediately adjacent to areas of normal temperature. An ally can stand one meter from the edge of an expert-level inferno and feel only warmth.

The spell can be channeled into a sustained beam that projects a line of superheated air up to fifty meters long. Anything caught in the beam's path is subjected to the full thermal output—metal flows, stone cracks from thermal stress, and organic matter carbonizes in seconds. The beam can be swept across a battlefield, carving a burning path through opposition.

At Expert, Inferno is a weapon of concentrated destruction. The mage wields fire with the precision of a surgeon's scalpel and the force of a blast furnace, creating and controlling infernos that would require fuel and oxygen that the device simply conjures through mana-driven thermal manipulation. The mana cost is extreme but within the budget of a high-rank reactor for combat-duration engagements.`,
            master: `The spell operates at the theoretical optimum of sustained thermal generation for a Tier 3 spell. The inferno reaches temperatures of approximately twenty-five hundred degrees Celsius—the practical ceiling of what the device's mana-to-heat conversion can sustain before the thermal output begins degrading the device's own containment architecture. The radius extends to twenty-five meters, and the device manages all thermal calculations with zero conscious overhead.

The mage can create and control multiple independent infernos simultaneously, each with its own temperature, shape, and movement parameters. The oxygen management system operates at molecular precision, allowing the mage to burn or spare any material within the zone with absolute selectivity. The thermal containment is so precise that the mage can create a corridor of normal temperature through the center of an inferno, walking through their own firestorm unharmed.

This is the ceiling of Inferno as a Tier 3 spell. The mage cannot generate temperatures that exceed the mana-to-heat conversion limit of Tier 3 computation, cannot create fire in a true vacuum where there is nothing to heat, and cannot burn through thermal barriers of equal or higher tier. What Master provides is the most devastating, most precise, most controlled sustained fire-weapon that Tier 3 thermal manipulation can achieve.`
        }
    },
    {
        id: 'hailstorm',
        name: 'Hailstorm',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device draws atmospheric moisture upward and flash-freezes it into a cloud of ice pellets roughly the size of golf balls, then accelerates them downward in a concentrated barrage covering a circular area roughly ten meters across. The hail falls for approximately ten seconds, delivering thousands of impacts across the target zone. Individual pellets strike with the force of a thrown stone—painful but rarely lethal, though sustained exposure causes bruising, lacerations, and potential concussion from head strikes.

The device requires several seconds to condense and freeze sufficient moisture before the barrage begins, during which the target area is marked by a sudden darkening of the sky as the ice cloud forms. This gives alert opponents a brief window to seek cover. The spell requires atmospheric moisture—in arid environments, the device cannot generate enough ice to produce a meaningful barrage.

At Beginner, Hailstorm is an area-suppression tool. It forces opponents under cover, disrupts formations, and creates a window of chaos the mage can exploit. It will not reliably kill, but the sheer volume of falling ice makes operating in the target zone impractical for unprotected personnel.`,
            apprentice: `The hail pellets grow to the size of tennis balls and fall with significantly greater force—each impact comparable to a blow from a moderate-caliber projectile. The barrage duration extends to thirty seconds, and the target area expands to fifteen meters. The device can now direct the hailstorm's focus, concentrating more pellets into a specific quadrant of the target zone for saturation bombardment.

The device introduces a pre-impact condensation cloud that obscures the target zone, reducing visibility and adding a concealment component to the spell's offensive capability. Opponents caught in the storm face not just the physical impact of hail but also the disorienting effect of near-zero visibility and the deafening noise of thousands of ice impacts.

At Apprentice, Hailstorm becomes a lethal area weapon. Unprotected humans in the target zone suffer serious injuries within seconds, and the combination of physical impact and reduced visibility makes the spell effective at breaking defensive positions. The mana cost is moderate for the sustained output.`,
            adept: `The hail pellets reach the size of softballs, accelerated to terminal velocity and beyond by the device's pressure-differential guidance. The target area expands to twenty-five meters, and the barrage can be sustained for up to a minute. Each pellet strikes with lethal force on direct impact—comparable to a subsonic bullet—capable of penetrating light body armor and causing fatal head or torso wounds. The volume of fire is extraordinary: thousands of lethal ice projectiles falling across the target zone every second.

The device can now create targeted hail corridors—narrow streams of concentrated hail that sweep across the battlefield like the beam of a searchlight. This allows the mage to engage moving targets with precision rather than relying on area saturation. The corridors can be swept, rotated, and redirected in real time, tracking opponents as they attempt to flee the storm.

At Adept, Hailstorm is a devastating area-denial weapon with lethal precision. The mage can blanket a zone in lethal ice or direct focused corridors of hail at specific targets. The spell requires a high-rank reactor for sustained output at this intensity.`,
            expert: `The hail pellets are compressed to maximum density—ice harder than stone, each projectile roughly the size of a baseball and traveling at supersonic speeds. The target area reaches forty meters, and the barrage can be sustained indefinitely while mana holds. Each pellet carries kinetic energy comparable to a rifle round, and the density of fire is sufficient to shred vegetation, damage light vehicles, and make any exposed position suicidal.

The device introduces shrapnel hail—pellets that fragment on impact into a spray of razor-sharp ice shards, each traveling outward at high velocity. This dramatically increases the lethal radius of each impact, creating a secondary zone of fragmentation damage around every strike point. The cumulative effect is a storm of shrapnel that makes even partial cover inadequate.

At Expert, Hailstorm is a weapon of annihilation. The mage calls down a storm of lethal ice that renders a large area impassable to unprotected personnel and dangerous even to armored targets. The mana cost is extreme but within the budget of a high-rank reactor for combat-duration engagements.`,
            master: `The spell operates at the theoretical optimum of atmospheric ice-generation and kinetic acceleration for a Tier 3 spell. The hail pellets are grown with flawless crystalline density—each one a compressed projectile harder than tempered steel, accelerated to the maximum velocity the device's atmospheric manipulation can sustain. The target area reaches fifty meters, and the barrage can be sustained with optimized mana efficiency for extended engagements.

The device manages all moisture extraction, freezing, acceleration, and targeting autonomously. The mage simply designates a target area or specific opponents, and the device delivers the optimal hail configuration—saturation bombardment for area denial, focused corridors for precision engagement, or shrapnel hail for maximum lethality against entrenched targets. The mana cost per pellet is the theoretical minimum for Tier 3 thermal-extraction and kinetic-acceleration routines.

This is the ceiling of Hailstorm as a Tier 3 spell. The mage cannot call down hail from the actual upper atmosphere, cannot generate ice in a vacuum, and cannot accelerate pellets beyond the device's atmospheric-manipulation limits. What Master provides is the most lethal, most efficient, most versatile ice-based area weapon that Tier 3 computation can sustain—a storm of killing cold that scours the battlefield clean.`
        }
    },
    {
        id: 'whirlpool',
        name: 'Whirlpool',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device establishes a rotational current in a body of water within twenty meters, creating a whirlpool roughly three meters across on the surface. The rotation pulls floating objects toward the center and draws surface water downward in a slow but steady vortex. The pull is moderate—roughly equivalent to a strong swimmer's ability to resist—but sustained exposure in the center makes swimming outward progressively more difficult as the current strengthens toward the core.

The whirlpool requires an existing body of water at least one meter deep. A puddle won't suffice; the device needs enough water mass to establish a self-sustaining rotational flow. The spell persists for roughly five minutes before the rotational energy dissipates. The device must maintain line of sight to the water surface during the initial creation phase.

At Beginner, Whirlpool is an environmental hazard that exploits terrain. It can trap boats, pull swimmers under, and create a localized navigation hazard in any body of water the mage can access. It will not instantly drown a capable swimmer, but it creates a dangerous zone that punishes inattention and limits water-based movement.`,
            apprentice: `The whirlpool expands to roughly six meters across with significantly stronger rotational force. The current at the edge is now strong enough to sweep an average swimmer off their feet, and the center draws objects down with force comparable to a rip current. The device can sustain the whirlpool indefinitely by continuously injecting rotational energy, and the depth requirement drops to roughly half a meter—the device can create a functional whirlpool in knee-deep water.

The device gains the ability to create underwater whirlpools—invisible from the surface but capable of pulling swimmers and divers down with alarming force. This makes the spell effective against amphibious opponents or anyone attempting to approach through water. The mage can also reverse the whirlpool's rotation on command, creating an upward surge that can launch objects or people out of the water.

At Apprentice, Whirlpool becomes a genuine threat to anyone operating in or near water. The spell's dual nature—surface and subsurface—makes water approach extremely hazardous. The mana cost is moderate for the sustained output.`,
            adept: `The whirlpool reaches ten meters across with rotational force capable of capsizing small boats and pulling fully equipped swimmers to the bottom. The device can now create whirlpools in any water source, no matter how shallow, by compressing available moisture into a denser volume and spinning it. Even a deep puddle can become a dangerous trap. The depth of the vortex extends to the full depth of the water body.

Multiple whirlpools can be created and maintained simultaneously—up to three at once with a high-rank reactor. The device can synchronize the whirlpools, creating interconnected current patterns that make navigation through an affected water body virtually impossible. Opponents attempting to avoid one whirlpool are pushed into the current of another, creating a zone of churning water that no swimmer can escape.

At Adept, Whirlpool is a water-denial weapon of extraordinary effectiveness. The mage can render any body of water impassable, trap underwater opponents, and create interlocking current systems that turn a lake or river into a lethal hazard zone.`,
            expert: `The whirlpool reaches twenty meters across with rotational force sufficient to tear apart small watercraft and hold even enhanced swimmers against the bottom. The device can create whirlpools in any fluid medium, not just water—acid pools, molten metal, and even thick fog can be set spinning, though the effect is most dramatic in liquid. The depth of the vortex extends indefinitely through the water column.

The mage can now create a maelstrom—a massive, self-sustaining whirlpool that draws water from the surrounding area and projects it outward as a towering spout. The maelstrom functions as both a weapon and a barrier: the spinning column of water blocks line of sight, deflects lightweight projectiles, and creates a zone of extreme turbulence that makes approach by any means—boat, swim, or flight—treacherous.

At Expert, Whirlpool is a weapon that turns the mage's environment against opponents. Any body of water becomes a threat, and the maelstrom capability creates a mobile, devastating water-weapon that the mage can direct with precision.`,
            master: `The spell operates at the theoretical optimum of hydrodynamic rotation for a Tier 3 spell. The whirlpool can reach thirty meters across with rotational force that exceeds anything found in natural water systems, and the device can maintain an unlimited number of simultaneous vortices within the mage's operational radius. The maelstrom capability is refined to produce a stable, directed water spout up to fifty meters tall that can be moved across the battlefield at the mage's command.

The device manages all current calculations, synchronization patterns, and fluid dynamics autonomously. The mage simply designates water hazards and target areas, and the device creates the optimal vortex configuration—single massive whirlpools for area denial, interconnected current networks for trapping, or directed maelstroms for offensive deployment. The mana cost per vortex is optimized to the theoretical minimum for Tier 3 hydrodynamic manipulation.

This is the ceiling of Whirlpool as a Tier 3 spell. The mage cannot create whirlpools without a fluid medium, cannot control water beyond the volume the device's rotational force can affect, and cannot extend the vortex into environments that lack sufficient fluid mass. What Master provides is the most lethal, most versatile water-based weapon and denial system that Tier 3 hydrodynamic computation can sustain—turning any body of water into a killing field.`
        }
    },
    {
        id: 'vacuum_sphere',
        name: 'Vacuum Sphere',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device creates a spherical zone of significantly reduced atmospheric pressure—roughly one-third normal—at a point within fifteen meters. The zone is approximately one meter across and persists for roughly ten seconds. The sudden pressure drop causes discomfort in nearby ears, forces gases out of sealed containers, and makes breathing labored for anyone standing within the zone. The effect is akin to standing at high altitude: uncomfortable but survivable for short periods.

The pressure differential at the boundary creates a steady inward airflow as surrounding atmosphere rushes to fill the void. This produces a constant howling wind at the edges of the sphere that can blow lightweight objects inward and makes standing near the boundary difficult. The device must continuously extract air molecules from the zone to maintain the low pressure, consuming mana at a moderate rate.

At Beginner, Vacuum Sphere is a disruption tool. It interferes with combustion-based weapons and spells—flames sputter and die within the zone—and the pressure differential creates an environment hostile to unacclimated opponents. The spell requires an atmosphere to function; in vacuum or near-vacuum environments, there is nothing to extract.`,
            apprentice: `The pressure within the sphere drops to roughly one-tenth normal—comparable to the atmospheric pressure at the edge of space. Unprotected humans within the zone experience rapid decompression: lung damage, burst eardrums, and nitrogen embolisms begin within seconds of exposure. The sphere expands to two meters across, and the boundary winds become violent enough to knock a person off balance.

The device can now shape the low-pressure zone into a directed cone rather than a sphere, creating a "vacuum lance" that projects the decompression effect in a specific direction. This is useful for breaching sealed environments—doors, hatches, vehicle cabins—by equalizing their internal pressure with the sudden low-pressure zone. Flames within the cone are immediately extinguished, and any combustion-dependent system fails.

At Apprentice, Vacuum Sphere becomes a genuinely dangerous weapon against unprotected targets. Direct exposure causes rapid decompression injuries, and the spell's ability to extinguish fire makes it a potent counter to combustion-based mages and equipment. The mana cost is significant but manageable for a mid-to-high-rank reactor.`,
            adept: `The sphere can achieve near-vacuum conditions—less than one percent of normal atmospheric pressure—within a three-meter radius. At this pressure, human tissues begin to swell as dissolved gases come out of solution; blood begins to boil at body temperature; and consciousness is lost within seconds. The device can sustain the near-vacuum indefinitely, and the boundary winds reach hurricane force, creating a zone of extreme turbulence around the perimeter.

The vacuum lance becomes a sustained beam that can be swept across a battlefield, extinguishing fires, silencing explosions by denying them reactants, and incapacitating anyone it passes over through rapid decompression. The mage can also create a vacuum corridor—a narrow tube of near-vacuum that eliminates air resistance within its path, allowing physical projectiles or thrown objects to travel at significantly higher velocities than normal.

At Adept, Vacuum Sphere is a lethal environmental weapon. The mage controls atmospheric pressure itself, creating zones where humans cannot survive and corridors where physics favor high-velocity attacks. The spell demands a high-rank reactor for sustained near-vacuum output.`,
            expert: `The sphere achieves true vacuum within a five-meter radius—zero atmospheric pressure, a pocket of near-total nothingness. The boundary is razor-sharp, transitioning from normal atmosphere to hard vacuum across a distance of centimeters. The decompression shock at the boundary is violent enough to rupture tissues and tear lightweight objects inward. The device can maintain the vacuum indefinitely, and the mage can create multiple independent vacuum zones simultaneously.

The vacuum corridor expands to accommodate personnel and vehicles, allowing the mage to create a frictionless highway for allies while surrounding enemies struggle with normal atmospheric resistance. The mage can also create targeted vacuum pockets around specific opponents—removing the air from their immediate vicinity and causing instant incapacitation through asphyxiation and decompression.

At Expert, Vacuum Sphere is a weapon that attacks the very medium opponents breathe. The mage can selectively suffocate targets, create frictionless travel corridors, and extinguish any combustion-based threat by denying it reactants. The mana cost is extreme but sustainable for a high-rank reactor through combat-duration engagements.`,
            master: `The spell operates at the theoretical optimum of localized atmospheric removal for a Tier 3 spell. The vacuum zones can reach ten meters across with perfect containment, and the device can maintain any number of simultaneous zones within the mage's operational radius, limited only by mana throughput. The boundary is razor-sharp—no gradual pressure gradient, just an instant transition from normal atmosphere to hard vacuum.

The device manages all atmospheric calculations autonomously, creating, maintaining, and collapsing vacuum zones with zero conscious overhead. The mage can selectively remove air from around hostiles while maintaining normal pressure for allies standing mere meters away. The vacuum corridors can be created and maintained as permanent travel routes, allowing allies to move at extreme velocities without air resistance.

This is the ceiling of Vacuum Sphere as a Tier 3 spell. The mage cannot remove atmosphere from an entire region—the device's extraction capacity is limited to discrete zones. The spell cannot create vacuum in environments that are already vacuum, and it cannot remove substances other than atmospheric gases. What Master provides is the most precise, most lethal, most versatile atmospheric-denial weapon that Tier 3 computation can sustain—turning the air itself into a weapon and a tool.`
        }
    },
    {
        id: 'crystal_formation',
        name: 'Crystal Formation',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device identifies mineral content in the surrounding substrate—silica, carbonates, salts—and uses targeted thermal and pressure manipulation to accelerate crystallization at a specific point within ten meters. A cluster of crystals roughly the size of a basketball grows from the targeted surface over approximately five seconds, forming sharp, faceted structures comparable in hardness to quartz. The crystals are natural mineral formations—genuine stone, not mana constructs—and persist permanently after the spell completes.

The crystals can serve as improvised caltrops, handholds, or cover. Their edges are sharp enough to cut skin and puncture light footwear, but they lack the structural integrity to serve as meaningful barriers against determined force. The device must have appropriate mineral substrate to work with—pure metal surfaces or magically purified environments provide nothing to crystallize.

At Beginner, Crystal Formation is a utility spell with modest combat application. The mage can create sharp obstacles, improvised tools, or simple structures from the minerals present in the environment. The spell's value increases dramatically in environments rich in mineral content—caves, mines, concrete structures—where the device has abundant raw material to work with.`,
            apprentice: `The crystal growth accelerates dramatically—structures up to the size of a person form in under three seconds, and the device can now select the crystalline structure for optimal properties. Prismatic quartz for hardness, crystalline salt for solubility traps, or layered calcite for structural strength. The crystals' hardness reaches that of industrial ceramics, making them resistant to small-arms fire and useful as emergency barricades.

Multiple crystal formations can be grown simultaneously—up to three independent structures at once with a mid-rank reactor. The device can interlock crystalline growths, creating walls, pillars, and dome structures with surprising structural integrity. The formations can be grown on any surface that contains trace minerals, which includes virtually all natural and most artificial environments.

At Apprentice, Crystal Formation becomes a rapid fortification tool. The mage can raise crystal walls to block corridors, create crystalline caltrops to deny passage, or grow interlocking crystal structures that serve as functional cover. The spell's permanence means these structures remain after the mage moves on, creating lasting terrain modifications.`,
            adept: `The device achieves near-instantaneous crystal growth—large structures form in under a second. The crystals can now be grown with specific internal architectures: hollow tubes for piping, lattice structures for lightweight strength, or solid blocks for maximum density. The hardness reaches that of sapphire, making the crystals resistant to all but heavy weaponry. The device can grow crystals from virtually any mineral content, and the growth rate is limited only by the available substrate.

Living crystal formations become possible. The device maintains a mana link to the crystals it has grown, allowing the mage to trigger continued growth, retraction, or reshaping at will. Crystal walls can grow additional protrusions to impale opponents who press against them; crystal barriers can seal breaches by growing shut; crystal weapons can extend their reach mid-swing. The mana link requires continuous but minimal expenditure.

At Adept, Crystal Formation is a weapon, a shield, and an engineering tool. The mage can create and reshape crystalline structures in real time, adapting their environment to any tactical requirement. The living crystal capability makes the formations dynamic rather than static—growing, shifting, and responding to threats as they develop.`,
            expert: `The device pushes crystalline hardness to the practical limit of naturally occurring mineral structures—approaching the hardness of diamond. Crystal formations can be grown at rates exceeding a meter per second, and the device can maintain an unlimited number of living crystal structures simultaneously. The formations can be grown with internal mana circuits that allow them to channel and store magical energy, turning crystal walls into defensive wards and crystal weapons into mana-conducting conduits.

Composite crystal structures become available—formations that blend multiple mineral types into a single growth with zones of different properties. A defensive wall might have a diamond-hard outer face, a shock-absorbing calcite core, and conductive quartz channels for mana circulation. The device calculates the optimal crystal architecture for any intended purpose and grows it with molecular precision.

At Expert, Crystal Formation blurs the line between spellcasting and engineering. The mage can construct elaborate crystalline structures with specialized properties, maintain them as living formations that respond to threats, and create crystalline devices that perform functions ranging from defense to energy storage. The mana cost is substantial but well within the budget of a high-rank reactor.`,
            master: `The spell operates at the theoretical optimum of mineral crystallization and manipulation for a Tier 4 spell. Crystal growth rates exceed five meters per second, and the formations achieve hardness at the absolute limit of what mineral structures can sustain—approaching synthetic diamond with none of the brittleness. The device can grow any crystalline structure from any available mineral content with molecular precision, and living crystal formations respond to the mage's intent with zero conscious overhead.

The internal mana circuitry in expert-level formations is refined to allow crystals to function as standalone magical devices—defensive wards that activate on proximity, energy capacitors that store and release mana on command, and sensor arrays that detect and report environmental changes. The mage can create a self-sustaining crystal fortress with automated defensive systems, all grown from the minerals present in the ground beneath their feet.

This is the ceiling of Crystal Formation as a Tier 4 spell. The mage cannot create crystals from nothing—the spell works with existing mineral content, not empty air. The formations cannot exceed the hardness limits of their mineral composition regardless of the device's pressure-manipulation capabilities. And the living crystal link requires the device to maintain a connection; if the mage moves beyond operational range, the formations become inert. What Master offers is the most sophisticated, most versatile crystalline engineering system that Tier 4 mineral manipulation can deliver—turning the very earth into a fortress.`
        }
    }
];
// Merge batch1 into spellData
if (typeof spellData !== "undefined" && spellData.elemental) {
    spellData.elemental = spellData.elemental.concat(elementalSpellsBatch1);
}
// Elemental Spells Part 2 (19-31) for Mages CYOA
// Rewritten 2026-05-03

const elementalSpellsBatch2 = [
    {
        id: 'steam_burst',
        name: 'Steam Burst',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device identifies a water source within fifteen meters—a puddle, a pipe, or ambient humidity if sufficient—and flash-heats it to just above the boiling point in under a second. The resulting cloud of steam expands rapidly, creating a zone of scalding, sight-obscuring vapor about five meters across that persists for roughly twenty seconds before dispersing.

The steam is hot enough to cause first-degree burns on exposed skin and severe discomfort to anyone caught inside the cloud. Forced inhalation can scald the throat and lungs, making it difficult for opponents to breathe or coordinate. The mage must have line-of-sight to the target water source, and the device calculates the precise energy input required to maximize vapor production without wasting mana on excess heat.

At Beginner, Steam Burst is an area-denial and disengagement tool. It will not kill a determined opponent, but it creates enough chaos—blinding steam, searing heat, coughing—that the mage can reposition, escape, or set up a follow-up attack. The spell is ineffective in extremely cold or arid environments where available moisture is scarce.`,

            apprentice: `The device achieves precise thermal calibration, heating water to exactly 105-110 degrees Celsius with the minimum energy needed for maximum expansion. The steam cloud now covers roughly ten meters and persists for up to forty seconds. The water source can be as small as a cupful—the device's efficiency at thermal transfer means even trace moisture behind a wall can be targeted through known material density calculations.

The steam is now hot enough to cause second-degree burns within the first ten seconds of exposure, and the device maintains continuous heating as long as moisture remains in the target zone—effectively recirculating and reheating the steam rather than letting it dissipate naturally. This turns a momentary burst into a persistent hazard that opponents must actively avoid.

At Apprentice, Steam Burst can reliably clear a room or block a corridor. The mage can fire the spell into one area while maneuvering through another, using the steam as both cover and deterrent. Opponents with sealed combat gear or environmental protection can push through, but not comfortably.`,

            adept: `The device extracts moisture from the environment itself—air humidity, groundwater seeping through soil, even the water content of nearby plant matter—eliminating the need for a visible water source. The steam cloud now covers roughly twenty meters and reaches temperatures of 120 degrees Celsius at its core, sufficient to cause third-degree burns on sustained contact and melt exposed synthetics.

The device modulates the cloud's density and temperature in real time. The mage can command sections of the cloud to thin, providing firing lanes for ranged attacks, then thicken again to deny counter-fire from the same angle. The cloud can be shaped into walls, corridors, or a dome encasing the mage as a defensive shroud. Opponents inside the cloud are tracked through thermal differential readouts fed to the mage's awareness.

At Adept, Steam Burst is a tactical environment-shaping spell. The mage defines the battlefield on their terms, using shifting walls of scalding vapor to isolate targets, break line-of-sight, and funnel opponents into prepared kill zones.`,

            expert: `The device achieves a closed-loop steam cycle that can sustain the cloud for several minutes from a single moisture extraction. Core temperatures reach 150 degrees Celsius, hot enough to boil water on contact and melt standard infantry gear. The cloud is now a weapon in its own right—opponents caught inside without heavy environmental protection suffer fatal burns within thirty seconds and asphyxiation from superheated airway damage.

The device layers the steam with mana-infused particulates that scatter active sensor emissions—thermal imaging, lidar, and lower-tier magical detection are all degraded within the cloud. This makes the steam an effective counter to technologically or magically augmented opponents who rely on non-visual targeting.

At Expert, the mage can blanket an entire city block in scalding fog, turning urban terrain into a hostile environment where only the mage—fed targeting data by the device—can see and fight effectively.`,

            master: `The spell runs at its theoretical optimum for Tier 2. The device flash-extracts moisture from any available source—air, ground, living tissue—and sustains a precisely modulated steam field covering up to forty meters for as long as mana and moisture hold. Core temperatures push 160 degrees Celsius, sufficient to kill an unprotected human in under fifteen seconds and render standard protective gear inadequate within a minute.

The cloud's density, temperature, opacity, and sensor-scattering properties are all independently adjustable in real time across different sections of the field. The device can create corridors of clear air for allies while maintaining lethal conditions for hostiles in the same cloud, using continuous biometric differentiation to avoid friendly fire. The spell functions with minimal conscious oversight.

This is the ceiling of Steam Burst as a Tier 2 spell. The mage cannot flash-boil oceans or generate steam ex nihilo without a moisture source. The cloud cannot reach plasma temperatures or maintain itself indefinitely. Master means the spell is an optimized, lethal, and tactically flexible environmental control tool—but it remains bounded by the availability of water and the thermal limits of Tier 2 computation.`
        }
    },
    {
        id: 'plasma_lance',
        name: 'Plasma Lance',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device captures ambient gas—typically atmospheric nitrogen or oxygen—within a magnetic containment bottle generated at the mage's palm or device aperture. It then pumps energy into the bottled gas until it ionizes into a plasma state at approximately 6,000 to 8,000 degrees Celsius. The magnetic bottle is released along a single vector, creating a pencil-thin beam of superheated ionized matter with a range of roughly ten meters.

The beam persists for about two seconds per activation. During this window, it cuts through steel plate up to two centimeters thick, vaporizes organic tissue on contact, and transfers enough thermal energy to ignite combustible materials within a meter of the impact point. The beam is brilliant blue-white and produces a sharp crackling sound as it ionizes the air along its path.

At Beginner, Plasma Lance is a limited-ammunition armor-piercing tool. Each activation costs significant mana, and the device requires roughly a second between shots to cool the magnetic containment coils and reset the gas capture cycle. The mage must aim carefully—the beam is narrow, and a miss wastes both mana and the precious seconds of cooldown.`,

            apprentice: `The device refines the magnetic bottle geometry, producing a beam roughly one centimeter in diameter that sustains for up to five seconds and reaches fifteen meters. Plasma temperature increases to roughly 12,000 degrees Celsius. The containment field stays coherent for the full beam duration, meaning the plasma does not dissipate until it reaches maximum range or impacts a target.

Cutting capability increases significantly—the beam now penetrates up to five centimeters of hardened steel or a reinforced concrete wall of similar thickness. The device pre-captures and ionizes a larger volume of gas, storing it in a compressed magnetic buffer so that the mage can fire twice in quick succession before the cooldown cycle is needed.

At Apprentice, Plasma Lance is a breaching tool as much as a weapon. The mage can cut through bulkheads, disable armored vehicles with a well-placed shot, or drill precise holes through obstacles. The narrow beam still demands accuracy, but the sustained duration means the mage can sweep the beam across a target rather than relying on a single pinpoint strike.`,

            adept: `The device achieves plasma temperatures of approximately 20,000 degrees Celsius and extends maximum range to twenty-five meters. The beam can be sustained for up to fifteen seconds continuously, and the magnetic bottle now includes a self-feeding mechanism—the plasma itself ionizes additional atmospheric gas as it travels, maintaining beam coherence without significant energy loss over distance.

Penetration reaches twenty centimeters of hardened steel or a meter-thick concrete barrier. The device can also modulate the beam diameter from a surgical millimeter-wide cutter to a fist-thick lance that vaporizes everything in its path. Sweeping the beam through a crowd of unarmored targets is as effective as through a single armored one—the plasma does not stop at the first point of impact.

At Adept, Plasma Lance is a strategic weapon at the personal scale. The mage can disable armored vehicles from the front arc, cut through bunker walls, and engage multiple targets in a single sustained sweep. The mana cost is significant, but a mage with a mid-rank reactor can fire sustained beams through a standard engagement.`,

            expert: `The device pushes plasma temperatures past 30,000 degrees Celsius and extends range to fifty meters with sustained duration of thirty seconds or more, limited only by mana and the device's thermal management. The beam can be steered mid-flight—the magnetic bottle is dynamically reshaped by the device to curve the plasma lance around corners or obstacles, allowing the mage to hit targets outside line-of-sight by extending the beam along a computed arc.

The device now captures exotic gas mixtures—fluorine compounds, metallic vapors—and incorporates them into the plasma to produce secondary effects: corrosive residue, electrical discharge, or persistent thermal contamination at the impact site. The beam can drill through multi-layered composite armor, cave in bunkers, and slice structural supports with surgical precision.

At Expert, the mage possesses a weapon that rivals vehicle-mounted directed-energy systems, all running through a palm-sized Intelligent Device. The beam's thermal bloom alone can ignite surroundings for meters around the impact point.`,

            master: `The spell operates at its Tier 4 design ceiling. Plasma temperatures approach 50,000 degrees Celsius—roughly eight times hotter than the surface of the sun—contained and directed by a magnetic bottle of near-perfect efficiency. The beam sustains for as long as mana flows, ranges out to eighty meters, and can be fired in rapid pulses or as a continuous cutting lance at the mage's discretion.

The device handles all thermal management, gas capture, ionization, magnetic confinement, and beam steering autonomously. The mage simply selects a target, and the device delivers plasma along the optimal trajectory—straight or curved—with millimeter precision. The beam cuts through any known conventional material given sufficient dwell time, though dense magical barriers and specialized anti-energy defenses can deflect or absorb it.

This is the ceiling of Plasma Lance as a Tier 4 spell. The mage cannot generate coronal-mass-ejection-scale plasma or cut through kilometers of material. The spell cannot bypass absolute magical defenses, and sustained firing at maximum output will deplete even a high-rank reactor within minutes. What Master provides is a personal-scale directed-energy weapon pushed to the computational and energetic limits of Tier 4—nothing more, nothing less.`
        }
    },
    {
        id: 'acid_spray',
        name: 'Acid Spray',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device analyzes the immediate environment's chemical composition—atmospheric gases, surface residues, trace elements in the air—and synthesizes a corrosive compound from available molecular components. This takes roughly a second of computation, after which the device projects the acid as a cone-shaped spray extending about five meters with a width of roughly two meters at the far end.

The acid is potent enough to cause second-degree chemical burns on exposed skin within seconds and to pit, discolor, or weaken common metals like iron and copper over sustained contact. Aluminum and galvanized steel fare slightly better. The spray is a one-shot burst—once expelled, the device must re-sample and re-synthesize for another dose, a process that takes the same one-second computation cycle.

At Beginner, Acid Spray is a close-range deterrent. It will not kill a healthy opponent instantly, but the pain and disorientation of a face full of synthesized acid can break a charge or force an attacker to disengage. The spell is most useful against unarmored targets or for degrading equipment left unattended. In heavy rain or under continuous water exposure, the acid dilutes rapidly and loses effectiveness.`,

            apprentice: `The device synthesizes a more aggressive formulation—sulfuric-acid-analogues with a pH approaching 1, capable of deep tissue burns and rapid metal corrosion. The spray cone extends to eight meters with a three-meter spread, and the device can now sustain a continuous stream for up to five seconds rather than a single burst, maintaining the chemical reaction in real time through constant synthesis.

The acid now eats through standard infantry armor—ceramic plates degrade after a few seconds of exposure, and polymer-based gear softens and cracks. The device tracks the spray's dispersal in real time and adjusts the synthesis to account for wind, humidity, and target movement, minimizing waste and keeping the stream on-target longer.

At Apprentice, Acid Spray transitions from deterrent to lethal hazard. A sustained hit to an unarmored opponent causes permanent disfigurement, blindness if the eyes are exposed, and fatal chemical burns if the spray reaches the airway. Against equipment, the spell can disable weapons, breach seals, and destroy sensitive electronics through corrosive seepage.`,

            adept: `The device stores pre-computed chemical templates for a range of corrosive agents—oxidizing acids for metals, protein-denaturing compounds for organic tissue, solvent-based mixtures for synthetic materials—and selects the optimal formulation for the target type within milliseconds of detection. The spray cone covers twelve meters with a four-meter spread, and the stream can be sustained indefinitely as long as environmental precursors are available.

The acid now has persistent adhesion. The device coats the expelled droplets in a thin mana film that binds them to surfaces, preventing dilution from water or displacement from physical wiping. A target hit by the spray continues to corrode for minutes after the initial contact, and the spreading corrosion can compromise structural integrity well beyond the point of impact.

At Adept, Acid Spray is a versatile anti-material and anti-personnel weapon. The mage can alternate between melting through a bulkhead with oxidizing acid and disabling a group of soldiers with tissue-eating compounds, all from the same spell routine. Environmental contamination becomes a secondary hazard—the spell leaves behind toxic residue that can deny terrain for hours.`,

            expert: `The device synthesizes corrosive agents that operate at the molecular level, breaking down covalent bonds rather than simply reacting at the surface. The spray cone reaches twenty meters with a six-meter spread, and the device can shape the dispersal pattern—narrow jet for penetration, wide mist for area coverage, targeted stream for precision application.

The acid formulations now include self-propagating reactions. The initial compound creates byproducts that serve as catalysts for further corrosion, meaning a small amount of spray can eat through a large volume of material over time without additional mana input. Metal structures can be compromised hours after the mage has left the area. The device can also synthesize non-lethal irritants—tear gas analogues, emetic compounds, sensory irritants—for crowd control or non-combat scenarios.

At Expert, Acid Spray is a weapon of strategic corrosion. The mage can destroy infrastructure, deny terrain, and eliminate armored targets with a single sustained stream. The spell's toxicity and persistence make it as much an environmental hazard as a direct weapon.`,

            master: `The spell runs at its Tier 2 optimum. The device maintains a library of hundreds of corrosive formulations and can synthesize any of them from trace environmental precursors in under half a second. The spray covers a twenty-five-meter cone with variable dispersion—from a pinpoint stream for surgical corrosion to a wide mist for area saturation—and sustains indefinitely on ambient chemical sources.

The master-level formulation includes compounds that corrode magically reinforced materials. While they cannot bypass high-tier defensive magic directly, they degrade the physical substrate that barriers are anchored to, causing barrier collapse through structural failure. The device manages all synthesis, targeting, and dispersal calculations autonomously, requiring only a target designation from the mage.

This is the ceiling of Acid Spray as a Tier 2 spell. The mage cannot dissolve "abstract barriers" or "conceptual constructs." The spell requires environmental precursors—it cannot synthesize from nothing—and its corrosive power has hard limits. Armor rated against extreme chemical attack will hold, and mages with dedicated corrosion-resistance magic can weather the spray with manageable damage. Master means the spell does what a Tier 2 chemical attack spell can do, as efficiently and flexibly as possible.`
        }
    },
    {
        id: 'petrification',
        name: 'Petrification',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device analyzes the mineral composition of the target surface—a floor, a wall, a piece of equipment—and accelerates the natural crystallization processes that would normally take geological timescales. Calcium, silica, and trace minerals in the environment are drawn into the target zone and forced into rapid lattice formation, encasing a roughly one-square-meter area in a crust of stone five to ten centimeters thick.

The process takes about three seconds to complete. The resulting stone is comparable to common limestone—dense enough to immobilize a human limb if it catches a hand or foot, but brittle enough to be shattered with a heavy blow or sustained prying. A full-body encasement requires multiple castings and a stationary target; an active combatant can break free from a single layer with effort.

At Beginner, Petrification is an anchor and restraint spell. The mage uses it to lock doors, seal hatches, trap a fleeing opponent's leg, or create a temporary barrier from surrounding mineral material. The stone is not exceptionally durable, but forming it where it was not a moment ago is tactically disruptive.`,

            apprentice: `The device targets broader areas—roughly three square meters—and accelerates crystallization to the point where full encasement takes under two seconds. The stone formed is denser, comparable to granite, with compressive strength sufficient to immobilize an adult human completely. Breaking free requires several seconds of focused effort with a heavy weapon or a strength-enhancement spell.

The spell can now draw minerals from substrates beyond the immediate surface. If the target is standing on concrete, the device pulls silica and calcium from deep within the slab, creating a stone shell that is anchored to the structural material beneath rather than sitting loosely on top. This makes the binding significantly harder to escape.

At Apprentice, Petrification is a reliable capture spell. A single casting can freeze an unarmored opponent in place for the duration of a firefight, and repeated castings can layer stone to the point where even enhanced strength is insufficient to break free. The spell also works on objects—siezing up a weapon's mechanism with crystal growth, sealing a vehicle door, or reinforcing a crumbling wall with fresh stone.`,

            adept: `The device achieves rapid, targeted crystallization across up to ten square meters. The stone formed is closer to quartzite—hard, dense, and resistant to chipping—with compressive strength exceeding most structural concretes. Crystallization time drops to under a second, making it combat-viable against moving targets.

The device now offers shape control. Instead of a crude shell, the mage can specify structural forms—pillars for support, walls for cover, spikes and caltrops across a floor, or manacles that bind specific limbs without encasing the whole body. The spell can also selectively petrify portions of a target: crystallizing the surface of a weapon to blunt it, sealing a visor shut with mineral crust, or immobilizing joints without restricting the torso.

At Adept, Petrification is a construction and denial tool as much as a restraint. The mage can raise a stone barrier in the time it takes to cast, lock down multiple targets in rapid succession, and reshape the battlefield with spontaneously-generated mineral structures that persist after the spell ends.`,

            expert: `The device pushes crystallization to near-instantaneous formation—a full human-sized encasement in under half a second across a fifteen-square-meter target zone. The stone formed is comparable to high-grade granite or compacted basalt, resistant to small-arms fire and requiring explosive ordinance to breach in a single attempt.

The spell now incorporates targeted petrification of living tissue. The device can induce rapid calcification of organic material—turning a limb to brittle stone from the inside out—though this requires sustained contact and a cooperative or restrained target; combat-speed calcification of a resisting opponent is possible but rarely complete before they break line-of-sight. The petrified tissue remains biologically viable for several hours, allowing for reversal if the mage or an ally possesses the appropriate counterspell.

At Expert, Petrification is a brutal control spell. The mage can turn terrain into a maze of stone, lock down entire squads, and threaten opponents with permanent crystallization if they do not surrender. The stone structures created are durable enough to serve as semi-permanent fortifications.`,

            master: `The spell operates at its Tier 3 design limit. Crystallization is instantaneous across a twenty-square-meter area, forming stone comparable to tempered structural ceramics—hard, dense, and highly resistant to both kinetic and thermal stress. Shape control is precise: the mage can form complex geometries, load-bearing arches, interlocking stone joints, and custom restraints tailored to the target's anatomy.

The calcification of living tissue is refined to the point where surface petrification can be applied in combat—crystallizing an opponent's armor to their body, sealing their weapon hand into a solid block, or creating a mineral shell that grows tighter as the victim struggles. The device autonomously calculates the optimal crystallization pattern for each target based on real-time biometric and material analysis.

This is the ceiling of Petrification as a Tier 3 spell. The mage cannot turn targets into "pure diamond" or "indestructible magical crystal." The stone formed is excellent but not unbreakable—sustained heavy weapons fire, high-tier offensive magic, or dedicated anti-material spells will breach it. Calcification of deep organs or the brain remains beyond the spell's resolution. Master means the spell has been pushed to the absolute limit of what Tier 3 mineral crystallization can achieve.`
        }
    },
    {
        id: 'sandstorm',
        name: 'Sandstorm',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device identifies loose particulate matter within thirty meters—sand, dust, gravel, even flour or ash if available—and agitates it into a sustained vortex roughly five meters across and eight meters high. The vortex spins fast enough to abrade exposed skin, clog unprotected air intakes, and reduce visibility to near-zero for anyone caught inside or looking into it.

The storm lasts for about twenty seconds before the device loses cohesion on the particulate cloud and the material settles. The mage must designate a ground-level anchor point, and the device maintains the vortex through continuous micro-adjustments to air pressure and mana-fed kinetic impulse. The spell requires a source of loose particulates—it cannot grind solid stone into sand on its own at this level.

At Beginner, Sandstorm is a soft-control and disruption spell. It will not kill anyone, but it buys time, breaks enemy coordination, and degrades exposed equipment. Optics get scratched, joints get fouled, and anyone without sealed eye protection is effectively blinded for the duration.`,

            apprentice: `The vortex expands to ten meters across and twelve meters high, with sustained duration of roughly forty-five seconds. The device now accelerates the particulates to velocities sufficient to strip paint, score glass, and cause deep dermal abrasion—prolonged exposure results in bleeding and significant soft-tissue damage. The storm also generates significant static electricity, with small lightning arcs crackling through the dust cloud and delivering mild shocks to anyone inside.

The device gains the ability to source its own particulates. If loose material is scarce, it directs the vortex to scrape against available surfaces—grinding asphalt, chewing through drywall, eroding exposed soil—to generate additional abrasive media on the fly. This makes the spell viable in environments without ready sand, though it takes longer to reach full density.

At Apprentice, Sandstorm becomes a genuine hazard. An unprotected opponent caught inside for the full duration will emerge bleeding from dozens of micro-abrasions, their equipment degraded, their visibility shot, and their coordination disrupted.`,

            adept: `The vortex covers a twenty-meter diameter and reaches twenty meters high, sustained for up to two minutes. Particulate velocity exceeds a hundred kilometers per hour at the outer bands and pushes a hundred and fifty at the core—enough to strip flesh from bone on sustained contact and erode light armor to uselessness within the storm's duration. The static discharge now carries sufficient current to stun unprotected targets and disrupt unshielded electronics within five meters of the storm's edge.

The device carves aggressively—concrete erodes, metal corrodes under the constant abrasive assault, and anything not bolted down becomes additional ammunition for the vortex. Visibility inside the storm is absolute zero; anyone without magical sensory augmentation is completely blind and deafened by the roar. The mage, linked to the device, perceives the storm's interior through pressure and particulate density mapping.

At Adept, Sandstorm is a squad-level area-denial weapon. The mage can lock down a street, a courtyard, or a building interior, grinding everything inside to varying degrees of destruction while allies operate freely outside the affected zone.`,

            expert: `The vortex pushes to thirty meters across with sustained duration limited only by mana and available particulate mass. Core wind speeds exceed two hundred kilometers per hour, and the abrasive load is dense enough to sandblast armor plate down to bare metal in under a minute. The static charge builds to lethal levels—lightning arcs within the storm can kill an unprotected human outright, and electromagnetic interference extends fifty meters beyond the storm's visible boundary.

The device now generates the storm from minimal starting material. Surface erosion is aggressive and automatic—the vortex will chew through concrete, asphalt, and topsoil to sustain itself, growing denser and more destructive the longer it is maintained. Multi-vortex control becomes possible: the mage can maintain two smaller storms simultaneously at separate anchor points, herding targets between them or blocking multiple approaches.

At Expert, Sandstorm is a strategic asset. The mage can level light structures, disable vehicle columns by stripping external components, and render entire sectors of a battlefield impassable and lethal for as long as mana allows.`,

            master: `The spell hits its Tier 3 ceiling. The vortex can cover a forty-meter diameter at peak expansion, with multi-layered bands of varying particulate density and velocity—a lethal core, a damaging middle band, and a disorienting outer haze. Wind speeds at the core push two hundred and fifty kilometers per hour, and the abrasive load is sufficient to erode structural concrete and strip military-grade armor to failure within sustained exposure.

The device manages multiple simultaneous storms, each independently targeted and modulated. The mage defines kill zones, denial zones, and safe corridors through the storm field. Particulate sourcing is fully automated—the device extracts material from any available surface, including the clothing and equipment of targets caught inside. The spell runs with minimal conscious oversight.

This is the ceiling of Sandstorm as a Tier 3 spell. The mage cannot summon continent-spanning dust storms or grind mountains to powder. The spell requires environmental material to operate—it cannot create particulates from nothing—and its destructive power, while severe, is bounded by the kinetic energy limits of Tier 3 computation. Master means the spell has been optimized to the absolute limit of what a Tier 3 sustained particulate vortex can achieve.`
        }
    },
    {
        id: 'stormcall',
        name: 'Stormcall',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device releases a stream of ionized mana particles into the lower atmosphere above the mage's position, seeding condensation nuclei and adjusting localized air pressure differentials within a radius of roughly two hundred meters. Over the next five to ten minutes—depending on existing atmospheric conditions—a thunderstorm cell forms, producing moderate rain, wind gusts up to fifty kilometers per hour, and occasional cloud-to-ground lightning strikes.

The mage has no direct control over individual lightning strikes at this level. The storm behaves as a natural weather phenomenon would—lightning strikes where electrical potential dictates, rain falls evenly, and wind gusts come and go. The mage's contribution is initiating and sustaining the cell; the device maintains the pressure and humidity conditions that keep the storm active for up to thirty minutes.

At Beginner, Stormcall is an environmental manipulation spell with significant setup time. It is most useful for strategic applications—denying air support, grounding aerial surveillance, or creating weather conditions favorable to the mage's other capabilities—rather than tactical combat. The storm is real, physical weather, and affects friend and foe equally.`,

            apprentice: `The device accelerates storm formation significantly—a mature thunderstorm cell develops in two to four minutes and covers a radius of roughly five hundred meters. Rain intensity increases to heavy downpour conditions, wind gusts reach eighty kilometers per hour, and lightning frequency doubles compared to a natural storm of similar size. The device can now nudge lightning strike probability: the mage cannot precisely aim a bolt, but they can make a general area significantly more likely to be struck.

The storm's duration extends to an hour, and the device actively maintains it against dissipating atmospheric conditions. The mage can also steer the cell—pushing it to drift in a chosen direction at a walking pace—allowing for limited tactical repositioning of the weather effect.

At Apprentice, Stormcall becomes a battlefield-shaping tool. The rain and wind degrade visibility, suppress infrared sensors, and make flight operations hazardous. The increased lightning density turns open terrain into a gamble for anyone forced to move through it.`,

            adept: `Storm formation time drops to roughly one minute, and the cell covers a kilometer radius. The device achieves partial lightning control—individual strikes can be directed to within ten meters of a designated point, and the mage can call down bolts on roughly five-second intervals during the storm's peak intensity. Wind speeds reach a hundred and twenty kilometers per hour—sufficient to knock over unbraced structures and make movement difficult for personnel on foot.

The storm now produces hail. The device seeds ice crystal formation in the upper cloud layers, generating hailstones up to golf-ball size that fall in concentrated bursts over designated sub-zones within the cell. The mage can hold the storm stationary or push it across terrain at running speed, and the duration extends to roughly two hours with sufficient mana.

At Adept, Stormcall is a direct-fire weapon wrapped in an environmental effect. The mage controls where lightning falls with tactical precision, uses wind to knock down opponents and deflect projectiles, and blankets specific positions in battering hail while leaving adjacent areas relatively calm.`,

            expert: `The device achieves near-immediate storm formation—a mature cell develops in under thirty seconds and expands to a two-kilometer radius within minutes. Lightning control is precise: the mage directs strikes to within a meter of a target point, at frequencies of one bolt every two to three seconds, with controllable amperage from non-lethal stun to direct-kill levels. Wind gusts exceed a hundred and sixty kilometers per hour—hurricane-force—and sustained winds can tear roofs off buildings.

The storm generates all standard severe-weather phenomena on command: torrential rain, blinding hail up to baseball size, dense fog banks, and localized microbursts of downward wind that flatten structures. The device also suppresses the storm's effect on designated friendly zones—allies within the storm's radius can operate in a bubble of calm air and clear visibility while hostiles a hundred meters away fight through a hurricane.

At Expert, the mage is a walking weather disaster. The spell can neutralize air operations, ground vehicles, and infantry formations across a small-town-scale area simultaneously, and the mage fine-tunes which sections of the battlefield get which punishment.`,

            master: `The spell runs at its Tier 4 ceiling. The device seeds and sustains a five-kilometer-radius thunderstorm cell within seconds of activation, with full control over all meteorological variables within that volume. Lightning strikes are aimable to within centimeters at rates exceeding one bolt per second, with variable yield from incapacitating to structure-destroying. Winds reach two hundred kilometers per hour in targeted microbursts. Hail, rain, fog, and temperature are all independently adjustable by sub-zone.

The storm functions as a persistent, shape-shifting weapon system. The mage can maintain it for as long as mana allows—typically several hours with a high-rank reactor—and the device handles all atmospheric calculations, electrical potential modeling, and sub-zone management without the mage's conscious input. The storm is fully selective: allies within the radius receive only the benefits of cloud cover and environmental confusion, none of the lethal effects.

This is the ceiling of Stormcall as a Tier 4 spell. The mage cannot summon hurricanes that span states, cannot generate tornados, and cannot alter global climate patterns. The storm is a localized atmospheric manipulation—devastating within its radius, negligible beyond it. Master means the spell has been refined to the point where a single mage can control the weather over a small-town area as a weapon system, but they remain a tactical asset, not a force of nature on a continental scale.`
        }
    },
    {
        id: 'gravity_well',
        name: 'Gravity Well',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device increases mana density in a spherical volume of space roughly two meters across, located at a point within fifteen meters of the mage. The elevated mana density creates a localized gravitational anomaly—gravity inside the sphere increases to approximately twice Earth-normal. Objects within the zone feel heavier, anyone standing inside is pressed down with an additional body weight's worth of force, and movement slows significantly.

The well persists for about ten seconds before the mana density equalizes and gravity snaps back to baseline. The mage must maintain line-of-sight to the anchor point, and the well is stationary once placed—it cannot be moved. The gravitational gradient at the well's edge is sharp; stepping one foot inside feels like stepping into deep mud, but the transition zone is just a few centimeters thick.

At Beginner, Gravity Well is an immobilization and disorientation tool. A target pinned at the center struggles to take a step, swings a weapon at half speed, and may fall if already off-balance. It will not crush anyone outright—twice normal gravity is uncomfortable and taxing, especially on the cardiovascular system, but not immediately fatal to a healthy adult.`,

            apprentice: `The well expands to four meters across with a gravitational multiplier of roughly three Gs at the core, tapering to 1.5 Gs at the edges. Range extends to twenty-five meters, and duration pushes to twenty seconds. The device now models the effect of the well on targets' skeletal and circulatory systems, adjusting the gradient to maximize physical stress—blood pools in the legs, the spine compresses, and the heart labors against the increased load.

The well can be anchored to a moving reference point—a vehicle, a running target, a thrown object—by having the device continuously recalculate the anchor position. This allows the mage to stick the well to a target and let the moving gravity field do the work of throwing them off-balance. Precision control at the edge of the well improves, though the gradient remains sharp.

At Apprentice, Gravity Well is a genuine threat. Three Gs sustained for twenty seconds causes blackout in most humans and can crack poorly maintained structures. Combatants caught inside are effectively neutralized while the well holds them.`,

            adept: `The well covers six meters across with a core gravity of five Gs and a gradual falloff that creates a wider zone of partial effect out to ten meters. Range extends to forty meters, and duration pushes to a full minute. The device actively counteracts the gravitational pull on the mage and designated allies within line-of-sight, so the mage's team can move freely while opponents struggle under crushing weight.

The device can now generate a repulsive gravity effect—an anti-well that pushes objects away from a central point with equivalent force. This allows the mage to hurl targets away from a position, catch incoming projectiles and reverse their trajectory, or create a shield bubble that deflects physical attacks through gravitational redirection.

At Adept, Gravity Well is a versatile force-manipulation spell. The mage can pin a squad in place, throw a vehicle off course, catch an artillery shell mid-flight and send it back, or clear a room by repulsing everyone inside against the walls with crushing force.`,

            expert: `The well reaches ten meters across with core gravity of eight to ten Gs—sufficient to crush unarmored humans against the ground and cause structural collapse in buildings not rated for seismic loads. Range extends to sixty meters, duration to several minutes, and the gravitational gradient is now programmable: the mage can specify exactly how force increases from the edge to the core, including shear zones where different parts of a target experience different pull strengths simultaneously, tearing them apart through differential gravity.

The repulsive variant can now be focused into a narrow beam—a gravity lance that punches through armor by suddenly multiplying the effective weight of a fist-sized impactor to several tons for a millisecond. The device manages all gravitational modeling autonomously, accounting for mass distribution, structural integrity, and biological tolerances of every object in the field.

At Expert, Gravity Well is an execution spell. The mage can crush a target where they stand, tear apart vehicles with gravitational shear, and redirect incoming fire with repulsive bursts. The spell approaches the destructive power of heavy artillery with the precision of a personal weapon.`,

            master: `The spell operates at its Tier 4 design limit. The well can cover a fifteen-meter sphere with core gravity peaking at approximately twelve Gs—the hard ceiling of what the device can generate through mana-density manipulation at this tier. Duration extends to as long as mana holds, range to a hundred meters, and the gradient is fully programmable in three dimensions with real-time adaptive modulation.

The mage can deploy multiple wells simultaneously—typically three to four of moderate strength or one full-power well—each independently targeted and configured. The repulsive and attractive variants are fully integrated, allowing the mage to juggle targets between crushing and throwing with fluid transitions. The device handles all calculations: mass distribution, biological stress limits, structural failure points, and collision trajectories for any object sent flying by the repulsive field.

This is the ceiling of Gravity Well as a Tier 4 spell. The mage cannot create event horizons, cannot generate gravitational singularities, and cannot affect gravity on a planetary scale. The spell manipulates local mana density to create localized gravity anomalies, and the force generated—while devastating at the personal-to-structural scale—has hard mathematical limits. Master means the spell has been pushed to the absolute edge of Tier 4 gravitational computation.`
        }
    },
    {
        id: 'magnetic_storm',
        name: 'Magnetic Storm',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device generates a rapidly oscillating magnetic field within a sphere roughly five meters across, centered on a point within fifteen meters of the mage. The field polarity flips hundreds of times per second, creating a chaotic electromagnetic environment that induces eddy currents in any conductive material caught within it. Unshielded electronics within the field experience immediate malfunction—displays scramble, circuits reset, and data storage may corrupt.

The field persists for about fifteen seconds and does not discriminate between friend and foe. Ferrous metal objects within the sphere experience erratic magnetic forces—a steel weapon jerks in the wielder's hand, loose nails and screws fly toward the field center, and ferrous debris becomes a hazard. The mage must maintain line-of-sight to the anchor point and cannot move the field once placed.

At Beginner, Magnetic Storm is a disruption tool against technologically-dependent opponents. It will not damage hardened military electronics, but civilian devices, unshielded communications gear, and electronic targeting systems become unreliable while the field is active. The physical pull on ferrous objects is more of a nuisance than a weapon—enough to disarm a careless opponent or foul a mechanism, not enough to rip a rifle from a firm grip.`,

            apprentice: `The field expands to ten meters across with a twenty-five-meter deployment range and thirty-second duration. The oscillations intensify—induced currents in conductive materials now reach levels sufficient to physically damage unshielded microelectronics through overvoltage, permanently frying circuits rather than temporarily disrupting them. The magnetic pull on ferrous metals increases to the point where small objects—knives, sidearms, ammunition clips—are torn from hands and tools.

The device begins modeling the magnetic susceptibility of targets in the area and directing more energetic oscillation toward the most vulnerable points. It can also generate a shaped-field variant, projecting the magnetic disruption in a cone rather than a sphere, concentrating the effect on a specific target group while sparing adjacent allies.

At Apprentice, Magnetic Storm is a dedicated anti-technology spell. It neutralizes drones, disables powered armor systems, fries communication networks, and turns any battlefield cluttered with ferrous debris into a hazard zone for the opposition.`,

            adept: `The field covers a twenty-meter sphere with a fifty-meter deployment range and up to a minute of sustained operation. The electromagnetic pulse generated by the oscillating field now rivals military-grade EMP weapons in localized effect—any unshielded electronic system within the field is permanently destroyed, hardened military systems may reset or suffer degraded performance, and even magically-shielded devices experience interference if their shielding is not specifically rated for electromagnetic attack.

Magnetic manipulation becomes weaponized. The device calculates force vectors for every ferrous object in the field and can coordinate their movement—hurling a cloud of loose metal at targets, ripping iron rebar from concrete to fling at speed, or pulling a vehicle off course by magnetizing its chassis and yanking it toward the field center. The mage can also use the field to deflect incoming ferrous projectiles, creating a defensive bubble against conventional firearms.

At Adept, Magnetic Storm reshapes the technological and physical battlefield simultaneously. The mage simultaneously fries enemy electronics, hurls metal debris as shrapnel, and protects themselves from return fire—all from a single sustained spell.`,

            expert: `The field reaches thirty meters across, deployable at a hundred meters, with duration limited only by mana. The EMP effect is refined to a surgical tool—the device can identify specific electronic signatures and target them for destruction while leaving friendly systems untouched, or generate multiple independent fields of varying intensity across the battlefield. The magnetic forces can now manipulate large objects: flipping armored vehicles, tearing structural steel from buildings, and stopping vehicle-mounted weapon systems by locking their ferrous components in place.

The device achieves precision magnetic mapping of the entire field of engagement. Every metal object—down to individual spent shell casings—is tracked, categorized, and available for manipulation. The mage can designate kill zones where every piece of metal becomes a hypervelocity projectile, and safe corridors where magnetic activity is suppressed to zero for allied movement.

At Expert, the mage is an electromagnetic god on the personal combat scale. Vehicles, weapons systems, communications networks, and physical infrastructure are all subject to the mage's control within the field radius.`,

            master: `The spell operates at its Tier 3 ceiling. The field can envelop a sixty-meter sphere at full intensity, with sub-fields of varying oscillation patterns layered within it for simultaneous disruption, deflection, and manipulation tasks. The EMP effect is fatal to any unshielded electronics and severely degrading to hardened military-grade systems. The magnetic forces can juggle multi-ton ferrous objects with precision—tearing a tank's turret off, collapsing a steel-frame structure, or catching a volley of incoming shells and redirecting them in flight.

The device maintains a real-time electromagnetic model of the entire engagement zone. Every current, every magnetic anomaly, every conductive object is catalogued and integrated into the spell's operation. The mage divides the field into independently-controlled sectors, each performing a different function—deflecting fire here, crushing targets there, scrambling electronics everywhere.

This is the ceiling of Magnetic Storm as a Tier 3 spell. The mage cannot generate planetary-scale electromagnetic pulses or manipulate non-ferrous materials. The spell affects magnetic and conductive targets within its range—brass, aluminum, and non-magnetic ceramics are largely unaffected. The field has finite energy and cannot sustain maximum-intensity operations in all sectors simultaneously. Master means the spell is the most refined, most efficient, most lethal version of Tier 3 electromagnetic manipulation possible.`
        }
    },
    {
        id: 'thermal_shift',
        name: 'Thermal Shift',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device establishes a thermal siphon between two points within ten meters of each other—one designated as the heat source, the other as the heat sink. Over roughly three seconds, thermal energy is extracted from the source and deposited into the sink, creating a thirty-to-forty-degree-Celsius temperature difference between the two points. A patch of ground might freeze solid while the air above it shimmers with released heat.

The transfer is linear and balanced—the device conserves total thermal energy within the local system, moving it rather than creating or destroying it. The mage can designate living targets as either source or sink, though living tissue resists rapid temperature change and the effect takes longer to manifest. The spell cannot freeze or ignite a human-sized target in a single cast; instead, it creates zones of uncomfortable or mildly hazardous temperature that accumulate over repeated applications.

At Beginner, Thermal Shift is an environmental shaping spell. The mage flash-freezes a puddle into treacherous ice while superheating a door handle to burn whoever touches it next, or drains heat from an opponent's weapon to make it too cold to hold while dumping that heat into the ground to create a steam hazard. The tactical applications are limited but creative.`,

            apprentice: `The device achieves a thermal differential of roughly sixty degrees Celsius between source and sink, with a transfer time of one to two seconds and range extending to twenty meters. The heat movement is now semi-selective—the mage can target specific surface areas on a larger object rather than the entire thing, freezing a door's lock while heating its handle, or draining heat from an opponent's faceplate while dumping it into their chest armor.

The device begins layering the spell with complementary effects. The sink point accumulates frost that makes surfaces slick and brittle; the source point glows faintly from thermal bloom and can ignite flammable materials that come into contact. A single casting can now cause second-degree frostbite or contact burns on exposed skin.

At Apprentice, Thermal Shift transitions from inconvenience to hazard. The mage can cripple a weapon by flash-freezing its action, create slippery or burning terrain in key chokepoints, or inflict debilitating thermal shock on an opponent's extremities in the middle of a firefight.`,

            adept: `The device generates thermal differentials of a hundred degrees Celsius or more, with transfer time under a second and range out to forty meters. The mage can maintain a continuous siphon between two points, creating a persistent thermal anomaly—a perpetually frozen patch and a continuously radiating heat source—that lasts as long as the spell is maintained.

The device now extracts or deposits heat in pulses rather than a steady flow. By cycling the transfer rapidly, the mage subjects a target to intense thermal shock as materials expand and contract violently. Metal fractures, ceramics shatter, and biological tissue suffers deep cryogenic or hyperthermic damage in seconds. The spell can also be deployed across multiple source-sink pairs simultaneously—up to three at once—allowing the mage to manage several thermal zones independently.

At Adept, Thermal Shift is a versatile damage-dealing spell. The mage freezes a target's leg solid while heating their weapon to unbearable temperatures, or saps the heat from a vehicle's engine block while dumping it into the fuel tank.`,

            expert: `The device achieves thermal differentials approaching two hundred degrees Celsius, with instantaneous transfer at ranges up to sixty meters. The continuous-siphon mode can maintain a patch of cryogenic ice at minus eighty degrees Celsius alongside a thermal bloom hot enough to melt lead, and the pulse mode can shatter structural steel through rapid expansion-contraction cycling.

The device now stores thermal energy in a mana-mediated buffer, breaking the conservation requirement. The mage can drain heat from an area and hold it in the buffer for later release, effectively cooling one zone now and heating another later rather than simultaneously. The buffer can accumulate energy from multiple extractions and release it as a single concentrated thermal burst—flash-boiling a target area after minutes of gradual heat theft from the environment.

At Expert, Thermal Shift is a tool of environmental dominance. The mage renders terrain lethal to traverse, destroys equipment through material stress, and can store and release enough thermal energy to mimic dedicated fire or ice spells with greater flexibility.`,

            master: `The spell operates at its Tier 2 optimum. Thermal differentials of two hundred and fifty degrees Celsius are achievable with sub-second transfer at ranges up to eighty meters. The mage can maintain up to five simultaneous source-sink pairs, each independently tuned and continuously modulated. The thermal buffer can store significant energy—enough to flash-boil a swimming pool or flash-freeze a small building—and the device manages all thermal transfer calculations, phase-change modeling, and material stress predictions autonomously.

The spell's precision is absolute. The mage can freeze the water inside a target's canteen without freezing the canteen itself, heat a weapon's firing pin to cook off a round while leaving the barrel at ambient temperature, or maintain a living target at exactly hypothermic levels without crossing into lethal territory.

This is the ceiling of Thermal Shift as a Tier 2 spell. The mage cannot achieve absolute zero or stellar-core temperatures. The spell moves and stores heat at the limits of Tier 2 computation and mana throughput—it is not a replacement for dedicated high-tier thermal magic. Master means the spell has been refined to the point where thermal energy is a fully controllable variable within the spell's defined range.`
        }
    },
    {
        id: 'entropic_decay',
        name: 'Entropic Decay',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device targets a non-living object or surface area of roughly one square meter and accelerates the natural entropic processes that govern material degradation. Metal oxidizes at a visibly accelerated rate—a clean steel surface develops rust in seconds. Wood dries, splits, and crumbles. Concrete spalls and erodes. Plastics become brittle and crack. The effect takes roughly ten seconds to produce noticeable degradation and thirty seconds for the material to lose significant structural integrity.

The spell is purely physical, affecting the molecular bonds and crystalline structures of inert matter. It has no effect on living tissue at this level—the device's entropic acceleration is tuned to inorganic chemistry and cannot yet navigate the complex homeostatic systems that keep biological materials in a state of dynamic equilibrium.

At Beginner, Entropic Decay is a sabotage and breaching spell. The mage rusts a lock until it crumbles, weakens a door frame until a kick splinters it, or degrades the structural bolts on a piece of equipment until it falls apart under its own weight. It is too slow to use in the heat of combat but invaluable for infiltration, demolition, and equipment denial.`,

            apprentice: `The device expands the effect to a three-square-meter area and accelerates entropic processes by a factor of several thousand—what would take decades of weathering occurs in five to ten seconds. Metals pit and buckle, concrete cracks through, polymers depolymerize into sticky residue, and complex mechanisms seize as lubricants break down and bearings corrode solid.

The spell gains limited biological application: the device can accelerate the degradation of dead tissue, keratin, and cellulose, allowing the mage to destroy organic materials like wood, leather, hair, and already-necrotic flesh. Living tissue remains protected by the body's active repair mechanisms, which the spell at this level cannot overcome. The device can sustain the effect on a designated zone for up to a minute, progressively destroying anything left within it.

At Apprentice, Entropic Decay becomes a combat-viable utility spell. The mage can collapse a section of floor beneath an opponent, destroy a weapon in their hands, or render a vehicle inoperative by degrading its engine components faster than it can be driven away.`,

            adept: `The effect covers ten square meters with a degradation factor in the tens of thousands—a steel beam loses structural integrity in under three seconds, reinforced concrete crumbles in five, and complex machinery fails almost instantly as every component simultaneously reaches end-of-life. The device can now target specific material types within the effect zone, leaving adjacent materials untouched—rusting only the iron fasteners holding a structure together, for example, or degrading only the polymer seals on a pressure vessel.

Biological application expands to include living tissue at a limited scale. The device can accelerate cellular senescence in small, localized areas—aging a patch of skin, weakening a single organ through accelerated wear, or inducing rapid necrosis in an open wound. This is not a precision-kill tool, but it makes the spell dangerous to living targets in a way earlier levels were not.

At Adept, Entropic Decay is a fearsome area-denial and anti-material weapon. The mage destroys infrastructure, annihilates equipment caches, and threatens living opponents with localized rapid aging that no armor can deflect.`,

            expert: `The device pushes the effect across thirty square meters with a degradation factor that turns steel to powder in under a second and reduces reinforced concrete to gravel in two. The entropic field can now persist without the mage's active maintenance—once seeded, it continues to degrade everything inside its boundary for several minutes, effectively turning the target zone into a radius of accelerated time where everything ages centuries per minute.

The biological effect matures. The device can induce rapid systemic aging in a targeted organism—cardiovascular decay, organ failure, degenerative neural degradation—though this requires sustained exposure of ten to fifteen seconds against a living, resisting target. The spell works by overwhelming the body's repair mechanisms with cascading cellular senescence; targets with active healing magic can resist or reverse the effect.

At Expert, Entropic Decay borders on an execution spell. The mage can destroy any mundane structure or vehicle in seconds, and can age a living opponent to death in under a minute. The field persists long enough to deny terrain for the duration of an engagement.`,

            master: `The spell runs at its Tier 4 design limit. The entropic field covers a fifty-square-meter radius with near-instantaneous degradation of any non-living material within it—steel evaporates as oxide dust, concrete sublimates into sand, complex machinery disintegrates into component slag. The field self-sustains for up to an hour after seeding, and the device can maintain multiple fields simultaneously.

The biological effect can now induce catastrophic organ failure in ten seconds of sustained exposure or targeted senescence of specific body systems in two to three seconds—aging a target's heart to end-stage failure, calcifying their arteries, or inducing neural degeneration that mimics decades of dementia in moments. Targets with active healing or life-extension magic can still resist, though the device continuously recalibrates to overcome those defenses.

This is the ceiling of Entropic Decay as a Tier 4 spell. The mage cannot accelerate the heat death of the universe or induce "conceptual decay" in abstract systems. The spell degrades physical materials and biological tissues by accelerating natural entropic processes—devastating at the tactical scale, but bounded by the energy and computational limits of Tier 4. Master means the spell is the most refined, most efficient, most destructive version of controlled entropy manipulation available at this tier.`
        }
    },
    {
        id: 'sonic_lance',
        name: 'Sonic Lance',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device generates a focused beam of coherent sound waves at frequencies between 20 and 50 kilohertz—ultrasonic, above the range of human hearing but physically potent enough to interact with solid matter. The beam is roughly five centimeters across at the aperture and maintains coherence for about eight meters before dispersion renders it harmless.

Targets struck by the beam experience intense vibration at the point of contact. Brittle materials—glass, ceramics, thin stone—shatter within a second or two of focused exposure. Organic tissue suffers deep heating and cavitation at the impact point, causing intense pain and subcutaneous bruising. The beam is invisible and nearly silent; the mage hears only a faint hum from the device itself as it generates the oscillating mana field that produces the sound waves.

At Beginner, Sonic Lance is a precision breaching and pain-compliance tool. The mage shatters a window, cracks a ceramic plate, or delivers a disabling burst of pain to an opponent's joint or pressure point. The range limitation makes it a close-quarters spell, and the narrow beam demands precise aim.`,

            apprentice: `The device extends the beam's coherent range to fifteen meters and increases its diameter to roughly ten centimeters. The operational frequency band widens—the device can now generate infrasonic frequencies down to 5 hertz, which induce nausea, disorientation, and in sustained exposure, damage to internal organs through resonant vibration of the abdominal and thoracic cavities.

Power output increases significantly. The beam now cracks concrete, pulverizes brick, and can shear through structural timber in seconds. Against living targets, a direct hit to the torso can rupture blood vessels and cause internal bleeding without breaking the skin. The device tunes the output frequency to the resonant frequency of the target material, maximizing destructive efficiency—each material has a frequency at which it vibrates apart most easily, and the device finds it automatically.

At Apprentice, Sonic Lance is a lethal weapon. The mage can kill an unarmored opponent with a direct hit and breach most common building materials with sustained application. The infrasonic mode provides a non-lethal option for crowd control and suppression.`,

            adept: `The beam extends to twenty-five meters with a diameter variable from a surgical centimeter to a destructive thirty centimeters. The device achieves multi-frequency output—layering ultrasonic cutting waves with infrasonic disruption waves in a single beam, simultaneously shattering a target's armor through high-frequency vibration while pulverizing the tissue beneath through low-frequency cavitation.

The device can now generate the beam from multiple virtual apertures simultaneously, splitting the output into two or three independent beams that strike different targets from different angles—all computed from the single physical device. The resonant-frequency matching is near-instantaneous, so the beam's effect on any given material is always optimized from the first millisecond of contact.

At Adept, Sonic Lance is a versatile engagement tool. The mage can engage multiple targets simultaneously, switch between lethal and non-lethal frequencies at will, and breach any material short of specialized acoustic-dampening armor.`,

            expert: `The beam reaches forty meters with full destructive power and can sustain coherent output for several seconds continuously. At maximum power, the ultrasonic carrier wave is overlaid with shock-front pulses that deliver impacts equivalent to sledgehammer blows at the target point, pulverizing material through mechanical trauma rather than just resonant vibration. The beam now propagates effectively through water and most solid media, meaning a target behind a thin wall can be engaged through the wall.

The device generates a defensive mode—a diffuse acoustic field around the mage that attenuates incoming high-speed projectiles by subjecting them to disruptive vibration, reducing their velocity and accuracy. The field is not a full shield but a significant dampener against gunfire and shrapnel.

At Expert, Sonic Lance is a primary weapon system. The mage can breach heavy armor, engage targets through cover, and defend against incoming fire—all through precisely modulated acoustic energy computed by the device in real time.`,

            master: `The spell runs at its Tier 2 optimum. The beam maintains full destructive coherence out to sixty meters with a diameter adjustable from a millimeter to half a meter. The device achieves perfect resonant-frequency matching for any target material within milliseconds of contact, and the multi-beam capability supports up to five independent beams operating at different frequencies against different targets simultaneously.

The defensive acoustic field extends to a five-meter-radius bubble around the mage, reducing the velocity of incoming projectiles by roughly forty percent and shattering brittle warheads before they reach detonation range. The device handles all frequency computation, beam-steering, target resonance analysis, and defensive field modulation autonomously.

This is the ceiling of Sonic Lance as a Tier 2 spell. The mage cannot generate city-leveling sonic booms or "resonate with the universe's fundamental frequency." The beam is physical sound—intense, precisely aimed, and computationally optimized—but it attenuates with distance, is blocked by vacuum, and can be countered by acoustic dampening and high-tier defensive magic. Master means the spell does everything a Tier 2 coherent-sound weapon can do, with no wasted energy and no unnecessary limitations.`
        }
    },
    {
        id: 'voltaic_cage',
        name: 'Voltaic Cage',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device deploys six anchor points of concentrated electrical potential around a two-meter-diameter area, positioned at a height of roughly two meters. The anchors generate continuous arc discharges between each other, forming a cage of visible, crackling lightning that encloses the target zone. The arcs carry roughly 10,000 volts at a low amperage designed to incapacitate rather than kill.

Anyone attempting to cross the cage boundary completes the circuit and receives a full discharge—painful, convulsive, enough to cause loss of motor control for several seconds. Touching the cage repeatedly or attempting to force through it results in escalating neuromuscular disruption, and a determined push-through may succeed but leaves the escapee stunned and twitching for fifteen to twenty seconds afterward.

The cage persists for about thirty seconds. The device monitors the integrity of the six anchor points continuously; if one is disrupted—by grounding, a directed countercharge, or sufficient physical force—the entire cage collapses. The mage must be within fifteen meters of the cage to maintain the anchor field.

At Beginner, Voltaic Cage is a capture-and-contain spell. It immobilizes a single target, blocks a doorway or corridor, or creates a temporary safe zone that the mage's allies can position themselves within—allies can cross into and out of the cage freely because the device registers their bioelectric signatures and only discharges against unregistered targets.`,

            apprentice: `The cage expands to four meters across with eight anchor points forming a denser lattice of arcs. Voltage increases to roughly 50,000 volts at a higher amperage—contact now causes severe burns at the point of contact, full-body muscular seizure, and potential cardiac arrhythmia in targets with pre-existing conditions. The arcs are sustained continuously with no flickering, making the cage visually opaque and impossible to slip through between discharges.

Duration extends to a full minute, and the mage can deploy the cage at ranges up to thirty meters. The device now actively pursues escape attempts—if a target moves toward the boundary, the anchors on that side intensify their output and extend arcs outward to meet them, making contact unavoidable. The cage can also be configured as a flat wall rather than a full enclosure, useful for blocking corridors or funneling movement.

At Apprentice, Voltaic Cage is a lethal-level barrier. A healthy adult can survive one or two contacts with the arcs, but sustained contact or multiple crossings will cause fatal electrothermal damage. The cage holds most human-scale targets reliably for its duration.`,

            adept: `The device generates a ten-anchor cage up to six meters in diameter with sustained voltage of roughly 200,000 volts. The arcs are white-hot, generating enough thermal bloom to ignite flammable materials within a meter of the cage boundary. Contact results in deep, charred electrical burns and near-instantaneous incapacitation; a second contact is almost certainly fatal.

The cage gains offensive functionality. The device can contract the anchor points inward, shrinking the cage's diameter at a walking pace and forcing a trapped target to either make contact with the arcs or be crushed into an ever-smaller space. The cage can also be deployed around the mage and a small group of allies as a defensive perimeter, and the device can differentiate between up to twenty registered friendlies.

At Adept, Voltaic Cage serves as both prison and execution chamber. The mage traps targets, forces surrender through the threat of contraction, or eliminates them through sustained enclosure. The cage's bright, roaring presence also serves as a powerful psychological deterrent.`,

            expert: `The cage reaches eight meters across with fourteen anchor points forming a nearly solid dome of arcing lightning. Voltage pushes into the 500,000-volt range—comparable to a natural lightning strike—with amperage sufficient to flash-vaporize conductive materials on contact. The thermal bloom alone can cause second-degree burns at two meters' distance, and anything crossing the cage threshold is destroyed; escape is not survivable without significant magical protection.

The contraction rate becomes variable. The device can snap the cage shut at combat speed, crushing targets inward while simultaneously electrocuting them. Multiple cages can be maintained simultaneously—typically up to three smaller cages or one full-size cage—each independently operated. The defensive perimeter mode now includes a counterattack function where the cage arcs outward at approaching hostiles.

At Expert, Voltaic Cage is a zone-control spell that also kills what it contains. The mage clears a room by caging and contracting on hostiles, seals off avenues of approach, and maintains a nearly impenetrable defensive cordon around allies.`,

            master: `The spell operates at its Tier 3 ceiling. The cage can encompass a ten-meter-diameter area with twenty anchor points generating a nearly opaque dome of lightning at voltages exceeding one million volts. Death is instantaneous on contact; even proximity to the cage without touching it causes painful static discharge and singed hair. The cage persists for as long as mana flows, effectively indefinitely for a mage with a mid-to-high-rank reactor.

The device can deploy up to five cages simultaneously, each independently configured—some as holding pens, some as lethal enclosures, some as defensive perimeters. Cage contraction can be sudden or gradual, and the device handles all anchor maintenance, bioelectric threat discrimination, and multi-cage coordination autonomously.

This is the ceiling of Voltaic Cage as a Tier 3 spell. The mage cannot generate city-scale containment fields or trap incorporeal entities. The cage is composed of physical electricity and is subject to electrical engineering constraints—it can be grounded, discharged, or circumvented by sufficiently insulated targets. Master means the spell has been pushed to the limit of what Tier 3 electrical containment can achieve: a near-perfect personal-scale prison and defensive emplacement that is as lethal as it is reliable.`
        }
    },
    {
        id: 'tectonic_pulse',
        name: 'Tectonic Pulse',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `The device computes a subsurface vibrational model of the target area—a zone roughly twenty meters in diameter within a hundred meters of the mage—and generates a calibrated shockwave that propagates downward through the mage's feet or device contact with the ground. The wave travels through soil and substrate at seismic velocities, and upon reaching the target zone, it produces a localized tremor equivalent to a magnitude 3.0 earthquake.

The effect is brief but violent. The ground shakes hard enough to knock standing personnel off their feet, crack shallow foundations, and dislodge unsecured objects. Small fissures up to a finger's width may open in loose soil, and underground infrastructure—pipes, shallow conduits—may rupture if already compromised. The pulse is a single event; the mage must recast for another tremor, which requires the device to recompute the subsurface model accounting for the changes caused by the first pulse.

At Beginner, Tectonic Pulse is a destabilization and area-denial spell. It disrupts formations, collapses unstable structures, and creates terrain hazards that force opponents to reposition or risk falling into newly-opened gaps. The damage is not catastrophic, but the psychological impact of having the earth violently shake beneath one's feet is significant.`,

            apprentice: `The device generates a more powerful vibrational wave, producing a magnitude 4.5-equivalent tremor across a thirty-meter zone at ranges up to two hundred meters. The ground heaves visibly, and fissures up to half a meter wide and several meters deep tear through soil and thin pavement. Structures with shallow foundations—single-story buildings, light fortifications—suffer cracking and partial collapse if already in poor repair.

The pulse can now be sustained as a rolling wave rather than a single spike. The device generates successive aftershocks at one-to-two-second intervals, maintaining ground instability for up to fifteen seconds and preventing anyone in the target zone from regaining their footing. The mage can also direct the pulse's energy along a linear path, creating a shockwave that travels like a ripple through the ground toward a specific target rather than radiating omnidirectionally.

At Apprentice, Tectonic Pulse graduates from disruption to destruction. The mage can collapse a small building by shaking its foundation apart, tear open the ground beneath a vehicle to trap it, or create a zone of unstable terrain that no one can cross safely on foot.`,

            adept: `The device delivers a magnitude 5.5-equivalent seismic event across a fifty-meter zone at ranges up to three hundred meters. The ground cracks violently—fissures a meter wide and several meters deep tear across the surface, swallowing vehicles and personnel. Buildings not specifically engineered for seismic loads suffer catastrophic structural failure within seconds. Underground infrastructure—gas mains, water lines, electrical conduits—is shredded.

The device now achieves targeted subsurface resonance. By matching the pulse frequency to the vibrational characteristics of specific underground features, the mage can direct the energy where it will do the most damage: collapsing a bunker by resonating its foundation slab, opening a sinkhole under a specific structure, or severing underground power and communication lines without damaging adjacent infrastructure.

At Adept, Tectonic Pulse is a strategic demolition tool. The mage levels fortified positions, destroys logistical infrastructure, and reshapes terrain at the tactical scale. The spell requires significant mana, and each recalibration for follow-up strikes takes several seconds, but the destruction inflicted in a single well-placed pulse is substantial.`,

            expert: `The device produces a magnitude 6.5-equivalent earthquake across an eighty-meter zone at ranges up to five hundred meters. The ground behaves like a liquid—rippling in visible waves, opening chasms several meters wide, and throwing debris into the air. Multi-story buildings collapse. Reinforced bunkers crack open. Roads and bridges fail catastrophically, and liquefaction turns solid ground into a slurry that swallows everything resting on it.

The subsurface resonance targeting is refined to near-surgical precision. The mage can collapse a specific room in a building while leaving adjacent rooms intact, or sever a single support pillar in an underground parking structure to cause a controlled cave-in. The device maintains a continuous seismic model of the engagement zone, updating in real time as the destruction progresses, and can generate rolling aftershock sequences that last for minutes from a single casting.

At Expert, the mage is a localized geological event. A single pulse can render a city block uninhabitable, destroy hardened military positions, and reshape the landscape itself.`,

            master: `The spell operates at its Tier 5 design limit. The device generates a magnitude 7.0-equivalent seismic event—comparable to a major natural earthquake—across a hundred-meter zone at ranges up to one kilometer. The ground fractures into a maze of chasms, any structure not explicitly engineered for seismic survival is destroyed, and the shockwave propagates beyond the primary zone as a damaging tremor that cracks foundations and breaks windows for several hundred meters in all directions.

The device achieves perfect subsurface modeling and resonance targeting. The mage can cause precisely the destruction they intend—collapsing a specific bunker, opening a defensive trench line, or triggering a controlled landslide—with minimal collateral damage outside the target parameters. The spell can be sustained as a rolling earthquake sequence lasting several minutes, and the device manages all vibrational calculations, geological modeling, and energy distribution autonomously.

This is the ceiling of Tectonic Pulse as a Tier 5 spell. The mage is a personal-scale earthquake generator, devastating within their radius of effect. They cannot trigger actual tectonic events—shifting continental plates, causing volcanic eruptions, or generating tsunamis. The spell is a localized vibrational weapon, and while its destructive power is immense, it is bounded by the mana throughput and computational capacity of Tier 5. Master means the spell has been pushed to the hard limit of what seismic manipulation at this tier can achieve.`
        }
    }
];
// Merge batch2 into spellData
if (typeof spellData !== "undefined" && spellData.elemental) {
    spellData.elemental = spellData.elemental.concat(elementalSpellsBatch2);
}

